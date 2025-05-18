import { RouteGenerator } from './generator/route-generator.js';
import { Generator } from './generator/generator.js'
import { Scraper } from './scraper.js'
import { FileSpec, TripData } from './models.js';
import { Uploader } from './uploader.js';

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
        await this._upload(specs);
    }

    async _setup(): Promise<TripData> {
        console.log("Fetching required data");
        return <TripData>{
            gtfsRt: await this._scraper.gtfsRt(this.params.gtfsrtUrl),
            tripIndex: await this._scraper.tripIndex()
        }
    }

    async _generate(data: TripData): Promise<FileSpec[]> {
        console.log("Generating output files");
        return this._generators.map((g) => g.generate(data.gtfsRt, data.tripIndex)).flat();
    }

    async _upload(specs: FileSpec[]) {
        for (const spec of specs) {
            console.log(`Uploading file ${spec.key} (total = ${specs.length})`)
            await this._uploader.upload(spec, this.params.destinationBucket)
        }
    }
    
}