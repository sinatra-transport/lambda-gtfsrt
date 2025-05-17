/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const proto = $root.proto = (() => {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    const proto = {};

    proto.StopEndpoint = (function() {

        /**
         * Properties of a StopEndpoint.
         * @memberof proto
         * @interface IStopEndpoint
         * @property {Array.<proto.IStop>|null} [stop] StopEndpoint stop
         */

        /**
         * Constructs a new StopEndpoint.
         * @memberof proto
         * @classdesc Represents a StopEndpoint.
         * @implements IStopEndpoint
         * @constructor
         * @param {proto.IStopEndpoint=} [properties] Properties to set
         */
        function StopEndpoint(properties) {
            this.stop = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StopEndpoint stop.
         * @member {Array.<proto.IStop>} stop
         * @memberof proto.StopEndpoint
         * @instance
         */
        StopEndpoint.prototype.stop = $util.emptyArray;

        /**
         * Creates a new StopEndpoint instance using the specified properties.
         * @function create
         * @memberof proto.StopEndpoint
         * @static
         * @param {proto.IStopEndpoint=} [properties] Properties to set
         * @returns {proto.StopEndpoint} StopEndpoint instance
         */
        StopEndpoint.create = function create(properties) {
            return new StopEndpoint(properties);
        };

        /**
         * Encodes the specified StopEndpoint message. Does not implicitly {@link proto.StopEndpoint.verify|verify} messages.
         * @function encode
         * @memberof proto.StopEndpoint
         * @static
         * @param {proto.IStopEndpoint} message StopEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopEndpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stop != null && message.stop.length)
                for (let i = 0; i < message.stop.length; ++i)
                    $root.proto.Stop.encode(message.stop[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StopEndpoint message, length delimited. Does not implicitly {@link proto.StopEndpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.StopEndpoint
         * @static
         * @param {proto.IStopEndpoint} message StopEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StopEndpoint message from the specified reader or buffer.
         * @function decode
         * @memberof proto.StopEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.StopEndpoint} StopEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopEndpoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.StopEndpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.stop && message.stop.length))
                            message.stop = [];
                        message.stop.push($root.proto.Stop.decode(reader, reader.uint32()));
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
         * Decodes a StopEndpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.StopEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.StopEndpoint} StopEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopEndpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StopEndpoint message.
         * @function verify
         * @memberof proto.StopEndpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StopEndpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stop != null && message.hasOwnProperty("stop")) {
                if (!Array.isArray(message.stop))
                    return "stop: array expected";
                for (let i = 0; i < message.stop.length; ++i) {
                    let error = $root.proto.Stop.verify(message.stop[i]);
                    if (error)
                        return "stop." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StopEndpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.StopEndpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.StopEndpoint} StopEndpoint
         */
        StopEndpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.StopEndpoint)
                return object;
            let message = new $root.proto.StopEndpoint();
            if (object.stop) {
                if (!Array.isArray(object.stop))
                    throw TypeError(".proto.StopEndpoint.stop: array expected");
                message.stop = [];
                for (let i = 0; i < object.stop.length; ++i) {
                    if (typeof object.stop[i] !== "object")
                        throw TypeError(".proto.StopEndpoint.stop: object expected");
                    message.stop[i] = $root.proto.Stop.fromObject(object.stop[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a StopEndpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.StopEndpoint
         * @static
         * @param {proto.StopEndpoint} message StopEndpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StopEndpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.stop = [];
            if (message.stop && message.stop.length) {
                object.stop = [];
                for (let j = 0; j < message.stop.length; ++j)
                    object.stop[j] = $root.proto.Stop.toObject(message.stop[j], options);
            }
            return object;
        };

        /**
         * Converts this StopEndpoint to JSON.
         * @function toJSON
         * @memberof proto.StopEndpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StopEndpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StopEndpoint
         * @function getTypeUrl
         * @memberof proto.StopEndpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StopEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.StopEndpoint";
        };

        return StopEndpoint;
    })();

    proto.RouteEndpoint = (function() {

        /**
         * Properties of a RouteEndpoint.
         * @memberof proto
         * @interface IRouteEndpoint
         * @property {Array.<proto.IRoute>|null} [route] RouteEndpoint route
         */

        /**
         * Constructs a new RouteEndpoint.
         * @memberof proto
         * @classdesc Represents a RouteEndpoint.
         * @implements IRouteEndpoint
         * @constructor
         * @param {proto.IRouteEndpoint=} [properties] Properties to set
         */
        function RouteEndpoint(properties) {
            this.route = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouteEndpoint route.
         * @member {Array.<proto.IRoute>} route
         * @memberof proto.RouteEndpoint
         * @instance
         */
        RouteEndpoint.prototype.route = $util.emptyArray;

        /**
         * Creates a new RouteEndpoint instance using the specified properties.
         * @function create
         * @memberof proto.RouteEndpoint
         * @static
         * @param {proto.IRouteEndpoint=} [properties] Properties to set
         * @returns {proto.RouteEndpoint} RouteEndpoint instance
         */
        RouteEndpoint.create = function create(properties) {
            return new RouteEndpoint(properties);
        };

        /**
         * Encodes the specified RouteEndpoint message. Does not implicitly {@link proto.RouteEndpoint.verify|verify} messages.
         * @function encode
         * @memberof proto.RouteEndpoint
         * @static
         * @param {proto.IRouteEndpoint} message RouteEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteEndpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.route != null && message.route.length)
                for (let i = 0; i < message.route.length; ++i)
                    $root.proto.Route.encode(message.route[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RouteEndpoint message, length delimited. Does not implicitly {@link proto.RouteEndpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RouteEndpoint
         * @static
         * @param {proto.IRouteEndpoint} message RouteEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RouteEndpoint message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RouteEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RouteEndpoint} RouteEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteEndpoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RouteEndpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.route && message.route.length))
                            message.route = [];
                        message.route.push($root.proto.Route.decode(reader, reader.uint32()));
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
         * Decodes a RouteEndpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RouteEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RouteEndpoint} RouteEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteEndpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouteEndpoint message.
         * @function verify
         * @memberof proto.RouteEndpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouteEndpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.route != null && message.hasOwnProperty("route")) {
                if (!Array.isArray(message.route))
                    return "route: array expected";
                for (let i = 0; i < message.route.length; ++i) {
                    let error = $root.proto.Route.verify(message.route[i]);
                    if (error)
                        return "route." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RouteEndpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RouteEndpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RouteEndpoint} RouteEndpoint
         */
        RouteEndpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RouteEndpoint)
                return object;
            let message = new $root.proto.RouteEndpoint();
            if (object.route) {
                if (!Array.isArray(object.route))
                    throw TypeError(".proto.RouteEndpoint.route: array expected");
                message.route = [];
                for (let i = 0; i < object.route.length; ++i) {
                    if (typeof object.route[i] !== "object")
                        throw TypeError(".proto.RouteEndpoint.route: object expected");
                    message.route[i] = $root.proto.Route.fromObject(object.route[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RouteEndpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RouteEndpoint
         * @static
         * @param {proto.RouteEndpoint} message RouteEndpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouteEndpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.route = [];
            if (message.route && message.route.length) {
                object.route = [];
                for (let j = 0; j < message.route.length; ++j)
                    object.route[j] = $root.proto.Route.toObject(message.route[j], options);
            }
            return object;
        };

        /**
         * Converts this RouteEndpoint to JSON.
         * @function toJSON
         * @memberof proto.RouteEndpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouteEndpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RouteEndpoint
         * @function getTypeUrl
         * @memberof proto.RouteEndpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RouteEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RouteEndpoint";
        };

        return RouteEndpoint;
    })();

    proto.StopDetailEndpoint = (function() {

        /**
         * Properties of a StopDetailEndpoint.
         * @memberof proto
         * @interface IStopDetailEndpoint
         * @property {proto.IStop} stop StopDetailEndpoint stop
         * @property {Array.<proto.IStop>|null} [children] StopDetailEndpoint children
         */

        /**
         * Constructs a new StopDetailEndpoint.
         * @memberof proto
         * @classdesc Represents a StopDetailEndpoint.
         * @implements IStopDetailEndpoint
         * @constructor
         * @param {proto.IStopDetailEndpoint=} [properties] Properties to set
         */
        function StopDetailEndpoint(properties) {
            this.children = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StopDetailEndpoint stop.
         * @member {proto.IStop} stop
         * @memberof proto.StopDetailEndpoint
         * @instance
         */
        StopDetailEndpoint.prototype.stop = null;

        /**
         * StopDetailEndpoint children.
         * @member {Array.<proto.IStop>} children
         * @memberof proto.StopDetailEndpoint
         * @instance
         */
        StopDetailEndpoint.prototype.children = $util.emptyArray;

        /**
         * Creates a new StopDetailEndpoint instance using the specified properties.
         * @function create
         * @memberof proto.StopDetailEndpoint
         * @static
         * @param {proto.IStopDetailEndpoint=} [properties] Properties to set
         * @returns {proto.StopDetailEndpoint} StopDetailEndpoint instance
         */
        StopDetailEndpoint.create = function create(properties) {
            return new StopDetailEndpoint(properties);
        };

        /**
         * Encodes the specified StopDetailEndpoint message. Does not implicitly {@link proto.StopDetailEndpoint.verify|verify} messages.
         * @function encode
         * @memberof proto.StopDetailEndpoint
         * @static
         * @param {proto.IStopDetailEndpoint} message StopDetailEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopDetailEndpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.proto.Stop.encode(message.stop, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.children != null && message.children.length)
                for (let i = 0; i < message.children.length; ++i)
                    $root.proto.Stop.encode(message.children[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StopDetailEndpoint message, length delimited. Does not implicitly {@link proto.StopDetailEndpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.StopDetailEndpoint
         * @static
         * @param {proto.IStopDetailEndpoint} message StopDetailEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopDetailEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StopDetailEndpoint message from the specified reader or buffer.
         * @function decode
         * @memberof proto.StopDetailEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.StopDetailEndpoint} StopDetailEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopDetailEndpoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.StopDetailEndpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.stop = $root.proto.Stop.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.children && message.children.length))
                            message.children = [];
                        message.children.push($root.proto.Stop.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("stop"))
                throw $util.ProtocolError("missing required 'stop'", { instance: message });
            return message;
        };

        /**
         * Decodes a StopDetailEndpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.StopDetailEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.StopDetailEndpoint} StopDetailEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopDetailEndpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StopDetailEndpoint message.
         * @function verify
         * @memberof proto.StopDetailEndpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StopDetailEndpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                let error = $root.proto.Stop.verify(message.stop);
                if (error)
                    return "stop." + error;
            }
            if (message.children != null && message.hasOwnProperty("children")) {
                if (!Array.isArray(message.children))
                    return "children: array expected";
                for (let i = 0; i < message.children.length; ++i) {
                    let error = $root.proto.Stop.verify(message.children[i]);
                    if (error)
                        return "children." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StopDetailEndpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.StopDetailEndpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.StopDetailEndpoint} StopDetailEndpoint
         */
        StopDetailEndpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.StopDetailEndpoint)
                return object;
            let message = new $root.proto.StopDetailEndpoint();
            if (object.stop != null) {
                if (typeof object.stop !== "object")
                    throw TypeError(".proto.StopDetailEndpoint.stop: object expected");
                message.stop = $root.proto.Stop.fromObject(object.stop);
            }
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".proto.StopDetailEndpoint.children: array expected");
                message.children = [];
                for (let i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".proto.StopDetailEndpoint.children: object expected");
                    message.children[i] = $root.proto.Stop.fromObject(object.children[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a StopDetailEndpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.StopDetailEndpoint
         * @static
         * @param {proto.StopDetailEndpoint} message StopDetailEndpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StopDetailEndpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.children = [];
            if (options.defaults)
                object.stop = null;
            if (message.stop != null && message.hasOwnProperty("stop"))
                object.stop = $root.proto.Stop.toObject(message.stop, options);
            if (message.children && message.children.length) {
                object.children = [];
                for (let j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.proto.Stop.toObject(message.children[j], options);
            }
            return object;
        };

        /**
         * Converts this StopDetailEndpoint to JSON.
         * @function toJSON
         * @memberof proto.StopDetailEndpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StopDetailEndpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StopDetailEndpoint
         * @function getTypeUrl
         * @memberof proto.StopDetailEndpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StopDetailEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.StopDetailEndpoint";
        };

        return StopDetailEndpoint;
    })();

    proto.StopRoutesEndpoint = (function() {

        /**
         * Properties of a StopRoutesEndpoint.
         * @memberof proto
         * @interface IStopRoutesEndpoint
         * @property {Array.<string>|null} [routeIds] StopRoutesEndpoint routeIds
         */

        /**
         * Constructs a new StopRoutesEndpoint.
         * @memberof proto
         * @classdesc Represents a StopRoutesEndpoint.
         * @implements IStopRoutesEndpoint
         * @constructor
         * @param {proto.IStopRoutesEndpoint=} [properties] Properties to set
         */
        function StopRoutesEndpoint(properties) {
            this.routeIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StopRoutesEndpoint routeIds.
         * @member {Array.<string>} routeIds
         * @memberof proto.StopRoutesEndpoint
         * @instance
         */
        StopRoutesEndpoint.prototype.routeIds = $util.emptyArray;

        /**
         * Creates a new StopRoutesEndpoint instance using the specified properties.
         * @function create
         * @memberof proto.StopRoutesEndpoint
         * @static
         * @param {proto.IStopRoutesEndpoint=} [properties] Properties to set
         * @returns {proto.StopRoutesEndpoint} StopRoutesEndpoint instance
         */
        StopRoutesEndpoint.create = function create(properties) {
            return new StopRoutesEndpoint(properties);
        };

        /**
         * Encodes the specified StopRoutesEndpoint message. Does not implicitly {@link proto.StopRoutesEndpoint.verify|verify} messages.
         * @function encode
         * @memberof proto.StopRoutesEndpoint
         * @static
         * @param {proto.IStopRoutesEndpoint} message StopRoutesEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopRoutesEndpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.routeIds != null && message.routeIds.length)
                for (let i = 0; i < message.routeIds.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.routeIds[i]);
            return writer;
        };

        /**
         * Encodes the specified StopRoutesEndpoint message, length delimited. Does not implicitly {@link proto.StopRoutesEndpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.StopRoutesEndpoint
         * @static
         * @param {proto.IStopRoutesEndpoint} message StopRoutesEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopRoutesEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StopRoutesEndpoint message from the specified reader or buffer.
         * @function decode
         * @memberof proto.StopRoutesEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.StopRoutesEndpoint} StopRoutesEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopRoutesEndpoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.StopRoutesEndpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.routeIds && message.routeIds.length))
                            message.routeIds = [];
                        message.routeIds.push(reader.string());
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
         * Decodes a StopRoutesEndpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.StopRoutesEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.StopRoutesEndpoint} StopRoutesEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopRoutesEndpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StopRoutesEndpoint message.
         * @function verify
         * @memberof proto.StopRoutesEndpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StopRoutesEndpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.routeIds != null && message.hasOwnProperty("routeIds")) {
                if (!Array.isArray(message.routeIds))
                    return "routeIds: array expected";
                for (let i = 0; i < message.routeIds.length; ++i)
                    if (!$util.isString(message.routeIds[i]))
                        return "routeIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a StopRoutesEndpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.StopRoutesEndpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.StopRoutesEndpoint} StopRoutesEndpoint
         */
        StopRoutesEndpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.StopRoutesEndpoint)
                return object;
            let message = new $root.proto.StopRoutesEndpoint();
            if (object.routeIds) {
                if (!Array.isArray(object.routeIds))
                    throw TypeError(".proto.StopRoutesEndpoint.routeIds: array expected");
                message.routeIds = [];
                for (let i = 0; i < object.routeIds.length; ++i)
                    message.routeIds[i] = String(object.routeIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a StopRoutesEndpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.StopRoutesEndpoint
         * @static
         * @param {proto.StopRoutesEndpoint} message StopRoutesEndpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StopRoutesEndpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.routeIds = [];
            if (message.routeIds && message.routeIds.length) {
                object.routeIds = [];
                for (let j = 0; j < message.routeIds.length; ++j)
                    object.routeIds[j] = message.routeIds[j];
            }
            return object;
        };

        /**
         * Converts this StopRoutesEndpoint to JSON.
         * @function toJSON
         * @memberof proto.StopRoutesEndpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StopRoutesEndpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StopRoutesEndpoint
         * @function getTypeUrl
         * @memberof proto.StopRoutesEndpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StopRoutesEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.StopRoutesEndpoint";
        };

        return StopRoutesEndpoint;
    })();

    proto.RouteDetailEndpoint = (function() {

        /**
         * Properties of a RouteDetailEndpoint.
         * @memberof proto
         * @interface IRouteDetailEndpoint
         * @property {proto.IRoute} route RouteDetailEndpoint route
         */

        /**
         * Constructs a new RouteDetailEndpoint.
         * @memberof proto
         * @classdesc Represents a RouteDetailEndpoint.
         * @implements IRouteDetailEndpoint
         * @constructor
         * @param {proto.IRouteDetailEndpoint=} [properties] Properties to set
         */
        function RouteDetailEndpoint(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouteDetailEndpoint route.
         * @member {proto.IRoute} route
         * @memberof proto.RouteDetailEndpoint
         * @instance
         */
        RouteDetailEndpoint.prototype.route = null;

        /**
         * Creates a new RouteDetailEndpoint instance using the specified properties.
         * @function create
         * @memberof proto.RouteDetailEndpoint
         * @static
         * @param {proto.IRouteDetailEndpoint=} [properties] Properties to set
         * @returns {proto.RouteDetailEndpoint} RouteDetailEndpoint instance
         */
        RouteDetailEndpoint.create = function create(properties) {
            return new RouteDetailEndpoint(properties);
        };

        /**
         * Encodes the specified RouteDetailEndpoint message. Does not implicitly {@link proto.RouteDetailEndpoint.verify|verify} messages.
         * @function encode
         * @memberof proto.RouteDetailEndpoint
         * @static
         * @param {proto.IRouteDetailEndpoint} message RouteDetailEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteDetailEndpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.proto.Route.encode(message.route, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RouteDetailEndpoint message, length delimited. Does not implicitly {@link proto.RouteDetailEndpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RouteDetailEndpoint
         * @static
         * @param {proto.IRouteDetailEndpoint} message RouteDetailEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteDetailEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RouteDetailEndpoint message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RouteDetailEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RouteDetailEndpoint} RouteDetailEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteDetailEndpoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RouteDetailEndpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.route = $root.proto.Route.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("route"))
                throw $util.ProtocolError("missing required 'route'", { instance: message });
            return message;
        };

        /**
         * Decodes a RouteDetailEndpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RouteDetailEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RouteDetailEndpoint} RouteDetailEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteDetailEndpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouteDetailEndpoint message.
         * @function verify
         * @memberof proto.RouteDetailEndpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouteDetailEndpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                let error = $root.proto.Route.verify(message.route);
                if (error)
                    return "route." + error;
            }
            return null;
        };

        /**
         * Creates a RouteDetailEndpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RouteDetailEndpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RouteDetailEndpoint} RouteDetailEndpoint
         */
        RouteDetailEndpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RouteDetailEndpoint)
                return object;
            let message = new $root.proto.RouteDetailEndpoint();
            if (object.route != null) {
                if (typeof object.route !== "object")
                    throw TypeError(".proto.RouteDetailEndpoint.route: object expected");
                message.route = $root.proto.Route.fromObject(object.route);
            }
            return message;
        };

        /**
         * Creates a plain object from a RouteDetailEndpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RouteDetailEndpoint
         * @static
         * @param {proto.RouteDetailEndpoint} message RouteDetailEndpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouteDetailEndpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.route = null;
            if (message.route != null && message.hasOwnProperty("route"))
                object.route = $root.proto.Route.toObject(message.route, options);
            return object;
        };

        /**
         * Converts this RouteDetailEndpoint to JSON.
         * @function toJSON
         * @memberof proto.RouteDetailEndpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouteDetailEndpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RouteDetailEndpoint
         * @function getTypeUrl
         * @memberof proto.RouteDetailEndpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RouteDetailEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RouteDetailEndpoint";
        };

        return RouteDetailEndpoint;
    })();

    proto.ServiceEndpoint = (function() {

        /**
         * Properties of a ServiceEndpoint.
         * @memberof proto
         * @interface IServiceEndpoint
         * @property {Array.<proto.IService>|null} [service] ServiceEndpoint service
         */

        /**
         * Constructs a new ServiceEndpoint.
         * @memberof proto
         * @classdesc Represents a ServiceEndpoint.
         * @implements IServiceEndpoint
         * @constructor
         * @param {proto.IServiceEndpoint=} [properties] Properties to set
         */
        function ServiceEndpoint(properties) {
            this.service = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServiceEndpoint service.
         * @member {Array.<proto.IService>} service
         * @memberof proto.ServiceEndpoint
         * @instance
         */
        ServiceEndpoint.prototype.service = $util.emptyArray;

        /**
         * Creates a new ServiceEndpoint instance using the specified properties.
         * @function create
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {proto.IServiceEndpoint=} [properties] Properties to set
         * @returns {proto.ServiceEndpoint} ServiceEndpoint instance
         */
        ServiceEndpoint.create = function create(properties) {
            return new ServiceEndpoint(properties);
        };

        /**
         * Encodes the specified ServiceEndpoint message. Does not implicitly {@link proto.ServiceEndpoint.verify|verify} messages.
         * @function encode
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {proto.IServiceEndpoint} message ServiceEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServiceEndpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.service != null && message.service.length)
                for (let i = 0; i < message.service.length; ++i)
                    $root.proto.Service.encode(message.service[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ServiceEndpoint message, length delimited. Does not implicitly {@link proto.ServiceEndpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {proto.IServiceEndpoint} message ServiceEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServiceEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServiceEndpoint message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ServiceEndpoint} ServiceEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServiceEndpoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ServiceEndpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.service && message.service.length))
                            message.service = [];
                        message.service.push($root.proto.Service.decode(reader, reader.uint32()));
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
         * Decodes a ServiceEndpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ServiceEndpoint} ServiceEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServiceEndpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServiceEndpoint message.
         * @function verify
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServiceEndpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.service != null && message.hasOwnProperty("service")) {
                if (!Array.isArray(message.service))
                    return "service: array expected";
                for (let i = 0; i < message.service.length; ++i) {
                    let error = $root.proto.Service.verify(message.service[i]);
                    if (error)
                        return "service." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ServiceEndpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ServiceEndpoint} ServiceEndpoint
         */
        ServiceEndpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ServiceEndpoint)
                return object;
            let message = new $root.proto.ServiceEndpoint();
            if (object.service) {
                if (!Array.isArray(object.service))
                    throw TypeError(".proto.ServiceEndpoint.service: array expected");
                message.service = [];
                for (let i = 0; i < object.service.length; ++i) {
                    if (typeof object.service[i] !== "object")
                        throw TypeError(".proto.ServiceEndpoint.service: object expected");
                    message.service[i] = $root.proto.Service.fromObject(object.service[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ServiceEndpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {proto.ServiceEndpoint} message ServiceEndpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServiceEndpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.service = [];
            if (message.service && message.service.length) {
                object.service = [];
                for (let j = 0; j < message.service.length; ++j)
                    object.service[j] = $root.proto.Service.toObject(message.service[j], options);
            }
            return object;
        };

        /**
         * Converts this ServiceEndpoint to JSON.
         * @function toJSON
         * @memberof proto.ServiceEndpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServiceEndpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServiceEndpoint
         * @function getTypeUrl
         * @memberof proto.ServiceEndpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServiceEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ServiceEndpoint";
        };

        return ServiceEndpoint;
    })();

    proto.RouteTimetableEndpoint = (function() {

        /**
         * Properties of a RouteTimetableEndpoint.
         * @memberof proto
         * @interface IRouteTimetableEndpoint
         * @property {string} routeId RouteTimetableEndpoint routeId
         * @property {string} serviceId RouteTimetableEndpoint serviceId
         * @property {Array.<proto.IRouteTripInformation>|null} [trips] RouteTimetableEndpoint trips
         */

        /**
         * Constructs a new RouteTimetableEndpoint.
         * @memberof proto
         * @classdesc Represents a RouteTimetableEndpoint.
         * @implements IRouteTimetableEndpoint
         * @constructor
         * @param {proto.IRouteTimetableEndpoint=} [properties] Properties to set
         */
        function RouteTimetableEndpoint(properties) {
            this.trips = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouteTimetableEndpoint routeId.
         * @member {string} routeId
         * @memberof proto.RouteTimetableEndpoint
         * @instance
         */
        RouteTimetableEndpoint.prototype.routeId = "";

        /**
         * RouteTimetableEndpoint serviceId.
         * @member {string} serviceId
         * @memberof proto.RouteTimetableEndpoint
         * @instance
         */
        RouteTimetableEndpoint.prototype.serviceId = "";

        /**
         * RouteTimetableEndpoint trips.
         * @member {Array.<proto.IRouteTripInformation>} trips
         * @memberof proto.RouteTimetableEndpoint
         * @instance
         */
        RouteTimetableEndpoint.prototype.trips = $util.emptyArray;

        /**
         * Creates a new RouteTimetableEndpoint instance using the specified properties.
         * @function create
         * @memberof proto.RouteTimetableEndpoint
         * @static
         * @param {proto.IRouteTimetableEndpoint=} [properties] Properties to set
         * @returns {proto.RouteTimetableEndpoint} RouteTimetableEndpoint instance
         */
        RouteTimetableEndpoint.create = function create(properties) {
            return new RouteTimetableEndpoint(properties);
        };

        /**
         * Encodes the specified RouteTimetableEndpoint message. Does not implicitly {@link proto.RouteTimetableEndpoint.verify|verify} messages.
         * @function encode
         * @memberof proto.RouteTimetableEndpoint
         * @static
         * @param {proto.IRouteTimetableEndpoint} message RouteTimetableEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteTimetableEndpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.routeId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.serviceId);
            if (message.trips != null && message.trips.length)
                for (let i = 0; i < message.trips.length; ++i)
                    $root.proto.RouteTripInformation.encode(message.trips[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RouteTimetableEndpoint message, length delimited. Does not implicitly {@link proto.RouteTimetableEndpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RouteTimetableEndpoint
         * @static
         * @param {proto.IRouteTimetableEndpoint} message RouteTimetableEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteTimetableEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RouteTimetableEndpoint message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RouteTimetableEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RouteTimetableEndpoint} RouteTimetableEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteTimetableEndpoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RouteTimetableEndpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.routeId = reader.string();
                        break;
                    }
                case 2: {
                        message.serviceId = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.trips && message.trips.length))
                            message.trips = [];
                        message.trips.push($root.proto.RouteTripInformation.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("routeId"))
                throw $util.ProtocolError("missing required 'routeId'", { instance: message });
            if (!message.hasOwnProperty("serviceId"))
                throw $util.ProtocolError("missing required 'serviceId'", { instance: message });
            return message;
        };

        /**
         * Decodes a RouteTimetableEndpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RouteTimetableEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RouteTimetableEndpoint} RouteTimetableEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteTimetableEndpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouteTimetableEndpoint message.
         * @function verify
         * @memberof proto.RouteTimetableEndpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouteTimetableEndpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.routeId))
                return "routeId: string expected";
            if (!$util.isString(message.serviceId))
                return "serviceId: string expected";
            if (message.trips != null && message.hasOwnProperty("trips")) {
                if (!Array.isArray(message.trips))
                    return "trips: array expected";
                for (let i = 0; i < message.trips.length; ++i) {
                    let error = $root.proto.RouteTripInformation.verify(message.trips[i]);
                    if (error)
                        return "trips." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RouteTimetableEndpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RouteTimetableEndpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RouteTimetableEndpoint} RouteTimetableEndpoint
         */
        RouteTimetableEndpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RouteTimetableEndpoint)
                return object;
            let message = new $root.proto.RouteTimetableEndpoint();
            if (object.routeId != null)
                message.routeId = String(object.routeId);
            if (object.serviceId != null)
                message.serviceId = String(object.serviceId);
            if (object.trips) {
                if (!Array.isArray(object.trips))
                    throw TypeError(".proto.RouteTimetableEndpoint.trips: array expected");
                message.trips = [];
                for (let i = 0; i < object.trips.length; ++i) {
                    if (typeof object.trips[i] !== "object")
                        throw TypeError(".proto.RouteTimetableEndpoint.trips: object expected");
                    message.trips[i] = $root.proto.RouteTripInformation.fromObject(object.trips[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RouteTimetableEndpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RouteTimetableEndpoint
         * @static
         * @param {proto.RouteTimetableEndpoint} message RouteTimetableEndpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouteTimetableEndpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.trips = [];
            if (options.defaults) {
                object.routeId = "";
                object.serviceId = "";
            }
            if (message.routeId != null && message.hasOwnProperty("routeId"))
                object.routeId = message.routeId;
            if (message.serviceId != null && message.hasOwnProperty("serviceId"))
                object.serviceId = message.serviceId;
            if (message.trips && message.trips.length) {
                object.trips = [];
                for (let j = 0; j < message.trips.length; ++j)
                    object.trips[j] = $root.proto.RouteTripInformation.toObject(message.trips[j], options);
            }
            return object;
        };

        /**
         * Converts this RouteTimetableEndpoint to JSON.
         * @function toJSON
         * @memberof proto.RouteTimetableEndpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouteTimetableEndpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RouteTimetableEndpoint
         * @function getTypeUrl
         * @memberof proto.RouteTimetableEndpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RouteTimetableEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RouteTimetableEndpoint";
        };

        return RouteTimetableEndpoint;
    })();

    proto.RouteCanonicalTimetableEndpoint = (function() {

        /**
         * Properties of a RouteCanonicalTimetableEndpoint.
         * @memberof proto
         * @interface IRouteCanonicalTimetableEndpoint
         * @property {string} routeId RouteCanonicalTimetableEndpoint routeId
         * @property {string} serviceId RouteCanonicalTimetableEndpoint serviceId
         * @property {proto.IRouteTripInformation} trip RouteCanonicalTimetableEndpoint trip
         */

        /**
         * Constructs a new RouteCanonicalTimetableEndpoint.
         * @memberof proto
         * @classdesc Represents a RouteCanonicalTimetableEndpoint.
         * @implements IRouteCanonicalTimetableEndpoint
         * @constructor
         * @param {proto.IRouteCanonicalTimetableEndpoint=} [properties] Properties to set
         */
        function RouteCanonicalTimetableEndpoint(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouteCanonicalTimetableEndpoint routeId.
         * @member {string} routeId
         * @memberof proto.RouteCanonicalTimetableEndpoint
         * @instance
         */
        RouteCanonicalTimetableEndpoint.prototype.routeId = "";

        /**
         * RouteCanonicalTimetableEndpoint serviceId.
         * @member {string} serviceId
         * @memberof proto.RouteCanonicalTimetableEndpoint
         * @instance
         */
        RouteCanonicalTimetableEndpoint.prototype.serviceId = "";

        /**
         * RouteCanonicalTimetableEndpoint trip.
         * @member {proto.IRouteTripInformation} trip
         * @memberof proto.RouteCanonicalTimetableEndpoint
         * @instance
         */
        RouteCanonicalTimetableEndpoint.prototype.trip = null;

        /**
         * Creates a new RouteCanonicalTimetableEndpoint instance using the specified properties.
         * @function create
         * @memberof proto.RouteCanonicalTimetableEndpoint
         * @static
         * @param {proto.IRouteCanonicalTimetableEndpoint=} [properties] Properties to set
         * @returns {proto.RouteCanonicalTimetableEndpoint} RouteCanonicalTimetableEndpoint instance
         */
        RouteCanonicalTimetableEndpoint.create = function create(properties) {
            return new RouteCanonicalTimetableEndpoint(properties);
        };

        /**
         * Encodes the specified RouteCanonicalTimetableEndpoint message. Does not implicitly {@link proto.RouteCanonicalTimetableEndpoint.verify|verify} messages.
         * @function encode
         * @memberof proto.RouteCanonicalTimetableEndpoint
         * @static
         * @param {proto.IRouteCanonicalTimetableEndpoint} message RouteCanonicalTimetableEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteCanonicalTimetableEndpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.routeId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.serviceId);
            $root.proto.RouteTripInformation.encode(message.trip, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RouteCanonicalTimetableEndpoint message, length delimited. Does not implicitly {@link proto.RouteCanonicalTimetableEndpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RouteCanonicalTimetableEndpoint
         * @static
         * @param {proto.IRouteCanonicalTimetableEndpoint} message RouteCanonicalTimetableEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteCanonicalTimetableEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RouteCanonicalTimetableEndpoint message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RouteCanonicalTimetableEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RouteCanonicalTimetableEndpoint} RouteCanonicalTimetableEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteCanonicalTimetableEndpoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RouteCanonicalTimetableEndpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.routeId = reader.string();
                        break;
                    }
                case 2: {
                        message.serviceId = reader.string();
                        break;
                    }
                case 3: {
                        message.trip = $root.proto.RouteTripInformation.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("routeId"))
                throw $util.ProtocolError("missing required 'routeId'", { instance: message });
            if (!message.hasOwnProperty("serviceId"))
                throw $util.ProtocolError("missing required 'serviceId'", { instance: message });
            if (!message.hasOwnProperty("trip"))
                throw $util.ProtocolError("missing required 'trip'", { instance: message });
            return message;
        };

        /**
         * Decodes a RouteCanonicalTimetableEndpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RouteCanonicalTimetableEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RouteCanonicalTimetableEndpoint} RouteCanonicalTimetableEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteCanonicalTimetableEndpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouteCanonicalTimetableEndpoint message.
         * @function verify
         * @memberof proto.RouteCanonicalTimetableEndpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouteCanonicalTimetableEndpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.routeId))
                return "routeId: string expected";
            if (!$util.isString(message.serviceId))
                return "serviceId: string expected";
            {
                let error = $root.proto.RouteTripInformation.verify(message.trip);
                if (error)
                    return "trip." + error;
            }
            return null;
        };

        /**
         * Creates a RouteCanonicalTimetableEndpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RouteCanonicalTimetableEndpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RouteCanonicalTimetableEndpoint} RouteCanonicalTimetableEndpoint
         */
        RouteCanonicalTimetableEndpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RouteCanonicalTimetableEndpoint)
                return object;
            let message = new $root.proto.RouteCanonicalTimetableEndpoint();
            if (object.routeId != null)
                message.routeId = String(object.routeId);
            if (object.serviceId != null)
                message.serviceId = String(object.serviceId);
            if (object.trip != null) {
                if (typeof object.trip !== "object")
                    throw TypeError(".proto.RouteCanonicalTimetableEndpoint.trip: object expected");
                message.trip = $root.proto.RouteTripInformation.fromObject(object.trip);
            }
            return message;
        };

        /**
         * Creates a plain object from a RouteCanonicalTimetableEndpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RouteCanonicalTimetableEndpoint
         * @static
         * @param {proto.RouteCanonicalTimetableEndpoint} message RouteCanonicalTimetableEndpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouteCanonicalTimetableEndpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.routeId = "";
                object.serviceId = "";
                object.trip = null;
            }
            if (message.routeId != null && message.hasOwnProperty("routeId"))
                object.routeId = message.routeId;
            if (message.serviceId != null && message.hasOwnProperty("serviceId"))
                object.serviceId = message.serviceId;
            if (message.trip != null && message.hasOwnProperty("trip"))
                object.trip = $root.proto.RouteTripInformation.toObject(message.trip, options);
            return object;
        };

        /**
         * Converts this RouteCanonicalTimetableEndpoint to JSON.
         * @function toJSON
         * @memberof proto.RouteCanonicalTimetableEndpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouteCanonicalTimetableEndpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RouteCanonicalTimetableEndpoint
         * @function getTypeUrl
         * @memberof proto.RouteCanonicalTimetableEndpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RouteCanonicalTimetableEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RouteCanonicalTimetableEndpoint";
        };

        return RouteCanonicalTimetableEndpoint;
    })();

    proto.RouteTripTimetableEndpoint = (function() {

        /**
         * Properties of a RouteTripTimetableEndpoint.
         * @memberof proto
         * @interface IRouteTripTimetableEndpoint
         * @property {string} routeId RouteTripTimetableEndpoint routeId
         * @property {string} serviceId RouteTripTimetableEndpoint serviceId
         * @property {string} tripId RouteTripTimetableEndpoint tripId
         * @property {proto.IRouteTripInformation} trip RouteTripTimetableEndpoint trip
         */

        /**
         * Constructs a new RouteTripTimetableEndpoint.
         * @memberof proto
         * @classdesc Represents a RouteTripTimetableEndpoint.
         * @implements IRouteTripTimetableEndpoint
         * @constructor
         * @param {proto.IRouteTripTimetableEndpoint=} [properties] Properties to set
         */
        function RouteTripTimetableEndpoint(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouteTripTimetableEndpoint routeId.
         * @member {string} routeId
         * @memberof proto.RouteTripTimetableEndpoint
         * @instance
         */
        RouteTripTimetableEndpoint.prototype.routeId = "";

        /**
         * RouteTripTimetableEndpoint serviceId.
         * @member {string} serviceId
         * @memberof proto.RouteTripTimetableEndpoint
         * @instance
         */
        RouteTripTimetableEndpoint.prototype.serviceId = "";

        /**
         * RouteTripTimetableEndpoint tripId.
         * @member {string} tripId
         * @memberof proto.RouteTripTimetableEndpoint
         * @instance
         */
        RouteTripTimetableEndpoint.prototype.tripId = "";

        /**
         * RouteTripTimetableEndpoint trip.
         * @member {proto.IRouteTripInformation} trip
         * @memberof proto.RouteTripTimetableEndpoint
         * @instance
         */
        RouteTripTimetableEndpoint.prototype.trip = null;

        /**
         * Creates a new RouteTripTimetableEndpoint instance using the specified properties.
         * @function create
         * @memberof proto.RouteTripTimetableEndpoint
         * @static
         * @param {proto.IRouteTripTimetableEndpoint=} [properties] Properties to set
         * @returns {proto.RouteTripTimetableEndpoint} RouteTripTimetableEndpoint instance
         */
        RouteTripTimetableEndpoint.create = function create(properties) {
            return new RouteTripTimetableEndpoint(properties);
        };

        /**
         * Encodes the specified RouteTripTimetableEndpoint message. Does not implicitly {@link proto.RouteTripTimetableEndpoint.verify|verify} messages.
         * @function encode
         * @memberof proto.RouteTripTimetableEndpoint
         * @static
         * @param {proto.IRouteTripTimetableEndpoint} message RouteTripTimetableEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteTripTimetableEndpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.routeId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.serviceId);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.tripId);
            $root.proto.RouteTripInformation.encode(message.trip, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RouteTripTimetableEndpoint message, length delimited. Does not implicitly {@link proto.RouteTripTimetableEndpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RouteTripTimetableEndpoint
         * @static
         * @param {proto.IRouteTripTimetableEndpoint} message RouteTripTimetableEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteTripTimetableEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RouteTripTimetableEndpoint message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RouteTripTimetableEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RouteTripTimetableEndpoint} RouteTripTimetableEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteTripTimetableEndpoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RouteTripTimetableEndpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.routeId = reader.string();
                        break;
                    }
                case 2: {
                        message.serviceId = reader.string();
                        break;
                    }
                case 3: {
                        message.tripId = reader.string();
                        break;
                    }
                case 4: {
                        message.trip = $root.proto.RouteTripInformation.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("routeId"))
                throw $util.ProtocolError("missing required 'routeId'", { instance: message });
            if (!message.hasOwnProperty("serviceId"))
                throw $util.ProtocolError("missing required 'serviceId'", { instance: message });
            if (!message.hasOwnProperty("tripId"))
                throw $util.ProtocolError("missing required 'tripId'", { instance: message });
            if (!message.hasOwnProperty("trip"))
                throw $util.ProtocolError("missing required 'trip'", { instance: message });
            return message;
        };

        /**
         * Decodes a RouteTripTimetableEndpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RouteTripTimetableEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RouteTripTimetableEndpoint} RouteTripTimetableEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteTripTimetableEndpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouteTripTimetableEndpoint message.
         * @function verify
         * @memberof proto.RouteTripTimetableEndpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouteTripTimetableEndpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.routeId))
                return "routeId: string expected";
            if (!$util.isString(message.serviceId))
                return "serviceId: string expected";
            if (!$util.isString(message.tripId))
                return "tripId: string expected";
            {
                let error = $root.proto.RouteTripInformation.verify(message.trip);
                if (error)
                    return "trip." + error;
            }
            return null;
        };

        /**
         * Creates a RouteTripTimetableEndpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RouteTripTimetableEndpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RouteTripTimetableEndpoint} RouteTripTimetableEndpoint
         */
        RouteTripTimetableEndpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RouteTripTimetableEndpoint)
                return object;
            let message = new $root.proto.RouteTripTimetableEndpoint();
            if (object.routeId != null)
                message.routeId = String(object.routeId);
            if (object.serviceId != null)
                message.serviceId = String(object.serviceId);
            if (object.tripId != null)
                message.tripId = String(object.tripId);
            if (object.trip != null) {
                if (typeof object.trip !== "object")
                    throw TypeError(".proto.RouteTripTimetableEndpoint.trip: object expected");
                message.trip = $root.proto.RouteTripInformation.fromObject(object.trip);
            }
            return message;
        };

        /**
         * Creates a plain object from a RouteTripTimetableEndpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RouteTripTimetableEndpoint
         * @static
         * @param {proto.RouteTripTimetableEndpoint} message RouteTripTimetableEndpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouteTripTimetableEndpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.routeId = "";
                object.serviceId = "";
                object.tripId = "";
                object.trip = null;
            }
            if (message.routeId != null && message.hasOwnProperty("routeId"))
                object.routeId = message.routeId;
            if (message.serviceId != null && message.hasOwnProperty("serviceId"))
                object.serviceId = message.serviceId;
            if (message.tripId != null && message.hasOwnProperty("tripId"))
                object.tripId = message.tripId;
            if (message.trip != null && message.hasOwnProperty("trip"))
                object.trip = $root.proto.RouteTripInformation.toObject(message.trip, options);
            return object;
        };

        /**
         * Converts this RouteTripTimetableEndpoint to JSON.
         * @function toJSON
         * @memberof proto.RouteTripTimetableEndpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouteTripTimetableEndpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RouteTripTimetableEndpoint
         * @function getTypeUrl
         * @memberof proto.RouteTripTimetableEndpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RouteTripTimetableEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RouteTripTimetableEndpoint";
        };

        return RouteTripTimetableEndpoint;
    })();

    proto.RouteServicesEndpoint = (function() {

        /**
         * Properties of a RouteServicesEndpoint.
         * @memberof proto
         * @interface IRouteServicesEndpoint
         * @property {Array.<string>|null} [serviceIds] RouteServicesEndpoint serviceIds
         */

        /**
         * Constructs a new RouteServicesEndpoint.
         * @memberof proto
         * @classdesc Represents a RouteServicesEndpoint.
         * @implements IRouteServicesEndpoint
         * @constructor
         * @param {proto.IRouteServicesEndpoint=} [properties] Properties to set
         */
        function RouteServicesEndpoint(properties) {
            this.serviceIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouteServicesEndpoint serviceIds.
         * @member {Array.<string>} serviceIds
         * @memberof proto.RouteServicesEndpoint
         * @instance
         */
        RouteServicesEndpoint.prototype.serviceIds = $util.emptyArray;

        /**
         * Creates a new RouteServicesEndpoint instance using the specified properties.
         * @function create
         * @memberof proto.RouteServicesEndpoint
         * @static
         * @param {proto.IRouteServicesEndpoint=} [properties] Properties to set
         * @returns {proto.RouteServicesEndpoint} RouteServicesEndpoint instance
         */
        RouteServicesEndpoint.create = function create(properties) {
            return new RouteServicesEndpoint(properties);
        };

        /**
         * Encodes the specified RouteServicesEndpoint message. Does not implicitly {@link proto.RouteServicesEndpoint.verify|verify} messages.
         * @function encode
         * @memberof proto.RouteServicesEndpoint
         * @static
         * @param {proto.IRouteServicesEndpoint} message RouteServicesEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteServicesEndpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serviceIds != null && message.serviceIds.length)
                for (let i = 0; i < message.serviceIds.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.serviceIds[i]);
            return writer;
        };

        /**
         * Encodes the specified RouteServicesEndpoint message, length delimited. Does not implicitly {@link proto.RouteServicesEndpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RouteServicesEndpoint
         * @static
         * @param {proto.IRouteServicesEndpoint} message RouteServicesEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteServicesEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RouteServicesEndpoint message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RouteServicesEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RouteServicesEndpoint} RouteServicesEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteServicesEndpoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RouteServicesEndpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.serviceIds && message.serviceIds.length))
                            message.serviceIds = [];
                        message.serviceIds.push(reader.string());
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
         * Decodes a RouteServicesEndpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RouteServicesEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RouteServicesEndpoint} RouteServicesEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteServicesEndpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouteServicesEndpoint message.
         * @function verify
         * @memberof proto.RouteServicesEndpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouteServicesEndpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serviceIds != null && message.hasOwnProperty("serviceIds")) {
                if (!Array.isArray(message.serviceIds))
                    return "serviceIds: array expected";
                for (let i = 0; i < message.serviceIds.length; ++i)
                    if (!$util.isString(message.serviceIds[i]))
                        return "serviceIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a RouteServicesEndpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RouteServicesEndpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RouteServicesEndpoint} RouteServicesEndpoint
         */
        RouteServicesEndpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RouteServicesEndpoint)
                return object;
            let message = new $root.proto.RouteServicesEndpoint();
            if (object.serviceIds) {
                if (!Array.isArray(object.serviceIds))
                    throw TypeError(".proto.RouteServicesEndpoint.serviceIds: array expected");
                message.serviceIds = [];
                for (let i = 0; i < object.serviceIds.length; ++i)
                    message.serviceIds[i] = String(object.serviceIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a RouteServicesEndpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RouteServicesEndpoint
         * @static
         * @param {proto.RouteServicesEndpoint} message RouteServicesEndpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouteServicesEndpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.serviceIds = [];
            if (message.serviceIds && message.serviceIds.length) {
                object.serviceIds = [];
                for (let j = 0; j < message.serviceIds.length; ++j)
                    object.serviceIds[j] = message.serviceIds[j];
            }
            return object;
        };

        /**
         * Converts this RouteServicesEndpoint to JSON.
         * @function toJSON
         * @memberof proto.RouteServicesEndpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouteServicesEndpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RouteServicesEndpoint
         * @function getTypeUrl
         * @memberof proto.RouteServicesEndpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RouteServicesEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RouteServicesEndpoint";
        };

        return RouteServicesEndpoint;
    })();

    proto.RouteHeadingsEndpoint = (function() {

        /**
         * Properties of a RouteHeadingsEndpoint.
         * @memberof proto
         * @interface IRouteHeadingsEndpoint
         * @property {Array.<string>|null} [headings] RouteHeadingsEndpoint headings
         */

        /**
         * Constructs a new RouteHeadingsEndpoint.
         * @memberof proto
         * @classdesc Represents a RouteHeadingsEndpoint.
         * @implements IRouteHeadingsEndpoint
         * @constructor
         * @param {proto.IRouteHeadingsEndpoint=} [properties] Properties to set
         */
        function RouteHeadingsEndpoint(properties) {
            this.headings = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouteHeadingsEndpoint headings.
         * @member {Array.<string>} headings
         * @memberof proto.RouteHeadingsEndpoint
         * @instance
         */
        RouteHeadingsEndpoint.prototype.headings = $util.emptyArray;

        /**
         * Creates a new RouteHeadingsEndpoint instance using the specified properties.
         * @function create
         * @memberof proto.RouteHeadingsEndpoint
         * @static
         * @param {proto.IRouteHeadingsEndpoint=} [properties] Properties to set
         * @returns {proto.RouteHeadingsEndpoint} RouteHeadingsEndpoint instance
         */
        RouteHeadingsEndpoint.create = function create(properties) {
            return new RouteHeadingsEndpoint(properties);
        };

        /**
         * Encodes the specified RouteHeadingsEndpoint message. Does not implicitly {@link proto.RouteHeadingsEndpoint.verify|verify} messages.
         * @function encode
         * @memberof proto.RouteHeadingsEndpoint
         * @static
         * @param {proto.IRouteHeadingsEndpoint} message RouteHeadingsEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteHeadingsEndpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.headings != null && message.headings.length)
                for (let i = 0; i < message.headings.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.headings[i]);
            return writer;
        };

        /**
         * Encodes the specified RouteHeadingsEndpoint message, length delimited. Does not implicitly {@link proto.RouteHeadingsEndpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RouteHeadingsEndpoint
         * @static
         * @param {proto.IRouteHeadingsEndpoint} message RouteHeadingsEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteHeadingsEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RouteHeadingsEndpoint message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RouteHeadingsEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RouteHeadingsEndpoint} RouteHeadingsEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteHeadingsEndpoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RouteHeadingsEndpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.headings && message.headings.length))
                            message.headings = [];
                        message.headings.push(reader.string());
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
         * Decodes a RouteHeadingsEndpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RouteHeadingsEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RouteHeadingsEndpoint} RouteHeadingsEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteHeadingsEndpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouteHeadingsEndpoint message.
         * @function verify
         * @memberof proto.RouteHeadingsEndpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouteHeadingsEndpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.headings != null && message.hasOwnProperty("headings")) {
                if (!Array.isArray(message.headings))
                    return "headings: array expected";
                for (let i = 0; i < message.headings.length; ++i)
                    if (!$util.isString(message.headings[i]))
                        return "headings: string[] expected";
            }
            return null;
        };

        /**
         * Creates a RouteHeadingsEndpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RouteHeadingsEndpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RouteHeadingsEndpoint} RouteHeadingsEndpoint
         */
        RouteHeadingsEndpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RouteHeadingsEndpoint)
                return object;
            let message = new $root.proto.RouteHeadingsEndpoint();
            if (object.headings) {
                if (!Array.isArray(object.headings))
                    throw TypeError(".proto.RouteHeadingsEndpoint.headings: array expected");
                message.headings = [];
                for (let i = 0; i < object.headings.length; ++i)
                    message.headings[i] = String(object.headings[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a RouteHeadingsEndpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RouteHeadingsEndpoint
         * @static
         * @param {proto.RouteHeadingsEndpoint} message RouteHeadingsEndpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouteHeadingsEndpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.headings = [];
            if (message.headings && message.headings.length) {
                object.headings = [];
                for (let j = 0; j < message.headings.length; ++j)
                    object.headings[j] = message.headings[j];
            }
            return object;
        };

        /**
         * Converts this RouteHeadingsEndpoint to JSON.
         * @function toJSON
         * @memberof proto.RouteHeadingsEndpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouteHeadingsEndpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RouteHeadingsEndpoint
         * @function getTypeUrl
         * @memberof proto.RouteHeadingsEndpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RouteHeadingsEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RouteHeadingsEndpoint";
        };

        return RouteHeadingsEndpoint;
    })();

    proto.JourneySearchConfigEndpoint = (function() {

        /**
         * Properties of a JourneySearchConfigEndpoint.
         * @memberof proto
         * @interface IJourneySearchConfigEndpoint
         * @property {number} maximumComputationTime JourneySearchConfigEndpoint maximumComputationTime
         * @property {Array.<proto.IJourneySearchOption>|null} [options] JourneySearchConfigEndpoint options
         */

        /**
         * Constructs a new JourneySearchConfigEndpoint.
         * @memberof proto
         * @classdesc Represents a JourneySearchConfigEndpoint.
         * @implements IJourneySearchConfigEndpoint
         * @constructor
         * @param {proto.IJourneySearchConfigEndpoint=} [properties] Properties to set
         */
        function JourneySearchConfigEndpoint(properties) {
            this.options = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JourneySearchConfigEndpoint maximumComputationTime.
         * @member {number} maximumComputationTime
         * @memberof proto.JourneySearchConfigEndpoint
         * @instance
         */
        JourneySearchConfigEndpoint.prototype.maximumComputationTime = 0;

        /**
         * JourneySearchConfigEndpoint options.
         * @member {Array.<proto.IJourneySearchOption>} options
         * @memberof proto.JourneySearchConfigEndpoint
         * @instance
         */
        JourneySearchConfigEndpoint.prototype.options = $util.emptyArray;

        /**
         * Creates a new JourneySearchConfigEndpoint instance using the specified properties.
         * @function create
         * @memberof proto.JourneySearchConfigEndpoint
         * @static
         * @param {proto.IJourneySearchConfigEndpoint=} [properties] Properties to set
         * @returns {proto.JourneySearchConfigEndpoint} JourneySearchConfigEndpoint instance
         */
        JourneySearchConfigEndpoint.create = function create(properties) {
            return new JourneySearchConfigEndpoint(properties);
        };

        /**
         * Encodes the specified JourneySearchConfigEndpoint message. Does not implicitly {@link proto.JourneySearchConfigEndpoint.verify|verify} messages.
         * @function encode
         * @memberof proto.JourneySearchConfigEndpoint
         * @static
         * @param {proto.IJourneySearchConfigEndpoint} message JourneySearchConfigEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JourneySearchConfigEndpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.maximumComputationTime);
            if (message.options != null && message.options.length)
                for (let i = 0; i < message.options.length; ++i)
                    $root.proto.JourneySearchOption.encode(message.options[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JourneySearchConfigEndpoint message, length delimited. Does not implicitly {@link proto.JourneySearchConfigEndpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.JourneySearchConfigEndpoint
         * @static
         * @param {proto.IJourneySearchConfigEndpoint} message JourneySearchConfigEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JourneySearchConfigEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JourneySearchConfigEndpoint message from the specified reader or buffer.
         * @function decode
         * @memberof proto.JourneySearchConfigEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.JourneySearchConfigEndpoint} JourneySearchConfigEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JourneySearchConfigEndpoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.JourneySearchConfigEndpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.maximumComputationTime = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.options && message.options.length))
                            message.options = [];
                        message.options.push($root.proto.JourneySearchOption.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("maximumComputationTime"))
                throw $util.ProtocolError("missing required 'maximumComputationTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a JourneySearchConfigEndpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.JourneySearchConfigEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.JourneySearchConfigEndpoint} JourneySearchConfigEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JourneySearchConfigEndpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JourneySearchConfigEndpoint message.
         * @function verify
         * @memberof proto.JourneySearchConfigEndpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JourneySearchConfigEndpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.maximumComputationTime))
                return "maximumComputationTime: integer expected";
            if (message.options != null && message.hasOwnProperty("options")) {
                if (!Array.isArray(message.options))
                    return "options: array expected";
                for (let i = 0; i < message.options.length; ++i) {
                    let error = $root.proto.JourneySearchOption.verify(message.options[i]);
                    if (error)
                        return "options." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JourneySearchConfigEndpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.JourneySearchConfigEndpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.JourneySearchConfigEndpoint} JourneySearchConfigEndpoint
         */
        JourneySearchConfigEndpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.JourneySearchConfigEndpoint)
                return object;
            let message = new $root.proto.JourneySearchConfigEndpoint();
            if (object.maximumComputationTime != null)
                message.maximumComputationTime = object.maximumComputationTime | 0;
            if (object.options) {
                if (!Array.isArray(object.options))
                    throw TypeError(".proto.JourneySearchConfigEndpoint.options: array expected");
                message.options = [];
                for (let i = 0; i < object.options.length; ++i) {
                    if (typeof object.options[i] !== "object")
                        throw TypeError(".proto.JourneySearchConfigEndpoint.options: object expected");
                    message.options[i] = $root.proto.JourneySearchOption.fromObject(object.options[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JourneySearchConfigEndpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.JourneySearchConfigEndpoint
         * @static
         * @param {proto.JourneySearchConfigEndpoint} message JourneySearchConfigEndpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JourneySearchConfigEndpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.options = [];
            if (options.defaults)
                object.maximumComputationTime = 0;
            if (message.maximumComputationTime != null && message.hasOwnProperty("maximumComputationTime"))
                object.maximumComputationTime = message.maximumComputationTime;
            if (message.options && message.options.length) {
                object.options = [];
                for (let j = 0; j < message.options.length; ++j)
                    object.options[j] = $root.proto.JourneySearchOption.toObject(message.options[j], options);
            }
            return object;
        };

        /**
         * Converts this JourneySearchConfigEndpoint to JSON.
         * @function toJSON
         * @memberof proto.JourneySearchConfigEndpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JourneySearchConfigEndpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JourneySearchConfigEndpoint
         * @function getTypeUrl
         * @memberof proto.JourneySearchConfigEndpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JourneySearchConfigEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.JourneySearchConfigEndpoint";
        };

        return JourneySearchConfigEndpoint;
    })();

    proto.ServiceAlertEndpoint = (function() {

        /**
         * Properties of a ServiceAlertEndpoint.
         * @memberof proto
         * @interface IServiceAlertEndpoint
         * @property {Array.<proto.IServiceAlert>|null} [alerts] ServiceAlertEndpoint alerts
         */

        /**
         * Constructs a new ServiceAlertEndpoint.
         * @memberof proto
         * @classdesc Represents a ServiceAlertEndpoint.
         * @implements IServiceAlertEndpoint
         * @constructor
         * @param {proto.IServiceAlertEndpoint=} [properties] Properties to set
         */
        function ServiceAlertEndpoint(properties) {
            this.alerts = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServiceAlertEndpoint alerts.
         * @member {Array.<proto.IServiceAlert>} alerts
         * @memberof proto.ServiceAlertEndpoint
         * @instance
         */
        ServiceAlertEndpoint.prototype.alerts = $util.emptyArray;

        /**
         * Creates a new ServiceAlertEndpoint instance using the specified properties.
         * @function create
         * @memberof proto.ServiceAlertEndpoint
         * @static
         * @param {proto.IServiceAlertEndpoint=} [properties] Properties to set
         * @returns {proto.ServiceAlertEndpoint} ServiceAlertEndpoint instance
         */
        ServiceAlertEndpoint.create = function create(properties) {
            return new ServiceAlertEndpoint(properties);
        };

        /**
         * Encodes the specified ServiceAlertEndpoint message. Does not implicitly {@link proto.ServiceAlertEndpoint.verify|verify} messages.
         * @function encode
         * @memberof proto.ServiceAlertEndpoint
         * @static
         * @param {proto.IServiceAlertEndpoint} message ServiceAlertEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServiceAlertEndpoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.alerts != null && message.alerts.length)
                for (let i = 0; i < message.alerts.length; ++i)
                    $root.proto.ServiceAlert.encode(message.alerts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ServiceAlertEndpoint message, length delimited. Does not implicitly {@link proto.ServiceAlertEndpoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ServiceAlertEndpoint
         * @static
         * @param {proto.IServiceAlertEndpoint} message ServiceAlertEndpoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServiceAlertEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServiceAlertEndpoint message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ServiceAlertEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ServiceAlertEndpoint} ServiceAlertEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServiceAlertEndpoint.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ServiceAlertEndpoint();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.alerts && message.alerts.length))
                            message.alerts = [];
                        message.alerts.push($root.proto.ServiceAlert.decode(reader, reader.uint32()));
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
         * Decodes a ServiceAlertEndpoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ServiceAlertEndpoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ServiceAlertEndpoint} ServiceAlertEndpoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServiceAlertEndpoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServiceAlertEndpoint message.
         * @function verify
         * @memberof proto.ServiceAlertEndpoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServiceAlertEndpoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.alerts != null && message.hasOwnProperty("alerts")) {
                if (!Array.isArray(message.alerts))
                    return "alerts: array expected";
                for (let i = 0; i < message.alerts.length; ++i) {
                    let error = $root.proto.ServiceAlert.verify(message.alerts[i]);
                    if (error)
                        return "alerts." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ServiceAlertEndpoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ServiceAlertEndpoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ServiceAlertEndpoint} ServiceAlertEndpoint
         */
        ServiceAlertEndpoint.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ServiceAlertEndpoint)
                return object;
            let message = new $root.proto.ServiceAlertEndpoint();
            if (object.alerts) {
                if (!Array.isArray(object.alerts))
                    throw TypeError(".proto.ServiceAlertEndpoint.alerts: array expected");
                message.alerts = [];
                for (let i = 0; i < object.alerts.length; ++i) {
                    if (typeof object.alerts[i] !== "object")
                        throw TypeError(".proto.ServiceAlertEndpoint.alerts: object expected");
                    message.alerts[i] = $root.proto.ServiceAlert.fromObject(object.alerts[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ServiceAlertEndpoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ServiceAlertEndpoint
         * @static
         * @param {proto.ServiceAlertEndpoint} message ServiceAlertEndpoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServiceAlertEndpoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.alerts = [];
            if (message.alerts && message.alerts.length) {
                object.alerts = [];
                for (let j = 0; j < message.alerts.length; ++j)
                    object.alerts[j] = $root.proto.ServiceAlert.toObject(message.alerts[j], options);
            }
            return object;
        };

        /**
         * Converts this ServiceAlertEndpoint to JSON.
         * @function toJSON
         * @memberof proto.ServiceAlertEndpoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServiceAlertEndpoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServiceAlertEndpoint
         * @function getTypeUrl
         * @memberof proto.ServiceAlertEndpoint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServiceAlertEndpoint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ServiceAlertEndpoint";
        };

        return ServiceAlertEndpoint;
    })();

    proto.JourneySearchOption = (function() {

        /**
         * Properties of a JourneySearchOption.
         * @memberof proto
         * @interface IJourneySearchOption
         * @property {number|null} [maximumWalkingTime] JourneySearchOption maximumWalkingTime
         * @property {number|null} [transferTime] JourneySearchOption transferTime
         * @property {number|null} [changeOverTime] JourneySearchOption changeOverTime
         * @property {number|null} [transferPenalty] JourneySearchOption transferPenalty
         * @property {number|null} [changeOverPenalty] JourneySearchOption changeOverPenalty
         */

        /**
         * Constructs a new JourneySearchOption.
         * @memberof proto
         * @classdesc Represents a JourneySearchOption.
         * @implements IJourneySearchOption
         * @constructor
         * @param {proto.IJourneySearchOption=} [properties] Properties to set
         */
        function JourneySearchOption(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JourneySearchOption maximumWalkingTime.
         * @member {number} maximumWalkingTime
         * @memberof proto.JourneySearchOption
         * @instance
         */
        JourneySearchOption.prototype.maximumWalkingTime = 0;

        /**
         * JourneySearchOption transferTime.
         * @member {number} transferTime
         * @memberof proto.JourneySearchOption
         * @instance
         */
        JourneySearchOption.prototype.transferTime = 0;

        /**
         * JourneySearchOption changeOverTime.
         * @member {number} changeOverTime
         * @memberof proto.JourneySearchOption
         * @instance
         */
        JourneySearchOption.prototype.changeOverTime = 0;

        /**
         * JourneySearchOption transferPenalty.
         * @member {number} transferPenalty
         * @memberof proto.JourneySearchOption
         * @instance
         */
        JourneySearchOption.prototype.transferPenalty = 0;

        /**
         * JourneySearchOption changeOverPenalty.
         * @member {number} changeOverPenalty
         * @memberof proto.JourneySearchOption
         * @instance
         */
        JourneySearchOption.prototype.changeOverPenalty = 0;

        /**
         * Creates a new JourneySearchOption instance using the specified properties.
         * @function create
         * @memberof proto.JourneySearchOption
         * @static
         * @param {proto.IJourneySearchOption=} [properties] Properties to set
         * @returns {proto.JourneySearchOption} JourneySearchOption instance
         */
        JourneySearchOption.create = function create(properties) {
            return new JourneySearchOption(properties);
        };

        /**
         * Encodes the specified JourneySearchOption message. Does not implicitly {@link proto.JourneySearchOption.verify|verify} messages.
         * @function encode
         * @memberof proto.JourneySearchOption
         * @static
         * @param {proto.IJourneySearchOption} message JourneySearchOption message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JourneySearchOption.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.maximumWalkingTime != null && Object.hasOwnProperty.call(message, "maximumWalkingTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.maximumWalkingTime);
            if (message.transferTime != null && Object.hasOwnProperty.call(message, "transferTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.transferTime);
            if (message.changeOverTime != null && Object.hasOwnProperty.call(message, "changeOverTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.changeOverTime);
            if (message.transferPenalty != null && Object.hasOwnProperty.call(message, "transferPenalty"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.transferPenalty);
            if (message.changeOverPenalty != null && Object.hasOwnProperty.call(message, "changeOverPenalty"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.changeOverPenalty);
            return writer;
        };

        /**
         * Encodes the specified JourneySearchOption message, length delimited. Does not implicitly {@link proto.JourneySearchOption.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.JourneySearchOption
         * @static
         * @param {proto.IJourneySearchOption} message JourneySearchOption message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JourneySearchOption.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JourneySearchOption message from the specified reader or buffer.
         * @function decode
         * @memberof proto.JourneySearchOption
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.JourneySearchOption} JourneySearchOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JourneySearchOption.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.JourneySearchOption();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.maximumWalkingTime = reader.int32();
                        break;
                    }
                case 2: {
                        message.transferTime = reader.int32();
                        break;
                    }
                case 3: {
                        message.changeOverTime = reader.int32();
                        break;
                    }
                case 4: {
                        message.transferPenalty = reader.int32();
                        break;
                    }
                case 5: {
                        message.changeOverPenalty = reader.int32();
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
         * Decodes a JourneySearchOption message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.JourneySearchOption
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.JourneySearchOption} JourneySearchOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JourneySearchOption.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JourneySearchOption message.
         * @function verify
         * @memberof proto.JourneySearchOption
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JourneySearchOption.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.maximumWalkingTime != null && message.hasOwnProperty("maximumWalkingTime"))
                if (!$util.isInteger(message.maximumWalkingTime))
                    return "maximumWalkingTime: integer expected";
            if (message.transferTime != null && message.hasOwnProperty("transferTime"))
                if (!$util.isInteger(message.transferTime))
                    return "transferTime: integer expected";
            if (message.changeOverTime != null && message.hasOwnProperty("changeOverTime"))
                if (!$util.isInteger(message.changeOverTime))
                    return "changeOverTime: integer expected";
            if (message.transferPenalty != null && message.hasOwnProperty("transferPenalty"))
                if (!$util.isInteger(message.transferPenalty))
                    return "transferPenalty: integer expected";
            if (message.changeOverPenalty != null && message.hasOwnProperty("changeOverPenalty"))
                if (!$util.isInteger(message.changeOverPenalty))
                    return "changeOverPenalty: integer expected";
            return null;
        };

        /**
         * Creates a JourneySearchOption message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.JourneySearchOption
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.JourneySearchOption} JourneySearchOption
         */
        JourneySearchOption.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.JourneySearchOption)
                return object;
            let message = new $root.proto.JourneySearchOption();
            if (object.maximumWalkingTime != null)
                message.maximumWalkingTime = object.maximumWalkingTime | 0;
            if (object.transferTime != null)
                message.transferTime = object.transferTime | 0;
            if (object.changeOverTime != null)
                message.changeOverTime = object.changeOverTime | 0;
            if (object.transferPenalty != null)
                message.transferPenalty = object.transferPenalty | 0;
            if (object.changeOverPenalty != null)
                message.changeOverPenalty = object.changeOverPenalty | 0;
            return message;
        };

        /**
         * Creates a plain object from a JourneySearchOption message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.JourneySearchOption
         * @static
         * @param {proto.JourneySearchOption} message JourneySearchOption
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JourneySearchOption.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.maximumWalkingTime = 0;
                object.transferTime = 0;
                object.changeOverTime = 0;
                object.transferPenalty = 0;
                object.changeOverPenalty = 0;
            }
            if (message.maximumWalkingTime != null && message.hasOwnProperty("maximumWalkingTime"))
                object.maximumWalkingTime = message.maximumWalkingTime;
            if (message.transferTime != null && message.hasOwnProperty("transferTime"))
                object.transferTime = message.transferTime;
            if (message.changeOverTime != null && message.hasOwnProperty("changeOverTime"))
                object.changeOverTime = message.changeOverTime;
            if (message.transferPenalty != null && message.hasOwnProperty("transferPenalty"))
                object.transferPenalty = message.transferPenalty;
            if (message.changeOverPenalty != null && message.hasOwnProperty("changeOverPenalty"))
                object.changeOverPenalty = message.changeOverPenalty;
            return object;
        };

        /**
         * Converts this JourneySearchOption to JSON.
         * @function toJSON
         * @memberof proto.JourneySearchOption
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JourneySearchOption.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JourneySearchOption
         * @function getTypeUrl
         * @memberof proto.JourneySearchOption
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JourneySearchOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.JourneySearchOption";
        };

        return JourneySearchOption;
    })();

    proto.Stop = (function() {

        /**
         * Properties of a Stop.
         * @memberof proto
         * @interface IStop
         * @property {string} id Stop id
         * @property {string|null} [parentStation] Stop parentStation
         * @property {string} name Stop name
         * @property {string|null} [simpleName] Stop simpleName
         * @property {proto.ILocation} location Stop location
         * @property {proto.IStopAccessibility} accessibility Stop accessibility
         * @property {proto.IStopVisibility|null} [visibility] Stop visibility
         */

        /**
         * Constructs a new Stop.
         * @memberof proto
         * @classdesc Represents a Stop.
         * @implements IStop
         * @constructor
         * @param {proto.IStop=} [properties] Properties to set
         */
        function Stop(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Stop id.
         * @member {string} id
         * @memberof proto.Stop
         * @instance
         */
        Stop.prototype.id = "";

        /**
         * Stop parentStation.
         * @member {string} parentStation
         * @memberof proto.Stop
         * @instance
         */
        Stop.prototype.parentStation = "";

        /**
         * Stop name.
         * @member {string} name
         * @memberof proto.Stop
         * @instance
         */
        Stop.prototype.name = "";

        /**
         * Stop simpleName.
         * @member {string} simpleName
         * @memberof proto.Stop
         * @instance
         */
        Stop.prototype.simpleName = "";

        /**
         * Stop location.
         * @member {proto.ILocation} location
         * @memberof proto.Stop
         * @instance
         */
        Stop.prototype.location = null;

        /**
         * Stop accessibility.
         * @member {proto.IStopAccessibility} accessibility
         * @memberof proto.Stop
         * @instance
         */
        Stop.prototype.accessibility = null;

        /**
         * Stop visibility.
         * @member {proto.IStopVisibility|null|undefined} visibility
         * @memberof proto.Stop
         * @instance
         */
        Stop.prototype.visibility = null;

        /**
         * Creates a new Stop instance using the specified properties.
         * @function create
         * @memberof proto.Stop
         * @static
         * @param {proto.IStop=} [properties] Properties to set
         * @returns {proto.Stop} Stop instance
         */
        Stop.create = function create(properties) {
            return new Stop(properties);
        };

        /**
         * Encodes the specified Stop message. Does not implicitly {@link proto.Stop.verify|verify} messages.
         * @function encode
         * @memberof proto.Stop
         * @static
         * @param {proto.IStop} message Stop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Stop.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            $root.proto.Location.encode(message.location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            $root.proto.StopAccessibility.encode(message.accessibility, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.parentStation != null && Object.hasOwnProperty.call(message, "parentStation"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.parentStation);
            if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
                $root.proto.StopVisibility.encode(message.visibility, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.simpleName != null && Object.hasOwnProperty.call(message, "simpleName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.simpleName);
            return writer;
        };

        /**
         * Encodes the specified Stop message, length delimited. Does not implicitly {@link proto.Stop.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Stop
         * @static
         * @param {proto.IStop} message Stop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Stop.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Stop message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Stop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Stop} Stop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Stop.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Stop();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 5: {
                        message.parentStation = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 7: {
                        message.simpleName = reader.string();
                        break;
                    }
                case 3: {
                        message.location = $root.proto.Location.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.accessibility = $root.proto.StopAccessibility.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.visibility = $root.proto.StopVisibility.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("location"))
                throw $util.ProtocolError("missing required 'location'", { instance: message });
            if (!message.hasOwnProperty("accessibility"))
                throw $util.ProtocolError("missing required 'accessibility'", { instance: message });
            return message;
        };

        /**
         * Decodes a Stop message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Stop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Stop} Stop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Stop.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Stop message.
         * @function verify
         * @memberof proto.Stop
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Stop.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (message.parentStation != null && message.hasOwnProperty("parentStation"))
                if (!$util.isString(message.parentStation))
                    return "parentStation: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.simpleName != null && message.hasOwnProperty("simpleName"))
                if (!$util.isString(message.simpleName))
                    return "simpleName: string expected";
            {
                let error = $root.proto.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            {
                let error = $root.proto.StopAccessibility.verify(message.accessibility);
                if (error)
                    return "accessibility." + error;
            }
            if (message.visibility != null && message.hasOwnProperty("visibility")) {
                let error = $root.proto.StopVisibility.verify(message.visibility);
                if (error)
                    return "visibility." + error;
            }
            return null;
        };

        /**
         * Creates a Stop message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Stop
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Stop} Stop
         */
        Stop.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Stop)
                return object;
            let message = new $root.proto.Stop();
            if (object.id != null)
                message.id = String(object.id);
            if (object.parentStation != null)
                message.parentStation = String(object.parentStation);
            if (object.name != null)
                message.name = String(object.name);
            if (object.simpleName != null)
                message.simpleName = String(object.simpleName);
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".proto.Stop.location: object expected");
                message.location = $root.proto.Location.fromObject(object.location);
            }
            if (object.accessibility != null) {
                if (typeof object.accessibility !== "object")
                    throw TypeError(".proto.Stop.accessibility: object expected");
                message.accessibility = $root.proto.StopAccessibility.fromObject(object.accessibility);
            }
            if (object.visibility != null) {
                if (typeof object.visibility !== "object")
                    throw TypeError(".proto.Stop.visibility: object expected");
                message.visibility = $root.proto.StopVisibility.fromObject(object.visibility);
            }
            return message;
        };

        /**
         * Creates a plain object from a Stop message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Stop
         * @static
         * @param {proto.Stop} message Stop
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Stop.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.location = null;
                object.accessibility = null;
                object.parentStation = "";
                object.visibility = null;
                object.simpleName = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.proto.Location.toObject(message.location, options);
            if (message.accessibility != null && message.hasOwnProperty("accessibility"))
                object.accessibility = $root.proto.StopAccessibility.toObject(message.accessibility, options);
            if (message.parentStation != null && message.hasOwnProperty("parentStation"))
                object.parentStation = message.parentStation;
            if (message.visibility != null && message.hasOwnProperty("visibility"))
                object.visibility = $root.proto.StopVisibility.toObject(message.visibility, options);
            if (message.simpleName != null && message.hasOwnProperty("simpleName"))
                object.simpleName = message.simpleName;
            return object;
        };

        /**
         * Converts this Stop to JSON.
         * @function toJSON
         * @memberof proto.Stop
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Stop.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Stop
         * @function getTypeUrl
         * @memberof proto.Stop
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Stop.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Stop";
        };

        return Stop;
    })();

    proto.StopAccessibility = (function() {

        /**
         * Properties of a StopAccessibility.
         * @memberof proto
         * @interface IStopAccessibility
         * @property {proto.WheelchairStopAccessibility} stopWheelchairAccessible StopAccessibility stopWheelchairAccessible
         */

        /**
         * Constructs a new StopAccessibility.
         * @memberof proto
         * @classdesc Represents a StopAccessibility.
         * @implements IStopAccessibility
         * @constructor
         * @param {proto.IStopAccessibility=} [properties] Properties to set
         */
        function StopAccessibility(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StopAccessibility stopWheelchairAccessible.
         * @member {proto.WheelchairStopAccessibility} stopWheelchairAccessible
         * @memberof proto.StopAccessibility
         * @instance
         */
        StopAccessibility.prototype.stopWheelchairAccessible = 0;

        /**
         * Creates a new StopAccessibility instance using the specified properties.
         * @function create
         * @memberof proto.StopAccessibility
         * @static
         * @param {proto.IStopAccessibility=} [properties] Properties to set
         * @returns {proto.StopAccessibility} StopAccessibility instance
         */
        StopAccessibility.create = function create(properties) {
            return new StopAccessibility(properties);
        };

        /**
         * Encodes the specified StopAccessibility message. Does not implicitly {@link proto.StopAccessibility.verify|verify} messages.
         * @function encode
         * @memberof proto.StopAccessibility
         * @static
         * @param {proto.IStopAccessibility} message StopAccessibility message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopAccessibility.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.stopWheelchairAccessible);
            return writer;
        };

        /**
         * Encodes the specified StopAccessibility message, length delimited. Does not implicitly {@link proto.StopAccessibility.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.StopAccessibility
         * @static
         * @param {proto.IStopAccessibility} message StopAccessibility message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopAccessibility.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StopAccessibility message from the specified reader or buffer.
         * @function decode
         * @memberof proto.StopAccessibility
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.StopAccessibility} StopAccessibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopAccessibility.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.StopAccessibility();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.stopWheelchairAccessible = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("stopWheelchairAccessible"))
                throw $util.ProtocolError("missing required 'stopWheelchairAccessible'", { instance: message });
            return message;
        };

        /**
         * Decodes a StopAccessibility message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.StopAccessibility
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.StopAccessibility} StopAccessibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopAccessibility.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StopAccessibility message.
         * @function verify
         * @memberof proto.StopAccessibility
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StopAccessibility.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.stopWheelchairAccessible) {
            default:
                return "stopWheelchairAccessible: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
            return null;
        };

        /**
         * Creates a StopAccessibility message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.StopAccessibility
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.StopAccessibility} StopAccessibility
         */
        StopAccessibility.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.StopAccessibility)
                return object;
            let message = new $root.proto.StopAccessibility();
            switch (object.stopWheelchairAccessible) {
            default:
                if (typeof object.stopWheelchairAccessible === "number") {
                    message.stopWheelchairAccessible = object.stopWheelchairAccessible;
                    break;
                }
                break;
            case "WHEELCHAIR_STOP_ACCESSIBILITY_UNKNOWN":
            case 0:
                message.stopWheelchairAccessible = 0;
                break;
            case "WHEELCHAIR_STOP_ACCESSIBILITY_NONE":
            case 1:
                message.stopWheelchairAccessible = 1;
                break;
            case "WHEELCHAIR_STOP_ACCESSIBILITY_PARTIAL":
            case 2:
                message.stopWheelchairAccessible = 2;
                break;
            case "WHEELCHAIR_STOP_ACCESSIBILITY_FULL":
            case 3:
                message.stopWheelchairAccessible = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a StopAccessibility message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.StopAccessibility
         * @static
         * @param {proto.StopAccessibility} message StopAccessibility
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StopAccessibility.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.stopWheelchairAccessible = options.enums === String ? "WHEELCHAIR_STOP_ACCESSIBILITY_UNKNOWN" : 0;
            if (message.stopWheelchairAccessible != null && message.hasOwnProperty("stopWheelchairAccessible"))
                object.stopWheelchairAccessible = options.enums === String ? $root.proto.WheelchairStopAccessibility[message.stopWheelchairAccessible] === undefined ? message.stopWheelchairAccessible : $root.proto.WheelchairStopAccessibility[message.stopWheelchairAccessible] : message.stopWheelchairAccessible;
            return object;
        };

        /**
         * Converts this StopAccessibility to JSON.
         * @function toJSON
         * @memberof proto.StopAccessibility
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StopAccessibility.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StopAccessibility
         * @function getTypeUrl
         * @memberof proto.StopAccessibility
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StopAccessibility.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.StopAccessibility";
        };

        return StopAccessibility;
    })();

    proto.StopVisibility = (function() {

        /**
         * Properties of a StopVisibility.
         * @memberof proto
         * @interface IStopVisibility
         * @property {boolean|null} [visibleZoomedOut] StopVisibility visibleZoomedOut
         * @property {boolean|null} [visibleZoomedIn] StopVisibility visibleZoomedIn
         * @property {boolean|null} [showChildren] StopVisibility showChildren
         * @property {number|null} [searchWeight] StopVisibility searchWeight
         */

        /**
         * Constructs a new StopVisibility.
         * @memberof proto
         * @classdesc Represents a StopVisibility.
         * @implements IStopVisibility
         * @constructor
         * @param {proto.IStopVisibility=} [properties] Properties to set
         */
        function StopVisibility(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StopVisibility visibleZoomedOut.
         * @member {boolean} visibleZoomedOut
         * @memberof proto.StopVisibility
         * @instance
         */
        StopVisibility.prototype.visibleZoomedOut = false;

        /**
         * StopVisibility visibleZoomedIn.
         * @member {boolean} visibleZoomedIn
         * @memberof proto.StopVisibility
         * @instance
         */
        StopVisibility.prototype.visibleZoomedIn = false;

        /**
         * StopVisibility showChildren.
         * @member {boolean} showChildren
         * @memberof proto.StopVisibility
         * @instance
         */
        StopVisibility.prototype.showChildren = false;

        /**
         * StopVisibility searchWeight.
         * @member {number} searchWeight
         * @memberof proto.StopVisibility
         * @instance
         */
        StopVisibility.prototype.searchWeight = 0;

        /**
         * Creates a new StopVisibility instance using the specified properties.
         * @function create
         * @memberof proto.StopVisibility
         * @static
         * @param {proto.IStopVisibility=} [properties] Properties to set
         * @returns {proto.StopVisibility} StopVisibility instance
         */
        StopVisibility.create = function create(properties) {
            return new StopVisibility(properties);
        };

        /**
         * Encodes the specified StopVisibility message. Does not implicitly {@link proto.StopVisibility.verify|verify} messages.
         * @function encode
         * @memberof proto.StopVisibility
         * @static
         * @param {proto.IStopVisibility} message StopVisibility message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopVisibility.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.visibleZoomedOut != null && Object.hasOwnProperty.call(message, "visibleZoomedOut"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.visibleZoomedOut);
            if (message.visibleZoomedIn != null && Object.hasOwnProperty.call(message, "visibleZoomedIn"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.visibleZoomedIn);
            if (message.showChildren != null && Object.hasOwnProperty.call(message, "showChildren"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.showChildren);
            if (message.searchWeight != null && Object.hasOwnProperty.call(message, "searchWeight"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.searchWeight);
            return writer;
        };

        /**
         * Encodes the specified StopVisibility message, length delimited. Does not implicitly {@link proto.StopVisibility.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.StopVisibility
         * @static
         * @param {proto.IStopVisibility} message StopVisibility message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopVisibility.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StopVisibility message from the specified reader or buffer.
         * @function decode
         * @memberof proto.StopVisibility
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.StopVisibility} StopVisibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopVisibility.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.StopVisibility();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.visibleZoomedOut = reader.bool();
                        break;
                    }
                case 2: {
                        message.visibleZoomedIn = reader.bool();
                        break;
                    }
                case 3: {
                        message.showChildren = reader.bool();
                        break;
                    }
                case 4: {
                        message.searchWeight = reader.double();
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
         * Decodes a StopVisibility message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.StopVisibility
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.StopVisibility} StopVisibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopVisibility.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StopVisibility message.
         * @function verify
         * @memberof proto.StopVisibility
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StopVisibility.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.visibleZoomedOut != null && message.hasOwnProperty("visibleZoomedOut"))
                if (typeof message.visibleZoomedOut !== "boolean")
                    return "visibleZoomedOut: boolean expected";
            if (message.visibleZoomedIn != null && message.hasOwnProperty("visibleZoomedIn"))
                if (typeof message.visibleZoomedIn !== "boolean")
                    return "visibleZoomedIn: boolean expected";
            if (message.showChildren != null && message.hasOwnProperty("showChildren"))
                if (typeof message.showChildren !== "boolean")
                    return "showChildren: boolean expected";
            if (message.searchWeight != null && message.hasOwnProperty("searchWeight"))
                if (typeof message.searchWeight !== "number")
                    return "searchWeight: number expected";
            return null;
        };

        /**
         * Creates a StopVisibility message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.StopVisibility
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.StopVisibility} StopVisibility
         */
        StopVisibility.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.StopVisibility)
                return object;
            let message = new $root.proto.StopVisibility();
            if (object.visibleZoomedOut != null)
                message.visibleZoomedOut = Boolean(object.visibleZoomedOut);
            if (object.visibleZoomedIn != null)
                message.visibleZoomedIn = Boolean(object.visibleZoomedIn);
            if (object.showChildren != null)
                message.showChildren = Boolean(object.showChildren);
            if (object.searchWeight != null)
                message.searchWeight = Number(object.searchWeight);
            return message;
        };

        /**
         * Creates a plain object from a StopVisibility message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.StopVisibility
         * @static
         * @param {proto.StopVisibility} message StopVisibility
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StopVisibility.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.visibleZoomedOut = false;
                object.visibleZoomedIn = false;
                object.showChildren = false;
                object.searchWeight = 0;
            }
            if (message.visibleZoomedOut != null && message.hasOwnProperty("visibleZoomedOut"))
                object.visibleZoomedOut = message.visibleZoomedOut;
            if (message.visibleZoomedIn != null && message.hasOwnProperty("visibleZoomedIn"))
                object.visibleZoomedIn = message.visibleZoomedIn;
            if (message.showChildren != null && message.hasOwnProperty("showChildren"))
                object.showChildren = message.showChildren;
            if (message.searchWeight != null && message.hasOwnProperty("searchWeight"))
                object.searchWeight = options.json && !isFinite(message.searchWeight) ? String(message.searchWeight) : message.searchWeight;
            return object;
        };

        /**
         * Converts this StopVisibility to JSON.
         * @function toJSON
         * @memberof proto.StopVisibility
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StopVisibility.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StopVisibility
         * @function getTypeUrl
         * @memberof proto.StopVisibility
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StopVisibility.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.StopVisibility";
        };

        return StopVisibility;
    })();

    /**
     * WheelchairStopAccessibility enum.
     * @name proto.WheelchairStopAccessibility
     * @enum {number}
     * @property {number} WHEELCHAIR_STOP_ACCESSIBILITY_UNKNOWN=0 WHEELCHAIR_STOP_ACCESSIBILITY_UNKNOWN value
     * @property {number} WHEELCHAIR_STOP_ACCESSIBILITY_NONE=1 WHEELCHAIR_STOP_ACCESSIBILITY_NONE value
     * @property {number} WHEELCHAIR_STOP_ACCESSIBILITY_PARTIAL=2 WHEELCHAIR_STOP_ACCESSIBILITY_PARTIAL value
     * @property {number} WHEELCHAIR_STOP_ACCESSIBILITY_FULL=3 WHEELCHAIR_STOP_ACCESSIBILITY_FULL value
     */
    proto.WheelchairStopAccessibility = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WHEELCHAIR_STOP_ACCESSIBILITY_UNKNOWN"] = 0;
        values[valuesById[1] = "WHEELCHAIR_STOP_ACCESSIBILITY_NONE"] = 1;
        values[valuesById[2] = "WHEELCHAIR_STOP_ACCESSIBILITY_PARTIAL"] = 2;
        values[valuesById[3] = "WHEELCHAIR_STOP_ACCESSIBILITY_FULL"] = 3;
        return values;
    })();

    proto.Route = (function() {

        /**
         * Properties of a Route.
         * @memberof proto
         * @interface IRoute
         * @property {string} id Route id
         * @property {string} code Route code
         * @property {string|null} [displayCode] Route displayCode
         * @property {proto.IColorPair|null} [colors] Route colors
         * @property {string} name Route name
         * @property {string|null} [designation] Route designation
         * @property {proto.RouteType} type Route type
         * @property {string|null} [realTimeUrl] Route realTimeUrl
         * @property {proto.IRouteVisibility|null} [routeVisibility] Route routeVisibility
         */

        /**
         * Constructs a new Route.
         * @memberof proto
         * @classdesc Represents a Route.
         * @implements IRoute
         * @constructor
         * @param {proto.IRoute=} [properties] Properties to set
         */
        function Route(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Route id.
         * @member {string} id
         * @memberof proto.Route
         * @instance
         */
        Route.prototype.id = "";

        /**
         * Route code.
         * @member {string} code
         * @memberof proto.Route
         * @instance
         */
        Route.prototype.code = "";

        /**
         * Route displayCode.
         * @member {string} displayCode
         * @memberof proto.Route
         * @instance
         */
        Route.prototype.displayCode = "";

        /**
         * Route colors.
         * @member {proto.IColorPair|null|undefined} colors
         * @memberof proto.Route
         * @instance
         */
        Route.prototype.colors = null;

        /**
         * Route name.
         * @member {string} name
         * @memberof proto.Route
         * @instance
         */
        Route.prototype.name = "";

        /**
         * Route designation.
         * @member {string} designation
         * @memberof proto.Route
         * @instance
         */
        Route.prototype.designation = "";

        /**
         * Route type.
         * @member {proto.RouteType} type
         * @memberof proto.Route
         * @instance
         */
        Route.prototype.type = 0;

        /**
         * Route realTimeUrl.
         * @member {string} realTimeUrl
         * @memberof proto.Route
         * @instance
         */
        Route.prototype.realTimeUrl = "";

        /**
         * Route routeVisibility.
         * @member {proto.IRouteVisibility|null|undefined} routeVisibility
         * @memberof proto.Route
         * @instance
         */
        Route.prototype.routeVisibility = null;

        /**
         * Creates a new Route instance using the specified properties.
         * @function create
         * @memberof proto.Route
         * @static
         * @param {proto.IRoute=} [properties] Properties to set
         * @returns {proto.Route} Route instance
         */
        Route.create = function create(properties) {
            return new Route(properties);
        };

        /**
         * Encodes the specified Route message. Does not implicitly {@link proto.Route.verify|verify} messages.
         * @function encode
         * @memberof proto.Route
         * @static
         * @param {proto.IRoute} message Route message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Route.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            if (message.displayCode != null && Object.hasOwnProperty.call(message, "displayCode"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.displayCode);
            if (message.colors != null && Object.hasOwnProperty.call(message, "colors"))
                $root.proto.ColorPair.encode(message.colors, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.designation != null && Object.hasOwnProperty.call(message, "designation"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.designation);
            if (message.realTimeUrl != null && Object.hasOwnProperty.call(message, "realTimeUrl"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.realTimeUrl);
            if (message.routeVisibility != null && Object.hasOwnProperty.call(message, "routeVisibility"))
                $root.proto.RouteVisibility.encode(message.routeVisibility, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Route message, length delimited. Does not implicitly {@link proto.Route.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Route
         * @static
         * @param {proto.IRoute} message Route message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Route.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Route message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Route
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Route} Route
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Route.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Route();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.code = reader.string();
                        break;
                    }
                case 5: {
                        message.displayCode = reader.string();
                        break;
                    }
                case 6: {
                        message.colors = $root.proto.ColorPair.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 7: {
                        message.designation = reader.string();
                        break;
                    }
                case 4: {
                        message.type = reader.int32();
                        break;
                    }
                case 8: {
                        message.realTimeUrl = reader.string();
                        break;
                    }
                case 9: {
                        message.routeVisibility = $root.proto.RouteVisibility.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a Route message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Route
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Route} Route
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Route.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Route message.
         * @function verify
         * @memberof proto.Route
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Route.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.code))
                return "code: string expected";
            if (message.displayCode != null && message.hasOwnProperty("displayCode"))
                if (!$util.isString(message.displayCode))
                    return "displayCode: string expected";
            if (message.colors != null && message.hasOwnProperty("colors")) {
                let error = $root.proto.ColorPair.verify(message.colors);
                if (error)
                    return "colors." + error;
            }
            if (!$util.isString(message.name))
                return "name: string expected";
            if (message.designation != null && message.hasOwnProperty("designation"))
                if (!$util.isString(message.designation))
                    return "designation: string expected";
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
            if (message.realTimeUrl != null && message.hasOwnProperty("realTimeUrl"))
                if (!$util.isString(message.realTimeUrl))
                    return "realTimeUrl: string expected";
            if (message.routeVisibility != null && message.hasOwnProperty("routeVisibility")) {
                let error = $root.proto.RouteVisibility.verify(message.routeVisibility);
                if (error)
                    return "routeVisibility." + error;
            }
            return null;
        };

        /**
         * Creates a Route message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Route
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Route} Route
         */
        Route.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Route)
                return object;
            let message = new $root.proto.Route();
            if (object.id != null)
                message.id = String(object.id);
            if (object.code != null)
                message.code = String(object.code);
            if (object.displayCode != null)
                message.displayCode = String(object.displayCode);
            if (object.colors != null) {
                if (typeof object.colors !== "object")
                    throw TypeError(".proto.Route.colors: object expected");
                message.colors = $root.proto.ColorPair.fromObject(object.colors);
            }
            if (object.name != null)
                message.name = String(object.name);
            if (object.designation != null)
                message.designation = String(object.designation);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "ROUTE_TYPE_UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "ROUTE_TYPE_TRAM":
            case 1:
                message.type = 1;
                break;
            case "ROUTE_TYPE_METRO":
            case 2:
                message.type = 2;
                break;
            case "ROUTE_TYPE_RAIL":
            case 3:
                message.type = 3;
                break;
            case "ROUTE_TYPE_BUS":
            case 4:
                message.type = 4;
                break;
            case "ROUTE_TYPE_FERRY":
            case 5:
                message.type = 5;
                break;
            }
            if (object.realTimeUrl != null)
                message.realTimeUrl = String(object.realTimeUrl);
            if (object.routeVisibility != null) {
                if (typeof object.routeVisibility !== "object")
                    throw TypeError(".proto.Route.routeVisibility: object expected");
                message.routeVisibility = $root.proto.RouteVisibility.fromObject(object.routeVisibility);
            }
            return message;
        };

        /**
         * Creates a plain object from a Route message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Route
         * @static
         * @param {proto.Route} message Route
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Route.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.code = "";
                object.name = "";
                object.type = options.enums === String ? "ROUTE_TYPE_UNKNOWN" : 0;
                object.displayCode = "";
                object.colors = null;
                object.designation = "";
                object.realTimeUrl = "";
                object.routeVisibility = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.proto.RouteType[message.type] === undefined ? message.type : $root.proto.RouteType[message.type] : message.type;
            if (message.displayCode != null && message.hasOwnProperty("displayCode"))
                object.displayCode = message.displayCode;
            if (message.colors != null && message.hasOwnProperty("colors"))
                object.colors = $root.proto.ColorPair.toObject(message.colors, options);
            if (message.designation != null && message.hasOwnProperty("designation"))
                object.designation = message.designation;
            if (message.realTimeUrl != null && message.hasOwnProperty("realTimeUrl"))
                object.realTimeUrl = message.realTimeUrl;
            if (message.routeVisibility != null && message.hasOwnProperty("routeVisibility"))
                object.routeVisibility = $root.proto.RouteVisibility.toObject(message.routeVisibility, options);
            return object;
        };

        /**
         * Converts this Route to JSON.
         * @function toJSON
         * @memberof proto.Route
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Route.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Route
         * @function getTypeUrl
         * @memberof proto.Route
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Route.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Route";
        };

        return Route;
    })();

    proto.RouteVisibility = (function() {

        /**
         * Properties of a RouteVisibility.
         * @memberof proto
         * @interface IRouteVisibility
         * @property {boolean|null} [hidden] RouteVisibility hidden
         * @property {number|null} [searchWeight] RouteVisibility searchWeight
         */

        /**
         * Constructs a new RouteVisibility.
         * @memberof proto
         * @classdesc Represents a RouteVisibility.
         * @implements IRouteVisibility
         * @constructor
         * @param {proto.IRouteVisibility=} [properties] Properties to set
         */
        function RouteVisibility(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouteVisibility hidden.
         * @member {boolean} hidden
         * @memberof proto.RouteVisibility
         * @instance
         */
        RouteVisibility.prototype.hidden = false;

        /**
         * RouteVisibility searchWeight.
         * @member {number} searchWeight
         * @memberof proto.RouteVisibility
         * @instance
         */
        RouteVisibility.prototype.searchWeight = 0;

        /**
         * Creates a new RouteVisibility instance using the specified properties.
         * @function create
         * @memberof proto.RouteVisibility
         * @static
         * @param {proto.IRouteVisibility=} [properties] Properties to set
         * @returns {proto.RouteVisibility} RouteVisibility instance
         */
        RouteVisibility.create = function create(properties) {
            return new RouteVisibility(properties);
        };

        /**
         * Encodes the specified RouteVisibility message. Does not implicitly {@link proto.RouteVisibility.verify|verify} messages.
         * @function encode
         * @memberof proto.RouteVisibility
         * @static
         * @param {proto.IRouteVisibility} message RouteVisibility message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteVisibility.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hidden != null && Object.hasOwnProperty.call(message, "hidden"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.hidden);
            if (message.searchWeight != null && Object.hasOwnProperty.call(message, "searchWeight"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.searchWeight);
            return writer;
        };

        /**
         * Encodes the specified RouteVisibility message, length delimited. Does not implicitly {@link proto.RouteVisibility.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RouteVisibility
         * @static
         * @param {proto.IRouteVisibility} message RouteVisibility message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteVisibility.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RouteVisibility message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RouteVisibility
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RouteVisibility} RouteVisibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteVisibility.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RouteVisibility();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.hidden = reader.bool();
                        break;
                    }
                case 2: {
                        message.searchWeight = reader.double();
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
         * Decodes a RouteVisibility message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RouteVisibility
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RouteVisibility} RouteVisibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteVisibility.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouteVisibility message.
         * @function verify
         * @memberof proto.RouteVisibility
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouteVisibility.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hidden != null && message.hasOwnProperty("hidden"))
                if (typeof message.hidden !== "boolean")
                    return "hidden: boolean expected";
            if (message.searchWeight != null && message.hasOwnProperty("searchWeight"))
                if (typeof message.searchWeight !== "number")
                    return "searchWeight: number expected";
            return null;
        };

        /**
         * Creates a RouteVisibility message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RouteVisibility
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RouteVisibility} RouteVisibility
         */
        RouteVisibility.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RouteVisibility)
                return object;
            let message = new $root.proto.RouteVisibility();
            if (object.hidden != null)
                message.hidden = Boolean(object.hidden);
            if (object.searchWeight != null)
                message.searchWeight = Number(object.searchWeight);
            return message;
        };

        /**
         * Creates a plain object from a RouteVisibility message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RouteVisibility
         * @static
         * @param {proto.RouteVisibility} message RouteVisibility
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouteVisibility.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.hidden = false;
                object.searchWeight = 0;
            }
            if (message.hidden != null && message.hasOwnProperty("hidden"))
                object.hidden = message.hidden;
            if (message.searchWeight != null && message.hasOwnProperty("searchWeight"))
                object.searchWeight = options.json && !isFinite(message.searchWeight) ? String(message.searchWeight) : message.searchWeight;
            return object;
        };

        /**
         * Converts this RouteVisibility to JSON.
         * @function toJSON
         * @memberof proto.RouteVisibility
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouteVisibility.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RouteVisibility
         * @function getTypeUrl
         * @memberof proto.RouteVisibility
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RouteVisibility.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RouteVisibility";
        };

        return RouteVisibility;
    })();

    proto.ColorPair = (function() {

        /**
         * Properties of a ColorPair.
         * @memberof proto
         * @interface IColorPair
         * @property {string} color ColorPair color
         * @property {string} onColor ColorPair onColor
         */

        /**
         * Constructs a new ColorPair.
         * @memberof proto
         * @classdesc Represents a ColorPair.
         * @implements IColorPair
         * @constructor
         * @param {proto.IColorPair=} [properties] Properties to set
         */
        function ColorPair(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ColorPair color.
         * @member {string} color
         * @memberof proto.ColorPair
         * @instance
         */
        ColorPair.prototype.color = "";

        /**
         * ColorPair onColor.
         * @member {string} onColor
         * @memberof proto.ColorPair
         * @instance
         */
        ColorPair.prototype.onColor = "";

        /**
         * Creates a new ColorPair instance using the specified properties.
         * @function create
         * @memberof proto.ColorPair
         * @static
         * @param {proto.IColorPair=} [properties] Properties to set
         * @returns {proto.ColorPair} ColorPair instance
         */
        ColorPair.create = function create(properties) {
            return new ColorPair(properties);
        };

        /**
         * Encodes the specified ColorPair message. Does not implicitly {@link proto.ColorPair.verify|verify} messages.
         * @function encode
         * @memberof proto.ColorPair
         * @static
         * @param {proto.IColorPair} message ColorPair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ColorPair.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.color);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.onColor);
            return writer;
        };

        /**
         * Encodes the specified ColorPair message, length delimited. Does not implicitly {@link proto.ColorPair.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ColorPair
         * @static
         * @param {proto.IColorPair} message ColorPair message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ColorPair.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ColorPair message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ColorPair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ColorPair} ColorPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ColorPair.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ColorPair();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.color = reader.string();
                        break;
                    }
                case 2: {
                        message.onColor = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("color"))
                throw $util.ProtocolError("missing required 'color'", { instance: message });
            if (!message.hasOwnProperty("onColor"))
                throw $util.ProtocolError("missing required 'onColor'", { instance: message });
            return message;
        };

        /**
         * Decodes a ColorPair message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ColorPair
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ColorPair} ColorPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ColorPair.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ColorPair message.
         * @function verify
         * @memberof proto.ColorPair
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ColorPair.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.color))
                return "color: string expected";
            if (!$util.isString(message.onColor))
                return "onColor: string expected";
            return null;
        };

        /**
         * Creates a ColorPair message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ColorPair
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ColorPair} ColorPair
         */
        ColorPair.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ColorPair)
                return object;
            let message = new $root.proto.ColorPair();
            if (object.color != null)
                message.color = String(object.color);
            if (object.onColor != null)
                message.onColor = String(object.onColor);
            return message;
        };

        /**
         * Creates a plain object from a ColorPair message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ColorPair
         * @static
         * @param {proto.ColorPair} message ColorPair
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ColorPair.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.color = "";
                object.onColor = "";
            }
            if (message.color != null && message.hasOwnProperty("color"))
                object.color = message.color;
            if (message.onColor != null && message.hasOwnProperty("onColor"))
                object.onColor = message.onColor;
            return object;
        };

        /**
         * Converts this ColorPair to JSON.
         * @function toJSON
         * @memberof proto.ColorPair
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ColorPair.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ColorPair
         * @function getTypeUrl
         * @memberof proto.ColorPair
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ColorPair.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ColorPair";
        };

        return ColorPair;
    })();

    /**
     * RouteType enum.
     * @name proto.RouteType
     * @enum {number}
     * @property {number} ROUTE_TYPE_UNKNOWN=0 ROUTE_TYPE_UNKNOWN value
     * @property {number} ROUTE_TYPE_TRAM=1 ROUTE_TYPE_TRAM value
     * @property {number} ROUTE_TYPE_METRO=2 ROUTE_TYPE_METRO value
     * @property {number} ROUTE_TYPE_RAIL=3 ROUTE_TYPE_RAIL value
     * @property {number} ROUTE_TYPE_BUS=4 ROUTE_TYPE_BUS value
     * @property {number} ROUTE_TYPE_FERRY=5 ROUTE_TYPE_FERRY value
     */
    proto.RouteType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ROUTE_TYPE_UNKNOWN"] = 0;
        values[valuesById[1] = "ROUTE_TYPE_TRAM"] = 1;
        values[valuesById[2] = "ROUTE_TYPE_METRO"] = 2;
        values[valuesById[3] = "ROUTE_TYPE_RAIL"] = 3;
        values[valuesById[4] = "ROUTE_TYPE_BUS"] = 4;
        values[valuesById[5] = "ROUTE_TYPE_FERRY"] = 5;
        return values;
    })();

    proto.StopTimetable = (function() {

        /**
         * Properties of a StopTimetable.
         * @memberof proto
         * @interface IStopTimetable
         * @property {Array.<proto.IStopTimetableTime>|null} [times] StopTimetable times
         */

        /**
         * Constructs a new StopTimetable.
         * @memberof proto
         * @classdesc Represents a StopTimetable.
         * @implements IStopTimetable
         * @constructor
         * @param {proto.IStopTimetable=} [properties] Properties to set
         */
        function StopTimetable(properties) {
            this.times = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StopTimetable times.
         * @member {Array.<proto.IStopTimetableTime>} times
         * @memberof proto.StopTimetable
         * @instance
         */
        StopTimetable.prototype.times = $util.emptyArray;

        /**
         * Creates a new StopTimetable instance using the specified properties.
         * @function create
         * @memberof proto.StopTimetable
         * @static
         * @param {proto.IStopTimetable=} [properties] Properties to set
         * @returns {proto.StopTimetable} StopTimetable instance
         */
        StopTimetable.create = function create(properties) {
            return new StopTimetable(properties);
        };

        /**
         * Encodes the specified StopTimetable message. Does not implicitly {@link proto.StopTimetable.verify|verify} messages.
         * @function encode
         * @memberof proto.StopTimetable
         * @static
         * @param {proto.IStopTimetable} message StopTimetable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopTimetable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.times != null && message.times.length)
                for (let i = 0; i < message.times.length; ++i)
                    $root.proto.StopTimetableTime.encode(message.times[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StopTimetable message, length delimited. Does not implicitly {@link proto.StopTimetable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.StopTimetable
         * @static
         * @param {proto.IStopTimetable} message StopTimetable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopTimetable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StopTimetable message from the specified reader or buffer.
         * @function decode
         * @memberof proto.StopTimetable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.StopTimetable} StopTimetable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopTimetable.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.StopTimetable();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.times && message.times.length))
                            message.times = [];
                        message.times.push($root.proto.StopTimetableTime.decode(reader, reader.uint32()));
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
         * Decodes a StopTimetable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.StopTimetable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.StopTimetable} StopTimetable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopTimetable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StopTimetable message.
         * @function verify
         * @memberof proto.StopTimetable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StopTimetable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.times != null && message.hasOwnProperty("times")) {
                if (!Array.isArray(message.times))
                    return "times: array expected";
                for (let i = 0; i < message.times.length; ++i) {
                    let error = $root.proto.StopTimetableTime.verify(message.times[i]);
                    if (error)
                        return "times." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StopTimetable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.StopTimetable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.StopTimetable} StopTimetable
         */
        StopTimetable.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.StopTimetable)
                return object;
            let message = new $root.proto.StopTimetable();
            if (object.times) {
                if (!Array.isArray(object.times))
                    throw TypeError(".proto.StopTimetable.times: array expected");
                message.times = [];
                for (let i = 0; i < object.times.length; ++i) {
                    if (typeof object.times[i] !== "object")
                        throw TypeError(".proto.StopTimetable.times: object expected");
                    message.times[i] = $root.proto.StopTimetableTime.fromObject(object.times[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a StopTimetable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.StopTimetable
         * @static
         * @param {proto.StopTimetable} message StopTimetable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StopTimetable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.times = [];
            if (message.times && message.times.length) {
                object.times = [];
                for (let j = 0; j < message.times.length; ++j)
                    object.times[j] = $root.proto.StopTimetableTime.toObject(message.times[j], options);
            }
            return object;
        };

        /**
         * Converts this StopTimetable to JSON.
         * @function toJSON
         * @memberof proto.StopTimetable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StopTimetable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StopTimetable
         * @function getTypeUrl
         * @memberof proto.StopTimetable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StopTimetable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.StopTimetable";
        };

        return StopTimetable;
    })();

    proto.StopTimetableTime = (function() {

        /**
         * Properties of a StopTimetableTime.
         * @memberof proto
         * @interface IStopTimetableTime
         * @property {string|null} [childStopId] StopTimetableTime childStopId
         * @property {string} routeId StopTimetableTime routeId
         * @property {string} routeCode StopTimetableTime routeCode
         * @property {string} serviceId StopTimetableTime serviceId
         * @property {string} tripId StopTimetableTime tripId
         * @property {string} arrivalTime StopTimetableTime arrivalTime
         * @property {string} departureTime StopTimetableTime departureTime
         * @property {string} heading StopTimetableTime heading
         * @property {number} sequence StopTimetableTime sequence
         * @property {proto.IServiceAccessibility} accessibility StopTimetableTime accessibility
         */

        /**
         * Constructs a new StopTimetableTime.
         * @memberof proto
         * @classdesc Represents a StopTimetableTime.
         * @implements IStopTimetableTime
         * @constructor
         * @param {proto.IStopTimetableTime=} [properties] Properties to set
         */
        function StopTimetableTime(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StopTimetableTime childStopId.
         * @member {string} childStopId
         * @memberof proto.StopTimetableTime
         * @instance
         */
        StopTimetableTime.prototype.childStopId = "";

        /**
         * StopTimetableTime routeId.
         * @member {string} routeId
         * @memberof proto.StopTimetableTime
         * @instance
         */
        StopTimetableTime.prototype.routeId = "";

        /**
         * StopTimetableTime routeCode.
         * @member {string} routeCode
         * @memberof proto.StopTimetableTime
         * @instance
         */
        StopTimetableTime.prototype.routeCode = "";

        /**
         * StopTimetableTime serviceId.
         * @member {string} serviceId
         * @memberof proto.StopTimetableTime
         * @instance
         */
        StopTimetableTime.prototype.serviceId = "";

        /**
         * StopTimetableTime tripId.
         * @member {string} tripId
         * @memberof proto.StopTimetableTime
         * @instance
         */
        StopTimetableTime.prototype.tripId = "";

        /**
         * StopTimetableTime arrivalTime.
         * @member {string} arrivalTime
         * @memberof proto.StopTimetableTime
         * @instance
         */
        StopTimetableTime.prototype.arrivalTime = "";

        /**
         * StopTimetableTime departureTime.
         * @member {string} departureTime
         * @memberof proto.StopTimetableTime
         * @instance
         */
        StopTimetableTime.prototype.departureTime = "";

        /**
         * StopTimetableTime heading.
         * @member {string} heading
         * @memberof proto.StopTimetableTime
         * @instance
         */
        StopTimetableTime.prototype.heading = "";

        /**
         * StopTimetableTime sequence.
         * @member {number} sequence
         * @memberof proto.StopTimetableTime
         * @instance
         */
        StopTimetableTime.prototype.sequence = 0;

        /**
         * StopTimetableTime accessibility.
         * @member {proto.IServiceAccessibility} accessibility
         * @memberof proto.StopTimetableTime
         * @instance
         */
        StopTimetableTime.prototype.accessibility = null;

        /**
         * Creates a new StopTimetableTime instance using the specified properties.
         * @function create
         * @memberof proto.StopTimetableTime
         * @static
         * @param {proto.IStopTimetableTime=} [properties] Properties to set
         * @returns {proto.StopTimetableTime} StopTimetableTime instance
         */
        StopTimetableTime.create = function create(properties) {
            return new StopTimetableTime(properties);
        };

        /**
         * Encodes the specified StopTimetableTime message. Does not implicitly {@link proto.StopTimetableTime.verify|verify} messages.
         * @function encode
         * @memberof proto.StopTimetableTime
         * @static
         * @param {proto.IStopTimetableTime} message StopTimetableTime message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopTimetableTime.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.routeId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.routeCode);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.serviceId);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.arrivalTime);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.departureTime);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.heading);
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.sequence);
            $root.proto.ServiceAccessibility.encode(message.accessibility, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.childStopId != null && Object.hasOwnProperty.call(message, "childStopId"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.childStopId);
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.tripId);
            return writer;
        };

        /**
         * Encodes the specified StopTimetableTime message, length delimited. Does not implicitly {@link proto.StopTimetableTime.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.StopTimetableTime
         * @static
         * @param {proto.IStopTimetableTime} message StopTimetableTime message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StopTimetableTime.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StopTimetableTime message from the specified reader or buffer.
         * @function decode
         * @memberof proto.StopTimetableTime
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.StopTimetableTime} StopTimetableTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopTimetableTime.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.StopTimetableTime();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 9: {
                        message.childStopId = reader.string();
                        break;
                    }
                case 1: {
                        message.routeId = reader.string();
                        break;
                    }
                case 2: {
                        message.routeCode = reader.string();
                        break;
                    }
                case 3: {
                        message.serviceId = reader.string();
                        break;
                    }
                case 10: {
                        message.tripId = reader.string();
                        break;
                    }
                case 4: {
                        message.arrivalTime = reader.string();
                        break;
                    }
                case 5: {
                        message.departureTime = reader.string();
                        break;
                    }
                case 6: {
                        message.heading = reader.string();
                        break;
                    }
                case 7: {
                        message.sequence = reader.uint32();
                        break;
                    }
                case 8: {
                        message.accessibility = $root.proto.ServiceAccessibility.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("routeId"))
                throw $util.ProtocolError("missing required 'routeId'", { instance: message });
            if (!message.hasOwnProperty("routeCode"))
                throw $util.ProtocolError("missing required 'routeCode'", { instance: message });
            if (!message.hasOwnProperty("serviceId"))
                throw $util.ProtocolError("missing required 'serviceId'", { instance: message });
            if (!message.hasOwnProperty("tripId"))
                throw $util.ProtocolError("missing required 'tripId'", { instance: message });
            if (!message.hasOwnProperty("arrivalTime"))
                throw $util.ProtocolError("missing required 'arrivalTime'", { instance: message });
            if (!message.hasOwnProperty("departureTime"))
                throw $util.ProtocolError("missing required 'departureTime'", { instance: message });
            if (!message.hasOwnProperty("heading"))
                throw $util.ProtocolError("missing required 'heading'", { instance: message });
            if (!message.hasOwnProperty("sequence"))
                throw $util.ProtocolError("missing required 'sequence'", { instance: message });
            if (!message.hasOwnProperty("accessibility"))
                throw $util.ProtocolError("missing required 'accessibility'", { instance: message });
            return message;
        };

        /**
         * Decodes a StopTimetableTime message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.StopTimetableTime
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.StopTimetableTime} StopTimetableTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StopTimetableTime.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StopTimetableTime message.
         * @function verify
         * @memberof proto.StopTimetableTime
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StopTimetableTime.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.childStopId != null && message.hasOwnProperty("childStopId"))
                if (!$util.isString(message.childStopId))
                    return "childStopId: string expected";
            if (!$util.isString(message.routeId))
                return "routeId: string expected";
            if (!$util.isString(message.routeCode))
                return "routeCode: string expected";
            if (!$util.isString(message.serviceId))
                return "serviceId: string expected";
            if (!$util.isString(message.tripId))
                return "tripId: string expected";
            if (!$util.isString(message.arrivalTime))
                return "arrivalTime: string expected";
            if (!$util.isString(message.departureTime))
                return "departureTime: string expected";
            if (!$util.isString(message.heading))
                return "heading: string expected";
            if (!$util.isInteger(message.sequence))
                return "sequence: integer expected";
            {
                let error = $root.proto.ServiceAccessibility.verify(message.accessibility);
                if (error)
                    return "accessibility." + error;
            }
            return null;
        };

        /**
         * Creates a StopTimetableTime message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.StopTimetableTime
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.StopTimetableTime} StopTimetableTime
         */
        StopTimetableTime.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.StopTimetableTime)
                return object;
            let message = new $root.proto.StopTimetableTime();
            if (object.childStopId != null)
                message.childStopId = String(object.childStopId);
            if (object.routeId != null)
                message.routeId = String(object.routeId);
            if (object.routeCode != null)
                message.routeCode = String(object.routeCode);
            if (object.serviceId != null)
                message.serviceId = String(object.serviceId);
            if (object.tripId != null)
                message.tripId = String(object.tripId);
            if (object.arrivalTime != null)
                message.arrivalTime = String(object.arrivalTime);
            if (object.departureTime != null)
                message.departureTime = String(object.departureTime);
            if (object.heading != null)
                message.heading = String(object.heading);
            if (object.sequence != null)
                message.sequence = object.sequence >>> 0;
            if (object.accessibility != null) {
                if (typeof object.accessibility !== "object")
                    throw TypeError(".proto.StopTimetableTime.accessibility: object expected");
                message.accessibility = $root.proto.ServiceAccessibility.fromObject(object.accessibility);
            }
            return message;
        };

        /**
         * Creates a plain object from a StopTimetableTime message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.StopTimetableTime
         * @static
         * @param {proto.StopTimetableTime} message StopTimetableTime
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StopTimetableTime.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.routeId = "";
                object.routeCode = "";
                object.serviceId = "";
                object.arrivalTime = "";
                object.departureTime = "";
                object.heading = "";
                object.sequence = 0;
                object.accessibility = null;
                object.childStopId = "";
                object.tripId = "";
            }
            if (message.routeId != null && message.hasOwnProperty("routeId"))
                object.routeId = message.routeId;
            if (message.routeCode != null && message.hasOwnProperty("routeCode"))
                object.routeCode = message.routeCode;
            if (message.serviceId != null && message.hasOwnProperty("serviceId"))
                object.serviceId = message.serviceId;
            if (message.arrivalTime != null && message.hasOwnProperty("arrivalTime"))
                object.arrivalTime = message.arrivalTime;
            if (message.departureTime != null && message.hasOwnProperty("departureTime"))
                object.departureTime = message.departureTime;
            if (message.heading != null && message.hasOwnProperty("heading"))
                object.heading = message.heading;
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                object.sequence = message.sequence;
            if (message.accessibility != null && message.hasOwnProperty("accessibility"))
                object.accessibility = $root.proto.ServiceAccessibility.toObject(message.accessibility, options);
            if (message.childStopId != null && message.hasOwnProperty("childStopId"))
                object.childStopId = message.childStopId;
            if (message.tripId != null && message.hasOwnProperty("tripId"))
                object.tripId = message.tripId;
            return object;
        };

        /**
         * Converts this StopTimetableTime to JSON.
         * @function toJSON
         * @memberof proto.StopTimetableTime
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StopTimetableTime.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StopTimetableTime
         * @function getTypeUrl
         * @memberof proto.StopTimetableTime
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StopTimetableTime.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.StopTimetableTime";
        };

        return StopTimetableTime;
    })();

    proto.Service = (function() {

        /**
         * Properties of a Service.
         * @memberof proto
         * @interface IService
         * @property {string} id Service id
         * @property {Array.<proto.ITimetableServiceRegular>|null} [regular] Service regular
         * @property {Array.<proto.ITimetableServiceException>|null} [exception] Service exception
         * @property {proto.IServiceAccessibility|null} [accessibility] Service accessibility
         */

        /**
         * Constructs a new Service.
         * @memberof proto
         * @classdesc Represents a Service.
         * @implements IService
         * @constructor
         * @param {proto.IService=} [properties] Properties to set
         */
        function Service(properties) {
            this.regular = [];
            this.exception = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Service id.
         * @member {string} id
         * @memberof proto.Service
         * @instance
         */
        Service.prototype.id = "";

        /**
         * Service regular.
         * @member {Array.<proto.ITimetableServiceRegular>} regular
         * @memberof proto.Service
         * @instance
         */
        Service.prototype.regular = $util.emptyArray;

        /**
         * Service exception.
         * @member {Array.<proto.ITimetableServiceException>} exception
         * @memberof proto.Service
         * @instance
         */
        Service.prototype.exception = $util.emptyArray;

        /**
         * Service accessibility.
         * @member {proto.IServiceAccessibility|null|undefined} accessibility
         * @memberof proto.Service
         * @instance
         */
        Service.prototype.accessibility = null;

        /**
         * Creates a new Service instance using the specified properties.
         * @function create
         * @memberof proto.Service
         * @static
         * @param {proto.IService=} [properties] Properties to set
         * @returns {proto.Service} Service instance
         */
        Service.create = function create(properties) {
            return new Service(properties);
        };

        /**
         * Encodes the specified Service message. Does not implicitly {@link proto.Service.verify|verify} messages.
         * @function encode
         * @memberof proto.Service
         * @static
         * @param {proto.IService} message Service message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Service.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.regular != null && message.regular.length)
                for (let i = 0; i < message.regular.length; ++i)
                    $root.proto.TimetableServiceRegular.encode(message.regular[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.exception != null && message.exception.length)
                for (let i = 0; i < message.exception.length; ++i)
                    $root.proto.TimetableServiceException.encode(message.exception[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.accessibility != null && Object.hasOwnProperty.call(message, "accessibility"))
                $root.proto.ServiceAccessibility.encode(message.accessibility, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Service message, length delimited. Does not implicitly {@link proto.Service.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Service
         * @static
         * @param {proto.IService} message Service message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Service.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Service message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Service
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Service} Service
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Service.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Service();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.regular && message.regular.length))
                            message.regular = [];
                        message.regular.push($root.proto.TimetableServiceRegular.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.exception && message.exception.length))
                            message.exception = [];
                        message.exception.push($root.proto.TimetableServiceException.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.accessibility = $root.proto.ServiceAccessibility.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a Service message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Service
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Service} Service
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Service.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Service message.
         * @function verify
         * @memberof proto.Service
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Service.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (message.regular != null && message.hasOwnProperty("regular")) {
                if (!Array.isArray(message.regular))
                    return "regular: array expected";
                for (let i = 0; i < message.regular.length; ++i) {
                    let error = $root.proto.TimetableServiceRegular.verify(message.regular[i]);
                    if (error)
                        return "regular." + error;
                }
            }
            if (message.exception != null && message.hasOwnProperty("exception")) {
                if (!Array.isArray(message.exception))
                    return "exception: array expected";
                for (let i = 0; i < message.exception.length; ++i) {
                    let error = $root.proto.TimetableServiceException.verify(message.exception[i]);
                    if (error)
                        return "exception." + error;
                }
            }
            if (message.accessibility != null && message.hasOwnProperty("accessibility")) {
                let error = $root.proto.ServiceAccessibility.verify(message.accessibility);
                if (error)
                    return "accessibility." + error;
            }
            return null;
        };

        /**
         * Creates a Service message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Service
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Service} Service
         */
        Service.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Service)
                return object;
            let message = new $root.proto.Service();
            if (object.id != null)
                message.id = String(object.id);
            if (object.regular) {
                if (!Array.isArray(object.regular))
                    throw TypeError(".proto.Service.regular: array expected");
                message.regular = [];
                for (let i = 0; i < object.regular.length; ++i) {
                    if (typeof object.regular[i] !== "object")
                        throw TypeError(".proto.Service.regular: object expected");
                    message.regular[i] = $root.proto.TimetableServiceRegular.fromObject(object.regular[i]);
                }
            }
            if (object.exception) {
                if (!Array.isArray(object.exception))
                    throw TypeError(".proto.Service.exception: array expected");
                message.exception = [];
                for (let i = 0; i < object.exception.length; ++i) {
                    if (typeof object.exception[i] !== "object")
                        throw TypeError(".proto.Service.exception: object expected");
                    message.exception[i] = $root.proto.TimetableServiceException.fromObject(object.exception[i]);
                }
            }
            if (object.accessibility != null) {
                if (typeof object.accessibility !== "object")
                    throw TypeError(".proto.Service.accessibility: object expected");
                message.accessibility = $root.proto.ServiceAccessibility.fromObject(object.accessibility);
            }
            return message;
        };

        /**
         * Creates a plain object from a Service message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Service
         * @static
         * @param {proto.Service} message Service
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Service.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.regular = [];
                object.exception = [];
            }
            if (options.defaults) {
                object.id = "";
                object.accessibility = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.regular && message.regular.length) {
                object.regular = [];
                for (let j = 0; j < message.regular.length; ++j)
                    object.regular[j] = $root.proto.TimetableServiceRegular.toObject(message.regular[j], options);
            }
            if (message.exception && message.exception.length) {
                object.exception = [];
                for (let j = 0; j < message.exception.length; ++j)
                    object.exception[j] = $root.proto.TimetableServiceException.toObject(message.exception[j], options);
            }
            if (message.accessibility != null && message.hasOwnProperty("accessibility"))
                object.accessibility = $root.proto.ServiceAccessibility.toObject(message.accessibility, options);
            return object;
        };

        /**
         * Converts this Service to JSON.
         * @function toJSON
         * @memberof proto.Service
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Service.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Service
         * @function getTypeUrl
         * @memberof proto.Service
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Service.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Service";
        };

        return Service;
    })();

    /**
     * ServiceBikesAllowed enum.
     * @name proto.ServiceBikesAllowed
     * @enum {number}
     * @property {number} SERVICE_BIKES_ALLOWED_UNKNOWN=0 SERVICE_BIKES_ALLOWED_UNKNOWN value
     * @property {number} SERVICE_BIKES_ALLOWED_ALLOWED=1 SERVICE_BIKES_ALLOWED_ALLOWED value
     * @property {number} SERVICE_BIKES_ALLOWED_DISALLOWED=2 SERVICE_BIKES_ALLOWED_DISALLOWED value
     */
    proto.ServiceBikesAllowed = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SERVICE_BIKES_ALLOWED_UNKNOWN"] = 0;
        values[valuesById[1] = "SERVICE_BIKES_ALLOWED_ALLOWED"] = 1;
        values[valuesById[2] = "SERVICE_BIKES_ALLOWED_DISALLOWED"] = 2;
        return values;
    })();

    /**
     * ServiceWheelchairAccessible enum.
     * @name proto.ServiceWheelchairAccessible
     * @enum {number}
     * @property {number} SERVICE_WHEELCHAIR_ACCESSIBLE_UNKNOWN=0 SERVICE_WHEELCHAIR_ACCESSIBLE_UNKNOWN value
     * @property {number} SERVICE_WHEELCHAIR_ACCESSIBLE_ACCESSIBLE=1 SERVICE_WHEELCHAIR_ACCESSIBLE_ACCESSIBLE value
     * @property {number} SERVICE_WHEELCHAIR_ACCESSIBLE_INACCESSIBLE=2 SERVICE_WHEELCHAIR_ACCESSIBLE_INACCESSIBLE value
     */
    proto.ServiceWheelchairAccessible = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SERVICE_WHEELCHAIR_ACCESSIBLE_UNKNOWN"] = 0;
        values[valuesById[1] = "SERVICE_WHEELCHAIR_ACCESSIBLE_ACCESSIBLE"] = 1;
        values[valuesById[2] = "SERVICE_WHEELCHAIR_ACCESSIBLE_INACCESSIBLE"] = 2;
        return values;
    })();

    /**
     * MultipleQualifier enum.
     * @name proto.MultipleQualifier
     * @enum {number}
     * @property {number} MULTIPLE_QUALIFIER_SOME=0 MULTIPLE_QUALIFIER_SOME value
     * @property {number} MULTIPLE_QUALIFIER_ALL=1 MULTIPLE_QUALIFIER_ALL value
     */
    proto.MultipleQualifier = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MULTIPLE_QUALIFIER_SOME"] = 0;
        values[valuesById[1] = "MULTIPLE_QUALIFIER_ALL"] = 1;
        return values;
    })();

    proto.ServiceAccessibility = (function() {

        /**
         * Properties of a ServiceAccessibility.
         * @memberof proto
         * @interface IServiceAccessibility
         * @property {proto.ServiceBikesAllowed} bikesAllowed ServiceAccessibility bikesAllowed
         * @property {proto.MultipleQualifier|null} [bikesAllowedAppliesToAllTrips] ServiceAccessibility bikesAllowedAppliesToAllTrips
         * @property {proto.ServiceWheelchairAccessible} wheelchairAccessible ServiceAccessibility wheelchairAccessible
         * @property {proto.MultipleQualifier|null} [wheelchairAccessibleAppliesToAllTrips] ServiceAccessibility wheelchairAccessibleAppliesToAllTrips
         */

        /**
         * Constructs a new ServiceAccessibility.
         * @memberof proto
         * @classdesc Represents a ServiceAccessibility.
         * @implements IServiceAccessibility
         * @constructor
         * @param {proto.IServiceAccessibility=} [properties] Properties to set
         */
        function ServiceAccessibility(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServiceAccessibility bikesAllowed.
         * @member {proto.ServiceBikesAllowed} bikesAllowed
         * @memberof proto.ServiceAccessibility
         * @instance
         */
        ServiceAccessibility.prototype.bikesAllowed = 0;

        /**
         * ServiceAccessibility bikesAllowedAppliesToAllTrips.
         * @member {proto.MultipleQualifier} bikesAllowedAppliesToAllTrips
         * @memberof proto.ServiceAccessibility
         * @instance
         */
        ServiceAccessibility.prototype.bikesAllowedAppliesToAllTrips = 0;

        /**
         * ServiceAccessibility wheelchairAccessible.
         * @member {proto.ServiceWheelchairAccessible} wheelchairAccessible
         * @memberof proto.ServiceAccessibility
         * @instance
         */
        ServiceAccessibility.prototype.wheelchairAccessible = 0;

        /**
         * ServiceAccessibility wheelchairAccessibleAppliesToAllTrips.
         * @member {proto.MultipleQualifier} wheelchairAccessibleAppliesToAllTrips
         * @memberof proto.ServiceAccessibility
         * @instance
         */
        ServiceAccessibility.prototype.wheelchairAccessibleAppliesToAllTrips = 0;

        /**
         * Creates a new ServiceAccessibility instance using the specified properties.
         * @function create
         * @memberof proto.ServiceAccessibility
         * @static
         * @param {proto.IServiceAccessibility=} [properties] Properties to set
         * @returns {proto.ServiceAccessibility} ServiceAccessibility instance
         */
        ServiceAccessibility.create = function create(properties) {
            return new ServiceAccessibility(properties);
        };

        /**
         * Encodes the specified ServiceAccessibility message. Does not implicitly {@link proto.ServiceAccessibility.verify|verify} messages.
         * @function encode
         * @memberof proto.ServiceAccessibility
         * @static
         * @param {proto.IServiceAccessibility} message ServiceAccessibility message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServiceAccessibility.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.bikesAllowed);
            if (message.bikesAllowedAppliesToAllTrips != null && Object.hasOwnProperty.call(message, "bikesAllowedAppliesToAllTrips"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bikesAllowedAppliesToAllTrips);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.wheelchairAccessible);
            if (message.wheelchairAccessibleAppliesToAllTrips != null && Object.hasOwnProperty.call(message, "wheelchairAccessibleAppliesToAllTrips"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.wheelchairAccessibleAppliesToAllTrips);
            return writer;
        };

        /**
         * Encodes the specified ServiceAccessibility message, length delimited. Does not implicitly {@link proto.ServiceAccessibility.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ServiceAccessibility
         * @static
         * @param {proto.IServiceAccessibility} message ServiceAccessibility message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServiceAccessibility.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServiceAccessibility message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ServiceAccessibility
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ServiceAccessibility} ServiceAccessibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServiceAccessibility.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ServiceAccessibility();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.bikesAllowed = reader.int32();
                        break;
                    }
                case 2: {
                        message.bikesAllowedAppliesToAllTrips = reader.int32();
                        break;
                    }
                case 3: {
                        message.wheelchairAccessible = reader.int32();
                        break;
                    }
                case 4: {
                        message.wheelchairAccessibleAppliesToAllTrips = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("bikesAllowed"))
                throw $util.ProtocolError("missing required 'bikesAllowed'", { instance: message });
            if (!message.hasOwnProperty("wheelchairAccessible"))
                throw $util.ProtocolError("missing required 'wheelchairAccessible'", { instance: message });
            return message;
        };

        /**
         * Decodes a ServiceAccessibility message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ServiceAccessibility
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ServiceAccessibility} ServiceAccessibility
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServiceAccessibility.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServiceAccessibility message.
         * @function verify
         * @memberof proto.ServiceAccessibility
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServiceAccessibility.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.bikesAllowed) {
            default:
                return "bikesAllowed: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.bikesAllowedAppliesToAllTrips != null && message.hasOwnProperty("bikesAllowedAppliesToAllTrips"))
                switch (message.bikesAllowedAppliesToAllTrips) {
                default:
                    return "bikesAllowedAppliesToAllTrips: enum value expected";
                case 0:
                case 1:
                    break;
                }
            switch (message.wheelchairAccessible) {
            default:
                return "wheelchairAccessible: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
            if (message.wheelchairAccessibleAppliesToAllTrips != null && message.hasOwnProperty("wheelchairAccessibleAppliesToAllTrips"))
                switch (message.wheelchairAccessibleAppliesToAllTrips) {
                default:
                    return "wheelchairAccessibleAppliesToAllTrips: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a ServiceAccessibility message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ServiceAccessibility
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ServiceAccessibility} ServiceAccessibility
         */
        ServiceAccessibility.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ServiceAccessibility)
                return object;
            let message = new $root.proto.ServiceAccessibility();
            switch (object.bikesAllowed) {
            default:
                if (typeof object.bikesAllowed === "number") {
                    message.bikesAllowed = object.bikesAllowed;
                    break;
                }
                break;
            case "SERVICE_BIKES_ALLOWED_UNKNOWN":
            case 0:
                message.bikesAllowed = 0;
                break;
            case "SERVICE_BIKES_ALLOWED_ALLOWED":
            case 1:
                message.bikesAllowed = 1;
                break;
            case "SERVICE_BIKES_ALLOWED_DISALLOWED":
            case 2:
                message.bikesAllowed = 2;
                break;
            }
            switch (object.bikesAllowedAppliesToAllTrips) {
            default:
                if (typeof object.bikesAllowedAppliesToAllTrips === "number") {
                    message.bikesAllowedAppliesToAllTrips = object.bikesAllowedAppliesToAllTrips;
                    break;
                }
                break;
            case "MULTIPLE_QUALIFIER_SOME":
            case 0:
                message.bikesAllowedAppliesToAllTrips = 0;
                break;
            case "MULTIPLE_QUALIFIER_ALL":
            case 1:
                message.bikesAllowedAppliesToAllTrips = 1;
                break;
            }
            switch (object.wheelchairAccessible) {
            default:
                if (typeof object.wheelchairAccessible === "number") {
                    message.wheelchairAccessible = object.wheelchairAccessible;
                    break;
                }
                break;
            case "SERVICE_WHEELCHAIR_ACCESSIBLE_UNKNOWN":
            case 0:
                message.wheelchairAccessible = 0;
                break;
            case "SERVICE_WHEELCHAIR_ACCESSIBLE_ACCESSIBLE":
            case 1:
                message.wheelchairAccessible = 1;
                break;
            case "SERVICE_WHEELCHAIR_ACCESSIBLE_INACCESSIBLE":
            case 2:
                message.wheelchairAccessible = 2;
                break;
            }
            switch (object.wheelchairAccessibleAppliesToAllTrips) {
            default:
                if (typeof object.wheelchairAccessibleAppliesToAllTrips === "number") {
                    message.wheelchairAccessibleAppliesToAllTrips = object.wheelchairAccessibleAppliesToAllTrips;
                    break;
                }
                break;
            case "MULTIPLE_QUALIFIER_SOME":
            case 0:
                message.wheelchairAccessibleAppliesToAllTrips = 0;
                break;
            case "MULTIPLE_QUALIFIER_ALL":
            case 1:
                message.wheelchairAccessibleAppliesToAllTrips = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ServiceAccessibility message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ServiceAccessibility
         * @static
         * @param {proto.ServiceAccessibility} message ServiceAccessibility
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServiceAccessibility.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.bikesAllowed = options.enums === String ? "SERVICE_BIKES_ALLOWED_UNKNOWN" : 0;
                object.bikesAllowedAppliesToAllTrips = options.enums === String ? "MULTIPLE_QUALIFIER_SOME" : 0;
                object.wheelchairAccessible = options.enums === String ? "SERVICE_WHEELCHAIR_ACCESSIBLE_UNKNOWN" : 0;
                object.wheelchairAccessibleAppliesToAllTrips = options.enums === String ? "MULTIPLE_QUALIFIER_SOME" : 0;
            }
            if (message.bikesAllowed != null && message.hasOwnProperty("bikesAllowed"))
                object.bikesAllowed = options.enums === String ? $root.proto.ServiceBikesAllowed[message.bikesAllowed] === undefined ? message.bikesAllowed : $root.proto.ServiceBikesAllowed[message.bikesAllowed] : message.bikesAllowed;
            if (message.bikesAllowedAppliesToAllTrips != null && message.hasOwnProperty("bikesAllowedAppliesToAllTrips"))
                object.bikesAllowedAppliesToAllTrips = options.enums === String ? $root.proto.MultipleQualifier[message.bikesAllowedAppliesToAllTrips] === undefined ? message.bikesAllowedAppliesToAllTrips : $root.proto.MultipleQualifier[message.bikesAllowedAppliesToAllTrips] : message.bikesAllowedAppliesToAllTrips;
            if (message.wheelchairAccessible != null && message.hasOwnProperty("wheelchairAccessible"))
                object.wheelchairAccessible = options.enums === String ? $root.proto.ServiceWheelchairAccessible[message.wheelchairAccessible] === undefined ? message.wheelchairAccessible : $root.proto.ServiceWheelchairAccessible[message.wheelchairAccessible] : message.wheelchairAccessible;
            if (message.wheelchairAccessibleAppliesToAllTrips != null && message.hasOwnProperty("wheelchairAccessibleAppliesToAllTrips"))
                object.wheelchairAccessibleAppliesToAllTrips = options.enums === String ? $root.proto.MultipleQualifier[message.wheelchairAccessibleAppliesToAllTrips] === undefined ? message.wheelchairAccessibleAppliesToAllTrips : $root.proto.MultipleQualifier[message.wheelchairAccessibleAppliesToAllTrips] : message.wheelchairAccessibleAppliesToAllTrips;
            return object;
        };

        /**
         * Converts this ServiceAccessibility to JSON.
         * @function toJSON
         * @memberof proto.ServiceAccessibility
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServiceAccessibility.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServiceAccessibility
         * @function getTypeUrl
         * @memberof proto.ServiceAccessibility
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServiceAccessibility.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ServiceAccessibility";
        };

        return ServiceAccessibility;
    })();

    proto.TimetableServiceRegular = (function() {

        /**
         * Properties of a TimetableServiceRegular.
         * @memberof proto
         * @interface ITimetableServiceRegular
         * @property {boolean} monday TimetableServiceRegular monday
         * @property {boolean} tuesday TimetableServiceRegular tuesday
         * @property {boolean} wednesday TimetableServiceRegular wednesday
         * @property {boolean} thursday TimetableServiceRegular thursday
         * @property {boolean} friday TimetableServiceRegular friday
         * @property {boolean} saturday TimetableServiceRegular saturday
         * @property {boolean} sunday TimetableServiceRegular sunday
         * @property {string} startDate TimetableServiceRegular startDate
         * @property {string} endDate TimetableServiceRegular endDate
         * @property {Array.<proto.ITimetableServiceException>|null} [exceptions] TimetableServiceRegular exceptions
         */

        /**
         * Constructs a new TimetableServiceRegular.
         * @memberof proto
         * @classdesc Represents a TimetableServiceRegular.
         * @implements ITimetableServiceRegular
         * @constructor
         * @param {proto.ITimetableServiceRegular=} [properties] Properties to set
         */
        function TimetableServiceRegular(properties) {
            this.exceptions = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TimetableServiceRegular monday.
         * @member {boolean} monday
         * @memberof proto.TimetableServiceRegular
         * @instance
         */
        TimetableServiceRegular.prototype.monday = false;

        /**
         * TimetableServiceRegular tuesday.
         * @member {boolean} tuesday
         * @memberof proto.TimetableServiceRegular
         * @instance
         */
        TimetableServiceRegular.prototype.tuesday = false;

        /**
         * TimetableServiceRegular wednesday.
         * @member {boolean} wednesday
         * @memberof proto.TimetableServiceRegular
         * @instance
         */
        TimetableServiceRegular.prototype.wednesday = false;

        /**
         * TimetableServiceRegular thursday.
         * @member {boolean} thursday
         * @memberof proto.TimetableServiceRegular
         * @instance
         */
        TimetableServiceRegular.prototype.thursday = false;

        /**
         * TimetableServiceRegular friday.
         * @member {boolean} friday
         * @memberof proto.TimetableServiceRegular
         * @instance
         */
        TimetableServiceRegular.prototype.friday = false;

        /**
         * TimetableServiceRegular saturday.
         * @member {boolean} saturday
         * @memberof proto.TimetableServiceRegular
         * @instance
         */
        TimetableServiceRegular.prototype.saturday = false;

        /**
         * TimetableServiceRegular sunday.
         * @member {boolean} sunday
         * @memberof proto.TimetableServiceRegular
         * @instance
         */
        TimetableServiceRegular.prototype.sunday = false;

        /**
         * TimetableServiceRegular startDate.
         * @member {string} startDate
         * @memberof proto.TimetableServiceRegular
         * @instance
         */
        TimetableServiceRegular.prototype.startDate = "";

        /**
         * TimetableServiceRegular endDate.
         * @member {string} endDate
         * @memberof proto.TimetableServiceRegular
         * @instance
         */
        TimetableServiceRegular.prototype.endDate = "";

        /**
         * TimetableServiceRegular exceptions.
         * @member {Array.<proto.ITimetableServiceException>} exceptions
         * @memberof proto.TimetableServiceRegular
         * @instance
         */
        TimetableServiceRegular.prototype.exceptions = $util.emptyArray;

        /**
         * Creates a new TimetableServiceRegular instance using the specified properties.
         * @function create
         * @memberof proto.TimetableServiceRegular
         * @static
         * @param {proto.ITimetableServiceRegular=} [properties] Properties to set
         * @returns {proto.TimetableServiceRegular} TimetableServiceRegular instance
         */
        TimetableServiceRegular.create = function create(properties) {
            return new TimetableServiceRegular(properties);
        };

        /**
         * Encodes the specified TimetableServiceRegular message. Does not implicitly {@link proto.TimetableServiceRegular.verify|verify} messages.
         * @function encode
         * @memberof proto.TimetableServiceRegular
         * @static
         * @param {proto.ITimetableServiceRegular} message TimetableServiceRegular message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimetableServiceRegular.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.monday);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.tuesday);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.wednesday);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.thursday);
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.friday);
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.saturday);
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.sunday);
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.startDate);
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.endDate);
            if (message.exceptions != null && message.exceptions.length)
                for (let i = 0; i < message.exceptions.length; ++i)
                    $root.proto.TimetableServiceException.encode(message.exceptions[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TimetableServiceRegular message, length delimited. Does not implicitly {@link proto.TimetableServiceRegular.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TimetableServiceRegular
         * @static
         * @param {proto.ITimetableServiceRegular} message TimetableServiceRegular message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimetableServiceRegular.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimetableServiceRegular message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TimetableServiceRegular
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TimetableServiceRegular} TimetableServiceRegular
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimetableServiceRegular.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TimetableServiceRegular();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.monday = reader.bool();
                        break;
                    }
                case 2: {
                        message.tuesday = reader.bool();
                        break;
                    }
                case 3: {
                        message.wednesday = reader.bool();
                        break;
                    }
                case 4: {
                        message.thursday = reader.bool();
                        break;
                    }
                case 5: {
                        message.friday = reader.bool();
                        break;
                    }
                case 6: {
                        message.saturday = reader.bool();
                        break;
                    }
                case 7: {
                        message.sunday = reader.bool();
                        break;
                    }
                case 8: {
                        message.startDate = reader.string();
                        break;
                    }
                case 9: {
                        message.endDate = reader.string();
                        break;
                    }
                case 10: {
                        if (!(message.exceptions && message.exceptions.length))
                            message.exceptions = [];
                        message.exceptions.push($root.proto.TimetableServiceException.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("monday"))
                throw $util.ProtocolError("missing required 'monday'", { instance: message });
            if (!message.hasOwnProperty("tuesday"))
                throw $util.ProtocolError("missing required 'tuesday'", { instance: message });
            if (!message.hasOwnProperty("wednesday"))
                throw $util.ProtocolError("missing required 'wednesday'", { instance: message });
            if (!message.hasOwnProperty("thursday"))
                throw $util.ProtocolError("missing required 'thursday'", { instance: message });
            if (!message.hasOwnProperty("friday"))
                throw $util.ProtocolError("missing required 'friday'", { instance: message });
            if (!message.hasOwnProperty("saturday"))
                throw $util.ProtocolError("missing required 'saturday'", { instance: message });
            if (!message.hasOwnProperty("sunday"))
                throw $util.ProtocolError("missing required 'sunday'", { instance: message });
            if (!message.hasOwnProperty("startDate"))
                throw $util.ProtocolError("missing required 'startDate'", { instance: message });
            if (!message.hasOwnProperty("endDate"))
                throw $util.ProtocolError("missing required 'endDate'", { instance: message });
            return message;
        };

        /**
         * Decodes a TimetableServiceRegular message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TimetableServiceRegular
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TimetableServiceRegular} TimetableServiceRegular
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimetableServiceRegular.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TimetableServiceRegular message.
         * @function verify
         * @memberof proto.TimetableServiceRegular
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TimetableServiceRegular.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.monday !== "boolean")
                return "monday: boolean expected";
            if (typeof message.tuesday !== "boolean")
                return "tuesday: boolean expected";
            if (typeof message.wednesday !== "boolean")
                return "wednesday: boolean expected";
            if (typeof message.thursday !== "boolean")
                return "thursday: boolean expected";
            if (typeof message.friday !== "boolean")
                return "friday: boolean expected";
            if (typeof message.saturday !== "boolean")
                return "saturday: boolean expected";
            if (typeof message.sunday !== "boolean")
                return "sunday: boolean expected";
            if (!$util.isString(message.startDate))
                return "startDate: string expected";
            if (!$util.isString(message.endDate))
                return "endDate: string expected";
            if (message.exceptions != null && message.hasOwnProperty("exceptions")) {
                if (!Array.isArray(message.exceptions))
                    return "exceptions: array expected";
                for (let i = 0; i < message.exceptions.length; ++i) {
                    let error = $root.proto.TimetableServiceException.verify(message.exceptions[i]);
                    if (error)
                        return "exceptions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TimetableServiceRegular message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TimetableServiceRegular
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TimetableServiceRegular} TimetableServiceRegular
         */
        TimetableServiceRegular.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TimetableServiceRegular)
                return object;
            let message = new $root.proto.TimetableServiceRegular();
            if (object.monday != null)
                message.monday = Boolean(object.monday);
            if (object.tuesday != null)
                message.tuesday = Boolean(object.tuesday);
            if (object.wednesday != null)
                message.wednesday = Boolean(object.wednesday);
            if (object.thursday != null)
                message.thursday = Boolean(object.thursday);
            if (object.friday != null)
                message.friday = Boolean(object.friday);
            if (object.saturday != null)
                message.saturday = Boolean(object.saturday);
            if (object.sunday != null)
                message.sunday = Boolean(object.sunday);
            if (object.startDate != null)
                message.startDate = String(object.startDate);
            if (object.endDate != null)
                message.endDate = String(object.endDate);
            if (object.exceptions) {
                if (!Array.isArray(object.exceptions))
                    throw TypeError(".proto.TimetableServiceRegular.exceptions: array expected");
                message.exceptions = [];
                for (let i = 0; i < object.exceptions.length; ++i) {
                    if (typeof object.exceptions[i] !== "object")
                        throw TypeError(".proto.TimetableServiceRegular.exceptions: object expected");
                    message.exceptions[i] = $root.proto.TimetableServiceException.fromObject(object.exceptions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TimetableServiceRegular message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TimetableServiceRegular
         * @static
         * @param {proto.TimetableServiceRegular} message TimetableServiceRegular
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TimetableServiceRegular.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.exceptions = [];
            if (options.defaults) {
                object.monday = false;
                object.tuesday = false;
                object.wednesday = false;
                object.thursday = false;
                object.friday = false;
                object.saturday = false;
                object.sunday = false;
                object.startDate = "";
                object.endDate = "";
            }
            if (message.monday != null && message.hasOwnProperty("monday"))
                object.monday = message.monday;
            if (message.tuesday != null && message.hasOwnProperty("tuesday"))
                object.tuesday = message.tuesday;
            if (message.wednesday != null && message.hasOwnProperty("wednesday"))
                object.wednesday = message.wednesday;
            if (message.thursday != null && message.hasOwnProperty("thursday"))
                object.thursday = message.thursday;
            if (message.friday != null && message.hasOwnProperty("friday"))
                object.friday = message.friday;
            if (message.saturday != null && message.hasOwnProperty("saturday"))
                object.saturday = message.saturday;
            if (message.sunday != null && message.hasOwnProperty("sunday"))
                object.sunday = message.sunday;
            if (message.startDate != null && message.hasOwnProperty("startDate"))
                object.startDate = message.startDate;
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                object.endDate = message.endDate;
            if (message.exceptions && message.exceptions.length) {
                object.exceptions = [];
                for (let j = 0; j < message.exceptions.length; ++j)
                    object.exceptions[j] = $root.proto.TimetableServiceException.toObject(message.exceptions[j], options);
            }
            return object;
        };

        /**
         * Converts this TimetableServiceRegular to JSON.
         * @function toJSON
         * @memberof proto.TimetableServiceRegular
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimetableServiceRegular.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TimetableServiceRegular
         * @function getTypeUrl
         * @memberof proto.TimetableServiceRegular
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TimetableServiceRegular.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.TimetableServiceRegular";
        };

        return TimetableServiceRegular;
    })();

    /**
     * TimetableServiceExceptionType enum.
     * @name proto.TimetableServiceExceptionType
     * @enum {number}
     * @property {number} TIMETABLE_SERVICE_EXCEPTION_TYPE_ADDED=1 TIMETABLE_SERVICE_EXCEPTION_TYPE_ADDED value
     * @property {number} TIMETABLE_SERVICE_EXCEPTION_TYPE_REMOVED=2 TIMETABLE_SERVICE_EXCEPTION_TYPE_REMOVED value
     */
    proto.TimetableServiceExceptionType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "TIMETABLE_SERVICE_EXCEPTION_TYPE_ADDED"] = 1;
        values[valuesById[2] = "TIMETABLE_SERVICE_EXCEPTION_TYPE_REMOVED"] = 2;
        return values;
    })();

    proto.TimetableServiceException = (function() {

        /**
         * Properties of a TimetableServiceException.
         * @memberof proto
         * @interface ITimetableServiceException
         * @property {string} date TimetableServiceException date
         * @property {proto.TimetableServiceExceptionType} type TimetableServiceException type
         */

        /**
         * Constructs a new TimetableServiceException.
         * @memberof proto
         * @classdesc Represents a TimetableServiceException.
         * @implements ITimetableServiceException
         * @constructor
         * @param {proto.ITimetableServiceException=} [properties] Properties to set
         */
        function TimetableServiceException(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TimetableServiceException date.
         * @member {string} date
         * @memberof proto.TimetableServiceException
         * @instance
         */
        TimetableServiceException.prototype.date = "";

        /**
         * TimetableServiceException type.
         * @member {proto.TimetableServiceExceptionType} type
         * @memberof proto.TimetableServiceException
         * @instance
         */
        TimetableServiceException.prototype.type = 1;

        /**
         * Creates a new TimetableServiceException instance using the specified properties.
         * @function create
         * @memberof proto.TimetableServiceException
         * @static
         * @param {proto.ITimetableServiceException=} [properties] Properties to set
         * @returns {proto.TimetableServiceException} TimetableServiceException instance
         */
        TimetableServiceException.create = function create(properties) {
            return new TimetableServiceException(properties);
        };

        /**
         * Encodes the specified TimetableServiceException message. Does not implicitly {@link proto.TimetableServiceException.verify|verify} messages.
         * @function encode
         * @memberof proto.TimetableServiceException
         * @static
         * @param {proto.ITimetableServiceException} message TimetableServiceException message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimetableServiceException.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.date);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified TimetableServiceException message, length delimited. Does not implicitly {@link proto.TimetableServiceException.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TimetableServiceException
         * @static
         * @param {proto.ITimetableServiceException} message TimetableServiceException message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TimetableServiceException.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TimetableServiceException message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TimetableServiceException
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TimetableServiceException} TimetableServiceException
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimetableServiceException.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TimetableServiceException();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.date = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("date"))
                throw $util.ProtocolError("missing required 'date'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a TimetableServiceException message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TimetableServiceException
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TimetableServiceException} TimetableServiceException
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TimetableServiceException.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TimetableServiceException message.
         * @function verify
         * @memberof proto.TimetableServiceException
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TimetableServiceException.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.date))
                return "date: string expected";
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 1:
            case 2:
                break;
            }
            return null;
        };

        /**
         * Creates a TimetableServiceException message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TimetableServiceException
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TimetableServiceException} TimetableServiceException
         */
        TimetableServiceException.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TimetableServiceException)
                return object;
            let message = new $root.proto.TimetableServiceException();
            if (object.date != null)
                message.date = String(object.date);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "TIMETABLE_SERVICE_EXCEPTION_TYPE_ADDED":
            case 1:
                message.type = 1;
                break;
            case "TIMETABLE_SERVICE_EXCEPTION_TYPE_REMOVED":
            case 2:
                message.type = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a TimetableServiceException message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TimetableServiceException
         * @static
         * @param {proto.TimetableServiceException} message TimetableServiceException
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TimetableServiceException.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.date = "";
                object.type = options.enums === String ? "TIMETABLE_SERVICE_EXCEPTION_TYPE_ADDED" : 1;
            }
            if (message.date != null && message.hasOwnProperty("date"))
                object.date = message.date;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.proto.TimetableServiceExceptionType[message.type] === undefined ? message.type : $root.proto.TimetableServiceExceptionType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this TimetableServiceException to JSON.
         * @function toJSON
         * @memberof proto.TimetableServiceException
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TimetableServiceException.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TimetableServiceException
         * @function getTypeUrl
         * @memberof proto.TimetableServiceException
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TimetableServiceException.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.TimetableServiceException";
        };

        return TimetableServiceException;
    })();

    proto.RouteTripInformation = (function() {

        /**
         * Properties of a RouteTripInformation.
         * @memberof proto
         * @interface IRouteTripInformation
         * @property {string|null} [startTime] RouteTripInformation startTime
         * @property {string|null} [endTime] RouteTripInformation endTime
         * @property {proto.IServiceAccessibility} accessibility RouteTripInformation accessibility
         * @property {Array.<proto.IRouteTripStop>|null} [stops] RouteTripInformation stops
         * @property {string|null} [heading] RouteTripInformation heading
         */

        /**
         * Constructs a new RouteTripInformation.
         * @memberof proto
         * @classdesc Represents a RouteTripInformation.
         * @implements IRouteTripInformation
         * @constructor
         * @param {proto.IRouteTripInformation=} [properties] Properties to set
         */
        function RouteTripInformation(properties) {
            this.stops = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouteTripInformation startTime.
         * @member {string} startTime
         * @memberof proto.RouteTripInformation
         * @instance
         */
        RouteTripInformation.prototype.startTime = "";

        /**
         * RouteTripInformation endTime.
         * @member {string} endTime
         * @memberof proto.RouteTripInformation
         * @instance
         */
        RouteTripInformation.prototype.endTime = "";

        /**
         * RouteTripInformation accessibility.
         * @member {proto.IServiceAccessibility} accessibility
         * @memberof proto.RouteTripInformation
         * @instance
         */
        RouteTripInformation.prototype.accessibility = null;

        /**
         * RouteTripInformation stops.
         * @member {Array.<proto.IRouteTripStop>} stops
         * @memberof proto.RouteTripInformation
         * @instance
         */
        RouteTripInformation.prototype.stops = $util.emptyArray;

        /**
         * RouteTripInformation heading.
         * @member {string} heading
         * @memberof proto.RouteTripInformation
         * @instance
         */
        RouteTripInformation.prototype.heading = "";

        /**
         * Creates a new RouteTripInformation instance using the specified properties.
         * @function create
         * @memberof proto.RouteTripInformation
         * @static
         * @param {proto.IRouteTripInformation=} [properties] Properties to set
         * @returns {proto.RouteTripInformation} RouteTripInformation instance
         */
        RouteTripInformation.create = function create(properties) {
            return new RouteTripInformation(properties);
        };

        /**
         * Encodes the specified RouteTripInformation message. Does not implicitly {@link proto.RouteTripInformation.verify|verify} messages.
         * @function encode
         * @memberof proto.RouteTripInformation
         * @static
         * @param {proto.IRouteTripInformation} message RouteTripInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteTripInformation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.startTime != null && Object.hasOwnProperty.call(message, "startTime"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.startTime);
            if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.endTime);
            $root.proto.ServiceAccessibility.encode(message.accessibility, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.stops != null && message.stops.length)
                for (let i = 0; i < message.stops.length; ++i)
                    $root.proto.RouteTripStop.encode(message.stops[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.heading != null && Object.hasOwnProperty.call(message, "heading"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.heading);
            return writer;
        };

        /**
         * Encodes the specified RouteTripInformation message, length delimited. Does not implicitly {@link proto.RouteTripInformation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RouteTripInformation
         * @static
         * @param {proto.IRouteTripInformation} message RouteTripInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteTripInformation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RouteTripInformation message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RouteTripInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RouteTripInformation} RouteTripInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteTripInformation.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RouteTripInformation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.startTime = reader.string();
                        break;
                    }
                case 2: {
                        message.endTime = reader.string();
                        break;
                    }
                case 3: {
                        message.accessibility = $root.proto.ServiceAccessibility.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.stops && message.stops.length))
                            message.stops = [];
                        message.stops.push($root.proto.RouteTripStop.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.heading = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("accessibility"))
                throw $util.ProtocolError("missing required 'accessibility'", { instance: message });
            return message;
        };

        /**
         * Decodes a RouteTripInformation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RouteTripInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RouteTripInformation} RouteTripInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteTripInformation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouteTripInformation message.
         * @function verify
         * @memberof proto.RouteTripInformation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouteTripInformation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                if (!$util.isString(message.startTime))
                    return "startTime: string expected";
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (!$util.isString(message.endTime))
                    return "endTime: string expected";
            {
                let error = $root.proto.ServiceAccessibility.verify(message.accessibility);
                if (error)
                    return "accessibility." + error;
            }
            if (message.stops != null && message.hasOwnProperty("stops")) {
                if (!Array.isArray(message.stops))
                    return "stops: array expected";
                for (let i = 0; i < message.stops.length; ++i) {
                    let error = $root.proto.RouteTripStop.verify(message.stops[i]);
                    if (error)
                        return "stops." + error;
                }
            }
            if (message.heading != null && message.hasOwnProperty("heading"))
                if (!$util.isString(message.heading))
                    return "heading: string expected";
            return null;
        };

        /**
         * Creates a RouteTripInformation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RouteTripInformation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RouteTripInformation} RouteTripInformation
         */
        RouteTripInformation.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RouteTripInformation)
                return object;
            let message = new $root.proto.RouteTripInformation();
            if (object.startTime != null)
                message.startTime = String(object.startTime);
            if (object.endTime != null)
                message.endTime = String(object.endTime);
            if (object.accessibility != null) {
                if (typeof object.accessibility !== "object")
                    throw TypeError(".proto.RouteTripInformation.accessibility: object expected");
                message.accessibility = $root.proto.ServiceAccessibility.fromObject(object.accessibility);
            }
            if (object.stops) {
                if (!Array.isArray(object.stops))
                    throw TypeError(".proto.RouteTripInformation.stops: array expected");
                message.stops = [];
                for (let i = 0; i < object.stops.length; ++i) {
                    if (typeof object.stops[i] !== "object")
                        throw TypeError(".proto.RouteTripInformation.stops: object expected");
                    message.stops[i] = $root.proto.RouteTripStop.fromObject(object.stops[i]);
                }
            }
            if (object.heading != null)
                message.heading = String(object.heading);
            return message;
        };

        /**
         * Creates a plain object from a RouteTripInformation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RouteTripInformation
         * @static
         * @param {proto.RouteTripInformation} message RouteTripInformation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouteTripInformation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.stops = [];
            if (options.defaults) {
                object.startTime = "";
                object.endTime = "";
                object.accessibility = null;
                object.heading = "";
            }
            if (message.startTime != null && message.hasOwnProperty("startTime"))
                object.startTime = message.startTime;
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                object.endTime = message.endTime;
            if (message.accessibility != null && message.hasOwnProperty("accessibility"))
                object.accessibility = $root.proto.ServiceAccessibility.toObject(message.accessibility, options);
            if (message.stops && message.stops.length) {
                object.stops = [];
                for (let j = 0; j < message.stops.length; ++j)
                    object.stops[j] = $root.proto.RouteTripStop.toObject(message.stops[j], options);
            }
            if (message.heading != null && message.hasOwnProperty("heading"))
                object.heading = message.heading;
            return object;
        };

        /**
         * Converts this RouteTripInformation to JSON.
         * @function toJSON
         * @memberof proto.RouteTripInformation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouteTripInformation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RouteTripInformation
         * @function getTypeUrl
         * @memberof proto.RouteTripInformation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RouteTripInformation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RouteTripInformation";
        };

        return RouteTripInformation;
    })();

    proto.RouteTripStop = (function() {

        /**
         * Properties of a RouteTripStop.
         * @memberof proto
         * @interface IRouteTripStop
         * @property {string} stopId RouteTripStop stopId
         * @property {string|null} [arrivalTime] RouteTripStop arrivalTime
         * @property {string|null} [departureTime] RouteTripStop departureTime
         * @property {number} sequence RouteTripStop sequence
         */

        /**
         * Constructs a new RouteTripStop.
         * @memberof proto
         * @classdesc Represents a RouteTripStop.
         * @implements IRouteTripStop
         * @constructor
         * @param {proto.IRouteTripStop=} [properties] Properties to set
         */
        function RouteTripStop(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RouteTripStop stopId.
         * @member {string} stopId
         * @memberof proto.RouteTripStop
         * @instance
         */
        RouteTripStop.prototype.stopId = "";

        /**
         * RouteTripStop arrivalTime.
         * @member {string} arrivalTime
         * @memberof proto.RouteTripStop
         * @instance
         */
        RouteTripStop.prototype.arrivalTime = "";

        /**
         * RouteTripStop departureTime.
         * @member {string} departureTime
         * @memberof proto.RouteTripStop
         * @instance
         */
        RouteTripStop.prototype.departureTime = "";

        /**
         * RouteTripStop sequence.
         * @member {number} sequence
         * @memberof proto.RouteTripStop
         * @instance
         */
        RouteTripStop.prototype.sequence = 0;

        /**
         * Creates a new RouteTripStop instance using the specified properties.
         * @function create
         * @memberof proto.RouteTripStop
         * @static
         * @param {proto.IRouteTripStop=} [properties] Properties to set
         * @returns {proto.RouteTripStop} RouteTripStop instance
         */
        RouteTripStop.create = function create(properties) {
            return new RouteTripStop(properties);
        };

        /**
         * Encodes the specified RouteTripStop message. Does not implicitly {@link proto.RouteTripStop.verify|verify} messages.
         * @function encode
         * @memberof proto.RouteTripStop
         * @static
         * @param {proto.IRouteTripStop} message RouteTripStop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteTripStop.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.stopId);
            if (message.arrivalTime != null && Object.hasOwnProperty.call(message, "arrivalTime"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.arrivalTime);
            if (message.departureTime != null && Object.hasOwnProperty.call(message, "departureTime"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.departureTime);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.sequence);
            return writer;
        };

        /**
         * Encodes the specified RouteTripStop message, length delimited. Does not implicitly {@link proto.RouteTripStop.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RouteTripStop
         * @static
         * @param {proto.IRouteTripStop} message RouteTripStop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RouteTripStop.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RouteTripStop message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RouteTripStop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RouteTripStop} RouteTripStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteTripStop.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RouteTripStop();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.stopId = reader.string();
                        break;
                    }
                case 2: {
                        message.arrivalTime = reader.string();
                        break;
                    }
                case 3: {
                        message.departureTime = reader.string();
                        break;
                    }
                case 4: {
                        message.sequence = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("stopId"))
                throw $util.ProtocolError("missing required 'stopId'", { instance: message });
            if (!message.hasOwnProperty("sequence"))
                throw $util.ProtocolError("missing required 'sequence'", { instance: message });
            return message;
        };

        /**
         * Decodes a RouteTripStop message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.RouteTripStop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RouteTripStop} RouteTripStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RouteTripStop.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RouteTripStop message.
         * @function verify
         * @memberof proto.RouteTripStop
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RouteTripStop.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.stopId))
                return "stopId: string expected";
            if (message.arrivalTime != null && message.hasOwnProperty("arrivalTime"))
                if (!$util.isString(message.arrivalTime))
                    return "arrivalTime: string expected";
            if (message.departureTime != null && message.hasOwnProperty("departureTime"))
                if (!$util.isString(message.departureTime))
                    return "departureTime: string expected";
            if (!$util.isInteger(message.sequence))
                return "sequence: integer expected";
            return null;
        };

        /**
         * Creates a RouteTripStop message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.RouteTripStop
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RouteTripStop} RouteTripStop
         */
        RouteTripStop.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RouteTripStop)
                return object;
            let message = new $root.proto.RouteTripStop();
            if (object.stopId != null)
                message.stopId = String(object.stopId);
            if (object.arrivalTime != null)
                message.arrivalTime = String(object.arrivalTime);
            if (object.departureTime != null)
                message.departureTime = String(object.departureTime);
            if (object.sequence != null)
                message.sequence = object.sequence >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RouteTripStop message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RouteTripStop
         * @static
         * @param {proto.RouteTripStop} message RouteTripStop
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RouteTripStop.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.stopId = "";
                object.arrivalTime = "";
                object.departureTime = "";
                object.sequence = 0;
            }
            if (message.stopId != null && message.hasOwnProperty("stopId"))
                object.stopId = message.stopId;
            if (message.arrivalTime != null && message.hasOwnProperty("arrivalTime"))
                object.arrivalTime = message.arrivalTime;
            if (message.departureTime != null && message.hasOwnProperty("departureTime"))
                object.departureTime = message.departureTime;
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                object.sequence = message.sequence;
            return object;
        };

        /**
         * Converts this RouteTripStop to JSON.
         * @function toJSON
         * @memberof proto.RouteTripStop
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RouteTripStop.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RouteTripStop
         * @function getTypeUrl
         * @memberof proto.RouteTripStop
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RouteTripStop.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.RouteTripStop";
        };

        return RouteTripStop;
    })();

    proto.Location = (function() {

        /**
         * Properties of a Location.
         * @memberof proto
         * @interface ILocation
         * @property {number} lat Location lat
         * @property {number} lng Location lng
         */

        /**
         * Constructs a new Location.
         * @memberof proto
         * @classdesc Represents a Location.
         * @implements ILocation
         * @constructor
         * @param {proto.ILocation=} [properties] Properties to set
         */
        function Location(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Location lat.
         * @member {number} lat
         * @memberof proto.Location
         * @instance
         */
        Location.prototype.lat = 0;

        /**
         * Location lng.
         * @member {number} lng
         * @memberof proto.Location
         * @instance
         */
        Location.prototype.lng = 0;

        /**
         * Creates a new Location instance using the specified properties.
         * @function create
         * @memberof proto.Location
         * @static
         * @param {proto.ILocation=} [properties] Properties to set
         * @returns {proto.Location} Location instance
         */
        Location.create = function create(properties) {
            return new Location(properties);
        };

        /**
         * Encodes the specified Location message. Does not implicitly {@link proto.Location.verify|verify} messages.
         * @function encode
         * @memberof proto.Location
         * @static
         * @param {proto.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.lat);
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.lng);
            return writer;
        };

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link proto.Location.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Location
         * @static
         * @param {proto.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Location();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.lat = reader.double();
                        break;
                    }
                case 2: {
                        message.lng = reader.double();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("lat"))
                throw $util.ProtocolError("missing required 'lat'", { instance: message });
            if (!message.hasOwnProperty("lng"))
                throw $util.ProtocolError("missing required 'lng'", { instance: message });
            return message;
        };

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Location message.
         * @function verify
         * @memberof proto.Location
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Location.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.lat !== "number")
                return "lat: number expected";
            if (typeof message.lng !== "number")
                return "lng: number expected";
            return null;
        };

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Location
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Location} Location
         */
        Location.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Location)
                return object;
            let message = new $root.proto.Location();
            if (object.lat != null)
                message.lat = Number(object.lat);
            if (object.lng != null)
                message.lng = Number(object.lng);
            return message;
        };

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Location
         * @static
         * @param {proto.Location} message Location
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Location.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.lat = 0;
                object.lng = 0;
            }
            if (message.lat != null && message.hasOwnProperty("lat"))
                object.lat = options.json && !isFinite(message.lat) ? String(message.lat) : message.lat;
            if (message.lng != null && message.hasOwnProperty("lng"))
                object.lng = options.json && !isFinite(message.lng) ? String(message.lng) : message.lng;
            return object;
        };

        /**
         * Converts this Location to JSON.
         * @function toJSON
         * @memberof proto.Location
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Location.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Location
         * @function getTypeUrl
         * @memberof proto.Location
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Location.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Location";
        };

        return Location;
    })();

    /**
     * ServiceAlertRegion enum.
     * @name proto.ServiceAlertRegion
     * @enum {number}
     * @property {number} SERVICE_ALERT_REGION_BELCONNEN=1 SERVICE_ALERT_REGION_BELCONNEN value
     * @property {number} SERVICE_ALERT_REGION_CENTRAL_CANBERRA=2 SERVICE_ALERT_REGION_CENTRAL_CANBERRA value
     * @property {number} SERVICE_ALERT_REGION_GUNGAHLIN=3 SERVICE_ALERT_REGION_GUNGAHLIN value
     * @property {number} SERVICE_ALERT_REGION_TUGGERANONG=4 SERVICE_ALERT_REGION_TUGGERANONG value
     * @property {number} SERVICE_ALERT_REGION_WODEN_WESTON_CREEK_MOLONGLO=5 SERVICE_ALERT_REGION_WODEN_WESTON_CREEK_MOLONGLO value
     */
    proto.ServiceAlertRegion = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "SERVICE_ALERT_REGION_BELCONNEN"] = 1;
        values[valuesById[2] = "SERVICE_ALERT_REGION_CENTRAL_CANBERRA"] = 2;
        values[valuesById[3] = "SERVICE_ALERT_REGION_GUNGAHLIN"] = 3;
        values[valuesById[4] = "SERVICE_ALERT_REGION_TUGGERANONG"] = 4;
        values[valuesById[5] = "SERVICE_ALERT_REGION_WODEN_WESTON_CREEK_MOLONGLO"] = 5;
        return values;
    })();

    proto.ServiceAlert = (function() {

        /**
         * Properties of a ServiceAlert.
         * @memberof proto
         * @interface IServiceAlert
         * @property {string} id ServiceAlert id
         * @property {string} title ServiceAlert title
         * @property {string|null} [date] ServiceAlert date
         * @property {string|null} [url] ServiceAlert url
         * @property {Array.<proto.ServiceAlertRegion>|null} [regions] ServiceAlert regions
         * @property {string|null} [highlightDuration] ServiceAlert highlightDuration
         */

        /**
         * Constructs a new ServiceAlert.
         * @memberof proto
         * @classdesc Represents a ServiceAlert.
         * @implements IServiceAlert
         * @constructor
         * @param {proto.IServiceAlert=} [properties] Properties to set
         */
        function ServiceAlert(properties) {
            this.regions = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServiceAlert id.
         * @member {string} id
         * @memberof proto.ServiceAlert
         * @instance
         */
        ServiceAlert.prototype.id = "";

        /**
         * ServiceAlert title.
         * @member {string} title
         * @memberof proto.ServiceAlert
         * @instance
         */
        ServiceAlert.prototype.title = "";

        /**
         * ServiceAlert date.
         * @member {string} date
         * @memberof proto.ServiceAlert
         * @instance
         */
        ServiceAlert.prototype.date = "";

        /**
         * ServiceAlert url.
         * @member {string} url
         * @memberof proto.ServiceAlert
         * @instance
         */
        ServiceAlert.prototype.url = "";

        /**
         * ServiceAlert regions.
         * @member {Array.<proto.ServiceAlertRegion>} regions
         * @memberof proto.ServiceAlert
         * @instance
         */
        ServiceAlert.prototype.regions = $util.emptyArray;

        /**
         * ServiceAlert highlightDuration.
         * @member {string} highlightDuration
         * @memberof proto.ServiceAlert
         * @instance
         */
        ServiceAlert.prototype.highlightDuration = "";

        /**
         * Creates a new ServiceAlert instance using the specified properties.
         * @function create
         * @memberof proto.ServiceAlert
         * @static
         * @param {proto.IServiceAlert=} [properties] Properties to set
         * @returns {proto.ServiceAlert} ServiceAlert instance
         */
        ServiceAlert.create = function create(properties) {
            return new ServiceAlert(properties);
        };

        /**
         * Encodes the specified ServiceAlert message. Does not implicitly {@link proto.ServiceAlert.verify|verify} messages.
         * @function encode
         * @memberof proto.ServiceAlert
         * @static
         * @param {proto.IServiceAlert} message ServiceAlert message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServiceAlert.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.date != null && Object.hasOwnProperty.call(message, "date"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.date);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.url);
            if (message.regions != null && message.regions.length)
                for (let i = 0; i < message.regions.length; ++i)
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.regions[i]);
            if (message.highlightDuration != null && Object.hasOwnProperty.call(message, "highlightDuration"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.highlightDuration);
            return writer;
        };

        /**
         * Encodes the specified ServiceAlert message, length delimited. Does not implicitly {@link proto.ServiceAlert.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ServiceAlert
         * @static
         * @param {proto.IServiceAlert} message ServiceAlert message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServiceAlert.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServiceAlert message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ServiceAlert
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ServiceAlert} ServiceAlert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServiceAlert.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ServiceAlert();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.title = reader.string();
                        break;
                    }
                case 3: {
                        message.date = reader.string();
                        break;
                    }
                case 4: {
                        message.url = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.regions && message.regions.length))
                            message.regions = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.regions.push(reader.int32());
                        } else
                            message.regions.push(reader.int32());
                        break;
                    }
                case 6: {
                        message.highlightDuration = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("title"))
                throw $util.ProtocolError("missing required 'title'", { instance: message });
            return message;
        };

        /**
         * Decodes a ServiceAlert message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ServiceAlert
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ServiceAlert} ServiceAlert
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServiceAlert.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServiceAlert message.
         * @function verify
         * @memberof proto.ServiceAlert
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServiceAlert.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (!$util.isString(message.title))
                return "title: string expected";
            if (message.date != null && message.hasOwnProperty("date"))
                if (!$util.isString(message.date))
                    return "date: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.regions != null && message.hasOwnProperty("regions")) {
                if (!Array.isArray(message.regions))
                    return "regions: array expected";
                for (let i = 0; i < message.regions.length; ++i)
                    switch (message.regions[i]) {
                    default:
                        return "regions: enum value[] expected";
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
            }
            if (message.highlightDuration != null && message.hasOwnProperty("highlightDuration"))
                if (!$util.isString(message.highlightDuration))
                    return "highlightDuration: string expected";
            return null;
        };

        /**
         * Creates a ServiceAlert message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ServiceAlert
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ServiceAlert} ServiceAlert
         */
        ServiceAlert.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ServiceAlert)
                return object;
            let message = new $root.proto.ServiceAlert();
            if (object.id != null)
                message.id = String(object.id);
            if (object.title != null)
                message.title = String(object.title);
            if (object.date != null)
                message.date = String(object.date);
            if (object.url != null)
                message.url = String(object.url);
            if (object.regions) {
                if (!Array.isArray(object.regions))
                    throw TypeError(".proto.ServiceAlert.regions: array expected");
                message.regions = [];
                for (let i = 0; i < object.regions.length; ++i)
                    switch (object.regions[i]) {
                    default:
                        if (typeof object.regions[i] === "number") {
                            message.regions[i] = object.regions[i];
                            break;
                        }
                    case "SERVICE_ALERT_REGION_BELCONNEN":
                    case 1:
                        message.regions[i] = 1;
                        break;
                    case "SERVICE_ALERT_REGION_CENTRAL_CANBERRA":
                    case 2:
                        message.regions[i] = 2;
                        break;
                    case "SERVICE_ALERT_REGION_GUNGAHLIN":
                    case 3:
                        message.regions[i] = 3;
                        break;
                    case "SERVICE_ALERT_REGION_TUGGERANONG":
                    case 4:
                        message.regions[i] = 4;
                        break;
                    case "SERVICE_ALERT_REGION_WODEN_WESTON_CREEK_MOLONGLO":
                    case 5:
                        message.regions[i] = 5;
                        break;
                    }
            }
            if (object.highlightDuration != null)
                message.highlightDuration = String(object.highlightDuration);
            return message;
        };

        /**
         * Creates a plain object from a ServiceAlert message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ServiceAlert
         * @static
         * @param {proto.ServiceAlert} message ServiceAlert
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServiceAlert.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.regions = [];
            if (options.defaults) {
                object.id = "";
                object.title = "";
                object.date = "";
                object.url = "";
                object.highlightDuration = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.date != null && message.hasOwnProperty("date"))
                object.date = message.date;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.regions && message.regions.length) {
                object.regions = [];
                for (let j = 0; j < message.regions.length; ++j)
                    object.regions[j] = options.enums === String ? $root.proto.ServiceAlertRegion[message.regions[j]] === undefined ? message.regions[j] : $root.proto.ServiceAlertRegion[message.regions[j]] : message.regions[j];
            }
            if (message.highlightDuration != null && message.hasOwnProperty("highlightDuration"))
                object.highlightDuration = message.highlightDuration;
            return object;
        };

        /**
         * Converts this ServiceAlert to JSON.
         * @function toJSON
         * @memberof proto.ServiceAlert
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServiceAlert.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServiceAlert
         * @function getTypeUrl
         * @memberof proto.ServiceAlert
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServiceAlert.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ServiceAlert";
        };

        return ServiceAlert;
    })();

    return proto;
})();

export { $root as default };
