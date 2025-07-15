use crate::libs::gtfs_realtime::FeedMessage;
use crate::libs::trip_index::TripIndex;
use crate::secrets::Secrets;
use aws_sdk_s3 as s3;
use std::error::Error;
use prost::Message;

const USERNAME_KEY: &str = "/sinatra/transportcanberra/username";
const PASSWORD_KEY: &str = "/sinatra/transportcanberra/password";

#[async_trait::async_trait]
pub trait GtfsRtFetcher {
    async fn get_gtfs_rt(
        &self,
        url: &str
    ) -> Result<FeedMessage, Box<dyn Error>>;
}

#[async_trait::async_trait]
pub trait TripIndexFetcher {
    async fn get_trip_index(
        &self,
        key: &str
    ) -> Result<TripIndex, Box<dyn Error>>;
}

#[derive(Clone)]
pub struct WebGtfsRtFetcher<S: Secrets + Send + Sync> {
    reqwest: reqwest::Client,
    secrets: S
}

impl<S: Secrets + Send + Sync> WebGtfsRtFetcher<S> {
    pub fn new(reqwest: reqwest::Client, secrets: S) -> Self {
        Self { reqwest, secrets }
    }
}

#[async_trait::async_trait]
impl<S> GtfsRtFetcher for WebGtfsRtFetcher<S>
where
    S: Secrets + Send + Sync
{
    async fn get_gtfs_rt(&self, url: &str) -> Result<FeedMessage, Box<dyn Error>> {
        let username = self.secrets.secret(USERNAME_KEY).await?;
        let password = self.secrets.secret(PASSWORD_KEY).await?;
        println!("Fetching gtfsrt from {}", url);
        let result = self.reqwest
            .get(url)
            .basic_auth(
                username,
                Some(password)
            )
            .send().await?
            .bytes().await?;

        Ok(FeedMessage::decode(result)?)
    }
}

#[derive(Clone)]
pub struct S3TripIndexFetcher {
    bucket: String,
    s3: s3::Client,
}

impl S3TripIndexFetcher {
    pub fn new(bucket: String, s3: s3::Client) -> Self {
        Self { s3, bucket }
    }
}

#[async_trait::async_trait]
impl TripIndexFetcher for S3TripIndexFetcher {
    async fn get_trip_index(&self, key: &str) -> Result<TripIndex, Box<dyn Error>> {
        println!("Fetching trip-index from bucket {} with key {}", self.bucket, key);
        let result = self.s3.get_object()
            .bucket(self.bucket.as_str())
            .key(key)
            .send().await?
            .body
            .collect().await?;

        Ok(TripIndex::decode(result)?)
    }
}

#[async_trait::async_trait]
pub trait Transporter {
    async fn fetch_and_decode(
        &self,
        url: &str,
        key: &str
    ) -> Result<(FeedMessage, TripIndex), Box<dyn Error>>;
}

pub struct DefaultTransporter<F1, F2> {
    gtfs_rt: F1,
    trip_index: F2
}

impl<F1, F2> DefaultTransporter<F1, F2>
where
    F1: GtfsRtFetcher + Send + Sync,
    F2: TripIndexFetcher + Send + Sync,
{
    pub fn new(gtfs_rt: F1, trip_index: F2) -> Self {
        Self {
            gtfs_rt,
            trip_index
        }
    }
}

#[async_trait::async_trait]
impl<F1, F2> Transporter for DefaultTransporter<F1, F2>
where
    F1: GtfsRtFetcher + Send + Sync,
    F2: TripIndexFetcher + Send + Sync,
{
    async fn fetch_and_decode(
        &self,
        url: &str,
        key: &str
    ) -> Result<(FeedMessage, TripIndex), Box<dyn Error>> {
        let feed = self.gtfs_rt.get_gtfs_rt(url).await?;
        let index = self.trip_index.get_trip_index(key).await?;
        Ok((feed, index))
    }
}