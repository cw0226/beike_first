function b() {
    h = $(window).height(), t = $(document).scrollTop(), $("#back-top").attr("daty-id") ? t > h ? ($("#gotop").show(), $(".fix-right .tips,.fix-right .has-ask").show()) : ($("#gotop").hide(), $(".fix-right .tips,.fix-right .has-ask").hide()) : ($(".fix-right .tips,.fix-right .has-ask").show(), t > h ? $("#gotop").show() : $("#gotop").hide())
}

function ent() {
    $(".ewm-close").click(function (e) {
        $(".sh-erweima").hide().addClass("hide"), $(this).hide();
        var t = $(".sh-erweima").attr("class");
        localStorage.setItem(void 0, JSON.stringify(t))
    });
    var e = localStorage.getItem(void 0);
    e ? e.indexOf("sh-erweima hide") >= 0 && $(".sh-erweima,.ewm-close").hide() : $(".sh-erweima,.ewm-close").show()
}

!function (e) {
    e.fn.scrollLoading = function (t) {
        var n = {attr: "data-url", container: e(window), callback: e.noop}, o = e.extend({}, n, t || {});
        o.cache = [], e(this).each(function () {
            var t = this.nodeName.toLowerCase(), n = e(this).attr(o.attr), a = {obj: e(this), tag: t, url: n};
            o.cache.push(a)
        });
        var a = function (t) {
            e.isFunction(o.callback) && o.callback.call(t.get(0))
        }, r = function () {
            var t, n = o.container.height();
            t = e(window).get(0) === window ? e(window).scrollTop() : o.container.offset().top, e.each(o.cache, function (e, o) {
                var r = o.obj, i = o.tag, c = o.url;
                if (r) {
                    var l = r.offset().top - t, s = l + r.height();
                    (l >= 0 && l < n || s > 0 && s <= n) && (c ? "img" === i ? a(r.attr("src", c)) : r.load(c, {}, function () {
                        a(r)
                    }) : a(r), o.obj = null)
                }
            })
        };
        r(), o.container.bind("scroll", r)
    }
}(jQuery), function (e, t, n, o) {
    var a = e(t);
    e.fn.lazyload = function (o) {
        function r() {
            var t = 0;
            c.each(function () {
                var n = e(this);
                if (!l.skip_invisible || n.is(":visible")) if (e.abovethetop(this, l) || e.leftofbegin(this, l)) ; else if (e.belowthefold(this, l) || e.rightoffold(this, l)) {
                    if (++t > l.failure_limit) return !1
                } else n.trigger("appear"), t = 0
            })
        }

        var i, c = this, l = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: t,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return o && (void 0 !== o.failurelimit && (o.failure_limit = o.failurelimit, delete o.failurelimit), void 0 !== o.effectspeed && (o.effect_speed = o.effectspeed, delete o.effectspeed), e.extend(l, o)), i = void 0 === l.container || l.container === t ? a : e(l.container), 0 === l.event.indexOf("scroll") && i.bind(l.event, function () {
            return r()
        }), this.each(function () {
            var t = this, n = e(t);
            t.loaded = !1, void 0 !== n.attr("src") && !1 !== n.attr("src") || n.is("img") && n.attr("src", l.placeholder), n.one("appear", function () {
                if (!this.loaded) {
                    if (l.appear) {
                        var o = c.length;
                        l.appear.call(t, o, l)
                    }
                    e("<img />").bind("load", function () {
                        var o = n.attr("data-" + l.data_attribute);
                        n.hide(), n.is("img") ? n.attr("src", o) : n.css("background-image", "url('" + o + "')"), n[l.effect](l.effect_speed), t.loaded = !0;
                        var a = e.grep(c, function (e) {
                            return !e.loaded
                        });
                        if (c = e(a), l.load) {
                            var r = c.length;
                            l.load.call(t, r, l)
                        }
                    }).attr("src", n.attr("data-" + l.data_attribute))
                }
            }), 0 !== l.event.indexOf("scroll") && n.bind(l.event, function () {
                t.loaded || n.trigger("appear")
            })
        }), a.bind("resize", function () {
            r()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && a.bind("pageshow", function (t) {
            t.originalEvent && t.originalEvent.persisted && c.each(function () {
                e(this).trigger("appear")
            })
        }), e(n).ready(function () {
            r()
        }), this
    }, e.belowthefold = function (n, o) {
        return (void 0 === o.container || o.container === t ? (t.innerHeight ? t.innerHeight : a.height()) + a.scrollTop() : e(o.container).offset().top + e(o.container).height()) <= e(n).offset().top - o.threshold
    }, e.rightoffold = function (n, o) {
        return (void 0 === o.container || o.container === t ? a.width() + a.scrollLeft() : e(o.container).offset().left + e(o.container).width()) <= e(n).offset().left - o.threshold
    }, e.abovethetop = function (n, o) {
        return (void 0 === o.container || o.container === t ? a.scrollTop() : e(o.container).offset().top) >= e(n).offset().top + o.threshold + e(n).height()
    }, e.leftofbegin = function (n, o) {
        return (void 0 === o.container || o.container === t ? a.scrollLeft() : e(o.container).offset().left) >= e(n).offset().left + o.threshold + e(n).width()
    }, e.inviewport = function (t, n) {
        return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
    }, e.extend(e.expr[":"], {
        "below-the-fold": function (t) {
            return e.belowthefold(t, {threshold: 0})
        }, "above-the-top": function (t) {
            return !e.belowthefold(t, {threshold: 0})
        }, "right-of-screen": function (t) {
            return e.rightoffold(t, {threshold: 0})
        }, "left-of-screen": function (t) {
            return !e.rightoffold(t, {threshold: 0})
        }, "in-viewport": function (t) {
            return e.inviewport(t, {threshold: 0})
        }, "above-the-fold": function (t) {
            return !e.belowthefold(t, {threshold: 0})
        }, "right-of-fold": function (t) {
            return e.rightoffold(t, {threshold: 0})
        }, "left-of-fold": function (t) {
            return !e.rightoffold(t, {threshold: 0})
        }
    })
}(jQuery, window, document), define("common/jquery.scrollLoading", function () {
}), function (e) {
    e.fn.fixtop = function (t) {
        var n = e.extend({marginTop: 0, zIndex: 1e3, fixedWidth: "100%"}, t), o = this.offset().top - n.marginTop,
            a = this, r = (a.height(), n.marginTop, e("<div/>").css({
                display: a.css("display"),
                width: a.outerWidth(!0),
                height: a.outerHeight(!0),
                float: a.css("float")
            }));
        return e(window).scroll(function (t) {
            var i = o;
            e(this).scrollTop() > i && "fixed" != a.css("position") && (a.after(r), a.css({
                position: "fixed",
                top: n.marginTop + "px",
                "z-index": n.zIndex,
                width: n.fixedWidth
            }), void 0 !== n.fixed && n.fixed(a)), e(this).scrollTop() < i && "fixed" == a.css("position") && (r.remove(), a.css({
                position: "relative",
                top: "0px",
                "z-index": n.zIndex
            }), void 0 !== n.unfixed && n.unfixed(a))
        }), this
    }
}(jQuery), define("common/fixtop", function () {
}), $.stringFormat = function (e, t) {
    e = String(e);
    var n = Array.prototype.slice.call(arguments, 1), o = Object.prototype.toString;
    return n.length ? (n = 1 == n.length && null !== t && /\[object Array\]|\[object Object\]/.test(o.call(t)) ? t : n, e.replace(/#\{(.+?)\}/g, function (e, t) {
        var a = n[t];
        return "[object Function]" == o.call(a) && (a = a(t)), void 0 === a ? "" : a
    })) : e
}, $.trimN = function (e) {
    return e.replace(/\n{2,}/gm, "\n")
}, $.fixedOldComment = function (e) {
    return e ? $.decodeHTML($.trimN(e.replace(/<[^>]+>/g, "\n"))) : e
}, $.replaceTpl = function (e, t, n) {
    var o = String(e), a = n || /#\{([^}]*)\}/gm, r = String.trim || function (e) {
        return e.replace(/^\s+|\s+$/g, "")
    };
    return o.replace(a, function (e, n) {
        return t[r(n)]
    })
}, $.strHTML = function (e, t) {
    e = String(e);
    var n = Array.prototype.slice.call(arguments, 1), o = Object.prototype.toString;
    return n.length ? (n = 1 == n.length && null !== t && /\[object Array\]|\[object Object\]/.test(o.call(t)) ? t : n, e.replace(/#\{(.+?)\}/g, function (e, t) {
        var a = n[t];
        return "[object Function]" == o.call(a) && (a = a(t)), void 0 === a ? "" : $.encodeHTML(a)
    })) : e
}, $.showIframeImg = function (e, t) {
    var n = $(e), o = n.height(), a = n.width(),
        r = $.stringFormat("<style>body{margin:0;padding:0}img{width:#{0}px;height:#{1}px;}</style>", a, o),
        i = "frameimg" + Math.round(1e9 * Math.random());
    window.betafang[i] = "<head>" + r + '</head><body><img id="img-' + i + "\" src='" + t + "' /></body>", e.append('<iframe style="display:none" id="' + i + '" src="javascript:parent.betafang[\'' + i + '\'];" frameBorder="0" scrolling="no" width="' + a + '" height="' + o + '"></iframe>')
}, $.loadScript = function (e) {
    function t() {
        if (a) return !1;
        a = !0, r.onload = null, r.onerror = null, o.complete && o.complete(), c.resolve(), i.removeChild(r)
    }

    function n() {
        if (a) return !1;
        a = !0, o.fail && o.fail(), i.removeChild(r), c.reject()
    }

    var o = {url: "", charset: "utf-8", complete: $.noop, fail: $.noop};
    if ($.extend(o, e), !o.url) throw"url is requireed";
    var a = !1, r = document.createElement("script"), i = document.getElementsByTagName("head")[0], c = $.Deferred();
    return r.onload = t, r.onerror = n, r.onreadystatechange = function (e) {
        "complete" == r.readyState && t()
    }, r.type = "text/javascript", r.src = o.url, r.charset = o.charset, i.appendChild(r), c
}, $.TextAreaUtil = function (e) {
    var t = document.selection;
    return {
        getCursorPosition: function (e) {
            var n = 0;
            if (t) {
                e.focus();
                try {
                    var o = null;
                    o = t.createRange();
                    var a = o.duplicate();
                    a.moveToElementText(e), a.setEndPoint("EndToEnd", o), e.selectionStartIE = a.text.length - o.text.length, e.selectionEndIE = e.selectionEndIE + o.text.length, n = e.selectionStartIE
                } catch (t) {
                    n = e.value.length
                }
            } else (e.selectionStart || "0" == e.selectionStart) && (n = e.selectionStart);
            return n
        }, getSelectedText: function (t) {
            return e.getSelection ? function (e) {
                return void 0 != e.selectionStart && void 0 != e.selectionEnd ? e.value.slice(e.selectionStart, e.selectionEnd) : ""
            }(t) : document.selection.createRange().text
        }
    }
}(window), $.browser = $.browser || {}, $.browser.ie = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? document.documentMode || +RegExp.$1 : void 0;
var betafang = window.betafang || {};
$(function () {
    /msie (\d+\.\d+)/i.test(navigator.userAgent) && $("body").addClass("ie", "ie" + (document.documentMode || +RegExp.$1)), $(".lj-lazy").lazyload(), $(".lazyload").scrollLoading(), $("#keyword-box,#keyword-box-01").closest("form").on("submit", function () {
        var e = $(this), t = e.attr("data-action") || e.attr("action"), n = e.find(".txt"), o = $.trim(n.val());
        if (o == n.attr("placeholder") && (o = ""), t += encodeURIComponent(o), "_blank" != e.attr("target")) return window.location.href = t, !1;
        e.attr("action", t)
    })
}), define("common/base", function () {
});
var ajax = function () {
    var e = {}, t = function () {
    };
    return e.get = function (e, n, o, a) {
        if (o = o || t, a = a || t, !e) return !1;
        $.getJSON(e, n, function (e) {
            0 === e.status ? o(e.data) : a(e)
        }, function (e) {
            a({status: 500, statusInfo: "服务请求失败"})
        })
    }, e.post = function (e, n, o, a) {
        if (o = o || t, a = a || t, !e) return !1;
        $.ajax({
            type: "POST", url: e, data: n, success: function (e) {
                0 === e.status ? o(e.data) : a(e)
            }, failure: function (e) {
                a({status: 500, statusInfo: "服务请求失败"})
            }, dataType: "json"
        })
    }, e
}();
define("common/ajax", function () {
}), function () {
    function e(e, t) {
        var n = document.getElementsByTagName("head")[0], o = document.createElement("script");
        o.type = "text/javascript", o.src = e, t = t || function () {
        }, o.onload = o.onreadystatechange = function () {
            this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (t(), o.onload = o.onreadystatechange = null, n && o.parentNode && n.removeChild(o))
        }, n.insertBefore(o, n.firstChild)
    }

    function t(t, n, a) {
        var r = "cbk_" + Math.round(1e4 * Math.random()),
            i = o + "?from=" + n + "&to=4&x=" + t.lng + "&y=" + t.lat + "&callback=BMap.Convertor." + r;
        a = a || function () {
        }, e(i), BMap.Convertor[r] = function (e) {
            delete BMap.Convertor[r];
            var t = new BMap.Point(e.x, e.y);
            a(t)
        }
    }

    function n(t, n, a) {
        var r = o + "?from=" + n + "&to=4&mode=1", i = [], c = [];
        a = a || function () {
        };
        var l = function () {
            var t = "cbk_" + Math.round(1e4 * Math.random());
            e(r + "&x=" + i.join(",") + "&y=" + c.join(",") + "&callback=BMap.Convertor." + t), i = [], c = [], BMap.Convertor[t] = function (e) {
                delete BMap.Convertor[t];
                var n = null, o = [];
                for (var r in e) if (n = e[r], 0 === n.error) {
                    var i = new BMap.Point(n.x, n.y);
                    o[r] = i
                } else o[r] = null;
                a(o)
            }
        };
        for (var s in t) s % 20 == 0 && 0 !== s && l(), i.push(t[s].lng), c.push(t[s].lat), s == t.length - 1 && l()
    }

    var o = "//api.map.baidu.com/ag/coord/convert";
    window.BMap = window.BMap || {}, BMap.Convertor = $({}), BMap.Convertor.translate = t, BMap.Convertor.translateMore = n
}();
var LJFixed = function (e, t) {
    function n(t) {
        if (!a.isSupportPlaceHolder) {
            var n = e(t), o = n.attr("placeholder");
            "" === n.val() && n.val(o).addClass("placeholder"), n.focus(function () {
                n.val() === n.attr("placeholder") && n.val("").removeClass("placeholder")
            }).blur(function () {
                "" === n.val() && n.val(n.attr("placeholder")).addClass("placeholder")
            }).closest("form").submit(function () {
                n.val() === n.attr("placeholder") && n.val("")
            })
        }
    }

    function o() {
        e("input[placeholder],textarea[placeholder]").each(function () {
            "password" != e(this).attr("type") && n(this)
        })
    }

    var a = {isSupportPlaceHolder: "placeholder" in t.createElement("input")};
    e(function () {
        o()
    }), e.fixPlaceholder = n;
    var r = {};
    return r.fixedPlaceHolder = n, r
}($, document);
define("common/fixed", function () {
});
var Pagination = function (require) {
    function e(e, t, n) {
        var o = [];
        if (n = n || 6, t = t || 1, e <= n) for (var a = 0; a < e; a++) o.push(a + 1); else {
            o.push(1), t > 4 && o.push("");
            for (var r = Math.max(t - 2, 2), i = Math.min(t + 2, e - 1), a = r; a <= i; a++) o.push(a);
            t < e - 3 && o.push(""), o.push(e)
        }
        return o
    }

    function t(e, t, n, o) {
        function a(e) {
            if (o) {
                var t = o.replace(/\{page\}/g, e);
                return 1 === e && t.search("pg1") > -1 && (t = t.search("pg1/") > -1 ? t.replace(/pg1\//, "") : t.replace(/pg1/, "")), t
            }
            return "javascript:;"
        }

        var r = [];
        if (n = n || 1, e && e.length) {
            n > 1 && t > 6 && r.push('<a href="' + a(n - 1) + '" data-page="' + (n - 1) + '" >上一页</a>');
            for (var i = e.length, c = 0; c < i; c++) r.push(e[c] ? "<a " + (e[c] == n ? 'class="on"' : "") + ' href="' + a(e[c]) + '" data-page="' + e[c] + '">' + e[c] + "</a>" : "<span>...</span>");
            n < t && t > 6 && r.push('<a href="' + a(n + 1) + '" data-page="' + (n + 1) + '">下一页</a>')
        }
        return r.join("")
    }

    function n(n) {
        function o() {
            c.template = c.dom.attr("page-url");
            var e = c.dom.attr("target-wrapper");
            e && (c.targetWrapper = $(e));
            var t = c.dom.attr("page-data");
            t ? (t = $.parseJSON(t), $.extend(c, t)) : c.targetWrapper && (c.curPage = 1, c.totalPage = c.targetWrapper.children().length)
        }

        function a() {
            if (!(c.totalPage <= 1)) {
                var n = e(c.totalPage, c.curPage);
                n.length || c.dom.hide();
                var o = t(n, c.totalPage, c.curPage, c.template);
                if (c.dom.html(o), c.targetWrapper) {
                    var a = c.targetWrapper.children();
                    a.hide(), a.eq(c.curPage - 1).show(), c.targetWrapper.find(".lj-lazy").lazyload()
                }
            }
        }

        function r() {
            c.targetWrapper && l.on("showPage", function (e, t) {
                c.curPage = t, a()
            })
        }

        function i() {
            c.dom.delegate("[data-page]", "click", function () {
                var e = $(this).attr("data-page");
                l.trigger("showPage", parseInt(e))
            })
        }

        if (n) {
            var c = {dom: $(n), template: "", targetWrapper: "", totalPage: 0, curPage: 0}, l = $({});
            return function () {
                o(), i(), r(), a()
            }(), l
        }
    }

    return $(function () {
        $("[comp-module='page']").each(function () {
            n($(this))
        })
    }), n
}();
define("common/pagination", function () {
}), $(document).ready(function (e) {
    b(), ent(), $("body").on("click", "#gotop", function () {
        $("html , body").animate({scrollTop: 0}, 1e3)
    })
}), $(window).scroll(function (e) {
    b()
}), $("body").on("click", "#back-top .mycart .popup", function (e) {
    e.stopPropagation()
}), define("common/backtop", function () {
}), define("common/scrollCaller", function (require) {
    function e() {
        for (var e = i.scrollTop(), t = c.length - 1; t >= 0; t--) try {
            c[t].call(i, e)
        } catch (e) {
            console.error && console.error(e.stack)
        }
    }

    function t() {
        r && clearTimeout(r), r = setTimeout(function () {
            e()
        }, 30)
    }

    function n(e) {
        e ? i.scroll(t) : i.unbind("scroll", t)
    }

    function o(e) {
        c.length || n(!0), c.push(e)
    }

    function a(e) {
        var t = $.inArray(e, c);
        t >= 0 && c.splice(t, 1), c.length || n(!1)
    }

    var r = !1, i = $(window), c = [];
    return function (e) {
        if (!e) throw"fun is required";
        return o(e), {
            destroy: function () {
                a(e)
            }
        }
    }
}), define("common/env", function (require) {
    function e(e) {
        var t = "";
        return e.scheme && (t += e.scheme + "://"), e.host && (t += e.host), e.port && (t += ":" + e.port), e.path && (t += "/" + e.path), e.query && (t += "?" + e.query), e.hash && (t += "#" + e.hash), t
    }

    var t = {host: "", scheme: "", port: "", env: "online"}, n = {};
    return n.getEnv = function () {
        return t.env
    }, n.fixedHost = function (e) {
        if (!e) return t.host;
        var n = e.substring(0, e.indexOf("."));
        switch (t.env) {
            case"dev":
            case"test":
                if (0 !== n.indexOf(t.env)) return t.env + e
        }
        return e
    }, n.fixedUrl = function (o, a) {
        a = a || !1, o.indexOf("http") < 0 && (o = location.protocol + o);
        var r = $.parseURL(o);
        return r.host ? (!a && (r.host = n.fixedHost(r.host)), r.port = t.port, r.scheme || (r.scheme = t.scheme)) : (r.host = t.host, r.scheme = t.scheme, r.port = t.port), e(r)
    }, n.isSameDomain = function (e) {
        return $.parseURL(e).host == t.host
    }, function () {
        var e = $.parseURL(location.href);
        t.host = e.host, t.scheme = e.scheme, t.port = e.port;
        var n = t.host;
        n.indexOf("dev") > -1 ? t.env = "dev" : n.indexOf("test") > -1 && (t.env = "test")
    }(), n
}), define("common/pushMessage", function (require) {
    return function (e) {
        var t = $.env.fixedUrl(ljConf.domainConfig.apiroot + "ajax/user/favorite/getnotifynum/"), n = {
            house_showing: {
                url: ljConf.domainConfig.userroot + "site/seeSchedule",
                text: '你的看房日程有<span class="unreadNumber">#{unread}</span>条更新'
            },
            community_new_house_source: {
                url: ljConf.domainConfig.userroot + "?filter=3",
                text: '你关注的小区有<span class="unreadNumber">#{unread}</span>条新上'
            },
            deal: {
                url: ljConf.domainConfig.userroot + "?filter=1",
                text: '你关注的房源有<span class="unreadNumber">#{unread}</span>条成交'
            },
            price_changed: {
                url: ljConf.domainConfig.userroot + "?filter=2",
                text: '你关注的房源有<span class="unreadNumber">#{unread}</span>条变价'
            },
            "search:new": {
                url: ljConf.domainConfig.userroot + "?filter=4",
                text: '你保存的搜索条件有<span class="unreadNumber">#{unread}</span>条变动'
            },
            on_answer_insert_concern: {
                url: ljConf.domainConfig.userroot + "site/myWenda/?filter=1",
                text: '您关注的问题有<span class="unreadNumber">#{unread}</span>条回复'
            },
            on_answer_insert: {
                url: ljConf.domainConfig.userroot + "site/myWenda/",
                text: '您提问的问题有<span class="unreadNumber">#{unread}</span>条回复'
            },
            on_extra_answer_pass: {
                url: ljConf.domainConfig.userroot + "site/myWenda/?filter=2",
                text: '您收到<span class="unreadNumber">#{unread}</span>条新追答'
            },
            on_special_question_pass: {
                url: ljConf.domainConfig.userroot + "site/myWenda/?filter=3",
                text: '您收到<span class="unreadNumber">#{unread}</span>条定向提问'
            },
            on_extra_question_pass: {
                url: ljConf.domainConfig.userroot + "site/myWenda/?filter=4",
                text: '您收到<span class="unreadNumber">#{unread}</span>条追问'
            },
            xuequ_bbs: {
                url: ljConf.domainConfig.userroot + "site/bbs?type=4",
                text: '论坛有<span class="unreadNumber">#{unread}</span>条回复'
            },
            ting_shou: {
                url: ljConf.domainConfig.userroot + "",
                text: '您关注的<span class="unreadNumber">#{unread}</span>套房源已下架'
            }
        }, o = $.extend({}, n, {
            on_extra_answer_pass: {
                url: ljConf.domainConfig.agentroot + "preference/wenda/?filter=2",
                text: '您收到<span class="unreadNumber">#{unread}</span>条新追答'
            },
            on_special_question_pass: {
                url: ljConf.domainConfig.agentroot + "preference/wenda/?filter=3",
                text: '您收到<span class="unreadNumber">#{unread}</span>条定向提问'
            },
            on_extra_question_pass: {
                url: ljConf.domainConfig.agentroot + "preference/wenda/?filter=4",
                text: '您收到<span class="unreadNumber">#{unread}</span>条追问'
            }
        });
        $.ajax({
            url: t, type: "get", dataType: "jsonp", success: function (t) {
                if (0 === t.errno) {
                    var a = t.data.is_agent ? o : n, r = 0;
                    for (var i in t.data.group_by_type) 0 !== t.data.group_by_type[i].unread && a.hasOwnProperty(i) && (r += t.data.group_by_type[i].unread);
                    0 !== r && (e.tipContainer.html(e.tipTpl.render({unreadNum: r})), e.container.html(e.msgTpl.render({
                        group_by_type: t.data.group_by_type,
                        pushMsgMap: a
                    })))
                }
            }
        })
    }
}), define("common/login", function () {
    function e() {
        return !!BeikeLoginSDK || (console.error("BeikeLoginSDK is not ready!"), !1)
    }

    function t() {
        e() && BeikeLoginSDK.getUserInfo(function (e) {
            e && (n(e), e.username && o())
        })
    }

    function n(e) {
        var t = $(".typeUserInfo");
        e && e.username && (e.username = $.encodeHTML($.getLimitString(e.username, 20, ".."))), t.each(function () {
            var t = $(this), n = t.find(".template").html();
            if (n) {
                n = $.template(n);
                var o = $.trim(n.render({data: e}));
                t.find(".typeShowUser").html(o)
            }
        })
    }

    function o() {
        require("common/pushMessage")({
            container: $("#userNews"),
            msgTpl: $.template($("#News").html()),
            tipContainer: $("#indexTipContainer"),
            tipTpl: $.template('<span class="login_bubble_tip"><%=unreadNum%></span>')
        })
    }

    function a(e) {
        return e.preventDefault(), BeikeLoginSDK.init(0, function () {
            location.reload()
        }), !1
    }

    function r(e) {
        return e.preventDefault(), BeikeLoginSDK.init(2, function () {
            location.reload()
        }), !1
    }

    function i(e) {
        e.preventDefault(), BeikeLoginSDK.logout()
    }

    var c = $.env.getEnv();
    return $(document.body).ready(function () {
        $(".typeUserInfo").delegate(".btn-login", "click", a), $(".typeUserInfo").delegate(".btn-register", "click", r), $(".typeUserInfo").delegate(".btn-loginout", "click", i)
    }), {
        init: function () {
            t(), c = "dev" === c || "test" === c ? "test" : "prod", BeikeLoginSDK.config({env: c})
        }, openLoginDialog: a, openDialogRegister: r
    }
}), define("common/ocpc", function () {
    function e(e) {
        try {
            var t = window[e], n = "__storage_test__";
            return t.setItem(n, n), t.removeItem(n), !0
        } catch (e) {
            return e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && 0 !== t.length
        }
    }

    function t(e, t) {
        return String.prototype.split.call(t, e)
    }

    var n = ["qz_gdt", "gdt_vid", "bd_vid", "qhclickid"];
    return function (e, n, o) {
        for (var a = t(e, n), r = {}, i = 0; i < a.length; i++) if ("" !== a[i]) {
            var c = t("=", a[i]);
            if (2 !== c.length) {
                r = null;
                break
            }
            r[c[0]] = c[1]
        }
        "function" == typeof o && o(r)
    }("&", window.location.search.substring(1), function (t) {
        for (var o = "", a = 0; a < n.length; a++) if (t && t[n[a]]) return o = window.location.href, void (e("sessionStorage") && window.sessionStorage.setItem("ad_loginurl", o))
    }), {
        getValue: function () {
            return e("sessionStorage") ? window.sessionStorage.getItem("ad_loginurl") : ""
        }
    }
}), define("common/lianjiaTrack", function () {
    var e, t = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
            window.setTimeout(e, 1e3 / 60)
        }
    }(), n = [], o = function () {
        var n = location.href;
        if (n != e) {
            try {
                window.track_handle.resetGlobal({
                    pid: ljConf && ljConf.page && ljConf && "site_index" == ljConf.page ? "bigc_pc" : "bigc_pc_ershou",
                    uicode: ljConf && ljConf.page,
                    token: r("lianjia_token")[0],
                    ssid: r("lianjia_ssid")[0],
                    uuid: r("lianjia_uuid")[0],
                    cid: ljConf && ljConf.city_id,
                    f: document.referrer
                }), $ULOG.send("1,3")
            } catch (e) {
            }
            e = n
        }
        t(o)
    }, a = function (e, t, o) {
        var a, r, i = (document, +new Date), c = document.createElement("script");
        c.src = e, c.async = 1, document.getElementsByTagName("head")[0].appendChild(c), n.push(c), c.onload = c.onreadystatechange = function () {
            a || c.readyState && !/^c|loade/.test(c.readyState) || (c.onload = c.onerror = c.onreadystatechange = null, a = 1, r && clearTimeout(r), o && o() || !o ? t && t("success", +new Date - i) : t && t("load succ,but run error", +new Date - i))
        }, c.onerror = function () {
            c.onload = c.onerror = c.onreadystatechange = null, a = 1, r && clearTimeout(r), t && t("error", 8e4)
        }, r = setTimeout(function () {
            c.onload = c.onerror = c.onreadystatechange = null, a = 1, t && t("timeout", 8e3)
        }, 8e3)
    }, r = function (e) {
        e = e.replace(/([\.\[\]\$])/g, "\\$1");
        for (var t = new RegExp("(^| )" + e + "=([^;]*)?;", "ig"), n = document.cookie + ";", o = t.exec(n), a = []; o;) a.push(o[2] || ""), o = t.exec(n);
        return a
    }, i = [], c = {
        init: function () {
            window.track_handle || (window.track_handle = {
                send: function (e, t, n) {
                    i.push({evtid: e, event: t, action: n})
                }, checkNodes: function () {
                }
            }, c.initDoms())
        }, initDoms: function () {
            e = location.href;
            var t = require("common/ocpc").getValue();
            a("//s1.ljcdn.com/lianjia-track/js/1.4.7/index.js", function () {
                window.track_handle = new LIANJIA_TRACK({
                    mode: ["dig", "sa"],
                    digConfig: {
                        autosend: !1,
                        target: "https:" == location.protocol ? "//dig.lianjia.com/bigc.gif" : "//test.dig.lianjia.com/bigc.gif"
                    },
                    saConfig: {
                        server_url: "https://sensors.ke.com/sa?project=production",
                        show_log: "https:" != location.protocol && "off" != localStorage.getItem("debug")
                    },
                    domConfig: {
                        clickClass: "CLICKDATA",
                        clickEvtKey: "data-click-evtid",
                        clickEventKey: "data-click-event",
                        clickActionKey: "data-action",
                        viewClass: "VIEWDATA",
                        viewEvtKey: "data-view-evtid",
                        viewEventKey: "data-view-event",
                        viewActionKey: "data-action"
                    },
                    globalData: {
                        pid: ljConf && ljConf.page && ljConf && "site_index" == ljConf.page ? "bigc_pc" : "bigc_pc_ershou",
                        uicode: ljConf && ljConf.page,
                        token: r("lianjia_token")[0],
                        ssid: r("lianjia_ssid")[0],
                        uuid: r("lianjia_uuid")[0],
                        cid: ljConf && ljConf.city_id,
                        f: document.referrer,
                        action: {ad_loginurl: t}
                    }
                });
                for (var e = 0; e < i.length; e++) window.track_handle && window.track_handle.send(i[e].evtid, i[e].event, i[e].action)
            })
        }, bind: function () {
            o()
        }
    };
    c.init(), console.log && (console.log("确认过眼神，你就是对的人\n来到链家，你可以尽情发挥自己的特长\n来到链家，你可以不断提高自己的技术\n加入链家，加入贝壳，成就房产行业新的巅峰"), console.log("请将简历发送至 %c guliming@ke.com（ 邮件标题请以“姓名-应聘XX职位-来自console”命名）", "color:red"), console.log("%c前端，PHP，QA等等各个岗位各个级别都有在招哦，期待你的加入！", "color:red"), console.log("职位介绍：http://join.ke.com/"))
}), define("common/cookie", function (require) {
    function e(e, t) {
        return t = t || "", encodeURIComponent(e) + "=" + encodeURIComponent(t)
    }

    return {
        get: function (e) {
            var t = document.cookie.indexOf(e + "="), n = document.cookie.indexOf(";", t);
            return -1 == t ? "" : decodeURIComponent(document.cookie.substring(t + e.length + 1, n > t ? n : document.cookie.length))
        }, set: function (t, n, o) {
            var a, r = "";
            o && (a = new Date, a.setTime(a.getTime() + o), r = "; expires=" + a.toGMTString());
            if ("object" == typeof t) for (var i in t) (t[i] || 0 === t[i]) && (document.cookie = e(i, t[i]) + r + "; path=/; domain=ke.com"); else (n || 0 === n) && (document.cookie = e(t, n) + r + "; path=/; domain=ke.com")
        }, del: function (t) {
            var n = "; expires=" + new Date(0).toUTCString();
            document.cookie = e(t) + n + "; path=/; domain=ke.com"
        }, clear: function () {
            var e = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (e) for (var t = e.length, n = t; n--;) this.del(e[n])
        }
    }
}), define("common/forSearchServer", function (require) {
    var e = require("common/cookie");
    $(document.body).on("click", "[data-for_search_server]", function (t) {
        var n = $(this), o = n.data("for_search_server");
        e.set("forSearchServer", o, 6e4)
    })
}), define("common/lazyExecute", function (require) {
    function e(e) {
        for (var n, o = i.width(), a = window.innerHeight, c = 0, l = r.length; c < l; c++) n = r[c], t(n, e, o, a) && !n.always && --n.times <= 0 && (r.splice(c, 1), l--, c--)
    }

    function t(e, t, n, o) {
        var a = $(e.el);
        t || (t = document.documentElement.scrollTop || document.body.scrollTop), n || (n = i.width()), o || (o = window.innerHeight);
        var r = a.offset(), c = r.top - e.marginTop, l = c + a.height() + e.marginBottom, s = t, u = t + o;
        return !(l < s || c > u) && (e.callback && e.callback(), !0)
    }

    function n() {
        o = a(function (t) {
            e(t)
        })
    }

    var o, a = require("common/scrollCaller"), r = [], i = $(window);
    return function (e) {
        var a = {el: "", marginTop: 0, marginBottom: 0, times: 1, always: !1, callback: $.noop};
        if ($.extend(a, e), a.el && $(a.el).length) {
            if (!t(a) || a.always) return r.push(a), o || n(), {
                destroy: function () {
                    var e = r.indexOf(a);
                    e >= 0 && r.splice(e, 1)
                }, pause: function () {
                    var e = r.indexOf(a);
                    e >= 0 && r.splice(e, 1)
                }, resume: function () {
                    r.indexOf(a) < 0 && r.push(a)
                }
            }
        }
    }
}), define("common/customerBox/index", function (require) {
    function e() {
        $("body").append('<div class="main_bg"><div class="customer_box"><div class="close_btn" id="close_btn"></div><h1>官方客服</h1><p>您可以与在线顾问进行实时沟通或者拨打客服热线获得帮助</p><div class="clear title_main"><div class="fl"><div class="title_top"><span class="title">在线咨询</span><span class="req_btn_span">立即咨询</span></div><p>09:00-22:00</p></div><div class="fl right_div"><div class="title_top"><span class="title">客服热线</span><span class="tel_num">10106188</span></div><p>09:00-20:00</p></div></div></div></div>')
    }

    function t() {
        $("body").on("click", "#close_btn", function () {
            $(".main_bg").remove()
        })
    }

    function n() {
        $("body").on("click", ".req_btn_span", function () {
            $(".main_bg").remove(), a ? ($(".lianjiaim-head").click(), $(".lianjiaim .lianjiaim-body-item").first().find("tr").first().click()) : o.init(0, function () {
                location.reload()
            })
        })
    }

    var o = window.BeikeLoginSDK, a = !1;
    return function (r) {
        o.bind(function (e) {
            a = !!e
        }), e(), t(), n()
    }
}), define("common/footer", function (require) {
    function e() {
        var e = $(".lianjia-link-box .tab");
        $(".link-list div").eq(0).show(), $(".link-footer div").eq(0).show(), e.delegate("span", "mouseover", function (e) {
            var t = $(e.currentTarget), n = t.index(), o = t.closest(".tab").next(".link-list");
            t.addClass("hover").siblings("span").removeClass("hover"), o.find("div").eq(n).show().siblings("div").hide()
        })
    }

    function t() {
        $(document.body).on("mousedown", function (e) {
            $(e.target).closest(".hot-sug,.search-txt ul,.del").length || ($(".hot-sug").hide(), h.css({
                height: "35px",
                overflow: "hidden",
                border: "0px",
                background: "none",
                left: "0px",
                top: "0px",
                display: "none"
            }))
        }), $("#keyword-box:text").click(function (e) {
            "" == $(this).val() ? $(e.target).next("div").show() : ($("#keyword-box").select(), $(e.target).next("div").show())
        }), $("#keyword-box").keydown(function (e) {
            $(e.target).next("div").hide()
        })
    }

    function n() {
        var e = $(".frauds-list .tab");
        $(".link-list div").eq(0).show(), e.delegate("span", "click", function (e) {
            var t = $(e.currentTarget), n = t.index(), o = t.closest(".tab").next(".link-list");
            t.addClass("hover").siblings("span").removeClass("hover"), o.find("div").eq(n).show().siblings("div").hide()
        })
    }

    function o() {
        var e = $(".hot-sug ul");
        e.eq(0).show(), p.click(function () {
            h.css({
                height: "auto",
                overflow: "auto",
                background: "#fff",
                border: "1px solid #ccc",
                left: "-1px",
                top: "-1px",
                display: "block"
            })
        }), "ershoufang" == p.attr("actdata") && $(".savesearch").show(), h.delegate("li label", "click", function (t) {
            var n = $(t.currentTarget), o = n.parent("li").index(), a = n.attr("actdata");
            a = a.split("=")[1], p.text(n.text()), p.attr("actdata", a), h.css({display: "none"});
            var r = $.queryToJson(n.attr("actData"));
            r && defaultSuggest.suggestView.model.trans.setArgs(r);
            var i = $(this).attr("formact"), l = n.attr("tra"), s = n.attr("tips");
            n.closest(".search-txt").find("form").attr({
                action: i,
                target: l
            }), n.closest(".search-txt").find("form").attr({"data-action": i}), n.closest(".search-txt").find(".autoSuggest").attr("placeholder", s), e.eq(o).show().siblings("ul").hide();
            var u = n.closest(".search-txt").find(".autoSuggest");
            "placeholder" in document.createElement("input") ? u.val("") : u.val(s), "ershoufang" == a ? $(".savesearch").show() : $(".savesearch").hide(), c()
        })
    }

    function a() {
        var e = $("#back-top");
        if (e.hasClass("fix-right-v2") || e.hasClass("fix-right-v3")) {
            var t = "";
            e.on("mouseenter", "li", function () {
                var e = $(this).find(".popup").eq(0);
                t = this.className, e.show(), e.stop().animate({opacity: "1", right: "38px"}, 200)
            }).on("mouseleave", "li", function () {
                var e = $(this).find(".popup").eq(0), n = this.className;
                t = "", e.stop().animate({opacity: "0", right: "48px"}, 200, function () {
                    n != t && e.hide()
                })
            })
        } else {
            var n = $("#back-top .tips li,#gotop");
            n.mouseenter(function () {
                $(this).find("span").css({opacity: "1"}), $(this).css({overflow: "inherit", width: "auto"})
            }), n.mouseleave(function (e) {
                $(this).find("span").css({opacity: "0"}), $(this).css({overflow: "hidden", width: "37px"})
            })
        }
    }

    function r() {
        $("#back-top").on("click", "li", function () {
            var e = $(this).find("a").attr("data-url");
            if (e) if (window.loginData && 1 == window.loginData.code) window.open(e); else {
                var t = $(".btn-login");
                t.length > 0 ? t.trigger("click") : alert("请登录后使用，谢谢！")
            }
        })
    }

    function i(e, t) {
        searchHis = localStorage.getItem(e), searchHis = JSON.parse(searchHis), searchHis ? ($.each(searchHis, function (e, n) {
            n && n.name == t.name && searchHis.splice(e, 1)
        }), searchHis.unshift(t), saveQuery = searchHis.slice(0, 10)) : saveQuery = [t], localStorage.setItem(e, JSON.stringify(saveQuery))
    }

    function c() {
        var e = $(".btn");
        if ($(".search-tab .check").length > 0) {
            var t = $(".search-tab .check").attr("actdata"), n = e.attr("daty-id");
            menu = t + n, $("#keyword-box").on("formSelect", function (e, t) {
                $(this).val($(t).find(".hot-title i").text()), url = $(t).attr("actdata"), url = url.substring(url.indexOf("&url=") + 5, url.lastIndexOf("&title")), url = unescape(url), $(this).attr("url", url)
            }), e.click(function (e) {
                if ($("#keyword-box").attr("url")) {
                    var t = $("#keyword-box").val(), n = $("#keyword-box").attr("url");
                    query = {name: t, url: n}, i(menu, query)
                } else {
                    var o = $(".search-txt form").attr("data-action"), t = $("#keyword-box").val(),
                        n = location.protocol + "//" + window.location.host + o + t;
                    "" != t && (query = {name: t, url: n}, i(menu, query))
                }
            });
            $(".hot-sug").delegate("li a", "click", function (e) {
                var t = $(e.currentTarget);
                name = t.text(), url = t.attr("href"), query = {name: name, url: url}, i(menu, query)
            });
            $("#suggest-cont").delegate("ul li", "click", function (e) {
                var t = $(e.currentTarget);
                name = t.find(".hot-title i").text(), url = t.attr("actdata"), url = url.substring(url.indexOf("&url=") + 5, url.lastIndexOf("&title")), url = unescape(url), query = {
                    name: name,
                    url: url
                }, i(menu, query)
            });
            var o = localStorage.getItem(menu);
            if (null != (o = JSON.parse(o))) {
                $("#keyword-box").val(o[0].name);
                var a = $(".hot-sug ul#" + t + " .list"), r = $(".hot-sug ul#" + t + " .hot-name"), c = a.html();
                r.text("搜索历史"), a.html(""), $.each(o, function (e, n) {
                    var o = '<li><a href="' + n.url + '" data-log_index="' + (e + 1) + '" data-log_value="' + n.name + '" data-log_channel="' + t + '">' + $.encodeHTML(n.name) + "</a></li>";
                    a.append(o)
                });
                var l = $("#" + t + " .del");
                l.show(), l.click(function (e) {
                    localStorage.removeItem(menu), a.html(""), a.append(c), r.text("热门搜索"), l.hide(), texval
                })
            }
        }
    }

    function l() {
        var e = (p.attr("actdata"), $(".savesearch"));
        e.length && d({
            el: e, callback: function () {
                var e = ljConf.city_id, t = new $.ListView({
                    el: ".savesearch",
                    template: "#savesearch",
                    url: $.env.fixedUrl(ljConf.domainConfig.apiroot + "ajax/user/favorite/getSearchNotifyNum"),
                    type: "jsonp",
                    args: {cityId: e}
                });
                t.showloading = function () {
                }, t.init()
            }
        });
        var t = $(".savesearch");
        t.find(".s-show");
        t.delegate(".more", "click", function (e) {
            var t = $(e.currentTarget);
            t.parent("ul").find(".list").css({height: "auto"}), t.hide()
        }), t.delegate(".s-show", "click", function (e) {
            var t = $(e.currentTarget);
            t.next(".cunn").toggle(), "none" == t.next(".cunn").css("display") ? t.find("label").removeClass("down") : t.find("label").addClass("down"), $(".sug-tips ul").hide()
        }), $(".savesearch .s-show").click(function () {
        }), $(document.body).on("mousedown", function (e) {
            $(e.target).closest(".savesearch").length || (t.find(".cunn").hide(), t.find("label").removeClass("down"))
        })
    }

    function s() {
        var e = $('[data-role="huodong-btn"]'), t = $('[data-role="huodong-mask"]'),
            n = $('[data-role="huodong-layer"]');
        e.length > 0 && (e.click(function () {
            t.fadeIn(500), n.addClass("bounceIn").show()
        }), n.click(function (e) {
            var o = $(e.target);
            (0 == o.closest('[data-role="huodong-wrap"]').length || o.closest(".close").length > 0) && (t.fadeOut(500), n.removeClass("bounceIn").fadeOut())
        }))
    }

    function u() {
        $(".req_btn").click(function () {
            f()
        })
    }

    var d = require("common/lazyExecute"), f = require("common/customerBox/index"), h = $(".search-tab .tabs"),
        p = $(".search-tab .check");
    return {
        init: function (i) {
            c(), t(), e(), o(), r(), s(), a(), l(), n(), u()
        }
    }
}), function () {
    function addQuery(url, key, value) {
        if (!url || url.indexOf("/") && url.indexOf("http:") && url.indexOf("https:")) return url;
        var newUrl = "", reg = new RegExp("(^|)" + key + "=([^&]*)(|$)"), temp = key + "=" + value;
        return newUrl = null != url.match(reg) ? url.replace(eval(reg), temp) : url.match("[?]") ? url + "&" + temp : url + "?" + temp
    }

    function dealChannel() {
        "sohu" == window.FROM_CHANNEL && ($("a").each(function () {
            var e = $(this);
            /\/(ditu|fangjia|yezhu)\//.test(e.attr("href")) ? e.attr("target", "_blank") : e.attr("target", "_self")
        }), $(".module-footer a").attr("target", "_blank"), $(".sohu-hide").remove())
    }

    $.listener = new $.EventEmitter(!0), $.env = require("common/env"), $(document.body).ready(function () {
        require("common/login").init(), require("common/lianjiaTrack"), require("common/forSearchServer"), dealChannel(), window.__abbaidu_2011_subidgetf = function () {
            return 11e4
        }, window.__abbaidu_2011_cb = function (e) {
            var t = JSON.stringify({t: e, r: location.href, os: "web", v: "0.1"});
            t = btoa ? btoa(t) : t, document.cookie = "srcid=" + t + ";path=/;"
        };
        var e = document.createElement("script");
        e.src = "https://dlswbr.baidu.com/heicha/mw/abclite-2011-s2.js", document.head.append(e);
        var t = $("#only");
        t.attr("data-city") && (t.attr("data-city").indexOf("su") >= 0 || t.attr("data-city").indexOf("jn") >= 0) && ($(".laisuzhou").addClass("laisuzhou-class"), $(document.body).delegate(".laisuzhou", "click", function (e) {
            return !1
        })), require("common/footer").init()
    }), $(document.body).on("click", ".maidian-detail", function (e) {
        e.preventDefault();
        var t = $(this), n = t.attr("href"), o = t.data("maidian"), a = t.data("hreftype"), r = t.attr("target");
        n = addQuery(n, "fb_expo_id", o), a && (n = addQuery(n, "show_type", 1)), window.open(n, r)
    })
}();

//根据名称获取地址栏参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
//为个人中心左侧导航添加链接
function leftAddHref(){
    var id = getQueryString("id");
    //关注的房源
    $("#main-left ul li:nth-child(1) a").attr("href","personal.html?id="+id);
    //关注的小区
    $("#main-left ul li:nth-child(2) a").attr("href","personal.html?id="+id);
    //我的房源
    $("#main-left ul li:nth-child(3) a").attr("href","myHousing.html?id="+id);
    //我的搜索
    $("#main-left ul li:nth-child(4) a").attr("href","myHousing.html?id="+id);
    //编辑资料
    $("#main-left ul li:nth-child(5) a").attr("href","client.html?id="+id);
}