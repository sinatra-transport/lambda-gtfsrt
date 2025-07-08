use std::error::Error;

#[derive(Clone, Debug)]
pub struct ProcessorParams {
    pub bucket_upload: String,
    pub bucket_trip_index: String,
    pub key_trip_index: String,
    pub gtfsrt_url: String,
    pub ttl: Option<i64>,
}

#[async_trait::async_trait]
pub trait ParameterProvider {
    async fn get(&self) -> Result<ProcessorParams, Box<dyn Error>>;
}

pub struct EnvironmentParameterProvider;

#[async_trait::async_trait]
impl ParameterProvider for EnvironmentParameterProvider {
    async fn get(&self) -> Result<ProcessorParams, Box<dyn Error>> {
        Ok(ProcessorParams {
            bucket_upload: std::env::var("UPLOAD_BUCKET")?,
            bucket_trip_index: std::env::var("TRIP_INDEX_BUCKET")?,
            key_trip_index: std::env::var("TRIP_INDEX_KEY")?,
            gtfsrt_url: std::env::var("GTFSRT_URL")?,
            ttl: std::env::var("TTL").ok().map(|t|t.parse::<i64>()).transpose()?
        })
    }
}

impl EnvironmentParameterProvider {
    pub fn new() -> Self {
        Self {}
    }
}