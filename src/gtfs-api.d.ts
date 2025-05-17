import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace proto. */
export namespace proto {

    /** Properties of a StopEndpoint. */
    interface IStopEndpoint {

        /** StopEndpoint stop */
        stop?: (proto.IStop[]|null);
    }

    /** Represents a StopEndpoint. */
    class StopEndpoint implements IStopEndpoint {

        /**
         * Constructs a new StopEndpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IStopEndpoint);

        /** StopEndpoint stop. */
        public stop: proto.IStop[];

        /**
         * Creates a new StopEndpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StopEndpoint instance
         */
        public static create(properties?: proto.IStopEndpoint): proto.StopEndpoint;

        /**
         * Encodes the specified StopEndpoint message. Does not implicitly {@link proto.StopEndpoint.verify|verify} messages.
         * @param message StopEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IStopEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopEndpoint message, length delimited. Does not implicitly {@link proto.StopEndpoint.verify|verify} messages.
         * @param message StopEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IStopEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopEndpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StopEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.StopEndpoint;

        /**
         * Decodes a StopEndpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StopEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.StopEndpoint;

        /**
         * Verifies a StopEndpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StopEndpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StopEndpoint
         */
        public static fromObject(object: { [k: string]: any }): proto.StopEndpoint;

        /**
         * Creates a plain object from a StopEndpoint message. Also converts values to other types if specified.
         * @param message StopEndpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.StopEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StopEndpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StopEndpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RouteEndpoint. */
    interface IRouteEndpoint {

        /** RouteEndpoint route */
        route?: (proto.IRoute[]|null);
    }

    /** Represents a RouteEndpoint. */
    class RouteEndpoint implements IRouteEndpoint {

        /**
         * Constructs a new RouteEndpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRouteEndpoint);

        /** RouteEndpoint route. */
        public route: proto.IRoute[];

        /**
         * Creates a new RouteEndpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouteEndpoint instance
         */
        public static create(properties?: proto.IRouteEndpoint): proto.RouteEndpoint;

        /**
         * Encodes the specified RouteEndpoint message. Does not implicitly {@link proto.RouteEndpoint.verify|verify} messages.
         * @param message RouteEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRouteEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouteEndpoint message, length delimited. Does not implicitly {@link proto.RouteEndpoint.verify|verify} messages.
         * @param message RouteEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRouteEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouteEndpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RouteEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RouteEndpoint;

        /**
         * Decodes a RouteEndpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RouteEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RouteEndpoint;

        /**
         * Verifies a RouteEndpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouteEndpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouteEndpoint
         */
        public static fromObject(object: { [k: string]: any }): proto.RouteEndpoint;

        /**
         * Creates a plain object from a RouteEndpoint message. Also converts values to other types if specified.
         * @param message RouteEndpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RouteEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouteEndpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RouteEndpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StopDetailEndpoint. */
    interface IStopDetailEndpoint {

        /** StopDetailEndpoint stop */
        stop: proto.IStop;

        /** StopDetailEndpoint children */
        children?: (proto.IStop[]|null);
    }

    /** Represents a StopDetailEndpoint. */
    class StopDetailEndpoint implements IStopDetailEndpoint {

        /**
         * Constructs a new StopDetailEndpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IStopDetailEndpoint);

        /** StopDetailEndpoint stop. */
        public stop: proto.IStop;

        /** StopDetailEndpoint children. */
        public children: proto.IStop[];

        /**
         * Creates a new StopDetailEndpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StopDetailEndpoint instance
         */
        public static create(properties?: proto.IStopDetailEndpoint): proto.StopDetailEndpoint;

        /**
         * Encodes the specified StopDetailEndpoint message. Does not implicitly {@link proto.StopDetailEndpoint.verify|verify} messages.
         * @param message StopDetailEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IStopDetailEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopDetailEndpoint message, length delimited. Does not implicitly {@link proto.StopDetailEndpoint.verify|verify} messages.
         * @param message StopDetailEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IStopDetailEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopDetailEndpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StopDetailEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.StopDetailEndpoint;

        /**
         * Decodes a StopDetailEndpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StopDetailEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.StopDetailEndpoint;

        /**
         * Verifies a StopDetailEndpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StopDetailEndpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StopDetailEndpoint
         */
        public static fromObject(object: { [k: string]: any }): proto.StopDetailEndpoint;

        /**
         * Creates a plain object from a StopDetailEndpoint message. Also converts values to other types if specified.
         * @param message StopDetailEndpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.StopDetailEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StopDetailEndpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StopDetailEndpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StopRoutesEndpoint. */
    interface IStopRoutesEndpoint {

        /** StopRoutesEndpoint routeIds */
        routeIds?: (string[]|null);
    }

    /** Represents a StopRoutesEndpoint. */
    class StopRoutesEndpoint implements IStopRoutesEndpoint {

        /**
         * Constructs a new StopRoutesEndpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IStopRoutesEndpoint);

        /** StopRoutesEndpoint routeIds. */
        public routeIds: string[];

        /**
         * Creates a new StopRoutesEndpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StopRoutesEndpoint instance
         */
        public static create(properties?: proto.IStopRoutesEndpoint): proto.StopRoutesEndpoint;

        /**
         * Encodes the specified StopRoutesEndpoint message. Does not implicitly {@link proto.StopRoutesEndpoint.verify|verify} messages.
         * @param message StopRoutesEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IStopRoutesEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopRoutesEndpoint message, length delimited. Does not implicitly {@link proto.StopRoutesEndpoint.verify|verify} messages.
         * @param message StopRoutesEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IStopRoutesEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopRoutesEndpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StopRoutesEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.StopRoutesEndpoint;

        /**
         * Decodes a StopRoutesEndpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StopRoutesEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.StopRoutesEndpoint;

        /**
         * Verifies a StopRoutesEndpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StopRoutesEndpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StopRoutesEndpoint
         */
        public static fromObject(object: { [k: string]: any }): proto.StopRoutesEndpoint;

        /**
         * Creates a plain object from a StopRoutesEndpoint message. Also converts values to other types if specified.
         * @param message StopRoutesEndpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.StopRoutesEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StopRoutesEndpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StopRoutesEndpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RouteDetailEndpoint. */
    interface IRouteDetailEndpoint {

        /** RouteDetailEndpoint route */
        route: proto.IRoute;
    }

    /** Represents a RouteDetailEndpoint. */
    class RouteDetailEndpoint implements IRouteDetailEndpoint {

        /**
         * Constructs a new RouteDetailEndpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRouteDetailEndpoint);

        /** RouteDetailEndpoint route. */
        public route: proto.IRoute;

        /**
         * Creates a new RouteDetailEndpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouteDetailEndpoint instance
         */
        public static create(properties?: proto.IRouteDetailEndpoint): proto.RouteDetailEndpoint;

        /**
         * Encodes the specified RouteDetailEndpoint message. Does not implicitly {@link proto.RouteDetailEndpoint.verify|verify} messages.
         * @param message RouteDetailEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRouteDetailEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouteDetailEndpoint message, length delimited. Does not implicitly {@link proto.RouteDetailEndpoint.verify|verify} messages.
         * @param message RouteDetailEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRouteDetailEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouteDetailEndpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RouteDetailEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RouteDetailEndpoint;

        /**
         * Decodes a RouteDetailEndpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RouteDetailEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RouteDetailEndpoint;

        /**
         * Verifies a RouteDetailEndpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouteDetailEndpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouteDetailEndpoint
         */
        public static fromObject(object: { [k: string]: any }): proto.RouteDetailEndpoint;

