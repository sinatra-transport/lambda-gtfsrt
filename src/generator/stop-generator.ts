import { transit_realtime } from "../proto/gtfs-rt.js";
import { FileSpec, OrchestratorParams } from "../models.js";
import { trip_index } from "../proto/trip-index.js";
import { gtfs_api } from "../proto/output.js";
import { Generator } from "./generator.js";

interface StopTrip {
    stopId: string
    tripIds: string[]
}

export class StopGenerator extends Generator {

    generate(
        feed: transit_realtime.FeedMessage, 
        index: trip_index.TripIndex,
        params: OrchestratorParams
    ): FileSpec[] {
        const stopIds = [...new Set(index.trips.flatMap((t) => t.stopIds ?? []))];
        const stopTrips = stopIds.map((s) => <StopTrip>{ 
            stopId: s,
            tripIds: index.trips.filter((t) => s in (t.stopIds ?? [])).map((t) => t.tripId)
        });
        var out = <FileSpec[]>[];

        for (const stopTrip of stopTrips) {
            const stopId = stopTrip.stopId;
            const tripIds = stopTrip.tripIds
            
            const message = this._createMessage(
                feed,
                params,
                tripIds
            );
            
            out.push(<FileSpec>{
                key: `canberra/v1/stop/${stopId}/live.pb`,
                contents: gtfs_api.RealtimeEndpoint.encode(message).finish(),
                mimeType: Generator.mimeType
            });
        }

        return out;
    }

}