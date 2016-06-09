/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F) {
    'use strict';

    function O(a) {
        return function() {
            var b = arguments[0],
                d;
            d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.5.6/" + (a ? a + "/" : "") + b;
            for (b = 1; b < arguments.length; b++) {
                d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";
                var c = encodeURIComponent,
                    e;
                e = arguments[b];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                d += c(e)
            }
            return Error(d)
        }
    }

    function xa(a) {
        if (null == a || Wa(a)) return !1;
        if (K(a) || I(a) || G && a instanceof G) return !0;
        var b = "length" in Object(a) && a.length;
        return Q(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" == typeof a.item)
    }

    function q(a, b, d) {
        var c, e;
        if (a)
            if (E(a))
                for (c in a) "prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a);
            else if (K(a) || xa(a)) {
            var f = "object" !== typeof a;
            c = 0;
            for (e = a.length; c < e; c++)(f || c in a) && b.call(d, a[c], c, a)
        } else if (a.forEach && a.forEach !== q) a.forEach(b, d, a);
        else if (rc(a))
            for (c in a) b.call(d, a[c], c, a);
        else if ("function" === typeof a.hasOwnProperty)
            for (c in a) a.hasOwnProperty(c) &&
                b.call(d, a[c], c, a);
        else
            for (c in a) sa.call(a, c) && b.call(d, a[c], c, a);
        return a
    }

    function sc(a, b, d) {
        for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++) b.call(d, a[c[e]], c[e]);
        return c
    }

    function tc(a) {
        return function(b, d) {
            a(d, b)
        }
    }

    function Yd() {
        return ++pb
    }

    function Qb(a, b, d) {
        for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
            var g = b[e];
            if (J(g) || E(g))
                for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
                    var m = h[k],
                        n = g[m];
                    d && J(n) ? ha(n) ? a[m] = new Date(n.valueOf()) : Xa(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) :
                        Rb(n) ? a[m] = n.clone() : (J(a[m]) || (a[m] = K(n) ? [] : {}), Qb(a[m], [n], !0)) : a[m] = n
                }
        }
        c ? a.$$hashKey = c : delete a.$$hashKey;
        return a
    }

    function P(a) {
        return Qb(a, ya.call(arguments, 1), !1)
    }

    function Zd(a) {
        return Qb(a, ya.call(arguments, 1), !0)
    }

    function $(a) {
        return parseInt(a, 10)
    }

    function Sb(a, b) {
        return P(Object.create(a), b)
    }

    function C() {}

    function Ya(a) {
        return a
    }

    function ca(a) {
        return function() {
            return a
        }
    }

    function uc(a) {
        return E(a.toString) && a.toString !== ja
    }

    function y(a) {
        return "undefined" === typeof a
    }

    function v(a) {
        return "undefined" !==
            typeof a
    }

    function J(a) {
        return null !== a && "object" === typeof a
    }

    function rc(a) {
        return null !== a && "object" === typeof a && !vc(a)
    }

    function I(a) {
        return "string" === typeof a
    }

    function Q(a) {
        return "number" === typeof a
    }

    function ha(a) {
        return "[object Date]" === ja.call(a)
    }

    function E(a) {
        return "function" === typeof a
    }

    function Xa(a) {
        return "[object RegExp]" === ja.call(a)
    }

    function Wa(a) {
        return a && a.window === a
    }

    function Za(a) {
        return a && a.$evalAsync && a.$watch
    }

    function Ea(a) {
        return "boolean" === typeof a
    }

    function $d(a) {
        return a && Q(a.length) &&
            ae.test(ja.call(a))
    }

    function Rb(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function be(a) {
        var b = {};
        a = a.split(",");
        var d;
        for (d = 0; d < a.length; d++) b[a[d]] = !0;
        return b
    }

    function ta(a) {
        return L(a.nodeName || a[0] && a[0].nodeName)
    }

    function $a(a, b) {
        var d = a.indexOf(b);
        0 <= d && a.splice(d, 1);
        return d
    }

    function oa(a, b) {
        function d(a, b) {
            var d = b.$$hashKey,
                e;
            if (K(a)) {
                e = 0;
                for (var f = a.length; e < f; e++) b.push(c(a[e]))
            } else if (rc(a))
                for (e in a) b[e] = c(a[e]);
            else if (a && "function" === typeof a.hasOwnProperty)
                for (e in a) a.hasOwnProperty(e) &&
                    (b[e] = c(a[e]));
            else
                for (e in a) sa.call(a, e) && (b[e] = c(a[e]));
            d ? b.$$hashKey = d : delete b.$$hashKey;
            return b
        }

        function c(a) {
            if (!J(a)) return a;
            var b = f.indexOf(a);
            if (-1 !== b) return g[b];
            if (Wa(a) || Za(a)) throw za("cpws");
            var b = !1,
                c = e(a);
            void 0 === c && (c = K(a) ? [] : Object.create(vc(a)), b = !0);
            f.push(a);
            g.push(c);
            return b ? d(a, c) : c
        }

        function e(a) {
            switch (ja.call(a)) {
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return new a.constructor(c(a.buffer));
                case "[object ArrayBuffer]":
                    if (!a.slice) {
                        var b = new ArrayBuffer(a.byteLength);
                        (new Uint8Array(b)).set(new Uint8Array(a));
                        return b
                    }
                    return a.slice(0);
                case "[object Boolean]":
                case "[object Number]":
                case "[object String]":
                case "[object Date]":
                    return new a.constructor(a.valueOf());
                case "[object RegExp]":
                    return b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex, b;
                case "[object Blob]":
                    return new a.constructor([a], {
                        type: a.type
                    })
            }
            if (E(a.cloneNode)) return a.cloneNode(!0)
        }
        var f = [],
            g = [];
        if (b) {
            if ($d(b) || "[object ArrayBuffer]" === ja.call(b)) throw za("cpta");
            if (a === b) throw za("cpi");
            K(b) ? b.length = 0 : q(b, function(a, d) {
                "$$hashKey" !== d && delete b[d]
            });
            f.push(a);
            g.push(b);
            return d(a, b)
        }
        return c(a)
    }

    function fa(a, b) {
        if (K(a)) {
            b = b || [];
            for (var d = 0, c = a.length; d < c; d++) b[d] = a[d]
        } else if (J(a))
            for (d in b = b || {}, a)
                if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
        return b || a
    }

    function na(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var d = typeof a,
            c;
        if (d == typeof b &&
            "object" == d)
            if (K(a)) {
                if (!K(b)) return !1;
                if ((d = a.length) == b.length) {
                    for (c = 0; c < d; c++)
                        if (!na(a[c], b[c])) return !1;
                    return !0
                }
            } else {
                if (ha(a)) return ha(b) ? na(a.getTime(), b.getTime()) : !1;
                if (Xa(a)) return Xa(b) ? a.toString() == b.toString() : !1;
                if (Za(a) || Za(b) || Wa(a) || Wa(b) || K(b) || ha(b) || Xa(b)) return !1;
                d = S();
                for (c in a)
                    if ("$" !== c.charAt(0) && !E(a[c])) {
                        if (!na(a[c], b[c])) return !1;
                        d[c] = !0
                    }
                for (c in b)
                    if (!(c in d) && "$" !== c.charAt(0) && v(b[c]) && !E(b[c])) return !1;
                return !0
            }
        return !1
    }

    function ab(a, b, d) {
        return a.concat(ya.call(b,
            d))
    }

    function bb(a, b) {
        var d = 2 < arguments.length ? ya.call(arguments, 2) : [];
        return !E(b) || b instanceof RegExp ? b : d.length ? function() {
            return arguments.length ? b.apply(a, ab(d, arguments, 0)) : b.apply(a, d)
        } : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function ce(a, b) {
        var d = b;
        "string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : Wa(b) ? d = "$WINDOW" : b && F.document === b ? d = "$DOCUMENT" : Za(b) && (d = "$SCOPE");
        return d
    }

    function cb(a, b) {
        if (!y(a)) return Q(b) || (b = b ? 2 : null), JSON.stringify(a, ce,
            b)
    }

    function wc(a) {
        return I(a) ? JSON.parse(a) : a
    }

    function xc(a, b) {
        a = a.replace(de, "");
        var d = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6E4;
        return isNaN(d) ? b : d
    }

    function Tb(a, b, d) {
        d = d ? -1 : 1;
        var c = a.getTimezoneOffset();
        b = xc(b, c);
        d *= b - c;
        a = new Date(a.getTime());
        a.setMinutes(a.getMinutes() + d);
        return a
    }

    function ua(a) {
        a = G(a).clone();
        try {
            a.empty()
        } catch (b) {}
        var d = G("<div>").append(a).html();
        try {
            return a[0].nodeType === Na ? L(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + L(b)
            })
        } catch (c) {
            return L(d)
        }
    }

    function yc(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {}
    }

    function zc(a) {
        var b = {};
        q((a || "").split("&"), function(a) {
            var c, e, f;
            a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = yc(e), v(e) && (f = v(f) ? yc(f) : !0, sa.call(b, e) ? K(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f))
        });
        return b
    }

    function Ub(a) {
        var b = [];
        q(a, function(a, c) {
            K(a) ? q(a, function(a) {
                b.push(ia(c, !0) + (!0 === a ? "" : "=" + ia(a, !0)))
            }) : b.push(ia(c, !0) + (!0 === a ? "" : "=" + ia(a, !0)))
        });
        return b.length ? b.join("&") : ""
    }

    function qb(a) {
        return ia(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function ia(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function ee(a, b) {
        var d, c, e = Oa.length;
        for (c = 0; c < e; ++c)
            if (d = Oa[c] + b, I(d = a.getAttribute(d))) return d;
        return null
    }

    function fe(a, b) {
        var d, c, e = {};
        q(Oa, function(b) {
            b += "app";
            !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b))
        });
        q(Oa, function(b) {
            b += "app";
            var e;
            !d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b))
        });
        d && (e.strictDi = null !== ee(d, "strict-di"), b(d, c ? [c] : [], e))
    }

    function Ac(a, b, d) {
        J(d) || (d = {});
        d = P({
            strictDi: !1
        }, d);
        var c = function() {
                a = G(a);
                if (a.injector()) {
                    var c = a[0] === F.document ? "document" : ua(a);
                    throw za("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
                }
                b = b || [];
                b.unshift(["$provide", function(b) {
                    b.value("$rootElement", a)
                }]);
                d.debugInfoEnabled && b.push(["$compileProvider", function(a) {
                    a.debugInfoEnabled(!0)
                }]);
                b.unshift("ng");
                c = db(b, d.strictDi);
                c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                    a.$apply(function() {
                        b.data("$injector", d);
                        c(b)(a)
                    })
                }]);
                return c
            },
            e = /^NG_ENABLE_DEBUG_INFO!/,
            f = /^NG_DEFER_BOOTSTRAP!/;
        F && e.test(F.name) && (d.debugInfoEnabled = !0, F.name = F.name.replace(e, ""));
        if (F && !f.test(F.name)) return c();
        F.name = F.name.replace(f, "");
        da.resumeBootstrap = function(a) {
            q(a, function(a) {
                b.push(a)
            });
            return c()
        };
        E(da.resumeDeferredBootstrap) && da.resumeDeferredBootstrap()
    }

    function ge() {
        F.name =
            "NG_ENABLE_DEBUG_INFO!" + F.name;
        F.location.reload()
    }

    function he(a) {
        a = da.element(a).injector();
        if (!a) throw za("test");
        return a.get("$$testability")
    }

    function Bc(a, b) {
        b = b || "_";
        return a.replace(ie, function(a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function je() {
        var a;
        if (!Cc) {
            var b = rb();
            (Y = y(b) ? F.jQuery : b ? F[b] : void 0) && Y.fn.on ? (G = Y, P(Y.fn, {
                scope: Pa.scope,
                isolateScope: Pa.isolateScope,
                controller: Pa.controller,
                injector: Pa.injector,
                inheritedData: Pa.inheritedData
            }), a = Y.cleanData, Y.cleanData = function(b) {
                for (var c,
                        e = 0, f; null != (f = b[e]); e++)(c = Y._data(f, "events")) && c.$destroy && Y(f).triggerHandler("$destroy");
                a(b)
            }) : G = T;
            da.element = G;
            Cc = !0
        }
    }

    function sb(a, b, d) {
        if (!a) throw za("areq", b || "?", d || "required");
        return a
    }

    function Qa(a, b, d) {
        d && K(a) && (a = a[a.length - 1]);
        sb(E(a), b, "not a function, got " + (a && "object" === typeof a ? a.constructor.name || "Object" : typeof a));
        return a
    }

    function Ra(a, b) {
        if ("hasOwnProperty" === a) throw za("badname", b);
    }

    function Dc(a, b, d) {
        if (!b) return a;
        b = b.split(".");
        for (var c, e = a, f = b.length, g = 0; g < f; g++) c =
            b[g], a && (a = (e = a)[c]);
        return !d && E(a) ? bb(e, a) : a
    }

    function tb(a) {
        for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++)
            if (c || a[e] !== b) c || (c = G(ya.call(a, 0, e))), c.push(b);
        return c || a
    }

    function S() {
        return Object.create(null)
    }

    function ke(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }
        var d = O("$injector"),
            c = O("ng");
        a = b(a, "angular", Object);
        a.$$minErr = a.$$minErr || O;
        return b(a, "module", function() {
            var a = {};
            return function(f, g, h) {
                if ("hasOwnProperty" === f) throw c("badname", "module");
                g && a.hasOwnProperty(f) &&
                    (a[f] = null);
                return b(a, f, function() {
                    function a(b, d, e, f) {
                        f || (f = c);
                        return function() {
                            f[e || "push"]([b, d, arguments]);
                            return U
                        }
                    }

                    function b(a, d) {
                        return function(b, e) {
                            e && E(e) && (e.$$moduleName = f);
                            c.push([a, d, arguments]);
                            return U
                        }
                    }
                    if (!g) throw d("nomod", f);
                    var c = [],
                        e = [],
                        p = [],
                        x = a("$injector", "invoke", "push", e),
                        U = {
                            _invokeQueue: c,
                            _configBlocks: e,
                            _runBlocks: p,
                            requires: g,
                            name: f,
                            provider: b("$provide", "provider"),
                            factory: b("$provide", "factory"),
                            service: b("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide",
                                "constant", "unshift"),
                            decorator: b("$provide", "decorator"),
                            animation: b("$animateProvider", "register"),
                            filter: b("$filterProvider", "register"),
                            controller: b("$controllerProvider", "register"),
                            directive: b("$compileProvider", "directive"),
                            component: b("$compileProvider", "component"),
                            config: x,
                            run: function(a) {
                                p.push(a);
                                return this
                            }
                        };
                    h && x(h);
                    return U
                })
            }
        })
    }

    function le(a) {
        P(a, {
            bootstrap: Ac,
            copy: oa,
            extend: P,
            merge: Zd,
            equals: na,
            element: G,
            forEach: q,
            injector: db,
            noop: C,
            bind: bb,
            toJson: cb,
            fromJson: wc,
            identity: Ya,
            isUndefined: y,
            isDefined: v,
            isString: I,
            isFunction: E,
            isObject: J,
            isNumber: Q,
            isElement: Rb,
            isArray: K,
            version: me,
            isDate: ha,
            lowercase: L,
            uppercase: ub,
            callbacks: {
                counter: 0
            },
            getTestability: he,
            $$minErr: O,
            $$csp: Fa,
            reloadWithDebugInfo: ge
        });
        Vb = ke(F);
        Vb("ng", ["ngLocale"], ["$provide", function(a) {
            a.provider({
                $$sanitizeUri: ne
            });
            a.provider("$compile", Ec).directive({
                a: oe,
                input: Fc,
                textarea: Fc,
                form: pe,
                script: qe,
                select: re,
                style: se,
                option: te,
                ngBind: ue,
                ngBindHtml: ve,
                ngBindTemplate: we,
                ngClass: xe,
                ngClassEven: ye,
                ngClassOdd: ze,
                ngCloak: Ae,
                ngController: Be,
                ngForm: Ce,
                ngHide: De,
                ngIf: Ee,
                ngInclude: Fe,
                ngInit: Ge,
                ngNonBindable: He,
                ngPluralize: Ie,
                ngRepeat: Je,
                ngShow: Ke,
                ngStyle: Le,
                ngSwitch: Me,
                ngSwitchWhen: Ne,
                ngSwitchDefault: Oe,
                ngOptions: Pe,
                ngTransclude: Qe,
                ngModel: Re,
                ngList: Se,
                ngChange: Te,
                pattern: Gc,
                ngPattern: Gc,
                required: Hc,
                ngRequired: Hc,
                minlength: Ic,
                ngMinlength: Ic,
                maxlength: Jc,
                ngMaxlength: Jc,
                ngValue: Ue,
                ngModelOptions: Ve
            }).directive({
                ngInclude: We
            }).directive(vb).directive(Kc);
            a.provider({
                $anchorScroll: Xe,
                $animate: Ye,
                $animateCss: Ze,
                $$animateJs: $e,
                $$animateQueue: af,
                $$AnimateRunner: bf,
                $$animateAsyncRun: cf,
                $browser: df,
                $cacheFactory: ef,
                $controller: ff,
                $document: gf,
                $exceptionHandler: hf,
                $filter: Lc,
                $$forceReflow: jf,
                $interpolate: kf,
                $interval: lf,
                $http: mf,
                $httpParamSerializer: nf,
                $httpParamSerializerJQLike: of,
                $httpBackend: pf,
                $xhrFactory: qf,
                $location: rf,
                $log: sf,
                $parse: tf,
                $rootScope: uf,
                $q: vf,
                $$q: wf,
                $sce: xf,
                $sceDelegate: yf,
                $sniffer: zf,
                $templateCache: Af,
                $templateRequest: Bf,
                $$testability: Cf,
                $timeout: Df,
                $window: Ef,
                $$rAF: Ff,
                $$jqLite: Gf,
                $$HashMap: Hf,
                $$cookieReader: If
            })
        }])
    }

    function eb(a) {
        return a.replace(Jf,
            function(a, d, c, e) {
                return e ? c.toUpperCase() : c
            }).replace(Kf, "Moz$1")
    }

    function Mc(a) {
        a = a.nodeType;
        return 1 === a || !a || 9 === a
    }

    function Nc(a, b) {
        var d, c, e = b.createDocumentFragment(),
            f = [];
        if (Wb.test(a)) {
            d = d || e.appendChild(b.createElement("div"));
            c = (Lf.exec(a) || ["", ""])[1].toLowerCase();
            c = ga[c] || ga._default;
            d.innerHTML = c[1] + a.replace(Mf, "<$1></$2>") + c[2];
            for (c = c[0]; c--;) d = d.lastChild;
            f = ab(f, d.childNodes);
            d = e.firstChild;
            d.textContent = ""
        } else f.push(b.createTextNode(a));
        e.textContent = "";
        e.innerHTML = "";
        q(f, function(a) {
            e.appendChild(a)
        });
        return e
    }

    function Oc(a, b) {
        var d = a.parentNode;
        d && d.replaceChild(b, a);
        b.appendChild(a)
    }

    function T(a) {
        if (a instanceof T) return a;
        var b;
        I(a) && (a = V(a), b = !0);
        if (!(this instanceof T)) {
            if (b && "<" != a.charAt(0)) throw Xb("nosel");
            return new T(a)
        }
        if (b) {
            b = F.document;
            var d;
            a = (d = Nf.exec(a)) ? [b.createElement(d[1])] : (d = Nc(a, b)) ? d.childNodes : []
        }
        Pc(this, a)
    }

    function Yb(a) {
        return a.cloneNode(!0)
    }

    function wb(a, b) {
        b || fb(a);
        if (a.querySelectorAll)
            for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++) fb(d[c])
    }

    function Qc(a,
        b, d, c) {
        if (v(c)) throw Xb("offargs");
        var e = (c = xb(a)) && c.events,
            f = c && c.handle;
        if (f)
            if (b) {
                var g = function(b) {
                    var c = e[b];
                    v(d) && $a(c || [], d);
                    v(d) && c && 0 < c.length || (a.removeEventListener(b, f, !1), delete e[b])
                };
                q(b.split(" "), function(a) {
                    g(a);
                    yb[a] && g(yb[a])
                })
            } else
                for (b in e) "$destroy" !== b && a.removeEventListener(b, f, !1), delete e[b]
    }

    function fb(a, b) {
        var d = a.ng339,
            c = d && gb[d];
        c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), Qc(a)), delete gb[d], a.ng339 = void 0))
    }

    function xb(a, b) {
        var d =
            a.ng339,
            d = d && gb[d];
        b && !d && (a.ng339 = d = ++Of, d = gb[d] = {
            events: {},
            data: {},
            handle: void 0
        });
        return d
    }

    function Zb(a, b, d) {
        if (Mc(a)) {
            var c = v(d),
                e = !c && b && !J(b),
                f = !b;
            a = (a = xb(a, !e)) && a.data;
            if (c) a[b] = d;
            else {
                if (f) return a;
                if (e) return a && a[b];
                P(a, b)
            }
        }
    }

    function zb(a, b) {
        return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1
    }

    function Ab(a, b) {
        b && a.setAttribute && q(b.split(" "), function(b) {
            a.setAttribute("class", V((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g,
                " ").replace(" " + V(b) + " ", " ")))
        })
    }

    function Bb(a, b) {
        if (b && a.setAttribute) {
            var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            q(b.split(" "), function(a) {
                a = V(a); - 1 === d.indexOf(" " + a + " ") && (d += a + " ")
            });
            a.setAttribute("class", V(d))
        }
    }

    function Pc(a, b) {
        if (b)
            if (b.nodeType) a[a.length++] = b;
            else {
                var d = b.length;
                if ("number" === typeof d && b.window !== b) {
                    if (d)
                        for (var c = 0; c < d; c++) a[a.length++] = b[c]
                } else a[a.length++] = b
            }
    }

    function Rc(a, b) {
        return Cb(a, "$" + (b || "ngController") + "Controller")
    }

    function Cb(a,
        b, d) {
        9 == a.nodeType && (a = a.documentElement);
        for (b = K(b) ? b : [b]; a;) {
            for (var c = 0, e = b.length; c < e; c++)
                if (v(d = G.data(a, b[c]))) return d;
            a = a.parentNode || 11 === a.nodeType && a.host
        }
    }

    function Sc(a) {
        for (wb(a, !0); a.firstChild;) a.removeChild(a.firstChild)
    }

    function Db(a, b) {
        b || wb(a);
        var d = a.parentNode;
        d && d.removeChild(a)
    }

    function Pf(a, b) {
        b = b || F;
        if ("complete" === b.document.readyState) b.setTimeout(a);
        else G(b).on("load", a)
    }

    function Tc(a, b) {
        var d = Eb[b.toLowerCase()];
        return d && Uc[ta(a)] && d
    }

    function Qf(a, b) {
        var d = function(c,
            d) {
            c.isDefaultPrevented = function() {
                return c.defaultPrevented
            };
            var f = b[d || c.type],
                g = f ? f.length : 0;
            if (g) {
                if (y(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function() {
                    return !0 === c.immediatePropagationStopped
                };
                var k = f.specialHandlerWrapper || Rf;
                1 < g && (f = fa(f));
                for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || k(a, c, f[l])
            }
        };
        d.elem =
            a;
        return d
    }

    function Rf(a, b, d) {
        d.call(a, b)
    }

    function Sf(a, b, d) {
        var c = b.relatedTarget;
        c && (c === a || Tf.call(a, c)) || d.call(a, b)
    }

    function Gf() {
        this.$get = function() {
            return P(T, {
                hasClass: function(a, b) {
                    a.attr && (a = a[0]);
                    return zb(a, b)
                },
                addClass: function(a, b) {
                    a.attr && (a = a[0]);
                    return Bb(a, b)
                },
                removeClass: function(a, b) {
                    a.attr && (a = a[0]);
                    return Ab(a, b)
                }
            })
        }
    }

    function Ga(a, b) {
        var d = a && a.$$hashKey;
        if (d) return "function" === typeof d && (d = a.$$hashKey()), d;
        d = typeof a;
        return d = "function" == d || "object" == d && null !== a ? a.$$hashKey =
            d + ":" + (b || Yd)() : d + ":" + a
    }

    function Sa(a, b) {
        if (b) {
            var d = 0;
            this.nextUid = function() {
                return ++d
            }
        }
        q(a, this.put, this)
    }

    function Vc(a) {
        a = (Function.prototype.toString.call(a) + " ").replace(Uf, "");
        return a.match(Vf) || a.match(Wf)
    }

    function Xf(a) {
        return (a = Vc(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function db(a, b) {
        function d(a) {
            return function(b, c) {
                if (J(b)) q(b, tc(a));
                else return a(b, c)
            }
        }

        function c(a, b) {
            Ra(a, "service");
            if (E(b) || K(b)) b = p.instantiate(b);
            if (!b.$get) throw Ha("pget", a);
            return n[a + "Provider"] =
                b
        }

        function e(a, b) {
            return function() {
                var c = z.invoke(b, this);
                if (y(c)) throw Ha("undef", a);
                return c
            }
        }

        function f(a, b, d) {
            return c(a, {
                $get: !1 !== d ? e(a, b) : b
            })
        }

        function g(a) {
            sb(y(a) || K(a), "modulesToLoad", "not an array");
            var b = [],
                c;
            q(a, function(a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b],
                            f = p.get(e[0]);
                        f[e[1]].apply(f, e[2])
                    }
                }
                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        I(a) ? (c = Vb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : E(a) ? b.push(p.invoke(a)) : K(a) ? b.push(p.invoke(a)) :
                            Qa(a, "module")
                    } catch (e) {
                        throw K(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ha("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b
        }

        function h(a, c) {
            function d(b, e) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === k) throw Ha("cdep", b + " <- " + l.join(" <- "));
                    return a[b]
                }
                try {
                    return l.unshift(b), a[b] = k, a[b] = c(b, e)
                } catch (f) {
                    throw a[b] === k && delete a[b], f;
                } finally {
                    l.shift()
                }
            }

            function e(a, c, f) {
                var g = [];
                a = db.$$annotate(a, b, f);
                for (var h = 0, k = a.length; h < k; h++) {
                    var l = a[h];
                    if ("string" !== typeof l) throw Ha("itkn", l);
                    g.push(c && c.hasOwnProperty(l) ? c[l] : d(l, f))
                }
                return g
            }
            return {
                invoke: function(a, b, c, d) {
                    "string" === typeof c && (d = c, c = null);
                    c = e(a, c, d);
                    K(a) && (a = a[a.length - 1]);
                    d = 11 >= Ba ? !1 : "function" === typeof a && /^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a) + " ");
                    return d ? (c.unshift(null), new(Function.prototype.bind.apply(a, c))) : a.apply(b, c)
                },
                instantiate: function(a, b, c) {
                    var d = K(a) ? a[a.length - 1] : a;
                    a = e(a, b, c);
                    a.unshift(null);
                    return new(Function.prototype.bind.apply(d,
                        a))
                },
                get: d,
                annotate: db.$$annotate,
                has: function(b) {
                    return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b)
                }
            }
        }
        b = !0 === b;
        var k = {},
            l = [],
            m = new Sa([], !0),
            n = {
                $provide: {
                    provider: d(c),
                    factory: d(f),
                    service: d(function(a, b) {
                        return f(a, ["$injector", function(a) {
                            return a.instantiate(b)
                        }])
                    }),
                    value: d(function(a, b) {
                        return f(a, ca(b), !1)
                    }),
                    constant: d(function(a, b) {
                        Ra(a, "constant");
                        n[a] = b;
                        x[a] = b
                    }),
                    decorator: function(a, b) {
                        var c = p.get(a + "Provider"),
                            d = c.$get;
                        c.$get = function() {
                            var a = z.invoke(d, c);
                            return z.invoke(b, null, {
                                $delegate: a
                            })
                        }
                    }
                }
            },
            p = n.$injector = h(n, function(a, b) {
                da.isString(b) && l.push(b);
                throw Ha("unpr", l.join(" <- "));
            }),
            x = {},
            U = h(x, function(a, b) {
                var c = p.get(a + "Provider", b);
                return z.invoke(c.$get, c, void 0, a)
            }),
            z = U;
        n.$injectorProvider = {
            $get: ca(U)
        };
        var r = g(a),
            z = U.get("$injector");
        z.strictDi = b;
        q(r, function(a) {
            a && z.invoke(a)
        });
        return z
    }

    function Xe() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function(b, d, c) {
            function e(a) {
                var b = null;
                Array.prototype.some.call(a,
                    function(a) {
                        if ("a" === ta(a)) return b = a, !0
                    });
                return b
            }

            function f(a) {
                if (a) {
                    a.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    E(c) ? c = c() : Rb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : Q(c) || (c = 0);
                    c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c))
                } else b.scrollTo(0, 0)
            }

            function g(a) {
                a = I(a) ? a : d.hash();
                var b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
            }
            var h = b.document;
            a && c.$watch(function() {
                return d.hash()
            }, function(a, b) {
                a ===
                    b && "" === a || Pf(function() {
                        c.$evalAsync(g)
                    })
            });
            return g
        }]
    }

    function hb(a, b) {
        if (!a && !b) return "";
        if (!a) return b;
        if (!b) return a;
        K(a) && (a = a.join(" "));
        K(b) && (b = b.join(" "));
        return a + " " + b
    }

    function Yf(a) {
        I(a) && (a = a.split(" "));
        var b = S();
        q(a, function(a) {
            a.length && (b[a] = !0)
        });
        return b
    }

    function Ia(a) {
        return J(a) ? a : {}
    }

    function Zf(a, b, d, c) {
        function e(a) {
            try {
                a.apply(null, ya.call(arguments, 1))
            } finally {
                if (U--, 0 === U)
                    for (; z.length;) try {
                        z.pop()()
                    } catch (b) {
                        d.error(b)
                    }
            }
        }

        function f() {
            w = null;
            g();
            h()
        }

        function g() {
            r = ka();
            r = y(r) ? null : r;
            na(r, H) && (r = H);
            H = r
        }

        function h() {
            if (u !== k.url() || D !== r) u = k.url(), D = r, q(B, function(a) {
                a(k.url(), r)
            })
        }
        var k = this,
            l = a.location,
            m = a.history,
            n = a.setTimeout,
            p = a.clearTimeout,
            x = {};
        k.isMock = !1;
        var U = 0,
            z = [];
        k.$$completeOutstandingRequest = e;
        k.$$incOutstandingRequestCount = function() {
            U++
        };
        k.notifyWhenNoOutstandingRequests = function(a) {
            0 === U ? a() : z.push(a)
        };
        var r, D, u = l.href,
            t = b.find("base"),
            w = null,
            ka = c.history ? function() {
                try {
                    return m.state
                } catch (a) {}
            } : C;
        g();
        D = r;
        k.url = function(b, d, e) {
            y(e) && (e = null);
            l !== a.location && (l = a.location);
            m !== a.history && (m = a.history);
            if (b) {
                var f = D === e;
                if (u === b && (!c.history || f)) return k;
                var h = u && Ja(u) === Ja(b);
                u = b;
                D = e;
                !c.history || h && f ? (h || (w = b), d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (w = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g(), D = r);
                w && (w = b);
                return k
            }
            return w || l.href.replace(/%27/g, "'")
        };
        k.state = function() {
            return r
        };
        var B = [],
            A = !1,
            H = null;
        k.onUrlChange = function(b) {
            if (!A) {
                if (c.history) G(a).on("popstate", f);
                G(a).on("hashchange",
                    f);
                A = !0
            }
            B.push(b);
            return b
        };
        k.$$applicationDestroyed = function() {
            G(a).off("hashchange popstate", f)
        };
        k.$$checkUrlChange = h;
        k.baseHref = function() {
            var a = t.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        k.defer = function(a, b) {
            var c;
            U++;
            c = n(function() {
                delete x[c];
                e(a)
            }, b || 0);
            x[c] = !0;
            return c
        };
        k.defer.cancel = function(a) {
            return x[a] ? (delete x[a], p(a), e(C), !0) : !1
        }
    }

    function df() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, d, c) {
            return new Zf(a, c, b, d)
        }]
    }

    function ef() {
        this.$get =
            function() {
                function a(a, c) {
                    function e(a) {
                        a != n && (p ? p == a && (p = a.n) : p = a, f(a.n, a.p), f(a, n), n = a, n.n = null)
                    }

                    function f(a, b) {
                        a != b && (a && (a.p = b), b && (b.n = a))
                    }
                    if (a in b) throw O("$cacheFactory")("iid", a);
                    var g = 0,
                        h = P({}, c, {
                            id: a
                        }),
                        k = S(),
                        l = c && c.capacity || Number.MAX_VALUE,
                        m = S(),
                        n = null,
                        p = null;
                    return b[a] = {
                        put: function(a, b) {
                            if (!y(b)) {
                                if (l < Number.MAX_VALUE) {
                                    var c = m[a] || (m[a] = {
                                        key: a
                                    });
                                    e(c)
                                }
                                a in k || g++;
                                k[a] = b;
                                g > l && this.remove(p.key);
                                return b
                            }
                        },
                        get: function(a) {
                            if (l < Number.MAX_VALUE) {
                                var b = m[a];
                                if (!b) return;
                                e(b)
                            }
                            return k[a]
                        },
                        remove: function(a) {
                            if (l < Number.MAX_VALUE) {
                                var b = m[a];
                                if (!b) return;
                                b == n && (n = b.p);
                                b == p && (p = b.n);
                                f(b.n, b.p);
                                delete m[a]
                            }
                            a in k && (delete k[a], g--)
                        },
                        removeAll: function() {
                            k = S();
                            g = 0;
                            m = S();
                            n = p = null
                        },
                        destroy: function() {
                            m = h = k = null;
                            delete b[a]
                        },
                        info: function() {
                            return P({}, h, {
                                size: g
                            })
                        }
                    }
                }
                var b = {};
                a.info = function() {
                    var a = {};
                    q(b, function(b, e) {
                        a[e] = b.info()
                    });
                    return a
                };
                a.get = function(a) {
                    return b[a]
                };
                return a
            }
    }

    function Af() {
        this.$get = ["$cacheFactory", function(a) {
            return a("templates")
        }]
    }

    function Ec(a, b) {
        function d(a,
            b, c) {
            var d = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
                e = S();
            q(a, function(a, f) {
                if (a in n) e[f] = n[a];
                else {
                    var g = a.match(d);
                    if (!g) throw ea("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                    e[f] = {
                        mode: g[1][0],
                        collection: "*" === g[2],
                        optional: "?" === g[3],
                        attrName: g[4] || f
                    };
                    g[4] && (n[a] = e[f])
                }
            });
            return e
        }

        function c(a) {
            var b = a.charAt(0);
            if (!b || b !== L(b)) throw ea("baddir", a);
            if (a !== a.trim()) throw ea("baddir", a);
        }

        function e(a) {
            var b = a.require || a.controller && a.name;
            !K(b) && J(b) && q(b, function(a,
                c) {
                var d = a.match(l);
                a.substring(d[0].length) || (b[c] = d[0] + c)
            });
            return b
        }
        var f = {},
            g = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            h = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            k = be("ngSrc,ngSrcset,src,srcset"),
            l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            m = /^(on[a-z]+|formaction)$/,
            n = S();
        this.directive = function z(b, d) {
            Ra(b, "directive");
            I(b) ? (c(b), sb(d, "directiveFactory"), f.hasOwnProperty(b) || (f[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function(a, c) {
                var d = [];
                q(f[b], function(f, g) {
                    try {
                        var h = a.invoke(f);
                        E(h) ? h = {
                                compile: ca(h)
                            } :
                            !h.compile && h.link && (h.compile = ca(h.link));
                        h.priority = h.priority || 0;
                        h.index = g;
                        h.name = h.name || b;
                        h.require = e(h);
                        h.restrict = h.restrict || "EA";
                        h.$$moduleName = f.$$moduleName;
                        d.push(h)
                    } catch (k) {
                        c(k)
                    }
                });
                return d
            }])), f[b].push(d)) : q(b, tc(z));
            return this
        };
        this.component = function(a, b) {
            function c(a) {
                function e(b) {
                    return E(b) || K(b) ? function(c, d) {
                        return a.invoke(b, this, {
                            $element: c,
                            $attrs: d
                        })
                    } : b
                }
                var f = b.template || b.templateUrl ? b.template : "",
                    g = {
                        controller: d,
                        controllerAs: Wc(b.controller) || b.controllerAs || "$ctrl",
                        template: e(f),
                        templateUrl: e(b.templateUrl),
                        transclude: b.transclude,
                        scope: {},
                        bindToController: b.bindings || {},
                        restrict: "E",
                        require: b.require
                    };
                q(b, function(a, b) {
                    "$" === b.charAt(0) && (g[b] = a)
                });
                return g
            }
            var d = b.controller || function() {};
            q(b, function(a, b) {
                "$" === b.charAt(0) && (c[b] = a, E(d) && (d[b] = a))
            });
            c.$inject = ["$injector"];
            return this.directive(a, c)
        };
        this.aHrefSanitizationWhitelist = function(a) {
            return v(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist =
            function(a) {
                return v(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist()
            };
        var p = !0;
        this.debugInfoEnabled = function(a) {
            return v(a) ? (p = a, this) : p
        };
        var x = 10;
        this.onChangesTtl = function(a) {
            return arguments.length ? (x = a, this) : x
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(a, b, c, e, n, w, ka, B, A, H) {
            function M() {
                try {
                    if (!--oa) throw Y = void 0, ea("infchng", x);
                    ka.$apply(function() {
                        for (var a =
                                0, b = Y.length; a < b; ++a) Y[a]();
                        Y = void 0
                    })
                } finally {
                    oa++
                }
            }

            function Aa(a, b) {
                if (b) {
                    var c = Object.keys(b),
                        d, e, f;
                    d = 0;
                    for (e = c.length; d < e; d++) f = c[d], this[f] = b[f]
                } else this.$attr = {};
                this.$$element = a
            }

            function R(a, b, c) {
                la.innerHTML = "<span " + b + ">";
                b = la.firstChild.attributes;
                var d = b[0];
                b.removeNamedItem(d.name);
                d.value = c;
                a.attributes.setNamedItem(d)
            }

            function N(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {}
            }

            function aa(a, b, c, d, e) {
                a instanceof G || (a = G(a));
                for (var f = /\S+/, g = 0, h = a.length; g < h; g++) {
                    var k = a[g];
                    k.nodeType === Na && k.nodeValue.match(f) &&
                        Oc(k, a[g] = F.document.createElement("span"))
                }
                var l = s(a, b, a, c, d, e);
                aa.$$addScopeClass(a);
                var m = null;
                return function(b, c, d) {
                    sb(b, "scope");
                    e && e.needsNewScope && (b = b.$parent.$new());
                    d = d || {};
                    var f = d.parentBoundTranscludeFn,
                        g = d.transcludeControllers;
                    d = d.futureParentElement;
                    f && f.$$boundTransclude && (f = f.$$boundTransclude);
                    m || (m = (d = d && d[0]) ? "foreignobject" !== ta(d) && ja.call(d).match(/SVG/) ? "svg" : "html" : "html");
                    d = "html" !== m ? G(ba(m, G("<div>").append(a).html())) : c ? Pa.clone.call(a) : a;
                    if (g)
                        for (var h in g) d.data("$" +
                            h + "Controller", g[h].instance);
                    aa.$$addScopeInfo(d, b);
                    c && c(d, b);
                    l && l(b, d, d, f);
                    return d
                }
            }

            function s(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, k, l, m, n, u, r;
                    if (p)
                        for (r = Array(c.length), m = 0; m < h.length; m += 3) f = h[m], r[f] = c[f];
                    else r = c;
                    m = 0;
                    for (n = h.length; m < n;) k = r[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), aa.$$addScopeInfo(G(k), l)) : l = a, u = c.transcludeOnThisElement ? va(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? va(a, b) : null, c(f, l, k, d, u)) : f && f(a, k.childNodes, void 0, e)
                }
                for (var h = [], k, l, m, n, p, u = 0; u <
                    a.length; u++) {
                    k = new Aa;
                    l = $b(a[u], [], k, 0 === u ? d : void 0, e);
                    (f = l.length ? Ta(l, a[u], k, b, c, null, [], [], f) : null) && f.scope && aa.$$addScopeClass(k.$$element);
                    k = f && f.terminal || !(m = a[u].childNodes) || !m.length ? null : s(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                    if (f || k) h.push(u, f, k), n = !0, p = p || f;
                    f = null
                }
                return n ? g : null
            }

            function va(a, b, c) {
                function d(e, f, g, h, k) {
                    e || (e = a.$new(!1, k), e.$$transcluded = !0);
                    return b(e, f, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: g,
                        futureParentElement: h
                    })
                }
                var e = d.$$slots = S(),
                    f;
                for (f in b.$$slots) e[f] = b.$$slots[f] ? va(a, b.$$slots[f], c) : null;
                return d
            }

            function $b(a, b, c, d, e) {
                var f = c.$attr,
                    k;
                switch (a.nodeType) {
                    case 1:
                        Da(b, wa(ta(a)), "E", d, e);
                        for (var l, m, n, p = a.attributes, u = 0, r = p && p.length; u < r; u++) {
                            var B = !1,
                                x = !1;
                            l = p[u];
                            k = l.name;
                            m = V(l.value);
                            l = wa(k);
                            if (n = xa.test(l)) k = k.replace(Xc, "").substr(8).replace(/_(.)/g, function(a, b) {
                                return b.toUpperCase()
                            });
                            (l = l.match(za)) && Q(l[1]) && (B = k, x = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));
                            l = wa(k.toLowerCase());
                            f[l] =
                                k;
                            if (n || !c.hasOwnProperty(l)) c[l] = m, Tc(a, l) && (c[l] = !0);
                            ha(a, b, m, l, n);
                            Da(b, l, "A", d, e, B, x)
                        }
                        a = a.className;
                        J(a) && (a = a.animVal);
                        if (I(a) && "" !== a)
                            for (; k = h.exec(a);) l = wa(k[2]), Da(b, l, "C", d, e) && (c[l] = V(k[3])), a = a.substr(k.index + k[0].length);
                        break;
                    case Na:
                        if (11 === Ba)
                            for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Na;) a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
                        $(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (k = g.exec(a.nodeValue)) l = wa(k[1]), Da(b, l, "M", d, e) && (c[l] = V(k[2]))
                        } catch (A) {}
                }
                b.sort(X);
                return b
            }

            function Yc(a, b, c) {
                var d = [],
                    e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw ea("uterdir", b, c);
                        1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else d.push(a);
                return G(d)
            }

            function O(a, b, c) {
                return function(d, e, f, g, h) {
                    e = Yc(e[0], b, c);
                    return a(d, e, f, g, h)
                }
            }

            function ac(a, b, c, d, e, f) {
                var g;
                return a ? aa(b, c, d, e, f) : function() {
                    g || (g = aa(b, c, d, e, f), b = c = f = null);
                    return g.apply(this, arguments)
                }
            }

            function Ta(a, b, d, e, f, g, h, k, l) {
                function m(a, b, c, d) {
                    if (a) {
                        c &&
                            (a = O(a, c, d));
                        a.require = t.require;
                        a.directiveName = M;
                        if (B === t || t.$$isolateScope) a = fa(a, {
                            isolateScope: !0
                        });
                        h.push(a)
                    }
                    if (b) {
                        c && (b = O(b, c, d));
                        b.require = t.require;
                        b.directiveName = M;
                        if (B === t || t.$$isolateScope) b = fa(b, {
                            isolateScope: !0
                        });
                        k.push(b)
                    }
                }

                function n(a, c, e, f, g) {
                    function l(a, b, c, d) {
                        var e;
                        Za(a) || (d = c, c = b, b = a, a = void 0);
                        w && (e = z);
                        c || (c = w ? D.parent() : D);
                        if (d) {
                            var f = g.$$slots[d];
                            if (f) return f(a, b, e, c, Fb);
                            if (y(f)) throw ea("noslot", d, ua(D));
                        } else return g(a, b, e, c, Fb)
                    }
                    var m, p, A, t, H, z, N, D;
                    b === e ? (f = d, D = d.$$element) :
                        (D = G(e), f = new Aa(D, d));
                    H = c;
                    B ? t = c.$new(!0) : u && (H = c.$parent);
                    g && (N = l, N.$$boundTransclude = g, N.isSlotFilled = function(a) {
                        return !!g.$$slots[a]
                    });
                    r && (z = $f(D, f, N, r, t, c, B));
                    B && (aa.$$addScopeInfo(D, t, !0, !(x && (x === B || x === B.$$originalDirective))), aa.$$addScopeClass(D, !0), t.$$isolateBindings = B.$$isolateBindings, p = ga(c, f, t, t.$$isolateBindings, B), p.removeWatches && t.$on("$destroy", p.removeWatches));
                    for (m in z) {
                        p = r[m];
                        A = z[m];
                        var R = p.$$bindings.bindToController;
                        A.bindingInfo = A.identifier && R ? ga(H, f, A.instance, R, p) : {};
                        var M = A();
                        M !== A.instance && (A.instance = M, D.data("$" + p.name + "Controller", M), A.bindingInfo.removeWatches && A.bindingInfo.removeWatches(), A.bindingInfo = ga(H, f, A.instance, R, p))
                    }
                    q(r, function(a, b) {
                        var c = a.require;
                        a.bindToController && !K(c) && J(c) && P(z[b].instance, ib(b, c, D, z))
                    });
                    q(z, function(a) {
                        var b = a.instance;
                        E(b.$onChanges) && b.$onChanges(a.bindingInfo.initialChanges);
                        E(b.$onInit) && b.$onInit();
                        E(b.$onDestroy) && H.$on("$destroy", function() {
                            b.$onDestroy()
                        })
                    });
                    m = 0;
                    for (p = h.length; m < p; m++) A = h[m], ia(A, A.isolateScope ?
                        t : c, D, f, A.require && ib(A.directiveName, A.require, D, z), N);
                    var Fb = c;
                    B && (B.template || null === B.templateUrl) && (Fb = t);
                    a && a(Fb, e.childNodes, void 0, g);
                    for (m = k.length - 1; 0 <= m; m--) A = k[m], ia(A, A.isolateScope ? t : c, D, f, A.require && ib(A.directiveName, A.require, D, z), N);
                    q(z, function(a) {
                        a = a.instance;
                        E(a.$postLink) && a.$postLink()
                    })
                }
                l = l || {};
                for (var p = -Number.MAX_VALUE, u = l.newScopeDirective, r = l.controllerDirectives, B = l.newIsolateScopeDirective, x = l.templateDirective, A = l.nonTlbTranscludeDirective, H = !1, z = !1, w = l.hasElementTranscludeDirective,
                        N = d.$$element = G(b), t, M, R, ka = e, s, Ca = !1, va = !1, v, C = 0, F = a.length; C < F; C++) {
                    t = a[C];
                    var I = t.$$start,
                        Ta = t.$$end;
                    I && (N = Yc(b, I, Ta));
                    R = void 0;
                    if (p > t.priority) break;
                    if (v = t.scope) t.templateUrl || (J(v) ? (W("new/isolated scope", B || u, t, N), B = t) : W("new/isolated scope", B, t, N)), u = u || t;
                    M = t.name;
                    if (!Ca && (t.replace && (t.templateUrl || t.template) || t.transclude && !t.$$tlb)) {
                        for (v = C + 1; Ca = a[v++];)
                            if (Ca.transclude && !Ca.$$tlb || Ca.replace && (Ca.templateUrl || Ca.template)) {
                                va = !0;
                                break
                            }
                        Ca = !0
                    }!t.templateUrl && t.controller && (v = t.controller,
                        r = r || S(), W("'" + M + "' controller", r[M], t, N), r[M] = t);
                    if (v = t.transclude)
                        if (H = !0, t.$$tlb || (W("transclusion", A, t, N), A = t), "element" == v) w = !0, p = t.priority, R = N, N = d.$$element = G(aa.$$createComment(M, d[M])), b = N[0], ca(f, ya.call(R, 0), b), R[0].$$parentNode = R[0].parentNode, ka = ac(va, R, e, p, g && g.name, {
                            nonTlbTranscludeDirective: A
                        });
                        else {
                            var L = S();
                            R = G(Yb(b)).contents();
                            if (J(v)) {
                                R = [];
                                var Q = S(),
                                    Da = S();
                                q(v, function(a, b) {
                                    var c = "?" === a.charAt(0);
                                    a = c ? a.substring(1) : a;
                                    Q[a] = b;
                                    L[b] = null;
                                    Da[b] = c
                                });
                                q(N.contents(), function(a) {
                                    var b =
                                        Q[wa(ta(a))];
                                    b ? (Da[b] = !0, L[b] = L[b] || [], L[b].push(a)) : R.push(a)
                                });
                                q(Da, function(a, b) {
                                    if (!a) throw ea("reqslot", b);
                                });
                                for (var X in L) L[X] && (L[X] = ac(va, L[X], e))
                            }
                            N.empty();
                            ka = ac(va, R, e, void 0, void 0, {
                                needsNewScope: t.$$isolateScope || t.$$newScope
                            });
                            ka.$$slots = L
                        }
                    if (t.template)
                        if (z = !0, W("template", x, t, N), x = t, v = E(t.template) ? t.template(N, d) : t.template, v = ra(v), t.replace) {
                            g = t;
                            R = Wb.test(v) ? Zc(ba(t.templateNamespace, V(v))) : [];
                            b = R[0];
                            if (1 != R.length || 1 !== b.nodeType) throw ea("tplrt", M, "");
                            ca(f, N, b);
                            F = {
                                $attr: {}
                            };
                            v =
                                $b(b, [], F);
                            var $ = a.splice(C + 1, a.length - (C + 1));
                            (B || u) && $c(v, B, u);
                            a = a.concat(v).concat($);
                            T(d, F);
                            F = a.length
                        } else N.html(v);
                    if (t.templateUrl) z = !0, W("template", x, t, N), x = t, t.replace && (g = t), n = Z(a.splice(C, a.length - C), N, d, f, H && ka, h, k, {
                        controllerDirectives: r,
                        newScopeDirective: u !== t && u,
                        newIsolateScopeDirective: B,
                        templateDirective: x,
                        nonTlbTranscludeDirective: A
                    }), F = a.length;
                    else if (t.compile) try {
                        s = t.compile(N, d, ka);
                        var Y = t.$$originalDirective || t;
                        E(s) ? m(null, bb(Y, s), I, Ta) : s && m(bb(Y, s.pre), bb(Y, s.post), I, Ta)
                    } catch (da) {
                        c(da,
                            ua(N))
                    }
                    t.terminal && (n.terminal = !0, p = Math.max(p, t.priority))
                }
                n.scope = u && !0 === u.scope;
                n.transcludeOnThisElement = H;
                n.templateOnThisElement = z;
                n.transclude = ka;
                l.hasElementTranscludeDirective = w;
                return n
            }

            function ib(a, b, c, d) {
                var e;
                if (I(b)) {
                    var f = b.match(l);
                    b = b.substring(f[0].length);
                    var g = f[1] || f[3],
                        f = "?" === f[2];
                    "^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;
                    if (!e) {
                        var h = "$" + b + "Controller";
                        e = g ? c.inheritedData(h) : c.data(h)
                    }
                    if (!e && !f) throw ea("ctreq", b, a);
                } else if (K(b))
                    for (e = [], g = 0, f = b.length; g < f; g++) e[g] =
                        ib(a, b[g], c, d);
                else J(b) && (e = {}, q(b, function(b, f) {
                    e[f] = ib(a, b, c, d)
                }));
                return e || null
            }

            function $f(a, b, c, d, e, f, g) {
                var h = S(),
                    k;
                for (k in d) {
                    var l = d[k],
                        m = {
                            $scope: l === g || l.$$isolateScope ? e : f,
                            $element: a,
                            $attrs: b,
                            $transclude: c
                        },
                        n = l.controller;
                    "@" == n && (n = b[l.name]);
                    m = w(n, m, !0, l.controllerAs);
                    h[l.name] = m;
                    a.data("$" + l.name + "Controller", m.instance)
                }
                return h
            }

            function $c(a, b, c) {
                for (var d = 0, e = a.length; d < e; d++) a[d] = Sb(a[d], {
                    $$isolateScope: b,
                    $$newScope: c
                })
            }

            function Da(b, e, g, h, k, l, m) {
                if (e === k) return null;
                k = null;
                if (f.hasOwnProperty(e)) {
                    var n;
                    e = a.get(e + "Directive");
                    for (var p = 0, u = e.length; p < u; p++) try {
                        if (n = e[p], (y(h) || h > n.priority) && -1 != n.restrict.indexOf(g)) {
                            l && (n = Sb(n, {
                                $$start: l,
                                $$end: m
                            }));
                            if (!n.$$bindings) {
                                var r = n,
                                    B = n,
                                    A = n.name,
                                    x = {
                                        isolateScope: null,
                                        bindToController: null
                                    };
                                J(B.scope) && (!0 === B.bindToController ? (x.bindToController = d(B.scope, A, !0), x.isolateScope = {}) : x.isolateScope = d(B.scope, A, !1));
                                J(B.bindToController) && (x.bindToController = d(B.bindToController, A, !0));
                                if (J(x.bindToController)) {
                                    var t = B.controller,
                                        H = B.controllerAs;
                                    if (!t) throw ea("noctrl",
                                        A);
                                    if (!Wc(t, H)) throw ea("noident", A);
                                }
                                var N = r.$$bindings = x;
                                J(N.isolateScope) && (n.$$isolateBindings = N.isolateScope)
                            }
                            b.push(n);
                            k = n
                        }
                    } catch (w) {
                        c(w)
                    }
                }
                return k
            }

            function Q(b) {
                if (f.hasOwnProperty(b))
                    for (var c = a.get(b + "Directive"), d = 0, e = c.length; d < e; d++)
                        if (b = c[d], b.multiElement) return !0;
                return !1
            }

            function T(a, b) {
                var c = b.$attr,
                    d = a.$attr,
                    e = a.$$element;
                q(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                q(b, function(b, f) {
                    "class" == f ? (N(e, b), a["class"] = (a["class"] ?
                        a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function Z(a, b, c, d, f, g, h, k) {
                var l = [],
                    m, n, p = b[0],
                    B = a.shift(),
                    r = Sb(B, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: B
                    }),
                    A = E(B.templateUrl) ? B.templateUrl(b, c) : B.templateUrl,
                    x = B.templateNamespace;
                b.empty();
                e(A).then(function(e) {
                    var u, t;
                    e = ra(e);
                    if (B.replace) {
                        e = Wb.test(e) ? Zc(ba(x, V(e))) : [];
                        u = e[0];
                        if (1 != e.length || 1 !== u.nodeType) throw ea("tplrt",
                            B.name, A);
                        e = {
                            $attr: {}
                        };
                        ca(d, b, u);
                        var H = $b(u, [], e);
                        J(B.scope) && $c(H, !0);
                        a = H.concat(a);
                        T(c, e)
                    } else u = p, b.html(e);
                    a.unshift(r);
                    m = Ta(a, u, c, f, b, B, g, h, k);
                    q(d, function(a, c) {
                        a == u && (d[c] = b[0])
                    });
                    for (n = s(b[0].childNodes, f); l.length;) {
                        e = l.shift();
                        t = l.shift();
                        var z = l.shift(),
                            D = l.shift(),
                            H = b[0];
                        if (!e.$$destroyed) {
                            if (t !== p) {
                                var w = t.className;
                                k.hasElementTranscludeDirective && B.replace || (H = Yb(u));
                                ca(z, G(t), H);
                                N(G(H), w)
                            }
                            t = m.transcludeOnThisElement ? va(e, m.transclude, D) : D;
                            m(n, e, H, d, t)
                        }
                    }
                    l = null
                });
                return function(a, b,
                    c, d, e) {
                    a = e;
                    b.$$destroyed || (l ? l.push(b, c, d, a) : (m.transcludeOnThisElement && (a = va(b, m.transclude, e)), m(n, b, c, d, a)))
                }
            }

            function X(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function W(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" : ""
                }
                if (b) throw ea("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ua(d));
            }

            function $(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0,
                    compile: function(a) {
                        a = a.parent();
                        var b = !!a.length;
                        b && aa.$$addBindingClass(a);
                        return function(a, c) {
                            var e = c.parent();
                            b || aa.$$addBindingClass(e);
                            aa.$$addBindingInfo(e, d.expressions);
                            a.$watch(d, function(a) {
                                c[0].nodeValue = a
                            })
                        }
                    }
                })
            }

            function ba(a, b) {
                a = L(a || "html");
                switch (a) {
                    case "svg":
                    case "math":
                        var c = F.document.createElement("div");
                        c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                        return c.childNodes[0].childNodes;
                    default:
                        return b
                }
            }

            function da(a, b) {
                if ("srcdoc" == b) return B.HTML;
                var c = ta(a);
                if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return B.RESOURCE_URL
            }

            function ha(a,
                c, d, e, f) {
                var g = da(a, e);
                f = k[e] || f;
                var h = b(d, !0, g, f);
                if (h) {
                    if ("multiple" === e && "select" === ta(a)) throw ea("selmulti", ua(a));
                    c.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, c, k) {
                                    c = k.$$observers || (k.$$observers = S());
                                    if (m.test(e)) throw ea("nodomevents");
                                    var l = k[e];
                                    l !== d && (h = l && b(l, !0, g, f), d = l);
                                    h && (k[e] = h(a), (c[e] || (c[e] = [])).$$inter = !0, (k.$$observers && k.$$observers[e].$$scope || a).$watch(h, function(a, b) {
                                        "class" === e && a != b ? k.$updateClass(a, b) : k.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function ca(a, b, c) {
                var d = b[0],
                    e = b.length,
                    f = d.parentNode,
                    g, h;
                if (a)
                    for (g = 0, h = a.length; g < h; g++)
                        if (a[g] == d) {
                            a[g++] = c;
                            h = g + e - 1;
                            for (var k = a.length; g < k; g++, h++) h < k ? a[g] = a[h] : delete a[g];
                            a.length -= e - 1;
                            a.context === d && (a.context = c);
                            break
                        }
                f && f.replaceChild(c, d);
                a = F.document.createDocumentFragment();
                for (g = 0; g < e; g++) a.appendChild(b[g]);
                G.hasData(d) && (G.data(c, G.data(d)), G(d).off("$destroy"));
                G.cleanData(a.querySelectorAll("*"));
                for (g = 1; g < e; g++) delete b[g];
                b[0] = c;
                b.length = 1
            }

            function fa(a, b) {
                return P(function() {
                        return a.apply(null, arguments)
                    },
                    a, b)
            }

            function ia(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g)
                } catch (h) {
                    c(h, ua(d))
                }
            }

            function ga(a, c, d, e, f) {
                function g(b, c, e) {
                    E(d.$onChanges) && c !== e && (Y || (a.$$postDigest(M), Y = []), m || (m = {}, Y.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Gb(e, c))
                }

                function h() {
                    d.$onChanges(m);
                    m = void 0
                }
                var k = [],
                    l = {},
                    m;
                q(e, function(e, h) {
                    var m = e.attrName,
                        p = e.optional,
                        u, B, A, x;
                    switch (e.mode) {
                        case "@":
                            p || sa.call(c, m) || (d[h] = c[m] = void 0);
                            c.$observe(m, function(a) {
                                if (I(a) || Ea(a)) g(h, a, d[h]), d[h] = a
                            });
                            c.$$observers[m].$$scope = a;
                            u = c[m];
                            I(u) ? d[h] =
                                b(u)(a) : Ea(u) && (d[h] = u);
                            l[h] = new Gb(bc, d[h]);
                            break;
                        case "=":
                            if (!sa.call(c, m)) {
                                if (p) break;
                                c[m] = void 0
                            }
                            if (p && !c[m]) break;
                            B = n(c[m]);
                            x = B.literal ? na : function(a, b) {
                                return a === b || a !== a && b !== b
                            };
                            A = B.assign || function() {
                                u = d[h] = B(a);
                                throw ea("nonassign", c[m], m, f.name);
                            };
                            u = d[h] = B(a);
                            p = function(b) {
                                x(b, d[h]) || (x(b, u) ? A(a, b = d[h]) : d[h] = b);
                                return u = b
                            };
                            p.$stateful = !0;
                            p = e.collection ? a.$watchCollection(c[m], p) : a.$watch(n(c[m], p), null, B.literal);
                            k.push(p);
                            break;
                        case "<":
                            if (!sa.call(c, m)) {
                                if (p) break;
                                c[m] = void 0
                            }
                            if (p && !c[m]) break;
                            B = n(c[m]);
                            var H = d[h] = B(a);
                            l[h] = new Gb(bc, d[h]);
                            p = a.$watch(B, function(a, b) {
                                if (b === a) {
                                    if (b === H) return;
                                    b = H
                                }
                                g(h, a, b);
                                d[h] = a
                            }, B.literal);
                            k.push(p);
                            break;
                        case "&":
                            B = c.hasOwnProperty(m) ? n(c[m]) : C;
                            if (B === C && p) break;
                            d[h] = function(b) {
                                return B(a, b)
                            }
                    }
                });
                return {
                    initialChanges: l,
                    removeWatches: k.length && function() {
                        for (var a = 0, b = k.length; a < b; ++a) k[a]()
                    }
                }
            }
            var ma = /^\w/,
                la = F.document.createElement("div"),
                oa = x,
                Y;
            Aa.prototype = {
                $normalize: wa,
                $addClass: function(a) {
                    a && 0 < a.length && A.addClass(this.$$element, a)
                },
                $removeClass: function(a) {
                    a &&
                        0 < a.length && A.removeClass(this.$$element, a)
                },
                $updateClass: function(a, b) {
                    var c = ad(a, b);
                    c && c.length && A.addClass(this.$$element, c);
                    (c = ad(b, a)) && c.length && A.removeClass(this.$$element, c)
                },
                $set: function(a, b, d, e) {
                    var f = Tc(this.$$element[0], a),
                        g = bd[a],
                        h = a;
                    f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);
                    this[a] = b;
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Bc(a, "-"));
                    f = ta(this.$$element);
                    if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a) this[a] = b = H(b, "src" === a);
                    else if ("img" ===
                        f && "srcset" === a && v(b)) {
                        for (var f = "", g = V(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++) var m = 2 * l,
                            f = f + H(V(g[m]), !0),
                            f = f + (" " + V(g[m + 1]));
                        g = V(g[2 * l]).split(/\s/);
                        f += H(V(g[0]), !0);
                        2 === g.length && (f += " " + V(g[1]));
                        this[a] = b = f
                    }!1 !== d && (null === b || y(b) ? this.$$element.removeAttr(e) : ma.test(e) ? this.$$element.attr(e, b) : R(this.$$element[0], e, b));
                    (a = this.$$observers) && q(a[h], function(a) {
                        try {
                            a(b)
                        } catch (d) {
                            c(d)
                        }
                    })
                },
                $observe: function(a, b) {
                    var c = this,
                        d = c.$$observers || (c.$$observers = S()),
                        e = d[a] || (d[a] = []);
                    e.push(b);
                    ka.$evalAsync(function() {
                        e.$$inter || !c.hasOwnProperty(a) || y(c[a]) || b(c[a])
                    });
                    return function() {
                        $a(e, b)
                    }
                }
            };
            var pa = b.startSymbol(),
                qa = b.endSymbol(),
                ra = "{{" == pa && "}}" == qa ? Ya : function(a) {
                    return a.replace(/\{\{/g, pa).replace(/}}/g, qa)
                },
                xa = /^ngAttr[A-Z]/,
                za = /^(.+)Start$/;
            aa.$$addBindingInfo = p ? function(a, b) {
                var c = a.data("$binding") || [];
                K(b) ? c = c.concat(b) : c.push(b);
                a.data("$binding", c)
            } : C;
            aa.$$addBindingClass = p ? function(a) {
                    N(a, "ng-binding")
                } :
                C;
            aa.$$addScopeInfo = p ? function(a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
            } : C;
            aa.$$addScopeClass = p ? function(a, b) {
                N(a, b ? "ng-isolate-scope" : "ng-scope")
            } : C;
            aa.$$createComment = function(a, b) {
                var c = "";
                p && (c = " " + (a || "") + ": ", b && (c += b + " "));
                return F.document.createComment(c)
            };
            return aa
        }]
    }

    function Gb(a, b) {
        this.previousValue = a;
        this.currentValue = b
    }

    function wa(a) {
        return eb(a.replace(Xc, ""))
    }

    function ad(a, b) {
        var d = "",
            c = a.split(/\s+/),
            e = b.split(/\s+/),
            f = 0;
        a: for (; f < c.length; f++) {
            for (var g =
                    c[f], h = 0; h < e.length; h++)
                if (g == e[h]) continue a;
            d += (0 < d.length ? " " : "") + g
        }
        return d
    }

    function Zc(a) {
        a = G(a);
        var b = a.length;
        if (1 >= b) return a;
        for (; b--;) 8 === a[b].nodeType && ag.call(a, b, 1);
        return a
    }

    function Wc(a, b) {
        if (b && I(b)) return b;
        if (I(a)) {
            var d = cd.exec(a);
            if (d) return d[3]
        }
    }

    function ff() {
        var a = {},
            b = !1;
        this.has = function(b) {
            return a.hasOwnProperty(b)
        };
        this.register = function(b, c) {
            Ra(b, "controller");
            J(b) ? P(a, b) : a[b] = c
        };
        this.allowGlobals = function() {
            b = !0
        };
        this.$get = ["$injector", "$window", function(d, c) {
            function e(a,
                b, c, d) {
                if (!a || !J(a.$scope)) throw O("$controller")("noscp", d, b);
                a.$scope[b] = c
            }
            return function(f, g, h, k) {
                var l, m, n;
                h = !0 === h;
                k && I(k) && (n = k);
                if (I(f)) {
                    k = f.match(cd);
                    if (!k) throw bg("ctrlfmt", f);
                    m = k[1];
                    n = n || k[3];
                    f = a.hasOwnProperty(m) ? a[m] : Dc(g.$scope, m, !0) || (b ? Dc(c, m, !0) : void 0);
                    Qa(f, m, !0)
                }
                if (h) return h = (K(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), n && e(g, n, l, m || f.name), P(function() {
                    var a = d.invoke(f, l, g, m);
                    a !== l && (J(a) || E(a)) && (l = a, n && e(g, n, l, m || f.name));
                    return l
                }, {
                    instance: l,
                    identifier: n
                });
                l =
                    d.instantiate(f, g, m);
                n && e(g, n, l, m || f.name);
                return l
            }
        }]
    }

    function gf() {
        this.$get = ["$window", function(a) {
            return G(a.document)
        }]
    }

    function hf() {
        this.$get = ["$log", function(a) {
            return function(b, d) {
                a.error.apply(a, arguments)
            }
        }]
    }

    function cc(a) {
        return J(a) ? ha(a) ? a.toISOString() : cb(a) : a
    }

    function nf() {
        this.$get = function() {
            return function(a) {
                if (!a) return "";
                var b = [];
                sc(a, function(a, c) {
                    null === a || y(a) || (K(a) ? q(a, function(a) {
                        b.push(ia(c) + "=" + ia(cc(a)))
                    }) : b.push(ia(c) + "=" + ia(cc(a))))
                });
                return b.join("&")
            }
        }
    }

    function of() {
        this.$get =
            function() {
                return function(a) {
                    function b(a, e, f) {
                        null === a || y(a) || (K(a) ? q(a, function(a, c) {
                            b(a, e + "[" + (J(a) ? c : "") + "]")
                        }) : J(a) && !ha(a) ? sc(a, function(a, c) {
                            b(a, e + (f ? "" : "[") + c + (f ? "" : "]"))
                        }) : d.push(ia(e) + "=" + ia(cc(a))))
                    }
                    if (!a) return "";
                    var d = [];
                    b(a, "", !0);
                    return d.join("&")
                }
            }
    }

    function dc(a, b) {
        if (I(a)) {
            var d = a.replace(cg, "").trim();
            if (d) {
                var c = b("Content-Type");
                (c = c && 0 === c.indexOf(dd)) || (c = (c = d.match(dg)) && eg[c[0]].test(d));
                c && (a = wc(d))
            }
        }
        return a
    }

    function ed(a) {
        var b = S(),
            d;
        I(a) ? q(a.split("\n"), function(a) {
            d =
                a.indexOf(":");
            var e = L(V(a.substr(0, d)));
            a = V(a.substr(d + 1));
            e && (b[e] = b[e] ? b[e] + ", " + a : a)
        }) : J(a) && q(a, function(a, d) {
            var f = L(d),
                g = V(a);
            f && (b[f] = b[f] ? b[f] + ", " + g : g)
        });
        return b
    }

    function fd(a) {
        var b;
        return function(d) {
            b || (b = ed(a));
            return d ? (d = b[L(d)], void 0 === d && (d = null), d) : b
        }
    }

    function gd(a, b, d, c) {
        if (E(c)) return c(a, b, d);
        q(c, function(c) {
            a = c(a, b, d)
        });
        return a
    }

    function mf() {
        var a = this.defaults = {
                transformResponse: [dc],
                transformRequest: [function(a) {
                    return J(a) && "[object File]" !== ja.call(a) && "[object Blob]" !==
                        ja.call(a) && "[object FormData]" !== ja.call(a) ? cb(a) : a
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: fa(ec),
                    put: fa(ec),
                    patch: fa(ec)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer"
            },
            b = !1;
        this.useApplyAsync = function(a) {
            return v(a) ? (b = !!a, this) : b
        };
        var d = !0;
        this.useLegacyPromiseExtensions = function(a) {
            return v(a) ? (d = !!a, this) : d
        };
        var c = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector",
            function(e, f, g, h, k, l) {
                function m(b) {
                    function c(a) {
                        var b = P({}, a);
                        b.data = gd(a.data, a.headers, a.status, f.transformResponse);
                        a = a.status;
                        return 200 <= a && 300 > a ? b : k.reject(b)
                    }

                    function e(a, b) {
                        var c, d = {};
                        q(a, function(a, e) {
                            E(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a
                        });
                        return d
                    }
                    if (!J(b)) throw O("$http")("badreq", b);
                    if (!I(b.url)) throw O("$http")("badreq", b.url);
                    var f = P({
                        method: "get",
                        transformRequest: a.transformRequest,
                        transformResponse: a.transformResponse,
                        paramSerializer: a.paramSerializer
                    }, b);
                    f.headers = function(b) {
                        var c =
                            a.headers,
                            d = P({}, b.headers),
                            f, g, h, c = P({}, c.common, c[L(b.method)]);
                        a: for (f in c) {
                            g = L(f);
                            for (h in d)
                                if (L(h) === g) continue a;
                            d[f] = c[f]
                        }
                        return e(d, fa(b))
                    }(b);
                    f.method = ub(f.method);
                    f.paramSerializer = I(f.paramSerializer) ? l.get(f.paramSerializer) : f.paramSerializer;
                    var g = [function(b) {
                            var d = b.headers,
                                e = gd(b.data, fd(d), void 0, b.transformRequest);
                            y(e) && q(d, function(a, b) {
                                "content-type" === L(b) && delete d[b]
                            });
                            y(b.withCredentials) && !y(a.withCredentials) && (b.withCredentials = a.withCredentials);
                            return n(b, e).then(c,
                                c)
                        }, void 0],
                        h = k.when(f);
                    for (q(U, function(a) {
                            (a.request || a.requestError) && g.unshift(a.request, a.requestError);
                            (a.response || a.responseError) && g.push(a.response, a.responseError)
                        }); g.length;) {
                        b = g.shift();
                        var m = g.shift(),
                            h = h.then(b, m)
                    }
                    d ? (h.success = function(a) {
                        Qa(a, "fn");
                        h.then(function(b) {
                            a(b.data, b.status, b.headers, f)
                        });
                        return h
                    }, h.error = function(a) {
                        Qa(a, "fn");
                        h.then(null, function(b) {
                            a(b.data, b.status, b.headers, f)
                        });
                        return h
                    }) : (h.success = hd("success"), h.error = hd("error"));
                    return h
                }

                function n(c, d) {
                    function g(a) {
                        if (a) {
                            var c = {};
                            q(a, function(a, d) {
                                c[d] = function(c) {
                                    function d() {
                                        a(c)
                                    }
                                    b ? h.$applyAsync(d) : h.$$phase ? d() : h.$apply(d)
                                }
                            });
                            return c
                        }
                    }

                    function l(a, c, d, e) {
                        function f() {
                            n(c, a, d, e)
                        }
                        H && (200 <= a && 300 > a ? H.put(R, [a, c, ed(d), e]) : H.remove(R));
                        b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply())
                    }

                    function n(a, b, d, e) {
                        b = -1 <= b ? b : 0;
                        (200 <= b && 300 > b ? B.resolve : B.reject)({
                            data: a,
                            status: b,
                            headers: fd(d),
                            config: c,
                            statusText: e
                        })
                    }

                    function w(a) {
                        n(a.data, a.status, fa(a.headers()), a.statusText)
                    }

                    function U() {
                        var a = m.pendingRequests.indexOf(c); - 1 !== a && m.pendingRequests.splice(a,
                            1)
                    }
                    var B = k.defer(),
                        A = B.promise,
                        H, M, Aa = c.headers,
                        R = p(c.url, c.paramSerializer(c.params));
                    m.pendingRequests.push(c);
                    A.then(U, U);
                    !c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (H = J(c.cache) ? c.cache : J(a.cache) ? a.cache : x);
                    H && (M = H.get(R), v(M) ? M && E(M.then) ? M.then(w, w) : K(M) ? n(M[1], M[0], fa(M[2]), M[3]) : n(M, 200, {}, "OK") : H.put(R, A));
                    y(M) && ((M = id(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (Aa[c.xsrfHeaderName || a.xsrfHeaderName] = M), e(c.method, R, d, l, Aa, c.timeout, c.withCredentials,
                        c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));
                    return A
                }

                function p(a, b) {
                    0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);
                    return a
                }
                var x = g("$http");
                a.paramSerializer = I(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
                var U = [];
                q(c, function(a) {
                    U.unshift(I(a) ? l.get(a) : l.invoke(a))
                });
                m.pendingRequests = [];
                (function(a) {
                    q(arguments, function(a) {
                        m[a] = function(b, c) {
                            return m(P({}, c || {}, {
                                method: a,
                                url: b
                            }))
                        }
                    })
                })("get", "delete", "head", "jsonp");
                (function(a) {
                    q(arguments, function(a) {
                        m[a] = function(b,
                            c, d) {
                            return m(P({}, d || {}, {
                                method: a,
                                url: b,
                                data: c
                            }))
                        }
                    })
                })("post", "put", "patch");
                m.defaults = a;
                return m
            }
        ]
    }

    function qf() {
        this.$get = function() {
            return function() {
                return new F.XMLHttpRequest
            }
        }
    }

    function pf() {
        this.$get = ["$browser", "$window", "$document", "$xhrFactory", function(a, b, d, c) {
            return fg(a, c, a.defer, b.angular.callbacks, d[0])
        }]
    }

    function fg(a, b, d, c, e) {
        function f(a, b, d) {
            var f = e.createElement("script"),
                m = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            m = function(a) {
                f.removeEventListener("load", m, !1);
                f.removeEventListener("error",
                    m, !1);
                e.body.removeChild(f);
                f = null;
                var g = -1,
                    x = "unknown";
                a && ("load" !== a.type || c[b].called || (a = {
                    type: "error"
                }), x = a.type, g = "error" === a.type ? 404 : 200);
                d && d(g, x)
            };
            f.addEventListener("load", m, !1);
            f.addEventListener("error", m, !1);
            e.body.appendChild(f);
            return m
        }
        return function(e, h, k, l, m, n, p, x, U, z) {
            function r() {
                t && t();
                w && w.abort()
            }

            function D(b, c, e, f, g) {
                v(B) && d.cancel(B);
                t = w = null;
                b(c, e, f, g);
                a.$$completeOutstandingRequest(C)
            }
            a.$$incOutstandingRequestCount();
            h = h || a.url();
            if ("jsonp" == L(e)) {
                var u = "_" + (c.counter++).toString(36);
                c[u] = function(a) {
                    c[u].data = a;
                    c[u].called = !0
                };
                var t = f(h.replace("JSON_CALLBACK", "angular.callbacks." + u), u, function(a, b) {
                    D(l, a, c[u].data, "", b);
                    c[u] = C
                })
            } else {
                var w = b(e, h);
                w.open(e, h, !0);
                q(m, function(a, b) {
                    v(a) && w.setRequestHeader(b, a)
                });
                w.onload = function() {
                    var a = w.statusText || "",
                        b = "response" in w ? w.response : w.responseText,
                        c = 1223 === w.status ? 204 : w.status;
                    0 === c && (c = b ? 200 : "file" == pa(h).protocol ? 404 : 0);
                    D(l, c, b, w.getAllResponseHeaders(), a)
                };
                e = function() {
                    D(l, -1, null, null, "")
                };
                w.onerror = e;
                w.onabort = e;
                q(U, function(a,
                    b) {
                    w.addEventListener(b, a)
                });
                q(z, function(a, b) {
                    w.upload.addEventListener(b, a)
                });
                p && (w.withCredentials = !0);
                if (x) try {
                    w.responseType = x
                } catch (ka) {
                    if ("json" !== x) throw ka;
                }
                w.send(y(k) ? null : k)
            }
            if (0 < n) var B = d(r, n);
            else n && E(n.then) && n.then(r)
        }
    }

    function kf() {
        var a = "{{",
            b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a
        };
        this.endSymbol = function(a) {
            return a ? (b = a, this) : b
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function(d, c, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(c) {
                return c.replace(n, a).replace(p,
                    b)
            }

            function h(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    e();
                    return d(a)
                }, b, c)
            }

            function k(f, k, n, p) {
                function D(a) {
                    try {
                        var b = a;
                        a = n ? e.getTrusted(n, b) : e.valueOf(b);
                        var d;
                        if (p && !v(a)) d = a;
                        else if (null == a) d = "";
                        else {
                            switch (typeof a) {
                                case "string":
                                    break;
                                case "number":
                                    a = "" + a;
                                    break;
                                default:
                                    a = cb(a)
                            }
                            d = a
                        }
                        return d
                    } catch (g) {
                        c(Ka.interr(f, g))
                    }
                }
                if (!f.length || -1 === f.indexOf(a)) {
                    var u;
                    k || (k = g(f), u = ca(k), u.exp = f, u.expressions = [], u.$$watchDelegate = h);
                    return u
                }
                p = !!p;
                var t, w, q = 0,
                    B = [],
                    A = [];
                u = f.length;
                for (var H = [], M = []; q <
                    u;)
                    if (-1 != (t = f.indexOf(a, q)) && -1 != (w = f.indexOf(b, t + l))) q !== t && H.push(g(f.substring(q, t))), q = f.substring(t + l, w), B.push(q), A.push(d(q, D)), q = w + m, M.push(H.length), H.push("");
                    else {
                        q !== u && H.push(g(f.substring(q)));
                        break
                    }
                n && 1 < H.length && Ka.throwNoconcat(f);
                if (!k || B.length) {
                    var Aa = function(a) {
                        for (var b = 0, c = B.length; b < c; b++) {
                            if (p && y(a[b])) return;
                            H[M[b]] = a[b]
                        }
                        return H.join("")
                    };
                    return P(function(a) {
                        var b = 0,
                            d = B.length,
                            e = Array(d);
                        try {
                            for (; b < d; b++) e[b] = A[b](a);
                            return Aa(e)
                        } catch (g) {
                            c(Ka.interr(f, g))
                        }
                    }, {
                        exp: f,
                        expressions: B,
                        $$watchDelegate: function(a, b) {
                            var c;
                            return a.$watchGroup(A, function(d, e) {
                                var f = Aa(d);
                                E(b) && b.call(this, f, d !== e ? c : f, a);
                                c = f
                            })
                        }
                    })
                }
            }
            var l = a.length,
                m = b.length,
                n = new RegExp(a.replace(/./g, f), "g"),
                p = new RegExp(b.replace(/./g, f), "g");
            k.startSymbol = function() {
                return a
            };
            k.endSymbol = function() {
                return b
            };
            return k
        }]
    }

    function lf() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function(a, b, d, c, e) {
            function f(f, k, l, m) {
                function n() {
                    p ? f.apply(null, x) : f(r)
                }
                var p = 4 < arguments.length,
                    x = p ? ya.call(arguments, 4) : [],
                    q = b.setInterval,
                    z = b.clearInterval,
                    r = 0,
                    D = v(m) && !m,
                    u = (D ? c : d).defer(),
                    t = u.promise;
                l = v(l) ? l : 0;
                t.$$intervalId = q(function() {
                    D ? e.defer(n) : a.$evalAsync(n);
                    u.notify(r++);
                    0 < l && r >= l && (u.resolve(r), z(t.$$intervalId), delete g[t.$$intervalId]);
                    D || a.$apply()
                }, k);
                g[t.$$intervalId] = u;
                return t
            }
            var g = {};
            f.cancel = function(a) {
                return a && a.$$intervalId in g ? (g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1
            };
            return f
        }]
    }

    function fc(a) {
        a = a.split("/");
        for (var b = a.length; b--;) a[b] =
            qb(a[b]);
        return a.join("/")
    }

    function jd(a, b) {
        var d = pa(a);
        b.$$protocol = d.protocol;
        b.$$host = d.hostname;
        b.$$port = $(d.port) || gg[d.protocol] || null
    }

    function kd(a, b) {
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var c = pa(a);
        b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);
        b.$$search = zc(c.search);
        b.$$hash = decodeURIComponent(c.hash);
        b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function la(a, b) {
        if (0 === b.lastIndexOf(a, 0)) return b.substr(a.length)
    }

    function Ja(a) {
        var b =
            a.indexOf("#");
        return -1 == b ? a : a.substr(0, b)
    }

    function jb(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }

    function gc(a, b, d) {
        this.$$html5 = !0;
        d = d || "";
        jd(a, this);
        this.$$parse = function(a) {
            var d = la(b, a);
            if (!I(d)) throw Hb("ipthprfx", a, b);
            kd(d, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function() {
            var a = Ub(this.$$search),
                d = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = fc(this.$$path) + (a ? "?" + a : "") + d;
            this.$$absUrl = b + this.$$url.substr(1)
        };
        this.$$parseLinkUrl = function(c, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            v(f = la(a, c)) ? (g = f, g = v(f = la(d, f)) ? b + (la("/", f) || f) : a + g) : v(f = la(b, c)) ? g = b + f : b == c + "/" && (g = b);
            g && this.$$parse(g);
            return !!g
        }
    }

    function hc(a, b, d) {
        jd(a, this);
        this.$$parse = function(c) {
            var e = la(a, c) || la(b, c),
                f;
            y(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", y(e) && (a = c, this.replace())) : (f = la(d, e), y(f) && (f = e));
            kd(f, this);
            c = this.$$path;
            var e = a,
                g = /^\/[A-Z]:(\/.*)/;
            0 === f.lastIndexOf(e, 0) && (f = f.replace(e, ""));
            g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
            this.$$path = c;
            this.$$compose()
        };
        this.$$compose = function() {
            var b =
                Ub(this.$$search),
                e = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = fc(this.$$path) + (b ? "?" + b : "") + e;
            this.$$absUrl = a + (this.$$url ? d + this.$$url : "")
        };
        this.$$parseLinkUrl = function(b, d) {
            return Ja(a) == Ja(b) ? (this.$$parse(b), !0) : !1
        }
    }

    function ld(a, b, d) {
        this.$$html5 = !0;
        hc.apply(this, arguments);
        this.$$parseLinkUrl = function(c, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            a == Ja(c) ? f = c : (g = la(b, c)) ? f = a + d + g : b === c + "/" && (f = b);
            f && this.$$parse(f);
            return !!f
        };
        this.$$compose = function() {
            var b = Ub(this.$$search),
                e = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = fc(this.$$path) + (b ? "?" + b : "") + e;
            this.$$absUrl = a + d + this.$$url
        }
    }

    function Ib(a) {
        return function() {
            return this[a]
        }
    }

    function md(a, b) {
        return function(d) {
            if (y(d)) return this[a];
            this[a] = b(d);
            this.$$compose();
            return this
        }
    }

    function rf() {
        var a = "",
            b = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(b) {
            return v(b) ? (a = b, this) : a
        };
        this.html5Mode = function(a) {
            return Ea(a) ? (b.enabled = a, this) : J(a) ? (Ea(a.enabled) && (b.enabled = a.enabled), Ea(a.requireBase) &&
                (b.requireBase = a.requireBase), Ea(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(d, c, e, f, g) {
            function h(a, b, d) {
                var e = l.url(),
                    f = l.$$state;
                try {
                    c.url(a, b, d), l.$$state = c.state()
                } catch (g) {
                    throw l.url(e), l.$$state = f, g;
                }
            }

            function k(a, b) {
                d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b)
            }
            var l, m;
            m = c.baseHref();
            var n = c.url(),
                p;
            if (b.enabled) {
                if (!m && b.requireBase) throw Hb("nobase");
                p = n.substring(0, n.indexOf("/",
                    n.indexOf("//") + 2)) + (m || "/");
                m = e.history ? gc : ld
            } else p = Ja(n), m = hc;
            var x = p.substr(0, Ja(p).lastIndexOf("/") + 1);
            l = new m(p, x, "#" + a);
            l.$$parseLinkUrl(n, n);
            l.$$state = c.state();
            var q = /^\s*(javascript|mailto):/i;
            f.on("click", function(a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = G(a.target);
                        "a" !== ta(e[0]);)
                        if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"),
                        k = e.attr("href") || e.attr("xlink:href");
                    J(h) && "[object SVGAnimatedString]" === h.toString() && (h =
                        pa(h.animVal).href);
                    q.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            });
            jb(l.absUrl()) != jb(n) && c.url(l.absUrl(), !0);
            var z = !0;
            c.onUrlChange(function(a, b) {
                y(la(x, a)) ? g.location.href = a : (d.$evalAsync(function() {
                    var c = l.absUrl(),
                        e = l.$$state,
                        f;
                    a = jb(a);
                    l.$$parse(a);
                    l.$$state = b;
                    f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;
                    l.absUrl() === a && (f ? (l.$$parse(c), l.$$state =
                        e, h(c, !1, e)) : (z = !1, k(c, e)))
                }), d.$$phase || d.$digest())
            });
            d.$watch(function() {
                var a = jb(c.url()),
                    b = jb(l.absUrl()),
                    f = c.state(),
                    g = l.$$replace,
                    m = a !== b || l.$$html5 && e.history && f !== l.$$state;
                if (z || m) z = !1, d.$evalAsync(function() {
                    var b = l.absUrl(),
                        c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;
                    l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)))
                });
                l.$$replace = !1
            });
            return l
        }]
    }

    function sf() {
        var a = !0,
            b = this;
        this.debugEnabled = function(b) {
            return v(b) ?
                (a = b, this) : a
        };
        this.$get = ["$window", function(d) {
            function c(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = d.console || {},
                    e = b[a] || b.log || C;
                a = !1;
                try {
                    a = !!e.apply
                } catch (k) {}
                return a ? function() {
                    var a = [];
                    q(arguments, function(b) {
                        a.push(c(b))
                    });
                    return e.apply(b, a)
                } : function(a, b) {
                    e(a, null == b ? "" : b)
                }
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }]
    }

    function Ua(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw ba("isecfld", b);
        return a
    }

    function hg(a) {
        return a + ""
    }

    function qa(a, b) {
        if (a) {
            if (a.constructor === a) throw ba("isecfn", b);
            if (a.window === a) throw ba("isecwindow", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw ba("isecdom", b);
            if (a === Object) throw ba("isecobj", b);
        }
        return a
    }

    function nd(a,
        b) {
        if (a) {
            if (a.constructor === a) throw ba("isecfn", b);
            if (a === ig || a === jg || a === kg) throw ba("isecff", b);
        }
    }

    function Jb(a, b) {
        if (a && (a === (0).constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw ba("isecaf", b);
    }

    function lg(a, b) {
        return "undefined" !== typeof a ? a : b
    }

    function od(a, b) {
        return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b
    }

    function Z(a, b) {
        var d, c;
        switch (a.type) {
            case s.Program:
                d = !0;
                q(a.body, function(a) {
                    Z(a.expression, b);
                    d =
                        d && a.expression.constant
                });
                a.constant = d;
                break;
            case s.Literal:
                a.constant = !0;
                a.toWatch = [];
                break;
            case s.UnaryExpression:
                Z(a.argument, b);
                a.constant = a.argument.constant;
                a.toWatch = a.argument.toWatch;
                break;
            case s.BinaryExpression:
                Z(a.left, b);
                Z(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.left.toWatch.concat(a.right.toWatch);
                break;
            case s.LogicalExpression:
                Z(a.left, b);
                Z(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case s.ConditionalExpression:
                Z(a.test,
                    b);
                Z(a.alternate, b);
                Z(a.consequent, b);
                a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case s.Identifier:
                a.constant = !1;
                a.toWatch = [a];
                break;
            case s.MemberExpression:
                Z(a.object, b);
                a.computed && Z(a.property, b);
                a.constant = a.object.constant && (!a.computed || a.property.constant);
                a.toWatch = [a];
                break;
            case s.CallExpression:
                d = a.filter ? !b(a.callee.name).$stateful : !1;
                c = [];
                q(a.arguments, function(a) {
                    Z(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch)
                });
                a.constant = d;
                a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];
                break;
            case s.AssignmentExpression:
                Z(a.left, b);
                Z(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = [a];
                break;
            case s.ArrayExpression:
                d = !0;
                c = [];
                q(a.elements, function(a) {
                    Z(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch)
                });
                a.constant = d;
                a.toWatch = c;
                break;
            case s.ObjectExpression:
                d = !0;
                c = [];
                q(a.properties, function(a) {
                    Z(a.value, b);
                    d = d && a.value.constant && !a.computed;
                    a.value.constant || c.push.apply(c, a.value.toWatch)
                });
                a.constant = d;
                a.toWatch = c;
                break;
            case s.ThisExpression:
                a.constant = !1;
                a.toWatch = [];
                break;
            case s.LocalsExpression:
                a.constant = !1, a.toWatch = []
        }
    }

    function pd(a) {
        if (1 == a.length) {
            a = a[0].expression;
            var b = a.toWatch;
            return 1 !== b.length ? b : b[0] !== a ? b : void 0
        }
    }

    function qd(a) {
        return a.type === s.Identifier || a.type === s.MemberExpression
    }

    function rd(a) {
        if (1 === a.body.length && qd(a.body[0].expression)) return {
            type: s.AssignmentExpression,
            left: a.body[0].expression,
            right: {
                type: s.NGValueParameter
            },
            operator: "="
        }
    }

    function sd(a) {
        return 0 ===
            a.body.length || 1 === a.body.length && (a.body[0].expression.type === s.Literal || a.body[0].expression.type === s.ArrayExpression || a.body[0].expression.type === s.ObjectExpression)
    }

    function td(a, b) {
        this.astBuilder = a;
        this.$filter = b
    }

    function ud(a, b) {
        this.astBuilder = a;
        this.$filter = b
    }

    function Kb(a) {
        return "constructor" == a
    }

    function ic(a) {
        return E(a.valueOf) ? a.valueOf() : mg.call(a)
    }

    function tf() {
        var a = S(),
            b = S(),
            d = {
                "true": !0,
                "false": !1,
                "null": null,
                undefined: void 0
            },
            c, e;
        this.addLiteral = function(a, b) {
            d[a] = b
        };
        this.setIdentifierFns =
            function(a, b) {
                c = a;
                e = b;
                return this
            };
        this.$get = ["$filter", function(f) {
            function g(c, d, e) {
                var g, k, A;
                e = e || D;
                switch (typeof c) {
                    case "string":
                        A = c = c.trim();
                        var H = e ? b : a;
                        g = H[A];
                        if (!g) {
                            ":" === c.charAt(0) && ":" === c.charAt(1) && (k = !0, c = c.substring(2));
                            g = e ? r : z;
                            var q = new jc(g);
                            g = (new kc(q, f, g)).parse(c);
                            g.constant ? g.$$watchDelegate = p : k ? g.$$watchDelegate = g.literal ? n : m : g.inputs && (g.$$watchDelegate = l);
                            e && (g = h(g));
                            H[A] = g
                        }
                        return x(g, d);
                    case "function":
                        return x(c, d);
                    default:
                        return x(C, d)
                }
            }

            function h(a) {
                function b(c, d, e, f) {
                    var g =
                        D;
                    D = !0;
                    try {
                        return a(c, d, e, f)
                    } finally {
                        D = g
                    }
                }
                if (!a) return a;
                b.$$watchDelegate = a.$$watchDelegate;
                b.assign = h(a.assign);
                b.constant = a.constant;
                b.literal = a.literal;
                for (var c = 0; a.inputs && c < a.inputs.length; ++c) a.inputs[c] = h(a.inputs[c]);
                b.inputs = a.inputs;
                return b
            }

            function k(a, b) {
                return null == a || null == b ? a === b : "object" === typeof a && (a = ic(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b
            }

            function l(a, b, c, d, e) {
                var f = d.inputs,
                    g;
                if (1 === f.length) {
                    var h = k,
                        f = f[0];
                    return a.$watch(function(a) {
                        var b = f(a);
                        k(b, h) || (g = d(a, void 0,
                            void 0, [b]), h = b && ic(b));
                        return g
                    }, b, c, e)
                }
                for (var l = [], m = [], n = 0, p = f.length; n < p; n++) l[n] = k, m[n] = null;
                return a.$watch(function(a) {
                    for (var b = !1, c = 0, e = f.length; c < e; c++) {
                        var h = f[c](a);
                        if (b || (b = !k(h, l[c]))) m[c] = h, l[c] = h && ic(h)
                    }
                    b && (g = d(a, void 0, void 0, m));
                    return g
                }, b, c, e)
            }

            function m(a, b, c, d) {
                var e, f;
                return e = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    f = a;
                    E(b) && b.apply(this, arguments);
                    v(a) && d.$$postDigest(function() {
                        v(f) && e()
                    })
                }, c)
            }

            function n(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    q(a, function(a) {
                        v(a) || (b = !1)
                    });
                    return b
                }
                var f, g;
                return f = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    g = a;
                    E(b) && b.call(this, a, c, d);
                    e(a) && d.$$postDigest(function() {
                        e(g) && f()
                    })
                }, c)
            }

            function p(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    e();
                    return d(a)
                }, b, c)
            }

            function x(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate,
                    d = !1,
                    c = c !== n && c !== m ? function(c, e, f, g) {
                        f = d && g ? g[0] : a(c, e, f, g);
                        return b(f, c, e)
                    } : function(c, d, e, f) {
                        e = a(c, d, e, f);
                        c = b(e, c, d);
                        return v(e) ? c : e
                    };
                a.$$watchDelegate && a.$$watchDelegate !== l ? c.$$watchDelegate = a.$$watchDelegate :
                    b.$stateful || (c.$$watchDelegate = l, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]);
                return c
            }
            var U = Fa().noUnsafeEval,
                z = {
                    csp: U,
                    expensiveChecks: !1,
                    literals: oa(d),
                    isIdentifierStart: E(c) && c,
                    isIdentifierContinue: E(e) && e
                },
                r = {
                    csp: U,
                    expensiveChecks: !0,
                    literals: oa(d),
                    isIdentifierStart: E(c) && c,
                    isIdentifierContinue: E(e) && e
                },
                D = !1;
            g.$$runningExpensiveChecks = function() {
                return D
            };
            return g
        }]
    }

    function vf() {
        this.$get = ["$rootScope", "$exceptionHandler", function(a, b) {
            return vd(function(b) {
                a.$evalAsync(b)
            }, b)
        }]
    }

    function wf() {
        this.$get = ["$browser", "$exceptionHandler", function(a, b) {
            return vd(function(b) {
                a.defer(b)
            }, b)
        }]
    }

    function vd(a, b) {
        function d() {
            this.$$state = {
                status: 0
            }
        }

        function c(a, b) {
            return function(c) {
                b.call(a, c)
            }
        }

        function e(c) {
            !c.processScheduled && c.pending && (c.processScheduled = !0, a(function() {
                var a, d, e;
                e = c.pending;
                c.processScheduled = !1;
                c.pending = void 0;
                for (var f = 0, g = e.length; f < g; ++f) {
                    d = e[f][0];
                    a = e[f][c.status];
                    try {
                        E(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
                    } catch (h) {
                        d.reject(h), b(h)
                    }
                }
            }))
        }

        function f() {
            this.promise = new d
        }
        var g = O("$q", TypeError);
        P(d.prototype, {
            then: function(a, b, c) {
                if (y(a) && y(b) && y(c)) return this;
                var d = new f;
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([d, a, b, c]);
                0 < this.$$state.status && e(this.$$state);
                return d.promise
            },
            "catch": function(a) {
                return this.then(null, a)
            },
            "finally": function(a, b) {
                return this.then(function(b) {
                    return k(b, !0, a)
                }, function(b) {
                    return k(b, !1, a)
                }, b)
            }
        });
        P(f.prototype, {
            resolve: function(a) {
                this.promise.$$state.status || (a === this.promise ?
                    this.$$reject(g("qcycle", a)) : this.$$resolve(a))
            },
            $$resolve: function(a) {
                function d(a) {
                    k || (k = !0, h.$$resolve(a))
                }

                function f(a) {
                    k || (k = !0, h.$$reject(a))
                }
                var g, h = this,
                    k = !1;
                try {
                    if (J(a) || E(a)) g = a && a.then;
                    E(g) ? (this.promise.$$state.status = -1, g.call(a, d, f, c(this, this.notify))) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, e(this.promise.$$state))
                } catch (l) {
                    f(l), b(l)
                }
            },
            reject: function(a) {
                this.promise.$$state.status || this.$$reject(a)
            },
            $$reject: function(a) {
                this.promise.$$state.value = a;
                this.promise.$$state.status =
                    2;
                e(this.promise.$$state)
            },
            notify: function(c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && a(function() {
                    for (var a, e, f = 0, g = d.length; f < g; f++) {
                        e = d[f][0];
                        a = d[f][3];
                        try {
                            e.notify(E(a) ? a(c) : c)
                        } catch (h) {
                            b(h)
                        }
                    }
                })
            }
        });
        var h = function(a, b) {
                var c = new f;
                b ? c.resolve(a) : c.reject(a);
                return c.promise
            },
            k = function(a, b, c) {
                var d = null;
                try {
                    E(c) && (d = c())
                } catch (e) {
                    return h(e, !1)
                }
                return d && E(d.then) ? d.then(function() {
                    return h(a, b)
                }, function(a) {
                    return h(a, !1)
                }) : h(a, b)
            },
            l = function(a, b, c, d) {
                var e =
                    new f;
                e.resolve(a);
                return e.promise.then(b, c, d)
            },
            m = function(a) {
                if (!E(a)) throw g("norslvr", a);
                var b = new f;
                a(function(a) {
                    b.resolve(a)
                }, function(a) {
                    b.reject(a)
                });
                return b.promise
            };
        m.prototype = d.prototype;
        m.defer = function() {
            var a = new f;
            a.resolve = c(a, a.resolve);
            a.reject = c(a, a.reject);
            a.notify = c(a, a.notify);
            return a
        };
        m.reject = function(a) {
            var b = new f;
            b.reject(a);
            return b.promise
        };
        m.when = l;
        m.resolve = l;
        m.all = function(a) {
            var b = new f,
                c = 0,
                d = K(a) ? [] : {};
            q(a, function(a, e) {
                c++;
                l(a).then(function(a) {
                    d.hasOwnProperty(e) ||
                        (d[e] = a, --c || b.resolve(d))
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            });
            0 === c && b.resolve(d);
            return b.promise
        };
        return m
    }

    function Ff() {
        this.$get = ["$window", "$timeout", function(a, b) {
            var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
                c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
                e = !!d,
                f = e ? function(a) {
                    var b = d(a);
                    return function() {
                        c(b)
                    }
                } : function(a) {
                    var c = b(a, 16.66, !1);
                    return function() {
                        b.cancel(c)
                    }
                };
            f.supported = e;
            return f
        }]
    }

    function uf() {
        function a(a) {
            function b() {
                this.$$watchers =
                    this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$id = ++pb;
                this.$$ChildScope = null
            }
            b.prototype = a;
            return b
        }
        var b = 10,
            d = O("$rootScope"),
            c = null,
            e = null;
        this.digestTtl = function(a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$exceptionHandler", "$parse", "$browser", function(f, g, h) {
            function k(a) {
                a.currentScope.$$destroyed = !0
            }

            function l(a) {
                9 === Ba && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));
                a.$parent = a.$$nextSibling =
                    a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null
            }

            function m() {
                this.$id = ++pb;
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this.$root = this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$$isolateBindings = null
            }

            function n(a) {
                if (D.$$phase) throw d("inprog", D.$$phase);
                D.$$phase = a
            }

            function p(a, b) {
                do a.$$watchersCount += b; while (a = a.$parent)
            }

            function x(a, b, c) {
                do a.$$listenerCount[c] -=
                    b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function s() {}

            function z() {
                for (; w.length;) try {
                    w.shift()()
                } catch (a) {
                    f(a)
                }
                e = null
            }

            function r() {
                null === e && (e = h.defer(function() {
                    D.$apply(z)
                }))
            }
            m.prototype = {
                constructor: m,
                $new: function(b, c) {
                    var d;
                    c = c || this;
                    b ? (d = new m, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope);
                    d.$parent = c;
                    d.$$prevSibling = c.$$childTail;
                    c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail =
                        d;
                    (b || c != this) && d.$on("$destroy", k);
                    return d
                },
                $watch: function(a, b, d, e) {
                    var f = g(a);
                    if (f.$$watchDelegate) return f.$$watchDelegate(this, b, d, f, a);
                    var h = this,
                        k = h.$$watchers,
                        l = {
                            fn: b,
                            last: s,
                            get: f,
                            exp: e || a,
                            eq: !!d
                        };
                    c = null;
                    E(b) || (l.fn = C);
                    k || (k = h.$$watchers = []);
                    k.unshift(l);
                    p(this, 1);
                    return function() {
                        0 <= $a(k, l) && p(h, -1);
                        c = null
                    }
                },
                $watchGroup: function(a, b) {
                    function c() {
                        h = !1;
                        k ? (k = !1, b(e, e, g)) : b(e, d, g)
                    }
                    var d = Array(a.length),
                        e = Array(a.length),
                        f = [],
                        g = this,
                        h = !1,
                        k = !0;
                    if (!a.length) {
                        var l = !0;
                        g.$evalAsync(function() {
                            l &&
                                b(e, e, g)
                        });
                        return function() {
                            l = !1
                        }
                    }
                    if (1 === a.length) return this.$watch(a[0], function(a, c, f) {
                        e[0] = a;
                        d[0] = c;
                        b(e, a === c ? e : d, f)
                    });
                    q(a, function(a, b) {
                        var k = g.$watch(a, function(a, f) {
                            e[b] = a;
                            d[b] = f;
                            h || (h = !0, g.$evalAsync(c))
                        });
                        f.push(k)
                    });
                    return function() {
                        for (; f.length;) f.shift()()
                    }
                },
                $watchCollection: function(a, b) {
                    function c(a) {
                        e = a;
                        var b, d, g, h;
                        if (!y(e)) {
                            if (J(e))
                                if (xa(e))
                                    for (f !== n && (f = n, u = f.length = 0, l++), a = e.length, u !== a && (l++, f.length = u = a), b = 0; b < a; b++) h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g);
                                else {
                                    f !==
                                        p && (f = p = {}, u = 0, l++);
                                    a = 0;
                                    for (b in e) sa.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (u++, f[b] = g, l++));
                                    if (u > a)
                                        for (b in l++, f) sa.call(e, b) || (u--, delete f[b])
                                }
                            else f !== e && (f = e, l++);
                            return l
                        }
                    }
                    c.$stateful = !0;
                    var d = this,
                        e, f, h, k = 1 < b.length,
                        l = 0,
                        m = g(a, c),
                        n = [],
                        p = {},
                        r = !0,
                        u = 0;
                    return this.$watch(m, function() {
                        r ? (r = !1, b(e, e, d)) : b(e, h, d);
                        if (k)
                            if (J(e))
                                if (xa(e)) {
                                    h = Array(e.length);
                                    for (var a = 0; a < e.length; a++) h[a] = e[a]
                                } else
                                    for (a in h = {}, e) sa.call(e, a) && (h[a] = e[a]);
                        else h = e
                    })
                },
                $digest: function() {
                    var a,
                        g, k, l, m, p, r, x, q = b,
                        w, y = [],
                        C, F;
                    n("$digest");
                    h.$$checkUrlChange();
                    this === D && null !== e && (h.defer.cancel(e), z());
                    c = null;
                    do {
                        x = !1;
                        w = this;
                        for (p = 0; p < u.length; p++) {
                            try {
                                F = u[p], F.scope.$eval(F.expression, F.locals)
                            } catch (G) {
                                f(G)
                            }
                            c = null
                        }
                        u.length = 0;
                        a: do {
                            if (p = w.$$watchers)
                                for (r = p.length; r--;) try {
                                    if (a = p[r])
                                        if (m = a.get, (g = m(w)) !== (k = a.last) && !(a.eq ? na(g, k) : "number" === typeof g && "number" === typeof k && isNaN(g) && isNaN(k))) x = !0, c = a, a.last = a.eq ? oa(g, null) : g, l = a.fn, l(g, k === s ? g : k, w), 5 > q && (C = 4 - q, y[C] || (y[C] = []), y[C].push({
                                            msg: E(a.exp) ?
                                                "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                            newVal: g,
                                            oldVal: k
                                        }));
                                        else if (a === c) {
                                        x = !1;
                                        break a
                                    }
                                } catch (I) {
                                    f(I)
                                }
                            if (!(p = w.$$watchersCount && w.$$childHead || w !== this && w.$$nextSibling))
                                for (; w !== this && !(p = w.$$nextSibling);) w = w.$parent
                        } while (w = p);
                        if ((x || u.length) && !q--) throw D.$$phase = null, d("infdig", b, y);
                    } while (x || u.length);
                    for (D.$$phase = null; v < t.length;) try {
                        t[v++]()
                    } catch (J) {
                        f(J)
                    }
                    t.length = v = 0
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        this ===
                            D && h.$$applicationDestroyed();
                        p(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount) x(this, this.$$listenerCount[b], b);
                        a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                        a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = C;
                        this.$on = this.$watch = this.$watchGroup =
                            function() {
                                return C
                            };
                        this.$$listeners = {};
                        this.$$nextSibling = null;
                        l(this)
                    }
                },
                $eval: function(a, b) {
                    return g(a)(this, b)
                },
                $evalAsync: function(a, b) {
                    D.$$phase || u.length || h.defer(function() {
                        u.length && D.$digest()
                    });
                    u.push({
                        scope: this,
                        expression: g(a),
                        locals: b
                    })
                },
                $$postDigest: function(a) {
                    t.push(a)
                },
                $apply: function(a) {
                    try {
                        n("$apply");
                        try {
                            return this.$eval(a)
                        } finally {
                            D.$$phase = null
                        }
                    } catch (b) {
                        f(b)
                    } finally {
                        try {
                            D.$digest()
                        } catch (c) {
                            throw f(c), c;
                        }
                    }
                },
                $applyAsync: function(a) {
                    function b() {
                        c.$eval(a)
                    }
                    var c = this;
                    a && w.push(b);
                    a = g(a);
                    r()
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        var d = c.indexOf(b); - 1 !== d && (c[d] = null, x(e, 1, a))
                    }
                },
                $emit: function(a, b) {
                    var c = [],
                        d, e = this,
                        g = !1,
                        h = {
                            name: a,
                            targetScope: e,
                            stopPropagation: function() {
                                g = !0
                            },
                            preventDefault: function() {
                                h.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        k = ab([h], arguments, 1),
                        l, m;
                    do {
                        d = e.$$listeners[a] || c;
                        h.currentScope =
                            e;
                        l = 0;
                        for (m = d.length; l < m; l++)
                            if (d[l]) try {
                                d[l].apply(null, k)
                            } catch (n) {
                                f(n)
                            } else d.splice(l, 1), l--, m--;
                        if (g) return h.currentScope = null, h;
                        e = e.$parent
                    } while (e);
                    h.currentScope = null;
                    return h
                },
                $broadcast: function(a, b) {
                    var c = this,
                        d = this,
                        e = {
                            name: a,
                            targetScope: this,
                            preventDefault: function() {
                                e.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!this.$$listenerCount[a]) return e;
                    for (var g = ab([e], arguments, 1), h, k; c = d;) {
                        e.currentScope = c;
                        d = c.$$listeners[a] || [];
                        h = 0;
                        for (k = d.length; h < k; h++)
                            if (d[h]) try {
                                d[h].apply(null, g)
                            } catch (l) {
                                f(l)
                            } else d.splice(h,
                                1), h--, k--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                            for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
                    }
                    e.currentScope = null;
                    return e
                }
            };
            var D = new m,
                u = D.$$asyncQueue = [],
                t = D.$$postDigestQueue = [],
                w = D.$$applyAsyncQueue = [],
                v = 0;
            return D
        }]
    }

    function ne() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/,
            b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(b) {
            return v(b) ? (a = b, this) : a
        };
        this.imgSrcSanitizationWhitelist = function(a) {
            return v(a) ? (b = a, this) : b
        };
        this.$get = function() {
            return function(d, c) {
                var e = c ? b : a,
                    f;
                f = pa(d).href;
                return "" === f || f.match(e) ? d : "unsafe:" + f
            }
        }
    }

    function ng(a) {
        if ("self" === a) return a;
        if (I(a)) {
            if (-1 < a.indexOf("***")) throw ra("iwcard", a);
            a = wd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return new RegExp("^" + a + "$")
        }
        if (Xa(a)) return new RegExp("^" + a.source + "$");
        throw ra("imatcher");
    }

    function xd(a) {
        var b = [];
        v(a) && q(a, function(a) {
            b.push(ng(a))
        });
        return b
    }

    function yf() {
        this.SCE_CONTEXTS = ma;
        var a = ["self"],
            b = [];
        this.resourceUrlWhitelist =
            function(b) {
                arguments.length && (a = xd(b));
                return a
            };
        this.resourceUrlBlacklist = function(a) {
            arguments.length && (b = xd(a));
            return b
        };
        this.$get = ["$injector", function(d) {
            function c(a, b) {
                return "self" === a ? id(b) : !!a.exec(b.href)
            }

            function e(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a
                    }
                };
                a && (b.prototype = new a);
                b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }
            var f = function(a) {
                throw ra("unsafe");
            };
            d.has("$sanitize") && (f = d.get("$sanitize"));
            var g = e(),
                h = {};
            h[ma.HTML] = e(g);
            h[ma.CSS] = e(g);
            h[ma.URL] = e(g);
            h[ma.JS] = e(g);
            h[ma.RESOURCE_URL] = e(h[ma.URL]);
            return {
                trustAs: function(a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c) throw ra("icontext", a, b);
                    if (null === b || y(b) || "" === b) return b;
                    if ("string" !== typeof b) throw ra("itype", a);
                    return new c(b)
                },
                getTrusted: function(d, e) {
                    if (null === e || y(e) || "" === e) return e;
                    var g = h.hasOwnProperty(d) ? h[d] : null;
                    if (g && e instanceof g) return e.$$unwrapTrustedValue();
                    if (d === ma.RESOURCE_URL) {
                        var g =
                            pa(e.toString()),
                            n, p, x = !1;
                        n = 0;
                        for (p = a.length; n < p; n++)
                            if (c(a[n], g)) {
                                x = !0;
                                break
                            }
                        if (x)
                            for (n = 0, p = b.length; n < p; n++)
                                if (c(b[n], g)) {
                                    x = !1;
                                    break
                                }
                        if (x) return e;
                        throw ra("insecurl", e.toString());
                    }
                    if (d === ma.HTML) return f(e);
                    throw ra("unsafe");
                },
                valueOf: function(a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function xf() {
        var a = !0;
        this.enabled = function(b) {
            arguments.length && (a = !!b);
            return a
        };
        this.$get = ["$parse", "$sceDelegate", function(b, d) {
            if (a && 8 > Ba) throw ra("iequirks");
            var c = fa(ma);
            c.isEnabled = function() {
                return a
            };
            c.trustAs = d.trustAs;
            c.getTrusted = d.getTrusted;
            c.valueOf = d.valueOf;
            a || (c.trustAs = c.getTrusted = function(a, b) {
                return b
            }, c.valueOf = Ya);
            c.parseAs = function(a, d) {
                var e = b(d);
                return e.literal && e.constant ? e : b(d, function(b) {
                    return c.getTrusted(a, b)
                })
            };
            var e = c.parseAs,
                f = c.getTrusted,
                g = c.trustAs;
            q(ma, function(a, b) {
                var d = L(b);
                c[eb("parse_as_" + d)] = function(b) {
                    return e(a, b)
                };
                c[eb("get_trusted_" + d)] = function(b) {
                    return f(a, b)
                };
                c[eb("trust_as_" + d)] = function(b) {
                    return g(a, b)
                }
            });
            return c
        }]
    }

    function zf() {
        this.$get = ["$window",
            "$document",
            function(a, b) {
                var d = {},
                    c = !(a.chrome && a.chrome.app && a.chrome.app.runtime) && a.history && a.history.pushState,
                    e = $((/android (\d+)/.exec(L((a.navigator || {}).userAgent)) || [])[1]),
                    f = /Boxee/i.test((a.navigator || {}).userAgent),
                    g = b[0] || {},
                    h, k = /^(Moz|webkit|ms)(?=[A-Z])/,
                    l = g.body && g.body.style,
                    m = !1,
                    n = !1;
                if (l) {
                    for (var p in l)
                        if (m = k.exec(p)) {
                            h = m[0];
                            h = h[0].toUpperCase() + h.substr(1);
                            break
                        }
                    h || (h = "WebkitOpacity" in l && "webkit");
                    m = !!("transition" in l || h + "Transition" in l);
                    n = !!("animation" in l || h + "Animation" in
                        l);
                    !e || m && n || (m = I(l.webkitTransition), n = I(l.webkitAnimation))
                }
                return {
                    history: !(!c || 4 > e || f),
                    hasEvent: function(a) {
                        if ("input" === a && 11 >= Ba) return !1;
                        if (y(d[a])) {
                            var b = g.createElement("div");
                            d[a] = "on" + a in b
                        }
                        return d[a]
                    },
                    csp: Fa(),
                    vendorPrefix: h,
                    transitions: m,
                    animations: n,
                    android: e
                }
            }
        ]
    }

    function Bf() {
        var a;
        this.httpOptions = function(b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$templateCache", "$http", "$q", "$sce", function(b, d, c, e) {
            function f(g, h) {
                f.totalPendingRequests++;
                if (!I(g) || y(b.get(g))) g = e.getTrustedResourceUrl(g);
                var k = d.defaults && d.defaults.transformResponse;
                K(k) ? k = k.filter(function(a) {
                    return a !== dc
                }) : k === dc && (k = null);
                return d.get(g, P({
                    cache: b,
                    transformResponse: k
                }, a))["finally"](function() {
                    f.totalPendingRequests--
                }).then(function(a) {
                    b.put(g, a.data);
                    return a.data
                }, function(a) {
                    if (!h) throw og("tpload", g, a.status, a.statusText);
                    return c.reject(a)
                })
            }
            f.totalPendingRequests = 0;
            return f
        }]
    }

    function Cf() {
        this.$get = ["$rootScope", "$browser", "$location", function(a, b, d) {
            return {
                findBindings: function(a, b, d) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    q(a, function(a) {
                        var c = da.element(a).data("$binding");
                        c && q(c, function(c) {
                            d ? (new RegExp("(^|\\s)" + wd(b) + "(\\s|\\||$)")).test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a)
                        })
                    });
                    return g
                },
                findModels: function(a, b, d) {
                    for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                        var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
                        if (k.length) return k
                    }
                },
                getLocation: function() {
                    return d.url()
                },
                setLocation: function(b) {
                    b !== d.url() && (d.url(b), a.$digest())
                },
                whenStable: function(a) {
                    b.notifyWhenNoOutstandingRequests(a)
                }
            }
        }]
    }

    function Df() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, d, c, e) {
            function f(f, k, l) {
                E(f) || (l = k, k = f, f = C);
                var m = ya.call(arguments, 3),
                    n = v(l) && !l,
                    p = (n ? c : d).defer(),
                    x = p.promise,
                    q;
                q = b.defer(function() {
                    try {
                        p.resolve(f.apply(null, m))
                    } catch (b) {
                        p.reject(b), e(b)
                    } finally {
                        delete g[x.$$timeoutId]
                    }
                    n || a.$apply()
                }, k);
                x.$$timeoutId = q;
                g[q] = p;
                return x
            }
            var g = {};
            f.cancel = function(a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) :
                    !1
            };
            return f
        }]
    }

    function pa(a) {
        Ba && (X.setAttribute("href", a), a = X.href);
        X.setAttribute("href", a);
        return {
            href: X.href,
            protocol: X.protocol ? X.protocol.replace(/:$/, "") : "",
            host: X.host,
            search: X.search ? X.search.replace(/^\?/, "") : "",
            hash: X.hash ? X.hash.replace(/^#/, "") : "",
            hostname: X.hostname,
            port: X.port,
            pathname: "/" === X.pathname.charAt(0) ? X.pathname : "/" + X.pathname
        }
    }

    function id(a) {
        a = I(a) ? pa(a) : a;
        return a.protocol === yd.protocol && a.host === yd.host
    }

    function Ef() {
        this.$get = ca(F)
    }

    function zd(a) {
        function b(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }
        var d = a[0] || {},
            c = {},
            e = "";
        return function() {
            var a, g, h, k, l;
            a = d.cookie || "";
            if (a !== e)
                for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++) g = a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), y(c[l]) && (c[l] = b(g.substring(k + 1))));
            return c
        }
    }

    function If() {
        this.$get = zd
    }

    function Lc(a) {
        function b(d, c) {
            if (J(d)) {
                var e = {};
                q(d, function(a, c) {
                    e[c] = b(c, a)
                });
                return e
            }
            return a.factory(d + "Filter", c)
        }
        this.register = b;
        this.$get = ["$injector", function(a) {
            return function(b) {
                return a.get(b + "Filter")
            }
        }];
        b("currency", Ad);
        b("date", Bd);
        b("filter", pg);
        b("json", qg);
        b("limitTo", rg);
        b("lowercase", sg);
        b("number", Cd);
        b("orderBy", Dd);
        b("uppercase", tg)
    }

    function pg() {
        return function(a, b, d) {
            if (!xa(a)) {
                if (null == a) return a;
                throw O("filter")("notarray", a);
            }
            var c;
            switch (lc(b)) {
                case "function":
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    c = !0;
                case "object":
                    b = ug(b, d, c);
                    break;
                default:
                    return a
            }
            return Array.prototype.filter.call(a, b)
        }
    }

    function ug(a, b, d) {
        var c = J(a) && "$" in a;
        !0 === b ? b = na : E(b) || (b = function(a, b) {
            if (y(a)) return !1;
            if (null ===
                a || null === b) return a === b;
            if (J(b) || J(a) && !uc(a)) return !1;
            a = L("" + a);
            b = L("" + b);
            return -1 !== a.indexOf(b)
        });
        return function(e) {
            return c && !J(e) ? La(e, a.$, b, !1) : La(e, a, b, d)
        }
    }

    function La(a, b, d, c, e) {
        var f = lc(a),
            g = lc(b);
        if ("string" === g && "!" === b.charAt(0)) return !La(a, b.substring(1), d, c);
        if (K(a)) return a.some(function(a) {
            return La(a, b, d, c)
        });
        switch (f) {
            case "object":
                var h;
                if (c) {
                    for (h in a)
                        if ("$" !== h.charAt(0) && La(a[h], b, d, !0)) return !0;
                    return e ? !1 : La(a, b, d, !1)
                }
                if ("object" === g) {
                    for (h in b)
                        if (e = b[h], !E(e) && !y(e) &&
                            (f = "$" === h, !La(f ? a : a[h], e, d, f, f))) return !1;
                    return !0
                }
                return d(a, b);
            case "function":
                return !1;
            default:
                return d(a, b)
        }
    }

    function lc(a) {
        return null === a ? "null" : typeof a
    }

    function Ad(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c, e) {
            y(c) && (c = b.CURRENCY_SYM);
            y(e) && (e = b.PATTERNS[1].maxFrac);
            return null == a ? a : Ed(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c)
        }
    }

    function Cd(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return null == a ? a : Ed(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function vg(a) {
        var b =
            0,
            d, c, e, f, g; - 1 < (c = a.indexOf(Fd)) && (a = a.replace(Fd, ""));
        0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);
        for (e = 0; a.charAt(e) == mc; e++);
        if (e == (g = a.length)) d = [0], c = 1;
        else {
            for (g--; a.charAt(g) == mc;) g--;
            c -= e;
            d = [];
            for (f = 0; e <= g; e++, f++) d[f] = +a.charAt(e)
        }
        c > Gd && (d = d.splice(0, Gd - 1), b = c - 1, c = 1);
        return {
            d: d,
            e: b,
            i: c
        }
    }

    function wg(a, b, d, c) {
        var e = a.d,
            f = e.length - a.i;
        b = y(b) ? Math.min(Math.max(d, f), c) : +b;
        d = b + a.i;
        c = e[d];
        if (0 < d) {
            e.splice(Math.max(a.i, d));
            for (var g = d; g < e.length; g++) e[g] =
                0
        } else
            for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++) e[g] = 0;
        if (5 <= c)
            if (0 > d - 1) {
                for (c = 0; c > d; c--) e.unshift(0), a.i++;
                e.unshift(1);
                a.i++
            } else e[d - 1]++;
        for (; f < Math.max(0, b); f++) e.push(0);
        if (b = e.reduceRight(function(a, b, c, d) {
                b += a;
                d[c] = b % 10;
                return Math.floor(b / 10)
            }, 0)) e.unshift(b), a.i++
    }

    function Ed(a, b, d, c, e) {
        if (!I(a) && !Q(a) || isNaN(a)) return "";
        var f = !isFinite(a),
            g = !1,
            h = Math.abs(a) + "",
            k = "";
        if (f) k = "\u221e";
        else {
            g = vg(h);
            wg(g, e, b.minFrac, b.maxFrac);
            k = g.d;
            h = g.i;
            e = g.e;
            f = [];
            for (g = k.reduce(function(a,
                    b) {
                    return a && !b
                }, !0); 0 > h;) k.unshift(0), h++;
            0 < h ? f = k.splice(h, k.length) : (f = k, k = [0]);
            h = [];
            for (k.length >= b.lgSize && h.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize;) h.unshift(k.splice(-b.gSize, k.length).join(""));
            k.length && h.unshift(k.join(""));
            k = h.join(d);
            f.length && (k += c + f.join(""));
            e && (k += "e+" + e)
        }
        return 0 > a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf
    }

    function Lb(a, b, d, c) {
        var e = "";
        if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, e = "-");
        for (a = "" + a; a.length < b;) a = mc + a;
        d && (a = a.substr(a.length - b));
        return e +
            a
    }

    function W(a, b, d, c, e) {
        d = d || 0;
        return function(f) {
            f = f["get" + a]();
            if (0 < d || f > -d) f += d;
            0 === f && -12 == d && (f = 12);
            return Lb(f, b, c, e)
        }
    }

    function kb(a, b, d) {
        return function(c, e) {
            var f = c["get" + a](),
                g = ub((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);
            return e[g][f]
        }
    }

    function Hd(a) {
        var b = (new Date(a, 0, 1)).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }

    function Id(a) {
        return function(b) {
            var d = Hd(b.getFullYear());
            b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;
            b = 1 + Math.round(b / 6048E5);
            return Lb(b, a)
        }
    }

    function nc(a,
        b) {
        return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1]
    }

    function Bd(a) {
        function b(a) {
            var b;
            if (b = a.match(d)) {
                a = new Date(0);
                var f = 0,
                    g = 0,
                    h = b[8] ? a.setUTCFullYear : a.setFullYear,
                    k = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = $(b[9] + b[10]), g = $(b[9] + b[11]));
                h.call(a, $(b[1]), $(b[2]) - 1, $(b[3]));
                f = $(b[4] || 0) - f;
                g = $(b[5] || 0) - g;
                h = $(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                k.call(a, f, g, h, b)
            }
            return a
        }
        var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c,
            d, f) {
            var g = "",
                h = [],
                k, l;
            d = d || "mediumDate";
            d = a.DATETIME_FORMATS[d] || d;
            I(c) && (c = xg.test(c) ? $(c) : b(c));
            Q(c) && (c = new Date(c));
            if (!ha(c) || !isFinite(c.getTime())) return c;
            for (; d;)(l = yg.exec(d)) ? (h = ab(h, l, 1), d = h.pop()) : (h.push(d), d = null);
            var m = c.getTimezoneOffset();
            f && (m = xc(f, m), c = Tb(c, f, !0));
            q(h, function(b) {
                k = zg[b];
                g += k ? k(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function qg() {
        return function(a, b) {
            y(b) && (b = 2);
            return cb(a, b)
        }
    }

    function rg() {
        return function(a,
            b, d) {
            b = Infinity === Math.abs(Number(b)) ? Number(b) : $(b);
            if (isNaN(b)) return a;
            Q(a) && (a = a.toString());
            if (!K(a) && !I(a)) return a;
            d = !d || isNaN(d) ? 0 : $(d);
            d = 0 > d ? Math.max(0, a.length + d) : d;
            return 0 <= b ? a.slice(d, d + b) : 0 === d ? a.slice(b, a.length) : a.slice(Math.max(0, d + b), d)
        }
    }

    function Dd(a) {
        function b(b, d) {
            d = d ? -1 : 1;
            return b.map(function(b) {
                var c = 1,
                    h = Ya;
                if (E(b)) h = b;
                else if (I(b)) {
                    if ("+" == b.charAt(0) || "-" == b.charAt(0)) c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1);
                    if ("" !== b && (h = a(b), h.constant)) var k = h(),
                        h = function(a) {
                            return a[k]
                        }
                }
                return {
                    get: h,
                    descending: c * d
                }
            })
        }

        function d(a) {
            switch (typeof a) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }
        return function(a, e, f) {
            if (null == a) return a;
            if (!xa(a)) throw O("orderBy")("notarray", a);
            K(e) || (e = [e]);
            0 === e.length && (e = ["+"]);
            var g = b(e, f);
            g.push({
                get: function() {
                    return {}
                },
                descending: f ? -1 : 1
            });
            a = Array.prototype.map.call(a, function(a, b) {
                return {
                    value: a,
                    predicateValues: g.map(function(c) {
                        var e = c.get(a);
                        c = typeof e;
                        if (null === e) c = "string", e = "null";
                        else if ("string" === c) e = e.toLowerCase();
                        else if ("object" ===
                            c) a: {
                            if ("function" === typeof e.valueOf && (e = e.valueOf(), d(e))) break a;
                            if (uc(e) && (e = e.toString(), d(e))) break a;e = b
                        }
                        return {
                            value: e,
                            type: c
                        }
                    })
                }
            });
            a.sort(function(a, b) {
                for (var c = 0, d = 0, e = g.length; d < e; ++d) {
                    var c = a.predicateValues[d],
                        f = b.predicateValues[d],
                        x = 0;
                    c.type === f.type ? c.value !== f.value && (x = c.value < f.value ? -1 : 1) : x = c.type < f.type ? -1 : 1;
                    if (c = x * g[d].descending) break
                }
                return c
            });
            return a = a.map(function(a) {
                return a.value
            })
        }
    }

    function Ma(a) {
        E(a) && (a = {
            link: a
        });
        a.restrict = a.restrict || "AC";
        return ca(a)
    }

    function Jd(a,
        b, d, c, e) {
        var f = this,
            g = [];
        f.$error = {};
        f.$$success = {};
        f.$pending = void 0;
        f.$name = e(b.name || b.ngForm || "")(d);
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        f.$submitted = !1;
        f.$$parentForm = Mb;
        f.$rollbackViewValue = function() {
            q(g, function(a) {
                a.$rollbackViewValue()
            })
        };
        f.$commitViewValue = function() {
            q(g, function(a) {
                a.$commitViewValue()
            })
        };
        f.$addControl = function(a) {
            Ra(a.$name, "input");
            g.push(a);
            a.$name && (f[a.$name] = a);
            a.$$parentForm = f
        };
        f.$$renameControl = function(a, b) {
            var c = a.$name;
            f[c] === a && delete f[c];
            f[b] = a;
            a.$name = b
        };
        f.$removeControl = function(a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            q(f.$pending, function(b, c) {
                f.$setValidity(c, null, a)
            });
            q(f.$error, function(b, c) {
                f.$setValidity(c, null, a)
            });
            q(f.$$success, function(b, c) {
                f.$setValidity(c, null, a)
            });
            $a(g, a);
            a.$$parentForm = Mb
        };
        Kd({
            ctrl: this,
            $element: a,
            set: function(a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
            },
            unset: function(a, b, c) {
                var d = a[b];
                d && ($a(d, c), 0 === d.length && delete a[b])
            },
            $animate: c
        });
        f.$setDirty = function() {
            c.removeClass(a, Va);
            c.addClass(a, Nb);
            f.$dirty = !0;
            f.$pristine = !1;
            f.$$parentForm.$setDirty()
        };
        f.$setPristine = function() {
            c.setClass(a, Va, Nb + " ng-submitted");
            f.$dirty = !1;
            f.$pristine = !0;
            f.$submitted = !1;
            q(g, function(a) {
                a.$setPristine()
            })
        };
        f.$setUntouched = function() {
            q(g, function(a) {
                a.$setUntouched()
            })
        };
        f.$setSubmitted = function() {
            c.addClass(a, "ng-submitted");
            f.$submitted = !0;
            f.$$parentForm.$setSubmitted()
        }
    }

    function oc(a) {
        a.$formatters.push(function(b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }

    function lb(a, b, d, c, e, f) {
        var g = L(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function() {
                h = !0
            });
            b.on("compositionend", function() {
                h = !1;
                l()
            })
        }
        var k, l = function(a) {
            k && (f.defer.cancel(k), k = null);
            if (!h) {
                var e = b.val();
                a = a && a.type;
                "password" === g || d.ngTrim && "false" === d.ngTrim || (e = V(e));
                (c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a)
            }
        };
        if (e.hasEvent("input")) b.on("input", l);
        else {
            var m = function(a, b, c) {
                k || (k = f.defer(function() {
                    k = null;
                    b && b.value === c || l(a)
                }))
            };
            b.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || 15 <
                    b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value)
            });
            if (e.hasEvent("paste")) b.on("paste cut", m)
        }
        b.on("change", l);
        if (Ld[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function(a) {
            if (!k) {
                var b = this.validity,
                    c = b.badInput,
                    d = b.typeMismatch;
                k = f.defer(function() {
                    k = null;
                    b.badInput === c && b.typeMismatch === d || l(a)
                })
            }
        });
        c.$render = function() {
            var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
            b.val() !== a && b.val(a)
        }
    }

    function Ob(a, b) {
        return function(d, c) {
            var e, f;
            if (ha(d)) return d;
            if (I(d)) {
                '"' == d.charAt(0) &&
                    '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
                if (Ag.test(d)) return new Date(d);
                a.lastIndex = 0;
                if (e = a.exec(d)) return e.shift(), f = c ? {
                    yyyy: c.getFullYear(),
                    MM: c.getMonth() + 1,
                    dd: c.getDate(),
                    HH: c.getHours(),
                    mm: c.getMinutes(),
                    ss: c.getSeconds(),
                    sss: c.getMilliseconds() / 1E3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, q(e, function(a, c) {
                    c < b.length && (f[b[c]] = +a)
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
            }
            return NaN
        }
    }

    function mb(a, b, d, c) {
        return function(e, f, g, h, k, l, m) {
            function n(a) {
                return a &&
                    !(a.getTime && a.getTime() !== a.getTime())
            }

            function p(a) {
                return v(a) && !ha(a) ? d(a) || void 0 : a
            }
            Md(e, f, g, h);
            lb(e, f, g, h, k, l);
            var q = h && h.$options && h.$options.timezone,
                s;
            h.$$parserName = a;
            h.$parsers.push(function(a) {
                if (h.$isEmpty(a)) return null;
                if (b.test(a)) return a = d(a, s), q && (a = Tb(a, q)), a
            });
            h.$formatters.push(function(a) {
                if (a && !ha(a)) throw nb("datefmt", a);
                if (n(a)) return (s = a) && q && (s = Tb(s, q, !0)), m("date")(a, c, q);
                s = null;
                return ""
            });
            if (v(g.min) || g.ngMin) {
                var z;
                h.$validators.min = function(a) {
                    return !n(a) || y(z) || d(a) >=
                        z
                };
                g.$observe("min", function(a) {
                    z = p(a);
                    h.$validate()
                })
            }
            if (v(g.max) || g.ngMax) {
                var r;
                h.$validators.max = function(a) {
                    return !n(a) || y(r) || d(a) <= r
                };
                g.$observe("max", function(a) {
                    r = p(a);
                    h.$validate()
                })
            }
        }
    }

    function Md(a, b, d, c) {
        (c.$$hasNativeValidators = J(b[0].validity)) && c.$parsers.push(function(a) {
            var c = b.prop("validity") || {};
            return c.badInput || c.typeMismatch ? void 0 : a
        })
    }

    function Nd(a, b, d, c, e) {
        if (v(c)) {
            a = a(c);
            if (!a.constant) throw nb("constexpr", d, c);
            return a(b)
        }
        return e
    }

    function pc(a, b) {
        a = "ngClass" + a;
        return ["$animate",
            function(d) {
                function c(a, b) {
                    var c = [],
                        d = 0;
                    a: for (; d < a.length; d++) {
                        for (var e = a[d], m = 0; m < b.length; m++)
                            if (e == b[m]) continue a;
                        c.push(e)
                    }
                    return c
                }

                function e(a) {
                    var b = [];
                    return K(a) ? (q(a, function(a) {
                        b = b.concat(e(a))
                    }), b) : I(a) ? a.split(" ") : J(a) ? (q(a, function(a, c) {
                        a && (b = b.concat(c.split(" ")))
                    }), b) : a
                }
                return {
                    restrict: "AC",
                    link: function(f, g, h) {
                        function k(a) {
                            a = l(a, 1);
                            h.$addClass(a)
                        }

                        function l(a, b) {
                            var c = g.data("$classCounts") || S(),
                                d = [];
                            q(a, function(a) {
                                if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
                            });
                            g.data("$classCounts",
                                c);
                            return d.join(" ")
                        }

                        function m(a, b) {
                            var e = c(b, a),
                                f = c(a, b),
                                e = l(e, 1),
                                f = l(f, -1);
                            e && e.length && d.addClass(g, e);
                            f && f.length && d.removeClass(g, f)
                        }

                        function n(a) {
                            if (!0 === b || (f.$index & 1) === b) {
                                var c = e(a || []);
                                if (!p) k(c);
                                else if (!na(a, p)) {
                                    var d = e(p);
                                    m(d, c)
                                }
                            }
                            p = K(a) ? a.map(function(a) {
                                return fa(a)
                            }) : fa(a)
                        }
                        var p;
                        f.$watch(h[a], n, !0);
                        h.$observe("class", function(b) {
                            n(f.$eval(h[a]))
                        });
                        "ngClass" !== a && f.$watch("$index", function(c, d) {
                            var g = c & 1;
                            if (g !== (d & 1)) {
                                var m = e(f.$eval(h[a]));
                                g === b ? k(m) : (g = l(m, -1), h.$removeClass(g))
                            }
                        })
                    }
                }
            }
        ]
    }

    function Kd(a) {
        function b(a, b) {
            b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
        }

        function d(a, c) {
            a = a ? "-" + Bc(a, "-") : "";
            b(ob + a, !0 === c);
            b(Od + a, !1 === c)
        }
        var c = a.ctrl,
            e = a.$element,
            f = {},
            g = a.set,
            h = a.unset,
            k = a.$animate;
        f[Od] = !(f[ob] = e.hasClass(ob));
        c.$setValidity = function(a, e, f) {
            y(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f), Pd(c.$pending) && (c.$pending = void 0));
            Ea(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error,
                a, f), h(c.$$success, a, f));
            c.$pending ? (b(Qd, !0), c.$valid = c.$invalid = void 0, d("", null)) : (b(Qd, !1), c.$valid = Pd(c.$error), c.$invalid = !c.$valid, d("", c.$valid));
            e = c.$pending && c.$pending[a] ? void 0 : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;
            d(a, e);
            c.$$parentForm.$setValidity(a, e, c)
        }
    }

    function Pd(a) {
        if (a)
            for (var b in a)
                if (a.hasOwnProperty(b)) return !1;
        return !0
    }
    var Bg = /^\/(.+)\/([a-z]*)$/,
        sa = Object.prototype.hasOwnProperty,
        L = function(a) {
            return I(a) ? a.toLowerCase() : a
        },
        ub = function(a) {
            return I(a) ? a.toUpperCase() : a
        },
        Ba,
        G, Y, ya = [].slice,
        ag = [].splice,
        Cg = [].push,
        ja = Object.prototype.toString,
        vc = Object.getPrototypeOf,
        za = O("ng"),
        da = F.angular || (F.angular = {}),
        Vb, pb = 0;
    Ba = F.document.documentMode;
    C.$inject = [];
    Ya.$inject = [];
    var K = Array.isArray,
        ae = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
        V = function(a) {
            return I(a) ? a.trim() : a
        },
        wd = function(a) {
            return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        Fa = function() {
            if (!v(Fa.rules)) {
                var a = F.document.querySelector("[ng-csp]") ||
                    F.document.querySelector("[data-ng-csp]");
                if (a) {
                    var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
                    Fa.rules = {
                        noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"),
                        noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")
                    }
                } else {
                    a = Fa;
                    try {
                        new Function(""), b = !1
                    } catch (d) {
                        b = !0
                    }
                    a.rules = {
                        noUnsafeEval: b,
                        noInlineStyle: !1
                    }
                }
            }
            return Fa.rules
        },
        rb = function() {
            if (v(rb.name_)) return rb.name_;
            var a, b, d = Oa.length,
                c, e;
            for (b = 0; b < d; ++b)
                if (c = Oa[b], a = F.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
                    e = a.getAttribute(c +
                        "jq");
                    break
                }
            return rb.name_ = e
        },
        de = /:/g,
        Oa = ["ng-", "data-ng-", "ng:", "x-ng-"],
        ie = /[A-Z]/g,
        Cc = !1,
        Na = 3,
        me = {
            full: "1.5.6",
            major: 1,
            minor: 5,
            dot: 6,
            codeName: "arrow-stringification"
        };
    T.expando = "ng339";
    var gb = T.cache = {},
        Of = 1;
    T._data = function(a) {
        return this.cache[a[this.expando]] || {}
    };
    var Jf = /([\:\-\_]+(.))/g,
        Kf = /^moz([A-Z])/,
        yb = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        Xb = O("jqLite"),
        Nf = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Wb = /<|&#?\w+;/,
        Lf = /<([\w:-]+)/,
        Mf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ga = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ga.optgroup = ga.option;
    ga.tbody = ga.tfoot = ga.colgroup = ga.caption = ga.thead;
    ga.th = ga.td;
    var Tf = F.Node.prototype.contains || function(a) {
            return !!(this.compareDocumentPosition(a) & 16)
        },
        Pa = T.prototype = {
            ready: function(a) {
                function b() {
                    d || (d = !0, a())
                }
                var d = !1;
                "complete" ===
                F.document.readyState ? F.setTimeout(b) : (this.on("DOMContentLoaded", b), T(F).on("load", b))
            },
            toString: function() {
                var a = [];
                q(this, function(b) {
                    a.push("" + b)
                });
                return "[" + a.join(", ") + "]"
            },
            eq: function(a) {
                return 0 <= a ? G(this[a]) : G(this[this.length + a])
            },
            length: 0,
            push: Cg,
            sort: [].sort,
            splice: [].splice
        },
        Eb = {};
    q("multiple selected checked disabled readOnly required open".split(" "), function(a) {
        Eb[L(a)] = a
    });
    var Uc = {};
    q("input select option textarea button form details".split(" "), function(a) {
        Uc[a] = !0
    });
    var bd = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    q({
        data: Zb,
        removeData: fb,
        hasData: function(a) {
            for (var b in gb[a.ng339]) return !0;
            return !1
        },
        cleanData: function(a) {
            for (var b = 0, d = a.length; b < d; b++) fb(a[b])
        }
    }, function(a, b) {
        T[b] = a
    });
    q({
        data: Zb,
        inheritedData: Cb,
        scope: function(a) {
            return G.data(a, "$scope") || Cb(a.parentNode || a, ["$isolateScope", "$scope"])
        },
        isolateScope: function(a) {
            return G.data(a, "$isolateScope") || G.data(a, "$isolateScopeNoTemplate")
        },
        controller: Rc,
        injector: function(a) {
            return Cb(a,
                "$injector")
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b)
        },
        hasClass: zb,
        css: function(a, b, d) {
            b = eb(b);
            if (v(d)) a.style[b] = d;
            else return a.style[b]
        },
        attr: function(a, b, d) {
            var c = a.nodeType;
            if (c !== Na && 2 !== c && 8 !== c)
                if (c = L(b), Eb[c])
                    if (v(d)) d ? (a[b] = !0, a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c));
                    else return a[b] || (a.attributes.getNamedItem(b) || C).specified ? c : void 0;
            else if (v(d)) a.setAttribute(b, d);
            else if (a.getAttribute) return a = a.getAttribute(b, 2), null === a ? void 0 : a
        },
        prop: function(a, b, d) {
            if (v(d)) a[b] =
                d;
            else return a[b]
        },
        text: function() {
            function a(a, d) {
                if (y(d)) {
                    var c = a.nodeType;
                    return 1 === c || c === Na ? a.textContent : ""
                }
                a.textContent = d
            }
            a.$dv = "";
            return a
        }(),
        val: function(a, b) {
            if (y(b)) {
                if (a.multiple && "select" === ta(a)) {
                    var d = [];
                    q(a.options, function(a) {
                        a.selected && d.push(a.value || a.text)
                    });
                    return 0 === d.length ? null : d
                }
                return a.value
            }
            a.value = b
        },
        html: function(a, b) {
            if (y(b)) return a.innerHTML;
            wb(a, !0);
            a.innerHTML = b
        },
        empty: Sc
    }, function(a, b) {
        T.prototype[b] = function(b, c) {
            var e, f, g = this.length;
            if (a !== Sc && y(2 == a.length &&
                    a !== zb && a !== Rc ? b : c)) {
                if (J(b)) {
                    for (e = 0; e < g; e++)
                        if (a === Zb) a(this[e], b);
                        else
                            for (f in b) a(this[e], f, b[f]);
                    return this
                }
                e = a.$dv;
                g = y(e) ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = a(this[f], b, c);
                    e = e ? e + h : h
                }
                return e
            }
            for (e = 0; e < g; e++) a(this[e], b, c);
            return this
        }
    });
    q({
        removeData: fb,
        on: function(a, b, d, c) {
            if (v(c)) throw Xb("onargs");
            if (Mc(a)) {
                c = xb(a, !0);
                var e = c.events,
                    f = c.handle;
                f || (f = c.handle = Qf(a, e));
                c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];
                for (var g = c.length, h = function(b, c, g) {
                        var h = e[b];
                        h || (h = e[b] = [], h.specialHandlerWrapper =
                            c, "$destroy" === b || g || a.addEventListener(b, f, !1));
                        h.push(d)
                    }; g--;) b = c[g], yb[b] ? (h(yb[b], Sf), h(b, void 0, !0)) : h(b)
            }
        },
        off: Qc,
        one: function(a, b, d) {
            a = G(a);
            a.on(b, function e() {
                a.off(b, d);
                a.off(b, e)
            });
            a.on(b, d)
        },
        replaceWith: function(a, b) {
            var d, c = a.parentNode;
            wb(a);
            q(new T(b), function(b) {
                d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
                d = b
            })
        },
        children: function(a) {
            var b = [];
            q(a.childNodes, function(a) {
                1 === a.nodeType && b.push(a)
            });
            return b
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function(a,
            b) {
            var d = a.nodeType;
            if (1 === d || 11 === d) {
                b = new T(b);
                for (var d = 0, c = b.length; d < c; d++) a.appendChild(b[d])
            }
        },
        prepend: function(a, b) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                q(new T(b), function(b) {
                    a.insertBefore(b, d)
                })
            }
        },
        wrap: function(a, b) {
            Oc(a, G(b).eq(0).clone()[0])
        },
        remove: Db,
        detach: function(a) {
            Db(a, !0)
        },
        after: function(a, b) {
            var d = a,
                c = a.parentNode;
            b = new T(b);
            for (var e = 0, f = b.length; e < f; e++) {
                var g = b[e];
                c.insertBefore(g, d.nextSibling);
                d = g
            }
        },
        addClass: Bb,
        removeClass: Ab,
        toggleClass: function(a, b, d) {
            b && q(b.split(" "),
                function(b) {
                    var e = d;
                    y(e) && (e = !zb(a, b));
                    (e ? Bb : Ab)(a, b)
                })
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        next: function(a) {
            return a.nextElementSibling
        },
        find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        },
        clone: Yb,
        triggerHandler: function(a, b, d) {
            var c, e, f = b.type || b,
                g = xb(a);
            if (g = (g = g && g.events) && g[f]) c = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped
                },
                stopPropagation: C,
                type: f,
                target: a
            }, b.type && (c = P(c, b)), b = fa(g), e = d ? [c].concat(d) : [c], q(b, function(b) {
                c.isImmediatePropagationStopped() || b.apply(a, e)
            })
        }
    }, function(a, b) {
        T.prototype[b] = function(b, c, e) {
            for (var f, g = 0, h = this.length; g < h; g++) y(f) ? (f = a(this[g], b, c, e), v(f) && (f = G(f))) : Pc(f, a(this[g], b, c, e));
            return v(f) ? f : this
        };
        T.prototype.bind = T.prototype.on;
        T.prototype.unbind = T.prototype.off
    });
    Sa.prototype = {
        put: function(a,
            b) {
            this[Ga(a, this.nextUid)] = b
        },
        get: function(a) {
            return this[Ga(a, this.nextUid)]
        },
        remove: function(a) {
            var b = this[a = Ga(a, this.nextUid)];
            delete this[a];
            return b
        }
    };
    var Hf = [function() {
            this.$get = [function() {
                return Sa
            }]
        }],
        Vf = /^([^\(]+?)=>/,
        Wf = /^[^\(]*\(\s*([^\)]*)\)/m,
        Dg = /,/,
        Eg = /^\s*(_?)(\S+?)\1\s*$/,
        Uf = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
        Ha = O("$injector");
    db.$$annotate = function(a, b, d) {
        var c;
        if ("function" === typeof a) {
            if (!(c = a.$inject)) {
                c = [];
                if (a.length) {
                    if (b) throw I(d) && d || (d = a.name || Xf(a)), Ha("strictdi", d);
                    b = Vc(a);
                    q(b[1].split(Dg), function(a) {
                        a.replace(Eg, function(a, b, d) {
                            c.push(d)
                        })
                    })
                }
                a.$inject = c
            }
        } else K(a) ? (b = a.length - 1, Qa(a[b], "fn"), c = a.slice(0, b)) : Qa(a, "fn", !0);
        return c
    };
    var Rd = O("$animate"),
        $e = function() {
            this.$get = C
        },
        af = function() {
            var a = new Sa,
                b = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function(d, c) {
                function e(a, b, c) {
                    var d = !1;
                    b && (b = I(b) ? b.split(" ") : K(b) ? b : [], q(b, function(b) {
                        b && (d = !0, a[b] = c)
                    }));
                    return d
                }

                function f() {
                    q(b, function(b) {
                        var c = a.get(b);
                        if (c) {
                            var d = Yf(b.attr("class")),
                                e = "",
                                f = "";
                            q(c,
                                function(a, b) {
                                    a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b)
                                });
                            q(b, function(a) {
                                e && Bb(a, e);
                                f && Ab(a, f)
                            });
                            a.remove(b)
                        }
                    });
                    b.length = 0
                }
                return {
                    enabled: C,
                    on: C,
                    off: C,
                    pin: C,
                    push: function(g, h, k, l) {
                        l && l();
                        k = k || {};
                        k.from && g.css(k.from);
                        k.to && g.css(k.to);
                        if (k.addClass || k.removeClass)
                            if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l) a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);
                        g = new d;
                        g.complete();
                        return g
                    }
                }
            }]
        },
        Ye = ["$provide", function(a) {
            var b = this;
            this.$$registeredAnimations =
                Object.create(null);
            this.register = function(d, c) {
                if (d && "." !== d.charAt(0)) throw Rd("notcsel", d);
                var e = d + "-animation";
                b.$$registeredAnimations[d.substr(1)] = e;
                a.factory(e, c)
            };
            this.classNameFilter = function(a) {
                if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Rd("nongcls", "ng-animate");
                return this.$$classNameFilter
            };
            this.$get = ["$$animateQueue", function(a) {
                function b(a, c, d) {
                    if (d) {
                        var h;
                        a: {
                            for (h = 0; h < d.length; h++) {
                                var k =
                                    d[h];
                                if (1 === k.nodeType) {
                                    h = k;
                                    break a
                                }
                            }
                            h = void 0
                        }!h || h.parentNode || h.previousElementSibling || (d = null)
                    }
                    d ? d.after(a) : c.prepend(a)
                }
                return {
                    on: a.on,
                    off: a.off,
                    pin: a.pin,
                    enabled: a.enabled,
                    cancel: function(a) {
                        a.end && a.end()
                    },
                    enter: function(e, f, g, h) {
                        f = f && G(f);
                        g = g && G(g);
                        f = f || g.parent();
                        b(e, f, g);
                        return a.push(e, "enter", Ia(h))
                    },
                    move: function(e, f, g, h) {
                        f = f && G(f);
                        g = g && G(g);
                        f = f || g.parent();
                        b(e, f, g);
                        return a.push(e, "move", Ia(h))
                    },
                    leave: function(b, c) {
                        return a.push(b, "leave", Ia(c), function() {
                            b.remove()
                        })
                    },
                    addClass: function(b,
                        c, g) {
                        g = Ia(g);
                        g.addClass = hb(g.addclass, c);
                        return a.push(b, "addClass", g)
                    },
                    removeClass: function(b, c, g) {
                        g = Ia(g);
                        g.removeClass = hb(g.removeClass, c);
                        return a.push(b, "removeClass", g)
                    },
                    setClass: function(b, c, g, h) {
                        h = Ia(h);
                        h.addClass = hb(h.addClass, c);
                        h.removeClass = hb(h.removeClass, g);
                        return a.push(b, "setClass", h)
                    },
                    animate: function(b, c, g, h, k) {
                        k = Ia(k);
                        k.from = k.from ? P(k.from, c) : c;
                        k.to = k.to ? P(k.to, g) : g;
                        k.tempClasses = hb(k.tempClasses, h || "ng-inline-animate");
                        return a.push(b, "animate", k)
                    }
                }
            }]
        }],
        cf = function() {
            this.$get = ["$$rAF", function(a) {
                function b(b) {
                    d.push(b);
                    1 < d.length || a(function() {
                        for (var a = 0; a < d.length; a++) d[a]();
                        d = []
                    })
                }
                var d = [];
                return function() {
                    var a = !1;
                    b(function() {
                        a = !0
                    });
                    return function(d) {
                        a ? d() : b(d)
                    }
                }
            }]
        },
        bf = function() {
            this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function(a, b, d, c, e) {
                function f(a) {
                    this.setHost(a);
                    var b = d();
                    this._doneCallbacks = [];
                    this._tick = function(a) {
                        var d = c[0];
                        d && d.hidden ? e(a, 0, !1) : b(a)
                    };
                    this._state = 0
                }
                f.chain = function(a, b) {
                    function c() {
                        if (d === a.length) b(!0);
                        else a[d](function(a) {
                            !1 === a ? b(!1) : (d++, c())
                        })
                    }
                    var d = 0;
                    c()
                };
                f.all = function(a, b) {
                    function c(f) {
                        e = e && f;
                        ++d === a.length && b(e)
                    }
                    var d = 0,
                        e = !0;
                    q(a, function(a) {
                        a.done(c)
                    })
                };
                f.prototype = {
                    setHost: function(a) {
                        this.host = a || {}
                    },
                    done: function(a) {
                        2 === this._state ? a() : this._doneCallbacks.push(a)
                    },
                    progress: C,
                    getPromise: function() {
                        if (!this.promise) {
                            var b = this;
                            this.promise = a(function(a, c) {
                                b.done(function(b) {
                                    !1 === b ? c() : a()
                                })
                            })
                        }
                        return this.promise
                    },
                    then: function(a, b) {
                        return this.getPromise().then(a, b)
                    },
                    "catch": function(a) {
                        return this.getPromise()["catch"](a)
                    },
                    "finally": function(a) {
                        return this.getPromise()["finally"](a)
                    },
                    pause: function() {
                        this.host.pause && this.host.pause()
                    },
                    resume: function() {
                        this.host.resume && this.host.resume()
                    },
                    end: function() {
                        this.host.end && this.host.end();
                        this._resolve(!0)
                    },
                    cancel: function() {
                        this.host.cancel && this.host.cancel();
                        this._resolve(!1)
                    },
                    complete: function(a) {
                        var b = this;
                        0 === b._state && (b._state = 1, b._tick(function() {
                            b._resolve(a)
                        }))
                    },
                    _resolve: function(a) {
                        2 !== this._state && (q(this._doneCallbacks, function(b) {
                                b(a)
                            }), this._doneCallbacks.length =
                            0, this._state = 2)
                    }
                };
                return f
            }]
        },
        Ze = function() {
            this.$get = ["$$rAF", "$q", "$$AnimateRunner", function(a, b, d) {
                return function(b, e) {
                    function f() {
                        a(function() {
                            g.addClass && (b.addClass(g.addClass), g.addClass = null);
                            g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);
                            g.to && (b.css(g.to), g.to = null);
                            h || k.complete();
                            h = !0
                        });
                        return k
                    }
                    var g = e || {};
                    g.$$prepared || (g = oa(g));
                    g.cleanupStyles && (g.from = g.to = null);
                    g.from && (b.css(g.from), g.from = null);
                    var h, k = new d;
                    return {
                        start: f,
                        end: f
                    }
                }
            }]
        },
        ea = O("$compile"),
        bc = new function() {};
    Ec.$inject = ["$provide", "$$sanitizeUriProvider"];
    Gb.prototype.isFirstChange = function() {
        return this.previousValue === bc
    };
    var Xc = /^((?:x|data)[\:\-_])/i,
        bg = O("$controller"),
        cd = /^(\S+)(\s+as\s+([\w$]+))?$/,
        jf = function() {
            this.$get = ["$document", function(a) {
                return function(b) {
                    b ? !b.nodeType && b instanceof G && (b = b[0]) : b = a[0].body;
                    return b.offsetWidth + 1
                }
            }]
        },
        dd = "application/json",
        ec = {
            "Content-Type": dd + ";charset=utf-8"
        },
        dg = /^\[|^\{(?!\{)/,
        eg = {
            "[": /]$/,
            "{": /}$/
        },
        cg = /^\)\]\}',?\n/,
        Fg = O("$http"),
        hd = function(a) {
            return function() {
                throw Fg("legacy",
                    a);
            }
        },
        Ka = da.$interpolateMinErr = O("$interpolate");
    Ka.throwNoconcat = function(a) {
        throw Ka("noconcat", a);
    };
    Ka.interr = function(a, b) {
        return Ka("interr", a, b.toString())
    };
    var Gg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        gg = {
            http: 80,
            https: 443,
            ftp: 21
        },
        Hb = O("$location"),
        Hg = {
            $$html5: !1,
            $$replace: !1,
            absUrl: Ib("$$absUrl"),
            url: function(a) {
                if (y(a)) return this.$$url;
                var b = Gg.exec(a);
                (b[1] || "" === a) && this.path(decodeURIComponent(b[1]));
                (b[2] || b[1] || "" === a) && this.search(b[3] || "");
                this.hash(b[5] || "");
                return this
            },
            protocol: Ib("$$protocol"),
            host: Ib("$$host"),
            port: Ib("$$port"),
            path: md("$$path", function(a) {
                a = null !== a ? a.toString() : "";
                return "/" == a.charAt(0) ? a : "/" + a
            }),
            search: function(a, b) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (I(a) || Q(a)) a = a.toString(), this.$$search = zc(a);
                        else if (J(a)) a = oa(a, {}), q(a, function(b, c) {
                            null == b && delete a[c]
                        }), this.$$search = a;
                        else throw Hb("isrcharg");
                        break;
                    default:
                        y(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
                }
                this.$$compose();
                return this
            },
            hash: md("$$hash", function(a) {
                return null !==
                    a ? a.toString() : ""
            }),
            replace: function() {
                this.$$replace = !0;
                return this
            }
        };
    q([ld, hc, gc], function(a) {
        a.prototype = Object.create(Hg);
        a.prototype.state = function(b) {
            if (!arguments.length) return this.$$state;
            if (a !== gc || !this.$$html5) throw Hb("nostate");
            this.$$state = y(b) ? null : b;
            return this
        }
    });
    var ba = O("$parse"),
        ig = Function.prototype.call,
        jg = Function.prototype.apply,
        kg = Function.prototype.bind,
        Pb = S();
    q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
        Pb[a] = !0
    });
    var Ig = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        },
        jc = function(a) {
            this.options = a
        };
    jc.prototype = {
        constructor: jc,
        lex: function(a) {
            this.text = a;
            this.index = 0;
            for (this.tokens = []; this.index < this.text.length;)
                if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);
                else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();
            else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
            else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: a
            }), this.index++;
            else if (this.isWhitespace(a)) this.index++;
            else {
                var b = a + this.peek(),
                    d = b + this.peek(2),
                    c = Pb[b],
                    e = Pb[d];
                Pb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        },
        is: function(a, b) {
            return -1 !== b.indexOf(a)
        },
        peek: function(a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        },
        isNumber: function(a) {
            return "0" <= a && "9" >= a && "string" === typeof a
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a ||
                "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        },
        isIdentifierStart: function(a) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a)
        },
        isValidIdentifierStart: function(a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        },
        isIdentifierContinue: function(a) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a)
        },
        isValidIdentifierContinue: function(a, b) {
            return this.isValidIdentifierStart(a,
                b) || this.isNumber(a)
        },
        codePointAt: function(a) {
            return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888
        },
        peekMultichar: function() {
            var a = this.text.charAt(this.index),
                b = this.peek();
            if (!b) return a;
            var d = a.charCodeAt(0),
                c = b.charCodeAt(0);
            return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },
        throwError: function(a, b, d) {
            d = d || this.index;
            b = v(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;
            throw ba("lexerr",
                a, b, this.text);
        },
        readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var d = L(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d)) a += d;
                else {
                    var c = this.peek();
                    if ("e" == d && this.isExpOperator(c)) a += d;
                    else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1)) a += d;
                    else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" != a.charAt(a.length - 1)) break;
                    else this.throwError("Invalid exponent")
                }
                this.index++
            }
            this.tokens.push({
                index: b,
                text: a,
                constant: !0,
                value: Number(a)
            })
        },
        readIdent: function() {
            var a = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var b = this.peekMultichar();
                if (!this.isIdentifierContinue(b)) break;
                this.index += b.length
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            })
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            for (var d = "", c = a, e = !1; this.index < this.text.length;) {
                var f = this.text.charAt(this.index),
                    c = c + f;
                if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) ||
                    this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += Ig[f] || f, e = !1;
                else if ("\\" === f) e = !0;
                else {
                    if (f === a) {
                        this.index++;
                        this.tokens.push({
                            index: b,
                            text: c,
                            constant: !0,
                            value: d
                        });
                        return
                    }
                    d += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var s = function(a, b) {
        this.lexer = a;
        this.options = b
    };
    s.Program = "Program";
    s.ExpressionStatement = "ExpressionStatement";
    s.AssignmentExpression = "AssignmentExpression";
    s.ConditionalExpression = "ConditionalExpression";
    s.LogicalExpression = "LogicalExpression";
    s.BinaryExpression = "BinaryExpression";
    s.UnaryExpression = "UnaryExpression";
    s.CallExpression = "CallExpression";
    s.MemberExpression = "MemberExpression";
    s.Identifier = "Identifier";
    s.Literal = "Literal";
    s.ArrayExpression = "ArrayExpression";
    s.Property = "Property";
    s.ObjectExpression = "ObjectExpression";
    s.ThisExpression = "ThisExpression";
    s.LocalsExpression = "LocalsExpression";
    s.NGValueParameter = "NGValueParameter";
    s.prototype = {
        ast: function(a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.program();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            return a
        },
        program: function() {
            for (var a = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
                    type: s.Program,
                    body: a
                }
        },
        expressionStatement: function() {
            return {
                type: s.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function() {
            for (var a = this.expression(); this.expect("|");) a = this.filter(a);
            return a
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var a = this.ternary();
            this.expect("=") && (a = {
                type: s.AssignmentExpression,
                left: a,
                right: this.assignment(),
                operator: "="
            });
            return a
        },
        ternary: function() {
            var a = this.logicalOR(),
                b, d;
            return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), {
                type: s.ConditionalExpression,
                test: a,
                alternate: b,
                consequent: d
            }) : a
        },
        logicalOR: function() {
            for (var a = this.logicalAND(); this.expect("||");) a = {
                type: s.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a
        },
        logicalAND: function() {
            for (var a =
                    this.equality(); this.expect("&&");) a = {
                type: s.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a
        },
        equality: function() {
            for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.relational()
            };
            return a
        },
        relational: function() {
            for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.additive()
            };
            return a
        },
        additive: function() {
            for (var a = this.multiplicative(),
                    b; b = this.expect("+", "-");) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.multiplicative()
            };
            return a
        },
        multiplicative: function() {
            for (var a = this.unary(), b; b = this.expect("*", "/", "%");) a = {
                type: s.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.unary()
            };
            return a
        },
        unary: function() {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: s.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) :
                this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = oa(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = {
                    type: s.Literal,
                    value: this.options.literals[this.consume().text]
                } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = {
                type: s.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === b.text ? (a = {
                type: s.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === b.text ? a = {
                type: s.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a
        },
        filter: function(a) {
            a = [a];
            for (var b = {
                    type: s.CallExpression,
                    callee: this.identifier(),
                    arguments: a,
                    filter: !0
                }; this.expect(":");) a.push(this.expression());
            return b
        },
        parseArguments: function() {
            var a = [];
            if (")" !==
                this.peekToken().text) {
                do a.push(this.expression()); while (this.expect(","))
            }
            return a
        },
        identifier: function() {
            var a = this.consume();
            a.identifier || this.throwError("is not a valid identifier", a);
            return {
                type: s.Identifier,
                name: a.text
            }
        },
        constant: function() {
            return {
                type: s.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]")) break;
                    a.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("]");
            return {
                type: s.ArrayExpression,
                elements: a
            }
        },
        object: function() {
            var a = [],
                b;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}")) break;
                    b = {
                        type: s.Property,
                        kind: "init"
                    };
                    this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"), b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key",
                        this.peek());
                    a.push(b)
                } while (this.expect(","))
            }
            this.consume("}");
            return {
                type: s.ObjectExpression,
                properties: a
            }
        },
        throwError: function(a, b) {
            throw ba("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        },
        consume: function(a) {
            if (0 === this.tokens.length) throw ba("ueoe", this.text);
            var b = this.expect(a);
            b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
            return b
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw ba("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function(a, b,
            d, c) {
            return this.peekAhead(0, a, b, d, c)
        },
        peekAhead: function(a, b, d, c, e) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var f = a.text;
                if (f === b || f === d || f === c || f === e || !(b || d || c || e)) return a
            }
            return !1
        },
        expect: function(a, b, d, c) {
            return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1
        },
        selfReferential: {
            "this": {
                type: s.ThisExpression
            },
            $locals: {
                type: s.LocalsExpression
            }
        }
    };
    td.prototype = {
        compile: function(a, b) {
            var d = this,
                c = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: b,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            };
            Z(c, d.$filter);
            var e = "",
                f;
            this.stage = "assign";
            if (f = rd(c)) this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), this.return_(e), e = "fn.assign=" + this.generateFunction("assign", "s,v,l");
            f = pd(c.body);
            d.stage = "inputs";
            q(f, function(a, b) {
                var c = "fn" + b;
                d.state[c] = {
                    vars: [],
                    body: [],
                    own: {}
                };
                d.state.computing = c;
                var e = d.nextId();
                d.recurse(a, e);
                d.return_(e);
                d.state.inputs.push(c);
                a.watchId = b
            });
            this.state.computing = "fn";
            this.stage = "main";
            this.recurse(c);
            e = '"' + this.USE +
                " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";
            e = (new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", e))(this.$filter, Ua, qa, nd, hg, Jb, lg, od, a);
            this.state = this.stage = void 0;
            e.literal = sd(c);
            e.constant = c.constant;
            return e
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function() {
            var a = [],
                b = this.state.inputs,
                d = this;
            q(b, function(b) {
                a.push("var " +
                    b + "=" + d.generateFunction(b, "s"))
            });
            b.length && a.push("fn.inputs=[" + b.join(",") + "];");
            return a.join("")
        },
        generateFunction: function(a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
        },
        filterPrefix: function() {
            var a = [],
                b = this;
            q(this.state.filters, function(d, c) {
                a.push(d + "=$filter(" + b.escape(c) + ")")
            });
            return a.length ? "var " + a.join(",") + ";" : ""
        },
        varsPrefix: function(a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
        },
        body: function(a) {
            return this.state[a].body.join("")
        },
        recurse: function(a, b, d, c, e, f) {
            var g, h, k = this,
                l, m, n;
            c = c || C;
            if (!f && v(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0));
            else switch (a.type) {
                case s.Program:
                    q(a.body, function(b, c) {
                        k.recurse(b.expression, void 0, void 0, function(a) {
                            h = a
                        });
                        c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h)
                    });
                    break;
                case s.Literal:
                    m = this.escape(a.value);
                    this.assign(b, m);
                    c(m);
                    break;
                case s.UnaryExpression:
                    this.recurse(a.argument, void 0, void 0,
                        function(a) {
                            h = a
                        });
                    m = a.operator + "(" + this.ifDefined(h, 0) + ")";
                    this.assign(b, m);
                    c(m);
                    break;
                case s.BinaryExpression:
                    this.recurse(a.left, void 0, void 0, function(a) {
                        g = a
                    });
                    this.recurse(a.right, void 0, void 0, function(a) {
                        h = a
                    });
                    m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h, 0) : "(" + g + ")" + a.operator + "(" + h + ")";
                    this.assign(b, m);
                    c(m);
                    break;
                case s.LogicalExpression:
                    b = b || this.nextId();
                    k.recurse(a.left, b);
                    k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
                    c(b);
                    break;
                case s.ConditionalExpression:
                    b = b || this.nextId();
                    k.recurse(a.test, b);
                    k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));
                    c(b);
                    break;
                case s.Identifier:
                    b = b || this.nextId();
                    d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);
                    Ua(a.name);
                    k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function() {
                        k.if_("inputs" === k.stage || "s", function() {
                            e && 1 !== e && k.if_(k.not(k.nonComputedMember("s",
                                a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));
                            k.assign(b, k.nonComputedMember("s", a.name))
                        })
                    }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));
                    (k.state.expensiveChecks || Kb(a.name)) && k.addEnsureSafeObject(b);
                    c(b);
                    break;
                case s.MemberExpression:
                    g = d && (d.context = this.nextId()) || this.nextId();
                    b = b || this.nextId();
                    k.recurse(a.object, g, void 0, function() {
                        k.if_(k.notNull(g), function() {
                                e && 1 !== e && k.addEnsureSafeAssignContext(g);
                                if (a.computed) h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h),
                                    k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.ensureSafeObject(k.computedMember(g, h)), k.assign(b, m), d && (d.computed = !0, d.name = h);
                                else {
                                    Ua(a.property.name);
                                    e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g, a.property.name), "{}"));
                                    m = k.nonComputedMember(g, a.property.name);
                                    if (k.state.expensiveChecks || Kb(a.property.name)) m = k.ensureSafeObject(m);
                                    k.assign(b, m);
                                    d && (d.computed = !1, d.name = a.property.name)
                                }
                            },
                            function() {
                                k.assign(b, "undefined")
                            });
                        c(b)
                    }, !!e);
                    break;
                case s.CallExpression:
                    b = b || this.nextId();
                    a.filter ? (h = k.filter(a.callee.name), l = [], q(a.arguments, function(a) {
                        var b = k.nextId();
                        k.recurse(a, b);
                        l.push(b)
                    }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function() {
                        k.if_(k.notNull(h), function() {
                            k.addEnsureSafeFunction(h);
                            q(a.arguments, function(a) {
                                k.recurse(a, k.nextId(), void 0, function(a) {
                                    l.push(k.ensureSafeObject(a))
                                })
                            });
                            g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context),
                                m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";
                            m = k.ensureSafeObject(m);
                            k.assign(b, m)
                        }, function() {
                            k.assign(b, "undefined")
                        });
                        c(b)
                    }));
                    break;
                case s.AssignmentExpression:
                    h = this.nextId();
                    g = {};
                    if (!qd(a.left)) throw ba("lval");
                    this.recurse(a.left, void 0, g, function() {
                        k.if_(k.notNull(g.context), function() {
                            k.recurse(a.right, h);
                            k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));
                            k.addEnsureSafeAssignContext(g.context);
                            m = k.member(g.context, g.name, g.computed) + a.operator +
                                h;
                            k.assign(b, m);
                            c(b || m)
                        })
                    }, 1);
                    break;
                case s.ArrayExpression:
                    l = [];
                    q(a.elements, function(a) {
                        k.recurse(a, k.nextId(), void 0, function(a) {
                            l.push(a)
                        })
                    });
                    m = "[" + l.join(",") + "]";
                    this.assign(b, m);
                    c(m);
                    break;
                case s.ObjectExpression:
                    l = [];
                    n = !1;
                    q(a.properties, function(a) {
                        a.computed && (n = !0)
                    });
                    n ? (b = b || this.nextId(), this.assign(b, "{}"), q(a.properties, function(a) {
                        a.computed ? (g = k.nextId(), k.recurse(a.key, g)) : g = a.key.type === s.Identifier ? a.key.name : "" + a.key.value;
                        h = k.nextId();
                        k.recurse(a.value, h);
                        k.assign(k.member(b, g,
                            a.computed), h)
                    })) : (q(a.properties, function(b) {
                        k.recurse(b.value, a.constant ? void 0 : k.nextId(), void 0, function(a) {
                            l.push(k.escape(b.key.type === s.Identifier ? b.key.name : "" + b.key.value) + ":" + a)
                        })
                    }), m = "{" + l.join(",") + "}", this.assign(b, m));
                    c(b || m);
                    break;
                case s.ThisExpression:
                    this.assign(b, "s");
                    c("s");
                    break;
                case s.LocalsExpression:
                    this.assign(b, "l");
                    c("l");
                    break;
                case s.NGValueParameter:
                    this.assign(b, "v"), c("v")
            }
        },
        getHasOwnProperty: function(a, b) {
            var d = a + "." + b,
                c = this.current().own;
            c.hasOwnProperty(d) || (c[d] =
                this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));
            return c[d]
        },
        assign: function(a, b) {
            if (a) return this.current().body.push(a, "=", b, ";"), a
        },
        filter: function(a) {
            this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0));
            return this.state.filters[a]
        },
        ifDefined: function(a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")"
        },
        plus: function(a, b) {
            return "plus(" + a + "," + b + ")"
        },
        return_: function(a) {
            this.current().body.push("return ", a, ";")
        },
        if_: function(a, b, d) {
            if (!0 === a) b();
            else {
                var c = this.current().body;
                c.push("if(", a, "){");
                b();
                c.push("}");
                d && (c.push("else{"), d(), c.push("}"))
            }
        },
        not: function(a) {
            return "!(" + a + ")"
        },
        notNull: function(a) {
            return a + "!=null"
        },
        nonComputedMember: function(a, b) {
            var d = /[^$_a-zA-Z0-9]/g;
            return /[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
        },
        computedMember: function(a, b) {
            return a + "[" + b + "]"
        },
        member: function(a, b, d) {
            return d ? this.computedMember(a, b) : this.nonComputedMember(a, b)
        },
        addEnsureSafeObject: function(a) {
            this.current().body.push(this.ensureSafeObject(a),
                ";")
        },
        addEnsureSafeMemberName: function(a) {
            this.current().body.push(this.ensureSafeMemberName(a), ";")
        },
        addEnsureSafeFunction: function(a) {
            this.current().body.push(this.ensureSafeFunction(a), ";")
        },
        addEnsureSafeAssignContext: function(a) {
            this.current().body.push(this.ensureSafeAssignContext(a), ";")
        },
        ensureSafeObject: function(a) {
            return "ensureSafeObject(" + a + ",text)"
        },
        ensureSafeMemberName: function(a) {
            return "ensureSafeMemberName(" + a + ",text)"
        },
        ensureSafeFunction: function(a) {
            return "ensureSafeFunction(" + a + ",text)"
        },
        getStringValue: function(a) {
            this.assign(a, "getStringValue(" + a + ")")
        },
        ensureSafeAssignContext: function(a) {
            return "ensureSafeAssignContext(" + a + ",text)"
        },
        lazyRecurse: function(a, b, d, c, e, f) {
            var g = this;
            return function() {
                g.recurse(a, b, d, c, e, f)
            }
        },
        lazyAssign: function(a, b) {
            var d = this;
            return function() {
                d.assign(a, b)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function(a) {
            if (I(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) +
                "'";
            if (Q(a)) return a.toString();
            if (!0 === a) return "true";
            if (!1 === a) return "false";
            if (null === a) return "null";
            if ("undefined" === typeof a) return "undefined";
            throw ba("esc");
        },
        nextId: function(a, b) {
            var d = "v" + this.state.nextId++;
            a || this.current().vars.push(d + (b ? "=" + b : ""));
            return d
        },
        current: function() {
            return this.state[this.state.computing]
        }
    };
    ud.prototype = {
        compile: function(a, b) {
            var d = this,
                c = this.astBuilder.ast(a);
            this.expression = a;
            this.expensiveChecks = b;
            Z(c, d.$filter);
            var e, f;
            if (e = rd(c)) f = this.recurse(e);
            e = pd(c.body);
            var g;
            e && (g = [], q(e, function(a, b) {
                var c = d.recurse(a);
                a.input = c;
                g.push(c);
                a.watchId = b
            }));
            var h = [];
            q(c.body, function(a) {
                h.push(d.recurse(a.expression))
            });
            e = 0 === c.body.length ? C : 1 === c.body.length ? h[0] : function(a, b) {
                var c;
                q(h, function(d) {
                    c = d(a, b)
                });
                return c
            };
            f && (e.assign = function(a, b, c) {
                return f(a, c, b)
            });
            g && (e.inputs = g);
            e.literal = sd(c);
            e.constant = c.constant;
            return e
        },
        recurse: function(a, b, d) {
            var c, e, f = this,
                g;
            if (a.input) return this.inputs(a.input, a.watchId);
            switch (a.type) {
                case s.Literal:
                    return this.value(a.value,
                        b);
                case s.UnaryExpression:
                    return e = this.recurse(a.argument), this["unary" + a.operator](e, b);
                case s.BinaryExpression:
                    return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
                case s.LogicalExpression:
                    return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
                case s.ConditionalExpression:
                    return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
                case s.Identifier:
                    return Ua(a.name, f.expression), f.identifier(a.name,
                        f.expensiveChecks || Kb(a.name), b, d, f.expression);
                case s.MemberExpression:
                    return c = this.recurse(a.object, !1, !!d), a.computed || (Ua(a.property.name, f.expression), e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e, f.expensiveChecks, b, d, f.expression);
                case s.CallExpression:
                    return g = [], q(a.arguments, function(a) {
                            g.push(f.recurse(a))
                        }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ?
                        function(a, c, d, f) {
                            for (var n = [], p = 0; p < g.length; ++p) n.push(g[p](a, c, d, f));
                            a = e.apply(void 0, n, f);
                            return b ? {
                                context: void 0,
                                name: void 0,
                                value: a
                            } : a
                        } : function(a, c, d, m) {
                            var n = e(a, c, d, m),
                                p;
                            if (null != n.value) {
                                qa(n.context, f.expression);
                                nd(n.value, f.expression);
                                p = [];
                                for (var q = 0; q < g.length; ++q) p.push(qa(g[q](a, c, d, m), f.expression));
                                p = qa(n.value.apply(n.context, p), f.expression)
                            }
                            return b ? {
                                value: p
                            } : p
                        };
                case s.AssignmentExpression:
                    return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right),
                        function(a, d, g, m) {
                            var n = c(a,
                                d, g, m);
                            a = e(a, d, g, m);
                            qa(n.value, f.expression);
                            Jb(n.context);
                            n.context[n.name] = a;
                            return b ? {
                                value: a
                            } : a
                        };
                case s.ArrayExpression:
                    return g = [], q(a.elements, function(a) {
                            g.push(f.recurse(a))
                        }),
                        function(a, c, d, e) {
                            for (var f = [], p = 0; p < g.length; ++p) f.push(g[p](a, c, d, e));
                            return b ? {
                                value: f
                            } : f
                        };
                case s.ObjectExpression:
                    return g = [], q(a.properties, function(a) {
                            a.computed ? g.push({
                                key: f.recurse(a.key),
                                computed: !0,
                                value: f.recurse(a.value)
                            }) : g.push({
                                key: a.key.type === s.Identifier ? a.key.name : "" + a.key.value,
                                computed: !1,
                                value: f.recurse(a.value)
                            })
                        }),
                        function(a, c, d, e) {
                            for (var f = {}, p = 0; p < g.length; ++p) g[p].computed ? f[g[p].key(a, c, d, e)] = g[p].value(a, c, d, e) : f[g[p].key] = g[p].value(a, c, d, e);
                            return b ? {
                                value: f
                            } : f
                        };
                case s.ThisExpression:
                    return function(a) {
                        return b ? {
                            value: a
                        } : a
                    };
                case s.LocalsExpression:
                    return function(a, c) {
                        return b ? {
                            value: c
                        } : c
                    };
                case s.NGValueParameter:
                    return function(a, c, d) {
                        return b ? {
                            value: d
                        } : d
                    }
            }
        },
        "unary+": function(a, b) {
            return function(d, c, e, f) {
                d = a(d, c, e, f);
                d = v(d) ? +d : 0;
                return b ? {
                    value: d
                } : d
            }
        },
        "unary-": function(a, b) {
            return function(d, c, e,
                f) {
                d = a(d, c, e, f);
                d = v(d) ? -d : 0;
                return b ? {
                    value: d
                } : d
            }
        },
        "unary!": function(a, b) {
            return function(d, c, e, f) {
                d = !a(d, c, e, f);
                return b ? {
                    value: d
                } : d
            }
        },
        "binary+": function(a, b, d) {
            return function(c, e, f, g) {
                var h = a(c, e, f, g);
                c = b(c, e, f, g);
                h = od(h, c);
                return d ? {
                    value: h
                } : h
            }
        },
        "binary-": function(a, b, d) {
            return function(c, e, f, g) {
                var h = a(c, e, f, g);
                c = b(c, e, f, g);
                h = (v(h) ? h : 0) - (v(c) ? c : 0);
                return d ? {
                    value: h
                } : h
            }
        },
        "binary*": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) * b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary/": function(a, b, d) {
            return function(c,
                e, f, g) {
                c = a(c, e, f, g) / b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary%": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) % b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary===": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) === b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary!==": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) !== b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary==": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) == b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary!=": function(a, b, d) {
            return function(c,
                e, f, g) {
                c = a(c, e, f, g) != b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary<": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) < b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary>": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) > b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary<=": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) <= b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary>=": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) >= b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary&&": function(a, b, d) {
            return function(c, e, f, g) {
                c =
                    a(c, e, f, g) && b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "binary||": function(a, b, d) {
            return function(c, e, f, g) {
                c = a(c, e, f, g) || b(c, e, f, g);
                return d ? {
                    value: c
                } : c
            }
        },
        "ternary?:": function(a, b, d, c) {
            return function(e, f, g, h) {
                e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);
                return c ? {
                    value: e
                } : e
            }
        },
        value: function(a, b) {
            return function() {
                return b ? {
                    context: void 0,
                    name: void 0,
                    value: a
                } : a
            }
        },
        identifier: function(a, b, d, c, e) {
            return function(f, g, h, k) {
                f = g && a in g ? g : f;
                c && 1 !== c && f && !f[a] && (f[a] = {});
                g = f ? f[a] : void 0;
                b && qa(g, e);
                return d ? {
                    context: f,
                    name: a,
                    value: g
                } : g
            }
        },
        computedMember: function(a, b, d, c, e) {
            return function(f, g, h, k) {
                var l = a(f, g, h, k),
                    m, n;
                null != l && (m = b(f, g, h, k), m += "", Ua(m, e), c && 1 !== c && (Jb(l), l && !l[m] && (l[m] = {})), n = l[m], qa(n, e));
                return d ? {
                    context: l,
                    name: m,
                    value: n
                } : n
            }
        },
        nonComputedMember: function(a, b, d, c, e, f) {
            return function(g, h, k, l) {
                g = a(g, h, k, l);
                e && 1 !== e && (Jb(g), g && !g[b] && (g[b] = {}));
                h = null != g ? g[b] : void 0;
                (d || Kb(b)) && qa(h, f);
                return c ? {
                    context: g,
                    name: b,
                    value: h
                } : h
            }
        },
        inputs: function(a, b) {
            return function(d, c, e, f) {
                return f ? f[b] : a(d, c, e)
            }
        }
    };
    var kc =
        function(a, b, d) {
            this.lexer = a;
            this.$filter = b;
            this.options = d;
            this.ast = new s(a, d);
            this.astCompiler = d.csp ? new ud(this.ast, b) : new td(this.ast, b)
        };
    kc.prototype = {
        constructor: kc,
        parse: function(a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks)
        }
    };
    var mg = Object.prototype.valueOf,
        ra = O("$sce"),
        ma = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        og = O("$compile"),
        X = F.document.createElement("a"),
        yd = pa(F.location.href);
    zd.$inject = ["$document"];
    Lc.$inject = ["$provide"];
    var Gd = 22,
        Fd = ".",
        mc = "0";
    Ad.$inject = ["$locale"];
    Cd.$inject = ["$locale"];
    var zg = {
            yyyy: W("FullYear", 4, 0, !1, !0),
            yy: W("FullYear", 2, 0, !0, !0),
            y: W("FullYear", 1, 0, !1, !0),
            MMMM: kb("Month"),
            MMM: kb("Month", !0),
            MM: W("Month", 2, 1),
            M: W("Month", 1, 1),
            LLLL: kb("Month", !1, !0),
            dd: W("Date", 2),
            d: W("Date", 1),
            HH: W("Hours", 2),
            H: W("Hours", 1),
            hh: W("Hours", 2, -12),
            h: W("Hours", 1, -12),
            mm: W("Minutes", 2),
            m: W("Minutes", 1),
            ss: W("Seconds", 2),
            s: W("Seconds", 1),
            sss: W("Milliseconds", 3),
            EEEE: kb("Day"),
            EEE: kb("Day", !0),
            a: function(a, b) {
                return 12 > a.getHours() ?
                    b.AMPMS[0] : b.AMPMS[1]
            },
            Z: function(a, b, d) {
                a = -1 * d;
                return a = (0 <= a ? "+" : "") + (Lb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Lb(Math.abs(a % 60), 2))
            },
            ww: Id(2),
            w: Id(1),
            G: nc,
            GG: nc,
            GGG: nc,
            GGGG: function(a, b) {
                return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1]
            }
        },
        yg = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        xg = /^\-?\d+$/;
    Bd.$inject = ["$locale"];
    var sg = ca(L),
        tg = ca(ub);
    Dd.$inject = ["$parse"];
    var oe = ca({
            restrict: "E",
            compile: function(a, b) {
                if (!b.href && !b.xlinkHref) return function(a,
                    b) {
                    if ("a" === b[0].nodeName.toLowerCase()) {
                        var e = "[object SVGAnimatedString]" === ja.call(b.prop("href")) ? "xlink:href" : "href";
                        b.on("click", function(a) {
                            b.attr(e) || a.preventDefault()
                        })
                    }
                }
            }
        }),
        vb = {};
    q(Eb, function(a, b) {
        function d(a, d, e) {
            a.$watch(e[c], function(a) {
                e.$set(b, !!a)
            })
        }
        if ("multiple" != a) {
            var c = wa("ng-" + b),
                e = d;
            "checked" === a && (e = function(a, b, e) {
                e.ngModel !== e[c] && d(a, b, e)
            });
            vb[c] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: e
                }
            }
        }
    });
    q(bd, function(a, b) {
        vb[b] = function() {
            return {
                priority: 100,
                link: function(a,
                    c, e) {
                    if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(Bg))) {
                        e.$set("ngPattern", new RegExp(c[1], c[2]));
                        return
                    }
                    a.$watch(e[b], function(a) {
                        e.$set(b, a)
                    })
                }
            }
        }
    });
    q(["src", "srcset", "href"], function(a) {
        var b = wa("ng-" + a);
        vb[b] = function() {
            return {
                priority: 99,
                link: function(d, c, e) {
                    var f = a,
                        g = a;
                    "href" === a && "[object SVGAnimatedString]" === ja.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);
                    e.$observe(b, function(b) {
                        b ? (e.$set(g, b), Ba && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null)
                    })
                }
            }
        }
    });
    var Mb = {
        $addControl: C,
        $$renameControl: function(a, b) {
            a.$name = b
        },
        $removeControl: C,
        $setValidity: C,
        $setDirty: C,
        $setPristine: C,
        $setSubmitted: C
    };
    Jd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Sd = function(a) {
            return ["$timeout", "$parse", function(b, d) {
                function c(a) {
                    return "" === a ? d('this[""]').assign : d(a).assign || C
                }
                return {
                    name: "form",
                    restrict: a ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: Jd,
                    compile: function(d, f) {
                        d.addClass(Va).addClass(ob);
                        var g = f.name ? "name" : a && f.ngForm ? "ngForm" :
                            !1;
                        return {
                            pre: function(a, d, e, f) {
                                var n = f[0];
                                if (!("action" in e)) {
                                    var p = function(b) {
                                        a.$apply(function() {
                                            n.$commitViewValue();
                                            n.$setSubmitted()
                                        });
                                        b.preventDefault()
                                    };
                                    d[0].addEventListener("submit", p, !1);
                                    d.on("$destroy", function() {
                                        b(function() {
                                            d[0].removeEventListener("submit", p, !1)
                                        }, 0, !1)
                                    })
                                }(f[1] || n.$$parentForm).$addControl(n);
                                var q = g ? c(n.$name) : C;
                                g && (q(a, n), e.$observe(g, function(b) {
                                    n.$name !== b && (q(a, void 0), n.$$parentForm.$$renameControl(n, b), q = c(n.$name), q(a, n))
                                }));
                                d.on("$destroy", function() {
                                    n.$$parentForm.$removeControl(n);
                                    q(a, void 0);
                                    P(n, Mb)
                                })
                            }
                        }
                    }
                }
            }]
        },
        pe = Sd(),
        Ce = Sd(!0),
        Ag = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        Jg = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        Kg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        Lg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        Td = /^(\d{4,})-(\d{2})-(\d{2})$/,
        Ud = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        qc = /^(\d{4,})-W(\d\d)$/,
        Vd = /^(\d{4,})-(\d\d)$/,
        Wd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Ld = S();
    q(["date", "datetime-local", "month", "time", "week"], function(a) {
        Ld[a] = !0
    });
    var Xd = {
            text: function(a, b, d, c, e, f) {
                lb(a, b, d, c, e, f);
                oc(c)
            },
            date: mb("date", Td, Ob(Td, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": mb("datetimelocal", Ud, Ob(Ud, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: mb("time", Wd, Ob(Wd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: mb("week", qc, function(a, b) {
                if (ha(a)) return a;
                if (I(a)) {
                    qc.lastIndex = 0;
                    var d = qc.exec(a);
                    if (d) {
                        var c = +d[1],
                            e = +d[2],
                            f = d = 0,
                            g = 0,
                            h = 0,
                            k = Hd(c),
                            e = 7 * (e - 1);
                        b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());
                        return new Date(c, 0, k.getDate() + e, d, f, g, h)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: mb("month", Vd, Ob(Vd, ["yyyy", "MM"]), "yyyy-MM"),
            number: function(a, b, d, c, e, f) {
                Md(a, b, d, c);
                lb(a, b, d, c, e, f);
                c.$$parserName = "number";
                c.$parsers.push(function(a) {
                    if (c.$isEmpty(a)) return null;
                    if (Lg.test(a)) return parseFloat(a)
                });
                c.$formatters.push(function(a) {
                    if (!c.$isEmpty(a)) {
                        if (!Q(a)) throw nb("numfmt",
                            a);
                        a = a.toString()
                    }
                    return a
                });
                if (v(d.min) || d.ngMin) {
                    var g;
                    c.$validators.min = function(a) {
                        return c.$isEmpty(a) || y(g) || a >= g
                    };
                    d.$observe("min", function(a) {
                        v(a) && !Q(a) && (a = parseFloat(a, 10));
                        g = Q(a) && !isNaN(a) ? a : void 0;
                        c.$validate()
                    })
                }
                if (v(d.max) || d.ngMax) {
                    var h;
                    c.$validators.max = function(a) {
                        return c.$isEmpty(a) || y(h) || a <= h
                    };
                    d.$observe("max", function(a) {
                        v(a) && !Q(a) && (a = parseFloat(a, 10));
                        h = Q(a) && !isNaN(a) ? a : void 0;
                        c.$validate()
                    })
                }
            },
            url: function(a, b, d, c, e, f) {
                lb(a, b, d, c, e, f);
                oc(c);
                c.$$parserName = "url";
                c.$validators.url =
                    function(a, b) {
                        var d = a || b;
                        return c.$isEmpty(d) || Jg.test(d)
                    }
            },
            email: function(a, b, d, c, e, f) {
                lb(a, b, d, c, e, f);
                oc(c);
                c.$$parserName = "email";
                c.$validators.email = function(a, b) {
                    var d = a || b;
                    return c.$isEmpty(d) || Kg.test(d)
                }
            },
            radio: function(a, b, d, c) {
                y(d.name) && b.attr("name", ++pb);
                b.on("click", function(a) {
                    b[0].checked && c.$setViewValue(d.value, a && a.type)
                });
                c.$render = function() {
                    b[0].checked = d.value == c.$viewValue
                };
                d.$observe("value", c.$render)
            },
            checkbox: function(a, b, d, c, e, f, g, h) {
                var k = Nd(h, a, "ngTrueValue", d.ngTrueValue, !0),
                    l = Nd(h, a, "ngFalseValue", d.ngFalseValue, !1);
                b.on("click", function(a) {
                    c.$setViewValue(b[0].checked, a && a.type)
                });
                c.$render = function() {
                    b[0].checked = c.$viewValue
                };
                c.$isEmpty = function(a) {
                    return !1 === a
                };
                c.$formatters.push(function(a) {
                    return na(a, k)
                });
                c.$parsers.push(function(a) {
                    return a ? k : l
                })
            },
            hidden: C,
            button: C,
            submit: C,
            reset: C,
            file: C
        },
        Fc = ["$browser", "$sniffer", "$filter", "$parse", function(a, b, d, c) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(e, f, g, h) {
                        h[0] && (Xd[L(g.type)] || Xd.text)(e, f,
                            g, h[0], b, a, d, c)
                    }
                }
            }
        }],
        Mg = /^(true|false|\d+)$/,
        Ue = function() {
            return {
                restrict: "A",
                priority: 100,
                compile: function(a, b) {
                    return Mg.test(b.ngValue) ? function(a, b, e) {
                        e.$set("value", a.$eval(e.ngValue))
                    } : function(a, b, e) {
                        a.$watch(e.ngValue, function(a) {
                            e.$set("value", a)
                        })
                    }
                }
            }
        },
        ue = ["$compile", function(a) {
            return {
                restrict: "AC",
                compile: function(b) {
                    a.$$addBindingClass(b);
                    return function(b, c, e) {
                        a.$$addBindingInfo(c, e.ngBind);
                        c = c[0];
                        b.$watch(e.ngBind, function(a) {
                            c.textContent = y(a) ? "" : a
                        })
                    }
                }
            }
        }],
        we = ["$interpolate", "$compile",
            function(a, b) {
                return {
                    compile: function(d) {
                        b.$$addBindingClass(d);
                        return function(c, d, f) {
                            c = a(d.attr(f.$attr.ngBindTemplate));
                            b.$$addBindingInfo(d, c.expressions);
                            d = d[0];
                            f.$observe("ngBindTemplate", function(a) {
                                d.textContent = y(a) ? "" : a
                            })
                        }
                    }
                }
            }
        ],
        ve = ["$sce", "$parse", "$compile", function(a, b, d) {
            return {
                restrict: "A",
                compile: function(c, e) {
                    var f = b(e.ngBindHtml),
                        g = b(e.ngBindHtml, function(b) {
                            return a.valueOf(b)
                        });
                    d.$$addBindingClass(c);
                    return function(b, c, e) {
                        d.$$addBindingInfo(c, e.ngBindHtml);
                        b.$watch(g, function() {
                            var d =
                                f(b);
                            c.html(a.getTrustedHtml(d) || "")
                        })
                    }
                }
            }
        }],
        Te = ca({
            restrict: "A",
            require: "ngModel",
            link: function(a, b, d, c) {
                c.$viewChangeListeners.push(function() {
                    a.$eval(d.ngChange)
                })
            }
        }),
        xe = pc("", !0),
        ze = pc("Odd", 0),
        ye = pc("Even", 1),
        Ae = Ma({
            compile: function(a, b) {
                b.$set("ngCloak", void 0);
                a.removeClass("ng-cloak")
            }
        }),
        Be = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        Kc = {},
        Ng = {
            blur: !0,
            focus: !0
        };
    q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
        function(a) {
            var b = wa("ng-" + a);
            Kc[b] = ["$parse", "$rootScope", function(d, c) {
                return {
                    restrict: "A",
                    compile: function(e, f) {
                        var g = d(f[b], null, !0);
                        return function(b, d) {
                            d.on(a, function(d) {
                                var e = function() {
                                    g(b, {
                                        $event: d
                                    })
                                };
                                Ng[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e)
                            })
                        }
                    }
                }
            }]
        });
    var Ee = ["$animate", "$compile", function(a, b) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(d, c, e, f, g) {
                    var h, k, l;
                    d.$watch(e.ngIf, function(d) {
                        d ? k || g(function(d, f) {
                            k = f;
                            d[d.length++] =
                                b.$$createComment("end ngIf", e.ngIf);
                            h = {
                                clone: d
                            };
                            a.enter(d, c.parent(), c)
                        }) : (l && (l.remove(), l = null), k && (k.$destroy(), k = null), h && (l = tb(h.clone), a.leave(l).then(function() {
                            l = null
                        }), h = null))
                    })
                }
            }
        }],
        Fe = ["$templateRequest", "$anchorScroll", "$animate", function(a, b, d) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: da.noop,
                compile: function(c, e) {
                    var f = e.ngInclude || e.src,
                        g = e.onload || "",
                        h = e.autoscroll;
                    return function(c, e, m, n, p) {
                        var q = 0,
                            s, z, r, D = function() {
                                z && (z.remove(), z = null);
                                s &&
                                    (s.$destroy(), s = null);
                                r && (d.leave(r).then(function() {
                                    z = null
                                }), z = r, r = null)
                            };
                        c.$watch(f, function(f) {
                            var m = function() {
                                    !v(h) || h && !c.$eval(h) || b()
                                },
                                w = ++q;
                            f ? (a(f, !0).then(function(a) {
                                if (!c.$$destroyed && w === q) {
                                    var b = c.$new();
                                    n.template = a;
                                    a = p(b, function(a) {
                                        D();
                                        d.enter(a, null, e).then(m)
                                    });
                                    s = b;
                                    r = a;
                                    s.$emit("$includeContentLoaded", f);
                                    c.$eval(g)
                                }
                            }, function() {
                                c.$$destroyed || w !== q || (D(), c.$emit("$includeContentError", f))
                            }), c.$emit("$includeContentRequested", f)) : (D(), n.template = null)
                        })
                    }
                }
            }
        }],
        We = ["$compile", function(a) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(b, d, c, e) {
                    ja.call(d[0]).match(/SVG/) ? (d.empty(), a(Nc(e.template, F.document).childNodes)(b, function(a) {
                        d.append(a)
                    }, {
                        futureParentElement: d
                    })) : (d.html(e.template), a(d.contents())(b))
                }
            }
        }],
        Ge = Ma({
            priority: 450,
            compile: function() {
                return {
                    pre: function(a, b, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }),
        Se = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(a, b, d, c) {
                    var e = b.attr(d.$attr.ngList) || ", ",
                        f = "false" !== d.ngTrim,
                        g = f ? V(e) : e;
                    c.$parsers.push(function(a) {
                        if (!y(a)) {
                            var b = [];
                            a && q(a.split(g), function(a) {
                                a && b.push(f ? V(a) : a)
                            });
                            return b
                        }
                    });
                    c.$formatters.push(function(a) {
                        if (K(a)) return a.join(e)
                    });
                    c.$isEmpty = function(a) {
                        return !a || !a.length
                    }
                }
            }
        },
        ob = "ng-valid",
        Od = "ng-invalid",
        Va = "ng-pristine",
        Nb = "ng-dirty",
        Qd = "ng-pending",
        nb = O("ngModel"),
        Og = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, c, e, f, g, h, k, l) {
            this.$modelValue = this.$viewValue = Number.NaN;
            this.$$rawModelValue = void 0;
            this.$validators = {};
            this.$asyncValidators = {};
            this.$parsers = [];
            this.$formatters = [];
            this.$viewChangeListeners = [];
            this.$untouched = !0;
            this.$touched = !1;
            this.$pristine = !0;
            this.$dirty = !1;
            this.$valid = !0;
            this.$invalid = !1;
            this.$error = {};
            this.$$success = {};
            this.$pending = void 0;
            this.$name = l(d.name || "", !1)(a);
            this.$$parentForm = Mb;
            var m = e(d.ngModel),
                n = m.assign,
                p = m,
                s = n,
                F = null,
                z, r = this;
            this.$$setOptions = function(a) {
                if ((r.$options = a) && a.getterSetter) {
                    var b = e(d.ngModel + "()"),
                        f = e(d.ngModel + "($$$p)");
                    p = function(a) {
                        var c = m(a);
                        E(c) && (c = b(a));
                        return c
                    };
                    s = function(a, b) {
                        E(m(a)) ? f(a, {
                            $$$p: b
                        }) : n(a, b)
                    }
                } else if (!m.assign) throw nb("nonassign", d.ngModel, ua(c));
            };
            this.$render = C;
            this.$isEmpty = function(a) {
                return y(a) || "" === a || null === a || a !== a
            };
            this.$$updateEmptyClasses = function(a) {
                r.$isEmpty(a) ? (f.removeClass(c, "ng-not-empty"), f.addClass(c, "ng-empty")) : (f.removeClass(c, "ng-empty"), f.addClass(c, "ng-not-empty"))
            };
            var D = 0;
            Kd({
                ctrl: this,
                $element: c,
                set: function(a, b) {
                    a[b] = !0
                },
                unset: function(a, b) {
                    delete a[b]
                },
                $animate: f
            });
            this.$setPristine = function() {
                r.$dirty = !1;
                r.$pristine = !0;
                f.removeClass(c, Nb);
                f.addClass(c, Va)
            };
            this.$setDirty = function() {
                r.$dirty = !0;
                r.$pristine = !1;
                f.removeClass(c, Va);
                f.addClass(c, Nb);
                r.$$parentForm.$setDirty()
            };
            this.$setUntouched = function() {
                r.$touched = !1;
                r.$untouched = !0;
                f.setClass(c, "ng-untouched", "ng-touched")
            };
            this.$setTouched = function() {
                r.$touched = !0;
                r.$untouched = !1;
                f.setClass(c, "ng-touched", "ng-untouched")
            };
            this.$rollbackViewValue = function() {
                g.cancel(F);
                r.$viewValue = r.$$lastCommittedViewValue;
                r.$render()
            };
            this.$validate = function() {
                if (!Q(r.$modelValue) ||
                    !isNaN(r.$modelValue)) {
                    var a = r.$$rawModelValue,
                        b = r.$valid,
                        c = r.$modelValue,
                        d = r.$options && r.$options.allowInvalid;
                    r.$$runValidators(a, r.$$lastCommittedViewValue, function(e) {
                        d || b === e || (r.$modelValue = e ? a : void 0, r.$modelValue !== c && r.$$writeModelToScope())
                    })
                }
            };
            this.$$runValidators = function(a, b, c) {
                function d() {
                    var c = !0;
                    q(r.$validators, function(d, e) {
                        var g = d(a, b);
                        c = c && g;
                        f(e, g)
                    });
                    return c ? !0 : (q(r.$asyncValidators, function(a, b) {
                        f(b, null)
                    }), !1)
                }

                function e() {
                    var c = [],
                        d = !0;
                    q(r.$asyncValidators, function(e, g) {
                        var h =
                            e(a, b);
                        if (!h || !E(h.then)) throw nb("nopromise", h);
                        f(g, void 0);
                        c.push(h.then(function() {
                            f(g, !0)
                        }, function() {
                            d = !1;
                            f(g, !1)
                        }))
                    });
                    c.length ? k.all(c).then(function() {
                        g(d)
                    }, C) : g(!0)
                }

                function f(a, b) {
                    h === D && r.$setValidity(a, b)
                }

                function g(a) {
                    h === D && c(a)
                }
                D++;
                var h = D;
                (function() {
                    var a = r.$$parserName || "parse";
                    if (y(z)) f(a, null);
                    else return z || (q(r.$validators, function(a, b) {
                        f(b, null)
                    }), q(r.$asyncValidators, function(a, b) {
                        f(b, null)
                    })), f(a, z), z;
                    return !0
                })() ? d() ? e() : g(!1): g(!1)
            };
            this.$commitViewValue = function() {
                var a =
                    r.$viewValue;
                g.cancel(F);
                if (r.$$lastCommittedViewValue !== a || "" === a && r.$$hasNativeValidators) r.$$updateEmptyClasses(a), r.$$lastCommittedViewValue = a, r.$pristine && this.$setDirty(), this.$$parseAndValidate()
            };
            this.$$parseAndValidate = function() {
                var b = r.$$lastCommittedViewValue;
                if (z = y(b) ? void 0 : !0)
                    for (var c = 0; c < r.$parsers.length; c++)
                        if (b = r.$parsers[c](b), y(b)) {
                            z = !1;
                            break
                        }
                Q(r.$modelValue) && isNaN(r.$modelValue) && (r.$modelValue = p(a));
                var d = r.$modelValue,
                    e = r.$options && r.$options.allowInvalid;
                r.$$rawModelValue =
                    b;
                e && (r.$modelValue = b, r.$modelValue !== d && r.$$writeModelToScope());
                r.$$runValidators(b, r.$$lastCommittedViewValue, function(a) {
                    e || (r.$modelValue = a ? b : void 0, r.$modelValue !== d && r.$$writeModelToScope())
                })
            };
            this.$$writeModelToScope = function() {
                s(a, r.$modelValue);
                q(r.$viewChangeListeners, function(a) {
                    try {
                        a()
                    } catch (c) {
                        b(c)
                    }
                })
            };
            this.$setViewValue = function(a, b) {
                r.$viewValue = a;
                r.$options && !r.$options.updateOnDefault || r.$$debounceViewValueCommit(b)
            };
            this.$$debounceViewValueCommit = function(b) {
                var c = 0,
                    d = r.$options;
                d && v(d.debounce) && (d = d.debounce, Q(d) ? c = d : Q(d[b]) ? c = d[b] : Q(d["default"]) && (c = d["default"]));
                g.cancel(F);
                c ? F = g(function() {
                    r.$commitViewValue()
                }, c) : h.$$phase ? r.$commitViewValue() : a.$apply(function() {
                    r.$commitViewValue()
                })
            };
            a.$watch(function() {
                var b = p(a);
                if (b !== r.$modelValue && (r.$modelValue === r.$modelValue || b === b)) {
                    r.$modelValue = r.$$rawModelValue = b;
                    z = void 0;
                    for (var c = r.$formatters, d = c.length, e = b; d--;) e = c[d](e);
                    r.$viewValue !== e && (r.$$updateEmptyClasses(e), r.$viewValue = r.$$lastCommittedViewValue = e, r.$render(),
                        r.$$runValidators(b, e, C))
                }
                return b
            })
        }],
        Re = ["$rootScope", function(a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: Og,
                priority: 1,
                compile: function(b) {
                    b.addClass(Va).addClass("ng-untouched").addClass(ob);
                    return {
                        pre: function(a, b, e, f) {
                            var g = f[0];
                            b = f[1] || g.$$parentForm;
                            g.$$setOptions(f[2] && f[2].$options);
                            b.$addControl(g);
                            e.$observe("name", function(a) {
                                g.$name !== a && g.$$parentForm.$$renameControl(g, a)
                            });
                            a.$on("$destroy", function() {
                                g.$$parentForm.$removeControl(g)
                            })
                        },
                        post: function(b,
                            c, e, f) {
                            var g = f[0];
                            if (g.$options && g.$options.updateOn) c.on(g.$options.updateOn, function(a) {
                                g.$$debounceViewValueCommit(a && a.type)
                            });
                            c.on("blur", function() {
                                g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        Pg = /(\s+|^)default(\s+|$)/,
        Ve = function() {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function(a, b) {
                    var d = this;
                    this.$options = oa(a.$eval(b.ngModelOptions));
                    v(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = V(this.$options.updateOn.replace(Pg,
                        function() {
                            d.$options.updateOnDefault = !0;
                            return " "
                        }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        He = Ma({
            terminal: !0,
            priority: 1E3
        }),
        Qg = O("ngOptions"),
        Rg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        Pe = ["$compile", "$document", "$parse", function(a, b, d) {
            function c(a, b, c) {
                function e(a, b, c, d, f) {
                    this.selectValue = a;
                    this.viewValue =
                        b;
                    this.label = c;
                    this.group = d;
                    this.disabled = f
                }

                function f(a) {
                    var b;
                    if (!q && xa(a)) b = a;
                    else {
                        b = [];
                        for (var c in a) a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
                    }
                    return b
                }
                var n = a.match(Rg);
                if (!n) throw Qg("iexp", a, ua(b));
                var p = n[5] || n[7],
                    q = n[6];
                a = / as /.test(n[0]) && n[1];
                var s = n[9];
                b = d(n[2] ? n[1] : p);
                var z = a && d(a) || b,
                    r = s && d(s),
                    v = s ? function(a, b) {
                        return r(c, b)
                    } : function(a) {
                        return Ga(a)
                    },
                    u = function(a, b) {
                        return v(a, H(a, b))
                    },
                    t = d(n[2] || n[1]),
                    w = d(n[3] || ""),
                    y = d(n[4] || ""),
                    B = d(n[8]),
                    A = {},
                    H = q ? function(a, b) {
                        A[q] = b;
                        A[p] =
                            a;
                        return A
                    } : function(a) {
                        A[p] = a;
                        return A
                    };
                return {
                    trackBy: s,
                    getTrackByValue: u,
                    getWatchables: d(B, function(a) {
                        var b = [];
                        a = a || [];
                        for (var d = f(a), e = d.length, g = 0; g < e; g++) {
                            var h = a === d ? g : d[g],
                                l = a[h],
                                h = H(l, h),
                                l = v(l, h);
                            b.push(l);
                            if (n[2] || n[1]) l = t(c, h), b.push(l);
                            n[4] && (h = y(c, h), b.push(h))
                        }
                        return b
                    }),
                    getOptions: function() {
                        for (var a = [], b = {}, d = B(c) || [], g = f(d), h = g.length, n = 0; n < h; n++) {
                            var p = d === g ? n : g[n],
                                q = H(d[p], p),
                                r = z(c, q),
                                p = v(r, q),
                                x = t(c, q),
                                A = w(c, q),
                                q = y(c, q),
                                r = new e(p, r, x, A, q);
                            a.push(r);
                            b[p] = r
                        }
                        return {
                            items: a,
                            selectValueMap: b,
                            getOptionFromViewValue: function(a) {
                                return b[u(a)]
                            },
                            getViewValueFromOption: function(a) {
                                return s ? da.copy(a.viewValue) : a.viewValue
                            }
                        }
                    }
                }
            }
            var e = F.document.createElement("option"),
                f = F.document.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "ngModel"],
                link: {
                    pre: function(a, b, c, d) {
                        d[0].registerOption = C
                    },
                    post: function(d, h, k, l) {
                        function m(a, b) {
                            a.element = b;
                            b.disabled = a.disabled;
                            a.label !== b.label && (b.label = a.label, b.textContent = a.label);
                            a.value !== b.value && (b.value = a.selectValue)
                        }

                        function n() {
                            var a =
                                w && p.readValue();
                            if (w)
                                for (var b = w.items.length - 1; 0 <= b; b--) {
                                    var c = w.items[b];
                                    c.group ? Db(c.element.parentNode) : Db(c.element)
                                }
                            w = C.getOptions();
                            var d = {};
                            u && h.prepend(z);
                            w.items.forEach(function(a) {
                                var b;
                                if (v(a.group)) {
                                    b = d[a.group];
                                    b || (b = f.cloneNode(!1), B.appendChild(b), b.label = a.group, d[a.group] = b);
                                    var c = e.cloneNode(!1)
                                } else b = B, c = e.cloneNode(!1);
                                b.appendChild(c);
                                m(a, c)
                            });
                            h[0].appendChild(B);
                            s.$render();
                            s.$isEmpty(a) || (b = p.readValue(), (C.trackBy || y ? na(a, b) : a === b) || (s.$setViewValue(b), s.$render()))
                        }
                        var p =
                            l[0],
                            s = l[1],
                            y = k.multiple,
                            z;
                        l = 0;
                        for (var r = h.children(), D = r.length; l < D; l++)
                            if ("" === r[l].value) {
                                z = r.eq(l);
                                break
                            }
                        var u = !!z,
                            t = G(e.cloneNode(!1));
                        t.val("?");
                        var w, C = c(k.ngOptions, h, d),
                            B = b[0].createDocumentFragment();
                        y ? (s.$isEmpty = function(a) {
                            return !a || 0 === a.length
                        }, p.writeValue = function(a) {
                            w.items.forEach(function(a) {
                                a.element.selected = !1
                            });
                            a && a.forEach(function(a) {
                                if (a = w.getOptionFromViewValue(a)) a.element.selected = !0
                            })
                        }, p.readValue = function() {
                            var a = h.val() || [],
                                b = [];
                            q(a, function(a) {
                                (a = w.selectValueMap[a]) &&
                                !a.disabled && b.push(w.getViewValueFromOption(a))
                            });
                            return b
                        }, C.trackBy && d.$watchCollection(function() {
                            if (K(s.$viewValue)) return s.$viewValue.map(function(a) {
                                return C.getTrackByValue(a)
                            })
                        }, function() {
                            s.$render()
                        })) : (p.writeValue = function(a) {
                            var b = w.getOptionFromViewValue(a);
                            b ? (h[0].value !== b.selectValue && (t.remove(), u || z.remove(), h[0].value = b.selectValue, b.element.selected = !0), b.element.setAttribute("selected", "selected")) : null === a || u ? (t.remove(), u || h.prepend(z), h.val(""), z.prop("selected", !0), z.attr("selected", !0)) : (u || z.remove(), h.prepend(t), h.val("?"), t.prop("selected", !0), t.attr("selected", !0))
                        }, p.readValue = function() {
                            var a = w.selectValueMap[h.val()];
                            return a && !a.disabled ? (u || z.remove(), t.remove(), w.getViewValueFromOption(a)) : null
                        }, C.trackBy && d.$watch(function() {
                            return C.getTrackByValue(s.$viewValue)
                        }, function() {
                            s.$render()
                        }));
                        u ? (z.remove(), a(z)(d), z.removeClass("ng-scope")) : z = G(e.cloneNode(!1));
                        h.empty();
                        n();
                        d.$watchCollection(C.getWatchables, n)
                    }
                }
            }
        }],
        Ie = ["$locale", "$interpolate", "$log", function(a, b,
            d) {
            var c = /{}/g,
                e = /^when(Minus)?(.+)$/;
            return {
                link: function(f, g, h) {
                    function k(a) {
                        g.text(a || "")
                    }
                    var l = h.count,
                        m = h.$attr.when && g.attr(h.$attr.when),
                        n = h.offset || 0,
                        p = f.$eval(m) || {},
                        s = {},
                        v = b.startSymbol(),
                        z = b.endSymbol(),
                        r = v + l + "-" + n + z,
                        D = da.noop,
                        u;
                    q(h, function(a, b) {
                        var c = e.exec(b);
                        c && (c = (c[1] ? "-" : "") + L(c[2]), p[c] = g.attr(h.$attr[b]))
                    });
                    q(p, function(a, d) {
                        s[d] = b(a.replace(c, r))
                    });
                    f.$watch(l, function(b) {
                        var c = parseFloat(b),
                            e = isNaN(c);
                        e || c in p || (c = a.pluralCat(c - n));
                        c === u || e && Q(u) && isNaN(u) || (D(), e = s[c], y(e) ?
                            (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), D = C, k()) : D = f.$watch(e, k), u = c)
                    })
                }
            }
        }],
        Je = ["$parse", "$animate", "$compile", function(a, b, d) {
            var c = O("ngRepeat"),
                e = function(a, b, c, d, e, m, n) {
                    a[c] = d;
                    e && (a[e] = m);
                    a.$index = b;
                    a.$first = 0 === b;
                    a.$last = b === n - 1;
                    a.$middle = !(a.$first || a.$last);
                    a.$odd = !(a.$even = 0 === (b & 1))
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                compile: function(f, g) {
                    var h = g.ngRepeat,
                        k = d.$$createComment("end ngRepeat", h),
                        l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!l) throw c("iexp", h);
                    var m = l[1],
                        n = l[2],
                        p = l[3],
                        s = l[4],
                        l = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!l) throw c("iidexp", m);
                    var v = l[3] || l[1],
                        z = l[2];
                    if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw c("badident", p);
                    var r, D, u, t, w = {
                        $id: Ga
                    };
                    s ? r = a(s) : (u = function(a, b) {
                        return Ga(b)
                    }, t = function(a) {
                        return a
                    });
                    return function(a, d, f, g, l) {
                        r && (D = function(b, c, d) {
                            z && (w[z] = b);
                            w[v] = c;
                            w.$index =
                                d;
                            return r(a, w)
                        });
                        var m = S();
                        a.$watchCollection(n, function(f) {
                            var g, n, r = d[0],
                                s, x = S(),
                                w, y, C, A, F, E, G;
                            p && (a[p] = f);
                            if (xa(f)) F = f, n = D || u;
                            else
                                for (G in n = D || t, F = [], f) sa.call(f, G) && "$" !== G.charAt(0) && F.push(G);
                            w = F.length;
                            G = Array(w);
                            for (g = 0; g < w; g++)
                                if (y = f === F ? g : F[g], C = f[y], A = n(y, C, g), m[A]) E = m[A], delete m[A], x[A] = E, G[g] = E;
                                else {
                                    if (x[A]) throw q(G, function(a) {
                                        a && a.scope && (m[a.id] = a)
                                    }), c("dupes", h, A, C);
                                    G[g] = {
                                        id: A,
                                        scope: void 0,
                                        clone: void 0
                                    };
                                    x[A] = !0
                                }
                            for (s in m) {
                                E = m[s];
                                A = tb(E.clone);
                                b.leave(A);
                                if (A[0].parentNode)
                                    for (g =
                                        0, n = A.length; g < n; g++) A[g].$$NG_REMOVED = !0;
                                E.scope.$destroy()
                            }
                            for (g = 0; g < w; g++)
                                if (y = f === F ? g : F[g], C = f[y], E = G[g], E.scope) {
                                    s = r;
                                    do s = s.nextSibling; while (s && s.$$NG_REMOVED);
                                    E.clone[0] != s && b.move(tb(E.clone), null, r);
                                    r = E.clone[E.clone.length - 1];
                                    e(E.scope, g, v, C, z, y, w)
                                } else l(function(a, c) {
                                    E.scope = c;
                                    var d = k.cloneNode(!1);
                                    a[a.length++] = d;
                                    b.enter(a, null, r);
                                    r = d;
                                    E.clone = a;
                                    x[E.id] = E;
                                    e(E.scope, g, v, C, z, y, w)
                                });
                            m = x
                        })
                    }
                }
            }
        }],
        Ke = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(b, d, c) {
                    b.$watch(c.ngShow,
                        function(b) {
                            a[b ? "removeClass" : "addClass"](d, "ng-hide", {
                                tempClasses: "ng-hide-animate"
                            })
                        })
                }
            }
        }],
        De = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(b, d, c) {
                    b.$watch(c.ngHide, function(b) {
                        a[b ? "addClass" : "removeClass"](d, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        Le = Ma(function(a, b, d) {
            a.$watch(d.ngStyle, function(a, d) {
                d && a !== d && q(d, function(a, c) {
                    b.css(c, "")
                });
                a && b.css(a)
            }, !0)
        }),
        Me = ["$animate", "$compile", function(a, b) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(d, c, e, f) {
                    var g = [],
                        h = [],
                        k = [],
                        l = [],
                        m = function(a, b) {
                            return function() {
                                a.splice(b, 1)
                            }
                        };
                    d.$watch(e.ngSwitch || e.on, function(c) {
                        var d, e;
                        d = 0;
                        for (e = k.length; d < e; ++d) a.cancel(k[d]);
                        d = k.length = 0;
                        for (e = l.length; d < e; ++d) {
                            var s = tb(h[d].clone);
                            l[d].$destroy();
                            (k[d] = a.leave(s)).then(m(k, d))
                        }
                        h.length = 0;
                        l.length = 0;
                        (g = f.cases["!" + c] || f.cases["?"]) && q(g, function(c) {
                            c.transclude(function(d, e) {
                                l.push(e);
                                var f = c.element;
                                d[d.length++] = b.$$createComment("end ngSwitchWhen");
                                h.push({
                                    clone: d
                                });
                                a.enter(d, f.parent(),
                                    f)
                            })
                        })
                    })
                }
            }
        }],
        Ne = Ma({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, b, d, c, e) {
                c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [];
                c.cases["!" + d.ngSwitchWhen].push({
                    transclude: e,
                    element: b
                })
            }
        }),
        Oe = Ma({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, b, d, c, e) {
                c.cases["?"] = c.cases["?"] || [];
                c.cases["?"].push({
                    transclude: e,
                    element: b
                })
            }
        }),
        Sg = O("ngTransclude"),
        Qe = Ma({
            restrict: "EAC",
            link: function(a, b, d, c, e) {
                d.ngTransclude ===
                    d.$attr.ngTransclude && (d.ngTransclude = "");
                if (!e) throw Sg("orphan", ua(b));
                e(function(a) {
                    a.length && (b.empty(), b.append(a))
                }, null, d.ngTransclude || d.ngTranscludeSlot)
            }
        }),
        qe = ["$templateCache", function(a) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(b, d) {
                    "text/ng-template" == d.type && a.put(d.id, b[0].text)
                }
            }
        }],
        Tg = {
            $setViewValue: C,
            $render: C
        },
        Ug = ["$element", "$scope", function(a, b) {
            var d = this,
                c = new Sa;
            d.ngModelCtrl = Tg;
            d.unknownOption = G(F.document.createElement("option"));
            d.renderUnknownOption = function(b) {
                b =
                    "? " + Ga(b) + " ?";
                d.unknownOption.val(b);
                a.prepend(d.unknownOption);
                a.val(b)
            };
            b.$on("$destroy", function() {
                d.renderUnknownOption = C
            });
            d.removeUnknownOption = function() {
                d.unknownOption.parent() && d.unknownOption.remove()
            };
            d.readValue = function() {
                d.removeUnknownOption();
                return a.val()
            };
            d.writeValue = function(b) {
                d.hasOption(b) ? (d.removeUnknownOption(), a.val(b), "" === b && d.emptyOption.prop("selected", !0)) : null == b && d.emptyOption ? (d.removeUnknownOption(), a.val("")) : d.renderUnknownOption(b)
            };
            d.addOption = function(a,
                b) {
                if (8 !== b[0].nodeType) {
                    Ra(a, '"option value"');
                    "" === a && (d.emptyOption = b);
                    var g = c.get(a) || 0;
                    c.put(a, g + 1);
                    d.ngModelCtrl.$render();
                    b[0].hasAttribute("selected") && (b[0].selected = !0)
                }
            };
            d.removeOption = function(a) {
                var b = c.get(a);
                b && (1 === b ? (c.remove(a), "" === a && (d.emptyOption = void 0)) : c.put(a, b - 1))
            };
            d.hasOption = function(a) {
                return !!c.get(a)
            };
            d.registerOption = function(a, b, c, h, k) {
                if (h) {
                    var l;
                    c.$observe("value", function(a) {
                        v(l) && d.removeOption(l);
                        l = a;
                        d.addOption(a, b)
                    })
                } else k ? a.$watch(k, function(a, e) {
                    c.$set("value",
                        a);
                    e !== a && d.removeOption(e);
                    d.addOption(a, b)
                }) : d.addOption(c.value, b);
                b.on("$destroy", function() {
                    d.removeOption(c.value);
                    d.ngModelCtrl.$render()
                })
            }
        }],
        re = function() {
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: Ug,
                priority: 1,
                link: {
                    pre: function(a, b, d, c) {
                        var e = c[1];
                        if (e) {
                            var f = c[0];
                            f.ngModelCtrl = e;
                            b.on("change", function() {
                                a.$apply(function() {
                                    e.$setViewValue(f.readValue())
                                })
                            });
                            if (d.multiple) {
                                f.readValue = function() {
                                    var a = [];
                                    q(b.find("option"), function(b) {
                                        b.selected && a.push(b.value)
                                    });
                                    return a
                                };
                                f.writeValue = function(a) {
                                    var c = new Sa(a);
                                    q(b.find("option"), function(a) {
                                        a.selected = v(c.get(a.value))
                                    })
                                };
                                var g, h = NaN;
                                a.$watch(function() {
                                    h !== e.$viewValue || na(g, e.$viewValue) || (g = fa(e.$viewValue), e.$render());
                                    h = e.$viewValue
                                });
                                e.$isEmpty = function(a) {
                                    return !a || 0 === a.length
                                }
                            }
                        }
                    },
                    post: function(a, b, d, c) {
                        var e = c[1];
                        if (e) {
                            var f = c[0];
                            e.$render = function() {
                                f.writeValue(e.$viewValue)
                            }
                        }
                    }
                }
            }
        },
        te = ["$interpolate", function(a) {
            return {
                restrict: "E",
                priority: 100,
                compile: function(b, d) {
                    if (v(d.value)) var c = a(d.value, !0);
                    else {
                        var e =
                            a(b.text(), !0);
                        e || d.$set("value", b.text())
                    }
                    return function(a, b, d) {
                        var k = b.parent();
                        (k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e)
                    }
                }
            }
        }],
        se = ca({
            restrict: "E",
            terminal: !1
        }),
        Hc = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, d, c) {
                    c && (d.required = !0, c.$validators.required = function(a, b) {
                        return !d.required || !c.$isEmpty(b)
                    }, d.$observe("required", function() {
                        c.$validate()
                    }))
                }
            }
        },
        Gc = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a,
                    b, d, c) {
                    if (c) {
                        var e, f = d.ngPattern || d.pattern;
                        d.$observe("pattern", function(a) {
                            I(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                            if (a && !a.test) throw O("ngPattern")("noregexp", f, a, ua(b));
                            e = a || void 0;
                            c.$validate()
                        });
                        c.$validators.pattern = function(a, b) {
                            return c.$isEmpty(b) || y(e) || e.test(b)
                        }
                    }
                }
            }
        },
        Jc = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, d, c) {
                    if (c) {
                        var e = -1;
                        d.$observe("maxlength", function(a) {
                            a = $(a);
                            e = isNaN(a) ? -1 : a;
                            c.$validate()
                        });
                        c.$validators.maxlength = function(a, b) {
                            return 0 > e || c.$isEmpty(b) ||
                                b.length <= e
                        }
                    }
                }
            }
        },
        Ic = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, d, c) {
                    if (c) {
                        var e = 0;
                        d.$observe("minlength", function(a) {
                            e = $(a) || 0;
                            c.$validate()
                        });
                        c.$validators.minlength = function(a, b) {
                            return c.$isEmpty(b) || b.length >= e
                        }
                    }
                }
            }
        };
    F.angular.bootstrap ? F.console && console.log("WARNING: Tried to load angular more than once.") : (je(), le(da), da.module("ngLocale", [], ["$provide", function(a) {
        function b(a) {
            a += "";
            var b = a.indexOf(".");
            return -1 == b ? 0 : a.length - b - 1
        }
        a.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM",
                    "PM"
                ],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5,
                    6
                ],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-\u00a4",
                    negSuf: "",
                    posPre: "\u00a4",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function(a,
                c) {
                var e = a | 0,
                    f = c;
                void 0 === f && (f = Math.min(b(a), 3));
                Math.pow(10, f);
                return 1 == e && 0 == f ? "one" : "other"
            }
        })
    }]), G(F.document).ready(function() {
        fe(F.document, Ac)
    }))
})(window);
!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * @license
 * lodash 3.9.3 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;
(function() {
    function n(n, t) {
        if (n !== t) {
            var r = null === n,
                e = n === m,
                u = n === n,
                i = null === t,
                o = t === m,
                f = t === t;
            if (n > t && !i || !u || r && !o && f || e && f) return 1;
            if (n < t && !r || !f || i && !e && u || o && u) return -1
        }
        return 0
    }

    function t(n, t, r) {
        for (var e = n.length, u = r ? e : -1; r ? u-- : ++u < e;)
            if (t(n[u], u, n)) return u;
        return -1
    }

    function r(n, t, r) {
        if (t !== t) return s(n, r);
        r -= 1;
        for (var e = n.length; ++r < e;)
            if (n[r] === t) return r;
        return -1
    }

    function e(n) {
        return typeof n == "function" || false
    }

    function u(n) {
        return typeof n == "string" ? n : null == n ? "" : n + ""
    }

    function i(n, t) {
        for (var r = -1, e = n.length; ++r < e && -1 < t.indexOf(n.charAt(r)););
        return r
    }

    function o(n, t) {
        for (var r = n.length; r-- && -1 < t.indexOf(n.charAt(r)););
        return r
    }

    function f(t, r) {
        return n(t.a, r.a) || t.b - r.b
    }

    function l(n) {
        return Nn[n]
    }

    function a(n) {
        return Ln[n]
    }

    function c(n) {
        return "\\" + Mn[n]
    }

    function s(n, t, r) {
        var e = n.length;
        for (t += r ? 0 : -1; r ? t-- : ++t < e;) {
            var u = n[t];
            if (u !== u) return t
        }
        return -1
    }

    function p(n) {
        return !!n && typeof n == "object"
    }

    function h(n) {
        return 160 >= n && 9 <= n && 13 >= n || 32 == n || 160 == n || 5760 == n || 6158 == n || 8192 <= n && (8202 >= n || 8232 == n || 8233 == n || 8239 == n || 8287 == n || 12288 == n || 65279 == n);
    }

    function _(n, t) {
        for (var r = -1, e = n.length, u = -1, i = []; ++r < e;) n[r] === t && (n[r] = L, i[++u] = r);
        return i
    }

    function v(n) {
        for (var t = -1, r = n.length; ++t < r && h(n.charCodeAt(t)););
        return t
    }

    function g(n) {
        for (var t = n.length; t-- && h(n.charCodeAt(t)););
        return t
    }

    function y(n) {
        return zn[n]
    }

    function d(h) {
        function Nn(n) {
            if (p(n) && !(Ti(n) || n instanceof Bn)) {
                if (n instanceof zn) return n;
                if (ru.call(n, "__chain__") && ru.call(n, "__wrapped__")) return Mr(n)
            }
            return new zn(n)
        }

        function Ln() {}

        function zn(n, t, r) {
            this.__wrapped__ = n, this.__actions__ = r || [],
                this.__chain__ = !!t
        }

        function Bn(n) {
            this.__wrapped__ = n, this.__actions__ = null, this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = null, this.__takeCount__ = Su, this.__views__ = null
        }

        function Mn() {
            this.__data__ = {}
        }

        function Pn(n) {
            var t = n ? n.length : 0;
            for (this.data = {
                    hash: bu(null),
                    set: new vu
                }; t--;) this.push(n[t])
        }

        function qn(n, t) {
            var r = n.data;
            return (typeof t == "string" || ve(t) ? r.set.has(t) : r.hash[t]) ? 0 : -1
        }

        function Dn(n, t) {
            var r = -1,
                e = n.length;
            for (t || (t = Me(e)); ++r < e;) t[r] = n[r];
            return t
        }

        function Kn(n, t) {
            for (var r = -1, e = n.length; ++r < e && false !== t(n[r], r, n););
            return n
        }

        function Vn(n, t) {
            for (var r = -1, e = n.length; ++r < e;)
                if (!t(n[r], r, n)) return false;
            return true
        }

        function Gn(n, t) {
            for (var r = -1, e = n.length, u = -1, i = []; ++r < e;) {
                var o = n[r];
                t(o, r, n) && (i[++u] = o)
            }
            return i
        }

        function Jn(n, t) {
            for (var r = -1, e = n.length, u = Me(e); ++r < e;) u[r] = t(n[r], r, n);
            return u
        }

        function Xn(n, t, r, e) {
            var u = -1,
                i = n.length;
            for (e && i && (r = n[++u]); ++u < i;) r = t(r, n[u], u, n);
            return r
        }

        function Hn(n, t) {
            for (var r = -1, e = n.length; ++r < e;)
                if (t(n[r], r, n)) return true;
            return false
        }

        function Qn(n, t) {
            return n === m ? t : n
        }

        function nt(n, t, r, e) {
            return n !== m && ru.call(e, r) ? n : t
        }

        function tt(n, t, r) {
            for (var e = -1, u = Ki(t), i = u.length; ++e < i;) {
                var o = u[e],
                    f = n[o],
                    l = r(f, t[o], o, n, t);
                (l === l ? l === f : f !== f) && (f !== m || o in n) || (n[o] = l)
            }
            return n
        }

        function rt(n, t) {
            return null == t ? n : ut(t, Ki(t), n)
        }

        function et(n, t) {
            for (var r = -1, e = null == n, u = !e && Ir(n), i = u ? n.length : 0, o = t.length, f = Me(o); ++r < o;) {
                var l = t[r];
                f[r] = u ? Er(l, i) ? n[l] : m : e ? m : n[l]
            }
            return f
        }

        function ut(n, t, r) {
            r || (r = {});
            for (var e = -1, u = t.length; ++e < u;) {
                var i = t[e];
                r[i] = n[i]
            }
            return r
        }

        function it(n, t, r) {
            var e = typeof n;
            return "function" == e ? t === m ? n : Mt(n, t, r) : null == n ? Fe : "object" == e ? xt(n) : t === m ? Be(n) : At(n, t);
        }

        function ot(n, t, r, e, u, i, o) {
            var f;
            if (r && (f = u ? r(n, e, u) : r(n)), f !== m) return f;
            if (!ve(n)) return n;
            if (e = Ti(n)) {
                if (f = jr(n), !t) return Dn(n, f)
            } else {
                var l = uu.call(n),
                    a = l == D;
                if (l != V && l != z && (!a || u)) return $n[l] ? Or(n, l, t) : u ? n : {};
                if (f = kr(a ? {} : n), !t) return rt(f, n)
            }
            for (i || (i = []), o || (o = []), u = i.length; u--;)
                if (i[u] == n) return o[u];
            return i.push(n), o.push(f), (e ? Kn : vt)(n, function(e, u) {
                f[u] = ot(e, t, r, u, n, i, o)
            }), f
        }

        function ft(n, t, r) {
            if (typeof n != "function") throw new Je(N);
            return gu(function() {
                n.apply(m, r)
            }, t)
        }

        function lt(n, t) {
            var e = n ? n.length : 0,
                u = [];
            if (!e) return u;
            var i = -1,
                o = br(),
                f = o == r,
                l = f && 200 <= t.length ? Vu(t) : null,
                a = t.length;
            l && (o = qn, f = false, t = l);
            n: for (; ++i < e;)
                if (l = n[i], f && l === l) {
                    for (var c = a; c--;)
                        if (t[c] === l) continue n;
                    u.push(l)
                } else 0 > o(t, l, 0) && u.push(l);
            return u
        }

        function at(n, t) {
            var r = true;
            return Mu(n, function(n, e, u) {
                return r = !!t(n, e, u)
            }), r
        }

        function ct(n, t, r, e) {
            var u = e,
                i = u;
            return Mu(n, function(n, o, f) {
                o = +t(n, o, f), (r(o, u) || o === e && o === i) && (u = o, i = n)
            }), i
        }

        function st(n, t) {
            var r = [];
            return Mu(n, function(n, e, u) {
                t(n, e, u) && r.push(n);
            }), r
        }

        function pt(n, t, r, e) {
            var u;
            return r(n, function(n, r, i) {
                return t(n, r, i) ? (u = e ? r : n, false) : void 0
            }), u
        }

        function ht(n, t, r) {
            for (var e = -1, u = n.length, i = -1, o = []; ++e < u;) {
                var f = n[e];
                if (p(f) && Ir(f) && (r || Ti(f) || se(f))) {
                    t && (f = ht(f, t, r));
                    for (var l = -1, a = f.length; ++l < a;) o[++i] = f[l]
                } else r || (o[++i] = f)
            }
            return o
        }

        function _t(n, t) {
            qu(n, t, ke)
        }

        function vt(n, t) {
            return qu(n, t, Ki)
        }

        function gt(n, t) {
            return Du(n, t, Ki)
        }

        function yt(n, t) {
            for (var r = -1, e = t.length, u = -1, i = []; ++r < e;) {
                var o = t[r];
                $i(n[o]) && (i[++u] = o)
            }
            return i
        }

        function dt(n, t, r) {
            if (null != n) {
                r !== m && r in zr(n) && (t = [r]), r = 0;
                for (var e = t.length; null != n && r < e;) n = n[t[r++]];
                return r && r == e ? n : m
            }
        }

        function mt(n, t, r, e, u, i) {
            if (n === t) n = true;
            else if (null == n || null == t || !ve(n) && !p(t)) n = n !== n && t !== t;
            else n: {
                var o = mt,
                    f = Ti(n),
                    l = Ti(t),
                    a = B,
                    c = B;f || (a = uu.call(n), a == z ? a = V : a != V && (f = we(n))),
                l || (c = uu.call(t), c == z ? c = V : c != V && we(t));
                var s = a == V,
                    l = c == V,
                    c = a == c;
                if (!c || f || s) {
                    if (!e && (a = s && ru.call(n, "__wrapped__"), l = l && ru.call(t, "__wrapped__"), a || l)) {
                        n = o(a ? n.value() : n, l ? t.value() : t, r, e, u, i);
                        break n
                    }
                    if (c) {
                        for (u || (u = []),
                            i || (i = []), a = u.length; a--;)
                            if (u[a] == n) {
                                n = i[a] == t;
                                break n
                            }
                        u.push(n), i.push(t), n = (f ? gr : dr)(n, t, o, r, e, u, i), u.pop(), i.pop()
                    } else n = false
                } else n = yr(n, t, a)
            }
            return n
        }

        function wt(n, t, r) {
            var e = t.length,
                u = e,
                i = !r;
            if (null == n) return !u;
            for (n = zr(n); e--;) {
                var o = t[e];
                if (i && o[2] ? o[1] !== n[o[0]] : !(o[0] in n)) return false
            }
            for (; ++e < u;) {
                var o = t[e],
                    f = o[0],
                    l = n[f],
                    a = o[1];
                if (i && o[2]) {
                    if (l === m && !(f in n)) return false
                } else if (o = r ? r(l, a, f) : m, o === m ? !mt(a, l, r, true) : !o) return false
            }
            return true
        }

        function bt(n, t) {
            var r = -1,
                e = Ir(n) ? Me(n.length) : [];
            return Mu(n, function(n, u, i) {
                e[++r] = t(n, u, i)
            }), e
        }

        function xt(n) {
            var t = xr(n);
            if (1 == t.length && t[0][2]) {
                var r = t[0][0],
                    e = t[0][1];
                return function(n) {
                    return null == n ? false : n[r] === e && (e !== m || r in zr(n))
                }
            }
            return function(n) {
                return wt(n, t)
            }
        }

        function At(n, t) {
            var r = Ti(n),
                e = Wr(n) && t === t && !ve(t),
                u = n + "";
            return n = Br(n),
                function(i) {
                    if (null == i) return false;
                    var o = u;
                    if (i = zr(i), !(!r && e || o in i)) {
                        if (i = 1 == n.length ? i : dt(i, Ct(n, 0, -1)), null == i) return false;
                        o = Vr(n), i = zr(i)
                    }
                    return i[o] === t ? t !== m || o in i : mt(t, i[o], m, true)
                }
        }

        function jt(n, t, r, e, u) {
            if (!ve(n)) return n;
            var i = Ir(t) && (Ti(t) || we(t)),
                o = i ? null : Ki(t);
            return Kn(o || t, function(f, l) {
                if (o && (l = f, f = t[l]), p(f)) {
                    e || (e = []), u || (u = []);
                    n: {
                        for (var a = l, c = e, s = u, h = c.length, _ = t[a]; h--;)
                            if (c[h] == _) {
                                n[a] = s[h];
                                break n
                            }
                        var h = n[a],
                            v = r ? r(h, _, a, n, t) : m,
                            g = v === m;g && (v = _, Ir(_) && (Ti(_) || we(_)) ? v = Ti(h) ? h : Ir(h) ? Dn(h) : [] : Fi(_) || se(_) ? v = se(h) ? Ae(h) : Fi(h) ? h : {} : g = false),
                        c.push(_),
                        s.push(v),
                        g ? n[a] = jt(v, _, r, c, s) : (v === v ? v !== h : h === h) && (n[a] = v)
                    }
                } else a = n[l], c = r ? r(a, f, l, n, t) : m, (s = c === m) && (c = f), c === m && (!i || l in n) || !s && (c === c ? c === a : a !== a) || (n[l] = c)
            }), n
        }

        function kt(n) {
            return function(t) {
                return null == t ? m : t[n];
            }
        }

        function Ot(n) {
            var t = n + "";
            return n = Br(n),
                function(r) {
                    return dt(r, n, t)
                }
        }

        function Rt(n, t) {
            for (var r = n ? t.length : 0; r--;) {
                var e = t[r];
                if (e != u && Er(e)) {
                    var u = e;
                    yu.call(n, e, 1)
                }
            }
        }

        function It(n, t) {
            return n + su(Cu() * (t - n + 1))
        }

        function Et(n, t, r, e, u) {
            return u(n, function(n, u, i) {
                r = e ? (e = false, n) : t(r, n, u, i)
            }), r
        }

        function Ct(n, t, r) {
            var e = -1,
                u = n.length;
            for (t = null == t ? 0 : +t || 0, 0 > t && (t = -t > u ? 0 : u + t), r = r === m || r > u ? u : +r || 0, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = Me(u); ++e < u;) r[e] = n[e + t];
            return r
        }

        function Wt(n, t) {
            var r;
            return Mu(n, function(n, e, u) {
                return r = t(n, e, u), !r
            }), !!r
        }

        function St(n, t) {
            var r = n.length;
            for (n.sort(t); r--;) n[r] = n[r].c;
            return n
        }

        function Tt(t, r, e) {
            var u = mr(),
                i = -1;
            return r = Jn(r, function(n) {
                return u(n)
            }), t = bt(t, function(n) {
                return {
                    a: Jn(r, function(t) {
                        return t(n)
                    }),
                    b: ++i,
                    c: n
                }
            }), St(t, function(t, r) {
                var u;
                n: {
                    u = -1;
                    for (var i = t.a, o = r.a, f = i.length, l = e.length; ++u < f;) {
                        var a = n(i[u], o[u]);
                        if (a) {
                            u = u < l ? a * (e[u] ? 1 : -1) : a;
                            break n
                        }
                    }
                    u = t.b - r.b
                }
                return u
            })
        }

        function Ut(n, t) {
            var r = 0;
            return Mu(n, function(n, e, u) {
                r += +t(n, e, u) || 0
            }), r
        }

        function $t(n, t) {
            var e = -1,
                u = br(),
                i = n.length,
                o = u == r,
                f = o && 200 <= i,
                l = f ? Vu() : null,
                a = [];
            l ? (u = qn, o = false) : (f = false, l = t ? [] : a);
            n: for (; ++e < i;) {
                var c = n[e],
                    s = t ? t(c, e, n) : c;
                if (o && c === c) {
                    for (var p = l.length; p--;)
                        if (l[p] === s) continue n;
                    t && l.push(s), a.push(c)
                } else 0 > u(l, s, 0) && ((t || f) && l.push(s), a.push(c))
            }
            return a
        }

        function Ft(n, t) {
            for (var r = -1, e = t.length, u = Me(e); ++r < e;) u[r] = n[t[r]];
            return u
        }

        function Nt(n, t, r, e) {
            for (var u = n.length, i = e ? u : -1;
                (e ? i-- : ++i < u) && t(n[i], i, n););
            return r ? Ct(n, e ? 0 : i, e ? i + 1 : u) : Ct(n, e ? i + 1 : 0, e ? u : i)
        }

        function Lt(n, t) {
            var r = n;
            r instanceof Bn && (r = r.value());
            for (var e = -1, u = t.length; ++e < u;) {
                var r = [r],
                    i = t[e];
                _u.apply(r, i.args), r = i.func.apply(i.thisArg, r)
            }
            return r
        }

        function zt(n, t, r) {
            var e = 0,
                u = n ? n.length : e;
            if (typeof t == "number" && t === t && u <= Uu) {
                for (; e < u;) {
                    var i = e + u >>> 1,
                        o = n[i];
                    (r ? o <= t : o < t) && null !== o ? e = i + 1 : u = i
                }
                return u
            }
            return Bt(n, t, Fe, r)
        }

        function Bt(n, t, r, e) {
            t = r(t);
            for (var u = 0, i = n ? n.length : 0, o = t !== t, f = null === t, l = t === m; u < i;) {
                var a = su((u + i) / 2),
                    c = r(n[a]),
                    s = c !== m,
                    p = c === c;
                (o ? p || e : f ? p && s && (e || null != c) : l ? p && (e || s) : null == c ? 0 : e ? c <= t : c < t) ? u = a + 1: i = a
            }
            return Ou(i, Tu)
        }

        function Mt(n, t, r) {
            if (typeof n != "function") return Fe;
            if (t === m) return n;
            switch (r) {
                case 1:
                    return function(r) {
                        return n.call(t, r)
                    };
                case 3:
                    return function(r, e, u) {
                        return n.call(t, r, e, u)
                    };
                case 4:
                    return function(r, e, u, i) {
                        return n.call(t, r, e, u, i)
                    };
                case 5:
                    return function(r, e, u, i, o) {
                        return n.call(t, r, e, u, i, o)
                    }
            }
            return function() {
                return n.apply(t, arguments)
            }
        }

        function Pt(n) {
            return lu.call(n, 0)
        }

        function qt(n, t, r) {
            for (var e = r.length, u = -1, i = ku(n.length - e, 0), o = -1, f = t.length, l = Me(i + f); ++o < f;) l[o] = t[o];
            for (; ++u < e;) l[r[u]] = n[u];
            for (; i--;) l[o++] = n[u++];
            return l
        }

        function Dt(n, t, r) {
            for (var e = -1, u = r.length, i = -1, o = ku(n.length - u, 0), f = -1, l = t.length, a = Me(o + l); ++i < o;) a[i] = n[i];
            for (o = i; ++f < l;) a[o + f] = t[f];
            for (; ++e < u;) a[o + r[e]] = n[i++];
            return a
        }

        function Kt(n, t) {
            return function(r, e, u) {
                var i = t ? t() : {};
                if (e = mr(e, u, 3), Ti(r)) {
                    u = -1;
                    for (var o = r.length; ++u < o;) {
                        var f = r[u];
                        n(i, f, e(f, u, r), r)
                    }
                } else Mu(r, function(t, r, u) {
                    n(i, t, e(t, r, u), u)
                });
                return i
            }
        }

        function Vt(n) {
            return ae(function(t, r) {
                var e = -1,
                    u = null == t ? 0 : r.length,
                    i = 2 < u ? r[u - 2] : m,
                    o = 2 < u ? r[2] : m,
                    f = 1 < u ? r[u - 1] : m;
                for (typeof i == "function" ? (i = Mt(i, f, 5),
                        u -= 2) : (i = typeof f == "function" ? f : m, u -= i ? 1 : 0), o && Cr(r[0], r[1], o) && (i = 3 > u ? m : i, u = 1); ++e < u;)(o = r[e]) && n(t, o, i);
                return t
            })
        }

        function Yt(n, t) {
            return function(r, e) {
                var u = r ? Zu(r) : 0;
                if (!Tr(u)) return n(r, e);
                for (var i = t ? u : -1, o = zr(r);
                    (t ? i-- : ++i < u) && false !== e(o[i], i, o););
                return r
            }
        }

        function Zt(n) {
            return function(t, r, e) {
                var u = zr(t);
                e = e(t);
                for (var i = e.length, o = n ? i : -1; n ? o-- : ++o < i;) {
                    var f = e[o];
                    if (false === r(u[f], f, u)) break
                }
                return t
            }
        }

        function Gt(n, t) {
            function r() {
                return (this && this !== Yn && this instanceof r ? e : n).apply(t, arguments);
            }
            var e = Xt(n);
            return r
        }

        function Jt(n) {
            return function(t) {
                var r = -1;
                t = Te(Ie(t));
                for (var e = t.length, u = ""; ++r < e;) u = n(u, t[r], r);
                return u
            }
        }

        function Xt(n) {
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return new n;
                    case 1:
                        return new n(t[0]);
                    case 2:
                        return new n(t[0], t[1]);
                    case 3:
                        return new n(t[0], t[1], t[2]);
                    case 4:
                        return new n(t[0], t[1], t[2], t[3]);
                    case 5:
                        return new n(t[0], t[1], t[2], t[3], t[4])
                }
                var r = Bu(n.prototype),
                    t = n.apply(r, t);
                return ve(t) ? t : r
            }
        }

        function Ht(n) {
            function t(r, e, u) {
                return u && Cr(r, e, u) && (e = null),
                    r = vr(r, n, null, null, null, null, null, e), r.placeholder = t.placeholder, r
            }
            return t
        }

        function Qt(n, t) {
            return function(r, e, u) {
                if (u && Cr(r, e, u) && (e = null), e = mr(e, u, 3), 1 == e.length) {
                    u = r = Lr(r);
                    for (var i = e, o = -1, f = u.length, l = t, a = l; ++o < f;) {
                        var c = u[o],
                            s = +i(c);
                        n(s, l) && (l = s, a = c)
                    }
                    if (u = a, !r.length || u !== t) return u
                }
                return ct(r, e, n, t)
            }
        }

        function nr(n, r) {
            return function(e, u, i) {
                return u = mr(u, i, 3), Ti(e) ? (u = t(e, u, r), -1 < u ? e[u] : m) : pt(e, u, n)
            }
        }

        function tr(n) {
            return function(r, e, u) {
                return r && r.length ? (e = mr(e, u, 3), t(r, e, n)) : -1
            }
        }

        function rr(n) {
            return function(t, r, e) {
                return r = mr(r, e, 3), pt(t, r, n, true)
            }
        }

        function er(n) {
            return function() {
                for (var t, r = arguments.length, e = n ? r : -1, u = 0, i = Me(r); n ? e-- : ++e < r;) {
                    var o = i[u++] = arguments[e];
                    if (typeof o != "function") throw new Je(N);
                    !t && zn.prototype.thru && "wrapper" == wr(o) && (t = new zn([]))
                }
                for (e = t ? -1 : r; ++e < r;) {
                    var o = i[e],
                        u = wr(o),
                        f = "wrapper" == u ? Yu(o) : null;
                    t = f && Sr(f[0]) && f[1] == (I | j | O | E) && !f[4].length && 1 == f[9] ? t[wr(f[0])].apply(t, f[3]) : 1 == o.length && Sr(o) ? t[u]() : t.thru(o)
                }
                return function() {
                    var n = arguments;
                    if (t && 1 == n.length && Ti(n[0])) return t.plant(n[0]).value();
                    for (var e = 0, n = r ? i[e].apply(this, n) : n[0]; ++e < r;) n = i[e].call(this, n);
                    return n
                }
            }
        }

        function ur(n, t) {
            return function(r, e, u) {
                return typeof e == "function" && u === m && Ti(r) ? n(r, e) : t(r, Mt(e, u, 3))
            }
        }

        function ir(n) {
            return function(t, r, e) {
                return (typeof r != "function" || e !== m) && (r = Mt(r, e, 3)), n(t, r, ke)
            }
        }

        function or(n) {
            return function(t, r, e) {
                return (typeof r != "function" || e !== m) && (r = Mt(r, e, 3)), n(t, r)
            }
        }

        function fr(n) {
            return function(t, r, e) {
                var u = {};
                return r = mr(r, e, 3), vt(t, function(t, e, i) {
                        i = r(t, e, i), e = n ? i : e, t = n ? t : i, u[e] = t
                    }),
                    u
            }
        }

        function lr(n) {
            return function(t, r, e) {
                return t = u(t), (n ? t : "") + pr(t, r, e) + (n ? "" : t)
            }
        }

        function ar(n) {
            var t = ae(function(r, e) {
                var u = _(e, t.placeholder);
                return vr(r, n, null, e, u)
            });
            return t
        }

        function cr(n, t) {
            return function(r, e, u, i) {
                var o = 3 > arguments.length;
                return typeof e == "function" && i === m && Ti(r) ? n(r, e, u, o) : Et(r, mr(e, i, 4), u, o, t)
            }
        }

        function sr(n, t, r, e, u, i, o, f, l, a) {
            function c() {
                for (var w = arguments.length, A = w, j = Me(w); A--;) j[A] = arguments[A];
                if (e && (j = qt(j, e, u)), i && (j = Dt(j, i, o)), v || y) {
                    var A = c.placeholder,
                        k = _(j, A),
                        w = w - k.length;
                    if (w < a) {
                        var I = f ? Dn(f) : null,
                            w = ku(a - w, 0),
                            E = v ? k : null,
                            k = v ? null : k,
                            C = v ? j : null,
                            j = v ? null : j;
                        return t |= v ? O : R, t &= ~(v ? R : O), g || (t &= ~(b | x)), j = [n, t, r, C, E, j, k, I, l, w], I = sr.apply(m, j), Sr(n) && Gu(I, j), I.placeholder = A, I
                    }
                }
                if (A = p ? r : this, I = h ? A[n] : n, f)
                    for (w = j.length, E = Ou(f.length, w), k = Dn(j); E--;) C = f[E], j[E] = Er(C, w) ? k[C] : m;
                return s && l < j.length && (j.length = l), this && this !== Yn && this instanceof c && (I = d || Xt(n)), I.apply(A, j)
            }
            var s = t & I,
                p = t & b,
                h = t & x,
                v = t & j,
                g = t & A,
                y = t & k,
                d = h ? null : Xt(n);
            return c
        }

        function pr(n, t, r) {
            return n = n.length, t = +t,
                n < t && Au(t) ? (t -= n, r = null == r ? " " : r + "", We(r, au(t / r.length)).slice(0, t)) : ""
        }

        function hr(n, t, r, e) {
            function u() {
                for (var t = -1, f = arguments.length, l = -1, a = e.length, c = Me(f + a); ++l < a;) c[l] = e[l];
                for (; f--;) c[l++] = arguments[++t];
                return (this && this !== Yn && this instanceof u ? o : n).apply(i ? r : this, c)
            }
            var i = t & b,
                o = Xt(n);
            return u
        }

        function _r(n) {
            return function(t, r, e, u) {
                var i = mr(e);
                return null == e && i === it ? zt(t, r, n) : Bt(t, r, i(e, u, 1), n)
            }
        }

        function vr(n, t, r, e, u, i, o, f) {
            var l = t & x;
            if (!l && typeof n != "function") throw new Je(N);
            var a = e ? e.length : 0;
            if (a || (t &= ~(O | R), e = u = null), a -= u ? u.length : 0, t & R) {
                var c = e,
                    s = u;
                e = u = null
            }
            var p = l ? null : Yu(n);
            return r = [n, t, r, e, u, c, s, i, o, f], p && (e = r[1], t = p[1], f = e | t, u = t == I && e == j || t == I && e == E && r[7].length <= p[8] || t == (I | E) && e == j, (f < I || u) && (t & b && (r[2] = p[2], f |= e & b ? 0 : A), (e = p[3]) && (u = r[3], r[3] = u ? qt(u, e, p[4]) : Dn(e), r[4] = u ? _(r[3], L) : Dn(p[4])), (e = p[5]) && (u = r[5], r[5] = u ? Dt(u, e, p[6]) : Dn(e), r[6] = u ? _(r[5], L) : Dn(p[6])), (e = p[7]) && (r[7] = Dn(e)), t & I && (r[8] = null == r[8] ? p[8] : Ou(r[8], p[8])), null == r[9] && (r[9] = p[9]), r[0] = p[0], r[1] = f), t = r[1], f = r[9]),
                r[9] = null == f ? l ? 0 : n.length : ku(f - a, 0) || 0, (p ? Ku : Gu)(t == b ? Gt(r[0], r[2]) : t != O && t != (b | O) || r[4].length ? sr.apply(m, r) : hr.apply(m, r), r)
        }

        function gr(n, t, r, e, u, i, o) {
            var f = -1,
                l = n.length,
                a = t.length;
            if (l != a && (!u || a <= l)) return false;
            for (; ++f < l;) {
                var c = n[f],
                    a = t[f],
                    s = e ? e(u ? a : c, u ? c : a, f) : m;
                if (s !== m) {
                    if (s) continue;
                    return false
                }
                if (u) {
                    if (!Hn(t, function(n) {
                            return c === n || r(c, n, e, u, i, o)
                        })) return false
                } else if (c !== a && !r(c, a, e, u, i, o)) return false
            }
            return true
        }

        function yr(n, t, r) {
            switch (r) {
                case M:
                case P:
                    return +n == +t;
                case q:
                    return n.name == t.name && n.message == t.message;
                case K:
                    return n != +n ? t != +t : n == +t;
                case Y:
                case Z:
                    return n == t + ""
            }
            return false
        }

        function dr(n, t, r, e, u, i, o) {
            var f = Ki(n),
                l = f.length,
                a = Ki(t).length;
            if (l != a && !u) return false;
            for (a = l; a--;) {
                var c = f[a];
                if (!(u ? c in t : ru.call(t, c))) return false
            }
            for (var s = u; ++a < l;) {
                var c = f[a],
                    p = n[c],
                    h = t[c],
                    _ = e ? e(u ? h : p, u ? p : h, c) : m;
                if (_ === m ? !r(p, h, e, u, i, o) : !_) return false;
                s || (s = "constructor" == c)
            }
            return s || (r = n.constructor, e = t.constructor, !(r != e && "constructor" in n && "constructor" in t) || typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) ? true : false;
        }

        function mr(n, t, r) {
            var e = Nn.callback || Ue,
                e = e === Ue ? it : e;
            return r ? e(n, t, r) : e
        }

        function wr(n) {
            for (var t = n.name, r = Lu[t], e = r ? r.length : 0; e--;) {
                var u = r[e],
                    i = u.func;
                if (null == i || i == n) return u.name
            }
            return t
        }

        function br(n, t, e) {
            var u = Nn.indexOf || Kr,
                u = u === Kr ? r : u;
            return n ? u(n, t, e) : u
        }

        function xr(n) {
            n = Oe(n);
            for (var t = n.length; t--;) {
                var r = n[t][1];
                n[t][2] = r === r && !ve(r)
            }
            return n
        }

        function Ar(n, t) {
            var r = null == n ? m : n[t];
            return ge(r) ? r : m
        }

        function jr(n) {
            var t = n.length,
                r = new n.constructor(t);
            return t && "string" == typeof n[0] && ru.call(n, "index") && (r.index = n.index,
                r.input = n.input), r
        }

        function kr(n) {
            return n = n.constructor, typeof n == "function" && n instanceof n || (n = Ye), new n
        }

        function Or(n, t, r) {
            var e = n.constructor;
            switch (t) {
                case G:
                    return Pt(n);
                case M:
                case P:
                    return new e(+n);
                case J:
                case X:
                case H:
                case Q:
                case nn:
                case tn:
                case rn:
                case en:
                case un:
                    return t = n.buffer, new e(r ? Pt(t) : t, n.byteOffset, n.length);
                case K:
                case Z:
                    return new e(n);
                case Y:
                    var u = new e(n.source, jn.exec(n));
                    u.lastIndex = n.lastIndex
            }
            return u
        }

        function Rr(n, t, r) {
            return null == n || Wr(t, n) || (t = Br(t), n = 1 == t.length ? n : dt(n, Ct(t, 0, -1)),
                t = Vr(t)), t = null == n ? n : n[t], null == t ? m : t.apply(n, r)
        }

        function Ir(n) {
            return null != n && Tr(Zu(n))
        }

        function Er(n, t) {
            return n = typeof n == "number" || Rn.test(n) ? +n : -1, t = null == t ? Fu : t, -1 < n && 0 == n % 1 && n < t
        }

        function Cr(n, t, r) {
            if (!ve(r)) return false;
            var e = typeof t;
            return ("number" == e ? Ir(r) && Er(t, r.length) : "string" == e && t in r) ? (t = r[t], n === n ? n === t : t !== t) : false
        }

        function Wr(n, t) {
            var r = typeof n;
            return "string" == r && yn.test(n) || "number" == r ? true : Ti(n) ? false : !gn.test(n) || null != t && n in zr(t)
        }

        function Sr(n) {
            var t = wr(n);
            return t in Bn.prototype ? (t = Nn[t],
                n === t ? true : (t = Yu(t), !!t && n === t[0])) : false
        }

        function Tr(n) {
            return typeof n == "number" && -1 < n && 0 == n % 1 && n <= Fu
        }

        function Ur(n, t) {
            n = zr(n);
            for (var r = -1, e = t.length, u = {}; ++r < e;) {
                var i = t[r];
                i in n && (u[i] = n[i])
            }
            return u
        }

        function $r(n, t) {
            var r = {};
            return _t(n, function(n, e, u) {
                t(n, e, u) && (r[e] = n)
            }), r
        }

        function Fr(n) {
            var t;
            if (!p(n) || uu.call(n) != V || !(ru.call(n, "constructor") || (t = n.constructor, typeof t != "function" || t instanceof t))) return false;
            var r;
            return _t(n, function(n, t) {
                r = t
            }), r === m || ru.call(n, r)
        }

        function Nr(n) {
            for (var t = ke(n), r = t.length, e = r && n.length, u = !!e && Tr(e) && (Ti(n) || se(n)), i = -1, o = []; ++i < r;) {
                var f = t[i];
                (u && Er(f, e) || ru.call(n, f)) && o.push(f)
            }
            return o
        }

        function Lr(n) {
            return null == n ? [] : Ir(n) ? ve(n) ? n : Ye(n) : Re(n)
        }

        function zr(n) {
            return ve(n) ? n : Ye(n)
        }

        function Br(n) {
            if (Ti(n)) return n;
            var t = [];
            return u(n).replace(dn, function(n, r, e, u) {
                t.push(e ? u.replace(xn, "$1") : r || n)
            }), t
        }

        function Mr(n) {
            return n instanceof Bn ? n.clone() : new zn(n.__wrapped__, n.__chain__, Dn(n.__actions__))
        }

        function Pr(n, t, r) {
            return n && n.length ? ((r ? Cr(n, t, r) : null == t) && (t = 1), Ct(n, 0 > t ? 0 : t)) : []
        }

        function qr(n, t, r) {
            var e = n ? n.length : 0;
            return e ? ((r ? Cr(n, t, r) : null == t) && (t = 1),
                t = e - (+t || 0), Ct(n, 0, 0 > t ? 0 : t)) : []
        }

        function Dr(n) {
            return n ? n[0] : m
        }

        function Kr(n, t, e) {
            var u = n ? n.length : 0;
            if (!u) return -1;
            if (typeof e == "number") e = 0 > e ? ku(u + e, 0) : e;
            else if (e) return e = zt(n, t), n = n[e], (t === t ? t === n : n !== n) ? e : -1;
            return r(n, t, e || 0)
        }

        function Vr(n) {
            var t = n ? n.length : 0;
            return t ? n[t - 1] : m
        }

        function Yr(n) {
            return Pr(n, 1)
        }

        function Zr(n, t, e, u) {
            if (!n || !n.length) return [];
            null != t && typeof t != "boolean" && (u = e, e = Cr(n, t, u) ? null : t, t = false);
            var i = mr();
            if ((null != e || i !== it) && (e = i(e, u, 3)), t && br() == r) {
                t = e;
                var o;
                e = -1, u = n.length;
                for (var i = -1, f = []; ++e < u;) {
                    var l = n[e],
                        a = t ? t(l, e, n) : l;
                    e && o === a || (o = a, f[++i] = l)
                }
                n = f
            } else n = $t(n, e);
            return n
        }

        function Gr(n) {
            if (!n || !n.length) return [];
            var t = -1,
                r = 0;
            n = Gn(n, function(n) {
                return Ir(n) ? (r = ku(n.length, r), true) : void 0
            });
            for (var e = Me(r); ++t < r;) e[t] = Jn(n, kt(t));
            return e
        }

        function Jr(n, t, r) {
            return n && n.length ? (n = Gr(n), null == t ? n : (t = Mt(t, r, 4), Jn(n, function(n) {
                return Xn(n, t, m, true)
            }))) : []
        }

        function Xr(n, t) {
            var r = -1,
                e = n ? n.length : 0,
                u = {};
            for (!e || t || Ti(n[0]) || (t = []); ++r < e;) {
                var i = n[r];
                t ? u[i] = t[r] : i && (u[i[0]] = i[1]);
            }
            return u
        }

        function Hr(n) {
            return n = Nn(n), n.__chain__ = true, n
        }

        function Qr(n, t, r) {
            return t.call(r, n)
        }

        function ne(n, t, r) {
            var e = Ti(n) ? Vn : at;
            return r && Cr(n, t, r) && (t = null), (typeof t != "function" || r !== m) && (t = mr(t, r, 3)), e(n, t)
        }

        function te(n, t, r) {
            var e = Ti(n) ? Gn : st;
            return t = mr(t, r, 3), e(n, t)
        }

        function re(n, t, r, e) {
            var u = n ? Zu(n) : 0;
            return Tr(u) || (n = Re(n), u = n.length), u ? (r = typeof r != "number" || e && Cr(t, r, e) ? 0 : 0 > r ? ku(u + r, 0) : r || 0, typeof n == "string" || !Ti(n) && me(n) ? r < u && -1 < n.indexOf(t, r) : -1 < br(n, t, r)) : false
        }

        function ee(n, t, r) {
            var e = Ti(n) ? Jn : bt;
            return t = mr(t, r, 3), e(n, t)
        }

        function ue(n, t, r) {
            if (r ? Cr(n, t, r) : null == t) {
                n = Lr(n);
                var e = n.length;
                return 0 < e ? n[It(0, e - 1)] : m
            }
            r = -1, n = xe(n);
            var e = n.length,
                u = e - 1;
            for (t = Ou(0 > t ? 0 : +t || 0, e); ++r < t;) {
                var e = It(r, u),
                    i = n[e];
                n[e] = n[r], n[r] = i
            }
            return n.length = t, n
        }

        function ie(n, t, r) {
            var e = Ti(n) ? Hn : Wt;
            return r && Cr(n, t, r) && (t = null), (typeof t != "function" || r !== m) && (t = mr(t, r, 3)), e(n, t)
        }

        function oe(n, t) {
            var r;
            if (typeof t != "function") {
                if (typeof n != "function") throw new Je(N);
                var e = n;
                n = t, t = e
            }
            return function() {
                return 0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = null), r
            }
        }

        function fe(n, t, r) {
            function e() {
                var r = t - (wi() - a);
                0 >= r || r > t ? (f && cu(f), r = p, f = s = p = m, r && (h = wi(), l = n.apply(c, o), s || f || (o = c = null))) : s = gu(e, r)
            }

            function u() {
                s && cu(s), f = s = p = m, (v || _ !== t) && (h = wi(), l = n.apply(c, o), s || f || (o = c = null))
            }

            function i() {
                if (o = arguments, a = wi(), c = this, p = v && (s || !g), false === _) var r = g && !s;
                else {
                    f || g || (h = a);
                    var i = _ - (a - h),
                        y = 0 >= i || i > _;
                    y ? (f && (f = cu(f)), h = a, l = n.apply(c, o)) : f || (f = gu(u, i))
                }
                return y && s ? s = cu(s) : s || t === _ || (s = gu(e, t)), r && (y = true, l = n.apply(c, o)), !y || s || f || (o = c = null), l
            }
            var o, f, l, a, c, s, p, h = 0,
                _ = false,
                v = true;
            if (typeof n != "function") throw new Je(N);
            if (t = 0 > t ? 0 : +t || 0, true === r) var g = true,
                v = false;
            else ve(r) && (g = r.leading, _ = "maxWait" in r && ku(+r.maxWait || 0, t), v = "trailing" in r ? r.trailing : v);
            return i.cancel = function() {
                s && cu(s), f && cu(f), f = s = p = m
            }, i
        }

        function le(n, t) {
            function r() {
                var e = arguments,
                    u = t ? t.apply(this, e) : e[0],
                    i = r.cache;
                return i.has(u) ? i.get(u) : (e = n.apply(this, e), r.cache = i.set(u, e), e)
            }
            if (typeof n != "function" || t && typeof t != "function") throw new Je(N);
            return r.cache = new le.Cache,
                r
        }

        function ae(n, t) {
            if (typeof n != "function") throw new Je(N);
            return t = ku(t === m ? n.length - 1 : +t || 0, 0),
                function() {
                    for (var r = arguments, e = -1, u = ku(r.length - t, 0), i = Me(u); ++e < u;) i[e] = r[t + e];
                    switch (t) {
                        case 0:
                            return n.call(this, i);
                        case 1:
                            return n.call(this, r[0], i);
                        case 2:
                            return n.call(this, r[0], r[1], i)
                    }
                    for (u = Me(t + 1), e = -1; ++e < t;) u[e] = r[e];
                    return u[t] = i, n.apply(this, u)
                }
        }

        function ce(n, t) {
            return n > t
        }

        function se(n) {
            return p(n) && Ir(n) && uu.call(n) == z
        }

        function pe(n) {
            return !!n && 1 === n.nodeType && p(n) && -1 < uu.call(n).indexOf("Element");
        }

        function he(n, t, r, e) {
            return e = (r = typeof r == "function" ? Mt(r, e, 3) : m) ? r(n, t) : m, e === m ? mt(n, t, r) : !!e
        }

        function _e(n) {
            return p(n) && typeof n.message == "string" && uu.call(n) == q
        }

        function ve(n) {
            var t = typeof n;
            return !!n && ("object" == t || "function" == t)
        }

        function ge(n) {
            return null == n ? false : uu.call(n) == D ? ou.test(tu.call(n)) : p(n) && On.test(n)
        }

        function ye(n) {
            return typeof n == "number" || p(n) && uu.call(n) == K
        }

        function de(n) {
            return p(n) && uu.call(n) == Y
        }

        function me(n) {
            return typeof n == "string" || p(n) && uu.call(n) == Z
        }

        function we(n) {
            return p(n) && Tr(n.length) && !!Un[uu.call(n)];
        }

        function be(n, t) {
            return n < t
        }

        function xe(n) {
            var t = n ? Zu(n) : 0;
            return Tr(t) ? t ? Dn(n) : [] : Re(n)
        }

        function Ae(n) {
            return ut(n, ke(n))
        }

        function je(n) {
            return yt(n, ke(n))
        }

        function ke(n) {
            if (null == n) return [];
            ve(n) || (n = Ye(n));
            for (var t = n.length, t = t && Tr(t) && (Ti(n) || se(n)) && t || 0, r = n.constructor, e = -1, r = typeof r == "function" && r.prototype === n, u = Me(t), i = 0 < t; ++e < t;) u[e] = e + "";
            for (var o in n) i && Er(o, t) || "constructor" == o && (r || !ru.call(n, o)) || u.push(o);
            return u
        }

        function Oe(n) {
            n = zr(n);
            for (var t = -1, r = Ki(n), e = r.length, u = Me(e); ++t < e;) {
                var i = r[t];
                u[t] = [i, n[i]]
            }
            return u
        }

        function Re(n) {
            return Ft(n, Ki(n))
        }

        function Ie(n) {
            return (n = u(n)) && n.replace(In, l).replace(bn, "")
        }

        function Ee(n) {
            return (n = u(n)) && wn.test(n) ? n.replace(mn, "\\$&") : n
        }

        function Ce(n, t, r) {
            return r && Cr(n, t, r) && (t = 0), Eu(n, t)
        }

        function We(n, t) {
            var r = "";
            if (n = u(n), t = +t, 1 > t || !n || !Au(t)) return r;
            do t % 2 && (r += n), t = su(t / 2), n += n; while (t);
            return r
        }

        function Se(n, t, r) {
            var e = n;
            return (n = u(n)) ? (r ? Cr(e, t, r) : null == t) ? n.slice(v(n), g(n) + 1) : (t += "", n.slice(i(n, t), o(n, t) + 1)) : n
        }

        function Te(n, t, r) {
            return r && Cr(n, t, r) && (t = null), n = u(n), n.match(t || Wn) || []
        }

        function Ue(n, t, r) {
            return r && Cr(n, t, r) && (t = null), p(n) ? Ne(n) : it(n, t)
        }

        function $e(n) {
            return function() {
                return n
            }
        }

        function Fe(n) {
            return n
        }

        function Ne(n) {
            return xt(ot(n, true))
        }

        function Le(n, t, r) {
            if (null == r) {
                var e = ve(t),
                    u = e ? Ki(t) : null;
                ((u = u && u.length ? yt(t, u) : null) ? u.length : e) || (u = false, r = t, t = n, n = this)
            }
            u || (u = yt(t, Ki(t)));
            var i = true,
                e = -1,
                o = $i(n),
                f = u.length;
            false === r ? i = false : ve(r) && "chain" in r && (i = r.chain);
            for (; ++e < f;) {
                r = u[e];
                var l = t[r];
                n[r] = l, o && (n.prototype[r] = function(t) {
                    return function() {
                        var r = this.__chain__;
                        if (i || r) {
                            var e = n(this.__wrapped__);
                            return (e.__actions__ = Dn(this.__actions__)).push({
                                func: t,
                                args: arguments,
                                thisArg: n
                            }), e.__chain__ = r, e
                        }
                        return r = [this.value()], _u.apply(r, arguments), t.apply(n, r)
                    }
                }(l))
            }
            return n
        }

        function ze() {}

        function Be(n) {
            return Wr(n) ? kt(n) : Ot(n)
        }
        h = h ? Zn.defaults(Yn.Object(), h, Zn.pick(Yn, Tn)) : Yn;
        var Me = h.Array,
            Pe = h.Date,
            qe = h.Error,
            De = h.Function,
            Ke = h.Math,
            Ve = h.Number,
            Ye = h.Object,
            Ze = h.RegExp,
            Ge = h.String,
            Je = h.TypeError,
            Xe = Me.prototype,
            He = Ye.prototype,
            Qe = Ge.prototype,
            nu = (nu = h.window) ? nu.document : null,
            tu = De.prototype.toString,
            ru = He.hasOwnProperty,
            eu = 0,
            uu = He.toString,
            iu = h._,
            ou = Ze("^" + Ee(tu.call(ru)).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            fu = Ar(h, "ArrayBuffer"),
            lu = Ar(fu && new fu(0), "slice"),
            au = Ke.ceil,
            cu = h.clearTimeout,
            su = Ke.floor,
            pu = Ar(Ye, "getPrototypeOf"),
            hu = h.parseFloat,
            _u = Xe.push,
            vu = Ar(h, "Set"),
            gu = h.setTimeout,
            yu = Xe.splice,
            du = Ar(h, "Uint8Array"),
            mu = Ar(h, "WeakMap"),
            wu = function() {
                try {
                    var n = Ar(h, "Float64Array"),
                        t = new n(new fu(10), 0, 1) && n
                } catch (r) {}
                return t || null
            }(),
            bu = Ar(Ye, "create"),
            xu = Ar(Me, "isArray"),
            Au = h.isFinite,
            ju = Ar(Ye, "keys"),
            ku = Ke.max,
            Ou = Ke.min,
            Ru = Ar(Pe, "now"),
            Iu = Ar(Ve, "isFinite"),
            Eu = h.parseInt,
            Cu = Ke.random,
            Wu = Ve.NEGATIVE_INFINITY,
            Su = Ve.POSITIVE_INFINITY,
            Tu = 4294967294,
            Uu = 2147483647,
            $u = wu ? wu.BYTES_PER_ELEMENT : 0,
            Fu = 9007199254740991,
            Nu = mu && new mu,
            Lu = {},
            zu = Nn.support = {};
        ! function(n) {
            function t() {
                this.x = n
            }
            var r = [];
            t.prototype = {
                valueOf: n,
                y: n
            };
            for (var e in new t) r.push(e);
            try {
                zu.dom = 11 === nu.createDocumentFragment().nodeType
            } catch (u) {
                zu.dom = false
            }
        }(1, 0), Nn.templateSettings = {
            escape: hn,
            evaluate: _n,
            interpolate: vn,
            variable: "",
            imports: {
                _: Nn
            }
        };
        var Bu = function() {
                function n() {}
                return function(t) {
                    if (ve(t)) {
                        n.prototype = t;
                        var r = new n;
                        n.prototype = null
                    }
                    return r || {}
                }
            }(),
            Mu = Yt(vt),
            Pu = Yt(gt, true),
            qu = Zt(),
            Du = Zt(true),
            Ku = Nu ? function(n, t) {
                return Nu.set(n, t), n
            } : Fe;
        lu || (Pt = fu && du ? function(n) {
            var t = n.byteLength,
                r = wu ? su(t / $u) : 0,
                e = r * $u,
                u = new fu(t);
            if (r) {
                var i = new wu(u, 0, r);
                i.set(new wu(n, 0, r))
            }
            return t != e && (i = new du(u, e),
                i.set(new du(n, e))), u
        } : $e(null));
        var Vu = bu && vu ? function(n) {
                return new Pn(n)
            } : $e(null),
            Yu = Nu ? function(n) {
                return Nu.get(n)
            } : ze,
            Zu = kt("length"),
            Gu = function() {
                var n = 0,
                    t = 0;
                return function(r, e) {
                    var u = wi(),
                        i = T - (u - t);
                    if (t = u, 0 < i) {
                        if (++n >= S) return r
                    } else n = 0;
                    return Ku(r, e)
                }
            }(),
            Ju = ae(function(n, t) {
                return Ir(n) ? lt(n, ht(t, false, true)) : []
            }),
            Xu = tr(),
            Hu = tr(true),
            Qu = ae(function(n) {
                for (var t = n.length, e = t, u = Me(c), i = br(), o = i == r, f = []; e--;) {
                    var l = n[e] = Ir(l = n[e]) ? l : [];
                    u[e] = o && 120 <= l.length ? Vu(e && l) : null
                }
                var o = n[0],
                    a = -1,
                    c = o ? o.length : 0,
                    s = u[0];
                n: for (; ++a < c;)
                    if (l = o[a], 0 > (s ? qn(s, l) : i(f, l, 0))) {
                        for (e = t; --e;) {
                            var p = u[e];
                            if (0 > (p ? qn(p, l) : i(n[e], l, 0))) continue n
                        }
                        s && s.push(l), f.push(l)
                    }
                return f
            }),
            ni = ae(function(t, r) {
                r = ht(r);
                var e = et(t, r);
                return Rt(t, r.sort(n)), e
            }),
            ti = _r(),
            ri = _r(true),
            ei = ae(function(n) {
                return $t(ht(n, false, true))
            }),
            ui = ae(function(n, t) {
                return Ir(n) ? lt(n, t) : []
            }),
            ii = ae(Gr),
            oi = ae(function(n) {
                var t = n.length,
                    r = 2 < t ? n[t - 2] : m,
                    e = 1 < t ? n[t - 1] : m;
                return 2 < t && typeof r == "function" ? t -= 2 : (r = 1 < t && typeof e == "function" ? (--t, e) : m, e = m), n.length = t, Jr(n, r, e)
            }),
            fi = ae(function(n, t) {
                return et(n, ht(t))
            }),
            li = Kt(function(n, t, r) {
                ru.call(n, r) ? ++n[r] : n[r] = 1
            }),
            ai = nr(Mu),
            ci = nr(Pu, true),
            si = ur(Kn, Mu),
            pi = ur(function(n, t) {
                for (var r = n.length; r-- && false !== t(n[r], r, n););
                return n
            }, Pu),
            hi = Kt(function(n, t, r) {
                ru.call(n, r) ? n[r].push(t) : n[r] = [t]
            }),
            _i = Kt(function(n, t, r) {
                n[r] = t
            }),
            vi = ae(function(n, t, r) {
                var e = -1,
                    u = typeof t == "function",
                    i = Wr(t),
                    o = Ir(n) ? Me(n.length) : [];
                return Mu(n, function(n) {
                    var f = u ? t : i && null != n ? n[t] : null;
                    o[++e] = f ? f.apply(n, r) : Rr(n, t, r)
                }), o
            }),
            gi = Kt(function(n, t, r) {
                n[r ? 0 : 1].push(t)
            }, function() {
                return [
                    [],
                    []
                ]
            }),
            yi = cr(Xn, Mu),
            di = cr(function(n, t, r, e) {
                var u = n.length;
                for (e && u && (r = n[--u]); u--;) r = t(r, n[u], u, n);
                return r
            }, Pu),
            mi = ae(function(n, t) {
                if (null == n) return [];
                var r = t[2];
                return r && Cr(t[0], t[1], r) && (t.length = 1), Tt(n, ht(t), [])
            }),
            wi = Ru || function() {
                return (new Pe).getTime()
            },
            bi = ae(function(n, t, r) {
                var e = b;
                if (r.length) var u = _(r, bi.placeholder),
                    e = e | O;
                return vr(n, e, t, r, u)
            }),
            xi = ae(function(n, t) {
                t = t.length ? ht(t) : je(n);
                for (var r = -1, e = t.length; ++r < e;) {
                    var u = t[r];
                    n[u] = vr(n[u], b, n)
                }
                return n
            }),
            Ai = ae(function(n, t, r) {
                var e = b | x;
                if (r.length) var u = _(r, Ai.placeholder),
                    e = e | O;
                return vr(t, e, n, r, u)
            }),
            ji = Ht(j),
            ki = Ht(k),
            Oi = ae(function(n, t) {
                return ft(n, 1, t)
            }),
            Ri = ae(function(n, t, r) {
                return ft(n, t, r)
            }),
            Ii = er(),
            Ei = er(true),
            Ci = ar(O),
            Wi = ar(R),
            Si = ae(function(n, t) {
                return vr(n, E, null, null, null, ht(t))
            }),
            Ti = xu || function(n) {
                return p(n) && Tr(n.length) && uu.call(n) == B
            };
        zu.dom || (pe = function(n) {
            return !!n && 1 === n.nodeType && p(n) && !Fi(n)
        });
        var Ui = Iu || function(n) {
                return typeof n == "number" && Au(n)
            },
            $i = e(/x/) || du && !e(du) ? function(n) {
                return uu.call(n) == D;
            } : e,
            Fi = pu ? function(n) {
                if (!n || uu.call(n) != V) return false;
                var t = Ar(n, "valueOf"),
                    r = t && (r = pu(t)) && pu(r);
                return r ? n == r || pu(n) == r : Fr(n)
            } : Fr,
            Ni = Vt(function(n, t, r) {
                return r ? tt(n, t, r) : rt(n, t)
            }),
            Li = ae(function(n) {
                var t = n[0];
                return null == t ? t : (n.push(Qn), Ni.apply(m, n))
            }),
            zi = rr(vt),
            Bi = rr(gt),
            Mi = ir(qu),
            Pi = ir(Du),
            qi = or(vt),
            Di = or(gt),
            Ki = ju ? function(n) {
                var t = null == n ? null : n.constructor;
                return typeof t == "function" && t.prototype === n || typeof n != "function" && Ir(n) ? Nr(n) : ve(n) ? ju(n) : []
            } : Nr,
            Vi = fr(true),
            Yi = fr(),
            Zi = Vt(jt),
            Gi = ae(function(n, t) {
                if (null == n) return {};
                if ("function" != typeof t[0]) return t = Jn(ht(t), Ge), Ur(n, lt(ke(n), t));
                var r = Mt(t[0], t[1], 3);
                return $r(n, function(n, t, e) {
                    return !r(n, t, e)
                })
            }),
            Ji = ae(function(n, t) {
                return null == n ? {} : "function" == typeof t[0] ? $r(n, Mt(t[0], t[1], 3)) : Ur(n, ht(t))
            }),
            Xi = Jt(function(n, t, r) {
                return t = t.toLowerCase(), n + (r ? t.charAt(0).toUpperCase() + t.slice(1) : t)
            }),
            Hi = Jt(function(n, t, r) {
                return n + (r ? "-" : "") + t.toLowerCase()
            }),
            Qi = lr(),
            no = lr(true);
        8 != Eu(Sn + "08") && (Ce = function(n, t, r) {
            return (r ? Cr(n, t, r) : null == t) ? t = 0 : t && (t = +t),
                n = Se(n), Eu(n, t || (kn.test(n) ? 16 : 10))
        });
        var to = Jt(function(n, t, r) {
                return n + (r ? "_" : "") + t.toLowerCase()
            }),
            ro = Jt(function(n, t, r) {
                return n + (r ? " " : "") + (t.charAt(0).toUpperCase() + t.slice(1))
            }),
            eo = ae(function(n, t) {
                try {
                    return n.apply(m, t)
                } catch (r) {
                    return _e(r) ? r : new qe(r)
                }
            }),
            uo = ae(function(n, t) {
                return function(r) {
                    return Rr(r, n, t)
                }
            }),
            io = ae(function(n, t) {
                return function(r) {
                    return Rr(n, r, t)
                }
            }),
            oo = Qt(ce, Wu),
            fo = Qt(be, Su);
        return Nn.prototype = Ln.prototype, zn.prototype = Bu(Ln.prototype), zn.prototype.constructor = zn,
            Bn.prototype = Bu(Ln.prototype), Bn.prototype.constructor = Bn, Mn.prototype["delete"] = function(n) {
                return this.has(n) && delete this.__data__[n]
            }, Mn.prototype.get = function(n) {
                return "__proto__" == n ? m : this.__data__[n]
            }, Mn.prototype.has = function(n) {
                return "__proto__" != n && ru.call(this.__data__, n)
            }, Mn.prototype.set = function(n, t) {
                return "__proto__" != n && (this.__data__[n] = t), this
            }, Pn.prototype.push = function(n) {
                var t = this.data;
                typeof n == "string" || ve(n) ? t.set.add(n) : t.hash[n] = true
            }, le.Cache = Mn, Nn.after = function(n, t) {
                if (typeof t != "function") {
                    if (typeof n != "function") throw new Je(N);
                    var r = n;
                    n = t, t = r
                }
                return n = Au(n = +n) ? n : 0,
                    function() {
                        return 1 > --n ? t.apply(this, arguments) : void 0
                    }
            }, Nn.ary = function(n, t, r) {
                return r && Cr(n, t, r) && (t = null), t = n && null == t ? n.length : ku(+t || 0, 0), vr(n, I, null, null, null, null, t)
            }, Nn.assign = Ni, Nn.at = fi, Nn.before = oe, Nn.bind = bi, Nn.bindAll = xi, Nn.bindKey = Ai, Nn.callback = Ue, Nn.chain = Hr, Nn.chunk = function(n, t, r) {
                t = (r ? Cr(n, t, r) : null == t) ? 1 : ku(+t || 1, 1), r = 0;
                for (var e = n ? n.length : 0, u = -1, i = Me(au(e / t)); r < e;) i[++u] = Ct(n, r, r += t);
                return i
            }, Nn.compact = function(n) {
                for (var t = -1, r = n ? n.length : 0, e = -1, u = []; ++t < r;) {
                    var i = n[t];
                    i && (u[++e] = i)
                }
                return u
            }, Nn.constant = $e, Nn.countBy = li, Nn.create = function(n, t, r) {
                var e = Bu(n);
                return r && Cr(n, t, r) && (t = null), t ? rt(e, t) : e
            }, Nn.curry = ji, Nn.curryRight = ki, Nn.debounce = fe, Nn.defaults = Li, Nn.defer = Oi, Nn.delay = Ri, Nn.difference = Ju, Nn.drop = Pr, Nn.dropRight = qr, Nn.dropRightWhile = function(n, t, r) {
                return n && n.length ? Nt(n, mr(t, r, 3), true, true) : []
            }, Nn.dropWhile = function(n, t, r) {
                return n && n.length ? Nt(n, mr(t, r, 3), true) : []
            }, Nn.fill = function(n, t, r, e) {
                var u = n ? n.length : 0;
                if (!u) return [];
                for (r && typeof r != "number" && Cr(n, t, r) && (r = 0, e = u), u = n.length, r = null == r ? 0 : +r || 0, 0 > r && (r = -r > u ? 0 : u + r), e = e === m || e > u ? u : +e || 0, 0 > e && (e += u), u = r > e ? 0 : e >>> 0, r >>>= 0; r < u;) n[r++] = t;
                return n
            }, Nn.filter = te, Nn.flatten = function(n, t, r) {
                var e = n ? n.length : 0;
                return r && Cr(n, t, r) && (t = false), e ? ht(n, t) : []
            }, Nn.flattenDeep = function(n) {
                return n && n.length ? ht(n, true) : []
            }, Nn.flow = Ii, Nn.flowRight = Ei, Nn.forEach = si, Nn.forEachRight = pi, Nn.forIn = Mi, Nn.forInRight = Pi, Nn.forOwn = qi, Nn.forOwnRight = Di, Nn.functions = je, Nn.groupBy = hi, Nn.indexBy = _i,
            Nn.initial = function(n) {
                return qr(n, 1)
            }, Nn.intersection = Qu, Nn.invert = function(n, t, r) {
                r && Cr(n, t, r) && (t = null), r = -1;
                for (var e = Ki(n), u = e.length, i = {}; ++r < u;) {
                    var o = e[r],
                        f = n[o];
                    t ? ru.call(i, f) ? i[f].push(o) : i[f] = [o] : i[f] = o
                }
                return i
            }, Nn.invoke = vi, Nn.keys = Ki, Nn.keysIn = ke, Nn.map = ee, Nn.mapKeys = Vi, Nn.mapValues = Yi, Nn.matches = Ne, Nn.matchesProperty = function(n, t) {
                return At(n, ot(t, true))
            }, Nn.memoize = le, Nn.merge = Zi, Nn.method = uo, Nn.methodOf = io, Nn.mixin = Le, Nn.negate = function(n) {
                if (typeof n != "function") throw new Je(N);
                return function() {
                    return !n.apply(this, arguments)
                }
            }, Nn.omit = Gi, Nn.once = function(n) {
                return oe(2, n)
            }, Nn.pairs = Oe, Nn.partial = Ci, Nn.partialRight = Wi, Nn.partition = gi, Nn.pick = Ji, Nn.pluck = function(n, t) {
                return ee(n, Be(t))
            }, Nn.property = Be, Nn.propertyOf = function(n) {
                return function(t) {
                    return dt(n, Br(t), t + "")
                }
            }, Nn.pull = function() {
                var n = arguments,
                    t = n[0];
                if (!t || !t.length) return t;
                for (var r = 0, e = br(), u = n.length; ++r < u;)
                    for (var i = 0, o = n[r]; - 1 < (i = e(t, o, i));) yu.call(t, i, 1);
                return t
            }, Nn.pullAt = ni, Nn.range = function(n, t, r) {
                r && Cr(n, t, r) && (t = r = null),
                    n = +n || 0, r = null == r ? 1 : +r || 0, null == t ? (t = n, n = 0) : t = +t || 0;
                var e = -1;
                t = ku(au((t - n) / (r || 1)), 0);
                for (var u = Me(t); ++e < t;) u[e] = n, n += r;
                return u
            }, Nn.rearg = Si, Nn.reject = function(n, t, r) {
                var e = Ti(n) ? Gn : st;
                return t = mr(t, r, 3), e(n, function(n, r, e) {
                    return !t(n, r, e)
                })
            }, Nn.remove = function(n, t, r) {
                var e = [];
                if (!n || !n.length) return e;
                var u = -1,
                    i = [],
                    o = n.length;
                for (t = mr(t, r, 3); ++u < o;) r = n[u], t(r, u, n) && (e.push(r), i.push(u));
                return Rt(n, i), e
            }, Nn.rest = Yr, Nn.restParam = ae, Nn.set = function(n, t, r) {
                if (null == n) return n;
                var e = t + "";
                t = null != n[e] || Wr(t, n) ? [e] : Br(t);
                for (var e = -1, u = t.length, i = u - 1, o = n; null != o && ++e < u;) {
                    var f = t[e];
                    ve(o) && (e == i ? o[f] = r : null == o[f] && (o[f] = Er(t[e + 1]) ? [] : {})), o = o[f]
                }
                return n
            }, Nn.shuffle = function(n) {
                return ue(n, Su)
            }, Nn.slice = function(n, t, r) {
                var e = n ? n.length : 0;
                return e ? (r && typeof r != "number" && Cr(n, t, r) && (t = 0, r = e), Ct(n, t, r)) : []
            }, Nn.sortBy = function(n, t, r) {
                if (null == n) return [];
                r && Cr(n, t, r) && (t = null);
                var e = -1;
                return t = mr(t, r, 3), n = bt(n, function(n, r, u) {
                    return {
                        a: t(n, r, u),
                        b: ++e,
                        c: n
                    }
                }), St(n, f)
            }, Nn.sortByAll = mi, Nn.sortByOrder = function(n, t, r, e) {
                return null == n ? [] : (e && Cr(t, r, e) && (r = null),
                    Ti(t) || (t = null == t ? [] : [t]), Ti(r) || (r = null == r ? [] : [r]), Tt(n, t, r))
            }, Nn.spread = function(n) {
                if (typeof n != "function") throw new Je(N);
                return function(t) {
                    return n.apply(this, t)
                }
            }, Nn.take = function(n, t, r) {
                return n && n.length ? ((r ? Cr(n, t, r) : null == t) && (t = 1), Ct(n, 0, 0 > t ? 0 : t)) : []
            }, Nn.takeRight = function(n, t, r) {
                var e = n ? n.length : 0;
                return e ? ((r ? Cr(n, t, r) : null == t) && (t = 1), t = e - (+t || 0), Ct(n, 0 > t ? 0 : t)) : []
            }, Nn.takeRightWhile = function(n, t, r) {
                return n && n.length ? Nt(n, mr(t, r, 3), false, true) : []
            }, Nn.takeWhile = function(n, t, r) {
                return n && n.length ? Nt(n, mr(t, r, 3)) : [];
            }, Nn.tap = function(n, t, r) {
                return t.call(r, n), n
            }, Nn.throttle = function(n, t, r) {
                var e = true,
                    u = true;
                if (typeof n != "function") throw new Je(N);
                return false === r ? e = false : ve(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), Fn.leading = e, Fn.maxWait = +t, Fn.trailing = u, fe(n, t, Fn)
            }, Nn.thru = Qr, Nn.times = function(n, t, r) {
                if (n = su(n), 1 > n || !Au(n)) return [];
                var e = -1,
                    u = Me(Ou(n, 4294967295));
                for (t = Mt(t, r, 1); ++e < n;) 4294967295 > e ? u[e] = t(e) : t(e);
                return u
            }, Nn.toArray = xe, Nn.toPlainObject = Ae, Nn.transform = function(n, t, r, e) {
                var u = Ti(n) || we(n);
                return t = mr(t, e, 4), null == r && (u || ve(n) ? (e = n.constructor, r = u ? Ti(n) ? new e : [] : Bu($i(e) ? e.prototype : null)) : r = {}), (u ? Kn : vt)(n, function(n, e, u) {
                    return t(r, n, e, u)
                }), r
            }, Nn.union = ei, Nn.uniq = Zr, Nn.unzip = Gr, Nn.unzipWith = Jr, Nn.values = Re, Nn.valuesIn = function(n) {
                return Ft(n, ke(n))
            }, Nn.where = function(n, t) {
                return te(n, xt(t))
            }, Nn.without = ui, Nn.wrap = function(n, t) {
                return t = null == t ? Fe : t, vr(t, O, null, [n], [])
            }, Nn.xor = function() {
                for (var n = -1, t = arguments.length; ++n < t;) {
                    var r = arguments[n];
                    if (Ir(r)) var e = e ? lt(e, r).concat(lt(r, e)) : r;
                }
                return e ? $t(e) : []
            }, Nn.zip = ii, Nn.zipObject = Xr, Nn.zipWith = oi, Nn.backflow = Ei, Nn.collect = ee, Nn.compose = Ei, Nn.each = si, Nn.eachRight = pi, Nn.extend = Ni, Nn.iteratee = Ue, Nn.methods = je, Nn.object = Xr, Nn.select = te, Nn.tail = Yr, Nn.unique = Zr, Le(Nn, Nn), Nn.add = function(n, t) {
                return (+n || 0) + (+t || 0)
            }, Nn.attempt = eo, Nn.camelCase = Xi, Nn.capitalize = function(n) {
                return (n = u(n)) && n.charAt(0).toUpperCase() + n.slice(1)
            }, Nn.clone = function(n, t, r, e) {
                return t && typeof t != "boolean" && Cr(n, t, r) ? t = false : typeof t == "function" && (e = r, r = t, t = false), typeof r == "function" ? ot(n, t, Mt(r, e, 1)) : ot(n, t);
            }, Nn.cloneDeep = function(n, t, r) {
                return typeof t == "function" ? ot(n, true, Mt(t, r, 1)) : ot(n, true)
            }, Nn.deburr = Ie, Nn.endsWith = function(n, t, r) {
                n = u(n), t += "";
                var e = n.length;
                return r = r === m ? e : Ou(0 > r ? 0 : +r || 0, e), r -= t.length, 0 <= r && n.indexOf(t, r) == r
            }, Nn.escape = function(n) {
                return (n = u(n)) && pn.test(n) ? n.replace(cn, a) : n
            }, Nn.escapeRegExp = Ee, Nn.every = ne, Nn.find = ai, Nn.findIndex = Xu, Nn.findKey = zi, Nn.findLast = ci, Nn.findLastIndex = Hu, Nn.findLastKey = Bi, Nn.findWhere = function(n, t) {
                return ai(n, xt(t))
            }, Nn.first = Dr, Nn.get = function(n, t, r) {
                return n = null == n ? m : dt(n, Br(t), t + ""), n === m ? r : n
            }, Nn.gt = ce, Nn.gte = function(n, t) {
                return n >= t
            }, Nn.has = function(n, t) {
                if (null == n) return false;
                var r = ru.call(n, t);
                if (!r && !Wr(t)) {
                    if (t = Br(t), n = 1 == t.length ? n : dt(n, Ct(t, 0, -1)), null == n) return false;
                    t = Vr(t), r = ru.call(n, t)
                }
                return r || Tr(n.length) && Er(t, n.length) && (Ti(n) || se(n))
            }, Nn.identity = Fe, Nn.includes = re, Nn.indexOf = Kr, Nn.inRange = function(n, t, r) {
                return t = +t || 0, "undefined" === typeof r ? (r = t, t = 0) : r = +r || 0, n >= Ou(t, r) && n < ku(t, r)
            }, Nn.isArguments = se, Nn.isArray = Ti, Nn.isBoolean = function(n) {
                return true === n || false === n || p(n) && uu.call(n) == M
            }, Nn.isDate = function(n) {
                return p(n) && uu.call(n) == P
            }, Nn.isElement = pe, Nn.isEmpty = function(n) {
                return null == n ? true : Ir(n) && (Ti(n) || me(n) || se(n) || p(n) && $i(n.splice)) ? !n.length : !Ki(n).length
            }, Nn.isEqual = he, Nn.isError = _e, Nn.isFinite = Ui, Nn.isFunction = $i, Nn.isMatch = function(n, t, r, e) {
                return r = typeof r == "function" ? Mt(r, e, 3) : m, wt(n, xr(t), r)
            }, Nn.isNaN = function(n) {
                return ye(n) && n != +n
            }, Nn.isNative = ge, Nn.isNull = function(n) {
                return null === n
            }, Nn.isNumber = ye, Nn.isObject = ve, Nn.isPlainObject = Fi,
            Nn.isRegExp = de, Nn.isString = me, Nn.isTypedArray = we, Nn.isUndefined = function(n) {
                return n === m
            }, Nn.kebabCase = Hi, Nn.last = Vr, Nn.lastIndexOf = function(n, t, r) {
                var e = n ? n.length : 0;
                if (!e) return -1;
                var u = e;
                if (typeof r == "number") u = (0 > r ? ku(e + r, 0) : Ou(r || 0, e - 1)) + 1;
                else if (r) return u = zt(n, t, true) - 1, n = n[u], (t === t ? t === n : n !== n) ? u : -1;
                if (t !== t) return s(n, u, true);
                for (; u--;)
                    if (n[u] === t) return u;
                return -1
            }, Nn.lt = be, Nn.lte = function(n, t) {
                return n <= t
            }, Nn.max = oo, Nn.min = fo, Nn.noConflict = function() {
                return h._ = iu, this
            }, Nn.noop = ze, Nn.now = wi,
            Nn.pad = function(n, t, r) {
                n = u(n), t = +t;
                var e = n.length;
                return e < t && Au(t) ? (e = (t - e) / 2, t = su(e), e = au(e), r = pr("", e, r), r.slice(0, t) + n + r) : n
            }, Nn.padLeft = Qi, Nn.padRight = no, Nn.parseInt = Ce, Nn.random = function(n, t, r) {
                r && Cr(n, t, r) && (t = r = null);
                var e = null == n,
                    u = null == t;
                return null == r && (u && typeof n == "boolean" ? (r = n, n = 1) : typeof t == "boolean" && (r = t, u = true)), e && u && (t = 1, u = false), n = +n || 0, u ? (t = n, n = 0) : t = +t || 0, r || n % 1 || t % 1 ? (r = Cu(), Ou(n + r * (t - n + hu("1e-" + ((r + "").length - 1))), t)) : It(n, t)
            }, Nn.reduce = yi, Nn.reduceRight = di, Nn.repeat = We, Nn.result = function(n, t, r) {
                var e = null == n ? m : n[t];
                return e === m && (null == n || Wr(t, n) || (t = Br(t), n = 1 == t.length ? n : dt(n, Ct(t, 0, -1)), e = null == n ? m : n[Vr(t)]), e = e === m ? r : e), $i(e) ? e.call(n) : e
            }, Nn.runInContext = d, Nn.size = function(n) {
                var t = n ? Zu(n) : 0;
                return Tr(t) ? t : Ki(n).length
            }, Nn.snakeCase = to, Nn.some = ie, Nn.sortedIndex = ti, Nn.sortedLastIndex = ri, Nn.startCase = ro, Nn.startsWith = function(n, t, r) {
                return n = u(n), r = null == r ? 0 : Ou(0 > r ? 0 : +r || 0, n.length), n.lastIndexOf(t, r) == r
            }, Nn.sum = function(n, t, r) {
                r && Cr(n, t, r) && (t = null);
                var e = mr(),
                    u = null == t;
                if (u && e === it || (u = false,
                        t = e(t, r, 3)), u) {
                    for (n = Ti(n) ? n : Lr(n), t = n.length, r = 0; t--;) r += +n[t] || 0;
                    n = r
                } else n = Ut(n, t);
                return n
            }, Nn.template = function(n, t, r) {
                var e = Nn.templateSettings;
                r && Cr(n, t, r) && (t = r = null), n = u(n), t = tt(rt({}, r || t), e, nt), r = tt(rt({}, t.imports), e.imports, nt);
                var i, o, f = Ki(r),
                    l = Ft(r, f),
                    a = 0;
                r = t.interpolate || En;
                var s = "__p+='";
                r = Ze((t.escape || En).source + "|" + r.source + "|" + (r === vn ? An : En).source + "|" + (t.evaluate || En).source + "|$", "g");
                var p = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";
                if (n.replace(r, function(t, r, e, u, f, l) {
                        return e || (e = u), s += n.slice(a, l).replace(Cn, c), r && (i = true, s += "'+__e(" + r + ")+'"), f && (o = true, s += "';" + f + ";\n__p+='"), e && (s += "'+((__t=(" + e + "))==null?'':__t)+'"), a = l + t.length, t
                    }), s += "';", (t = t.variable) || (s = "with(obj){" + s + "}"), s = (o ? s.replace(on, "") : s).replace(fn, "$1").replace(ln, "$1;"), s = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (i ? ",__e=_.escape" : "") + (o ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + s + "return __p}", t = eo(function() {
                        return De(f, p + "return " + s).apply(m, l);
                    }), t.source = s, _e(t)) throw t;
                return t
            }, Nn.trim = Se, Nn.trimLeft = function(n, t, r) {
                var e = n;
                return (n = u(n)) ? n.slice((r ? Cr(e, t, r) : null == t) ? v(n) : i(n, t + "")) : n
            }, Nn.trimRight = function(n, t, r) {
                var e = n;
                return (n = u(n)) ? (r ? Cr(e, t, r) : null == t) ? n.slice(0, g(n) + 1) : n.slice(0, o(n, t + "") + 1) : n
            }, Nn.trunc = function(n, t, r) {
                r && Cr(n, t, r) && (t = null);
                var e = C;
                if (r = W, null != t)
                    if (ve(t)) {
                        var i = "separator" in t ? t.separator : i,
                            e = "length" in t ? +t.length || 0 : e;
                        r = "omission" in t ? u(t.omission) : r
                    } else e = +t || 0;
                if (n = u(n), e >= n.length) return n;
                if (e -= r.length,
                    1 > e) return r;
                if (t = n.slice(0, e), null == i) return t + r;
                if (de(i)) {
                    if (n.slice(e).search(i)) {
                        var o, f = n.slice(0, e);
                        for (i.global || (i = Ze(i.source, (jn.exec(i) || "") + "g")), i.lastIndex = 0; n = i.exec(f);) o = n.index;
                        t = t.slice(0, null == o ? e : o)
                    }
                } else n.indexOf(i, e) != e && (i = t.lastIndexOf(i), -1 < i && (t = t.slice(0, i)));
                return t + r
            }, Nn.unescape = function(n) {
                return (n = u(n)) && sn.test(n) ? n.replace(an, y) : n
            }, Nn.uniqueId = function(n) {
                var t = ++eu;
                return u(n) + t
            }, Nn.words = Te, Nn.all = ne, Nn.any = ie, Nn.contains = re, Nn.eq = he, Nn.detect = ai, Nn.foldl = yi,
            Nn.foldr = di, Nn.head = Dr, Nn.include = re, Nn.inject = yi, Le(Nn, function() {
                var n = {};
                return vt(Nn, function(t, r) {
                    Nn.prototype[r] || (n[r] = t)
                }), n
            }(), false), Nn.sample = ue, Nn.prototype.sample = function(n) {
                return this.__chain__ || null != n ? this.thru(function(t) {
                    return ue(t, n)
                }) : ue(this.value())
            }, Nn.VERSION = w, Kn("bind bindKey curry curryRight partial partialRight".split(" "), function(n) {
                Nn[n].placeholder = Nn
            }), Kn(["dropWhile", "filter", "map", "takeWhile"], function(n, t) {
                var r = t != F,
                    e = t == U;
                Bn.prototype[n] = function(n, u) {
                    var i = this.__filtered__,
                        o = i && e ? new Bn(this) : this.clone();
                    return (o.__iteratees__ || (o.__iteratees__ = [])).push({
                        done: false,
                        count: 0,
                        index: 0,
                        iteratee: mr(n, u, 1),
                        limit: -1,
                        type: t
                    }), o.__filtered__ = i || r, o
                }
            }), Kn(["drop", "take"], function(n, t) {
                var r = n + "While";
                Bn.prototype[n] = function(r) {
                    var e = this.__filtered__,
                        u = e && !t ? this.dropWhile() : this.clone();
                    return r = null == r ? 1 : ku(su(r) || 0, 0), e ? t ? u.__takeCount__ = Ou(u.__takeCount__, r) : Vr(u.__iteratees__).limit = r : (u.__views__ || (u.__views__ = [])).push({
                        size: r,
                        type: n + (0 > u.__dir__ ? "Right" : "")
                    }), u
                }, Bn.prototype[n + "Right"] = function(t) {
                    return this.reverse()[n](t).reverse();
                }, Bn.prototype[n + "RightWhile"] = function(n, t) {
                    return this.reverse()[r](n, t).reverse()
                }
            }), Kn(["first", "last"], function(n, t) {
                var r = "take" + (t ? "Right" : "");
                Bn.prototype[n] = function() {
                    return this[r](1).value()[0]
                }
            }), Kn(["initial", "rest"], function(n, t) {
                var r = "drop" + (t ? "" : "Right");
                Bn.prototype[n] = function() {
                    return this[r](1)
                }
            }), Kn(["pluck", "where"], function(n, t) {
                var r = t ? "filter" : "map",
                    e = t ? xt : Be;
                Bn.prototype[n] = function(n) {
                    return this[r](e(n))
                }
            }), Bn.prototype.compact = function() {
                return this.filter(Fe)
            }, Bn.prototype.reject = function(n, t) {
                return n = mr(n, t, 1), this.filter(function(t) {
                    return !n(t)
                })
            }, Bn.prototype.slice = function(n, t) {
                n = null == n ? 0 : +n || 0;
                var r = this;
                return 0 > n ? r = this.takeRight(-n) : n && (r = this.drop(n)), t !== m && (t = +t || 0, r = 0 > t ? r.dropRight(-t) : r.take(t - n)), r
            }, Bn.prototype.toArray = function() {
                return this.drop(0)
            }, vt(Bn.prototype, function(n, t) {
                var r = Nn[t];
                if (r) {
                    var e = /^(?:filter|map|reject)|While$/.test(t),
                        u = /^(?:first|last)$/.test(t);
                    Nn.prototype[t] = function() {
                        function t(n) {
                            return n = [n], _u.apply(n, i), r.apply(Nn, n)
                        }
                        var i = arguments,
                            o = this.__chain__,
                            f = this.__wrapped__,
                            l = !!this.__actions__.length,
                            a = f instanceof Bn,
                            c = i[0],
                            s = a || Ti(f);
                        return s && e && typeof c == "function" && 1 != c.length && (a = s = false), a = a && !l, u && !o ? a ? n.call(f) : r.call(Nn, this.value()) : s ? (f = n.apply(a ? f : new Bn(this), i), u || !l && !f.__actions__ || (f.__actions__ || (f.__actions__ = [])).push({
                            func: Qr,
                            args: [t],
                            thisArg: Nn
                        }), new zn(f, o)) : this.thru(t)
                    }
                }
            }), Kn("concat join pop push replace shift sort splice split unshift".split(" "), function(n) {
                var t = (/^(?:replace|split)$/.test(n) ? Qe : Xe)[n],
                    r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                    e = /^(?:join|pop|replace|shift)$/.test(n);
                Nn.prototype[n] = function() {
                    var n = arguments;
                    return e && !this.__chain__ ? t.apply(this.value(), n) : this[r](function(r) {
                        return t.apply(r, n)
                    })
                }
            }), vt(Bn.prototype, function(n, t) {
                var r = Nn[t];
                if (r) {
                    var e = r.name;
                    (Lu[e] || (Lu[e] = [])).push({
                        name: t,
                        func: r
                    })
                }
            }), Lu[sr(null, x).name] = [{
                name: "wrapper",
                func: null
            }], Bn.prototype.clone = function() {
                var n = this.__actions__,
                    t = this.__iteratees__,
                    r = this.__views__,
                    e = new Bn(this.__wrapped__);
                return e.__actions__ = n ? Dn(n) : null, e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = t ? Dn(t) : null,
                    e.__takeCount__ = this.__takeCount__, e.__views__ = r ? Dn(r) : null, e
            }, Bn.prototype.reverse = function() {
                if (this.__filtered__) {
                    var n = new Bn(this);
                    n.__dir__ = -1, n.__filtered__ = true
                } else n = this.clone(), n.__dir__ *= -1;
                return n
            }, Bn.prototype.value = function() {
                var n = this.__wrapped__.value();
                if (!Ti(n)) return Lt(n, this.__actions__);
                var t, r = this.__dir__,
                    e = 0 > r;
                t = n.length;
                for (var u = this.__views__, i = 0, o = -1, f = u ? u.length : 0; ++o < f;) {
                    var l = u[o],
                        a = l.size;
                    switch (l.type) {
                        case "drop":
                            i += a;
                            break;
                        case "dropRight":
                            t -= a;
                            break;
                        case "take":
                            t = Ou(t, i + a);
                            break;
                        case "takeRight":
                            i = ku(i, t - a)
                    }
                }
                t = {
                    start: i,
                    end: t
                }, u = t.start, i = t.end, t = i - u, u = e ? i : u - 1, i = Ou(t, this.__takeCount__), f = (o = this.__iteratees__) ? o.length : 0, l = 0, a = [];
                n: for (; t-- && l < i;) {
                    for (var u = u + r, c = -1, s = n[u]; ++c < f;) {
                        var p = o[c],
                            h = p.iteratee,
                            _ = p.type;
                        if (_ == U) {
                            if (p.done && (e ? u > p.index : u < p.index) && (p.count = 0, p.done = false), p.index = u, !(p.done || (_ = p.limit, p.done = -1 < _ ? p.count++ >= _ : !h(s)))) continue n
                        } else if (p = h(s), _ == F) s = p;
                        else if (!p) {
                            if (_ == $) continue n;
                            break n
                        }
                    }
                    a[l++] = s
                }
                return a
            }, Nn.prototype.chain = function() {
                return Hr(this)
            }, Nn.prototype.commit = function() {
                return new zn(this.value(), this.__chain__)
            }, Nn.prototype.plant = function(n) {
                for (var t, r = this; r instanceof Ln;) {
                    var e = Mr(r);
                    t ? u.__wrapped__ = e : t = e;
                    var u = e,
                        r = r.__wrapped__
                }
                return u.__wrapped__ = n, t
            }, Nn.prototype.reverse = function() {
                var n = this.__wrapped__;
                return n instanceof Bn ? (this.__actions__.length && (n = new Bn(this)), new zn(n.reverse(), this.__chain__)) : this.thru(function(n) {
                    return n.reverse()
                })
            }, Nn.prototype.toString = function() {
                return this.value() + ""
            }, Nn.prototype.run = Nn.prototype.toJSON = Nn.prototype.valueOf = Nn.prototype.value = function() {
                return Lt(this.__wrapped__, this.__actions__)
            }, Nn.prototype.collect = Nn.prototype.map, Nn.prototype.head = Nn.prototype.first, Nn.prototype.select = Nn.prototype.filter, Nn.prototype.tail = Nn.prototype.rest, Nn
    }
    var m, w = "3.9.3",
        b = 1,
        x = 2,
        A = 4,
        j = 8,
        k = 16,
        O = 32,
        R = 64,
        I = 128,
        E = 256,
        C = 30,
        W = "...",
        S = 150,
        T = 16,
        U = 0,
        $ = 1,
        F = 2,
        N = "Expected a function",
        L = "__lodash_placeholder__",
        z = "[object Arguments]",
        B = "[object Array]",
        M = "[object Boolean]",
        P = "[object Date]",
        q = "[object Error]",
        D = "[object Function]",
        K = "[object Number]",
        V = "[object Object]",
        Y = "[object RegExp]",
        Z = "[object String]",
        G = "[object ArrayBuffer]",
        J = "[object Float32Array]",
        X = "[object Float64Array]",
        H = "[object Int8Array]",
        Q = "[object Int16Array]",
        nn = "[object Int32Array]",
        tn = "[object Uint8Array]",
        rn = "[object Uint8ClampedArray]",
        en = "[object Uint16Array]",
        un = "[object Uint32Array]",
        on = /\b__p\+='';/g,
        fn = /\b(__p\+=)''\+/g,
        ln = /(__e\(.*?\)|\b__t\))\+'';/g,
        an = /&(?:amp|lt|gt|quot|#39|#96);/g,
        cn = /[&<>"'`]/g,
        sn = RegExp(an.source),
        pn = RegExp(cn.source),
        hn = /<%-([\s\S]+?)%>/g,
        _n = /<%([\s\S]+?)%>/g,
        vn = /<%=([\s\S]+?)%>/g,
        gn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
        yn = /^\w*$/,
        dn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
        mn = /[.*+?^${}()|[\]\/\\]/g,
        wn = RegExp(mn.source),
        bn = /[\u0300-\u036f\ufe20-\ufe23]/g,
        xn = /\\(\\)?/g,
        An = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        jn = /\w*$/,
        kn = /^0[xX]/,
        On = /^\[object .+?Constructor\]$/,
        Rn = /^\d+$/,
        In = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
        En = /($^)/,
        Cn = /['\n\r\u2028\u2029\\]/g,
        Wn = RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+", "g"),
        Sn = " \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",
        Tn = "Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout document isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap window".split(" "),
        Un = {};
    Un[J] = Un[X] = Un[H] = Un[Q] = Un[nn] = Un[tn] = Un[rn] = Un[en] = Un[un] = true, Un[z] = Un[B] = Un[G] = Un[M] = Un[P] = Un[q] = Un[D] = Un["[object Map]"] = Un[K] = Un[V] = Un[Y] = Un["[object Set]"] = Un[Z] = Un["[object WeakMap]"] = false;
    var $n = {};
    $n[z] = $n[B] = $n[G] = $n[M] = $n[P] = $n[J] = $n[X] = $n[H] = $n[Q] = $n[nn] = $n[K] = $n[V] = $n[Y] = $n[Z] = $n[tn] = $n[rn] = $n[en] = $n[un] = true, $n[q] = $n[D] = $n["[object Map]"] = $n["[object Set]"] = $n["[object WeakMap]"] = false;
    var Fn = {
            leading: false,
            maxWait: 0,
            trailing: false
        },
        Nn = {
            "\xc0": "A",
            "\xc1": "A",
            "\xc2": "A",
            "\xc3": "A",
            "\xc4": "A",
            "\xc5": "A",
            "\xe0": "a",
            "\xe1": "a",
            "\xe2": "a",
            "\xe3": "a",
            "\xe4": "a",
            "\xe5": "a",
            "\xc7": "C",
            "\xe7": "c",
            "\xd0": "D",
            "\xf0": "d",
            "\xc8": "E",
            "\xc9": "E",
            "\xca": "E",
            "\xcb": "E",
            "\xe8": "e",
            "\xe9": "e",
            "\xea": "e",
            "\xeb": "e",
            "\xcc": "I",
            "\xcd": "I",
            "\xce": "I",
            "\xcf": "I",
            "\xec": "i",
            "\xed": "i",
            "\xee": "i",
            "\xef": "i",
            "\xd1": "N",
            "\xf1": "n",
            "\xd2": "O",
            "\xd3": "O",
            "\xd4": "O",
            "\xd5": "O",
            "\xd6": "O",
            "\xd8": "O",
            "\xf2": "o",
            "\xf3": "o",
            "\xf4": "o",
            "\xf5": "o",
            "\xf6": "o",
            "\xf8": "o",
            "\xd9": "U",
            "\xda": "U",
            "\xdb": "U",
            "\xdc": "U",
            "\xf9": "u",
            "\xfa": "u",
            "\xfb": "u",
            "\xfc": "u",
            "\xdd": "Y",
            "\xfd": "y",
            "\xff": "y",
            "\xc6": "Ae",
            "\xe6": "ae",
            "\xde": "Th",
            "\xfe": "th",
            "\xdf": "ss"
        },
        Ln = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#96;"
        },
        zn = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#96;": "`"
        },
        Bn = {
            "function": true,
            object: true
        },
        Mn = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        Pn = Bn[typeof exports] && exports && !exports.nodeType && exports,
        qn = Bn[typeof module] && module && !module.nodeType && module,
        Dn = Bn[typeof self] && self && self.Object && self,
        Kn = Bn[typeof window] && window && window.Object && window,
        Vn = qn && qn.exports === Pn && Pn,
        Yn = Pn && qn && typeof global == "object" && global && global.Object && global || Kn !== (this && this.window) && Kn || Dn || this,
        Zn = d();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (Yn._ = Zn, define(function() {
        return Zn
    })) : Pn && qn ? Vn ? (qn.exports = Zn)._ = Zn : Pn._ = Zn : Yn._ = Zn
}).call(this);
/*
 AngularJS v1.4.11
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(z, b, A) {
    'use strict';

    function m(b) {
        return ["$animate", function(r) {
            return {
                restrict: "AE",
                transclude: "element",
                terminal: !0,
                require: "^^ngMessages",
                link: function(n, e, a, f, l) {
                    var g = e[0],
                        p, b = a.ngMessage || a.when;
                    a = a.ngMessageExp || a.whenExp;
                    var k = function(d) {
                        p = d ? w(d) ? d : d.split(/[\s,]+/) : null;
                        f.reRender()
                    };
                    a ? (k(n.$eval(a)), n.$watchCollection(a, k)) : k(b);
                    var h, q;
                    f.register(g, q = {
                        test: function(d) {
                            var a = p;
                            d = a ? w(a) ? 0 <= a.indexOf(d) : a.hasOwnProperty(d) : void 0;
                            return d
                        },
                        attach: function() {
                            h || l(n, function(d) {
                                r.enter(d,
                                    null, e);
                                h = d;
                                var a = h.$$attachId = f.getAttachId();
                                h.on("$destroy", function() {
                                    h && h.$$attachId === a && (f.deregister(g), q.detach())
                                })
                            })
                        },
                        detach: function() {
                            if (h) {
                                var d = h;
                                h = null;
                                r.leave(d)
                            }
                        }
                    })
                }
            }
        }]
    }
    var w = b.isArray,
        t = b.forEach,
        x = b.isString,
        y = b.element;
    b.module("ngMessages", []).directive("ngMessages", ["$animate", function(b) {
        function r(e, a) {
            return x(a) && 0 === a.length || n(e.$eval(a))
        }

        function n(e) {
            return x(e) ? e.length : !!e
        }
        return {
            require: "ngMessages",
            restrict: "AE",
            controller: ["$element", "$scope", "$attrs", function(e,
                a, f) {
                function l(d, a) {
                    for (var c = a, e = []; c && c !== d;) {
                        var g = c.$$ngMessageNode;
                        if (g && g.length) return k[g];
                        c.childNodes.length && -1 == e.indexOf(c) ? (e.push(c), c = c.childNodes[c.childNodes.length - 1]) : c.previousSibling ? c = c.previousSibling : (c = c.parentNode, e.push(c))
                    }
                }
                var g = this,
                    p = 0,
                    m = 0;
                this.getAttachId = function() {
                    return m++
                };
                var k = this.messages = {},
                    h, q;
                this.render = function(d) {
                    d = d || {};
                    h = !1;
                    q = d;
                    for (var k = r(a, f.ngMessagesMultiple) || r(a, f.multiple), c = [], p = {}, s = g.head, l = !1, m = 0; null != s;) {
                        m++;
                        var u = s.message,
                            v = !1;
                        l || t(d,
                            function(d, a) {
                                !v && n(d) && u.test(a) && !p[a] && (v = p[a] = !0, u.attach())
                            });
                        v ? l = !k : c.push(u);
                        s = s.next
                    }
                    t(c, function(a) {
                        a.detach()
                    });
                    c.length !== m ? b.setClass(e, "ng-active", "ng-inactive") : b.setClass(e, "ng-inactive", "ng-active")
                };
                a.$watchCollection(f.ngMessages || f["for"], g.render);
                e.on("$destroy", function() {
                    t(k, function(a) {
                        a.message.detach()
                    })
                });
                this.reRender = function() {
                    h || (h = !0, a.$evalAsync(function() {
                        h && q && g.render(q)
                    }))
                };
                this.register = function(a, h) {
                    var c = p.toString();
                    k[c] = {
                        message: h
                    };
                    var f = e[0],
                        b = k[c];
                    g.head ?
                        (f = l(f, a)) ? (b.next = f.next, f.next = b) : (b.next = g.head, g.head = b) : g.head = b;
                    a.$$ngMessageNode = c;
                    p++;
                    g.reRender()
                };
                this.deregister = function(a) {
                    var b = a.$$ngMessageNode;
                    delete a.$$ngMessageNode;
                    var c = k[b];
                    (a = l(e[0], a)) ? a.next = c.next: g.head = c.next;
                    delete k[b];
                    g.reRender()
                }
            }]
        }
    }]).directive("ngMessagesInclude", ["$templateRequest", "$document", "$compile", function(b, m, n) {
        return {
            restrict: "AE",
            require: "^^ngMessages",
            link: function(e, a, f) {
                var l = f.ngMessagesInclude || f.src;
                b(l).then(function(b) {
                    n(b)(e, function(b) {
                        a.after(b);
                        b = y(m[0].createComment(" ngMessagesInclude: " + l + " "));
                        a.after(b);
                        a.remove()
                    })
                })
            }
        }
    }]).directive("ngMessage", m("AE")).directive("ngMessageExp", m("A"))
})(window, window.angular);
//# sourceMappingURL=angular-messages.min.js.map

/*
 AngularJS v1.5.6
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(S, B) {
    'use strict';

    function Aa(a, b, c) {
        if (!a) throw Ma("areq", b || "?", c || "required");
        return a
    }

    function Ba(a, b) {
        if (!a && !b) return "";
        if (!a) return b;
        if (!b) return a;
        ca(a) && (a = a.join(" "));
        ca(b) && (b = b.join(" "));
        return a + " " + b
    }

    function Na(a) {
        var b = {};
        a && (a.to || a.from) && (b.to = a.to, b.from = a.from);
        return b
    }

    function Y(a, b, c) {
        var d = "";
        a = ca(a) ? a : a && P(a) && a.length ? a.split(/\s+/) : [];
        s(a, function(a, l) {
            a && 0 < a.length && (d += 0 < l ? " " : "", d += c ? b + a : a + b)
        });
        return d
    }

    function Oa(a) {
        if (a instanceof E) switch (a.length) {
            case 0:
                return a;
            case 1:
                if (1 === a[0].nodeType) return a;
                break;
            default:
                return E(da(a))
        }
        if (1 === a.nodeType) return E(a)
    }

    function da(a) {
        if (!a[0]) return a;
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (1 == c.nodeType) return c
        }
    }

    function Pa(a, b, c) {
        s(b, function(b) {
            a.addClass(b, c)
        })
    }

    function Qa(a, b, c) {
        s(b, function(b) {
            a.removeClass(b, c)
        })
    }

    function V(a) {
        return function(b, c) {
            c.addClass && (Pa(a, b, c.addClass), c.addClass = null);
            c.removeClass && (Qa(a, b, c.removeClass), c.removeClass = null)
        }
    }

    function pa(a) {
        a = a || {};
        if (!a.$$prepared) {
            var b = a.domOperation ||
                R;
            a.domOperation = function() {
                a.$$domOperationFired = !0;
                b();
                b = R
            };
            a.$$prepared = !0
        }
        return a
    }

    function ha(a, b) {
        Ca(a, b);
        Da(a, b)
    }

    function Ca(a, b) {
        b.from && (a.css(b.from), b.from = null)
    }

    function Da(a, b) {
        b.to && (a.css(b.to), b.to = null)
    }

    function W(a, b, c) {
        var d = b.options || {};
        c = c.options || {};
        var e = (d.addClass || "") + " " + (c.addClass || ""),
            l = (d.removeClass || "") + " " + (c.removeClass || "");
        a = Ra(a.attr("class"), e, l);
        c.preparationClasses && (d.preparationClasses = Z(c.preparationClasses, d.preparationClasses), delete c.preparationClasses);
        e = d.domOperation !== R ? d.domOperation : null;
        Ea(d, c);
        e && (d.domOperation = e);
        d.addClass = a.addClass ? a.addClass : null;
        d.removeClass = a.removeClass ? a.removeClass : null;
        b.addClass = d.addClass;
        b.removeClass = d.removeClass;
        return d
    }

    function Ra(a, b, c) {
        function d(a) {
            P(a) && (a = a.split(" "));
            var b = {};
            s(a, function(a) {
                a.length && (b[a] = !0)
            });
            return b
        }
        var e = {};
        a = d(a);
        b = d(b);
        s(b, function(a, b) {
            e[b] = 1
        });
        c = d(c);
        s(c, function(a, b) {
            e[b] = 1 === e[b] ? null : -1
        });
        var l = {
            addClass: "",
            removeClass: ""
        };
        s(e, function(b, c) {
            var d, e;
            1 === b ? (d = "addClass",
                e = !a[c]) : -1 === b && (d = "removeClass", e = a[c]);
            e && (l[d].length && (l[d] += " "), l[d] += c)
        });
        return l
    }

    function z(a) {
        return a instanceof B.element ? a[0] : a
    }

    function Sa(a, b, c) {
        var d = "";
        b && (d = Y(b, "ng-", !0));
        c.addClass && (d = Z(d, Y(c.addClass, "-add")));
        c.removeClass && (d = Z(d, Y(c.removeClass, "-remove")));
        d.length && (c.preparationClasses = d, a.addClass(d))
    }

    function qa(a, b) {
        var c = b ? "-" + b + "s" : "";
        la(a, [ma, c]);
        return [ma, c]
    }

    function ta(a, b) {
        var c = b ? "paused" : "",
            d = $ + "PlayState";
        la(a, [d, c]);
        return [d, c]
    }

    function la(a, b) {
        a.style[b[0]] =
            b[1]
    }

    function Z(a, b) {
        return a ? b ? a + " " + b : a : b
    }

    function Fa(a, b, c) {
        var d = Object.create(null),
            e = a.getComputedStyle(b) || {};
        s(c, function(a, b) {
            var c = e[a];
            if (c) {
                var k = c.charAt(0);
                if ("-" === k || "+" === k || 0 <= k) c = Ta(c);
                0 === c && (c = null);
                d[b] = c
            }
        });
        return d
    }

    function Ta(a) {
        var b = 0;
        a = a.split(/\s*,\s*/);
        s(a, function(a) {
            "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1));
            a = parseFloat(a) || 0;
            b = b ? Math.max(a, b) : a
        });
        return b
    }

    function ua(a) {
        return 0 === a || null != a
    }

    function Ga(a, b) {
        var c = T,
            d = a + "s";
        b ? c += "Duration" : d += " linear all";
        return [c, d]
    }

    function Ha() {
        var a = Object.create(null);
        return {
            flush: function() {
                a = Object.create(null)
            },
            count: function(b) {
                return (b = a[b]) ? b.total : 0
            },
            get: function(b) {
                return (b = a[b]) && b.value
            },
            put: function(b, c) {
                a[b] ? a[b].total++ : a[b] = {
                    total: 1,
                    value: c
                }
            }
        }
    }

    function Ia(a, b, c) {
        s(c, function(c) {
            a[c] = ea(a[c]) ? a[c] : b.style.getPropertyValue(c)
        })
    }
    var R = B.noop,
        Ja = B.copy,
        Ea = B.extend,
        E = B.element,
        s = B.forEach,
        ca = B.isArray,
        P = B.isString,
        va = B.isObject,
        O = B.isUndefined,
        ea = B.isDefined,
        Ka = B.isFunction,
        wa = B.isElement,
        T, xa, $, ya;
    O(S.ontransitionend) &&
        ea(S.onwebkittransitionend) ? (T = "WebkitTransition", xa = "webkitTransitionEnd transitionend") : (T = "transition", xa = "transitionend");
    O(S.onanimationend) && ea(S.onwebkitanimationend) ? ($ = "WebkitAnimation", ya = "webkitAnimationEnd animationend") : ($ = "animation", ya = "animationend");
    var ra = $ + "Delay",
        za = $ + "Duration",
        ma = T + "Delay",
        La = T + "Duration",
        Ma = B.$$minErr("ng"),
        Ua = {
            transitionDuration: La,
            transitionDelay: ma,
            transitionProperty: T + "Property",
            animationDuration: za,
            animationDelay: ra,
            animationIterationCount: $ + "IterationCount"
        },
        Va = {
            transitionDuration: La,
            transitionDelay: ma,
            animationDuration: za,
            animationDelay: ra
        };
    B.module("ngAnimate", []).directive("ngAnimateSwap", ["$animate", "$rootScope", function(a, b) {
        return {
            restrict: "A",
            transclude: "element",
            terminal: !0,
            priority: 600,
            link: function(b, d, e, l, m) {
                var I, k;
                b.$watchCollection(e.ngAnimateSwap || e["for"], function(e) {
                    I && a.leave(I);
                    k && (k.$destroy(), k = null);
                    if (e || 0 === e) k = b.$new(), m(k, function(b) {
                        I = b;
                        a.enter(b, null, d)
                    })
                })
            }
        }
    }]).directive("ngAnimateChildren", ["$interpolate", function(a) {
        return {
            link: function(b,
                c, d) {
                function e(a) {
                    c.data("$$ngAnimateChildren", "on" === a || "true" === a)
                }
                var l = d.ngAnimateChildren;
                B.isString(l) && 0 === l.length ? c.data("$$ngAnimateChildren", !0) : (e(a(l)(b)), d.$observe("ngAnimateChildren", e))
            }
        }
    }]).factory("$$rAFScheduler", ["$$rAF", function(a) {
        function b(a) {
            d = d.concat(a);
            c()
        }

        function c() {
            if (d.length) {
                for (var b = d.shift(), m = 0; m < b.length; m++) b[m]();
                e || a(function() {
                    e || c()
                })
            }
        }
        var d, e;
        d = b.queue = [];
        b.waitUntilQuiet = function(b) {
            e && e();
            e = a(function() {
                e = null;
                b();
                c()
            })
        };
        return b
    }]).provider("$$animateQueue", ["$animateProvider", function(a) {
        function b(a) {
            if (!a) return null;
            a = a.split(" ");
            var b = Object.create(null);
            s(a, function(a) {
                b[a] = !0
            });
            return b
        }

        function c(a, c) {
            if (a && c) {
                var d = b(c);
                return a.split(" ").some(function(a) {
                    return d[a]
                })
            }
        }

        function d(a, b, c, d) {
            return l[a].some(function(a) {
                return a(b, c, d)
            })
        }

        function e(a, b) {
            var c = 0 < (a.addClass || "").length,
                d = 0 < (a.removeClass || "").length;
            return b ? c && d : c || d
        }
        var l = this.rules = {
            skip: [],
            cancel: [],
            join: []
        };
        l.join.push(function(a, b, c) {
            return !b.structural && e(b)
        });
        l.skip.push(function(a,
            b, c) {
            return !b.structural && !e(b)
        });
        l.skip.push(function(a, b, c) {
            return "leave" == c.event && b.structural
        });
        l.skip.push(function(a, b, c) {
            return c.structural && 2 === c.state && !b.structural
        });
        l.cancel.push(function(a, b, c) {
            return c.structural && b.structural
        });
        l.cancel.push(function(a, b, c) {
            return 2 === c.state && b.structural
        });
        l.cancel.push(function(a, b, d) {
            if (d.structural) return !1;
            a = b.addClass;
            b = b.removeClass;
            var e = d.addClass;
            d = d.removeClass;
            return O(a) && O(b) || O(e) && O(d) ? !1 : c(a, d) || c(b, e)
        });
        this.$get = ["$$rAF", "$rootScope",
            "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow",
            function(b, c, k, l, w, Wa, Q, u, F, n) {
                function K() {
                    var a = !1;
                    return function(b) {
                        a ? b() : c.$$postDigest(function() {
                            a = !0;
                            b()
                        })
                    }
                }

                function J(a, b, c) {
                    var f = z(b),
                        d = z(a),
                        L = [];
                    (a = h[c]) && s(a, function(a) {
                        y.call(a.node, f) ? L.push(a.callback) : "leave" === c && y.call(a.node, d) && L.push(a.callback)
                    });
                    return L
                }

                function r(a, b, c) {
                    var f = da(b);
                    return a.filter(function(a) {
                        return !(a.node === f && (!c || a.callback === c))
                    })
                }

                function t(a,
                    h, x) {
                    function r(c, f, d, h) {
                        H(function() {
                            var c = J(oa, a, f);
                            c.length ? b(function() {
                                s(c, function(b) {
                                    b(a, d, h)
                                });
                                "close" !== d || a[0].parentNode || sa.off(a)
                            }) : "close" !== d || a[0].parentNode || sa.off(a)
                        });
                        c.progress(f, d, h)
                    }

                    function g(b) {
                        var c = a,
                            f = p;
                        f.preparationClasses && (c.removeClass(f.preparationClasses), f.preparationClasses = null);
                        f.activeClasses && (c.removeClass(f.activeClasses), f.activeClasses = null);
                        D(a, p);
                        ha(a, p);
                        p.domOperation();
                        n.complete(!b)
                    }
                    var p = Ja(x),
                        t, oa;
                    if (a = Oa(a)) t = z(a), oa = a.parent();
                    var p = pa(p),
                        n = new Q,
                        H = K();
                    ca(p.addClass) && (p.addClass = p.addClass.join(" "));
                    p.addClass && !P(p.addClass) && (p.addClass = null);
                    ca(p.removeClass) && (p.removeClass = p.removeClass.join(" "));
                    p.removeClass && !P(p.removeClass) && (p.removeClass = null);
                    p.from && !va(p.from) && (p.from = null);
                    p.to && !va(p.to) && (p.to = null);
                    if (!t) return g(), n;
                    x = [t.className, p.addClass, p.removeClass].join(" ");
                    if (!Xa(x)) return g(), n;
                    var k = 0 <= ["enter", "move", "leave"].indexOf(h),
                        y = l[0].hidden,
                        u = !f || y || L.get(t);
                    x = !u && A.get(t) || {};
                    var F = !!x.state;
                    u || F && 1 == x.state ||
                        (u = !N(a, oa, h));
                    if (u) return y && r(n, h, "start"), g(), y && r(n, h, "close"), n;
                    k && M(a);
                    y = {
                        structural: k,
                        element: a,
                        event: h,
                        addClass: p.addClass,
                        removeClass: p.removeClass,
                        close: g,
                        options: p,
                        runner: n
                    };
                    if (F) {
                        if (d("skip", a, y, x)) {
                            if (2 === x.state) return g(), n;
                            W(a, x, y);
                            return x.runner
                        }
                        if (d("cancel", a, y, x))
                            if (2 === x.state) x.runner.end();
                            else if (x.structural) x.close();
                        else return W(a, x, y), x.runner;
                        else if (d("join", a, y, x))
                            if (2 === x.state) W(a, y, {});
                            else return Sa(a, k ? h : null, p), h = y.event = x.event, p = W(a, x, y), x.runner
                    } else W(a,
                        y, {});
                    (F = y.structural) || (F = "animate" === y.event && 0 < Object.keys(y.options.to || {}).length || e(y));
                    if (!F) return g(), ka(a), n;
                    var w = (x.counter || 0) + 1;
                    y.counter = w;
                    G(a, 1, y);
                    c.$$postDigest(function() {
                        var b = A.get(t),
                            c = !b,
                            b = b || {},
                            f = 0 < (a.parent() || []).length && ("animate" === b.event || b.structural || e(b));
                        if (c || b.counter !== w || !f) {
                            c && (D(a, p), ha(a, p));
                            if (c || k && b.event !== h) p.domOperation(), n.end();
                            f || ka(a)
                        } else h = !b.structural && e(b, !0) ? "setClass" : b.event, G(a, 2), b = Wa(a, h, b.options), n.setHost(b), r(n, h, "start", {}), b.done(function(b) {
                            g(!b);
                            (b = A.get(t)) && b.counter === w && ka(z(a));
                            r(n, h, "close", {})
                        })
                    });
                    return n
                }

                function M(a) {
                    a = z(a).querySelectorAll("[data-ng-animate]");
                    s(a, function(a) {
                        var b = parseInt(a.getAttribute("data-ng-animate")),
                            c = A.get(a);
                        if (c) switch (b) {
                            case 2:
                                c.runner.end();
                            case 1:
                                A.remove(a)
                        }
                    })
                }

                function ka(a) {
                    a = z(a);
                    a.removeAttribute("data-ng-animate");
                    A.remove(a)
                }

                function g(a, b) {
                    return z(a) === z(b)
                }

                function N(a, b, c) {
                    c = E(l[0].body);
                    var f = g(a, c) || "HTML" === a[0].nodeName,
                        d = g(a, k),
                        h = !1,
                        r, e = L.get(z(a));
                    (a = E.data(a[0], "$ngAnimatePin")) &&
                    (b = a);
                    for (b = z(b); b;) {
                        d || (d = g(b, k));
                        if (1 !== b.nodeType) break;
                        a = A.get(b) || {};
                        if (!h) {
                            var n = L.get(b);
                            if (!0 === n && !1 !== e) {
                                e = !0;
                                break
                            } else !1 === n && (e = !1);
                            h = a.structural
                        }
                        if (O(r) || !0 === r) a = E.data(b, "$$ngAnimateChildren"), ea(a) && (r = a);
                        if (h && !1 === r) break;
                        f || (f = g(b, c));
                        if (f && d) break;
                        if (!d && (a = E.data(b, "$ngAnimatePin"))) {
                            b = z(a);
                            continue
                        }
                        b = b.parentNode
                    }
                    return (!h || r) && !0 !== e && d && f
                }

                function G(a, b, c) {
                    c = c || {};
                    c.state = b;
                    a = z(a);
                    a.setAttribute("data-ng-animate", b);
                    c = (b = A.get(a)) ? Ea(b, c) : c;
                    A.put(a, c)
                }
                var A = new w,
                    L = new w,
                    f = null,
                    oa = c.$watch(function() {
                        return 0 === u.totalPendingRequests
                    }, function(a) {
                        a && (oa(), c.$$postDigest(function() {
                            c.$$postDigest(function() {
                                null === f && (f = !0)
                            })
                        }))
                    }),
                    h = {},
                    H = a.classNameFilter(),
                    Xa = H ? function(a) {
                        return H.test(a)
                    } : function() {
                        return !0
                    },
                    D = V(F),
                    y = S.Node.prototype.contains || function(a) {
                        return this === a || !!(this.compareDocumentPosition(a) & 16)
                    },
                    sa = {
                        on: function(a, b, c) {
                            var f = da(b);
                            h[a] = h[a] || [];
                            h[a].push({
                                node: f,
                                callback: c
                            });
                            E(b).on("$destroy", function() {
                                A.get(f) || sa.off(a, b, c)
                            })
                        },
                        off: function(a,
                            b, c) {
                            if (1 !== arguments.length || B.isString(arguments[0])) {
                                var f = h[a];
                                f && (h[a] = 1 === arguments.length ? null : r(f, b, c))
                            } else
                                for (f in b = arguments[0], h) h[f] = r(h[f], b)
                        },
                        pin: function(a, b) {
                            Aa(wa(a), "element", "not an element");
                            Aa(wa(b), "parentElement", "not an element");
                            a.data("$ngAnimatePin", b)
                        },
                        push: function(a, b, c, f) {
                            c = c || {};
                            c.domOperation = f;
                            return t(a, b, c)
                        },
                        enabled: function(a, b) {
                            var c = arguments.length;
                            if (0 === c) b = !!f;
                            else if (wa(a)) {
                                var d = z(a),
                                    h = L.get(d);
                                1 === c ? b = !h : L.put(d, !b)
                            } else b = f = !!a;
                            return b
                        }
                    };
                return sa
            }
        ]
    }]).provider("$$animation", ["$animateProvider", function(a) {
        var b = this.drivers = [];
        this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function(a, d, e, l, m, I) {
            function k(a) {
                function b(a) {
                    if (a.processed) return a;
                    a.processed = !0;
                    var d = a.domNode,
                        t = d.parentNode;
                    e.put(d, a);
                    for (var M; t;) {
                        if (M = e.get(t)) {
                            M.processed || (M = b(M));
                            break
                        }
                        t = t.parentNode
                    }(M || c).children.push(a);
                    return a
                }
                var c = {
                        children: []
                    },
                    d, e = new m;
                for (d = 0; d < a.length; d++) {
                    var k = a[d];
                    e.put(k.domNode, a[d] = {
                        domNode: k.domNode,
                        fn: k.fn,
                        children: []
                    })
                }
                for (d =
                    0; d < a.length; d++) b(a[d]);
                return function(a) {
                    var b = [],
                        c = [],
                        d;
                    for (d = 0; d < a.children.length; d++) c.push(a.children[d]);
                    a = c.length;
                    var e = 0,
                        g = [];
                    for (d = 0; d < c.length; d++) {
                        var n = c[d];
                        0 >= a && (a = e, e = 0, b.push(g), g = []);
                        g.push(n.fn);
                        n.children.forEach(function(a) {
                            e++;
                            c.push(a)
                        });
                        a--
                    }
                    g.length && b.push(g);
                    return b
                }(c)
            }
            var v = [],
                w = V(a);
            return function(m, Q, u) {
                function F(a) {
                    a = a.hasAttribute("ng-animate-ref") ? [a] : a.querySelectorAll("[ng-animate-ref]");
                    var b = [];
                    s(a, function(a) {
                        var c = a.getAttribute("ng-animate-ref");
                        c && c.length &&
                            b.push(a)
                    });
                    return b
                }

                function n(a) {
                    var b = [],
                        c = {};
                    s(a, function(a, d) {
                        var h = z(a.element),
                            e = 0 <= ["enter", "move"].indexOf(a.event),
                            h = a.structural ? F(h) : [];
                        if (h.length) {
                            var g = e ? "to" : "from";
                            s(h, function(a) {
                                var b = a.getAttribute("ng-animate-ref");
                                c[b] = c[b] || {};
                                c[b][g] = {
                                    animationID: d,
                                    element: E(a)
                                }
                            })
                        } else b.push(a)
                    });
                    var d = {},
                        e = {};
                    s(c, function(c, g) {
                        var r = c.from,
                            n = c.to;
                        if (r && n) {
                            var A = a[r.animationID],
                                t = a[n.animationID],
                                m = r.animationID.toString();
                            if (!e[m]) {
                                var k = e[m] = {
                                    structural: !0,
                                    beforeStart: function() {
                                        A.beforeStart();
                                        t.beforeStart()
                                    },
                                    close: function() {
                                        A.close();
                                        t.close()
                                    },
                                    classes: K(A.classes, t.classes),
                                    from: A,
                                    to: t,
                                    anchors: []
                                };
                                k.classes.length ? b.push(k) : (b.push(A), b.push(t))
                            }
                            e[m].anchors.push({
                                out: r.element,
                                "in": n.element
                            })
                        } else r = r ? r.animationID : n.animationID, n = r.toString(), d[n] || (d[n] = !0, b.push(a[r]))
                    });
                    return b
                }

                function K(a, b) {
                    a = a.split(" ");
                    b = b.split(" ");
                    for (var c = [], d = 0; d < a.length; d++) {
                        var e = a[d];
                        if ("ng-" !== e.substring(0, 3))
                            for (var r = 0; r < b.length; r++)
                                if (e === b[r]) {
                                    c.push(e);
                                    break
                                }
                    }
                    return c.join(" ")
                }

                function J(a) {
                    for (var c =
                            b.length - 1; 0 <= c; c--) {
                        var d = b[c];
                        if (e.has(d) && (d = e.get(d)(a))) return d
                    }
                }

                function r(a, b) {
                    function c(a) {
                        (a = a.data("$$animationRunner")) && a.setHost(b)
                    }
                    a.from && a.to ? (c(a.from.element), c(a.to.element)) : c(a.element)
                }

                function t() {
                    var a = m.data("$$animationRunner");
                    !a || "leave" === Q && u.$$domOperationFired || a.end()
                }

                function M(b) {
                    m.off("$destroy", t);
                    m.removeData("$$animationRunner");
                    w(m, u);
                    ha(m, u);
                    u.domOperation();
                    G && a.removeClass(m, G);
                    m.removeClass("ng-animate");
                    g.complete(!b)
                }
                u = pa(u);
                var ka = 0 <= ["enter", "move",
                        "leave"
                    ].indexOf(Q),
                    g = new l({
                        end: function() {
                            M()
                        },
                        cancel: function() {
                            M(!0)
                        }
                    });
                if (!b.length) return M(), g;
                m.data("$$animationRunner", g);
                var N = Ba(m.attr("class"), Ba(u.addClass, u.removeClass)),
                    G = u.tempClasses;
                G && (N += " " + G, u.tempClasses = null);
                var A;
                ka && (A = "ng-" + Q + "-prepare", a.addClass(m, A));
                v.push({
                    element: m,
                    classes: N,
                    event: Q,
                    structural: ka,
                    options: u,
                    beforeStart: function() {
                        m.addClass("ng-animate");
                        G && a.addClass(m, G);
                        A && (a.removeClass(m, A), A = null)
                    },
                    close: M
                });
                m.on("$destroy", t);
                if (1 < v.length) return g;
                d.$$postDigest(function() {
                    var a = [];
                    s(v, function(b) {
                        b.element.data("$$animationRunner") ? a.push(b) : b.close()
                    });
                    v.length = 0;
                    var b = n(a),
                        c = [];
                    s(b, function(a) {
                        c.push({
                            domNode: z(a.from ? a.from.element : a.element),
                            fn: function() {
                                a.beforeStart();
                                var b, c = a.close;
                                if ((a.anchors ? a.from.element || a.to.element : a.element).data("$$animationRunner")) {
                                    var d = J(a);
                                    d && (b = d.start)
                                }
                                b ? (b = b(), b.done(function(a) {
                                    c(!a)
                                }), r(a, b)) : c()
                            }
                        })
                    });
                    I(k(c))
                });
                return g
            }
        }]
    }]).provider("$animateCss", ["$animateProvider", function(a) {
        var b = Ha(),
            c = Ha();
        this.$get = ["$window", "$$jqLite",
            "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue",
            function(a, e, l, m, I, k, v, w) {
                function B(a, b) {
                    var c = a.parentNode;
                    return (c.$$ngAnimateParentKey || (c.$$ngAnimateParentKey = ++K)) + "-" + a.getAttribute("class") + "-" + b
                }

                function Q(r, n, m, k) {
                    var g;
                    0 < b.count(m) && (g = c.get(m), g || (n = Y(n, "-stagger"), e.addClass(r, n), g = Fa(a, r, k), g.animationDuration = Math.max(g.animationDuration, 0), g.transitionDuration = Math.max(g.transitionDuration, 0), e.removeClass(r, n), c.put(m, g)));
                    return g || {}
                }

                function u(a) {
                    J.push(a);
                    v.waitUntilQuiet(function() {
                        b.flush();
                        c.flush();
                        for (var a = I(), d = 0; d < J.length; d++) J[d](a);
                        J.length = 0
                    })
                }

                function F(c, e, n) {
                    e = b.get(n);
                    e || (e = Fa(a, c, Ua), "infinite" === e.animationIterationCount && (e.animationIterationCount = 1));
                    b.put(n, e);
                    c = e;
                    n = c.animationDelay;
                    e = c.transitionDelay;
                    c.maxDelay = n && e ? Math.max(n, e) : n || e;
                    c.maxDuration = Math.max(c.animationDuration * c.animationIterationCount, c.transitionDuration);
                    return c
                }
                var n = V(e),
                    K = 0,
                    J = [];
                return function(a, c) {
                    function d() {
                        g()
                    }

                    function v() {
                        g(!0)
                    }

                    function g(b) {
                        if (!(y ||
                                E && K)) {
                            y = !0;
                            K = !1;
                            f.$$skipPreparationClasses || e.removeClass(a, ga);
                            e.removeClass(a, ea);
                            ta(h, !1);
                            qa(h, !1);
                            s(H, function(a) {
                                h.style[a[0]] = ""
                            });
                            n(a, f);
                            ha(a, f);
                            Object.keys(J).length && s(J, function(a, b) {
                                a ? h.style.setProperty(b, a) : h.style.removeProperty(b)
                            });
                            if (f.onDone) f.onDone();
                            fa && fa.length && a.off(fa.join(" "), A);
                            var c = a.data("$$animateCss");
                            c && (m.cancel(c[0].timer), a.removeData("$$animateCss"));
                            O && O.complete(!b)
                        }
                    }

                    function N(a) {
                        q.blockTransition && qa(h, a);
                        q.blockKeyframeAnimation && ta(h, !!a)
                    }

                    function G() {
                        O =
                            new l({
                                end: d,
                                cancel: v
                            });
                        u(R);
                        g();
                        return {
                            $$willAnimate: !1,
                            start: function() {
                                return O
                            },
                            end: d
                        }
                    }

                    function A(a) {
                        a.stopPropagation();
                        var b = a.originalEvent || a;
                        a = b.$manualTimeStamp || Date.now();
                        b = parseFloat(b.elapsedTime.toFixed(3));
                        Math.max(a - W, 0) >= S && b >= p && (E = !0, g())
                    }

                    function L() {
                        function b() {
                            if (!y) {
                                N(!1);
                                s(H, function(a) {
                                    h.style[a[0]] = a[1]
                                });
                                n(a, f);
                                e.addClass(a, ea);
                                if (q.recalculateTimingStyles) {
                                    na = h.className + " " + ga;
                                    ia = B(h, na);
                                    C = F(h, na, ia);
                                    aa = C.maxDelay;
                                    P = Math.max(aa, 0);
                                    p = C.maxDuration;
                                    if (0 === p) {
                                        g();
                                        return
                                    }
                                    q.hasTransitions =
                                        0 < C.transitionDuration;
                                    q.hasAnimations = 0 < C.animationDuration
                                }
                                q.applyAnimationDelay && (aa = "boolean" !== typeof f.delay && ua(f.delay) ? parseFloat(f.delay) : aa, P = Math.max(aa, 0), C.animationDelay = aa, ba = [ra, aa + "s"], H.push(ba), h.style[ba[0]] = ba[1]);
                                S = 1E3 * P;
                                V = 1E3 * p;
                                if (f.easing) {
                                    var d, k = f.easing;
                                    q.hasTransitions && (d = T + "TimingFunction", H.push([d, k]), h.style[d] = k);
                                    q.hasAnimations && (d = $ + "TimingFunction", H.push([d, k]), h.style[d] = k)
                                }
                                C.transitionDuration && fa.push(xa);
                                C.animationDuration && fa.push(ya);
                                W = Date.now();
                                var L =
                                    S + 1.5 * V;
                                d = W + L;
                                var k = a.data("$$animateCss") || [],
                                    l = !0;
                                if (k.length) {
                                    var G = k[0];
                                    (l = d > G.expectedEndTime) ? m.cancel(G.timer): k.push(g)
                                }
                                l && (L = m(c, L, !1), k[0] = {
                                    timer: L,
                                    expectedEndTime: d
                                }, k.push(g), a.data("$$animateCss", k));
                                if (fa.length) a.on(fa.join(" "), A);
                                f.to && (f.cleanupStyles && Ia(J, h, Object.keys(f.to)), Da(a, f))
                            }
                        }

                        function c() {
                            var b = a.data("$$animateCss");
                            if (b) {
                                for (var d = 1; d < b.length; d++) b[d]();
                                a.removeData("$$animateCss")
                            }
                        }
                        if (!y)
                            if (h.parentNode) {
                                var d = function(a) {
                                        if (E) K && a && (K = !1, g());
                                        else if (K = !a, C.animationDuration)
                                            if (a =
                                                ta(h, K), K) H.push(a);
                                            else {
                                                var b = H,
                                                    c = b.indexOf(a);
                                                0 <= a && b.splice(c, 1)
                                            }
                                    },
                                    k = 0 < da && (C.transitionDuration && 0 === X.transitionDuration || C.animationDuration && 0 === X.animationDuration) && Math.max(X.animationDelay, X.transitionDelay);
                                k ? m(b, Math.floor(k * da * 1E3), !1) : b();
                                x.resume = function() {
                                    d(!0)
                                };
                                x.pause = function() {
                                    d(!1)
                                }
                            } else g()
                    }
                    var f = c || {};
                    f.$$prepared || (f = pa(Ja(f)));
                    var J = {},
                        h = z(a);
                    if (!h || !h.parentNode || !w.enabled()) return G();
                    var H = [],
                        I = a.attr("class"),
                        D = Na(f),
                        y, K, E, O, x, P, S, p, V, W, fa = [];
                    if (0 === f.duration || !k.animations &&
                        !k.transitions) return G();
                    var ja = f.event && ca(f.event) ? f.event.join(" ") : f.event,
                        Z = "",
                        U = "";
                    ja && f.structural ? Z = Y(ja, "ng-", !0) : ja && (Z = ja);
                    f.addClass && (U += Y(f.addClass, "-add"));
                    f.removeClass && (U.length && (U += " "), U += Y(f.removeClass, "-remove"));
                    f.applyClassesEarly && U.length && n(a, f);
                    var ga = [Z, U].join(" ").trim(),
                        na = I + " " + ga,
                        ea = Y(ga, "-active"),
                        I = D.to && 0 < Object.keys(D.to).length;
                    if (!(0 < (f.keyframeStyle || "").length || I || ga)) return G();
                    var ia, X;
                    0 < f.stagger ? (D = parseFloat(f.stagger), X = {
                        transitionDelay: D,
                        animationDelay: D,
                        transitionDuration: 0,
                        animationDuration: 0
                    }) : (ia = B(h, na), X = Q(h, ga, ia, Va));
                    f.$$skipPreparationClasses || e.addClass(a, ga);
                    f.transitionStyle && (D = [T, f.transitionStyle], la(h, D), H.push(D));
                    0 <= f.duration && (D = 0 < h.style[T].length, D = Ga(f.duration, D), la(h, D), H.push(D));
                    f.keyframeStyle && (D = [$, f.keyframeStyle], la(h, D), H.push(D));
                    var da = X ? 0 <= f.staggerIndex ? f.staggerIndex : b.count(ia) : 0;
                    (ja = 0 === da) && !f.skipBlocking && qa(h, 9999);
                    var C = F(h, na, ia),
                        aa = C.maxDelay;
                    P = Math.max(aa, 0);
                    p = C.maxDuration;
                    var q = {};
                    q.hasTransitions =
                        0 < C.transitionDuration;
                    q.hasAnimations = 0 < C.animationDuration;
                    q.hasTransitionAll = q.hasTransitions && "all" == C.transitionProperty;
                    q.applyTransitionDuration = I && (q.hasTransitions && !q.hasTransitionAll || q.hasAnimations && !q.hasTransitions);
                    q.applyAnimationDuration = f.duration && q.hasAnimations;
                    q.applyTransitionDelay = ua(f.delay) && (q.applyTransitionDuration || q.hasTransitions);
                    q.applyAnimationDelay = ua(f.delay) && q.hasAnimations;
                    q.recalculateTimingStyles = 0 < U.length;
                    if (q.applyTransitionDuration || q.applyAnimationDuration) p =
                        f.duration ? parseFloat(f.duration) : p, q.applyTransitionDuration && (q.hasTransitions = !0, C.transitionDuration = p, D = 0 < h.style[T + "Property"].length, H.push(Ga(p, D))), q.applyAnimationDuration && (q.hasAnimations = !0, C.animationDuration = p, H.push([za, p + "s"]));
                    if (0 === p && !q.recalculateTimingStyles) return G();
                    if (null != f.delay) {
                        var ba;
                        "boolean" !== typeof f.delay && (ba = parseFloat(f.delay), P = Math.max(ba, 0));
                        q.applyTransitionDelay && H.push([ma, ba + "s"]);
                        q.applyAnimationDelay && H.push([ra, ba + "s"])
                    }
                    null == f.duration && 0 < C.transitionDuration &&
                        (q.recalculateTimingStyles = q.recalculateTimingStyles || ja);
                    S = 1E3 * P;
                    V = 1E3 * p;
                    f.skipBlocking || (q.blockTransition = 0 < C.transitionDuration, q.blockKeyframeAnimation = 0 < C.animationDuration && 0 < X.animationDelay && 0 === X.animationDuration);
                    f.from && (f.cleanupStyles && Ia(J, h, Object.keys(f.from)), Ca(a, f));
                    q.blockTransition || q.blockKeyframeAnimation ? N(p) : f.skipBlocking || qa(h, !1);
                    return {
                        $$willAnimate: !0,
                        end: d,
                        start: function() {
                            if (!y) return x = {
                                end: d,
                                cancel: v,
                                resume: null,
                                pause: null
                            }, O = new l(x), u(L), O
                        }
                    }
                }
            }
        ]
    }]).provider("$$animateCssDriver", ["$$animationProvider", function(a) {
        a.drivers.push("$$animateCssDriver");
        this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function(a, c, d, e, l, m, I) {
            function k(a) {
                return a.replace(/\bng-\S+\b/g, "")
            }

            function v(a, b) {
                P(a) && (a = a.split(" "));
                P(b) && (b = b.split(" "));
                return a.filter(function(a) {
                    return -1 === b.indexOf(a)
                }).join(" ")
            }

            function w(c, e, m) {
                function l(a) {
                    var b = {},
                        c = z(a).getBoundingClientRect();
                    s(["width", "height", "top", "left"], function(a) {
                        var d = c[a];
                        switch (a) {
                            case "top":
                                d += u.scrollTop;
                                break;
                            case "left":
                                d += u.scrollLeft
                        }
                        b[a] = Math.floor(d) + "px"
                    });
                    return b
                }

                function t() {
                    var c = k(m.attr("class") || ""),
                        d = v(c, g),
                        c = v(g, c),
                        d = a(w, {
                            to: l(m),
                            addClass: "ng-anchor-in " + d,
                            removeClass: "ng-anchor-out " + c,
                            delay: !0
                        });
                    return d.$$willAnimate ? d : null
                }

                function I() {
                    w.remove();
                    e.removeClass("ng-animate-shim");
                    m.removeClass("ng-animate-shim")
                }
                var w = E(z(e).cloneNode(!0)),
                    g = k(w.attr("class") || "");
                e.addClass("ng-animate-shim");
                m.addClass("ng-animate-shim");
                w.addClass("ng-anchor");
                F.append(w);
                var N;
                c = function() {
                    var c = a(w, {
                        addClass: "ng-anchor-out",
                        delay: !0,
                        from: l(e)
                    });
                    return c.$$willAnimate ? c : null
                }();
                if (!c && (N = t(), !N)) return I();
                var G = c || N;
                return {
                    start: function() {
                        function a() {
                            c && c.end()
                        }
                        var b, c = G.start();
                        c.done(function() {
                            c = null;
                            if (!N && (N = t())) return c = N.start(), c.done(function() {
                                c = null;
                                I();
                                b.complete()
                            }), c;
                            I();
                            b.complete()
                        });
                        return b = new d({
                            end: a,
                            cancel: a
                        })
                    }
                }
            }

            function B(a, b, c, e) {
                var k = Q(a, R),
                    m = Q(b, R),
                    l = [];
                s(e, function(a) {
                    (a = w(c, a.out, a["in"])) && l.push(a)
                });
                if (k || m || 0 !== l.length) return {
                    start: function() {
                        function a() {
                            s(b,
                                function(a) {
                                    a.end()
                                })
                        }
                        var b = [];
                        k && b.push(k.start());
                        m && b.push(m.start());
                        s(l, function(a) {
                            b.push(a.start())
                        });
                        var c = new d({
                            end: a,
                            cancel: a
                        });
                        d.all(b, function(a) {
                            c.complete(a)
                        });
                        return c
                    }
                }
            }

            function Q(c) {
                var d = c.element,
                    e = c.options || {};
                c.structural && (e.event = c.event, e.structural = !0, e.applyClassesEarly = !0, "leave" === c.event && (e.onDone = e.domOperation));
                e.preparationClasses && (e.event = Z(e.event, e.preparationClasses));
                c = a(d, e);
                return c.$$willAnimate ? c : null
            }
            if (!l.animations && !l.transitions) return R;
            var u = I[0].body;
            c = z(e);
            var F = E(c.parentNode && 11 === c.parentNode.nodeType || u.contains(c) ? c : u);
            V(m);
            return function(a) {
                return a.from && a.to ? B(a.from, a.to, a.classes, a.anchors) : Q(a)
            }
        }]
    }]).provider("$$animateJs", ["$animateProvider", function(a) {
        this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function(b, c, d) {
            function e(c) {
                c = ca(c) ? c : c.split(" ");
                for (var d = [], e = {}, l = 0; l < c.length; l++) {
                    var w = c[l],
                        s = a.$$registeredAnimations[w];
                    s && !e[w] && (d.push(b.get(s)), e[w] = !0)
                }
                return d
            }
            var l = V(d);
            return function(a, b, d, v) {
                function w() {
                    v.domOperation();
                    l(a, v)
                }

                function B(a, b, d, e, f) {
                    switch (d) {
                        case "animate":
                            b = [b, e.from, e.to, f];
                            break;
                        case "setClass":
                            b = [b, n, K, f];
                            break;
                        case "addClass":
                            b = [b, n, f];
                            break;
                        case "removeClass":
                            b = [b, K, f];
                            break;
                        default:
                            b = [b, f]
                    }
                    b.push(e);
                    if (a = a.apply(a, b))
                        if (Ka(a.start) && (a = a.start()), a instanceof c) a.done(f);
                        else if (Ka(a)) return a;
                    return R
                }

                function z(a, b, d, e, f) {
                    var g = [];
                    s(e, function(e) {
                        var k = e[f];
                        k && g.push(function() {
                            var e, f, h = !1,
                                g = function(a) {
                                    h || (h = !0, (f || R)(a), e.complete(!a))
                                };
                            e = new c({
                                end: function() {
                                    g()
                                },
                                cancel: function() {
                                    g(!0)
                                }
                            });
                            f = B(k, a, b, d, function(a) {
                                g(!1 === a)
                            });
                            return e
                        })
                    });
                    return g
                }

                function u(a, b, d, e, f) {
                    var g = z(a, b, d, e, f);
                    if (0 === g.length) {
                        var h, k;
                        "beforeSetClass" === f ? (h = z(a, "removeClass", d, e, "beforeRemoveClass"), k = z(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = z(a, "removeClass", d, e, "removeClass"), k = z(a, "addClass", d, e, "addClass"));
                        h && (g = g.concat(h));
                        k && (g = g.concat(k))
                    }
                    if (0 !== g.length) return function(a) {
                        var b = [];
                        g.length && s(g, function(a) {
                            b.push(a())
                        });
                        b.length ? c.all(b, a) : a();
                        return function(a) {
                            s(b, function(b) {
                                a ?
                                    b.cancel() : b.end()
                            })
                        }
                    }
                }
                var F = !1;
                3 === arguments.length && va(d) && (v = d, d = null);
                v = pa(v);
                d || (d = a.attr("class") || "", v.addClass && (d += " " + v.addClass), v.removeClass && (d += " " + v.removeClass));
                var n = v.addClass,
                    K = v.removeClass,
                    J = e(d),
                    r, t;
                if (J.length) {
                    var M, E;
                    "leave" == b ? (E = "leave", M = "afterLeave") : (E = "before" + b.charAt(0).toUpperCase() + b.substr(1), M = b);
                    "enter" !== b && "move" !== b && (r = u(a, b, v, J, E));
                    t = u(a, b, v, J, M)
                }
                if (r || t) {
                    var g;
                    return {
                        $$willAnimate: !0,
                        end: function() {
                            g ? g.end() : (F = !0, w(), ha(a, v), g = new c, g.complete(!0));
                            return g
                        },
                        start: function() {
                            function b(c) {
                                F = !0;
                                w();
                                ha(a, v);
                                g.complete(c)
                            }
                            if (g) return g;
                            g = new c;
                            var d, e = [];
                            r && e.push(function(a) {
                                d = r(a)
                            });
                            e.length ? e.push(function(a) {
                                w();
                                a(!0)
                            }) : w();
                            t && e.push(function(a) {
                                d = t(a)
                            });
                            g.setHost({
                                end: function() {
                                    F || ((d || R)(void 0), b(void 0))
                                },
                                cancel: function() {
                                    F || ((d || R)(!0), b(!0))
                                }
                            });
                            c.chain(e, b);
                            return g
                        }
                    }
                }
            }
        }]
    }]).provider("$$animateJsDriver", ["$$animationProvider", function(a) {
        a.drivers.push("$$animateJsDriver");
        this.$get = ["$$animateJs", "$$AnimateRunner", function(a, c) {
            function d(c) {
                return a(c.element,
                    c.event, c.classes, c.options)
            }
            return function(a) {
                if (a.from && a.to) {
                    var b = d(a.from),
                        m = d(a.to);
                    if (b || m) return {
                        start: function() {
                            function a() {
                                return function() {
                                    s(d, function(a) {
                                        a.end()
                                    })
                                }
                            }
                            var d = [];
                            b && d.push(b.start());
                            m && d.push(m.start());
                            c.all(d, function(a) {
                                e.complete(a)
                            });
                            var e = new c({
                                end: a(),
                                cancel: a()
                            });
                            return e
                        }
                    }
                } else return d(a)
            }
        }]
    }])
})(window, window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.4.11
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p, c, n) {
    'use strict';

    function l(b, a, g) {
        var d = g.baseHref(),
            k = b[0];
        return function(b, e, f) {
            var g, h;
            f = f || {};
            h = f.expires;
            g = c.isDefined(f.path) ? f.path : d;
            c.isUndefined(e) && (h = "Thu, 01 Jan 1970 00:00:00 GMT", e = "");
            c.isString(h) && (h = new Date(h));
            e = encodeURIComponent(b) + "=" + encodeURIComponent(e);
            e = e + (g ? ";path=" + g : "") + (f.domain ? ";domain=" + f.domain : "");
            e += h ? ";expires=" + h.toUTCString() : "";
            e += f.secure ? ";secure" : "";
            f = e.length + 1;
            4096 < f && a.warn("Cookie '" + b + "' possibly not set or overflowed because it was too large (" +
                f + " > 4096 bytes)!");
            k.cookie = e
        }
    }
    c.module("ngCookies", ["ng"]).provider("$cookies", [function() {
        var b = this.defaults = {};
        this.$get = ["$$cookieReader", "$$cookieWriter", function(a, g) {
            return {
                get: function(d) {
                    return a()[d]
                },
                getObject: function(d) {
                    return (d = this.get(d)) ? c.fromJson(d) : d
                },
                getAll: function() {
                    return a()
                },
                put: function(d, a, m) {
                    g(d, a, m ? c.extend({}, b, m) : b)
                },
                putObject: function(d, b, a) {
                    this.put(d, c.toJson(b), a)
                },
                remove: function(a, k) {
                    g(a, n, k ? c.extend({}, b, k) : b)
                }
            }
        }]
    }]);
    c.module("ngCookies").factory("$cookieStore", ["$cookies", function(b) {
        return {
            get: function(a) {
                return b.getObject(a)
            },
            put: function(a, c) {
                b.putObject(a, c)
            },
            remove: function(a) {
                b.remove(a)
            }
        }
    }]);
    l.$inject = ["$document", "$log", "$browser"];
    c.module("ngCookies").provider("$$cookieWriter", function() {
        this.$get = l
    })
})(window, window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

/*
 AngularJS v1.4.11
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(J, f, C) {
    'use strict';

    function D(t, e) {
        e = e || {};
        f.forEach(e, function(f, k) {
            delete e[k]
        });
        for (var k in t) !t.hasOwnProperty(k) || "$" === k.charAt(0) && "$" === k.charAt(1) || (e[k] = t[k]);
        return e
    }
    var y = f.$$minErr("$resource"),
        B = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
    f.module("ngResource", ["ng"]).provider("$resource", function() {
        var t = /^https?:\/\/[^\/]*/,
            e = this;
        this.defaults = {
            stripTrailingSlashes: !0,
            actions: {
                get: {
                    method: "GET"
                },
                save: {
                    method: "POST"
                },
                query: {
                    method: "GET",
                    isArray: !0
                },
                remove: {
                    method: "DELETE"
                },
                "delete": {
                    method: "DELETE"
                }
            }
        };
        this.$get = ["$http", "$log", "$q", function(k, F, G) {
            function w(f, g) {
                this.template = f;
                this.defaults = r({}, e.defaults, g);
                this.urlParams = {}
            }

            function z(l, g, s, h) {
                function c(a, q) {
                    var c = {};
                    q = r({}, g, q);
                    u(q, function(b, q) {
                        x(b) && (b = b());
                        var m;
                        if (b && b.charAt && "@" == b.charAt(0)) {
                            m = a;
                            var d = b.substr(1);
                            if (null == d || "" === d || "hasOwnProperty" === d || !B.test("." + d)) throw y("badmember", d);
                            for (var d = d.split("."), n = 0, g = d.length; n < g && f.isDefined(m); n++) {
                                var e = d[n];
                                m = null !== m ? m[e] : C
                            }
                        } else m = b;
                        c[q] = m
                    });
                    return c
                }

                function H(a) {
                    return a.resource
                }

                function d(a) {
                    D(a || {}, this)
                }
                var t = new w(l, h);
                s = r({}, e.defaults.actions, s);
                d.prototype.toJSON = function() {
                    var a = r({}, this);
                    delete a.$promise;
                    delete a.$resolved;
                    return a
                };
                u(s, function(a, q) {
                    var g = /^(POST|PUT|PATCH)$/i.test(a.method);
                    d[q] = function(b, A, m, e) {
                        var n = {},
                            h, l, s;
                        switch (arguments.length) {
                            case 4:
                                s = e, l = m;
                            case 3:
                            case 2:
                                if (x(A)) {
                                    if (x(b)) {
                                        l = b;
                                        s = A;
                                        break
                                    }
                                    l = A;
                                    s = m
                                } else {
                                    n = b;
                                    h = A;
                                    l = m;
                                    break
                                }
                            case 1:
                                x(b) ? l = b : g ? h = b : n = b;
                                break;
                            case 0:
                                break;
                            default:
                                throw y("badargs", arguments.length);
                        }
                        var w = this instanceof d,
                            p = w ?
                            h : a.isArray ? [] : new d(h),
                            v = {},
                            z = a.interceptor && a.interceptor.response || H,
                            B = a.interceptor && a.interceptor.responseError || C;
                        u(a, function(a, b) {
                            switch (b) {
                                default: v[b] = I(a);
                                break;
                                case "params":
                                        case "isArray":
                                        case "interceptor":
                                        break;
                                case "timeout":
                                        a && !f.isNumber(a) && F.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests.\n  If you need support for cancellable $resource actions, you should upgrade to version 1.5 or higher.")
                            }
                        });
                        g && (v.data = h);
                        t.setUrlParams(v, r({}, c(h, a.params || {}), n), a.url);
                        n = k(v).then(function(b) {
                            var c = b.data,
                                m = p.$promise;
                            if (c) {
                                if (f.isArray(c) !== !!a.isArray) throw y("badcfg", q, a.isArray ? "array" : "object", f.isArray(c) ? "array" : "object", v.method, v.url);
                                a.isArray ? (p.length = 0, u(c, function(b) {
                                    "object" === typeof b ? p.push(new d(b)) : p.push(b)
                                })) : (D(c, p), p.$promise = m)
                            }
                            p.$resolved = !0;
                            b.resource = p;
                            return b
                        }, function(b) {
                            p.$resolved = !0;
                            (s || E)(b);
                            return G.reject(b)
                        });
                        n = n.then(function(b) {
                                var a = z(b);
                                (l || E)(a, b.headers);
                                return a
                            },
                            B);
                        return w ? n : (p.$promise = n, p.$resolved = !1, p)
                    };
                    d.prototype["$" + q] = function(b, a, c) {
                        x(b) && (c = a, a = b, b = {});
                        b = d[q].call(this, b, this, a, c);
                        return b.$promise || b
                    }
                });
                d.bind = function(a) {
                    return z(l, r({}, g, a), s)
                };
                return d
            }
            var E = f.noop,
                u = f.forEach,
                r = f.extend,
                I = f.copy,
                x = f.isFunction;
            w.prototype = {
                setUrlParams: function(l, g, e) {
                    var h = this,
                        c = e || h.template,
                        k, d, r = "",
                        a = h.urlParams = {};
                    u(c.split(/\W/), function(d) {
                        if ("hasOwnProperty" === d) throw y("badname");
                        !/^\d+$/.test(d) && d && (new RegExp("(^|[^\\\\]):" + d + "(\\W|$)")).test(c) &&
                            (a[d] = !0)
                    });
                    c = c.replace(/\\:/g, ":");
                    c = c.replace(t, function(a) {
                        r = a;
                        return ""
                    });
                    g = g || {};
                    u(h.urlParams, function(a, e) {
                        k = g.hasOwnProperty(e) ? g[e] : h.defaults[e];
                        f.isDefined(k) && null !== k ? (d = encodeURIComponent(k).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"), c = c.replace(new RegExp(":" + e + "(\\W|$)", "g"), function(b, a) {
                            return d + a
                        })) : c = c.replace(new RegExp("(/?):" + e + "(\\W|$)", "g"), function(b,
                            a, c) {
                            return "/" == c.charAt(0) ? c : a + c
                        })
                    });
                    h.defaults.stripTrailingSlashes && (c = c.replace(/\/+$/, "") || "/");
                    c = c.replace(/\/\.(?=\w+($|\?))/, ".");
                    l.url = r + c.replace(/\/\\\./, "/.");
                    u(g, function(a, c) {
                        h.urlParams[c] || (l.params = l.params || {}, l.params[c] = a)
                    })
                }
            };
            return z
        }]
    })
})(window, window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.4.11
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q, d, C) {
    'use strict';

    function w(s, k, h) {
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            link: function(a, f, b, c, y) {
                function z() {
                    l && (h.cancel(l), l = null);
                    m && (m.$destroy(), m = null);
                    n && (l = h.leave(n), l.then(function() {
                        l = null
                    }), n = null)
                }

                function x() {
                    var b = s.current && s.current.locals;
                    if (d.isDefined(b && b.$template)) {
                        var b = a.$new(),
                            c = s.current;
                        n = y(b, function(b) {
                            h.enter(b, null, n || f).then(function() {
                                !d.isDefined(u) || u && !a.$eval(u) || k()
                            });
                            z()
                        });
                        m = c.scope = b;
                        m.$emit("$viewContentLoaded");
                        m.$eval(v)
                    } else z()
                }
                var m, n, l, u = b.autoscroll,
                    v = b.onload || "";
                a.$on("$routeChangeSuccess", x);
                x()
            }
        }
    }

    function A(d, k, h) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function(a, f) {
                var b = h.current,
                    c = b.locals;
                f.html(c.$template);
                var y = d(f.contents());
                b.controller && (c.$scope = a, c = k(b.controller, c), b.controllerAs && (a[b.controllerAs] = c), f.data("$ngControllerController", c), f.children().data("$ngControllerController", c));
                y(a)
            }
        }
    }
    q = d.module("ngRoute", ["ng"]).provider("$route", function() {
        function s(a, f) {
            return d.extend(Object.create(a),
                f)
        }

        function k(a, d) {
            var b = d.caseInsensitiveMatch,
                c = {
                    originalPath: a,
                    regexp: a
                },
                h = c.keys = [];
            a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g, function(a, d, b, c) {
                a = "?" === c || "*?" === c ? "?" : null;
                c = "*" === c || "*?" === c ? "*" : null;
                h.push({
                    name: b,
                    optional: !!a
                });
                d = d || "";
                return "" + (a ? "" : d) + "(?:" + (a ? d : "") + (c && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "")
            }).replace(/([\/$\*])/g, "\\$1");
            c.regexp = new RegExp("^" + a + "$", b ? "i" : "");
            return c
        }
        var h = {};
        this.when = function(a, f) {
            var b = d.copy(f);
            d.isUndefined(b.reloadOnSearch) &&
                (b.reloadOnSearch = !0);
            d.isUndefined(b.caseInsensitiveMatch) && (b.caseInsensitiveMatch = this.caseInsensitiveMatch);
            h[a] = d.extend(b, a && k(a, b));
            if (a) {
                var c = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                h[c] = d.extend({
                    redirectTo: a
                }, k(c, b))
            }
            return this
        };
        this.caseInsensitiveMatch = !1;
        this.otherwise = function(a) {
            "string" === typeof a && (a = {
                redirectTo: a
            });
            this.when(null, a);
            return this
        };
        this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function(a, f, b, c, k, q, x) {
            function m(b) {
                var e =
                    t.current;
                (w = (p = l()) && e && p.$$route === e.$$route && d.equals(p.pathParams, e.pathParams) && !p.reloadOnSearch && !v) || !e && !p || a.$broadcast("$routeChangeStart", p, e).defaultPrevented && b && b.preventDefault()
            }

            function n() {
                var g = t.current,
                    e = p;
                if (w) g.params = e.params, d.copy(g.params, b), a.$broadcast("$routeUpdate", g);
                else if (e || g) v = !1, (t.current = e) && e.redirectTo && (d.isString(e.redirectTo) ? f.path(u(e.redirectTo, e.params)).search(e.params).replace() : f.url(e.redirectTo(e.pathParams, f.path(), f.search())).replace()), c.when(e).then(function() {
                    if (e) {
                        var a =
                            d.extend({}, e.resolve),
                            b, g;
                        d.forEach(a, function(b, e) {
                            a[e] = d.isString(b) ? k.get(b) : k.invoke(b, null, null, e)
                        });
                        d.isDefined(b = e.template) ? d.isFunction(b) && (b = b(e.params)) : d.isDefined(g = e.templateUrl) && (d.isFunction(g) && (g = g(e.params)), d.isDefined(g) && (e.loadedTemplateUrl = x.valueOf(g), b = q(g)));
                        d.isDefined(b) && (a.$template = b);
                        return c.all(a)
                    }
                }).then(function(c) {
                    e == t.current && (e && (e.locals = c, d.copy(e.params, b)), a.$broadcast("$routeChangeSuccess", e, g))
                }, function(b) {
                    e == t.current && a.$broadcast("$routeChangeError",
                        e, g, b)
                })
            }

            function l() {
                var a, b;
                d.forEach(h, function(c, h) {
                    var r;
                    if (r = !b) {
                        var k = f.path();
                        r = c.keys;
                        var m = {};
                        if (c.regexp)
                            if (k = c.regexp.exec(k)) {
                                for (var l = 1, n = k.length; l < n; ++l) {
                                    var p = r[l - 1],
                                        q = k[l];
                                    p && q && (m[p.name] = q)
                                }
                                r = m
                            } else r = null;
                        else r = null;
                        r = a = r
                    }
                    r && (b = s(c, {
                        params: d.extend({}, f.search(), a),
                        pathParams: a
                    }), b.$$route = c)
                });
                return b || h[null] && s(h[null], {
                    params: {},
                    pathParams: {}
                })
            }

            function u(a, b) {
                var c = [];
                d.forEach((a || "").split(":"), function(a, d) {
                    if (0 === d) c.push(a);
                    else {
                        var g = a.match(/(\w+)(?:[?*])?(.*)/),
                            f = g[1];
                        c.push(b[f]);
                        c.push(g[2] || "");
                        delete b[f]
                    }
                });
                return c.join("")
            }
            var v = !1,
                p, w, t = {
                    routes: h,
                    reload: function() {
                        v = !0;
                        var b = {
                            defaultPrevented: !1,
                            preventDefault: function() {
                                this.defaultPrevented = !0;
                                v = !1
                            }
                        };
                        a.$evalAsync(function() {
                            m(b);
                            b.defaultPrevented || n()
                        })
                    },
                    updateParams: function(a) {
                        if (this.current && this.current.$$route) a = d.extend({}, this.current.params, a), f.path(u(this.current.$$route.originalPath, a)), f.search(a);
                        else throw B("norout");
                    }
                };
            a.$on("$locationChangeStart", m);
            a.$on("$locationChangeSuccess",
                n);
            return t
        }]
    });
    var B = d.$$minErr("ngRoute");
    q.provider("$routeParams", function() {
        this.$get = function() {
            return {}
        }
    });
    q.directive("ngView", w);
    q.directive("ngView", A);
    w.$inject = ["$route", "$anchorScroll", "$animate"];
    A.$inject = ["$compile", "$controller", "$route"]
})(window, window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.4.11
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n, h, p) {
    'use strict';

    function E(a) {
        var f = [];
        r(f, h.noop).chars(a);
        return f.join("")
    }

    function g(a, f) {
        var d = {},
            c = a.split(","),
            b;
        for (b = 0; b < c.length; b++) d[f ? h.lowercase(c[b]) : c[b]] = !0;
        return d
    }

    function F(a, f) {
        function d(a, b, d, l) {
            b = h.lowercase(b);
            if (s[b])
                for (; e.last() && t[e.last()];) c("", e.last());
            u[b] && e.last() == b && c("", b);
            (l = v[b] || !!l) || e.push(b);
            var m = {};
            d.replace(G, function(b, a, f, c, d) {
                m[a] = q(f || c || d || "")
            });
            f.start && f.start(b, m, l)
        }

        function c(b, a) {
            var c = 0,
                d;
            if (a = h.lowercase(a))
                for (c = e.length -
                    1; 0 <= c && e[c] != a; c--);
            if (0 <= c) {
                for (d = e.length - 1; d >= c; d--) f.end && f.end(e[d]);
                e.length = c
            }
        }
        "string" !== typeof a && (a = null === a || "undefined" === typeof a ? "" : "" + a);
        var b, k, e = [],
            m = a,
            l;
        for (e.last = function() {
                return e[e.length - 1]
            }; a;) {
            l = "";
            k = !0;
            if (e.last() && w[e.last()]) a = a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + e.last() + "[^>]*>", "i"), function(a, b) {
                b = b.replace(H, "$1").replace(I, "$1");
                f.chars && f.chars(q(b));
                return ""
            }), c("", e.last());
            else {
                if (0 === a.indexOf("\x3c!--")) b = a.indexOf("--", 4), 0 <= b && a.lastIndexOf("--\x3e",
                    b) === b && (f.comment && f.comment(a.substring(4, b)), a = a.substring(b + 3), k = !1);
                else if (x.test(a)) {
                    if (b = a.match(x)) a = a.replace(b[0], ""), k = !1
                } else if (J.test(a)) {
                    if (b = a.match(y)) a = a.substring(b[0].length), b[0].replace(y, c), k = !1
                } else K.test(a) && ((b = a.match(z)) ? (b[4] && (a = a.substring(b[0].length), b[0].replace(z, d)), k = !1) : (l += "<", a = a.substring(1)));
                k && (b = a.indexOf("<"), l += 0 > b ? a : a.substring(0, b), a = 0 > b ? "" : a.substring(b), f.chars && f.chars(q(l)))
            }
            if (a == m) throw L("badparse", a);
            m = a
        }
        c()
    }

    function q(a) {
        if (!a) return "";
        A.innerHTML =
            a.replace(/</g, "&lt;");
        return A.textContent
    }

    function B(a) {
        return a.replace(/&/g, "&amp;").replace(M, function(a) {
            var d = a.charCodeAt(0);
            a = a.charCodeAt(1);
            return "&#" + (1024 * (d - 55296) + (a - 56320) + 65536) + ";"
        }).replace(N, function(a) {
            return "&#" + a.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function r(a, f) {
        var d = !1,
            c = h.bind(a, a.push);
        return {
            start: function(a, k, e) {
                a = h.lowercase(a);
                !d && w[a] && (d = a);
                d || !0 !== C[a] || (c("<"), c(a), h.forEach(k, function(d, e) {
                    var k = h.lowercase(e),
                        g = "img" === a && "src" === k ||
                        "background" === k;
                    !0 !== O[k] || !0 === D[k] && !f(d, g) || (c(" "), c(e), c('="'), c(B(d)), c('"'))
                }), c(e ? "/>" : ">"))
            },
            end: function(a) {
                a = h.lowercase(a);
                d || !0 !== C[a] || (c("</"), c(a), c(">"));
                a == d && (d = !1)
            },
            chars: function(a) {
                d || c(B(a))
            }
        }
    }
    var L = h.$$minErr("$sanitize"),
        z = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
        y = /^<\/\s*([\w:-]+)[^>]*>/,
        G = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
        K = /^</,
        J = /^<\//,
        H = /\x3c!--(.*?)--\x3e/g,
        x = /<!DOCTYPE([^>]*?)>/i,
        I = /<!\[CDATA\[(.*?)]]\x3e/g,
        M = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        N = /([^\#-~| |!])/g,
        v = g("area,br,col,hr,img,wbr");
    n = g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
    p = g("rp,rt");
    var u = h.extend({}, p, n),
        s = h.extend({}, n, g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
        t = h.extend({}, p, g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
    n = g("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan,use");
    var w = g("script,style"),
        C = h.extend({}, v, s, t, u, n),
        D = g("background,cite,href,longdesc,src,usemap,xlink:href");
    n = g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width");
    p = g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0);
    var O = h.extend({}, D, p, n),
        A = document.createElement("pre");
    h.module("ngSanitize", []).provider("$sanitize", function() {
        this.$get = ["$$sanitizeUri", function(a) {
            return function(f) {
                var d = [];
                F(f, r(d, function(c, b) {
                    return !/^unsafe/.test(a(c, b))
                }));
                return d.join("")
            }
        }]
    });
    h.module("ngSanitize").filter("linky", ["$sanitize", function(a) {
        var f = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
            d = /^mailto:/i;
        return function(c, b) {
            function k(a) {
                a && g.push(E(a))
            }

            function e(a,
                c) {
                g.push("<a ");
                h.isDefined(b) && g.push('target="', b, '" ');
                g.push('href="', a.replace(/"/g, "&quot;"), '">');
                k(c);
                g.push("</a>")
            }
            if (!c) return c;
            for (var m, l = c, g = [], n, p; m = l.match(f);) n = m[0], m[2] || m[4] || (n = (m[3] ? "http://" : "mailto:") + n), p = m.index, k(l.substr(0, p)), e(n, m[0].replace(d, "")), l = l.substring(p + m[0].length);
            k(l);
            return a(g.join(""))
        }
    }])
})(window, window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = "2.1.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            aa = /[+~]/,
            ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            da = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ea = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: oa(function() {
                    return [0]
                }),
                last: oa(function(a, b) {
                    return [b - 1]
                }),
                eq: oa(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function qa() {}
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                    return a === b
                }, h, !0), l = sa(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                    }
                    m.push(c)
                }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = va(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = n.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var c = h.length;
                        ! function g(b) {
                            n.each(b, function(b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                            })
                        }(arguments), d ? f = h.length : b && (e = c, j(b))
                    }
                    return this
                },
                remove: function() {
                    return h && n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], f = 0, this
                },
                disable: function() {
                    return h = i = b = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, b || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, b) {
                    return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return k
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });

    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }
    n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(n(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K,
        M = new K,
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                M.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function(a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function(a, b) {
            M.remove(a, b)
        },
        _data: function(a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function(a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a)
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        T = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = l.createDocumentFragment(),
            b = a.appendChild(l.createElement("div")),
            c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l],
                q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ba = /<([\w:]+)/,
        ca = /<|&#?\w+;/,
        da = /<(?:script|style|link)/i,
        ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fa = /^$|\/(?:java|ecma)script/i,
        ga = /^true\/(.*)/,
        ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ia = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);
                else na(a, h);
            return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
                    else if (ca.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
                while (j--) f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                    j = 0;
                    while (e = f[j++]) fa.test(e.type || "") && c.push(e)
                }
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                m = this,
                o = l - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qa, ra = {};

    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function ta(a) {
        var b = l,
            c = ra[a];
        return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
    }
    var ua = /^margin/,
        va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wa = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };

    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function ya(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d = l.documentElement,
            e = l.createElement("div"),
            f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(), b
                },
                boxSizingReliable: function() {
                    return null == c && g(), c
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var za = /^(none|table(?!-c[ea]).+)/,
        Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
        Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
        Ca = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Da = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ea = ["Webkit", "O", "Moz", "ms"];

    function Fa(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1),
            d = b,
            e = Ea.length;
        while (e--)
            if (b = Ea[e] + c, b in a) return b;
        return d
    }

    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ia(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = wa(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
                    return Ia(a, b, d)
                }) : Ia(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xa, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga)
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Ja(this, !0)
        },
        hide: function() {
            return Ja(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e)
    }
    n.Tween = Ka, Ka.prototype = {
        constructor: Ka,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/,
        Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pa = /queueHooks$/,
        Qa = [Va],
        Ra = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = Oa.exec(b),
                    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function Sa() {
        return setTimeout(function() {
            La = void 0
        }), La = n.now()
    }

    function Ta(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && S(a),
            q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Na.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function Xa(a, b, c) {
        var d, e, f = 0,
            g = Qa.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: La || Sa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++)
            if (d = Qa[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(Xa, {
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? Qa.unshift(a) : Qa.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(S).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = Xa(this, n.extend({}, a), f);
                        (e || L.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = L.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = L.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: Ta("show"),
            slideUp: Ta("hide"),
            slideToggle: Ta("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = 0,
                c = n.timers;
            for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), La = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            clearInterval(Ma), Ma = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(a, b) {
            return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a = l.createElement("input"),
                b = l.createElement("select"),
                c = b.appendChild(l.createElement("option"));
            a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
        }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
                void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Za = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function(a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = n(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cb = n.now(),
        db = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var eb = /#.*$/,
        fb = /([?&])_=[^&]*/,
        gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ib = /^(?:GET|HEAD)$/,
        jb = /^\/\//,
        kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lb = {},
        mb = {},
        nb = "*/".concat("*"),
        ob = a.location.href,
        pb = kb.exec(ob.toLowerCase()) || [];

    function qb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rb(a, b, c, d) {
        var e = {},
            f = a === mb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? e : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var vb = /%20/g,
        wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;

    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Bb = 0,
        Cb = {},
        Db = {
            0: 200,
            1223: 204
        },
        Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Cb) Cb[a]()
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Fb = [],
        Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Ib = a.document.documentElement;

    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ib
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Kb = a.jQuery,
        Lb = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
//# sourceMappingURL=jquery.min.map
/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
 * http://photoswipe.com
 * Copyright (c) 2015 Dmitry Semenov; */
! function(a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipeUI_Default = b()
}(this, function() {
    "use strict";
    var a = function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = this,
            w = !1,
            x = !0,
            y = !0,
            z = {
                barsSize: {
                    top: 44,
                    bottom: "auto"
                },
                closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                timeToIdle: 4e3,
                timeToIdleOutside: 1e3,
                loadingIndicatorDelay: 1e3,
                addCaptionHTMLFn: function(a, b) {
                    return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1)
                },
                closeEl: !0,
                captionEl: !0,
                fullscreenEl: !0,
                zoomEl: !0,
                shareEl: !0,
                counterEl: !0,
                arrowEl: !0,
                preloaderEl: !0,
                tapToClose: !1,
                tapToToggleControls: !0,
                clickToCloseNonZoomable: !0,
                shareButtons: [{
                    id: "facebook",
                    label: "Share on Facebook",
                    url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                }, {
                    id: "twitter",
                    label: "Tweet",
                    url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                }, {
                    id: "pinterest",
                    label: "Pin it",
                    url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                }, {
                    id: "download",
                    label: "Download image",
                    url: "{{raw_image_url}}",
                    download: !0
                }],
                getImageURLForShare: function() {
                    return a.currItem.src || ""
                },
                getPageURLForShare: function() {
                    return window.location.href
                },
                getTextForShare: function() {
                    return a.currItem.title || ""
                },
                indexIndicatorSep: " / ",
                fitControlsWidth: 1200
            },
            A = function(a) {
                if (r) return !0;
                a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();
                for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++) c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
                if (d) {
                    a.stopPropagation && a.stopPropagation(), r = !0;
                    var h = b.features.isOldAndroid ? 600 : 30;
                    s = setTimeout(function() {
                        r = !1
                    }, h)
                }
            },
            B = function() {
                return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth
            },
            C = function(a, c, d) {
                b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c)
            },
            D = function() {
                var a = 1 === q.getNumItemsFn();
                a !== p && (C(d, "ui--one-slide", a), p = a)
            },
            E = function() {
                C(i, "share-modal--hidden", y)
            },
            F = function() {
                return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function() {
                    y && E()
                }, 300)) : (E(), setTimeout(function() {
                    y || b.addClass(i, "pswp__share-modal--fade-in")
                }, 30)), y || H(), !1
            },
            G = function(b) {
                b = b || window.event;
                var c = b.target || b.srcElement;
                return a.shout("shareLinkClick", b, c), c.href ? c.hasAttribute("download") ? !0 : (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1) : !1
            },
            H = function() {
                for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++) a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
                i.children[0].innerHTML = f, i.children[0].onclick = G
            },
            I = function(a) {
                for (var c = 0; c < q.closeElClasses.length; c++)
                    if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0
            },
            J = 0,
            K = function() {
                clearTimeout(u), J = 0, k && v.setIdle(!1)
            },
            L = function(a) {
                a = a ? a : window.event;
                var b = a.relatedTarget || a.toElement;
                b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function() {
                    v.setIdle(!0)
                }, q.timeToIdleOutside))
            },
            M = function() {
                q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs"))
            },
            N = function() {
                q.preloaderEl && (O(!0), l("beforeChange", function() {
                    clearTimeout(o), o = setTimeout(function() {
                        a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0)
                    }, q.loadingIndicatorDelay)
                }), l("imageLoadComplete", function(b, c) {
                    a.currItem === c && O(!0)
                }))
            },
            O = function(a) {
                n !== a && (C(m, "preloader--active", !a), n = a)
            },
            P = function(a) {
                var c = a.vGap;
                if (B()) {
                    var g = q.barsSize;
                    if (q.captionEl && "auto" === g.bottom)
                        if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
                            var h = f.clientHeight;
                            c.bottom = parseInt(h, 10) || 44
                        } else c.bottom = g.top;
                    else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
                    c.top = g.top
                } else c.top = c.bottom = 0
            },
            Q = function() {
                q.timeToIdle && l("mouseUsed", function() {
                    b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function() {
                        J++, 2 === J && v.setIdle(!0)
                    }, q.timeToIdle / 2)
                })
            },
            R = function() {
                l("onVerticalDrag", function(a) {
                    x && .95 > a ? v.hideControls() : !x && a >= .95 && v.showControls()
                });
                var a;
                l("onPinchClose", function(b) {
                    x && .9 > b ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls()
                }), l("zoomGestureEnded", function() {
                    a = !1, a && !x && v.showControls()
                })
            },
            S = [{
                name: "caption",
                option: "captionEl",
                onInit: function(a) {
                    e = a
                }
            }, {
                name: "share-modal",
                option: "shareEl",
                onInit: function(a) {
                    i = a
                },
                onTap: function() {
                    F()
                }
            }, {
                name: "button--share",
                option: "shareEl",
                onInit: function(a) {
                    h = a
                },
                onTap: function() {
                    F()
                }
            }, {
                name: "button--zoom",
                option: "zoomEl",
                onTap: a.toggleDesktopZoom
            }, {
                name: "counter",
                option: "counterEl",
                onInit: function(a) {
                    g = a
                }
            }, {
                name: "button--close",
                option: "closeEl",
                onTap: a.close
            }, {
                name: "button--arrow--left",
                option: "arrowEl",
                onTap: a.prev
            }, {
                name: "button--arrow--right",
                option: "arrowEl",
                onTap: a.next
            }, {
                name: "button--fs",
                option: "fullscreenEl",
                onTap: function() {
                    c.isFullscreen() ? c.exit() : c.enter()
                }
            }, {
                name: "preloader",
                option: "preloaderEl",
                onInit: function(a) {
                    m = a
                }
            }],
            T = function() {
                var a, c, e, f = function(d) {
                    if (d)
                        for (var f = d.length, g = 0; f > g; g++) {
                            a = d[g], c = a.className;
                            for (var h = 0; h < S.length; h++) e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"))
                        }
                };
                f(d.children);
                var g = b.getChildByClass(d, "pswp__top-bar");
                g && f(g.children)
            };
        v.init = function() {
            b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", function(b) {
                var c = a.currItem.initialZoomLevel;
                a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333)
            }), l("preventDragEvent", function(a, b, c) {
                var d = a.target || a.srcElement;
                d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1)
            }), l("bindEvents", function() {
                b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver)
            }), l("unbindEvents", function() {
                y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null)
            }), l("destroy", function() {
                q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1)
            }), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function() {
                q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden")
            }), l("initialZoomOut", function() {
                b.addClass(d, "pswp__ui--hidden")
            }), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N()
        }, v.setIdle = function(a) {
            k = a, C(d, "ui--idle", a)
        }, v.update = function() {
            x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D()
        }, v.updateFullscreen = function(d) {
            d && setTimeout(function() {
                a.setScrollOffset(0, b.getScrollY())
            }, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs")
        }, v.updateIndexIndicator = function() {
            q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn())
        }, v.onGlobalTap = function(c) {
            c = c || window.event;
            var d = c.target || c.srcElement;
            if (!r)
                if (c.detail && "mouse" === c.detail.pointerType) {
                    if (I(d)) return void a.close();
                    b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint))
                } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d))) return void a.close()
        }, v.onMouseOver = function(a) {
            a = a || window.event;
            var b = a.target || a.srcElement;
            C(d, "ui--over-close", I(b))
        }, v.hideControls = function() {
            b.addClass(d, "pswp__ui--hidden"), x = !1
        }, v.showControls = function() {
            x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden")
        }, v.supportsFullscreen = function() {
            var a = document;
            return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen)
        }, v.getFullscreenAPI = function() {
            var b, c = document.documentElement,
                d = "fullscreenchange";
            return c.requestFullscreen ? b = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: d
            } : c.mozRequestFullScreen ? b = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + d
            } : c.webkitRequestFullscreen ? b = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + d
            } : c.msRequestFullscreen && (b = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), b && (b.enter = function() {
                return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, b.exit = function() {
                return q.closeOnScroll = j, document[this.exitK]()
            }, b.isFullscreen = function() {
                return document[this.elementK]
            }), b
        }
    };
    return a
});
/*! PhotoSwipe - v4.1.1 - 2015-12-24
 * http://photoswipe.com
 * Copyright (c) 2015 Dmitry Semenov; */
! function(a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipe = b()
}(this, function() {
    "use strict";
    var a = function(a, b, c, d) {
        var e = {
            features: null,
            bind: function(a, b, c, d) {
                var e = (d ? "remove" : "add") + "EventListener";
                b = b.split(" ");
                for (var f = 0; f < b.length; f++) b[f] && a[e](b[f], c, !1)
            },
            isArray: function(a) {
                return a instanceof Array
            },
            createEl: function(a, b) {
                var c = document.createElement(b || "div");
                return a && (c.className = a), c
            },
            getScrollY: function() {
                var a = window.pageYOffset;
                return void 0 !== a ? a : document.documentElement.scrollTop
            },
            unbind: function(a, b, c) {
                e.bind(a, b, c, !0)
            },
            removeClass: function(a, b) {
                var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
                a.className = a.className.replace(c, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            addClass: function(a, b) {
                e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b)
            },
            hasClass: function(a, b) {
                return a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
            },
            getChildByClass: function(a, b) {
                for (var c = a.firstChild; c;) {
                    if (e.hasClass(c, b)) return c;
                    c = c.nextSibling
                }
            },
            arraySearch: function(a, b, c) {
                for (var d = a.length; d--;)
                    if (a[d][c] === b) return d;
                return -1
            },
            extend: function(a, b, c) {
                for (var d in b)
                    if (b.hasOwnProperty(d)) {
                        if (c && a.hasOwnProperty(d)) continue;
                        a[d] = b[d]
                    }
            },
            easing: {
                sine: {
                    out: function(a) {
                        return Math.sin(a * (Math.PI / 2))
                    },
                    inOut: function(a) {
                        return -(Math.cos(Math.PI * a) - 1) / 2
                    }
                },
                cubic: {
                    out: function(a) {
                        return --a * a * a + 1
                    }
                }
            },
            detectFeatures: function() {
                if (e.features) return e.features;
                var a = e.createEl(),
                    b = a.style,
                    c = "",
                    d = {};
                if (d.oldIE = document.all && !document.addEventListener, d.touch = "ontouchstart" in window, window.requestAnimationFrame && (d.raf = window.requestAnimationFrame, d.caf = window.cancelAnimationFrame), d.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !d.pointerEvent) {
                    var f = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        g && g.length > 0 && (g = parseInt(g[1], 10), g >= 1 && 8 > g && (d.isOldIOSPhone = !0))
                    }
                    var h = f.match(/Android\s([0-9\.]*)/),
                        i = h ? h[1] : 0;
                    i = parseFloat(i), i >= 1 && (4.4 > i && (d.isOldAndroid = !0), d.androidVersion = i), d.isMobileOpera = /opera mini|opera mobi/i.test(f)
                }
                for (var j, k, l = ["transform", "perspective", "animationName"], m = ["", "webkit", "Moz", "ms", "O"], n = 0; 4 > n; n++) {
                    c = m[n];
                    for (var o = 0; 3 > o; o++) j = l[o], k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j), !d[j] && k in b && (d[j] = k);
                    c && !d.raf && (c = c.toLowerCase(), d.raf = window[c + "RequestAnimationFrame"], d.raf && (d.caf = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]))
                }
                if (!d.raf) {
                    var p = 0;
                    d.raf = function(a) {
                        var b = (new Date).getTime(),
                            c = Math.max(0, 16 - (b - p)),
                            d = window.setTimeout(function() {
                                a(b + c)
                            }, c);
                        return p = b + c, d
                    }, d.caf = function(a) {
                        clearTimeout(a)
                    }
                }
                return d.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, e.features = d, d
            }
        };
        e.detectFeatures(), e.features.oldIE && (e.bind = function(a, b, c, d) {
            b = b.split(" ");
            for (var e, f = (d ? "detach" : "attach") + "Event", g = function() {
                    c.handleEvent.call(c)
                }, h = 0; h < b.length; h++)
                if (e = b[h])
                    if ("object" == typeof c && c.handleEvent) {
                        if (d) {
                            if (!c["oldIE" + e]) return !1
                        } else c["oldIE" + e] = g;
                        a[f]("on" + e, c["oldIE" + e])
                    } else a[f]("on" + e, c)
        });
        var f = this,
            g = 25,
            h = 3,
            i = {
                allowPanToNext: !0,
                spacing: .12,
                bgOpacity: 1,
                mouseUsed: !1,
                loop: !0,
                pinchToClose: !0,
                closeOnScroll: !0,
                closeOnVerticalDrag: !0,
                verticalDragRange: .75,
                hideAnimationDuration: 333,
                showAnimationDuration: 333,
                showHideOpacity: !1,
                focus: !0,
                escKey: !0,
                arrowKeys: !0,
                mainScrollEndFriction: .35,
                panEndFriction: .35,
                isClickableElement: function(a) {
                    return "A" === a.tagName
                },
                getDoubleTapZoom: function(a, b) {
                    return a ? 1 : b.initialZoomLevel < .7 ? 1 : 1.33
                },
                maxSpreadZoom: 1.33,
                modal: !0,
                scaleMode: "fit"
            };
        e.extend(i, d);
        var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la = function() {
                return {
                    x: 0,
                    y: 0
                }
            },
            ma = la(),
            na = la(),
            oa = la(),
            pa = {},
            qa = 0,
            ra = {},
            sa = la(),
            ta = 0,
            ua = !0,
            va = [],
            wa = {},
            xa = !1,
            ya = function(a, b) {
                e.extend(f, b.publicMethods), va.push(a)
            },
            za = function(a) {
                var b = _b();
                return a > b - 1 ? a - b : 0 > a ? b + a : a
            },
            Aa = {},
            Ba = function(a, b) {
                return Aa[a] || (Aa[a] = []), Aa[a].push(b)
            },
            Ca = function(a) {
                var b = Aa[a];
                if (b) {
                    var c = Array.prototype.slice.call(arguments);
                    c.shift();
                    for (var d = 0; d < b.length; d++) b[d].apply(f, c)
                }
            },
            Da = function() {
                return (new Date).getTime()
            },
            Ea = function(a) {
                ia = a, f.bg.style.opacity = a * i.bgOpacity
            },
            Fa = function(a, b, c, d, e) {
                (!xa || e && e !== f.currItem) && (d /= e ? e.fitRatio : f.currItem.fitRatio), a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")"
            },
            Ga = function(a) {
                da && (a && (s > f.currItem.fitRatio ? xa || (lc(f.currItem, !1, !0), xa = !0) : xa && (lc(f.currItem), xa = !1)), Fa(da, oa.x, oa.y, s))
            },
            Ha = function(a) {
                a.container && Fa(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel, a)
            },
            Ia = function(a, b) {
                b[E] = u + a + "px, 0px" + v
            },
            Ja = function(a, b) {
                if (!i.loop && b) {
                    var c = m + (sa.x * qa - a) / sa.x,
                        d = Math.round(a - sb.x);
                    (0 > c && d > 0 || c >= _b() - 1 && 0 > d) && (a = sb.x + d * i.mainScrollEndFriction)
                }
                sb.x = a, Ia(a, n)
            },
            Ka = function(a, b) {
                var c = tb[a] - ra[a];
                return na[a] + ma[a] + c - c * (b / t)
            },
            La = function(a, b) {
                a.x = b.x, a.y = b.y, b.id && (a.id = b.id)
            },
            Ma = function(a) {
                a.x = Math.round(a.x), a.y = Math.round(a.y)
            },
            Na = null,
            Oa = function() {
                Na && (e.unbind(document, "mousemove", Oa), e.addClass(a, "pswp--has_mouse"), i.mouseUsed = !0, Ca("mouseUsed")), Na = setTimeout(function() {
                    Na = null
                }, 100)
            },
            Pa = function() {
                e.bind(document, "keydown", f), N.transform && e.bind(f.scrollWrap, "click", f), i.mouseUsed || e.bind(document, "mousemove", Oa), e.bind(window, "resize scroll", f), Ca("bindEvents")
            },
            Qa = function() {
                e.unbind(window, "resize", f), e.unbind(window, "scroll", r.scroll), e.unbind(document, "keydown", f), e.unbind(document, "mousemove", Oa), N.transform && e.unbind(f.scrollWrap, "click", f), U && e.unbind(window, p, f), Ca("unbindEvents")
            },
            Ra = function(a, b) {
                var c = hc(f.currItem, pa, a);
                return b && (ca = c), c
            },
            Sa = function(a) {
                return a || (a = f.currItem), a.initialZoomLevel
            },
            Ta = function(a) {
                return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1
            },
            Ua = function(a, b, c, d) {
                return d === f.currItem.initialZoomLevel ? (c[a] = f.currItem.initialPosition[a], !0) : (c[a] = Ka(a, d), c[a] > b.min[a] ? (c[a] = b.min[a], !0) : c[a] < b.max[a] ? (c[a] = b.max[a], !0) : !1)
            },
            Va = function() {
                if (E) {
                    var b = N.perspective && !G;
                    return u = "translate" + (b ? "3d(" : "("), void(v = N.perspective ? ", 0px)" : ")")
                }
                E = "left", e.addClass(a, "pswp--ie"), Ia = function(a, b) {
                    b.left = a + "px"
                }, Ha = function(a) {
                    var b = a.fitRatio > 1 ? 1 : a.fitRatio,
                        c = a.container.style,
                        d = b * a.w,
                        e = b * a.h;
                    c.width = d + "px", c.height = e + "px", c.left = a.initialPosition.x + "px", c.top = a.initialPosition.y + "px"
                }, Ga = function() {
                    if (da) {
                        var a = da,
                            b = f.currItem,
                            c = b.fitRatio > 1 ? 1 : b.fitRatio,
                            d = c * b.w,
                            e = c * b.h;
                        a.width = d + "px", a.height = e + "px", a.left = oa.x + "px", a.top = oa.y + "px"
                    }
                }
            },
            Wa = function(a) {
                var b = "";
                i.escKey && 27 === a.keyCode ? b = "close" : i.arrowKeys && (37 === a.keyCode ? b = "prev" : 39 === a.keyCode && (b = "next")), b && (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || (a.preventDefault ? a.preventDefault() : a.returnValue = !1, f[b]()))
            },
            Xa = function(a) {
                a && (X || W || ea || S) && (a.preventDefault(), a.stopPropagation())
            },
            Ya = function() {
                f.setScrollOffset(0, e.getScrollY())
            },
            Za = {},
            $a = 0,
            _a = function(a) {
                Za[a] && (Za[a].raf && I(Za[a].raf), $a--, delete Za[a])
            },
            ab = function(a) {
                Za[a] && _a(a), Za[a] || ($a++, Za[a] = {})
            },
            bb = function() {
                for (var a in Za) Za.hasOwnProperty(a) && _a(a)
            },
            cb = function(a, b, c, d, e, f, g) {
                var h, i = Da();
                ab(a);
                var j = function() {
                    if (Za[a]) {
                        if (h = Da() - i, h >= d) return _a(a), f(c), void(g && g());
                        f((c - b) * e(h / d) + b), Za[a].raf = H(j)
                    }
                };
                j()
            },
            db = {
                shout: Ca,
                listen: Ba,
                viewportSize: pa,
                options: i,
                isMainScrollAnimating: function() {
                    return ea
                },
                getZoomLevel: function() {
                    return s
                },
                getCurrentIndex: function() {
                    return m
                },
                isDragging: function() {
                    return U
                },
                isZooming: function() {
                    return _
                },
                setScrollOffset: function(a, b) {
                    ra.x = a, M = ra.y = b, Ca("updateScrollOffset", ra)
                },
                applyZoomPan: function(a, b, c, d) {
                    oa.x = b, oa.y = c, s = a, Ga(d)
                },
                init: function() {
                    if (!j && !k) {
                        var c;
                        f.framework = e, f.template = a, f.bg = e.getChildByClass(a, "pswp__bg"), J = a.className, j = !0, N = e.detectFeatures(), H = N.raf, I = N.caf, E = N.transform, L = N.oldIE, f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap"), f.container = e.getChildByClass(f.scrollWrap, "pswp__container"), n = f.container.style, f.itemHolders = y = [{
                            el: f.container.children[0],
                            wrap: 0,
                            index: -1
                        }, {
                            el: f.container.children[1],
                            wrap: 0,
                            index: -1
                        }, {
                            el: f.container.children[2],
                            wrap: 0,
                            index: -1
                        }], y[0].el.style.display = y[2].el.style.display = "none", Va(), r = {
                            resize: f.updateSize,
                            scroll: Ya,
                            keydown: Wa,
                            click: Xa
                        };
                        var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
                        for (N.animationName && N.transform && !d || (i.showAnimationDuration = i.hideAnimationDuration = 0), c = 0; c < va.length; c++) f["init" + va[c]]();
                        if (b) {
                            var g = f.ui = new b(f, e);
                            g.init()
                        }
                        Ca("firstUpdate"), m = m || i.index || 0, (isNaN(m) || 0 > m || m >= _b()) && (m = 0), f.currItem = $b(m), (N.isOldIOSPhone || N.isOldAndroid) && (ua = !1), a.setAttribute("aria-hidden", "false"), i.modal && (ua ? a.style.position = "fixed" : (a.style.position = "absolute", a.style.top = e.getScrollY() + "px")), void 0 === M && (Ca("initialLayout"), M = K = e.getScrollY());
                        var l = "pswp--open ";
                        for (i.mainClass && (l += i.mainClass + " "), i.showHideOpacity && (l += "pswp--animate_opacity "), l += G ? "pswp--touch" : "pswp--notouch", l += N.animationName ? " pswp--css_animation" : "", l += N.svg ? " pswp--svg" : "", e.addClass(a, l), f.updateSize(), o = -1, ta = null, c = 0; h > c; c++) Ia((c + o) * sa.x, y[c].el.style);
                        L || e.bind(f.scrollWrap, q, f), Ba("initialZoomInEnd", function() {
                            f.setContent(y[0], m - 1), f.setContent(y[2], m + 1), y[0].el.style.display = y[2].el.style.display = "block", i.focus && a.focus(), Pa()
                        }), f.setContent(y[1], m), f.updateCurrItem(), Ca("afterInit"), ua || (w = setInterval(function() {
                            $a || U || _ || s !== f.currItem.initialZoomLevel || f.updateSize()
                        }, 1e3)), e.addClass(a, "pswp--visible")
                    }
                },
                close: function() {
                    j && (j = !1, k = !0, Ca("close"), Qa(), bc(f.currItem, null, !0, f.destroy))
                },
                destroy: function() {
                    Ca("destroy"), Wb && clearTimeout(Wb), a.setAttribute("aria-hidden", "true"), a.className = J, w && clearInterval(w), e.unbind(f.scrollWrap, q, f), e.unbind(window, "scroll", f), yb(), bb(), Aa = null
                },
                panTo: function(a, b, c) {
                    c || (a > ca.min.x ? a = ca.min.x : a < ca.max.x && (a = ca.max.x), b > ca.min.y ? b = ca.min.y : b < ca.max.y && (b = ca.max.y)), oa.x = a, oa.y = b, Ga()
                },
                handleEvent: function(a) {
                    a = a || window.event, r[a.type] && r[a.type](a)
                },
                goTo: function(a) {
                    a = za(a);
                    var b = a - m;
                    ta = b, m = a, f.currItem = $b(m), qa -= b, Ja(sa.x * qa), bb(), ea = !1, f.updateCurrItem()
                },
                next: function() {
                    f.goTo(m + 1)
                },
                prev: function() {
                    f.goTo(m - 1)
                },
                updateCurrZoomItem: function(a) {
                    if (a && Ca("beforeChange", 0), y[1].el.children.length) {
                        var b = y[1].el.children[0];
                        da = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null
                    } else da = null;
                    ca = f.currItem.bounds, t = s = f.currItem.initialZoomLevel, oa.x = ca.center.x, oa.y = ca.center.y, a && Ca("afterChange")
                },
                invalidateCurrItems: function() {
                    x = !0;
                    for (var a = 0; h > a; a++) y[a].item && (y[a].item.needsUpdate = !0)
                },
                updateCurrItem: function(a) {
                    if (0 !== ta) {
                        var b, c = Math.abs(ta);
                        if (!(a && 2 > c)) {
                            f.currItem = $b(m), xa = !1, Ca("beforeChange", ta), c >= h && (o += ta + (ta > 0 ? -h : h), c = h);
                            for (var d = 0; c > d; d++) ta > 0 ? (b = y.shift(), y[h - 1] = b, o++, Ia((o + 2) * sa.x, b.el.style), f.setContent(b, m - c + d + 1 + 1)) : (b = y.pop(), y.unshift(b), o--, Ia(o * sa.x, b.el.style), f.setContent(b, m + c - d - 1 - 1));
                            if (da && 1 === Math.abs(ta)) {
                                var e = $b(z);
                                e.initialZoomLevel !== s && (hc(e, pa), lc(e), Ha(e))
                            }
                            ta = 0, f.updateCurrZoomItem(), z = m, Ca("afterChange")
                        }
                    }
                },
                updateSize: function(b) {
                    if (!ua && i.modal) {
                        var c = e.getScrollY();
                        if (M !== c && (a.style.top = c + "px", M = c), !b && wa.x === window.innerWidth && wa.y === window.innerHeight) return;
                        wa.x = window.innerWidth, wa.y = window.innerHeight, a.style.height = wa.y + "px"
                    }
                    if (pa.x = f.scrollWrap.clientWidth, pa.y = f.scrollWrap.clientHeight, Ya(), sa.x = pa.x + Math.round(pa.x * i.spacing), sa.y = pa.y, Ja(sa.x * qa), Ca("beforeResize"), void 0 !== o) {
                        for (var d, g, j, k = 0; h > k; k++) d = y[k], Ia((k + o) * sa.x, d.el.style), j = m + k - 1, i.loop && _b() > 2 && (j = za(j)), g = $b(j), g && (x || g.needsUpdate || !g.bounds) ? (f.cleanSlide(g), f.setContent(d, j), 1 === k && (f.currItem = g, f.updateCurrZoomItem(!0)), g.needsUpdate = !1) : -1 === d.index && j >= 0 && f.setContent(d, j), g && g.container && (hc(g, pa), lc(g), Ha(g));
                        x = !1
                    }
                    t = s = f.currItem.initialZoomLevel, ca = f.currItem.bounds, ca && (oa.x = ca.center.x, oa.y = ca.center.y, Ga(!0)), Ca("resize")
                },
                zoomTo: function(a, b, c, d, f) {
                    b && (t = s, tb.x = Math.abs(b.x) - oa.x, tb.y = Math.abs(b.y) - oa.y, La(na, oa));
                    var g = Ra(a, !1),
                        h = {};
                    Ua("x", g, h, a), Ua("y", g, h, a);
                    var i = s,
                        j = {
                            x: oa.x,
                            y: oa.y
                        };
                    Ma(h);
                    var k = function(b) {
                        1 === b ? (s = a, oa.x = h.x, oa.y = h.y) : (s = (a - i) * b + i, oa.x = (h.x - j.x) * b + j.x, oa.y = (h.y - j.y) * b + j.y), f && f(b), Ga(1 === b)
                    };
                    c ? cb("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1)
                }
            },
            eb = 30,
            fb = 10,
            gb = {},
            hb = {},
            ib = {},
            jb = {},
            kb = {},
            lb = [],
            mb = {},
            nb = [],
            ob = {},
            pb = 0,
            qb = la(),
            rb = 0,
            sb = la(),
            tb = la(),
            ub = la(),
            vb = function(a, b) {
                return a.x === b.x && a.y === b.y
            },
            wb = function(a, b) {
                return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g
            },
            xb = function(a, b) {
                return ob.x = Math.abs(a.x - b.x), ob.y = Math.abs(a.y - b.y), Math.sqrt(ob.x * ob.x + ob.y * ob.y)
            },
            yb = function() {
                Y && (I(Y), Y = null)
            },
            zb = function() {
                U && (Y = H(zb), Pb())
            },
            Ab = function() {
                return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel)
            },
            Bb = function(a, b) {
                return a && a !== document ? a.getAttribute("class") && a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1 ? !1 : b(a) ? a : Bb(a.parentNode, b) : !1
            },
            Cb = {},
            Db = function(a, b) {
                return Cb.prevent = !Bb(a.target, i.isClickableElement), Ca("preventDragEvent", a, b, Cb), Cb.prevent
            },
            Eb = function(a, b) {
                return b.x = a.pageX, b.y = a.pageY, b.id = a.identifier, b
            },
            Fb = function(a, b, c) {
                c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y)
            },
            Gb = function(a, b, c) {
                if (a - P > 50) {
                    var d = nb.length > 2 ? nb.shift() : {};
                    d.x = b, d.y = c, nb.push(d), P = a
                }
            },
            Hb = function() {
                var a = oa.y - f.currItem.initialPosition.y;
                return 1 - Math.abs(a / (pa.y / 2))
            },
            Ib = {},
            Jb = {},
            Kb = [],
            Lb = function(a) {
                for (; Kb.length > 0;) Kb.pop();
                return F ? (ka = 0, lb.forEach(function(a) {
                    0 === ka ? Kb[0] = a : 1 === ka && (Kb[1] = a), ka++
                })) : a.type.indexOf("touch") > -1 ? a.touches && a.touches.length > 0 && (Kb[0] = Eb(a.touches[0], Ib), a.touches.length > 1 && (Kb[1] = Eb(a.touches[1], Jb))) : (Ib.x = a.pageX, Ib.y = a.pageY, Ib.id = "", Kb[0] = Ib), Kb
            },
            Mb = function(a, b) {
                var c, d, e, g, h = 0,
                    j = oa[a] + b[a],
                    k = b[a] > 0,
                    l = sb.x + b.x,
                    m = sb.x - mb.x;
                return c = j > ca.min[a] || j < ca.max[a] ? i.panEndFriction : 1, j = oa[a] + b[a] * c, !i.allowPanToNext && s !== f.currItem.initialZoomLevel || (da ? "h" !== fa || "x" !== a || W || (k ? (j > ca.min[a] && (c = i.panEndFriction, h = ca.min[a] - j, d = ca.min[a] - na[a]), (0 >= d || 0 > m) && _b() > 1 ? (g = l, 0 > m && l > mb.x && (g = mb.x)) : ca.min.x !== ca.max.x && (e = j)) : (j < ca.max[a] && (c = i.panEndFriction, h = j - ca.max[a], d = na[a] - ca.max[a]), (0 >= d || m > 0) && _b() > 1 ? (g = l, m > 0 && l < mb.x && (g = mb.x)) : ca.min.x !== ca.max.x && (e = j))) : g = l, "x" !== a) ? void(ea || Z || s > f.currItem.fitRatio && (oa[a] += b[a] * c)) : (void 0 !== g && (Ja(g, !0), Z = g === mb.x ? !1 : !0), ca.min.x !== ca.max.x && (void 0 !== e ? oa.x = e : Z || (oa.x += b.x * c)), void 0 !== g)
            },
            Nb = function(a) {
                if (!("mousedown" === a.type && a.button > 0)) {
                    if (Zb) return void a.preventDefault();
                    if (!T || "mousedown" !== a.type) {
                        if (Db(a, !0) && a.preventDefault(), Ca("pointerDown"), F) {
                            var b = e.arraySearch(lb, a.pointerId, "id");
                            0 > b && (b = lb.length), lb[b] = {
                                x: a.pageX,
                                y: a.pageY,
                                id: a.pointerId
                            }
                        }
                        var c = Lb(a),
                            d = c.length;
                        $ = null, bb(), U && 1 !== d || (U = ga = !0, e.bind(window, p, f), R = ja = ha = S = Z = X = V = W = !1, fa = null, Ca("firstTouchStart", c), La(na, oa), ma.x = ma.y = 0, La(jb, c[0]), La(kb, jb), mb.x = sa.x * qa, nb = [{
                            x: jb.x,
                            y: jb.y
                        }], P = O = Da(), Ra(s, !0), yb(), zb()), !_ && d > 1 && !ea && !Z && (t = s, W = !1, _ = V = !0, ma.y = ma.x = 0, La(na, oa), La(gb, c[0]), La(hb, c[1]), Fb(gb, hb, ub), tb.x = Math.abs(ub.x) - oa.x, tb.y = Math.abs(ub.y) - oa.y, aa = ba = xb(gb, hb))
                    }
                }
            },
            Ob = function(a) {
                if (a.preventDefault(), F) {
                    var b = e.arraySearch(lb, a.pointerId, "id");
                    if (b > -1) {
                        var c = lb[b];
                        c.x = a.pageX, c.y = a.pageY
                    }
                }
                if (U) {
                    var d = Lb(a);
                    if (fa || X || _) $ = d;
                    else if (sb.x !== sa.x * qa) fa = "h";
                    else {
                        var f = Math.abs(d[0].x - jb.x) - Math.abs(d[0].y - jb.y);
                        Math.abs(f) >= fb && (fa = f > 0 ? "h" : "v", $ = d)
                    }
                }
            },
            Pb = function() {
                if ($) {
                    var a = $.length;
                    if (0 !== a)
                        if (La(gb, $[0]), ib.x = gb.x - jb.x, ib.y = gb.y - jb.y, _ && a > 1) {
                            if (jb.x = gb.x, jb.y = gb.y, !ib.x && !ib.y && vb($[1], hb)) return;
                            La(hb, $[1]), W || (W = !0, Ca("zoomGestureStarted"));
                            var b = xb(gb, hb),
                                c = Ub(b);
                            c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (ja = !0);
                            var d = 1,
                                e = Sa(),
                                g = Ta();
                            if (e > c)
                                if (i.pinchToClose && !ja && t <= f.currItem.initialZoomLevel) {
                                    var h = e - c,
                                        j = 1 - h / (e / 1.2);
                                    Ea(j), Ca("onPinchClose", j), ha = !0
                                } else d = (e - c) / e, d > 1 && (d = 1), c = e - d * (e / 3);
                            else c > g && (d = (c - g) / (6 * e), d > 1 && (d = 1), c = g + d * e);
                            0 > d && (d = 0), aa = b, Fb(gb, hb, qb), ma.x += qb.x - ub.x, ma.y += qb.y - ub.y, La(ub, qb), oa.x = Ka("x", c), oa.y = Ka("y", c), R = c > s, s = c, Ga()
                        } else {
                            if (!fa) return;
                            if (ga && (ga = !1, Math.abs(ib.x) >= fb && (ib.x -= $[0].x - kb.x), Math.abs(ib.y) >= fb && (ib.y -= $[0].y - kb.y)), jb.x = gb.x, jb.y = gb.y, 0 === ib.x && 0 === ib.y) return;
                            if ("v" === fa && i.closeOnVerticalDrag && !Ab()) {
                                ma.y += ib.y, oa.y += ib.y;
                                var k = Hb();
                                return S = !0, Ca("onVerticalDrag", k), Ea(k), void Ga()
                            }
                            Gb(Da(), gb.x, gb.y), X = !0, ca = f.currItem.bounds;
                            var l = Mb("x", ib);
                            l || (Mb("y", ib), Ma(oa), Ga())
                        }
                }
            },
            Qb = function(a) {
                if (N.isOldAndroid) {
                    if (T && "mouseup" === a.type) return;
                    a.type.indexOf("touch") > -1 && (clearTimeout(T), T = setTimeout(function() {
                        T = 0
                    }, 600))
                }
                Ca("pointerUp"), Db(a, !1) && a.preventDefault();
                var b;
                if (F) {
                    var c = e.arraySearch(lb, a.pointerId, "id");
                    if (c > -1)
                        if (b = lb.splice(c, 1)[0], navigator.pointerEnabled) b.type = a.pointerType || "mouse";
                        else {
                            var d = {
                                4: "mouse",
                                2: "touch",
                                3: "pen"
                            };
                            b.type = d[a.pointerType], b.type || (b.type = a.pointerType || "mouse")
                        }
                }
                var g, h = Lb(a),
                    j = h.length;
                if ("mouseup" === a.type && (j = 0), 2 === j) return $ = null, !0;
                1 === j && La(kb, h[0]), 0 !== j || fa || ea || (b || ("mouseup" === a.type ? b = {
                    x: a.pageX,
                    y: a.pageY,
                    type: "mouse"
                } : a.changedTouches && a.changedTouches[0] && (b = {
                    x: a.changedTouches[0].pageX,
                    y: a.changedTouches[0].pageY,
                    type: "touch"
                })), Ca("touchRelease", a, b));
                var k = -1;
                if (0 === j && (U = !1, e.unbind(window, p, f), yb(), _ ? k = 0 : -1 !== rb && (k = Da() - rb)), rb = 1 === j ? Da() : -1, g = -1 !== k && 150 > k ? "zoom" : "swipe", _ && 2 > j && (_ = !1, 1 === j && (g = "zoomPointerUp"), Ca("zoomGestureEnded")), $ = null, X || W || ea || S)
                    if (bb(), Q || (Q = Rb()), Q.calculateSwipeSpeed("x"), S) {
                        var l = Hb();
                        if (l < i.verticalDragRange) f.close();
                        else {
                            var m = oa.y,
                                n = ia;
                            cb("verticalDrag", 0, 1, 300, e.easing.cubic.out, function(a) {
                                oa.y = (f.currItem.initialPosition.y - m) * a + m, Ea((1 - n) * a + n), Ga()
                            }), Ca("onVerticalDrag", 1)
                        }
                    } else {
                        if ((Z || ea) && 0 === j) {
                            var o = Tb(g, Q);
                            if (o) return;
                            g = "zoomPointerUp"
                        }
                        if (!ea) return "swipe" !== g ? void Vb() : void(!Z && s > f.currItem.fitRatio && Sb(Q))
                    }
            },
            Rb = function() {
                var a, b, c = {
                    lastFlickOffset: {},
                    lastFlickDist: {},
                    lastFlickSpeed: {},
                    slowDownRatio: {},
                    slowDownRatioReverse: {},
                    speedDecelerationRatio: {},
                    speedDecelerationRatioAbs: {},
                    distanceOffset: {},
                    backAnimDestination: {},
                    backAnimStarted: {},
                    calculateSwipeSpeed: function(d) {
                        nb.length > 1 ? (a = Da() - P + 50, b = nb[nb.length - 2][d]) : (a = Da() - O, b = kb[d]), c.lastFlickOffset[d] = jb[d] - b, c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d]), c.lastFlickDist[d] > 20 ? c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a : c.lastFlickSpeed[d] = 0, Math.abs(c.lastFlickSpeed[d]) < .1 && (c.lastFlickSpeed[d] = 0), c.slowDownRatio[d] = .95, c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d], c.speedDecelerationRatio[d] = 1
                    },
                    calculateOverBoundsAnimOffset: function(a, b) {
                        c.backAnimStarted[a] || (oa[a] > ca.min[a] ? c.backAnimDestination[a] = ca.min[a] : oa[a] < ca.max[a] && (c.backAnimDestination[a] = ca.max[a]), void 0 !== c.backAnimDestination[a] && (c.slowDownRatio[a] = .7, c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a], c.speedDecelerationRatioAbs[a] < .05 && (c.lastFlickSpeed[a] = 0, c.backAnimStarted[a] = !0, cb("bounceZoomPan" + a, oa[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, function(b) {
                            oa[a] = b, Ga()
                        }))))
                    },
                    calculateAnimOffset: function(a) {
                        c.backAnimStarted[a] || (c.speedDecelerationRatio[a] = c.speedDecelerationRatio[a] * (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - c.slowDownRatioReverse[a] * c.timeDiff / 10), c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]), c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff, oa[a] += c.distanceOffset[a])
                    },
                    panAnimLoop: function() {
                        return Za.zoomPan && (Za.zoomPan.raf = H(c.panAnimLoop), c.now = Da(), c.timeDiff = c.now - c.lastNow, c.lastNow = c.now, c.calculateAnimOffset("x"), c.calculateAnimOffset("y"), Ga(), c.calculateOverBoundsAnimOffset("x"), c.calculateOverBoundsAnimOffset("y"), c.speedDecelerationRatioAbs.x < .05 && c.speedDecelerationRatioAbs.y < .05) ? (oa.x = Math.round(oa.x), oa.y = Math.round(oa.y), Ga(), void _a("zoomPan")) : void 0
                    }
                };
                return c
            },
            Sb = function(a) {
                return a.calculateSwipeSpeed("y"), ca = f.currItem.bounds, a.backAnimDestination = {}, a.backAnimStarted = {}, Math.abs(a.lastFlickSpeed.x) <= .05 && Math.abs(a.lastFlickSpeed.y) <= .05 ? (a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0, a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), !0) : (ab("zoomPan"), a.lastNow = Da(), void a.panAnimLoop())
            },
            Tb = function(a, b) {
                var c;
                ea || (pb = m);
                var d;
                if ("swipe" === a) {
                    var g = jb.x - kb.x,
                        h = b.lastFlickDist.x < 10;
                    g > eb && (h || b.lastFlickOffset.x > 20) ? d = -1 : -eb > g && (h || b.lastFlickOffset.x < -20) && (d = 1)
                }
                var j;
                d && (m += d, 0 > m ? (m = i.loop ? _b() - 1 : 0, j = !0) : m >= _b() && (m = i.loop ? 0 : _b() - 1, j = !0), (!j || i.loop) && (ta += d, qa -= d, c = !0));
                var k, l = sa.x * qa,
                    n = Math.abs(l - sb.x);
                return c || l > sb.x == b.lastFlickSpeed.x > 0 ? (k = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333, k = Math.min(k, 400), k = Math.max(k, 250)) : k = 333, pb === m && (c = !1), ea = !0, Ca("mainScrollAnimStart"), cb("mainScroll", sb.x, l, k, e.easing.cubic.out, Ja, function() {
                    bb(), ea = !1, pb = -1, (c || pb !== m) && f.updateCurrItem(), Ca("mainScrollAnimComplete")
                }), c && f.updateCurrItem(!0), c
            },
            Ub = function(a) {
                return 1 / ba * a * t
            },
            Vb = function() {
                var a = s,
                    b = Sa(),
                    c = Ta();
                b > s ? a = b : s > c && (a = c);
                var d, g = 1,
                    h = ia;
                return ha && !R && !ja && b > s ? (f.close(), !0) : (ha && (d = function(a) {
                    Ea((g - h) * a + h)
                }), f.zoomTo(a, 0, 200, e.easing.cubic.out, d), !0)
            };
        ya("Gestures", {
            publicMethods: {
                initGestures: function() {
                    var a = function(a, b, c, d, e) {
                        A = a + b, B = a + c, C = a + d, D = e ? a + e : ""
                    };
                    F = N.pointerEvent, F && N.touch && (N.touch = !1), F ? navigator.pointerEnabled ? a("pointer", "down", "move", "up", "cancel") : a("MSPointer", "Down", "Move", "Up", "Cancel") : N.touch ? (a("touch", "start", "move", "end", "cancel"), G = !0) : a("mouse", "down", "move", "up"), p = B + " " + C + " " + D, q = A, F && !G && (G = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), f.likelyTouchDevice = G, r[A] = Nb, r[B] = Ob, r[C] = Qb, D && (r[D] = r[C]), N.touch && (q += " mousedown", p += " mousemove mouseup", r.mousedown = r[A], r.mousemove = r[B], r.mouseup = r[C]), G || (i.allowPanToNext = !1)
                }
            }
        });
        var Wb, Xb, Yb, Zb, $b, _b, ac, bc = function(b, c, d, g) {
                Wb && clearTimeout(Wb), Zb = !0, Yb = !0;
                var h;
                b.initialLayout ? (h = b.initialLayout, b.initialLayout = null) : h = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
                var j = d ? i.hideAnimationDuration : i.showAnimationDuration,
                    k = function() {
                        _a("initialZoom"), d ? (f.template.removeAttribute("style"), f.bg.removeAttribute("style")) : (Ea(1), c && (c.style.display = "block"), e.addClass(a, "pswp--animated-in"), Ca("initialZoom" + (d ? "OutEnd" : "InEnd"))), g && g(), Zb = !1
                    };
                if (!j || !h || void 0 === h.x) return Ca("initialZoom" + (d ? "Out" : "In")), s = b.initialZoomLevel, La(oa, b.initialPosition), Ga(), a.style.opacity = d ? 0 : 1, Ea(1), void(j ? setTimeout(function() {
                    k()
                }, j) : k());
                var n = function() {
                    var c = l,
                        g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
                    b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"), d || (s = h.w / b.w, oa.x = h.x, oa.y = h.y - K, f[g ? "template" : "bg"].style.opacity = .001, Ga()), ab("initialZoom"), d && !c && e.removeClass(a, "pswp--animated-in"), g && (d ? e[(c ? "remove" : "add") + "Class"](a, "pswp--animate_opacity") : setTimeout(function() {
                        e.addClass(a, "pswp--animate_opacity")
                    }, 30)), Wb = setTimeout(function() {
                        if (Ca("initialZoom" + (d ? "Out" : "In")), d) {
                            var f = h.w / b.w,
                                i = {
                                    x: oa.x,
                                    y: oa.y
                                },
                                l = s,
                                m = ia,
                                n = function(b) {
                                    1 === b ? (s = f, oa.x = h.x, oa.y = h.y - M) : (s = (f - l) * b + l, oa.x = (h.x - i.x) * b + i.x, oa.y = (h.y - M - i.y) * b + i.y), Ga(), g ? a.style.opacity = 1 - b : Ea(m - b * m)
                                };
                            c ? cb("initialZoom", 0, 1, j, e.easing.cubic.out, n, k) : (n(1), Wb = setTimeout(k, j + 20))
                        } else s = b.initialZoomLevel, La(oa, b.initialPosition), Ga(), Ea(1), g ? a.style.opacity = 1 : Ea(1), Wb = setTimeout(k, j + 20)
                    }, d ? 25 : 90)
                };
                n()
            },
            cc = {},
            dc = [],
            ec = {
                index: 0,
                errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                forceProgressiveLoading: !1,
                preload: [1, 1],
                getNumItemsFn: function() {
                    return Xb.length
                }
            },
            fc = function() {
                return {
                    center: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: 0,
                        y: 0
                    },
                    min: {
                        x: 0,
                        y: 0
                    }
                }
            },
            gc = function(a, b, c) {
                var d = a.bounds;
                d.center.x = Math.round((cc.x - b) / 2), d.center.y = Math.round((cc.y - c) / 2) + a.vGap.top, d.max.x = b > cc.x ? Math.round(cc.x - b) : d.center.x, d.max.y = c > cc.y ? Math.round(cc.y - c) + a.vGap.top : d.center.y, d.min.x = b > cc.x ? 0 : d.center.x, d.min.y = c > cc.y ? a.vGap.top : d.center.y
            },
            hc = function(a, b, c) {
                if (a.src && !a.loadError) {
                    var d = !c;
                    if (d && (a.vGap || (a.vGap = {
                            top: 0,
                            bottom: 0
                        }), Ca("parseVerticalMargin", a)), cc.x = b.x, cc.y = b.y - a.vGap.top - a.vGap.bottom, d) {
                        var e = cc.x / a.w,
                            f = cc.y / a.h;
                        a.fitRatio = f > e ? e : f;
                        var g = i.scaleMode;
                        "orig" === g ? c = 1 : "fit" === g && (c = a.fitRatio), c > 1 && (c = 1), a.initialZoomLevel = c, a.bounds || (a.bounds = fc())
                    }
                    if (!c) return;
                    return gc(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), a.bounds
                }
                return a.w = a.h = 0, a.initialZoomLevel = a.fitRatio = 1, a.bounds = fc(), a.initialPosition = a.bounds.center, a.bounds
            },
            ic = function(a, b, c, d, e, g) {
                b.loadError || d && (b.imageAppended = !0, lc(b, d, b === f.currItem && xa), c.appendChild(d), g && setTimeout(function() {
                    b && b.loaded && b.placeholder && (b.placeholder.style.display = "none", b.placeholder = null)
                }, 500))
            },
            jc = function(a) {
                a.loading = !0, a.loaded = !1;
                var b = a.img = e.createEl("pswp__img", "img"),
                    c = function() {
                        a.loading = !1, a.loaded = !0, a.loadComplete ? a.loadComplete(a) : a.img = null, b.onload = b.onerror = null, b = null
                    };
                return b.onload = c, b.onerror = function() {
                    a.loadError = !0, c()
                }, b.src = a.src, b
            },
            kc = function(a, b) {
                return a.src && a.loadError && a.container ? (b && (a.container.innerHTML = ""), a.container.innerHTML = i.errorMsg.replace("%url%", a.src), !0) : void 0
            },
            lc = function(a, b, c) {
                if (a.src) {
                    b || (b = a.container.lastChild);
                    var d = c ? a.w : Math.round(a.w * a.fitRatio),
                        e = c ? a.h : Math.round(a.h * a.fitRatio);
                    a.placeholder && !a.loaded && (a.placeholder.style.width = d + "px", a.placeholder.style.height = e + "px"), b.style.width = d + "px", b.style.height = e + "px"
                }
            },
            mc = function() {
                if (dc.length) {
                    for (var a, b = 0; b < dc.length; b++) a = dc[b], a.holder.index === a.index && ic(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
                    dc = []
                }
            };
        ya("Controller", {
            publicMethods: {
                lazyLoadItem: function(a) {
                    a = za(a);
                    var b = $b(a);
                    b && (!b.loaded && !b.loading || x) && (Ca("gettingData", a, b), b.src && jc(b))
                },
                initController: function() {
                    e.extend(i, ec, !0), f.items = Xb = c, $b = f.getItemAt, _b = i.getNumItemsFn, ac = i.loop, _b() < 3 && (i.loop = !1), Ba("beforeChange", function(a) {
                        var b, c = i.preload,
                            d = null === a ? !0 : a >= 0,
                            e = Math.min(c[0], _b()),
                            g = Math.min(c[1], _b());
                        for (b = 1;
                            (d ? g : e) >= b; b++) f.lazyLoadItem(m + b);
                        for (b = 1;
                            (d ? e : g) >= b; b++) f.lazyLoadItem(m - b)
                    }), Ba("initialLayout", function() {
                        f.currItem.initialLayout = i.getThumbBoundsFn && i.getThumbBoundsFn(m)
                    }), Ba("mainScrollAnimComplete", mc), Ba("initialZoomInEnd", mc), Ba("destroy", function() {
                        for (var a, b = 0; b < Xb.length; b++) a = Xb[b], a.container && (a.container = null), a.placeholder && (a.placeholder = null), a.img && (a.img = null), a.preloader && (a.preloader = null), a.loadError && (a.loaded = a.loadError = !1);
                        dc = null
                    })
                },
                getItemAt: function(a) {
                    return a >= 0 && void 0 !== Xb[a] ? Xb[a] : !1
                },
                allowProgressiveImg: function() {
                    return i.forceProgressiveLoading || !G || i.mouseUsed || screen.width > 1200
                },
                setContent: function(a, b) {
                    i.loop && (b = za(b));
                    var c = f.getItemAt(a.index);
                    c && (c.container = null);
                    var d, g = f.getItemAt(b);
                    if (!g) return void(a.el.innerHTML = "");
                    Ca("gettingData", b, g), a.index = b, a.item = g;
                    var h = g.container = e.createEl("pswp__zoom-wrap");
                    if (!g.src && g.html && (g.html.tagName ? h.appendChild(g.html) : h.innerHTML = g.html), kc(g), hc(g, pa), !g.src || g.loadError || g.loaded) g.src && !g.loadError && (d = e.createEl("pswp__img", "img"), d.style.opacity = 1, d.src = g.src, lc(g, d), ic(b, g, h, d, !0));
                    else {
                        if (g.loadComplete = function(c) {
                                if (j) {
                                    if (a && a.index === b) {
                                        if (kc(c, !0)) return c.loadComplete = c.img = null, hc(c, pa), Ha(c), void(a.index === m && f.updateCurrZoomItem());
                                        c.imageAppended ? !Zb && c.placeholder && (c.placeholder.style.display = "none", c.placeholder = null) : N.transform && (ea || Zb) ? dc.push({
                                            item: c,
                                            baseDiv: h,
                                            img: c.img,
                                            index: b,
                                            holder: a,
                                            clearPlaceholder: !0
                                        }) : ic(b, c, h, c.img, ea || Zb, !0)
                                    }
                                    c.loadComplete = null, c.img = null, Ca("imageLoadComplete", b, c)
                                }
                            }, e.features.transform) {
                            var k = "pswp__img pswp__img--placeholder";
                            k += g.msrc ? "" : " pswp__img--placeholder--blank";
                            var l = e.createEl(k, g.msrc ? "img" : "");
                            g.msrc && (l.src = g.msrc), lc(g, l), h.appendChild(l), g.placeholder = l
                        }
                        g.loading || jc(g), f.allowProgressiveImg() && (!Yb && N.transform ? dc.push({
                            item: g,
                            baseDiv: h,
                            img: g.img,
                            index: b,
                            holder: a
                        }) : ic(b, g, h, g.img, !0, !0))
                    }
                    Yb || b !== m ? Ha(g) : (da = h.style, bc(g, d || g.img)), a.el.innerHTML = "", a.el.appendChild(h)
                },
                cleanSlide: function(a) {
                    a.img && (a.img.onload = a.img.onerror = null), a.loaded = a.loading = a.img = a.imageAppended = !1
                }
            }
        });
        var nc, oc = {},
            pc = function(a, b, c) {
                var d = document.createEvent("CustomEvent"),
                    e = {
                        origEvent: a,
                        target: a.target,
                        releasePoint: b,
                        pointerType: c || "touch"
                    };
                d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d)
            };
        ya("Tap", {
            publicMethods: {
                initTap: function() {
                    Ba("firstTouchStart", f.onTapStart), Ba("touchRelease", f.onTapRelease), Ba("destroy", function() {
                        oc = {}, nc = null
                    })
                },
                onTapStart: function(a) {
                    a.length > 1 && (clearTimeout(nc), nc = null)
                },
                onTapRelease: function(a, b) {
                    if (b && !X && !V && !$a) {
                        var c = b;
                        if (nc && (clearTimeout(nc), nc = null, wb(c, oc))) return void Ca("doubleTap", c);
                        if ("mouse" === b.type) return void pc(a, b, "mouse");
                        var d = a.target.tagName.toUpperCase();
                        if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap")) return void pc(a, b);
                        La(oc, c), nc = setTimeout(function() {
                            pc(a, b), nc = null
                        }, 300)
                    }
                }
            }
        });
        var qc;
        ya("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function() {
                    L || (G ? Ba("mouseUsed", function() {
                        f.setupDesktopZoom()
                    }) : f.setupDesktopZoom(!0))
                },
                setupDesktopZoom: function(b) {
                    qc = {};
                    var c = "wheel mousewheel DOMMouseScroll";
                    Ba("bindEvents", function() {
                        e.bind(a, c, f.handleMouseWheel)
                    }), Ba("unbindEvents", function() {
                        qc && e.unbind(a, c, f.handleMouseWheel)
                    }), f.mouseZoomedIn = !1;
                    var d, g = function() {
                            f.mouseZoomedIn && (e.removeClass(a, "pswp--zoomed-in"), f.mouseZoomedIn = !1), 1 > s ? e.addClass(a, "pswp--zoom-allowed") : e.removeClass(a, "pswp--zoom-allowed"), h()
                        },
                        h = function() {
                            d && (e.removeClass(a, "pswp--dragging"), d = !1)
                        };
                    Ba("resize", g), Ba("afterChange", g), Ba("pointerDown", function() {
                        f.mouseZoomedIn && (d = !0, e.addClass(a, "pswp--dragging"))
                    }), Ba("pointerUp", h), b || g()
                },
                handleMouseWheel: function(a) {
                    if (s <= f.currItem.fitRatio) return i.modal && (!i.closeOnScroll || $a || U ? a.preventDefault() : E && Math.abs(a.deltaY) > 2 && (l = !0, f.close())), !0;
                    if (a.stopPropagation(), qc.x = 0, "deltaX" in a) 1 === a.deltaMode ? (qc.x = 18 * a.deltaX, qc.y = 18 * a.deltaY) : (qc.x = a.deltaX, qc.y = a.deltaY);
                    else if ("wheelDelta" in a) a.wheelDeltaX && (qc.x = -.16 * a.wheelDeltaX), a.wheelDeltaY ? qc.y = -.16 * a.wheelDeltaY : qc.y = -.16 * a.wheelDelta;
                    else {
                        if (!("detail" in a)) return;
                        qc.y = a.detail
                    }
                    Ra(s, !0);
                    var b = oa.x - qc.x,
                        c = oa.y - qc.y;
                    (i.modal || b <= ca.min.x && b >= ca.max.x && c <= ca.min.y && c >= ca.max.y) && a.preventDefault(), f.panTo(b, c)
                },
                toggleDesktopZoom: function(b) {
                    b = b || {
                        x: pa.x / 2 + ra.x,
                        y: pa.y / 2 + ra.y
                    };
                    var c = i.getDoubleTapZoom(!0, f.currItem),
                        d = s === c;
                    f.mouseZoomedIn = !d, f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333), e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in")
                }
            }
        });
        var rc, sc, tc, uc, vc, wc, xc, yc, zc, Ac, Bc, Cc, Dc = {
                history: !0,
                galleryUID: 1
            },
            Ec = function() {
                return Bc.hash.substring(1)
            },
            Fc = function() {
                rc && clearTimeout(rc), tc && clearTimeout(tc)
            },
            Gc = function() {
                var a = Ec(),
                    b = {};
                if (a.length < 5) return b;
                var c, d = a.split("&");
                for (c = 0; c < d.length; c++)
                    if (d[c]) {
                        var e = d[c].split("=");
                        e.length < 2 || (b[e[0]] = e[1])
                    }
                if (i.galleryPIDs) {
                    var f = b.pid;
                    for (b.pid = 0, c = 0; c < Xb.length; c++)
                        if (Xb[c].pid === f) {
                            b.pid = c;
                            break
                        }
                } else b.pid = parseInt(b.pid, 10) - 1;
                return b.pid < 0 && (b.pid = 0), b
            },
            Hc = function() {
                if (tc && clearTimeout(tc), $a || U) return void(tc = setTimeout(Hc, 500));
                uc ? clearTimeout(sc) : uc = !0;
                var a = m + 1,
                    b = $b(m);
                b.hasOwnProperty("pid") && (a = b.pid);
                var c = xc + "&gid=" + i.galleryUID + "&pid=" + a;
                yc || -1 === Bc.hash.indexOf(c) && (Ac = !0);
                var d = Bc.href.split("#")[0] + "#" + c;
                Cc ? "#" + c !== window.location.hash && history[yc ? "replaceState" : "pushState"]("", document.title, d) : yc ? Bc.replace(d) : Bc.hash = c, yc = !0, sc = setTimeout(function() {
                    uc = !1
                }, 60)
            };
        ya("History", {
            publicMethods: {
                initHistory: function() {
                    if (e.extend(i, Dc, !0), i.history) {
                        Bc = window.location, Ac = !1, zc = !1, yc = !1, xc = Ec(), Cc = "pushState" in history, xc.indexOf("gid=") > -1 && (xc = xc.split("&gid=")[0], xc = xc.split("?gid=")[0]), Ba("afterChange", f.updateURL), Ba("unbindEvents", function() {
                            e.unbind(window, "hashchange", f.onHashChange)
                        });
                        var a = function() {
                            wc = !0, zc || (Ac ? history.back() : xc ? Bc.hash = xc : Cc ? history.pushState("", document.title, Bc.pathname + Bc.search) : Bc.hash = ""), Fc()
                        };
                        Ba("unbindEvents", function() {
                            l && a()
                        }), Ba("destroy", function() {
                            wc || a()
                        }), Ba("firstUpdate", function() {
                            m = Gc().pid
                        });
                        var b = xc.indexOf("pid=");
                        b > -1 && (xc = xc.substring(0, b), "&" === xc.slice(-1) && (xc = xc.slice(0, -1))), setTimeout(function() {
                            j && e.bind(window, "hashchange", f.onHashChange)
                        }, 40)
                    }
                },
                onHashChange: function() {
                    return Ec() === xc ? (zc = !0, void f.close()) : void(uc || (vc = !0, f.goTo(Gc().pid), vc = !1))
                },
                updateURL: function() {
                    Fc(), vc || (yc ? rc = setTimeout(Hc, 800) : Hc())
                }
            }
        }), e.extend(f, db)
    };
    return a
});