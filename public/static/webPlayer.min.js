self.__player_jssdk_release_date = "20210713";
! function(e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).WebPlayer = e() }(function() {
    return function r(i, o, s) {
        function a(t, e) {
            if (!o[t]) {
                if (!i[t]) { var n = "function" == typeof require && require; if (!e && n) return n(t, !0); if (l) return l(t, !0); throw (n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", n }
                n = o[t] = { exports: {} }, i[t][0].call(n.exports, function(e) { return a(i[t][1][e] || e) }, n, n.exports, r, i, o, s)
            }
            return o[t].exports
        }
        for (var l = "function" == typeof require && require, e = 0; e < s.length; e++) a(s[e]);
        return a
    }({
        1: [function(e, t, n) {
            "use strict";
            t.exports = { NONE: -1, G711A: 0, G711U: 1, G726: 3, AAC: 4 }
        }, {}],
        2: [function(e, t, n) {
            "use strict";
            t.exports = { NONE: -1, H264: 0, H265: 1 }
        }, {}],
        3: [function(e, t, n) {
            "use strict";
            t.exports = { FLV_STREAM_DATA: 0, AUDIO_TALK_DATA: 1, AUDIO_TALK_STOP: 2, REQUEST_MESSAGE_DATA: 3, RESPONSE_MESSAGE_DATA: 4, RESPONSE_TIMELINE_DATA: 5, TIMELINE_SECTION_LIST: 100, TIMELINE_EVENT_LIST: 101, PERSON_FACE_INFO: 102, RESPONSE_MESSAGE_DATA_TYPE: { AUDIO_ENCODE_INFO: 1, RELAY_CONNECT_SUCCESS: 2, SDCARD_PLAYBACK_LIMIT: 3, DEVICE_STATUS_OFFLINE: 4 }, REQUEST_MESSAGE_DATA_TYPE: { START_PLAY: 1, STOP_PLAY: 2, REQUEST_WS_TIME: 3 } }
        }, {}],
        4: [function(e, t, n) {
            t.exports = function(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }, t.exports.default = t.exports, t.exports.__esModule = !0
        }, {}],
        5: [function(e, t, n) { t.exports = function(e) { if (Array.isArray(e)) return e }, t.exports.default = t.exports, t.exports.__esModule = !0 }, {}],
        6: [function(e, t, n) { t.exports = function(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }, t.exports.default = t.exports, t.exports.__esModule = !0 }, {}],
        7: [function(e, t, n) {
            function l(e, t, n, r, i, o, s) {
                try {
                    var a = e[o](s),
                        l = a.value
                } catch (e) { return void n(e) }
                a.done ? t(l) : Promise.resolve(l).then(r, i)
            }
            t.exports = function(a) {
                return function() {
                    var e = this,
                        s = arguments;
                    return new Promise(function(t, n) {
                        var r = a.apply(e, s);

                        function i(e) { l(r, t, n, i, o, "next", e) }

                        function o(e) { l(r, t, n, i, o, "throw", e) }
                        i(void 0)
                    })
                }
            }, t.exports.default = t.exports, t.exports.__esModule = !0
        }, {}],
        8: [function(e, t, n) { t.exports = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }, t.exports.default = t.exports, t.exports.__esModule = !0 }, {}],
        9: [function(e, t, n) {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            t.exports = function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }, t.exports.default = t.exports, t.exports.__esModule = !0
        }, {}],
        10: [function(e, t, n) { t.exports = function(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }, t.exports.default = t.exports, t.exports.__esModule = !0 }, {}],
        11: [function(e, r, t) {
            var i = e("./superPropBase.js");

            function o(e, t, n) { return "undefined" != typeof Reflect && Reflect.get ? r.exports = o = Reflect.get : r.exports = o = function(e, t, n) { e = i(e, t); if (e) { t = Object.getOwnPropertyDescriptor(e, t); return t.get ? t.get.call(n) : t.value } }, r.exports.default = r.exports, r.exports.__esModule = !0, o(e, t, n || e) }
            r.exports = o, r.exports.default = r.exports, r.exports.__esModule = !0
        }, { "./superPropBase.js": 20 }],
        12: [function(e, t, n) {
            function r(e) { return t.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) }, t.exports.default = t.exports, t.exports.__esModule = !0, r(e) }
            t.exports = r, t.exports.default = t.exports, t.exports.__esModule = !0
        }, {}],
        13: [function(e, t, n) {
            var r = e("./setPrototypeOf.js");
            t.exports = function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && r(e, t)
            }, t.exports.default = t.exports, t.exports.__esModule = !0
        }, { "./setPrototypeOf.js": 18 }],
        14: [function(e, t, n) { t.exports = function(e) { return e && e.__esModule ? e : { default: e } }, t.exports.default = t.exports, t.exports.__esModule = !0 }, {}],
        15: [function(e, t, n) {
            t.exports = function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, i, o = [],
                        s = !0,
                        a = !1;
                    try { for (n = n.call(e); !(s = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); s = !0); } catch (e) { a = !0, i = e } finally { try { s || null == n.return || n.return() } finally { if (a) throw i } }
                    return o
                }
            }, t.exports.default = t.exports, t.exports.__esModule = !0
        }, {}],
        16: [function(e, t, n) { t.exports = function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }, t.exports.default = t.exports, t.exports.__esModule = !0 }, {}],
        17: [function(e, t, n) {
            var r = e("@babel/runtime/helpers/typeof").default,
                i = e("./assertThisInitialized.js");
            t.exports = function(e, t) { return !t || "object" !== r(t) && "function" != typeof t ? i(e) : t }, t.exports.default = t.exports, t.exports.__esModule = !0
        }, { "./assertThisInitialized.js": 6, "@babel/runtime/helpers/typeof": 21 }],
        18: [function(e, n, t) {
            function r(e, t) { return n.exports = r = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e }, n.exports.default = n.exports, n.exports.__esModule = !0, r(e, t) }
            n.exports = r, n.exports.default = n.exports, n.exports.__esModule = !0
        }, {}],
        19: [function(e, t, n) {
            var r = e("./arrayWithHoles.js"),
                i = e("./iterableToArrayLimit.js"),
                o = e("./unsupportedIterableToArray.js"),
                s = e("./nonIterableRest.js");
            t.exports = function(e, t) { return r(e) || i(e, t) || o(e, t) || s() }, t.exports.default = t.exports, t.exports.__esModule = !0
        }, { "./arrayWithHoles.js": 5, "./iterableToArrayLimit.js": 15, "./nonIterableRest.js": 16, "./unsupportedIterableToArray.js": 22 }],
        20: [function(e, t, n) {
            var r = e("./getPrototypeOf.js");
            t.exports = function(e, t) { for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e));); return e }, t.exports.default = t.exports, t.exports.__esModule = !0
        }, { "./getPrototypeOf.js": 12 }],
        21: [function(e, t, n) {
            function r(e) { return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = r = function(e) { return typeof e } : t.exports = r = function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, t.exports.default = t.exports, t.exports.__esModule = !0, r(e) }
            t.exports = r, t.exports.default = t.exports, t.exports.__esModule = !0
        }, {}],
        22: [function(e, t, n) {
            var r = e("./arrayLikeToArray.js");
            t.exports = function(e, t) { if (e) { if ("string" == typeof e) return r(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0 } }, t.exports.default = t.exports, t.exports.__esModule = !0
        }, { "./arrayLikeToArray.js": 4 }],
        23: [function(e, t, n) { t.exports = e("regenerator-runtime") }, { "regenerator-runtime": 81 }],
        24: [function(e, t, n) {
            "use strict";
            n.byteLength = function(e) {
                var t = c(e),
                    e = t[0],
                    t = t[1];
                return 3 * (e + t) / 4 - t
            }, n.toByteArray = function(e) {
                var t, n, r = c(e),
                    i = r[0],
                    r = r[1],
                    o = new u(function(e, t) { return 3 * (e + t) / 4 - t }(i, r)),
                    s = 0,
                    a = 0 < r ? i - 4 : i;
                for (n = 0; n < a; n += 4) t = l[e.charCodeAt(n)] << 18 | l[e.charCodeAt(n + 1)] << 12 | l[e.charCodeAt(n + 2)] << 6 | l[e.charCodeAt(n + 3)], o[s++] = t >> 16 & 255, o[s++] = t >> 8 & 255, o[s++] = 255 & t;
                2 === r && (t = l[e.charCodeAt(n)] << 2 | l[e.charCodeAt(n + 1)] >> 4, o[s++] = 255 & t);
                1 === r && (t = l[e.charCodeAt(n)] << 10 | l[e.charCodeAt(n + 1)] << 4 | l[e.charCodeAt(n + 2)] >> 2, o[s++] = t >> 8 & 255, o[s++] = 255 & t);
                return o
            }, n.fromByteArray = function(e) {
                for (var t, n = e.length, r = n % 3, i = [], o = 0, s = n - r; o < s; o += 16383) i.push(function(e, t, n) { for (var r, i = [], o = t; o < n; o += 3) r = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), i.push(function(e) { return a[e >> 18 & 63] + a[e >> 12 & 63] + a[e >> 6 & 63] + a[63 & e] }(r)); return i.join("") }(e, o, s < o + 16383 ? s : o + 16383));
                1 == r ? (t = e[n - 1], i.push(a[t >> 2] + a[t << 4 & 63] + "==")) : 2 == r && (t = (e[n - 2] << 8) + e[n - 1], i.push(a[t >> 10] + a[t >> 4 & 63] + a[t << 2 & 63] + "="));
                return i.join("")
            };
            for (var a = [], l = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, o = r.length; i < o; ++i) a[i] = r[i], l[r.charCodeAt(i)] = i;

            function c(e) {
                var t = e.length;
                if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");
                e = e.indexOf("=");
                return -1 === e && (e = t), [e, e === t ? 0 : 4 - e % 4]
            }
            l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63
        }, {}],
        25: [function(e, t, n) {}, {}],
        26: [function(R, e, O) {
            (function(e) {
                (function() {
                    "use strict";
                    var a = R("base64-js"),
                        o = R("ieee754");
                    O.Buffer = h, O.SlowBuffer = function(e) {+e != e && (e = 0); return h.alloc(+e) }, O.INSPECT_MAX_BYTES = 50;
                    var t = 2147483647;

                    function i(e) {
                        if (t < e) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                        e = new Uint8Array(e);
                        return e.__proto__ = h.prototype, e
                    }

                    function h(e, t, n) { if ("number" != typeof e) return r(e, t, n); if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number'); return l(e) }

                    function r(e, t, n) {
                        if ("string" == typeof e) return function(e, t) {
                            "string" == typeof t && "" !== t || (t = "utf8");
                            if (!h.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                            var n = 0 | d(e, t),
                                r = i(n),
                                t = r.write(e, t);
                            t !== n && (r = r.slice(0, t));
                            return r
                        }(e, t);
                        if (ArrayBuffer.isView(e)) return u(e);
                        if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                        if (D(e, ArrayBuffer) || e && D(e.buffer, ArrayBuffer)) return function(e, t, n) {
                            if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                            if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
                            n = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n);
                            return n.__proto__ = h.prototype, n
                        }(e, t, n);
                        if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                        var r = e.valueOf && e.valueOf();
                        if (null != r && r !== e) return h.from(r, t, n);
                        r = function(e) {
                            if (h.isBuffer(e)) {
                                var t = 0 | c(e.length),
                                    n = i(t);
                                return 0 === n.length ? n : (e.copy(n, 0, 0, t), n)
                            }
                            if (void 0 !== e.length) return "number" != typeof e.length || L(e.length) ? i(0) : u(e);
                            if ("Buffer" === e.type && Array.isArray(e.data)) return u(e.data)
                        }(e);
                        if (r) return r;
                        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return h.from(e[Symbol.toPrimitive]("string"), t, n);
                        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                    }

                    function s(e) { if ("number" != typeof e) throw new TypeError('"size" argument must be of type number'); if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"') }

                    function l(e) { return s(e), i(e < 0 ? 0 : 0 | c(e)) }

                    function u(e) { for (var t = e.length < 0 ? 0 : 0 | c(e.length), n = i(t), r = 0; r < t; r += 1) n[r] = 255 & e[r]; return n }

                    function c(e) { if (t <= e) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + t.toString(16) + " bytes"); return 0 | e }

                    function d(e, t) {
                        if (h.isBuffer(e)) return e.length;
                        if (ArrayBuffer.isView(e) || D(e, ArrayBuffer)) return e.byteLength;
                        if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                        var n = e.length,
                            r = 2 < arguments.length && !0 === arguments[2];
                        if (!r && 0 === n) return 0;
                        for (var i = !1;;) switch (t) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return n;
                            case "utf8":
                            case "utf-8":
                                return k(e).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * n;
                            case "hex":
                                return n >>> 1;
                            case "base64":
                                return C(e).length;
                            default:
                                if (i) return r ? -1 : k(e).length;
                                t = ("" + t).toLowerCase(), i = !0
                        }
                    }

                    function n(e, t, n) {
                        var r, i, o, s = !1;
                        if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                        if ((n >>>= 0) <= (t >>>= 0)) return "";
                        for (e = e || "utf8";;) switch (e) {
                            case "hex":
                                return function(e, t, n) {
                                    var r = e.length;
                                    (!t || t < 0) && (t = 0);
                                    (!n || n < 0 || r < n) && (n = r);
                                    for (var i = "", o = t; o < n; ++o) i += function(e) { return e < 16 ? "0" + e.toString(16) : e.toString(16) }(e[o]);
                                    return i
                                }(this, t, n);
                            case "utf8":
                            case "utf-8":
                                return v(this, t, n);
                            case "ascii":
                                return function(e, t, n) {
                                    var r = "";
                                    n = Math.min(e.length, n);
                                    for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                                    return r
                                }(this, t, n);
                            case "latin1":
                            case "binary":
                                return function(e, t, n) {
                                    var r = "";
                                    n = Math.min(e.length, n);
                                    for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                                    return r
                                }(this, t, n);
                            case "base64":
                                return r = this, o = n, 0 === (i = t) && o === r.length ? a.fromByteArray(r) : a.fromByteArray(r.slice(i, o));
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return function(e, t, n) { for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]); return i }(this, t, n);
                            default:
                                if (s) throw new TypeError("Unknown encoding: " + e);
                                e = (e + "").toLowerCase(), s = !0
                        }
                    }

                    function f(e, t, n) {
                        var r = e[t];
                        e[t] = e[n], e[n] = r
                    }

                    function p(e, t, n, r, i) {
                        if (0 === e.length) return -1;
                        if ("string" == typeof n ? (r = n, n = 0) : 2147483647 < n ? n = 2147483647 : n < -2147483648 && (n = -2147483648), L(n = +n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                            if (i) return -1;
                            n = e.length - 1
                        } else if (n < 0) {
                            if (!i) return -1;
                            n = 0
                        }
                        if ("string" == typeof t && (t = h.from(t, r)), h.isBuffer(t)) return 0 === t.length ? -1 : _(e, t, n, r, i);
                        if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? (i ? Uint8Array.prototype.indexOf : Uint8Array.prototype.lastIndexOf).call(e, t, n) : _(e, [t], n, r, i);
                        throw new TypeError("val must be string, number or Buffer")
                    }

                    function _(e, t, n, r, i) {
                        var o = 1,
                            s = e.length,
                            a = t.length;
                        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                            if (e.length < 2 || t.length < 2) return -1;
                            s /= o = 2, a /= 2, n /= 2
                        }

                        function l(e, t) { return 1 === o ? e[t] : e.readUInt16BE(t * o) }
                        if (i)
                            for (var u = -1, c = n; c < s; c++)
                                if (l(e, c) === l(t, -1 === u ? 0 : c - u)) { if (-1 === u && (u = c), c - u + 1 === a) return u * o } else -1 !== u && (c -= c - u), u = -1;
                        else
                            for (s < n + a && (n = s - a), c = n; 0 <= c; c--) {
                                for (var h = !0, d = 0; d < a; d++)
                                    if (l(e, c + d) !== l(t, d)) { h = !1; break }
                                if (h) return c
                            }
                        return -1
                    }

                    function m(e, t, n, r) { return I(function(e) { for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n)); return t }(t), e, n, r) }

                    function y(e, t, n, r) { return I(function(e, t) { for (var n, r, i = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) r = e.charCodeAt(o), n = r >> 8, r = r % 256, i.push(r), i.push(n); return i }(t, e.length - n), e, n, r) }

                    function v(e, t, n) {
                        n = Math.min(e.length, n);
                        for (var r = [], i = t; i < n;) {
                            var o, s, a, l, u = e[i],
                                c = null,
                                h = 239 < u ? 4 : 223 < u ? 3 : 191 < u ? 2 : 1;
                            if (i + h <= n) switch (h) {
                                case 1:
                                    u < 128 && (c = u);
                                    break;
                                case 2:
                                    128 == (192 & (o = e[i + 1])) && 127 < (l = (31 & u) << 6 | 63 & o) && (c = l);
                                    break;
                                case 3:
                                    o = e[i + 1], s = e[i + 2], 128 == (192 & o) && 128 == (192 & s) && 2047 < (l = (15 & u) << 12 | (63 & o) << 6 | 63 & s) && (l < 55296 || 57343 < l) && (c = l);
                                    break;
                                case 4:
                                    o = e[i + 1], s = e[i + 2], a = e[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && 65535 < (l = (15 & u) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) && l < 1114112 && (c = l)
                            }
                            null === c ? (c = 65533, h = 1) : 65535 < c && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), i += h
                        }
                        return function(e) {
                            var t = e.length;
                            if (t <= g) return String.fromCharCode.apply(String, e);
                            var n = "",
                                r = 0;
                            for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += g));
                            return n
                        }(r)
                    }
                    O.kMaxLength = t, (h.TYPED_ARRAY_SUPPORT = function() { try { var e = new Uint8Array(1); return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === e.foo() } catch (e) { return !1 } }()) || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(h.prototype, "parent", { enumerable: !0, get: function() { if (h.isBuffer(this)) return this.buffer } }), Object.defineProperty(h.prototype, "offset", { enumerable: !0, get: function() { if (h.isBuffer(this)) return this.byteOffset } }), "undefined" != typeof Symbol && null != Symbol.species && h[Symbol.species] === h && Object.defineProperty(h, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 }), h.poolSize = 8192, h.from = r, h.prototype.__proto__ = Uint8Array.prototype, h.__proto__ = Uint8Array, h.alloc = function(e, t, n) { return t = t, n = n, s(e = e), !(e <= 0) && void 0 !== t ? "string" == typeof n ? i(e).fill(t, n) : i(e).fill(t) : i(e) }, h.allocUnsafe = l, h.allocUnsafeSlow = l, h.isBuffer = function(e) { return null != e && !0 === e._isBuffer && e !== h.prototype }, h.compare = function(e, t) {
                        if (D(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)), D(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(e) || !h.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                        if (e === t) return 0;
                        for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
                            if (e[i] !== t[i]) { n = e[i], r = t[i]; break }
                        return n < r ? -1 : r < n ? 1 : 0
                    }, h.isEncoding = function(e) {
                        switch (String(e).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }, h.concat = function(e, t) {
                        if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === e.length) return h.alloc(0);
                        if (void 0 === t)
                            for (i = t = 0; i < e.length; ++i) t += e[i].length;
                        for (var n = h.allocUnsafe(t), r = 0, i = 0; i < e.length; ++i) {
                            var o = e[i];
                            if (D(o, Uint8Array) && (o = h.from(o)), !h.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                            o.copy(n, r), r += o.length
                        }
                        return n
                    }, h.byteLength = d, h.prototype._isBuffer = !0, h.prototype.swap16 = function() { var e = this.length; if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var t = 0; t < e; t += 2) f(this, t, t + 1); return this }, h.prototype.swap32 = function() { var e = this.length; if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var t = 0; t < e; t += 4) f(this, t, t + 3), f(this, t + 1, t + 2); return this }, h.prototype.swap64 = function() { var e = this.length; if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var t = 0; t < e; t += 8) f(this, t, t + 7), f(this, t + 1, t + 6), f(this, t + 2, t + 5), f(this, t + 3, t + 4); return this }, h.prototype.toLocaleString = h.prototype.toString = function() { var e = this.length; return 0 === e ? "" : 0 === arguments.length ? v(this, 0, e) : n.apply(this, arguments) }, h.prototype.equals = function(e) { if (!h.isBuffer(e)) throw new TypeError("Argument must be a Buffer"); return this === e || 0 === h.compare(this, e) }, h.prototype.inspect = function() {
                        var e = "",
                            t = O.INSPECT_MAX_BYTES,
                            e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                        return this.length > t && (e += " ... "), "<Buffer " + e + ">"
                    }, h.prototype.compare = function(e, t, n, r, i) {
                        if (D(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)), !h.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                        if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                        if (i <= r && n <= t) return 0;
                        if (i <= r) return -1;
                        if (n <= t) return 1;
                        if (this === e) return 0;
                        for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (t >>>= 0), a = Math.min(o, s), l = this.slice(r, i), u = e.slice(t, n), c = 0; c < a; ++c)
                            if (l[c] !== u[c]) { o = l[c], s = u[c]; break }
                        return o < s ? -1 : s < o ? 1 : 0
                    }, h.prototype.includes = function(e, t, n) { return -1 !== this.indexOf(e, t, n) }, h.prototype.indexOf = function(e, t, n) { return p(this, e, t, n, !0) }, h.prototype.lastIndexOf = function(e, t, n) { return p(this, e, t, n, !1) }, h.prototype.write = function(e, t, n, r) {
                        if (void 0 === t) r = "utf8", n = this.length, t = 0;
                        else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                        else {
                            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                        }
                        var i = this.length - t;
                        if ((void 0 === n || i < n) && (n = i), 0 < e.length && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        r = r || "utf8";
                        for (var o, s, a, l = !1;;) switch (r) {
                            case "hex":
                                return function(e, t, n, r) {
                                    n = Number(n) || 0;
                                    var i = e.length - n;
                                    (!r || i < (r = Number(r))) && (r = i), (i = t.length) / 2 < r && (r = i / 2);
                                    for (var o = 0; o < r; ++o) {
                                        var s = parseInt(t.substr(2 * o, 2), 16);
                                        if (L(s)) return o;
                                        e[n + o] = s
                                    }
                                    return o
                                }(this, e, t, n);
                            case "utf8":
                            case "utf-8":
                                return s = t, a = n, I(k(e, (o = this).length - s), o, s, a);
                            case "ascii":
                                return m(this, e, t, n);
                            case "latin1":
                            case "binary":
                                return m(this, e, t, n);
                            case "base64":
                                return o = this, s = t, a = n, I(C(e), o, s, a);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return y(this, e, t, n);
                            default:
                                if (l) throw new TypeError("Unknown encoding: " + r);
                                r = ("" + r).toLowerCase(), l = !0
                        }
                    }, h.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };
                    var g = 4096;

                    function b(e, t, n) { if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint"); if (n < e + t) throw new RangeError("Trying to access beyond buffer length") }

                    function E(e, t, n, r, i, o) { if (!h.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (i < t || t < o) throw new RangeError('"value" argument is out of bounds'); if (n + r > e.length) throw new RangeError("Index out of range") }

                    function S(e, t, n, r) { if (n + r > e.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

                    function T(e, t, n, r, i) { return t = +t, n >>>= 0, i || S(e, 0, n, 4), o.write(e, t, n, r, 23, 4), n + 4 }

                    function A(e, t, n, r, i) { return t = +t, n >>>= 0, i || S(e, 0, n, 8), o.write(e, t, n, r, 52, 8), n + 8 }
                    h.prototype.slice = function(e, t) {
                        var n = this.length;
                        (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : n < e && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : n < t && (t = n), t < e && (t = e);
                        t = this.subarray(e, t);
                        return t.__proto__ = h.prototype, t
                    }, h.prototype.readUIntLE = function(e, t, n) { e >>>= 0, t >>>= 0, n || b(e, t, this.length); for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i; return r }, h.prototype.readUIntBE = function(e, t, n) { e >>>= 0, t >>>= 0, n || b(e, t, this.length); for (var r = this[e + --t], i = 1; 0 < t && (i *= 256);) r += this[e + --t] * i; return r }, h.prototype.readUInt8 = function(e, t) { return e >>>= 0, t || b(e, 1, this.length), this[e] }, h.prototype.readUInt16LE = function(e, t) { return e >>>= 0, t || b(e, 2, this.length), this[e] | this[e + 1] << 8 }, h.prototype.readUInt16BE = function(e, t) { return e >>>= 0, t || b(e, 2, this.length), this[e] << 8 | this[e + 1] }, h.prototype.readUInt32LE = function(e, t) { return e >>>= 0, t || b(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3] }, h.prototype.readUInt32BE = function(e, t) { return e >>>= 0, t || b(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]) }, h.prototype.readIntLE = function(e, t, n) { e >>>= 0, t >>>= 0, n || b(e, t, this.length); for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i; return (i *= 128) <= r && (r -= Math.pow(2, 8 * t)), r }, h.prototype.readIntBE = function(e, t, n) { e >>>= 0, t >>>= 0, n || b(e, t, this.length); for (var r = t, i = 1, o = this[e + --r]; 0 < r && (i *= 256);) o += this[e + --r] * i; return (i *= 128) <= o && (o -= Math.pow(2, 8 * t)), o }, h.prototype.readInt8 = function(e, t) { return e >>>= 0, t || b(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e] }, h.prototype.readInt16LE = function(e, t) {
                        e >>>= 0, t || b(e, 2, this.length);
                        e = this[e] | this[e + 1] << 8;
                        return 32768 & e ? 4294901760 | e : e
                    }, h.prototype.readInt16BE = function(e, t) {
                        e >>>= 0, t || b(e, 2, this.length);
                        e = this[e + 1] | this[e] << 8;
                        return 32768 & e ? 4294901760 | e : e
                    }, h.prototype.readInt32LE = function(e, t) { return e >>>= 0, t || b(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24 }, h.prototype.readInt32BE = function(e, t) { return e >>>= 0, t || b(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3] }, h.prototype.readFloatLE = function(e, t) { return e >>>= 0, t || b(e, 4, this.length), o.read(this, e, !0, 23, 4) }, h.prototype.readFloatBE = function(e, t) { return e >>>= 0, t || b(e, 4, this.length), o.read(this, e, !1, 23, 4) }, h.prototype.readDoubleLE = function(e, t) { return e >>>= 0, t || b(e, 8, this.length), o.read(this, e, !0, 52, 8) }, h.prototype.readDoubleBE = function(e, t) { return e >>>= 0, t || b(e, 8, this.length), o.read(this, e, !1, 52, 8) }, h.prototype.writeUIntLE = function(e, t, n, r) {
                        e = +e, t >>>= 0, n >>>= 0, r || E(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                        var i = 1,
                            o = 0;
                        for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
                        return t + n
                    }, h.prototype.writeUIntBE = function(e, t, n, r) {
                        e = +e, t >>>= 0, n >>>= 0, r || E(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                        var i = n - 1,
                            o = 1;
                        for (this[t + i] = 255 & e; 0 <= --i && (o *= 256);) this[t + i] = e / o & 255;
                        return t + n
                    }, h.prototype.writeUInt8 = function(e, t, n) { return e = +e, t >>>= 0, n || E(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1 }, h.prototype.writeUInt16LE = function(e, t, n) { return e = +e, t >>>= 0, n || E(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2 }, h.prototype.writeUInt16BE = function(e, t, n) { return e = +e, t >>>= 0, n || E(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2 }, h.prototype.writeUInt32LE = function(e, t, n) { return e = +e, t >>>= 0, n || E(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4 }, h.prototype.writeUInt32BE = function(e, t, n) { return e = +e, t >>>= 0, n || E(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4 }, h.prototype.writeIntLE = function(e, t, n, r) {
                        e = +e, t >>>= 0, r || E(this, e, t, n, (r = Math.pow(2, 8 * n - 1)) - 1, -r);
                        var i = 0,
                            o = 1,
                            s = 0;
                        for (this[t] = 255 & e; ++i < n && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
                        return t + n
                    }, h.prototype.writeIntBE = function(e, t, n, r) {
                        e = +e, t >>>= 0, r || E(this, e, t, n, (r = Math.pow(2, 8 * n - 1)) - 1, -r);
                        var i = n - 1,
                            o = 1,
                            s = 0;
                        for (this[t + i] = 255 & e; 0 <= --i && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
                        return t + n
                    }, h.prototype.writeInt8 = function(e, t, n) { return e = +e, t >>>= 0, n || E(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1 }, h.prototype.writeInt16LE = function(e, t, n) { return e = +e, t >>>= 0, n || E(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2 }, h.prototype.writeInt16BE = function(e, t, n) { return e = +e, t >>>= 0, n || E(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2 }, h.prototype.writeInt32LE = function(e, t, n) { return e = +e, t >>>= 0, n || E(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4 }, h.prototype.writeInt32BE = function(e, t, n) { return e = +e, t >>>= 0, n || E(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4 }, h.prototype.writeFloatLE = function(e, t, n) { return T(this, e, t, !0, n) }, h.prototype.writeFloatBE = function(e, t, n) { return T(this, e, t, !1, n) }, h.prototype.writeDoubleLE = function(e, t, n) { return A(this, e, t, !0, n) }, h.prototype.writeDoubleBE = function(e, t, n) { return A(this, e, t, !1, n) }, h.prototype.copy = function(e, t, n, r) {
                        if (!h.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                        if (n = n || 0, r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t = t || 0, 0 < r && r < n && (r = n), r === n) return 0;
                        if (0 === e.length || 0 === this.length) return 0;
                        if (t < 0) throw new RangeError("targetStart out of bounds");
                        if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                        if (r < 0) throw new RangeError("sourceEnd out of bounds");
                        r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                        var i = r - n;
                        if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, n, r);
                        else if (this === e && n < t && t < r)
                            for (var o = i - 1; 0 <= o; --o) e[o + t] = this[o + n];
                        else Uint8Array.prototype.set.call(e, this.subarray(n, r), t);
                        return i
                    }, h.prototype.fill = function(e, t, n, r) {
                        if ("string" == typeof e) {
                            if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                            if ("string" == typeof r && !h.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                            var i;
                            1 === e.length && (i = e.charCodeAt(0), ("utf8" === r && i < 128 || "latin1" === r) && (e = i))
                        } else "number" == typeof e && (e &= 255);
                        if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                        if (n <= t) return this;
                        var o;
                        if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, "number" == typeof(e = e || 0))
                            for (o = t; o < n; ++o) this[o] = e;
                        else {
                            var s = h.isBuffer(e) ? e : h.from(e, r),
                                a = s.length;
                            if (0 === a) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                            for (o = 0; o < n - t; ++o) this[o + t] = s[o % a]
                        }
                        return this
                    };
                    var w = /[^+/0-9A-Za-z-_]/g;

                    function k(e, t) {
                        var n;
                        t = t || 1 / 0;
                        for (var r = e.length, i = null, o = [], s = 0; s < r; ++s) {
                            if (55295 < (n = e.charCodeAt(s)) && n < 57344) {
                                if (!i) {
                                    if (56319 < n) {-1 < (t -= 3) && o.push(239, 191, 189); continue }
                                    if (s + 1 === r) {-1 < (t -= 3) && o.push(239, 191, 189); continue }
                                    i = n;
                                    continue
                                }
                                if (n < 56320) {-1 < (t -= 3) && o.push(239, 191, 189), i = n; continue }
                                n = 65536 + (i - 55296 << 10 | n - 56320)
                            } else i && -1 < (t -= 3) && o.push(239, 191, 189);
                            if (i = null, n < 128) {
                                if (--t < 0) break;
                                o.push(n)
                            } else if (n < 2048) {
                                if ((t -= 2) < 0) break;
                                o.push(n >> 6 | 192, 63 & n | 128)
                            } else if (n < 65536) {
                                if ((t -= 3) < 0) break;
                                o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                            } else {
                                if (!(n < 1114112)) throw new Error("Invalid code point");
                                if ((t -= 4) < 0) break;
                                o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                            }
                        }
                        return o
                    }

                    function C(e) { return a.toByteArray(function(e) { if ((e = (e = e.split("=")[0]).trim().replace(w, "")).length < 2) return ""; for (; e.length % 4 != 0;) e += "="; return e }(e)) }

                    function I(e, t, n, r) { for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i]; return i }

                    function D(e, t) { return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name }

                    function L(e) { return e != e }
                }).call(this)
            }).call(this, R("buffer").Buffer)
        }, { "base64-js": 24, buffer: 26, ieee754: 77 }],
        27: [function(e, t, n) {
            var r = { utf8: { stringToBytes: function(e) { return r.bin.stringToBytes(unescape(encodeURIComponent(e))) }, bytesToString: function(e) { return decodeURIComponent(escape(r.bin.bytesToString(e))) } }, bin: { stringToBytes: function(e) { for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n)); return t }, bytesToString: function(e) { for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n])); return t.join("") } } };
            t.exports = r
        }, {}],
        28: [function(e, t, n) {
            var o, r;
            o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = {
                rotl: function(e, t) { return e << t | e >>> 32 - t },
                rotr: function(e, t) { return e << 32 - t | e >>> t },
                endian: function(e) { if (e.constructor == Number) return 16711935 & r.rotl(e, 8) | 4278255360 & r.rotl(e, 24); for (var t = 0; t < e.length; t++) e[t] = r.endian(e[t]); return e },
                randomBytes: function(e) { for (var t = []; 0 < e; e--) t.push(Math.floor(256 * Math.random())); return t },
                bytesToWords: function(e) { for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32; return t },
                wordsToBytes: function(e) { for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255); return t },
                bytesToHex: function(e) { for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16)); return t.join("") },
                hexToBytes: function(e) { for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16)); return t },
                bytesToBase64: function(e) {
                    for (var t = [], n = 0; n < e.length; n += 3)
                        for (var r = e[n] << 16 | e[n + 1] << 8 | e[n + 2], i = 0; i < 4; i++) 8 * n + 6 * i <= 8 * e.length ? t.push(o.charAt(r >>> 6 * (3 - i) & 63)) : t.push("=");
                    return t.join("")
                },
                base64ToBytes: function(e) { e = e.replace(/[^A-Z0-9+\/]/gi, ""); for (var t = [], n = 0, r = 0; n < e.length; r = ++n % 4) 0 != r && t.push((o.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | o.indexOf(e.charAt(n)) >>> 6 - 2 * r); return t }
            }, t.exports = r
        }, {}],
        29: [function(V, n, r) {
            (function(j, W) {
                (function() {
                    var e, t;
                    e = this, t = function() {
                        "use strict";

                        function l(e) { return "function" == typeof e }
                        var n = Array.isArray || function(e) { return "[object Array]" === Object.prototype.toString.call(e) },
                            r = 0,
                            t = void 0,
                            i = void 0,
                            s = function(e, t) { h[r] = e, h[r + 1] = t, 2 === (r += 2) && (i ? i(d) : y()) };
                        var e = "undefined" != typeof window ? window : void 0,
                            o = e || {},
                            a = o.MutationObserver || o.WebKitMutationObserver,
                            u = "undefined" == typeof self && void 0 !== j && "[object process]" === {}.toString.call(j),
                            o = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                        function c() { var e = setTimeout; return function() { return e(d, 1) } }
                        var h = new Array(1e3);

                        function d() {
                            for (var e = 0; e < r; e += 2)(0, h[e])(h[e + 1]), h[e] = void 0, h[e + 1] = void 0;
                            r = 0
                        }
                        var f, p, _, m, y = void 0;

                        function v(e, t) {
                            var n = this,
                                r = new this.constructor(E);
                            void 0 === r[b] && N(r);
                            var i, o = n._state;
                            return o ? (i = arguments[o - 1], s(function() { return P(o, r, i, n._result) })) : R(n, r, e, t), r
                        }

                        function g(e) { if (e && "object" == typeof e && e.constructor === this) return e; var t = new this(E); return C(t, e), t }
                        y = u ? function() { return j.nextTick(d) } : a ? (p = 0, _ = new a(d), m = document.createTextNode(""), _.observe(m, { characterData: !0 }), function() { m.data = p = ++p % 2 }) : o ? ((f = new MessageChannel).port1.onmessage = d, function() { return f.port2.postMessage(0) }) : (void 0 === e && "function" == typeof V ? function() { try { var e = Function("return this")().require("vertx"); return void 0 !== (t = e.runOnLoop || e.runOnContext) ? function() { t(d) } : c() } catch (e) { return c() } } : c)();
                        var b = Math.random().toString(36).substring(2);

                        function E() {}
                        var S = void 0,
                            T = 1,
                            A = 2;

                        function w(e, r, i) {
                            s(function(t) {
                                var n = !1,
                                    e = function(e, t, n, r) { try { e.call(t, n, r) } catch (e) { return e } }(i, r, function(e) { n || (n = !0, (r !== e ? C : D)(t, e)) }, function(e) { n || (n = !0, L(t, e)) }, t._label);
                                !n && e && (n = !0, L(t, e))
                            }, e)
                        }

                        function k(e, t, n) {
                            var r, i;
                            t.constructor === e.constructor && n === v && t.constructor.resolve === g ? (r = e, (i = t)._state === T ? D(r, i._result) : i._state === A ? L(r, i._result) : R(i, void 0, function(e) { return C(r, e) }, function(e) { return L(r, e) })) : void 0 !== n && l(n) ? w(e, t, n) : D(e, t)
                        }

                        function C(t, e) {
                            if (t === e) L(t, new TypeError("You cannot resolve a promise with itself"));
                            else if (i = typeof(r = e), null === r || "object" != i && "function" != i) D(t, e);
                            else {
                                var n = void 0;
                                try { n = e.then } catch (e) { return void L(t, e) }
                                k(t, e, n)
                            }
                            var r, i
                        }

                        function I(e) { e._onerror && e._onerror(e._result), O(e) }

                        function D(e, t) { e._state === S && (e._result = t, e._state = T, 0 !== e._subscribers.length && s(O, e)) }

                        function L(e, t) { e._state === S && (e._state = A, e._result = t, s(I, e)) }

                        function R(e, t, n, r) {
                            var i = e._subscribers,
                                o = i.length;
                            e._onerror = null, i[o] = t, i[o + T] = n, i[o + A] = r, 0 === o && e._state && s(O, e)
                        }

                        function O(e) {
                            var t = e._subscribers,
                                n = e._state;
                            if (0 !== t.length) {
                                for (var r, i = void 0, o = e._result, s = 0; s < t.length; s += 3) r = t[s], i = t[s + n], r ? P(n, r, i, o) : i(o);
                                e._subscribers.length = 0
                            }
                        }

                        function P(e, t, n, r) {
                            var i = l(n),
                                o = void 0,
                                s = void 0,
                                a = !0;
                            if (i) { try { o = n(r) } catch (e) { a = !1, s = e } if (t === o) return void L(t, new TypeError("A promises callback cannot return that same promise.")) } else o = r;
                            t._state !== S || (i && a ? C(t, o) : !1 === a ? L(t, s) : e === T ? D(t, o) : e === A && L(t, o))
                        }
                        var M = 0;

                        function N(e) { e[b] = M++, e._state = void 0, e._result = void 0, e._subscribers = [] }
                        var x = (B.prototype._enumerate = function(e) { for (var t = 0; this._state === S && t < e.length; t++) this._eachEntry(e[t], t) }, B.prototype._eachEntry = function(t, e) {
                            var n = this._instanceConstructor,
                                r = n.resolve;
                            if (r === g) {
                                var i, o = void 0,
                                    s = void 0,
                                    a = !1;
                                try { o = t.then } catch (e) { a = !0, s = e }
                                o === v && t._state !== S ? this._settledAt(t._state, e, t._result) : "function" != typeof o ? (this._remaining--, this._result[e] = t) : n === U ? (i = new n(E), a ? L(i, s) : k(i, t, o), this._willSettleAt(i, e)) : this._willSettleAt(new n(function(e) { return e(t) }), e)
                            } else this._willSettleAt(r(t), e)
                        }, B.prototype._settledAt = function(e, t, n) {
                            var r = this.promise;
                            r._state === S && (this._remaining--, e === A ? L(r, n) : this._result[t] = n), 0 === this._remaining && D(r, this._result)
                        }, B.prototype._willSettleAt = function(e, t) {
                            var n = this;
                            R(e, void 0, function(e) { return n._settledAt(T, t, e) }, function(e) { return n._settledAt(A, t, e) })
                        }, B);

                        function B(e, t) { this._instanceConstructor = e, this.promise = new e(E), this.promise[b] || N(this.promise), n(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? D(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && D(this.promise, this._result))) : L(this.promise, new Error("Array Methods must be provided an Array")) }
                        var U = (F.prototype.catch = function(e) { return this.then(null, e) }, F.prototype.finally = function(t) { var n = this.constructor; return l(t) ? this.then(function(e) { return n.resolve(t()).then(function() { return e }) }, function(e) { return n.resolve(t()).then(function() { throw e }) }) : this.then(t, t) }, F);

                        function F(e) { this[b] = M++, this._result = this._state = void 0, this._subscribers = [], E !== e && ("function" != typeof e && function() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor") }(), this instanceof F ? function(t, e) { try { e(function(e) { C(t, e) }, function(e) { L(t, e) }) } catch (e) { L(t, e) } }(this, e) : function() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.") }()) }
                        return U.prototype.then = v, U.all = function(e) { return new x(this, e).promise }, U.race = function(i) { var o = this; return n(i) ? new o(function(e, t) { for (var n = i.length, r = 0; r < n; r++) o.resolve(i[r]).then(e, t) }) : new o(function(e, t) { return t(new TypeError("You must pass an array to race.")) }) }, U.resolve = g, U.reject = function(e) { var t = new this(E); return L(t, e), t }, U._setScheduler = function(e) { i = e }, U._setAsap = function(e) { s = e }, U._asap = s, U.polyfill = function() {
                            var e = void 0;
                            if (void 0 !== W) e = W;
                            else if ("undefined" != typeof self) e = self;
                            else try { e = Function("return this")() } catch (e) { throw new Error("polyfill failed because global object is unavailable in this environment") }
                            var t = e.Promise;
                            if (t) { var n = null; try { n = Object.prototype.toString.call(t.resolve()) } catch (e) {} if ("[object Promise]" === n && !t.cast) return }
                            e.Promise = U
                        }, U.Promise = U
                    }, "object" == typeof r && void 0 !== n ? n.exports = t() : e.ES6Promise = t()
                }).call(this)
            }).call(this, V("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { _process: 80 }],
        30: [function(e, t, n) {
            "use strict";
            var r, i = "object" == typeof Reflect ? Reflect : null,
                l = i && "function" == typeof i.apply ? i.apply : function(e, t, n) { return Function.prototype.apply.call(e, t, n) };
            r = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(e) { return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)) } : function(e) { return Object.getOwnPropertyNames(e) };
            var o = Number.isNaN || function(e) { return e != e };

            function s() { s.init.call(this) }
            t.exports = s, t.exports.once = function(a, l) {
                return new Promise(function(e, t) {
                    function n(e) { a.removeListener(l, r), t(e) }

                    function r() { "function" == typeof a.removeListener && a.removeListener("error", n), e([].slice.call(arguments)) }
                    var i, o, s;
                    m(a, l, r, { once: !0 }), "error" !== l && (o = n, s = { once: !0 }, "function" == typeof(i = a).on && m(i, "error", o, s))
                })
            }, (s.EventEmitter = s).prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
            var a = 10;

            function u(e) { if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e) }

            function c(e) { return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners }

            function h(e, t, n, r) { var i, o; return u(n), void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener || n), i = e._events), o = i[t]), void 0 === o ? (o = i[t] = n, ++e._eventsCount) : ("function" == typeof o ? o = i[t] = r ? [n, o] : [o, n] : r ? o.unshift(n) : o.push(n), 0 < (n = c(e)) && o.length > n && !o.warned && (o.warned = !0, (n = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit")).name = "MaxListenersExceededWarning", n.emitter = e, n.type = t, n.count = o.length, n = n, console && console.warn && console.warn(n))), e }

            function d(e, t, n) { e = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, t = function() { if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments) }.bind(e); return t.listener = n, e.wrapFn = t }

            function f(e, t, n) {
                e = e._events;
                if (void 0 === e) return [];
                t = e[t];
                return void 0 === t ? [] : "function" == typeof t ? n ? [t.listener || t] : [t] : n ? function(e) { for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n]; return t }(t) : _(t, t.length)
            }

            function p(e) { var t = this._events; if (void 0 !== t) { e = t[e]; if ("function" == typeof e) return 1; if (void 0 !== e) return e.length } return 0 }

            function _(e, t) { for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r]; return n }

            function m(n, r, i, o) {
                if ("function" == typeof n.on) o.once ? n.once(r, i) : n.on(r, i);
                else {
                    if ("function" != typeof n.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof n);
                    n.addEventListener(r, function e(t) { o.once && n.removeEventListener(r, e), i(t) })
                }
            }
            Object.defineProperty(s, "defaultMaxListeners", {
                enumerable: !0,
                get: function() { return a },
                set: function(e) {
                    if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    a = e
                }
            }), s.init = function() { void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0 }, s.prototype.setMaxListeners = function(e) { if ("number" != typeof e || e < 0 || o(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + "."); return this._maxListeners = e, this }, s.prototype.getMaxListeners = function() { return c(this) }, s.prototype.emit = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
                var r, i = "error" === e,
                    o = this._events;
                if (void 0 !== o) i = i && void 0 === o.error;
                else if (!i) return !1;
                if (i) {
                    if (0 < t.length && (r = t[0]), r instanceof Error) throw r;
                    i = new Error("Unhandled error." + (r ? " (" + r.message + ")" : ""));
                    throw i.context = r, i
                }
                e = o[e];
                if (void 0 === e) return !1;
                if ("function" == typeof e) l(e, this, t);
                else
                    for (var s = e.length, a = _(e, s), n = 0; n < s; ++n) l(a[n], this, t);
                return !0
            }, s.prototype.addListener = function(e, t) { return h(this, e, t, !1) }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) { return h(this, e, t, !0) }, s.prototype.once = function(e, t) { return u(t), this.on(e, d(this, e, t)), this }, s.prototype.prependOnceListener = function(e, t) { return u(t), this.prependListener(e, d(this, e, t)), this }, s.prototype.removeListener = function(e, t) {
                var n, r, i, o, s;
                if (u(t), void 0 === (r = this._events)) return this;
                if (void 0 === (n = r[e])) return this;
                if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
                else if ("function" != typeof n) {
                    for (i = -1, o = n.length - 1; 0 <= o; o--)
                        if (n[o] === t || n[o].listener === t) { s = n[o].listener, i = o; break }
                    if (i < 0) return this;
                    0 === i ? n.shift() : function(e, t) {
                        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                        e.pop()
                    }(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, s || t)
                }
                return this
            }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e) {
                var t, n = this._events;
                if (void 0 === n) return this;
                if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
                if (0 === arguments.length) { for (var r, i = Object.keys(n), o = 0; o < i.length; ++o) "removeListener" !== (r = i[o]) && this.removeAllListeners(r); return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this }
                if ("function" == typeof(t = n[e])) this.removeListener(e, t);
                else if (void 0 !== t)
                    for (o = t.length - 1; 0 <= o; o--) this.removeListener(e, t[o]);
                return this
            }, s.prototype.listeners = function(e) { return f(this, e, !0) }, s.prototype.rawListeners = function(e) { return f(this, e, !1) }, s.listenerCount = function(e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t) }, s.prototype.listenerCount = p, s.prototype.eventNames = function() { return 0 < this._eventsCount ? r(this._events) : [] }
        }, {}],
        31: [function(e, t, n) {
            ! function() {
                "use strict";
                var s, t, r, a;

                function i(e) { if ("string" != typeof e && (e = e.toString()), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name"); return e.toLowerCase() }

                function o(e) { return "string" != typeof e && (e = e.toString()), e }

                function l(t) {
                    this.map = {};
                    var n = this;
                    t instanceof l ? t.forEach(function(t, e) { e.forEach(function(e) { n.append(t, e) }) }) : t && Object.getOwnPropertyNames(t).forEach(function(e) { n.append(e, t[e]) })
                }

                function n(e) {
                    if (e.bodyUsed) return fetch.Promise.reject(new TypeError("Already read"));
                    e.bodyUsed = !0
                }

                function u(n) { return new fetch.Promise(function(e, t) { n.onload = function() { e(n.result) }, n.onerror = function() { t(n.error) } }) }

                function e(e) { var t = new FileReader; return t.readAsArrayBuffer(e), u(t) }

                function c() {
                    return this.bodyUsed = !1, this._initBody = function(e) {
                        if ("string" == typeof(this._bodyInit = e)) this._bodyText = e;
                        else if (s && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                        else if (t && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                        else {
                            if (e) throw new Error("unsupported BodyInit type");
                            this._bodyText = ""
                        }
                    }, s ? (this.blob = function() { var e = n(this); if (e) return e; if (this._bodyBlob) return fetch.Promise.resolve(this._bodyBlob); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return fetch.Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function() { return this.blob().then(e) }, this.text = function() { var e, t = n(this); if (t) return t; if (this._bodyBlob) return e = this._bodyBlob, (t = new FileReader).readAsText(e), u(t); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return fetch.Promise.resolve(this._bodyText) }) : this.text = function() { var e = n(this); return e || fetch.Promise.resolve(this._bodyText) }, t && (this.formData = function() { return this.text().then(d) }), this.json = function() { return this.text().then(function(e) { return JSON.parse(e) }) }, this
                }

                function h(e, t) {
                    var n;
                    if (t = t || {}, this.url = e, this.credentials = t.credentials || "omit", this.headers = new l(t.headers), this.method = (n = t.method || "GET", e = n.toUpperCase(), -1 < r.indexOf(e) ? e : n), this.mode = t.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && t.body) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(t.body)
                }

                function d(e) {
                    var n = new FormData;
                    return e.trim().split("&").forEach(function(e) {
                        var t;
                        e && (e = (t = e.split("=")).shift().replace(/\+/g, " "), t = t.join("=").replace(/\+/g, " "), n.append(decodeURIComponent(e), decodeURIComponent(t)))
                    }), n
                }

                function f(e, t) { t = t || {}, this._initBody(e), this.type = "default", this.url = null, this.status = t.status, this.ok = 200 <= this.status && this.status < 300, this.statusText = t.statusText, this.headers = t.headers instanceof l ? t.headers : new l(t.headers), this.url = t.url || "" }
                self.fetch || (l.prototype.append = function(e, t) {
                    e = i(e), t = o(t);
                    var n = this.map[e];
                    n || (n = [], this.map[e] = n), n.push(t)
                }, l.prototype.delete = function(e) { delete this.map[i(e)] }, l.prototype.get = function(e) { e = this.map[i(e)]; return e ? e[0] : null }, l.prototype.getAll = function(e) { return this.map[i(e)] || [] }, l.prototype.has = function(e) { return this.map.hasOwnProperty(i(e)) }, l.prototype.set = function(e, t) { this.map[i(e)] = [o(t)] }, l.prototype.forEach = function(t) {
                    var n = this;
                    Object.getOwnPropertyNames(this.map).forEach(function(e) { t(e, n.map[e]) })
                }, s = "FileReader" in self && "Blob" in self && function() { try { return new Blob, !0 } catch (e) { return !1 } }(), t = "FormData" in self, r = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"], a = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent), c.call(h.prototype), c.call(f.prototype), self.Headers = l, self.Request = h, self.Response = f, self.fetch = function(e, t) {
                    var n = h.prototype.isPrototypeOf(e) && !t ? e : new h(e, t);
                    return new fetch.Promise(function(r, i) {
                        var o = function() { return a && !/^(get|post|head|put|delete|options)$/i.test(this.method) ? (this.usingActiveXhr = !0, new ActiveXObject("Microsoft.XMLHTTP")) : new XMLHttpRequest }();

                        function e() {
                            var e, n, t;
                            4 === o.readyState && ((e = 1223 === o.status ? 204 : o.status) < 100 || 599 < e ? i(new TypeError("Network request failed")) : (e = {
                                status: e,
                                statusText: o.statusText,
                                headers: (t = o, n = new l, t.getAllResponseHeaders().trim().split("\n").forEach(function(e) {
                                    var t = e.trim().split(":"),
                                        e = t.shift().trim(),
                                        t = t.join(":").trim();
                                    n.append(e, t)
                                }), n),
                                url: "responseURL" in o ? o.responseURL : /^X-Request-URL:/m.test(o.getAllResponseHeaders()) ? o.getResponseHeader("X-Request-URL") : void 0
                            }, t = "response" in o ? o.response : o.responseText, r(new f(t, e))))
                        }
                        "cors" === n.credentials && (o.withCredentials = !0), o.onreadystatechange = e, self.usingActiveXhr || (o.onload = e, o.onerror = function() { i(new TypeError("Network request failed")) }), o.open(n.method, n.url, !0), "responseType" in o && s && (o.responseType = "blob"), n.headers.forEach(function(t, e) { e.forEach(function(e) { o.setRequestHeader(t, e) }) }), o.send(void 0 === n._bodyInit ? null : n._bodyInit)
                    })
                }, fetch.Promise = self.Promise, self.fetch.polyfill = !0)
            }()
        }, {}],
        32: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 });
            var r = { enableWorker: !(n.createDefaultConfig = function() { return Object.assign({}, r) }), enableStashBuffer: !(n.defaultConfig = void 0), stashInitialSize: void 0, isLive: !1, lazyLoad: !0, lazyLoadMaxDuration: 180, lazyLoadRecoverDuration: 30, autoCleanupMaxBackwardDuration: 180, autoCleanupMinBackwardDuration: 120, statisticsInfoReportInterval: 600, fixAudioTimestampGap: !0, accurateSeek: !1, seekType: "range", seekParamStart: "bstart", seekParamEnd: "bend", rangeLoadZeroStart: !1, customSeekHandler: void 0, reuseRedirectedURL: !1 };
            n.defaultConfig = r
        }, {}],
        33: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                s = r(e("../io/io-controller.js")),
                a = e("../config.js"),
                e = function() {
                    function t() {
                        (0, i.default)(this, t)
                    }
                    return (0, o.default)(t, null, [{ key: "supportAudioContext", value: function() { return !(!self.webkitAudioContext && !self.AudioContext) } }, { key: "supportAudioRecord", value: function() { return t.supportAudioContext && !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia || navigator.getUserMedia) } }, { key: "supportMSEH264Playback", value: function() { return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"') } }, {
                        key: "supportNetworkStreamIO",
                        value: function() {
                            var e = new s.default({}, (0, a.createDefaultConfig)()),
                                t = e.loaderType;
                            return e.destroy(), "fetch-stream-loader" == t || "xhr-moz-chunked-loader" == t
                        }
                    }, {
                        key: "getNetworkLoaderTypeName",
                        value: function() {
                            var e = new s.default({}, (0, a.createDefaultConfig)()),
                                t = e.loaderType;
                            return e.destroy(), t
                        }
                    }, {
                        key: "supportNativeMediaPlayback",
                        value: function(e) {
                            null == t.videoElement && (t.videoElement = window.document.createElement("video"));
                            e = t.videoElement.canPlayType(e);
                            return "probably" === e || "maybe" == e
                        }
                    }, { key: "getFeatureList", value: function() { var e = { mseFlvPlayback: !1, mseLiveFlvPlayback: !1, networkStreamIO: !1, networkLoaderName: "", nativeMP4H264Playback: !1, nativeWebmVP8Playback: !1, nativeWebmVP9Playback: !1 }; return e.mseFlvPlayback = t.supportMSEH264Playback(), e.networkStreamIO = t.supportNetworkStreamIO(), e.networkLoaderName = t.getNetworkLoaderTypeName(), e.mseLiveFlvPlayback = e.mseFlvPlayback && e.networkStreamIO, e.nativeMP4H264Playback = t.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"'), e.nativeWebmVP8Playback = t.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"'), e.nativeWebmVP9Playback = t.supportNativeMediaPlayback('video/webm; codecs="vp9"'), e } }]), t
                }();
            n.default = e
        }, { "../config.js": 32, "../io/io-controller.js": 52, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        34: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                e = function() {
                    function e() {
                        (0, i.default)(this, e), this.mimeType = null, this.duration = null, this.hasAudio = null, this.hasVideo = null, this.audioCodec = null, this.videoCodec = null, this.audioDataRate = null, this.videoDataRate = null, this.audioSampleRate = null, this.audioChannelCount = null, this.width = null, this.height = null, this.fps = null, this.profile = null, this.level = null, this.chromaFormat = null, this.sarNum = null, this.sarDen = null, this.metadata = null, this.segments = null, this.segmentCount = null, this.hasKeyframesIndex = null, this.keyframesIndex = null
                    }
                    return (0, o.default)(e, [{
                        key: "isComplete",
                        value: function() {
                            var e = !1 === this.hasAudio || !0 === this.hasAudio && null != this.audioCodec && null != this.audioSampleRate && null != this.audioChannelCount,
                                t = !1 === this.hasVideo || !0 === this.hasVideo && null != this.videoCodec && null != this.width && null != this.height && null != this.fps && null != this.profile && null != this.level && null != this.chromaFormat && null != this.sarNum && null != this.sarDen;
                            return null != this.mimeType && null != this.duration && null != this.metadata && null != this.hasKeyframesIndex && e && t
                        }
                    }, { key: "isSeekable", value: function() { return !0 === this.hasKeyframesIndex } }, {
                        key: "getNearestKeyframe",
                        value: function(e) {
                            if (null == this.keyframesIndex) return null;
                            var t = this.keyframesIndex,
                                e = this._search(t.times, e);
                            return { index: e, milliseconds: t.times[e], fileposition: t.filepositions[e] }
                        }
                    }, {
                        key: "_search",
                        value: function(e, t) {
                            var n, r = 0,
                                i = e.length - 1,
                                o = 0,
                                s = i;
                            for (t < e[0] && (r = 0, o = s + 1); o <= s;) {
                                if ((n = o + Math.floor((s - o) / 2)) === i || t >= e[n] && t < e[n + 1]) { r = n; break }
                                e[n] < t ? o = n + 1 : s = n - 1
                            }
                            return r
                        }
                    }]), e
                }();
            n.default = e
        }, { "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        35: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.MediaSegmentInfoList = n.IDRSampleList = n.MediaSegmentInfo = n.SampleInfo = void 0;
            var i = r(e("@babel/runtime/helpers/createClass")),
                s = r(e("@babel/runtime/helpers/classCallCheck")),
                e = function e(t, n, r, i, o) {
                    (0, s.default)(this, e), this.dts = t, this.pts = n, this.duration = r, this.originalDts = i, this.isSyncPoint = o, this.fileposition = null
                };
            n.SampleInfo = e;
            e = function() {
                function e() {
                    (0, s.default)(this, e), this.beginDts = 0, this.endDts = 0, this.beginPts = 0, this.endPts = 0, this.originalBeginDts = 0, this.originalEndDts = 0, this.syncPoints = [], this.firstSample = null, this.lastSample = null
                }
                return (0, i.default)(e, [{ key: "appendSyncPoint", value: function(e) { e.isSyncPoint = !0, this.syncPoints.push(e) } }]), e
            }();
            n.MediaSegmentInfo = e;
            e = function() {
                function e() {
                    (0, s.default)(this, e), this._list = []
                }
                return (0, i.default)(e, [{ key: "clear", value: function() { this._list = [] } }, {
                    key: "appendArray",
                    value: function(e) {
                        var t = this._list;
                        0 !== e.length && (0 < t.length && e[0].originalDts < t[t.length - 1].originalDts && this.clear(), Array.prototype.push.apply(t, e))
                    }
                }, {
                    key: "getLastSyncPointBeforeDts",
                    value: function(e) {
                        if (0 == this._list.length) return null;
                        var t, n = this._list,
                            r = 0,
                            i = n.length - 1,
                            o = 0,
                            s = i;
                        for (e < n[0].dts && (r = 0, o = s + 1); o <= s;) {
                            if ((t = o + Math.floor((s - o) / 2)) === i || e >= n[t].dts && e < n[t + 1].dts) { r = t; break }
                            n[t].dts < e ? o = t + 1 : s = t - 1
                        }
                        return this._list[r]
                    }
                }]), e
            }();
            n.IDRSampleList = e;
            e = function() {
                function t(e) {
                    (0, s.default)(this, t), this._type = e, this._list = [], this._lastAppendLocation = -1
                }
                return (0, i.default)(t, [{ key: "type", get: function() { return this._type } }, { key: "length", get: function() { return this._list.length } }, { key: "isEmpty", value: function() { return 0 === this._list.length } }, { key: "clear", value: function() { this._list = [], this._lastAppendLocation = -1 } }, {
                    key: "_searchNearestSegmentBefore",
                    value: function(e) {
                        var t = this._list;
                        if (0 === t.length) return -2;
                        var n, r = t.length - 1,
                            i = 0,
                            o = r,
                            s = 0;
                        if (e < t[0].originalBeginDts) return s = -1;
                        for (; i <= o;) {
                            if ((n = i + Math.floor((o - i) / 2)) === r || e > t[n].lastSample.originalDts && e < t[n + 1].originalBeginDts) { s = n; break }
                            t[n].originalBeginDts < e ? i = n + 1 : o = n - 1
                        }
                        return s
                    }
                }, { key: "_searchNearestSegmentAfter", value: function(e) { return this._searchNearestSegmentBefore(e) + 1 } }, {
                    key: "append",
                    value: function(e) {
                        var t = this._list,
                            n = e,
                            r = this._lastAppendLocation,
                            e = 0; - 1 !== r && r < t.length && n.originalBeginDts >= t[r].lastSample.originalDts && (r === t.length - 1 || r < t.length - 1 && n.originalBeginDts < t[r + 1].originalBeginDts) ? e = r + 1 : 0 < t.length && (e = this._searchNearestSegmentBefore(n.originalBeginDts) + 1), this._lastAppendLocation = e, this._list.splice(e, 0, n)
                    }
                }, { key: "getLastSegmentBefore", value: function(e) { e = this._searchNearestSegmentBefore(e); return 0 <= e ? this._list[e] : null } }, { key: "getLastSampleBefore", value: function(e) { e = this.getLastSegmentBefore(e); return null != e ? e.lastSample : null } }, { key: "getLastSyncPointBefore", value: function(e) { for (var t = this._searchNearestSegmentBefore(e), n = this._list[t].syncPoints; 0 === n.length && 0 < t;) t--, n = this._list[t].syncPoints; return 0 < n.length ? n[n.length - 1] : null } }]), t
            }();
            n.MediaSegmentInfoList = e
        }, { "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        36: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                s = r(e("events")),
                a = r(e("../utils/logger.js")),
                l = r(e("../utils/browser.js")),
                u = r(e("./mse-events.js")),
                c = e("./media-segment-info.js"),
                h = e("../utils/exception.js"),
                e = function() {
                    function t(e) {
                        (0, i.default)(this, t), this.TAG = "MSEController", this._config = e, this._emitter = new s.default, this._config.isLive && null == this._config.autoCleanupSourceBuffer && (this._config.autoCleanupSourceBuffer = !0), this.e = { onSourceOpen: this._onSourceOpen.bind(this), onSourceEnded: this._onSourceEnded.bind(this), onSourceClose: this._onSourceClose.bind(this), onSourceBufferError: this._onSourceBufferError.bind(this), onSourceBufferUpdateEnd: this._onSourceBufferUpdateEnd.bind(this) }, this._mediaSource = null, this._mediaSourceObjectURL = null, this._mediaElement = null, this._isBufferFull = !1, this._hasPendingEos = !1, this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0, this._pendingSourceBufferInit = [], this._mimeTypes = { video: null, audio: null }, this._sourceBuffers = { video: null, audio: null }, this._lastInitSegments = { video: null, audio: null }, this._pendingSegments = { video: [], audio: [] }, this._pendingRemoveRanges = { video: [], audio: [] }, this._idrList = new c.IDRSampleList
                    }
                    return (0, o.default)(t, [{
                        key: "destroy",
                        value: function() {
                            (this._mediaElement || this._mediaSource) && this.detachMediaElement(), this.e = null, this._emitter.removeAllListeners(), this._emitter = null
                        }
                    }, { key: "on", value: function(e, t) { this._emitter.addListener(e, t) } }, { key: "off", value: function(e, t) { this._emitter.removeListener(e, t) } }, {
                        key: "attachMediaElement",
                        value: function(e) {
                            if (this._mediaSource) throw new h.IllegalStateException("MediaSource has been attached to an HTMLMediaElement!");
                            var t = this._mediaSource = new window.MediaSource;
                            t.addEventListener("sourceopen", this.e.onSourceOpen), t.addEventListener("sourceended", this.e.onSourceEnded), t.addEventListener("sourceclose", this.e.onSourceClose), this._mediaElement = e, this._mediaSourceObjectURL = window.URL.createObjectURL(this._mediaSource), e.src = this._mediaSourceObjectURL
                        }
                    }, {
                        key: "detachMediaElement",
                        value: function() {
                            if (this._mediaSource) {
                                var e, t = this._mediaSource;
                                for (e in this._sourceBuffers) {
                                    var n = this._pendingSegments[e];
                                    n.splice(0, n.length), this._pendingSegments[e] = null, this._pendingRemoveRanges[e] = null, this._lastInitSegments[e] = null;
                                    n = this._sourceBuffers[e];
                                    n && ("closed" !== t.readyState && (t.removeSourceBuffer(n), n.removeEventListener("error", this.e.onSourceBufferError), n.removeEventListener("updateend", this.e.onSourceBufferUpdateEnd)), this._mimeTypes[e] = null, this._sourceBuffers[e] = null)
                                }
                                if ("open" === t.readyState) try { t.endOfStream() } catch (e) { a.default.e(this.TAG, e.message) }
                                t.removeEventListener("sourceopen", this.e.onSourceOpen), t.removeEventListener("sourceended", this.e.onSourceEnded), t.removeEventListener("sourceclose", this.e.onSourceClose), this._pendingSourceBufferInit = [], this._isBufferFull = !1, this._idrList.clear(), this._mediaSource = null
                            }
                            this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement = null), this._mediaSourceObjectURL && (window.URL.revokeObjectURL(this._mediaSourceObjectURL), this._mediaSourceObjectURL = null)
                        }
                    }, {
                        key: "appendInitSegment",
                        value: function(e, t) {
                            if (!this._mediaSource || "open" !== this._mediaSource.readyState) return this._pendingSourceBufferInit.push(e), void this._pendingSegments[e.type].push(e);
                            var n = e,
                                r = "".concat(n.container);
                            n.codec && 0 < n.codec.length && (r += ";codecs=".concat(n.codec));
                            e = !1;
                            if (a.default.v(this.TAG, "Received Initialization Segment, mimeType: " + r), this._lastInitSegments[n.type] = n, r !== this._mimeTypes[n.type]) {
                                if (this._mimeTypes[n.type]) a.default.v(this.TAG, "Notice: ".concat(n.type, " mimeType changed, origin: ").concat(this._mimeTypes[n.type], ", target: ").concat(r));
                                else {
                                    e = !0;
                                    try {
                                        var i = this._sourceBuffers[n.type] = this._mediaSource.addSourceBuffer(r);
                                        i.addEventListener("error", this.e.onSourceBufferError), i.addEventListener("updateend", this.e.onSourceBufferUpdateEnd)
                                    } catch (e) { return a.default.e(this.TAG, e.message), void this._emitter.emit(u.default.ERROR, { code: e.code, msg: e.message }) }
                                }
                                this._mimeTypes[n.type] = r
                            }
                            t || this._pendingSegments[n.type].push(n), e || this._sourceBuffers[n.type] && !this._sourceBuffers[n.type].updating && this._doAppendSegments(), l.default.safari && "audio/mpeg" === n.container && 0 < n.mediaDuration && (this._requireSetMediaDuration = !0, this._pendingMediaDuration = n.mediaDuration / 1e3, this._updateMediaSourceDuration())
                        }
                    }, {
                        key: "appendMediaSegment",
                        value: function(e) {
                            this._pendingSegments[e.type].push(e);
                            try { this._config.autoCleanupSourceBuffer && this._needCleanupSourceBuffer() && this._doCleanupSourceBuffer() } catch (e) { return void this._emitter.emit(u.default.ERROR, { code: e.code, msg: e.message }) }
                            e = this._sourceBuffers[e.type];
                            !e || e.updating || this._hasPendingRemoveRanges() || this._doAppendSegments()
                        }
                    }, {
                        key: "seek",
                        value: function() {
                            for (var e in this._sourceBuffers)
                                if (this._sourceBuffers[e]) {
                                    var t = this._sourceBuffers[e];
                                    if ("open" === this._mediaSource.readyState) try { t.abort() } catch (e) { a.default.e(this.TAG, e.message) }
                                    this._idrList.clear();
                                    var n = this._pendingSegments[e];
                                    if (n.splice(0, n.length), "closed" !== this._mediaSource.readyState) {
                                        for (var r = 0; r < t.buffered.length; r++) {
                                            var i = t.buffered.start(r),
                                                o = t.buffered.end(r);
                                            this._pendingRemoveRanges[e].push({ start: i, end: o })
                                        }
                                        t.updating || this._doRemoveRanges(), !l.default.safari || (n = this._lastInitSegments[e]) && (this._pendingSegments[e].push(n), t.updating || this._doAppendSegments())
                                    }
                                }
                        }
                    }, {
                        key: "openStream",
                        value: function() {
                            var e = this._sourceBuffers.video || this._sourceBuffers.audio;
                            e && !e.updating && e.appendBuffer(new ArrayBuffer(0))
                        }
                    }, {
                        key: "endOfStream",
                        value: function() {
                            var e = this._mediaSource,
                                t = this._sourceBuffers;
                            e && "open" === e.readyState ? t.video && t.video.updating || t.audio && t.audio.updating ? this._hasPendingEos = !0 : (this._hasPendingEos = !1, e.endOfStream()) : e && "closed" === e.readyState && this._hasPendingSegments() && (this._hasPendingEos = !0)
                        }
                    }, { key: "getNearestKeyframe", value: function(e) { return this._idrList.getLastSyncPointBeforeDts(e) } }, { key: "_needCleanupSourceBuffer", value: function() { if (!this._config.autoCleanupSourceBuffer) return !1; var e, t = this._mediaElement.currentTime; for (e in this._sourceBuffers) { var n = this._sourceBuffers[e]; if (n) { n = n.buffered; if (1 <= n.length && t - n.start(0) >= this._config.autoCleanupMaxBackwardDuration) return !0 } } return !1 } }, {
                        key: "_doCleanupSourceBuffer",
                        value: function() {
                            var e, t = this._mediaElement.currentTime;
                            for (e in this._sourceBuffers) {
                                var n = this._sourceBuffers[e];
                                if (n) {
                                    for (var r = n.buffered, i = !1, o = 0; o < r.length; o++) {
                                        var s, a = r.start(o),
                                            l = r.end(o);
                                        a <= t && t < l + 3 ? t - a >= this._config.autoCleanupMaxBackwardDuration && (i = !0, s = t - this._config.autoCleanupMinBackwardDuration, this._pendingRemoveRanges[e].push({ start: a, end: s })) : l < t && (i = !0, this._pendingRemoveRanges[e].push({ start: a, end: l }))
                                    }
                                    i && !n.updating && this._doRemoveRanges()
                                }
                            }
                        }
                    }, {
                        key: "_updateMediaSourceDuration",
                        value: function() {
                            var e, t = this._sourceBuffers;
                            0 !== this._mediaElement.readyState && "open" === this._mediaSource.readyState && (t.video && t.video.updating || t.audio && t.audio.updating || (e = this._mediaSource.duration, 0 < (t = this._pendingMediaDuration) && (isNaN(e) || e < t) && (a.default.v(this.TAG, "Update MediaSource duration from ".concat(e, " to ").concat(t)), this._mediaSource.duration = t), this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0))
                        }
                    }, {
                        key: "_doRemoveRanges",
                        value: function() {
                            for (var e in this._pendingRemoveRanges)
                                if (this._sourceBuffers[e] && !this._sourceBuffers[e].updating)
                                    for (var t = this._sourceBuffers[e], n = this._pendingRemoveRanges[e]; n.length && !t.updating;) {
                                        var r = n.shift();
                                        t.remove(r.start, r.end)
                                    }
                        }
                    }, {
                        key: "_doAppendSegments",
                        value: function() {
                            var t, e = this._pendingSegments;
                            for (t in e)
                                if (this._sourceBuffers[t] && !this._sourceBuffers[t].updating && 0 < e[t].length) { var n, r, i = e[t].shift(); if (i.timestampOffset && (n = this._sourceBuffers[t].timestampOffset, r = i.timestampOffset / 1e3, .1 < Math.abs(n - r) && (a.default.v(this.TAG, "Update MPEG audio timestampOffset from ".concat(n, " to ").concat(r)), this._sourceBuffers[t].timestampOffset = r), delete i.timestampOffset), i.data && 0 !== i.data.byteLength) try { this._sourceBuffers[t].appendBuffer(i.data), this._isBufferFull = !1, "video" === t && Object.prototype.hasOwnProperty.call(i, "info") && this._idrList.appendArray(i.info.syncPoints) } catch (e) { this._pendingSegments[t].unshift(i), 22 === e.code ? (this._isBufferFull || this._emitter.emit(u.default.BUFFER_FULL), this._isBufferFull = !0) : ((r = (this._mediaElement || {}).error) ? a.default.e(this.TAG, r.code + "," + (r.message || r.msg)) : a.default.e(this.TAG, e.message), this._emitter.emit(u.default.ERROR, { code: e.code, msg: e.message })) } }
                        }
                    }, {
                        key: "_onSourceOpen",
                        value: function() {
                            if (a.default.v(this.TAG, "MediaSource onSourceOpen"), this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), 0 < this._pendingSourceBufferInit.length)
                                for (var e = this._pendingSourceBufferInit; e.length;) {
                                    var t = e.shift();
                                    this.appendInitSegment(t, !0)
                                }
                            this._hasPendingSegments() && this._doAppendSegments(), this._emitter.emit(u.default.SOURCE_OPEN)
                        }
                    }, { key: "_onSourceEnded", value: function() { a.default.v(this.TAG, "MediaSource onSourceEnded"), this._emitter.emit(u.default.SOURCE_END) } }, { key: "_onSourceClose", value: function() { a.default.v(this.TAG, "MediaSource onSourceClose"), this._mediaSource && null != this.e && (this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._mediaSource.removeEventListener("sourceended", this.e.onSourceEnded), this._mediaSource.removeEventListener("sourceclose", this.e.onSourceClose)) } }, { key: "_hasPendingSegments", value: function() { var e = this._pendingSegments; return 0 < e.video.length || 0 < e.audio.length } }, { key: "_hasPendingRemoveRanges", value: function() { var e = this._pendingRemoveRanges; return 0 < e.video.length || 0 < e.audio.length } }, { key: "_onSourceBufferUpdateEnd", value: function() { this._requireSetMediaDuration ? this._updateMediaSourceDuration() : this._hasPendingRemoveRanges() ? this._doRemoveRanges() : this._hasPendingSegments() ? this._doAppendSegments() : this._hasPendingEos && this.endOfStream(), this._emitter && this._emitter.emit(u.default.UPDATE_END) } }, { key: "_onSourceBufferError", value: function(e) { a.default.e(this.TAG, "SourceBuffer Error: ".concat(e.message || e.toString())) } }]), t
                }();
            n.default = e
        }, { "../utils/browser.js": 69, "../utils/exception.js": 70, "../utils/logger.js": 72, "./media-segment-info.js": 35, "./mse-events.js": 37, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14, events: 30 }],
        37: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var r = { ERROR: "error", SOURCE_OPEN: "source_open", SOURCE_END: "source_end", UPDATE_END: "update_end", BUFFER_FULL: "buffer_full" };
            n.default = r
        }, {}],
        38: [function(o, e, t) {
            "use strict";
            var n = o("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
            var s = n(o("@babel/runtime/helpers/classCallCheck")),
                r = n(o("@babel/runtime/helpers/createClass")),
                a = n(o("events")),
                l = n(o("../utils/logger.js")),
                u = n(o("../utils/logging-control.js")),
                c = n(o("./transmuxing-controller.js")),
                h = n(o("./transmuxing-events.js")),
                d = n(o("./transmuxing-worker.js")),
                f = n(o("./media-info.js")),
                n = function() {
                    function i(t, n) {
                        if ((0, s.default)(this, i), this.TAG = "Transmuxer", this._emitter = new a.default, n.enableWorker && "undefined" != typeof Worker) try {
                            var e = o("webworkify");
                            this._worker = e(d.default), this._workerDestroying = !1, this._worker.addEventListener("message", this._onWorkerMessage.bind(this)), this._worker.postMessage({ cmd: "init", param: [t, n] }), this.e = { onLoggingConfigChanged: this._onLoggingConfigChanged.bind(this) }, u.default.registerListener(this.e.onLoggingConfigChanged), this._worker.postMessage({ cmd: "logging_config", param: u.default.getConfig() })
                        } catch (e) { l.default.e(this.TAG, "Error while initialize transmuxing worker, fallback to inline transmuxing"), this._worker = null, this._controller = new c.default(t, n) } else this._controller = new c.default(t, n);
                        var r;
                        this._controller && ((r = this._controller).on(h.default.IO_ERROR, this._onIOError.bind(this)), r.on(h.default.DEMUX_ERROR, this._onDemuxError.bind(this)), r.on(h.default.INIT_SEGMENT, this._onInitSegment.bind(this)), r.on(h.default.MEDIA_SEGMENT, this._onMediaSegment.bind(this)), r.on(h.default.LOADING_COMPLETE, this._onLoadingComplete.bind(this)), r.on(h.default.LOADED_HEADER, this._onLoadedHeader.bind(this)), r.on(h.default.RECOVERED_EARLY_EOF, this._onRecoveredEarlyEof.bind(this)), r.on(h.default.MEDIA_INFO, this._onMediaInfo.bind(this)), r.on(h.default.STATISTICS_INFO, this._onStatisticsInfo.bind(this)), r.on(h.default.RECOMMEND_SEEKPOINT, this._onRecommendSeekpoint.bind(this)), r.on(h.default.FLV_TRANSLATE_MESSAGE, this._onCustomFlvMessage.bind(this)), r.on(h.default.LOADED_WASM_VIDEO, this._onWASMVideo.bind(this)), r.on(h.default.LOADED_WASM_AUDIO, this._onWASMAudio.bind(this)), r.on(h.default.RESPONSE_MESSAGE_DATA, this._onResponseMessage.bind(this)))
                    }
                    return (0, r.default)(i, [{ key: "destroy", value: function() { this._worker ? this._workerDestroying || (this._workerDestroying = !0, this._worker.postMessage({ cmd: "destroy" }), u.default.removeListener(this.e.onLoggingConfigChanged), this.e = null) : (this._controller.destroy(), this._controller = null), this._emitter.removeAllListeners(), this._emitter = null } }, { key: "on", value: function(e, t) { this._emitter.addListener(e, t) } }, { key: "off", value: function(e, t) { this._emitter.removeListener(e, t) } }, { key: "hasWorker", value: function() { return null != this._worker } }, { key: "open", value: function() { l.default.i(this.TAG, "load video start!!"), this._worker ? this._worker.postMessage({ cmd: "start" }) : this._controller.start() } }, { key: "sendToWebSocketServer", value: function(e) { this._worker ? this._worker.postMessage({ cmd: "sendToWebSocketServer", data: e }) : this._controller.sendToWebSocketServer(e) } }, { key: "close", value: function() { this._worker ? this._worker.postMessage({ cmd: "stop" }) : this._controller.stop() } }, { key: "seek", value: function(e) { this._worker ? this._worker.postMessage({ cmd: "seek", param: e }) : this._controller.seek(e) } }, { key: "pause", value: function() { this._worker ? this._worker.postMessage({ cmd: "pause" }) : this._controller.pause() } }, { key: "resume", value: function() { this._worker ? this._worker.postMessage({ cmd: "resume" }) : this._controller.resume() } }, {
                        key: "_onInitSegment",
                        value: function(e, t) {
                            var n = this;
                            Promise.resolve().then(function() { n._emitter && n._emitter.emit(h.default.INIT_SEGMENT, e, t) })
                        }
                    }, {
                        key: "_onMediaSegment",
                        value: function(e, t) {
                            var n = this;
                            Promise.resolve().then(function() { n._emitter && n._emitter.emit(h.default.MEDIA_SEGMENT, e, t) })
                        }
                    }, {
                        key: "_onLoadingComplete",
                        value: function() {
                            var e = this;
                            Promise.resolve().then(function() { e._emitter && e._emitter.emit(h.default.LOADING_COMPLETE) })
                        }
                    }, {
                        key: "_onLoadedHeader",
                        value: function(e, t) {
                            var n = this;
                            Promise.resolve().then(function() { n._emitter && n._emitter.emit(h.default.LOADED_HEADER, e, t) })
                        }
                    }, {
                        key: "_onCustomFlvMessage",
                        value: function(e) {
                            var t = this;
                            Promise.resolve().then(function() { t._emitter && t._emitter.emit(h.default.FLV_TRANSLATE_MESSAGE, e) })
                        }
                    }, {
                        key: "_onWASMVideo",
                        value: function(e) {
                            var t = this;
                            Promise.resolve().then(function() { t._emitter && t._emitter.emit(h.default.LOADED_WASM_VIDEO, e) })
                        }
                    }, {
                        key: "_onWASMAudio",
                        value: function(e) {
                            var t = this;
                            Promise.resolve().then(function() { t._emitter && t._emitter.emit(h.default.LOADED_WASM_AUDIO, e) })
                        }
                    }, {
                        key: "_onResponseMessage",
                        value: function(e) {
                            var t = this;
                            Promise.resolve().then(function() { t._emitter && t._emitter.emit(h.default.RESPONSE_MESSAGE_DATA, e) })
                        }
                    }, {
                        key: "_onRecoveredEarlyEof",
                        value: function() {
                            var e = this;
                            Promise.resolve().then(function() { e._emitter && e._emitter.emit(h.default.RECOVERED_EARLY_EOF) })
                        }
                    }, {
                        key: "_onMediaInfo",
                        value: function(e) {
                            var t = this;
                            Promise.resolve().then(function() { t._emitter.emit(h.default.MEDIA_INFO, e) })
                        }
                    }, {
                        key: "_onStatisticsInfo",
                        value: function(e) {
                            var t = this;
                            Promise.resolve().then(function() { t._emitter.emit(h.default.STATISTICS_INFO, e) })
                        }
                    }, {
                        key: "_onIOError",
                        value: function(e, t) {
                            var n = this;
                            Promise.resolve().then(function() { n._emitter.emit(h.default.IO_ERROR, e, t) })
                        }
                    }, {
                        key: "_onDemuxError",
                        value: function(e, t) {
                            var n = this;
                            Promise.resolve().then(function() { n._emitter.emit(h.default.DEMUX_ERROR, e, t) })
                        }
                    }, {
                        key: "_onRecommendSeekpoint",
                        value: function(e) {
                            var t = this;
                            Promise.resolve().then(function() { t._emitter.emit(h.default.RECOMMEND_SEEKPOINT, e) })
                        }
                    }, { key: "_onLoggingConfigChanged", value: function(e) { this._worker && this._worker.postMessage({ cmd: "logging_config", param: e }) } }, {
                        key: "_onWorkerMessage",
                        value: function(e) {
                            var t = e.data,
                                n = t.data;
                            if ("destroyed" === t.msg || this._workerDestroying) return this._workerDestroying = !1, this._worker.terminate(), void(this._worker = null);
                            switch (t.msg) {
                                case h.default.RESPONSE_MESSAGE_DATA:
                                case h.default.LOADED_WASM_VIDEO:
                                case h.default.LOADED_WASM_AUDIO:
                                    this._emitter.emit(t.msg, n.buffer);
                                    break;
                                case h.default.FLV_TRANSLATE_MESSAGE:
                                    this._emitter.emit(t.msg, n.customFlvMessageData);
                                    break;
                                case h.default.LOADED_HEADER:
                                    this._emitter.emit(t.msg, n.headers, n.rangeIndex);
                                    break;
                                case h.default.INIT_SEGMENT:
                                case h.default.MEDIA_SEGMENT:
                                    this._emitter.emit(t.msg, n.type, n.data);
                                    break;
                                case h.default.LOADING_COMPLETE:
                                case h.default.RECOVERED_EARLY_EOF:
                                    this._emitter.emit(t.msg);
                                    break;
                                case h.default.MEDIA_INFO:
                                    Object.setPrototypeOf(n, f.default.prototype), this._emitter.emit(t.msg, n);
                                    break;
                                case h.default.STATISTICS_INFO:
                                    this._emitter.emit(t.msg, n);
                                    break;
                                case h.default.IO_ERROR:
                                case h.default.DEMUX_ERROR:
                                    this._emitter.emit(t.msg, n.type, n.info);
                                    break;
                                case h.default.RECOMMEND_SEEKPOINT:
                                    this._emitter.emit(t.msg, n);
                                    break;
                                case "logcat_callback":
                                    l.default.emitter.emit("log", n.type, n.logcat)
                            }
                        }
                    }]), i
                }();
            t.default = n
        }, { "../utils/logger.js": 72, "../utils/logging-control.js": 73, "./media-info.js": 34, "./transmuxing-controller.js": 39, "./transmuxing-events.js": 40, "./transmuxing-worker.js": 41, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14, events: 30, webworkify: 103 }],
        39: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                s = r(e("@babel/runtime/helpers/defineProperty")),
                a = r(e("events")),
                l = r(e("../utils/logger.js")),
                u = r(e("../utils/browser.js")),
                c = r(e("./media-info.js")),
                h = r(e("../demux/flv-demuxer.js")),
                d = r(e("../remux/mp4-remuxer.js")),
                f = r(e("../demux/demux-errors.js")),
                p = r(e("../io/io-controller.js")),
                _ = r(e("./transmuxing-events.js")),
                e = (e("../io/loader.js"), function() {
                    function e(t, n) {
                        (0, i.default)(this, e), (0, s.default)(this, "_", void 0), this.TAG = "TransmuxingController", this._emitter = new a.default, this._config = n, t.segments || (t.segments = [{ duration: t.duration, filesize: t.filesize, url: t.url }]), "boolean" != typeof t.cors && (t.cors = !0), "boolean" != typeof t.withCredentials && (t.withCredentials = !1), this._mediaDataSource = t;
                        var r = this._currentSegmentIndex = 0;
                        this._mediaDataSource.segments.forEach(function(e) { e.timestampBase = r, r += e.duration, e.cors = t.cors, e.withCredentials = t.withCredentials, n.referrerPolicy && (e.referrerPolicy = n.referrerPolicy) }), isNaN(r) || this._mediaDataSource.duration === r || (this._mediaDataSource.duration = r), this._mediaInfo = null, this._demuxer = null, this._remuxer = null, this._ioctl = null, this._pendingSeekTime = null, this._pendingResolveSeekPoint = null, this._statisticsReporter = null
                    }
                    return (0, o.default)(e, [{ key: "destroy", value: function() { this._mediaInfo = null, this._mediaDataSource = null, this._statisticsReporter && this._disableStatisticsReporter(), this._ioctl && (this._ioctl.destroy(), this._ioctl = null), this._demuxer && (this._demuxer.destroy(), this._demuxer = null), this._remuxer && (this._remuxer.destroy(), this._remuxer = null), this._emitter.removeAllListeners(), this._emitter = null } }, { key: "on", value: function(e, t) { this._emitter.addListener(e, t) } }, { key: "off", value: function(e, t) { this._emitter.removeListener(e, t) } }, { key: "start", value: function() { this._loadSegment(0), this._enableStatisticsReporter() } }, {
                        key: "_loadSegment",
                        value: function(e, t) {
                            this._currentSegmentIndex = e;
                            var n = this._mediaDataSource.segments[e],
                                e = this._ioctl = new p.default(n, this._config, e);
                            e.onError = this._onIOException.bind(this), e.onSeeked = this._onIOSeeked.bind(this), e.onComplete = this._onIOComplete.bind(this), e.onHeaderArrival = this._onIOHeaderArrival.bind(this), e.onRedirect = this._onIORedirect.bind(this), e.onRecoveredEarlyEof = this._onIORecoveredEarlyEof.bind(this), t ? this._demuxer.bindDataSource(this._ioctl) : (e.onDataArrival = this._onInitChunkArrival.bind(this), e.onResponseMessage = this._onResponseMessage.bind(this)), e.open(t)
                        }
                    }, { key: "stop", value: function() { this._internalAbort(), this._disableStatisticsReporter() } }, { key: "_internalAbort", value: function() { this._ioctl && (this._ioctl.destroy(), this._ioctl = null) } }, { key: "pause", value: function() { this._ioctl && this._ioctl.isWorking() && (this._ioctl.pause(), this._disableStatisticsReporter()) } }, { key: "resume", value: function() { this._ioctl && this._ioctl.isPaused() && (this._ioctl.resume(), this._enableStatisticsReporter()) } }, {
                        key: "seek",
                        value: function(e) {
                            var t, n, r;
                            null != this._mediaInfo && this._mediaInfo.isSeekable() && ((t = this._searchSegmentIndexContains(e)) === this._currentSegmentIndex ? null == (n = this._mediaInfo.segments[t]) ? this._pendingSeekTime = e : (r = n.getNearestKeyframe(e), this._remuxer.seek(r.milliseconds), this._ioctl.seek(r.fileposition), this._pendingResolveSeekPoint = r.milliseconds) : null == (r = this._mediaInfo.segments[t]) ? (this._pendingSeekTime = e, this._internalAbort(), this._remuxer.seek(), this._remuxer.insertDiscontinuity(), this._loadSegment(t)) : (r = r.getNearestKeyframe(e), this._internalAbort(), this._remuxer.seek(e), this._remuxer.insertDiscontinuity(), this._demuxer.resetMediaInfo(), this._demuxer.timestampBase = this._mediaDataSource.segments[t].timestampBase, this._loadSegment(t, r.fileposition), this._pendingResolveSeekPoint = r.milliseconds, this._reportSegmentMediaInfo(t)), this._enableStatisticsReporter())
                        }
                    }, {
                        key: "_searchSegmentIndexContains",
                        value: function(e) {
                            for (var t = this._mediaDataSource.segments, n = t.length - 1, r = 0; r < t.length; r++)
                                if (e < t[r].timestampBase) { n = r - 1; break }
                            return n
                        }
                    }, {
                        key: "_onInitChunkArrival",
                        value: function(e, t) {
                            var n, r = this,
                                i = null;
                            return 0 < t ? (this._demuxer.bindDataSource(this._ioctl), this._demuxer.timestampBase = this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase, this._demuxer.parseChunks(e, t)) : (i = h.default.probe(e)).match ? (this._demuxer = new h.default(i, this._config), this._remuxer || (this._remuxer = new d.default(this._config)), null == (n = this._mediaDataSource).duration || isNaN(n.duration) || (this._demuxer.overridedDuration = n.duration), "boolean" == typeof n.hasAudio && (this._demuxer.overridedHasAudio = n.hasAudio), "boolean" == typeof n.hasVideo && (this._demuxer.overridedHasVideo = n.hasVideo), this._demuxer.timestampBase = n.segments[this._currentSegmentIndex].timestampBase, this._demuxer.onError = this._onDemuxException.bind(this), this._demuxer.onMediaInfo = this._onMediaInfo.bind(this), this._demuxer.onWASMVideo = this._onWASMVideo.bind(this), this._demuxer.onWASMAudio = this._onWASMAudio.bind(this), this._demuxer.onResponseJsonMessage = this._onResponseJsonMessage.bind(this), this._demuxer.onCustomFlvMessage = this._onCustomFlvMessage.bind(this), this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this), this._demuxer.parseChunks(e, t)) : (i = null, l.default.e(this.TAG, "Non-FLV, Unsupported media type!"), Promise.resolve().then(function() { r._internalAbort() }), this._emitter.emit(_.default.DEMUX_ERROR, f.default.FORMAT_UNSUPPORTED, "Non-FLV, Unsupported media type"), 0)
                        }
                    }, {
                        key: "_onMediaInfo",
                        value: function(e) {
                            var t = this;
                            null == this._mediaInfo && (this._mediaInfo = Object.assign({}, e), this._mediaInfo.keyframesIndex = null, this._mediaInfo.segments = [], this._mediaInfo.segmentCount = this._mediaDataSource.segments.length, Object.setPrototypeOf(this._mediaInfo, c.default.prototype));
                            e = Object.assign({}, e);
                            Object.setPrototypeOf(e, c.default.prototype), this._mediaInfo.segments[this._currentSegmentIndex] = e, this._reportSegmentMediaInfo(this._currentSegmentIndex), null != this._pendingSeekTime && Promise.resolve().then(function() {
                                var e = t._pendingSeekTime;
                                t._pendingSeekTime = null, t.seek(e)
                            })
                        }
                    }, { key: "_onIOSeeked", value: function() { this._remuxer.insertDiscontinuity() } }, { key: "_onWASMVideo", value: function(e) { this._emitter.emit(_.default.LOADED_WASM_VIDEO, e) } }, { key: "_onWASMAudio", value: function(e) { this._emitter.emit(_.default.LOADED_WASM_AUDIO, e) } }, { key: "_onResponseJsonMessage", value: function(e) { this._emitter.emit(_.default.RESPONSE_MESSAGE_DATA, e) } }, { key: "_onCustomFlvMessage", value: function(e) { this._emitter.emit(_.default.FLV_TRANSLATE_MESSAGE, e) } }, {
                        key: "_onIOHeaderArrival",
                        value: function(e, t) {
                            var n, r, i;
                            e && (n = e.nextRawId, (void 0 === t || -1 == t) && n && 1 < n.length && (i = (r = this._mediaDataSource.segments[0]).url, r.url = -1 < i.indexOf("rawId") ? i.replace(/rawId=(\d*)/, function(e, t) { return t ? e.replace(t, n) : e + n }) : i + "&rawId=" + n), this._emitter.emit(_.default.LOADED_HEADER, e, t))
                        }
                    }, {
                        key: "_onIOComplete",
                        value: function(e) {
                            e += 1;
                            e < this._mediaDataSource.segments.length ? (this._internalAbort(), this._loadSegment(e)) : (this._emitter.emit(_.default.LOADING_COMPLETE), this._disableStatisticsReporter())
                        }
                    }, {
                        key: "_onIORedirect",
                        value: function(e) {
                            var t = this._ioctl.extraData;
                            this._mediaDataSource.segments[t].redirectedURL = e
                        }
                    }, { key: "_onIORecoveredEarlyEof", value: function() { this._emitter.emit(_.default.RECOVERED_EARLY_EOF) } }, { key: "_onIOException", value: function(e, t) { l.default.e(this.TAG, "IOException: type = ".concat(e, ", code = ").concat(t.code, ", msg = ").concat(t.msg)), this._emitter.emit(_.default.IO_ERROR, e, t), this._disableStatisticsReporter() } }, { key: "_onDemuxException", value: function(e, t) { l.default.e(this.TAG, "DemuxException: type = ".concat(e, ", info = ").concat(t)), this._emitter.emit(_.default.DEMUX_ERROR, e, t) } }, { key: "_onRemuxerInitSegmentArrival", value: function(e, t) { this._emitter.emit(_.default.INIT_SEGMENT, e, t) } }, { key: "_onRemuxerMediaSegmentArrival", value: function(e, t) { null == this._pendingSeekTime && (this._emitter.emit(_.default.MEDIA_SEGMENT, e, t), null != this._pendingResolveSeekPoint && "video" === e && (e = t.info.syncPoints, t = this._pendingResolveSeekPoint, this._pendingResolveSeekPoint = null, u.default.safari && 0 < e.length && e[0].originalDts === t && (t = e[0].pts), this._emitter.emit(_.default.RECOMMEND_SEEKPOINT, t))) } }, { key: "_enableStatisticsReporter", value: function() { null == this._statisticsReporter && (this._statisticsReporter = self.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval)) } }, { key: "_disableStatisticsReporter", value: function() { this._statisticsReporter && (self.clearInterval(this._statisticsReporter), this._statisticsReporter = null) } }, {
                        key: "_reportSegmentMediaInfo",
                        value: function(e) {
                            e = this._mediaInfo.segments[e], e = Object.assign({}, e);
                            e.duration = this._mediaInfo.duration, e.segmentCount = this._mediaInfo.segmentCount, delete e.segments, delete e.keyframesIndex, this._emitter.emit(_.default.MEDIA_INFO, e)
                        }
                    }, {
                        key: "_reportStatisticsInfo",
                        value: function() {
                            var e = {};
                            e.url = this._ioctl.currentURL, e.hasRedirect = this._ioctl.hasRedirect, e.hasRedirect && (e.redirectedURL = this._ioctl.currentRedirectedURL), e.speed = this._ioctl.currentSpeed, e.loaderType = this._ioctl.loaderType, e.currentSegmentIndex = this._currentSegmentIndex, e.totalSegmentCount = this._mediaDataSource.segments.length, this._emitter.emit(_.default.STATISTICS_INFO, e)
                        }
                    }, { key: "_onResponseMessage", value: function(e) { this._emitter.emit(_.default.RESPONSE_MESSAGE_DATA, e) } }, { key: "sendToWebSocketServer", value: function(e) { this._ioctl.sendToWebSocketServer && this._ioctl.sendToWebSocketServer(e) } }]), e
                }());
            n.default = e
        }, { "../demux/demux-errors.js": 43, "../demux/flv-demuxer.js": 45, "../io/io-controller.js": 52, "../io/loader.js": 53, "../remux/mp4-remuxer.js": 68, "../utils/browser.js": 69, "../utils/logger.js": 72, "./media-info.js": 34, "./transmuxing-events.js": 40, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/defineProperty": 10, "@babel/runtime/helpers/interopRequireDefault": 14, events: 30 }],
        40: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var r = { IO_ERROR: "io_error", DEMUX_ERROR: "demux_error", INIT_SEGMENT: "init_segment", MEDIA_SEGMENT: "media_segment", LOADING_COMPLETE: "loading_complete", LOADED_HEADER: "loaded_header", LOADED_WASM_VIDEO: "loaded_WASM_video", LOADED_WASM_AUDIO: "loaded_WASM_audio", RECOVERED_EARLY_EOF: "recovered_early_eof", MEDIA_INFO: "media_info", STATISTICS_INFO: "statistics_info", RECOMMEND_SEEKPOINT: "recommend_seekpoint", RESPONSE_MESSAGE_DATA: "RESPONSE_MESSAGE_DATA", FLV_TRANSLATE_MESSAGE: "FLV_TRANSLATE_MESSAGE" };
            n.default = r
        }, {}],
        41: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            r(e("../utils/logger.js"));
            var o = r(e("../utils/logging-control.js")),
                s = r(e("../utils/polyfill.js")),
                a = r(e("./transmuxing-controller.js")),
                l = r(e("./transmuxing-events.js")),
                e = function(n) {
                    var r = null,
                        i = function(e, t) { n.postMessage({ msg: "logcat_callback", data: { type: e, logcat: t } }) }.bind(this);
                    s.default.install(), n.addEventListener("message", function(e) {
                        switch (e.data.cmd) {
                            case "init":
                                (r = new a.default(e.data.param[0], e.data.param[1])).on(l.default.IO_ERROR, function(e, t) { n.postMessage({ msg: l.default.IO_ERROR, data: { type: e, info: t } }) }.bind(this)), r.on(l.default.DEMUX_ERROR, function(e, t) { n.postMessage({ msg: l.default.DEMUX_ERROR, data: { type: e, info: t } }) }.bind(this)), r.on(l.default.INIT_SEGMENT, function(e, t) {
                                    e = { msg: l.default.INIT_SEGMENT, data: { type: e, data: t } };
                                    n.postMessage(e, [t.data])
                                }.bind(this)), r.on(l.default.MEDIA_SEGMENT, function(e, t) {
                                    e = { msg: l.default.MEDIA_SEGMENT, data: { type: e, data: t } };
                                    n.postMessage(e, [t.data])
                                }.bind(this)), r.on(l.default.LOADING_COMPLETE, function() {
                                    var e = { msg: l.default.LOADING_COMPLETE };
                                    n.postMessage(e)
                                }.bind(this)), r.on(l.default.LOADED_HEADER, function(e, t) {
                                    t = { msg: l.default.LOADED_HEADER, data: { headers: e, rangeIndex: t } };
                                    n.postMessage(t)
                                }.bind(this)), r.on(l.default.RECOVERED_EARLY_EOF, function() {
                                    var e = { msg: l.default.RECOVERED_EARLY_EOF };
                                    n.postMessage(e)
                                }.bind(this)), r.on(l.default.MEDIA_INFO, function(e) {
                                    e = { msg: l.default.MEDIA_INFO, data: e };
                                    n.postMessage(e)
                                }.bind(this)), r.on(l.default.STATISTICS_INFO, function(e) {
                                    e = { msg: l.default.STATISTICS_INFO, data: e };
                                    n.postMessage(e)
                                }.bind(this)), r.on(l.default.RECOMMEND_SEEKPOINT, function(e) { n.postMessage({ msg: l.default.RECOMMEND_SEEKPOINT, data: e }) }.bind(this)), r.on(l.default.FLV_TRANSLATE_MESSAGE, function(e) {
                                    e = { msg: l.default.FLV_TRANSLATE_MESSAGE, data: { customFlvMessageData: e } };
                                    n.postMessage(e)
                                }.bind(this)), r.on(l.default.LOADED_WASM_VIDEO, function(e) {
                                    e = { msg: l.default.LOADED_WASM_VIDEO, data: { buffer: e } };
                                    n.postMessage(e)
                                }.bind(this)), r.on(l.default.LOADED_WASM_AUDIO, function(e) {
                                    e = { msg: l.default.LOADED_WASM_AUDIO, data: { buffer: e } };
                                    n.postMessage(e)
                                }.bind(this)), r.on(l.default.RESPONSE_MESSAGE_DATA, function(e) {
                                    e = { msg: l.default.RESPONSE_MESSAGE_DATA, data: { buffer: e } };
                                    n.postMessage(e)
                                }.bind(this));
                                break;
                            case "sendToWebSocketServer":
                                r.sendToWebSocketServer(e.data.data);
                                break;
                            case "destroy":
                                r && (r.destroy(), r = null), n.postMessage({ msg: "destroyed" });
                                break;
                            case "start":
                                r.start();
                                break;
                            case "stop":
                                r.stop();
                                break;
                            case "seek":
                                r.seek(e.data.param);
                                break;
                            case "pause":
                                r.pause();
                                break;
                            case "resume":
                                r.resume();
                                break;
                            case "logging_config":
                                var t = e.data.param;
                                o.default.applyConfig(t), !0 === t.enableCallback ? o.default.addLogListener(i) : o.default.removeLogListener(i)
                        }
                    })
                };
            n.default = e
        }, { "../utils/logger.js": 72, "../utils/logging-control.js": 73, "../utils/polyfill.js": 74, "./transmuxing-controller.js": 39, "./transmuxing-events.js": 40, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        42: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                v = r(e("../utils/logger.js")),
                s = r(e("../utils/utf8-conv.js")),
                g = e("../utils/exception.js"),
                b = (e = new ArrayBuffer(2), new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0]),
                e = function() {
                    function y() {
                        (0, i.default)(this, y)
                    }
                    return (0, o.default)(y, null, [{
                        key: "parseScriptData",
                        value: function(e, t, n) {
                            var r = {};
                            try {
                                var i = y.parseValue(e, t, n),
                                    o = y.parseValue(e, t + i.size, n - i.size);
                                r[i.data] = o.data
                            } catch (e) { v.default.e("AMF", e.toString()) }
                            return r
                        }
                    }, {
                        key: "parseObject",
                        value: function(e, t, n) {
                            if (n < 3) throw new g.IllegalStateException("Data not enough when parse ScriptDataObject");
                            var r = y.parseString(e, t, n),
                                t = y.parseValue(e, t + r.size, n - r.size),
                                n = t.objectEnd;
                            return { data: { name: r.data, value: t.data }, size: r.size + t.size, objectEnd: n }
                        }
                    }, { key: "parseVariable", value: function(e, t, n) { return y.parseObject(e, t, n) } }, {
                        key: "parseString",
                        value: function(e, t, n) {
                            if (n < 2) throw new g.IllegalStateException("Data not enough when parse String");
                            n = new DataView(e, t, n).getUint16(0, !b), t = 0 < n ? (0, s.default)(new Uint8Array(e, t + 2, n)) : "";
                            return { data: t, size: 2 + n }
                        }
                    }, {
                        key: "parseLongString",
                        value: function(e, t, n) {
                            if (n < 4) throw new g.IllegalStateException("Data not enough when parse LongString");
                            n = new DataView(e, t, n).getUint32(0, !b), t = 0 < n ? (0, s.default)(new Uint8Array(e, t + 4, n)) : "";
                            return { data: t, size: 4 + n }
                        }
                    }, {
                        key: "parseDate",
                        value: function(e, t, n) {
                            if (n < 10) throw new g.IllegalStateException("Data size invalid when parse Date");
                            t = new DataView(e, t, n), n = t.getFloat64(0, !b);
                            return n += 60 * t.getInt16(8, !b) * 1e3, { data: new Date(n), size: 10 }
                        }
                    }, {
                        key: "parseValue",
                        value: function(e, t, n) {
                            if (n < 1) throw new g.IllegalStateException("Data not enough when parse Value");
                            var r = new DataView(e, t, n),
                                i = 1,
                                o = r.getUint8(0),
                                s = !1;
                            try {
                                switch (o) {
                                    case 0:
                                        a = r.getFloat64(1, !b), i += 8;
                                        break;
                                    case 1:
                                        var a = !!r.getUint8(1);
                                        i += 1;
                                        break;
                                    case 2:
                                        var l = y.parseString(e, t + 1, n - 1);
                                        a = l.data, i += l.size;
                                        break;
                                    case 3:
                                        a = {};
                                        var u = 0;
                                        for (9 == (16777215 & r.getUint32(n - 4, !b)) && (u = 3); i < n - 4;) {
                                            var c = y.parseObject(e, t + i, n - i - u);
                                            if (c.objectEnd) break;
                                            a[c.data.name] = c.data.value, i += c.size
                                        }
                                        i <= n - 3 && 9 == (16777215 & r.getUint32(i - 1, !b)) && (i += 3);
                                        break;
                                    case 8:
                                        a = {}, i += 4;
                                        var h = 0;
                                        for (9 == (16777215 & r.getUint32(n - 4, !b)) && (h = 3); i < n - 8;) {
                                            var d = y.parseVariable(e, t + i, n - i - h);
                                            if (d.objectEnd) break;
                                            a[d.data.name] = d.data.value, i += d.size
                                        }
                                        i <= n - 3 && 9 == (16777215 & r.getUint32(i - 1, !b)) && (i += 3);
                                        break;
                                    case 9:
                                        i = 1, s = !(a = void 0);
                                        break;
                                    case 10:
                                        a = [];
                                        var f = r.getUint32(1, !b);
                                        i += 4;
                                        for (var p = 0; p < f; p++) {
                                            var _ = y.parseValue(e, t + i, n - i);
                                            a.push(_.data), i += _.size
                                        }
                                        break;
                                    case 11:
                                        var m = y.parseDate(e, t + 1, n - 1);
                                        a = m.data, i += m.size;
                                        break;
                                    case 12:
                                        m = y.parseString(e, t + 1, n - 1);
                                        a = m.data, i += m.size;
                                        break;
                                    default:
                                        i = n, v.default.w("AMF", "Unsupported AMF value type " + o)
                                }
                            } catch (e) { v.default.e("AMF", e.toString()) }
                            return { data: a, size: i, objectEnd: s }
                        }
                    }]), y
                }();
            n.default = e
        }, { "../utils/exception.js": 70, "../utils/logger.js": 72, "../utils/utf8-conv.js": 76, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        43: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var r = { OK: "OK", FORMAT_ERROR: "FormatError", FORMAT_UNSUPPORTED: "FormatUnsupported", CODEC_UNSUPPORTED: "CodecUnsupported" };
            n.default = r
        }, {}],
        44: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                s = e("../utils/exception.js"),
                e = function() {
                    function t(e) {
                        (0, i.default)(this, t), this.TAG = "ExpGolomb", this._buffer = e, this._buffer_index = 0, this._total_bytes = e.byteLength, this._total_bits = 8 * e.byteLength, this._current_word = 0, this._current_word_bits_left = 0
                    }
                    return (0, o.default)(t, [{ key: "destroy", value: function() { this._buffer = null } }, {
                        key: "_fillCurrentWord",
                        value: function() {
                            var e = this._total_bytes - this._buffer_index;
                            if (e <= 0) throw new s.IllegalStateException("ExpGolomb: _fillCurrentWord() but no bytes available");
                            var t = Math.min(4, e),
                                e = new Uint8Array(4);
                            e.set(this._buffer.subarray(this._buffer_index, this._buffer_index + t)), this._current_word = new DataView(e.buffer).getUint32(0, !1), this._buffer_index += t, this._current_word_bits_left = 8 * t
                        }
                    }, {
                        key: "readBits",
                        value: function(e) {
                            if (32 < e) throw new s.InvalidArgumentException("ExpGolomb: readBits() bits exceeded max 32bits!");
                            if (e <= this._current_word_bits_left) { var t = this._current_word >>> 32 - e; return this._current_word <<= e, this._current_word_bits_left -= e, t }
                            var n = this._current_word_bits_left ? this._current_word : 0;
                            n >>>= 32 - this._current_word_bits_left;
                            t = e - this._current_word_bits_left;
                            this._fillCurrentWord();
                            e = Math.min(t, this._current_word_bits_left), t = this._current_word >>> 32 - e;
                            return this._current_word <<= e, this._current_word_bits_left -= e, n = n << e | t
                        }
                    }, { key: "readBool", value: function() { return 1 === this.readBits(1) } }, { key: "readByte", value: function() { return this.readBits(8) } }, {
                        key: "_skipLeadingZero",
                        value: function() {
                            for (var e = 0; e < this._current_word_bits_left; e++)
                                if (0 != (this._current_word & 2147483648 >>> e)) return this._current_word <<= e, this._current_word_bits_left -= e, e;
                            return this._fillCurrentWord(), e + this._skipLeadingZero()
                        }
                    }, { key: "readUEG", value: function() { var e = this._skipLeadingZero(); return this.readBits(e + 1) - 1 } }, { key: "readSEG", value: function() { var e = this.readUEG(); return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1) } }]), t
                }();
            n.default = e
        }, { "../utils/exception.js": 70, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        45: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var x = r(e("@babel/runtime/helpers/defineProperty")),
                o = r(e("@babel/runtime/helpers/typeof")),
                i = r(e("@babel/runtime/helpers/classCallCheck")),
                s = r(e("@babel/runtime/helpers/createClass")),
                S = r(e("../utils/flvTranslateTypes.js")),
                B = r(e("../utils/logger.js")),
                c = r(e("../utils/string-convert")),
                p = r(e("./h265NALBitStream")),
                a = r(e("./amf-parser.js")),
                T = r(e("./sps-parser.js")),
                A = r(e("./demux-errors.js")),
                l = r(e("../core/media-info.js")),
                _ = e("../utils/exception.js");
            r(e("../core/features.js"));

            function U(t, e) { var n, r = Object.keys(t); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), r.push.apply(r, n)), r }
            e = function() {
                function f(e, t) {
                    (0, i.default)(this, f), this.TAG = "FLVDemuxer", this._config = t, this._onError = null, this._onMediaInfo = null, this._onTrackMetadata = null, this._onDataAvailable = null, this._dataOffset = e.dataOffset, this._firstParse = !0, this._dispatch = !1, this._hasAudio = e.hasAudioTrack, this._hasVideo = e.hasVideoTrack, this._hasAudioFlagOverrided = !1, this._hasVideoFlagOverrided = !1, this._audioInitialMetadataDispatched = !1, this._videoInitialMetadataDispatched = !1, this._mediaInfo = new l.default, this._mediaInfo.hasAudio = this._hasAudio, this._mediaInfo.hasVideo = this._hasVideo, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._naluLengthSize = 4, this._timestampBase = 0, this._timescale = 1e3, this._duration = 0, this._durationOverrided = !1, this._referenceFrameRate = { fixed: !0, fps: 25, fps_num: 25e3, fps_den: 1e3 }, this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48e3], this._mpegSamplingRates = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], this._mpegAudioV10SampleRateTable = [44100, 48e3, 32e3, 0], this._mpegAudioV20SampleRateTable = [22050, 24e3, 16e3, 0], this._mpegAudioV25SampleRateTable = [11025, 12e3, 8e3, 0], this._mpegAudioL1BitRateTable = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1], this._mpegAudioL2BitRateTable = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1], this._mpegAudioL3BitRateTable = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1], this._videoTrack = { type: "video", id: 1, sequenceNumber: 0, samples: [], length: 0 }, this._audioTrack = { type: "audio", id: 2, sequenceNumber: 0, samples: [], length: 0 }, this._littleEndian = (e = new ArrayBuffer(2), new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0]), this._onWASMVideo = null, this._onWASMAudio = null, this._onCustomFlvMessage = null, this._startCode = new Uint8Array([0, 0, 0, 1])
                }
                return (0, s.default)(f, [{ key: "destroy", value: function() { this._mediaInfo = null, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._videoTrack = null, this._audioTrack = null, this._onError = null, this._onMediaInfo = null, this._onTrackMetadata = null, this._onDataAvailable = null, this._onWASMAudio = null, this._onWASMVideo = null, this._onCustomFlvMessage = null } }, { key: "bindDataSource", value: function(e) { return e.onDataArrival = this.parseChunks.bind(this), this } }, { key: "onWASMVideo", get: function() { return this._onWASMVideo }, set: function(e) { this._onWASMVideo = e } }, { key: "onWASMAudio", get: function() { return this._onWASMAudio }, set: function(e) { this._onWASMAudio = e } }, { key: "onCustomFlvMessage", get: function() { return this._onCustomFlvMessage }, set: function(e) { this._onCustomFlvMessage = e } }, { key: "onTrackMetadata", get: function() { return this._onTrackMetadata }, set: function(e) { this._onTrackMetadata = e } }, { key: "onMediaInfo", get: function() { return this._onMediaInfo }, set: function(e) { this._onMediaInfo = e } }, { key: "onError", get: function() { return this._onError }, set: function(e) { this._onError = e } }, { key: "onDataAvailable", get: function() { return this._onDataAvailable }, set: function(e) { this._onDataAvailable = e } }, { key: "timestampBase", get: function() { return this._timestampBase }, set: function(e) { this._timestampBase = e } }, { key: "overridedDuration", get: function() { return this._duration }, set: function(e) { this._durationOverrided = !0, this._duration = e, this._mediaInfo.duration = e } }, { key: "overridedHasAudio", set: function(e) { this._hasAudioFlagOverrided = !0, this._hasAudio = e, this._mediaInfo.hasAudio = e } }, { key: "overridedHasVideo", set: function(e) { this._hasVideoFlagOverrided = !0, this._hasVideo = e, this._mediaInfo.hasVideo = e } }, { key: "resetMediaInfo", value: function() { this._mediaInfo = new l.default } }, { key: "_isInitialMetadataDispatched", value: function() { return this._hasAudio && this._hasVideo ? this._audioInitialMetadataDispatched && this._videoInitialMetadataDispatched : this._hasAudio && !this._hasVideo ? this._audioInitialMetadataDispatched : !(this._hasAudio || !this._hasVideo) && this._videoInitialMetadataDispatched } }, {
                    key: "parseChunks",
                    value: function(e, t) {
                        if (!(this._onError && this._onMediaInfo && this._onTrackMetadata && this._onDataAvailable)) throw new _.IllegalStateException("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
                        var n = 0,
                            r = this._littleEndian;
                        if (0 === t) {
                            if (!(13 < e.byteLength)) return 0;
                            n = f.probe(e).dataOffset
                        }
                        for (this._firstParse && (this._firstParse = !1, t + n !== this._dataOffset && B.default.w(this.TAG, "First time parsing but chunk byteStart invalid!"), 0 !== new DataView(e, n).getUint32(0, !r) && B.default.w(this.TAG, "PrevTagSize0 !== 0 !!!"), n += 4); n < e.byteLength;) {
                            this._dispatch = !0;
                            var i = new DataView(e, n);
                            if (n + 11 + 4 > e.byteLength) break;
                            var o = i.getUint8(0),
                                s = 16777215 & i.getUint32(0, !r);
                            if (n + 11 + s + 4 > e.byteLength) break;
                            if (8 === o || 9 === o || 18 === o || 88 === o || 89 === o || 97 === o || 98 === o || 99 === o) {
                                var a = i.getUint8(4),
                                    l = i.getUint8(5),
                                    u = i.getUint8(6),
                                    c = i.getUint8(7),
                                    h = u + (l << 8) + (a << 16) + parseInt(Number(c).toString(2) + new Array(24).fill(0).join(""), 2);
                                0 != (16777215 & i.getUint32(7, !r)) && B.default.w(this.TAG, "Meet tag which has StreamID != 0!");
                                var d = n + 11;
                                switch (o) {
                                    case 8:
                                        this._parseAudioData(e, d, s, h);
                                        break;
                                    case 9:
                                        this._parseVideoData(e, d, s, h, t + n);
                                        break;
                                    case 12:
                                        this._isWASM = !0, this._parseVideoData(e, d, s, h, t + n);
                                        break;
                                    case 18:
                                        this._parseScriptData(e, d, s);
                                        break;
                                    case 89:
                                        this._parseFishEyeCircleArguments(e, d, s);
                                        break;
                                    case 97:
                                        this._parseCustomFlvFrame(e, d, s);
                                        break;
                                    case 98:
                                        this._parseWASMAudio(e, d, s, h);
                                        break;
                                    case 99:
                                        this._parseWASMVideo(e, d, s, h)
                                }
                                i = i.getUint32(11 + s, !r);
                                i !== 11 + s && B.default.w(this.TAG, "Invalid PrevTagSize ".concat(i)), n += 11 + s + 4
                            } else B.default.w(this.TAG, "Unsupported tag type ".concat(o, ", skipped")), n += 11 + s + 4
                        }
                        return this._isInitialMetadataDispatched() && this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack), n
                    }
                }, {
                    key: "_parseWASMAudio",
                    value: function(e, t, n, r) {
                        t = new Uint8Array(e, t, n), n = new Uint8Array(t.length);
                        n.set(t), this._onWASMAudio({ buffer: n.buffer, timestamp: r })
                    }
                }, {
                    key: "_parseWASMVideo",
                    value: function(e, t, n, r) {
                        t = new Uint8Array(e, t, n), n = new Uint8Array(t.length);
                        n.set(t), this._onWASMVideo({ buffer: n.buffer, timestamp: r })
                    }
                }, {
                    key: "_parseCustomFlvFrame",
                    value: function(e, t, n) {
                        try {
                            var r, i = new Uint8Array(e, t, n),
                                o = c.default.unit8Array2String(i),
                                s = JSON.parse(o),
                                a = s.type,
                                l = s.data,
                                u = s.videoEncodeType,
                                i = s.audioEncodeType;
                            a === S.default.VIDEO_SPS ? ("Buffer" === l.type ? (o = new Uint8Array(l.data), 1 === u ? r = new p.default(o).ParseSequenceParameterSet() : 0 === u && (r = { codecWidth: void 0 === (o = (s = (T.default.parseSPS(o) || {}).codec_size || {}).width) ? 0 : o, codecHeight: void 0 === (s = s.height) ? 0 : s })) : r = l, this._onCustomFlvMessage({ flvType: a, data: r, videoEncodeType: u, audioEncodeType: i })) : this._onCustomFlvMessage({ flvType: a, data: l, videoEncodeType: u, audioEncodeType: i })
                        } catch (e) { console.error(e) }
                    }
                }, {
                    key: "_parseFishEyeCircleArguments",
                    value: function(e, t, n) {
                        for (var r = new Uint8Array(e, t, n), i = [], o = 0, s = r.length; o < s; o += 4) {
                            for (var a = [r[o + 3], r[o + 2], r[o + 1], r[o]], l = "", u = 0, c = a.length; u < c; u++) {
                                var h = a[u].toString(16);
                                h.length < 2 && (h = "0" + h), l += h
                            }
                            i.push(parseInt(l, 16))
                        }
                        this._onCustomFlvMessage({ flvType: S.default.CIRCLE, data: i })
                    }
                }, {
                    key: "_parseScriptData",
                    value: function(e, t, n) {
                        var r, i, n = a.default.parseScriptData(e, t, n);
                        Object.prototype.hasOwnProperty.call(n, "onMetaData") && (null != n.onMetaData && "object" === (0, o.default)(n.onMetaData) ? (this._metadata && B.default.w(this.TAG, "Found another onMetaData tag!"), this._metadata = n, "boolean" == typeof(n = this._metadata.onMetaData).hasAudio && !1 === this._hasAudioFlagOverrided && (this._hasAudio = n.hasAudio, this._mediaInfo.hasAudio = this._hasAudio), "boolean" == typeof n.hasVideo && !1 === this._hasVideoFlagOverrided && (this._hasVideo = n.hasVideo, this._mediaInfo.hasVideo = this._hasVideo), "number" == typeof n.audiodatarate && (this._mediaInfo.audioDataRate = n.audiodatarate), "number" == typeof n.videodatarate && (this._mediaInfo.videoDataRate = n.videodatarate), "number" == typeof n.width && (this._mediaInfo.width = n.width), "number" == typeof n.height && (this._mediaInfo.height = n.height), "number" == typeof n.duration ? this._durationOverrided || (r = Math.floor(n.duration * this._timescale), this._duration = r, this._mediaInfo.duration = r) : this._mediaInfo.duration = 0, "number" != typeof n.framerate || 0 < (r = Math.floor(1e3 * n.framerate)) && (i = r / 1e3, this._referenceFrameRate.fixed = !0, this._referenceFrameRate.fps = i, this._referenceFrameRate.fps_num = r, this._referenceFrameRate.fps_den = 1e3, this._mediaInfo.fps = i), "object" === (0, o.default)(n.keyframes) ? (this._mediaInfo.hasKeyframesIndex = !0, i = n.keyframes, this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(i), n.keyframes = null) : this._mediaInfo.hasKeyframesIndex = !1, this._dispatch = !1, this._mediaInfo.metadata = n, B.default.v(this.TAG, "Parsed onMetaData"), this._mediaInfo.isComplete() && this._onMediaInfo(this._mediaInfo)) : B.default.w(this.TAG, "Invalid onMetaData structure!"))
                    }
                }, {
                    key: "_parseKeyframesIndex",
                    value: function(e) {
                        for (var t = [], n = [], r = 1; r < e.times.length; r++) {
                            var i = this._timestampBase + Math.floor(1e3 * e.times[r]);
                            t.push(i), n.push(e.filepositions[r])
                        }
                        return { times: t, filepositions: n }
                    }
                }, {
                    key: "_parseAudioData",
                    value: function(e, t, n, r) {
                        if (n <= 1) B.default.w(this.TAG, "Flv: Invalid audio packet, missing SoundData payload!");
                        else if (!0 !== this._hasAudioFlagOverrided || !1 !== this._hasAudio) {
                            this._littleEndian;
                            var i = new DataView(e, t, n).getUint8(0),
                                o = i >>> 4;
                            if (2 == o || 10 == o) {
                                var s = 0,
                                    a = (12 & i) >>> 2;
                                if (0 <= a && a <= 4) {
                                    s = this._flvSoundRateTable[a];
                                    var l = 1 & i,
                                        u = this._audioMetadata,
                                        c = this._audioTrack;
                                    if (u || (!1 === this._hasAudio && !1 === this._hasAudioFlagOverrided && (this._hasAudio = !0, this._mediaInfo.hasAudio = !0), (u = this._audioMetadata = {}).type = "audio", u.id = c.id, u.timescale = this._timescale, u.duration = this._duration, u.audioSampleRate = s, u.channelCount = 0 == l ? 1 : 2), 10 == o) {
                                        var h, d = this._parseAACAudioData(e, t + 1, n - 1);
                                        null != d && (12 === this._mediaInfo.metadata.videocodecid || this._config.enableH264DecodeByWASM ? 1 === d.packetType && (i = d.data.length, s = new Uint8Array(7), l = new Uint8Array(i + 7), i = i + 7, s[0] = 255, s[1] = 249, s[2] = 108, s[3] = 64, s[4] = i >> 3 & 255, s[5] = (7 & i) << 5 | 31, s[6] = 252, l.set(s), l.set(d.data, 7), this._onWASMAudio({ buffer: l.buffer, timestamp: r })) : 0 === d.packetType ? (u.config && B.default.w(this.TAG, "Found another AudioSpecificConfig!"), h = d.data, u.audioSampleRate = h.samplingRate, u.channelCount = h.channelCount, u.codec = h.codec, u.originalCodec = h.originalCodec, u.config = h.config, u.refSampleDuration = 1024 / u.audioSampleRate * u.timescale, B.default.v(this.TAG, "Parsed AudioSpecificConfig"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._audioInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("audio", u), (h = this._mediaInfo).audioCodec = u.originalCodec, h.audioSampleRate = u.audioSampleRate, h.audioChannelCount = u.channelCount, h.hasVideo ? null != h.videoCodec && (h.mimeType = 'video/x-flv; codecs="' + h.videoCodec + "," + h.audioCodec + '"') : h.mimeType = 'video/x-flv; codecs="' + h.audioCodec + '"', h.isComplete() && this._onMediaInfo(h)) : 1 === d.packetType ? (f = this._timestampBase + r, h = { unit: d.data, dts: f, pts: f }, c.samples.push(h), c.length += d.data.length, this._lastAudioDTS = f) : B.default.e(this.TAG, "Flv: Unsupported AAC data type ".concat(d.packetType)))
                                    } else if (2 == o) {
                                        if (!u.codec) {
                                            var f = this._parseMP3AudioData(e, t + 1, n - 1, !0);
                                            if (null == f) return;
                                            u.audioSampleRate = f.samplingRate, u.channelCount = f.channelCount, u.codec = f.codec, u.originalCodec = f.originalCodec, u.refSampleDuration = 1152 / u.audioSampleRate * u.timescale, B.default.v(this.TAG, "Parsed MPEG Audio Frame Header"), this._audioInitialMetadataDispatched = !0, this._onTrackMetadata("audio", u);
                                            d = this._mediaInfo;
                                            d.audioCodec = u.codec, d.audioSampleRate = u.audioSampleRate, d.audioChannelCount = u.channelCount, d.audioDataRate = f.bitRate, d.hasVideo ? null != d.videoCodec && (d.mimeType = 'video/x-flv; codecs="' + d.videoCodec + "," + d.audioCodec + '"') : d.mimeType = 'video/x-flv; codecs="' + d.audioCodec + '"', d.isComplete() && this._onMediaInfo(d)
                                        }
                                        n = this._parseMP3AudioData(e, t + 1, n - 1, !1);
                                        null != n && (r = { unit: n, dts: r = this._timestampBase + r, pts: r }, c.samples.push(r), c.length += n.length)
                                    }
                                } else this._onError(A.default.FORMAT_ERROR, "Flv: Invalid audio sample rate idx: " + a)
                            } else this._onError(A.default.CODEC_UNSUPPORTED, "Flv: Unsupported audio codec idx: " + o)
                        }
                    }
                }, {
                    key: "_parseAACAudioData",
                    value: function(e, t, n) {
                        if (!(n <= 1)) {
                            var r = {},
                                i = new Uint8Array(e, t, n);
                            return r.packetType = i[0], 0 === i[0] ? r.data = this._parseAACAudioSpecificConfig(e, t + 1, n - 1) : r.data = i.subarray(1), r
                        }
                        B.default.w(this.TAG, "Flv: Invalid AAC packet, missing AACPacketType or/and Data!")
                    }
                }, {
                    key: "_parseAACAudioSpecificConfig",
                    value: function(e, t, n) {
                        var r, i = new Uint8Array(e, t, n),
                            o = null,
                            s = 0,
                            a = 0,
                            e = null,
                            s = r = i[0] >>> 3;
                        if ((a = (7 & i[0]) << 1 | i[1] >>> 7) < 0 || a >= this._mpegSamplingRates.length) this._onError(A.default.FORMAT_ERROR, "Flv: AAC invalid sampling frequency index!");
                        else {
                            t = this._mpegSamplingRates[a], n = (120 & i[1]) >>> 3;
                            if (!(n < 0 || 8 <= n)) {
                                5 === s && (e = (7 & i[1]) << 1 | i[2] >>> 7, i[2]);
                                i = self.navigator.userAgent.toLowerCase();
                                return -1 !== i.indexOf("firefox") ? e = 6 <= a ? (s = 5, o = new Array(4), a - 3) : (s = 2, o = new Array(2), a) : -1 !== i.indexOf("android") ? (s = 2, o = new Array(2), e = a) : (s = 5, e = a, o = new Array(4), 6 <= a ? e = a - 3 : 1 == n && (s = 2, o = new Array(2), e = a)), o[0] = s << 3, o[0] |= (15 & a) >>> 1, o[1] = (15 & a) << 7, o[1] |= (15 & n) << 3, 5 === s && (o[1] |= (15 & e) >>> 1, o[2] = (1 & e) << 7, o[2] |= 8, o[3] = 0), { config: o, samplingRate: t, channelCount: n, codec: "mp4a.40." + s, originalCodec: "mp4a.40." + r }
                            }
                            this._onError(A.default.FORMAT_ERROR, "Flv: AAC invalid channel configuration")
                        }
                    }
                }, {
                    key: "_parseMP3AudioData",
                    value: function(e, t, n, r) {
                        if (!(n < 4)) {
                            this._littleEndian;
                            var i = new Uint8Array(e, t, n),
                                e = null;
                            if (r) {
                                if (255 !== i[0]) return;
                                var t = i[1] >>> 3 & 3,
                                    n = (6 & i[1]) >> 1,
                                    o = (240 & i[2]) >>> 4,
                                    s = (12 & i[2]) >>> 2,
                                    r = 3 != (i[3] >>> 6 & 3) ? 2 : 1,
                                    a = 0,
                                    l = 0;
                                switch (t) {
                                    case 0:
                                        a = this._mpegAudioV25SampleRateTable[s];
                                        break;
                                    case 2:
                                        a = this._mpegAudioV20SampleRateTable[s];
                                        break;
                                    case 3:
                                        a = this._mpegAudioV10SampleRateTable[s]
                                }
                                switch (n) {
                                    case 1:
                                        o < this._mpegAudioL3BitRateTable.length && (l = this._mpegAudioL3BitRateTable[o]);
                                        break;
                                    case 2:
                                        o < this._mpegAudioL2BitRateTable.length && (l = this._mpegAudioL2BitRateTable[o]);
                                        break;
                                    case 3:
                                        o < this._mpegAudioL1BitRateTable.length && (l = this._mpegAudioL1BitRateTable[o])
                                }
                                e = { bitRate: l, samplingRate: a, channelCount: r, codec: "mp3", originalCodec: "mp3" }
                            } else e = i;
                            return e
                        }
                        B.default.w(this.TAG, "Flv: Invalid MP3 packet, header missing!")
                    }
                }, {
                    key: "_parseVideoData",
                    value: function(e, t, n, r, i) {
                        var o, s;
                        n <= 1 ? B.default.w(this.TAG, "Flv: Invalid video packet, missing VideoData payload!") : !0 === this._hasVideoFlagOverrided && !1 === this._hasVideo || (o = (240 & (s = new Uint8Array(e, t, n)[0])) >>> 4, 7 == (s = 15 & s) || 12 == s ? 7 == s ? this._parseAVCVideoPacket(e, t + 1, n - 1, r, i, o) : this._parseHEVCVideoPacket(e, t + 1, n - 1, r, i, o) : this._onError(A.default.CODEC_UNSUPPORTED, "Flv: Unsupported codec in video frame: ".concat(s)))
                    }
                }, {
                    key: "_parseHEVCVideoPacket",
                    value: function(e, t, n, r, i, o) {
                        var s, a, l;
                        n < 4 ? B.default.w(this.TAG, "Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime") : (l = this._littleEndian, a = (s = new DataView(e, t, n)).getUint8(0), l = 16777215 & s.getUint32(0, !l), 0 === a ? this._parseHEVCDecoderConfigurationRecord(e, t + 4, n - 4) : 1 === a ? this._parseHEVCVideoData(e, t + 4, n - 4, r, i, o, l) : 2 === a || this._onError(A.default.FORMAT_ERROR, "Flv: Invalid video packet type ".concat(a)))
                    }
                }, {
                    key: "_parseAVCVideoPacket",
                    value: function(e, t, n, r, i, o) {
                        var s, a, l;
                        n < 4 ? B.default.w(this.TAG, "Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime") : (l = this._littleEndian, a = (s = new DataView(e, t, n)).getUint8(0), l = 16777215 & s.getUint32(0, !l), 0 === a ? this._parseAVCDecoderConfigurationRecord(e, t + 4, n - 4) : 1 === a ? this._parseAVCVideoData(e, t + 4, n - 4, r, i, o, l) : 2 === a || this._onError(A.default.FORMAT_ERROR, "Flv: Invalid video packet type ".concat(a)))
                    }
                }, {
                    key: "_parseAVCDecoderConfigurationRecord",
                    value: function(e, t, n) {
                        if (n < 7) B.default.w(this.TAG, "Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");
                        else {
                            var r = this._videoMetadata,
                                i = this._videoTrack,
                                o = this._littleEndian,
                                s = new DataView(e, t, n);
                            r ? void 0 !== r.avcc && B.default.w(this.TAG, "Found another AVCDecoderConfigurationRecord!") : (!1 === this._hasVideo && !1 === this._hasVideoFlagOverrided && (this._hasVideo = !0, this._mediaInfo.hasVideo = !0), (r = this._videoMetadata = {}).type = "video", r.id = i.id, r.timescale = this._timescale, r.duration = this._duration);
                            var a = s.getUint8(0),
                                i = s.getUint8(1);
                            s.getUint8(2), s.getUint8(3);
                            if (1 === a && 0 !== i)
                                if (this._naluLengthSize = 1 + (3 & s.getUint8(4)), 3 === this._naluLengthSize || 4 === this._naluLengthSize) {
                                    var l = 31 & s.getUint8(5);
                                    if (0 != l) {
                                        1 < l && B.default.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: SPS Count = ".concat(l));
                                        for (var u = 6, c = 0; c < l; c++) {
                                            var h = s.getUint16(u, !o);
                                            if (u += 2, 0 !== h) {
                                                var d = new Uint8Array(e, t + u, h);
                                                u += h;
                                                var f = T.default.parseSPS(d);
                                                if (0 === c) {
                                                    if (r.codecWidth === f.codec_size.width && r.codecHeight === f.codec_size.height) return;
                                                    r.codecWidth = f.codec_size.width, r.codecHeight = f.codec_size.height, r.presentWidth = f.present_size.width, r.presentHeight = f.present_size.height, r.profile = f.profile_string, r.level = f.level_string, r.bitDepth = f.bit_depth, r.chromaFormat = f.chroma_format, r.sarRatio = f.sar_ratio, r.frameRate = f.frame_rate, !1 !== f.frame_rate.fixed && 0 !== f.frame_rate.fps_num && 0 !== f.frame_rate.fps_den || (r.frameRate = this._referenceFrameRate);
                                                    var p = r.frameRate.fps_den,
                                                        h = r.frameRate.fps_num;
                                                    r.refSampleDuration = r.timescale * (p / h);
                                                    for (var _ = d.subarray(1, 4), m = "avc1.", y = 0; y < 3; y++) {
                                                        var v = _[y].toString(16);
                                                        v.length < 2 && (v = "0" + v), m += v
                                                    }
                                                    r.codec = m;
                                                    d = this._mediaInfo;
                                                    d.width = r.codecWidth, d.height = r.codecHeight, d.fps = r.frameRate.fps, d.profile = r.profile, d.level = r.level, d.chromaFormat = f.chroma_format_string, d.sarNum = r.sarRatio.width, d.sarDen = r.sarRatio.height, d.videoCodec = m, d.hasAudio ? null != d.audioCodec && (d.mimeType = 'video/x-flv; codecs="' + d.videoCodec + "," + d.audioCodec + '"') : d.mimeType = 'video/x-flv; codecs="' + d.videoCodec + '"', d.isComplete() && this._onMediaInfo(d)
                                                }
                                            }
                                        }
                                        var g = s.getUint8(u);
                                        if (0 !== g) {
                                            1 < g && B.default.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: PPS Count = ".concat(g)), u++;
                                            for (var b = 0; b < g; b++) {
                                                var E = s.getUint16(u, !o);
                                                u += 2, 0 !== E && (u += E)
                                            }
                                            r.avcc = new Uint8Array(n), r.avcc.set(new Uint8Array(e, t, n), 0), B.default.v(this.TAG, "Parsed AVCDecoderConfigurationRecord"), this._config.enableH264DecodeByWASM ? this._onCustomFlvMessage({ flvType: S.default.VIDEO_SPS, data: r, videoEncodeType: 0, audioEncodeType: 4 }) : (this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._videoInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("video", r), this._onCustomFlvMessage({ flvType: S.default.FLV_META, data: r }))
                                        } else this._onError(A.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No PPS")
                                    } else this._onError(A.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No SPS")
                                } else this._onError(A.default.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: ".concat(this._naluLengthSize - 1));
                            else this._onError(A.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord")
                        }
                    }
                }, {
                    key: "_parseAVCVideoData",
                    value: function(e, t, n, r, i, o, s) {
                        for (var a = this._littleEndian, l = new DataView(e, t, n), u = [], c = 0, h = 0, d = this._naluLengthSize, f = this._timestampBase + r, p = 1 === o; h < n;) {
                            var _ = !1;
                            if (n <= h + 4) { var m = !0; if (h + 4 == n && (_ = !(m = 0 !== l.getUint32(h, !a))), m) { B.default.w(this.TAG, "Malformed Nalu near timestamp ".concat(f, ", offset = ").concat(h, ", dataSize = ").concat(n)); break } }
                            var y = l.getUint32(h, !a);
                            if (3 === d && (y >>>= 8), n - d < y) return void B.default.w(this.TAG, "Malformed Nalus near timestamp ".concat(f, ", NaluSize > DataSize!"));
                            var v = void 0;
                            if (_) v = function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? U(Object(n), !0).forEach(function(e) {
                                        (0, x.default)(t, e, n[e])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
                                }
                                return t
                            }({ staticFrame: !0 }, this._lastVideoUnit);
                            else {
                                var g = null;
                                if (!this._config.enableH264DecodeByWASM) {
                                    var b = h + d,
                                        E = l.getUint8(0 + b),
                                        S = l.getUint8(1 + b),
                                        T = l.getUint8(2 + b),
                                        A = l.getUint8(3 + b);
                                    if (0 === E && 0 === S && 0 === T && 1 === A) {
                                        var w = 31 & l.getUint8(b + 4);
                                        if (1 === w || 5 === w) {
                                            var k = y - 4,
                                                m = new DataView(new ArrayBuffer(d));
                                            m.setUint32(0, k, !a);
                                            _ = new Uint8Array(e, t + d + 4, k), k = new Uint8Array(_.byteLength + d);
                                            k.set(new Uint8Array(m.buffer), 0), k.set(_, d), g = k.buffer
                                        } else
                                            for (var C = b + 5, I = n; C < I - 1;) {
                                                if (E = l.getUint8(C), S = l.getUint8(C + 1), T = l.getUint8(C + 2), A = l.getUint8(C + 3), 0 === E && 0 === S && 0 === T && 1 === A && (1 === (w = 31 & l.getUint8(C + 4)) || 5 === w)) {
                                                    var D = y - (C - b) - 4,
                                                        L = new DataView(new ArrayBuffer(d));
                                                    L.setUint32(0, D, !a);
                                                    var R = new Uint8Array(e, t + C + 4, D),
                                                        D = new Uint8Array(R.byteLength + d);
                                                    D.set(new Uint8Array(L.buffer), 0), D.set(R, d), g = D.buffer;
                                                    break
                                                }
                                                0 !== A ? C += 4 : 0 !== T ? C += 3 : 0 !== S ? C += 2 : C++
                                            }
                                    }
                                }
                                k = 31 & (g ? new DataView(g, 0, g.byteLength).getUint8(d) : l.getUint8(h + d + 4));
                                5 == k && (p = !0);
                                v = { type: k, data: g ? new Uint8Array(g) : new Uint8Array(e, t + h, d + y) };
                                this._lastVideoUnit = v, this._lastVideoUnitKeyframe = p
                            }
                            u.push(v), c += v.data.byteLength, h += d + y
                        }
                        if (u.length) {
                            if (this._config.enableH264DecodeByWASM) {
                                var o = u.reduce(function(e, t) { return e + (t.staticFrame ? 0 : t.data.length - 4) }, 0),
                                    O = this._startCode,
                                    P = O.length,
                                    M = new Uint8Array(o + u.filter(function(e) { return !e.staticFrame }).length * P),
                                    N = 0;
                                return u.forEach(function(e) {
                                    e.type;
                                    var t = e.staticFrame,
                                        e = e.data;
                                    t || (M.set(O, N), M.set(e.slice(4), N + P), N += P + e.length - 4)
                                }), void this._onWASMVideo({ buffer: M.buffer, hasExtraInfo: !1, timestamp: r })
                            }
                            r = this._videoTrack, s = { units: u, length: c, isKeyframe: p, dts: f, cts: s, pts: f + s };
                            p && (s.fileposition = i), r.samples.push(s), r.length += c, this._lastVideoDTS = f
                        }
                    }
                }, {
                    key: "_parseHEVCDecoderConfigurationRecord",
                    value: function(e, t, n) {
                        if (n < 23) B.default.w(this.TAG, "Flv: Invalid HEVCDecoderConfigurationRecord, lack of data!");
                        else {
                            this._littleEndian;
                            var r = new DataView(e, t, n),
                                i = r.getUint8(0),
                                n = r.getUint8(1) >>> 6;
                            if (1 === i && 0 == n) {
                                n = 1 + (3 & r.getUint8(21));
                                if (3 == n || 4 == n) {
                                    this._naluLengthSize = n;
                                    var o = 22,
                                        s = r.getInt8(o);
                                    o++;
                                    for (var a = 0; a < s; a++) {
                                        o++;
                                        var l = r.getInt16(o);
                                        o += 2;
                                        for (var u = 0; u < l; u++) {
                                            var c = r.getInt16(o);
                                            o += 2;
                                            var h = (126 & r.getUint8(o)) >> 1,
                                                d = new Uint8Array(e, t + o, c);
                                            33 == h && (d = new p.default(d).ParseSequenceParameterSet(), this._onCustomFlvMessage({ flvType: S.default.VIDEO_SPS, data: d, videoEncodeType: 1, audioEncodeType: 4 })), o += c
                                        }
                                    }
                                } else this._onError(A.default.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: ".concat(n - 1))
                            } else this._onError(A.default.FORMAT_ERROR, "Flv: Invalid HEVCDecoderConfigurationRecord")
                        }
                    }
                }, {
                    key: "_parseHEVCVideoData",
                    value: function(e, t, n, r, i, o) {
                        for (var s, a, l, u, c = this._littleEndian, h = new DataView(e, t, n), d = [], f = 0, p = this._naluLengthSize, _ = this._timestampBase + r; f < n;) {
                            if (n <= f + 4) { B.default.w(this.TAG, "Malformed Nalu near timestamp ".concat(_, ", offset = ").concat(f, ", dataSize = ").concat(n)); break }
                            var m = h.getUint32(f, !c);
                            if (3 === p && (m >>>= 8), n - p < m) return void B.default.w(this.TAG, "Malformed Nalus near timestamp ".concat(_, ", NaluSize > DataSize!"));
                            var y = (126 & h.getUint8(f + p)) >> 1,
                                v = new Uint8Array(e, t + f + p, m),
                                y = { type: y, data: v };
                            d.push(y), v.byteLength, f += p + m
                        }
                        d.length && (o = d.reduce(function(e, t) { return e + t.data.length }, 0), s = this._startCode, a = s.length, l = new Uint8Array(o + d.length * a), u = 0, d.forEach(function(e) {
                            e.type;
                            e = e.data;
                            l.set(s, u), l.set(e, u + a), u += a + e.length
                        }), this._onWASMVideo({ buffer: l.buffer, hasExtraInfo: !1, timestamp: r }))
                    }
                }], [{
                    key: "probe",
                    value: function(e) {
                        var t = new Uint8Array(e),
                            n = { match: !1 };
                        if (70 !== t[0] || 76 !== t[1] || 86 !== t[2] || 1 !== t[3]) return n;
                        var r = (4 & t[4]) >>> 2 != 0,
                            i = 0 != (1 & t[4]),
                            t = (e = t)[t = 5] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
                        return t < 9 ? n : { match: !0, consumed: t, dataOffset: t, hasAudioTrack: r, hasVideoTrack: i }
                    }
                }]), f
            }();
            n.default = e
        }, { "../core/features.js": 33, "../core/media-info.js": 34, "../utils/exception.js": 70, "../utils/flvTranslateTypes.js": 71, "../utils/logger.js": 72, "../utils/string-convert": 75, "./amf-parser.js": 42, "./demux-errors.js": 43, "./h265NALBitStream": 46, "./sps-parser.js": 47, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/defineProperty": 10, "@babel/runtime/helpers/interopRequireDefault": 14, "@babel/runtime/helpers/typeof": 21 }],
        46: [function(t, e, i) {
            (function(c) {
                (function() {
                    "use strict";
                    var e = t("@babel/runtime/helpers/interopRequireDefault");
                    Object.defineProperty(i, "__esModule", { value: !0 }), i.default = void 0;
                    var n = e(t("@babel/runtime/helpers/classCallCheck")),
                        r = e(t("@babel/runtime/helpers/createClass")),
                        e = function() {
                            function t(e) {
                                (0, n.default)(this, t), this.m_data = null, this.m_len = 0, this.m_idx = 0, this.m_bits = 0, this.m_byte = 0, this.m_zeros = 0, this.Init(e, e.length)
                            }
                            return (0, r.default)(t, [{ key: "Init", value: function(e, t) { this.m_data = e, this.m_len = t, this.m_idx = 0, this.m_bits = 0, this.m_byte = 0, this.m_zeros = 0 } }, { key: "GetBYTE", value: function() { if (this.m_idx >= this.m_len) return 0; var e = this.m_data[this.m_idx++]; return 0 === e ? (this.m_zeros++, this.m_idx < this.m_len && 2 == this.m_zeros && 3 === this.m_data[this.m_idx] && (this.m_idx++, this.m_zeros = 0)) : this.m_zeros = 0, e } }, { key: "GetBit", value: function() { return 0 == this.m_bits && (this.m_byte = this.GetBYTE(), this.m_bits = 8), this.m_bits--, this.m_byte >> this.m_bits & 1 } }, { key: "GetWord", value: function(e) { for (var t = 0; 0 < e;) t <<= 1, t |= this.GetBit(), e--; return t } }, { key: "GetUE", value: function() { for (var e = 0; this.m_idx < this.m_len && 0 == this.GetBit();) e++; return this.GetWord(e) + ((1 << e) - 1) } }, {
                                key: "GetSE",
                                value: function() {
                                    var e = this.GetUE(),
                                        t = e + 1 >> 1;
                                    return 1 & e || (t = -t), t
                                }
                            }, {
                                key: "ParseSequenceParameterSet",
                                value: function() {
                                    var e = {};
                                    if (this.m_data.length < 20) return !1;
                                    var t = this;
                                    t.GetWord(4);
                                    var n = t.GetWord(3);
                                    if (6 < n) return !1;
                                    t.GetWord(1), t.GetWord(2), t.GetWord(1), e.profile = t.GetWord(5), t.GetWord(32), t.GetWord(1), t.GetWord(1), t.GetWord(1), t.GetWord(1), t.GetWord(44), e.level = t.GetWord(8);
                                    for (var r = c.alloc(6), i = c.alloc(6), o = 0; o < n; o++) r[o] = t.GetWord(1), i[o] = t.GetWord(1);
                                    if (0 < n)
                                        for (var s = n; s < 8; s++) t.GetWord(2);
                                    for (var a = 0; a < n; a++) r[a] && (t.GetWord(2), t.GetWord(1), t.GetWord(5), t.GetWord(32), t.GetWord(1), t.GetWord(1), t.GetWord(1), t.GetWord(1), t.GetWord(44)), i[a] && t.GetWord(8);
                                    var l = t.GetUE();
                                    if (15 < l) return !1;
                                    var u = t.GetUE();
                                    return !(3 < l) && (3 == u && t.GetWord(1), e.codecWidth = t.GetUE(), e.codecHeight = t.GetUE(), t.GetWord(1) && (t.GetUE(), t.GetUE(), t.GetUE(), t.GetUE()), t.GetUE() === t.GetUE() && e)
                                }
                            }]), t
                        }();
                    i.default = e
                }).call(this)
            }).call(this, t("buffer").Buffer)
        }, { "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14, buffer: 26 }],
        47: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                C = r(e("./exp-golomb.js")),
                e = function() {
                    function k() {
                        (0, i.default)(this, k)
                    }
                    return (0, o.default)(k, null, [{ key: "_ebsp2rbsp", value: function(e) { for (var t = e, n = t.byteLength, r = new Uint8Array(n), i = 0, o = 0; o < n; o++) 2 <= o && 3 === t[o] && 0 === t[o - 1] && 0 === t[o - 2] || (r[i] = t[o], i++); return new Uint8Array(r.buffer, 0, i) } }, {
                        key: "parseSPS",
                        value: function(e) {
                            var t = k._ebsp2rbsp(e),
                                n = new C.default(t);
                            n.readByte();
                            var r = n.readByte();
                            n.readByte();
                            var i = n.readByte();
                            n.readUEG();
                            var o = k.getProfileString(r),
                                s = k.getLevelString(i),
                                a = 1,
                                l = 420,
                                u = 8;
                            if ((100 === r || 110 === r || 122 === r || 244 === r || 44 === r || 83 === r || 86 === r || 118 === r || 128 === r || 138 === r || 144 === r) && (3 === (a = n.readUEG()) && n.readBits(1), a <= 3 && (l = [0, 420, 422, 444][a]), u = n.readUEG() + 8, n.readUEG(), n.readBits(1), n.readBool()))
                                for (var c = 3 !== a ? 8 : 12, h = 0; h < c; h++) n.readBool() && k._skipScalingList(n, h < 6 ? 16 : 64);
                            n.readUEG();
                            var d = n.readUEG();
                            if (0 === d) n.readUEG();
                            else if (1 === d) { n.readBits(1), n.readSEG(), n.readSEG(); for (var f = n.readUEG(), p = 0; p < f; p++) n.readSEG() }
                            n.readUEG(), n.readBits(1);
                            var _ = n.readUEG(),
                                m = n.readUEG(),
                                y = n.readBits(1);
                            0 === y && n.readBits(1), n.readBits(1);
                            var v = 0,
                                g = 0,
                                b = 0,
                                E = 0;
                            n.readBool() && (v = n.readUEG(), g = n.readUEG(), b = n.readUEG(), E = n.readUEG());
                            var S = 1,
                                e = 1,
                                t = 0,
                                i = !0,
                                r = 0,
                                d = 0;
                            n.readBool() && (n.readBool() && (0 < (T = n.readByte()) && T < 16 ? (S = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2][T - 1], e = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1][T - 1]) : 255 === T && (S = n.readByte() << 8 | n.readByte(), e = n.readByte() << 8 | n.readByte())), n.readBool() && n.readBool(), n.readBool() && (n.readBits(4), n.readBool() && n.readBits(24)), n.readBool() && (n.readUEG(), n.readUEG()), n.readBool() && (w = n.readBits(32), A = n.readBits(32), i = n.readBool(), t = (r = A) / (d = 2 * w)));
                            var T = 1;
                            1 === S && 1 === e || (T = S / e);
                            var A = 0,
                                w = 0;
                            w = 0 === a ? (A = 1, 2 - y) : (A = 3 === a ? 1 : 2, (1 === a ? 2 : 1) * (2 - y));
                            _ = 16 * (_ + 1), y = 16 * (m + 1) * (2 - y);
                            _ -= (v + g) * A, y -= (b + E) * w;
                            T = Math.ceil(_ * T);
                            return n.destroy(), n = null, { profile_string: o, level_string: s, bit_depth: u, chroma_format: l, chroma_format_string: k.getChromaFormatString(l), frame_rate: { fixed: i, fps: t, fps_den: d, fps_num: r }, sar_ratio: { width: S, height: e }, codec_size: { width: _, height: y }, present_size: { width: T, height: y } }
                        }
                    }, { key: "_skipScalingList", value: function(e, t) { for (var n = 8, r = 8, i = 0; i < t; i++) 0 !== r && (r = (n + e.readSEG() + 256) % 256), n = 0 === r ? n : r } }, {
                        key: "getProfileString",
                        value: function(e) {
                            switch (e) {
                                case 66:
                                    return "Baseline";
                                case 77:
                                    return "Main";
                                case 88:
                                    return "Extended";
                                case 100:
                                    return "High";
                                case 110:
                                    return "High10";
                                case 122:
                                    return "High422";
                                case 244:
                                    return "High444";
                                default:
                                    return "Unknown"
                            }
                        }
                    }, { key: "getLevelString", value: function(e) { return (e / 10).toFixed(1) } }, {
                        key: "getChromaFormatString",
                        value: function(e) {
                            switch (e) {
                                case 420:
                                    return "4:2:0";
                                case 422:
                                    return "4:2:2";
                                case 444:
                                    return "4:4:4";
                                default:
                                    return "Unknown"
                            }
                        }
                    }]), k
                }();
            n.default = e
        }, { "./exp-golomb.js": 44, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        48: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                s = r(e("events")),
                f = r(e("../utils/logger.js"));
            self.URL = self.URL || self.webkitURL;
            var a = self.navigator;
            void 0 === a.mediaDevices && (a.mediaDevices = {}), void 0 === a.mediaDevices.getUserMedia && (a.mediaDevices.getUserMedia = function(n) { var r = self.navigator.getUserMedia || self.navigator.webkitGetUserMedia || self.navigator.mozGetUserMedia || self.navigator.msGetUserMedia; return r ? new Promise(function(e, t) { r.call(a, n, e, t) }) : Promise.reject(new Error("getUserMedia is not implemented in this browser")) });
            var l = 0,
                e = function() {
                    function r(e) {
                        (0, i.default)(this, r), this.TAG = "AudioTalk", this._config = Object.assign({ uploadUrl: "", sampleBits: 16, sampleRate: 8e3 }, e), this._emitter = new s.default, this._audioContext = new(self.webkitAudioContext || self.AudioContext), this._audioRecorder = null, this._audioInputStream = null, this._audioInputBufferSize = 4096, this._audioInputChannels = 1, this._audioOutputChannels = 1, this._uploadBuffer = null, this._inputSampleRate = this._audioContext.sampleRate, this._inputSampleBits = 16, this._status = l, this.e = { _onAudioProcess: this._onAudioProcess.bind(this) }, f.default.i(this.TAG, "this._inputSampleRate:".concat(this._inputSampleRate, ". this._config.sampleRate:").concat(this._config.sampleRate))
                    }
                    return (0, o.default)(r, [{ key: "destroy", value: function() { 2 == this._status && this._throwError("stop audio talk first!"), this._uploadBuffer = null, this._audioContext && (this._audioContext.close(), this._audioContext = null), this._audioInputStream && (this._audioInputStream.disconnect(), this._audioInputStream = null), this._audioRecorder && (this._audioRecorder.removeEventListener("audioprocess", this.e._onAudioProcess), this._audioRecorder.disconnect(), this._audioRecorder = null), this.e = null, this._status = l, this._emitter.removeAllListeners(), this._emitter = null } }, { key: "on", value: function(e, t) { this._emitter.on(e, t) } }, {
                        key: "start",
                        value: function() {
                            if (1 !== this._status) return this._throwError("must be init audio talk!");
                            this._audioInputStream.connect(this._audioRecorder), this._audioRecorder.addEventListener("audioprocess", this.e._onAudioProcess, !1), this._audioRecorder.connect(this._audioContext.destination), this._status = 2
                        }
                    }, { key: "stop", value: function() { 2 === this._status && (this._uploadBuffer = null, this._audioRecorder.removeEventListener("audioprocess", this.e._onAudioProcess), this._audioRecorder.disconnect(), this._status = 1, this._emitter.emit("upload")) } }, { key: "init", value: function(e) { this._status === l && this._openMicroPhone(e) } }, {
                        key: "_openMicroPhone",
                        value: function(t) {
                            var n = this;
                            if (!r.isSupport()) return this._throwError("当前浏览器不支持录音功能。"), void t({ code: "NOT_SUPPORTED_ERROR", name: "", message: "" });
                            self.navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then(function(e) { n._audioInputStream = n._audioContext.createMediaStreamSource(e), n._audioRecorder = (n._audioContext.createScriptProcessor || n._audioContext.createJavaScriptNode).apply(n._audioContext, [n._audioInputBufferSize, n._audioInputChannels, n._audioOutputChannels]), n._status = 1, t && t() }).catch(function(e) {
                                switch (console.log(e.name + ": " + e.message), t && t(e), e.code || e.name) {
                                    case "PERMISSION_DENIED":
                                    case "PermissionDeniedError":
                                        n._throwError("用户拒绝提供信息。");
                                        break;
                                    case "NOT_SUPPORTED_ERROR":
                                    case "NotSupportedError":
                                        n._throwError("浏览器不支持硬件设备。");
                                        break;
                                    case "MANDATORY_UNSATISFIED_ERROR":
                                    case "MandatoryUnsatisfiedError":
                                        n._throwError("无法发现指定的硬件设备。");
                                        break;
                                    default:
                                        n._throwError("无法打开麦克风。异常信息:" + (e.code || e.name))
                                }
                            })
                        }
                    }, {
                        key: "_onAudioProcess",
                        value: function(e) {
                            var t = Date.now();
                            f.default.i(this.TAG, "_onAudioProcess received data!");
                            for (var n = e.inputBuffer.getChannelData(0), n = this._compress(n), r = new DataView(new ArrayBuffer(2 * n.length)), i = 0, o = 0; i < n.length; i++, o += 2) {
                                var s = Math.max(-1, Math.min(1, n[i]));
                                r.setInt16(o, s < 0 ? 32768 * s : 32767 * s, !0)
                            }
                            this._upload(r.buffer), f.default.i(this.TAG, "_onAudioProcess  cost time:".concat(Date.now() - t, "ms"));
                            for (var a = 0, l = 0; l < n.length; l++) a < n[l] && (a = n[l]);
                            this._emitter.emit("activityLevel", Math.round(100 * a))
                        }
                    }, { key: "_throwError", value: function(e) { f.default.e(this.TAG, e) } }, {
                        key: "_upload",
                        value: function(e) {
                            var t, n = new Uint8Array(e);
                            this._uploadBuffer ? (e = (t = this._uploadBuffer.length) + n.length, (e = new Uint8Array(e)).set(this._uploadBuffer, 0), e.set(n, t), this._uploadBuffer = e) : this._uploadBuffer = n, 4800 <= this._uploadBuffer.length && (this._emitter.emit("upload", this._uploadBuffer.slice(0, 4800).buffer), this._uploadBuffer.length ? this._uploadBuffer = this._uploadBuffer.slice(4800) : this._uploadBuffer = null)
                        }
                    }, { key: "_compress", value: function(e) { Date.now(); for (var t = parseInt(this._inputSampleRate / this._config.sampleRate), n = e.length / t, r = new Float32Array(n), i = 0, o = 0; i < n;) r[i] = e[o], o += t, i++; return r } }, {
                        key: "_toWavBlob",
                        value: function() {
                            var e = this._compress(),
                                t = Date.now(),
                                n = Math.min(this._inputSampleRate, this._config.sampleRate),
                                r = Math.min(this._inputSampleBits, this._config.sampleBits),
                                i = e.length * (r / 8),
                                o = new ArrayBuffer(44 + i),
                                s = new DataView(o),
                                a = this._audioOutputChannels,
                                l = 0,
                                o = function(e) { for (var t = 0; t < e.length; t++) s.setUint8(l + t, e.charCodeAt(t)) };
                            if (o("RIFF"), l += 4, s.setUint32(l, 36 + i, !0), l += 4, o("WAVE"), l += 4, o("fmt "), l += 4, s.setUint32(l, 16, !0), l += 4, s.setUint16(l, 1, !0), l += 2, s.setUint16(l, a, !0), l += 2, s.setUint32(l, n, !0), l += 4, s.setUint32(l, a * n * (r / 8), !0), l += 4, s.setUint16(l, a * (r / 8), !0), l += 2, s.setUint16(l, r, !0), l += 2, o("data"), l += 4, s.setUint32(l, i, !0), l += 4, 8 === r)
                                for (var u = 0; u < e.length; u++, l++) {
                                    var c = Math.max(-1, Math.min(1, e[u])),
                                        c = c < 0 ? 32768 * c : 32767 * c,
                                        c = parseInt(255 / (65535 / (32768 + c)));
                                    s.setInt8(l, c, !0)
                                } else
                                    for (var h = 0; h < e.length; h++, l += 2) {
                                        var d = Math.max(-1, Math.min(1, e[h]));
                                        s.setInt16(l, d < 0 ? 32768 * d : 32767 * d, !0)
                                    }
                            r = new Blob([s], { type: "audio/wav" });
                            return f.default.i(this.TAG, "format audio data to wav take ".concat(Date.now() - t, " ms")), r
                        }
                    }, {
                        key: "play",
                        value: function() {
                            this.stop();
                            var e = this._toWavBlob(),
                                t = new self.Audio;
                            t.src = URL.createObjectURL(e), t.play()
                        }
                    }], [{ key: "isSupport", value: function() { return !(!a.mediaDevices.getUserMedia || !self.webkitAudioContext && !self.AudioContext) } }]), r
                }();
            n.default = e
        }, { "../utils/logger.js": 72, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14, events: 30 }],
        49: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                s = r(e("../utils/browser")),
                e = function() {
                    function n(e) {
                        (0, i.default)(this, n);
                        var t = this,
                            e = t._dom = "string" == typeof e ? document.querySelector(e) : e;
                        if (!e) throw "lost dom element!";
                        e.style.cursor = "move", t._domWidth = e.offsetWidth, t._domHeight = e.offsetHeight, t._lastPoint = null, t._scaleValue = 1, t._translateX = 0, t._translateY = 0, t._moveOutTimer = -1, t._isCanMoving = !1;
                        e = this._isMobile = s.default.mobile;
                        t._touchStartEvent = e ? "touchstart" : "mousedown", t._touchMoveEvent = e ? "touchmove" : "mousemove", t._touchEndEvent = e ? "touchend" : "mouseup", t.e = { _onMouseDown: this._onMouseDown.bind(t), _onMouseMove: this._onMouseMove.bind(t), _onMouseUp: this._onMouseUp.bind(t) }, t._initListener()
                    }
                    return (0, o.default)(n, [{
                        key: "destroy",
                        value: function() {
                            var e = this,
                                t = e._dom,
                                n = e.e;
                            t.removeEventListener(e._touchStartEvent, n._onMouseDown), t.removeEventListener(e._touchMoveEvent, n._onMouseMove), t.removeEventListener(e._touchEndEvent, n._onMouseUp), t = e._dom = null, e.e = null
                        }
                    }, {
                        key: "_initListener",
                        value: function() {
                            var e = this,
                                t = e._dom,
                                n = e.e;
                            t.addEventListener(e._touchStartEvent, n._onMouseDown, !1), t.addEventListener(e._touchMoveEvent, n._onMouseMove, { passive: !1 }), t.addEventListener(e._touchEndEvent, n._onMouseUp, !1)
                        }
                    }, { key: "_onMouseDown", value: function(e) { this._isMobile && (e = e.touches[0]), this._lastPoint = { x: e.screenX, y: e.screenY }, this._isCanMoving = !0 } }, {
                        key: "_onMouseMove",
                        value: function(e) {
                            var t, n, r, i, o, s, a, l = this,
                                u = l._scaleValue;
                            l._isCanMoving && 1 !== u && (l._isMobile && (e = e.touches[0]), s = l._lastPoint, t = e.screenX, n = e.screenY, r = t - s.x, i = n - s.y, o = r / (l._domWidth * u), a = i / (l._domHeight * u), s = (e = l._translateX) + o, a = (o = l._translateY) + a, u = (u - 1) / 2 / u, 0 < r ? u < s && (s = u) : s < -1 * u && (s = -1 * u), 0 < i ? u < a && (a = u) : a < -1 * u && (a = -1 * u), e === s && o === a || (l._translateX = s, l._translateY = a, l.zoom(), clearTimeout(l._moveOutTimer), l._moveOutTimer = setTimeout(function() { l._isCanMoving = !1 }, 500), l._lastPoint = { x: t, y: n }))
                        }
                    }, { key: "_onMouseUp", value: function() { this._isCanMoving = !1, this._lastPoint = null } }, {
                        key: "zoom",
                        value: function(e) {
                            var t, r = this,
                                n = this,
                                i = n._scaleValue,
                                o = n._translateX,
                                s = n._translateY,
                                a = "",
                                l = n._dom.style;
                            if (e) {
                                if (e < 1 || 5 < e || e === i) return;
                                e < i && ((t = (e - 1) / 2 / e) < o ? o = t : o < -1 * t && (o = -1 * t), t < s ? s = t : s < -1 * t && (s = -1 * t), n._translateX = o, n._translateY = s), n._scaleValue = i = e
                            }
                            0 === o && 0 === s || (a = " translate(" + 100 * o + "%," + 100 * s + "%)"), a = "scale(" + i + "," + i + ")" + a, ["", "ms", "webkit", "o", "moz"].forEach(function(e) {
                                l[e ? e + "Transform" : "transform"] = a;
                                var t = Math.floor(255 * Math.random()),
                                    n = Math.floor(255 * Math.random()),
                                    e = Math.floor(255 * Math.random());
                                r._dom.querySelector(".jssdk-player-wasm-play").style.backgroundColor = "rgba(".concat(t, ",").concat(n, ",").concat(e, ",0)")
                            })
                        }
                    }]), n
                }();
            n.default = e
        }, { "../utils/browser": 69, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        50: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/typeof")),
                o = r(e("./utils/polyfill.js")),
                s = r(e("./utils/flvTranslateTypes.js")),
                a = r(e("./core/features.js")),
                l = r(e("./player/flv-player.js")),
                u = r(e("./player/native-player.js")),
                c = r(e("./player/player-events.js")),
                h = e("./player/player-errors.js"),
                d = r(e("./utils/logging-control.js")),
                f = e("./utils/exception.js"),
                p = r(e("./utils/browser.js")),
                e = r(e("./extra/zoomDomElement.js"));
            o.default.install();
            o = {};
            o.Features = a.default, o.createPlayer = function(e, t, n) { if (null == e || "object" !== (0, i.default)(e)) throw new f.InvalidArgumentException("MediaDataSource must be an javascript object!"); if (!Object.prototype.hasOwnProperty.call(e, "type")) throw new f.InvalidArgumentException("MediaDataSource must has type field to indicate video file type!"); return "flv" !== e.type ? new u.default(e, t) : new l.default(e, t, n) }, o.isSupported = function() { return a.default.supportMSEH264Playback() }, o.getFeatureList = function() { return a.default.getFeatureList() }, o.Browser = p.default, o.ZoomDomElement = e.default, o.Events = c.default, o.FlvTranslateTypes = s.default, o.ErrorTypes = h.ErrorTypes, o.ErrorDetails = h.ErrorDetails, o.FlvPlayer = l.default, o.NativePlayer = u.default, o.LoggingControl = d.default, Object.defineProperty(o, "version", { enumerable: !0, get: function() { return "__VERSION__" } }), n.default = o
        }, { "./core/features.js": 33, "./extra/zoomDomElement.js": 49, "./player/flv-player.js": 61, "./player/native-player.js": 62, "./player/player-errors.js": 63, "./player/player-events.js": 64, "./utils/browser.js": 69, "./utils/exception.js": 70, "./utils/flvTranslateTypes.js": 71, "./utils/logging-control.js": 73, "./utils/polyfill.js": 74, "@babel/runtime/helpers/interopRequireDefault": 14, "@babel/runtime/helpers/typeof": 21 }],
        51: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var u = r(e("@babel/runtime/helpers/typeof")),
                o = r(e("@babel/runtime/helpers/classCallCheck")),
                s = r(e("@babel/runtime/helpers/createClass")),
                a = r(e("@babel/runtime/helpers/get")),
                l = r(e("@babel/runtime/helpers/inherits")),
                i = r(e("@babel/runtime/helpers/possibleConstructorReturn")),
                c = r(e("@babel/runtime/helpers/getPrototypeOf")),
                h = (r(e("../utils/logger.js")), r(e("../utils/browser.js"))),
                d = e("./loader.js"),
                f = e("../utils/exception.js");

            function p(n) { var r = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t = (0, c.default)(n); return t = r ? (e = (0, c.default)(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), (0, i.default)(this, t) } }
            e = function(e) {
                (0, l.default)(i, e);
                var r = p(i);

                function i(e, t) { var n; return (0, o.default)(this, i), (n = r.call(this, "fetch-stream-loader")).TAG = "FetchStreamLoader", n._seekHandler = e, n._config = t, n._needStash = !0, n._requestAbort = !1, n._contentLength = null, n._receivedLength = 0, n }
                return (0, s.default)(i, [{ key: "destroy", value: function() { this.isWorking() && this.abort(), (0, a.default)((0, c.default)(i.prototype), "destroy", this).call(this) } }, {
                    key: "open",
                    value: function(e, t) {
                        var n = this;
                        this._dataSource = e, this._range = t;
                        var r = e.url;
                        this._config.reuseRedirectedURL && null != e.redirectedURL && (r = e.redirectedURL);
                        var i = this._seekHandler.getConfig(r, t),
                            o = new self.Headers;
                        if ("object" === (0, u.default)(i.headers)) { var s, a = i.headers; for (s in a) Object.prototype.hasOwnProperty.call(a, s) && o.append(s, a[s]) }
                        o.append("Content-Type", "application/x-www-form-urlencoded");
                        var l = { method: -1 < i.url.indexOf(".flv") ? "GET" : "POST", headers: o, mode: "cors", cache: "default", referrerPolicy: "no-referrer-when-downgrade" };
                        !1 === e.cors && (l.mode = "same-origin"), e.withCredentials && (l.credentials = "include"), e.referrerPolicy && (l.referrerPolicy = e.referrerPolicy), this._status = d.LoaderStatus.kConnecting;
                        r = i.url;
                        r.indexOf(".flv") < 0 && (t = r.indexOf("?"), e = r.substring(t + 1), r = r.substring(0, t), l.body = e), self.fetch(r, l).then(function(e) {
                            if (n._requestAbort) return n._requestAbort = !1, void(n._status = d.LoaderStatus.kIdle);
                            if (e.ok && 200 <= e.status && e.status <= 299) {
                                e.url !== i.url && n._onURLRedirect && (t = n._seekHandler.removeURLParameters(e.url), n._onURLRedirect(t));
                                var t = e.headers.get("Content-Length");
                                null != t && (n._contentLength = parseInt(t), 0 !== n._contentLength && n._onContentLengthKnown && n._onContentLengthKnown(n._contentLength));
                                t = e.headers.get("Content-Type").split(",");
                                return n.onHeaderArrival && n.onHeaderArrival({ startTime: e.headers.get("starttime") || (t[3] || "").trim(), endTime: e.headers.get("endtime") || (t[4] || "").trim(), curRawId: e.headers.get("currawid") || (t[1] || "").trim(), nextRawId: e.headers.get("nextrawid") || (t[2] || "").trim() }), n._pump.call(n, e.body.getReader(), e)
                            }
                            if (n._status = d.LoaderStatus.kError, !n._onError) throw new f.RuntimeException("FetchStreamLoader: Http code invalid, " + e.status + " " + e.statusText);
                            n._onError(d.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: e.status, msg: e.statusText })
                        }).catch(function(e) {
                            if (n._status = d.LoaderStatus.kError, !n._onError) throw e;
                            n._onError(d.LoaderErrors.EXCEPTION, { code: -1, msg: e.message })
                        })
                    }
                }, { key: "abort", value: function() { this._requestAbort = !0 } }, {
                    key: "_pump",
                    value: function(n, r) {
                        var i = this;
                        return n.read().then(function(e) {
                            if (e.done) i._status = d.LoaderStatus.kComplete, i._onComplete && i._onComplete(i._range.from, i._range.from + i._receivedLength - 1);
                            else {
                                if (!0 === i._requestAbort) return i._requestAbort = !1, i._status = d.LoaderStatus.kComplete, n.cancel();
                                i._status = d.LoaderStatus.kBuffering;
                                var t = e.value.buffer,
                                    e = i._range.from + i._receivedLength;
                                i._receivedLength += t.byteLength, i._onDataArrival && i._onDataArrival(t, e, i._receivedLength), i._pump(n, r)
                            }
                        }).catch(function(e) {
                            if (11 !== e.code || !h.default.msedge) {
                                i._status = d.LoaderStatus.kError;
                                var t = 0,
                                    n = null,
                                    n = 19 !== e.code && "network error" !== e.message || !(null === i._contentLength || null !== i._contentLength && i._receivedLength < i._contentLength) ? (t = d.LoaderErrors.EXCEPTION, { code: e.code, msg: e.message }) : (t = d.LoaderErrors.EARLY_EOF, { code: e.code, msg: "Fetch stream meet Early-EOF" });
                                if (!i._onError) throw new f.RuntimeException(n.msg);
                                i._onError(t, n)
                            }
                        })
                    }
                }], [{
                    key: "isSupported",
                    value: function() {
                        try {
                            var e = h.default.msedge && 15048 <= h.default.version.minor,
                                e = !h.default.msedge || e;
                            return self.fetch && self.ReadableStream && e
                        } catch (e) { return !1 }
                    }
                }]), i
            }(d.BaseLoader);
            n.default = e
        }, { "../utils/browser.js": 69, "../utils/exception.js": 70, "../utils/logger.js": 72, "./loader.js": 53, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/get": 11, "@babel/runtime/helpers/getPrototypeOf": 12, "@babel/runtime/helpers/inherits": 13, "@babel/runtime/helpers/interopRequireDefault": 14, "@babel/runtime/helpers/possibleConstructorReturn": 17, "@babel/runtime/helpers/typeof": 21 }],
        52: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                s = r(e("../utils/logger.js")),
                a = r(e("./speed-sampler.js")),
                l = e("./loader.js"),
                u = r(e("./fetch-stream-loader.js")),
                c = r(e("./xhr-moz-chunked-loader.js")),
                h = (r(e("./xhr-msstream-loader.js")), r(e("./xhr-range-loader.js"))),
                d = r(e("./websocket-loader.js")),
                f = r(e("./range-seek-handler.js")),
                p = r(e("./param-seek-handler.js")),
                _ = e("../utils/exception.js"),
                e = function() {
                    function r(e, t, n) {
                        (0, i.default)(this, r), this.TAG = "IOController", this._config = t, this._extraData = n, this._stashInitialSize = 393216, null != t.stashInitialSize && 0 < t.stashInitialSize && (this._stashInitialSize = t.stashInitialSize), this._stashUsed = 0, this._stashSize = this._stashInitialSize, this._bufferSize = 3145728, this._stashBuffer = new ArrayBuffer(this._bufferSize), this._stashByteStart = 0, !(this._enableStash = !0) === t.enableStashBuffer && (this._enableStash = !1), this._loader = null, this._loaderClass = null, this._seekHandler = null, this._dataSource = e, this._isWebSocketURL = /wss?:\/\/(.+?)/.test(e.url), this._refTotalLength = e.filesize || null, this._totalLength = this._refTotalLength, this._fullRequestFlag = !1, this._currentRange = null, this._redirectedURL = null, this._speedNormalized = 0, this._speedSampler = new a.default, this._speedNormalizeList = [32, 64, 128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096], this._isEarlyEofReconnecting = !1, this._paused = !1, this._resumeFrom = 0, this._onDataArrival = null, this._onResponseMessage = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._selectSeekHandler(), this._selectLoader(), this._createLoader()
                    }
                    return (0, o.default)(r, [{ key: "destroy", value: function() { this._loader.isWorking() && this._loader.abort(), this._loader.destroy(), this._loader = null, this._loaderClass = null, this._dataSource = null, this._stashBuffer = null, this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0, this._currentRange = null, this._speedSampler = null, this._isEarlyEofReconnecting = !1, this._onDataArrival = null, this._onResponseMessage = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._extraData = null } }, { key: "isWorking", value: function() { return this._loader && this._loader.isWorking() && !this._paused } }, { key: "isPaused", value: function() { return this._paused } }, { key: "status", get: function() { return this._loader.status } }, { key: "extraData", get: function() { return this._extraData }, set: function(e) { this._extraData = e } }, { key: "onDataArrival", get: function() { return this._onDataArrival }, set: function(e) { this._onDataArrival = e } }, { key: "onResponseMessage", get: function() { return this._onResponseMessage }, set: function(e) { this._onResponseMessage = e } }, { key: "onHeaderArrival", get: function() { return this._onHeaderArrival }, set: function(e) { this._onHeaderArrival = e } }, { key: "onSeeked", get: function() { return this._onSeeked }, set: function(e) { this._onSeeked = e } }, { key: "onError", get: function() { return this._onError }, set: function(e) { this._onError = e } }, { key: "onComplete", get: function() { return this._onComplete }, set: function(e) { this._onComplete = e } }, { key: "onRedirect", get: function() { return this._onRedirect }, set: function(e) { this._onRedirect = e } }, { key: "onRecoveredEarlyEof", get: function() { return this._onRecoveredEarlyEof }, set: function(e) { this._onRecoveredEarlyEof = e } }, { key: "currentURL", get: function() { return this._dataSource.url } }, { key: "hasRedirect", get: function() { return null != this._redirectedURL || null != this._dataSource.redirectedURL } }, { key: "currentRedirectedURL", get: function() { return this._redirectedURL || this._dataSource.redirectedURL } }, { key: "currentSpeed", get: function() { return this._loaderClass === h.default ? this._loader.currentSpeed : this._speedSampler.lastSecondKBps } }, { key: "loaderType", get: function() { return this._loader.type } }, {
                        key: "_selectSeekHandler",
                        value: function() {
                            var e = this._config;
                            if ("range" === e.seekType) this._seekHandler = new f.default(this._config.rangeLoadZeroStart);
                            else if ("param" === e.seekType) {
                                var t = e.seekParamStart || "bstart",
                                    n = e.seekParamEnd || "bend";
                                this._seekHandler = new p.default(t, n)
                            } else {
                                if ("custom" !== e.seekType) throw new _.InvalidArgumentException("Invalid seekType in config: ".concat(e.seekType));
                                if ("function" != typeof e.customSeekHandler) throw new _.InvalidArgumentException("Custom seekType specified in config but invalid customSeekHandler!");
                                this._seekHandler = new e.customSeekHandler
                            }
                        }
                    }, {
                        key: "_selectLoader",
                        value: function() {
                            if (this._isWebSocketURL) this._loaderClass = d.default;
                            else if (u.default.isSupported()) this._loaderClass = u.default;
                            else if (c.default.isSupported()) this._loaderClass = c.default;
                            else {
                                if (!h.default.isSupported()) throw new _.RuntimeException("Your browser doesn't support xhr with arraybuffer responseType!");
                                this._loaderClass = h.default
                            }
                        }
                    }, { key: "_createLoader", value: function() { this._loader = new this._loaderClass(this._seekHandler, this._config), !1 === this._loader.needStashBuffer && (this._enableStash = !1), this._loader.onContentLengthKnown = this._onContentLengthKnown.bind(this), this._loader.onURLRedirect = this._onURLRedirect.bind(this), this._loader.onDataArrival = this._onLoaderChunkArrival.bind(this), this._loader.onResponseMessage = this._onResponseMessageArrival.bind(this), this._loader.onComplete = this._onLoaderComplete.bind(this), this._loader.onError = this._onLoaderError.bind(this), this._loader.onHeaderArrival = this._onLoaderHeaderArrival.bind(this) } }, { key: "open", value: function(e) { this._currentRange = { from: 0, to: -1 }, e && (this._currentRange.from = e), this._speedSampler.reset(), e || (this._fullRequestFlag = !0), this._loader.open(this._dataSource, Object.assign({}, this._currentRange)) } }, { key: "abort", value: function() { this._loader.abort(), this._paused && (this._paused = !1, this._resumeFrom = 0) } }, { key: "pause", value: function() { this.isWorking() && (this._loader.abort(), 0 !== this._stashUsed ? (this._resumeFrom = this._stashByteStart, this._currentRange.to = this._stashByteStart - 1) : this._resumeFrom = this._currentRange.to + 1, this._stashUsed = 0, this._stashByteStart = 0, this._paused = !0) } }, {
                        key: "resume",
                        value: function() {
                            var e;
                            this._paused && (this._paused = !1, e = this._resumeFrom, this._resumeFrom = 0, this._internalSeek(e, !0))
                        }
                    }, { key: "seek", value: function(e) { this._paused = !1, this._stashUsed = 0, this._stashByteStart = 0, this._internalSeek(e, !0) } }, {
                        key: "_internalSeek",
                        value: function(e, t) {
                            this._loader.isWorking() && this._loader.abort(), this._flushStashBuffer(t), this._loader.destroy(), this._loader = null;
                            e = { from: e, to: -1 };
                            this._currentRange = { from: e.from, to: -1 }, this._speedSampler.reset(), this._stashSize = this._stashInitialSize, this._createLoader(), this._loader.open(this._dataSource, e), this._onSeeked && this._onSeeked()
                        }
                    }, {
                        key: "updateUrl",
                        value: function(e) {
                            if (!e || "string" != typeof e || 0 === e.length) throw new _.InvalidArgumentException("Url must be a non-empty string!");
                            this._dataSource.url = e
                        }
                    }, {
                        key: "_expandBuffer",
                        value: function(e) {
                            for (var t, n, r = this._stashSize; r + 1048576 < e;) r *= 2;
                            (r += 1048576) !== this._bufferSize && (t = new ArrayBuffer(r), 0 < this._stashUsed && (n = new Uint8Array(this._stashBuffer, 0, this._stashUsed), new Uint8Array(t, 0, r).set(n, 0)), this._stashBuffer = t, this._bufferSize = r)
                        }
                    }, {
                        key: "_normalizeSpeed",
                        value: function(e) {
                            var t, n = this._speedNormalizeList,
                                r = n.length - 1,
                                i = 0,
                                o = r;
                            if (e < n[0]) return n[0];
                            for (; i <= o;) {
                                if ((t = i + Math.floor((o - i) / 2)) === r || e >= n[t] && e < n[t + 1]) return n[t];
                                n[t] < e ? i = t + 1 : o = t - 1
                            }
                        }
                    }, {
                        key: "_adjustStashSize",
                        value: function(e) {
                            var t = 0;
                            8192 < (t = this._config.isLive || e < 512 ? e : 512 <= e && e <= 1024 ? Math.floor(1.5 * e) : 2 * e) && (t = 8192);
                            e = 1024 * t + 1048576;
                            this._bufferSize < e && this._expandBuffer(e), this._stashSize = 1024 * t
                        }
                    }, { key: "_dispatchChunks", value: function(e, t) { return this._currentRange.to = t + e.byteLength - 1, this._onDataArrival(e, t) } }, { key: "_onURLRedirect", value: function(e) { this._redirectedURL = e, this._onRedirect && this._onRedirect(e) } }, { key: "_onContentLengthKnown", value: function(e) { e && this._fullRequestFlag && (this._totalLength = e, this._fullRequestFlag = !1) } }, { key: "_onResponseMessageArrival", value: function(e) { this._onResponseMessage && this._onResponseMessage(e) } }, {
                        key: "_onLoaderChunkArrival",
                        value: function(e, t) {
                            if (!this._onDataArrival) throw new _.IllegalStateException("IOController: No existing consumer (onDataArrival) callback!");
                            var n, r, i, o, s;
                            this._paused || (this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, this._onRecoveredEarlyEof && this._onRecoveredEarlyEof()), this._speedSampler.addBytes(e.byteLength), 0 !== (n = this._speedSampler.lastSecondKBps) && (r = this._normalizeSpeed(n), this._speedNormalized !== r && (this._speedNormalized = r, this._adjustStashSize(r))), this._enableStash ? (0 === this._stashUsed && 0 === this._stashByteStart && (this._stashByteStart = t), this._stashUsed + e.byteLength <= this._stashSize ? (new Uint8Array(this._stashBuffer, 0, this._stashSize).set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength) : (n = new Uint8Array(this._stashBuffer, 0, this._bufferSize), 0 < this._stashUsed ? (r = this._stashBuffer.slice(0, this._stashUsed), (i = this._dispatchChunks(r, this._stashByteStart)) < r.byteLength ? 0 < i && (r = new Uint8Array(r, i), n.set(r, 0), this._stashUsed = r.byteLength, this._stashByteStart += i) : (this._stashUsed = 0, this._stashByteStart += i), this._stashUsed + e.byteLength > this._bufferSize && (this._expandBuffer(this._stashUsed + e.byteLength), n = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), n.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength) : (o = this._dispatchChunks(e, t)) < e.byteLength && ((i = e.byteLength - o) > this._bufferSize && (this._expandBuffer(i), n = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), n.set(new Uint8Array(e, o), 0), this._stashUsed += i, this._stashByteStart = t + o))) : 0 === this._stashUsed ? (s = this._dispatchChunks(e, t)) < e.byteLength && ((o = e.byteLength - s) > this._bufferSize && this._expandBuffer(o), new Uint8Array(this._stashBuffer, 0, this._bufferSize).set(new Uint8Array(e, s), 0), this._stashUsed += o, this._stashByteStart = t + s) : (this._stashUsed + e.byteLength > this._bufferSize && this._expandBuffer(this._stashUsed + e.byteLength), (t = new Uint8Array(this._stashBuffer, 0, this._bufferSize)).set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength, (s = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this._stashByteStart)) < this._stashUsed && 0 < s && (e = new Uint8Array(this._stashBuffer, s), t.set(e, 0)), this._stashUsed -= s, this._stashByteStart += s))
                        }
                    }, {
                        key: "_flushStashBuffer",
                        value: function(e) {
                            if (0 < this._stashUsed) {
                                var t = this._stashBuffer.slice(0, this._stashUsed),
                                    n = this._dispatchChunks(t, this._stashByteStart),
                                    r = t.byteLength - n;
                                if (n < t.byteLength) {
                                    if (!e) return 0 < n && (e = new Uint8Array(this._stashBuffer, 0, this._bufferSize), t = new Uint8Array(t, n), e.set(t, 0), this._stashUsed = t.byteLength, this._stashByteStart += n), 0;
                                    s.default.w(this.TAG, "".concat(r, " bytes unconsumed data remain when flush buffer, dropped"))
                                }
                                return this._stashUsed = 0, this._stashByteStart = 0, r
                            }
                            return 0
                        }
                    }, { key: "_onLoaderComplete", value: function() { this._flushStashBuffer(!1), this._onComplete && this._onComplete(this._extraData) } }, { key: "_onLoaderHeaderArrival", value: function(e, t) { this._onHeaderArrival && this._onHeaderArrival(e, t) } }, {
                        key: "_onLoaderError",
                        value: function(e, t) {
                            switch (s.default.e(this.TAG, "Loader error, code = ".concat(t.code, ", msg = ").concat(t.msg)), this._flushStashBuffer(!1), this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, e = l.LoaderErrors.UNRECOVERABLE_EARLY_EOF), e) {
                                case l.LoaderErrors.EARLY_EOF:
                                    if (!this._config.isLive && this._totalLength) { var n = this._currentRange.to + 1; return void(n < this._totalLength && (s.default.w(this.TAG, "Connection lost, trying reconnect..."), this._isEarlyEofReconnecting = !0, this._internalSeek(n, !1))) }
                                    e = l.LoaderErrors.UNRECOVERABLE_EARLY_EOF;
                                    break;
                                case l.LoaderErrors.UNRECOVERABLE_EARLY_EOF:
                                case l.LoaderErrors.CONNECTING_TIMEOUT:
                                case l.LoaderErrors.HTTP_STATUS_CODE_INVALID:
                                case l.LoaderErrors.EXCEPTION:
                            }
                            if (!this._onError) throw new _.RuntimeException("IOException: " + t.msg);
                            this._onError(e, t)
                        }
                    }, { key: "sendToWebSocketServer", value: function(e) { this._loader.sendToWebSocketServer && this._loader.sendToWebSocketServer(e) } }]), r
                }();
            n.default = e
        }, { "../utils/exception.js": 70, "../utils/logger.js": 72, "./fetch-stream-loader.js": 51, "./loader.js": 53, "./param-seek-handler.js": 54, "./range-seek-handler.js": 55, "./speed-sampler.js": 56, "./websocket-loader.js": 57, "./xhr-moz-chunked-loader.js": 58, "./xhr-msstream-loader.js": 59, "./xhr-range-loader.js": 60, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        53: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.BaseLoader = n.LoaderErrors = n.LoaderStatus = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                s = e("../utils/exception.js"),
                a = { kIdle: 0, kConnecting: 1, kBuffering: 2, kError: 3, kComplete: 4 };
            n.LoaderStatus = a;
            n.LoaderErrors = { OK: "OK", EXCEPTION: "Exception", HTTP_STATUS_CODE_INVALID: "HttpStatusCodeInvalid", CONNECTING_TIMEOUT: "ConnectingTimeout", EARLY_EOF: "EarlyEof", UNRECOVERABLE_EARLY_EOF: "UnrecoverableEarlyEof" };
            e = function() {
                function t(e) {
                    (0, i.default)(this, t), this._type = e || "undefined", this._status = a.kIdle, this._needStash = !1, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onResponseMessage = null, this._onError = null, this._onComplete = null, this._onHeaderArrival = null
                }
                return (0, o.default)(t, [{ key: "destroy", value: function() { this._status = a.kIdle, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onResponseMessage = null, this._onError = null, this._onComplete = null, this._onHeaderArrival = null } }, { key: "isWorking", value: function() { return this._status === a.kConnecting || this._status === a.kBuffering } }, { key: "type", get: function() { return this._type } }, { key: "status", get: function() { return this._status } }, { key: "needStashBuffer", get: function() { return this._needStash } }, { key: "onContentLengthKnown", get: function() { return this._onContentLengthKnown }, set: function(e) { this._onContentLengthKnown = e } }, { key: "onURLRedirect", get: function() { return this._onURLRedirect }, set: function(e) { this._onURLRedirect = e } }, { key: "onDataArrival", get: function() { return this._onDataArrival }, set: function(e) { this._onDataArrival = e } }, { key: "onResponseMessage", get: function() { return this._onResponseMessage }, set: function(e) { this._onResponseMessage = e } }, { key: "onError", get: function() { return this._onError }, set: function(e) { this._onError = e } }, { key: "onComplete", get: function() { return this._onComplete }, set: function(e) { this._onComplete = e } }, { key: "onHeaderArrival", get: function() { return this._onHeaderArrival }, set: function(e) { this._onHeaderArrival = e } }, { key: "open", value: function() { throw new s.NotImplementedException("Unimplemented abstract function!") } }, { key: "abort", value: function() { throw new s.NotImplementedException("Unimplemented abstract function!") } }]), t
            }();
            n.BaseLoader = e
        }, { "../utils/exception.js": 70, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        54: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                e = function() {
                    function n(e, t) {
                        (0, i.default)(this, n), this._startName = e, this._endName = t
                    }
                    return (0, o.default)(n, [{ key: "getConfig", value: function(e, t) { var n = e; return 0 === t.from && -1 === t.to || (e = !0, -1 === n.indexOf("?") && (n += "?", e = !1), e && (n += "&"), n += "".concat(this._startName, "=").concat(t.from.toString()), -1 !== t.to && (n += "&".concat(this._endName, "=").concat(t.to.toString()))), { url: n, headers: {} } } }, {
                        key: "removeURLParameters",
                        value: function(e) {
                            var t = e.split("?")[0],
                                n = void 0,
                                r = e.indexOf("?"); - 1 !== r && (n = e.substring(r + 1));
                            var i = "";
                            if (null != n && 0 < n.length)
                                for (var o = n.split("&"), s = 0; s < o.length; s++) {
                                    var a = o[s].split("="),
                                        l = 0 < s;
                                    a[0] !== this._startName && a[0] !== this._endName && (l && (i += "&"), i += o[s])
                                }
                            return 0 === i.length ? t : t + "?" + i
                        }
                    }]), n
                }();
            n.default = e
        }, { "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        55: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                e = function() {
                    function t(e) {
                        (0, i.default)(this, t), this._zeroStart = e || !1
                    }
                    return (0, o.default)(t, [{ key: "getConfig", value: function(e, t) { var n = {}; return 0 !== t.from || -1 !== t.to ? (t = -1 !== t.to ? "bytes=".concat(t.from.toString(), "-").concat(t.to.toString()) : "bytes=".concat(t.from.toString(), "-"), n.Range = t) : this._zeroStart && (n.Range = "bytes=0-"), { url: e, headers: n } } }, { key: "removeURLParameters", value: function(e) { return e } }]), t
                }();
            n.default = e
        }, { "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        56: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                e = function() {
                    function e() {
                        (0, i.default)(this, e), this._firstCheckpoint = 0, this._lastCheckpoint = 0, this._intervalBytes = 0, this._totalBytes = 0, this._lastSecondBytes = 0, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now
                    }
                    return (0, o.default)(e, [{ key: "reset", value: function() { this._firstCheckpoint = this._lastCheckpoint = 0, this._totalBytes = this._intervalBytes = 0, this._lastSecondBytes = 0 } }, { key: "addBytes", value: function(e) { 0 === this._firstCheckpoint ? (this._firstCheckpoint = this._now(), this._lastCheckpoint = this._firstCheckpoint, this._intervalBytes += e, this._totalBytes += e) : this._now() - this._lastCheckpoint < 1e3 ? (this._intervalBytes += e, this._totalBytes += e) : (this._lastSecondBytes = this._intervalBytes, this._intervalBytes = e, this._totalBytes += e, this._lastCheckpoint = this._now()) } }, { key: "currentKBps", get: function() { this.addBytes(0); var e = (this._now() - this._lastCheckpoint) / 1e3; return 0 == e && (e = 1), this._intervalBytes / e / 1024 } }, { key: "lastSecondKBps", get: function() { return this.addBytes(0), 0 !== this._lastSecondBytes ? this._lastSecondBytes / 1024 : 500 <= this._now() - this._lastCheckpoint ? this.currentKBps : 0 } }, { key: "averageKBps", get: function() { var e = (this._now() - this._firstCheckpoint) / 1e3; return this._totalBytes / e / 1024 } }]), e
                }();
            n.default = e
        }, { "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        57: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                s = r(e("@babel/runtime/helpers/get")),
                a = r(e("@babel/runtime/helpers/inherits")),
                l = r(e("@babel/runtime/helpers/possibleConstructorReturn")),
                u = r(e("@babel/runtime/helpers/getPrototypeOf")),
                c = (r(e("../utils/logger.js")), e("./loader.js")),
                h = e("../utils/exception.js"),
                d = r(e("../player/websocket-cmd-type.js")),
                f = r(e("../utils/string-convert"));

            function p(n) { var r = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t = (0, u.default)(n); return t = r ? (e = (0, u.default)(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), (0, l.default)(this, t) } }
            e = function(e) {
                (0, a.default)(n, e);
                var t = p(n);

                function n() { var e; return (0, i.default)(this, n), (e = t.call(this, "websocket-loader")).TAG = "WebSocketLoader", e._needStash = !0, e._ws = null, e._requestAbort = !1, e._receivedLength = 0, e }
                return (0, o.default)(n, [{ key: "destroy", value: function() { this._ws && this.abort(), (0, s.default)((0, u.default)(n.prototype), "destroy", this).call(this) } }, {
                    key: "open",
                    value: function(e) {
                        var t = this;
                        try {
                            this._startConnectTime = Date.now();
                            var n = (i = e.url).indexOf("?"),
                                r = i.substring(n + 1),
                                i = i.substring(0, n),
                                o = this._ws = new self.WebSocket(i);
                            o.binaryType = "arraybuffer", o.onopen = function(e) { t._onWebSocketOpen(e), o.send(r) }, o.onclose = this._onWebSocketClose.bind(this), o.onmessage = this._onWebSocketMessage.bind(this), o.onerror = this._onWebSocketError.bind(this), this._status = c.LoaderStatus.kConnecting
                        } catch (e) {
                            this._status = c.LoaderStatus.kError;
                            var s = { code: e.code, msg: e.message };
                            if (!this._onError) throw new h.RuntimeException(s.msg);
                            this._onError(c.LoaderErrors.EXCEPTION, s)
                        }
                    }
                }, { key: "abort", value: function() { var e = this._ws;!e || 0 !== e.readyState && 1 !== e.readyState || (this._requestAbort = !0, e.close()), this._ws = null, this._status = c.LoaderStatus.kComplete } }, { key: "_onWebSocketOpen", value: function() { this._status = c.LoaderStatus.kBuffering } }, { key: "_onWebSocketClose", value: function() {!0 !== this._requestAbort ? (this._status = c.LoaderStatus.kComplete, this._onComplete && this._onComplete(0, this._receivedLength - 1)) : this._requestAbort = !1 } }, {
                    key: "_onWebSocketMessage",
                    value: function(e) {
                        var t = this;
                        if (e.data instanceof ArrayBuffer) this._dispatchArrayBuffer(e.data);
                        else if (e.data instanceof Blob) {
                            var n = new FileReader;
                            n.onload = function() { t._dispatchArrayBuffer(n.result) }, n.readAsArrayBuffer(e.data)
                        } else {
                            this._status = c.LoaderStatus.kError;
                            e = { code: -1, msg: "Unsupported WebSocket message type: " + e.data.constructor.name };
                            if (!this._onError) throw new h.RuntimeException(e.msg);
                            this._onError(c.LoaderErrors.EXCEPTION, e)
                        }
                    }
                }, {
                    key: "_dispatchArrayBuffer",
                    value: function(e) {
                        var t, n, r = new Uint8Array(e);
                        r[0] === d.default.FLV_STREAM_DATA ? (t = r.slice(1).buffer, 0 === this._receivedLength && (n = (e = f.default.string2Unit8Array(JSON.stringify({ time: Date.now() - this._startConnectTime, cmd: d.default.REQUEST_MESSAGE_DATA_TYPE.REQUEST_WS_TIME }))) ? e.length : 0, (n = new Uint8Array(n + 1)).set(new Uint8Array([d.default.REQUEST_MESSAGE_DATA]), 0), e && n.set(e, 1), this.sendToWebSocketServer(n)), n = this._receivedLength, this._receivedLength += t.byteLength, this._onDataArrival && this._onDataArrival(t, n, this._receivedLength)) : this._onResponseMessage && this._onResponseMessage(r.buffer)
                    }
                }, {
                    key: "_onWebSocketError",
                    value: function(e) {
                        this._status = c.LoaderStatus.kError;
                        e = { code: e.code, msg: e.message };
                        if (!this._onError) throw new h.RuntimeException(e.msg);
                        this._onError(c.LoaderErrors.EXCEPTION, e)
                    }
                }, { key: "sendToWebSocketServer", value: function(e) { this._ws.send(e || new Uint8Array([0])) } }], [{ key: "isSupported", value: function() { try { return void 0 !== self.WebSocket } catch (e) { return !1 } } }]), n
            }(c.BaseLoader);
            n.default = e
        }, { "../player/websocket-cmd-type.js": 65, "../utils/exception.js": 70, "../utils/logger.js": 72, "../utils/string-convert": 75, "./loader.js": 53, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/get": 11, "@babel/runtime/helpers/getPrototypeOf": 12, "@babel/runtime/helpers/inherits": 13, "@babel/runtime/helpers/interopRequireDefault": 14, "@babel/runtime/helpers/possibleConstructorReturn": 17 }],
        58: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var l = r(e("@babel/runtime/helpers/typeof")),
                o = r(e("@babel/runtime/helpers/classCallCheck")),
                s = r(e("@babel/runtime/helpers/createClass")),
                a = r(e("@babel/runtime/helpers/get")),
                u = r(e("@babel/runtime/helpers/inherits")),
                i = r(e("@babel/runtime/helpers/possibleConstructorReturn")),
                c = r(e("@babel/runtime/helpers/getPrototypeOf")),
                h = r(e("../utils/logger.js")),
                d = e("./loader.js"),
                f = e("../utils/exception.js");

            function p(n) { var r = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t = (0, c.default)(n); return t = r ? (e = (0, c.default)(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), (0, i.default)(this, t) } }
            e = function(e) {
                (0, u.default)(i, e);
                var r = p(i);

                function i(e, t) { var n; return (0, o.default)(this, i), (n = r.call(this, "xhr-moz-chunked-loader")).TAG = "MozChunkedLoader", n._seekHandler = e, n._config = t, n._needStash = !0, n._xhr = null, n._requestAbort = !1, n._contentLength = null, n._receivedLength = 0, n }
                return (0, s.default)(i, [{ key: "destroy", value: function() { this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onloadend = null, this._xhr.onerror = null, this._xhr = null), (0, a.default)((0, c.default)(i.prototype), "destroy", this).call(this) } }, {
                    key: "open",
                    value: function(e, t) {
                        this._dataSource = e, this._range = t;
                        var n = e.url;
                        this._config.reuseRedirectedURL && null != e.redirectedURL && (n = e.redirectedURL);
                        var r = this._seekHandler.getConfig(n, t);
                        this._requestURL = r.url;
                        var n = (i = r.url).indexOf("?"),
                            t = i.substring(n + 1),
                            i = i.substring(0, n),
                            o = this._xhr = new XMLHttpRequest;
                        if (o.open("POST", i, !0), o.responseType = "moz-chunked-arraybuffer", o.onreadystatechange = this._onReadyStateChange.bind(this), o.onprogress = this._onProgress.bind(this), o.onloadend = this._onLoadEnd.bind(this), o.onerror = this._onXhrError.bind(this), e.withCredentials && o.withCredentials && (o.withCredentials = !0), "object" === (0, l.default)(r.headers)) { var s, a = r.headers; for (s in a) Object.prototype.hasOwnProperty.call(a, s) && o.setRequestHeader(s, a[s]) }
                        o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), this._status = d.LoaderStatus.kConnecting, o.send(t)
                    }
                }, { key: "abort", value: function() { this._requestAbort = !0, this._xhr && this._xhr.abort(), this._status = d.LoaderStatus.kComplete } }, {
                    key: "_onReadyStateChange",
                    value: function(e) {
                        var t, n = e.target;
                        if (2 === n.readyState) {
                            null != n.responseURL && n.responseURL !== this._requestURL && this._onURLRedirect && (t = this._seekHandler.removeURLParameters(n.responseURL), this._onURLRedirect(t));
                            e = e.target.getResponseHeader("Content-Type").split(",");
                            if (this.onHeaderArrival && this.onHeaderArrival({ startTime: (e[3] || "").trim(), endTime: (e[4] || "").trim(), curRawId: (e[1] || "").trim(), nextRawId: (e[2] || "").trim() }), 0 !== n.status && (n.status < 200 || 299 < n.status)) {
                                if (this._status = d.LoaderStatus.kError, !this._onError) throw new f.RuntimeException("MozChunkedLoader: Http code invalid, " + n.status + " " + n.statusText);
                                this._onError(d.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: n.status, msg: n.statusText })
                            } else this._status = d.LoaderStatus.kBuffering
                        }
                    }
                }, {
                    key: "_onProgress",
                    value: function(e) {
                        var t;
                        this._status !== d.LoaderStatus.kError && (null === this._contentLength && null !== e.total && 0 !== e.total && (this._contentLength = e.total, this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength)), t = e.target.response, e = this._range.from + this._receivedLength, this._receivedLength += t.byteLength, this._onDataArrival && this._onDataArrival(t, e, this._receivedLength))
                    }
                }, { key: "_onLoadEnd", value: function() {!0 !== this._requestAbort ? this._status !== d.LoaderStatus.kError && (this._status = d.LoaderStatus.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1)) : this._requestAbort = !1 } }, {
                    key: "_onXhrError",
                    value: function(e) {
                        this._status = d.LoaderStatus.kError;
                        var t = 0,
                            n = null,
                            n = this._contentLength && e.loaded < this._contentLength ? (t = d.LoaderErrors.EARLY_EOF, { code: -1, msg: "Moz-Chunked stream meet Early-Eof" }) : (t = d.LoaderErrors.EXCEPTION, { code: -1, msg: e.constructor.name + " " + e.type });
                        if (!this._onError) throw new f.RuntimeException(n.msg);
                        this._onError(t, n)
                    }
                }], [{ key: "isSupported", value: function() { try { var e = new XMLHttpRequest; return e.open("GET", "https://example.com", !0), (e.responseType = "moz-chunked-arraybuffer") === e.responseType } catch (e) { return h.default.w("MozChunkedLoader", e.message), !1 } } }]), i
            }(d.BaseLoader);
            n.default = e
        }, { "../utils/exception.js": 70, "../utils/logger.js": 72, "./loader.js": 53, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/get": 11, "@babel/runtime/helpers/getPrototypeOf": 12, "@babel/runtime/helpers/inherits": 13, "@babel/runtime/helpers/interopRequireDefault": 14, "@babel/runtime/helpers/possibleConstructorReturn": 17, "@babel/runtime/helpers/typeof": 21 }],
        59: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var s = r(e("@babel/runtime/helpers/typeof")),
                o = r(e("@babel/runtime/helpers/classCallCheck")),
                a = r(e("@babel/runtime/helpers/createClass")),
                l = r(e("@babel/runtime/helpers/get")),
                u = r(e("@babel/runtime/helpers/inherits")),
                i = r(e("@babel/runtime/helpers/possibleConstructorReturn")),
                c = r(e("@babel/runtime/helpers/getPrototypeOf")),
                h = r(e("../utils/logger.js")),
                d = e("./loader.js"),
                f = e("../utils/exception.js");

            function p(n) { var r = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t = (0, c.default)(n); return t = r ? (e = (0, c.default)(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), (0, i.default)(this, t) } }
            e = function(e) {
                (0, u.default)(i, e);
                var r = p(i);

                function i(e, t) { var n; return (0, o.default)(this, i), (n = r.call(this, "xhr-msstream-loader")).TAG = "MSStreamLoader", n._seekHandler = e, n._config = t, n._needStash = !0, n._xhr = null, n._reader = null, n._totalRange = null, n._currentRange = null, n._currentRequestURL = null, n._currentRedirectedURL = null, n._contentLength = null, n._receivedLength = 0, n._bufferLimit = 16777216, n._lastTimeBufferSize = 0, n._isReconnecting = !1, n }
                return (0, a.default)(i, [{ key: "destroy", value: function() { this.isWorking() && this.abort(), this._reader && (this._reader.onprogress = null, this._reader.onload = null, this._reader.onerror = null, this._reader = null), this._xhr && (this._xhr.onreadystatechange = null, this._xhr = null), (0, l.default)((0, c.default)(i.prototype), "destroy", this).call(this) } }, { key: "open", value: function(e, t) { this._internalOpen(e, t, !1) } }, {
                    key: "_internalOpen",
                    value: function(e, t, n) {
                        this._dataSource = e, n ? this._currentRange = t : this._totalRange = t;
                        n = e.url;
                        this._config.reuseRedirectedURL && (null != this._currentRedirectedURL ? n = this._currentRedirectedURL : null != e.redirectedURL && (n = e.redirectedURL));
                        n = this._seekHandler.getConfig(n, t);
                        this._currentRequestURL = n.url;
                        t = this._reader = new self.MSStreamReader;
                        t.onprogress = this._msrOnProgress.bind(this), t.onload = this._msrOnLoad.bind(this), t.onerror = this._msrOnError.bind(this);
                        var r = this._xhr = new XMLHttpRequest;
                        if (r.open("GET", n.url, !0), r.responseType = "ms-stream", r.onreadystatechange = this._xhrOnReadyStateChange.bind(this), r.onerror = this._xhrOnError.bind(this), e.withCredentials && (r.withCredentials = !0), "object" === (0, s.default)(n.headers)) { var i, o = n.headers; for (i in o) Object.prototype.hasOwnProperty.call(o, i) && r.setRequestHeader(i, o[i]) }
                        this._isReconnecting ? this._isReconnecting = !1 : this._status = d.LoaderStatus.kConnecting, r.send()
                    }
                }, { key: "abort", value: function() { this._internalAbort(), this._status = d.LoaderStatus.kComplete } }, { key: "_internalAbort", value: function() { this._reader && (1 === this._reader.readyState && this._reader.abort(), this._reader.onprogress = null, this._reader.onload = null, this._reader.onerror = null, this._reader = null), this._xhr && (this._xhr.abort(), this._xhr.onreadystatechange = null, this._xhr = null) } }, {
                    key: "_xhrOnReadyStateChange",
                    value: function(e) {
                        e = e.target;
                        if (2 === e.readyState)
                            if (200 <= e.status && e.status <= 299) {
                                this._status = d.LoaderStatus.kBuffering, null != e.responseURL && (t = this._seekHandler.removeURLParameters(e.responseURL), e.responseURL !== this._currentRequestURL && t !== this._currentRedirectedURL && (this._currentRedirectedURL = t, this._onURLRedirect && this._onURLRedirect(t)));
                                var t = e.getResponseHeader("Content-Length");
                                null == t || null != this._contentLength || 0 < (t = parseInt(t)) && (this._contentLength = t, this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength))
                            } else {
                                if (this._status = d.LoaderStatus.kError, !this._onError) throw new f.RuntimeException("MSStreamLoader: Http code invalid, " + e.status + " " + e.statusText);
                                this._onError(d.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: e.status, msg: e.statusText })
                            }
                        else 3 === e.readyState && 200 <= e.status && e.status <= 299 && (this._status = d.LoaderStatus.kBuffering, e = e.response, this._reader.readAsArrayBuffer(e))
                    }
                }, {
                    key: "_xhrOnError",
                    value: function(e) {
                        this._status = d.LoaderStatus.kError;
                        var t = d.LoaderErrors.EXCEPTION,
                            e = { code: -1, msg: e.constructor.name + " " + e.type };
                        if (!this._onError) throw new f.RuntimeException(e.msg);
                        this._onError(t, e)
                    }
                }, {
                    key: "_msrOnProgress",
                    value: function(e) {
                        var t, n = e.target.result;
                        null != n ? (t = n.slice(this._lastTimeBufferSize), this._lastTimeBufferSize = n.byteLength, e = this._totalRange.from + this._receivedLength, this._receivedLength += t.byteLength, this._onDataArrival && this._onDataArrival(t, e, this._receivedLength), n.byteLength >= this._bufferLimit && (h.default.v(this.TAG, "MSStream buffer exceeded max size near ".concat(e + t.byteLength, ", reconnecting...")), this._doReconnectIfNeeded())) : this._doReconnectIfNeeded()
                    }
                }, {
                    key: "_doReconnectIfNeeded",
                    value: function() {
                        var e;
                        (null == this._contentLength || this._receivedLength < this._contentLength) && (this._isReconnecting = !0, this._lastTimeBufferSize = 0, this._internalAbort(), e = { from: this._totalRange.from + this._receivedLength, to: -1 }, this._internalOpen(this._dataSource, e, !0))
                    }
                }, { key: "_msrOnLoad", value: function() { this._status = d.LoaderStatus.kComplete, this._onComplete && this._onComplete(this._totalRange.from, this._totalRange.from + this._receivedLength - 1) } }, {
                    key: "_msrOnError",
                    value: function(e) {
                        this._status = d.LoaderStatus.kError;
                        var t = 0,
                            n = null,
                            n = this._contentLength && this._receivedLength < this._contentLength ? (t = d.LoaderErrors.EARLY_EOF, { code: -1, msg: "MSStream meet Early-Eof" }) : (t = d.LoaderErrors.EARLY_EOF, { code: -1, msg: e.constructor.name + " " + e.type });
                        if (!this._onError) throw new f.RuntimeException(n.msg);
                        this._onError(t, n)
                    }
                }], [{ key: "isSupported", value: function() { try { if (void 0 === self.MSStream || void 0 === self.MSStreamReader) return !1; var e = new XMLHttpRequest; return e.open("GET", "https://example.com", !0), (e.responseType = "ms-stream") === e.responseType } catch (e) { return h.default.w("MSStreamLoader", e.message), !1 } } }]), i
            }(d.BaseLoader);
            n.default = e
        }, { "../utils/exception.js": 70, "../utils/logger.js": 72, "./loader.js": 53, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/get": 11, "@babel/runtime/helpers/getPrototypeOf": 12, "@babel/runtime/helpers/inherits": 13, "@babel/runtime/helpers/interopRequireDefault": 14, "@babel/runtime/helpers/possibleConstructorReturn": 17, "@babel/runtime/helpers/typeof": 21 }],
        60: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var s = r(e("@babel/runtime/helpers/typeof")),
                o = r(e("@babel/runtime/helpers/classCallCheck")),
                a = r(e("@babel/runtime/helpers/createClass")),
                l = r(e("@babel/runtime/helpers/get")),
                u = r(e("@babel/runtime/helpers/inherits")),
                i = r(e("@babel/runtime/helpers/possibleConstructorReturn")),
                c = r(e("@babel/runtime/helpers/getPrototypeOf")),
                h = r(e("../utils/logger.js")),
                d = r(e("./speed-sampler.js")),
                f = e("./loader.js"),
                p = e("../utils/exception.js");

            function _(n) { var r = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t = (0, c.default)(n); return t = r ? (e = (0, c.default)(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), (0, i.default)(this, t) } }
            e = function(e) {
                (0, u.default)(i, e);
                var r = _(i);

                function i(e, t) { var n; return (0, o.default)(this, i), (n = r.call(this, "xhr-range-loader")).TAG = "RangeLoader", n._seekHandler = e, n._config = t, n._needStash = !1, n._chunkSizeKBList = [128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 5120, 6144, 7168, 8192], n._currentChunkSizeKB = 384, n._currentSpeedNormalized = 0, n._zeroSpeedChunkCount = 0, n._xhr = null, n._speedSampler = new d.default, n._requestAbort = !1, n._waitForTotalLength = !1, n._totalLengthReceived = !1, n._currentRequestURL = null, n._currentRedirectedURL = null, n._currentRequestRange = null, n._totalLength = null, n._contentLength = null, n._receivedLength = 0, n._lastTimeLoaded = 0, n }
                return (0, a.default)(i, [{ key: "destroy", value: function() { this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr = null), (0, l.default)((0, c.default)(i.prototype), "destroy", this).call(this) } }, { key: "currentSpeed", get: function() { return this._speedSampler.lastSecondKBps } }, {
                    key: "open",
                    value: function(e, t) {
                        this._rangeIndex = 0, this._receivedLength = 0, this._dataSource = e, this._range = t, this._status = f.LoaderStatus.kConnecting;
                        null != this._dataSource.filesize && 0 !== this._dataSource.filesize && (this._totalLength = this._dataSource.filesize), this._openSubRange()
                    }
                }, {
                    key: "_openSubRange",
                    value: function() {
                        var e = 1024 * this._currentChunkSizeKB,
                            t = this._range.from + this._receivedLength,
                            e = t + e;
                        null != this._contentLength && e - this._range.from >= this._contentLength && (e = this._range.from + this._contentLength - 1), this._currentRequestRange = { from: t, to: e }, this._internalOpen(this._dataSource, this._currentRequestRange)
                    }
                }, {
                    key: "_internalOpen",
                    value: function(e, t) {
                        this._lastTimeLoaded = 0;
                        var n = e.url;
                        this._config.reuseRedirectedURL && (null != this._currentRedirectedURL ? n = this._currentRedirectedURL : null != e.redirectedURL && (n = e.redirectedURL));
                        t = this._seekHandler.getConfig(n, t);
                        this._currentRequestURL = t.url;
                        var r = this._xhr = new XMLHttpRequest;
                        if (r.open("GET", t.url, !0), r.responseType = "arraybuffer", r.onreadystatechange = this._onReadyStateChange.bind(this), r.onload = this._onLoad.bind(this), r.onerror = this._onXhrError.bind(this), e.withCredentials && r.withCredentials && (r.withCredentials = !0), "object" === (0, s.default)(t.headers)) { var i, o = t.headers; for (i in o) Object.prototype.hasOwnProperty.call(o, i) && r.setRequestHeader(i, o[i]) }
                        r.send()
                    }
                }, { key: "abort", value: function() { this._requestAbort = !0, this._internalAbort(), this._status = f.LoaderStatus.kComplete } }, { key: "_internalAbort", value: function() { this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr.abort(), this._xhr = null) } }, {
                    key: "_onReadyStateChange",
                    value: function(e) {
                        var t = e.target;
                        if (2 === t.readyState)
                            if (null != t.responseURL && (e = this._seekHandler.removeURLParameters(t.responseURL), t.responseURL !== this._currentRequestURL && e !== this._currentRedirectedURL && (this._currentRedirectedURL = e, this._onURLRedirect && this._onURLRedirect(e))), 200 <= t.status && t.status <= 299) this._waitForTotalLength || (this._status = f.LoaderStatus.kBuffering);
                            else {
                                if (this._status = f.LoaderStatus.kError, !this._onError) throw new p.RuntimeException("RangeLoader: Http code invalid, " + t.status + " " + t.statusText);
                                this._onError(f.LoaderErrors.HTTP_STATUS_CODE_INVALID, { code: t.status, msg: t.statusText })
                            }
                    }
                }, {
                    key: "_normalizeSpeed",
                    value: function(e) {
                        var t, n = this._chunkSizeKBList,
                            r = n.length - 1,
                            i = 0,
                            o = r;
                        if (e < n[0]) return n[0];
                        for (; i <= o;) {
                            if ((t = i + Math.floor((o - i) / 2)) === r || e >= n[t] && e < n[t + 1]) return n[t];
                            n[t] < e ? i = t + 1 : o = t - 1
                        }
                    }
                }, {
                    key: "_onLoad",
                    value: function(e) {
                        var t, n, r, i;
                        this._status !== f.LoaderStatus.kError && (this._waitForTotalLength ? this._waitForTotalLength = !1 : ((this._lastTimeLoaded = 0) === (r = this._speedSampler.lastSecondKBps) && (this._zeroSpeedChunkCount++, 3 <= this._zeroSpeedChunkCount && (r = this._speedSampler.currentKBps)), 0 !== r && (i = this._normalizeSpeed(r), this._currentSpeedNormalized !== i && (this._currentSpeedNormalized = i, this._currentChunkSizeKB = i)), t = e.target.response, n = this._range.from + this._receivedLength, this._receivedLength += t.byteLength, r = !1, i = this._rangeIndex++, this._receivedLength >= this._currentRequestRange.to ? this._openSubRange() : (i = -1, r = !0), e = e.target.getResponseHeader("Content-Type").split(","), this.onHeaderArrival && this.onHeaderArrival({ startTime: (e[3] || "").trim(), endTime: (e[4] || "").trim(), curRawId: (e[1] || "").trim(), nextRawId: (e[2] || "").trim() }, i), this._onDataArrival && this._onDataArrival(t, n, this._receivedLength), r && (this._status = f.LoaderStatus.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1))))
                    }
                }, {
                    key: "_onXhrError",
                    value: function(e) {
                        this._status = f.LoaderStatus.kError;
                        var t = 0,
                            n = null,
                            n = this._contentLength && 0 < this._receivedLength && this._receivedLength < this._contentLength ? (t = f.LoaderErrors.EARLY_EOF, { code: -1, msg: "RangeLoader meet Early-Eof" }) : (t = f.LoaderErrors.EXCEPTION, { code: -1, msg: e.constructor.name + " " + e.type });
                        if (!this._onError) throw new p.RuntimeException(n.msg);
                        this._onError(t, n)
                    }
                }], [{ key: "isSupported", value: function() { try { var e = new XMLHttpRequest; return e.open("GET", "https://example.com", !0), (e.responseType = "arraybuffer") === e.responseType } catch (e) { return h.default.w("RangeLoader", e.message), !1 } } }]), i
            }(f.BaseLoader);
            n.default = e
        }, { "../utils/exception.js": 70, "../utils/logger.js": 72, "./loader.js": 53, "./speed-sampler.js": 56, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/get": 11, "@babel/runtime/helpers/getPrototypeOf": 12, "@babel/runtime/helpers/inherits": 13, "@babel/runtime/helpers/interopRequireDefault": 14, "@babel/runtime/helpers/possibleConstructorReturn": 17, "@babel/runtime/helpers/typeof": 21 }],
        61: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/typeof")),
                o = r(e("@babel/runtime/helpers/classCallCheck")),
                s = r(e("@babel/runtime/helpers/createClass")),
                a = r(e("@babel/runtime/helpers/defineProperty")),
                l = r(e("events")),
                u = r(e("../utils/flvTranslateTypes.js")),
                _ = r(e("../utils/logger.js")),
                m = r(e("../utils/browser.js")),
                c = r(e("../utils/string-convert.js")),
                y = r(e("./player-events.js")),
                h = r(e("./websocket-cmd-type")),
                d = r(e("../core/transmuxer.js")),
                f = r(e("../core/transmuxing-events.js")),
                p = r(e("../core/mse-controller.js")),
                v = r(e("../core/mse-events.js")),
                g = e("./player-errors.js"),
                b = e("../config.js"),
                E = e("../utils/exception.js"),
                S = r(e("../extra/audioTalk.js")),
                e = r(e("../core/features.js")),
                T = e.default.supportMSEH264Playback(),
                A = e.default.supportAudioContext(),
                e = function() {
                    function r(e, t, n) {
                        var p = this;
                        if ((0, o.default)(this, r), (0, a.default)(this, "_onmseUpdateEnd", function() {
                                if (p._config.lazyLoad && !p._config.isLive) {
                                    for (var e = p._mediaElement, t = e.buffered, n = e.currentTime, r = 0, i = 0; i < t.length; i++) {
                                        var o = t.start(i),
                                            s = t.end(i);
                                        if (o <= n && n < s) { r = s; break }
                                    }
                                    r >= n + p._config.lazyLoadMaxDuration && null == p._progressChecker && (_.default.v(p.TAG, "Maximum buffering duration exceeded, suspend transmuxing task 2"), p._suspendTransmuxer())
                                }
                            }), (0, a.default)(this, "_onmseBufferFull", function() { _.default.v(p.TAG, "MSE SourceBuffer is full, suspend transmuxing task"), null == p._progressChecker && p._suspendTransmuxer() }), (0, a.default)(this, "_onmseSourceOpen", function() { p._mseSourceOpened = !0, p._mseAppendSegment() }), (0, a.default)(this, "_onvLoadedMetadata", function(e) { null != p._pendingSeekTime && (p._mediaElement.currentTime = p._pendingSeekTime, p._pendingSeekTime = null) }), (0, a.default)(this, "_onvSeeking", function(e) {
                                var t = p._mediaElement,
                                    n = t.currentTime,
                                    r = t.buffered;
                                if (p._requestSetTime) p._requestSetTime = !1;
                                else {
                                    if (n < 1 && 0 < r.length) { var i = r.start(0); if (i < 1 && n < i || m.default.safari) return p._requestSetTime = !0, void(t.currentTime = m.default.safari ? .1 : i) }
                                    if (p._isTimepointBuffered(n)) return p._alwaysSeekKeyframe && p._msectl && (null != (i = p._msectl.getNearestKeyframe(Math.floor(1e3 * n))) && (p._requestSetTime = !0, t.currentTime = i.dts / 1e3)), void(null != p._progressChecker && p._checkProgressAndResume());
                                    p._seekpointRecord = { seekPoint: n, recordTime: p._now() }, window.setTimeout(p._checkAndApplyUnbufferedSeekpoint.bind(p), 50)
                                }
                            }), (0, a.default)(this, "_onvCanPlay", function(e) { p._receivedCanPlay = !0, p._mediaElement.removeEventListener("canplay", p._onvCanPlay), p._emitter.emit(y.default.CAN_PLAY) }), (0, a.default)(this, "_onvStalled", function(e) { _.default.w(p.TAG, "video play stalled!"), p._checkAndResumeStuckPlayback(!0) }), (0, a.default)(this, "_onvProgress", function(e) { _.default.w(p.TAG, "video play progress!"), p._checkAndResumeStuckPlayback() }), (0, a.default)(this, "_onvEnd", function(e) { return e && console.error(e), _.default.w(p.TAG, "media ended!"), p._isPlayBackEnd ? p._emitter.emit(y.default.PLAY_ENDED) : (clearTimeout(p._progressCheckTimer), void p._emitter.emit(y.default.ERROR, g.ErrorTypes.OTHER_ERROR, g.ErrorDetails.MEDIA_MSE_ERROR, { timestamp: p._playTimestamp, isLive: p._config.isLive })) }), (0, a.default)(this, "_onvError", function(e) {
                                var t = p._mediaElement.error || {};
                                _.default.w(p.TAG, "media error! code: ".concat(t.code, " msg:").concat(t.message)), clearTimeout(p._progressCheckTimer), p._emitter && p._emitter.emit(y.default.ERROR, g.ErrorTypes.MEDIA_ERROR, g.ErrorDetails.MEDIA_MSE_ERROR, { timestamp: p._playTimestamp, isLive: p._config.isLive })
                            }), (0, a.default)(this, "_checkDuration", function() {
                                var e, t, n;
                                p && (n = 1e3 * p.duration, e = p._duration, _.default.v(p.TAG, "change video duration:".concat(e, " to ").concat(n)), t = p.mediaInfoList, (!e || n < e) && (p._duration = n, t[t.length - 1].end = n), p._isLoading = !1, t = p._config.isMP4, (n == 1 / 0 || n < 3e3) && (t || p._loadNextVideo(1)), !(n = p._mediaElement) || n.ended || t || p.play(), t || p._onvTimeUpdate())
                            }), (0, a.default)(this, "_onvTimeUpdate", function(e, t) {
                                var n = p._mediaElement,
                                    r = t || {},
                                    i = r.timestamp;
                                p._checkProgress(), p._isWASM ? p._wasmPlayer && !p._wasmPlayer.paused && p._emitter.emit(y.default.PLAYING) : n.paused || p._emitter.emit(y.default.PLAYING);
                                var o = 1e3 * p.currentTime;
                                p.lastPlayTime = p.lastPlayTime || 0;
                                var s, a = p._config,
                                    t = a.isLive,
                                    r = a.isMP4,
                                    l = a.playbackNeedBufferTime,
                                    a = void 0 === l ? 8 : l;
                                if (t || p._isWebSocketURL) {
                                    if (!i) {
                                        var u = p._msePlayLiveTimestamps,
                                            l = u.length;
                                        if (l)
                                            for (var c = l - 1; 0 <= c; c--) {
                                                var h = u[c],
                                                    d = h.timestamp,
                                                    h = h.ipcamTime;
                                                if (d <= o) { i = +h, u.splice(0, c); break }
                                            }
                                    }
                                    if (i) {
                                        if (p._playTimestamp = i, o - p.lastPlayTime < 100) return;
                                        p.lastPlayTime = o, p._emitter.emit(y.default.TIME_UPDATE, i, o)
                                    }
                                    t && p._checkAndUpdateSeekTime()
                                } else {
                                    r && n && T && (s = 1e3 * n.currentTime, 500 < Math.abs(s - o) && (m.default.mobile || (p.pause(), setTimeout(function(e) { p.seek(s / 1e3) }, 0)))), p._isWASM || p.buffered && p.buffered.length || p._loadNextVideo();
                                    var f, n = p.mediaInfoList[p.mediaInfoIndex];
                                    n && (n.end && (r ? o >= n.end - 200 && !p._isMP4Ended && (p._isMP4Ended = !0, setTimeout(p._onvEnd, 0)) : o >= n.end - 500 && ((f = p.mediaInfoIndex + 1) >= p.mediaInfoList.length ? p._isLoading || setTimeout(p._onvEnd, 0) : p.mediaInfoIndex = f)), o > p._playTimestamp && o - p.lastPlayTime < 100 || (p.lastPlayTime = o, p._playTimestamp = i || +n.startTime + (o - n.start), f = p._duration, p._emitter.emit(y.default.TIME_UPDATE, p._playTimestamp, o, f), f && f - o < 1e3 * a && !r && (_.default.i(p.TAG, "load video ontimeupdate mediaInfo.start=".concat(n.start, ", mediaInfo.end=").concat(n.end, ", currentTime=").concat(o, ", duration=").concat(f, " !!")), p._loadNextVideo())))
                                }
                            }), this.TAG = "FlvPlayer", this._type = "FlvPlayer", this._emitter = new l.default, this._plugins = n || {}, this._config = (0, b.createDefaultConfig)(), "object" === (0, i.default)(t) && Object.assign(this._config, t), "flv" !== e.type.toLowerCase()) throw new E.InvalidArgumentException("FlvPlayer requires an flv MediaDataSource input!");
                        !0 === e.isLive && (this._config.isLive = !0), this._isWebSocketURL = /wss?:\/\/(.+?)/.test(e.url), self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now, this._pendingSeekTime = null, this._requestSetTime = !1, this._seekpointRecord = null, this._progressChecker = null, this._mediaDataSource = e, this._mediaElement = null, this._msectl = null, this._transmuxer = null, this._mseSourceOpened = !1, this._receivedCanPlay = !1, this._mediaInfo = null, this._statisticsInfo = null;
                        e = m.default.chrome && (m.default.version.major < 50 || 50 === m.default.version.major && m.default.version.build < 2661);
                        this._alwaysSeekKeyframe = !!(e || m.default.msedge || m.default.msie), this._alwaysSeekKeyframe && (this._config.accurateSeek = !1), this.mediaInfoList = [], this.mediaInfoIndex = 0, this._duration = 0, this._isLoading = !1, this._isPlayBackEnd = this._config.isMP4, this._audioTalk = null, this._isWASM = !1, this._wasmPlayer = null, this._msePlayLiveTimestamps = []
                    }
                    return (0, s.default)(r, [{ key: "destroy", value: function() { this._wasmPlayer && (this._wasmPlayer.destroy(), this._wasmPlayer = null), this._audioTalk && (this._audioTalk.destroy(), this._audioTalk = null), null != this._progressChecker && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._transmuxer && this.unload(), this._mediaElement && this.detachMediaElement(), this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null, clearTimeout(this._loadNextVideoTimer), clearTimeout(this._checkAndUpdateSeekTimer), clearTimeout(this._progressCheckTimer), clearTimeout(this._checkDurationTimer), this._getEventListCallback = null, clearTimeout(this._getEventListCallbackTimer), this._getSectionListCallback = null, clearTimeout(this._getSectionListCallbackTimer), this._msePlayLiveTimestamps = [], this._receivedInitSegment = [], this._receivedInitSegment = [], this._destroyed = !0 } }, {
                        key: "on",
                        value: function(e, t) {
                            var n = this;
                            e === y.default.MEDIA_INFO ? null != this._mediaInfo && Promise.resolve().then(function() { n._emitter.emit(y.default.MEDIA_INFO, n.mediaInfo) }) : e === y.default.STATISTICS_INFO && null != this._statisticsInfo && Promise.resolve().then(function() { n._emitter.emit(y.default.STATISTICS_INFO, n.statisticsInfo) }), this._emitter.addListener(e, t)
                        }
                    }, { key: "off", value: function(e, t) { this._emitter.removeListener(e, t) } }, { key: "attachMediaElement", value: function(e) { if (this._mediaElement = e, this._config.enableH264DecodeByWASM) return this._onmseSourceOpen(); if (e.addEventListener("loadedmetadata", this._onvLoadedMetadata), e.addEventListener("canplay", this._onvCanPlay), e.addEventListener("stalled", this._onvStalled), e.addEventListener("progress", this._onvProgress), e.addEventListener("error", this._onvError), this._config.isMP4 || (e.addEventListener("seeking", this._onvSeeking), e.addEventListener("ended", this._onvEnd), e.addEventListener("timeupdate", this._onvTimeUpdate)), null != this._pendingSeekTime) try { e.currentTime = this._pendingSeekTime, this._pendingSeekTime = null } catch (e) {} } }, {
                        key: "_initMSEController",
                        value: function() {
                            var e, t = this;
                            T && !this._msectl && this._mediaElement && ((e = this._msectl = new p.default(this._config)).on(v.default.UPDATE_END, this._onmseUpdateEnd), e.on(v.default.BUFFER_FULL, this._onmseBufferFull), e.on(v.default.SOURCE_OPEN, this._onmseSourceOpen), e.on(v.default.SOURCE_END, function() { t._config.isLive ? t._isWASM || t._onvEnd() : (clearTimeout(t._checkDurationTimer), t._checkDurationTimer = setTimeout(t._checkDuration, 300)) }), e.on(v.default.ERROR, function(e) { t._isWASM || t._emitter.emit(y.default.ERROR, g.ErrorTypes.MEDIA_ERROR, g.ErrorDetails.MEDIA_MSE_ERROR, e) }), e.attachMediaElement(this._mediaElement))
                        }
                    }, {
                        key: "detachMediaElement",
                        value: function() {
                            var e = this._mediaElement;
                            e && (e.removeEventListener("loadedmetadata", this._onvLoadedMetadata), e.removeEventListener("seeking", this._onvSeeking), e.removeEventListener("canplay", this._onvCanPlay), e.removeEventListener("stalled", this._onvStalled), e.removeEventListener("progress", this._onvProgress), e.removeEventListener("ended", this._onvEnd), e.removeEventListener("error", this._onvError), e.removeEventListener("timeupdate", this._onvTimeUpdate), this._mediaElement = e = null);
                            e = this._msectl;
                            e && (e.detachMediaElement(), e.destroy(), this._msectl = e = null)
                        }
                    }, {
                        key: "load",
                        value: function() {
                            var l = this,
                                t = this._mediaElement;
                            if (!t) throw new E.IllegalStateException("HTMLMediaElement must be attached before load()!");
                            var e = this._transmuxer;
                            if (e) throw new E.IllegalStateException("FlvPlayer.load() has been called, please call unload() first!");
                            0 < t.readyState && (this._requestSetTime = !0, t.currentTime = 0), e = this._transmuxer = new d.default(this._mediaDataSource, this._config), this._receivedInitSegment = [], this._receivedMediaSegment = [], e.on(f.default.INIT_SEGMENT, function(e, t) { l._destroyed || l._config.enableH264DecodeByWASM || (l._msectl || l._initMSEController(), l._receivedInitSegment.push(t)) }), e.on(f.default.MEDIA_SEGMENT, function(e, t) { l._destroyed || l._config.enableH264DecodeByWASM || (l._receivedMediaSegment.push(t), l._mseAppendSegment()) }), e.on(f.default.LOADING_COMPLETE, function() { l._destroyed || (_.default.i(l.TAG, "load video end!!"), l._emitter.emit(y.default.LOADING_COMPLETE), l._loadingCompleted = !0, (l._isWASM || l._config.isLive) && (l._isLoading = !1), l._mseAppendSegment(), l._config.isLive || l._isWASM || (clearTimeout(l._checkDurationTimer), l._checkDurationTimer = setTimeout(l._checkDuration, 300))) }), e.on(f.default.LOADED_HEADER, function(e, t) {
                                var n, r;
                                e && (void 0 !== t && 0 !== t || (e.nextRawId.length < 2 && (l._isPlayBackEnd = !0), r = 0, (t = (n = l.mediaInfoList).length) && (r = n[t - 1].end), e.start = r, t = e.endTime - e.startTime, e.end = l._duration = t + r, n.push(e), _.default.i(l.TAG, "load video header!! startTime:".concat(e.startTime, ". endTime:").concat(e.endTime, ". delta:").concat(e.endTime - e.startTime, ". duration:").concat(Math.round(l._duration))), t < 1e3 && l._loadNextVideo(1)))
                            }), e.on(f.default.FLV_TRANSLATE_MESSAGE, function(e) {
                                var t = e.flvType,
                                    n = e.data,
                                    r = e.audioEncodeType,
                                    i = e.videoEncodeType,
                                    o = u.default.VIDEO_SPS,
                                    s = u.default.MP4_INFO,
                                    a = u.default.LIVE_TIMESTAMP;
                                if (o === t || s === t) {
                                    l._emitter.emit(y.default.VIDEO_ENCODE_TYPE, i);
                                    s = l._plugins.WASMPlayer;
                                    s && !l._isWASM && l._createWASMPlayer(s, i, r)
                                } else if (a === t) return void(l._wasmPlayer ? l._wasmPlayer.receivedLiveTimestamp(n) : l._msePlayLiveTimestamps.push(n));
                                l._emitter.emit(f.default.FLV_TRANSLATE_MESSAGE, e)
                            }), e.on(f.default.LOADED_WASM_VIDEO, function(e) { l._wasmPlayer && (l._wasmPlayer.setVolume(l._volume), l._wasmPlayer.remuxVideo(e)) }), e.on(f.default.LOADED_WASM_AUDIO, function(e) { l._wasmPlayer && (l._wasmPlayer.setVolume(l._volume || 1), l._wasmPlayer.remuxAudio(e)) }), e.on(f.default.RESPONSE_MESSAGE_DATA, function(e) { l._parseResponseMessage(e) }), e.on(f.default.RECOVERED_EARLY_EOF, function() { l._emitter.emit(y.default.RECOVERED_EARLY_EOF) }), e.on(f.default.IO_ERROR, function(e, t) { l._loadNextVideo(l._config.isLive ? 1e3 : 15e3), l._isLoading = !1, l._emitter.emit(y.default.ERROR, g.ErrorTypes.NETWORK_ERROR, e, t) }), e.on(f.default.DEMUX_ERROR, function(e, t) { l._isWASM ? _.default.i(l.TAG, "TransmuxingEvents.DEMUX_ERROR  isWASM:".concat(l._isWASM)) : l._emitter.emit(y.default.ERROR, g.ErrorTypes.MEDIA_ERROR, e, { code: -1, msg: t }) }), e.on(f.default.MEDIA_INFO, function(e) { l._mediaInfo = e, l._emitter.emit(y.default.MEDIA_INFO, Object.assign({}, e)) }), e.on(f.default.STATISTICS_INFO, function(e) { l._statisticsInfo = l._fillStatisticsInfo(e), l._emitter.emit(y.default.STATISTICS_INFO, Object.assign({}, l._statisticsInfo)) }), e.on(f.default.RECOMMEND_SEEKPOINT, function(e) { t && !l._config.accurateSeek && (l._requestSetTime = !0, t.currentTime = e / 1e3) }), this._isLoading = !0, this._loadingCompleted = !1, e.open()
                        }
                    }, {
                        key: "_mseAppendSegment",
                        value: function() {
                            if (this._mseSourceOpened) {
                                var e, t = this._msectl;
                                if (this._receivedInitSegment && this._receivedInitSegment.length)
                                    for (;
                                        (e = this._receivedInitSegment.shift()) && t.appendInitSegment(e), e;);
                                var n = this._receivedMediaSegment;
                                if (n && n.length) {
                                    var r, i = n[n.length - 1];
                                    if (i) {
                                        for (;
                                            (e = n.shift()) && t.appendMediaSegment(e), e;);
                                        this._config.lazyLoad && !this._config.isLive && (r = this._mediaElement.currentTime, i.info.endDts >= 1e3 * (r + this._config.lazyLoadMaxDuration) && null == this._progressChecker && (_.default.v(this.TAG, "Maximum buffering duration exceeded, suspend transmuxing task 1"), this._suspendTransmuxer()))
                                    }
                                    this._isLive || !this._loadingCompleted || this._isLoading || t.endOfStream()
                                }
                            }
                        }
                    }, { key: "unload", value: function() { this._mediaElement && this._mediaElement.pause(), this._msectl && this._msectl.seek(0), this._transmuxer && (this._transmuxer.close(), this._transmuxer.destroy(), this._transmuxer = null) } }, {
                        key: "seek",
                        value: function(e) {
                            this._isMP4Ended = !1, this.pause();
                            var t = this._mediaElement;
                            t && (t.currentTime = e), this._wasmPlayer ? this._wasmPlayer.seek(e, function(e) { t && t.play() }) : t.play()
                        }
                    }, { key: "play", value: function() { this._isMP4Ended = !1, this._isWASM && this._wasmPlayer && this._wasmPlayer.resume(), this._mediaElement && this._mediaElement.play() } }, { key: "pause", value: function() { this._isWASM && this._wasmPlayer && this._wasmPlayer.pause(), clearTimeout(this._progressCheckTimer), this._mediaElement && this._mediaElement.pause() } }, { key: "setPlaybackRate", value: function(e) { this._isWASM ? this._wasmPlayer && this._wasmPlayer.setPlaybackRate(e) : this._mediaElement && (this._mediaElement.playbackRate = e) } }, { key: "seeking", get: function() { return this._wasmPlayer && this._wasmPlayer.seeking, this._mediaElement.seeking } }, { key: "type", get: function() { return this._type } }, { key: "buffered", get: function() { return (this._isWASM && this._wasmPlayer ? this._wasmPlayer : this._mediaElement).buffered } }, { key: "duration", get: function() { return (this._isWASM && this._wasmPlayer ? this._wasmPlayer : this._mediaElement).duration } }, { key: "volume", get: function() { return this._wasmPlayer && this._wasmPlayer ? this._wasmPlayer.getVolume() : this._mediaElement.volume }, set: function(e) { this._volume = e, this._wasmPlayer && this._wasmPlayer.setVolume(e), this._mediaElement && (this._mediaElement.volume = e) } }, { key: "muted", get: function() { return this._mediaElement.muted }, set: function(e) { this._wasmPlayer && this._wasmPlayer.setVolume(0), this._mediaElement && (this._mediaElement.muted = e) } }, { key: "currentTime", get: function() { return this._isWASM && this._wasmPlayer ? this._wasmPlayer.currentTime : this._mediaElement ? this._mediaElement.currentTime : 0 }, set: function(e) { this._mediaElement ? this._internalSeek(e) : this._pendingSeekTime = e } }, { key: "mediaInfo", get: function() { return Object.assign({}, this._mediaInfo) } }, { key: "statisticsInfo", get: function() { return null == this._statisticsInfo && (this._statisticsInfo = {}), this._statisticsInfo = this._fillStatisticsInfo(this._statisticsInfo), Object.assign({}, this._statisticsInfo) } }, {
                        key: "_fillStatisticsInfo",
                        value: function(e) {
                            e.playerType = this._type, this._downloadSpeed = e.speed;
                            var t = this._mediaElement;
                            if (!(t instanceof HTMLVideoElement)) return e;
                            var n, r = !0,
                                i = 0,
                                o = 0;
                            return t.getVideoPlaybackQuality ? (i = (n = t.getVideoPlaybackQuality()).totalVideoFrames, o = n.droppedVideoFrames) : null != t.webkitDecodedFrameCount ? (i = t.webkitDecodedFrameCount, o = t.webkitDroppedFrameCount) : r = !1, r && (e.decodedFrames = i, e.droppedFrames = o), e
                        }
                    }, { key: "_suspendTransmuxer", value: function() { this._transmuxer && (this._transmuxer.pause(), null == this._progressChecker && (this._progressChecker = window.setInterval(this._checkProgressAndResume.bind(this), 1e3))) } }, {
                        key: "_checkProgressAndResume",
                        value: function() {
                            for (var e = this._mediaElement, t = e.currentTime, n = e.buffered, r = !1, i = 0; i < n.length; i++) {
                                var o = n.start(i),
                                    s = n.end(i);
                                if (o <= t && t < s) { t >= s - this._config.lazyLoadRecoverDuration && (r = !0); break }
                            }
                            r && (window.clearInterval(this._progressChecker), this._progressChecker = null, r && (_.default.v(this.TAG, "Continue loading from paused position"), this._transmuxer.resume()))
                        }
                    }, {
                        key: "_isTimepointBuffered",
                        value: function(e) {
                            for (var t = this._mediaElement.buffered, n = 0; n < t.length; n++) {
                                var r = t.start(n),
                                    i = t.end(n);
                                if (r <= e && e < i) return !0
                            }
                            return !1
                        }
                    }, {
                        key: "_internalSeek",
                        value: function(e) {
                            var t, n = this._isTimepointBuffered(e),
                                r = !1,
                                i = 0,
                                o = this._mediaElement;
                            e < 1 && 0 < o.buffered.length && (((t = o.buffered.start(0)) < 1 && e < t || m.default.safari) && (r = !0, i = m.default.safari ? .1 : t)), r ? (this._requestSetTime = !0, o.currentTime = i) : n ? (this._alwaysSeekKeyframe ? this._msectl && (n = this._msectl.getNearestKeyframe(Math.floor(1e3 * e)), this._requestSetTime = !0, o.currentTime = null != n ? n.dts / 1e3 : e) : (this._requestSetTime = !0, o.currentTime = e), null != this._progressChecker && this._checkProgressAndResume()) : (null != this._progressChecker && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._msectl && this._msectl.seek(e), this._transmuxer.seek(Math.floor(1e3 * e)), this._config.accurateSeek && (this._requestSetTime = !0, o.currentTime = e))
                        }
                    }, {
                        key: "_checkAndApplyUnbufferedSeekpoint",
                        value: function() {
                            var e, t = this._mediaElement;
                            this._seekpointRecord && (this._seekpointRecord.recordTime <= this._now() - 100 ? (e = t.currentTime, this._seekpointRecord = null, this._isTimepointBuffered(e) || (null != this._progressChecker && (window.clearTimeout(this._progressChecker), this._progressChecker = null), this._msectl && this._msectl.seek(e), this._transmuxer.seek(Math.floor(1e3 * e)), this._config.accurateSeek && (this._requestSetTime = !0, t.currentTime = e))) : window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50))
                        }
                    }, {
                        key: "_checkAndResumeStuckPlayback",
                        value: function(e) {
                            var t, n, r = this._mediaElement;
                            e || !this._receivedCanPlay || r.readyState < 2 ? (t = 0 < (n = r.buffered).length, e = r.currentTime, n = t ? n.start(0) : 0, t && e < n && (_.default.w(this.TAG, "Playback seems stuck at ".concat(e, ", seek to ").concat(n)), this._requestSetTime = !0, r.currentTime = n, r.removeEventListener("progress", this._onvProgress))) : r.removeEventListener("progress", this._onvProgress)
                        }
                    }, {
                        key: "_checkProgress",
                        value: function() {
                            var t = this,
                                n = this._mediaElement;
                            clearTimeout(this._progressCheckTimer), this._progressCheckTimer = setTimeout(function() { var e;!t || t._isWASM || t._wasmPlayer && t._wasmPlayer.paused || !n || t._isPlayBackEnd || n.paused || (e = t.buffered, n.error ? (console.error(n.error), t._emitter.emit(y.default.ERROR, g.ErrorTypes.MEDIA_ERROR, g.ErrorDetails.MEDIA_MSE_ERROR, { timestamp: t._playTimestamp, isLive: t._config.isLive })) : e && (!e.length || e.end(e.length - 1) + .5 < t.currentTime || e.end(e.length - 1) > t.duration) ? t._emitter.emit(y.default.ERROR, g.ErrorTypes.MEDIA_ERROR, g.ErrorDetails.MEDIA_MSE_ERROR, { timestamp: t._playTimestamp, isLive: t._config.isLive, duration: t.duration, currentTime: t.currentTime, bufferEndTime: e.length ? e.end(e.length - 1) : 0 }) : t._emitter.emit(y.default.LOADING)) }, 1e3)
                        }
                    }, {
                        key: "_loadNextVideo",
                        value: function(e) {
                            var t = this;
                            if (!this._isPlayBackEnd) {
                                if (!this._isLoading) return this._isLoading = !0, this._loadingCompleted = !1, void(this._transmuxer && this._transmuxer.open());
                                clearTimeout(this._loadNextVideoTimer), this._loadNextVideoTimer = setTimeout(function() { t._loadNextVideo() }, this._config.isLive ? 1e3 : e || 5e3)
                            }
                        }
                    }, {
                        key: "_checkAndUpdateSeekTime",
                        value: function() {
                            var e, t, n;
                            m.default.msedge || this._config.enableStashBuffer && this._downloadSpeed < 25 || (this._lastCheckSeekCallTime = this._lastCheckSeekCallTime || 0, (t = Date.now()) - this._lastCheckSeekCallTime < 500 || (this._lastCheckSeekCallTime = t, clearTimeout(this._checkAndUpdateSeekTimer), this._lastCheckSeekPlayTime = this._lastCheckSeekPlayTime || 0, e = this.currentTime || 0, n = this.buffered, t = this._config.liveBufferSeconds, e > this._lastCheckSeekPlayTime && n && n.length && (t + 1 < (n = this._isWASM ? this.duration : n.end(n.length - 1)) - e && 1 < n - t - this._lastCheckSeekPlayTime && (_.default.i(this.TAG, " bufferedEnd:".concat(n, ", currentTime:").concat(e, ", delta:").concat(n - e)), this._lastCheckSeekPlayTime = this.currentTime = n - t)), this._isWASM || this._mediaElement.paused || this.play(), this._checkAndUpdateSeekTimer = setTimeout(this._checkAndUpdateSeekTime.bind(this), 500)))
                        }
                    }, {
                        key: "sendToWebSocket",
                        value: function(e) {
                            e = JSON.stringify(e), e = c.default.string2Unit8Array(e);
                            this._sendToWebSocketServer(e, h.default.REQUEST_MESSAGE_DATA)
                        }
                    }, {
                        key: "getSectionList",
                        value: function(e, t) {
                            var n = this,
                                r = e.startTime,
                                i = e.endTime,
                                o = e.pageSize,
                                e = e.timeout,
                                e = void 0 === e ? 5e3 : e;
                            this._getSectionListCallback ? t && t() : (o = JSON.stringify({ startTime: r, endTime: i, pageSize: o }), o = c.default.string2Unit8Array(o), this._getSectionListCallback = t, this._sendToWebSocketServer(o, h.default.TIMELINE_SECTION_LIST), clearTimeout(this._getSectionListCallbackTimer), this._getSectionListCallbackTimer = setTimeout(function() { n._getSectionListCallback && (n._getSectionListCallback(), n._getSectionListCallback = null) }, e))
                        }
                    }, {
                        key: "getEventList",
                        value: function(e, t) {
                            var n = this,
                                r = e.startTime,
                                i = e.endTime,
                                o = e.pageSize,
                                e = e.timeout,
                                e = void 0 === e ? 5e3 : e;
                            this._getEventListCallback ? t && t() : (o = JSON.stringify({ startTime: r, endTime: i, pageSize: o }), o = c.default.string2Unit8Array(o), this._getEventListCallback = t, this._sendToWebSocketServer(o, h.default.TIMELINE_EVENT_LIST), clearTimeout(this._getEventListCallbackTimer), this._getEventListCallbackTimer = setTimeout(function() { n._getEventListCallback && (n._getEventListCallback(), n._getEventListCallback = null) }, e))
                        }
                    }, {
                        key: "_createWASMPlayer",
                        value: function(e, t, n) {
                            var r = this;
                            if (this._wasmPlayer) return this._wasmPlayer;
                            "aac" === n && !A && T || this.detachMediaElement(), this._isWASM = !0;
                            n = this._wasmPlayer = new e(+t, +n, this._config);
                            n.on(y.default.WASM_TIME_UPDATE, this._onvTimeUpdate);
                            var i = y.default.WASM_STATISTICS_INFO,
                                o = y.default.WASM_BUFFER_UPDATE;
                            n.on(i, function(e) { r._emitter.emit(i, e) }), n.on(o, function() { r._emitter.emit(o) }), n.on(y.default.WASM_DURATION_UPDATE, function() { r._config.isLive || r._isLoading || r._checkDuration() })
                        }
                    }, {
                        key: "_parseResponseMessage",
                        value: function(e) {
                            var t = new Uint8Array(e),
                                n = t[0],
                                r = c.default.unit8Array2String(t.slice(1));
                            n === h.default.RESPONSE_TIMELINE_DATA ? this._parseTimelineData(r) : n === h.default.PERSON_FACE_INFO ? (e = this._wasmPlayer) && e.receivedFaceInfo && (t = JSON.parse(r), e.receivedFaceInfo(t)) : n === h.default.RESPONSE_MESSAGE_DATA && this._emitter.emit(y.default.RESPONSE_MESSAGE_DATA, r)
                        }
                    }, {
                        key: "_parseTimelineData",
                        value: function(t) {
                            try {
                                var e = JSON.parse(t);
                                e.cmdType === h.default.TIMELINE_SECTION_LIST ? this._getSectionListCallback && (this._getSectionListCallback(e), this._getSectionListCallback = null) : e.cmdType === h.default.TIMELINE_EVENT_LIST && this._getEventListCallback && (this._getEventListCallback(e), this._getEventListCallback = null)
                            } catch (e) { _.default.e(this.TAG, "_parseTimelineData error:".concat(t)) }
                        }
                    }, {
                        key: "_onAudioTalkData",
                        value: function(e) {
                            var t = e ? h.default.AUDIO_TALK_DATA : h.default.AUDIO_TALK_STOP;
                            this._sendToWebSocketServer(new Uint8Array(e), t)
                        }
                    }, {
                        key: "_sendToWebSocketServer",
                        value: function(e, t) {
                            var n;
                            this._transmuxer && (n = e ? e.length : 0, (n = new Uint8Array(n + 1)).set(new Uint8Array([t]), 0), e && n.set(e, 1), this._transmuxer.sendToWebSocketServer(n))
                        }
                    }, {
                        key: "initTalk",
                        value: function(t, e) {
                            var n = this,
                                r = 1 < arguments.length && void 0 !== e ? e : {};
                            this._config.isLive && ((e = this._audioTalk) || ((e = this._audioTalk = new S.default(r)).on("upload", this._onAudioTalkData.bind(this)), e.on("activityLevel", function(e) { n._emitter.emit(y.default.MIRCO_PHONE_ACTIVITY, e) })), e.init(function(e) { t(e), e && n._emitter.emit(y.default.MIRCO_PHONE_FAIL) }))
                        }
                    }, {
                        key: "startTalk",
                        value: function(e) {
                            var t, n = this;
                            this._config.isLive && ((t = this._audioTalk) ? t.start() : this.initTalk(function(e) { _.default.i(n.TAG, "init audiotalk: ".concat(JSON.stringify(e))), e || n._audioTalk.start() }, e))
                        }
                    }, { key: "stopTalk", value: function() { this._config.isLive && this._audioTalk && this._audioTalk.stop() } }, { key: "playTalk", value: function() { this._config.isLive && this._audioTalk && this._audioTalk.play() } }, { key: "resume", value: function() { this._isWASM && this._wasmPlayer && this._wasmPlayer.resume(), this._mediaElement && this._mediaElement.play() } }, { key: "setFaceBorderColor", value: function(e) { this._config.faceBorderColor = Object.assign(this._config.faceBorderColor || {}, { default: e }), this._wasmPlayer && this._wasmPlayer.setFaceBorderColor(e) } }, { key: "setFaceDrawSwitcher", value: function(e) { this._config.faceBorderSwitcher = e, this._wasmPlayer && this._wasmPlayer.setFaceDrawSwitcher(e) } }]), r
                }();
            n.default = e
        }, { "../config.js": 32, "../core/features.js": 33, "../core/mse-controller.js": 36, "../core/mse-events.js": 37, "../core/transmuxer.js": 38, "../core/transmuxing-events.js": 40, "../extra/audioTalk.js": 48, "../utils/browser.js": 69, "../utils/exception.js": 70, "../utils/flvTranslateTypes.js": 71, "../utils/logger.js": 72, "../utils/string-convert.js": 75, "./player-errors.js": 63, "./player-events.js": 64, "./websocket-cmd-type": 65, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/defineProperty": 10, "@babel/runtime/helpers/interopRequireDefault": 14, "@babel/runtime/helpers/typeof": 21, events: 30 }],
        62: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/typeof")),
                o = r(e("@babel/runtime/helpers/classCallCheck")),
                s = r(e("@babel/runtime/helpers/createClass")),
                a = r(e("events")),
                l = r(e("./player-events.js")),
                u = e("../config.js"),
                c = e("../utils/exception.js"),
                e = function() {
                    function n(e, t) {
                        if ((0, o.default)(this, n), this.TAG = "NativePlayer", this._type = "NativePlayer", this._emitter = new a.default, this._config = (0, u.createDefaultConfig)(), "object" === (0, i.default)(t) && Object.assign(this._config, t), "flv" === e.type.toLowerCase()) throw new c.InvalidArgumentException("NativePlayer does't support flv MediaDataSource input!");
                        if (Object.prototype.hasOwnProperty.call(e, "segments")) throw new c.InvalidArgumentException("NativePlayer(".concat(e.type, ") doesn't support multipart playback!"));
                        this.e = { onvLoadedMetadata: this._onvLoadedMetadata.bind(this), onvCanPlay: this._onvCanPlay.bind(this), onvEnded: this._onvEnded.bind(this), onvError: this._onvError.bind(this), onvPlaying: this._onvPlaying.bind(this), onvTimeupdate: this._onvTimeupdate.bind(this) }, this._pendingSeekTime = null, this._statisticsReporter = null, this._mediaDataSource = e, this._mediaElement = null
                    }
                    return (0, s.default)(n, [{ key: "destroy", value: function() { this._mediaElement && (this.unload(), this.detachMediaElement()), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null } }, {
                        key: "on",
                        value: function(e, t) {
                            var n = this;
                            e === l.default.MEDIA_INFO ? null != this._mediaElement && 0 !== this._mediaElement.readyState && Promise.resolve().then(function() { n._emitter.emit(l.default.MEDIA_INFO, n.mediaInfo) }) : e === l.default.STATISTICS_INFO && null != this._mediaElement && 0 !== this._mediaElement.readyState && Promise.resolve().then(function() { n._emitter.emit(l.default.STATISTICS_INFO, n.statisticsInfo) }), this._emitter.addListener(e, t)
                        }
                    }, { key: "off", value: function(e, t) { this._emitter.removeListener(e, t) } }, { key: "attachMediaElement", value: function(e) { if ((this._mediaElement = e).addEventListener("loadedmetadata", this.e.onvLoadedMetadata), e.addEventListener("canplay", this.e.onvCanPlay), e.addEventListener("ended", this.e.onvEnded), e.addEventListener("error", this.e.onvError), e.addEventListener("playing", this.e.onvPlaying), e.addEventListener("timeupdate", this.e.onvTimeupdate), null != this._pendingSeekTime) try { e.currentTime = this._pendingSeekTime, this._pendingSeekTime = null } catch (e) {} } }, { key: "detachMediaElement", value: function() { this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay), this._mediaElement.removeEventListener("ended", this.e.onvEnded), this._mediaElement.removeEventListener("error", this.e.onvError), this._mediaElement.removeEventListener("playing", this.e.onvPlaying), this._mediaElement.removeEventListener("timeupdate", this.e.onvTimeupdate), this._mediaElement = null), null != this._statisticsReporter && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null) } }, {
                        key: "load",
                        value: function() {
                            if (!this._mediaElement) throw new c.IllegalStateException("HTMLMediaElement must be attached before load()!");
                            this._mediaElement.src = this._mediaDataSource.url, 0 < this._mediaElement.readyState && (this._mediaElement.currentTime = 0), this._mediaElement.preload = "auto", this._mediaElement.load(), this._statisticsReporter = window.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval)
                        }
                    }, { key: "unload", value: function() { this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src")), null != this._statisticsReporter && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null) } }, { key: "play", value: function() { return this._mediaElement.play() } }, { key: "pause", value: function() { this._mediaElement.pause() } }, { key: "type", get: function() { return this._type } }, { key: "buffered", get: function() { return this._mediaElement.buffered } }, { key: "duration", get: function() { return this._mediaElement.duration } }, { key: "volume", get: function() { return this._mediaElement.volume }, set: function(e) { this._mediaElement.volume = e } }, { key: "muted", get: function() { return this._mediaElement.muted }, set: function(e) { this._mediaElement.muted = e } }, { key: "currentTime", get: function() { return this._mediaElement ? this._mediaElement.currentTime : 0 }, set: function(e) { this._mediaElement ? this._mediaElement.currentTime = e : this._pendingSeekTime = e } }, { key: "mediaInfo", get: function() { var e = { mimeType: (this._mediaElement instanceof HTMLAudioElement ? "audio/" : "video/") + this._mediaDataSource.type }; return this._mediaElement && (e.duration = Math.floor(1e3 * this._mediaElement.duration), this._mediaElement instanceof HTMLVideoElement && (e.width = this._mediaElement.videoWidth, e.height = this._mediaElement.videoHeight)), e } }, {
                        key: "statisticsInfo",
                        get: function() {
                            var e = { playerType: this._type, url: this._mediaDataSource.url };
                            if (!(this._mediaElement instanceof HTMLVideoElement)) return e;
                            var t, n = !0,
                                r = 0,
                                i = 0;
                            return this._mediaElement.getVideoPlaybackQuality ? (r = (t = this._mediaElement.getVideoPlaybackQuality()).totalVideoFrames, i = t.droppedVideoFrames) : null != this._mediaElement.webkitDecodedFrameCount ? (r = this._mediaElement.webkitDecodedFrameCount, i = this._mediaElement.webkitDroppedFrameCount) : n = !1, n && (e.decodedFrames = r, e.droppedFrames = i), e
                        }
                    }, { key: "setPlaybackRate", value: function(e) { this._mediaElement.playbackRate = e } }, { key: "_onvLoadedMetadata", value: function() { null != this._pendingSeekTime && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null), this._emitter && this._emitter.emit(l.default.MEDIA_INFO, this.mediaInfo) } }, { key: "_onvCanPlay", value: function() { this._emitter && this._emitter.emit(l.default.CAN_PLAY) } }, { key: "_onvEnded", value: function() { this._emitter && this._emitter.emit(l.default.PLAY_ENDED) } }, {
                        key: "_onvError",
                        value: function(e) {
                            var t = this._mediaElement.error || {};
                            this._emitter && this._emitter.emit(l.default.ERROR, "MEDIA_ERROR", e, t)
                        }
                    }, { key: "_onvPlaying", value: function() { this._emitter && this._emitter.emit(l.default.PLAYING) } }, { key: "_onvTimeupdate", value: function() { this._emitter && this._emitter.emit(l.default.TIME_UPDATE, Math.round(1e3 * this.currentTime)) } }, { key: "_reportStatisticsInfo", value: function() { this._emitter && this._emitter.emit(l.default.STATISTICS_INFO, this.statisticsInfo) } }]), n
                }();
            n.default = e
        }, { "../config.js": 32, "../utils/exception.js": 70, "./player-events.js": 64, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14, "@babel/runtime/helpers/typeof": 21, events: 30 }],
        63: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.ErrorDetails = n.ErrorTypes = void 0;
            var i = e("../io/loader.js"),
                e = r(e("../demux/demux-errors.js"));
            n.ErrorTypes = { NETWORK_ERROR: "NetworkError", MEDIA_ERROR: "MediaError", OTHER_ERROR: "OtherError" };
            e = { NETWORK_EXCEPTION: i.LoaderErrors.EXCEPTION, NETWORK_STATUS_CODE_INVALID: i.LoaderErrors.HTTP_STATUS_CODE_INVALID, NETWORK_TIMEOUT: i.LoaderErrors.CONNECTING_TIMEOUT, NETWORK_UNRECOVERABLE_EARLY_EOF: i.LoaderErrors.UNRECOVERABLE_EARLY_EOF, MEDIA_MSE_ERROR: "MediaMSEError", MEDIA_FORMAT_ERROR: e.default.FORMAT_ERROR, MEDIA_FORMAT_UNSUPPORTED: e.default.FORMAT_UNSUPPORTED, MEDIA_CODEC_UNSUPPORTED: e.default.CODEC_UNSUPPORTED };
            n.ErrorDetails = e
        }, { "../demux/demux-errors.js": 43, "../io/loader.js": 53, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        64: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var r = { ERROR: "error", LOADING_COMPLETE: "loading_complete", RECOVERED_EARLY_EOF: "recovered_early_eof", MEDIA_INFO: "media_info", STATISTICS_INFO: "statistics_info", LOADING: "loading", SEEKING: "seeking", TIME_UPDATE: "timeupdate", VOLUME_CHANGE: "volumechange", PLAYING: "playing", PLAY_ENDED: "ended", CAN_PLAY: "canplay", FLV_TRANSLATE_MESSAGE: "FLV_TRANSLATE_MESSAGE", MIRCO_PHONE_FAIL: "microphoneFail", MIRCO_PHONE_ACTIVITY: "microphoneactivity", WASM_TIME_UPDATE: "WASM_TIME_UPDATE", WASM_STATISTICS_INFO: "WASM_STATISTICS_INFO", WASM_DURATION_UPDATE: "WASM_DURATION_UPDATE", WASM_BUFFER_UPDATE: "WASM_BUFFER_UPDATE", VIDEO_ENCODE_TYPE: "VIDEO_ENCODE_TYPE", RESPONSE_MESSAGE_DATA: "RESPONSE_MESSAGE_DATA" };
            n.default = r
        }, {}],
        65: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var r = { FLV_STREAM_DATA: 0, AUDIO_TALK_DATA: 1, AUDIO_TALK_STOP: 2, REQUEST_MESSAGE_DATA: 3, RESPONSE_MESSAGE_DATA: 4, RESPONSE_TIMELINE_DATA: 5, TIMELINE_SECTION_LIST: 100, TIMELINE_EVENT_LIST: 101, PERSON_FACE_INFO: 102, RESPONSE_MESSAGE_DATA_TYPE: { AUDIO_ENCODE_INFO: 1, RELAY_CONNECT_SUCCESS: 2, SDCARD_PLAYBACK_LIMIT: 3, DEVICE_STATUS_OFFLINE: 4 }, REQUEST_MESSAGE_DATA_TYPE: { START_PLAY: 1, STOP_PLAY: 2, REQUEST_WS_TIME: 3 } };
            n.default = r
        }, {}],
        66: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                e = function() {
                    function e() {
                        (0, i.default)(this, e)
                    }
                    return (0, o.default)(e, null, [{ key: "getSilentFrame", value: function(e, t) { if ("mp4a.40.2" === e) { if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]); if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]); if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]); if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]); if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]); if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]) } else { if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]); if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]); if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]) } return null } }]), e
                }();
            n.default = e
        }, { "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        67: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                e = function() {
                    function c() {
                        (0, i.default)(this, c)
                    }
                    return (0, o.default)(c, null, [{
                        key: "init",
                        value: function() {
                            for (var e in c.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], mvex: [], mvhd: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [], ".mp3": [] }) Object.prototype.hasOwnProperty.call(c.types, e) && (c.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                            var t = c.constants = {};
                            t.FTYP = new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49]), t.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), t.STTS = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.STSC = t.STCO = t.STTS, t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t.HDLR_VIDEO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), t.HDLR_AUDIO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), t.DREF = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
                        }
                    }, {
                        key: "box",
                        value: function(e) {
                            for (var t = 8, n = null, r = Array.prototype.slice.call(arguments, 1), i = r.length, o = 0; o < i; o++) t += r[o].byteLength;
                            (n = new Uint8Array(t))[0] = t >>> 24 & 255, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = 255 & t, n.set(e, 4);
                            for (var s = 8, a = 0; a < i; a++) n.set(r[a], s), s += r[a].byteLength;
                            return n
                        }
                    }, {
                        key: "generateInitSegment",
                        value: function(e) {
                            var t = c.box(c.types.ftyp, c.constants.FTYP),
                                n = c.moov(e),
                                e = new Uint8Array(t.byteLength + n.byteLength);
                            return e.set(t, 0), e.set(n, t.byteLength), e
                        }
                    }, {
                        key: "moov",
                        value: function(e) {
                            var t = c.mvhd(e.timescale, e.duration),
                                n = c.trak(e),
                                e = c.mvex(e);
                            return c.box(c.types.moov, t, n, e)
                        }
                    }, { key: "mvhd", value: function(e, t) { return c.box(c.types.mvhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255])) } }, { key: "trak", value: function(e) { return c.box(c.types.trak, c.tkhd(e), c.mdia(e)) } }, {
                        key: "tkhd",
                        value: function(e) {
                            var t = e.id,
                                n = e.duration,
                                r = e.presentWidth,
                                e = e.presentHeight;
                            return c.box(c.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 0, 0, 0, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, r >>> 8 & 255, 255 & r, 0, 0, e >>> 8 & 255, 255 & e, 0, 0]))
                        }
                    }, { key: "mdia", value: function(e) { return c.box(c.types.mdia, c.mdhd(e), c.hdlr(e), c.minf(e)) } }, {
                        key: "mdhd",
                        value: function(e) {
                            var t = e.timescale,
                                e = e.duration;
                            return c.box(c.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, 85, 196, 0, 0]))
                        }
                    }, {
                        key: "hdlr",
                        value: function(e) {
                            var t = null,
                                t = "audio" === e.type ? c.constants.HDLR_AUDIO : c.constants.HDLR_VIDEO;
                            return c.box(c.types.hdlr, t)
                        }
                    }, {
                        key: "minf",
                        value: function(e) {
                            var t = null,
                                t = "audio" === e.type ? c.box(c.types.smhd, c.constants.SMHD) : c.box(c.types.vmhd, c.constants.VMHD);
                            return c.box(c.types.minf, t, c.dinf(), c.stbl(e))
                        }
                    }, { key: "dinf", value: function() { return c.box(c.types.dinf, c.box(c.types.dref, c.constants.DREF)) } }, { key: "stbl", value: function(e) { return c.box(c.types.stbl, c.stsd(e), c.box(c.types.stts, c.constants.STTS), c.box(c.types.stsc, c.constants.STSC), c.box(c.types.stsz, c.constants.STSZ), c.box(c.types.stco, c.constants.STCO)) } }, { key: "stsd", value: function(e) { return "audio" === e.type ? "mp3" === e.codec ? c.box(c.types.stsd, c.constants.STSD_PREFIX, c.mp3(e)) : c.box(c.types.stsd, c.constants.STSD_PREFIX, c.mp4a(e)) : c.box(c.types.stsd, c.constants.STSD_PREFIX, c.avc1(e)) } }, {
                        key: "mp3",
                        value: function(e) {
                            var t = e.channelCount,
                                e = e.audioSampleRate,
                                e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 16, 0, 0, 0, 0, e >>> 8 & 255, 255 & e, 0, 0]);
                            return c.box(c.types[".mp3"], e)
                        }
                    }, {
                        key: "mp4a",
                        value: function(e) {
                            var t = e.channelCount,
                                n = e.audioSampleRate,
                                n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 16, 0, 0, 0, 0, n >>> 8 & 255, 255 & n, 0, 0]);
                            return c.box(c.types.mp4a, n, c.esds(e))
                        }
                    }, {
                        key: "esds",
                        value: function(e) {
                            var t = e.config || [],
                                e = t.length,
                                t = new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t).concat([6, 1, 2]));
                            return c.box(c.types.esds, t)
                        }
                    }, {
                        key: "avc1",
                        value: function(e) {
                            var t = e.avcc,
                                n = e.codecWidth,
                                e = e.codecHeight,
                                e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, n >>> 8 & 255, 255 & n, e >>> 8 & 255, 255 & e, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 10, 120, 113, 113, 47, 102, 108, 118, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
                            return c.box(c.types.avc1, e, c.box(c.types.avcC, t))
                        }
                    }, { key: "mvex", value: function(e) { return c.box(c.types.mvex, c.trex(e)) } }, { key: "trex", value: function(e) { e = e.id, e = new Uint8Array([0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]); return c.box(c.types.trex, e) } }, { key: "moof", value: function(e, t) { return c.box(c.types.moof, c.mfhd(e.sequenceNumber), c.traf(e, t)) } }, { key: "mfhd", value: function(e) { e = new Uint8Array([0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]); return c.box(c.types.mfhd, e) } }, {
                        key: "traf",
                        value: function(e, t) {
                            var n = e.id,
                                r = c.box(c.types.tfhd, new Uint8Array([0, 0, 0, 0, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n])),
                                n = c.box(c.types.tfdt, new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t])),
                                t = c.sdtp(e),
                                e = c.trun(e, t.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
                            return c.box(c.types.traf, r, n, e, t)
                        }
                    }, {
                        key: "sdtp",
                        value: function(e) {
                            for (var t = e.samples || [], n = t.length, r = new Uint8Array(4 + n), i = 0; i < n; i++) {
                                var o = t[i].flags;
                                r[i + 4] = o.isLeading << 6 | o.dependsOn << 4 | o.isDependedOn << 2 | o.hasRedundancy
                            }
                            return c.box(c.types.sdtp, r)
                        }
                    }, {
                        key: "trun",
                        value: function(e, t) {
                            var n = e.samples || [],
                                r = n.length,
                                e = 12 + 16 * r,
                                i = new Uint8Array(e);
                            t += 8 + e, i.set([0, 0, 15, 1, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t], 0);
                            for (var o = 0; o < r; o++) {
                                var s = n[o].duration,
                                    a = n[o].size,
                                    l = n[o].flags,
                                    u = n[o].cts;
                                i.set([s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, l.isLeading << 2 | l.dependsOn, l.isDependedOn << 6 | l.hasRedundancy << 4 | l.isNonSync, 0, 0, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u], 12 + 16 * o)
                            }
                            return c.box(c.types.trun, i)
                        }
                    }, { key: "mdat", value: function(e) { return c.box(c.types.mdat, e) } }]), c
                }();
            e.init(), n.default = e
        }, { "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        68: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                M = r(e("../utils/logger.js")),
                N = r(e("./mp4-generator.js")),
                x = r(e("./aac-silent.js")),
                B = r(e("../utils/browser.js")),
                U = e("../core/media-segment-info.js"),
                s = e("../utils/exception.js"),
                e = (r(e("../core/transmuxing-events.js")), function() {
                    function t(e) {
                        (0, i.default)(this, t), this.TAG = "MP4Remuxer", this._config = e, this._isLive = !0 === e.isLive, this._dtsBase = -1, this._dtsBaseInited = !1, this._audioDtsBase = 1 / 0, this._videoDtsBase = 1 / 0, this._audioNextDts = void 0, this._videoNextDts = void 0, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList = new U.MediaSegmentInfoList("audio"), this._videoSegmentInfoList = new U.MediaSegmentInfoList("video"), this._onInitSegment = null, this._onMediaSegment = null, this._forceFirstIDR = !(!B.default.chrome || !(B.default.version.major < 50 || 50 === B.default.version.major && B.default.version.build < 2661)), this._fillSilentAfterSeek = B.default.msedge || B.default.msie, this._mp3UseMpegAudio = !B.default.firefox, this._fillAudioTimestampGap = this._config.fixAudioTimestampGap, this._lastVideoTime = -1, this._lastAudioTime = -1, this._videoLastEndTime = 0, this._audioLastEndTime = 0, this._videoAvgDuration = -1, this._audioAvgDuration = 128
                    }
                    return (0, o.default)(t, [{ key: "destroy", value: function() { this._dtsBase = -1, this._dtsBaseInited = !1, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList.clear(), this._audioSegmentInfoList = null, this._videoSegmentInfoList.clear(), this._videoSegmentInfoList = null, this._onInitSegment = null, this._onMediaSegment = null } }, { key: "bindDataSource", value: function(e) { return e.onDataAvailable = this.remux.bind(this), e.onTrackMetadata = this._onTrackMetadataReceived.bind(this), this } }, { key: "onInitSegment", get: function() { return this._onInitSegment }, set: function(e) { this._onInitSegment = e } }, { key: "onMediaSegment", get: function() { return this._onMediaSegment }, set: function(e) { this._onMediaSegment = e } }, { key: "insertDiscontinuity", value: function() { this._audioNextDts = this._videoNextDts = void 0 } }, { key: "seek", value: function() { this._videoSegmentInfoList.clear(), this._audioSegmentInfoList.clear() } }, {
                        key: "remux",
                        value: function(t, e) {
                            var n, r, i = this;
                            if (!this._onMediaSegment) throw new s.IllegalStateException("MP4Remuxer: onMediaSegment callback must be specificed!");
                            this._liveBufferData(t, e) || (r = e.samples || [], n = t.samples || [], r = n.length, this._dtsBaseInited || this._calculateDtsBase(t, e), this._remuxVideo(e), 1 < r ? n.forEach(function(e) { t.samples = [e], t.length = e.unit.length, i._remuxAudio(t) }) : this._remuxAudio(t))
                        }
                    }, {
                        key: "_liveBufferData",
                        value: function(e, t) {
                            var n = this._config,
                                r = n.isLive,
                                i = n.liveBufferSeconds;
                            if (!r || i <= 0) return !1;
                            i *= 1e3;
                            var o = this._audioMeta,
                                n = t.samples || [],
                                r = e.samples || [],
                                t = n.length,
                                e = r.length;
                            return !(this._dtsBaseInited || !(t && n[t - 1].dts - n[0].dts < i || o && e && r[e - 1].dts - r[0].dts < i)) || !!(o && (t && (this._lastVideoTime = n[t - 1].dts), e && (this._lastAudioTime = r[e - 1].dts), this._lastVideoTime < 0 || this._lastAudioTime < 0 || 200 < this._lastVideoTime - this._lastAudioTime))
                        }
                    }, {
                        key: "_onTrackMetadataReceived",
                        value: function(e, t) {
                            var n = null,
                                r = "mp4",
                                i = t.codec;
                            if ("audio" === e) n = "mp3" === (this._audioMeta = t).codec && this._mp3UseMpegAudio ? (r = "mpeg", i = "", new Uint8Array) : N.default.generateInitSegment(t);
                            else {
                                if ("video" !== e) return;
                                this._videoMeta = t, n = N.default.generateInitSegment(t)
                            }
                            if (!this._onInitSegment) throw new s.IllegalStateException("MP4Remuxer: onInitSegment callback must be specified!");
                            this._onInitSegment(e, { type: e, data: n.buffer, codec: i, container: "".concat(e, "/").concat(r), mediaDuration: t.duration })
                        }
                    }, { key: "_calculateDtsBase", value: function(e, t) { this._dtsBaseInited || (e.samples && e.samples.length && (this._audioDtsBase = e.samples[0].dts), t.samples && t.samples.length && (this._videoDtsBase = t.samples[0].dts), this._dtsBase = Math.min(this._audioDtsBase, this._videoDtsBase), this._dtsBaseInited = !0) } }, {
                        key: "_remuxAudio",
                        value: function(e) {
                            if (null != this._audioMeta) {
                                var t = e,
                                    n = t.samples,
                                    r = void 0,
                                    i = -1,
                                    o = this._audioMeta.refSampleDuration,
                                    s = "mp3" === this._audioMeta.codec && this._mp3UseMpegAudio,
                                    a = this._dtsBaseInited && void 0 === this._audioNextDts,
                                    l = !1;
                                if (n && 0 !== n.length) {
                                    var u, c, h = 0,
                                        d = null,
                                        f = 0,
                                        f = s ? (h = 0, t.length) : (h = 8) + t.length,
                                        e = n[0].dts - this._dtsBase;
                                    this._audioNextDts ? r = e - this._audioNextDts : this._audioSegmentInfoList.isEmpty() ? (r = 0, this._fillSilentAfterSeek && !this._videoSegmentInfoList.isEmpty() && "mp3" !== this._audioMeta.originalCodec && (l = !0)) : r = null != (u = this._audioSegmentInfoList.getLastSampleBefore(e)) ? ((c = e - (u.originalDts + u.duration)) <= 3 && (c = 0), e - (u.dts + u.duration + c)) : 0, l && (u = e - r, null != (c = this._videoSegmentInfoList.getLastSegmentBefore(e)) && c.beginDts < u ? (O = x.default.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount)) && (e = c.beginDts, c = u - c.beginDts, M.default.v(this.TAG, "InsertPrefixSilentAudio: dts: ".concat(e, ", duration: ").concat(c)), n.unshift({ unit: O, dts: e, pts: e }), f += O.byteLength) : l = !1);
                                    for (var p = [], _ = 0; _ < n.length; _++) {
                                        var m = n[_],
                                            y = m.unit,
                                            v = m.dts - this._dtsBase,
                                            g = v - r; - 1 === i && (i = g);
                                        var b = 0,
                                            E = !1,
                                            S = null;
                                        if (1.5 * o < (b = _ !== n.length - 1 ? n[_ + 1].dts - this._dtsBase - r - g : 1 <= p.length ? p[p.length - 1].duration : Math.floor(o)) && "mp3" !== this._audioMeta.codec && this._fillAudioTimestampGap && !B.default.safari) {
                                            E = !0;
                                            var T = Math.abs(b - o),
                                                A = Math.ceil(T / o),
                                                w = g + o;
                                            M.default.w(this.TAG, "Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.\n" + "dts: ".concat(g + b, " ms, expected: ").concat(g + Math.round(o), " ms, ") + "delta: ".concat(Math.round(T), " ms, generate: ").concat(A, " frames"));
                                            var k = x.default.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
                                            null == k && (M.default.w(this.TAG, "Unable to generate silent frame for " + "".concat(this._audioMeta.originalCodec, " with ").concat(this._audioMeta.channelCount, " channels, repeat last frame")), k = y), S = [];
                                            for (var C = 0; C < A; C++) {
                                                var I, D = Math.round(w);
                                                0 < S.length && ((I = S[S.length - 1]).duration = D - I.dts);
                                                D = { dts: D, pts: D, cts: 0, unit: k, size: k.byteLength, duration: 0, originalDts: v, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0 } };
                                                S.push(D), f += y.byteLength, w += o
                                            }
                                            T = S[S.length - 1];
                                            T.duration = g + b - T.dts, b = Math.round(o)
                                        }
                                        p.push({ dts: g, pts: g, cts: 0, unit: m.unit, size: m.unit.byteLength, duration: b, originalDts: v, flags: { isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0 } }), E && p.push.apply(p, S)
                                    }
                                    s ? d = new Uint8Array(f) : ((d = new Uint8Array(f))[0] = f >>> 24 & 255, d[1] = f >>> 16 & 255, d[2] = f >>> 8 & 255, d[3] = 255 & f, d.set(N.default.types.mdat, 4));
                                    for (var L = 0; L < p.length; L++) {
                                        var R = p[L].unit;
                                        d.set(R, h), h += R.byteLength
                                    }
                                    var O = p[p.length - 1],
                                        P = O.dts + O.duration;
                                    this._audioNextDts = P;
                                    l = new U.MediaSegmentInfo;
                                    l.beginDts = i, l.endDts = P, l.beginPts = i, l.endPts = P, l.originalBeginDts = p[0].originalDts, l.originalEndDts = O.originalDts + O.duration, l.firstSample = new U.SampleInfo(p[0].dts, p[0].pts, p[0].duration, p[0].originalDts, !1), l.lastSample = new U.SampleInfo(O.dts, O.pts, O.duration, O.originalDts, !1), this._isLive || this._audioSegmentInfoList.append(l), t.samples = p, t.sequenceNumber++;
                                    O = null, O = s ? new Uint8Array : N.default.moof(t, i);
                                    t.samples = [], t.length = 0;
                                    l = { type: "audio", data: this._mergeBoxes(O, d).buffer, sampleCount: p.length, info: l };
                                    s && a && (l.timestampOffset = i), this._onMediaSegment("audio", l)
                                }
                            }
                        }
                    }, {
                        key: "_remuxVideo",
                        value: function(e) {
                            if (null != this._videoMeta) {
                                var t = e,
                                    n = t.samples,
                                    r = void 0,
                                    i = -1,
                                    o = -1;
                                if (n && 0 !== n.length) {
                                    var s = 8,
                                        e = 8 + e.length,
                                        a = new Uint8Array(e);
                                    a[0] = e >>> 24 & 255, a[1] = e >>> 16 & 255, a[2] = e >>> 8 & 255, a[3] = 255 & e, a.set(N.default.types.mdat, 4);
                                    var l, e = n[0].dts - this._dtsBase;
                                    r = this._videoNextDts ? e - this._videoNextDts : !this._videoSegmentInfoList.isEmpty() && null != (l = this._videoSegmentInfoList.getLastSampleBefore(e)) ? ((T = e - (l.originalDts + l.duration)) <= 3 && (T = 0), e - (l.dts + l.duration + T)) : 0;
                                    for (var u = new U.MediaSegmentInfo, c = [], h = 0; h < n.length; h++) {
                                        var d = n[h],
                                            f = d.dts - this._dtsBase,
                                            p = d.isKeyframe,
                                            _ = f - r,
                                            m = d.cts,
                                            y = _ + m; - 1 === i && (i = _, o = y);
                                        var v, g = 0;
                                        g = h !== n.length - 1 ? n[h + 1].dts - this._dtsBase - r - _ : 1 <= c.length ? c[c.length - 1].duration : Math.floor(this._videoMeta.refSampleDuration), p && ((v = new U.SampleInfo(_, y, g, d.dts, !0)).fileposition = d.fileposition, u.appendSyncPoint(v)), c.push({ dts: _, pts: y, cts: m, units: d.units, size: d.length, isKeyframe: p, duration: g, originalDts: f, flags: { isLeading: 0, dependsOn: p ? 2 : 1, isDependedOn: p ? 1 : 0, hasRedundancy: 0, isNonSync: p ? 0 : 1 } })
                                    }
                                    c = c.filter(function(e) { return e.isKeyframe || !e.units.find(function(e) { return e.staticFrame }) });
                                    for (var b = 0; b < c.length; b++)
                                        for (var E = c[b].units; E.length;) {
                                            var S = E.shift().data;
                                            a.set(S, s), s += S.byteLength
                                        }
                                    var T = c[c.length - 1],
                                        A = T.dts + T.duration,
                                        w = T.pts + T.duration;
                                    this._videoNextDts = A, u.beginDts = i, u.endDts = A, u.beginPts = o, u.endPts = w, u.originalBeginDts = c[0].originalDts, u.originalEndDts = T.originalDts + T.duration, u.firstSample = new U.SampleInfo(c[0].dts, c[0].pts, c[0].duration, c[0].originalDts, c[0].isKeyframe), u.lastSample = new U.SampleInfo(T.dts, T.pts, T.duration, T.originalDts, T.isKeyframe), this._isLive || this._videoSegmentInfoList.append(u), t.samples = c, t.sequenceNumber++, this._forceFirstIDR && ((k = c[0].flags).dependsOn = 2, k.isNonSync = 0);
                                    var k = N.default.moof(t, i);
                                    t.samples = [], t.length = 0, this._onMediaSegment("video", { type: "video", data: this._mergeBoxes(k, a).buffer, sampleCount: c.length, info: u })
                                }
                            }
                        }
                    }, { key: "_mergeBoxes", value: function(e, t) { var n = new Uint8Array(e.byteLength + t.byteLength); return n.set(e, 0), n.set(t, e.byteLength), n } }]), t
                }());
            n.default = e
        }, { "../core/media-segment-info.js": 35, "../core/transmuxing-events.js": 40, "../utils/browser.js": 69, "../utils/exception.js": 70, "../utils/logger.js": 72, "./aac-silent.js": 66, "./mp4-generator.js": 67, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        69: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var o = {};
            ! function() {
                var e, t = self.navigator.userAgent.toLowerCase(),
                    n = /(edge)\/([\w.]+)/.exec(t) || /(opr)[/]([\w.]+)/.exec(t) || /(chrome|crios)[ /]([\w.]+)/.exec(t) || /(iemobile)[/]([\w.]+)/.exec(t) || /(version)(applewebkit)[ /]([\w.]+).*(safari)[ /]([\w.]+)/.exec(t) || /(webkit)[ /]([\w.]+).*(version)[ /]([\w.]+).*(safari)[ /]([\w.]+)/.exec(t) || /(webkit)[ /]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ /]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 <= t.indexOf("trident") && /(rv)(?::| )([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(firefox)[ /]([\w.]+)/.exec(t) || [],
                    r = /(ipad)/.exec(t) || /(ipod)/.exec(t) || /(windows phone)/.exec(t) || /(iphone)/.exec(t) || /(kindle)/.exec(t) || /(android)/.exec(t) || /(windows)/.exec(t) || /(mac)/.exec(t) || /(linux)/.exec(t) || /(cros)/.exec(t) || [],
                    i = { browser: n[5] || n[3] || n[1] || "", version: n[2] || n[4] || "0", majorVersion: n[4] || n[2] || "0", platform: r[0] || "" },
                    n = {};
                for (e in i.browser && (n[i.browser] = !0, r = i.majorVersion.split("."), n.version = { major: parseInt(i.majorVersion, 10), string: i.version }, 1 < r.length && (n.version.minor = parseInt(r[1], 10)), 2 < r.length && (n.version.build = parseInt(r[2], 10))), i.platform && (n[i.platform] = !0), (n.chrome || n.opr || n.safari) && (n.webkit = !0), (n.rv || n.iemobile) && (n.rv && delete n.rv, i.browser = "msie", n.msie = !0), n.edge && (delete n.edge, i.browser = "msedge", n.msedge = !0), n.opr && (i.browser = "opera", n.opera = !0), n.safari && n.android && (i.browser = "android", n.android = !0), n.name = i.browser, n.platform = i.platform, o) Object.prototype.hasOwnProperty.call(o, e) && delete o[e];
                n.mobile = -1 < t.indexOf("mobile") || n.iphone || n.ipad || n.ipod || n.android, Object.assign(o, n)
            }(), n.default = o
        }, {}],
        70: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.NotImplementedException = n.InvalidArgumentException = n.IllegalStateException = n.RuntimeException = void 0;
            var i = r(e("@babel/runtime/helpers/inherits")),
                o = r(e("@babel/runtime/helpers/possibleConstructorReturn")),
                s = r(e("@babel/runtime/helpers/getPrototypeOf")),
                a = r(e("@babel/runtime/helpers/classCallCheck")),
                l = r(e("@babel/runtime/helpers/createClass"));

            function u(n) { var r = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t = (0, s.default)(n); return t = r ? (e = (0, s.default)(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), (0, o.default)(this, t) } }
            var c = function() {
                function t(e) {
                    (0, a.default)(this, t), this._message = e
                }
                return (0, l.default)(t, [{ key: "name", get: function() { return "RuntimeException" } }, { key: "message", get: function() { return this._message } }, { key: "toString", value: function() { return this.name + ": " + this.message } }]), t
            }();
            n.RuntimeException = c;
            e = function() {
                (0, i.default)(n, c);
                var t = u(n);

                function n(e) { return (0, a.default)(this, n), t.call(this, e) }
                return (0, l.default)(n, [{ key: "name", get: function() { return "IllegalStateException" } }]), n
            }();
            n.IllegalStateException = e;
            e = function() {
                (0, i.default)(n, c);
                var t = u(n);

                function n(e) { return (0, a.default)(this, n), t.call(this, e) }
                return (0, l.default)(n, [{ key: "name", get: function() { return "InvalidArgumentException" } }]), n
            }();
            n.InvalidArgumentException = e;
            e = function() {
                (0, i.default)(n, c);
                var t = u(n);

                function n(e) { return (0, a.default)(this, n), t.call(this, e) }
                return (0, l.default)(n, [{ key: "name", get: function() { return "NotImplementedException" } }]), n
            }();
            n.NotImplementedException = e
        }, { "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/getPrototypeOf": 12, "@babel/runtime/helpers/inherits": 13, "@babel/runtime/helpers/interopRequireDefault": 14, "@babel/runtime/helpers/possibleConstructorReturn": 17 }],
        71: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            n.default = { CIRCLE: "circle", VIDEO_SPS: "videoSPS", FLV_META: "flvMeta", MP4_INFO: "mp4Info", LIVE_TIMESTAMP: "liveTimestamp" }
        }, {}],
        72: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                s = r(e("events")),
                r = function() {
                    function r() {
                        (0, i.default)(this, r)
                    }
                    return (0, o.default)(r, null, [{ key: "formatDate", value: function() { var e = new Date; return [e.getFullYear(), e.getMonth() + 1, e.getDate()].join("-") + " " + [e.getHours(), e.getMinutes(), e.getSeconds()].join(":") } }, {
                        key: "e",
                        value: function(e, t) {
                            e && !r.FORCE_GLOBAL_TAG || (e = r.GLOBAL_TAG);
                            var n = this.formatDate(),
                                t = "[".concat(n, "][").concat(e, "] > ").concat(t);
                            r.ENABLE_CALLBACK && r.emitter.emit("log", "error", t), r.ENABLE_ERROR && (console.error ? console.error(t) : console.warn ? console.warn(t) : console.log(t))
                        }
                    }, {
                        key: "i",
                        value: function(e, t) {
                            e && !r.FORCE_GLOBAL_TAG || (e = r.GLOBAL_TAG);
                            var n = this.formatDate(),
                                t = "[".concat(n, "][").concat(e, "] > ").concat(t);
                            r.ENABLE_CALLBACK && r.emitter.emit("log", "info", t), r.ENABLE_INFO && (console.info ? console.info(t) : console.log(t))
                        }
                    }, {
                        key: "w",
                        value: function(e, t) {
                            e && !r.FORCE_GLOBAL_TAG || (e = r.GLOBAL_TAG);
                            var n = this.formatDate(),
                                t = "[".concat(n, "][").concat(e, "] > ").concat(t);
                            r.ENABLE_CALLBACK && r.emitter.emit("log", "warn", t), r.ENABLE_WARN && (console.warn ? console.warn(t) : console.log(t))
                        }
                    }, {
                        key: "d",
                        value: function(e, t) {
                            e && !r.FORCE_GLOBAL_TAG || (e = r.GLOBAL_TAG);
                            var n = this.formatDate(),
                                t = "[".concat(n, "][").concat(e, "] > ").concat(t);
                            r.ENABLE_CALLBACK && r.emitter.emit("log", "debug", t), r.ENABLE_DEBUG && (console.debug ? console.debug(t) : console.log(t))
                        }
                    }, {
                        key: "v",
                        value: function(e, t) {
                            e && !r.FORCE_GLOBAL_TAG || (e = r.GLOBAL_TAG);
                            var n = this.formatDate(),
                                t = "[".concat(n, "][").concat(e, "] > ").concat(t);
                            r.ENABLE_CALLBACK && r.emitter.emit("log", "verbose", t), r.ENABLE_VERBOSE && console.log(t)
                        }
                    }]), r
                }(),
                e = -1 < self.location.href.indexOf("debug=true");
            r.GLOBAL_TAG = "flv.js", r.FORCE_GLOBAL_TAG = !1, r.ENABLE_ERROR = !0, r.ENABLE_INFO = e, r.ENABLE_WARN = !0, r.ENABLE_DEBUG = e, r.ENABLE_VERBOSE = e, r.ENABLE_CALLBACK = !1, r.emitter = new s.default, n.default = r
        }, { "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14, events: 30 }],
        73: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                s = r(e("events")),
                a = r(e("./logger.js")),
                e = function() {
                    function n() {
                        (0, i.default)(this, n)
                    }
                    return (0, o.default)(n, null, [{ key: "forceGlobalTag", get: function() { return a.default.FORCE_GLOBAL_TAG }, set: function(e) { a.default.FORCE_GLOBAL_TAG = e, n._notifyChange() } }, { key: "globalTag", get: function() { return a.default.GLOBAL_TAG }, set: function(e) { a.default.GLOBAL_TAG = e, n._notifyChange() } }, { key: "enableAll", get: function() { return a.default.ENABLE_VERBOSE && a.default.ENABLE_DEBUG && a.default.ENABLE_INFO && a.default.ENABLE_WARN && a.default.ENABLE_ERROR }, set: function(e) { a.default.ENABLE_VERBOSE = e, a.default.ENABLE_DEBUG = e, a.default.ENABLE_INFO = e, a.default.ENABLE_WARN = e, a.default.ENABLE_ERROR = e, n._notifyChange() } }, { key: "enableDebug", get: function() { return a.default.ENABLE_DEBUG }, set: function(e) { a.default.ENABLE_DEBUG = e, n._notifyChange() } }, { key: "enableVerbose", get: function() { return a.default.ENABLE_VERBOSE }, set: function(e) { a.default.ENABLE_VERBOSE = e, n._notifyChange() } }, { key: "enableInfo", get: function() { return a.default.ENABLE_INFO }, set: function(e) { a.default.ENABLE_INFO = e, n._notifyChange() } }, { key: "enableWarn", get: function() { return a.default.ENABLE_WARN }, set: function(e) { a.default.ENABLE_WARN = e, n._notifyChange() } }, { key: "enableError", get: function() { return a.default.ENABLE_ERROR }, set: function(e) { a.default.ENABLE_ERROR = e, n._notifyChange() } }, { key: "getConfig", value: function() { return { globalTag: a.default.GLOBAL_TAG, forceGlobalTag: a.default.FORCE_GLOBAL_TAG, enableVerbose: a.default.ENABLE_VERBOSE, enableDebug: a.default.ENABLE_DEBUG, enableInfo: a.default.ENABLE_INFO, enableWarn: a.default.ENABLE_WARN, enableError: a.default.ENABLE_ERROR, enableCallback: a.default.ENABLE_CALLBACK } } }, { key: "applyConfig", value: function(e) { a.default.GLOBAL_TAG = e.globalTag, a.default.FORCE_GLOBAL_TAG = e.forceGlobalTag, a.default.ENABLE_VERBOSE = e.enableVerbose, a.default.ENABLE_DEBUG = e.enableDebug, a.default.ENABLE_INFO = e.enableInfo, a.default.ENABLE_WARN = e.enableWarn, a.default.ENABLE_ERROR = e.enableError, a.default.ENABLE_CALLBACK = e.enableCallback } }, {
                        key: "_notifyChange",
                        value: function() {
                            var e, t = n.emitter;
                            0 < t.listenerCount("change") && (e = n.getConfig(), t.emit("change", e))
                        }
                    }, { key: "registerListener", value: function(e) { n.emitter.addListener("change", e) } }, { key: "removeListener", value: function(e) { n.emitter.removeListener("change", e) } }, { key: "addLogListener", value: function(e) { a.default.emitter.addListener("log", e), 0 < a.default.emitter.listenerCount("log") && (a.default.ENABLE_CALLBACK = !0, n._notifyChange()) } }, { key: "removeLogListener", value: function(e) { a.default.emitter.removeListener("log", e), 0 === a.default.emitter.listenerCount("log") && (a.default.ENABLE_CALLBACK = !1, n._notifyChange()) } }]), n
                }();
            e.emitter = new s.default, n.default = e
        }, { "./logger.js": 72, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14, events: 30 }],
        74: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(e("@babel/runtime/helpers/classCallCheck")),
                o = r(e("@babel/runtime/helpers/createClass")),
                e = function() {
                    function e() {
                        (0, i.default)(this, e)
                    }
                    return (0, o.default)(e, null, [{
                        key: "install",
                        value: function() {
                            Object.setPrototypeOf = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e }, Object.assign = Object.assign || function(e) {
                                if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                                for (var t = Object(e), n = 1; n < arguments.length; n++) {
                                    var r = arguments[n];
                                    if (null != r)
                                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                }
                                return t
                            }, Uint8Array.prototype.slice || Object.defineProperty(Uint8Array.prototype, "slice", { value: function(e, t) { return new Uint8Array(Array.prototype.slice.call(this, e, t)) } }), Array.prototype.includes || (Array.prototype.includes = function(e, t) {
                                if (null == this) throw new TypeError('"this" is null or not defined');
                                var n = Object(this),
                                    r = n.length >>> 0;
                                if (0 == r) return !1;
                                var i, o, t = 0 | t,
                                    s = Math.max(0 <= t ? t : r - Math.abs(t), 0);
                                for (; s < r;) {
                                    if ((i = n[s]) === (o = e) || "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o)) return !0;
                                    s++
                                }
                                return !1
                            }), Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", { value: function(e, t, n) { if (null == this) throw new TypeError("this is null or not defined"); for (var r = Object(this), i = r.length >>> 0, t = t >> 0, o = t < 0 ? Math.max(i + t, 0) : Math.min(t, i), n = void 0 === n ? i : n >> 0, s = n < 0 ? Math.max(i + n, 0) : Math.min(n, i); o < s;) r[o] = e, o++; return r } }), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
                                value: function(e, t) {
                                    if (null == this) throw new TypeError('"this" is null or not defined');
                                    var n = Object(this),
                                        r = n.length >>> 0;
                                    if ("function" != typeof e) throw new TypeError("predicate must be a function");
                                    for (var i = t, o = 0; o < r;) {
                                        var s = n[o];
                                        if (e.call(i, s, o, n)) return o;
                                        o++
                                    }
                                    return -1
                                },
                                configurable: !0,
                                writable: !0
                            })
                        }
                    }]), e
                }();
            e.install(), n.default = e
        }, { "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14 }],
        75: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var r = { string2Unit8Array: function(e) { for (var t = encodeURIComponent(0 < arguments.length && void 0 !== e ? e : ""), n = [], r = 0, i = t.length; r < i; r++) n.push(t.charCodeAt(r)); return new Uint8Array(n) }, unit8Array2String: function(e) { for (var t = [], n = 0, r = e.length; n < r; n++) t.push(String.fromCharCode(e[n])); return decodeURIComponent(t.join("")) } };
            n.default = r
        }, {}],
        76: [function(e, t, n) {
            "use strict";

            function a(e, t, n) {
                var r = e;
                if (t + n < r.length) {
                    for (; n--;)
                        if (128 != (192 & r[++t])) return;
                    return 1
                }
            }
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;

            function r(e) {
                for (var t = [], n = e, r = 0, i = e.length; r < i;)
                    if (n[r] < 128) t.push(String.fromCharCode(n[r])), ++r;
                    else {
                        if (!(n[r] < 192))
                            if (n[r] < 224) { if (a(n, r, 1)) { var o = (31 & n[r]) << 6 | 63 & n[r + 1]; if (128 <= o) { t.push(String.fromCharCode(65535 & o)), r += 2; continue } } } else if (n[r] < 240) { if (a(n, r, 2)) { var s = (15 & n[r]) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2]; if (2048 <= s && 55296 != (63488 & s)) { t.push(String.fromCharCode(65535 & s)), r += 3; continue } } } else if (n[r] < 248 && a(n, r, 3)) { s = (7 & n[r]) << 18 | (63 & n[r + 1]) << 12 | (63 & n[r + 2]) << 6 | 63 & n[r + 3]; if (65536 < s && s < 1114112) { s -= 65536, t.push(String.fromCharCode(s >>> 10 | 55296)), t.push(String.fromCharCode(1023 & s | 56320)), r += 4; continue } }
                        t.push(String.fromCharCode(65533)), ++r
                    }
                return t.join("")
            }
            n.default = r
        }, {}],
        77: [function(e, t, n) {
            n.read = function(e, t, n, r, i) {
                var o, s, a = 8 * i - r - 1,
                    l = (1 << a) - 1,
                    u = l >> 1,
                    c = -7,
                    h = n ? i - 1 : 0,
                    d = n ? -1 : 1,
                    n = e[t + h];
                for (h += d, o = n & (1 << -c) - 1, n >>= -c, c += a; 0 < c; o = 256 * o + e[t + h], h += d, c -= 8);
                for (s = o & (1 << -c) - 1, o >>= -c, c += r; 0 < c; s = 256 * s + e[t + h], h += d, c -= 8);
                if (0 === o) o = 1 - u;
                else {
                    if (o === l) return s ? NaN : 1 / 0 * (n ? -1 : 1);
                    s += Math.pow(2, r), o -= u
                }
                return (n ? -1 : 1) * s * Math.pow(2, o - r)
            }, n.write = function(e, t, n, r, i, o) {
                var s, a, l = 8 * o - i - 1,
                    u = (1 << l) - 1,
                    c = u >> 1,
                    h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    d = r ? 0 : o - 1,
                    f = r ? 1 : -1,
                    o = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = u) : (s = Math.floor(Math.log(t) / Math.LN2), t * (r = Math.pow(2, -s)) < 1 && (s--, r *= 2), 2 <= (t += 1 <= s + c ? h / r : h * Math.pow(2, 1 - c)) * r && (s++, r /= 2), u <= s + c ? (a = 0, s = u) : 1 <= s + c ? (a = (t * r - 1) * Math.pow(2, i), s += c) : (a = t * Math.pow(2, c - 1) * Math.pow(2, i), s = 0)); 8 <= i; e[n + d] = 255 & a, d += f, a /= 256, i -= 8);
                for (s = s << i | a, l += i; 0 < l; e[n + d] = 255 & s, d += f, s /= 256, l -= 8);
                e[n + d - f] |= 128 * o
            }
        }, {}],
        78: [function(e, t, n) {
            function r(e) { return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) }
            t.exports = function(e) { return null != e && (r(e) || "function" == typeof(t = e).readFloatLE && "function" == typeof t.slice && r(t.slice(0, 0)) || !!e._isBuffer); var t }
        }, {}],
        79: [function(e, t, n) {
            var m, y, v, g, b;
            m = e("crypt"), y = e("charenc").utf8, v = e("is-buffer"), g = e("charenc").bin, (b = function(e, t) {
                e.constructor == String ? e = (t && "binary" === t.encoding ? g : y).stringToBytes(e) : v(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
                for (var n = m.bytesToWords(e), e = 8 * e.length, r = 1732584193, i = -271733879, o = -1732584194, s = 271733878, a = 0; a < n.length; a++) n[a] = 16711935 & (n[a] << 8 | n[a] >>> 24) | 4278255360 & (n[a] << 24 | n[a] >>> 8);
                n[e >>> 5] |= 128 << e % 32, n[14 + (64 + e >>> 9 << 4)] = e;
                for (var l = b._ff, u = b._gg, c = b._hh, h = b._ii, a = 0; a < n.length; a += 16) {
                    var d = r,
                        f = i,
                        p = o,
                        _ = s,
                        r = l(r, i, o, s, n[a + 0], 7, -680876936),
                        s = l(s, r, i, o, n[a + 1], 12, -389564586),
                        o = l(o, s, r, i, n[a + 2], 17, 606105819),
                        i = l(i, o, s, r, n[a + 3], 22, -1044525330);
                    r = l(r, i, o, s, n[a + 4], 7, -176418897), s = l(s, r, i, o, n[a + 5], 12, 1200080426), o = l(o, s, r, i, n[a + 6], 17, -1473231341), i = l(i, o, s, r, n[a + 7], 22, -45705983), r = l(r, i, o, s, n[a + 8], 7, 1770035416), s = l(s, r, i, o, n[a + 9], 12, -1958414417), o = l(o, s, r, i, n[a + 10], 17, -42063), i = l(i, o, s, r, n[a + 11], 22, -1990404162), r = l(r, i, o, s, n[a + 12], 7, 1804603682), s = l(s, r, i, o, n[a + 13], 12, -40341101), o = l(o, s, r, i, n[a + 14], 17, -1502002290), r = u(r, i = l(i, o, s, r, n[a + 15], 22, 1236535329), o, s, n[a + 1], 5, -165796510), s = u(s, r, i, o, n[a + 6], 9, -1069501632), o = u(o, s, r, i, n[a + 11], 14, 643717713), i = u(i, o, s, r, n[a + 0], 20, -373897302), r = u(r, i, o, s, n[a + 5], 5, -701558691), s = u(s, r, i, o, n[a + 10], 9, 38016083), o = u(o, s, r, i, n[a + 15], 14, -660478335), i = u(i, o, s, r, n[a + 4], 20, -405537848), r = u(r, i, o, s, n[a + 9], 5, 568446438), s = u(s, r, i, o, n[a + 14], 9, -1019803690), o = u(o, s, r, i, n[a + 3], 14, -187363961), i = u(i, o, s, r, n[a + 8], 20, 1163531501), r = u(r, i, o, s, n[a + 13], 5, -1444681467), s = u(s, r, i, o, n[a + 2], 9, -51403784), o = u(o, s, r, i, n[a + 7], 14, 1735328473), r = c(r, i = u(i, o, s, r, n[a + 12], 20, -1926607734), o, s, n[a + 5], 4, -378558), s = c(s, r, i, o, n[a + 8], 11, -2022574463), o = c(o, s, r, i, n[a + 11], 16, 1839030562), i = c(i, o, s, r, n[a + 14], 23, -35309556), r = c(r, i, o, s, n[a + 1], 4, -1530992060), s = c(s, r, i, o, n[a + 4], 11, 1272893353), o = c(o, s, r, i, n[a + 7], 16, -155497632), i = c(i, o, s, r, n[a + 10], 23, -1094730640), r = c(r, i, o, s, n[a + 13], 4, 681279174), s = c(s, r, i, o, n[a + 0], 11, -358537222), o = c(o, s, r, i, n[a + 3], 16, -722521979), i = c(i, o, s, r, n[a + 6], 23, 76029189), r = c(r, i, o, s, n[a + 9], 4, -640364487), s = c(s, r, i, o, n[a + 12], 11, -421815835), o = c(o, s, r, i, n[a + 15], 16, 530742520), r = h(r, i = c(i, o, s, r, n[a + 2], 23, -995338651), o, s, n[a + 0], 6, -198630844), s = h(s, r, i, o, n[a + 7], 10, 1126891415), o = h(o, s, r, i, n[a + 14], 15, -1416354905), i = h(i, o, s, r, n[a + 5], 21, -57434055), r = h(r, i, o, s, n[a + 12], 6, 1700485571), s = h(s, r, i, o, n[a + 3], 10, -1894986606), o = h(o, s, r, i, n[a + 10], 15, -1051523), i = h(i, o, s, r, n[a + 1], 21, -2054922799), r = h(r, i, o, s, n[a + 8], 6, 1873313359), s = h(s, r, i, o, n[a + 15], 10, -30611744), o = h(o, s, r, i, n[a + 6], 15, -1560198380), i = h(i, o, s, r, n[a + 13], 21, 1309151649), r = h(r, i, o, s, n[a + 4], 6, -145523070), s = h(s, r, i, o, n[a + 11], 10, -1120210379), o = h(o, s, r, i, n[a + 2], 15, 718787259), i = h(i, o, s, r, n[a + 9], 21, -343485551), r = r + d >>> 0, i = i + f >>> 0, o = o + p >>> 0, s = s + _ >>> 0
                }
                return m.endian([r, i, o, s])
            })._ff = function(e, t, n, r, i, o, s) { s = e + (t & n | ~t & r) + (i >>> 0) + s; return (s << o | s >>> 32 - o) + t }, b._gg = function(e, t, n, r, i, o, s) { s = e + (t & r | n & ~r) + (i >>> 0) + s; return (s << o | s >>> 32 - o) + t }, b._hh = function(e, t, n, r, i, o, s) { s = e + (t ^ n ^ r) + (i >>> 0) + s; return (s << o | s >>> 32 - o) + t }, b._ii = function(e, t, n, r, i, o, s) { s = e + (n ^ (t | ~r)) + (i >>> 0) + s; return (s << o | s >>> 32 - o) + t }, b._blocksize = 16, b._digestsize = 16, t.exports = function(e, t) {
                if (null == e) throw new Error("Illegal argument " + e);
                e = m.wordsToBytes(b(e, t));
                return t && t.asBytes ? e : t && t.asString ? g.bytesToString(e) : m.bytesToHex(e)
            }
        }, { charenc: 27, crypt: 28, "is-buffer": 78 }],
        80: [function(e, t, n) {
            var r, i, t = t.exports = {};

            function o() { throw new Error("setTimeout has not been defined") }

            function s() { throw new Error("clearTimeout has not been defined") }

            function a(t) { if (r === setTimeout) return setTimeout(t, 0); if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0); try { return r(t, 0) } catch (e) { try { return r.call(null, t, 0) } catch (e) { return r.call(this, t, 0) } } }! function() { try { r = "function" == typeof setTimeout ? setTimeout : o } catch (e) { r = o } try { i = "function" == typeof clearTimeout ? clearTimeout : s } catch (e) { i = s } }();
            var l, u = [],
                c = !1,
                h = -1;

            function d() { c && l && (c = !1, l.length ? u = l.concat(u) : h = -1, u.length && f()) }

            function f() {
                if (!c) {
                    var e = a(d);
                    c = !0;
                    for (var t = u.length; t;) {
                        for (l = u, u = []; ++h < t;) l && l[h].run();
                        h = -1, t = u.length
                    }
                    l = null, c = !1,
                        function(t) { if (i === clearTimeout) return clearTimeout(t); if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t); try { i(t) } catch (e) { try { return i.call(null, t) } catch (e) { return i.call(this, t) } } }(e)
                }
            }

            function p(e, t) { this.fun = e, this.array = t }

            function _() {}
            t.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (1 < arguments.length)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                u.push(new p(e, t)), 1 !== u.length || c || a(f)
            }, p.prototype.run = function() { this.fun.apply(null, this.array) }, t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.version = "", t.versions = {}, t.on = _, t.addListener = _, t.once = _, t.off = _, t.removeListener = _, t.removeAllListeners = _, t.emit = _, t.prependListener = _, t.prependOnceListener = _, t.listeners = function(e) { return [] }, t.binding = function(e) { throw new Error("process.binding is not supported") }, t.cwd = function() { return "/" }, t.chdir = function(e) { throw new Error("process.chdir is not supported") }, t.umask = function() { return 0 }
        }, {}],
        81: [function(e, t, n) {
            var r = function(s) {
                "use strict";
                var l, e = Object.prototype,
                    u = e.hasOwnProperty,
                    t = "function" == typeof Symbol ? Symbol : {},
                    r = t.iterator || "@@iterator",
                    n = t.asyncIterator || "@@asyncIterator",
                    i = t.toStringTag || "@@toStringTag";

                function o(e, t, n) { return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t] }
                try { o({}, "") } catch (e) { o = function(e, t, n) { return e[t] = n } }

                function a(e, t, n, r) {
                    var i, o, s, a, t = t && t.prototype instanceof m ? t : m,
                        t = Object.create(t.prototype),
                        r = new w(r || []);
                    return t._invoke = (i = e, o = n, s = r, a = h, function(e, t) {
                        if (a === f) throw new Error("Generator is already running");
                        if (a === p) { if ("throw" === e) throw t; return C() }
                        for (s.method = e, s.arg = t;;) {
                            var n = s.delegate;
                            if (n) {
                                var r = function e(t, n) {
                                    var r = t.iterator[n.method];
                                    if (r === l) {
                                        if (n.delegate = null, "throw" === n.method) {
                                            if (t.iterator.return && (n.method = "return", n.arg = l, e(t, n), "throw" === n.method)) return _;
                                            n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                                        }
                                        return _
                                    }
                                    r = c(r, t.iterator, n.arg);
                                    if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, _;
                                    var r = r.arg;
                                    if (!r) return n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, _; {
                                        if (!r.done) return r;
                                        n[t.resultName] = r.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = l)
                                    }
                                    n.delegate = null;
                                    return _
                                }(n, s);
                                if (r) { if (r === _) continue; return r }
                            }
                            if ("next" === s.method) s.sent = s._sent = s.arg;
                            else if ("throw" === s.method) {
                                if (a === h) throw a = p, s.arg;
                                s.dispatchException(s.arg)
                            } else "return" === s.method && s.abrupt("return", s.arg);
                            a = f;
                            r = c(i, o, s);
                            if ("normal" === r.type) { if (a = s.done ? p : d, r.arg !== _) return { value: r.arg, done: s.done } } else "throw" === r.type && (a = p, s.method = "throw", s.arg = r.arg)
                        }
                    }), t
                }

                function c(e, t, n) { try { return { type: "normal", arg: e.call(t, n) } } catch (e) { return { type: "throw", arg: e } } }
                s.wrap = a;
                var h = "suspendedStart",
                    d = "suspendedYield",
                    f = "executing",
                    p = "completed",
                    _ = {};

                function m() {}

                function y() {}

                function v() {}
                var g = {};
                g[r] = function() { return this };
                t = Object.getPrototypeOf, t = t && t(t(k([])));
                t && t !== e && u.call(t, r) && (g = t);
                var b = v.prototype = m.prototype = Object.create(g);

                function E(e) {
                    ["next", "throw", "return"].forEach(function(t) { o(e, t, function(e) { return this._invoke(t, e) }) })
                }

                function S(s, a) {
                    var t;
                    this._invoke = function(n, r) {
                        function e() {
                            return new a(function(e, t) {
                                ! function t(e, n, r, i) {
                                    e = c(s[e], s, n);
                                    if ("throw" !== e.type) {
                                        var o = e.arg,
                                            n = o.value;
                                        return n && "object" == typeof n && u.call(n, "__await") ? a.resolve(n.__await).then(function(e) { t("next", e, r, i) }, function(e) { t("throw", e, r, i) }) : a.resolve(n).then(function(e) { o.value = e, r(o) }, function(e) { return t("throw", e, r, i) })
                                    }
                                    i(e.arg)
                                }(n, r, e, t)
                            })
                        }
                        return t = t ? t.then(e, e) : e()
                    }
                }

                function T(e) {
                    var t = { tryLoc: e[0] };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function A(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function w(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(T, this), this.reset(!0) }

                function k(t) {
                    if (t) {
                        var e = t[r];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                e = function e() {
                                    for (; ++n < t.length;)
                                        if (u.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = l, e.done = !0, e
                                };
                            return e.next = e
                        }
                    }
                    return { next: C }
                }

                function C() { return { value: l, done: !0 } }
                return ((y.prototype = b.constructor = v).constructor = y).displayName = o(v, i, "GeneratorFunction"), s.isGeneratorFunction = function(e) { e = "function" == typeof e && e.constructor; return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name)) }, s.mark = function(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, o(e, i, "GeneratorFunction")), e.prototype = Object.create(b), e }, s.awrap = function(e) { return { __await: e } }, E(S.prototype), S.prototype[n] = function() { return this }, s.AsyncIterator = S, s.async = function(e, t, n, r, i) { void 0 === i && (i = Promise); var o = new S(a(e, t, n, r), i); return s.isGeneratorFunction(t) ? o : o.next().then(function(e) { return e.done ? e.value : o.next() }) }, E(b), o(b, i, "Generator"), b[r] = function() { return this }, b.toString = function() { return "[object Generator]" }, s.keys = function(n) {
                    var e, r = [];
                    for (e in n) r.push(e);
                    return r.reverse(),
                        function e() { for (; r.length;) { var t = r.pop(); if (t in n) return e.value = t, e.done = !1, e } return e.done = !0, e }
                }, s.values = k, w.prototype = {
                    constructor: w,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = l, this.done = !1, this.delegate = null, this.method = "next", this.arg = l, this.tryEntries.forEach(A), !e)
                            for (var t in this) "t" === t.charAt(0) && u.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = l)
                    },
                    stop: function() { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type) throw e.arg; return this.rval },
                    dispatchException: function(n) {
                        if (this.done) throw n;
                        var r = this;

                        function e(e, t) { return o.type = "throw", o.arg = n, r.next = e, t && (r.method = "next", r.arg = l), !!t }
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var i = this.tryEntries[t],
                                o = i.completion;
                            if ("root" === i.tryLoc) return e("end");
                            if (i.tryLoc <= this.prev) {
                                var s = u.call(i, "catchLoc"),
                                    a = u.call(i, "finallyLoc");
                                if (s && a) { if (this.prev < i.catchLoc) return e(i.catchLoc, !0); if (this.prev < i.finallyLoc) return e(i.finallyLoc) } else if (s) { if (this.prev < i.catchLoc) return e(i.catchLoc, !0) } else { if (!a) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return e(i.finallyLoc) }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; 0 <= n; --n) { var r = this.tryEntries[n]; if (r.tryLoc <= this.prev && u.call(r, "finallyLoc") && this.prev < r.finallyLoc) { var i = r; break } }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var o = i ? i.completion : {};
                        return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, _) : this.complete(o)
                    },
                    complete: function(e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), _ },
                    finish: function(e) { for (var t = this.tryEntries.length - 1; 0 <= t; --t) { var n = this.tryEntries[t]; if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), A(n), _ } },
                    catch: function(e) { for (var t = this.tryEntries.length - 1; 0 <= t; --t) { var n = this.tryEntries[t]; if (n.tryLoc === e) { var r, i = n.completion; return "throw" === i.type && (r = i.arg, A(n)), r } } throw new Error("illegal catch attempt") },
                    delegateYield: function(e, t, n) { return this.delegate = { iterator: k(e), resultName: t, nextLoc: n }, "next" === this.method && (this.arg = l), _ }
                }, s
            }("object" == typeof t ? t.exports : {});
            try { regeneratorRuntime = r } catch (e) { Function("r", "regeneratorRuntime = r")(r) }
        }, {}],
        82: [function(B, e, t) {
            (function(n) {
                (function() {
                    ! function(a) {
                        a.parser = function(e, t) { return new i(e, t) }, a.SAXParser = i, a.SAXStream = s, a.createStream = function(e, t) { return new s(e, t) }, a.MAX_BUFFER_LENGTH = 65536;
                        var r, l = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];

                        function i(e, t) { if (!(this instanceof i)) return new i(e, t); var n = this;! function(e) { for (var t = 0, n = l.length; t < n; t++) e[l[t]] = "" }(n), n.q = n.c = "", n.bufferCheckPosition = a.MAX_BUFFER_LENGTH, n.opt = t || {}, n.opt.lowercase = n.opt.lowercase || n.opt.lowercasetags, n.looseCase = n.opt.lowercase ? "toLowerCase" : "toUpperCase", n.tags = [], n.closed = n.closedRoot = n.sawRoot = !1, n.tag = n.error = null, n.strict = !!e, n.noscript = !(!e && !n.opt.noscript), n.state = T.BEGIN, n.strictEntities = n.opt.strictEntities, n.ENTITIES = n.strictEntities ? Object.create(a.XML_ENTITIES) : Object.create(a.ENTITIES), n.attribList = [], n.opt.xmlns && (n.ns = Object.create(f)), n.trackPosition = !1 !== n.opt.position, n.trackPosition && (n.position = n.line = n.column = 0), A(n, "onready") }
                        a.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"], Object.create || (Object.create = function(e) {
                            function t() {}
                            return t.prototype = e, new t
                        }), Object.keys || (Object.keys = function(e) { var t, n = []; for (t in e) e.hasOwnProperty(t) && n.push(t); return n }), i.prototype = {
                            end: function() { D(this) },
                            write: function(e) {
                                var t = this;
                                if (this.error) throw this.error;
                                if (t.closed) return I(t, "Cannot write after close. Assign an onready handler.");
                                if (null === e) return D(t);
                                "object" == typeof e && (e = e.toString());
                                var n, r, i = 0,
                                    o = "";
                                for (; o = x(e, i++), t.c = o;) switch (t.trackPosition && (t.position++, "\n" === o ? (t.line++, t.column = 0) : t.column++), t.state) {
                                    case T.BEGIN:
                                        if (t.state = T.BEGIN_WHITESPACE, "\ufeff" === o) continue;
                                        N(t, o);
                                        continue;
                                    case T.BEGIN_WHITESPACE:
                                        N(t, o);
                                        continue;
                                    case T.TEXT:
                                        if (t.sawRoot && !t.closedRoot) {
                                            for (var s = i - 1; o && "<" !== o && "&" !== o;)(o = x(e, i++)) && t.trackPosition && (t.position++, "\n" === o ? (t.line++, t.column = 0) : t.column++);
                                            t.textNode += e.substring(s, i - 1)
                                        }
                                        "<" !== o || t.sawRoot && t.closedRoot && !t.strict ? (v(o) || t.sawRoot && !t.closedRoot || L(t, "Text data outside of root node."), "&" === o ? t.state = T.TEXT_ENTITY : t.textNode += o) : (t.state = T.OPEN_WAKA, t.startTagPosition = t.position);
                                        continue;
                                    case T.SCRIPT:
                                        "<" === o ? t.state = T.SCRIPT_ENDING : t.script += o;
                                        continue;
                                    case T.SCRIPT_ENDING:
                                        "/" === o ? t.state = T.CLOSE_TAG : (t.script += "<" + o, t.state = T.SCRIPT);
                                        continue;
                                    case T.OPEN_WAKA:
                                        "!" === o ? (t.state = T.SGML_DECL, t.sgmlDecl = "") : v(o) || (b(p, o) ? (t.state = T.OPEN_TAG, t.tagName = o) : "/" === o ? (t.state = T.CLOSE_TAG, t.tagName = "") : "?" === o ? (t.state = T.PROC_INST, t.procInstName = t.procInstBody = "") : (L(t, "Unencoded <"), t.startTagPosition + 1 < t.position && (s = t.position - t.startTagPosition, o = new Array(s).join(" ") + o), t.textNode += "<" + o, t.state = T.TEXT));
                                        continue;
                                    case T.SGML_DECL:
                                        (t.sgmlDecl + o).toUpperCase() === u ? (w(t, "onopencdata"), t.state = T.CDATA, t.sgmlDecl = "", t.cdata = "") : t.sgmlDecl + o === "--" ? (t.state = T.COMMENT, t.comment = "", t.sgmlDecl = "") : (t.sgmlDecl + o).toUpperCase() === c ? (t.state = T.DOCTYPE, (t.doctype || t.sawRoot) && L(t, "Inappropriately located doctype declaration"), t.doctype = "", t.sgmlDecl = "") : ">" === o ? (w(t, "onsgmldeclaration", t.sgmlDecl), t.sgmlDecl = "", t.state = T.TEXT) : (g(o) && (t.state = T.SGML_DECL_QUOTED), t.sgmlDecl += o);
                                        continue;
                                    case T.SGML_DECL_QUOTED:
                                        o === t.q && (t.state = T.SGML_DECL, t.q = ""), t.sgmlDecl += o;
                                        continue;
                                    case T.DOCTYPE:
                                        ">" === o ? (t.state = T.TEXT, w(t, "ondoctype", t.doctype), t.doctype = !0) : (t.doctype += o, "[" === o ? t.state = T.DOCTYPE_DTD : g(o) && (t.state = T.DOCTYPE_QUOTED, t.q = o));
                                        continue;
                                    case T.DOCTYPE_QUOTED:
                                        t.doctype += o, o === t.q && (t.q = "", t.state = T.DOCTYPE);
                                        continue;
                                    case T.DOCTYPE_DTD:
                                        t.doctype += o, "]" === o ? t.state = T.DOCTYPE : g(o) && (t.state = T.DOCTYPE_DTD_QUOTED, t.q = o);
                                        continue;
                                    case T.DOCTYPE_DTD_QUOTED:
                                        t.doctype += o, o === t.q && (t.state = T.DOCTYPE_DTD, t.q = "");
                                        continue;
                                    case T.COMMENT:
                                        "-" === o ? t.state = T.COMMENT_ENDING : t.comment += o;
                                        continue;
                                    case T.COMMENT_ENDING:
                                        "-" === o ? (t.state = T.COMMENT_ENDED, t.comment = C(t.opt, t.comment), t.comment && w(t, "oncomment", t.comment), t.comment = "") : (t.comment += "-" + o, t.state = T.COMMENT);
                                        continue;
                                    case T.COMMENT_ENDED:
                                        ">" !== o ? (L(t, "Malformed comment"), t.comment += "--" + o, t.state = T.COMMENT) : t.state = T.TEXT;
                                        continue;
                                    case T.CDATA:
                                        "]" === o ? t.state = T.CDATA_ENDING : t.cdata += o;
                                        continue;
                                    case T.CDATA_ENDING:
                                        "]" === o ? t.state = T.CDATA_ENDING_2 : (t.cdata += "]" + o, t.state = T.CDATA);
                                        continue;
                                    case T.CDATA_ENDING_2:
                                        ">" === o ? (t.cdata && w(t, "oncdata", t.cdata), w(t, "onclosecdata"), t.cdata = "", t.state = T.TEXT) : "]" === o ? t.cdata += "]" : (t.cdata += "]]" + o, t.state = T.CDATA);
                                        continue;
                                    case T.PROC_INST:
                                        "?" === o ? t.state = T.PROC_INST_ENDING : v(o) ? t.state = T.PROC_INST_BODY : t.procInstName += o;
                                        continue;
                                    case T.PROC_INST_BODY:
                                        if (!t.procInstBody && v(o)) continue;
                                        "?" === o ? t.state = T.PROC_INST_ENDING : t.procInstBody += o;
                                        continue;
                                    case T.PROC_INST_ENDING:
                                        ">" === o ? (w(t, "onprocessinginstruction", { name: t.procInstName, body: t.procInstBody }), t.procInstName = t.procInstBody = "", t.state = T.TEXT) : (t.procInstBody += "?" + o, t.state = T.PROC_INST_BODY);
                                        continue;
                                    case T.OPEN_TAG:
                                        b(_, o) ? t.tagName += o : (function(e) {
                                            e.strict || (e.tagName = e.tagName[e.looseCase]());
                                            var t = e.tags[e.tags.length - 1] || e,
                                                n = e.tag = { name: e.tagName, attributes: {} };
                                            e.opt.xmlns && (n.ns = t.ns), e.attribList.length = 0, w(e, "onopentagstart", n)
                                        }(t), ">" === o ? P(t) : "/" === o ? t.state = T.OPEN_TAG_SLASH : (v(o) || L(t, "Invalid character in tag name"), t.state = T.ATTRIB));
                                        continue;
                                    case T.OPEN_TAG_SLASH:
                                        ">" === o ? (P(t, !0), M(t)) : (L(t, "Forward-slash in opening tag not followed by >"), t.state = T.ATTRIB);
                                        continue;
                                    case T.ATTRIB:
                                        if (v(o)) continue;
                                        ">" === o ? P(t) : "/" === o ? t.state = T.OPEN_TAG_SLASH : b(p, o) ? (t.attribName = o, t.attribValue = "", t.state = T.ATTRIB_NAME) : L(t, "Invalid attribute name");
                                        continue;
                                    case T.ATTRIB_NAME:
                                        "=" === o ? t.state = T.ATTRIB_VALUE : ">" === o ? (L(t, "Attribute without value"), t.attribValue = t.attribName, O(t), P(t)) : v(o) ? t.state = T.ATTRIB_NAME_SAW_WHITE : b(_, o) ? t.attribName += o : L(t, "Invalid attribute name");
                                        continue;
                                    case T.ATTRIB_NAME_SAW_WHITE:
                                        if ("=" === o) t.state = T.ATTRIB_VALUE;
                                        else {
                                            if (v(o)) continue;
                                            L(t, "Attribute without value"), t.tag.attributes[t.attribName] = "", t.attribValue = "", w(t, "onattribute", { name: t.attribName, value: "" }), t.attribName = "", ">" === o ? P(t) : b(p, o) ? (t.attribName = o, t.state = T.ATTRIB_NAME) : (L(t, "Invalid attribute name"), t.state = T.ATTRIB)
                                        }
                                        continue;
                                    case T.ATTRIB_VALUE:
                                        if (v(o)) continue;
                                        g(o) ? (t.q = o, t.state = T.ATTRIB_VALUE_QUOTED) : (L(t, "Unquoted attribute value"), t.state = T.ATTRIB_VALUE_UNQUOTED, t.attribValue = o);
                                        continue;
                                    case T.ATTRIB_VALUE_QUOTED:
                                        if (o !== t.q) { "&" === o ? t.state = T.ATTRIB_VALUE_ENTITY_Q : t.attribValue += o; continue }
                                        O(t), t.q = "", t.state = T.ATTRIB_VALUE_CLOSED;
                                        continue;
                                    case T.ATTRIB_VALUE_CLOSED:
                                        v(o) ? t.state = T.ATTRIB : ">" === o ? P(t) : "/" === o ? t.state = T.OPEN_TAG_SLASH : b(p, o) ? (L(t, "No whitespace between attributes"), t.attribName = o, t.attribValue = "", t.state = T.ATTRIB_NAME) : L(t, "Invalid attribute name");
                                        continue;
                                    case T.ATTRIB_VALUE_UNQUOTED:
                                        if (! function(e) { return ">" === e || v(e) }(o)) { "&" === o ? t.state = T.ATTRIB_VALUE_ENTITY_U : t.attribValue += o; continue }
                                        O(t), ">" === o ? P(t) : t.state = T.ATTRIB;
                                        continue;
                                    case T.CLOSE_TAG:
                                        if (t.tagName) ">" === o ? M(t) : b(_, o) ? t.tagName += o : t.script ? (t.script += "</" + t.tagName, t.tagName = "", t.state = T.SCRIPT) : (v(o) || L(t, "Invalid tagname in closing tag"), t.state = T.CLOSE_TAG_SAW_WHITE);
                                        else { if (v(o)) continue;! function(e, t) { return !b(e, t) }(p, o) ? t.tagName = o: t.script ? (t.script += "</" + o, t.state = T.SCRIPT) : L(t, "Invalid tagname in closing tag.") }
                                        continue;
                                    case T.CLOSE_TAG_SAW_WHITE:
                                        if (v(o)) continue;
                                        ">" === o ? M(t) : L(t, "Invalid characters in closing tag");
                                        continue;
                                    case T.TEXT_ENTITY:
                                    case T.ATTRIB_VALUE_ENTITY_Q:
                                    case T.ATTRIB_VALUE_ENTITY_U:
                                        switch (t.state) {
                                            case T.TEXT_ENTITY:
                                                n = T.TEXT, r = "textNode";
                                                break;
                                            case T.ATTRIB_VALUE_ENTITY_Q:
                                                n = T.ATTRIB_VALUE_QUOTED, r = "attribValue";
                                                break;
                                            case T.ATTRIB_VALUE_ENTITY_U:
                                                n = T.ATTRIB_VALUE_UNQUOTED, r = "attribValue"
                                        }
                                        ";" === o ? (t[r] += function(e) {
                                            var t, n = e.entity,
                                                r = n.toLowerCase(),
                                                i = "";
                                            if (e.ENTITIES[n]) return e.ENTITIES[n];
                                            if (e.ENTITIES[r]) return e.ENTITIES[r];
                                            "#" === (n = r).charAt(0) && (i = "x" === n.charAt(1) ? (n = n.slice(2), (t = parseInt(n, 16)).toString(16)) : (n = n.slice(1), (t = parseInt(n, 10)).toString(10)));
                                            if (n = n.replace(/^0+/, ""), isNaN(t) || i.toLowerCase() !== n) return L(e, "Invalid character entity"), "&" + e.entity + ";";
                                            return String.fromCodePoint(t)
                                        }(t), t.entity = "", t.state = n) : b(t.entity.length ? y : m, o) ? t.entity += o : (L(t, "Invalid character in entity name"), t[r] += "&" + t.entity + o, t.entity = "", t.state = n);
                                        continue;
                                    default:
                                        throw new Error(t, "Unknown state: " + t.state)
                                }
                                t.position >= t.bufferCheckPosition && function(e) {
                                    for (var t = Math.max(a.MAX_BUFFER_LENGTH, 10), n = 0, r = 0, i = l.length; r < i; r++) {
                                        var o = e[l[r]].length;
                                        if (t < o) switch (l[r]) {
                                            case "textNode":
                                                k(e);
                                                break;
                                            case "cdata":
                                                w(e, "oncdata", e.cdata), e.cdata = "";
                                                break;
                                            case "script":
                                                w(e, "onscript", e.script), e.script = "";
                                                break;
                                            default:
                                                I(e, "Max buffer length exceeded: " + l[r])
                                        }
                                        n = Math.max(n, o)
                                    }
                                    var s = a.MAX_BUFFER_LENGTH - n;
                                    e.bufferCheckPosition = s + e.position
                                }(t);
                                return t
                            },
                            resume: function() { return this.error = null, this },
                            close: function() { return this.write(null) },
                            flush: function() {
                                var e;
                                k(e = this), "" !== e.cdata && (w(e, "oncdata", e.cdata), e.cdata = ""), "" !== e.script && (w(e, "onscript", e.script), e.script = "")
                            }
                        };
                        try { r = B("stream").Stream } catch (e) { r = function() {} }
                        var o = a.EVENTS.filter(function(e) { return "error" !== e && "end" !== e });

                        function s(e, t) {
                            if (!(this instanceof s)) return new s(e, t);
                            r.apply(this), this._parser = new i(e, t), this.writable = !0, this.readable = !0;
                            var n = this;
                            this._parser.onend = function() { n.emit("end") }, this._parser.onerror = function(e) { n.emit("error", e), n._parser.error = null }, this._decoder = null, o.forEach(function(t) {
                                Object.defineProperty(n, "on" + t, {
                                    get: function() { return n._parser["on" + t] },
                                    set: function(e) {
                                        if (!e) return n.removeAllListeners(t), n._parser["on" + t] = e;
                                        n.on(t, e)
                                    },
                                    enumerable: !0,
                                    configurable: !1
                                })
                            })
                        }(s.prototype = Object.create(r.prototype, { constructor: { value: s } })).write = function(e) { var t; return "function" == typeof n && "function" == typeof n.isBuffer && n.isBuffer(e) && (this._decoder || (t = B("string_decoder").StringDecoder, this._decoder = new t("utf8")), e = this._decoder.write(e)), this._parser.write(e.toString()), this.emit("data", e), !0 }, s.prototype.end = function(e) { return e && e.length && this.write(e), this._parser.end(), !0 }, s.prototype.on = function(t, e) {
                            var n = this;
                            return n._parser["on" + t] || -1 === o.indexOf(t) || (n._parser["on" + t] = function() {
                                var e = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                                e.splice(0, 0, t), n.emit.apply(n, e)
                            }), r.prototype.on.call(n, t, e)
                        };
                        var u = "[CDATA[",
                            c = "DOCTYPE",
                            h = "http://www.w3.org/XML/1998/namespace",
                            d = "http://www.w3.org/2000/xmlns/",
                            f = { xml: h, xmlns: d },
                            p = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                            _ = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
                            m = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                            y = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

                        function v(e) { return " " === e || "\n" === e || "\r" === e || "\t" === e }

                        function g(e) { return '"' === e || "'" === e }

                        function b(e, t) { return e.test(t) }
                        var e, E, S, T = 0;
                        for (e in a.STATE = { BEGIN: T++, BEGIN_WHITESPACE: T++, TEXT: T++, TEXT_ENTITY: T++, OPEN_WAKA: T++, SGML_DECL: T++, SGML_DECL_QUOTED: T++, DOCTYPE: T++, DOCTYPE_QUOTED: T++, DOCTYPE_DTD: T++, DOCTYPE_DTD_QUOTED: T++, COMMENT_STARTING: T++, COMMENT: T++, COMMENT_ENDING: T++, COMMENT_ENDED: T++, CDATA: T++, CDATA_ENDING: T++, CDATA_ENDING_2: T++, PROC_INST: T++, PROC_INST_BODY: T++, PROC_INST_ENDING: T++, OPEN_TAG: T++, OPEN_TAG_SLASH: T++, ATTRIB: T++, ATTRIB_NAME: T++, ATTRIB_NAME_SAW_WHITE: T++, ATTRIB_VALUE: T++, ATTRIB_VALUE_QUOTED: T++, ATTRIB_VALUE_CLOSED: T++, ATTRIB_VALUE_UNQUOTED: T++, ATTRIB_VALUE_ENTITY_Q: T++, ATTRIB_VALUE_ENTITY_U: T++, CLOSE_TAG: T++, CLOSE_TAG_SAW_WHITE: T++, SCRIPT: T++, SCRIPT_ENDING: T++ }, a.XML_ENTITIES = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'" }, a.ENTITIES = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'", AElig: 198, Aacute: 193, Acirc: 194, Agrave: 192, Aring: 197, Atilde: 195, Auml: 196, Ccedil: 199, ETH: 208, Eacute: 201, Ecirc: 202, Egrave: 200, Euml: 203, Iacute: 205, Icirc: 206, Igrave: 204, Iuml: 207, Ntilde: 209, Oacute: 211, Ocirc: 212, Ograve: 210, Oslash: 216, Otilde: 213, Ouml: 214, THORN: 222, Uacute: 218, Ucirc: 219, Ugrave: 217, Uuml: 220, Yacute: 221, aacute: 225, acirc: 226, aelig: 230, agrave: 224, aring: 229, atilde: 227, auml: 228, ccedil: 231, eacute: 233, ecirc: 234, egrave: 232, eth: 240, euml: 235, iacute: 237, icirc: 238, igrave: 236, iuml: 239, ntilde: 241, oacute: 243, ocirc: 244, ograve: 242, oslash: 248, otilde: 245, ouml: 246, szlig: 223, thorn: 254, uacute: 250, ucirc: 251, ugrave: 249, uuml: 252, yacute: 253, yuml: 255, copy: 169, reg: 174, nbsp: 160, iexcl: 161, cent: 162, pound: 163, curren: 164, yen: 165, brvbar: 166, sect: 167, uml: 168, ordf: 170, laquo: 171, not: 172, shy: 173, macr: 175, deg: 176, plusmn: 177, sup1: 185, sup2: 178, sup3: 179, acute: 180, micro: 181, para: 182, middot: 183, cedil: 184, ordm: 186, raquo: 187, frac14: 188, frac12: 189, frac34: 190, iquest: 191, times: 215, divide: 247, OElig: 338, oelig: 339, Scaron: 352, scaron: 353, Yuml: 376, fnof: 402, circ: 710, tilde: 732, Alpha: 913, Beta: 914, Gamma: 915, Delta: 916, Epsilon: 917, Zeta: 918, Eta: 919, Theta: 920, Iota: 921, Kappa: 922, Lambda: 923, Mu: 924, Nu: 925, Xi: 926, Omicron: 927, Pi: 928, Rho: 929, Sigma: 931, Tau: 932, Upsilon: 933, Phi: 934, Chi: 935, Psi: 936, Omega: 937, alpha: 945, beta: 946, gamma: 947, delta: 948, epsilon: 949, zeta: 950, eta: 951, theta: 952, iota: 953, kappa: 954, lambda: 955, mu: 956, nu: 957, xi: 958, omicron: 959, pi: 960, rho: 961, sigmaf: 962, sigma: 963, tau: 964, upsilon: 965, phi: 966, chi: 967, psi: 968, omega: 969, thetasym: 977, upsih: 978, piv: 982, ensp: 8194, emsp: 8195, thinsp: 8201, zwnj: 8204, zwj: 8205, lrm: 8206, rlm: 8207, ndash: 8211, mdash: 8212, lsquo: 8216, rsquo: 8217, sbquo: 8218, ldquo: 8220, rdquo: 8221, bdquo: 8222, dagger: 8224, Dagger: 8225, bull: 8226, hellip: 8230, permil: 8240, prime: 8242, Prime: 8243, lsaquo: 8249, rsaquo: 8250, oline: 8254, frasl: 8260, euro: 8364, image: 8465, weierp: 8472, real: 8476, trade: 8482, alefsym: 8501, larr: 8592, uarr: 8593, rarr: 8594, darr: 8595, harr: 8596, crarr: 8629, lArr: 8656, uArr: 8657, rArr: 8658, dArr: 8659, hArr: 8660, forall: 8704, part: 8706, exist: 8707, empty: 8709, nabla: 8711, isin: 8712, notin: 8713, ni: 8715, prod: 8719, sum: 8721, minus: 8722, lowast: 8727, radic: 8730, prop: 8733, infin: 8734, ang: 8736, and: 8743, or: 8744, cap: 8745, cup: 8746, int: 8747, there4: 8756, sim: 8764, cong: 8773, asymp: 8776, ne: 8800, equiv: 8801, le: 8804, ge: 8805, sub: 8834, sup: 8835, nsub: 8836, sube: 8838, supe: 8839, oplus: 8853, otimes: 8855, perp: 8869, sdot: 8901, lceil: 8968, rceil: 8969, lfloor: 8970, rfloor: 8971, lang: 9001, rang: 9002, loz: 9674, spades: 9824, clubs: 9827, hearts: 9829, diams: 9830 }, Object.keys(a.ENTITIES).forEach(function(e) {
                                var t = a.ENTITIES[e],
                                    t = "number" == typeof t ? String.fromCharCode(t) : t;
                                a.ENTITIES[e] = t
                            }), a.STATE) a.STATE[a.STATE[e]] = e;

                        function A(e, t, n) { e[t] && e[t](n) }

                        function w(e, t, n) { e.textNode && k(e), A(e, t, n) }

                        function k(e) { e.textNode = C(e.opt, e.textNode), e.textNode && A(e, "ontext", e.textNode), e.textNode = "" }

                        function C(e, t) { return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t }

                        function I(e, t) { return k(e), e.trackPosition && (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c), t = new Error(t), e.error = t, A(e, "onerror", t), e }

                        function D(e) { return e.sawRoot && !e.closedRoot && L(e, "Unclosed root tag"), e.state !== T.BEGIN && e.state !== T.BEGIN_WHITESPACE && e.state !== T.TEXT && I(e, "Unexpected end"), k(e), e.c = "", e.closed = !0, A(e, "onend"), i.call(e, e.strict, e.opt), e }

                        function L(e, t) {
                            if ("object" != typeof e || !(e instanceof i)) throw new Error("bad call to strictFail");
                            e.strict && I(e, t)
                        }

                        function R(e, t) {
                            var n = e.indexOf(":") < 0 ? ["", e] : e.split(":"),
                                r = n[0],
                                n = n[1];
                            return t && "xmlns" === e && (r = "xmlns", n = ""), { prefix: r, local: n }
                        }

                        function O(e) {
                            var t, n, r;
                            e.strict || (e.attribName = e.attribName[e.looseCase]()), -1 !== e.attribList.indexOf(e.attribName) || e.tag.attributes.hasOwnProperty(e.attribName) || (e.opt.xmlns ? (r = (n = R(e.attribName, !0)).prefix, t = n.local, "xmlns" === r && ("xml" === t && e.attribValue !== h ? L(e, "xml: prefix must be bound to " + h + "\nActual: " + e.attribValue) : "xmlns" === t && e.attribValue !== d ? L(e, "xmlns: prefix must be bound to " + d + "\nActual: " + e.attribValue) : (n = e.tag, r = e.tags[e.tags.length - 1] || e, n.ns === r.ns && (n.ns = Object.create(r.ns)), n.ns[t] = e.attribValue)), e.attribList.push([e.attribName, e.attribValue])) : (e.tag.attributes[e.attribName] = e.attribValue, w(e, "onattribute", { name: e.attribName, value: e.attribValue }))), e.attribName = e.attribValue = ""
                        }

                        function P(t, e) {
                            if (t.opt.xmlns) {
                                var n = t.tag,
                                    r = R(t.tagName);
                                n.prefix = r.prefix, n.local = r.local, n.uri = n.ns[r.prefix] || "", n.prefix && !n.uri && (L(t, "Unbound namespace prefix: " + JSON.stringify(t.tagName)), n.uri = r.prefix);
                                r = t.tags[t.tags.length - 1] || t;
                                n.ns && r.ns !== n.ns && Object.keys(n.ns).forEach(function(e) { w(t, "onopennamespace", { prefix: e, uri: n.ns[e] }) });
                                for (var i = 0, o = t.attribList.length; i < o; i++) {
                                    var s = t.attribList[i],
                                        a = s[0],
                                        l = s[1],
                                        u = R(a, !0),
                                        c = u.prefix,
                                        s = u.local,
                                        u = "" !== c && n.ns[c] || "",
                                        s = { name: a, value: l, prefix: c, local: s, uri: u };
                                    c && "xmlns" !== c && !u && (L(t, "Unbound namespace prefix: " + JSON.stringify(c)), s.uri = c), t.tag.attributes[a] = s, w(t, "onattribute", s)
                                }
                                t.attribList.length = 0
                            }
                            t.tag.isSelfClosing = !!e, t.sawRoot = !0, t.tags.push(t.tag), w(t, "onopentag", t.tag), e || (t.noscript || "script" !== t.tagName.toLowerCase() ? t.state = T.TEXT : t.state = T.SCRIPT, t.tag = null, t.tagName = ""), t.attribName = t.attribValue = "", t.attribList.length = 0
                        }

                        function M(n) {
                            if (!n.tagName) return L(n, "Weird empty close tag."), n.textNode += "</>", void(n.state = T.TEXT);
                            if (n.script) {
                                if ("script" !== n.tagName) return n.script += "</" + n.tagName + ">", n.tagName = "", void(n.state = T.SCRIPT);
                                w(n, "onscript", n.script), n.script = ""
                            }
                            var e = n.tags.length,
                                t = n.tagName;
                            n.strict || (t = t[n.looseCase]());
                            for (var r = t; e--;) {
                                if (n.tags[e].name === r) break;
                                L(n, "Unexpected close tag")
                            }
                            if (e < 0) return L(n, "Unmatched closing tag: " + n.tagName), n.textNode += "</" + n.tagName + ">", void(n.state = T.TEXT);
                            n.tagName = t;
                            for (var i = n.tags.length; i-- > e;) {
                                var o = n.tag = n.tags.pop();
                                n.tagName = n.tag.name, w(n, "onclosetag", n.tagName);
                                var s, a = {};
                                for (s in o.ns) a[s] = o.ns[s];
                                var l = n.tags[n.tags.length - 1] || n;
                                n.opt.xmlns && o.ns !== l.ns && Object.keys(o.ns).forEach(function(e) {
                                    var t = o.ns[e];
                                    w(n, "onclosenamespace", { prefix: e, uri: t })
                                })
                            }
                            0 === e && (n.closedRoot = !0), n.tagName = n.attribValue = n.attribName = "", n.attribList.length = 0, n.state = T.TEXT
                        }

                        function N(e, t) { "<" === t ? (e.state = T.OPEN_WAKA, e.startTagPosition = e.position) : v(t) || (L(e, "Non-whitespace before first tag."), e.textNode = t, e.state = T.TEXT) }

                        function x(e, t) { var n = ""; return t < e.length && (n = e.charAt(t)), n }

                        function t() {
                            var e, t = [],
                                n = -1,
                                r = arguments.length;
                            if (!r) return "";
                            for (var i = ""; ++n < r;) {
                                var o = Number(arguments[n]);
                                if (!isFinite(o) || o < 0 || 1114111 < o || S(o) !== o) throw RangeError("Invalid code point: " + o);
                                o <= 65535 ? t.push(o) : (e = 55296 + ((o -= 65536) >> 10), o = o % 1024 + 56320, t.push(e, o)), (n + 1 === r || 16384 < t.length) && (i += E.apply(null, t), t.length = 0)
                            }
                            return i
                        }
                        T = a.STATE, String.fromCodePoint || (E = String.fromCharCode, S = Math.floor, Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", { value: t, configurable: !0, writable: !0 }) : String.fromCodePoint = t)
                    }(void 0 === t ? this.sax = {} : t)
                }).call(this)
            }).call(this, B("buffer").Buffer)
        }, { buffer: 26, stream: 83, string_decoder: 99 }],
        83: [function(e, t, n) {
            t.exports = r;
            var c = e("events").EventEmitter;

            function r() { c.call(this) }
            e("inherits")(r, c), r.Readable = e("readable-stream/lib/_stream_readable.js"), r.Writable = e("readable-stream/lib/_stream_writable.js"), r.Duplex = e("readable-stream/lib/_stream_duplex.js"), r.Transform = e("readable-stream/lib/_stream_transform.js"), r.PassThrough = e("readable-stream/lib/_stream_passthrough.js"), r.finished = e("readable-stream/lib/internal/streams/end-of-stream.js"), r.pipeline = e("readable-stream/lib/internal/streams/pipeline.js"), (r.Stream = r).prototype.pipe = function(t, e) {
                var n = this;

                function r(e) { t.writable && !1 === t.write(e) && n.pause && n.pause() }

                function i() { n.readable && n.resume && n.resume() }
                n.on("data", r), t.on("drain", i), t._isStdio || e && !1 === e.end || (n.on("end", s), n.on("close", a));
                var o = !1;

                function s() { o || (o = !0, t.end()) }

                function a() { o || (o = !0, "function" == typeof t.destroy && t.destroy()) }

                function l(e) { if (u(), 0 === c.listenerCount(this, "error")) throw e }

                function u() { n.removeListener("data", r), t.removeListener("drain", i), n.removeListener("end", s), n.removeListener("close", a), n.removeListener("error", l), t.removeListener("error", l), n.removeListener("end", u), n.removeListener("close", u), t.removeListener("close", u) }
                return n.on("error", l), t.on("error", l), n.on("end", u), n.on("close", u), t.on("close", u), t.emit("pipe", n), t
            }
        }, { events: 30, inherits: 84, "readable-stream/lib/_stream_duplex.js": 86, "readable-stream/lib/_stream_passthrough.js": 87, "readable-stream/lib/_stream_readable.js": 88, "readable-stream/lib/_stream_transform.js": 89, "readable-stream/lib/_stream_writable.js": 90, "readable-stream/lib/internal/streams/end-of-stream.js": 94, "readable-stream/lib/internal/streams/pipeline.js": 96 }],
        84: [function(e, t, n) {
            "function" == typeof Object.create ? t.exports = function(e, t) { t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })) } : t.exports = function(e, t) {
                var n;
                t && (e.super_ = t, (n = function() {}).prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e)
            }
        }, {}],
        85: [function(e, t, n) {
            "use strict";
            var r = {};

            function i(e, i, t) {
                var n = function(r) {
                    var e, t;

                    function n(e, t, n) { return r.call(this, (e = e, t = t, n = n, "string" == typeof i ? i : i(e, t, n))) || this }
                    return t = r, (e = n).prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t, n
                }(t = t || Error);
                n.prototype.name = t.name, n.prototype.code = e, r[e] = n
            }

            function l(e, t) { if (Array.isArray(e)) { var n = e.length; return e = e.map(function(e) { return String(e) }), 2 < n ? "one of ".concat(t, " ").concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1] : 2 === n ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0]) } return "of ".concat(t, " ").concat(String(e)) }
            i("ERR_INVALID_OPT_VALUE", function(e, t) { return 'The value "' + t + '" is invalid for option "' + e + '"' }, TypeError), i("ERR_INVALID_ARG_TYPE", function(e, t, n) { var r, i, o, s, a; return "string" == typeof t && (s = "not ", t.substr(!o || o < 0 ? 0 : +o, s.length) === s) ? (r = "must not be", t = t.replace(/^not /, "")) : r = "must be", o = e, s = " argument", (void 0 === a || a > o.length) && (a = o.length), t = o.substring(a - s.length, a) === s ? "The ".concat(e, " ").concat(r, " ").concat(l(t, "type")) : ("number" != typeof i && (i = 0), i = (i + (a = ".").length > (s = e).length ? void 0 : -1 !== s.indexOf(a, i)) ? "property" : "argument", 'The "'.concat(e, '" ').concat(i, " ").concat(r, " ").concat(l(t, "type"))), t += ". Received type ".concat(typeof n) }, TypeError), i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), i("ERR_METHOD_NOT_IMPLEMENTED", function(e) { return "The " + e + " method is not implemented" }), i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), i("ERR_STREAM_DESTROYED", function(e) { return "Cannot call " + e + " after a stream was destroyed" }), i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), i("ERR_STREAM_WRITE_AFTER_END", "write after end"), i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), i("ERR_UNKNOWN_ENCODING", function(e) { return "Unknown encoding: " + e }, TypeError), i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), t.exports.codes = r
        }, {}],
        86: [function(c, h, e) {
            (function(u) {
                (function() {
                    "use strict";
                    var e = Object.keys || function(e) { var t, n = []; for (t in e) n.push(t); return n };
                    h.exports = s;
                    var t = c("./_stream_readable"),
                        n = c("./_stream_writable");
                    c("inherits")(s, t);
                    for (var r = e(n.prototype), i = 0; i < r.length; i++) {
                        var o = r[i];
                        s.prototype[o] || (s.prototype[o] = n.prototype[o])
                    }

                    function s(e) {
                        if (!(this instanceof s)) return new s(e);
                        t.call(this, e), n.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", a)))
                    }

                    function a() { this._writableState.ended || u.nextTick(l, this) }

                    function l(e) { e.end() }
                    Object.defineProperty(s.prototype, "writableHighWaterMark", { enumerable: !1, get: function() { return this._writableState.highWaterMark } }), Object.defineProperty(s.prototype, "writableBuffer", { enumerable: !1, get: function() { return this._writableState && this._writableState.getBuffer() } }), Object.defineProperty(s.prototype, "writableLength", { enumerable: !1, get: function() { return this._writableState.length } }), Object.defineProperty(s.prototype, "destroyed", { enumerable: !1, get: function() { return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed) }, set: function(e) { void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e) } })
                }).call(this)
            }).call(this, c("_process"))
        }, { "./_stream_readable": 88, "./_stream_writable": 90, _process: 80, inherits: 84 }],
        87: [function(e, t, n) {
            "use strict";
            t.exports = i;
            var r = e("./_stream_transform");

            function i(e) {
                if (!(this instanceof i)) return new i(e);
                r.call(this, e)
            }
            e("inherits")(i, r), i.prototype._transform = function(e, t, n) { n(null, e) }
        }, { "./_stream_transform": 89, inherits: 84 }],
        88: [function(F, j, e) {
            (function(B, U) {
                (function() {
                    "use strict";
                    var r;
                    (j.exports = b).ReadableState = g;

                    function m(e, t) { return e.listeners(t).length }
                    F("events").EventEmitter;
                    var i = F("./internal/streams/stream"),
                        c = F("buffer").Buffer,
                        h = U.Uint8Array || function() {};
                    var o, e, n, t = F("util"),
                        y = t && t.debuglog ? t.debuglog("stream") : function() {},
                        s = F("./internal/streams/buffer_list"),
                        a = F("./internal/streams/destroy"),
                        l = F("./internal/streams/state").getHighWaterMark,
                        t = F("../errors").codes,
                        d = t.ERR_INVALID_ARG_TYPE,
                        f = t.ERR_STREAM_PUSH_AFTER_EOF,
                        u = t.ERR_METHOD_NOT_IMPLEMENTED,
                        p = t.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                    F("inherits")(b, i);
                    var v = a.errorOrDestroy,
                        _ = ["error", "close", "destroy", "pause", "resume"];

                    function g(e, t, n) { r = r || F("./_stream_duplex"), e = e || {}, "boolean" != typeof n && (n = t instanceof r), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = l(this, e, "readableHighWaterMark", n), this.buffer = new s, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (o = o || F("string_decoder/").StringDecoder, this.decoder = new o(e.encoding), this.encoding = e.encoding) }

                    function b(e) {
                        if (r = r || F("./_stream_duplex"), !(this instanceof b)) return new b(e);
                        var t = this instanceof r;
                        this._readableState = new g(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), i.call(this)
                    }

                    function E(e, t, n, r, i) {
                        y("readableAddChunk", t);
                        var o, s, a, l, u = e._readableState;
                        if (null === t) u.reading = !1, s = e, a = u, y("onEofChunk"), a.ended || (!a.decoder || (l = a.decoder.end()) && l.length && (a.buffer.push(l), a.length += a.objectMode ? 1 : l.length), a.ended = !0, a.sync ? w(s) : (a.needReadable = !1, a.emittedReadable || (a.emittedReadable = !0, k(s))));
                        else if (i || (o = function(e, t) {
                                var n;
                                (function(e) { return c.isBuffer(e) || e instanceof h })(t) || "string" == typeof t || void 0 === t || e.objectMode || (n = new d("chunk", ["string", "Buffer", "Uint8Array"], t));
                                return n
                            }(u, t)), o) v(e, o);
                        else if (u.objectMode || t && 0 < t.length)
                            if ("string" == typeof t || u.objectMode || Object.getPrototypeOf(t) === c.prototype || (o = t, t = c.from(o)), r) u.endEmitted ? v(e, new p) : S(e, u, t, !0);
                            else if (u.ended) v(e, new f);
                        else {
                            if (u.destroyed) return !1;
                            u.reading = !1, u.decoder && !n ? (t = u.decoder.write(t), u.objectMode || 0 !== t.length ? S(e, u, t, !1) : C(e, u)) : S(e, u, t, !1)
                        } else r || (u.reading = !1, C(e, u));
                        return !u.ended && (u.length < u.highWaterMark || 0 === u.length)
                    }

                    function S(e, t, n, r) { t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", n)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && w(e)), C(e, t) }
                    Object.defineProperty(b.prototype, "destroyed", { enumerable: !1, get: function() { return void 0 !== this._readableState && this._readableState.destroyed }, set: function(e) { this._readableState && (this._readableState.destroyed = e) } }), b.prototype.destroy = a.destroy, b.prototype._undestroy = a.undestroy, b.prototype._destroy = function(e, t) { t(e) }, b.prototype.push = function(e, t) { var n, r = this._readableState; return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = c.from(e, t), t = ""), n = !0), E(this, e, t, !1, n) }, b.prototype.unshift = function(e) { return E(this, e, null, !0, !1) }, b.prototype.isPaused = function() { return !1 === this._readableState.flowing }, b.prototype.setEncoding = function(e) {
                        var t = new(o = o || F("string_decoder/").StringDecoder)(e);
                        this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
                        for (var n = this._readableState.buffer.head, r = ""; null !== n;) r += t.write(n.data), n = n.next;
                        return this._readableState.buffer.clear(), "" !== r && this._readableState.buffer.push(r), this._readableState.length = r.length, this
                    };
                    var T = 1073741824;

                    function A(e, t) { return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? (t.flowing && t.length ? t.buffer.head.data : t).length : (e > t.highWaterMark && (t.highWaterMark = (T <= (n = e) ? n = T : (n--, n |= n >>> 1, n |= n >>> 2, n |= n >>> 4, n |= n >>> 8, n |= n >>> 16, n++), n)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)); var n }

                    function w(e) {
                        var t = e._readableState;
                        y("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (y("emitReadable", t.flowing), t.emittedReadable = !0, B.nextTick(k, e))
                    }

                    function k(e) {
                        var t = e._readableState;
                        y("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, O(e)
                    }

                    function C(e, t) { t.readingMore || (t.readingMore = !0, B.nextTick(I, e, t)) }

                    function I(e, t) {
                        for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) { var n = t.length; if (y("maybeReadMore read 0"), e.read(0), n === t.length) break }
                        t.readingMore = !1
                    }

                    function D(e) {
                        var t = e._readableState;
                        t.readableListening = 0 < e.listenerCount("readable"), t.resumeScheduled && !t.paused ? t.flowing = !0 : 0 < e.listenerCount("data") && e.resume()
                    }

                    function L(e) { y("readable nexttick read 0"), e.read(0) }

                    function R(e, t) { y("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), O(e), t.flowing && !t.reading && e.read(0) }

                    function O(e) { var t = e._readableState; for (y("flow", t.flowing); t.flowing && null !== e.read();); }

                    function P(e, t) { return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : n = t.buffer.consume(e, t.decoder), n); var n }

                    function M(e) {
                        var t = e._readableState;
                        y("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, B.nextTick(N, t, e))
                    }

                    function N(e, t) { y("endReadableNT", e.endEmitted, e.length), e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"), !e.autoDestroy || (!(e = t._writableState) || e.autoDestroy && e.finished) && t.destroy()) }

                    function x(e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    }
                    b.prototype.read = function(e) {
                        y("read", e), e = parseInt(e, 10);
                        var t = this._readableState,
                            n = e;
                        if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : 0 < t.length) || t.ended)) return y("read: emitReadable", t.length, t.ended), (0 === t.length && t.ended ? M : w)(this), null;
                        if (0 === (e = A(e, t)) && t.ended) return 0 === t.length && M(this), null;
                        var r = t.needReadable;
                        return y("need readable", r), (0 === t.length || t.length - e < t.highWaterMark) && y("length less than watermark", r = !0), t.ended || t.reading ? y("reading or ended", r = !1) : r && (y("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = A(n, t))), null === (r = 0 < e ? P(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && M(this)), null !== r && this.emit("data", r), r
                    }, b.prototype._read = function(e) { v(this, new u("_read()")) }, b.prototype.pipe = function(n, e) {
                        var r = this,
                            i = this._readableState;
                        switch (i.pipesCount) {
                            case 0:
                                i.pipes = n;
                                break;
                            case 1:
                                i.pipes = [i.pipes, n];
                                break;
                            default:
                                i.pipes.push(n)
                        }
                        i.pipesCount += 1, y("pipe count=%d opts=%j", i.pipesCount, e);
                        var t = (!e || !1 !== e.end) && n !== B.stdout && n !== B.stderr ? s : _;

                        function o(e, t) { y("onunpipe"), e === r && t && !1 === t.hasUnpiped && (t.hasUnpiped = !0, y("cleanup"), n.removeListener("close", f), n.removeListener("finish", p), n.removeListener("drain", l), n.removeListener("error", d), n.removeListener("unpipe", o), r.removeListener("end", s), r.removeListener("end", _), r.removeListener("data", h), c = !0, !i.awaitDrain || n._writableState && !n._writableState.needDrain || l()) }

                        function s() { y("onend"), n.end() }
                        i.endEmitted ? B.nextTick(t) : r.once("end", t), n.on("unpipe", o);
                        var a, l = (a = r, function() {
                            var e = a._readableState;
                            y("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && m(a, "data") && (e.flowing = !0, O(a))
                        });
                        n.on("drain", l);
                        var u, c = !1;

                        function h(e) {
                            y("ondata");
                            e = n.write(e);
                            y("dest.write", e), !1 === e && ((1 === i.pipesCount && i.pipes === n || 1 < i.pipesCount && -1 !== x(i.pipes, n)) && !c && (y("false write response, pause", i.awaitDrain), i.awaitDrain++), r.pause())
                        }

                        function d(e) { y("onerror", e), _(), n.removeListener("error", d), 0 === m(n, "error") && v(n, e) }

                        function f() { n.removeListener("finish", p), _() }

                        function p() { y("onfinish"), n.removeListener("close", f), _() }

                        function _() { y("unpipe"), r.unpipe(n) }
                        return r.on("data", h), u = "error", e = d, "function" == typeof(t = n).prependListener ? t.prependListener(u, e) : t._events && t._events[u] ? Array.isArray(t._events[u]) ? t._events[u].unshift(e) : t._events[u] = [e, t._events[u]] : t.on(u, e), n.once("close", f), n.once("finish", p), n.emit("pipe", r), i.flowing || (y("pipe resume"), r.resume()), n
                    }, b.prototype.unpipe = function(e) {
                        var t = this._readableState,
                            n = { hasUnpiped: !1 };
                        if (0 === t.pipesCount) return this;
                        if (1 === t.pipesCount) return e && e !== t.pipes || (e = e || t.pipes, t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n)), this;
                        if (!e) {
                            var r = t.pipes,
                                i = t.pipesCount;
                            t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                            for (var o = 0; o < i; o++) r[o].emit("unpipe", this, { hasUnpiped: !1 });
                            return this
                        }
                        var s = x(t.pipes, e);
                        return -1 === s || (t.pipes.splice(s, 1), --t.pipesCount, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n)), this
                    }, b.prototype.addListener = b.prototype.on = function(e, t) {
                        var n = i.prototype.on.call(this, e, t),
                            t = this._readableState;
                        return "data" === e ? (t.readableListening = 0 < this.listenerCount("readable"), !1 !== t.flowing && this.resume()) : "readable" === e && (t.endEmitted || t.readableListening || (t.readableListening = t.needReadable = !0, t.flowing = !1, t.emittedReadable = !1, y("on readable", t.length, t.reading), t.length ? w(this) : t.reading || B.nextTick(L, this))), n
                    }, b.prototype.removeListener = function(e, t) { t = i.prototype.removeListener.call(this, e, t); return "readable" === e && B.nextTick(D, this), t }, b.prototype.removeAllListeners = function(e) { var t = i.prototype.removeAllListeners.apply(this, arguments); return "readable" !== e && void 0 !== e || B.nextTick(D, this), t }, b.prototype.resume = function() { var e, t, n = this._readableState; return n.flowing || (y("resume"), n.flowing = !n.readableListening, e = this, (t = n).resumeScheduled || (t.resumeScheduled = !0, B.nextTick(R, e, t))), n.paused = !1, this }, b.prototype.pause = function() { return y("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (y("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this }, b.prototype.wrap = function(t) {
                        var e, n = this,
                            r = this._readableState,
                            i = !1;
                        for (e in t.on("end", function() {
                                var e;
                                y("wrapped end"), !r.decoder || r.ended || (e = r.decoder.end()) && e.length && n.push(e), n.push(null)
                            }), t.on("data", function(e) { y("wrapped data"), r.decoder && (e = r.decoder.write(e)), r.objectMode && null == e || (r.objectMode || e && e.length) && (n.push(e) || (i = !0, t.pause())) }), t) void 0 === this[e] && "function" == typeof t[e] && (this[e] = function(e) { return function() { return t[e].apply(t, arguments) } }(e));
                        for (var o = 0; o < _.length; o++) t.on(_[o], this.emit.bind(this, _[o]));
                        return this._read = function(e) { y("wrapped _read", e), i && (i = !1, t.resume()) }, this
                    }, "function" == typeof Symbol && (b.prototype[Symbol.asyncIterator] = function() { return void 0 === e && (e = F("./internal/streams/async_iterator")), e(this) }), Object.defineProperty(b.prototype, "readableHighWaterMark", { enumerable: !1, get: function() { return this._readableState.highWaterMark } }), Object.defineProperty(b.prototype, "readableBuffer", { enumerable: !1, get: function() { return this._readableState && this._readableState.buffer } }), Object.defineProperty(b.prototype, "readableFlowing", { enumerable: !1, get: function() { return this._readableState.flowing }, set: function(e) { this._readableState && (this._readableState.flowing = e) } }), b._fromList = P, Object.defineProperty(b.prototype, "readableLength", { enumerable: !1, get: function() { return this._readableState.length } }), "function" == typeof Symbol && (b.from = function(e, t) { return void 0 === n && (n = F("./internal/streams/from")), n(b, e, t) })
                }).call(this)
            }).call(this, F("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "../errors": 85, "./_stream_duplex": 86, "./internal/streams/async_iterator": 91, "./internal/streams/buffer_list": 92, "./internal/streams/destroy": 93, "./internal/streams/from": 95, "./internal/streams/state": 97, "./internal/streams/stream": 98, _process: 80, buffer: 26, events: 30, inherits: 84, "string_decoder/": 99, util: 25 }],
        89: [function(e, t, n) {
            "use strict";
            t.exports = l;
            var t = e("../errors").codes,
                r = t.ERR_METHOD_NOT_IMPLEMENTED,
                i = t.ERR_MULTIPLE_CALLBACK,
                o = t.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                s = t.ERR_TRANSFORM_WITH_LENGTH_0,
                a = e("./_stream_duplex");

            function l(e) {
                if (!(this instanceof l)) return new l(e);
                a.call(this, e), this._transformState = {
                    afterTransform: function(e, t) {
                        var n = this._transformState;
                        n.transforming = !1;
                        var r = n.writecb;
                        if (null === r) return this.emit("error", new i);
                        n.writechunk = null, (n.writecb = null) != t && this.push(t), r(e), (e = this._readableState).reading = !1, (e.needReadable || e.length < e.highWaterMark) && this._read(e.highWaterMark)
                    }.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", u)
            }

            function u() { var n = this; "function" != typeof this._flush || this._readableState.destroyed ? c(this, null, null) : this._flush(function(e, t) { c(n, e, t) }) }

            function c(e, t, n) { if (t) return e.emit("error", t); if (null != n && e.push(n), e._writableState.length) throw new s; if (e._transformState.transforming) throw new o; return e.push(null) }
            e("inherits")(l, a), l.prototype.push = function(e, t) { return this._transformState.needTransform = !1, a.prototype.push.call(this, e, t) }, l.prototype._transform = function(e, t, n) { n(new r("_transform()")) }, l.prototype._write = function(e, t, n) {
                var r = this._transformState;
                r.writecb = n, r.writechunk = e, r.writeencoding = t, r.transforming || (t = this._readableState, (r.needTransform || t.needReadable || t.length < t.highWaterMark) && this._read(t.highWaterMark))
            }, l.prototype._read = function(e) {
                var t = this._transformState;
                null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
            }, l.prototype._destroy = function(e, t) { a.prototype._destroy.call(this, e, function(e) { t(e) }) }
        }, { "../errors": 85, "./_stream_duplex": 86, inherits: 84 }],
        90: [function(L, R, e) {
            (function(I, D) {
                (function() {
                    "use strict";

                    function c(e) {
                        var t = this;
                        this.next = null, this.entry = null, this.finish = function() {
                            ! function(e, t, n) {
                                var r = e.entry;
                                for (e.entry = null; r;) {
                                    var i = r.callback;
                                    t.pendingcb--, i(n), r = r.next
                                }
                                t.corkedRequestsFree.next = e
                            }(t, e)
                        }
                    }
                    var r;
                    (R.exports = E).WritableState = b;
                    var e = { deprecate: L("util-deprecate") },
                        n = L("./internal/streams/stream"),
                        h = L("buffer").Buffer,
                        d = D.Uint8Array || function() {};
                    var i, t = L("./internal/streams/destroy"),
                        o = L("./internal/streams/state").getHighWaterMark,
                        s = L("../errors").codes,
                        f = s.ERR_INVALID_ARG_TYPE,
                        a = s.ERR_METHOD_NOT_IMPLEMENTED,
                        l = s.ERR_MULTIPLE_CALLBACK,
                        u = s.ERR_STREAM_CANNOT_PIPE,
                        p = s.ERR_STREAM_DESTROYED,
                        _ = s.ERR_STREAM_NULL_VALUES,
                        m = s.ERR_STREAM_WRITE_AFTER_END,
                        y = s.ERR_UNKNOWN_ENCODING,
                        v = t.errorOrDestroy;

                    function g() {}

                    function b(e, t, n) {
                        r = r || L("./_stream_duplex"), e = e || {}, "boolean" != typeof n && (n = t instanceof r), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = o(this, e, "writableHighWaterMark", n), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
                        n = (this.destroyed = !1) === e.decodeStrings;
                        this.decodeStrings = !n, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                            ! function(e, t) {
                                var n = e._writableState,
                                    r = n.sync,
                                    i = n.writecb;
                                if ("function" != typeof i) throw new l;
                                (function(e) { e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0 })(n), t ? function(e, t, n, r, i) {--t.pendingcb, n ? (I.nextTick(i, r), I.nextTick(C, e, t), e._writableState.errorEmitted = !0, v(e, r)) : (i(r), e._writableState.errorEmitted = !0, v(e, r), C(e, t)) }(e, n, r, t, i) : ((t = w(n) || e.destroyed) || n.corked || n.bufferProcessing || !n.bufferedRequest || A(e, n), r ? I.nextTick(T, e, n, t, i) : T(e, n, t, i))
                            }(t, e)
                        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new c(this)
                    }

                    function E(e) {
                        var t = this instanceof(r = r || L("./_stream_duplex"));
                        if (!t && !i.call(E, this)) return new E(e);
                        this._writableState = new b(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), n.call(this)
                    }

                    function S(e, t, n, r, i, o, s) { t.writelen = r, t.writecb = s, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new p("write")) : n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1 }

                    function T(e, t, n, r) {
                        var i;
                        n || (i = e, 0 === (n = t).length && n.needDrain && (n.needDrain = !1, i.emit("drain"))), t.pendingcb--, r(), C(e, t)
                    }

                    function A(e, t) {
                        t.bufferProcessing = !0;
                        var n = t.bufferedRequest;
                        if (e._writev && n && n.next) {
                            var r = t.bufferedRequestCount,
                                i = new Array(r),
                                r = t.corkedRequestsFree;
                            r.entry = n;
                            for (var o = 0, s = !0; n;)(i[o] = n).isBuf || (s = !1), n = n.next, o += 1;
                            i.allBuffers = s, S(e, t, !0, t.length, i, "", r.finish), t.pendingcb++, t.lastBufferedRequest = null, r.next ? (t.corkedRequestsFree = r.next, r.next = null) : t.corkedRequestsFree = new c(t), t.bufferedRequestCount = 0
                        } else {
                            for (; n;) {
                                var a = n.chunk,
                                    l = n.encoding,
                                    u = n.callback;
                                if (S(e, t, !1, t.objectMode ? 1 : a.length, a, l, u), n = n.next, t.bufferedRequestCount--, t.writing) break
                            }
                            null === n && (t.lastBufferedRequest = null)
                        }
                        t.bufferedRequest = n, t.bufferProcessing = !1
                    }

                    function w(e) { return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing }

                    function k(t, n) { t._final(function(e) { n.pendingcb--, e && v(t, e), n.prefinished = !0, t.emit("prefinish"), C(t, n) }) }

                    function C(e, t) { var n, r, i = w(t); return i && (n = e, (r = t).prefinished || r.finalCalled || ("function" != typeof n._final || r.destroyed ? (r.prefinished = !0, n.emit("prefinish")) : (r.pendingcb++, r.finalCalled = !0, I.nextTick(k, n, r))), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), !t.autoDestroy || (!(t = e._readableState) || t.autoDestroy && t.endEmitted) && e.destroy())), i }
                    L("inherits")(E, n), b.prototype.getBuffer = function() { for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next; return t },
                        function() { try { Object.defineProperty(b.prototype, "buffer", { get: e.deprecate(function() { return this.getBuffer() }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") }) } catch (e) {} }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (i = Function.prototype[Symbol.hasInstance], Object.defineProperty(E, Symbol.hasInstance, { value: function(e) { return !!i.call(this, e) || this === E && (e && e._writableState instanceof b) } })) : i = function(e) { return e instanceof this }, E.prototype.pipe = function() { v(this, new u) }, E.prototype.write = function(e, t, n) {
                            var r, i, o, s, a, l, u = this._writableState,
                                c = !1,
                                r = !u.objectMode && (r = e, h.isBuffer(r) || r instanceof d);
                            return r && !h.isBuffer(e) && (i = e, e = h.from(i)), "function" == typeof t && (n = t, t = null), t = r ? "buffer" : t || u.defaultEncoding, "function" != typeof n && (n = g), u.ending ? (s = this, a = n, l = new m, v(s, l), I.nextTick(a, l)) : (r || (i = this, s = u, a = n, null === (l = e) ? o = new _ : "string" == typeof l || s.objectMode || (o = new f("chunk", ["string", "Buffer"], l)), o ? (v(i, o), void I.nextTick(a, o)) : 1)) && (u.pendingcb++, c = function(e, t, n, r, i, o) {
                                n || (l = function(e, t, n) { e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = h.from(t, n)); return t }(t, r, i), r !== l && (n = !0, i = "buffer", r = l));
                                var s = t.objectMode ? 1 : r.length;
                                t.length += s;
                                var a = t.length < t.highWaterMark;
                                a || (t.needDrain = !0); {
                                    var l;
                                    t.writing || t.corked ? (l = t.lastBufferedRequest, t.lastBufferedRequest = { chunk: r, encoding: i, isBuf: n, callback: o, next: null }, l ? l.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1) : S(e, t, !1, s, r, i, o)
                                }
                                return a
                            }(this, u, r, e, t, n)), c
                        }, E.prototype.cork = function() { this._writableState.corked++ }, E.prototype.uncork = function() {
                            var e = this._writableState;
                            e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || A(this, e))
                        }, E.prototype.setDefaultEncoding = function(e) { if ("string" == typeof e && (e = e.toLowerCase()), !(-1 < ["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()))) throw new y(e); return this._writableState.defaultEncoding = e, this }, Object.defineProperty(E.prototype, "writableBuffer", { enumerable: !1, get: function() { return this._writableState && this._writableState.getBuffer() } }), Object.defineProperty(E.prototype, "writableHighWaterMark", { enumerable: !1, get: function() { return this._writableState.highWaterMark } }), E.prototype._write = function(e, t, n) { n(new a("_write()")) }, E.prototype._writev = null, E.prototype.end = function(e, t, n) { var r = this._writableState; return "function" == typeof e ? (n = e, t = e = null) : "function" == typeof t && (n = t, t = null), null != e && this.write(e, t), r.corked && (r.corked = 1, this.uncork()), r.ending || (t = this, n = n, (r = r).ending = !0, C(t, r), n && (r.finished ? I.nextTick(n) : t.once("finish", n)), r.ended = !0, t.writable = !1), this }, Object.defineProperty(E.prototype, "writableLength", { enumerable: !1, get: function() { return this._writableState.length } }), Object.defineProperty(E.prototype, "destroyed", { enumerable: !1, get: function() { return void 0 !== this._writableState && this._writableState.destroyed }, set: function(e) { this._writableState && (this._writableState.destroyed = e) } }), E.prototype.destroy = t.destroy, E.prototype._undestroy = t.undestroy, E.prototype._destroy = function(e, t) { t(e) }
                }).call(this)
            }).call(this, L("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "../errors": 85, "./_stream_duplex": 86, "./internal/streams/destroy": 93, "./internal/streams/state": 97, "./internal/streams/stream": 98, _process: 80, buffer: 26, inherits: 84, "util-deprecate": 102 }],
        91: [function(r, m, e) {
            (function(_) {
                (function() {
                    "use strict";
                    var e;

                    function n(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
                    var i = r("./end-of-stream"),
                        o = Symbol("lastResolve"),
                        s = Symbol("lastReject"),
                        a = Symbol("error"),
                        l = Symbol("ended"),
                        u = Symbol("lastPromise"),
                        c = Symbol("handlePromise"),
                        h = Symbol("stream");

                    function d(e, t) { return { value: e, done: t } }

                    function f(e) {
                        var t, n = e[o];
                        null === n || null !== (t = e[h].read()) && (e[u] = null, e[o] = null, e[s] = null, n(d(t, !1)))
                    }
                    var t = Object.getPrototypeOf(function() {}),
                        p = Object.setPrototypeOf((n(e = {get stream() { return this[h] },
                            next: function() {
                                var n = this,
                                    e = this[a];
                                if (null !== e) return Promise.reject(e);
                                if (this[l]) return Promise.resolve(d(void 0, !0));
                                if (this[h].destroyed) return new Promise(function(e, t) { _.nextTick(function() { n[a] ? t(n[a]) : e(d(void 0, !0)) }) });
                                var t, r, i, e = this[u];
                                if (e) t = new Promise((r = e, i = this, function(e, t) { r.then(function() { i[l] ? e(d(void 0, !0)) : i[c](e, t) }, t) }));
                                else {
                                    e = this[h].read();
                                    if (null !== e) return Promise.resolve(d(e, !1));
                                    t = new Promise(this[c])
                                }
                                return this[u] = t
                            }
                        }, Symbol.asyncIterator, function() { return this }), n(e, "return", function() { var e = this; return new Promise(function(t, n) { e[h].destroy(null, function(e) { e ? n(e) : t(d(void 0, !0)) }) }) }), e), t);
                    m.exports = function(e) {
                        var t, r = Object.create(p, (n(t = {}, h, { value: e, writable: !0 }), n(t, o, { value: null, writable: !0 }), n(t, s, { value: null, writable: !0 }), n(t, a, { value: null, writable: !0 }), n(t, l, { value: e._readableState.endEmitted, writable: !0 }), n(t, c, {
                            value: function(e, t) {
                                var n = r[h].read();
                                n ? (r[u] = null, r[o] = null, r[s] = null, e(d(n, !1))) : (r[o] = e, r[s] = t)
                            },
                            writable: !0
                        }), t));
                        return r[u] = null, i(e, function(e) {
                            if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) { var t = r[s]; return null !== t && (r[u] = null, r[o] = null, r[s] = null, t(e)), void(r[a] = e) }
                            e = r[o];
                            null !== e && (r[u] = null, r[o] = null, e(d(void 0, !(r[s] = null)))), r[l] = !0
                        }), e.on("readable", function(e) { _.nextTick(f, e) }.bind(null, r)), r
                    }
                }).call(this)
            }).call(this, r("_process"))
        }, { "./end-of-stream": 94, _process: 80 }],
        92: [function(e, t, n) {
            "use strict";

            function o(t, e) { var n, r = Object.keys(t); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), r.push.apply(r, n)), r }

            function i(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(i), !0).forEach(function(e) {
                        var t, n;
                        t = r, e = i[n = e], n in t ? Object.defineProperty(t, n, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = e
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach(function(e) { Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e)) })
                }
                return r
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var a = e("buffer").Buffer,
                l = e("util").inspect,
                u = l && l.custom || "inspect";
            t.exports = function() {
                function t() {! function(e) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this), this.head = null, this.tail = null, this.length = 0 }
                var e, n, r;
                return e = t, (n = [{
                    key: "push",
                    value: function(e) {
                        e = { data: e, next: null };
                        0 < this.length ? this.tail.next = e : this.head = e, this.tail = e, ++this.length
                    }
                }, {
                    key: "unshift",
                    value: function(e) {
                        e = { data: e, next: this.head };
                        0 === this.length && (this.tail = e), this.head = e, ++this.length
                    }
                }, { key: "shift", value: function() { if (0 !== this.length) { var e = this.head.data; return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e } } }, { key: "clear", value: function() { this.head = this.tail = null, this.length = 0 } }, { key: "join", value: function(e) { if (0 === this.length) return ""; for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data; return n } }, { key: "concat", value: function(e) { if (0 === this.length) return a.alloc(0); for (var t, n, r, i = a.allocUnsafe(e >>> 0), o = this.head, s = 0; o;) t = o.data, n = i, r = s, a.prototype.copy.call(t, n, r), s += o.data.length, o = o.next; return i } }, { key: "consume", value: function(e, t) { var n; return e < this.head.data.length ? (n = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : n = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), n } }, { key: "first", value: function() { return this.head.data } }, {
                    key: "_getString",
                    value: function(e) {
                        var t = this.head,
                            n = 1,
                            r = t.data;
                        for (e -= r.length; t = t.next;) {
                            var i = t.data,
                                o = e > i.length ? i.length : e;
                            if (o === i.length ? r += i : r += i.slice(0, e), 0 === (e -= o)) { o === i.length ? (++n, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t).data = i.slice(o); break }++n
                        }
                        return this.length -= n, r
                    }
                }, {
                    key: "_getBuffer",
                    value: function(e) {
                        var t = a.allocUnsafe(e),
                            n = this.head,
                            r = 1;
                        for (n.data.copy(t), e -= n.data.length; n = n.next;) {
                            var i = n.data,
                                o = e > i.length ? i.length : e;
                            if (i.copy(t, t.length - e, 0, o), 0 === (e -= o)) { o === i.length ? (++r, n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n).data = i.slice(o); break }++r
                        }
                        return this.length -= r, t
                    }
                }, { key: u, value: function(e, t) { return l(this, i({}, t, { depth: 0, customInspect: !1 })) } }]) && s(e.prototype, n), r && s(e, r), t
            }()
        }, { buffer: 26, util: 25 }],
        93: [function(e, t, n) {
            (function(l) {
                (function() {
                    "use strict";

                    function o(e, t) { a(e, t), s(e) }

                    function s(e) { e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close") }

                    function a(e, t) { e.emit("error", t) }
                    t.exports = {
                        destroy: function(e, t) {
                            var n = this,
                                r = this._readableState && this._readableState.destroyed,
                                i = this._writableState && this._writableState.destroyed;
                            return r || i ? t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, l.nextTick(a, this, e)) : l.nextTick(a, this, e)) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {!t && e ? n._writableState ? n._writableState.errorEmitted ? l.nextTick(s, n) : (n._writableState.errorEmitted = !0, l.nextTick(o, n, e)) : l.nextTick(o, n, e) : t ? (l.nextTick(s, n), t(e)) : l.nextTick(s, n) })), this
                        },
                        undestroy: function() { this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1) },
                        errorOrDestroy: function(e, t) {
                            var n = e._readableState,
                                r = e._writableState;
                            n && n.autoDestroy || r && r.autoDestroy ? e.destroy(t) : e.emit("error", t)
                        }
                    }
                }).call(this)
            }).call(this, e("_process"))
        }, { _process: 80 }],
        94: [function(e, t, n) {
            "use strict";
            var y = e("../../../errors").codes.ERR_STREAM_PREMATURE_CLOSE;

            function v() {}
            t.exports = function e(t, n, r) {
                if ("function" == typeof n) return e(t, null, n);
                var i, o;
                i = r || v, o = !1, r = function() {
                    if (!o) {
                        o = !0;
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        i.apply(this, t)
                    }
                };

                function s() { t.writable || _() }

                function a() { m = !(d = !1), f || r.call(t) }

                function l(e) { r.call(t, e) }

                function u() { var e; return d && !m ? (t._readableState && t._readableState.ended || (e = new y), r.call(t, e)) : f && !p ? (t._writableState && t._writableState.ended || (e = new y), r.call(t, e)) : void 0 }

                function c() { t.req.on("finish", _) }
                var h, d = (n = n || {}).readable || !1 !== n.readable && t.readable,
                    f = n.writable || !1 !== n.writable && t.writable,
                    p = t._writableState && t._writableState.finished,
                    _ = function() { p = !(f = !1), d || r.call(t) },
                    m = t._readableState && t._readableState.endEmitted;
                return (h = t).setHeader && "function" == typeof h.abort ? (t.on("complete", _), t.on("abort", u), t.req ? c() : t.on("request", c)) : f && !t._writableState && (t.on("end", s), t.on("close", s)), t.on("end", a), t.on("finish", _), !1 !== n.error && t.on("error", l), t.on("close", u),
                    function() { t.removeListener("complete", _), t.removeListener("abort", u), t.removeListener("request", c), t.req && t.req.removeListener("finish", _), t.removeListener("end", s), t.removeListener("close", s), t.removeListener("finish", _), t.removeListener("end", a), t.removeListener("error", l), t.removeListener("close", u) }
            }
        }, { "../../../errors": 85 }],
        95: [function(e, t, n) { t.exports = function() { throw new Error("Readable.from is not available in the browser") } }, {}],
        96: [function(l, e, t) {
            "use strict";
            var u;
            var n = l("../../../errors").codes,
                a = n.ERR_MISSING_ARGS,
                c = n.ERR_STREAM_DESTROYED;

            function h(e) { if (e) throw e }

            function d(n, e, t, r) {
                var i, o;
                i = r, o = !1;
                var s = !(r = function() { o || (o = !0, i.apply(void 0, arguments)) });
                n.on("close", function() { s = !0 }), void 0 === u && (u = l("./end-of-stream")), u(n, { readable: e, writable: t }, function(e) { return e ? r(e) : (s = !0, void r()) });
                var a = !1;
                return function(e) { var t; if (!s && !a) return a = !0, (t = n).setHeader && "function" == typeof t.abort ? n.abort() : "function" == typeof n.destroy ? n.destroy() : void r(e || new c("pipe")) }
            }

            function f(e) { e() }

            function p(e, t) { return e.pipe(t) }
            e.exports = function() { for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t]; var n, i, o = !(n = r).length || "function" != typeof n[n.length - 1] ? h : n.pop(); if (Array.isArray(r[0]) && (r = r[0]), r.length < 2) throw new a("streams"); var s = r.map(function(e, t) { var n = t < r.length - 1; return d(e, n, 0 < t, function(e) { i = i || e, e && s.forEach(f), n || (s.forEach(f), o(i)) }) }); return r.reduce(p) }
        }, { "../../../errors": 85, "./end-of-stream": 94 }],
        97: [function(e, t, n) {
            "use strict";
            var s = e("../../../errors").codes.ERR_INVALID_OPT_VALUE;
            t.exports = { getHighWaterMark: function(e, t, n, r) { var i, o = (i = r, o = n, null != (t = t).highWaterMark ? t.highWaterMark : i ? t[o] : null); if (null == o) return e.objectMode ? 16 : 16384; if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new s(r ? n : "highWaterMark", o); return Math.floor(o) } }
        }, { "../../../errors": 85 }],
        98: [function(e, t, n) { t.exports = e("events").EventEmitter }, { events: 30 }],
        99: [function(e, t, n) {
            "use strict";
            var r = e("safe-buffer").Buffer,
                i = r.isEncoding || function(e) {
                    switch ((e = "" + e) && e.toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                        case "raw":
                            return !0;
                        default:
                            return !1
                    }
                };

            function o(e) {
                var t = function(e) {
                    if (!e) return "utf8";
                    for (var t;;) switch (e) {
                        case "utf8":
                        case "utf-8":
                            return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return "utf16le";
                        case "latin1":
                        case "binary":
                            return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                            return e;
                        default:
                            if (t) return;
                            e = ("" + e).toLowerCase(), t = !0
                    }
                }(e);
                if ("string" != typeof t && (r.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
                return t || e
            }

            function s(e) {
                var t;
                switch (this.encoding = o(e), this.encoding) {
                    case "utf16le":
                        this.text = u, this.end = c, t = 4;
                        break;
                    case "utf8":
                        this.fillLast = l, t = 4;
                        break;
                    case "base64":
                        this.text = h, this.end = d, t = 3;
                        break;
                    default:
                        return this.write = f, void(this.end = p)
                }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(t)
            }

            function a(e) { return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2 }

            function l(e) {
                var t, n, r = this.lastTotal - this.lastNeed,
                    t = (t = this, 128 != (192 & (n = e)[0]) ? (t.lastNeed = 0, "�") : 1 < t.lastNeed && 1 < n.length ? 128 != (192 & n[1]) ? (t.lastNeed = 1, "�") : 2 < t.lastNeed && 2 < n.length && 128 != (192 & n[2]) ? (t.lastNeed = 2, "�") : void 0 : void 0);
                return void 0 !== t ? t : this.lastNeed <= e.length ? (e.copy(this.lastChar, r, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, r, 0, e.length), void(this.lastNeed -= e.length))
            }

            function u(e, t) { if ((e.length - t) % 2 != 0) return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1); var n = e.toString("utf16le", t); if (n) { t = n.charCodeAt(n.length - 1); if (55296 <= t && t <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1) } return n }

            function c(e) { var t = e && e.length ? this.write(e) : ""; if (this.lastNeed) { e = this.lastTotal - this.lastNeed; return t + this.lastChar.toString("utf16le", 0, e) } return t }

            function h(e, t) { var n = (e.length - t) % 3; return 0 == n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 == n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n)) }

            function d(e) { e = e && e.length ? this.write(e) : ""; return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e }

            function f(e) { return e.toString(this.encoding) }

            function p(e) { return e && e.length ? this.write(e) : "" }(n.StringDecoder = s).prototype.write = function(e) {
                if (0 === e.length) return "";
                var t, n;
                if (this.lastNeed) {
                    if (void 0 === (t = this.fillLast(e))) return "";
                    n = this.lastNeed, this.lastNeed = 0
                } else n = 0;
                return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
            }, s.prototype.end = function(e) { e = e && e.length ? this.write(e) : ""; return this.lastNeed ? e + "�" : e }, s.prototype.text = function(e, t) {
                var n = function(e, t, n) { var r = t.length - 1; if (r < n) return 0; var i = a(t[r]); if (0 <= i) return 0 < i && (e.lastNeed = i - 1), i; if (--r < n || -2 === i) return 0; if (0 <= (i = a(t[r]))) return 0 < i && (e.lastNeed = i - 2), i; if (--r < n || -2 === i) return 0; if (0 <= (i = a(t[r]))) return 0 < i && (2 === i ? i = 0 : e.lastNeed = i - 3), i; return 0 }(this, e, t);
                if (!this.lastNeed) return e.toString("utf8", t);
                this.lastTotal = n;
                n = e.length - (n - this.lastNeed);
                return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n)
            }, s.prototype.fillLast = function(e) {
                if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
            }
        }, { "safe-buffer": 100 }],
        100: [function(e, t, n) {
            var r = e("buffer"),
                i = r.Buffer;

            function o(e, t) { for (var n in e) t[n] = e[n] }

            function s(e, t, n) { return i(e, t, n) }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = r : (o(r, n), n.Buffer = s), s.prototype = Object.create(i.prototype), o(i, s), s.from = function(e, t, n) { if ("number" == typeof e) throw new TypeError("Argument must not be a number"); return i(e, t, n) }, s.alloc = function(e, t, n) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                e = i(e);
                return void 0 !== t ? "string" == typeof n ? e.fill(t, n) : e.fill(t) : e.fill(0), e
            }, s.allocUnsafe = function(e) { if ("number" != typeof e) throw new TypeError("Argument must be a number"); return i(e) }, s.allocUnsafeSlow = function(e) { if ("number" != typeof e) throw new TypeError("Argument must be a number"); return r.SlowBuffer(e) }
        }, { buffer: 26 }],
        101: [function(l, e, u) {
            (function(n, a) {
                (function() {
                    var r = l("process/browser.js").nextTick,
                        e = Function.prototype.apply,
                        i = Array.prototype.slice,
                        o = {},
                        s = 0;

                    function t(e, t) { this._id = e, this._clearFn = t }
                    u.setTimeout = function() { return new t(e.call(setTimeout, window, arguments), clearTimeout) }, u.setInterval = function() { return new t(e.call(setInterval, window, arguments), clearInterval) }, u.clearTimeout = u.clearInterval = function(e) { e.close() }, t.prototype.unref = t.prototype.ref = function() {}, t.prototype.close = function() { this._clearFn.call(window, this._id) }, u.enroll = function(e, t) { clearTimeout(e._idleTimeoutId), e._idleTimeout = t }, u.unenroll = function(e) { clearTimeout(e._idleTimeoutId), e._idleTimeout = -1 }, u._unrefActive = u.active = function(e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        0 <= t && (e._idleTimeoutId = setTimeout(function() { e._onTimeout && e._onTimeout() }, t))
                    }, u.setImmediate = "function" == typeof n ? n : function(e) {
                        var t = s++,
                            n = !(arguments.length < 2) && i.call(arguments, 1);
                        return o[t] = !0, r(function() { o[t] && (n ? e.apply(null, n) : e.call(null), u.clearImmediate(t)) }), t
                    }, u.clearImmediate = "function" == typeof a ? a : function(e) { delete o[e] }
                }).call(this)
            }).call(this, l("timers").setImmediate, l("timers").clearImmediate)
        }, { "process/browser.js": 80, timers: 101 }],
        102: [function(e, n, t) {
            (function(t) {
                (function() {
                    function r(e) {
                        try { if (!t.localStorage) return } catch (e) { return }
                        e = t.localStorage[e];
                        return null != e && "true" === String(e).toLowerCase()
                    }
                    n.exports = function(e, t) {
                        if (r("noDeprecation")) return e;
                        var n = !1;
                        return function() {
                            if (!n) {
                                if (r("throwDeprecation")) throw new Error(t);
                                r("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0
                            }
                            return e.apply(this, arguments)
                        }
                    }
                }).call(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        103: [function(e, t, n) {
            var d = arguments[3],
                f = arguments[4],
                p = arguments[5],
                _ = JSON.stringify;
            t.exports = function(e, t) {
                for (var n, r = Object.keys(p), i = 0, o = r.length; i < o; i++) {
                    var s = r[i],
                        a = p[s].exports;
                    if (a === e || a && a.default === e) { n = s; break }
                }
                if (!n) {
                    n = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
                    for (var l = {}, i = 0, o = r.length; i < o; i++) l[s = r[i]] = s;
                    f[n] = ["function(require,module,exports){" + e + "(self); }", l]
                }
                var u = Math.floor(Math.pow(16, 8) * Math.random()).toString(16),
                    c = {};
                c[n] = n, f[u] = ["function(require,module,exports){var f = require(" + _(n) + ");(f.default ? f.default : f)(self);}", c];
                var h = {};
                ! function e(t) {
                    h[t] = !0;
                    for (var n in f[t][1]) {
                        var r = f[t][1][n];
                        h[r] || e(r)
                    }
                }(u);
                c = "(" + d + ")({" + Object.keys(h).map(function(e) { return _(e) + ":[" + f[e][0] + "," + _(f[e][1]) + "]" }).join(",") + "},{},[" + _(u) + "])", u = window.URL || window.webkitURL || window.mozURL || window.msURL, c = new Blob([c], { type: "text/javascript" });
                if (t && t.bare) return c;
                u = u.createObjectURL(c), c = new Worker(u);
                return c.objectURL = u, c
            }
        }, {}],
        104: [function(e, t, n) {
            (function() {
                "use strict";
                n.stripBOM = function(e) { return "\ufeff" === e[0] ? e.substring(1) : e }
            }).call(this)
        }, {}],
        105: [function(r, e, o) {
            (function() {
                "use strict";
                var n, i, t, d, f, p = {}.hasOwnProperty;

                function e(e) { var t, n, r; for (t in this.options = {}, n = i[.2]) p.call(n, t) && (r = n[t], this.options[t] = r); for (t in e) p.call(e, t) && (r = e[t], this.options[t] = r) }
                n = r("xmlbuilder"), i = r("./defaults").defaults, d = function(e) { return "string" == typeof e && (0 <= e.indexOf("&") || 0 <= e.indexOf(">") || 0 <= e.indexOf("<")) }, f = function(e) { return "<![CDATA[" + t(e) + "]]>" }, t = function(e) { return e.replace("]]>", "]]]]><![CDATA[>") }, o.Builder = (e.prototype.buildObject = function(e) {
                    var l, t, u, c = this.options.attrkey,
                        h = this.options.charkey;
                    return 1 === Object.keys(e).length && this.options.rootName === i[.2].rootName ? e = e[t = Object.keys(e)[0]] : t = this.options.rootName, u = this, l = function(e, t) {
                        var n, r, i, o, s, a;
                        if ("object" != typeof t) u.options.cdata && d(t) ? e.raw(f(t)) : e.txt(t);
                        else if (Array.isArray(t)) {
                            for (o in t)
                                if (p.call(t, o))
                                    for (s in r = t[o]) i = r[s], e = l(e.ele(s), i).up()
                        } else
                            for (s in t)
                                if (p.call(t, s))
                                    if (r = t[s], s === c) {
                                        if ("object" == typeof r)
                                            for (n in r) a = r[n], e = e.att(n, a)
                                    } else if (s === h) e = u.options.cdata && d(r) ? e.raw(f(r)) : e.txt(r);
                        else if (Array.isArray(r))
                            for (o in r) p.call(r, o) && (e = ("string" == typeof(i = r[o]) ? u.options.cdata && d(i) ? e.ele(s).raw(f(i)) : e.ele(s, i) : l(e.ele(s), i)).up());
                        else e = "object" == typeof r ? l(e.ele(s), r).up() : "string" == typeof r && u.options.cdata && d(r) ? e.ele(s).raw(f(r)).up() : (null == r && (r = ""), e.ele(s, r.toString()).up());
                        return e
                    }, t = n.create(t, this.options.xmldec, this.options.doctype, { headless: this.options.headless, allowSurrogateChars: this.options.allowSurrogateChars }), l(t, e).end(this.options.renderOpts)
                }, e)
            }).call(this)
        }, { "./defaults": 106, xmlbuilder: 142 }],
        106: [function(e, t, n) {
            (function() { n.defaults = { .1: { explicitCharkey: !1, trim: !0, normalize: !0, normalizeTags: !1, attrkey: "@", charkey: "#", explicitArray: !1, ignoreAttrs: !1, mergeAttrs: !1, explicitRoot: !1, validator: null, xmlns: !1, explicitChildren: !1, childkey: "@@", charsAsChildren: !1, includeWhiteChars: !1, async: !1, strict: !0, attrNameProcessors: null, attrValueProcessors: null, tagNameProcessors: null, valueProcessors: null, emptyTag: "" }, .2: { explicitCharkey: !1, trim: !1, normalize: !1, normalizeTags: !1, attrkey: "$", charkey: "_", explicitArray: !0, ignoreAttrs: !1, mergeAttrs: !1, explicitRoot: !0, validator: null, xmlns: !1, explicitChildren: !1, preserveChildrenOrder: !1, childkey: "$$", charsAsChildren: !1, includeWhiteChars: !1, async: !1, strict: !0, attrNameProcessors: null, attrValueProcessors: null, tagNameProcessors: null, valueProcessors: null, rootName: "root", xmldec: { version: "1.0", encoding: "UTF-8", standalone: !0 }, doctype: null, renderOpts: { pretty: !0, indent: "  ", newline: "\n" }, headless: !1, chunkSize: 1e4, emptyTag: "", cdata: !1 } } }).call(this)
        }, {}],
        107: [function(n, e, u) {
            (function() {
                "use strict";

                function i(e, t) { return function() { return e.apply(t, arguments) } }
                var r, o, e, d, f, s, l, a, p = {}.hasOwnProperty;

                function t(e) {
                    var t, n, r;
                    if (this.parseStringPromise = i(this.parseStringPromise, this), this.parseString = i(this.parseString, this), this.reset = i(this.reset, this), this.assignOrPush = i(this.assignOrPush, this), this.processAsync = i(this.processAsync, this), !(this instanceof u.Parser)) return new u.Parser(e);
                    for (t in this.options = {}, n = o[.2]) p.call(n, t) && (r = n[t], this.options[t] = r);
                    for (t in e) p.call(e, t) && (r = e[t], this.options[t] = r);
                    this.options.xmlns && (this.options.xmlnskey = this.options.attrkey + "ns"), this.options.normalizeTags && (this.options.tagNameProcessors || (this.options.tagNameProcessors = []), this.options.tagNameProcessors.unshift(s.normalize)), this.reset()
                }
                l = n("sax"), e = n("events"), r = n("./bom"), s = n("./processors"), a = n("timers").setImmediate, o = n("./defaults").defaults, d = function(e) { return "object" == typeof e && null != e && 0 === Object.keys(e).length }, f = function(e, t, n) { for (var r = 0, i = e.length; r < i; r++) t = (0, e[r])(t, n); return t }, u.Parser = (function(e, t) {
                    for (var n in t) p.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(t, e), t.prototype.processAsync = function() { var e, t; try { return this.remaining.length <= this.options.chunkSize ? (e = this.remaining, this.remaining = "", this.saxParser = this.saxParser.write(e), this.saxParser.close()) : (e = this.remaining.substr(0, this.options.chunkSize), this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length), this.saxParser = this.saxParser.write(e), a(this.processAsync)) } catch (e) { if (t = e, !this.saxParser.errThrown) return this.saxParser.errThrown = !0, this.emit(t) } }, t.prototype.assignOrPush = function(e, t, n) { return t in e ? (e[t] instanceof Array || (e[t] = [e[t]]), e[t].push(n)) : this.options.explicitArray ? e[t] = [n] : e[t] = n }, t.prototype.reset = function() {
                    var s, u, t, c, n, e, a, h, r;
                    return this.removeAllListeners(), this.saxParser = l.parser(this.options.strict, { trim: !1, normalize: !1, xmlns: this.options.xmlns }), this.saxParser.errThrown = !1, this.saxParser.onerror = (n = this, function(e) { if (n.saxParser.resume(), !n.saxParser.errThrown) return n.saxParser.errThrown = !0, n.emit("error", e) }), this.saxParser.onend = (e = this, function() { if (!e.saxParser.ended) return e.saxParser.ended = !0, e.emit("end", e.resultObject) }), this.saxParser.ended = !1, this.EXPLICIT_CHARKEY = this.options.explicitCharkey, this.resultObject = null, c = [], s = this.options.attrkey, u = this.options.charkey, this.saxParser.onopentag = (a = this, function(e) {
                        var t, n, r, i, o = {};
                        if (o[u] = "", !a.options.ignoreAttrs)
                            for (t in i = e.attributes) p.call(i, t) && (s in o || a.options.mergeAttrs || (o[s] = {}), n = a.options.attrValueProcessors ? f(a.options.attrValueProcessors, e.attributes[t], t) : e.attributes[t], r = a.options.attrNameProcessors ? f(a.options.attrNameProcessors, t) : t, a.options.mergeAttrs ? a.assignOrPush(o, r, n) : o[s][r] = n);
                        return o["#name"] = a.options.tagNameProcessors ? f(a.options.tagNameProcessors, e.name) : e.name, a.options.xmlns && (o[a.options.xmlnskey] = { uri: e.uri, local: e.local }), c.push(o)
                    }), this.saxParser.onclosetag = (h = this, function() {
                        var e, t, r, n, i, o, s, a = c.pop(),
                            l = a["#name"];
                        if (h.options.explicitChildren && h.options.preserveChildrenOrder || delete a["#name"], !0 === a.cdata && (e = a.cdata, delete a.cdata), o = c[c.length - 1], a[u].match(/^\s*$/) && !e ? (i = a[u], delete a[u]) : (h.options.trim && (a[u] = a[u].trim()), h.options.normalize && (a[u] = a[u].replace(/\s{2,}/g, " ").trim()), a[u] = h.options.valueProcessors ? f(h.options.valueProcessors, a[u], l) : a[u], 1 === Object.keys(a).length && u in a && !h.EXPLICIT_CHARKEY && (a = a[u])), d(a) && (a = "" !== h.options.emptyTag ? h.options.emptyTag : i), null != h.options.validator && (s = "/" + function() { for (var e = [], t = 0, n = c.length; t < n; t++) r = c[t], e.push(r["#name"]); return e }().concat(l).join("/"), function() { try { a = h.options.validator(s, o && o[l], a) } catch (e) { return h.emit("error", e) } }()), h.options.explicitChildren && !h.options.mergeAttrs && "object" == typeof a)
                            if (h.options.preserveChildrenOrder) {
                                if (o) {
                                    for (t in o[h.options.childkey] = o[h.options.childkey] || [], n = {}, a) p.call(a, t) && (n[t] = a[t]);
                                    o[h.options.childkey].push(n), delete a["#name"], 1 === Object.keys(a).length && u in a && !h.EXPLICIT_CHARKEY && (a = a[u])
                                }
                            } else r = {}, h.options.attrkey in a && (r[h.options.attrkey] = a[h.options.attrkey], delete a[h.options.attrkey]), !h.options.charsAsChildren && h.options.charkey in a && (r[h.options.charkey] = a[h.options.charkey], delete a[h.options.charkey]), 0 < Object.getOwnPropertyNames(a).length && (r[h.options.childkey] = a), a = r;
                        return 0 < c.length ? h.assignOrPush(o, l, a) : (h.options.explicitRoot && (i = a, (a = {})[l] = i), h.resultObject = a, h.saxParser.ended = !0, h.emit("end", h.resultObject))
                    }), t = function(e) { var t, n = c[c.length - 1]; if (n) return n[u] += e, r.options.explicitChildren && r.options.preserveChildrenOrder && r.options.charsAsChildren && (r.options.includeWhiteChars || "" !== e.replace(/\\n/g, "").trim()) && (n[r.options.childkey] = n[r.options.childkey] || [], (t = { "#name": "__text__" })[u] = e, r.options.normalize && (t[u] = t[u].replace(/\s{2,}/g, " ").trim()), n[r.options.childkey].push(t)), n }, (r = this).saxParser.ontext = t, this.saxParser.oncdata = function(e) { e = t(e); if (e) return e.cdata = !0 }
                }, t.prototype.parseString = function(e, t) {
                    var n;
                    null != t && "function" == typeof t && (this.on("end", function(e) { return this.reset(), t(null, e) }), this.on("error", function(e) { return this.reset(), t(e) }));
                    try { return "" === (e = e.toString()).trim() ? (this.emit("end", null), !0) : (e = r.stripBOM(e), this.options.async ? (this.remaining = e, a(this.processAsync), this.saxParser) : this.saxParser.write(e).close()) } catch (e) { if (n = e, !this.saxParser.errThrown && !this.saxParser.ended) return this.emit("error", n), this.saxParser.errThrown = !0; if (this.saxParser.ended) throw n }
                }, t.prototype.parseStringPromise = function(e) { return new Promise((t = this, function(n, r) { return t.parseString(e, function(e, t) { return e ? r(e) : n(t) }) })); var t }, t), u.parseString = function(e, t, n) { var r, i; return null != n ? ("function" == typeof n && (r = n), "object" == typeof t && (i = t)) : ("function" == typeof t && (r = t), i = {}), new u.Parser(i).parseString(e, r) }, u.parseStringPromise = function(e, t) { var n; return "object" == typeof t && (n = t), new u.Parser(n).parseStringPromise(e) }
            }).call(this)
        }, { "./bom": 104, "./defaults": 106, "./processors": 108, events: 30, sax: 82, timers: 101 }],
        108: [function(e, t, n) {
            (function() {
                "use strict";
                var t = new RegExp(/(?!xmlns)^.*:/);
                n.normalize = function(e) { return e.toLowerCase() }, n.firstCharLowerCase = function(e) { return e.charAt(0).toLowerCase() + e.slice(1) }, n.stripPrefix = function(e) { return e.replace(t, "") }, n.parseNumbers = function(e) { return isNaN(e) || (e = e % 1 == 0 ? parseInt(e, 10) : parseFloat(e)), e }, n.parseBooleans = function(e) { return /^(?:true|false)$/i.test(e) && (e = "true" === e.toLowerCase()), e }
            }).call(this)
        }, {}],
        109: [function(s, e, a) {
            (function() {
                "use strict";
                var e, t, n, r, i = {}.hasOwnProperty;

                function o(e) { this.message = e }
                t = s("./defaults"), e = s("./builder"), n = s("./parser"), r = s("./processors"), a.defaults = t.defaults, a.processors = r, a.ValidationError = (function(e, t) {
                    for (var n in t) i.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(o, Error), o), a.Builder = e.Builder, a.Parser = n.Parser, a.parseString = n.parseString, a.parseStringPromise = n.parseStringPromise
            }).call(this)
        }, { "./builder": 105, "./defaults": 106, "./parser": 107, "./processors": 108 }],
        110: [function(e, t, n) {
            (function() { t.exports = { Disconnected: 1, Preceding: 2, Following: 4, Contains: 8, ContainedBy: 16, ImplementationSpecific: 32 } }).call(this)
        }, {}],
        111: [function(e, t, n) {
            (function() { t.exports = { Element: 1, Attribute: 2, Text: 3, CData: 4, EntityReference: 5, EntityDeclaration: 6, ProcessingInstruction: 7, Comment: 8, Document: 9, DocType: 10, DocumentFragment: 11, NotationDeclaration: 12, Declaration: 201, Raw: 202, AttributeDeclaration: 203, ElementDeclaration: 204, Dummy: 205 } }).call(this)
        }, {}],
        112: [function(e, u, t) {
            (function() {
                var s = [].slice,
                    a = {}.hasOwnProperty,
                    e = function() {
                        var e, t, n, r, i = arguments[0],
                            o = 2 <= arguments.length ? s.call(arguments, 1) : [];
                        if (l(Object.assign)) Object.assign.apply(null, arguments);
                        else
                            for (e = 0, n = o.length; e < n; e++)
                                if (null != (r = o[e]))
                                    for (t in r) a.call(r, t) && (i[t] = r[t]); return i
                    },
                    l = function(e) { return !!e && "[object Function]" === Object.prototype.toString.call(e) },
                    r = function(e) { return !!e && ("function" == (e = typeof e) || "object" == e) },
                    n = function(e) { return l(Array.isArray) ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e) },
                    t = function(e) {
                        if (n(e)) return !e.length;
                        for (var t in e)
                            if (a.call(e, t)) return !1;
                        return !0
                    },
                    i = function(e) { var t, n; return r(e) && (n = Object.getPrototypeOf(e)) && (t = n.constructor) && "function" == typeof t && t instanceof t && Function.prototype.toString.call(t) === Function.prototype.toString.call(Object) },
                    o = function(e) { return l(e.valueOf) ? e.valueOf() : e };
                u.exports.assign = e, u.exports.isFunction = l, u.exports.isObject = r, u.exports.isArray = n, u.exports.isEmpty = t, u.exports.isPlainObject = i, u.exports.getValue = o
            }).call(this)
        }, {}],
        113: [function(e, t, n) {
            (function() { t.exports = { None: 0, OpenTag: 1, InsideTag: 2, CloseTag: 3 } }).call(this)
        }, {}],
        114: [function(t, n, e) {
            (function() {
                var r;

                function e(e, t, n) {
                    if (this.parent = e, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), null == t) throw new Error("Missing attribute name. " + this.debugInfo(t));
                    this.name = this.stringify.name(t), this.value = this.stringify.attValue(n), this.type = r.Attribute, this.isId = !1, this.schemaTypeInfo = null
                }
                r = t("./NodeType"), t("./XMLNode"), n.exports = (Object.defineProperty(e.prototype, "nodeType", { get: function() { return this.type } }), Object.defineProperty(e.prototype, "ownerElement", { get: function() { return this.parent } }), Object.defineProperty(e.prototype, "textContent", { get: function() { return this.value }, set: function(e) { return this.value = e || "" } }), Object.defineProperty(e.prototype, "namespaceURI", { get: function() { return "" } }), Object.defineProperty(e.prototype, "prefix", { get: function() { return "" } }), Object.defineProperty(e.prototype, "localName", { get: function() { return this.name } }), Object.defineProperty(e.prototype, "specified", { get: function() { return !0 } }), e.prototype.clone = function() { return Object.create(this) }, e.prototype.toString = function(e) { return this.options.writer.attribute(this, this.options.writer.filterOptions(e)) }, e.prototype.debugInfo = function(e) { return null == (e = e || this.name) ? "parent: <" + this.parent.name + ">" : "attribute: {" + e + "}, parent: <" + this.parent.name + ">" }, e.prototype.isEqualNode = function(e) { return e.namespaceURI === this.namespaceURI && (e.prefix === this.prefix && (e.localName === this.localName && e.value === this.value)) }, e)
            }).call(this)
        }, { "./NodeType": 111, "./XMLNode": 133 }],
        115: [function(t, o, e) {
            (function() {
                var n, e, i = {}.hasOwnProperty;

                function r(e, t) {
                    if (r.__super__.constructor.call(this, e), null == t) throw new Error("Missing CDATA text. " + this.debugInfo());
                    this.name = "#cdata-section", this.type = n.CData, this.value = this.stringify.cdata(t)
                }
                n = t("./NodeType"), e = t("./XMLCharacterData"), o.exports = (function(e, t) {
                    for (var n in t) i.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(r, e), r.prototype.clone = function() { return Object.create(this) }, r.prototype.toString = function(e) { return this.options.writer.cdata(this, this.options.writer.filterOptions(e)) }, r)
            }).call(this)
        }, { "./NodeType": 111, "./XMLCharacterData": 116 }],
        116: [function(n, r, e) {
            (function() {
                var e, i = {}.hasOwnProperty;

                function t(e) { t.__super__.constructor.call(this, e), this.value = "" }
                e = n("./XMLNode"), r.exports = (function(e, t) {
                    for (var n in t) i.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(t, e), Object.defineProperty(t.prototype, "data", { get: function() { return this.value }, set: function(e) { return this.value = e || "" } }), Object.defineProperty(t.prototype, "length", { get: function() { return this.value.length } }), Object.defineProperty(t.prototype, "textContent", { get: function() { return this.value }, set: function(e) { return this.value = e || "" } }), t.prototype.clone = function() { return Object.create(this) }, t.prototype.substringData = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, t.prototype.appendData = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, t.prototype.insertData = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, t.prototype.deleteData = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, t.prototype.replaceData = function(e, t, n) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, t.prototype.isEqualNode = function(e) { return !!t.__super__.isEqualNode.apply(this, arguments).isEqualNode(e) && e.data === this.data }, t)
            }).call(this)
        }, { "./XMLNode": 133 }],
        117: [function(t, o, e) {
            (function() {
                var n, e, i = {}.hasOwnProperty;

                function r(e, t) {
                    if (r.__super__.constructor.call(this, e), null == t) throw new Error("Missing comment text. " + this.debugInfo());
                    this.name = "#comment", this.type = n.Comment, this.value = this.stringify.comment(t)
                }
                n = t("./NodeType"), e = t("./XMLCharacterData"), o.exports = (function(e, t) {
                    for (var n in t) i.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(r, e), r.prototype.clone = function() { return Object.create(this) }, r.prototype.toString = function(e) { return this.options.writer.comment(this, this.options.writer.filterOptions(e)) }, r)
            }).call(this)
        }, { "./NodeType": 111, "./XMLCharacterData": 116 }],
        118: [function(r, i, e) {
            (function() {
                var e, t;

                function n() { this.defaultParams = { "canonical-form": !1, "cdata-sections": !1, comments: !1, "datatype-normalization": !1, "element-content-whitespace": !0, entities: !0, "error-handler": new e, infoset: !0, "validate-if-schema": !1, namespaces: !0, "namespace-declarations": !0, "normalize-characters": !1, "schema-location": "", "schema-type": "", "split-cdata-sections": !0, validate: !1, "well-formed": !0 }, this.params = Object.create(this.defaultParams) }
                e = r("./XMLDOMErrorHandler"), t = r("./XMLDOMStringList"), i.exports = (Object.defineProperty(n.prototype, "parameterNames", { get: function() { return new t(Object.keys(this.defaultParams)) } }), n.prototype.getParameter = function(e) { return this.params.hasOwnProperty(e) ? this.params[e] : null }, n.prototype.canSetParameter = function(e, t) { return !0 }, n.prototype.setParameter = function(e, t) { return null != t ? this.params[e] = t : delete this.params[e] }, n)
            }).call(this)
        }, { "./XMLDOMErrorHandler": 119, "./XMLDOMStringList": 121 }],
        119: [function(e, t, n) {
            (function() {
                function e() {}
                t.exports = (e.prototype.handleError = function(e) { throw new Error(e) }, e)
            }).call(this)
        }, {}],
        120: [function(e, t, n) {
            (function() {
                function e() {}
                t.exports = (e.prototype.hasFeature = function(e, t) { return !0 }, e.prototype.createDocumentType = function(e, t, n) { throw new Error("This DOM method is not implemented.") }, e.prototype.createDocument = function(e, t, n) { throw new Error("This DOM method is not implemented.") }, e.prototype.createHTMLDocument = function(e) { throw new Error("This DOM method is not implemented.") }, e.prototype.getFeature = function(e, t) { throw new Error("This DOM method is not implemented.") }, e)
            }).call(this)
        }, {}],
        121: [function(e, t, n) {
            (function() {
                function e(e) { this.arr = e || [] }
                t.exports = (Object.defineProperty(e.prototype, "length", { get: function() { return this.arr.length } }), e.prototype.item = function(e) { return this.arr[e] || null }, e.prototype.contains = function(e) { return -1 !== this.arr.indexOf(e) }, e)
            }).call(this)
        }, {}],
        122: [function(t, n, e) {
            (function() {
                var s, e, i = {}.hasOwnProperty;

                function a(e, t, n, r, i, o) {
                    if (a.__super__.constructor.call(this, e), null == t) throw new Error("Missing DTD element name. " + this.debugInfo());
                    if (null == n) throw new Error("Missing DTD attribute name. " + this.debugInfo(t));
                    if (!r) throw new Error("Missing DTD attribute type. " + this.debugInfo(t));
                    if (!i) throw new Error("Missing DTD attribute default. " + this.debugInfo(t));
                    if (0 !== i.indexOf("#") && (i = "#" + i), !i.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(t));
                    if (o && !i.match(/^(#FIXED|#DEFAULT)$/)) throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(t));
                    this.elementName = this.stringify.name(t), this.type = s.AttributeDeclaration, this.attributeName = this.stringify.name(n), this.attributeType = this.stringify.dtdAttType(r), o && (this.defaultValue = this.stringify.dtdAttDefault(o)), this.defaultValueType = i
                }
                e = t("./XMLNode"), s = t("./NodeType"), n.exports = (function(e, t) {
                    for (var n in t) i.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(a, e), a.prototype.toString = function(e) { return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(e)) }, a)
            }).call(this)
        }, { "./NodeType": 111, "./XMLNode": 133 }],
        123: [function(t, n, e) {
            (function() {
                var r, e, i = {}.hasOwnProperty;

                function o(e, t, n) {
                    if (o.__super__.constructor.call(this, e), null == t) throw new Error("Missing DTD element name. " + this.debugInfo());
                    n = n || "(#PCDATA)", Array.isArray(n) && (n = "(" + n.join(",") + ")"), this.name = this.stringify.name(t), this.type = r.ElementDeclaration, this.value = this.stringify.dtdElementValue(n)
                }
                e = t("./XMLNode"), r = t("./NodeType"), n.exports = (function(e, t) {
                    for (var n in t) i.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(o, e), o.prototype.toString = function(e) { return this.options.writer.dtdElement(this, this.options.writer.filterOptions(e)) }, o)
            }).call(this)
        }, { "./NodeType": 111, "./XMLNode": 133 }],
        124: [function(t, n, e) {
            (function() {
                var i, e, o, s = {}.hasOwnProperty;

                function a(e, t, n, r) { if (a.__super__.constructor.call(this, e), null == n) throw new Error("Missing DTD entity name. " + this.debugInfo(n)); if (null == r) throw new Error("Missing DTD entity value. " + this.debugInfo(n)); if (this.pe = !!t, this.name = this.stringify.name(n), this.type = i.EntityDeclaration, o(r)) { if (!r.pubID && !r.sysID) throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(n)); if (r.pubID && !r.sysID) throw new Error("System identifier is required for a public external entity. " + this.debugInfo(n)); if (this.internal = !1, null != r.pubID && (this.pubID = this.stringify.dtdPubID(r.pubID)), null != r.sysID && (this.sysID = this.stringify.dtdSysID(r.sysID)), null != r.nData && (this.nData = this.stringify.dtdNData(r.nData)), this.pe && this.nData) throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(n)) } else this.value = this.stringify.dtdEntityValue(r), this.internal = !0 }
                o = t("./Utility").isObject, e = t("./XMLNode"), i = t("./NodeType"), n.exports = (function(e, t) {
                    for (var n in t) s.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(a, e), Object.defineProperty(a.prototype, "publicId", { get: function() { return this.pubID } }), Object.defineProperty(a.prototype, "systemId", { get: function() { return this.sysID } }), Object.defineProperty(a.prototype, "notationName", { get: function() { return this.nData || null } }), Object.defineProperty(a.prototype, "inputEncoding", { get: function() { return null } }), Object.defineProperty(a.prototype, "xmlEncoding", { get: function() { return null } }), Object.defineProperty(a.prototype, "xmlVersion", { get: function() { return null } }), a.prototype.toString = function(e) { return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(e)) }, a)
            }).call(this)
        }, { "./NodeType": 111, "./Utility": 112, "./XMLNode": 133 }],
        125: [function(t, n, e) {
            (function() {
                var r, e, i = {}.hasOwnProperty;

                function o(e, t, n) {
                    if (o.__super__.constructor.call(this, e), null == t) throw new Error("Missing DTD notation name. " + this.debugInfo(t));
                    if (!n.pubID && !n.sysID) throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(t));
                    this.name = this.stringify.name(t), this.type = r.NotationDeclaration, null != n.pubID && (this.pubID = this.stringify.dtdPubID(n.pubID)), null != n.sysID && (this.sysID = this.stringify.dtdSysID(n.sysID))
                }
                e = t("./XMLNode"), r = t("./NodeType"), n.exports = (function(e, t) {
                    for (var n in t) i.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(o, e), Object.defineProperty(o.prototype, "publicId", { get: function() { return this.pubID } }), Object.defineProperty(o.prototype, "systemId", { get: function() { return this.sysID } }), o.prototype.toString = function(e) { return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(e)) }, o)
            }).call(this)
        }, { "./NodeType": 111, "./XMLNode": 133 }],
        126: [function(t, n, e) {
            (function() {
                var i, e, o, s = {}.hasOwnProperty;

                function a(e, t, n, r) { a.__super__.constructor.call(this, e), o(t) && (t = (e = t).version, n = e.encoding, r = e.standalone), t = t || "1.0", this.type = i.Declaration, this.version = this.stringify.xmlVersion(t), null != n && (this.encoding = this.stringify.xmlEncoding(n)), null != r && (this.standalone = this.stringify.xmlStandalone(r)) }
                o = t("./Utility").isObject, e = t("./XMLNode"), i = t("./NodeType"), n.exports = (function(e, t) {
                    for (var n in t) s.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(a, e), a.prototype.toString = function(e) { return this.options.writer.declaration(this, this.options.writer.filterOptions(e)) }, a)
            }).call(this)
        }, { "./NodeType": 111, "./Utility": 112, "./XMLNode": 133 }],
        127: [function(t, h, e) {
            (function() {
                var l, o, n, r, i, s, e, u, a = {}.hasOwnProperty;

                function c(e, t, n) {
                    var r, i, o, s, a;
                    if (c.__super__.constructor.call(this, e), this.type = l.DocType, e.children)
                        for (i = 0, o = (s = e.children).length; i < o; i++)
                            if ((r = s[i]).type === l.Element) { this.name = r.name; break }
                    this.documentObject = e, u(t) && (t = (a = t).pubID, n = a.sysID), null == n && (n = (a = [t, n])[0], t = a[1]), null != t && (this.pubID = this.stringify.dtdPubID(t)), null != n && (this.sysID = this.stringify.dtdSysID(n))
                }
                u = t("./Utility").isObject, e = t("./XMLNode"), l = t("./NodeType"), o = t("./XMLDTDAttList"), r = t("./XMLDTDEntity"), n = t("./XMLDTDElement"), i = t("./XMLDTDNotation"), s = t("./XMLNamedNodeMap"), h.exports = (function(e, t) {
                    for (var n in t) a.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(c, e), Object.defineProperty(c.prototype, "entities", { get: function() { for (var e, t = {}, n = this.children, r = 0, i = n.length; r < i; r++)(e = n[r]).type !== l.EntityDeclaration || e.pe || (t[e.name] = e); return new s(t) } }), Object.defineProperty(c.prototype, "notations", { get: function() { for (var e, t = {}, n = this.children, r = 0, i = n.length; r < i; r++)(e = n[r]).type === l.NotationDeclaration && (t[e.name] = e); return new s(t) } }), Object.defineProperty(c.prototype, "publicId", { get: function() { return this.pubID } }), Object.defineProperty(c.prototype, "systemId", { get: function() { return this.sysID } }), Object.defineProperty(c.prototype, "internalSubset", { get: function() { throw new Error("This DOM method is not implemented." + this.debugInfo()) } }), c.prototype.element = function(e, t) { t = new n(this, e, t); return this.children.push(t), this }, c.prototype.attList = function(e, t, n, r, i) { i = new o(this, e, t, n, r, i); return this.children.push(i), this }, c.prototype.entity = function(e, t) { t = new r(this, !1, e, t); return this.children.push(t), this }, c.prototype.pEntity = function(e, t) { t = new r(this, !0, e, t); return this.children.push(t), this }, c.prototype.notation = function(e, t) { t = new i(this, e, t); return this.children.push(t), this }, c.prototype.toString = function(e) { return this.options.writer.docType(this, this.options.writer.filterOptions(e)) }, c.prototype.ele = function(e, t) { return this.element(e, t) }, c.prototype.att = function(e, t, n, r, i) { return this.attList(e, t, n, r, i) }, c.prototype.ent = function(e, t) { return this.entity(e, t) }, c.prototype.pent = function(e, t) { return this.pEntity(e, t) }, c.prototype.not = function(e, t) { return this.notation(e, t) }, c.prototype.up = function() { return this.root() || this.documentObject }, c.prototype.isEqualNode = function(e) { return !!c.__super__.isEqualNode.apply(this, arguments).isEqualNode(e) && (e.name === this.name && (e.publicId === this.publicId && e.systemId === this.systemId)) }, c)
            }).call(this)
        }, { "./NodeType": 111, "./Utility": 112, "./XMLDTDAttList": 122, "./XMLDTDElement": 123, "./XMLDTDEntity": 124, "./XMLDTDNotation": 125, "./XMLNamedNodeMap": 132, "./XMLNode": 133 }],
        128: [function(u, c, e) {
            (function() {
                var i, t, e, n, r, o, s, a = {}.hasOwnProperty;

                function l(e) { l.__super__.constructor.call(this, null), this.name = "#document", this.type = i.Document, this.documentURI = null, this.domConfig = new t, (e = e || {}).writer || (e.writer = new r), this.options = e, this.stringify = new o(e) }
                s = u("./Utility").isPlainObject, e = u("./XMLDOMImplementation"), t = u("./XMLDOMConfiguration"), n = u("./XMLNode"), i = u("./NodeType"), o = u("./XMLStringifier"), r = u("./XMLStringWriter"), c.exports = (function(e, t) {
                    for (var n in t) a.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(l, n), Object.defineProperty(l.prototype, "implementation", { value: new e }), Object.defineProperty(l.prototype, "doctype", {
                    get: function() {
                        for (var e, t = this.children, n = 0, r = t.length; n < r; n++)
                            if ((e = t[n]).type === i.DocType) return e;
                        return null
                    }
                }), Object.defineProperty(l.prototype, "documentElement", { get: function() { return this.rootObject || null } }), Object.defineProperty(l.prototype, "inputEncoding", { get: function() { return null } }), Object.defineProperty(l.prototype, "strictErrorChecking", { get: function() { return !1 } }), Object.defineProperty(l.prototype, "xmlEncoding", { get: function() { return 0 !== this.children.length && this.children[0].type === i.Declaration ? this.children[0].encoding : null } }), Object.defineProperty(l.prototype, "xmlStandalone", { get: function() { return 0 !== this.children.length && this.children[0].type === i.Declaration && "yes" === this.children[0].standalone } }), Object.defineProperty(l.prototype, "xmlVersion", { get: function() { return 0 !== this.children.length && this.children[0].type === i.Declaration ? this.children[0].version : "1.0" } }), Object.defineProperty(l.prototype, "URL", { get: function() { return this.documentURI } }), Object.defineProperty(l.prototype, "origin", { get: function() { return null } }), Object.defineProperty(l.prototype, "compatMode", { get: function() { return null } }), Object.defineProperty(l.prototype, "characterSet", { get: function() { return null } }), Object.defineProperty(l.prototype, "contentType", { get: function() { return null } }), l.prototype.end = function(e) { var t = {}; return e ? s(e) && (t = e, e = this.options.writer) : e = this.options.writer, e.document(this, e.filterOptions(t)) }, l.prototype.toString = function(e) { return this.options.writer.document(this, this.options.writer.filterOptions(e)) }, l.prototype.createElement = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.createDocumentFragment = function() { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.createTextNode = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.createComment = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.createCDATASection = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.createProcessingInstruction = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.createAttribute = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.createEntityReference = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.getElementsByTagName = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.importNode = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.createElementNS = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.createAttributeNS = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.getElementsByTagNameNS = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.getElementById = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.adoptNode = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.normalizeDocument = function() { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.renameNode = function(e, t, n) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.getElementsByClassName = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.createEvent = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.createRange = function() { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.createNodeIterator = function(e, t, n) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l.prototype.createTreeWalker = function(e, t, n) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, l)
            }).call(this)
        }, { "./NodeType": 111, "./Utility": 112, "./XMLDOMConfiguration": 118, "./XMLDOMImplementation": 120, "./XMLNode": 133, "./XMLStringWriter": 138, "./XMLStringifier": 139 }],
        129: [function(w, k, e) {
            (function() {
                var u, o, i, t, n, s, r, a, l, c, h, d, f, p, _, m, y, v, g, b, E, S, e, T = {}.hasOwnProperty;

                function A(e, t, n) {
                    var r;
                    this.name = "?xml", this.type = u.Document, r = {}, (e = e || {}).writer ? S(e.writer) && (r = e.writer, e.writer = new m) : e.writer = new m, this.options = e, this.writer = e.writer, this.writerOptions = this.writer.filterOptions(r), this.stringify = new y(e), this.onDataCallback = t || function() {}, this.onEndCallback = n || function() {}, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null
                }
                e = w("./Utility"), E = e.isObject, b = e.isFunction, S = e.isPlainObject, g = e.getValue, u = w("./NodeType"), d = w("./XMLDocument"), f = w("./XMLElement"), t = w("./XMLCData"), n = w("./XMLComment"), _ = w("./XMLRaw"), v = w("./XMLText"), p = w("./XMLProcessingInstruction"), c = w("./XMLDeclaration"), h = w("./XMLDocType"), s = w("./XMLDTDAttList"), a = w("./XMLDTDEntity"), r = w("./XMLDTDElement"), l = w("./XMLDTDNotation"), i = w("./XMLAttribute"), y = w("./XMLStringifier"), m = w("./XMLStringWriter"), o = w("./WriterState"), k.exports = (A.prototype.createChildNode = function(e) {
                    var t, n, r, i, o, s, a, l;
                    switch (e.type) {
                        case u.CData:
                            this.cdata(e.value);
                            break;
                        case u.Comment:
                            this.comment(e.value);
                            break;
                        case u.Element:
                            for (n in r = {}, a = e.attribs) T.call(a, n) && (t = a[n], r[n] = t.value);
                            this.node(e.name, r);
                            break;
                        case u.Dummy:
                            this.dummy();
                            break;
                        case u.Raw:
                            this.raw(e.value);
                            break;
                        case u.Text:
                            this.text(e.value);
                            break;
                        case u.ProcessingInstruction:
                            this.instruction(e.target, e.value);
                            break;
                        default:
                            throw new Error("This XML node type is not supported in a JS object: " + e.constructor.name)
                    }
                    for (o = 0, s = (l = e.children).length; o < s; o++) i = l[o], this.createChildNode(i), i.type === u.Element && this.up();
                    return this
                }, A.prototype.dummy = function() { return this }, A.prototype.node = function(e, t, n) { var r; if (null == e) throw new Error("Missing node name."); if (this.root && -1 === this.currentLevel) throw new Error("Document can only have one root node. " + this.debugInfo(e)); return this.openCurrent(), e = g(e), null == t && (t = {}), t = g(t), E(t) || (n = (r = [t, n])[0], t = r[1]), this.currentNode = new f(this, e, t), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, null != n && this.text(n), this }, A.prototype.element = function(e, t, n) {
                    var r, i, o, s, a, l;
                    if (this.currentNode && this.currentNode.type === u.DocType) this.dtdElement.apply(this, arguments);
                    else if (Array.isArray(e) || E(e) || b(e))
                        for (s = this.options.noValidation, this.options.noValidation = !0, (l = new d(this.options).element("TEMP_ROOT")).element(e), this.options.noValidation = s, i = 0, o = (a = l.children).length; i < o; i++) r = a[i], this.createChildNode(r), r.type === u.Element && this.up();
                    else this.node(e, t, n);
                    return this
                }, A.prototype.attribute = function(e, t) {
                    var n, r;
                    if (!this.currentNode || this.currentNode.children) throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(e));
                    if (null != e && (e = g(e)), E(e))
                        for (n in e) T.call(e, n) && (r = e[n], this.attribute(n, r));
                    else b(t) && (t = t.apply()), this.options.keepNullAttributes && null == t ? this.currentNode.attribs[e] = new i(this, e, "") : null != t && (this.currentNode.attribs[e] = new i(this, e, t));
                    return this
                }, A.prototype.text = function(e) { return this.openCurrent(), e = new v(this, e), this.onData(this.writer.text(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this }, A.prototype.cdata = function(e) { return this.openCurrent(), e = new t(this, e), this.onData(this.writer.cdata(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this }, A.prototype.comment = function(e) { return this.openCurrent(), e = new n(this, e), this.onData(this.writer.comment(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this }, A.prototype.raw = function(e) { return this.openCurrent(), e = new _(this, e), this.onData(this.writer.raw(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this }, A.prototype.instruction = function(e, t) {
                    var n, r, i, o;
                    if (this.openCurrent(), null != e && (e = g(e)), null != t && (t = g(t)), Array.isArray(e))
                        for (n = 0, o = e.length; n < o; n++) r = e[n], this.instruction(r);
                    else if (E(e))
                        for (r in e) T.call(e, r) && (i = e[r], this.instruction(r, i));
                    else b(t) && (t = t.apply()), t = new p(this, e, t), this.onData(this.writer.processingInstruction(t, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
                    return this
                }, A.prototype.declaration = function(e, t, n) { if (this.openCurrent(), this.documentStarted) throw new Error("declaration() must be the first node."); return n = new c(this, e, t, n), this.onData(this.writer.declaration(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this }, A.prototype.doctype = function(e, t, n) { if (this.openCurrent(), null == e) throw new Error("Missing root node name."); if (this.root) throw new Error("dtd() must come before the root node."); return this.currentNode = new h(this, t, n), this.currentNode.rootNodeName = e, this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this }, A.prototype.dtdElement = function(e, t) { return this.openCurrent(), t = new r(this, e, t), this.onData(this.writer.dtdElement(t, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this }, A.prototype.attList = function(e, t, n, r, i) { return this.openCurrent(), i = new s(this, e, t, n, r, i), this.onData(this.writer.dtdAttList(i, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this }, A.prototype.entity = function(e, t) { return this.openCurrent(), t = new a(this, !1, e, t), this.onData(this.writer.dtdEntity(t, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this }, A.prototype.pEntity = function(e, t) { return this.openCurrent(), t = new a(this, !0, e, t), this.onData(this.writer.dtdEntity(t, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this }, A.prototype.notation = function(e, t) { return this.openCurrent(), t = new l(this, e, t), this.onData(this.writer.dtdNotation(t, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this }, A.prototype.up = function() { if (this.currentLevel < 0) throw new Error("The document node has no parent."); return this.currentNode ? (this.currentNode.children ? this.closeNode(this.currentNode) : this.openNode(this.currentNode), this.currentNode = null) : this.closeNode(this.openTags[this.currentLevel]), delete this.openTags[this.currentLevel], this.currentLevel--, this }, A.prototype.end = function() { for (; 0 <= this.currentLevel;) this.up(); return this.onEnd() }, A.prototype.openCurrent = function() { if (this.currentNode) return this.currentNode.children = !0, this.openNode(this.currentNode) }, A.prototype.openNode = function(e) {
                    var t, n, r, i;
                    if (!e.isOpen) {
                        if (this.root || 0 !== this.currentLevel || e.type !== u.Element || (this.root = e), n = "", e.type === u.Element) {
                            for (r in this.writerOptions.state = o.OpenTag, n = this.writer.indent(e, this.writerOptions, this.currentLevel) + "<" + e.name, i = e.attribs) T.call(i, r) && (t = i[r], n += this.writer.attribute(t, this.writerOptions, this.currentLevel));
                            n += (e.children ? ">" : "/>") + this.writer.endline(e, this.writerOptions, this.currentLevel), this.writerOptions.state = o.InsideTag
                        } else this.writerOptions.state = o.OpenTag, n = this.writer.indent(e, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + e.rootNodeName, e.pubID && e.sysID ? n += ' PUBLIC "' + e.pubID + '" "' + e.sysID + '"' : e.sysID && (n += ' SYSTEM "' + e.sysID + '"'), e.children ? (n += " [", this.writerOptions.state = o.InsideTag) : (this.writerOptions.state = o.CloseTag, n += ">"), n += this.writer.endline(e, this.writerOptions, this.currentLevel);
                        return this.onData(n, this.currentLevel), e.isOpen = !0
                    }
                }, A.prototype.closeNode = function(e) { var t; if (!e.isClosed) return t = "", this.writerOptions.state = o.CloseTag, t = e.type === u.Element ? this.writer.indent(e, this.writerOptions, this.currentLevel) + "</" + e.name + ">" + this.writer.endline(e, this.writerOptions, this.currentLevel) : this.writer.indent(e, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(e, this.writerOptions, this.currentLevel), this.writerOptions.state = o.None, this.onData(t, this.currentLevel), e.isClosed = !0 }, A.prototype.onData = function(e, t) { return this.documentStarted = !0, this.onDataCallback(e, t + 1) }, A.prototype.onEnd = function() { return this.documentCompleted = !0, this.onEndCallback() }, A.prototype.debugInfo = function(e) { return null == e ? "" : "node: <" + e + ">" }, A.prototype.ele = function() { return this.element.apply(this, arguments) }, A.prototype.nod = function(e, t, n) { return this.node(e, t, n) }, A.prototype.txt = function(e) { return this.text(e) }, A.prototype.dat = function(e) { return this.cdata(e) }, A.prototype.com = function(e) { return this.comment(e) }, A.prototype.ins = function(e, t) { return this.instruction(e, t) }, A.prototype.dec = function(e, t, n) { return this.declaration(e, t, n) }, A.prototype.dtd = function(e, t, n) { return this.doctype(e, t, n) }, A.prototype.e = function(e, t, n) { return this.element(e, t, n) }, A.prototype.n = function(e, t, n) { return this.node(e, t, n) }, A.prototype.t = function(e) { return this.text(e) }, A.prototype.d = function(e) { return this.cdata(e) }, A.prototype.c = function(e) { return this.comment(e) }, A.prototype.r = function(e) { return this.raw(e) }, A.prototype.i = function(e, t) { return this.instruction(e, t) }, A.prototype.att = function() { return (this.currentNode && this.currentNode.type === u.DocType ? this.attList : this.attribute).apply(this, arguments) }, A.prototype.a = function() { return (this.currentNode && this.currentNode.type === u.DocType ? this.attList : this.attribute).apply(this, arguments) }, A.prototype.ent = function(e, t) { return this.entity(e, t) }, A.prototype.pent = function(e, t) { return this.pEntity(e, t) }, A.prototype.not = function(e, t) { return this.notation(e, t) }, A)
            }).call(this)
        }, { "./NodeType": 111, "./Utility": 112, "./WriterState": 113, "./XMLAttribute": 114, "./XMLCData": 115, "./XMLComment": 117, "./XMLDTDAttList": 122, "./XMLDTDElement": 123, "./XMLDTDEntity": 124, "./XMLDTDNotation": 125, "./XMLDeclaration": 126, "./XMLDocType": 127, "./XMLDocument": 128, "./XMLElement": 131, "./XMLProcessingInstruction": 135, "./XMLRaw": 136, "./XMLStringWriter": 138, "./XMLStringifier": 139, "./XMLText": 140 }],
        130: [function(r, o, e) {
            (function() {
                var t, e, i = {}.hasOwnProperty;

                function n(e) { n.__super__.constructor.call(this, e), this.type = t.Dummy }
                e = r("./XMLNode"), t = r("./NodeType"), o.exports = (function(e, t) {
                    for (var n in t) i.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(n, e), n.prototype.clone = function() { return Object.create(this) }, n.prototype.toString = function(e) { return "" }, n)
            }).call(this)
        }, { "./NodeType": 111, "./XMLNode": 133 }],
        131: [function(n, r, e) {
            (function() {
                var a, i, e, o, s, l, t, u = {}.hasOwnProperty;

                function c(e, t, n) {
                    var r, i, o, s;
                    if (c.__super__.constructor.call(this, e), null == t) throw new Error("Missing element name. " + this.debugInfo());
                    if (this.name = this.stringify.name(t), this.type = a.Element, this.attribs = {}, this.schemaTypeInfo = null, null != n && this.attribute(n), e.type === a.Document && (this.isRoot = !0, (this.documentObject = e).rootObject = this, e.children))
                        for (i = 0, o = (s = e.children).length; i < o; i++)
                            if ((r = s[i]).type === a.DocType) { r.name = this.name; break }
                }
                t = n("./Utility"), l = t.isObject, s = t.isFunction, o = t.getValue, t = n("./XMLNode"), a = n("./NodeType"), i = n("./XMLAttribute"), e = n("./XMLNamedNodeMap"), r.exports = (function(e, t) {
                    for (var n in t) u.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(c, t), Object.defineProperty(c.prototype, "tagName", { get: function() { return this.name } }), Object.defineProperty(c.prototype, "namespaceURI", { get: function() { return "" } }), Object.defineProperty(c.prototype, "prefix", { get: function() { return "" } }), Object.defineProperty(c.prototype, "localName", { get: function() { return this.name } }), Object.defineProperty(c.prototype, "id", { get: function() { throw new Error("This DOM method is not implemented." + this.debugInfo()) } }), Object.defineProperty(c.prototype, "className", { get: function() { throw new Error("This DOM method is not implemented." + this.debugInfo()) } }), Object.defineProperty(c.prototype, "classList", { get: function() { throw new Error("This DOM method is not implemented." + this.debugInfo()) } }), Object.defineProperty(c.prototype, "attributes", { get: function() { return this.attributeMap && this.attributeMap.nodes || (this.attributeMap = new e(this.attribs)), this.attributeMap } }), c.prototype.clone = function() { var e, t, n, r = Object.create(this); for (t in r.isRoot && (r.documentObject = null), r.attribs = {}, n = this.attribs) u.call(n, t) && (e = n[t], r.attribs[t] = e.clone()); return r.children = [], this.children.forEach(function(e) { e = e.clone(); return (e.parent = r).children.push(e) }), r }, c.prototype.attribute = function(e, t) {
                    var n, r;
                    if (null != e && (e = o(e)), l(e))
                        for (n in e) u.call(e, n) && (r = e[n], this.attribute(n, r));
                    else s(t) && (t = t.apply()), this.options.keepNullAttributes && null == t ? this.attribs[e] = new i(this, e, "") : null != t && (this.attribs[e] = new i(this, e, t));
                    return this
                }, c.prototype.removeAttribute = function(e) {
                    var t, n, r;
                    if (null == e) throw new Error("Missing attribute name. " + this.debugInfo());
                    if (e = o(e), Array.isArray(e))
                        for (n = 0, r = e.length; n < r; n++) t = e[n], delete this.attribs[t];
                    else delete this.attribs[e];
                    return this
                }, c.prototype.toString = function(e) { return this.options.writer.element(this, this.options.writer.filterOptions(e)) }, c.prototype.att = function(e, t) { return this.attribute(e, t) }, c.prototype.a = function(e, t) { return this.attribute(e, t) }, c.prototype.getAttribute = function(e) { return this.attribs.hasOwnProperty(e) ? this.attribs[e].value : null }, c.prototype.setAttribute = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.getAttributeNode = function(e) { return this.attribs.hasOwnProperty(e) ? this.attribs[e] : null }, c.prototype.setAttributeNode = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.removeAttributeNode = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.getElementsByTagName = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.getAttributeNS = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.setAttributeNS = function(e, t, n) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.removeAttributeNS = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.getAttributeNodeNS = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.setAttributeNodeNS = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.getElementsByTagNameNS = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.hasAttribute = function(e) { return this.attribs.hasOwnProperty(e) }, c.prototype.hasAttributeNS = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.setIdAttribute = function(e, t) { return this.attribs.hasOwnProperty(e) ? this.attribs[e].isId : t }, c.prototype.setIdAttributeNS = function(e, t, n) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.setIdAttributeNode = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.getElementsByTagName = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.getElementsByTagNameNS = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.getElementsByClassName = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, c.prototype.isEqualNode = function(e) {
                    var t, n, r;
                    if (!c.__super__.isEqualNode.apply(this, arguments).isEqualNode(e)) return !1;
                    if (e.namespaceURI !== this.namespaceURI) return !1;
                    if (e.prefix !== this.prefix) return !1;
                    if (e.localName !== this.localName) return !1;
                    if (e.attribs.length !== this.attribs.length) return !1;
                    for (t = n = 0, r = this.attribs.length - 1; 0 <= r ? n <= r : r <= n; t = 0 <= r ? ++n : --n)
                        if (!this.attribs[t].isEqualNode(e.attribs[t])) return !1;
                    return !0
                }, c)
            }).call(this)
        }, { "./NodeType": 111, "./Utility": 112, "./XMLAttribute": 114, "./XMLNamedNodeMap": 132, "./XMLNode": 133 }],
        132: [function(e, t, n) {
            (function() {
                function e(e) { this.nodes = e }
                t.exports = (Object.defineProperty(e.prototype, "length", { get: function() { return Object.keys(this.nodes).length || 0 } }), e.prototype.clone = function() { return this.nodes = null }, e.prototype.getNamedItem = function(e) { return this.nodes[e] }, e.prototype.setNamedItem = function(e) { var t = this.nodes[e.nodeName]; return this.nodes[e.nodeName] = e, t || null }, e.prototype.removeNamedItem = function(e) { var t = this.nodes[e]; return delete this.nodes[e], t || null }, e.prototype.item = function(e) { return this.nodes[Object.keys(this.nodes)[e]] || null }, e.prototype.getNamedItemNS = function(e, t) { throw new Error("This DOM method is not implemented.") }, e.prototype.setNamedItemNS = function(e) { throw new Error("This DOM method is not implemented.") }, e.prototype.removeNamedItemNS = function(e, t) { throw new Error("This DOM method is not implemented.") }, e)
            }).call(this)
        }, {}],
        133: [function(g, b, e) {
            (function() {
                var n, h, t, r, i, d, o, s, a, l, u, c, f, p, _, m, e, y = {}.hasOwnProperty;

                function v(e) { this.parent = e, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.value = null, this.children = [], this.baseURI = null, s || (s = g("./XMLElement"), t = g("./XMLCData"), r = g("./XMLComment"), i = g("./XMLDeclaration"), d = g("./XMLDocType"), u = g("./XMLRaw"), c = g("./XMLText"), l = g("./XMLProcessingInstruction"), o = g("./XMLDummy"), h = g("./NodeType"), a = g("./XMLNodeList"), g("./XMLNamedNodeMap"), n = g("./DocumentPosition")) }
                e = g("./Utility"), m = e.isObject, _ = e.isFunction, p = e.isEmpty, f = e.getValue, n = a = h = o = l = c = u = d = i = r = t = s = null, b.exports = (Object.defineProperty(v.prototype, "nodeName", { get: function() { return this.name } }), Object.defineProperty(v.prototype, "nodeType", { get: function() { return this.type } }), Object.defineProperty(v.prototype, "nodeValue", { get: function() { return this.value } }), Object.defineProperty(v.prototype, "parentNode", { get: function() { return this.parent } }), Object.defineProperty(v.prototype, "childNodes", { get: function() { return this.childNodeList && this.childNodeList.nodes || (this.childNodeList = new a(this.children)), this.childNodeList } }), Object.defineProperty(v.prototype, "firstChild", { get: function() { return this.children[0] || null } }), Object.defineProperty(v.prototype, "lastChild", { get: function() { return this.children[this.children.length - 1] || null } }), Object.defineProperty(v.prototype, "previousSibling", { get: function() { var e = this.parent.children.indexOf(this); return this.parent.children[e - 1] || null } }), Object.defineProperty(v.prototype, "nextSibling", { get: function() { var e = this.parent.children.indexOf(this); return this.parent.children[e + 1] || null } }), Object.defineProperty(v.prototype, "ownerDocument", { get: function() { return this.document() || null } }), Object.defineProperty(v.prototype, "textContent", { get: function() { var e, t, n, r, i; if (this.nodeType !== h.Element && this.nodeType !== h.DocumentFragment) return null; for (i = "", t = 0, n = (r = this.children).length; t < n; t++)(e = r[t]).textContent && (i += e.textContent); return i }, set: function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) } }), v.prototype.setParent = function(e) { var t, n, r, i, o; for ((this.parent = e) && (this.options = e.options, this.stringify = e.stringify), o = [], n = 0, r = (i = this.children).length; n < r; n++) t = i[n], o.push(t.setParent(this)); return o }, v.prototype.element = function(e, t, n) {
                    var r, i, o, s, a, l, u, c, h, d = null;
                    if (null === t && null == n && (t = (c = [{}, null])[0], n = c[1]), null == t && (t = {}), t = f(t), m(t) || (n = (c = [t, n])[0], t = c[1]), null != e && (e = f(e)), Array.isArray(e))
                        for (o = 0, l = e.length; o < l; o++) i = e[o], d = this.element(i);
                    else if (_(e)) d = this.element(e.apply());
                    else if (m(e)) {
                        for (a in e)
                            if (y.call(e, a))
                                if (h = e[a], _(h) && (h = h.apply()), !this.options.ignoreDecorators && this.stringify.convertAttKey && 0 === a.indexOf(this.stringify.convertAttKey)) d = this.attribute(a.substr(this.stringify.convertAttKey.length), h);
                                else if (!this.options.separateArrayItems && Array.isArray(h) && p(h)) d = this.dummy();
                        else if (m(h) && p(h)) d = this.element(a);
                        else if (this.options.keepNullNodes || null != h)
                            if (!this.options.separateArrayItems && Array.isArray(h))
                                for (s = 0, u = h.length; s < u; s++) i = h[s], (r = {})[a] = i, d = this.element(r);
                            else m(h) ? !this.options.ignoreDecorators && this.stringify.convertTextKey && 0 === a.indexOf(this.stringify.convertTextKey) ? d = this.element(h) : (d = this.element(a)).element(h) : d = this.element(a, h);
                        else d = this.dummy()
                    } else d = this.options.keepNullNodes || null !== n ? !this.options.ignoreDecorators && this.stringify.convertTextKey && 0 === e.indexOf(this.stringify.convertTextKey) ? this.text(n) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && 0 === e.indexOf(this.stringify.convertCDataKey) ? this.cdata(n) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && 0 === e.indexOf(this.stringify.convertCommentKey) ? this.comment(n) : !this.options.ignoreDecorators && this.stringify.convertRawKey && 0 === e.indexOf(this.stringify.convertRawKey) ? this.raw(n) : !this.options.ignoreDecorators && this.stringify.convertPIKey && 0 === e.indexOf(this.stringify.convertPIKey) ? this.instruction(e.substr(this.stringify.convertPIKey.length), n) : this.node(e, t, n) : this.dummy();
                    if (null == d) throw new Error("Could not create any elements with: " + e + ". " + this.debugInfo());
                    return d
                }, v.prototype.insertBefore = function(e, t, n) { var r, i, o, s; if (null != e && e.type) return o = t, (i = e).setParent(this), o ? (r = children.indexOf(o), s = children.splice(r), children.push(i), Array.prototype.push.apply(children, s)) : children.push(i), i; if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(e)); return r = this.parent.children.indexOf(this), s = this.parent.children.splice(r), n = this.parent.element(e, t, n), Array.prototype.push.apply(this.parent.children, s), n }, v.prototype.insertAfter = function(e, t, n) { var r; if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(e)); return r = this.parent.children.indexOf(this), r = this.parent.children.splice(r + 1), n = this.parent.element(e, t, n), Array.prototype.push.apply(this.parent.children, r), n }, v.prototype.remove = function() { var e; if (this.isRoot) throw new Error("Cannot remove the root element. " + this.debugInfo()); return e = this.parent.children.indexOf(this), [].splice.apply(this.parent.children, [e, e - e + 1].concat([])), this.parent }, v.prototype.node = function(e, t, n) { var r; return null != e && (e = f(e)), t = f(t = t || {}), m(t) || (n = (r = [t, n])[0], t = r[1]), t = new s(this, e, t), null != n && t.text(n), this.children.push(t), t }, v.prototype.text = function(e) { return m(e) && this.element(e), e = new c(this, e), this.children.push(e), this }, v.prototype.cdata = function(e) { e = new t(this, e); return this.children.push(e), this }, v.prototype.comment = function(e) { e = new r(this, e); return this.children.push(e), this }, v.prototype.commentBefore = function(e) {
                    var t = this.parent.children.indexOf(this),
                        t = this.parent.children.splice(t);
                    this.parent.comment(e);
                    return Array.prototype.push.apply(this.parent.children, t), this
                }, v.prototype.commentAfter = function(e) {
                    var t = this.parent.children.indexOf(this),
                        t = this.parent.children.splice(t + 1);
                    this.parent.comment(e);
                    return Array.prototype.push.apply(this.parent.children, t), this
                }, v.prototype.raw = function(e) { e = new u(this, e); return this.children.push(e), this }, v.prototype.dummy = function() { return new o(this) }, v.prototype.instruction = function(e, t) {
                    var n, r, i, o;
                    if (null != e && (e = f(e)), null != t && (t = f(t)), Array.isArray(e))
                        for (i = 0, o = e.length; i < o; i++) n = e[i], this.instruction(n);
                    else if (m(e))
                        for (n in e) y.call(e, n) && (r = e[n], this.instruction(n, r));
                    else _(t) && (t = t.apply()), t = new l(this, e, t), this.children.push(t);
                    return this
                }, v.prototype.instructionBefore = function(e, t) {
                    var n = this.parent.children.indexOf(this),
                        n = this.parent.children.splice(n);
                    this.parent.instruction(e, t);
                    return Array.prototype.push.apply(this.parent.children, n), this
                }, v.prototype.instructionAfter = function(e, t) {
                    var n = this.parent.children.indexOf(this),
                        n = this.parent.children.splice(n + 1);
                    this.parent.instruction(e, t);
                    return Array.prototype.push.apply(this.parent.children, n), this
                }, v.prototype.declaration = function(e, t, n) {
                    var r = this.document(),
                        n = new i(r, e, t, n);
                    return 0 !== r.children.length && r.children[0].type === h.Declaration ? r.children[0] = n : r.children.unshift(n), r.root() || r
                }, v.prototype.dtd = function(e, t) {
                    for (var n, r, i, o, s = this.document(), a = new d(s, e, t), l = s.children, u = n = 0, c = l.length; n < c; u = ++n)
                        if (l[u].type === h.DocType) return s.children[u] = a;
                    for (u = r = 0, i = (o = s.children).length; r < i; u = ++r)
                        if (o[u].isRoot) return s.children.splice(u, 0, a), a;
                    return s.children.push(a), a
                }, v.prototype.up = function() { if (this.isRoot) throw new Error("The root node has no parent. Use doc() if you need to get the document object."); return this.parent }, v.prototype.root = function() {
                    for (var e = this; e;) {
                        if (e.type === h.Document) return e.rootObject;
                        if (e.isRoot) return e;
                        e = e.parent
                    }
                }, v.prototype.document = function() {
                    for (var e = this; e;) {
                        if (e.type === h.Document) return e;
                        e = e.parent
                    }
                }, v.prototype.end = function(e) { return this.document().end(e) }, v.prototype.prev = function() { var e = this.parent.children.indexOf(this); if (e < 1) throw new Error("Already at the first node. " + this.debugInfo()); return this.parent.children[e - 1] }, v.prototype.next = function() { var e = this.parent.children.indexOf(this); if (-1 === e || e === this.parent.children.length - 1) throw new Error("Already at the last node. " + this.debugInfo()); return this.parent.children[e + 1] }, v.prototype.importDocument = function(e) { e = e.root().clone(); return e.parent = this, e.isRoot = !1, this.children.push(e), this }, v.prototype.debugInfo = function(e) { var t; return null != (e = e || this.name) || null != (t = this.parent) && t.name ? null == e ? "parent: <" + this.parent.name + ">" : null != (t = this.parent) && t.name ? "node: <" + e + ">, parent: <" + this.parent.name + ">" : "node: <" + e + ">" : "" }, v.prototype.ele = function(e, t, n) { return this.element(e, t, n) }, v.prototype.nod = function(e, t, n) { return this.node(e, t, n) }, v.prototype.txt = function(e) { return this.text(e) }, v.prototype.dat = function(e) { return this.cdata(e) }, v.prototype.com = function(e) { return this.comment(e) }, v.prototype.ins = function(e, t) { return this.instruction(e, t) }, v.prototype.doc = function() { return this.document() }, v.prototype.dec = function(e, t, n) { return this.declaration(e, t, n) }, v.prototype.e = function(e, t, n) { return this.element(e, t, n) }, v.prototype.n = function(e, t, n) { return this.node(e, t, n) }, v.prototype.t = function(e) { return this.text(e) }, v.prototype.d = function(e) { return this.cdata(e) }, v.prototype.c = function(e) { return this.comment(e) }, v.prototype.r = function(e) { return this.raw(e) }, v.prototype.i = function(e, t) { return this.instruction(e, t) }, v.prototype.u = function() { return this.up() }, v.prototype.importXMLBuilder = function(e) { return this.importDocument(e) }, v.prototype.replaceChild = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, v.prototype.removeChild = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, v.prototype.appendChild = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, v.prototype.hasChildNodes = function() { return 0 !== this.children.length }, v.prototype.cloneNode = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, v.prototype.normalize = function() { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, v.prototype.isSupported = function(e, t) { return !0 }, v.prototype.hasAttributes = function() { return 0 !== this.attribs.length }, v.prototype.compareDocumentPosition = function(e) { var t; return this === e ? 0 : this.document() !== e.document() ? (t = n.Disconnected | n.ImplementationSpecific, Math.random() < .5 ? t |= n.Preceding : t |= n.Following, t) : this.isAncestor(e) ? n.Contains | n.Preceding : this.isDescendant(e) ? n.Contains | n.Following : this.isPreceding(e) ? n.Preceding : n.Following }, v.prototype.isSameNode = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, v.prototype.lookupPrefix = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, v.prototype.isDefaultNamespace = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, v.prototype.lookupNamespaceURI = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, v.prototype.isEqualNode = function(e) {
                    var t, n, r;
                    if (e.nodeType !== this.nodeType) return !1;
                    if (e.children.length !== this.children.length) return !1;
                    for (t = n = 0, r = this.children.length - 1; 0 <= r ? n <= r : r <= n; t = 0 <= r ? ++n : --n)
                        if (!this.children[t].isEqualNode(e.children[t])) return !1;
                    return !0
                }, v.prototype.getFeature = function(e, t) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, v.prototype.setUserData = function(e, t, n) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, v.prototype.getUserData = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, v.prototype.contains = function(e) { return !!e && (e === this || this.isDescendant(e)) }, v.prototype.isDescendant = function(e) { for (var t, n = this.children, r = 0, i = n.length; r < i; r++) { if (e === (t = n[r])) return !0; if (t.isDescendant(e)) return !0 } return !1 }, v.prototype.isAncestor = function(e) { return e.isDescendant(this) }, v.prototype.isPreceding = function(e) {
                    var t = this.treePosition(e),
                        e = this.treePosition(this);
                    return -1 !== t && -1 !== e && t < e
                }, v.prototype.isFollowing = function(e) {
                    var t = this.treePosition(e),
                        e = this.treePosition(this);
                    return -1 !== t && -1 !== e && e < t
                }, v.prototype.treePosition = function(t) {
                    var n = 0,
                        r = !1;
                    return this.foreachTreeNode(this.document(), function(e) { if (n++, !r && e === t) return r = !0 }), r ? n : -1
                }, v.prototype.foreachTreeNode = function(e, t) { for (var n, r, i, o = 0, s = (r = (e = e || this.document()).children).length; o < s; o++) { if (i = t(n = r[o])) return i; if (i = this.foreachTreeNode(n, t)) return i } }, v)
            }).call(this)
        }, { "./DocumentPosition": 110, "./NodeType": 111, "./Utility": 112, "./XMLCData": 115, "./XMLComment": 117, "./XMLDeclaration": 126, "./XMLDocType": 127, "./XMLDummy": 130, "./XMLElement": 131, "./XMLNamedNodeMap": 132, "./XMLNodeList": 134, "./XMLProcessingInstruction": 135, "./XMLRaw": 136, "./XMLText": 140 }],
        134: [function(e, t, n) {
            (function() {
                function e(e) { this.nodes = e }
                t.exports = (Object.defineProperty(e.prototype, "length", { get: function() { return this.nodes.length || 0 } }), e.prototype.clone = function() { return this.nodes = null }, e.prototype.item = function(e) { return this.nodes[e] || null }, e)
            }).call(this)
        }, {}],
        135: [function(t, n, e) {
            (function() {
                var r, e, i = {}.hasOwnProperty;

                function o(e, t, n) {
                    if (o.__super__.constructor.call(this, e), null == t) throw new Error("Missing instruction target. " + this.debugInfo());
                    this.type = r.ProcessingInstruction, this.target = this.stringify.insTarget(t), this.name = this.target, n && (this.value = this.stringify.insValue(n))
                }
                r = t("./NodeType"), e = t("./XMLCharacterData"), n.exports = (function(e, t) {
                    for (var n in t) i.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(o, e), o.prototype.clone = function() { return Object.create(this) }, o.prototype.toString = function(e) { return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(e)) }, o.prototype.isEqualNode = function(e) { return !!o.__super__.isEqualNode.apply(this, arguments).isEqualNode(e) && e.target === this.target }, o)
            }).call(this)
        }, { "./NodeType": 111, "./XMLCharacterData": 116 }],
        136: [function(t, o, e) {
            (function() {
                var n, e, i = {}.hasOwnProperty;

                function r(e, t) {
                    if (r.__super__.constructor.call(this, e), null == t) throw new Error("Missing raw text. " + this.debugInfo());
                    this.type = n.Raw, this.value = this.stringify.raw(t)
                }
                n = t("./NodeType"), e = t("./XMLNode"), o.exports = (function(e, t) {
                    for (var n in t) i.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(r, e), r.prototype.clone = function() { return Object.create(this) }, r.prototype.toString = function(e) { return this.options.writer.raw(this, this.options.writer.filterOptions(e)) }, r)
            }).call(this)
        }, { "./NodeType": 111, "./XMLNode": 133 }],
        137: [function(t, n, e) {
            (function() {
                var d, f, e, p = {}.hasOwnProperty;

                function r(e, t) { this.stream = e, r.__super__.constructor.call(this, t) }
                d = t("./NodeType"), e = t("./XMLWriterBase"), f = t("./WriterState"), n.exports = (function(e, t) {
                    for (var n in t) p.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(r, e), r.prototype.endline = function(e, t, n) { return e.isLastRootNode && t.state === f.CloseTag ? "" : r.__super__.endline.call(this, e, t, n) }, r.prototype.document = function(e, t) { for (var n, r, i, o, s, a, l = e.children, u = r = 0, c = l.length; r < c; u = ++r)(n = l[u]).isLastRootNode = u === e.children.length - 1; for (t = this.filterOptions(t), a = [], i = 0, o = (s = e.children).length; i < o; i++) n = s[i], a.push(this.writeChildNode(n, t, 0)); return a }, r.prototype.attribute = function(e, t, n) { return this.stream.write(r.__super__.attribute.call(this, e, t, n)) }, r.prototype.cdata = function(e, t, n) { return this.stream.write(r.__super__.cdata.call(this, e, t, n)) }, r.prototype.comment = function(e, t, n) { return this.stream.write(r.__super__.comment.call(this, e, t, n)) }, r.prototype.declaration = function(e, t, n) { return this.stream.write(r.__super__.declaration.call(this, e, t, n)) }, r.prototype.docType = function(e, t, n) {
                    var r, i, o, s;
                    if (n = n || 0, this.openNode(e, t, n), t.state = f.OpenTag, this.stream.write(this.indent(e, t, n)), this.stream.write("<!DOCTYPE " + e.root().name), e.pubID && e.sysID ? this.stream.write(' PUBLIC "' + e.pubID + '" "' + e.sysID + '"') : e.sysID && this.stream.write(' SYSTEM "' + e.sysID + '"'), 0 < e.children.length) {
                        for (this.stream.write(" ["), this.stream.write(this.endline(e, t, n)), t.state = f.InsideTag, i = 0, o = (s = e.children).length; i < o; i++) r = s[i], this.writeChildNode(r, t, n + 1);
                        t.state = f.CloseTag, this.stream.write("]")
                    }
                    return t.state = f.CloseTag, this.stream.write(t.spaceBeforeSlash + ">"), this.stream.write(this.endline(e, t, n)), t.state = f.None, this.closeNode(e, t, n)
                }, r.prototype.element = function(e, t, n) {
                    var r, i, o, s, a, l, u, c, h;
                    for (u in n = n || 0, this.openNode(e, t, n), t.state = f.OpenTag, this.stream.write(this.indent(e, t, n) + "<" + e.name), c = e.attribs) p.call(c, u) && (r = c[u], this.attribute(r, t, n));
                    if (s = 0 === (o = e.children.length) ? null : e.children[0], 0 === o || e.children.every(function(e) { return (e.type === d.Text || e.type === d.Raw) && "" === e.value })) t.allowEmpty ? (this.stream.write(">"), t.state = f.CloseTag, this.stream.write("</" + e.name + ">")) : (t.state = f.CloseTag, this.stream.write(t.spaceBeforeSlash + "/>"));
                    else if (!t.pretty || 1 !== o || s.type !== d.Text && s.type !== d.Raw || null == s.value) {
                        for (this.stream.write(">" + this.endline(e, t, n)), t.state = f.InsideTag, a = 0, l = (h = e.children).length; a < l; a++) i = h[a], this.writeChildNode(i, t, n + 1);
                        t.state = f.CloseTag, this.stream.write(this.indent(e, t, n) + "</" + e.name + ">")
                    } else this.stream.write(">"), t.state = f.InsideTag, t.suppressPrettyCount++, this.writeChildNode(s, t, n + 1), t.suppressPrettyCount--, t.state = f.CloseTag, this.stream.write("</" + e.name + ">");
                    return this.stream.write(this.endline(e, t, n)), t.state = f.None, this.closeNode(e, t, n)
                }, r.prototype.processingInstruction = function(e, t, n) { return this.stream.write(r.__super__.processingInstruction.call(this, e, t, n)) }, r.prototype.raw = function(e, t, n) { return this.stream.write(r.__super__.raw.call(this, e, t, n)) }, r.prototype.text = function(e, t, n) { return this.stream.write(r.__super__.text.call(this, e, t, n)) }, r.prototype.dtdAttList = function(e, t, n) { return this.stream.write(r.__super__.dtdAttList.call(this, e, t, n)) }, r.prototype.dtdElement = function(e, t, n) { return this.stream.write(r.__super__.dtdElement.call(this, e, t, n)) }, r.prototype.dtdEntity = function(e, t, n) { return this.stream.write(r.__super__.dtdEntity.call(this, e, t, n)) }, r.prototype.dtdNotation = function(e, t, n) { return this.stream.write(r.__super__.dtdNotation.call(this, e, t, n)) }, r)
            }).call(this)
        }, { "./NodeType": 111, "./WriterState": 113, "./XMLWriterBase": 141 }],
        138: [function(n, r, e) {
            (function() {
                var e, i = {}.hasOwnProperty;

                function t(e) { t.__super__.constructor.call(this, e) }
                e = n("./XMLWriterBase"), r.exports = (function(e, t) {
                    for (var n in t) i.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(t, e), t.prototype.document = function(e, t) { var n, r, i, o, s; for (t = this.filterOptions(t), o = "", r = 0, i = (s = e.children).length; r < i; r++) n = s[r], o += this.writeChildNode(n, t, 0); return t.pretty && o.slice(-t.newline.length) === t.newline && (o = o.slice(0, -t.newline.length)), o }, t)
            }).call(this)
        }, { "./XMLWriterBase": 141 }],
        139: [function(e, t, n) {
            (function() {
                function i(e, t) { return function() { return e.apply(t, arguments) } }
                var o = {}.hasOwnProperty;

                function e(e) { var t, n, r; for (t in this.assertLegalName = i(this.assertLegalName, this), this.assertLegalChar = i(this.assertLegalChar, this), e = e || {}, this.options = e, this.options.version || (this.options.version = "1.0"), n = e.stringify || {}) o.call(n, t) && (r = n[t], this[t] = r) }
                t.exports = (e.prototype.name = function(e) { return this.options.noValidation ? e : this.assertLegalName("" + e || "") }, e.prototype.text = function(e) { return this.options.noValidation ? e : this.assertLegalChar(this.textEscape("" + e || "")) }, e.prototype.cdata = function(e) { return this.options.noValidation ? e : (e = (e = "" + e || "").replace("]]>", "]]]]><![CDATA[>"), this.assertLegalChar(e)) }, e.prototype.comment = function(e) { if (this.options.noValidation) return e; if ((e = "" + e || "").match(/--/)) throw new Error("Comment text cannot contain double-hypen: " + e); return this.assertLegalChar(e) }, e.prototype.raw = function(e) { return this.options.noValidation ? e : "" + e || "" }, e.prototype.attValue = function(e) { return this.options.noValidation ? e : this.assertLegalChar(this.attEscape(e = "" + e || "")) }, e.prototype.insTarget = function(e) { return this.options.noValidation ? e : this.assertLegalChar("" + e || "") }, e.prototype.insValue = function(e) { if (this.options.noValidation) return e; if ((e = "" + e || "").match(/\?>/)) throw new Error("Invalid processing instruction value: " + e); return this.assertLegalChar(e) }, e.prototype.xmlVersion = function(e) { if (this.options.noValidation) return e; if (!(e = "" + e || "").match(/1\.[0-9]+/)) throw new Error("Invalid version number: " + e); return e }, e.prototype.xmlEncoding = function(e) { if (this.options.noValidation) return e; if (!(e = "" + e || "").match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) throw new Error("Invalid encoding: " + e); return this.assertLegalChar(e) }, e.prototype.xmlStandalone = function(e) { return this.options.noValidation ? e : e ? "yes" : "no" }, e.prototype.dtdPubID = function(e) { return this.options.noValidation ? e : this.assertLegalChar("" + e || "") }, e.prototype.dtdSysID = function(e) { return this.options.noValidation ? e : this.assertLegalChar("" + e || "") }, e.prototype.dtdElementValue = function(e) { return this.options.noValidation ? e : this.assertLegalChar("" + e || "") }, e.prototype.dtdAttType = function(e) { return this.options.noValidation ? e : this.assertLegalChar("" + e || "") }, e.prototype.dtdAttDefault = function(e) { return this.options.noValidation ? e : this.assertLegalChar("" + e || "") }, e.prototype.dtdEntityValue = function(e) { return this.options.noValidation ? e : this.assertLegalChar("" + e || "") }, e.prototype.dtdNData = function(e) { return this.options.noValidation ? e : this.assertLegalChar("" + e || "") }, e.prototype.convertAttKey = "@", e.prototype.convertPIKey = "?", e.prototype.convertTextKey = "#text", e.prototype.convertCDataKey = "#cdata", e.prototype.convertCommentKey = "#comment", e.prototype.convertRawKey = "#raw", e.prototype.assertLegalChar = function(e) { var t, n; if (this.options.noValidation) return e; if (t = "", "1.0" === this.options.version) { if (t = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, n = e.match(t)) throw new Error("Invalid character in string: " + e + " at index " + n.index) } else if ("1.1" === this.options.version && (t = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, n = e.match(t))) throw new Error("Invalid character in string: " + e + " at index " + n.index); return e }, e.prototype.assertLegalName = function(e) { var t; if (this.options.noValidation) return e; if (this.assertLegalChar(e), t = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/, !e.match(t)) throw new Error("Invalid character in name"); return e }, e.prototype.textEscape = function(e) { var t; return this.options.noValidation ? e : (t = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, e.replace(t, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;")) }, e.prototype.attEscape = function(e) { var t; return this.options.noValidation ? e : (t = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, e.replace(t, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;")) }, e)
            }).call(this)
        }, {}],
        140: [function(t, o, e) {
            (function() {
                var n, e, i = {}.hasOwnProperty;

                function r(e, t) {
                    if (r.__super__.constructor.call(this, e), null == t) throw new Error("Missing element text. " + this.debugInfo());
                    this.name = "#text", this.type = n.Text, this.value = this.stringify.text(t)
                }
                n = t("./NodeType"), e = t("./XMLCharacterData"), o.exports = (function(e, t) {
                    for (var n in t) i.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype
                }(r, e), Object.defineProperty(r.prototype, "isElementContentWhitespace", { get: function() { throw new Error("This DOM method is not implemented." + this.debugInfo()) } }), Object.defineProperty(r.prototype, "wholeText", { get: function() { for (var e, t = "", n = this.previousSibling; n;) t = n.data + t, n = n.previousSibling; for (t += this.data, e = this.nextSibling; e;) t += e.data, e = e.nextSibling; return t } }), r.prototype.clone = function() { return Object.create(this) }, r.prototype.toString = function(e) { return this.options.writer.text(this, this.options.writer.filterOptions(e)) }, r.prototype.splitText = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, r.prototype.replaceWholeText = function(e) { throw new Error("This DOM method is not implemented." + this.debugInfo()) }, r)
            }).call(this)
        }, { "./NodeType": 111, "./XMLCharacterData": 116 }],
        141: [function(t, n, e) {
            (function() {
                var y, v, r, g = {}.hasOwnProperty;

                function e(e) { var t, n, r; for (t in e = e || {}, n = (this.options = e).writer || {}) g.call(n, t) && (r = n[t], this["_" + t] = this[t], this[t] = r) }
                r = t("./Utility").assign, y = t("./NodeType"), t("./XMLDeclaration"), t("./XMLDocType"), t("./XMLCData"), t("./XMLComment"), t("./XMLElement"), t("./XMLRaw"), t("./XMLText"), t("./XMLProcessingInstruction"), t("./XMLDummy"), t("./XMLDTDAttList"), t("./XMLDTDElement"), t("./XMLDTDEntity"), t("./XMLDTDNotation"), v = t("./WriterState"), n.exports = (e.prototype.filterOptions = function(e) { var t, n; return e = e || {}, e = r({}, this.options, e), (t = { writer: this }).pretty = e.pretty || !1, t.allowEmpty = e.allowEmpty || !1, t.indent = null != (n = e.indent) ? n : "  ", t.newline = null != (n = e.newline) ? n : "\n", t.offset = null != (n = e.offset) ? n : 0, t.dontPrettyTextNodes = null != (n = null != (n = e.dontPrettyTextNodes) ? n : e.dontprettytextnodes) ? n : 0, t.spaceBeforeSlash = null != (e = null != (n = e.spaceBeforeSlash) ? n : e.spacebeforeslash) ? e : "", !0 === t.spaceBeforeSlash && (t.spaceBeforeSlash = " "), t.suppressPrettyCount = 0, t.user = {}, t.state = v.None, t }, e.prototype.indent = function(e, t, n) { var r; return t.pretty && !t.suppressPrettyCount && t.pretty && 0 < (r = (n || 0) + t.offset + 1) ? new Array(r).join(t.indent) : "" }, e.prototype.endline = function(e, t, n) { return !t.pretty || t.suppressPrettyCount ? "" : t.newline }, e.prototype.attribute = function(e, t, n) { var r; return this.openAttribute(e, t, n), r = " " + e.name + '="' + e.value + '"', this.closeAttribute(e, t, n), r }, e.prototype.cdata = function(e, t, n) { var r; return this.openNode(e, t, n), t.state = v.OpenTag, r = this.indent(e, t, n) + "<![CDATA[", t.state = v.InsideTag, r += e.value, t.state = v.CloseTag, r += "]]>" + this.endline(e, t, n), t.state = v.None, this.closeNode(e, t, n), r }, e.prototype.comment = function(e, t, n) { var r; return this.openNode(e, t, n), t.state = v.OpenTag, r = this.indent(e, t, n) + "\x3c!-- ", t.state = v.InsideTag, r += e.value, t.state = v.CloseTag, r += " --\x3e" + this.endline(e, t, n), t.state = v.None, this.closeNode(e, t, n), r }, e.prototype.declaration = function(e, t, n) { var r; return this.openNode(e, t, n), t.state = v.OpenTag, r = this.indent(e, t, n) + "<?xml", t.state = v.InsideTag, r += ' version="' + e.version + '"', null != e.encoding && (r += ' encoding="' + e.encoding + '"'), null != e.standalone && (r += ' standalone="' + e.standalone + '"'), t.state = v.CloseTag, r += t.spaceBeforeSlash + "?>", r += this.endline(e, t, n), t.state = v.None, this.closeNode(e, t, n), r }, e.prototype.docType = function(e, t, n) {
                    var r, i, o, s, a;
                    if (n = n || 0, this.openNode(e, t, n), t.state = v.OpenTag, s = this.indent(e, t, n), s += "<!DOCTYPE " + e.root().name, e.pubID && e.sysID ? s += ' PUBLIC "' + e.pubID + '" "' + e.sysID + '"' : e.sysID && (s += ' SYSTEM "' + e.sysID + '"'), 0 < e.children.length) {
                        for (s += " [", s += this.endline(e, t, n), t.state = v.InsideTag, i = 0, o = (a = e.children).length; i < o; i++) r = a[i], s += this.writeChildNode(r, t, n + 1);
                        t.state = v.CloseTag, s += "]"
                    }
                    return t.state = v.CloseTag, s += t.spaceBeforeSlash + ">", s += this.endline(e, t, n), t.state = v.None, this.closeNode(e, t, n), s
                }, e.prototype.element = function(e, t, n) {
                    var r, i, o, s, a, l, u, c, h, d, f, p, _, m;
                    for (h in n = n || 0, d = !1, f = "", this.openNode(e, t, n), t.state = v.OpenTag, f += this.indent(e, t, n) + "<" + e.name, p = e.attribs) g.call(p, h) && (r = p[h], f += this.attribute(r, t, n));
                    if (s = 0 === (o = e.children.length) ? null : e.children[0], 0 === o || e.children.every(function(e) { return (e.type === y.Text || e.type === y.Raw) && "" === e.value })) t.allowEmpty ? (f += ">", t.state = v.CloseTag, f += "</" + e.name + ">" + this.endline(e, t, n)) : (t.state = v.CloseTag, f += t.spaceBeforeSlash + "/>" + this.endline(e, t, n));
                    else if (!t.pretty || 1 !== o || s.type !== y.Text && s.type !== y.Raw || null == s.value) {
                        if (t.dontPrettyTextNodes)
                            for (a = 0, u = (_ = e.children).length; a < u; a++)
                                if (((i = _[a]).type === y.Text || i.type === y.Raw) && null != i.value) { t.suppressPrettyCount++, d = !0; break }
                        for (f += ">" + this.endline(e, t, n), t.state = v.InsideTag, l = 0, c = (m = e.children).length; l < c; l++) i = m[l], f += this.writeChildNode(i, t, n + 1);
                        t.state = v.CloseTag, f += this.indent(e, t, n) + "</" + e.name + ">", d && t.suppressPrettyCount--, f += this.endline(e, t, n), t.state = v.None
                    } else f += ">", t.state = v.InsideTag, t.suppressPrettyCount++, d = !0, f += this.writeChildNode(s, t, n + 1), t.suppressPrettyCount--, d = !1, t.state = v.CloseTag, f += "</" + e.name + ">" + this.endline(e, t, n);
                    return this.closeNode(e, t, n), f
                }, e.prototype.writeChildNode = function(e, t, n) {
                    switch (e.type) {
                        case y.CData:
                            return this.cdata(e, t, n);
                        case y.Comment:
                            return this.comment(e, t, n);
                        case y.Element:
                            return this.element(e, t, n);
                        case y.Raw:
                            return this.raw(e, t, n);
                        case y.Text:
                            return this.text(e, t, n);
                        case y.ProcessingInstruction:
                            return this.processingInstruction(e, t, n);
                        case y.Dummy:
                            return "";
                        case y.Declaration:
                            return this.declaration(e, t, n);
                        case y.DocType:
                            return this.docType(e, t, n);
                        case y.AttributeDeclaration:
                            return this.dtdAttList(e, t, n);
                        case y.ElementDeclaration:
                            return this.dtdElement(e, t, n);
                        case y.EntityDeclaration:
                            return this.dtdEntity(e, t, n);
                        case y.NotationDeclaration:
                            return this.dtdNotation(e, t, n);
                        default:
                            throw new Error("Unknown XML node type: " + e.constructor.name)
                    }
                }, e.prototype.processingInstruction = function(e, t, n) { var r; return this.openNode(e, t, n), t.state = v.OpenTag, r = this.indent(e, t, n) + "<?", t.state = v.InsideTag, r += e.target, e.value && (r += " " + e.value), t.state = v.CloseTag, r += t.spaceBeforeSlash + "?>", r += this.endline(e, t, n), t.state = v.None, this.closeNode(e, t, n), r }, e.prototype.raw = function(e, t, n) { var r; return this.openNode(e, t, n), t.state = v.OpenTag, r = this.indent(e, t, n), t.state = v.InsideTag, r += e.value, t.state = v.CloseTag, r += this.endline(e, t, n), t.state = v.None, this.closeNode(e, t, n), r }, e.prototype.text = function(e, t, n) { var r; return this.openNode(e, t, n), t.state = v.OpenTag, r = this.indent(e, t, n), t.state = v.InsideTag, r += e.value, t.state = v.CloseTag, r += this.endline(e, t, n), t.state = v.None, this.closeNode(e, t, n), r }, e.prototype.dtdAttList = function(e, t, n) { var r; return this.openNode(e, t, n), t.state = v.OpenTag, r = this.indent(e, t, n) + "<!ATTLIST", t.state = v.InsideTag, r += " " + e.elementName + " " + e.attributeName + " " + e.attributeType, "#DEFAULT" !== e.defaultValueType && (r += " " + e.defaultValueType), e.defaultValue && (r += ' "' + e.defaultValue + '"'), t.state = v.CloseTag, r += t.spaceBeforeSlash + ">" + this.endline(e, t, n), t.state = v.None, this.closeNode(e, t, n), r }, e.prototype.dtdElement = function(e, t, n) { var r; return this.openNode(e, t, n), t.state = v.OpenTag, r = this.indent(e, t, n) + "<!ELEMENT", t.state = v.InsideTag, r += " " + e.name + " " + e.value, t.state = v.CloseTag, r += t.spaceBeforeSlash + ">" + this.endline(e, t, n), t.state = v.None, this.closeNode(e, t, n), r }, e.prototype.dtdEntity = function(e, t, n) { var r; return this.openNode(e, t, n), t.state = v.OpenTag, r = this.indent(e, t, n) + "<!ENTITY", t.state = v.InsideTag, e.pe && (r += " %"), r += " " + e.name, e.value ? r += ' "' + e.value + '"' : (e.pubID && e.sysID ? r += ' PUBLIC "' + e.pubID + '" "' + e.sysID + '"' : e.sysID && (r += ' SYSTEM "' + e.sysID + '"'), e.nData && (r += " NDATA " + e.nData)), t.state = v.CloseTag, r += t.spaceBeforeSlash + ">" + this.endline(e, t, n), t.state = v.None, this.closeNode(e, t, n), r }, e.prototype.dtdNotation = function(e, t, n) { var r; return this.openNode(e, t, n), t.state = v.OpenTag, r = this.indent(e, t, n) + "<!NOTATION", t.state = v.InsideTag, r += " " + e.name, e.pubID && e.sysID ? r += ' PUBLIC "' + e.pubID + '" "' + e.sysID + '"' : e.pubID ? r += ' PUBLIC "' + e.pubID + '"' : e.sysID && (r += ' SYSTEM "' + e.sysID + '"'), t.state = v.CloseTag, r += t.spaceBeforeSlash + ">" + this.endline(e, t, n), t.state = v.None, this.closeNode(e, t, n), r }, e.prototype.openNode = function(e, t, n) {}, e.prototype.closeNode = function(e, t, n) {}, e.prototype.openAttribute = function(e, t, n) {}, e.prototype.closeAttribute = function(e, t, n) {}, e)
            }).call(this)
        }, { "./NodeType": 111, "./Utility": 112, "./WriterState": 113, "./XMLCData": 115, "./XMLComment": 117, "./XMLDTDAttList": 122, "./XMLDTDElement": 123, "./XMLDTDEntity": 124, "./XMLDTDNotation": 125, "./XMLDeclaration": 126, "./XMLDocType": 127, "./XMLDummy": 130, "./XMLElement": 131, "./XMLProcessingInstruction": 135, "./XMLRaw": 136, "./XMLText": 140 }],
        142: [function(u, c, e) {
            (function() {
                var e = u("./Utility"),
                    i = e.assign,
                    o = e.isFunction,
                    t = u("./XMLDOMImplementation"),
                    s = u("./XMLDocument"),
                    a = u("./XMLDocumentCB"),
                    n = u("./XMLStringWriter"),
                    r = u("./XMLStreamWriter"),
                    l = u("./NodeType"),
                    e = u("./WriterState");
                c.exports.create = function(e, t, n, r) { if (null == e) throw new Error("Root element needs a name."); return r = i({}, t, n, r), e = (n = new s(r)).element(e), r.headless || (n.declaration(r), null == r.pubID && null == r.sysID || n.dtd(r)), e }, c.exports.begin = function(e, t, n) { var r; return o(e) && (t = (r = [e, t])[0], n = r[1], e = {}), t ? new a(e, t, n) : new s(e) }, c.exports.stringWriter = function(e) { return new n(e) }, c.exports.streamWriter = function(e, t) { return new r(e, t) }, c.exports.implementation = new t, c.exports.nodeType = l, c.exports.writerState = e
            }).call(this)
        }, { "./NodeType": 111, "./Utility": 112, "./WriterState": 113, "./XMLDOMImplementation": 120, "./XMLDocument": 128, "./XMLDocumentCB": 129, "./XMLStreamWriter": 137, "./XMLStringWriter": 138 }],
        143: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = n.CMDS_PLAY_TYPE = n.CMDS_SCHEMA = n.EVENT_TYPE = n.SWITCH_STATUS = n.VIDEO_ULTRA_HD_RESOLUTION = n.VIDEO_RESOLUTION = n.PTZ_CONTINUOUS_DIRECTION = n.PTZ_STEP_DIRECTION = n.PRIV_PTZ = n.PRIV_VIEW = n.DEVICE_FEATURE_SUPPORT = n.DEVICE_SERVICE_STATUS = n.DEVICE_ONLINE_STATUS = n.DEVICE_STATUS = n.SETTING_SWITCH_STATUS = n.VIEW_TIMELINE_MODE = n.SD_CARD_RECORD_MODE = n.SD_CARD_STATUS = n.SDK_RUNTIME_ENV = n.SDK_PLATFORM = void 0;
            var r = { NONE: "", ZHU_QUE: "bluramsWo", QING_LONG: "bluramsCN", BI_FANG: "bluramsBF", XUAN_WU: "bluramsOS", LOCAL: "local" },
                i = { TEST: "stg", PRODUCTION: "pro", DEVELOPMENT: "dev" },
                o = { NONE: "1", ABNORMAL: "2", NORMAL: "3", NOT_SUPPORT_FS: "4" },
                s = { NO: "1", EVENT: "2", HOURS_24: "3" },
                a = { CLOUD_STORAGE: "1", SD_CARD_STORAGE: "2" },
                l = { ON: "On", OFF: "Off" },
                u = { ON: "On", OFF: "Off", OFF_BY_MANUAL: "OffByManual", OFF_BY_SCHEDULE: "OffBySchedule", OFF_UPDATE: "OffUpdate", OFF_BY_LBS: "OffByLBS" },
                c = { AVAILABLE: "available", UNAVAILABLE: "unavailable" },
                h = { HAVE_SERVICE: "1", WILL_EXPIRE: "2", EXPIRED: "3", NOT_BUY: "4" },
                d = { YES: "1", NO: "0" },
                f = { LIVE: "1", PLAYBACK: "2", LIVE_AND_PLAYBACK: "3" },
                p = { NONE: "0", HAVE: "1" },
                _ = { RESET: 0, LEFT: 1, RIGHT: 2, UP: 3, DOWN: 4 },
                m = { STOP: 0, LEFT: 1, RIGHT: 2, UP: 3, DOWN: 4 },
                y = { HD: 1, SD: 0 },
                v = { HD: 1, SD: 0, ULTRA_HD: 2 },
                g = { ON: 1, OFF: 0 },
                b = { MOTION: 1, SOUND: 2 },
                E = { HTTP_FLV: 0, RTMP: 1, HLS: 2, RTSP: 3 },
                S = { LIVE: 0, PLAYBACK: 1 },
                S = { SDK_PLATFORM: n.SDK_PLATFORM = r, SDK_RUNTIME_ENV: n.SDK_RUNTIME_ENV = i, SD_CARD_STATUS: n.SD_CARD_STATUS = o, SD_CARD_RECORD_MODE: n.SD_CARD_RECORD_MODE = s, VIEW_TIMELINE_MODE: n.VIEW_TIMELINE_MODE = a, SETTING_SWITCH_STATUS: n.SETTING_SWITCH_STATUS = l, DEVICE_STATUS: n.DEVICE_STATUS = u, DEVICE_ONLINE_STATUS: n.DEVICE_ONLINE_STATUS = c, DEVICE_SERVICE_STATUS: n.DEVICE_SERVICE_STATUS = h, DEVICE_FEATURE_SUPPORT: n.DEVICE_FEATURE_SUPPORT = d, PRIV_VIEW: n.PRIV_VIEW = f, PRIV_PTZ: n.PRIV_PTZ = p, PTZ_STEP_DIRECTION: n.PTZ_STEP_DIRECTION = _, PTZ_CONTINUOUS_DIRECTION: n.PTZ_CONTINUOUS_DIRECTION = m, VIDEO_RESOLUTION: n.VIDEO_RESOLUTION = y, VIDEO_ULTRA_HD_RESOLUTION: n.VIDEO_ULTRA_HD_RESOLUTION = v, SWITCH_STATUS: n.SWITCH_STATUS = g, EVENT_TYPE: n.EVENT_TYPE = b, CMDS_SCHEMA: n.CMDS_SCHEMA = E, CMDS_PLAY_TYPE: n.CMDS_PLAY_TYPE = S };
            n.default = S
        }, {}],
        144: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            n.default = { PLAYER_INIT: "playerinit", PLAYER_INIT_ERROR: "playeriniterror", PLAYER_PLAY: "playerplay", PLAYER_BUFFER: "playerbuffer", PLAYER_PAUSE: "playerpause", PLAYER_STOP: "playerstop", PLAYER_FULL_SCREEN_CHANGE: "fullscreenchange", PLAYER_ORIENTATION_CHANGE: "orientationchange", PLAYER_TIME_CHANGE: "playertimechange", PLAYER_ENDED: "playerended", PLAYER_CAN_PLAY: "playercanplay", PLAYER_PLAYBACK_RECONNECTED: "playbackReconnected", PLAYER_PLAY_ERROR: "playerplayerror", PLAYER_RECORD_ERROR: "playerrecorderror", PLAYER_MIRCO_PHONE_FAIL: "microphoneFail", PLAYER_MIRCO_PHONE_ACTIVITY: "microphoneactivity", PLAYER_AUTO_CRUISE_CHANGE: "autoCruiseChange", PLAYER_FISH_EYE_INIT: "fisheyeinit", DEVICE_ON_OFF_CHANGE: "deviceOnOffChanged", DEVICE_ONLINE_OFFLINE_CHANGE: "deviceOnlineOfflineChanged", DEVICE_GET_PTZ_PRESET: "deviceGetPtzPreset", DEVICE_GET_SDCARD_STORAGE_INFO: "DEVICE_GET_SDCARD_STORAGE_INFO", DEVICE_FORMAT_SDCARD_RESULT: "DEVICE_FORMAT_SDCARD_RESULT", CALL_GLOBAL_FUNCTION: "callGlobalFunction", VIDEO_ENCODE_TYPE: "VIDEO_ENCODE_TYPE", DEVICE_NVR_WAKE_UP: "DEVICE_NVR_WAKE_UP", CAN_GET_SDCARD_SECTION: "CAN_GET_SDCARD_SECTION", SDCARD_PLAYBACK_LIMIT: "SDCARD_PLAYBACK_LIMIT", DEVICE_RESOLUTION_CHANGE: "DEVICE_RESOLUTION_CHANGE", MACHINE_DECODE_FPS: "MACHINE_DECODE_FPS", MP4_SUPPORT_INFO: "MP4_SUPPORT_INFO" }
        }, {}],
        145: [function(e, t, n) {
            "use strict";
            t.exports = e("./webPlayer.js").default
        }, { "./webPlayer.js": 161 }],
        146: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var l = r(e("@babel/runtime/helpers/classCallCheck")),
                i = r(e("@babel/runtime/helpers/createClass")),
                u = r(e("@babel/runtime/helpers/assertThisInitialized")),
                o = r(e("@babel/runtime/helpers/inherits")),
                s = r(e("@babel/runtime/helpers/possibleConstructorReturn")),
                a = r(e("@babel/runtime/helpers/getPrototypeOf")),
                c = r(e("./util/reconnectingWebSocket")),
                h = r(e("./html5PlayerEvents")),
                e = r(e("events"));

            function d(n) { var r = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t = (0, a.default)(n); return t = r ? (e = (0, a.default)(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), (0, s.default)(this, t) } }
            var f = {},
                p = { token: "", productKey: "", isSDCardPlayback: !1 },
                e = function(e) {
                    (0, o.default)(a, e);
                    var s = d(a);

                    function a(e, t) {
                        var n;
                        (0, l.default)(this, a);
                        var r = (n = s.call(this))._options = {};
                        if (e)
                            for (var i in p) void 0 !== e[i] ? r[i] = e[i] : r[i] = p[i];
                        var o = r.isSDCardPlayback;
                        return n._messageQueue = [], n._webSocketServer = t, n._cmdId = 0, n._msgSequence = 0, n._ws = null, n._clientId = (o ? "WEBCLIENT_H5_PLAYBACK_" : "WEBCLIENT_H5_") + (new Date).getTime(), n.e = { onWebSocketOpen: n._onWebSocketOpen.bind((0, u.default)(n)), onWebSocketMessage: n._onWebSocketMessage.bind((0, u.default)(n)), onWebSocketClose: n._onWebSocketClose.bind((0, u.default)(n)), onWebSocketError: n._onWebSocketError.bind((0, u.default)(n)) }, n
                    }
                    return (0, i.default)(a, [{ key: "destroy", value: function() { Object.keys(f).forEach(this._clearTimeoutFallback.bind(this)), clearInterval(this._webSocketPingInterval), this.removeAllListeners(), this._ws && (this._ws.close(), this._ws = null) } }, { key: "setLogger", value: function(e) { this._logger = e } }, { key: "_log", value: function() { this._logger && this._logger.apply(this, arguments) } }, {
                        key: "init",
                        value: function() {
                            self.WebSocket || self.MozWebSocket || console.error("您的设备不支持 webSocket!");
                            var e = this._ws = new c.default(this._webSocketServer, null, { debug: !1, timeoutInterval: 1e4 });
                            e.onopen = this.e.onWebSocketOpen, e.onerror = this.e.onWebSocketError, e.onclose = this.e.onWebSocketClose, e.onmessage = this.e.onWebSocketMessage
                        }
                    }, {
                        key: "_onWebSocketOpen",
                        value: function() {
                            var e = this;
                            this._log("_onWebSocketOpen", new Date);
                            var t = this._options,
                                n = t.token,
                                t = t.productKey;
                            this._realSendWebSocketMsg({ type: 1, token: n, deviceId: this._clientId, channelName: "websocket", userName: "", productKey: t }), clearInterval(this._webSocketPingInterval), this._webSocketPingInterval = setInterval(function() { e._sendWebSocketPing() }, 1e4)
                        }
                    }, {
                        key: "_onWebSocketMessage",
                        value: function(e) {
                            var t = e.data,
                                t = JSON.parse(t);
                            this._log(t);
                            var n, r, i, o = t.deviceId,
                                s = t.type,
                                a = t.msg,
                                l = t.errorCode,
                                u = t.cmdId;
                            try { a = JSON.parse(t.msg) } catch (e) { a = t.msg }
                            if (130 === s) o ? this._log("deviceId:" + o) : 32 === a.type && (r = a.channel_no, n = a.wake_up_ack, this._onNVRDeviceWakeUp({ deviceId: n, channelNo: r, status: 0 === l }));
                            else if (133 === s) {
                                var c = a.action,
                                    h = a.channelNo,
                                    d = a.msgChannelNo,
                                    f = a.msgContent,
                                    p = a.msgSession,
                                    _ = a.responseSubRequest;
                                try {
                                    var m, y, v, g = h || d;
                                    c ? this._onOnlineOfflineMessage({ deviceId: o, action: c, channelNo: "number" == typeof g ? g + "" : g || "" }) : (m = f.request, f.requestParams, y = f.responseRequest, v = void 0 === (v = f.responseParams) ? {} : v, m && (4098 === m || this._onConfigurationChangeMessage({ deviceId: o, msg: a })), y && (4097 == y || 1793 === y && this._onCMDSetDeviceConfiguration(_, o, g, v, p), 1792 === y && this._onCMDGetDeviceConfiguration(_, o, g, v, p)))
                                } catch (e) { console.error("_websocket.eventEmitter.trigger exception" + e.message) }
                                u && this._doWebSocketSend({ type: 4, cameraId: o, msg: "0", cmdId: u })
                            }
                            134 === s && (i = a.channelNo, e = a.msgChannelNo, n = a.msgContent, r = a.msgSession, l = i || e, u = n.responseRequest, i = n.responseSubRequest, e = n.responseParams, n.response, 4097 === u || (1793 === u ? this._onCMDSetDeviceConfiguration(i, o, l, e, r) : this._onCMDGetDeviceConfiguration(i, o, l, e, r))), 100 == s && (this._isWebsocketConnected = !0, this._processMessageQueue())
                        }
                    }, { key: "_onWebSocketClose", value: function() { this._log("_onWebSocketClose ", new Date), this._isWebsocketConnected = !1, clearInterval(this._webSocketPingInterval) } }, { key: "_onWebSocketError", value: function() { this._log("_onWebSocketError ", new Date), this._isWebsocketConnected = !1, clearInterval(this._webSocketPingInterval) } }, {
                        key: "_processMessageQueue",
                        value: function() {
                            if (this._isWebsocketConnected)
                                for (; this._messageQueue.length;) {
                                    var e = this._messageQueue.shift();
                                    this._realSendWebSocketMsg(e)
                                }
                        }
                    }, { key: "_realSendWebSocketMsg", value: function(e) { try { this._ws.send(JSON.stringify(e)) } catch (e) { console.error("relay webSocket handle exception") } } }, { key: "_doWebSocketSend", value: function(e) { this._isWebsocketConnected ? this._realSendWebSocketMsg(e) : (this._messageQueue.push(e), this._log("webSocket is lost connection")) } }, { key: "_sendWebSocketPing", value: function() { this._doWebSocketSend({ type: 7, cmdId: ++this._cmdId }) } }, {
                        key: "_onNVRDeviceWakeUp",
                        value: function(e) {
                            var t = e.deviceId,
                                n = e.status,
                                e = e.channelNo;
                            this._log("_onNVRDeviceWakeUp", { deviceId: t, status: n, channelNo: e }), this.emit(h.default.DEVICE_NVR_WAKE_UP, { deviceId: t, status: n, channelNo: e })
                        }
                    }, {
                        key: "_onOnlineOfflineMessage",
                        value: function(e) {
                            var t, n = e.deviceId,
                                r = e.action,
                                i = e.channelNo;
                            switch (r) {
                                case "online":
                                case "offline":
                                    t = "online" === r, this._log("Event:".concat(n, " channelNo:").concat(i, "--").concat(r, ": ").concat(t)), this.emit(h.default.DEVICE_ONLINE_OFFLINE_CHANGE, { deviceId: n, status: t, channelNo: i });
                                    break;
                                case "changePassword":
                                case "insert":
                                case "insert_error":
                                case "expired":
                                case "upgrade":
                                default:
                                    this._log("Event:".concat(n, " -").concat(i, "-").concat(r))
                            }
                        }
                    }, {
                        key: "_onCMDGetDeviceConfiguration",
                        value: function(e, t, n, r, i) {
                            switch (this._clearTimeoutFallback(i), e) {
                                case 16:
                                    break;
                                case 81:
                                    this._onPtzPreset({ deviceId: t, channelNo: n, responseParams: r, msgSession: i });
                                    break;
                                case 85:
                                    this._onSDCardStorageInfo({ deviceId: t, channelNo: n, responseParams: r, msgSession: i })
                            }
                        }
                    }, { key: "_onCMDSetDeviceConfiguration", value: function(e, t, n, r, i) { this._clearTimeoutFallback(i), 87 === e && this._onSDCardFormatResult({ deviceId: t, channelNo: n, responseParams: r, msgSession: i }) } }, {
                        key: "_onConfigurationChangeMessage",
                        value: function(e) {
                            var t = e.deviceId,
                                n = e.msg,
                                r = n.msgContent,
                                i = r.request,
                                e = r.requestParams,
                                r = (r.subRequest, r.msgChannelNo),
                                r = "number" == typeof r ? r + "" : r || "";
                            if (1816 === i) { e = 1 === e.value; return this._log("Event:Turn On:".concat(t, " ---msgChannelNo:").concat(r, " --status:").concat(e)), void this.emit(h.default.DEVICE_ON_OFF_CHANGE, { deviceId: t, status: e, channelNo: r }) }
                            this._log("Event:configuration change", t, n)
                        }
                    }, {
                        key: "wakeUpGBDevice",
                        value: function(e) {
                            e = { type: 30, msg: { live_gb28181: e.deviceId }, cmdId: ++this._cmdId };
                            this._doWebSocketSend(e)
                        }
                    }, {
                        key: "wakeUpNvrDevice",
                        value: function(e) {
                            var t = e.deviceId,
                                e = e.channelNo,
                                e = { type: 30, cmdId: ++this._cmdId, msg: { wake_up: t, channel_no: e, type: 32 } };
                            this._doWebSocketSend(e)
                        }
                    }, {
                        key: "_sendWebSocketMessage",
                        value: function(e) {
                            var t = e.cmdId,
                                n = e.deviceId,
                                r = e.channelNo,
                                i = e.requestCmd,
                                o = e.subRequestCmd,
                                s = e.requestParams,
                                s = void 0 === s ? {} : s,
                                e = e.msgSession,
                                n = { cmdId: void 0 !== t ? t : ++this._cmdId, type: 3, cameraId: n };
                            !r && void 0 === r || (n.channelNo = +r), s = s || {}, n.msg = this._getWebSocketMessageBody({ channelNo: r, requestCmd: i, requestParams: s, subRequestCmd: o, msgSession: e }), this._doWebSocketSend(n)
                        }
                    }, {
                        key: "_getWebSocketMessageBody",
                        value: function(e) {
                            var t = e.channelNo,
                                n = e.requestCmd,
                                r = e.requestParams,
                                i = e.subRequestCmd,
                                e = e.msgSession,
                                r = { request: n, requestParams: r };
                            return i && -1 != i && (r.subRequest = i), !t && void 0 === t || (r.msgChannelNo = +t), { msgSession: e || a.getMessageSession(), msgSequence: this._msgSequence, msgTimeStamp: Date.now(), msgCategory: "camera", msgContent: r }
                        }
                    }, {
                        key: "setPtz",
                        value: function(e) {
                            var t = e.deviceId,
                                n = e.channelNo,
                                e = e.value;
                            this._log("websocket_setPtz");
                            e = { value: +e };
                            this._sendWebSocketMessage({ cmdId: 1, deviceId: t, channelNo: n, requestCmd: 1793, subRequestCmd: 5, requestParams: e })
                        }
                    }, {
                        key: "setPtzContinuous",
                        value: function(e) {
                            var t = e.deviceId,
                                n = e.channelNo,
                                e = e.value;
                            this._log("websocket_setPtzContinuous");
                            e = { value: +e };
                            this._sendWebSocketMessage({ cmdId: 1, deviceId: t, channelNo: n, requestCmd: 1793, subRequestCmd: 82, requestParams: e })
                        }
                    }, {
                        key: "setPtzPreset",
                        value: function(e) {
                            var t = e.deviceId,
                                n = e.channelNo,
                                r = e.pan,
                                e = e.tilt;
                            this._log("websocket_setPtzPreset");
                            e = { pan: r, tilt: e };
                            this._sendWebSocketMessage({ cmdId: 0, deviceId: t, channelNo: n, requestCmd: 1793, subRequestCmd: 81, requestParams: e })
                        }
                    }, { key: "_setTimeoutFallback", value: function(e, t, n) { f[e] = setTimeout(t, n || 3e4) } }, { key: "_clearTimeoutFallback", value: function(e) { clearTimeout(f[e]), delete f[e] } }, {
                        key: "getPtzPreset",
                        value: function(e) {
                            var t = this,
                                n = e.deviceId,
                                r = e.channelNo,
                                i = e.msgSession;
                            this._log("websocket_getPtzPreset");
                            this._sendWebSocketMessage({ cmdId: 4, deviceId: n, channelNo: r, requestCmd: 1792, subRequestCmd: 81, requestParams: { value: 0 }, msgSession: i }), this._setTimeoutFallback(i, function(e) { t._onPtzPreset({ deviceId: n, channelNo: r, msgSession: i, error: "timeout" }) })
                        }
                    }, {
                        key: "_onPtzPreset",
                        value: function(e) {
                            var t = e.deviceId,
                                n = e.channelNo,
                                r = e.responseParams,
                                i = e.msgSession,
                                e = e.error;
                            this._log("Event:onPtzPreset:".concat(t, " ---msgChannelNo:").concat(n, " --responseParams:").concat(JSON.stringify(r))), this.emit(h.default.DEVICE_GET_PTZ_PRESET, { deviceId: t, channelNo: n, responseParams: r, msgSession: i, error: e })
                        }
                    }, {
                        key: "getSDCardStorageInfo",
                        value: function(e) {
                            var t = this,
                                n = e.deviceId,
                                r = e.channelNo,
                                i = e.msgSession;
                            this._log("websocket_getSDCardStorageInfo");
                            this._sendWebSocketMessage({ deviceId: n, channelNo: r, requestCmd: 1792, subRequestCmd: 85, requestParams: {}, msgSession: i }), this._setTimeoutFallback(i, function(e) { t._onSDCardStorageInfo({ deviceId: n, channelNo: r, msgSession: i, error: "timeout" }) })
                        }
                    }, {
                        key: "_onSDCardStorageInfo",
                        value: function(e) {
                            var t = e.deviceId,
                                n = e.channelNo,
                                r = e.responseParams,
                                i = e.msgSession,
                                e = e.error;
                            this._log("Event:_onSDCardStorageInfo:".concat(t, " ---msgChannelNo:").concat(n, " --responseParams:").concat(JSON.stringify(r))), this.emit(h.default.DEVICE_GET_SDCARD_STORAGE_INFO, { deviceId: t, channelNo: n, responseParams: r, msgSession: i, error: e })
                        }
                    }, {
                        key: "formatSDCard",
                        value: function(e) {
                            var t = this,
                                n = e.deviceId,
                                r = e.channelNo,
                                i = e.msgSession;
                            this._log("websocket_formatSDCard");
                            this._sendWebSocketMessage({ deviceId: n, channelNo: r, requestCmd: 1793, subRequestCmd: 87, requestParams: {}, msgSession: i }), this._setTimeoutFallback(i, function(e) { t._onSDCardFormatResult({ deviceId: n, channelNo: r, msgSession: i, error: "timeout" }) }, 18e4)
                        }
                    }, {
                        key: "_onSDCardFormatResult",
                        value: function(e) {
                            var t = e.deviceId,
                                n = e.channelNo,
                                r = e.responseParams,
                                i = e.msgSession,
                                e = e.error;
                            this._log("Event:_onSDCardStorageInfo:".concat(t, " ---msgChannelNo:").concat(n, " --responseParams:").concat(JSON.stringify(r))), this.emit(h.default.DEVICE_GET_SDCARD_STORAGE_INFO, { deviceId: t, channelNo: n, responseParams: r, msgSession: i, error: e })
                        }
                    }], [{ key: "getMessageSession", value: function() { return Math.floor(1e9 * Math.random()) } }]), a
                }(e.default);
            n.default = e
        }, { "./html5PlayerEvents": 144, "./util/reconnectingWebSocket": 157, "@babel/runtime/helpers/assertThisInitialized": 6, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/getPrototypeOf": 12, "@babel/runtime/helpers/inherits": 13, "@babel/runtime/helpers/interopRequireDefault": 14, "@babel/runtime/helpers/possibleConstructorReturn": 17, events: 30 }],
        147: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            n.default = { CLIENT_ERROR: "ReportClientError", PLAYER_STATISTICS: "ReportPlayerStatistics", BROWSER_DETECT: "ReportBrowserDetect" }
        }, {}],
        148: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.encryptParams = function(e) { o = !1 !== e }, n.query2json = function(e) {
                if (!e) throw "lost params!";
                var e = e.split("&"),
                    r = {};
                return e.forEach(function(e, t) {
                    var n = e.split("="),
                        e = n[0];
                    r[e] = n[1]
                }), r
            }, n.compile = s, n.decompile = u, n.requestServer = c, n.apiConfig = function(e, t) {
                var n = t.productKey,
                    r = t.token,
                    i = t.deviceId,
                    t = t.channelNo;
                return c(e + "/h5player/api/open/config", { productKey: n, token: r, deviceId: i, channelNo: t }).then(function(e) { if (0 == e.code) return e.data || "" })
            }, n.reportClientInfo = function(e, t) { return c(e + "/h5player/api/open/report_client_info", t) }, n.apiShareIdToToken = function(e, t) {
                var n = t.productKey,
                    r = t.token,
                    t = t.shareId;
                return c("".concat(e, "/h5player/api/open/cloud/shareIdToToken"), { productKey: n, token: r, shareId: t }).then(function(e) { return e.data })
            };
            var a = r(e("md5")),
                l = atob("aHRtbDVfb3Blbl9hcGlfY2hlY2tfc2VjcmV0"),
                o = !0;

            function s(e) { var t = Math.floor(e.length / 2); return e = e.substring(t) + e.substring(0, t), e = escape(e), btoa((1e10 * Math.random() + 1e10).toString()).substring(0, 10) + btoa(e) }

            function u(e) {
                if (!e) return e;
                e = e.substring(10);
                var t = (e = unescape(atob(e))).length,
                    n = Math.floor(t / 2);
                return e = e.substring(t - n) + e.substring(0, t - n)
            }

            function c(n) {
                var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                r._timestamp = Date.now();
                var e = function(e, t) {
                    if (t = (t = 1 < arguments.length && void 0 !== t ? t : "") || l, e) {
                        var n = Object.keys(e);
                        n.sort();
                        for (var r = t, i = 0; i < n.length; i++) {
                            var o = n[i],
                                s = e[o];
                            "signature" !== o && null != s && (r += o + "=" + s)
                        }
                        return (0, a.default)(r)
                    }
                }(r);
                r.signature = e, o && (r = { _paramStr_: s(JSON.stringify(r)) });
                var i = [];
                return Object.keys(r).forEach(function(e) {
                    var t = r[e];
                    null != t && i.push("".concat(e, "=").concat(t))
                }), fetch(n, { headers: { "Content-Type": "application/x-www-form-urlencoded" }, mode: "cors", referrerPolicy: "no-referrer-when-downgrade", method: "post", body: i.join("&") }).then(function(e) { return o ? e.text() : e.json() }).then(function(t) { if (!o) return t; try { return t = u(t), JSON.parse(t) } catch (e) { console.error(e, n, r, t) } })
            }
        }, { "@babel/runtime/helpers/interopRequireDefault": 14, md5: 79 }],
        149: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.bmsLogin = function(e, t) {
                var n = t.productKey,
                    r = t.username,
                    i = t.password,
                    o = t.orgType,
                    s = t.verifyCode,
                    a = t.clientVersion,
                    t = t.systemVersion,
                    e = e + "/h5player/api/open/bms/login";
                return (0, l.requestServer)(e, { productKey: n, username: r, password: i, orgType: o, verifyCode: s, clientVersion: a, systemVersion: t })
            }, n.getBranchChildren = function(e, t) {
                var n = t.productKey,
                    r = t.branchId,
                    t = t.token,
                    e = e + "/h5player/api/open/bms/getBranchChildren";
                return (0, l.requestServer)(e, { productKey: n, branchId: r, token: t })
            };
            var l = e("./api")
        }, { "./api": 148 }],
        150: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.apiThirdLogin = function(e, t) {
                var n = t.productKey,
                    r = t.account,
                    i = t.loginType,
                    t = t.extra,
                    e = "".concat(e, "/h5player/api/open/cloud/thirdLogin");
                return (0, d.requestServer)(e, { productKey: n, account: r, loginType: i, extra: t })
            }, n.apiLogin = function(e, t) {
                var n = t.email,
                    r = t.password,
                    t = t.productKey,
                    e = "".concat(e, "/h5player/api/open/cloud/login");
                return (0, d.requestServer)(e, { email: n, password: r, productKey: t })
            }, n.apiSectionList = function(e, t) {
                var n = t.region,
                    r = t.channelNo,
                    i = t.channelId,
                    o = t.productKey,
                    s = t.deviceId,
                    a = t.pageSize,
                    l = void 0 === a ? 200 : a,
                    u = t.token,
                    a = t.startTime,
                    t = t.endTime,
                    e = "".concat(e, "/h5player/api/open/cloud/sectionList");
                return (0, d.requestServer)(e, { region: n, channelNo: r, channelId: i, productKey: o, deviceId: s, pageSize: l, token: u, startTime: a, endTime: t })
            }, n.apiEventList = function(e, t) {
                var n = t.region,
                    r = t.channelNo,
                    i = t.productKey,
                    o = t.channelId,
                    s = t.deviceId,
                    a = t.pageSize,
                    l = void 0 === a ? 200 : a,
                    u = t.token,
                    c = t.startTime,
                    h = t.endTime,
                    a = t.eventType,
                    t = t.filterResult,
                    e = "".concat(e, "/h5player/api/open/cloud/eventList");
                return (0, d.requestServer)(e, { region: n, channelNo: r, productKey: i, channelId: o, deviceId: s, pageSize: l, token: u, startTime: c, endTime: h, eventType: a, filterResult: t })
            }, n.apiGetSectionThumbnailUrl = function(e, t) {
                var n = t.region,
                    r = t.channelId,
                    i = t.channelNo,
                    o = t.productKey,
                    s = t.deviceId,
                    a = t.token,
                    l = t.timestamp,
                    u = t.size,
                    t = t.isPermanentStorage,
                    e = "".concat(e, "/h5player/api/open/cloud/getSectionThumbnailUrl");
                return (0, d.requestServer)(e, { region: n, channelId: r, channelNo: i, productKey: o, deviceId: s, token: a, timestamp: l, size: u, isPermanentStorage: t })
            }, n.apiMakeClip = function(e, t) {
                var n = t.region,
                    r = t.channelId,
                    i = t.productKey,
                    o = t.deviceId,
                    s = t.token,
                    a = t.startTime,
                    l = t.endTime,
                    u = t.isSync,
                    t = t.name,
                    e = "".concat(e, "/h5player/api/open/cloud/makeClip");
                return (0, d.requestServer)(e, { region: n, channelId: r, productKey: i, deviceId: o, token: s, startTime: a, endTime: l, isSync: u, name: t })
            }, n.apiGetClipFile = function(e, t) {
                var n = t.region,
                    r = t.fileId,
                    i = t.productKey,
                    o = t.token,
                    t = t.useHttps,
                    e = "".concat(e, "/h5player/api/open/cloud/getClipFile");
                return (0, d.requestServer)(e, { region: n, fileId: r, productKey: i, token: o, useHttps: t })
            }, n.apiRenameClipFile = function(e, t) {
                var n = t.region,
                    r = t.productKey,
                    i = t.fileId,
                    o = t.token,
                    t = t.name,
                    e = "".concat(e, "/h5player/api/open/cloud/renameClipFile");
                return (0, d.requestServer)(e, { region: n, productKey: r, fileId: i, token: o, name: t })
            }, n.apiDeleteClipFile = function(e, t) {
                var n = t.region,
                    r = t.productKey,
                    i = t.fileId,
                    t = t.token,
                    e = "".concat(e, "/h5player/api/open/cloud/deleteClipFile");
                return (0, d.requestServer)(e, { region: n, productKey: r, fileId: i, token: t })
            }, n.apiClipUsedTime = function(e, t) {
                var n = t.productKey,
                    r = t.deviceId,
                    t = t.token,
                    e = "".concat(e, "/h5player/api/open/cloud/clipUsedTime");
                return (0, d.requestServer)(e, { productKey: n, deviceId: r, token: t })
            }, n.apiClipFileList = function(e, t) {
                var n = t.productKey,
                    r = t.deviceId,
                    i = t.token,
                    o = t.pageSize,
                    o = void 0 === o ? 100 : o,
                    t = t.lastClipTime,
                    e = "".concat(e, "/h5player/api/open/cloud/clipFileList");
                return (0, d.requestServer)(e, { productKey: n, deviceId: r, token: i, pageSize: o, lastClipTime: t })
            }, n.apiClipThumbnail = function(e, t) {
                var n = t.region,
                    r = t.productKey,
                    i = t.fileId,
                    t = t.token,
                    e = "".concat(e, "/h5player/api/open/cloud/clipThumbnail");
                return (0, d.requestServer)(e, { region: n, productKey: r, fileId: i, token: t })
            }, n.apiGetClipThumbnailUrl = function(e, t) {
                var n = t.region,
                    r = t.productKey,
                    i = t.fileId,
                    t = t.token,
                    e = "".concat(e, "/h5player/api/open/cloud/getClipThumbnailUrl");
                return (0, d.requestServer)(e, { region: n, productKey: r, fileId: i, token: t })
            }, n.apiProxy = function(e, t) {
                var n = t.region,
                    r = t.url,
                    i = t.args,
                    o = t.contentType,
                    t = t.method,
                    e = "".concat(e, "/h5player/proxy");
                return (0, d.requestServer)(e, { region: n, url: r, args: i, contentType: o, method: t })
            };
            var d = e("./api")
        }, { "./api": 148 }],
        151: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.apiGetPlayUrl = function(e, t) {
                var n = t.productKey,
                    r = t.token,
                    i = t.deviceId,
                    o = t.shareId,
                    s = t.schema,
                    a = t.type,
                    l = t.startTime,
                    u = t.endTime,
                    t = t.useCDN,
                    e = e + "/h5player/api/open/cmds/getPlayUrl";
                return (0, c.requestServer)(e, { productKey: n, token: r, deviceId: i, shareId: o, schema: s, type: a, startTime: l, endTime: u, useCDN: t })
            };
            var c = e("./api")
        }, { "./api": 148 }],
        152: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.getSettingItem = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                if (!this._deviceSetting || !this._deviceSetting.profile) return t;
                "string" == typeof e && (e = ["general", e]);
                var r = (0, l.default)(e, 2),
                    e = r[0],
                    i = r[1],
                    o = this._deviceSetting.profile[e][0];
                try { var s = o[i] ? o[i][0] : { $: { support: "1" }, _: "" }; return ("string" == typeof s && (s = { $: { support: "1" }, _: s }), n) ? s : ("number" == typeof s._ && (s._ += ""), s._ || t) } catch (e) { console.error(i, o[i], e) }
                return t
            }, n.supportSettingItem = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                if (!this._deviceSetting) return t;
                "string" == typeof e && (e = ["general", e]);
                var r = (0, l.default)(e, 2),
                    e = r[0],
                    i = r[1],
                    o = this._deviceSetting.profile[e][0],
                    s = { $: { support: "0" }, _: "" };
                ["someoneNotification", "someoneRichText", "familierNotification", "familierRichText"].includes(i) && (s = { $: { support: "1" }, _: "" });
                try { var a = o[i] ? o[i][0] : s; return "string" == typeof a && (a = { $: { support: "1" }, _: a }), n ? a : "scheduleTurnOff" === i ? "1" === a.$.support || "3" === a.$.support || t : "1" === a.$.support || t } catch (e) { console.error(i, o[i], e) }
                return t
            }, n.saveSettingItem = function(e, s) {
                var t = this,
                    a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "general",
                    l = this._deviceSetting;
                if (!l) return void console.error("lost deviceSetting info in this");
                var u = [],
                    c = new p.default.Builder;
                "string" == typeof e && (e = [e], s = [s]);
                try {
                    e.forEach(function(e, t) {
                        var n, r, i = l.profile[a][0][e],
                            o = s[t];
                        "object" === (0, d.default)(o) ? o = ["motionRegions", "sdCard", "alarmBuzz", "cruiseSchedules"].includes(e) ? (Object.keys(o).map(function(e) { i[0][e] = o[e] }), (r = {})[e] = o, r = c.buildObject(r).split(/\r|\n/).map(function(e) { return e.trim() }).join(""), (o = r && r.split("?>")[1]).substring(o.indexOf(">") + 1, o.lastIndexOf("</"))) : (n = ["scheduleTurnOff", "scheduleNotSendAlerts"].includes(e), Object.keys(o).map(function(e) { i[0][e] = n ? [o[e]] : o[e] }), (r = c.buildObject(o)) && r.split("?>")[1]): "string" != typeof o && "number" != typeof o || (i = i || (l.profile[a][0][e] = l.profile[a][0][e] = []), ["viewTimeline", "fisheyeInstallPos", "peopleDetectionNotify"].includes(e) ? i[0] = o : (i[0] = i[0] || {}, "object" !== (0, d.default)(i[0]) && (i[0] = { $: { support: "1" }, _: i[0] }), i[0]._ = o)), u.push({ path: "profile/".concat(a, "/").concat(e), element: "<".concat(e, ">").concat(o, "</").concat(e, ">") })
                    })
                } catch (e) { return console.error(e), Promise.reject(e) }
                var n = this._options,
                    r = n.productKey,
                    i = n.token,
                    o = n.deviceId,
                    n = n.channelNo;
                return (1 < u.length ? (0, f.apiSaveMoreSetting)(this._apiServer, { productKey: r, token: i, deviceId: o, channelNo: n, paths: u }) : (0, f.apiSaveSettingByOnePath)(this._apiServer, function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? _(Object(n), !0).forEach(function(e) {
                            (0, h.default)(t, e, n[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
                    }
                    return t
                }({ productKey: r, token: i, deviceId: o, channelNo: n }, u[0]))).then(function(e) { if (e && 0 == e.code) return t._deviceSetting = l, !0; throw e }).catch(function(e) { return console.error(e), Promise.reject(e) })
            }, n.statusToString = function(e, t) {
                var n = e ? "On" : "Off";
                switch (t) {
                    case "status":
                    case "videoAdjust":
                    case "autoCruise":
                    case "peopleDetectionNotify":
                    case "faceDetection":
                    case "richText":
                    case "PIRDetection":
                        e || (n = "OffByManual");
                        break;
                    case "cameraImageRotate":
                        n = e ? "180" : "0"
                }
                return n
            }, n.statusToBoolean = function(e) { return e && 0 === e.toLowerCase().indexOf("on") }, n.valueMapToLocale = function(e, t) {
                e = e && e.toLowerCase();
                var n = t || this.props.locale,
                    r = n.on,
                    t = n.off,
                    n = n.auto,
                    n = { on: r, off: t, auto: n };
                return n[e] || n.auto
            };
            var h = r(e("@babel/runtime/helpers/defineProperty")),
                d = r(e("@babel/runtime/helpers/typeof")),
                l = r(e("@babel/runtime/helpers/slicedToArray")),
                f = e("./esdAPI"),
                p = r(e("xml2js"));

            function _(t, e) { var n, r = Object.keys(t); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), r.push.apply(r, n)), r }
        }, { "./esdAPI": 153, "@babel/runtime/helpers/defineProperty": 10, "@babel/runtime/helpers/interopRequireDefault": 14, "@babel/runtime/helpers/slicedToArray": 19, "@babel/runtime/helpers/typeof": 21, xml2js: 109 }],
        153: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.apiDeviceList = function(e, t) {
                var n = t.token,
                    r = t.productKey,
                    i = t.deviceId,
                    t = t.shareId,
                    e = e + "/h5player/api/open/esd/deviceList";
                return (0, a.requestServer)(e, { token: n, productKey: r, deviceId: i, shareId: t })
            }, n.apiDeviceInfo = function(e, t) {
                var n = t.token,
                    r = t.productKey,
                    i = t.deviceId,
                    t = t.shareId,
                    e = e + "/h5player/api/open/esd/deviceDetail";
                return (0, a.requestServer)(e, { token: n, productKey: r, deviceId: i, shareId: t })
            }, n.apiNvrDeviceList = function(e, t) {
                var n = t.token,
                    r = t.productKey,
                    t = t.deviceId,
                    e = e + "/h5player/api/open/esd/nvrDeviceList";
                return (0, a.requestServer)(e, { token: n, productKey: r, deviceId: t })
            }, n.apiNvrDeviceInfo = function(e, t) {
                var n = t.token,
                    r = t.productKey,
                    i = t.deviceId,
                    t = t.channelNo,
                    e = e + "/h5player/api/open/esd/nvrDeviceDetail";
                return (0, a.requestServer)(e, { token: n, productKey: r, deviceId: i, channelNo: t })
            }, n.apiGetCurrentSetting = function(e, t) {
                var n = t.deviceId,
                    r = t.channelNo,
                    i = t.did,
                    o = t.token,
                    t = t.type,
                    e = e + "/h5player/api/open/esd/getCurrentSetting";
                return (0, a.requestServer)(e, { deviceId: n, channelNo: r, did: i, token: o, type: t })
            }, n.apiSaveSettingByOnePath = function(e, t) {
                var n = t.deviceId,
                    r = t.channelNo,
                    i = t.path,
                    o = t.element,
                    s = t.token,
                    t = t.productKey,
                    e = e + "/h5player/api/open/esd/saveSettingByOnePath";
                return (0, a.requestServer)(e, { deviceId: n, channelNo: r, path: i, element: o, token: s, productKey: t })
            }, n.apiSaveMoreSetting = function(e, t) {
                var n = t.deviceId,
                    r = t.channelNo,
                    i = t.paths,
                    o = t.token,
                    t = t.productKey,
                    e = e + "/h5player/api/open/esd/saveMoreSetting";
                return (0, a.requestServer)(e, { deviceId: n, channelNo: r, paths: i, token: o, productKey: t })
            }, n.apiSaveJsonSettings = function(e, t) {
                var n = t.token,
                    r = t.productKey,
                    i = t.deviceId,
                    o = t.channelNo,
                    t = t.attributeList,
                    e = e + "/h5player/api/open/esd/saveJsonSettings";
                return (0, a.requestServer)(e, { token: n, productKey: r, deviceId: i, channelNo: o, attributeList: t })
            }, n.apiGetDeviceVersion = function(e, t) {
                var n = t.productKey,
                    r = t.devices,
                    t = t.serviceTypes,
                    e = e + "/h5player/api/open/esd/getDeviceVersion";
                return (0, a.requestServer)(e, { productKey: n, devices: r, serviceTypes: t })
            };
            var a = e("./api")
        }, { "./api": 148 }],
        154: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var r = function r(i) {
                var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "module",
                    s = Date.now();
                i += (-1 < i.indexOf("?") ? "&" : "?") + "_=" + Math.floor(s / 3600 / 24 / 1e3);
                var e = document.querySelector('[data-requiremodule="'.concat(o, '"]'));
                return e ? Promise.resolve(e) : new Promise(function(e) {
                    var t, n = document.createElement("script");
                    n.setAttribute("data-requiremodule", o), n.type = "text/javascript", n.charset = "utf-8", n.attachEvent ? n.attachEvent("onreadystatechange", function() { "loaded" !== n.readyState && "complete" !== n.readyState || (n.detachEvent("onreadystatechange", r), e(n), console.error("load script [".concat(o, "] complete"), Date.now() - s, new Date)) }) : (t = function() { e(n), console.error("load script [".concat(o, "] complete"), Date.now() - s, new Date) }, n.addEventListener("load", t, !1), n.addEventListener("completed", t, !1)), n.src = i, document.getElementsByTagName("head")[0].appendChild(n)
                })
            };
            n.default = r
        }, {}],
        155: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.apiRelayIP = function(e, t) {
                var n = t.token,
                    r = t.productKey,
                    i = t.channelNo,
                    o = t.deviceId,
                    t = t.channel,
                    e = e + "/h5player/api/open/lookup/getRelayIp";
                return (0, a.requestServer)(e, { token: n, productKey: r, channelNo: i, deviceId: o, channel: t })
            }, n.assignRelayIp = function(e, t) {
                var n = t.token,
                    r = t.productKey,
                    i = t.channelNo,
                    t = t.deviceId,
                    e = e + "/h5player/api/open/lookup/assignRelayIp";
                return (0, a.requestServer)(e, { token: n, productKey: r, deviceId: t, channelNo: i })
            }, n.apiSendMessage = function(e, t) {
                var n = t.sourceFrom,
                    r = t.productKey,
                    i = t.msg,
                    o = t.unifiedId,
                    s = t.deviceId,
                    t = t.channelNo,
                    e = e + "/h5player/api/open/lookup/sendMessage";
                return (0, a.requestServer)(e, { sourceFrom: n, productKey: r, msg: JSON.stringify(i), unifiedId: o, deviceId: s, channelNo: t })
            };
            var a = e("./api")
        }, { "./api": 148 }],
        156: [function(t, e, n) {
            "use strict";
            var r = t("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var i = r(t("@babel/runtime/helpers/classCallCheck")),
                o = r(t("@babel/runtime/helpers/createClass")),
                r = function() {
                    function e() {
                        (0, i.default)(this, e)
                    }
                    return (0, o.default)(e, null, [{ key: "install", value: function() { "function" != typeof self.Promise && t("es6-promise").polyfill(), "function" != typeof self.fetch && t("fetch-polyfill"), String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", { value: function(e, t) { t = 0 < t ? 0 | t : 0; return this.substring(t, t + e.length) === e } }), String.prototype.endsWith || (String.prototype.endsWith = function(e, t) { return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e }) } }]), e
                }();
            r.install(), n.default = r
        }, { "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14, "es6-promise": 29, "fetch-polyfill": 31 }],
        157: [function(e, t, n) {
            "use strict";

            function h(e, t, n) {
                var r, i = { debug: !1, automaticOpen: !0, reconnectInterval: 1e3, maxReconnectInterval: 3e4, reconnectDecay: 1.5, timeoutInterval: 2e3, maxReconnectAttempts: null };
                for (r in n = n || {}, i) void 0 !== n[r] ? this[r] = n[r] : this[r] = i[r];
                this.url = e, this.reconnectAttempts = 0, this.readyState = WebSocket.CONNECTING, this.protocol = null;
                var o, s = this,
                    a = !1,
                    l = !1,
                    u = document.createElement("div");

                function c(e, t) { var n = document.createEvent("CustomEvent"); return n.initCustomEvent(e, !1, !1, t), n }
                u.addEventListener("open", function(e) { s.onopen(e) }), u.addEventListener("close", function(e) { s.onclose(e) }), u.addEventListener("connecting", function(e) { s.onconnecting(e) }), u.addEventListener("message", function(e) { s.onmessage(e) }), u.addEventListener("error", function(e) { s.onerror(e) }), this.addEventListener = u.addEventListener.bind(u), this.removeEventListener = u.removeEventListener.bind(u), this.dispatchEvent = u.dispatchEvent.bind(u), this.open = function(n) {
                    if (o = new WebSocket(s.url, t || []), n) { if (this.maxReconnectAttempts && this.reconnectAttempts > this.maxReconnectAttempts) return } else u.dispatchEvent(c("connecting")), this.reconnectAttempts = 0;
                    (s.debug || h.debugAll) && console.debug("ReconnectingWebSocket", "attempt-connect", s.url);
                    var e = o,
                        r = setTimeout(function() {
                            (s.debug || h.debugAll) && console.debug("ReconnectingWebSocket", "connection-timeout", s.url), l = !0, e.close(), l = !1
                        }, s.timeoutInterval);
                    o.onopen = function(e) {
                        clearTimeout(r), (s.debug || h.debugAll) && console.debug("ReconnectingWebSocket", "onopen", s.url), s.protocol = o.protocol, s.readyState = WebSocket.OPEN, s.reconnectAttempts = 0;
                        var t = c("open");
                        t.isReconnect = n, n = !1, u.dispatchEvent(t)
                    }, o.onclose = function(e) {
                        var t;
                        clearTimeout(r), o = null, a ? (s.readyState = WebSocket.CLOSED, u.dispatchEvent(c("close"))) : (s.readyState = WebSocket.CONNECTING, (t = c("connecting")).code = e.code, t.reason = e.reason, t.wasClean = e.wasClean, u.dispatchEvent(t), n || l || ((s.debug || h.debugAll) && console.debug("ReconnectingWebSocket", "onclose", s.url), u.dispatchEvent(c("close"))), t = s.reconnectInterval * Math.pow(s.reconnectDecay, s.reconnectAttempts), setTimeout(function() { s.reconnectAttempts++, s.open(!0) }, t > s.maxReconnectInterval ? s.maxReconnectInterval : t))
                    }, o.onmessage = function(e) {
                        (s.debug || h.debugAll) && console.debug("ReconnectingWebSocket", "onmessage", s.url, e.data);
                        var t = c("message");
                        t.data = e.data, u.dispatchEvent(t)
                    }, o.onerror = function(e) {
                        (s.debug || h.debugAll) && console.debug("ReconnectingWebSocket", "onerror", s.url, e), u.dispatchEvent(c("error"))
                    }
                }, 1 == this.automaticOpen && this.open(!1), this.send = function(e) { if (o) return (s.debug || h.debugAll) && console.debug("ReconnectingWebSocket", "send", s.url, e), o.send(e); throw "INVALID_STATE_ERR : Pausing to reconnect websocket" }, this.close = function(e, t) { void 0 === e && (e = 1e3), a = !0, o && o.close(e, t) }, this.refresh = function() { o && o.close() }
            }
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0, h.prototype.onopen = function(e) {}, h.prototype.onclose = function(e) {}, h.prototype.onconnecting = function(e) {}, h.prototype.onmessage = function(e) {}, h.prototype.onerror = function(e) {}, h.debugAll = !1, h.CONNECTING = WebSocket.CONNECTING, h.OPEN = WebSocket.OPEN, h.CLOSING = WebSocket.CLOSING, h.CLOSED = WebSocket.CLOSED, n.default = h
        }, {}],
        158: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.apiRegionList = function(e, t) {
                var n = t.deviceId,
                    r = t.productKey,
                    t = t.token,
                    e = "".concat(e, "/h5player/api/open/soul/coreData/regionList");
                return (0, i.requestServer)(e, { token: t, productKey: r, deviceId: n })
            };
            var i = e("../api")
        }, { "../api": 148 }],
        159: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", { value: !0 }), n.userAuthBySms = function(e, t) {
                var n = t.phone,
                    r = t.code,
                    i = t.runtimeEnv,
                    t = t.clientDeviceId,
                    e = e + "/h5player/api/open/third/userAuthBySms";
                return (0, o.requestServer)(e, { phone: n, code: r, runtimeEnv: i, clientDeviceId: t })
            }, n.getVerifyCodeApp = function(e, t) {
                var n = t.phone,
                    r = t.runtimeEnv,
                    t = t.clientDeviceId,
                    e = e + "/h5player/api/open/third/getVerifyCodeApp";
                return (0, o.requestServer)(e, { phone: n, runtimeEnv: r, clientDeviceId: t })
            };
            var o = e("./api")
        }, { "./api": 148 }],
        160: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var a = r(e("@babel/runtime/regenerator")),
                m = r(e("@babel/runtime/helpers/slicedToArray")),
                i = r(e("@babel/runtime/helpers/asyncToGenerator")),
                o = r(e("@babel/runtime/helpers/classCallCheck")),
                s = r(e("@babel/runtime/helpers/createClass")),
                l = r(e("md5")),
                u = e("./util/api"),
                c = e("./util/bmsAPI"),
                h = e("./util/esdAPI"),
                p = e("./util/cloudAPI"),
                y = e("./util/soul/coreData"),
                d = e("./util/cmdsAPI"),
                f = e("./util/third"),
                v = e("./util/lookupAPI"),
                g = e("./util/deviceSetting"),
                b = r(e("xml2js")),
                E = e("./enum"),
                S = { "1080p": 3, "720p": 2, qvga: 1 },
                T = {},
                A = { platform: E.SDK_PLATFORM.NONE, runtimeEnv: E.SDK_RUNTIME_ENV.PRODUCTION, productKey: "", token: "", deviceId: "", channelNo: "", channel: "720p", isSDCardPlayback: !1, debug: !1 },
                e = function() {
                    function _(e) {
                        (0, o.default)(this, _);
                        var t = this._options = {};
                        if (e)
                            for (var n in A) void 0 !== e[n] ? t[n] = e[n] : t[n] = A[n];
                        this._initApiServer(), this._deviceInfo = {}, this._regionList = [], this._shareDeviceToken = "", this._currentUserToken = e.token
                    }
                    var e;
                    return (0, s.default)(_, [{ key: "_log", value: function() { this._options.debug && _.log.apply(_, arguments) } }, { key: "isShareDevice", get: function() { return this._options.shareId && this._shareDeviceToken } }, { key: "_initApiServer", value: function() { var e = this._apiServer = _.getApiServer(); if (!e) throw "api server error: ".concat(e) } }, {
                        key: "_initOpenApi",
                        value: (e = (0, i.default)(a.default.mark(function e() {
                            var t, n, r, i, h, d, f, o, s, p = this;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o = this._options, t = o.productKey, n = o.token, r = o.deviceId, i = o.channelNo, h = o.platform, d = o.runtimeEnv, f = o.channel, o = o.shareId) return e.next = 4, Promise.all([(0, u.apiShareIdToToken)(this._apiServer, { productKey: t, token: n, deviceId: r, shareId: o })]);
                                        e.next = 9;
                                        break;
                                    case 4:
                                        s = e.sent, o = (0, m.default)(s, 2), s = o[0], o[1], s && s.token && (n = this._options.token = this._shareDeviceToken = s.token);
                                    case 9:
                                        return s = Promise.resolve({ code: "0", data: {} }), s = [(0, u.apiConfig)(this._apiServer, { productKey: t, token: n, deviceId: r, channelNo: i }), this._getDeviceDetail(), (0, y.apiRegionList)(this._apiServer, { productKey: t, token: n, deviceId: r, channelNo: i }), h ? (0, v.apiRelayIP)(this._apiServer, { productKey: t, token: n, deviceId: r, channelNo: i, channel: f }) : s, h ? (0, v.assignRelayIp)(this._apiServer, { productKey: t, token: n, deviceId: "H5_" + r, channelNo: i }) : s], s = Promise.all(s).then(function(e) {
                                            var t = (0, m.default)(e, 5),
                                                n = t[0],
                                                r = t[1],
                                                i = t[2],
                                                o = t[3],
                                                s = t[4];
                                            if ("200" != i.code || "0" != r.code || !n || "0" != o.code) return Promise.reject("init open api failed!");
                                            var a = n || {},
                                                l = a.html5PlayerWebSocketServer,
                                                u = a.faceBorderColor,
                                                e = a.releaseVersion,
                                                t = a.aesToken,
                                                a = (a = a.html5PlayerRegionServer) || n;
                                            p._options.aesToken = encodeURIComponent(t || ""), p._regionList = i.data.deviceRegion || [], p._deviceInfo = r.data || {};
                                            n = o.data || {}, t = n.relayport, i = n.privateip, r = n.channelname, o = p._deviceInfo.region;
                                            p._log("device info region:", o);
                                            n = p.getCanPlayStatus();
                                            n.onlineStatus && n.deviceStatus || (i = (c = s.data || {}).relayhost, t = c.relayport, r = f);
                                            var c = a[o] || a["*"];
                                            return c || (a = _.getApiServer(), c = o ? o.replace("/cds", "") : a.substring(a.lastIndexOf("/") + 1)), { html5PlayerServer: c, relayServer: i ? i + ":" + t : "", webSocketServer: l ? (l[h] || {})[d] : "", channel: r || f, faceBorderColor: u, releaseVersion: e }
                                        }), h && (this._initSetting(), this.getDeviceVersion()), e.abrupt("return", s);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function() { return e.apply(this, arguments) })
                    }, {
                        key: "_getDeviceDetail",
                        value: function() {
                            var e = this._options,
                                t = e.productKey,
                                n = e.token,
                                r = e.deviceId,
                                i = e.channelNo,
                                e = e.shareId;
                            return i ? (0, h.apiNvrDeviceInfo)(this._apiServer, { productKey: t, token: n, deviceId: r, channelNo: i }) : (0, h.apiDeviceInfo)(this._apiServer, { productKey: t, token: n, deviceId: r, shareId: e })
                        }
                    }, {
                        key: "_initSetting",
                        value: function() {
                            var n = this,
                                e = this._options,
                                t = e.token,
                                r = e.deviceId,
                                e = e.channelNo;
                            (0, h.apiGetCurrentSetting)(this._apiServer, { token: t, deviceId: r, channelNo: e }).then(function(e) { "0" == e.code && b.default.parseString(e.data.content.replace(/\r|\n/g, ""), function(e, t) { e || (n._deviceSetting = t), n._log(n._deviceSetting) }) })
                        }
                    }, {
                        key: "getDeviceVersion",
                        value: function() {
                            var n = this,
                                r = this._deviceVersion;
                            if (r) return Promise.resolve(r);
                            var e = this._options,
                                t = e.productKey,
                                i = e.deviceId;
                            return (0, h.apiGetDeviceVersion)(this._apiServer, { productKey: t, devices: i, serviceTypes: "1,2" }).then(function(e) {
                                if ("0" == e.code) {
                                    var t = e.data.deviceInfo,
                                        e = t ? t[i].currentServiceVersion[1] : "",
                                        t = t ? t[i].currentServiceVersion[2] : "";
                                    return r = n._deviceVersion = { firmwareVersion: e, embeddedAppVersion: t }
                                }
                            })
                        }
                    }, {
                        key: "_getNextRegionByTime",
                        value: function(n) {
                            var e = this._regionList,
                                t = null,
                                r = e.findIndex(function(e, t) { return e.startTime < n && (!e.endTime || n <= e.endTime) });
                            return 0 < r && (t = e[r - 1]), t
                        }
                    }, {
                        key: "_getRegionByTime",
                        value: function(r) {
                            var e = this._regionList,
                                i = {};
                            return e.some(function(e, t) { var n = e.startTime < r && (!e.endTime || r <= e.endTime); return n && (i = { region: e.cdsServer, index: t }), n }), i
                        }
                    }, { key: "_mapChannelId", value: function(e) { return S[e.toLowerCase()] || "2" } }, {
                        key: "_getRelayIP",
                        value: function(e, t) {
                            var n = e.productKey,
                                r = e.token,
                                i = e.deviceId,
                                o = e.channelNo,
                                e = e.channel;
                            return (0, v.apiRelayIP)(t || this._apiServer, { productKey: n, token: r, deviceId: i, channelNo: o, channel: e })
                        }
                    }, { key: "getDeviceDetail", value: function() { return this._deviceInfo } }, { key: "getDeviceInfo", value: function() { return console.warn("[Deprecation] getDeviceInfo is deprecated, please use: player.getDeviceDetail() "), this.getDeviceDetail() } }, { key: "getDeviceStatus", value: function() { return console.warn("[Deprecation] getDeviceStatus is deprecated, please use: player.getCanPlayStatus() "), this.getCanPlayStatus() } }, {
                        key: "getCanPlayStatus",
                        value: function() {
                            var e = this._deviceInfo || {},
                                t = e.onlineStatus,
                                e = e.deviceStatus,
                                e = void 0 === e ? "" : e;
                            return { onlineStatus: (void 0 === t ? "" : t).toLowerCase() === E.DEVICE_ONLINE_STATUS.AVAILABLE, deviceStatus: e.toLowerCase() === E.DEVICE_STATUS.ON.toLowerCase() }
                        }
                    }, {
                        key: "_setPtz",
                        value: function(e) {
                            if (e = parseInt(e), isNaN(e) || e < 0 || 4 < e) throw "set ptz invalid value";
                            var t = { request: 1793, requestParams: { value: e }, subRequest: 5 },
                                n = { msgSession: 764963713, msgSequence: 0, msgTimeStamp: Date.now(), msgCategory: "camera", msgContent: t },
                                r = this._options,
                                i = r.productKey,
                                e = r.deviceId,
                                t = r.channelNo,
                                r = (this._deviceInfo || {}).unifiedId;
                            (0, v.apiSendMessage)(this._apiServer, { sourceFrom: "WEBxC_" + Date.now(), productKey: i, msg: n, unifiedId: r, deviceId: e, channelNo: t })
                        }
                    }, {
                        key: "_getSectionList",
                        value: function(e) {
                            var r = this,
                                i = e.startTime,
                                o = e.endTime,
                                t = e.pageSize,
                                n = void 0 === t ? 1e3 : t,
                                o = o || Date.now(),
                                s = this._getRegionByTime(o),
                                a = s.region,
                                l = s.index,
                                u = this._options,
                                c = u.productKey,
                                h = u.token,
                                e = u.deviceId,
                                t = u.channelNo,
                                s = u.channel,
                                u = u.shareId,
                                s = this._mapChannelId(s),
                                d = [];
                            return (0, p.apiSectionList)(this._apiServer, { region: a, channelNo: t, channelId: s, productKey: c, deviceId: e, token: h, startTime: i, endTime: o, shareId: u, pageSize: n }).then(function(e) {
                                var t = e.code,
                                    n = e.data;
                                if ("0" == t && n) { e = n.start_time, t = n.section_list, n = n.has_more, t = (d = d.concat(t)).length; return o = (0 < t ? d[t - 1].start_time : e) - 1, n || (n = l !== r._regionList.length - 1 && i < r._regionList[l].startTime) && (l++, o = r._regionList[l].endTime), { hasMore: n, sectionList: d, endTime: o } }
                                return { hasMore: !1, sectionList: d, endTime: i - 1 }
                            })
                        }
                    }, {
                        key: "getEventList",
                        value: function(e) {
                            var n = this,
                                r = e.startTime,
                                i = e.endTime,
                                t = e.eventType,
                                o = e.pageSize,
                                s = void 0 === o ? 1e3 : o,
                                i = i || Date.now(),
                                a = this._getRegionByTime(i),
                                l = a.region,
                                u = a.index,
                                c = this._options,
                                h = c.productKey,
                                d = c.token,
                                e = c.deviceId,
                                o = c.channelNo,
                                a = c.channel,
                                c = c.shareId,
                                a = this._mapChannelId(a),
                                f = [];
                            return (0, p.apiEventList)(this._apiServer, { region: l, channelNo: o, channelId: a, productKey: h, deviceId: e, token: d, startTime: r, endTime: i, eventType: t, shareId: c, pageSize: s }).then(function(e) {
                                if ("0" == e.code && e.data) {
                                    (f = f.concat(e.data.event_list)).forEach(function(e) { return e.thumbnailUrl = e.thumbnailUrl || e.imgUrl });
                                    var t = e.data.has_more;
                                    return i = (e.data.start_time || (f.length ? f[f.length - 1].start_time : 1)) - 1, t || (t = u !== n._regionList.length - 1 && r < n._regionList[u].startTime) && (u++, i = n._regionList[u].endTime), { hasMore: t, eventList: f, endTime: i }
                                }
                                return { hasMore: !1, eventList: f, endTime: r - 1 }
                            })
                        }
                    }, {
                        key: "getSectionThumbnailUrl",
                        value: function(e) {
                            var t = e.timestamp,
                                e = e.size,
                                e = void 0 === e ? "160x90" : e;
                            return console.warn("[Deprecation] getSectionThumbnailUrl is deprecated, please use: player.getPlaybackThumbnailUrl({ timestamp, size } "), this.getPlaybackThumbnailUrl({ timestamp: t, size: e })
                        }
                    }, {
                        key: "getPlaybackThumbnailUrl",
                        value: function(e) {
                            var t = e.timestamp,
                                n = e.size,
                                r = void 0 === n ? "160x90" : n,
                                i = this._getRegionByTime(t).region;
                            if (!i) return console.error("时间点：".concat(t, "，设备未被添加或未在线！")), Promise.resolve();
                            var o = this._options,
                                s = o.productKey,
                                a = o.token,
                                l = o.deviceId,
                                u = o.channelNo,
                                e = o.channel,
                                n = o.isPermanentStorage,
                                e = (o.shareId, this._mapChannelId(e));
                            return (0, p.apiGetSectionThumbnailUrl)(this._apiServer, { region: i, channelId: e, channelNo: u, productKey: s, deviceId: l, token: a, timestamp: Math.round(t), size: r, isPermanentStorage: n + "" }).then(function(e) { if ("0" == e.code) return e.data || "" })
                        }
                    }, {
                        key: "makeClip",
                        value: function(e) {
                            var t = e.region,
                                n = e.startTime,
                                r = e.endTime,
                                e = e.name;
                            return console.warn("[Deprecation] makeClip is deprecated, please use: player.generateClip({ region, startTime, endTime, name } "), this.generateClip({ region: t, startTime: n, endTime: r, name: e })
                        }
                    }, {
                        key: "generateClip",
                        value: function(e) {
                            var t = e.region,
                                n = e.startTime,
                                r = e.endTime,
                                i = e.name;
                            if (!i) return Promise.reject("make clip need name");
                            if (!(t = t || this._getRegionByTime(n).region)) return Promise.reject("make clip region error");
                            if (12e5 < r - n) return Promise.reject(" make clip  duration must be less than 20 minutes");
                            if (r <= n) return Promise.reject(" make clip  startTime must be less than endTime");
                            var o = this._options,
                                s = o.productKey,
                                a = o.deviceId,
                                e = o.channel,
                                o = o.token,
                                e = this._mapChannelId(e);
                            return (0, p.apiMakeClip)(this._apiServer, { region: t, channelId: e, productKey: s, deviceId: a, token: o, startTime: n, endTime: r, name: i }).then(function(e) { return "0" == e.code && e.data.fileId ? e.data.fileId : Promise.reject(e.data) })
                        }
                    }, {
                        key: "clipFileList",
                        value: function(e, t) {
                            var n = 1 < arguments.length && void 0 !== t ? t : 100;
                            console.warn("[Deprecation] clipFileList is deprecated, please use: WebPlayer.getClipList({ productKey, deviceId, token, lastClipTime, pageSize}) ");
                            var r = this._options,
                                i = r.productKey,
                                t = r.token,
                                r = r.deviceId;
                            return _.getClipList({ productKey: i, deviceId: r, token: t, lastClipTime: e, pageSize: n })
                        }
                    }, {
                        key: "getClipFile",
                        value: function(e) {
                            var t = e.region,
                                n = e.fileId;
                            console.warn("[Deprecation] getClipFile is deprecated, please use: WebPlayer.getClipDetail({ productKey, token, region, fileId }) ");
                            var r = this._options,
                                e = r.productKey,
                                r = r.token;
                            return _.getClipDetail({ productKey: e, token: r, region: t, fileId: n })
                        }
                    }, {
                        key: "clipFileDelete",
                        value: function(e) {
                            var t = e.region,
                                n = e.fileId;
                            console.warn("[Deprecation] clipFileDelete is deprecated, please use: WebPlayer.clipRemove({ productKey, token, region, fileId }) ");
                            var r = this._options,
                                e = r.productKey,
                                r = r.token;
                            return _.clipRemove({ productKey: e, token: r, region: t, fileId: n })
                        }
                    }, {
                        key: "clipFileRename",
                        value: function(e) {
                            var t = e.region,
                                n = e.fileId,
                                r = e.name;
                            console.warn("[Deprecation] clipFileRename is deprecated, please use: WebPlayer.clipRename({ productKey, token, region, fileId, name })");
                            var i = this._options,
                                e = i.productKey,
                                i = i.token;
                            return _.clipRename({ productKey: e, token: i, region: t, fileId: n, name: r })
                        }
                    }, {
                        key: "clipFilePlayUrl",
                        value: function(e) {
                            var t = e.region,
                                n = e.fileId;
                            console.warn("[Deprecation] clipFilePlayUrl is deprecated");
                            var r = this._options,
                                i = r.productKey,
                                e = r.token,
                                r = r.aesToken;
                            return this._clipPlayUrl({ productKey: i, token: r || e, region: t, fileId: n })
                        }
                    }, {
                        key: "_clipPlayUrl",
                        value: function(e) {
                            var t = e || {},
                                n = t.productKey,
                                r = t.token,
                                e = t.fileId;
                            return "".concat(t.region, "/core/v1/file/download?client_id=").concat(n, "&token=").concat(r, "&fileId=").concat(e, "&tmp=").concat(Date.now())
                        }
                    }, {
                        key: "clipDownloadUrl",
                        value: function(e) {
                            var o = this,
                                t = e.startTime,
                                n = e.endTime,
                                r = e.name,
                                s = this._getRegionByTime(t).region,
                                e = this._options,
                                a = e.productKey,
                                l = e.aesToken,
                                u = e.token;
                            return this.generateClip({ region: s, startTime: t, endTime: n, name: r }).then(function(i) {
                                return new Promise(function(n, r) {
                                    if (!i) return r("make clip failed");
                                    T[i] = setInterval(function() {
                                        (0, p.apiGetClipFile)(o._apiServer, { region: s, fileId: i, productKey: a, token: u }).then(function(e) { var t; "0" == e.code && e.data && ("1" === e.data.uploadStatus ? (clearInterval(T[i]), T[i] = void 0, t = o._clipPlayUrl({ region: e.data.downloadServer, fileId: i, token: l || u, productKey: a }), n(t)) : e.data.uploadError && (clearInterval(T[i]), T[i] = void 0, r(e.data.uploadError))) })
                                    }, 5e3)
                                })
                            })
                        }
                    }, {
                        key: "clipFileDeleteAll",
                        value: function() {
                            console.warn("[Deprecation] clipFileDeleteAll is deprecated, please use: WebPlayer.removeAllClip({ productKey, deviceId, token })");
                            var e = this._options,
                                t = e.productKey,
                                n = e.token,
                                e = e.deviceId;
                            return _.removeAllClip({ productKey: t, deviceId: e, token: n })
                        }
                    }, {
                        key: "getClipThumbnailUrl",
                        value: function(e) {
                            var t = e.region,
                                n = e.fileId;
                            console.warn("[Deprecation] getClipThumbnailUrl is deprecated ");
                            var r = this._options,
                                i = r.productKey,
                                e = r.token,
                                r = r.aesToken;
                            return "".concat(t, "/core/v1/file/thumbnail?client_id=").concat(i, "&fileId=").concat(n, "&token=").concat(r || e)
                        }
                    }, { key: "setOnOff", value: function(e) { e = 0 < arguments.length && void 0 !== e ? e : E.SWITCH_STATUS.ON; return g.saveSettingItem.call(this, "status", (0, g.statusToString)(e === E.SWITCH_STATUS.ON, "status")) } }, { key: "setResolution", value: function(e) { e = 0 < arguments.length && void 0 !== e ? e : E.VIDEO_RESOLUTION.HD; return g.saveSettingItem.call(this, "HDVideo", (0, g.statusToString)(e === E.VIDEO_RESOLUTION.HD, "HDVideo")) } }, {
                        key: "setUltraHDResolution",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e ? e : E.VIDEO_ULTRA_HD_RESOLUTION.HD,
                                n = this._options,
                                r = n.token,
                                i = n.productKey,
                                e = n.deviceId,
                                n = n.channelNo,
                                t = JSON.stringify([{ featureEnum: "UltraHDResolution", value: { value: t } }]);
                            return (0, h.apiSaveJsonSettings)(this._apiServer, { token: r, productKey: i, deviceId: e, channelNo: n, attributeList: t }).then(function(e) { if (0 != e.code) throw e })
                        }
                    }, { key: "goFullScreen", value: function(e) { console.warn("[Deprecation] goFullScreen is deprecated, please use: WebPlayer.requestFullScreen(el)"), _.requestFullScreen(e) } }, { key: "isFullScreen", value: function() { return console.warn("[Deprecation] isFullScreen is deprecated, please use: WebPlayer.isFullScreen()"), _.isFullScreen() } }, { key: "exitFullScreen", value: function() { return console.warn("[Deprecation] exitFullScreen is deprecated, please use: WebPlayer.exitFullScreen()"), _.exitFullScreen() } }, { key: "_isNvrSupportPTZ", value: function() { try { return g.supportSettingItem.call(this, "ptz", !1) } catch (e) { console.error("_isNvrSupportPTZ", e) } return !1 } }, { key: "_getDeviceFeature", value: function() { var t = this._deviceInfo.comment; if (t) { var e = t.replace("[", "{").replace("]", "}").replace(/'/g, '"').replace(/\r|\n/g, ""); try { return JSON.parse(e).FEATURE } catch (e) { console.error(e, t) } } else console.error("device comment error") } }, { key: "_isSupportPTZ", value: function() { var e = this._getDeviceFeature(); return !!e && 65535 == (65519 | e) } }, { key: "isFishEye", value: function(e) { return 65535 == (63487 | (e = e || this._getDeviceFeature())) } }, { key: "isDeviceHasMicroPhone", value: function(e) { e = "0" == (512 & (e = e || this._getDeviceFeature())); return e = e || 0 < (this._deviceInfo || {}).supportValues.mic } }, { key: "isDeviceHasSpeaker", value: function(e) { e = "0" == (8192 & (e = e || this._getDeviceFeature())); return e = e || 0 < (this._deviceInfo || {}).supportValues.speaker } }, {
                        key: "isDeviceSupportAudioTalk",
                        value: function() {
                            var e = this._getDeviceFeature(),
                                t = this.isDeviceHasMicroPhone(e),
                                e = this.isDeviceHasSpeaker(e),
                                e = t && e;
                            return "0" == this._options.deviceId.trim().indexOf("xxxxS_gb_") && (e = !1), e
                        }
                    }, { key: "isSupportSDCard", value: function() { return g.supportSettingItem.call(this, "sdCard", !1) } }, {
                        key: "getSDCardStatus",
                        value: function() {
                            if (!this.isSupportSDCard()) return null;
                            var e = g.getSettingItem.call(this, "sdCard", "", "full");
                            if (e) {
                                var t = e.status,
                                    t = void 0 === t ? [] : t,
                                    e = e.recordModel,
                                    e = void 0 === e ? [] : e;
                                return { status: t[0] || E.SD_CARD_STATUS.NONE, recordModel: e[0] || E.SD_CARD_RECORD_MODE.NO }
                            }
                        }
                    }, {
                        key: "setSDCardRecordMode",
                        value: function(e) {
                            var t = this.getSDCardStatus();
                            if (!t) return Promise.reject("sd card status error");
                            e = { status: t.status[0], recordModel: e + "" };
                            return g.saveSettingItem.call(this, "sdCard", e)
                        }
                    }, { key: "getViewTimelineMode", value: function() { return g.getSettingItem.call(this, "viewTimeline", "1") } }, { key: "setViewTimelineMode", value: function(e) { return g.saveSettingItem.call(this, "viewTimeline", e) } }, { key: "isSupportSDCardPlayback", value: function() { return (this._deviceInfo || {}).supportValues.SDCardRelayPlayback === E.DEVICE_FEATURE_SUPPORT.YES } }, { key: "isSupportSDCardFormat", value: function() { return (this._deviceInfo || {}).supportValues.SDCardFormat === E.DEVICE_FEATURE_SUPPORT.YES } }], [{
                        key: "log",
                        value: function() {
                            var e = _.toArray(arguments),
                                t = new Date,
                                t = t.toLocaleString() + "." + t.getTime() % 1e3;
                            e.unshift("[" + t + "][WebPlayer] "), console.info.apply(console, e)
                        }
                    }, { key: "toArray", value: function(e) { if (e) { for (var t = [], n = 0, r = e.length; n < r; n++) t.push(e[n]); return t } } }, { key: "reportClientInfo", value: function(e, t, n) { return (0, u.reportClientInfo)(n || _.getApiServer(), { type: e, info: JSON.stringify(t) }) } }, {
                        key: "getApiServer",
                        value: function() {
                            var e = self._WEB_PLAYER_STATIC_API_SERVER_;
                            if (e) return e;
                            var t, n = document.currentScript;
                            if (n && (t = n.src), !t)
                                for (var r = document.getElementsByTagName("script"), i = r.length - 1; 0 <= i; i--) { var o = r[i].getAttribute("src"); if (o && (-1 < o.indexOf("/dist/webPlayer.min.js") || -1 < o.indexOf("/dist/html5Player.min.js"))) { t = o; break } }
                            return t && -1 < t.indexOf("/dist/html5Player.min.js") && console.warn("[Deprecation] html5Player.min.js is deprecated, please use: webPlayer.min.js"), t && -1 < t.indexOf("://") && (e = t.substring(0, t.indexOf("/", t.indexOf("://") + 3))), e = e || location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : ""), self._WEB_PLAYER_STATIC_API_SERVER_ = e
                        }
                    }, {
                        key: "getClipUsedTime",
                        value: function(e) {
                            var t = e || {},
                                n = t.productKey,
                                e = t.deviceId,
                                t = t.token;
                            return (0, p.apiClipUsedTime)(_.getApiServer(), { productKey: n, deviceId: e, token: t }).then(function(e) { if ("0" == e.code) return e.data })
                        }
                    }, {
                        key: "getClipList",
                        value: function(e) {
                            var e = e || {},
                                t = e.productKey,
                                n = e.deviceId,
                                r = e.token,
                                i = e.lastClipTime,
                                e = e.pageSize,
                                o = void 0 === e ? 100 : e,
                                s = [];
                            return (0, p.apiClipFileList)(_.getApiServer(), { productKey: t, deviceId: n, token: r, lastClipTime: i, pageSize: o }).then(function(e) { return "0" == e.code && e.data ? (s = s.concat(e.data.data_list), e.data.has_more ? (i = e.data.last_clip_time, _.getClipList({ productKey: t, deviceId: n, token: r, lastClipTime: i, pageSize: o }).then(function(e) { return s = s.concat(e) })) : s) : s })
                        }
                    }, {
                        key: "getClipDetail",
                        value: function(e) {
                            var t = e || {},
                                n = t.productKey,
                                r = t.token,
                                e = t.region,
                                t = t.fileId;
                            return (0, p.apiGetClipFile)(_.getApiServer(), { region: e, fileId: t, productKey: n, token: r }).then(function(e) { if ("0" == e.code) return e.data })
                        }
                    }, {
                        key: "clipRemove",
                        value: function(e) {
                            var t = e || {},
                                n = t.productKey,
                                r = t.token,
                                e = t.region,
                                t = t.fileId;
                            return (0, p.apiDeleteClipFile)(_.getApiServer(), { region: e, productKey: n, fileId: t, token: r }).then(function(e) { return "0" == e.code })
                        }
                    }, {
                        key: "clipRename",
                        value: function(e) {
                            var t = e || {},
                                n = t.productKey,
                                r = t.token,
                                i = t.region,
                                e = t.fileId,
                                t = t.name;
                            return (0, p.apiRenameClipFile)(_.getApiServer(), { region: i, productKey: n, fileId: e, token: r, name: t }).then(function(e) { return "0" == e.code })
                        }
                    }, {
                        key: "removeAllClip",
                        value: function(e) {
                            var t = e || {},
                                r = t.productKey,
                                e = t.deviceId,
                                i = t.token,
                                t = Date.now();
                            return _.getClipList({ productKey: r, deviceId: e, token: i, pageSize: 200, lastClipTime: t }).then(function(e) {
                                if (!e.length) return !0;
                                var n = {};
                                e.forEach(function(e) {
                                    var t = e.downUrl;
                                    (n[t] = n[t] || []).push(e)
                                });
                                e = Object.keys(n).map(function(e) { var t = (n[e] || []).map(function(e) { return e.file_id }); return _.clipRemove({ region: e, fileId: t, productKey: r, token: i }) });
                                return Promise.all(e).then(function(e) { return e.every(function(e) { return e }) })
                            })
                        }
                    }, {
                        key: "renameDevice",
                        value: function(e) {
                            var t = e.productKey,
                                n = e.token,
                                r = e.channelNo,
                                i = e.deviceId,
                                e = e.deviceName,
                                e = void 0 === e ? "" : e;
                            if (!e) return Promise.reject("device name is empty");
                            e = "<title>".concat(e, "</title>");
                            return (0, h.apiSaveSettingByOnePath)(_.getApiServer(), { deviceId: i, channelNo: r, path: "profile/general/title", element: e, token: n, productKey: t })
                        }
                    }, {
                        key: "requestFullScreen",
                        value: function(e) {
                            var t = e.requestFullScreen || e.mozRequestFullScreen || e.webkitRequestFullScreen || e.msRequestFullscreen;
                            t && t.call(e)
                        }
                    }, { key: "isFullScreen", value: function() { return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) } }, { key: "exitFullScreen", value: function() { var e;!_.isFullScreen() || (e = document.cancelFullScreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen) && e.call(document) } }, {
                        key: "thirdLogin",
                        value: function(e) {
                            var t = e.productKey,
                                n = e.account,
                                r = e.loginType,
                                e = e.extra,
                                e = void 0 === e ? {} : e;
                            return (0, p.apiThirdLogin)(_.getApiServer(), { productKey: t, account: n, loginType: r, extra: JSON.stringify(e) }).then(function(e) { if ("200" == e.code) return e.data; throw e.data })
                        }
                    }, {
                        key: "login",
                        value: function(e) {
                            var t = e.username,
                                n = e.password,
                                e = e.productKey;
                            return (0, p.apiLogin)(_.getApiServer(), { email: t, password: n, productKey: e })
                        }
                    }, {
                        key: "bmsLogin",
                        value: function(e) {
                            var t = e.username,
                                n = e.password,
                                e = { username: t, productKey: e.productKey, orgType: e.orgType, verifyCode: e.verifyCode, clientVersion: e.clientVersion, systemVersion: e.systemVersion };
                            return n && (e.password = (0, l.default)(n)), (0, c.bmsLogin)(_.getApiServer(), e)
                        }
                    }, {
                        key: "getBranchChildren",
                        value: function(e) {
                            var t = e.token,
                                n = e.branchId,
                                e = e.productKey;
                            return (0, c.getBranchChildren)(_.getApiServer(), { token: t, branchId: n, productKey: e })
                        }
                    }, {
                        key: "getDeviceList",
                        value: function(e) {
                            var t = e.token,
                                n = e.productKey,
                                r = e.deviceId,
                                e = e.shareId;
                            return (0, h.apiDeviceList)(_.getApiServer(), { token: t, productKey: n, deviceId: r, shareId: e }).then(function(e) { if ("0" == e.code) return e.data.devicelist || []; throw e.data })
                        }
                    }, {
                        key: "nvrDeviceList",
                        value: function(e) {
                            var t = e.deviceId,
                                n = e.token,
                                e = e.productKey;
                            return (0, h.apiNvrDeviceList)(_.getApiServer(), { deviceId: t, token: n, productKey: e })
                        }
                    }, {
                        key: "proxyRequest",
                        value: function(e) {
                            var t = e.url,
                                n = e.args,
                                r = e.contentType,
                                e = e.method;
                            return (0, p.apiProxy)(_.getApiServer(), { url: t, args: n, contentType: r, method: e })
                        }
                    }, {
                        key: "getPlayUrl",
                        value: function(e) {
                            var t = e.productKey,
                                n = e.token,
                                r = e.deviceId,
                                i = e.shareId,
                                o = e.schema,
                                s = e.type,
                                a = e.startTime,
                                l = e.endTime,
                                e = e.useCDN;
                            return (0, d.apiGetPlayUrl)(_.getApiServer(), { productKey: t, token: n, deviceId: r, shareId: i, schema: o, type: s, startTime: a, endTime: l, useCDN: e }).then(function(e) { if ("0" == e.code) return e.data.url }).catch(console.error)
                        }
                    }, {
                        key: "__getVerifyCodeApp",
                        value: function(e) {
                            var t = e.phone,
                                n = e.runtimeEnv,
                                e = e.clientDeviceId;
                            return (0, f.getVerifyCodeApp)(_.getApiServer(), { phone: t, runtimeEnv: n, clientDeviceId: e })
                        }
                    }, {
                        key: "__userAuthBySms",
                        value: function(e) {
                            var t = e.phone,
                                n = e.code,
                                r = e.runtimeEnv,
                                e = e.clientDeviceId;
                            return (0, f.userAuthBySms)(_.getApiServer(), { phone: t, code: n, runtimeEnv: r, clientDeviceId: e })
                        }
                    }]), _
                }();
            n.default = e
        }, { "./enum": 143, "./util/api": 148, "./util/bmsAPI": 149, "./util/cloudAPI": 150, "./util/cmdsAPI": 151, "./util/deviceSetting": 152, "./util/esdAPI": 153, "./util/lookupAPI": 155, "./util/soul/coreData": 158, "./util/third": 159, "@babel/runtime/helpers/asyncToGenerator": 7, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/interopRequireDefault": 14, "@babel/runtime/helpers/slicedToArray": 19, "@babel/runtime/regenerator": 23, md5: 79, xml2js: 109 }],
        161: [function(e, t, n) {
            "use strict";
            var r = e("@babel/runtime/helpers/interopRequireDefault"),
                s = e("@babel/runtime/helpers/typeof");
            Object.defineProperty(n, "__esModule", { value: !0 }), n.default = void 0;
            var C = r(e("@babel/runtime/helpers/slicedToArray")),
                a = r(e("@babel/runtime/regenerator")),
                l = r(e("@babel/runtime/helpers/asyncToGenerator")),
                u = r(e("@babel/runtime/helpers/classCallCheck")),
                c = r(e("@babel/runtime/helpers/createClass")),
                h = r(e("@babel/runtime/helpers/assertThisInitialized")),
                d = r(e("@babel/runtime/helpers/inherits")),
                i = r(e("@babel/runtime/helpers/possibleConstructorReturn")),
                o = r(e("@babel/runtime/helpers/getPrototypeOf")),
                f = r(e("@babel/runtime/helpers/defineProperty")),
                p = r(e("./util/polyfill.js")),
                I = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== s(e) && "function" != typeof e) return { default: e };
                    t = E(t);
                    if (t && t.has(e)) return t.get(e);
                    var n, r = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (n in e) { var o; "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && ((o = i ? Object.getOwnPropertyDescriptor(e, n) : null) && (o.get || o.set) ? Object.defineProperty(r, n, o) : r[n] = e[n]) }
                    r.default = e, t && t.set(e, r);
                    return r
                }(e("./enum")),
                _ = r(e("./webOpenAPI")),
                m = r(e("./relayWebSocket")),
                y = r(e("./html5PlayerEvents")),
                v = r(e("./reportTypes")),
                g = r(e("events")),
                b = r(e("./util/loadScript")),
                D = e("./util/api"),
                r = r(e("flvjs"));

            function E(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (E = function(e) { return e ? n : t })(e)
            }

            function S(t, e) { var n, r = Object.keys(t); return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable })), r.push.apply(r, n)), r }

            function T(n) { var r = function() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0 } catch (e) { return !1 } }(); return function() { var e, t = (0, o.default)(n); return t = r ? (e = (0, o.default)(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), (0, i.default)(this, t) } }
            p.default.install();

            function A(e) { return Math.floor(393216 * e / 1080) }
            var w = e("../core/audioEncodeType.js"),
                k = e("../core/videoEncodeType.js"),
                L = e("../core/websocketCmdType"),
                R = r.default.LoggingControl,
                O = r.default.Browser,
                e = r.default.isSupported,
                P = r.default.ZoomDomElement,
                M = r.default.Events,
                N = r.default.createPlayer,
                x = r.default.FlvTranslateTypes,
                B = r.default.Features,
                U = O.mobile,
                F = O.version.major,
                j = -1,
                W = B.supportAudioContext(),
                V = !O.safari && W && B.supportAudioRecord(),
                r = function() {
                    var e = !!self.WebAssembly && !!self.fetch;
                    if (n = e && !!self.SharedArrayBuffer && !!self.Atomics && O.chrome && 78 <= F) try {
                        var t = new WebAssembly.Memory({ initial: 1, maximum: 1, shared: !0 }),
                            n = n && t.buffer instanceof self.SharedArrayBuffer
                    } catch (e) { n = !1, console.error(e) }
                    return { isSupportWASM: e, useMultiThreadPlayer: n }
                }(),
                G = r.isSupportWASM,
                H = r.useMultiThreadPlayer,
                q = !!e(),
                e = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser") && O.android,
                K = navigator.hardwareConcurrency || 1,
                X = O.edge || O.safari && (O.mac && 13 <= F || (O.iphone || O.ipad) && 11 <= F) || e,
                z = 1e3,
                Y = self.__player_jssdk_release_date || Math.floor(Date.now() / 3600 * z),
                Q = { productKey: "", token: "", deviceId: "", channelNo: "", shareId: "", channel: "720p", downloadServer: "", playerContainer: "", html5PlayerServer: "", clientId: "", debug: !1, deviceName: "", useWebSocket: !0, hasAudio: !0, isFishEye: !1, region: "", relayServer: "", isPermanentStorage: !1, isSDKMode: !self.__old_js_sdk_html5_player_, hasBaseUI: !0, platform: I.SDK_PLATFORM.NONE, runtimeEnv: I.SDK_RUNTIME_ENV.PRODUCTION, hasCloudGb: !1, isSDCardPlayback: !1, enableLiveBuffer: !1, stashInitialSize: A(1080), noThread: !1, disableLive: !1, reportInterval: 15, mp4Url: "", playUrl: "", mp4Poster: "", playbackNeedBufferTime: O.safari ? 12 : 8, liveBufferSeconds: 3, appId: "bms" },
                e = function(e) {
                    (0, d.default)(o, e);
                    var t, i = T(o);

                    function o(e) {
                        var l;
                        (0, u.default)(this, o), l = i.call(this, e), (0, f.default)((0, h.default)(l), "_onDeviceOnOffChanged", function(e) {
                            var t = e.deviceId,
                                n = e.status,
                                r = e.channelNo,
                                e = l._options;
                            t !== e.deviceId || r !== e.channelNo && r !== j || (l._deviceInfo.deviceStatus = n ? "On" : "Off", l.emit(y.default.DEVICE_ON_OFF_CHANGE, { deviceId: t, status: n, channelNo: r }))
                        }), (0, f.default)((0, h.default)(l), "_onDeviceOnlineOfflineChanged", function(e) {
                            var t = e.deviceId,
                                n = e.status,
                                r = e.channelNo,
                                e = l._options;
                            t !== e.deviceId || r !== e.channelNo && r !== j || (l._deviceInfo.onlineStatus = n ? "available" : "unavailable", l.emit(y.default.DEVICE_ONLINE_OFFLINE_CHANGE, { deviceId: t, status: n, channelNo: r }))
                        }), (0, f.default)((0, h.default)(l), "_onNVRDeviceWakeUp", function(e) {
                            var t = e.deviceId,
                                n = e.status,
                                r = e.channelNo,
                                e = l._options;
                            l._log("html5player _onNVRDeviceWakeUp", { deviceId: t, status: n, channelNo: r }), t === e.deviceId && r === e.channelNo && (l._initPlayer(!0), n ? (l._isInitOpenApi = !0, l._sendInitMessage()) : l.emit(y.default.PLAYER_INIT_ERROR, { deviceId: t, status: n, channelNo: r }))
                        }), (0, f.default)((0, h.default)(l), "_sendInitMessage", function() {
                            var e, t, n;
                            G && !l._initWASMModule || (e = (n = l._options).isFishEye, t = n.mp4Url, n = n.isSDKMode, e && !self.FishEyeEffect || t && G && !self.WebPlayerUI || n && !l._isInitOpenApi && !t || l._alreadySendInitMessage || (l._alreadySendInitMessage = !0, l.emit(y.default.PLAYER_INIT)))
                        }), (0, f.default)((0, h.default)(l), "_onDeviceGetPtzPreset", function(e) {
                            var t = e.deviceId,
                                n = (e.channelNo, e.responseParams),
                                r = e.msgSession,
                                i = e.error;
                            if (t === l._options.deviceId) {
                                var o = n || {},
                                    e = o.pan,
                                    t = o.tilt;
                                if (r && l._onRelayMessageCallbacks[r]) {
                                    n = l._onRelayMessageCallbacks[r], o = n.resolve, n = n.reject;
                                    if (i) return n(i);
                                    o({ pan: e, tilt: t }), delete l._onRelayMessageCallbacks[r]
                                }
                            }
                        }), (0, f.default)((0, h.default)(l), "_onDeviceGetSDCardStorageInfo", function(e) {
                            var t = e.deviceId,
                                n = (e.channelNo, e.responseParams),
                                r = e.msgSession,
                                i = e.error;
                            if (t === l._options.deviceId && r && l._onRelayMessageCallbacks[r]) {
                                e = l._onRelayMessageCallbacks[r], t = e.resolve, e = e.reject;
                                if (i) return e(i);
                                t(n || []), delete l._onRelayMessageCallbacks[r]
                            }
                        }), (0, f.default)((0, h.default)(l), "_onDeviceFormatSDCardResult", function(e) {
                            var t = e.deviceId,
                                n = (e.channelNo, e.responseParams),
                                r = e.msgSession,
                                i = e.error;
                            if (t === l._options.deviceId && r && l._onRelayMessageCallbacks[r]) {
                                e = l._onRelayMessageCallbacks[r], t = e.resolve, e = e.reject;
                                if (i) return e(i);
                                t(n), delete l._onRelayMessageCallbacks[r]
                            }
                        }), (0, f.default)((0, h.default)(l), "_onVisibilityChange", function(e) {
                            var t = document.hidden;
                            l._log("html5Player inner iframe isHidden:" + t), t ? l.pause() : l._isPause && l.resume()
                        }), (0, f.default)((0, h.default)(l), "_onFullScreenChange", function(e) {
                            setTimeout(function() {
                                var t = y.default.PLAYER_FULL_SCREEN_CHANGE;
                                l.emit(t), setTimeout(function(e) { return l._refreshControlBarUI(t) }, 50)
                            }, 100)
                        }), (0, f.default)((0, h.default)(l), "_onZoomElementClick", function() { l._controlBarUI && l._controlBarUI.toggleControlPlayPauseMobileVisible() }), (0, f.default)((0, h.default)(l), "_onOrientationChange", function(e) {
                            var t = y.default.PLAYER_ORIENTATION_CHANGE;
                            setTimeout(function(e) { l.emit(t), setTimeout(function(e) { return l._refreshControlBarUI(t) }, 50) }, 100)
                        }), (0, f.default)((0, h.default)(l), "_onStatisticsInfo", function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                t = l._options,
                                n = t.reportInterval,
                                r = t.clientId,
                                i = t.deviceId,
                                o = t.shareId,
                                s = t.mp4Url,
                                a = t.playUrl;
                            l._lastReportStatisticsTime = l._lastReportStatisticsTime || 0, l._downloadSpeedSum = l._downloadSpeedSum || 0, l._downloadSpeedCounter = l._downloadSpeedCounter || 0, l._downloadSpeedSum += e.speed || 0, l._downloadSpeedCounter++;
                            t = Date.now(), n *= z;
                            t - l._lastReportStatisticsTime >= n && (l._log(e), l._lastReportStatisticsTime = t, t = Math.round(l._downloadSpeedSum / l._downloadSpeedCounter), l._lastReportStatisticsSpeed !== t && (l._lastReportStatisticsSpeed = e.speed = t, e.clientId = r, s || a ? e.sdkPlayParams = { mp4Url: s, playUrl: a } : Object.assign(e, { deviceId: i, shareId: o, isLive: l._isLive }), l._videoResolution && (r = (t = l._videoResolution).codecWidth, s = t.codecHeight, a = t.profile, i = t.level, o = t.chromaFormat, t = t.codec, Object.assign(e, { codecWidth: r, codecHeight: s, profile: a + i, chromaFormat: o, codec: t })), void 0 !== l._videoEncodeType && (e.videoEncodeType = l._videoEncodeType), delete e.url, l._wasmStatInfo && (Object.keys(l._wasmStatInfo).forEach(function(e) {
                                var n = l._wasmStatInfo[e] || [],
                                    t = n.length;
                                if (t) {
                                    for (var r = n[0], i = Object.keys(r), o = 1; o < t; o++) ! function() {
                                        var t = n[o];
                                        i.forEach(function(e) { r[e] += Math.min(t[e], 1e4) })
                                    }();
                                    i.forEach(function(e) { "frequency" == e && (r[e] /= t) }), l._wasmStatInfo[e] = r
                                }
                            }), e.wasmStatInfo = l._wasmStatInfo, l._wasmStatInfo = {}), _.default.reportClientInfo(v.default.PLAYER_STATISTICS, e), l._downloadSpeedSum = l._downloadSpeedCounter = 0))
                        }), (0, f.default)((0, h.default)(l), "_onPlayerError", function(e, t, n) { l.emit(y.default.PLAYER_PLAY_ERROR), l._isPlaying = !1, l.stop(), n && !n.isLive && n.nextRawId && (l._nextRawId = n.nextRawId), console.error(e, t, n), l._isPlayMP4 || (l._resetFlvPlayerDelay(("NetworkError" === e ? 10 : 2) * z), l._isLive || l.emit(y.default.PLAYER_RECORD_ERROR)) }), (0, f.default)((0, h.default)(l), "_onPlayerCanPlay", function() {
                            l.emit(y.default.PLAYER_CAN_PLAY), l._log("CAN_PLAY"), l._canPlay = !0, l._initFishEye();
                            var e = l._options,
                                t = e.hasAudio,
                                e = e.mp4Url;
                            t && (e ? l._mediaElement.pause() : void 0 !== (e = l._mediaElement.play()) && e.then(function() {}).catch(function(e) { console.error("html5Player.js Events.CAN_PLAY canot autoplay！", e), l.pause() })), l._isLive || (l._isGBDevice && l.emit(y.default.PLAYER_PLAYBACK_RECONNECTED), G && setTimeout(function(e) { l.setPlaybackRate(l._playbackRate, !0) }, 500))
                        }), (0, f.default)((0, h.default)(l), "_onPlayerPlaying", function() {
                            var e;
                            l._isPause || (l._isPlaying && !l._isLoading || (l._isPlaying = !0, l.emit(y.default.PLAYER_PLAY, l._isLive)), l._useBrowserVideoPlayMp4 || (G && (l._showWASMCanvas(), l._isLive || l.setPlaybackRate(l._playbackRate, !0)), l._hideLoadingElement(), clearTimeout(l._delayShowLoadingTimer || -1), l._delayShowLoadingTimer = setTimeout(l._showLoadingElement.bind((0, h.default)(l)), 3 * z), l._isGBDevice && !l._isLive && l._endTime && l._playbackCurrentTime <= l._endTime && (e = 1500, l._hasCloudGb || (e = Math.min(2, Math.max(1, (l.mediaElement.duration - l.mediaElement.currentTime) / l._playbackRate)) * z), clearTimeout(l._arrivedAtEndTimeTimer), l._arrivedAtEndTimeTimer = setTimeout(l._arrivedAtEndTime.bind((0, h.default)(l)), e)), l._hideScreenShotElement(), l._resetFlvPlayerDelay(5 * z)))
                        }), (0, f.default)((0, h.default)(l), "_onPlayerEnd", function() {
                            if (l._isPlaying = !1, !l._useBrowserVideoPlayMp4) {
                                if (l._isPlayMP4) return l._isEnded = !0, l.pause();
                                if (l._isLive) l.stop(), l._resetFlvPlayerDelay(z);
                                else {
                                    var e = l._playbackCurrentTime;
                                    if (l._options.isSDKMode && !l._endTime) {
                                        var t = l._getNextRegionByTime(e);
                                        if (t) {
                                            var n = t.startTime,
                                                r = t.endTime,
                                                t = t.cdsServer;
                                            return void l.play({ startTime: n, regionServer: t, endTime: r })
                                        }
                                    }
                                    l.emit(y.default.PLAYER_ENDED, e), l._isEnded = !0, l.pause()
                                }
                            }
                        });
                        var t = l._options = {};
                        if (e)
                            for (var n in Q) void 0 !== e[n] ? t[n] = e[n] : t[n] = Q[n];
                        t.channelNo = (t.channelNo || "").toString().trim(), G && (t.hasAudio = t.hasAudio && W);
                        var r = l._isPlayMP4 = !!t.mp4Url;
                        return R.enableAll = t.debug, l._isMobile = U, l._loadingCompletedMp4 = !1, l._useBrowserVideoPlayMp4 = r && (X || "1" === sessionStorage.getItem(e.mp4Url)), l._useBrowserVideoPlayMp4 && (t.hasBaseUI = !1, t.hasAudio = !0, setTimeout(function(e) { return l.emit(y.default.MP4_SUPPORT_INFO, { video: !0, audio: !0, native: !0 }) }, 0)), l._supportMP4Audio = l._useBrowserVideoPlayMp4 || W || q, r && !l._supportMP4Audio && (t.hasAudio = !1), l._threadCount = H && !t.noThread ? Math.min(K, 2) : 1, l._isGBDevice = 0 === t.deviceId.trim().indexOf("xxxxS_gb_"), l._downloadServer = t.downloadServer, l._playerContainer = "string" == typeof e.playerContainer ? self.document.querySelector(e.playerContainer) : e.playerContainer, l._webPlayer = null, l._isEnded = !1, l._isLive = !0, l._isPlaying = !1, l._isLoading = !0, l._playbackCurrentTime = 0, l._resetFlvPlayerTimer = -1, l._resetFlvPlayerCounter = 0, l._arrivedAtEndTimeTimer = -2, l._playedSecond = 0, l._emitter = new g.default, l._mediaElement = null, l._loadingElement = null, l._pausedElement = null, l._playbackRate = 1, l._startTime = null, l._isPreConnect = !1, l._isInitOpenApi = !1, l._initWASMModule = !1, l._isArrivedAtEndTime = !1, l._hasCloudGb = t.hasCloudGb, l.canToChangeStartTime = !1, l._enableH264DecodeByWASM = !B.supportMSEH264Playback(), l._faceDrawSwitcher = t.platform === I.SDK_PLATFORM.ZHU_QUE ? I.SWITCH_STATUS.ON : I.SWITCH_STATUS.OFF, l._fullScreenChangeEvent = document.cancelFullScreen ? "fullscreenchange" : document.mozCancelFullScreen ? "mozfullscreenchange" : document.webkitCancelFullScreen ? "webkitfullscreenchange" : document.msExitFullscreen ? "MSFullscreenChange" : "", l._onRelayMessageCallbacks = {}, (0, D.encryptParams)(!l._options.debug), l._init(), l
                    }
                    return (0, c.default)(o, [{
                        key: "_detectBrowser",
                        value: function() {
                            var e = this._options,
                                t = e.token,
                                n = e.mp4Url,
                                r = e.playUrl,
                                i = e.deviceId,
                                o = e.channelNo,
                                s = e.productKey,
                                e = { browserSupportedH265: X, supportAudioContext: W, isSupportAudioTalk: V, useMultiThreadPlayer: H, isSupportedMSE: q, hardwareConcurrency: K, isSupportWASM: G, releaseDate: self.__player_jssdk_release_date || "" };
                            n || r ? (e.url = location.href, e.sdkPlayParams = { mp4Url: n, playUrl: r }) : Object.assign(e, { deviceId: i, channelNo: o, productKey: s, sdkPlayParams: { token: t } }), _.default.reportClientInfo(v.default.BROWSER_DETECT, e)
                        }
                    }, {
                        key: "_init",
                        value: function() {
                            var l = this;
                            this._detectBrowser(), this._createHtml5Dom(), this._fullScreenChangeEvent && document.addEventListener(this._fullScreenChangeEvent, this._onFullScreenChange, !1);
                            var e, t, n, u = this._options;
                            u.isSDKMode && !u.mp4Url ? this._initOpenApi().then(function(e) {
                                var t, n = e.html5PlayerServer,
                                    r = e.relayServer,
                                    i = e.webSocketServer,
                                    o = e.channel,
                                    s = e.faceBorderColor,
                                    a = e.releaseVersion;
                                if (!l._isDestroyed) {
                                    l.isShareDevice && (l._options.token = l._shareDeviceToken), u.isSDCardPlayback || (t = l.getSDCardStatus(), e = l.getViewTimelineMode(), u.isSDCardPlayback = t && t.status == I.SD_CARD_STATUS.NORMAL && e == I.VIEW_TIMELINE_MODE.SD_CARD_STORAGE && l.isSupportSDCardPlayback());
                                    try { i && l._initRelayWebSocket(i) } catch (e) { console.error(e) }
                                    l._releaseVersion = a, l._faceBorderColor = s, u.html5PlayerServer = n, u.relayServer || (u.relayServer = r), u.channel = o;
                                    r = l.getCanPlayStatus();
                                    (u.isFishEye = l.isFishEye()) && (l._fishEyeElementCanvas.style.display = "block"), l._loadFishEyeModule(), l._loadWASMModule(), l._loadWebPlayerUI();
                                    o = r.onlineStatus && r.deviceStatus;
                                    u.isSDCardPlayback && !o ? (r = u.deviceId, o = u.channelNo, l._relayWebSocket.wakeUpNvrDevice({ deviceId: r, channelNo: o }), l._isPreConnect = !0) : (l._isInitOpenApi = !0, l._log("_initOpenApi", new Date), l._sendInitMessage())
                                }
                            }).catch(function(e) { console.error(e), l.emit(y.default.PLAYER_INIT_ERROR) }) : (n = _.default.getApiServer(), u.html5PlayerServer = n.substring(n.lastIndexOf("/") + 1), e = this._loadFishEyeModule(), t = this._loadWASMModule(), n = this._loadWebPlayerUI(), e || t || n || setTimeout(this._sendInitMessage, 0))
                        }
                    }, { key: "_loadWebPlayerUI", value: function() { var t = this; if (!this._isPlayMP4 || !G) return !1; if (self.WebPlayerUI) return setTimeout(this._sendInitMessage, 0), !0; var e = "".concat(this._getOpenApiServerPrefix(), "/h5player/output/dist/webPlayerUI.min.js?t=").concat(Y); return (0, b.default)(e, "wePlayerUI").then(function(e) { t._sendInitMessage() }), !0 } }, { key: "_loadFishEyeModule", value: function() { var t = this; if (!this._options.isFishEye) return !1; if (self.FishEyeEffect) return setTimeout(this._sendInitMessage, 0), !0; var e = "".concat(this._getOpenApiServerPrefix(), "/h5player/output/dist/fishEyeEffect.min.js?t=").concat(Y); return (0, b.default)(e, "fishEyeEffect").then(function(e) { t._sendInitMessage() }), !0 } }, {
                        key: "_loadWASMModule",
                        value: function() {
                            var t = this;
                            if (!G) return !1;
                            var e = self._WebAssembly_instantiate_complete_;
                            if (self._WebAssembly_instantiate_complete_ = function() { e && e(), setTimeout(function(e) { t._initWASMModule = !0, t._sendInitMessage() }, 0) }, self.WASMPlayer) return self._WebAssembly_instantiate_complete_(), !(self._WebAssembly_instantiate_complete_ = null);
                            var n = H && !this._options.noThread,
                                r = n ? "thread" : "noThread",
                                r = "".concat(this._getOpenApiServerPrefix(), "/h5player/output/dist/").concat(r, "/wasmPlayer.min.js?t=").concat(Y);
                            return (0, b.default)(r, n ? "WASMThreadPlayer" : "WASMPlayer"), !0
                        }
                    }, {
                        key: "_initRelayWebSocket",
                        value: function(e) {
                            e = this._relayWebSocket = new m.default(this._options, e);
                            e.on(y.default.DEVICE_ONLINE_OFFLINE_CHANGE, this._onDeviceOnlineOfflineChanged), e.on(y.default.DEVICE_ON_OFF_CHANGE, this._onDeviceOnOffChanged), e.on(y.default.DEVICE_GET_PTZ_PRESET, this._onDeviceGetPtzPreset), e.on(y.default.DEVICE_GET_SDCARD_STORAGE_INFO, this._onDeviceGetSDCardStorageInfo), e.on(y.default.DEVICE_FORMAT_SDCARD_RESULT, this._onDeviceFormatSDCardResult), e.on(y.default.DEVICE_NVR_WAKE_UP, this._onNVRDeviceWakeUp), e.setLogger(this._log.bind(this)), e.init()
                        }
                    }, { key: "_randomId", value: function() { return Math.random().toString().substring(2) + Date.now() } }, {
                        key: "_createNewWASMCanvas",
                        value: function() {
                            var e = document.createElement("canvas"),
                                t = this._wasmPlayCanvasElementId = "jssdkHtml5WASMPlayCanvasElement_" + this._randomId();
                            e.id = t, e.className = "jssdk-player-wasm-play";
                            var n = this._videoResolution || {},
                                t = n.codecWidth,
                                n = n.codecHeight;
                            e.width = t, e.height = n, e.addEventListener("webglcontextlost", function(e) { console.info(e) }), this._wasmCanvasElement && this._getWASMCacnvasContext().getExtension("WEBGL_lose_context").loseContext(), this._playerContainer.querySelector("#" + this._zoomElementId).replaceChild(e, this._wasmCanvasElement), this._wasmCanvasElement = e, this._calcWASMCanvasWidthAndHeight(), this._hideWASMCanvas()
                        }
                    }, {
                        key: "_createHtml5Dom",
                        value: function() {
                            var t = this,
                                e = this._options,
                                n = e.mp4Poster,
                                r = e.mp4Url,
                                i = e.hasAudio,
                                o = e.hasBaseUI,
                                s = e.isFishEye,
                                a = this._useBrowserVideoPlayMp4,
                                l = this._randomId(),
                                u = "jssdkHtml5VideoElement_" + l,
                                c = this._zoomElementId = "jssdkHtml5ZoomElement_" + l,
                                h = "jssdkHtml5PauseElement_" + l,
                                d = "jssdkHtml5LoadingElement_" + l,
                                f = this._fishEyeElementId = "jssdkHtml5FishEyeElement_" + l,
                                p = this._playerCoverId = "jssdkHtml5PlayerCoverElement_" + l,
                                _ = this._wasmPlayCanvasElementId = "jssdkHtml5WASMPlayCanvasElement_" + l,
                                m = "jssdkHtml5ScreenShotElement_" + l,
                                y = i ? "" : "muted",
                                v = a ? "controls" : "",
                                e = a ? "preload" : "",
                                l = a && n ? 'poster="'.concat(n, '"') : "",
                                i = r ? "" : "autoPlay",
                                v = '<div class="jssdk-player-video-zoom" id="'.concat(c, '">\n                            <video webkit-playsinline="true"  x-webkit-airplay="true" x5-playsinline="true" playsInline ').concat(e, ' id="').concat(u, '" ').concat(y, ' class="jssdk-player-video-element" ').concat(i, " ").concat(v, " ").concat(l, ">\n                                Your browser is too old which doesn't support HTML5 video.\n                            </video>                          \n                            <canvas id=\"").concat(_, '" class="jssdk-player-wasm-play"></canvas>\n                            <div class="jssdk-player-video-screenShot ').concat(r ? "mp4" : "", '" id="').concat(m, '" style="visibility: hidden; display:').concat(a ? "none" : "block", '"></div>  \n                            <div id="').concat(p, '" class="jssdk-player-video-cover" style="display:').concat(a ? "none" : "block", '"></div>\n                        </div>\n                        <div id="').concat(f, '" class="jssdk-player-fish-eye" ></div>\n                        <div id="').concat(d, '" class="jssdk-player-video-loading"></div>\n                        <div id="').concat(h, '" class="jssdk-player-video-paused"></div>'),
                                l = self.document,
                                _ = "jssdkHtml5PlayerStyle";
                            l.querySelector("#" + _) || (p = l.getElementsByTagName("head")[0], (f = l.createElement("style")).innerHTML = "\n        .jssdk-player-video-zoom,\n        .jssdk-player-video-element {\n            display: block;\n            background: #000;\n        }\n        .jssdk-player-video-zoom{\n            width: 100%;\n            height: 100%;\n            position:relative;\n        } \n        .jssdk-player-video-zoom .face-item-block{\n            visibility:hidden;\n            position:absolute;\n            top:0;\n            left:0;\n            width:100%;\n            height:100%;\n            border:10px solid transparent;\n            border-top-width:5.625px;\n            border-bottom-width:5.625px;\n            transform: scale3d(1);\n            transform-origin: 0 0;\n\n        }\n        .jssdk-player-video-zoom.hide-face .face-item-block{\n            visibility:hidden!important;\n        }\n        .jssdk-player-wasm-play,\n        .jssdk-player-video-screenShot,\n        .jssdk-player-fish-eye,\n        .jssdk-player-video-cover {\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            background:no-repeat center;\n            background-size: 100% 100%;\n        }\n        .jssdk-player-video-screenShot{\n            background-size: contain;\n        }\n        .jssdk-player-video-screenShot.mp4{\n            background-size: 100% 100%;\n        }\n        .jssdk-player-fish-eye{\n            background:#000;\n        }\n        .jssdk-player-wasm-play{\n            display:none;\n            width:100%;\n            height:100%;\n        }\n        .jssdk-player-video-loading {\n            background: no-repeat center url(data:image/gif;base64,R0lGODlhIAAgALMAAP///7Ozs/v7+9bW1uHh4fLy8rq6uoGBgTQ0NAEBARsbG8TExJeXl/39/VRUVAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQAAACwAAAAAIAAgAAAE5xDISSlLrOrNp0pKNRCdFhxVolJLEJQUoSgOpSYT4RowNSsvyW1icA16k8MMMRkCBjskBTFDAZyuAEkqCfxIQ2hgQRFvAQEEIjNxVDW6XNE4YagRjuBCwe60smQUDnd4Rz1ZAQZnFAGDd0hihh12CEE9kjAEVlycXIg7BAsMB6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YEvpJivxNaGmLHT0VnOgGYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHQjYKhKP1oZmADdEAAAh+QQFBQAAACwAAAAAGAAXAAAEchDISasKNeuJFKoHs4mUYlJIkmjIV54Soypsa0wmLSnqoTEtBw52mG0AjhYpBxioEqRNy8V0qFzNw+GGwlJki4lBqx1IBgjMkRIghwjrzcDti2/Gh7D9qN774wQGAYOEfwCChIV/gYmDho+QkZKTR3p7EQAh+QQFBQAAACwBAAAAHQAOAAAEchDISWdANesNHHJZwE2DUSEo5SjKKB2HOKGYFLD1CB/DnEoIlkti2PlyuKGEATMBaAACSyGbEDYD4zN1YIEmh0SCQQgYehNmTNNaKsQJXmBuuEYPi9ECAU/UFnNzeUp9VBQEBoFOLmFxWHNoQw6RWEocEQAh+QQFBQAAACwHAAAAGQARAAAEaRDICdZZNOvNDsvfBhBDdpwZgohBgE3nQaki0AYEjEqOGmqDlkEnAzBUjhrA0CoBYhLVSkm4SaAAWkahCFAWTU0A4RxzFWJnzXFWJJWb9pTihRu5dvghl+/7NQmBggo/fYKHCX8AiAmEEQAh+QQFBQAAACwOAAAAEgAYAAAEZXCwAaq9ODAMDOUAI17McYDhWA3mCYpb1RooXBktmsbt944BU6zCQCBQiwPB4jAihiCK86irTB20qvWp7Xq/FYV4TNWNz4oqWoEIgL0HX/eQSLi69boCikTkE2VVDAp5d1p0CW4RACH5BAUFAAAALA4AAAASAB4AAASAkBgCqr3YBIMXvkEIMsxXhcFFpiZqBaTXisBClibgAnd+ijYGq2I4HAamwXBgNHJ8BEbzgPNNjz7LwpnFDLvgLGJMdnw/5DRCrHaE3xbKm6FQwOt1xDnpwCvcJgcJMgEIeCYOCQlrF4YmBIoJVV2CCXZvCooHbwGRcAiKcmFUJhEAIfkEBQUAAAAsDwABABEAHwAABHsQyAkGoRivELInnOFlBjeM1BCiFBdcbMUtKQdTN0CUJru5NJQrYMh5VIFTTKJcOj2HqJQRhEqvqGuU+uw6AwgEwxkOO55lxIihoDjKY8pBoThPxmpAYi+hKzoeewkTdHkZghMIdCOIhIuHfBMOjxiNLR4KCW1ODAlxSxEAIfkEBQUAAAAsCAAOABgAEgAABGwQyEkrCDgbYvvMoOF5ILaNaIoGKroch9hacD3MFMHUBzMHiBtgwJMBFolDB4GoGGBCACKRcAAUWAmzOWJQExysQsJgWj0KqvKalTiYPhp1LBFTtp10Is6mT5gdVFx1bRN8FTsVCAqDOB9+KhEAIfkEBQUAAAAsAgASAB0ADgAABHgQyEmrBePS4bQdQZBdR5IcHmWEgUFQgWKaKbWwwSIhc4LonsXhBSCsQoOSScGQDJiWwOHQnAxWBIYJNXEoFCiEWDI9jCzESey7GwMM5doEwW4jJoypQQ743u1WcTV0CgFzbhJ5XClfHYd/EwZnHoYVDgiOfHKQNREAIfkEBQUAAAAsAAAPABkAEQAABGeQqUQruDjrW3vaYCZ5X2ie6EkcKaooTAsi7ytnTq046BBsNcTvItz4AotMwKZBIC6H6CVAJaCcT0CUBTgaTg5nTCu9GKiDEMPJg5YBBOpwlnVzLwtqyKnZagZWahoMB2M3GgsHSRsRACH5BAUFAAAALAEACAARABgAAARcMKR0gL34npkUyyCAcAmyhBijkGi2UW02VHFt33iu7yiDIDaD4/erEYGDlu/nuBAOJ9Dvc2EcDgFAYIuaXS3bbOh6MIC5IAP5Eh5fk2exC4tpgwZyiyFgvhEMBBEAIfkEBQUAAAAsAAACAA4AHQAABHMQyAnYoViSlFDGXBJ808Ep5KRwV8qEg+pRCOeoioKMwJK0Ekcu54h9AoghKgXIMZgAApQZcCCu2Ax2O6NUud2pmJcyHA4L0uDM/ljYDCnGfGakJQE5YH0wUBYBAUYfBIFkHwaBgxkDgX5lgXpHAXcpBIsRADs=);\n            background-size: contain;\n            transform: translate(-50%, -50%);\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            width: 30px;\n            height: 30px;\n            display:none;\n        }\n        .jssdk-player-wasm-play-tip,\n        .jssdk-player-video-paused {\n            display: none;\n            background: no-repeat center url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAvRSURBVHja7J17cNTVFcc/SXY3IQmJJIQarTaRAJFIBKwCIsFXDE7FFiQ4UB9UDZDSFkaxlPFRFZ2ixQ5QLYQo5aFOYQFFZITEBxAeitYgNBoQwlaKoCFIeOW1ZPvHPT/zy7p5b7K/3+5+ZzL3N5ts7rnne8+5957fveeGuFwugjAOLADl2UlGlvEiYACQBqQASUAvIEp+1x2IBsKBSuACUCE/xwAHcBAoAfYBp4zUuAS748eEGAwXA1lABnAD0LcN3+0hZc9m/mY/sAPYBmwGjhvOQgyAZOBuIBsYBIToflcpPbtEeroD+A44J739DHAWqAFigTAgTkhJFItKEQsbAPSTnwcAF1AM2IFVwGFfKyLE5XL5ymVFAOOAHGCEGwlrpPcWSY/2JvpJfVlSvwaX1Jcv9Vf7wmX5gpBoYDIwU3qwhpXSS98F6rtIllDgdrHOe3WfHwPmAXliiX5JSCzwe2AGEC+fvSe9Mb8LSWiOnByxmlvlswpgPvB3cZ2dTkhoV7hFYJL4/zlCxiZgLJApvdDXZCAy5IlMY8VlxovMX0kbQrqiV3Qm0sUv/1MG2Y3AKHETbxp4qv2myDlKZE6QNmyTNpmOkHDgBeDfwHBgL/AQcIf0PLNgs8j8kMz0bpA2PQ/YzEJIKrALeFSm1fnA1cCrJl5AvyqWkS9t+qO0MdXohNwF7Ja1xEfA9TKj8hdMFov/GBgsbb3LiISEAM/IAqs78JrM9Xf5Ybhpp7iu16StduBpbw343iDEBiwHnhChFsuc3on/wiltXCxtflJ0YPM1Id2AdSLcWeBmIJfAQS5wi7T9XmCtRCB8QkgksB74BfA1cA3wIYGHD6TtR2RG9rZ01C4lxAaslkXUQbGMAwQuDogODopO7O11X+0hJARYqrOMLOAQQRyUheTXopul7Rno20PIs8CvgdPSG8qCXPyAQ6KT06KjZzubkHHAbHkeHeBuqjn3NVqeZ7d1ndIWQq7UmeFiVFwnCM/YppsSL23Lir61hNiAN3SLvtygzls1JX4diBHd2bxJyLPAQFl5TwrqutWYhAohDWrteNIaQoYCD8vzI6hdHUG0fkWv6e5h4LqOEhImvjAMWIJ/xqY6G7tEd2GoF2BhHSFkMip0vhOYEtRtuzFFiBlIC9Hv5giJRb2+BHg5qNMO4yUpnxHdtpmQmah3yhtllhBEx/CG6LKnjMVtIiQe+IM8zwvq0mt4UcrpNOy8aRUhuTJ/Xg9sCerRa/hQdBrT1FrOEyHddNaxKKhDr0PT6e/wEKb3RMg41LaXQny4QyT8uqz1URNm/swPCdksuv0Jav9Xi4TkSLnGl1LXle278/z6vBJr2tBZCXaH1c9IWaebDjeC+1bSK1Bx/RBZwPhsR2Foz0tc9Se+0Z5LbOkjflv9wSp/CWiGSsTDBaQk2B1lTVnIeCFjBcbY3glA/Ylv0qq3rt1iSU5bFv3AUwl+QEi96DgEdQSjSZelbc9fbbgmXHCGOA+X3H/evmC/bfDNkxPsjlCTk2KXMrspl5UIHDWCu3J3WZ4Qlpj8sW3wTVOrNi7d4wduKzHB7vjW3UIyhQy7kdxVkwZz7PCQ6oLXP7H2GTg/dlZ+d5O6rbWi8yxPLutGKQvN0iJXXY2l7qs9088snl0aPvT28SadAgOM9ETIcClNN5OprzxxSc3Hm1ZZLuu7OfJXuSkmEn2bm+5/ICQWddr1NN4/09dF5uLCeeTAbVWbVuyz9r/uz3H/2B5hAqn3i877lWcnxeoJGSDlPrPPJ13V5yLqvtj91KnHx+2NyBiTaQKR9+k50AjRTgXt9ZelcP3J432qd2wosCRduSpqwqOJZiMkWcrD+BMuOHE6vhx//u0lpbb0EdMT7A4jJkoo00VJ/JwQzY2dq4yp3Vs0/+S0Ebsjbp04xGDiaTpP0hNyqZRH8WNc+O7IoJqta3Zaeqcvjpm+oIdBxNJ0/lM9IXFSnsTP4aqrDXUe2jvl7NKnS8Ovzbwvwe4I8bFIJ/UcaIRorxMrCBDUnznZq+bT95afnHHLlm6jc/objRBtsHMSSHC5uHD0UEZ1wWvF1r6D5vZ4fkOkD6Sok9KqJyRayrMEIFw1Vba6A8WzKuc++EX48NF3dnH156WMdA+dBAEh1Ps2rhrqZhnRAclCeGSdJeXq52MfW9G/ZtfGt7u4+ki9pYS6jR2WQCMj7NLe2yIyJwxyHvz8T9/PHHXOByJY9WNJqNvsKj5QiAjtHldu+3nmpLj5799Y9c6rJT4UpdGSI9TT1Muv3ZPVVm+54qol0TlzUms/LVxenp3k67SsHgk56rZi90/31OuyPeEZY4c7y/4z5fTfphllEazp/H96QrR4SrJfWkVU7BnbgOEz4l4uurb6/X99ZDDxNJ07/J+QMAuWpCvtkWNyU2v37VhQnp1kxIXvFVKW6WdVjWLyfjFoxycetPYfMq2m6K0Cp+NLI4va6OWgZiHai6l0sxMREhFVbU299ukez61Lryl6q8AEInskpBJ14D0GldfWhEyEYLmsb2G32+5Jryv95KmKqcOqTCB1P9H5/gS7o9J9IbgDtdEhA5NtdAiN7XnM2m/wjJrdBaudR0yVXCJDp/tGoRNoOJiTaRqjsIY7rX0GLuw+bV5qze6C1Sa0a22D3NYf2mTiraS7bQNHTq16d1mxWecdtLCV9BgqMT2oNEPGtIroi763DRw5NW7hh8NMTAao3MUAn2lkuBMCDYd07jbgmsJlSU5bETXh0dTaPVvzyrOT6jE3xrvp/EcuS1ukGPHAzhe2q4blVm9ZG3AHdsqA7fL8kO9DHjHnrWlDZ8cv2jnIj8iAhmwO2/VkeCIEVPZmaHy3RpfD2jt9Q7es+/rXlXw0tzw7qRb/gnbYM+9HndDDdRXdgP+iTuKOwly52s0y1d0EfAskJ9gdVS1ZSBWwUJ6Dicq8D02nL4muaYkQUIfbzwC/pOEgTxAdx42i09M0kZShKUIqgAXy/EhQj17DTCkX0sSmxOa2Ab0oX7oDmBjUZYcxEZXPt4JmEvo0R8gpVIJ9gGlBfXYYmg6foJn7rFraKJcPfI66ByQvqNN2I090+Dkq3R/tJcQpC8QLspi5PqjbNkO71OaCTpftJgTgUxoSb82jhSSOQTSCRae7F0WXdJQQze/tAYYBy4J6bjWWodLsFuvGY68QUiuzhDPAPQQTm7UGi2i4tGCi6NBrhAB8ScOFvlNRd0wF4RkZoiOX6Ky0tV9s63GENcBceX6Htl2tHSjoC2yQ57+g8pnQWYQAPEZDkvlCGjZ6BQG9RScxoqPH2/oP2kOIZoYbgctR0eDeQS5IQUVxLxfdaO690wnRBvnx0htSUBdjBbL76gu8L7ooRCUla9c7nI4caTuPilxqlvIJcFMAknET6n5czTLuxENYvSsIQSoeqxtTPgiwKfEiaXM0sFJ0Ud2Rf+iNQ5+1qEsV5+imxCvx7+NxFmmjNrWdA9zfXjflbUK0gf5J8Z3a4rFIVvb+hutRG0HukbZmS9u9chLL28ei16JukSmWkMFOWohumgxLUPtwhwCfSVvXerOCzjinXiqW8VdUtDgHFXZ+0MREPIg6spEjbXpB2ljq7Yo6K3FADeoS+GukR6UDr8jqPstERGSJzK+gznFslzbN8sZ40ZWEaNiLinn9BjiBeoW5CXgXGGNgIsaInJtE5nJpQwadnHWvK1JruFBh6BRUCLoCtd9rnSyipmCMFB+hIkuhyJYlsj4B9JE2dPoRak8b5Tob0ag3aDNRRyA0rARWifXUdyEJt6M2l9+r+/wY6mVcHtCp2R0S7A6fE6IhArVdNUfcmj6R2BpUjKwI75/m6if1ZdF4u6xL6suX+qu7QglGIkSPZOml2ahbMfXkVKIORJagduY7gO+k556StcBZUeBF0uvjUZdvJaJyGaYAaTIwx7qRUIxKr74KH+ScNCohelwsvXckKuOzt4OWB2Tmt1Ws8LgvG+tOiBHDG8eB5fKD9PoB0sNTpMf3AqLkd91lXIoQi6mXwfiEjAUOsawSsbRTRp5nh7hcLoIwDv4/AE8HYupQwxHhAAAAAElFTkSuQmCC);\n            background-size: contain;\n            transform: translate(-50%, -50%);\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            width: 100px;\n            height: 100px;\n            cursor:pointer;\n        }\n        .jssdk-player-wasm-play-tip{\n            text-align:center;\n            color:#fff;\n            background:#000;\n            width:100%;\n            height:20px;\n        }\n        ", f.id = _, p.appendChild(f));
                            var g = this._playerContainer;
                            g.innerHTML = v, this._mediaElement = g.querySelector("#" + u), this._wasmCanvasElement = g.querySelector("#" + this._wasmPlayCanvasElementId), this._wasmCanvasElement.addEventListener("webglcontextlost", function(e) { console.info(e) }), o && (this._loadingElement = g.querySelector("#" + d), r || (this._pausedElement = g.querySelector("#" + h), this._pausedElement.addEventListener("click", function(e) { t.resume() }, !1)), this._showLoadingElement()), this._screenShotElement = g.querySelector("#" + m), this._screenShotCanvas = l.createElement("canvas");
                            l = this._fishEyeElementCanvas = g.querySelector("#" + this._fishEyeElementId);
                            s && !O.safari || (this._mediaElement.style.width = this._mediaElement.style.height = "100%", l.style.display = "none", setTimeout(function() { t._zoomElement = new P(g.querySelector("#" + t._zoomElementId)), t._zoomElement._dom.addEventListener("click", t._onZoomElementClick, !1) }, 50)), r && n && !a && this._showScreenShotElement(n)
                        }
                    }, {
                        key: "_getWASMCacnvasContext",
                        value: function() {
                            var e = this._wasmCanvasElement,
                                t = { preserveDrawingBuffer: !0 };
                            return e.getContext("webgl", t) || e.getContext("experimental-webgl", t)
                        }
                    }, {
                        key: "_calcWASMCanvasWidthAndHeight",
                        value: function() {
                            var e = this._videoResolution || {},
                                t = e.codecWidth,
                                n = e.codecHeight,
                                r = this._wasmCanvasElement,
                                e = this._screenShotCanvas;
                            t && (e.width = r.width = t, e.height = r.height = n), this._getWASMCacnvasContext()
                        }
                    }, { key: "_arrivedAtEndTime", value: function() {!this._isLive && this._endTime && this._playbackCurrentTime >= this._endTime - 3 * z && (this._log("!this._isLive && this._endTime && this._playbackCurrentTime(".concat(this._playbackCurrentTime, ") >= this._endTime(").concat(this._endTime, ")")), this._setArrivedAtEndTime(!0), this.pause()) } }, { key: "_showLoadingElement", value: function() { this._isPause || this._useBrowserVideoPlayMp4 || (clearTimeout(this._delayShowLoadingTimer || -1), this._loadingElement && (this._loadingElement.style.display = "block"), this.emit(y.default.PLAYER_BUFFER), this._isLoading = !0) } }, { key: "_hideLoadingElement", value: function() { this._loadingElement && (this._loadingElement.style.display = "none"), this._isLoading = !1 } }, {
                        key: "safariScreenShot",
                        value: (t = (0, l.default)(a.default.mark(function e() {
                            var t, n, r, i;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ((t = this._videoResolution) && O.safari) { e.next = 3; break }
                                        return e.abrupt("return", "");
                                    case 3:
                                        if (r = t.codecWidth, i = t.codecHeight, r = (n = "").concat(r, "x").concat(i), !this._isLive) { e.next = 10; break }
                                        this._options.isSDKMode ? (i = this.getDeviceInfo()).thumbnailUrlList && i.thumbnailUrlList.length && (n = (n = i.thumbnailUrlList[0].url + "&_ts=" + Date.now()) && n.replace("320x320", r)) : n = this._options.liveThumbnail, e.next = 13;
                                        break;
                                    case 10:
                                        return e.next = 12, this.getPlaybackThumbnailUrl({ timestamp: this._playbackCurrentTime, size: r });
                                    case 12:
                                        n = e.sent;
                                    case 13:
                                        return e.abrupt("return", n || !1);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function() { return t.apply(this, arguments) })
                    }, {
                        key: "screenShot",
                        value: function() {
                            var e = this._videoResolution;
                            if (!e) return "";
                            var t = e.codecWidth,
                                n = e.codecHeight,
                                r = Math.min(1280 / t, 1);
                            if (G && (this._videoEncodeType === k.H265 || this._enableH264DecodeByWASM)) return this._wasmCanvasElement.toDataURL("image/jpeg", r);
                            if (O.safari) return "";
                            e = this._screenShotCanvas;
                            return e.width = this._mediaElementWidth = t, e.height = this._mediaElementHeight = n, e.getContext("2d").drawImage(this._mediaElement, 0, 0, t, n), e.toDataURL("image/jpeg", r)
                        }
                    }, {
                        key: "getZoomScreenShot",
                        value: function() {
                            var e = this._videoResolution;
                            if (!e) return "";
                            var t = e.codecWidth,
                                n = e.codecHeight;
                            this._mediaElementWidth = t, this._mediaElementHeight = n;
                            var r = G && (this._videoEncodeType === k.H265 || this._enableH264DecodeByWASM);
                            if (!r && O.safari) return "";
                            var i = r ? this._wasmCanvasElement : this._mediaElement,
                                o = this._screenShotCanvas,
                                e = this._getZoomElementTranslate(),
                                t = e.zoomXTranslate,
                                n = e.zoomYTranslate,
                                r = e.clipW,
                                e = e.clipY;
                            o.width = r, o.height = e, o.getContext("2d").drawImage(i, t, n, r, e, 0, 0, r, e);
                            r = Math.min(1280 / r, 1);
                            return o.toDataURL("image/jpeg", r)
                        }
                    }, {
                        key: "_getZoomElementTranslate",
                        value: function() {
                            var e, t = Number(this._zoomElement._scaleValue),
                                n = this._mediaElementWidth,
                                r = this._mediaElementHeight;
                            return 1 === t ? { zoomXTranslate: 0, zoomYTranslate: 0, clipW: n, clipY: r } : { zoomXTranslate: ((e = (t - 1) / (2 * t)) - this._zoomElement._translateX) * n, zoomYTranslate: (e - this._zoomElement._translateY) * r, clipW: n / t, clipY: r / t }
                        }
                    }, { key: "_showScreenShotElement", value: function(e) { "visible" === this._screenShotElement.style.visibility || O.safari || (e = e || this.screenShot(), this._screenShotCanvas.style.visibility = "visible", this._screenShotElement.style.visibility = "visible", this._screenShotElement.style.backgroundImage = "url(".concat(e, ")")) } }, { key: "_hideScreenShotElement", value: function() { this._screenShotCanvas.style.visibility = "hidden", this._screenShotElement.style.visibility = "hidden" } }, { key: "_showPausedElement", value: function() { this._pausedElement && (this._pausedElement.style.display = "block") } }, { key: "_hidePausedElement", value: function() { this._pausedElement && (this._pausedElement.style.display = "none") } }, {
                        key: "_initPlayer",
                        value: function(e) {
                            var t, n, r, i, o, s, a, l, u, c, h, d, f, p, _ = this;
                            clearTimeout(this._initPlayerDelayTimer || -1), this._webPlayer || (this._log("_initPlayer "), this._isPause = !1, this._showLoadingElement(), t = this._getPlayUrl(e), n = this._options, r = n.mp4Url, i = n.debug, o = n.liveBufferSeconds, p = n.playbackNeedBufferTime, s = n.hasCloudGb, d = n.enableLiveBuffer, a = n.stashInitialSize, l = this._mediaElement, u = this._isLive, (c = this._getDeviceMediaInfo()) && u && (h = c.video, e = c.wasm, f = c.height, (d = n.enableLiveBuffer = 0 === h && 0 === e) && (a = n.stashInitialSize = A(f), o = Math.max(1, o * f / 1080))), f = this._useBrowserVideoPlayMp4, p = this._webPlayer = N({ url: f ? r : t, type: f ? "mp4" : "flv", duration: 3600 }, { enableH264DecodeByWASM: this._enableH264DecodeByWASM, debug: i, faceBorderColor: this._faceBorderColor, faceDrawSwitcher: this._faceDrawSwitcher, isLive: u, enableWorker: !i, enableStashBuffer: d || !u && (!this._isGBDevice || s), stashInitialSize: a, autoCleanupSourceBuffer: !r, canvasId: this._wasmPlayCanvasElementId, threadCount: this._threadCount, seekable: !f && r, isMP4: !!r, liveBufferSeconds: o, playbackNeedBufferTime: p }, { WASMPlayer: self.WASMPlayer }), this._log("_initPlayer init flvjs Player"), p.attachMediaElement(l), p.load(), p.on(M.TIME_UPDATE, function(e, t, n) {
                                if (_._isPlaying && !_._isPause) {
                                    if (_._playedSecond++, 14400 < _._playedSecond) return _._resetFlvPlayerDelay();
                                    var r = y.default.PLAYER_TIME_CHANGE;
                                    _.emit(r, new Date(e)), u || (_._playbackCurrentTime = Math.max(0, Math.round(e)), isNaN(_._playbackCurrentTime) && (_._playbackCurrentTime = 0), _._refreshControlBarUI(r), !_._isGBDevice && _._endTime && _._playbackCurrentTime >= _._endTime && (_.pause(), _.emit(y.default.PLAYER_ENDED)))
                                }
                            }), p.on(M.CAN_PLAY, this._onPlayerCanPlay), p.on(M.FLV_TRANSLATE_MESSAGE, this._onTranslateMessage.bind(this)), p.on(M.LOADING, function() { _._isPlaying && (_._isPlaying = !1, _._delayShowLoadingTimer = setTimeout(_._showLoadingElement.bind(_), 500)) }), p.on(M.LOADING_COMPLETE, function() { r && (_._loadingCompletedMp4 = !0) }), p.on(M.PLAYING, this._onPlayerPlaying), p.on(M.PLAY_ENDED, this._onPlayerEnd), p.on(M.WASM_STATISTICS_INFO, function(e) {
                                var t = e.type,
                                    e = e.data;
                                _._log("WASM_STATISTICS_INFO", t, e), "decodeFrequency" === t && _.emit(y.default.MACHINE_DECODE_FPS, e), _._wasmStatInfo = _._wasmStatInfo || {}, _._wasmStatInfo[t] = _._wasmStatInfo[t] || [], _._wasmStatInfo[t].push(e)
                            }), p.on(M.WASM_BUFFER_UPDATE, function() { r && !_._isPlaying && (_._hideLoadingElement(), _.pause()), _._refreshControlBarUI(M.WASM_BUFFER_UPDATE) }), p.on(M.STATISTICS_INFO, this._onStatisticsInfo), p.on(M.ERROR, this._onPlayerError), p.on(M.MIRCO_PHONE_FAIL, function() { _.emit(y.default.PLAYER_MIRCO_PHONE_FAIL) }), p.on(M.MIRCO_PHONE_ACTIVITY, function(e) { _.emit(y.default.PLAYER_MIRCO_PHONE_ACTIVITY, e) }), p.on(M.VIDEO_ENCODE_TYPE, function() {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : k.H264;
                                _._videoEncodeType = e, _._log("Events.VIDEO_ENCODE_TYPE, videoEncodeType: " + e), _.emit(y.default.VIDEO_ENCODE_TYPE, e)
                            }), p.on(M.RESPONSE_MESSAGE_DATA, function(t) {
                                var e = null;
                                try { e = JSON.parse(t), _._log("RESPONSE_MESSAGE_DATA " + t) } catch (e) { return void console.error("RESPONSE_MESSAGE_DATA " + t) }
                                _._parseWebSocketResponse(e)
                            }), this.setVolume(this._volume), u && this.setPlaybackRate(1, !0), this._isEnded = !1, r && !f && !this._controlBarUI && self.WebPlayerUI && (this._controlBarUI = new self.WebPlayerUI(this), U && window.addEventListener("orientationchange", this._onOrientationChange)))
                        }
                    }, {
                        key: "_onTranslateMessage",
                        value: function(e) {
                            var t = this,
                                n = e.flvType,
                                r = e.data,
                                i = e.videoEncodeType,
                                o = void 0 === i ? k.H264 : i,
                                e = e.audioEncodeType,
                                s = void 0 === e ? w.AAC : e;
                            this._log("FLV_TRANSLATE_MESSAGE", n, r, o, s);
                            var a = this._options,
                                l = a.mp4Poster,
                                u = a.mp4Url,
                                c = a.stashInitialSize,
                                h = a.isSDCardPlayback,
                                d = a.isFishEye;
                            switch (n) {
                                case x.CIRCLE:
                                    clearTimeout(this._delayCircleInfoTimer || -1), this._circleArgs = r, this._initFishEye();
                                    break;
                                case x.FLV_META:
                                    this._hideWASMCanvas();
                                    var f = this._onResolutionReceived(r),
                                        p = this._isLive && !this._isGBDevice && !h;
                                    if (f)
                                        if (this._saveDeviceMediaInfo(o, s, 0), 1 == f) {
                                            f = this._videoConfig.codecHeight, f = A(f);
                                            if (p && f !== c) return a.stashInitialSize = f, this._videoConfig = null, this._resetFlvPlayer(!0);
                                            d && !this._circleArgs ? this._delayCircleInfoTimer = setTimeout(function(e) { t._circleArgs = [5e3, 5e3, 5e3, 5e3], t._initFishEye() }, z) : this._initFishEye()
                                        } else if (p) return this._videoConfig = null, this._resetFlvPlayer(!0);
                                    break;
                                case x.VIDEO_SPS:
                                    var _ = this._onResolutionReceived(r, o, s);
                                    _ && (this._saveDeviceMediaInfo(o, s, 1), 2 <= _ ? this._resetFlvPlayer() : this._calcWASMCanvasWidthAndHeight());
                                    break;
                                case x.MP4_INFO:
                                    p = (this._mp4Info = r).mime.split(";"), _ = (0, C.default)(p, 2), p = _[0], _ = _[1], _ = B.supportNativeMediaPlayback("".concat(p, "; ").concat(_)) || B.supportNativeMediaPlayback("".concat(_, "; ").concat(p)), p = o === k.H265;
                                    p && !_ && G || (document.getElementById(this._playerCoverId).style.display = "none", this._screenShotElement.style.display = "none", this._useBrowserVideoPlayMp4 = !0, a.hasBaseUI = !1, this._mediaElement.controls = !0, l && (this._mediaElement.poster = l), p || sessionStorage.setItem(u, "1"), this._hideLoadingElement(), this._resetFlvPlayer(), this._supportMP4Audio = !0), this.emit(y.default.MP4_SUPPORT_INFO, { video: !p || _ || G, audio: !p || _ || this._supportMP4Audio, native: !p || _ }), !this._useBrowserVideoPlayMp4 && this._controlBarUI && (this._controlBarUI.controls = p) && this._refreshControlBarUI(n)
                            }
                        }
                    }, {
                        key: "_onResolutionReceived",
                        value: function(e) {
                            var t = 0;
                            if (!e) return t;
                            var n = this._videoConfig;
                            return n && e.codecHeight === n.codecHeight || (t = n ? e.codecHeight > this._videoResolution.codecHeight ? 2 : 3 : 1, n = this._videoConfig = function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? S(Object(n), !0).forEach(function(e) {
                                        (0, f.default)(t, e, n[e])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e)) })
                                }
                                return t
                            }({}, e), 1 != t && 2 != t || (this._videoResolution = n), n = e.codecWidth, e = e.codecHeight, this.emit(y.default.DEVICE_RESOLUTION_CHANGE, { codecWidth: n, codecHeight: e })), t
                        }
                    }, {
                        key: "_saveDeviceMediaInfo",
                        value: function(e, t, n) {
                            var r = 0 < arguments.length && void 0 !== e ? e : k.H264,
                                i = 1 < arguments.length && void 0 !== t ? t : w.AAC,
                                o = 2 < arguments.length && void 0 !== n ? n : 0,
                                s = this._options,
                                a = s.deviceId,
                                e = s.productKey,
                                t = s.channelNo;
                            this._isLive && a && (s = (n = this._videoConfig).codecHeight, n = n.codecWidth, localStorage.setItem("WEB_PLAYER_".concat(e, "_").concat(a, "_").concat(t), "video=".concat(r, ";audio=").concat(i, ";width=").concat(n, ";height=").concat(s, ";wasm=").concat(o)))
                        }
                    }, {
                        key: "_getDeviceMediaInfo",
                        value: function() {
                            var e = this._options,
                                t = e.deviceId,
                                n = e.productKey,
                                e = e.channelNo;
                            if (this._isLive && t) {
                                e = localStorage.getItem("WEB_PLAYER_".concat(n, "_").concat(t, "_").concat(e));
                                if (e) {
                                    var r = {},
                                        i = !1;
                                    return e.split(";").forEach(function(e) {
                                        var t = e.split("="),
                                            n = (0, C.default)(t, 2),
                                            e = n[0],
                                            t = n[1];
                                        e && t && (n = parseInt(t), r[e] = isNaN(n) ? t : n, i = !0)
                                    }), i ? r : void 0
                                }
                            }
                        }
                    }, { key: "_refreshControlBarUI", value: function(e) { this._controlBarUI && this._controlBarUI.refresh(e) } }, { key: "_getOpenApiServerPrefix", value: function() { var e = this._checkSSL() ? "https" : "http"; return "".concat(e, "://").concat(this._options.html5PlayerServer) } }, {
                        key: "_parseWebSocketResponse",
                        value: function(e) {
                            var r = this,
                                t = e.cmd,
                                e = e.data,
                                n = void 0 === e ? {} : e,
                                e = this._options,
                                i = e.productKey,
                                o = e.token,
                                s = e.deviceId,
                                a = e.channelNo,
                                l = e.relayServer,
                                u = e.channel,
                                e = L.RESPONSE_MESSAGE_DATA_TYPE;
                            switch (t) {
                                case e.AUDIO_ENCODE_INFO:
                                    this._audioEncodeType = n.audioEncodeType;
                                    break;
                                case e.RELAY_CONNECT_SUCCESS:
                                    if (this._hasReceivedRCSMsg) break;
                                    this._hasReceivedRCSMsg = !0, this.emit(y.default.CAN_GET_SDCARD_SECTION);
                                    break;
                                case e.SDCARD_PLAYBACK_LIMIT:
                                    this.stop(), this.emit(y.default.SDCARD_PLAYBACK_LIMIT);
                                    break;
                                case e.DEVICE_STATUS_OFFLINE:
                                    (!l || this._isGBDevice ? Promise.reject("no relay server or  gb device") : this._getRelayIP({ productKey: i, token: o, deviceId: s, channelNo: a, channel: u }).then(function(e) {
                                        var t = e.code,
                                            n = e.data;
                                        if (0 !== t || !n) return Promise.reject("get relay server api error!");
                                        e = n || {}, e.relayhost, t = e.privateip, n = e.channelname, e = t ? t + ":" + e.relayport : "";
                                        if (!e || e === l) return Promise.reject("the relay server error: 2009!");
                                        r._options.relayServer = e, r._options.channel = n
                                    })).catch(function(e) { console.error(e), r.stop(), r._onDeviceOnOffChanged({ deviceId: s, channelNo: a, status: !1 }) })
                            }
                        }
                    }, { key: "_showWASMCanvas", value: function() { this._isWASMCanvasVisible || this._videoEncodeType !== k.H265 && !this._enableH264DecodeByWASM || (this._isWASMCanvasVisible = !0, this._wasmCanvasElement.style.display = "block") } }, { key: "_hideWASMCanvas", value: function() { this._isWASMCanvasVisible && (this._isWASMCanvasVisible = !1, this._wasmCanvasElement.style.display = "none") } }, {
                        key: "_initFishEye",
                        value: function() {
                            var t = this;
                            this._canPlay && this._circleArgs && this._videoResolution && this._options.isFishEye && !O.safari && self.FishEyeEffect && (this._fishEyeElement || (this._log("_initFishEye"), this._fishEyeElement = new self.FishEyeEffect("#" + this._fishEyeElementId, this._mediaElement, this._screenShotCanvas), this._fishEyeElement.on("autoCruiseChange", function(e) { t.emit(y.default.PLAYER_AUTO_CRUISE_CHANGE, e) }), this._fishEyeElement.initArguments(this._circleArgs), setTimeout(function() { t.emit(y.default.PLAYER_FISH_EYE_INIT) }, 100)), this._fishEyeElement.initArguments(this._videoResolution), this._fishEyeElement.playFishEye())
                        }
                    }, {
                        key: "_destroyPlayer",
                        value: function() {
                            var e;
                            this._isPreConnect ? this._sendCmdToServer({ cmd: L.REQUEST_MESSAGE_DATA_TYPE.STOP_PLAY }) : (this._playedSecond = 0, this._isPlaying = !1, clearTimeout(this._resetFlvPlayerTimer), clearTimeout(this._arrivedAtEndTimeTimer), this._resetFlvPlayerTimer = -1, (e = this._webPlayer) && (e.pause(), e.unload(), e.detachMediaElement(), e.destroy()), this._webPlayer = e = null, this._hideLoadingElement())
                        }
                    }, { key: "_resetFlvPlayerDelay", value: function(e) { clearTimeout(this._resetFlvPlayerTimer || -1), this._opt_isPlayMP4 || (e ? this._resetFlvPlayerTimer = setTimeout(this._resetFlvPlayer.bind(this), e) : this._resetFlvPlayer()) } }, {
                        key: "_resetFlvPlayer",
                        value: function(e) {
                            var t = 0 < arguments.length && void 0 !== e && e;
                            this._lastResetFlvPlayerTime = this._lastResetFlvPlayerTime || 0;
                            e = Date.now();
                            if (e - this._lastResetFlvPlayerTime > 20 * z && (this._resetFlvPlayerCounter = 0), this._resetFlvPlayerCounter++, this._lastResetFlvPlayerTime = e, this._isLive && this._options.liveBufferSeconds++, 20 < this._resetFlvPlayerCounter) return this._log("reset html5 player reach max!"), void this.stop();
                            this._log("reset html5 player ! _resetFlvPlayerCounter: ".concat(this._resetFlvPlayerCounter)), clearTimeout(this._resetFlvPlayerTimer || -1), this._resetFlvPlayerTimer = -1, this._showScreenShotElement(), this._hideWASMCanvas(), !t && (this._isPause || this._isPlaying) || (t = !!this._webPlayer, this._destroyPlayer(), this._videoEncodeType !== k.H265 && !this._enableH264DecodeByWASM || this._createNewWASMCanvas(), clearTimeout(this._initPlayerDelayTimer || -1), t ? this._initPlayerDelayTimer = setTimeout(this._initPlayer.bind(this), 300) : this._initPlayer())
                        }
                    }, {
                        key: "_checkSSL",
                        value: function() {
                            var e = this._options,
                                t = e.isSDKMode,
                                e = e.runtimeEnv;
                            return t && e !== I.SDK_RUNTIME_ENV.DEVELOPMENT || -1 < location.protocol.toLowerCase().indexOf("https")
                        }
                    }, {
                        key: "_getPlayUrl",
                        value: function(e) {
                            var t = this._isLive,
                                n = this._isGBDevice,
                                r = this._options,
                                i = this._checkSSL(),
                                o = i ? "https" : "http",
                                s = r.token,
                                a = r.deviceId,
                                l = r.productKey,
                                u = r.channelNo,
                                c = r.shareId,
                                h = r.region,
                                d = r.isPermanentStorage,
                                f = r.isSDKMode,
                                p = r.platform,
                                _ = r.isSDCardPlayback,
                                m = r.useWebSocket,
                                y = r.hasAudio,
                                v = r.html5PlayerServer,
                                g = r.channel,
                                b = r.relayServer,
                                E = r.debug,
                                S = r.mp4Url,
                                T = r.playUrl;
                            if (S) {
                                var A = "".concat(this._getOpenApiServerPrefix(), "/h5player/mp4?url=").concat(encodeURIComponent(S), "&hasAudio=").concat(y, "&isSupportWASM=").concat(G ? 1 : 0, "&supportAudioContext=").concat(W ? 1 : 0);
                                if (E) return A;
                                S = A.split("?"), A = (0, C.default)(S, 2), S = A[0], A = A[1];
                                return S + "?_paramStr_=" + (0, D.compile)(JSON.stringify((0, D.query2json)(A)))
                            }
                            if (T) { if (!f || this._isLive) return T } else if (this._isLive && p === I.SDK_PLATFORM.NONE) return console.error('[ERROR] need option: "playUrl"'), "";
                            n = _ || n && !this._hasCloudGb;
                            (t || n) && m && (o = i ? "wss" : "ws");
                            var w = r.clientId || "",
                                k = "_html5_player_client_id_" + a + "_" + (u || "");
                            if (w || !this._isGBDevice && !_ || this._isLive) this._isLive && G && (w = "WEBCLIENT_H5_" + this._randomId());
                            else try {
                                (w = sessionStorage.getItem(k) || "") || (w = "WEBCLIENT_H5_PLAYBACK_" + this._randomId(), sessionStorage.setItem(k, w))
                            } catch (e) { console.error(e) }
                            m = t || n ? "live" : "playback", i = t || n || !this._downloadServer ? v : this._downloadServer;
                            r.runtimeEnv === I.SDK_RUNTIME_ENV.DEVELOPMENT && (i = v);
                            v = (i = i.toLowerCase()).lastIndexOf("/cds"); - 1 < v && (i = i.substring(0, v)), i.startsWith("http") || i.startsWith("ws") || (i = "".concat(o, "://") + i);
                            m = "".concat(i, "/h5player/").concat(m);
                            if (m += "?requestTime=".concat(Date.now(), "&productKey=").concat(l, "&deviceId=").concat(a, "&channelNo=").concat(u, "&token=").concat(s, "&hasAudio=").concat(y, "&region=").concat(h, "&isPermanentStorage=").concat(d), t ? (r.clientId && -1 < r.clientId.indexOf("WEBCLIENT_H5_PLAYBACK_") && (r.clientId = r.clientId.replace("WEBCLIENT_H5_PLAYBACK_", "WEBCLIENT_H5_")), e && this._relayWebSocket && r.isSDCardPlayback && (r.clientId = this._relayWebSocket._clientId), m += "&channel=".concat(g, "&deviceName=").concat(r.deviceName, "&clientId=").concat(r.clientId || w, "&shareId=").concat(c || "", "&relayServer=").concat(b)) : (m += "&startTime=".concat(this._playbackCurrentTime, "&downloadServer=").concat(this._downloadServer, "&channelId=").concat(this._mapChannelId(g) || ""), this._nextRawId && (m += "&rawId=".concat(this._nextRawId)), this._log("GB云存储 " + this._hasCloudGb), this._log(m), this._endTime && (m += "&endTime=".concat(n ? this._endTime : this._endTime + z)), n && (r.clientId && r.clientId.indexOf("WEBCLIENT_H5_PLAYBACK_") < 0 && (r.clientId = r.clientId.replace("WEBCLIENT_H5_", "WEBCLIENT_H5_PLAYBACK_")), m += "&channel=".concat(g, "&deviceName=").concat(r.deviceName, "&clientId=").concat(r.clientId || w, "&shareId=").concat(c || "", "&relayServer=").concat(b), m += "&playbackRate=".concat(this._playbackRate))), m += "&isSDCardPlayback=".concat(_), m += "&preConnect=".concat(e || !1), m += "&releaseVersion=".concat(this._releaseVersion || ""), G && (m += "&isSupportWASM=1"), E) return m;
                            E = m.split("?"), m = (0, C.default)(E, 2), E = m[0], m = m[1];
                            return E + "?_paramStr_=" + (0, D.compile)(JSON.stringify((0, D.query2json)(m)))
                        }
                    }, { key: "destroy", value: function() { this._fullScreenChangeEvent && document.removeEventListener(this._fullScreenChangeEvent, this._onFullScreenChange), U && window.removeEventListener("orientationchange", this._onOrientationChange), this._onVisibilityChangeEvent && (document.removeEventListener("visibilitychange", this._onVisibilityChange), this._relayWebSocket && (this._relayWebSocket.destroy(), this._relayWebSocket = null)), this._wasmCanvasElement && this._getWASMCacnvasContext().getExtension("WEBGL_lose_context").loseContext(), clearTimeout(this._delayPlayRecordTimer), this._resetFlvPlayerCounter = 0, this._destroyPlayer(), this._emitter.removeAllListeners(), this._emitter = null, this._zoomElement && (this._zoomElement._dom.remove("click", this._onZoomElementClick), this._zoomElement.destroy()), this._fishEyeElement && this._fishEyeElement.destroy(), this._isDestroyed = !0, this._log("destroy called. this._isDestroyed=" + this._isDestroyed) } }, {
                        key: "pause",
                        value: function() {
                            var e;
                            this._isPause || this._isDestroyed || (this._isPause = !0, clearTimeout(this._resetFlvPlayerTimer || -1), this._showPausedElement(), this._showScreenShotElement(), this._hideLoadingElement(), this._log("pause called. isLive =", this._isLive), this._webPlayer && (this._isLive || this._isGBDevice && !this._options.hasCloudGb || this._options.isSDCardPlayback ? this._destroyPlayer() : this._webPlayer.pause(), this._isPlaying = !1, e = y.default.PLAYER_PAUSE, this.emit(e), this._refreshControlBarUI(e)))
                        }
                    }, {
                        key: "_sendCmdToServer",
                        value: function(e) {
                            e = 0 < arguments.length && void 0 !== e ? e : {};
                            this._webPlayer && this._webPlayer.sendToWebSocket(e)
                        }
                    }, {
                        key: "resume",
                        value: function() {
                            if (!this._isPlaying && !this._isDestroyed) {
                                var e = this._options,
                                    t = e.mp4Url,
                                    e = e.disableLive;
                                if (this._isLive) e || (this.emit(y.default.PLAYER_BUFFER), this._isPause = !1, this.play());
                                else {
                                    if (this._isGBDevice && this._isArrivedAtEndTime) return void this._playAtTime(this._startTime, this._downloadServer, this._endTime);
                                    if (this._endTime && this._playbackCurrentTime >= this._endTime - z) return void this.pause();
                                    this._isPause = !1, t ? this._isEnded ? this.seekMp4(0) : this._webPlayer.resume() : this._playAtTime(this._playbackCurrentTime, this._downloadServer, this._endTime)
                                }
                                this._hidePausedElement()
                            }
                        }
                    }, { key: "stop", value: function(e) { void 0 !== e && (this._isLive = e), this._isPause = !1, this.stopFishEye(), this._destroyPlayer(), this._showPausedElement(), this.emit(y.default.PLAYER_STOP) } }, { key: "playLive", value: function(e) { console.warn("[Deprecation] playLive is deprecated, please use: player.play() "), e && (this._options.relayServer = e), this._log("playLive "), this.play() } }, {
                        key: "play",
                        value: function(e) {
                            var t = this,
                                e = e || {},
                                n = e.startTime,
                                r = e.regionServer,
                                i = e.endTime;
                            if (this._isLive = !n, !this._isLive || !this._options.disableLive) {
                                if (!this._alreadyPlayed) return this._alreadyPlayed = !0, void this._playAtTime(n, r, i);
                                this._webPlayer && (this._showScreenShotElement(), this._destroyPlayer(), this._showLoadingElement()), clearTimeout(this._delayPlayRecordTimer), this._delayPlayRecordTimer = setTimeout(function(e) { t._playAtTime(n, r, i) }, 300)
                            }
                        }
                    }, {
                        key: "playMp4",
                        value: function() {
                            var t = this;
                            if (!this._alreadyPlayed) return this._alreadyPlayed = !0, void this.seekMp4();
                            this._webPlayer && (this._destroyPlayer(), this._showLoadingElement()), clearTimeout(this._delayPlayRecordTimer), this._delayPlayRecordTimer = setTimeout(function(e) { t.seekMp4() }, 300)
                        }
                    }, {
                        key: "seekMp4",
                        value: function(e) {
                            if (this._log("seekMp4 seconds", e), this._isLive = !1, this._isPause = !1, this._isEnded = !1, void 0 !== e) return this._playbackCurrentTime = e * z, void(this._webPlayer && this._webPlayer.seek(e));
                            this._webPlayer ? this._resetFlvPlayerDelay() : this._initPlayer()
                        }
                    }, { key: "_setArrivedAtEndTime", value: function(e) { this._isArrivedAtEndTime = e, this._log("_isArrivedAtEndTime = " + e) } }, { key: "playAtTime", value: function(e, t, n) { console.warn("[Deprecation] playAtTime is deprecated, please use: player.play({ startTime, regionServer, endTime }) "), this.play({ startTime: e, regionServer: t, endTime: n }) } }, {
                        key: "_playAtTime",
                        value: function(e, t, n) {
                            !this._options.isSDKMode || this._options.mp4Url || this._onVisibilityChangeEvent || (document.addEventListener("visibilitychange", this._onVisibilityChange, !1), this._onVisibilityChangeEvent = !0), this._resetFlvPlayerCounter = 0, clearTimeout(this._arrivedAtEndTimeTimer), this._isPause = !1, this._setArrivedAtEndTime(!1), this._hidePausedElement();
                            var r = this._options,
                                i = r.downloadServer,
                                o = r.isSDKMode,
                                s = r.deviceId,
                                r = r.channelNo;
                            if (e) e = Math.round(e), this._log("_playAtTime", e, t, n), this.canToChangeStartTime && (this.canToChangeStartTime = !1, this._startTime = e), n && n <= e && console.error("播放回看_playAtTime：开始时间".concat(e, "大于结束时间").concat(n)), this._playbackCurrentTime = e, this._endTime = this._isGBDevice ? n || Date.now() : n, this._isLive = !1, this._downloadServer = t || this._getRegionByTime(e).region || i, this._nextRawId = 0;
                            else if (this._isLive = !0, this._playbackCurrentTime = 0, o) { var a = this.getCanPlayStatus(); if (!a.onlineStatus || !a.deviceStatus) return this.stop() }
                            this._isPreConnect ? this._sendCmdToServer({ cmd: L.REQUEST_MESSAGE_DATA_TYPE.START_PLAY, startTime: this._playbackCurrentTime, endTime: this._endTime }) : this._webPlayer ? this._resetFlvPlayerDelay() : this._initPlayer(), this._isLive || (a = y.default.CALL_GLOBAL_FUNCTION, this.emit(a, "hideBigLoading"), this.emit(a, "hideDisconnectWrapper", s, r), this.emit(a, "hideOffWrapper", s, r))
                        }
                    }, {
                        key: "playBackup",
                        value: function(e) {
                            e = this._playbackCurrentTime - e;
                            e < this._startTime ? console.error("回退播放时间(".concat(e, ")不能小于开始时间(").concat(this._startTime, ")")) : this._playAtTime(e, "", this._endTime)
                        }
                    }, {
                        key: "playForward",
                        value: function(e) {
                            var t = this._endTime || this._playbackCurrentTime + e + 43200 * z,
                                e = this._playbackCurrentTime + e;
                            t <= e ? console.error("开始时间(".concat(e, ")不能大于或等于结束时间(").concat(t, ")")) : this._playAtTime(e, "", t)
                        }
                    }, {
                        key: "setPlaybackRate",
                        value: function(e, t) {
                            t = 1 < arguments.length && void 0 !== t && t;
                            "string" == typeof e && (e = +e);
                            [.25, .5, 1, 2, 4].includes(e) && (t || this._playbackRate !== e) && (this._playbackRate = e, this._webPlayer && this._webPlayer.setPlaybackRate(e))
                        }
                    }, { key: "getPlaybackCurrentTime", value: function() { return this._playbackCurrentTime } }, { key: "setZoom", value: function(e) { this._zoomElement && this._zoomElement.zoom(e) } }, { key: "_audioTalkCheck", value: function() { if (!V && !this.isDeviceHasSpeaker()) throw "unsupport audio talk" } }, { key: "_getAudioTalkOptions", value: function() { return { sampleRate: this._audioEncodeType === w.G726 ? 16e3 : 8e3 } } }, { key: "initTalk", value: function(e) { this._audioTalkCheck(), this._webPlayer && this._isLive && this._webPlayer.initTalk(e, this._getAudioTalkOptions()) } }, { key: "startTalk", value: function() { this._audioTalkCheck(), this._webPlayer && this._isLive && this._webPlayer.startTalk(this._getAudioTalkOptions()) } }, { key: "stopTalk", value: function() { this._audioTalkCheck(), this._webPlayer && this._isLive && this._webPlayer.stopTalk() } }, { key: "isRecord", value: function() { return !this._isLive } }, { key: "getVolume", value: function() { return this._webPlayer ? this._webPlayer.volume || 0 : this._volume } }, {
                        key: "setVolume",
                        value: function(e) {
                            e = 0 < arguments.length && void 0 !== e ? e : 1;
                            this._volume = e, this._webPlayer && (this._webPlayer.volume = e)
                        }
                    }, { key: "setFishEyeAutoCruise", value: function(e) { this._fishEyeElement && this._fishEyeElement.setFishEyeAutoCruise(e) } }, { key: "changeFishEyeMode", value: function(e) { this._fishEyeElement && this._fishEyeElement.changeFishEyeMode(e) } }, { key: "refreshFishEye", value: function(e) { this._fishEyeElement && this._fishEyeElement.refreshFishEye(e) } }, { key: "stopFishEye", value: function() { this._fishEyeElement && this._fishEyeElement.stopFishEye() } }, { key: "playFishEye", value: function() { this._fishEyeElement && this._fishEyeElement.playFishEye() } }, { key: "on", value: function(e, t) { "function" == typeof e && (t = e, e = "_on_player_all_event_"), this._emitter && this._emitter.on(e, t) } }, { key: "off", value: function(e, t) { "function" == typeof e && (t = e, e = "_on_player_all_event_"), this._emitter && this._emitter.removeListener(e, t) } }, {
                        key: "emit",
                        value: function(e) {
                            var t = this._emitter,
                                n = _.default.toArray(arguments);
                            t && (n.unshift(e), t.emit.apply(t, n), n[0] = ["_on_player_all_event_"], t.emit.apply(t, n))
                        }
                    }, {
                        key: "getSectionList",
                        value: function(e, t) {
                            var n = e.startTime,
                                r = e.endTime,
                                i = e.pageSize,
                                o = this._options,
                                e = o.isSDCardPlayback;
                            return o.isSDKMode ? e ? this.getSDCardSectionList({ startTime: n, endTime: r }, t) : this._getSectionList({ startTime: n, endTime: r, pageSize: i }) : Promise.reject('the option "isSDKMode" must be: true')
                        }
                    }, {
                        key: "getSDCardSectionList",
                        value: function(e, n) {
                            var r = this,
                                i = e.startTime,
                                o = e.endTime;
                            if (this._options.isSDCardPlayback && this._webPlayer) return new Promise(function(e, t) { r._webPlayer.getSectionList({ startTime: i, endTime: o, pageSize: 200, timeout: 60 * z }, e) }).then(function() {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                r._log(e);
                                var t = e.hasMore,
                                    t = void 0 === t ? 0 : t,
                                    e = e.list,
                                    e = { hasMore: 1 === t, endTime: i - 1, sectionList: void 0 === e ? [] : e };
                                return n && n(e), e
                            });
                            e = { hasMore: !1, endTime: i - 1, sectionList: [] };
                            return n && n(e), Promise.resolve(e)
                        }
                    }, { key: "isSupportPTZ", value: function() { return this._options.channelNo ? this._isNvrSupportPTZ() : this._isSupportPTZ() } }, {
                        key: "setPTZ",
                        value: function(e) {
                            var t, n, r;
                            this.isSupportPTZ() && (t = (r = this._options).deviceId, n = r.channelNo, (r = this._relayWebSocket) ? r.setPtz({ deviceId: t, channelNo: n, value: e }) : this._setPtz(e))
                        }
                    }, {
                        key: "setPTZContinuous",
                        value: function(e) {
                            var t, n;
                            this._relayWebSocket && (t = (n = this._options).deviceId, n = n.channelNo, this._relayWebSocket.setPtzContinuous({ deviceId: t, channelNo: n, value: e }))
                        }
                    }, {
                        key: "setPTZPreset",
                        value: function(e) {
                            var t, n = e.pan,
                                r = e.tilt;
                            this._relayWebSocket && (e = (t = this._options).deviceId, t = t.channelNo, this._relayWebSocket.setPtzPreset({ deviceId: e, channelNo: t, pan: n, tilt: r }))
                        }
                    }, {
                        key: "getPTZPreset",
                        value: function() {
                            var n = this;
                            if (!this._relayWebSocket) return Promise.reject("websocket not exist");
                            var e = this._options,
                                r = e.deviceId,
                                i = e.channelNo,
                                o = m.default.getMessageSession();
                            return new Promise(function(e, t) { n._relayWebSocket.getPtzPreset({ deviceId: r, channelNo: i, msgSession: o }), n._onRelayMessageCallbacks[o] = { resolve: e, reject: t } })
                        }
                    }, {
                        key: "getSDCardStorageInfo",
                        value: function() {
                            var n = this;
                            if (!this._relayWebSocket) return Promise.reject("websocket not exist");
                            var e = this._options,
                                r = e.deviceId,
                                i = e.channelNo,
                                o = m.default.getMessageSession();
                            return new Promise(function(e, t) { n._relayWebSocket.getSDCardStorageInfo({ deviceId: r, channelNo: i, msgSession: o }), n._onRelayMessageCallbacks[o] = { resolve: e, reject: t } })
                        }
                    }, {
                        key: "formatSDCard",
                        value: function() {
                            var n = this;
                            if (!this._relayWebSocket) return Promise.reject("websocket not exist");
                            var e = this._options,
                                r = e.deviceId,
                                i = e.channelNo,
                                o = m.default.getMessageSession();
                            return new Promise(function(e, t) { n._relayWebSocket.formatSDCard({ deviceId: r, channelNo: i, msgSession: o }), n._onRelayMessageCallbacks[o] = { resolve: e, reject: t } })
                        }
                    }, { key: "setFaceBorderColor", value: function(e) { this._faceBorderColor = Object.assign(this.faceBorderColor || {}, { default: e }), this._webPlayer && this._webPlayer.setFaceBorderColor(e) } }, { key: "setFaceDrawSwitcher", value: function(e) { this._faceDrawSwitcher = e, this._webPlayer && this._webPlayer.setFaceDrawSwitcher(e) } }, { key: "getFaceDrawSwitcher", value: function() { return this._faceDrawSwitcher } }], [{ key: "isSupportAudioTalk", value: function() { return V } }, { key: "isSupportWASM", value: function() { return G } }, { key: "isSupported", value: function() { return q && G } }, { key: "isSupportedMSE", value: function() { return q } }, { key: "supportMultiThread", value: function() { return H } }, {
                        key: "setEncryptParams",
                        value: function(e) {
                            (0, D.encryptParams)(e)
                        }
                    }, { key: "Html5PlayerEvents", get: function() { return console.warn("[Deprecation] Html5PlayerEvents is deprecated, please use: WebPlayer.WebPlayerEvents"), y.default } }]), o
                }(_.default);
            e.WebPlayerEvents = y.default, e.WebPlayerEnum = I.default, e.Browser = O,
                function(a, l) {
                    var u = v.default.CLIENT_ERROR;
                    a.addEventListener("error", function(e) {
                        console.error(e);
                        var t = e.message,
                            n = e.target,
                            r = n.currentSrc,
                            i = n.src,
                            o = n.tagName,
                            s = n.error;
                        n != a && setTimeout(function() { l.reportClientInfo(u, { message: t || ("VIDEO" === o && s ? "MediaError:" + s.code : e.toString()), resourceUrl: r || i }) }, 0)
                    }, !0);
                    var o = a.onerror,
                        s = [];
                    a.onerror = function(e, t, n, r, i) { o && o(e, t, n, r, i), console.error(e, t, n, r, i), s.includes(e) || (s.push(e), setTimeout(function() { r = r || a.event && a.event.errorCharacter || 0, l.reportClientInfo(u, { line: n, url: t, col: r, msg: e, stack: i && i.stack ? i.stack : "" }) }, 0)) }
                }(window, e), n.default = e
        }, { "../core/audioEncodeType.js": 1, "../core/videoEncodeType.js": 2, "../core/websocketCmdType": 3, "./enum": 143, "./html5PlayerEvents": 144, "./relayWebSocket": 146, "./reportTypes": 147, "./util/api": 148, "./util/loadScript": 154, "./util/polyfill.js": 156, "./webOpenAPI": 160, "@babel/runtime/helpers/assertThisInitialized": 6, "@babel/runtime/helpers/asyncToGenerator": 7, "@babel/runtime/helpers/classCallCheck": 8, "@babel/runtime/helpers/createClass": 9, "@babel/runtime/helpers/defineProperty": 10, "@babel/runtime/helpers/getPrototypeOf": 12, "@babel/runtime/helpers/inherits": 13, "@babel/runtime/helpers/interopRequireDefault": 14, "@babel/runtime/helpers/possibleConstructorReturn": 17, "@babel/runtime/helpers/slicedToArray": 19, "@babel/runtime/helpers/typeof": 21, "@babel/runtime/regenerator": 23, events: 30, flvjs: 50 }]
    }, {}, [145])(145)
});