        /**
         * Creates a plain object from a RouteDetailEndpoint message. Also converts values to other types if specified.
         * @param message RouteDetailEndpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RouteDetailEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouteDetailEndpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RouteDetailEndpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServiceEndpoint. */
    interface IServiceEndpoint {

        /** ServiceEndpoint service */
        service?: (proto.IService[]|null);
    }

    /** Represents a ServiceEndpoint. */
    class ServiceEndpoint implements IServiceEndpoint {

        /**
         * Constructs a new ServiceEndpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IServiceEndpoint);

        /** ServiceEndpoint service. */
        public service: proto.IService[];

        /**
         * Creates a new ServiceEndpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceEndpoint instance
         */
        public static create(properties?: proto.IServiceEndpoint): proto.ServiceEndpoint;

        /**
         * Encodes the specified ServiceEndpoint message. Does not implicitly {@link proto.ServiceEndpoint.verify|verify} messages.
         * @param message ServiceEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IServiceEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceEndpoint message, length delimited. Does not implicitly {@link proto.ServiceEndpoint.verify|verify} messages.
         * @param message ServiceEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IServiceEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceEndpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ServiceEndpoint;

        /**
         * Decodes a ServiceEndpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ServiceEndpoint;

        /**
         * Verifies a ServiceEndpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceEndpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceEndpoint
         */
        public static fromObject(object: { [k: string]: any }): proto.ServiceEndpoint;

        /**
         * Creates a plain object from a ServiceEndpoint message. Also converts values to other types if specified.
         * @param message ServiceEndpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ServiceEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceEndpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServiceEndpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RouteTimetableEndpoint. */
    interface IRouteTimetableEndpoint {

        /** RouteTimetableEndpoint routeId */
        routeId: string;

        /** RouteTimetableEndpoint serviceId */
        serviceId: string;

        /** RouteTimetableEndpoint trips */
        trips?: (proto.IRouteTripInformation[]|null);
    }

    /** Represents a RouteTimetableEndpoint. */
    class RouteTimetableEndpoint implements IRouteTimetableEndpoint {

        /**
         * Constructs a new RouteTimetableEndpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRouteTimetableEndpoint);

        /** RouteTimetableEndpoint routeId. */
        public routeId: string;

        /** RouteTimetableEndpoint serviceId. */
        public serviceId: string;

        /** RouteTimetableEndpoint trips. */
        public trips: proto.IRouteTripInformation[];

        /**
         * Creates a new RouteTimetableEndpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouteTimetableEndpoint instance
         */
        public static create(properties?: proto.IRouteTimetableEndpoint): proto.RouteTimetableEndpoint;

        /**
         * Encodes the specified RouteTimetableEndpoint message. Does not implicitly {@link proto.RouteTimetableEndpoint.verify|verify} messages.
         * @param message RouteTimetableEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRouteTimetableEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouteTimetableEndpoint message, length delimited. Does not implicitly {@link proto.RouteTimetableEndpoint.verify|verify} messages.
         * @param message RouteTimetableEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRouteTimetableEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouteTimetableEndpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RouteTimetableEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RouteTimetableEndpoint;

        /**
         * Decodes a RouteTimetableEndpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RouteTimetableEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RouteTimetableEndpoint;

        /**
         * Verifies a RouteTimetableEndpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouteTimetableEndpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouteTimetableEndpoint
         */
        public static fromObject(object: { [k: string]: any }): proto.RouteTimetableEndpoint;

        /**
         * Creates a plain object from a RouteTimetableEndpoint message. Also converts values to other types if specified.
         * @param message RouteTimetableEndpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RouteTimetableEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouteTimetableEndpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RouteTimetableEndpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RouteCanonicalTimetableEndpoint. */
    interface IRouteCanonicalTimetableEndpoint {

        /** RouteCanonicalTimetableEndpoint routeId */
        routeId: string;

        /** RouteCanonicalTimetableEndpoint serviceId */
        serviceId: string;

        /** RouteCanonicalTimetableEndpoint trip */
        trip: proto.IRouteTripInformation;
    }

    /** Represents a RouteCanonicalTimetableEndpoint. */
    class RouteCanonicalTimetableEndpoint implements IRouteCanonicalTimetableEndpoint {

        /**
         * Constructs a new RouteCanonicalTimetableEndpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRouteCanonicalTimetableEndpoint);

        /** RouteCanonicalTimetableEndpoint routeId. */
        public routeId: string;

        /** RouteCanonicalTimetableEndpoint serviceId. */
        public serviceId: string;

        /** RouteCanonicalTimetableEndpoint trip. */
        public trip: proto.IRouteTripInformation;

        /**
         * Creates a new RouteCanonicalTimetableEndpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouteCanonicalTimetableEndpoint instance
         */
        public static create(properties?: proto.IRouteCanonicalTimetableEndpoint): proto.RouteCanonicalTimetableEndpoint;

        /**
         * Encodes the specified RouteCanonicalTimetableEndpoint message. Does not implicitly {@link proto.RouteCanonicalTimetableEndpoint.verify|verify} messages.
         * @param message RouteCanonicalTimetableEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRouteCanonicalTimetableEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouteCanonicalTimetableEndpoint message, length delimited. Does not implicitly {@link proto.RouteCanonicalTimetableEndpoint.verify|verify} messages.
         * @param message RouteCanonicalTimetableEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRouteCanonicalTimetableEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouteCanonicalTimetableEndpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RouteCanonicalTimetableEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RouteCanonicalTimetableEndpoint;

        /**
         * Decodes a RouteCanonicalTimetableEndpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RouteCanonicalTimetableEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RouteCanonicalTimetableEndpoint;

        /**
         * Verifies a RouteCanonicalTimetableEndpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouteCanonicalTimetableEndpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouteCanonicalTimetableEndpoint
         */
        public static fromObject(object: { [k: string]: any }): proto.RouteCanonicalTimetableEndpoint;

        /**
         * Creates a plain object from a RouteCanonicalTimetableEndpoint message. Also converts values to other types if specified.
         * @param message RouteCanonicalTimetableEndpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RouteCanonicalTimetableEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouteCanonicalTimetableEndpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RouteCanonicalTimetableEndpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RouteTripTimetableEndpoint. */
    interface IRouteTripTimetableEndpoint {

        /** RouteTripTimetableEndpoint routeId */
        routeId: string;

        /** RouteTripTimetableEndpoint serviceId */
        serviceId: string;

        /** RouteTripTimetableEndpoint tripId */
        tripId: string;

        /** RouteTripTimetableEndpoint trip */
        trip: proto.IRouteTripInformation;
    }

    /** Represents a RouteTripTimetableEndpoint. */
    class RouteTripTimetableEndpoint implements IRouteTripTimetableEndpoint {

        /**
         * Constructs a new RouteTripTimetableEndpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRouteTripTimetableEndpoint);

        /** RouteTripTimetableEndpoint routeId. */
        public routeId: string;

