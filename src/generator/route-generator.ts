import { transit_realtime } from "../proto/gtfs-rt.js";
import { FileSpec } from "../models.js";
import { trip_index } from "../proto/trip-index.js";
import { gtfs_api } from "../proto/output.js";
import { Generator } from "./generator.js";
import groupBy from 'just-group-by';

export class RouteGenerator extends Generator {
    static readonly liveExpireDuration = 2 * 60000; // 2 minutes

    generate(feed: transit_realtime.FeedMessage, index: trip_index.TripIndex): FileSpec[] {
        const routeTrips = groupBy(index.trips, (i) => i.routeId);
        var out = <FileSpec[]>[];

        for (const routeId in routeTrips) {
            const tripIds = routeTrips[routeId].map((t) => t.tripId);
            const updates = feed.entity.filter((e) => 
                e.isDeleted !== true && e.tripUpdate?.trip?.tripId != null && e.tripUpdate?.trip?.tripId in tripIds
            );

            const message = gtfs_api.RealtimeEndpoint.create(<gtfs_api.IRealtimeEndpoint>{
                updates: updates.map((u) => {
                    if (u.tripUpdate == null) return null;
                    var delay = u.tripUpdate.delay;
                    if (delay == null || delay == 0) {
                        delay = u.tripUpdate?.stopTimeUpdate?.at(0)?.arrival?.delay ?? delay;
                    }
                    if (delay == null || delay == 0) return null

                    return <gtfs_api.IRealtimeUpdate>{
                        tripId: u.tripUpdate!.trip.tripId,
                        delay: delay
                    }
                }).filter((u) => u != null),
                expireTimestamp: new Date(
                    new Date(new Date().toUTCString()).getTime() + RouteGenerator.liveExpireDuration
                ).toISOString()
            });
            
            out.push(<FileSpec>{
                key: `canberra/v1/route/${routeId}/live.pb`,
                contents: gtfs_api.RealtimeEndpoint.encode(message).finish(),
                mimeType: "application/x-protobuf; proto=cl.emilym.gtfs_api.RealtimeEndpoint"
            });
        }

        return out;
    }

}