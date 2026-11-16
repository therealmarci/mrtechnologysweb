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
var h = 1024, g = 2048, _ = 4096, v = 8192, y = 16384, b = 32768, x = 1 << 25, S = 65536, ee = 1 << 19, te = 1 << 20, C = 1 << 25, w = 1 << 21, T = 1 << 22, ne = 1 << 23, re = Symbol("$state"), ie = Symbol("component"), ae = Symbol("legacy props"), E = Symbol(""), D = Symbol("attributes"), oe = Symbol("class"), se = Symbol("style"), ce = Symbol("text"), le = Symbol("form reset"), ue = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), O = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml"), k = {}, A = Symbol("uninitialized"), de = "http://www.w3.org/1999/xhtml";
function fe() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function pe(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function me() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var j = !1;
function he(e) {
	j = e;
}
var M;
function ge(e) {
	if (e === null) throw pe(), k;
	return M = e;
}
function _e() {
	return ge(/* @__PURE__ */ Xt(M));
}
function N(e) {
	if (j) {
		if (/* @__PURE__ */ Xt(M) !== null) throw pe(), k;
		M = e;
	}
}
function ve(e = 1) {
	if (j) {
		for (var t = e, n = M; t--;) n = /* @__PURE__ */ Xt(n);
		M = n;
	}
}
function ye(e = !0) {
	for (var t = 0, n = M;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Xt(n);
		e && n.remove(), n = i;
	}
}
function be(e) {
	if (!e || e.nodeType !== 8) throw pe(), k;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function xe(e) {
	return e === this.v;
}
function Se(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ce(e) {
	return !Se(e, this.v);
}
function we(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function Te() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Ee(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function De(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function Oe() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ke(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Ae() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function je(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Me() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ne() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Pe() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Fe() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var Ie = null;
function Le(e) {
	Ie = e;
}
function Re(e, t = !1, n) {
	Ie = {
		p: Ie,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: U,
		l: null
	};
}
function ze(e) {
	var t = Ie, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) dn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, Ie = t.p, Be(e);
}
function Be(e = {}) {
	return i(e, ie, { value: !0 }), e;
}
function Ve() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var He = [];
function Ue() {
	var e = He;
	He = [], f(e);
}
function We(e) {
	if (He.length === 0 && !_t) {
		var t = He;
		queueMicrotask(() => {
			t === He && Ue();
		});
	}
	He.push(e);
}
function Ge() {
	for (; He.length > 0;) Ue();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var Ke = ~(g | _ | h);
function qe(e, t) {
	e.f = e.f & Ke | t;
}
function Je(e) {
	e.f & 512 || e.deps === null ? qe(e, h) : qe(e, _);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ye(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), qe(e, h);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
var Xe = !1;
function Ze() {
	Xe || (Xe = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[le]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Qe(e) {
	var t = H, n = U;
	Pn(null), Fn(null);
	try {
		return e();
	} finally {
		Pn(t), Fn(n);
	}
}
function $e(e, t, n, r = n) {
	e.addEventListener(t, () => Qe(n));
	let i = e[le];
	e[le] = i ? () => {
		i(), r(!0);
	} : () => r(!0), Ze();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function et(e, t, n, r) {
	let i = Ve() ? it : st;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = U, c = tt(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				rn(e, s);
			}
			nt();
		}
	}
	var d = rt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ ot(e))).then(u).catch((e) => rn(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), nt();
	}) : f();
}
function tt() {
	var e = U, t = H, n = Ie, r = F;
	return function(i = !0) {
		Fn(e), Pn(t), Le(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function nt(e = !0) {
	Fn(null), Pn(null), Le(null), e && F?.deactivate();
}
function rt() {
	var e = U, t = e.b, n = F, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function it(e) {
	var t = 2 | g;
	return U !== null && (U.f |= ee), {
		ctx: Ie,
		deps: null,
		effects: null,
		equals: xe,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: A,
		wv: 0,
		parent: U,
		ac: null
	};
}
var at = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function ot(e, t, n) {
	let r = U;
	r === null && Te();
	var i = void 0, a = Pt(A), o = !H, s = /* @__PURE__ */ new Set();
	return mn(() => {
		var t = U, n = p();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== ue && n.reject(e);
			}).finally(nt);
		} catch (e) {
			n.reject(e), nt();
		}
		var c = F;
		if (o) {
			if (t.f & 32768) var l = rt();
			if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(at);
			else for (let e of s.values()) e.reject(at);
			s.add(n), c.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), s.delete(n), t !== at && (c.activate(), t ? (a.f |= ne, Rt(a, t)) : (a.f & 8388608 && (a.f ^= ne), Rt(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), ln(() => {
		for (let e of s) e.reject(at);
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
function P(e) {
	let t = /* @__PURE__ */ it(e);
	return Ln(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function st(e) {
	let t = /* @__PURE__ */ it(e);
	return t.equals = Ce, t;
}
function ct(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) xn(t[n]);
	}
}
function lt(e) {
	var t, n = U, r = e.parent;
	if (!jn && r !== null && e.v !== A && r.f & 24576) return fe(), e.v;
	Fn(r);
	try {
		ct(e), t = Yn(e);
	} finally {
		Fn(n);
	}
	return t;
}
function ut(e) {
	var t = lt(e);
	!e.equals(t) && (e.wv = Kn(), (!F?.is_fork || e.deps === null) && (F === null ? e.v = t : (F.capture(e, t, !0), mt?.capture(e, t, !0)), e.deps === null)) ? qe(e, h) : jn || (ht === null ? Je(e) : (cn() || F?.is_fork) && ht.set(e, t));
}
function dt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Qe(() => {
		t.ac.abort(ue), t.ac = null;
	}), t.fn !== null && (t.teardown = d), Qn(t, 0), yn(t));
}
function ft(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && $n(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var pt = null, F = null, mt = null, ht = null, gt = null, _t = !1, vt = !1, yt = null, bt = null, xt = 0, St = 1, Ct = class e {
	id = St++;
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
		pt === null ? pt = this : (pt.#n = this, this.#t = pt), pt = this;
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
			for (var r of n.d) qe(r, g), t(r);
			for (r of n.m) qe(r, _), t(r);
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
		for (let e of this.#u) this.#d.delete(e), qe(e, g), this.schedule(e);
		for (let e of this.#d) qe(e, _), this.schedule(e);
		this.apply();
		for (var t = yt = [], n = [], r = bt = []; this.#c.length > 0;) {
			xt++ > 1e3 && (this.#S(), Tt());
			for (let e of this.#g()) try {
				this.#v(e, t, n);
			} catch (t) {
				throw At(e), this.#h() || this.discard(), t;
			}
		}
		if (F = null, r.length > 0) {
			var i = e.ensure();
			for (let e of r) i.schedule(e);
		}
		if (yt = null, bt = null, this.#h()) {
			this.#x(n), this.#x(t);
			for (let [e, t] of this.#f) kt(e, t);
			r.length > 0 && F.#_();
			return;
		}
		let a = this.#y();
		if (a) this.#x(n), this.#x(t), a.#b(this);
		else {
			this.#u.clear(), this.#d.clear();
			for (let e of this.#r) e(this);
			this.#r.clear(), mt = this, Dt(n), Dt(t), mt = null, this.#s?.resolve();
			var o = F;
			if (this.#a === 0 && (this.#c.length === 0 || o !== null) && this.#S(), this.#c.length > 0) {
				if (o !== null) {
					for (let e of this.#c) o.#c.push(e);
					this.#c = [];
				} else o = this;
			}
			o !== null && (Mt.clear(), o.#_());
		}
	}
	#v(e, t, n) {
		e.f ^= h;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= h : i & 4 ? t.push(r) : qn(r) && (i & 16 && this.#d.add(r), $n(r));
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), qe(i, g), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#S(), F = this, this.#_();
	}
	#x(e) {
		for (var t = 0; t < e.length; t += 1) Ye(e[t], this.#u, this.#d);
	}
	capture(e, t, n = !1) {
		e.v !== A && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), ht?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		F = this;
	}
	deactivate() {
		F = null, ht = null;
	}
	flush() {
		try {
			vt = !0, F = this, this.#_();
		} finally {
			xt = 0, gt = null, yt = null, bt = null, vt = !1, F = null, ht = null, Mt.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(at);
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
		this.#m || (this.#m = !0, We(() => {
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
		if (F === null) {
			let t = F = new e();
			!vt && !_t && We(() => {
				t.#e || t.flush();
			});
		}
		return F;
	}
	apply() {
		ht = null;
	}
	schedule(e) {
		gt = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768) ? e.b.defer_effect(e) : this.#c.push(e);
	}
	#S() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? pt = e : t.#t = e, this.linked = !1;
		}
	}
};
function wt(e) {
	var t = _t;
	_t = !0;
	try {
		var n;
		for (e && (F !== null && !F.is_fork && F.flush(), n = e());;) {
			if (Ge(), F === null) return n;
			F.flush();
		}
	} finally {
		_t = t;
	}
}
function Tt() {
	try {
		Ae();
	} catch (e) {
		rn(e, gt);
	}
}
var Et = null;
function Dt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && qn(r) && (Et = /* @__PURE__ */ new Set(), $n(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Cn(r), Et?.size > 0)) {
				Mt.clear();
				for (let e of Et) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Et.has(n) && (Et.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || $n(n);
					}
				}
				Et.clear();
			}
		}
		Et = null;
	}
}
function Ot(e) {
	F.schedule(e);
}
function kt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), qe(e, h);
		for (var n = e.first; n !== null;) kt(n, t), n = n.next;
	}
}
function At(e) {
	qe(e, h);
	for (var t = e.first; t !== null;) At(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var jt = /* @__PURE__ */ new Set(), Mt = /* @__PURE__ */ new Map(), Nt = !1;
function Pt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: xe,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function I(e, t) {
	let n = Pt(e, t);
	return Ln(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Ft(e, t = !1, n = !0) {
	let r = Pt(e);
	return t || (r.equals = Ce), r;
}
function L(e, t, n = !1) {
	return H !== null && (!Nn || H.f & 131072) && Ve() && H.f & 4325394 && (In === null || !In.has(e)) && Pe(), Rt(e, n ? Ht(t) : t, bt);
}
var It = null, Lt = 0;
function Rt(e, t, n = null) {
	if (!e.equals(t)) {
		jn ? Mt.set(e, t) : Mt.has(e) || Mt.set(e, e.v);
		var r = Ct.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && lt(t), ht === null && Je(t);
		}
		e.wv = Kn(), It = null, Lt = 0, Vt(e, g, n), It = null, Ve() && U !== null && U.f & 1024 && !(U.f & 96) && (Bn === null ? Vn([e]) : Bn.push(e)), !r.is_fork && jt.size > 0 && !Nt && zt();
	}
	return t;
}
function zt() {
	Nt = !1;
	for (let e of jt) {
		e.f & 1024 && qe(e, _);
		let t;
		try {
			t = qn(e);
		} catch {
			t = !0;
		}
		t && $n(e);
	}
	jt.clear();
}
function Bt(e) {
	L(e, e.v + 1);
}
function Vt(e, t, n) {
	var r = e.reactions;
	if (r !== null) {
		var i = Ve(), a = r.length;
		if (Lt += a, Lt > 1e5 && It === null && (It = /* @__PURE__ */ new Set()), It !== null) {
			if (It.has(e)) return;
			It.add(e);
		}
		for (var o = 0; o < a; o++) {
			var s = r[o], c = s.f;
			if (i || s !== U) {
				var l = (c & g) === 0;
				if (l && qe(s, t), c & 131072) jt.add(s);
				else if (c & 2) {
					var u = s;
					ht?.delete(u), Vt(u, _, n);
				} else if (l) {
					var d = s;
					c & 16 && Et !== null && Et.add(d), n === null ? Ot(d) : n.push(d);
				}
			}
		}
	}
}
function Ht(t) {
	if (typeof t != "object" || !t || re in t || ie in t) return t;
	let n = l(t);
	if (n !== s && n !== c) return t;
	var r = /* @__PURE__ */ new Map(), i = e(t), o = /* @__PURE__ */ I(0), u = null, d = Wn, f = (e) => {
		if (Wn === d) return e();
		var t = H, n = Wn;
		Pn(null), Gn(d);
		var r = e();
		return Pn(t), Gn(n), r;
	};
	return i && r.set("length", /* @__PURE__ */ I(t.length, u)), new Proxy(t, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Me();
			var i = r.get(t);
			return i === void 0 ? f(() => {
				var e = /* @__PURE__ */ I(n.value, u);
				return r.set(t, e), e;
			}) : L(i, n.value, !0), !0;
		},
		deleteProperty(e, t) {
			var n = r.get(t);
			if (n === void 0) {
				if (t in e) {
					let e = f(() => /* @__PURE__ */ I(A, u));
					r.set(t, e), Bt(o);
				}
			} else L(n, A), Bt(o);
			return !0;
		},
		get(e, n, i) {
			if (n === re) return t;
			var o = r.get(n), s = n in e;
			if (o === void 0 && (!s || a(e, n)?.writable) && (o = f(() => /* @__PURE__ */ I(Ht(s ? e[n] : A), u)), r.set(n, o)), o !== void 0) {
				var c = W(o);
				return c === A ? void 0 : c;
			}
			return Reflect.get(e, n, i);
		},
		getOwnPropertyDescriptor(e, t) {
			this.has?.(e, t);
			var n = Reflect.getOwnPropertyDescriptor(e, t), i = r.get(t);
			if (i !== void 0) {
				var a = W(i);
				if (a === A) return;
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
			if (t === re) return !0;
			var n = r.get(t), i = n !== void 0 && n.v !== A || Reflect.has(e, t);
			return (n !== void 0 || U !== null && (!i || a(e, t)?.writable)) && (n === void 0 && (n = f(() => /* @__PURE__ */ I(i ? Ht(e[t]) : A, u)), r.set(t, n)), W(n) === A) ? !1 : i;
		},
		set(e, t, n, s) {
			var c = r.get(t), l = t in e;
			if (i && t === "length") for (var d = n; d < c.v; d += 1) {
				var p = r.get(d + "");
				p === void 0 ? d in e && (p = f(() => /* @__PURE__ */ I(A, u)), r.set(d + "", p)) : L(p, A);
			}
			if (c === void 0) (!l || a(e, t)?.writable) && (c = f(() => /* @__PURE__ */ I(void 0, u)), L(c, Ht(n)), r.set(t, c));
			else {
				l = c.v !== A;
				var m = f(() => Ht(n));
				L(c, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, n), !l) {
				if (i && typeof t == "string") {
					var g = r.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && L(g, _ + 1);
				}
				Bt(o);
			}
			return !0;
		},
		ownKeys(e) {
			W(o);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = r.get(e);
				return t === void 0 || t.v !== A;
			});
			for (var [n, i] of r) i.v !== A && !(n in e) && t.push(n);
			return t;
		},
		setPrototypeOf() {
			Ne();
		}
	});
}
var Ut, Wt, Gt, Kt;
function qt() {
	if (Ut === void 0) {
		Ut = window, Wt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Gt = a(t, "firstChild").get, Kt = a(t, "nextSibling").get, u(e) && (e[oe] = void 0, e[D] = null, e[se] = void 0, e.__e = void 0), u(n) && (n[ce] = void 0);
	}
}
function Jt(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Yt(e) {
	return Gt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Xt(e) {
	return Kt.call(e);
}
function R(e, t) {
	if (!j) return /* @__PURE__ */ Yt(e);
	var n = /* @__PURE__ */ Yt(M);
	if (n === null) n = M.appendChild(Jt());
	else if (t && n.nodeType !== 3) {
		var r = Jt();
		return n?.before(r), ge(r), r;
	}
	return t && tn(n), ge(n), n;
}
function Zt(e, t = !1) {
	if (!j) {
		var n = /* @__PURE__ */ Yt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Xt(n) : n;
	}
	if (t) {
		if (M?.nodeType !== 3) {
			var r = Jt();
			return M?.before(r), ge(r), r;
		}
		tn(M);
	}
	return M;
}
function z(e, t = !1) {
	if (!j) return /* @__PURE__ */ Yt(e);
	var n = R(e, t);
	return N(e), n;
}
function B(e, t = 1, n = !1) {
	let r = j ? M : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Xt(r);
	if (!j) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Jt();
			return r === null ? i?.after(a) : r.before(a), ge(a), a;
		}
		tn(r);
	}
	return ge(r), r;
}
function Qt(e) {
	e.textContent = "";
}
function $t() {
	return !1;
}
function en(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function tn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
function nn(e) {
	var t = U;
	if (t === null) return H.f |= ne, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	rn(e, t);
}
function rn(e, t) {
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
function an(e) {
	U === null && (H === null && ke(e), Oe()), jn && De(e);
}
function on(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function sn(e, t) {
	var n = U;
	n !== null && n.f & 8192 && (e |= v);
	var r = {
		ctx: Ie,
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
	F?.register_created_effect(r);
	var i = r;
	if (e & 4) yt === null ? Ct.ensure().schedule(r) : yt.push(r);
	else if (t !== null) {
		try {
			$n(r);
		} catch (e) {
			throw xn(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= S));
	}
	if (i !== null && (i.parent = n, n !== null && on(i, n), H !== null && H.f & 2 && !(e & 64))) {
		var a = H;
		(a.effects ??= []).push(i);
	}
	return r;
}
function cn() {
	return H !== null && !Nn;
}
function ln(e) {
	let t = sn(8, null);
	return qe(t, h), t.teardown = e, t;
}
function un(e) {
	an("$effect");
	var t = U.f;
	if (!H && t & 32 && Ie !== null && !Ie.i) {
		var n = Ie;
		(n.e ??= []).push(e);
	} else return dn(e);
}
function dn(e) {
	return sn(4 | te, e);
}
function fn(e) {
	Ct.ensure();
	let t = sn(64 | ee, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? wn(t, () => {
			xn(t), n(void 0);
		}) : (xn(t), n(void 0));
	});
}
function pn(e) {
	return sn(4, e);
}
function mn(e) {
	return sn(T | ee, e);
}
function hn(e, t = 0) {
	return sn(8 | t, e);
}
function V(e, t = [], n = [], r = []) {
	et(r, t, n, (t) => {
		sn(8, () => {
			e(...t.map(W));
		});
	});
}
function gn(e, t = 0) {
	return sn(16 | t, e);
}
function _n(e) {
	return sn(32 | ee, e);
}
function vn(e) {
	var t = e.teardown;
	if (t !== null) {
		let n = jn, r = H;
		Mn(!0), Pn(null);
		try {
			t.call(null);
		} catch (t) {
			rn(t, e.parent);
		} finally {
			Mn(n), Pn(r);
		}
	}
}
function yn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Qe(() => {
			e.abort(ue);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : xn(n, t), n = r;
	}
}
function bn(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || xn(t), t = n;
	}
}
function xn(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (Sn(e.nodes.start, e.nodes.end), n = !0), e.f |= x, yn(e, t && !n), Qn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	vn(e), e.f ^= x, e.f |= y;
	var i = e.parent;
	i !== null && i.first !== null && Cn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Sn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Xt(e);
		e.remove(), e = n;
	}
}
function Cn(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function wn(e, t, n = !0) {
	var r = [];
	e.f |= 256, Tn(e, r, !0);
	var i = () => {
		n && xn(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Tn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= v;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				Tn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function En(e) {
	e.f &= -257, Dn(e, !0);
}
function Dn(e, t) {
	if (!(e.f & 256) && e.f & 8192) {
		e.f ^= v, e.f & 1024 || (qe(e, g), Ct.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			Dn(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function On(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Xt(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var kn = null, An = !1, jn = !1;
function Mn(e) {
	jn = e;
}
var H = null, Nn = !1;
function Pn(e) {
	H = e;
}
var U = null;
function Fn(e) {
	U = e;
}
var In = null;
function Ln(e) {
	H !== null && (H.f & 2097152 || H.f & 2) && (In ??= /* @__PURE__ */ new Set()).add(e);
}
var Rn = null, zn = 0, Bn = null;
function Vn(e) {
	Bn = e;
}
var Hn = 1, Un = 0, Wn = Un;
function Gn(e) {
	Wn = e;
}
function Kn() {
	return ++Hn;
}
function qn(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (qn(a) && ut(a), a.wv > e.wv) return !0;
		}
		t & 512 && ht === null && qe(e, h);
	}
	return !1;
}
function Jn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(In !== null && In.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Jn(a, t, !1) : t === a && (n ? qe(a, g) : a.f & 1024 && qe(a, _), Ot(a));
	}
}
function Yn(e) {
	var t = Rn, n = zn, r = Bn, i = H, a = In, o = Ie, s = Nn, c = Wn, l = e.f;
	Rn = null, zn = 0, Bn = null, H = l & 96 ? null : e, In = null, Le(e.ctx), Nn = !1, Wn = ++Un, e.ac !== null && (Qe(() => {
		e.ac.abort(ue);
	}), e.ac = null);
	try {
		e.f |= w;
		var u = e.fn, d = u();
		e.f |= b;
		var f = Xn(e);
		if (Ve() && Bn !== null && !Nn && f !== null && !(e.f & 6146)) for (var p = 0; p < Bn.length; p++) Jn(Bn[p], e);
		if (i !== null && i !== e) {
			if (Un++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Un;
			if (t !== null) for (let e of t) e.rv = Un;
			Bn !== null && (r === null ? r = Bn : r.push(...Bn));
		}
		return e.f & 8388608 && (e.f ^= ne), d;
	} catch (t) {
		return Xn(e), nn(t);
	} finally {
		e.f ^= w, Rn = t, zn = n, Bn = r, H = i, In = a, Le(o), Nn = s, Wn = c;
	}
}
function Xn(e) {
	var t = e.deps, n = F?.is_fork;
	if (Rn !== null) {
		var r;
		if (n || Qn(e, zn), t !== null && zn > 0) for (t.length = zn + Rn.length, r = 0; r < Rn.length; r++) t[zn + r] = Rn[r];
		else e.deps = t = Rn;
		if (cn() && e.f & 512) for (r = zn; r < t.length; r++) (t[r].reactions ??= []).push(e);
	} else !n && t !== null && zn < t.length && (Qn(e, zn), t.length = zn);
	return t;
}
function Zn(e, r) {
	let i = r.reactions;
	if (i !== null) {
		var a = t.call(i, e);
		if (a !== -1) {
			var o = i.length - 1;
			o === 0 ? i = r.reactions = null : (i[a] = i[o], i.pop());
		}
	}
	if (i === null && r.f & 2 && (Rn === null || !n.call(Rn, r))) {
		var s = r;
		s.f & 512 && (s.f ^= 512), s.v !== A && Je(s), s.ac !== null && Qe(() => {
			s.ac.abort(ue), s.ac = null, qe(s, g);
		}), dt(s), Qn(s, 0);
	}
}
function Qn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Zn(e, n[r]);
}
function $n(e) {
	var t = e.f;
	if (!(t & 16384)) {
		qe(e, h);
		var n = U, r = An;
		U = e, An = !(t & 96);
		try {
			t & 16777232 ? bn(e) : yn(e), vn(e);
			var i = Yn(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = Hn;
		} finally {
			An = r, U = n;
		}
	}
}
async function er() {
	await Promise.resolve(), wt();
}
function W(e) {
	var t = !!(e.f & 2);
	if (kn?.add(e), H !== null && !Nn && !(U !== null && U.f & 16384) && (In === null || !In.has(e))) {
		var r = H.deps;
		if (H.f & 2097152) e.rv < Un && (e.rv = Un, Rn === null && r !== null && r[zn] === e ? zn++ : Rn === null ? Rn = [e] : Rn.push(e));
		else {
			H.deps ??= [], n.call(H.deps, e) || H.deps.push(e);
			var i = e.reactions;
			i === null ? e.reactions = [H] : n.call(i, H) || i.push(H);
		}
	}
	if (jn && Mt.has(e)) return Mt.get(e);
	if (t) {
		var a = e;
		if (jn) {
			var o = a.v;
			return (!(a.f & 1024) && a.reactions !== null || nr(a)) && (o = lt(a)), Mt.set(a, o), o;
		}
		var s = !(a.f & 512) && !Nn && H !== null && (An || !!(H.f & 512)), c = (a.f & b) === 0;
		qn(a) && (s && (a.f |= 512), ut(a)), s && !c && (ft(a), tr(a));
	}
	if (ht?.has(e)) return ht.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function tr(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (ft(t), tr(t));
}
function nr(e) {
	if (e.v === A) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Mt.has(t) || t.f & 2 && nr(t)) return !0;
	return !1;
}
function rr(e) {
	var t = Nn;
	try {
		return Nn = !0, e();
	} finally {
		Nn = t;
	}
}
function ir(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (re in e) ar(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && re in n && ar(n);
		}
	}
}
function ar(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			ar(e[n], t);
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
var or = ["touchstart", "touchmove"];
function sr(e) {
	return or.includes(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var cr = Symbol("events"), lr = /* @__PURE__ */ new Set(), ur = /* @__PURE__ */ new Set();
function dr(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || gr.call(t, e), !e.cancelBubble) return Qe(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (i.__removed = !1, We(() => {
		i.__removed || t.addEventListener(e, i, r);
	})) : t.addEventListener(e, i, r), i;
}
function fr(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = dr(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && ln(() => {
		o.__removed = !0, t.removeEventListener(e, o, a);
	});
}
function G(e, t, n) {
	(t[cr] ??= {})[e] = n;
}
function pr(e) {
	for (var t = 0; t < e.length; t++) lr.add(e[t]);
	for (var n of ur) n(e);
}
var mr = null, hr = !1;
function gr(e) {
	var t = this, n = t.ownerDocument, r = e.type, a = e.composedPath?.() || [], o = a[0] || e.target;
	mr = e, hr || (hr = !0, setTimeout(() => {
		hr = !1, mr = null;
	}));
	var s = 0, c = mr === e && e[cr];
	if (c) {
		var l = a.indexOf(c);
		if (l !== -1 && (t === document || t === window)) {
			e[cr] = t;
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
		var d = H, f = U;
		Pn(null), Fn(null);
		try {
			for (var p, m = []; o !== null && o !== t;) {
				try {
					var h = o[cr]?.[r];
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
			e[cr] = t, delete e.currentTarget, Pn(d), Fn(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var _r = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function vr(e) {
	return _r?.createHTML(e) ?? e;
}
function yr(e) {
	var t = en("template");
	return t.innerHTML = vr(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function br(e, t) {
	var n = U;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function K(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (j) return br(M, null), M;
		i === void 0 && (i = yr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Yt(i)));
		var t = r || Wt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Yt(t), s = t.lastChild;
			br(o, s);
		} else br(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function xr(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = !!(t & 1), a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (j) return br(M, null), M;
		if (!o) {
			var e = /* @__PURE__ */ Yt(yr(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ Yt(e);) o.appendChild(/* @__PURE__ */ Yt(e));
			else o = /* @__PURE__ */ Yt(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ Yt(t), r = t.lastChild;
			br(n, r);
		} else br(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Sr(e, t) {
	return /* @__PURE__ */ xr(e, t, "svg");
}
function Cr(e = "") {
	if (!j) {
		var t = Jt(e + "");
		return br(t, t), t;
	}
	var n = M;
	return n.nodeType === 3 ? tn(n) : (n.before(n = Jt()), ge(n)), br(n, n), n;
}
function wr() {
	if (j) return br(M, null), M;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Jt();
	return e.append(t, n), br(t, n), e;
}
function q(e, t) {
	if (j) {
		var n = U;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = M), _e();
	} else e !== null && e.before(t);
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Tr(e) {
	let t = 0, n = Pt(0), r;
	return () => {
		cn() && (W(n), hn(() => (t === 0 && (r = rr(() => e(() => Bt(n)))), t += 1, () => {
			We(() => {
				--t, t === 0 && (r?.(), r = void 0, Bt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var Er = S | ee;
function Dr(e, t, n, r) {
	new Or(e, t, n, r);
}
var Or = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = j ? M : null;
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
	#h = Tr(() => (this.#m = Pt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = U;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = U.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = gn(() => {
			if (j) {
				let e = this.#t;
				_e();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Er), j && (this.#e = M);
	}
	#g() {
		try {
			this.#a = _n(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		We(r), t && (this.#s = _n(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			t ? me() : (t = !0, n && Fe(), this.#s !== null && wn(this.#s, () => {
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
					rn(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = _n(() => e(this.#e)), We(() => {
			var e = this.#c = document.createDocumentFragment(), t = Jt(), n = !1;
			e.append(t), this.#a = this.#S(() => {
				try {
					return _n(() => this.#r(t));
				} catch (e) {
					try {
						this.error(e), n = !0;
					} catch (e) {
						rn(e, this.#i.parent);
					}
					return null;
				}
			}), this.#a === null ? (this.#c = null, n && this.#x(F)) : this.#u === 0 && (this.#e.before(e), this.#c = null, wn(this.#o, () => {
				this.#o = null;
			}), this.#x(F));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = _n(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				On(this.#a, e);
				let t = this.#n.pending;
				this.#o = _n(() => t(this.#e));
			} else this.#x(F);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		Ye(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = U, n = H, r = Ie;
		Fn(this.#i), Pn(this.#i), Le(this.#i.ctx);
		try {
			return Ct.ensure(), e();
		} finally {
			Fn(t), Pn(n), Le(r);
		}
	}
	#C(e, t) {
		this.has_pending_snippet() ? (this.#u += e, this.#u === 0 && (this.#x(t), this.#o && wn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null))) : this.parent && this.parent.#C(e, t);
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, We(() => {
			this.#d = !1, this.#m && Rt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), W(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		F?.is_fork ? (this.#a && F.skip_effect(this.#a), this.#o && F.skip_effect(this.#o), this.#s && F.skip_effect(this.#s), F.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (xn(this.#a), null), this.#o &&= (xn(this.#o), null), this.#s &&= (xn(this.#s), null), j && (ge(this.#t), ve(), ge(ye()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return _n(() => {
						var r = U;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return rn(e, this.#i.parent), null;
				}
			}));
		};
		We(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				rn(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => rn(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
function J(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[ce] ??= e.nodeValue) && (e[ce] = n, e.nodeValue = `${n}`);
}
function kr(e, t) {
	return jr(e, t);
}
var Ar = /* @__PURE__ */ new Map();
function jr(e, { target: t, anchor: n, props: i = {}, events: a, context: o, intro: s = !0, transformError: c }) {
	qt();
	var l = void 0, u = fn(() => {
		var s = n ?? t.appendChild(Jt());
		Dr(s, { pending: () => {} }, (t) => {
			Re({});
			var n = Ie;
			if (o && (n.c = o), a && (i.$$events = a), j && br(t, null), l = e(t, i) || Be(), j && (U.nodes.end = M, M === null || M.nodeType !== 8 || M.data !== "]")) throw pe(), k;
			ze();
		}, c);
		var u = /* @__PURE__ */ new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!u.has(r)) {
					u.add(r);
					var i = sr(r);
					for (let e of [t, document]) {
						var a = Ar.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), Ar.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, gr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return d(r(lr)), ur.add(d), () => {
			for (var e of u) for (let n of [t, document]) {
				var r = Ar.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, gr), r.delete(e), r.size === 0 && Ar.delete(n)) : r.set(e, i);
			}
			ur.delete(d), s !== n && s.parentNode?.removeChild(s);
		};
	});
	return Mr.set(l, u), l;
}
var Mr = /* @__PURE__ */ new WeakMap();
function Nr(e, t) {
	let n = Mr.get(e);
	return n ? (Mr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var Pr = class {
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
			if (n) En(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (En(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (xn(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						On(r, t), t.append(Jt()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else xn(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), wn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (xn(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = F, r = $t();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = Jt();
				i.append(a), this.#n.set(e, {
					effect: _n(() => t(a)),
					fragment: i
				});
			} else this.#t.set(e, _n(() => t(this.anchor)));
		}
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else j && (this.anchor = M), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Y(e, t, n = !1) {
	var r;
	j && (r = M, _e());
	var i = new Pr(e), a = n ? S : 0;
	function o(e, t) {
		if (j) {
			var n = be(r);
			if (e !== parseInt(n.substring(1))) {
				var a = ye();
				ge(a), i.anchor = a, he(!1), i.ensure(e, t), he(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	gn(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/key.js
var Fr = Symbol("NaN");
function Ir(e, t, n) {
	j && _e();
	var r = new Pr(e), i = !Ve();
	gn(() => {
		var e = t();
		e !== e && (e = Fr), i && typeof e == "object" && e && (e = {}), r.ensure(e, n);
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function X(e, t) {
	return t;
}
function Lr(e, t, n) {
	for (var i = [], a = t.length, o, s = t.length, c = 0; c < a; c++) {
		let n = t[c];
		wn(n, () => {
			if (o) {
				if (o.pending.delete(n), o.done.add(n), o.pending.size === 0) {
					var t = e.outrogroups;
					Rr(e, r(o.done)), t.delete(o), t.size === 0 && (e.outrogroups = null);
				}
			} else --s;
		}, !1);
	}
	if (s === 0) {
		var l = i.length === 0 && n !== null && e.pending.size === 0;
		if (l) {
			var u = n, d = u.parentNode;
			Qt(d), d.append(u), e.items.clear();
		}
		Rr(e, t, !l);
	} else o = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(o);
}
function Rr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= C, On(a, document.createDocumentFragment())) : xn(t[i], n);
	}
}
var zr;
function Z(t, n, i, a, o, s = null) {
	var c = t, l = /* @__PURE__ */ new Map();
	if (n & 4) {
		var u = t;
		c = j ? ge(/* @__PURE__ */ Yt(u)) : u.appendChild(Jt());
	}
	j && _e();
	var d = null, f = /* @__PURE__ */ st(() => {
		var t = i();
		return e(t) ? t : t == null ? [] : r(t);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Vr(v, p, c, n, a), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= C, Ur(d, null, c)) : En(d) : wn(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: gn(() => {
			p = W(f);
			var e = p.length;
			let t = !1;
			j && be(c) === "[!" != (e === 0) && (c = ye(), ge(c), he(!1), t = !0);
			for (var r = /* @__PURE__ */ new Set(), u = F, v = $t(), y = 0; y < e; y += 1) {
				j && M.nodeType === 8 && M.data === "]" && (c = M, t = !0, he(!1));
				var b = p[y], x = a(b, y), S = h ? null : l.get(x);
				S ? (S.v && Rt(S.v, b), S.i && Rt(S.i, y), v && u.unskip_effect(S.e)) : (S = Hr(l, h ? c : zr ??= Jt(), b, x, y, o, n, i), h || (S.e.f |= C), l.set(x, S)), r.add(x);
			}
			if (e === 0 && s && !d && (h ? d = _n(() => s(c)) : (d = _n(() => s(zr ??= Jt())), d.f |= C)), e > r.size && Ee("", "", ""), j && e > 0 && ge(ye()), !h) {
				if (m.set(u, r), v) {
					for (let [e, t] of l) r.has(e) || u.skip_effect(t.e);
					u.oncommit(g), u.ondiscard(_);
				} else g(u);
			}
			t && he(!0), W(f);
		}),
		flags: n,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, j && (c = M);
}
function Br(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Vr(e, t, n, i, a) {
	var o = !!(i & 8), s = t.length, c = e.items, l = Br(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (o) for (v = 0; v < s; v += 1) h = t[v], g = a(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < s; v += 1) {
		if (h = t[v], g = a(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (En(_), o && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) {
			if (_.f ^= C, _ === l) Ur(_, null, n);
			else {
				var y = d ? d.next : l;
				_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Wr(e, d, _), Wr(e, _, y), Ur(_, y, n), d = _, p = [], m = [], l = Br(d.next);
				continue;
			}
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], ee = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Ur(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Wr(e, S.prev, ee.next), Wr(e, d, S), Wr(e, ee, b), l = b, d = ee, --v, p = [], m = [];
				} else u.delete(_), Ur(_, l, n), Wr(e, _.prev, _.next), Wr(e, _, d === null ? e.effect.first : d.next), Wr(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = Br(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = Br(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Rr(e, r(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var te = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || te.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && te.push(l), l = Br(l.next);
		var w = te.length;
		if (w > 0) {
			var T = i & 4 && s === 0 ? n : null;
			if (o) {
				for (v = 0; v < w; v += 1) te[v].nodes?.a?.measure();
				for (v = 0; v < w; v += 1) te[v].nodes?.a?.fix();
			}
			Lr(e, te, T);
		}
	}
	o && We(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Hr(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Pt(n) : /* @__PURE__ */ Ft(n, !1, !1) : null, l = o & 2 ? Pt(i) : null;
	return {
		v: c,
		i: l,
		e: _n(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Ur(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Xt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Wr(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/actions.js
function Gr(e, t, n) {
	pn(() => {
		var r = rr(() => t(e, n?.()) || {});
		if (n && r?.update) {
			var i = !1, a = {};
			hn(() => {
				var e = n();
				ir(e), i && Se(a, e) && (a = e, r.update(e));
			}), i = !0;
		}
		if (r?.destroy) return () => r.destroy();
	});
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function Kr(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = Kr(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function qr() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Kr(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function Jr(e) {
	return typeof e == "object" ? qr(e) : e ?? "";
}
var Yr = [..." 	\n\r\f\xA0\v﻿"];
function Xr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Yr.includes(r[o - 1])) && (s === r.length || Yr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function Zr(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function Qr(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function $r(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\/\*.*?\*\//g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(Qr)), i && c.push(...Object.keys(i).map(Qr));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = Qr(e.substring(l, u).trim());
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
		return r && (n += Zr(r)), i && (n += Zr(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function ei(e, t, n, r, i, a) {
	var o = e[oe];
	if (j || o !== n || o === void 0) {
		var s = Xr(n, r, a);
		(!j || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[oe] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function ti(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function ni(e, t, n, r) {
	var i = e[se];
	if (j || i !== t) {
		var a = $r(t, r);
		(!j || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[se] = t;
	} else r && (Array.isArray(r) ? (ti(e, n?.[0], r[0]), ti(e, n?.[1], r[1], "important")) : ti(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var ri = Symbol("is custom element"), ii = Symbol("is html"), ai = O ? "link" : "LINK";
function oi(e) {
	if (j) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					Q(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					Q(e, "checked", null), e.checked = r;
				}
			}
		};
		e[le] = n, We(n), Ze();
	}
}
function Q(e, t, n, r) {
	var i = si(e);
	j && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ai) || i[t] !== (i[t] = n) && (t === "loading" && (e[E] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && li(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function si(e) {
	return e[D] ??= {
		[ri]: e.nodeName.includes("-"),
		[ii]: e.namespaceURI === de
	};
}
var ci = /* @__PURE__ */ new Map();
function li(e) {
	var t = e.getAttribute("is") || e.nodeName, n = ci.get(t);
	if (n) return n;
	ci.set(t, n = /* @__PURE__ */ new Set());
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var s in r = o(i), r) r[s].set && s !== "innerHTML" && s !== "textContent" && s !== "innerText" && n.add(s);
		i = l(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function ui(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	$e(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = di(e) ? fi(a) : a, n(a), F !== null && r.add(F), await er(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (j && e.defaultValue !== e.value || rr(t) == null && e.value) && (n(di(e) ? fi(e.value) : e.value), F !== null && r.add(F)), hn(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = F;
			if (r.has(i)) return;
		}
		di(e) && n === fi(e.value) || (e.type !== "date" || n || e.value) && n !== e.value && (e.value = n ?? "");
	});
}
function di(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function fi(e) {
	return e === "" ? null : +e;
}
var pi = /* @__PURE__ */ new class e {
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
function mi(e, t, n) {
	var r = pi.observe(e, () => n(e[t]));
	pn(() => (rr(() => n(e[t])), r));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function hi(e, t) {
	return e === t || e?.[re] === t;
}
function gi(e = Be(), t, n, r) {
	var i = Ie.r, a = U;
	return pn(() => {
		var o, s;
		return hn(() => {
			o = s, s = r?.() || [], rr(() => {
				hi(n(...s), e) || (t(e, ...s), o && hi(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && hi(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var _i = !1;
function vi(e) {
	var t = _i;
	try {
		return _i = !1, [e(), _i];
	} finally {
		_i = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function yi(e, t, n, r) {
	var i = !0, o = !!(n & 8), s = !!(n & 16), c = r, l = !0, u = void 0, d = () => s && i ? (u ??= /* @__PURE__ */ it(r), W(u)) : (l && (l = !1, c = s ? rr(r) : r), c);
	let f;
	if (o) {
		var p = re in e || ae in e;
		f = a(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	o ? [m, h] = vi(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && je(t), f(m)));
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
	var v = !1, y = (n & 1 ? it : st)(() => (v = !1, g()));
	o && W(y);
	var b = U;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? W(y) : i && o ? Ht(e) : e;
			return L(y, n), v = !0, c !== void 0 && (c = n), e;
		}
		return jn && v || b.f & 16384 ? y.v : W(y);
	});
}
function bi(e) {
	Ie === null && we("onMount"), un(() => {
		let t = rr(e);
		if (typeof t == "function") return t;
	});
}
function xi(e) {
	Ie === null && we("onDestroy"), bi(() => () => rr(e));
}
//#endregion
//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region src/ticketlog/viewer/i18n.js
var Si = {
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
}, Ci = "de";
function wi(e) {
	return Si[Ci][e] ?? e;
}
//#endregion
//#region src/lib/curve.js
function Ti(e) {
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
function Ei(e, t, n) {
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
function Di(e, t, n, r) {
	let i = [];
	e.forEach((t, n) => {
		let a = e[n - 1];
		a && (t.time - a.time <= r || a.phase && a.phase === t.phase) ? i.at(-1).push(t) : i.push([t]);
	});
	let a = [];
	for (let e of i) {
		let r = null;
		Ti(e.map((e) => [t(e.time), n(e.value)])).forEach((i, o) => {
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
var Oi = /* @__PURE__ */ K("<button class=\"secondary mini svelte-z8jt5q\"> </button>"), ki = /* @__PURE__ */ K("<button class=\"secondary mini svelte-z8jt5q\">⤢</button>"), Ai = /* @__PURE__ */ K("<span><i class=\"svelte-z8jt5q\"></i> </span>"), ji = /* @__PURE__ */ K("<span><i class=\"band-key svelte-z8jt5q\"></i> </span>"), Mi = /* @__PURE__ */ K("<div class=\"legend svelte-z8jt5q\"><!> <!></div>"), Ni = /* @__PURE__ */ K("<p class=\"muted small empty svelte-z8jt5q\"> </p>"), Pi = /* @__PURE__ */ K("<th class=\"svelte-z8jt5q\"> </th>"), Fi = /* @__PURE__ */ K("<td class=\"svelte-z8jt5q\"> </td>"), Ii = /* @__PURE__ */ K("<tr><td class=\"svelte-z8jt5q\"> </td><!></tr>"), Li = /* @__PURE__ */ K("<div class=\"table svelte-z8jt5q\"><table class=\"svelte-z8jt5q\"><thead><tr><th class=\"svelte-z8jt5q\"> </th><!></tr></thead><tbody></tbody></table></div>"), Ri = /* @__PURE__ */ Sr("<text class=\"axis svelte-z8jt5q\"> </text>"), zi = /* @__PURE__ */ Sr("<rect class=\"band svelte-z8jt5q\"></rect><!>", 1), Bi = /* @__PURE__ */ Sr("<line class=\"grid svelte-z8jt5q\"></line><text class=\"axis svelte-z8jt5q\" text-anchor=\"end\"> </text>", 1), Vi = /* @__PURE__ */ Sr("<line class=\"ref svelte-z8jt5q\"></line><text class=\"axis svelte-z8jt5q\"> </text>", 1), Hi = /* @__PURE__ */ Sr("<path class=\"line svelte-z8jt5q\"></path>"), Ui = /* @__PURE__ */ Sr("<path class=\"wash svelte-z8jt5q\"></path>"), Wi = /* @__PURE__ */ Sr("<!><!>", 1), Gi = /* @__PURE__ */ Sr("<text class=\"end svelte-z8jt5q\"> </text>"), Ki = /* @__PURE__ */ Sr("<line class=\"cursor svelte-z8jt5q\"></line>"), qi = /* @__PURE__ */ Sr("<circle r=\"4.5\" class=\"dot svelte-z8jt5q\"></circle>"), Ji = /* @__PURE__ */ Sr("<line class=\"cross svelte-z8jt5q\"></line><!>", 1), Yi = /* @__PURE__ */ K("<div class=\"row svelte-z8jt5q\"><i class=\"svelte-z8jt5q\"></i><strong> </strong><span class=\"svelte-z8jt5q\"> </span></div>"), Xi = /* @__PURE__ */ K("<div class=\"tip svelte-z8jt5q\"><div class=\"tip-time svelte-z8jt5q\"> </div> <!></div>"), Zi = /* @__PURE__ */ K("<div class=\"plot svelte-z8jt5q\"><svg role=\"img\" tabindex=\"0\"><!><!><!><!><clipPath><rect></rect></clipPath><g><!></g><!><!><!></svg> <!></div>"), Qi = /* @__PURE__ */ K("<div class=\"overlay svelte-z8jt5q\"><div class=\"big svelte-z8jt5q\" role=\"dialog\" aria-modal=\"true\"><!></div></div>"), $i = /* @__PURE__ */ K("<section class=\"card chart svelte-z8jt5q\"><div class=\"head svelte-z8jt5q\"><h3 class=\"svelte-z8jt5q\"> </h3> <div class=\"tools svelte-z8jt5q\"><button class=\"secondary mini svelte-z8jt5q\"> </button> <!></div></div> <!> <!></section> <!>", 1);
function ea(e, t) {
	Re(t, !0);
	let n = yi(t, "points", 19, () => []), r = yi(t, "series", 19, () => []), i = yi(t, "format", 3, (e) => String(e)), a = yi(t, "yMax", 3, null), o = yi(t, "refs", 19, () => []), s = yi(t, "bands", 19, () => []), c = yi(t, "smooth", 3, !1), l = yi(t, "live", 3, null), u = yi(t, "states", 3, null), d = yi(t, "aligned", 3, !1), f = yi(t, "onpan", 3, null), p = yi(t, "long", 3, !1), m = yi(t, "seconds", 3, !1), h = yi(t, "height", 3, 190), g = yi(t, "from", 3, null), _ = yi(t, "to", 3, null), v = yi(t, "onClose", 3, null), y = yi(t, "cursor", 3, null), b = yi(t, "onpick", 3, null), x = /* @__PURE__ */ I(!1), S = /* @__PURE__ */ I(400), ee = "chart-" + Math.random().toString(36).slice(2, 8);
	function te() {
		L(S, Math.max(260, Math.round(window.innerHeight * .62)), !0), L(x, !0);
	}
	let C = {
		top: 12,
		right: 52,
		bottom: 24,
		left: 48
	}, w = /* @__PURE__ */ I(600), T = /* @__PURE__ */ I(-1), ne = /* @__PURE__ */ I(!1), re = {
		hour: "2-digit",
		minute: "2-digit"
	}, ie = (e) => new Date(e).toLocaleString(void 0, p() ? {
		day: "2-digit",
		month: "2-digit",
		...re
	} : m() ? {
		...re,
		second: "2-digit"
	} : re), ae = (e) => new Date(e).toLocaleString(void 0, p() ? {
		day: "2-digit",
		month: "2-digit"
	} : m() ? {
		...re,
		second: "2-digit"
	} : re), E = /* @__PURE__ */ P(() => g() ?? (n().length ? n()[0].time : 0)), D = /* @__PURE__ */ P(() => f() ? _() : Math.max(_() ?? 0, n().length ? n().at(-1).time : 1)), oe = /* @__PURE__ */ P(() => Math.max(10, W(w) - C.left - C.right)), se = /* @__PURE__ */ P(() => h() - C.top - C.bottom);
	function ce(e) {
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
	let le = /* @__PURE__ */ P(() => {
		if (a() !== null) return a();
		let e = 0;
		for (let t of n()) if (!(f() && (t.time < W(E) || t.time > W(D)))) for (let n of r()) e = Math.max(e, t[n.key] ?? 0);
		for (let t of o()) e = Math.max(e, t.value);
		return ce(e * 1.05);
	}), ue = /* @__PURE__ */ P(() => [
		0,
		.25,
		.5,
		.75,
		1
	].map((e) => W(le) * e)), O = (e) => C.left + (W(D) === W(E) ? W(oe) : (e - W(E)) / (W(D) - W(E)) * W(oe)), k = (e) => C.top + W(se) - Math.max(0, Math.min(e, W(le))) / W(le) * W(se), A = /* @__PURE__ */ P(() => l() ? [...n(), l()] : n()), de = /* @__PURE__ */ P(() => {
		if (W(A).length < 2) return [W(A)];
		let e = W(A).slice(1).map((e, t) => e.time - W(A)[t].time), t = [[W(A)[0]]];
		for (let n = 1; n < W(A).length; n++) {
			let r = e[n - 1];
			(r > (Math.max(e[n - 2] ?? 0, e[n] ?? 0) || r) * 3 || s().some((e) => W(A)[n - 1].time <= e.from && W(A)[n].time >= e.to)) && t.push([]), t.at(-1).push(W(A)[n]);
		}
		return t;
	});
	function fe(e, t) {
		let n = e.map((e) => [O(e.time), k(e[t] ?? 0)]);
		return `M${n[0][0].toFixed(1)},${n[0][1].toFixed(1)}` + (c() ? Ti(n) : n.slice(1).map(([e, t]) => `L${e.toFixed(1)},${t.toFixed(1)}`)).join("");
	}
	function pe(e) {
		return W(de).filter((e) => e.length).map((t) => fe(t, e)).join("");
	}
	let me = /* @__PURE__ */ P(() => u() ? Di(Ei(u().points, u().phases, u().live), O, k, u().gap ?? 3 * Math.max(2e4, (W(D) - W(E)) / 300)) : []);
	function j(e) {
		let t = k(0).toFixed(1);
		return W(de).filter((e) => e.length > 1).map((n) => `${fe(n, e)}L${O(n.at(-1).time).toFixed(1)},${t}L${O(n[0].time).toFixed(1)},${t}Z`).join("");
	}
	let he = /* @__PURE__ */ P(() => {
		if (!n().length) return [];
		let e = W(A).at(-1), t = r().map((t) => ({
			...t,
			y: k(e[t.key] ?? 0),
			value: e[t.key]
		})), i = [...t].sort((e, t) => e.y - t.y);
		for (let e = 1; e < i.length; e++) if (i[e].y - i[e - 1].y < 14) return [];
		return t;
	});
	function M(e) {
		if (!n().length || e < O(n()[0].time) - 8) return -1;
		let t = W(E) + (e - C.left) / W(oe) * (W(D) - W(E)), r = 0, i = n().length - 1;
		for (; i - r > 1;) {
			let e = r + i >> 1;
			n()[e].time < t ? r = e : i = e;
		}
		return Math.abs(n()[r].time - t) <= Math.abs(n()[i].time - t) ? r : i;
	}
	let ge = null;
	function _e(e) {
		if (b() && !f()) {
			let t = e.currentTarget.getBoundingClientRect(), r = M((e.clientX - t.left) / t.width * W(w));
			r >= 0 && b()(n()[r].time);
		} else f() && (ge = e.clientX, e.currentTarget.setPointerCapture(e.pointerId));
	}
	function ve(e) {
		let t = e.currentTarget.getBoundingClientRect();
		if (ge !== null) {
			let n = (e.clientX - ge) / t.width * W(w);
			ge = e.clientX, L(T, -1), f()(n / W(oe) * (W(D) - W(E)));
		} else L(T, M((e.clientX - t.left) / t.width * W(w)), !0);
	}
	function ye(e) {
		let t = (e) => {
			if (!f()) return;
			e.preventDefault();
			let t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
			f()(Math.sign(t) * Math.min(1, Math.abs(t) / 100) * (W(D) - W(E)) * .1);
		};
		return e.addEventListener("wheel", t, { passive: !1 }), { destroy: () => e.removeEventListener("wheel", t) };
	}
	function be(e) {
		if (n().length) {
			if (e.key === "ArrowLeft") L(T, Math.max(0, (W(T) < 0 ? n().length : W(T)) - 1), !0);
			else if (e.key === "ArrowRight") L(T, Math.min(n().length - 1, W(T) + 1), !0);
			else if (e.key === "Escape") L(T, -1);
			else return;
			e.preventDefault();
		}
	}
	let xe = /* @__PURE__ */ P(() => W(T) >= 0 && W(T) < n().length ? n()[W(T)] : null), Se = /* @__PURE__ */ P(() => W(xe) ? Math.min(Math.max(O(W(xe).time) + 12, 0), W(w) - 170) : 0), Ce = /* @__PURE__ */ P(() => d() || !!f()), we = [
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
	].map((e) => e * 1e3), Te = /* @__PURE__ */ P(() => {
		if (!n().length && !s().length) return [];
		if (!W(Ce)) return [
			0,
			.25,
			.5,
			.75,
			1
		].map((e) => W(E) + (W(D) - W(E)) * e);
		let e = we.find((e) => (W(D) - W(E)) / e <= 6) ?? 432e6, t = [];
		for (let n = Math.ceil(W(E) / e) * e; n <= W(D); n += e) t.push(n);
		return t;
	});
	var Ee = $i();
	fr("keydown", Ut, (e) => W(x) && e.key === "Escape" && L(x, !1));
	var De = Zt(Ee), Oe = R(De), ke = R(Oe), Ae = z(ke, !0), je = B(ke, 2), Me = R(je), Ne = z(Me, !0), Pe = B(Me, 2), Fe = (e) => {
		var t = Oi(), n = z(t);
		V((e) => J(n, `✕ ${e ?? ""}`), [() => wi("common.close")]), G("click", t, function(...e) {
			v()?.apply(this, e);
		}), q(e, t);
	}, Ie = (e) => {
		var t = ki();
		V((e, n) => {
			Q(t, "title", e), Q(t, "aria-label", n);
		}, [() => wi("health.expand"), () => wi("health.expand")]), G("click", t, te), q(e, t);
	};
	Y(Pe, (e) => {
		v() ? e(Fe) : e(Ie, -1);
	}), N(je), N(Oe);
	var Le = B(Oe, 2), Be = (e) => {
		var t = Mi(), n = R(t), i = (e) => {
			var t = wr();
			Z(Zt(t), 17, r, X, (e, t) => {
				var n = Ai(), r = R(n), i = B(r, 1, !0);
				N(n), V(() => {
					ni(r, `background: ${W(t).color ?? ""}`), J(i, W(t).label);
				}), q(e, n);
			}), q(e, t);
		};
		Y(n, (e) => {
			r().length > 1 && e(i);
		}), Z(B(n, 2), 17, () => [...new Map(s().map((e) => [e.label, e])).values()], X, (e, t) => {
			var n = ji(), r = R(n), i = B(r, 1, !0);
			N(n), V(() => {
				ni(r, W(t).color ? `background: ${W(t).color}` : ""), J(i, W(t).label);
			}), q(e, n);
		}), N(t), q(e, t);
	};
	Y(Le, (e) => {
		(r().length > 1 || s().length) && e(Be);
	});
	var Ve = B(Le, 2), He = (e) => {
		var t = Ni(), n = z(t, !0);
		V((e) => J(n, e), [() => wi("health.noData")]), q(e, t);
	}, Ue = (e) => {
		var t = Li(), a = R(t), o = R(a), s = R(o), c = R(s), l = z(c, !0);
		Z(B(c), 17, r, X, (e, t) => {
			var n = Pi(), r = z(n, !0);
			V(() => J(r, W(t).label)), q(e, n);
		}), N(s), N(o);
		var u = B(o);
		Z(u, 21, () => [...n()].reverse(), (e) => e.time, (e, t) => {
			var n = Ii(), a = R(n), o = z(a, !0);
			Z(B(a), 17, r, X, (e, n) => {
				var r = Fi(), a = z(r, !0);
				V((e) => J(a, e), [() => i()(W(t)[W(n).key])]), q(e, r);
			}), N(n), V((e) => J(o, e), [() => ie(W(t).time)]), q(e, n);
		}), N(u), N(a), N(t), V((e) => J(l, e), [() => wi("health.time")]), q(e, t);
	}, We = (e) => {
		var n = Zi(), a = R(n);
		let c;
		var l = R(a);
		Z(l, 17, s, X, (e, t) => {
			let n = /* @__PURE__ */ P(() => O(Math.max(W(t).from, W(E)))), r = /* @__PURE__ */ P(() => Math.max(2, O(Math.min(W(t).to, W(D))) - W(n)));
			var i = zi(), a = Zt(i), o = B(a), s = (e) => {
				var r = Ri(), i = z(r, !0);
				V(() => {
					Q(r, "x", W(n) + 6), Q(r, "y", C.top + 14), J(i, W(t).label);
				}), q(e, r);
			};
			Y(o, (e) => {
				W(r) >= 34 && e(s);
			}), V(() => {
				Q(a, "x", W(n)), Q(a, "y", C.top), Q(a, "width", W(r)), Q(a, "height", W(se)), ni(a, W(t).color ? `fill: ${W(t).color}` : "");
			}), q(e, i);
		});
		var d = B(l);
		Z(d, 17, () => W(ue), X, (e, t) => {
			var n = Bi(), r = Zt(n), a = B(r), o = z(a, !0);
			V((e, t, n, i) => {
				Q(r, "x1", C.left), Q(r, "x2", C.left + W(oe)), Q(r, "y1", e), Q(r, "y2", t), Q(a, "x", C.left - 6), Q(a, "y", n), J(o, i);
			}, [
				() => k(W(t)),
				() => k(W(t)),
				() => k(W(t)) + 4,
				() => i()(W(t))
			]), q(e, n);
		});
		var p = B(d);
		Z(p, 17, () => W(Te), X, (e, t, n) => {
			var r = Ri(), i = z(r, !0);
			V((e, t) => {
				Q(r, "x", e), Q(r, "y", h() - 6), Q(r, "text-anchor", W(Ce) ? "middle" : n === 0 ? "start" : n === 4 ? "end" : "middle"), J(i, t);
			}, [() => O(W(t)), () => ae(W(t))]), q(e, r);
		});
		var m = B(p);
		Z(m, 17, o, X, (e, t) => {
			var n = Vi(), r = Zt(n), i = B(r), a = z(i, !0);
			V((e, n, o) => {
				Q(r, "x1", C.left), Q(r, "x2", C.left + W(oe)), Q(r, "y1", e), Q(r, "y2", n), ni(r, W(t).color ? `stroke: ${W(t).color}` : ""), Q(i, "x", C.left + 4), Q(i, "y", o), J(a, W(t).label);
			}, [
				() => k(W(t).value),
				() => k(W(t).value),
				() => k(W(t).value) - 4
			]), q(e, n);
		});
		var g = B(m), _ = R(g);
		Q(_, "y", 0), N(g);
		var v = B(g), b = R(v), x = (e) => {
			var t = wr();
			Z(Zt(t), 17, () => W(me), X, (e, t) => {
				var n = Hi();
				V(() => {
					Q(n, "d", W(t).d), ni(n, `stroke: ${W(t).color ?? ""}`);
				}), q(e, n);
			}), q(e, t);
		}, S = (e) => {
			var t = Wi(), n = Zt(t), i = (e) => {
				var t = Ui();
				V((e) => {
					Q(t, "d", e), ni(t, `fill: ${r()[0].color ?? ""}`);
				}, [() => j(r()[0].key)]), q(e, t);
			};
			Y(n, (e) => {
				r().length === 1 && e(i);
			}), Z(B(n), 17, r, X, (e, t) => {
				var n = Hi();
				V((e) => {
					Q(n, "d", e), ni(n, `stroke: ${W(t).color ?? ""}`);
				}, [() => pe(W(t).key)]), q(e, n);
			}), q(e, t);
		};
		Y(b, (e) => {
			u() ? e(x) : e(S, -1);
		}), N(v);
		var te = B(v);
		Z(te, 17, () => W(he), X, (e, t) => {
			var n = Gi(), r = z(n, !0);
			V((e) => {
				Q(n, "x", C.left + W(oe) + 6), Q(n, "y", W(t).y + 4), J(r, e);
			}, [() => i()(W(t).value)]), q(e, n);
		});
		var ne = B(te), re = (e) => {
			var t = Ki();
			V((e, n) => {
				Q(t, "x1", e), Q(t, "x2", n), Q(t, "y1", C.top - 4), Q(t, "y2", C.top + W(se));
			}, [() => O(y()), () => O(y())]), q(e, t);
		};
		Y(ne, (e) => {
			y() != null && y() >= W(E) && y() <= W(D) && e(re);
		});
		var ce = B(ne), le = (e) => {
			var t = Ji(), n = Zt(t);
			Z(B(n), 17, r, X, (e, t) => {
				var n = qi();
				V((e, r) => {
					Q(n, "cx", e), Q(n, "cy", r), ni(n, `fill: ${W(t).color ?? ""}`);
				}, [() => O(W(xe).time), () => k(W(xe)[W(t).key] ?? 0)]), q(e, n);
			}), V((e, t) => {
				Q(n, "x1", e), Q(n, "x2", t), Q(n, "y1", C.top), Q(n, "y2", C.top + W(se));
			}, [() => O(W(xe).time), () => O(W(xe).time)]), q(e, t);
		};
		Y(ce, (e) => {
			W(xe) && e(le);
		}), N(a), Gr(a, (e) => ye?.(e));
		var A = B(a, 2), de = (e) => {
			var t = Xi(), n = R(t), a = z(n, !0);
			Z(B(n, 2), 17, r, X, (e, t) => {
				var n = Yi(), r = R(n), a = B(r), o = z(a, !0), s = z(B(a), !0);
				N(n), V((e) => {
					ni(r, `background: ${W(t).color ?? ""}`), J(o, e), J(s, W(t).label);
				}, [() => i()(W(xe)[W(t).key])]), q(e, n);
			}), N(t), V((e) => {
				ni(t, `left: ${W(Se) ?? ""}px`), J(a, e);
			}, [() => ie(W(xe).time)]), q(e, t);
		};
		Y(A, (e) => {
			W(xe) && e(de);
		}), N(n), V(() => {
			Q(a, "viewBox", `0 0 ${W(w) ?? ""} ${h() ?? ""}`), Q(a, "height", h()), Q(a, "aria-label", t.title), c = ei(a, 0, "svelte-z8jt5q", null, c, { pans: f() }), Q(g, "id", ee), Q(_, "x", C.left), Q(_, "width", W(oe)), Q(_, "height", h()), Q(v, "clip-path", `url(#${ee})`);
		}), G("pointerdown", a, _e), G("pointerup", a, () => ge = null), fr("pointercancel", a, () => ge = null), G("pointermove", a, ve), fr("pointerleave", a, () => L(T, -1)), G("keydown", a, be), mi(n, "clientWidth", (e) => L(w, e)), q(e, n);
	};
	Y(Ve, (e) => {
		!n().length && !s().length ? e(He) : W(ne) ? e(Ue, 1) : e(We, -1);
	}), N(De);
	var Ge = B(De, 2), Ke = (e) => {
		var h = Qi(), v = R(h);
		ea(R(v), {
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
				return W(S);
			},
			onClose: () => L(x, !1)
		}), N(v), N(h), V(() => Q(v, "aria-label", t.title)), G("click", h, (e) => e.target === e.currentTarget && L(x, !1)), q(e, h);
	};
	Y(Ge, (e) => {
		W(x) && e(Ke);
	}), V((e) => {
		J(Ae, t.title), Q(Me, "aria-pressed", W(ne)), J(Ne, e);
	}, [() => W(ne) ? wi("health.chart") : wi("health.table")]), G("click", Me, () => L(ne, !W(ne))), q(e, Ee), ze();
}
pr([
	"click",
	"pointerdown",
	"pointerup",
	"pointermove",
	"keydown"
]);
//#endregion
//#region src/ticketlog/texts.js
var ta = {
	de: {
		jumpError: "Fehler",
		jumpWarn: "Warnung",
		jumpLag: "Lag",
		jumpDeath: "Tod",
		jumpEvent: "Ereignis",
		jumpHint: "Zum nächsten nach der aktuellen Stelle springen",
		newer: "{count} neuere Einträge anzeigen",
		recordingFrom: "Aufzeichnung beginnt {time}",
		zoomIn: "Hineinzoomen",
		zoomOut: "Herauszoomen",
		follow: "Spieler folgen",
		player: "Spieler",
		around: "Ringsum",
		emptyHand: "leere Hand",
		level: "Level",
		chronicle: "Chronik",
		noChronicle: "Keine Geschehnisse für diesen Filter.",
		g_act: "Aktionen",
		g_fight: "Kampf",
		g_around: "Umgebung",
		g_move: "Bewegung",
		c_broken: "{n}× {what} abgebaut",
		c_placed: "{n}× {what} platziert",
		c_picked: "{n}× {what} aufgehoben",
		c_dropped: "{n}× {what} fallen gelassen",
		c_taken: "{n} Schaden durch {what}",
		c_dealt: "{n} Schaden an {what}",
		c_command: "{what}",
		c_came: "{what} kam in die Nähe",
		c_went: "{what} ging weg",
		c_despawn: "{n}× {what} despawnt",
		c_mobdeath: "{n}× {what} gestorben",
		inventoryAtEnd: "Das Inventar erscheint am Ende der Zeitleiste (Moment des Tickets).",
		area: "Umgebung",
		tabMap: "Spieler & Karte",
		tabPerf: "Leistung",
		tabLog: "Protokoll",
		tabServer: "Server",
		timeline: "Verlauf",
		laneLog: "Server-Log",
		lanePerf: "Leistung",
		lanePlayer: "Spieler",
		lowest: "tiefster Wert",
		highest: "höchster Wert",
		highestOf: "höchster Wert von {max}",
		longestTick: "längster Tick",
		atCreation: "beim Erstellen",
		serverData: "Server",
		slots: "Plätze",
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
		noHealth: "Keine Leistungswerte aus diesem Zeitraum (Server gerade gestartet?).",
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
		layerEntities: "Entities",
		layerDespawned: "Despawnte Items",
		layerDeaths: "Tode",
		layerPath: "Weg",
		hostile: "feindlich",
		passive: "friedlich",
		item: "Item",
		inventory: "Inventar von {name}",
		noMap: "Kein Kartenbild (Chunks nicht geladen).",
		none: "keine",
		loaderArea: "Fläche",
		module: "Von {plugin}",
		slot: "Platz",
		nearPlayers: "Spieler in der Nähe",
		entitiesNear: "Entities in der Nähe",
		tilesNear: "Block-Entities",
		mNoServer: "Keine Serverwerte für diese Minute (außerhalb des Logs).",
		ev_join: "Betreten",
		ev_quit: "Verlassen",
		ev_death: "Gestorben",
		ev_teleport: "Teleport",
		play: "Abspielen",
		speed: "Geschwindigkeit",
		noTerrain: "Gelände hier nicht aufgezeichnet (Chunks waren nicht geladen)"
	},
	en: {
		jumpError: "Error",
		jumpWarn: "Warning",
		jumpLag: "Lag",
		jumpDeath: "Death",
		jumpEvent: "Event",
		jumpHint: "Jump to the next one after the current moment",
		newer: "Show {count} newer entries",
		recordingFrom: "Recording starts {time}",
		zoomIn: "Zoom in",
		zoomOut: "Zoom out",
		follow: "Follow the player",
		player: "Player",
		around: "Around",
		emptyHand: "empty hand",
		level: "Level",
		chronicle: "Chronicle",
		noChronicle: "Nothing happened for this filter.",
		g_act: "Actions",
		g_fight: "Combat",
		g_around: "Surroundings",
		g_move: "Movement",
		c_broken: "{n}× {what} broken",
		c_placed: "{n}× {what} placed",
		c_picked: "{n}× {what} picked up",
		c_dropped: "{n}× {what} dropped",
		c_taken: "{n} damage from {what}",
		c_dealt: "{n} damage to {what}",
		c_command: "{what}",
		c_came: "{what} came near",
		c_went: "{what} left",
		c_despawn: "{n}× {what} despawned",
		c_mobdeath: "{n}× {what} died",
		inventoryAtEnd: "The inventory shows at the end of the timeline (the moment of the ticket).",
		area: "Surroundings",
		tabMap: "Player & map",
		tabPerf: "Performance",
		tabLog: "Log",
		tabServer: "Server",
		timeline: "Timeline",
		laneLog: "Server log",
		lanePerf: "Performance",
		lanePlayer: "Player",
		lowest: "lowest",
		highest: "highest",
		highestOf: "highest of {max}",
		longestTick: "longest tick",
		atCreation: "when it was created",
		serverData: "Server",
		slots: "Slots",
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
		noHealth: "No performance values from this time (server just started?).",
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
		layerEntities: "Entities",
		layerDespawned: "Despawned items",
		layerDeaths: "Deaths",
		layerPath: "Way",
		hostile: "hostile",
		passive: "passive",
		item: "item",
		inventory: "Inventory of {name}",
		noMap: "No map picture (chunks not loaded).",
		none: "none",
		loaderArea: "Area",
		module: "From {plugin}",
		slot: "Slot",
		nearPlayers: "Players nearby",
		entitiesNear: "Entities nearby",
		tilesNear: "Block entities",
		mNoServer: "No server values for this minute (outside the log).",
		ev_join: "Joined",
		ev_quit: "Left",
		ev_death: "Died",
		ev_teleport: "Teleport",
		play: "Play",
		speed: "Speed",
		noTerrain: "Terrain not recorded here (chunks were not loaded)"
	}
};
function na(e, t, n = {}) {
	return (ta[e === "de" ? "de" : "en"][t] ?? ta.en[t] ?? t).replace(/\{(\w+)\}/g, (e, t) => n[t] ?? `{${t}}`);
}
//#endregion
//#region src/ticketlog/safe.js
function ra(e) {
	return typeof e == "string" && /^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(e) ? e : null;
}
function ia(e, t = "var(--muted)") {
	return typeof e == "string" && /^#[0-9a-fA-F]{6}$/.test(e) ? e : t;
}
function aa(e) {
	return [
		"good",
		"warn",
		"bad"
	].includes(e) ? e : "none";
}
function $(e, t = 0) {
	return typeof e == "number" && Number.isFinite(e) ? e : t;
}
//#endregion
//#region src/ticketlog/LogMap.svelte
var oa = /* @__PURE__ */ Sr("<image preserveAspectRatio=\"none\" class=\"tile svelte-pbz4pw\"></image>"), sa = /* @__PURE__ */ Sr("<image width=\"256\" height=\"256\" preserveAspectRatio=\"none\" class=\"tile svelte-pbz4pw\"></image>"), ca = /* @__PURE__ */ Sr("<rect class=\"mark svelte-pbz4pw\"><title> </title></rect>"), la = /* @__PURE__ */ Sr("<polyline class=\"path old svelte-pbz4pw\"></polyline>"), ua = /* @__PURE__ */ Sr("<polyline class=\"path svelte-pbz4pw\"></polyline>"), da = /* @__PURE__ */ Sr("<!><!>", 1), fa = /* @__PURE__ */ Sr("<circle class=\"ent svelte-pbz4pw\"><title> </title></circle>"), pa = /* @__PURE__ */ Sr("<path class=\"desp svelte-pbz4pw\"><title> </title></path>"), ma = /* @__PURE__ */ Sr("<rect><title> </title></rect>"), ha = /* @__PURE__ */ Sr("<circle class=\"other svelte-pbz4pw\"><title> </title></circle>"), ga = /* @__PURE__ */ K("<button class=\"starts svelte-pbz4pw\"> </button>"), _a = /* @__PURE__ */ K("<i class=\"dot svelte-pbz4pw\" style=\"background: var(--good)\"></i>"), va = /* @__PURE__ */ K("<i class=\"line svelte-pbz4pw\"></i>"), ya = /* @__PURE__ */ K("<button><!> </button>"), ba = /* @__PURE__ */ K("<b> </b> <small class=\"svelte-pbz4pw\"> </small>", 1), xa = /* @__PURE__ */ K("<b class=\"svelte-pbz4pw\">-</b><small class=\"svelte-pbz4pw\"> </small>", 1), Sa = /* @__PURE__ */ K("<button> </button>"), Ca = /* @__PURE__ */ K("<button><span class=\"ct svelte-pbz4pw\"> </span><span class=\"ci svelte-pbz4pw\"> </span><span class=\"cx svelte-pbz4pw\"> </span></button>"), wa = /* @__PURE__ */ K("<p class=\"muted small empty svelte-pbz4pw\"> </p>"), Ta = /* @__PURE__ */ K("<small class=\"svelte-pbz4pw\"> </small>"), Ea = /* @__PURE__ */ K("<span class=\"svelte-pbz4pw\"> <!></span>"), Da = /* @__PURE__ */ K("<span class=\"muted small svelte-pbz4pw\"> </span>"), Oa = /* @__PURE__ */ K("<div class=\"inv-wrap svelte-pbz4pw\"><h4 class=\"svelte-pbz4pw\"> </h4> <div class=\"inv svelte-pbz4pw\"></div></div>"), ka = /* @__PURE__ */ K("<p class=\"muted small inv-hint svelte-pbz4pw\"> </p>"), Aa = /* @__PURE__ */ K("<div class=\"lmap svelte-pbz4pw\"><div class=\"mapcol svelte-pbz4pw\"><div class=\"mapbox svelte-pbz4pw\"><svg preserveAspectRatio=\"none\" role=\"application\"><defs><pattern id=\"tlog-nodata\" width=\"8\" height=\"8\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(45)\"><rect width=\"8\" height=\"8\" class=\"nodata-bg svelte-pbz4pw\"></rect><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"8\" class=\"nodata-line svelte-pbz4pw\"></line></pattern></defs><rect fill=\"url(#tlog-nodata)\"><title> </title></rect><!><!><!><!><!><!><!><!><!><circle class=\"me svelte-pbz4pw\"><title> </title></circle></svg> <div class=\"tools svelte-pbz4pw\"><button class=\"svelte-pbz4pw\">+</button> <button class=\"svelte-pbz4pw\">−</button> <button>⌖</button></div> <!> <span class=\"coords svelte-pbz4pw\"> </span></div> <div class=\"legend svelte-pbz4pw\"><!> <span class=\"muted small keys svelte-pbz4pw\"><i class=\"dot svelte-pbz4pw\" style=\"background: var(--bad)\"></i> <i class=\"dot svelte-pbz4pw\" style=\"background: var(--good)\"></i> <i class=\"dot svelte-pbz4pw\" style=\"background: var(--warn)\"></i> </span></div></div> <div class=\"side svelte-pbz4pw\"><div class=\"moment svelte-pbz4pw\"><div class=\"mt svelte-pbz4pw\"><span class=\"svelte-pbz4pw\"> </span> <b class=\"svelte-pbz4pw\"> </b> <small class=\"svelte-pbz4pw\"> </small></div> <div class=\"mt svelte-pbz4pw\"><span class=\"svelte-pbz4pw\"> </span> <b class=\"svelte-pbz4pw\"> </b> <small class=\"svelte-pbz4pw\"> </small></div> <div class=\"mt svelte-pbz4pw\"><span class=\"svelte-pbz4pw\"> </span> <!></div></div> <div class=\"chron svelte-pbz4pw\"><div class=\"chead svelte-pbz4pw\"><h4 class=\"svelte-pbz4pw\"> </h4> <div class=\"filters svelte-pbz4pw\"></div></div> <div class=\"rows svelte-pbz4pw\"></div></div></div> <!></div>"), ja = /* @__PURE__ */ K("<p class=\"muted small svelte-pbz4pw\"> </p>");
function Ma(e, t) {
	Re(t, !0);
	let n = yi(t, "onseek", 3, () => {}), r = yi(t, "mark", 3, null), i = (e, n) => na(t.lang, e, n), a = /* @__PURE__ */ P(() => t.log.area ?? null), o = /* @__PURE__ */ P(() => t.log.timeline ?? null), s = /* @__PURE__ */ P(() => W(o)?.minutes ?? []), c = /* @__PURE__ */ P(() => W(o)?.types ?? []), l = /* @__PURE__ */ P(() => W(o)?.categories ?? []), u = /* @__PURE__ */ P(() => W(o)?.chunks ?? []), d = /* @__PURE__ */ P(() => Object.values(W(o)?.tiles ?? {}).map((e) => ({
		...e,
		image: ra(e.image)
	})).filter((e) => e.image)), f = /* @__PURE__ */ P(() => ra(W(a)?.image)), p = /* @__PURE__ */ P(() => !!W(a) && t.time >= t.log.time - 500), h = /* @__PURE__ */ P(() => W(s).flatMap((e) => (e.frames ?? []).map((e) => ({
		time: $(e[0]),
		world: String(e[1]),
		x: $(e[2]),
		z: $(e[3]),
		refs: Array.isArray(e[4]) ? e[4] : [],
		hand: e[5] ? String(e[5]) : null
	})))), g = /* @__PURE__ */ P(() => {
		let e = W(s).flatMap((e) => e.track ?? []).map((e) => ({
			time: $(e[0]),
			world: String(e[1]),
			x: $(e[2]),
			y: $(e[3], null),
			z: $(e[4]),
			health: $(e[5], null),
			food: $(e[6], null)
		}));
		return e.length ? e : W(h).map((e) => ({
			time: e.time,
			world: e.world,
			x: e.x,
			y: null,
			z: e.z,
			health: null,
			food: null
		}));
	});
	function _(e, t) {
		let n = 0, r = e.length - 1, i = -1;
		for (; n <= r;) {
			let a = n + r >> 1;
			e[a].time <= t ? (i = a, n = a + 1) : r = a - 1;
		}
		return i;
	}
	let v = /* @__PURE__ */ P(() => _(W(g), t.time)), y = /* @__PURE__ */ P(() => {
		if (W(p)) return {
			world: String(W(a).world),
			x: $(W(a).center?.[0]),
			z: $(W(a).center?.[1]),
			row: W(g)[W(v)] ?? null
		};
		let e = W(g)[Math.max(0, W(v))];
		if (!e) return W(a) ? {
			world: String(W(a).world),
			x: $(W(a).center?.[0]),
			z: $(W(a).center?.[1]),
			row: null
		} : null;
		let n = W(g)[W(v) + 1];
		if (W(v) < 0 || !n || n.world !== e.world || n.time - e.time > 6e3 || Math.hypot(n.x - e.x, n.z - e.z) > 48) return {
			world: e.world,
			x: e.x,
			z: e.z,
			row: e
		};
		let r = (t.time - e.time) / (n.time - e.time);
		return {
			world: e.world,
			x: e.x + (n.x - e.x) * r,
			z: e.z + (n.z - e.z) * r,
			row: e
		};
	}), b = /* @__PURE__ */ P(() => _(W(h), t.time));
	function x(e) {
		let t = [];
		for (let n of e) {
			let e = W(u)[n] ?? [];
			for (let n = 0; n + 4 < e.length; n += 5) t.push([
				W(c)[e[n]] ?? "?",
				W(l)[e[n + 1]] ?? "other",
				$(e[n + 2]),
				$(e[n + 3]),
				$(e[n + 4])
			]);
		}
		return t;
	}
	let S = /* @__PURE__ */ P(() => W(p) ? W(a)?.entities ?? [] : W(b) >= 0 ? x(W(h)[W(b)].refs) : []), ee = /* @__PURE__ */ P(() => !W(p) && W(b) >= 0 && W(h)[W(b) + 1] && W(h)[W(b) + 1].world === W(h)[W(b)].world ? x(W(h)[W(b) + 1].refs) : null), te = /* @__PURE__ */ P(() => W(ee) ? Math.max(0, Math.min(1, (t.time - W(h)[W(b)].time) / Math.max(1, W(h)[W(b) + 1].time - W(h)[W(b)].time))) : 0), C = 2e4, w = /* @__PURE__ */ P(() => W(s).flatMap((e) => e.despawnRows ?? [])), T = /* @__PURE__ */ P(() => W(s).flatMap((e) => e.deaths ?? [])), ne = /* @__PURE__ */ P(() => W(p) ? W(a)?.despawned?.rows ?? [] : W(w).filter((e) => e[0] <= t.time && e[0] > t.time - C)), re = /* @__PURE__ */ P(() => W(p) ? W(a)?.deaths?.rows ?? [] : W(T).filter((e) => e.time <= t.time && e.time > t.time - C)), ie = (e) => W(p) ? 1 : Math.max(.25, 1 - (t.time - e) / C), ae = /* @__PURE__ */ P(() => {
		if (W(v) < 0 || W(p)) return {
			old: "",
			recent: ""
		};
		let e = W(g)[W(v)].world, t = [], n = [];
		for (let r = 0; r <= W(v); r++) {
			let i = W(g)[r];
			i.world === e ? (W(g)[W(v)].time - i.time > 6e4 ? t : n).push(`${i.x + .5},${i.z + .5}`) : (t.length = 0, n.length = 0);
		}
		return t.length && n.length && n.unshift(t.at(-1)), {
			old: t.join(" "),
			recent: n.join(" ")
		};
	}), E = /* @__PURE__ */ I(1), D = /* @__PURE__ */ I(Ht({
		x: 0,
		z: 0
	})), oe = /* @__PURE__ */ I(!0), se = /* @__PURE__ */ P(() => 256 / W(E)), ce = /* @__PURE__ */ P(() => (256 - W(se)) / 2), le = (e) => ({
		x: Math.max(-W(ce), Math.min(W(ce), e.x)),
		z: Math.max(-W(ce), Math.min(W(ce), e.z))
	}), ue = /* @__PURE__ */ P(() => W(y) ? {
		x: W(y).x + .5 + (W(oe) ? 0 : le(W(D)).x),
		z: W(y).z + .5 + (W(oe) ? 0 : le(W(D)).z)
	} : {
		x: 0,
		z: 0
	}), O = /* @__PURE__ */ P(() => ({
		x: W(ue).x - W(se) / 2,
		z: W(ue).z - W(se) / 2
	})), k = /* @__PURE__ */ P(() => 1 / W(E) ** .65), A = /* @__PURE__ */ P(() => W(y) ? W(d).filter((e) => e.world === W(y).world && e.x0 < W(O).x + W(se) && e.x0 + 256 > W(O).x && e.z0 < W(O).z + W(se) && e.z0 + 256 > W(O).z) : []);
	function de(e) {
		L(E, Math.max(1, Math.min(8, e)), !0), L(D, le(W(D)), !0);
	}
	let fe = /* @__PURE__ */ I(void 0), pe = null;
	function me(e) {
		W(E) !== 1 && (pe = {
			x: e.clientX,
			z: e.clientY,
			off: W(oe) ? {
				x: 0,
				z: 0
			} : le(W(D))
		}, W(fe).setPointerCapture(e.pointerId));
	}
	function j(e) {
		if (!pe) return;
		let t = W(se) / W(fe).getBoundingClientRect().width;
		L(oe, !1), L(D, le({
			x: pe.off.x - (e.clientX - pe.x) * t,
			z: pe.off.z - (e.clientY - pe.z) * t
		}), !0);
	}
	function he(e) {
		let t = (e) => {
			e.preventDefault(), de(W(E) * (e.deltaY < 0 ? 1.25 : .8));
		};
		return e.addEventListener("wheel", t, { passive: !1 }), { destroy: () => e.removeEventListener("wheel", t) };
	}
	let M = Ht({
		entities: !0,
		despawned: !0,
		deaths: !0,
		path: !0
	}), ge = {
		hostile: "var(--bad)",
		passive: "var(--good)",
		item: "var(--warn)",
		projectile: "var(--muted)",
		vehicle: "var(--muted)",
		other: "var(--muted)"
	}, _e = (e) => Math.min(4, .9 + Math.log2($(e) + 1) * .6) * W(k), ve = (e) => String(e).replace(/^item:/, "").replace(/^player:/, ""), ye = (e) => new Date(e).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}), be = /* @__PURE__ */ P(() => {
		let e = t.log.health?.fields ?? [];
		return (t.log.health?.rows ?? []).map((t) => Object.fromEntries(e.map((e, n) => [e, t[n]])));
	}), xe = /* @__PURE__ */ P(() => W(be)[Math.max(0, _(W(be), t.time))] ?? null), Se = /* @__PURE__ */ P(() => {
		let e = {};
		for (let [t, , , , n] of W(S)) e[t] = (e[t] ?? 0) + n;
		let t = Object.entries(e).sort((e, t) => t[1] - e[1]);
		return {
			total: t.reduce((e, [, t]) => e + t, 0),
			top: t.slice(0, 4)
		};
	}), Ce = /* @__PURE__ */ P(() => W(p) ? t.log.player?.hand ?? null : W(b) >= 0 ? W(h)[W(b)].hand : null), we = /* @__PURE__ */ P(() => W(y)?.row ?? null), Te = /* @__PURE__ */ P(() => W(p) ? $(t.log.player?.health, null) : W(we)?.health ?? null), Ee = /* @__PURE__ */ P(() => W(p) ? $(t.log.player?.food, null) : W(we)?.food ?? null), De = {
		broken: ["act", "⛏"],
		placed: ["act", "▣"],
		picked: ["act", "↑"],
		dropped: ["act", "↓"],
		command: ["act", "/"],
		taken: ["fight", "♥"],
		dealt: ["fight", "⚔"],
		death: ["fight", "☠"],
		came: ["around", "→"],
		went: ["around", "←"],
		despawn: ["around", "✕"],
		mobdeath: ["around", "◆"],
		join: ["move", "●"],
		quit: ["move", "○"],
		teleport: ["move", "↷"]
	}, Oe = /* @__PURE__ */ P(() => {
		let e = [], t = (t, n, r) => De[n] && e.push({
			time: $(t),
			kind: n,
			group: De[n][0],
			icon: De[n][1],
			text: r
		});
		for (let e of W(s)) {
			for (let [n, r, a, o] of e.actions ?? []) r === "came" || r === "went" || r === "command" ? t(n, r, i("c_" + r, { what: String(a) })) : t(n, r, i("c_" + r, {
				n: $(o),
				what: ve(a)
			}));
			for (let n of e.events ?? []) {
				let e = [
					"join",
					"quit",
					"death",
					"teleport"
				].includes(n.kind) ? n.kind : "join";
				t(n.time, e, i("ev_" + e) + (n.text ? " · " + n.text : ""));
			}
			let n = /* @__PURE__ */ new Map();
			for (let [t, , , r, i] of e.despawnRows ?? []) {
				let e = "d" + r + Math.floor($(t) / 5e3), a = n.get(e) ?? {
					time: $(t),
					kind: "despawn",
					what: ve(r),
					n: 0
				};
				a.n += $(i), n.set(e, a);
			}
			for (let t of e.deaths ?? []) {
				if (String(t.type).startsWith("player:")) continue;
				let e = "m" + t.type + Math.floor($(t.time) / 5e3), r = n.get(e) ?? {
					time: $(t.time),
					kind: "mobdeath",
					what: ve(t.type),
					n: 0
				};
				r.n += 1, n.set(e, r);
			}
			for (let e of n.values()) t(e.time, e.kind, i("c_" + e.kind, {
				n: e.n,
				what: e.what
			}));
			if (!e.actions) {
				for (let n of [
					"broken",
					"placed",
					"picked",
					"dropped"
				]) for (let [r, a] of Object.entries(e[n] ?? {})) t(e.start, n, i("c_" + n, {
					n: a,
					what: ve(r)
				}));
				for (let n of e.commands ?? []) t(e.start, "command", i("c_command", { what: String(n) }));
			}
		}
		return e.sort((e, t) => e.time - t.time);
	}), ke = [
		"act",
		"fight",
		"around",
		"move"
	], Ae = Ht({
		act: !0,
		fight: !0,
		around: !0,
		move: !0
	}), je = /* @__PURE__ */ P(() => W(Oe).filter((e) => Ae[e.group])), Me = /* @__PURE__ */ P(() => _(W(je), t.time)), Ne = /* @__PURE__ */ I(void 0);
	un(() => {
		let e = W(Ne)?.querySelector(`[data-i="${W(Me)}"]`);
		if (!e) return;
		let t = e.offsetTop;
		(t < W(Ne).scrollTop || t > W(Ne).scrollTop + W(Ne).clientHeight - e.offsetHeight) && (W(Ne).scrollTop = t - W(Ne).clientHeight / 2);
	});
	var Pe = wr(), Fe = Zt(Pe), Ie = (e) => {
		var o = Aa(), s = R(o), c = R(s), l = R(c);
		let u;
		var d = B(R(l)), h = z(R(d), !0);
		N(d);
		var _ = B(d), v = (e) => {
			var t = oa();
			V(() => {
				Q(t, "href", W(f)), Q(t, "x", W(a).x0), Q(t, "y", W(a).z0), Q(t, "width", W(a).size), Q(t, "height", W(a).size);
			}), q(e, t);
		};
		Y(_, (e) => {
			W(f) && W(a).world === W(y).world && !W(p) && e(v);
		});
		var b = B(_);
		Z(b, 17, () => W(A), X, (e, t) => {
			var n = sa();
			V(() => {
				Q(n, "href", W(t).image), Q(n, "x", W(t).x0), Q(n, "y", W(t).z0);
			}), q(e, n);
		});
		var x = B(b), C = (e) => {
			var t = oa();
			V(() => {
				Q(t, "href", W(f)), Q(t, "x", W(a).x0), Q(t, "y", W(a).z0), Q(t, "width", W(a).size), Q(t, "height", W(a).size);
			}), q(e, t);
		};
		Y(x, (e) => {
			W(p) && W(f) && e(C);
		});
		var w = B(x), T = (e) => {
			var t = ca(), n = z(R(t), !0);
			N(t), V(() => {
				Q(t, "x", r().x0), Q(t, "y", r().z0), Q(t, "width", r().x1 - r().x0 + 1), Q(t, "height", r().z1 - r().z0 + 1), ni(t, `stroke-width: ${1.5 * W(k)}`), J(n, r().label);
			}), q(e, t);
		};
		Y(w, (e) => {
			r() && e(T);
		});
		var ce = B(w), le = (e) => {
			var t = da(), n = Zt(t), r = (e) => {
				var t = la();
				V(() => {
					Q(t, "points", W(ae).old), ni(t, `stroke-width: ${1.2 * W(k)}`);
				}), q(e, t);
			};
			Y(n, (e) => {
				W(ae).old && e(r);
			});
			var i = B(n), a = (e) => {
				var t = ua();
				V(() => {
					Q(t, "points", W(ae).recent + ` ${W(y).x + .5},${W(y).z + .5}`), ni(t, `stroke-width: ${1.6 * W(k)}`);
				}), q(e, t);
			};
			Y(i, (e) => {
				W(ae).recent && e(a);
			}), q(e, t);
		};
		Y(ce, (e) => {
			M.path && e(le);
		});
		var ue = B(ce), be = (e) => {
			var t = da(), n = Zt(t);
			Z(n, 17, () => W(S), X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 5));
				let r = () => W(n)[0], i = () => W(n)[1], a = () => W(n)[2], o = () => W(n)[3], s = () => W(n)[4];
				var c = fa(), l = z(R(c));
				N(c), V((e, t) => {
					Q(c, "cx", a() + 1), Q(c, "cy", o() + 1), Q(c, "r", e), Q(c, "fill", ge[i()] ?? ge.other), Q(c, "opacity", 1 - W(te)), J(l, `${t ?? ""} × ${s() ?? ""}`);
				}, [() => _e(s()), () => ve(r())]), q(e, c);
			}), Z(B(n), 17, () => W(ee) ?? [], X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 5));
				let r = () => W(n)[0], i = () => W(n)[1], a = () => W(n)[2], o = () => W(n)[3], s = () => W(n)[4];
				var c = fa(), l = z(R(c));
				N(c), V((e, t) => {
					Q(c, "cx", a() + 1), Q(c, "cy", o() + 1), Q(c, "r", e), Q(c, "fill", ge[i()] ?? ge.other), Q(c, "opacity", W(te)), J(l, `${t ?? ""} × ${s() ?? ""}`);
				}, [() => _e(s()), () => ve(r())]), q(e, c);
			}), q(e, t);
		};
		Y(ue, (e) => {
			M.entities && e(be);
		});
		var De = B(ue), Oe = (e) => {
			var t = wr();
			Z(Zt(t), 17, () => W(ne), X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 5));
				let r = () => W(n)[0], i = () => W(n)[1], a = () => W(n)[2], o = () => W(n)[3], s = () => W(n)[4], c = /* @__PURE__ */ P(() => 1.3 * W(k));
				var l = pa(), u = z(R(l));
				N(l), V((e, t, n, r, i, a) => {
					Q(l, "d", `M${e ?? ""},${t ?? ""}l${2 * W(c)},${2 * W(c)}M${n ?? ""},${r ?? ""}l${-2 * W(c)},${2 * W(c)}`), ni(l, `stroke-width: ${.8 * W(k)}`), Q(l, "opacity", i), J(u, `${a ?? ""} · ${o() ?? ""} × ${s() ?? ""}`);
				}, [
					() => $(i()) + .5 - W(c),
					() => $(a()) + .5 - W(c),
					() => $(i()) + .5 + W(c),
					() => $(a()) + .5 - W(c),
					() => ie(r()),
					() => ye(r())
				]), q(e, l);
			}), q(e, t);
		};
		Y(De, (e) => {
			M.despawned && e(Oe);
		});
		var Pe = B(De), Fe = (e) => {
			var t = wr();
			Z(Zt(t), 17, () => W(re), X, (e, t) => {
				var n = ma();
				let r;
				var i = z(R(n));
				N(n), V((e, t, a, o, s, c, l, u) => {
					Q(n, "x", e), Q(n, "y", t), Q(n, "width", 3 * W(k)), Q(n, "height", 3 * W(k)), r = ei(n, 0, "death svelte-pbz4pw", null, r, { pl: a }), Q(n, "opacity", o), Q(n, "transform", `rotate(45 ${s ?? ""} ${c ?? ""})`), ni(n, `stroke-width: ${.5 * W(k)}`), J(i, `${l ?? ""} · ${u ?? ""}`);
				}, [
					() => $(W(t).x) + .5 - 1.5 * W(k),
					() => $(W(t).z) + .5 - 1.5 * W(k),
					() => String(W(t).type).startsWith("player:"),
					() => ie(W(t).time),
					() => $(W(t).x) + .5,
					() => $(W(t).z) + .5,
					() => ye(W(t).time),
					() => ve(W(t).type)
				]), q(e, n);
			}), q(e, t);
		};
		Y(Pe, (e) => {
			M.deaths && e(Fe);
		});
		var Ie = B(Pe), Le = (e) => {
			var t = wr();
			Z(Zt(t), 17, () => W(a)?.players ?? [], X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 3));
				let r = () => W(n)[0], i = () => W(n)[1], a = () => W(n)[2];
				var o = ha(), s = z(R(o), !0);
				N(o), V((e, t) => {
					Q(o, "cx", e), Q(o, "cy", t), Q(o, "r", 2.6 * W(k)), ni(o, `stroke-width: ${.8 * W(k)}`), J(s, r());
				}, [() => $(i()) + .5, () => $(a()) + .5]), q(e, o);
			}), q(e, t);
		};
		Y(Ie, (e) => {
			W(p) && e(Le);
		});
		var Re = B(Ie), ze = z(R(Re));
		N(Re), N(l), gi(l, (e) => L(fe, e), () => W(fe)), Gr(l, (e) => he?.(e));
		var Be = B(l, 2), Ve = R(Be), He = B(Ve, 2), Ue = B(He, 2);
		let We;
		N(Be);
		var Ge = B(Be, 2), Ke = (e) => {
			var t = ga(), r = z(t);
			V((e) => J(r, `${e ?? ""} →`), [() => i("recordingFrom", { time: ye(W(g)[0].time) })]), G("click", t, () => n()(W(g)[0].time)), q(e, t);
		};
		Y(Ge, (e) => {
			!W(p) && W(g).length && t.time < W(g)[0].time && e(Ke);
		});
		var qe = z(B(Ge, 2));
		N(c);
		var Je = B(c, 2), Ye = R(Je);
		Z(Ye, 17, () => [
			["entities", i("layerEntities")],
			["despawned", i("layerDespawned")],
			["deaths", i("layerDeaths")],
			["path", i("layerPath")]
		], X, (e, t) => {
			var n = /* @__PURE__ */ P(() => m(W(t), 2));
			let r = () => W(n)[0], i = () => W(n)[1];
			var a = ya();
			let o;
			var s = R(a), c = (e) => {
				q(e, _a());
			}, l = (e) => {
				q(e, Cr("✕"));
			}, u = (e) => {
				q(e, Cr("◆"));
			}, d = (e) => {
				q(e, va());
			};
			Y(s, (e) => {
				r() === "entities" ? e(c) : r() === "despawned" ? e(l, 1) : r() === "deaths" ? e(u, 2) : e(d, -1);
			});
			var f = B(s);
			N(a), V(() => {
				o = ei(a, 1, "svelte-pbz4pw", null, o, { on: M[r()] }), J(f, ` ${i() ?? ""}`);
			}), G("click", a, () => M[r()] = !M[r()]), q(e, a);
		});
		var Xe = B(Ye, 2), Ze = B(R(Xe)), Qe = B(Ze, 2), $e = B(Qe, 2, !0);
		N(Xe), N(Je), N(s);
		var et = B(s, 2), tt = R(et), nt = R(tt), rt = R(nt), it = z(rt, !0), at = B(rt, 2), ot = z(at, !0), st = z(B(at, 2));
		N(nt);
		var ct = B(nt, 2), lt = R(ct), ut = z(lt, !0), dt = B(lt, 2), ft = z(dt), pt = z(B(dt, 2), !0);
		N(ct);
		var F = B(ct, 2), mt = R(F), ht = z(mt, !0), gt = B(mt, 2), _t = (e) => {
			var t = ba(), n = Zt(t);
			let r;
			var a = z(n), o = z(B(n, 2));
			V((e, t, i, s) => {
				r = ei(n, 1, "svelte-pbz4pw", null, r, {
					bad: W(xe).tps < 15,
					warn: W(xe).tps >= 15 && W(xe).tps < 19
				}), J(a, `${e ?? ""} TPS`), J(o, `${t ?? ""} ${i ?? ""} ms · max ${s ?? ""} ms`);
			}, [
				() => $(W(xe).tps).toFixed(1),
				() => i("mspt"),
				() => $(W(xe).mspt).toFixed(1),
				() => Math.round($(W(xe).msptMax))
			]), q(e, t);
		}, vt = (e) => {
			var t = xa(), n = z(B(Zt(t)), !0);
			V((e) => J(n, e), [() => i("mNoServer")]), q(e, t);
		};
		Y(gt, (e) => {
			W(xe) ? e(_t) : e(vt, -1);
		}), N(F), N(tt);
		var yt = B(tt, 2), bt = R(yt), xt = R(bt), St = z(xt, !0), Ct = B(xt, 2);
		Z(Ct, 21, () => ke, X, (e, t) => {
			var n = Sa();
			let r;
			var a = z(n, !0);
			V((e) => {
				r = ei(n, 1, "svelte-pbz4pw", null, r, { on: Ae[W(t)] }), J(a, e);
			}, [() => i("g_" + W(t))]), G("click", n, () => Ae[W(t)] = !Ae[W(t)]), q(e, n);
		}), N(Ct), N(bt);
		var wt = B(bt, 2);
		Z(wt, 21, () => W(je), X, (e, r, i) => {
			var a = Ca();
			let o;
			Q(a, "data-i", i);
			var s = R(a), c = z(s, !0), l = B(s), u = z(l, !0), d = z(B(l), !0);
			N(a), V((e) => {
				o = ei(a, 1, `crow ${W(r).group ?? ""}`, "svelte-pbz4pw", o, {
					now: i === W(Me),
					future: W(r).time > t.time
				}), J(c, e), J(u, W(r).icon), J(d, W(r).text);
			}, [() => ye(W(r).time)]), G("click", a, () => n()(W(r).time)), q(e, a);
		}, (e) => {
			var t = wa(), n = z(t, !0);
			V((e) => J(n, e), [() => i("noChronicle")]), q(e, t);
		}), N(wt), gi(wt, (e) => L(Ne, e), () => W(Ne)), N(yt), N(et);
		var Tt = B(et, 2), Et = (e) => {
			var t = Oa(), n = R(t), r = z(n, !0), o = B(n, 2);
			Z(o, 21, () => W(a).inventory, X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 4));
				let r = () => W(n)[0], a = () => W(n)[1], o = () => W(n)[2], s = () => W(n)[3];
				var c = Ea(), l = R(c), u = B(l), d = (e) => {
					var t = Ta(), n = z(t, !0);
					V(() => J(n, s())), q(e, t);
				};
				Y(u, (e) => {
					s() && e(d);
				}), N(c), V((e) => {
					Q(c, "title", e), J(l, `${a() ?? ""}${o() > 1 ? " × " + o() : ""}`);
				}, [() => `${i("slot")} ${r()}`]), q(e, c);
			}, (e) => {
				var t = Da(), n = z(t, !0);
				V((e) => J(n, e), [() => i("none")]), q(e, t);
			}), N(o), N(t), V((e) => J(r, e), [() => i("inventory", { name: W(a).player })]), q(e, t);
		}, Dt = (e) => {
			var t = ka(), n = z(t, !0);
			V((e) => J(n, e), [() => i("inventoryAtEnd")]), q(e, t);
		};
		Y(Tt, (e) => {
			W(p) && W(a)?.inventory ? e(Et) : W(a)?.inventory && e(Dt, 1);
		}), N(o), V((e, t, n, r, i, a, o, s, c, f, p, m, g, _, v, b, x, S, ee, te, C, w, T, ne) => {
			Q(l, "viewBox", `${W(O).x ?? ""} ${W(O).z ?? ""} ${W(se) ?? ""} ${W(se) ?? ""}`), Q(l, "aria-label", e), u = ei(l, 0, "svelte-pbz4pw", null, u, { grab: W(E) > 1 }), Q(d, "x", W(O).x), Q(d, "y", W(O).z), Q(d, "width", W(se)), Q(d, "height", W(se)), J(h, t), Q(Re, "cx", W(y).x + .5), Q(Re, "cy", W(y).z + .5), Q(Re, "r", 3.4 * W(k)), ni(Re, `stroke-width: ${1.2 * W(k)}`), J(ze, `${n ?? ""}${r ?? ""}`), Q(Ve, "aria-label", i), Q(Ve, "title", a), Ve.disabled = W(E) >= 8, Q(He, "aria-label", o), Q(He, "title", s), He.disabled = W(E) <= 1, Q(Ue, "title", c), Q(Ue, "aria-label", f), We = ei(Ue, 1, "svelte-pbz4pw", null, We, { on: W(oe) }), J(qe, `${W(y).world ?? ""} · ${p ?? ""} ${m ?? ""}${g ?? ""}`), J(Ze, `${_ ?? ""} `), J(Qe, `${v ?? ""} `), J($e, b), J(it, x), J(ot, S), J(st, `${ee ?? ""}${W(we)?.y == null ? "" : ` · Y ${W(we).y}`}`), J(ut, te), J(ft, `${W(Se).total ?? ""} ${C ?? ""}`), J(pt, w), J(ht, T), J(St, ne);
		}, [
			() => i("area"),
			() => i("noTerrain"),
			() => Math.round(W(y).x),
			() => Math.round(W(y).z),
			() => i("zoomIn"),
			() => i("zoomIn"),
			() => i("zoomOut"),
			() => i("zoomOut"),
			() => i("follow"),
			() => i("follow"),
			() => Math.round(W(y).x),
			() => Math.round(W(y).z),
			() => W(E) > 1 ? ` · ${Math.round(W(E) * 10) / 10}×` : "",
			() => i("hostile"),
			() => i("passive"),
			() => i("item"),
			() => i("player"),
			() => [W(Te) != null && `❤ ${W(Te)}`, W(Ee) != null && `🍗 ${W(Ee)}`].filter(Boolean).join("  ·  ") || "-",
			() => W(Ce) ? ve(W(Ce)) : i("emptyHand"),
			() => i("around"),
			() => i("entities"),
			() => W(Se).top.map(([e, t]) => `${t} ${ve(e)}`).join(", ") || i("none"),
			() => i("server"),
			() => i("chronicle")
		]), G("pointerdown", l, me), G("pointermove", l, j), G("pointerup", l, () => pe = null), G("click", Ve, () => de(W(E) * 1.5)), G("click", He, () => de(W(E) / 1.5)), G("click", Ue, () => {
			L(oe, !0), L(D, {
				x: 0,
				z: 0
			}, !0);
		}), q(e, o);
	}, Le = (e) => {
		var t = ja(), n = z(t, !0);
		V((e) => J(n, e), [() => i("noMap")]), q(e, t);
	};
	Y(Fe, (e) => {
		W(y) ? e(Ie) : e(Le, -1);
	}), q(e, Pe), ze();
}
pr([
	"pointerdown",
	"pointermove",
	"pointerup",
	"click"
]);
//#endregion
//#region src/ticketlog/LogTimeline.svelte
var Na = /* @__PURE__ */ K("<button> </button>"), Pa = /* @__PURE__ */ K("<button> <b class=\"svelte-18icazz\"> </b> ›</button>"), Fa = /* @__PURE__ */ K("<i></i>"), Ia = /* @__PURE__ */ K("<div class=\"tline svelte-18icazz\"><div class=\"controls svelte-18icazz\"><button class=\"play svelte-18icazz\"> </button> <span class=\"now svelte-18icazz\"> </span> <div class=\"speeds svelte-18icazz\" role=\"group\"></div> <div class=\"jumps svelte-18icazz\"></div></div> <div class=\"barwrap svelte-18icazz\"><div class=\"names muted svelte-18icazz\"><span> </span><span> </span><span> </span></div> <div class=\"bar svelte-18icazz\" role=\"slider\" tabindex=\"0\"><div class=\"row perf svelte-18icazz\"></div> <div class=\"row log svelte-18icazz\"></div> <div class=\"row player svelte-18icazz\"></div> <i class=\"played svelte-18icazz\"></i> <i class=\"cursor svelte-18icazz\"></i></div> <span></span> <div class=\"axis muted svelte-18icazz\"><span> </span> <span> </span></div></div></div>");
function La(e, t) {
	Re(t, !0);
	let n = yi(t, "time", 15), r = (e, n) => na(t.lang, e, n), i = /* @__PURE__ */ P(() => Math.max(1, t.to - t.from)), a = (e) => (e - t.from) / W(i) * 100, o = (e) => new Date(e).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}), s = [
		1,
		5,
		15,
		60
	], c = /* @__PURE__ */ I(5), l = /* @__PURE__ */ I(!1), u = 0, d = 0;
	function f(e) {
		W(l) && (d && n(Math.min(t.to, n() + (e - d) * W(c))), d = e, n() >= t.to ? L(l, !1) : u = requestAnimationFrame(f));
	}
	function p() {
		if (W(l)) return m();
		n() >= t.to - 500 && n(t.from), L(l, !0), d = 0, u = requestAnimationFrame(f);
	}
	function m() {
		L(l, !1), cancelAnimationFrame(u);
	}
	xi(m);
	let h = (e) => n(Math.max(t.from, Math.min(t.to, e))), g = /* @__PURE__ */ I(void 0), _ = !1, v = (e) => {
		let n = W(g).getBoundingClientRect();
		return t.from + Math.max(0, Math.min(1, (e.clientX - n.left) / n.width)) * W(i);
	};
	function y(e) {
		_ = !0, W(g).setPointerCapture(e.pointerId), h(v(e));
	}
	function b(e) {
		_ && h(v(e));
	}
	function x(e) {
		let r = e.shiftKey ? 6e4 : 5e3;
		if (e.key === "ArrowLeft") h(n() - r);
		else if (e.key === "ArrowRight") h(n() + r);
		else if (e.key === " ") p();
		else if (e.key === "Home") h(t.from);
		else if (e.key === "End") h(t.to);
		else return;
		e.preventDefault();
	}
	let S = /* @__PURE__ */ P(() => {
		let e = [];
		for (let n of [...t.marks.perf].sort((e, t) => e.time - t.time)) {
			let t = e.at(-1);
			t && t.tone === n.tone && n.time - t.to <= 2e3 ? t.to = n.time + 1e3 : e.push({
				from: n.time,
				to: n.time + 1e3,
				tone: n.tone
			});
		}
		return e;
	}), ee = /* @__PURE__ */ P(() => [
		{
			id: "error",
			label: r("jumpError"),
			tone: "bad",
			list: t.marks.log.filter((e) => e.tone === "bad")
		},
		{
			id: "warn",
			label: r("jumpWarn"),
			tone: "warn",
			list: t.marks.log.filter((e) => e.tone === "warn")
		},
		{
			id: "lag",
			label: r("jumpLag"),
			tone: "bad",
			list: W(S).filter((e) => e.tone === "bad").map((e) => ({ time: e.from }))
		},
		{
			id: "death",
			label: r("jumpDeath"),
			tone: "bad",
			list: t.marks.player.filter((e) => e.kind === "death")
		},
		{
			id: "event",
			label: r("jumpEvent"),
			tone: "act",
			list: t.marks.log.filter((e) => e.tone === "act")
		}
	].filter((e) => e.list.length));
	function te(e) {
		let t = e.list.map((e) => e.time).sort((e, t) => e - t);
		m(), h(t.find((e) => e > n() + 500) ?? t[0]);
	}
	var C = Ia(), w = R(C), T = R(w), ne = z(T, !0), re = B(T, 2), ie = z(re, !0), ae = B(re, 2);
	Z(ae, 21, () => s, X, (e, t) => {
		var n = Na();
		let r;
		var i = z(n);
		V(() => {
			r = ei(n, 1, "svelte-18icazz", null, r, { on: W(c) === W(t) }), J(i, `${W(t) ?? ""}×`);
		}), G("click", n, () => L(c, W(t), !0)), q(e, n);
	}), N(ae);
	var E = B(ae, 2);
	Z(E, 21, () => W(ee), (e) => e.id, (e, t) => {
		var n = Pa(), i = R(n), a = z(B(i), !0);
		ve(), N(n), V((e) => {
			ei(n, 1, `jump ${W(t).tone ?? ""}`, "svelte-18icazz"), Q(n, "title", e), J(i, `${W(t).label ?? ""} `), J(a, W(t).list.length);
		}, [() => r("jumpHint")]), G("click", n, () => te(W(t))), q(e, n);
	}), N(E), N(w);
	var D = B(w, 2), oe = R(D), se = R(oe), ce = z(se, !0), le = B(se), ue = z(le, !0), O = z(B(le), !0);
	N(oe);
	var k = B(oe, 2), A = R(k);
	Z(A, 21, () => W(S), X, (e, t) => {
		var n = Fa();
		V((e, r) => {
			ei(n, 1, `band ${W(t).tone ?? ""}`, "svelte-18icazz"), ni(n, `left: ${e ?? ""}%; width: ${r ?? ""}%`);
		}, [() => a(W(t).from), () => Math.max(.3, a(W(t).to) - a(W(t).from))]), q(e, n);
	}), N(A);
	var de = B(A, 2);
	Z(de, 21, () => t.marks.log, X, (e, t) => {
		var n = Fa();
		V((e) => {
			ei(n, 1, `tick ${W(t).tone ?? ""}`, "svelte-18icazz"), ni(n, `left: ${e ?? ""}%`);
		}, [() => a(W(t).time)]), q(e, n);
	}), N(de);
	var fe = B(de, 2);
	Z(fe, 21, () => t.marks.player, X, (e, t) => {
		var n = Fa();
		let r;
		V((e) => {
			r = ei(n, 1, `tick ${W(t).tone ?? ""}`, "svelte-18icazz", r, { big: W(t).kind === "death" }), ni(n, `left: ${e ?? ""}%`);
		}, [() => a(W(t).time)]), q(e, n);
	}), N(fe);
	var pe = B(fe, 2), me = B(pe, 2);
	N(k), gi(k, (e) => L(g, e), () => W(g));
	var j = B(k, 4), he = R(j), M = z(he, !0), ge = z(B(he, 2));
	N(j), N(D), N(C), V((e, r, i, a, o, s, c, u, d, f, p, m, h) => {
		Q(T, "aria-label", e), J(ne, W(l) ? "❚❚" : "▶"), J(ie, r), Q(ae, "aria-label", i), J(ce, a), J(ue, o), J(O, s), Q(k, "aria-label", c), Q(k, "aria-valuemin", t.from), Q(k, "aria-valuemax", t.to), Q(k, "aria-valuenow", n()), Q(k, "aria-valuetext", u), ni(pe, `width: ${d ?? ""}%`), ni(me, `left: ${f ?? ""}%`), J(M, p), J(ge, `${m ?? ""} ${h ?? ""}`);
	}, [
		() => r("play"),
		() => n() >= t.to ? r("created") : o(n()),
		() => r("speed"),
		() => r("lanePerf"),
		() => r("laneLog"),
		() => r("lanePlayer"),
		() => r("timeline"),
		() => o(n()),
		() => a(n()),
		() => a(n()),
		() => o(t.from),
		() => r("created"),
		() => o(t.to)
	]), G("click", T, p), G("pointerdown", k, y), G("pointermove", k, b), G("pointerup", k, () => _ = !1), G("keydown", k, x), q(e, C), ze();
}
pr([
	"click",
	"pointerdown",
	"pointermove",
	"pointerup",
	"keydown"
]);
//#endregion
//#region src/ticketlog/ModulePart.svelte
var Ra = /* @__PURE__ */ K("<p class=\"svelte-1h3vb0h\"> </p>"), za = /* @__PURE__ */ K("<span class=\"pill svelte-1h3vb0h\"> </span>"), Ba = /* @__PURE__ */ K("<div><dt class=\"svelte-1h3vb0h\"> </dt><dd class=\"svelte-1h3vb0h\"> </dd></div>"), Va = /* @__PURE__ */ K("<dl class=\"svelte-1h3vb0h\"></dl>"), Ha = /* @__PURE__ */ K("<div class=\"charts svelte-1h3vb0h\"></div>"), Ua = /* @__PURE__ */ K("<section><header class=\"svelte-1h3vb0h\"><div><span class=\"from svelte-1h3vb0h\"> </span> <h3 class=\"svelte-1h3vb0h\"> </h3> <!></div> <!></header> <!> <!></section>");
function Wa(e, t) {
	Re(t, !0);
	let n = /* @__PURE__ */ P(() => (t.part.charts ?? []).map((e) => ({
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
	var i = Ua(), a = R(i), o = R(a), s = R(o), c = z(s, !0), l = B(s, 2), u = z(l, !0), d = B(l, 2), f = (e) => {
		var n = Ra(), r = z(n, !0);
		V(() => J(r, t.part.reason)), q(e, n);
	};
	Y(d, (e) => {
		t.part.reason && e(f);
	}), N(o);
	var p = B(o, 2), h = (e) => {
		var n = za(), r = z(n, !0);
		V(() => J(r, t.part.status.text)), q(e, n);
	};
	Y(p, (e) => {
		t.part.status && e(h);
	}), N(a);
	var g = B(a, 2), _ = (e) => {
		var n = Va();
		Z(n, 21, () => t.part.facts, X, (e, t) => {
			var n = /* @__PURE__ */ P(() => m(W(t), 2));
			let r = () => W(n)[0], i = () => W(n)[1];
			var a = Ba(), o = R(a), s = z(o, !0), c = z(B(o), !0);
			N(a), V(() => {
				J(s, r()), J(c, i());
			}), q(e, a);
		}), N(n), q(e, n);
	};
	Y(g, (e) => {
		t.part.facts?.length && e(_);
	});
	var v = B(g, 2), y = (e) => {
		var i = Ha();
		Z(i, 21, () => W(n), X, (e, n) => {
			{
				let i = /* @__PURE__ */ P(() => r(W(n).unit)), a = /* @__PURE__ */ P(() => [{
					key: "value",
					label: W(n).title,
					color: "var(--series-1)"
				}]);
				ea(e, {
					get title() {
						return W(n).title;
					},
					get points() {
						return W(n).points;
					},
					get from() {
						return t.from;
					},
					get to() {
						return t.to;
					},
					seconds: !0,
					get format() {
						return W(i);
					},
					get refs() {
						return W(n).refs;
					},
					get series() {
						return W(a);
					}
				});
			}
		}), N(i), q(e, i);
	};
	Y(v, (e) => {
		W(n).length && e(y);
	}), N(i), V((e, n) => {
		ei(i, 1, `mpart tone-${e ?? ""}`, "svelte-1h3vb0h"), J(c, n), J(u, t.part.title);
	}, [() => aa(t.part.status?.tone), () => na(t.lang, "module", { plugin: t.part.plugin })]), q(e, i), ze();
}
//#endregion
//#region src/ticketlog/TicketLog.svelte
var Ga = /* @__PURE__ */ K("<button role=\"tab\"> </button>"), Ka = /* @__PURE__ */ K("<dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd>", 1), qa = /* @__PURE__ */ K("<dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd>", 1), Ja = /* @__PURE__ */ K("<div class=\"crow svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b class=\"svelte-1y95gkm\"> </b></div>"), Ya = /* @__PURE__ */ K("<span class=\"muted small\">-</span>"), Xa = /* @__PURE__ */ K("<div><h4 class=\"svelte-1y95gkm\"> </h4> <!></div>"), Za = /* @__PURE__ */ K("<section class=\"block svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"><span class=\"muted\"> </span> <small class=\"muted svelte-1y95gkm\"> </small></h3> <dl class=\"svelte-1y95gkm\"><dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <!> <!> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <!></dl> <div class=\"counts svelte-1y95gkm\"><!> <div><h4 class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></h4> <!></div></div></section>"), Qa = /* @__PURE__ */ K("<div class=\"cols svelte-1y95gkm\"></div>"), $a = /* @__PURE__ */ K("<div class=\"pane svelte-1y95gkm\"><!> <!></div>"), eo = /* @__PURE__ */ K("<button role=\"tab\"><span class=\"svelte-1y95gkm\"> </span><b> </b><small class=\"svelte-1y95gkm\"> </small></button>"), to = /* @__PURE__ */ K("<button> </button>"), no = /* @__PURE__ */ K("<div class=\"crow svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></span> <b class=\"svelte-1y95gkm\"> </b></div>"), ro = /* @__PURE__ */ K("<div class=\"crow svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></span><b class=\"svelte-1y95gkm\"> </b></div>"), io = /* @__PURE__ */ K("<section class=\"block svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> <small class=\"muted svelte-1y95gkm\"> </small></h3> <!></section>"), ao = /* @__PURE__ */ K("<div class=\"pane svelte-1y95gkm\"><div class=\"mtiles svelte-1y95gkm\" role=\"tablist\"></div> <div class=\"zoom svelte-1y95gkm\"><span class=\"muted small\"> </span> <div class=\"seg svelte-1y95gkm\" role=\"group\"></div></div> <!> <div class=\"cols svelte-1y95gkm\"><section class=\"block svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> <small class=\"muted svelte-1y95gkm\"> </small></h3> <!></section> <!></div></div>"), oo = /* @__PURE__ */ K("<div class=\"seg svelte-1y95gkm\"></div>"), so = /* @__PURE__ */ K("<button class=\"more svelte-1y95gkm\"> </button>"), co = /* @__PURE__ */ K("<span class=\"src svelte-1y95gkm\"> </span>"), lo = /* @__PURE__ */ K("<button><span class=\"lt svelte-1y95gkm\"> </span> <!> <span class=\"tx svelte-1y95gkm\"> </span></button>"), uo = /* @__PURE__ */ K("<p class=\"muted small svelte-1y95gkm\"> </p>"), fo = /* @__PURE__ */ K("<div class=\"pane svelte-1y95gkm\"><div class=\"filters svelte-1y95gkm\"><div class=\"seg svelte-1y95gkm\"></div> <!> <input type=\"search\" class=\"svelte-1y95gkm\"/></div> <div class=\"lines svelte-1y95gkm\"><!> <!> <!> <!></div></div>"), po = /* @__PURE__ */ K("<span> <small class=\"svelte-1y95gkm\"> </small></span>"), mo = /* @__PURE__ */ K("<div class=\"pane cols svelte-1y95gkm\"><section class=\"block svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <dl class=\"svelte-1y95gkm\"><dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">Minecraft</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">MRadmin</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">Java</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd></dl></section> <section class=\"block svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <div class=\"plist svelte-1y95gkm\"></div></section></div>"), ho = /* @__PURE__ */ K("<section class=\"card tlog svelte-1y95gkm\"><!> <div class=\"ttabs svelte-1y95gkm\" role=\"tablist\"></div> <!></section>");
function go(e, t) {
	Re(t, !0);
	let n = yi(t, "lang", 3, "de"), r = (e, t) => na(n(), e, t), i = (e) => e == null ? "-" : Math.round(e).toLocaleString(), a = (e) => e == null ? "-" : e.toFixed(1) + " ms", o = (e) => e == null ? "-" : Math.round(e) + " %", s = (e) => e == null ? "-" : e >= 1024 ? (e / 1024).toFixed(1) + " GB" : Math.round(e) + " MB", c = (e) => e == null ? "-" : e.toFixed(1), l = (e) => new Date(e).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}), u = (e) => {
		let t = Math.floor(e / 6e4);
		return t >= 1440 ? Math.floor(t / 1440) + " d " + Math.floor(t % 1440 / 60) + " h" : t >= 60 ? Math.floor(t / 60) + " h " + t % 60 + " min" : t + " min";
	}, d = /* @__PURE__ */ P(() => Math.max(1, t.log.time - t.log.from)), f = /* @__PURE__ */ P(() => {
		let e = t.log.health?.fields ?? [];
		return (t.log.health?.rows ?? []).map((t) => Object.fromEntries(e.map((e, n) => [e, t[n]])));
	}), p = /* @__PURE__ */ P(() => {
		let e = [];
		for (let [n, r, i] of t.log.console?.lines ?? []) e.push({
			time: Number(n),
			kind: "console",
			level: ["warn", "error"].includes(r) ? r : "info",
			text: String(i)
		});
		for (let n of t.log.events ?? []) e.push({
			time: Number(n.time),
			kind: "event",
			level: "event",
			text: String(n.text),
			source: String(n.source),
			color: ia(n.color)
		});
		return e.sort((e, t) => e.time - t.time), e;
	}), h = /* @__PURE__ */ P(() => (t.log.timeline?.minutes ?? []).flatMap((e) => (e.events ?? []).map((e) => ({
		time: Number(e.time),
		kind: String(e.kind)
	})))), g = /* @__PURE__ */ P(() => !!(t.log.area || t.log.timeline)), _ = /* @__PURE__ */ P(() => [t.log.player && {
		who: r("creator"),
		p: t.log.player,
		onMap: W(g)
	}, t.log.target && {
		who: r("target"),
		p: t.log.target,
		onMap: !1
	}].filter(Boolean)), v = /* @__PURE__ */ I(Ht(rr(() => t.log.time))), y = /* @__PURE__ */ P(() => ({
		perf: W(f).map((e) => ({
			time: e.time,
			tone: e.mspt > 50 || e.tps < 15 ? "bad" : e.msptMax > 50 || e.tps < 19 ? "warn" : ""
		})).filter((e) => e.tone),
		log: W(p).filter((e) => e.level !== "info").map((e) => ({
			time: e.time,
			tone: e.level === "error" ? "bad" : e.level === "warn" ? "warn" : "act"
		})),
		player: W(h).map((e) => ({
			time: e.time,
			kind: e.kind,
			tone: e.kind === "death" ? "bad" : "act"
		}))
	})), b = /* @__PURE__ */ P(() => [
		t.log.module && {
			id: "module",
			label: t.log.module.title
		},
		(W(g) || W(_).length) && {
			id: "map",
			label: r("tabMap")
		},
		W(f).length && {
			id: "perf",
			label: r("tabPerf")
		},
		{
			id: "log",
			label: r("tabLog")
		},
		{
			id: "server",
			label: r("tabServer")
		}
	].filter(Boolean)), x = /* @__PURE__ */ I(Ht(rr(() => t.log.module ? "module" : t.log.area || t.log.timeline || t.log.player ? "map" : "log"))), S = (e, t = Math.max) => W(f).length ? t(...W(f).map((t) => t[e] ?? 0)) : null, ee = /* @__PURE__ */ P(() => S("tps", Math.min)), te = /* @__PURE__ */ P(() => S("msptMax")), C = /* @__PURE__ */ P(() => [
		{
			id: "tps",
			label: "TPS",
			peak: c(W(ee)),
			hint: r("lowest"),
			tone: W(ee) < 15 ? "bad" : W(ee) < 19 ? "warn" : "",
			yMax: 20,
			format: c,
			series: [{
				key: "tps",
				label: "TPS",
				color: "var(--series-1)"
			}]
		},
		{
			id: "mspt",
			label: r("mspt"),
			peak: a(W(te)),
			hint: r("longestTick"),
			tone: W(te) > 100 ? "bad" : W(te) > 50 ? "warn" : "",
			format: a,
			refs: [{
				value: 50,
				label: "50 ms"
			}],
			series: [
				{
					key: "mspt",
					label: r("avg"),
					color: "var(--series-1)"
				},
				{
					key: "msptP95",
					label: "95 %",
					color: "var(--series-2)"
				},
				{
					key: "msptMax",
					label: r("max"),
					color: "var(--series-3)"
				}
			]
		},
		{
			id: "cpu",
			label: "CPU",
			peak: o(S("cpu")),
			hint: r("highest"),
			yMax: 100,
			format: o,
			series: [{
				key: "cpu",
				label: r("server"),
				color: "var(--series-1)"
			}, {
				key: "cpuSystem",
				label: r("system"),
				color: "var(--series-2)"
			}]
		},
		{
			id: "ram",
			label: "RAM",
			peak: s(S("heapUsed")),
			hint: r("highestOf", { max: s(W(f).at(-1)?.heapMax) }),
			format: s,
			series: [{
				key: "heapUsed",
				label: r("used"),
				color: "var(--series-1)"
			}]
		},
		{
			id: "world",
			label: r("world"),
			peak: i(S("entities")),
			hint: r("highest") + " · " + r("entities"),
			format: i,
			series: [
				{
					key: "entities",
					label: r("entities"),
					color: "var(--series-1)"
				},
				{
					key: "tiles",
					label: r("tiles"),
					color: "var(--series-2)"
				},
				{
					key: "chunks",
					label: r("chunks"),
					color: "var(--series-3)"
				}
			]
		},
		{
			id: "players",
			label: r("players"),
			peak: i(S("players")),
			hint: r("highest") + " · Ping " + i(S("ping")) + " ms",
			format: i,
			series: [{
				key: "players",
				label: r("players"),
				color: "var(--series-1)"
			}, {
				key: "ping",
				label: "Ping",
				color: "var(--series-2)"
			}]
		}
	]), w = /* @__PURE__ */ I("tps"), T = /* @__PURE__ */ P(() => W(C).find((e) => e.id === W(w)) ?? W(C)[0]), ne = /* @__PURE__ */ P(() => Math.max(1, Math.round(W(d) / 6e4))), re = /* @__PURE__ */ P(() => [...[
		1,
		10,
		30
	].filter((e) => e < W(ne)), W(ne)].filter((e, t, n) => n.indexOf(e) === t)), ie = /* @__PURE__ */ I(30), ae = /* @__PURE__ */ P(() => Math.min(W(ie), W(ne))), E = /* @__PURE__ */ P(() => Math.max(t.log.from, Math.min(t.log.time - W(ae) * 6e4, W(v) - W(ae) * 3e4))), D = /* @__PURE__ */ P(() => Math.min(t.log.time, W(E) + W(ae) * 6e4)), oe = /* @__PURE__ */ P(() => W(f).filter((e) => e.time >= W(E) && e.time <= W(D))), se = /* @__PURE__ */ I("all"), ce = Ht({
		info: !0,
		warn: !0,
		error: !0
	}), le = /* @__PURE__ */ I(""), ue = /* @__PURE__ */ I(200), O = /* @__PURE__ */ I(100), k = /* @__PURE__ */ P(() => {
		let e = W(le).trim().toLowerCase();
		return W(p).filter((t) => W(se) !== "all" && t.kind !== W(se) || t.kind === "console" && !ce[t.level] ? !1 : !e || t.text.toLowerCase().includes(e) || (t.source ?? "").toLowerCase().includes(e));
	}), A = /* @__PURE__ */ P(() => {
		let e = -1;
		for (let t = 0; t < W(k).length && W(k)[t].time <= W(v); t++) e = t;
		return e;
	}), de = /* @__PURE__ */ P(() => Math.max(0, W(A) - W(ue))), fe = /* @__PURE__ */ P(() => W(k).slice(W(de), Math.max(W(A) + 1 + W(O), W(de)))), pe = /* @__PURE__ */ I(void 0);
	un(() => {
		let e = W(pe)?.querySelector(".line.now");
		if (!e) return;
		let t = e.offsetTop;
		(t < W(pe).scrollTop || t > W(pe).scrollTop + W(pe).clientHeight - e.offsetHeight) && (W(pe).scrollTop = t - W(pe).clientHeight / 2);
	});
	var me = ho(), j = R(me);
	La(j, {
		get lang() {
			return n();
		},
		get from() {
			return t.log.from;
		},
		get to() {
			return t.log.time;
		},
		get marks() {
			return W(y);
		},
		get time() {
			return W(v);
		},
		set time(e) {
			L(v, e, !0);
		}
	});
	var he = B(j, 2);
	Z(he, 21, () => W(b), (e) => e.id, (e, t) => {
		var n = Ga();
		let r;
		var i = z(n, !0);
		V(() => {
			Q(n, "aria-selected", W(x) === W(t).id), r = ei(n, 1, "svelte-1y95gkm", null, r, { on: W(x) === W(t).id }), J(i, W(t).label);
		}), G("click", n, () => L(x, W(t).id, !0)), q(e, n);
	}), N(he);
	var M = B(he, 2), ge = (e) => {
		Wa(e, {
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
	}, _e = (e) => {
		var i = $a(), a = R(i), o = (e) => {
			{
				let i = /* @__PURE__ */ P(() => t.log.module?.area ? {
					...t.log.module.area,
					label: r("loaderArea") + ": " + t.log.module.title
				} : null);
				Ma(e, {
					get log() {
						return t.log;
					},
					get lang() {
						return n();
					},
					get time() {
						return W(v);
					},
					onseek: (e) => L(v, e, !0),
					get mark() {
						return W(i);
					}
				});
			}
		};
		Y(a, (e) => {
			W(g) && e(o);
		});
		var s = B(a, 2), c = (e) => {
			var t = Qa();
			Z(t, 21, () => W(_), X, (e, t) => {
				let n = () => W(t).who, i = () => W(t).p, a = () => W(t).onMap;
				var o = Za(), s = R(o), c = R(s), l = z(c, !0), u = B(c), d = z(B(u), !0);
				N(s);
				var f = B(s, 2), p = R(f), h = z(p, !0), g = B(p), _ = R(g), v = z(B(_));
				N(g);
				var y = B(g, 2), b = z(y, !0), x = B(y), S = z(x), ee = B(x, 2), te = z(ee, !0), C = B(ee), w = z(C), T = B(C, 2), ne = (e) => {
					var t = Ka(), n = Zt(t), a = z(n, !0), o = B(n), s = z(o), c = B(o, 2), l = z(c, !0), u = z(B(c), !0);
					V((e, t) => {
						J(a, e), J(s, `❤ ${i().health ?? ""}/${i().maxHealth ?? ""} · 🍗 ${i().food ?? ""} · Lvl ${i().level ?? ""}`), J(l, t), J(u, i().hand ?? "-");
					}, [() => r("state"), () => r("hand")]), q(e, t);
				}, re = (e) => {
					var t = qa(), n = Zt(t), a = z(n, !0), o = z(B(n), !0);
					V((e) => {
						J(a, e), J(o, i().level);
					}, [() => r("level")]), q(e, t);
				};
				Y(T, (e) => {
					a() ? e(re, -1) : e(ne);
				});
				var ie = B(T, 2), ae = (e) => {
					var t = qa(), n = Zt(t), a = z(n, !0), o = z(B(n), !0);
					V((e, t) => {
						J(a, e), J(o, t);
					}, [() => r("effects"), () => i().effects.join(", ")]), q(e, t);
				};
				Y(ie, (e) => {
					i().effects?.length && e(ae);
				});
				var E = B(ie, 2), D = z(E, !0), oe = B(E), se = z(oe), ce = B(oe, 2), le = (e) => {
					var t = qa(), n = Zt(t), a = z(n, !0), o = z(B(n), !0);
					V((e, t) => {
						J(a, e), J(o, t);
					}, [() => r("nearPlayers"), () => i().players.map((e) => `${e.name} (${Math.round(e.distance)} m)`).join(", ")]), q(e, t);
				};
				Y(ce, (e) => {
					!a() && i().players?.length && e(le);
				}), N(f);
				var ue = B(f, 2), O = R(ue), k = (e) => {
					var t = Xa(), n = R(t), a = z(n, !0);
					Z(B(n, 2), 17, () => (i().entities ?? []).slice(0, 8), X, (e, t) => {
						var n = /* @__PURE__ */ P(() => m(W(t), 2));
						let r = () => W(n)[0], i = () => W(n)[1];
						var a = Ja(), o = R(a), s = z(o, !0), c = z(B(o), !0);
						N(a), V(() => {
							J(s, r()), J(c, i());
						}), q(e, a);
					}, (e) => {
						q(e, Ya());
					}), N(t), V((e) => J(a, e), [() => r("entitiesNear")]), q(e, t);
				};
				Y(O, (e) => {
					a() || e(k);
				});
				var A = B(O, 2), de = R(A), fe = R(de), pe = z(B(fe), !0);
				N(de), Z(B(de, 2), 17, () => (i().tiles ?? []).slice(0, 8), X, (e, t) => {
					var n = /* @__PURE__ */ P(() => m(W(t), 2));
					let r = () => W(n)[0], i = () => W(n)[1];
					var a = Ja(), o = R(a), s = z(o, !0), c = z(B(o), !0);
					N(a), V(() => {
						J(s, r()), J(c, i());
					}), q(e, a);
				}, (e) => {
					q(e, Ya());
				}), N(A), N(ue), N(o), V((e, t, r, a, o, s, c, f, p, m, g, y, x, ee, C) => {
					J(l, n()), J(u, ` ${i().name ?? ""} `), J(d, e), J(h, t), J(_, `${i().world ?? ""} · ${r ?? ""} ${a ?? ""} ${o ?? ""} `), J(v, `(${s ?? ""} ${c ?? ""})`), J(b, f), J(S, `${i().biome ?? ""} · ${p ?? ""} ${i().light ?? ""}`), J(te, m), J(w, `${i().gameMode ?? ""}${g ?? ""}${i().vehicle ? " · " + i().vehicle : ""}${i().op ? " · OP" : ""}`), J(D, y), J(se, `${i().client ?? "-" ?? ""} · ${x ?? ""} ${i().protocol ?? ""} · ${i().locale ?? ""} · ${ee ?? ""} ${i().viewDistance ?? ""} · Ping ${i().ping ?? ""} ms`), J(fe, `${C ?? ""} `), J(pe, i().tileArea);
				}, [
					() => r("atCreation"),
					() => r("position"),
					() => Math.round(i().x),
					() => Math.round(i().y),
					() => Math.round(i().z),
					() => r("chunk"),
					() => i().chunk?.join(" "),
					() => r("biome"),
					() => r("light"),
					() => r("gameMode"),
					() => i().flying ? " · " + r("flying") : "",
					() => r("client"),
					() => r("protocol"),
					() => r("viewDistance"),
					() => r("tilesNear")
				]), q(e, o);
			}), N(t), q(e, t);
		};
		Y(s, (e) => {
			W(_).length && e(c);
		}), N(i), q(e, i);
	}, ve = (e) => {
		var n = ao(), a = R(n);
		Z(a, 21, () => W(C), (e) => e.id, (e, t) => {
			var n = eo();
			let r;
			var i = R(n), a = z(i, !0), o = B(i), s = z(o, !0), c = z(B(o), !0);
			N(n), V(() => {
				Q(n, "aria-selected", W(w) === W(t).id), r = ei(n, 1, "svelte-1y95gkm", null, r, { on: W(w) === W(t).id }), J(a, W(t).label), ei(o, 1, Jr(W(t).tone ?? ""), "svelte-1y95gkm"), J(s, W(t).peak), J(c, W(t).hint);
			}), G("click", n, () => L(w, W(t).id, !0)), q(e, n);
		}), N(a);
		var o = B(a, 2), s = R(o), c = z(s, !0), l = B(s, 2);
		Z(l, 21, () => W(re), X, (e, t) => {
			var n = to();
			let i;
			var a = z(n, !0);
			V((e) => {
				i = ei(n, 1, "svelte-1y95gkm", null, i, { on: W(ae) === W(t) }), J(a, e);
			}, [() => r("min", { n: W(t) })]), G("click", n, () => L(ie, W(t), !0)), q(e, n);
		}), N(l), N(o);
		var u = B(o, 2);
		Ir(u, () => W(w) + W(ae), (e) => {
			{
				let t = /* @__PURE__ */ P(() => W(ae) > 1), n = /* @__PURE__ */ P(() => W(T).yMax ?? null), r = /* @__PURE__ */ P(() => W(T).refs ?? []);
				ea(e, {
					get title() {
						return W(T).label;
					},
					get points() {
						return W(oe);
					},
					get from() {
						return W(E);
					},
					get to() {
						return W(D);
					},
					seconds: !0,
					get smooth() {
						return W(t);
					},
					get yMax() {
						return W(n);
					},
					get format() {
						return W(T).format;
					},
					get series() {
						return W(T).series;
					},
					get refs() {
						return W(r);
					},
					get cursor() {
						return W(v);
					},
					onpick: (e) => L(v, e, !0)
				});
			}
		});
		var d = B(u, 2), f = R(d), p = R(f), m = R(p), h = z(B(m), !0);
		N(p), Z(B(p, 2), 17, () => t.log.server?.worlds ?? [], X, (e, t) => {
			var n = no(), r = R(n), a = R(r), o = z(B(a));
			N(r);
			var s = z(B(r, 2));
			N(n), V((e, n, r, i) => {
				J(a, `${W(t).name ?? ""} `), J(o, `${W(t).environment ?? ""} · ${W(t).weather ?? ""}`), J(s, `${e ?? ""} 👤 · ${n ?? ""} ▦ · ${r ?? ""} E · ${i ?? ""} T`);
			}, [
				() => i(W(t).players),
				() => i(W(t).chunks),
				() => i(W(t).entities),
				() => i(W(t).tiles)
			]), q(e, n);
		}), N(f);
		var g = B(f, 2), _ = (e) => {
			var n = io(), i = R(n), a = R(i), o = z(B(a), !0);
			N(i), Z(B(i, 2), 17, () => t.log.hotChunks, X, (e, t) => {
				var n = ro(), r = R(n), i = R(r), a = z(B(i), !0);
				N(r);
				var o = z(B(r), !0);
				N(n), V((e) => {
					J(i, `${W(t).world ?? ""} ${W(t).x ?? ""} ${W(t).z ?? ""} `), J(a, e), J(o, W(t).count);
				}, [() => W(t).types.slice(0, 3).map(([e, t]) => `${e} ${t}`).join(", ")]), q(e, n);
			}), N(n), V((e, t) => {
				J(a, `${e ?? ""} `), J(o, t);
			}, [() => r("hotChunks"), () => r("atCreation")]), q(e, n);
		};
		Y(g, (e) => {
			t.log.hotChunks?.length && e(_);
		}), N(d), N(n), V((e, t, n, r) => {
			J(c, e), Q(l, "aria-label", t), J(m, `${n ?? ""} `), J(h, r);
		}, [
			() => r("zoom"),
			() => r("zoom"),
			() => r("worlds"),
			() => r("atCreation")
		]), q(e, n);
	}, ye = (e) => {
		var n = fo(), i = R(n), a = R(i);
		Z(a, 21, () => [
			["all", r("all")],
			["console", r("console")],
			["event", r("events")]
		], X, (e, t) => {
			var n = /* @__PURE__ */ P(() => m(W(t), 2));
			let r = () => W(n)[0], i = () => W(n)[1];
			var a = to();
			let o;
			var s = z(a, !0);
			V(() => {
				o = ei(a, 1, "svelte-1y95gkm", null, o, { on: W(se) === r() }), J(s, i());
			}), G("click", a, () => L(se, r(), !0)), q(e, a);
		}), N(a);
		var o = B(a, 2), s = (e) => {
			var t = oo();
			Z(t, 21, () => [
				["info", "Info"],
				["warn", r("warnings")],
				["error", r("errors")]
			], X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 2));
				let r = () => W(n)[0], i = () => W(n)[1];
				var a = to();
				let o;
				var s = z(a, !0);
				V(() => {
					o = ei(a, 1, Jr(r()), "svelte-1y95gkm", o, { on: ce[r()] }), J(s, i());
				}), G("click", a, () => ce[r()] = !ce[r()]), q(e, a);
			}), N(t), q(e, t);
		};
		Y(o, (e) => {
			W(se) !== "event" && e(s);
		});
		var c = B(o, 2);
		oi(c), N(i);
		var u = B(i, 2), d = R(u), f = (e) => {
			var t = so(), n = z(t, !0);
			V((e) => J(n, e), [() => r("older", { count: W(de) })]), G("click", t, () => L(ue, W(ue) + 300)), q(e, t);
		};
		Y(d, (e) => {
			W(de) > 0 && e(f);
		});
		var p = B(d, 2);
		Z(p, 17, () => W(fe), X, (e, t, n) => {
			var r = lo();
			let i;
			var a = R(r), o = z(a, !0), s = B(a, 2), c = (e) => {
				var n = co(), r = z(n, !0);
				V(() => {
					ni(n, `--c: ${W(t).color ?? ""}`), J(r, W(t).source);
				}), q(e, n);
			};
			Y(s, (e) => {
				W(t).kind === "event" && e(c);
			});
			var u = z(B(s, 2), !0);
			N(r), V((e) => {
				i = ei(r, 1, `line ${W(t).level ?? ""}`, "svelte-1y95gkm", i, {
					now: W(de) + n === W(A),
					future: W(t).time > W(v)
				}), J(o, e), J(u, W(t).text);
			}, [() => l(W(t).time)]), G("click", r, () => L(v, W(t).time, !0)), q(e, r);
		}, (e) => {
			var t = uo(), n = z(t, !0);
			V((e) => J(n, e), [() => r("empty")]), q(e, t);
		});
		var h = B(p, 2), g = (e) => {
			var t = so(), n = z(t, !0);
			V((e) => J(n, e), [() => r("newer", { count: W(k).length - W(de) - W(fe).length })]), G("click", t, () => L(O, W(O) + 300)), q(e, t);
		};
		Y(h, (e) => {
			W(de) + W(fe).length < W(k).length && e(g);
		});
		var _ = B(h, 2), y = (e) => {
			var t = uo(), n = z(t, !0);
			V((e) => J(n, e), [() => r("cut")]), q(e, t);
		};
		Y(_, (e) => {
			t.log.console?.cut && e(y);
		}), N(u), gi(u, (e) => L(pe, e), () => W(pe)), N(n), V((e) => Q(c, "placeholder", e), [() => r("search")]), ui(c, () => W(le), (e) => L(le, e)), q(e, n);
	}, be = (e) => {
		var n = mo(), i = R(n), a = R(i), o = z(a, !0), c = B(a, 2), l = R(c), d = z(l, !0), f = B(l), p = z(f, !0), m = B(f, 3), h = z(m, !0), g = B(m, 3), _ = z(g, !0), v = B(g, 3), y = z(v, !0), b = B(v, 2), x = z(b, !0), S = B(b), ee = z(S), te = B(S, 2), C = z(te, !0), w = B(te), T = z(w, !0), ne = B(w, 2), re = z(ne, !0), ie = B(ne), ae = z(ie, !0), E = B(ie, 2), D = z(E, !0), oe = B(E), se = z(oe), ce = B(oe, 2), le = z(ce, !0), ue = z(B(ce), !0);
		N(c), N(i);
		var O = B(i, 2), k = R(O), A = z(k, !0), de = B(k, 2);
		Z(de, 21, () => t.log.server?.plugins ?? [], X, (e, t) => {
			var n = po();
			let r;
			var i = R(n), a = z(B(i), !0);
			N(n), V(() => {
				r = ei(n, 1, "svelte-1y95gkm", null, r, { off: !W(t).enabled }), J(i, `${W(t).name ?? ""} `), J(a, W(t).version);
			}), q(e, n);
		}), N(de), N(O), N(n), V((e, n, r, i, a, s, c, l, u, f, m) => {
			J(o, e), J(d, n), J(p, t.log.server?.software), J(h, t.log.server?.minecraft), J(_, t.log.server?.mradmin), J(y, t.log.server?.java), J(x, r), J(ee, `${t.log.server?.os ?? ""} · ${t.log.server?.cores ?? ""} ${i ?? ""} · ${a ?? ""}`), J(C, s), J(T, c), J(re, l), J(ae, t.log.server?.maxPlayers), J(D, u), J(se, `${t.log.server?.viewDistance ?? ""} / ${t.log.server?.simulationDistance ?? ""}`), J(le, f), J(ue, t.log.server?.storage), J(A, m);
		}, [
			() => r("serverData"),
			() => r("software"),
			() => r("system"),
			() => r("cores"),
			() => s(t.log.server?.memoryMax),
			() => r("uptime"),
			() => u(t.log.server?.uptime ?? 0),
			() => r("slots"),
			() => r("distances"),
			() => r("storage"),
			() => r("plugins", { count: t.log.server?.plugins?.length ?? 0 })
		]), q(e, n);
	};
	Y(M, (e) => {
		W(x) === "module" ? e(ge) : W(x) === "map" ? e(_e, 1) : W(x) === "perf" ? e(ve, 2) : W(x) === "log" ? e(ye, 3) : W(x) === "server" && e(be, 4);
	}), N(me), q(e, me), ze();
}
pr(["click"]);
//#endregion
//#region src/ticketlog/viewer/main.js
function _o(e, t, n = "de") {
	e.classList.add("mr-tlog-root");
	let r = kr(go, {
		target: e,
		props: {
			log: t,
			lang: n
		}
	});
	return { destroy: () => Nr(r) };
}
//#endregion
export { _o as mountTicketLog };
