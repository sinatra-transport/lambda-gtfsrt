import { transit_realtime } from '../proto/gtfs-rt.js';
import { FileSpec, OrchestratorParams } from '../models.js';
import { trip_index } from '../proto/trip-index.js';

export abstract class Generator {
    abstract generate(
        feed: transit_realtime.FeedMessage,
        index: trip_index.TripIndex,
        params: OrchestratorParams
    ): FileSpec[]
}