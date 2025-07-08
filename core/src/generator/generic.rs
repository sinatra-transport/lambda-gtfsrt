use crate::generator::base::Generator;
use crate::generator::stale::Stale;
use crate::libs::gtfs_realtime::{FeedEntity, FeedMessage, TripUpdate};
use crate::libs::output::{RealtimeEndpoint, RealtimeUpdate};
use crate::libs::trip_index::{AssociatedTrips, TripIndex};
use crate::models::{FileSpec, OrchestratorParams};
use chrono::Utc;
use prost::Message;

const DEFAULT_STALE_DATA_THRESHOLD: i64 = 10 * 60i64;
const MIME_TYPE: &str = "application/x-protobuf; proto=cl.emilym.gtfs_api.RealtimeEndpoint";

pub struct GenericGenerator<'a, K, F>
where
    F: Fn(&TripIndex) -> &std::collections::HashMap<K, AssociatedTrips> + 'a,
    K: std::fmt::Display + Eq + std::hash::Hash,
{
    pub(crate) prefix: &'a str,
    pub(crate) extract: F,
}

impl<'a, K, F> Generator for GenericGenerator<'a, K, F>
where
    F: Fn(&TripIndex) -> &std::collections::HashMap<K, AssociatedTrips> + 'a,
    K: std::fmt::Display + Eq + std::hash::Hash,
{
    fn generate(&self, feed: &FeedMessage, index: &TripIndex, params: &OrchestratorParams) -> Vec<FileSpec> {
        let stale_threshold = params.stale_threshold.unwrap_or(DEFAULT_STALE_DATA_THRESHOLD);

        let mut out = Vec::new();
        let map = (self.extract)(index);
        let entities: Vec<&FeedEntity> = feed.entity.iter().filter(|e| {
            !e.is_deleted.unwrap_or(false) &&
            e.trip_update.as_ref()
                .and_then(|tu| { tu.trip.trip_id.as_ref() })
                .is_some()
        }).collect();

        for (id, trips) in map {
            let contents = if feed.header.stale(stale_threshold) {
                println!("Feed is stale (timestamp = {:?})", feed.header.timestamp);
                RealtimeEndpoint {
                    updates: vec![],
                    expire_timestamp: self.expire(params)
                }
            } else {
                self.create_message(
                    entities.as_slice(),
                    params,
                    trips.trip_id.as_slice(),
                    stale_threshold
                )
            }.encode_to_vec();
            let key = format!("canberra/v1/{}/{}/live.pb", self.prefix, id);

            out.push(FileSpec {
                key,
                contents,
                mime_type: MIME_TYPE.to_string(),
            });
        }

        out
    }
}

