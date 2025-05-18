import { transit_realtime } from "../proto/gtfs-rt.js";
import { FileSpec, OrchestratorParams } from "../models.js";
import { trip_index } from "../proto/trip-index.js";
import { gtfs_api } from "../proto/output.js";
import { Generator } from "./generator.js";
import groupBy from 'just-group-by';

export class RouteGenerator extends Generator {
    static readonly staleDataThreshold = 10 * 60000;

    generate(
        feed: transit_realtime.FeedMessage, 
        index: trip_index.TripIndex,
        params: OrchestratorParams
    ): FileSpec[] {
        const routeTrips = groupBy(index.trips, (i) => i.routeId);
        var out = <FileSpec[]>[];
        const stale = feed.header.timestamp != null ? this._isStale(new Date(Number(feed.header.timestamp))) : false;

        for (const routeId in routeTrips) {
            const tripIds = routeTrips[routeId].map((t) => t.tripId);
            const updates = feed.entity.filter((e) => 
                e.isDeleted !== true && e.tripUpdate?.trip?.tripId != null && e.tripUpdate?.trip?.tripId in tripIds
            );

            const message = gtfs_api.RealtimeEndpoint.create(<gtfs_api.IRealtimeEndpoint>{
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
            
            out.push(<FileSpec>{
                key: `canberra/v1/route/${routeId}/live.pb`,
                contents: gtfs_api.RealtimeEndpoint.encode(message).finish(),
                mimeType: "application/x-protobuf; proto=cl.emilym.gtfs_api.RealtimeEndpoint"
            });
        }

        return out;
    }

    _isStale(date: Date): boolean {
        return (new Date(new Date().toUTCString()).getTime() - date.getTime()) > RouteGenerator.staleDataThreshold;
    }

}