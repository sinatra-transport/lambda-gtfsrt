use chrono::Duration;
use clap::Parser;
use gtfsrt_processor_core::models::OrchestratorParams;
use gtfsrt_processor_core::orchestrator::{default_aws_config, Orchestrator};

#[derive(Parser, Debug)]
#[command(version, about, long_about = None)]
struct Args {
    #[arg(long)]
    bucket_upload: String,
    #[arg(long)]
    bucket_trip_index: String,
    #[arg(long)]
    key_trip_index: String,
    #[arg(long)]
    gtfsrt_url: String,
    #[arg(long)]
    ttl: Option<i64>,
    #[arg(long)]
    upload_workers: Option<u8>,
    #[arg(long)]
    stale_threshold: Option<i64>,
}

#[tokio::main]
async fn main() {
    let args = Args::parse();

    let aws_config = default_aws_config().await;
    let orchestrator = Orchestrator::default(
        &aws_config,
        None,
        args.bucket_upload.as_str(),
        args.bucket_trip_index.as_str()
    );
    orchestrator.run(
        &OrchestratorParams {
            ttl: args.ttl.map(|t| Duration::seconds(t)),
            gtfsrt_url: args.gtfsrt_url,
            index_key: args.key_trip_index,
            upload_workers: args.upload_workers,
            stale_threshold: args.stale_threshold
        }
    ).await.unwrap();
}
