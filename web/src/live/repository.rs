use crate::params::{ParameterProviderError, ProcessorParams};
use gtfsrt_processor_core::fetcher::{GtfsRtFetcher, TripIndexFetcher};
use gtfsrt_processor_core::libs::gtfs_realtime::FeedMessage;
use gtfsrt_processor_core::libs::trip_index::TripIndex;
use moka::future::Cache;
use std::error::Error;
use std::sync::Arc;
use chrono::Duration;
use gtfsrt_processor_core::generator::base::Generator;
use gtfsrt_processor_core::generator::route_generator::RouteGenerator;
use gtfsrt_processor_core::generator::stop_generator::StopGenerator;
use gtfsrt_processor_core::models::OrchestratorParams;
use poem::http::StatusCode;
use thiserror::Error;

pub trait LiveRepository {
    async fn get_stop_live(&self, id: &str) -> Result<Vec<u8>, LiveRepositoryError>;
    async fn get_route_live(&self, id: &str) -> Result<Vec<u8>, LiveRepositoryError>;
}

#[derive(Clone)]
pub struct LiveRepositoryImpl<TIF, GRF>
where
    TIF: TripIndexFetcher,
    GRF: GtfsRtFetcher
{
    trip_index_fetcher: TIF,
    gtfs_rt_fetcher: GRF,
    params: ProcessorParams,
    trip_index_cache: Cache<u8, TripIndex>,
    gtfs_rt_cache: Cache<u8, FeedMessage>,
}

impl <TIF, GRF> LiveRepository for LiveRepositoryImpl<TIF, GRF>
where
    TIF: TripIndexFetcher,
    GRF: GtfsRtFetcher
{
    async fn get_stop_live(&self, id: &str) -> Result<Vec<u8>, LiveRepositoryError> {
        Ok(StopGenerator::new().single(
            &self.get_gtfs_rt().await?,
            &self.get_trip_index().await?,
            &self.orchestrator_params(),
            id
        ))
    }

    async fn get_route_live(&self, id: &str) -> Result<Vec<u8>, LiveRepositoryError> {
        Ok(RouteGenerator::new().single(
            &self.get_gtfs_rt().await?,
            &self.get_trip_index().await?,
            &self.orchestrator_params(),
            id
        ))
    }
}

impl <TIF, GRF> LiveRepositoryImpl<TIF, GRF>
where
    TIF: TripIndexFetcher,
    GRF: GtfsRtFetcher
{

    pub fn new(
        trip_index_fetcher: TIF,
        gtfs_rt_fetcher: GRF,
        params: ProcessorParams,
    ) -> Self {
        Self {
            trip_index_fetcher,
            gtfs_rt_fetcher,
            params,
            trip_index_cache: Cache::new(1),
            gtfs_rt_cache: Cache::new(1)
        }
    }
    
    fn orchestrator_params(&self) -> OrchestratorParams {
        OrchestratorParams {
            ttl: self.params.ttl.map(|t| Duration::seconds(t)),
            gtfsrt_url: "".to_string(),
            index_key: "".to_string(),
            upload_workers: None,
            stale_threshold: None
        }
    }

    async fn get_trip_index(&self) -> Result<TripIndex, LiveRepositoryError> {
        self.trip_index_cache.try_get_with(0, async {
            self.trip_index_fetcher
                .get_trip_index(&self.params.key_trip_index)
                .await
                .map_err(|e| WrappedError::from(e))
        }).await.map_err(LiveRepositoryError::CacheFetch)
    }

    async fn get_gtfs_rt(&self) -> Result<FeedMessage, LiveRepositoryError> {
        self.gtfs_rt_cache.try_get_with(0, async {
            self.gtfs_rt_fetcher
                .get_gtfs_rt(&self.params.gtfsrt_url)
                .await
                .map_err(|e| WrappedError::from(e))
        }).await.map_err(LiveRepositoryError::CacheFetch)
    }
}

#[derive(Debug, Error, Clone)]
pub enum LiveRepositoryError {
    #[error("Cache fetch error: {0}")]
    CacheFetch(#[from] Arc<WrappedError>),
}

#[derive(Debug, Error, Clone)]
#[error("{message}")]
struct WrappedError {
    pub message: String,
}

impl From<Box<dyn Error>> for WrappedError {
    fn from(err: Box<dyn Error>) -> Self {
        Self {
            message: err.to_string(),
        }
    }
}

impl From<LiveRepositoryError> for poem::Error {
    fn from(value: LiveRepositoryError) -> Self {
        poem::Error::from_string(
            format!("{}", value),
            StatusCode::INTERNAL_SERVER_ERROR
        )
    }
}