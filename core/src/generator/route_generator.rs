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
        }.generate(feed, index, params)
    }
}