        /** RouteTripTimetableEndpoint serviceId. */
        public serviceId: string;

        /** RouteTripTimetableEndpoint tripId. */
        public tripId: string;

        /** RouteTripTimetableEndpoint trip. */
        public trip: proto.IRouteTripInformation;

        /**
         * Creates a new RouteTripTimetableEndpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouteTripTimetableEndpoint instance
         */
        public static create(properties?: proto.IRouteTripTimetableEndpoint): proto.RouteTripTimetableEndpoint;

        /**
         * Encodes the specified RouteTripTimetableEndpoint message. Does not implicitly {@link proto.RouteTripTimetableEndpoint.verify|verify} messages.
         * @param message RouteTripTimetableEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRouteTripTimetableEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouteTripTimetableEndpoint message, length delimited. Does not implicitly {@link proto.RouteTripTimetableEndpoint.verify|verify} messages.
         * @param message RouteTripTimetableEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRouteTripTimetableEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouteTripTimetableEndpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RouteTripTimetableEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RouteTripTimetableEndpoint;

        /**
         * Decodes a RouteTripTimetableEndpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RouteTripTimetableEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RouteTripTimetableEndpoint;

        /**
         * Verifies a RouteTripTimetableEndpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouteTripTimetableEndpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouteTripTimetableEndpoint
         */
        public static fromObject(object: { [k: string]: any }): proto.RouteTripTimetableEndpoint;

        /**
         * Creates a plain object from a RouteTripTimetableEndpoint message. Also converts values to other types if specified.
         * @param message RouteTripTimetableEndpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RouteTripTimetableEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouteTripTimetableEndpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RouteTripTimetableEndpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RouteServicesEndpoint. */
    interface IRouteServicesEndpoint {

        /** RouteServicesEndpoint serviceIds */
        serviceIds?: (string[]|null);
    }

    /** Represents a RouteServicesEndpoint. */
    class RouteServicesEndpoint implements IRouteServicesEndpoint {

        /**
         * Constructs a new RouteServicesEndpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRouteServicesEndpoint);

        /** RouteServicesEndpoint serviceIds. */
        public serviceIds: string[];

        /**
         * Creates a new RouteServicesEndpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouteServicesEndpoint instance
         */
        public static create(properties?: proto.IRouteServicesEndpoint): proto.RouteServicesEndpoint;

        /**
         * Encodes the specified RouteServicesEndpoint message. Does not implicitly {@link proto.RouteServicesEndpoint.verify|verify} messages.
         * @param message RouteServicesEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRouteServicesEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouteServicesEndpoint message, length delimited. Does not implicitly {@link proto.RouteServicesEndpoint.verify|verify} messages.
         * @param message RouteServicesEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRouteServicesEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouteServicesEndpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RouteServicesEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RouteServicesEndpoint;

        /**
         * Decodes a RouteServicesEndpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RouteServicesEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RouteServicesEndpoint;

        /**
         * Verifies a RouteServicesEndpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouteServicesEndpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouteServicesEndpoint
         */
        public static fromObject(object: { [k: string]: any }): proto.RouteServicesEndpoint;

        /**
         * Creates a plain object from a RouteServicesEndpoint message. Also converts values to other types if specified.
         * @param message RouteServicesEndpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RouteServicesEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouteServicesEndpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RouteServicesEndpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RouteHeadingsEndpoint. */
    interface IRouteHeadingsEndpoint {

        /** RouteHeadingsEndpoint headings */
        headings?: (string[]|null);
    }

    /** Represents a RouteHeadingsEndpoint. */
    class RouteHeadingsEndpoint implements IRouteHeadingsEndpoint {

        /**
         * Constructs a new RouteHeadingsEndpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRouteHeadingsEndpoint);

        /** RouteHeadingsEndpoint headings. */
        public headings: string[];

        /**
         * Creates a new RouteHeadingsEndpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouteHeadingsEndpoint instance
         */
        public static create(properties?: proto.IRouteHeadingsEndpoint): proto.RouteHeadingsEndpoint;

        /**
         * Encodes the specified RouteHeadingsEndpoint message. Does not implicitly {@link proto.RouteHeadingsEndpoint.verify|verify} messages.
         * @param message RouteHeadingsEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRouteHeadingsEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouteHeadingsEndpoint message, length delimited. Does not implicitly {@link proto.RouteHeadingsEndpoint.verify|verify} messages.
         * @param message RouteHeadingsEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRouteHeadingsEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouteHeadingsEndpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RouteHeadingsEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RouteHeadingsEndpoint;

        /**
         * Decodes a RouteHeadingsEndpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RouteHeadingsEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RouteHeadingsEndpoint;

        /**
         * Verifies a RouteHeadingsEndpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouteHeadingsEndpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouteHeadingsEndpoint
         */
        public static fromObject(object: { [k: string]: any }): proto.RouteHeadingsEndpoint;

        /**
         * Creates a plain object from a RouteHeadingsEndpoint message. Also converts values to other types if specified.
         * @param message RouteHeadingsEndpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RouteHeadingsEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouteHeadingsEndpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RouteHeadingsEndpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a JourneySearchConfigEndpoint. */
    interface IJourneySearchConfigEndpoint {

        /** JourneySearchConfigEndpoint maximumComputationTime */
        maximumComputationTime: number;

        /** JourneySearchConfigEndpoint options */
        options?: (proto.IJourneySearchOption[]|null);
    }

    /** Represents a JourneySearchConfigEndpoint. */
    class JourneySearchConfigEndpoint implements IJourneySearchConfigEndpoint {

        /**
         * Constructs a new JourneySearchConfigEndpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IJourneySearchConfigEndpoint);

        /** JourneySearchConfigEndpoint maximumComputationTime. */
        public maximumComputationTime: number;

        /** JourneySearchConfigEndpoint options. */
        public options: proto.IJourneySearchOption[];

        /**
         * Creates a new JourneySearchConfigEndpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JourneySearchConfigEndpoint instance
         */
        public static create(properties?: proto.IJourneySearchConfigEndpoint): proto.JourneySearchConfigEndpoint;

        /**
         * Encodes the specified JourneySearchConfigEndpoint message. Does not implicitly {@link proto.JourneySearchConfigEndpoint.verify|verify} messages.
         * @param message JourneySearchConfigEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IJourneySearchConfigEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JourneySearchConfigEndpoint message, length delimited. Does not implicitly {@link proto.JourneySearchConfigEndpoint.verify|verify} messages.
         * @param message JourneySearchConfigEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IJourneySearchConfigEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JourneySearchConfigEndpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JourneySearchConfigEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.JourneySearchConfigEndpoint;

        /**
         * Decodes a JourneySearchConfigEndpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JourneySearchConfigEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.JourneySearchConfigEndpoint;

        /**
         * Verifies a JourneySearchConfigEndpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JourneySearchConfigEndpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JourneySearchConfigEndpoint
         */
        public static fromObject(object: { [k: string]: any }): proto.JourneySearchConfigEndpoint;

