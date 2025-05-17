import { Generator, GeneratorParams } from './src/generator'

new Generator(
    <GeneratorParams>{
        gtfsrtUrl: "https://files.transport.act.gov.au/feeds/lightrail.pb"
    }
)