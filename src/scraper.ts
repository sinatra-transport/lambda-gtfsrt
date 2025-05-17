import { got } from 'got';
import { transit_realtime } from './proto/gtfs-rt'
import { trip_index } from './proto/trip-index';
import { S3Client, S3ClientConfig, GetObjectCommand, GetObjectRequest } from '@aws-sdk/client-s3';
import fs from 'node:fs/promises';

export class Scraper {

    async gtfsRt(url: string): Promise<transit_realtime.FeedMessage> {
        const response = await got<Uint8Array>(url)
        return transit_realtime.FeedMessage.decode(response.rawBody)
    }

    async tripIndex(key: string = "trip-index.pb"): Promise<trip_index.TripIndex> {
        const s3 = new S3Client(<S3ClientConfig>{
            region: "ap-southeast-2"
        })

        const command = new GetObjectCommand(<GetObjectRequest>{
            Bucket: "sinatra-private",
            Key: key
        });

        const response = await s3.send(command);
        const bytes = await response.Body?.transformToByteArray();
        if (bytes == undefined) throw Error(`Unable to fetch trip-index (key = ${key})`)

        return trip_index.TripIndex.decode(bytes);
    }

}

export class LocalScraper extends Scraper {
    override async tripIndex(key?: string): Promise<trip_index.TripIndex> {
        const file = await fs.readFile("./test_data/trip-index.pb");
        return trip_index.TripIndex.decode(file);
    }
}