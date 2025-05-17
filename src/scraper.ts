import { got } from 'got';
import { transit_realtime } from './gtfs-rt'
import { proto } from './gtfs-api';

export class Scraper {

    static readonly defaultRoot = "https://api.sinatra-transport.com/canberra"

    async gtfsRt(url: string): Promise<transit_realtime.FeedMessage> {
        let response = await got<Uint8Array>(url)
        return transit_realtime.FeedMessage.decode(response.rawBody)
    }

    async routes(
        root: string = Scraper.defaultRoot
    ): Promise<proto.RouteEndpoint> {
        let response = await got<Uint8Array>(`${root}/routes.pb`);
        return proto.RouteEndpoint.decode(response.rawBody);
    }

    async services(
        routeId: string, 
        root: string = Scraper.defaultRoot
    ): Promise<proto.RouteServicesEndpoint> {
        let response = await got<Uint8Array>(`${root}/route/${routeId}/services.pb`);
        return proto.RouteServicesEndpoint.decode(response.rawBody);
    }

    async serviceTimetable(
        routeId: string, 
        serviceId: string,
        root: string = Scraper.defaultRoot
    ): Promise<proto.RouteServicesEndpoint> {
        let response = await got<Uint8Array>(`${root}/route/${routeId}/service/${serviceId}/timetable.pb`);
        return proto.RouteServicesEndpoint.decode(response.rawBody);
    }

}