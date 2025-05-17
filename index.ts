import { Handler, Context } from 'aws-lambda';

interface ScrapeEvent {
    gtfsrtUrl: string,
    destinationBucket: string
    destinationDirectory: string
}

export const handler: Handler<ScrapeEvent> = async (event: ScrapeEvent, context: Context) => {
    
};