        /**
         * Creates a plain object from a JourneySearchConfigEndpoint message. Also converts values to other types if specified.
         * @param message JourneySearchConfigEndpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.JourneySearchConfigEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JourneySearchConfigEndpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JourneySearchConfigEndpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServiceAlertEndpoint. */
    interface IServiceAlertEndpoint {

        /** ServiceAlertEndpoint alerts */
        alerts?: (proto.IServiceAlert[]|null);
    }

    /** Represents a ServiceAlertEndpoint. */
    class ServiceAlertEndpoint implements IServiceAlertEndpoint {

        /**
         * Constructs a new ServiceAlertEndpoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IServiceAlertEndpoint);

        /** ServiceAlertEndpoint alerts. */
        public alerts: proto.IServiceAlert[];

        /**
         * Creates a new ServiceAlertEndpoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceAlertEndpoint instance
         */
        public static create(properties?: proto.IServiceAlertEndpoint): proto.ServiceAlertEndpoint;

        /**
         * Encodes the specified ServiceAlertEndpoint message. Does not implicitly {@link proto.ServiceAlertEndpoint.verify|verify} messages.
         * @param message ServiceAlertEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IServiceAlertEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceAlertEndpoint message, length delimited. Does not implicitly {@link proto.ServiceAlertEndpoint.verify|verify} messages.
         * @param message ServiceAlertEndpoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IServiceAlertEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceAlertEndpoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceAlertEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ServiceAlertEndpoint;

        /**
         * Decodes a ServiceAlertEndpoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceAlertEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ServiceAlertEndpoint;

        /**
         * Verifies a ServiceAlertEndpoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceAlertEndpoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceAlertEndpoint
         */
        public static fromObject(object: { [k: string]: any }): proto.ServiceAlertEndpoint;

        /**
         * Creates a plain object from a ServiceAlertEndpoint message. Also converts values to other types if specified.
         * @param message ServiceAlertEndpoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ServiceAlertEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceAlertEndpoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServiceAlertEndpoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a JourneySearchOption. */
    interface IJourneySearchOption {

        /** JourneySearchOption maximumWalkingTime */
        maximumWalkingTime?: (number|null);

        /** JourneySearchOption transferTime */
        transferTime?: (number|null);

        /** JourneySearchOption changeOverTime */
        changeOverTime?: (number|null);

        /** JourneySearchOption transferPenalty */
        transferPenalty?: (number|null);

        /** JourneySearchOption changeOverPenalty */
        changeOverPenalty?: (number|null);
    }

    /** Represents a JourneySearchOption. */
    class JourneySearchOption implements IJourneySearchOption {

        /**
         * Constructs a new JourneySearchOption.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IJourneySearchOption);

        /** JourneySearchOption maximumWalkingTime. */
        public maximumWalkingTime: number;

        /** JourneySearchOption transferTime. */
        public transferTime: number;

        /** JourneySearchOption changeOverTime. */
        public changeOverTime: number;

        /** JourneySearchOption transferPenalty. */
        public transferPenalty: number;

        /** JourneySearchOption changeOverPenalty. */
        public changeOverPenalty: number;

        /**
         * Creates a new JourneySearchOption instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JourneySearchOption instance
         */
        public static create(properties?: proto.IJourneySearchOption): proto.JourneySearchOption;

        /**
         * Encodes the specified JourneySearchOption message. Does not implicitly {@link proto.JourneySearchOption.verify|verify} messages.
         * @param message JourneySearchOption message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IJourneySearchOption, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JourneySearchOption message, length delimited. Does not implicitly {@link proto.JourneySearchOption.verify|verify} messages.
         * @param message JourneySearchOption message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IJourneySearchOption, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JourneySearchOption message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JourneySearchOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.JourneySearchOption;

        /**
         * Decodes a JourneySearchOption message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JourneySearchOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.JourneySearchOption;

        /**
         * Verifies a JourneySearchOption message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JourneySearchOption message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JourneySearchOption
         */
        public static fromObject(object: { [k: string]: any }): proto.JourneySearchOption;

        /**
         * Creates a plain object from a JourneySearchOption message. Also converts values to other types if specified.
         * @param message JourneySearchOption
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.JourneySearchOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JourneySearchOption to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JourneySearchOption
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Stop. */
    interface IStop {

        /** Stop id */
        id: string;

        /** Stop parentStation */
        parentStation?: (string|null);

        /** Stop name */
        name: string;

        /** Stop simpleName */
        simpleName?: (string|null);

        /** Stop location */
        location: proto.ILocation;

        /** Stop accessibility */
        accessibility: proto.IStopAccessibility;

        /** Stop visibility */
        visibility?: (proto.IStopVisibility|null);
    }

    /** Represents a Stop. */
    class Stop implements IStop {

        /**
         * Constructs a new Stop.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IStop);

        /** Stop id. */
        public id: string;

        /** Stop parentStation. */
        public parentStation: string;

        /** Stop name. */
        public name: string;

        /** Stop simpleName. */
        public simpleName: string;

        /** Stop location. */
        public location: proto.ILocation;

        /** Stop accessibility. */
        public accessibility: proto.IStopAccessibility;

        /** Stop visibility. */
        public visibility?: (proto.IStopVisibility|null);

        /**
         * Creates a new Stop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Stop instance
         */
        public static create(properties?: proto.IStop): proto.Stop;

        /**
         * Encodes the specified Stop message. Does not implicitly {@link proto.Stop.verify|verify} messages.
         * @param message Stop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Stop message, length delimited. Does not implicitly {@link proto.Stop.verify|verify} messages.
         * @param message Stop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Stop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Stop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Stop;

        /**
         * Decodes a Stop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Stop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Stop;

        /**
         * Verifies a Stop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Stop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Stop
         */
        public static fromObject(object: { [k: string]: any }): proto.Stop;

        /**
         * Creates a plain object from a Stop message. Also converts values to other types if specified.
         * @param message Stop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Stop, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Stop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Stop
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StopAccessibility. */
    interface IStopAccessibility {

        /** StopAccessibility stopWheelchairAccessible */
        stopWheelchairAccessible: proto.WheelchairStopAccessibility;
    }

    /** Represents a StopAccessibility. */
    class StopAccessibility implements IStopAccessibility {

        /**
         * Constructs a new StopAccessibility.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IStopAccessibility);

        /** StopAccessibility stopWheelchairAccessible. */
        public stopWheelchairAccessible: proto.WheelchairStopAccessibility;

        /**
         * Creates a new StopAccessibility instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StopAccessibility instance
         */
        public static create(properties?: proto.IStopAccessibility): proto.StopAccessibility;

        /**
         * Encodes the specified StopAccessibility message. Does not implicitly {@link proto.StopAccessibility.verify|verify} messages.
         * @param message StopAccessibility message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IStopAccessibility, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopAccessibility message, length delimited. Does not implicitly {@link proto.StopAccessibility.verify|verify} messages.
         * @param message StopAccessibility message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IStopAccessibility, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopAccessibility message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StopAccessibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.StopAccessibility;

        /**
         * Decodes a StopAccessibility message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StopAccessibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.StopAccessibility;

        /**
         * Verifies a StopAccessibility message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StopAccessibility message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StopAccessibility
         */
        public static fromObject(object: { [k: string]: any }): proto.StopAccessibility;

