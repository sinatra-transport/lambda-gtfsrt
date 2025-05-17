import { Orchestrator, OrchestratorParams } from './src/orchestrator'
import { LocalScraper } from './src/scraper'

new Orchestrator(
    <OrchestratorParams>{
        gtfsrtUrl: "https://files.transport.act.gov.au/feeds/lightrail.pb"
    },
    new LocalScraper()
).run()