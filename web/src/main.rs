mod params;
mod live;
mod dependencies;

use crate::params::{EnvironmentParameterProvider, ParameterProvider};
use poem::{get, listener::TcpListener, middleware, EndpointExt, Result, Route, Server};

#[tokio::main]
async fn main() -> Result<(), std::io::Error> {
    let params = EnvironmentParameterProvider::new().get().await?;;

    let app = Route::new()
        .at("/canberra/v1/route/:id/live.pb", get(live::controller::get_live_route))
        .at("/canberra/v1/stop/:id/live.pb", get(live::controller::get_live_stop))
        .with(middleware::AddData::new(dependencies::live_repository(params).await));
    Server::new(TcpListener::bind("0.0.0.0:3669"))
        .run(app)
        .await
}
