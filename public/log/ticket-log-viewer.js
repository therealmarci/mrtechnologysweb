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
var h = 1024, g = 2048, _ = 4096, v = 8192, y = 16384, b = 32768, x = 1 << 25, S = 65536, C = 1 << 19, w = 1 << 20, T = 1 << 25, E = 1 << 21, ee = 1 << 22, D = 1 << 23, te = Symbol("$state"), O = Symbol("component"), ne = Symbol("legacy props"), re = Symbol(""), ie = Symbol("attributes"), ae = Symbol("class"), oe = Symbol("style"), se = Symbol("text"), ce = Symbol("form reset"), le = new class extends Error {
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
function ge(e) {
	A = e;
}
var j;
function _e(e) {
	if (e === null) throw me(), de;
	return j = e;
}
function ve() {
	return _e(/* @__PURE__ */ Zt(j));
}
function M(e) {
	if (A) {
		if (/* @__PURE__ */ Zt(j) !== null) throw me(), de;
		j = e;
	}
}
function ye(e = 1) {
	if (A) {
		for (var t = e, n = j; t--;) n = /* @__PURE__ */ Zt(n);
		j = n;
	}
}
function be(e = !0) {
	for (var t = 0, n = j;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Zt(n);
		e && n.remove(), n = i;
	}
}
function xe(e) {
	if (!e || e.nodeType !== 8) throw me(), de;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Se(e) {
	return e === this.v;
}
function Ce(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function we(e) {
	return !Ce(e, this.v);
}
function Te(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function Ee() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function De(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function Oe(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function ke() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ae(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function je() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Me(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Ne() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Pe() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fe() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ie() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var Le = null;
function Re(e) {
	Le = e;
}
function ze(e, t = !1, n) {
	Le = {
		p: Le,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: U,
		l: null
	};
}
function Be(e) {
	var t = Le, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) dn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, Le = t.p, Ve(e);
}
function Ve(e = {}) {
	return i(e, O, { value: !0 }), e;
}
function He() {
	return !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Ue = [];
function We() {
	var e = Ue;
	Ue = [], f(e);
}
function Ge(e) {
	if (Ue.length === 0 && !_t) {
		var t = Ue;
		queueMicrotask(() => {
			t === Ue && We();
		});
	}
	Ue.push(e);
}
function Ke() {
	for (; Ue.length > 0;) We();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var qe = ~(g | _ | h);
function N(e, t) {
	e.f = e.f & qe | t;
}
function Je(e) {
	e.f & 512 || e.deps === null ? N(e, h) : N(e, _);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ye(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), N(e, h);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
var Xe = !1;
function Ze() {
	Xe || (Xe = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[ce]?.();
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
	let i = e[ce];
	e[ce] = i ? () => {
		i(), r(!0);
	} : () => r(!0), Ze();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function et(e, t, n, r) {
	let i = He() ? it : st;
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
	var e = U, t = H, n = Le, r = F;
	return function(i = !0) {
		Fn(e), Pn(t), Re(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function nt(e = !0) {
	Fn(null), Pn(null), Re(null), e && F?.deactivate();
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
		ctx: Le,
		deps: null,
		effects: null,
		equals: Se,
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
	r === null && Ee();
	var i = void 0, a = Pt(k), o = !H, s = /* @__PURE__ */ new Set();
	return mn(() => {
		var t = U, n = p();
		i = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== le && n.reject(e);
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
			l?.(), s.delete(n), t !== at && (c.activate(), t ? (a.f |= D, zt(a, t)) : (a.f & 8388608 && (a.f ^= D), zt(a, e)), c.deactivate());
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
	return t.equals = we, t;
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
	!e.equals(t) && (e.wv = Kn(), (!F?.is_fork || e.deps === null) && (F === null ? e.v = t : (F.capture(e, t, !0), mt?.capture(e, t, !0)), e.deps === null)) ? N(e, h) : jn || (ht === null ? Je(e) : (cn() || F?.is_fork) && ht.set(e, t));
}
function dt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Qe(() => {
		t.ac.abort(le), t.ac = null;
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
			for (var r of n.d) N(r, g), t(r);
			for (r of n.m) N(r, _), t(r);
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
		for (let e of this.#u) this.#d.delete(e), N(e, g), this.schedule(e);
		for (let e of this.#d) N(e, _), this.schedule(e);
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
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), N(i, g), this.schedule(i));
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
		this.#m || (this.#m = !0, Ge(() => {
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
			!vt && !_t && Ge(() => {
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
			if (Ke(), F === null) return n;
			F.flush();
		}
	} finally {
		_t = t;
	}
}
function Tt() {
	try {
		je();
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
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), N(e, h);
		for (var n = e.first; n !== null;) kt(n, t), n = n.next;
	}
}
function At(e) {
	N(e, h);
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
		equals: Se,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Ft(e, t) {
	let n = Pt(e, t);
	return Ln(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function It(e, t = !1, n = !0) {
	let r = Pt(e);
	return t || (r.equals = we), r;
}
function I(e, t, n = !1) {
	return H !== null && (!Nn || H.f & 131072) && He() && H.f & 4325394 && (In === null || !In.has(e)) && Fe(), zt(e, n ? Ut(t) : t, bt);
}
var Lt = null, Rt = 0;
function zt(e, t, n = null) {
	if (!e.equals(t)) {
		jn ? Mt.set(e, t) : Mt.has(e) || Mt.set(e, e.v);
		var r = Ct.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && lt(t), ht === null && Je(t);
		}
		e.wv = Kn(), Lt = null, Rt = 0, Ht(e, g, n), Lt = null, He() && U !== null && U.f & 1024 && !(U.f & 96) && (Bn === null ? Vn([e]) : Bn.push(e)), !r.is_fork && jt.size > 0 && !Nt && Bt();
	}
	return t;
}
function Bt() {
	Nt = !1;
	for (let e of jt) {
		e.f & 1024 && N(e, _);
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
function Vt(e) {
	I(e, e.v + 1);
}
function Ht(e, t, n) {
	var r = e.reactions;
	if (r !== null) {
		var i = He(), a = r.length;
		if (Rt += a, Rt > 1e5 && Lt === null && (Lt = /* @__PURE__ */ new Set()), Lt !== null) {
			if (Lt.has(e)) return;
			Lt.add(e);
		}
		for (var o = 0; o < a; o++) {
			var s = r[o], c = s.f;
			if (i || s !== U) {
				var l = (c & g) === 0;
				if (l && N(s, t), c & 131072) jt.add(s);
				else if (c & 2) {
					var u = s;
					ht?.delete(u), Ht(u, _, n);
				} else if (l) {
					var d = s;
					c & 16 && Et !== null && Et.add(d), n === null ? Ot(d) : n.push(d);
				}
			}
		}
	}
}
function Ut(t) {
	if (typeof t != "object" || !t || te in t || O in t) return t;
	let n = l(t);
	if (n !== s && n !== c) return t;
	var r = /* @__PURE__ */ new Map(), i = e(t), o = /* @__PURE__ */ Ft(0), u = null, d = Wn, f = (e) => {
		if (Wn === d) return e();
		var t = H, n = Wn;
		Pn(null), Gn(d);
		var r = e();
		return Pn(t), Gn(n), r;
	};
	return i && r.set("length", /* @__PURE__ */ Ft(t.length, u)), new Proxy(t, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Ne();
			var i = r.get(t);
			return i === void 0 ? f(() => {
				var e = /* @__PURE__ */ Ft(n.value, u);
				return r.set(t, e), e;
			}) : I(i, n.value, !0), !0;
		},
		deleteProperty(e, t) {
			var n = r.get(t);
			if (n === void 0) {
				if (t in e) {
					let e = f(() => /* @__PURE__ */ Ft(k, u));
					r.set(t, e), Vt(o);
				}
			} else I(n, k), Vt(o);
			return !0;
		},
		get(e, n, i) {
			if (n === te) return t;
			var o = r.get(n), s = n in e;
			if (o === void 0 && (!s || a(e, n)?.writable) && (o = f(() => /* @__PURE__ */ Ft(Ut(s ? e[n] : k), u)), r.set(n, o)), o !== void 0) {
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
			if (t === te) return !0;
			var n = r.get(t), i = n !== void 0 && n.v !== k || Reflect.has(e, t);
			return (n !== void 0 || U !== null && (!i || a(e, t)?.writable)) && (n === void 0 && (n = f(() => /* @__PURE__ */ Ft(i ? Ut(e[t]) : k, u)), r.set(t, n)), W(n) === k) ? !1 : i;
		},
		set(e, t, n, s) {
			var c = r.get(t), l = t in e;
			if (i && t === "length") for (var d = n; d < c.v; d += 1) {
				var p = r.get(d + "");
				p === void 0 ? d in e && (p = f(() => /* @__PURE__ */ Ft(k, u)), r.set(d + "", p)) : I(p, k);
			}
			if (c === void 0) (!l || a(e, t)?.writable) && (c = f(() => /* @__PURE__ */ Ft(void 0, u)), I(c, Ut(n)), r.set(t, c));
			else {
				l = c.v !== k;
				var m = f(() => Ut(n));
				I(c, m);
			}
			var h = Reflect.getOwnPropertyDescriptor(e, t);
			if (h?.set && h.set.call(s, n), !l) {
				if (i && typeof t == "string") {
					var g = r.get("length"), _ = Number(t);
					Number.isInteger(_) && _ >= g.v && I(g, _ + 1);
				}
				Vt(o);
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
			Pe();
		}
	});
}
var Wt, Gt, Kt, qt;
function Jt() {
	if (Wt === void 0) {
		Wt = window, Gt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Kt = a(t, "firstChild").get, qt = a(t, "nextSibling").get, u(e) && (e[ae] = void 0, e[ie] = null, e[oe] = void 0, e.__e = void 0), u(n) && (n[se] = void 0);
	}
}
function Yt(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Xt(e) {
	return Kt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Zt(e) {
	return qt.call(e);
}
function L(e, t) {
	if (!A) return /* @__PURE__ */ Xt(e);
	var n = /* @__PURE__ */ Xt(j);
	if (n === null) n = j.appendChild(Yt());
	else if (t && n.nodeType !== 3) {
		var r = Yt();
		return n?.before(r), _e(r), r;
	}
	return t && tn(n), _e(n), n;
}
function R(e, t = !1) {
	if (!A) {
		var n = /* @__PURE__ */ Xt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Zt(n) : n;
	}
	if (t) {
		if (j?.nodeType !== 3) {
			var r = Yt();
			return j?.before(r), _e(r), r;
		}
		tn(j);
	}
	return j;
}
function z(e, t = !1) {
	if (!A) return /* @__PURE__ */ Xt(e);
	var n = L(e, t);
	return M(e), n;
}
function B(e, t = 1, n = !1) {
	let r = A ? j : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Zt(r);
	if (!A) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Yt();
			return r === null ? i?.after(a) : r.before(a), _e(a), a;
		}
		tn(r);
	}
	return _e(r), r;
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
	if (t === null) return H.f |= D, e;
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
	U === null && (H === null && Ae(e), ke()), jn && Oe(e);
}
function on(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function sn(e, t) {
	var n = U;
	n !== null && n.f & 8192 && (e |= v);
	var r = {
		ctx: Le,
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
	return N(t, h), t.teardown = e, t;
}
function un(e) {
	an("$effect");
	var t = U.f;
	if (!H && t & 32 && Le !== null && !Le.i) {
		var n = Le;
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
	return sn(ee | C, e);
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
			e.abort(le);
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
		var n = e === t ? null : /* @__PURE__ */ Zt(e);
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
		e.f ^= v, e.f & 1024 || (N(e, g), Ct.ensure().schedule(e));
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
		var i = n === r ? null : /* @__PURE__ */ Zt(n);
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
		t & 512 && ht === null && N(e, h);
	}
	return !1;
}
function Jn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(In !== null && In.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Jn(a, t, !1) : t === a && (n ? N(a, g) : a.f & 1024 && N(a, _), Ot(a));
	}
}
function Yn(e) {
	var t = Rn, n = zn, r = Bn, i = H, a = In, o = Le, s = Nn, c = Wn, l = e.f;
	Rn = null, zn = 0, Bn = null, H = l & 96 ? null : e, In = null, Re(e.ctx), Nn = !1, Wn = ++Un, e.ac !== null && (Qe(() => {
		e.ac.abort(le);
	}), e.ac = null);
	try {
		e.f |= E;
		var u = e.fn, d = u();
		e.f |= b;
		var f = Xn(e);
		if (He() && Bn !== null && !Nn && f !== null && !(e.f & 6146)) for (var p = 0; p < Bn.length; p++) Jn(Bn[p], e);
		if (i !== null && i !== e) {
			if (Un++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Un;
			if (t !== null) for (let e of t) e.rv = Un;
			Bn !== null && (r === null ? r = Bn : r.push(...Bn));
		}
		return e.f & 8388608 && (e.f ^= D), d;
	} catch (t) {
		return Xn(e), nn(t);
	} finally {
		e.f ^= E, Rn = t, zn = n, Bn = r, H = i, In = a, Re(o), Nn = s, Wn = c;
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
			s.ac.abort(le), s.ac = null, N(s, g);
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
		N(e, h);
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
		if (te in e) ar(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && te in n && ar(n);
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
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (i.__removed = !1, Ge(() => {
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
		if (A) return br(j, null), j;
		i === void 0 && (i = yr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Xt(i)));
		var t = r || Gt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Xt(t), s = t.lastChild;
			br(o, s);
		} else br(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function xr(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = !!(t & 1), a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (A) return br(j, null), j;
		if (!o) {
			var e = /* @__PURE__ */ Xt(yr(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ Xt(e);) o.appendChild(/* @__PURE__ */ Xt(e));
			else o = /* @__PURE__ */ Xt(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ Xt(t), r = t.lastChild;
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
	if (A) return br(j, null), j;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Yt();
	return e.append(t, n), br(t, n), e;
}
function q(e, t) {
	if (A) {
		var n = U;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = j), ve();
	} else e !== null && e.before(t);
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function wr(e) {
	let t = 0, n = Pt(0), r;
	return () => {
		cn() && (W(n), hn(() => (t === 0 && (r = rr(() => e(() => Vt(n)))), t += 1, () => {
			Ge(() => {
				--t, t === 0 && (r?.(), r = void 0, Vt(n));
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
	#t = A ? j : null;
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
				ve();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Tr), A && (this.#e = j);
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
		Ge(r), t && (this.#s = _n(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			t ? he() : (t = !0, n && Ie(), this.#s !== null && wn(this.#s, () => {
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
		e && (this.is_pending = !0, this.#o = _n(() => e(this.#e)), Ge(() => {
			var e = this.#c = document.createDocumentFragment(), t = Yt(), n = !1;
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
		var t = U, n = H, r = Le;
		Fn(this.#i), Pn(this.#i), Re(this.#i.ctx);
		try {
			return Ct.ensure(), e();
		} finally {
			Fn(t), Pn(n), Re(r);
		}
	}
	#C(e, t) {
		this.has_pending_snippet() ? (this.#u += e, this.#u === 0 && (this.#x(t), this.#o && wn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null))) : this.parent && this.parent.#C(e, t);
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Ge(() => {
			this.#d = !1, this.#m && zt(this.#m, this.#l);
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
		this.#a &&= (xn(this.#a), null), this.#o &&= (xn(this.#o), null), this.#s &&= (xn(this.#s), null), A && (_e(this.#t), ye(), _e(be()));
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
		Ge(() => {
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
	n !== (e[se] ??= e.nodeValue) && (e[se] = n, e.nodeValue = `${n}`);
}
function Or(e, t) {
	return Ar(e, t);
}
var kr = /* @__PURE__ */ new Map();
function Ar(e, { target: t, anchor: n, props: i = {}, events: a, context: o, intro: s = !0, transformError: c }) {
	Jt();
	var l = void 0, u = fn(() => {
		var s = n ?? t.appendChild(Yt());
		Er(s, { pending: () => {} }, (t) => {
			ze({});
			var n = Le;
			if (o && (n.c = o), a && (i.$$events = a), A && br(t, null), l = e(t, i) || Ve(), A && (U.nodes.end = j, j === null || j.nodeType !== 8 || j.data !== "]")) throw me(), de;
			Be();
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
						On(r, t), t.append(Yt()), this.#n.set(e, {
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
				var i = document.createDocumentFragment(), a = Yt();
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
		} else A && (this.anchor = j), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Y(e, t, n = !1) {
	var r;
	A && (r = j, ve());
	var i = new Nr(e), a = n ? S : 0;
	function o(e, t) {
		if (A) {
			var n = xe(r);
			if (e !== parseInt(n.substring(1))) {
				var a = be();
				_e(a), i.anchor = a, ge(!1), i.ensure(e, t), ge(!0);
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
	A && ve();
	var r = new Nr(e), i = !He();
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
		r?.has(a) ? (a.f |= T, On(a, document.createDocumentFragment())) : xn(t[i], n);
	}
}
var Rr;
function Z(t, n, i, a, o, s = null) {
	var c = t, l = /* @__PURE__ */ new Map();
	if (n & 4) {
		var u = t;
		c = A ? _e(/* @__PURE__ */ Xt(u)) : u.appendChild(Yt());
	}
	A && ve();
	var d = null, f = /* @__PURE__ */ st(() => {
		var t = i();
		return e(t) ? t : t == null ? [] : r(t);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Br(v, p, c, n, a), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= T, Hr(d, null, c)) : En(d) : wn(d, () => {
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
			A && xe(c) === "[!" != (e === 0) && (c = be(), _e(c), ge(!1), t = !0);
			for (var r = /* @__PURE__ */ new Set(), u = F, v = $t(), y = 0; y < e; y += 1) {
				A && j.nodeType === 8 && j.data === "]" && (c = j, t = !0, ge(!1));
				var b = p[y], x = a(b, y), S = h ? null : l.get(x);
				S ? (S.v && zt(S.v, b), S.i && zt(S.i, y), v && u.unskip_effect(S.e)) : (S = Vr(l, h ? c : Rr ??= Yt(), b, x, y, o, n, i), h || (S.e.f |= T), l.set(x, S)), r.add(x);
			}
			if (e === 0 && s && !d && (h ? d = _n(() => s(c)) : (d = _n(() => s(Rr ??= Yt())), d.f |= T)), e > r.size && De("", "", ""), A && e > 0 && _e(be()), !h) {
				if (m.set(u, r), v) {
					for (let [e, t] of l) r.has(e) || u.skip_effect(t.e);
					u.oncommit(g), u.ondiscard(_);
				} else g(u);
			}
			t && ge(!0), W(f);
		}),
		flags: n,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, A && (c = j);
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
			if (_.f ^= T, _ === l) Hr(_, null, n);
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
		var E = w.length;
		if (E > 0) {
			var ee = i & 4 && s === 0 ? n : null;
			if (o) {
				for (v = 0; v < E; v += 1) w[v].nodes?.a?.measure();
				for (v = 0; v < E; v += 1) w[v].nodes?.a?.fix();
			}
			Ir(e, w, ee);
		}
	}
	o && Ge(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Vr(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Pt(n) : /* @__PURE__ */ It(n, !1, !1) : null, l = o & 2 ? Pt(i) : null;
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
		var o = /* @__PURE__ */ Zt(r);
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
				ir(e), i && Ce(a, e) && (a = e, r.update(e));
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
	var o = e[ae];
	if (A || o !== n || o === void 0) {
		var s = Yr(n, r, a);
		(!A || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[ae] = n;
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
	var i = e[oe];
	if (A || i !== t) {
		var a = Qr(t, r);
		(!A || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[oe] = t;
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
		e[ce] = n, Ge(n), Ze();
	}
}
function oi(e, t) {
	var n = si(e);
	n.value !== (n.value = t ?? void 0) && (e.value !== t || t === 0 && e.nodeName === ii) && (e.value = t ?? "");
}
function $(e, t, n, r) {
	var i = si(e);
	A && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === ri) || i[t] !== (i[t] = n) && (t === "loading" && (e[re] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && li(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function si(e) {
	return e[ie] ??= {
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
		var p = te in e || ne in e;
		f = a(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	o ? [m, h] = gi(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = d(), f && (i && Me(t), f(m)));
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
			let n = t ? W(y) : i && o ? Ut(e) : e;
			return I(y, n), v = !0, c !== void 0 && (c = n), e;
		}
		return jn && v || b.f & 16384 ? y.v : W(y);
	});
}
function vi(e) {
	Le === null && Te("onMount"), un(() => {
		let t = rr(e);
		if (typeof t == "function") return t;
	});
}
function yi(e) {
	Le === null && Te("onDestroy"), vi(() => () => rr(e));
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
	ze(t, !0);
	let n = _i(t, "points", 19, () => []), r = _i(t, "series", 19, () => []), i = _i(t, "format", 3, (e) => String(e)), a = _i(t, "yMax", 3, null), o = _i(t, "refs", 19, () => []), s = _i(t, "bands", 19, () => []), c = _i(t, "smooth", 3, !1), l = _i(t, "live", 3, null), u = _i(t, "states", 3, null), d = _i(t, "aligned", 3, !1), f = _i(t, "onpan", 3, null), p = _i(t, "long", 3, !1), m = _i(t, "seconds", 3, !1), h = _i(t, "height", 3, 190), g = _i(t, "from", 3, null), _ = _i(t, "to", 3, null), v = _i(t, "onClose", 3, null), y = /* @__PURE__ */ Ft(!1), b = /* @__PURE__ */ Ft(400), x = "chart-" + Math.random().toString(36).slice(2, 8);
	function S() {
		I(b, Math.max(260, Math.round(window.innerHeight * .62)), !0), I(y, !0);
	}
	let C = {
		top: 12,
		right: 52,
		bottom: 24,
		left: 48
	}, w = /* @__PURE__ */ Ft(600), T = /* @__PURE__ */ Ft(-1), E = /* @__PURE__ */ Ft(!1), ee = {
		hour: "2-digit",
		minute: "2-digit"
	}, D = (e) => new Date(e).toLocaleString(void 0, p() ? {
		day: "2-digit",
		month: "2-digit",
		...ee
	} : m() ? {
		...ee,
		second: "2-digit"
	} : ee), te = (e) => new Date(e).toLocaleString(void 0, p() ? {
		day: "2-digit",
		month: "2-digit"
	} : m() ? {
		...ee,
		second: "2-digit"
	} : ee), O = /* @__PURE__ */ P(() => g() ?? (n().length ? n()[0].time : 0)), ne = /* @__PURE__ */ P(() => f() ? _() : Math.max(_() ?? 0, n().length ? n().at(-1).time : 1)), re = /* @__PURE__ */ P(() => Math.max(10, W(w) - C.left - C.right)), ie = /* @__PURE__ */ P(() => h() - C.top - C.bottom);
	function ae(e) {
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
	let oe = /* @__PURE__ */ P(() => {
		if (a() !== null) return a();
		let e = 0;
		for (let t of n()) if (!(f() && (t.time < W(O) || t.time > W(ne)))) for (let n of r()) e = Math.max(e, t[n.key] ?? 0);
		for (let t of o()) e = Math.max(e, t.value);
		return ae(e * 1.05);
	}), se = /* @__PURE__ */ P(() => [
		0,
		.25,
		.5,
		.75,
		1
	].map((e) => W(oe) * e)), ce = (e) => C.left + (W(ne) === W(O) ? W(re) : (e - W(O)) / (W(ne) - W(O)) * W(re)), le = (e) => C.top + W(ie) - Math.max(0, Math.min(e, W(oe))) / W(oe) * W(ie), ue = /* @__PURE__ */ P(() => l() ? [...n(), l()] : n()), de = /* @__PURE__ */ P(() => {
		if (W(ue).length < 2) return [W(ue)];
		let e = W(ue).slice(1).map((e, t) => e.time - W(ue)[t].time), t = [[W(ue)[0]]];
		for (let n = 1; n < W(ue).length; n++) {
			let r = e[n - 1];
			(r > (Math.max(e[n - 2] ?? 0, e[n] ?? 0) || r) * 3 || s().some((e) => W(ue)[n - 1].time <= e.from && W(ue)[n].time >= e.to)) && t.push([]), t.at(-1).push(W(ue)[n]);
		}
		return t;
	});
	function k(e, t) {
		let n = e.map((e) => [ce(e.time), le(e[t] ?? 0)]);
		return `M${n[0][0].toFixed(1)},${n[0][1].toFixed(1)}` + (c() ? Ci(n) : n.slice(1).map(([e, t]) => `L${e.toFixed(1)},${t.toFixed(1)}`)).join("");
	}
	function fe(e) {
		return W(de).filter((e) => e.length).map((t) => k(t, e)).join("");
	}
	let pe = /* @__PURE__ */ P(() => u() ? Ti(wi(u().points, u().phases, u().live), ce, le, u().gap ?? 3 * Math.max(2e4, (W(ne) - W(O)) / 300)) : []);
	function me(e) {
		let t = le(0).toFixed(1);
		return W(de).filter((e) => e.length > 1).map((n) => `${k(n, e)}L${ce(n.at(-1).time).toFixed(1)},${t}L${ce(n[0].time).toFixed(1)},${t}Z`).join("");
	}
	let he = /* @__PURE__ */ P(() => {
		if (!n().length) return [];
		let e = W(ue).at(-1), t = r().map((t) => ({
			...t,
			y: le(e[t.key] ?? 0),
			value: e[t.key]
		})), i = [...t].sort((e, t) => e.y - t.y);
		for (let e = 1; e < i.length; e++) if (i[e].y - i[e - 1].y < 14) return [];
		return t;
	});
	function A(e) {
		if (!n().length || e < ce(n()[0].time) - 8) return -1;
		let t = W(O) + (e - C.left) / W(re) * (W(ne) - W(O)), r = 0, i = n().length - 1;
		for (; i - r > 1;) {
			let e = r + i >> 1;
			n()[e].time < t ? r = e : i = e;
		}
		return Math.abs(n()[r].time - t) <= Math.abs(n()[i].time - t) ? r : i;
	}
	let ge = null;
	function j(e) {
		f() && (ge = e.clientX, e.currentTarget.setPointerCapture(e.pointerId));
	}
	function _e(e) {
		let t = e.currentTarget.getBoundingClientRect();
		if (ge !== null) {
			let n = (e.clientX - ge) / t.width * W(w);
			ge = e.clientX, I(T, -1), f()(n / W(re) * (W(ne) - W(O)));
		} else I(T, A((e.clientX - t.left) / t.width * W(w)), !0);
	}
	function ve(e) {
		let t = (e) => {
			if (!f()) return;
			e.preventDefault();
			let t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
			f()(Math.sign(t) * Math.min(1, Math.abs(t) / 100) * (W(ne) - W(O)) * .1);
		};
		return e.addEventListener("wheel", t, { passive: !1 }), { destroy: () => e.removeEventListener("wheel", t) };
	}
	function ye(e) {
		if (n().length) {
			if (e.key === "ArrowLeft") I(T, Math.max(0, (W(T) < 0 ? n().length : W(T)) - 1), !0);
			else if (e.key === "ArrowRight") I(T, Math.min(n().length - 1, W(T) + 1), !0);
			else if (e.key === "Escape") I(T, -1);
			else return;
			e.preventDefault();
		}
	}
	let be = /* @__PURE__ */ P(() => W(T) >= 0 && W(T) < n().length ? n()[W(T)] : null), xe = /* @__PURE__ */ P(() => W(be) ? Math.min(Math.max(ce(W(be).time) + 12, 0), W(w) - 170) : 0), Se = /* @__PURE__ */ P(() => d() || !!f()), Ce = [
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
	].map((e) => e * 1e3), we = /* @__PURE__ */ P(() => {
		if (!n().length && !s().length) return [];
		if (!W(Se)) return [
			0,
			.25,
			.5,
			.75,
			1
		].map((e) => W(O) + (W(ne) - W(O)) * e);
		let e = Ce.find((e) => (W(ne) - W(O)) / e <= 6) ?? 432e6, t = [];
		for (let n = Math.ceil(W(O) / e) * e; n <= W(ne); n += e) t.push(n);
		return t;
	});
	var Te = Xi();
	fr("keydown", Wt, (e) => W(y) && e.key === "Escape" && I(y, !1));
	var Ee = R(Te), De = L(Ee), Oe = L(De), ke = z(Oe, !0), Ae = B(Oe, 2), je = L(Ae), Me = z(je, !0), Ne = B(je, 2), Pe = (e) => {
		var t = Ei(), n = z(t);
		V((e) => J(n, `✕ ${e ?? ""}`), [() => Si("common.close")]), G("click", t, function(...e) {
			v()?.apply(this, e);
		}), q(e, t);
	}, Fe = (e) => {
		var t = Di();
		V((e, n) => {
			$(t, "title", e), $(t, "aria-label", n);
		}, [() => Si("health.expand"), () => Si("health.expand")]), G("click", t, S), q(e, t);
	};
	Y(Ne, (e) => {
		v() ? e(Pe) : e(Fe, -1);
	}), M(Ae), M(De);
	var Ie = B(De, 2), Le = (e) => {
		var t = Ai(), n = L(t), i = (e) => {
			var t = Cr();
			Z(R(t), 17, r, X, (e, t) => {
				var n = Oi(), r = L(n), i = B(r, 1, !0);
				M(n), V(() => {
					ei(r, `background: ${W(t).color ?? ""}`), J(i, W(t).label);
				}), q(e, n);
			}), q(e, t);
		};
		Y(n, (e) => {
			r().length > 1 && e(i);
		}), Z(B(n, 2), 17, () => [...new Map(s().map((e) => [e.label, e])).values()], X, (e, t) => {
			var n = ki(), r = L(n), i = B(r, 1, !0);
			M(n), V(() => {
				ei(r, W(t).color ? `background: ${W(t).color}` : ""), J(i, W(t).label);
			}), q(e, n);
		}), M(t), q(e, t);
	};
	Y(Ie, (e) => {
		(r().length > 1 || s().length) && e(Le);
	});
	var Re = B(Ie, 2), Ve = (e) => {
		var t = ji(), n = z(t, !0);
		V((e) => J(n, e), [() => Si("health.noData")]), q(e, t);
	}, He = (e) => {
		var t = Fi(), a = L(t), o = L(a), s = L(o), c = L(s), l = z(c, !0);
		Z(B(c), 17, r, X, (e, t) => {
			var n = Mi(), r = z(n, !0);
			V(() => J(r, W(t).label)), q(e, n);
		}), M(s), M(o);
		var u = B(o);
		Z(u, 21, () => [...n()].reverse(), (e) => e.time, (e, t) => {
			var n = Pi(), a = L(n), o = z(a, !0);
			Z(B(a), 17, r, X, (e, n) => {
				var r = Ni(), a = z(r, !0);
				V((e) => J(a, e), [() => i()(W(t)[W(n).key])]), q(e, r);
			}), M(n), V((e) => J(o, e), [() => D(W(t).time)]), q(e, n);
		}), M(u), M(a), M(t), V((e) => J(l, e), [() => Si("health.time")]), q(e, t);
	}, Ue = (e) => {
		var n = Ji(), a = L(n);
		let c;
		var l = L(a);
		Z(l, 17, s, X, (e, t) => {
			let n = /* @__PURE__ */ P(() => ce(Math.max(W(t).from, W(O)))), r = /* @__PURE__ */ P(() => Math.max(2, ce(Math.min(W(t).to, W(ne))) - W(n)));
			var i = Li(), a = R(i), o = B(a), s = (e) => {
				var r = Ii(), i = z(r, !0);
				V(() => {
					$(r, "x", W(n) + 6), $(r, "y", C.top + 14), J(i, W(t).label);
				}), q(e, r);
			};
			Y(o, (e) => {
				W(r) >= 34 && e(s);
			}), V(() => {
				$(a, "x", W(n)), $(a, "y", C.top), $(a, "width", W(r)), $(a, "height", W(ie)), ei(a, W(t).color ? `fill: ${W(t).color}` : "");
			}), q(e, i);
		});
		var d = B(l);
		Z(d, 17, () => W(se), X, (e, t) => {
			var n = Ri(), r = R(n), a = B(r), o = z(a, !0);
			V((e, t, n, i) => {
				$(r, "x1", C.left), $(r, "x2", C.left + W(re)), $(r, "y1", e), $(r, "y2", t), $(a, "x", C.left - 6), $(a, "y", n), J(o, i);
			}, [
				() => le(W(t)),
				() => le(W(t)),
				() => le(W(t)) + 4,
				() => i()(W(t))
			]), q(e, n);
		});
		var p = B(d);
		Z(p, 17, () => W(we), X, (e, t, n) => {
			var r = Ii(), i = z(r, !0);
			V((e, t) => {
				$(r, "x", e), $(r, "y", h() - 6), $(r, "text-anchor", W(Se) ? "middle" : n === 0 ? "start" : n === 4 ? "end" : "middle"), J(i, t);
			}, [() => ce(W(t)), () => te(W(t))]), q(e, r);
		});
		var m = B(p);
		Z(m, 17, o, X, (e, t) => {
			var n = zi(), r = R(n), i = B(r), a = z(i, !0);
			V((e, n, o) => {
				$(r, "x1", C.left), $(r, "x2", C.left + W(re)), $(r, "y1", e), $(r, "y2", n), ei(r, W(t).color ? `stroke: ${W(t).color}` : ""), $(i, "x", C.left + 4), $(i, "y", o), J(a, W(t).label);
			}, [
				() => le(W(t).value),
				() => le(W(t).value),
				() => le(W(t).value) - 4
			]), q(e, n);
		});
		var g = B(m), _ = L(g);
		$(_, "y", 0), M(g);
		var v = B(g), y = L(v), b = (e) => {
			var t = Cr();
			Z(R(t), 17, () => W(pe), X, (e, t) => {
				var n = Bi();
				V(() => {
					$(n, "d", W(t).d), ei(n, `stroke: ${W(t).color ?? ""}`);
				}), q(e, n);
			}), q(e, t);
		}, S = (e) => {
			var t = Hi(), n = R(t), i = (e) => {
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
		}), M(v);
		var E = B(v);
		Z(E, 17, () => W(he), X, (e, t) => {
			var n = Ui(), r = z(n, !0);
			V((e) => {
				$(n, "x", C.left + W(re) + 6), $(n, "y", W(t).y + 4), J(r, e);
			}, [() => i()(W(t).value)]), q(e, n);
		});
		var ee = B(E), ae = (e) => {
			var t = Gi(), n = R(t);
			Z(B(n), 17, r, X, (e, t) => {
				var n = Wi();
				V((e, r) => {
					$(n, "cx", e), $(n, "cy", r), ei(n, `fill: ${W(t).color ?? ""}`);
				}, [() => ce(W(be).time), () => le(W(be)[W(t).key] ?? 0)]), q(e, n);
			}), V((e, t) => {
				$(n, "x1", e), $(n, "x2", t), $(n, "y1", C.top), $(n, "y2", C.top + W(ie));
			}, [() => ce(W(be).time), () => ce(W(be).time)]), q(e, t);
		};
		Y(ee, (e) => {
			W(be) && e(ae);
		}), M(a), Wr(a, (e) => ve?.(e));
		var oe = B(a, 2), ue = (e) => {
			var t = qi(), n = L(t), a = z(n, !0);
			Z(B(n, 2), 17, r, X, (e, t) => {
				var n = Ki(), r = L(n), a = B(r), o = z(a, !0), s = z(B(a), !0);
				M(n), V((e) => {
					ei(r, `background: ${W(t).color ?? ""}`), J(o, e), J(s, W(t).label);
				}, [() => i()(W(be)[W(t).key])]), q(e, n);
			}), M(t), V((e) => {
				ei(t, `left: ${W(xe) ?? ""}px`), J(a, e);
			}, [() => D(W(be).time)]), q(e, t);
		};
		Y(oe, (e) => {
			W(be) && e(ue);
		}), M(n), V(() => {
			$(a, "viewBox", `0 0 ${W(w) ?? ""} ${h() ?? ""}`), $(a, "height", h()), $(a, "aria-label", t.title), c = Q(a, 0, "svelte-z8jt5q", null, c, { pans: f() }), $(g, "id", x), $(_, "x", C.left), $(_, "width", W(re)), $(_, "height", h()), $(v, "clip-path", `url(#${x})`);
		}), G("pointerdown", a, j), G("pointerup", a, () => ge = null), fr("pointercancel", a, () => ge = null), G("pointermove", a, _e), fr("pointerleave", a, () => I(T, -1)), G("keydown", a, ye), mi(n, "clientWidth", (e) => I(w, e)), q(e, n);
	};
	Y(Re, (e) => {
		!n().length && !s().length ? e(Ve) : W(E) ? e(He, 1) : e(Ue, -1);
	}), M(Ee);
	var We = B(Ee, 2), Ge = (e) => {
		var h = Yi(), v = L(h);
		Zi(L(v), {
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
			onClose: () => I(y, !1)
		}), M(v), M(h), V(() => $(v, "aria-label", t.title)), G("click", h, (e) => e.target === e.currentTarget && I(y, !1)), q(e, h);
	};
	Y(We, (e) => {
		W(y) && e(Ge);
	}), V((e) => {
		J(ke, t.title), $(je, "aria-pressed", W(E)), J(Me, e);
	}, [() => W(E) ? Si("health.chart") : Si("health.table")]), G("click", je, () => I(E, !W(E))), q(e, Te), Be();
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
		ev_teleport: "Teleport",
		play: "Abspielen",
		speed: "Geschwindigkeit"
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
		ev_teleport: "Teleport",
		play: "Play",
		speed: "Speed"
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
var ia = /* @__PURE__ */ K("<button> </button>"), aa = /* @__PURE__ */ K("<span class=\"gap svelte-pbz4pw\"></span>"), oa = /* @__PURE__ */ K("<!> <button></button>", 1), sa = /* @__PURE__ */ K("<button></button>"), ca = /* @__PURE__ */ K("<div class=\"strip svelte-pbz4pw\" role=\"group\"><!> <!></div>"), la = /* @__PURE__ */ K("<div class=\"player svelte-pbz4pw\"><button class=\"secondary small svelte-pbz4pw\">◀</button> <button class=\"small svelte-pbz4pw\"> </button> <button class=\"secondary small svelte-pbz4pw\">▶</button> <input class=\"scrub svelte-pbz4pw\" type=\"range\" min=\"0\"/> <span class=\"when svelte-pbz4pw\"> </span> <div class=\"speeds svelte-pbz4pw\" role=\"group\"></div></div> <!>", 1), ua = /* @__PURE__ */ Sr("<image width=\"256\" height=\"256\" preserveAspectRatio=\"none\" class=\"tile svelte-pbz4pw\"></image>"), da = /* @__PURE__ */ Sr("<image preserveAspectRatio=\"none\" class=\"tile svelte-pbz4pw\"></image>"), fa = /* @__PURE__ */ Sr("<rect class=\"mark svelte-pbz4pw\"><title> </title></rect>"), pa = /* @__PURE__ */ Sr("<polyline class=\"path old svelte-pbz4pw\"></polyline>"), ma = /* @__PURE__ */ Sr("<polyline class=\"path svelte-pbz4pw\"></polyline>"), ha = /* @__PURE__ */ Sr("<!><!>", 1), ga = /* @__PURE__ */ Sr("<circle class=\"ent svelte-pbz4pw\"><title> </title></circle>"), _a = /* @__PURE__ */ Sr("<path class=\"desp svelte-pbz4pw\"><title> </title></path>"), va = /* @__PURE__ */ Sr("<rect width=\"3\" height=\"3\"><title> </title></rect>"), ya = /* @__PURE__ */ Sr("<circle r=\"2.6\" class=\"other svelte-pbz4pw\"><title> </title></circle>"), ba = /* @__PURE__ */ K("<div><span class=\"svelte-pbz4pw\"> </span><b class=\"svelte-pbz4pw\"> </b> </div>"), xa = /* @__PURE__ */ K("<div class=\"row svelte-pbz4pw\"><b class=\"svelte-pbz4pw\"> </b> </div>"), Sa = /* @__PURE__ */ K("<div class=\"row muted svelte-pbz4pw\"> </div>"), Ca = /* @__PURE__ */ K("<div class=\"row svelte-pbz4pw\"><b class=\"svelte-pbz4pw\"> </b></div>"), wa = /* @__PURE__ */ K("<div> </div>"), Ta = /* @__PURE__ */ K("<div class=\"row svelte-pbz4pw\"><span class=\"svelte-pbz4pw\"> </span> </div>"), Ea = /* @__PURE__ */ K("<h4 class=\"t-title svelte-pbz4pw\"> <span class=\"muted\"> </span></h4> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!> <!> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!> <!> <!> <!></section>", 1), Da = /* @__PURE__ */ K("<div class=\"row svelte-pbz4pw\"><span class=\"svelte-pbz4pw\"> </span> <b class=\"svelte-pbz4pw\"> </b> </div>"), Oa = /* @__PURE__ */ K("<h4 class=\"t-title svelte-pbz4pw\"> </h4> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section>", 1), ka = /* @__PURE__ */ K("<span><i class=\"line svelte-pbz4pw\"></i> </span>"), Aa = /* @__PURE__ */ K("<small class=\"svelte-pbz4pw\"> </small>"), ja = /* @__PURE__ */ K("<span class=\"svelte-pbz4pw\"> <!></span>"), Ma = /* @__PURE__ */ K("<span class=\"muted small svelte-pbz4pw\"> </span>"), Na = /* @__PURE__ */ K("<h4 class=\"svelte-pbz4pw\"> </h4> <div class=\"inv svelte-pbz4pw\"></div>", 1), Pa = /* @__PURE__ */ K("<div class=\"lmap svelte-pbz4pw\"><div class=\"lhead svelte-pbz4pw\"><div><h3 class=\"svelte-pbz4pw\"> </h3> <p class=\"muted small svelte-pbz4pw\"> </p></div> <div class=\"layers svelte-pbz4pw\"><button> </button> <button> </button> <button> </button> <!> <button> </button></div></div> <!> <div class=\"split svelte-pbz4pw\"><div class=\"mapbox svelte-pbz4pw\"><svg preserveAspectRatio=\"none\" class=\"svelte-pbz4pw\"><rect class=\"ground svelte-pbz4pw\"></rect><!><!><!><!><!><!><!><!><circle r=\"3.4\" class=\"me svelte-pbz4pw\"><title> </title></circle></svg> <span class=\"coords svelte-pbz4pw\"> </span></div> <div class=\"table svelte-pbz4pw\"><!></div></div> <div class=\"legend muted small svelte-pbz4pw\"><span><i style=\"background: var(--bad)\" class=\"svelte-pbz4pw\"></i> </span> <span><i style=\"background: var(--good)\" class=\"svelte-pbz4pw\"></i> </span> <span><i style=\"background: var(--warn)\" class=\"svelte-pbz4pw\"></i> </span> <span><i style=\"background: var(--muted)\" class=\"svelte-pbz4pw\"></i> </span> <span> </span> <span> </span> <!></div> <!></div>");
function Fa(e, t) {
	ze(t, !0);
	let n = _i(t, "mark", 3, null), r = (e, n) => $i(t.lang, e, n), i = /* @__PURE__ */ P(() => t.log.area ?? null), a = /* @__PURE__ */ P(() => t.log.timeline ?? null), o = /* @__PURE__ */ P(() => W(a)?.minutes ?? []), s = /* @__PURE__ */ P(() => W(a)?.types ?? []), c = /* @__PURE__ */ P(() => W(a)?.categories ?? []), l = /* @__PURE__ */ P(() => W(a)?.chunks ?? []), u = /* @__PURE__ */ P(() => Object.values(W(a)?.tiles ?? {}).map((e) => ({
		...e,
		image: ea(e.image)
	})).filter((e) => e.image)), d = /* @__PURE__ */ P(() => ea(W(i)?.image)), f = /* @__PURE__ */ P(() => {
		let e = [];
		return W(o).forEach((t, n) => {
			for (let r of t.frames ?? []) e.push({
				kind: "frame",
				mi: n,
				time: ra(r[0]),
				world: String(r[1]),
				x: ra(r[2]),
				z: ra(r[3]),
				refs: r[4] ?? []
			});
		}), W(i) && e.push({
			kind: "created",
			mi: -1,
			time: ra(t.log.time),
			world: String(W(i).world),
			x: ra(W(i).center?.[0]),
			z: ra(W(i).center?.[1])
		}), e;
	}), p = /* @__PURE__ */ Ft(-1), h = /* @__PURE__ */ P(() => W(p) < 0 || W(p) >= W(f).length ? W(f).length - 1 : W(p)), g = /* @__PURE__ */ P(() => W(f)[W(h)]), _ = /* @__PURE__ */ P(() => W(g) && W(g).mi >= 0 ? W(o)[W(g).mi] : null), v = [
		10,
		30,
		60
	], y = /* @__PURE__ */ Ft(30), b = /* @__PURE__ */ Ft(!1), x = null;
	function S() {
		W(h) >= W(f).length - 1 ? w() : I(p, W(h) + 1);
	}
	function C() {
		if (W(b)) return w();
		W(h) >= W(f).length - 1 && I(p, 0), I(b, !0), x = setInterval(S, 5e3 / W(y));
	}
	function w() {
		I(b, !1), clearInterval(x);
	}
	function T(e) {
		I(y, e, !0), W(b) && (clearInterval(x), x = setInterval(S, 5e3 / W(y)));
	}
	yi(w);
	let E = (e) => {
		w(), I(p, Math.max(0, Math.min(W(f).length - 1, e)), !0);
	}, ee = (e) => W(f).findIndex((t) => t.mi === e), D = Ut({
		entities: !0,
		despawned: !0,
		deaths: !0,
		path: !0,
		players: !0
	}), te = {
		hostile: "var(--bad)",
		passive: "var(--good)",
		item: "var(--warn)",
		projectile: "var(--muted)",
		vehicle: "var(--muted)",
		other: "var(--muted)"
	}, O = /* @__PURE__ */ P(() => W(g) ? {
		x: W(g).x - 128,
		z: W(g).z - 128
	} : {
		x: 0,
		z: 0
	}), ne = /* @__PURE__ */ P(() => W(g) ? W(u).filter((e) => e.world === W(g).world && e.x0 < W(O).x + 256 && e.x0 + 256 > W(O).x && e.z0 < W(O).z + 256 && e.z0 + 256 > W(O).z) : []);
	function re(e) {
		let t = [];
		for (let n of e) {
			let e = W(l)[n] ?? [];
			for (let n = 0; n + 4 < e.length; n += 5) t.push([
				W(s)[e[n]] ?? "?",
				W(c)[e[n + 1]] ?? "other",
				e[n + 2],
				e[n + 3],
				e[n + 4]
			]);
		}
		return t;
	}
	let ie = /* @__PURE__ */ P(() => W(g)?.kind === "frame" ? re(W(g).refs) : W(i)?.entities ?? []), ae = 2e4, oe = /* @__PURE__ */ P(() => W(o).flatMap((e) => e.despawnRows ?? [])), se = /* @__PURE__ */ P(() => W(o).flatMap((e) => e.deaths ?? [])), ce = /* @__PURE__ */ P(() => W(g)?.kind === "frame" ? W(oe).filter((e) => e[0] <= W(g).time && e[0] > W(g).time - ae) : W(i)?.despawned?.rows ?? []), le = /* @__PURE__ */ P(() => W(g)?.kind === "frame" ? W(se).filter((e) => e.time <= W(g).time && e.time > W(g).time - ae) : W(i)?.deaths?.rows ?? []), ue = (e) => W(g)?.kind === "frame" ? Math.max(.25, 1 - (W(g).time - e) / ae) : 1, de = /* @__PURE__ */ P(() => {
		if (!W(g)) return {
			old: [],
			now: []
		};
		let e = [], t = [], n = null, r = [];
		for (let i of W(f)) {
			if (i.kind !== "frame" || i.time > W(g).time) break;
			if (i.world !== W(g).world) {
				t.length > 1 && e.push(t), t = [];
				continue;
			}
			let a = [i.x + .5, i.z + .5];
			i.mi === W(g).mi ? r.push(a) : (n !== null && i.mi !== n && t.length && (t = [t.at(-1)]), t.push(a), n = i.mi);
		}
		return t.length > 1 && e.push(t), e.length && r.length && r.unshift(e.at(-1).at(-1)), {
			old: e,
			now: r
		};
	}), k = (e) => new Date(e).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}), fe = (e) => new Date(e).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit"
	}), pe = (e) => String(e).replace(/^item:/, "").replace(/^player:/, ""), me = (e, t = 6) => Object.entries(e ?? {}).sort((e, t) => t[1] - e[1]).slice(0, t).map(([e, t]) => `${t}× ${pe(e)}`).join(", "), he = (e) => Object.values(e ?? {}).reduce((e, t) => e + ra(t), 0), A = (e) => re(e ?? []).reduce((e, [t, , , , n]) => (e[t] = (e[t] ?? 0) + n, e), {}), ge = /* @__PURE__ */ P(() => {
		let e = t.log.health?.fields ?? [];
		return (t.log.health?.rows ?? []).map((t) => Object.fromEntries(e.map((e, n) => [e, t[n]])));
	}), j = /* @__PURE__ */ P(() => {
		if (!W(_)) return null;
		let e = W(_), n = e.start, i = e.start + 6e4, a = A(e.frames?.at(-1)?.[4]), s = W(g).mi > 0 ? W(o)[W(g).mi - 1] : null, c = s ? A(s.frames?.at(-1)?.[4]) : null, l = [];
		c && (l = [.../* @__PURE__ */ new Set([...Object.keys(c), ...Object.keys(a)])].map((e) => [e, (a[e] ?? 0) - (c[e] ?? 0)]).filter(([, e]) => e !== 0).sort((e, t) => Math.abs(t[1]) - Math.abs(e[1])).slice(0, 4));
		let u = W(ge).filter((e) => e.time >= n && e.time < i), d = (t.log.console?.lines ?? []).filter(([e, t]) => e >= n && e < i && (t === "warn" || t === "error")), f = (t.log.events ?? []).filter((e) => e.time >= n && e.time < i), p = (e) => `${Math.round(he(e) * 10) / 10} (${Object.entries(e).map(([e, t]) => `${pe(e)} ${t}`).join(", ")})`;
		return {
			actions: [
				he(e.broken) && [r("mBroken"), me(e.broken)],
				he(e.placed) && [r("mPlaced"), me(e.placed)],
				he(e.picked) && [r("mPicked"), me(e.picked)],
				he(e.dropped) && [r("mDropped"), me(e.dropped)],
				he(e.damageTaken) && [r("mTaken"), p(e.damageTaken)],
				he(e.damageDealt) && [r("mDealt"), p(e.damageDealt)],
				e.commands?.length && [r("mCommands"), e.commands.join("  ")]
			].filter(Boolean),
			events: e.events ?? [],
			around: [
				[r("entities"), he(a) + (l.length ? " (" + l.map(([e, t]) => `${t > 0 ? "+" : ""}${t} ${pe(e)}`).join(", ") + ")" : "")],
				he(e.despawned) && [r("layerDespawned"), me(e.despawned)],
				e.deaths?.length && [r("layerDeaths"), e.deaths.map((e) => pe(e.type)).join(", ")],
				e.came?.length && [r("mCame"), e.came.join(", ")],
				e.went?.length && [r("mWent"), e.went.join(", ")]
			].filter(Boolean),
			server: u.length ? [["TPS", `${Math.min(...u.map((e) => e.tps)).toFixed(1)} – ${(u.reduce((e, t) => e + t.tps, 0) / u.length).toFixed(1)}`], [r("mspt"), `Ø ${(u.reduce((e, t) => e + t.mspt, 0) / u.length).toFixed(1)} ms · max ${Math.max(...u.map((e) => e.msptMax)).toFixed(0)} ms`]] : [],
			lines: d.slice(0, 4),
			lineCount: d.length,
			evts: f.slice(0, 4)
		};
	});
	function _e(e) {
		return e.events?.some((e) => e.kind === "death") || (t.log.console?.lines ?? []).some(([t, n]) => n === "error" && t >= e.start && t < e.start + 6e4) ? "bad" : he(e.damageTaken) > 6 || e.deaths?.length ? "warn" : he(e.broken) + he(e.placed) + (e.events?.length ?? 0) + (e.commands?.length ?? 0) > 0 ? "act" : "calm";
	}
	let ve = (e) => e > 0 && W(o)[e].start - W(o)[e - 1].start > 6e4, ye = (e) => Math.min(4, .9 + Math.log2(ra(e) + 1) * .6);
	var be = Cr(), xe = R(be), Se = (e) => {
		var a = Pa(), s = L(a), c = L(s), l = L(c), u = z(l, !0), p = z(B(l, 2), !0);
		M(c);
		var x = B(c, 2), S = L(x);
		let w;
		var re = z(S, !0), ae = B(S, 2);
		let oe;
		var se = z(ae, !0), me = B(ae, 2);
		let he;
		var A = z(me, !0), ge = B(me, 2), be = (e) => {
			var t = ia();
			let n;
			var i = z(t, !0);
			V((e) => {
				n = Q(t, 1, "svelte-pbz4pw", null, n, { on: D.path }), J(i, e);
			}, [() => r("layerPath")]), G("click", t, () => D.path = !D.path), q(e, t);
		};
		Y(ge, (e) => {
			W(o).length && e(be);
		});
		var xe = B(ge, 2);
		let Se;
		var Ce = z(xe, !0);
		M(x), M(s);
		var we = B(s, 2), Te = (e) => {
			var t = la(), n = R(t), a = L(n), s = B(a, 2), c = z(s, !0), l = B(s, 2), u = B(l, 2);
			ai(u);
			var d = B(u, 2), p = z(d, !0), m = B(d, 2);
			Z(m, 21, () => v, X, (e, t) => {
				var n = ia();
				let r;
				var i = z(n);
				V(() => {
					r = Q(n, 1, "svelte-pbz4pw", null, r, { on: W(y) === W(t) }), J(i, `${W(t) ?? ""}×`);
				}), G("click", n, () => T(W(t))), q(e, n);
			}), M(m), M(n);
			var _ = B(n, 2), x = (e) => {
				var t = ca(), n = L(t);
				Z(n, 17, () => W(o), X, (e, t, n) => {
					var i = oa(), a = R(i), o = (e) => {
						var t = aa();
						V((e) => $(t, "title", e), [() => r("offline")]), q(e, t);
					}, s = /* @__PURE__ */ P(() => ve(n));
					Y(a, (e) => {
						W(s) && e(o);
					});
					var c = B(a, 2);
					let l;
					V((e, t, r) => {
						l = Q(c, 1, `seg ${e ?? ""}`, "svelte-pbz4pw", l, { sel: W(g).mi === n }), $(c, "title", t), $(c, "aria-label", r);
					}, [
						() => _e(W(t)),
						() => fe(W(t).start),
						() => fe(W(t).start)
					]), G("click", c, () => E(ee(n))), q(e, i);
				});
				var a = B(n, 2), s = (e) => {
					var t = sa();
					let n;
					V((e, r) => {
						n = Q(t, 1, "seg created svelte-pbz4pw", null, n, { sel: W(g).kind === "created" }), $(t, "title", e), $(t, "aria-label", r);
					}, [() => r("created"), () => r("created")]), G("click", t, () => E(W(f).length - 1)), q(e, t);
				};
				Y(a, (e) => {
					W(i) && e(s);
				}), M(t), V((e) => $(t, "aria-label", e), [() => r("minutes")]), q(e, t);
			};
			Y(_, (e) => {
				W(o).length && e(x);
			}), V((e, t, n, r, i, o) => {
				a.disabled = W(h) === 0, $(a, "aria-label", e), $(s, "aria-label", t), J(c, W(b) ? "❚❚" : "▶"), l.disabled = W(h) === W(f).length - 1, $(l, "aria-label", n), $(u, "max", W(f).length - 1), oi(u, W(h)), $(u, "aria-label", r), J(p, i), $(m, "aria-label", o);
			}, [
				() => r("prev"),
				() => r("play"),
				() => r("next"),
				() => r("minutes"),
				() => W(g).kind === "created" ? r("created") : k(W(g).time),
				() => r("speed")
			]), G("click", a, () => E(W(h) - 1)), G("click", s, C), G("click", l, () => E(W(h) + 1)), G("input", u, (e) => E(Number(e.currentTarget.value))), q(e, t);
		};
		Y(we, (e) => {
			W(f).length > 1 && e(Te);
		});
		var Ee = B(we, 2), De = L(Ee), Oe = L(De), ke = L(Oe);
		$(ke, "width", 256), $(ke, "height", 256);
		var Ae = B(ke);
		Z(Ae, 17, () => W(ne), X, (e, t) => {
			var n = ua();
			V(() => {
				$(n, "href", W(t).image), $(n, "x", W(t).x0), $(n, "y", W(t).z0);
			}), q(e, n);
		});
		var je = B(Ae), Me = (e) => {
			var t = da();
			V(() => {
				$(t, "href", W(d)), $(t, "x", W(i).x0), $(t, "y", W(i).z0), $(t, "width", W(i).size), $(t, "height", W(i).size);
			}), q(e, t);
		};
		Y(je, (e) => {
			W(g).kind === "created" && W(d) && e(Me);
		});
		var Ne = B(je), Pe = (e) => {
			var t = fa(), r = z(L(t), !0);
			M(t), V(() => {
				$(t, "x", n().x0), $(t, "y", n().z0), $(t, "width", n().x1 - n().x0 + 1), $(t, "height", n().z1 - n().z0 + 1), J(r, n().label);
			}), q(e, t);
		};
		Y(Ne, (e) => {
			n() && e(Pe);
		});
		var Fe = B(Ne), Ie = (e) => {
			var t = ha(), n = R(t);
			Z(n, 17, () => W(de).old, X, (e, t) => {
				var n = pa();
				V((e) => $(n, "points", e), [() => W(t).map((e) => e.join(",")).join(" ")]), q(e, n);
			});
			var r = B(n), i = (e) => {
				var t = ma();
				V((e) => $(t, "points", e), [() => W(de).now.map((e) => e.join(",")).join(" ")]), q(e, t);
			};
			Y(r, (e) => {
				W(de).now.length > 1 && e(i);
			}), q(e, t);
		};
		Y(Fe, (e) => {
			D.path && e(Ie);
		});
		var Le = B(Fe), Re = (e) => {
			var t = Cr();
			Z(R(t), 17, () => W(ie), X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 5));
				let r = () => W(n)[0], i = () => W(n)[1], a = () => W(n)[2], o = () => W(n)[3], s = () => W(n)[4];
				var c = ga(), l = z(L(c));
				M(c), V((e, t, n, r) => {
					$(c, "cx", e), $(c, "cy", t), $(c, "r", n), $(c, "fill", te[i()] ?? te.other), J(l, `${r ?? ""} × ${s() ?? ""} · ${a() ?? ""}${o() ?? ""}`);
				}, [
					() => ra(a()) + 1,
					() => ra(o()) + 1,
					() => ye(s()),
					() => pe(r())
				]), q(e, c);
			}), q(e, t);
		};
		Y(Le, (e) => {
			D.entities && e(Re);
		});
		var ze = B(Le), Be = (e) => {
			var t = Cr();
			Z(R(t), 17, () => W(ce), X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 5));
				let r = () => W(n)[0], i = () => W(n)[1], a = () => W(n)[2], o = () => W(n)[3], s = () => W(n)[4];
				var c = _a(), l = z(L(c));
				M(c), V((e, t, n, r, i, a) => {
					$(c, "d", `M${e ?? ""},${t ?? ""}l2.6,2.6M${n ?? ""},${r ?? ""}l-2.6,2.6`), $(c, "opacity", i), J(l, `${a ?? ""} · ${o() ?? ""} × ${s() ?? ""}`);
				}, [
					() => ra(i()) - .8,
					() => ra(a()) - .8,
					() => ra(i()) + 1.8,
					() => ra(a()) - .8,
					() => ue(r()),
					() => k(r())
				]), q(e, c);
			}), q(e, t);
		};
		Y(ze, (e) => {
			D.despawned && e(Be);
		});
		var Ve = B(ze), He = (e) => {
			var t = Cr();
			Z(R(t), 17, () => W(le), X, (e, t) => {
				var n = va();
				let r;
				var i = z(L(n));
				M(n), V((e, a, o, s, c, l, u, d, f) => {
					$(n, "x", e), $(n, "y", a), r = Q(n, 0, "death svelte-pbz4pw", null, r, { pl: o }), $(n, "opacity", s), $(n, "transform", `rotate(45 ${c ?? ""} ${l ?? ""})`), J(i, `${u ?? ""} · ${d ?? ""}${f ?? ""}${W(t).message ? " · " + W(t).message : ""}`);
				}, [
					() => ra(W(t).x) - 1,
					() => ra(W(t).z) - 1,
					() => String(W(t).type).startsWith("player:"),
					() => ue(W(t).time),
					() => ra(W(t).x) + .5,
					() => ra(W(t).z) + .5,
					() => k(W(t).time),
					() => pe(W(t).type),
					() => W(t).cause ? " · " + pe(W(t).cause) : ""
				]), q(e, n);
			}), q(e, t);
		};
		Y(Ve, (e) => {
			D.deaths && e(He);
		});
		var Ue = B(Ve), We = (e) => {
			var t = Cr();
			Z(R(t), 17, () => W(i)?.players ?? [], X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 3));
				let r = () => W(n)[0], i = () => W(n)[1], a = () => W(n)[2];
				var o = ya(), s = z(L(o), !0);
				M(o), V((e, t) => {
					$(o, "cx", e), $(o, "cy", t), J(s, r());
				}, [() => ra(i()) + .5, () => ra(a()) + .5]), q(e, o);
			}), q(e, t);
		};
		Y(Ue, (e) => {
			D.players && W(g).kind === "created" && e(We);
		});
		var Ge = B(Ue), Ke = z(L(Ge));
		M(Ge), M(Oe);
		var qe = z(B(Oe, 2));
		M(De);
		var N = B(De, 2), Je = L(N), Ye = (e) => {
			var t = Ea(), n = R(t), i = L(n), a = z(B(i));
			M(n);
			var s = B(n, 2), c = L(s), l = z(c, !0), u = B(c, 2);
			Z(u, 17, () => W(j).events, X, (e, t) => {
				var n = ba();
				let i;
				var a = L(n), o = z(a, !0), s = B(a), c = z(s, !0), l = B(s);
				M(n), V((e, r, a) => {
					i = Q(n, 1, `row ev ${W(t).kind === "death" ? "death" : ""}`, "svelte-pbz4pw", i, { now: e }), J(o, r), J(c, a), J(l, ` ${W(t).text ?? ""}`);
				}, [
					() => Math.abs(W(t).time - W(g).time) < 5e3,
					() => k(W(t).time),
					() => r("ev_" + ([
						"join",
						"quit",
						"death",
						"teleport"
					].includes(W(t).kind) ? W(t).kind : "join"))
				]), q(e, n);
			});
			var d = B(u, 2);
			Z(d, 17, () => W(j).actions, X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 2));
				let r = () => W(n)[0], i = () => W(n)[1];
				var a = xa(), o = L(a), s = z(o, !0), c = B(o);
				M(a), V(() => {
					J(s, r()), J(c, ` ${i() ?? ""}`);
				}), q(e, a);
			});
			var f = B(d, 2), p = (e) => {
				var t = Sa(), n = z(t, !0);
				V((e) => J(n, e), [() => r("none")]), q(e, t);
			};
			Y(f, (e) => {
				!W(j).events.length && !W(j).actions.length && e(p);
			}), M(s);
			var h = B(s, 2), v = L(h), y = z(v, !0);
			Z(B(v, 2), 17, () => W(j).around, X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 2));
				let r = () => W(n)[0], i = () => W(n)[1];
				var a = xa(), o = L(a), s = z(o, !0), c = B(o);
				M(a), V(() => {
					J(s, r()), J(c, ` ${i() ?? ""}`);
				}), q(e, a);
			}), M(h);
			var b = B(h, 2), x = L(b), S = z(x, !0), C = B(x, 2);
			Z(C, 17, () => W(j).server, X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 2));
				let r = () => W(n)[0], i = () => W(n)[1];
				var a = xa(), o = L(a), s = z(o, !0), c = B(o);
				M(a), V(() => {
					J(s, r()), J(c, ` ${i() ?? ""}`);
				}), q(e, a);
			}, (e) => {
				var t = Sa(), n = z(t, !0);
				V((e) => J(n, e), [() => r("mNoServer")]), q(e, t);
			});
			var w = B(C, 2), T = (e) => {
				var t = Ca(), n = z(L(t), !0);
				M(t), V((e) => J(n, e), [() => r("mProblems", { n: W(j).lineCount })]), q(e, t);
			};
			Y(w, (e) => {
				W(j).lineCount && e(T);
			});
			var E = B(w, 2);
			Z(E, 17, () => W(j).lines, X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 3));
				let r = () => W(n)[1], i = () => W(n)[2];
				var a = wa(), o = z(a, !0);
				V(() => {
					Q(a, 1, `row line ${r() === "error" ? "error" : "warn"}`, "svelte-pbz4pw"), J(o, i());
				}), q(e, a);
			}), Z(B(E, 2), 17, () => W(j).evts, X, (e, t) => {
				var n = Ta(), r = L(n), i = z(r, !0), a = B(r);
				M(n), V((e) => {
					ei(r, `color: ${e ?? ""}`), J(i, W(t).source), J(a, ` ${W(t).text ?? ""}`);
				}, [() => ta(W(t).color)]), q(e, n);
			}), M(b), V((e, t, n, r, o, s) => {
				J(i, `${e ?? ""}–${t ?? ""} `), J(a, `· ${n ?? ""}`), J(l, r), J(y, o), J(S, s);
			}, [
				() => fe(W(_).start),
				() => fe(W(_).start + 6e4),
				() => r("minuteOf", {
					n: W(g).mi + 1,
					of: W(o).length
				}),
				() => r("mActions"),
				() => r("mAround"),
				() => r("server")
			]), q(e, t);
		}, Xe = (e) => {
			var t = Oa(), n = R(t), a = z(n), o = B(n, 2), s = L(o), c = z(s, !0);
			Z(B(s, 2), 17, () => Object.entries((W(i)?.entities ?? []).reduce((e, [t, , , , n]) => (e[t] = (e[t] ?? 0) + ra(n), e), {})).sort((e, t) => t[1] - e[1]).slice(0, 10), X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 2));
				let r = () => W(n)[0], i = () => W(n)[1];
				var a = xa(), o = L(a), s = z(o), c = B(o);
				M(a), V((e) => {
					J(s, `${i() ?? ""}×`), J(c, ` ${e ?? ""}`);
				}, [() => pe(r())]), q(e, a);
			}, (e) => {
				var t = Sa(), n = z(t, !0);
				V((e) => J(n, e), [() => r("none")]), q(e, t);
			}), M(o);
			var l = B(o, 2), u = L(l), d = z(u, !0);
			Z(B(u, 2), 17, () => (W(i)?.despawned?.summary ?? []).slice(0, 8), X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 2));
				let r = () => W(n)[0], i = () => W(n)[1];
				var a = xa(), o = L(a), s = z(o), c = B(o);
				M(a), V(() => {
					J(s, `${i() ?? ""}×`), J(c, ` ${r() ?? ""}`);
				}), q(e, a);
			}, (e) => {
				var t = Sa(), n = z(t, !0);
				V((e) => J(n, e), [() => r("none")]), q(e, t);
			}), M(l);
			var f = B(l, 2), p = L(f), h = z(p, !0);
			Z(B(p, 2), 17, () => (W(i)?.deaths?.rows ?? []).slice(-8).reverse(), X, (e, t) => {
				var n = Da(), r = L(n), i = z(r, !0), a = B(r, 2), o = z(a, !0), s = B(a);
				M(n), V((e, t, n) => {
					J(i, e), J(o, t), J(s, ` ${n ?? ""}`);
				}, [
					() => k(W(t).time),
					() => pe(W(t).type),
					() => W(t).message ?? [W(t).cause, W(t).killer].filter(Boolean).join(" · ")
				]), q(e, n);
			}, (e) => {
				var t = Sa(), n = z(t, !0);
				V((e) => J(n, e), [() => r("none")]), q(e, t);
			}), M(f), V((e, t, n, r, i) => {
				J(a, `${e ?? ""} ${t ?? ""}`), J(c, n), J(d, r), J(h, i);
			}, [
				() => r("created"),
				() => fe(W(g).time),
				() => r("topEntities"),
				() => r("despawnedTotal", { count: W(i)?.despawned?.total ?? 0 }),
				() => r("deathsTotal", { count: W(i)?.deaths?.total ?? 0 })
			]), q(e, t);
		};
		Y(Je, (e) => {
			W(j) ? e(Ye) : e(Xe, -1);
		}), M(N), M(Ee);
		var Ze = B(Ee, 2), Qe = L(Ze), $e = B(L(Qe), 1, !0);
		M(Qe);
		var et = B(Qe, 2), tt = B(L(et), 1, !0);
		M(et);
		var nt = B(et, 2), rt = B(L(nt), 1, !0);
		M(nt);
		var it = B(nt, 2), at = B(L(it), 1, !0);
		M(it);
		var ot = B(it, 2), st = z(ot), ct = B(ot, 2), lt = z(ct), ut = B(ct, 2), dt = (e) => {
			var t = ka(), n = B(L(t), 1, !0);
			M(t), V((e) => J(n, e), [() => r("layerPath")]), q(e, t);
		};
		Y(ut, (e) => {
			W(o).length && e(dt);
		}), M(Ze);
		var ft = B(Ze, 2), pt = (e) => {
			var t = Na(), n = R(t), a = z(n, !0), o = B(n, 2);
			Z(o, 21, () => W(i).inventory, X, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(W(t), 4));
				let i = () => W(n)[0], a = () => W(n)[1], o = () => W(n)[2], s = () => W(n)[3];
				var c = ja(), l = L(c), u = B(l), d = (e) => {
					var t = Aa(), n = z(t, !0);
					V(() => J(n, s())), q(e, t);
				};
				Y(u, (e) => {
					s() && e(d);
				}), M(c), V((e) => {
					$(c, "title", e), J(l, `${a() ?? ""}${o() > 1 ? " × " + o() : ""}`);
				}, [() => `${r("slot")} ${i()}`]), q(e, c);
			}, (e) => {
				var t = Ma(), n = z(t, !0);
				V((e) => J(n, e), [() => r("none")]), q(e, t);
			}), M(o), V((e) => J(a, e), [() => r("inventory", { name: W(i).player })]), q(e, t);
		};
		Y(ft, (e) => {
			W(i)?.inventory && e(pt);
		}), M(a), V((e, t, n, r, i, a, o, s, c, l, d, f, m) => {
			J(u, e), J(p, t), w = Q(S, 1, "svelte-pbz4pw", null, w, { on: D.entities }), J(re, n), oe = Q(ae, 1, "svelte-pbz4pw", null, oe, { on: D.despawned }), J(se, r), he = Q(me, 1, "svelte-pbz4pw", null, he, { on: D.deaths }), J(A, i), Se = Q(xe, 1, "svelte-pbz4pw", null, Se, { on: D.players }), J(Ce, a), $(Oe, "viewBox", `${W(O).x ?? ""} ${W(O).z ?? ""} 256 256`), $(Oe, "aria-label", o), $(ke, "x", W(O).x), $(ke, "y", W(O).z), $(Ge, "cx", W(g).x + .5), $(Ge, "cy", W(g).z + .5), J(Ke, `${W(g).x ?? ""}${W(g).z ?? ""}`), J(qe, `${W(g).world ?? ""} · ${W(g).x ?? ""} ${W(g).z ?? ""}`), J($e, s), J(tt, c), J(rt, l), J(at, d), J(st, `✕ ${f ?? ""}`), J(lt, `◆ ${m ?? ""}`);
		}, [
			() => r("area"),
			() => W(o).length ? r("playHint", {
				n: W(o).length,
				who: W(i)?.player ?? t.log.ticket?.creator ?? ""
			}) : r("areaHint", {
				size: 256,
				who: W(i)?.player ?? r("thePlace")
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
		]), G("click", S, () => D.entities = !D.entities), G("click", ae, () => D.despawned = !D.despawned), G("click", me, () => D.deaths = !D.deaths), G("click", xe, () => D.players = !D.players), q(e, a);
	};
	Y(xe, (e) => {
		W(g) && e(Se);
	}), q(e, be), Be();
}
pr(["click", "input"]);
//#endregion
//#region src/ticketlog/ModulePart.svelte
var Ia = /* @__PURE__ */ K("<p class=\"svelte-1h3vb0h\"> </p>"), La = /* @__PURE__ */ K("<span class=\"pill svelte-1h3vb0h\"> </span>"), Ra = /* @__PURE__ */ K("<div><dt class=\"svelte-1h3vb0h\"> </dt><dd class=\"svelte-1h3vb0h\"> </dd></div>"), za = /* @__PURE__ */ K("<dl class=\"svelte-1h3vb0h\"></dl>"), Ba = /* @__PURE__ */ K("<div class=\"charts svelte-1h3vb0h\"></div>"), Va = /* @__PURE__ */ K("<section><header class=\"svelte-1h3vb0h\"><div><span class=\"from svelte-1h3vb0h\"> </span> <h3 class=\"svelte-1h3vb0h\"> </h3> <!></div> <!></header> <!> <!></section>");
function Ha(e, t) {
	ze(t, !0);
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
	var i = Va(), a = L(i), o = L(a), s = L(o), c = z(s, !0), l = B(s, 2), u = z(l, !0), d = B(l, 2), f = (e) => {
		var n = Ia(), r = z(n, !0);
		V(() => J(r, t.part.reason)), q(e, n);
	};
	Y(d, (e) => {
		t.part.reason && e(f);
	}), M(o);
	var p = B(o, 2), h = (e) => {
		var n = La(), r = z(n, !0);
		V(() => J(r, t.part.status.text)), q(e, n);
	};
	Y(p, (e) => {
		t.part.status && e(h);
	}), M(a);
	var g = B(a, 2), _ = (e) => {
		var n = za();
		Z(n, 21, () => t.part.facts, X, (e, t) => {
			var n = /* @__PURE__ */ P(() => m(W(t), 2));
			let r = () => W(n)[0], i = () => W(n)[1];
			var a = Ra(), o = L(a), s = z(o, !0), c = z(B(o), !0);
			M(a), V(() => {
				J(s, r()), J(c, i());
			}), q(e, a);
		}), M(n), q(e, n);
	};
	Y(g, (e) => {
		t.part.facts?.length && e(_);
	});
	var v = B(g, 2), y = (e) => {
		var i = Ba();
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
		}), M(i), q(e, i);
	};
	Y(v, (e) => {
		W(n).length && e(y);
	}), M(i), V((e, n) => {
		Q(i, 1, `mpart tone-${e ?? ""}`, "svelte-1h3vb0h"), J(c, n), J(u, t.part.title);
	}, [() => na(t.part.status?.tone), () => $i(t.lang, "module", { plugin: t.part.plugin })]), q(e, i), Be();
}
//#endregion
//#region src/ticketlog/TicketLog.svelte
var Ua = /* @__PURE__ */ K("<span class=\"pill bad svelte-1y95gkm\"> </span>"), Wa = /* @__PURE__ */ K("<span class=\"pill warn svelte-1y95gkm\"> </span>"), Ga = /* @__PURE__ */ K("<button class=\"secondary small\"> </button>"), Ka = /* @__PURE__ */ K("<div class=\"peaks svelte-1y95gkm\"><div class=\"svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b> </b></div> <div class=\"svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b> </b></div> <div class=\"svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b class=\"svelte-1y95gkm\"> <small class=\"svelte-1y95gkm\"> </small></b></div> <div class=\"svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b class=\"svelte-1y95gkm\"> </b></div></div>"), qa = /* @__PURE__ */ K("<button role=\"tab\"> </button>"), Ja = /* @__PURE__ */ K("<button> </button>"), Ya = /* @__PURE__ */ K("<!> <div class=\"chart-bar svelte-1y95gkm\"><div class=\"metrics svelte-1y95gkm\" role=\"tablist\"></div> <div class=\"metrics zoom svelte-1y95gkm\" role=\"group\"></div></div> <!>", 1), Xa = /* @__PURE__ */ K("<p class=\"muted small svelte-1y95gkm\"> </p>"), Za = /* @__PURE__ */ K("<button></button>"), Qa = /* @__PURE__ */ K("<dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd>", 1), $a = /* @__PURE__ */ K("<div class=\"crow svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b class=\"svelte-1y95gkm\"> </b></div>"), eo = /* @__PURE__ */ K("<span class=\"muted small\">-</span>"), to = /* @__PURE__ */ K("<div class=\"tile svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <dl class=\"svelte-1y95gkm\"><dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">Ping</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <!> <!></dl> <div class=\"counts svelte-1y95gkm\"><div><h4 class=\"svelte-1y95gkm\"> </h4> <!></div> <div><h4 class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></h4> <!></div></div></div>"), no = /* @__PURE__ */ K("<div class=\"crow svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></span> <b class=\"svelte-1y95gkm\"> </b></div>"), ro = /* @__PURE__ */ K("<div class=\"crow svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></span><b class=\"svelte-1y95gkm\"> </b></div>"), io = /* @__PURE__ */ K("<h4 class=\"svelte-1y95gkm\"> </h4> <!>", 1), ao = /* @__PURE__ */ K("<span> <small class=\"svelte-1y95gkm\"> </small></span>"), oo = /* @__PURE__ */ K("<div class=\"seg svelte-1y95gkm\"></div>"), so = /* @__PURE__ */ K("<button class=\"more svelte-1y95gkm\"> </button>"), co = /* @__PURE__ */ K("<span class=\"src svelte-1y95gkm\"> </span>"), lo = /* @__PURE__ */ K("<div><span class=\"lt svelte-1y95gkm\"> </span> <!> <span class=\"tx svelte-1y95gkm\"> </span></div>"), uo = /* @__PURE__ */ K("<section class=\"card tlog svelte-1y95gkm\"><header class=\"t-head svelte-1y95gkm\"><div><h2 class=\"svelte-1y95gkm\"> </h2> <p class=\"muted small svelte-1y95gkm\"> </p></div> <div class=\"t-counts svelte-1y95gkm\"><!> <!> <span class=\"pill svelte-1y95gkm\"> </span> <!></div></header> <!> <!> <div class=\"strip-wrap svelte-1y95gkm\"><div class=\"strip svelte-1y95gkm\" role=\"group\"><!> <span class=\"ticket-mark svelte-1y95gkm\"></span></div> <div class=\"strip-axis muted svelte-1y95gkm\"><span> </span><span> </span></div></div> <div class=\"tiles svelte-1y95gkm\"><div class=\"tile svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <dl class=\"svelte-1y95gkm\"><dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">Minecraft</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">MRadmin</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">Java</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">TPS</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd></dl></div> <!> <div class=\"tile svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <!> <!></div></div> <!> <details class=\"plugins svelte-1y95gkm\"><summary class=\"svelte-1y95gkm\"> </summary> <div class=\"plist svelte-1y95gkm\"></div></details> <div class=\"filters svelte-1y95gkm\"><div class=\"seg svelte-1y95gkm\"></div> <!> <input type=\"search\" class=\"svelte-1y95gkm\"/> <!></div> <div class=\"lines svelte-1y95gkm\"><!> <!> <!></div></section>");
function fo(e, t) {
	ze(t, !0);
	let n = _i(t, "lang", 3, "de"), r = _i(t, "onclose", 3, null), i = (e, t) => $i(n(), e, t), a = /* @__PURE__ */ P(() => {
		let e = t.log.health?.fields ?? [];
		return (t.log.health?.rows ?? []).map((t) => Object.fromEntries(e.map((e, n) => [e, t[n]])));
	}), o = (e) => e == null ? "-" : Math.round(e).toLocaleString(), s = (e) => e == null ? "-" : e.toFixed(1) + " ms", c = (e) => e == null ? "-" : Math.round(e) + " %", l = (e) => e == null ? "-" : e >= 1024 ? (e / 1024).toFixed(1) + " GB" : Math.round(e) + " MB", u = (e) => e == null ? "-" : e.toFixed(1), d = /* @__PURE__ */ P(() => [
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
	]), f = /* @__PURE__ */ Ft("tps"), p = /* @__PURE__ */ P(() => W(d).find((e) => e.id === W(f)) ?? W(d)[0]), h = /* @__PURE__ */ P(() => Math.max(1, Math.round((t.log.time - t.log.from) / 6e4))), g = /* @__PURE__ */ P(() => [...[
		1,
		10,
		30
	].filter((e) => e < W(h)), W(h)].filter((e, t, n) => n.indexOf(e) === t)), _ = /* @__PURE__ */ Ft(30), v = /* @__PURE__ */ P(() => Math.min(W(_), W(h))), y = /* @__PURE__ */ P(() => t.log.time - W(v) * 6e4), b = /* @__PURE__ */ P(() => W(a).filter((e) => e.time >= W(y))), x = /* @__PURE__ */ P(() => {
		if (!W(a).length) return null;
		let e = 20, t = 0, n = 0, r = 0;
		for (let i of W(a)) e = Math.min(e, i.tps), t = Math.max(t, i.msptMax), n = Math.max(n, i.heapUsed), r = Math.max(r, i.entities);
		return {
			minTps: e,
			maxMspt: t,
			maxRam: n,
			maxEnt: r,
			heapMax: W(a).at(-1).heapMax
		};
	}), S = /* @__PURE__ */ P(() => {
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
	}), C = /* @__PURE__ */ P(() => ({
		warn: W(S).filter((e) => e.level === "warn").length,
		error: W(S).filter((e) => e.level === "error").length,
		event: W(S).filter((e) => e.kind === "event").length
	})), w = /* @__PURE__ */ P(() => Math.max(1, t.log.time - t.log.from)), T = /* @__PURE__ */ P(() => {
		let e = Array.from({ length: 90 }, () => ({
			info: 0,
			warn: 0,
			error: 0,
			event: 0
		}));
		for (let n of W(S)) {
			let r = Math.min(89, Math.max(0, Math.floor((n.time - t.log.from) / W(w) * 90)));
			e[r][n.level === "warn" || n.level === "error" || n.level === "event" ? n.level : "info"]++;
		}
		return e;
	}), E = /* @__PURE__ */ P(() => Math.max(1, ...W(T).map((e) => e.info + e.warn + e.error + e.event))), ee = /* @__PURE__ */ Ft("all"), D = Ut({
		info: !0,
		warn: !0,
		error: !0
	}), te = /* @__PURE__ */ Ft(""), O = /* @__PURE__ */ Ft(null), ne = /* @__PURE__ */ Ft(300), re = /* @__PURE__ */ P(() => {
		let e = W(te).trim().toLowerCase();
		return W(S).filter((t) => W(ee) !== "all" && t.kind !== W(ee) || t.kind === "console" && !D[t.level] || W(O) && (t.time < W(O)[0] || t.time >= W(O)[1]) ? !1 : !e || t.text.toLowerCase().includes(e) || (t.source ?? "").toLowerCase().includes(e));
	}), ie = /* @__PURE__ */ P(() => W(re).slice(Math.max(0, W(re).length - W(ne))));
	function ae(e) {
		let n = t.log.from + W(w) * e / 90;
		I(O, W(O) && W(O)[0] === n ? null : [n, t.log.from + W(w) * (e + 1) / 90], !0), I(ne, 300);
	}
	let oe = (e) => new Date(e).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}), se = (e) => {
		let t = Math.floor(e / 6e4);
		return t >= 1440 ? Math.floor(t / 1440) + " d " + Math.floor(t % 1440 / 60) + " h" : t >= 60 ? Math.floor(t / 60) + " h " + t % 60 + " min" : t + " min";
	}, ce = /* @__PURE__ */ P(() => (t.log.time - t.log.from) / W(w) * 100), le = /* @__PURE__ */ P(() => [t.log.player && {
		who: i("creator"),
		p: t.log.player
	}, t.log.target && {
		who: i("target"),
		p: t.log.target
	}].filter(Boolean));
	var ue = uo(), de = L(ue), k = L(de), fe = L(k), pe = z(fe, !0), me = z(B(fe, 2), !0);
	M(k);
	var he = B(k, 2), A = L(he), ge = (e) => {
		var t = Ua(), n = z(t);
		V((e) => J(n, `${W(C).error ?? ""} ${e ?? ""}`), [() => i("errors")]), q(e, t);
	};
	Y(A, (e) => {
		W(C).error && e(ge);
	});
	var j = B(A, 2), _e = (e) => {
		var t = Wa(), n = z(t);
		V((e) => J(n, `${W(C).warn ?? ""} ${e ?? ""}`), [() => i("warnings")]), q(e, t);
	};
	Y(j, (e) => {
		W(C).warn && e(_e);
	});
	var ve = B(j, 2), ye = z(ve), be = B(ve, 2), xe = (e) => {
		var t = Ga(), n = z(t, !0);
		V((e) => J(n, e), [() => i("hide")]), G("click", t, function(...e) {
			r()?.apply(this, e);
		}), q(e, t);
	};
	Y(be, (e) => {
		r() && e(xe);
	}), M(he), M(de);
	var Se = B(de, 2), Ce = (e) => {
		Ha(e, {
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
	Y(Se, (e) => {
		t.log.module && e(Ce);
	});
	var we = B(Se, 2), Te = (e) => {
		var n = Ya(), r = R(n), a = (e) => {
			var t = Ka(), n = L(t), r = L(n), a = z(r, !0), c = B(r);
			let d;
			var f = z(c, !0);
			M(n);
			var p = B(n, 2), m = L(p), h = z(m, !0), g = B(m);
			let _;
			var v = z(g, !0);
			M(p);
			var y = B(p, 2), b = L(y), S = z(b, !0), C = B(b), w = L(C), T = z(B(w));
			M(C), M(y);
			var E = B(y, 2), ee = L(E), D = z(ee, !0), te = z(B(ee), !0);
			M(E), M(t), V((e, t, n, r, i, o, s, l, u) => {
				J(a, e), d = Q(c, 1, "svelte-1y95gkm", null, d, {
					bad: W(x).minTps < 15,
					warn: W(x).minTps >= 15 && W(x).minTps < 19
				}), J(f, t), J(h, n), _ = Q(g, 1, "svelte-1y95gkm", null, _, {
					bad: W(x).maxMspt > 100,
					warn: W(x).maxMspt > 50 && W(x).maxMspt <= 100
				}), J(v, r), J(S, i), J(w, `${o ?? ""} `), J(T, `/ ${s ?? ""}`), J(D, l), J(te, u);
			}, [
				() => i("minTps"),
				() => u(W(x).minTps),
				() => i("maxMspt"),
				() => s(W(x).maxMspt),
				() => i("maxRam"),
				() => l(W(x).maxRam),
				() => l(W(x).heapMax),
				() => i("maxEntities"),
				() => o(W(x).maxEnt)
			]), q(e, t);
		};
		Y(r, (e) => {
			W(x) && e(a);
		});
		var c = B(r, 2), m = L(c);
		Z(m, 21, () => W(d), (e) => e.id, (e, t) => {
			var n = qa();
			let r;
			var i = z(n, !0);
			V(() => {
				$(n, "aria-selected", W(f) === W(t).id), r = Q(n, 1, "svelte-1y95gkm", null, r, { on: W(f) === W(t).id }), J(i, W(t).label);
			}), G("click", n, () => I(f, W(t).id, !0)), q(e, n);
		}), M(m);
		var h = B(m, 2);
		Z(h, 21, () => W(g), X, (e, t) => {
			var n = Ja();
			let r;
			var a = z(n, !0);
			V((e) => {
				r = Q(n, 1, "svelte-1y95gkm", null, r, { on: W(v) === W(t) }), J(a, e);
			}, [() => i("min", { n: W(t) })]), G("click", n, () => I(_, W(t), !0)), q(e, n);
		}), M(h), M(c), Fr(B(c, 2), () => W(f) + W(v), (e) => {
			{
				let n = /* @__PURE__ */ P(() => W(v) > 1), r = /* @__PURE__ */ P(() => W(p).yMax ?? null), i = /* @__PURE__ */ P(() => W(p).refs ?? []);
				Zi(e, {
					get title() {
						return W(p).label;
					},
					get points() {
						return W(b);
					},
					get from() {
						return W(y);
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
						return W(p).format;
					},
					get series() {
						return W(p).series;
					},
					get refs() {
						return W(i);
					}
				});
			}
		}), V((e) => $(h, "aria-label", e), [() => i("zoom")]), q(e, n);
	}, Ee = (e) => {
		var t = Xa(), n = z(t, !0);
		V((e) => J(n, e), [() => i("noHealth")]), q(e, t);
	};
	Y(we, (e) => {
		W(a).length ? e(Te) : e(Ee, -1);
	});
	var De = B(we, 2), Oe = L(De), ke = L(Oe);
	Z(ke, 17, () => W(T), X, (e, n, r) => {
		let a = /* @__PURE__ */ P(() => W(n).info + W(n).warn + W(n).error + W(n).event);
		var o = Za();
		let s;
		V((e, t, r) => {
			s = Q(o, 1, "slice svelte-1y95gkm", null, s, {
				sel: e,
				err: W(n).error,
				wrn: !W(n).error && W(n).warn,
				evt: !W(n).error && !W(n).warn && W(n).event
			}), ei(o, `--h: ${W(a) ? 18 + W(a) / W(E) * 82 : 4}%`), $(o, "title", t), $(o, "aria-label", r);
		}, [
			() => W(O) && Math.abs(W(O)[0] - (t.log.from + W(w) * r / 90)) < 1,
			() => `${oe(t.log.from + W(w) * r / 90)} · ${W(n).error} ${i("errors")}, ${W(n).warn} ${i("warnings")}, ${W(n).event} ${i("events")}, ${W(n).info} info`,
			() => oe(t.log.from + W(w) * r / 90)
		]), G("click", o, () => ae(r)), q(e, o);
	});
	var Ae = B(ke, 2);
	M(Oe);
	var je = B(Oe, 2), Me = L(je), Ne = z(Me, !0), Pe = z(B(Me));
	M(je), M(De);
	var Fe = B(De, 2), Ie = L(Fe), Le = L(Ie), Re = z(Le, !0), Ve = B(Le, 2), He = L(Ve), Ue = z(He, !0), We = B(He), Ge = z(We, !0), Ke = B(We, 3), qe = z(Ke, !0), N = B(Ke, 3), Je = z(N, !0), Ye = B(N, 3), Xe = z(Ye, !0), Ze = B(Ye, 2), Qe = z(Ze, !0), $e = B(Ze), et = z($e), tt = B($e, 2), nt = z(tt, !0), rt = B(tt), it = z(rt, !0), at = B(rt, 3), ot = z(at), st = B(at, 2), ct = z(st, !0), lt = B(st), ut = z(lt), dt = B(lt, 2), ft = z(dt, !0), pt = B(dt), F = z(pt), mt = B(pt, 2), ht = z(mt, !0), gt = z(B(mt), !0);
	M(Ve), M(Ie);
	var _t = B(Ie, 2);
	Z(_t, 17, () => W(le), X, (e, t) => {
		let n = () => W(t).who, r = () => W(t).p;
		var a = to(), o = L(a), s = z(o), c = B(o, 2), l = L(c), u = z(l, !0), d = B(l), f = L(d), p = z(B(f));
		M(d);
		var h = B(d, 2), g = z(h, !0), _ = B(h), v = z(_), y = B(_, 2), b = z(y, !0), x = B(y), S = z(x), C = B(x, 2), w = z(C, !0), T = B(C), E = z(T), ee = B(T, 2), D = z(ee, !0), te = B(ee), O = z(te), ne = B(te, 3), re = z(ne), ie = B(ne, 2), ae = z(ie, !0), oe = B(ie), se = z(oe, !0), ce = B(oe, 2), le = (e) => {
			var t = Qa(), n = R(t), a = z(n, !0), o = z(B(n), !0);
			V((e, t) => {
				J(a, e), J(o, t);
			}, [() => i("effects"), () => r().effects.join(", ")]), q(e, t);
		};
		Y(ce, (e) => {
			r().effects?.length && e(le);
		});
		var ue = B(ce, 2), de = (e) => {
			var t = Qa(), n = R(t), a = z(n, !0), o = z(B(n), !0);
			V((e, t) => {
				J(a, e), J(o, t);
			}, [() => i("nearPlayers"), () => r().players.map((e) => `${e.name} (${Math.round(e.distance)} m)`).join(", ")]), q(e, t);
		};
		Y(ue, (e) => {
			r().players?.length && e(de);
		}), M(c);
		var k = B(c, 2), fe = L(k), pe = L(fe), me = z(pe, !0);
		Z(B(pe, 2), 17, () => (r().entities ?? []).slice(0, 8), X, (e, t) => {
			var n = /* @__PURE__ */ P(() => m(W(t), 2));
			let r = () => W(n)[0], i = () => W(n)[1];
			var a = $a(), o = L(a), s = z(o, !0), c = z(B(o), !0);
			M(a), V(() => {
				J(s, r()), J(c, i());
			}), q(e, a);
		}, (e) => {
			q(e, eo());
		}), M(fe);
		var he = B(fe, 2), A = L(he), ge = L(A), j = z(B(ge), !0);
		M(A), Z(B(A, 2), 17, () => (r().tiles ?? []).slice(0, 8), X, (e, t) => {
			var n = /* @__PURE__ */ P(() => m(W(t), 2));
			let r = () => W(n)[0], i = () => W(n)[1];
			var a = $a(), o = L(a), s = z(o, !0), c = z(B(o), !0);
			M(a), V(() => {
				J(s, r()), J(c, i());
			}), q(e, a);
		}, (e) => {
			q(e, eo());
		}), M(he), M(k), M(a), V((e, t, i, a, o, c, l, d, m, h, _, y, x, C, T, ee, te) => {
			J(s, `${n() ?? ""}: ${r().name ?? ""}`), J(u, e), J(f, `${r().world ?? ""} · ${t ?? ""} ${i ?? ""} ${a ?? ""} `), J(p, `(${o ?? ""} ${c ?? ""})`), J(g, l), J(v, `${r().biome ?? ""} · ${d ?? ""} ${r().light ?? ""}`), J(b, m), J(S, `${r().gameMode ?? ""}${h ?? ""}${r().vehicle ? " · " + r().vehicle : ""}${r().op ? " · OP" : ""}`), J(w, _), J(E, `❤ ${r().health ?? ""}/${r().maxHealth ?? ""} · 🍗 ${r().food ?? ""} · Lvl ${r().level ?? ""}`), J(D, y), J(O, `${r().client ?? "-" ?? ""} · ${x ?? ""} ${r().protocol ?? ""} · ${r().locale ?? ""} · ${C ?? ""} ${r().viewDistance ?? ""}`), J(re, `${r().ping ?? ""} ms`), J(ae, T), J(se, r().hand ?? "-"), J(me, ee), J(ge, `${te ?? ""} `), J(j, r().tileArea);
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
		]), q(e, a);
	});
	var vt = B(_t, 2), yt = L(vt), bt = z(yt, !0), xt = B(yt, 2);
	Z(xt, 17, () => t.log.server?.worlds ?? [], X, (e, t) => {
		var n = no(), r = L(n), i = L(r), a = z(B(i));
		M(r);
		var s = z(B(r, 2));
		M(n), V((e, n, r, o) => {
			J(i, `${W(t).name ?? ""} `), J(a, `${W(t).environment ?? ""} · ${W(t).weather ?? ""}`), J(s, `${e ?? ""} 👤 · ${n ?? ""} ▦ · ${r ?? ""} E · ${o ?? ""} T`);
		}, [
			() => o(W(t).players),
			() => o(W(t).chunks),
			() => o(W(t).entities),
			() => o(W(t).tiles)
		]), q(e, n);
	});
	var St = B(xt, 2), Ct = (e) => {
		var n = io(), r = R(n), a = z(r, !0);
		Z(B(r, 2), 17, () => t.log.hotChunks, X, (e, t) => {
			var n = ro(), r = L(n), i = L(r), a = z(B(i), !0);
			M(r);
			var o = z(B(r), !0);
			M(n), V((e) => {
				J(i, `${W(t).world ?? ""} ${W(t).x ?? ""} ${W(t).z ?? ""} `), J(a, e), J(o, W(t).count);
			}, [() => W(t).types.slice(0, 3).map(([e, t]) => `${e} ${t}`).join(", ")]), q(e, n);
		}), V((e) => J(a, e), [() => i("hotChunks")]), q(e, n);
	};
	Y(St, (e) => {
		t.log.hotChunks?.length && e(Ct);
	}), M(vt), M(Fe);
	var wt = B(Fe, 2), Tt = (e) => {
		{
			let r = /* @__PURE__ */ P(() => t.log.module?.area ? {
				...t.log.module.area,
				label: i("loaderArea") + ": " + t.log.module.title
			} : null);
			Fa(e, {
				get log() {
					return t.log;
				},
				get lang() {
					return n();
				},
				get mark() {
					return W(r);
				}
			});
		}
	};
	Y(wt, (e) => {
		(t.log.area || t.log.timeline) && e(Tt);
	});
	var Et = B(wt, 2), Dt = L(Et), Ot = z(Dt, !0), kt = B(Dt, 2);
	Z(kt, 21, () => t.log.server?.plugins ?? [], X, (e, t) => {
		var n = ao();
		let r;
		var i = L(n), a = z(B(i), !0);
		M(n), V(() => {
			r = Q(n, 1, "svelte-1y95gkm", null, r, { off: !W(t).enabled }), J(i, `${W(t).name ?? ""} `), J(a, W(t).version);
		}), q(e, n);
	}), M(kt), M(Et);
	var At = B(Et, 2), jt = L(At);
	Z(jt, 21, () => [
		["all", i("all")],
		["console", i("console")],
		["event", i("events")]
	], X, (e, t) => {
		var n = /* @__PURE__ */ P(() => m(W(t), 2));
		let r = () => W(n)[0], i = () => W(n)[1];
		var a = Ja();
		let o;
		var s = z(a, !0);
		V(() => {
			o = Q(a, 1, "svelte-1y95gkm", null, o, { on: W(ee) === r() }), J(s, i());
		}), G("click", a, () => I(ee, r(), !0)), q(e, a);
	}), M(jt);
	var Mt = B(jt, 2), Nt = (e) => {
		var t = oo();
		Z(t, 21, () => [
			["info", "Info"],
			["warn", i("warnings")],
			["error", i("errors")]
		], X, (e, t) => {
			var n = /* @__PURE__ */ P(() => m(W(t), 2));
			let r = () => W(n)[0], i = () => W(n)[1];
			var a = Ja();
			let o;
			var s = z(a, !0);
			V(() => {
				o = Q(a, 1, qr(r()), "svelte-1y95gkm", o, { on: D[r()] }), J(s, i());
			}), G("click", a, () => D[r()] = !D[r()]), q(e, a);
		}), M(t), q(e, t);
	};
	Y(Mt, (e) => {
		W(ee) !== "event" && e(Nt);
	});
	var Pt = B(Mt, 2);
	ai(Pt);
	var It = B(Pt, 2), Lt = (e) => {
		var t = Ga(), n = z(t);
		V((e, t) => J(n, `${e ?? ""}-${t ?? ""} ✕`), [() => oe(W(O)[0]), () => oe(W(O)[1])]), G("click", t, () => I(O, null)), q(e, t);
	};
	Y(It, (e) => {
		W(O) && e(Lt);
	}), M(At);
	var Rt = B(At, 2), zt = L(Rt), Bt = (e) => {
		var t = so(), n = z(t, !0);
		V((e) => J(n, e), [() => i("older", { count: W(re).length - W(ie).length })]), G("click", t, () => I(ne, W(ne) + 500)), q(e, t);
	};
	Y(zt, (e) => {
		W(re).length > W(ie).length && e(Bt);
	});
	var Vt = B(zt, 2);
	Z(Vt, 17, () => W(ie), X, (e, t) => {
		var n = lo(), r = L(n), i = z(r, !0), a = B(r, 2), o = (e) => {
			var n = co(), r = z(n, !0);
			V(() => {
				ei(n, `--c: ${W(t).color ?? ""}`), J(r, W(t).source);
			}), q(e, n);
		};
		Y(a, (e) => {
			W(t).kind === "event" && e(o);
		});
		var s = z(B(a, 2), !0);
		M(n), V((e) => {
			Q(n, 1, `line ${W(t).level ?? ""}`, "svelte-1y95gkm"), J(i, e), J(s, W(t).text);
		}, [() => oe(W(t).time)]), q(e, n);
	}, (e) => {
		var t = Xa(), n = z(t, !0);
		V((e) => J(n, e), [() => i("empty")]), q(e, t);
	});
	var Ht = B(Vt, 2), Wt = (e) => {
		var t = Xa(), n = z(t, !0);
		V((e) => J(n, e), [() => i("cut")]), q(e, t);
	};
	Y(Ht, (e) => {
		t.log.console?.cut && e(Wt);
	}), M(Rt), M(ue), V((e, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, w) => {
		J(pe, e), J(me, n), J(ye, `${W(C).event ?? ""} ${r ?? ""}`), $(Oe, "aria-label", i), ei(Ae, `left: ${W(ce) ?? ""}%`), $(Ae, "title", a), J(Ne, o), J(Pe, `${s ?? ""} ${c ?? ""}`), J(Re, l), J(Ue, u), J(Ge, t.log.server?.software), J(qe, t.log.server?.minecraft), J(Je, t.log.server?.mradmin), J(Xe, t.log.server?.java), J(Qe, d), J(et, `${t.log.server?.os ?? ""} · ${t.log.server?.cores ?? ""} ${f ?? ""} · ${p ?? ""}`), J(nt, m), J(it, h), J(ot, `${g ?? ""} · ${_ ?? ""}`), J(ct, v), J(ut, `${t.log.server?.online ?? ""} / ${t.log.server?.maxPlayers ?? ""}`), J(ft, y), J(F, `${t.log.server?.viewDistance ?? ""} / ${t.log.server?.simulationDistance ?? ""}`), J(ht, b), J(gt, t.log.server?.storage), J(bt, x), J(Ot, S), $(Pt, "placeholder", w);
	}, [
		() => i("title"),
		() => i("span", {
			from: oe(t.log.from),
			to: oe(t.log.time),
			minutes: Math.round(W(w) / 6e4)
		}),
		() => i("events"),
		() => i("activity"),
		() => i("created"),
		() => oe(t.log.from),
		() => i("created"),
		() => oe(t.log.time),
		() => i("server"),
		() => i("software"),
		() => i("system"),
		() => i("cores"),
		() => l(t.log.server?.memoryMax),
		() => i("uptime"),
		() => se(t.log.server?.uptime ?? 0),
		() => (t.log.server?.tps ?? []).map(u).join(" / "),
		() => s(t.log.server?.mspt),
		() => i("players"),
		() => i("distances"),
		() => i("storage"),
		() => i("worlds"),
		() => i("plugins", { count: t.log.server?.plugins?.length ?? 0 }),
		() => i("search")
	]), ui(Pt, () => W(te), (e) => I(te, e)), q(e, ue), Be();
}
pr(["click"]);
//#endregion
//#region src/ticketlog/viewer/main.js
function po(e, t, n = "de") {
	e.classList.add("mr-tlog-root");
	let r = Or(fo, {
		target: e,
		props: {
			log: t,
			lang: n
		}
	});
	return { destroy: () => Mr(r) };
}
//#endregion
export { po as mountTicketLog };