        /**
         * Creates a plain object from a StopAccessibility message. Also converts values to other types if specified.
         * @param message StopAccessibility
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.StopAccessibility, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StopAccessibility to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StopAccessibility
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StopVisibility. */
    interface IStopVisibility {

        /** StopVisibility visibleZoomedOut */
        visibleZoomedOut?: (boolean|null);

        /** StopVisibility visibleZoomedIn */
        visibleZoomedIn?: (boolean|null);

        /** StopVisibility showChildren */
        showChildren?: (boolean|null);

        /** StopVisibility searchWeight */
        searchWeight?: (number|null);
    }

    /** Represents a StopVisibility. */
    class StopVisibility implements IStopVisibility {

        /**
         * Constructs a new StopVisibility.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IStopVisibility);

        /** StopVisibility visibleZoomedOut. */
        public visibleZoomedOut: boolean;

        /** StopVisibility visibleZoomedIn. */
        public visibleZoomedIn: boolean;

        /** StopVisibility showChildren. */
        public showChildren: boolean;

        /** StopVisibility searchWeight. */
        public searchWeight: number;

        /**
         * Creates a new StopVisibility instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StopVisibility instance
         */
        public static create(properties?: proto.IStopVisibility): proto.StopVisibility;

        /**
         * Encodes the specified StopVisibility message. Does not implicitly {@link proto.StopVisibility.verify|verify} messages.
         * @param message StopVisibility message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IStopVisibility, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopVisibility message, length delimited. Does not implicitly {@link proto.StopVisibility.verify|verify} messages.
         * @param message StopVisibility message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IStopVisibility, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopVisibility message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StopVisibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.StopVisibility;

        /**
         * Decodes a StopVisibility message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StopVisibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.StopVisibility;

        /**
         * Verifies a StopVisibility message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StopVisibility message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StopVisibility
         */
        public static fromObject(object: { [k: string]: any }): proto.StopVisibility;

        /**
         * Creates a plain object from a StopVisibility message. Also converts values to other types if specified.
         * @param message StopVisibility
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.StopVisibility, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StopVisibility to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StopVisibility
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** WheelchairStopAccessibility enum. */
    enum WheelchairStopAccessibility {
        WHEELCHAIR_STOP_ACCESSIBILITY_UNKNOWN = 0,
        WHEELCHAIR_STOP_ACCESSIBILITY_NONE = 1,
        WHEELCHAIR_STOP_ACCESSIBILITY_PARTIAL = 2,
        WHEELCHAIR_STOP_ACCESSIBILITY_FULL = 3
    }

    /** Properties of a Route. */
    interface IRoute {

        /** Route id */
        id: string;

        /** Route code */
        code: string;

        /** Route displayCode */
        displayCode?: (string|null);

        /** Route colors */
        colors?: (proto.IColorPair|null);

        /** Route name */
        name: string;

        /** Route designation */
        designation?: (string|null);

        /** Route type */
        type: proto.RouteType;

        /** Route realTimeUrl */
        realTimeUrl?: (string|null);

        /** Route routeVisibility */
        routeVisibility?: (proto.IRouteVisibility|null);
    }

    /** Represents a Route. */
    class Route implements IRoute {

        /**
         * Constructs a new Route.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRoute);

        /** Route id. */
        public id: string;

        /** Route code. */
        public code: string;

        /** Route displayCode. */
        public displayCode: string;

        /** Route colors. */
        public colors?: (proto.IColorPair|null);

        /** Route name. */
        public name: string;

        /** Route designation. */
        public designation: string;

        /** Route type. */
        public type: proto.RouteType;

        /** Route realTimeUrl. */
        public realTimeUrl: string;

        /** Route routeVisibility. */
        public routeVisibility?: (proto.IRouteVisibility|null);

        /**
         * Creates a new Route instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Route instance
         */
        public static create(properties?: proto.IRoute): proto.Route;

        /**
         * Encodes the specified Route message. Does not implicitly {@link proto.Route.verify|verify} messages.
         * @param message Route message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Route message, length delimited. Does not implicitly {@link proto.Route.verify|verify} messages.
         * @param message Route message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Route message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Route
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Route;

        /**
         * Decodes a Route message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Route
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Route;

        /**
         * Verifies a Route message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Route message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Route
         */
        public static fromObject(object: { [k: string]: any }): proto.Route;

        /**
         * Creates a plain object from a Route message. Also converts values to other types if specified.
         * @param message Route
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Route, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Route to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Route
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RouteVisibility. */
    interface IRouteVisibility {

        /** RouteVisibility hidden */
        hidden?: (boolean|null);

        /** RouteVisibility searchWeight */
        searchWeight?: (number|null);
    }

    /** Represents a RouteVisibility. */
    class RouteVisibility implements IRouteVisibility {

        /**
         * Constructs a new RouteVisibility.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRouteVisibility);

        /** RouteVisibility hidden. */
        public hidden: boolean;

        /** RouteVisibility searchWeight. */
        public searchWeight: number;

        /**
         * Creates a new RouteVisibility instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouteVisibility instance
         */
        public static create(properties?: proto.IRouteVisibility): proto.RouteVisibility;

        /**
         * Encodes the specified RouteVisibility message. Does not implicitly {@link proto.RouteVisibility.verify|verify} messages.
         * @param message RouteVisibility message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRouteVisibility, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouteVisibility message, length delimited. Does not implicitly {@link proto.RouteVisibility.verify|verify} messages.
         * @param message RouteVisibility message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRouteVisibility, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouteVisibility message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RouteVisibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RouteVisibility;

        /**
         * Decodes a RouteVisibility message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RouteVisibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RouteVisibility;

        /**
         * Verifies a RouteVisibility message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouteVisibility message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouteVisibility
         */
        public static fromObject(object: { [k: string]: any }): proto.RouteVisibility;

        /**
         * Creates a plain object from a RouteVisibility message. Also converts values to other types if specified.
         * @param message RouteVisibility
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RouteVisibility, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouteVisibility to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RouteVisibility
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ColorPair. */
    interface IColorPair {

        /** ColorPair color */
        color: string;

        /** ColorPair onColor */
        onColor: string;
    }

    /** Represents a ColorPair. */
    class ColorPair implements IColorPair {

        /**
         * Constructs a new ColorPair.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IColorPair);

        /** ColorPair color. */
        public color: string;

        /** ColorPair onColor. */
        public onColor: string;

        /**
         * Creates a new ColorPair instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ColorPair instance
         */
        public static create(properties?: proto.IColorPair): proto.ColorPair;

        /**
         * Encodes the specified ColorPair message. Does not implicitly {@link proto.ColorPair.verify|verify} messages.
         * @param message ColorPair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IColorPair, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ColorPair message, length delimited. Does not implicitly {@link proto.ColorPair.verify|verify} messages.
         * @param message ColorPair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IColorPair, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ColorPair message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ColorPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ColorPair;

        /**
         * Decodes a ColorPair message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ColorPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ColorPair;

        /**
         * Verifies a ColorPair message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ColorPair message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ColorPair
         */
        public static fromObject(object: { [k: string]: any }): proto.ColorPair;

