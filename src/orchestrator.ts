import { RouteGenerator } from './generator/route-generator.js';
import { Generator } from './generator/generator.js'
import { Scraper } from './scraper.js'
import { FileSpec, OrchestratorParams, TripData } from './models.js';
import { Uploader } from './uploader.js';
import { StopGenerator } from './generator/stop-generator.js';
import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";

export class Orchestrator {
    readonly params: OrchestratorParams;
    readonly _scraper: Scraper;
    readonly _generators: Generator[]
    readonly _uploader: Uploader

    constructor(
        params: OrchestratorParams, 
        scraper: Scraper = new Scraper(),
        uploader: Uploader = new Uploader(),
        generators: Generator[] = [
            new RouteGenerator(),
            // new StopGenerator()
        ],
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
            tripIndex: await this._scraper.tripIndex(
                this.params.indexBucket,
                this.params.indexFile
            )
        }
    }

    async _generate(data: TripData): Promise<FileSpec[]> {
        console.log("Generating output files");
        return this._generators.map((g) => g.generate(data.gtfsRt, data.tripIndex, this.params)).flat();
    }

    async _upload(specs: FileSpec[]) {
        console.log("Starting upload");
        const s3 = new S3Client(<S3ClientConfig>{
            region: "ap-southeast-2"
        });
        var promises: Promise<any>[] = [];
        for (const spec of specs) {
            promises.push(this._uploader.upload(s3, spec, this.params.destinationBucket));
        }
        await Promise.all(promises);
    }
    
}