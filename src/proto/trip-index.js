/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const trip_index = $root.trip_index = (() => {

    /**
     * Namespace trip_index.
     * @exports trip_index
     * @namespace
     */
    const trip_index = {};

    trip_index.TripIndex = (function() {

        /**
         * Properties of a TripIndex.
         * @memberof trip_index
         * @interface ITripIndex
         * @property {Array.<trip_index.ITripInformation>|null} [trips] TripIndex trips
         */

        /**
         * Constructs a new TripIndex.
         * @memberof trip_index
         * @classdesc Represents a TripIndex.
         * @implements ITripIndex
         * @constructor
         * @param {trip_index.ITripIndex=} [properties] Properties to set
         */
        function TripIndex(properties) {
            this.trips = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TripIndex trips.
         * @member {Array.<trip_index.ITripInformation>} trips
         * @memberof trip_index.TripIndex
         * @instance
         */
        TripIndex.prototype.trips = $util.emptyArray;

        /**
         * Creates a new TripIndex instance using the specified properties.
         * @function create
         * @memberof trip_index.TripIndex
         * @static
         * @param {trip_index.ITripIndex=} [properties] Properties to set
         * @returns {trip_index.TripIndex} TripIndex instance
         */
        TripIndex.create = function create(properties) {
            return new TripIndex(properties);
        };

        /**
         * Encodes the specified TripIndex message. Does not implicitly {@link trip_index.TripIndex.verify|verify} messages.
         * @function encode
         * @memberof trip_index.TripIndex
         * @static
         * @param {trip_index.ITripIndex} message TripIndex message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TripIndex.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.trips != null && message.trips.length)
                for (let i = 0; i < message.trips.length; ++i)
                    $root.trip_index.TripInformation.encode(message.trips[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TripIndex message, length delimited. Does not implicitly {@link trip_index.TripIndex.verify|verify} messages.
         * @function encodeDelimited
         * @memberof trip_index.TripIndex
         * @static
         * @param {trip_index.ITripIndex} message TripIndex message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TripIndex.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TripIndex message from the specified reader or buffer.
         * @function decode
         * @memberof trip_index.TripIndex
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {trip_index.TripIndex} TripIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TripIndex.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.trip_index.TripIndex();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.trips && message.trips.length))
                            message.trips = [];
                        message.trips.push($root.trip_index.TripInformation.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TripIndex message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof trip_index.TripIndex
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {trip_index.TripIndex} TripIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TripIndex.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TripIndex message.
         * @function verify
         * @memberof trip_index.TripIndex
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TripIndex.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.trips != null && message.hasOwnProperty("trips")) {
                if (!Array.isArray(message.trips))
                    return "trips: array expected";
                for (let i = 0; i < message.trips.length; ++i) {
                    let error = $root.trip_index.TripInformation.verify(message.trips[i]);
                    if (error)
                        return "trips." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TripIndex message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trip_index.TripIndex
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trip_index.TripIndex} TripIndex
         */
        TripIndex.fromObject = function fromObject(object) {
            if (object instanceof $root.trip_index.TripIndex)
                return object;
            let message = new $root.trip_index.TripIndex();
            if (object.trips) {
                if (!Array.isArray(object.trips))
                    throw TypeError(".trip_index.TripIndex.trips: array expected");
                message.trips = [];
                for (let i = 0; i < object.trips.length; ++i) {
                    if (typeof object.trips[i] !== "object")
                        throw TypeError(".trip_index.TripIndex.trips: object expected");
                    message.trips[i] = $root.trip_index.TripInformation.fromObject(object.trips[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TripIndex message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trip_index.TripIndex
         * @static
         * @param {trip_index.TripIndex} message TripIndex
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TripIndex.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.trips = [];
            if (message.trips && message.trips.length) {
                object.trips = [];
                for (let j = 0; j < message.trips.length; ++j)
                    object.trips[j] = $root.trip_index.TripInformation.toObject(message.trips[j], options);
            }
            return object;
        };

        /**
         * Converts this TripIndex to JSON.
         * @function toJSON
         * @memberof trip_index.TripIndex
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TripIndex.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TripIndex
         * @function getTypeUrl
         * @memberof trip_index.TripIndex
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TripIndex.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/trip_index.TripIndex";
        };

        return TripIndex;
    })();

    trip_index.TripInformation = (function() {

        /**
         * Properties of a TripInformation.
         * @memberof trip_index
         * @interface ITripInformation
         * @property {string} tripId TripInformation tripId
         * @property {string} routeId TripInformation routeId
         * @property {Array.<string>|null} [stopIds] TripInformation stopIds
         */

        /**
         * Constructs a new TripInformation.
         * @memberof trip_index
         * @classdesc Represents a TripInformation.
         * @implements ITripInformation
         * @constructor
         * @param {trip_index.ITripInformation=} [properties] Properties to set
         */
        function TripInformation(properties) {
            this.stopIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TripInformation tripId.
         * @member {string} tripId
         * @memberof trip_index.TripInformation
         * @instance
         */
        TripInformation.prototype.tripId = "";

        /**
         * TripInformation routeId.
         * @member {string} routeId
         * @memberof trip_index.TripInformation
         * @instance
         */
        TripInformation.prototype.routeId = "";

        /**
         * TripInformation stopIds.
         * @member {Array.<string>} stopIds
         * @memberof trip_index.TripInformation
         * @instance
         */
        TripInformation.prototype.stopIds = $util.emptyArray;

        /**
         * Creates a new TripInformation instance using the specified properties.
         * @function create
         * @memberof trip_index.TripInformation
         * @static
         * @param {trip_index.ITripInformation=} [properties] Properties to set
         * @returns {trip_index.TripInformation} TripInformation instance
         */
        TripInformation.create = function create(properties) {
            return new TripInformation(properties);
        };

        /**
         * Encodes the specified TripInformation message. Does not implicitly {@link trip_index.TripInformation.verify|verify} messages.
         * @function encode
         * @memberof trip_index.TripInformation
         * @static
         * @param {trip_index.ITripInformation} message TripInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TripInformation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tripId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.routeId);
            if (message.stopIds != null && message.stopIds.length)
                for (let i = 0; i < message.stopIds.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.stopIds[i]);
            return writer;
        };

        /**
         * Encodes the specified TripInformation message, length delimited. Does not implicitly {@link trip_index.TripInformation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof trip_index.TripInformation
         * @static
         * @param {trip_index.ITripInformation} message TripInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TripInformation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TripInformation message from the specified reader or buffer.
         * @function decode
         * @memberof trip_index.TripInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {trip_index.TripInformation} TripInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TripInformation.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.trip_index.TripInformation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.tripId = reader.string();
                        break;
                    }
                case 2: {
                        message.routeId = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.stopIds && message.stopIds.length))
                            message.stopIds = [];
                        message.stopIds.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("tripId"))
                throw $util.ProtocolError("missing required 'tripId'", { instance: message });
            if (!message.hasOwnProperty("routeId"))
                throw $util.ProtocolError("missing required 'routeId'", { instance: message });
            return message;
        };

        /**
         * Decodes a TripInformation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof trip_index.TripInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {trip_index.TripInformation} TripInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TripInformation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TripInformation message.
         * @function verify
         * @memberof trip_index.TripInformation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TripInformation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.tripId))
                return "tripId: string expected";
            if (!$util.isString(message.routeId))
                return "routeId: string expected";
            if (message.stopIds != null && message.hasOwnProperty("stopIds")) {
                if (!Array.isArray(message.stopIds))
                    return "stopIds: array expected";
                for (let i = 0; i < message.stopIds.length; ++i)
                    if (!$util.isString(message.stopIds[i]))
                        return "stopIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a TripInformation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof trip_index.TripInformation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {trip_index.TripInformation} TripInformation
         */
        TripInformation.fromObject = function fromObject(object) {
            if (object instanceof $root.trip_index.TripInformation)
                return object;
            let message = new $root.trip_index.TripInformation();
            if (object.tripId != null)
                message.tripId = String(object.tripId);
            if (object.routeId != null)
                message.routeId = String(object.routeId);
            if (object.stopIds) {
                if (!Array.isArray(object.stopIds))
                    throw TypeError(".trip_index.TripInformation.stopIds: array expected");
                message.stopIds = [];
                for (let i = 0; i < object.stopIds.length; ++i)
                    message.stopIds[i] = String(object.stopIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a TripInformation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof trip_index.TripInformation
         * @static
         * @param {trip_index.TripInformation} message TripInformation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TripInformation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.stopIds = [];
            if (options.defaults) {
                object.tripId = "";
                object.routeId = "";
            }
            if (message.tripId != null && message.hasOwnProperty("tripId"))
                object.tripId = message.tripId;
            if (message.routeId != null && message.hasOwnProperty("routeId"))
                object.routeId = message.routeId;
            if (message.stopIds && message.stopIds.length) {
                object.stopIds = [];
                for (let j = 0; j < message.stopIds.length; ++j)
                    object.stopIds[j] = message.stopIds[j];
            }
            return object;
        };

        /**
         * Converts this TripInformation to JSON.
         * @function toJSON
         * @memberof trip_index.TripInformation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TripInformation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TripInformation
         * @function getTypeUrl
         * @memberof trip_index.TripInformation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TripInformation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/trip_index.TripInformation";
        };

        return TripInformation;
    })();

    return trip_index;
})();

export { $root as default };
