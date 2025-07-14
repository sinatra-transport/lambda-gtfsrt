use crate::generator::base::Generator;
use crate::generator::generic::GenericGenerator;
use crate::libs::gtfs_realtime::FeedMessage;
use crate::libs::trip_index::TripIndex;
use crate::models::{FileSpec, OrchestratorParams};

pub struct StopGenerator;
impl StopGenerator {
    pub fn new() -> Self {
        StopGenerator {}
    }
}
impl Generator for StopGenerator {
    fn generate(&self, feed: &FeedMessage, index: &TripIndex, params: &OrchestratorParams) -> Vec<FileSpec> {
        println!("Generating stops");
        GenericGenerator {
            prefix: "stop",
            extract: |i| &i.trips_by_stop,
            is_stop_id: true
        }.generate(feed, index, params)
    }

    fn single(&self, feed: &FeedMessage, index: &TripIndex, params: &OrchestratorParams, id: &str) -> Vec<u8> {
        GenericGenerator {
            prefix: "stop",
            extract: |i| &i.trips_by_route,
            is_stop_id: true
        }.single(feed, index, params, id)
    }
}