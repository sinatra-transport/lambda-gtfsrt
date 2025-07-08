use crate::libs::gtfs_realtime::{FeedHeader, TripUpdate};
use chrono::Utc;

pub trait Stale {
    fn stale(&self, threshold: i64) -> bool;
}

impl Stale for FeedHeader {
    fn stale(&self, threshold: i64) -> bool {
        is_stale(self.timestamp.as_ref(), threshold)
    }
}

impl Stale for TripUpdate {
    fn stale(&self, threshold: i64) -> bool {
        is_stale(self.timestamp.as_ref(), threshold)
    }
}

fn is_stale(timestamp: Option<&u64>, threshold: i64) -> bool {
    if timestamp.is_none() { return true; }
    // The unsafe unwrap is fine since the Utc::now() would be the problem before then
    ((timestamp.unwrap().clone() as i64) + threshold) <= Utc::now().timestamp()
}