!(function (e) {
    var t = {};
    function n(i) {
        if (t[i]) return t[i].exports;
        var a = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var a in e)
                    n.d(
                        i,
                        a,
                        function (t) {
                            return e[t];
                        }.bind(null, a)
                    );
            return i;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 301));
})([
    function (e, t, n) {},
    function (e, t, n) {
        (function (t) {
            var n = function (e) {
                return e && e.Math == Math && e;
            };
            e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")();
        }.call(this, n(11)));
    },
    function (e, t) {
        e.exports = function (e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    function (e, t, n) {
        var i = n(1),
            a = n(196),
            r = n(4),
            l = n(38),
            o = n(203),
            s = n(262),
            d = a("wks"),
            u = i.Symbol,
            c = s ? u : (u && u.withoutSetter) || l;
        e.exports = function (e) {
            return r(d, e) || (o && r(u, e) ? (d[e] = u[e]) : (d[e] = c("Symbol." + e))), d[e];
        };
    },
    function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    function (e, t, n) {
        var i = n(5);
        e.exports = function (e) {
            if (!i(e)) throw TypeError(String(e) + " is not an object");
            return e;
        };
    },
    function (e, t, n) {
        var i = n(9),
            a = n(10),
            r = n(34);
        e.exports = i
            ? function (e, t, n) {
                  return a.f(e, t, r(1, n));
              }
            : function (e, t, n) {
                  return (e[t] = n), e;
              };
    },
    function (e, t, n) {
        var i = n(1),
            a = n(188).f,
            r = n(7),
            l = n(13),
            o = n(35),
            s = n(254),
            d = n(199);
        e.exports = function (e, t) {
            var n,
                u,
                c,
                h,
                m,
                f = e.target,
                p = e.global,
                _ = e.stat;
            if ((n = p ? i : _ ? i[f] || o(f, {}) : (i[f] || {}).prototype))
                for (u in t) {
                    if (((h = t[u]), (c = e.noTargetGet ? (m = a(n, u)) && m.value : n[u]), !d(p ? u : f + (_ ? "." : "#") + u, e.forced) && void 0 !== c)) {
                        if (typeof h == typeof c) continue;
                        s(h, c);
                    }
                    (e.sham || (c && c.sham)) && r(h, "sham", !0), l(n, u, h, e);
                }
        };
    },
    function (e, t, n) {
        var i = n(2);
        e.exports = !i(function () {
            return (
                7 !=
                Object.defineProperty({}, 1, {
                    get: function () {
                        return 7;
                    },
                })[1]
            );
        });
    },
    function (e, t, n) {
        var i = n(9),
            a = n(191),
            r = n(6),
            l = n(190),
            o = Object.defineProperty;
        t.f = i
            ? o
            : function (e, t, n) {
                  if ((r(e), (t = l(t, !0)), r(n), a))
                      try {
                          return o(e, t, n);
                      } catch (e) {}
                  if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                  return "value" in n && (e[t] = n.value), e;
              };
    },
    function (e, t) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (n = window);
        }
        e.exports = n;
    },
    function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e;
        };
    },
    function (e, t, n) {
        var i = n(1),
            a = n(7),
            r = n(4),
            l = n(35),
            o = n(193),
            s = n(16),
            d = s.get,
            u = s.enforce,
            c = String(String).split("String");
        (e.exports = function (e, t, n, o) {
            var s = !!o && !!o.unsafe,
                d = !!o && !!o.enumerable,
                h = !!o && !!o.noTargetGet;
            "function" == typeof n && ("string" != typeof t || r(n, "name") || a(n, "name", t), (u(n).source = c.join("string" == typeof t ? t : ""))),
                e !== i ? (s ? !h && e[t] && (d = !0) : delete e[t], d ? (e[t] = n) : a(e, t, n)) : d ? (e[t] = n) : l(t, n);
        })(Function.prototype, "toString", function () {
            return ("function" == typeof this && d(this).source) || o(this);
        });
    },
    function (e, t, n) {
        var i = n(24),
            a = Math.min;
        e.exports = function (e) {
            return e > 0 ? a(i(e), 9007199254740991) : 0;
        };
    },
    function (e, t) {
        var n = (e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
        "number" == typeof __g && (__g = n);
    },
    function (e, t, n) {
        var i,
            a,
            r,
            l = n(195),
            o = n(1),
            s = n(5),
            d = n(7),
            u = n(4),
            c = n(36),
            h = n(23),
            m = o.WeakMap;
        if (l) {
            var f = new m(),
                p = f.get,
                _ = f.has,
                g = f.set;
            (i = function (e, t) {
                return g.call(f, e, t), t;
            }),
                (a = function (e) {
                    return p.call(f, e) || {};
                }),
                (r = function (e) {
                    return _.call(f, e);
                });
        } else {
            var y = c("state");
            (h[y] = !0),
                (i = function (e, t) {
                    return d(e, y, t), t;
                }),
                (a = function (e) {
                    return u(e, y) ? e[y] : {};
                }),
                (r = function (e) {
                    return u(e, y);
                });
        }
        e.exports = {
            set: i,
            get: a,
            has: r,
            enforce: function (e) {
                return r(e) ? a(e) : i(e, {});
            },
            getterFor: function (e) {
                return function (t) {
                    var n;
                    if (!s(t) || (n = a(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n;
                };
            },
        };
    },
    function (e, t, n) {
        var i = n(12);
        e.exports = function (e) {
            return Object(i(e));
        };
    },
    function (e, t) {
        e.exports = {};
    },
    function (e, t, n) {
        "use strict";
        (function (e) {
            var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                i = (function () {
                    for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1) if (n && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                    return 0;
                })();
            var a =
                n && window.Promise
                    ? function (e) {
                          var t = !1;
                          return function () {
                              t ||
                                  ((t = !0),
                                  window.Promise.resolve().then(function () {
                                      (t = !1), e();
                                  }));
                          };
                      }
                    : function (e) {
                          var t = !1;
                          return function () {
                              t ||
                                  ((t = !0),
                                  setTimeout(function () {
                                      (t = !1), e();
                                  }, i));
                          };
                      };
            function r(e) {
                return e && "[object Function]" === {}.toString.call(e);
            }
            function l(e, t) {
                if (1 !== e.nodeType) return [];
                var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                return t ? n[t] : n;
            }
            function o(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host;
            }
            function s(e) {
                if (!e) return document.body;
                switch (e.nodeName) {
                    case "HTML":
                    case "BODY":
                        return e.ownerDocument.body;
                    case "#document":
                        return e.body;
                }
                var t = l(e),
                    n = t.overflow,
                    i = t.overflowX,
                    a = t.overflowY;
                return /(auto|scroll|overlay)/.test(n + a + i) ? e : s(o(e));
            }
            function d(e) {
                return e && e.referenceNode ? e.referenceNode : e;
            }
            var u = n && !(!window.MSInputMethodContext || !document.documentMode),
                c = n && /MSIE 10/.test(navigator.userAgent);
            function h(e) {
                return 11 === e ? u : 10 === e ? c : u || c;
            }
            function m(e) {
                if (!e) return document.documentElement;
                for (var t = h(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; ) n = (e = e.nextElementSibling).offsetParent;
                var i = n && n.nodeName;
                return i && "BODY" !== i && "HTML" !== i ? (-1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === l(n, "position") ? m(n) : n) : e ? e.ownerDocument.documentElement : document.documentElement;
            }
            function f(e) {
                return null !== e.parentNode ? f(e.parentNode) : e;
            }
            function p(e, t) {
                if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                    i = n ? e : t,
                    a = n ? t : e,
                    r = document.createRange();
                r.setStart(i, 0), r.setEnd(a, 0);
                var l,
                    o,
                    s = r.commonAncestorContainer;
                if ((e !== s && t !== s) || i.contains(a)) return "BODY" === (o = (l = s).nodeName) || ("HTML" !== o && m(l.firstElementChild) !== l) ? m(s) : s;
                var d = f(e);
                return d.host ? p(d.host, t) : p(e, f(t).host);
            }
            function _(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                    n = "top" === t ? "scrollTop" : "scrollLeft",
                    i = e.nodeName;
                if ("BODY" === i || "HTML" === i) {
                    var a = e.ownerDocument.documentElement,
                        r = e.ownerDocument.scrollingElement || a;
                    return r[n];
                }
                return e[n];
            }
            function g(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = _(t, "top"),
                    a = _(t, "left"),
                    r = n ? -1 : 1;
                return (e.top += i * r), (e.bottom += i * r), (e.left += a * r), (e.right += a * r), e;
            }
            function y(e, t) {
                var n = "x" === t ? "Left" : "Top",
                    i = "Left" === n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"]);
            }
            function v(e, t, n, i) {
                return Math.max(
                    t["offset" + e],
                    t["scroll" + e],
                    n["client" + e],
                    n["offset" + e],
                    n["scroll" + e],
                    h(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0
                );
            }
            function M(e) {
                var t = e.body,
                    n = e.documentElement,
                    i = h(10) && getComputedStyle(n);
                return { height: v("Height", t, n, i), width: v("Width", t, n, i) };
            }
            var b = function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                },
                x = (function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t;
                    };
                })(),
                L = function (e, t, n) {
                    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                },
                w =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                        }
                        return e;
                    };
            function k(e) {
                return w({}, e, { right: e.left + e.width, bottom: e.top + e.height });
            }
            function Y(e) {
                var t = {};
                try {
                    if (h(10)) {
                        t = e.getBoundingClientRect();
                        var n = _(e, "top"),
                            i = _(e, "left");
                        (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
                    } else t = e.getBoundingClientRect();
                } catch (e) {}
                var a = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
                    r = "HTML" === e.nodeName ? M(e.ownerDocument) : {},
                    o = r.width || e.clientWidth || a.width,
                    s = r.height || e.clientHeight || a.height,
                    d = e.offsetWidth - o,
                    u = e.offsetHeight - s;
                if (d || u) {
                    var c = l(e);
                    (d -= y(c, "x")), (u -= y(c, "y")), (a.width -= d), (a.height -= u);
                }
                return k(a);
            }
            function D(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = h(10),
                    a = "HTML" === t.nodeName,
                    r = Y(e),
                    o = Y(t),
                    d = s(e),
                    u = l(t),
                    c = parseFloat(u.borderTopWidth),
                    m = parseFloat(u.borderLeftWidth);
                n && a && ((o.top = Math.max(o.top, 0)), (o.left = Math.max(o.left, 0)));
                var f = k({ top: r.top - o.top - c, left: r.left - o.left - m, width: r.width, height: r.height });
                if (((f.marginTop = 0), (f.marginLeft = 0), !i && a)) {
                    var p = parseFloat(u.marginTop),
                        _ = parseFloat(u.marginLeft);
                    (f.top -= c - p), (f.bottom -= c - p), (f.left -= m - _), (f.right -= m - _), (f.marginTop = p), (f.marginLeft = _);
                }
                return (i && !n ? t.contains(d) : t === d && "BODY" !== d.nodeName) && (f = g(f, t)), f;
            }
            function T(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.ownerDocument.documentElement,
                    i = D(e, n),
                    a = Math.max(n.clientWidth, window.innerWidth || 0),
                    r = Math.max(n.clientHeight, window.innerHeight || 0),
                    l = t ? 0 : _(n),
                    o = t ? 0 : _(n, "left"),
                    s = { top: l - i.top + i.marginTop, left: o - i.left + i.marginLeft, width: a, height: r };
                return k(s);
            }
            function S(e) {
                var t = e.nodeName;
                if ("BODY" === t || "HTML" === t) return !1;
                if ("fixed" === l(e, "position")) return !0;
                var n = o(e);
                return !!n && S(n);
            }
            function j(e) {
                if (!e || !e.parentElement || h()) return document.documentElement;
                for (var t = e.parentElement; t && "none" === l(t, "transform"); ) t = t.parentElement;
                return t || document.documentElement;
            }
            function E(e, t, n, i) {
                var a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    r = { top: 0, left: 0 },
                    l = a ? j(e) : p(e, d(t));
                if ("viewport" === i) r = T(l, a);
                else {
                    var u = void 0;
                    "scrollParent" === i ? "BODY" === (u = s(o(t))).nodeName && (u = e.ownerDocument.documentElement) : (u = "window" === i ? e.ownerDocument.documentElement : i);
                    var c = D(u, l, a);
                    if ("HTML" !== u.nodeName || S(l)) r = c;
                    else {
                        var h = M(e.ownerDocument),
                            m = h.height,
                            f = h.width;
                        (r.top += c.top - c.marginTop), (r.bottom = m + c.top), (r.left += c.left - c.marginLeft), (r.right = f + c.left);
                    }
                }
                var _ = "number" == typeof (n = n || 0);
                return (r.left += _ ? n : n.left || 0), (r.top += _ ? n : n.top || 0), (r.right -= _ ? n : n.right || 0), (r.bottom -= _ ? n : n.bottom || 0), r;
            }
            function H(e) {
                return e.width * e.height;
            }
            function O(e, t, n, i, a) {
                var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto")) return e;
                var l = E(n, i, r, a),
                    o = { top: { width: l.width, height: t.top - l.top }, right: { width: l.right - t.right, height: l.height }, bottom: { width: l.width, height: l.bottom - t.bottom }, left: { width: t.left - l.left, height: l.height } },
                    s = Object.keys(o)
                        .map(function (e) {
                            return w({ key: e }, o[e], { area: H(o[e]) });
                        })
                        .sort(function (e, t) {
                            return t.area - e.area;
                        }),
                    d = s.filter(function (e) {
                        var t = e.width,
                            i = e.height;
                        return t >= n.clientWidth && i >= n.clientHeight;
                    }),
                    u = d.length > 0 ? d[0].key : s[0].key,
                    c = e.split("-")[1];
                return u + (c ? "-" + c : "");
            }
            function A(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    a = i ? j(t) : p(t, d(n));
                return D(n, a, i);
            }
            function P(e) {
                var t = e.ownerDocument.defaultView.getComputedStyle(e),
                    n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                    i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                return { width: e.offsetWidth + i, height: e.offsetHeight + n };
            }
            function C(e) {
                var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
                return e.replace(/left|right|bottom|top/g, function (e) {
                    return t[e];
                });
            }
            function F(e, t, n) {
                n = n.split("-")[0];
                var i = P(e),
                    a = { width: i.width, height: i.height },
                    r = -1 !== ["right", "left"].indexOf(n),
                    l = r ? "top" : "left",
                    o = r ? "left" : "top",
                    s = r ? "height" : "width",
                    d = r ? "width" : "height";
                return (a[l] = t[l] + t[s] / 2 - i[s] / 2), (a[o] = n === o ? t[o] - i[d] : t[C(o)]), a;
            }
            function I(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0];
            }
            function W(e, t, n) {
                return (
                    (void 0 === n
                        ? e
                        : e.slice(
                              0,
                              (function (e, t, n) {
                                  if (Array.prototype.findIndex)
                                      return e.findIndex(function (e) {
                                          return e[t] === n;
                                      });
                                  var i = I(e, function (e) {
                                      return e[t] === n;
                                  });
                                  return e.indexOf(i);
                              })(e, "name", n)
                          )
                    ).forEach(function (e) {
                        e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                        var n = e.function || e.fn;
                        e.enabled && r(n) && ((t.offsets.popper = k(t.offsets.popper)), (t.offsets.reference = k(t.offsets.reference)), (t = n(t, e)));
                    }),
                    t
                );
            }
            function N() {
                if (!this.state.isDestroyed) {
                    var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                    (e.offsets.reference = A(this.state, this.popper, this.reference, this.options.positionFixed)),
                        (e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
                        (e.originalPlacement = e.placement),
                        (e.positionFixed = this.options.positionFixed),
                        (e.offsets.popper = F(this.popper, e.offsets.reference, e.placement)),
                        (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
                        (e = W(this.modifiers, e)),
                        this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
                }
            }
            function z(e, t) {
                return e.some(function (e) {
                    var n = e.name;
                    return e.enabled && n === t;
                });
            }
            function R(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                    var a = t[i],
                        r = a ? "" + a + n : e;
                    if (void 0 !== document.body.style[r]) return r;
                }
                return null;
            }
            function V() {
                return (
                    (this.state.isDestroyed = !0),
                    z(this.modifiers, "applyStyle") &&
                        (this.popper.removeAttribute("x-placement"),
                        (this.popper.style.position = ""),
                        (this.popper.style.top = ""),
                        (this.popper.style.left = ""),
                        (this.popper.style.right = ""),
                        (this.popper.style.bottom = ""),
                        (this.popper.style.willChange = ""),
                        (this.popper.style[R("transform")] = "")),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                    this
                );
            }
            function B(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window;
            }
            function Z(e, t, n, i) {
                var a = "BODY" === e.nodeName,
                    r = a ? e.ownerDocument.defaultView : e;
                r.addEventListener(t, n, { passive: !0 }), a || Z(s(r.parentNode), t, n, i), i.push(r);
            }
            function U(e, t, n, i) {
                (n.updateBound = i), B(e).addEventListener("resize", n.updateBound, { passive: !0 });
                var a = s(e);
                return Z(a, "scroll", n.updateBound, n.scrollParents), (n.scrollElement = a), (n.eventsEnabled = !0), n;
            }
            function J() {
                this.state.eventsEnabled || (this.state = U(this.reference, this.options, this.state, this.scheduleUpdate));
            }
            function G() {
                var e, t;
                this.state.eventsEnabled &&
                    (cancelAnimationFrame(this.scheduleUpdate),
                    (this.state =
                        ((e = this.reference),
                        (t = this.state),
                        B(e).removeEventListener("resize", t.updateBound),
                        t.scrollParents.forEach(function (e) {
                            e.removeEventListener("scroll", t.updateBound);
                        }),
                        (t.updateBound = null),
                        (t.scrollParents = []),
                        (t.scrollElement = null),
                        (t.eventsEnabled = !1),
                        t)));
            }
            function q(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
            }
            function X(e, t) {
                Object.keys(t).forEach(function (n) {
                    var i = "";
                    -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && q(t[n]) && (i = "px"), (e.style[n] = t[n] + i);
                });
            }
            var K = n && /Firefox/i.test(navigator.userAgent);
            function $(e, t, n) {
                var i = I(e, function (e) {
                        return e.name === t;
                    }),
                    a =
                        !!i &&
                        e.some(function (e) {
                            return e.name === n && e.enabled && e.order < i.order;
                        });
                if (!a) {
                    var r = "`" + t + "`",
                        l = "`" + n + "`";
                    console.warn(l + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
                }
                return a;
            }
            var Q = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                ee = Q.slice(3);
            function te(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = ee.indexOf(e),
                    i = ee.slice(n + 1).concat(ee.slice(0, n));
                return t ? i.reverse() : i;
            }
            var ne = "flip",
                ie = "clockwise",
                ae = "counterclockwise";
            function re(e, t, n, i) {
                var a = [0, 0],
                    r = -1 !== ["right", "left"].indexOf(i),
                    l = e.split(/(\+|\-)/).map(function (e) {
                        return e.trim();
                    }),
                    o = l.indexOf(
                        I(l, function (e) {
                            return -1 !== e.search(/,|\s/);
                        })
                    );
                l[o] && -1 === l[o].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var s = /\s*,\s*|\s+/,
                    d = -1 !== o ? [l.slice(0, o).concat([l[o].split(s)[0]]), [l[o].split(s)[1]].concat(l.slice(o + 1))] : [l];
                return (
                    (d = d.map(function (e, i) {
                        var a = (1 === i ? !r : r) ? "height" : "width",
                            l = !1;
                        return e
                            .reduce(function (e, t) {
                                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? ((e[e.length - 1] = t), (l = !0), e) : l ? ((e[e.length - 1] += t), (l = !1), e) : e.concat(t);
                            }, [])
                            .map(function (e) {
                                return (function (e, t, n, i) {
                                    var a = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                        r = +a[1],
                                        l = a[2];
                                    if (!r) return e;
                                    if (0 === l.indexOf("%")) {
                                        var o = void 0;
                                        switch (l) {
                                            case "%p":
                                                o = n;
                                                break;
                                            case "%":
                                            case "%r":
                                            default:
                                                o = i;
                                        }
                                        return (k(o)[t] / 100) * r;
                                    }
                                    if ("vh" === l || "vw" === l)
                                        return (("vh" === l ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100) * r;
                                    return r;
                                })(e, a, t, n);
                            });
                    })).forEach(function (e, t) {
                        e.forEach(function (n, i) {
                            q(n) && (a[t] += n * ("-" === e[i - 1] ? -1 : 1));
                        });
                    }),
                    a
                );
            }
            var le = {
                    placement: "bottom",
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function () {},
                    onUpdate: function () {},
                    modifiers: {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function (e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = t.split("-")[1];
                                if (i) {
                                    var a = e.offsets,
                                        r = a.reference,
                                        l = a.popper,
                                        o = -1 !== ["bottom", "top"].indexOf(n),
                                        s = o ? "left" : "top",
                                        d = o ? "width" : "height",
                                        u = { start: L({}, s, r[s]), end: L({}, s, r[s] + r[d] - l[d]) };
                                    e.offsets.popper = w({}, l, u[i]);
                                }
                                return e;
                            },
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function (e, t) {
                                var n = t.offset,
                                    i = e.placement,
                                    a = e.offsets,
                                    r = a.popper,
                                    l = a.reference,
                                    o = i.split("-")[0],
                                    s = void 0;
                                return (
                                    (s = q(+n) ? [+n, 0] : re(n, r, l, o)),
                                    "left" === o
                                        ? ((r.top += s[0]), (r.left -= s[1]))
                                        : "right" === o
                                        ? ((r.top += s[0]), (r.left += s[1]))
                                        : "top" === o
                                        ? ((r.left += s[0]), (r.top -= s[1]))
                                        : "bottom" === o && ((r.left += s[0]), (r.top += s[1])),
                                    (e.popper = r),
                                    e
                                );
                            },
                            offset: 0,
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function (e, t) {
                                var n = t.boundariesElement || m(e.instance.popper);
                                e.instance.reference === n && (n = m(n));
                                var i = R("transform"),
                                    a = e.instance.popper.style,
                                    r = a.top,
                                    l = a.left,
                                    o = a[i];
                                (a.top = ""), (a.left = ""), (a[i] = "");
                                var s = E(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                                (a.top = r), (a.left = l), (a[i] = o), (t.boundaries = s);
                                var d = t.priority,
                                    u = e.offsets.popper,
                                    c = {
                                        primary: function (e) {
                                            var n = u[e];
                                            return u[e] < s[e] && !t.escapeWithReference && (n = Math.max(u[e], s[e])), L({}, e, n);
                                        },
                                        secondary: function (e) {
                                            var n = "right" === e ? "left" : "top",
                                                i = u[n];
                                            return u[e] > s[e] && !t.escapeWithReference && (i = Math.min(u[n], s[e] - ("right" === e ? u.width : u.height))), L({}, n, i);
                                        },
                                    };
                                return (
                                    d.forEach(function (e) {
                                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                        u = w({}, u, c[t](e));
                                    }),
                                    (e.offsets.popper = u),
                                    e
                                );
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent",
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function (e) {
                                var t = e.offsets,
                                    n = t.popper,
                                    i = t.reference,
                                    a = e.placement.split("-")[0],
                                    r = Math.floor,
                                    l = -1 !== ["top", "bottom"].indexOf(a),
                                    o = l ? "right" : "bottom",
                                    s = l ? "left" : "top",
                                    d = l ? "width" : "height";
                                return n[o] < r(i[s]) && (e.offsets.popper[s] = r(i[s]) - n[d]), n[s] > r(i[o]) && (e.offsets.popper[s] = r(i[o])), e;
                            },
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function (e, t) {
                                var n;
                                if (!$(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                var i = t.element;
                                if ("string" == typeof i) {
                                    if (!(i = e.instance.popper.querySelector(i))) return e;
                                } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                var a = e.placement.split("-")[0],
                                    r = e.offsets,
                                    o = r.popper,
                                    s = r.reference,
                                    d = -1 !== ["left", "right"].indexOf(a),
                                    u = d ? "height" : "width",
                                    c = d ? "Top" : "Left",
                                    h = c.toLowerCase(),
                                    m = d ? "left" : "top",
                                    f = d ? "bottom" : "right",
                                    p = P(i)[u];
                                s[f] - p < o[h] && (e.offsets.popper[h] -= o[h] - (s[f] - p)), s[h] + p > o[f] && (e.offsets.popper[h] += s[h] + p - o[f]), (e.offsets.popper = k(e.offsets.popper));
                                var _ = s[h] + s[u] / 2 - p / 2,
                                    g = l(e.instance.popper),
                                    y = parseFloat(g["margin" + c]),
                                    v = parseFloat(g["border" + c + "Width"]),
                                    M = _ - e.offsets.popper[h] - y - v;
                                return (M = Math.max(Math.min(o[u] - p, M), 0)), (e.arrowElement = i), (e.offsets.arrow = (L((n = {}), h, Math.round(M)), L(n, m, ""), n)), e;
                            },
                            element: "[x-arrow]",
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function (e, t) {
                                if (z(e.instance.modifiers, "inner")) return e;
                                if (e.flipped && e.placement === e.originalPlacement) return e;
                                var n = E(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                    i = e.placement.split("-")[0],
                                    a = C(i),
                                    r = e.placement.split("-")[1] || "",
                                    l = [];
                                switch (t.behavior) {
                                    case ne:
                                        l = [i, a];
                                        break;
                                    case ie:
                                        l = te(i);
                                        break;
                                    case ae:
                                        l = te(i, !0);
                                        break;
                                    default:
                                        l = t.behavior;
                                }
                                return (
                                    l.forEach(function (o, s) {
                                        if (i !== o || l.length === s + 1) return e;
                                        (i = e.placement.split("-")[0]), (a = C(i));
                                        var d = e.offsets.popper,
                                            u = e.offsets.reference,
                                            c = Math.floor,
                                            h = ("left" === i && c(d.right) > c(u.left)) || ("right" === i && c(d.left) < c(u.right)) || ("top" === i && c(d.bottom) > c(u.top)) || ("bottom" === i && c(d.top) < c(u.bottom)),
                                            m = c(d.left) < c(n.left),
                                            f = c(d.right) > c(n.right),
                                            p = c(d.top) < c(n.top),
                                            _ = c(d.bottom) > c(n.bottom),
                                            g = ("left" === i && m) || ("right" === i && f) || ("top" === i && p) || ("bottom" === i && _),
                                            y = -1 !== ["top", "bottom"].indexOf(i),
                                            v = !!t.flipVariations && ((y && "start" === r && m) || (y && "end" === r && f) || (!y && "start" === r && p) || (!y && "end" === r && _)),
                                            M = !!t.flipVariationsByContent && ((y && "start" === r && f) || (y && "end" === r && m) || (!y && "start" === r && _) || (!y && "end" === r && p)),
                                            b = v || M;
                                        (h || g || b) &&
                                            ((e.flipped = !0),
                                            (h || g) && (i = l[s + 1]),
                                            b &&
                                                (r = (function (e) {
                                                    return "end" === e ? "start" : "start" === e ? "end" : e;
                                                })(r)),
                                            (e.placement = i + (r ? "-" + r : "")),
                                            (e.offsets.popper = w({}, e.offsets.popper, F(e.instance.popper, e.offsets.reference, e.placement))),
                                            (e = W(e.instance.modifiers, e, "flip")));
                                    }),
                                    e
                                );
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport",
                            flipVariations: !1,
                            flipVariationsByContent: !1,
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function (e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = e.offsets,
                                    a = i.popper,
                                    r = i.reference,
                                    l = -1 !== ["left", "right"].indexOf(n),
                                    o = -1 === ["top", "left"].indexOf(n);
                                return (a[l ? "left" : "top"] = r[n] - (o ? a[l ? "width" : "height"] : 0)), (e.placement = C(t)), (e.offsets.popper = k(a)), e;
                            },
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function (e) {
                                if (!$(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                var t = e.offsets.reference,
                                    n = I(e.instance.modifiers, function (e) {
                                        return "preventOverflow" === e.name;
                                    }).boundaries;
                                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                    if (!0 === e.hide) return e;
                                    (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                                } else {
                                    if (!1 === e.hide) return e;
                                    (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                                }
                                return e;
                            },
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function (e, t) {
                                var n = t.x,
                                    i = t.y,
                                    a = e.offsets.popper,
                                    r = I(e.instance.modifiers, function (e) {
                                        return "applyStyle" === e.name;
                                    }).gpuAcceleration;
                                void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var l = void 0 !== r ? r : t.gpuAcceleration,
                                    o = m(e.instance.popper),
                                    s = Y(o),
                                    d = { position: a.position },
                                    u = (function (e, t) {
                                        var n = e.offsets,
                                            i = n.popper,
                                            a = n.reference,
                                            r = Math.round,
                                            l = Math.floor,
                                            o = function (e) {
                                                return e;
                                            },
                                            s = r(a.width),
                                            d = r(i.width),
                                            u = -1 !== ["left", "right"].indexOf(e.placement),
                                            c = -1 !== e.placement.indexOf("-"),
                                            h = t ? (u || c || s % 2 == d % 2 ? r : l) : o,
                                            m = t ? r : o;
                                        return { left: h(s % 2 == 1 && d % 2 == 1 && !c && t ? i.left - 1 : i.left), top: m(i.top), bottom: m(i.bottom), right: h(i.right) };
                                    })(e, window.devicePixelRatio < 2 || !K),
                                    c = "bottom" === n ? "top" : "bottom",
                                    h = "right" === i ? "left" : "right",
                                    f = R("transform"),
                                    p = void 0,
                                    _ = void 0;
                                if (
                                    ((_ = "bottom" === c ? ("HTML" === o.nodeName ? -o.clientHeight + u.bottom : -s.height + u.bottom) : u.top),
                                    (p = "right" === h ? ("HTML" === o.nodeName ? -o.clientWidth + u.right : -s.width + u.right) : u.left),
                                    l && f)
                                )
                                    (d[f] = "translate3d(" + p + "px, " + _ + "px, 0)"), (d[c] = 0), (d[h] = 0), (d.willChange = "transform");
                                else {
                                    var g = "bottom" === c ? -1 : 1,
                                        y = "right" === h ? -1 : 1;
                                    (d[c] = _ * g), (d[h] = p * y), (d.willChange = c + ", " + h);
                                }
                                var v = { "x-placement": e.placement };
                                return (e.attributes = w({}, v, e.attributes)), (e.styles = w({}, d, e.styles)), (e.arrowStyles = w({}, e.offsets.arrow, e.arrowStyles)), e;
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right",
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function (e) {
                                var t, n;
                                return (
                                    X(e.instance.popper, e.styles),
                                    (t = e.instance.popper),
                                    (n = e.attributes),
                                    Object.keys(n).forEach(function (e) {
                                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
                                    }),
                                    e.arrowElement && Object.keys(e.arrowStyles).length && X(e.arrowElement, e.arrowStyles),
                                    e
                                );
                            },
                            onLoad: function (e, t, n, i, a) {
                                var r = A(a, t, e, n.positionFixed),
                                    l = O(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                return t.setAttribute("x-placement", l), X(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
                            },
                            gpuAcceleration: void 0,
                        },
                    },
                },
                oe = (function () {
                    function e(t, n) {
                        var i = this,
                            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        b(this, e),
                            (this.scheduleUpdate = function () {
                                return requestAnimationFrame(i.update);
                            }),
                            (this.update = a(this.update.bind(this))),
                            (this.options = w({}, e.Defaults, l)),
                            (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                            (this.reference = t && t.jquery ? t[0] : t),
                            (this.popper = n && n.jquery ? n[0] : n),
                            (this.options.modifiers = {}),
                            Object.keys(w({}, e.Defaults.modifiers, l.modifiers)).forEach(function (t) {
                                i.options.modifiers[t] = w({}, e.Defaults.modifiers[t] || {}, l.modifiers ? l.modifiers[t] : {});
                            }),
                            (this.modifiers = Object.keys(this.options.modifiers)
                                .map(function (e) {
                                    return w({ name: e }, i.options.modifiers[e]);
                                })
                                .sort(function (e, t) {
                                    return e.order - t.order;
                                })),
                            this.modifiers.forEach(function (e) {
                                e.enabled && r(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state);
                            }),
                            this.update();
                        var o = this.options.eventsEnabled;
                        o && this.enableEventListeners(), (this.state.eventsEnabled = o);
                    }
                    return (
                        x(e, [
                            {
                                key: "update",
                                value: function () {
                                    return N.call(this);
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    return V.call(this);
                                },
                            },
                            {
                                key: "enableEventListeners",
                                value: function () {
                                    return J.call(this);
                                },
                            },
                            {
                                key: "disableEventListeners",
                                value: function () {
                                    return G.call(this);
                                },
                            },
                        ]),
                        e
                    );
                })();
            (oe.Utils = ("undefined" != typeof window ? window : e).PopperUtils), (oe.placements = Q), (oe.Defaults = le), (t.a = oe);
        }.call(this, n(11)));
    },
    function (e, t, n) {
        var i = n(21),
            a = n(12);
        e.exports = function (e) {
            return i(a(e));
        };
    },
    function (e, t, n) {
        var i = n(2),
            a = n(22),
            r = "".split;
        e.exports = i(function () {
            return !Object("z").propertyIsEnumerable(0);
        })
            ? function (e) {
                  return "String" == a(e) ? r.call(e, "") : Object(e);
              }
            : Object;
    },
    function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1);
        };
    },
    function (e, t) {
        e.exports = {};
    },
    function (e, t) {
        var n = Math.ceil,
            i = Math.floor;
        e.exports = function (e) {
            return isNaN((e = +e)) ? 0 : (e > 0 ? i : n)(e);
        };
    },
    function (e, t) {
        var n = !("undefined" == typeof window || !window.document || !window.document.createElement);
        e.exports = n;
    },
    function (e, t, n) {
        var i = n(27);
        e.exports = function (e) {
            if (!i(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    },
    function (e, t) {
        var n = Math.ceil,
            i = Math.floor;
        e.exports = function (e) {
            return isNaN((e = +e)) ? 0 : (e > 0 ? i : n)(e);
        };
    },
    function (e, t) {
        var n = (e.exports = { version: "2.6.11" });
        "number" == typeof __e && (__e = n);
    },
    function (e, t, n) {
        var i = n(242),
            a = n(246);
        e.exports = n(32)
            ? function (e, t, n) {
                  return i.f(e, t, a(1, n));
              }
            : function (e, t, n) {
                  return (e[t] = n), e;
              };
    },
    function (e, t, n) {
        e.exports = !n(33)(function () {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    function (e, t) {
        e.exports = function (e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
    },
    function (e, t, n) {
        var i = n(1),
            a = n(7);
        e.exports = function (e, t) {
            try {
                a(i, e, t);
            } catch (n) {
                i[e] = t;
            }
            return t;
        };
    },
    function (e, t, n) {
        var i = n(196),
            a = n(38),
            r = i("keys");
        e.exports = function (e) {
            return r[e] || (r[e] = a(e));
        };
    },
    function (e, t) {
        e.exports = !1;
    },
    function (e, t) {
        var n = 0,
            i = Math.random();
        e.exports = function (e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + i).toString(36);
        };
    },
    function (e, t, n) {
        var i = n(256),
            a = n(1),
            r = function (e) {
                return "function" == typeof e ? e : void 0;
            };
        e.exports = function (e, t) {
            return arguments.length < 2 ? r(i[e]) || r(a[e]) : (i[e] && i[e][t]) || (a[e] && a[e][t]);
        };
    },
    function (e, t) {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    },
    function (e, t, n) {
        var i = n(201),
            a = n(21),
            r = n(17),
            l = n(14),
            o = n(260),
            s = [].push,
            d = function (e) {
                var t = 1 == e,
                    n = 2 == e,
                    d = 3 == e,
                    u = 4 == e,
                    c = 6 == e,
                    h = 5 == e || c;
                return function (m, f, p, _) {
                    for (var g, y, v = r(m), M = a(v), b = i(f, p, 3), x = l(M.length), L = 0, w = _ || o, k = t ? w(m, x) : n ? w(m, 0) : void 0; x > L; L++)
                        if ((h || L in M) && ((y = b((g = M[L]), L, v)), e))
                            if (t) k[L] = y;
                            else if (y)
                                switch (e) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return g;
                                    case 6:
                                        return L;
                                    case 2:
                                        s.call(k, g);
                                }
                            else if (u) return !1;
                    return c ? -1 : d || u ? u : k;
                };
            };
        e.exports = { forEach: d(0), map: d(1), filter: d(2), some: d(3), every: d(4), find: d(5), findIndex: d(6) };
    },
    function (e, t, n) {
        var i = n(9),
            a = n(2),
            r = n(4),
            l = Object.defineProperty,
            o = {},
            s = function (e) {
                throw e;
            };
        e.exports = function (e, t) {
            if (r(o, e)) return o[e];
            t || (t = {});
            var n = [][e],
                d = !!r(t, "ACCESSORS") && t.ACCESSORS,
                u = r(t, 0) ? t[0] : s,
                c = r(t, 1) ? t[1] : void 0;
            return (o[e] =
                !!n &&
                !a(function () {
                    if (d && !i) return !0;
                    var e = { length: -1 };
                    d ? l(e, 1, { enumerable: !0, get: s }) : (e[1] = 1), n.call(e, u, c);
                }));
        };
    },
    function (e, t, n) {
        var i = n(10).f,
            a = n(4),
            r = n(3)("toStringTag");
        e.exports = function (e, t, n) {
            e && !a((e = n ? e : e.prototype), r) && i(e, r, { configurable: !0, value: t });
        };
    },
    function (e, t, n) {
        var i = {};
        (i[n(3)("toStringTag")] = "z"), (e.exports = "[object z]" === String(i));
    },
    function (e, t, n) {
        var i = n(23),
            a = n(5),
            r = n(4),
            l = n(10).f,
            o = n(38),
            s = n(283),
            d = o("meta"),
            u = 0,
            c =
                Object.isExtensible ||
                function () {
                    return !0;
                },
            h = function (e) {
                l(e, d, { value: { objectID: "O" + ++u, weakData: {} } });
            },
            m = (e.exports = {
                REQUIRED: !1,
                fastKey: function (e, t) {
                    if (!a(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!r(e, d)) {
                        if (!c(e)) return "F";
                        if (!t) return "E";
                        h(e);
                    }
                    return e[d].objectID;
                },
                getWeakData: function (e, t) {
                    if (!r(e, d)) {
                        if (!c(e)) return !0;
                        if (!t) return !1;
                        h(e);
                    }
                    return e[d].weakData;
                },
                onFreeze: function (e) {
                    return s && m.REQUIRED && c(e) && !r(e, d) && h(e), e;
                },
            });
        i[d] = !0;
    },
    function (e, t, n) {
        "use strict";
        var i,
            a,
            r = n(295),
            l = n(296),
            o = RegExp.prototype.exec,
            s = String.prototype.replace,
            d = o,
            u = ((i = /a/), (a = /b*/g), o.call(i, "a"), o.call(a, "a"), 0 !== i.lastIndex || 0 !== a.lastIndex),
            c = l.UNSUPPORTED_Y || l.BROKEN_CARET,
            h = void 0 !== /()??/.exec("")[1];
        (u || h || c) &&
            (d = function (e) {
                var t,
                    n,
                    i,
                    a,
                    l = this,
                    d = c && l.sticky,
                    m = r.call(l),
                    f = l.source,
                    p = 0,
                    _ = e;
                return (
                    d &&
                        (-1 === (m = m.replace("y", "")).indexOf("g") && (m += "g"),
                        (_ = String(e).slice(l.lastIndex)),
                        l.lastIndex > 0 && (!l.multiline || (l.multiline && "\n" !== e[l.lastIndex - 1])) && ((f = "(?: " + f + ")"), (_ = " " + _), p++),
                        (n = new RegExp("^(?:" + f + ")", m))),
                    h && (n = new RegExp("^" + f + "$(?!\\s)", m)),
                    u && (t = l.lastIndex),
                    (i = o.call(d ? n : l, _)),
                    d ? (i ? ((i.input = i.input.slice(p)), (i[0] = i[0].slice(p)), (i.index = l.lastIndex), (l.lastIndex += i[0].length)) : (l.lastIndex = 0)) : u && i && (l.lastIndex = l.global ? i.index + i[0].length : t),
                    h &&
                        i &&
                        i.length > 1 &&
                        s.call(i[0], n, function () {
                            for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (i[a] = void 0);
                        }),
                    i
                );
            }),
            (e.exports = d);
    },
    function (e, t, n) {
        var i;
        "undefined" != typeof self && self,
            (i = function () {
                return (function (e) {
                    var t = {};
                    function n(i) {
                        if (t[i]) return t[i].exports;
                        var a = (t[i] = { i: i, l: !1, exports: {} });
                        return e[i].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
                    }
                    return (
                        (n.m = e),
                        (n.c = t),
                        (n.d = function (e, t, i) {
                            n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: i });
                        }),
                        (n.r = function (e) {
                            Object.defineProperty(e, "__esModule", { value: !0 });
                        }),
                        (n.n = function (e) {
                            var t =
                                e && e.__esModule
                                    ? function () {
                                          return e.default;
                                      }
                                    : function () {
                                          return e;
                                      };
                            return n.d(t, "a", t), t;
                        }),
                        (n.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                        }),
                        (n.p = ""),
                        n((n.s = 0))
                    );
                })({
                    "./dist/icons.json": function (e) {
                        e.exports = {
                            clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
                            "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
                            github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
                            gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
                            settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
                            target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
                            thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
                            twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
                            user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
                            users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
                        };
                    },
                    "./node_modules/classnames/dedupe.js": function (e, t, n) {
                        var i;
                        !(function () {
                            "use strict";
                            var n = (function () {
                                function e() {}
                                function t(e, t) {
                                    for (var n = t.length, i = 0; i < n; ++i) a(e, t[i]);
                                }
                                e.prototype = Object.create(null);
                                var n = {}.hasOwnProperty,
                                    i = /\s+/;
                                function a(e, a) {
                                    if (a) {
                                        var r = typeof a;
                                        "string" === r
                                            ? (function (e, t) {
                                                  for (var n = t.split(i), a = n.length, r = 0; r < a; ++r) e[n[r]] = !0;
                                              })(e, a)
                                            : Array.isArray(a)
                                            ? t(e, a)
                                            : "object" === r
                                            ? (function (e, t) {
                                                  for (var i in t) n.call(t, i) && (e[i] = !!t[i]);
                                              })(e, a)
                                            : "number" === r &&
                                              (function (e, t) {
                                                  e[t] = !0;
                                              })(e, a);
                                    }
                                }
                                return function () {
                                    for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                                    var r = new e();
                                    t(r, i);
                                    var l = [];
                                    for (var o in r) r[o] && l.push(o);
                                    return l.join(" ");
                                };
                            })();
                            void 0 !== e && e.exports
                                ? (e.exports = n)
                                : void 0 ===
                                      (i = function () {
                                          return n;
                                      }.apply(t, [])) || (e.exports = i);
                        })();
                    },
                    "./node_modules/core-js/es/array/from.js": function (e, t, n) {
                        n("./node_modules/core-js/modules/es.string.iterator.js"), n("./node_modules/core-js/modules/es.array.from.js");
                        var i = n("./node_modules/core-js/internals/path.js");
                        e.exports = i.Array.from;
                    },
                    "./node_modules/core-js/internals/a-function.js": function (e, t) {
                        e.exports = function (e) {
                            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
                            return e;
                        };
                    },
                    "./node_modules/core-js/internals/an-object.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/is-object.js");
                        e.exports = function (e) {
                            if (!i(e)) throw TypeError(String(e) + " is not an object");
                            return e;
                        };
                    },
                    "./node_modules/core-js/internals/array-from.js": function (e, t, n) {
                        "use strict";
                        var i = n("./node_modules/core-js/internals/bind-context.js"),
                            a = n("./node_modules/core-js/internals/to-object.js"),
                            r = n("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),
                            l = n("./node_modules/core-js/internals/is-array-iterator-method.js"),
                            o = n("./node_modules/core-js/internals/to-length.js"),
                            s = n("./node_modules/core-js/internals/create-property.js"),
                            d = n("./node_modules/core-js/internals/get-iterator-method.js");
                        e.exports = function (e) {
                            var t,
                                n,
                                u,
                                c,
                                h = a(e),
                                m = "function" == typeof this ? this : Array,
                                f = arguments.length,
                                p = f > 1 ? arguments[1] : void 0,
                                _ = void 0 !== p,
                                g = 0,
                                y = d(h);
                            if ((_ && (p = i(p, f > 2 ? arguments[2] : void 0, 2)), null == y || (m == Array && l(y)))) for (n = new m((t = o(h.length))); t > g; g++) s(n, g, _ ? p(h[g], g) : h[g]);
                            else for (c = y.call(h), n = new m(); !(u = c.next()).done; g++) s(n, g, _ ? r(c, p, [u.value, g], !0) : u.value);
                            return (n.length = g), n;
                        };
                    },
                    "./node_modules/core-js/internals/array-includes.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/to-indexed-object.js"),
                            a = n("./node_modules/core-js/internals/to-length.js"),
                            r = n("./node_modules/core-js/internals/to-absolute-index.js");
                        e.exports = function (e) {
                            return function (t, n, l) {
                                var o,
                                    s = i(t),
                                    d = a(s.length),
                                    u = r(l, d);
                                if (e && n != n) {
                                    for (; d > u; ) if ((o = s[u++]) != o) return !0;
                                } else for (; d > u; u++) if ((e || u in s) && s[u] === n) return e || u || 0;
                                return !e && -1;
                            };
                        };
                    },
                    "./node_modules/core-js/internals/bind-context.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/a-function.js");
                        e.exports = function (e, t, n) {
                            if ((i(e), void 0 === t)) return e;
                            switch (n) {
                                case 0:
                                    return function () {
                                        return e.call(t);
                                    };
                                case 1:
                                    return function (n) {
                                        return e.call(t, n);
                                    };
                                case 2:
                                    return function (n, i) {
                                        return e.call(t, n, i);
                                    };
                                case 3:
                                    return function (n, i, a) {
                                        return e.call(t, n, i, a);
                                    };
                            }
                            return function () {
                                return e.apply(t, arguments);
                            };
                        };
                    },
                    "./node_modules/core-js/internals/call-with-safe-iteration-closing.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/an-object.js");
                        e.exports = function (e, t, n, a) {
                            try {
                                return a ? t(i(n)[0], n[1]) : t(n);
                            } catch (t) {
                                var r = e.return;
                                throw (void 0 !== r && i(r.call(e)), t);
                            }
                        };
                    },
                    "./node_modules/core-js/internals/check-correctness-of-iteration.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/well-known-symbol.js")("iterator"),
                            a = !1;
                        try {
                            var r = 0,
                                l = {
                                    next: function () {
                                        return { done: !!r++ };
                                    },
                                    return: function () {
                                        a = !0;
                                    },
                                };
                            (l[i] = function () {
                                return this;
                            }),
                                Array.from(l, function () {
                                    throw 2;
                                });
                        } catch (e) {}
                        e.exports = function (e, t) {
                            if (!t && !a) return !1;
                            var n = !1;
                            try {
                                var r = {};
                                (r[i] = function () {
                                    return {
                                        next: function () {
                                            return { done: (n = !0) };
                                        },
                                    };
                                }),
                                    e(r);
                            } catch (e) {}
                            return n;
                        };
                    },
                    "./node_modules/core-js/internals/classof-raw.js": function (e, t) {
                        var n = {}.toString;
                        e.exports = function (e) {
                            return n.call(e).slice(8, -1);
                        };
                    },
                    "./node_modules/core-js/internals/classof.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/classof-raw.js"),
                            a = n("./node_modules/core-js/internals/well-known-symbol.js")("toStringTag"),
                            r =
                                "Arguments" ==
                                i(
                                    (function () {
                                        return arguments;
                                    })()
                                );
                        e.exports = function (e) {
                            var t, n, l;
                            return void 0 === e
                                ? "Undefined"
                                : null === e
                                ? "Null"
                                : "string" ==
                                  typeof (n = (function (e, t) {
                                      try {
                                          return e[t];
                                      } catch (e) {}
                                  })((t = Object(e)), a))
                                ? n
                                : r
                                ? i(t)
                                : "Object" == (l = i(t)) && "function" == typeof t.callee
                                ? "Arguments"
                                : l;
                        };
                    },
                    "./node_modules/core-js/internals/copy-constructor-properties.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/has.js"),
                            a = n("./node_modules/core-js/internals/own-keys.js"),
                            r = n("./node_modules/core-js/internals/object-get-own-property-descriptor.js"),
                            l = n("./node_modules/core-js/internals/object-define-property.js");
                        e.exports = function (e, t) {
                            for (var n = a(t), o = l.f, s = r.f, d = 0; d < n.length; d++) {
                                var u = n[d];
                                i(e, u) || o(e, u, s(t, u));
                            }
                        };
                    },
                    "./node_modules/core-js/internals/correct-prototype-getter.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/fails.js");
                        e.exports = !i(function () {
                            function e() {}
                            return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
                        });
                    },
                    "./node_modules/core-js/internals/create-iterator-constructor.js": function (e, t, n) {
                        "use strict";
                        var i = n("./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,
                            a = n("./node_modules/core-js/internals/object-create.js"),
                            r = n("./node_modules/core-js/internals/create-property-descriptor.js"),
                            l = n("./node_modules/core-js/internals/set-to-string-tag.js"),
                            o = n("./node_modules/core-js/internals/iterators.js"),
                            s = function () {
                                return this;
                            };
                        e.exports = function (e, t, n) {
                            var d = t + " Iterator";
                            return (e.prototype = a(i, { next: r(1, n) })), l(e, d, !1, !0), (o[d] = s), e;
                        };
                    },
                    "./node_modules/core-js/internals/create-property-descriptor.js": function (e, t) {
                        e.exports = function (e, t) {
                            return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
                        };
                    },
                    "./node_modules/core-js/internals/create-property.js": function (e, t, n) {
                        "use strict";
                        var i = n("./node_modules/core-js/internals/to-primitive.js"),
                            a = n("./node_modules/core-js/internals/object-define-property.js"),
                            r = n("./node_modules/core-js/internals/create-property-descriptor.js");
                        e.exports = function (e, t, n) {
                            var l = i(t);
                            l in e ? a.f(e, l, r(0, n)) : (e[l] = n);
                        };
                    },
                    "./node_modules/core-js/internals/define-iterator.js": function (e, t, n) {
                        "use strict";
                        var i = n("./node_modules/core-js/internals/export.js"),
                            a = n("./node_modules/core-js/internals/create-iterator-constructor.js"),
                            r = n("./node_modules/core-js/internals/object-get-prototype-of.js"),
                            l = n("./node_modules/core-js/internals/object-set-prototype-of.js"),
                            o = n("./node_modules/core-js/internals/set-to-string-tag.js"),
                            s = n("./node_modules/core-js/internals/hide.js"),
                            d = n("./node_modules/core-js/internals/redefine.js"),
                            u = n("./node_modules/core-js/internals/well-known-symbol.js"),
                            c = n("./node_modules/core-js/internals/is-pure.js"),
                            h = n("./node_modules/core-js/internals/iterators.js"),
                            m = n("./node_modules/core-js/internals/iterators-core.js"),
                            f = m.IteratorPrototype,
                            p = m.BUGGY_SAFARI_ITERATORS,
                            _ = u("iterator"),
                            g = "keys",
                            y = "values",
                            v = "entries",
                            M = function () {
                                return this;
                            };
                        e.exports = function (e, t, n, u, m, b, x) {
                            a(n, t, u);
                            var L,
                                w,
                                k,
                                Y = function (e) {
                                    if (e === m && E) return E;
                                    if (!p && e in S) return S[e];
                                    switch (e) {
                                        case g:
                                        case y:
                                        case v:
                                            return function () {
                                                return new n(this, e);
                                            };
                                    }
                                    return function () {
                                        return new n(this);
                                    };
                                },
                                D = t + " Iterator",
                                T = !1,
                                S = e.prototype,
                                j = S[_] || S["@@iterator"] || (m && S[m]),
                                E = (!p && j) || Y(m),
                                H = ("Array" == t && S.entries) || j;
                            if (
                                (H && ((L = r(H.call(new e()))), f !== Object.prototype && L.next && (c || r(L) === f || (l ? l(L, f) : "function" != typeof L[_] && s(L, _, M)), o(L, D, !0, !0), c && (h[D] = M))),
                                m == y &&
                                    j &&
                                    j.name !== y &&
                                    ((T = !0),
                                    (E = function () {
                                        return j.call(this);
                                    })),
                                (c && !x) || S[_] === E || s(S, _, E),
                                (h[t] = E),
                                m)
                            )
                                if (((w = { values: Y(y), keys: b ? E : Y(g), entries: Y(v) }), x)) for (k in w) (p || T || !(k in S)) && d(S, k, w[k]);
                                else i({ target: t, proto: !0, forced: p || T }, w);
                            return w;
                        };
                    },
                    "./node_modules/core-js/internals/descriptors.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/fails.js");
                        e.exports = !i(function () {
                            return (
                                7 !=
                                Object.defineProperty({}, "a", {
                                    get: function () {
                                        return 7;
                                    },
                                }).a
                            );
                        });
                    },
                    "./node_modules/core-js/internals/document-create-element.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/global.js"),
                            a = n("./node_modules/core-js/internals/is-object.js"),
                            r = i.document,
                            l = a(r) && a(r.createElement);
                        e.exports = function (e) {
                            return l ? r.createElement(e) : {};
                        };
                    },
                    "./node_modules/core-js/internals/enum-bug-keys.js": function (e, t) {
                        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
                    },
                    "./node_modules/core-js/internals/export.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/global.js"),
                            a = n("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,
                            r = n("./node_modules/core-js/internals/hide.js"),
                            l = n("./node_modules/core-js/internals/redefine.js"),
                            o = n("./node_modules/core-js/internals/set-global.js"),
                            s = n("./node_modules/core-js/internals/copy-constructor-properties.js"),
                            d = n("./node_modules/core-js/internals/is-forced.js");
                        e.exports = function (e, t) {
                            var n,
                                u,
                                c,
                                h,
                                m,
                                f = e.target,
                                p = e.global,
                                _ = e.stat;
                            if ((n = p ? i : _ ? i[f] || o(f, {}) : (i[f] || {}).prototype))
                                for (u in t) {
                                    if (((h = t[u]), (c = e.noTargetGet ? (m = a(n, u)) && m.value : n[u]), !d(p ? u : f + (_ ? "." : "#") + u, e.forced) && void 0 !== c)) {
                                        if (typeof h == typeof c) continue;
                                        s(h, c);
                                    }
                                    (e.sham || (c && c.sham)) && r(h, "sham", !0), l(n, u, h, e);
                                }
                        };
                    },
                    "./node_modules/core-js/internals/fails.js": function (e, t) {
                        e.exports = function (e) {
                            try {
                                return !!e();
                            } catch (e) {
                                return !0;
                            }
                        };
                    },
                    "./node_modules/core-js/internals/function-to-string.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/shared.js");
                        e.exports = i("native-function-to-string", Function.toString);
                    },
                    "./node_modules/core-js/internals/get-iterator-method.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/classof.js"),
                            a = n("./node_modules/core-js/internals/iterators.js"),
                            r = n("./node_modules/core-js/internals/well-known-symbol.js")("iterator");
                        e.exports = function (e) {
                            if (null != e) return e[r] || e["@@iterator"] || a[i(e)];
                        };
                    },
                    "./node_modules/core-js/internals/global.js": function (e, t, n) {
                        (function (t) {
                            var n = "object",
                                i = function (e) {
                                    return e && e.Math == Math && e;
                                };
                            e.exports = i(typeof globalThis == n && globalThis) || i(typeof window == n && window) || i(typeof self == n && self) || i(typeof t == n && t) || Function("return this")();
                        }.call(this, n("./node_modules/webpack/buildin/global.js")));
                    },
                    "./node_modules/core-js/internals/has.js": function (e, t) {
                        var n = {}.hasOwnProperty;
                        e.exports = function (e, t) {
                            return n.call(e, t);
                        };
                    },
                    "./node_modules/core-js/internals/hidden-keys.js": function (e, t) {
                        e.exports = {};
                    },
                    "./node_modules/core-js/internals/hide.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/descriptors.js"),
                            a = n("./node_modules/core-js/internals/object-define-property.js"),
                            r = n("./node_modules/core-js/internals/create-property-descriptor.js");
                        e.exports = i
                            ? function (e, t, n) {
                                  return a.f(e, t, r(1, n));
                              }
                            : function (e, t, n) {
                                  return (e[t] = n), e;
                              };
                    },
                    "./node_modules/core-js/internals/html.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/global.js").document;
                        e.exports = i && i.documentElement;
                    },
                    "./node_modules/core-js/internals/ie8-dom-define.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/descriptors.js"),
                            a = n("./node_modules/core-js/internals/fails.js"),
                            r = n("./node_modules/core-js/internals/document-create-element.js");
                        e.exports =
                            !i &&
                            !a(function () {
                                return (
                                    7 !=
                                    Object.defineProperty(r("div"), "a", {
                                        get: function () {
                                            return 7;
                                        },
                                    }).a
                                );
                            });
                    },
                    "./node_modules/core-js/internals/indexed-object.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/fails.js"),
                            a = n("./node_modules/core-js/internals/classof-raw.js"),
                            r = "".split;
                        e.exports = i(function () {
                            return !Object("z").propertyIsEnumerable(0);
                        })
                            ? function (e) {
                                  return "String" == a(e) ? r.call(e, "") : Object(e);
                              }
                            : Object;
                    },
                    "./node_modules/core-js/internals/internal-state.js": function (e, t, n) {
                        var i,
                            a,
                            r,
                            l = n("./node_modules/core-js/internals/native-weak-map.js"),
                            o = n("./node_modules/core-js/internals/global.js"),
                            s = n("./node_modules/core-js/internals/is-object.js"),
                            d = n("./node_modules/core-js/internals/hide.js"),
                            u = n("./node_modules/core-js/internals/has.js"),
                            c = n("./node_modules/core-js/internals/shared-key.js"),
                            h = n("./node_modules/core-js/internals/hidden-keys.js"),
                            m = o.WeakMap;
                        if (l) {
                            var f = new m(),
                                p = f.get,
                                _ = f.has,
                                g = f.set;
                            (i = function (e, t) {
                                return g.call(f, e, t), t;
                            }),
                                (a = function (e) {
                                    return p.call(f, e) || {};
                                }),
                                (r = function (e) {
                                    return _.call(f, e);
                                });
                        } else {
                            var y = c("state");
                            (h[y] = !0),
                                (i = function (e, t) {
                                    return d(e, y, t), t;
                                }),
                                (a = function (e) {
                                    return u(e, y) ? e[y] : {};
                                }),
                                (r = function (e) {
                                    return u(e, y);
                                });
                        }
                        e.exports = {
                            set: i,
                            get: a,
                            has: r,
                            enforce: function (e) {
                                return r(e) ? a(e) : i(e, {});
                            },
                            getterFor: function (e) {
                                return function (t) {
                                    var n;
                                    if (!s(t) || (n = a(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                                    return n;
                                };
                            },
                        };
                    },
                    "./node_modules/core-js/internals/is-array-iterator-method.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/well-known-symbol.js"),
                            a = n("./node_modules/core-js/internals/iterators.js"),
                            r = i("iterator"),
                            l = Array.prototype;
                        e.exports = function (e) {
                            return void 0 !== e && (a.Array === e || l[r] === e);
                        };
                    },
                    "./node_modules/core-js/internals/is-forced.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/fails.js"),
                            a = /#|\.prototype\./,
                            r = function (e, t) {
                                var n = o[l(e)];
                                return n == d || (n != s && ("function" == typeof t ? i(t) : !!t));
                            },
                            l = (r.normalize = function (e) {
                                return String(e).replace(a, ".").toLowerCase();
                            }),
                            o = (r.data = {}),
                            s = (r.NATIVE = "N"),
                            d = (r.POLYFILL = "P");
                        e.exports = r;
                    },
                    "./node_modules/core-js/internals/is-object.js": function (e, t) {
                        e.exports = function (e) {
                            return "object" == typeof e ? null !== e : "function" == typeof e;
                        };
                    },
                    "./node_modules/core-js/internals/is-pure.js": function (e, t) {
                        e.exports = !1;
                    },
                    "./node_modules/core-js/internals/iterators-core.js": function (e, t, n) {
                        "use strict";
                        var i,
                            a,
                            r,
                            l = n("./node_modules/core-js/internals/object-get-prototype-of.js"),
                            o = n("./node_modules/core-js/internals/hide.js"),
                            s = n("./node_modules/core-js/internals/has.js"),
                            d = n("./node_modules/core-js/internals/well-known-symbol.js"),
                            u = n("./node_modules/core-js/internals/is-pure.js"),
                            c = d("iterator"),
                            h = !1;
                        [].keys && ("next" in (r = [].keys()) ? (a = l(l(r))) !== Object.prototype && (i = a) : (h = !0)),
                            null == i && (i = {}),
                            u ||
                                s(i, c) ||
                                o(i, c, function () {
                                    return this;
                                }),
                            (e.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: h });
                    },
                    "./node_modules/core-js/internals/iterators.js": function (e, t) {
                        e.exports = {};
                    },
                    "./node_modules/core-js/internals/native-symbol.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/fails.js");
                        e.exports =
                            !!Object.getOwnPropertySymbols &&
                            !i(function () {
                                return !String(Symbol());
                            });
                    },
                    "./node_modules/core-js/internals/native-weak-map.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/global.js"),
                            a = n("./node_modules/core-js/internals/function-to-string.js"),
                            r = i.WeakMap;
                        e.exports = "function" == typeof r && /native code/.test(a.call(r));
                    },
                    "./node_modules/core-js/internals/object-create.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/an-object.js"),
                            a = n("./node_modules/core-js/internals/object-define-properties.js"),
                            r = n("./node_modules/core-js/internals/enum-bug-keys.js"),
                            l = n("./node_modules/core-js/internals/hidden-keys.js"),
                            o = n("./node_modules/core-js/internals/html.js"),
                            s = n("./node_modules/core-js/internals/document-create-element.js"),
                            d = n("./node_modules/core-js/internals/shared-key.js")("IE_PROTO"),
                            u = function () {},
                            c = function () {
                                var e,
                                    t = s("iframe"),
                                    n = r.length;
                                for (t.style.display = "none", o.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write("<script>document.F=Object</script>"), e.close(), c = e.F; n--; )
                                    delete c.prototype[r[n]];
                                return c();
                            };
                        (e.exports =
                            Object.create ||
                            function (e, t) {
                                var n;
                                return null !== e ? ((u.prototype = i(e)), (n = new u()), (u.prototype = null), (n[d] = e)) : (n = c()), void 0 === t ? n : a(n, t);
                            }),
                            (l[d] = !0);
                    },
                    "./node_modules/core-js/internals/object-define-properties.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/descriptors.js"),
                            a = n("./node_modules/core-js/internals/object-define-property.js"),
                            r = n("./node_modules/core-js/internals/an-object.js"),
                            l = n("./node_modules/core-js/internals/object-keys.js");
                        e.exports = i
                            ? Object.defineProperties
                            : function (e, t) {
                                  r(e);
                                  for (var n, i = l(t), o = i.length, s = 0; o > s; ) a.f(e, (n = i[s++]), t[n]);
                                  return e;
                              };
                    },
                    "./node_modules/core-js/internals/object-define-property.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/descriptors.js"),
                            a = n("./node_modules/core-js/internals/ie8-dom-define.js"),
                            r = n("./node_modules/core-js/internals/an-object.js"),
                            l = n("./node_modules/core-js/internals/to-primitive.js"),
                            o = Object.defineProperty;
                        t.f = i
                            ? o
                            : function (e, t, n) {
                                  if ((r(e), (t = l(t, !0)), r(n), a))
                                      try {
                                          return o(e, t, n);
                                      } catch (e) {}
                                  if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                                  return "value" in n && (e[t] = n.value), e;
                              };
                    },
                    "./node_modules/core-js/internals/object-get-own-property-descriptor.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/descriptors.js"),
                            a = n("./node_modules/core-js/internals/object-property-is-enumerable.js"),
                            r = n("./node_modules/core-js/internals/create-property-descriptor.js"),
                            l = n("./node_modules/core-js/internals/to-indexed-object.js"),
                            o = n("./node_modules/core-js/internals/to-primitive.js"),
                            s = n("./node_modules/core-js/internals/has.js"),
                            d = n("./node_modules/core-js/internals/ie8-dom-define.js"),
                            u = Object.getOwnPropertyDescriptor;
                        t.f = i
                            ? u
                            : function (e, t) {
                                  if (((e = l(e)), (t = o(t, !0)), d))
                                      try {
                                          return u(e, t);
                                      } catch (e) {}
                                  if (s(e, t)) return r(!a.f.call(e, t), e[t]);
                              };
                    },
                    "./node_modules/core-js/internals/object-get-own-property-names.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/object-keys-internal.js"),
                            a = n("./node_modules/core-js/internals/enum-bug-keys.js").concat("length", "prototype");
                        t.f =
                            Object.getOwnPropertyNames ||
                            function (e) {
                                return i(e, a);
                            };
                    },
                    "./node_modules/core-js/internals/object-get-own-property-symbols.js": function (e, t) {
                        t.f = Object.getOwnPropertySymbols;
                    },
                    "./node_modules/core-js/internals/object-get-prototype-of.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/has.js"),
                            a = n("./node_modules/core-js/internals/to-object.js"),
                            r = n("./node_modules/core-js/internals/shared-key.js"),
                            l = n("./node_modules/core-js/internals/correct-prototype-getter.js"),
                            o = r("IE_PROTO"),
                            s = Object.prototype;
                        e.exports = l
                            ? Object.getPrototypeOf
                            : function (e) {
                                  return (e = a(e)), i(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null;
                              };
                    },
                    "./node_modules/core-js/internals/object-keys-internal.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/has.js"),
                            a = n("./node_modules/core-js/internals/to-indexed-object.js"),
                            r = n("./node_modules/core-js/internals/array-includes.js"),
                            l = n("./node_modules/core-js/internals/hidden-keys.js"),
                            o = r(!1);
                        e.exports = function (e, t) {
                            var n,
                                r = a(e),
                                s = 0,
                                d = [];
                            for (n in r) !i(l, n) && i(r, n) && d.push(n);
                            for (; t.length > s; ) i(r, (n = t[s++])) && (~o(d, n) || d.push(n));
                            return d;
                        };
                    },
                    "./node_modules/core-js/internals/object-keys.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/object-keys-internal.js"),
                            a = n("./node_modules/core-js/internals/enum-bug-keys.js");
                        e.exports =
                            Object.keys ||
                            function (e) {
                                return i(e, a);
                            };
                    },
                    "./node_modules/core-js/internals/object-property-is-enumerable.js": function (e, t, n) {
                        "use strict";
                        var i = {}.propertyIsEnumerable,
                            a = Object.getOwnPropertyDescriptor,
                            r = a && !i.call({ 1: 2 }, 1);
                        t.f = r
                            ? function (e) {
                                  var t = a(this, e);
                                  return !!t && t.enumerable;
                              }
                            : i;
                    },
                    "./node_modules/core-js/internals/object-set-prototype-of.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");
                        e.exports =
                            Object.setPrototypeOf ||
                            ("__proto__" in {}
                                ? (function () {
                                      var e,
                                          t = !1,
                                          n = {};
                                      try {
                                          (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), (t = n instanceof Array);
                                      } catch (e) {}
                                      return function (n, a) {
                                          return i(n, a), t ? e.call(n, a) : (n.__proto__ = a), n;
                                      };
                                  })()
                                : void 0);
                    },
                    "./node_modules/core-js/internals/own-keys.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/global.js"),
                            a = n("./node_modules/core-js/internals/object-get-own-property-names.js"),
                            r = n("./node_modules/core-js/internals/object-get-own-property-symbols.js"),
                            l = n("./node_modules/core-js/internals/an-object.js"),
                            o = i.Reflect;
                        e.exports =
                            (o && o.ownKeys) ||
                            function (e) {
                                var t = a.f(l(e)),
                                    n = r.f;
                                return n ? t.concat(n(e)) : t;
                            };
                    },
                    "./node_modules/core-js/internals/path.js": function (e, t, n) {
                        e.exports = n("./node_modules/core-js/internals/global.js");
                    },
                    "./node_modules/core-js/internals/redefine.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/global.js"),
                            a = n("./node_modules/core-js/internals/shared.js"),
                            r = n("./node_modules/core-js/internals/hide.js"),
                            l = n("./node_modules/core-js/internals/has.js"),
                            o = n("./node_modules/core-js/internals/set-global.js"),
                            s = n("./node_modules/core-js/internals/function-to-string.js"),
                            d = n("./node_modules/core-js/internals/internal-state.js"),
                            u = d.get,
                            c = d.enforce,
                            h = String(s).split("toString");
                        a("inspectSource", function (e) {
                            return s.call(e);
                        }),
                            (e.exports = function (e, t, n, a) {
                                var s = !!a && !!a.unsafe,
                                    d = !!a && !!a.enumerable,
                                    u = !!a && !!a.noTargetGet;
                                "function" == typeof n && ("string" != typeof t || l(n, "name") || r(n, "name", t), (c(n).source = h.join("string" == typeof t ? t : ""))),
                                    e !== i ? (s ? !u && e[t] && (d = !0) : delete e[t], d ? (e[t] = n) : r(e, t, n)) : d ? (e[t] = n) : o(t, n);
                            })(Function.prototype, "toString", function () {
                                return ("function" == typeof this && u(this).source) || s.call(this);
                            });
                    },
                    "./node_modules/core-js/internals/require-object-coercible.js": function (e, t) {
                        e.exports = function (e) {
                            if (null == e) throw TypeError("Can't call method on " + e);
                            return e;
                        };
                    },
                    "./node_modules/core-js/internals/set-global.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/global.js"),
                            a = n("./node_modules/core-js/internals/hide.js");
                        e.exports = function (e, t) {
                            try {
                                a(i, e, t);
                            } catch (n) {
                                i[e] = t;
                            }
                            return t;
                        };
                    },
                    "./node_modules/core-js/internals/set-to-string-tag.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/object-define-property.js").f,
                            a = n("./node_modules/core-js/internals/has.js"),
                            r = n("./node_modules/core-js/internals/well-known-symbol.js")("toStringTag");
                        e.exports = function (e, t, n) {
                            e && !a((e = n ? e : e.prototype), r) && i(e, r, { configurable: !0, value: t });
                        };
                    },
                    "./node_modules/core-js/internals/shared-key.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/shared.js"),
                            a = n("./node_modules/core-js/internals/uid.js"),
                            r = i("keys");
                        e.exports = function (e) {
                            return r[e] || (r[e] = a(e));
                        };
                    },
                    "./node_modules/core-js/internals/shared.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/global.js"),
                            a = n("./node_modules/core-js/internals/set-global.js"),
                            r = n("./node_modules/core-js/internals/is-pure.js"),
                            l = "__core-js_shared__",
                            o = i[l] || a(l, {});
                        (e.exports = function (e, t) {
                            return o[e] || (o[e] = void 0 !== t ? t : {});
                        })("versions", []).push({ version: "3.1.3", mode: r ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
                    },
                    "./node_modules/core-js/internals/string-at.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/to-integer.js"),
                            a = n("./node_modules/core-js/internals/require-object-coercible.js");
                        e.exports = function (e, t, n) {
                            var r,
                                l,
                                o = String(a(e)),
                                s = i(t),
                                d = o.length;
                            return s < 0 || s >= d
                                ? n
                                    ? ""
                                    : void 0
                                : (r = o.charCodeAt(s)) < 55296 || r > 56319 || s + 1 === d || (l = o.charCodeAt(s + 1)) < 56320 || l > 57343
                                ? n
                                    ? o.charAt(s)
                                    : r
                                : n
                                ? o.slice(s, s + 2)
                                : l - 56320 + ((r - 55296) << 10) + 65536;
                        };
                    },
                    "./node_modules/core-js/internals/to-absolute-index.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/to-integer.js"),
                            a = Math.max,
                            r = Math.min;
                        e.exports = function (e, t) {
                            var n = i(e);
                            return n < 0 ? a(n + t, 0) : r(n, t);
                        };
                    },
                    "./node_modules/core-js/internals/to-indexed-object.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/indexed-object.js"),
                            a = n("./node_modules/core-js/internals/require-object-coercible.js");
                        e.exports = function (e) {
                            return i(a(e));
                        };
                    },
                    "./node_modules/core-js/internals/to-integer.js": function (e, t) {
                        var n = Math.ceil,
                            i = Math.floor;
                        e.exports = function (e) {
                            return isNaN((e = +e)) ? 0 : (e > 0 ? i : n)(e);
                        };
                    },
                    "./node_modules/core-js/internals/to-length.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/to-integer.js"),
                            a = Math.min;
                        e.exports = function (e) {
                            return e > 0 ? a(i(e), 9007199254740991) : 0;
                        };
                    },
                    "./node_modules/core-js/internals/to-object.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/require-object-coercible.js");
                        e.exports = function (e) {
                            return Object(i(e));
                        };
                    },
                    "./node_modules/core-js/internals/to-primitive.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/is-object.js");
                        e.exports = function (e, t) {
                            if (!i(e)) return e;
                            var n, a;
                            if (t && "function" == typeof (n = e.toString) && !i((a = n.call(e)))) return a;
                            if ("function" == typeof (n = e.valueOf) && !i((a = n.call(e)))) return a;
                            if (!t && "function" == typeof (n = e.toString) && !i((a = n.call(e)))) return a;
                            throw TypeError("Can't convert object to primitive value");
                        };
                    },
                    "./node_modules/core-js/internals/uid.js": function (e, t) {
                        var n = 0,
                            i = Math.random();
                        e.exports = function (e) {
                            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36));
                        };
                    },
                    "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/is-object.js"),
                            a = n("./node_modules/core-js/internals/an-object.js");
                        e.exports = function (e, t) {
                            if ((a(e), !i(t) && null !== t)) throw TypeError("Can't set " + String(t) + " as a prototype");
                        };
                    },
                    "./node_modules/core-js/internals/well-known-symbol.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/global.js"),
                            a = n("./node_modules/core-js/internals/shared.js"),
                            r = n("./node_modules/core-js/internals/uid.js"),
                            l = n("./node_modules/core-js/internals/native-symbol.js"),
                            o = i.Symbol,
                            s = a("wks");
                        e.exports = function (e) {
                            return s[e] || (s[e] = (l && o[e]) || (l ? o : r)("Symbol." + e));
                        };
                    },
                    "./node_modules/core-js/modules/es.array.from.js": function (e, t, n) {
                        var i = n("./node_modules/core-js/internals/export.js"),
                            a = n("./node_modules/core-js/internals/array-from.js");
                        i(
                            {
                                target: "Array",
                                stat: !0,
                                forced: !n("./node_modules/core-js/internals/check-correctness-of-iteration.js")(function (e) {
                                    Array.from(e);
                                }),
                            },
                            { from: a }
                        );
                    },
                    "./node_modules/core-js/modules/es.string.iterator.js": function (e, t, n) {
                        "use strict";
                        var i = n("./node_modules/core-js/internals/string-at.js"),
                            a = n("./node_modules/core-js/internals/internal-state.js"),
                            r = n("./node_modules/core-js/internals/define-iterator.js"),
                            l = "String Iterator",
                            o = a.set,
                            s = a.getterFor(l);
                        r(
                            String,
                            "String",
                            function (e) {
                                o(this, { type: l, string: String(e), index: 0 });
                            },
                            function () {
                                var e,
                                    t = s(this),
                                    n = t.string,
                                    a = t.index;
                                return a >= n.length ? { value: void 0, done: !0 } : ((e = i(n, a, !0)), (t.index += e.length), { value: e, done: !1 });
                            }
                        );
                    },
                    "./node_modules/webpack/buildin/global.js": function (e, t) {
                        var n;
                        n = (function () {
                            return this;
                        })();
                        try {
                            n = n || Function("return this")() || (0, eval)("this");
                        } catch (e) {
                            "object" == typeof window && (n = window);
                        }
                        e.exports = n;
                    },
                    "./src/default-attrs.json": function (e) {
                        e.exports = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };
                    },
                    "./src/icon.js": function (e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 });
                        var i =
                                Object.assign ||
                                function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = arguments[t];
                                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                    }
                                    return e;
                                },
                            a = (function () {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var i = t[n];
                                        (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                                    }
                                }
                                return function (t, n, i) {
                                    return n && e(t.prototype, n), i && e(t, i), t;
                                };
                            })(),
                            r = o(n("./node_modules/classnames/dedupe.js")),
                            l = o(n("./src/default-attrs.json"));
                        function o(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        function s(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }
                        var d = (function () {
                            function e(t, n) {
                                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                                s(this, e), (this.name = t), (this.contents = n), (this.tags = a), (this.attrs = i({}, l.default, { class: "feather feather-" + t }));
                            }
                            return (
                                a(e, [
                                    {
                                        key: "toSvg",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                t = i({}, this.attrs, e, { class: (0, r.default)(this.attrs.class, e.class) });
                                            return "<svg " + u(t) + ">" + this.contents + "</svg>";
                                        },
                                    },
                                    {
                                        key: "toString",
                                        value: function () {
                                            return this.contents;
                                        },
                                    },
                                ]),
                                e
                            );
                        })();
                        function u(e) {
                            return Object.keys(e)
                                .map(function (t) {
                                    return t + '="' + e[t] + '"';
                                })
                                .join(" ");
                        }
                        t.default = d;
                    },
                    "./src/icons.js": function (e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 });
                        var i = l(n("./src/icon.js")),
                            a = l(n("./dist/icons.json")),
                            r = l(n("./src/tags.json"));
                        function l(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        t.default = Object.keys(a.default)
                            .map(function (e) {
                                return new i.default(e, a.default[e], r.default[e]);
                            })
                            .reduce(function (e, t) {
                                return (e[t.name] = t), e;
                            }, {});
                    },
                    "./src/index.js": function (e, t, n) {
                        "use strict";
                        var i = l(n("./src/icons.js")),
                            a = l(n("./src/to-svg.js")),
                            r = l(n("./src/replace.js"));
                        function l(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        e.exports = { icons: i.default, toSvg: a.default, replace: r.default };
                    },
                    "./src/replace.js": function (e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 });
                        var i =
                                Object.assign ||
                                function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = arguments[t];
                                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                                    }
                                    return e;
                                },
                            a = l(n("./node_modules/classnames/dedupe.js")),
                            r = l(n("./src/icons.js"));
                        function l(e) {
                            return e && e.__esModule ? e : { default: e };
                        }
                        function o(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = s(e),
                                l = n["data-feather"];
                            delete n["data-feather"];
                            var o = r.default[l].toSvg(i({}, t, n, { class: (0, a.default)(t.class, n.class) })),
                                d = new DOMParser().parseFromString(o, "image/svg+xml"),
                                u = d.querySelector("svg");
                            e.parentNode.replaceChild(u, e);
                        }
                        function s(e) {
                            return Array.from(e.attributes).reduce(function (e, t) {
                                return (e[t.name] = t.value), e;
                            }, {});
                        }
                        t.default = function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if ("undefined" == typeof document) throw new Error("`feather.replace()` only works in a browser environment.");
                            var t = document.querySelectorAll("[data-feather]");
                            Array.from(t).forEach(function (t) {
                                return o(t, e);
                            });
                        };
                    },
                    "./src/tags.json": function (e) {
                        e.exports = {
                            clipboard: ["copy"],
                            "file-text": ["data", "txt", "pdf"],
                            github: ["logo", "version control"],
                            gitlab: ["logo", "version control"],
                            settings: ["cog", "edit", "gear", "preferences"],
                            target: ["logo", "bullseye"],
                            thermometer: ["temperature", "celsius", "fahrenheit", "weather"],
                            twitter: ["logo", "social"],
                            user: ["person", "account"],
                            users: ["group"],
                        };
                    },
                    "./src/to-svg.js": function (e, t, n) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 });
                        var i,
                            a = n("./src/icons.js"),
                            r = (i = a) && i.__esModule ? i : { default: i };
                        t.default = function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if ((console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."), !e)) throw new Error("The required `key` (icon name) parameter is missing.");
                            if (!r.default[e]) throw new Error("No icon matching '" + e + "'. See the complete list of icons at https://feathericons.com");
                            return r.default[e].toSvg(t);
                        };
                    },
                    0: function (e, t, n) {
                        n("./node_modules/core-js/es/array/from.js"), (e.exports = n("./src/index.js"));
                    },
                });
            }),
            (e.exports = i());
    },
    function (e, t, n) {
        (function (t) {
            var n = "Expected a function",
                i = /^\s+|\s+$/g,
                a = /^[-+]0x[0-9a-f]+$/i,
                r = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                o = parseInt,
                s = "object" == typeof t && t && t.Object === Object && t,
                d = "object" == typeof self && self && self.Object === Object && self,
                u = s || d || Function("return this")(),
                c = Object.prototype.toString,
                h = Math.max,
                m = Math.min,
                f = function () {
                    return u.Date.now();
                };
            function p(e, t, i) {
                var a,
                    r,
                    l,
                    o,
                    s,
                    d,
                    u = 0,
                    c = !1,
                    p = !1,
                    y = !0;
                if ("function" != typeof e) throw new TypeError(n);
                function v(t) {
                    var n = a,
                        i = r;
                    return (a = r = void 0), (u = t), (o = e.apply(i, n));
                }
                function M(e) {
                    return (u = e), (s = setTimeout(x, t)), c ? v(e) : o;
                }
                function b(e) {
                    var n = e - d;
                    return void 0 === d || n >= t || n < 0 || (p && e - u >= l);
                }
                function x() {
                    var e = f();
                    if (b(e)) return L(e);
                    s = setTimeout(
                        x,
                        (function (e) {
                            var n = t - (e - d);
                            return p ? m(n, l - (e - u)) : n;
                        })(e)
                    );
                }
                function L(e) {
                    return (s = void 0), y && a ? v(e) : ((a = r = void 0), o);
                }
                function w() {
                    var e = f(),
                        n = b(e);
                    if (((a = arguments), (r = this), (d = e), n)) {
                        if (void 0 === s) return M(d);
                        if (p) return (s = setTimeout(x, t)), v(d);
                    }
                    return void 0 === s && (s = setTimeout(x, t)), o;
                }
                return (
                    (t = g(t) || 0),
                    _(i) && ((c = !!i.leading), (l = (p = "maxWait" in i) ? h(g(i.maxWait) || 0, t) : l), (y = "trailing" in i ? !!i.trailing : y)),
                    (w.cancel = function () {
                        void 0 !== s && clearTimeout(s), (u = 0), (a = d = r = s = void 0);
                    }),
                    (w.flush = function () {
                        return void 0 === s ? o : L(f());
                    }),
                    w
                );
            }
            function _(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t);
            }
            function g(e) {
                if ("number" == typeof e) return e;
                if (
                    (function (e) {
                        return (
                            "symbol" == typeof e ||
                            ((function (e) {
                                return !!e && "object" == typeof e;
                            })(e) &&
                                "[object Symbol]" == c.call(e))
                        );
                    })(e)
                )
                    return NaN;
                if (_(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = _(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(i, "");
                var n = r.test(e);
                return n || l.test(e) ? o(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e;
            }
            e.exports = function (e, t, i) {
                var a = !0,
                    r = !0;
                if ("function" != typeof e) throw new TypeError(n);
                return _(i) && ((a = "leading" in i ? !!i.leading : a), (r = "trailing" in i ? !!i.trailing : r)), p(e, t, { leading: a, maxWait: t, trailing: r });
            };
        }.call(this, n(11)));
    },
    function (e, t, n) {
        (function (t) {
            var n = /^\s+|\s+$/g,
                i = /^[-+]0x[0-9a-f]+$/i,
                a = /^0b[01]+$/i,
                r = /^0o[0-7]+$/i,
                l = parseInt,
                o = "object" == typeof t && t && t.Object === Object && t,
                s = "object" == typeof self && self && self.Object === Object && self,
                d = o || s || Function("return this")(),
                u = Object.prototype.toString,
                c = Math.max,
                h = Math.min,
                m = function () {
                    return d.Date.now();
                };
            function f(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t);
            }
            function p(e) {
                if ("number" == typeof e) return e;
                if (
                    (function (e) {
                        return (
                            "symbol" == typeof e ||
                            ((function (e) {
                                return !!e && "object" == typeof e;
                            })(e) &&
                                "[object Symbol]" == u.call(e))
                        );
                    })(e)
                )
                    return NaN;
                if (f(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = f(t) ? t + "" : t;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(n, "");
                var o = a.test(e);
                return o || r.test(e) ? l(e.slice(2), o ? 2 : 8) : i.test(e) ? NaN : +e;
            }
            e.exports = function (e, t, n) {
                var i,
                    a,
                    r,
                    l,
                    o,
                    s,
                    d = 0,
                    u = !1,
                    _ = !1,
                    g = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                function y(t) {
                    var n = i,
                        r = a;
                    return (i = a = void 0), (d = t), (l = e.apply(r, n));
                }
                function v(e) {
                    return (d = e), (o = setTimeout(b, t)), u ? y(e) : l;
                }
                function M(e) {
                    var n = e - s;
                    return void 0 === s || n >= t || n < 0 || (_ && e - d >= r);
                }
                function b() {
                    var e = m();
                    if (M(e)) return x(e);
                    o = setTimeout(
                        b,
                        (function (e) {
                            var n = t - (e - s);
                            return _ ? h(n, r - (e - d)) : n;
                        })(e)
                    );
                }
                function x(e) {
                    return (o = void 0), g && i ? y(e) : ((i = a = void 0), l);
                }
                function L() {
                    var e = m(),
                        n = M(e);
                    if (((i = arguments), (a = this), (s = e), n)) {
                        if (void 0 === o) return v(s);
                        if (_) return (o = setTimeout(b, t)), y(s);
                    }
                    return void 0 === o && (o = setTimeout(b, t)), l;
                }
                return (
                    (t = p(t) || 0),
                    f(n) && ((u = !!n.leading), (r = (_ = "maxWait" in n) ? c(p(n.maxWait) || 0, t) : r), (g = "trailing" in n ? !!n.trailing : g)),
                    (L.cancel = function () {
                        void 0 !== o && clearTimeout(o), (d = 0), (i = s = a = o = void 0);
                    }),
                    (L.flush = function () {
                        return void 0 === o ? l : x(m());
                    }),
                    L
                );
            };
        }.call(this, n(11)));
    },
    function (e, t, n) {
        var i = n(51)("wks"),
            a = n(52),
            r = n(15).Symbol,
            l = "function" == typeof r;
        (e.exports = function (e) {
            return i[e] || (i[e] = (l && r[e]) || (l ? r : a)("Symbol." + e));
        }).store = i;
    },
    function (e, t, n) {
        var i = n(30),
            a = n(15),
            r = "__core-js_shared__",
            l = a[r] || (a[r] = {});
        (e.exports = function (e, t) {
            return l[e] || (l[e] = void 0 !== t ? t : {});
        })("versions", []).push({ version: i.version, mode: n(237) ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
    },
    function (e, t) {
        var n = 0,
            i = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36));
        };
    },
    function (e, t, n) {
        "use strict";
        var i,
            a,
            r = n(240),
            l = RegExp.prototype.exec,
            o = String.prototype.replace,
            s = l,
            d = ((i = /a/), (a = /b*/g), l.call(i, "a"), l.call(a, "a"), 0 !== i.lastIndex || 0 !== a.lastIndex),
            u = void 0 !== /()??/.exec("")[1];
        (d || u) &&
            (s = function (e) {
                var t,
                    n,
                    i,
                    a,
                    s = this;
                return (
                    u && (n = new RegExp("^" + s.source + "$(?!\\s)", r.call(s))),
                    d && (t = s.lastIndex),
                    (i = l.call(s, e)),
                    d && i && (s.lastIndex = s.global ? i.index + i[0].length : t),
                    u &&
                        i &&
                        i.length > 1 &&
                        o.call(i[0], n, function () {
                            for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (i[a] = void 0);
                        }),
                    i
                );
            }),
            (e.exports = s);
    },
    function (e, t, n) {
        var i = n(15),
            a = n(31),
            r = n(247),
            l = n(52)("src"),
            o = n(248),
            s = "toString",
            d = ("" + o).split(s);
        (n(30).inspectSource = function (e) {
            return o.call(e);
        }),
            (e.exports = function (e, t, n, o) {
                var s = "function" == typeof n;
                s && (r(n, "name") || a(n, "name", t)), e[t] !== n && (s && (r(n, l) || a(n, l, e[t] ? "" + e[t] : d.join(String(t)))), e === i ? (e[t] = n) : o ? (e[t] ? (e[t] = n) : a(e, t, n)) : (delete e[t], a(e, t, n)));
            })(Function.prototype, s, function () {
                return ("function" == typeof this && this[l]) || o.call(this);
            });
    },
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {
        var i = n(9),
            a = n(189),
            r = n(34),
            l = n(20),
            o = n(190),
            s = n(4),
            d = n(191),
            u = Object.getOwnPropertyDescriptor;
        t.f = i
            ? u
            : function (e, t) {
                  if (((e = l(e)), (t = o(t, !0)), d))
                      try {
                          return u(e, t);
                      } catch (e) {}
                  if (s(e, t)) return r(!a.f.call(e, t), e[t]);
              };
    },
    function (e, t, n) {
        "use strict";
        var i = {}.propertyIsEnumerable,
            a = Object.getOwnPropertyDescriptor,
            r = a && !i.call({ 1: 2 }, 1);
        t.f = r
            ? function (e) {
                  var t = a(this, e);
                  return !!t && t.enumerable;
              }
            : i;
    },
    function (e, t, n) {
        var i = n(5);
        e.exports = function (e, t) {
            if (!i(e)) return e;
            var n, a;
            if (t && "function" == typeof (n = e.toString) && !i((a = n.call(e)))) return a;
            if ("function" == typeof (n = e.valueOf) && !i((a = n.call(e)))) return a;
            if (!t && "function" == typeof (n = e.toString) && !i((a = n.call(e)))) return a;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (e, t, n) {
        var i = n(9),
            a = n(2),
            r = n(192);
        e.exports =
            !i &&
            !a(function () {
                return (
                    7 !=
                    Object.defineProperty(r("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (e, t, n) {
        var i = n(1),
            a = n(5),
            r = i.document,
            l = a(r) && a(r.createElement);
        e.exports = function (e) {
            return l ? r.createElement(e) : {};
        };
    },
    function (e, t, n) {
        var i = n(194),
            a = Function.toString;
        "function" != typeof i.inspectSource &&
            (i.inspectSource = function (e) {
                return a.call(e);
            }),
            (e.exports = i.inspectSource);
    },
    function (e, t, n) {
        var i = n(1),
            a = n(35),
            r = "__core-js_shared__",
            l = i[r] || a(r, {});
        e.exports = l;
    },
    function (e, t, n) {
        var i = n(1),
            a = n(193),
            r = i.WeakMap;
        e.exports = "function" == typeof r && /native code/.test(a(r));
    },
    function (e, t, n) {
        var i = n(37),
            a = n(194);
        (e.exports = function (e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {});
        })("versions", []).push({ version: "3.6.5", mode: i ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" });
    },
    function (e, t, n) {
        var i = n(4),
            a = n(20),
            r = n(258).indexOf,
            l = n(23);
        e.exports = function (e, t) {
            var n,
                o = a(e),
                s = 0,
                d = [];
            for (n in o) !i(l, n) && i(o, n) && d.push(n);
            for (; t.length > s; ) i(o, (n = t[s++])) && (~r(d, n) || d.push(n));
            return d;
        };
    },
    function (e, t) {
        t.f = Object.getOwnPropertySymbols;
    },
    function (e, t, n) {
        var i = n(2),
            a = /#|\.prototype\./,
            r = function (e, t) {
                var n = o[l(e)];
                return n == d || (n != s && ("function" == typeof t ? i(t) : !!t));
            },
            l = (r.normalize = function (e) {
                return String(e).replace(a, ".").toLowerCase();
            }),
            o = (r.data = {}),
            s = (r.NATIVE = "N"),
            d = (r.POLYFILL = "P");
        e.exports = r;
    },
    function (e, t, n) {
        "use strict";
        var i = n(41).forEach,
            a = n(204),
            r = n(42),
            l = a("forEach"),
            o = r("forEach");
        e.exports =
            l && o
                ? [].forEach
                : function (e) {
                      return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
                  };
    },
    function (e, t, n) {
        var i = n(202);
        e.exports = function (e, t, n) {
            if ((i(e), void 0 === t)) return e;
            switch (n) {
                case 0:
                    return function () {
                        return e.call(t);
                    };
                case 1:
                    return function (n) {
                        return e.call(t, n);
                    };
                case 2:
                    return function (n, i) {
                        return e.call(t, n, i);
                    };
                case 3:
                    return function (n, i, a) {
                        return e.call(t, n, i, a);
                    };
            }
            return function () {
                return e.apply(t, arguments);
            };
        };
    },
    function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e;
        };
    },
    function (e, t, n) {
        var i = n(2);
        e.exports =
            !!Object.getOwnPropertySymbols &&
            !i(function () {
                return !String(Symbol());
            });
    },
    function (e, t, n) {
        "use strict";
        var i = n(2);
        e.exports = function (e, t) {
            var n = [][e];
            return (
                !!n &&
                i(function () {
                    n.call(
                        null,
                        t ||
                            function () {
                                throw 1;
                            },
                        1
                    );
                })
            );
        };
    },
    function (e, t) {
        e.exports = {};
    },
    function (e, t, n) {
        "use strict";
        var i = n(20),
            a = n(268),
            r = n(18),
            l = n(16),
            o = n(209),
            s = "Array Iterator",
            d = l.set,
            u = l.getterFor(s);
        (e.exports = o(
            Array,
            "Array",
            function (e, t) {
                d(this, { type: s, target: i(e), index: 0, kind: t });
            },
            function () {
                var e = u(this),
                    t = e.target,
                    n = e.kind,
                    i = e.index++;
                return !t || i >= t.length ? ((e.target = void 0), { value: void 0, done: !0 }) : "keys" == n ? { value: i, done: !1 } : "values" == n ? { value: t[i], done: !1 } : { value: [i, t[i]], done: !1 };
            },
            "values"
        )),
            (r.Arguments = r.Array),
            a("keys"),
            a("values"),
            a("entries");
    },
    function (e, t, n) {
        var i,
            a = n(6),
            r = n(269),
            l = n(40),
            o = n(23),
            s = n(270),
            d = n(192),
            u = n(36),
            c = u("IE_PROTO"),
            h = function () {},
            m = function (e) {
                return "<script>" + e + "</" + "script>";
            },
            f = function () {
                try {
                    i = document.domain && new ActiveXObject("htmlfile");
                } catch (e) {}
                var e, t;
                f = i
                    ? (function (e) {
                          e.write(m("")), e.close();
                          var t = e.parentWindow.Object;
                          return (e = null), t;
                      })(i)
                    : (((t = d("iframe")).style.display = "none"), s.appendChild(t), (t.src = String("javascript:")), (e = t.contentWindow.document).open(), e.write(m("document.F=Object")), e.close(), e.F);
                for (var n = l.length; n--; ) delete f.prototype[l[n]];
                return f();
            };
        (o[c] = !0),
            (e.exports =
                Object.create ||
                function (e, t) {
                    var n;
                    return null !== e ? ((h.prototype = a(e)), (n = new h()), (h.prototype = null), (n[c] = e)) : (n = f()), void 0 === t ? n : r(n, t);
                });
    },
    function (e, t, n) {
        var i = n(197),
            a = n(40);
        e.exports =
            Object.keys ||
            function (e) {
                return i(e, a);
            };
    },
    function (e, t, n) {
        "use strict";
        var i = n(8),
            a = n(271),
            r = n(211),
            l = n(212),
            o = n(43),
            s = n(7),
            d = n(13),
            u = n(3),
            c = n(37),
            h = n(18),
            m = n(210),
            f = m.IteratorPrototype,
            p = m.BUGGY_SAFARI_ITERATORS,
            _ = u("iterator"),
            g = "keys",
            y = "values",
            v = "entries",
            M = function () {
                return this;
            };
        e.exports = function (e, t, n, u, m, b, x) {
            a(n, t, u);
            var L,
                w,
                k,
                Y = function (e) {
                    if (e === m && E) return E;
                    if (!p && e in S) return S[e];
                    switch (e) {
                        case g:
                        case y:
                        case v:
                            return function () {
                                return new n(this, e);
                            };
                    }
                    return function () {
                        return new n(this);
                    };
                },
                D = t + " Iterator",
                T = !1,
                S = e.prototype,
                j = S[_] || S["@@iterator"] || (m && S[m]),
                E = (!p && j) || Y(m),
                H = ("Array" == t && S.entries) || j;
            if (
                (H && ((L = r(H.call(new e()))), f !== Object.prototype && L.next && (c || r(L) === f || (l ? l(L, f) : "function" != typeof L[_] && s(L, _, M)), o(L, D, !0, !0), c && (h[D] = M))),
                m == y &&
                    j &&
                    j.name !== y &&
                    ((T = !0),
                    (E = function () {
                        return j.call(this);
                    })),
                (c && !x) || S[_] === E || s(S, _, E),
                (h[t] = E),
                m)
            )
                if (((w = { values: Y(y), keys: b ? E : Y(g), entries: Y(v) }), x)) for (k in w) (p || T || !(k in S)) && d(S, k, w[k]);
                else i({ target: t, proto: !0, forced: p || T }, w);
            return w;
        };
    },
    function (e, t, n) {
        "use strict";
        var i,
            a,
            r,
            l = n(211),
            o = n(7),
            s = n(4),
            d = n(3),
            u = n(37),
            c = d("iterator"),
            h = !1;
        [].keys && ("next" in (r = [].keys()) ? (a = l(l(r))) !== Object.prototype && (i = a) : (h = !0)),
            null == i && (i = {}),
            u ||
                s(i, c) ||
                o(i, c, function () {
                    return this;
                }),
            (e.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: h });
    },
    function (e, t, n) {
        var i = n(4),
            a = n(17),
            r = n(36),
            l = n(272),
            o = r("IE_PROTO"),
            s = Object.prototype;
        e.exports = l
            ? Object.getPrototypeOf
            : function (e) {
                  return (e = a(e)), i(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null;
              };
    },
    function (e, t, n) {
        var i = n(6),
            a = n(273);
        e.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
                ? (function () {
                      var e,
                          t = !1,
                          n = {};
                      try {
                          (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), (t = n instanceof Array);
                      } catch (e) {}
                      return function (n, r) {
                          return i(n), a(r), t ? e.call(n, r) : (n.__proto__ = r), n;
                      };
                  })()
                : void 0);
    },
    function (e, t, n) {
        var i = n(44),
            a = n(22),
            r = n(3)("toStringTag"),
            l =
                "Arguments" ==
                a(
                    (function () {
                        return arguments;
                    })()
                );
        e.exports = i
            ? a
            : function (e) {
                  var t, n, i;
                  return void 0 === e
                      ? "Undefined"
                      : null === e
                      ? "Null"
                      : "string" ==
                        typeof (n = (function (e, t) {
                            try {
                                return e[t];
                            } catch (e) {}
                        })((t = Object(e)), r))
                      ? n
                      : l
                      ? a(t)
                      : "Object" == (i = a(t)) && "function" == typeof t.callee
                      ? "Arguments"
                      : i;
              };
    },
    function (e, t) {
        e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
    },
    function (e, t, n) {
        var i = n(24),
            a = n(12),
            r = function (e) {
                return function (t, n) {
                    var r,
                        l,
                        o = String(a(t)),
                        s = i(n),
                        d = o.length;
                    return s < 0 || s >= d
                        ? e
                            ? ""
                            : void 0
                        : (r = o.charCodeAt(s)) < 55296 || r > 56319 || s + 1 === d || (l = o.charCodeAt(s + 1)) < 56320 || l > 57343
                        ? e
                            ? o.charAt(s)
                            : r
                        : e
                        ? o.slice(s, s + 2)
                        : l - 56320 + ((r - 55296) << 10) + 65536;
                };
            };
        e.exports = { codeAt: r(!1), charAt: r(!0) };
    },
    function (e, t, n) {
        var i = n(13);
        e.exports = function (e, t, n) {
            for (var a in t) i(e, a, t[a], n);
            return e;
        };
    },
    function (e, t, n) {
        var i = n(6),
            a = n(285),
            r = n(14),
            l = n(201),
            o = n(286),
            s = n(287),
            d = function (e, t) {
                (this.stopped = e), (this.result = t);
            };
        (e.exports = function (e, t, n, u, c) {
            var h,
                m,
                f,
                p,
                _,
                g,
                y,
                v = l(t, n, u ? 2 : 1);
            if (c) h = e;
            else {
                if ("function" != typeof (m = o(e))) throw TypeError("Target is not iterable");
                if (a(m)) {
                    for (f = 0, p = r(e.length); p > f; f++) if ((_ = u ? v(i((y = e[f]))[0], y[1]) : v(e[f])) && _ instanceof d) return _;
                    return new d(!1);
                }
                h = m.call(e);
            }
            for (g = h.next; !(y = g.call(h)).done; ) if ("object" == typeof (_ = s(h, v, y.value, u)) && _ && _ instanceof d) return _;
            return new d(!1);
        }).stop = function (e) {
            return new d(!0, e);
        };
    },
    function (e, t) {
        e.exports = function (e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e;
        };
    },
    function (e, t, n) {
        "use strict";
        var i = n(8),
            a = n(46);
        i({ target: "RegExp", proto: !0, forced: /./.exec !== a }, { exec: a });
    },
    function (e, t, n) {
        "use strict";
        n(219);
        var i = n(13),
            a = n(2),
            r = n(3),
            l = n(46),
            o = n(7),
            s = r("species"),
            d = !a(function () {
                var e = /./;
                return (
                    (e.exec = function () {
                        var e = [];
                        return (e.groups = { a: "7" }), e;
                    }),
                    "7" !== "".replace(e, "$<a>")
                );
            }),
            u = "$0" === "a".replace(/./, "$0"),
            c = r("replace"),
            h = !!/./[c] && "" === /./[c]("a", "$0"),
            m = !a(function () {
                var e = /(?:)/,
                    t = e.exec;
                e.exec = function () {
                    return t.apply(this, arguments);
                };
                var n = "ab".split(e);
                return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
            });
        e.exports = function (e, t, n, c) {
            var f = r(e),
                p = !a(function () {
                    var t = {};
                    return (
                        (t[f] = function () {
                            return 7;
                        }),
                        7 != ""[e](t)
                    );
                }),
                _ =
                    p &&
                    !a(function () {
                        var t = !1,
                            n = /a/;
                        return (
                            "split" === e &&
                                (((n = {}).constructor = {}),
                                (n.constructor[s] = function () {
                                    return n;
                                }),
                                (n.flags = ""),
                                (n[f] = /./[f])),
                            (n.exec = function () {
                                return (t = !0), null;
                            }),
                            n[f](""),
                            !t
                        );
                    });
            if (!p || !_ || ("replace" === e && (!d || !u || h)) || ("split" === e && !m)) {
                var g = /./[f],
                    y = n(
                        f,
                        ""[e],
                        function (e, t, n, i, a) {
                            return t.exec === l ? (p && !a ? { done: !0, value: g.call(t, n, i) } : { done: !0, value: e.call(n, t, i) }) : { done: !1 };
                        },
                        { REPLACE_KEEPS_$0: u, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: h }
                    ),
                    v = y[0],
                    M = y[1];
                i(String.prototype, e, v),
                    i(
                        RegExp.prototype,
                        f,
                        2 == t
                            ? function (e, t) {
                                  return M.call(e, this, t);
                              }
                            : function (e) {
                                  return M.call(e, this);
                              }
                    );
            }
            c && o(RegExp.prototype[f], "sham", !0);
        };
    },
    function (e, t, n) {
        "use strict";
        var i = n(215).charAt;
        e.exports = function (e, t, n) {
            return t + (n ? i(e, t).length : 1);
        };
    },
    function (e, t, n) {
        var i = n(22),
            a = n(46);
        e.exports = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var r = n.call(e, t);
                if ("object" != typeof r) throw TypeError("RegExp exec method returned something other than an Object or null");
                return r;
            }
            if ("RegExp" !== i(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return a.call(e, t);
        };
    },
    function (e, t, n) {
        (function (t) {
            var n = "__lodash_hash_undefined__",
                i = "[object Function]",
                a = "[object GeneratorFunction]",
                r = /^\[object .+?Constructor\]$/,
                l = "object" == typeof t && t && t.Object === Object && t,
                o = "object" == typeof self && self && self.Object === Object && self,
                s = l || o || Function("return this")();
            var d,
                u = Array.prototype,
                c = Function.prototype,
                h = Object.prototype,
                m = s["__core-js_shared__"],
                f = (d = /[^.]+$/.exec((m && m.keys && m.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + d : "",
                p = c.toString,
                _ = h.hasOwnProperty,
                g = h.toString,
                y = RegExp(
                    "^" +
                        p
                            .call(_)
                            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                        "$"
                ),
                v = u.splice,
                M = T(s, "Map"),
                b = T(Object, "create");
            function x(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n; ) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function L(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n; ) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function w(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n; ) {
                    var i = e[t];
                    this.set(i[0], i[1]);
                }
            }
            function k(e, t) {
                for (var n, i, a = e.length; a--; ) if ((n = e[a][0]) === (i = t) || (n != n && i != i)) return a;
                return -1;
            }
            function Y(e) {
                return (
                    !(!j(e) || ((t = e), f && f in t)) &&
                    ((function (e) {
                        var t = j(e) ? g.call(e) : "";
                        return t == i || t == a;
                    })(e) ||
                    (function (e) {
                        var t = !1;
                        if (null != e && "function" != typeof e.toString)
                            try {
                                t = !!(e + "");
                            } catch (e) {}
                        return t;
                    })(e)
                        ? y
                        : r
                    ).test(
                        (function (e) {
                            if (null != e) {
                                try {
                                    return p.call(e);
                                } catch (e) {}
                                try {
                                    return e + "";
                                } catch (e) {}
                            }
                            return "";
                        })(e)
                    )
                );
                var t;
            }
            function D(e, t) {
                var n,
                    i,
                    a = e.__data__;
                return ("string" == (i = typeof (n = t)) || "number" == i || "symbol" == i || "boolean" == i ? "__proto__" !== n : null === n) ? a["string" == typeof t ? "string" : "hash"] : a.map;
            }
            function T(e, t) {
                var n = (function (e, t) {
                    return null == e ? void 0 : e[t];
                })(e, t);
                return Y(n) ? n : void 0;
            }
            function S(e, t) {
                if ("function" != typeof e || (t && "function" != typeof t)) throw new TypeError("Expected a function");
                var n = function () {
                    var i = arguments,
                        a = t ? t.apply(this, i) : i[0],
                        r = n.cache;
                    if (r.has(a)) return r.get(a);
                    var l = e.apply(this, i);
                    return (n.cache = r.set(a, l)), l;
                };
                return (n.cache = new (S.Cache || w)()), n;
            }
            function j(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t);
            }
            (x.prototype.clear = function () {
                this.__data__ = b ? b(null) : {};
            }),
                (x.prototype.delete = function (e) {
                    return this.has(e) && delete this.__data__[e];
                }),
                (x.prototype.get = function (e) {
                    var t = this.__data__;
                    if (b) {
                        var i = t[e];
                        return i === n ? void 0 : i;
                    }
                    return _.call(t, e) ? t[e] : void 0;
                }),
                (x.prototype.has = function (e) {
                    var t = this.__data__;
                    return b ? void 0 !== t[e] : _.call(t, e);
                }),
                (x.prototype.set = function (e, t) {
                    return (this.__data__[e] = b && void 0 === t ? n : t), this;
                }),
                (L.prototype.clear = function () {
                    this.__data__ = [];
                }),
                (L.prototype.delete = function (e) {
                    var t = this.__data__,
                        n = k(t, e);
                    return !(n < 0) && (n == t.length - 1 ? t.pop() : v.call(t, n, 1), !0);
                }),
                (L.prototype.get = function (e) {
                    var t = this.__data__,
                        n = k(t, e);
                    return n < 0 ? void 0 : t[n][1];
                }),
                (L.prototype.has = function (e) {
                    return k(this.__data__, e) > -1;
                }),
                (L.prototype.set = function (e, t) {
                    var n = this.__data__,
                        i = k(n, e);
                    return i < 0 ? n.push([e, t]) : (n[i][1] = t), this;
                }),
                (w.prototype.clear = function () {
                    this.__data__ = { hash: new x(), map: new (M || L)(), string: new x() };
                }),
                (w.prototype.delete = function (e) {
                    return D(this, e).delete(e);
                }),
                (w.prototype.get = function (e) {
                    return D(this, e).get(e);
                }),
                (w.prototype.has = function (e) {
                    return D(this, e).has(e);
                }),
                (w.prototype.set = function (e, t) {
                    return D(this, e).set(e, t), this;
                }),
                (S.Cache = w),
                (e.exports = S);
        }.call(this, n(11)));
    },
    function (e, t, n) {
        "use strict";
        (function (e) {
            var n = (function () {
                    if ("undefined" != typeof Map) return Map;
                    function e(e, t) {
                        var n = -1;
                        return (
                            e.some(function (e, i) {
                                return e[0] === t && ((n = i), !0);
                            }),
                            n
                        );
                    }
                    return (function () {
                        function t() {
                            this.__entries__ = [];
                        }
                        return (
                            Object.defineProperty(t.prototype, "size", {
                                get: function () {
                                    return this.__entries__.length;
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                            (t.prototype.get = function (t) {
                                var n = e(this.__entries__, t),
                                    i = this.__entries__[n];
                                return i && i[1];
                            }),
                            (t.prototype.set = function (t, n) {
                                var i = e(this.__entries__, t);
                                ~i ? (this.__entries__[i][1] = n) : this.__entries__.push([t, n]);
                            }),
                            (t.prototype.delete = function (t) {
                                var n = this.__entries__,
                                    i = e(n, t);
                                ~i && n.splice(i, 1);
                            }),
                            (t.prototype.has = function (t) {
                                return !!~e(this.__entries__, t);
                            }),
                            (t.prototype.clear = function () {
                                this.__entries__.splice(0);
                            }),
                            (t.prototype.forEach = function (e, t) {
                                void 0 === t && (t = null);
                                for (var n = 0, i = this.__entries__; n < i.length; n++) {
                                    var a = i[n];
                                    e.call(t, a[1], a[0]);
                                }
                            }),
                            t
                        );
                    })();
                })(),
                i = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
                a = void 0 !== e && e.Math === Math ? e : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
                r =
                    "function" == typeof requestAnimationFrame
                        ? requestAnimationFrame.bind(a)
                        : function (e) {
                              return setTimeout(function () {
                                  return e(Date.now());
                              }, 1e3 / 60);
                          };
            var l = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                o = "undefined" != typeof MutationObserver,
                s = (function () {
                    function e() {
                        (this.connected_ = !1),
                            (this.mutationEventsAdded_ = !1),
                            (this.mutationsObserver_ = null),
                            (this.observers_ = []),
                            (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                            (this.refresh = (function (e, t) {
                                var n = !1,
                                    i = !1,
                                    a = 0;
                                function l() {
                                    n && ((n = !1), e()), i && s();
                                }
                                function o() {
                                    r(l);
                                }
                                function s() {
                                    var e = Date.now();
                                    if (n) {
                                        if (e - a < 2) return;
                                        i = !0;
                                    } else (n = !0), (i = !1), setTimeout(o, t);
                                    a = e;
                                }
                                return s;
                            })(this.refresh.bind(this), 20));
                    }
                    return (
                        (e.prototype.addObserver = function (e) {
                            ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
                        }),
                        (e.prototype.removeObserver = function (e) {
                            var t = this.observers_,
                                n = t.indexOf(e);
                            ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_();
                        }),
                        (e.prototype.refresh = function () {
                            this.updateObservers_() && this.refresh();
                        }),
                        (e.prototype.updateObservers_ = function () {
                            var e = this.observers_.filter(function (e) {
                                return e.gatherActive(), e.hasActive();
                            });
                            return (
                                e.forEach(function (e) {
                                    return e.broadcastActive();
                                }),
                                e.length > 0
                            );
                        }),
                        (e.prototype.connect_ = function () {
                            i &&
                                !this.connected_ &&
                                (document.addEventListener("transitionend", this.onTransitionEnd_),
                                window.addEventListener("resize", this.refresh),
                                o
                                    ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)), this.mutationsObserver_.observe(document, { attributes: !0, childList: !0, characterData: !0, subtree: !0 }))
                                    : (document.addEventListener("DOMSubtreeModified", this.refresh), (this.mutationEventsAdded_ = !0)),
                                (this.connected_ = !0));
                        }),
                        (e.prototype.disconnect_ = function () {
                            i &&
                                this.connected_ &&
                                (document.removeEventListener("transitionend", this.onTransitionEnd_),
                                window.removeEventListener("resize", this.refresh),
                                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                                this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
                                (this.mutationsObserver_ = null),
                                (this.mutationEventsAdded_ = !1),
                                (this.connected_ = !1));
                        }),
                        (e.prototype.onTransitionEnd_ = function (e) {
                            var t = e.propertyName,
                                n = void 0 === t ? "" : t;
                            l.some(function (e) {
                                return !!~n.indexOf(e);
                            }) && this.refresh();
                        }),
                        (e.getInstance = function () {
                            return this.instance_ || (this.instance_ = new e()), this.instance_;
                        }),
                        (e.instance_ = null),
                        e
                    );
                })(),
                d = function (e, t) {
                    for (var n = 0, i = Object.keys(t); n < i.length; n++) {
                        var a = i[n];
                        Object.defineProperty(e, a, { value: t[a], enumerable: !1, writable: !1, configurable: !0 });
                    }
                    return e;
                },
                u = function (e) {
                    return (e && e.ownerDocument && e.ownerDocument.defaultView) || a;
                },
                c = g(0, 0, 0, 0);
            function h(e) {
                return parseFloat(e) || 0;
            }
            function m(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                return t.reduce(function (t, n) {
                    return t + h(e["border-" + n + "-width"]);
                }, 0);
            }
            function f(e) {
                var t = e.clientWidth,
                    n = e.clientHeight;
                if (!t && !n) return c;
                var i = u(e).getComputedStyle(e),
                    a = (function (e) {
                        for (var t = {}, n = 0, i = ["top", "right", "bottom", "left"]; n < i.length; n++) {
                            var a = i[n],
                                r = e["padding-" + a];
                            t[a] = h(r);
                        }
                        return t;
                    })(i),
                    r = a.left + a.right,
                    l = a.top + a.bottom,
                    o = h(i.width),
                    s = h(i.height);
                if (
                    ("border-box" === i.boxSizing && (Math.round(o + r) !== t && (o -= m(i, "left", "right") + r), Math.round(s + l) !== n && (s -= m(i, "top", "bottom") + l)),
                    !(function (e) {
                        return e === u(e).document.documentElement;
                    })(e))
                ) {
                    var d = Math.round(o + r) - t,
                        f = Math.round(s + l) - n;
                    1 !== Math.abs(d) && (o -= d), 1 !== Math.abs(f) && (s -= f);
                }
                return g(a.left, a.top, o, s);
            }
            var p =
                "undefined" != typeof SVGGraphicsElement
                    ? function (e) {
                          return e instanceof u(e).SVGGraphicsElement;
                      }
                    : function (e) {
                          return e instanceof u(e).SVGElement && "function" == typeof e.getBBox;
                      };
            function _(e) {
                return i
                    ? p(e)
                        ? (function (e) {
                              var t = e.getBBox();
                              return g(0, 0, t.width, t.height);
                          })(e)
                        : f(e)
                    : c;
            }
            function g(e, t, n, i) {
                return { x: e, y: t, width: n, height: i };
            }
            var y = (function () {
                    function e(e) {
                        (this.broadcastWidth = 0), (this.broadcastHeight = 0), (this.contentRect_ = g(0, 0, 0, 0)), (this.target = e);
                    }
                    return (
                        (e.prototype.isActive = function () {
                            var e = _(this.target);
                            return (this.contentRect_ = e), e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
                        }),
                        (e.prototype.broadcastRect = function () {
                            var e = this.contentRect_;
                            return (this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e;
                        }),
                        e
                    );
                })(),
                v = function (e, t) {
                    var n,
                        i,
                        a,
                        r,
                        l,
                        o,
                        s,
                        u =
                            ((i = (n = t).x),
                            (a = n.y),
                            (r = n.width),
                            (l = n.height),
                            (o = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
                            (s = Object.create(o.prototype)),
                            d(s, { x: i, y: a, width: r, height: l, top: a, right: i + r, bottom: l + a, left: i }),
                            s);
                    d(this, { target: e, contentRect: u });
                },
                M = (function () {
                    function e(e, t, i) {
                        if (((this.activeObservations_ = []), (this.observations_ = new n()), "function" != typeof e)) throw new TypeError("The callback provided as parameter 1 is not a function.");
                        (this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = i);
                    }
                    return (
                        (e.prototype.observe = function (e) {
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" != typeof Element && Element instanceof Object) {
                                if (!(e instanceof u(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) || (t.set(e, new y(e)), this.controller_.addObserver(this), this.controller_.refresh());
                            }
                        }),
                        (e.prototype.unobserve = function (e) {
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" != typeof Element && Element instanceof Object) {
                                if (!(e instanceof u(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this));
                            }
                        }),
                        (e.prototype.disconnect = function () {
                            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
                        }),
                        (e.prototype.gatherActive = function () {
                            var e = this;
                            this.clearActive(),
                                this.observations_.forEach(function (t) {
                                    t.isActive() && e.activeObservations_.push(t);
                                });
                        }),
                        (e.prototype.broadcastActive = function () {
                            if (this.hasActive()) {
                                var e = this.callbackCtx_,
                                    t = this.activeObservations_.map(function (e) {
                                        return new v(e.target, e.broadcastRect());
                                    });
                                this.callback_.call(e, t, e), this.clearActive();
                            }
                        }),
                        (e.prototype.clearActive = function () {
                            this.activeObservations_.splice(0);
                        }),
                        (e.prototype.hasActive = function () {
                            return this.activeObservations_.length > 0;
                        }),
                        e
                    );
                })(),
                b = "undefined" != typeof WeakMap ? new WeakMap() : new n(),
                x = function e(t) {
                    if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    var n = s.getInstance(),
                        i = new M(t, n, this);
                    b.set(this, i);
                };
            ["observe", "unobserve", "disconnect"].forEach(function (e) {
                x.prototype[e] = function () {
                    var t;
                    return (t = b.get(this))[e].apply(t, arguments);
                };
            });
            var L = void 0 !== a.ResizeObserver ? a.ResizeObserver : x;
            t.a = L;
        }.call(this, n(11)));
    },
    function (e, t, n) {
        e.exports = (function () {})();
    },
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t) {},
    function (e, t, n) {},
    function (e, t, n) {
        // var i = n(28);
        // e.exports = function (e) {
        //     return Object(i(e));
        // };
    },
    function (e, t, n) {
        // var i = n(29),
        //     a = Math.min;
        // e.exports = function (e) {
        //     return e > 0 ? a(i(e), 9007199254740991) : 0;
        // };
    },
    function (e, t, n) {
        // "use strict";
        // var i = n(233)(!0);
        // e.exports = function (e, t, n) {
        //     return t + (n ? i(e, t).length : 1);
        // };
    },
    function (e, t, n) {},
    function (e, t, n) {
        // "use strict";
        // var i = n(235),
        //     a = RegExp.prototype.exec;
        // e.exports = function (e, t) {
        //     var n = e.exec;
        //     if ("function" == typeof n) {
        //         var r = n.call(e, t);
        //         if ("object" != typeof r) throw new TypeError("RegExp exec method returned something other than an Object or null");
        //         return r;
        //     }
        //     if ("RegExp" !== i(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
        //     return a.call(e, t);
        // };
    },
    function (e, t, n) {},
    function (e, t) {
        // var n = {}.toString;
        // e.exports = function (e) {
        //     return n.call(e).slice(8, -1);
        // };
    },
    function (e, t) {
        // e.exports = !1;
    },
    function (e, t, n) {},
    function (e, t, n) {
        // "use strict";
        // var i = n(53);
        // n(241)({ target: "RegExp", proto: !0, forced: i !== /./.exec }, { exec: i });
    },
    function (e, t, n) {
        // "use strict";
        // var i = n(26);
        // e.exports = function () {
        //     var e = i(this),
        //         t = "";
        //     return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
        // };
    },
    function (e, t, n) {},
    function (e, t, n) {
        // var i = n(26),
        //     a = n(243),
        //     r = n(245),
        //     l = Object.defineProperty;
        // t.f = n(32)
        //     ? Object.defineProperty
        //     : function (e, t, n) {
        //           if ((i(e), (t = r(t, !0)), i(n), a))
        //               try {
        //                   return l(e, t, n);
        //               } catch (e) {}
        //           if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        //           return "value" in n && (e[t] = n.value), e;
        //       };
    },
    function (e, t, n) {
        // e.exports =
        //     !n(32) &&
        //     !n(33)(function () {
        //         return (
        //             7 !=
        //             Object.defineProperty(n(244)("div"), "a", {
        //                 get: function () {
        //                     return 7;
        //                 },
        //             }).a
        //         );
        //     });
    },
    function (e, t, n) {
        // var i = n(27),
        //     a = n(15).document,
        //     r = i(a) && i(a.createElement);
        // e.exports = function (e) {
        //     return r ? a.createElement(e) : {};
        // };
    },
    function (e, t, n) {
        // var i = n(27);
        // e.exports = function (e, t) {
        //     if (!i(e)) return e;
        //     var n, a;
        //     if (t && "function" == typeof (n = e.toString) && !i((a = n.call(e)))) return a;
        //     if ("function" == typeof (n = e.valueOf) && !i((a = n.call(e)))) return a;
        //     if (!t && "function" == typeof (n = e.toString) && !i((a = n.call(e)))) return a;
        //     throw TypeError("Can't convert object to primitive value");
        // };
    },
    function (e, t) {
        // e.exports = function (e, t) {
        //     return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        // };
    },
    function (e, t) {
        // var n = {}.hasOwnProperty;
        // e.exports = function (e, t) {
        //     return n.call(e, t);
        // };
    },
    function (e, t, n) {
        // e.exports = n(51)("native-function-to-string", Function.toString);
    },
    function (e, t, n) {},
    function (e, t) {
        // e.exports = function (e) {
        //     if ("function" != typeof e) throw TypeError(e + " is not a function!");
        //     return e;
        // };
    },
    function (e, t) {
        e.exports = function (e) {
            // return (
            //     e.webpackPolyfill ||
            //         ((e.deprecate = function () {}),
            //         (e.paths = []),
            //         e.children || (e.children = []),
            //         Object.defineProperty(e, "loaded", {
            //             enumerable: !0,
            //             get: function () {
            //                 return e.l;
            //             },
            //         }),
            //         Object.defineProperty(e, "id", {
            //             enumerable: !0,
            //             get: function () {
            //                 return e.i;
            //             },
            //         }),
            //         (e.webpackPolyfill = 1)),
            //     e
            // );
        };
    },
    function (e, t, n) {
        var i = {};
        function a(e) {
            // var t = r(e);
            // return n(t);
        }
        function r(e) {
            // if (!n.o(i, e)) {
            //     var t = new Error("Cannot find module '" + e + "'");
            //     throw ((t.code = "MODULE_NOT_FOUND"), t);
            // }
            // return i[e];
        }
        (a.keys = function () {
            return Object.keys(i);
        }),
            (a.resolve = r),
            (e.exports = a),
            (a.id = 252);
    },
    function (e, t, n) {
        // "use strict";
        // var i = n(8),
        //     a = n(200);
        // i({ target: "Array", proto: !0, forced: [].forEach != a }, { forEach: a });
    },
    function (e, t, n) {
        // var i = n(4),
        //     a = n(255),
        //     r = n(188),
        //     l = n(10);
        // e.exports = function (e, t) {
        //     for (var n = a(t), o = l.f, s = r.f, d = 0; d < n.length; d++) {
        //         var u = n[d];
        //         i(e, u) || o(e, u, s(t, u));
        //     }
        // };
    },
    function (e, t, n) {
        // var i = n(39),
        //     a = n(257),
        //     r = n(198),
        //     l = n(6);
        // e.exports =
        //     i("Reflect", "ownKeys") ||
        //     function (e) {
        //         var t = a.f(l(e)),
        //             n = r.f;
        //         return n ? t.concat(n(e)) : t;
        //     };
    },
    function (e, t, n) {
        // var i = n(1);
        // e.exports = i;
    },
    function (e, t, n) {
        // var i = n(197),
        //     a = n(40).concat("length", "prototype");
        // t.f =
        //     Object.getOwnPropertyNames ||
        //     function (e) {
        //         return i(e, a);
        //     };
    },
    function (e, t, n) {
        // var i = n(20),
        //     a = n(14),
        //     r = n(259),
        //     l = function (e) {
        //         return function (t, n, l) {
        //             var o,
        //                 s = i(t),
        //                 d = a(s.length),
        //                 u = r(l, d);
        //             if (e && n != n) {
        //                 for (; d > u; ) if ((o = s[u++]) != o) return !0;
        //             } else for (; d > u; u++) if ((e || u in s) && s[u] === n) return e || u || 0;
        //             return !e && -1;
        //         };
        //     };
        // e.exports = { includes: l(!0), indexOf: l(!1) };
    },
    function (e, t, n) {
        // var i = n(24),
        //     a = Math.max,
        //     r = Math.min;
        // e.exports = function (e, t) {
        //     var n = i(e);
        //     return n < 0 ? a(n + t, 0) : r(n, t);
        // };
    },
    function (e, t, n) {
        // var i = n(5),
        //     a = n(261),
        //     r = n(3)("species");
        // e.exports = function (e, t) {
        //     var n;
        //     return a(e) && ("function" != typeof (n = e.constructor) || (n !== Array && !a(n.prototype)) ? i(n) && null === (n = n[r]) && (n = void 0) : (n = void 0)), new (void 0 === n ? Array : n)(0 === t ? 0 : t);
        // };
    },
    function (e, t, n) {
        // var i = n(22);
        // e.exports =
        //     Array.isArray ||
        //     function (e) {
        //         return "Array" == i(e);
        //     };
    },
    function (e, t, n) {
        // var i = n(203);
        // e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    function (e, t, n) {
        // var i = n(1),
        //     a = n(205),
        //     r = n(200),
        //     l = n(7);
        // for (var o in a) {
        //     var s = i[o],
        //         d = s && s.prototype;
        //     if (d && d.forEach !== r)
        //         try {
        //             l(d, "forEach", r);
        //         } catch (e) {
        //             d.forEach = r;
        //         }
        // }
    },
    function (e, t, n) {
        // "use strict";
        // var i = n(8),
        //     a = n(41).filter,
        //     r = n(265),
        //     l = n(42),
        //     o = r("filter"),
        //     s = l("filter");
        // i(
        //     { target: "Array", proto: !0, forced: !o || !s },
        //     {
        //         filter: function (e) {
        //             return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
        //         },
        //     }
        // );
    },
    function (e, t, n) {
        // var i = n(2),
        //     a = n(3),
        //     r = n(266),
        //     l = a("species");
        // e.exports = function (e) {
        //     return (
        //         r >= 51 ||
        //         !i(function () {
        //             var t = [];
        //             return (
        //                 ((t.constructor = {})[l] = function () {
        //                     return { foo: 1 };
        //                 }),
        //                 1 !== t[e](Boolean).foo
        //             );
        //         })
        //     );
        // };
    },
    function (e, t, n) {
        var i,
            a,
            r = n(1),
            l = n(267),
            o = r.process,
            s = o && o.versions,
            d = s && s.v8;
        d ? (a = (i = d.split("."))[0] + i[1]) : l && (!(i = l.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = l.match(/Chrome\/(\d+)/)) && (a = i[1]), (e.exports = a && +a);
    },
    function (e, t, n) {
        var i = n(39);
        e.exports = i("navigator", "userAgent") || "";
    },
    function (e, t, n) {
        var i = n(3),
            a = n(207),
            r = n(10),
            l = i("unscopables"),
            o = Array.prototype;
        null == o[l] && r.f(o, l, { configurable: !0, value: a(null) }),
            (e.exports = function (e) {
                o[l][e] = !0;
            });
    },
    function (e, t, n) {
        var i = n(9),
            a = n(10),
            r = n(6),
            l = n(208);
        e.exports = i
            ? Object.defineProperties
            : function (e, t) {
                  r(e);
                  for (var n, i = l(t), o = i.length, s = 0; o > s; ) a.f(e, (n = i[s++]), t[n]);
                  return e;
              };
    },
    function (e, t, n) {
        var i = n(39);
        e.exports = i("document", "documentElement");
    },
    function (e, t, n) {
        "use strict";
        var i = n(210).IteratorPrototype,
            a = n(207),
            r = n(34),
            l = n(43),
            o = n(18),
            s = function () {
                return this;
            };
        e.exports = function (e, t, n) {
            var d = t + " Iterator";
            return (e.prototype = a(i, { next: r(1, n) })), l(e, d, !1, !0), (o[d] = s), e;
        };
    },
    function (e, t, n) {
        var i = n(2);
        e.exports = !i(function () {
            function e() {}
            return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
        });
    },
    function (e, t, n) {
        var i = n(5);
        e.exports = function (e) {
            if (!i(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e;
        };
    },
    function (e, t, n) {
        var i = n(8),
            a = n(275);
        i({ target: "Object", stat: !0, forced: Object.assign !== a }, { assign: a });
    },
    function (e, t, n) {
        "use strict";
        var i = n(9),
            a = n(2),
            r = n(208),
            l = n(198),
            o = n(189),
            s = n(17),
            d = n(21),
            u = Object.assign,
            c = Object.defineProperty;
        e.exports =
            !u ||
            a(function () {
                if (
                    i &&
                    1 !==
                        u(
                            { b: 1 },
                            u(
                                c({}, "a", {
                                    enumerable: !0,
                                    get: function () {
                                        c(this, "b", { value: 3, enumerable: !1 });
                                    },
                                }),
                                { b: 2 }
                            )
                        ).b
                )
                    return !0;
                var e = {},
                    t = {},
                    n = Symbol(),
                    a = "abcdefghijklmnopqrst";
                return (
                    (e[n] = 7),
                    a.split("").forEach(function (e) {
                        t[e] = e;
                    }),
                    7 != u({}, e)[n] || r(u({}, t)).join("") != a
                );
            })
                ? function (e, t) {
                      for (var n = s(e), a = arguments.length, u = 1, c = l.f, h = o.f; a > u; )
                          for (var m, f = d(arguments[u++]), p = c ? r(f).concat(c(f)) : r(f), _ = p.length, g = 0; _ > g; ) (m = p[g++]), (i && !h.call(f, m)) || (n[m] = f[m]);
                      return n;
                  }
                : u;
    },
    function (e, t, n) {
        var i = n(44),
            a = n(13),
            r = n(277);
        i || a(Object.prototype, "toString", r, { unsafe: !0 });
    },
    function (e, t, n) {
        "use strict";
        var i = n(44),
            a = n(213);
        e.exports = i
            ? {}.toString
            : function () {
                  return "[object " + a(this) + "]";
              };
    },
    function (e, t, n) {
        var i = n(8),
            a = n(279);
        i({ global: !0, forced: parseInt != a }, { parseInt: a });
    },
    function (e, t, n) {
        var i = n(1),
            a = n(280).trim,
            r = n(214),
            l = i.parseInt,
            o = /^[+-]?0[Xx]/,
            s = 8 !== l(r + "08") || 22 !== l(r + "0x16");
        e.exports = s
            ? function (e, t) {
                  var n = a(String(e));
                  return l(n, t >>> 0 || (o.test(n) ? 16 : 10));
              }
            : l;
    },
    function (e, t, n) {
        var i = n(12),
            a = "[" + n(214) + "]",
            r = RegExp("^" + a + a + "*"),
            l = RegExp(a + a + "*$"),
            o = function (e) {
                return function (t) {
                    var n = String(i(t));
                    return 1 & e && (n = n.replace(r, "")), 2 & e && (n = n.replace(l, "")), n;
                };
            };
        e.exports = { start: o(1), end: o(2), trim: o(3) };
    },
    function (e, t, n) {
        "use strict";
        var i = n(215).charAt,
            a = n(16),
            r = n(209),
            l = "String Iterator",
            o = a.set,
            s = a.getterFor(l);
        r(
            String,
            "String",
            function (e) {
                o(this, { type: l, string: String(e), index: 0 });
            },
            function () {
                var e,
                    t = s(this),
                    n = t.string,
                    a = t.index;
                return a >= n.length ? { value: void 0, done: !0 } : ((e = i(n, a)), (t.index += e.length), { value: e, done: !1 });
            }
        );
    },
    function (e, t, n) {
        "use strict";
        var i,
            a = n(1),
            r = n(216),
            l = n(45),
            o = n(284),
            s = n(290),
            d = n(5),
            u = n(16).enforce,
            c = n(195),
            h = !a.ActiveXObject && "ActiveXObject" in a,
            m = Object.isExtensible,
            f = function (e) {
                return function () {
                    return e(this, arguments.length ? arguments[0] : void 0);
                };
            },
            p = (e.exports = o("WeakMap", f, s));
        if (c && h) {
            (i = s.getConstructor(f, "WeakMap", !0)), (l.REQUIRED = !0);
            var _ = p.prototype,
                g = _.delete,
                y = _.has,
                v = _.get,
                M = _.set;
            r(_, {
                delete: function (e) {
                    if (d(e) && !m(e)) {
                        var t = u(this);
                        return t.frozen || (t.frozen = new i()), g.call(this, e) || t.frozen.delete(e);
                    }
                    return g.call(this, e);
                },
                has: function (e) {
                    if (d(e) && !m(e)) {
                        var t = u(this);
                        return t.frozen || (t.frozen = new i()), y.call(this, e) || t.frozen.has(e);
                    }
                    return y.call(this, e);
                },
                get: function (e) {
                    if (d(e) && !m(e)) {
                        var t = u(this);
                        return t.frozen || (t.frozen = new i()), y.call(this, e) ? v.call(this, e) : t.frozen.get(e);
                    }
                    return v.call(this, e);
                },
                set: function (e, t) {
                    if (d(e) && !m(e)) {
                        var n = u(this);
                        n.frozen || (n.frozen = new i()), y.call(this, e) ? M.call(this, e, t) : n.frozen.set(e, t);
                    } else M.call(this, e, t);
                    return this;
                },
            });
        }
    },
    function (e, t, n) {
        var i = n(2);
        e.exports = !i(function () {
            return Object.isExtensible(Object.preventExtensions({}));
        });
    },
    function (e, t, n) {
        "use strict";
        var i = n(8),
            a = n(1),
            r = n(199),
            l = n(13),
            o = n(45),
            s = n(217),
            d = n(218),
            u = n(5),
            c = n(2),
            h = n(288),
            m = n(43),
            f = n(289);
        e.exports = function (e, t, n) {
            var p = -1 !== e.indexOf("Map"),
                _ = -1 !== e.indexOf("Weak"),
                g = p ? "set" : "add",
                y = a[e],
                v = y && y.prototype,
                M = y,
                b = {},
                x = function (e) {
                    var t = v[e];
                    l(
                        v,
                        e,
                        "add" == e
                            ? function (e) {
                                  return t.call(this, 0 === e ? 0 : e), this;
                              }
                            : "delete" == e
                            ? function (e) {
                                  return !(_ && !u(e)) && t.call(this, 0 === e ? 0 : e);
                              }
                            : "get" == e
                            ? function (e) {
                                  return _ && !u(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                              }
                            : "has" == e
                            ? function (e) {
                                  return !(_ && !u(e)) && t.call(this, 0 === e ? 0 : e);
                              }
                            : function (e, n) {
                                  return t.call(this, 0 === e ? 0 : e, n), this;
                              }
                    );
                };
            if (
                r(
                    e,
                    "function" != typeof y ||
                        !(
                            _ ||
                            (v.forEach &&
                                !c(function () {
                                    new y().entries().next();
                                }))
                        )
                )
            )
                (M = n.getConstructor(t, e, p, g)), (o.REQUIRED = !0);
            else if (r(e, !0)) {
                var L = new M(),
                    w = L[g](_ ? {} : -0, 1) != L,
                    k = c(function () {
                        L.has(1);
                    }),
                    Y = h(function (e) {
                        new y(e);
                    }),
                    D =
                        !_ &&
                        c(function () {
                            for (var e = new y(), t = 5; t--; ) e[g](t, t);
                            return !e.has(-0);
                        });
                Y ||
                    (((M = t(function (t, n) {
                        d(t, M, e);
                        var i = f(new y(), t, M);
                        return null != n && s(n, i[g], i, p), i;
                    })).prototype = v),
                    (v.constructor = M)),
                    (k || D) && (x("delete"), x("has"), p && x("get")),
                    (D || w) && x(g),
                    _ && v.clear && delete v.clear;
            }
            return (b[e] = M), i({ global: !0, forced: M != y }, b), m(M, e), _ || n.setStrong(M, e, p), M;
        };
    },
    function (e, t, n) {
        var i = n(3),
            a = n(18),
            r = i("iterator"),
            l = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (a.Array === e || l[r] === e);
        };
    },
    function (e, t, n) {
        var i = n(213),
            a = n(18),
            r = n(3)("iterator");
        e.exports = function (e) {
            if (null != e) return e[r] || e["@@iterator"] || a[i(e)];
        };
    },
    function (e, t, n) {
        var i = n(6);
        e.exports = function (e, t, n, a) {
            try {
                return a ? t(i(n)[0], n[1]) : t(n);
            } catch (t) {
                var r = e.return;
                throw (void 0 !== r && i(r.call(e)), t);
            }
        };
    },
    function (e, t, n) {
        var i = n(3)("iterator"),
            a = !1;
        try {
            var r = 0,
                l = {
                    next: function () {
                        return { done: !!r++ };
                    },
                    return: function () {
                        a = !0;
                    },
                };
            (l[i] = function () {
                return this;
            }),
                Array.from(l, function () {
                    throw 2;
                });
        } catch (e) {}
        e.exports = function (e, t) {
            if (!t && !a) return !1;
            var n = !1;
            try {
                var r = {};
                (r[i] = function () {
                    return {
                        next: function () {
                            return { done: (n = !0) };
                        },
                    };
                }),
                    e(r);
            } catch (e) {}
            return n;
        };
    },
    function (e, t, n) {
        var i = n(5),
            a = n(212);
        e.exports = function (e, t, n) {
            var r, l;
            return a && "function" == typeof (r = t.constructor) && r !== n && i((l = r.prototype)) && l !== n.prototype && a(e, l), e;
        };
    },
    function (e, t, n) {
        "use strict";
        var i = n(216),
            a = n(45).getWeakData,
            r = n(6),
            l = n(5),
            o = n(218),
            s = n(217),
            d = n(41),
            u = n(4),
            c = n(16),
            h = c.set,
            m = c.getterFor,
            f = d.find,
            p = d.findIndex,
            _ = 0,
            g = function (e) {
                return e.frozen || (e.frozen = new y());
            },
            y = function () {
                this.entries = [];
            },
            v = function (e, t) {
                return f(e.entries, function (e) {
                    return e[0] === t;
                });
            };
        (y.prototype = {
            get: function (e) {
                var t = v(this, e);
                if (t) return t[1];
            },
            has: function (e) {
                return !!v(this, e);
            },
            set: function (e, t) {
                var n = v(this, e);
                n ? (n[1] = t) : this.entries.push([e, t]);
            },
            delete: function (e) {
                var t = p(this.entries, function (t) {
                    return t[0] === e;
                });
                return ~t && this.entries.splice(t, 1), !!~t;
            },
        }),
            (e.exports = {
                getConstructor: function (e, t, n, d) {
                    var c = e(function (e, i) {
                            o(e, c, t), h(e, { type: t, id: _++, frozen: void 0 }), null != i && s(i, e[d], e, n);
                        }),
                        f = m(t),
                        p = function (e, t, n) {
                            var i = f(e),
                                l = a(r(t), !0);
                            return !0 === l ? g(i).set(t, n) : (l[i.id] = n), e;
                        };
                    return (
                        i(c.prototype, {
                            delete: function (e) {
                                var t = f(this);
                                if (!l(e)) return !1;
                                var n = a(e);
                                return !0 === n ? g(t).delete(e) : n && u(n, t.id) && delete n[t.id];
                            },
                            has: function (e) {
                                var t = f(this);
                                if (!l(e)) return !1;
                                var n = a(e);
                                return !0 === n ? g(t).has(e) : n && u(n, t.id);
                            },
                        }),
                        i(
                            c.prototype,
                            n
                                ? {
                                      get: function (e) {
                                          var t = f(this);
                                          if (l(e)) {
                                              var n = a(e);
                                              return !0 === n ? g(t).get(e) : n ? n[t.id] : void 0;
                                          }
                                      },
                                      set: function (e, t) {
                                          return p(this, e, t);
                                      },
                                  }
                                : {
                                      add: function (e) {
                                          return p(this, e, !0);
                                      },
                                  }
                        ),
                        c
                    );
                },
            });
    },
    function (e, t, n) {
        var i = n(1),
            a = n(205),
            r = n(206),
            l = n(7),
            o = n(3),
            s = o("iterator"),
            d = o("toStringTag"),
            u = r.values;
        for (var c in a) {
            var h = i[c],
                m = h && h.prototype;
            if (m) {
                if (m[s] !== u)
                    try {
                        l(m, s, u);
                    } catch (e) {
                        m[s] = u;
                    }
                if ((m[d] || l(m, d, c), a[c]))
                    for (var f in r)
                        if (m[f] !== r[f])
                            try {
                                l(m, f, r[f]);
                            } catch (e) {
                                m[f] = r[f];
                            }
            }
        }
    },
    function (e, t, n) {
        "use strict";
        var i = n(8),
            a = n(293).left,
            r = n(204),
            l = n(42),
            o = r("reduce"),
            s = l("reduce", { 1: 0 });
        i(
            { target: "Array", proto: !0, forced: !o || !s },
            {
                reduce: function (e) {
                    return a(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
                },
            }
        );
    },
    function (e, t, n) {
        var i = n(202),
            a = n(17),
            r = n(21),
            l = n(14),
            o = function (e) {
                return function (t, n, o, s) {
                    i(n);
                    var d = a(t),
                        u = r(d),
                        c = l(d.length),
                        h = e ? c - 1 : 0,
                        m = e ? -1 : 1;
                    if (o < 2)
                        for (;;) {
                            if (h in u) {
                                (s = u[h]), (h += m);
                                break;
                            }
                            if (((h += m), e ? h < 0 : c <= h)) throw TypeError("Reduce of empty array with no initial value");
                        }
                    for (; e ? h >= 0 : c > h; h += m) h in u && (s = n(s, u[h], h, d));
                    return s;
                };
            };
        e.exports = { left: o(!1), right: o(!0) };
    },
    function (e, t, n) {
        var i = n(9),
            a = n(10).f,
            r = Function.prototype,
            l = r.toString,
            o = /^\s*function ([^ (]*)/,
            s = "name";
        i &&
            !(s in r) &&
            a(r, s, {
                configurable: !0,
                get: function () {
                    try {
                        return l.call(this).match(o)[1];
                    } catch (e) {
                        return "";
                    }
                },
            });
    },
    function (e, t, n) {
        "use strict";
        var i = n(6);
        e.exports = function () {
            var e = i(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
        };
    },
    function (e, t, n) {
        "use strict";
        var i = n(2);
        function a(e, t) {
            return RegExp(e, t);
        }
        (t.UNSUPPORTED_Y = i(function () {
            var e = a("a", "y");
            return (e.lastIndex = 2), null != e.exec("abcd");
        })),
            (t.BROKEN_CARET = i(function () {
                var e = a("^r", "gy");
                return (e.lastIndex = 2), null != e.exec("str");
            }));
    },
    function (e, t, n) {
        "use strict";
        var i = n(220),
            a = n(6),
            r = n(14),
            l = n(12),
            o = n(221),
            s = n(222);
        i("match", 1, function (e, t, n) {
            return [
                function (t) {
                    var n = l(this),
                        i = null == t ? void 0 : t[e];
                    return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n));
                },
                function (e) {
                    var i = n(t, e, this);
                    if (i.done) return i.value;
                    var l = a(e),
                        d = String(this);
                    if (!l.global) return s(l, d);
                    var u = l.unicode;
                    l.lastIndex = 0;
                    for (var c, h = [], m = 0; null !== (c = s(l, d)); ) {
                        var f = String(c[0]);
                        (h[m] = f), "" === f && (l.lastIndex = o(d, r(l.lastIndex), u)), m++;
                    }
                    return 0 === m ? null : h;
                },
            ];
        });
    },
    function (e, t, n) {
        "use strict";
        var i = n(220),
            a = n(6),
            r = n(17),
            l = n(14),
            o = n(24),
            s = n(12),
            d = n(221),
            u = n(222),
            c = Math.max,
            h = Math.min,
            m = Math.floor,
            f = /\$([$&'`]|\d\d?|<[^>]*>)/g,
            p = /\$([$&'`]|\d\d?)/g;
        i("replace", 2, function (e, t, n, i) {
            var _ = i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                g = i.REPLACE_KEEPS_$0,
                y = _ ? "$" : "$0";
            return [
                function (n, i) {
                    var a = s(this),
                        r = null == n ? void 0 : n[e];
                    return void 0 !== r ? r.call(n, a, i) : t.call(String(a), n, i);
                },
                function (e, i) {
                    if ((!_ && g) || ("string" == typeof i && -1 === i.indexOf(y))) {
                        var r = n(t, e, this, i);
                        if (r.done) return r.value;
                    }
                    var s = a(e),
                        m = String(this),
                        f = "function" == typeof i;
                    f || (i = String(i));
                    var p = s.global;
                    if (p) {
                        var M = s.unicode;
                        s.lastIndex = 0;
                    }
                    for (var b = []; ; ) {
                        var x = u(s, m);
                        if (null === x) break;
                        if ((b.push(x), !p)) break;
                        "" === String(x[0]) && (s.lastIndex = d(m, l(s.lastIndex), M));
                    }
                    for (var L, w = "", k = 0, Y = 0; Y < b.length; Y++) {
                        x = b[Y];
                        for (var D = String(x[0]), T = c(h(o(x.index), m.length), 0), S = [], j = 1; j < x.length; j++) S.push(void 0 === (L = x[j]) ? L : String(L));
                        var E = x.groups;
                        if (f) {
                            var H = [D].concat(S, T, m);
                            void 0 !== E && H.push(E);
                            var O = String(i.apply(void 0, H));
                        } else O = v(D, m, T, S, E, i);
                        T >= k && ((w += m.slice(k, T) + O), (k = T + D.length));
                    }
                    return w + m.slice(k);
                },
            ];
            function v(e, n, i, a, l, o) {
                var s = i + e.length,
                    d = a.length,
                    u = p;
                return (
                    void 0 !== l && ((l = r(l)), (u = f)),
                    t.call(o, u, function (t, r) {
                        var o;
                        switch (r.charAt(0)) {
                            case "$":
                                return "$";
                            case "&":
                                return e;
                            case "`":
                                return n.slice(0, i);
                            case "'":
                                return n.slice(s);
                            case "<":
                                o = l[r.slice(1, -1)];
                                break;
                            default:
                                var u = +r;
                                if (0 === u) return t;
                                if (u > d) {
                                    var c = m(u / 10);
                                    return 0 === c ? t : c <= d ? (void 0 === a[c - 1] ? r.charAt(1) : a[c - 1] + r.charAt(1)) : t;
                                }
                                o = a[u - 1];
                        }
                        return void 0 === o ? "" : o;
                    })
                );
            }
        });
    },
    function (e, t, n) {
        e.exports = (function () {
            "use strict";
            Element.prototype.matches ||
                (Element.prototype.matches =
                    Element.prototype.matchesSelector ||
                    Element.prototype.mozMatchesSelector ||
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.oMatchesSelector ||
                    Element.prototype.webkitMatchesSelector ||
                    function (e) {
                        for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t.item(n) !== this; );
                        return n > -1;
                    }),
                Object.assign ||
                    Object.defineProperty(Object, "assign", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: function (e) {
                            if (null == e) throw new TypeError("Cannot convert first argument to object");
                            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                                var i = arguments[n];
                                if (null != i) {
                                    i = Object(i);
                                    for (var a = Object.keys(Object(i)), r = 0, l = a.length; r < l; r++) {
                                        var o = a[r],
                                            s = Object.getOwnPropertyDescriptor(i, o);
                                        void 0 !== s && s.enumerable && (t[o] = i[o]);
                                    }
                                }
                            }
                            return t;
                        },
                    });
            var e = (function () {
                    function e(e) {
                        return e instanceof Element ? ((this.selector = e), this) : ((this.selector = document.querySelector(e)), this);
                    }
                    var t = e.prototype;
                    return (
                        (t.on = function (e, t) {
                            return this.selector.addEventListener(e, t), this;
                        }),
                        (t.delegate = function (e, t, n) {
                            for (var i in (t = t.split(" ")))
                                this.on(t[i], function (t) {
                                    var i = t.target;
                                    i.matches(e) && n.call(i, t);
                                });
                        }),
                        (t.css = function (e) {
                            for (var t in e) this.selector.style[t] = e[t];
                            return this;
                        }),
                        (t.text = function (e) {
                            return e ? ((this.selector.textContent = e), this) : this.selector.textContent;
                        }),
                        (t.attr = function (e, t) {
                            return e && t ? (this.selector.setAttribute(e, t), this) : this.selector.getAttribute(e);
                        }),
                        (t.append = function (e) {
                            return this.selector.appendChild(e), this;
                        }),
                        (t.show = function () {
                            this.css({ display: "block" });
                        }),
                        (t.hide = function () {
                            this.css({ display: "none" });
                        }),
                        (t.height = function () {
                            return this.selector.offsetHeight;
                        }),
                        (t.width = function () {
                            return this.selector.offsetWidth;
                        }),
                        e
                    );
                })(),
                t = function (e) {
                    return (
                        (function (e) {
                            return !!e && "object" == typeof e;
                        })(e) &&
                        !(function (e) {
                            var t = Object.prototype.toString.call(e);
                            return (
                                "[object RegExp]" === t ||
                                "[object Date]" === t ||
                                (function (e) {
                                    return e.$$typeof === n;
                                })(e)
                            );
                        })(e)
                    );
                },
                n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
            function i(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? s(((n = e), Array.isArray(n) ? [] : {}), e, t) : e;
                var n;
            }
            function a(e, t, n) {
                return e.concat(t).map(function (e) {
                    return i(e, n);
                });
            }
            function r(e) {
                return Object.keys(e).concat(
                    (function (e) {
                        return Object.getOwnPropertySymbols
                            ? Object.getOwnPropertySymbols(e).filter(function (t) {
                                  return e.propertyIsEnumerable(t);
                              })
                            : [];
                    })(e)
                );
            }
            function l(e, t) {
                try {
                    return t in e;
                } catch (e) {
                    return !1;
                }
            }
            function o(e, t, n) {
                var a = {};
                return (
                    n.isMergeableObject(e) &&
                        r(e).forEach(function (t) {
                            a[t] = i(e[t], n);
                        }),
                    r(t).forEach(function (r) {
                        (function (e, t) {
                            return l(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
                        })(e, r) ||
                            (l(e, r) && n.isMergeableObject(t[r])
                                ? (a[r] = (function (e, t) {
                                      if (!t.customMerge) return s;
                                      var n = t.customMerge(e);
                                      return "function" == typeof n ? n : s;
                                  })(r, n)(e[r], t[r], n))
                                : (a[r] = i(t[r], n)));
                    }),
                    a
                );
            }
            var s = function (e, n, r) {
                    ((r = r || {}).arrayMerge = r.arrayMerge || a), (r.isMergeableObject = r.isMergeableObject || t), (r.cloneUnlessOtherwiseSpecified = i);
                    var l = Array.isArray(n);
                    return l === Array.isArray(e) ? (l ? r.arrayMerge(e, n, r) : o(e, n, r)) : i(n, r);
                },
                d = function (e) {
                    return /\.(jpg|gif|png)$/.test(e);
                },
                u = function (e, t, n, i) {
                    void 0 === i && (i = !1);
                    var a = document.createElement(e);
                    return n && (a[i ? "innerHTML" : "textContent"] = n), t && (a.className = t), a;
                },
                c = function (t) {
                    return new e(t);
                },
                h = function (e) {
                    return e
                        .replace(/[\w]([A-Z])/g, function (e) {
                            return e[0] + "-" + e[1];
                        })
                        .toLowerCase();
                },
                m = function (e) {
                    return "function" == typeof e;
                },
                f = function (e) {
                    return "object" == typeof e;
                },
                p = function (e) {
                    return "string" == typeof e;
                },
                _ = function (e) {
                    return Array.isArray(e);
                },
                g = function (e, t) {
                    return s(e, t);
                };
            function y(e, t) {
                (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
            }
            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            var M = (function () {
                    function e(e, t) {
                        (this.name = e), (this.properties = {}), (this.node = this.createElement(e)), t && this.set(t);
                    }
                    var t = e.prototype;
                    return (
                        (t.createElement = function (e) {
                            return document.createElementNS("http://www.w3.org/2000/svg", e);
                        }),
                        (t.addClass = function (e) {
                            this.node.setAttribute("class", e);
                        }),
                        (t.getElementCtr = function (e) {
                            return SVG + e;
                        }),
                        (t.getBBox = function () {
                            return this.node.getBBox();
                        }),
                        (t.set = function (e, t) {
                            if (f(e)) for (var n in e) (this.properties[n] = e[n]), this.applyAttr(n, e[n]);
                            else (this.properties[e] = t), this.applyAttr(e, t);
                        }),
                        (t.get = function (e) {
                            return this.properties[e];
                        }),
                        (t.applyAttr = function (e, t) {
                            this.node.setAttribute(h(e), t);
                        }),
                        (t.remove = function () {
                            this.node.parentNode.removeChild(this.node);
                        }),
                        e
                    );
                })(),
                b = (function (e) {
                    function t(t, n, i) {
                        var a;
                        return ((a = e.call(this, t, n) || this).style = i || {}), (a.style.current = a.style.current || {}), (a.isHovered = !1), (a.isSelected = !1), a.updateStyle(), a;
                    }
                    y(t, e);
                    var n = t.prototype;
                    return (
                        (n.setStyle = function (e, t) {
                            var n = {};
                            f(e) ? (n = e) : (n[e] = t), Object.assign(this.style.current, n), this.updateStyle();
                        }),
                        (n.updateStyle = function () {
                            var e = {};
                            this.mergeStyles(e, this.style.initial),
                                this.mergeStyles(e, this.style.current),
                                this.isHovered && this.mergeStyles(e, this.style.hover),
                                this.isSelected && (this.mergeStyles(e, this.style.selected), this.isHovered && this.mergeStyles(e, this.style.selectedHover)),
                                this.set(e);
                        }),
                        (n.mergeStyles = function (e, t) {
                            for (var n in (t = t || {})) null === t[n] ? delete e[n] : (e[n] = t[n]);
                        }),
                        t
                    );
                })(M),
                x = (function (e) {
                    function t(t, n) {
                        return e.call(this, "text", t, n) || this;
                    }
                    return (
                        y(t, e),
                        (t.prototype.applyAttr = function (t, n) {
                            "text" === t ? (this.node.textContent = n) : e.prototype.applyAttr.call(this, t, n);
                        }),
                        t
                    );
                })(b),
                L = (function (e) {
                    function t(t, n) {
                        return e.call(this, "image", t, n) || this;
                    }
                    y(t, e);
                    var n = t.prototype;
                    return (
                        (n.applyAttr = function (t, n) {
                            var i;
                            "image" == t
                                ? (f(n) ? ((i = n.url), (this.offset = n.offset)) : ((i = n), (this.offset = [0, 0])),
                                  this.node.setAttributeNS("http://www.w3.org/1999/xlink", "href", i),
                                  (this.width = 23),
                                  (this.height = 23),
                                  this.applyAttr("width", this.width),
                                  this.applyAttr("height", this.height),
                                  this.applyAttr("x", this.cx - this.width / 2 + this.offset[0]),
                                  this.applyAttr("y", this.cy - this.height / 2 + this.offset[1]))
                                : "cx" == t
                                ? ((this.cx = n), this.width && this.applyAttr("x", n - this.width / 2 + this.offset[0]))
                                : "cy" == t
                                ? ((this.cy = n), this.height && this.applyAttr("y", n - this.height / 2 + this.offset[1]))
                                : e.prototype.applyAttr.apply(this, arguments);
                        }),
                        (n.setStyle = function () {
                            e.prototype.setStyle.apply(this, arguments);
                        }),
                        t
                    );
                })(b),
                w = (function (e) {
                    function t(t, n, i) {
                        var a;
                        return (
                            ((a = e.call(this, "svg") || this).container = t),
                            (a.defsElement = new M("defs")),
                            a.node.appendChild(a.defsElement.node),
                            (a.rootElement = new M("g")),
                            a.node.appendChild(a.rootElement.node),
                            a.container.append(a.node),
                            a
                        );
                    }
                    y(t, e);
                    var n = t.prototype;
                    return (
                        (n.setSize = function (e, t) {
                            this.node.setAttribute("width", e), this.node.setAttribute("height", t);
                        }),
                        (n.applyTransformParams = function (e, t, n) {
                            this.rootElement.node.setAttribute("transform", "scale(" + e + ") translate(" + t + ", " + n + ")");
                        }),
                        (n.createPath = function (e, t, n) {
                            var i = new b("path", e, t);
                            return i.node.setAttribute("fill-rule", "evenodd"), this.add(i, n), i;
                        }),
                        (n.createCircle = function (e, t, n) {
                            var i = new b("circle", e, t);
                            return this.add(i, n), i;
                        }),
                        (n.createImage = function (e, t, n) {
                            var i = new L(e, t);
                            return this.add(i, n), i;
                        }),
                        (n.createText = function (e, t, n) {
                            var i = new x(e, t);
                            return this.add(i, n), i;
                        }),
                        (n.createGroup = function (e) {
                            var t = new M("g");
                            return e ? e.node.appendChild(t.node) : this.node.appendChild(t.node), (t.canvas = this), t;
                        }),
                        (n.add = function (e, t) {
                            (t = t || this.rootElement).node.appendChild(e.node), (e.canvas = this);
                        }),
                        t
                    );
                })(M),
                k = (function () {
                    function e() {}
                    var t = e.prototype;
                    return (
                        (t.getLabelText = function (e) {
                            var t = this.config.label;
                            if (t) return m(t.render) ? t.render(e) : e;
                        }),
                        (t.getLabelOffsets = function (e) {
                            var t = this.config.label;
                            if (t) {
                                if (m(t.offsets)) return t.offsets(e);
                                if (f(t.offsets)) return this.config.label.offsets[e];
                            }
                            return [0, 0];
                        }),
                        (t.setStyle = function (e, t) {
                            this.shape.setStyle(e, t);
                        }),
                        (t.remove = function () {
                            this.shape.remove(), this.label && this.label.remove();
                        }),
                        (t.hoverStatus = function (e) {
                            (this.shape.isHovered = e), this.shape.updateStyle(), (this.isHovered = e), this.label && ((this.label.isHovered = e), this.label.updateStyle());
                        }),
                        (t.select = function () {
                            this._selectStatus(!0);
                        }),
                        (t.deselect = function () {
                            this._selectStatus(!1);
                        }),
                        (t._selectStatus = function (e) {
                            (this.shape.isSelected = e), this.shape.updateStyle(), (this.isSelected = e), this.label && ((this.label.isSelected = e), this.label.updateStyle());
                        }),
                        e
                    );
                })(),
                Y = (function (e) {
                    function t(t) {
                        var n,
                            i = t.map,
                            a = t.code,
                            r = t.path,
                            l = t.style,
                            o = t.label,
                            s = t.labelStyle,
                            d = t.labelsGroup;
                        ((n = e.call(this) || this).config = arguments[0]),
                            (n.canvas = i.canvas),
                            (n.map = i),
                            (n.shape = n.canvas.createPath({ "data-code": a, d: r }, l, n.canvas.rootElement)),
                            n.shape.addClass("jsvmap-region jsvmap-element");
                        var u = n.shape.getBBox(),
                            c = n.getLabelText(a);
                        if (o && c) {
                            var h = n.getLabelOffsets(a);
                            (n.labelX = u.x + u.width / 2 + h[0]),
                                (n.labelY = u.y + u.height / 2 + h[1]),
                                (n.label = n.canvas.createText({ text: c, "text-anchor": "middle", "alignment-baseline": "central", "data-code": a, x: n.labelX, y: n.labelY }, s, d)),
                                n.label.addClass("jsvmap-region jsvmap-element");
                        }
                        return n;
                    }
                    return (
                        y(t, e),
                        (t.prototype.updateLabelPosition = function () {
                            this.label && this.label.set({ x: this.labelX * this.map.scale + this.map.transX * this.map.scale, y: this.labelY * this.map.scale + this.map.transY * this.map.scale });
                        }),
                        t
                    );
                })(k),
                D = (function (e) {
                    function t(t) {
                        var n,
                            i,
                            a = t.index,
                            r = t.style,
                            l = t.label,
                            o = t.labelsGroup,
                            s = t.cx,
                            d = t.cy,
                            u = t.map,
                            c = t.isRecentlyCreated;
                        return (
                            ((n = e.call(this) || this).map = u),
                            (n.config = arguments[0]),
                            (n.isImage = !!r.initial.image),
                            n.createShape(),
                            (i = c && l.render && c.label ? c.label : e.prototype.getLabelText.call(v(n), a)),
                            l &&
                                i &&
                                ((n.offsets = c && l.render && c.offset ? c.offset : e.prototype.getLabelOffsets.call(v(n), a)),
                                (n.labelX = s / u.scale - u.transX),
                                (n.labelY = d / u.scale - u.transY),
                                (n.label = u.canvas.createText({ text: i, "data-index": a, dy: "0.6ex", x: n.labelX, y: n.labelY }, u.params.markerLabelStyle, o)),
                                n.label.addClass("jsvmap-marker jsvmap-element"),
                                c && n.updateLabelPosition()),
                            n
                        );
                    }
                    y(t, e);
                    var n = t.prototype;
                    return (
                        (n.createShape = function () {
                            this.shape && this.shape.remove(),
                                (this.shape = this.config.map.canvas[this.isImage ? "createImage" : "createCircle"]({ "data-index": this.config.index, cx: this.config.cx, cy: this.config.cy }, this.config.style, this.config.group)),
                                this.shape.addClass("jsvmap-marker jsvmap-element"),
                                this.isImage && this.updateLabelPosition();
                        }),
                        (n.updateLabelPosition = function () {
                            this.label &&
                                this.label.set({
                                    x: this.labelX * this.map.scale + this.offsets[0] + this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
                                    y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1],
                                });
                        }),
                        (n.setStyle = function (t, n) {
                            e.prototype.setStyle.call(this, t, n), "r" === t && this.updateLabelPosition(), !!this.shape.get("image") != this.isImage && ((this.config.style = Object.assign({}, this.shape.style)), this.createShape());
                        }),
                        t
                    );
                })(k),
                T = (function () {
                    function e(e) {
                        (this.params = e || {}),
                            (this.map = this.params.map),
                            (this.series = this.params.series),
                            (this.body = u("div", "jsvmap-legend")),
                            this.params.cssClass && this.body.setAttribute("class", this.params.cssClass),
                            e.vertical ? this.map.legendVertical.appendChild(this.body) : this.map.legendHorizontal.appendChild(this.body),
                            this.render();
                    }
                    return (
                        (e.prototype.render = function () {
                            var e,
                                t,
                                n,
                                i = this.series.scale.getTicks(),
                                a = u("div", "jsvmap-legend-inner");
                            if (((this.body.innderHTML = ""), this.params.title)) {
                                var r = u("div", "jsvmap-legend-title", this.params.title);
                                this.body.appendChild(r);
                            }
                            this.body.appendChild(a);
                            for (var l = 0; l < i.length; l++) {
                                switch (((e = u("div", "jsvmap-legend-tick")), (t = u("div", "jsvmap-legend-tick-sample")), this.series.legendConfig.attribute)) {
                                    case "fill":
                                        d(i[l].value) ? (t.style.background = "url(" + i[l].value + ")") : (t.style.background = i[l].value);
                                        break;
                                    case "stroke":
                                        t.style.background = i[l].value;
                                        break;
                                    case "image":
                                        (t.style.background = "url(" + (f(i[l].value) ? i[l].value.url : i[l].value) + ") no-repeat center center"), (t.style.backgroundSize = "cover");
                                }
                                e.appendChild(t), (n = i[l].label), this.params.labelRender && (n = this.params.labelRender(n));
                                var o = u("div", "jsvmap-legend-tick-text", n);
                                e.appendChild(o), a.appendChild(e);
                            }
                        }),
                        e
                    );
                })(),
                S = (function () {
                    function e(e) {
                        this.scale = e;
                    }
                    var t = e.prototype;
                    return (
                        (t.getValue = function (e) {
                            return this.scale[e];
                        }),
                        (t.getTicks = function () {
                            var e = [];
                            for (var t in this.scale) e.push({ label: t, value: this.scale[t] });
                            return e;
                        }),
                        e
                    );
                })(),
                j = (function () {
                    function e(e, t, n) {
                        void 0 === e && (e = {}),
                            (this.map = n),
                            (this.elements = t),
                            (this.legendConfig = e),
                            (this.legendConfig.attribute = e.attribute || "fill"),
                            (this.values = e.values || {}),
                            e.attributes && this.setAttributes(e.attributes),
                            f(e.scale) && (this.scale = new S(e.scale)),
                            this.parseValues(this.values),
                            this.legendConfig.legend && (this.legend = new T(Object.assign({ map: this.map, series: this }, this.legendConfig.legend)));
                    }
                    var t = e.prototype;
                    return (
                        (t.parseValues = function (e) {
                            var t = {};
                            for (var n in e) e[n] && (t[n] = this.scale.getValue(e[n]));
                            this.setAttributes(t), Object.assign(this.values, e);
                        }),
                        (t.setAttributes = function (e) {
                            for (var t in e) this.elements[t] && this.elements[t].element.setStyle(this.legendConfig.attribute, e[t]);
                        }),
                        (t.clear = function () {
                            var e,
                                t = {};
                            for (e in this.values) this.elements[e] && (t[e] = this.elements[e].element.shape.style.initial[this.legendConfig.attribute]);
                            this.setAttributes(t), (this.values = {});
                        }),
                        e
                    );
                })();
            function E(e, t, n) {
                var i = c(t),
                    a = -1 === i.attr("class").indexOf("jsvmap-region") ? "marker" : "region",
                    r = "region" === a ? i.attr("data-code") : i.attr("data-index"),
                    l = a + ":select";
                return (
                    n && (l = a + ".tooltip:show"),
                    { event: l, type: a, code: r, element: "region" === a ? e.regions[r].element : e.markers[r].element, tooltipText: "region" === a ? e.mapData.paths[r].name || "" : e.markers[r].config.name || "" }
                );
            }
            var H = {
                mill: function (e, t, n) {
                    return { x: this.radius * (t - n) * this.radDeg, y: (-this.radius * Math.log(Math.tan((45 + 0.4 * e) * this.radDeg))) / 0.8 };
                },
                merc: function (e, t, n) {
                    return { x: this.radius * (t - n) * this.radDeg, y: -this.radius * Math.log(Math.tan(Math.PI / 4 + (e * Math.PI) / 360)) };
                },
                aea: function (e, t, n) {
                    var i = n * this.radDeg,
                        a = 29.5 * this.radDeg,
                        r = 45.5 * this.radDeg,
                        l = e * this.radDeg,
                        o = t * this.radDeg,
                        s = (Math.sin(a) + Math.sin(r)) / 2,
                        d = Math.cos(a) * Math.cos(a) + 2 * s * Math.sin(a),
                        u = s * (o - i),
                        c = Math.sqrt(d - 2 * s * Math.sin(l)) / s,
                        h = Math.sqrt(d - 2 * s * Math.sin(0)) / s;
                    return { x: c * Math.sin(u) * this.radius, y: -(h - c * Math.cos(u)) * this.radius };
                },
                lcc: function (e, t, n) {
                    var i = n * this.radDeg,
                        a = t * this.radDeg,
                        r = 33 * this.radDeg,
                        l = 45 * this.radDeg,
                        o = e * this.radDeg,
                        s = Math.log(Math.cos(r) * (1 / Math.cos(l))) / Math.log(Math.tan(Math.PI / 4 + l / 2) * (1 / Math.tan(Math.PI / 4 + r / 2))),
                        d = (Math.cos(r) * Math.pow(Math.tan(Math.PI / 4 + r / 2), s)) / s,
                        u = d * Math.pow(1 / Math.tan(Math.PI / 4 + o / 2), s),
                        c = d * Math.pow(1 / Math.tan(Math.PI / 4 + 0), s);
                    return { x: u * Math.sin(s * (a - i)) * this.radius, y: -(c - u * Math.cos(s * (a - i))) * this.radius };
                },
            };
            (H.degRad = 180 / Math.PI), (H.radDeg = Math.PI / 180), (H.radius = 6381372);
            var O = Object.freeze({
                    __proto__: null,
                    handleContainerEvents: function () {
                        var e,
                            t,
                            n = this,
                            i = !1,
                            a = this;
                        this.params.draggable &&
                            (this.container
                                .on("mousemove", function (n) {
                                    return i && ((a.transX -= (e - n.pageX) / a.scale), (a.transY -= (t - n.pageY) / a.scale), a.applyTransform(), (e = n.pageX), (t = n.pageY)), !1;
                                })
                                .on("mousedown", function (n) {
                                    return (i = !0), (e = n.pageX), (t = n.pageY), !1;
                                }),
                            c("body").on("mouseup", function () {
                                i = !1;
                            })),
                            this.params.zoomOnScroll &&
                                this.container.on("wheel", function (e) {
                                    var t = 0;
                                    e.preventDefault(), (t = (e.deltaY || -e.wheelDelta || e.detail) >> 10 || 1), (t *= 75);
                                    var i = n.container.selector.getBoundingClientRect(),
                                        r = e.pageX - i.left - window.pageXOffset,
                                        l = e.pageY - i.top - window.pageYOffset,
                                        o = Math.pow(1 + a.params.zoomOnScrollSpeed / 1e3, -1.5 * t);
                                    a.tooltip.hide(), a.setScale(a.scale * o, r, l), e.preventDefault();
                                });
                    },
                    handleZoomButtons: function () {
                        var e = this,
                            t = this,
                            n = u("div", "jsvmap-zoomin", "&#43;", !0),
                            i = u("div", "jsvmap-zoomout", "&#x2212", !0);
                        this.container.append(n).append(i),
                            n.addEventListener("click", function () {
                                e.setScale(t.scale * t.params.zoomStep, t.width / 2, t.height / 2, !1, t.params.zoomAnimate);
                            }),
                            i.addEventListener("click", function () {
                                e.setScale(t.scale / t.params.zoomStep, t.width / 2, t.height / 2, !1, t.params.zoomAnimate);
                            });
                    },
                    createRegions: function () {
                        var e, t;
                        for (e in ((this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.createGroup()), this.mapData.paths))
                            (t = new Y({
                                map: this,
                                code: e,
                                path: this.mapData.paths[e].path,
                                style: Object.assign({}, this.params.regionStyle),
                                labelStyle: this.params.regionLabelStyle,
                                labelsGroup: this.regionLabelsGroup,
                                label: this.params.labels && this.params.labels.regions,
                            })),
                                (this.regions[e] = { config: this.mapData.paths[e], element: t });
                    },
                    createMarkers: function (e, t) {
                        var n, i;
                        for (var a in ((this.markersGroup = this.markersGroup || this.canvas.createGroup()), (this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.createGroup()), e))
                            !1 !== (i = this.getMarkerPosition(e[a])) &&
                                ((n = new D({
                                    index: a,
                                    map: this,
                                    style: g(this.params.markerStyle, { initial: e[a].style || {} }),
                                    label: this.params.labels && this.params.labels.markers,
                                    labelsGroup: this.markerLabelsGroup,
                                    cx: i.x,
                                    cy: i.y,
                                    group: this.markersGroup,
                                    isRecentlyCreated: !!t && e[a],
                                })),
                                this.markers[a] && this.removeMarkers([a]),
                                (this.markers[a] = { element: n, config: e[a] }));
                    },
                    createTooltip: function () {
                        var e = this,
                            t = this,
                            n = u("div", "jsvmap-toolip");
                        (this.tooltip = c(document.body.appendChild(n))),
                            this.container.on("mousemove", function (n) {
                                if ("block" === t.tooltip.selector.style.display) {
                                    var i = n.pageX - 10 - t.tooltip.width() + "px",
                                        a = n.pageY - 10 - t.tooltip.height() + "px";
                                    i < 5 && (i = n.pageX + 15), i < 5 && (a = n.pageY + 15), e.tooltip.css({ left: i, top: a });
                                }
                            });
                    },
                    createSeries: function () {
                        var e, t;
                        for (t in ((this.series = { markers: [], regions: [] }), this.params.series)) for (e = 0; e < this.params.series[t].length; e++) this.series[t][e] = new j(this.params.series[t][e], this[t], this);
                    },
                    handleElementEvents: function () {
                        var e = this;
                        this.container.delegate(".jsvmap-element", "mouseover mouseout", function (t) {
                            var n = E(e, this, !0),
                                i = e.params.showTooltip;
                            if ("mouseover" === t.type) {
                                var a = t.defaultPrevented;
                                a || n.element.hoverStatus(!0),
                                    i && !a && (e.tooltip.text(n.tooltipText), e.tooltip.show(), (e.tooltipHeight = e.tooltip.height()), (e.tooltipWidth = e.tooltip.width()), e.emit(n.event, [e.tooltip, n.code]));
                            } else n.element.hoverStatus(!1), i && e.tooltip.hide();
                        }),
                            this.container.delegate(".jsvmap-element", "mouseup", function (t) {
                                var n = E(e, this);
                                if ((("region" === n.type && e.params.regionsSelectable) || ("marker" === n.type && e.params.markersSelectable)) && !t.defaultPrevented) {
                                    var i = n.element;
                                    e.params[n.type + "sSelectableOne"] && e.clearSelected(n.type + "s"), n.element.isSelected ? i.deselect() : i.select(), e.emit(n.event, [n.code, n.element.isSelected, e.getSelected(n.type + "s")]);
                                }
                            });
                    },
                    setFocus: function (e) {
                        var t,
                            n,
                            i = this;
                        if (((e = e || {}).region && p(e.region) ? (n = [e.region]) : e.regions && _(e.regions) && (n = e.regions), n))
                            return (
                                n.forEach(function (e) {
                                    if (i.regions[e]) {
                                        var n = i.regions[e].element.shape.getBBox();
                                        n &&
                                            (t =
                                                void 0 === t
                                                    ? n
                                                    : {
                                                          x: Math.min(t.x, n.x),
                                                          y: Math.min(t.y, n.y),
                                                          width: Math.max(t.x + t.width, n.x + n.width) - Math.min(t.x, n.x),
                                                          height: Math.max(t.y + t.height, n.y + n.height) - Math.min(t.y, n.y),
                                                      });
                                    }
                                }),
                                this.setScale(Math.min(this.width / t.width, this.height / t.height), -(t.x + t.width / 2), -(t.y + t.height / 2), !0, e.animate)
                            );
                    },
                    bindContainerTouchEvents: function () {
                        var e,
                            t,
                            n,
                            i,
                            a,
                            r,
                            l,
                            o = this,
                            s = function (s) {
                                var d,
                                    u,
                                    c,
                                    h,
                                    m = s.touches;
                                if (("touchstart" == s.type && (l = 0), 1 == m.length))
                                    1 == l &&
                                        ((c = o.transX),
                                        (h = o.transY),
                                        (o.transX -= (n - m[0].pageX) / o.scale),
                                        (o.transY -= (i - m[0].pageY) / o.scale),
                                        o.tooltip.hide(),
                                        o.applyTransform(),
                                        (c == o.transX && h == o.transY) || s.preventDefault()),
                                        (n = m[0].pageX),
                                        (i = m[0].pageY);
                                else if (2 == m.length)
                                    if (2 == l) (u = Math.sqrt(Math.pow(m[0].pageX - m[1].pageX, 2) + Math.pow(m[0].pageY - m[1].pageY, 2)) / t), o.setScale(e * u, a, r), o.tooltip.hide(), s.preventDefault();
                                    else {
                                        var f = o.container.selector.getBoundingClientRect();
                                        (d = { top: f.top + window.scrollY, left: f.left + window.scrollX }),
                                            (a = m[0].pageX > m[1].pageX ? m[1].pageX + (m[0].pageX - m[1].pageX) / 2 : m[0].pageX + (m[1].pageX - m[0].pageX) / 2),
                                            (r = m[0].pageY > m[1].pageY ? m[1].pageY + (m[0].pageY - m[1].pageY) / 2 : m[0].pageY + (m[1].pageY - m[0].pageY) / 2),
                                            (a -= d.left),
                                            (r -= d.top),
                                            (e = o.scale),
                                            (t = Math.sqrt(Math.pow(m[0].pageX - m[1].pageX, 2) + Math.pow(m[0].pageY - m[1].pageY, 2)));
                                    }
                                l = m.length;
                            };
                        this.container.on("touchstart", s).on("touchmove", s);
                    },
                    applyTransform: function () {
                        var e, t, n, i;
                        this.defaultWidth * this.scale <= this.width
                            ? ((e = (this.width - this.defaultWidth * this.scale) / (2 * this.scale)), (n = (this.width - this.defaultWidth * this.scale) / (2 * this.scale)))
                            : ((e = 0), (n = (this.width - this.defaultWidth * this.scale) / this.scale)),
                            this.defaultHeight * this.scale <= this.height
                                ? ((t = (this.height - this.defaultHeight * this.scale) / (2 * this.scale)), (i = (this.height - this.defaultHeight * this.scale) / (2 * this.scale)))
                                : ((t = 0), (i = (this.height - this.defaultHeight * this.scale) / this.scale)),
                            this.transY > t ? (this.transY = t) : this.transY < i && (this.transY = i),
                            this.transX > e ? (this.transX = e) : this.transX < n && (this.transX = n),
                            this.canvas.applyTransformParams(this.scale, this.transX, this.transY),
                            this.markers && this.repositionMarkers(),
                            this.repositionLabels();
                    },
                    resize: function () {
                        var e = this.baseScale;
                        this.width / this.height > this.defaultWidth / this.defaultHeight
                            ? ((this.baseScale = this.height / this.defaultHeight), (this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale)))
                            : ((this.baseScale = this.width / this.defaultWidth), (this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale))),
                            (this.scale *= this.baseScale / e),
                            (this.transX *= this.baseScale / e),
                            (this.transY *= this.baseScale / e);
                    },
                    updateSize: function () {
                        (this.width = this.container.width()), (this.height = this.container.height()), this.resize(), this.canvas.setSize(this.width, this.height), this.applyTransform();
                    },
                    coordsToPoint: function (e, t) {
                        var n,
                            i,
                            a,
                            r = P.maps[this.params.map].projection,
                            l = r.centralMeridian;
                        return (
                            (n = H[r.type](e, t, l)),
                            !!(i = this.getInsetForPoint(n.x, n.y)) &&
                                ((a = i.bbox),
                                (n.x = ((n.x - a[0].x) / (a[1].x - a[0].x)) * i.width * this.scale),
                                (n.y = ((n.y - a[0].y) / (a[1].y - a[0].y)) * i.height * this.scale),
                                { x: n.x + this.transX * this.scale + i.left * this.scale, y: n.y + this.transY * this.scale + i.top * this.scale })
                        );
                    },
                    setScale: function (e, t, n, i, a) {
                        var r,
                            l,
                            o,
                            s,
                            d,
                            u,
                            c,
                            h,
                            m,
                            f,
                            p = this,
                            _ = 0,
                            g = Math.abs(Math.round((60 * (e - this.scale)) / Math.max(e, this.scale)));
                        e > this.params.zoomMax * this.baseScale ? (e = this.params.zoomMax * this.baseScale) : e < this.params.zoomMin * this.baseScale && (e = this.params.zoomMin * this.baseScale),
                            void 0 !== t &&
                                void 0 !== n &&
                                ((r = e / this.scale),
                                i
                                    ? ((m = t + (this.defaultWidth * (this.width / (this.defaultWidth * e))) / 2), (f = n + (this.defaultHeight * (this.height / (this.defaultHeight * e))) / 2))
                                    : ((m = this.transX - ((r - 1) / e) * t), (f = this.transY - ((r - 1) / e) * n))),
                            a && g > 0
                                ? ((o = this.scale),
                                  (s = (e - o) / g),
                                  (d = this.transX * this.scale),
                                  (c = this.transY * this.scale),
                                  (u = (m * e - d) / g),
                                  (h = (f * e - c) / g),
                                  (l = setInterval(function () {
                                      (_ += 1),
                                          (p.scale = o + s * _),
                                          (p.transX = (d + u * _) / p.scale),
                                          (p.transY = (c + h * _) / p.scale),
                                          p.applyTransform(),
                                          _ == g && (clearInterval(l), p.emit("viewport:changed", [p.scale, p.transX, p.transY]));
                                  }, 10)))
                                : ((this.transX = m), (this.transY = f), (this.scale = e), this.applyTransform(), this.emit("viewport:changed", [this.scale, this.transX, this.transY]));
                    },
                    getMarkerPosition: function (e) {
                        var t = e.coords;
                        return P.maps[this.params.map].projection ? this.coordsToPoint.apply(this, t) : { x: t[0] * this.scale + this.transX * this.scale, y: t[1] * this.scale + this.transY * this.scale };
                    },
                    repositionMarkers: function () {
                        var e;
                        for (var t in this.markers) !1 !== (e = this.getMarkerPosition(this.markers[t].config)) && this.markers[t].element.setStyle({ cx: e.x, cy: e.y });
                    },
                    repositionLabels: function () {
                        var e = this.params.labels;
                        if (e) {
                            if (e.regions) for (var t in this.regions) this.regions[t].element.updateLabelPosition();
                            if (e.markers) for (var n in this.markers) this.markers[n].element.updateLabelPosition();
                        }
                    },
                }),
                A = {
                    onViewportChange: "viewport:changed",
                    onRegionSelected: "region:select",
                    onMarkerSelected: "marker:select",
                    onRegionTooltipShow: "region.tooltip:show",
                    onMarkerTooltipShow: "marker.tooltip:show",
                    onLoaded: "map:loaded",
                },
                P = (function () {
                    function e(t) {
                        if ((void 0 === t && (t = {}), (this.params = g(e.defaults, t)), !e.maps[this.params.map])) throw new Error("Attempt to use map which was not loaded: " + t.map);
                        (this.mapData = e.maps[this.params.map]),
                            (this.regionsData = {}),
                            (this.regionsColors = {}),
                            (this.markers = {}),
                            (this.defaultWidth = this.mapData.width),
                            (this.defaultHeight = this.mapData.height),
                            (this.height = 0),
                            (this.width = 0),
                            (this.scale = 1),
                            (this.baseScale = 1),
                            (this.transX = 0),
                            (this.transY = 0),
                            (this.baseTransX = 0),
                            (this.baseTransY = 0),
                            (this.regions = {}),
                            "loading" !== window.document.readyState ? this.init(t.selector) : window.addEventListener("DOMContentLoaded", this.init.bind(this, t.selector));
                    }
                    var t = e.prototype;
                    return (
                        (t.init = function (e) {
                            (this.container = c(e).attr("class", "jsvmap-container")),
                                (this.canvas = new w(this.container, this.width, this.height)),
                                this.setBackgroundColor(this.params.backgroundColor),
                                this.handleContainerEvents(),
                                this.createRegions(),
                                this.updateSize(),
                                this.createMarkers(this.params.markers || {}),
                                this.params.showTooltip && this.createTooltip(),
                                this.params.zoomButtons && this.handleZoomButtons(),
                                this.params.selectedRegions && this.setSelected("regions", this.params.selectedRegions),
                                this.params.selectedMarkers && this.setSelected("markers", this.params.selectedMarkers),
                                this.params.focusOn && this.setFocus(this.params.focusOn),
                                this.params.bindTouchEvents && ("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)) && this.bindContainerTouchEvents(),
                                this.handleElementEvents(),
                                this.repositionLabels(),
                                this.container.append((this.legendHorizontal = u("div", "jsvmap-series-container jsvmap-series-h"))).append((this.legendVertical = u("div", "jsvmap-series-container jsvmap-series-v"))),
                                this.params.series && this.createSeries(),
                                this.emit("map:loaded", [this]);
                        }),
                        (t.emit = function (e, t) {
                            for (var n in A) A[n] === e && m(this.params[n]) && this.params[n].apply(this, t);
                        }),
                        (t.setBackgroundColor = function (e) {
                            this.container.css({ backgroundColor: e });
                        }),
                        (t.getInsetForPoint = function (t, n) {
                            var i,
                                a,
                                r = e.maps[this.params.map].insets;
                            for (i = 0; i < r.length; i++) if (t > (a = r[i].bbox)[0].x && t < a[1].x && n > a[0].y && n < a[1].y) return r[i];
                        }),
                        (t.getSelected = function (e) {
                            var t,
                                n = [];
                            for (t in this[e]) this[e][t].element.isSelected && n.push(t);
                            return n;
                        }),
                        (t.clearSelected = function (e) {
                            var t = this;
                            this.getSelected(e).forEach(function (n) {
                                t[e][n].element.deselect();
                            });
                        }),
                        (t.setSelected = function (e, t) {
                            var n = this;
                            t.forEach(function (t) {
                                n[e][t] && n[e][t].element.select();
                            });
                        }),
                        (t.getSelectedRegions = function () {
                            return this.getSelected("regions");
                        }),
                        (t.clearSelectedRegions = function () {
                            var e = this;
                            this.getSelected("regions").forEach(function (t) {
                                e.regions[t].element.deselect();
                            });
                        }),
                        (t.getSelectedMarkers = function () {
                            return this.getSelected("markers");
                        }),
                        (t.clearSelectedMarkers = function () {
                            var e = this;
                            this.getSelected("markers").forEach(function (t) {
                                e.markers[t].element.deselect();
                            });
                        }),
                        (t.addMarker = function (e, t) {
                            var n;
                            this.createMarkers((((n = {})[e] = t), n), !0);
                        }),
                        (t.removeMarkers = function (e) {
                            var t = this;
                            e.forEach(function (e) {
                                t.markers[e].element.remove(), delete t.markers[e];
                            });
                        }),
                        (t.reset = function () {
                            for (var e in this.series) for (var t = 0; t < this.series[e].length; t++) this.series[e][t].clear();
                            (this.height = 0), (this.width = 0), (this.scale = this.baseScale), (this.transX = this.baseTransX), (this.transY = this.baseTransY), this.applyTransform();
                        }),
                        e
                    );
                })();
            (P.maps = {}),
                (P.defaults = {
                    map: "world",
                    backgroundColor: "tranparent",
                    draggable: !0,
                    zoomButtons: !0,
                    zoomOnScroll: !0,
                    zoomOnScrollSpeed: 3,
                    zoomMax: 12,
                    zoomMin: 1,
                    zoomAnimate: !0,
                    showTooltip: !0,
                    zoomStep: 1.5,
                    bindTouchEvents: !0,
                    markersSelectable: !1,
                    markersSelectableOne: !1,
                    markerStyle: {
                        initial: { r: 7, fill: "black", fillOpacity: 1, stroke: "#FFF", strokeWidth: 5, strokeOpacity: 0.65 },
                        hover: { fill: "#3cc0ff", stroke: "#5cc0ff", cursor: "pointer", strokeWidth: 2 },
                        selected: { fill: "blue" },
                        selectedHover: {},
                    },
                    markerLabelStyle: { initial: { fontFamily: "Verdana", fontSize: 12, fontWeight: "bold", cursor: "default", fill: "black" }, hover: { cursor: "pointer" } },
                    regionsSelectable: !1,
                    regionsSelectableOne: !1,
                    regionStyle: { initial: { fill: "#e3eaef", fillOpacity: 1, stroke: "none", strokeWidth: 0, strokeOpacity: 1 }, hover: { fillOpacity: 0.7, cursor: "pointer" }, selected: { fill: "#000" }, selectedHover: {} },
                    regionLabelStyle: { initial: { fontFamily: "Verdana", fontSize: "12", fontWeight: "bold", cursor: "default", fill: "#35373e" }, hover: { cursor: "pointer" } },
                }),
                Object.assign(P.prototype, O);
            var C = (function () {
                function e(e) {
                    if ((void 0 === e && (e = {}), !e.selector)) throw new Error("Selector is not given.");
                    return new P(e);
                }
                return (
                    (e.prototype.addMap = function (e, t) {
                        P.maps[e] = t;
                    }),
                    e
                );
            })();
            return (window.jsVectorMap = window.JsVectorMap = C);
        })();
    },
    function (e, t) {
        JsVectorMap.prototype.addMap("world", {
            insets: [
                {
                    width: 900,
                    top: 0,
                    left: 0,
                    height: 440.70631074413296,
                    bbox: [
                        { y: -12671671.123330014, x: -20004297.151525836 },
                        { y: 6930392.025135122, x: 20026572.39474939 },
                    ],
                },
            ],
            paths: {
                BD: {
                    path:
                        "M651.84,230.21l-0.6,-2.0l-1.36,-1.71l-2.31,-0.11l-0.41,0.48l0.2,0.94l-0.53,0.99l-0.72,-0.36l-0.68,0.35l-1.2,-0.36l-0.37,-2.0l-0.81,-1.86l0.39,-1.46l-0.22,-0.47l-1.14,-0.53l0.29,-0.5l1.48,-0.94l0.03,-0.65l-1.55,-1.22l0.55,-1.14l1.61,0.94l1.04,0.15l0.18,1.54l0.34,0.35l5.64,0.63l-0.84,1.64l-1.22,0.34l-0.77,1.51l0.07,0.47l1.37,1.37l0.67,-0.19l0.42,-1.39l1.21,3.84l-0.03,1.21l-0.33,-0.15l-0.4,0.28Z",
                    name: "Bangladesh",
                },
                BE: { path: "M429.29,144.05l1.91,0.24l2.1,-0.63l2.63,1.99l-0.21,1.66l-0.69,0.4l-0.18,1.2l-1.66,-1.13l-1.39,0.15l-2.73,-2.7l-1.17,-0.18l-0.16,-0.52l1.54,-0.5Z", name: "Belgium" },
                BF: {
                    path:
                        "M421.42,247.64l-0.11,0.95l0.34,1.16l1.4,1.71l0.07,1.1l0.32,0.37l2.55,0.51l-0.04,1.28l-0.38,0.53l-1.07,0.21l-0.72,1.18l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.73l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.72l-0.13,-1.11l0.61,-0.96l0.02,-0.93l1.87,-1.98l0.44,-1.81l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.09l0.55,-0.83l2.2,-1.0l1.15,-0.3l0.72,0.45l1.13,-0.01Z",
                    name: "Burkina Faso",
                },
                BG: {
                    path:
                        "M491.65,168.18l-0.86,0.88l-0.91,2.17l0.48,1.34l-1.6,-0.24l-2.55,0.95l-0.28,1.51l-1.8,0.22l-2.0,-1.0l-1.92,0.79l-1.42,-0.07l-0.15,-1.63l-1.05,-0.97l0.0,-0.8l1.2,-1.57l0.01,-0.56l-1.14,-1.23l-0.05,-0.94l0.88,0.97l0.88,-0.2l1.91,0.47l3.68,0.16l1.42,-0.81l2.72,-0.66l2.55,1.24Z",
                    name: "Bulgaria",
                },
                BA: {
                    path: "M463.49,163.65l2.1,0.5l1.72,-0.03l1.52,0.68l-0.36,0.78l0.08,0.45l1.04,1.02l-0.25,0.98l-1.81,1.15l-0.38,1.38l-1.67,-0.87l-0.89,-1.2l-2.11,-1.83l-1.63,-2.22l0.23,-0.57l0.48,0.38l0.55,-0.06l0.43,-0.51l0.94,-0.06Z",
                    name: "Bosnia and Herz.",
                },
                BN: { path: "M707.48,273.58l0.68,-0.65l1.41,-0.91l-0.15,1.63l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z", name: "Brunei" },
                BO: {
                    path:
                        "M263.83,340.69l-3.09,-0.23l-0.38,0.23l-0.7,1.52l-1.31,-1.53l-3.28,-0.64l-2.37,2.4l-1.31,0.26l-0.88,-3.26l-1.3,-2.86l0.74,-2.37l-0.13,-0.43l-1.2,-1.01l-0.37,-1.89l-1.08,-1.55l1.45,-2.56l-0.96,-2.33l0.47,-1.06l-0.34,-0.73l0.91,-1.32l0.16,-3.84l0.5,-1.18l-1.81,-3.41l2.46,0.07l0.8,-0.85l3.4,-1.91l2.66,-0.35l-0.19,1.38l0.3,1.07l-0.05,1.97l2.72,2.27l2.88,0.49l0.89,0.86l1.79,0.58l0.98,0.7l1.71,0.05l1.17,0.61l0.6,2.7l-0.7,0.54l0.96,2.99l0.37,0.28l4.3,0.1l-0.25,1.2l0.27,1.02l1.43,0.9l0.5,1.35l-0.41,1.86l-0.65,1.08l0.12,1.35l-2.69,-1.65l-2.4,-0.03l-4.36,0.76l-1.49,2.5l-0.11,1.52l-0.75,2.37Z",
                    name: "Bolivia",
                },
                JP: {
                    path:
                        "M781.12,166.87l1.81,0.68l1.62,-0.97l0.39,2.42l-3.35,0.75l-2.23,2.88l-3.63,-1.9l-0.56,0.2l-1.26,3.05l-2.16,0.03l-0.29,-2.51l1.08,-2.03l2.45,-0.16l0.37,-0.33l1.25,-5.94l2.47,2.71l2.03,1.12ZM773.56,187.34l-0.91,2.22l0.37,1.52l-1.14,1.75l-3.02,1.26l-4.58,0.27l-3.34,3.01l-1.25,-0.8l-0.09,-1.9l-0.46,-0.38l-4.35,0.62l-3.0,1.32l-2.85,0.05l-0.37,0.27l0.13,0.44l2.32,1.89l-1.54,4.34l-1.26,0.9l-0.79,-0.7l0.56,-2.27l-0.21,-0.45l-1.47,-0.75l-0.74,-1.4l2.12,-0.84l1.26,-1.7l2.45,-1.42l1.83,-1.91l4.78,-0.81l2.6,0.57l0.44,-0.21l2.39,-4.66l1.29,1.06l0.5,0.01l5.1,-4.02l1.69,-3.73l-0.38,-3.4l0.9,-1.61l2.14,-0.44l1.23,3.72l-0.07,2.18l-2.23,2.84l-0.04,3.16ZM757.78,196.26l0.19,0.56l-1.01,1.21l-1.16,-0.68l-1.28,0.65l-0.69,1.45l-1.02,-0.5l0.01,-0.93l1.14,-1.38l1.57,0.14l0.85,-0.98l1.4,0.46Z",
                    name: "Japan",
                },
                BI: { path: "M495.45,295.49l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.36Z", name: "Burundi" },
                BJ: {
                    path:
                        "M429.57,255.75l-0.05,0.8l0.5,1.34l-0.42,0.86l0.17,0.79l-1.81,2.12l-0.57,1.76l-0.08,5.42l-1.41,0.2l-0.48,-1.36l0.11,-5.71l-0.52,-0.7l-0.2,-1.35l-1.48,-1.48l0.21,-0.9l0.89,-0.43l0.42,-0.92l1.27,-0.36l1.22,-1.34l0.61,-0.0l1.62,1.24Z",
                    name: "Benin",
                },
                BT: { path: "M650.32,213.86l0.84,0.71l-0.12,1.1l-3.76,-0.11l-1.57,0.4l-1.93,-0.87l1.48,-1.96l1.13,-0.57l1.63,0.57l1.33,0.08l0.99,0.65Z", name: "Bhutan" },
                JM: { path: "M228.38,239.28l-0.8,0.4l-2.26,-1.06l0.84,-0.23l2.14,0.3l1.17,0.56l-1.08,0.03Z", name: "Jamaica" },
                BW: {
                    path:
                        "M483.92,330.07l2.27,4.01l2.83,2.86l0.96,0.31l0.78,2.43l2.13,0.61l1.02,0.76l-3.0,1.64l-2.32,2.02l-1.54,2.69l-1.52,0.45l-0.64,1.94l-1.34,0.52l-1.85,-0.12l-1.21,-0.74l-1.35,-0.3l-1.22,0.62l-0.75,1.37l-2.31,1.9l-1.4,0.21l-0.35,-0.59l0.16,-1.75l-1.48,-2.54l-0.62,-0.43l-0.0,-7.1l2.08,-0.08l0.39,-0.4l0.07,-8.9l5.19,-0.93l0.8,0.89l0.51,0.07l1.5,-0.95l2.21,-0.49Z",
                    name: "Botswana",
                },
                BR: {
                    path:
                        "M259.98,275.05l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.63l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.45l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.72l2.12,0.12l0.71,0.62l1.21,4.51l-0.95,3.98l-4.72,5.06l-1.64,2.92l-1.72,2.05l-0.8,0.3l-0.72,2.03l0.18,4.75l-0.94,5.53l-0.81,1.13l-0.43,3.36l-2.55,3.5l-0.4,2.51l-1.86,1.04l-0.67,1.53l-2.54,0.01l-3.94,1.01l-1.83,1.2l-2.87,0.82l-3.03,2.19l-2.2,2.83l-0.36,2.0l0.4,1.58l-0.44,2.6l-0.51,1.2l-1.77,1.54l-2.75,4.78l-3.83,3.42l-1.24,2.74l-1.18,1.15l-0.36,-0.83l0.95,-1.14l0.01,-0.5l-1.52,-1.97l-4.56,-3.32l-1.03,-0.0l-2.38,-2.02l-0.81,-0.0l5.34,-5.45l3.77,-2.58l0.22,-2.46l-1.35,-1.81l-0.91,0.07l0.58,-2.33l0.01,-1.54l-1.11,-0.83l-1.75,0.3l-0.44,-3.11l-0.52,-0.95l-1.88,-0.88l-1.24,0.47l-2.17,-0.41l0.15,-3.21l-0.62,-1.34l0.66,-0.73l-0.22,-1.34l0.66,-1.13l0.44,-2.04l-0.61,-1.83l-1.4,-0.86l-0.2,-0.75l0.34,-1.39l-0.38,-0.5l-4.52,-0.1l-0.72,-2.22l0.59,-0.42l-0.03,-1.1l-0.5,-0.87l-0.32,-1.7l-1.45,-0.76l-1.63,-0.02l-1.05,-0.72l-1.6,-0.48l-1.13,-0.99l-2.69,-0.4l-2.47,-2.06l0.13,-4.35l-0.45,-0.45l-3.46,0.5l-3.44,1.94l-0.6,0.74l-2.9,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.52l-0.63,-0.34l-1.94,1.41l-1.87,-0.06l-0.83,-1.18l-1.37,-0.26l0.21,-1.01l-1.35,-1.49l-0.88,-1.91l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.82l-1.83,-0.19l-0.36,-3.22Z",
                    name: "Brazil",
                },
                BS: { path: "M226.4,223.87l-0.48,-1.15l-0.84,-0.75l0.36,-1.11l0.95,1.95l0.01,1.06ZM225.56,216.43l-1.87,0.29l-0.04,-0.22l0.74,-0.14l1.17,0.06Z", name: "Bahamas" },
                BY: {
                    path:
                        "M493.84,128.32l0.29,0.7l0.49,0.23l1.19,-0.38l2.09,0.72l0.19,1.26l-0.45,1.24l1.57,2.26l0.89,0.59l0.17,0.81l1.58,0.56l0.4,0.5l-0.53,0.41l-1.87,-0.11l-0.73,0.38l-0.13,0.52l1.04,2.74l-1.91,0.26l-0.89,0.99l-0.11,1.18l-2.73,-0.04l-0.53,-0.62l-0.52,-0.08l-0.75,0.46l-0.91,-0.42l-1.92,-0.07l-2.75,-0.79l-2.6,-0.28l-2.0,0.07l-1.5,0.92l-0.67,0.07l-0.08,-1.22l-0.59,-1.19l1.36,-0.88l0.01,-1.35l-0.7,-1.41l-0.07,-1.0l2.16,-0.02l2.72,-1.3l0.75,-2.04l1.91,-1.04l0.2,-0.41l-0.19,-1.25l3.8,-1.78l2.3,0.77Z",
                    name: "Belarus",
                },
                BZ: { path: "M198.03,244.38l0.1,-4.49l0.69,-0.06l0.74,-1.3l0.34,0.28l-0.4,1.3l0.17,0.58l-0.34,2.25l-1.3,1.42Z", name: "Belize" },
                RU: {
                    path:
                        "M491.55,115.25l2.55,-1.85l-0.01,-0.65l-2.2,-1.5l7.32,-6.76l1.03,-2.11l-0.13,-0.49l-3.46,-2.52l0.86,-2.7l-2.11,-2.81l1.56,-3.67l-2.77,-4.52l2.15,-2.99l-0.08,-0.55l-3.65,-2.73l0.3,-2.54l1.81,-0.37l4.26,-1.77l2.42,-1.45l4.06,2.61l6.79,1.04l9.34,4.85l1.78,1.88l0.14,2.46l-2.55,2.02l-3.9,1.06l-11.07,-3.14l-2.06,0.53l-0.13,0.7l3.94,2.94l0.31,5.86l0.26,0.36l5.14,2.24l0.58,-0.29l0.32,-1.94l-1.35,-1.78l1.13,-1.09l6.13,2.42l2.11,-0.98l0.18,-0.56l-1.51,-2.67l5.41,-3.76l2.07,0.22l2.26,1.41l0.57,-0.16l1.46,-2.87l-0.05,-0.44l-1.92,-2.32l1.12,-2.32l-1.32,-2.27l5.87,1.16l1.04,1.75l-2.59,0.43l-0.33,0.4l0.02,2.36l2.46,1.83l3.87,-0.91l0.86,-2.8l13.69,-5.65l0.99,0.11l-1.92,2.06l0.23,0.67l3.11,0.45l2.0,-1.48l4.56,-0.12l3.64,-1.73l2.65,2.44l0.56,-0.01l2.85,-2.88l-0.01,-0.57l-2.35,-2.29l0.9,-1.01l7.14,1.3l3.41,1.36l9.05,4.97l0.51,-0.11l1.67,-2.27l-0.05,-0.53l-2.43,-2.21l-0.06,-0.78l-0.34,-0.36l-2.52,-0.36l0.64,-1.93l-1.32,-3.46l-0.06,-1.21l4.48,-4.06l1.69,-4.29l1.6,-0.81l6.23,1.18l0.44,2.21l-2.29,3.64l0.06,0.5l1.47,1.39l0.76,3.0l-0.56,6.03l2.69,2.82l-0.96,2.57l-4.86,5.95l0.23,0.64l2.86,0.61l0.42,-0.17l0.93,-1.4l2.64,-1.03l0.87,-2.24l2.09,-1.96l0.07,-0.5l-1.36,-2.28l1.09,-2.69l-0.32,-0.55l-2.47,-0.33l-0.5,-2.06l1.94,-4.38l-0.06,-0.42l-2.96,-3.4l4.12,-2.88l0.16,-0.4l-0.51,-2.93l0.54,-0.05l1.13,2.25l-0.96,4.35l0.27,0.47l2.68,0.84l0.5,-0.51l-1.02,-2.99l3.79,-1.66l5.01,-0.24l4.53,2.61l0.48,-0.06l0.07,-0.48l-2.18,-3.82l-0.23,-4.67l3.98,-0.9l5.97,0.21l5.49,-0.64l0.27,-0.65l-1.83,-2.31l2.56,-2.9l2.87,-0.17l4.8,-2.47l6.54,-0.67l1.03,-1.42l6.25,-0.45l2.32,1.11l5.53,-2.7l4.5,0.08l0.39,-0.28l0.66,-2.15l2.26,-2.12l5.69,-2.11l3.21,1.29l-2.46,0.94l-0.25,0.42l0.34,0.35l5.41,0.77l0.61,2.33l0.58,0.25l2.2,-1.22l7.13,0.07l5.51,2.47l1.79,1.72l-0.53,2.24l-9.16,4.15l-1.97,1.52l0.16,0.71l6.77,1.91l2.16,-0.78l1.13,2.74l0.67,0.11l1.01,-1.15l3.81,-0.73l7.7,0.77l0.54,1.99l0.36,0.29l10.47,0.71l0.43,-0.38l0.13,-3.23l4.87,0.78l3.95,-0.02l3.83,2.4l1.03,2.71l-1.35,1.79l0.02,0.5l3.15,3.64l4.07,1.96l0.53,-0.18l2.23,-4.47l3.95,1.93l4.16,-1.21l4.73,1.39l2.05,-1.26l3.94,0.62l0.43,-0.55l-1.68,-4.02l2.89,-1.8l22.31,3.03l2.16,2.75l6.55,3.51l10.29,-0.81l4.82,0.73l1.85,1.66l-0.29,3.08l0.25,0.41l3.08,1.26l3.56,-0.88l4.35,-0.11l4.8,0.87l4.57,-0.47l4.23,3.79l0.43,0.07l3.1,-1.4l0.16,-0.6l-1.88,-2.62l0.85,-1.52l7.71,1.21l5.22,-0.26l7.09,2.09l9.59,5.22l6.35,4.11l-0.2,2.38l1.88,1.41l0.6,-0.42l-0.48,-2.53l6.15,0.57l4.4,3.51l-1.97,1.43l-4.0,0.41l-0.36,0.39l-0.06,3.79l-0.74,0.62l-2.07,-0.11l-1.91,-1.39l-3.14,-1.11l-0.78,-1.85l-2.72,-0.68l-2.63,0.49l-1.04,-1.1l0.46,-1.31l-0.5,-0.51l-3.0,0.98l-0.22,0.58l0.99,1.7l-1.21,1.48l-3.04,1.68l-3.12,-0.28l-0.4,0.23l0.09,0.46l2.2,2.09l1.46,3.2l1.15,1.1l0.24,1.33l-0.42,0.67l-4.63,-0.77l-6.96,2.9l-2.19,0.44l-7.6,5.06l-0.84,1.45l-3.61,-2.37l-6.24,2.82l-0.94,-1.15l-0.53,-0.08l-2.28,1.52l-3.2,-0.49l-0.44,0.27l-0.78,2.37l-3.05,3.78l0.09,1.47l0.29,0.36l2.54,0.72l-0.29,4.53l-1.97,0.11l-0.35,0.26l-1.07,2.94l0.8,1.45l-3.91,1.58l-1.05,3.95l-3.48,0.77l-0.3,0.3l-0.72,3.29l-3.09,2.65l-0.7,-1.74l-2.44,-12.44l1.16,-4.71l2.04,-2.06l0.22,-1.64l3.8,-0.86l4.46,-4.61l4.28,-3.81l4.48,-3.01l2.17,-5.63l-0.42,-0.54l-3.04,0.33l-1.77,3.31l-5.86,3.86l-1.86,-4.25l-0.45,-0.23l-6.46,1.3l-6.47,6.44l-0.01,0.55l1.58,1.74l-8.24,1.17l0.15,-2.2l-0.34,-0.42l-3.89,-0.56l-3.25,1.81l-7.62,-0.62l-8.45,1.19l-17.71,15.41l0.22,0.7l3.74,0.41l1.36,2.17l2.43,0.76l1.88,-1.68l2.4,0.2l3.4,3.54l0.08,2.6l-1.95,3.42l-0.21,3.9l-1.1,5.06l-3.71,4.54l-0.87,2.21l-8.29,8.89l-3.19,1.7l-1.32,0.03l-1.45,-1.36l-0.49,-0.04l-2.27,1.5l0.41,-3.65l-0.59,-2.47l1.75,-0.89l2.91,0.53l0.42,-0.2l1.68,-3.03l0.87,-3.46l0.97,-1.18l1.32,-2.88l-0.45,-0.56l-4.14,0.95l-2.19,1.25l-3.41,-0.0l-1.06,-2.93l-2.97,-2.3l-4.28,-1.06l-1.75,-5.07l-2.66,-5.01l-2.29,-1.29l-3.75,-1.01l-3.44,0.08l-3.18,0.62l-2.24,1.77l0.05,0.66l1.18,0.69l0.02,1.43l-1.33,1.05l-2.26,3.51l-0.04,1.43l-3.16,1.84l-2.82,-1.16l-3.01,0.23l-1.35,-1.07l-1.5,-0.35l-3.9,2.31l-3.22,0.52l-2.27,0.79l-3.05,-0.51l-2.21,0.03l-1.48,-1.6l-2.6,-1.63l-2.63,-0.43l-5.46,1.01l-3.23,-1.25l-0.72,-2.57l-5.2,-1.24l-2.75,-1.36l-0.5,0.12l-2.59,3.45l0.84,2.1l-2.06,1.93l-3.41,-0.77l-2.42,-0.12l-1.83,-1.54l-2.53,-0.05l-2.42,-0.98l-3.86,1.57l-4.72,2.78l-3.3,0.75l-1.55,-1.92l-3.0,0.41l-1.11,-1.33l-1.62,-0.59l-1.31,-1.94l-1.38,-0.6l-3.7,0.79l-3.31,-1.83l-0.51,0.11l-0.99,1.29l-5.29,-8.05l-2.96,-2.48l0.65,-0.77l0.01,-0.51l-0.5,-0.11l-6.2,3.21l-1.84,0.15l0.15,-1.39l-0.26,-0.42l-3.22,-1.17l-2.46,0.7l-0.69,-3.16l-0.32,-0.31l-4.5,-0.75l-2.47,1.47l-6.19,1.27l-1.29,0.86l-9.51,1.3l-1.15,1.17l-0.03,0.53l1.47,1.9l-1.89,0.69l-0.22,0.56l0.31,0.6l-2.11,1.44l0.03,0.68l3.75,2.12l-0.39,0.98l-3.23,-0.13l-0.86,0.86l-3.09,-1.59l-3.97,0.07l-2.66,1.35l-8.32,-3.56l-4.07,0.06l-5.39,3.68l-0.39,2.0l-2.03,-1.5l-0.59,0.13l-2.0,3.59l0.57,0.93l-1.28,2.16l0.06,0.48l2.13,2.17l1.95,0.04l1.37,1.82l-0.23,1.46l0.25,0.43l0.83,0.33l-0.8,1.31l-2.49,0.62l-2.49,3.2l0.0,0.49l2.17,2.78l-0.15,2.18l2.5,3.24l-1.58,1.59l-0.7,-0.13l-1.63,-1.72l-2.29,-0.84l-0.94,-1.31l-2.34,-0.63l-1.48,0.4l-0.43,-0.47l-3.51,-1.48l-5.76,-1.01l-0.45,0.19l-2.89,-2.34l-2.9,-1.2l-1.53,-1.29l1.29,-0.43l2.08,-2.61l-0.05,-0.55l-0.89,-0.79l3.05,-1.06l0.27,-0.42l-0.07,-0.69l-0.49,-0.35l-1.73,0.39l0.04,-0.68l1.04,-0.72l2.66,-0.48l0.4,-1.32l-0.5,-1.6l0.92,-1.54l0.03,-1.17l-0.29,-0.37l-3.69,-1.06l-1.41,0.02l-1.42,-1.41l-2.19,0.38l-2.77,-1.01l-0.03,-0.59l-0.89,-1.43l-2.0,-0.32l-0.11,-0.54l0.49,-0.53l0.01,-0.53l-1.6,-1.9l-3.58,0.02l-0.88,0.73l-0.46,-0.07l-1.0,-2.79l2.22,-0.02l0.97,-0.74l0.07,-0.57l-0.9,-1.04l-1.35,-0.48l-0.11,-0.7l-0.95,-0.58l-1.38,-1.99l0.46,-0.98l-0.51,-1.96l-2.45,-0.84l-1.21,0.3l-0.46,-0.76l-2.46,-0.83l-0.72,-1.87l-0.21,-1.69l-0.99,-0.85l0.85,-1.17l-0.7,-3.21l1.66,-1.97l-0.16,-0.79ZM749.2,170.72l-0.6,0.4l-0.13,0.16l-0.01,-0.51l0.74,-0.05ZM874.85,67.94l-5.63,0.48l-0.26,-0.84l3.15,-1.89l1.94,0.01l3.19,1.16l-2.39,1.09ZM797.39,48.49l-2.0,1.36l-3.8,-0.42l-4.25,-1.8l0.35,-0.97l9.69,1.83ZM783.67,46.12l-1.63,3.09l-8.98,-0.13l-4.09,1.14l-4.54,-2.97l1.16,-3.01l3.05,-0.89l6.5,0.22l8.54,2.56ZM778.2,134.98l-0.56,-0.9l0.27,-0.12l0.29,1.01ZM778.34,135.48l0.94,3.53l-0.05,3.38l1.05,3.39l2.18,5.0l-2.89,-0.83l-0.49,0.26l-1.54,4.65l2.42,3.5l-0.04,1.13l-1.24,-1.24l-0.61,0.06l-1.09,1.61l-0.28,-1.61l0.27,-3.1l-0.28,-3.4l0.58,-2.47l0.11,-4.39l-1.46,-3.36l0.21,-4.32l2.15,-1.46l0.07,-0.34ZM771.95,56.61l1.76,-1.42l2.89,-0.42l3.28,1.71l0.14,0.6l-3.27,0.03l-4.81,-0.5ZM683.76,31.09l-13.01,1.93l4.03,-6.35l1.82,-0.56l1.73,0.34l5.99,2.98l-0.56,1.66ZM670.85,27.93l-5.08,0.64l-6.86,-1.57l-3.99,-2.05l-2.1,-4.16l-2.6,-0.87l5.72,-3.5l5.2,-1.28l4.69,2.85l5.59,5.4l-0.56,4.53ZM564.15,68.94l-0.64,0.17l-7.85,-0.57l-0.86,-2.04l-4.28,-1.17l-0.28,-1.94l2.27,-0.89l0.25,-0.39l-0.08,-2.38l4.81,-3.97l-0.15,-0.7l-1.47,-0.38l5.3,-3.81l0.15,-0.44l-0.58,-1.94l5.28,-2.51l8.21,-3.27l8.28,-0.96l4.35,-1.94l4.6,-0.64l1.36,1.61l-1.34,1.28l-16.43,4.94l-7.97,4.88l-7.74,9.63l0.66,4.14l4.16,3.27ZM548.81,18.48l-5.5,1.18l-0.58,1.02l-2.59,0.84l-2.13,-1.07l1.12,-1.42l-0.3,-0.65l-2.33,-0.07l1.68,-0.36l3.47,-0.06l0.42,1.29l0.66,0.16l1.38,-1.34l2.15,-0.88l2.94,1.01l-0.39,0.36ZM477.37,133.15l-4.08,0.05l-2.56,-0.32l0.33,-0.87l3.17,-1.03l3.24,0.96l-0.09,1.23Z",
                    name: "Russia",
                },
                RW: { path: "M497.0,288.25l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z", name: "Rwanda" },
                RS: {
                    path:
                        "M469.4,163.99l0.42,-0.5l-0.01,-0.52l-1.15,-1.63l1.43,-0.62l1.33,0.12l1.17,1.06l0.46,1.13l1.34,0.64l0.35,1.35l1.46,0.9l0.76,-0.29l0.2,0.69l-0.48,0.78l0.22,1.12l1.05,1.22l-0.77,0.8l-0.37,1.52l-1.21,0.08l0.24,-0.64l-0.39,-0.54l-2.08,-1.64l-0.9,0.05l-0.48,0.94l-2.12,-1.37l0.53,-1.6l-1.11,-1.37l0.51,-1.1l-0.41,-0.57Z",
                    name: "Serbia",
                },
                LT: {
                    path: "M486.93,129.3l0.17,1.12l-1.81,0.98l-0.72,2.02l-2.47,1.18l-2.1,-0.02l-0.73,-1.05l-1.06,-0.3l-0.09,-1.87l-3.56,-1.13l-0.43,-2.36l2.48,-0.94l4.12,0.22l2.25,-0.31l0.52,0.69l1.24,0.21l2.19,1.56Z",
                    name: "Lithuania",
                },
                LU: { path: "M436.08,149.45l-0.48,-0.07l0.3,-1.28l0.27,0.4l-0.09,0.96Z", name: "Luxembourg" },
                LR: { path: "M399.36,265.97l0.18,1.54l-0.48,0.99l0.08,0.47l2.47,1.8l-0.33,2.8l-2.65,-1.13l-5.78,-4.61l0.58,-1.32l2.1,-2.33l0.86,-0.22l0.77,1.14l-0.14,0.85l0.59,0.87l1.0,0.14l0.76,-0.99Z", name: "Liberia" },
                RO: {
                    path:
                        "M487.53,154.23l0.6,0.24l2.87,3.98l-0.17,2.69l0.45,1.42l1.32,0.81l1.35,-0.42l0.76,0.36l0.02,0.31l-0.83,0.45l-0.59,-0.22l-0.54,0.3l-0.62,3.3l-1.0,-0.22l-2.07,-1.13l-2.95,0.71l-1.25,0.76l-3.51,-0.15l-1.89,-0.47l-0.87,0.16l-0.82,-1.3l0.29,-0.26l-0.06,-0.64l-1.09,-0.34l-0.56,0.5l-1.05,-0.64l-0.39,-1.39l-1.36,-0.65l-0.35,-1.0l-0.83,-0.75l1.54,-0.54l2.66,-4.21l2.4,-1.24l2.96,0.34l1.48,0.73l0.79,-0.45l1.78,-0.3l0.75,-0.74l0.79,0.0Z",
                    name: "Romania",
                },
                GW: { path: "M386.23,253.6l-0.29,0.84l0.15,0.6l-2.21,0.59l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.06l-0.66,-0.49l2.41,-0.48l4.13,0.1Z", name: "Guinea-Bissau" },
                GT: {
                    path:
                        "M195.08,249.77l-2.48,-0.37l-1.03,-0.45l-1.14,-0.89l0.3,-0.99l-0.24,-0.68l0.96,-1.66l2.98,-0.01l0.4,-0.37l-0.19,-1.28l-1.67,-1.4l0.51,-0.4l0.0,-1.05l3.85,0.02l-0.21,4.53l0.4,0.43l1.46,0.38l-1.48,0.98l-0.35,0.7l0.12,0.57l-2.2,1.96Z",
                    name: "Guatemala",
                },
                GR: {
                    path:
                        "M487.07,174.59l-0.59,1.43l-0.37,0.21l-2.84,-0.35l-3.03,0.77l-0.18,0.68l1.28,1.23l-0.61,0.23l-1.14,0.0l-1.2,-1.39l-0.63,0.03l-0.53,1.01l0.56,1.76l1.03,1.19l-0.56,0.38l-0.05,0.62l2.52,2.12l0.02,0.87l-1.78,-0.59l-0.48,0.56l0.5,1.0l-1.07,0.2l-0.3,0.53l0.75,2.01l-0.98,0.02l-1.84,-1.12l-1.37,-4.2l-2.21,-2.95l-0.11,-0.56l1.04,-1.28l0.2,-0.95l0.85,-0.66l0.03,-0.46l1.32,-0.21l1.01,-0.64l1.22,0.05l0.65,-0.56l2.26,-0.0l1.82,-0.75l1.85,1.0l2.28,-0.28l0.35,-0.39l0.01,-0.77l0.34,0.22ZM480.49,192.16l0.58,0.4l-0.68,-0.12l0.11,-0.28ZM482.52,192.82l2.51,0.06l0.24,0.32l-1.99,0.13l-0.77,-0.51Z",
                    name: "Greece",
                },
                GQ: { path: "M448.79,279.62l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z", name: "Eq. Guinea" },
                GY: {
                    path:
                        "M277.42,270.07l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.0l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.9l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.49l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.86Z",
                    name: "Guyana",
                },
                GE: {
                    path:
                        "M521.71,168.93l5.29,0.89l4.07,2.01l1.41,-0.44l2.07,0.56l0.68,1.1l1.07,0.55l-0.12,0.59l0.98,1.29l-1.01,-0.13l-1.81,-0.83l-0.94,0.47l-3.23,0.43l-2.29,-1.39l-2.33,0.05l0.21,-0.97l-0.76,-2.26l-1.45,-1.12l-1.43,-0.39l-0.41,-0.42Z",
                    name: "Georgia",
                },
                GB: {
                    path:
                        "M412.61,118.72l-2.19,3.22l-0.0,0.45l5.13,-0.3l-0.53,2.37l-2.2,3.12l0.29,0.63l2.37,0.21l2.33,4.3l1.76,0.69l2.2,5.12l2.94,0.77l-0.23,1.62l-1.15,0.88l-0.1,0.52l0.82,1.42l-1.86,1.43l-3.3,-0.02l-4.12,0.87l-1.04,-0.58l-0.47,0.06l-1.51,1.41l-2.12,-0.34l-1.86,1.18l-0.6,-0.29l3.19,-3.0l2.16,-0.69l0.28,-0.41l-0.34,-0.36l-3.73,-0.53l-0.4,-0.76l2.2,-0.87l0.17,-0.61l-1.26,-1.67l0.36,-1.7l3.38,0.28l0.43,-0.33l0.37,-1.99l-1.79,-2.49l-3.11,-0.72l-0.38,-0.59l0.79,-1.35l-0.04,-0.46l-0.82,-0.97l-0.61,0.01l-0.68,0.84l-0.1,-2.34l-1.23,-1.88l0.85,-3.47l1.77,-2.68l1.85,0.26l2.17,-0.22ZM406.26,132.86l-1.01,1.77l-1.57,-0.59l-1.16,0.01l0.37,-1.54l-0.39,-1.39l1.45,-0.1l2.3,1.84Z",
                    name: "United Kingdom",
                },
                GA: {
                    path:
                        "M453.24,279.52l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.97l-3.94,-4.3l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z",
                    name: "Gabon",
                },
                GN: {
                    path:
                        "M391.8,254.11l0.47,0.8l1.11,-0.32l0.98,0.7l1.07,0.2l2.26,-1.22l0.64,0.44l1.13,1.56l-0.48,1.4l0.8,0.3l-0.08,0.48l0.46,0.68l-0.35,1.36l1.05,2.61l-1.0,0.69l0.03,1.41l-0.72,-0.06l-1.08,1.0l-0.24,-0.27l0.07,-1.11l-1.05,-1.54l-1.79,0.21l-0.35,-2.01l-1.6,-2.18l-2.0,-0.0l-1.31,0.54l-1.95,2.18l-1.86,-2.19l-1.2,-0.78l-0.3,-1.11l-0.8,-0.85l0.65,-0.72l0.81,-0.03l1.64,-0.8l0.23,-1.87l2.67,0.64l0.89,-0.3l1.21,0.15Z",
                    name: "Guinea",
                },
                GM: { path: "M379.31,251.39l0.1,-0.35l2.43,-0.07l0.74,-0.61l0.51,-0.03l0.77,0.49l-1.03,-0.3l-1.87,0.9l-1.65,-0.04ZM384.03,250.91l0.91,0.05l0.75,-0.24l-0.59,0.31l-1.08,-0.13Z", name: "Gambia" },
                GL: {
                    path:
                        "M353.02,1.2l14.69,4.67l-3.68,1.89l-22.97,0.86l-0.36,0.27l0.12,0.43l1.55,1.18l8.79,-0.66l7.48,2.07l4.86,-1.77l1.66,1.73l-2.53,3.19l-0.01,0.48l0.46,0.15l6.35,-2.2l12.06,-2.31l7.24,1.13l1.09,1.99l-9.79,4.01l-1.44,1.32l-7.87,0.98l-0.35,0.41l0.38,0.38l5.07,0.24l-2.53,3.58l-2.07,3.81l0.08,6.05l2.57,3.11l-3.22,0.2l-4.12,1.66l-0.05,0.72l4.45,2.65l0.51,3.75l-2.3,0.4l-0.25,0.64l2.79,3.69l-4.82,0.31l-0.36,0.29l0.16,0.44l2.62,1.8l-0.59,1.22l-3.3,0.7l-3.45,0.01l-0.29,0.68l3.03,3.12l0.02,1.34l-4.4,-1.73l-1.72,1.35l0.15,0.66l3.31,1.15l3.13,2.71l0.81,3.16l-3.85,0.75l-4.89,-4.26l-0.47,-0.03l-0.17,0.44l0.79,2.86l-2.71,2.21l-0.13,0.44l0.37,0.27l8.73,0.34l-12.32,6.64l-7.24,1.48l-2.94,0.08l-2.69,1.75l-3.43,4.41l-5.24,2.84l-1.73,0.18l-7.12,2.1l-2.15,2.52l-0.13,2.99l-1.19,2.45l-4.01,3.09l-0.14,0.44l0.97,2.9l-2.28,6.48l-3.1,0.2l-3.83,-3.07l-4.86,-0.02l-2.25,-1.93l-1.7,-3.79l-4.3,-4.84l-1.21,-2.49l-0.44,-3.8l-3.32,-3.63l0.84,-2.86l-1.56,-1.7l2.28,-4.6l3.83,-1.74l1.03,-1.96l0.52,-3.47l-0.59,-0.41l-4.17,2.21l-2.07,0.58l-2.72,-1.28l-0.15,-2.71l0.85,-2.09l2.01,-0.06l5.06,1.2l0.46,-0.23l-0.14,-0.49l-6.54,-4.47l-2.67,0.55l-1.58,-0.86l2.56,-4.01l-0.03,-0.48l-1.5,-1.74l-4.98,-8.5l-3.13,-1.96l0.03,-1.88l-0.24,-0.37l-6.85,-3.02l-5.36,-0.38l-12.7,0.58l-2.78,-1.57l-3.66,-2.77l5.73,-1.45l5.0,-0.28l0.38,-0.38l-0.35,-0.41l-10.67,-1.38l-5.3,-2.06l0.25,-1.54l18.41,-5.26l1.22,-2.27l-0.25,-0.55l-6.14,-1.86l1.68,-1.77l8.55,-4.03l3.59,-0.63l0.3,-0.54l-0.88,-2.27l5.47,-1.47l7.65,-0.95l7.55,-0.05l3.04,1.85l6.48,-3.27l5.81,2.22l3.56,0.5l5.16,1.94l0.5,-0.21l-0.17,-0.52l-5.71,-3.13l0.28,-2.13l8.12,-3.6l8.7,0.28l3.35,-2.34l8.71,-0.6l19.93,0.8Z",
                    name: "Greenland",
                },
                KW: { path: "M540.81,207.91l0.37,0.86l-0.17,0.76l0.6,1.53l-0.95,0.04l-0.82,-1.28l-1.57,-0.18l1.31,-1.88l1.22,0.17Z", name: "Kuwait" },
                GH: {
                    path: "M420.53,257.51l-0.01,0.72l0.96,1.2l0.24,3.73l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.21l-6.97,2.84l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.65l1.07,-2.32l-0.96,-6.47l5.01,0.07l0.94,-0.39l0.61,0.11Z",
                    name: "Ghana",
                },
                OM: {
                    path:
                        "M568.09,230.93l-0.91,1.67l-1.22,0.04l-0.6,0.76l-0.41,1.51l0.27,1.58l-1.16,0.05l-1.56,0.97l-0.76,1.74l-1.62,0.05l-0.98,0.65l-0.17,1.15l-0.89,0.52l-1.49,-0.18l-2.4,0.94l-2.47,-5.4l7.35,-2.71l1.67,-5.23l-1.12,-2.09l0.05,-0.83l0.67,-1.0l0.07,-1.05l0.9,-0.42l-0.05,-2.07l0.7,-0.01l1.0,1.62l1.51,1.08l3.3,0.84l1.73,2.29l0.81,0.37l-1.23,2.35l-0.99,0.79Z",
                    name: "Oman",
                },
                _2: { path: "M531.15,258.94l1.51,0.12l5.13,-0.95l5.3,-1.48l-0.01,4.4l-2.67,3.39l-1.85,0.01l-8.04,-2.94l-2.55,-3.17l1.12,-1.71l2.04,2.34Z", name: "Somaliland" },
                _1: { path: "M472.77,172.64l-1.08,-1.29l0.96,-0.77l0.29,-0.83l1.98,1.64l-0.36,0.67l-1.79,0.58Z", name: "Kosovo" },
                _0: { path: "M504.91,192.87l0.34,0.01l0.27,-0.07l-0.29,0.26l-0.31,-0.2Z", name: "N. Cyprus" },
                JO: { path: "M518.64,201.38l-5.14,1.56l-0.19,0.65l2.16,2.39l-0.89,1.14l-1.71,0.34l-1.71,1.8l-2.34,-0.37l1.21,-4.32l0.56,-4.07l2.8,0.94l4.46,-2.71l0.79,2.66Z", name: "Jordan" },
                HR: {
                    path:
                        "M455.59,162.84l1.09,0.07l-0.82,0.94l-0.27,-1.01ZM456.96,162.92l0.62,-0.41l1.73,0.45l0.42,-0.4l-0.01,-0.59l0.86,-0.52l0.2,-1.05l1.63,-0.68l2.57,1.68l2.07,0.6l0.87,-0.31l1.05,1.57l-0.52,0.63l-1.05,-0.56l-1.68,0.04l-2.1,-0.5l-1.29,0.06l-0.57,0.49l-0.59,-0.47l-0.62,0.16l-0.46,1.7l1.79,2.42l2.79,2.75l-1.18,-0.87l-2.21,-0.87l-1.67,-1.78l0.13,-0.63l-1.05,-1.19l-0.32,-1.27l-1.42,-0.43Z",
                    name: "Croatia",
                },
                HT: {
                    path:
                        "M237.05,238.38l-1.16,0.43l-0.91,-0.55l0.05,-0.2l2.02,0.31ZM237.53,238.43l1.06,0.12l-0.05,0.01l-1.01,-0.12ZM239.25,238.45l0.79,-0.51l0.06,-0.62l-1.02,-1.0l0.02,-0.82l-0.3,-0.4l-0.93,-0.32l3.16,0.45l0.02,1.84l-0.48,0.34l-0.08,0.58l0.54,0.72l-1.78,-0.26Z",
                    name: "Haiti",
                },
                HU: {
                    path:
                        "M462.08,157.89l0.65,-1.59l-0.09,-0.44l0.64,-0.0l0.39,-0.34l0.1,-0.69l1.75,0.87l2.32,-0.37l0.43,-0.66l3.49,-0.78l0.69,-0.78l0.57,-0.14l2.57,0.93l0.67,-0.23l1.03,0.65l0.08,0.37l-1.42,0.71l-2.59,4.14l-1.8,0.53l-1.68,-0.1l-2.74,1.23l-1.85,-0.54l-2.54,-1.66l-0.66,-1.1Z",
                    name: "Hungary",
                },
                HN: {
                    path:
                        "M199.6,249.52l-1.7,-1.21l0.06,-0.94l3.04,-2.14l2.37,0.28l1.27,-0.09l1.1,-0.52l1.3,0.28l1.14,-0.25l1.38,0.37l2.23,1.37l-2.36,0.93l-1.23,-0.39l-0.88,1.3l-1.28,0.99l-0.98,-0.22l-0.42,0.52l-0.96,0.05l-0.36,0.41l0.04,0.88l-0.52,0.6l-0.3,0.04l-0.3,-0.55l-0.66,-0.31l0.11,-0.67l-0.48,-0.65l-0.87,-0.26l-0.73,0.2Z",
                    name: "Honduras",
                },
                PR: { path: "M256.17,238.73l-0.26,0.27l-2.83,0.05l-0.07,-0.55l1.95,-0.1l1.22,0.33Z", name: "Puerto Rico" },
                PS: { path: "M509.21,203.07l0.1,-0.06l-0.02,0.03l-0.09,0.03ZM509.36,202.91l-0.02,-0.63l-0.33,-0.16l0.31,-1.09l0.24,0.1l-0.2,1.78Z", name: "Palestine" },
                PT: {
                    path:
                        "M401.84,187.38l-0.64,0.47l-1.13,-0.35l-0.91,0.17l0.28,-1.78l-0.24,-1.78l-1.25,-0.56l-0.45,-0.84l0.17,-1.66l1.01,-1.18l0.69,-2.92l-0.04,-1.39l-0.59,-1.9l1.3,-0.85l0.84,1.35l3.1,-0.3l0.46,0.99l-1.05,0.94l-0.03,2.16l-0.41,0.57l-0.08,1.1l-0.79,0.18l-0.26,0.59l0.91,1.6l-0.63,1.75l0.76,1.09l-1.1,1.52l0.07,1.05Z",
                    name: "Portugal",
                },
                PY: {
                    path:
                        "M274.9,336.12l0.74,1.52l-0.16,3.45l0.32,0.41l2.64,0.5l1.11,-0.47l1.4,0.59l0.36,0.6l0.53,3.42l1.27,0.4l0.98,-0.38l0.51,0.27l-0.0,1.18l-1.21,5.32l-2.09,1.9l-1.8,0.4l-4.71,-0.98l2.2,-3.63l-0.32,-1.5l-2.78,-1.28l-3.03,-1.94l-2.07,-0.44l-4.34,-4.06l0.91,-2.9l0.08,-1.42l1.07,-2.04l4.13,-0.72l2.18,0.03l2.05,1.17l0.03,0.59Z",
                    name: "Paraguay",
                },
                PA: {
                    path:
                        "M213.8,263.68l0.26,-1.52l-0.36,-0.26l-0.01,-0.49l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.49l1.38,-0.23l2.51,-1.11l0.86,-0.72l3.45,0.85l1.4,1.18l0.41,1.74l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.46Z",
                    name: "Panama",
                },
                PG: {
                    path:
                        "M808.58,298.86l2.54,2.56l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.16ZM801.41,293.04l0.5,0.29l0.26,0.27l-0.49,-0.35l-0.27,-0.21ZM803.17,294.58l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,298.41l0.52,0.75l1.43,-0.19l2.27,-1.81l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,303.55l2.31,1.8l1.59,2.61l1.34,0.13l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.65l2.25,1.05l-1.22,0.13l-0.72,-0.63l-4.56,-0.65l-3.22,-2.87l-1.49,-2.34l-3.27,-1.1l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.55l-1.55,0.68l-1.36,-0.4l-2.21,-0.09l-0.08,-15.41l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.49l0.31,0.68l-1.76,0.21l-0.33,0.52l0.55,1.68Z",
                    name: "Papua New Guinea",
                },
                PE: {
                    path:
                        "M244.96,295.21l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.75l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.59l-0.22,1.22l-0.62,0.84l1.04,2.27l1.28,1.44l-0.41,0.84l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.02l0.3,0.4l1.14,0.29l1.31,-0.34l1.9,3.59l-0.48,0.85l-0.17,3.85l-0.94,1.59l0.35,0.75l-0.47,1.07l0.98,1.97l-2.1,3.82l-0.98,0.5l-2.17,-1.28l-0.39,-1.16l-4.95,-2.58l-4.46,-2.79l-1.84,-1.51l-0.91,-1.84l0.3,-0.96l-2.11,-3.33l-4.82,-9.68l-1.04,-1.2l-0.87,-1.94l-3.4,-2.48l0.58,-1.18l-1.13,-2.23l0.66,-1.49l1.45,-1.15l-0.6,0.98l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z",
                    name: "Peru",
                },
                PK: {
                    path:
                        "M615.09,192.34l-1.83,1.81l-2.6,0.39l-3.73,-0.68l-1.58,1.33l-0.09,0.42l1.77,4.39l1.7,1.23l-1.69,1.27l-0.12,2.14l-2.33,2.64l-1.6,2.8l-2.46,2.67l-3.03,-0.07l-2.76,2.83l0.05,0.6l1.5,1.11l0.26,1.9l1.44,1.5l0.37,1.68l-5.01,-0.01l-1.78,1.7l-1.42,-0.52l-0.76,-1.87l-2.27,-2.15l-11.61,0.86l0.71,-2.34l3.43,-1.32l0.25,-0.44l-0.21,-1.24l-1.2,-0.65l-0.28,-2.46l-2.29,-1.14l-1.28,-1.94l2.82,0.94l2.62,-0.38l1.42,0.33l0.76,-0.56l1.71,0.19l3.25,-1.14l0.27,-0.36l0.08,-2.19l1.18,-1.32l1.68,0.0l0.58,-0.82l1.6,-0.3l1.19,0.16l0.98,-0.78l0.02,-1.88l0.93,-1.47l1.48,-0.66l0.19,-0.55l-0.66,-1.25l2.04,-0.11l0.69,-1.01l-0.02,-1.16l1.11,-1.06l-0.17,-1.78l-0.49,-1.03l1.15,-0.98l5.42,-0.91l2.6,-0.82l1.6,1.16l0.97,2.34l3.45,0.97Z",
                    name: "Pakistan",
                },
                PH: {
                    path:
                        "M737.01,263.84l0.39,2.97l-0.44,1.18l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.09l-0.42,0.69l-2.48,-1.23l-0.57,-1.49l0.65,-1.03l-0.1,-0.54l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.8l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.11l1.5,-0.06l0.38,-0.43l-0.09,-1.19l1.21,0.71l0.36,2.02ZM733.59,256.58l0.05,0.75l0.08,0.26l-0.8,-0.42l-0.18,-0.71l0.85,0.12ZM734.08,256.1l-0.12,-1.12l-1.0,-1.27l1.36,0.03l0.53,0.73l0.51,2.04l-1.27,-0.4ZM733.76,257.68l0.38,0.98l-0.32,0.15l-0.07,-1.13ZM724.65,238.43l1.46,0.7l0.72,-0.31l-0.32,1.17l0.79,1.71l-0.57,1.84l-1.53,1.04l-0.39,2.25l0.56,2.04l1.63,0.57l1.16,-0.27l2.71,1.23l-0.19,1.08l0.76,0.84l-0.08,0.36l-1.4,-0.9l-0.88,-1.27l-0.66,0.0l-0.38,0.55l-1.6,-1.31l-2.15,0.36l-0.87,-0.39l0.07,-0.61l0.66,-0.55l-0.01,-0.62l-0.75,-0.59l-0.72,0.44l-0.74,-0.87l-0.39,-2.49l0.32,0.27l0.66,-0.28l0.26,-3.97l0.7,-2.02l1.14,0.0ZM731.03,258.87l-0.88,0.85l-1.19,1.94l-1.05,-1.19l0.93,-1.1l0.32,-1.47l0.52,-0.06l-0.27,1.15l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.85ZM726.83,255.78l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.4l0.03,-2.26ZM724.81,252.09l-0.38,1.27l-1.42,-1.95l1.2,0.05l0.6,0.63ZM716.55,261.82l1.1,-0.95l0.03,-0.03l-0.28,0.36l-0.85,0.61ZM719.22,259.06l0.04,-0.06l0.8,-1.53l0.16,0.75l-1.0,0.84Z",
                    name: "Philippines",
                },
                PL: {
                    path:
                        "M468.44,149.42l-1.11,-1.54l-1.86,-0.33l-0.48,-1.05l-1.72,-0.37l-0.65,0.69l-0.72,-0.36l0.11,-0.61l-0.33,-0.46l-1.75,-0.27l-1.04,-0.93l-0.94,-1.94l0.16,-1.22l-0.62,-1.8l-0.78,-1.07l0.57,-1.04l-0.48,-1.43l1.41,-0.83l6.91,-2.71l2.14,0.5l0.52,0.91l5.51,0.44l4.55,-0.05l1.07,0.31l0.48,0.84l0.15,1.58l0.65,1.2l-0.01,0.99l-1.27,0.58l-0.19,0.54l0.73,1.48l0.08,1.55l1.2,2.76l-0.17,0.58l-1.23,0.44l-2.27,2.72l0.18,0.95l-1.97,-1.03l-1.98,0.4l-1.36,-0.28l-1.24,0.58l-1.07,-0.97l-1.16,0.24Z",
                    name: "Poland",
                },
                ZM: {
                    path:
                        "M481.47,313.3l0.39,0.31l2.52,0.14l0.99,1.17l2.01,0.35l1.4,-0.64l0.69,1.17l1.78,0.33l1.84,2.35l2.23,0.18l0.4,-0.43l-0.21,-2.74l-0.62,-0.3l-0.48,0.32l-1.98,-1.17l0.72,-5.29l-0.51,-1.18l0.57,-1.3l3.68,-0.62l0.26,0.63l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.87l-0.88,2.7l0.43,2.09l-0.73,0.87l-0.76,2.37l0.59,0.68l-6.6,1.83l-0.29,0.44l0.19,1.45l-1.68,0.35l-1.43,1.02l-0.38,0.87l-0.87,0.26l-3.48,3.69l-4.16,-0.53l-1.52,-1.0l-1.77,-0.13l-1.83,0.52l-3.04,-3.4l0.11,-7.59l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.83l-0.4,-1.36l0.24,-1.05Z",
                    name: "Zambia",
                },
                EH: {
                    path: "M384.42,230.28l0.25,-0.79l1.06,-1.29l0.8,-3.51l3.38,-2.78l0.7,-1.81l0.06,4.84l-1.98,0.2l-0.94,1.59l0.39,3.56l-3.7,-0.01ZM392.01,218.1l0.7,-1.8l1.77,-0.24l2.09,0.34l0.95,-0.62l1.28,-0.07l-0.0,2.51l-6.79,-0.12Z",
                    name: "W. Sahara",
                },
                EE: { path: "M485.71,115.04l2.64,0.6l2.56,0.11l-1.6,1.91l0.61,3.54l-0.81,0.87l-1.78,-0.01l-3.22,-1.76l-1.8,0.45l0.21,-1.53l-0.58,-0.41l-0.69,0.34l-1.26,-1.03l-0.17,-1.63l2.83,-0.92l3.05,-0.52Z", name: "Estonia" },
                EG: {
                    path:
                        "M492.06,205.03l1.46,0.42l2.95,-1.64l2.04,-0.21l1.53,0.3l0.59,1.19l0.69,0.04l0.41,-0.64l1.81,0.58l1.95,0.16l1.04,-0.51l1.42,4.08l-2.03,4.54l-1.66,-1.77l-1.76,-3.85l-0.64,-0.12l-0.36,0.67l1.04,2.88l3.44,6.95l1.78,3.04l2.03,2.65l-0.36,0.53l0.23,2.01l2.7,2.19l-28.41,0.0l0.0,-18.96l-0.73,-2.2l0.59,-1.56l-0.32,-1.26l0.68,-0.99l3.06,-0.04l4.82,1.52Z",
                    name: "Egypt",
                },
                ZA: {
                    path:
                        "M467.14,373.21l-0.13,-1.96l-0.68,-1.56l0.7,-0.68l-0.13,-2.33l-4.56,-8.19l0.77,-0.86l0.6,0.45l0.69,1.31l2.83,0.72l1.5,-0.26l2.24,-1.39l0.19,-9.55l1.35,2.3l-0.21,1.5l0.61,1.2l0.4,0.19l1.79,-0.27l2.6,-2.07l0.69,-1.32l0.96,-0.48l2.19,1.04l2.04,0.13l1.77,-0.65l0.85,-2.12l1.38,-0.33l1.59,-2.76l2.15,-1.89l3.41,-1.87l2.0,0.45l1.02,-0.28l0.99,0.2l1.75,5.29l-0.38,3.25l-0.81,-0.23l-1.0,0.46l-0.87,1.68l-0.05,1.16l1.97,1.84l1.47,-0.29l0.69,-1.18l1.09,0.01l-0.76,3.69l-0.58,1.09l-2.2,1.79l-3.17,4.76l-2.8,2.83l-3.57,2.88l-2.53,1.05l-1.22,0.14l-0.51,0.7l-1.18,-0.32l-1.39,0.5l-2.59,-0.52l-1.61,0.33l-1.18,-0.11l-2.55,1.1l-2.1,0.44l-1.6,1.07l-0.85,0.05l-0.93,-0.89l-0.93,-0.15l-0.97,-1.13l-0.25,0.05ZM491.45,364.19l0.62,-0.93l1.48,-0.59l1.18,-2.19l-0.07,-0.49l-1.99,-1.69l-1.66,0.56l-1.43,1.14l-1.34,1.73l0.02,0.51l1.88,2.11l1.31,-0.16Z",
                    name: "South Africa",
                },
                EC: {
                    path:
                        "M231.86,285.53l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z",
                    name: "Ecuador",
                },
                AL: { path: "M470.32,171.8l0.74,0.03l0.92,0.89l-0.17,1.95l0.36,1.28l1.01,0.82l-1.82,2.83l-0.19,-0.61l-1.25,-0.89l-0.18,-1.2l0.53,-2.82l-0.54,-1.47l0.6,-0.83Z", name: "Albania" },
                AO: {
                    path:
                        "M461.55,300.03l1.26,3.15l1.94,2.36l2.47,-0.53l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.19l0.48,1.01l-0.34,1.52l0.18,1.55l0.83,1.04l-0.13,2.85l0.54,0.39l3.96,-0.41l-0.1,1.79l0.39,1.05l-0.24,1.43l-4.7,-0.03l-0.4,0.39l-0.12,8.13l2.92,3.49l-3.83,0.88l-5.89,-0.36l-1.88,-1.24l-10.47,0.22l-1.3,-1.01l-1.85,-0.16l-2.4,0.77l-0.15,-1.06l0.33,-2.16l1.0,-3.45l1.35,-3.2l2.24,-2.8l0.33,-2.06l-0.13,-1.53l-0.8,-1.08l-1.21,-2.87l0.87,-1.62l-1.27,-4.12l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,298.87l-0.47,-1.25l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.03Z",
                    name: "Angola",
                },
                KZ: {
                    path:
                        "M552.8,172.89l0.46,-1.27l-0.48,-1.05l-2.96,-1.19l-1.06,-2.58l-1.37,-0.87l-0.03,-0.3l1.95,0.23l0.45,-0.38l0.08,-1.96l1.75,-0.41l2.1,0.45l0.48,-0.33l0.45,-3.04l-0.45,-2.09l-0.41,-0.31l-2.42,0.15l-2.36,-0.73l-2.87,1.37l-2.17,0.61l-0.85,-0.34l0.13,-1.61l-1.6,-2.12l-2.02,-0.08l-1.78,-1.82l1.29,-2.18l-0.57,-0.95l1.62,-2.91l2.21,1.63l0.63,-0.27l0.29,-2.22l4.92,-3.43l3.71,-0.08l8.4,3.6l2.92,-1.36l3.77,-0.06l3.11,1.66l0.51,-0.11l0.6,-0.81l3.31,0.13l0.39,-0.25l0.63,-1.57l-0.17,-0.5l-3.5,-1.98l1.87,-1.27l-0.13,-1.03l1.98,-0.72l0.18,-0.62l-1.59,-2.06l0.81,-0.82l9.23,-1.18l1.33,-0.88l6.18,-1.26l2.26,-1.42l4.08,0.68l0.73,3.33l0.51,0.3l2.48,-0.8l2.79,1.02l-0.17,1.56l0.43,0.44l2.55,-0.24l4.89,-2.53l0.03,0.32l3.15,2.61l5.56,8.47l0.65,0.02l1.12,-1.46l3.15,1.74l3.76,-0.78l1.15,0.49l1.14,1.8l1.84,0.76l0.99,1.29l3.35,-0.25l1.02,1.52l-1.6,1.81l-1.93,0.28l-0.34,0.38l-0.11,3.05l-1.13,1.16l-4.75,-1.0l-0.46,0.27l-1.76,5.47l-1.1,0.59l-4.91,1.23l-0.27,0.54l2.1,4.97l-1.37,0.63l-0.23,0.41l0.13,1.13l-0.88,-0.25l-1.42,-1.13l-7.89,-0.4l-0.92,0.31l-3.73,-1.22l-1.42,0.63l-0.53,1.66l-3.72,-0.94l-1.85,0.43l-0.76,1.4l-4.65,2.62l-1.13,2.08l-0.44,0.01l-0.92,-1.4l-2.87,-0.09l-0.45,-2.14l-0.38,-0.32l-0.8,-0.01l0.0,-2.96l-3.0,-2.22l-7.31,0.58l-2.35,-2.68l-6.71,-3.69l-6.45,1.83l-0.29,0.39l0.1,10.85l-0.7,0.08l-1.62,-2.17l-1.83,-0.96l-3.11,0.59l-0.64,0.51Z",
                    name: "Kazakhstan",
                },
                ET: {
                    path:
                        "M516.04,247.79l1.1,0.84l1.63,-0.45l0.68,0.47l1.63,0.03l2.01,0.94l1.73,1.66l1.64,2.07l-1.52,2.04l0.16,1.72l0.39,0.38l2.05,0.0l-0.36,1.03l2.86,3.58l8.32,3.08l1.31,0.02l-6.32,6.75l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.59l-1.19,-0.68l-0.47,-1.0l-1.27,-1.23l-1.16,-0.22l0.43,-0.72l1.45,-0.28l0.41,-0.95l-0.03,-2.21l0.68,-2.44l1.05,-0.63l1.43,-3.06l1.57,-1.37l1.02,-2.51l0.35,-1.88l2.52,0.46l0.44,-0.24l0.58,-1.43Z",
                    name: "Ethiopia",
                },
                ZW: {
                    path:
                        "M498.91,341.09l-1.11,-0.22l-0.92,0.28l-2.09,-0.44l-1.5,-1.11l-1.89,-0.43l-0.62,-1.4l-0.01,-0.84l-0.3,-0.38l-0.97,-0.25l-2.71,-2.74l-1.92,-3.32l3.83,0.45l3.73,-3.82l1.08,-0.44l0.26,-0.77l1.25,-0.9l1.41,-0.26l0.5,0.89l1.99,-0.05l1.72,1.17l1.11,0.17l1.05,0.66l0.01,2.99l-0.59,3.76l0.38,0.86l-0.23,1.23l-0.39,0.35l-0.63,1.81l-2.43,2.75Z",
                    name: "Zimbabwe",
                },
                ES: {
                    path:
                        "M416.0,169.21l1.07,1.17l4.61,1.38l1.06,-0.57l2.6,1.26l2.71,-0.3l0.09,1.12l-2.14,1.8l-3.11,0.61l-0.31,0.31l-0.2,0.89l-1.54,1.69l-0.97,2.4l0.84,1.74l-1.32,1.27l-0.48,1.68l-1.88,0.65l-1.66,2.07l-5.36,-0.01l-1.79,1.08l-0.89,0.98l-0.88,-0.17l-0.79,-0.82l-0.68,-1.59l-2.37,-0.63l-0.11,-0.5l1.21,-1.82l-0.77,-1.13l0.61,-1.68l-0.76,-1.62l0.87,-0.49l0.09,-1.25l0.42,-0.6l0.03,-2.11l0.99,-0.69l0.13,-0.5l-1.03,-1.73l-1.46,-0.11l-0.61,0.38l-1.06,0.0l-0.52,-1.23l-0.53,-0.21l-1.32,0.67l-0.01,-1.49l-0.75,-0.96l3.03,-1.88l2.99,0.53l3.32,-0.02l2.63,0.51l6.01,-0.06Z",
                    name: "Spain",
                },
                ER: {
                    path:
                        "M520.38,246.23l3.42,2.43l3.5,3.77l0.84,0.54l-0.95,-0.01l-3.51,-3.89l-2.33,-1.15l-1.73,-0.07l-0.91,-0.51l-1.26,0.51l-1.34,-1.02l-0.61,0.17l-0.66,1.61l-2.35,-0.43l-0.17,-0.67l1.29,-5.29l0.61,-0.61l1.95,-0.53l0.87,-1.01l1.17,2.41l0.68,2.33l1.49,1.43Z",
                    name: "Eritrea",
                },
                ME: { path: "M468.91,172.53l-1.22,-1.02l0.47,-1.81l0.89,-0.72l2.26,1.51l-0.5,0.57l-0.75,-0.27l-1.14,1.73Z", name: "Montenegro" },
                MD: { path: "M488.41,153.73l1.4,-0.27l1.72,0.93l1.07,0.15l0.85,0.65l-0.14,0.84l0.96,0.85l1.12,2.47l-1.15,-0.07l-0.66,-0.41l-0.52,0.25l-0.09,0.86l-1.08,1.89l-0.27,-0.86l0.25,-1.34l-0.16,-1.6l-3.29,-4.34Z", name: "Moldova" },
                MG: {
                    path:
                        "M545.91,319.14l0.4,3.03l0.62,1.21l-0.21,1.02l-0.57,-0.8l-0.69,-0.01l-0.47,0.76l0.41,2.12l-0.18,0.87l-0.73,0.78l-0.15,2.14l-4.71,15.2l-1.06,2.88l-3.92,1.64l-3.12,-1.49l-0.6,-1.21l-0.19,-2.4l-0.86,-2.05l-0.21,-1.77l0.38,-1.62l1.21,-0.75l0.01,-0.76l1.19,-2.04l0.23,-1.66l-1.06,-2.99l-0.19,-2.21l0.81,-1.33l0.32,-1.46l4.63,-1.22l3.44,-3.0l0.85,-1.4l-0.08,-0.7l0.78,-0.04l1.38,-1.77l0.13,-1.64l0.45,-0.61l1.16,1.69l0.59,1.6Z",
                    name: "Madagascar",
                },
                MA: {
                    path:
                        "M378.78,230.02l0.06,-0.59l0.92,-0.73l0.82,-1.37l-0.09,-1.04l0.79,-1.7l1.31,-1.58l0.96,-0.59l0.66,-1.55l0.09,-1.47l0.81,-1.48l1.72,-1.07l1.55,-2.69l1.16,-0.96l2.44,-0.39l1.94,-1.82l1.31,-0.78l2.09,-2.28l-0.51,-3.65l1.24,-3.7l1.5,-1.75l4.46,-2.57l2.37,-4.47l1.44,0.01l1.68,1.21l2.32,-0.19l3.47,0.65l0.8,1.54l0.16,1.71l0.86,2.96l0.56,0.59l-0.26,0.61l-3.05,0.44l-1.26,1.05l-1.33,0.22l-0.33,0.37l-0.09,1.78l-2.68,1.0l-1.07,1.42l-4.47,1.13l-4.04,2.01l-0.54,4.64l-1.15,0.06l-0.92,0.61l-1.96,-0.35l-2.42,0.54l-0.74,1.9l-0.86,0.4l-1.14,3.26l-3.53,3.01l-0.8,3.55l-0.96,1.1l-0.29,0.82l-4.95,0.18Z",
                    name: "Morocco",
                },
                UZ: {
                    path:
                        "M598.64,172.75l-1.63,1.52l0.06,0.64l1.85,1.12l1.97,-0.64l2.21,1.17l-2.52,1.68l-2.59,-0.22l-0.18,-0.41l0.46,-1.23l-0.45,-0.53l-3.35,0.69l-2.1,3.51l-1.87,-0.12l-1.03,1.51l0.22,0.55l1.64,0.62l0.46,1.83l-1.19,2.49l-2.66,-0.53l0.05,-1.36l-0.26,-0.39l-3.3,-1.23l-2.56,-1.4l-4.4,-3.34l-1.34,-3.14l-1.08,-0.6l-2.58,0.13l-0.69,-0.44l-0.47,-2.52l-3.37,-1.6l-0.43,0.05l-2.07,1.72l-2.1,1.01l-0.21,0.47l0.28,1.01l-1.91,0.03l-0.09,-10.5l5.99,-1.7l6.19,3.54l2.71,2.84l7.05,-0.67l2.71,2.01l-0.17,2.81l0.39,0.42l0.9,0.02l0.44,2.14l0.38,0.32l2.94,0.09l0.95,1.42l1.28,-0.24l1.05,-2.04l4.43,-2.5Z",
                    name: "Uzbekistan",
                },
                MM: {
                    path:
                        "M673.9,230.21l-1.97,1.57l-0.57,0.96l-1.4,0.6l-1.36,1.05l-1.99,0.36l-1.08,2.66l-0.91,0.4l-0.19,0.55l1.21,2.27l2.52,3.43l-0.79,1.91l-0.74,0.41l-0.17,0.52l0.65,1.37l1.61,1.95l0.25,2.58l0.9,2.13l-1.92,3.57l0.68,-2.25l-0.81,-1.74l0.19,-2.65l-1.05,-1.53l-1.24,-6.17l-1.12,-2.26l-0.6,-0.13l-4.34,3.02l-2.39,-0.65l0.77,-2.84l-0.52,-2.61l-1.91,-2.96l0.25,-0.75l-0.29,-0.51l-1.33,-0.3l-1.61,-1.93l-0.1,-1.3l0.82,-0.24l0.04,-1.64l1.02,-0.52l0.21,-0.45l-0.23,-0.95l0.54,-0.96l0.08,-2.22l1.46,0.45l0.47,-0.2l1.12,-2.19l0.16,-1.35l1.33,-2.16l-0.0,-1.52l2.89,-1.66l1.63,0.44l0.5,-0.44l-0.17,-1.4l0.64,-0.36l0.08,-1.04l0.77,-0.11l0.71,1.35l1.06,0.69l-0.03,3.86l-2.38,2.37l-0.3,3.15l0.46,0.43l2.28,-0.38l0.51,2.08l1.47,0.67l-0.6,1.8l0.19,0.48l2.97,1.48l1.64,-0.55l0.02,0.32Z",
                    name: "Myanmar",
                },
                ML: {
                    path:
                        "M392.61,254.08l-0.19,-2.37l-0.99,-0.87l-0.44,-1.3l-0.09,-1.28l0.81,-0.58l0.35,-1.24l2.37,0.65l1.31,-0.47l0.86,0.15l0.66,-0.56l9.83,-0.04l0.38,-0.28l0.56,-1.8l-0.44,-0.65l-2.35,-21.95l3.27,-0.04l16.7,11.38l0.74,1.31l2.5,1.09l0.02,1.38l0.44,0.39l2.34,-0.21l0.01,5.38l-1.28,1.61l-0.26,1.49l-5.31,0.57l-1.07,0.92l-2.9,0.1l-0.86,-0.48l-1.38,0.36l-2.4,1.08l-0.6,0.87l-1.85,1.09l-0.43,0.7l-0.79,0.39l-1.44,-0.21l-0.81,0.84l-0.34,1.64l-1.91,2.02l-0.06,1.03l-0.67,1.22l0.13,1.16l-0.97,0.39l-0.23,-0.64l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.28l-0.37,-0.35l-0.02,-0.9l-0.65,-0.35l0.45,-0.64l-0.03,-0.53l-2.12,-2.44l-0.76,-0.01l-2.0,1.16l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z",
                    name: "Mali",
                },
                MN: {
                    path:
                        "M676.61,146.48l3.81,1.68l5.67,-1.0l2.37,0.41l2.34,1.5l1.79,1.75l2.29,-0.03l3.12,0.52l2.47,-0.81l3.41,-0.59l3.53,-2.21l1.25,0.29l1.53,1.13l2.27,-0.21l-2.66,5.01l0.64,1.68l0.47,0.21l1.32,-0.38l2.38,0.48l2.02,-1.11l1.76,0.89l2.06,2.02l-0.13,0.53l-1.72,-0.29l-3.77,0.46l-1.88,0.99l-1.76,1.99l-3.71,1.17l-2.45,1.6l-3.83,-0.87l-0.41,0.17l-1.31,1.99l1.04,2.24l-1.52,0.9l-1.74,1.57l-2.79,1.02l-3.78,0.13l-4.05,1.05l-2.77,1.52l-1.16,-0.85l-2.94,0.0l-3.62,-1.79l-2.58,-0.49l-3.4,0.41l-5.12,-0.67l-2.63,0.06l-1.31,-1.6l-1.4,-3.0l-1.48,-0.33l-3.13,-1.94l-6.16,-0.93l-0.71,-1.06l0.86,-3.82l-1.93,-2.71l-3.5,-1.18l-1.95,-1.58l-0.5,-1.72l2.34,-0.52l4.75,-2.8l3.62,-1.47l2.18,0.97l2.46,0.05l1.81,1.53l2.46,0.12l3.95,0.71l2.43,-2.28l0.08,-0.48l-0.9,-1.72l2.24,-2.98l2.62,1.27l4.94,1.17l0.43,2.24Z",
                    name: "Mongolia",
                },
                MK: { path: "M472.8,173.98l0.49,-0.71l3.57,-0.71l1.0,0.77l0.13,1.45l-0.65,0.53l-1.15,-0.05l-1.12,0.67l-1.39,0.22l-0.79,-0.55l-0.29,-1.03l0.19,-0.6Z", name: "Macedonia" },
                MW: {
                    path:
                        "M505.5,309.31l0.85,1.95l0.15,2.86l-0.69,1.65l0.71,1.8l0.06,1.28l0.49,0.64l0.07,1.06l0.4,0.55l0.8,-0.23l0.55,0.61l0.69,-0.21l0.34,0.6l0.19,2.94l-1.04,0.62l-0.54,1.25l-1.11,-1.08l-0.16,-1.56l0.51,-1.31l-0.32,-1.3l-0.99,-0.65l-0.82,0.12l-2.36,-1.64l0.63,-1.96l0.82,-1.18l-0.46,-2.01l0.9,-2.86l-0.94,-2.51l0.96,0.18l0.29,0.4Z",
                    name: "Malawi",
                },
                MR: {
                    path:
                        "M407.36,220.66l-2.58,0.03l-0.39,0.44l2.42,22.56l0.36,0.43l-0.39,1.24l-9.75,0.04l-0.56,0.53l-0.91,-0.11l-1.27,0.45l-1.61,-0.66l-0.97,0.03l-0.36,0.29l-0.38,1.35l-0.42,0.23l-2.93,-3.4l-2.96,-1.52l-1.62,-0.03l-1.27,0.54l-1.12,-0.2l-0.65,0.4l-0.08,-0.49l0.68,-1.29l0.31,-2.43l-0.57,-3.91l0.23,-1.21l-0.69,-1.5l-1.15,-1.02l0.25,-0.39l9.58,0.02l0.4,-0.45l-0.46,-3.68l0.47,-1.04l2.12,-0.21l0.36,-0.4l-0.08,-6.4l7.81,0.13l0.41,-0.4l0.01,-3.31l7.76,5.35Z",
                    name: "Mauritania",
                },
                UG: {
                    path:
                        "M498.55,276.32l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z",
                    name: "Uganda",
                },
                MY: {
                    path:
                        "M717.47,273.46l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.22l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.68l1.81,-1.64l1.21,-1.86l0.63,-0.01l1.07,1.05l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,269.59l0.17,1.09l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.56l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.67l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.05l1.63,0.84Z",
                    name: "Malaysia",
                },
                MX: {
                    path:
                        "M133.12,200.41l0.2,0.47l9.63,3.33l6.96,-0.02l0.4,-0.4l0.0,-0.74l3.77,0.0l3.55,2.93l1.39,2.83l1.52,1.04l2.08,0.82l0.47,-0.14l1.46,-2.0l1.73,-0.04l1.59,0.98l2.05,3.35l1.47,1.56l1.26,3.14l2.18,1.02l2.26,0.58l-1.18,3.72l-0.42,5.04l1.79,4.89l1.62,1.89l0.61,1.52l1.2,1.42l2.55,0.66l1.37,1.1l7.54,-1.89l1.86,-1.3l1.14,-4.3l4.1,-1.21l3.57,-0.11l0.32,0.3l-0.06,0.94l-1.26,1.45l-0.67,1.71l0.38,0.7l-0.72,2.27l-0.49,-0.3l-1.0,0.08l-1.0,1.39l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.06l-1.1,0.26l0.1,0.44l1.82,1.44l0.56,0.91l-3.19,0.21l-1.21,2.09l0.24,0.72l-0.2,0.44l-2.24,-2.18l-1.45,-0.93l-2.22,-0.69l-1.52,0.22l-3.07,1.16l-10.55,-3.85l-2.86,-1.96l-3.78,-0.92l-1.08,-1.19l-2.62,-1.43l-1.18,-1.54l-0.38,-0.81l0.66,-0.63l-0.18,-0.53l0.52,-0.76l0.01,-0.91l-2.0,-3.82l-2.21,-2.63l-2.53,-2.09l-1.19,-1.62l-2.2,-1.17l-0.3,-0.43l0.34,-1.48l-0.21,-0.45l-1.23,-0.6l-1.36,-1.2l-0.59,-1.78l-1.54,-0.47l-2.44,-2.55l-0.16,-0.9l-1.33,-2.03l-0.84,-1.99l-0.16,-1.33l-1.81,-1.1l-0.97,0.05l-1.31,-0.7l-0.57,0.22l-0.4,1.12l0.72,3.77l3.51,3.89l0.28,0.78l0.53,0.26l0.41,1.43l1.33,1.73l1.58,1.41l0.8,2.39l1.43,2.41l0.13,1.32l0.37,0.36l1.04,0.08l1.67,2.28l-0.85,0.76l-0.66,-1.51l-1.68,-1.54l-2.91,-1.87l0.06,-1.82l-0.54,-1.68l-2.91,-2.03l-0.55,0.09l-1.95,-1.1l-0.88,-0.94l0.68,-0.08l0.93,-1.01l0.08,-1.78l-1.93,-1.94l-1.46,-0.77l-3.75,-7.56l4.88,-0.42Z",
                    name: "Mexico",
                },
                VU: { path: "M839.04,322.8l0.22,1.14l-0.44,0.03l-0.2,-1.45l0.42,0.27Z", name: "Vanuatu" },
                FR: {
                    path:
                        "M444.48,172.62l-0.64,1.78l-0.58,-0.31l-0.49,-1.72l0.4,-0.89l1.0,-0.72l0.3,1.85ZM429.64,147.1l1.78,1.58l1.46,-0.13l2.1,1.42l1.35,0.27l1.23,0.83l3.04,0.5l-1.03,1.85l-0.3,2.12l-0.41,0.32l-0.95,-0.24l-0.5,0.43l0.06,0.61l-1.81,1.92l-0.04,1.42l0.55,0.38l0.88,-0.36l0.61,0.97l-0.03,1.0l0.57,0.91l-0.75,1.09l0.65,2.39l1.27,0.57l-0.18,0.82l-2.01,1.53l-4.77,-0.8l-3.82,1.0l-0.53,1.85l-2.49,0.34l-2.71,-1.31l-1.16,0.57l-4.31,-1.29l-0.72,-0.86l1.19,-1.78l0.39,-6.45l-2.58,-3.3l-1.9,-1.66l-3.72,-1.23l-0.19,-1.72l2.81,-0.61l4.12,0.81l0.47,-0.48l-0.6,-2.77l1.94,0.95l5.83,-2.54l0.92,-2.74l1.6,-0.49l0.24,0.78l1.36,0.33l1.05,1.19ZM289.01,278.39l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z",
                    name: "France",
                },
                FI: {
                    path:
                        "M492.17,76.39l-0.23,3.5l3.52,2.63l-2.08,2.88l-0.02,0.44l2.8,4.56l-1.59,3.31l2.16,3.24l-0.94,2.39l0.14,0.47l3.44,2.51l-0.77,1.62l-7.52,6.95l-4.5,0.31l-4.38,1.37l-3.8,0.74l-1.44,-1.96l-2.17,-1.11l0.5,-3.66l-1.16,-3.33l1.09,-2.08l2.21,-2.42l5.67,-4.32l1.64,-0.83l0.21,-0.42l-0.46,-2.02l-3.38,-1.89l-0.75,-1.43l-0.22,-6.74l-6.79,-4.8l0.8,-0.62l2.54,2.12l3.46,-0.12l3.0,0.96l2.51,-2.11l1.17,-3.08l3.55,-1.38l2.76,1.53l-0.95,2.79Z",
                    name: "Finland",
                },
                FJ: { path: "M871.53,326.34l-2.8,1.05l-0.08,-0.23l2.97,-1.21l-0.1,0.39ZM867.58,329.25l0.43,0.37l-0.27,0.88l-1.24,0.28l-1.04,-0.24l-0.14,-0.66l0.63,-0.58l0.92,0.26l0.7,-0.31Z", name: "Fiji" },
                FK: { path: "M274.36,425.85l1.44,1.08l-0.47,0.73l-3.0,0.89l-0.96,-1.0l-0.52,-0.05l-1.83,1.29l-0.73,-0.88l2.46,-1.64l1.93,0.76l1.67,-1.19Z", name: "Falkland Is." },
                NI: {
                    path:
                        "M202.33,252.67l0.81,-0.18l1.03,-1.02l-0.04,-0.88l0.68,-0.0l0.63,-0.54l0.97,0.22l1.53,-1.26l0.58,-0.99l1.17,0.34l2.41,-0.94l0.13,1.32l-0.81,1.94l0.1,2.74l-0.36,0.37l-0.11,1.75l-0.47,0.81l0.18,1.14l-1.73,-0.85l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.01,-3.81Z",
                    name: "Nicaragua",
                },
                NL: { path: "M430.31,143.39l0.6,-0.5l2.13,-4.8l3.2,-1.33l1.74,0.08l0.33,0.8l-0.59,2.92l-0.5,0.99l-1.26,0.0l-0.4,0.45l0.33,2.7l-2.2,-1.78l-2.62,0.58l-0.75,-0.11Z", name: "Netherlands" },
                NO: {
                    path:
                        "M491.44,67.41l6.8,2.89l-2.29,0.86l-0.15,0.65l2.33,2.38l-4.98,1.79l0.84,-2.45l-0.18,-0.48l-3.55,-1.8l-3.89,1.52l-1.42,3.38l-2.12,1.72l-2.64,-1.0l-3.11,0.21l-2.66,-2.22l-0.5,-0.01l-1.41,1.1l-1.44,0.17l-0.35,0.35l-0.32,2.47l-4.32,-0.64l-0.44,0.29l-0.58,2.11l-2.45,0.2l-4.15,7.68l-3.88,5.76l0.78,1.62l-0.64,1.16l-2.24,-0.06l-0.38,0.24l-1.66,3.89l0.15,5.17l1.57,2.04l-0.78,4.16l-2.02,2.48l-0.85,1.63l-1.3,-1.75l-0.58,-0.07l-4.87,4.19l-3.1,0.79l-3.16,-1.7l-0.85,-3.77l-0.77,-8.55l2.14,-2.31l6.55,-3.27l5.02,-4.17l10.63,-13.84l10.98,-8.7l5.35,-1.91l4.34,0.12l3.69,-3.64l4.49,0.19l4.37,-0.89ZM484.55,20.04l4.26,1.75l-3.1,2.55l-7.1,0.65l-7.08,-0.9l-0.37,-1.31l-0.37,-0.29l-3.44,-0.1l-2.08,-2.0l6.87,-1.44l3.9,1.31l2.39,-1.64l6.13,1.4ZM481.69,33.93l-4.45,1.74l-3.54,-0.99l1.12,-0.9l0.05,-0.58l-1.06,-1.22l4.22,-0.89l1.09,1.97l2.57,0.87ZM466.44,24.04l7.43,3.77l-5.41,1.86l-1.58,4.08l-2.26,1.2l-1.12,4.11l-2.61,0.18l-4.79,-2.86l1.84,-1.54l-0.1,-0.68l-3.69,-1.53l-4.77,-4.51l-1.73,-3.89l6.11,-1.82l1.54,1.92l3.57,-0.08l1.2,-1.96l3.32,-0.18l3.05,1.92Z",
                    name: "Norway",
                },
                NA: {
                    path:
                        "M474.26,330.66l-0.97,0.04l-0.38,0.4l-0.07,8.9l-2.09,0.08l-0.39,0.4l-0.0,17.42l-1.98,1.23l-1.17,0.17l-2.44,-0.66l-0.48,-1.13l-0.99,-0.74l-0.54,0.05l-0.9,1.01l-1.53,-1.68l-0.93,-1.88l-1.99,-8.56l-0.06,-3.12l-0.33,-1.52l-2.3,-3.34l-1.91,-4.83l-1.96,-2.43l-0.12,-1.57l2.33,-0.79l1.43,0.07l1.81,1.13l10.23,-0.25l1.84,1.23l5.87,0.35ZM474.66,330.64l6.51,-1.6l1.9,0.39l-1.69,0.4l-1.31,0.83l-1.12,-0.94l-4.29,0.92Z",
                    name: "Namibia",
                },
                NC: { path: "M838.78,341.24l-0.33,0.22l-2.9,-1.75l-3.26,-3.37l1.65,0.83l4.85,4.07Z", name: "New Caledonia" },
                NE: {
                    path:
                        "M454.75,226.53l1.33,1.37l0.48,0.07l1.27,-0.7l0.53,3.52l0.94,0.83l0.17,0.92l0.81,0.69l-0.44,0.95l-0.96,5.26l-0.13,3.22l-3.04,2.31l-1.22,3.57l1.02,1.24l-0.0,1.46l0.39,0.4l1.13,0.04l-0.9,1.25l-1.47,-2.42l-0.86,-0.29l-2.09,1.37l-1.74,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.09l-1.06,0.05l-2.94,-1.28l-1.44,0.59l-1.01,-0.03l-0.97,-0.94l-2.7,-0.98l-2.69,0.3l-0.87,0.64l-0.47,1.6l-0.75,1.16l-0.12,1.53l-1.57,-1.1l-1.31,0.24l0.03,-0.81l-0.32,-0.41l-2.59,-0.52l-0.15,-1.16l-1.35,-1.6l-0.29,-1.0l0.13,-0.84l1.29,-0.08l1.08,-0.92l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.47l1.39,-1.88l-0.01,-5.66l3.36,-1.12l7.24,-5.12l8.42,-4.92l3.69,1.06Z",
                    name: "Niger",
                },
                NG: {
                    path:
                        "M456.32,253.89l0.64,0.65l-0.28,1.04l-2.11,2.01l-2.03,5.18l-1.37,1.16l-1.15,3.18l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.36l-0.91,0.24l-1.79,4.06l-2.33,0.81l-1.11,-0.07l-0.86,0.5l-1.71,-0.05l-1.19,-1.39l-0.89,-1.89l-1.77,-1.66l-3.95,-0.08l0.07,-5.21l0.42,-1.43l1.95,-2.3l-0.14,-0.91l0.43,-1.18l-0.53,-1.41l0.25,-2.92l0.72,-1.07l0.32,-1.34l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.02l1.28,0.04l1.22,-0.58l3.03,1.27l1.49,-0.14l1.36,-1.0l1.33,0.07l0.82,-0.35l3.45,0.8l1.82,-1.32l1.84,2.67l0.66,0.16Z",
                    name: "Nigeria",
                },
                NZ: {
                    path:
                        "M857.8,379.65l1.86,3.12l0.44,0.18l0.3,-0.38l0.03,-1.23l0.38,0.27l0.57,2.31l2.02,0.94l1.81,0.27l1.57,-1.06l0.7,0.18l-1.15,3.59l-1.98,0.11l-0.74,1.2l0.2,1.11l-2.42,3.98l-1.49,0.92l-1.04,-0.85l1.21,-2.05l-0.81,-2.01l-2.63,-1.25l0.04,-0.57l1.82,-1.19l0.43,-2.34l-0.16,-2.03l-0.95,-1.82l-0.06,-0.72l-3.11,-3.64l-0.79,-1.52l1.56,1.45l1.76,0.66l0.65,2.34ZM853.83,393.59l0.57,1.24l0.59,0.16l1.42,-0.97l0.46,0.79l0.0,1.03l-2.47,3.48l-1.26,1.2l-0.06,0.5l0.55,0.87l-1.41,0.07l-2.33,1.38l-2.03,5.02l-3.02,2.16l-2.06,-0.06l-1.71,-1.04l-2.47,-0.2l-0.27,-0.73l1.22,-2.1l3.05,-2.94l1.62,-0.59l4.02,-2.82l1.57,-1.67l1.07,-2.16l0.88,-0.7l0.48,-1.75l1.24,-0.97l0.35,0.79Z",
                    name: "New Zealand",
                },
                NP: { path: "M641.14,213.62l0.01,3.19l-1.74,0.04l-4.8,-0.86l-1.58,-1.39l-3.37,-0.34l-7.65,-3.7l0.8,-2.09l2.33,-1.7l1.77,0.75l2.49,1.76l1.38,0.41l0.99,1.35l1.9,0.52l1.99,1.17l5.49,0.9Z", name: "Nepal" },
                CI: {
                    path:
                        "M407.4,259.27l0.86,0.42l0.56,0.9l1.13,0.53l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.24l-1.03,2.08l-0.65,2.84l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.46l-4.11,1.6l0.32,-3.06l-1.18,-1.31l-1.32,-0.66l0.42,-0.85l-0.2,-1.4l0.5,-0.67l0.01,-1.59l0.84,-0.32l0.26,-0.5l-1.15,-3.01l0.12,-0.5l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.71l0.71,-0.14l0.25,0.69l0.57,0.22l1.4,-0.61Z",
                    name: "Côte d'Ivoire",
                },
                CH: {
                    path:
                        "M444.62,156.35l-0.29,0.87l0.18,0.53l1.13,0.58l1.0,0.1l-0.1,0.65l-0.79,0.38l-1.72,-0.37l-0.45,0.23l-0.45,1.04l-0.75,0.06l-0.84,-0.4l-1.32,1.0l-0.96,0.12l-0.88,-0.55l-0.81,-1.3l-0.49,-0.16l-0.63,0.26l0.02,-0.65l1.71,-1.66l0.1,-0.56l0.93,0.08l0.58,-0.46l1.99,0.02l0.66,-0.61l2.19,0.79Z",
                    name: "Switzerland",
                },
                CO: {
                    path:
                        "M242.07,254.93l-1.7,0.59l-0.59,1.18l-1.7,1.69l-0.38,1.93l-0.67,1.43l0.31,0.57l1.03,0.13l0.25,0.9l0.57,0.64l-0.04,2.34l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.29l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.66,-0.43l0.39,-1.38l-0.52,-2.1l0.49,-0.83l-0.4,-2.13l-0.97,-1.35l0.17,-0.66l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.69l0.93,-0.24l0.3,-0.38l0.45,-2.76l1.22,-1.0l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.84l1.15,-1.14l0.91,0.46l-0.25,0.45Z",
                    name: "Colombia",
                },
                CN: {
                    path:
                        "M740.23,148.97l4.57,1.3l2.8,2.17l0.98,2.9l0.38,0.27l3.8,0.0l2.32,-1.28l3.29,-0.75l-0.96,2.09l-1.02,1.28l-0.85,3.4l-1.52,2.73l-2.76,-0.5l-2.4,1.13l-0.21,0.45l0.64,2.57l-0.32,3.2l-0.94,0.06l-0.37,0.89l-0.91,-1.01l-0.64,0.07l-0.92,1.57l-3.73,1.25l-0.26,0.48l0.26,1.06l-1.5,-0.08l-1.09,-0.86l-0.56,0.06l-1.67,2.06l-2.7,1.56l-2.03,1.88l-3.4,0.83l-1.93,1.4l-1.15,0.34l0.33,-0.7l-0.41,-0.89l1.79,-1.79l0.02,-0.54l-1.32,-1.56l-0.48,-0.1l-2.24,1.09l-2.83,2.06l-1.51,1.83l-2.28,0.13l-1.55,1.49l-0.04,0.5l1.32,1.97l2.0,0.58l0.31,1.35l1.98,0.84l3.0,-1.96l2.0,1.02l1.49,0.11l0.22,0.83l-3.37,0.86l-1.12,1.48l-2.5,1.52l-1.29,1.99l0.14,0.56l2.57,1.48l0.97,2.7l3.17,4.63l-0.03,1.66l-1.35,0.65l-0.2,0.51l0.6,1.47l1.4,0.91l-0.89,3.82l-1.43,0.38l-3.85,6.44l-2.27,3.11l-6.78,4.57l-2.73,0.29l-1.45,1.04l-0.62,-0.61l-0.55,-0.01l-1.36,1.25l-3.39,1.27l-2.61,0.4l-1.1,2.79l-0.81,0.09l-0.49,-1.42l0.5,-0.85l-0.25,-0.59l-3.36,-0.84l-1.3,0.4l-2.31,-0.62l-0.94,-0.84l0.33,-1.28l-0.3,-0.49l-2.19,-0.46l-1.13,-0.93l-0.47,-0.02l-2.06,1.36l-4.29,0.28l-2.76,1.05l-0.28,0.43l0.32,2.53l-0.59,-0.03l-0.19,-1.34l-0.55,-0.34l-1.68,0.7l-2.46,-1.23l0.62,-1.87l-0.26,-0.51l-1.37,-0.44l-0.54,-2.22l-0.45,-0.3l-2.13,0.35l0.24,-2.48l2.39,-2.4l0.03,-4.31l-1.19,-0.92l-0.78,-1.49l-0.41,-0.21l-1.41,0.19l-1.98,-0.3l0.46,-1.07l-1.17,-1.7l-0.55,-0.11l-1.63,1.05l-2.25,-0.57l-2.89,1.73l-2.25,1.98l-1.75,0.29l-1.17,-0.71l-3.31,-0.65l-1.48,0.79l-1.04,1.27l-0.12,-1.17l-0.54,-0.34l-1.44,0.54l-5.55,-0.86l-1.98,-1.16l-1.89,-0.54l-0.99,-1.35l-1.34,-0.37l-2.55,-1.79l-2.01,-0.84l-1.21,0.56l-5.57,-3.45l-0.53,-2.31l1.19,0.25l0.48,-0.37l0.08,-1.42l-0.98,-1.56l0.15,-2.44l-2.69,-3.32l-4.12,-1.23l-0.67,-2.0l-1.92,-1.48l-0.38,-0.7l-0.51,-3.01l-1.52,-0.66l-0.7,0.13l-0.48,-2.05l0.55,-0.51l-0.09,-0.82l2.03,-1.19l1.6,-0.54l2.56,0.38l0.42,-0.22l0.85,-1.7l3.0,-0.33l1.1,-1.26l4.05,-1.77l0.39,-0.91l-0.17,-1.44l1.45,-0.67l0.2,-0.52l-2.07,-4.9l4.51,-1.12l1.37,-0.73l1.89,-5.51l4.98,0.86l1.51,-1.7l0.11,-2.87l1.99,-0.38l1.83,-2.06l0.49,-0.13l0.68,2.08l2.23,1.77l3.44,1.16l1.55,2.29l-0.92,3.49l0.96,1.67l6.54,1.13l2.95,1.87l1.47,0.35l1.06,2.62l1.53,1.91l3.05,0.08l5.14,0.67l3.37,-0.41l2.36,0.43l3.65,1.8l3.06,0.04l1.45,0.88l2.87,-1.59l3.95,-1.02l3.83,-0.14l3.06,-1.14l1.77,-1.6l1.72,-1.01l0.17,-0.49l-1.1,-2.05l1.02,-1.54l4.02,0.8l2.45,-1.61l3.76,-1.19l1.96,-2.13l1.63,-0.83l3.51,-0.4l1.92,0.34l0.46,-0.3l0.17,-1.5l-2.27,-2.22l-2.11,-1.09l-2.18,1.11l-2.32,-0.47l-1.29,0.32l-0.4,-0.82l2.73,-5.16l3.02,1.06l3.53,-2.06l0.18,-1.68l2.16,-3.35l1.49,-1.35l-0.03,-1.85l-1.07,-0.85l1.54,-1.26l2.98,-0.59l3.23,-0.09l3.64,0.99l2.04,1.16l3.29,6.71l0.92,3.19ZM696.92,237.31l-1.87,1.08l-1.63,-0.64l-0.06,-1.79l1.03,-0.98l2.58,-0.69l1.16,0.05l0.3,0.54l-0.98,1.06l-0.53,1.37Z",
                    name: "China",
                },
                CM: {
                    path:
                        "M457.92,257.49l1.05,1.91l-1.4,0.16l-1.05,-0.23l-0.45,0.22l-0.54,1.19l0.08,0.45l1.48,1.47l1.05,0.45l1.01,2.46l-1.52,2.99l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.27l0.75,-0.13l1.38,-1.36l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.18l1.38,-1.17l2.0,-5.14l2.17,-2.13l0.3,-1.64l-0.86,-0.88l0.03,-0.33l0.94,1.28l0.07,3.22Z",
                    name: "Cameroon",
                },
                CL: {
                    path:
                        "M246.5,429.18l-3.14,1.83l-0.57,3.16l-0.64,0.05l-2.68,-1.06l-2.82,-2.33l-3.04,-1.89l-0.69,-1.85l0.63,-2.14l-1.21,-2.11l-0.31,-5.37l1.01,-2.91l2.57,-2.38l-0.18,-0.68l-3.16,-0.77l2.05,-2.47l0.77,-4.65l2.32,0.9l0.54,-0.29l1.31,-6.31l-0.22,-0.44l-1.68,-0.8l-0.56,0.28l-0.7,3.36l-0.81,-0.22l1.56,-9.41l1.15,-2.24l-0.71,-2.82l-0.18,-2.84l1.01,-0.33l3.26,-9.14l1.07,-4.22l-0.56,-4.21l0.74,-2.34l-0.29,-3.27l1.46,-3.34l2.04,-16.59l-0.66,-7.76l1.03,-0.53l0.54,-0.9l0.79,1.14l0.32,1.78l1.25,1.16l-0.69,2.55l1.33,2.9l0.97,3.59l0.46,0.29l1.5,-0.3l0.11,0.23l-0.76,2.44l-2.57,1.23l-0.23,0.37l0.08,4.33l-0.46,0.77l0.56,1.21l-1.58,1.51l-1.68,2.62l-0.89,2.47l0.2,2.7l-1.48,2.73l1.12,5.09l0.64,0.61l-0.01,2.29l-1.38,2.68l0.01,2.4l-1.89,2.04l0.02,2.75l0.69,2.57l-1.43,1.13l-1.26,5.68l0.39,3.51l-0.97,0.89l0.58,3.5l1.02,1.14l-0.65,1.02l0.15,0.57l1.0,0.53l0.16,0.69l-1.03,0.85l0.26,1.75l-0.89,4.03l-1.31,2.66l0.24,1.75l-0.71,1.83l-1.99,1.7l0.3,3.67l0.88,1.19l1.58,0.01l0.01,2.21l1.04,1.95l5.98,0.63ZM248.69,430.79l0.0,7.33l0.4,0.4l3.52,0.05l-0.44,0.75l-1.94,0.98l-2.49,-0.37l-1.88,-1.06l-2.55,-0.49l-5.59,-3.71l-2.38,-2.63l4.1,2.48l3.32,1.23l0.45,-0.12l1.29,-1.57l0.83,-2.32l2.05,-1.24l1.31,0.29Z",
                    name: "Chile",
                },
                CA: {
                    path:
                        "M280.06,145.6l-1.67,2.88l0.07,0.49l0.5,0.04l1.46,-0.98l1.0,0.42l-0.56,0.72l0.17,0.62l2.22,0.89l1.35,-0.71l1.95,0.78l-0.66,2.01l0.5,0.51l1.32,-0.42l0.98,3.17l-0.91,2.41l-0.8,0.08l-1.23,-0.45l0.47,-2.25l-0.89,-0.83l-0.48,0.06l-2.78,2.63l-0.34,-0.02l1.02,-0.85l-0.14,-0.69l-2.4,-0.77l-7.4,0.08l-0.17,-0.41l1.3,-0.94l0.02,-0.64l-0.73,-0.58l1.85,-1.74l2.57,-5.16l1.47,-1.79l1.99,-1.05l0.46,0.06l-1.53,2.45ZM68.32,74.16l4.13,0.95l4.02,2.14l2.61,0.4l2.47,-1.89l2.88,-1.31l3.85,0.48l3.71,-1.94l3.82,-1.04l1.56,1.68l0.49,0.08l1.87,-1.04l0.65,-1.98l1.24,0.35l4.16,3.94l0.54,0.01l2.75,-2.49l0.26,2.59l0.49,0.35l3.08,-0.73l1.04,-1.27l2.73,0.23l3.83,1.86l5.86,1.61l3.47,0.75l2.44,-0.26l2.73,1.78l-2.98,1.81l-0.19,0.41l0.31,0.32l4.53,0.92l6.87,-0.5l2.0,-0.69l2.49,2.39l0.53,0.02l2.72,-2.16l-0.02,-0.64l-2.16,-1.54l1.15,-1.06l4.83,-0.61l1.84,0.95l2.48,2.31l3.01,-0.23l4.55,1.92l3.85,-0.67l3.61,0.1l0.41,-0.44l-0.25,-2.36l1.79,-0.61l3.49,1.32l-0.01,3.77l0.31,0.39l0.45,-0.22l1.48,-3.16l1.74,0.1l0.41,-0.3l1.13,-4.37l-2.78,-3.11l-2.8,-1.74l0.19,-4.64l2.71,-3.07l2.98,0.67l2.41,1.95l3.19,4.8l-1.99,1.97l0.21,0.68l4.33,0.84l-0.01,4.15l0.25,0.37l0.44,-0.09l3.07,-3.15l2.54,2.39l-0.61,3.33l2.42,2.88l0.61,0.0l2.61,-3.08l1.88,-3.82l0.17,-4.58l6.72,0.94l3.13,2.04l0.13,1.82l-1.76,2.19l-0.01,0.49l1.66,2.16l-0.26,1.71l-4.68,2.8l-3.28,0.61l-2.47,-1.2l-0.55,0.23l-0.73,2.04l-2.38,3.43l-0.74,1.77l-2.74,2.57l-3.44,0.25l-2.21,1.78l-0.28,2.53l-2.82,0.55l-3.12,3.22l-2.72,4.31l-1.03,3.17l-0.14,4.31l0.33,0.41l3.44,0.57l2.24,5.95l0.45,0.23l3.4,-0.69l4.52,1.51l2.43,1.31l1.91,1.73l3.1,0.96l2.62,1.46l6.6,0.54l-0.35,2.74l0.81,3.53l1.81,3.78l3.83,3.3l0.45,0.04l2.1,-1.28l1.37,-3.69l-1.31,-5.38l-1.45,-1.58l3.57,-1.47l2.84,-2.46l1.52,-2.8l-0.25,-2.55l-1.7,-3.07l-2.85,-2.61l2.8,-3.95l-1.08,-3.37l-0.79,-5.67l1.36,-0.7l6.76,1.41l2.12,-0.96l5.12,3.36l1.05,1.61l4.08,0.26l-0.06,2.87l0.83,4.7l0.3,0.32l2.16,0.54l1.73,2.06l0.5,0.09l3.63,-2.03l2.52,-4.19l1.26,-1.32l7.6,11.72l-0.92,2.04l0.16,0.51l3.3,1.97l2.22,1.98l4.1,0.98l1.43,0.99l0.95,2.79l2.1,0.68l0.84,1.08l0.17,3.45l-3.37,2.26l-4.22,1.24l-3.06,2.63l-4.06,0.51l-5.35,-0.69l-6.39,0.2l-2.3,2.41l-3.26,1.51l-6.47,7.15l-0.06,0.48l0.44,0.19l2.13,-0.52l4.17,-4.24l5.12,-2.62l3.52,-0.3l1.69,1.21l-2.12,2.21l0.81,3.47l1.02,2.61l3.47,1.6l4.14,-0.45l2.15,-2.8l0.26,1.48l1.14,0.8l-2.56,1.69l-5.5,1.82l-2.54,1.27l-2.74,2.15l-1.4,-0.16l-0.07,-2.01l4.14,-2.44l0.18,-0.45l-0.39,-0.29l-6.63,0.45l-1.39,-1.49l-0.14,-4.43l-1.11,-0.91l-1.82,0.39l-0.66,-0.66l-0.6,0.03l-1.91,2.39l-0.82,2.52l-0.8,1.27l-1.67,0.56l-0.46,0.76l-8.31,0.07l-1.21,0.62l-2.35,1.97l-0.71,-0.14l-1.37,0.96l-1.12,-0.48l-4.74,1.26l-0.9,1.17l0.21,0.62l1.73,0.3l-1.81,0.31l-1.85,0.81l-2.11,-0.13l-2.95,1.78l-0.69,-0.09l1.39,-2.1l1.73,-1.21l0.1,-2.29l1.16,-1.99l0.49,0.53l2.03,0.42l1.2,-1.16l0.02,-0.47l-2.66,-3.51l-2.28,-0.61l-5.64,-0.71l-0.4,-0.57l-0.79,0.13l0.2,-0.41l-0.22,-0.55l-0.68,-0.26l0.19,-1.26l-0.78,-0.73l0.31,-0.64l-0.29,-0.57l-2.6,-0.44l-0.75,-1.63l-0.94,-0.66l-4.31,-0.65l-1.13,1.19l-1.48,0.59l-0.85,1.06l-2.83,-0.76l-2.09,0.39l-2.39,-0.97l-4.24,-0.7l-0.57,-0.4l-0.41,-1.63l-0.4,-0.3l-0.85,0.02l-0.39,0.4l-0.01,0.85l-69.13,-0.01l-6.51,-4.52l-4.5,-1.38l-1.26,-2.66l0.33,-1.93l-0.23,-0.43l-3.01,-1.35l-0.55,-2.77l-2.89,-2.38l-0.04,-1.45l1.39,-1.83l-0.28,-2.55l-4.16,-2.2l-4.07,-6.6l-4.02,-3.22l-1.3,-1.88l-0.5,-0.13l-2.51,1.21l-2.23,1.87l-3.85,-3.88l-2.44,-1.04l-2.22,-0.13l0.03,-37.49ZM260.37,148.65l3.04,0.76l2.26,1.2l-3.78,-0.95l-1.53,-1.01ZM249.4,3.81l6.68,0.49l5.32,0.79l4.26,1.57l-0.07,1.1l-5.85,2.53l-6.02,1.21l-2.39,1.39l-0.18,0.45l0.39,0.29l4.01,-0.02l-4.65,2.82l-4.2,1.74l-4.19,4.59l-5.03,0.92l-1.67,1.15l-7.47,0.59l-0.37,0.37l0.32,0.42l2.41,0.49l-0.81,0.47l-0.12,0.59l1.83,2.41l-2.02,1.59l-3.81,1.51l-1.32,2.16l-3.38,1.53l-0.22,0.48l0.35,1.19l0.4,0.29l3.88,-0.18l0.03,0.61l-6.33,2.95l-6.41,-1.4l-7.43,0.79l-3.72,-0.62l-4.4,-0.25l-0.23,-1.83l4.29,-1.11l0.28,-0.51l-1.1,-3.45l1.0,-0.25l6.58,2.28l0.47,-0.16l-0.05,-0.49l-3.41,-3.45l-3.58,-0.98l1.48,-1.55l4.34,-1.29l0.97,-2.19l-0.16,-0.48l-3.42,-2.13l-0.81,-2.26l6.2,0.22l2.24,0.58l3.91,-2.1l0.2,-0.43l-0.35,-0.32l-5.64,-0.67l-8.73,0.36l-4.26,-1.9l-2.12,-2.4l-2.78,-1.66l-0.41,-1.52l3.31,-1.03l2.93,-0.2l4.91,-0.99l3.7,-2.27l2.87,0.3l2.62,1.67l0.56,-0.14l1.82,-3.2l3.13,-0.94l4.44,-0.69l7.53,-0.26l1.48,0.67l7.19,-1.06l10.8,0.79ZM203.85,57.54l0.01,0.42l1.97,2.97l0.68,-0.02l2.24,-3.72l5.95,-1.86l4.01,4.64l-0.35,2.91l0.5,0.43l4.95,-1.36l2.32,-1.8l5.31,2.28l3.27,2.11l0.3,1.84l0.48,0.33l4.42,-0.99l2.64,2.87l5.97,1.77l2.06,1.72l2.11,3.71l-4.19,1.86l-0.01,0.73l5.9,2.83l3.94,0.94l3.78,3.95l3.46,0.25l-0.63,2.37l-4.11,4.47l-2.76,-1.56l-3.9,-3.94l-3.59,0.41l-0.33,0.34l-0.19,2.72l2.63,2.38l3.42,1.89l0.94,0.97l1.55,3.75l-0.7,2.29l-2.74,-0.92l-6.25,-3.15l-0.51,0.13l0.05,0.52l6.07,5.69l0.18,0.59l-6.09,-1.39l-5.31,-2.24l-2.63,-1.66l0.6,-0.77l-0.12,-0.6l-7.39,-4.01l-0.59,0.37l0.03,0.79l-6.73,0.6l-1.69,-1.1l1.36,-2.46l4.51,-0.07l5.15,-0.52l0.31,-0.6l-0.74,-1.3l0.78,-1.84l3.21,-4.05l-0.67,-2.35l-1.11,-1.6l-3.84,-2.1l-4.35,-1.28l0.91,-0.63l0.06,-0.61l-2.65,-2.75l-2.34,-0.36l-1.89,-1.46l-0.53,0.03l-1.24,1.23l-4.36,0.55l-9.04,-0.99l-9.26,-1.98l-1.6,-1.22l2.22,-1.77l0.13,-0.44l-0.38,-0.27l-3.22,-0.02l-0.72,-4.25l1.83,-4.04l2.42,-1.85l5.5,-1.1l-1.39,2.35ZM261.19,159.33l2.07,0.61l1.44,-0.04l-1.15,0.63l-2.94,-1.23l-0.4,-0.68l0.36,-0.37l0.61,1.07ZM230.83,84.39l-2.37,0.18l-0.49,-1.63l0.93,-2.09l1.94,-0.51l1.62,0.99l0.02,1.52l-1.66,1.54ZM229.43,58.25l0.11,0.65l-4.87,-0.21l-2.72,0.62l-3.1,-2.57l0.08,-1.26l0.86,-0.23l5.57,0.51l4.08,2.5ZM222.0,105.02l-0.72,1.49l-0.63,-0.19l-0.48,-0.84l0.81,-0.99l0.65,0.05l0.37,0.46ZM183.74,38.32l2.9,1.7l4.79,-0.01l1.84,1.46l-0.49,1.68l0.23,0.48l2.82,1.14l1.76,1.26l7.01,0.65l4.1,-1.1l5.03,-0.43l3.93,0.35l2.48,1.77l0.46,1.7l-1.3,1.1l-3.56,1.01l-3.23,-0.59l-7.17,0.76l-5.09,0.09l-3.99,-0.6l-6.42,-1.54l-0.79,-2.51l-0.3,-2.49l-2.64,-2.5l-5.32,-0.72l-2.52,-1.4l0.68,-1.57l4.78,0.31ZM207.38,91.35l0.4,1.56l0.56,0.26l1.06,-0.52l1.32,0.96l5.42,2.57l0.2,1.68l0.46,0.35l1.68,-0.28l1.15,0.85l-1.55,0.87l-3.61,-0.88l-1.32,-1.69l-0.57,-0.06l-2.45,2.1l-3.12,1.79l-0.7,-1.87l-0.42,-0.26l-2.16,0.24l1.39,-1.39l0.32,-3.14l0.76,-3.35l1.18,0.22ZM215.49,102.6l-2.67,1.95l-1.4,-0.07l-0.3,-0.58l1.53,-1.48l2.84,0.18ZM202.7,24.12l2.53,1.59l-2.87,1.4l-4.53,4.05l-4.25,0.38l-5.03,-0.68l-2.45,-2.04l0.03,-1.62l1.82,-1.37l0.14,-0.45l-0.38,-0.27l-4.45,0.04l-2.59,-1.76l-1.41,-2.29l1.57,-2.32l1.62,-1.66l2.44,-0.39l0.25,-0.65l-0.6,-0.74l4.86,-0.25l3.24,3.11l8.16,2.3l1.9,3.61ZM187.47,59.2l-2.76,3.49l-2.38,-0.15l-1.44,-3.84l0.04,-2.2l1.19,-1.88l2.3,-1.23l5.07,0.17l4.11,1.02l-3.24,3.72l-2.88,0.89ZM186.07,48.79l-1.08,1.53l-3.34,-0.34l-2.56,-1.1l1.03,-1.75l3.25,-1.23l1.95,1.58l0.75,1.3ZM185.71,35.32l-5.3,-0.2l-0.32,-0.71l4.31,0.07l1.3,0.84ZM180.68,32.48l-3.34,1.0l-1.79,-1.1l-0.98,-1.87l-0.15,-1.73l4.1,0.53l2.67,1.7l-0.51,1.47ZM180.9,76.31l-1.1,1.08l-3.13,-1.23l-2.12,0.43l-2.71,-1.57l1.72,-1.09l1.55,-1.72l3.81,1.9l1.98,2.2ZM169.74,54.87l2.96,0.97l4.17,-0.57l0.41,0.88l-2.14,2.11l0.09,0.64l3.55,1.92l-0.4,3.72l-3.79,1.65l-2.17,-0.35l-1.72,-1.74l-6.02,-3.5l0.03,-0.85l4.68,0.54l0.4,-0.21l-0.05,-0.45l-2.48,-2.81l2.46,-1.95ZM174.45,40.74l1.37,1.73l0.07,2.44l-1.05,3.45l-3.79,0.47l-2.32,-0.69l0.05,-2.64l-0.44,-0.41l-3.68,0.35l-0.12,-3.1l2.45,0.1l3.67,-1.73l3.41,0.29l0.37,-0.26ZM170.05,31.55l0.67,1.56l-3.33,-0.49l-4.22,-1.77l-4.35,-0.16l1.4,-0.94l-0.06,-0.7l-2.81,-1.23l-0.12,-1.39l4.39,0.68l6.62,1.98l1.81,2.47ZM134.5,58.13l-1.02,1.82l0.45,0.58l5.4,-1.39l3.33,2.29l0.49,-0.03l2.6,-2.23l1.94,1.32l2.0,4.5l0.7,0.06l1.3,-2.29l-1.63,-4.46l1.69,-0.54l2.31,0.71l2.65,1.81l2.49,7.92l8.48,4.27l-0.19,1.35l-3.79,0.33l-0.26,0.67l1.4,1.49l-0.58,1.1l-4.23,-0.64l-4.43,-1.19l-3.0,0.28l-4.66,1.47l-10.52,1.04l-1.43,-2.02l-3.42,-1.2l-2.21,0.43l-2.51,-2.86l4.84,-1.05l3.6,0.19l3.27,-0.78l0.31,-0.39l-0.31,-0.39l-4.84,-1.06l-8.79,0.27l-0.85,-1.07l5.26,-1.66l0.27,-0.45l-0.4,-0.34l-3.8,0.06l-3.81,-1.06l1.81,-3.01l1.66,-1.79l6.48,-2.81l1.97,0.71ZM158.7,56.61l-1.7,2.44l-3.2,-2.75l0.37,-0.3l3.11,-0.18l1.42,0.79ZM149.61,42.73l1.01,1.89l0.5,0.18l2.14,-0.82l2.23,0.19l0.36,2.04l-1.33,2.09l-8.28,0.76l-6.35,2.15l-3.41,0.1l-0.19,-0.96l4.9,-2.08l0.23,-0.46l-0.41,-0.31l-11.25,0.59l-2.89,-0.74l3.04,-4.44l2.14,-1.32l6.81,1.69l4.58,3.06l4.37,0.39l0.36,-0.63l-3.36,-4.6l1.85,-1.53l2.18,0.51l0.77,2.26ZM144.76,34.41l-4.36,1.44l-3.0,-1.4l1.46,-1.24l3.47,-0.52l2.96,0.71l-0.52,1.01ZM145.13,29.83l-1.9,0.66l-3.67,-0.0l2.27,-1.61l3.3,0.95ZM118.92,65.79l-6.03,2.02l-1.33,-1.9l-5.38,-2.28l2.59,-5.05l2.16,-3.14l-0.02,-0.48l-1.97,-2.41l7.64,-0.7l3.6,1.02l6.3,0.27l4.42,2.95l-2.53,0.98l-6.24,3.43l-3.1,3.28l-0.11,2.01ZM129.54,35.53l-0.28,3.37l-1.72,1.62l-2.33,0.28l-4.61,2.19l-3.86,0.76l-2.64,-0.87l3.72,-3.4l5.01,-3.34l3.72,0.07l3.0,-0.67ZM111.09,152.69l-0.67,0.24l-3.85,-1.37l-0.83,-1.17l-2.12,-1.07l-0.66,-1.02l-2.4,-0.55l-0.74,-1.71l6.02,1.45l2.0,2.55l2.52,1.39l0.73,1.27ZM87.8,134.64l0.89,0.29l1.86,-0.21l-0.65,3.34l1.69,2.33l-1.31,-1.33l-0.99,-1.62l-1.17,-0.98l-0.33,-1.82Z",
                    name: "Canada",
                },
                CG: {
                    path:
                        "M466.72,276.48l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.24l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z",
                    name: "Congo",
                },
                CF: {
                    path:
                        "M461.16,278.2l-0.26,-1.19l-1.09,-0.77l-0.84,-1.17l-0.29,-1.0l-1.04,-1.15l0.08,-3.43l0.58,-0.49l1.16,-2.35l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.96l2.48,-1.92l0.02,-0.96l2.81,0.02l2.36,-1.17l1.93,-2.85l1.16,-0.93l1.11,-0.3l0.27,0.86l1.34,1.47l-0.39,2.01l0.3,1.01l4.01,2.75l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.23,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.36l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.27l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z",
                    name: "Central African Rep.",
                },
                CD: {
                    path:
                        "M487.01,272.38l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.41l0.3,1.26l0.44,0.5l-4.08,0.75l-0.92,1.81l0.51,1.34l-0.74,5.43l0.17,0.38l2.45,1.46l0.54,-0.1l0.12,1.62l-1.28,-0.01l-1.85,-2.35l-1.94,-0.45l-0.48,-1.13l-0.55,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.18l-2.49,-0.19l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.41l-0.85,-1.13l-0.16,-1.36l0.32,-1.73l-0.46,-0.89l-0.04,-1.49l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.45l-1.62,0.32l-0.83,1.79l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.3l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.14l0.86,-1.13l1.1,-0.66l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z",
                    name: "Dem. Rep. Congo",
                },
                CZ: {
                    path:
                        "M458.46,144.88l1.22,1.01l1.47,0.23l0.13,0.93l1.36,0.68l0.54,-0.2l0.24,-0.55l1.15,0.25l0.53,1.09l1.68,0.18l0.6,0.84l-1.04,0.73l-0.96,1.28l-1.6,0.17l-0.55,0.56l-1.04,-0.46l-1.05,0.15l-2.12,-0.96l-1.05,0.34l-1.2,1.12l-1.56,-0.87l-2.57,-2.1l-0.53,-1.88l4.7,-2.52l0.71,0.26l0.9,-0.28Z",
                    name: "Czech Rep.",
                },
                CY: { path: "M504.36,193.47l0.43,0.28l-1.28,0.57l-0.92,-0.28l-0.24,-0.46l2.01,-0.13Z", name: "Cyprus" },
                CR: {
                    path:
                        "M211.34,258.05l0.48,0.99l1.6,1.6l-0.54,0.45l0.29,1.42l-0.25,1.19l-1.09,-0.59l-0.05,-1.25l-2.46,-1.42l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.04l-1.32,-0.95l0.31,-1.3l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z",
                    name: "Costa Rica",
                },
                CU: {
                    path:
                        "M221.21,227.25l1.27,1.02l2.19,-0.28l4.43,3.33l2.08,0.43l-0.1,0.38l0.36,0.5l1.75,0.1l1.48,0.84l-3.11,0.51l-4.15,-0.03l0.77,-0.67l-0.04,-0.64l-1.2,-0.74l-1.49,-0.16l-0.7,-0.61l-0.56,-1.4l-0.4,-0.25l-1.34,0.1l-2.2,-0.66l-0.88,-0.58l-3.18,-0.4l-0.27,-0.16l0.58,-0.74l-0.36,-0.29l-2.72,-0.05l-1.7,1.29l-0.91,0.03l-0.61,0.69l-1.01,0.22l1.11,-1.29l1.01,-0.52l3.69,-1.01l3.98,0.21l2.21,0.84Z",
                    name: "Cuba",
                },
                SZ: { path: "M500.35,351.36l0.5,2.04l-0.38,0.89l-1.05,0.21l-1.23,-1.2l-0.02,-0.64l0.83,-1.57l1.34,0.27Z", name: "Swaziland" },
                SY: {
                    path:
                        "M511.0,199.79l0.05,-1.33l0.54,-1.36l1.28,-0.99l0.13,-0.45l-0.41,-1.11l-1.14,-0.36l-0.19,-1.74l0.52,-1.0l1.29,-1.21l0.2,-1.18l0.59,0.23l2.62,-0.76l1.36,0.52l2.06,-0.01l2.95,-1.08l3.25,-0.26l-0.67,0.94l-1.28,0.66l-0.21,0.4l0.23,2.01l-0.88,3.19l-10.15,5.73l-2.15,-0.85Z",
                    name: "Syria",
                },
                KG: {
                    path:
                        "M621.35,172.32l-3.87,1.69l-0.96,1.18l-3.04,0.34l-1.13,1.86l-2.36,-0.35l-1.99,0.63l-2.39,1.4l0.06,0.95l-0.4,0.37l-4.52,0.43l-3.02,-0.93l-2.37,0.17l0.11,-0.79l2.32,0.42l1.13,-0.88l1.99,0.2l3.21,-2.14l-0.03,-0.69l-2.97,-1.57l-1.94,0.65l-1.22,-0.74l1.71,-1.58l-0.12,-0.67l-0.36,-0.15l0.32,-0.77l1.36,-0.35l4.02,1.02l0.49,-0.3l0.35,-1.59l1.09,-0.48l3.42,1.22l1.11,-0.31l7.64,0.39l1.16,1.0l1.23,0.39Z",
                    name: "Kyrgyzstan",
                },
                KE: {
                    path:
                        "M506.26,284.69l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.68l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z",
                    name: "Kenya",
                },
                SS: {
                    path:
                        "M481.71,263.34l1.07,-0.72l1.2,-3.18l1.36,-0.26l1.61,1.99l0.87,0.34l1.1,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.33l1.6,-0.2l2.83,-3.33l-0.32,-2.21l1.59,-0.52l-0.24,1.6l0.3,1.83l1.35,1.18l0.2,1.87l0.35,0.41l0.02,1.53l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.16l1.11,1.08l0.59,1.13l1.03,0.53l1.28,2.36l-4.41,3.98l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.32l-0.18,-0.94l-2.37,-1.6Z",
                    name: "S. Sudan",
                },
                SR: {
                    path:
                        "M283.12,270.19l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.03l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.97l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.57,-0.47l1.75,-0.16Z",
                    name: "Suriname",
                },
                KH: {
                    path: "M689.52,249.39l0.49,1.45l-0.28,2.74l-4.0,1.86l-0.16,0.6l0.68,0.95l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-2.12,-3.7l-0.55,-2.85l1.4,-1.85l3.02,-0.45l2.23,0.35l2.01,0.98l0.51,-0.14l0.95,-1.48l1.74,0.74Z",
                    name: "Cambodia",
                },
                SV: { path: "M195.8,250.13l1.4,-1.19l2.24,1.45l0.98,-0.27l0.44,0.2l-0.27,1.05l-1.14,-0.03l-3.64,-1.21Z", name: "El Salvador" },
                SK: {
                    path:
                        "M476.82,151.17l-1.14,1.9l-2.73,-0.92l-0.82,0.2l-0.74,0.8l-3.46,0.73l-0.47,0.69l-1.76,0.33l-1.88,-1.0l-0.18,-0.81l0.38,-0.75l1.87,-0.32l1.74,-1.89l0.83,0.16l0.79,-0.34l1.51,1.04l1.34,-0.63l1.25,0.3l1.65,-0.42l1.81,0.95Z",
                    name: "Slovakia",
                },
                KR: {
                    path: "M737.51,185.84l0.98,-0.1l0.87,-1.17l2.69,-0.32l0.33,-0.29l1.76,2.79l0.58,1.76l0.02,3.12l-0.8,1.32l-2.21,0.55l-1.93,1.13l-1.8,0.19l-0.2,-1.1l0.43,-2.28l-0.95,-2.56l1.43,-0.37l0.23,-0.62l-1.43,-2.06Z",
                    name: "Korea",
                },
                SI: { path: "M456.18,162.07l-0.51,-1.32l0.18,-1.05l1.69,0.2l1.42,-0.71l2.09,-0.07l0.62,-0.51l0.21,0.47l-1.61,0.67l-0.44,1.34l-0.66,0.24l-0.26,0.82l-1.22,-0.49l-0.84,0.46l-0.69,-0.04Z", name: "Slovenia" },
                KP: {
                    path:
                        "M736.77,185.16l-0.92,-0.42l-0.88,0.62l-1.21,-0.88l0.96,-1.15l0.59,-2.59l-0.46,-0.74l-2.09,-0.77l1.64,-1.52l2.72,-1.58l1.58,-1.91l1.11,0.78l2.17,0.11l0.41,-0.5l-0.3,-1.22l3.52,-1.18l0.94,-1.4l0.98,1.08l-2.19,2.18l0.01,2.14l-1.06,0.54l-1.41,1.4l-1.7,0.52l-1.25,1.09l-0.14,1.98l0.94,0.45l1.15,1.04l-0.13,0.26l-2.6,0.29l-1.13,1.29l-1.22,0.08Z",
                    name: "Dem. Rep. Korea",
                },
                SO: {
                    path:
                        "M525.13,288.48l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.55l2.91,-3.69l0.08,-4.82l2.98,-0.67l1.24,-0.86l0.45,-0.0l-0.2,3.0l-1.21,3.62l-2.73,5.97l-2.13,3.65l-5.03,6.16l-8.56,6.4l-2.78,3.08l-0.8,1.56Z",
                    name: "Somalia",
                },
                SN: {
                    path:
                        "M390.09,248.21l0.12,1.55l0.49,1.46l0.96,0.82l0.05,1.28l-1.26,-0.19l-0.75,0.33l-1.84,-0.61l-5.84,-0.13l-2.54,0.51l-0.22,-1.03l1.77,0.04l2.01,-0.91l1.03,0.48l1.09,0.04l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.63l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.77l-0.81,-0.64l0.64,-0.35l2.46,-3.74l1.04,0.19l1.38,-0.56l1.19,-0.02l2.72,1.37l3.03,3.48Z",
                    name: "Senegal",
                },
                SL: { path: "M394.46,264.11l-1.73,1.98l-0.58,1.33l-2.07,-1.06l-1.22,-1.26l-0.65,-2.39l1.16,-0.96l0.67,-1.17l1.21,-0.52l1.66,0.0l1.03,1.64l0.52,2.41Z", name: "Sierra Leone" },
                SB: {
                    path:
                        "M826.69,311.6l-0.61,0.09l-0.2,-0.33l0.37,0.15l0.44,0.09ZM824.18,307.38l-0.26,-0.3l-0.31,-0.91l0.03,0.0l0.54,1.21ZM823.04,309.33l-1.66,-0.22l-0.2,-0.52l1.16,0.28l0.69,0.46ZM819.28,304.68l1.14,0.65l0.02,0.03l-0.81,-0.44l-0.35,-0.23Z",
                    name: "Solomon Is.",
                },
                SA: {
                    path:
                        "M537.53,210.34l2.0,0.24l0.9,1.32l1.49,-0.06l0.87,2.08l1.29,0.76l0.51,0.99l1.56,1.03l-0.1,1.9l0.32,0.9l1.58,2.47l0.76,0.53l0.7,-0.04l1.68,4.23l7.53,1.33l0.51,-0.29l0.77,1.25l-1.55,4.87l-7.29,2.52l-7.3,1.03l-2.34,1.17l-1.88,2.74l-0.76,0.28l-0.82,-0.78l-0.91,0.12l-2.88,-0.51l-3.51,0.25l-0.86,-0.56l-0.57,0.15l-0.66,1.27l0.16,1.11l-0.43,0.32l-0.93,-1.4l-0.33,-1.16l-1.23,-0.88l-1.27,-2.06l-0.78,-2.22l-1.73,-1.79l-1.14,-0.48l-1.54,-2.31l-0.21,-3.41l-1.44,-2.93l-1.27,-1.16l-1.33,-0.57l-1.31,-3.37l-0.77,-0.67l-0.97,-1.97l-2.8,-4.03l-1.06,-0.17l0.37,-1.96l0.2,-0.72l2.74,0.3l1.08,-0.84l0.6,-0.94l1.74,-0.35l0.65,-1.03l0.71,-0.4l0.1,-0.62l-2.06,-2.28l4.39,-1.22l0.48,-0.37l2.77,0.69l3.66,1.9l7.03,5.5l4.87,0.3Z",
                    name: "Saudi Arabia",
                },
                SE: {
                    path:
                        "M480.22,89.3l-4.03,1.17l-2.43,2.86l0.26,2.57l-8.77,6.64l-1.78,5.79l1.78,2.68l2.22,1.96l-2.07,3.77l-2.72,1.13l-0.95,6.04l-1.29,3.01l-2.74,-0.31l-0.4,0.22l-1.31,2.59l-2.34,0.13l-0.75,-3.09l-2.08,-4.03l-1.83,-4.96l1.0,-1.93l2.14,-2.7l0.83,-4.45l-1.6,-2.17l-0.15,-4.94l1.48,-3.39l2.58,-0.15l0.87,-1.59l-0.78,-1.57l3.76,-5.59l4.04,-7.48l2.17,0.01l0.39,-0.29l0.57,-2.07l4.37,0.64l0.46,-0.34l0.33,-2.56l1.1,-0.13l6.94,4.87l0.06,6.32l0.66,1.36Z",
                    name: "Sweden",
                },
                SD: {
                    path:
                        "M505.98,259.4l-0.34,-0.77l-1.17,-0.9l-0.26,-1.61l0.29,-1.81l-0.34,-0.46l-1.16,-0.17l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.65l0.17,1.22l-2.44,3.0l-0.96,0.19l-2.39,-1.4l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.4l-2.45,-2.35l-2.07,0.54l-0.73,1.26l-0.6,2.1l-1.25,0.58l-0.75,-0.62l0.27,-2.65l-1.48,-1.78l-0.22,-1.48l-0.92,-0.96l-0.02,-1.29l-0.57,-1.16l-0.68,-0.16l0.69,-1.29l-0.18,-1.14l0.65,-0.62l0.03,-0.55l-0.36,-0.41l1.55,-2.97l1.91,0.16l0.43,-0.4l-0.1,-10.94l2.49,-0.01l0.4,-0.4l-0.0,-4.82l29.02,0.0l0.64,2.04l-0.49,0.66l0.36,2.69l0.93,3.16l2.12,1.55l-0.89,1.04l-1.72,0.39l-0.98,0.9l-1.43,5.65l0.24,1.15l-0.38,2.06l-0.96,2.38l-1.53,1.31l-1.32,2.91l-1.22,0.86l-0.37,1.34Z",
                    name: "Sudan",
                },
                DO: {
                    path:
                        "M241.8,239.2l0.05,-0.65l-0.46,-0.73l0.42,-0.44l0.19,-1.0l-0.09,-1.53l1.66,0.01l1.99,0.63l0.33,0.67l1.28,0.19l0.33,0.76l1.0,0.08l0.8,0.62l-0.45,0.51l-1.13,-0.47l-1.88,-0.01l-1.27,0.59l-0.75,-0.55l-1.01,0.54l-0.79,1.4l-0.23,-0.61Z",
                    name: "Dominican Rep.",
                },
                DJ: { path: "M528.43,256.18l-0.45,0.66l-0.58,-0.25l-1.51,0.13l-0.18,-1.01l1.45,-1.95l0.83,0.17l0.77,-0.44l0.2,1.0l-1.2,0.51l-0.06,0.7l0.73,0.47Z", name: "Djibouti" },
                DK: {
                    path:
                        "M452.28,129.07l-1.19,2.24l-2.13,-1.6l-0.23,-0.95l2.98,-0.95l0.57,1.26ZM447.74,126.31l-0.26,0.57l-0.88,-0.07l-1.8,2.53l0.48,1.69l-1.09,0.36l-1.61,-0.39l-0.89,-1.69l-0.07,-3.43l0.96,-1.73l2.02,-0.2l1.09,-1.07l1.33,-0.67l-0.05,1.06l-0.73,1.41l0.3,1.0l1.2,0.64Z",
                    name: "Denmark",
                },
                DE: {
                    path:
                        "M453.14,155.55l-0.55,-0.36l-1.2,-0.1l-1.87,0.57l-2.13,-0.13l-0.56,0.63l-0.86,-0.6l-0.96,0.09l-2.57,-0.93l-0.85,0.67l-1.47,-0.02l0.24,-1.75l1.23,-2.14l-0.28,-0.59l-3.52,-0.58l-0.92,-0.66l0.12,-1.2l-0.48,-0.88l0.27,-2.17l-0.37,-3.03l1.41,-0.22l0.63,-1.26l0.66,-3.19l-0.41,-1.18l0.26,-0.39l1.66,-0.15l0.33,0.54l0.62,0.07l1.7,-1.69l-0.54,-3.02l1.37,0.33l1.31,-0.37l0.31,1.18l2.25,0.71l-0.02,0.92l0.5,0.4l2.55,-0.65l1.34,-0.87l2.57,1.24l1.06,0.98l0.48,1.44l-0.57,0.74l-0.0,0.48l0.87,1.15l0.57,1.64l-0.14,1.29l0.82,1.7l-1.5,-0.07l-0.56,0.57l-4.47,2.15l-0.22,0.54l0.68,2.26l2.58,2.16l-0.66,1.11l-0.79,0.36l-0.23,0.43l0.32,1.87Z",
                    name: "Germany",
                },
                YE: {
                    path:
                        "M528.27,246.72l0.26,-0.42l-0.22,-1.01l0.19,-1.5l0.92,-0.69l-0.07,-1.35l0.39,-0.75l1.01,0.47l3.34,-0.27l3.76,0.41l0.95,0.81l1.36,-0.58l1.74,-2.62l2.18,-1.09l6.86,-0.94l2.48,5.41l-1.64,0.76l-0.56,1.9l-6.23,2.16l-2.29,1.8l-1.93,0.05l-1.41,1.02l-4.24,0.74l-1.72,1.49l-3.28,0.19l-0.52,-1.18l0.02,-1.51l-1.34,-3.29Z",
                    name: "Yemen",
                },
                AT: {
                    path:
                        "M462.89,152.8l0.04,2.25l-1.07,0.0l-0.33,0.63l0.36,0.51l-1.04,2.13l-2.02,0.07l-1.33,0.7l-5.29,-0.99l-0.47,-0.93l-0.44,-0.21l-2.47,0.55l-0.42,0.51l-3.18,-0.81l0.43,-0.91l1.12,0.78l0.6,-0.17l0.25,-0.58l1.93,0.12l1.86,-0.56l1.0,0.08l0.68,0.57l0.62,-0.15l0.26,-0.77l-0.3,-1.78l0.8,-0.44l0.68,-1.15l1.52,0.85l0.47,-0.06l1.34,-1.25l0.64,-0.17l1.81,0.92l1.28,-0.11l0.7,0.37Z",
                    name: "Austria",
                },
                DZ: {
                    path:
                        "M441.46,188.44l-0.32,1.07l0.39,2.64l-0.54,2.16l-1.58,1.82l0.37,2.39l1.91,1.55l0.18,0.8l1.42,1.03l1.84,7.23l0.12,1.16l-0.57,5.0l0.2,1.51l-0.87,0.99l-0.02,0.51l1.41,1.86l0.14,1.2l0.89,1.48l0.5,0.16l0.98,-0.41l1.73,1.08l0.82,1.23l-8.22,4.81l-7.23,5.11l-3.43,1.13l-2.3,0.21l-0.28,-1.59l-2.56,-1.09l-0.67,-1.25l-26.12,-17.86l0.01,-3.47l3.77,-1.88l2.44,-0.41l2.12,-0.75l1.08,-1.42l2.81,-1.05l0.35,-2.08l1.33,-0.29l1.04,-0.94l3.47,-0.69l0.46,-1.08l-0.1,-0.45l-0.58,-0.52l-0.82,-2.81l-0.19,-1.83l-0.78,-1.49l2.03,-1.31l2.63,-0.48l1.7,-1.22l2.31,-0.84l8.24,-0.73l1.49,0.38l2.28,-1.1l2.46,-0.02l0.92,0.6l1.35,-0.05Z",
                    name: "Algeria",
                },
                US: {
                    path:
                        "M892.72,99.2l1.31,0.53l1.41,-0.37l1.89,0.98l1.89,0.42l-1.32,0.58l-2.9,-1.53l-2.08,0.22l-0.26,-0.15l0.07,-0.67ZM183.22,150.47l0.37,1.47l1.12,0.85l4.23,0.7l2.39,0.98l2.17,-0.38l1.85,0.5l-1.55,0.65l-3.49,2.61l-0.16,0.77l0.5,0.39l2.33,-0.61l1.77,1.02l5.15,-2.4l-0.31,0.65l0.25,0.56l1.36,0.38l1.71,1.16l4.7,-0.88l0.67,0.85l1.31,0.21l0.58,0.58l-1.34,0.17l-2.18,-0.32l-3.6,0.89l-2.71,3.25l0.35,0.9l0.59,-0.0l0.55,-0.6l-1.36,4.65l0.29,3.09l0.67,1.58l0.61,0.45l1.77,-0.44l1.6,-1.96l0.14,-2.21l-0.82,-1.96l0.11,-1.13l1.19,-2.37l0.44,-0.33l0.48,0.75l0.4,-0.29l0.4,-1.37l0.6,-0.47l0.24,-0.8l1.69,0.49l1.65,1.08l-0.03,2.37l-1.27,1.13l-0.0,1.13l0.87,0.36l1.66,-1.29l0.5,0.17l0.5,2.6l-2.49,3.75l0.17,0.61l1.54,0.62l1.48,0.17l1.92,-0.44l4.72,-2.15l2.16,-1.8l-0.05,-1.24l0.75,-0.22l3.92,0.36l2.12,-1.05l0.21,-0.4l-0.28,-1.48l3.27,-2.4l8.32,-0.02l0.56,-0.82l1.9,-0.77l0.93,-1.51l0.74,-2.37l1.58,-1.98l0.92,0.62l1.47,-0.47l0.8,0.66l-0.0,4.09l1.96,2.6l-2.34,1.31l-5.37,2.09l-1.83,2.72l0.02,1.79l0.83,1.59l0.54,0.23l-6.19,0.94l-2.2,0.89l-0.23,0.48l0.45,0.29l2.99,-0.46l-2.19,0.56l-1.13,0.0l-0.15,-0.32l-0.48,0.08l-0.76,0.82l0.22,0.67l0.32,0.06l-0.41,1.62l-1.27,1.58l-1.48,-1.07l-0.49,-0.04l-0.16,0.46l0.52,1.58l0.61,0.59l0.03,0.79l-0.95,1.38l-1.21,-1.22l-0.27,-2.27l-0.35,-0.35l-0.42,0.25l-0.48,1.27l0.33,1.41l-0.97,-0.27l-0.48,0.24l0.18,0.5l1.52,0.83l0.1,2.52l0.79,0.51l0.52,3.42l-1.42,1.88l-2.47,0.8l-1.71,1.66l-1.31,0.25l-1.27,1.03l-0.43,0.99l-2.69,1.78l-2.64,3.03l-0.45,2.12l0.45,2.08l0.85,2.38l1.09,1.9l0.04,1.2l1.16,3.06l-0.18,2.69l-0.55,1.43l-0.47,0.21l-0.89,-0.23l-0.49,-1.18l-0.87,-0.56l-2.75,-5.16l0.48,-1.68l-0.72,-1.78l-2.01,-2.38l-1.12,-0.53l-2.72,1.18l-1.47,-1.35l-1.57,-0.68l-2.99,0.31l-2.17,-0.3l-2.0,0.19l-1.15,0.46l-0.19,0.58l0.39,0.63l0.14,1.34l-0.84,-0.2l-0.84,0.46l-1.58,-0.07l-2.08,-1.44l-2.09,0.33l-1.91,-0.62l-3.73,0.84l-2.39,2.07l-2.54,1.22l-1.45,1.41l-0.61,1.38l0.34,3.71l-0.29,0.02l-3.5,-1.33l-1.25,-3.11l-1.44,-1.5l-2.24,-3.56l-1.76,-1.09l-2.27,-0.01l-1.71,2.07l-1.76,-0.69l-1.16,-0.74l-1.52,-2.98l-3.93,-3.16l-4.34,-0.0l-0.4,0.4l-0.0,0.74l-6.5,0.02l-9.02,-3.14l-0.34,-0.71l-5.7,0.49l-0.43,-1.29l-1.62,-1.61l-1.14,-0.38l-0.55,-0.88l-1.28,-0.13l-1.01,-0.77l-2.22,-0.27l-0.43,-0.3l-0.36,-1.58l-2.4,-2.83l-2.01,-3.85l-0.06,-0.9l-2.92,-3.26l-0.33,-2.29l-1.3,-1.66l0.52,-2.37l-0.09,-2.57l-0.78,-2.3l0.95,-2.82l0.61,-5.68l-0.47,-4.27l-1.46,-4.08l3.19,0.79l1.26,2.83l0.69,0.08l0.69,-1.14l-1.1,-4.79l68.76,-0.0l0.4,-0.4l0.14,-0.86ZM32.44,67.52l1.73,1.97l0.55,0.05l0.99,-0.79l3.65,0.24l-0.09,0.62l0.32,0.45l3.83,0.77l2.61,-0.43l5.19,1.4l4.84,0.43l1.89,0.57l3.42,-0.7l6.14,1.87l-0.03,38.06l0.38,0.4l2.39,0.11l2.31,0.98l3.9,3.99l0.55,0.04l2.4,-2.03l2.16,-1.04l1.2,1.71l3.95,3.14l4.09,6.63l4.2,2.29l0.06,1.83l-1.02,1.23l-1.16,-1.08l-2.04,-1.03l-0.67,-2.89l-3.28,-3.03l-1.65,-3.57l-6.35,-0.32l-2.82,-1.01l-5.26,-3.85l-6.77,-2.04l-3.53,0.3l-4.81,-1.69l-3.25,-1.63l-2.78,0.8l-0.28,0.46l0.44,2.21l-3.91,0.96l-2.26,1.27l-2.3,0.65l-0.27,-1.65l1.05,-3.42l2.49,-1.09l0.16,-0.6l-0.69,-0.96l-0.55,-0.1l-3.19,2.12l-1.78,2.56l-3.55,2.61l-0.04,0.61l1.56,1.52l-2.07,2.29l-5.11,2.57l-0.77,1.66l-3.76,1.77l-0.92,1.73l-2.69,1.38l-1.81,-0.22l-6.95,3.32l-3.97,0.91l4.85,-2.5l2.59,-1.86l3.26,-0.52l1.19,-1.4l3.42,-2.1l2.59,-2.27l0.42,-2.68l1.23,-2.1l-0.04,-0.46l-0.45,-0.11l-2.68,1.03l-0.63,-0.49l-0.53,0.03l-1.05,1.04l-1.36,-1.54l-0.66,0.08l-0.32,0.62l-0.58,-1.14l-0.56,-0.16l-2.41,1.42l-1.07,-0.0l-0.17,-1.75l0.3,-1.71l-1.61,-1.33l-3.41,0.59l-1.96,-1.63l-1.57,-0.84l-0.15,-2.21l-1.7,-1.43l0.82,-1.88l1.99,-2.12l0.88,-1.92l1.71,-0.24l2.04,0.51l1.87,-1.77l1.91,0.25l1.91,-1.23l0.17,-0.43l-0.47,-1.82l-1.07,-0.7l1.39,-1.17l0.12,-0.45l-0.39,-0.26l-1.65,0.07l-2.66,0.88l-0.75,0.78l-1.92,-0.8l-3.46,0.44l-3.44,-0.91l-1.06,-1.61l-2.65,-1.99l2.91,-1.43l5.5,-2.0l1.52,0.0l-0.26,1.62l0.41,0.46l5.29,-0.16l0.3,-0.65l-2.03,-2.59l-3.14,-1.68l-1.79,-2.12l-2.4,-1.83l-3.09,-1.24l1.04,-1.69l4.23,-0.14l3.36,-2.07l0.73,-2.27l2.39,-1.99l2.42,-0.52l4.65,-1.97l2.46,0.23l3.71,-2.35l3.5,0.89ZM37.6,123.41l-2.25,1.23l-0.95,-0.69l-0.29,-1.24l3.21,-1.63l1.42,0.21l0.67,0.7l-1.8,1.42ZM31.06,234.03l0.98,0.47l0.74,0.87l-1.77,1.07l-0.44,-1.53l0.49,-0.89ZM29.34,232.07l0.18,0.05l0.08,0.05l-0.16,0.03l-0.11,-0.14ZM25.16,230.17l0.05,-0.03l0.18,0.22l-0.13,-0.01l-0.1,-0.18ZM5.89,113.26l-1.08,0.41l-2.21,-1.12l1.53,-0.4l1.62,0.28l0.14,0.83Z",
                    name: "United States",
                },
                LV: {
                    path:
                        "M489.16,122.85l0.96,0.66l0.22,1.65l0.68,1.76l-3.65,1.7l-2.23,-1.58l-1.29,-0.26l-0.68,-0.77l-2.42,0.34l-4.16,-0.23l-2.47,0.9l0.06,-1.98l1.13,-2.06l1.95,-1.02l2.12,2.58l2.01,-0.07l0.38,-0.33l0.44,-2.52l1.76,-0.53l3.06,1.7l2.15,0.07Z",
                    name: "Latvia",
                },
                UY: {
                    path: "M286.85,372.74l-0.92,1.5l-2.59,1.44l-1.69,-0.52l-1.42,0.26l-2.39,-1.19l-1.52,0.08l-1.27,-1.3l0.16,-1.5l0.56,-0.79l-0.02,-2.73l1.21,-4.74l1.19,-0.21l2.37,2.0l1.08,0.03l4.36,3.17l1.22,1.6l-0.96,1.5l0.61,1.4Z",
                    name: "Uruguay",
                },
                LB: { path: "M510.37,198.01l-0.88,0.51l1.82,-3.54l0.62,0.08l0.22,0.61l-1.13,0.88l-0.65,1.47Z", name: "Lebanon" },
                LA: {
                    path:
                        "M689.54,248.53l-1.76,-0.74l-0.49,0.15l-0.94,1.46l-1.32,-0.64l0.62,-0.98l0.11,-2.17l-2.04,-2.42l-0.25,-2.65l-1.9,-2.1l-2.15,-0.31l-0.78,0.91l-1.12,0.06l-1.05,-0.4l-2.06,1.2l-0.04,-1.59l0.61,-2.68l-0.36,-0.49l-1.35,-0.1l-0.11,-1.23l-0.96,-0.88l1.96,-1.89l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.66l0.7,-0.21l1.28,1.81l1.11,2.35l0.36,0.23l2.82,0.02l0.71,1.67l-1.39,0.65l-0.72,0.93l0.13,0.6l2.91,1.51l3.6,5.25l1.88,1.78l0.56,1.62l-0.35,1.96Z",
                    name: "Lao PDR",
                },
                TW: { path: "M724.01,226.68l-0.74,1.48l-0.9,-1.52l-0.25,-1.74l1.38,-2.44l1.73,-1.74l0.64,0.44l-1.85,5.52Z", name: "Taiwan" },
                TT: { path: "M266.64,259.32l0.28,-1.16l1.13,-0.22l-0.06,1.2l-1.35,0.18Z", name: "Trinidad and Tobago" },
                TR: {
                    path:
                        "M513.21,175.47l3.64,1.17l3.05,-0.44l2.1,0.26l3.11,-1.56l2.46,-0.13l2.19,1.33l0.33,0.82l-0.22,1.33l0.25,0.44l2.28,1.13l-1.17,0.57l-0.21,0.45l0.75,3.2l-0.41,1.16l1.13,1.92l-0.55,0.22l-0.9,-0.67l-2.91,-0.37l-1.24,0.46l-4.23,0.41l-2.81,1.05l-1.91,0.01l-1.52,-0.53l-2.58,0.75l-0.66,-0.45l-0.62,0.3l-0.12,1.45l-0.89,0.84l-0.47,-0.67l0.79,-1.3l-0.41,-0.2l-1.43,0.23l-2.0,-0.63l-2.02,1.65l-3.51,0.3l-2.13,-1.53l-2.7,-0.1l-0.86,1.24l-1.38,0.27l-2.29,-1.44l-2.71,-0.01l-1.37,-2.65l-1.68,-1.52l1.07,-1.99l-0.09,-0.49l-1.27,-1.12l2.37,-2.41l3.7,-0.11l1.28,-2.24l4.49,0.37l3.21,-1.97l2.81,-0.82l3.99,-0.06l4.29,2.07ZM488.79,176.72l-1.72,1.31l-0.5,-0.88l1.37,-2.57l-0.7,-0.85l1.7,-0.63l1.8,0.34l0.46,1.17l1.76,0.78l-2.87,0.32l-1.3,1.01Z",
                    name: "Turkey",
                },
                LK: { path: "M624.16,268.99l-1.82,0.48l-0.99,-1.67l-0.42,-3.46l0.95,-3.43l1.21,0.98l2.26,4.19l-0.34,2.33l-0.85,0.58Z", name: "Sri Lanka" },
                TN: {
                    path:
                        "M448.1,188.24l-1.0,1.27l-0.02,1.32l0.84,0.88l-0.28,2.09l-1.53,1.32l-0.12,0.42l0.48,1.54l1.42,0.32l0.53,1.11l0.9,0.52l-0.11,1.67l-3.54,2.64l-0.1,2.38l-0.58,0.3l-0.96,-4.45l-1.54,-1.25l-0.16,-0.78l-1.92,-1.56l-0.18,-1.76l1.51,-1.62l0.59,-2.34l-0.38,-2.78l0.42,-1.21l2.45,-1.05l1.29,0.26l-0.06,1.11l0.58,0.38l1.47,-0.73Z",
                    name: "Tunisia",
                },
                TL: { path: "M734.55,307.93l-0.1,-0.97l4.5,-0.86l-2.82,1.28l-1.59,0.55Z", name: "Timor-Leste" },
                TM: {
                    path:
                        "M553.03,173.76l-0.04,0.34l-0.09,-0.22l0.13,-0.12ZM555.87,172.66l0.45,-0.1l1.48,0.74l2.06,2.43l4.07,-0.18l0.38,-0.51l-0.32,-1.19l1.92,-0.94l1.91,-1.59l2.94,1.39l0.43,2.47l1.19,0.67l2.58,-0.13l0.62,0.4l1.32,3.12l4.54,3.44l2.67,1.45l3.06,1.14l-0.04,1.05l-1.33,-0.75l-0.59,0.19l-0.32,0.84l-2.2,0.81l-0.46,2.13l-1.21,0.74l-1.91,0.42l-0.73,1.33l-1.56,0.31l-2.22,-0.94l-0.2,-2.17l-0.38,-0.36l-1.73,-0.09l-2.76,-2.46l-2.14,-0.4l-2.84,-1.48l-1.78,-0.27l-1.24,0.53l-1.57,-0.08l-2.0,1.69l-1.7,0.43l-0.36,-1.58l0.36,-2.98l-0.22,-0.4l-1.65,-0.84l0.54,-1.69l-0.34,-0.52l-1.22,-0.13l0.36,-1.64l2.22,0.59l2.2,-0.95l0.12,-0.65l-1.77,-1.74l-0.66,-1.57Z",
                    name: "Turkmenistan",
                },
                TJ: {
                    path:
                        "M597.75,178.82l-2.54,-0.44l-0.47,0.34l-0.24,1.7l0.43,0.45l2.64,-0.22l3.18,0.95l4.39,-0.41l0.56,2.37l0.52,0.29l0.67,-0.24l1.11,0.49l0.21,2.13l-3.76,-0.21l-1.8,1.32l-1.76,0.74l-0.61,-0.58l0.21,-2.23l-0.64,-0.49l-0.07,-0.93l-1.36,-0.66l-0.45,0.07l-1.08,1.01l-0.55,1.48l-1.31,-0.05l-0.95,1.16l-0.9,-0.35l-1.86,0.74l1.26,-2.83l-0.54,-2.17l-1.67,-0.82l0.33,-0.66l2.18,-0.04l1.19,-1.63l0.76,-1.79l2.43,-0.5l-0.26,1.0l0.73,1.05Z",
                    name: "Tajikistan",
                },
                LS: { path: "M491.06,363.48l-0.49,0.15l-1.49,-1.67l1.1,-1.43l2.19,-1.44l1.51,1.27l-0.98,1.82l-1.23,0.38l-0.62,0.93Z", name: "Lesotho" },
                TH: {
                    path:
                        "M670.27,255.86l-1.41,3.87l0.15,2.0l0.38,0.36l1.38,0.07l0.9,2.04l0.55,2.34l1.4,1.44l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.56,-2.63l-0.73,0.41l0.95,-3.89l2.16,-4.22ZM670.67,254.77l-0.92,-2.18l-0.26,-2.61l-2.14,-3.06l0.71,-0.49l0.89,-2.59l-3.61,-5.45l0.87,-0.51l1.05,-2.58l1.74,-0.18l2.6,-1.59l0.76,0.56l0.13,1.39l0.37,0.36l1.23,0.09l-0.51,2.28l0.05,2.42l0.6,0.34l2.43,-1.42l0.77,0.39l1.47,-0.07l0.71,-0.88l1.48,0.14l1.71,1.88l0.25,2.65l1.92,2.11l-0.1,1.89l-0.61,0.86l-2.22,-0.33l-3.5,0.64l-1.6,2.12l0.36,2.58l-1.51,-0.79l-1.84,-0.01l0.28,-1.52l-0.4,-0.47l-2.21,0.01l-0.4,0.37l-0.19,2.74l-0.34,0.93Z",
                    name: "Thailand",
                },
                TF: { path: "M596.68,420.38l-3.2,0.18l-0.05,-1.26l0.39,-1.41l1.3,0.78l2.08,0.35l-0.52,1.36Z", name: "Fr. S. Antarctic Lands" },
                TG: { path: "M422.7,257.63l-0.09,1.23l1.53,1.52l0.08,1.09l0.5,0.65l-0.11,5.62l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.12l0.53,-2.19l-0.63,-1.16l-0.22,-3.68l-1.01,-1.4l0.07,-0.28l1.37,0.03Z", name: "Togo" },
                TD: {
                    path:
                        "M480.25,235.49l0.12,9.57l-2.1,0.05l-1.14,1.89l-0.69,1.63l0.34,0.73l-0.66,0.91l0.24,0.89l-0.86,1.95l0.45,0.5l0.6,-0.1l0.34,0.64l0.03,1.38l0.9,1.04l-1.45,0.43l-1.27,1.03l-1.83,2.76l-2.16,1.07l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.61l-2.11,1.68l-2.85,0.87l-1.09,-0.57l-0.73,0.66l-1.12,0.1l-1.1,-3.12l-1.25,-0.64l-1.22,-1.22l0.29,-0.64l3.01,0.04l0.35,-0.6l-1.3,-2.2l-0.08,-3.31l-0.97,-1.66l0.22,-1.04l-0.38,-0.48l-1.22,-0.04l0.0,-1.25l-0.98,-1.07l0.96,-3.01l3.25,-2.65l0.13,-3.33l0.95,-5.18l0.52,-1.07l-0.1,-0.48l-0.91,-0.78l-0.2,-0.96l-0.8,-0.58l-0.55,-3.65l2.1,-1.2l19.57,9.83Z",
                    name: "Chad",
                },
                LY: {
                    path:
                        "M483.48,203.15l-0.75,1.1l0.29,1.39l-0.6,1.83l0.73,2.14l0.0,24.12l-2.48,0.01l-0.41,0.85l-19.41,-9.76l-4.41,2.28l-1.37,-1.33l-3.82,-1.1l-1.14,-1.65l-1.98,-1.23l-1.22,0.32l-0.66,-1.11l-0.17,-1.26l-1.28,-1.69l0.87,-1.19l-0.07,-4.34l0.43,-2.27l-0.86,-3.45l1.13,-0.76l0.22,-1.16l-0.2,-1.03l3.48,-2.61l0.29,-1.94l2.45,0.8l1.18,-0.21l1.98,0.44l3.15,1.18l1.37,2.54l5.72,1.67l2.64,1.35l1.61,-0.72l1.29,-1.34l-0.44,-2.34l0.66,-1.13l1.67,-1.21l1.57,-0.35l3.14,0.53l1.08,1.28l3.99,0.78l0.36,0.54Z",
                    name: "Libya",
                },
                AE: { path: "M550.76,223.97l1.88,-0.4l3.84,0.02l4.78,-4.75l0.19,0.36l0.26,1.58l-0.81,0.01l-0.39,0.35l-0.08,2.04l-0.81,0.63l-0.01,0.96l-0.66,0.99l-0.39,1.41l-7.08,-1.25l-0.7,-1.96Z", name: "United Arab Emirates" },
                VE: {
                    path:
                        "M240.68,256.69l0.53,0.75l-0.02,1.06l-1.07,1.78l0.95,2.0l0.42,0.22l1.4,-0.44l0.56,-1.83l-0.77,-1.17l-0.1,-1.47l2.82,-0.93l0.26,-0.49l-0.28,-0.96l0.3,-0.28l0.66,1.31l1.96,0.26l1.4,1.22l0.08,0.68l0.39,0.35l4.81,-0.22l1.49,1.11l1.92,0.31l1.67,-0.84l0.22,-0.6l3.44,-0.14l-0.17,0.55l0.86,1.19l2.19,0.35l1.67,1.1l0.37,1.86l0.41,0.32l1.55,0.17l-1.66,1.35l-0.22,0.92l0.65,0.97l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.54l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.46l-4.02,0.36l-1.82,-2.1l-1.57,-0.33l-2.99,0.22l-1.06,-0.97l0.25,-1.23l-0.2,-1.01l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.79l1.9,-2.11Z",
                    name: "Venezuela",
                },
                AF: {
                    path:
                        "M600.7,188.88l-1.57,1.3l-0.1,0.48l0.8,2.31l-1.09,1.04l-0.03,1.27l-0.48,0.71l-2.16,-0.08l-0.37,0.59l0.78,1.48l-1.38,0.69l-1.06,1.69l0.06,1.7l-0.65,0.52l-0.91,-0.21l-1.91,0.36l-0.48,0.77l-1.88,0.13l-1.4,1.56l-0.18,2.32l-2.91,1.02l-1.65,-0.23l-0.71,0.55l-1.41,-0.3l-2.41,0.39l-3.52,-1.17l1.96,-2.35l-0.21,-1.78l-0.3,-0.34l-1.63,-0.4l-0.19,-1.58l-0.75,-2.03l0.95,-1.36l-0.19,-0.6l-0.73,-0.28l1.47,-4.8l2.14,0.9l2.12,-0.36l0.74,-1.34l1.77,-0.39l1.54,-0.92l0.63,-2.31l1.87,-0.5l0.49,-0.81l0.94,0.56l2.13,0.11l2.55,0.92l1.95,-0.83l0.65,0.43l0.56,-0.13l0.69,-1.12l1.57,-0.08l0.72,-1.66l0.79,-0.74l0.8,0.39l-0.17,0.56l0.71,0.58l-0.08,2.39l1.11,0.95ZM601.37,188.71l1.73,-0.71l1.43,-1.18l4.03,0.35l-2.23,0.74l-4.95,0.8Z",
                    name: "Afghanistan",
                },
                IQ: {
                    path:
                        "M530.82,187.47l0.79,0.66l1.26,-0.28l1.46,3.08l1.63,0.94l0.14,1.23l-1.22,1.05l-0.53,2.52l1.73,2.67l3.12,1.62l1.15,1.88l-0.38,1.85l0.39,0.48l0.41,-0.0l0.02,1.07l0.76,0.94l-2.47,-0.1l-1.71,2.44l-4.31,-0.2l-7.02,-5.48l-3.73,-1.94l-2.88,-0.73l-0.85,-2.87l5.45,-3.02l0.95,-3.43l-0.19,-1.96l1.27,-0.7l1.22,-1.7l0.87,-0.36l2.69,0.34Z",
                    name: "Iraq",
                },
                IS: {
                    path:
                        "M384.14,88.06l-0.37,2.61l2.54,2.51l-2.9,2.75l-9.19,3.4l-9.25,-1.66l1.7,-1.22l-0.1,-0.7l-4.05,-1.47l2.96,-0.53l0.33,-0.43l-0.11,-1.2l-0.33,-0.36l-4.67,-0.85l1.28,-2.04l3.45,-0.56l3.77,2.72l0.44,0.02l3.64,-2.16l3.3,1.08l3.98,-2.16l3.58,0.26Z",
                    name: "Iceland",
                },
                IR: {
                    path:
                        "M533.43,187.16l-1.27,-2.15l0.42,-0.98l-0.71,-3.04l1.03,-0.5l0.33,0.83l1.26,1.35l2.05,0.51l1.11,-0.16l2.89,-2.11l0.62,-0.14l0.39,0.46l-0.72,1.2l0.06,0.49l1.56,1.53l0.65,0.04l0.67,1.81l2.56,0.83l1.87,1.48l3.69,0.49l3.91,-0.76l0.47,-0.73l2.17,-0.6l1.66,-1.54l1.51,0.08l1.18,-0.53l1.59,0.24l2.83,1.48l1.88,0.3l2.77,2.47l1.77,0.18l0.18,1.99l-1.68,5.49l0.24,0.5l0.61,0.23l-0.82,1.48l0.8,2.18l0.19,1.71l0.3,0.34l1.63,0.4l0.15,1.32l-2.15,2.35l-0.01,0.53l2.21,3.03l2.34,1.24l0.06,2.14l1.24,0.72l0.11,0.69l-3.31,1.27l-1.08,3.03l-9.68,-1.68l-0.99,-3.05l-1.43,-0.73l-2.17,0.46l-2.47,1.26l-2.83,-0.82l-2.46,-2.02l-2.41,-0.8l-3.42,-6.06l-0.48,-0.2l-1.18,0.39l-1.44,-0.82l-0.5,0.08l-0.65,0.74l-0.97,-1.01l-0.02,-1.31l-0.71,-0.39l0.26,-1.81l-1.29,-2.11l-3.13,-1.63l-1.58,-2.43l0.5,-1.9l1.31,-1.26l-0.19,-1.66l-1.74,-1.1l-1.57,-3.3Z",
                    name: "Iran",
                },
                AM: {
                    path: "M536.99,182.33l-0.28,0.03l-1.23,-2.13l-0.93,0.01l-0.62,-0.66l-0.69,-0.07l-0.96,-0.81l-1.56,-0.62l0.19,-1.12l-0.26,-0.79l2.72,-0.36l1.09,1.01l-0.17,0.92l1.02,0.78l-0.47,0.62l0.08,0.56l2.04,1.23l0.04,1.4Z",
                    name: "Armenia",
                },
                IT: {
                    path:
                        "M451.59,158.63l3.48,0.94l-0.21,1.17l0.3,0.83l-1.49,-0.24l-2.04,1.1l-0.21,0.39l0.13,1.45l-0.25,1.12l0.82,1.57l2.39,1.63l1.31,2.54l2.79,2.43l2.05,0.08l0.21,0.23l-0.39,0.33l0.09,0.67l4.05,1.97l2.17,1.76l-0.16,0.36l-1.17,-1.08l-2.18,-0.49l-0.44,0.2l-1.05,1.91l0.14,0.54l1.57,0.95l-0.19,0.98l-1.06,0.33l-1.25,2.34l-0.37,0.08l0.0,-0.33l1.0,-2.45l-1.73,-3.17l-1.12,-0.51l-0.88,-1.33l-1.51,-0.51l-1.27,-1.25l-1.75,-0.18l-4.12,-3.21l-1.62,-1.65l-1.03,-3.19l-3.53,-1.36l-1.3,0.51l-1.69,1.41l0.16,-0.72l-0.28,-0.47l-1.14,-0.33l-0.53,-1.96l0.72,-0.78l0.04,-0.48l-0.65,-1.17l0.8,0.39l1.4,-0.23l1.11,-0.84l0.52,0.35l1.19,-0.1l0.75,-1.2l1.53,0.33l1.36,-0.56l0.35,-1.14l1.08,0.32l0.68,-0.64l1.98,-0.44l0.42,0.82ZM459.19,184.75l-0.65,1.65l0.32,1.05l-0.31,0.89l-1.5,-0.85l-4.5,-1.67l0.19,-0.82l2.67,0.23l3.78,-0.48ZM443.93,176.05l1.18,1.66l-0.3,3.32l-1.06,-0.01l-0.77,0.73l-0.53,-0.44l-0.1,-3.37l-0.39,-1.22l1.04,0.01l0.92,-0.68Z",
                    name: "Italy",
                },
                VN: {
                    path:
                        "M690.56,230.25l-2.7,1.82l-2.09,2.46l-0.63,1.95l4.31,6.45l2.32,1.65l1.43,1.94l1.11,4.59l-0.32,4.24l-1.93,1.54l-2.84,1.61l-2.11,2.15l-2.73,2.06l-0.59,-1.05l0.63,-1.53l-0.13,-0.47l-1.34,-1.04l1.51,-0.71l2.55,-0.18l0.3,-0.63l-0.82,-1.14l4.0,-2.07l0.31,-3.05l-0.57,-1.77l0.42,-2.66l-0.73,-1.97l-1.86,-1.76l-3.63,-5.29l-2.72,-1.46l0.36,-0.47l1.5,-0.64l0.21,-0.52l-0.97,-2.27l-0.37,-0.24l-2.83,-0.02l-2.24,-3.9l0.83,-0.4l4.39,-0.29l2.06,-1.31l1.15,0.89l1.88,0.4l-0.17,1.51l1.35,1.16l1.67,0.45Z",
                    name: "Vietnam",
                },
                AR: {
                    path:
                        "M249.29,428.93l-2.33,-0.52l-5.83,-0.43l-0.89,-1.66l0.05,-2.37l-0.45,-0.4l-1.43,0.18l-0.67,-0.91l-0.2,-3.13l1.88,-1.47l0.79,-2.04l-0.25,-1.7l1.3,-2.68l0.91,-4.15l-0.22,-1.69l0.85,-0.45l0.2,-0.44l-0.27,-1.16l-0.98,-0.68l0.59,-0.92l-0.05,-0.5l-1.04,-1.07l-0.52,-3.1l0.97,-0.86l-0.42,-3.58l1.2,-5.43l1.38,-0.98l0.16,-0.43l-0.75,-2.79l-0.01,-2.43l1.78,-1.75l0.06,-2.57l1.43,-2.85l0.01,-2.58l-0.69,-0.74l-1.09,-4.52l1.47,-2.7l-0.18,-2.79l0.85,-2.35l1.59,-2.46l1.73,-1.64l0.05,-0.52l-0.6,-0.84l0.44,-0.85l-0.07,-4.19l2.7,-1.44l0.86,-2.75l-0.21,-0.71l1.76,-2.01l2.9,0.57l1.38,1.78l0.68,-0.08l0.87,-1.87l2.39,0.09l4.95,4.77l2.17,0.49l3.0,1.92l2.47,1.0l0.25,0.82l-2.37,3.93l0.23,0.59l5.39,1.16l2.12,-0.44l2.45,-2.16l0.5,-2.38l0.76,-0.31l0.98,1.2l-0.04,1.8l-3.67,2.51l-2.85,2.66l-3.43,3.88l-1.3,5.07l0.01,2.72l-0.54,0.73l-0.36,3.28l3.14,2.64l-0.16,2.11l1.4,1.11l-0.1,1.09l-2.29,3.52l-3.55,1.49l-4.92,0.6l-2.71,-0.29l-0.43,0.51l0.5,1.65l-0.49,2.1l0.38,1.42l-1.19,0.83l-2.36,0.38l-2.3,-1.04l-1.38,0.83l0.41,3.64l1.69,0.91l1.4,-0.71l0.36,0.76l-2.04,0.86l-2.01,1.89l-0.97,4.63l-2.34,0.1l-2.09,1.78l-0.61,2.75l2.46,2.31l2.17,0.63l-0.7,2.32l-2.83,1.73l-1.73,3.86l-2.17,1.22l-1.16,1.67l0.75,3.76l1.04,1.28ZM256.71,438.88l-2.0,0.15l-1.4,-1.22l-3.82,-0.1l-0.0,-5.83l1.6,3.05l3.26,2.07l3.08,0.78l-0.71,1.1Z",
                    name: "Argentina",
                },
                AU: {
                    path:
                        "M705.8,353.26l0.26,0.04l0.17,-0.47l-0.48,-1.42l0.92,1.11l0.45,0.15l0.27,-0.39l-0.1,-1.56l-1.98,-3.63l1.09,-3.31l-0.24,-1.57l0.34,-0.62l0.38,1.06l0.43,-0.19l0.99,-1.7l1.91,-0.83l1.29,-1.15l1.81,-0.91l0.96,-0.17l0.92,0.26l1.92,-0.95l1.47,-0.28l1.03,-0.8l1.43,0.04l2.78,-0.84l1.36,-1.15l0.71,-1.45l1.41,-1.26l0.3,-2.58l1.27,-1.59l0.78,1.65l0.54,0.19l1.07,-0.51l0.15,-0.6l-0.73,-1.0l0.45,-0.71l0.78,0.39l0.58,-0.3l0.28,-1.82l1.87,-2.14l1.12,-0.39l0.28,-0.58l0.62,0.17l0.53,-0.73l1.87,-0.57l1.65,1.05l1.35,1.48l3.39,0.38l0.43,-0.54l-0.46,-1.23l1.05,-1.79l1.04,-0.61l0.14,-0.55l-0.25,-0.41l0.88,-1.17l1.31,-0.77l1.3,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.3l-0.92,-0.77l1.48,0.56l1.41,1.07l2.11,0.65l0.81,-0.2l1.4,0.7l1.69,-0.66l0.8,0.19l0.64,-0.33l0.71,0.77l-1.33,1.94l-0.71,0.07l-0.35,0.51l0.24,0.86l-1.52,2.35l0.12,1.05l2.15,1.65l1.97,0.85l3.04,2.36l1.97,0.65l0.55,0.88l2.72,0.85l1.84,-1.1l2.07,-5.97l-0.42,-3.59l0.3,-1.73l0.47,-0.87l-0.31,-0.68l1.09,-3.28l0.46,-0.47l0.4,0.71l0.16,1.51l0.65,0.52l0.16,1.04l0.85,1.21l0.12,2.38l0.9,2.0l0.57,0.18l1.3,-0.78l1.69,1.7l-0.2,1.08l0.53,2.2l0.39,1.3l0.68,0.48l0.6,1.95l-0.19,1.48l0.81,1.76l6.01,3.69l-0.11,0.76l1.38,1.58l0.95,2.77l0.58,0.22l0.72,-0.41l0.8,0.9l0.61,0.01l0.46,2.41l4.81,4.71l0.66,2.02l-0.07,3.31l1.14,2.2l-0.13,2.24l-1.1,3.68l0.03,1.64l-0.47,1.89l-1.05,2.4l-1.9,1.47l-1.72,3.51l-2.38,6.09l-0.24,2.82l-1.14,0.8l-2.85,0.15l-2.31,1.19l-2.51,2.25l-3.09,-1.57l0.3,-1.15l-0.54,-0.47l-1.5,0.63l-2.01,1.94l-7.12,-2.18l-1.48,-1.63l-1.14,-3.74l-1.45,-1.26l-1.81,-0.26l0.56,-1.18l-0.61,-2.1l-0.72,-0.1l-1.14,1.82l-0.9,0.21l0.63,-0.82l0.36,-1.55l0.92,-1.31l-0.13,-2.34l-0.7,-0.22l-2.0,2.34l-1.51,0.93l-0.94,2.01l-1.35,-0.81l-0.02,-1.52l-1.57,-2.04l-1.09,-0.88l0.24,-0.33l-0.14,-0.59l-3.21,-1.69l-1.83,-0.12l-2.54,-1.35l-4.58,0.28l-6.02,1.9l-2.53,-0.13l-2.62,1.41l-2.13,0.63l-1.49,2.6l-3.49,0.31l-2.29,-0.5l-3.48,0.43l-1.6,1.47l-0.81,-0.04l-2.37,1.63l-3.26,-0.1l-3.72,-2.21l0.04,-1.05l1.19,-0.46l0.49,-0.89l0.21,-2.97l-0.28,-1.64l-1.34,-2.86l-0.38,-1.47l0.05,-1.72l-0.95,-1.7l-0.18,-0.97l-1.01,-0.99l-0.29,-1.98l-1.13,-1.75ZM784.92,393.44l2.65,1.02l3.23,-0.96l1.09,0.14l0.15,3.06l-0.85,1.13l-0.17,1.63l-0.87,-0.24l-1.57,1.91l-1.68,-0.18l-1.4,-2.36l-0.37,-2.04l-1.39,-2.51l0.04,-0.8l1.15,0.18Z",
                    name: "Australia",
                },
                IL: {
                    path: "M507.76,203.05l0.4,-0.78l0.18,0.4l-0.33,1.03l0.52,0.44l0.68,-0.22l-0.86,3.6l-1.16,-3.32l0.59,-0.74l-0.03,-0.41ZM508.73,200.34l0.37,-1.02l0.64,0.0l0.52,-0.51l-0.49,1.53l-0.56,-0.24l-0.48,0.23Z",
                    name: "Palestine",
                },
                IN: {
                    path:
                        "M623.34,207.03l-1.24,1.04l-0.97,2.55l0.22,0.51l8.04,3.87l3.42,0.37l1.57,1.38l4.92,0.88l2.18,-0.04l0.38,-0.3l0.29,-1.24l-0.32,-1.64l0.14,-0.87l0.82,-0.31l0.45,2.48l2.28,1.02l1.77,-0.38l4.14,0.1l0.38,-0.36l0.18,-1.66l-0.5,-0.65l1.37,-0.29l2.25,-1.99l2.7,-1.62l1.93,0.62l1.8,-0.98l0.79,1.14l-0.68,0.91l0.26,0.63l2.42,0.36l0.09,0.47l-0.83,0.75l0.13,1.07l-1.52,-0.29l-3.24,1.86l-0.13,1.78l-1.32,2.14l-0.18,1.39l-0.93,1.82l-1.64,-0.5l-0.52,0.37l-0.09,2.63l-0.56,1.11l0.19,0.81l-0.53,0.27l-1.18,-3.73l-1.08,-0.27l-0.38,0.31l-0.24,1.0l-0.66,-0.66l0.54,-1.06l1.22,-0.34l1.15,-2.25l-0.24,-0.56l-1.57,-0.47l-4.34,-0.28l-0.18,-1.56l-0.35,-0.35l-1.11,-0.12l-1.91,-1.12l-0.56,0.17l-0.88,1.82l0.11,0.49l1.36,1.07l-1.09,0.69l-0.69,1.11l0.18,0.56l1.24,0.57l-0.32,1.54l0.85,1.94l0.36,2.01l-0.22,0.59l-4.58,0.52l-0.33,0.42l0.13,1.8l-1.17,1.36l-3.65,1.81l-2.79,3.03l-4.32,3.28l-0.18,1.27l-4.65,1.79l-0.77,2.16l0.64,5.3l-1.06,2.49l-0.01,3.94l-1.24,0.28l-1.14,1.93l0.39,0.84l-1.68,0.53l-1.04,1.83l-0.65,0.47l-2.06,-2.05l-2.1,-6.02l-2.2,-3.64l-1.05,-4.75l-2.29,-3.57l-1.76,-8.2l0.01,-3.11l-0.49,-2.53l-0.55,-0.29l-3.53,1.52l-1.53,-0.27l-2.86,-2.77l0.85,-0.67l0.08,-0.55l-0.74,-1.03l-2.67,-2.06l1.24,-1.32l5.34,0.01l0.39,-0.49l-0.5,-2.29l-1.42,-1.46l-0.27,-1.93l-1.43,-1.2l2.31,-2.37l3.05,0.06l2.62,-2.85l1.6,-2.81l2.4,-2.73l0.07,-2.04l1.97,-1.48l-0.02,-0.65l-1.93,-1.31l-0.82,-1.78l-0.8,-2.21l0.9,-0.89l3.59,0.65l2.92,-0.42l2.33,-2.19l2.31,2.85l-0.24,2.13l0.99,1.59l-0.05,0.82l-1.34,-0.28l-0.47,0.48l0.7,3.06l2.62,1.99l2.99,1.65Z",
                    name: "India",
                },
                TZ: {
                    path:
                        "M495.56,296.42l2.8,-3.12l-0.02,-0.81l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.8l0.13,1.61l1.63,1.12l-0.6,1.76l-0.01,2.33l1.89,4.03l0.57,0.43l-1.46,1.08l-2.61,0.94l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.68l-0.83,0.07l-0.63,-0.75l-0.31,-2.78l-1.32,-1.35l-3.25,-0.77l-3.96,-1.58l-1.18,-2.41l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z",
                    name: "Tanzania",
                },
                AZ: {
                    path:
                        "M539.29,175.73l1.33,0.32l1.94,-1.8l2.3,3.34l1.43,0.43l-1.26,0.15l-0.35,0.32l-0.8,3.14l-0.99,0.96l0.05,1.11l-1.26,-1.13l0.7,-1.18l-0.04,-0.47l-0.74,-0.86l-1.48,0.15l-2.34,1.71l-0.03,-1.27l-2.03,-1.35l0.47,-0.62l-0.08,-0.56l-1.03,-0.79l0.29,-0.43l-0.14,-0.58l-1.13,-0.86l1.89,0.68l1.69,0.06l0.37,-0.87l-0.81,-1.37l0.42,0.06l1.63,1.72ZM533.78,180.57l0.61,0.46l0.69,-0.0l0.59,1.15l-0.68,-0.15l-1.21,-1.45Z",
                    name: "Azerbaijan",
                },
                IE: { path: "M405.08,135.42l0.35,2.06l-1.75,2.78l-4.22,1.88l-2.84,-0.4l1.73,-3.0l-1.18,-3.53l4.6,-3.74l0.32,1.15l-0.49,1.74l0.4,0.51l1.47,-0.04l1.6,0.6Z", name: "Ireland" },
                ID: {
                    path:
                        "M756.47,287.89l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.12l-1.75,-1.54l-2.54,-0.51l-0.88,0.71l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.21l-5.04,-2.29l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.6l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,300.34l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,292.98l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,285.25l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,293.5l-0.5,0.44l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,284.51l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.74l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.23l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.17l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,296.27l0.38,0.49l-0.02,1.28l-0.88,0.49l-0.53,-0.47l1.04,-1.79ZM729.04,286.98l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,284.05l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,310.47l1.11,-1.93l2.03,-0.82l0.08,0.62l-1.45,1.67l-1.77,0.46ZM728.12,305.88l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,310.24l-0.64,0.03l-2.26,-1.2l1.11,-0.24l1.78,1.41ZM716.26,305.77l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.39,-0.67l1.15,-0.02l0.75,-0.73ZM711.66,293.84l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.3l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,302.03l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.68l3.69,0.45l2.13,1.04l-1.8,0.6l-2.77,-0.99l-4.8,-0.12l-5.24,-1.41l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.65l2.74,0.13l2.87,1.13l0.26,0.68ZM685.53,299.17l-2.22,0.04l-2.06,-2.03l-3.15,-2.01l-2.93,-3.51l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.5Z",
                    name: "Indonesia",
                },
                UA: {
                    path:
                        "M492.5,162.44l1.28,-2.49l1.82,0.19l0.66,-0.23l0.09,-0.71l-0.25,-0.75l-0.79,-0.72l-0.33,-1.21l-0.86,-0.62l-0.02,-1.19l-1.13,-0.86l-1.15,-0.19l-2.04,-1.0l-1.66,0.32l-0.66,0.47l-0.92,-0.0l-0.84,0.78l-2.48,0.7l-1.18,-0.71l-3.07,-0.36l-0.89,0.43l-0.24,-0.55l-1.11,-0.7l0.35,-0.93l1.26,-1.02l-0.54,-1.23l2.04,-2.43l1.4,-0.62l0.25,-1.19l-1.04,-2.39l0.83,-0.13l1.28,-0.84l1.8,-0.07l2.47,0.26l2.86,0.81l1.88,0.06l0.86,0.44l1.04,-0.41l0.77,0.66l2.18,-0.15l0.92,0.3l0.52,-0.34l0.15,-1.53l0.56,-0.54l2.85,-0.05l0.84,-0.72l3.04,-0.18l1.23,1.46l-0.48,0.77l0.21,1.03l0.36,0.32l1.8,0.14l0.93,2.08l3.18,1.15l1.94,-0.45l1.67,1.49l1.4,-0.03l3.35,0.96l0.02,0.54l-0.96,1.59l0.47,1.97l-0.26,0.7l-2.36,0.28l-1.29,0.89l-0.23,1.38l-1.83,0.27l-1.58,0.97l-2.41,0.21l-2.16,1.17l-0.21,0.38l0.34,2.26l1.23,0.75l2.13,-0.08l-0.14,0.31l-2.65,0.53l-3.23,1.69l-0.87,-0.39l0.42,-1.1l-0.25,-0.52l-2.21,-0.73l2.35,-1.06l0.12,-0.65l-0.93,-0.82l-3.62,-0.74l-0.13,-0.89l-0.46,-0.34l-2.61,0.59l-0.91,1.69l-1.71,2.04l-0.86,-0.4l-1.62,0.27Z",
                    name: "Ukraine",
                },
                QA: { path: "M549.33,221.64l-0.76,-0.23l-0.14,-1.64l0.84,-1.29l0.47,0.52l0.04,1.34l-0.45,1.3Z", name: "Qatar" },
                MZ: {
                    path:
                        "M508.58,318.75l-0.34,-2.57l0.51,-2.05l3.55,0.63l2.5,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.98l1.66,-1.2l0.5,9.24l0.41,1.23l-0.68,1.67l-0.93,1.71l-1.5,1.5l-5.16,2.28l-2.78,2.73l-1.02,0.53l-1.71,1.8l-0.98,0.57l-0.35,2.41l1.16,1.94l0.49,2.17l0.43,0.31l-0.06,2.06l-0.39,1.17l0.5,0.72l-0.25,0.73l-0.92,0.83l-5.12,2.39l-1.22,1.36l0.21,1.13l0.58,0.39l-0.11,0.72l-1.22,-0.01l-0.73,-2.97l0.42,-3.09l-1.78,-5.37l2.49,-2.81l0.69,-1.89l0.44,-0.43l0.28,-1.53l-0.39,-0.93l0.59,-3.65l-0.01,-3.26l-1.49,-1.16l-1.2,-0.22l-1.74,-1.17l-1.92,0.01l-0.29,-2.08l7.06,-1.96l1.28,1.09l0.89,-0.1l0.67,0.44l0.1,0.73l-0.51,1.29l0.19,1.81l1.75,1.83l0.65,-0.13l0.71,-1.65l1.17,-0.86l-0.26,-3.47l-1.05,-1.85l-1.04,-0.94Z",
                    name: "Mozambique",
                },
            },
            height: 440.70631074413296,
            width: 900,
            projection: { type: "mill", centralMeridian: 11.5 },
        });
    },
    function (e, t, n) {
        "use strict";
        n.r(t);
        n(227);
        var i = n(19);
        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        function r(e, t, n) {
            return t && a(e.prototype, t), n && a(e, n), e;
        }
        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t &&
                    (i = i.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? o(Object(n), !0).forEach(function (t) {
                          l(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : o(Object(n)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
            }
            return e;
        }
        var d,
            u,
            c,
            h,
            m = "transitionend",
            f = function (e) {
                do {
                    e += Math.floor(1e6 * Math.random());
                } while (document.getElementById(e));
                return e;
            },
            p = function (e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : null;
                }
                return t;
            },
            _ = function (e) {
                var t = p(e);
                return t && document.querySelector(t) ? t : null;
            },
            g = function (e) {
                var t = p(e);
                return t ? document.querySelector(t) : null;
            },
            y = function (e) {
                if (!e) return 0;
                var t = window.getComputedStyle(e),
                    n = t.transitionDuration,
                    i = t.transitionDelay,
                    a = parseFloat(n),
                    r = parseFloat(i);
                return a || r ? ((n = n.split(",")[0]), (i = i.split(",")[0]), 1e3 * (parseFloat(n) + parseFloat(i))) : 0;
            },
            v = function (e) {
                e.dispatchEvent(new Event(m));
            },
            M = function (e) {
                return (e[0] || e).nodeType;
            },
            b = function (e, t) {
                var n = !1,
                    i = t + 5;
                e.addEventListener(m, function t() {
                    (n = !0), e.removeEventListener(m, t);
                }),
                    setTimeout(function () {
                        n || v(e);
                    }, i);
            },
            x = function (e, t, n) {
                Object.keys(n).forEach(function (i) {
                    var a,
                        r = n[i],
                        l = t[i],
                        o =
                            l && M(l)
                                ? "element"
                                : null == (a = l)
                                ? "" + a
                                : {}.toString
                                      .call(a)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase();
                    if (!new RegExp(r).test(o)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".');
                });
            },
            L = function (e) {
                if (!e) return !1;
                if (e.style && e.parentNode && e.parentNode.style) {
                    var t = getComputedStyle(e),
                        n = getComputedStyle(e.parentNode);
                    return "none" !== t.display && "none" !== n.display && "hidden" !== t.visibility;
                }
                return !1;
            },
            w = function e(t) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof t.getRootNode) {
                    var n = t.getRootNode();
                    return n instanceof ShadowRoot ? n : null;
                }
                return t instanceof ShadowRoot ? t : t.parentNode ? e(t.parentNode) : null;
            },
            k = function () {
                return function () {};
            },
            Y = function (e) {
                return e.offsetHeight;
            },
            D = function () {
                var e = window.jQuery;
                return e && !document.body.hasAttribute("data-no-jquery") ? e : null;
            },
            T =
                ((d = {}),
                (u = 1),
                {
                    set: function (e, t, n) {
                        void 0 === e.key && ((e.key = { key: t, id: u }), u++), (d[e.key.id] = n);
                    },
                    get: function (e, t) {
                        if (!e || void 0 === e.key) return null;
                        var n = e.key;
                        return n.key === t ? d[n.id] : null;
                    },
                    delete: function (e, t) {
                        if (void 0 !== e.key) {
                            var n = e.key;
                            n.key === t && (delete d[n.id], delete e.key);
                        }
                    },
                }),
            S = function (e, t, n) {
                T.set(e, t, n);
            },
            j = function (e, t) {
                return T.get(e, t);
            },
            E = function (e, t) {
                T.delete(e, t);
            },
            H = Element.prototype.querySelectorAll,
            O = Element.prototype.querySelector,
            A =
                ((c = new CustomEvent("Bootstrap", { cancelable: !0 })),
                (h = document.createElement("div")).addEventListener("Bootstrap", function () {
                    return null;
                }),
                c.preventDefault(),
                h.dispatchEvent(c),
                c.defaultPrevented),
            P = /:scope\b/;
        (function () {
            var e = document.createElement("div");
            try {
                e.querySelectorAll(":scope *");
            } catch (e) {
                return !1;
            }
            return !0;
        })() ||
            ((H = function (e) {
                if (!P.test(e)) return this.querySelectorAll(e);
                var t = Boolean(this.id);
                t || (this.id = f("scope"));
                var n = null;
                try {
                    (e = e.replace(P, "#" + this.id)), (n = this.querySelectorAll(e));
                } finally {
                    t || this.removeAttribute("id");
                }
                return n;
            }),
            (O = function (e) {
                if (!P.test(e)) return this.querySelector(e);
                var t = H.call(this, e);
                return void 0 !== t[0] ? t[0] : null;
            }));
        var C = D(),
            F = /[^.]*(?=\..*)\.|.*/,
            I = /\..*/,
            W = /::\d+$/,
            N = {},
            z = 1,
            R = { mouseenter: "mouseover", mouseleave: "mouseout" },
            V = [
                "click",
                "dblclick",
                "mouseup",
                "mousedown",
                "contextmenu",
                "mousewheel",
                "DOMMouseScroll",
                "mouseover",
                "mouseout",
                "mousemove",
                "selectstart",
                "selectend",
                "keydown",
                "keypress",
                "keyup",
                "orientationchange",
                "touchstart",
                "touchmove",
                "touchend",
                "touchcancel",
                "pointerdown",
                "pointermove",
                "pointerup",
                "pointerleave",
                "pointercancel",
                "gesturestart",
                "gesturechange",
                "gestureend",
                "focus",
                "blur",
                "change",
                "reset",
                "select",
                "submit",
                "focusin",
                "focusout",
                "load",
                "unload",
                "beforeunload",
                "resize",
                "move",
                "DOMContentLoaded",
                "readystatechange",
                "error",
                "abort",
                "scroll",
            ];
        function B(e, t) {
            return (t && t + "::" + z++) || e.uidEvent || z++;
        }
        function Z(e) {
            var t = B(e);
            return (e.uidEvent = t), (N[t] = N[t] || {}), N[t];
        }
        function U(e, t, n) {
            void 0 === n && (n = null);
            for (var i = Object.keys(e), a = 0, r = i.length; a < r; a++) {
                var l = e[i[a]];
                if (l.originalHandler === t && l.delegationSelector === n) return l;
            }
            return null;
        }
        function J(e, t, n) {
            var i = "string" == typeof t,
                a = i ? n : t,
                r = e.replace(I, ""),
                l = R[r];
            return l && (r = l), V.indexOf(r) > -1 || (r = e), [i, a, r];
        }
        function G(e, t, n, i, a) {
            if ("string" == typeof t && e) {
                n || ((n = i), (i = null));
                var r = J(t, n, i),
                    l = r[0],
                    o = r[1],
                    s = r[2],
                    d = Z(e),
                    u = d[s] || (d[s] = {}),
                    c = U(u, o, l ? n : null);
                if (c) c.oneOff = c.oneOff && a;
                else {
                    var h = B(o, t.replace(F, "")),
                        m = l
                            ? (function (e, t, n) {
                                  return function i(a) {
                                      for (var r = e.querySelectorAll(t), l = a.target; l && l !== this; l = l.parentNode) for (var o = r.length; o--; ) if (r[o] === l) return i.oneOff && X.off(e, a.type, n), n.apply(l, [a]);
                                      return null;
                                  };
                              })(e, n, i)
                            : (function (e, t) {
                                  return function n(i) {
                                      return n.oneOff && X.off(e, i.type, t), t.apply(e, [i]);
                                  };
                              })(e, n);
                    (m.delegationSelector = l ? n : null), (m.originalHandler = o), (m.oneOff = a), (m.uidEvent = h), (u[h] = m), e.addEventListener(s, m, l);
                }
            }
        }
        function q(e, t, n, i, a) {
            var r = U(t[n], i, a);
            r && (e.removeEventListener(n, r, Boolean(a)), delete t[n][r.uidEvent]);
        }
        var X = {
                on: function (e, t, n, i) {
                    G(e, t, n, i, !1);
                },
                one: function (e, t, n, i) {
                    G(e, t, n, i, !0);
                },
                off: function (e, t, n, i) {
                    if ("string" == typeof t && e) {
                        var a = J(t, n, i),
                            r = a[0],
                            l = a[1],
                            o = a[2],
                            s = o !== t,
                            d = Z(e),
                            u = "." === t.charAt(0);
                        if (void 0 === l) {
                            u &&
                                Object.keys(d).forEach(function (n) {
                                    !(function (e, t, n, i) {
                                        var a = t[n] || {};
                                        Object.keys(a).forEach(function (r) {
                                            if (r.indexOf(i) > -1) {
                                                var l = a[r];
                                                q(e, t, n, l.originalHandler, l.delegationSelector);
                                            }
                                        });
                                    })(e, d, n, t.slice(1));
                                });
                            var c = d[o] || {};
                            Object.keys(c).forEach(function (n) {
                                var i = n.replace(W, "");
                                if (!s || t.indexOf(i) > -1) {
                                    var a = c[n];
                                    q(e, d, o, a.originalHandler, a.delegationSelector);
                                }
                            });
                        } else {
                            if (!d || !d[o]) return;
                            q(e, d, o, l, r ? n : null);
                        }
                    }
                },
                trigger: function (e, t, n) {
                    if ("string" != typeof t || !e) return null;
                    var i,
                        a = t.replace(I, ""),
                        r = t !== a,
                        l = V.indexOf(a) > -1,
                        o = !0,
                        s = !0,
                        d = !1,
                        u = null;
                    return (
                        r && C && ((i = C.Event(t, n)), C(e).trigger(i), (o = !i.isPropagationStopped()), (s = !i.isImmediatePropagationStopped()), (d = i.isDefaultPrevented())),
                        l ? (u = document.createEvent("HTMLEvents")).initEvent(a, o, !0) : (u = new CustomEvent(t, { bubbles: o, cancelable: !0 })),
                        void 0 !== n &&
                            Object.keys(n).forEach(function (e) {
                                Object.defineProperty(u, e, {
                                    get: function () {
                                        return n[e];
                                    },
                                });
                            }),
                        d &&
                            (u.preventDefault(),
                            A ||
                                Object.defineProperty(u, "defaultPrevented", {
                                    get: function () {
                                        return !0;
                                    },
                                })),
                        s && e.dispatchEvent(u),
                        u.defaultPrevented && void 0 !== i && i.preventDefault(),
                        u
                    );
                },
            },
            K = "bs.alert",
            $ = (function () {
                function e(e) {
                    (this._element = e), this._element && S(e, K, this);
                }
                var t = e.prototype;
                return (
                    (t.close = function (e) {
                        var t = this._element;
                        e && (t = this._getRootElement(e));
                        var n = this._triggerCloseEvent(t);
                        null === n || n.defaultPrevented || this._removeElement(t);
                    }),
                    (t.dispose = function () {
                        E(this._element, K), (this._element = null);
                    }),
                    (t._getRootElement = function (e) {
                        return g(e) || e.closest(".alert");
                    }),
                    (t._triggerCloseEvent = function (e) {
                        return X.trigger(e, "close.bs.alert");
                    }),
                    (t._removeElement = function (e) {
                        var t = this;
                        if ((e.classList.remove("show"), e.classList.contains("fade"))) {
                            var n = y(e);
                            X.one(e, m, function () {
                                return t._destroyElement(e);
                            }),
                                b(e, n);
                        } else this._destroyElement(e);
                    }),
                    (t._destroyElement = function (e) {
                        e.parentNode && e.parentNode.removeChild(e), X.trigger(e, "closed.bs.alert");
                    }),
                    (e.jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = j(this, K);
                            n || (n = new e(this)), "close" === t && n[t](this);
                        });
                    }),
                    (e.handleDismiss = function (e) {
                        return function (t) {
                            t && t.preventDefault(), e.close(this);
                        };
                    }),
                    (e.getInstance = function (e) {
                        return j(e, K);
                    }),
                    r(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "5.0.0-alpha1";
                            },
                        },
                    ]),
                    e
                );
            })();
        X.on(document, "click.bs.alert.data-api", '[data-dismiss="alert"]', $.handleDismiss(new $()));
        var Q = D();
        if (Q) {
            var ee = Q.fn.alert;
            (Q.fn.alert = $.jQueryInterface),
                (Q.fn.alert.Constructor = $),
                (Q.fn.alert.noConflict = function () {
                    return (Q.fn.alert = ee), $.jQueryInterface;
                });
        }
        var te = "bs.button",
            ne = '[data-toggle="button"]',
            ie = (function () {
                function e(e) {
                    (this._element = e), S(e, te, this);
                }
                var t = e.prototype;
                return (
                    (t.toggle = function () {
                        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
                    }),
                    (t.dispose = function () {
                        E(this._element, te), (this._element = null);
                    }),
                    (e.jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = j(this, te);
                            n || (n = new e(this)), "toggle" === t && n[t]();
                        });
                    }),
                    (e.getInstance = function (e) {
                        return j(e, te);
                    }),
                    r(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "5.0.0-alpha1";
                            },
                        },
                    ]),
                    e
                );
            })();
        X.on(document, "click.bs.button.data-api", ne, function (e) {
            e.preventDefault();
            var t = e.target.closest(ne),
                n = j(t, te);
            n || (n = new ie(t)), n.toggle();
        });
        var ae = D();
        if (ae) {
            var re = ae.fn.button;
            (ae.fn.button = ie.jQueryInterface),
                (ae.fn.button.Constructor = ie),
                (ae.fn.button.noConflict = function () {
                    return (ae.fn.button = re), ie.jQueryInterface;
                });
        }
        function le(e) {
            return "true" === e || ("false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e));
        }
        function oe(e) {
            return e.replace(/[A-Z]/g, function (e) {
                return "-" + e.toLowerCase();
            });
        }
        var se = {
                setDataAttribute: function (e, t, n) {
                    e.setAttribute("data-" + oe(t), n);
                },
                removeDataAttribute: function (e, t) {
                    e.removeAttribute("data-" + oe(t));
                },
                getDataAttributes: function (e) {
                    if (!e) return {};
                    var t = s({}, e.dataset);
                    return (
                        Object.keys(t).forEach(function (e) {
                            t[e] = le(t[e]);
                        }),
                        t
                    );
                },
                getDataAttribute: function (e, t) {
                    return le(e.getAttribute("data-" + oe(t)));
                },
                offset: function (e) {
                    var t = e.getBoundingClientRect();
                    return { top: t.top + document.body.scrollTop, left: t.left + document.body.scrollLeft };
                },
                position: function (e) {
                    return { top: e.offsetTop, left: e.offsetLeft };
                },
                toggleClass: function (e, t) {
                    e && (e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t));
                },
            },
            de = {
                matches: function (e, t) {
                    return e.matches(t);
                },
                find: function (e, t) {
                    var n;
                    return void 0 === t && (t = document.documentElement), (n = []).concat.apply(n, H.call(t, e));
                },
                findOne: function (e, t) {
                    return void 0 === t && (t = document.documentElement), O.call(t, e);
                },
                children: function (e, t) {
                    var n,
                        i = (n = []).concat.apply(n, e.children);
                    return i.filter(function (e) {
                        return e.matches(t);
                    });
                },
                parents: function (e, t) {
                    for (var n = [], i = e.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; ) this.matches(i, t) && n.push(i), (i = i.parentNode);
                    return n;
                },
                prev: function (e, t) {
                    for (var n = e.previousElementSibling; n; ) {
                        if (n.matches(t)) return [n];
                        n = n.previousElementSibling;
                    }
                    return [];
                },
                next: function (e, t) {
                    for (var n = e.nextElementSibling; n; ) {
                        if (this.matches(n, t)) return [n];
                        n = n.nextElementSibling;
                    }
                    return [];
                },
            },
            ue = "carousel",
            ce = "bs.carousel",
            he = ".bs.carousel",
            me = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
            fe = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
            pe = "next",
            _e = "prev",
            ge = "slid.bs.carousel",
            ye = "active",
            ve = ".active.carousel-item",
            Me = { TOUCH: "touch", PEN: "pen" },
            be = (function () {
                function e(e, t) {
                    (this._items = null),
                        (this._interval = null),
                        (this._activeElement = null),
                        (this._isPaused = !1),
                        (this._isSliding = !1),
                        (this.touchTimeout = null),
                        (this.touchStartX = 0),
                        (this.touchDeltaX = 0),
                        (this._config = this._getConfig(t)),
                        (this._element = e),
                        (this._indicatorsElement = de.findOne(".carousel-indicators", this._element)),
                        (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                        (this._pointerEvent = Boolean(window.PointerEvent)),
                        this._addEventListeners(),
                        S(e, ce, this);
                }
                var t = e.prototype;
                return (
                    (t.next = function () {
                        this._isSliding || this._slide(pe);
                    }),
                    (t.nextWhenVisible = function () {
                        !document.hidden && L(this._element) && this.next();
                    }),
                    (t.prev = function () {
                        this._isSliding || this._slide(_e);
                    }),
                    (t.pause = function (e) {
                        e || (this._isPaused = !0), de.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (v(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
                    }),
                    (t.cycle = function (e) {
                        e || (this._isPaused = !1),
                            this._interval && (clearInterval(this._interval), (this._interval = null)),
                            this._config && this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
                    }),
                    (t.to = function (e) {
                        var t = this;
                        this._activeElement = de.findOne(ve, this._element);
                        var n = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0))
                            if (this._isSliding)
                                X.one(this._element, ge, function () {
                                    return t.to(e);
                                });
                            else {
                                if (n === e) return this.pause(), void this.cycle();
                                var i = e > n ? pe : _e;
                                this._slide(i, this._items[e]);
                            }
                    }),
                    (t.dispose = function () {
                        X.off(this._element, he),
                            E(this._element, ce),
                            (this._items = null),
                            (this._config = null),
                            (this._element = null),
                            (this._interval = null),
                            (this._isPaused = null),
                            (this._isSliding = null),
                            (this._activeElement = null),
                            (this._indicatorsElement = null);
                    }),
                    (t._getConfig = function (e) {
                        return (e = s(s({}, me), e)), x(ue, e, fe), e;
                    }),
                    (t._handleSwipe = function () {
                        var e = Math.abs(this.touchDeltaX);
                        if (!(e <= 40)) {
                            var t = e / this.touchDeltaX;
                            (this.touchDeltaX = 0), t > 0 && this.prev(), t < 0 && this.next();
                        }
                    }),
                    (t._addEventListeners = function () {
                        var e = this;
                        this._config.keyboard &&
                            X.on(this._element, "keydown.bs.carousel", function (t) {
                                return e._keydown(t);
                            }),
                            "hover" === this._config.pause &&
                                (X.on(this._element, "mouseenter.bs.carousel", function (t) {
                                    return e.pause(t);
                                }),
                                X.on(this._element, "mouseleave.bs.carousel", function (t) {
                                    return e.cycle(t);
                                })),
                            this._config.touch && this._touchSupported && this._addTouchEventListeners();
                    }),
                    (t._addTouchEventListeners = function () {
                        var e = this,
                            t = function (t) {
                                e._pointerEvent && Me[t.pointerType.toUpperCase()] ? (e.touchStartX = t.clientX) : e._pointerEvent || (e.touchStartX = t.touches[0].clientX);
                            },
                            n = function (t) {
                                e._pointerEvent && Me[t.pointerType.toUpperCase()] && (e.touchDeltaX = t.clientX - e.touchStartX),
                                    e._handleSwipe(),
                                    "hover" === e._config.pause &&
                                        (e.pause(),
                                        e.touchTimeout && clearTimeout(e.touchTimeout),
                                        (e.touchTimeout = setTimeout(function (t) {
                                            return e.cycle(t);
                                        }, 500 + e._config.interval)));
                            };
                        de.find(".carousel-item img", this._element).forEach(function (e) {
                            X.on(e, "dragstart.bs.carousel", function (e) {
                                return e.preventDefault();
                            });
                        }),
                            this._pointerEvent
                                ? (X.on(this._element, "pointerdown.bs.carousel", function (e) {
                                      return t(e);
                                  }),
                                  X.on(this._element, "pointerup.bs.carousel", function (e) {
                                      return n(e);
                                  }),
                                  this._element.classList.add("pointer-event"))
                                : (X.on(this._element, "touchstart.bs.carousel", function (e) {
                                      return t(e);
                                  }),
                                  X.on(this._element, "touchmove.bs.carousel", function (t) {
                                      return (function (t) {
                                          t.touches && t.touches.length > 1 ? (e.touchDeltaX = 0) : (e.touchDeltaX = t.touches[0].clientX - e.touchStartX);
                                      })(t);
                                  }),
                                  X.on(this._element, "touchend.bs.carousel", function (e) {
                                      return n(e);
                                  }));
                    }),
                    (t._keydown = function (e) {
                        if (!/input|textarea/i.test(e.target.tagName))
                            switch (e.key) {
                                case "ArrowLeft":
                                    e.preventDefault(), this.prev();
                                    break;
                                case "ArrowRight":
                                    e.preventDefault(), this.next();
                            }
                    }),
                    (t._getItemIndex = function (e) {
                        return (this._items = e && e.parentNode ? de.find(".carousel-item", e.parentNode) : []), this._items.indexOf(e);
                    }),
                    (t._getItemByDirection = function (e, t) {
                        var n = e === pe,
                            i = e === _e,
                            a = this._getItemIndex(t),
                            r = this._items.length - 1;
                        if (((i && 0 === a) || (n && a === r)) && !this._config.wrap) return t;
                        var l = (a + (e === _e ? -1 : 1)) % this._items.length;
                        return -1 === l ? this._items[this._items.length - 1] : this._items[l];
                    }),
                    (t._triggerSlideEvent = function (e, t) {
                        var n = this._getItemIndex(e),
                            i = this._getItemIndex(de.findOne(ve, this._element));
                        return X.trigger(this._element, "slide.bs.carousel", { relatedTarget: e, direction: t, from: i, to: n });
                    }),
                    (t._setActiveIndicatorElement = function (e) {
                        if (this._indicatorsElement) {
                            for (var t = de.find(".active", this._indicatorsElement), n = 0; n < t.length; n++) t[n].classList.remove(ye);
                            var i = this._indicatorsElement.children[this._getItemIndex(e)];
                            i && i.classList.add(ye);
                        }
                    }),
                    (t._slide = function (e, t) {
                        var n,
                            i,
                            a,
                            r = this,
                            l = de.findOne(ve, this._element),
                            o = this._getItemIndex(l),
                            s = t || (l && this._getItemByDirection(e, l)),
                            d = this._getItemIndex(s),
                            u = Boolean(this._interval);
                        if ((e === pe ? ((n = "carousel-item-left"), (i = "carousel-item-next"), (a = "left")) : ((n = "carousel-item-right"), (i = "carousel-item-prev"), (a = "right")), s && s.classList.contains(ye))) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(s, a).defaultPrevented && l && s) {
                            if (((this._isSliding = !0), u && this.pause(), this._setActiveIndicatorElement(s), this._element.classList.contains("slide"))) {
                                s.classList.add(i), Y(s), l.classList.add(n), s.classList.add(n);
                                var c = parseInt(s.getAttribute("data-interval"), 10);
                                c ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = c)) : (this._config.interval = this._config.defaultInterval || this._config.interval);
                                var h = y(l);
                                X.one(l, m, function () {
                                    s.classList.remove(n, i),
                                        s.classList.add(ye),
                                        l.classList.remove(ye, i, n),
                                        (r._isSliding = !1),
                                        setTimeout(function () {
                                            X.trigger(r._element, ge, { relatedTarget: s, direction: a, from: o, to: d });
                                        }, 0);
                                }),
                                    b(l, h);
                            } else l.classList.remove(ye), s.classList.add(ye), (this._isSliding = !1), X.trigger(this._element, ge, { relatedTarget: s, direction: a, from: o, to: d });
                            u && this.cycle();
                        }
                    }),
                    (e.carouselInterface = function (t, n) {
                        var i = j(t, ce),
                            a = s(s({}, me), se.getDataAttributes(t));
                        "object" == typeof n && (a = s(s({}, a), n));
                        var r = "string" == typeof n ? n : a.slide;
                        if ((i || (i = new e(t, a)), "number" == typeof n)) i.to(n);
                        else if ("string" == typeof r) {
                            if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
                            i[r]();
                        } else a.interval && a.ride && (i.pause(), i.cycle());
                    }),
                    (e.jQueryInterface = function (t) {
                        return this.each(function () {
                            e.carouselInterface(this, t);
                        });
                    }),
                    (e.dataApiClickHandler = function (t) {
                        var n = g(this);
                        if (n && n.classList.contains("carousel")) {
                            var i = s(s({}, se.getDataAttributes(n)), se.getDataAttributes(this)),
                                a = this.getAttribute("data-slide-to");
                            a && (i.interval = !1), e.carouselInterface(n, i), a && j(n, ce).to(a), t.preventDefault();
                        }
                    }),
                    (e.getInstance = function (e) {
                        return j(e, ce);
                    }),
                    r(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "5.0.0-alpha1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return me;
                            },
                        },
                    ]),
                    e
                );
            })();
        X.on(document, "click.bs.carousel.data-api", "[data-slide], [data-slide-to]", be.dataApiClickHandler),
            X.on(window, "load.bs.carousel.data-api", function () {
                for (var e = de.find('[data-ride="carousel"]'), t = 0, n = e.length; t < n; t++) be.carouselInterface(e[t], j(e[t], ce));
            });
        var xe = D();
        if (xe) {
            var Le = xe.fn[ue];
            (xe.fn[ue] = be.jQueryInterface),
                (xe.fn[ue].Constructor = be),
                (xe.fn[ue].noConflict = function () {
                    return (xe.fn[ue] = Le), be.jQueryInterface;
                });
        }
        var we = "collapse",
            ke = "bs.collapse",
            Ye = { toggle: !0, parent: "" },
            De = { toggle: "boolean", parent: "(string|element)" },
            Te = "show",
            Se = "collapse",
            je = "collapsing",
            Ee = "collapsed",
            He = "width",
            Oe = '[data-toggle="collapse"]',
            Ae = (function () {
                function e(e, t) {
                    (this._isTransitioning = !1), (this._element = e), (this._config = this._getConfig(t)), (this._triggerArray = de.find(Oe + '[href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                    for (var n = de.find(Oe), i = 0, a = n.length; i < a; i++) {
                        var r = n[i],
                            l = _(r),
                            o = de.find(l).filter(function (t) {
                                return t === e;
                            });
                        null !== l && o.length && ((this._selector = l), this._triggerArray.push(r));
                    }
                    (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle(), S(e, ke, this);
                }
                var t = e.prototype;
                return (
                    (t.toggle = function () {
                        this._element.classList.contains(Te) ? this.hide() : this.show();
                    }),
                    (t.show = function () {
                        var t = this;
                        if (!this._isTransitioning && !this._element.classList.contains(Te)) {
                            var n, i;
                            this._parent &&
                                0 ===
                                    (n = de.find(".show, .collapsing", this._parent).filter(function (e) {
                                        return "string" == typeof t._config.parent ? e.getAttribute("data-parent") === t._config.parent : e.classList.contains(Se);
                                    })).length &&
                                (n = null);
                            var a = de.findOne(this._selector);
                            if (n) {
                                var r = n.filter(function (e) {
                                    return a !== e;
                                });
                                if ((i = r[0] ? j(r[0], ke) : null) && i._isTransitioning) return;
                            }
                            if (!X.trigger(this._element, "show.bs.collapse").defaultPrevented) {
                                n &&
                                    n.forEach(function (t) {
                                        a !== t && e.collapseInterface(t, "hide"), i || S(t, ke, null);
                                    });
                                var l = this._getDimension();
                                this._element.classList.remove(Se),
                                    this._element.classList.add(je),
                                    (this._element.style[l] = 0),
                                    this._triggerArray.length &&
                                        this._triggerArray.forEach(function (e) {
                                            e.classList.remove(Ee), e.setAttribute("aria-expanded", !0);
                                        }),
                                    this.setTransitioning(!0);
                                var o = "scroll" + (l[0].toUpperCase() + l.slice(1)),
                                    s = y(this._element);
                                X.one(this._element, m, function () {
                                    t._element.classList.remove(je), t._element.classList.add(Se, Te), (t._element.style[l] = ""), t.setTransitioning(!1), X.trigger(t._element, "shown.bs.collapse");
                                }),
                                    b(this._element, s),
                                    (this._element.style[l] = this._element[o] + "px");
                            }
                        }
                    }),
                    (t.hide = function () {
                        var e = this;
                        if (!this._isTransitioning && this._element.classList.contains(Te) && !X.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
                            var t = this._getDimension();
                            (this._element.style[t] = this._element.getBoundingClientRect()[t] + "px"), Y(this._element), this._element.classList.add(je), this._element.classList.remove(Se, Te);
                            var n = this._triggerArray.length;
                            if (n > 0)
                                for (var i = 0; i < n; i++) {
                                    var a = this._triggerArray[i],
                                        r = g(a);
                                    r && !r.classList.contains(Te) && (a.classList.add(Ee), a.setAttribute("aria-expanded", !1));
                                }
                            this.setTransitioning(!0);
                            this._element.style[t] = "";
                            var l = y(this._element);
                            X.one(this._element, m, function () {
                                e.setTransitioning(!1), e._element.classList.remove(je), e._element.classList.add(Se), X.trigger(e._element, "hidden.bs.collapse");
                            }),
                                b(this._element, l);
                        }
                    }),
                    (t.setTransitioning = function (e) {
                        this._isTransitioning = e;
                    }),
                    (t.dispose = function () {
                        E(this._element, ke), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                    }),
                    (t._getConfig = function (e) {
                        return ((e = s(s({}, Ye), e)).toggle = Boolean(e.toggle)), x(we, e, De), e;
                    }),
                    (t._getDimension = function () {
                        return this._element.classList.contains(He) ? He : "height";
                    }),
                    (t._getParent = function () {
                        var e = this,
                            t = this._config.parent;
                        M(t) ? (void 0 === t.jquery && void 0 === t[0]) || (t = t[0]) : (t = de.findOne(t));
                        var n = Oe + '[data-parent="' + t + '"]';
                        return (
                            de.find(n, t).forEach(function (t) {
                                var n = g(t);
                                e._addAriaAndCollapsedClass(n, [t]);
                            }),
                            t
                        );
                    }),
                    (t._addAriaAndCollapsedClass = function (e, t) {
                        if (e) {
                            var n = e.classList.contains(Te);
                            t.length &&
                                t.forEach(function (e) {
                                    n ? e.classList.remove(Ee) : e.classList.add(Ee), e.setAttribute("aria-expanded", n);
                                });
                        }
                    }),
                    (e.collapseInterface = function (t, n) {
                        var i = j(t, ke),
                            a = s(s(s({}, Ye), se.getDataAttributes(t)), "object" == typeof n && n ? n : {});
                        if ((!i && a.toggle && "string" == typeof n && /show|hide/.test(n) && (a.toggle = !1), i || (i = new e(t, a)), "string" == typeof n)) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]();
                        }
                    }),
                    (e.jQueryInterface = function (t) {
                        return this.each(function () {
                            e.collapseInterface(this, t);
                        });
                    }),
                    (e.getInstance = function (e) {
                        return j(e, ke);
                    }),
                    r(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "5.0.0-alpha1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return Ye;
                            },
                        },
                    ]),
                    e
                );
            })();
        X.on(document, "click.bs.collapse.data-api", Oe, function (e) {
            "A" === e.target.tagName && e.preventDefault();
            var t = se.getDataAttributes(this),
                n = _(this);
            de.find(n).forEach(function (e) {
                var n,
                    i = j(e, ke);
                i ? (null === i._parent && "string" == typeof t.parent && ((i._config.parent = t.parent), (i._parent = i._getParent())), (n = "toggle")) : (n = t), Ae.collapseInterface(e, n);
            });
        });
        var Pe = D();
        if (Pe) {
            var Ce = Pe.fn[we];
            (Pe.fn[we] = Ae.jQueryInterface),
                (Pe.fn[we].Constructor = Ae),
                (Pe.fn[we].noConflict = function () {
                    return (Pe.fn[we] = Ce), Ae.jQueryInterface;
                });
        }
        var Fe = "dropdown",
            Ie = "bs.dropdown",
            We = ".bs.dropdown",
            Ne = "Escape",
            ze = "Space",
            Re = "ArrowUp",
            Ve = "ArrowDown",
            Be = new RegExp("ArrowUp|ArrowDown|Escape"),
            Ze = "hide.bs.dropdown",
            Ue = "hidden.bs.dropdown",
            Je = "click.bs.dropdown.data-api",
            Ge = "keydown.bs.dropdown.data-api",
            qe = "disabled",
            Xe = "show",
            Ke = "dropdown-menu-right",
            $e = '[data-toggle="dropdown"]',
            Qe = ".dropdown-menu",
            et = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
            tt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
            nt = (function () {
                function e(e, t) {
                    (this._element = e), (this._popper = null), (this._config = this._getConfig(t)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners(), S(e, Ie, this);
                }
                var t = e.prototype;
                return (
                    (t.toggle = function () {
                        if (!this._element.disabled && !this._element.classList.contains(qe)) {
                            var t = this._element.classList.contains(Xe);
                            e.clearMenus(), t || this.show();
                        }
                    }),
                    (t.show = function () {
                        if (!(this._element.disabled || this._element.classList.contains(qe) || this._menu.classList.contains(Xe))) {
                            var t = e.getParentFromElement(this._element),
                                n = { relatedTarget: this._element };
                            if (!X.trigger(this._element, "show.bs.dropdown", n).defaultPrevented) {
                                if (!this._inNavbar) {
                                    if (void 0 === i.a) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org)");
                                    var a = this._element;
                                    "parent" === this._config.reference ? (a = t) : M(this._config.reference) && ((a = this._config.reference), void 0 !== this._config.reference.jquery && (a = this._config.reference[0])),
                                        "scrollParent" !== this._config.boundary && t.classList.add("position-static"),
                                        (this._popper = new i.a(a, this._menu, this._getPopperConfig()));
                                }
                                var r;
                                if ("ontouchstart" in document.documentElement && !t.closest(".navbar-nav"))
                                    (r = []).concat.apply(r, document.body.children).forEach(function (e) {
                                        return X.on(e, "mouseover", null, function () {});
                                    });
                                this._element.focus(), this._element.setAttribute("aria-expanded", !0), se.toggleClass(this._menu, Xe), se.toggleClass(this._element, Xe), X.trigger(t, "shown.bs.dropdown", n);
                            }
                        }
                    }),
                    (t.hide = function () {
                        if (!this._element.disabled && !this._element.classList.contains(qe) && this._menu.classList.contains(Xe)) {
                            var t = e.getParentFromElement(this._element),
                                n = { relatedTarget: this._element };
                            X.trigger(t, Ze, n).defaultPrevented || (this._popper && this._popper.destroy(), se.toggleClass(this._menu, Xe), se.toggleClass(this._element, Xe), X.trigger(t, Ue, n));
                        }
                    }),
                    (t.dispose = function () {
                        E(this._element, Ie), X.off(this._element, We), (this._element = null), (this._menu = null), this._popper && (this._popper.destroy(), (this._popper = null));
                    }),
                    (t.update = function () {
                        (this._inNavbar = this._detectNavbar()), this._popper && this._popper.scheduleUpdate();
                    }),
                    (t._addEventListeners = function () {
                        var e = this;
                        X.on(this._element, "click.bs.dropdown", function (t) {
                            t.preventDefault(), t.stopPropagation(), e.toggle();
                        });
                    }),
                    (t._getConfig = function (e) {
                        return (e = s(s(s({}, this.constructor.Default), se.getDataAttributes(this._element)), e)), x(Fe, e, this.constructor.DefaultType), e;
                    }),
                    (t._getMenuElement = function () {
                        return de.next(this._element, Qe)[0];
                    }),
                    (t._getPlacement = function () {
                        var e = this._element.parentNode,
                            t = "bottom-start";
                        return (
                            e.classList.contains("dropup")
                                ? ((t = "top-start"), this._menu.classList.contains(Ke) && (t = "top-end"))
                                : e.classList.contains("dropright")
                                ? (t = "right-start")
                                : e.classList.contains("dropleft")
                                ? (t = "left-start")
                                : this._menu.classList.contains(Ke) && (t = "bottom-end"),
                            t
                        );
                    }),
                    (t._detectNavbar = function () {
                        return Boolean(this._element.closest(".navbar"));
                    }),
                    (t._getOffset = function () {
                        var e = this,
                            t = {};
                        return (
                            "function" == typeof this._config.offset
                                ? (t.fn = function (t) {
                                      return (t.offsets = s(s({}, t.offsets), e._config.offset(t.offsets, e._element) || {})), t;
                                  })
                                : (t.offset = this._config.offset),
                            t
                        );
                    }),
                    (t._getPopperConfig = function () {
                        var e = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                        return "static" === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), s(s({}, e), this._config.popperConfig);
                    }),
                    (e.dropdownInterface = function (t, n) {
                        var i = j(t, Ie);
                        if ((i || (i = new e(t, "object" == typeof n ? n : null)), "string" == typeof n)) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]();
                        }
                    }),
                    (e.jQueryInterface = function (t) {
                        return this.each(function () {
                            e.dropdownInterface(this, t);
                        });
                    }),
                    (e.clearMenus = function (t) {
                        if (!t || (2 !== t.button && ("keyup" !== t.type || "Tab" === t.key)))
                            for (var n = de.find($e), i = 0, a = n.length; i < a; i++) {
                                var r = e.getParentFromElement(n[i]),
                                    l = j(n[i], Ie),
                                    o = { relatedTarget: n[i] };
                                if ((t && "click" === t.type && (o.clickEvent = t), l)) {
                                    var s = l._menu;
                                    if (n[i].classList.contains(Xe))
                                        if (!(t && (("click" === t.type && /input|textarea/i.test(t.target.tagName)) || ("keyup" === t.type && "Tab" === t.key)) && s.contains(t.target)))
                                            if (!X.trigger(r, Ze, o).defaultPrevented) {
                                                var d;
                                                if ("ontouchstart" in document.documentElement)
                                                    (d = []).concat.apply(d, document.body.children).forEach(function (e) {
                                                        return X.off(e, "mouseover", null, function () {});
                                                    });
                                                n[i].setAttribute("aria-expanded", "false"), l._popper && l._popper.destroy(), s.classList.remove(Xe), n[i].classList.remove(Xe), X.trigger(r, Ue, o);
                                            }
                                }
                            }
                    }),
                    (e.getParentFromElement = function (e) {
                        return g(e) || e.parentNode;
                    }),
                    (e.dataApiKeydownHandler = function (t) {
                        if (
                            !(/input|textarea/i.test(t.target.tagName) ? t.key === ze || (t.key !== Ne && ((t.key !== Ve && t.key !== Re) || t.target.closest(Qe))) : !Be.test(t.key)) &&
                            (t.preventDefault(), t.stopPropagation(), !this.disabled && !this.classList.contains(qe))
                        ) {
                            var n = e.getParentFromElement(this),
                                i = this.classList.contains(Xe);
                            if (t.key === Ne) return (this.matches($e) ? this : de.prev(this, $e)[0]).focus(), void e.clearMenus();
                            if (i && t.key !== ze) {
                                var a = de.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", n).filter(L);
                                if (a.length) {
                                    var r = a.indexOf(t.target);
                                    t.key === Re && r > 0 && r--, t.key === Ve && r < a.length - 1 && r++, a[(r = -1 === r ? 0 : r)].focus();
                                }
                            } else e.clearMenus();
                        }
                    }),
                    (e.getInstance = function (e) {
                        return j(e, Ie);
                    }),
                    r(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "5.0.0-alpha1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return et;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return tt;
                            },
                        },
                    ]),
                    e
                );
            })();
        X.on(document, Ge, $e, nt.dataApiKeydownHandler),
            X.on(document, Ge, Qe, nt.dataApiKeydownHandler),
            X.on(document, Je, nt.clearMenus),
            X.on(document, "keyup.bs.dropdown.data-api", nt.clearMenus),
            X.on(document, Je, $e, function (e) {
                e.preventDefault(), e.stopPropagation(), nt.dropdownInterface(this, "toggle");
            }),
            X.on(document, Je, ".dropdown form", function (e) {
                return e.stopPropagation();
            });
        var it = D();
        if (it) {
            var at = it.fn[Fe];
            (it.fn[Fe] = nt.jQueryInterface),
                (it.fn[Fe].Constructor = nt),
                (it.fn[Fe].noConflict = function () {
                    return (it.fn[Fe] = at), nt.jQueryInterface;
                });
        }
        var rt = "modal",
            lt = "bs.modal",
            ot = ".bs.modal",
            st = "Escape",
            dt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            ut = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
            ct = "hidden.bs.modal",
            ht = "show.bs.modal",
            mt = "focusin.bs.modal",
            ft = "resize.bs.modal",
            pt = "click.dismiss.bs.modal",
            _t = "keydown.dismiss.bs.modal",
            gt = "mousedown.dismiss.bs.modal",
            yt = "modal-open",
            vt = "fade",
            Mt = "show",
            bt = "modal-static",
            xt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            Lt = ".sticky-top",
            wt = (function () {
                function e(e, t) {
                    (this._config = this._getConfig(t)),
                        (this._element = e),
                        (this._dialog = de.findOne(".modal-dialog", e)),
                        (this._backdrop = null),
                        (this._isShown = !1),
                        (this._isBodyOverflowing = !1),
                        (this._ignoreBackdropClick = !1),
                        (this._isTransitioning = !1),
                        (this._scrollbarWidth = 0),
                        S(e, lt, this);
                }
                var t = e.prototype;
                return (
                    (t.toggle = function (e) {
                        return this._isShown ? this.hide() : this.show(e);
                    }),
                    (t.show = function (e) {
                        var t = this;
                        if (!this._isShown && !this._isTransitioning) {
                            this._element.classList.contains(vt) && (this._isTransitioning = !0);
                            var n = X.trigger(this._element, ht, { relatedTarget: e });
                            this._isShown ||
                                n.defaultPrevented ||
                                ((this._isShown = !0),
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                X.on(this._element, pt, '[data-dismiss="modal"]', function (e) {
                                    return t.hide(e);
                                }),
                                X.on(this._dialog, gt, function () {
                                    X.one(t._element, "mouseup.dismiss.bs.modal", function (e) {
                                        e.target === t._element && (t._ignoreBackdropClick = !0);
                                    });
                                }),
                                this._showBackdrop(function () {
                                    return t._showElement(e);
                                }));
                        }
                    }),
                    (t.hide = function (e) {
                        var t = this;
                        if ((e && e.preventDefault(), this._isShown && !this._isTransitioning) && !X.trigger(this._element, "hide.bs.modal").defaultPrevented) {
                            this._isShown = !1;
                            var n = this._element.classList.contains(vt);
                            if ((n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), X.off(document, mt), this._element.classList.remove(Mt), X.off(this._element, pt), X.off(this._dialog, gt), n)) {
                                var i = y(this._element);
                                X.one(this._element, m, function (e) {
                                    return t._hideModal(e);
                                }),
                                    b(this._element, i);
                            } else this._hideModal();
                        }
                    }),
                    (t.dispose = function () {
                        [window, this._element, this._dialog].forEach(function (e) {
                            return X.off(e, ot);
                        }),
                            X.off(document, mt),
                            E(this._element, lt),
                            (this._config = null),
                            (this._element = null),
                            (this._dialog = null),
                            (this._backdrop = null),
                            (this._isShown = null),
                            (this._isBodyOverflowing = null),
                            (this._ignoreBackdropClick = null),
                            (this._isTransitioning = null),
                            (this._scrollbarWidth = null);
                    }),
                    (t.handleUpdate = function () {
                        this._adjustDialog();
                    }),
                    (t._getConfig = function (e) {
                        return (e = s(s({}, dt), e)), x(rt, e, ut), e;
                    }),
                    (t._showElement = function (e) {
                        var t = this,
                            n = this._element.classList.contains(vt),
                            i = de.findOne(".modal-body", this._dialog);
                        (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                            (this._element.style.display = "block"),
                            this._element.removeAttribute("aria-hidden"),
                            this._element.setAttribute("aria-modal", !0),
                            this._element.setAttribute("role", "dialog"),
                            (this._element.scrollTop = 0),
                            i && (i.scrollTop = 0),
                            n && Y(this._element),
                            this._element.classList.add(Mt),
                            this._config.focus && this._enforceFocus();
                        var a = function () {
                            t._config.focus && t._element.focus(), (t._isTransitioning = !1), X.trigger(t._element, "shown.bs.modal", { relatedTarget: e });
                        };
                        if (n) {
                            var r = y(this._dialog);
                            X.one(this._dialog, m, a), b(this._dialog, r);
                        } else a();
                    }),
                    (t._enforceFocus = function () {
                        var e = this;
                        X.off(document, mt),
                            X.on(document, mt, function (t) {
                                document === t.target || e._element === t.target || e._element.contains(t.target) || e._element.focus();
                            });
                    }),
                    (t._setEscapeEvent = function () {
                        var e = this;
                        this._isShown
                            ? X.on(this._element, _t, function (t) {
                                  e._config.keyboard && t.key === st ? (t.preventDefault(), e.hide()) : e._config.keyboard || t.key !== st || e._triggerBackdropTransition();
                              })
                            : X.off(this._element, _t);
                    }),
                    (t._setResizeEvent = function () {
                        var e = this;
                        this._isShown
                            ? X.on(window, ft, function () {
                                  return e._adjustDialog();
                              })
                            : X.off(window, ft);
                    }),
                    (t._hideModal = function () {
                        var e = this;
                        (this._element.style.display = "none"),
                            this._element.setAttribute("aria-hidden", !0),
                            this._element.removeAttribute("aria-modal"),
                            this._element.removeAttribute("role"),
                            (this._isTransitioning = !1),
                            this._showBackdrop(function () {
                                document.body.classList.remove(yt), e._resetAdjustments(), e._resetScrollbar(), X.trigger(e._element, ct);
                            });
                    }),
                    (t._removeBackdrop = function () {
                        this._backdrop.parentNode.removeChild(this._backdrop), (this._backdrop = null);
                    }),
                    (t._showBackdrop = function (e) {
                        var t = this,
                            n = this._element.classList.contains(vt) ? vt : "";
                        if (this._isShown && this._config.backdrop) {
                            if (
                                ((this._backdrop = document.createElement("div")),
                                (this._backdrop.className = "modal-backdrop"),
                                n && this._backdrop.classList.add(n),
                                document.body.appendChild(this._backdrop),
                                X.on(this._element, pt, function (e) {
                                    t._ignoreBackdropClick ? (t._ignoreBackdropClick = !1) : e.target === e.currentTarget && t._triggerBackdropTransition();
                                }),
                                n && Y(this._backdrop),
                                this._backdrop.classList.add(Mt),
                                !n)
                            )
                                return void e();
                            var i = y(this._backdrop);
                            X.one(this._backdrop, m, e), b(this._backdrop, i);
                        } else if (!this._isShown && this._backdrop) {
                            this._backdrop.classList.remove(Mt);
                            var a = function () {
                                t._removeBackdrop(), e();
                            };
                            if (this._element.classList.contains(vt)) {
                                var r = y(this._backdrop);
                                X.one(this._backdrop, m, a), b(this._backdrop, r);
                            } else a();
                        } else e();
                    }),
                    (t._triggerBackdropTransition = function () {
                        var e = this;
                        if ("static" === this._config.backdrop) {
                            if (X.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
                            this._element.classList.add(bt);
                            var t = y(this._element);
                            X.one(this._element, m, function () {
                                e._element.classList.remove(bt);
                            }),
                                b(this._element, t),
                                this._element.focus();
                        } else this.hide();
                    }),
                    (t._adjustDialog = function () {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                    }),
                    (t._resetAdjustments = function () {
                        (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                    }),
                    (t._checkScrollbar = function () {
                        var e = document.body.getBoundingClientRect();
                        (this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                    }),
                    (t._setScrollbar = function () {
                        var e = this;
                        if (this._isBodyOverflowing) {
                            de.find(xt).forEach(function (t) {
                                var n = t.style.paddingRight,
                                    i = window.getComputedStyle(t)["padding-right"];
                                se.setDataAttribute(t, "padding-right", n), (t.style.paddingRight = parseFloat(i) + e._scrollbarWidth + "px");
                            }),
                                de.find(Lt).forEach(function (t) {
                                    var n = t.style.marginRight,
                                        i = window.getComputedStyle(t)["margin-right"];
                                    se.setDataAttribute(t, "margin-right", n), (t.style.marginRight = parseFloat(i) - e._scrollbarWidth + "px");
                                });
                            var t = document.body.style.paddingRight,
                                n = window.getComputedStyle(document.body)["padding-right"];
                            se.setDataAttribute(document.body, "padding-right", t), (document.body.style.paddingRight = parseFloat(n) + this._scrollbarWidth + "px");
                        }
                        document.body.classList.add(yt);
                    }),
                    (t._resetScrollbar = function () {
                        de.find(xt).forEach(function (e) {
                            var t = se.getDataAttribute(e, "padding-right");
                            void 0 !== t && (se.removeDataAttribute(e, "padding-right"), (e.style.paddingRight = t));
                        }),
                            de.find(".sticky-top").forEach(function (e) {
                                var t = se.getDataAttribute(e, "margin-right");
                                void 0 !== t && (se.removeDataAttribute(e, "margin-right"), (e.style.marginRight = t));
                            });
                        var e = se.getDataAttribute(document.body, "padding-right");
                        void 0 === e ? (document.body.style.paddingRight = "") : (se.removeDataAttribute(document.body, "padding-right"), (document.body.style.paddingRight = e));
                    }),
                    (t._getScrollbarWidth = function () {
                        var e = document.createElement("div");
                        (e.className = "modal-scrollbar-measure"), document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t;
                    }),
                    (e.jQueryInterface = function (t, n) {
                        return this.each(function () {
                            var i = j(this, lt),
                                a = s(s(s({}, dt), se.getDataAttributes(this)), "object" == typeof t && t ? t : {});
                            if ((i || (i = new e(this, a)), "string" == typeof t)) {
                                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                i[t](n);
                            } else a.show && i.show(n);
                        });
                    }),
                    (e.getInstance = function (e) {
                        return j(e, lt);
                    }),
                    r(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "5.0.0-alpha1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return dt;
                            },
                        },
                    ]),
                    e
                );
            })();
        X.on(document, "click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
            var t = this,
                n = g(this);
            ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault(),
                X.one(n, ht, function (e) {
                    e.defaultPrevented ||
                        X.one(n, ct, function () {
                            L(t) && t.focus();
                        });
                });
            var i = j(n, lt);
            if (!i) {
                var a = s(s({}, se.getDataAttributes(n)), se.getDataAttributes(this));
                i = new wt(n, a);
            }
            i.show(this);
        });
        var kt = D();
        if (kt) {
            var Yt = kt.fn.modal;
            (kt.fn.modal = wt.jQueryInterface),
                (kt.fn.modal.Constructor = wt),
                (kt.fn.modal.noConflict = function () {
                    return (kt.fn.modal = Yt), wt.jQueryInterface;
                });
        }
        var Dt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            Tt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
            St = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
            jt = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            };
        function Et(e, t, n) {
            var i;
            if (!e.length) return e;
            if (n && "function" == typeof n) return n(e);
            for (
                var a = new window.DOMParser().parseFromString(e, "text/html"),
                    r = Object.keys(t),
                    l = (i = []).concat.apply(i, a.body.querySelectorAll("*")),
                    o = function (e, n) {
                        var i,
                            a = l[e],
                            o = a.nodeName.toLowerCase();
                        if (-1 === r.indexOf(o)) return a.parentNode.removeChild(a), "continue";
                        var s = (i = []).concat.apply(i, a.attributes),
                            d = [].concat(t["*"] || [], t[o] || []);
                        s.forEach(function (e) {
                            (function (e, t) {
                                var n = e.nodeName.toLowerCase();
                                if (-1 !== t.indexOf(n)) return -1 === Dt.indexOf(n) || Boolean(e.nodeValue.match(Tt) || e.nodeValue.match(St));
                                for (
                                    var i = t.filter(function (e) {
                                            return e instanceof RegExp;
                                        }),
                                        a = 0,
                                        r = i.length;
                                    a < r;
                                    a++
                                )
                                    if (n.match(i[a])) return !0;
                                return !1;
                            })(e, d) || a.removeAttribute(e.nodeName);
                        });
                    },
                    s = 0,
                    d = l.length;
                s < d;
                s++
            )
                o(s);
            return a.body.innerHTML;
        }
        var Ht = "tooltip",
            Ot = "bs.tooltip",
            At = ".bs.tooltip",
            Pt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            Ct = ["sanitize", "whiteList", "sanitizeFn"],
            Ft = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
                popperConfig: "(null|object)",
            },
            It = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
            Wt = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: jt,
                popperConfig: null,
            },
            Nt = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip",
            },
            zt = "fade",
            Rt = "show",
            Vt = "show",
            Bt = "out",
            Zt = "hover",
            Ut = "focus",
            Jt = (function () {
                function e(e, t) {
                    if (void 0 === i.a) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org)");
                    (this._isEnabled = !0),
                        (this._timeout = 0),
                        (this._hoverState = ""),
                        (this._activeTrigger = {}),
                        (this._popper = null),
                        (this.element = e),
                        (this.config = this._getConfig(t)),
                        (this.tip = null),
                        this._setListeners(),
                        S(e, this.constructor.DATA_KEY, this);
                }
                var t = e.prototype;
                return (
                    (t.enable = function () {
                        this._isEnabled = !0;
                    }),
                    (t.disable = function () {
                        this._isEnabled = !1;
                    }),
                    (t.toggleEnabled = function () {
                        this._isEnabled = !this._isEnabled;
                    }),
                    (t.toggle = function (e) {
                        if (this._isEnabled)
                            if (e) {
                                var t = this.constructor.DATA_KEY,
                                    n = j(e.target, t);
                                n || ((n = new this.constructor(e.target, this._getDelegateConfig())), S(e.target, t, n)), (n._activeTrigger.click = !n._activeTrigger.click), n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
                            } else {
                                if (this.getTipElement().classList.contains(Rt)) return void this._leave(null, this);
                                this._enter(null, this);
                            }
                    }),
                    (t.dispose = function () {
                        clearTimeout(this._timeout),
                            E(this.element, this.constructor.DATA_KEY),
                            X.off(this.element, this.constructor.EVENT_KEY),
                            X.off(this.element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
                            this.tip && this.tip.parentNode.removeChild(this.tip),
                            (this._isEnabled = null),
                            (this._timeout = null),
                            (this._hoverState = null),
                            (this._activeTrigger = null),
                            this._popper && this._popper.destroy(),
                            (this._popper = null),
                            (this.element = null),
                            (this.config = null),
                            (this.tip = null);
                    }),
                    (t.show = function () {
                        var e = this;
                        if ("none" === this.element.style.display) throw new Error("Please use show on visible elements");
                        if (this.isWithContent() && this._isEnabled) {
                            var t = X.trigger(this.element, this.constructor.Event.SHOW),
                                n = w(this.element),
                                a = null === n ? this.element.ownerDocument.documentElement.contains(this.element) : n.contains(this.element);
                            if (t.defaultPrevented || !a) return;
                            var r = this.getTipElement(),
                                l = f(this.constructor.NAME);
                            r.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && r.classList.add(zt);
                            var o = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                                s = this._getAttachment(o);
                            this._addAttachmentClass(s);
                            var d,
                                u = this._getContainer();
                            if (
                                (S(r, this.constructor.DATA_KEY, this),
                                this.element.ownerDocument.documentElement.contains(this.tip) || u.appendChild(r),
                                X.trigger(this.element, this.constructor.Event.INSERTED),
                                (this._popper = new i.a(this.element, r, this._getPopperConfig(s))),
                                r.classList.add(Rt),
                                "ontouchstart" in document.documentElement)
                            )
                                (d = []).concat.apply(d, document.body.children).forEach(function (e) {
                                    X.on(e, "mouseover", function () {});
                                });
                            var c = function () {
                                e.config.animation && e._fixTransition();
                                var t = e._hoverState;
                                (e._hoverState = null), X.trigger(e.element, e.constructor.Event.SHOWN), t === Bt && e._leave(null, e);
                            };
                            if (this.tip.classList.contains(zt)) {
                                var h = y(this.tip);
                                X.one(this.tip, m, c), b(this.tip, h);
                            } else c();
                        }
                    }),
                    (t.hide = function () {
                        var e = this,
                            t = this.getTipElement(),
                            n = function () {
                                e._hoverState !== Vt && t.parentNode && t.parentNode.removeChild(t), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), X.trigger(e.element, e.constructor.Event.HIDDEN), e._popper.destroy();
                            };
                        if (!X.trigger(this.element, this.constructor.Event.HIDE).defaultPrevented) {
                            var i;
                            if ((t.classList.remove(Rt), "ontouchstart" in document.documentElement))
                                (i = []).concat.apply(i, document.body.children).forEach(function (e) {
                                    return X.off(e, "mouseover", k);
                                });
                            if (((this._activeTrigger.click = !1), (this._activeTrigger.focus = !1), (this._activeTrigger.hover = !1), this.tip.classList.contains(zt))) {
                                var a = y(t);
                                X.one(t, m, n), b(t, a);
                            } else n();
                            this._hoverState = "";
                        }
                    }),
                    (t.update = function () {
                        null !== this._popper && this._popper.scheduleUpdate();
                    }),
                    (t.isWithContent = function () {
                        return Boolean(this.getTitle());
                    }),
                    (t.getTipElement = function () {
                        if (this.tip) return this.tip;
                        var e = document.createElement("div");
                        return (e.innerHTML = this.config.template), (this.tip = e.children[0]), this.tip;
                    }),
                    (t.setContent = function () {
                        var e = this.getTipElement();
                        this.setElementContent(de.findOne(".tooltip-inner", e), this.getTitle()), e.classList.remove(zt, Rt);
                    }),
                    (t.setElementContent = function (e, t) {
                        if (null !== e)
                            return "object" == typeof t && M(t)
                                ? (t.jquery && (t = t[0]), void (this.config.html ? t.parentNode !== e && ((e.innerHTML = ""), e.appendChild(t)) : (e.textContent = t.textContent)))
                                : void (this.config.html ? (this.config.sanitize && (t = Et(t, this.config.whiteList, this.config.sanitizeFn)), (e.innerHTML = t)) : (e.textContent = t));
                    }),
                    (t.getTitle = function () {
                        var e = this.element.getAttribute("data-original-title");
                        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
                    }),
                    (t._getPopperConfig = function (e) {
                        var t = this;
                        return s(
                            s(
                                {},
                                {
                                    placement: e,
                                    modifiers: {
                                        offset: this._getOffset(),
                                        flip: { behavior: this.config.fallbackPlacement },
                                        arrow: { element: "." + this.constructor.NAME + "-arrow" },
                                        preventOverflow: { boundariesElement: this.config.boundary },
                                    },
                                    onCreate: function (e) {
                                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
                                    },
                                    onUpdate: function (e) {
                                        return t._handlePopperPlacementChange(e);
                                    },
                                }
                            ),
                            this.config.popperConfig
                        );
                    }),
                    (t._addAttachmentClass = function (e) {
                        this.getTipElement().classList.add("bs-tooltip-" + e);
                    }),
                    (t._getOffset = function () {
                        var e = this,
                            t = {};
                        return (
                            "function" == typeof this.config.offset
                                ? (t.fn = function (t) {
                                      return (t.offsets = s(s({}, t.offsets), e.config.offset(t.offsets, e.element) || {})), t;
                                  })
                                : (t.offset = this.config.offset),
                            t
                        );
                    }),
                    (t._getContainer = function () {
                        return !1 === this.config.container ? document.body : M(this.config.container) ? this.config.container : de.findOne(this.config.container);
                    }),
                    (t._getAttachment = function (e) {
                        return It[e.toUpperCase()];
                    }),
                    (t._setListeners = function () {
                        var e = this;
                        this.config.trigger.split(" ").forEach(function (t) {
                            if ("click" === t)
                                X.on(e.element, e.constructor.Event.CLICK, e.config.selector, function (t) {
                                    return e.toggle(t);
                                });
                            else if ("manual" !== t) {
                                var n = t === Zt ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    i = t === Zt ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                X.on(e.element, n, e.config.selector, function (t) {
                                    return e._enter(t);
                                }),
                                    X.on(e.element, i, e.config.selector, function (t) {
                                        return e._leave(t);
                                    });
                            }
                        }),
                            (this._hideModalHandler = function () {
                                e.element && e.hide();
                            }),
                            X.on(this.element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
                            this.config.selector ? (this.config = s(s({}, this.config), {}, { trigger: "manual", selector: "" })) : this._fixTitle();
                    }),
                    (t._fixTitle = function () {
                        var e = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                    }),
                    (t._enter = function (e, t) {
                        var n = this.constructor.DATA_KEY;
                        (t = t || j(e.target, n)) || ((t = new this.constructor(e.target, this._getDelegateConfig())), S(e.target, n, t)),
                            e && (t._activeTrigger["focusin" === e.type ? Ut : Zt] = !0),
                            t.getTipElement().classList.contains(Rt) || t._hoverState === Vt
                                ? (t._hoverState = Vt)
                                : (clearTimeout(t._timeout),
                                  (t._hoverState = Vt),
                                  t.config.delay && t.config.delay.show
                                      ? (t._timeout = setTimeout(function () {
                                            t._hoverState === Vt && t.show();
                                        }, t.config.delay.show))
                                      : t.show());
                    }),
                    (t._leave = function (e, t) {
                        var n = this.constructor.DATA_KEY;
                        (t = t || j(e.target, n)) || ((t = new this.constructor(e.target, this._getDelegateConfig())), S(e.target, n, t)),
                            e && (t._activeTrigger["focusout" === e.type ? Ut : Zt] = !1),
                            t._isWithActiveTrigger() ||
                                (clearTimeout(t._timeout),
                                (t._hoverState = Bt),
                                t.config.delay && t.config.delay.hide
                                    ? (t._timeout = setTimeout(function () {
                                          t._hoverState === Bt && t.hide();
                                      }, t.config.delay.hide))
                                    : t.hide());
                    }),
                    (t._isWithActiveTrigger = function () {
                        for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                        return !1;
                    }),
                    (t._getConfig = function (e) {
                        var t = se.getDataAttributes(this.element);
                        return (
                            Object.keys(t).forEach(function (e) {
                                -1 !== Ct.indexOf(e) && delete t[e];
                            }),
                            e && "object" == typeof e.container && e.container.jquery && (e.container = e.container[0]),
                            "number" == typeof (e = s(s(s({}, this.constructor.Default), t), "object" == typeof e && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }),
                            "number" == typeof e.title && (e.title = e.title.toString()),
                            "number" == typeof e.content && (e.content = e.content.toString()),
                            x(Ht, e, this.constructor.DefaultType),
                            e.sanitize && (e.template = Et(e.template, e.whiteList, e.sanitizeFn)),
                            e
                        );
                    }),
                    (t._getDelegateConfig = function () {
                        var e = {};
                        if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                        return e;
                    }),
                    (t._cleanTipClass = function () {
                        var e = this.getTipElement(),
                            t = e.getAttribute("class").match(Pt);
                        null !== t &&
                            t.length > 0 &&
                            t
                                .map(function (e) {
                                    return e.trim();
                                })
                                .forEach(function (t) {
                                    return e.classList.remove(t);
                                });
                    }),
                    (t._handlePopperPlacementChange = function (e) {
                        var t = e.instance;
                        (this.tip = t.popper), this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement));
                    }),
                    (t._fixTransition = function () {
                        var e = this.getTipElement(),
                            t = this.config.animation;
                        null === e.getAttribute("x-placement") && (e.classList.remove(zt), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = t));
                    }),
                    (e.jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = j(this, Ot),
                                i = "object" == typeof t && t;
                            if ((n || !/dispose|hide/.test(t)) && (n || (n = new e(this, i)), "string" == typeof t)) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]();
                            }
                        });
                    }),
                    (e.getInstance = function (e) {
                        return j(e, Ot);
                    }),
                    r(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "5.0.0-alpha1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return Wt;
                            },
                        },
                        {
                            key: "NAME",
                            get: function () {
                                return Ht;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function () {
                                return Ot;
                            },
                        },
                        {
                            key: "Event",
                            get: function () {
                                return Nt;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function () {
                                return At;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return Ft;
                            },
                        },
                    ]),
                    e
                );
            })(),
            Gt = D();
        if (Gt) {
            var qt = Gt.fn.tooltip;
            (Gt.fn.tooltip = Jt.jQueryInterface),
                (Gt.fn.tooltip.Constructor = Jt),
                (Gt.fn.tooltip.noConflict = function () {
                    return (Gt.fn.tooltip = qt), Jt.jQueryInterface;
                });
        }
        var Xt = "popover",
            Kt = "bs.popover",
            $t = ".bs.popover",
            Qt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            en = s(
                s({}, Jt.Default),
                {},
                { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }
            ),
            tn = s(s({}, Jt.DefaultType), {}, { content: "(string|element|function)" }),
            nn = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover",
            },
            an = (function (e) {
                var t, n;
                function i() {
                    return e.apply(this, arguments) || this;
                }
                (n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), (t.__proto__ = n);
                var a = i.prototype;
                return (
                    (a.isWithContent = function () {
                        return this.getTitle() || this._getContent();
                    }),
                    (a.setContent = function () {
                        var e = this.getTipElement();
                        this.setElementContent(de.findOne(".popover-header", e), this.getTitle());
                        var t = this._getContent();
                        "function" == typeof t && (t = t.call(this.element)), this.setElementContent(de.findOne(".popover-body", e), t), e.classList.remove("fade", "show");
                    }),
                    (a._addAttachmentClass = function (e) {
                        this.getTipElement().classList.add("bs-popover-" + e);
                    }),
                    (a._getContent = function () {
                        return this.element.getAttribute("data-content") || this.config.content;
                    }),
                    (a._cleanTipClass = function () {
                        var e = this.getTipElement(),
                            t = e.getAttribute("class").match(Qt);
                        null !== t &&
                            t.length > 0 &&
                            t
                                .map(function (e) {
                                    return e.trim();
                                })
                                .forEach(function (t) {
                                    return e.classList.remove(t);
                                });
                    }),
                    (i.jQueryInterface = function (e) {
                        return this.each(function () {
                            var t = j(this, Kt),
                                n = "object" == typeof e ? e : null;
                            if ((t || !/dispose|hide/.test(e)) && (t || ((t = new i(this, n)), S(this, Kt, t)), "string" == typeof e)) {
                                if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                                t[e]();
                            }
                        });
                    }),
                    (i.getInstance = function (e) {
                        return j(e, Kt);
                    }),
                    r(i, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "5.0.0-alpha1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return en;
                            },
                        },
                        {
                            key: "NAME",
                            get: function () {
                                return Xt;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function () {
                                return Kt;
                            },
                        },
                        {
                            key: "Event",
                            get: function () {
                                return nn;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function () {
                                return $t;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return tn;
                            },
                        },
                    ]),
                    i
                );
            })(Jt),
            rn = D();
        if (rn) {
            var ln = rn.fn.popover;
            (rn.fn.popover = an.jQueryInterface),
                (rn.fn.popover.Constructor = an),
                (rn.fn.popover.noConflict = function () {
                    return (rn.fn.popover = ln), an.jQueryInterface;
                });
        }
        var on = "scrollspy",
            sn = "bs.scrollspy",
            dn = "." + sn,
            un = { offset: 10, method: "auto", target: "" },
            cn = { offset: "number", method: "string", target: "(string|element)" },
            hn = "dropdown-item",
            mn = "active",
            fn = ".nav-link",
            pn = "position",
            _n = (function () {
                function e(e, t) {
                    var n = this;
                    (this._element = e),
                        (this._scrollElement = "BODY" === e.tagName ? window : e),
                        (this._config = this._getConfig(t)),
                        (this._selector = this._config.target + " " + ".nav-link," + this._config.target + " .list-group-item," + this._config.target + " ." + hn),
                        (this._offsets = []),
                        (this._targets = []),
                        (this._activeTarget = null),
                        (this._scrollHeight = 0),
                        X.on(this._scrollElement, "scroll.bs.scrollspy", function (e) {
                            return n._process(e);
                        }),
                        this.refresh(),
                        this._process(),
                        S(e, sn, this);
                }
                var t = e.prototype;
                return (
                    (t.refresh = function () {
                        var e = this,
                            t = this._scrollElement === this._scrollElement.window ? "offset" : pn,
                            n = "auto" === this._config.method ? t : this._config.method,
                            i = n === pn ? this._getScrollTop() : 0;
                        (this._offsets = []),
                            (this._targets = []),
                            (this._scrollHeight = this._getScrollHeight()),
                            de
                                .find(this._selector)
                                .map(function (e) {
                                    var t,
                                        a = _(e);
                                    if ((a && (t = de.findOne(a)), t)) {
                                        var r = t.getBoundingClientRect();
                                        if (r.width || r.height) return [se[n](t).top + i, a];
                                    }
                                    return null;
                                })
                                .filter(function (e) {
                                    return e;
                                })
                                .sort(function (e, t) {
                                    return e[0] - t[0];
                                })
                                .forEach(function (t) {
                                    e._offsets.push(t[0]), e._targets.push(t[1]);
                                });
                    }),
                    (t.dispose = function () {
                        E(this._element, sn),
                            X.off(this._scrollElement, dn),
                            (this._element = null),
                            (this._scrollElement = null),
                            (this._config = null),
                            (this._selector = null),
                            (this._offsets = null),
                            (this._targets = null),
                            (this._activeTarget = null),
                            (this._scrollHeight = null);
                    }),
                    (t._getConfig = function (e) {
                        if ("string" != typeof (e = s(s({}, un), "object" == typeof e && e ? e : {})).target && M(e.target)) {
                            var t = e.target.id;
                            t || ((t = f(on)), (e.target.id = t)), (e.target = "#" + t);
                        }
                        return x(on, e, cn), e;
                    }),
                    (t._getScrollTop = function () {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                    }),
                    (t._getScrollHeight = function () {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                    }),
                    (t._getOffsetHeight = function () {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                    }),
                    (t._process = function () {
                        var e = this._getScrollTop() + this._config.offset,
                            t = this._getScrollHeight(),
                            n = this._config.offset + t - this._getOffsetHeight();
                        if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i);
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                            for (var a = this._offsets.length; a--; ) {
                                this._activeTarget !== this._targets[a] && e >= this._offsets[a] && (void 0 === this._offsets[a + 1] || e < this._offsets[a + 1]) && this._activate(this._targets[a]);
                            }
                        }
                    }),
                    (t._activate = function (e) {
                        (this._activeTarget = e), this._clear();
                        var t = this._selector.split(",").map(function (t) {
                                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                            }),
                            n = de.findOne(t.join(","));
                        n.classList.contains(hn)
                            ? (de.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add(mn), n.classList.add(mn))
                            : (n.classList.add(mn),
                              de.parents(n, ".nav, .list-group").forEach(function (e) {
                                  de.prev(e, ".nav-link, .list-group-item").forEach(function (e) {
                                      return e.classList.add(mn);
                                  }),
                                      de.prev(e, ".nav-item").forEach(function (e) {
                                          de.children(e, fn).forEach(function (e) {
                                              return e.classList.add(mn);
                                          });
                                      });
                              })),
                            X.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: e });
                    }),
                    (t._clear = function () {
                        de.find(this._selector)
                            .filter(function (e) {
                                return e.classList.contains(mn);
                            })
                            .forEach(function (e) {
                                return e.classList.remove(mn);
                            });
                    }),
                    (e.jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = j(this, sn);
                            if ((n || (n = new e(this, "object" == typeof t && t)), "string" == typeof t)) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]();
                            }
                        });
                    }),
                    (e.getInstance = function (e) {
                        return j(e, sn);
                    }),
                    r(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "5.0.0-alpha1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return un;
                            },
                        },
                    ]),
                    e
                );
            })();
        X.on(window, "load.bs.scrollspy.data-api", function () {
            de.find('[data-spy="scroll"]').forEach(function (e) {
                return new _n(e, se.getDataAttributes(e));
            });
        });
        var gn = D();
        if (gn) {
            var yn = gn.fn[on];
            (gn.fn[on] = _n.jQueryInterface),
                (gn.fn[on].Constructor = _n),
                (gn.fn[on].noConflict = function () {
                    return (gn.fn[on] = yn), _n.jQueryInterface;
                });
        }
        var vn = "bs.tab",
            Mn = "active",
            bn = "fade",
            xn = "show",
            Ln = ".active",
            wn = ":scope > li > .active",
            kn = (function () {
                function e(e) {
                    (this._element = e), S(this._element, vn, this);
                }
                var t = e.prototype;
                return (
                    (t.show = function () {
                        var e = this;
                        if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Mn)) || this._element.classList.contains("disabled"))) {
                            var t,
                                n = g(this._element),
                                i = this._element.closest(".nav, .list-group");
                            if (i) {
                                var a = "UL" === i.nodeName || "OL" === i.nodeName ? wn : Ln;
                                t = (t = de.find(a, i))[t.length - 1];
                            }
                            var r = null;
                            if ((t && (r = X.trigger(t, "hide.bs.tab", { relatedTarget: this._element })), !(X.trigger(this._element, "show.bs.tab", { relatedTarget: t }).defaultPrevented || (null !== r && r.defaultPrevented)))) {
                                this._activate(this._element, i);
                                var l = function () {
                                    X.trigger(t, "hidden.bs.tab", { relatedTarget: e._element }), X.trigger(e._element, "shown.bs.tab", { relatedTarget: t });
                                };
                                n ? this._activate(n, n.parentNode, l) : l();
                            }
                        }
                    }),
                    (t.dispose = function () {
                        E(this._element, vn), (this._element = null);
                    }),
                    (t._activate = function (e, t, n) {
                        var i = this,
                            a = (!t || ("UL" !== t.nodeName && "OL" !== t.nodeName) ? de.children(t, Ln) : de.find(wn, t))[0],
                            r = n && a && a.classList.contains(bn),
                            l = function () {
                                return i._transitionComplete(e, a, n);
                            };
                        if (a && r) {
                            var o = y(a);
                            a.classList.remove(xn), X.one(a, m, l), b(a, o);
                        } else l();
                    }),
                    (t._transitionComplete = function (e, t, n) {
                        if (t) {
                            t.classList.remove(Mn);
                            var i = de.findOne(":scope > .dropdown-menu .active", t.parentNode);
                            i && i.classList.remove(Mn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
                        }
                        (e.classList.add(Mn),
                        "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
                        Y(e),
                        e.classList.contains(bn) && e.classList.add(xn),
                        e.parentNode && e.parentNode.classList.contains("dropdown-menu")) &&
                            (e.closest(".dropdown") &&
                                de.find(".dropdown-toggle").forEach(function (e) {
                                    return e.classList.add(Mn);
                                }),
                            e.setAttribute("aria-expanded", !0));
                        n && n();
                    }),
                    (e.jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = j(this, vn) || new e(this);
                            if ("string" == typeof t) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]();
                            }
                        });
                    }),
                    (e.getInstance = function (e) {
                        return j(e, vn);
                    }),
                    r(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "5.0.0-alpha1";
                            },
                        },
                    ]),
                    e
                );
            })();
        X.on(document, "click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
            e.preventDefault(), (j(this, vn) || new kn(this)).show();
        });
        var Yn = D();
        if (Yn) {
            var Dn = Yn.fn.tab;
            (Yn.fn.tab = kn.jQueryInterface),
                (Yn.fn.tab.Constructor = kn),
                (Yn.fn.tab.noConflict = function () {
                    return (Yn.fn.tab = Dn), kn.jQueryInterface;
                });
        }
        var Tn = "toast",
            Sn = "bs.toast",
            jn = "click.dismiss.bs.toast",
            En = "hide",
            Hn = "show",
            On = "showing",
            An = { animation: "boolean", autohide: "boolean", delay: "number" },
            Pn = { animation: !0, autohide: !0, delay: 500 },
            Cn = (function () {
                function e(e, t) {
                    (this._element = e), (this._config = this._getConfig(t)), (this._timeout = null), this._setListeners(), S(e, Sn, this);
                }
                var t = e.prototype;
                return (
                    (t.show = function () {
                        var e = this;
                        if (!X.trigger(this._element, "show.bs.toast").defaultPrevented) {
                            this._config.animation && this._element.classList.add("fade");
                            var t = function () {
                                e._element.classList.remove(On),
                                    e._element.classList.add(Hn),
                                    X.trigger(e._element, "shown.bs.toast"),
                                    e._config.autohide &&
                                        (e._timeout = setTimeout(function () {
                                            e.hide();
                                        }, e._config.delay));
                            };
                            if ((this._element.classList.remove(En), Y(this._element), this._element.classList.add(On), this._config.animation)) {
                                var n = y(this._element);
                                X.one(this._element, m, t), b(this._element, n);
                            } else t();
                        }
                    }),
                    (t.hide = function () {
                        var e = this;
                        if (this._element.classList.contains(Hn) && !X.trigger(this._element, "hide.bs.toast").defaultPrevented) {
                            var t = function () {
                                e._element.classList.add(En), X.trigger(e._element, "hidden.bs.toast");
                            };
                            if ((this._element.classList.remove(Hn), this._config.animation)) {
                                var n = y(this._element);
                                X.one(this._element, m, t), b(this._element, n);
                            } else t();
                        }
                    }),
                    (t.dispose = function () {
                        clearTimeout(this._timeout),
                            (this._timeout = null),
                            this._element.classList.contains(Hn) && this._element.classList.remove(Hn),
                            X.off(this._element, jn),
                            E(this._element, Sn),
                            (this._element = null),
                            (this._config = null);
                    }),
                    (t._getConfig = function (e) {
                        return (e = s(s(s({}, Pn), se.getDataAttributes(this._element)), "object" == typeof e && e ? e : {})), x(Tn, e, this.constructor.DefaultType), e;
                    }),
                    (t._setListeners = function () {
                        var e = this;
                        X.on(this._element, jn, '[data-dismiss="toast"]', function () {
                            return e.hide();
                        });
                    }),
                    (e.jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = j(this, Sn);
                            if ((n || (n = new e(this, "object" == typeof t && t)), "string" == typeof t)) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t](this);
                            }
                        });
                    }),
                    (e.getInstance = function (e) {
                        return j(e, Sn);
                    }),
                    r(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "5.0.0-alpha1";
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return An;
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return Pn;
                            },
                        },
                    ]),
                    e
                );
            })(),
            Fn = D();
        if (Fn) {
            var In = Fn.fn.toast;
            (Fn.fn.toast = Cn.jQueryInterface),
                (Fn.fn.toast.Constructor = Cn),
                (Fn.fn.toast.noConflict = function () {
                    return (Fn.fn.toast = In), Cn.jQueryInterface;
                });
        }
        [].slice.call(document.querySelectorAll('[data-toggle="popover"]')).map((e) => new an(e)), [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]')).map((e) => new Jt(e));
        n(228), n(229);
        var Wn = n(47),
            Nn = n.n(Wn);
        document.addEventListener("DOMContentLoaded", () => {
            Nn.a.replace();
        }),
            (window.feather = Nn.a);
        var zn = n(0),
            Rn = n.n(zn);
        window.moment = Rn.a;
        n(253), n(263);
        var Vn = n(25),
            Bn = n.n(Vn),
            Zn = (n(264), n(206), n(274), n(276), n(278), n(281), n(282), n(291), n(48)),
            Un = n.n(Zn),
            Jn = n(49),
            Gn = n.n(Jn),
            qn = n(223),
            Xn = n.n(qn),
            Kn = n(224),
            $n = (n(292), n(294), n(219), n(297), n(298), null),
            Qn = null;
        function ei() {
            if (null === $n) {
                if ("undefined" == typeof document) return ($n = 0);
                var e = document.body,
                    t = document.createElement("div");
                t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
                var n = t.getBoundingClientRect().right;
                e.removeChild(t), ($n = n);
            }
            return $n;
        }
        Bn.a &&
            window.addEventListener("resize", function () {
                Qn !== window.devicePixelRatio && ((Qn = window.devicePixelRatio), ($n = null));
            });
        var ti = function (e) {
            return Array.prototype.reduce.call(
                e,
                function (e, t) {
                    var n = t.name.match(/data-simplebar-(.+)/);
                    if (n) {
                        var i = n[1].replace(/\W+(.)/g, function (e, t) {
                            return t.toUpperCase();
                        });
                        switch (t.value) {
                            case "true":
                                e[i] = !0;
                                break;
                            case "false":
                                e[i] = !1;
                                break;
                            case void 0:
                                e[i] = !0;
                                break;
                            default:
                                e[i] = t.value;
                        }
                    }
                    return e;
                },
                {}
            );
        };
        function ni(e) {
            return e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window;
        }
        function ii(e) {
            return e && e.ownerDocument ? e.ownerDocument : document;
        }
        var ai = (function () {
            function e(t, n) {
                var i = this;
                (this.onScroll = function () {
                    var e = ni(i.el);
                    i.scrollXTicking || (e.requestAnimationFrame(i.scrollX), (i.scrollXTicking = !0)), i.scrollYTicking || (e.requestAnimationFrame(i.scrollY), (i.scrollYTicking = !0));
                }),
                    (this.scrollX = function () {
                        i.axis.x.isOverflowing && (i.showScrollbar("x"), i.positionScrollbar("x")), (i.scrollXTicking = !1);
                    }),
                    (this.scrollY = function () {
                        i.axis.y.isOverflowing && (i.showScrollbar("y"), i.positionScrollbar("y")), (i.scrollYTicking = !1);
                    }),
                    (this.onMouseEnter = function () {
                        i.showScrollbar("x"), i.showScrollbar("y");
                    }),
                    (this.onMouseMove = function (e) {
                        (i.mouseX = e.clientX), (i.mouseY = e.clientY), (i.axis.x.isOverflowing || i.axis.x.forceVisible) && i.onMouseMoveForAxis("x"), (i.axis.y.isOverflowing || i.axis.y.forceVisible) && i.onMouseMoveForAxis("y");
                    }),
                    (this.onMouseLeave = function () {
                        i.onMouseMove.cancel(),
                            (i.axis.x.isOverflowing || i.axis.x.forceVisible) && i.onMouseLeaveForAxis("x"),
                            (i.axis.y.isOverflowing || i.axis.y.forceVisible) && i.onMouseLeaveForAxis("y"),
                            (i.mouseX = -1),
                            (i.mouseY = -1);
                    }),
                    (this.onWindowResize = function () {
                        (i.scrollbarWidth = i.getScrollbarWidth()), i.hideNativeScrollbar();
                    }),
                    (this.hideScrollbars = function () {
                        (i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
                            (i.axis.y.track.rect = i.axis.y.track.el.getBoundingClientRect()),
                            i.isWithinBounds(i.axis.y.track.rect) || (i.axis.y.scrollbar.el.classList.remove(i.classNames.visible), (i.axis.y.isVisible = !1)),
                            i.isWithinBounds(i.axis.x.track.rect) || (i.axis.x.scrollbar.el.classList.remove(i.classNames.visible), (i.axis.x.isVisible = !1));
                    }),
                    (this.onPointerEvent = function (e) {
                        var t, n;
                        (i.axis.x.track.rect = i.axis.x.track.el.getBoundingClientRect()),
                            (i.axis.y.track.rect = i.axis.y.track.el.getBoundingClientRect()),
                            (i.axis.x.isOverflowing || i.axis.x.forceVisible) && (t = i.isWithinBounds(i.axis.x.track.rect)),
                            (i.axis.y.isOverflowing || i.axis.y.forceVisible) && (n = i.isWithinBounds(i.axis.y.track.rect)),
                            (t || n) &&
                                (e.preventDefault(),
                                e.stopPropagation(),
                                "mousedown" === e.type &&
                                    (t && ((i.axis.x.scrollbar.rect = i.axis.x.scrollbar.el.getBoundingClientRect()), i.isWithinBounds(i.axis.x.scrollbar.rect) ? i.onDragStart(e, "x") : i.onTrackClick(e, "x")),
                                    n && ((i.axis.y.scrollbar.rect = i.axis.y.scrollbar.el.getBoundingClientRect()), i.isWithinBounds(i.axis.y.scrollbar.rect) ? i.onDragStart(e, "y") : i.onTrackClick(e, "y"))));
                    }),
                    (this.drag = function (t) {
                        var n = i.axis[i.draggedAxis].track,
                            a = n.rect[i.axis[i.draggedAxis].sizeAttr],
                            r = i.axis[i.draggedAxis].scrollbar,
                            l = i.contentWrapperEl[i.axis[i.draggedAxis].scrollSizeAttr],
                            o = parseInt(i.elStyles[i.axis[i.draggedAxis].sizeAttr], 10);
                        t.preventDefault(), t.stopPropagation();
                        var s = ((("y" === i.draggedAxis ? t.pageY : t.pageX) - n.rect[i.axis[i.draggedAxis].offsetAttr] - i.axis[i.draggedAxis].dragOffset) / (a - r.size)) * (l - o);
                        "x" === i.draggedAxis && ((s = i.isRtl && e.getRtlHelpers().isRtlScrollbarInverted ? s - (a + r.size) : s), (s = i.isRtl && e.getRtlHelpers().isRtlScrollingInverted ? -s : s)),
                            (i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] = s);
                    }),
                    (this.onEndDrag = function (e) {
                        var t = ii(i.el),
                            n = ni(i.el);
                        e.preventDefault(),
                            e.stopPropagation(),
                            i.el.classList.remove(i.classNames.dragging),
                            t.removeEventListener("mousemove", i.drag, !0),
                            t.removeEventListener("mouseup", i.onEndDrag, !0),
                            (i.removePreventClickId = n.setTimeout(function () {
                                t.removeEventListener("click", i.preventClick, !0), t.removeEventListener("dblclick", i.preventClick, !0), (i.removePreventClickId = null);
                            }));
                    }),
                    (this.preventClick = function (e) {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    (this.el = t),
                    (this.minScrollbarWidth = 20),
                    (this.options = Object.assign({}, e.defaultOptions, {}, n)),
                    (this.classNames = Object.assign({}, e.defaultOptions.classNames, {}, this.options.classNames)),
                    (this.axis = {
                        x: {
                            scrollOffsetAttr: "scrollLeft",
                            sizeAttr: "width",
                            scrollSizeAttr: "scrollWidth",
                            offsetSizeAttr: "offsetWidth",
                            offsetAttr: "left",
                            overflowAttr: "overflowX",
                            dragOffset: 0,
                            isOverflowing: !0,
                            isVisible: !1,
                            forceVisible: !1,
                            track: {},
                            scrollbar: {},
                        },
                        y: {
                            scrollOffsetAttr: "scrollTop",
                            sizeAttr: "height",
                            scrollSizeAttr: "scrollHeight",
                            offsetSizeAttr: "offsetHeight",
                            offsetAttr: "top",
                            overflowAttr: "overflowY",
                            dragOffset: 0,
                            isOverflowing: !0,
                            isVisible: !1,
                            forceVisible: !1,
                            track: {},
                            scrollbar: {},
                        },
                    }),
                    (this.removePreventClickId = null),
                    e.instances.has(this.el) ||
                        ((this.recalculate = Un()(this.recalculate.bind(this), 64)),
                        (this.onMouseMove = Un()(this.onMouseMove.bind(this), 64)),
                        (this.hideScrollbars = Gn()(this.hideScrollbars.bind(this), this.options.timeout)),
                        (this.onWindowResize = Gn()(this.onWindowResize.bind(this), 64, { leading: !0 })),
                        (e.getRtlHelpers = Xn()(e.getRtlHelpers)),
                        this.init());
            }
            (e.getRtlHelpers = function () {
                var t = document.createElement("div");
                t.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
                var n = t.firstElementChild;
                document.body.appendChild(n);
                var i = n.firstElementChild;
                n.scrollLeft = 0;
                var a = e.getOffset(n),
                    r = e.getOffset(i);
                n.scrollLeft = 999;
                var l = e.getOffset(i);
                return { isRtlScrollingInverted: a.left !== r.left && r.left - l.left != 0, isRtlScrollbarInverted: a.left !== r.left };
            }),
                (e.getOffset = function (e) {
                    var t = e.getBoundingClientRect(),
                        n = ii(e),
                        i = ni(e);
                    return { top: t.top + (i.pageYOffset || n.documentElement.scrollTop), left: t.left + (i.pageXOffset || n.documentElement.scrollLeft) };
                });
            var t = e.prototype;
            return (
                (t.init = function () {
                    e.instances.set(this.el, this), Bn.a && (this.initDOM(), (this.scrollbarWidth = this.getScrollbarWidth()), this.recalculate(), this.initListeners());
                }),
                (t.initDOM = function () {
                    var e = this;
                    if (
                        Array.prototype.filter.call(this.el.children, function (t) {
                            return t.classList.contains(e.classNames.wrapper);
                        }).length
                    )
                        (this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper)),
                            (this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper)),
                            (this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl)),
                            (this.offsetEl = this.el.querySelector("." + this.classNames.offset)),
                            (this.maskEl = this.el.querySelector("." + this.classNames.mask)),
                            (this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder)),
                            (this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl)),
                            (this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl)),
                            (this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal)),
                            (this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical));
                    else {
                        for (
                            this.wrapperEl = document.createElement("div"),
                                this.contentWrapperEl = document.createElement("div"),
                                this.offsetEl = document.createElement("div"),
                                this.maskEl = document.createElement("div"),
                                this.contentEl = document.createElement("div"),
                                this.placeholderEl = document.createElement("div"),
                                this.heightAutoObserverWrapperEl = document.createElement("div"),
                                this.heightAutoObserverEl = document.createElement("div"),
                                this.wrapperEl.classList.add(this.classNames.wrapper),
                                this.contentWrapperEl.classList.add(this.classNames.contentWrapper),
                                this.offsetEl.classList.add(this.classNames.offset),
                                this.maskEl.classList.add(this.classNames.mask),
                                this.contentEl.classList.add(this.classNames.contentEl),
                                this.placeholderEl.classList.add(this.classNames.placeholder),
                                this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),
                                this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);
                            this.el.firstChild;

                        )
                            this.contentEl.appendChild(this.el.firstChild);
                        this.contentWrapperEl.appendChild(this.contentEl),
                            this.offsetEl.appendChild(this.contentWrapperEl),
                            this.maskEl.appendChild(this.offsetEl),
                            this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),
                            this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                            this.wrapperEl.appendChild(this.maskEl),
                            this.wrapperEl.appendChild(this.placeholderEl),
                            this.el.appendChild(this.wrapperEl);
                    }
                    if (!this.axis.x.track.el || !this.axis.y.track.el) {
                        var t = document.createElement("div"),
                            n = document.createElement("div");
                        t.classList.add(this.classNames.track),
                            n.classList.add(this.classNames.scrollbar),
                            t.appendChild(n),
                            (this.axis.x.track.el = t.cloneNode(!0)),
                            this.axis.x.track.el.classList.add(this.classNames.horizontal),
                            (this.axis.y.track.el = t.cloneNode(!0)),
                            this.axis.y.track.el.classList.add(this.classNames.vertical),
                            this.el.appendChild(this.axis.x.track.el),
                            this.el.appendChild(this.axis.y.track.el);
                    }
                    (this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar)),
                        (this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar)),
                        this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),
                        this.el.setAttribute("data-simplebar", "init");
                }),
                (t.initListeners = function () {
                    var e = this,
                        t = ni(this.el);
                    this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter),
                        ["mousedown", "click", "dblclick"].forEach(function (t) {
                            e.el.addEventListener(t, e.onPointerEvent, !0);
                        }),
                        ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                            e.el.addEventListener(t, e.onPointerEvent, { capture: !0, passive: !0 });
                        }),
                        this.el.addEventListener("mousemove", this.onMouseMove),
                        this.el.addEventListener("mouseleave", this.onMouseLeave),
                        this.contentWrapperEl.addEventListener("scroll", this.onScroll),
                        t.addEventListener("resize", this.onWindowResize);
                    var n = !1,
                        i = t.ResizeObserver || Kn.a;
                    (this.resizeObserver = new i(function () {
                        n && e.recalculate();
                    })),
                        this.resizeObserver.observe(this.el),
                        this.resizeObserver.observe(this.contentEl),
                        t.requestAnimationFrame(function () {
                            n = !0;
                        }),
                        (this.mutationObserver = new t.MutationObserver(this.recalculate)),
                        this.mutationObserver.observe(this.contentEl, { childList: !0, subtree: !0, characterData: !0 });
                }),
                (t.recalculate = function () {
                    var e = ni(this.el);
                    (this.elStyles = e.getComputedStyle(this.el)), (this.isRtl = "rtl" === this.elStyles.direction);
                    var t = this.contentEl.offsetWidth,
                        n = this.heightAutoObserverEl.offsetHeight <= 1,
                        i = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
                        a = this.contentWrapperEl.offsetWidth,
                        r = this.elStyles.overflowX,
                        l = this.elStyles.overflowY;
                    (this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft),
                        (this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft);
                    var o = this.contentEl.scrollHeight,
                        s = this.contentEl.scrollWidth;
                    (this.contentWrapperEl.style.height = n ? "auto" : "100%"), (this.placeholderEl.style.width = i ? (t || s) + "px" : "auto"), (this.placeholderEl.style.height = o + "px");
                    var d = this.contentWrapperEl.offsetHeight;
                    (this.axis.x.isOverflowing = 0 !== t && s > t),
                        (this.axis.y.isOverflowing = o > d),
                        (this.axis.x.isOverflowing = "hidden" !== r && this.axis.x.isOverflowing),
                        (this.axis.y.isOverflowing = "hidden" !== l && this.axis.y.isOverflowing),
                        (this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible),
                        (this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible),
                        this.hideNativeScrollbar();
                    var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                        c = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                    (this.axis.x.isOverflowing = this.axis.x.isOverflowing && s > a - c),
                        (this.axis.y.isOverflowing = this.axis.y.isOverflowing && o > d - u),
                        (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
                        (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
                        (this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px"),
                        (this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px"),
                        this.positionScrollbar("x"),
                        this.positionScrollbar("y"),
                        this.toggleTrackVisibility("x"),
                        this.toggleTrackVisibility("y");
                }),
                (t.getScrollbarSize = function (e) {
                    if ((void 0 === e && (e = "y"), !this.axis[e].isOverflowing)) return 0;
                    var t,
                        n = this.contentEl[this.axis[e].scrollSizeAttr],
                        i = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
                        a = i / n;
                    return (t = Math.max(~~(a * i), this.options.scrollbarMinSize)), this.options.scrollbarMaxSize && (t = Math.min(t, this.options.scrollbarMaxSize)), t;
                }),
                (t.positionScrollbar = function (t) {
                    if ((void 0 === t && (t = "y"), this.axis[t].isOverflowing)) {
                        var n = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                            i = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                            a = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                            r = this.axis[t].scrollbar,
                            l = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                            o = (l = "x" === t && this.isRtl && e.getRtlHelpers().isRtlScrollingInverted ? -l : l) / (n - a),
                            s = ~~((i - r.size) * o);
                        (s = "x" === t && this.isRtl && e.getRtlHelpers().isRtlScrollbarInverted ? s + (i - r.size) : s), (r.el.style.transform = "x" === t ? "translate3d(" + s + "px, 0, 0)" : "translate3d(0, " + s + "px, 0)");
                    }
                }),
                (t.toggleTrackVisibility = function (e) {
                    void 0 === e && (e = "y");
                    var t = this.axis[e].track.el,
                        n = this.axis[e].scrollbar.el;
                    this.axis[e].isOverflowing || this.axis[e].forceVisible
                        ? ((t.style.visibility = "visible"), (this.contentWrapperEl.style[this.axis[e].overflowAttr] = "scroll"))
                        : ((t.style.visibility = "hidden"), (this.contentWrapperEl.style[this.axis[e].overflowAttr] = "hidden")),
                        this.axis[e].isOverflowing ? (n.style.display = "block") : (n.style.display = "none");
                }),
                (t.hideNativeScrollbar = function () {
                    (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0),
                        (this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0);
                }),
                (t.onMouseMoveForAxis = function (e) {
                    void 0 === e && (e = "y"),
                        (this.axis[e].track.rect = this.axis[e].track.el.getBoundingClientRect()),
                        (this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect()),
                        this.isWithinBounds(this.axis[e].scrollbar.rect) ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover) : this.axis[e].scrollbar.el.classList.remove(this.classNames.hover),
                        this.isWithinBounds(this.axis[e].track.rect) ? (this.showScrollbar(e), this.axis[e].track.el.classList.add(this.classNames.hover)) : this.axis[e].track.el.classList.remove(this.classNames.hover);
                }),
                (t.onMouseLeaveForAxis = function (e) {
                    void 0 === e && (e = "y"), this.axis[e].track.el.classList.remove(this.classNames.hover), this.axis[e].scrollbar.el.classList.remove(this.classNames.hover);
                }),
                (t.showScrollbar = function (e) {
                    void 0 === e && (e = "y");
                    var t = this.axis[e].scrollbar.el;
                    this.axis[e].isVisible || (t.classList.add(this.classNames.visible), (this.axis[e].isVisible = !0)), this.options.autoHide && this.hideScrollbars();
                }),
                (t.onDragStart = function (e, t) {
                    void 0 === t && (t = "y");
                    var n = ii(this.el),
                        i = ni(this.el),
                        a = this.axis[t].scrollbar,
                        r = "y" === t ? e.pageY : e.pageX;
                    (this.axis[t].dragOffset = r - a.rect[this.axis[t].offsetAttr]),
                        (this.draggedAxis = t),
                        this.el.classList.add(this.classNames.dragging),
                        n.addEventListener("mousemove", this.drag, !0),
                        n.addEventListener("mouseup", this.onEndDrag, !0),
                        null === this.removePreventClickId
                            ? (n.addEventListener("click", this.preventClick, !0), n.addEventListener("dblclick", this.preventClick, !0))
                            : (i.clearTimeout(this.removePreventClickId), (this.removePreventClickId = null));
                }),
                (t.onTrackClick = function (e, t) {
                    var n = this;
                    if ((void 0 === t && (t = "y"), this.options.clickOnTrack)) {
                        var i = ni(this.el);
                        this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect();
                        var a = this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],
                            r = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                            l = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                            o = ("y" === t ? this.mouseY - a : this.mouseX - a) < 0 ? -1 : 1,
                            s = -1 === o ? l - r : l + r;
                        !(function e() {
                            var a, r;
                            -1 === o
                                ? l > s && ((l -= 40), n.contentWrapperEl.scrollTo((((a = {})[n.axis[t].offsetAttr] = l), a)), i.requestAnimationFrame(e))
                                : l < s && ((l += 40), n.contentWrapperEl.scrollTo((((r = {})[n.axis[t].offsetAttr] = l), r)), i.requestAnimationFrame(e));
                        })();
                    }
                }),
                (t.getContentElement = function () {
                    return this.contentEl;
                }),
                (t.getScrollElement = function () {
                    return this.contentWrapperEl;
                }),
                (t.getScrollbarWidth = function () {
                    try {
                        return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : ei();
                    } catch (e) {
                        return ei();
                    }
                }),
                (t.removeListeners = function () {
                    var e = this,
                        t = ni(this.el);
                    this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter),
                        ["mousedown", "click", "dblclick"].forEach(function (t) {
                            e.el.removeEventListener(t, e.onPointerEvent, !0);
                        }),
                        ["touchstart", "touchend", "touchmove"].forEach(function (t) {
                            e.el.removeEventListener(t, e.onPointerEvent, { capture: !0, passive: !0 });
                        }),
                        this.el.removeEventListener("mousemove", this.onMouseMove),
                        this.el.removeEventListener("mouseleave", this.onMouseLeave),
                        this.contentWrapperEl.removeEventListener("scroll", this.onScroll),
                        t.removeEventListener("resize", this.onWindowResize),
                        this.mutationObserver.disconnect(),
                        this.resizeObserver.disconnect(),
                        this.recalculate.cancel(),
                        this.onMouseMove.cancel(),
                        this.hideScrollbars.cancel(),
                        this.onWindowResize.cancel();
                }),
                (t.unMount = function () {
                    this.removeListeners(), e.instances.delete(this.el);
                }),
                (t.isWithinBounds = function (e) {
                    return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height;
                }),
                (t.findChild = function (e, t) {
                    var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
                    return Array.prototype.filter.call(e.children, function (e) {
                        return n.call(e, t);
                    })[0];
                }),
                e
            );
        })();
        (ai.defaultOptions = {
            autoHide: !0,
            forceVisible: !1,
            clickOnTrack: !0,
            classNames: {
                contentEl: "simplebar-content",
                contentWrapper: "simplebar-content-wrapper",
                offset: "simplebar-offset",
                mask: "simplebar-mask",
                wrapper: "simplebar-wrapper",
                placeholder: "simplebar-placeholder",
                scrollbar: "simplebar-scrollbar",
                track: "simplebar-track",
                heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
                heightAutoObserverEl: "simplebar-height-auto-observer",
                visible: "simplebar-visible",
                horizontal: "simplebar-horizontal",
                vertical: "simplebar-vertical",
                hover: "simplebar-hover",
                dragging: "simplebar-dragging",
            },
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            timeout: 1e3,
        }),
            (ai.instances = new WeakMap()),
            (ai.initDOMLoadedElements = function () {
                document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements),
                    window.removeEventListener("load", this.initDOMLoadedElements),
                    Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function (e) {
                        "init" === e.getAttribute("data-simplebar") || ai.instances.has(e) || new ai(e, ti(e.attributes));
                    });
            }),
            (ai.removeObserver = function () {
                this.globalObserver.disconnect();
            }),
            (ai.initHtmlApi = function () {
                (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
                    "undefined" != typeof MutationObserver && ((this.globalObserver = new MutationObserver(ai.handleMutations)), this.globalObserver.observe(document, { childList: !0, subtree: !0 })),
                    "complete" === document.readyState || ("loading" !== document.readyState && !document.documentElement.doScroll)
                        ? window.setTimeout(this.initDOMLoadedElements)
                        : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements));
            }),
            (ai.handleMutations = function (e) {
                e.forEach(function (e) {
                    Array.prototype.forEach.call(e.addedNodes, function (e) {
                        1 === e.nodeType &&
                            (e.hasAttribute("data-simplebar")
                                ? !ai.instances.has(e) && new ai(e, ti(e.attributes))
                                : Array.prototype.forEach.call(e.querySelectorAll("[data-simplebar]"), function (e) {
                                      "init" === e.getAttribute("data-simplebar") || ai.instances.has(e) || new ai(e, ti(e.attributes));
                                  }));
                    }),
                        Array.prototype.forEach.call(e.removedNodes, function (e) {
                            1 === e.nodeType &&
                                (e.hasAttribute('[data-simplebar="init"]')
                                    ? ai.instances.has(e) && ai.instances.get(e).unMount()
                                    : Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'), function (e) {
                                          ai.instances.has(e) && ai.instances.get(e).unMount();
                                      }));
                        });
                });
            }),
            (ai.getOptions = ti),
            Bn.a && ai.initHtmlApi();
        var ri = ai;
        document.addEventListener("DOMContentLoaded", () => {
            if (document.getElementsByClassName("js-simplebar")[0]) {
                new ri(document.getElementsByClassName("js-simplebar")[0]);
                var e = document.getElementsByClassName("sidebar")[0];
                document.getElementsByClassName("sidebar-toggle")[0].addEventListener("click", () => {
                    e.classList.toggle("collapsed"),
                        e.addEventListener("transitionend", () => {
                            window.dispatchEvent(new Event("resize"));
                        });
                });
            }
        });
        var li = n(225),
            oi = n.n(li);
        window.flatpickr = oi.a;
        var si = n(226),
            di = n.n(si);
        window.Chart = di.a;
        n(299), n(300);
    },
]);
