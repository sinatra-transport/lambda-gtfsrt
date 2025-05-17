import { transit_realtime } from './gtfs-rt'
import { Scraper } from './scraper'

export interface GeneratorParams {
    gtfsrtUrl: string,
    destinationBucket: string
    destinationDirectory: string
}

export class Generator {
    readonly params: GeneratorParams;
    readonly _scraper: Scraper;

    constructor(
        params: GeneratorParams, 
        scraper: Scraper = new Scraper()
    ) {
        this.params = params;
        this._scraper = scraper;
    }
    
}