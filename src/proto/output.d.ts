import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace gtfs_api. */
export namespace gtfs_api {

    /** Properties of a RealtimeEndpoint. */
    interface IRealtimeEndpoint {

        /** RealtimeEndpoint updates */
        updates?: (gtfs_api.IRealtimeUpdate[]|null);
    }

    /** Represents a RealtimeEndpoint. */
    class RealtimeEndpoint implements IRealtimeEndpoint {

        /**
         * Constructs a new RealtimeEndpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: gtfs_api.IRealtimeEndpoint);

        /** RealtimeEndpoint updates. */
        public updates: gtfs_api.IRealtimeUpdate[];

        /**
         * Creates a new RealtimeEndpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RealtimeEndpoint instance
         */
        public static create(properties?: gtfs_api.IRealtimeEndpoint): gtfs_api.RealtimeEndpoint;

        /**
         * Encodes the specified RealtimeEndpoint message. Does not implicitly {@link gtfs_api.RealtimeEndpoint.verify|verify} messages.
         * @param message RealtimeEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gtfs_api.IRealtimeEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RealtimeEndpoint message, length delimited. Does not implicitly {@link gtfs_api.RealtimeEndpoint.verify|verify} messages.
         * @param message RealtimeEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gtfs_api.IRealtimeEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RealtimeEndpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RealtimeEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gtfs_api.RealtimeEndpoint;

        /**
         * Decodes a RealtimeEndpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RealtimeEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gtfs_api.RealtimeEndpoint;

        /**
         * Verifies a RealtimeEndpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RealtimeEndpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RealtimeEndpoint
         */
        public static fromObject(object: { [k: string]: any }): gtfs_api.RealtimeEndpoint;

        /**
         * Creates a plain object from a RealtimeEndpoint message. Also converts values to other types if specified.
         * @param message RealtimeEndpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gtfs_api.RealtimeEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RealtimeEndpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RealtimeEndpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RealtimeUpdate. */
    interface IRealtimeUpdate {

        /** RealtimeUpdate tripId */
        tripId: string;

        /** RealtimeUpdate delay */
        delay?: (number|null);
    }

    /** Represents a RealtimeUpdate. */
    class RealtimeUpdate implements IRealtimeUpdate {

        /**
         * Constructs a new RealtimeUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: gtfs_api.IRealtimeUpdate);

        /** RealtimeUpdate tripId. */
        public tripId: string;

        /** RealtimeUpdate delay. */
        public delay: number;

        /**
         * Creates a new RealtimeUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RealtimeUpdate instance
         */
        public static create(properties?: gtfs_api.IRealtimeUpdate): gtfs_api.RealtimeUpdate;

        /**
         * Encodes the specified RealtimeUpdate message. Does not implicitly {@link gtfs_api.RealtimeUpdate.verify|verify} messages.
         * @param message RealtimeUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gtfs_api.IRealtimeUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RealtimeUpdate message, length delimited. Does not implicitly {@link gtfs_api.RealtimeUpdate.verify|verify} messages.
         * @param message RealtimeUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gtfs_api.IRealtimeUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RealtimeUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RealtimeUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gtfs_api.RealtimeUpdate;

        /**
         * Decodes a RealtimeUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RealtimeUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gtfs_api.RealtimeUpdate;

        /**
         * Verifies a RealtimeUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RealtimeUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RealtimeUpdate
         */
        public static fromObject(object: { [k: string]: any }): gtfs_api.RealtimeUpdate;

        /**
         * Creates a plain object from a RealtimeUpdate message. Also converts values to other types if specified.
         * @param message RealtimeUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gtfs_api.RealtimeUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RealtimeUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RealtimeUpdate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