impl<'a, K, F> GenericGenerator<'a, K, F>
where
    F: Fn(&TripIndex) -> &std::collections::HashMap<K, AssociatedTrips> + 'a,
    K: std::fmt::Display + Eq + std::hash::Hash
{
    fn expire(&self, params: &OrchestratorParams) -> Option<String> {
        params.ttl.map(
            |ttl| (Utc::now() + ttl).to_rfc3339()
        )
    }

    fn create_message(
        &self,
        entities: &[&FeedEntity],
        params: &OrchestratorParams,
        trip_ids: &[String],
        stale_threshold: i64
    ) -> RealtimeEndpoint {
        let updates = entities.iter().filter(
            |e| trip_ids.contains(
                e.trip_update.as_ref().unwrap().trip.trip_id.as_ref().unwrap()
            )
        ).map(|e| {
            if e.trip_update.is_none() { return None }
            let update: &TripUpdate = e.trip_update.as_ref().unwrap();

            if update.stale(stale_threshold) { return None }

            let delay = update.delay.filter(|&d| d != 0).or_else(|| {
                update.stop_time_update.first().and_then(|stu| {
                    stu.arrival.and_then(|a| a.delay).or(
                        stu.departure.and_then(|d| d.delay)
                    )
                })
            });
            if delay.is_none() { return None }

            Some(RealtimeUpdate {
                delay,
                trip_id: update.trip.trip_id.as_ref().unwrap().clone()
            })
        }).flatten().collect();

        RealtimeEndpoint {
            updates,
            expire_timestamp: self.expire(params)
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::libs::gtfs_realtime::trip_update::{StopTimeEvent, StopTimeUpdate};
    use crate::libs::gtfs_realtime::{FeedEntity, FeedHeader, TripDescriptor, TripUpdate};
    use crate::libs::trip_index::{AssociatedTrips, TripIndex};
    use chrono::Duration;
    use prost::Message;
    use std::collections::HashMap;

    fn mock_extract(trip_index: &TripIndex) -> &HashMap<String, AssociatedTrips> {
        &trip_index.trips_by_stop
    }

    fn mock_feed_message(valid: bool, stale: bool) -> FeedMessage {
        let trip_id = "trip123".to_string();

        let update = TripUpdate {
            trip: TripDescriptor {
                trip_id: Some(trip_id.clone()),
                ..TripDescriptor::default()
            },
            stop_time_update: vec![
                StopTimeUpdate {
                    arrival: Some(StopTimeEvent {
                        delay: Some(100),
                        ..StopTimeEvent::default()
                    }),
                    ..StopTimeUpdate::default()
                }
            ],
            delay: None,
            timestamp: if stale {
                Some((Utc::now() - Duration::days(30)).timestamp() as u64)
            } else {
                Some((Utc::now() + Duration::days(1)).timestamp() as u64)
            },
            ..TripUpdate::default()
        };

        FeedMessage {
            header: FeedHeader {
                timestamp: if stale {
                    Some((Utc::now() - Duration::days(30)).timestamp() as u64)
                } else {
                    Some((Utc::now() + Duration::days(1)).timestamp() as u64)
                },
                ..FeedHeader::default()
            },
            entity: vec![FeedEntity {
                id: "e1".to_string(),
                is_deleted: Some(false),
                trip_update: if valid { Some(update) } else { None },
                ..FeedEntity::default()
            }],
        }
    }

    fn mock_feed_message_with_entities(entities: Vec<FeedEntity>, stale: bool) -> FeedMessage {
        FeedMessage {
            header: FeedHeader {
                timestamp: if stale {
                    Some((Utc::now() - Duration::days(30)).timestamp() as u64)
                } else {
                    Some((Utc::now() + Duration::days(1)).timestamp() as u64)
                },
                ..FeedHeader::default()
            },
            entity: entities,
        }
    }

    fn mock_trip_index(trip_ids: Vec<String>) -> TripIndex {
        let mut index = TripIndex::default();

        index.trips_by_stop = HashMap::from([("mock_key".to_string(), AssociatedTrips {
            trip_id: trip_ids
        })]);

        index
    }

    fn mock_trip_index_multiple_stops(stops: Vec<(&str, Vec<String>)>) -> TripIndex {
        let mut index = TripIndex::default();

        for (stop_id, trip_ids) in stops {
            index.trips_by_stop.insert(stop_id.to_string(), AssociatedTrips {
                trip_id: trip_ids
            });
        }

        index
    }

    fn mock_params(stale_threshold: Option<i64>, ttl_secs: Option<i64>) -> OrchestratorParams {
        OrchestratorParams {
            ttl: ttl_secs.map(|s| Duration::seconds(s)),
            gtfsrt_url: "mock_url".to_string(),
            index_key: "mock_key".to_string(),
            upload_workers: None,
            stale_threshold,
        }
    }

    fn create_trip_update(trip_id: &str, delay: Option<i32>, stale: bool) -> TripUpdate {
        TripUpdate {
            trip: TripDescriptor {
                trip_id: Some(trip_id.to_string()),
                ..TripDescriptor::default()
            },
            stop_time_update: vec![
                StopTimeUpdate {
                    arrival: Some(StopTimeEvent {
                        delay,
                        ..StopTimeEvent::default()
                    }),
                    ..StopTimeUpdate::default()
                }
            ],
            delay,
            timestamp: if stale {
                Some((Utc::now() - Duration::days(30)).timestamp() as u64)
            } else {
                Some((Utc::now() + Duration::days(1)).timestamp() as u64)
            },
            ..TripUpdate::default()
        }
    }

    fn create_feed_entity(id: &str, trip_update: Option<TripUpdate>, is_deleted: Option<bool>) -> FeedEntity {
        FeedEntity {
            id: id.to_string(),
            is_deleted,
            trip_update,
            ..FeedEntity::default()
        }
    }

    #[test]
    fn test_generate_with_valid_data() {
        let feed = mock_feed_message(true, false);
        let trip_ids = vec!["trip123".to_string()];
        let index = mock_trip_index(trip_ids);

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(Some(10 * 60), Some(300));

        let result = generator.generate(&feed, &index, &params);

        assert_eq!(result.len(), 1);
        assert_eq!(result[0].key, "canberra/v1/test/mock_key/live.pb");
        assert_eq!(result[0].mime_type, MIME_TYPE);

        // Check it's actually encoded
        let parsed = RealtimeEndpoint::decode(&*result[0].contents);
        assert!(parsed.is_ok());
        let parsed = parsed.unwrap();
        assert_eq!(parsed.updates.len(), 1);
        assert_eq!(parsed.updates[0].trip_id, "trip123");
        assert_eq!(parsed.updates[0].delay, Some(100));
    }

    #[test]
    fn test_generate_with_stale_feed() {
        let feed = mock_feed_message(true, true); // stale = true
        let trip_ids = vec!["trip123".to_string()];
        let index = mock_trip_index(trip_ids);

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(Some(10 * 60), None);

        let result = generator.generate(&feed, &index, &params);

        assert_eq!(result.len(), 1);

        let parsed = RealtimeEndpoint::decode(&*result[0].contents);
        assert!(parsed.is_ok());
        let parsed = parsed.unwrap();
        assert!(parsed.updates.is_empty());
    }

    #[test]
    fn test_generate_with_deleted_entities() {
        let entities = vec![
            create_feed_entity("e1", Some(create_trip_update("trip123", Some(100), false)), Some(true)), // deleted
            create_feed_entity("e2", Some(create_trip_update("trip456", Some(200), false)), Some(false)), // not deleted
        ];
        let feed = mock_feed_message_with_entities(entities, false);
        let trip_ids = vec!["trip123".to_string(), "trip456".to_string()];
        let index = mock_trip_index(trip_ids);

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(Some(10 * 60), None);
        let result = generator.generate(&feed, &index, &params);

        let parsed = RealtimeEndpoint::decode(&*result[0].contents).unwrap();
        assert_eq!(parsed.updates.len(), 1);
        assert_eq!(parsed.updates[0].trip_id, "trip456");
    }

    #[test]
    fn test_generate_with_no_trip_id() {
        let mut update = create_trip_update("trip123", Some(100), false);
        update.trip.trip_id = None; // Remove trip_id

        let entities = vec![
            create_feed_entity("e1", Some(update), Some(false)),
        ];
        let feed = mock_feed_message_with_entities(entities, false);
        let trip_ids = vec!["trip123".to_string()];
        let index = mock_trip_index(trip_ids);

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(Some(10 * 60), None);
        let result = generator.generate(&feed, &index, &params);

        let parsed = RealtimeEndpoint::decode(&*result[0].contents).unwrap();
        assert!(parsed.updates.is_empty());
    }

    #[test]
    fn test_generate_with_stale_trip_updates() {
        let entities = vec![
            create_feed_entity("e1", Some(create_trip_update("trip123", Some(100), true)), Some(false)), // stale
            create_feed_entity("e2", Some(create_trip_update("trip456", Some(200), false)), Some(false)), // fresh
        ];
        let feed = mock_feed_message_with_entities(entities, false);
        let trip_ids = vec!["trip123".to_string(), "trip456".to_string()];
        let index = mock_trip_index(trip_ids);

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(Some(10 * 60), None);
        let result = generator.generate(&feed, &index, &params);

        let parsed = RealtimeEndpoint::decode(&*result[0].contents).unwrap();
        assert_eq!(parsed.updates.len(), 1);
        assert_eq!(parsed.updates[0].trip_id, "trip456");
    }

    #[test]
    fn test_generate_with_departure_delay_fallback() {
        let mut update = create_trip_update("trip123", None, false);
        update.stop_time_update = vec![
            StopTimeUpdate {
                arrival: None,
                departure: Some(StopTimeEvent {
                    delay: Some(150),
                    ..StopTimeEvent::default()
                }),
                ..StopTimeUpdate::default()
            }
        ];

        let entities = vec![
            create_feed_entity("e1", Some(update), Some(false)),
        ];
        let feed = mock_feed_message_with_entities(entities, false);
        let trip_ids = vec!["trip123".to_string()];
        let index = mock_trip_index(trip_ids);

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(Some(10 * 60), None);
        let result = generator.generate(&feed, &index, &params);

        let parsed = RealtimeEndpoint::decode(&*result[0].contents).unwrap();
        assert_eq!(parsed.updates.len(), 1);
        assert_eq!(parsed.updates[0].trip_id, "trip123");
        assert_eq!(parsed.updates[0].delay, Some(150));
    }

    #[test]
    fn test_generate_with_no_delay_data() {
        let mut update = create_trip_update("trip123", None, false);
        update.stop_time_update = vec![
            StopTimeUpdate {
                arrival: None,
                departure: None,
                ..StopTimeUpdate::default()
            }
        ];

        let entities = vec![
            create_feed_entity("e1", Some(update), Some(false)),
        ];
        let feed = mock_feed_message_with_entities(entities, false);
        let trip_ids = vec!["trip123".to_string()];
        let index = mock_trip_index(trip_ids);

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(Some(10 * 60), None);
        let result = generator.generate(&feed, &index, &params);

        let parsed = RealtimeEndpoint::decode(&*result[0].contents).unwrap();
        assert!(parsed.updates.is_empty());
    }

    #[test]
    fn test_generate_with_multiple_stops() {
        let stops = vec![
            ("stop1", vec!["trip123".to_string()]),
            ("stop2", vec!["trip456".to_string(), "trip789".to_string()]),
        ];
        let index = mock_trip_index_multiple_stops(stops);

        let entities = vec![
            create_feed_entity("e1", Some(create_trip_update("trip123", Some(100), false)), Some(false)),
            create_feed_entity("e2", Some(create_trip_update("trip456", Some(200), false)), Some(false)),
            create_feed_entity("e3", Some(create_trip_update("trip789", Some(300), false)), Some(false)),
        ];
        let feed = mock_feed_message_with_entities(entities, false);

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(Some(10 * 60), None);
        let result = generator.generate(&feed, &index, &params);

        assert_eq!(result.len(), 2);

        // Check that we have files for both stops
        let keys: Vec<&str> = result.iter().map(|f| f.key.as_str()).collect();
        assert!(keys.contains(&"canberra/v1/test/stop1/live.pb"));
        assert!(keys.contains(&"canberra/v1/test/stop2/live.pb"));
    }

    #[test]
    fn test_generate_with_unmatched_trip_ids() {
        let entities = vec![
            create_feed_entity("e1", Some(create_trip_update("trip123", Some(100), false)), Some(false)),
            create_feed_entity("e2", Some(create_trip_update("trip999", Some(200), false)), Some(false)), // not in index
        ];
        let feed = mock_feed_message_with_entities(entities, false);
        let trip_ids = vec!["trip123".to_string()];
        let index = mock_trip_index(trip_ids);

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(Some(10 * 60), None);
        let result = generator.generate(&feed, &index, &params);

        let parsed = RealtimeEndpoint::decode(&*result[0].contents).unwrap();
        assert_eq!(parsed.updates.len(), 1);
        assert_eq!(parsed.updates[0].trip_id, "trip123");
    }

    #[test]
    fn test_generate_with_empty_feed() {
        let feed = FeedMessage {
            header: FeedHeader {
                timestamp: Some(Utc::now().timestamp() as u64),
                ..FeedHeader::default()
            },
            entity: vec![],
        };
        let trip_ids = vec!["trip123".to_string()];
        let index = mock_trip_index(trip_ids);

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(Some(10 * 60), None);
        let result = generator.generate(&feed, &index, &params);

        let parsed = RealtimeEndpoint::decode(&*result[0].contents).unwrap();
        assert!(parsed.updates.is_empty());
    }

    #[test]
    fn test_generate_with_empty_index() {
        let entities = vec![
            create_feed_entity("e1", Some(create_trip_update("trip123", Some(100), false)), Some(false)),
        ];
        let feed = mock_feed_message_with_entities(entities, false);
        let index = TripIndex::default(); // Empty index

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(Some(10 * 60), None);
        let result = generator.generate(&feed, &index, &params);

        assert!(result.is_empty());
    }

    #[test]
    fn test_generate_with_custom_stale_threshold() {
        let entities = vec![
            create_feed_entity("e1", Some(create_trip_update("trip123", Some(100), false)), Some(false)),
        ];
        let feed = mock_feed_message_with_entities(entities, false);
        let trip_ids = vec!["trip123".to_string()];
        let index = mock_trip_index(trip_ids);

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(Some(5 * 60), None); // 5 minutes threshold
        let result = generator.generate(&feed, &index, &params);

        assert_eq!(result.len(), 1);
        let parsed = RealtimeEndpoint::decode(&*result[0].contents).unwrap();
        assert_eq!(parsed.updates.len(), 1);
    }

    #[test]
    fn test_generate_with_default_stale_threshold() {
        let entities = vec![
            create_feed_entity("e1", Some(create_trip_update("trip123", Some(100), false)), Some(false)),
        ];
        let feed = mock_feed_message_with_entities(entities, false);
        let trip_ids = vec!["trip123".to_string()];
        let index = mock_trip_index(trip_ids);

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(None, None); // Use default threshold
        let result = generator.generate(&feed, &index, &params);

        assert_eq!(result.len(), 1);
        let parsed = RealtimeEndpoint::decode(&*result[0].contents).unwrap();
        assert_eq!(parsed.updates.len(), 1);
    }

    #[test]
    fn test_generate_with_ttl() {
        let entities = vec![
            create_feed_entity("e1", Some(create_trip_update("trip123", Some(100), false)), Some(false)),
        ];
        let feed = mock_feed_message_with_entities(entities, false);
        let trip_ids = vec!["trip123".to_string()];
        let index = mock_trip_index(trip_ids);

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(Some(10 * 60), Some(300)); // 5 minutes TTL
        let result = generator.generate(&feed, &index, &params);

        let parsed = RealtimeEndpoint::decode(&*result[0].contents).unwrap();
        assert!(parsed.expire_timestamp.is_some());

        // Check that the timestamp is in the future
        let expire_time = chrono::DateTime::parse_from_rfc3339(&parsed.expire_timestamp.unwrap()).unwrap();
        assert!(expire_time > Utc::now());
    }

    #[test]
    fn test_generate_without_ttl() {
        let entities = vec![
            create_feed_entity("e1", Some(create_trip_update("trip123", Some(100), false)), Some(false)),
        ];
        let feed = mock_feed_message_with_entities(entities, false);
        let trip_ids = vec!["trip123".to_string()];
        let index = mock_trip_index(trip_ids);

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(Some(10 * 60), None); // No TTL
        let result = generator.generate(&feed, &index, &params);

        let parsed = RealtimeEndpoint::decode(&*result[0].contents).unwrap();
        assert!(parsed.expire_timestamp.is_none());
    }

    #[test]
    fn test_generate_key_format() {
        let entities = vec![
            create_feed_entity("e1", Some(create_trip_update("trip123", Some(100), false)), Some(false)),
        ];
        let feed = mock_feed_message_with_entities(entities, false);
        let trip_ids = vec!["trip123".to_string()];
        let index = mock_trip_index(trip_ids);

        let generator = GenericGenerator {
            prefix: "custom_prefix",
            extract: mock_extract,
        };

        let params = mock_params(Some(10 * 60), None);
        let result = generator.generate(&feed, &index, &params);

        assert_eq!(result[0].key, "canberra/v1/custom_prefix/mock_key/live.pb");
        assert_eq!(result[0].mime_type, MIME_TYPE);
    }

    #[test]
    fn test_generate_with_trip_level_delay_priority() {
        let mut update = create_trip_update("trip123", Some(50), false); // trip-level delay
        update.stop_time_update = vec![
            StopTimeUpdate {
                arrival: Some(StopTimeEvent {
                    delay: Some(100), // stop-level delay
                    ..StopTimeEvent::default()
                }),
                ..StopTimeUpdate::default()
            }
        ];

        let entities = vec![
            create_feed_entity("e1", Some(update), Some(false)),
        ];
        let feed = mock_feed_message_with_entities(entities, false);
        let trip_ids = vec!["trip123".to_string()];
        let index = mock_trip_index(trip_ids);

        let generator = GenericGenerator {
            prefix: "test",
            extract: mock_extract,
        };

        let params = mock_params(Some(10 * 60), None);
        let result = generator.generate(&feed, &index, &params);

        let parsed = RealtimeEndpoint::decode(&*result[0].contents).unwrap();
        assert_eq!(parsed.updates.len(), 1);
        // Should use trip-level delay when non-zero
        assert_eq!(parsed.updates[0].delay, Some(50));
    }
}
