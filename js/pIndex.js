!function (e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {i: n, l: !1, exports: {}};
        return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }

    var r = {};
    return t.m = e, t.c = r, t.i = function (e) {
        return e
    }, t.d = function (e, t, r) {
        Object.defineProperty(e, t, {configurable: !1, enumerable: !0, get: r})
    }, t.n = function (e) {
        var r = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(r, "a", r), r
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 1)
}([function (e, t, r) {
    (function (e, n) {
        function i(e, t) {
            this._id = e, this._clearFn = t
        }

        var o = r(4).nextTick, a = Function.prototype.apply, s = Array.prototype.slice, c = {}, u = 0;
        t.setTimeout = function () {
            return new i(a.call(setTimeout, window, arguments), clearTimeout)
        }, t.setInterval = function () {
            return new i(a.call(setInterval, window, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function (e) {
            e.close()
        }, i.prototype.unref = i.prototype.ref = function () {
        }, i.prototype.close = function () {
            this._clearFn.call(window, this._id)
        }, t.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout()
            }, t))
        }, t.setImmediate = "function" == typeof e ? e : function (e) {
            var r = u++, n = !(arguments.length < 2) && s.call(arguments, 1);
            return c[r] = !0, o(function () {
                c[r] && (n ? e.apply(null, n) : e.call(null), t.clearImmediate(r))
            }), r
        }, t.clearImmediate = "function" == typeof n ? n : function (e) {
            delete c[e]
        }
    }).call(t, r(0).setImmediate, r(0).clearImmediate)
}, function (e, t, r) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, o = r(3).default, a = r(2), s = {
        mode: ["dig", "sa"],
        autosend: !0,
        globalData: {pid: "", token: "", uicode: ""},
        saConfig: {
            server_url: "http://upload.sensors.lianjia.com/sa?project=production",
            use_app_track: !0,
            heatmap: {},
            heatmap_url: "https://static.sensorsdata.cn/sdk/1.10.1/heatmap.min.js",
            show_log: !0
        },
        digConfig: {autosend: !1, clearEmpty: !1},
        domConfig: {
            clickClass: "CLICKDATA",
            clickEvtKey: "data-click-evtid",
            clickEventKey: "data-click-eventid",
            clickActionKey: "data-action",
            viewClass: "VIEWDATA",
            viewEvtKey: "data-view-evtid",
            viewEventKey: "data-view-eventid",
            viewActionKey: "data-action"
        }
    };
    Object.assign = Object.assign || function () {
        var e = arguments, t = e.length;
        if (t <= 1) return e[0];
        for (var r, n = e[0], i = 1; i < t; i++) {
            r = e[i];
            for (var o in r) n[o] = r[o]
        }
        return n
    };
    var c = function () {
        function e(t) {
            var r = this;
            n(this, e), this._track_config = Object.assign({}, s, t || {}), this._track_config.globalData = Object.assign({}, s.globalData, this._track_config.globalData || {}, this._track_config.globalData && this._track_config.globalData.action || {}), this._track_config.saConfig = Object.assign({}, s.saConfig, this._track_config.saConfig || {}), this._track_config.digConfig = Object.assign({}, s.digConfig, this._track_config.digConfig || {}), this._track_config.domConfig = Object.assign({}, s.domConfig, this._track_config.domConfig || {}), this._track_config.globalData.uuid = this._getCookie("lianjia_uuid")[0] || "", this._track_config.globalData.ssid = this._getCookie("lianjia_ssid")[0] || "", window.$ljBridge && $ljBridge.ready(function (e, t) {
                var n = e.getDeviceInfo() || {};
                Object.assign(r._track_config.globalData, n)
            }), this._track_config.mode.indexOf("dig") >= 0 && (this._dig_lock = !0, window.__UDL_CONFIG = window.__UDL_CONFIG || {}, window.$ULOG = window.$ULOG || {}, Object.assign(window.__UDL_CONFIG, this._track_config.globalData), Object.assign(window.$ULOG, this._track_config.digConfig), !function (e) {
                function t(n) {
                    if (r[n]) return r[n].exports;
                    var i = r[n] = {i: n, l: !1, exports: {}};
                    return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
                }

                var r = {};
                t.m = e, t.c = r, t.d = function (e, r, n) {
                    t.o(e, r) || Object.defineProperty(e, r, {configurable: !1, enumerable: !0, get: n})
                }, t.n = function (e) {
                    var r = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(r, "a", r), r
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 0)
            }([function (e, t, r) {
                !function (e) {
                    if (!window.$ULOG || 1 !== window.$ULOG.state) {
                        var t = {
                            add: function (e, t, r) {
                                e.addEventListener ? e.addEventListener(t, r, !1) : e.attachEvent ? e.attachEvent("on" + t, r) : null === e["on" + t] && (e["on" + t] = r)
                            }, remove: function (e, t, r) {
                                e.removeEventListener ? e.removeEventListener(t, r, !1) : e.dispatchEvent ? e.detachEvent("on" + t, r) : e["on" + t] = null
                            }
                        }, r = {
                            extend: function (e, t) {
                                if (null === e || "object" != ("undefined" == typeof e ? "undefined" : i(e))) return e;
                                if (e.constructor !== Object && e.constructor !== Array) return e;
                                if (e.constructor === Date || e.constructor === RegExp || e.constructor === Function || e.constructor === String || e.constructor === Number || e.constructor === Boolean) return new e.constructor(e);
                                t = t || new e.constructor;
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = void 0 === t[n] ? r.extend(e[n], null) : t[n]);
                                return t
                            }, getIndex: function (e, t) {
                                if (t.indexOf) return t.indexOf(e);
                                for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
                                return -1
                            }, getCookie: function (e) {
                                if (document.cookie.length > 0) {
                                    var t = document.cookie.indexOf(e + "=");
                                    if (-1 !== t) {
                                        t = t + e.length + 1;
                                        var r = document.cookie.indexOf(";", t);
                                        return -1 === r && (r = document.cookie.length), decodeURIComponent(document.cookie.substring(t, r))
                                    }
                                }
                                return ""
                            }
                        }, n = {
                            target: "//dig.lianjia.com/t.gif", send: function (e) {
                                var t = new Image, r = this.target, n = [];
                                try {
                                    e = encodeURIComponent(JSON.stringify(e))
                                } catch (e) {
                                }
                                e && (n.push("r=" + +new Date), n.push("d=" + e)), r += "?" + n.join("&"), t.onload = t.onerror = function () {
                                    t = null
                                }, t.src = r
                            }, makeParam: function (t) {
                                var n = {};
                                return n = r.extend(t, n), n = r.extend(e, n), n = r.extend({
                                    key: window.location.href,
                                    uuid: r.getCookie("lianjia_uuid"),
                                    ssid: r.getCookie("lianjia_ssid")
                                }, n)
                            }, parseElement: function (e) {
                                var t = e.tagName.toLowerCase(), n = e.className.replace(/ /g, ""), i = e.id;
                                n = 0 === n.length ? "" : "." + n.replace(/ /g, "."), i = 0 === i.length ? "" : "#" + i;
                                var o = t + i + n;
                                return {
                                    selector: o,
                                    index: null === e.parentElement ? 0 : r.getIndex(e, Array.prototype.slice.apply(e.parentElement.querySelectorAll(o)))
                                }
                            }, loadTime: (new Date).getTime(), buffer: []
                        };
                        window.$ULOG && void 0 === window.$ULOG.state && (window.$ULOG.buffer && window.$ULOG.buffer.length > 0 && (n.buffer = r.extend(window.$ULOG.buffer, [])), !1 !== window.$ULOG.autosend && (n.autosend = !0), void 0 !== window.$ULOG.target && (n.target = window.$ULOG.target)), window.$ULOG = {
                            send: function (e, t) {
                                t = t || {}, t.evt = e + "";
                                var i = n.makeParam(t);
                                switch (t.evt) {
                                    case"1":
                                        n.send(r.extend({cid: r.getCookie("select_city") || ""}, i));
                                        break;
                                    case"2":
                                        var o = Math.round(((new Date).getTime() - n.loadTime) / 1e3);
                                        n.send(r.extend({stt: o}, i));
                                        break;
                                    case"3":
                                    case"4":
                                        n.send(r.extend({
                                            f: document.referrer || "",
                                            cid: r.getCookie("select_city") || ""
                                        }, i));
                                        break;
                                    case"1,3":
                                    default:
                                        n.send(i)
                                }
                            }, update: function (t) {
                                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                            }, state: 1
                        };
                        for (var o in n.buffer) if (n.buffer.hasOwnProperty(o)) {
                            var a = n.buffer[o];
                            "string" == typeof a ? window.$ULOG.send(a) : window.$ULOG.send(a[0], a[1])
                        }
                        n.autosend && (window.$ULOG.send("1,3"), t.add(window, "beforeunload", function () {
                            window.$ULOG.send("2")
                        }))
                    }
                }(window.__UDL_CONFIG || {})
            }]), this._dig_ready = !0, this._sendDig()), this._track_config.mode.indexOf("sa") < 0 ? a.readySend = function (e, t) {
                var n = r._combineData(e);
                if (r._track_config.digConfig && r._track_config.digConfig.clearEmpty) for (var i in n.action) !n.action[i] && delete n.action[i];
                return r._dig_lock && r._sendDig(n.evt_id, n.event, n.action, n.globalData), !0
            } : a.readySend = function (e, t) {
                var n = r._combineData(e);
                if (r._track_config.digConfig && r._track_config.digConfig.clearEmpty) for (var i in n.action) !n.action[i] && delete n.action[i];
                return r._dig_lock && r._sendDig(n.evt_id, n.event, n.action, n.globalData), !1
            }, a.init(this._track_config.saConfig), this._track_config.saConfig.user_id && a.login(this._track_config.saConfig.user_id), this._track_config.autosend && a.quick("autoTrack", this._track_config.globalData), this._bind()
        }

        return e.prototype._combineData = function (e) {
            try {
                var t = {};
                if (t.globalData = {}, t.globalData.distinct_id = e.distinct_id, e.properties) {
                    e.properties.actionData ? (t.action = JSON.parse(e.properties.actionData), delete e.properties.actionData) : t.action = {};
                    for (var r in e.properties) void 0 == t.action[r] && (t.globalData[r] = e.properties[r])
                }
                return "$pageview" == e.event ? t.evt_id = "1,3" : e.properties.evt ? t.evt_id = e.properties.evt : "$WebClick" == e.event ? t.evt_id = "10" : "$WebStay" == e.event ? t.evt_id = "11" : t.evt_id = "12", t.event = e.event, t
            } catch (e) {
            }
            return {}
        }, e.prototype._getCookie = function (e) {
            e = e.replace(/([\.\[\]\$])/g, "\\$1");
            for (var t = new RegExp("(^| )" + e + "=([^;]*)?;", "ig"), r = document.cookie + ";", n = t.exec(r), i = []; n;) i.push(n[2] || ""), n = t.exec(r);
            return i
        }, e.prototype._bind = function () {
            this._track_config.domConfig && this._track_config.domConfig.clickClass && (document.body.attachEvent ? document.body.attachEvent("onclick", this._clickData.bind(this)) : document.body.addEventListener("click", this._clickData.bind(this), !1)), this._track_config.domConfig && this._track_config.domConfig.viewClass && (document.body.attachEvent ? window.attachEvent("onscroll", this._viewData.bind(this)) : window.addEventListener("scroll", this._viewData.bind(this), !1), this.checkNodes()), this._dig_lock && !this._track_config.digConfig.autosend && (document.body.attachEvent ? window.attachEvent("onbeforeunload", this._leavePage.bind(this)) : window.addEventListener("beforeunload", this._leavePage.bind(this), !1))
        }, e.prototype._loadJS = function (e) {
            var t = "readyState", r = "onreadystatechange", n = void 0, i = void 0, a = +new Date,
                s = document.createElement("script");
            return s.src = e, s.async = 1, document.getElementsByTagName("head")[0].appendChild(s), new o(function (e, o) {
                s.onload = s[r] = function () {
                    n || s[t] && !/^c|loade/.test(s[t]) || (s.onload = s.onerror = s[r] = null, n = 1, i && clearTimeout(i), e(+new Date - a))
                }, s.onerror = function () {
                    s.onload = s.onerror = s[r] = null, n = 1, i && clearTimeout(i), o(8e3)
                }, i = setTimeout(function () {
                    s.onload = s.onerror = s[r] = null, n = 1, o(8e3)
                }, 8e3)
            })
        }, e.prototype._sendDig = function (e, t, r, n) {
            var i = this;
            this._dig_pending = this._dig_pending || [];
            var o = Object.assign({}, this._track_config.globalData, n || {});
            t && (o.event = t), e && this._dig_pending.push({
                evt_id: e,
                action: r,
                globalData: o
            }), this._dig_pending = this._dig_pending.filter(function (e) {
                try {
                    if (i._dig_ready && e && e.evt_id) {
                        var t = e.globalData;
                        return e.action && (t.action = Object.assign({}, t.action || {}, e.action)), $ULOG.send(e.evt_id, t), !1
                    }
                    return !0
                } catch (e) {
                    return !0
                }
            })
        }, e.prototype._sendSA = function (e, t, r, n) {
            e && (r.evt = e);
            var i = Object.assign({}, this._track_config.globalData, r);
            delete r.pid, i.actionData = JSON.stringify(r), n ? a.trackLink(n, t, i) : a.track(t, i)
        }, e.prototype.send = function (e, t, r, n) {
            this._sendSA(e, t || "NOEVENT", r, n)
        }, e.prototype.sendPageView = function () {
            a.quick("autoTrackSinglePage")
        }, e.prototype.resetGlobalData = function (e) {
            Object.assign(this._track_config.globalData, e)
        }, e.prototype._checkInView = function (e) {
            var t = document.documentElement.clientWidth || document.body.clientWidth,
                r = document.documentElement.clientHeight || document.body.clientHeight,
                n = document.documentElement.scrollTop || document.body.scrollTop,
                i = document.documentElement.scrollLeft || document.body.scrollLeft;
            if (!e.getClientRects().length) return !1;
            var o = e.getBoundingClientRect(), a = e.ownerDocument.defaultView,
                s = {top: o.top + a.pageYOffset, left: o.left + a.pageXOffset};
            return s.top - n <= r && s.top - n >= 0 && s.left - i <= t && s.left - i >= 0
        }, e.prototype.checkNodes = function () {
            this._viewNodes = [];
            for (var e = document.querySelectorAll("." + this._track_config.domConfig.viewClass), t = 0; t < e.length; t++) this._viewNodes.push(e[t]);
            this._filterNode()
        }, e.prototype._filterNode = function () {
            var e = this;
            this._viewNodes = (this._viewNodes || []).filter(function (t) {
                if (e._checkInView(t)) {
                    var r = t.getAttribute(e._track_config.domConfig.viewEvtKey),
                        n = t.getAttribute(e._track_config.domConfig.viewEventKey);
                    if (r || n) {
                        var i = t.getAttribute(e._track_config.domConfig.viewActionKey) || "", o = {};
                        return i.split("&").map(function (e) {
                            o[e.split("=")[0]] = e.split("=")[1]
                        }), e.send(r, n, o), t.className = t.className.replace(e._track_config.domConfig.viewClass, ""), !1
                    }
                }
                return !0
            })
        }, e.prototype._leavePage = function () {
            this._sendDig("2")
        }, e.prototype._viewData = function () {
            var e = this;
            this._scrollSt || (this._scrollSt = setTimeout(function () {
                e._filterNode(), e._scrollSt = void 0
            }, 500))
        }, e.prototype._clickData = function (e) {
            for (var t = this, r = e.target || window.event.target; r && r.tagName && "html" != r.tagName.toLocaleLowerCase();) {
                var n = r.className, i = n && "string" == typeof n && n.split(" ") || [];
                if (i.indexOf(this._track_config.domConfig.clickClass) >= 0) {
                    var o = r.getAttribute(this._track_config.domConfig.clickEvtKey),
                        a = r.getAttribute(this._track_config.domConfig.clickEventKey);
                    (a || o) && !function () {
                        var e = r.getAttribute(t._track_config.domConfig.clickActionKey) || "", n = {};
                        e.split("&").map(function (e) {
                            n[e.split("=")[0]] = e.split("=")[1]
                        }), "a" == r.tagName.toLowerCase() && "" != r.getAttribute("href") && "javascript:;" != r.getAttribute("href") && "javascript:void(0);" != r.getAttribute("href") && "javascript:void(0)" != r.getAttribute("href") ? t.send(o, a, n) : t.send(o, a, n)
                    }()
                }
                r = r.parentNode
            }
        }, e
    }(), u = void 0, l = function () {
        function e(t) {
            n(this, e), u ? (this._track = u, this._track.resetGlobalData(t.globalData), console.log("已经实例化过了"), t.autosend && this._track.sendPageView()) : u = this._track = new c(t)
        }

        return e.prototype.send = function (e, t, r) {
            this._track.send(e, t, r)
        }, e.prototype.sendPageView = function () {
            this._track.sendPageView()
        }, e.prototype.resetGlobalData = function (e) {
            this._track.resetGlobalData(e)
        }, e.prototype.checkNodes = function () {
            this._track.checkNodes()
        }, e.prototype.saLogin = function (e) {
            a.login(e)
        }, e.prototype.saLogout = function (e) {
            a.logout(e)
        }, e
    }();
    t.default = l, window.LIANJIA_TRACK = l
}, function (module, exports, __webpack_require__) {
    "use strict";
    (function (module) {
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        !function (e, t) {
            "object" == _typeof(exports) && "object" == _typeof(module) ? module.exports = t() : t()
        }(void 0, function () {
            function app_js_bridge() {
                function e(e) {
                    n = e, _.isJSONString(n) && (n = JSON.parse(n)), i && i(n)
                }

                function t() {
                    "object" == _typeof(window.SensorsData_APP_JS_Bridge) && window.SensorsData_APP_JS_Bridge.sensorsdata_call_app && (n = SensorsData_APP_JS_Bridge.sensorsdata_call_app(), _.isJSONString(n) && (n = JSON.parse(n)))
                }

                function r() {
                    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                        var e = document.createElement("iframe");
                        e.setAttribute("src", "sensorsanalytics://getAppInfo"), document.documentElement.appendChild(e), e.parentNode.removeChild(e), e = null
                    }
                }

                var n = null, i = null;
                window.sensorsdata_app_js_bridge_call_js = function (t) {
                    e(t)
                }, sd.getAppStatus = function (e) {
                    return r(), t(), e ? void (null === n ? i = e : e(n)) : n
                }
            }

            try {
                var sd = window.sensorsDataAnalytic201505, has_declare;
                if (sd ? (sd = window[sd], has_declare = !0) : (sd = {}, has_declare = !1), "function" != typeof sd && "object" != ("undefined" == typeof sd ? "undefined" : _typeof(sd)) || sd.has_load_sdk) return !1;
                sd._t = sd._t || 1 * new Date, sd.has_load_sdk = !0, "object" != ("undefined" == typeof JSON ? "undefined" : _typeof(JSON)) && (JSON = {}), function () {
                    function f(e) {
                        return 10 > e ? "0" + e : e
                    }

                    function this_value() {
                        return this.valueOf()
                    }

                    function quote(e) {
                        return rx_escapable.lastIndex = 0, rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function (e) {
                            var t = meta[e];
                            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"' : '"' + e + '"'
                    }

                    function str(e, t) {
                        var r, n, i, o, a, s = gap, c = t[e];
                        switch (c && "object" == ("undefined" == typeof c ? "undefined" : _typeof(c)) && "function" == typeof c.toJSON && (c = c.toJSON(e)), "function" == typeof rep && (c = rep.call(t, e, c)), "undefined" == typeof c ? "undefined" : _typeof(c)) {
                            case"string":
                                return quote(c);
                            case"number":
                                return isFinite(c) ? String(c) : "null";
                            case"boolean":
                            case"null":
                                return String(c);
                            case"object":
                                if (!c) return "null";
                                if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                                    for (o = c.length, r = 0; o > r; r += 1) a[r] = str(r, c) || "null";
                                    return i = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, i
                                }
                                if (rep && "object" == ("undefined" == typeof rep ? "undefined" : _typeof(rep))) for (o = rep.length, r = 0; o > r; r += 1) "string" == typeof rep[r] && (n = rep[r], i = str(n, c), i && a.push(quote(n) + (gap ? ": " : ":") + i)); else for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (i = str(n, c), i && a.push(quote(n) + (gap ? ": " : ":") + i));
                                return i = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, i
                        }
                    }

                    var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                        rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                        rx_four = /(?:^|:|,)(?:\s*\[)+/g,
                        rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
                        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                    }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);
                    var gap, indent, meta, rep;
                    "function" != typeof JSON.stringify && (meta = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    }, JSON.stringify = function (e, t, r) {
                        var n;
                        if (gap = "", indent = "", "number" == typeof r) for (n = 0; r > n; n += 1) indent += " "; else "string" == typeof r && (indent = r);
                        if (rep = t, t && "function" != typeof t && ("object" != ("undefined" == typeof t ? "undefined" : _typeof(t)) || "number" != typeof t.length)) throw new Error("JSON.stringify");
                        return str("", {"": e})
                    }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                        function walk(e, t) {
                            var r, n, i = e[t];
                            if (i && "object" == ("undefined" == typeof i ? "undefined" : _typeof(i))) for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (n = walk(i, r), void 0 !== n ? i[r] = n : delete i[r]);
                            return reviver.call(e, t, i)
                        }

                        var j;
                        if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (e) {
                            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
                        throw new SyntaxError("JSON.parse")
                    })
                }();
                var _ = sd._ = {};
                sd.para_default = {
                    name: "sa",
                    max_referrer_string_length: 200,
                    max_string_length: 5e3,
                    cross_subdomain: !0,
                    show_log: !0,
                    is_debug: !1,
                    debug_mode: !1,
                    debug_mode_upload: !1,
                    session_time: 0,
                    use_client_time: !1,
                    source_channel: [],
                    vtrack_ignore: {},
                    auto_init: !0,
                    is_single_page: !1,
                    is_trackLink: !0,
                    source_type_config: {utm: null, search: null, social: null},
                    callback_timeout: 1e3,
                    is_track_device_id: !1,
                    use_app_track: !1
                }, sd.initPara = function (e) {
                    sd.para = e || sd.para || {};
                    var t;
                    for (t in sd.para_default) void 0 === sd.para[t] && (sd.para[t] = sd.para_default[t]);
                    if (!sd.para.heatmap_url && sd.para.sdk_url && (sd.para.heatmap_url = sd.para.sdk_url.replace(/[^\/]+\.js[^\/]*$/, "heatmap.min.js")), _.isObject(sd.para.heatmap) && (sd.para.heatmap.clickmap = sd.para.heatmap.clickmap || "default", sd.para.heatmap.scroll_notice_map = sd.para.heatmap.scroll_notice_map || "default", sd.para.heatmap.scroll_delay_time = sd.para.heatmap.scroll_delay_time || 4e3), "object" == _typeof(sd.para.server_url) && sd.para.server_url.length) for (t = 0; t < sd.para.server_url.length; t++) /sa\.gif[^\/]*$/.test(sd.para.server_url[t]) || (sd.para.server_url[t] = sd.para.server_url[t].replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2")); else /sa\.gif[^\/]*$/.test(sd.para.server_url) || (sd.para.server_url = sd.para.server_url.replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
                    "string" == typeof sd.para.server_url && (sd.para.debug_mode_url = sd.para.debug_mode_url || sd.para.server_url.replace("sa.gif", "debug")), sd.para.noCache === !0 ? sd.para.noCache = "?" + (new Date).getTime() : sd.para.noCache = ""
                };
                var ArrayProto = Array.prototype, FuncProto = Function.prototype, ObjProto = Object.prototype,
                    slice = ArrayProto.slice, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty,
                    LIB_VERSION = "1.9.11";
                sd.lib_version = LIB_VERSION;
                var error_msg = [], is_first_visitor = !1, just_test_distinctid = 0, just_test_distinctid_2 = 0,
                    just_test_distinctid_detail = 0, just_test_distinctid_detail2 = 0,
                    source_channel_standard = "utm_source utm_medium utm_campaign utm_content utm_term",
                    logger = "object" == ("undefined" == typeof logger ? "undefined" : _typeof(logger)) ? logger : {};
                logger.info = function () {
                    if ((_.sessionStorage.isSupport() && "true" === sessionStorage.getItem("sensorsdata_jssdk_debug") || sd.para.show_log) && ((sd.para.show_log === !0 || "string" === sd.para.show_log || sd.para.show_log === !1) && (arguments[0] = _.formatJsonString(arguments[0])), "object" == ("undefined" == typeof console ? "undefined" : _typeof(console)) && console.log)) try {
                        return console.log.apply(console, arguments)
                    } catch (e) {
                        console.log(arguments[0])
                    }
                }, function () {
                    var e = (FuncProto.bind, ArrayProto.forEach), t = ArrayProto.indexOf, r = Array.isArray, n = {},
                        i = _.each = function (t, r, i) {
                            if (null == t) return !1;
                            if (e && t.forEach === e) t.forEach(r, i); else if (t.length === +t.length) {
                                for (var o = 0, a = t.length; a > o; o++) if (o in t && r.call(i, t[o], o, t) === n) return !1
                            } else for (var s in t) if (hasOwnProperty.call(t, s) && r.call(i, t[s], s, t) === n) return !1
                        };
                    _.logger = logger, _.extend = function (e) {
                        return i(slice.call(arguments, 1), function (t) {
                            for (var r in t) void 0 !== t[r] && (e[r] = t[r])
                        }), e
                    }, _.extend2Lev = function (e) {
                        return i(slice.call(arguments, 1), function (t) {
                            for (var r in t) void 0 !== t[r] && (_.isObject(t[r]) && _.isObject(e[r]) ? _.extend(e[r], t[r]) : e[r] = t[r])
                        }), e
                    }, _.coverExtend = function (e) {
                        return i(slice.call(arguments, 1), function (t) {
                            for (var r in t) void 0 !== t[r] && void 0 === e[r] && (e[r] = t[r])
                        }), e
                    }, _.isArray = r || function (e) {
                        return "[object Array]" === toString.call(e)
                    }, _.isFunction = function (e) {
                        if (!e) return !1;
                        try {
                            return /^\s*\bfunction\b/.test(e)
                        } catch (e) {
                            return !1
                        }
                    }, _.isArguments = function (e) {
                        return !(!e || !hasOwnProperty.call(e, "callee"))
                    }, _.toArray = function (e) {
                        return e ? e.toArray ? e.toArray() : _.isArray(e) ? slice.call(e) : _.isArguments(e) ? slice.call(e) : _.values(e) : []
                    }, _.values = function (e) {
                        var t = [];
                        return null == e ? t : (i(e, function (e) {
                            t[t.length] = e
                        }), t)
                    }, _.include = function (e, r) {
                        var o = !1;
                        return null == e ? o : t && e.indexOf === t ? -1 != e.indexOf(r) : (i(e, function (e) {
                            return o || (o = e === r) ? n : void 0
                        }), o)
                    }
                }(), _.inherit = function (e, t) {
                    return e.prototype = new t, e.prototype.constructor = e, e.superclass = t.prototype, e
                }, _.trim = function (e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }, _.isObject = function (e) {
                    return "[object Object]" == toString.call(e) && null != e
                }, _.isEmptyObject = function (e) {
                    if (_.isObject(e)) {
                        for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
                        return !0
                    }
                    return !1
                }, _.isUndefined = function (e) {
                    return void 0 === e
                }, _.isString = function (e) {
                    return "[object String]" == toString.call(e)
                }, _.isDate = function (e) {
                    return "[object Date]" == toString.call(e)
                }, _.isBoolean = function (e) {
                    return "[object Boolean]" == toString.call(e)
                }, _.isNumber = function (e) {
                    return "[object Number]" == toString.call(e) && /[\d\.]+/.test(String(e))
                }, _.isElement = function (e) {
                    return !(!e || 1 !== e.nodeType)
                }, _.isJSONString = function (e) {
                    try {
                        JSON.parse(e)
                    } catch (e) {
                        return !1
                    }
                    return !0
                }, _.decodeURIComponent = function (e) {
                    var t = e;
                    try {
                        t = decodeURIComponent(e)
                    } catch (r) {
                        t = e
                    }
                    return t
                }, _.encodeDates = function (e) {
                    return _.each(e, function (t, r) {
                        _.isDate(t) ? e[r] = _.formatDate(t) : _.isObject(t) && (e[r] = _.encodeDates(t))
                    }), e
                }, _.now = Date.now || function () {
                    return (new Date).getTime()
                }, _.throttle = function (e, t, r) {
                    var n, i, o, a = null, s = 0;
                    r || (r = {});
                    var c = function () {
                        s = r.leading === !1 ? 0 : _.now(), a = null, o = e.apply(n, i), a || (n = i = null)
                    };
                    return function () {
                        var u = _.now();
                        s || r.leading !== !1 || (s = u);
                        var l = t - (u - s);
                        return n = this, i = arguments, 0 >= l || l > t ? (a && (clearTimeout(a), a = null), s = u, o = e.apply(n, i), a || (n = i = null)) : a || r.trailing === !1 || (a = setTimeout(c, l)), o
                    }
                }, _.hashCode = function (e) {
                    if ("string" != typeof e) return 0;
                    var t = 0, r = null;
                    if (0 == e.length) return t;
                    for (var n = 0; n < e.length; n++) r = e.charCodeAt(n), t = (t << 5) - t + r, t &= t;
                    return t
                }, _.formatDate = function (e) {
                    function t(e) {
                        return 10 > e ? "0" + e : e
                    }

                    return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds())
                }, _.searchObjDate = function (e) {
                    _.isObject(e) && _.each(e, function (t, r) {
                        _.isObject(t) ? _.searchObjDate(e[r]) : _.isDate(t) && (e[r] = _.formatDate(t))
                    })
                }, _.formatJsonString = function (e) {
                    try {
                        return JSON.stringify(e, null, "  ")
                    } catch (t) {
                        return JSON.stringify(e)
                    }
                }, _.formatString = function (e) {
                    return e.length > sd.para.max_string_length ? (logger.info("字符串长度超过限制，已经做截取--" + e), e.slice(0, sd.para.max_string_length)) : e
                }, _.searchObjString = function (e) {
                    _.isObject(e) && _.each(e, function (t, r) {
                        _.isObject(t) ? _.searchObjString(e[r]) : _.isString(t) && (e[r] = _.formatString(t))
                    })
                }, _.unique = function (e) {
                    for (var t, r = [], n = {}, i = 0; i < e.length; i++) t = e[i], t in n || (n[t] = !0, r.push(t));
                    return r
                }, _.strip_sa_properties = function (e) {
                    return _.isObject(e) ? (_.each(e, function (t, r) {
                        if (_.isArray(t)) {
                            var n = [];
                            _.each(t, function (e) {
                                _.isString(e) ? n.push(e) : logger.info("您的数据-", r, t, "的数组里的值必须是字符串,已经将其删除")
                            }), 0 !== n.length ? e[r] = n : (delete e[r], logger.info("已经删除空的数组"))
                        }
                        _.isString(t) || _.isNumber(t) || _.isDate(t) || _.isBoolean(t) || _.isArray(t) || (logger.info("您的数据-", r, t, "-格式不满足要求，我们已经将其删除"), delete e[r])
                    }), e) : e
                }, _.strip_empty_properties = function (e) {
                    var t = {};
                    return _.each(e, function (e, r) {
                        null != e && (t[r] = e)
                    }), t
                }, _.utf8Encode = function (e) {
                    e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                    var t, r, n, i = "", o = 0;
                    for (t = r = 0, o = e.length, n = 0; o > n; n++) {
                        var a = e.charCodeAt(n), s = null;
                        128 > a ? r++ : s = a > 127 && 2048 > a ? String.fromCharCode(a >> 6 | 192, 63 & a | 128) : String.fromCharCode(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128), null !== s && (r > t && (i += e.substring(t, r)), i += s, t = r = n + 1)
                    }
                    return r > t && (i += e.substring(t, e.length)), i
                }, _.base64Encode = function (e) {
                    var t, r, n, i, o, a, s, c, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        l = 0, d = 0, f = "", p = [];
                    if (!e) return e;
                    e = _.utf8Encode(e);
                    do t = e.charCodeAt(l++), r = e.charCodeAt(l++), n = e.charCodeAt(l++), c = t << 16 | r << 8 | n, i = c >> 18 & 63, o = c >> 12 & 63, a = c >> 6 & 63, s = 63 & c, p[d++] = u.charAt(i) + u.charAt(o) + u.charAt(a) + u.charAt(s); while (l < e.length);
                    switch (f = p.join(""), e.length % 3) {
                        case 1:
                            f = f.slice(0, -2) + "==";
                            break;
                        case 2:
                            f = f.slice(0, -1) + "="
                    }
                    return f
                }, _.UUID = function () {
                    var e = function e() {
                        for (var e = 1 * new Date, t = 0; e == 1 * new Date;) t++;
                        return e.toString(16) + t.toString(16)
                    }, t = function () {
                        return Math.random().toString(16).replace(".", "")
                    }, r = function e(t) {
                        function r(e, t) {
                            var r, n = 0;
                            for (r = 0; r < t.length; r++) n |= o[r] << 8 * r;
                            return e ^ n
                        }

                        var e, n, i = navigator.userAgent, o = [], a = 0;
                        for (e = 0; e < i.length; e++) n = i.charCodeAt(e), o.unshift(255 & n), o.length >= 4 && (a = r(a, o), o = []);
                        return o.length > 0 && (a = r(a, o)), a.toString(16)
                    };
                    return function () {
                        var n = String(screen.height * screen.width);
                        n = n && /\d{5,}/.test(n) ? n.toString(16) : String(31242 * Math.random()).replace(".", "").slice(0, 8);
                        var i = e() + "-" + t() + "-" + r() + "-" + n + "-" + e();
                        return i ? (just_test_distinctid_2 = 1, i) : (just_test_distinctid_2 = 2, (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15))
                    }
                }(), _.getQueryParam = function (e, t) {
                    t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), e = _.decodeURIComponent(e);
                    var r = "[\\?&]" + t + "=([^&#]*)", n = new RegExp(r), i = n.exec(e);
                    return null === i || i && "string" != typeof i[1] && i[1].length ? "" : _.decodeURIComponent(i[1]).replace(/\+/g, " ")
                }, _.urlParse = function (e) {
                    var t = function (e) {
                        this._fields = {
                            Username: 4,
                            Password: 5,
                            Port: 7,
                            Protocol: 2,
                            Host: 6,
                            Path: 8,
                            URL: 0,
                            QueryString: 9,
                            Fragment: 10
                        }, this._values = {}, this._regex = null, this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/, "undefined" != typeof e && this._parse(e)
                    };
                    return t.prototype.setUrl = function (e) {
                        this._parse(e)
                    }, t.prototype._initValues = function () {
                        for (var e in this._fields) this._values[e] = ""
                    }, t.prototype.addQueryString = function (e) {
                        if ("object" != ("undefined" == typeof e ? "undefined" : _typeof(e))) return !1;
                        var t = this._values.QueryString || "";
                        for (var r in e) t = new RegExp(r + "[^&]+").test(t) ? t.replace(new RegExp(r + "[^&]+"), r + "=" + e[r]) : "&" === t.slice(-1) ? t + r + "=" + e[r] : "" === t ? r + "=" + e[r] : t + "&" + r + "=" + e[r];
                        this._values.QueryString = t
                    }, t.prototype.getUrl = function () {
                        var e = "";
                        return e += this._values.Origin, e += this._values.Port ? ":" + this._values.Port : "", e += this._values.Path, e += this._values.QueryString ? "?" + this._values.QueryString : "", e += this._values.Fragment ? "#" + this._values.Fragment : ""
                    }, t.prototype.getUrl = function () {
                        var e = "";
                        return e += this._values.Origin, e += this._values.Port ? ":" + this._values.Port : "", e += this._values.Path, e += this._values.QueryString ? "?" + this._values.QueryString : ""
                    }, t.prototype._parse = function (e) {
                        this._initValues();
                        var t = this._regex.exec(e);
                        if (!t) throw"DPURLParser::_parse -> Invalid URL";
                        for (var r in this._fields) "undefined" != typeof t[this._fields[r]] && (this._values[r] = t[this._fields[r]]);
                        this._values.Hostname = this._values.Host.replace(/:\d+$/, ""), this._values.Origin = this._values.Protocol + "://" + this._values.Hostname
                    }, new t(e)
                }, _.draggable = function (e, t) {
                    function r() {
                        var e = document;
                        return null != e.pageXOffset ? {
                            x: e.pageXOffset,
                            y: e.pageYOffset
                        } : {x: e.documentElement.scrollLeft, y: e.documentElement.scrollTop}
                    }

                    function n(t) {
                        t = t || window.event;
                        var n = r();
                        e.style.left = t.clientX + n.x - l + "px", e.style.top = t.clientY + n.y - d + "px", t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
                    }

                    function i(e) {
                        e || (e = window.event), document.removeEventListener ? (document.removeEventListener("mouseup", i), document.removeEventListener("mousemove", n)) : document.detachEvent && (document.detachEvent("onmouseup", i), document.detachEvent("onmousemove", n)), e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
                    }

                    var o = r(), a = t.clientX + o.x, s = t.clientY + o.y, c = e.offsetLeft, u = e.offsetTop, l = a - c,
                        d = s - u;
                    document.addEventListener ? (document.addEventListener("mousemove", n), document.addEventListener("mouseup", i)) : document.attachEvent && (document.attachEvent("onmousemove", n), document.attachEvent("onmouseup", i)), t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.style.bottom = "auto"
                }, _.hasStandardBrowserEnviroment = function () {
                    return window ? document ? navigator ? screen ? void 0 : "screen" : "navigator" : "document" : "window"
                }, _.bindReady = function (e, t) {
                    t = t || window;
                    var r = !1, n = !0, i = t.document, o = i.documentElement, a = i.addEventListener,
                        s = a ? "addEventListener" : "attachEvent", c = a ? "removeEventListener" : "detachEvent",
                        u = a ? "" : "on", l = function n(o) {
                            ("readystatechange" != o.type || "complete" == i.readyState) && (("load" == o.type ? t : i)[c](u + o.type, n, !1), !r && (r = !0) && e.call(t, o.type || o))
                        }, d = function e() {
                            try {
                                o.doScroll("left")
                            } catch (t) {
                                return void setTimeout(e, 50)
                            }
                            l("poll")
                        };
                    if ("complete" == i.readyState) e.call(t, "lazy"); else {
                        if (!a && o.doScroll) {
                            try {
                                n = !t.frameElement
                            } catch (e) {
                            }
                            n && d()
                        }
                        i[s](u + "DOMContentLoaded", l, !1), i[s](u + "readystatechange", l, !1), t[s](u + "load", l, !1)
                    }
                }, _.addEvent = function () {
                    function e(t) {
                        return t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation, t._getPath = e._getPath), t
                    }

                    function t(t, r, n) {
                        var i = function (i) {
                            if (i = i || e(window.event)) {
                                i.target = i.srcElement;
                                var o, a, s = !0;
                                return "function" == typeof n && (o = n(i)), a = r.call(t, i), (!1 === o || !1 === a) && (s = !1), s
                            }
                        };
                        return i
                    }

                    e._getPath = function () {
                        var e = this, t = function t() {
                            try {
                                var t = e.target, r = [t];
                                if (null === t || null === t.parentElement) return [];
                                for (; null !== t.parentElement;) t = t.parentElement, r.unshift(t);
                                return r
                            } catch (e) {
                                return []
                            }
                        };
                        return this.path || this.composedPath && this.composedPath() || t()
                    }, e.preventDefault = function () {
                        this.returnValue = !1
                    }, e.stopPropagation = function () {
                        this.cancelBubble = !0
                    };
                    var r = function (r, n, i) {
                        if (r && r.addEventListener) r.addEventListener(n, function (t) {
                            t._getPath = e._getPath, i.call(this, t)
                        }, !1); else {
                            var o = "on" + n, a = r[o];
                            r[o] = t(r, i, a)
                        }
                    };
                    r.apply(null, arguments)
                }, _.addHashEvent = function (e) {
                    var t = "pushState" in window.history ? "popstate" : "hashchange";
                    _.addEvent(window, t, e)
                }, _.cookie = {
                    get: function (e) {
                        for (var t = e + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
                            for (var i = r[n]; " " == i.charAt(0);) i = i.substring(1, i.length);
                            if (0 == i.indexOf(t)) return _.decodeURIComponent(i.substring(t.length, i.length))
                        }
                        return null
                    }, set: function (e, t, r, n, i) {
                        n = "undefined" == typeof n ? sd.para.cross_subdomain : n;
                        var o = "", a = "", s = "";
                        if (r = null == r ? 73e3 : r, n) {
                            var c = _.url("domain", location.href);
                            o = c ? "; domain=." + c : ""
                        }
                        if (0 !== r) {
                            var u = new Date;
                            "s" === String(r).slice(-1) ? u.setTime(u.getTime() + 1e3 * Number(String(r).slice(0, -1))) : u.setTime(u.getTime() + 24 * r * 60 * 60 * 1e3), a = "; expires=" + u.toGMTString();
                        }
                        i && (s = "; secure"), document.cookie = e + "=" + encodeURIComponent(t) + a + "; path=/" + o + s
                    }, remove: function (e, t) {
                        t = "undefined" == typeof t ? sd.para.cross_subdomain : t, _.cookie.set(e, "", -1, t)
                    }, getCookieName: function (e) {
                        var t = "";
                        return sd.para.cross_subdomain === !1 ? (t = _.url("sub", location.href), t = "string" == typeof t && "" !== t ? "sajssdk_2015_" + e + "_" + t : "sajssdk_2015_root_" + e) : t = "sajssdk_2015_cross_" + e, t
                    }, getNewUser: function () {
                        var e = "new_user";
                        return null !== this.get("sensorsdata_is_new_user") || null !== this.get(this.getCookieName(e))
                    }
                }, _.getEleInfo = function (e) {
                    if (!e.target) return !1;
                    var t = e.target, r = t.tagName.toLowerCase(), n = {};
                    n.$element_type = r, n.$element_name = t.getAttribute("name"), n.$element_id = t.getAttribute("id"), n.$element_class_name = "string" == typeof t.className ? t.className : null, n.$element_target_url = t.getAttribute("href");
                    var i = "";
                    return t.textContent ? i = _.trim(t.textContent) : t.innerText && (i = _.trim(t.innerText)), i && (i = i.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)), n.$element_content = i || "", "input" === r && ("button" === t.type || "submit" === t.type ? n.$element_content = t.value || "" : sd.para.heatmap && "function" == typeof sd.para.heatmap.collect_input && sd.para.heatmap.collect_input(t) && (n.$element_content = t.value || "")), n = _.strip_empty_properties(n), n.$url = location.href, n.$url_path = location.pathname, n.$title = document.title, n
                }, _.localStorage = {
                    get: function (e) {
                        return window.localStorage.getItem(e)
                    }, parse: function (e) {
                        var t;
                        try {
                            t = JSON.parse(_.localStorage.get(e)) || null
                        } catch (e) {
                        }
                        return t
                    }, set: function (e, t) {
                        window.localStorage.setItem(e, t)
                    }, remove: function (e) {
                        window.localStorage.removeItem(e)
                    }, isSupport: function () {
                        var e = !0;
                        try {
                            var t = "__sensorsdatasupport__", r = "testIsSupportStorage";
                            _.localStorage.set(t, r), _.localStorage.get(t) !== r && (e = !1), _.localStorage.remove(t)
                        } catch (t) {
                            e = !1
                        }
                        return e
                    }
                }, _.sessionStorage = {
                    isSupport: function () {
                        var e = !0, t = "__sensorsdatasupport__", r = "testIsSupportStorage";
                        try {
                            sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem(t, r), sessionStorage.removeItem(t, r), e = !0) : e = !1
                        } catch (t) {
                            e = !1
                        }
                        return e
                    }
                }, _.xhr = function (e) {
                    if (e) {
                        var t = new XMLHttpRequest;
                        return "withCredentials" in t ? t : "undefined" != typeof XDomainRequest ? new XDomainRequest : t
                    }
                    if (XMLHttpRequest) return new XMLHttpRequest;
                    if (window.ActiveXObject) try {
                        return new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (e) {
                        try {
                            return new ActiveXObject("Microsoft.XMLHTTP")
                        } catch (e) {
                        }
                    }
                }, _.ajax = function (e) {
                    function t(e) {
                        try {
                            return JSON.parse(e)
                        } catch (e) {
                            return {}
                        }
                    }

                    e.credentials = "undefined" == typeof e.credentials || e.credentials;
                    var r = _.xhr(e.cors);
                    e.type || (e.type = e.data ? "POST" : "GET"), e = _.extend({
                        success: function () {
                        }, error: function () {
                        }
                    }, e), r.onreadystatechange = function () {
                        4 == r.readyState && (r.status >= 200 && r.status < 300 || 304 == r.status ? e.success(t(r.responseText)) : e.error(t(r.responseText), r.status), r.onreadystatechange = null, r.onload = null)
                    }, r.open(e.type, e.url, !0);
                    try {
                        if (e.credentials && (r.withCredentials = !0), _.isObject(e.header)) for (var n in e.header) r.setRequestHeader(n, e.header[n]);
                        e.data && (r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), "application/json" === e.contentType ? r.setRequestHeader("Content-type", "application/json; charset=UTF-8") : r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"))
                    } catch (e) {
                    }
                    r.send(e.data || null)
                }, _.loadScript = function (e) {
                    e = _.extend({
                        success: function () {
                        }, error: function () {
                        }, appendCall: function (e) {
                            document.getElementsByTagName("head")[0].appendChild(e)
                        }
                    }, e);
                    var t = null;
                    "css" === e.type && (t = document.createElement("link"), t.rel = "stylesheet", t.href = e.url), "js" === e.type && (t = document.createElement("script"), t.async = "async", t.setAttribute("charset", "UTF-8"), t.src = e.url, t.type = "text/javascript"), t.onload = t.onreadystatechange = function () {
                        this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (e.success(), t.onload = t.onreadystatechange = null)
                    }, t.onerror = function () {
                        e.error(), t.onerror = null
                    }, e.appendCall(t)
                }, _.url = function () {
                    function e() {
                        return new RegExp(/(.*?)\.?([^\.]*?)\.(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|net\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/)
                    }

                    function t(e) {
                        return _.decodeURIComponent(e.replace(/\+/g, " "))
                    }

                    function r(e, t) {
                        var r = e.charAt(0), n = t.split(r);
                        return r === e ? n : (e = parseInt(e.substring(1), 10), n[0 > e ? n.length + e : e - 1])
                    }

                    function n(e, r) {
                        for (var n = e.charAt(0), i = r.split("&"), o = [], a = {}, s = [], c = e.substring(1), u = 0, l = i.length; l > u; u++) if (o = i[u].match(/(.*?)=(.*)/), o || (o = [i[u], i[u], ""]), "" !== o[1].replace(/\s/g, "")) {
                            if (o[2] = t(o[2] || ""), c === o[1]) return o[2];
                            s = o[1].match(/(.*)\[([0-9]+)\]/), s ? (a[s[1]] = a[s[1]] || [], a[s[1]][s[2]] = o[2]) : a[o[1]] = o[2]
                        }
                        return n === e ? a : a[c]
                    }

                    return function (t, i) {
                        var o, a = {};
                        if ("tld?" === t) return e();
                        if (i = i || window.location.toString(), !t) return i;
                        if (t = t.toString(), o = i.match(/^mailto:([^\/].+)/)) a.protocol = "mailto", a.email = o[1]; else {
                            if ((o = i.match(/(.*?)\/#\!(.*)/)) && (i = o[1] + o[2]), (o = i.match(/(.*?)#(.*)/)) && (a.hash = o[2], i = o[1]), a.hash && t.match(/^#/)) return n(t, a.hash);
                            if ((o = i.match(/(.*?)\?(.*)/)) && (a.query = o[2], i = o[1]), a.query && t.match(/^\?/)) return n(t, a.query);
                            if ((o = i.match(/(.*?)\:?\/\/(.*)/)) && (a.protocol = o[1].toLowerCase(), i = o[2]), (o = i.match(/(.*?)(\/.*)/)) && (a.path = o[2], i = o[1]), a.path = (a.path || "").replace(/^([^\/])/, "/$1").replace(/\/$/, ""), t.match(/^[\-0-9]+$/) && (t = t.replace(/^([^\/])/, "/$1")), t.match(/^\//)) return r(t, a.path.substring(1));
                            if (o = r("/-1", a.path.substring(1)), o && (o = o.match(/(.*?)\.(.*)/)) && (a.file = o[0], a.filename = o[1], a.fileext = o[2]), (o = i.match(/(.*)\:([0-9]+)$/)) && (a.port = o[2], i = o[1]), (o = i.match(/(.*?)@(.*)/)) && (a.auth = o[1], i = o[2]), a.auth && (o = a.auth.match(/(.*)\:(.*)/), a.user = o ? o[1] : a.auth, a.pass = o ? o[2] : void 0), a.hostname = i.toLowerCase(), "." === t.charAt(0)) return r(t, a.hostname);
                            e() && (o = a.hostname.match(e()), o && (a.tld = o[3], a.domain = o[2] ? o[2] + "." + o[3] : void 0, a.sub = o[1] || void 0)), a.port = a.port || ("https" === a.protocol ? "443" : "80"), a.protocol = a.protocol || ("443" === a.port ? "https" : "http")
                        }
                        return t in a ? a[t] : "{}" === t ? a : ""
                    }
                }(), _.ry = function (e) {
                    return new _.ry.init(e)
                }, _.ry.init = function (e) {
                    this.ele = e
                }, _.ry.init.prototype = {
                    addClass: function (e) {
                        var t = " " + this.ele.className + " ";
                        return -1 === t.indexOf(" " + e + " ") && (this.ele.className = this.ele.className + ("" === this.ele.className ? "" : " ") + e), this
                    }, removeClass: function (e) {
                        var t = " " + this.ele.className + " ";
                        return -1 !== t.indexOf(" " + e + " ") && (this.ele.className = t.replace(" " + e + " ", " ").slice(1, -1)), this
                    }, hasClass: function (e) {
                        var t = " " + this.ele.className + " ";
                        return -1 !== t.indexOf(" " + e + " ")
                    }, attr: function (e, t) {
                        return "string" == typeof e && _.isUndefined(t) ? this.ele.getAttribute(e) : ("string" == typeof e && (t = String(t), this.ele.setAttribute(e, t)), this)
                    }, offset: function () {
                        var e = this.ele.getBoundingClientRect();
                        if (e.width || e.height) {
                            var t = this.ele.ownerDocument, r = t.documentElement;
                            return {
                                top: e.top + window.pageYOffset - r.clientTop,
                                left: e.left + window.pageXOffset - r.clientLeft
                            }
                        }
                        return {top: 0, left: 0}
                    }, getSize: function () {
                        if (!window.getComputedStyle) return {
                            width: this.ele.offsetWidth,
                            height: this.ele.offsetHeight
                        };
                        try {
                            var e = this.ele.getBoundingClientRect();
                            return {width: e.width, height: e.height}
                        } catch (e) {
                            return {width: 0, height: 0}
                        }
                    }, getStyle: function (e) {
                        return this.ele.currentStyle ? this.ele.currentStyle[e] : this.ele.ownerDocument.defaultView.getComputedStyle(this.ele, null).getPropertyValue(e)
                    }, wrap: function (e) {
                        var t = document.createElement(e);
                        return this.ele.parentNode.insertBefore(t, this.ele), t.appendChild(this.ele), _.ry(t)
                    }, getCssStyle: function (e) {
                        var t = this.ele.style.getPropertyValue(e);
                        if (t) return t;
                        var r = null;
                        if ("function" == typeof window.getMatchedCSSRules && (r = getMatchedCSSRules(this.ele)), !r || !_.isArray(r)) return null;
                        for (var n = r.length - 1; n >= 0; n--) {
                            var i = r[n];
                            if (t = i.style.getPropertyValue(e)) return t
                        }
                    }, sibling: function (e, t) {
                        for (; (e = e[t]) && 1 !== e.nodeType;) ;
                        return e
                    }, next: function () {
                        return this.sibling(this.ele, "nextSibling")
                    }, prev: function (e) {
                        return this.sibling(this.ele, "previousSibling")
                    }, siblings: function (e) {
                        return this.siblings((this.ele.parentNode || {}).firstChild, this.ele)
                    }, children: function (e) {
                        return this.siblings(this.ele.firstChild)
                    }, parent: function () {
                        var e = this.ele.parentNode;
                        return e = e && 11 !== e.nodeType ? e : null, _.ry(e)
                    }
                }, _.jssdkDebug = function (e, t) {
                    if (sd.para.is_debug) if (_.isString(e)) sd.registerPage({_jssdk_debug_info: e}); else {
                        var r = store.getCookieName(), n = document.cookie.match(new RegExp(r + "[^;]+"));
                        r = n && n[0] ? n[0] : "", e._jssdk_debug_info = "(" + r + ")" + navigator.userAgent
                    }
                }, _.strToUnicode = function (e) {
                    if ("string" != typeof e) return logger.info("转换unicode错误", e), e;
                    for (var t = "", r = 0; r < e.length; r++) t += "\\" + e.charCodeAt(r).toString(16);
                    return t
                }, _.querySelectorAll = function (e) {
                    if ("string" != typeof e) return logger.info("选择器错误", e), [];
                    var t = e.split(" ");
                    1 === t.length ? /^#\d+/.test(t[0]) && (e = "#" + _.strToUnicode(t[0].slice(1))) : /^#\d+/.test(t[0]) && (t[0] = "#" + _.strToUnicode(t[0].slice(1)), e = t.join(" "));
                    try {
                        return document.querySelectorAll(e)
                    } catch (t) {
                        return logger.info("错误", e), []
                    }
                }, _.getReferrer = function (e) {
                    var e = e || document.referrer;
                    return "string" != typeof e ? "取值异常_referrer异常_" + String(e) : (0 === e.indexOf("https://www.baidu.com/") && (e = e.split("?")[0]), e = e.slice(0, sd.para.max_referrer_string_length), "string" == typeof e ? e : "")
                }, _.getKeywordFromReferrer = function () {
                    var e = {baidu: "wd", google: "q", bing: "q", yahoo: "p", sogou: "query", so: "q"};
                    if (document && "string" == typeof document.referrer) {
                        if (0 === document.referrer.indexOf("http")) {
                            var t = _.url("domain", document.referrer), r = _.url("?", document.referrer);
                            for (var n in e) if (0 === t.indexOf(n) && "object" == ("undefined" == typeof r ? "undefined" : _typeof(r)) && r[e[n]]) return r[e[n]];
                            return "未取到值"
                        }
                        return "" === document.referrer ? "未取到值_直接打开" : "未取到值_非http的url"
                    }
                    return "取值异常_referrer异常_" + String(document.referrer)
                }, _.getSourceFromReferrer = function () {
                    function e(e, t) {
                        for (var r = 0; r < e.length; r++) if (-1 !== t.split("?")[0].indexOf(e[r])) return !0
                    }

                    var t = ["www.baidu.", "m.baidu.", "m.sm.cn", "so.com", "sogou.com", "youdao.com", "google.", "yahoo.com/", "bing.com/", "ask.com/"],
                        r = ["weibo.com", "renren.com", "kaixin001.com", "douban.com", "qzone.qq.com", "zhihu.com", "tieba.baidu.com", "weixin.qq.com"],
                        n = document.referrer || "", i = _.info.pageProp.url;
                    if (i) {
                        var o = i.match(/(utm_source|utm_medium|utm_campaign|utm_content|utm_term)\=[^&]+/);
                        return o && o[0] ? "付费广告流量" : e(t, n) ? "自然搜索流量" : e(r, n) ? "社交网站流量" : "" === n ? "直接流量" : "引荐流量"
                    }
                    return "获取url异常"
                }, _.info = {
                    initPage: function () {
                        var e = _.getReferrer(), t = e ? _.url("hostname", e) : e, r = e ? _.url("domain", e) : e,
                            n = location.href, i = n ? _.url("hostname", n) : n, o = n ? _.url("domain", n) : n;
                        e && !r && _.jssdkDebug("referrer_domain异常_" + e + "_" + r), o || _.jssdkDebug("url_domain异常_" + n + "_" + o), this.pageProp = {
                            referrer: e,
                            referrer_host: t,
                            referrer_domain: r,
                            url: n,
                            url_host: i,
                            url_domain: o
                        }
                    }, pageProp: {}, campaignParams: function () {
                        var e = source_channel_standard.split(" "), t = "", r = {};
                        return _.isArray(sd.para.source_channel) && sd.para.source_channel.length > 0 && (e = e.concat(sd.para.source_channel), e = _.unique(e)), _.each(e, function (e) {
                            t = _.getQueryParam(location.href, e), t.length && (r[e] = t)
                        }), r
                    }, campaignParamsStandard: function (e, t) {
                        e = e || "", t = t || "";
                        var r = _.info.campaignParams(), n = {}, i = {};
                        for (var o in r) -1 !== (" " + source_channel_standard + " ").indexOf(" " + o + " ") ? n[e + o] = r[o] : i[t + o] = r[o];
                        return {$utms: n, otherUtms: i}
                    }, properties: function () {
                        return {
                            $screen_height: Number(screen.height) || 0,
                            $screen_width: Number(screen.width) || 0,
                            $lib: "js",
                            $lib_version: String(LIB_VERSION)
                        }
                    }, currentProps: {}, register: function (e) {
                        _.extend(_.info.currentProps, e)
                    }
                }, sd.sendState = {}, sd.sendState._complete = 0, sd.sendState._receive = 0, sd.sendState.getSendCall = function (e, t) {
                    if (sd.readySend && sd.readySend(e, t)) return !1;
                    if (sd.is_heatmap_render_mode) return !1;
                    e._nocache = (String(Math.random()) + String(Math.random()) + String(Math.random())).replace(/\./g, "").slice(0, 15);
                    var r = e;
                    if (e = JSON.stringify(e), logger.info(r), sd.para.use_app_track === !0 || "only" === sd.para.use_app_track) if ("object" == ("undefined" == typeof SensorsData_APP_JS_Bridge ? "undefined" : _typeof(SensorsData_APP_JS_Bridge)) && SensorsData_APP_JS_Bridge.sensorsdata_track) SensorsData_APP_JS_Bridge.sensorsdata_track(JSON.stringify(_.extend({server_url: sd.para.server_url}, r))), "function" == typeof t && t(); else if (/sa-sdk-ios/.test(navigator.userAgent) && !window.MSStream) {
                        var n = document.createElement("iframe");
                        n.setAttribute("src", "sensorsanalytics://trackEvent?event=" + encodeURIComponent(JSON.stringify(_.extend({server_url: sd.para.server_url}, r)))), document.documentElement.appendChild(n), n.parentNode.removeChild(n), n = null, "function" == typeof t && t()
                    } else sd.para.use_app_track === !0 && this.prepareServerUrl(e, t); else "mui" === sd.para.use_app_track ? _.isObject(window.plus) && window.plus.SDAnalytics && window.plus.SDAnalytics.trackH5Event && window.plus.SDAnalytics.trackH5Event(e) : this.prepareServerUrl(e, t)
                }, sd.sendState.getUrlPara = function (e, t) {
                    var r = _.base64Encode(t), n = "crc=" + _.hashCode(r);
                    return -1 !== e.indexOf("?") ? e + "&data=" + encodeURIComponent(r) + "&ext=" + encodeURIComponent(n) : e + "?data=" + encodeURIComponent(r) + "&ext=" + encodeURIComponent(n)
                }, sd.sendState.prepareServerUrl = function (e, t) {
                    if (_.isArray(sd.para.server_url)) for (var r = 0; r < sd.para.server_url.length; r++) this.sendCall(this.getUrlPara(sd.para.server_url[r], e), t); else this.sendCall(this.getUrlPara(sd.para.server_url, e), t)
                }, sd.sendState.stateInfo = function (e) {
                    this.callback = e.callback, this.hasCalled = !1, this.img = document.createElement("img"), this.img.width = 1, this.img.height = 1, this.server_url = e.server_url, this.sendState = e.sendState, this.start()
                }, sd.sendState.stateInfo.prototype.start = function () {
                    function e() {
                        "object" != ("undefined" == typeof t ? "undefined" : _typeof(t)) || "function" != typeof t.callback || t.hasCalled || (t.hasCalled = !0, t.callback())
                    }

                    var t = this;
                    setTimeout(e, sd.para.callback_timeout), this.img.onload = function (r) {
                        this.onload = null, ++t.sendState._complete, e()
                    }, this.img.onerror = function (t) {
                        this.onerror = null, e()
                    }, this.img.onabort = function (t) {
                        this.onabort = null, e()
                    }, this.img.src = this.server_url
                }, sd.sendState.beaconCall = function (e, t) {
                    navigator.sendBeacon(e)
                }, sd.sendState.ajaxCall = function (e, t) {
                    e = e.replace("https://sensorswww.cloud.sensorsdata.cn:4006/sa.gif?token=6b551cb59b1c1973&data=", "https://zhaohaiying.cloud.sensorsdata.cn:4006/sa.gif?token=9d8f18c23084485f&data="), _.ajax({
                        url: e,
                        type: "GET",
                        credentials: !1,
                        cors: !0
                    })
                }, sd.sendState.sendCall = function (e, t) {
                    ++this._receive;
                    var r = "_state" + this._receive;
                    this[r] = new this.stateInfo({callback: t, server_url: e, sendState: this})
                };
                var saNewUser = {
                    checkIsAddSign: function (e) {
                        "track" === e.type && (_.cookie.getNewUser() ? e.properties.$is_first_day = !0 : e.properties.$is_first_day = !1)
                    }, is_first_visit_time: !1, checkIsFirstTime: function (e) {
                        "track" === e.type && "$pageview" === e.event && (this.is_first_visit_time ? (e.properties.$is_first_time = !0, this.is_first_visit_time = !1) : e.properties.$is_first_time = !1)
                    }, setDeviceId: function (e) {
                        var t = null, r = _.cookie.get("sensorsdata2015jssdkcross"), n = {};
                        null != r && _.isJSONString(r) && (n = JSON.parse(r), n.$device_id && (t = n.$device_id)), t = t || e, sd.para.cross_subdomain === !0 ? store.set("$device_id", t) : (n.$device_id = t, _.cookie.set("sensorsdata2015jssdkcross", JSON.stringify(n), null, !0)), sd.para.is_track_device_id && (_.info.currentProps.$device_id = t)
                    }, storeInitCheck: function () {
                        if (is_first_visitor) {
                            var e = new Date,
                                t = {h: 23 - e.getHours(), m: 59 - e.getMinutes(), s: 59 - e.getSeconds()};
                            _.cookie.set(_.cookie.getCookieName("new_user"), "1", 3600 * t.h + 60 * t.m + t.s + "s"), this.is_first_visit_time = !0
                        } else _.cookie.getNewUser() || (this.checkIsAddSign = function (e) {
                            "track" === e.type && (e.properties.$is_first_day = !1)
                        }), this.checkIsFirstTime = function (e) {
                            "track" === e.type && "$pageview" === e.event && (e.properties.$is_first_time = !1)
                        }
                    }, checkIsFirstLatest: function () {
                        for (var e = _.info.pageProp.url_domain, t = _.info.pageProp.referrer_domain, r = ["$utm_source", "$utm_medium", "$utm_campaign", "$utm_content", "$utm_term"], n = store.getProps(), i = 0; i < r.length; i++) r[i] in n && delete n[r[i]];
                        store.setProps(n, !0), e !== t && sd.register({
                            $latest_traffic_source_type: _.getSourceFromReferrer(),
                            $latest_referrer: _.info.pageProp.referrer,
                            $latest_referrer_host: _.info.pageProp.referrer_host,
                            $latest_search_keyword: _.getKeywordFromReferrer()
                        });
                        var o = _.info.campaignParamsStandard("$latest_", "_latest_"), a = o.$utms, s = o.otherUtms;
                        _.isEmptyObject(a) || sd.register(a), _.isEmptyObject(s) || sd.register(s)
                    }
                }, saEvent = {};
                saEvent.checkOption = {
                    regChecks: {regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i},
                    checkPropertiesKey: function (e) {
                        var t = this, r = !0;
                        return _.each(e, function (e, n) {
                            t.regChecks.regName.test(n) || (r = !1)
                        }), r
                    },
                    check: function (e, t) {
                        return "string" == typeof this[e] ? this[this[e]](t) : this[e](t)
                    },
                    str: function (e) {
                        return !!_.isString(e) || (logger.info("请检查参数格式,必须是字符串"), !0)
                    },
                    properties: function (e) {
                        return _.strip_sa_properties(e), !e || (_.isObject(e) ? !!this.checkPropertiesKey(e) || (logger.info("properties里的key必须是由字符串数字_组成，且不能是系统保留字"), !0) : (logger.info("properties可以没有，但有的话必须是对象"), !0))
                    },
                    propertiesMust: function (e) {
                        return _.strip_sa_properties(e), void 0 === e || !_.isObject(e) || _.isEmptyObject(e) ? (logger.info("properties必须是对象且有值"), !0) : !!this.checkPropertiesKey(e) || (logger.info("properties里的key必须是由字符串数字_组成，且不能是系统保留字"), !0)
                    },
                    event: function (e) {
                        return !(!_.isString(e) || !this.regChecks.regName.test(e)) || (logger.info("请检查参数格式,必须是字符串,且eventName必须是字符串_开头,且不能是系统保留字"), !0)
                    },
                    test_id: "str",
                    group_id: "str",
                    distinct_id: function (e) {
                        return !(!_.isString(e) || !/^.{1,255}$/.test(e)) || (logger.info("distinct_id必须是不能为空，且小于255位的字符串"), !1)
                    }
                }, saEvent.check = function (e) {
                    var t = !0;
                    for (var r in e) if (!this.checkOption.check(r, e[r])) return !1;
                    return t
                }, saEvent.send = function (e, t) {
                    var r = {
                        distinct_id: store.getDistinctId(),
                        lib: {$lib: "js", $lib_method: "code", $lib_version: String(LIB_VERSION)},
                        properties: {}
                    };
                    if (_.isObject(e) && _.isObject(e.properties) && !_.isEmptyObject(e.properties) && e.properties.$lib_detail && (r.lib.$lib_detail = e.properties.$lib_detail, delete e.properties.$lib_detail), "string" != typeof store.getDistinctId() || "" == typeof store.getDistinctId()) {
                        var n = "";
                        switch (store.getDistinctId()) {
                            case null:
                                n = "null";
                                break;
                            case void 0:
                                n = "undefined";
                                break;
                            case"":
                                n = "空";
                                break;
                            default:
                                n = String(store.getDistinctId())
                        }
                        error_msg.push("distinct_id-" + just_test_distinctid + "-" + just_test_distinctid_2 + "-" + n + "-" + just_test_distinctid_detail + "-" + just_test_distinctid_detail2)
                    }
                    _.extend(r, e), error_msg.length > 0 && (r.jssdk_error = error_msg.join("--")), _.isObject(e.properties) && !_.isEmptyObject(e.properties) && _.extend(r.properties, e.properties), _.isObject(t) && _.extend(r.lib, t), e.type && "profile" === e.type.slice(0, 7) || (r.properties = _.extend({}, _.info.properties(), store.getProps(), store.getSessionProps(), _.info.currentProps, r.properties), _.isString(r.properties.$latest_referrer) || (r.properties.$latest_referrer = "取值异常", _.jssdkDebug(r.properties, store.getProps())), _.isString(r.properties.$latest_referrer_host) || (r.properties.$latest_referrer_host = "取值异常"), _.isString(r.properties.$latest_search_keyword) || (r.properties.$latest_search_keyword = "取值异常"), _.isString(r.properties.$latest_traffic_source_type) || (r.properties.$latest_traffic_source_type = "取值异常")), r.properties.$time && _.isDate(r.properties.$time) ? (r.time = 1 * r.properties.$time, delete r.properties.$time) : sd.para.use_client_time && (r.time = 1 * new Date), _.searchObjDate(r), _.searchObjString(r), saNewUser.checkIsAddSign(r), saNewUser.checkIsFirstTime(r), sd.para.debug_mode === !0 ? (logger.info(r), this.debugPath(JSON.stringify(r), t)) : sd.sendState.getSendCall(r, t)
                }, saEvent.debugPath = function (e, t) {
                    var r = e, n = "";
                    n = -1 !== sd.para.debug_mode_url.indexOf("?") ? sd.para.debug_mode_url + "&data=" + encodeURIComponent(_.base64Encode(e)) : sd.para.debug_mode_url + "?data=" + encodeURIComponent(_.base64Encode(e)), _.ajax({
                        url: n,
                        type: "GET",
                        cors: !0,
                        header: {"Dry-Run": String(sd.para.debug_mode_upload)},
                        success: function (e) {
                            _.isEmptyObject(e) === !0 ? alert("debug数据发送成功" + r) : alert("debug失败 错误原因" + JSON.stringify(e))
                        }
                    })
                };
                var store = sd.store = {
                    _sessionState: {}, _state: {}, getProps: function () {
                        return this._state.props || {}
                    }, getSessionProps: function () {
                        return this._sessionState
                    }, getDistinctId: function () {
                        return this._state.distinct_id
                    }, getFirstId: function () {
                        return this._state.first_id
                    }, toState: function (e) {
                        var t = null;
                        if (null != e && _.isJSONString(e)) if (t = JSON.parse(e), this._state = _.extend(t), t.distinct_id) {
                            if ("object" == _typeof(t.props)) {
                                for (var r in t.props) "string" == typeof t.props[r] && (t.props[r] = t.props[r].slice(0, sd.para.max_referrer_string_length));
                                this.save()
                            }
                        } else this.set("distinct_id", _.UUID()), error_msg.push("toStateParseDistinctError"); else this.set("distinct_id", _.UUID()), error_msg.push("toStateParseError")
                    }, initSessionState: function () {
                        var e = _.cookie.get("sensorsdata2015session"), t = null;
                        null !== e && "object" == _typeof(t = JSON.parse(e)) && (this._sessionState = t || {})
                    }, setOnce: function (e, t) {
                        e in this._state || this.set(e, t)
                    }, set: function (e, t) {
                        this._state = this._state || {}, this._state[e] = t, this.save()
                    }, change: function (e, t) {
                        this._state[e] = t
                    }, setSessionProps: function (e) {
                        var t = this._sessionState;
                        _.extend(t, e), this.sessionSave(t)
                    }, setSessionPropsOnce: function (e) {
                        var t = this._sessionState;
                        _.coverExtend(t, e), this.sessionSave(t)
                    }, setProps: function (e, t) {
                        var r = this._state.props || {};
                        t ? this.set("props", e) : (_.extend(r, e), this.set("props", r))
                    }, removeProps: function (e) {
                        if (!_.isArray(e)) return !1;
                        for (var t = this._state.props || {}, r = 0; r < e.length; r++) e[r] in t && delete t[r];
                        this.set("props", t)
                    }, setPropsOnce: function (e) {
                        var t = this._state.props || {};
                        _.coverExtend(t, e), this.set("props", t)
                    }, clearAllProps: function () {
                        this._sessionState = {};
                        for (var e in this._state.props) 1 !== e.indexOf("latest_") && delete this._state.props[e];
                        this.sessionSave({}), this.save()
                    }, sessionSave: function (e) {
                        this._sessionState = e, _.cookie.set("sensorsdata2015session", JSON.stringify(this._sessionState), 0)
                    }, save: function () {
                        _.cookie.set(this.getCookieName(), JSON.stringify(this._state), 73e3, sd.para.cross_subdomain)
                    }, getCookieName: function () {
                        var e = "";
                        return sd.para.cross_subdomain === !1 ? (e = _.url("sub", location.href), e = "string" == typeof e && "" !== e ? "sa_jssdk_2015_" + e : "sa_jssdk_2015_root") : e = "sensorsdata2015jssdkcross", e
                    }, init: function () {
                        navigator.cookieEnabled || (error_msg.push("cookieNotEnable"), _.localStorage.isSupport || error_msg.push("localStorageNotEnable")), this.initSessionState();
                        var e = _.UUID(), t = _.cookie.get(this.getCookieName());
                        null === t ? (is_first_visitor = !0, just_test_distinctid = 1, this.set("distinct_id", e)) : (just_test_distinctid = 2, just_test_distinctid_detail = JSON.stringify(t), just_test_distinctid_detail2 = JSON.stringify(document.cookie.match(/2015[^;]+/g)), _.isJSONString(t) && JSON.parse(t).distinct_id || (is_first_visitor = !0), this.toState(t)), saNewUser.setDeviceId(e), saNewUser.storeInitCheck(), saNewUser.checkIsFirstLatest()
                    }
                }, commonWays = {
                    isReady: function (e) {
                        e()
                    }, getUtm: function () {
                        return _.info.campaignParams()
                    }, getStayTime: function () {
                        return (new Date - sd._t) / 1e3
                    }, setProfileLocal: function (e) {
                        if (!_.localStorage.isSupport()) return sd.setProfile(e), !1;
                        if (!_.isObject(e) || _.isEmptyObject(e)) return !1;
                        var t = _.localStorage.parse("sensorsdata_2015_jssdk_profile"), r = !1;
                        if (_.isObject(t) && !_.isEmptyObject(t)) {
                            for (var n in e) (n in t && t[n] !== e[n] || !(n in t)) && (t[n] = e[n], r = !0);
                            r && (_.localStorage.set("sensorsdata_2015_jssdk_profile", JSON.stringify(t)), sd.setProfile(e))
                        } else _.localStorage.set("sensorsdata_2015_jssdk_profile", JSON.stringify(e)), sd.setProfile(e)
                    }, setInitReferrer: function () {
                        var e = _.getReferrer();
                        sd.setOnceProfile({_init_referrer: e, _init_referrer_host: _.info.pageProp.referrer_host})
                    }, setSessionReferrer: function () {
                        var e = _.getReferrer();
                        store.setSessionPropsOnce({
                            _session_referrer: e,
                            _session_referrer_host: _.info.pageProp.referrer_host
                        })
                    }, setDefaultAttr: function () {
                        _.info.register({
                            _current_url: location.href,
                            _referrer: _.getReferrer(),
                            _referring_host: _.info.pageProp.referrer_host
                        })
                    }, trackHeatmap: function () {
                        this.trackHeatMap.apply(arguments)
                    }, trackHeatMap: function (e) {
                        if ("object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) && e.tagName) {
                            var t = e.tagName.toLowerCase(), r = e.parentNode.tagName.toLowerCase();
                            "button" !== t && "a" !== t && "a" !== r && "button" !== r && "input" !== t && "textarea" !== t && heatmap.start(null, e, t)
                        }
                    }, autoTrackSinglePage: function (e, t) {
                        function r() {
                            var e = _.info.campaignParams(), t = {};
                            for (var r in e) -1 !== (" " + source_channel_standard + " ").indexOf(" " + r + " ") ? t["$" + r] = e[r] : t[r] = e[r];
                            return t
                        }

                        function n(e, t) {
                            sd.track("$pageview", _.extend({
                                $referrer: i,
                                $referrer_host: _.url("hostname", i) || "",
                                $url: location.href,
                                $url_path: location.pathname,
                                $title: document.title
                            }, e, r()), t), i = location.href
                        }

                        var i = _.info.pageProp.url;
                        n(e, t), this.autoTrackSinglePage = n
                    }, autoTrackWithoutProfile: function (e, t) {
                        e = _.isObject(e) ? e : {}, this.autoTrack(_.extend(e, {not_set_profile: !0}), t)
                    }, autoTrack: function (e, t) {
                        e = _.isObject(e) ? e : {};
                        var r = _.info.campaignParams(), n = {};
                        for (var i in r) -1 !== (" " + source_channel_standard + " ").indexOf(" " + i + " ") ? n["$" + i] = r[i] : n[i] = r[i];
                        is_first_visitor && !e.not_set_profile && sd.setOnceProfile(_.extend({
                            $first_visit_time: new Date,
                            $first_referrer: _.getReferrer(),
                            $first_browser_language: navigator.language || "取值异常",
                            $first_browser_charset: "string" == typeof document.charset ? document.charset.toUpperCase() : "取值异常",
                            $first_referrer_host: _.info.pageProp.referrer_host,
                            $first_traffic_source_type: _.getSourceFromReferrer(),
                            $first_search_keyword: _.getKeywordFromReferrer()
                        }, n)), e.not_set_profile && delete e.not_set_profile;
                        var o = location.href;
                        sd.para.is_single_page && _.addHashEvent(function () {
                            var r = _.getReferrer(o);
                            sd.track("$pageview", _.extend({
                                $referrer: r,
                                $referrer_host: _.url("hostname", r) || "",
                                $url: location.href,
                                $url_path: location.pathname,
                                $title: document.title
                            }, n, e), t), o = location.href
                        }), sd.track("$pageview", _.extend({
                            $referrer: _.getReferrer(),
                            $referrer_host: _.info.pageProp.referrer_host,
                            $url: location.href,
                            $url_path: location.pathname,
                            $title: document.title
                        }, n, e), t)
                    }
                };
                sd.quick = function () {
                    var e = slice.call(arguments), t = e[0], r = e.slice(1);
                    return "string" == typeof t && commonWays[t] ? commonWays[t].apply(commonWays, r) : void ("function" == typeof t ? t.apply(sd, r) : logger.info("quick方法中没有这个功能" + e[0]))
                }, sd.track = function (e, t, r) {
                    saEvent.check({event: e, properties: t}) && saEvent.send({
                        type: "track",
                        event: e,
                        properties: t
                    }, r)
                }, _.trackLink = function (e, t, r) {
                    function n(e) {
                        function n() {
                            o || (o = !0, location.href = i.href)
                        }

                        e.stopPropagation(), e.preventDefault();
                        var o = !1;
                        setTimeout(n, 1e3), sd.track(t, r, n)
                    }

                    e = e || {};
                    var i = null;
                    return e.ele && (i = e.ele), e.event && (i = e.target ? e.target : e.event.target), r = r || {}, !(!i || "object" != ("undefined" == typeof i ? "undefined" : _typeof(i))) && (!i.href || /^javascript/.test(i.href) || i.target || i.download || i.onclick ? (sd.track(t, r), !1) : (e.event && n(e.event), void (e.ele && _.addEvent(e.ele, "click", function (e) {
                        n(e)
                    }))))
                }, sd.trackLink = function (e, t, r) {
                    "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) && e.tagName ? _.trackLink({ele: e}, t, r) : "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) && e.target && e.event && _.trackLink(e, t, r)
                }, sd.trackLinks = function (e, t, r) {
                    return r = r || {}, !(!e || "object" != ("undefined" == typeof e ? "undefined" : _typeof(e))) && (!(!e.href || /^javascript/.test(e.href) || e.target) && void _.addEvent(e, "click", function (n) {
                        function i() {
                            o || (o = !0, location.href = e.href)
                        }

                        n.preventDefault();
                        var o = !1;
                        setTimeout(i, 1e3), sd.track(t, r, i)
                    }))
                }, sd.setProfile = function (e, t) {
                    saEvent.check({propertiesMust: e}) && saEvent.send({type: "profile_set", properties: e}, t)
                }, sd.setOnceProfile = function (e, t) {
                    saEvent.check({propertiesMust: e}) && saEvent.send({type: "profile_set_once", properties: e}, t)
                }, sd.appendProfile = function (e, t) {
                    saEvent.check({propertiesMust: e}) && (_.each(e, function (t, r) {
                        _.isString(t) ? e[r] = [t] : _.isArray(t) || (delete e[r], logger.info("appendProfile属性的值必须是字符串或者数组"))
                    }), _.isEmptyObject(e) || saEvent.send({type: "profile_append", properties: e}, t))
                }, sd.incrementProfile = function (e, t) {
                    function r(e) {
                        for (var t in e) if (!/-*\d+/.test(String(e[t]))) return !1;
                        return !0
                    }

                    var n = e;
                    _.isString(e) && (e = {}, e[n] = 1), saEvent.check({propertiesMust: e}) && (r(e) ? saEvent.send({
                        type: "profile_increment",
                        properties: e
                    }, t) : logger.info("profile_increment的值只能是数字"))
                }, sd.deleteProfile = function (e) {
                    saEvent.send({type: "profile_delete"}, e), store.set("distinct_id", _.UUID())
                }, sd.unsetProfile = function (e, t) {
                    var r = e, n = {};
                    _.isString(e) && (e = [], e.push(r)), _.isArray(e) ? (_.each(e, function (e) {
                        _.isString(e) ? n[e] = !0 : logger.info("profile_unset给的数组里面的值必须时string,已经过滤掉", e)
                    }), saEvent.send({type: "profile_unset", properties: n}, t)) : logger.info("profile_unset的参数是数组")
                }, sd.identify = function (e, t) {
                    "number" == typeof e && (e = String(e));
                    var r = store.getFirstId();
                    "undefined" == typeof e ? r ? store.set("first_id", _.UUID()) : store.set("distinct_id", _.UUID()) : saEvent.check({distinct_id: e}) ? t === !0 ? r ? store.set("first_id", e) : store.set("distinct_id", e) : r ? store.change("first_id", e) : store.change("distinct_id", e) : logger.info("identify的参数必须是字符串")
                }, sd.trackSignup = function (e, t, r, n) {
                    saEvent.check({
                        distinct_id: e,
                        event: t,
                        properties: r
                    }) && (saEvent.send({
                        original_id: store.getFirstId() || store.getDistinctId(),
                        distinct_id: e,
                        type: "track_signup",
                        event: t,
                        properties: r
                    }, n), store.set("distinct_id", e))
                }, sd.trackAbtest = function (e, t) {
                }, sd.registerPage = function (e) {
                    saEvent.check({properties: e}) ? _.extend(_.info.currentProps, e) : logger.info("register输入的参数有误")
                }, sd.clearAllRegister = function () {
                    store.clearAllProps()
                }, sd.register = function (e) {
                    saEvent.check({properties: e}) ? store.setProps(e) : logger.info("register输入的参数有误")
                }, sd.registerOnce = function (e) {
                    saEvent.check({properties: e}) ? store.setPropsOnce(e) : logger.info("registerOnce输入的参数有误")
                }, sd.registerSession = function (e) {
                    saEvent.check({properties: e}) ? store.setSessionProps(e) : logger.info("registerSession输入的参数有误")
                }, sd.registerSessionOnce = function (e) {
                    saEvent.check({properties: e}) ? store.setSessionPropsOnce(e) : logger.info("registerSessionOnce输入的参数有误")
                }, sd.login = function (e) {
                    if ("number" == typeof e && (e = String(e)), saEvent.check({distinct_id: e})) {
                        var t = store.getFirstId(), r = store.getDistinctId();
                        e !== r && (t ? sd.trackSignup(e, "$SignUp") : (store.set("first_id", r), sd.trackSignup(e, "$SignUp")))
                    } else logger.info("login的参数必须是字符串")
                }, sd.logout = function (e) {
                    var t = store.getFirstId();
                    t ? (store.set("first_id", ""), e === !0 ? store.set("distinct_id", _.UUID()) : store.set("distinct_id", t)) : logger.info("没有first_id，logout失败")
                }, sd.getPresetProperties = function () {
                    function e() {
                        var e = _.info.campaignParams(), t = {};
                        for (var r in e) -1 !== (" " + source_channel_standard + " ").indexOf(" " + r + " ") ? t["$" + r] = e[r] : t[r] = e[r];
                        return t
                    }

                    var t = {
                        $referrer: "string" == typeof document.referrer ? document.referrer.slice(0, 100) : "",
                        $referrer_host: _.url("hostname", document.referrer) || "",
                        $url: location.href,
                        $url_path: location.pathname,
                        $title: document.title || "",
                        _distinct_id: store.getDistinctId()
                    };
                    return _.extend({}, _.info.properties(), sa.store.getProps(), e(), t)
                };
                var heatmap = {
                    getDomIndex: function (e) {
                        var t = [].indexOf;
                        if (!e.parentNode) return -1;
                        var r = e.parentNode.children;
                        if (!r) return -1;
                        var n = r.length;
                        if (t) return t.call(r, e);
                        for (var i = 0; n > i; ++i) if (e == r[i]) return i;
                        return -1
                    }, selector: function (e) {
                        var t = e.parentNode && 9 == e.parentNode.nodeType ? -1 : this.getDomIndex(e);
                        return e.id ? "#" + e.id : e.tagName.toLowerCase() + (~t ? ":nth-child(" + (t + 1) + ")" : "")
                    }, getDomSelector: function (e, t) {
                        if (!e || !e.parentNode || !e.parentNode.children) return !1;
                        t = t && t.join ? t : [];
                        var r = e.nodeName.toLowerCase();
                        return e && "body" !== r && 1 == e.nodeType ? (t.unshift(this.selector(e)), e.id ? t.join(" > ") : this.getDomSelector(e.parentNode, t)) : (t.unshift("body"), t.join(" > "))
                    }, na: function () {
                        var e = document.documentElement.scrollLeft || window.pageXOffset;
                        return parseInt(isNaN(e) ? 0 : e, 10)
                    }, i: function () {
                        var e = 0;
                        try {
                            e = o.documentElement.scrollTop || m.pageYOffset, e = isNaN(e) ? 0 : e
                        } catch (t) {
                            e = 0
                        }
                        return parseInt(e, 10)
                    }, getBrowserWidth: function () {
                        var e = window.innerWidth || document.body.clientWidth;
                        return isNaN(e) ? 0 : parseInt(e, 10)
                    }, getBrowserHeight: function () {
                        var e = window.innerHeight || document.body.clientHeight;
                        return isNaN(e) ? 0 : parseInt(e, 10)
                    }, getScrollWidth: function () {
                        var e = parseInt(document.body.scrollWidth, 10);
                        return isNaN(e) ? 0 : e
                    }, W: function (e) {
                        var t = parseInt(+e.clientX + +this.na(), 10), e = parseInt(+e.clientY + +this.i(), 10);
                        return {x: isNaN(t) ? 0 : t, y: isNaN(e) ? 0 : e}
                    }, start: function (e, t, r) {
                        if (sd.para.heatmap && sd.para.heatmap.collect_element && !sd.para.heatmap.collect_element(t)) return !1;
                        var n = this.getDomSelector(t), i = _.getEleInfo({target: t});
                        if (i.$element_selector = n ? n : "", sd.para.heatmap && sd.para.heatmap.custom_property) {
                            var o = sd.para.heatmap.custom_property(t);
                            _.isObject(o) && (i = _.extend(i, o))
                        }
                        "a" === r && sd.para.heatmap && sd.para.heatmap.isTrackLink === !0 ? _.trackLink({
                            event: e,
                            target: t
                        }, "$WebClick", i) : sd.track("$WebClick", i)
                    }, hasElement: function (e) {
                        var t = e._getPath();
                        if (_.isArray(t) && t.length > 0) for (var r = 0; r < t.length; r++) if (t[r] && t[r].tagName && "a" === t[r].tagName.toLowerCase()) return t[r];
                        return !1
                    }, initScrollmap: function () {
                        if (!_.isObject(sd.para.heatmap) || "default" !== sd.para.heatmap.scroll_notice_map) return !1;
                        var e = function (e) {
                            var t = {};
                            return t.timeout = e.timeout || 1e3, t.func = e.func, t.hasInit = !1, t.inter = null, t.main = function (e) {
                                this.func(e), this.inter = null
                            }, t.go = function (e) {
                                var r = {};
                                this.inter || (r.$viewport_position = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0, r.$viewport_position = Math.round(r.$viewport_position) || 0, r.$viewport_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0, r.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0, e ? t.main(r) : this.inter = setTimeout(function () {
                                    t.main(r)
                                }, this.timeout))
                            }, t
                        }, t = e({
                            timeout: 1e3, func: function (e) {
                                var t = new Date, r = t - this.current_time;
                                r > sd.para.heatmap.scroll_delay_time && (e.$url = location.href, e.$title = document.title, e.$url_path = location.pathname, e.event_duration = parseInt(r), sd.track("$WebStay", e)), this.current_time = t
                            }
                        });
                        t.current_time = new Date, _.addEvent(window, "scroll", function () {
                            t.go()
                        }), _.addEvent(window, "unload", function () {
                            t.go("notime")
                        })
                    }, initHeatmap: function () {
                        var e = this;
                        return !(!_.isObject(sd.para.heatmap) || "default" !== sd.para.heatmap.clickmap) && (!(_.isFunction(sd.para.heatmap.collect_url) && !sd.para.heatmap.collect_url()) && ("all" === sd.para.heatmap.collect_elements ? sd.para.heatmap.collect_elements = "all" : sd.para.heatmap.collect_elements = "interact", void ("all" === sd.para.heatmap.collect_elements ? _.addEvent(document, "click", function (t) {
                            var r = t || window.event;
                            if (!r) return !1;
                            var n = r.target || r.srcElement;
                            if ("object" != ("undefined" == typeof n ? "undefined" : _typeof(n))) return !1;
                            if ("string" != typeof n.tagName) return !1;
                            var i = n.tagName.toLowerCase();
                            if ("body" === i.toLowerCase() || "html" === i.toLowerCase()) return !1;
                            if (!n || !n.parentNode || !n.parentNode.children) return !1;
                            var o = n.parentNode.tagName.toLowerCase();
                            "a" === o || "button" === o ? e.start(r, n.parentNode, n.parentNode.tagName.toLowerCase()) : e.start(r, n, i)
                        }) : _.addEvent(document, "click", function (t) {
                            var r = t || window.event;
                            if (!r) return !1;
                            var n = r.target || r.srcElement;
                            if ("object" != ("undefined" == typeof n ? "undefined" : _typeof(n))) return !1;
                            if ("string" != typeof n.tagName) return !1;
                            var i = n.tagName.toLowerCase();
                            if ("body" === i.toLowerCase() || "html" === i.toLowerCase()) return !1;
                            if (!n || !n.parentNode || !n.parentNode.children) return !1;
                            var o = n.parentNode;
                            if ("a" === i || "button" === i || "input" === i || "textarea" === i) e.start(r, n, i); else if ("button" === o.tagName.toLowerCase() || "a" === o.tagName.toLowerCase()) e.start(r, o, n.parentNode.tagName.toLowerCase()); else if ("area" === i && "map" === o.tagName.toLowerCase() && _.ry(o).prev().tagName && "img" === _.ry(o).prev().tagName.toLowerCase()) e.start(r, _.ry(o).prev(), _.ry(o).prev().tagName.toLowerCase()); else {
                                var a = e.hasElement(t);
                                a && e.start(r, a, a.tagName.toLowerCase())
                            }
                        }))))
                    }, prepare: function (e) {
                        function t(e, t, r) {
                            sd.para.heatmap_url ? _.loadScript({
                                success: function () {
                                    setTimeout(function () {
                                        "undefined" != typeof sa_jssdk_heatmap_render && sa_jssdk_heatmap_render(sd, e, t, r)
                                    }, 0)
                                }, error: function () {
                                }, type: "js", url: sd.para.heatmap_url
                            }) : logger.info("没有指定heatmap_url的路径")
                        }

                        var r = location.search.match(/sa-request-id=([^&#]+)/),
                            n = location.search.match(/sa-request-type=([^&#]+)/),
                            i = location.search.match(/sa-request-url=([^&#]+)/);
                        r && r[0] && r[1] ? (sd.is_heatmap_render_mode = !0, _.sessionStorage.isSupport() && (i && i[0] && i[1] && sessionStorage.setItem("sensors_heatmap_url", decodeURIComponent(i[1])), sessionStorage.setItem("sensors_heatmap_id", r[1]), n && n[0] && n[1] ? "1" === n[1] || "2" === n[1] || "3" === n[1] ? (n = n[1], sessionStorage.setItem("sensors_heatmap_type", n)) : n = null : n = null !== sessionStorage.getItem("sensors_heatmap_type") ? sessionStorage.getItem("sensors_heatmap_type") : null), t(r[1], n)) : _.sessionStorage.isSupport() && "string" == typeof sessionStorage.getItem("sensors_heatmap_id") ? (sd.is_heatmap_render_mode = !0, t(sessionStorage.getItem("sensors_heatmap_id"), sessionStorage.getItem("sensors_heatmap_type"), location.href)) : (e(), _.isObject(sd.para.heatmap) && (this.initHeatmap(), this.initScrollmap()))
                    }
                };
                return sd.init = function (e) {
                    (!e && has_declare || e && !has_declare) && (sd.initPara(e), sd._init(), sd.readyState = 2)
                }, sd._init = function () {
                    heatmap.prepare(function () {
                        app_js_bridge(), _.info.initPage(), store.init(), sd._q && _.isArray(sd._q) && sd._q.length > 0 && _.each(sd._q, function (e) {
                            sd[e[0]].apply(sd, slice.call(e[1]))
                        })
                    })
                }, sd.init(), sd
            } catch (e) {
                if ("object" == ("undefined" == typeof console ? "undefined" : _typeof(console)) && console.log) try {
                    console.log(e)
                } catch (e) {
                }
            }
        })
    }).call(exports, __webpack_require__(5)(module))
}, function (e, t, r) {
    "use strict";
    (function (t) {
        function r(e) {
            var t = this.constructor;
            return this.then(function (r) {
                return t.resolve(e()).then(function () {
                    return r
                })
            }, function (r) {
                return t.resolve(e()).then(function () {
                    return t.reject(r)
                })
            })
        }

        function n() {
        }

        function i(e, t) {
            return function () {
                e.apply(t, arguments)
            }
        }

        function o(e) {
            if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
        }

        function a(e, t) {
            for (; 3 === e._state;) e = e._value;
            return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void o._immediateFn(function () {
                var r = 1 === e._state ? t.onFulfilled : t.onRejected;
                if (null === r) return void (1 === e._state ? s : c)(t.promise, e._value);
                var n;
                try {
                    n = r(e._value)
                } catch (e) {
                    return void c(t.promise, e)
                }
                s(t.promise, n)
            }))
        }

        function s(e, t) {
            try {
                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var r = t.then;
                    if (t instanceof o) return e._state = 3, e._value = t, void u(e);
                    if ("function" == typeof r) return void d(i(r, t), e)
                }
                e._state = 1, e._value = t, u(e)
            } catch (t) {
                c(e, t)
            }
        }

        function c(e, t) {
            e._state = 2, e._value = t, u(e)
        }

        function u(e) {
            2 === e._state && 0 === e._deferreds.length && o._immediateFn(function () {
                e._handled || o._unhandledRejectionFn(e._value)
            });
            for (var t = 0, r = e._deferreds.length; t < r; t++) a(e, e._deferreds[t]);
            e._deferreds = null
        }

        function l(e, t, r) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = r
        }

        function d(e, t) {
            var r = !1;
            try {
                e(function (e) {
                    r || (r = !0, s(t, e))
                }, function (e) {
                    r || (r = !0, c(t, e))
                })
            } catch (e) {
                if (r) return;
                r = !0, c(t, e)
            }
        }

        var f = setTimeout;
        o.prototype.catch = function (e) {
            return this.then(null, e)
        }, o.prototype.then = function (e, t) {
            var r = new this.constructor(n);
            return a(this, new l(e, t, r)), r
        }, o.prototype.finally = r, o.all = function (e) {
            return new o(function (t, r) {
                function n(e, a) {
                    try {
                        if (a && ("object" == typeof a || "function" == typeof a)) {
                            var s = a.then;
                            if ("function" == typeof s) return void s.call(a, function (t) {
                                n(e, t)
                            }, r)
                        }
                        i[e] = a, 0 === --o && t(i)
                    } catch (e) {
                        r(e)
                    }
                }

                if (!e || "undefined" == typeof e.length) throw new TypeError("Promise.all accepts an array");
                var i = Array.prototype.slice.call(e);
                if (0 === i.length) return t([]);
                for (var o = i.length, a = 0; a < i.length; a++) n(a, i[a])
            })
        }, o.resolve = function (e) {
            return e && "object" == typeof e && e.constructor === o ? e : new o(function (t) {
                t(e)
            })
        }, o.reject = function (e) {
            return new o(function (t, r) {
                r(e)
            })
        }, o.race = function (e) {
            return new o(function (t, r) {
                for (var n = 0, i = e.length; n < i; n++) e[n].then(t, r)
            })
        }, o._immediateFn = "function" == typeof t && function (e) {
            t(e)
        } || function (e) {
            f(e, 0)
        }, o._unhandledRejectionFn = function (e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        }, e.exports = o
    }).call(t, r(0).setImmediate)
}, function (e, t) {
    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function n() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (l === setTimeout) return setTimeout(e, 0);
        if ((l === r || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
        try {
            return l(e, 0)
        } catch (t) {
            try {
                return l.call(null, e, 0)
            } catch (t) {
                return l.call(this, e, 0)
            }
        }
    }

    function o(e) {
        if (d === clearTimeout) return clearTimeout(e);
        if ((d === n || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
        try {
            return d(e)
        } catch (t) {
            try {
                return d.call(null, e)
            } catch (t) {
                return d.call(this, e)
            }
        }
    }

    function a() {
        g && p && (g = !1, p.length ? _ = p.concat(_) : h = -1, _.length && s())
    }

    function s() {
        if (!g) {
            var e = i(a);
            g = !0;
            for (var t = _.length; t;) {
                for (p = _, _ = []; ++h < t;) p && p[h].run();
                h = -1, t = _.length
            }
            p = null, g = !1, o(e)
        }
    }

    function c(e, t) {
        this.fun = e, this.array = t
    }

    function u() {
    }

    var l, d, f = e.exports = {};
    !function () {
        try {
            l = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
            l = r
        }
        try {
            d = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (e) {
            d = n
        }
    }();
    var p, _ = [], g = !1, h = -1;
    f.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        _.push(new c(e, t)), 1 !== _.length || g || i(s)
    }, c.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function (e) {
        return []
    }, f.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function () {
        return "/"
    }, f.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function () {
        return 0
    }
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {
        }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            configurable: !1,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0, configurable: !1, get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}]);