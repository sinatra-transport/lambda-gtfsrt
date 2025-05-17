import { got } from 'got';
import { transit_realtime } from './gtfsrt'

export class Scraper {

    async _fetch(url: string): Promise<transit_realtime.FeedMessage> {
        let response = await got<Uint8Array>(url)
        return transit_realtime.FeedMessage.decode(response.rawBody)
    }

}