        /**
         * Creates a plain object from a ColorPair message. Also converts values to other types if specified.
         * @param message ColorPair
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ColorPair, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ColorPair to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ColorPair
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** RouteType enum. */
    enum RouteType {
        ROUTE_TYPE_UNKNOWN = 0,
        ROUTE_TYPE_TRAM = 1,
        ROUTE_TYPE_METRO = 2,
        ROUTE_TYPE_RAIL = 3,
        ROUTE_TYPE_BUS = 4,
        ROUTE_TYPE_FERRY = 5
    }

    /** Properties of a StopTimetable. */
    interface IStopTimetable {

        /** StopTimetable times */
        times?: (proto.IStopTimetableTime[]|null);
    }

    /** Represents a StopTimetable. */
    class StopTimetable implements IStopTimetable {

        /**
         * Constructs a new StopTimetable.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IStopTimetable);

        /** StopTimetable times. */
        public times: proto.IStopTimetableTime[];

        /**
         * Creates a new StopTimetable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StopTimetable instance
         */
        public static create(properties?: proto.IStopTimetable): proto.StopTimetable;

        /**
         * Encodes the specified StopTimetable message. Does not implicitly {@link proto.StopTimetable.verify|verify} messages.
         * @param message StopTimetable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IStopTimetable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopTimetable message, length delimited. Does not implicitly {@link proto.StopTimetable.verify|verify} messages.
         * @param message StopTimetable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IStopTimetable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopTimetable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StopTimetable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.StopTimetable;

        /**
         * Decodes a StopTimetable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StopTimetable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.StopTimetable;

        /**
         * Verifies a StopTimetable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StopTimetable message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StopTimetable
         */
        public static fromObject(object: { [k: string]: any }): proto.StopTimetable;

        /**
         * Creates a plain object from a StopTimetable message. Also converts values to other types if specified.
         * @param message StopTimetable
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.StopTimetable, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StopTimetable to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StopTimetable
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StopTimetableTime. */
    interface IStopTimetableTime {

        /** StopTimetableTime childStopId */
        childStopId?: (string|null);

        /** StopTimetableTime routeId */
        routeId: string;

        /** StopTimetableTime routeCode */
        routeCode: string;

        /** StopTimetableTime serviceId */
        serviceId: string;

        /** StopTimetableTime tripId */
        tripId: string;

        /** StopTimetableTime arrivalTime */
        arrivalTime: string;

        /** StopTimetableTime departureTime */
        departureTime: string;

        /** StopTimetableTime heading */
        heading: string;

        /** StopTimetableTime sequence */
        sequence: number;

        /** StopTimetableTime accessibility */
        accessibility: proto.IServiceAccessibility;
    }

    /** Represents a StopTimetableTime. */
    class StopTimetableTime implements IStopTimetableTime {

        /**
         * Constructs a new StopTimetableTime.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IStopTimetableTime);

        /** StopTimetableTime childStopId. */
        public childStopId: string;

        /** StopTimetableTime routeId. */
        public routeId: string;

        /** StopTimetableTime routeCode. */
        public routeCode: string;

        /** StopTimetableTime serviceId. */
        public serviceId: string;

        /** StopTimetableTime tripId. */
        public tripId: string;

        /** StopTimetableTime arrivalTime. */
        public arrivalTime: string;

        /** StopTimetableTime departureTime. */
        public departureTime: string;

        /** StopTimetableTime heading. */
        public heading: string;

        /** StopTimetableTime sequence. */
        public sequence: number;

        /** StopTimetableTime accessibility. */
        public accessibility: proto.IServiceAccessibility;

        /**
         * Creates a new StopTimetableTime instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StopTimetableTime instance
         */
        public static create(properties?: proto.IStopTimetableTime): proto.StopTimetableTime;

        /**
         * Encodes the specified StopTimetableTime message. Does not implicitly {@link proto.StopTimetableTime.verify|verify} messages.
         * @param message StopTimetableTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IStopTimetableTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopTimetableTime message, length delimited. Does not implicitly {@link proto.StopTimetableTime.verify|verify} messages.
         * @param message StopTimetableTime message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IStopTimetableTime, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopTimetableTime message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StopTimetableTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.StopTimetableTime;

        /**
         * Decodes a StopTimetableTime message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StopTimetableTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.StopTimetableTime;

        /**
         * Verifies a StopTimetableTime message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StopTimetableTime message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StopTimetableTime
         */
        public static fromObject(object: { [k: string]: any }): proto.StopTimetableTime;

        /**
         * Creates a plain object from a StopTimetableTime message. Also converts values to other types if specified.
         * @param message StopTimetableTime
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.StopTimetableTime, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StopTimetableTime to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StopTimetableTime
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Service. */
    interface IService {

        /** Service id */
        id: string;

        /** Service regular */
        regular?: (proto.ITimetableServiceRegular[]|null);

        /** Service exception */
        exception?: (proto.ITimetableServiceException[]|null);

        /** Service accessibility */
        accessibility?: (proto.IServiceAccessibility|null);
    }

    /** Represents a Service. */
    class Service implements IService {

        /**
         * Constructs a new Service.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IService);

        /** Service id. */
        public id: string;

        /** Service regular. */
        public regular: proto.ITimetableServiceRegular[];

        /** Service exception. */
        public exception: proto.ITimetableServiceException[];

        /** Service accessibility. */
        public accessibility?: (proto.IServiceAccessibility|null);

        /**
         * Creates a new Service instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Service instance
         */
        public static create(properties?: proto.IService): proto.Service;

        /**
         * Encodes the specified Service message. Does not implicitly {@link proto.Service.verify|verify} messages.
         * @param message Service message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IService, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Service message, length delimited. Does not implicitly {@link proto.Service.verify|verify} messages.
         * @param message Service message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IService, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Service message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Service
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Service;

        /**
         * Decodes a Service message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Service
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Service;

        /**
         * Verifies a Service message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Service message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Service
         */
        public static fromObject(object: { [k: string]: any }): proto.Service;

        /**
         * Creates a plain object from a Service message. Also converts values to other types if specified.
         * @param message Service
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Service, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Service to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Service
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ServiceBikesAllowed enum. */
    enum ServiceBikesAllowed {
        SERVICE_BIKES_ALLOWED_UNKNOWN = 0,
        SERVICE_BIKES_ALLOWED_ALLOWED = 1,
        SERVICE_BIKES_ALLOWED_DISALLOWED = 2
    }

    /** ServiceWheelchairAccessible enum. */
    enum ServiceWheelchairAccessible {
        SERVICE_WHEELCHAIR_ACCESSIBLE_UNKNOWN = 0,
        SERVICE_WHEELCHAIR_ACCESSIBLE_ACCESSIBLE = 1,
        SERVICE_WHEELCHAIR_ACCESSIBLE_INACCESSIBLE = 2
    }

    /** MultipleQualifier enum. */
    enum MultipleQualifier {
        MULTIPLE_QUALIFIER_SOME = 0,
        MULTIPLE_QUALIFIER_ALL = 1
    }

    /** Properties of a ServiceAccessibility. */
    interface IServiceAccessibility {

        /** ServiceAccessibility bikesAllowed */
        bikesAllowed: proto.ServiceBikesAllowed;

        /** ServiceAccessibility bikesAllowedAppliesToAllTrips */
        bikesAllowedAppliesToAllTrips?: (proto.MultipleQualifier|null);

