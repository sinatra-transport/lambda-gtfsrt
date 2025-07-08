use crate::secrets::LayerParameterStoreSecrets;
use crate::Request;
use gtfsrt_processor_core::fetcher::{DefaultTransporter, S3TripIndexFetcher, WebGtfsRtFetcher};
use gtfsrt_processor_core::generator::route_generator::RouteGenerator;
use gtfsrt_processor_core::generator::stop_generator::StopGenerator;
use gtfsrt_processor_core::orchestrator::Orchestrator;
use gtfsrt_processor_core::uploader::S3Uploader;

pub fn build(
    args: &Request,
    aws_config: &aws_config::SdkConfig
) -> Orchestrator {
    let reqwest_client = reqwest::Client::new();
    Orchestrator::new(
        vec![
            Box::new(RouteGenerator::new()),
            Box::new(StopGenerator::new())
        ],
        Box::new(DefaultTransporter::new(
            WebGtfsRtFetcher::new(
                reqwest_client.clone(),
                LayerParameterStoreSecrets::new(reqwest_client)
            ),
            S3TripIndexFetcher::new(
                args.bucket_trip_index.to_string(),
                aws_sdk_s3::Client::new(aws_config)
            )
        )),
        Box::new(S3Uploader::new(
            &*args.bucket_upload,
            aws_sdk_s3::Client::new(aws_config)
        )),
    )
}