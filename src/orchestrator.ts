import { RouteGenerator } from './generator/route-generator';
import { Generator } from './generator/generator'
import { transit_realtime } from './proto/gtfs-rt'
import { Scraper } from './scraper'
import { FileSpec, TripData } from './models';
import { Uploader } from './uploader';

export interface OrchestratorParams {
    gtfsrtUrl: string,
    destinationBucket: string
}

export class Orchestrator {
    readonly params: OrchestratorParams;
    readonly _scraper: Scraper;
    readonly _generators: Generator[]
    readonly _uploader: Uploader

    constructor(
        params: OrchestratorParams, 
        scraper: Scraper = new Scraper(),
        uploader: Uploader = new Uploader(),
        generators: Generator[] = [new RouteGenerator()],
    ) {
        this.params = params;
        this._scraper = scraper;
        this._generators = generators;
        this._uploader = uploader;
    }

    async run() {
        const data = await this._setup();
        const specs = await this._generate(data);
        this._upload(specs);
    }

    async _setup(): Promise<TripData> {
        return <TripData>{
            gtfsRt: await this._scraper.gtfsRt(this.params.gtfsrtUrl),
            tripIndex: await this._scraper.tripIndex()
        }
    }

    async _generate(data: TripData): Promise<FileSpec[]> {
        return this._generators.map((g) => g.generate(data.gtfsRt, data.tripIndex)).flat();
    }

    async _upload(specs: FileSpec[]) {
        for (const spec of specs) {
            this._uploader.upload(spec, this.params.destinationBucket)
        }
    }
    
}