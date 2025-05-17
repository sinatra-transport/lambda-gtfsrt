import { transit_realtime } from "./proto/gtfs-rt"
import { trip_index } from "./proto/trip-index"

export interface FileSpec {
    key: string
    contents: Uint8Array
    mimeType?: string | undefined
}

export interface TripData {
    gtfsRt: transit_realtime.FeedMessage
    tripIndex: trip_index.TripIndex
}