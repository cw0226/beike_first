!function webpackUniversalModuleDefinition(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("CaptchaSDK", [], t) : "object" == typeof exports ? exports.CaptchaSDK = t() : e.CaptchaSDK = t()
}(window, function () {
    return function (n) {
        var r = {};

        function o(e) {
            if (r[e]) return r[e].exports;
            var t = r[e] = {i: e, l: !1, exports: {}};
            return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
        }

        return o.m = n, o.c = r, o.d = function (e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
        }, o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, o.t = function (t, e) {
            if (1 & e && (t = o(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var r in t) o.d(n, r, function (e) {
                return t[e]
            }.bind(null, r));
            return n
        }, o.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e["default"]
            } : function () {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = 103)
    }([function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.requestAnimationFrame = t.ownerWindow = t.ownerDocument = t.activeElement = t.query = t.events = t.style = undefined;
        var r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, o = l(n(13)), i = l(n(84)), u = l(n(87)), a = l(n(93)), c = l(n(8)), s = l(n(94)), f = l(n(95));

        function l(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        t.style = o["default"], t.events = i["default"], t.query = u["default"], t.activeElement = a["default"], t.ownerDocument = c["default"], t.ownerWindow = s["default"], t.requestAnimationFrame = f["default"], t["default"] = r({}, i["default"], u["default"], {
            style: o["default"],
            activeElement: a["default"],
            ownerDocument: c["default"],
            ownerWindow: s["default"],
            requestAnimationFrame: f["default"]
        })
    }, function (e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (e, t, n) {
        var r = n(25)("wks"), o = n(15), i = n(1).Symbol, u = "function" == typeof i;
        (e.exports = function (e) {
            return r[e] || (r[e] = u && i[e] || (u ? i : o)("Symbol." + e))
        }).store = r
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = !("undefined" == typeof window || !window.document || !window.document.createElement), e.exports = t["default"]
    }, function (e, t) {
        var n = e.exports = {version: "2.5.7"};
        "number" == typeof __e && (__e = n)
    }, function (e, t, n) {
        var r = n(6);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function r(e) {
            return e === e.window ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }, e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function r(e) {
            return e && e.ownerDocument || document
        }, e.exports = t["default"]
    }, function (e, t, n) {
        var i = n(10);
        e.exports = function (r, o, e) {
            if (i(r), o === undefined) return r;
            switch (e) {
                case 1:
                    return function (e) {
                        return r.call(o, e)
                    };
                case 2:
                    return function (e, t) {
                        return r.call(o, e, t)
                    };
                case 3:
                    return function (e, t, n) {
                        return r.call(o, e, t, n)
                    }
            }
            return function () {
                return r.apply(o, arguments)
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    }, function (e, t, n) {
        e.exports = !n(17)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function d(n, e, t) {
            var r = "", o = "", i = e;
            if ("string" == typeof e) {
                if (t === undefined) return n.style[(0, u["default"])(e)] || (0, c["default"])(n).getPropertyValue((0, a["default"])(e));
                (i = {})[e] = t
            }
            Object.keys(i).forEach(function (e) {
                var t = i[e];
                t || 0 === t ? (0, l["default"])(e) ? o += e + "(" + t + ") " : r += (0, a["default"])(e) + ": " + t + ";" : (0, s["default"])(n, (0, a["default"])(e))
            }), o && (r += f.transform + ": " + o + ";");
            n.style.cssText += ";" + r
        };
        var u = r(n(38)), a = r(n(78)), c = r(n(80)), s = r(n(81)), f = n(82), l = r(n(83));

        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function c(e) {
            var t = (0, a["default"])(e), n = (0, u["default"])(t), r = t && t.documentElement,
                o = {top: 0, left: 0, height: 0, width: 0};
            if (!t) return;
            if (!(0, i["default"])(r, e)) return o;
            e.getBoundingClientRect !== undefined && (o = e.getBoundingClientRect());
            return o = {
                top: o.top + (n.pageYOffset || r.scrollTop) - (r.clientTop || 0),
                left: o.left + (n.pageXOffset || r.scrollLeft) - (r.clientLeft || 0),
                width: (null == o.width ? e.offsetWidth : o.width) || 0,
                height: (null == o.height ? e.offsetHeight : o.height) || 0
            }
        };
        var i = r(n(19)), u = r(n(7)), a = r(n(8));

        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        e.exports = t["default"]
    }, function (e, t) {
        var n = 0, r = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(e === undefined ? "" : e, ")_", (++n + r).toString(36))
        }
    }, function (e, t, n) {
        var o = n(5), i = n(47), u = n(48), a = Object.defineProperty;
        t.f = n(12) ? Object.defineProperty : function (e, t, n) {
            if (o(e), t = u(t, !0), o(n), i) try {
                return a(e, t, n)
            } catch (r) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
    }, function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function i(e) {
            return e && e.__esModule ? e : {"default": e}
        }(n(3));

        function o(e, t) {
            if (t) do {
                if (t === e) return !0
            } while (t = t.parentNode);
            return !1
        }

        t["default"] = r["default"] ? function (e, t) {
            return e.contains ? e.contains(t) : e.compareDocumentPosition ? e === t || !!(16 & e.compareDocumentPosition(t)) : o(e, t)
        } : o, e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function c(e, t) {
            var n, r = "#" === t[0], o = "." === t[0], i = r || o ? t.slice(1) : t;
            if (u.test(i)) return r ? (e = e.getElementById ? e : document, (n = e.getElementById(i)) ? [n] : []) : e.getElementsByClassName && o ? a(e.getElementsByClassName(i)) : a(e.getElementsByTagName(t));
            return a(e.querySelectorAll(t))
        };
        var u = /^[\w-]*$/, a = Function.prototype.bind.call(Function.prototype.call, [].slice);
        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        var o = Object.prototype.hasOwnProperty;

        function u(e) {
            return decodeURIComponent(e.replace(/\+/g, " "))
        }

        t.stringify = function i(e, t) {
            t = t || "";
            var n = [];
            for (var r in "string" != typeof t && (t = "?"), e) o.call(e, r) && n.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
            return n.length ? t + n.join("&") : ""
        }, t.parse = function a(e) {
            for (var t, n = /([^=?&]+)=?([^&]*)/g, r = {}; t = n.exec(e);) {
                var o = u(t[1]), i = u(t[2]);
                o in r || (r[o] = i)
            }
            return r
        }
    }, function (e, t, n) {
        var p = n(96)("jsonp");
        e.exports = function m(e, t, n) {
            "function" == typeof t && (n = t, t = {});
            t || (t = {});
            var r, o, i = t.prefix || "__jp", u = t.name || i + v++, a = t.param || "callback",
                c = null != t.timeout ? t.timeout : 6e4, s = encodeURIComponent,
                f = document.getElementsByTagName("script")[0] || document.head;
            c && (o = setTimeout(function () {
                l(), n && n(new Error("Timeout"))
            }, c));

            function l() {
                r.parentNode && r.parentNode.removeChild(r), window[u] = h, o && clearTimeout(o)
            }

            return window[u] = function (e) {
                p("jsonp got", e), l(), n && n(null, e)
            }, e = (e += (~e.indexOf("?") ? "&" : "?") + a + "=" + s(u)).replace("?&", "?"), p('jsonp req "%s"', e), (r = document.createElement("script")).src = e, f.parentNode.insertBefore(r, f), function d() {
                window[u] && l()
            }
        };
        var v = 0;

        function h() {
        }
    }, function (e, t) {
        e.exports = !1
    }, function (e, t, n) {
        var o = n(11), i = n(2)("toStringTag"), u = "Arguments" == o(function () {
            return arguments
        }());
        e.exports = function (e) {
            var t, n, r;
            return e === undefined ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                try {
                    return e[t]
                } catch (n) {
                }
            }(t = Object(e), i)) ? n : u ? o(t) : "Object" == (r = o(t)) && "function" == typeof t.callee ? "Arguments" : r
        }
    }, function (e, t, n) {
        var r = n(4), o = n(1), i = "__core-js_shared__", u = o[i] || (o[i] = {});
        (e.exports = function (e, t) {
            return u[e] || (u[e] = t !== undefined ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(23) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function (e, t, n) {
        var h = n(1), m = n(4), y = n(27), g = n(29), w = n(9), _ = "prototype", x = function (e, t, n) {
            var r, o, i, u, a = e & x.F, c = e & x.G, s = e & x.S, f = e & x.P, l = e & x.B,
                d = c ? h : s ? h[t] || (h[t] = {}) : (h[t] || {})[_], p = c ? m : m[t] || (m[t] = {}),
                v = p[_] || (p[_] = {});
            for (r in c && (n = t), n) i = ((o = !a && d && d[r] !== undefined) ? d : n)[r], u = l && o ? w(i, h) : f && "function" == typeof i ? w(Function.call, i) : i, d && g(d, r, i, e & x.U), p[r] != i && y(p, r, u), f && v[r] != i && (v[r] = i)
        };
        h.core = m, x.F = 1, x.G = 2, x.S = 4, x.P = 8, x.B = 16, x.W = 32, x.U = 64, x.R = 128, e.exports = x
    }, function (e, t, n) {
        var r = n(16), o = n(49);
        e.exports = n(12) ? function (e, t, n) {
            return r.f(e, t, o(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    }, function (e, t, n) {
        var r = n(6), o = n(1).document, i = r(o) && r(o.createElement);
        e.exports = function (e) {
            return i ? o.createElement(e) : {}
        }
    }, function (e, t, n) {
        var i = n(1), u = n(27), a = n(18), c = n(15)("src"), r = "toString", o = Function[r], s = ("" + o).split(r);
        n(4).inspectSource = function (e) {
            return o.call(e)
        }, (e.exports = function (e, t, n, r) {
            var o = "function" == typeof n;
            o && (a(n, "name") || u(n, "name", t)), e[t] !== n && (o && (a(n, c) || u(n, c, e[t] ? "" + e[t] : s.join(String(t)))), e === i ? e[t] = n : r ? e[t] ? e[t] = n : u(e, t, n) : (delete e[t], u(e, t, n)))
        })(Function.prototype, r, function () {
            return "function" == typeof this && this[c] || o.call(this)
        })
    }, function (e, t) {
        e.exports = {}
    }, function (e, t, n) {
        var r = n(32), o = Math.min;
        e.exports = function (e) {
            return 0 < e ? o(r(e), 9007199254740991) : 0
        }
    }, function (e, t) {
        var n = Math.ceil, r = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    }, function (e, t, n) {
        var r, o, i, u = n(9), a = n(56), c = n(57), s = n(28), f = n(1), l = f.process, d = f.setImmediate,
            p = f.clearImmediate, v = f.MessageChannel, h = f.Dispatch, m = 0, y = {}, g = "onreadystatechange",
            w = function () {
                var e = +this;
                if (y.hasOwnProperty(e)) {
                    var t = y[e];
                    delete y[e], t()
                }
            }, _ = function (e) {
                w.call(e.data)
            };
        d && p || (d = function (e) {
            for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
            return y[++m] = function () {
                a("function" == typeof e ? e : Function(e), t)
            }, r(m), m
        }, p = function (e) {
            delete y[e]
        }, "process" == n(11)(l) ? r = function (e) {
            l.nextTick(u(w, e, 1))
        } : h && h.now ? r = function (e) {
            h.now(u(w, e, 1))
        } : v ? (i = (o = new v).port2, o.port1.onmessage = _, r = u(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (r = function (e) {
            f.postMessage(e + "", "*")
        }, f.addEventListener("message", _, !1)) : r = g in s("script") ? function (e) {
            c.appendChild(s("script"))[g] = function () {
                c.removeChild(this), w.call(e)
            }
        } : function (e) {
            setTimeout(u(w, e, 1), 0)
        }), e.exports = {set: d, clear: p}
    }, function (e, t, n) {
        "use strict";
        var o = n(10);

        function r(e) {
            var n, r;
            this.promise = new e(function (e, t) {
                if (n !== undefined || r !== undefined) throw TypeError("Bad Promise constructor");
                n = e, r = t
            }), this.resolve = o(n), this.reject = o(r)
        }

        e.exports.f = function (e) {
            return new r(e)
        }
    }, function (e, t, n) {
        var r = n(36), o = n(37);
        e.exports = function (e) {
            return r(o(e))
        }
    }, function (e, t, n) {
        var r = n(11);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    }, function (e, t) {
        e.exports = function (e) {
            if (e == undefined) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function i(e) {
            return (0, r["default"])(e.replace(o, "ms-"))
        };
        var r = function u(e) {
            return e && e.__esModule ? e : {"default": e}
        }(n(77));
        var o = /^-ms-/;
        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function r() {
        };
        (function o(e) {
            return e && e.__esModule ? e : {"default": e}
        })(n(3))["default"] && (r = document.addEventListener ? function (e, t, n, r) {
            return e.addEventListener(t, n, r || !1)
        } : document.attachEvent ? function (t, e, n) {
            return t.attachEvent("on" + e, function (e) {
                (e = e || window.event).target = e.target || e.srcElement, e.currentTarget = t, n.call(t, e)
            })
        } : void 0), t["default"] = r, e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function r() {
        };
        (function o(e) {
            return e && e.__esModule ? e : {"default": e}
        })(n(3))["default"] && (r = document.addEventListener ? function (e, t, n, r) {
            return e.removeEventListener(t, n, r || !1)
        } : document.attachEvent ? function (e, t, n) {
            return e.detachEvent("on" + t, n)
        } : void 0), t["default"] = r, e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function c(e, t) {
            !u && o["default"] && (n = document.body, r = n.matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector, u = r ? function (e, t) {
                return r.call(e, t)
            } : a);
            var n, r;
            return u ? u(e, t) : null
        };
        var o = r(n(3)), i = r(n(20));

        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        var u = void 0;

        function a(e, t) {
            for (var n = (0, i["default"])(e.document || e.ownerDocument, t), r = 0; n[r] && n[r] !== e;) r++;
            return !!n[r]
        }

        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function u(e, t) {
            var n = (0, o["default"])(e);
            return n ? n.innerHeight : t ? e.clientHeight : (0, r["default"])(e).height
        };
        var r = i(n(14)), o = i(n(7));

        function i(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function u(e) {
            var t = (0, o["default"])(e), n = e && e.offsetParent;
            for (; n && "html" !== (r = e, r.nodeName && r.nodeName.toLowerCase()) && "static" === (0, i["default"])(n, "position");) n = n.offsetParent;
            var r;
            return n || t.documentElement
        };
        var o = r(n(8)), i = r(n(13));

        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function o(e, t) {
            var n = (0, r["default"])(e);
            if (t === undefined) return n ? "pageYOffset" in n ? n.pageYOffset : n.document.documentElement.scrollTop : e.scrollTop;
            n ? n.scrollTo("pageXOffset" in n ? n.pageXOffset : n.document.documentElement.scrollLeft, t) : e.scrollTop = t
        };
        var r = function i(e) {
            return e && e.__esModule ? e : {"default": e}
        }(n(7));
        e.exports = t["default"]
    }, function (e, t) {
        e.exports = '<?xml version="1.0" encoding="UTF-8"?>\n<svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">\n    <path d="M512 64C264.64 64 64 264.64 64 512c0 247.424 200.64 448 448 448 247.488 0 448-200.576 448-448C960 264.64 759.488 64 512 64zM512 768c-26.432 0-48-21.504-48-48S485.568 672 512 672c26.624 0 48 21.504 48 48S538.624 768 512 768zM560 528C560 554.56 538.624 576 512 576 485.568 576 464 554.56 464 528l0-224C464 277.44 485.568 256 512 256c26.624 0 48 21.44 48 48L560 528z" p-id="1861"></path>\n</svg>\n'
    }, function (e, t, r) {
        "use strict";
        var n, o, i, u, a = r(23), c = r(1), s = r(9), f = r(24), l = r(26), d = r(6), p = r(10), v = r(50), h = r(51),
            m = r(55), y = r(33).set, g = r(58)(), w = r(34), _ = r(59), x = r(60), b = r(61), E = "Promise",
            T = c.TypeError, M = c.process, O = M && M.versions, j = O && O.v8 || "", P = c[E], C = "process" == f(M),
            S = function () {
            }, k = o = w.f, A = !!function () {
                try {
                    var e = P.resolve(1), t = (e.constructor = {})[r(2)("species")] = function (e) {
                        e(S, S)
                    };
                    return (C || "function" == typeof PromiseRejectionEvent) && e.then(S) instanceof t && 0 !== j.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
                } catch (n) {
                }
            }(), q = function (e) {
                var t;
                return !(!d(e) || "function" != typeof (t = e.then)) && t
            }, D = function (l, n) {
                if (!l._n) {
                    l._n = !0;
                    var r = l._c;
                    g(function () {
                        for (var s = l._v, f = 1 == l._s, e = 0, t = function (e) {
                            var t, n, r, o = f ? e.ok : e.fail, i = e.resolve, u = e.reject, a = e.domain;
                            try {
                                o ? (f || (2 == l._h && z(l), l._h = 1), !0 === o ? t = s : (a && a.enter(), t = o(s), a && (a.exit(), r = !0)), t === e.promise ? u(T("Promise-chain cycle")) : (n = q(t)) ? n.call(t, i, u) : i(t)) : u(s)
                            } catch (c) {
                                a && !r && a.exit(), u(c)
                            }
                        }; r.length > e;) t(r[e++]);
                        l._c = [], l._n = !1, n && !l._h && L(l)
                    })
                }
            }, L = function (i) {
                y.call(c, function () {
                    var e, t, n, r = i._v, o = N(i);
                    if (o && (e = _(function () {
                        C ? M.emit("unhandledRejection", r, i) : (t = c.onunhandledrejection) ? t({
                            promise: i,
                            reason: r
                        }) : (n = c.console) && n.error && n.error("Unhandled promise rejection", r)
                    }), i._h = C || N(i) ? 2 : 1), i._a = undefined, o && e.e) throw e.v
                })
            }, N = function (e) {
                return 1 !== e._h && 0 === (e._a || e._c).length
            }, z = function (t) {
                y.call(c, function () {
                    var e;
                    C ? M.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({promise: t, reason: t._v})
                })
            }, F = function (e) {
                var t = this;
                t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), D(t, !0))
            }, R = function (n) {
                var r, o = this;
                if (!o._d) {
                    o._d = !0, o = o._w || o;
                    try {
                        if (o === n) throw T("Promise can't be resolved itself");
                        (r = q(n)) ? g(function () {
                            var e = {_w: o, _d: !1};
                            try {
                                r.call(n, s(R, e, 1), s(F, e, 1))
                            } catch (t) {
                                F.call(e, t)
                            }
                        }) : (o._v = n, o._s = 1, D(o, !1))
                    } catch (e) {
                        F.call({_w: o, _d: !1}, e)
                    }
                }
            };
        A || (P = function (e) {
            v(this, P, E, "_h"), p(e), n.call(this);
            try {
                e(s(R, this, 1), s(F, this, 1))
            } catch (t) {
                F.call(this, t)
            }
        }, (n = function (e) {
            this._c = [], this._a = undefined, this._s = 0, this._d = !1, this._v = undefined, this._h = 0, this._n = !1
        }).prototype = r(62)(P.prototype, {
            then: function (e, t) {
                var n = k(m(this, P));
                return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = C ? M.domain : undefined, this._c.push(n), this._a && this._a.push(n), this._s && D(this, !1), n.promise
            }, "catch": function (e) {
                return this.then(undefined, e)
            }
        }), i = function () {
            var e = new n;
            this.promise = e, this.resolve = s(R, e, 1), this.reject = s(F, e, 1)
        }, w.f = k = function (e) {
            return e === P || e === u ? new i(e) : o(e)
        }), l(l.G + l.W + l.F * !A, {Promise: P}), r(63)(P, E), r(64)(E), u = r(4)[E], l(l.S + l.F * !A, E, {
            reject: function (e) {
                var t = k(this);
                return (0, t.reject)(e), t.promise
            }
        }), l(l.S + l.F * (a || !A), E, {
            resolve: function (e) {
                return b(a && this === u ? P : this, e)
            }
        }), l(l.S + l.F * !(A && r(65)(function (e) {
            P.all(e)["catch"](S)
        })), E, {
            all: function (e) {
                var u = this, t = k(u), a = t.resolve, c = t.reject, n = _(function () {
                    var r = [], o = 0, i = 1;
                    h(e, !1, function (e) {
                        var t = o++, n = !1;
                        r.push(undefined), i++, u.resolve(e).then(function (e) {
                            n || (n = !0, r[t] = e, --i || a(r))
                        }, c)
                    }), --i || a(r)
                });
                return n.e && c(n.v), t.promise
            }, race: function (e) {
                var t = this, n = k(t), r = n.reject, o = _(function () {
                    h(e, !1, function (e) {
                        t.resolve(e).then(n.resolve, r)
                    })
                });
                return o.e && r(o.v), n.promise
            }
        })
    }, function (e, t, n) {
        e.exports = !n(12) && !n(17)(function () {
            return 7 != Object.defineProperty(n(28)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (e, t, n) {
        var o = n(6);
        e.exports = function (e, t) {
            if (!o(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
            if ("function" == typeof (n = e.valueOf) && !o(r = n.call(e))) return r;
            if (!t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
        }
    }, function (e, t) {
        e.exports = function (e, t, n, r) {
            if (!(e instanceof t) || r !== undefined && r in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }
    }, function (e, t, n) {
        var d = n(9), p = n(52), v = n(53), h = n(5), m = n(31), y = n(54), g = {}, w = {};
        (t = e.exports = function (e, t, n, r, o) {
            var i, u, a, c, s = o ? function () {
                return e
            } : y(e), f = d(n, r, t ? 2 : 1), l = 0;
            if ("function" != typeof s) throw TypeError(e + " is not iterable!");
            if (v(s)) {
                for (i = m(e.length); l < i; l++) if ((c = t ? f(h(u = e[l])[0], u[1]) : f(e[l])) === g || c === w) return c
            } else for (a = s.call(e); !(u = a.next()).done;) if ((c = p(a, f, u.value, t)) === g || c === w) return c
        }).BREAK = g, t.RETURN = w
    }, function (e, t, n) {
        var u = n(5);
        e.exports = function (e, t, n, r) {
            try {
                return r ? t(u(n)[0], n[1]) : t(n)
            } catch (i) {
                var o = e["return"];
                throw o !== undefined && u(o.call(e)), i
            }
        }
    }, function (e, t, n) {
        var r = n(30), o = n(2)("iterator"), i = Array.prototype;
        e.exports = function (e) {
            return e !== undefined && (r.Array === e || i[o] === e)
        }
    }, function (e, t, n) {
        var r = n(24), o = n(2)("iterator"), i = n(30);
        e.exports = n(4).getIteratorMethod = function (e) {
            if (e != undefined) return e[o] || e["@@iterator"] || i[r(e)]
        }
    }, function (e, t, n) {
        var o = n(5), i = n(10), u = n(2)("species");
        e.exports = function (e, t) {
            var n, r = o(e).constructor;
            return r === undefined || (n = o(r)[u]) == undefined ? t : i(n)
        }
    }, function (e, t) {
        e.exports = function (e, t, n) {
            var r = n === undefined;
            switch (t.length) {
                case 0:
                    return r ? e() : e.call(n);
                case 1:
                    return r ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
        }
    }, function (e, t, n) {
        var r = n(1).document;
        e.exports = r && r.documentElement
    }, function (e, t, n) {
        var a = n(1), c = n(33).set, s = a.MutationObserver || a.WebKitMutationObserver, f = a.process, l = a.Promise,
            d = "process" == n(11)(f);
        e.exports = function () {
            var r, o, i, e = function () {
                var e, t;
                for (d && (e = f.domain) && e.exit(); r;) {
                    t = r.fn, r = r.next;
                    try {
                        t()
                    } catch (n) {
                        throw r ? i() : o = undefined, n
                    }
                }
                o = undefined, e && e.enter()
            };
            if (d) i = function () {
                f.nextTick(e)
            }; else if (!s || a.navigator && a.navigator.standalone) if (l && l.resolve) {
                var t = l.resolve(undefined);
                i = function () {
                    t.then(e)
                }
            } else i = function () {
                c.call(a, e)
            }; else {
                var n = !0, u = document.createTextNode("");
                new s(e).observe(u, {characterData: !0}), i = function () {
                    u.data = n = !n
                }
            }
            return function (e) {
                var t = {fn: e, next: undefined};
                o && (o.next = t), r || (r = t, i()), o = t
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            try {
                return {e: !1, v: e()}
            } catch (t) {
                return {e: !0, v: t}
            }
        }
    }, function (e, t, n) {
        var r = n(1).navigator;
        e.exports = r && r.userAgent || ""
    }, function (e, t, n) {
        var r = n(5), o = n(6), i = n(34);
        e.exports = function (e, t) {
            if (r(e), o(t) && t.constructor === e) return t;
            var n = i.f(e);
            return (0, n.resolve)(t), n.promise
        }
    }, function (e, t, n) {
        var o = n(29);
        e.exports = function (e, t, n) {
            for (var r in t) o(e, r, t[r], n);
            return e
        }
    }, function (e, t, n) {
        var r = n(16).f, o = n(18), i = n(2)("toStringTag");
        e.exports = function (e, t, n) {
            e && !o(e = n ? e : e.prototype, i) && r(e, i, {configurable: !0, value: t})
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(1), o = n(16), i = n(12), u = n(2)("species");
        e.exports = function (e) {
            var t = r[e];
            i && t && !t[u] && o.f(t, u, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }, function (e, t, n) {
        var i = n(2)("iterator"), u = !1;
        try {
            var r = [7][i]();
            r["return"] = function () {
                u = !0
            }, Array.from(r, function () {
                throw 2
            })
        } catch (a) {
        }
        e.exports = function (e, t) {
            if (!t && !u) return !1;
            var n = !1;
            try {
                var r = [7], o = r[i]();
                o.next = function () {
                    return {done: n = !0}
                }, r[i] = function () {
                    return o
                }, e(r)
            } catch (a) {
            }
            return n
        }
    }, function (e, t, n) {
        var r = n(26);
        r(r.S + r.F, "Object", {assign: n(67)})
    }, function (e, t, n) {
        "use strict";
        var d = n(68), p = n(74), v = n(75), h = n(76), m = n(36), o = Object.assign;
        e.exports = !o || n(17)(function () {
            var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach(function (e) {
                t[e] = e
            }), 7 != o({}, e)[n] || Object.keys(o({}, t)).join("") != r
        }) ? function (e, t) {
            for (var n = h(e), r = arguments.length, o = 1, i = p.f, u = v.f; o < r;) for (var a, c = m(arguments[o++]), s = i ? d(c).concat(i(c)) : d(c), f = s.length, l = 0; l < f;) u.call(c, a = s[l++]) && (n[a] = c[a]);
            return n
        } : o
    }, function (e, t, n) {
        var r = n(69), o = n(73);
        e.exports = Object.keys || function (e) {
            return r(e, o)
        }
    }, function (e, t, n) {
        var u = n(18), a = n(35), c = n(70)(!1), s = n(72)("IE_PROTO");
        e.exports = function (e, t) {
            var n, r = a(e), o = 0, i = [];
            for (n in r) n != s && u(r, n) && i.push(n);
            for (; t.length > o;) u(r, n = t[o++]) && (~c(i, n) || i.push(n));
            return i
        }
    }, function (e, t, n) {
        var c = n(35), s = n(31), f = n(71);
        e.exports = function (a) {
            return function (e, t, n) {
                var r, o = c(e), i = s(o.length), u = f(n, i);
                if (a && t != t) {
                    for (; u < i;) if ((r = o[u++]) != r) return !0
                } else for (; u < i; u++) if ((a || u in o) && o[u] === t) return a || u || 0;
                return !a && -1
            }
        }
    }, function (e, t, n) {
        var r = n(32), o = Math.max, i = Math.min;
        e.exports = function (e, t) {
            return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
        }
    }, function (e, t, n) {
        var r = n(25)("keys"), o = n(15);
        e.exports = function (e) {
            return r[e] || (r[e] = o(e))
        }
    }, function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (e, t) {
        t.f = Object.getOwnPropertySymbols
    }, function (e, t) {
        t.f = {}.propertyIsEnumerable
    }, function (e, t, n) {
        var r = n(37);
        e.exports = function (e) {
            return Object(r(e))
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function o(e) {
            return e.replace(r, function (e, t) {
                return t.toUpperCase()
            })
        };
        var r = /-(.)/g;
        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function i(e) {
            return (0, r["default"])(e).replace(o, "-ms-")
        };
        var r = function u(e) {
            return e && e.__esModule ? e : {"default": e}
        }(n(79));
        var o = /^ms-/;
        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function o(e) {
            return e.replace(r, "-$1").toLowerCase()
        };
        var r = /([A-Z])/g;
        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function r(u) {
            if (!u) throw new TypeError("No Element passed to `getComputedStyle()`");
            var e = u.ownerDocument;
            return "defaultView" in e ? e.defaultView.opener ? u.ownerDocument.defaultView.getComputedStyle(u, null) : window.getComputedStyle(u, null) : {
                getPropertyValue: function (e) {
                    var t = u.style;
                    "float" == (e = (0, a["default"])(e)) && (e = "styleFloat");
                    var n = u.currentStyle[e] || null;
                    if (null == n && t && t[e] && (n = t[e]), s.test(n) && !c.test(e)) {
                        var r = t.left, o = u.runtimeStyle, i = o && o.left;
                        i && (o.left = u.currentStyle.left), t.left = "fontSize" === e ? "1em" : n, n = t.pixelLeft + "px", t.left = r, i && (o.left = i)
                    }
                    return n
                }
            }
        };
        var a = function o(e) {
            return e && e.__esModule ? e : {"default": e}
        }(n(38));
        var c = /^(top|right|bottom|left)$/, s = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function r(e, t) {
            return "removeProperty" in e.style ? e.style.removeProperty(t) : e.style.removeAttribute(t)
        }, e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.animationEnd = t.animationDelay = t.animationTiming = t.animationDuration = t.animationName = t.transitionEnd = t.transitionDuration = t.transitionDelay = t.transitionTiming = t.transitionProperty = t.transform = undefined;
        var r = "transform", o = void 0, i = void 0, u = void 0, a = void 0, c = void 0, s = void 0, f = void 0,
            l = void 0, d = void 0, p = void 0, v = void 0;
        if (function m(e) {
            return e && e.__esModule ? e : {"default": e}
        }(n(3))["default"]) {
            var h = function y() {
                for (var e = document.createElement("div").style, t = {
                    O: function (e) {
                        return "o" + e.toLowerCase()
                    }, Moz: function (e) {
                        return e.toLowerCase()
                    }, Webkit: function (e) {
                        return "webkit" + e
                    }, ms: function (e) {
                        return "MS" + e
                    }
                }, n = Object.keys(t), r = void 0, o = void 0, i = "", u = 0; u < n.length; u++) {
                    var a = n[u];
                    if (a + "TransitionProperty" in e) {
                        i = "-" + a.toLowerCase(), r = t[a]("TransitionEnd"), o = t[a]("AnimationEnd");
                        break
                    }
                }
                !r && "transitionProperty" in e && (r = "transitionend");
                !o && "animationName" in e && (o = "animationend");
                return e = null, {animationEnd: o, transitionEnd: r, prefix: i}
            }();
            o = h.prefix, t.transitionEnd = i = h.transitionEnd, t.animationEnd = u = h.animationEnd, t.transform = r = o + "-" + r, t.transitionProperty = a = o + "-transition-property", t.transitionDuration = c = o + "-transition-duration", t.transitionDelay = f = o + "-transition-delay", t.transitionTiming = s = o + "-transition-timing-function", t.animationName = l = o + "-animation-name", t.animationDuration = d = o + "-animation-duration", t.animationTiming = p = o + "-animation-delay", t.animationDelay = v = o + "-animation-timing-function"
        }
        t.transform = r, t.transitionProperty = a, t.transitionTiming = s, t.transitionDelay = f, t.transitionDuration = c, t.transitionEnd = i, t.animationName = l, t.animationDuration = d, t.animationTiming = p, t.animationDelay = v, t.animationEnd = u, t["default"] = {
            transform: r,
            end: i,
            property: a,
            timing: s,
            delay: f,
            duration: c
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function o(e) {
            return !(!e || !r.test(e))
        };
        var r = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.listen = t.filter = t.off = t.on = undefined;
        var r = a(n(39)), o = a(n(40)), i = a(n(85)), u = a(n(86));

        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        t.on = r["default"], t.off = o["default"], t.filter = i["default"], t.listen = u["default"], t["default"] = {
            on: r["default"],
            off: o["default"],
            filter: i["default"],
            listen: u["default"]
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function c(o, i) {
            return function (e) {
                var t = e.currentTarget, n = e.target, r = (0, a["default"])(t, o);
                r.some(function (e) {
                    return (0, u["default"])(e, n)
                }) && i.call(this, e)
            }
        };
        var u = r(n(19)), a = r(n(20));

        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = u(n(3)), o = u(n(39)), i = u(n(40));

        function u(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        var a = function a() {
        };
        r["default"] && (a = function a(e, t, n, r) {
            return (0, o["default"])(e, t, n, r), function () {
                (0, i["default"])(e, t, n, r)
            }
        }), t["default"] = a, e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.closest = t.querySelectorAll = t.scrollTop = t.scrollParent = t.contains = t.position = t.offsetParent = t.offset = t.width = t.height = t.matches = undefined;
        var r = v(n(41)), o = v(n(42)), i = v(n(88)), u = v(n(14)), a = v(n(43)), c = v(n(89)), s = v(n(19)),
            f = v(n(91)), l = v(n(44)), d = v(n(20)), p = v(n(92));

        function v(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        t.matches = r["default"], t.height = o["default"], t.width = i["default"], t.offset = u["default"], t.offsetParent = a["default"], t.position = c["default"], t.contains = s["default"], t.scrollParent = f["default"], t.scrollTop = l["default"], t.querySelectorAll = d["default"], t.closest = p["default"], t["default"] = {
            matches: r["default"],
            height: o["default"],
            width: i["default"],
            offset: u["default"],
            offsetParent: a["default"],
            position: c["default"],
            contains: s["default"],
            scrollParent: f["default"],
            scrollTop: l["default"],
            querySelectorAll: d["default"],
            closest: p["default"]
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function u(e, t) {
            var n = (0, o["default"])(e);
            return n ? n.innerWidth : t ? e.clientWidth : (0, r["default"])(e).width
        };
        var r = i(n(14)), o = i(n(7));

        function i(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t["default"] = function l(e, t) {
            var n, r = {top: 0, left: 0};
            "fixed" === (0, f["default"])(e, "position") ? n = e.getBoundingClientRect() : (t = t || (0, a["default"])(e), n = (0, u["default"])(e), "html" !== function o(e) {
                return e.nodeName && e.nodeName.toLowerCase()
            }(t) && (r = (0, u["default"])(t)), r.top += parseInt((0, f["default"])(t, "borderTopWidth"), 10) - (0, c["default"])(t) || 0, r.left += parseInt((0, f["default"])(t, "borderLeftWidth"), 10) - (0, s["default"])(t) || 0);
            return i({}, n, {
                top: n.top - r.top - (parseInt((0, f["default"])(e, "marginTop"), 10) || 0),
                left: n.left - r.left - (parseInt((0, f["default"])(e, "marginLeft"), 10) || 0)
            })
        };
        var u = r(n(14)), a = r(n(43)), c = r(n(44)), s = r(n(90)), f = r(n(13));

        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function o(e, t) {
            var n = (0, r["default"])(e);
            if (t === undefined) return n ? "pageXOffset" in n ? n.pageXOffset : n.document.documentElement.scrollLeft : e.scrollLeft;
            n ? n.scrollTo(t, "pageYOffset" in n ? n.pageYOffset : n.document.documentElement.scrollTop) : e.scrollLeft = t
        };
        var r = function i(e) {
            return e && e.__esModule ? e : {"default": e}
        }(n(7));
        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function c(e) {
            var t = (0, u["default"])(e, "position"), n = "absolute" === t, r = e.ownerDocument;
            if ("fixed" === t) return r || document;
            for (; (e = e.parentNode) && 9 !== e.nodeType;) {
                var o = n && "static" === (0, u["default"])(e, "position"),
                    i = (0, u["default"])(e, "overflow") + (0, u["default"])(e, "overflow-y") + (0, u["default"])(e, "overflow-x");
                if (!o && (/(auto|scroll)/.test(i) && (0, a["default"])(e) < e.scrollHeight)) return e
            }
            return document
        };
        var u = r(n(13)), a = r(n(42));

        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function i(e, t, n) {
            for (; e && (o(e) || !(0, r["default"])(e, t));) e = e === n || o(e) ? undefined : e.parentNode;
            return e
        };
        var r = function u(e) {
            return e && e.__esModule ? e : {"default": e}
        }(n(41));
        var o = function o(e) {
            return null != e && e.nodeType === e.DOCUMENT_NODE
        };
        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function o() {
            var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : (0, r["default"])();
            try {
                return e.activeElement
            } catch (t) {
            }
        };
        var r = function i(e) {
            return e && e.__esModule ? e : {"default": e}
        }(n(8));
        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function o(e) {
            var t = (0, r["default"])(e);
            return t && t.defaultView || t.parentWindow
        };
        var r = function i(e) {
            return e && e.__esModule ? e : {"default": e}
        }(n(8));
        e.exports = t["default"]
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function s(e) {
            return e && e.__esModule ? e : {"default": e}
        }(n(3));
        var o = "clearTimeout", i = function f(e) {
            var t = (new Date).getTime(), n = Math.max(0, 16 - (t - c)), r = setTimeout(e, n);
            return c = t, r
        }, u = void 0, a = function a(e, t) {
            return e + (e ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame"
        };
        r["default"] && ["", "webkit", "moz", "o", "ms"].some(function (e) {
            var t = a(e, "request");
            if (t in window) return o = a(e, "cancel"), i = function (e) {
                return window[t](e)
            }
        });
        var c = (new Date).getTime();
        (u = function u(e) {
            return i(e)
        }).cancel = function (e) {
            window[o] && "function" == typeof window[o] && window[o](e)
        }, t["default"] = u, e.exports = t["default"]
    }, function (e, i, t) {
        function n() {
            var e;
            try {
                e = i.storage.debug
            } catch (t) {
            }
            return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
        }

        (i = e.exports = t(97)).log = function r() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }, i.formatArgs = function u(e) {
            var t = this.useColors;
            if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + i.humanize(this.diff), !t) return;
            var n = "color: " + this.color;
            e.splice(1, 0, n, "color: inherit");
            var r = 0, o = 0;
            e[0].replace(/%[a-zA-Z%]/g, function (e) {
                "%%" !== e && (r++, "%c" === e && (o = r))
            }), e.splice(o, 0, n)
        }, i.save = function o(e) {
            try {
                null == e ? i.storage.removeItem("debug") : i.storage.debug = e
            } catch (t) {
            }
        }, i.load = n, i.useColors = function a() {
            if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }, i.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : function c() {
            try {
                return window.localStorage
            } catch (e) {
            }
        }(), i.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], i.formatters.j = function (e) {
            try {
                return JSON.stringify(e)
            } catch (t) {
                return "[UnexpectedJSONParseError]: " + t.message
            }
        }, i.enable(n())
    }, function (e, a, t) {
        var c;

        function n(e) {
            function r() {
                if (r.enabled) {
                    var o = r, e = +new Date, t = e - (c || e);
                    o.diff = t, o.prev = c, o.curr = e, c = e;
                    for (var i = new Array(arguments.length), n = 0; n < i.length; n++) i[n] = arguments[n];
                    i[0] = a.coerce(i[0]), "string" != typeof i[0] && i.unshift("%O");
                    var u = 0;
                    i[0] = i[0].replace(/%([a-zA-Z%])/g, function (e, t) {
                        if ("%%" === e) return e;
                        u++;
                        var n = a.formatters[t];
                        if ("function" == typeof n) {
                            var r = i[u];
                            e = n.call(o, r), i.splice(u, 1), u--
                        }
                        return e
                    }), a.formatArgs.call(o, i), (r.log || a.log || console.log.bind(console)).apply(o, i)
                }
            }

            return r.namespace = e, r.enabled = a.enabled(e), r.useColors = a.useColors(), r.color = function o(e) {
                var t, n = 0;
                for (t in e) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
                return a.colors[Math.abs(n) % a.colors.length]
            }(e), "function" == typeof a.init && a.init(r), r
        }

        (a = e.exports = n.debug = n["default"] = n).coerce = function r(e) {
            return e instanceof Error ? e.stack || e.message : e
        }, a.disable = function o() {
            a.enable("")
        }, a.enable = function i(e) {
            a.save(e), a.names = [], a.skips = [];
            for (var t = ("string" == typeof e ? e : "").split(/[\s,]+/), n = t.length, r = 0; r < n; r++) t[r] && ("-" === (e = t[r].replace(/\*/g, ".*?"))[0] ? a.skips.push(new RegExp("^" + e.substr(1) + "$")) : a.names.push(new RegExp("^" + e + "$")))
        }, a.enabled = function u(e) {
            var t, n;
            for (t = 0, n = a.skips.length; t < n; t++) if (a.skips[t].test(e)) return !1;
            for (t = 0, n = a.names.length; t < n; t++) if (a.names[t].test(e)) return !0;
            return !1
        }, a.humanize = t(98), a.names = [], a.skips = [], a.formatters = {}
    }, function (e, t) {
        var u = 36e5, a = 864e5;

        function c(e, t, n) {
            if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
        }

        e.exports = function (e, t) {
            t = t || {};
            var n = typeof e;
            if ("string" === n && 0 < e.length) return function r(e) {
                if (100 < (e = String(e)).length) return;
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (!t) return;
                var n = parseFloat(t[1]);
                switch ((t[2] || "ms").toLowerCase()) {
                    case"years":
                    case"year":
                    case"yrs":
                    case"yr":
                    case"y":
                        return 315576e5 * n;
                    case"days":
                    case"day":
                    case"d":
                        return n * a;
                    case"hours":
                    case"hour":
                    case"hrs":
                    case"hr":
                    case"h":
                        return n * u;
                    case"minutes":
                    case"minute":
                    case"mins":
                    case"min":
                    case"m":
                        return 6e4 * n;
                    case"seconds":
                    case"second":
                    case"secs":
                    case"sec":
                    case"s":
                        return 1e3 * n;
                    case"milliseconds":
                    case"millisecond":
                    case"msecs":
                    case"msec":
                    case"ms":
                        return n;
                    default:
                        return undefined
                }
            }(e);
            if ("number" === n && !1 === isNaN(e)) return t["long"] ? function o(e) {
                return c(e, a, "day") || c(e, u, "hour") || c(e, 6e4, "minute") || c(e, 1e3, "second") || e + " ms"
            }(e) : function i(e) {
                if (a <= e) return Math.round(e / a) + "d";
                if (u <= e) return Math.round(e / u) + "h";
                if (6e4 <= e) return Math.round(e / 6e4) + "m";
                if (1e3 <= e) return Math.round(e / 1e3) + "s";
                return e + "ms"
            }(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    }, function (e, t, n) {
        var r = {
            "./error-icon.svg": 100,
            "./loading-icon.svg": 101,
            "./success-icon.svg": 102,
            "./warning-icon.svg": 45
        };

        function o(e) {
            var t = i(e);
            return n(t)
        }

        function i(e) {
            var t = r[e];
            if (t + 1) return t;
            var n = new Error("Cannot find module '" + e + "'");
            throw n.code = "MODULE_NOT_FOUND", n
        }

        o.keys = function () {
            return Object.keys(r)
        }, o.resolve = i, (e.exports = o).id = 99
    }, function (e, t) {
        e.exports = '<?xml version="1.0" encoding="UTF-8"?>\n<svg viewBox="64 64 896 896" class="" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">\n    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>\n</svg>\n'
    }, function (e, t) {
        e.exports = '<?xml version="1.0" encoding="UTF-8"?>\n<svg width="1em" height="1em" viewBox="0 0 50 50" fill="currentColor">\n    <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">\n        <animateTransform attributeType="xml"\n            attributeName="transform"\n            type="rotate"\n            from="0 25 25"\n            to="360 25 25"\n            dur="0.6s"\n            repeatCount="indefinite"/>\n    </path>\n</svg>\n'
    }, function (e, t) {
        e.exports = '<?xml version="1.0" encoding="UTF-8"?>\n<svg viewBox="64 64 896 896" class="" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">\n    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>\n</svg>\n'
    }, function (e, t, i) {
        "use strict";
        i.r(t);
        i(46), i(66);
        var d = i(0), n = i(21), o = i.n(n), r = i(22), u = i.n(r), p = "loading", v = "complete",
            h = "imageCaptchaCode", m = "imageCaptcha";

        function y(e) {
            var t = document.createElement("i");
            return t.setAttribute("class", "icon " + e), t.innerHTML = i(99)("./" + e + "-icon.svg"), t
        }

        function g(t) {
            d.query.querySelectorAll(t, ".icon").forEach(function (e) {
                return t.removeChild(e)
            })
        }

        var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        i.d(t, "Captcha", function () {
            return f
        });
        var c = "Success", s = {
            image: function (o) {
                var u = null, n = 4, i = o.render || function t() {
                    var e = document.createElement("div");
                    return e.setAttribute("class", "captcha-image"), e.innerHTML = '<style>.captcha-image .textbox{color: rgba(0, 0, 0, 0.65);}.captcha-image .textbox div{margin-right: 8px;}.captcha-image .field, .captcha-image .img{display: inline-block;}.captcha-image .field{height: 32px;}.captcha-image .img{cursor: pointer;}.captcha-image .img .code{position: relative; top:15px; max-width: 150px; max-height: 35px;}.captcha-image .field input{background-color: #fff;background-image: none;border: 1px solid #d9d9d9;border-radius: 4px; height: 100%; width: 140px; font-size: 14px; line-height: 1.5; padding: 2px 30px 2px 11px;}.captcha-image .field .input-suffix{margin-left: -25px;}.captcha-image i.icon{display: inline-block;font-style: normal;vertical-align: -0.125em;text-align: center;text-transform: none;line-height: 1;text-rendering: optimizeLegibility;-webkit-font-smoothing: antialiased; position: relative;}.captcha-image i.icon.loading{color: #3071F2;}.captcha-image i.icon.success{color: #52c41a;}.captcha-image i.icon.error{color: #f5222d;}</style><div class="textbox"><div class="field"><input class="input" placeholder="请输入验证码" type="text" name="' + h + '"><span class="input-suffix"></span></div><div class="img"><img class="code" name="' + m + '" alt="看不清？点击更换"></div></div>', e
                }, r = o.onValidate || function f(e, t) {
                    if (u) {
                        var n = d.query.querySelectorAll(u, ".input-suffix")[0];
                        n && (g(n), e === p ? n.appendChild(function r() {
                            return y("loading")
                        }()) : e === v && (t ? n.appendChild(function o() {
                            return y("success")
                        }()) : n.appendChild(function i() {
                            return y("error")
                        }())))
                    }
                }, e = o.onRefresh || function l() {
                    if (u) {
                        var e = d.query.querySelectorAll(u, ".input-suffix")[0];
                        e && g(e)
                    }
                };

                function a() {
                    e(p), o.load().then(function () {
                        return e(v)
                    })
                }

                var c = null;

                function s(e) {
                    var t = e.target.value;
                    t && t.length === n && (clearTimeout(c), c = setTimeout(function () {
                        r(p), o.validate(e.target.value).then(function (e) {
                            r(v, e)
                        })
                    }, 100))
                }

                return {
                    init: function (e) {
                        u || function r() {
                            if ("string" == typeof (u = i())) {
                                var e = document.createElement("div");
                                e.innerHTML = u, u = e
                            } else if (!u.nodeType) throw new Error("Render func must be return a HTMLString or a dom object.");
                            var t = d.query.querySelectorAll(u, "img[name=" + m + "]")[0];
                            if (!t) throw new Error("Cannot find img[name=" + m + "] in captcha dom");
                            d.events.on(t, "click", a);
                            var n = d.query.querySelectorAll(u, "input[name=" + h + "]")[0];
                            if (!n) throw new Error("Cannot find input[name=" + h + "] in captcha dom");
                            d.events.on(n, "input", s), o.renderTo.appendChild(u)
                        }(), n = parseInt(e.puzzle.metaData.codeLen, 10);
                        var t = d.query.querySelectorAll(u, "input[name=" + h + "]")[0];
                        t.value = "", t.setAttribute("maxlength", n), d.query.querySelectorAll(u, "img[name=" + m + "]")[0].setAttribute("src", e.puzzle.resource)
                    }, destory: function () {
                        u && (function e() {
                            o.renderTo.removeChild(u)
                        }(), u = null)
                    }
                }
            }, tencent: function (r) {
                var o = null;

                function i(e) {
                    0 == e.ret && r.validate(e.ticket)
                }

                return {
                    init: function (e) {
                        o ? capRefresh() : function n(e) {
                            (o = document.createElement("div")).innerHTML = '<div name="TCaptcha"></div>', r.renderTo.appendChild(o);
                            var t = document.createElement("script");
                            t.setAttribute("src", e.puzzle.resource), t.onload = function () {
                                var e = {callback: i};
                                e.themeColor = r.themeColor || "aaabbb", e.showHeader = r.showHeader || !1, e.type = r.type || "point", e.keepOpen = r.keepOpen || !1, capInit(d.query.querySelectorAll(o, "div[name=TCaptcha]")[0], e)
                            }, document.head.appendChild(t)
                        }(e)
                    }, destory: function () {
                        o && (capDestroy(), function e() {
                            r.renderTo.removeChild(o)
                        }(), o = null)
                    }
                }
            }, geetest: function (u) {
                var a = null, c = null, s = null;
                return {
                    init: function (e) {
                        if (!a) return function n(t) {
                            return new Promise(function (o, i) {
                                (a = document.createElement("div")).innerHTML = '<div name="GeetTestCaptcha"></div>', u.renderTo.appendChild(a);
                                var e = document.createElement("script");
                                e.setAttribute("src", (u.https ? "https://" : "//") + "static.geetest.com/static/tools/gt.js"), e.onload = function () {
                                    initGeetest({
                                        gt: t.puzzle.metaData.gt,
                                        challenge: t.puzzle.resource,
                                        product: u.product || "popup",
                                        width: u.width || "300px",
                                        area: u.area || "",
                                        next_width: u.next_width || "90%",
                                        bg_color: u.bg_color || "black",
                                        https: !!u.https
                                    }, function (e) {
                                        c = e;
                                        var t = u.onReady || function () {
                                            return null
                                        }, n = u.onClose || function () {
                                            return null
                                        };
                                        if (c.onReady(function () {
                                            return t()
                                        }), c.onClose(function () {
                                            return n()
                                        }), c.onError(function (e) {
                                            return u.onError(e)
                                        }), c.onSuccess(function () {
                                            var e = c.getValidate();
                                            u.validate(JSON.stringify(e))
                                        }), "bind" === u.product) {
                                            var r = d.query.querySelectorAll(document, u.bindTo)[0];
                                            if (!r) return i(new Error("Cannot find selector(" + u.bindTo + ") in dom."));
                                            s = d.events.listen(r, "click", function () {
                                                return c.verify()
                                            })
                                        } else c.appendTo(a);
                                        o()
                                    })
                                }, document.head.appendChild(e)
                            })
                        }(e);
                        c.reset()
                    }, destory: function () {
                        a && (function e() {
                            u.renderTo.removeChild(a), s && s()
                        }(), a = null)
                    }
                }
            }
        }, f = function () {
            function e(e) {
                var t = this;
                if (void 0 === e && (e = {}), this.options = e, this.resourceUrl = e.endpoint + "/captcha/resource", this.validateUrl = e.endpoint + "/captcha/pre-validate", this.scene = e.scene, this.timeout = e.timeout || 1e4, this.onTokenChange = e.onTokenChange || function () {
                    return null
                }, this.onValidateComplete = e.onValidateComplete || function () {
                    return null
                }, this.onError = e.onError || function () {
                    return null
                }, !e.renderTo) throw new Error("No render target provided.");
                if ("string" == typeof e.renderTo) {
                    var n = d.query.querySelectorAll(document, e.renderTo);
                    if (!n || 1 !== n.length) throw new Error("Render target must one element.");
                    this.renderTo = n[0]
                } else {
                    if (!e.renderTo.nodeType) throw new Error("Render target must be a selector or a dom object.");
                    this.renderTo = e.renderTo
                }
                this.renderTo.innerHTML = '<div class="captcha"><div class="box"></div><div class="msg"></div></div>', this.init = function () {
                    t.currentProvider && t.currentProvider.destory(), t.setCaptchaToken(t.randomstring()), t.load()
                }, this.refresh = function () {
                    t.setCaptchaToken(t.randomstring()), t.load()
                }, this.destory = function () {
                    console.warn("DEPRECATED, This function has a typo, use destroy instead"), t.currentProvider && t.currentProvider.destory()
                }, this.destory = function () {
                    t.currentProvider && t.currentProvider.destory()
                }
            }

            var t = e.prototype;
            return t.randomstring = function () {
                return e = 32, Array.apply(null, Array(e)).map(function () {
                    return a.charAt(Math.floor(Math.random() * a.length))
                }).join("");
                var e
            }, t.requestResource = function () {
                var e = this;
                return new Promise(function (n, r) {
                    return u()("" + e.resourceUrl + o.a.stringify({
                        sceneId: e.scene,
                        token: e.token
                    }, "?"), {timeout: e.timeout}, function (e, t) {
                        return e ? r(e) : t.status !== c ? "Token Expired" === t.status ? n() : r(t) : void n(t.data)
                    })
                })
            }, t.requestValidate = function (e) {
                var t = this;
                return new Promise(function (n, r) {
                    return u()("" + t.validateUrl + o.a.stringify({
                        sceneId: t.scene,
                        token: t.token,
                        challenger: e
                    }, "?"), {timeout: t.timeout}, function (e, t) {
                        return e ? r(e) : t.status !== c ? r(t) : void n(t.data)
                    })
                })
            }, t.setProvider = function (e) {
                var t = this;
                if (this.currentProviderType !== e) {
                    if (!s[e] || "function" != typeof s[e]) throw new Error("当前不支持" + e + "类型的验证码，请升级验证码SDK。");
                    var n = this.options[e], r = Object.assign({
                        renderTo: d.query.querySelectorAll(this.renderTo, ".box")[0],
                        load: function () {
                            return t.load()
                        },
                        validate: function (e) {
                            return t.validate(e)
                        },
                        onError: function (e) {
                            return t.onError(e)
                        }
                    }, n || {});
                    this.currentProviderType = e, this.currentProvider = s[e](r)
                }
            }, t.setCaptchaToken = function (e) {
                this.token = e, this.onTokenChange && "function" == typeof this.onTokenChange && this.onTokenChange(e)
            }, t.hideError = function () {
                var t = d.query.querySelectorAll(this.renderTo, ".msg")[0];
                d.query.querySelectorAll(t, ".error").forEach(function (e) {
                    return t.removeChild(e)
                }), Object(d.style)(t, "display", "none"), Object(d.style)(d.query.querySelectorAll(this.renderTo, ".box")[0], "display", "")
            }, t.showError = function (e) {
                var t = this;
                console.error(e), this.onError(e), Object(d.style)(d.query.querySelectorAll(this.renderTo, ".box")[0], "display", "none");
                var n = document.createElement("div");
                n.setAttribute("class", "error"), n.innerHTML = '<style>.captcha .msg .error .card{position: relative; border: 1px solid #ffe58f; background-color: #fffbe6; padding: 8px 15px 8px 37px;}.captcha .msg .error .card i.icon{color: #faad14; position: absolute; top: 10px; left: 15px;}.captcha .msg .error .card .message{font-size: 14px; color: rgba(0, 0, 0, 0.65);}.captcha .msg .error .card .message .refresh{color: #3071F2; cursor: pointer;}</style><div class="card"><i class="icon">' + i(45) + '</i><span class="message">哎呀，出错了，点击 <span class="refresh">刷新</span> 再来一次</span></div>';
                var r = d.query.querySelectorAll(n, ".card .message .refresh")[0];
                d.events.on(r, "click", function () {
                    return t.init()
                });
                var o = d.query.querySelectorAll(this.renderTo, ".msg")[0];
                Object(d.style)(o, "display", ""), o.appendChild(n)
            }, t.load = function () {
                var t = this;
                return this.hideError(), this.requestResource().then(function (e) {
                    if (e) return t.setProvider(e.type), t.currentProvider.init(e);
                    t.init()
                })["catch"](function (e) {
                    throw t.showError(e), e
                })["catch"](function (e) {
                    return t.onError(e)
                })
            }, t.validate = function (e) {
                var t = this;
                return this.hideError(), this.requestValidate(e).then(function (e) {
                    return t.onValidateComplete(e), e
                })["catch"](function (e) {
                    throw t.showError(e), e
                })["catch"](function (e) {
                    return t.onError(e)
                })
            }, e
        }()
    }])
});