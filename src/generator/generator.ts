import { transit_realtime } from '../proto/gtfs-rt.js';
import { FileSpec, OrchestratorParams } from '../models.js';
import { trip_index } from '../proto/trip-index.js';
import { gtfs_api } from '../proto/output.js';

export abstract class Generator {
    static readonly staleDataThreshold = 10 * 60000;
    static readonly mimeType = "application/x-protobuf; proto=cl.emilym.gtfs_api.RealtimeEndpoint";

    abstract generate(
        feed: transit_realtime.FeedMessage,
        index: trip_index.TripIndex,
        params: OrchestratorParams
    ): FileSpec[]

    _createMessage(
        feed: transit_realtime.FeedMessage,
        params: OrchestratorParams,
        tripIds: string[]
    ): gtfs_api.RealtimeEndpoint {
        const stale = feed.header.timestamp != null ? this._isStale(new Date(Number(feed.header.timestamp) * 1000)) : false;

        const updates = feed.entity.filter((e) => 
                e.isDeleted !== true && e.tripUpdate?.trip?.tripId != null && tripIds.includes(e.tripUpdate?.trip?.tripId)
        );

        return gtfs_api.RealtimeEndpoint.create(<gtfs_api.IRealtimeEndpoint>{
            updates: updates.map((u) => {
                const nullMessage = <gtfs_api.IRealtimeUpdate>{
                    tripId: u.tripUpdate!.trip.tripId,
                    delay: null
                };

                if (stale) return nullMessage;
                if (u.tripUpdate == null) return nullMessage;
                if (
                    u.tripUpdate.timestamp != null && 
                    this._isStale(new Date(Number(u.tripUpdate.timestamp)))
                ) return nullMessage;
                
                var delay = u.tripUpdate.delay;
                if (delay == null || delay == 0) {
                    delay = u.tripUpdate?.stopTimeUpdate?.at(0)?.arrival?.delay ?? delay;
                }
                if (delay == null || delay == 0) return nullMessage;

                return <gtfs_api.IRealtimeUpdate>{
                    tripId: u.tripUpdate!.trip.tripId,
                    delay: delay
                };
            }),
            expireTimestamp: params.ttl != null ? new Date(
                new Date(new Date().toUTCString()).getTime() + params.ttl * 60000
            ).toISOString() : null
        });
    }

    _isStale(date: Date): boolean {
        return (new Date(new Date().toUTCString()).getTime() - date.getTime()) > Generator.staleDataThreshold;
    }
}