        /** ServiceAccessibility wheelchairAccessible */
        wheelchairAccessible: proto.ServiceWheelchairAccessible;

        /** ServiceAccessibility wheelchairAccessibleAppliesToAllTrips */
        wheelchairAccessibleAppliesToAllTrips?: (proto.MultipleQualifier|null);
    }

    /** Represents a ServiceAccessibility. */
    class ServiceAccessibility implements IServiceAccessibility {

        /**
         * Constructs a new ServiceAccessibility.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IServiceAccessibility);

        /** ServiceAccessibility bikesAllowed. */
        public bikesAllowed: proto.ServiceBikesAllowed;

        /** ServiceAccessibility bikesAllowedAppliesToAllTrips. */
        public bikesAllowedAppliesToAllTrips: proto.MultipleQualifier;

        /** ServiceAccessibility wheelchairAccessible. */
        public wheelchairAccessible: proto.ServiceWheelchairAccessible;

        /** ServiceAccessibility wheelchairAccessibleAppliesToAllTrips. */
        public wheelchairAccessibleAppliesToAllTrips: proto.MultipleQualifier;

        /**
         * Creates a new ServiceAccessibility instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceAccessibility instance
         */
        public static create(properties?: proto.IServiceAccessibility): proto.ServiceAccessibility;

        /**
         * Encodes the specified ServiceAccessibility message. Does not implicitly {@link proto.ServiceAccessibility.verify|verify} messages.
         * @param message ServiceAccessibility message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IServiceAccessibility, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceAccessibility message, length delimited. Does not implicitly {@link proto.ServiceAccessibility.verify|verify} messages.
         * @param message ServiceAccessibility message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IServiceAccessibility, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceAccessibility message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceAccessibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ServiceAccessibility;

        /**
         * Decodes a ServiceAccessibility message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceAccessibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ServiceAccessibility;

        /**
         * Verifies a ServiceAccessibility message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceAccessibility message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceAccessibility
         */
        public static fromObject(object: { [k: string]: any }): proto.ServiceAccessibility;

        /**
         * Creates a plain object from a ServiceAccessibility message. Also converts values to other types if specified.
         * @param message ServiceAccessibility
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ServiceAccessibility, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceAccessibility to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServiceAccessibility
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TimetableServiceRegular. */
    interface ITimetableServiceRegular {

        /** TimetableServiceRegular monday */
        monday: boolean;

        /** TimetableServiceRegular tuesday */
        tuesday: boolean;

        /** TimetableServiceRegular wednesday */
        wednesday: boolean;

        /** TimetableServiceRegular thursday */
        thursday: boolean;

        /** TimetableServiceRegular friday */
        friday: boolean;

        /** TimetableServiceRegular saturday */
        saturday: boolean;

        /** TimetableServiceRegular sunday */
        sunday: boolean;

        /** TimetableServiceRegular startDate */
        startDate: string;

        /** TimetableServiceRegular endDate */
        endDate: string;

        /** TimetableServiceRegular exceptions */
        exceptions?: (proto.ITimetableServiceException[]|null);
    }

    /** Represents a TimetableServiceRegular. */
    class TimetableServiceRegular implements ITimetableServiceRegular {

        /**
         * Constructs a new TimetableServiceRegular.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITimetableServiceRegular);

        /** TimetableServiceRegular monday. */
        public monday: boolean;

        /** TimetableServiceRegular tuesday. */
        public tuesday: boolean;

        /** TimetableServiceRegular wednesday. */
        public wednesday: boolean;

        /** TimetableServiceRegular thursday. */
        public thursday: boolean;

        /** TimetableServiceRegular friday. */
        public friday: boolean;

        /** TimetableServiceRegular saturday. */
        public saturday: boolean;

        /** TimetableServiceRegular sunday. */
        public sunday: boolean;

        /** TimetableServiceRegular startDate. */
        public startDate: string;

        /** TimetableServiceRegular endDate. */
        public endDate: string;

        /** TimetableServiceRegular exceptions. */
        public exceptions: proto.ITimetableServiceException[];

        /**
         * Creates a new TimetableServiceRegular instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimetableServiceRegular instance
         */
        public static create(properties?: proto.ITimetableServiceRegular): proto.TimetableServiceRegular;

        /**
         * Encodes the specified TimetableServiceRegular message. Does not implicitly {@link proto.TimetableServiceRegular.verify|verify} messages.
         * @param message TimetableServiceRegular message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITimetableServiceRegular, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimetableServiceRegular message, length delimited. Does not implicitly {@link proto.TimetableServiceRegular.verify|verify} messages.
         * @param message TimetableServiceRegular message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITimetableServiceRegular, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimetableServiceRegular message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimetableServiceRegular
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.TimetableServiceRegular;

        /**
         * Decodes a TimetableServiceRegular message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimetableServiceRegular
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.TimetableServiceRegular;

        /**
         * Verifies a TimetableServiceRegular message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimetableServiceRegular message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimetableServiceRegular
         */
        public static fromObject(object: { [k: string]: any }): proto.TimetableServiceRegular;

        /**
         * Creates a plain object from a TimetableServiceRegular message. Also converts values to other types if specified.
         * @param message TimetableServiceRegular
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.TimetableServiceRegular, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimetableServiceRegular to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TimetableServiceRegular
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** TimetableServiceExceptionType enum. */
    enum TimetableServiceExceptionType {
        TIMETABLE_SERVICE_EXCEPTION_TYPE_ADDED = 1,
        TIMETABLE_SERVICE_EXCEPTION_TYPE_REMOVED = 2
    }

    /** Properties of a TimetableServiceException. */
    interface ITimetableServiceException {

        /** TimetableServiceException date */
        date: string;

        /** TimetableServiceException type */
        type: proto.TimetableServiceExceptionType;
    }

    /** Represents a TimetableServiceException. */
    class TimetableServiceException implements ITimetableServiceException {

        /**
         * Constructs a new TimetableServiceException.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITimetableServiceException);

        /** TimetableServiceException date. */
        public date: string;

        /** TimetableServiceException type. */
        public type: proto.TimetableServiceExceptionType;

        /**
         * Creates a new TimetableServiceException instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimetableServiceException instance
         */
        public static create(properties?: proto.ITimetableServiceException): proto.TimetableServiceException;

        /**
         * Encodes the specified TimetableServiceException message. Does not implicitly {@link proto.TimetableServiceException.verify|verify} messages.
         * @param message TimetableServiceException message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITimetableServiceException, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimetableServiceException message, length delimited. Does not implicitly {@link proto.TimetableServiceException.verify|verify} messages.
         * @param message TimetableServiceException message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITimetableServiceException, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimetableServiceException message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimetableServiceException
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.TimetableServiceException;

        /**
         * Decodes a TimetableServiceException message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimetableServiceException
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.TimetableServiceException;

        /**
         * Verifies a TimetableServiceException message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimetableServiceException message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimetableServiceException
         */
        public static fromObject(object: { [k: string]: any }): proto.TimetableServiceException;

