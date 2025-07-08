use chrono::Duration;

#[derive(Clone, Debug)]
pub struct FileSpec {
    pub key: String,
    pub contents: Vec<u8>,
    pub mime_type: String
}

#[derive(Clone, Debug)]
pub struct OrchestratorParams {
    pub ttl: Option<Duration>,
    pub gtfsrt_url: String,
    pub index_key: String,
    pub upload_workers: Option<u8>,
    pub stale_threshold: Option<i64>
}