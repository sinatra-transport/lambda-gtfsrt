import { transit_realtime } from '../proto/gtfs-rt';
import { FileSpec } from '../models';
import { trip_index } from '../proto/trip-index';

export abstract class Generator {
    abstract generate(
        feed: transit_realtime.FeedMessage,
        index: trip_index.TripIndex
    ): FileSpec[]
}