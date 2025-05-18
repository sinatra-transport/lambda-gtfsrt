import { Orchestrator } from './src/orchestrator'
import { trip_index } from './src/proto/trip-index';
import { Scraper } from './src/scraper';
import fs from 'node:fs/promises';
import { Uploader } from './src/uploader';
import { FileSpec, OrchestratorParams } from './src/models';

class LocalScraper extends Scraper {
    override async tripIndex(key?: string): Promise<trip_index.TripIndex> {
        const file = await fs.readFile("./test_data/trip-index.pb");
        return trip_index.TripIndex.decode(file);
    }
}

class LocalUploader extends Uploader {
    override async upload(
        spec: FileSpec,
        bucket: string
    ) {
        console.log(`Would upload to s3://${bucket}/${spec.key}`)
    }
}

new Orchestrator(
    <OrchestratorParams>{
        gtfsrtUrl: "https://files.transport.act.gov.au/feeds/lightrail.pb",
        destinationBucket: "bucket"
    },
    new LocalScraper(),
    new LocalUploader()
).run()