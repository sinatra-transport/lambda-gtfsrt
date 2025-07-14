mod secrets;
mod build;
mod uploader;

use chrono::Duration;
use gtfsrt_processor_core::models::OrchestratorParams;
use gtfsrt_processor_core::orchestrator::default_aws_config;
use lambda_runtime::{service_fn, tracing, Error, LambdaEvent};
use serde::Deserialize;
use crate::build::build;

#[derive(Deserialize)]
struct Request {
    bucket_upload: String,
    bucket_trip_index: String,
    key_trip_index: String,
    gtfsrt_url: String,
    ttl: Option<i64>,
    upload_workers: Option<u8>,
    stale_threshold: Option<i64>,
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    tracing::init_default_subscriber();

    let func = service_fn(my_handler);
    lambda_runtime::run(func).await?;
    Ok(())
}

pub(crate) async fn my_handler(event: LambdaEvent<Request>) -> Result<(), Error> {
    let args = event.payload;
    let aws_config = default_aws_config().await;
    let orchestrator = build(
        &args,
        &aws_config
    );
    orchestrator.run(
        &OrchestratorParams {
            ttl: args.ttl.map(|t| Duration::seconds(t)),
            gtfsrt_url: args.gtfsrt_url,
            index_key: args.key_trip_index,
            upload_workers: args.upload_workers,
            stale_threshold: args.stale_threshold
        }
    ).await.map_err(|e| Error::from(
        format!("Failed due to {}", e))
    )?;
    Ok(())
}