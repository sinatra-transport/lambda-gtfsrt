import { transit_realtime } from "../proto/gtfs-rt";
import { FileSpec } from "../models";
import { trip_index } from "../proto/trip-index";
import { gtfs_api } from "../proto/output";
import { Generator } from "./generator";
import groupBy from 'just-group-by';

export class RouteGenerator extends Generator {

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
                }).filter((u) => u != null)
            });
            
            out.push(<FileSpec>{
                key: `route/${routeId}/live.pb`,
                contents: gtfs_api.RealtimeEndpoint.encode(message).finish(),
                json: JSON.stringify(message)
            });
        }

        return out;
    }

}