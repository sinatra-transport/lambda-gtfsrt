mod params;
mod live;

use crate::params::{EnvironmentParameterProvider, ParameterProvider, ProcessorParams};
use poem::http::StatusCode;
use poem::{get, handler, listener::TcpListener, Result, Route, Server};

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
