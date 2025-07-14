use crate::libs::gtfs_realtime::FeedMessage;
use crate::libs::trip_index::TripIndex;
use crate::models::{FileSpec, OrchestratorParams};

pub trait Generator {
    fn generate(
        &self,
        feed: &FeedMessage,
        index: &TripIndex,
        params: &OrchestratorParams
    ) -> Vec<FileSpec>;

    fn single(
        &self,
        feed: &FeedMessage,
        index: &TripIndex,
        params: &OrchestratorParams,
        id: &str
    ) -> Vec<u8>;
}