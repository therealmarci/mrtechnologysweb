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
var h = 1024, g = 2048, _ = 4096, v = 8192, y = 16384, b = 32768, x = 1 << 25, S = 65536, C = 1 << 19, w = 1 << 20, ee = 1 << 25, T = 1 << 21, te = 1 << 22, ne = 1 << 23, re = Symbol("$state"), E = Symbol("component"), ie = Symbol("legacy props"), D = Symbol(""), ae = Symbol("attributes"), oe = Symbol("class"), se = Symbol("style"), ce = Symbol("text"), le = Symbol("form reset"), O = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), ue = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml"), de = {}, k = Symbol("uninitialized"), fe = "http://www.w3.org/1999/xhtml";
function pe() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function me(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function he() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var A = !1;
function j(e) {
	A = e;
}
var M;
function ge(e) {
	if (e === null) throw me(), de;
	return M = e;
}
function _e() {
	return ge(/* @__PURE__ */ Xt(M));
}
function N(e) {
	if (A) {
		if (/* @__PURE__ */ Xt(M) !== null) throw me(), de;
		M = e;
	}
}
function ve(e = 1) {
	if (A) {
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
	if (!e || e.nodeType !== 8) throw me(), de;
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
	return i(e, E, { value: !0 }), e;
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
	return U !== null && (U.f |= C), {
		ctx: Ie,
		deps: null,
		effects: null,
		equals: xe,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: k,
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
	var i = void 0, a = Pt(k), o = !H, s = /* @__PURE__ */ new Set();
	return mn(() => {
		var t = U, n = p();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== O && n.reject(e);
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
	if (!jn && r !== null && e.v !== k && r.f & 24576) return pe(), e.v;
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
		t.ac.abort(O), t.ac = null;
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
		e.v !== k && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, n]), ht?.set(e, t)), this.is_fork || (e.v = t);
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
	if (typeof t != "object" || !t || re in t || E in t) return t;
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
					let e = f(() => /* @__PURE__ */ I(k, u));
					r.set(t, e), Bt(o);
				}
			} else L(n, k), Bt(o);
			return !0;
		},
		get(e, n, i) {
			if (n === re) return t;
			var o = r.get(n), s = n in e;
			if (o === void 0 && (!s || a(e, n)?.writable) && (o = f(() => /* @__PURE__ */ I(Ht(s ? e[n] : k), u)), r.set(n, o)), o !== void 0) {
				var c = W(o);
				return c === k ? void 0 : c;
			}
			return Reflect.get(e, n, i);
		},
		getOwnPropertyDescriptor(e, t) {
			this.has?.(e, t);
			var n = Reflect.getOwnPropertyDescriptor(e, t), i = r.get(t);
			if (i !== void 0) {
				var a = W(i);
				if (a === k) return;
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
			var n = r.get(t), i = n !== void 0 && n.v !== k || Reflect.has(e, t);
			return (n !== void 0 || U !== null && (!i || a(e, t)?.writable)) && (n === void 0 && (n = f(() => /* @__PURE__ */ I(i ? Ht(e[t]) : k, u)), r.set(t, n)), W(n) === k) ? !1 : i;
		},
		set(e, t, n, s) {
			var c = r.get(t), l = t in e;
			if (i && t === "length") for (var d = n; d < c.v; d += 1) {
				var p = r.get(d + "");
				p === void 0 ? d in e && (p = f(() => /* @__PURE__ */ I(k, u)), r.set(d + "", p)) : L(p, k);
			}
			if (c === void 0) (!l || a(e, t)?.writable) && (c = f(() => /* @__PURE__ */ I(void 0, u)), L(c, Ht(n)), r.set(t, c));
			else {
				l = c.v !== k;
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
				return t === void 0 || t.v !== k;
			});
			for (var [n, i] of r) i.v !== k && !(n in e) && t.push(n);
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
		Gt = a(t, "firstChild").get, Kt = a(t, "nextSibling").get, u(e) && (e[oe] = void 0, e[ae] = null, e[se] = void 0, e.__e = void 0), u(n) && (n[ce] = void 0);
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
	if (!A) return /* @__PURE__ */ Yt(e);
	var n = /* @__PURE__ */ Yt(M);
	if (n === null) n = M.appendChild(Jt());
	else if (t && n.nodeType !== 3) {
		var r = Jt();
		return n?.before(r), ge(r), r;
	}
	return t && tn(n), ge(n), n;
}
function Zt(e, t = !1) {
	if (!A) {
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
	if (!A) return /* @__PURE__ */ Yt(e);
	var n = R(e, t);
	return N(e), n;
}
function B(e, t = 1, n = !1) {
	let r = A ? M : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Xt(r);
	if (!A) return r;
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
	return sn(4 | w, e);
}
function fn(e) {
	Ct.ensure();
	let t = sn(64 | C, e);
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
	return sn(te | C, e);
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
	return sn(32 | C, e);
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
			e.abort(O);
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
		e.ac.abort(O);
	}), e.ac = null);
	try {
		e.f |= T;
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
		e.f ^= T, Rn = t, zn = n, Bn = r, H = i, In = a, Le(o), Nn = s, Wn = c;
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
		s.f & 512 && (s.f ^= 512), s.v !== k && Je(s), s.ac !== null && Qe(() => {
			s.ac.abort(O), s.ac = null, qe(s, g);
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
	if (e.v === k) return !0;
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
		if (A) return br(M, null), M;
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
		if (A) return br(M, null), M;
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
function Cr() {
	if (A) return br(M, null), M;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Jt();
	return e.append(t, n), br(t, n), e;
}
function q(e, t) {
	if (A) {
		var n = U;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = M), _e();
	} else e !== null && e.before(t);
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function wr(e) {
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
var Tr = S | C;
function Er(e, t, n, r) {
	new Dr(e, t, n, r);
}
var Dr = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = A ? M : null;
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
	#h = wr(() => (this.#m = Pt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = U;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = U.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = gn(() => {
			if (A) {
				let e = this.#t;
				_e();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Tr), A && (this.#e = M);
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
			t ? he() : (t = !0, n && Fe(), this.#s !== null && wn(this.#s, () => {
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
		this.#a &&= (xn(this.#a), null), this.#o &&= (xn(this.#o), null), this.#s &&= (xn(this.#s), null), A && (ge(this.#t), ve(), ge(ye()));
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
function Or(e, t) {
	return Ar(e, t);
}
var kr = /* @__PURE__ */ new Map();
function Ar(e, { target: t, anchor: n, props: i = {}, events: a, context: o, intro: s = !0, transformError: c }) {
	qt();
	var l = void 0, u = fn(() => {
		var s = n ?? t.appendChild(Jt());
		Er(s, { pending: () => {} }, (t) => {
			Re({});
			var n = Ie;
			if (o && (n.c = o), a && (i.$$events = a), A && br(t, null), l = e(t, i) || Be(), A && (U.nodes.end = M, M === null || M.nodeType !== 8 || M.data !== "]")) throw me(), de;
			ze();
		}, c);
		var u = /* @__PURE__ */ new Set(), d = (e) => {
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				if (!u.has(r)) {
					u.add(r);
					var i = sr(r);
					for (let e of [t, document]) {
						var a = kr.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), kr.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, gr, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return d(r(lr)), ur.add(d), () => {
			for (var e of u) for (let n of [t, document]) {
				var r = kr.get(n), i = r.get(e);
				--i == 0 ? (n.removeEventListener(e, gr), r.delete(e), r.size === 0 && kr.delete(n)) : r.set(e, i);
			}
			ur.delete(d), s !== n && s.parentNode?.removeChild(s);
		};
	});
	return jr.set(l, u), l;
}
var jr = /* @__PURE__ */ new WeakMap();
function Mr(e, t) {
	let n = jr.get(e);
	return n ? (jr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var Nr = class {
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
		} else A && (this.anchor = M), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Y(e, t, n = !1) {
	var r;
	A && (r = M, _e());
	var i = new Nr(e), a = n ? S : 0;
	function o(e, t) {
		if (A) {
			var n = be(r);
			if (e !== parseInt(n.substring(1))) {
				var a = ye();
				ge(a), i.anchor = a, j(!1), i.ensure(e, t), j(!0);
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
var Pr = Symbol("NaN");
function Fr(e, t, n) {
	A && _e();
	var r = new Nr(e), i = !Ve();
	gn(() => {
		var e = t();
		e !== e && (e = Pr), i && typeof e == "object" && e && (e = {}), r.ensure(e, n);
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function X(e, t) {
	return t;
}
function Ir(e, t, n) {
	for (var i = [], a = t.length, o, s = t.length, c = 0; c < a; c++) {
		let n = t[c];
		wn(n, () => {
			if (o) {
				if (o.pending.delete(n), o.done.add(n), o.pending.size === 0) {
					var t = e.outrogroups;
					Lr(e, r(o.done)), t.delete(o), t.size === 0 && (e.outrogroups = null);
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
		Lr(e, t, !l);
	} else o = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(o);
}
function Lr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= ee, On(a, document.createDocumentFragment())) : xn(t[i], n);
	}
}
var Rr;
function Z(t, n, i, a, o, s = null) {
	var c = t, l = /* @__PURE__ */ new Map();
	if (n & 4) {
		var u = t;
		c = A ? ge(/* @__PURE__ */ Yt(u)) : u.appendChild(Jt());
	}
	A && _e();
	var d = null, f = /* @__PURE__ */ st(() => {
		var t = i();
		return e(t) ? t : t == null ? [] : r(t);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Br(v, p, c, n, a), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= ee, Hr(d, null, c)) : En(d) : wn(d, () => {
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
			A && be(c) === "[!" != (e === 0) && (c = ye(), ge(c), j(!1), t = !0);
			for (var r = /* @__PURE__ */ new Set(), u = F, v = $t(), y = 0; y < e; y += 1) {
				A && M.nodeType === 8 && M.data === "]" && (c = M, t = !0, j(!1));
				var b = p[y], x = a(b, y), S = h ? null : l.get(x);
				S ? (S.v && Rt(S.v, b), S.i && Rt(S.i, y), v && u.unskip_effect(S.e)) : (S = Vr(l, h ? c : Rr ??= Jt(), b, x, y, o, n, i), h || (S.e.f |= ee), l.set(x, S)), r.add(x);
			}
			if (e === 0 && s && !d && (h ? d = _n(() => s(c)) : (d = _n(() => s(Rr ??= Jt())), d.f |= ee)), e > r.size && Ee("", "", ""), A && e > 0 && ge(ye()), !h) {
				if (m.set(u, r), v) {
					for (let [e, t] of l) r.has(e) || u.skip_effect(t.e);
					u.oncommit(g), u.ondiscard(_);
				} else g(u);
			}
			t && j(!0), W(f);
		}),
		flags: n,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, A && (c = M);
}
function zr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Br(e, t, n, i, a) {
	var o = !!(i & 8), s = t.length, c = e.items, l = zr(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (o) for (v = 0; v < s; v += 1) h = t[v], g = a(h, v), _ = c.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < s; v += 1) {
		if (h = t[v], g = a(h, v), _ = c.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (En(_), o && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) {
			if (_.f ^= ee, _ === l) Hr(_, null, n);
			else {
				var y = d ? d.next : l;
				_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Ur(e, d, _), Ur(e, _, y), Hr(_, y, n), d = _, p = [], m = [], l = zr(d.next);
				continue;
			}
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], C = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Hr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Ur(e, S.prev, C.next), Ur(e, d, S), Ur(e, C, b), l = b, d = C, --v, p = [], m = [];
				} else u.delete(_), Hr(_, l, n), Ur(e, _.prev, _.next), Ur(e, _, d === null ? e.effect.first : d.next), Ur(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;) (u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), l = zr(l.next);
			if (l === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, l = zr(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Lr(e, r(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var w = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || w.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && w.push(l), l = zr(l.next);
		var T = w.length;
		if (T > 0) {
			var te = i & 4 && s === 0 ? n : null;
			if (o) {
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.measure();
				for (v = 0; v < T; v += 1) w[v].nodes?.a?.fix();
			}
			Ir(e, w, te);
		}
	}
	o && We(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Vr(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Pt(n) : /* @__PURE__ */ Ft(n, !1, !1) : null, l = o & 2 ? Pt(i) : null;
	return {
		v: c,
		i: l,
		e: _n(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Hr(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Xt(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Ur(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/actions.js
function Wr(e, t, n) {
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
function Gr(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = Gr(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function Kr() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Gr(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function qr(e) {
	return typeof e == "object" ? Kr(e) : e ?? "";
}
var Jr = [..." 	\n\r\f\xA0\v﻿"];
function Yr(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Jr.includes(r[o - 1])) && (s === r.length || Jr.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function Xr(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function Zr(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Qr(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\/\*.*?\*\//g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(Zr)), i && c.push(...Object.keys(i).map(Zr));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = Zr(e.substring(l, u).trim());
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
		return r && (n += Xr(r)), i && (n += Xr(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function Q(e, t, n, r, i, a) {
	var o = e[oe];
	if (A || o !== n || o === void 0) {
		var s = Yr(n, r, a);
		(!A || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[oe] = n;
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
	var i = e[se];
	if (A || i !== t) {
		var a = Qr(t, r);
		(!A || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[se] = t;
	} else r && (Array.isArray(r) ? ($r(e, n?.[0], r[0]), $r(e, n?.[1], r[1], "important")) : $r(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var ti = Symbol("is custom element"), ni = Symbol("is html"), ri = ue ? "link" : "LINK", ii = ue ? "progress" : "PROGRESS";
function ai(e) {
	if (A) {
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
		e[le] = n, We(n), Ze();
	}
}
function oi(e, t) {
	var n = si(e);
	n.value !== (n.value = t ?? void 0) && (e.value !== t || t === 0 && e.nodeName === ii) && (e.value = t ?? "");
}
function $(e, t, n, r) {
	var i = si(e);
	A && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ri) || i[t] !== (i[t] = n) && (t === "loading" && (e[D] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && li(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function si(e) {
	return e[ae] ??= {
		[ti]: e.nodeName.includes("-"),
		[ni]: e.namespaceURI === fe
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
	}), (A && e.defaultValue !== e.value || rr(t) == null && e.value) && (n(di(e) ? fi(e.value) : e.value), F !== null && r.add(F)), hn(() => {
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
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var hi = !1;
function gi(e) {
	var t = hi;
	try {
		return hi = !1, [e(), hi];
	} finally {
		hi = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
function _i(e, t, n, r) {
	var i = !0, o = !!(n & 8), s = !!(n & 16), c = r, l = !0, u = void 0, d = () => s && i ? (u ??= /* @__PURE__ */ it(r), W(u)) : (l && (l = !1, c = s ? rr(r) : r), c);
	let f;
	if (o) {
		var p = re in e || ie in e;
		f = a(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	o ? [m, h] = gi(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && je(t), f(m)));
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
function vi(e) {
	Ie === null && we("onMount"), un(() => {
		let t = rr(e);
		if (typeof t == "function") return t;
	});
}
function yi(e) {
	Ie === null && we("onDestroy"), vi(() => () => rr(e));
}
//#endregion
//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region src/ticketlog/viewer/i18n.js
var bi = {
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
}, xi = "de";
function Si(e) {
	return bi[xi][e] ?? e;
}
//#endregion
//#region src/lib/curve.js
function Ci(e) {
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
function wi(e, t, n) {
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
function Ti(e, t, n, r) {
	let i = [];
	e.forEach((t, n) => {
		let a = e[n - 1];
		a && (t.time - a.time <= r || a.phase && a.phase === t.phase) ? i.at(-1).push(t) : i.push([t]);
	});
	let a = [];
	for (let e of i) {
		let r = null;
		Ci(e.map((e) => [t(e.time), n(e.value)])).forEach((i, o) => {
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
var Ei = /* @__PURE__ */ K("<button class=\"secondary mini svelte-z8jt5q\"> </button>"), Di = /* @__PURE__ */ K("<button class=\"secondary mini svelte-z8jt5q\">⤢</button>"), Oi = /* @__PURE__ */ K("<span><i class=\"svelte-z8jt5q\"></i> </span>"), ki = /* @__PURE__ */ K("<span><i class=\"band-key svelte-z8jt5q\"></i> </span>"), Ai = /* @__PURE__ */ K("<div class=\"legend svelte-z8jt5q\"><!> <!></div>"), ji = /* @__PURE__ */ K("<p class=\"muted small empty svelte-z8jt5q\"> </p>"), Mi = /* @__PURE__ */ K("<th class=\"svelte-z8jt5q\"> </th>"), Ni = /* @__PURE__ */ K("<td class=\"svelte-z8jt5q\"> </td>"), Pi = /* @__PURE__ */ K("<tr><td class=\"svelte-z8jt5q\"> </td><!></tr>"), Fi = /* @__PURE__ */ K("<div class=\"table svelte-z8jt5q\"><table class=\"svelte-z8jt5q\"><thead><tr><th class=\"svelte-z8jt5q\"> </th><!></tr></thead><tbody></tbody></table></div>"), Ii = /* @__PURE__ */ Sr("<text class=\"axis svelte-z8jt5q\"> </text>"), Li = /* @__PURE__ */ Sr("<rect class=\"band svelte-z8jt5q\"></rect><!>", 1), Ri = /* @__PURE__ */ Sr("<line class=\"grid svelte-z8jt5q\"></line><text class=\"axis svelte-z8jt5q\" text-anchor=\"end\"> </text>", 1), zi = /* @__PURE__ */ Sr("<line class=\"ref svelte-z8jt5q\"></line><text class=\"axis svelte-z8jt5q\"> </text>", 1), Bi = /* @__PURE__ */ Sr("<path class=\"line svelte-z8jt5q\"></path>"), Vi = /* @__PURE__ */ Sr("<path class=\"wash svelte-z8jt5q\"></path>"), Hi = /* @__PURE__ */ Sr("<!><!>", 1), Ui = /* @__PURE__ */ Sr("<text class=\"end svelte-z8jt5q\"> </text>"), Wi = /* @__PURE__ */ Sr("<circle r=\"4.5\" class=\"dot svelte-z8jt5q\"></circle>"), Gi = /* @__PURE__ */ Sr("<line class=\"cross svelte-z8jt5q\"></line><!>", 1), Ki = /* @__PURE__ */ K("<div class=\"row svelte-z8jt5q\"><i class=\"svelte-z8jt5q\"></i><strong> </strong><span class=\"svelte-z8jt5q\"> </span></div>"), qi = /* @__PURE__ */ K("<div class=\"tip svelte-z8jt5q\"><div class=\"tip-time svelte-z8jt5q\"> </div> <!></div>"), Ji = /* @__PURE__ */ K("<div class=\"plot svelte-z8jt5q\"><svg role=\"img\" tabindex=\"0\"><!><!><!><!><clipPath><rect></rect></clipPath><g><!></g><!><!></svg> <!></div>"), Yi = /* @__PURE__ */ K("<div class=\"overlay svelte-z8jt5q\"><div class=\"big svelte-z8jt5q\" role=\"dialog\" aria-modal=\"true\"><!></div></div>"), Xi = /* @__PURE__ */ K("<section class=\"card chart svelte-z8jt5q\"><div class=\"head svelte-z8jt5q\"><h3 class=\"svelte-z8jt5q\"> </h3> <div class=\"tools svelte-z8jt5q\"><button class=\"secondary mini svelte-z8jt5q\"> </button> <!></div></div> <!> <!></section> <!>", 1);
function Zi(e, t) {
	Re(t, !0);
	let n = _i(t, "points", 19, () => []), r = _i(t, "series", 19, () => []), i = _i(t, "format", 3, (e) => String(e)), a = _i(t, "yMax", 3, null), o = _i(t, "refs", 19, () => []), s = _i(t, "bands", 19, () => []), c = _i(t, "smooth", 3, !1), l = _i(t, "live", 3, null), u = _i(t, "states", 3, null), d = _i(t, "aligned", 3, !1), f = _i(t, "onpan", 3, null), p = _i(t, "long", 3, !1), m = _i(t, "seconds", 3, !1), h = _i(t, "height", 3, 190), g = _i(t, "from", 3, null), _ = _i(t, "to", 3, null), v = _i(t, "onClose", 3, null), y = /* @__PURE__ */ I(!1), b = /* @__PURE__ */ I(400), x = "chart-" + Math.random().toString(36).slice(2, 8);
	function S() {
		L(b, Math.max(260, Math.round(window.innerHeight * .62)), !0), L(y, !0);
	}
	let C = {
		top: 12,
		right: 52,
		bottom: 24,
		left: 48
	}, w = /* @__PURE__ */ I(600), ee = /* @__PURE__ */ I(-1), T = /* @__PURE__ */ I(!1), te = {
		hour: "2-digit",
		minute: "2-digit"
	}, ne = (e) => new Date(e).toLocaleString(void 0, p() ? {
		day: "2-digit",
		month: "2-digit",
		...te
	} : m() ? {
		...te,
		second: "2-digit"
	} : te), re = (e) => new Date(e).toLocaleString(void 0, p() ? {
		day: "2-digit",
		month: "2-digit"
	} : m() ? {
		...te,
		second: "2-digit"
	} : te), E = /* @__PURE__ */ P(() => g() ?? (n().length ? n()[0].time : 0)), ie = /* @__PURE__ */ P(() => f() ? _() : Math.max(_() ?? 0, n().length ? n().at(-1).time : 1)), D = /* @__PURE__ */ P(() => Math.max(10, W(w) - C.left - C.right)), ae = /* @__PURE__ */ P(() => h() - C.top - C.bottom);
	function oe(e) {
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
	let se = /* @__PURE__ */ P(() => {
		if (a() !== null) return a();
		let e = 0;
		for (let t of n()) if (!(f() && (t.time < W(E) || t.time > W(ie)))) for (let n of r()) e = Math.max(e, t[n.key] ?? 0);
		for (let t of o()) e = Math.max(e, t.value);
		return oe(e * 1.05);
	}), ce = /* @__PURE__ */ P(() => [
		0,
		.25,
		.5,
		.75,
		1
	].map((e) => W(se) * e)), le = (e) => C.left + (W(ie) === W(E) ? W(D) : (e - W(E)) / (W(ie) - W(E)) * W(D)), O = (e) => C.top + W(ae) - Math.max(0, Math.min(e, W(se))) / W(se) * W(ae), ue = /* @__PURE__ */ P(() => l() ? [...n(), l()] : n()), de = /* @__PURE__ */ P(() => {
		if (W(ue).length < 2) return [W(ue)];
		let e = W(ue).slice(1).map((e, t) => e.time - W(ue)[t].time), t = [[W(ue)[0]]];
		for (let n = 1; n < W(ue).length; n++) {
			let r = e[n - 1];
			(r > (Math.max(e[n - 2] ?? 0, e[n] ?? 0) || r) * 3 || s().some((e) => W(ue)[n - 1].time <= e.from && W(ue)[n].time >= e.to)) && t.push([]), t.at(-1).push(W(ue)[n]);
		}
		return t;
	});
	function k(e, t) {
		let n = e.map((e) => [le(e.time), O(e[t] ?? 0)]);
		return `M${n[0][0].toFixed(1)},${n[0][1].toFixed(1)}` + (c() ? Ci(n) : n.slice(1).map(([e, t]) => `L${e.toFixed(1)},${t.toFixed(1)}`)).join("");
	}
	function fe(e) {
		return W(de).filter((e) => e.length).map((t) => k(t, e)).join("");
	}
	let pe = /* @__PURE__ */ P(() => u() ? Ti(wi(u().points, u().phases, u().live), le, O, u().gap ?? 3 * Math.max(2e4, (W(ie) - W(E)) / 300)) : []);
	function me(e) {
		let t = O(0).toFixed(1);
		return W(de).filter((e) => e.length > 1).map((n) => `${k(n, e)}L${le(n.at(-1).time).toFixed(1)},${t}L${le(n[0].time).toFixed(1)},${t}Z`).join("");
	}
	let he = /* @__PURE__ */ P(() => {
		if (!n().length) return [];
		let e = W(ue).at(-1), t = r().map((t) => ({
			...t,
			y: O(e[t.key] ?? 0),
			value: e[t.key]
		})), i = [...t].sort((e, t) => e.y - t.y);
		for (let e = 1; e < i.length; e++) if (i[e].y - i[e - 1].y < 14) return [];
		return t;
	});
	function A(e) {
		if (!n().length || e < le(n()[0].time) - 8) return -1;
		let t = W(E) + (e - C.left) / W(D) * (W(ie) - W(E)), r = 0, i = n().length - 1;
		for (; i - r > 1;) {
			let e = r + i >> 1;
			n()[e].time < t ? r = e : i = e;
		}
		return Math.abs(n()[r].time - t) <= Math.abs(n()[i].time - t) ? r : i;
	}
	let j = null;
	function M(e) {
		f() && (j = e.clientX, e.currentTarget.setPointerCapture(e.pointerId));
	}
	function ge(e) {
		let t = e.currentTarget.getBoundingClientRect();
		if (j !== null) {
			let n = (e.clientX - j) / t.width * W(w);
			j = e.clientX, L(ee, -1), f()(n / W(D) * (W(ie) - W(E)));
		} else L(ee, A((e.clientX - t.left) / t.width * W(w)), !0);
	}
	function _e(e) {
		let t = (e) => {
			if (!f()) return;
			e.preventDefault();
			let t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
			f()(Math.sign(t) * Math.min(1, Math.abs(t) / 100) * (W(ie) - W(E)) * .1);
		};
		return e.addEventListener("wheel", t, { passive: !1 }), { destroy: () => e.removeEventListener("wheel", t) };
	}
	function ve(e) {
		if (n().length) {
			if (e.key === "ArrowLeft") L(ee, Math.max(0, (W(ee) < 0 ? n().length : W(ee)) - 1), !0);
			else if (e.key === "ArrowRight") L(ee, Math.min(n().length - 1, W(ee) + 1), !0);
			else if (e.key === "Escape") L(ee, -1);
			else return;
			e.preventDefault();
		}
	}
	let ye = /* @__PURE__ */ P(() => W(ee) >= 0 && W(ee) < n().length ? n()[W(ee)] : null), be = /* @__PURE__ */ P(() => W(ye) ? Math.min(Math.max(le(W(ye).time) + 12, 0), W(w) - 170) : 0), xe = /* @__PURE__ */ P(() => d() || !!f()), Se = [
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
	].map((e) => e * 1e3), Ce = /* @__PURE__ */ P(() => {
		if (!n().length && !s().length) return [];
		if (!W(xe)) return [
			0,
			.25,
			.5,
			.75,
			1
		].map((e) => W(E) + (W(ie) - W(E)) * e);
		let e = Se.find((e) => (W(ie) - W(E)) / e <= 6) ?? 432e6, t = [];
		for (let n = Math.ceil(W(E) / e) * e; n <= W(ie); n += e) t.push(n);
		return t;
	});
	var we = Xi();
	fr("keydown", Ut, (e) => W(y) && e.key === "Escape" && L(y, !1));
	var Te = Zt(we), Ee = R(Te), De = R(Ee), Oe = z(De, !0), ke = B(De, 2), Ae = R(ke), je = z(Ae, !0), Me = B(Ae, 2), Ne = (e) => {
		var t = Ei(), n = z(t);
		V((e) => J(n, `✕ ${e ?? ""}`), [() => Si("common.close")]), G("click", t, function(...e) {
			v()?.apply(this, e);
		}), q(e, t);
	}, Pe = (e) => {
		var t = Di();
		V((e, n) => {
			$(t, "title", e), $(t, "aria-label", n);
		}, [() => Si("health.expand"), () => Si("health.expand")]), G("click", t, S), q(e, t);
	};
	Y(Me, (e) => {
		v() ? e(Ne) : e(Pe, -1);
	}), N(ke), N(Ee);
	var Fe = B(Ee, 2), Ie = (e) => {
		var t = Ai(), n = R(t), i = (e) => {
			var t = Cr();
			Z(Zt(t), 17, r, X, (e, t) => {
				var n = Oi(), r = R(n), i = B(r, 1, !0);
				N(n), V(() => {
					ei(r, `background: ${W(t).color ?? ""}`), J(i, W(t).label);
				}), q(e, n);
			}), q(e, t);
		};
		Y(n, (e) => {
			r().length > 1 && e(i);
		}), Z(B(n, 2), 17, () => [...new Map(s().map((e) => [e.label, e])).values()], X, (e, t) => {
			var n = ki(), r = R(n), i = B(r, 1, !0);
			N(n), V(() => {
				ei(r, W(t).color ? `background: ${W(t).color}` : ""), J(i, W(t).label);
			}), q(e, n);
		}), N(t), q(e, t);
	};
	Y(Fe, (e) => {
		(r().length > 1 || s().length) && e(Ie);
	});
	var Le = B(Fe, 2), Be = (e) => {
		var t = ji(), n = z(t, !0);
		V((e) => J(n, e), [() => Si("health.noData")]), q(e, t);
	}, Ve = (e) => {
		var t = Fi(), a = R(t), o = R(a), s = R(o), c = R(s), l = z(c, !0);
		Z(B(c), 17, r, X, (e, t) => {
			var n = Mi(), r = z(n, !0);
			V(() => J(r, W(t).label)), q(e, n);
		}), N(s), N(o);
		var u = B(o);
		Z(u, 21, () => [...n()].reverse(), (e) => e.time, (e, t) => {
			var n = Pi(), a = R(n), o = z(a, !0);
			Z(B(a), 17, r, X, (e, n) => {
				var r = Ni(), a = z(r, !0);
				V((e) => J(a, e), [() => i()(W(t)[W(n).key])]), q(e, r);
			}), N(n), V((e) => J(o, e), [() => ne(W(t).time)]), q(e, n);
		}), N(u), N(a), N(t), V((e) => J(l, e), [() => Si("health.time")]), q(e, t);
	}, He = (e) => {
		var n = Ji(), a = R(n);
		let c;
		var l = R(a);
		Z(l, 17, s, X, (e, t) => {
			let n = /* @__PURE__ */ P(() => le(Math.max(W(t).from, W(E)))), r = /* @__PURE__ */ P(() => Math.max(2, le(Math.min(W(t).to, W(ie))) - W(n)));
			var i = Li(), a = Zt(i), o = B(a), s = (e) => {
				var r = Ii(), i = z(r, !0);
				V(() => {
					$(r, "x", W(n) + 6), $(r, "y", C.top + 14), J(i, W(t).label);
				}), q(e, r);
			};
			Y(o, (e) => {
				W(r) >= 34 && e(s);
			}), V(() => {
				$(a, "x", W(n)), $(a, "y", C.top), $(a, "width", W(r)), $(a, "height", W(ae)), ei(a, W(t).color ? `fill: ${W(t).color}` : "");
			}), q(e, i);
		});
		var d = B(l);
		Z(d, 17, () => W(ce), X, (e, t) => {
			var n = Ri(), r = Zt(n), a = B(r), o = z(a, !0);
			V((e, t, n, i) => {
				$(r, "x1", C.left), $(r, "x2", C.left + W(D)), $(r, "y1", e), $(r, "y2", t), $(a, "x", C.left - 6), $(a, "y", n), J(o, i);
			}, [
				() => O(W(t)),
				() => O(W(t)),
				() => O(W(t)) + 4,
				() => i()(W(t))
			]), q(e, n);
		});
		var p = B(d);
		Z(p, 17, () => W(Ce), X, (e, t, n) => {
			var r = Ii(), i = z(r, !0);
			V((e, t) => {
				$(r, "x", e), $(r, "y", h() - 6), $(r, "text-anchor", W(xe) ? "middle" : n === 0 ? "start" : n === 4 ? "end" : "middle"), J(i, t);
			}, [() => le(W(t)), () => re(W(t))]), q(e, r);
		});
		var m = B(p);
		Z(m, 17, o, X, (e, t) => {
			var n = zi(), r = Zt(n), i = B(r), a = z(i, !0);
			V((e, n, o) => {
				$(r, "x1", C.left), $(r, "x2", C.left + W(D)), $(r, "y1", e), $(r, "y2", n), ei(r, W(t).color ? `stroke: ${W(t).color}` : ""), $(i, "x", C.left + 4), $(i, "y", o), J(a, W(t).label);
			}, [
				() => O(W(t).value),
				() => O(W(t).value),
				() => O(W(t).value) - 4
			]), q(e, n);
		});
		var g = B(m), _ = R(g);
		$(_, "y", 0), N(g);
		var v = B(g), y = R(v), b = (e) => {
			var t = Cr();
			Z(Zt(t), 17, () => W(pe), X, (e, t) => {
				var n = Bi();
				V(() => {
					$(n, "d", W(t).d), ei(n, `stroke: ${W(t).color ?? ""}`);
				}), q(e, n);
			}), q(e, t);
		}, S = (e) => {
			var t = Hi(), n = Zt(t), i = (e) => {
				var t = Vi();
				V((e) => {
					$(t, "d", e), ei(t, `fill: ${r()[0].color ?? ""}`);
				}, [() => me(r()[0].key)]), q(e, t);
			};
			Y(n, (e) => {
				r().length === 1 && e(i);
			}), Z(B(n), 17, r, X, (e, t) => {
				var n = Bi();
				V((e) => {
					$(n, "d", e), ei(n, `stroke: ${W(t).color ?? ""}`);
				}, [() => fe(W(t).key)]), q(e, n);
			}), q(e, t);
		};
		Y(y, (e) => {
			u() ? e(b) : e(S, -1);
		}), N(v);
		var T = B(v);
		Z(T, 17, () => W(he), X, (e, t) => {
			var n = Ui(), r = z(n, !0);
			V((e) => {
				$(n, "x", C.left + W(D) + 6), $(n, "y", W(t).y + 4), J(r, e);
			}, [() => i()(W(t).value)]), q(e, n);
		});
		var te = B(T), oe = (e) => {
			var t = Gi(), n = Zt(t);
			Z(B(n), 17, r, X, (e, t) => {
				var n = Wi();
				V((e, r) => {
					$(n, "cx", e), $(n, "cy", r), ei(n, `fill: ${W(t).color ?? ""}`);
				}, [() => le(W(ye).time), () => O(W(ye)[W(t).key] ?? 0)]), q(e, n);
			}), V((e, t) => {
				$(n, "x1", e), $(n, "x2", t), $(n, "y1", C.top), $(n, "y2", C.top + W(ae));
			}, [() => le(W(ye).time), () => le(W(ye).time)]), q(e, t);
		};
		Y(te, (e) => {
			W(ye) && e(oe);
		}), N(a), Wr(a, (e) => _e?.(e));
		var se = B(a, 2), ue = (e) => {
			var t = qi(), n = R(t), a = z(n, !0);
			Z(B(n, 2), 17, r, X, (e, t) => {
				var n = Ki(), r = R(n), a = B(r), o = z(a, !0), s = z(B(a), !0);
				N(n), V((e) => {
					ei(r, `background: ${W(t).color ?? ""}`), J(o, e), J(s, W(t).label);
				}, [() => i()(W(ye)[W(t).key])]), q(e, n);
			}), N(t), V((e) => {
				ei(t, `left: ${W(be) ?? ""}px`), J(a, e);
			}, [() => ne(W(ye).time)]), q(e, t);
		};
		Y(se, (e) => {
			W(ye) && e(ue);
		}), N(n), V(() => {
			$(a, "viewBox", `0 0 ${W(w) ?? ""} ${h() ?? ""}`), $(a, "height", h()), $(a, "aria-label", t.title), c = Q(a, 0, "svelte-z8jt5q", null, c, { pans: f() }), $(g, "id", x), $(_, "x", C.left), $(_, "width", W(D)), $(_, "height", h()), $(v, "clip-path", `url(#${x})`);
		}), G("pointerdown", a, M), G("pointerup", a, () => j = null), fr("pointercancel", a, () => j = null), G("pointermove", a, ge), fr("pointerleave", a, () => L(ee, -1)), G("keydown", a, ve), mi(n, "clientWidth", (e) => L(w, e)), q(e, n);
	};
	Y(Le, (e) => {
		!n().length && !s().length ? e(Be) : W(T) ? e(Ve, 1) : e(He, -1);
	}), N(Te);
	var Ue = B(Te, 2), We = (e) => {
		var h = Yi(), v = R(h);
		Zi(R(v), {
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
				return W(b);
			},
			onClose: () => L(y, !1)
		}), N(v), N(h), V(() => $(v, "aria-label", t.title)), G("click", h, (e) => e.target === e.currentTarget && L(y, !1)), q(e, h);
	};
	Y(Ue, (e) => {
		W(y) && e(We);
	}), V((e) => {
		J(Oe, t.title), $(Ae, "aria-pressed", W(T)), J(je, e);
	}, [() => W(T) ? Si("health.chart") : Si("health.table")]), G("click", Ae, () => L(T, !W(T))), q(e, we), ze();
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
var Qi = {
	de: {
		area: "Umgebung",
		tabOverview: "Überblick",
		tabMap: "Spieler & Karte",
		tabPerf: "Leistung",
		tabLog: "Protokoll",
		tabServer: "Server",
		timeline: "Verlauf",
		timelineHint: "Klick auf eine Markierung öffnet die Stelle im passenden Reiter",
		laneLog: "Server-Log",
		laneEvents: "Ereignisse",
		lanePerf: "Leistung",
		lanePlayer: "Spieler",
		findings: "Auffälligkeiten",
		noFindings: "Nichts Auffälliges in diesem Zeitraum.",
		fLag: "{n} Sekunden mit Lag (Tick über 50 ms), längster Tick {max}",
		fSpike: "Einzelner langer Tick ({max})",
		fTps: "TPS fiel auf {tps}",
		fErrors: "{n} Fehler im Server-Log",
		fWarnings: "{n} Warnungen im Server-Log",
		fDeath: "Spieler gestorben",
		go_perf: "Leistung",
		go_log: "Protokoll",
		go_map: "Karte",
		lowest: "tiefster Wert",
		highest: "höchster Wert",
		highestOf: "höchster Wert von {max}",
		longestTick: "längster Tick",
		atCreation: "beim Erstellen",
		serverData: "Server",
		slots: "Plätze",
		mToLog: "{problems} Warnungen/Fehler, {events} Ereignisse im Protokoll",
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
		ev_join: "Betreten",
		ev_quit: "Verlassen",
		ev_death: "Gestorben",
		ev_teleport: "Teleport",
		play: "Abspielen",
		speed: "Geschwindigkeit",
		noTerrain: "Gelände hier nicht aufgezeichnet (Chunks waren nicht geladen)"
	},
	en: {
		area: "Surroundings",
		tabOverview: "Overview",
		tabMap: "Player & map",
		tabPerf: "Performance",
		tabLog: "Log",
		tabServer: "Server",
		timeline: "Timeline",
		timelineHint: "Click a mark to open that moment in the matching tab",
		laneLog: "Server log",
		laneEvents: "Events",
		lanePerf: "Performance",
		lanePlayer: "Player",
		findings: "Findings",
		noFindings: "Nothing stands out in this time span.",
		fLag: "{n} seconds of lag (tick over 50 ms), longest tick {max}",
		fSpike: "A single long tick ({max})",
		fTps: "TPS dropped to {tps}",
		fErrors: "{n} errors in the server log",
		fWarnings: "{n} warnings in the server log",
		fDeath: "Player died",
		go_perf: "Performance",
		go_log: "Log",
		go_map: "Map",
		lowest: "lowest",
		highest: "highest",
		highestOf: "highest of {max}",
		longestTick: "longest tick",
		atCreation: "when it was created",
		serverData: "Server",
		slots: "Slots",
		mToLog: "{problems} warnings/errors, {events} events in the log",
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
		ev_join: "Joined",
		ev_quit: "Left",
		ev_death: "Died",
		ev_teleport: "Teleport",
		play: "Play",
		speed: "Speed",
		noTerrain: "Terrain not recorded here (chunks were not loaded)"
	}
};
function $i(e, t, n = {}) {
	return (Qi[e === "de" ? "de" : "en"][t] ?? Qi.en[t] ?? t).replace(/\{(\w+)\}/g, (e, t) => n[t] ?? `{${t}}`);
}
//#endregion
//#region src/ticketlog/safe.js
function ea(e) {
	return typeof e == "string" && /^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(e) ? e : null;
}
function ta(e, t = "var(--muted)") {
	return typeof e == "string" && /^#[0-9a-fA-F]{6}$/.test(e) ? e : t;
}
function na(e) {
	return [
		"good",
		"warn",
		"bad"
	].includes(e) ? e : "none";
}
function ra(e, t = 0) {
	return typeof e == "number" && Number.isFinite(e) ? e : t;
}
//#endregion
//#region src/ticketlog/LogMap.svelte
var ia = /* @__PURE__ */ K("<button> </button>"), aa = /* @__PURE__ */ K("<span class=\"gap svelte-pbz4pw\"></span>"), oa = /* @__PURE__ */ K("<!> <button></button>", 1), sa = /* @__PURE__ */ K("<button></button>"), ca = /* @__PURE__ */ K("<div class=\"strip svelte-pbz4pw\" role=\"group\"><!> <!></div>"), la = /* @__PURE__ */ K("<div class=\"player svelte-pbz4pw\"><button class=\"secondary small svelte-pbz4pw\">◀</button> <button class=\"small svelte-pbz4pw\"> </button> <button class=\"secondary small svelte-pbz4pw\">▶</button> <input class=\"scrub svelte-pbz4pw\" type=\"range\" min=\"0\"/> <span class=\"when svelte-pbz4pw\"> </span> <div class=\"speeds svelte-pbz4pw\" role=\"group\"></div></div> <!>", 1), ua = /* @__PURE__ */ Sr("<image preserveAspectRatio=\"none\" class=\"tile svelte-pbz4pw\"></image>"), da = /* @__PURE__ */ Sr("<image width=\"256\" height=\"256\" preserveAspectRatio=\"none\" class=\"tile svelte-pbz4pw\"></image>"), fa = /* @__PURE__ */ Sr("<rect class=\"mark svelte-pbz4pw\"><title> </title></rect>"), pa = /* @__PURE__ */ Sr("<polyline class=\"path old svelte-pbz4pw\"></polyline>"), ma = /* @__PURE__ */ Sr("<polyline class=\"path svelte-pbz4pw\"></polyline>"), ha = /* @__PURE__ */ Sr("<!><!>", 1), ga = /* @__PURE__ */ Sr("<circle class=\"ent svelte-pbz4pw\"><title> </title></circle>"), _a = /* @__PURE__ */ Sr("<path class=\"desp svelte-pbz4pw\"><title> </title></path>"), va = /* @__PURE__ */ Sr("<rect width=\"3\" height=\"3\"><title> </title></rect>"), ya = /* @__PURE__ */ Sr("<circle r=\"2.6\" class=\"other svelte-pbz4pw\"><title> </title></circle>"), ba = /* @__PURE__ */ K("<div><span class=\"svelte-pbz4pw\"> </span><b class=\"svelte-pbz4pw\"> </b> </div>"), xa = /* @__PURE__ */ K("<div class=\"row svelte-pbz4pw\"><b class=\"svelte-pbz4pw\"> </b> </div>"), Sa = /* @__PURE__ */ K("<div class=\"row muted svelte-pbz4pw\"> </div>"), Ca = /* @__PURE__ */ K("<h4 class=\"t-title svelte-pbz4pw\"> <span class=\"muted\"> </span></h4> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!> <!> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!> <!></section>", 1), wa = /* @__PURE__ */ K("<div class=\"row svelte-pbz4pw\"><span class=\"svelte-pbz4pw\"> </span> <b class=\"svelte-pbz4pw\"> </b> </div>"), Ta = /* @__PURE__ */ K("<h4 class=\"t-title svelte-pbz4pw\"> </h4> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section>", 1), Ea = /* @__PURE__ */ K("<span><i class=\"line svelte-pbz4pw\"></i> </span>"), Da = /* @__PURE__ */ K("<small class=\"svelte-pbz4pw\"> </small>"), Oa = /* @__PURE__ */ K("<span class=\"svelte-pbz4pw\"> <!></span>"), ka = /* @__PURE__ */ K("<span class=\"muted small svelte-pbz4pw\"> </span>"), Aa = /* @__PURE__ */ K("<h4 class=\"svelte-pbz4pw\"> </h4> <div class=\"inv svelte-pbz4pw\"></div>", 1), ja = /* @__PURE__ */ K("<div class=\"lmap svelte-pbz4pw\"><div class=\"lhead svelte-pbz4pw\"><div><p class=\"muted small svelte-pbz4pw\"> </p></div> <div class=\"layers svelte-pbz4pw\"><button> </button> <button> </button> <button> </button> <!> <button> </button></div></div> <!> <div class=\"split svelte-pbz4pw\"><div class=\"mapbox svelte-pbz4pw\"><svg preserveAspectRatio=\"none\" class=\"svelte-pbz4pw\"><defs><pattern id=\"tlog-nodata\" width=\"8\" height=\"8\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(45)\"><rect width=\"8\" height=\"8\" class=\"nodata-bg svelte-pbz4pw\"></rect><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"8\" class=\"nodata-line svelte-pbz4pw\"></line></pattern></defs><rect fill=\"url(#tlog-nodata)\"><title> </title></rect><!><!><!><!><!><!><!><!><!><circle r=\"3.4\" class=\"me svelte-pbz4pw\"><title> </title></circle></svg> <span class=\"coords svelte-pbz4pw\"> </span></div> <div class=\"table svelte-pbz4pw\"><!></div></div> <div class=\"legend muted small svelte-pbz4pw\"><span><i style=\"background: var(--bad)\" class=\"svelte-pbz4pw\"></i> </span> <span><i style=\"background: var(--good)\" class=\"svelte-pbz4pw\"></i> </span> <span><i style=\"background: var(--warn)\" class=\"svelte-pbz4pw\"></i> </span> <span><i style=\"background: var(--muted)\" class=\"svelte-pbz4pw\"></i> </span> <span> </span> <span> </span> <!></div> <!></div>");
function Ma(e, t) {
	Re(t, !0);
	let n = _i(t, "mark", 3, null), r = _i(t, "seek", 3, null), i = _i(t, "onlog", 3, null), a = (e, n) => $i(t.lang, e, n), o = /* @__PURE__ */ P(() => t.log.area ?? null), s = /* @__PURE__ */ P(() => t.log.timeline ?? null), c = /* @__PURE__ */ P(() => W(s)?.minutes ?? []), l = /* @__PURE__ */ P(() => W(s)?.types ?? []), u = /* @__PURE__ */ P(() => W(s)?.categories ?? []), d = /* @__PURE__ */ P(() => W(s)?.chunks ?? []), f = /* @__PURE__ */ P(() => Object.values(W(s)?.tiles ?? {}).map((e) => ({
		...e,
		image: ea(e.image)
	})).filter((e) => e.image)), p = /* @__PURE__ */ P(() => ea(W(o)?.image)), h = /* @__PURE__ */ P(() => {
		let e = [];
		return W(c).forEach((t, n) => {
			for (let r of t.frames ?? []) e.push({
				kind: "frame",
				mi: n,
				time: ra(r[0]),
				world: String(r[1]),
				x: ra(r[2]),
				z: ra(r[3]),
				refs: r[4] ?? []
			});
		}), W(o) && e.push({
			kind: "created",
			mi: -1,
			time: ra(t.log.time),
			world: String(W(o).world),
			x: ra(W(o).center?.[0]),
			z: ra(W(o).center?.[1])
		}), e;
	}), g = /* @__PURE__ */ I(-1), _ = /* @__PURE__ */ P(() => W(g) < 0 || W(g) >= W(h).length ? W(h).length - 1 : W(g)), v = /* @__PURE__ */ P(() => W(h)[W(_)]), y = /* @__PURE__ */ P(() => W(v) && W(v).mi >= 0 ? W(c)[W(v).mi] : null), b = [
		10,
		30,
		60
	], x = /* @__PURE__ */ I(30), S = /* @__PURE__ */ I(!1), C = null;
	function w() {
		W(_) >= W(h).length - 1 ? T() : L(g, W(_) + 1);
	}
	function ee() {
		if (W(S)) return T();
		W(_) >= W(h).length - 1 && L(g, 0), L(S, !0), C = setInterval(w, 5e3 / W(x));
	}
	function T() {
		L(S, !1), clearInterval(C);
	}
	function te(e) {
		L(x, e, !0), W(S) && (clearInterval(C), C = setInterval(w, 5e3 / W(x)));
	}
	yi(T);
	let ne = (e) => {
		T(), L(g, Math.max(0, Math.min(W(h).length - 1, e)), !0);
	}, re = (e) => W(h).findIndex((t) => t.mi === e);
	un(() => {
		if (!r()) return;
		let e = W(h).findIndex((e) => e.kind === "frame" && e.time >= r().time);
		ne(e < 0 ? W(h).length - 1 : e);
	});
	let E = Ht({
		entities: !0,
		despawned: !0,
		deaths: !0,
		path: !0,
		players: !0
	}), ie = {
		hostile: "var(--bad)",
		passive: "var(--good)",
		item: "var(--warn)",
		projectile: "var(--muted)",
		vehicle: "var(--muted)",
		other: "var(--muted)"
	}, D = /* @__PURE__ */ P(() => W(v) ? {
		x: W(v).x - 128,
		z: W(v).z - 128
	} : {
		x: 0,
		z: 0
	}), ae = /* @__PURE__ */ P(() => W(v) ? W(f).filter((e) => e.world === W(v).world && e.x0 < W(D).x + 256 && e.x0 + 256 > W(D).x && e.z0 < W(D).z + 256 && e.z0 + 256 > W(D).z) : []);
	function oe(e) {
		let t = [];
		for (let n of e) {
			let e = W(d)[n] ?? [];
			for (let n = 0; n + 4 < e.length; n += 5) t.push([
				W(l)[e[n]] ?? "?",
				W(u)[e[n + 1]] ?? "other",
				e[n + 2],
				e[n + 3],
				e[n + 4]
			]);
		}
		return t;
	}
	let se = /* @__PURE__ */ P(() => W(v)?.kind === "frame" ? oe(W(v).refs) : W(o)?.entities ?? []), ce = 2e4, le = /* @__PURE__ */ P(() => W(c).flatMap((e) => e.despawnRows ?? [])), O = /* @__PURE__ */ P(() => W(c).flatMap((e) => e.deaths ?? [])), ue = /* @__PURE__ */ P(() => W(v)?.kind === "frame" ? W(le).filter((e) => e[0] <= W(v).time && e[0] > W(v).time - ce) : W(o)?.despawned?.rows ?? []), de = /* @__PURE__ */ P(() => W(v)?.kind === "frame" ? W(O).filter((e) => e.time <= W(v).time && e.time > W(v).time - ce) : W(o)?.deaths?.rows ?? []), k = (e) => W(v)?.kind === "frame" ? Math.max(.25, 1 - (W(v).time - e) / ce) : 1, fe = /* @__PURE__ */ P(() => {
		if (!W(v)) return {
			old: [],
			now: []
		};
		let e = [], t = [], n = null, r = [];
		for (let i of W(h)) {
			if (i.kind !== "frame" || i.time > W(v).time) break;
			if (i.world !== W(v).world) {
				t.length > 1 && e.push(t), t = [];
				continue;
			}
			let a = [i.x + .5, i.z + .5];
			i.mi === W(v).mi ? r.push(a) : (n !== null && i.mi !== n && t.length && (t = [t.at(-1)]), t.push(a), n = i.mi);
		}
		return t.length > 1 && e.push(t), e.length && r.length && r.unshift(e.at(-1).at(-1)), {
			old: e,
			now: r
		};
	}), pe = (e) => new Date(e).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}), me = (e) => new Date(e).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit"
	}), he = (e) => String(e).replace(/^item:/, "").replace(/^player:/, ""), A = (e, t = 6) => Object.entries(e ?? {}).sort((e, t) => t[1] - e[1]).slice(0, t).map(([e, t]) => `${t}× ${he(e)}`).join(", "), j = (e) => Object.values(e ?? {}).reduce((e, t) => e + ra(t), 0), M = (e) => oe(e ?? []).reduce((e, [t, , , , n]) => (e[t] = (e[t] ?? 0) + n, e), {}), ge = /* @__PURE__ */ P(() => {
		let e = t.log.health?.fields ?? [];
		return (t.log.health?.rows ?? []).map((t) => Object.fromEntries(e.map((e, n) => [e, t[n]])));
	}), _e = /* @__PURE__ */ P(() => {
		if (!W(y)) return null;
		let e = W(y), n = e.start, r = e.start + 6e4, i = M(e.frames?.at(-1)?.[4]), o = W(v).mi > 0 ? W(c)[W(v).mi - 1] : null, s = o ? M(o.frames?.at(-1)?.[4]) : null, l = [];
		s && (l = [.../* @__PURE__ */ new Set([...Object.keys(s), ...Object.keys(i)])].map((e) => [e, (i[e] ?? 0) - (s[e] ?? 0)]).filter(([, e]) => e !== 0).sort((e, t) => Math.abs(t[1]) - Math.abs(e[1])).slice(0, 4));
		let u = W(ge).filter((e) => e.time >= n && e.time < r), d = (t.log.console?.lines ?? []).filter(([e, t]) => e >= n && e < r && (t === "warn" || t === "error")).length, f = (t.log.events ?? []).filter((e) => e.time >= n && e.time < r).length, p = (e) => `${Math.round(j(e) * 10) / 10} (${Object.entries(e).map(([e, t]) => `${he(e)} ${t}`).join(", ")})`;
		return {
			actions: [
				j(e.broken) && [a("mBroken"), A(e.broken)],
				j(e.placed) && [a("mPlaced"), A(e.placed)],
				j(e.picked) && [a("mPicked"), A(e.picked)],
				j(e.dropped) && [a("mDropped"), A(e.dropped)],
				j(e.damageTaken) && [a("mTaken"), p(e.damageTaken)],
				j(e.damageDealt) && [a("mDealt"), p(e.damageDealt)],
				e.commands?.length && [a("mCommands"), e.commands.join("  ")]
			].filter(Boolean),
			events: e.events ?? [],
			around: [
				[a("entities"), j(i) + (l.length ? " (" + l.map(([e, t]) => `${t > 0 ? "+" : ""}${t} ${he(e)}`).join(", ") + ")" : "")],
				j(e.despawned) && [a("layerDespawned"), A(e.despawned)],
				e.deaths?.length && [a("layerDeaths"), e.deaths.map((e) => he(e.type)).join(", ")],
				e.came?.length && [a("mCame"), e.came.join(", ")],
				e.went?.length && [a("mWent"), e.went.join(", ")]
			].filter(Boolean),
			server: u.length ? [["TPS", `${Math.min(...u.map((e) => e.tps)).toFixed(1)} – ${(u.reduce((e, t) => e + t.tps, 0) / u.length).toFixed(1)}`], [a("mspt"), `Ø ${(u.reduce((e, t) => e + t.mspt, 0) / u.length).toFixed(1)} ms · max ${Math.max(...u.map((e) => e.msptMax)).toFixed(0)} ms`]] : [],
			problems: d,
			evts: f,
			from: n,
			to: r
		};
	});
	function ve(e) {
		return e.events?.some((e) => e.kind === "death") || (t.log.console?.lines ?? []).some(([t, n]) => n === "error" && t >= e.start && t < e.start + 6e4) ? "bad" : j(e.damageTaken) > 6 || e.deaths?.length ? "warn" : j(e.broken) + j(e.placed) + (e.events?.length ?? 0) + (e.commands?.length ?? 0) > 0 ? "act" : "calm";
	}
	let ye = (e) => e > 0 && W(c)[e].start - W(c)[e - 1].start > 6e4, be = (e) => Math.min(4, .9 + Math.log2(ra(e) + 1) * .6);
	var xe = Cr(), Se = Zt(xe), Ce = (e) => {
		var r = ja(), s = R(r), l = R(s), u = z(R(l), !0);
		N(l);
		var d = B(l, 2), f = R(d);
		let g;
		var C = z(f, !0), w = B(f, 2);
		let T;
		var oe = z(w, !0), ce = B(w, 2);
		let le;
		var O = z(ce, !0), A = B(ce, 2), j = (e) => {
			var t = ia();
			let n;
			var r = z(t, !0);
			V((e) => {
				n = Q(t, 1, "svelte-pbz4pw", null, n, { on: E.path }), J(r, e);
			}, [() => a("layerPath")]), G("click", t, () => E.path = !E.path), q(e, t);
		};
		Y(A, (e) => {
			W(c).length && e(j);
		});
		var M = B(A, 2);
		let ge;
		var xe = z(M, !0);
		N(d), N(s);
		var Se = B(s, 2), Ce = (e) => {
			var t = la(), n = Zt(t), r = R(n), i = B(r, 2), s = z(i, !0), l = B(i, 2), u = B(l, 2);
			ai(u);
			var d = B(u, 2), f = z(d, !0), p = B(d, 2);
			Z(p, 21, () => b, X, (e, t) => {
				var n = ia();
				let r;
				var i = z(n);
				V(() => {
					r = Q(n, 1, "svelte-pbz4pw", null, r, { on: W(x) === W(t) }), J(i, `${W(t) ?? ""}×`);
				}), G("click", n, () => te(W(t))), q(e, n);
			}), N(p), N(n);
			var m = B(n, 2), g = (e) => {
				var t = ca(), n = R(t);
				Z(n, 17, () => W(c), X, (e, t, n) => {
					var r = oa(), i = Zt(r), o = (e) => {
						var t = aa();
						V((e) => $(t, "title", e), [() => a("offline")]), q(e, t);
					}, s = /* @__PURE__ */ P(() => ye(n));
					Y(i, (e) => {
						W(s) && e(o);
					});
					var c = B(i, 2);
					let l;
					V((e, t, r) => {
						l = Q(c, 1, `seg ${e ?? ""}`, "svelte-pbz4pw", l, { sel: W(v).mi === n }), $(c, "title", t), $(c, "aria-label", r);
					}, [
						() => ve(W(t)),
						() => me(W(t).start),
						() => me(W(t).start)
					]), G("click", c, () => ne(re(n))), q(e, r);
				});
				var r = B(n, 2), i = (e) => {
					var t = sa();
					let n;
					V((e, r) => {
						n = Q(t, 1, "seg created svelte-pbz4pw", null, n, { sel: W(v).kind === "created" }), $(t, "title", e), $(t, "aria-label", r);
					}, [() => a("created"), () => a("created")]), G("click", t, () => ne(W(h).length - 1)), q(e, t);
				};
				Y(r, (e) => {
					W(o) && e(i);
				}), N(t), V((e) => $(t, "aria-label", e), [() => a("minutes")]), q(e, t);
			};
			Y(m, (e) => {
				W(c).length && e(g);
			}), V((e, t, n, a, o, c) => {
				r.disabled = W(_) === 0, $(r, "aria-label", e), $(i, "aria-label", t), J(s, W(S) ? "❚❚" : "▶"), l.disabled = W(_) === W(h).length - 1, $(l, "aria-label", n), $(u, "max", W(h).length - 1), oi(u, W(_)), $(u, "aria-label", a), J(f, o), $(p, "aria-label", c);
			}, [
				() => a("prev"),
				() => a("play"),
				() => a("next"),
				() => a("minutes"),
				() => W(v).kind === "created" ? a("created") : pe(W(v).time),
				() => a("speed")
			]), G("click", r, () => ne(W(_) - 1)), G("click", i, ee), G("click", l, () => ne(W(_) + 1)), G("input", u, (e) => ne(Number(e.currentTarget.value))), q(e, t);
		};
		Y(Se, (e) => {
			W(h).length > 1 && e(Ce);
		});
		var we = B(Se, 2), Te = R(we), Ee = R(Te), De = B(R(Ee));
		$(De, "width", 256), $(De, "height", 256);
		var Oe = z(R(De), !0);
		N(De);
		var ke = B(De), Ae = (e) => {
			var t = ua();
			V(() => {
				$(t, "href", W(p)), $(t, "x", W(o).x0), $(t, "y", W(o).z0), $(t, "width", W(o).size), $(t, "height", W(o).size);
			}), q(e, t);
		};
		Y(ke, (e) => {
			W(p) && W(o).world === W(v).world && W(v).kind === "frame" && e(Ae);
		});
		var je = B(ke);
		Z(je, 17, () => W(ae), X, (e, t) => {
			var n = da();
			V(() => {
				$(n, "href", W(t).image), $(n, "x", W(t).x0), $(n, "y", W(t).z0);
			}), q(e, n);
		});
		var Me = B(je), Ne = (e) => {
			var t = ua();
			V(() => {
				$(t, "href", W(p)), $(t, "x", W(o).x0), $(t, "y", W(o).z0), $(t, "width", W(o).size), $(t, "height", W(o).size);
			}), q(e, t);
		};
		Y(Me, (e) => {
			W(v).kind === "created" && W(p) && e(Ne);
		});
		var Pe = B(Me), Fe = (e) => {
			var t = fa(), r = z(R(t), !0);
			N(t), V(() => {
				$(t, "x", n().x0), $(t, "y", n().z0), $(t, "width", n().x1 - n().x0 + 1), $(t, "height", n().z1 - n().z0 + 1), J(r, n().label);
			}), q(e, t);
		};
		Y(Pe, (e) => {
			n() && e(Fe);
		});
		var Ie = B(Pe), Le = (e) => {
			var t = ha(), n = Zt(t);
			Z(n, 17, () => W(fe).old, X, (e, t) => {
				var n = pa();
				V((e) => $(n, "points", e), [() => W(t).map((e) => e.join(",")).join(" ")]), q(e, n);
			});
			var r = B(n), i = (e) => {
				var t = ma();
				V((e) => $(t, "points", e), [() => W(fe).now.map((e) => e.join(",")).join(" ")]), q(e, t);
			};
			Y(r, (e) => {
				W(fe).now.length > 1 && e(i);
			}), q(e, t);
		};
		Y(Ie, (e) => {
			E.path && e(Le);
		});
		var Re = B(Ie), ze = (e) => {
			var t = Cr();
			Z(Zt(t), 17, () => W(se), X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 5));
				let r = () => W(n)[0], i = () => W(n)[1], a = () => W(n)[2], o = () => W(n)[3], s = () => W(n)[4];
				var c = ga(), l = z(R(c));
				N(c), V((e, t, n, r) => {
					$(c, "cx", e), $(c, "cy", t), $(c, "r", n), $(c, "fill", ie[i()] ?? ie.other), J(l, `${r ?? ""} × ${s() ?? ""} · ${a() ?? ""}${o() ?? ""}`);
				}, [
					() => ra(a()) + 1,
					() => ra(o()) + 1,
					() => be(s()),
					() => he(r())
				]), q(e, c);
			}), q(e, t);
		};
		Y(Re, (e) => {
			E.entities && e(ze);
		});
		var Be = B(Re), Ve = (e) => {
			var t = Cr();
			Z(Zt(t), 17, () => W(ue), X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 5));
				let r = () => W(n)[0], i = () => W(n)[1], a = () => W(n)[2], o = () => W(n)[3], s = () => W(n)[4];
				var c = _a(), l = z(R(c));
				N(c), V((e, t, n, r, i, a) => {
					$(c, "d", `M${e ?? ""},${t ?? ""}l2.6,2.6M${n ?? ""},${r ?? ""}l-2.6,2.6`), $(c, "opacity", i), J(l, `${a ?? ""} · ${o() ?? ""} × ${s() ?? ""}`);
				}, [
					() => ra(i()) - .8,
					() => ra(a()) - .8,
					() => ra(i()) + 1.8,
					() => ra(a()) - .8,
					() => k(r()),
					() => pe(r())
				]), q(e, c);
			}), q(e, t);
		};
		Y(Be, (e) => {
			E.despawned && e(Ve);
		});
		var He = B(Be), Ue = (e) => {
			var t = Cr();
			Z(Zt(t), 17, () => W(de), X, (e, t) => {
				var n = va();
				let r;
				var i = z(R(n));
				N(n), V((e, a, o, s, c, l, u, d, f) => {
					$(n, "x", e), $(n, "y", a), r = Q(n, 0, "death svelte-pbz4pw", null, r, { pl: o }), $(n, "opacity", s), $(n, "transform", `rotate(45 ${c ?? ""} ${l ?? ""})`), J(i, `${u ?? ""} · ${d ?? ""}${f ?? ""}${W(t).message ? " · " + W(t).message : ""}`);
				}, [
					() => ra(W(t).x) - 1,
					() => ra(W(t).z) - 1,
					() => String(W(t).type).startsWith("player:"),
					() => k(W(t).time),
					() => ra(W(t).x) + .5,
					() => ra(W(t).z) + .5,
					() => pe(W(t).time),
					() => he(W(t).type),
					() => W(t).cause ? " · " + he(W(t).cause) : ""
				]), q(e, n);
			}), q(e, t);
		};
		Y(He, (e) => {
			E.deaths && e(Ue);
		});
		var We = B(He), Ge = (e) => {
			var t = Cr();
			Z(Zt(t), 17, () => W(o)?.players ?? [], X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 3));
				let r = () => W(n)[0], i = () => W(n)[1], a = () => W(n)[2];
				var o = ya(), s = z(R(o), !0);
				N(o), V((e, t) => {
					$(o, "cx", e), $(o, "cy", t), J(s, r());
				}, [() => ra(i()) + .5, () => ra(a()) + .5]), q(e, o);
			}), q(e, t);
		};
		Y(We, (e) => {
			E.players && W(v).kind === "created" && e(Ge);
		});
		var Ke = B(We), qe = z(R(Ke));
		N(Ke), N(Ee);
		var Je = z(B(Ee, 2));
		N(Te);
		var Ye = B(Te, 2), Xe = R(Ye), Ze = (e) => {
			var t = Ca(), n = Zt(t), r = R(n), o = z(B(r));
			N(n);
			var s = B(n, 2), l = R(s), u = z(l, !0), d = B(l, 2);
			Z(d, 17, () => W(_e).events, X, (e, t) => {
				var n = ba();
				let r;
				var i = R(n), o = z(i, !0), s = B(i), c = z(s, !0), l = B(s);
				N(n), V((e, i, a) => {
					r = Q(n, 1, `row ev ${W(t).kind === "death" ? "death" : ""}`, "svelte-pbz4pw", r, { now: e }), J(o, i), J(c, a), J(l, ` ${W(t).text ?? ""}`);
				}, [
					() => Math.abs(W(t).time - W(v).time) < 5e3,
					() => pe(W(t).time),
					() => a("ev_" + ([
						"join",
						"quit",
						"death",
						"teleport"
					].includes(W(t).kind) ? W(t).kind : "join"))
				]), q(e, n);
			});
			var f = B(d, 2);
			Z(f, 17, () => W(_e).actions, X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 2));
				let r = () => W(n)[0], i = () => W(n)[1];
				var a = xa(), o = R(a), s = z(o, !0), c = B(o);
				N(a), V(() => {
					J(s, r()), J(c, ` ${i() ?? ""}`);
				}), q(e, a);
			});
			var p = B(f, 2), h = (e) => {
				var t = Sa(), n = z(t, !0);
				V((e) => J(n, e), [() => a("none")]), q(e, t);
			};
			Y(p, (e) => {
				!W(_e).events.length && !W(_e).actions.length && e(h);
			}), N(s);
			var g = B(s, 2), _ = R(g), b = z(_, !0);
			Z(B(_, 2), 17, () => W(_e).around, X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 2));
				let r = () => W(n)[0], i = () => W(n)[1];
				var a = xa(), o = R(a), s = z(o, !0), c = B(o);
				N(a), V(() => {
					J(s, r()), J(c, ` ${i() ?? ""}`);
				}), q(e, a);
			}), N(g);
			var x = B(g, 2), S = R(x), C = z(S, !0), w = B(S, 2);
			Z(w, 17, () => W(_e).server, X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 2));
				let r = () => W(n)[0], i = () => W(n)[1];
				var a = xa(), o = R(a), s = z(o, !0), c = B(o);
				N(a), V(() => {
					J(s, r()), J(c, ` ${i() ?? ""}`);
				}), q(e, a);
			}, (e) => {
				var t = Sa(), n = z(t, !0);
				V((e) => J(n, e), [() => a("mNoServer")]), q(e, t);
			});
			var ee = B(w, 2), T = (e) => {
				var t = ia();
				let n;
				var r = z(t);
				V((e) => {
					n = Q(t, 1, "tolog svelte-pbz4pw", null, n, { warn: W(_e).problems }), J(r, `${e ?? ""} →`);
				}, [() => a("mToLog", {
					problems: W(_e).problems,
					events: W(_e).evts
				})]), G("click", t, () => i()(W(_e).from, W(_e).to)), q(e, t);
			};
			Y(ee, (e) => {
				(W(_e).problems || W(_e).evts) && i() && e(T);
			}), N(x), V((e, t, n, i, a, s) => {
				J(r, `${e ?? ""}–${t ?? ""} `), J(o, `· ${n ?? ""}`), J(u, i), J(b, a), J(C, s);
			}, [
				() => me(W(y).start),
				() => me(W(y).start + 6e4),
				() => a("minuteOf", {
					n: W(v).mi + 1,
					of: W(c).length
				}),
				() => a("mActions"),
				() => a("mAround"),
				() => a("server")
			]), q(e, t);
		}, Qe = (e) => {
			var t = Ta(), n = Zt(t), r = z(n), i = B(n, 2), s = R(i), c = z(s, !0);
			Z(B(s, 2), 17, () => Object.entries((W(o)?.entities ?? []).reduce((e, [t, , , , n]) => (e[t] = (e[t] ?? 0) + ra(n), e), {})).sort((e, t) => t[1] - e[1]).slice(0, 10), X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 2));
				let r = () => W(n)[0], i = () => W(n)[1];
				var a = xa(), o = R(a), s = z(o), c = B(o);
				N(a), V((e) => {
					J(s, `${i() ?? ""}×`), J(c, ` ${e ?? ""}`);
				}, [() => he(r())]), q(e, a);
			}, (e) => {
				var t = Sa(), n = z(t, !0);
				V((e) => J(n, e), [() => a("none")]), q(e, t);
			}), N(i);
			var l = B(i, 2), u = R(l), d = z(u, !0);
			Z(B(u, 2), 17, () => (W(o)?.despawned?.summary ?? []).slice(0, 8), X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 2));
				let r = () => W(n)[0], i = () => W(n)[1];
				var a = xa(), o = R(a), s = z(o), c = B(o);
				N(a), V(() => {
					J(s, `${i() ?? ""}×`), J(c, ` ${r() ?? ""}`);
				}), q(e, a);
			}, (e) => {
				var t = Sa(), n = z(t, !0);
				V((e) => J(n, e), [() => a("none")]), q(e, t);
			}), N(l);
			var f = B(l, 2), p = R(f), h = z(p, !0);
			Z(B(p, 2), 17, () => (W(o)?.deaths?.rows ?? []).slice(-8).reverse(), X, (e, t) => {
				var n = wa(), r = R(n), i = z(r, !0), a = B(r, 2), o = z(a, !0), s = B(a);
				N(n), V((e, t, n) => {
					J(i, e), J(o, t), J(s, ` ${n ?? ""}`);
				}, [
					() => pe(W(t).time),
					() => he(W(t).type),
					() => W(t).message ?? [W(t).cause, W(t).killer].filter(Boolean).join(" · ")
				]), q(e, n);
			}, (e) => {
				var t = Sa(), n = z(t, !0);
				V((e) => J(n, e), [() => a("none")]), q(e, t);
			}), N(f), V((e, t, n, i, a) => {
				J(r, `${e ?? ""} ${t ?? ""}`), J(c, n), J(d, i), J(h, a);
			}, [
				() => a("created"),
				() => me(W(v).time),
				() => a("topEntities"),
				() => a("despawnedTotal", { count: W(o)?.despawned?.total ?? 0 }),
				() => a("deathsTotal", { count: W(o)?.deaths?.total ?? 0 })
			]), q(e, t);
		};
		Y(Xe, (e) => {
			W(_e) ? e(Ze) : e(Qe, -1);
		}), N(Ye), N(we);
		var $e = B(we, 2), et = R($e), tt = B(R(et), 1, !0);
		N(et);
		var nt = B(et, 2), rt = B(R(nt), 1, !0);
		N(nt);
		var it = B(nt, 2), at = B(R(it), 1, !0);
		N(it);
		var ot = B(it, 2), st = B(R(ot), 1, !0);
		N(ot);
		var ct = B(ot, 2), lt = z(ct), ut = B(ct, 2), dt = z(ut), ft = B(ut, 2), pt = (e) => {
			var t = Ea(), n = B(R(t), 1, !0);
			N(t), V((e) => J(n, e), [() => a("layerPath")]), q(e, t);
		};
		Y(ft, (e) => {
			W(c).length && e(pt);
		}), N($e);
		var F = B($e, 2), mt = (e) => {
			var t = Aa(), n = Zt(t), r = z(n, !0), i = B(n, 2);
			Z(i, 21, () => W(o).inventory, X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 4));
				let r = () => W(n)[0], i = () => W(n)[1], o = () => W(n)[2], s = () => W(n)[3];
				var c = Oa(), l = R(c), u = B(l), d = (e) => {
					var t = Da(), n = z(t, !0);
					V(() => J(n, s())), q(e, t);
				};
				Y(u, (e) => {
					s() && e(d);
				}), N(c), V((e) => {
					$(c, "title", e), J(l, `${i() ?? ""}${o() > 1 ? " × " + o() : ""}`);
				}, [() => `${a("slot")} ${r()}`]), q(e, c);
			}, (e) => {
				var t = ka(), n = z(t, !0);
				V((e) => J(n, e), [() => a("none")]), q(e, t);
			}), N(i), V((e) => J(r, e), [() => a("inventory", { name: W(o).player })]), q(e, t);
		};
		Y(F, (e) => {
			W(o)?.inventory && e(mt);
		}), N(r), V((e, t, n, r, i, a, o, s, c, l, d, p, m) => {
			J(u, e), g = Q(f, 1, "svelte-pbz4pw", null, g, { on: E.entities }), J(C, t), T = Q(w, 1, "svelte-pbz4pw", null, T, { on: E.despawned }), J(oe, n), le = Q(ce, 1, "svelte-pbz4pw", null, le, { on: E.deaths }), J(O, r), ge = Q(M, 1, "svelte-pbz4pw", null, ge, { on: E.players }), J(xe, i), $(Ee, "viewBox", `${W(D).x ?? ""} ${W(D).z ?? ""} 256 256`), $(Ee, "aria-label", a), $(De, "x", W(D).x), $(De, "y", W(D).z), J(Oe, o), $(Ke, "cx", W(v).x + .5), $(Ke, "cy", W(v).z + .5), J(qe, `${W(v).x ?? ""}${W(v).z ?? ""}`), J(Je, `${W(v).world ?? ""} · ${W(v).x ?? ""} ${W(v).z ?? ""}`), J(tt, s), J(rt, c), J(at, l), J(st, d), J(lt, `✕ ${p ?? ""}`), J(dt, `◆ ${m ?? ""}`);
		}, [
			() => W(c).length ? a("playHint", {
				n: W(c).length,
				who: W(o)?.player ?? t.log.ticket?.creator ?? ""
			}) : a("areaHint", {
				size: 256,
				who: W(o)?.player ?? a("thePlace")
			}),
			() => a("layerEntities"),
			() => a("layerDespawned"),
			() => a("layerDeaths"),
			() => a("layerPlayers"),
			() => a("area"),
			() => a("noTerrain"),
			() => a("hostile"),
			() => a("passive"),
			() => a("item"),
			() => a("other"),
			() => a("layerDespawned"),
			() => a("layerDeaths")
		]), G("click", f, () => E.entities = !E.entities), G("click", w, () => E.despawned = !E.despawned), G("click", ce, () => E.deaths = !E.deaths), G("click", M, () => E.players = !E.players), q(e, r);
	};
	Y(Se, (e) => {
		W(v) && e(Ce);
	}), q(e, xe), ze();
}
pr(["click", "input"]);
//#endregion
//#region src/ticketlog/ModulePart.svelte
var Na = /* @__PURE__ */ K("<p class=\"svelte-1h3vb0h\"> </p>"), Pa = /* @__PURE__ */ K("<span class=\"pill svelte-1h3vb0h\"> </span>"), Fa = /* @__PURE__ */ K("<div><dt class=\"svelte-1h3vb0h\"> </dt><dd class=\"svelte-1h3vb0h\"> </dd></div>"), Ia = /* @__PURE__ */ K("<dl class=\"svelte-1h3vb0h\"></dl>"), La = /* @__PURE__ */ K("<div class=\"charts svelte-1h3vb0h\"></div>"), Ra = /* @__PURE__ */ K("<section><header class=\"svelte-1h3vb0h\"><div><span class=\"from svelte-1h3vb0h\"> </span> <h3 class=\"svelte-1h3vb0h\"> </h3> <!></div> <!></header> <!> <!></section>");
function za(e, t) {
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
	var i = Ra(), a = R(i), o = R(a), s = R(o), c = z(s, !0), l = B(s, 2), u = z(l, !0), d = B(l, 2), f = (e) => {
		var n = Na(), r = z(n, !0);
		V(() => J(r, t.part.reason)), q(e, n);
	};
	Y(d, (e) => {
		t.part.reason && e(f);
	}), N(o);
	var p = B(o, 2), h = (e) => {
		var n = Pa(), r = z(n, !0);
		V(() => J(r, t.part.status.text)), q(e, n);
	};
	Y(p, (e) => {
		t.part.status && e(h);
	}), N(a);
	var g = B(a, 2), _ = (e) => {
		var n = Ia();
		Z(n, 21, () => t.part.facts, X, (e, t) => {
			var n = /* @__PURE__ */ P(() => m(W(t), 2));
			let r = () => W(n)[0], i = () => W(n)[1];
			var a = Fa(), o = R(a), s = z(o, !0), c = z(B(o), !0);
			N(a), V(() => {
				J(s, r()), J(c, i());
			}), q(e, a);
		}), N(n), q(e, n);
	};
	Y(g, (e) => {
		t.part.facts?.length && e(_);
	});
	var v = B(g, 2), y = (e) => {
		var i = La();
		Z(i, 21, () => W(n), X, (e, n) => {
			{
				let i = /* @__PURE__ */ P(() => r(W(n).unit)), a = /* @__PURE__ */ P(() => [{
					key: "value",
					label: W(n).title,
					color: "var(--series-1)"
				}]);
				Zi(e, {
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
		Q(i, 1, `mpart tone-${e ?? ""}`, "svelte-1h3vb0h"), J(c, n), J(u, t.part.title);
	}, [() => na(t.part.status?.tone), () => $i(t.lang, "module", { plugin: t.part.plugin })]), q(e, i), ze();
}
//#endregion
//#region src/ticketlog/TicketLog.svelte
var Ba = /* @__PURE__ */ K("<span class=\"pill bad svelte-1y95gkm\"> </span>"), Va = /* @__PURE__ */ K("<span class=\"pill warn svelte-1y95gkm\"> </span>"), Ha = /* @__PURE__ */ K("<button class=\"secondary small\"> </button>"), Ua = /* @__PURE__ */ K("<small class=\"svelte-1y95gkm\"> </small>"), Wa = /* @__PURE__ */ K("<button role=\"tab\"> <!></button>"), Ga = /* @__PURE__ */ K("<button></button>"), Ka = /* @__PURE__ */ K("<span class=\"lname svelte-1y95gkm\"> </span> <div class=\"lane svelte-1y95gkm\" role=\"group\"><!> <span class=\"ticket-mark svelte-1y95gkm\"></span></div>", 1), qa = /* @__PURE__ */ K("<button><span class=\"ftime svelte-1y95gkm\"> </span> <span class=\"ftext svelte-1y95gkm\"><b class=\"svelte-1y95gkm\"> </b><!></span> <span class=\"fgo svelte-1y95gkm\"> </span></button>"), Ja = /* @__PURE__ */ K("<p class=\"muted small svelte-1y95gkm\"> </p>"), Ya = /* @__PURE__ */ K("<div class=\"pane svelte-1y95gkm\"><!> <section class=\"block svelte-1y95gkm\"><div class=\"bhead svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <span class=\"muted small\"> </span></div> <div class=\"lanes svelte-1y95gkm\"><!> <span></span> <div class=\"axis muted svelte-1y95gkm\"><span> </span><span> </span></div></div></section> <section class=\"block svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <!></section></div>"), Xa = /* @__PURE__ */ K("<dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd>", 1), Za = /* @__PURE__ */ K("<div class=\"crow svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b class=\"svelte-1y95gkm\"> </b></div>"), Qa = /* @__PURE__ */ K("<span class=\"muted small\">-</span>"), $a = /* @__PURE__ */ K("<div><h4 class=\"svelte-1y95gkm\"> </h4> <!></div>"), eo = /* @__PURE__ */ K("<section class=\"block svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"><span class=\"muted\"> </span> </h3> <dl class=\"svelte-1y95gkm\"><dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <!> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <!></dl> <div class=\"counts svelte-1y95gkm\"><!> <div><h4 class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></h4> <!></div></div></section>"), to = /* @__PURE__ */ K("<div class=\"cols svelte-1y95gkm\"></div>"), no = /* @__PURE__ */ K("<div class=\"pane svelte-1y95gkm\"><!> <!></div>"), ro = /* @__PURE__ */ K("<button role=\"tab\"><span class=\"svelte-1y95gkm\"> </span><b> </b><small class=\"svelte-1y95gkm\"> </small></button>"), io = /* @__PURE__ */ K("<button> </button>"), ao = /* @__PURE__ */ K("<div class=\"crow svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></span> <b class=\"svelte-1y95gkm\"> </b></div>"), oo = /* @__PURE__ */ K("<div class=\"crow svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></span><b class=\"svelte-1y95gkm\"> </b></div>"), so = /* @__PURE__ */ K("<section class=\"block svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <!></section>"), co = /* @__PURE__ */ K("<div class=\"pane svelte-1y95gkm\"><div class=\"mtiles svelte-1y95gkm\" role=\"tablist\"></div> <div class=\"zoom svelte-1y95gkm\"><span class=\"muted small\"> </span> <div class=\"seg svelte-1y95gkm\" role=\"group\"></div></div> <!> <div class=\"cols svelte-1y95gkm\"><section class=\"block svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> <small class=\"muted svelte-1y95gkm\"> </small></h3> <!></section> <!></div></div>"), lo = /* @__PURE__ */ K("<div class=\"seg svelte-1y95gkm\"></div>"), uo = /* @__PURE__ */ K("<button class=\"more svelte-1y95gkm\"> </button>"), fo = /* @__PURE__ */ K("<span class=\"src svelte-1y95gkm\"> </span>"), po = /* @__PURE__ */ K("<div><span class=\"lt svelte-1y95gkm\"> </span> <!> <span class=\"tx svelte-1y95gkm\"> </span></div>"), mo = /* @__PURE__ */ K("<div class=\"pane svelte-1y95gkm\"><div class=\"filters svelte-1y95gkm\"><div class=\"seg svelte-1y95gkm\"></div> <!> <input type=\"search\" class=\"svelte-1y95gkm\"/> <!></div> <div class=\"lines svelte-1y95gkm\"><!> <!> <!></div></div>"), ho = /* @__PURE__ */ K("<span> <small class=\"svelte-1y95gkm\"> </small></span>"), go = /* @__PURE__ */ K("<div class=\"pane cols svelte-1y95gkm\"><section class=\"block svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <dl class=\"svelte-1y95gkm\"><dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">Minecraft</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">MRadmin</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">Java</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd></dl></section> <section class=\"block svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <div class=\"plist svelte-1y95gkm\"></div></section></div>"), _o = /* @__PURE__ */ K("<section class=\"card tlog svelte-1y95gkm\"><header class=\"t-head svelte-1y95gkm\"><div><h2 class=\"svelte-1y95gkm\"> </h2> <p class=\"muted small svelte-1y95gkm\"> </p></div> <div class=\"t-counts svelte-1y95gkm\"><!> <!> <span class=\"pill svelte-1y95gkm\"> </span> <!></div></header> <div class=\"ttabs svelte-1y95gkm\" role=\"tablist\"></div> <!></section>");
function vo(e, t) {
	Re(t, !0);
	let n = _i(t, "lang", 3, "de"), r = _i(t, "onclose", 3, null), i = (e, t) => $i(n(), e, t), a = (e) => e == null ? "-" : Math.round(e).toLocaleString(), o = (e) => e == null ? "-" : e.toFixed(1) + " ms", s = (e) => e == null ? "-" : Math.round(e) + " %", c = (e) => e == null ? "-" : e >= 1024 ? (e / 1024).toFixed(1) + " GB" : Math.round(e) + " MB", l = (e) => e == null ? "-" : e.toFixed(1), u = (e) => new Date(e).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}), d = (e) => {
		let t = Math.floor(e / 6e4);
		return t >= 1440 ? Math.floor(t / 1440) + " d " + Math.floor(t % 1440 / 60) + " h" : t >= 60 ? Math.floor(t / 60) + " h " + t % 60 + " min" : t + " min";
	}, f = /* @__PURE__ */ P(() => Math.max(1, t.log.time - t.log.from)), p = /* @__PURE__ */ P(() => {
		let e = t.log.health?.fields ?? [];
		return (t.log.health?.rows ?? []).map((t) => Object.fromEntries(e.map((e, n) => [e, t[n]])));
	}), h = /* @__PURE__ */ P(() => {
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
			color: ta(n.color)
		});
		return e.sort((e, t) => e.time - t.time), e;
	}), g = /* @__PURE__ */ P(() => ({
		warn: W(h).filter((e) => e.level === "warn").length,
		error: W(h).filter((e) => e.level === "error").length,
		event: W(h).filter((e) => e.kind === "event").length
	})), _ = /* @__PURE__ */ P(() => (t.log.timeline?.minutes ?? []).flatMap((e) => (e.events ?? []).map((e) => ({
		time: Number(e.time),
		kind: String(e.kind),
		text: String(e.text ?? "")
	})))), v = /* @__PURE__ */ P(() => !!(t.log.area || t.log.timeline)), y = /* @__PURE__ */ P(() => [t.log.player && {
		who: i("creator"),
		p: t.log.player,
		onMap: W(v)
	}, t.log.target && {
		who: i("target"),
		p: t.log.target,
		onMap: !1
	}].filter(Boolean)), b = /* @__PURE__ */ P(() => [
		{
			id: "overview",
			label: i("tabOverview")
		},
		(W(v) || W(y).length) && {
			id: "map",
			label: i("tabMap")
		},
		W(p).length && {
			id: "perf",
			label: i("tabPerf")
		},
		{
			id: "log",
			label: i("tabLog"),
			count: W(h).length
		},
		{
			id: "server",
			label: i("tabServer")
		}
	].filter(Boolean)), x = /* @__PURE__ */ I("overview"), S = /* @__PURE__ */ I(null);
	function C(e, t, n = null) {
		L(he, e == null ? null : [e, t], !0), L(fe, "all"), L(pe, n ? {
			info: !1,
			warn: n === "warn",
			error: !0
		} : {
			info: !0,
			warn: !0,
			error: !0
		}, !0), L(A, 300), L(x, "log");
	}
	function w(e) {
		L(S, { time: e }, !0), L(x, "map");
	}
	let ee = (e) => Math.min(89, Math.max(0, Math.floor((e - t.log.from) / W(f) * 90))), T = (e) => t.log.from + W(f) * e / 90, te = /* @__PURE__ */ P(() => {
		let e = () => Array.from({ length: 90 }, () => ({
			n: 0,
			tone: ""
		})), n = {
			"": 0,
			act: 1,
			warn: 2,
			bad: 3
		}, r = (e, t, r) => {
			let i = e[ee(t)];
			i.n++, n[r] > n[i.tone] && (i.tone = r);
		}, a = e(), o = e(), s = e(), c = e();
		for (let e of W(h)) e.kind === "event" ? r(o, e.time, "act") : r(a, e.time, e.level === "error" ? "bad" : e.level === "warn" ? "warn" : "");
		for (let e of W(p)) {
			let t = e.mspt > 50 || e.tps < 15 ? "bad" : e.msptMax > 50 || e.tps < 19 ? "warn" : "";
			t && r(s, e.time, t);
		}
		for (let e of W(_)) r(c, e.time, e.kind === "death" ? "bad" : "act");
		return [
			{
				id: "log",
				label: i("laneLog"),
				slices: a
			},
			{
				id: "event",
				label: i("laneEvents"),
				slices: o
			},
			W(p).length && {
				id: "perf",
				label: i("lanePerf"),
				slices: s
			},
			t.log.timeline && {
				id: "player",
				label: i("lanePlayer"),
				slices: c
			}
		].filter(Boolean);
	});
	function ne(e, t) {
		let n = T(t), r = T(t + 1);
		e === "perf" ? L(x, "perf") : e === "player" ? w(n) : C(n, r);
	}
	let re = /* @__PURE__ */ P(() => (t.log.time - t.log.from) / W(f) * 100), E = /* @__PURE__ */ P(() => {
		let e = [], t = W(p).filter((e) => e.mspt > 50), n = W(p).reduce((e, t) => t.msptMax > (e?.msptMax ?? 0) ? t : e, null), r = W(p).reduce((e, t) => t.tps < (e?.tps ?? 20) ? t : e, null);
		t.length ? e.push({
			tone: "bad",
			time: t[0].time,
			text: i("fLag", {
				n: t.length,
				max: o(n.msptMax)
			}),
			go: "perf",
			metric: "mspt"
		}) : n && n.msptMax > 100 && e.push({
			tone: "warn",
			time: n.time,
			text: i("fSpike", { max: o(n.msptMax) }),
			go: "perf",
			metric: "mspt"
		}), r && r.tps < 19 && e.push({
			tone: r.tps < 15 ? "bad" : "warn",
			time: r.time,
			text: i("fTps", { tps: l(r.tps) }),
			go: "perf",
			metric: "tps"
		});
		let a = W(h).find((e) => e.level === "error");
		a && e.push({
			tone: "bad",
			time: a.time,
			text: i("fErrors", { n: W(g).error }),
			detail: a.text.split("\n")[0],
			go: "log",
			level: "error"
		});
		let s = W(h).find((e) => e.level === "warn");
		s && e.push({
			tone: "warn",
			time: s.time,
			text: i("fWarnings", { n: W(g).warn }),
			detail: s.text.split("\n")[0],
			go: "log",
			level: "warn"
		});
		for (let t of W(_).filter((e) => e.kind === "death")) e.push({
			tone: "bad",
			time: t.time,
			text: i("fDeath"),
			detail: t.text,
			go: "map"
		});
		return e.sort((e, t) => e.time - t.time);
	});
	function ie(e) {
		e.go === "perf" ? (L(oe, e.metric ?? W(oe), !0), L(x, "perf")) : e.go === "map" ? w(e.time) : C(null, null, e.level);
	}
	let D = (e, t = Math.max) => W(p).length ? t(...W(p).map((t) => t[e] ?? 0)) : null, ae = /* @__PURE__ */ P(() => [
		{
			id: "tps",
			label: "TPS",
			peak: l(D("tps", Math.min)),
			hint: i("lowest"),
			tone: D("tps", Math.min) < 15 ? "bad" : D("tps", Math.min) < 19 ? "warn" : "",
			yMax: 20,
			format: l,
			series: [{
				key: "tps",
				label: "TPS",
				color: "var(--series-1)"
			}]
		},
		{
			id: "mspt",
			label: i("mspt"),
			peak: o(D("msptMax")),
			hint: i("longestTick"),
			tone: D("msptMax") > 100 ? "bad" : D("msptMax") > 50 ? "warn" : "",
			format: o,
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
			peak: s(D("cpu")),
			hint: i("highest"),
			yMax: 100,
			format: s,
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
			peak: c(D("heapUsed")),
			hint: i("highestOf", { max: c(W(p).at(-1)?.heapMax) }),
			format: c,
			series: [{
				key: "heapUsed",
				label: i("used"),
				color: "var(--series-1)"
			}]
		},
		{
			id: "world",
			label: i("world"),
			peak: a(D("entities")),
			hint: i("highest") + " · " + i("entities"),
			format: a,
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
			peak: a(D("players")),
			hint: i("highest") + " · Ping " + a(D("ping")) + " ms",
			format: a,
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
	]), oe = /* @__PURE__ */ I("tps"), se = /* @__PURE__ */ P(() => W(ae).find((e) => e.id === W(oe)) ?? W(ae)[0]), ce = /* @__PURE__ */ P(() => Math.max(1, Math.round(W(f) / 6e4))), le = /* @__PURE__ */ P(() => [...[
		1,
		10,
		30
	].filter((e) => e < W(ce)), W(ce)].filter((e, t, n) => n.indexOf(e) === t)), O = /* @__PURE__ */ I(30), ue = /* @__PURE__ */ P(() => Math.min(W(O), W(ce))), de = /* @__PURE__ */ P(() => t.log.time - W(ue) * 6e4), k = /* @__PURE__ */ P(() => W(p).filter((e) => e.time >= W(de))), fe = /* @__PURE__ */ I("all"), pe = /* @__PURE__ */ I(Ht({
		info: !0,
		warn: !0,
		error: !0
	})), me = /* @__PURE__ */ I(""), he = /* @__PURE__ */ I(null), A = /* @__PURE__ */ I(300), j = /* @__PURE__ */ P(() => {
		let e = W(me).trim().toLowerCase();
		return W(h).filter((t) => W(fe) !== "all" && t.kind !== W(fe) || t.kind === "console" && !W(pe)[t.level] || W(he) && (t.time < W(he)[0] || t.time >= W(he)[1]) ? !1 : !e || t.text.toLowerCase().includes(e) || (t.source ?? "").toLowerCase().includes(e));
	}), M = /* @__PURE__ */ P(() => W(j).slice(Math.max(0, W(j).length - W(A))));
	var ge = _o(), _e = R(ge), ve = R(_e), ye = R(ve), be = z(ye, !0), xe = z(B(ye, 2), !0);
	N(ve);
	var Se = B(ve, 2), Ce = R(Se), we = (e) => {
		var t = Ba(), n = z(t);
		V((e) => J(n, `${W(g).error ?? ""} ${e ?? ""}`), [() => i("errors")]), q(e, t);
	};
	Y(Ce, (e) => {
		W(g).error && e(we);
	});
	var Te = B(Ce, 2), Ee = (e) => {
		var t = Va(), n = z(t);
		V((e) => J(n, `${W(g).warn ?? ""} ${e ?? ""}`), [() => i("warnings")]), q(e, t);
	};
	Y(Te, (e) => {
		W(g).warn && e(Ee);
	});
	var De = B(Te, 2), Oe = z(De), ke = B(De, 2), Ae = (e) => {
		var t = Ha(), n = z(t, !0);
		V((e) => J(n, e), [() => i("hide")]), G("click", t, function(...e) {
			r()?.apply(this, e);
		}), q(e, t);
	};
	Y(ke, (e) => {
		r() && e(Ae);
	}), N(Se), N(_e);
	var je = B(_e, 2);
	Z(je, 21, () => W(b), (e) => e.id, (e, t) => {
		var n = Wa();
		let r;
		var i = R(n, !0), a = B(i), o = (e) => {
			var n = Ua(), r = z(n, !0);
			V(() => J(r, W(t).count)), q(e, n);
		};
		Y(a, (e) => {
			W(t).count != null && e(o);
		}), N(n), V(() => {
			$(n, "aria-selected", W(x) === W(t).id), r = Q(n, 1, "svelte-1y95gkm", null, r, { on: W(x) === W(t).id }), J(i, W(t).label);
		}), G("click", n, () => {
			L(S, null), L(x, W(t).id, !0);
		}), q(e, n);
	}), N(je);
	var Me = B(je, 2), Ne = (e) => {
		var r = Ya(), a = R(r), o = (e) => {
			za(e, {
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
		Y(a, (e) => {
			t.log.module && e(o);
		});
		var s = B(a, 2), c = R(s), l = R(c), d = z(l, !0), f = z(B(l, 2), !0);
		N(c);
		var p = B(c, 2), m = R(p);
		Z(m, 17, () => W(te), (e) => e.id, (e, t) => {
			var n = Ka(), r = Zt(n), i = z(r, !0), a = B(r, 2), o = R(a);
			Z(o, 17, () => W(t).slices, X, (e, n, r) => {
				var i = Ga();
				let a;
				V((e, r) => {
					a = Q(i, 1, `slice ${W(n).tone ?? ""}`, "svelte-1y95gkm", a, { has: W(n).n }), $(i, "title", `${e ?? ""} · ${W(n).n ?? ""}`), $(i, "aria-label", `${W(t).label ?? ""} ${r ?? ""}`), i.disabled = !W(n).n;
				}, [() => u(T(r)), () => u(T(r))]), G("click", i, () => ne(W(t).id, r)), q(e, i);
			});
			var s = B(o, 2);
			N(a), V(() => {
				J(i, W(t).label), $(a, "aria-label", W(t).label), ei(s, `left: ${W(re) ?? ""}%`);
			}), q(e, n);
		});
		var h = B(m, 4), g = R(h), _ = z(g, !0), v = z(B(g));
		N(h), N(p), N(s);
		var y = B(s, 2), b = R(y), x = z(b, !0);
		Z(B(b, 2), 17, () => W(E), X, (e, t) => {
			var n = qa(), r = R(n), a = z(r, !0), o = B(r, 2), s = R(o), c = z(s, !0), l = B(s), d = (e) => {
				var n = Ua(), r = z(n, !0);
				V(() => J(r, W(t).detail)), q(e, n);
			};
			Y(l, (e) => {
				W(t).detail && e(d);
			}), N(o);
			var f = z(B(o, 2));
			N(n), V((e, r) => {
				Q(n, 1, `finding ${W(t).tone ?? ""}`, "svelte-1y95gkm"), J(a, e), J(c, W(t).text), J(f, `${r ?? ""} →`);
			}, [() => u(W(t).time), () => i("go_" + W(t).go)]), G("click", n, () => ie(W(t))), q(e, n);
		}, (e) => {
			var t = Ja(), n = z(t, !0);
			V((e) => J(n, e), [() => i("noFindings")]), q(e, t);
		}), N(y), N(r), V((e, t, n, r, i, a) => {
			J(d, e), J(f, t), J(_, n), J(v, `${r ?? ""} ${i ?? ""}`), J(x, a);
		}, [
			() => i("timeline"),
			() => i("timelineHint"),
			() => u(t.log.from),
			() => i("created"),
			() => u(t.log.time),
			() => i("findings")
		]), q(e, r);
	}, Pe = (e) => {
		var r = no(), a = R(r), o = (e) => {
			{
				let r = /* @__PURE__ */ P(() => t.log.module?.area ? {
					...t.log.module.area,
					label: i("loaderArea") + ": " + t.log.module.title
				} : null);
				Ma(e, {
					get log() {
						return t.log;
					},
					get lang() {
						return n();
					},
					get seek() {
						return W(S);
					},
					onlog: (e, t) => C(e, t),
					get mark() {
						return W(r);
					}
				});
			}
		};
		Y(a, (e) => {
			W(v) && e(o);
		});
		var s = B(a, 2), c = (e) => {
			var t = to();
			Z(t, 21, () => W(y), X, (e, t) => {
				let n = () => W(t).who, r = () => W(t).p, a = () => W(t).onMap;
				var o = eo(), s = R(o), c = R(s), l = z(c, !0), u = B(c);
				N(s);
				var d = B(s, 2), f = R(d), p = z(f, !0), h = B(f), g = R(h), _ = z(B(g));
				N(h);
				var v = B(h, 2), y = z(v, !0), b = B(v), x = z(b), S = B(b, 2), C = z(S, !0), w = B(S), ee = z(w), T = B(w, 2), te = z(T, !0), ne = B(T), re = z(ne), E = B(ne, 2), ie = z(E, !0), D = B(E), ae = z(D, !0), oe = B(D, 2), se = (e) => {
					var t = Xa(), n = Zt(t), a = z(n, !0), o = z(B(n), !0);
					V((e, t) => {
						J(a, e), J(o, t);
					}, [() => i("effects"), () => r().effects.join(", ")]), q(e, t);
				};
				Y(oe, (e) => {
					r().effects?.length && e(se);
				});
				var ce = B(oe, 2), le = z(ce, !0), O = B(ce), ue = z(O), de = B(O, 2), k = (e) => {
					var t = Xa(), n = Zt(t), a = z(n, !0), o = z(B(n), !0);
					V((e, t) => {
						J(a, e), J(o, t);
					}, [() => i("nearPlayers"), () => r().players.map((e) => `${e.name} (${Math.round(e.distance)} m)`).join(", ")]), q(e, t);
				};
				Y(de, (e) => {
					!a() && r().players?.length && e(k);
				}), N(d);
				var fe = B(d, 2), pe = R(fe), me = (e) => {
					var t = $a(), n = R(t), a = z(n, !0);
					Z(B(n, 2), 17, () => (r().entities ?? []).slice(0, 8), X, (e, t) => {
						var n = /* @__PURE__ */ P(() => m(W(t), 2));
						let r = () => W(n)[0], i = () => W(n)[1];
						var a = Za(), o = R(a), s = z(o, !0), c = z(B(o), !0);
						N(a), V(() => {
							J(s, r()), J(c, i());
						}), q(e, a);
					}, (e) => {
						q(e, Qa());
					}), N(t), V((e) => J(a, e), [() => i("entitiesNear")]), q(e, t);
				};
				Y(pe, (e) => {
					a() || e(me);
				});
				var he = B(pe, 2), A = R(he), j = R(A), M = z(B(j), !0);
				N(A), Z(B(A, 2), 17, () => (r().tiles ?? []).slice(0, 8), X, (e, t) => {
					var n = /* @__PURE__ */ P(() => m(W(t), 2));
					let r = () => W(n)[0], i = () => W(n)[1];
					var a = Za(), o = R(a), s = z(o, !0), c = z(B(o), !0);
					N(a), V(() => {
						J(s, r()), J(c, i());
					}), q(e, a);
				}, (e) => {
					q(e, Qa());
				}), N(he), N(fe), N(o), V((e, t, i, a, o, s, c, d, f, m, h, v, b, S, w, T) => {
					J(l, n()), J(u, ` ${r().name ?? ""}`), J(p, e), J(g, `${r().world ?? ""} · ${t ?? ""} ${i ?? ""} ${a ?? ""} `), J(_, `(${o ?? ""} ${s ?? ""})`), J(y, c), J(x, `${r().biome ?? ""} · ${d ?? ""} ${r().light ?? ""}`), J(C, f), J(ee, `${r().gameMode ?? ""}${m ?? ""}${r().vehicle ? " · " + r().vehicle : ""}${r().op ? " · OP" : ""}`), J(te, h), J(re, `❤ ${r().health ?? ""}/${r().maxHealth ?? ""} · 🍗 ${r().food ?? ""} · Lvl ${r().level ?? ""}`), J(ie, v), J(ae, r().hand ?? "-"), J(le, b), J(ue, `${r().client ?? "-" ?? ""} · ${S ?? ""} ${r().protocol ?? ""} · ${r().locale ?? ""} · ${w ?? ""} ${r().viewDistance ?? ""} · Ping ${r().ping ?? ""} ms`), J(j, `${T ?? ""} `), J(M, r().tileArea);
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
					() => i("hand"),
					() => i("client"),
					() => i("protocol"),
					() => i("viewDistance"),
					() => i("tilesNear")
				]), q(e, o);
			}), N(t), q(e, t);
		};
		Y(s, (e) => {
			W(y).length && e(c);
		}), N(r), q(e, r);
	}, Fe = (e) => {
		var n = co(), r = R(n);
		Z(r, 21, () => W(ae), (e) => e.id, (e, t) => {
			var n = ro();
			let r;
			var i = R(n), a = z(i, !0), o = B(i), s = z(o, !0), c = z(B(o), !0);
			N(n), V(() => {
				$(n, "aria-selected", W(oe) === W(t).id), r = Q(n, 1, "svelte-1y95gkm", null, r, { on: W(oe) === W(t).id }), J(a, W(t).label), Q(o, 1, qr(W(t).tone ?? ""), "svelte-1y95gkm"), J(s, W(t).peak), J(c, W(t).hint);
			}), G("click", n, () => L(oe, W(t).id, !0)), q(e, n);
		}), N(r);
		var o = B(r, 2), s = R(o), c = z(s, !0), l = B(s, 2);
		Z(l, 21, () => W(le), X, (e, t) => {
			var n = io();
			let r;
			var a = z(n, !0);
			V((e) => {
				r = Q(n, 1, "svelte-1y95gkm", null, r, { on: W(ue) === W(t) }), J(a, e);
			}, [() => i("min", { n: W(t) })]), G("click", n, () => L(O, W(t), !0)), q(e, n);
		}), N(l), N(o);
		var u = B(o, 2);
		Fr(u, () => W(oe) + W(ue), (e) => {
			{
				let n = /* @__PURE__ */ P(() => W(ue) > 1), r = /* @__PURE__ */ P(() => W(se).yMax ?? null), i = /* @__PURE__ */ P(() => W(se).refs ?? []);
				Zi(e, {
					get title() {
						return W(se).label;
					},
					get points() {
						return W(k);
					},
					get from() {
						return W(de);
					},
					get to() {
						return t.log.time;
					},
					seconds: !0,
					get smooth() {
						return W(n);
					},
					get yMax() {
						return W(r);
					},
					get format() {
						return W(se).format;
					},
					get series() {
						return W(se).series;
					},
					get refs() {
						return W(i);
					}
				});
			}
		});
		var d = B(u, 2), f = R(d), p = R(f), m = R(p), h = z(B(m), !0);
		N(p), Z(B(p, 2), 17, () => t.log.server?.worlds ?? [], X, (e, t) => {
			var n = ao(), r = R(n), i = R(r), o = z(B(i));
			N(r);
			var s = z(B(r, 2));
			N(n), V((e, n, r, a) => {
				J(i, `${W(t).name ?? ""} `), J(o, `${W(t).environment ?? ""} · ${W(t).weather ?? ""}`), J(s, `${e ?? ""} 👤 · ${n ?? ""} ▦ · ${r ?? ""} E · ${a ?? ""} T`);
			}, [
				() => a(W(t).players),
				() => a(W(t).chunks),
				() => a(W(t).entities),
				() => a(W(t).tiles)
			]), q(e, n);
		}), N(f);
		var g = B(f, 2), _ = (e) => {
			var n = so(), r = R(n), a = z(r, !0);
			Z(B(r, 2), 17, () => t.log.hotChunks, X, (e, t) => {
				var n = oo(), r = R(n), i = R(r), a = z(B(i), !0);
				N(r);
				var o = z(B(r), !0);
				N(n), V((e) => {
					J(i, `${W(t).world ?? ""} ${W(t).x ?? ""} ${W(t).z ?? ""} `), J(a, e), J(o, W(t).count);
				}, [() => W(t).types.slice(0, 3).map(([e, t]) => `${e} ${t}`).join(", ")]), q(e, n);
			}), N(n), V((e) => J(a, e), [() => i("hotChunks")]), q(e, n);
		};
		Y(g, (e) => {
			t.log.hotChunks?.length && e(_);
		}), N(d), N(n), V((e, t, n, r) => {
			J(c, e), $(l, "aria-label", t), J(m, `${n ?? ""} `), J(h, r);
		}, [
			() => i("zoom"),
			() => i("zoom"),
			() => i("worlds"),
			() => i("atCreation")
		]), q(e, n);
	}, Ie = (e) => {
		var n = mo(), r = R(n), a = R(r);
		Z(a, 21, () => [
			["all", i("all")],
			["console", i("console")],
			["event", i("events")]
		], X, (e, t) => {
			var n = /* @__PURE__ */ P(() => m(W(t), 2));
			let r = () => W(n)[0], i = () => W(n)[1];
			var a = io();
			let o;
			var s = z(a, !0);
			V(() => {
				o = Q(a, 1, "svelte-1y95gkm", null, o, { on: W(fe) === r() }), J(s, i());
			}), G("click", a, () => L(fe, r(), !0)), q(e, a);
		}), N(a);
		var o = B(a, 2), s = (e) => {
			var t = lo();
			Z(t, 21, () => [
				["info", "Info"],
				["warn", i("warnings")],
				["error", i("errors")]
			], X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 2));
				let r = () => W(n)[0], i = () => W(n)[1];
				var a = io();
				let o;
				var s = z(a, !0);
				V(() => {
					o = Q(a, 1, qr(r()), "svelte-1y95gkm", o, { on: W(pe)[r()] }), J(s, i());
				}), G("click", a, () => W(pe)[r()] = !W(pe)[r()]), q(e, a);
			}), N(t), q(e, t);
		};
		Y(o, (e) => {
			W(fe) !== "event" && e(s);
		});
		var c = B(o, 2);
		ai(c);
		var l = B(c, 2), d = (e) => {
			var t = Ha(), n = z(t);
			V((e, t) => J(n, `${e ?? ""}–${t ?? ""} ✕`), [() => u(W(he)[0]), () => u(W(he)[1])]), G("click", t, () => L(he, null)), q(e, t);
		};
		Y(l, (e) => {
			W(he) && e(d);
		}), N(r);
		var f = B(r, 2), p = R(f), h = (e) => {
			var t = uo(), n = z(t, !0);
			V((e) => J(n, e), [() => i("older", { count: W(j).length - W(M).length })]), G("click", t, () => L(A, W(A) + 500)), q(e, t);
		};
		Y(p, (e) => {
			W(j).length > W(M).length && e(h);
		});
		var g = B(p, 2);
		Z(g, 17, () => W(M), X, (e, t) => {
			var n = po(), r = R(n), i = z(r, !0), a = B(r, 2), o = (e) => {
				var n = fo(), r = z(n, !0);
				V(() => {
					ei(n, `--c: ${W(t).color ?? ""}`), J(r, W(t).source);
				}), q(e, n);
			};
			Y(a, (e) => {
				W(t).kind === "event" && e(o);
			});
			var s = z(B(a, 2), !0);
			N(n), V((e) => {
				Q(n, 1, `line ${W(t).level ?? ""}`, "svelte-1y95gkm"), J(i, e), J(s, W(t).text);
			}, [() => u(W(t).time)]), q(e, n);
		}, (e) => {
			var t = Ja(), n = z(t, !0);
			V((e) => J(n, e), [() => i("empty")]), q(e, t);
		});
		var _ = B(g, 2), v = (e) => {
			var t = Ja(), n = z(t, !0);
			V((e) => J(n, e), [() => i("cut")]), q(e, t);
		};
		Y(_, (e) => {
			t.log.console?.cut && e(v);
		}), N(f), N(n), V((e) => $(c, "placeholder", e), [() => i("search")]), ui(c, () => W(me), (e) => L(me, e)), q(e, n);
	}, Le = (e) => {
		var n = go(), r = R(n), a = R(r), o = z(a, !0), s = B(a, 2), l = R(s), u = z(l, !0), f = B(l), p = z(f, !0), m = B(f, 3), h = z(m, !0), g = B(m, 3), _ = z(g, !0), v = B(g, 3), y = z(v, !0), b = B(v, 2), x = z(b, !0), S = B(b), C = z(S), w = B(S, 2), ee = z(w, !0), T = B(w), te = z(T, !0), ne = B(T, 2), re = z(ne, !0), E = B(ne), ie = z(E, !0), D = B(E, 2), ae = z(D, !0), oe = B(D), se = z(oe), ce = B(oe, 2), le = z(ce, !0), O = z(B(ce), !0);
		N(s), N(r);
		var ue = B(r, 2), de = R(ue), k = z(de, !0), fe = B(de, 2);
		Z(fe, 21, () => t.log.server?.plugins ?? [], X, (e, t) => {
			var n = ho();
			let r;
			var i = R(n), a = z(B(i), !0);
			N(n), V(() => {
				r = Q(n, 1, "svelte-1y95gkm", null, r, { off: !W(t).enabled }), J(i, `${W(t).name ?? ""} `), J(a, W(t).version);
			}), q(e, n);
		}), N(fe), N(ue), N(n), V((e, n, r, i, a, s, c, l, d, f, m) => {
			J(o, e), J(u, n), J(p, t.log.server?.software), J(h, t.log.server?.minecraft), J(_, t.log.server?.mradmin), J(y, t.log.server?.java), J(x, r), J(C, `${t.log.server?.os ?? ""} · ${t.log.server?.cores ?? ""} ${i ?? ""} · ${a ?? ""}`), J(ee, s), J(te, c), J(re, l), J(ie, t.log.server?.maxPlayers), J(ae, d), J(se, `${t.log.server?.viewDistance ?? ""} / ${t.log.server?.simulationDistance ?? ""}`), J(le, f), J(O, t.log.server?.storage), J(k, m);
		}, [
			() => i("serverData"),
			() => i("software"),
			() => i("system"),
			() => i("cores"),
			() => c(t.log.server?.memoryMax),
			() => i("uptime"),
			() => d(t.log.server?.uptime ?? 0),
			() => i("slots"),
			() => i("distances"),
			() => i("storage"),
			() => i("plugins", { count: t.log.server?.plugins?.length ?? 0 })
		]), q(e, n);
	};
	Y(Me, (e) => {
		W(x) === "overview" ? e(Ne) : W(x) === "map" ? e(Pe, 1) : W(x) === "perf" ? e(Fe, 2) : W(x) === "log" ? e(Ie, 3) : W(x) === "server" && e(Le, 4);
	}), N(ge), V((e, t, n) => {
		J(be, e), J(xe, t), J(Oe, `${W(g).event ?? ""} ${n ?? ""}`);
	}, [
		() => i("title"),
		() => i("span", {
			from: u(t.log.from),
			to: u(t.log.time),
			minutes: Math.round(W(f) / 6e4)
		}),
		() => i("events")
	]), q(e, ge), ze();
}
pr(["click"]);
//#endregion
//#region src/ticketlog/viewer/main.js
function yo(e, t, n = "de") {
	e.classList.add("mr-tlog-root");
	let r = Or(vo, {
		target: e,
		props: {
			log: t,
			lang: n
		}
	});
	return { destroy: () => Mr(r) };
}
//#endregion
export { yo as mountTicketLog };
