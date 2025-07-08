use std::cmp::max;
use std::error::Error;
use aws_config::BehaviorVersion;
use aws_config::meta::region::RegionProviderChain;
use crate::fetcher::{DefaultTransporter, S3TripIndexFetcher, Transporter, WebGtfsRtFetcher};
use crate::generator::base::Generator;
use crate::generator::route_generator::RouteGenerator;
use crate::generator::stop_generator::StopGenerator;
use crate::models::OrchestratorParams;
use crate::secrets::ParameterStoreSecrets;
use crate::uploader::{S3Uploader, Uploader};

const DEFAULT_UPLOAD_WORKERS: u8 = 3;

pub struct Orchestrator
{
    generators: Vec<Box<dyn Generator + Send + Sync>>,
    transport: Box<dyn Transporter + Send + Sync>,
    uploader: Box<dyn Uploader + Send + Sync>
}

impl Orchestrator
{
    pub fn default(
        aws_config: &aws_config::SdkConfig,
        reqwest_client: Option<reqwest::Client>,
        upload_bucket: &str,
        trip_index_bucket: &str,
    ) -> Self {
        let reqwest_client = reqwest_client.unwrap_or_else(reqwest::Client::new);
        Self::new(
            vec![
                Box::new(RouteGenerator::new()),
                Box::new(StopGenerator::new())
            ],
            Box::new(DefaultTransporter::new(
                WebGtfsRtFetcher::new(
                    reqwest_client.clone(),
                    ParameterStoreSecrets::new(aws_sdk_ssm::Client::new(aws_config))
                ),
                S3TripIndexFetcher::new(
                    trip_index_bucket.to_string(),
                    aws_sdk_s3::Client::new(aws_config)
                )
            )),
            Box::new(S3Uploader::new(
                upload_bucket,
                aws_sdk_s3::Client::new(aws_config)
            )),
        )
    }

    pub fn new(generators: Vec<Box<dyn Generator + Send + Sync>>, transport: Box<dyn Transporter + Send + Sync>, uploader: Box<dyn Uploader + Send + Sync>) -> Self {
        Self { generators, transport, uploader }
    }

    pub async fn run(&self, params: &OrchestratorParams) -> Result<(), Box<dyn Error>> {
        let (feed_message, trip_index) = self.transport.fetch_and_decode(
            params.gtfsrt_url.as_str(), params.index_key.as_str()
        ).await?;

        let files = self.generators.iter()
            .flat_map(|g| g.generate(
                &feed_message,
                &trip_index,
                params
            ))
            .collect::<Vec<_>>();

        if files.len() == 0 {
            println!("No files to upload, exiting");
            return Ok(())
        }

        println!("Uploading {} files", files.len());

        let workers = max(
            params.upload_workers.unwrap_or(DEFAULT_UPLOAD_WORKERS) as usize,
            1
        );
        let grouped = files.chunks(files.len() / workers);

        let results = futures::future::join_all(
            grouped.map(|g| {
                let uploader = self.uploader.clone();
                let group = g.to_vec();

                tokio::spawn(async move {
                    futures::future::join_all(
                        group.into_iter().map(|f| uploader.upload(f))
                    ).await
                })
            })
        ).await;

        for (i, result) in results.into_iter().enumerate() {
            if let Err(e) = result {
                eprintln!("Upload group #{i} failed: {e}");
                return Err(Box::new(e));
            }
        }

        Ok(())
    }
}

pub async fn default_aws_config() -> aws_config::SdkConfig {
    let region_provider = RegionProviderChain::default_provider().or_else("ap-southeast-2");
    aws_config::defaults(BehaviorVersion::latest())
        .region(region_provider)
        .load()
        .await
}
