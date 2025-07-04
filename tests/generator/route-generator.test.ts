import { RouteGenerator } from '../../dist/src/generator/route-generator';
import { transit_realtime } from '../../dist/src/proto/gtfs-rt';
import { trip_index } from '../../dist/src/proto/trip-index';
import { gtfs_api } from '../../dist/src/proto/output';
import { OrchestratorParams } from '../../dist/src/models';
import { StopGenerator } from '../../dist/src/generator/stop-generator';

describe('RouteGenerator', () => {
    const makeTripIndex = (): trip_index.TripIndex => (trip_index.TripIndex.create(<trip_index.ITripIndex>{
        trips: [
            <trip_index.ITripInformation>{ tripId: 'tripA', routeId: 'route1', stopIds: ['stop1'] },
            <trip_index.ITripInformation>{ tripId: 'tripB', routeId: 'route1', stopIds: ['stop2'] },
            <trip_index.ITripInformation>{ tripId: 'tripC', routeId: 'route2', stopIds: ['stop3'] }
        ]
    }));

    const baseEntity = (tripId: string, delay: number | null, timestamp?: number): transit_realtime.FeedEntity => (
        transit_realtime.FeedEntity.create(<transit_realtime.IFeedEntity>{
            id: tripId,
            isDeleted: false,
            tripUpdate: <transit_realtime.ITripUpdate>{
                trip: <transit_realtime.ITripDescriptor>{ tripId: tripId },
                delay,
                timestamp: timestamp,
                stopTimeUpdate: delay == null ? [] : [<transit_realtime.TripUpdate.IStopTimeUpdate>{
                    arrival: { delay }
                }]
            }
        })
    );

    const makeFeed = (timestamp: number, entities: transit_realtime.IFeedEntity[]): transit_realtime.FeedMessage => (
        transit_realtime.FeedMessage.create(<transit_realtime.IFeedMessage>{
            header: <transit_realtime.IFeedHeader>{
                gtfsRealtimeVersion: '2.0',
                incrementality: transit_realtime.FeedHeader.Incrementality.FULL_DATASET,
                timestamp: timestamp
            },
            entity: entities
        })
    );

    const params: OrchestratorParams = {
        gtfsrtUrl: 'http://test',
        destinationBucket: 'bucket',
        ttl: 5,
        permitStale: false
    };

    it('generates a FileSpec per route', () => {
        const now = Date.now();
        const feed = makeFeed(now, [
            baseEntity('tripA', 120),
            baseEntity('tripB', 60),
            baseEntity('tripC', 300),
        ]);
        const generator = new RouteGenerator();
        const output = generator.generate(feed, makeTripIndex(), params);

        expect(output).toHaveLength(2);
        expect(output[0].key).toMatch(/route1-10657\/live\.pb$/);
        expect(output[1].key).toMatch(/route2-10657\/live\.pb$/);
        
        expect(gtfs_api.RealtimeEndpoint.decode(output[0].contents).updates).toHaveLength(2);
        expect(gtfs_api.RealtimeEndpoint.decode(output[1].contents).updates).toHaveLength(1);
    });

    it('skips entities with isDeleted = true or invalid tripUpdate', () => {
        const now = Date.now();
        const feed = makeFeed(now, [
            { id: 'tripA', isDeleted: true }, // skipped
            { id: 'tripB', isDeleted: false, tripUpdate: null }, // skipped
            baseEntity('tripC', 100),
        ]);
        const generator = new RouteGenerator();
        const output = generator.generate(feed, makeTripIndex(), params);

        expect(output).toHaveLength(2);
        expect(gtfs_api.RealtimeEndpoint.decode(output[0].contents).updates).toHaveLength(0);
        expect(gtfs_api.RealtimeEndpoint.decode(output[1].contents).updates).toHaveLength(1);
    });

    it('treats stale trip updates as null delay', () => {
        const past = Date.now() - (11 * 60000); // more than stale threshold
        const feed = makeFeed(past, [
            baseEntity('tripC', 100, past)
        ]);

        const generator = new RouteGenerator();
        const output = generator.generate(feed, makeTripIndex(), params);

        expect(output).toHaveLength(2);
        const decodedOutput = gtfs_api.RealtimeEndpoint.decode(output[1].contents);
        expect(decodedOutput.updates).toHaveLength(0);
    });

    it('handles zero and null delays correctly', () => {
        const now = Date.now();
        const feed = makeFeed(now, [
            baseEntity('tripA', 0),
            baseEntity('tripB', null),
            baseEntity('tripC', 30),
        ]);

        const generator = new RouteGenerator();
        const output = generator.generate(feed, makeTripIndex(), params);

        const updatesRoute1 = gtfs_api.RealtimeEndpoint.decode(output[0].contents).updates;
        expect(updatesRoute1).toHaveLength(0);

        const updatesRoute2 = gtfs_api.RealtimeEndpoint.decode(output[1].contents).updates;
        expect(updatesRoute2[0].delay).toBe(30); // tripC
    });

    it('adds expireTimestamp if ttl is specified', () => {
        const now = Date.now();
        const feed = makeFeed(now, [
            baseEntity('tripC', 45)
        ]);

        const generator = new RouteGenerator();
        const output = generator.generate(feed, makeTripIndex(), params);

        const call = gtfs_api.RealtimeEndpoint.decode(output[1].contents);
        expect(call.expireTimestamp).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    });

    it('permits stale trip updates', () => {
        const past = Date.now() - (11 * 60000); // more than stale threshold
        const feed = makeFeed(past, [
            baseEntity('tripC', 100, past)
        ]);

        const generator = new RouteGenerator();
        const output = generator.generate(
            feed, 
            makeTripIndex(), 
            {
                ...params, permitStale: true
            }
        );

        expect(output).toHaveLength(2);
        const decodedOutput = gtfs_api.RealtimeEndpoint.decode(output[1].contents);
        expect(decodedOutput.updates).toHaveLength(1);
    });
});
