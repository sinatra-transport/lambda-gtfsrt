import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace trip_index. */
export namespace trip_index {

    /** Properties of a TripIndex. */
    interface ITripIndex {

        /** TripIndex trips */
        trips?: (trip_index.ITripInformation[]|null);
    }

    /** Represents a TripIndex. */
    class TripIndex implements ITripIndex {

        /**
         * Constructs a new TripIndex.
         * @param [properties] Properties to set
         */
        constructor(properties?: trip_index.ITripIndex);

        /** TripIndex trips. */
        public trips: trip_index.ITripInformation[];

        /**
         * Creates a new TripIndex instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TripIndex instance
         */
        public static create(properties?: trip_index.ITripIndex): trip_index.TripIndex;

        /**
         * Encodes the specified TripIndex message. Does not implicitly {@link trip_index.TripIndex.verify|verify} messages.
         * @param message TripIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: trip_index.ITripIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TripIndex message, length delimited. Does not implicitly {@link trip_index.TripIndex.verify|verify} messages.
         * @param message TripIndex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: trip_index.ITripIndex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TripIndex message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TripIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): trip_index.TripIndex;

        /**
         * Decodes a TripIndex message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TripIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): trip_index.TripIndex;

        /**
         * Verifies a TripIndex message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TripIndex message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TripIndex
         */
        public static fromObject(object: { [k: string]: any }): trip_index.TripIndex;

        /**
         * Creates a plain object from a TripIndex message. Also converts values to other types if specified.
         * @param message TripIndex
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trip_index.TripIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TripIndex to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TripIndex
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TripInformation. */
    interface ITripInformation {

        /** TripInformation tripId */
        tripId: string;

        /** TripInformation routeId */
        routeId: string;

        /** TripInformation stopIds */
        stopIds?: (string[]|null);
    }

    /** Represents a TripInformation. */
    class TripInformation implements ITripInformation {

        /**
         * Constructs a new TripInformation.
         * @param [properties] Properties to set
         */
        constructor(properties?: trip_index.ITripInformation);

        /** TripInformation tripId. */
        public tripId: string;

        /** TripInformation routeId. */
        public routeId: string;

        /** TripInformation stopIds. */
        public stopIds: string[];

        /**
         * Creates a new TripInformation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TripInformation instance
         */
        public static create(properties?: trip_index.ITripInformation): trip_index.TripInformation;

        /**
         * Encodes the specified TripInformation message. Does not implicitly {@link trip_index.TripInformation.verify|verify} messages.
         * @param message TripInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: trip_index.ITripInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TripInformation message, length delimited. Does not implicitly {@link trip_index.TripInformation.verify|verify} messages.
         * @param message TripInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: trip_index.ITripInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TripInformation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TripInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): trip_index.TripInformation;

        /**
         * Decodes a TripInformation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TripInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): trip_index.TripInformation;

        /**
         * Verifies a TripInformation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TripInformation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TripInformation
         */
        public static fromObject(object: { [k: string]: any }): trip_index.TripInformation;

        /**
         * Creates a plain object from a TripInformation message. Also converts values to other types if specified.
         * @param message TripInformation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: trip_index.TripInformation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TripInformation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TripInformation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
