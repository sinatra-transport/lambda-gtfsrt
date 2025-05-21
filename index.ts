import { Handler, Context } from 'aws-lambda';
import { Orchestrator } from './src/orchestrator.js';
import { OrchestratorParams } from './src/models.js';

interface ScrapeEvent {
    gtfsrtUrl: string,
    destinationBucket: string
    ttl?: number | undefined,
    indexBucket?: string | undefined,
    indexFile?: string | undefined,
}

export const handler: Handler<ScrapeEvent> = async (event: ScrapeEvent, context: Context) => {
    console.log(`Started with parameters ${JSON.stringify(event)}`)
    await new Orchestrator(
        <OrchestratorParams>{
            gtfsrtUrl: event.gtfsrtUrl,
            destinationBucket: event.destinationBucket,
            ttl: event.ttl,
            indexBucket: event.indexBucket ?? "sinatra-private",
            indexFile: event.indexFile ?? "trip-index.pb"
        }
    ).run()
};