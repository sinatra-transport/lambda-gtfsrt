import { transit_realtime } from './proto/gtfs-rt.js'
import { trip_index } from './proto/trip-index.js';
import { S3Client, S3ClientConfig, GetObjectCommand, GetObjectRequest } from '@aws-sdk/client-s3';
import { request } from 'https';
import { IncomingMessage } from 'http';
import { stringMap } from 'aws-sdk/clients/backup.js';

export class Scraper {

    async _secret(name: string): Promise<string> {
        return new Promise((resolve, reject) => {
            request(
                `http://localhost:2773/systemsmanager/parameters/get?name=${encodeURI(name)}`,
                {
                    headers: {
                        'X-Aws-Parameters-Secrets-Token': process.env.AWS_SESSION_TOKEN
                    }
                },
                (res: IncomingMessage) => {
                    if (res.statusCode !== 200) {
                        reject(new Error(`Request failed with status code ${res.statusCode}`));
                        return;
                    }

                    const chunks: Buffer[] = [];

                    res.on('data', chunk => chunks.push(chunk));
                    res.on('end', () => {
                        const buffer = Buffer.concat(chunks);
                        resolve(buffer.toString('utf8'));
                    });
                }
            )
                .on('error', reject)
                .end();
        });
    }

    async _fetchAsUint8Array(
        url: string
    ): Promise<Uint8Array> {
        const username = await this._secret("/sinatra/transportcanberra/username");
        const password = await this._secret("/sinatra/transportcanberra/password");
        const authString = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
        return new Promise((resolve, reject) => {
            request(
                url, 
                {
                    headers: {
                        "Authorization": `Basic ${authString}`
                    }
                },
                (res: IncomingMessage) => {
                    if (res.statusCode !== 200) {
                        reject(new Error(`Request failed with status code ${res.statusCode}`));
                        return;
                    }

                    const chunks: Buffer[] = [];

                    res.on('data', chunk => chunks.push(chunk));
                    res.on('end', () => {
                        const buffer = Buffer.concat(chunks);
                        resolve(new Uint8Array(buffer));
                    });
                }
            )
                .on('error', reject)
                .end();
        });
    }

    async gtfsRt(url: string): Promise<transit_realtime.FeedMessage> {
        console.log(`Downloading gtfs-rt from ${url}`);
        const response = await this._fetchAsUint8Array(url)
        console.log(`Successfully fetched gtfs-rt`);
        return transit_realtime.FeedMessage.decode(response);
    }

    async tripIndex(bucket: string, key: string): Promise<trip_index.TripIndex> {
        console.log(`Fetching trip-index`);
        const s3 = new S3Client(<S3ClientConfig>{
            region: "ap-southeast-2"
        });

        const command = new GetObjectCommand(<GetObjectRequest>{
            Bucket: bucket,
            Key: key
        });

        const response = await s3.send(command);
        const bytes = await response.Body?.transformToByteArray();
        console.log(`Fetched trip-index (is undefined = ${bytes == undefined})`);
        if (bytes == undefined) throw Error(`Unable to fetch trip-index (key = ${key})`)

        return trip_index.TripIndex.decode(bytes);
    }

}