/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const gtfs_api = $root.gtfs_api = (() => {

    /**
     * Namespace gtfs_api.
     * @exports gtfs_api
     * @namespace
     */
    const gtfs_api = {};

    gtfs_api.RealtimeEndpoint = (function() {

        /**
         * Properties of a RealtimeEndpoint.
         * @memberof gtfs_api
         * @interface IRealtimeEndpoint
         * @property {Array.<gtfs_api.IRealtimeUpdate>|null} [updates] RealtimeEndpoint updates
         */

        /**
         * Constructs a new RealtimeEndpoint.
         * @memberof gtfs_api
         * @classdesc Represents a RealtimeEndpoint.
         * @implements IRealtimeEndpoint
         * @constructor
         * @param {gtfs_api.IRealtimeEndpoint=} [properties] Properties to set
         */
        function RealtimeEndpoint(properties) {
            this.updates = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RealtimeEndpoint updates.
         * @member {Array.<gtfs_api.IRealtimeUpdate>} updates
         * @memberof gtfs_api.RealtimeEndpoint
         * @instance
         */
        RealtimeEndpoint.prototype.updates = $util.emptyArray;

        /**
         * Creates a new RealtimeEndpoint instance using the specified properties.
         * @function create
         * @memberof gtfs_api.RealtimeEndpoint
         * @static
         * @param {gtfs_api.IRealtimeEndpoint=} [properties] Properties to set
         * @returns {gtfs_api.RealtimeEndpoint} RealtimeEndpoint instance
         */
        RealtimeEndpoint.create = function create(properties) {
            return new RealtimeEndpoint(properties);
        };

        /**
         * Encodes the specified RealtimeEndpoint message. Does not implicitly {@link gtfs_api.RealtimeEndpoint.verify|verify} messages.
         * @function encode
         * @memberof gtfs_api.RealtimeEndpoint
         * @static
         * @param {gtfs_api.IRealtimeEndpoint} message RealtimeEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RealtimeEndpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.updates != null && message.updates.length)
                for (let i = 0; i < message.updates.length; ++i)
                    $root.gtfs_api.RealtimeUpdate.encode(message.updates[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RealtimeEndpoint message, length delimited. Does not implicitly {@link gtfs_api.RealtimeEndpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gtfs_api.RealtimeEndpoint
         * @static
         * @param {gtfs_api.IRealtimeEndpoint} message RealtimeEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RealtimeEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RealtimeEndpoint message from the specified reader or buffer.
         * @function decode
         * @memberof gtfs_api.RealtimeEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gtfs_api.RealtimeEndpoint} RealtimeEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RealtimeEndpoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gtfs_api.RealtimeEndpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.updates && message.updates.length))
                            message.updates = [];
                        message.updates.push($root.gtfs_api.RealtimeUpdate.decode(reader, reader.uint32()));
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
         * Decodes a RealtimeEndpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gtfs_api.RealtimeEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gtfs_api.RealtimeEndpoint} RealtimeEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RealtimeEndpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RealtimeEndpoint message.
         * @function verify
         * @memberof gtfs_api.RealtimeEndpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RealtimeEndpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.updates != null && message.hasOwnProperty("updates")) {
                if (!Array.isArray(message.updates))
                    return "updates: array expected";
                for (let i = 0; i < message.updates.length; ++i) {
                    let error = $root.gtfs_api.RealtimeUpdate.verify(message.updates[i]);
                    if (error)
                        return "updates." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RealtimeEndpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gtfs_api.RealtimeEndpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gtfs_api.RealtimeEndpoint} RealtimeEndpoint
         */
        RealtimeEndpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.gtfs_api.RealtimeEndpoint)
                return object;
            let message = new $root.gtfs_api.RealtimeEndpoint();
            if (object.updates) {
                if (!Array.isArray(object.updates))
                    throw TypeError(".gtfs_api.RealtimeEndpoint.updates: array expected");
                message.updates = [];
                for (let i = 0; i < object.updates.length; ++i) {
                    if (typeof object.updates[i] !== "object")
                        throw TypeError(".gtfs_api.RealtimeEndpoint.updates: object expected");
                    message.updates[i] = $root.gtfs_api.RealtimeUpdate.fromObject(object.updates[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RealtimeEndpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gtfs_api.RealtimeEndpoint
         * @static
         * @param {gtfs_api.RealtimeEndpoint} message RealtimeEndpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RealtimeEndpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.updates = [];
            if (message.updates && message.updates.length) {
                object.updates = [];
                for (let j = 0; j < message.updates.length; ++j)
                    object.updates[j] = $root.gtfs_api.RealtimeUpdate.toObject(message.updates[j], options);
            }
            return object;
        };

        /**
         * Converts this RealtimeEndpoint to JSON.
         * @function toJSON
         * @memberof gtfs_api.RealtimeEndpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RealtimeEndpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RealtimeEndpoint
         * @function getTypeUrl
         * @memberof gtfs_api.RealtimeEndpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RealtimeEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gtfs_api.RealtimeEndpoint";
        };

        return RealtimeEndpoint;
    })();

    gtfs_api.RealtimeUpdate = (function() {

        /**
         * Properties of a RealtimeUpdate.
         * @memberof gtfs_api
         * @interface IRealtimeUpdate
         * @property {string} tripId RealtimeUpdate tripId
         * @property {number|null} [delay] RealtimeUpdate delay
         */

        /**
         * Constructs a new RealtimeUpdate.
         * @memberof gtfs_api
         * @classdesc Represents a RealtimeUpdate.
         * @implements IRealtimeUpdate
         * @constructor
         * @param {gtfs_api.IRealtimeUpdate=} [properties] Properties to set
         */
        function RealtimeUpdate(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RealtimeUpdate tripId.
         * @member {string} tripId
         * @memberof gtfs_api.RealtimeUpdate
         * @instance
         */
        RealtimeUpdate.prototype.tripId = "";

        /**
         * RealtimeUpdate delay.
         * @member {number} delay
         * @memberof gtfs_api.RealtimeUpdate
         * @instance
         */
        RealtimeUpdate.prototype.delay = 0;

        /**
         * Creates a new RealtimeUpdate instance using the specified properties.
         * @function create
         * @memberof gtfs_api.RealtimeUpdate
         * @static
         * @param {gtfs_api.IRealtimeUpdate=} [properties] Properties to set
         * @returns {gtfs_api.RealtimeUpdate} RealtimeUpdate instance
         */
        RealtimeUpdate.create = function create(properties) {
            return new RealtimeUpdate(properties);
        };

        /**
         * Encodes the specified RealtimeUpdate message. Does not implicitly {@link gtfs_api.RealtimeUpdate.verify|verify} messages.
         * @function encode
         * @memberof gtfs_api.RealtimeUpdate
         * @static
         * @param {gtfs_api.IRealtimeUpdate} message RealtimeUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RealtimeUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tripId);
            if (message.delay != null && Object.hasOwnProperty.call(message, "delay"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.delay);
            return writer;
        };

        /**
         * Encodes the specified RealtimeUpdate message, length delimited. Does not implicitly {@link gtfs_api.RealtimeUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gtfs_api.RealtimeUpdate
         * @static
         * @param {gtfs_api.IRealtimeUpdate} message RealtimeUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RealtimeUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RealtimeUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof gtfs_api.RealtimeUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gtfs_api.RealtimeUpdate} RealtimeUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RealtimeUpdate.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.gtfs_api.RealtimeUpdate();
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
                        message.delay = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("tripId"))
                throw $util.ProtocolError("missing required 'tripId'", { instance: message });
            return message;
        };

        /**
         * Decodes a RealtimeUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gtfs_api.RealtimeUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gtfs_api.RealtimeUpdate} RealtimeUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RealtimeUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RealtimeUpdate message.
         * @function verify
         * @memberof gtfs_api.RealtimeUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RealtimeUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.tripId))
                return "tripId: string expected";
            if (message.delay != null && message.hasOwnProperty("delay"))
                if (!$util.isInteger(message.delay))
                    return "delay: integer expected";
            return null;
        };

        /**
         * Creates a RealtimeUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gtfs_api.RealtimeUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gtfs_api.RealtimeUpdate} RealtimeUpdate
         */
        RealtimeUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.gtfs_api.RealtimeUpdate)
                return object;
            let message = new $root.gtfs_api.RealtimeUpdate();
            if (object.tripId != null)
                message.tripId = String(object.tripId);
            if (object.delay != null)
                message.delay = object.delay | 0;
            return message;
        };

        /**
         * Creates a plain object from a RealtimeUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gtfs_api.RealtimeUpdate
         * @static
         * @param {gtfs_api.RealtimeUpdate} message RealtimeUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RealtimeUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.tripId = "";
                object.delay = 0;
            }
            if (message.tripId != null && message.hasOwnProperty("tripId"))
                object.tripId = message.tripId;
            if (message.delay != null && message.hasOwnProperty("delay"))
                object.delay = message.delay;
            return object;
        };

        /**
         * Converts this RealtimeUpdate to JSON.
         * @function toJSON
         * @memberof gtfs_api.RealtimeUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RealtimeUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RealtimeUpdate
         * @function getTypeUrl
         * @memberof gtfs_api.RealtimeUpdate
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RealtimeUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/gtfs_api.RealtimeUpdate";
        };

        return RealtimeUpdate;
    })();

    return gtfs_api;
})();

export { $root as default };
