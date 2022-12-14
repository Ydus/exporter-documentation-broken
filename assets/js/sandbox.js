(() => { var e = { 866: (e, t, n) => { "use strict";
                    n.r(t), n.d(t, { SandpackClient: () => f, SandpackLogLevel: () => u, addPackageJSONIfNeeded: () => c, createPackageJSON: () => s, extractErrorDetails: () => d }); var r = n(313),
                        i = n(799),
                        o = n.n(i),
                        a = '[sandpack-client]: "dependencies" was not specified - provide either a package.json or a "dependencies" value';

                    function s(e = {}, t = {}, n = "/index.js") { return JSON.stringify({ name: "sandpack-project", main: n, dependencies: e, devDependencies: t }, null, 2) }

                    function c(e, t, n, r) { var i, o; let c = {...e },
                            d = c["/package.json"] ? "/package.json" : c["package.json"] ? "package.json" : void 0; if (!d) { if (!t) throw new Error(a); if (!r) throw new Error('[sandpack-client]: "entry" was not specified - provide either a package.json with the "main" field or na "entry" value'); return c["/package.json"] = { code: s(t, n, r) }, c } if (d) { let e = JSON.parse(c[d].code); if (!t && !e.dependencies) throw new Error(a);
                            t && (e.dependencies = {...null != (i = e.dependencies) ? i : {}, ...null != t ? t : {} }), n && (e.devDependencies = {...null != (o = e.devDependencies) ? o : {}, ...null != n ? n : {} }), r && !e.main && (e.main = r), c[d] = { code: JSON.stringify(e, null, 2) } } return c }

                    function d(e) { if ("SyntaxError" === e.title) { let { title: t, path: n, message: r, line: i, column: o } = e; return { title: t, path: n, message: r, line: i, column: o } } let t = function(e) { if (e) return e.find((e => !!e._originalFileName)) }(e.payload.frames); if (!t) return { message: e.message }; let n = function(e) { let t = e._originalScriptCode[e._originalScriptCode.length - 1].lineNumber.toString().length,
                                    n = 2 + t + 3 + e._originalColumnNumber; return e._originalScriptCode.reduce(((e, r) => { let i = r.highlight ? ">" : " ",
                                        o = r.lineNumber.toString().length === t ? `${r.lineNumber}` : ` ${r.lineNumber}`,
                                        a = r.highlight ? "\n" + " ".repeat(n) + "^" : ""; return e + "\n" + i + " " + o + " | " + r.content + a }), "") }(t),
                            r = function(e) { return e ? ` (${e._originalLineNumber}:${e._originalColumnNumber})` : "" }(t); return { message: l(t._originalFileName, e.message, r, n), title: e.title, path: t._originalFileName, line: t._originalLineNumber, column: t._originalColumnNumber } }

                    function l(e, t, n, r) { return `${e}: ${t}${n}\n${r}` } var u, h, p = `https://${"1.2.2".replace(/\./g,"-")}-sandpack.codesandbox.io/`,
                        f = class { constructor(e, t, n = {}) { var r; if (this.getTranspilerContext = () => new Promise((e => { let t = this.listen((n => { "transpiler-context" === n.type && (e(n.data), t()) }));
                                        this.dispatch({ type: "get-transpiler-context" }) })), this.options = n, this.sandboxInfo = t, this.bundlerURL = n.bundlerURL || p, this.bundlerState = void 0, this.errors = [], this.status = "initializing", "string" == typeof e) { this.selector = e; let t = document.querySelector(e); if (!t) throw new Error(`[sandpack-client]: the element '${e}' was not found`);
                                    this.element = t, this.iframe = document.createElement("iframe"), this.initializeElement() } else this.element = e, this.iframe = e;
                                this.iframe.getAttribute("sandbox") || this.iframe.setAttribute("sandbox", "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"); let i = n.startRoute ? new URL(n.startRoute, this.bundlerURL).toString() : this.bundlerURL;
                                null == (r = this.iframe.contentWindow) || r.location.replace(i), this.iframeProtocol = new class { constructor(e, t) { this.globalListeners = {}, this.globalListenersCount = 0, this.channelListeners = {}, this.channelListenersCount = 0, this.channelId = Math.floor(1e6 * Math.random()), this.frameWindow = e.contentWindow, this.origin = t, this.globalListeners = [], this.channelListeners = [], this.eventListener = this.eventListener.bind(this), "undefined" != typeof window && window.addEventListener("message", this.eventListener) }
                                    cleanup() { window.removeEventListener("message", this.eventListener), this.globalListeners = {}, this.channelListeners = {}, this.globalListenersCount = 0, this.channelListenersCount = 0 }
                                    register() {!this.frameWindow || this.frameWindow.postMessage({ type: "register-frame", origin: document.location.origin, id: this.channelId }, this.origin) }
                                    dispatch(e) {!this.frameWindow || this.frameWindow.postMessage({ $id: this.channelId, codesandbox: !0, ...e }, this.origin) }
                                    globalListen(e) { if ("function" != typeof e) return () => {}; let t = this.globalListenersCount; return this.globalListeners[t] = e, this.globalListenersCount++, () => { delete this.globalListeners[t] } }
                                    channelListen(e) { if ("function" != typeof e) return () => {}; let t = this.channelListenersCount; return this.channelListeners[t] = e, this.channelListenersCount++, () => { delete this.channelListeners[t] } }
                                    eventListener(e) { if (e.source !== this.frameWindow) return; let t = e.data;!t.codesandbox || (Object.values(this.globalListeners).forEach((e => e(t))), t.$id === this.channelId && Object.values(this.channelListeners).forEach((e => e(t)))) } }(this.iframe, this.bundlerURL), this.unsubscribeGlobalListener = this.iframeProtocol.globalListen((e => { "initialized" !== e.type || !this.iframe.contentWindow || (this.iframeProtocol.register(), this.options.fileResolver && (this.fileResolverProtocol = new class { constructor(e, t, n) { this.type = e, this.handleMessage = t, this.protocol = n, this._disposeMessageListener = this.protocol.channelListen((async e => { if (e.type === this.getTypeId() && e.method) { let t = e; try { let e = await this.handleMessage(t),
                                                            n = { type: this.getTypeId(), msgId: t.msgId, result: e };
                                                        this.protocol.dispatch(n) } catch (e) { let n = { type: this.getTypeId(), msgId: t.msgId, error: { message: e.message } };
                                                        this.protocol.dispatch(n) } } })) }
                                        getTypeId() { return `protocol-${this.type}` }
                                        dispose() { this._disposeMessageListener() } }("fs", (async e => { if ("isFile" === e.method) return this.options.fileResolver.isFile(e.params[0]); if ("readFile" === e.method) return this.options.fileResolver.readFile(e.params[0]); throw new Error("Method not supported") }), this.iframeProtocol)), this.updatePreview(this.sandboxInfo, !0)) })), this.unsubscribeChannelListener = this.iframeProtocol.channelListen((e => { switch (e.type) {
                                        case "start":
                                            this.errors = []; break;
                                        case "status":
                                            this.status = e.status; break;
                                        case "action":
                                            "show-error" === e.action && (this.errors = [...this.errors, d(e)]); break;
                                        case "state":
                                            this.bundlerState = e.state } })) }
                            cleanup() { this.unsubscribeChannelListener(), this.unsubscribeGlobalListener(), this.iframeProtocol.cleanup() }
                            updateOptions(e) { o()(this.options, e) || (this.options = e, this.updatePreview()) }
                            updatePreview(e = this.sandboxInfo, t) { var n, i, o, a;
                                this.sandboxInfo = {...this.sandboxInfo, ...e }; let c = this.getFiles(),
                                    d = Object.keys(c).reduce(((e, t) => ({...e, [t]: { code: c[t].code, path: t } })), {}),
                                    l = JSON.parse(s(this.sandboxInfo.dependencies, this.sandboxInfo.devDependencies, this.sandboxInfo.entry)); try { l = JSON.parse(c["/package.json"].code) } catch (e) { console.error("[sandpack-client]: could not parse package.json file: " + e.message) } let h = Object.keys(c).reduce(((e, t) => ({...e, [t]: { content: c[t].code, path: t } })), {});
                                this.dispatch({ type: "compile", codesandbox: !0, version: 3, isInitializationCompile: t, modules: d, reactDevTools: this.options.reactDevTools, externalResources: this.options.externalResources || [], hasFileResolver: Boolean(this.options.fileResolver), disableDependencyPreprocessing: this.sandboxInfo.disableDependencyPreprocessing, template: this.sandboxInfo.template || (0, r.t4)(l, h), showOpenInCodeSandbox: null == (n = this.options.showOpenInCodeSandbox) || n, showErrorScreen: null == (i = this.options.showErrorScreen) || i, showLoadingScreen: null == (o = this.options.showLoadingScreen) || o, skipEval: this.options.skipEval || !1, clearConsoleDisabled: !this.options.clearConsoleOnFirstCompile, logLevel: null != (a = this.options.logLevel) ? a : u.Info, customNpmRegistries: this.options.customNpmRegistries }) }
                            dispatch(e) { this.iframeProtocol.dispatch(e) }
                            listen(e) { return this.iframeProtocol.channelListen(e) }
                            getCodeSandboxURL() { let e = this.getFiles(),
                                    t = Object.keys(e).reduce(((t, n) => ({...t, [n.replace("/", "")]: { content: e[n].code, isBinary: !1 } })), {}); return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1", { method: "POST", body: JSON.stringify({ files: t }), headers: { Accept: "application/json", "Content-Type": "application/json" } }).then((e => e.json())).then((e => ({ sandboxId: e.sandbox_id, editorUrl: `https://codesandbox.io/s/${e.sandbox_id}`, embedUrl: `https://codesandbox.io/embed/${e.sandbox_id}` }))) }
                            getFiles() { let { sandboxInfo: e } = this; return void 0 === e.files["/package.json"] ? c(e.files, e.dependencies, e.devDependencies, e.entry) : this.sandboxInfo.files }
                            initializeElement() { if (this.iframe.style.border = "0", this.iframe.style.width = this.options.width || "100%", this.iframe.style.height = this.options.height || "100%", this.iframe.style.overflow = "hidden", !this.element.parentNode) throw new Error("[sandpack-client]: the given iframe does not have a parent.");
                                this.element.parentNode.replaceChild(this.iframe, this.element) } };
                    (h = u || (u = {}))[h.None = 0] = "None", h[h.Error = 10] = "Error", h[h.Warning = 20] = "Warning", h[h.Info = 30] = "Info", h[h.Debug = 40] = "Debug" }, 313: (e, t) => { "use strict"; var n = "sandbox.config.json";
                    t.t4 = function(e, t) { var r = t[n] || t["/" + n]; if (r) try { var i = JSON.parse(r.content); if (i.template) return i.template } catch (e) {}
                        var o = e.dependencies,
                            a = void 0 === o ? {} : o,
                            s = e.devDependencies,
                            c = void 0 === s ? {} : s,
                            d = Object.keys(a).concat(Object.keys(c)),
                            l = ["nuxt", "nuxt-edge"]; if (d.some((function(e) { return l.indexOf(e) > -1 }))) return "nuxt"; if (d.indexOf("next") > -1) return "next"; var u = ["apollo-server", "apollo-server-express", "apollo-server-hapi", "apollo-server-koa", "apollo-server-lambda", "apollo-server-micro"]; if (d.some((function(e) { return u.indexOf(e) > -1 }))) return "apollo"; if (d.indexOf("ember-cli") > -1) return "ember"; if (d.indexOf("sapper") > -1) return "sapper"; var h = Object.keys(t); if (h.some((function(e) { return e.endsWith(".vue") }))) return "vue-cli"; if (h.some((function(e) { return e.endsWith(".re") }))) return "reason"; if (d.indexOf("gatsby") > -1) return "gatsby"; if (d.indexOf("parcel-bundler") > -1) return "parcel"; if (d.indexOf("react-scripts") > -1) return "create-react-app"; if (d.indexOf("react-scripts-ts") > -1) return "create-react-app-typescript"; if (d.indexOf("@angular/core") > -1) return "angular-cli"; if (d.indexOf("preact-cli") > -1) return "preact-cli"; if (d.indexOf("svelte") > -1) return "svelte"; if (d.indexOf("vue") > -1) return "vue-cli"; var p = ["@dojo/core", "@dojo/framework"]; return d.some((function(e) { return p.indexOf(e) > -1 })) ? "@dojo/cli-create-app" : d.indexOf("cx") > -1 ? "cxjs" : d.indexOf("@nestjs/core") > -1 || d.indexOf("@nestjs/common") > -1 ? "nest" : void 0 } }, 799: (e, t, n) => { e = n.nmd(e); var r = "__lodash_hash_undefined__",
                        i = 9007199254740991,
                        o = "[object Arguments]",
                        a = "[object Array]",
                        s = "[object Boolean]",
                        c = "[object Date]",
                        d = "[object Error]",
                        l = "[object Function]",
                        u = "[object Map]",
                        h = "[object Number]",
                        p = "[object Object]",
                        f = "[object Promise]",
                        b = "[object RegExp]",
                        g = "[object Set]",
                        v = "[object String]",
                        m = "[object WeakMap]",
                        y = "[object ArrayBuffer]",
                        x = "[object DataView]",
                        S = /^\[object .+?Constructor\]$/,
                        w = /^(?:0|[1-9]\d*)$/,
                        _ = {};
                    _["[object Float32Array]"] = _["[object Float64Array]"] = _["[object Int8Array]"] = _["[object Int16Array]"] = _["[object Int32Array]"] = _["[object Uint8Array]"] = _["[object Uint8ClampedArray]"] = _["[object Uint16Array]"] = _["[object Uint32Array]"] = !0, _[o] = _[a] = _[y] = _[s] = _[x] = _[c] = _[d] = _[l] = _[u] = _[h] = _[p] = _[b] = _[g] = _[v] = _[m] = !1; var k = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                        j = "object" == typeof self && self && self.Object === Object && self,
                        C = k || j || Function("return this")(),
                        O = t && !t.nodeType && t,
                        A = O && e && !e.nodeType && e,
                        L = A && A.exports === O,
                        E = L && k.process,
                        I = function() { try { return E && E.binding && E.binding("util") } catch (e) {} }(),
                        N = I && I.isTypedArray;

                    function P(e, t) { for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                            if (t(e[n], n, e)) return !0;
                        return !1 }

                    function $(e) { var t = -1,
                            n = Array(e.size); return e.forEach((function(e, r) { n[++t] = [r, e] })), n }

                    function T(e) { var t = -1,
                            n = Array(e.size); return e.forEach((function(e) { n[++t] = e })), n } var z, D, M, U = Array.prototype,
                        F = Function.prototype,
                        R = Object.prototype,
                        B = C["__core-js_shared__"],
                        J = F.toString,
                        W = R.hasOwnProperty,
                        q = (z = /[^.]+$/.exec(B && B.keys && B.keys.IE_PROTO || "")) ? "Symbol(src)_1." + z : "",
                        G = R.toString,
                        H = RegExp("^" + J.call(W).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        V = L ? C.Buffer : void 0,
                        Y = C.Symbol,
                        K = C.Uint8Array,
                        Q = R.propertyIsEnumerable,
                        X = U.splice,
                        Z = Y ? Y.toStringTag : void 0,
                        ee = Object.getOwnPropertySymbols,
                        te = V ? V.isBuffer : void 0,
                        ne = (D = Object.keys, M = Object, function(e) { return D(M(e)) }),
                        re = Ae(C, "DataView"),
                        ie = Ae(C, "Map"),
                        oe = Ae(C, "Promise"),
                        ae = Ae(C, "Set"),
                        se = Ae(C, "WeakMap"),
                        ce = Ae(Object, "create"),
                        de = Ne(re),
                        le = Ne(ie),
                        ue = Ne(oe),
                        he = Ne(ae),
                        pe = Ne(se),
                        fe = Y ? Y.prototype : void 0,
                        be = fe ? fe.valueOf : void 0;

                    function ge(e) { var t = -1,
                            n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) { var r = e[t];
                            this.set(r[0], r[1]) } }

                    function ve(e) { var t = -1,
                            n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) { var r = e[t];
                            this.set(r[0], r[1]) } }

                    function me(e) { var t = -1,
                            n = null == e ? 0 : e.length; for (this.clear(); ++t < n;) { var r = e[t];
                            this.set(r[0], r[1]) } }

                    function ye(e) { var t = -1,
                            n = null == e ? 0 : e.length; for (this.__data__ = new me; ++t < n;) this.add(e[t]) }

                    function xe(e) { var t = this.__data__ = new ve(e);
                        this.size = t.size }

                    function Se(e, t) { for (var n = e.length; n--;)
                            if (Pe(e[n][0], t)) return n;
                        return -1 }

                    function we(e) { return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Z && Z in Object(e) ? function(e) { var t = W.call(e, Z),
                                n = e[Z]; try { e[Z] = void 0; var r = !0 } catch (e) {} var i = G.call(e); return r && (t ? e[Z] = n : delete e[Z]), i }(e) : function(e) { return G.call(e) }(e) }

                    function _e(e) { return Fe(e) && we(e) == o }

                    function ke(e, t, n, r, i) { return e === t || (null == e || null == t || !Fe(e) && !Fe(t) ? e != e && t != t : function(e, t, n, r, i, l) { var f = Te(e),
                                m = Te(t),
                                S = f ? a : Ee(e),
                                w = m ? a : Ee(t),
                                _ = (S = S == o ? p : S) == p,
                                k = (w = w == o ? p : w) == p,
                                j = S == w; if (j && ze(e)) { if (!ze(t)) return !1;
                                f = !0, _ = !1 } if (j && !_) return l || (l = new xe), f || Re(e) ? je(e, t, n, r, i, l) : function(e, t, n, r, i, o, a) { switch (n) {
                                    case x:
                                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                        e = e.buffer, t = t.buffer;
                                    case y:
                                        return !(e.byteLength != t.byteLength || !o(new K(e), new K(t)));
                                    case s:
                                    case c:
                                    case h:
                                        return Pe(+e, +t);
                                    case d:
                                        return e.name == t.name && e.message == t.message;
                                    case b:
                                    case v:
                                        return e == t + "";
                                    case u:
                                        var l = $;
                                    case g:
                                        var p = 1 & r; if (l || (l = T), e.size != t.size && !p) return !1; var f = a.get(e); if (f) return f == t;
                                        r |= 2, a.set(e, t); var m = je(l(e), l(t), r, i, o, a); return a.delete(e), m;
                                    case "[object Symbol]":
                                        if (be) return be.call(e) == be.call(t) } return !1 }(e, t, S, n, r, i, l); if (!(1 & n)) { var C = _ && W.call(e, "__wrapped__"),
                                    O = k && W.call(t, "__wrapped__"); if (C || O) { var A = C ? e.value() : e,
                                        L = O ? t.value() : t; return l || (l = new xe), i(A, L, n, r, l) } } return !!j && (l || (l = new xe), function(e, t, n, r, i, o) { var a = 1 & n,
                                    s = Ce(e),
                                    c = s.length; if (c != Ce(t).length && !a) return !1; for (var d = c; d--;) { var l = s[d]; if (!(a ? l in t : W.call(t, l))) return !1 } var u = o.get(e); if (u && o.get(t)) return u == t; var h = !0;
                                o.set(e, t), o.set(t, e); for (var p = a; ++d < c;) { var f = e[l = s[d]],
                                        b = t[l]; if (r) var g = a ? r(b, f, l, t, e, o) : r(f, b, l, e, t, o); if (!(void 0 === g ? f === b || i(f, b, n, r, o) : g)) { h = !1; break }
                                    p || (p = "constructor" == l) } if (h && !p) { var v = e.constructor,
                                        m = t.constructor;
                                    v == m || !("constructor" in e) || !("constructor" in t) || "function" == typeof v && v instanceof v && "function" == typeof m && m instanceof m || (h = !1) } return o.delete(e), o.delete(t), h }(e, t, n, r, i, l)) }(e, t, n, r, ke, i)) }

                    function je(e, t, n, r, i, o) { var a = 1 & n,
                            s = e.length,
                            c = t.length; if (s != c && !(a && c > s)) return !1; var d = o.get(e); if (d && o.get(t)) return d == t; var l = -1,
                            u = !0,
                            h = 2 & n ? new ye : void 0; for (o.set(e, t), o.set(t, e); ++l < s;) { var p = e[l],
                                f = t[l]; if (r) var b = a ? r(f, p, l, t, e, o) : r(p, f, l, e, t, o); if (void 0 !== b) { if (b) continue;
                                u = !1; break } if (h) { if (!P(t, (function(e, t) { if (a = t, !h.has(a) && (p === e || i(p, e, n, r, o))) return h.push(t); var a }))) { u = !1; break } } else if (p !== f && !i(p, f, n, r, o)) { u = !1; break } } return o.delete(e), o.delete(t), u }

                    function Ce(e) { return function(e, t, n) { var r = t(e); return Te(e) ? r : function(e, t) { for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n]; return e }(r, n(e)) }(e, Be, Le) }

                    function Oe(e, t) { var n, r, i = e.__data__; return ("string" == (r = typeof(n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map }

                    function Ae(e, t) { var n = function(e, t) { return null == e ? void 0 : e[t] }(e, t); return function(e) { return !(!Ue(e) || function(e) { return !!q && q in e }(e)) && (De(e) ? H : S).test(Ne(e)) }(n) ? n : void 0 }
                    ge.prototype.clear = function() { this.__data__ = ce ? ce(null) : {}, this.size = 0 }, ge.prototype.delete = function(e) { var t = this.has(e) && delete this.__data__[e]; return this.size -= t ? 1 : 0, t }, ge.prototype.get = function(e) { var t = this.__data__; if (ce) { var n = t[e]; return n === r ? void 0 : n } return W.call(t, e) ? t[e] : void 0 }, ge.prototype.has = function(e) { var t = this.__data__; return ce ? void 0 !== t[e] : W.call(t, e) }, ge.prototype.set = function(e, t) { var n = this.__data__; return this.size += this.has(e) ? 0 : 1, n[e] = ce && void 0 === t ? r : t, this }, ve.prototype.clear = function() { this.__data__ = [], this.size = 0 }, ve.prototype.delete = function(e) { var t = this.__data__,
                            n = Se(t, e); return !(n < 0 || (n == t.length - 1 ? t.pop() : X.call(t, n, 1), --this.size, 0)) }, ve.prototype.get = function(e) { var t = this.__data__,
                            n = Se(t, e); return n < 0 ? void 0 : t[n][1] }, ve.prototype.has = function(e) { return Se(this.__data__, e) > -1 }, ve.prototype.set = function(e, t) { var n = this.__data__,
                            r = Se(n, e); return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this }, me.prototype.clear = function() { this.size = 0, this.__data__ = { hash: new ge, map: new(ie || ve), string: new ge } }, me.prototype.delete = function(e) { var t = Oe(this, e).delete(e); return this.size -= t ? 1 : 0, t }, me.prototype.get = function(e) { return Oe(this, e).get(e) }, me.prototype.has = function(e) { return Oe(this, e).has(e) }, me.prototype.set = function(e, t) { var n = Oe(this, e),
                            r = n.size; return n.set(e, t), this.size += n.size == r ? 0 : 1, this }, ye.prototype.add = ye.prototype.push = function(e) { return this.__data__.set(e, r), this }, ye.prototype.has = function(e) { return this.__data__.has(e) }, xe.prototype.clear = function() { this.__data__ = new ve, this.size = 0 }, xe.prototype.delete = function(e) { var t = this.__data__,
                            n = t.delete(e); return this.size = t.size, n }, xe.prototype.get = function(e) { return this.__data__.get(e) }, xe.prototype.has = function(e) { return this.__data__.has(e) }, xe.prototype.set = function(e, t) { var n = this.__data__; if (n instanceof ve) { var r = n.__data__; if (!ie || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
                            n = this.__data__ = new me(r) } return n.set(e, t), this.size = n.size, this }; var Le = ee ? function(e) { return null == e ? [] : (e = Object(e), function(t, n) { for (var r = -1, i = null == t ? 0 : t.length, o = 0, a = []; ++r < i;) { var s = t[r];
                                    c = s, Q.call(e, c) && (a[o++] = s) } var c; return a }(ee(e))) } : function() { return [] },
                        Ee = we;

                    function Ie(e, t) { return !!(t = null == t ? i : t) && ("number" == typeof e || w.test(e)) && e > -1 && e % 1 == 0 && e < t }

                    function Ne(e) { if (null != e) { try { return J.call(e) } catch (e) {} try { return e + "" } catch (e) {} } return "" }

                    function Pe(e, t) { return e === t || e != e && t != t }(re && Ee(new re(new ArrayBuffer(1))) != x || ie && Ee(new ie) != u || oe && Ee(oe.resolve()) != f || ae && Ee(new ae) != g || se && Ee(new se) != m) && (Ee = function(e) { var t = we(e),
                            n = t == p ? e.constructor : void 0,
                            r = n ? Ne(n) : ""; if (r) switch (r) {
                            case de:
                                return x;
                            case le:
                                return u;
                            case ue:
                                return f;
                            case he:
                                return g;
                            case pe:
                                return m }
                        return t }); var $e = _e(function() { return arguments }()) ? _e : function(e) { return Fe(e) && W.call(e, "callee") && !Q.call(e, "callee") },
                        Te = Array.isArray,
                        ze = te || function() { return !1 };

                    function De(e) { if (!Ue(e)) return !1; var t = we(e); return t == l || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t }

                    function Me(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i }

                    function Ue(e) { var t = typeof e; return null != e && ("object" == t || "function" == t) }

                    function Fe(e) { return null != e && "object" == typeof e } var Re = N ? function(e) { return function(t) { return e(t) } }(N) : function(e) { return Fe(e) && Me(e.length) && !!_[we(e)] };

                    function Be(e) { return null != (t = e) && Me(t.length) && !De(t) ? function(e, t) { var n = Te(e),
                                r = !n && $e(e),
                                i = !n && !r && ze(e),
                                o = !n && !r && !i && Re(e),
                                a = n || r || i || o,
                                s = a ? function(e, t) { for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n); return r }(e.length, String) : [],
                                c = s.length; for (var d in e) !t && !W.call(e, d) || a && ("length" == d || i && ("offset" == d || "parent" == d) || o && ("buffer" == d || "byteLength" == d || "byteOffset" == d) || Ie(d, c)) || s.push(d); return s }(e) : function(e) { if (n = (t = e) && t.constructor, t !== ("function" == typeof n && n.prototype || R)) return ne(e); var t, n, r = []; for (var i in Object(e)) W.call(e, i) && "constructor" != i && r.push(i); return r }(e); var t }
                    e.exports = function(e, t) { return ke(e, t) } }, 191: (e, t, n) => { "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.SNBComponentSandboxEngine = t.SNBSandboxMessageStatus = void 0; const r = n(866),
                        i = n(687),
                        o = n(969),
                        a = n(633),
                        s = n(339); var c;! function(e) { e.unknown = "unknown", e.initializing = "initializing", e.installingDependencies = "installingDependencies", e.transpiling = "transpiling", e.evaluating = "evaluating", e.done = "done", e.error = "error" }(c = t.SNBSandboxMessageStatus || (t.SNBSandboxMessageStatus = {})), t.SNBComponentSandboxEngine = class { constructor() { this.updateSandboxCodeDebounced = this.debounce(((e, t) => this.updateSandboxCodeInternal(e, t))), this.trackedSandboxes = new Map, this.trackedConfigurations = new Map, this.trackedInitialStates = new Map }
                        setObserver(e) { this.listener = e }
                        async getSessionAuthorizationToken(e) { try { let t = await fetch(e, { method: "GET", cache: "no-cache", headers: { "Content-Type": "application/json" } }),
                                    n = await t.json(); const r = null == n ? void 0 : n.accessToken; return "string" == typeof r ? r : null } catch (e) { return null } }
                        async buildSandboxesSessionAuthorized(e, t) { let n = await this.getSessionAuthorizationToken(t);
                            this.buildSandboxesTokenAuthorized(e, n) }
                        async buildSandboxesTokenAuthorized(e, t) { for (let n of e) this.buildSandboxWithPageTarget(n, t) }
                        async buildSandboxesAnonymous(e) { for (let t of e) this.buildSandboxWithPageTarget(t, null) }
                        getSandboxTargetsStartingWith(e) { const t = `[id^="${e}"]`; var n = document.querySelectorAll(t); return Array.from(n).map((e => e.id)) }
                        getSandboxTargetsEndingWith(e) { const t = `[id$="${e}]`; var n = document.querySelectorAll(t); return Array.from(n).map((e => e.id)) }
                        buildSandboxWithPageTarget(e, t) { try { if (this.trackedSandboxes.get(e)) throw new Error(`Sandbox for id ${e} was already created. You can only create one tracked sandbox per target`); let n = document.querySelector(`#${e}`); if (!n) throw new Error(`Can't build sandbox with target ${e} as there is no such target in the current context`); if ("div" !== n.nodeName.toLowerCase() && "iframe" !== n.nodeName.toLowerCase()) throw new Error("Sandbox can only be created on element types of div or iframe (div is preferred)"); let i = this.validateConstructDataFromElement(n),
                                    o = [];
                                i.decodedConfiguration.registry && (o = [{ enabledScopes: i.decodedConfiguration.registry.enabledScopes, limitToScopes: !0, registryUrl: i.decodedConfiguration.registry.proxyUrl, proxyEnabled: !1, registryAuthToken: null != t ? t : void 0 }]); let a = { showErrorScreen: !0, showLoadingScreen: !1, showOpenInCodeSandbox: !1, customNpmRegistries: o }; let s = new r.SandpackClient(`#${e}`, i.payload, a);
                                this.trackedSandboxes.set(e, s), this.trackedConfigurations.set(e, i.decodedConfiguration), this.trackedInitialStates.set(e, i.decodedConfiguration.code), this.listener && s.listen((t => { let n, r = c.unknown; switch (t.type) {
                                        case "start":
                                            r = c.initializing; break;
                                        case "status":
                                            switch (t.status) {
                                                case "evaluating":
                                                    r = c.evaluating; break;
                                                case "installing-dependencies":
                                                    r = c.installingDependencies; break;
                                                case "transpiling":
                                                    r = c.transpiling } break;
                                        case "success":
                                            r = c.done; break;
                                        case "action":
                                            "show-error" === t.action && (r = c.error, n = t.message) }
                                    r !== c.unknown && this.listener({ details: t, status: r, sandboxId: e, error: n }) })) } catch (t) { this.listener && this.listener({ error: t.message, status: c.error, sandboxId: e }) } }
                        updateSandbox(e, t) { if (!this.trackedSandboxes.get(e)) throw new Error(`Sandbox ${e} can't be updated because it wasn't created yet`); let n = this.trackedSandboxes.get(e),
                                r = this.validateConstructDataFromEncodedData(t);
                            n.updatePreview(r.payload), this.trackedConfigurations.set(e, r.decodedConfiguration) }
                        getSandboxCode(e) { if (!this.trackedSandboxes.get(e) || !this.trackedConfigurations.get(e)) throw new Error(`Sandbox ${e} can't be updated because it wasn't created yet`); return this.trackedConfigurations.get(e).code }
                        updateSandboxCode(e, t) { this.updateSandboxCodeDebounced(e, t) }
                        updateSandboxCodeInternal(e, t) { if (!this.trackedSandboxes.get(e) || !this.trackedConfigurations.get(e)) throw new Error(`Sandbox ${e} can't be updated because it wasn't created yet`); let n = this.trackedSandboxes.get(e),
                                r = this.trackedConfigurations.get(e);
                            r.code = t; let i = this.createBundledData(r);
                            n.updatePreview(i), this.trackedConfigurations.set(e, r) }
                        debounce(e, t = 300) { let n; return (...r) => { clearTimeout(n), n = setTimeout((() => { e.apply(this, r) }), t) } }
                        async openInSandbox(e) { if (!this.trackedSandboxes.get(e) || !this.trackedConfigurations.get(e)) throw new Error(`Sandbox ${e} can't be updated because it wasn't created yet`); let t = this.trackedSandboxes.get(e),
                                n = await t.getCodeSandboxURL(); return window.open(n.editorUrl, "_blank"), n.editorUrl }
                        createBundledData(e) { var t; let n; switch (e.type) {
                                case i.SandboxMode.react:
                                    n = new a.SNBReactBundler(e.code, e.packageJSON, null !== (t = e.visual) && void 0 !== t ? t : {}); break;
                                default:
                                    throw new Error(`Unsupported bundler type ${e.type}`) } return { files: n.buildSandboxPayload() } }
                        getCodeForSandboxId(e) { if (!this.trackedConfigurations.get(e)) throw new Error(`Unknown code sandbox for id ${e}`); return this.trackedConfigurations.get(e).code }
                        resetSandboxToInitial(e) { if (!this.trackedConfigurations.get(e)) throw new Error(`Unknown code sandbox for id ${e}`); let t = this.trackedInitialStates.get(e);
                            this.updateSandboxCodeInternal(e, t) }
                        encodeSandboxData(e, t, n, r, i, a) { let c = o.SandboxContentAlignment.center; if (r) switch (r) {
                                case "left":
                                    c = o.SandboxContentAlignment.start; break;
                                case "center":
                                    c = o.SandboxContentAlignment.center; break;
                                case "right":
                                    c = o.SandboxContentAlignment.end }
                            let d = { type: e, code: t, packageJSON: n, visual: { horizontalAlignment: c, verticalAlignment: o.SandboxContentAlignment.center, backgroundHex: null != i ? i : void 0, showSandbox: !1 }, registry: a }; return s.btoaUnicode(JSON.stringify(d)) }
                        setSandboxDataBeforeLoad(e, t) { let n = document.querySelector(`#${e}`); if (!n) throw new Error("Can't inject sandbox data to target. This usually means that you are trying to update sandbox that was already created - this is no-op, use updateSandbox instead.");
                            n.setAttribute("sn-sandbox-data", t) }
                        validateConstructDataFromElement(e) { let t = e.getAttribute("sn-sandbox-data"); if (!t || 0 === t.length) throw new Error("Sandbox doesn't provide any valid data"); return this.validateConstructDataFromEncodedData(t) }
                        validateConstructDataFromEncodedData(e) { let t; try { const n = s.atobUnicode(e);
                                t = JSON.parse(n) } catch (e) { throw new Error("Provided sandbox data corrupted") } if (!t.code || !t.packageJSON || !t.type) throw new Error("Provided sandbox data incomplete"); if (!Object.values(i.SandboxMode).includes(t.type)) throw new Error(`Unsupported sandbox type ${t.type}`); return { payload: this.createBundledData(t), decodedConfiguration: t } } } }, 687: (e, t) => { "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.SandboxMode = void 0, (t.SandboxMode || (t.SandboxMode = {})).react = "react" }, 969: (e, t) => { "use strict"; var n;
                    Object.defineProperty(t, "__esModule", { value: !0 }), t.SNBBundler = t.SandboxContentAlignment = void 0, (n = t.SandboxContentAlignment || (t.SandboxContentAlignment = {})).start = "start", n.center = "center", n.end = "end", t.SNBBundler = class { constructor(e, t, n) { this.code = e, this.packageJSON = t, this.visualSettings = n }
                        buildSandboxPayload() { throw new Error("Unable to use generic bundler, please provide type-specific implementation") } } }, 633: (e, t, n) => { "use strict";
                        Object.defineProperty(t, "__esModule", { value: !0 }), t.SNBReactBundler = void 0; const r = n(969);
                        class i extends r.SNBBundler { buildSandboxPayload() { return { "/public/index.html": { code: this.buildIndexFile() }, "/src/App.js": { code: this.buildAppJS() }, "/src/index.js": { code: this.buildIndexJS() }, "/package.json": { code: this.buildPackageJSON() } } }
                                buildIndexFile() { return '\n        <!DOCTYPE html>\n        <html lang="en">\n        <head>\n            <meta charset="utf-8">\n            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n            <meta name="theme-color" content="#000000">\n            <title>Supernova Sandbox App</title>\n        </head>\n        <div id="root"></div>\n        </body>\n\n        </html>' }
                                alignmentToFlexString(e) { switch (e) {
                                        case r.SandboxContentAlignment.start:
                                            return "flex-start";
                                        case r.SandboxContentAlignment.center:
                                            return "center";
                                        case r.SandboxContentAlignment.end:
                                            return "flex-end" } }
                                buildAppJS() { return this.code }
                                buildIndexJS() { var e, t; return `\n        import ReactDOM from "react-dom";\n        import React from "react";\n        import App from "./App";\n\n        /* Configure body style */\n        document.body.style.margin = "0px";\n\n        ReactDOM.render(\n            <div style={{\n                height: "100vh",\n                display: "flex",\n                justifyContent: "${this.alignmentToFlexString(null!==(e=this.visualSettings.horizontalAlignment)&&void 0!==e?e:r.SandboxContentAlignment.center)}",\n                alignItems: "${this.alignmentToFlexString(null!==(t=this.visualSettings.verticalAlignment)&&void 0!==t?t:r.SandboxContentAlignment.center)}",\n                background: "${this.visualSettings.backgroundHex?`#${this.visualSettings.backgroundHex}`:"transparent"}"\n            }}>\n                <App />\n            </div>,\n            document.getElementById("root")\n        );`}buildPackageJSON(){return this.packageJSON}}t.SNBReactBundler=i},339:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.atobUnicode=t.btoaUnicode=void 0,t.btoaUnicode=function(e){return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})))},t.atobUnicode=function(e){return decodeURIComponent(Array.prototype.map.call(atob(e),(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""))}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r](o,o.exports,n),o.loaded=!0,o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{"use strict";const e=n(191);window.sandboxEngine=new e.SNBComponentSandboxEngine})()})();
//# sourceMappingURL=sandbox.js.map