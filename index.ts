import { Handler, Context } from 'aws-lambda';
import { Orchestrator, OrchestratorParams } from './src/orchestrator.js';

interface ScrapeEvent {
    gtfsrtUrl: string,
    destinationBucket: string
}

export const handler: Handler<ScrapeEvent> = async (event: ScrapeEvent, context: Context) => {
    console.log(`Started with parameters ${JSON.stringify(event)}`)
    await new Orchestrator(
        <OrchestratorParams>{
            gtfsrtUrl: event.gtfsrtUrl,
            destinationBucket: event.destinationBucket
        }
    ).run()
};