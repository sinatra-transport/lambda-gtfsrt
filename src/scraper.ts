import { got } from 'got';
import { transit_realtime } from './proto/gtfs-rt.js'
import { trip_index } from './proto/trip-index.js';
import { S3Client, S3ClientConfig, GetObjectCommand, GetObjectRequest } from '@aws-sdk/client-s3';

export class Scraper {

    async gtfsRt(url: string): Promise<transit_realtime.FeedMessage> {
        console.log(`Downloading gtfs-rt from ${url}`);
        const response = await got<Uint8Array>(url);
        console.log(`Successfully fetched gtfs-rt`);
        return transit_realtime.FeedMessage.decode(response.rawBody);
    }

    async tripIndex(key: string = "trip-index.pb"): Promise<trip_index.TripIndex> {
        console.log(`Fetching trip-index`);
        const s3 = new S3Client(<S3ClientConfig>{
            region: "ap-southeast-2"
        });

        const command = new GetObjectCommand(<GetObjectRequest>{
            Bucket: "sinatra-private",
            Key: key
        });

        const response = await s3.send(command);
        const bytes = await response.Body?.transformToByteArray();
        console.log(`Fetched trip-index (is undefined = ${bytes == undefined})`);
        if (bytes == undefined) throw Error(`Unable to fetch trip-index (key = ${key})`)

        return trip_index.TripIndex.decode(bytes);
    }

}