import { transit_realtime } from "../proto/gtfs-rt";
import { FileSpec, OrchestratorParams } from "../models";
import { trip_index } from "../proto/trip-index";
import { gtfs_api } from "../proto/output";
import { Generator } from "./generator";

export class StopGenerator extends Generator {

    generate(
        feed: transit_realtime.FeedMessage, 
        index: trip_index.TripIndex,
        params: OrchestratorParams
    ): FileSpec[] {
        var stopTrips = new Map<string, string[]>();
        for (const trip of index.trips) {
            if (trip.stopIds == null) continue;
            for (const stopId of trip.stopIds) {
                const existing = stopTrips.get(stopId) ?? [];
                stopTrips.set(stopId, [...existing, trip.tripId]);
            }
        }

        var out = <FileSpec[]>[];

        for (const stopId of stopTrips.keys()) {
            const tripIds = stopTrips.get(stopId);
            if (tripIds == null) continue;
            
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