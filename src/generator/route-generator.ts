import { transit_realtime } from "../proto/gtfs-rt.js";
import { FileSpec, OrchestratorParams } from "../models.js";
import { trip_index } from "../proto/trip-index.js";
import { gtfs_api } from "../proto/output.js";
import { Generator } from "./generator.js";
import groupBy from 'just-group-by';

export class RouteGenerator extends Generator {

    _routeId(routeId: string): string {
        const r = routeId.split("_")[0]
        switch(r) {
            case "1":
                return "ACTO001"
            case "X1":
            case "X2":
                return r
            default:
                return `${r}-10657`
        }
    }

    generate(
        feed: transit_realtime.FeedMessage, 
        index: trip_index.TripIndex,
        params: OrchestratorParams
    ): FileSpec[] {
        console.log("Starting route generation");
        var out = <FileSpec[]>[];
        for (const routeId in Object.keys(index.tripsByRoute)) {
            const tripIds = index.tripsByRoute[routeId].tripId;
            if (tripIds == null) continue;
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