use std::env::VarError;
use std::num::ParseIntError;
use poem::http::StatusCode;
use thiserror::Error;

#[derive(Clone, Debug)]
pub struct ProcessorParams {
    pub bucket_trip_index: String,
    pub key_trip_index: String,
    pub gtfsrt_url: String,
    pub ttl: Option<i64>
}

#[async_trait::async_trait]
pub trait ParameterProvider {
    async fn get(&self) -> Result<ProcessorParams, ParameterProviderError>;
}

pub struct EnvironmentParameterProvider;

#[async_trait::async_trait]
impl ParameterProvider for EnvironmentParameterProvider {
    async fn get(&self) -> Result<ProcessorParams, ParameterProviderError> {
        Ok(ProcessorParams {
            bucket_trip_index: std::env::var("TRIP_INDEX_BUCKET")?,
            key_trip_index: std::env::var("TRIP_INDEX_KEY")?,
            gtfsrt_url: std::env::var("GTFSRT_URL")?,
            ttl: std::env::var("TTL").ok().map(|t|t.parse::<i64>()).transpose()?,
        })
    }
}

impl EnvironmentParameterProvider {
    pub fn new() -> Self {
        Self {}
    }
}

#[derive(Debug, Error, Clone)]
pub enum ParameterProviderError {
    #[error("Missing required environment variable")]
    MissingParameter(),
    #[error("Invalid environment variable (because {0})")]
    InvalidParameter(String),
}

impl From<VarError> for ParameterProviderError {
    fn from(value: VarError) -> Self {
        match value {
            VarError::NotPresent => ParameterProviderError::MissingParameter(),
            VarError::NotUnicode(_) => ParameterProviderError::InvalidParameter(
                "Not Unicode".to_string()
            )
        }
    }
}

impl From<ParseIntError> for ParameterProviderError {
    fn from(_: ParseIntError) -> Self {
        ParameterProviderError::InvalidParameter("ParseIntError".to_string())
    }
}

impl From<ParameterProviderError> for std::io::Error {
    fn from(value: ParameterProviderError) -> Self {
        std::io::Error::other(value)
    }
}

impl From<ParameterProviderError> for poem::Error {
    fn from(value: ParameterProviderError) -> Self {
        poem::Error::from_string(
            format!("Failed to parse params due to '{}'", value),
            StatusCode::INTERNAL_SERVER_ERROR
        )
    }
}