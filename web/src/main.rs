mod params;

use crate::params::{EnvironmentParameterProvider, ParameterProvider, ProcessorParams};
use chrono::Duration;
use gtfsrt_processor_core::models::OrchestratorParams;
use gtfsrt_processor_core::orchestrator::{default_aws_config, Orchestrator};
use poem::http::StatusCode;
use poem::{get, handler, listener::TcpListener, Result, Route, Server};

async fn run(params: ProcessorParams) -> Result<()> {
    let aws_config = default_aws_config().await;
    let orchestrator = Orchestrator::default(
        &aws_config,
        None,
        params.bucket_upload.as_str(),
        params.bucket_trip_index.as_str()
    );
    orchestrator.run(
        &OrchestratorParams {
            ttl: params.ttl.map(|t| Duration::seconds(t)),
            gtfsrt_url: params.gtfsrt_url,
            index_key: params.key_trip_index,
            upload_workers: None,
            stale_threshold: None
        }
    ).await.map_err(|e| poem::Error::from_string(
        format!("Failed to complete work due to '{}'", e),
        StatusCode::INTERNAL_SERVER_ERROR
    ))?;
    Ok(())
}

async fn params() -> Result<ProcessorParams> {
    EnvironmentParameterProvider::new().get().await
        .map_err(|e| poem::Error::from_string(
            format!("Failed to parse params due to '{}'", e),
            StatusCode::INTERNAL_SERVER_ERROR
        ))
}

#[handler]
async fn exec_sync() -> Result<()> {
    run(params().await?).await?;
    Ok(())
}

#[handler]
async fn exec_background() -> Result<()> {
    let params = params().await?;
    tokio::spawn(async move {
        let result = run(params).await;
        if let Err(e) = result {
            eprintln!("Error in background worker {}", e)
        }
    });
    Ok(())
}

#[tokio::main]
async fn main() -> Result<(), std::io::Error> {
    let app = Route::new()
        .at("/exec-sync", get(exec_sync))
        .at("/exec-background", get(exec_background));
    Server::new(TcpListener::bind("0.0.0.0:3669"))
        .run(app)
        .await
}
