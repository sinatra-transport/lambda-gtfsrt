import { transit_realtime } from "./proto/gtfs-rt.js"
import { trip_index } from "./proto/trip-index.js"

export interface OrchestratorParams {
    gtfsrtUrl: string,
    destinationBucket: string
    ttl?: number | undefined
}

export interface FileSpec {
    key: string
    contents: Uint8Array
    mimeType?: string | undefined
}

export interface TripData {
    gtfsRt: transit_realtime.FeedMessage
    tripIndex: trip_index.TripIndex
}