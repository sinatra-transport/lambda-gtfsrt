pub mod gtfs_realtime {
    include!(concat!(env!("OUT_DIR"), "/transit_realtime.rs"));
}

pub mod output {
    include!(concat!(env!("OUT_DIR"), "/gtfs_api.rs"));
}

pub mod trip_index {
    include!(concat!(env!("OUT_DIR"), "/trip_index.rs"));
}