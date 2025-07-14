use crate::generator::base::Generator;
use crate::generator::generic::GenericGenerator;
use crate::libs::gtfs_realtime::FeedMessage;
use crate::libs::trip_index::TripIndex;
use crate::models::{FileSpec, OrchestratorParams};

pub struct RouteGenerator;
impl RouteGenerator {
    pub fn new() -> Self {
        Self {}
    }
}
impl Generator for RouteGenerator {
    fn generate(&self, feed: &FeedMessage, index: &TripIndex, params: &OrchestratorParams) -> Vec<FileSpec> {
        println!("Generating routes");
        GenericGenerator {
            prefix: "route",
            extract: |i| &i.trips_by_route,
            is_stop_id: false
        }.generate(feed, index, params)
    }

    fn single(&self, feed: &FeedMessage, index: &TripIndex, params: &OrchestratorParams, id: &str) -> Vec<u8> {
        GenericGenerator {
            prefix: "route",
            extract: |i| &i.trips_by_route,
            is_stop_id: false
        }.single(feed, index, params, id)
    }
}