        /**
         * Creates a plain object from a TimetableServiceException message. Also converts values to other types if specified.
         * @param message TimetableServiceException
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.TimetableServiceException, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimetableServiceException to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TimetableServiceException
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RouteTripInformation. */
    interface IRouteTripInformation {

        /** RouteTripInformation startTime */
        startTime?: (string|null);

        /** RouteTripInformation endTime */
        endTime?: (string|null);

        /** RouteTripInformation accessibility */
        accessibility: proto.IServiceAccessibility;

        /** RouteTripInformation stops */
        stops?: (proto.IRouteTripStop[]|null);

        /** RouteTripInformation heading */
        heading?: (string|null);
    }

    /** Represents a RouteTripInformation. */
    class RouteTripInformation implements IRouteTripInformation {

        /**
         * Constructs a new RouteTripInformation.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRouteTripInformation);

        /** RouteTripInformation startTime. */
        public startTime: string;

        /** RouteTripInformation endTime. */
        public endTime: string;

        /** RouteTripInformation accessibility. */
        public accessibility: proto.IServiceAccessibility;

        /** RouteTripInformation stops. */
        public stops: proto.IRouteTripStop[];

        /** RouteTripInformation heading. */
        public heading: string;

        /**
         * Creates a new RouteTripInformation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouteTripInformation instance
         */
        public static create(properties?: proto.IRouteTripInformation): proto.RouteTripInformation;

        /**
         * Encodes the specified RouteTripInformation message. Does not implicitly {@link proto.RouteTripInformation.verify|verify} messages.
         * @param message RouteTripInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRouteTripInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouteTripInformation message, length delimited. Does not implicitly {@link proto.RouteTripInformation.verify|verify} messages.
         * @param message RouteTripInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRouteTripInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouteTripInformation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RouteTripInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RouteTripInformation;

        /**
         * Decodes a RouteTripInformation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RouteTripInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RouteTripInformation;

        /**
         * Verifies a RouteTripInformation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouteTripInformation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouteTripInformation
         */
        public static fromObject(object: { [k: string]: any }): proto.RouteTripInformation;

        /**
         * Creates a plain object from a RouteTripInformation message. Also converts values to other types if specified.
         * @param message RouteTripInformation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RouteTripInformation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouteTripInformation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RouteTripInformation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RouteTripStop. */
    interface IRouteTripStop {

        /** RouteTripStop stopId */
        stopId: string;

        /** RouteTripStop arrivalTime */
        arrivalTime?: (string|null);

        /** RouteTripStop departureTime */
        departureTime?: (string|null);

        /** RouteTripStop sequence */
        sequence: number;
    }

    /** Represents a RouteTripStop. */
    class RouteTripStop implements IRouteTripStop {

        /**
         * Constructs a new RouteTripStop.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRouteTripStop);

        /** RouteTripStop stopId. */
        public stopId: string;

        /** RouteTripStop arrivalTime. */
        public arrivalTime: string;

        /** RouteTripStop departureTime. */
        public departureTime: string;

        /** RouteTripStop sequence. */
        public sequence: number;

        /**
         * Creates a new RouteTripStop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouteTripStop instance
         */
        public static create(properties?: proto.IRouteTripStop): proto.RouteTripStop;

        /**
         * Encodes the specified RouteTripStop message. Does not implicitly {@link proto.RouteTripStop.verify|verify} messages.
         * @param message RouteTripStop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRouteTripStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouteTripStop message, length delimited. Does not implicitly {@link proto.RouteTripStop.verify|verify} messages.
         * @param message RouteTripStop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRouteTripStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouteTripStop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RouteTripStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RouteTripStop;

        /**
         * Decodes a RouteTripStop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RouteTripStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RouteTripStop;

        /**
         * Verifies a RouteTripStop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouteTripStop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouteTripStop
         */
        public static fromObject(object: { [k: string]: any }): proto.RouteTripStop;

        /**
         * Creates a plain object from a RouteTripStop message. Also converts values to other types if specified.
         * @param message RouteTripStop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RouteTripStop, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouteTripStop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RouteTripStop
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Location. */
    interface ILocation {

        /** Location lat */
        lat: number;

        /** Location lng */
        lng: number;
    }

    /** Represents a Location. */
    class Location implements ILocation {

        /**
         * Constructs a new Location.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ILocation);

        /** Location lat. */
        public lat: number;

        /** Location lng. */
        public lng: number;

        /**
         * Creates a new Location instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Location instance
         */
        public static create(properties?: proto.ILocation): proto.Location;

        /**
         * Encodes the specified Location message. Does not implicitly {@link proto.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link proto.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Location;

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Location;

        /**
         * Verifies a Location message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Location
         */
        public static fromObject(object: { [k: string]: any }): proto.Location;

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @param message Location
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Location to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Location
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ServiceAlertRegion enum. */
    enum ServiceAlertRegion {
        SERVICE_ALERT_REGION_BELCONNEN = 1,
        SERVICE_ALERT_REGION_CENTRAL_CANBERRA = 2,
        SERVICE_ALERT_REGION_GUNGAHLIN = 3,
        SERVICE_ALERT_REGION_TUGGERANONG = 4,
        SERVICE_ALERT_REGION_WODEN_WESTON_CREEK_MOLONGLO = 5
    }

    /** Properties of a ServiceAlert. */
    interface IServiceAlert {

        /** ServiceAlert id */
        id: string;

        /** ServiceAlert title */
        title: string;

        /** ServiceAlert date */
        date?: (string|null);

        /** ServiceAlert url */
        url?: (string|null);

        /** ServiceAlert regions */
        regions?: (proto.ServiceAlertRegion[]|null);

        /** ServiceAlert highlightDuration */
        highlightDuration?: (string|null);
    }

    /** Represents a ServiceAlert. */
    class ServiceAlert implements IServiceAlert {

        /**
         * Constructs a new ServiceAlert.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IServiceAlert);

        /** ServiceAlert id. */
        public id: string;

        /** ServiceAlert title. */
        public title: string;

        /** ServiceAlert date. */
        public date: string;

        /** ServiceAlert url. */
        public url: string;

        /** ServiceAlert regions. */
        public regions: proto.ServiceAlertRegion[];

        /** ServiceAlert highlightDuration. */
        public highlightDuration: string;

        /**
         * Creates a new ServiceAlert instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceAlert instance
         */
        public static create(properties?: proto.IServiceAlert): proto.ServiceAlert;

        /**
         * Encodes the specified ServiceAlert message. Does not implicitly {@link proto.ServiceAlert.verify|verify} messages.
         * @param message ServiceAlert message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IServiceAlert, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceAlert message, length delimited. Does not implicitly {@link proto.ServiceAlert.verify|verify} messages.
         * @param message ServiceAlert message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IServiceAlert, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceAlert message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceAlert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ServiceAlert;

        /**
         * Decodes a ServiceAlert message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceAlert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ServiceAlert;

        /**
         * Verifies a ServiceAlert message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceAlert message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceAlert
         */
        public static fromObject(object: { [k: string]: any }): proto.ServiceAlert;

        /**
         * Creates a plain object from a ServiceAlert message. Also converts values to other types if specified.
         * @param message ServiceAlert
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ServiceAlert, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceAlert to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServiceAlert
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
