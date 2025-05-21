import { transit_realtime } from "../proto/gtfs-rt.js";
import { FileSpec, OrchestratorParams } from "../models.js";
import { trip_index } from "../proto/trip-index.js";
import { gtfs_api } from "../proto/output.js";
import { Generator } from "./generator.js";
import groupBy from 'just-group-by';

export class RouteGenerator extends Generator {

    generate(
        feed: transit_realtime.FeedMessage, 
        index: trip_index.TripIndex,
        params: OrchestratorParams
    ): FileSpec[] {
        const routeTrips = groupBy(index.trips, (i) => i.routeId);
        var out = <FileSpec[]>[];

        for (const routeId in routeTrips) {
            const tripIds = routeTrips[routeId].map((t) => t.tripId);
            const message = this._createMessage(
                feed,
                params,
                tripIds
            );
            
            out.push(<FileSpec>{
                key: `canberra/v1/route/${routeId}/live.pb`,
                contents: gtfs_api.RealtimeEndpoint.encode(message).finish(),
                mimeType: "application/x-protobuf; proto=cl.emilym.gtfs_api.RealtimeEndpoint"
            });
        }

        return out;
    }

}