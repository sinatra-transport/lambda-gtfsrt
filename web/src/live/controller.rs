use crate::live::repository::{LiveRepository, LiveRepositoryImpl};
use gtfsrt_processor_core::fetcher::{S3TripIndexFetcher, WebGtfsRtFetcher};
use gtfsrt_processor_core::secrets::ParameterStoreSecrets;
use poem::web::{Data, Path};
use poem::{handler, Response, Result};

const MIME_TYPE: &str = "application/x-protobuf; proto=cl.emilym.gtfs_api.RealtimeEndpoint";

#[handler]
pub async fn get_live_stop(
    Path(id): Path<String>,
    live_repository: Data<&LiveRepositoryImpl<
        S3TripIndexFetcher,
        WebGtfsRtFetcher<ParameterStoreSecrets>
    >>
) -> Result<Response> {
    Ok(Response::builder()
        .content_type(MIME_TYPE)
        .body(live_repository.get_stop_live(id.as_str()).await?))
}

#[handler]
pub async fn get_live_route(
    Path(id): Path<String>,
    live_repository: Data<&LiveRepositoryImpl<
        S3TripIndexFetcher,
        WebGtfsRtFetcher<ParameterStoreSecrets>
    >>
) -> Result<Response> {
    Ok(Response::builder()
        .content_type(MIME_TYPE)
        .body(live_repository.get_route_live(id.as_str()).await?))
}