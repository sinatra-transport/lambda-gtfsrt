use crate::live::repository::LiveRepositoryImpl;
use crate::params::ProcessorParams;
use gtfsrt_processor_core::fetcher::{S3TripIndexFetcher, WebGtfsRtFetcher};
use gtfsrt_processor_core::orchestrator::default_aws_config;
use gtfsrt_processor_core::secrets::ParameterStoreSecrets;

pub async fn live_repository(params: ProcessorParams) -> LiveRepositoryImpl<
    S3TripIndexFetcher, 
    WebGtfsRtFetcher<ParameterStoreSecrets>
> {
    let config = aws_config().await;
    let s3 = aws_sdk_s3(&config);
    let ssm = aws_sdk_ssm(&config);
    let reqwest = reqwest_client();
    LiveRepositoryImpl::new(
        S3TripIndexFetcher::new(
            params.bucket_trip_index.clone(),
            s3
        ),
        WebGtfsRtFetcher::new(
            reqwest,
            ParameterStoreSecrets::new(ssm)
        ),
        params
    )
}

fn reqwest_client() -> reqwest::Client {
    reqwest::Client::new()
}

fn aws_sdk_s3(
    config: &aws_config::SdkConfig
) -> aws_sdk_s3::Client {
    aws_sdk_s3::Client::new(config)
}

fn aws_sdk_ssm(
    config: &aws_config::SdkConfig
) -> aws_sdk_ssm::Client {
    aws_sdk_ssm::Client::new(config)
}

async fn aws_config() -> aws_config::SdkConfig {
    default_aws_config().await
}