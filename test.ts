import { Orchestrator, OrchestratorParams } from './src/orchestrator'

new Orchestrator(
    <OrchestratorParams>{
        gtfsrtUrl: "https://files.transport.act.gov.au/feeds/lightrail.pb"
    }
)