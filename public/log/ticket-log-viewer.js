//#region node_modules/svelte/src/internal/shared/utils.js
var e = Array.isArray, t = Array.prototype.indexOf, n = Array.prototype.includes, r = Array.from, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = Object.getOwnPropertyDescriptors, s = Object.prototype, c = Array.prototype, l = Object.getPrototypeOf, u = Object.isExtensible, d = () => {};
function f(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function p() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
function m(e, t) {
	if (Array.isArray(e)) return e;
	if (t === void 0 || !(Symbol.iterator in e)) return Array.from(e);
	let n = [];
	for (let r of e) if (n.push(r), n.length === t) break;
	return n;
}
var h = 1024, g = 2048, _ = 4096, v = 8192, y = 16384, ee = 32768, b = 1 << 25, x = 65536, S = 1 << 19, C = 1 << 20, w = 1 << 25, T = 1 << 21, E = 1 << 22, te = 1 << 23, D = Symbol("$state"), O = Symbol("component"), k = Symbol("legacy props"), ne = Symbol(""), re = Symbol("attributes"), ie = Symbol("class"), A = Symbol("style"), ae = Symbol("text"), oe = Symbol("form reset"), se = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ce = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml"), le = {}, j = Symbol("uninitialized"), ue = "http://www.w3.org/1999/xhtml";
function de() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function fe(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function pe() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var M = !1;
function me(e) {
	M = e;
}
var N;
function he(e) {
	if (e === null) throw fe(), le;
	return N = e;
}
function ge() {
	return he(/* @__PURE__ */ Yt(N));
}
function P(e) {
	if (M) {
		if (/* @__PURE__ */ Yt(N) !== null) throw fe(), le;
		N = e;
	}
}
function _e(e = 1) {
	if (M) {
		for (var t = e, n = N; t--;) n = /* @__PURE__ */ Yt(n);
		N = n;
	}
}
function ve(e = !0) {
	for (var t = 0, n = N;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Yt(n);
		e && n.remove(), n = i;
	}
}
function ye(e) {
	if (!e || e.nodeType !== 8) throw fe(), le;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function be(e) {
	return e === this.v;
}
function xe(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Se(e) {
	return !xe(e, this.v);
}
function Ce(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function we() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Te(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function Ee(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function De() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Oe(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function ke() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ae(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function je() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Me() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ne() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Pe() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var Fe = null;
function Ie(e) {
	Fe = e;
}
function Le(e, t = !1, n) {
	Fe = {
		p: Fe,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: W,
		l: null
	};
}
function Re(e) {
	var t = Fe, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) un(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, Fe = t.p, ze(e);
}
function ze(e = {}) {
	return i(e, O, { value: !0 }), e;
}
function Be() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Ve = [];
function He() {
	var e = Ve;
	Ve = [], f(e);
}
function Ue(e) {
	if (Ve.length === 0 && !ht) {
		var t = Ve;
		queueMicrotask(() => {
			t === Ve && He();
		});
	}
	Ve.push(e);
}
function We() {
	for (; Ve.length > 0;) He();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Ge = ~(g | _ | h);
function F(e, t) {
	e.f = e.f & Ge | t;
}
function Ke(e) {
	e.f & 512 || e.deps === null ? F(e, h) : F(e, _);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function qe(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), F(e, h);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
var Je = !1;
function Ye() {
	Je || (Je = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[oe]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Xe(e) {
	var t = U, n = W;
	Nn(null), Pn(null);
	try {
		return e();
	} finally {
		Nn(t), Pn(n);
	}
}
function Ze(e, t, n, r = n) {
	e.addEventListener(t, () => Xe(n));
	let i = e[oe];
	e[oe] = i ? () => {
		i(), r(!0);
	} : () => r(!0), Ye();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function Qe(e, t, n, r) {
	let i = Be() ? nt : at;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = W, c = $e(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				nn(e, s);
			}
			et();
		}
	}
	var d = tt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ it(e))).then(u).catch((e) => nn(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), et();
	}) : f();
}
function $e() {
	var e = W, t = U, n = Fe, r = L;
	return function(i = !0) {
		Pn(e), Nn(t), Ie(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function et(e = !0) {
	Pn(null), Nn(null), Ie(null), e && L?.deactivate();
}
function tt() {
	var e = W, t = e.b, n = L, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function nt(e) {
	var t = 2 | g;
	return W !== null && (W.f |= S), {
		ctx: Fe,
		deps: null,
		effects: null,
		equals: be,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: j,
		wv: 0,
		parent: W,
		ac: null
	};
}
var rt = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function it(e, t, n) {
	let r = W;
	r === null && we();
	var i = void 0, a = Mt(j), o = !U, s = /* @__PURE__ */ new Set();
	return pn(() => {
		var t = W, n = p();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== se && n.reject(e);
			}).finally(et);
		} catch (e) {
			n.reject(e), et();
		}
		var c = L;
		if (o) {
			if (t.f & 32768) var l = tt();
			if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(rt);
			else for (let e of s.values()) e.reject(rt);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== rt && (c.activate(), t ? (a.f |= te, Lt(a, t)) : (a.f & 8388608 && (a.f ^= te), Lt(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), cn(() => {
		for (let e of s) e.reject(rt);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === i ? e(a) : t(i);
			}
			n.then(r, r);
		}
		t(i);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function I(e) {
	let t = /* @__PURE__ */ nt(e);
	return In(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function at(e) {
	let t = /* @__PURE__ */ nt(e);
	return t.equals = Se, t;
}
function ot(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) bn(t[n]);
	}
}
function st(e) {
	var t, n = W, r = e.parent;
	if (!An && r !== null && e.v !== j && r.f & 24576) return de(), e.v;
	Pn(r);
	try {
		ot(e), t = Jn(e);
	} finally {
		Pn(n);
	}
	return t;
}
function ct(e) {
	var t = st(e);
	!e.equals(t) && (e.wv = Gn(), (!L?.is_fork || e.deps === null) && (L === null ? e.v = t : (L.capture(e, t, !0), ft?.capture(e, t, !0)), e.deps === null)) ? F(e, h) : An || (pt === null ? Ke(e) : (sn() || L?.is_fork) && pt.set(e, t));
}
function lt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Xe(() => {
		t.ac.abort(se), t.ac = null;
	}), t.fn !== null && (t.teardown = d), Zn(t, 0), vn(t));
}
function ut(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Qn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var dt = null, L = null, ft = null, pt = null, mt = null, ht = !1, gt = !1, _t = null, vt = null, yt = 0, bt = 1, xt = class e {
	id = bt++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		dt === null ? dt = this : (dt.#n = this, this.#t = dt), dt = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) F(r, g), t(r);
			for (r of n.m) F(r, _), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		var e = [];
		for (let i of this.#c) if (!(i.f & 16384 || !(i.f & 6144))) {
			for (var t = i, n = !1; t.parent !== null;) {
				t = t.parent;
				var r = t.f;
				if (r & 96) {
					if (!(r & 1024)) {
						n = !0;
						break;
					}
					t.f ^= h;
				}
			}
			n || e.push(t);
		}
		return this.#c = [], e;
	}
	#_() {
		this.#e = !0;
		for (let e of this.#u) this.#d.delete(e), F(e, g), this.schedule(e);
		for (let e of this.#d) F(e, _), this.schedule(e);
		this.apply();
		for (var t = _t = [], n = [], r = vt = []; this.#c.length > 0;) {
			yt++ > 1e3 && (this.#S(), Ct());
			for (let e of this.#g()) try {
				this.#v(e, t, n);
			} catch (t) {
				throw Ot(e), this.#h() || this.discard(), t;
			}
		}
		if (L = null, r.length > 0) {
			var i = e.ensure();
			for (let e of r) i.schedule(e);
		}
		if (_t = null, vt = null, this.#h()) {
			this.#x(n), this.#x(t);
			for (let [e, t] of this.#f) Dt(e, t);
			r.length > 0 && L.#_();
			return;
		}
		let a = this.#y();
		if (a) this.#x(n), this.#x(t), a.#b(this);
		else {
			this.#u.clear(), this.#d.clear();
			for (let e of this.#r) e(this);
			this.#r.clear(), ft = this, Tt(n), Tt(t), ft = null, this.#s?.resolve();
			var o = L;
			if (this.#a === 0 && (this.#c.length === 0 || o !== null) && this.#S(), this.#c.length > 0) {
				if (o !== null) {
					for (let e of this.#c) o.#c.push(e);
					this.#c = [];
				} else o = this;
			}
			o !== null && (At.clear(), o.#_());
		}
	}
	#v(e, t, n) {
		e.f ^= h;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= h : i & 4 ? t.push(r) : Kn(r) && (i & 16 && this.#d.add(r), Qn(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#y() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#b(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), F(i, g), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#S(), L = this, this.#_();
	}
	#x(e) {
		for (var t = 0; t < e.length; t += 1) qe(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== j && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), pt?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		L = this;
	}
	deactivate() {
		L = null, pt = null;
	}
	flush() {
		try {
			gt = !0, L = this, this.#_();
		} finally {
			yt = 0, mt = null, _t = null, vt = null, gt = !1, L = null, pt = null, At.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(rt);
		this.#S(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, Ue(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= p()).promise;
	}
	static ensure() {
		if (L === null) {
			let t = L = new e();
			!gt && !ht && Ue(() => {
				t.#e || t.flush();
			});
		}
		return L;
	}
	apply() {
		pt = null;
	}
	schedule(e) {
		mt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768) ? e.b.defer_effect(e) : this.#c.push(e);
	}
	#S() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? dt = e : t.#t = e, this.linked = !1;
		}
	}
};
function St(e) {
	var t = ht;
	ht = !0;
	try {
		var n;
		for (e && (L !== null && !L.is_fork && L.flush(), n = e());;) {
			if (We(), L === null) return n;
			L.flush();
		}
	} finally {
		ht = t;
	}
}
function Ct() {
	try {
		ke();
	} catch (e) {
		nn(e, mt);
	}
}
var wt = null;
function Tt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Kn(r) && (wt = /* @__PURE__ */ new Set(), Qn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Sn(r), wt?.size > 0)) {
				At.clear();
				for (let e of wt) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) wt.has(n) && (wt.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Qn(n);
					}
				}
				wt.clear();
			}
		}
		wt = null;
	}
}
function Et(e) {
	L.schedule(e);
}
function Dt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), F(e, h);
		for (var n = e.first; n !== null;) Dt(n, t), n = n.next;
	}
}
function Ot(e) {
	F(e, h);
	for (var t = e.first; t !== null;) Ot(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var kt = /* @__PURE__ */ new Set(), At = /* @__PURE__ */ new Map(), jt = !1;
function Mt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: be,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Nt(e, t) {
	let n = Mt(e, t);
	return In(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Pt(e, t = !1, n = !0) {
	let r = Mt(e);
	return t || (r.equals = Se), r;
}
function R(e, t, n = !1) {
	return U !== null && (!Mn || U.f & 131072) && Be() && U.f & 4325394 && (Fn === null || !Fn.has(e)) && Ne(), Lt(e, n ? Vt(t) : t, vt);
}
var Ft = null, It = 0;
function Lt(e, t, n = null) {
	if (!e.equals(t)) {
		An ? At.set(e, t) : At.has(e) || At.set(e, e.v);
		var r = xt.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && st(t), pt === null && Ke(t);
		}
		e.wv = Gn(), Ft = null, It = 0, Bt(e, g, n), Ft = null, Be() && W !== null && W.f & 1024 && !(W.f & 96) && (zn === null ? Bn([e]) : zn.push(e)), !r.is_fork && kt.size > 0 && !jt && Rt();
	}
	return t;
}
function Rt() {
	jt = !1;
	for (let e of kt) {
		e.f & 1024 && F(e, _);
		let t;
		try {
			t = Kn(e);
		} catch {
			t = !0;
		}
		t && Qn(e);
	}
	kt.clear();
}
function zt(e) {
	R(e, e.v + 1);
}
function Bt(e, t, n) {
	var r = e.reactions;
	if (r !== null) {
		var i = Be(), a = r.length;
		if (It += a, It > 1e5 && Ft === null && (Ft = /* @__PURE__ */ new Set()), Ft !== null) {
			if (Ft.has(e)) return;
			Ft.add(e);
		}
		for (var o = 0; o < a; o++) {
			var s = r[o], c = s.f;
			if (i || s !== W) {
				var l = (c & g) === 0;
				if (l && F(s, t), c & 131072) kt.add(s);
				else if (c & 2) {
					var u = s;
					pt?.delete(u), Bt(u, _, n);
				} else if (l) {
					var d = s;
					c & 16 && wt !== null && wt.add(d), n === null ? Et(d) : n.push(d);
				}
			}
		}
	}
}
function Vt(t) {
	if (typeof t != "object" || !t || D in t || O in t) return t;
	let n = l(t);
	if (n !== s && n !== c) return t;
	var r = /* @__PURE__ */ new Map(), i = e(t), o = /* @__PURE__ */ Nt(0), u = null, d = Un, f = (e) => {
		if (Un === d) return e();
		var t = U, n = Un;
		Nn(null), Wn(d);
		var r = e();
		return Nn(t), Wn(n), r;
	};
	return i && r.set("length", /* @__PURE__ */ Nt(t.length, u)), new Proxy(t, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && je();
			var i = r.get(t);
			return i === void 0 ? f(() => {
				var e = /* @__PURE__ */ Nt(n.value, u);
				return r.set(t, e), e;
			}) : R(i, n.value, !0), !0;
		},
		deleteProperty(e, t) {
			var n = r.get(t);
			if (n === void 0) {
				if (t in e) {
					let e = f(() => /* @__PURE__ */ Nt(j, u));
					r.set(t, e), zt(o);
				}
			} else R(n, j), zt(o);
			return !0;
		},
		get(e, n, i) {
			if (n === D) return t;
			var o = r.get(n), s = n in e;
			if (o === void 0 && (!s || a(e, n)?.writable) && (o = f(() => /* @__PURE__ */ Nt(Vt(s ? e[n] : j), u)), r.set(n, o)), o !== void 0) {
				var c = G(o);
				return c === j ? void 0 : c;
			}
			return Reflect.get(e, n, i);
		},
		getOwnPropertyDescriptor(e, t) {
			this.has?.(e, t);
			var n = Reflect.getOwnPropertyDescriptor(e, t), i = r.get(t);
			if (i !== void 0) {
				var a = G(i);
				if (a === j) return;
				if (n && "value" in n) n.value = a;
				else return {
					enumerable: !0,
					configurable: !0,
					value: a,
					writable: !0
				};
			}
			return n;
		},
		has(e, t) {
			if (t === D) return !0;
			var n = r.get(t), i = n !== void 0 && n.v !== j || Reflect.has(e, t);
			return (n !== void 0 || W !== null && (!i || a(e, t)?.writable)) && (n === void 0 && (n = f(() => /* @__PURE__ */ Nt(i ? Vt(e[t]) : j, u)), r.set(t, n)), G(n) === j) ? !1 : i;
		},
		set(e, t, n, s) {
			var c = r.get(t), l = t in e;
			if (i && t === "length") for (var d = n; d < c.v; d += 1) {
				var p = r.get(d + "");
				p === void 0 ? d in e && (p = f(() => /* @__PURE__ */ Nt(j, u)), r.set(d + "", p)) : R(p, j);
			}
			if (c === void 0) (!l || a(e, t)?.writable) && (c = f(() => /* @__PURE__ */ Nt(void 0, u)), R(c, Vt(n)), r.set(t, c));
			else {
				l = c.v !== j;
				var m = f(() => Vt(n));
				R(c, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, n), !l) {
				if (i && typeof t == "string") {
					var g = r.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && R(g, _ + 1);
				}
				zt(o);
			}
			return !0;
		},
		ownKeys(e) {
			G(o);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = r.get(e);
				return t === void 0 || t.v !== j;
			});
			for (var [n, i] of r) i.v !== j && !(n in e) && t.push(n);
			return t;
		},
		setPrototypeOf() {
			Me();
		}
	});
}
var Ht, Ut, Wt, Gt;
function Kt() {
	if (Ht === void 0) {
		Ht = window, Ut = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Wt = a(t, "firstChild").get, Gt = a(t, "nextSibling").get, u(e) && (e[ie] = void 0, e[re] = null, e[A] = void 0, e.__e = void 0), u(n) && (n[ae] = void 0);
	}
}
function qt(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Jt(e) {
	return Wt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Yt(e) {
	return Gt.call(e);
}
function z(e, t) {
	if (!M) return /* @__PURE__ */ Jt(e);
	var n = /* @__PURE__ */ Jt(N);
	if (n === null) n = N.appendChild(qt());
	else if (t && n.nodeType !== 3) {
		var r = qt();
		return n?.before(r), he(r), r;
	}
	return t && en(n), he(n), n;
}
function Xt(e, t = !1) {
	if (!M) {
		var n = /* @__PURE__ */ Jt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Yt(n) : n;
	}
	if (t) {
		if (N?.nodeType !== 3) {
			var r = qt();
			return N?.before(r), he(r), r;
		}
		en(N);
	}
	return N;
}
function B(e, t = !1) {
	if (!M) return /* @__PURE__ */ Jt(e);
	var n = z(e, t);
	return P(e), n;
}
function V(e, t = 1, n = !1) {
	let r = M ? N : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Yt(r);
	if (!M) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = qt();
			return r === null ? i?.after(a) : r.before(a), he(a), a;
		}
		en(r);
	}
	return he(r), r;
}
function Zt(e) {
	e.textContent = "";
}
function Qt() {
	return !1;
}
function $t(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function en(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
function tn(e) {
	var t = W;
	if (t === null) return U.f |= te, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	nn(e, t);
}
function nn(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128 && !(t.f & 33570816)) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function rn(e) {
	W === null && (U === null && Oe(e), De()), An && Ee(e);
}
function an(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function on(e, t) {
	var n = W;
	n !== null && n.f & 8192 && (e |= v);
	var r = {
		ctx: Fe,
		deps: null,
		nodes: null,
		f: e | g | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	L?.register_created_effect(r);
	var i = r;
	if (e & 4) _t === null ? xt.ensure().schedule(r) : _t.push(r);
	else if (t !== null) {
		try {
			Qn(r);
		} catch (e) {
			throw bn(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= x));
	}
	if (i !== null && (i.parent = n, n !== null && an(i, n), U !== null && U.f & 2 && !(e & 64))) {
		var a = U;
		(a.effects ??= []).push(i);
	}
	return r;
}
function sn() {
	return U !== null && !Mn;
}
function cn(e) {
	let t = on(8, null);
	return F(t, h), t.teardown = e, t;
}
function ln(e) {
	rn("$effect");
	var t = W.f;
	if (!U && t & 32 && Fe !== null && !Fe.i) {
		var n = Fe;
		(n.e ??= []).push(e);
	} else return un(e);
}
function un(e) {
	return on(4 | C, e);
}
function dn(e) {
	xt.ensure();
	let t = on(64 | S, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? Cn(t, () => {
			bn(t), n(void 0);
		}) : (bn(t), n(void 0));
	});
}
function fn(e) {
	return on(4, e);
}
function pn(e) {
	return on(E | S, e);
}
function mn(e, t = 0) {
	return on(8 | t, e);
}
function H(e, t = [], n = [], r = []) {
	Qe(r, t, n, (t) => {
		on(8, () => {
			e(...t.map(G));
		});
	});
}
function hn(e, t = 0) {
	return on(16 | t, e);
}
function gn(e) {
	return on(32 | S, e);
}
function _n(e) {
	var t = e.teardown;
	if (t !== null) {
		let n = An, r = U;
		jn(!0), Nn(null);
		try {
			t.call(null);
		} catch (t) {
			nn(t, e.parent);
		} finally {
			jn(n), Nn(r);
		}
	}
}
function vn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Xe(() => {
			e.abort(se);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : bn(n, t), n = r;
	}
}
function yn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || bn(t), t = n;
	}
}
function bn(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (xn(e.nodes.start, e.nodes.end), n = !0), e.f |= b, vn(e, t && !n), Zn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	_n(e), e.f ^= b, e.f |= y;
	var i = e.parent;
	i !== null && i.first !== null && Sn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function xn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Yt(e);
		e.remove(), e = n;
	}
}
function Sn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Cn(e, t, n = !0) {
	var r = [];
	e.f |= 256, wn(e, r, !0);
	var i = () => {
		n && bn(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function wn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= v;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				wn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function Tn(e) {
	e.f &= -257, En(e, !0);
}
function En(e, t) {
	if (!(e.f & 256) && e.f & 8192) {
		e.f ^= v, e.f & 1024 || (F(e, g), xt.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			En(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function Dn(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Yt(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var On = null, kn = !1, An = !1;
function jn(e) {
	An = e;
}
var U = null, Mn = !1;
function Nn(e) {
	U = e;
}
var W = null;
function Pn(e) {
	W = e;
}
var Fn = null;
function In(e) {
	U !== null && (U.f & 2097152 || U.f & 2) && (Fn ??= /* @__PURE__ */ new Set()).add(e);
}
var Ln = null, Rn = 0, zn = null;
function Bn(e) {
	zn = e;
}
var Vn = 1, Hn = 0, Un = Hn;
function Wn(e) {
	Un = e;
}
function Gn() {
	return ++Vn;
}
function Kn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Kn(a) && ct(a), a.wv > e.wv) return !0;
		}
		t & 512 && pt === null && F(e, h);
	}
	return !1;
}
function qn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(Fn !== null && Fn.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? qn(a, t, !1) : t === a && (n ? F(a, g) : a.f & 1024 && F(a, _), Et(a));
	}
}
function Jn(e) {
	var t = Ln, n = Rn, r = zn, i = U, a = Fn, o = Fe, s = Mn, c = Un, l = e.f;
	Ln = null, Rn = 0, zn = null, U = l & 96 ? null : e, Fn = null, Ie(e.ctx), Mn = !1, Un = ++Hn, e.ac !== null && (Xe(() => {
		e.ac.abort(se);
	}), e.ac = null);
	try {
		e.f |= T;
		var u = e.fn, d = u();
		e.f |= ee;
		var f = Yn(e);
		if (Be() && zn !== null && !Mn && f !== null && !(e.f & 6146)) for (var p = 0; p < zn.length; p++) qn(zn[p], e);
		if (i !== null && i !== e) {
			if (Hn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Hn;
			if (t !== null) for (let e of t) e.rv = Hn;
			zn !== null && (r === null ? r = zn : r.push(...zn));
		}
		return e.f & 8388608 && (e.f ^= te), d;
	} catch (t) {
		return Yn(e), tn(t);
	} finally {
		e.f ^= T, Ln = t, Rn = n, zn = r, U = i, Fn = a, Ie(o), Mn = s, Un = c;
	}
}
function Yn(e) {
	var t = e.deps, n = L?.is_fork;
	if (Ln !== null) {
		var r;
		if (n || Zn(e, Rn), t !== null && Rn > 0) for (t.length = Rn + Ln.length, r = 0; r < Ln.length; r++) t[Rn + r] = Ln[r];
		else e.deps = t = Ln;
		if (sn() && e.f & 512) for (r = Rn; r < t.length; r++) (t[r].reactions ??= []).push(e);
	} else !n && t !== null && Rn < t.length && (Zn(e, Rn), t.length = Rn);
	return t;
}
function Xn(e, r) {
	let i = r.reactions;
	if (i !== null) {
		var a = t.call(i, e);
		if (a !== -1) {
			var o = i.length - 1;
			o === 0 ? i = r.reactions = null : (i[a] = i[o], i.pop());
		}
	}
	if (i === null && r.f & 2 && (Ln === null || !n.call(Ln, r))) {
		var s = r;
		s.f & 512 && (s.f ^= 512), s.v !== j && Ke(s), s.ac !== null && Xe(() => {
			s.ac.abort(se), s.ac = null, F(s, g);
		}), lt(s), Zn(s, 0);
	}
}
function Zn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Xn(e, n[r]);
}
function Qn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		F(e, h);
		var n = W, r = kn;
		W = e, kn = !(t & 96);
		try {
			t & 16777232 ? yn(e) : vn(e), _n(e);
			var i = Jn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Vn;
		} finally {
			kn = r, W = n;
		}
	}
}
async function $n() {
	await Promise.resolve(), St();
}
function G(e) {
	var t = !!(e.f & 2);
	if (On?.add(e), U !== null && !Mn && !(W !== null && W.f & 16384) && (Fn === null || !Fn.has(e))) {
		var r = U.deps;
		if (U.f & 2097152) e.rv < Hn && (e.rv = Hn, Ln === null && r !== null && r[Rn] === e ? Rn++ : Ln === null ? Ln = [e] : Ln.push(e));
		else {
			U.deps ??= [], n.call(U.deps, e) || U.deps.push(e);
			var i = e.reactions;
			i === null ? e.reactions = [U] : n.call(i, U) || i.push(U);
		}
	}
	if (An && At.has(e)) return At.get(e);
	if (t) {
		var a = e;
		if (An) {
			var o = a.v;
			return (!(a.f & 1024) && a.reactions !== null || tr(a)) && (o = st(a)), At.set(a, o), o;
		}
		var s = !(a.f & 512) && !Mn && U !== null && (kn || !!(U.f & 512)), c = (a.f & ee) === 0;
		Kn(a) && (s && (a.f |= 512), ct(a)), s && !c && (ut(a), er(a));
	}
	if (pt?.has(e)) return pt.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function er(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (ut(t), er(t));
}
function tr(e) {
	if (e.v === j) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (At.has(t) || t.f & 2 && tr(t)) return !0;
	return !1;
}
function nr(e) {
	var t = Mn;
	try {
		return Mn = !0, e();
	} finally {
		Mn = t;
	}
}
function rr(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (D in e) ir(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && D in n && ir(n);
		}
	}
}
function ir(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			ir(e[n], t);
		} catch {}
		let n = l(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = o(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch {}
			}
		}
	}
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var ar = ["touchstart", "touchmove"];
function or(e) {
	return ar.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var sr = Symbol("events"), cr = /* @__PURE__ */ new Set(), lr = /* @__PURE__ */ new Set();
function ur(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || hr.call(t, e), !e.cancelBubble) return Xe(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (i.__removed = !1, Ue(() => {
		i.__removed || t.addEventListener(e, i, r);
	})) : t.addEventListener(e, i, r), i;
}
function dr(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = ur(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && cn(() => {
		o.__removed = !0, t.removeEventListener(e, o, a);
	});
}
function K(e, t, n) {
	(t[sr] ??= {})[e] = n;
}
function fr(e) {
	for (var t = 0; t < e.length; t++) cr.add(e[t]);
	for (var n of lr) n(e);
}
var pr = null, mr = !1;
function hr(e) {
	var t = this, n = t.ownerDocument, r = e.type, a = e.composedPath?.() || [], o = a[0] || e.target;
	pr = e, mr || (mr = !0, setTimeout(() => {
		mr = !1, pr = null;
	}));
	var s = 0, c = pr === e && e[sr];
	if (c) {
		var l = a.indexOf(c);
		if (l !== -1 && (t === document || t === window)) {
			e[sr] = t;
			return;
		}
		var u = a.indexOf(t);
		if (u === -1) return;
		l <= u && (s = l);
	}
	if (o = a[s] || e.target, o !== t) {
		i(e, "currentTarget", {
			configurable: !0,
			get() {
				return o || n;
			}
		});
		var d = U, f = W;
		Nn(null), Pn(null);
		try {
			for (var p, m = []; o !== null && o !== t;) {
				try {
					var h = o[sr]?.[r];
					h != null && (!o.disabled || e.target === o) && h.call(o, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				s++, o = s < a.length ? a[s] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[sr] = t, delete e.currentTarget, Nn(d), Pn(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var gr = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function _r(e) {
	return gr?.createHTML(e) ?? e;
}
function vr(e) {
	var t = $t("template");
	return t.innerHTML = _r(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function yr(e, t) {
	var n = W;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function q(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (M) return yr(N, null), N;
		i === void 0 && (i = vr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Jt(i)));
		var t = r || Ut ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Jt(t), s = t.lastChild;
			yr(o, s);
		} else yr(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function br(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = !!(t & 1), a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (M) return yr(N, null), N;
		if (!o) {
			var e = /* @__PURE__ */ Jt(vr(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ Jt(e);) o.appendChild(/* @__PURE__ */ Jt(e));
			else o = /* @__PURE__ */ Jt(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ Jt(t), r = t.lastChild;
			yr(n, r);
		} else yr(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function xr(e, t) {
	return /* @__PURE__ */ br(e, t, "svg");
}
function Sr() {
	if (M) return yr(N, null), N;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = qt();
	return e.append(t, n), yr(t, n), e;
}
function J(e, t) {
	if (M) {
		var n = W;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = N), ge();
	} else e !== null && e.before(t);
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Cr(e) {
	let t = 0, n = Mt(0), r;
	return () => {
		sn() && (G(n), mn(() => (t === 0 && (r = nr(() => e(() => zt(n)))), t += 1, () => {
			Ue(() => {
				--t, t === 0 && (r?.(), r = void 0, zt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var wr = x | S;
function Tr(e, t, n, r) {
	new Er(e, t, n, r);
}
var Er = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = M ? N : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = Cr(() => (this.#m = Mt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = W;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = W.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = hn(() => {
			if (M) {
				let e = this.#t;
				ge();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, wr), M && (this.#e = N);
	}
	#g() {
		try {
			this.#a = gn(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		Ue(r), t && (this.#s = gn(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			t ? pe() : (t = !0, n && Pe(), this.#s !== null && Cn(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			}));
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					nn(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = gn(() => e(this.#e)), Ue(() => {
			var e = this.#c = document.createDocumentFragment(), t = qt(), n = !1;
			e.append(t), this.#a = this.#S(() => {
				try {
					return gn(() => this.#r(t));
				} catch (e) {
					try {
						this.error(e), n = !0;
					} catch (e) {
						nn(e, this.#i.parent);
					}
					return null;
				}
			}), this.#a === null ? (this.#c = null, n && this.#x(L)) : this.#u === 0 && (this.#e.before(e), this.#c = null, Cn(this.#o, () => {
				this.#o = null;
			}), this.#x(L));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = gn(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				Dn(this.#a, e);
				let t = this.#n.pending;
				this.#o = gn(() => t(this.#e));
			} else this.#x(L);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		qe(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = W, n = U, r = Fe;
		Pn(this.#i), Nn(this.#i), Ie(this.#i.ctx);
		try {
			return xt.ensure(), e();
		} finally {
			Pn(t), Nn(n), Ie(r);
		}
	}
	#C(e, t) {
		this.has_pending_snippet() ? (this.#u += e, this.#u === 0 && (this.#x(t), this.#o && Cn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null))) : this.parent && this.parent.#C(e, t);
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Ue(() => {
			this.#d = !1, this.#m && Lt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), G(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		L?.is_fork ? (this.#a && L.skip_effect(this.#a), this.#o && L.skip_effect(this.#o), this.#s && L.skip_effect(this.#s), L.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (bn(this.#a), null), this.#o &&= (bn(this.#o), null), this.#s &&= (bn(this.#s), null), M && (he(this.#t), _e(), he(ve()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return gn(() => {
						var r = W;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return nn(e, this.#i.parent), null;
				}
			}));
		};
		Ue(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				nn(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => nn(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
function Y(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ae] ??= e.nodeValue) && (e[ae] = n, e.nodeValue = `${n}`);
}
function Dr(e, t) {
	return kr(e, t);
}
var Or = /* @__PURE__ */ new Map();
function kr(e, { target: t, anchor: n, props: i = {}, events: a, context: o, intro: s = !0, transformError: c }) {
	Kt();
	var l = void 0, u = dn(() => {
		var s = n ?? t.appendChild(qt());
		Tr(s, { pending: () => {} }, (t) => {
			Le({});
			var n = Fe;
			if (o && (n.c = o), a && (i.$$events = a), M && yr(t, null), l = e(t, i) || ze(), M && (W.nodes.end = N, N === null || N.nodeType !== 8 || N.data !== "]")) throw fe(), le;
			Re();
		}, c);
		var u = /* @__PURE__ */ new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!u.has(r)) {
					u.add(r);
					var i = or(r);
					for (let e of [t, document]) {
						var a = Or.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Or.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, hr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return d(r(cr)), lr.add(d), () => {
			for (var e of u) for (let n of [t, document]) {
				var r = Or.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, hr), r.delete(e), r.size === 0 && Or.delete(n)) : r.set(e, i);
			}
			lr.delete(d), s !== n && s.parentNode?.removeChild(s);
		};
	});
	return Ar.set(l, u), l;
}
var Ar = /* @__PURE__ */ new WeakMap();
function jr(e, t) {
	let n = Ar.get(e);
	return n ? (Ar.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var Mr = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) Tn(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (Tn(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (bn(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						Dn(r, t), t.append(qt()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else bn(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), Cn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (bn(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = L, r = Qt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = qt();
				i.append(a), this.#n.set(e, {
					effect: gn(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, gn(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else M && (this.anchor = N), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function X(e, t, n = !1) {
	var r;
	M && (r = N, ge());
	var i = new Mr(e), a = n ? x : 0;
	function o(e, t) {
		if (M) {
			var n = ye(r);
			if (e !== parseInt(n.substring(1))) {
				var a = ve();
				he(a), i.anchor = a, me(!1), i.ensure(e, t), me(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	hn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/key.js
var Nr = Symbol("NaN");
function Pr(e, t, n) {
	M && ge();
	var r = new Mr(e), i = !Be();
	hn(() => {
		var e = t();
		e !== e && (e = Nr), i && typeof e == "object" && e && (e = {}), r.ensure(e, n);
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Z(e, t) {
	return t;
}
function Fr(e, t, n) {
	for (var i = [], a = t.length, o, s = t.length, c = 0; c < a; c++) {
		let n = t[c];
		Cn(n, () => {
			if (o) {
				if (o.pending.delete(n), o.done.add(n), o.pending.size === 0) {
					var t = e.outrogroups;
					Ir(e, r(o.done)), t.delete(o), t.size === 0 && (e.outrogroups = null);
				}
			} else --s;
		}, !1);
	}
	if (s === 0) {
		var l = i.length === 0 && n !== null && e.pending.size === 0;
		if (l) {
			var u = n, d = u.parentNode;
			Zt(d), d.append(u), e.items.clear();
		}
		Ir(e, t, !l);
	} else o = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(o);
}
function Ir(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= w, Dn(a, document.createDocumentFragment())) : bn(t[i], n);
	}
}
var Lr;
function Q(t, n, i, a, o, s = null) {
	var c = t, l = /* @__PURE__ */ new Map();
	if (n & 4) {
		var u = t;
		c = M ? he(/* @__PURE__ */ Jt(u)) : u.appendChild(qt());
	}
	M && ge();
	var d = null, f = /* @__PURE__ */ at(() => {
		var t = i();
		return e(t) ? t : t == null ? [] : r(t);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, zr(v, p, c, n, a), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= w, Vr(d, null, c)) : Tn(d) : Cn(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: hn(() => {
			p = G(f);
			var e = p.length;
			let t = !1;
			M && ye(c) === "[!" != (e === 0) && (c = ve(), he(c), me(!1), t = !0);
			for (var r = /* @__PURE__ */ new Set(), u = L, v = Qt(), y = 0; y < e; y += 1) {
				M && N.nodeType === 8 && N.data === "]" && (c = N, t = !0, me(!1));
				var ee = p[y], b = a(ee, y), x = h ? null : l.get(b);
				x ? (x.v && Lt(x.v, ee), x.i && Lt(x.i, y), v && u.unskip_effect(x.e)) : (x = Br(l, h ? c : Lr ??= qt(), ee, b, y, o, n, i), h || (x.e.f |= w), l.set(b, x)), r.add(b);
			}
			if (e === 0 && s && !d && (h ? d = gn(() => s(c)) : (d = gn(() => s(Lr ??= qt())), d.f |= w)), e > r.size && Te("", "", ""), M && e > 0 && he(ve()), !h) {
				if (m.set(u, r), v) {
					for (let [e, t] of l) r.has(e) || u.skip_effect(t.e);
					u.oncommit(g), u.ondiscard(_);
				} else g(u);
			}
			t && me(!0), G(f);
		}),
		flags: n,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, M && (c = N);
}
function Rr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function zr(e, t, n, i, a) {
	var o = !!(i & 8), s = t.length, c = e.items, l = Rr(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (o) for (v = 0; v < s; v += 1) h = t[v], g = a(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < s; v += 1) {
		if (h = t[v], g = a(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (Tn(_), o && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) {
			if (_.f ^= w, _ === l) Vr(_, null, n);
			else {
				var y = d ? d.next : l;
				_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Hr(e, d, _), Hr(e, _, y), Vr(_, y, n), d = _, p = [], m = [], l = Rr(d.next);
				continue;
			}
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var ee = m[0], b;
					d = ee.prev;
					var x = p[0], S = p[p.length - 1];
					for (b = 0; b < p.length; b += 1) Vr(p[b], ee, n);
					for (b = 0; b < m.length; b += 1) u.delete(m[b]);
					Hr(e, x.prev, S.next), Hr(e, d, x), Hr(e, S, ee), l = ee, d = S, --v, p = [], m = [];
				} else u.delete(_), Vr(_, l, n), Hr(e, _.prev, _.next), Hr(e, _, d === null ? e.effect.first : d.next), Hr(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = Rr(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = Rr(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Ir(e, r(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var C = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || C.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && C.push(l), l = Rr(l.next);
		var T = C.length;
		if (T > 0) {
			var E = i & 4 && s === 0 ? n : null;
			if (o) {
				for (v = 0; v < T; v += 1) C[v].nodes?.a?.measure();
				for (v = 0; v < T; v += 1) C[v].nodes?.a?.fix();
			}
			Fr(e, C, E);
		}
	}
	o && Ue(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Br(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Mt(n) : /* @__PURE__ */ Pt(n, !1, !1) : null, l = o & 2 ? Mt(i) : null;
	return {
		v: c,
		i: l,
		e: gn(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Vr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Yt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Hr(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/actions.js
function Ur(e, t, n) {
	fn(() => {
		var r = nr(() => t(e, n?.()) || {});
		if (n && r?.update) {
			var i = !1, a = {};
			mn(() => {
				var e = n();
				rr(e), i && xe(a, e) && (a = e, r.update(e));
			}), i = !0;
		}
		if (r?.destroy) return () => r.destroy();
	});
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function Wr(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = Wr(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function Gr() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Wr(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function Kr(e) {
	return typeof e == "object" ? Gr(e) : e ?? "";
}
var qr = [..." 	\n\r\f\xA0\v﻿"];
function Jr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || qr.includes(r[o - 1])) && (s === r.length || qr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function Yr(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function Xr(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Zr(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\/\*.*?\*\//g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(Xr)), i && c.push(...Object.keys(i).map(Xr));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = Xr(e.substring(l, u).trim());
							if (!c.includes(p)) {
								f !== ";" && d++;
								var m = e.substring(l, d).trim();
								n += " " + m + ";";
							}
						}
						l = d + 1, u = -1;
					}
				}
			}
		}
		return r && (n += Yr(r)), i && (n += Yr(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Qr(e, t, n, r, i, a) {
	var o = e[ie];
	if (M || o !== n || o === void 0) {
		var s = Jr(n, r, a);
		(!M || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[ie] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function $r(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function ei(e, t, n, r) {
	var i = e[A];
	if (M || i !== t) {
		var a = Zr(t, r);
		(!M || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[A] = t;
	} else r && (Array.isArray(r) ? ($r(e, n?.[0], r[0]), $r(e, n?.[1], r[1], "important")) : $r(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var ti = Symbol("is custom element"), ni = Symbol("is html"), ri = ce ? "link" : "LINK";
function ii(e) {
	if (M) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					$(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					$(e, "checked", null), e.checked = r;
				}
			}
		};
		e[oe] = n, Ue(n), Ye();
	}
}
function $(e, t, n, r) {
	var i = ai(e);
	M && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ri) || i[t] !== (i[t] = n) && (t === "loading" && (e[ne] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && si(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function ai(e) {
	return e[re] ??= {
		[ti]: e.nodeName.includes("-"),
		[ni]: e.namespaceURI === ue
	};
}
var oi = /* @__PURE__ */ new Map();
function si(e) {
	var t = e.getAttribute("is") || e.nodeName, n = oi.get(t);
	if (n) return n;
	oi.set(t, n = /* @__PURE__ */ new Set());
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var s in r = o(i), r) r[s].set && s !== "innerHTML" && s !== "textContent" && s !== "innerText" && n.add(s);
		i = l(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function ci(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	Ze(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = li(e) ? ui(a) : a, n(a), L !== null && r.add(L), await $n(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (M && e.defaultValue !== e.value || nr(t) == null && e.value) && (n(li(e) ? ui(e.value) : e.value), L !== null && r.add(L)), mn(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = L;
			if (r.has(i)) return;
		}
		li(e) && n === ui(e.value) || (e.type !== "date" || n || e.value) && n !== e.value && (e.value = n ?? "");
	});
}
function li(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function ui(e) {
	return e === "" ? null : +e;
}
var di = /* @__PURE__ */ new class e {
	#e = /* @__PURE__ */ new WeakMap();
	#t;
	#n;
	static entries = /* @__PURE__ */ new WeakMap();
	constructor(e) {
		this.#n = e;
	}
	observe(e, t) {
		var n = this.#e.get(e) || /* @__PURE__ */ new Set();
		return n.add(t), this.#e.set(e, n), this.#r().observe(e, this.#n), () => {
			var n = this.#e.get(e);
			n.delete(t), n.size === 0 && (this.#e.delete(e), this.#t.unobserve(e));
		};
	}
	#r() {
		return this.#t ??= new ResizeObserver((t) => {
			for (var n of t) {
				e.entries.set(n.target, n);
				for (var r of this.#e.get(n.target) || []) r(n);
			}
		});
	}
}({ box: "border-box" });
function fi(e, t, n) {
	var r = di.observe(e, () => n(e[t]));
	fn(() => (nr(() => n(e[t])), r));
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var pi = !1;
function mi(e) {
	var t = pi;
	try {
		return pi = !1, [e(), pi];
	} finally {
		pi = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function hi(e, t, n, r) {
	var i = !0, o = !!(n & 8), s = !!(n & 16), c = r, l = !0, u = void 0, d = () => s && i ? (u ??= /* @__PURE__ */ nt(r), G(u)) : (l && (l = !1, c = s ? nr(r) : r), c);
	let f;
	if (o) {
		var p = D in e || k in e;
		f = a(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	o ? [m, h] = mi(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && Ae(t), f(m)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? d() : (l = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (c = void 0), n === void 0 ? c : n;
	};
	if (i && !(n & 4)) return g;
	if (f) {
		var _ = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || _ || h) && f(t ? g() : e), e) : g();
		});
	}
	var v = !1, y = (n & 1 ? nt : at)(() => (v = !1, g()));
	o && G(y);
	var ee = W;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? G(y) : i && o ? Vt(e) : e;
			return R(y, n), v = !0, c !== void 0 && (c = n), e;
		}
		return An && v || ee.f & 16384 ? y.v : G(y);
	});
}
function gi(e) {
	Fe === null && Ce("onMount"), ln(() => {
		let t = nr(e);
		if (typeof t == "function") return t;
	});
}
function _i(e) {
	Fe === null && Ce("onDestroy"), gi(() => () => nr(e));
}
//#endregion
//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region src/ticketlog/viewer/i18n.js
var vi = {
	de: {
		"common.close": "Schließen",
		"health.expand": "Vergrößern",
		"health.table": "Tabelle",
		"health.chart": "Diagramm",
		"health.time": "Zeit",
		"health.noData": "Noch keine Messwerte - sie kommen jede Sekunde."
	},
	en: {
		"common.close": "Close",
		"health.expand": "Enlarge",
		"health.table": "Table",
		"health.chart": "Chart",
		"health.time": "Time",
		"health.noData": "No measurements yet - they come every second."
	}
}, yi = "de";
function bi(e) {
	return vi[yi][e] ?? e;
}
//#endregion
//#region src/lib/curve.js
function xi(e) {
	let t = e.length;
	if (t < 2) return [];
	let n = [];
	for (let r = 0; r < t - 1; r++) {
		let t = e[r + 1][0] - e[r][0];
		n.push(t > 0 ? (e[r + 1][1] - e[r][1]) / t : 0);
	}
	let r = e.map((e, r) => {
		if (r === 0) return n[0];
		if (r === t - 1) return n[t - 2];
		let i = n[r - 1], a = n[r];
		return i * a <= 0 ? 0 : 2 * i * a / (i + a);
	}), i = [];
	for (let n = 0; n < t - 1; n++) {
		let [t, a] = e[n], [o, s] = e[n + 1], c = (o - t) / 3;
		i.push(`C${(t + c).toFixed(1)},${(a + r[n] * c).toFixed(1)} ${(o - c).toFixed(1)},${(s - r[n + 1] * c).toFixed(1)} ${o.toFixed(1)},${s.toFixed(1)}`);
	}
	return i;
}
//#endregion
//#region src/lib/stateline.js
function Si(e, t, n) {
	return [...(n ? [...e, n] : e).filter((e) => !t.some((t) => e.time >= t.from && e.time < t.to)).map((e) => ({
		...e,
		phase: null
	})), ...t.flatMap((e) => [{
		time: e.from,
		value: 0,
		color: e.color,
		phase: e
	}, {
		time: e.to,
		value: 0,
		color: e.color,
		phase: e
	}])].sort((e, t) => e.time - t.time);
}
function Ci(e, t, n, r) {
	let i = [];
	e.forEach((t, n) => {
		let a = e[n - 1];
		a && (t.time - a.time <= r || a.phase && a.phase === t.phase) ? i.at(-1).push(t) : i.push([t]);
	});
	let a = [];
	for (let e of i) {
		let r = null;
		xi(e.map((e) => [t(e.time), n(e.value)])).forEach((i, o) => {
			let s = e[o + 1].color;
			r && r.color === s ? r.d += i : (r = {
				color: s,
				d: `M${t(e[o].time).toFixed(1)},${n(e[o].value).toFixed(1)}${i}`
			}, a.push(r));
		});
	}
	return a;
}
//#endregion
//#region src/components/LineChart.svelte
var wi = /* @__PURE__ */ q("<button class=\"secondary mini svelte-z8jt5q\"> </button>"), Ti = /* @__PURE__ */ q("<button class=\"secondary mini svelte-z8jt5q\">⤢</button>"), Ei = /* @__PURE__ */ q("<span><i class=\"svelte-z8jt5q\"></i> </span>"), Di = /* @__PURE__ */ q("<span><i class=\"band-key svelte-z8jt5q\"></i> </span>"), Oi = /* @__PURE__ */ q("<div class=\"legend svelte-z8jt5q\"><!> <!></div>"), ki = /* @__PURE__ */ q("<p class=\"muted small empty svelte-z8jt5q\"> </p>"), Ai = /* @__PURE__ */ q("<th class=\"svelte-z8jt5q\"> </th>"), ji = /* @__PURE__ */ q("<td class=\"svelte-z8jt5q\"> </td>"), Mi = /* @__PURE__ */ q("<tr><td class=\"svelte-z8jt5q\"> </td><!></tr>"), Ni = /* @__PURE__ */ q("<div class=\"table svelte-z8jt5q\"><table class=\"svelte-z8jt5q\"><thead><tr><th class=\"svelte-z8jt5q\"> </th><!></tr></thead><tbody></tbody></table></div>"), Pi = /* @__PURE__ */ xr("<text class=\"axis svelte-z8jt5q\"> </text>"), Fi = /* @__PURE__ */ xr("<rect class=\"band svelte-z8jt5q\"></rect><!>", 1), Ii = /* @__PURE__ */ xr("<line class=\"grid svelte-z8jt5q\"></line><text class=\"axis svelte-z8jt5q\" text-anchor=\"end\"> </text>", 1), Li = /* @__PURE__ */ xr("<line class=\"ref svelte-z8jt5q\"></line><text class=\"axis svelte-z8jt5q\"> </text>", 1), Ri = /* @__PURE__ */ xr("<path class=\"line svelte-z8jt5q\"></path>"), zi = /* @__PURE__ */ xr("<path class=\"wash svelte-z8jt5q\"></path>"), Bi = /* @__PURE__ */ xr("<!><!>", 1), Vi = /* @__PURE__ */ xr("<text class=\"end svelte-z8jt5q\"> </text>"), Hi = /* @__PURE__ */ xr("<circle r=\"4.5\" class=\"dot svelte-z8jt5q\"></circle>"), Ui = /* @__PURE__ */ xr("<line class=\"cross svelte-z8jt5q\"></line><!>", 1), Wi = /* @__PURE__ */ q("<div class=\"row svelte-z8jt5q\"><i class=\"svelte-z8jt5q\"></i><strong> </strong><span class=\"svelte-z8jt5q\"> </span></div>"), Gi = /* @__PURE__ */ q("<div class=\"tip svelte-z8jt5q\"><div class=\"tip-time svelte-z8jt5q\"> </div> <!></div>"), Ki = /* @__PURE__ */ q("<div class=\"plot svelte-z8jt5q\"><svg role=\"img\" tabindex=\"0\"><!><!><!><!><clipPath><rect></rect></clipPath><g><!></g><!><!></svg> <!></div>"), qi = /* @__PURE__ */ q("<div class=\"overlay svelte-z8jt5q\"><div class=\"big svelte-z8jt5q\" role=\"dialog\" aria-modal=\"true\"><!></div></div>"), Ji = /* @__PURE__ */ q("<section class=\"card chart svelte-z8jt5q\"><div class=\"head svelte-z8jt5q\"><h3 class=\"svelte-z8jt5q\"> </h3> <div class=\"tools svelte-z8jt5q\"><button class=\"secondary mini svelte-z8jt5q\"> </button> <!></div></div> <!> <!></section> <!>", 1);
function Yi(e, t) {
	Le(t, !0);
	let n = hi(t, "points", 19, () => []), r = hi(t, "series", 19, () => []), i = hi(t, "format", 3, (e) => String(e)), a = hi(t, "yMax", 3, null), o = hi(t, "refs", 19, () => []), s = hi(t, "bands", 19, () => []), c = hi(t, "smooth", 3, !1), l = hi(t, "live", 3, null), u = hi(t, "states", 3, null), d = hi(t, "aligned", 3, !1), f = hi(t, "onpan", 3, null), p = hi(t, "long", 3, !1), m = hi(t, "seconds", 3, !1), h = hi(t, "height", 3, 190), g = hi(t, "from", 3, null), _ = hi(t, "to", 3, null), v = hi(t, "onClose", 3, null), y = /* @__PURE__ */ Nt(!1), ee = /* @__PURE__ */ Nt(400), b = "chart-" + Math.random().toString(36).slice(2, 8);
	function x() {
		R(ee, Math.max(260, Math.round(window.innerHeight * .62)), !0), R(y, !0);
	}
	let S = {
		top: 12,
		right: 52,
		bottom: 24,
		left: 48
	}, C = /* @__PURE__ */ Nt(600), w = /* @__PURE__ */ Nt(-1), T = /* @__PURE__ */ Nt(!1), E = {
		hour: "2-digit",
		minute: "2-digit"
	}, te = (e) => new Date(e).toLocaleString(void 0, p() ? {
		day: "2-digit",
		month: "2-digit",
		...E
	} : m() ? {
		...E,
		second: "2-digit"
	} : E), D = (e) => new Date(e).toLocaleString(void 0, p() ? {
		day: "2-digit",
		month: "2-digit"
	} : m() ? {
		...E,
		second: "2-digit"
	} : E), O = /* @__PURE__ */ I(() => g() ?? (n().length ? n()[0].time : 0)), k = /* @__PURE__ */ I(() => f() ? _() : Math.max(_() ?? 0, n().length ? n().at(-1).time : 1)), ne = /* @__PURE__ */ I(() => Math.max(10, G(C) - S.left - S.right)), re = /* @__PURE__ */ I(() => h() - S.top - S.bottom);
	function ie(e) {
		if (e <= 0) return 1;
		let t = 10 ** Math.floor(Math.log10(e));
		for (let n of [
			1,
			2,
			2.5,
			5,
			10
		]) if (n * t >= e) return n * t;
		return 10 * t;
	}
	let A = /* @__PURE__ */ I(() => {
		if (a() !== null) return a();
		let e = 0;
		for (let t of n()) if (!(f() && (t.time < G(O) || t.time > G(k)))) for (let n of r()) e = Math.max(e, t[n.key] ?? 0);
		for (let t of o()) e = Math.max(e, t.value);
		return ie(e * 1.05);
	}), ae = /* @__PURE__ */ I(() => [
		0,
		.25,
		.5,
		.75,
		1
	].map((e) => G(A) * e)), oe = (e) => S.left + (G(k) === G(O) ? G(ne) : (e - G(O)) / (G(k) - G(O)) * G(ne)), se = (e) => S.top + G(re) - Math.max(0, Math.min(e, G(A))) / G(A) * G(re), ce = /* @__PURE__ */ I(() => l() ? [...n(), l()] : n()), le = /* @__PURE__ */ I(() => {
		if (G(ce).length < 2) return [G(ce)];
		let e = G(ce).slice(1).map((e, t) => e.time - G(ce)[t].time), t = [[G(ce)[0]]];
		for (let n = 1; n < G(ce).length; n++) {
			let r = e[n - 1];
			(r > (Math.max(e[n - 2] ?? 0, e[n] ?? 0) || r) * 3 || s().some((e) => G(ce)[n - 1].time <= e.from && G(ce)[n].time >= e.to)) && t.push([]), t.at(-1).push(G(ce)[n]);
		}
		return t;
	});
	function j(e, t) {
		let n = e.map((e) => [oe(e.time), se(e[t] ?? 0)]);
		return `M${n[0][0].toFixed(1)},${n[0][1].toFixed(1)}` + (c() ? xi(n) : n.slice(1).map(([e, t]) => `L${e.toFixed(1)},${t.toFixed(1)}`)).join("");
	}
	function ue(e) {
		return G(le).filter((e) => e.length).map((t) => j(t, e)).join("");
	}
	let de = /* @__PURE__ */ I(() => u() ? Ci(Si(u().points, u().phases, u().live), oe, se, u().gap ?? 3 * Math.max(2e4, (G(k) - G(O)) / 300)) : []);
	function fe(e) {
		let t = se(0).toFixed(1);
		return G(le).filter((e) => e.length > 1).map((n) => `${j(n, e)}L${oe(n.at(-1).time).toFixed(1)},${t}L${oe(n[0].time).toFixed(1)},${t}Z`).join("");
	}
	let pe = /* @__PURE__ */ I(() => {
		if (!n().length) return [];
		let e = G(ce).at(-1), t = r().map((t) => ({
			...t,
			y: se(e[t.key] ?? 0),
			value: e[t.key]
		})), i = [...t].sort((e, t) => e.y - t.y);
		for (let e = 1; e < i.length; e++) if (i[e].y - i[e - 1].y < 14) return [];
		return t;
	});
	function M(e) {
		if (!n().length || e < oe(n()[0].time) - 8) return -1;
		let t = G(O) + (e - S.left) / G(ne) * (G(k) - G(O)), r = 0, i = n().length - 1;
		for (; i - r > 1;) {
			let e = r + i >> 1;
			n()[e].time < t ? r = e : i = e;
		}
		return Math.abs(n()[r].time - t) <= Math.abs(n()[i].time - t) ? r : i;
	}
	let me = null;
	function N(e) {
		f() && (me = e.clientX, e.currentTarget.setPointerCapture(e.pointerId));
	}
	function he(e) {
		let t = e.currentTarget.getBoundingClientRect();
		if (me !== null) {
			let n = (e.clientX - me) / t.width * G(C);
			me = e.clientX, R(w, -1), f()(n / G(ne) * (G(k) - G(O)));
		} else R(w, M((e.clientX - t.left) / t.width * G(C)), !0);
	}
	function ge(e) {
		let t = (e) => {
			if (!f()) return;
			e.preventDefault();
			let t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
			f()(Math.sign(t) * Math.min(1, Math.abs(t) / 100) * (G(k) - G(O)) * .1);
		};
		return e.addEventListener("wheel", t, { passive: !1 }), { destroy: () => e.removeEventListener("wheel", t) };
	}
	function _e(e) {
		if (n().length) {
			if (e.key === "ArrowLeft") R(w, Math.max(0, (G(w) < 0 ? n().length : G(w)) - 1), !0);
			else if (e.key === "ArrowRight") R(w, Math.min(n().length - 1, G(w) + 1), !0);
			else if (e.key === "Escape") R(w, -1);
			else return;
			e.preventDefault();
		}
	}
	let ve = /* @__PURE__ */ I(() => G(w) >= 0 && G(w) < n().length ? n()[G(w)] : null), ye = /* @__PURE__ */ I(() => G(ve) ? Math.min(Math.max(oe(G(ve).time) + 12, 0), G(C) - 170) : 0), be = /* @__PURE__ */ I(() => d() || !!f()), xe = [
		10,
		30,
		60,
		120,
		300,
		600,
		1800,
		3600,
		7200,
		14400,
		28800,
		86400,
		172800,
		432e3
	].map((e) => e * 1e3), Se = /* @__PURE__ */ I(() => {
		if (!n().length && !s().length) return [];
		if (!G(be)) return [
			0,
			.25,
			.5,
			.75,
			1
		].map((e) => G(O) + (G(k) - G(O)) * e);
		let e = xe.find((e) => (G(k) - G(O)) / e <= 6) ?? 432e6, t = [];
		for (let n = Math.ceil(G(O) / e) * e; n <= G(k); n += e) t.push(n);
		return t;
	});
	var Ce = Ji();
	dr("keydown", Ht, (e) => G(y) && e.key === "Escape" && R(y, !1));
	var we = Xt(Ce), Te = z(we), Ee = z(Te), De = B(Ee, !0), Oe = V(Ee, 2), ke = z(Oe), Ae = B(ke, !0), je = V(ke, 2), Me = (e) => {
		var t = wi(), n = B(t);
		H((e) => Y(n, `✕ ${e ?? ""}`), [() => bi("common.close")]), K("click", t, function(...e) {
			v()?.apply(this, e);
		}), J(e, t);
	}, Ne = (e) => {
		var t = Ti();
		H((e, n) => {
			$(t, "title", e), $(t, "aria-label", n);
		}, [() => bi("health.expand"), () => bi("health.expand")]), K("click", t, x), J(e, t);
	};
	X(je, (e) => {
		v() ? e(Me) : e(Ne, -1);
	}), P(Oe), P(Te);
	var Pe = V(Te, 2), Fe = (e) => {
		var t = Oi(), n = z(t), i = (e) => {
			var t = Sr();
			Q(Xt(t), 17, r, Z, (e, t) => {
				var n = Ei(), r = z(n), i = V(r, 1, !0);
				P(n), H(() => {
					ei(r, `background: ${G(t).color ?? ""}`), Y(i, G(t).label);
				}), J(e, n);
			}), J(e, t);
		};
		X(n, (e) => {
			r().length > 1 && e(i);
		}), Q(V(n, 2), 17, () => [...new Map(s().map((e) => [e.label, e])).values()], Z, (e, t) => {
			var n = Di(), r = z(n), i = V(r, 1, !0);
			P(n), H(() => {
				ei(r, G(t).color ? `background: ${G(t).color}` : ""), Y(i, G(t).label);
			}), J(e, n);
		}), P(t), J(e, t);
	};
	X(Pe, (e) => {
		(r().length > 1 || s().length) && e(Fe);
	});
	var Ie = V(Pe, 2), ze = (e) => {
		var t = ki(), n = B(t, !0);
		H((e) => Y(n, e), [() => bi("health.noData")]), J(e, t);
	}, Be = (e) => {
		var t = Ni(), a = z(t), o = z(a), s = z(o), c = z(s), l = B(c, !0);
		Q(V(c), 17, r, Z, (e, t) => {
			var n = Ai(), r = B(n, !0);
			H(() => Y(r, G(t).label)), J(e, n);
		}), P(s), P(o);
		var u = V(o);
		Q(u, 21, () => [...n()].reverse(), (e) => e.time, (e, t) => {
			var n = Mi(), a = z(n), o = B(a, !0);
			Q(V(a), 17, r, Z, (e, n) => {
				var r = ji(), a = B(r, !0);
				H((e) => Y(a, e), [() => i()(G(t)[G(n).key])]), J(e, r);
			}), P(n), H((e) => Y(o, e), [() => te(G(t).time)]), J(e, n);
		}), P(u), P(a), P(t), H((e) => Y(l, e), [() => bi("health.time")]), J(e, t);
	}, Ve = (e) => {
		var n = Ki(), a = z(n);
		let c;
		var l = z(a);
		Q(l, 17, s, Z, (e, t) => {
			let n = /* @__PURE__ */ I(() => oe(Math.max(G(t).from, G(O)))), r = /* @__PURE__ */ I(() => Math.max(2, oe(Math.min(G(t).to, G(k))) - G(n)));
			var i = Fi(), a = Xt(i), o = V(a), s = (e) => {
				var r = Pi(), i = B(r, !0);
				H(() => {
					$(r, "x", G(n) + 6), $(r, "y", S.top + 14), Y(i, G(t).label);
				}), J(e, r);
			};
			X(o, (e) => {
				G(r) >= 34 && e(s);
			}), H(() => {
				$(a, "x", G(n)), $(a, "y", S.top), $(a, "width", G(r)), $(a, "height", G(re)), ei(a, G(t).color ? `fill: ${G(t).color}` : "");
			}), J(e, i);
		});
		var d = V(l);
		Q(d, 17, () => G(ae), Z, (e, t) => {
			var n = Ii(), r = Xt(n), a = V(r), o = B(a, !0);
			H((e, t, n, i) => {
				$(r, "x1", S.left), $(r, "x2", S.left + G(ne)), $(r, "y1", e), $(r, "y2", t), $(a, "x", S.left - 6), $(a, "y", n), Y(o, i);
			}, [
				() => se(G(t)),
				() => se(G(t)),
				() => se(G(t)) + 4,
				() => i()(G(t))
			]), J(e, n);
		});
		var p = V(d);
		Q(p, 17, () => G(Se), Z, (e, t, n) => {
			var r = Pi(), i = B(r, !0);
			H((e, t) => {
				$(r, "x", e), $(r, "y", h() - 6), $(r, "text-anchor", G(be) ? "middle" : n === 0 ? "start" : n === 4 ? "end" : "middle"), Y(i, t);
			}, [() => oe(G(t)), () => D(G(t))]), J(e, r);
		});
		var m = V(p);
		Q(m, 17, o, Z, (e, t) => {
			var n = Li(), r = Xt(n), i = V(r), a = B(i, !0);
			H((e, n, o) => {
				$(r, "x1", S.left), $(r, "x2", S.left + G(ne)), $(r, "y1", e), $(r, "y2", n), ei(r, G(t).color ? `stroke: ${G(t).color}` : ""), $(i, "x", S.left + 4), $(i, "y", o), Y(a, G(t).label);
			}, [
				() => se(G(t).value),
				() => se(G(t).value),
				() => se(G(t).value) - 4
			]), J(e, n);
		});
		var g = V(m), _ = z(g);
		$(_, "y", 0), P(g);
		var v = V(g), y = z(v), ee = (e) => {
			var t = Sr();
			Q(Xt(t), 17, () => G(de), Z, (e, t) => {
				var n = Ri();
				H(() => {
					$(n, "d", G(t).d), ei(n, `stroke: ${G(t).color ?? ""}`);
				}), J(e, n);
			}), J(e, t);
		}, x = (e) => {
			var t = Bi(), n = Xt(t), i = (e) => {
				var t = zi();
				H((e) => {
					$(t, "d", e), ei(t, `fill: ${r()[0].color ?? ""}`);
				}, [() => fe(r()[0].key)]), J(e, t);
			};
			X(n, (e) => {
				r().length === 1 && e(i);
			}), Q(V(n), 17, r, Z, (e, t) => {
				var n = Ri();
				H((e) => {
					$(n, "d", e), ei(n, `stroke: ${G(t).color ?? ""}`);
				}, [() => ue(G(t).key)]), J(e, n);
			}), J(e, t);
		};
		X(y, (e) => {
			u() ? e(ee) : e(x, -1);
		}), P(v);
		var T = V(v);
		Q(T, 17, () => G(pe), Z, (e, t) => {
			var n = Vi(), r = B(n, !0);
			H((e) => {
				$(n, "x", S.left + G(ne) + 6), $(n, "y", G(t).y + 4), Y(r, e);
			}, [() => i()(G(t).value)]), J(e, n);
		});
		var E = V(T), ie = (e) => {
			var t = Ui(), n = Xt(t);
			Q(V(n), 17, r, Z, (e, t) => {
				var n = Hi();
				H((e, r) => {
					$(n, "cx", e), $(n, "cy", r), ei(n, `fill: ${G(t).color ?? ""}`);
				}, [() => oe(G(ve).time), () => se(G(ve)[G(t).key] ?? 0)]), J(e, n);
			}), H((e, t) => {
				$(n, "x1", e), $(n, "x2", t), $(n, "y1", S.top), $(n, "y2", S.top + G(re));
			}, [() => oe(G(ve).time), () => oe(G(ve).time)]), J(e, t);
		};
		X(E, (e) => {
			G(ve) && e(ie);
		}), P(a), Ur(a, (e) => ge?.(e));
		var A = V(a, 2), ce = (e) => {
			var t = Gi(), n = z(t), a = B(n, !0);
			Q(V(n, 2), 17, r, Z, (e, t) => {
				var n = Wi(), r = z(n), a = V(r), o = B(a, !0), s = B(V(a), !0);
				P(n), H((e) => {
					ei(r, `background: ${G(t).color ?? ""}`), Y(o, e), Y(s, G(t).label);
				}, [() => i()(G(ve)[G(t).key])]), J(e, n);
			}), P(t), H((e) => {
				ei(t, `left: ${G(ye) ?? ""}px`), Y(a, e);
			}, [() => te(G(ve).time)]), J(e, t);
		};
		X(A, (e) => {
			G(ve) && e(ce);
		}), P(n), H(() => {
			$(a, "viewBox", `0 0 ${G(C) ?? ""} ${h() ?? ""}`), $(a, "height", h()), $(a, "aria-label", t.title), c = Qr(a, 0, "svelte-z8jt5q", null, c, { pans: f() }), $(g, "id", b), $(_, "x", S.left), $(_, "width", G(ne)), $(_, "height", h()), $(v, "clip-path", `url(#${b})`);
		}), K("pointerdown", a, N), K("pointerup", a, () => me = null), dr("pointercancel", a, () => me = null), K("pointermove", a, he), dr("pointerleave", a, () => R(w, -1)), K("keydown", a, _e), fi(n, "clientWidth", (e) => R(C, e)), J(e, n);
	};
	X(Ie, (e) => {
		!n().length && !s().length ? e(ze) : G(T) ? e(Be, 1) : e(Ve, -1);
	}), P(we);
	var He = V(we, 2), Ue = (e) => {
		var h = qi(), v = z(h);
		Yi(z(v), {
			get title() {
				return t.title;
			},
			get points() {
				return n();
			},
			get series() {
				return r();
			},
			get format() {
				return i();
			},
			get yMax() {
				return a();
			},
			get refs() {
				return o();
			},
			get bands() {
				return s();
			},
			get smooth() {
				return c();
			},
			get live() {
				return l();
			},
			get states() {
				return u();
			},
			get aligned() {
				return d();
			},
			get onpan() {
				return f();
			},
			get long() {
				return p();
			},
			get seconds() {
				return m();
			},
			get from() {
				return g();
			},
			get to() {
				return _();
			},
			get height() {
				return G(ee);
			},
			onClose: () => R(y, !1)
		}), P(v), P(h), H(() => $(v, "aria-label", t.title)), K("click", h, (e) => e.target === e.currentTarget && R(y, !1)), J(e, h);
	};
	X(He, (e) => {
		G(y) && e(Ue);
	}), H((e) => {
		Y(De, t.title), $(ke, "aria-pressed", G(T)), Y(Ae, e);
	}, [() => G(T) ? bi("health.chart") : bi("health.table")]), K("click", ke, () => R(T, !G(T))), J(e, Ce), Re();
}
fr([
	"click",
	"pointerdown",
	"pointerup",
	"pointermove",
	"keydown"
]);
//#endregion
//#region src/ticketlog/texts.js
var Xi = {
	de: {
		title: "Log zum Ticket",
		hide: "Log ausblenden",
		span: "{from} bis {to} ({minutes} Minuten vor dem Erstellen)",
		errors: "Fehler",
		warnings: "Warnungen",
		events: "Ereignisse",
		zoom: "Zeitraum",
		min: "{n} Min",
		tps: "TPS",
		mspt: "Tick-Zeit",
		cpu: "CPU",
		ram: "RAM",
		world: "Welt",
		entities: "Entities",
		tiles: "Block-Entities",
		chunks: "Chunks",
		players: "Spieler",
		avg: "Durchschnitt",
		max: "Maximum",
		server: "Server",
		system: "System",
		used: "belegt",
		minTps: "Niedrigste TPS",
		maxMspt: "Längster Tick",
		maxRam: "Höchster RAM",
		maxEntities: "Meiste Entities",
		noHealth: "Keine Leistungswerte aus diesem Zeitraum (Server gerade gestartet?).",
		activity: "Aktivität",
		created: "Ticket erstellt",
		software: "Software",
		cores: "Kerne",
		uptime: "Läuft seit",
		distances: "Sicht/Simulation",
		storage: "Speicher",
		jvm: "JVM",
		creator: "Ersteller",
		target: "Gemeldet",
		position: "Position",
		chunk: "Chunk",
		biome: "Biom",
		light: "Licht",
		gameMode: "Spielmodus",
		flying: "fliegt",
		state: "Zustand",
		client: "Client",
		protocol: "Protokoll",
		viewDistance: "Sichtweite",
		hand: "In der Hand",
		effects: "Effekte",
		worlds: "Welten",
		hotChunks: "Chunks mit den meisten Entities",
		plugins: "Plugins ({count})",
		all: "Alles",
		console: "Server-Log",
		search: "Im Log suchen ...",
		older: "{count} ältere Einträge anzeigen",
		empty: "Keine Einträge für diesen Filter.",
		cut: "Das Server-Log war länger - nur die neuesten Zeilen wurden gespeichert.",
		area: "Umgebung",
		areaHint: "{size} × {size} Blöcke (16 × 16 Chunks) um {who} beim Erstellen",
		thePlace: "den Ort des Tickets",
		layerEntities: "Entities",
		layerDespawned: "Despawnte Items",
		layerDeaths: "Tode",
		layerPath: "Weg",
		layerPlayers: "Spieler",
		hostile: "feindlich",
		passive: "friedlich",
		item: "Item",
		other: "Sonstiges",
		entitiesCut: "Sehr viele Entities - die Karte zeigt die größten Gruppen.",
		topEntities: "Entities nach Art",
		despawnedTotal: "{count} Items despawnt",
		deathsTotal: "{count} Tode",
		inventory: "Inventar von {name}",
		noMap: "Kein Kartenbild (Chunks nicht geladen).",
		none: "keine",
		loaderArea: "Fläche",
		module: "Von {plugin}",
		pathHint: "Weg in den {minutes} Minuten davor",
		slot: "Platz",
		nearPlayers: "Spieler in der Nähe",
		entitiesNear: "Entities in der Nähe",
		tilesNear: "Block-Entities",
		playHint: "Die letzten {n} Minuten Spielzeit von {who} - Minute für Minute abspielbar, zuletzt der Moment des Tickets",
		prev: "Vorige Minute",
		next: "Nächste Minute",
		minutes: "Minuten",
		offline: "offline dazwischen",
		minuteOf: "Minute {n} von {of}",
		mActions: "Aktionen des Spielers",
		mAround: "Umgebung",
		mBroken: "Abgebaut",
		mPlaced: "Platziert",
		mPicked: "Aufgehoben",
		mDropped: "Fallen gelassen",
		mTaken: "Schaden bekommen",
		mDealt: "Schaden ausgeteilt",
		mCommands: "Befehle",
		mCame: "Spieler kamen",
		mWent: "Spieler gingen",
		mNoServer: "Keine Serverwerte für diese Minute (außerhalb des Logs).",
		mProblems: "{n} Warnungen/Fehler im Server-Log",
		ev_join: "Betreten",
		ev_quit: "Verlassen",
		ev_death: "Gestorben",
		ev_teleport: "Teleport"
	},
	en: {
		title: "Log of the ticket",
		hide: "Hide log",
		span: "{from} to {to} ({minutes} minutes before it was created)",
		errors: "errors",
		warnings: "warnings",
		events: "events",
		zoom: "Time span",
		min: "{n} min",
		tps: "TPS",
		mspt: "Tick time",
		cpu: "CPU",
		ram: "RAM",
		world: "World",
		entities: "Entities",
		tiles: "Block entities",
		chunks: "Chunks",
		players: "Players",
		avg: "Average",
		max: "Maximum",
		server: "Server",
		system: "System",
		used: "used",
		minTps: "Lowest TPS",
		maxMspt: "Longest tick",
		maxRam: "Highest RAM",
		maxEntities: "Most entities",
		noHealth: "No performance values from this time (server just started?).",
		activity: "Activity",
		created: "Ticket created",
		software: "Software",
		cores: "cores",
		uptime: "Running for",
		distances: "View/simulation",
		storage: "Storage",
		jvm: "JVM",
		creator: "Creator",
		target: "Reported",
		position: "Position",
		chunk: "chunk",
		biome: "Biome",
		light: "light",
		gameMode: "Game mode",
		flying: "flying",
		state: "State",
		client: "Client",
		protocol: "protocol",
		viewDistance: "view distance",
		hand: "In hand",
		effects: "Effects",
		worlds: "Worlds",
		hotChunks: "Chunks with the most entities",
		plugins: "Plugins ({count})",
		all: "All",
		console: "Server log",
		search: "Search the log ...",
		older: "Show {count} older entries",
		empty: "No entries for this filter.",
		cut: "The server log was longer - only the newest lines were saved.",
		area: "Surroundings",
		areaHint: "{size} × {size} blocks (16 × 16 chunks) around {who} when it was created",
		thePlace: "the place of the ticket",
		layerEntities: "Entities",
		layerDespawned: "Despawned items",
		layerDeaths: "Deaths",
		layerPath: "Way",
		layerPlayers: "Players",
		hostile: "hostile",
		passive: "passive",
		item: "item",
		other: "other",
		entitiesCut: "Very many entities - the map shows the biggest groups.",
		topEntities: "Entities by kind",
		despawnedTotal: "{count} items despawned",
		deathsTotal: "{count} deaths",
		inventory: "Inventory of {name}",
		noMap: "No map picture (chunks not loaded).",
		none: "none",
		loaderArea: "Area",
		module: "From {plugin}",
		pathHint: "Way in the {minutes} minutes before",
		slot: "Slot",
		nearPlayers: "Players nearby",
		entitiesNear: "Entities nearby",
		tilesNear: "Block entities",
		playHint: "The last {n} minutes of play of {who} - to play minute by minute, at the end the moment of the ticket",
		prev: "Previous minute",
		next: "Next minute",
		minutes: "Minutes",
		offline: "offline in between",
		minuteOf: "minute {n} of {of}",
		mActions: "Actions of the player",
		mAround: "Surroundings",
		mBroken: "Broken",
		mPlaced: "Placed",
		mPicked: "Picked up",
		mDropped: "Dropped",
		mTaken: "Damage taken",
		mDealt: "Damage dealt",
		mCommands: "Commands",
		mCame: "Players came",
		mWent: "Players left",
		mNoServer: "No server values for this minute (outside the log).",
		mProblems: "{n} warnings/errors in the server log",
		ev_join: "Joined",
		ev_quit: "Left",
		ev_death: "Died",
		ev_teleport: "Teleport"
	}
};
function Zi(e, t, n = {}) {
	return (Xi[e === "de" ? "de" : "en"][t] ?? Xi.en[t] ?? t).replace(/\{(\w+)\}/g, (e, t) => n[t] ?? `{${t}}`);
}
//#endregion
//#region src/ticketlog/LogMap.svelte
var Qi = /* @__PURE__ */ q("<button> </button>"), $i = /* @__PURE__ */ q("<span class=\"gap svelte-pbz4pw\"></span>"), ea = /* @__PURE__ */ q("<!> <button></button>", 1), ta = /* @__PURE__ */ q("<div class=\"player svelte-pbz4pw\"><button class=\"secondary small svelte-pbz4pw\">◀</button> <button class=\"small svelte-pbz4pw\"> </button> <button class=\"secondary small svelte-pbz4pw\">▶</button> <div class=\"strip svelte-pbz4pw\" role=\"group\"></div> <span class=\"when svelte-pbz4pw\"> </span></div>"), na = /* @__PURE__ */ xr("<image width=\"256\" height=\"256\" preserveAspectRatio=\"none\" class=\"tile svelte-pbz4pw\"></image>"), ra = /* @__PURE__ */ xr("<image preserveAspectRatio=\"none\" class=\"tile svelte-pbz4pw\"></image>"), ia = /* @__PURE__ */ xr("<rect class=\"mark svelte-pbz4pw\"><title> </title></rect>"), aa = /* @__PURE__ */ xr("<polyline class=\"path old svelte-pbz4pw\"></polyline>"), oa = /* @__PURE__ */ xr("<polyline class=\"path svelte-pbz4pw\"></polyline>"), sa = /* @__PURE__ */ xr("<!><!>", 1), ca = /* @__PURE__ */ xr("<circle class=\"ent svelte-pbz4pw\"><title> </title></circle>"), la = /* @__PURE__ */ xr("<path class=\"desp svelte-pbz4pw\"><title> </title></path>"), ua = /* @__PURE__ */ xr("<rect width=\"3\" height=\"3\"><title> </title></rect>"), da = /* @__PURE__ */ xr("<circle r=\"2.6\" class=\"other svelte-pbz4pw\"><title> </title></circle>"), fa = /* @__PURE__ */ q("<div><span class=\"svelte-pbz4pw\"> </span><b class=\"svelte-pbz4pw\"> </b> </div>"), pa = /* @__PURE__ */ q("<div class=\"row svelte-pbz4pw\"><b class=\"svelte-pbz4pw\"> </b> </div>"), ma = /* @__PURE__ */ q("<div class=\"row muted svelte-pbz4pw\"> </div>"), ha = /* @__PURE__ */ q("<div class=\"row svelte-pbz4pw\"><b class=\"svelte-pbz4pw\"> </b></div>"), ga = /* @__PURE__ */ q("<div> </div>"), _a = /* @__PURE__ */ q("<div class=\"row svelte-pbz4pw\"><span class=\"svelte-pbz4pw\"> </span> </div>"), va = /* @__PURE__ */ q("<h4 class=\"t-title svelte-pbz4pw\"> <span class=\"muted\"> </span></h4> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!> <!> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!> <!> <!> <!></section>", 1), ya = /* @__PURE__ */ q("<div class=\"row svelte-pbz4pw\"><span class=\"svelte-pbz4pw\"> </span> <b class=\"svelte-pbz4pw\"> </b> </div>"), ba = /* @__PURE__ */ q("<h4 class=\"t-title svelte-pbz4pw\"> </h4> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section>", 1), xa = /* @__PURE__ */ q("<span><i class=\"line svelte-pbz4pw\"></i> </span>"), Sa = /* @__PURE__ */ q("<small class=\"svelte-pbz4pw\"> </small>"), Ca = /* @__PURE__ */ q("<span class=\"svelte-pbz4pw\"> <!></span>"), wa = /* @__PURE__ */ q("<span class=\"muted small svelte-pbz4pw\"> </span>"), Ta = /* @__PURE__ */ q("<h4 class=\"svelte-pbz4pw\"> </h4> <div class=\"inv svelte-pbz4pw\"></div>", 1), Ea = /* @__PURE__ */ q("<div class=\"lmap svelte-pbz4pw\"><div class=\"lhead svelte-pbz4pw\"><div><h3 class=\"svelte-pbz4pw\"> </h3> <p class=\"muted small svelte-pbz4pw\"> </p></div> <div class=\"layers svelte-pbz4pw\"><button> </button> <button> </button> <button> </button> <!> <button> </button></div></div> <!> <div class=\"split svelte-pbz4pw\"><div class=\"mapbox svelte-pbz4pw\"><svg preserveAspectRatio=\"none\" class=\"svelte-pbz4pw\"><rect class=\"ground svelte-pbz4pw\"></rect><!><!><!><!><!><!><!><!><circle r=\"3.4\" class=\"me svelte-pbz4pw\"><title> </title></circle></svg> <span class=\"coords svelte-pbz4pw\"> </span></div> <div class=\"table svelte-pbz4pw\"><!></div></div> <div class=\"legend muted small svelte-pbz4pw\"><span><i style=\"background: var(--bad)\" class=\"svelte-pbz4pw\"></i> </span> <span><i style=\"background: var(--good)\" class=\"svelte-pbz4pw\"></i> </span> <span><i style=\"background: var(--warn)\" class=\"svelte-pbz4pw\"></i> </span> <span><i style=\"background: var(--muted)\" class=\"svelte-pbz4pw\"></i> </span> <span> </span> <span> </span> <!></div> <!></div>");
function Da(e, t) {
	Le(t, !0);
	let n = hi(t, "mark", 3, null), r = (e, n) => Zi(t.lang, e, n), i = /* @__PURE__ */ I(() => t.log.area ?? null), a = /* @__PURE__ */ I(() => t.log.timeline?.minutes ?? []), o = /* @__PURE__ */ I(() => Object.values(t.log.timeline?.tiles ?? {})), s = /* @__PURE__ */ I(() => [...G(a).map((e, t) => ({
		kind: "minute",
		i: t,
		m: e,
		start: e.start,
		world: e.world,
		center: e.center
	})), ...G(i) ? [{
		kind: "created",
		start: t.log.time,
		world: G(i).world,
		center: G(i).center
	}] : []]), c = /* @__PURE__ */ Nt(-1), l = /* @__PURE__ */ I(() => G(c) < 0 || G(c) >= G(s).length ? G(s).length - 1 : G(c)), u = /* @__PURE__ */ I(() => G(s)[G(l)]), d = /* @__PURE__ */ Nt(!1), f = null;
	function p() {
		if (G(d)) return h();
		G(l) >= G(s).length - 1 && R(c, 0), R(d, !0), f = setInterval(() => {
			G(l) >= G(s).length - 1 ? h() : R(c, G(l) + 1);
		}, 1500);
	}
	function h() {
		R(d, !1), clearInterval(f);
	}
	_i(h);
	let g = (e) => {
		h(), R(c, Math.max(0, Math.min(G(s).length - 1, e)), !0);
	}, _ = Vt({
		entities: !0,
		despawned: !0,
		deaths: !0,
		path: !0,
		players: !0
	}), v = {
		hostile: "var(--bad)",
		passive: "var(--good)",
		item: "var(--warn)",
		projectile: "var(--muted)",
		vehicle: "var(--muted)",
		other: "var(--muted)"
	}, y = /* @__PURE__ */ I(() => G(u) ? {
		x: G(u).center[0] - 128,
		z: G(u).center[1] - 128
	} : {
		x: 0,
		z: 0
	}), ee = /* @__PURE__ */ I(() => G(u) ? G(o).filter((e) => e.world === G(u).world && e.x0 < G(y).x + 256 && e.x0 + 256 > G(y).x && e.z0 < G(y).z + 256 && e.z0 + 256 > G(y).z) : []), b = /* @__PURE__ */ I(() => G(u)?.kind === "minute" ? G(u).m.entities ?? [] : G(i)?.entities ?? []), x = /* @__PURE__ */ I(() => G(u)?.kind === "minute" ? G(u).m.despawnRows ?? [] : G(i)?.despawned?.rows ?? []), S = /* @__PURE__ */ I(() => G(u)?.kind === "minute" ? G(u).m.deaths ?? [] : G(i)?.deaths?.rows ?? []), C = /* @__PURE__ */ I(() => {
		if (!G(u)) return {
			old: [],
			now: []
		};
		let e = [], t = [];
		for (let n of G(s).slice(0, G(l) + 1)) {
			if (n.kind !== "minute" || n.world !== G(u).world) continue;
			let r = (n.m.path ?? []).map((e) => [e[1] + .5, e[2] + .5]);
			n === G(u) ? t = r : r.length && e.push(r);
		}
		return {
			old: e,
			now: t
		};
	}), w = (e) => new Date(e).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}), T = (e) => new Date(e).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit"
	}), E = (e) => String(e).replace(/^item:/, "").replace(/^player:/, ""), te = (e, t = 6) => Object.entries(e ?? {}).sort((e, t) => t[1] - e[1]).slice(0, t).map(([e, t]) => `${t}× ${E(e)}`).join(", "), D = (e) => Object.values(e ?? {}).reduce((e, t) => e + t, 0), O = /* @__PURE__ */ I(() => {
		let e = t.log.health?.fields ?? [];
		return (t.log.health?.rows ?? []).map((t) => Object.fromEntries(e.map((e, n) => [e, t[n]])));
	}), k = /* @__PURE__ */ I(() => {
		if (!G(u) || G(u).kind !== "minute") return null;
		let e = G(u).m, n = e.start, i = e.start + 6e4, a = G(l) > 0 && G(s)[G(l) - 1].kind === "minute" ? G(s)[G(l) - 1].m.counts : null, o = D(e.counts), c = [];
		a && (c = [.../* @__PURE__ */ new Set([...Object.keys(a), ...Object.keys(e.counts ?? {})])].map((t) => [t, (e.counts?.[t] ?? 0) - (a[t] ?? 0)]).filter(([, e]) => e !== 0).sort((e, t) => Math.abs(t[1]) - Math.abs(e[1])).slice(0, 4));
		let d = G(O).filter((e) => e.time >= n && e.time < i), f = (t.log.console?.lines ?? []).filter(([e, t]) => e >= n && e < i && (t === "warn" || t === "error")), p = (t.log.events ?? []).filter((e) => e.time >= n && e.time < i);
		return {
			actions: [
				D(e.broken) && [r("mBroken"), te(e.broken)],
				D(e.placed) && [r("mPlaced"), te(e.placed)],
				D(e.picked) && [r("mPicked"), te(e.picked)],
				D(e.dropped) && [r("mDropped"), te(e.dropped)],
				D(e.damageTaken) && [r("mTaken"), `${Math.round(D(e.damageTaken) * 10) / 10} (${Object.entries(e.damageTaken).map(([e, t]) => `${E(e)} ${t}`).join(", ")})`],
				D(e.damageDealt) && [r("mDealt"), `${Math.round(D(e.damageDealt) * 10) / 10} (${Object.entries(e.damageDealt).map(([e, t]) => `${E(e)} ${t}`).join(", ")})`],
				e.commands?.length && [r("mCommands"), e.commands.join("  ")]
			].filter(Boolean),
			events: e.events ?? [],
			around: [
				[r("entities"), o + (c.length ? " (" + c.map(([e, t]) => `${t > 0 ? "+" : ""}${t} ${E(e)}`).join(", ") + ")" : "")],
				D(e.despawned) && [r("layerDespawned"), te(e.despawned)],
				e.deaths?.length && [r("layerDeaths"), e.deaths.map((e) => E(e.type)).join(", ")],
				e.came?.length && [r("mCame"), e.came.join(", ")],
				e.went?.length && [r("mWent"), e.went.join(", ")]
			].filter(Boolean),
			server: d.length ? [["TPS", `${Math.min(...d.map((e) => e.tps)).toFixed(1)} – ${(d.reduce((e, t) => e + t.tps, 0) / d.length).toFixed(1)}`], [r("mspt"), `Ø ${(d.reduce((e, t) => e + t.mspt, 0) / d.length).toFixed(1)} ms · max ${Math.max(...d.map((e) => e.msptMax)).toFixed(0)} ms`]] : [],
			lines: f.slice(0, 4),
			lineCount: f.length,
			evts: p.slice(0, 4)
		};
	});
	function ne(e) {
		if (e.kind !== "minute") return "created";
		let n = e.m;
		return n.events?.some((e) => e.kind === "death") || (t.log.console?.lines ?? []).some(([e, t]) => t === "error" && e >= n.start && e < n.start + 6e4) ? "bad" : D(n.damageTaken) > 6 || n.deaths?.length ? "warn" : D(n.broken) + D(n.placed) + (n.events?.length ?? 0) + (n.commands?.length ?? 0) > 0 ? "act" : "calm";
	}
	let re = (e) => e > 0 && G(s)[e].kind === "minute" && G(s)[e - 1].kind === "minute" && G(s)[e].start - G(s)[e - 1].start > 6e4, ie = (e) => Math.min(4, .9 + Math.log2(e + 1) * .6);
	var A = Sr(), ae = Xt(A), oe = (e) => {
		var o = Ea(), c = z(o), f = z(c), h = z(f), te = B(h, !0), D = B(V(h, 2), !0);
		P(f);
		var O = V(f, 2), A = z(O);
		let ae;
		var oe = B(A, !0), se = V(A, 2);
		let ce;
		var le = B(se, !0), j = V(se, 2);
		let ue;
		var de = B(j, !0), fe = V(j, 2), pe = (e) => {
			var t = Qi();
			let n;
			var i = B(t, !0);
			H((e) => {
				n = Qr(t, 1, "svelte-pbz4pw", null, n, { on: _.path }), Y(i, e);
			}, [() => r("layerPath")]), K("click", t, () => _.path = !_.path), J(e, t);
		};
		X(fe, (e) => {
			G(a).length && e(pe);
		});
		var M = V(fe, 2);
		let me;
		var N = B(M, !0);
		P(O), P(c);
		var he = V(c, 2), ge = (e) => {
			var t = ta(), n = z(t), i = V(n, 2), a = B(i, !0), o = V(i, 2), c = V(o, 2);
			Q(c, 21, () => G(s), Z, (e, t, n) => {
				var i = ea(), a = Xt(i), o = (e) => {
					var t = $i();
					H((e) => $(t, "title", e), [() => r("offline")]), J(e, t);
				}, s = /* @__PURE__ */ I(() => re(n));
				X(a, (e) => {
					G(s) && e(o);
				});
				var c = V(a, 2);
				let u;
				H((e, t, r) => {
					u = Qr(c, 1, `seg ${e ?? ""}`, "svelte-pbz4pw", u, { sel: n === G(l) }), $(c, "title", t), $(c, "aria-label", r);
				}, [
					() => ne(G(t)),
					() => G(t).kind === "created" ? r("created") : T(G(t).start),
					() => G(t).kind === "created" ? r("created") : T(G(t).start)
				]), K("click", c, () => g(n)), J(e, i);
			}), P(c);
			var f = B(V(c, 2), !0);
			P(t), H((e, t, r, i) => {
				n.disabled = G(l) === 0, $(n, "aria-label", e), Y(a, G(d) ? "❚❚" : "▶"), o.disabled = G(l) === G(s).length - 1, $(o, "aria-label", t), $(c, "aria-label", r), Y(f, i);
			}, [
				() => r("prev"),
				() => r("next"),
				() => r("minutes"),
				() => G(u).kind === "created" ? r("created") + " " + T(G(u).start) : T(G(u).start)
			]), K("click", n, () => g(G(l) - 1)), K("click", i, p), K("click", o, () => g(G(l) + 1)), J(e, t);
		};
		X(he, (e) => {
			G(s).length > 1 && e(ge);
		});
		var _e = V(he, 2), ve = z(_e), ye = z(ve), be = z(ye);
		$(be, "width", 256), $(be, "height", 256);
		var xe = V(be);
		Q(xe, 17, () => G(ee), Z, (e, t) => {
			var n = na();
			H(() => {
				$(n, "href", G(t).image), $(n, "x", G(t).x0), $(n, "y", G(t).z0);
			}), J(e, n);
		});
		var Se = V(xe), Ce = (e) => {
			var t = ra();
			H(() => {
				$(t, "href", G(i).image), $(t, "x", G(i).x0), $(t, "y", G(i).z0), $(t, "width", G(i).size), $(t, "height", G(i).size);
			}), J(e, t);
		};
		X(Se, (e) => {
			G(u).kind === "created" && G(i)?.image && e(Ce);
		});
		var we = V(Se), Te = (e) => {
			var t = ia(), r = B(z(t), !0);
			P(t), H(() => {
				$(t, "x", n().x0), $(t, "y", n().z0), $(t, "width", n().x1 - n().x0 + 1), $(t, "height", n().z1 - n().z0 + 1), Y(r, n().label);
			}), J(e, t);
		};
		X(we, (e) => {
			n() && e(Te);
		});
		var Ee = V(we), De = (e) => {
			var t = sa(), n = Xt(t);
			Q(n, 17, () => G(C).old, Z, (e, t) => {
				var n = aa();
				H((e) => $(n, "points", e), [() => G(t).map((e) => e.join(",")).join(" ")]), J(e, n);
			});
			var r = V(n), i = (e) => {
				var t = oa();
				H((e) => $(t, "points", e), [() => G(C).now.map((e) => e.join(",")).join(" ")]), J(e, t);
			};
			X(r, (e) => {
				G(C).now.length && e(i);
			}), J(e, t);
		};
		X(Ee, (e) => {
			_.path && e(De);
		});
		var Oe = V(Ee), ke = (e) => {
			var t = Sr();
			Q(Xt(t), 17, () => G(b), Z, (e, t) => {
				var n = /* @__PURE__ */ I(() => m(G(t), 5));
				let r = () => G(n)[0], i = () => G(n)[1], a = () => G(n)[2], o = () => G(n)[3], s = () => G(n)[4];
				var c = ca(), l = B(z(c));
				P(c), H((e, t) => {
					$(c, "cx", a() + 1), $(c, "cy", o() + 1), $(c, "r", e), $(c, "fill", v[i()] ?? v.other), Y(l, `${t ?? ""} × ${s() ?? ""} · ${a() ?? ""}${o() ?? ""}`);
				}, [() => ie(s()), () => E(r())]), J(e, c);
			}), J(e, t);
		};
		X(Oe, (e) => {
			_.entities && e(ke);
		});
		var Ae = V(Oe), je = (e) => {
			var t = Sr();
			Q(Xt(t), 17, () => G(x), Z, (e, t) => {
				var n = /* @__PURE__ */ I(() => m(G(t), 5));
				let r = () => G(n)[0], i = () => G(n)[1], a = () => G(n)[2], o = () => G(n)[3], s = () => G(n)[4];
				var c = la(), l = B(z(c));
				P(c), H((e) => {
					$(c, "d", `M${i() - .8},${a() - .8}l2.6,2.6M${i() + 1.8},${a() - .8}l-2.6,2.6`), Y(l, `${e ?? ""} · ${o() ?? ""} × ${s() ?? ""}`);
				}, [() => w(r())]), J(e, c);
			}), J(e, t);
		};
		X(Ae, (e) => {
			_.despawned && e(je);
		});
		var Me = V(Ae), Ne = (e) => {
			var t = Sr();
			Q(Xt(t), 17, () => G(S), Z, (e, t) => {
				var n = ua();
				let r;
				var i = B(z(n));
				P(n), H((e, a, o, s) => {
					$(n, "x", G(t).x - 1), $(n, "y", G(t).z - 1), r = Qr(n, 0, "death svelte-pbz4pw", null, r, { pl: e }), $(n, "transform", `rotate(45 ${G(t).x + .5} ${G(t).z + .5})`), Y(i, `${a ?? ""} · ${o ?? ""}${s ?? ""}${G(t).message ? " · " + G(t).message : ""}`);
				}, [
					() => String(G(t).type).startsWith("player:"),
					() => w(G(t).time),
					() => E(G(t).type),
					() => G(t).cause ? " · " + E(G(t).cause) : ""
				]), J(e, n);
			}), J(e, t);
		};
		X(Me, (e) => {
			_.deaths && e(Ne);
		});
		var Pe = V(Me), Fe = (e) => {
			var t = Sr();
			Q(Xt(t), 17, () => G(i)?.players ?? [], Z, (e, t) => {
				var n = /* @__PURE__ */ I(() => m(G(t), 3));
				let r = () => G(n)[0], i = () => G(n)[1], a = () => G(n)[2];
				var o = da(), s = B(z(o), !0);
				P(o), H(() => {
					$(o, "cx", i() + .5), $(o, "cy", a() + .5), Y(s, r());
				}), J(e, o);
			}), J(e, t);
		};
		X(Pe, (e) => {
			_.players && G(u).kind === "created" && e(Fe);
		});
		var Ie = V(Pe), Le = B(z(Ie));
		P(Ie), P(ye);
		var Re = B(V(ye, 2));
		P(ve);
		var ze = V(ve, 2), Be = z(ze), Ve = (e) => {
			var t = va(), n = Xt(t), i = z(n), o = B(V(i));
			P(n);
			var s = V(n, 2), c = z(s), l = B(c, !0), d = V(c, 2);
			Q(d, 17, () => G(k).events, Z, (e, t) => {
				var n = fa(), i = z(n), a = B(i, !0), o = V(i), s = B(o, !0), c = V(o);
				P(n), H((e, r) => {
					Qr(n, 1, `row ev ${G(t).kind ?? ""}`, "svelte-pbz4pw"), Y(a, e), Y(s, r), Y(c, ` ${G(t).text ?? ""}`);
				}, [() => w(G(t).time), () => r("ev_" + G(t).kind)]), J(e, n);
			});
			var f = V(d, 2);
			Q(f, 17, () => G(k).actions, Z, (e, t) => {
				var n = /* @__PURE__ */ I(() => m(G(t), 2));
				let r = () => G(n)[0], i = () => G(n)[1];
				var a = pa(), o = z(a), s = B(o, !0), c = V(o);
				P(a), H(() => {
					Y(s, r()), Y(c, ` ${i() ?? ""}`);
				}), J(e, a);
			});
			var p = V(f, 2), h = (e) => {
				var t = ma(), n = B(t, !0);
				H((e) => Y(n, e), [() => r("none")]), J(e, t);
			};
			X(p, (e) => {
				!G(k).events.length && !G(k).actions.length && e(h);
			}), P(s);
			var g = V(s, 2), _ = z(g), v = B(_, !0);
			Q(V(_, 2), 17, () => G(k).around, Z, (e, t) => {
				var n = /* @__PURE__ */ I(() => m(G(t), 2));
				let r = () => G(n)[0], i = () => G(n)[1];
				var a = pa(), o = z(a), s = B(o, !0), c = V(o);
				P(a), H(() => {
					Y(s, r()), Y(c, ` ${i() ?? ""}`);
				}), J(e, a);
			}), P(g);
			var y = V(g, 2), ee = z(y), b = B(ee, !0), x = V(ee, 2);
			Q(x, 17, () => G(k).server, Z, (e, t) => {
				var n = /* @__PURE__ */ I(() => m(G(t), 2));
				let r = () => G(n)[0], i = () => G(n)[1];
				var a = pa(), o = z(a), s = B(o, !0), c = V(o);
				P(a), H(() => {
					Y(s, r()), Y(c, ` ${i() ?? ""}`);
				}), J(e, a);
			}, (e) => {
				var t = ma(), n = B(t, !0);
				H((e) => Y(n, e), [() => r("mNoServer")]), J(e, t);
			});
			var S = V(x, 2), C = (e) => {
				var t = ha(), n = B(z(t), !0);
				P(t), H((e) => Y(n, e), [() => r("mProblems", { n: G(k).lineCount })]), J(e, t);
			};
			X(S, (e) => {
				G(k).lineCount && e(C);
			});
			var E = V(S, 2);
			Q(E, 17, () => G(k).lines, Z, (e, t) => {
				var n = /* @__PURE__ */ I(() => m(G(t), 3));
				let r = () => G(n)[1], i = () => G(n)[2];
				var a = ga(), o = B(a, !0);
				H(() => {
					Qr(a, 1, `row line ${r() ?? ""}`, "svelte-pbz4pw"), Y(o, i());
				}), J(e, a);
			}), Q(V(E, 2), 17, () => G(k).evts, Z, (e, t) => {
				var n = _a(), r = z(n), i = B(r, !0), a = V(r);
				P(n), H(() => {
					ei(r, `color: ${G(t).color ?? ""}`), Y(i, G(t).source), Y(a, ` ${G(t).text ?? ""}`);
				}), J(e, n);
			}), P(y), H((e, t, n, r, a, s) => {
				Y(i, `${e ?? ""}–${t ?? ""} `), Y(o, `· ${n ?? ""}`), Y(l, r), Y(v, a), Y(b, s);
			}, [
				() => T(G(u).start),
				() => T(G(u).start + 6e4),
				() => r("minuteOf", {
					n: G(u).i + 1,
					of: G(a).length
				}),
				() => r("mActions"),
				() => r("mAround"),
				() => r("server")
			]), J(e, t);
		}, He = (e) => {
			var t = ba(), n = Xt(t), a = B(n), o = V(n, 2), s = z(o), c = B(s, !0);
			Q(V(s, 2), 17, () => Object.entries((G(i)?.entities ?? []).reduce((e, [t, , , , n]) => (e[t] = (e[t] ?? 0) + n, e), {})).sort((e, t) => t[1] - e[1]).slice(0, 10), Z, (e, t) => {
				var n = /* @__PURE__ */ I(() => m(G(t), 2));
				let r = () => G(n)[0], i = () => G(n)[1];
				var a = pa(), o = z(a), s = B(o), c = V(o);
				P(a), H((e) => {
					Y(s, `${i() ?? ""}×`), Y(c, ` ${e ?? ""}`);
				}, [() => E(r())]), J(e, a);
			}, (e) => {
				var t = ma(), n = B(t, !0);
				H((e) => Y(n, e), [() => r("none")]), J(e, t);
			}), P(o);
			var l = V(o, 2), d = z(l), f = B(d, !0);
			Q(V(d, 2), 17, () => (G(i)?.despawned?.summary ?? []).slice(0, 8), Z, (e, t) => {
				var n = /* @__PURE__ */ I(() => m(G(t), 2));
				let r = () => G(n)[0], i = () => G(n)[1];
				var a = pa(), o = z(a), s = B(o), c = V(o);
				P(a), H(() => {
					Y(s, `${i() ?? ""}×`), Y(c, ` ${r() ?? ""}`);
				}), J(e, a);
			}, (e) => {
				var t = ma(), n = B(t, !0);
				H((e) => Y(n, e), [() => r("none")]), J(e, t);
			}), P(l);
			var p = V(l, 2), h = z(p), g = B(h, !0);
			Q(V(h, 2), 17, () => (G(i)?.deaths?.rows ?? []).slice(-8).reverse(), Z, (e, t) => {
				var n = ya(), r = z(n), i = B(r, !0), a = V(r, 2), o = B(a, !0), s = V(a);
				P(n), H((e, t, n) => {
					Y(i, e), Y(o, t), Y(s, ` ${n ?? ""}`);
				}, [
					() => w(G(t).time),
					() => E(G(t).type),
					() => G(t).message ?? [G(t).cause, G(t).killer].filter(Boolean).join(" · ")
				]), J(e, n);
			}, (e) => {
				var t = ma(), n = B(t, !0);
				H((e) => Y(n, e), [() => r("none")]), J(e, t);
			}), P(p), H((e, t, n, r, i) => {
				Y(a, `${e ?? ""} ${t ?? ""}`), Y(c, n), Y(f, r), Y(g, i);
			}, [
				() => r("created"),
				() => T(G(u).start),
				() => r("topEntities"),
				() => r("despawnedTotal", { count: G(i)?.despawned?.total ?? 0 }),
				() => r("deathsTotal", { count: G(i)?.deaths?.total ?? 0 })
			]), J(e, t);
		};
		X(Be, (e) => {
			G(k) ? e(Ve) : e(He, -1);
		}), P(ze), P(_e);
		var Ue = V(_e, 2), We = z(Ue), Ge = V(z(We), 1, !0);
		P(We);
		var F = V(We, 2), Ke = V(z(F), 1, !0);
		P(F);
		var qe = V(F, 2), Je = V(z(qe), 1, !0);
		P(qe);
		var Ye = V(qe, 2), Xe = V(z(Ye), 1, !0);
		P(Ye);
		var Ze = V(Ye, 2), Qe = B(Ze), $e = V(Ze, 2), et = B($e), tt = V($e, 2), nt = (e) => {
			var t = xa(), n = V(z(t), 1, !0);
			P(t), H((e) => Y(n, e), [() => r("layerPath")]), J(e, t);
		};
		X(tt, (e) => {
			G(a).length && e(nt);
		}), P(Ue);
		var rt = V(Ue, 2), it = (e) => {
			var t = Ta(), n = Xt(t), a = B(n, !0), o = V(n, 2);
			Q(o, 21, () => G(i).inventory, Z, (e, t) => {
				var n = /* @__PURE__ */ I(() => m(G(t), 4));
				let i = () => G(n)[0], a = () => G(n)[1], o = () => G(n)[2], s = () => G(n)[3];
				var c = Ca(), l = z(c), u = V(l), d = (e) => {
					var t = Sa(), n = B(t, !0);
					H(() => Y(n, s())), J(e, t);
				};
				X(u, (e) => {
					s() && e(d);
				}), P(c), H((e) => {
					$(c, "title", e), Y(l, `${a() ?? ""}${o() > 1 ? " × " + o() : ""}`);
				}, [() => `${r("slot")} ${i()}`]), J(e, c);
			}, (e) => {
				var t = wa(), n = B(t, !0);
				H((e) => Y(n, e), [() => r("none")]), J(e, t);
			}), P(o), H((e) => Y(a, e), [() => r("inventory", { name: G(i).player })]), J(e, t);
		};
		X(rt, (e) => {
			G(i)?.inventory && e(it);
		}), P(o), H((e, t, n, r, i, a, o, s, c, l, d, f, p) => {
			Y(te, e), Y(D, t), ae = Qr(A, 1, "svelte-pbz4pw", null, ae, { on: _.entities }), Y(oe, n), ce = Qr(se, 1, "svelte-pbz4pw", null, ce, { on: _.despawned }), Y(le, r), ue = Qr(j, 1, "svelte-pbz4pw", null, ue, { on: _.deaths }), Y(de, i), me = Qr(M, 1, "svelte-pbz4pw", null, me, { on: _.players }), Y(N, a), $(ye, "viewBox", `${G(y).x ?? ""} ${G(y).z ?? ""} 256 256`), $(ye, "aria-label", o), $(be, "x", G(y).x), $(be, "y", G(y).z), $(Ie, "cx", G(u).center[0] + .5), $(Ie, "cy", G(u).center[1] + .5), Y(Le, `${G(u).center[0] ?? ""}${G(u).center[1] ?? ""}`), Y(Re, `${G(u).world ?? ""} · ${G(u).center[0] ?? ""} ${G(u).center[1] ?? ""}`), Y(Ge, s), Y(Ke, c), Y(Je, l), Y(Xe, d), Y(Qe, `✕ ${f ?? ""}`), Y(et, `◆ ${p ?? ""}`);
		}, [
			() => r("area"),
			() => G(a).length ? r("playHint", {
				n: G(a).length,
				who: G(i)?.player ?? t.log.ticket?.creator ?? ""
			}) : r("areaHint", {
				size: 256,
				who: G(i)?.player ?? r("thePlace")
			}),
			() => r("layerEntities"),
			() => r("layerDespawned"),
			() => r("layerDeaths"),
			() => r("layerPlayers"),
			() => r("area"),
			() => r("hostile"),
			() => r("passive"),
			() => r("item"),
			() => r("other"),
			() => r("layerDespawned"),
			() => r("layerDeaths")
		]), K("click", A, () => _.entities = !_.entities), K("click", se, () => _.despawned = !_.despawned), K("click", j, () => _.deaths = !_.deaths), K("click", M, () => _.players = !_.players), J(e, o);
	};
	X(ae, (e) => {
		G(u) && e(oe);
	}), J(e, A), Re();
}
fr(["click"]);
//#endregion
//#region src/ticketlog/ModulePart.svelte
var Oa = /* @__PURE__ */ q("<p class=\"svelte-1h3vb0h\"> </p>"), ka = /* @__PURE__ */ q("<span class=\"pill svelte-1h3vb0h\"> </span>"), Aa = /* @__PURE__ */ q("<div><dt class=\"svelte-1h3vb0h\"> </dt><dd class=\"svelte-1h3vb0h\"> </dd></div>"), ja = /* @__PURE__ */ q("<dl class=\"svelte-1h3vb0h\"></dl>"), Ma = /* @__PURE__ */ q("<div class=\"charts svelte-1h3vb0h\"></div>"), Na = /* @__PURE__ */ q("<section><header class=\"svelte-1h3vb0h\"><div><span class=\"from svelte-1h3vb0h\"> </span> <h3 class=\"svelte-1h3vb0h\"> </h3> <!></div> <!></header> <!> <!></section>");
function Pa(e, t) {
	Le(t, !0);
	let n = /* @__PURE__ */ I(() => (t.part.charts ?? []).map((e) => ({
		...e,
		points: (e.points ?? []).map(([e, t]) => ({
			time: e,
			value: t
		})),
		refs: [e.warn != null && {
			value: e.warn,
			label: "⚠ " + e.warn
		}, e.limit != null && {
			value: e.limit,
			label: "⛔ " + e.limit
		}].filter(Boolean)
	}))), r = (e) => (t) => t == null ? "-" : (Math.round(t * 100) / 100).toLocaleString() + (e ? " " + e : "");
	var i = Na(), a = z(i), o = z(a), s = z(o), c = B(s, !0), l = V(s, 2), u = B(l, !0), d = V(l, 2), f = (e) => {
		var n = Oa(), r = B(n, !0);
		H(() => Y(r, t.part.reason)), J(e, n);
	};
	X(d, (e) => {
		t.part.reason && e(f);
	}), P(o);
	var p = V(o, 2), h = (e) => {
		var n = ka(), r = B(n, !0);
		H(() => Y(r, t.part.status.text)), J(e, n);
	};
	X(p, (e) => {
		t.part.status && e(h);
	}), P(a);
	var g = V(a, 2), _ = (e) => {
		var n = ja();
		Q(n, 21, () => t.part.facts, Z, (e, t) => {
			var n = /* @__PURE__ */ I(() => m(G(t), 2));
			let r = () => G(n)[0], i = () => G(n)[1];
			var a = Aa(), o = z(a), s = B(o, !0), c = B(V(o), !0);
			P(a), H(() => {
				Y(s, r()), Y(c, i());
			}), J(e, a);
		}), P(n), J(e, n);
	};
	X(g, (e) => {
		t.part.facts?.length && e(_);
	});
	var v = V(g, 2), y = (e) => {
		var i = Ma();
		Q(i, 21, () => G(n), Z, (e, n) => {
			{
				let i = /* @__PURE__ */ I(() => r(G(n).unit)), a = /* @__PURE__ */ I(() => [{
					key: "value",
					label: G(n).title,
					color: "var(--series-1)"
				}]);
				Yi(e, {
					get title() {
						return G(n).title;
					},
					get points() {
						return G(n).points;
					},
					get from() {
						return t.from;
					},
					get to() {
						return t.to;
					},
					seconds: !0,
					get format() {
						return G(i);
					},
					get refs() {
						return G(n).refs;
					},
					get series() {
						return G(a);
					}
				});
			}
		}), P(i), J(e, i);
	};
	X(v, (e) => {
		G(n).length && e(y);
	}), P(i), H((e) => {
		Qr(i, 1, `mpart tone-${t.part.status?.tone ?? "none" ?? ""}`, "svelte-1h3vb0h"), Y(c, e), Y(u, t.part.title);
	}, [() => Zi(t.lang, "module", { plugin: t.part.plugin })]), J(e, i), Re();
}
//#endregion
//#region src/ticketlog/TicketLog.svelte
var Fa = /* @__PURE__ */ q("<span class=\"pill bad svelte-1y95gkm\"> </span>"), Ia = /* @__PURE__ */ q("<span class=\"pill warn svelte-1y95gkm\"> </span>"), La = /* @__PURE__ */ q("<button class=\"secondary small\"> </button>"), Ra = /* @__PURE__ */ q("<div class=\"peaks svelte-1y95gkm\"><div class=\"svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b> </b></div> <div class=\"svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b> </b></div> <div class=\"svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b class=\"svelte-1y95gkm\"> <small class=\"svelte-1y95gkm\"> </small></b></div> <div class=\"svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b class=\"svelte-1y95gkm\"> </b></div></div>"), za = /* @__PURE__ */ q("<button role=\"tab\"> </button>"), Ba = /* @__PURE__ */ q("<button> </button>"), Va = /* @__PURE__ */ q("<!> <div class=\"chart-bar svelte-1y95gkm\"><div class=\"metrics svelte-1y95gkm\" role=\"tablist\"></div> <div class=\"metrics zoom svelte-1y95gkm\" role=\"group\"></div></div> <!>", 1), Ha = /* @__PURE__ */ q("<p class=\"muted small svelte-1y95gkm\"> </p>"), Ua = /* @__PURE__ */ q("<button></button>"), Wa = /* @__PURE__ */ q("<dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd>", 1), Ga = /* @__PURE__ */ q("<div class=\"crow svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b class=\"svelte-1y95gkm\"> </b></div>"), Ka = /* @__PURE__ */ q("<span class=\"muted small\">-</span>"), qa = /* @__PURE__ */ q("<div class=\"tile svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <dl class=\"svelte-1y95gkm\"><dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">Ping</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <!> <!></dl> <div class=\"counts svelte-1y95gkm\"><div><h4 class=\"svelte-1y95gkm\"> </h4> <!></div> <div><h4 class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></h4> <!></div></div></div>"), Ja = /* @__PURE__ */ q("<div class=\"crow svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></span> <b class=\"svelte-1y95gkm\"> </b></div>"), Ya = /* @__PURE__ */ q("<div class=\"crow svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></span><b class=\"svelte-1y95gkm\"> </b></div>"), Xa = /* @__PURE__ */ q("<h4 class=\"svelte-1y95gkm\"> </h4> <!>", 1), Za = /* @__PURE__ */ q("<span> <small class=\"svelte-1y95gkm\"> </small></span>"), Qa = /* @__PURE__ */ q("<div class=\"seg svelte-1y95gkm\"></div>"), $a = /* @__PURE__ */ q("<button class=\"more svelte-1y95gkm\"> </button>"), eo = /* @__PURE__ */ q("<span class=\"src svelte-1y95gkm\"> </span>"), to = /* @__PURE__ */ q("<div><span class=\"lt svelte-1y95gkm\"> </span> <!> <span class=\"tx svelte-1y95gkm\"> </span></div>"), no = /* @__PURE__ */ q("<section class=\"card tlog svelte-1y95gkm\"><header class=\"t-head svelte-1y95gkm\"><div><h2 class=\"svelte-1y95gkm\"> </h2> <p class=\"muted small svelte-1y95gkm\"> </p></div> <div class=\"t-counts svelte-1y95gkm\"><!> <!> <span class=\"pill svelte-1y95gkm\"> </span> <!></div></header> <!> <!> <div class=\"strip-wrap svelte-1y95gkm\"><div class=\"strip svelte-1y95gkm\" role=\"group\"><!> <span class=\"ticket-mark svelte-1y95gkm\"></span></div> <div class=\"strip-axis muted svelte-1y95gkm\"><span> </span><span> </span></div></div> <div class=\"tiles svelte-1y95gkm\"><div class=\"tile svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <dl class=\"svelte-1y95gkm\"><dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">Minecraft</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">MRadmin</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">Java</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">TPS</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd></dl></div> <!> <div class=\"tile svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <!> <!></div></div> <!> <details class=\"plugins svelte-1y95gkm\"><summary class=\"svelte-1y95gkm\"> </summary> <div class=\"plist svelte-1y95gkm\"></div></details> <div class=\"filters svelte-1y95gkm\"><div class=\"seg svelte-1y95gkm\"></div> <!> <input type=\"search\" class=\"svelte-1y95gkm\"/> <!></div> <div class=\"lines svelte-1y95gkm\"><!> <!> <!></div></section>");
function ro(e, t) {
	Le(t, !0);
	let n = hi(t, "lang", 3, "de"), r = hi(t, "onclose", 3, null), i = (e, t) => Zi(n(), e, t), a = /* @__PURE__ */ I(() => {
		let e = t.log.health?.fields ?? [];
		return (t.log.health?.rows ?? []).map((t) => Object.fromEntries(e.map((e, n) => [e, t[n]])));
	}), o = (e) => e == null ? "-" : Math.round(e).toLocaleString(), s = (e) => e == null ? "-" : e.toFixed(1) + " ms", c = (e) => e == null ? "-" : Math.round(e) + " %", l = (e) => e == null ? "-" : e >= 1024 ? (e / 1024).toFixed(1) + " GB" : Math.round(e) + " MB", u = (e) => e == null ? "-" : e.toFixed(1), d = /* @__PURE__ */ I(() => [
		{
			id: "tps",
			label: "TPS",
			yMax: 20,
			format: u,
			series: [{
				key: "tps",
				label: "TPS",
				color: "var(--series-1)"
			}]
		},
		{
			id: "mspt",
			label: i("mspt"),
			format: s,
			refs: [{
				value: 50,
				label: "50 ms"
			}],
			series: [
				{
					key: "mspt",
					label: i("avg"),
					color: "var(--series-1)"
				},
				{
					key: "msptP95",
					label: "95 %",
					color: "var(--series-2)"
				},
				{
					key: "msptMax",
					label: i("max"),
					color: "var(--series-3)"
				}
			]
		},
		{
			id: "cpu",
			label: "CPU",
			yMax: 100,
			format: c,
			series: [{
				key: "cpu",
				label: i("server"),
				color: "var(--series-1)"
			}, {
				key: "cpuSystem",
				label: i("system"),
				color: "var(--series-2)"
			}]
		},
		{
			id: "ram",
			label: "RAM",
			format: l,
			series: [{
				key: "heapUsed",
				label: i("used"),
				color: "var(--series-1)"
			}]
		},
		{
			id: "world",
			label: i("world"),
			format: o,
			series: [
				{
					key: "entities",
					label: i("entities"),
					color: "var(--series-1)"
				},
				{
					key: "tiles",
					label: i("tiles"),
					color: "var(--series-2)"
				},
				{
					key: "chunks",
					label: i("chunks"),
					color: "var(--series-3)"
				}
			]
		},
		{
			id: "players",
			label: i("players"),
			format: o,
			series: [{
				key: "players",
				label: i("players"),
				color: "var(--series-1)"
			}, {
				key: "ping",
				label: "Ping",
				color: "var(--series-2)"
			}]
		}
	]), f = /* @__PURE__ */ Nt("tps"), p = /* @__PURE__ */ I(() => G(d).find((e) => e.id === G(f)) ?? G(d)[0]), h = /* @__PURE__ */ I(() => Math.max(1, Math.round((t.log.time - t.log.from) / 6e4))), g = /* @__PURE__ */ I(() => [...[
		1,
		10,
		30
	].filter((e) => e < G(h)), G(h)].filter((e, t, n) => n.indexOf(e) === t)), _ = /* @__PURE__ */ Nt(30), v = /* @__PURE__ */ I(() => Math.min(G(_), G(h))), y = /* @__PURE__ */ I(() => t.log.time - G(v) * 6e4), ee = /* @__PURE__ */ I(() => G(a).filter((e) => e.time >= G(y))), b = /* @__PURE__ */ I(() => {
		if (!G(a).length) return null;
		let e = 20, t = 0, n = 0, r = 0;
		for (let i of G(a)) e = Math.min(e, i.tps), t = Math.max(t, i.msptMax), n = Math.max(n, i.heapUsed), r = Math.max(r, i.entities);
		return {
			minTps: e,
			maxMspt: t,
			maxRam: n,
			maxEnt: r,
			heapMax: G(a).at(-1).heapMax
		};
	}), x = /* @__PURE__ */ I(() => {
		let e = [];
		for (let [n, r, i] of t.log.console?.lines ?? []) e.push({
			time: n,
			kind: "console",
			level: r,
			text: i
		});
		for (let n of t.log.events ?? []) e.push({
			time: n.time,
			kind: "event",
			level: "event",
			text: n.text,
			source: n.source,
			color: n.color
		});
		return e.sort((e, t) => e.time - t.time), e;
	}), S = /* @__PURE__ */ I(() => ({
		warn: G(x).filter((e) => e.level === "warn").length,
		error: G(x).filter((e) => e.level === "error").length,
		event: G(x).filter((e) => e.kind === "event").length
	})), C = /* @__PURE__ */ I(() => Math.max(1, t.log.time - t.log.from)), w = /* @__PURE__ */ I(() => {
		let e = Array.from({ length: 90 }, () => ({
			info: 0,
			warn: 0,
			error: 0,
			event: 0
		}));
		for (let n of G(x)) {
			let r = Math.min(89, Math.max(0, Math.floor((n.time - t.log.from) / G(C) * 90)));
			e[r][n.level === "warn" || n.level === "error" || n.level === "event" ? n.level : "info"]++;
		}
		return e;
	}), T = /* @__PURE__ */ I(() => Math.max(1, ...G(w).map((e) => e.info + e.warn + e.error + e.event))), E = /* @__PURE__ */ Nt("all"), te = Vt({
		info: !0,
		warn: !0,
		error: !0
	}), D = /* @__PURE__ */ Nt(""), O = /* @__PURE__ */ Nt(null), k = /* @__PURE__ */ Nt(300), ne = /* @__PURE__ */ I(() => {
		let e = G(D).trim().toLowerCase();
		return G(x).filter((t) => G(E) !== "all" && t.kind !== G(E) || t.kind === "console" && !te[t.level] || G(O) && (t.time < G(O)[0] || t.time >= G(O)[1]) ? !1 : !e || t.text.toLowerCase().includes(e) || (t.source ?? "").toLowerCase().includes(e));
	}), re = /* @__PURE__ */ I(() => G(ne).slice(Math.max(0, G(ne).length - G(k))));
	function ie(e) {
		let n = t.log.from + G(C) * e / 90;
		R(O, G(O) && G(O)[0] === n ? null : [n, t.log.from + G(C) * (e + 1) / 90], !0), R(k, 300);
	}
	let A = (e) => new Date(e).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}), ae = (e) => {
		let t = Math.floor(e / 6e4);
		return t >= 1440 ? Math.floor(t / 1440) + " d " + Math.floor(t % 1440 / 60) + " h" : t >= 60 ? Math.floor(t / 60) + " h " + t % 60 + " min" : t + " min";
	}, oe = /* @__PURE__ */ I(() => (t.log.time - t.log.from) / G(C) * 100), se = /* @__PURE__ */ I(() => [t.log.player && {
		who: i("creator"),
		p: t.log.player
	}, t.log.target && {
		who: i("target"),
		p: t.log.target
	}].filter(Boolean));
	var ce = no(), le = z(ce), j = z(le), ue = z(j), de = B(ue, !0), fe = B(V(ue, 2), !0);
	P(j);
	var pe = V(j, 2), M = z(pe), me = (e) => {
		var t = Fa(), n = B(t);
		H((e) => Y(n, `${G(S).error ?? ""} ${e ?? ""}`), [() => i("errors")]), J(e, t);
	};
	X(M, (e) => {
		G(S).error && e(me);
	});
	var N = V(M, 2), he = (e) => {
		var t = Ia(), n = B(t);
		H((e) => Y(n, `${G(S).warn ?? ""} ${e ?? ""}`), [() => i("warnings")]), J(e, t);
	};
	X(N, (e) => {
		G(S).warn && e(he);
	});
	var ge = V(N, 2), _e = B(ge), ve = V(ge, 2), ye = (e) => {
		var t = La(), n = B(t, !0);
		H((e) => Y(n, e), [() => i("hide")]), K("click", t, function(...e) {
			r()?.apply(this, e);
		}), J(e, t);
	};
	X(ve, (e) => {
		r() && e(ye);
	}), P(pe), P(le);
	var be = V(le, 2), xe = (e) => {
		Pa(e, {
			get part() {
				return t.log.module;
			},
			get lang() {
				return n();
			},
			get from() {
				return t.log.from;
			},
			get to() {
				return t.log.time;
			}
		});
	};
	X(be, (e) => {
		t.log.module && e(xe);
	});
	var Se = V(be, 2), Ce = (e) => {
		var n = Va(), r = Xt(n), a = (e) => {
			var t = Ra(), n = z(t), r = z(n), a = B(r, !0), c = V(r);
			let d;
			var f = B(c, !0);
			P(n);
			var p = V(n, 2), m = z(p), h = B(m, !0), g = V(m);
			let _;
			var v = B(g, !0);
			P(p);
			var y = V(p, 2), ee = z(y), x = B(ee, !0), S = V(ee), C = z(S), w = B(V(C));
			P(S), P(y);
			var T = V(y, 2), E = z(T), te = B(E, !0), D = B(V(E), !0);
			P(T), P(t), H((e, t, n, r, i, o, s, l, u) => {
				Y(a, e), d = Qr(c, 1, "svelte-1y95gkm", null, d, {
					bad: G(b).minTps < 15,
					warn: G(b).minTps >= 15 && G(b).minTps < 19
				}), Y(f, t), Y(h, n), _ = Qr(g, 1, "svelte-1y95gkm", null, _, {
					bad: G(b).maxMspt > 100,
					warn: G(b).maxMspt > 50 && G(b).maxMspt <= 100
				}), Y(v, r), Y(x, i), Y(C, `${o ?? ""} `), Y(w, `/ ${s ?? ""}`), Y(te, l), Y(D, u);
			}, [
				() => i("minTps"),
				() => u(G(b).minTps),
				() => i("maxMspt"),
				() => s(G(b).maxMspt),
				() => i("maxRam"),
				() => l(G(b).maxRam),
				() => l(G(b).heapMax),
				() => i("maxEntities"),
				() => o(G(b).maxEnt)
			]), J(e, t);
		};
		X(r, (e) => {
			G(b) && e(a);
		});
		var c = V(r, 2), m = z(c);
		Q(m, 21, () => G(d), (e) => e.id, (e, t) => {
			var n = za();
			let r;
			var i = B(n, !0);
			H(() => {
				$(n, "aria-selected", G(f) === G(t).id), r = Qr(n, 1, "svelte-1y95gkm", null, r, { on: G(f) === G(t).id }), Y(i, G(t).label);
			}), K("click", n, () => R(f, G(t).id, !0)), J(e, n);
		}), P(m);
		var h = V(m, 2);
		Q(h, 21, () => G(g), Z, (e, t) => {
			var n = Ba();
			let r;
			var a = B(n, !0);
			H((e) => {
				r = Qr(n, 1, "svelte-1y95gkm", null, r, { on: G(v) === G(t) }), Y(a, e);
			}, [() => i("min", { n: G(t) })]), K("click", n, () => R(_, G(t), !0)), J(e, n);
		}), P(h), P(c), Pr(V(c, 2), () => G(f) + G(v), (e) => {
			{
				let n = /* @__PURE__ */ I(() => G(v) > 1), r = /* @__PURE__ */ I(() => G(p).yMax ?? null), i = /* @__PURE__ */ I(() => G(p).refs ?? []);
				Yi(e, {
					get title() {
						return G(p).label;
					},
					get points() {
						return G(ee);
					},
					get from() {
						return G(y);
					},
					get to() {
						return t.log.time;
					},
					seconds: !0,
					get smooth() {
						return G(n);
					},
					get yMax() {
						return G(r);
					},
					get format() {
						return G(p).format;
					},
					get series() {
						return G(p).series;
					},
					get refs() {
						return G(i);
					}
				});
			}
		}), H((e) => $(h, "aria-label", e), [() => i("zoom")]), J(e, n);
	}, we = (e) => {
		var t = Ha(), n = B(t, !0);
		H((e) => Y(n, e), [() => i("noHealth")]), J(e, t);
	};
	X(Se, (e) => {
		G(a).length ? e(Ce) : e(we, -1);
	});
	var Te = V(Se, 2), Ee = z(Te), De = z(Ee);
	Q(De, 17, () => G(w), Z, (e, n, r) => {
		let a = /* @__PURE__ */ I(() => G(n).info + G(n).warn + G(n).error + G(n).event);
		var o = Ua();
		let s;
		H((e, t, r) => {
			s = Qr(o, 1, "slice svelte-1y95gkm", null, s, {
				sel: e,
				err: G(n).error,
				wrn: !G(n).error && G(n).warn,
				evt: !G(n).error && !G(n).warn && G(n).event
			}), ei(o, `--h: ${G(a) ? 18 + G(a) / G(T) * 82 : 4}%`), $(o, "title", t), $(o, "aria-label", r);
		}, [
			() => G(O) && Math.abs(G(O)[0] - (t.log.from + G(C) * r / 90)) < 1,
			() => `${A(t.log.from + G(C) * r / 90)} · ${G(n).error} ${i("errors")}, ${G(n).warn} ${i("warnings")}, ${G(n).event} ${i("events")}, ${G(n).info} info`,
			() => A(t.log.from + G(C) * r / 90)
		]), K("click", o, () => ie(r)), J(e, o);
	});
	var Oe = V(De, 2);
	P(Ee);
	var ke = V(Ee, 2), Ae = z(ke), je = B(Ae, !0), Me = B(V(Ae));
	P(ke), P(Te);
	var Ne = V(Te, 2), Pe = z(Ne), Fe = z(Pe), Ie = B(Fe, !0), ze = V(Fe, 2), Be = z(ze), Ve = B(Be, !0), He = V(Be), Ue = B(He, !0), We = V(He, 3), Ge = B(We, !0), F = V(We, 3), Ke = B(F, !0), qe = V(F, 3), Je = B(qe, !0), Ye = V(qe, 2), Xe = B(Ye, !0), Ze = V(Ye), Qe = B(Ze), $e = V(Ze, 2), et = B($e, !0), tt = V($e), nt = B(tt, !0), rt = V(tt, 3), it = B(rt), at = V(rt, 2), ot = B(at, !0), st = V(at), ct = B(st), lt = V(st, 2), ut = B(lt, !0), dt = V(lt), L = B(dt), ft = V(dt, 2), pt = B(ft, !0), mt = B(V(ft), !0);
	P(ze), P(Pe);
	var ht = V(Pe, 2);
	Q(ht, 17, () => G(se), Z, (e, t) => {
		let n = () => G(t).who, r = () => G(t).p;
		var a = qa(), o = z(a), s = B(o), c = V(o, 2), l = z(c), u = B(l, !0), d = V(l), f = z(d), p = B(V(f));
		P(d);
		var h = V(d, 2), g = B(h, !0), _ = V(h), v = B(_), y = V(_, 2), ee = B(y, !0), b = V(y), x = B(b), S = V(b, 2), C = B(S, !0), w = V(S), T = B(w), E = V(w, 2), te = B(E, !0), D = V(E), O = B(D), k = V(D, 3), ne = B(k), re = V(k, 2), ie = B(re, !0), A = V(re), ae = B(A, !0), oe = V(A, 2), se = (e) => {
			var t = Wa(), n = Xt(t), a = B(n, !0), o = B(V(n), !0);
			H((e, t) => {
				Y(a, e), Y(o, t);
			}, [() => i("effects"), () => r().effects.join(", ")]), J(e, t);
		};
		X(oe, (e) => {
			r().effects?.length && e(se);
		});
		var ce = V(oe, 2), le = (e) => {
			var t = Wa(), n = Xt(t), a = B(n, !0), o = B(V(n), !0);
			H((e, t) => {
				Y(a, e), Y(o, t);
			}, [() => i("nearPlayers"), () => r().players.map((e) => `${e.name} (${Math.round(e.distance)} m)`).join(", ")]), J(e, t);
		};
		X(ce, (e) => {
			r().players?.length && e(le);
		}), P(c);
		var j = V(c, 2), ue = z(j), de = z(ue), fe = B(de, !0);
		Q(V(de, 2), 17, () => (r().entities ?? []).slice(0, 8), Z, (e, t) => {
			var n = /* @__PURE__ */ I(() => m(G(t), 2));
			let r = () => G(n)[0], i = () => G(n)[1];
			var a = Ga(), o = z(a), s = B(o, !0), c = B(V(o), !0);
			P(a), H(() => {
				Y(s, r()), Y(c, i());
			}), J(e, a);
		}, (e) => {
			J(e, Ka());
		}), P(ue);
		var pe = V(ue, 2), M = z(pe), me = z(M), N = B(V(me), !0);
		P(M), Q(V(M, 2), 17, () => (r().tiles ?? []).slice(0, 8), Z, (e, t) => {
			var n = /* @__PURE__ */ I(() => m(G(t), 2));
			let r = () => G(n)[0], i = () => G(n)[1];
			var a = Ga(), o = z(a), s = B(o, !0), c = B(V(o), !0);
			P(a), H(() => {
				Y(s, r()), Y(c, i());
			}), J(e, a);
		}, (e) => {
			J(e, Ka());
		}), P(pe), P(j), P(a), H((e, t, i, a, o, c, l, d, m, h, _, y, b, S, w, E, D) => {
			Y(s, `${n() ?? ""}: ${r().name ?? ""}`), Y(u, e), Y(f, `${r().world ?? ""} · ${t ?? ""} ${i ?? ""} ${a ?? ""} `), Y(p, `(${o ?? ""} ${c ?? ""})`), Y(g, l), Y(v, `${r().biome ?? ""} · ${d ?? ""} ${r().light ?? ""}`), Y(ee, m), Y(x, `${r().gameMode ?? ""}${h ?? ""}${r().vehicle ? " · " + r().vehicle : ""}${r().op ? " · OP" : ""}`), Y(C, _), Y(T, `❤ ${r().health ?? ""}/${r().maxHealth ?? ""} · 🍗 ${r().food ?? ""} · Lvl ${r().level ?? ""}`), Y(te, y), Y(O, `${r().client ?? "-" ?? ""} · ${b ?? ""} ${r().protocol ?? ""} · ${r().locale ?? ""} · ${S ?? ""} ${r().viewDistance ?? ""}`), Y(ne, `${r().ping ?? ""} ms`), Y(ie, w), Y(ae, r().hand ?? "-"), Y(fe, E), Y(me, `${D ?? ""} `), Y(N, r().tileArea);
		}, [
			() => i("position"),
			() => Math.round(r().x),
			() => Math.round(r().y),
			() => Math.round(r().z),
			() => i("chunk"),
			() => r().chunk?.join(" "),
			() => i("biome"),
			() => i("light"),
			() => i("gameMode"),
			() => r().flying ? " · " + i("flying") : "",
			() => i("state"),
			() => i("client"),
			() => i("protocol"),
			() => i("viewDistance"),
			() => i("hand"),
			() => i("entitiesNear"),
			() => i("tilesNear")
		]), J(e, a);
	});
	var gt = V(ht, 2), _t = z(gt), vt = B(_t, !0), yt = V(_t, 2);
	Q(yt, 17, () => t.log.server?.worlds ?? [], Z, (e, t) => {
		var n = Ja(), r = z(n), i = z(r), a = B(V(i));
		P(r);
		var s = B(V(r, 2));
		P(n), H((e, n, r, o) => {
			Y(i, `${G(t).name ?? ""} `), Y(a, `${G(t).environment ?? ""} · ${G(t).weather ?? ""}`), Y(s, `${e ?? ""} 👤 · ${n ?? ""} ▦ · ${r ?? ""} E · ${o ?? ""} T`);
		}, [
			() => o(G(t).players),
			() => o(G(t).chunks),
			() => o(G(t).entities),
			() => o(G(t).tiles)
		]), J(e, n);
	});
	var bt = V(yt, 2), xt = (e) => {
		var n = Xa(), r = Xt(n), a = B(r, !0);
		Q(V(r, 2), 17, () => t.log.hotChunks, Z, (e, t) => {
			var n = Ya(), r = z(n), i = z(r), a = B(V(i), !0);
			P(r);
			var o = B(V(r), !0);
			P(n), H((e) => {
				Y(i, `${G(t).world ?? ""} ${G(t).x ?? ""} ${G(t).z ?? ""} `), Y(a, e), Y(o, G(t).count);
			}, [() => G(t).types.slice(0, 3).map(([e, t]) => `${e} ${t}`).join(", ")]), J(e, n);
		}), H((e) => Y(a, e), [() => i("hotChunks")]), J(e, n);
	};
	X(bt, (e) => {
		t.log.hotChunks?.length && e(xt);
	}), P(gt), P(Ne);
	var St = V(Ne, 2), Ct = (e) => {
		{
			let r = /* @__PURE__ */ I(() => t.log.module?.area ? {
				...t.log.module.area,
				label: i("loaderArea") + ": " + t.log.module.title
			} : null);
			Da(e, {
				get log() {
					return t.log;
				},
				get lang() {
					return n();
				},
				get mark() {
					return G(r);
				}
			});
		}
	};
	X(St, (e) => {
		(t.log.area || t.log.timeline) && e(Ct);
	});
	var wt = V(St, 2), Tt = z(wt), Et = B(Tt, !0), Dt = V(Tt, 2);
	Q(Dt, 21, () => t.log.server?.plugins ?? [], Z, (e, t) => {
		var n = Za();
		let r;
		var i = z(n), a = B(V(i), !0);
		P(n), H(() => {
			r = Qr(n, 1, "svelte-1y95gkm", null, r, { off: !G(t).enabled }), Y(i, `${G(t).name ?? ""} `), Y(a, G(t).version);
		}), J(e, n);
	}), P(Dt), P(wt);
	var Ot = V(wt, 2), kt = z(Ot);
	Q(kt, 21, () => [
		["all", i("all")],
		["console", i("console")],
		["event", i("events")]
	], Z, (e, t) => {
		var n = /* @__PURE__ */ I(() => m(G(t), 2));
		let r = () => G(n)[0], i = () => G(n)[1];
		var a = Ba();
		let o;
		var s = B(a, !0);
		H(() => {
			o = Qr(a, 1, "svelte-1y95gkm", null, o, { on: G(E) === r() }), Y(s, i());
		}), K("click", a, () => R(E, r(), !0)), J(e, a);
	}), P(kt);
	var At = V(kt, 2), jt = (e) => {
		var t = Qa();
		Q(t, 21, () => [
			["info", "Info"],
			["warn", i("warnings")],
			["error", i("errors")]
		], Z, (e, t) => {
			var n = /* @__PURE__ */ I(() => m(G(t), 2));
			let r = () => G(n)[0], i = () => G(n)[1];
			var a = Ba();
			let o;
			var s = B(a, !0);
			H(() => {
				o = Qr(a, 1, Kr(r()), "svelte-1y95gkm", o, { on: te[r()] }), Y(s, i());
			}), K("click", a, () => te[r()] = !te[r()]), J(e, a);
		}), P(t), J(e, t);
	};
	X(At, (e) => {
		G(E) !== "event" && e(jt);
	});
	var Mt = V(At, 2);
	ii(Mt);
	var Pt = V(Mt, 2), Ft = (e) => {
		var t = La(), n = B(t);
		H((e, t) => Y(n, `${e ?? ""}-${t ?? ""} ✕`), [() => A(G(O)[0]), () => A(G(O)[1])]), K("click", t, () => R(O, null)), J(e, t);
	};
	X(Pt, (e) => {
		G(O) && e(Ft);
	}), P(Ot);
	var It = V(Ot, 2), Lt = z(It), Rt = (e) => {
		var t = $a(), n = B(t, !0);
		H((e) => Y(n, e), [() => i("older", { count: G(ne).length - G(re).length })]), K("click", t, () => R(k, G(k) + 500)), J(e, t);
	};
	X(Lt, (e) => {
		G(ne).length > G(re).length && e(Rt);
	});
	var zt = V(Lt, 2);
	Q(zt, 17, () => G(re), Z, (e, t) => {
		var n = to(), r = z(n), i = B(r, !0), a = V(r, 2), o = (e) => {
			var n = eo(), r = B(n, !0);
			H(() => {
				ei(n, `--c: ${G(t).color ?? ""}`), Y(r, G(t).source);
			}), J(e, n);
		};
		X(a, (e) => {
			G(t).kind === "event" && e(o);
		});
		var s = B(V(a, 2), !0);
		P(n), H((e) => {
			Qr(n, 1, `line ${G(t).level ?? ""}`, "svelte-1y95gkm"), Y(i, e), Y(s, G(t).text);
		}, [() => A(G(t).time)]), J(e, n);
	}, (e) => {
		var t = Ha(), n = B(t, !0);
		H((e) => Y(n, e), [() => i("empty")]), J(e, t);
	});
	var Bt = V(zt, 2), Ht = (e) => {
		var t = Ha(), n = B(t, !0);
		H((e) => Y(n, e), [() => i("cut")]), J(e, t);
	};
	X(Bt, (e) => {
		t.log.console?.cut && e(Ht);
	}), P(It), P(ce), H((e, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, ee, b, x, C) => {
		Y(de, e), Y(fe, n), Y(_e, `${G(S).event ?? ""} ${r ?? ""}`), $(Ee, "aria-label", i), ei(Oe, `left: ${G(oe) ?? ""}%`), $(Oe, "title", a), Y(je, o), Y(Me, `${s ?? ""} ${c ?? ""}`), Y(Ie, l), Y(Ve, u), Y(Ue, t.log.server?.software), Y(Ge, t.log.server?.minecraft), Y(Ke, t.log.server?.mradmin), Y(Je, t.log.server?.java), Y(Xe, d), Y(Qe, `${t.log.server?.os ?? ""} · ${t.log.server?.cores ?? ""} ${f ?? ""} · ${p ?? ""}`), Y(et, m), Y(nt, h), Y(it, `${g ?? ""} · ${_ ?? ""}`), Y(ot, v), Y(ct, `${t.log.server?.online ?? ""} / ${t.log.server?.maxPlayers ?? ""}`), Y(ut, y), Y(L, `${t.log.server?.viewDistance ?? ""} / ${t.log.server?.simulationDistance ?? ""}`), Y(pt, ee), Y(mt, t.log.server?.storage), Y(vt, b), Y(Et, x), $(Mt, "placeholder", C);
	}, [
		() => i("title"),
		() => i("span", {
			from: A(t.log.from),
			to: A(t.log.time),
			minutes: Math.round(G(C) / 6e4)
		}),
		() => i("events"),
		() => i("activity"),
		() => i("created"),
		() => A(t.log.from),
		() => i("created"),
		() => A(t.log.time),
		() => i("server"),
		() => i("software"),
		() => i("system"),
		() => i("cores"),
		() => l(t.log.server?.memoryMax),
		() => i("uptime"),
		() => ae(t.log.server?.uptime ?? 0),
		() => (t.log.server?.tps ?? []).map(u).join(" / "),
		() => s(t.log.server?.mspt),
		() => i("players"),
		() => i("distances"),
		() => i("storage"),
		() => i("worlds"),
		() => i("plugins", { count: t.log.server?.plugins?.length ?? 0 }),
		() => i("search")
	]), ci(Mt, () => G(D), (e) => R(D, e)), J(e, ce), Re();
}
fr(["click"]);
//#endregion
//#region src/ticketlog/viewer/main.js
function io(e, t, n = "de") {
	e.classList.add("mr-tlog-root");
	let r = Dr(ro, {
		target: e,
		props: {
			log: t,
			lang: n
		}
	});
	return { destroy: () => jr(r) };
}
//#endregion
export { io as mountTicketLog };
