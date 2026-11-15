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
	return _e(/* @__PURE__ */ Xt(j));
}
function M(e) {
	if (A) {
		if (/* @__PURE__ */ Xt(j) !== null) throw me(), de;
		j = e;
	}
}
function ye(e = 1) {
	if (A) {
		for (var t = e, n = j; t--;) n = /* @__PURE__ */ Xt(n);
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
		var i = /* @__PURE__ */ Xt(n);
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
		r: W,
		l: null
	};
}
function Be(e) {
	var t = Le, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) un(r);
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
	var t = U, n = W;
	Nn(null), Pn(null);
	try {
		return e();
	} finally {
		Nn(t), Pn(n);
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
	var s = W, c = tt(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				nn(e, s);
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
		Promise.all(n.map((e) => /* @__PURE__ */ ot(e))).then(u).catch((e) => nn(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), nt();
	}) : f();
}
function tt() {
	var e = W, t = U, n = Le, r = F;
	return function(i = !0) {
		Pn(e), Nn(t), Re(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function nt(e = !0) {
	Pn(null), Nn(null), Re(null), e && F?.deactivate();
}
function rt() {
	var e = W, t = e.b, n = F, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function it(e) {
	var t = 2 | g;
	return W !== null && (W.f |= C), {
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
		parent: W,
		ac: null
	};
}
var at = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function ot(e, t, n) {
	let r = W;
	r === null && Ee();
	var i = void 0, a = Pt(k), o = !U, s = /* @__PURE__ */ new Set();
	return pn(() => {
		var t = W, n = p();
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
			l?.(), s.delete(n), t !== at && (c.activate(), t ? (a.f |= D, Rt(a, t)) : (a.f & 8388608 && (a.f ^= D), Rt(a, e)), c.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), cn(() => {
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
	return In(t), t;
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
		for (var n = 0; n < t.length; n += 1) bn(t[n]);
	}
}
function lt(e) {
	var t, n = W, r = e.parent;
	if (!An && r !== null && e.v !== k && r.f & 24576) return pe(), e.v;
	Pn(r);
	try {
		ct(e), t = Jn(e);
	} finally {
		Pn(n);
	}
	return t;
}
function ut(e) {
	var t = lt(e);
	!e.equals(t) && (e.wv = Gn(), (!F?.is_fork || e.deps === null) && (F === null ? e.v = t : (F.capture(e, t, !0), mt?.capture(e, t, !0)), e.deps === null)) ? N(e, h) : An || (ht === null ? Je(e) : (sn() || F?.is_fork) && ht.set(e, t));
}
function dt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Qe(() => {
		t.ac.abort(le), t.ac = null;
	}), t.fn !== null && (t.teardown = d), Zn(t, 0), vn(t));
}
function ft(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Qn(t);
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
		nn(e, gt);
	}
}
var Et = null;
function Dt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Kn(r) && (Et = /* @__PURE__ */ new Set(), Qn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Sn(r), Et?.size > 0)) {
				Mt.clear();
				for (let e of Et) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) Et.has(n) && (Et.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Qn(n);
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
function I(e, t) {
	let n = Pt(e, t);
	return In(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function Ft(e, t = !1, n = !0) {
	let r = Pt(e);
	return t || (r.equals = we), r;
}
function L(e, t, n = !1) {
	return U !== null && (!Mn || U.f & 131072) && He() && U.f & 4325394 && (Fn === null || !Fn.has(e)) && Fe(), Rt(e, n ? Ht(t) : t, bt);
}
var It = null, Lt = 0;
function Rt(e, t, n = null) {
	if (!e.equals(t)) {
		An ? Mt.set(e, t) : Mt.has(e) || Mt.set(e, e.v);
		var r = Ct.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && lt(t), ht === null && Je(t);
		}
		e.wv = Gn(), It = null, Lt = 0, Vt(e, g, n), It = null, He() && W !== null && W.f & 1024 && !(W.f & 96) && (zn === null ? Bn([e]) : zn.push(e)), !r.is_fork && jt.size > 0 && !Nt && zt();
	}
	return t;
}
function zt() {
	Nt = !1;
	for (let e of jt) {
		e.f & 1024 && N(e, _);
		let t;
		try {
			t = Kn(e);
		} catch {
			t = !0;
		}
		t && Qn(e);
	}
	jt.clear();
}
function Bt(e) {
	L(e, e.v + 1);
}
function Vt(e, t, n) {
	var r = e.reactions;
	if (r !== null) {
		var i = He(), a = r.length;
		if (Lt += a, Lt > 1e5 && It === null && (It = /* @__PURE__ */ new Set()), It !== null) {
			if (It.has(e)) return;
			It.add(e);
		}
		for (var o = 0; o < a; o++) {
			var s = r[o], c = s.f;
			if (i || s !== W) {
				var l = (c & g) === 0;
				if (l && N(s, t), c & 131072) jt.add(s);
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
	if (typeof t != "object" || !t || te in t || O in t) return t;
	let n = l(t);
	if (n !== s && n !== c) return t;
	var r = /* @__PURE__ */ new Map(), i = e(t), o = /* @__PURE__ */ I(0), u = null, d = Un, f = (e) => {
		if (Un === d) return e();
		var t = U, n = Un;
		Nn(null), Wn(d);
		var r = e();
		return Nn(t), Wn(n), r;
	};
	return i && r.set("length", /* @__PURE__ */ I(t.length, u)), new Proxy(t, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Ne();
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
			if (n === te) return t;
			var o = r.get(n), s = n in e;
			if (o === void 0 && (!s || a(e, n)?.writable) && (o = f(() => /* @__PURE__ */ I(Ht(s ? e[n] : k), u)), r.set(n, o)), o !== void 0) {
				var c = G(o);
				return c === k ? void 0 : c;
			}
			return Reflect.get(e, n, i);
		},
		getOwnPropertyDescriptor(e, t) {
			this.has?.(e, t);
			var n = Reflect.getOwnPropertyDescriptor(e, t), i = r.get(t);
			if (i !== void 0) {
				var a = G(i);
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
			return (n !== void 0 || W !== null && (!i || a(e, t)?.writable)) && (n === void 0 && (n = f(() => /* @__PURE__ */ I(i ? Ht(e[t]) : k, u)), r.set(t, n)), G(n) === k) ? !1 : i;
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
			G(o);
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
var Ut, Wt, Gt, Kt;
function qt() {
	if (Ut === void 0) {
		Ut = window, Wt = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Gt = a(t, "firstChild").get, Kt = a(t, "nextSibling").get, u(e) && (e[ae] = void 0, e[ie] = null, e[oe] = void 0, e.__e = void 0), u(n) && (n[se] = void 0);
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
	var n = /* @__PURE__ */ Yt(j);
	if (n === null) n = j.appendChild(Jt());
	else if (t && n.nodeType !== 3) {
		var r = Jt();
		return n?.before(r), _e(r), r;
	}
	return t && en(n), _e(n), n;
}
function z(e, t = !1) {
	if (!A) {
		var n = /* @__PURE__ */ Yt(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Xt(n) : n;
	}
	if (t) {
		if (j?.nodeType !== 3) {
			var r = Jt();
			return j?.before(r), _e(r), r;
		}
		en(j);
	}
	return j;
}
function B(e, t = !1) {
	if (!A) return /* @__PURE__ */ Yt(e);
	var n = R(e, t);
	return M(e), n;
}
function V(e, t = 1, n = !1) {
	let r = A ? j : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Xt(r);
	if (!A) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Jt();
			return r === null ? i?.after(a) : r.before(a), _e(a), a;
		}
		en(r);
	}
	return _e(r), r;
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
	if (t === null) return U.f |= D, e;
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
	W === null && (U === null && Ae(e), ke()), An && Oe(e);
}
function an(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function on(e, t) {
	var n = W;
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
			Qn(r);
		} catch (e) {
			throw bn(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= S));
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
	return N(t, h), t.teardown = e, t;
}
function ln(e) {
	rn("$effect");
	var t = W.f;
	if (!U && t & 32 && Le !== null && !Le.i) {
		var n = Le;
		(n.e ??= []).push(e);
	} else return un(e);
}
function un(e) {
	return on(4 | w, e);
}
function dn(e) {
	Ct.ensure();
	let t = on(64 | C, e);
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
	return on(ee | C, e);
}
function mn(e, t = 0) {
	return on(8 | t, e);
}
function H(e, t = [], n = [], r = []) {
	et(r, t, n, (t) => {
		on(8, () => {
			e(...t.map(G));
		});
	});
}
function hn(e, t = 0) {
	return on(16 | t, e);
}
function gn(e) {
	return on(32 | C, e);
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
		e !== null && Qe(() => {
			e.abort(le);
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
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (xn(e.nodes.start, e.nodes.end), n = !0), e.f |= x, vn(e, t && !n), Zn(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	_n(e), e.f ^= x, e.f |= y;
	var i = e.parent;
	i !== null && i.first !== null && Sn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function xn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Xt(e);
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
		e.f ^= v, e.f & 1024 || (N(e, g), Ct.ensure().schedule(e));
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
		var i = n === r ? null : /* @__PURE__ */ Xt(n);
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
			if (Kn(a) && ut(a), a.wv > e.wv) return !0;
		}
		t & 512 && ht === null && N(e, h);
	}
	return !1;
}
function qn(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(Fn !== null && Fn.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? qn(a, t, !1) : t === a && (n ? N(a, g) : a.f & 1024 && N(a, _), Ot(a));
	}
}
function Jn(e) {
	var t = Ln, n = Rn, r = zn, i = U, a = Fn, o = Le, s = Mn, c = Un, l = e.f;
	Ln = null, Rn = 0, zn = null, U = l & 96 ? null : e, Fn = null, Re(e.ctx), Mn = !1, Un = ++Hn, e.ac !== null && (Qe(() => {
		e.ac.abort(le);
	}), e.ac = null);
	try {
		e.f |= E;
		var u = e.fn, d = u();
		e.f |= b;
		var f = Yn(e);
		if (He() && zn !== null && !Mn && f !== null && !(e.f & 6146)) for (var p = 0; p < zn.length; p++) qn(zn[p], e);
		if (i !== null && i !== e) {
			if (Hn++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Hn;
			if (t !== null) for (let e of t) e.rv = Hn;
			zn !== null && (r === null ? r = zn : r.push(...zn));
		}
		return e.f & 8388608 && (e.f ^= D), d;
	} catch (t) {
		return Yn(e), tn(t);
	} finally {
		e.f ^= E, Ln = t, Rn = n, zn = r, U = i, Fn = a, Re(o), Mn = s, Un = c;
	}
}
function Yn(e) {
	var t = e.deps, n = F?.is_fork;
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
		s.f & 512 && (s.f ^= 512), s.v !== k && Je(s), s.ac !== null && Qe(() => {
			s.ac.abort(le), s.ac = null, N(s, g);
		}), dt(s), Zn(s, 0);
	}
}
function Zn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Xn(e, n[r]);
}
function Qn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		N(e, h);
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
	await Promise.resolve(), wt();
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
	if (An && Mt.has(e)) return Mt.get(e);
	if (t) {
		var a = e;
		if (An) {
			var o = a.v;
			return (!(a.f & 1024) && a.reactions !== null || tr(a)) && (o = lt(a)), Mt.set(a, o), o;
		}
		var s = !(a.f & 512) && !Mn && U !== null && (kn || !!(U.f & 512)), c = (a.f & b) === 0;
		Kn(a) && (s && (a.f |= 512), ut(a)), s && !c && (ft(a), er(a));
	}
	if (ht?.has(e)) return ht.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function er(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (ft(t), er(t));
}
function tr(e) {
	if (e.v === k) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Mt.has(t) || t.f & 2 && tr(t)) return !0;
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
		if (te in e) ir(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && te in n && ir(n);
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
		if (r.capture || hr.call(t, e), !e.cancelBubble) return Qe(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? (i.__removed = !1, Ge(() => {
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
		if (A) return yr(j, null), j;
		i === void 0 && (i = vr(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ Yt(i)));
		var t = r || Wt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Yt(t), s = t.lastChild;
			yr(o, s);
		} else yr(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function br(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = !!(t & 1), a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (A) return yr(j, null), j;
		if (!o) {
			var e = /* @__PURE__ */ Yt(vr(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ Yt(e);) o.appendChild(/* @__PURE__ */ Yt(e));
			else o = /* @__PURE__ */ Yt(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ Yt(t), r = t.lastChild;
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
	if (A) return yr(j, null), j;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Jt();
	return e.append(t, n), yr(t, n), e;
}
function J(e, t) {
	if (A) {
		var n = W;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = j), ve();
	} else e !== null && e.before(t);
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Cr(e) {
	let t = 0, n = Pt(0), r;
	return () => {
		sn() && (G(n), mn(() => (t === 0 && (r = nr(() => e(() => Bt(n)))), t += 1, () => {
			Ge(() => {
				--t, t === 0 && (r?.(), r = void 0, Bt(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var wr = S | C;
function Tr(e, t, n, r) {
	new Er(e, t, n, r);
}
var Er = class {
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
	#h = Cr(() => (this.#m = Pt(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = W;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = W.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = hn(() => {
			if (A) {
				let e = this.#t;
				ve();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, wr), A && (this.#e = j);
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
		Ge(r), t && (this.#s = gn(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			t ? he() : (t = !0, n && Ie(), this.#s !== null && Cn(this.#s, () => {
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
		e && (this.is_pending = !0, this.#o = gn(() => e(this.#e)), Ge(() => {
			var e = this.#c = document.createDocumentFragment(), t = Jt(), n = !1;
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
			}), this.#a === null ? (this.#c = null, n && this.#x(F)) : this.#u === 0 && (this.#e.before(e), this.#c = null, Cn(this.#o, () => {
				this.#o = null;
			}), this.#x(F));
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
		var t = W, n = U, r = Le;
		Pn(this.#i), Nn(this.#i), Re(this.#i.ctx);
		try {
			return Ct.ensure(), e();
		} finally {
			Pn(t), Nn(n), Re(r);
		}
	}
	#C(e, t) {
		this.has_pending_snippet() ? (this.#u += e, this.#u === 0 && (this.#x(t), this.#o && Cn(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null))) : this.parent && this.parent.#C(e, t);
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, Ge(() => {
			this.#d = !1, this.#m && Rt(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), G(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		F?.is_fork ? (this.#a && F.skip_effect(this.#a), this.#o && F.skip_effect(this.#o), this.#s && F.skip_effect(this.#s), F.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (bn(this.#a), null), this.#o &&= (bn(this.#o), null), this.#s &&= (bn(this.#s), null), A && (_e(this.#t), ye(), _e(be()));
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
		Ge(() => {
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
	n !== (e[se] ??= e.nodeValue) && (e[se] = n, e.nodeValue = `${n}`);
}
function Dr(e, t) {
	return kr(e, t);
}
var Or = /* @__PURE__ */ new Map();
function kr(e, { target: t, anchor: n, props: i = {}, events: a, context: o, intro: s = !0, transformError: c }) {
	qt();
	var l = void 0, u = dn(() => {
		var s = n ?? t.appendChild(Jt());
		Tr(s, { pending: () => {} }, (t) => {
			ze({});
			var n = Le;
			if (o && (n.c = o), a && (i.$$events = a), A && yr(t, null), l = e(t, i) || Ve(), A && (W.nodes.end = j, j === null || j.nodeType !== 8 || j.data !== "]")) throw me(), de;
			Be();
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
						Dn(r, t), t.append(Jt()), this.#n.set(e, {
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
		var n = F, r = Qt();
		if (t && !this.#t.has(e) && !this.#n.has(e)) {
			if (r) {
				var i = document.createDocumentFragment(), a = Jt();
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
		} else A && (this.anchor = j), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function X(e, t, n = !1) {
	var r;
	A && (r = j, ve());
	var i = new Mr(e), a = n ? S : 0;
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
	A && ve();
	var r = new Mr(e), i = !He();
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
		r?.has(a) ? (a.f |= T, Dn(a, document.createDocumentFragment())) : bn(t[i], n);
	}
}
var Lr;
function Q(t, n, i, a, o, s = null) {
	var c = t, l = /* @__PURE__ */ new Map();
	if (n & 4) {
		var u = t;
		c = A ? _e(/* @__PURE__ */ Yt(u)) : u.appendChild(Jt());
	}
	A && ve();
	var d = null, f = /* @__PURE__ */ st(() => {
		var t = i();
		return e(t) ? t : t == null ? [] : r(t);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, zr(v, p, c, n, a), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= T, Vr(d, null, c)) : Tn(d) : Cn(d, () => {
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
			A && xe(c) === "[!" != (e === 0) && (c = be(), _e(c), ge(!1), t = !0);
			for (var r = /* @__PURE__ */ new Set(), u = F, v = Qt(), y = 0; y < e; y += 1) {
				A && j.nodeType === 8 && j.data === "]" && (c = j, t = !0, ge(!1));
				var b = p[y], x = a(b, y), S = h ? null : l.get(x);
				S ? (S.v && Rt(S.v, b), S.i && Rt(S.i, y), v && u.unskip_effect(S.e)) : (S = Br(l, h ? c : Lr ??= Jt(), b, x, y, o, n, i), h || (S.e.f |= T), l.set(x, S)), r.add(x);
			}
			if (e === 0 && s && !d && (h ? d = gn(() => s(c)) : (d = gn(() => s(Lr ??= Jt())), d.f |= T)), e > r.size && De("", "", ""), A && e > 0 && _e(be()), !h) {
				if (m.set(u, r), v) {
					for (let [e, t] of l) r.has(e) || u.skip_effect(t.e);
					u.oncommit(g), u.ondiscard(_);
				} else g(u);
			}
			t && ge(!0), G(f);
		}),
		flags: n,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, A && (c = j);
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
			if (_.f ^= T, _ === l) Vr(_, null, n);
			else {
				var y = d ? d.next : l;
				_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Hr(e, d, _), Hr(e, _, y), Vr(_, y, n), d = _, p = [], m = [], l = Rr(d.next);
				continue;
			}
		}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], C = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Vr(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Hr(e, S.prev, C.next), Hr(e, d, S), Hr(e, C, b), l = b, d = C, --v, p = [], m = [];
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
		var w = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || w.push(_);
		for (; l !== null;) !(l.f & 8192) && l !== e.fallback && w.push(l), l = Rr(l.next);
		var E = w.length;
		if (E > 0) {
			var ee = i & 4 && s === 0 ? n : null;
			if (o) {
				for (v = 0; v < E; v += 1) w[v].nodes?.a?.measure();
				for (v = 0; v < E; v += 1) w[v].nodes?.a?.fix();
			}
			Fr(e, w, ee);
		}
	}
	o && Ge(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Br(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? Pt(n) : /* @__PURE__ */ Ft(n, !1, !1) : null, l = o & 2 ? Pt(i) : null;
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
		var o = /* @__PURE__ */ Xt(r);
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
				rr(e), i && Ce(a, e) && (a = e, r.update(e));
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
	var o = e[ae];
	if (A || o !== n || o === void 0) {
		var s = Jr(n, r, a);
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
		var a = Zr(t, r);
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
		if (a = di(e) ? fi(a) : a, n(a), F !== null && r.add(F), await $n(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (A && e.defaultValue !== e.value || nr(t) == null && e.value) && (n(di(e) ? fi(e.value) : e.value), F !== null && r.add(F)), mn(() => {
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
	fn(() => (nr(() => n(e[t])), r));
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
	var i = !0, o = !!(n & 8), s = !!(n & 16), c = r, l = !0, u = void 0, d = () => s && i ? (u ??= /* @__PURE__ */ it(r), G(u)) : (l && (l = !1, c = s ? nr(r) : r), c);
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
	o && G(y);
	var b = W;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? G(y) : i && o ? Ht(e) : e;
			return L(y, n), v = !0, c !== void 0 && (c = n), e;
		}
		return An && v || b.f & 16384 ? y.v : G(y);
	});
}
function vi(e) {
	Le === null && Te("onMount"), ln(() => {
		let t = nr(e);
		if (typeof t == "function") return t;
	});
}
function yi(e) {
	Le === null && Te("onDestroy"), vi(() => () => nr(e));
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
var Ei = /* @__PURE__ */ q("<button class=\"secondary mini svelte-z8jt5q\"> </button>"), Di = /* @__PURE__ */ q("<button class=\"secondary mini svelte-z8jt5q\">⤢</button>"), Oi = /* @__PURE__ */ q("<span><i class=\"svelte-z8jt5q\"></i> </span>"), ki = /* @__PURE__ */ q("<span><i class=\"band-key svelte-z8jt5q\"></i> </span>"), Ai = /* @__PURE__ */ q("<div class=\"legend svelte-z8jt5q\"><!> <!></div>"), ji = /* @__PURE__ */ q("<p class=\"muted small empty svelte-z8jt5q\"> </p>"), Mi = /* @__PURE__ */ q("<th class=\"svelte-z8jt5q\"> </th>"), Ni = /* @__PURE__ */ q("<td class=\"svelte-z8jt5q\"> </td>"), Pi = /* @__PURE__ */ q("<tr><td class=\"svelte-z8jt5q\"> </td><!></tr>"), Fi = /* @__PURE__ */ q("<div class=\"table svelte-z8jt5q\"><table class=\"svelte-z8jt5q\"><thead><tr><th class=\"svelte-z8jt5q\"> </th><!></tr></thead><tbody></tbody></table></div>"), Ii = /* @__PURE__ */ xr("<text class=\"axis svelte-z8jt5q\"> </text>"), Li = /* @__PURE__ */ xr("<rect class=\"band svelte-z8jt5q\"></rect><!>", 1), Ri = /* @__PURE__ */ xr("<line class=\"grid svelte-z8jt5q\"></line><text class=\"axis svelte-z8jt5q\" text-anchor=\"end\"> </text>", 1), zi = /* @__PURE__ */ xr("<line class=\"ref svelte-z8jt5q\"></line><text class=\"axis svelte-z8jt5q\"> </text>", 1), Bi = /* @__PURE__ */ xr("<path class=\"line svelte-z8jt5q\"></path>"), Vi = /* @__PURE__ */ xr("<path class=\"wash svelte-z8jt5q\"></path>"), Hi = /* @__PURE__ */ xr("<!><!>", 1), Ui = /* @__PURE__ */ xr("<text class=\"end svelte-z8jt5q\"> </text>"), Wi = /* @__PURE__ */ xr("<circle r=\"4.5\" class=\"dot svelte-z8jt5q\"></circle>"), Gi = /* @__PURE__ */ xr("<line class=\"cross svelte-z8jt5q\"></line><!>", 1), Ki = /* @__PURE__ */ q("<div class=\"row svelte-z8jt5q\"><i class=\"svelte-z8jt5q\"></i><strong> </strong><span class=\"svelte-z8jt5q\"> </span></div>"), qi = /* @__PURE__ */ q("<div class=\"tip svelte-z8jt5q\"><div class=\"tip-time svelte-z8jt5q\"> </div> <!></div>"), Ji = /* @__PURE__ */ q("<div class=\"plot svelte-z8jt5q\"><svg role=\"img\" tabindex=\"0\"><!><!><!><!><clipPath><rect></rect></clipPath><g><!></g><!><!></svg> <!></div>"), Yi = /* @__PURE__ */ q("<div class=\"overlay svelte-z8jt5q\"><div class=\"big svelte-z8jt5q\" role=\"dialog\" aria-modal=\"true\"><!></div></div>"), Xi = /* @__PURE__ */ q("<section class=\"card chart svelte-z8jt5q\"><div class=\"head svelte-z8jt5q\"><h3 class=\"svelte-z8jt5q\"> </h3> <div class=\"tools svelte-z8jt5q\"><button class=\"secondary mini svelte-z8jt5q\"> </button> <!></div></div> <!> <!></section> <!>", 1);
function Zi(e, t) {
	ze(t, !0);
	let n = _i(t, "points", 19, () => []), r = _i(t, "series", 19, () => []), i = _i(t, "format", 3, (e) => String(e)), a = _i(t, "yMax", 3, null), o = _i(t, "refs", 19, () => []), s = _i(t, "bands", 19, () => []), c = _i(t, "smooth", 3, !1), l = _i(t, "live", 3, null), u = _i(t, "states", 3, null), d = _i(t, "aligned", 3, !1), f = _i(t, "onpan", 3, null), p = _i(t, "long", 3, !1), m = _i(t, "seconds", 3, !1), h = _i(t, "height", 3, 190), g = _i(t, "from", 3, null), _ = _i(t, "to", 3, null), v = _i(t, "onClose", 3, null), y = /* @__PURE__ */ I(!1), b = /* @__PURE__ */ I(400), x = "chart-" + Math.random().toString(36).slice(2, 8);
	function S() {
		L(b, Math.max(260, Math.round(window.innerHeight * .62)), !0), L(y, !0);
	}
	let C = {
		top: 12,
		right: 52,
		bottom: 24,
		left: 48
	}, w = /* @__PURE__ */ I(600), T = /* @__PURE__ */ I(-1), E = /* @__PURE__ */ I(!1), ee = {
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
	} : ee), O = /* @__PURE__ */ P(() => g() ?? (n().length ? n()[0].time : 0)), ne = /* @__PURE__ */ P(() => f() ? _() : Math.max(_() ?? 0, n().length ? n().at(-1).time : 1)), re = /* @__PURE__ */ P(() => Math.max(10, G(w) - C.left - C.right)), ie = /* @__PURE__ */ P(() => h() - C.top - C.bottom);
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
		for (let t of n()) if (!(f() && (t.time < G(O) || t.time > G(ne)))) for (let n of r()) e = Math.max(e, t[n.key] ?? 0);
		for (let t of o()) e = Math.max(e, t.value);
		return ae(e * 1.05);
	}), se = /* @__PURE__ */ P(() => [
		0,
		.25,
		.5,
		.75,
		1
	].map((e) => G(oe) * e)), ce = (e) => C.left + (G(ne) === G(O) ? G(re) : (e - G(O)) / (G(ne) - G(O)) * G(re)), le = (e) => C.top + G(ie) - Math.max(0, Math.min(e, G(oe))) / G(oe) * G(ie), ue = /* @__PURE__ */ P(() => l() ? [...n(), l()] : n()), de = /* @__PURE__ */ P(() => {
		if (G(ue).length < 2) return [G(ue)];
		let e = G(ue).slice(1).map((e, t) => e.time - G(ue)[t].time), t = [[G(ue)[0]]];
		for (let n = 1; n < G(ue).length; n++) {
			let r = e[n - 1];
			(r > (Math.max(e[n - 2] ?? 0, e[n] ?? 0) || r) * 3 || s().some((e) => G(ue)[n - 1].time <= e.from && G(ue)[n].time >= e.to)) && t.push([]), t.at(-1).push(G(ue)[n]);
		}
		return t;
	});
	function k(e, t) {
		let n = e.map((e) => [ce(e.time), le(e[t] ?? 0)]);
		return `M${n[0][0].toFixed(1)},${n[0][1].toFixed(1)}` + (c() ? Ci(n) : n.slice(1).map(([e, t]) => `L${e.toFixed(1)},${t.toFixed(1)}`)).join("");
	}
	function fe(e) {
		return G(de).filter((e) => e.length).map((t) => k(t, e)).join("");
	}
	let pe = /* @__PURE__ */ P(() => u() ? Ti(wi(u().points, u().phases, u().live), ce, le, u().gap ?? 3 * Math.max(2e4, (G(ne) - G(O)) / 300)) : []);
	function me(e) {
		let t = le(0).toFixed(1);
		return G(de).filter((e) => e.length > 1).map((n) => `${k(n, e)}L${ce(n.at(-1).time).toFixed(1)},${t}L${ce(n[0].time).toFixed(1)},${t}Z`).join("");
	}
	let he = /* @__PURE__ */ P(() => {
		if (!n().length) return [];
		let e = G(ue).at(-1), t = r().map((t) => ({
			...t,
			y: le(e[t.key] ?? 0),
			value: e[t.key]
		})), i = [...t].sort((e, t) => e.y - t.y);
		for (let e = 1; e < i.length; e++) if (i[e].y - i[e - 1].y < 14) return [];
		return t;
	});
	function A(e) {
		if (!n().length || e < ce(n()[0].time) - 8) return -1;
		let t = G(O) + (e - C.left) / G(re) * (G(ne) - G(O)), r = 0, i = n().length - 1;
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
			let n = (e.clientX - ge) / t.width * G(w);
			ge = e.clientX, L(T, -1), f()(n / G(re) * (G(ne) - G(O)));
		} else L(T, A((e.clientX - t.left) / t.width * G(w)), !0);
	}
	function ve(e) {
		let t = (e) => {
			if (!f()) return;
			e.preventDefault();
			let t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
			f()(Math.sign(t) * Math.min(1, Math.abs(t) / 100) * (G(ne) - G(O)) * .1);
		};
		return e.addEventListener("wheel", t, { passive: !1 }), { destroy: () => e.removeEventListener("wheel", t) };
	}
	function ye(e) {
		if (n().length) {
			if (e.key === "ArrowLeft") L(T, Math.max(0, (G(T) < 0 ? n().length : G(T)) - 1), !0);
			else if (e.key === "ArrowRight") L(T, Math.min(n().length - 1, G(T) + 1), !0);
			else if (e.key === "Escape") L(T, -1);
			else return;
			e.preventDefault();
		}
	}
	let be = /* @__PURE__ */ P(() => G(T) >= 0 && G(T) < n().length ? n()[G(T)] : null), xe = /* @__PURE__ */ P(() => G(be) ? Math.min(Math.max(ce(G(be).time) + 12, 0), G(w) - 170) : 0), Se = /* @__PURE__ */ P(() => d() || !!f()), Ce = [
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
		if (!G(Se)) return [
			0,
			.25,
			.5,
			.75,
			1
		].map((e) => G(O) + (G(ne) - G(O)) * e);
		let e = Ce.find((e) => (G(ne) - G(O)) / e <= 6) ?? 432e6, t = [];
		for (let n = Math.ceil(G(O) / e) * e; n <= G(ne); n += e) t.push(n);
		return t;
	});
	var Te = Xi();
	dr("keydown", Ut, (e) => G(y) && e.key === "Escape" && L(y, !1));
	var Ee = z(Te), De = R(Ee), Oe = R(De), ke = B(Oe, !0), Ae = V(Oe, 2), je = R(Ae), Me = B(je, !0), Ne = V(je, 2), Pe = (e) => {
		var t = Ei(), n = B(t);
		H((e) => Y(n, `✕ ${e ?? ""}`), [() => Si("common.close")]), K("click", t, function(...e) {
			v()?.apply(this, e);
		}), J(e, t);
	}, Fe = (e) => {
		var t = Di();
		H((e, n) => {
			$(t, "title", e), $(t, "aria-label", n);
		}, [() => Si("health.expand"), () => Si("health.expand")]), K("click", t, S), J(e, t);
	};
	X(Ne, (e) => {
		v() ? e(Pe) : e(Fe, -1);
	}), M(Ae), M(De);
	var Ie = V(De, 2), Le = (e) => {
		var t = Ai(), n = R(t), i = (e) => {
			var t = Sr();
			Q(z(t), 17, r, Z, (e, t) => {
				var n = Oi(), r = R(n), i = V(r, 1, !0);
				M(n), H(() => {
					ei(r, `background: ${G(t).color ?? ""}`), Y(i, G(t).label);
				}), J(e, n);
			}), J(e, t);
		};
		X(n, (e) => {
			r().length > 1 && e(i);
		}), Q(V(n, 2), 17, () => [...new Map(s().map((e) => [e.label, e])).values()], Z, (e, t) => {
			var n = ki(), r = R(n), i = V(r, 1, !0);
			M(n), H(() => {
				ei(r, G(t).color ? `background: ${G(t).color}` : ""), Y(i, G(t).label);
			}), J(e, n);
		}), M(t), J(e, t);
	};
	X(Ie, (e) => {
		(r().length > 1 || s().length) && e(Le);
	});
	var Re = V(Ie, 2), Ve = (e) => {
		var t = ji(), n = B(t, !0);
		H((e) => Y(n, e), [() => Si("health.noData")]), J(e, t);
	}, He = (e) => {
		var t = Fi(), a = R(t), o = R(a), s = R(o), c = R(s), l = B(c, !0);
		Q(V(c), 17, r, Z, (e, t) => {
			var n = Mi(), r = B(n, !0);
			H(() => Y(r, G(t).label)), J(e, n);
		}), M(s), M(o);
		var u = V(o);
		Q(u, 21, () => [...n()].reverse(), (e) => e.time, (e, t) => {
			var n = Pi(), a = R(n), o = B(a, !0);
			Q(V(a), 17, r, Z, (e, n) => {
				var r = Ni(), a = B(r, !0);
				H((e) => Y(a, e), [() => i()(G(t)[G(n).key])]), J(e, r);
			}), M(n), H((e) => Y(o, e), [() => D(G(t).time)]), J(e, n);
		}), M(u), M(a), M(t), H((e) => Y(l, e), [() => Si("health.time")]), J(e, t);
	}, Ue = (e) => {
		var n = Ji(), a = R(n);
		let c;
		var l = R(a);
		Q(l, 17, s, Z, (e, t) => {
			let n = /* @__PURE__ */ P(() => ce(Math.max(G(t).from, G(O)))), r = /* @__PURE__ */ P(() => Math.max(2, ce(Math.min(G(t).to, G(ne))) - G(n)));
			var i = Li(), a = z(i), o = V(a), s = (e) => {
				var r = Ii(), i = B(r, !0);
				H(() => {
					$(r, "x", G(n) + 6), $(r, "y", C.top + 14), Y(i, G(t).label);
				}), J(e, r);
			};
			X(o, (e) => {
				G(r) >= 34 && e(s);
			}), H(() => {
				$(a, "x", G(n)), $(a, "y", C.top), $(a, "width", G(r)), $(a, "height", G(ie)), ei(a, G(t).color ? `fill: ${G(t).color}` : "");
			}), J(e, i);
		});
		var d = V(l);
		Q(d, 17, () => G(se), Z, (e, t) => {
			var n = Ri(), r = z(n), a = V(r), o = B(a, !0);
			H((e, t, n, i) => {
				$(r, "x1", C.left), $(r, "x2", C.left + G(re)), $(r, "y1", e), $(r, "y2", t), $(a, "x", C.left - 6), $(a, "y", n), Y(o, i);
			}, [
				() => le(G(t)),
				() => le(G(t)),
				() => le(G(t)) + 4,
				() => i()(G(t))
			]), J(e, n);
		});
		var p = V(d);
		Q(p, 17, () => G(we), Z, (e, t, n) => {
			var r = Ii(), i = B(r, !0);
			H((e, t) => {
				$(r, "x", e), $(r, "y", h() - 6), $(r, "text-anchor", G(Se) ? "middle" : n === 0 ? "start" : n === 4 ? "end" : "middle"), Y(i, t);
			}, [() => ce(G(t)), () => te(G(t))]), J(e, r);
		});
		var m = V(p);
		Q(m, 17, o, Z, (e, t) => {
			var n = zi(), r = z(n), i = V(r), a = B(i, !0);
			H((e, n, o) => {
				$(r, "x1", C.left), $(r, "x2", C.left + G(re)), $(r, "y1", e), $(r, "y2", n), ei(r, G(t).color ? `stroke: ${G(t).color}` : ""), $(i, "x", C.left + 4), $(i, "y", o), Y(a, G(t).label);
			}, [
				() => le(G(t).value),
				() => le(G(t).value),
				() => le(G(t).value) - 4
			]), J(e, n);
		});
		var g = V(m), _ = R(g);
		$(_, "y", 0), M(g);
		var v = V(g), y = R(v), b = (e) => {
			var t = Sr();
			Q(z(t), 17, () => G(pe), Z, (e, t) => {
				var n = Bi();
				H(() => {
					$(n, "d", G(t).d), ei(n, `stroke: ${G(t).color ?? ""}`);
				}), J(e, n);
			}), J(e, t);
		}, S = (e) => {
			var t = Hi(), n = z(t), i = (e) => {
				var t = Vi();
				H((e) => {
					$(t, "d", e), ei(t, `fill: ${r()[0].color ?? ""}`);
				}, [() => me(r()[0].key)]), J(e, t);
			};
			X(n, (e) => {
				r().length === 1 && e(i);
			}), Q(V(n), 17, r, Z, (e, t) => {
				var n = Bi();
				H((e) => {
					$(n, "d", e), ei(n, `stroke: ${G(t).color ?? ""}`);
				}, [() => fe(G(t).key)]), J(e, n);
			}), J(e, t);
		};
		X(y, (e) => {
			u() ? e(b) : e(S, -1);
		}), M(v);
		var E = V(v);
		Q(E, 17, () => G(he), Z, (e, t) => {
			var n = Ui(), r = B(n, !0);
			H((e) => {
				$(n, "x", C.left + G(re) + 6), $(n, "y", G(t).y + 4), Y(r, e);
			}, [() => i()(G(t).value)]), J(e, n);
		});
		var ee = V(E), ae = (e) => {
			var t = Gi(), n = z(t);
			Q(V(n), 17, r, Z, (e, t) => {
				var n = Wi();
				H((e, r) => {
					$(n, "cx", e), $(n, "cy", r), ei(n, `fill: ${G(t).color ?? ""}`);
				}, [() => ce(G(be).time), () => le(G(be)[G(t).key] ?? 0)]), J(e, n);
			}), H((e, t) => {
				$(n, "x1", e), $(n, "x2", t), $(n, "y1", C.top), $(n, "y2", C.top + G(ie));
			}, [() => ce(G(be).time), () => ce(G(be).time)]), J(e, t);
		};
		X(ee, (e) => {
			G(be) && e(ae);
		}), M(a), Ur(a, (e) => ve?.(e));
		var oe = V(a, 2), ue = (e) => {
			var t = qi(), n = R(t), a = B(n, !0);
			Q(V(n, 2), 17, r, Z, (e, t) => {
				var n = Ki(), r = R(n), a = V(r), o = B(a, !0), s = B(V(a), !0);
				M(n), H((e) => {
					ei(r, `background: ${G(t).color ?? ""}`), Y(o, e), Y(s, G(t).label);
				}, [() => i()(G(be)[G(t).key])]), J(e, n);
			}), M(t), H((e) => {
				ei(t, `left: ${G(xe) ?? ""}px`), Y(a, e);
			}, [() => D(G(be).time)]), J(e, t);
		};
		X(oe, (e) => {
			G(be) && e(ue);
		}), M(n), H(() => {
			$(a, "viewBox", `0 0 ${G(w) ?? ""} ${h() ?? ""}`), $(a, "height", h()), $(a, "aria-label", t.title), c = Qr(a, 0, "svelte-z8jt5q", null, c, { pans: f() }), $(g, "id", x), $(_, "x", C.left), $(_, "width", G(re)), $(_, "height", h()), $(v, "clip-path", `url(#${x})`);
		}), K("pointerdown", a, j), K("pointerup", a, () => ge = null), dr("pointercancel", a, () => ge = null), K("pointermove", a, _e), dr("pointerleave", a, () => L(T, -1)), K("keydown", a, ye), mi(n, "clientWidth", (e) => L(w, e)), J(e, n);
	};
	X(Re, (e) => {
		!n().length && !s().length ? e(Ve) : G(E) ? e(He, 1) : e(Ue, -1);
	}), M(Ee);
	var We = V(Ee, 2), Ge = (e) => {
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
				return G(b);
			},
			onClose: () => L(y, !1)
		}), M(v), M(h), H(() => $(v, "aria-label", t.title)), K("click", h, (e) => e.target === e.currentTarget && L(y, !1)), J(e, h);
	};
	X(We, (e) => {
		G(y) && e(Ge);
	}), H((e) => {
		Y(ke, t.title), $(je, "aria-pressed", G(E)), Y(Me, e);
	}, [() => G(E) ? Si("health.chart") : Si("health.table")]), K("click", je, () => L(E, !G(E))), J(e, Te), Be();
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
		speed: "Geschwindigkeit",
		noTerrain: "Gelände hier nicht aufgezeichnet (Chunks waren nicht geladen)"
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
var ia = /* @__PURE__ */ q("<button> </button>"), aa = /* @__PURE__ */ q("<span class=\"gap svelte-pbz4pw\"></span>"), oa = /* @__PURE__ */ q("<!> <button></button>", 1), sa = /* @__PURE__ */ q("<button></button>"), ca = /* @__PURE__ */ q("<div class=\"strip svelte-pbz4pw\" role=\"group\"><!> <!></div>"), la = /* @__PURE__ */ q("<div class=\"player svelte-pbz4pw\"><button class=\"secondary small svelte-pbz4pw\">◀</button> <button class=\"small svelte-pbz4pw\"> </button> <button class=\"secondary small svelte-pbz4pw\">▶</button> <input class=\"scrub svelte-pbz4pw\" type=\"range\" min=\"0\"/> <span class=\"when svelte-pbz4pw\"> </span> <div class=\"speeds svelte-pbz4pw\" role=\"group\"></div></div> <!>", 1), ua = /* @__PURE__ */ xr("<image preserveAspectRatio=\"none\" class=\"tile svelte-pbz4pw\"></image>"), da = /* @__PURE__ */ xr("<image width=\"256\" height=\"256\" preserveAspectRatio=\"none\" class=\"tile svelte-pbz4pw\"></image>"), fa = /* @__PURE__ */ xr("<rect class=\"mark svelte-pbz4pw\"><title> </title></rect>"), pa = /* @__PURE__ */ xr("<polyline class=\"path old svelte-pbz4pw\"></polyline>"), ma = /* @__PURE__ */ xr("<polyline class=\"path svelte-pbz4pw\"></polyline>"), ha = /* @__PURE__ */ xr("<!><!>", 1), ga = /* @__PURE__ */ xr("<circle class=\"ent svelte-pbz4pw\"><title> </title></circle>"), _a = /* @__PURE__ */ xr("<path class=\"desp svelte-pbz4pw\"><title> </title></path>"), va = /* @__PURE__ */ xr("<rect width=\"3\" height=\"3\"><title> </title></rect>"), ya = /* @__PURE__ */ xr("<circle r=\"2.6\" class=\"other svelte-pbz4pw\"><title> </title></circle>"), ba = /* @__PURE__ */ q("<div><span class=\"svelte-pbz4pw\"> </span><b class=\"svelte-pbz4pw\"> </b> </div>"), xa = /* @__PURE__ */ q("<div class=\"row svelte-pbz4pw\"><b class=\"svelte-pbz4pw\"> </b> </div>"), Sa = /* @__PURE__ */ q("<div class=\"row muted svelte-pbz4pw\"> </div>"), Ca = /* @__PURE__ */ q("<div class=\"row svelte-pbz4pw\"><b class=\"svelte-pbz4pw\"> </b></div>"), wa = /* @__PURE__ */ q("<div> </div>"), Ta = /* @__PURE__ */ q("<div class=\"row svelte-pbz4pw\"><span class=\"svelte-pbz4pw\"> </span> </div>"), Ea = /* @__PURE__ */ q("<h4 class=\"t-title svelte-pbz4pw\"> <span class=\"muted\"> </span></h4> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!> <!> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!> <!> <!> <!></section>", 1), Da = /* @__PURE__ */ q("<div class=\"row svelte-pbz4pw\"><span class=\"svelte-pbz4pw\"> </span> <b class=\"svelte-pbz4pw\"> </b> </div>"), Oa = /* @__PURE__ */ q("<h4 class=\"t-title svelte-pbz4pw\"> </h4> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section> <section class=\"svelte-pbz4pw\"><h5 class=\"svelte-pbz4pw\"> </h5> <!></section>", 1), ka = /* @__PURE__ */ q("<span><i class=\"line svelte-pbz4pw\"></i> </span>"), Aa = /* @__PURE__ */ q("<small class=\"svelte-pbz4pw\"> </small>"), ja = /* @__PURE__ */ q("<span class=\"svelte-pbz4pw\"> <!></span>"), Ma = /* @__PURE__ */ q("<span class=\"muted small svelte-pbz4pw\"> </span>"), Na = /* @__PURE__ */ q("<h4 class=\"svelte-pbz4pw\"> </h4> <div class=\"inv svelte-pbz4pw\"></div>", 1), Pa = /* @__PURE__ */ q("<div class=\"lmap svelte-pbz4pw\"><div class=\"lhead svelte-pbz4pw\"><div><h3 class=\"svelte-pbz4pw\"> </h3> <p class=\"muted small svelte-pbz4pw\"> </p></div> <div class=\"layers svelte-pbz4pw\"><button> </button> <button> </button> <button> </button> <!> <button> </button></div></div> <!> <div class=\"split svelte-pbz4pw\"><div class=\"mapbox svelte-pbz4pw\"><svg preserveAspectRatio=\"none\" class=\"svelte-pbz4pw\"><defs><pattern id=\"tlog-nodata\" width=\"8\" height=\"8\" patternUnits=\"userSpaceOnUse\" patternTransform=\"rotate(45)\"><rect width=\"8\" height=\"8\" class=\"nodata-bg svelte-pbz4pw\"></rect><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"8\" class=\"nodata-line svelte-pbz4pw\"></line></pattern></defs><rect fill=\"url(#tlog-nodata)\"><title> </title></rect><!><!><!><!><!><!><!><!><!><circle r=\"3.4\" class=\"me svelte-pbz4pw\"><title> </title></circle></svg> <span class=\"coords svelte-pbz4pw\"> </span></div> <div class=\"table svelte-pbz4pw\"><!></div></div> <div class=\"legend muted small svelte-pbz4pw\"><span><i style=\"background: var(--bad)\" class=\"svelte-pbz4pw\"></i> </span> <span><i style=\"background: var(--good)\" class=\"svelte-pbz4pw\"></i> </span> <span><i style=\"background: var(--warn)\" class=\"svelte-pbz4pw\"></i> </span> <span><i style=\"background: var(--muted)\" class=\"svelte-pbz4pw\"></i> </span> <span> </span> <span> </span> <!></div> <!></div>");
function Fa(e, t) {
	ze(t, !0);
	let n = _i(t, "mark", 3, null), r = (e, n) => $i(t.lang, e, n), i = /* @__PURE__ */ P(() => t.log.area ?? null), a = /* @__PURE__ */ P(() => t.log.timeline ?? null), o = /* @__PURE__ */ P(() => G(a)?.minutes ?? []), s = /* @__PURE__ */ P(() => G(a)?.types ?? []), c = /* @__PURE__ */ P(() => G(a)?.categories ?? []), l = /* @__PURE__ */ P(() => G(a)?.chunks ?? []), u = /* @__PURE__ */ P(() => Object.values(G(a)?.tiles ?? {}).map((e) => ({
		...e,
		image: ea(e.image)
	})).filter((e) => e.image)), d = /* @__PURE__ */ P(() => ea(G(i)?.image)), f = /* @__PURE__ */ P(() => {
		let e = [];
		return G(o).forEach((t, n) => {
			for (let r of t.frames ?? []) e.push({
				kind: "frame",
				mi: n,
				time: ra(r[0]),
				world: String(r[1]),
				x: ra(r[2]),
				z: ra(r[3]),
				refs: r[4] ?? []
			});
		}), G(i) && e.push({
			kind: "created",
			mi: -1,
			time: ra(t.log.time),
			world: String(G(i).world),
			x: ra(G(i).center?.[0]),
			z: ra(G(i).center?.[1])
		}), e;
	}), p = /* @__PURE__ */ I(-1), h = /* @__PURE__ */ P(() => G(p) < 0 || G(p) >= G(f).length ? G(f).length - 1 : G(p)), g = /* @__PURE__ */ P(() => G(f)[G(h)]), _ = /* @__PURE__ */ P(() => G(g) && G(g).mi >= 0 ? G(o)[G(g).mi] : null), v = [
		10,
		30,
		60
	], y = /* @__PURE__ */ I(30), b = /* @__PURE__ */ I(!1), x = null;
	function S() {
		G(h) >= G(f).length - 1 ? w() : L(p, G(h) + 1);
	}
	function C() {
		if (G(b)) return w();
		G(h) >= G(f).length - 1 && L(p, 0), L(b, !0), x = setInterval(S, 5e3 / G(y));
	}
	function w() {
		L(b, !1), clearInterval(x);
	}
	function T(e) {
		L(y, e, !0), G(b) && (clearInterval(x), x = setInterval(S, 5e3 / G(y)));
	}
	yi(w);
	let E = (e) => {
		w(), L(p, Math.max(0, Math.min(G(f).length - 1, e)), !0);
	}, ee = (e) => G(f).findIndex((t) => t.mi === e), D = Ht({
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
	}, O = /* @__PURE__ */ P(() => G(g) ? {
		x: G(g).x - 128,
		z: G(g).z - 128
	} : {
		x: 0,
		z: 0
	}), ne = /* @__PURE__ */ P(() => G(g) ? G(u).filter((e) => e.world === G(g).world && e.x0 < G(O).x + 256 && e.x0 + 256 > G(O).x && e.z0 < G(O).z + 256 && e.z0 + 256 > G(O).z) : []);
	function re(e) {
		let t = [];
		for (let n of e) {
			let e = G(l)[n] ?? [];
			for (let n = 0; n + 4 < e.length; n += 5) t.push([
				G(s)[e[n]] ?? "?",
				G(c)[e[n + 1]] ?? "other",
				e[n + 2],
				e[n + 3],
				e[n + 4]
			]);
		}
		return t;
	}
	let ie = /* @__PURE__ */ P(() => G(g)?.kind === "frame" ? re(G(g).refs) : G(i)?.entities ?? []), ae = 2e4, oe = /* @__PURE__ */ P(() => G(o).flatMap((e) => e.despawnRows ?? [])), se = /* @__PURE__ */ P(() => G(o).flatMap((e) => e.deaths ?? [])), ce = /* @__PURE__ */ P(() => G(g)?.kind === "frame" ? G(oe).filter((e) => e[0] <= G(g).time && e[0] > G(g).time - ae) : G(i)?.despawned?.rows ?? []), le = /* @__PURE__ */ P(() => G(g)?.kind === "frame" ? G(se).filter((e) => e.time <= G(g).time && e.time > G(g).time - ae) : G(i)?.deaths?.rows ?? []), ue = (e) => G(g)?.kind === "frame" ? Math.max(.25, 1 - (G(g).time - e) / ae) : 1, de = /* @__PURE__ */ P(() => {
		if (!G(g)) return {
			old: [],
			now: []
		};
		let e = [], t = [], n = null, r = [];
		for (let i of G(f)) {
			if (i.kind !== "frame" || i.time > G(g).time) break;
			if (i.world !== G(g).world) {
				t.length > 1 && e.push(t), t = [];
				continue;
			}
			let a = [i.x + .5, i.z + .5];
			i.mi === G(g).mi ? r.push(a) : (n !== null && i.mi !== n && t.length && (t = [t.at(-1)]), t.push(a), n = i.mi);
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
		if (!G(_)) return null;
		let e = G(_), n = e.start, i = e.start + 6e4, a = A(e.frames?.at(-1)?.[4]), s = G(g).mi > 0 ? G(o)[G(g).mi - 1] : null, c = s ? A(s.frames?.at(-1)?.[4]) : null, l = [];
		c && (l = [.../* @__PURE__ */ new Set([...Object.keys(c), ...Object.keys(a)])].map((e) => [e, (a[e] ?? 0) - (c[e] ?? 0)]).filter(([, e]) => e !== 0).sort((e, t) => Math.abs(t[1]) - Math.abs(e[1])).slice(0, 4));
		let u = G(ge).filter((e) => e.time >= n && e.time < i), d = (t.log.console?.lines ?? []).filter(([e, t]) => e >= n && e < i && (t === "warn" || t === "error")), f = (t.log.events ?? []).filter((e) => e.time >= n && e.time < i), p = (e) => `${Math.round(he(e) * 10) / 10} (${Object.entries(e).map(([e, t]) => `${pe(e)} ${t}`).join(", ")})`;
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
	let ve = (e) => e > 0 && G(o)[e].start - G(o)[e - 1].start > 6e4, ye = (e) => Math.min(4, .9 + Math.log2(ra(e) + 1) * .6);
	var be = Sr(), xe = z(be), Se = (e) => {
		var a = Pa(), s = R(a), c = R(s), l = R(c), u = B(l, !0), p = B(V(l, 2), !0);
		M(c);
		var x = V(c, 2), S = R(x);
		let w;
		var re = B(S, !0), ae = V(S, 2);
		let oe;
		var se = B(ae, !0), me = V(ae, 2);
		let he;
		var A = B(me, !0), ge = V(me, 2), be = (e) => {
			var t = ia();
			let n;
			var i = B(t, !0);
			H((e) => {
				n = Qr(t, 1, "svelte-pbz4pw", null, n, { on: D.path }), Y(i, e);
			}, [() => r("layerPath")]), K("click", t, () => D.path = !D.path), J(e, t);
		};
		X(ge, (e) => {
			G(o).length && e(be);
		});
		var xe = V(ge, 2);
		let Se;
		var Ce = B(xe, !0);
		M(x), M(s);
		var we = V(s, 2), Te = (e) => {
			var t = la(), n = z(t), a = R(n), s = V(a, 2), c = B(s, !0), l = V(s, 2), u = V(l, 2);
			ai(u);
			var d = V(u, 2), p = B(d, !0), m = V(d, 2);
			Q(m, 21, () => v, Z, (e, t) => {
				var n = ia();
				let r;
				var i = B(n);
				H(() => {
					r = Qr(n, 1, "svelte-pbz4pw", null, r, { on: G(y) === G(t) }), Y(i, `${G(t) ?? ""}×`);
				}), K("click", n, () => T(G(t))), J(e, n);
			}), M(m), M(n);
			var _ = V(n, 2), x = (e) => {
				var t = ca(), n = R(t);
				Q(n, 17, () => G(o), Z, (e, t, n) => {
					var i = oa(), a = z(i), o = (e) => {
						var t = aa();
						H((e) => $(t, "title", e), [() => r("offline")]), J(e, t);
					}, s = /* @__PURE__ */ P(() => ve(n));
					X(a, (e) => {
						G(s) && e(o);
					});
					var c = V(a, 2);
					let l;
					H((e, t, r) => {
						l = Qr(c, 1, `seg ${e ?? ""}`, "svelte-pbz4pw", l, { sel: G(g).mi === n }), $(c, "title", t), $(c, "aria-label", r);
					}, [
						() => _e(G(t)),
						() => fe(G(t).start),
						() => fe(G(t).start)
					]), K("click", c, () => E(ee(n))), J(e, i);
				});
				var a = V(n, 2), s = (e) => {
					var t = sa();
					let n;
					H((e, r) => {
						n = Qr(t, 1, "seg created svelte-pbz4pw", null, n, { sel: G(g).kind === "created" }), $(t, "title", e), $(t, "aria-label", r);
					}, [() => r("created"), () => r("created")]), K("click", t, () => E(G(f).length - 1)), J(e, t);
				};
				X(a, (e) => {
					G(i) && e(s);
				}), M(t), H((e) => $(t, "aria-label", e), [() => r("minutes")]), J(e, t);
			};
			X(_, (e) => {
				G(o).length && e(x);
			}), H((e, t, n, r, i, o) => {
				a.disabled = G(h) === 0, $(a, "aria-label", e), $(s, "aria-label", t), Y(c, G(b) ? "❚❚" : "▶"), l.disabled = G(h) === G(f).length - 1, $(l, "aria-label", n), $(u, "max", G(f).length - 1), oi(u, G(h)), $(u, "aria-label", r), Y(p, i), $(m, "aria-label", o);
			}, [
				() => r("prev"),
				() => r("play"),
				() => r("next"),
				() => r("minutes"),
				() => G(g).kind === "created" ? r("created") : k(G(g).time),
				() => r("speed")
			]), K("click", a, () => E(G(h) - 1)), K("click", s, C), K("click", l, () => E(G(h) + 1)), K("input", u, (e) => E(Number(e.currentTarget.value))), J(e, t);
		};
		X(we, (e) => {
			G(f).length > 1 && e(Te);
		});
		var Ee = V(we, 2), De = R(Ee), Oe = R(De), ke = V(R(Oe));
		$(ke, "width", 256), $(ke, "height", 256);
		var Ae = B(R(ke), !0);
		M(ke);
		var je = V(ke), Me = (e) => {
			var t = ua();
			H(() => {
				$(t, "href", G(d)), $(t, "x", G(i).x0), $(t, "y", G(i).z0), $(t, "width", G(i).size), $(t, "height", G(i).size);
			}), J(e, t);
		};
		X(je, (e) => {
			G(d) && G(i).world === G(g).world && G(g).kind === "frame" && e(Me);
		});
		var Ne = V(je);
		Q(Ne, 17, () => G(ne), Z, (e, t) => {
			var n = da();
			H(() => {
				$(n, "href", G(t).image), $(n, "x", G(t).x0), $(n, "y", G(t).z0);
			}), J(e, n);
		});
		var Pe = V(Ne), Fe = (e) => {
			var t = ua();
			H(() => {
				$(t, "href", G(d)), $(t, "x", G(i).x0), $(t, "y", G(i).z0), $(t, "width", G(i).size), $(t, "height", G(i).size);
			}), J(e, t);
		};
		X(Pe, (e) => {
			G(g).kind === "created" && G(d) && e(Fe);
		});
		var Ie = V(Pe), Le = (e) => {
			var t = fa(), r = B(R(t), !0);
			M(t), H(() => {
				$(t, "x", n().x0), $(t, "y", n().z0), $(t, "width", n().x1 - n().x0 + 1), $(t, "height", n().z1 - n().z0 + 1), Y(r, n().label);
			}), J(e, t);
		};
		X(Ie, (e) => {
			n() && e(Le);
		});
		var Re = V(Ie), ze = (e) => {
			var t = ha(), n = z(t);
			Q(n, 17, () => G(de).old, Z, (e, t) => {
				var n = pa();
				H((e) => $(n, "points", e), [() => G(t).map((e) => e.join(",")).join(" ")]), J(e, n);
			});
			var r = V(n), i = (e) => {
				var t = ma();
				H((e) => $(t, "points", e), [() => G(de).now.map((e) => e.join(",")).join(" ")]), J(e, t);
			};
			X(r, (e) => {
				G(de).now.length > 1 && e(i);
			}), J(e, t);
		};
		X(Re, (e) => {
			D.path && e(ze);
		});
		var Be = V(Re), Ve = (e) => {
			var t = Sr();
			Q(z(t), 17, () => G(ie), Z, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(G(t), 5));
				let r = () => G(n)[0], i = () => G(n)[1], a = () => G(n)[2], o = () => G(n)[3], s = () => G(n)[4];
				var c = ga(), l = B(R(c));
				M(c), H((e, t, n, r) => {
					$(c, "cx", e), $(c, "cy", t), $(c, "r", n), $(c, "fill", te[i()] ?? te.other), Y(l, `${r ?? ""} × ${s() ?? ""} · ${a() ?? ""}${o() ?? ""}`);
				}, [
					() => ra(a()) + 1,
					() => ra(o()) + 1,
					() => ye(s()),
					() => pe(r())
				]), J(e, c);
			}), J(e, t);
		};
		X(Be, (e) => {
			D.entities && e(Ve);
		});
		var He = V(Be), Ue = (e) => {
			var t = Sr();
			Q(z(t), 17, () => G(ce), Z, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(G(t), 5));
				let r = () => G(n)[0], i = () => G(n)[1], a = () => G(n)[2], o = () => G(n)[3], s = () => G(n)[4];
				var c = _a(), l = B(R(c));
				M(c), H((e, t, n, r, i, a) => {
					$(c, "d", `M${e ?? ""},${t ?? ""}l2.6,2.6M${n ?? ""},${r ?? ""}l-2.6,2.6`), $(c, "opacity", i), Y(l, `${a ?? ""} · ${o() ?? ""} × ${s() ?? ""}`);
				}, [
					() => ra(i()) - .8,
					() => ra(a()) - .8,
					() => ra(i()) + 1.8,
					() => ra(a()) - .8,
					() => ue(r()),
					() => k(r())
				]), J(e, c);
			}), J(e, t);
		};
		X(He, (e) => {
			D.despawned && e(Ue);
		});
		var We = V(He), Ge = (e) => {
			var t = Sr();
			Q(z(t), 17, () => G(le), Z, (e, t) => {
				var n = va();
				let r;
				var i = B(R(n));
				M(n), H((e, a, o, s, c, l, u, d, f) => {
					$(n, "x", e), $(n, "y", a), r = Qr(n, 0, "death svelte-pbz4pw", null, r, { pl: o }), $(n, "opacity", s), $(n, "transform", `rotate(45 ${c ?? ""} ${l ?? ""})`), Y(i, `${u ?? ""} · ${d ?? ""}${f ?? ""}${G(t).message ? " · " + G(t).message : ""}`);
				}, [
					() => ra(G(t).x) - 1,
					() => ra(G(t).z) - 1,
					() => String(G(t).type).startsWith("player:"),
					() => ue(G(t).time),
					() => ra(G(t).x) + .5,
					() => ra(G(t).z) + .5,
					() => k(G(t).time),
					() => pe(G(t).type),
					() => G(t).cause ? " · " + pe(G(t).cause) : ""
				]), J(e, n);
			}), J(e, t);
		};
		X(We, (e) => {
			D.deaths && e(Ge);
		});
		var Ke = V(We), qe = (e) => {
			var t = Sr();
			Q(z(t), 17, () => G(i)?.players ?? [], Z, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(G(t), 3));
				let r = () => G(n)[0], i = () => G(n)[1], a = () => G(n)[2];
				var o = ya(), s = B(R(o), !0);
				M(o), H((e, t) => {
					$(o, "cx", e), $(o, "cy", t), Y(s, r());
				}, [() => ra(i()) + .5, () => ra(a()) + .5]), J(e, o);
			}), J(e, t);
		};
		X(Ke, (e) => {
			D.players && G(g).kind === "created" && e(qe);
		});
		var N = V(Ke), Je = B(R(N));
		M(N), M(Oe);
		var Ye = B(V(Oe, 2));
		M(De);
		var Xe = V(De, 2), Ze = R(Xe), Qe = (e) => {
			var t = Ea(), n = z(t), i = R(n), a = B(V(i));
			M(n);
			var s = V(n, 2), c = R(s), l = B(c, !0), u = V(c, 2);
			Q(u, 17, () => G(j).events, Z, (e, t) => {
				var n = ba();
				let i;
				var a = R(n), o = B(a, !0), s = V(a), c = B(s, !0), l = V(s);
				M(n), H((e, r, a) => {
					i = Qr(n, 1, `row ev ${G(t).kind === "death" ? "death" : ""}`, "svelte-pbz4pw", i, { now: e }), Y(o, r), Y(c, a), Y(l, ` ${G(t).text ?? ""}`);
				}, [
					() => Math.abs(G(t).time - G(g).time) < 5e3,
					() => k(G(t).time),
					() => r("ev_" + ([
						"join",
						"quit",
						"death",
						"teleport"
					].includes(G(t).kind) ? G(t).kind : "join"))
				]), J(e, n);
			});
			var d = V(u, 2);
			Q(d, 17, () => G(j).actions, Z, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(G(t), 2));
				let r = () => G(n)[0], i = () => G(n)[1];
				var a = xa(), o = R(a), s = B(o, !0), c = V(o);
				M(a), H(() => {
					Y(s, r()), Y(c, ` ${i() ?? ""}`);
				}), J(e, a);
			});
			var f = V(d, 2), p = (e) => {
				var t = Sa(), n = B(t, !0);
				H((e) => Y(n, e), [() => r("none")]), J(e, t);
			};
			X(f, (e) => {
				!G(j).events.length && !G(j).actions.length && e(p);
			}), M(s);
			var h = V(s, 2), v = R(h), y = B(v, !0);
			Q(V(v, 2), 17, () => G(j).around, Z, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(G(t), 2));
				let r = () => G(n)[0], i = () => G(n)[1];
				var a = xa(), o = R(a), s = B(o, !0), c = V(o);
				M(a), H(() => {
					Y(s, r()), Y(c, ` ${i() ?? ""}`);
				}), J(e, a);
			}), M(h);
			var b = V(h, 2), x = R(b), S = B(x, !0), C = V(x, 2);
			Q(C, 17, () => G(j).server, Z, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(G(t), 2));
				let r = () => G(n)[0], i = () => G(n)[1];
				var a = xa(), o = R(a), s = B(o, !0), c = V(o);
				M(a), H(() => {
					Y(s, r()), Y(c, ` ${i() ?? ""}`);
				}), J(e, a);
			}, (e) => {
				var t = Sa(), n = B(t, !0);
				H((e) => Y(n, e), [() => r("mNoServer")]), J(e, t);
			});
			var w = V(C, 2), T = (e) => {
				var t = Ca(), n = B(R(t), !0);
				M(t), H((e) => Y(n, e), [() => r("mProblems", { n: G(j).lineCount })]), J(e, t);
			};
			X(w, (e) => {
				G(j).lineCount && e(T);
			});
			var E = V(w, 2);
			Q(E, 17, () => G(j).lines, Z, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(G(t), 3));
				let r = () => G(n)[1], i = () => G(n)[2];
				var a = wa(), o = B(a, !0);
				H(() => {
					Qr(a, 1, `row line ${r() === "error" ? "error" : "warn"}`, "svelte-pbz4pw"), Y(o, i());
				}), J(e, a);
			}), Q(V(E, 2), 17, () => G(j).evts, Z, (e, t) => {
				var n = Ta(), r = R(n), i = B(r, !0), a = V(r);
				M(n), H((e) => {
					ei(r, `color: ${e ?? ""}`), Y(i, G(t).source), Y(a, ` ${G(t).text ?? ""}`);
				}, [() => ta(G(t).color)]), J(e, n);
			}), M(b), H((e, t, n, r, o, s) => {
				Y(i, `${e ?? ""}–${t ?? ""} `), Y(a, `· ${n ?? ""}`), Y(l, r), Y(y, o), Y(S, s);
			}, [
				() => fe(G(_).start),
				() => fe(G(_).start + 6e4),
				() => r("minuteOf", {
					n: G(g).mi + 1,
					of: G(o).length
				}),
				() => r("mActions"),
				() => r("mAround"),
				() => r("server")
			]), J(e, t);
		}, $e = (e) => {
			var t = Oa(), n = z(t), a = B(n), o = V(n, 2), s = R(o), c = B(s, !0);
			Q(V(s, 2), 17, () => Object.entries((G(i)?.entities ?? []).reduce((e, [t, , , , n]) => (e[t] = (e[t] ?? 0) + ra(n), e), {})).sort((e, t) => t[1] - e[1]).slice(0, 10), Z, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(G(t), 2));
				let r = () => G(n)[0], i = () => G(n)[1];
				var a = xa(), o = R(a), s = B(o), c = V(o);
				M(a), H((e) => {
					Y(s, `${i() ?? ""}×`), Y(c, ` ${e ?? ""}`);
				}, [() => pe(r())]), J(e, a);
			}, (e) => {
				var t = Sa(), n = B(t, !0);
				H((e) => Y(n, e), [() => r("none")]), J(e, t);
			}), M(o);
			var l = V(o, 2), u = R(l), d = B(u, !0);
			Q(V(u, 2), 17, () => (G(i)?.despawned?.summary ?? []).slice(0, 8), Z, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(G(t), 2));
				let r = () => G(n)[0], i = () => G(n)[1];
				var a = xa(), o = R(a), s = B(o), c = V(o);
				M(a), H(() => {
					Y(s, `${i() ?? ""}×`), Y(c, ` ${r() ?? ""}`);
				}), J(e, a);
			}, (e) => {
				var t = Sa(), n = B(t, !0);
				H((e) => Y(n, e), [() => r("none")]), J(e, t);
			}), M(l);
			var f = V(l, 2), p = R(f), h = B(p, !0);
			Q(V(p, 2), 17, () => (G(i)?.deaths?.rows ?? []).slice(-8).reverse(), Z, (e, t) => {
				var n = Da(), r = R(n), i = B(r, !0), a = V(r, 2), o = B(a, !0), s = V(a);
				M(n), H((e, t, n) => {
					Y(i, e), Y(o, t), Y(s, ` ${n ?? ""}`);
				}, [
					() => k(G(t).time),
					() => pe(G(t).type),
					() => G(t).message ?? [G(t).cause, G(t).killer].filter(Boolean).join(" · ")
				]), J(e, n);
			}, (e) => {
				var t = Sa(), n = B(t, !0);
				H((e) => Y(n, e), [() => r("none")]), J(e, t);
			}), M(f), H((e, t, n, r, i) => {
				Y(a, `${e ?? ""} ${t ?? ""}`), Y(c, n), Y(d, r), Y(h, i);
			}, [
				() => r("created"),
				() => fe(G(g).time),
				() => r("topEntities"),
				() => r("despawnedTotal", { count: G(i)?.despawned?.total ?? 0 }),
				() => r("deathsTotal", { count: G(i)?.deaths?.total ?? 0 })
			]), J(e, t);
		};
		X(Ze, (e) => {
			G(j) ? e(Qe) : e($e, -1);
		}), M(Xe), M(Ee);
		var et = V(Ee, 2), tt = R(et), nt = V(R(tt), 1, !0);
		M(tt);
		var rt = V(tt, 2), it = V(R(rt), 1, !0);
		M(rt);
		var at = V(rt, 2), ot = V(R(at), 1, !0);
		M(at);
		var st = V(at, 2), ct = V(R(st), 1, !0);
		M(st);
		var lt = V(st, 2), ut = B(lt), dt = V(lt, 2), ft = B(dt), pt = V(dt, 2), F = (e) => {
			var t = ka(), n = V(R(t), 1, !0);
			M(t), H((e) => Y(n, e), [() => r("layerPath")]), J(e, t);
		};
		X(pt, (e) => {
			G(o).length && e(F);
		}), M(et);
		var mt = V(et, 2), ht = (e) => {
			var t = Na(), n = z(t), a = B(n, !0), o = V(n, 2);
			Q(o, 21, () => G(i).inventory, Z, (e, t) => {
				var n = /* @__PURE__ */ P(() => m(G(t), 4));
				let i = () => G(n)[0], a = () => G(n)[1], o = () => G(n)[2], s = () => G(n)[3];
				var c = ja(), l = R(c), u = V(l), d = (e) => {
					var t = Aa(), n = B(t, !0);
					H(() => Y(n, s())), J(e, t);
				};
				X(u, (e) => {
					s() && e(d);
				}), M(c), H((e) => {
					$(c, "title", e), Y(l, `${a() ?? ""}${o() > 1 ? " × " + o() : ""}`);
				}, [() => `${r("slot")} ${i()}`]), J(e, c);
			}, (e) => {
				var t = Ma(), n = B(t, !0);
				H((e) => Y(n, e), [() => r("none")]), J(e, t);
			}), M(o), H((e) => Y(a, e), [() => r("inventory", { name: G(i).player })]), J(e, t);
		};
		X(mt, (e) => {
			G(i)?.inventory && e(ht);
		}), M(a), H((e, t, n, r, i, a, o, s, c, l, d, f, m, h) => {
			Y(u, e), Y(p, t), w = Qr(S, 1, "svelte-pbz4pw", null, w, { on: D.entities }), Y(re, n), oe = Qr(ae, 1, "svelte-pbz4pw", null, oe, { on: D.despawned }), Y(se, r), he = Qr(me, 1, "svelte-pbz4pw", null, he, { on: D.deaths }), Y(A, i), Se = Qr(xe, 1, "svelte-pbz4pw", null, Se, { on: D.players }), Y(Ce, a), $(Oe, "viewBox", `${G(O).x ?? ""} ${G(O).z ?? ""} 256 256`), $(Oe, "aria-label", o), $(ke, "x", G(O).x), $(ke, "y", G(O).z), Y(Ae, s), $(N, "cx", G(g).x + .5), $(N, "cy", G(g).z + .5), Y(Je, `${G(g).x ?? ""}${G(g).z ?? ""}`), Y(Ye, `${G(g).world ?? ""} · ${G(g).x ?? ""} ${G(g).z ?? ""}`), Y(nt, c), Y(it, l), Y(ot, d), Y(ct, f), Y(ut, `✕ ${m ?? ""}`), Y(ft, `◆ ${h ?? ""}`);
		}, [
			() => r("area"),
			() => G(o).length ? r("playHint", {
				n: G(o).length,
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
			() => r("noTerrain"),
			() => r("hostile"),
			() => r("passive"),
			() => r("item"),
			() => r("other"),
			() => r("layerDespawned"),
			() => r("layerDeaths")
		]), K("click", S, () => D.entities = !D.entities), K("click", ae, () => D.despawned = !D.despawned), K("click", me, () => D.deaths = !D.deaths), K("click", xe, () => D.players = !D.players), J(e, a);
	};
	X(xe, (e) => {
		G(g) && e(Se);
	}), J(e, be), Be();
}
fr(["click", "input"]);
//#endregion
//#region src/ticketlog/ModulePart.svelte
var Ia = /* @__PURE__ */ q("<p class=\"svelte-1h3vb0h\"> </p>"), La = /* @__PURE__ */ q("<span class=\"pill svelte-1h3vb0h\"> </span>"), Ra = /* @__PURE__ */ q("<div><dt class=\"svelte-1h3vb0h\"> </dt><dd class=\"svelte-1h3vb0h\"> </dd></div>"), za = /* @__PURE__ */ q("<dl class=\"svelte-1h3vb0h\"></dl>"), Ba = /* @__PURE__ */ q("<div class=\"charts svelte-1h3vb0h\"></div>"), Va = /* @__PURE__ */ q("<section><header class=\"svelte-1h3vb0h\"><div><span class=\"from svelte-1h3vb0h\"> </span> <h3 class=\"svelte-1h3vb0h\"> </h3> <!></div> <!></header> <!> <!></section>");
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
	var i = Va(), a = R(i), o = R(a), s = R(o), c = B(s, !0), l = V(s, 2), u = B(l, !0), d = V(l, 2), f = (e) => {
		var n = Ia(), r = B(n, !0);
		H(() => Y(r, t.part.reason)), J(e, n);
	};
	X(d, (e) => {
		t.part.reason && e(f);
	}), M(o);
	var p = V(o, 2), h = (e) => {
		var n = La(), r = B(n, !0);
		H(() => Y(r, t.part.status.text)), J(e, n);
	};
	X(p, (e) => {
		t.part.status && e(h);
	}), M(a);
	var g = V(a, 2), _ = (e) => {
		var n = za();
		Q(n, 21, () => t.part.facts, Z, (e, t) => {
			var n = /* @__PURE__ */ P(() => m(G(t), 2));
			let r = () => G(n)[0], i = () => G(n)[1];
			var a = Ra(), o = R(a), s = B(o, !0), c = B(V(o), !0);
			M(a), H(() => {
				Y(s, r()), Y(c, i());
			}), J(e, a);
		}), M(n), J(e, n);
	};
	X(g, (e) => {
		t.part.facts?.length && e(_);
	});
	var v = V(g, 2), y = (e) => {
		var i = Ba();
		Q(i, 21, () => G(n), Z, (e, n) => {
			{
				let i = /* @__PURE__ */ P(() => r(G(n).unit)), a = /* @__PURE__ */ P(() => [{
					key: "value",
					label: G(n).title,
					color: "var(--series-1)"
				}]);
				Zi(e, {
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
		}), M(i), J(e, i);
	};
	X(v, (e) => {
		G(n).length && e(y);
	}), M(i), H((e, n) => {
		Qr(i, 1, `mpart tone-${e ?? ""}`, "svelte-1h3vb0h"), Y(c, n), Y(u, t.part.title);
	}, [() => na(t.part.status?.tone), () => $i(t.lang, "module", { plugin: t.part.plugin })]), J(e, i), Be();
}
//#endregion
//#region src/ticketlog/TicketLog.svelte
var Ua = /* @__PURE__ */ q("<span class=\"pill bad svelte-1y95gkm\"> </span>"), Wa = /* @__PURE__ */ q("<span class=\"pill warn svelte-1y95gkm\"> </span>"), Ga = /* @__PURE__ */ q("<button class=\"secondary small\"> </button>"), Ka = /* @__PURE__ */ q("<div class=\"peaks svelte-1y95gkm\"><div class=\"svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b> </b></div> <div class=\"svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b> </b></div> <div class=\"svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b class=\"svelte-1y95gkm\"> <small class=\"svelte-1y95gkm\"> </small></b></div> <div class=\"svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b class=\"svelte-1y95gkm\"> </b></div></div>"), qa = /* @__PURE__ */ q("<button role=\"tab\"> </button>"), Ja = /* @__PURE__ */ q("<button> </button>"), Ya = /* @__PURE__ */ q("<!> <div class=\"chart-bar svelte-1y95gkm\"><div class=\"metrics svelte-1y95gkm\" role=\"tablist\"></div> <div class=\"metrics zoom svelte-1y95gkm\" role=\"group\"></div></div> <!>", 1), Xa = /* @__PURE__ */ q("<p class=\"muted small svelte-1y95gkm\"> </p>"), Za = /* @__PURE__ */ q("<button></button>"), Qa = /* @__PURE__ */ q("<dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd>", 1), $a = /* @__PURE__ */ q("<div class=\"crow svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> </span><b class=\"svelte-1y95gkm\"> </b></div>"), eo = /* @__PURE__ */ q("<span class=\"muted small\">-</span>"), to = /* @__PURE__ */ q("<div class=\"tile svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <dl class=\"svelte-1y95gkm\"><dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">Ping</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <!> <!></dl> <div class=\"counts svelte-1y95gkm\"><div><h4 class=\"svelte-1y95gkm\"> </h4> <!></div> <div><h4 class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></h4> <!></div></div></div>"), no = /* @__PURE__ */ q("<div class=\"crow svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></span> <b class=\"svelte-1y95gkm\"> </b></div>"), ro = /* @__PURE__ */ q("<div class=\"crow svelte-1y95gkm\"><span class=\"svelte-1y95gkm\"> <small class=\"muted\"> </small></span><b class=\"svelte-1y95gkm\"> </b></div>"), io = /* @__PURE__ */ q("<h4 class=\"svelte-1y95gkm\"> </h4> <!>", 1), ao = /* @__PURE__ */ q("<span> <small class=\"svelte-1y95gkm\"> </small></span>"), oo = /* @__PURE__ */ q("<div class=\"seg svelte-1y95gkm\"></div>"), so = /* @__PURE__ */ q("<button class=\"more svelte-1y95gkm\"> </button>"), co = /* @__PURE__ */ q("<span class=\"src svelte-1y95gkm\"> </span>"), lo = /* @__PURE__ */ q("<div><span class=\"lt svelte-1y95gkm\"> </span> <!> <span class=\"tx svelte-1y95gkm\"> </span></div>"), uo = /* @__PURE__ */ q("<section class=\"card tlog svelte-1y95gkm\"><header class=\"t-head svelte-1y95gkm\"><div><h2 class=\"svelte-1y95gkm\"> </h2> <p class=\"muted small svelte-1y95gkm\"> </p></div> <div class=\"t-counts svelte-1y95gkm\"><!> <!> <span class=\"pill svelte-1y95gkm\"> </span> <!></div></header> <!> <!> <div class=\"strip-wrap svelte-1y95gkm\"><div class=\"strip svelte-1y95gkm\" role=\"group\"><!> <span class=\"ticket-mark svelte-1y95gkm\"></span></div> <div class=\"strip-axis muted svelte-1y95gkm\"><span> </span><span> </span></div></div> <div class=\"tiles svelte-1y95gkm\"><div class=\"tile svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <dl class=\"svelte-1y95gkm\"><dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">Minecraft</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">MRadmin</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">Java</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\">TPS</dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd> <dt class=\"svelte-1y95gkm\"> </dt><dd class=\"svelte-1y95gkm\"> </dd></dl></div> <!> <div class=\"tile svelte-1y95gkm\"><h3 class=\"svelte-1y95gkm\"> </h3> <!> <!></div></div> <!> <details class=\"plugins svelte-1y95gkm\"><summary class=\"svelte-1y95gkm\"> </summary> <div class=\"plist svelte-1y95gkm\"></div></details> <div class=\"filters svelte-1y95gkm\"><div class=\"seg svelte-1y95gkm\"></div> <!> <input type=\"search\" class=\"svelte-1y95gkm\"/> <!></div> <div class=\"lines svelte-1y95gkm\"><!> <!> <!></div></section>");
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
	]), f = /* @__PURE__ */ I("tps"), p = /* @__PURE__ */ P(() => G(d).find((e) => e.id === G(f)) ?? G(d)[0]), h = /* @__PURE__ */ P(() => Math.max(1, Math.round((t.log.time - t.log.from) / 6e4))), g = /* @__PURE__ */ P(() => [...[
		1,
		10,
		30
	].filter((e) => e < G(h)), G(h)].filter((e, t, n) => n.indexOf(e) === t)), _ = /* @__PURE__ */ I(30), v = /* @__PURE__ */ P(() => Math.min(G(_), G(h))), y = /* @__PURE__ */ P(() => t.log.time - G(v) * 6e4), b = /* @__PURE__ */ P(() => G(a).filter((e) => e.time >= G(y))), x = /* @__PURE__ */ P(() => {
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
		warn: G(S).filter((e) => e.level === "warn").length,
		error: G(S).filter((e) => e.level === "error").length,
		event: G(S).filter((e) => e.kind === "event").length
	})), w = /* @__PURE__ */ P(() => Math.max(1, t.log.time - t.log.from)), T = /* @__PURE__ */ P(() => {
		let e = Array.from({ length: 90 }, () => ({
			info: 0,
			warn: 0,
			error: 0,
			event: 0
		}));
		for (let n of G(S)) {
			let r = Math.min(89, Math.max(0, Math.floor((n.time - t.log.from) / G(w) * 90)));
			e[r][n.level === "warn" || n.level === "error" || n.level === "event" ? n.level : "info"]++;
		}
		return e;
	}), E = /* @__PURE__ */ P(() => Math.max(1, ...G(T).map((e) => e.info + e.warn + e.error + e.event))), ee = /* @__PURE__ */ I("all"), D = Ht({
		info: !0,
		warn: !0,
		error: !0
	}), te = /* @__PURE__ */ I(""), O = /* @__PURE__ */ I(null), ne = /* @__PURE__ */ I(300), re = /* @__PURE__ */ P(() => {
		let e = G(te).trim().toLowerCase();
		return G(S).filter((t) => G(ee) !== "all" && t.kind !== G(ee) || t.kind === "console" && !D[t.level] || G(O) && (t.time < G(O)[0] || t.time >= G(O)[1]) ? !1 : !e || t.text.toLowerCase().includes(e) || (t.source ?? "").toLowerCase().includes(e));
	}), ie = /* @__PURE__ */ P(() => G(re).slice(Math.max(0, G(re).length - G(ne))));
	function ae(e) {
		let n = t.log.from + G(w) * e / 90;
		L(O, G(O) && G(O)[0] === n ? null : [n, t.log.from + G(w) * (e + 1) / 90], !0), L(ne, 300);
	}
	let oe = (e) => new Date(e).toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}), se = (e) => {
		let t = Math.floor(e / 6e4);
		return t >= 1440 ? Math.floor(t / 1440) + " d " + Math.floor(t % 1440 / 60) + " h" : t >= 60 ? Math.floor(t / 60) + " h " + t % 60 + " min" : t + " min";
	}, ce = /* @__PURE__ */ P(() => (t.log.time - t.log.from) / G(w) * 100), le = /* @__PURE__ */ P(() => [t.log.player && {
		who: i("creator"),
		p: t.log.player
	}, t.log.target && {
		who: i("target"),
		p: t.log.target
	}].filter(Boolean));
	var ue = uo(), de = R(ue), k = R(de), fe = R(k), pe = B(fe, !0), me = B(V(fe, 2), !0);
	M(k);
	var he = V(k, 2), A = R(he), ge = (e) => {
		var t = Ua(), n = B(t);
		H((e) => Y(n, `${G(C).error ?? ""} ${e ?? ""}`), [() => i("errors")]), J(e, t);
	};
	X(A, (e) => {
		G(C).error && e(ge);
	});
	var j = V(A, 2), _e = (e) => {
		var t = Wa(), n = B(t);
		H((e) => Y(n, `${G(C).warn ?? ""} ${e ?? ""}`), [() => i("warnings")]), J(e, t);
	};
	X(j, (e) => {
		G(C).warn && e(_e);
	});
	var ve = V(j, 2), ye = B(ve), be = V(ve, 2), xe = (e) => {
		var t = Ga(), n = B(t, !0);
		H((e) => Y(n, e), [() => i("hide")]), K("click", t, function(...e) {
			r()?.apply(this, e);
		}), J(e, t);
	};
	X(be, (e) => {
		r() && e(xe);
	}), M(he), M(de);
	var Se = V(de, 2), Ce = (e) => {
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
	X(Se, (e) => {
		t.log.module && e(Ce);
	});
	var we = V(Se, 2), Te = (e) => {
		var n = Ya(), r = z(n), a = (e) => {
			var t = Ka(), n = R(t), r = R(n), a = B(r, !0), c = V(r);
			let d;
			var f = B(c, !0);
			M(n);
			var p = V(n, 2), m = R(p), h = B(m, !0), g = V(m);
			let _;
			var v = B(g, !0);
			M(p);
			var y = V(p, 2), b = R(y), S = B(b, !0), C = V(b), w = R(C), T = B(V(w));
			M(C), M(y);
			var E = V(y, 2), ee = R(E), D = B(ee, !0), te = B(V(ee), !0);
			M(E), M(t), H((e, t, n, r, i, o, s, l, u) => {
				Y(a, e), d = Qr(c, 1, "svelte-1y95gkm", null, d, {
					bad: G(x).minTps < 15,
					warn: G(x).minTps >= 15 && G(x).minTps < 19
				}), Y(f, t), Y(h, n), _ = Qr(g, 1, "svelte-1y95gkm", null, _, {
					bad: G(x).maxMspt > 100,
					warn: G(x).maxMspt > 50 && G(x).maxMspt <= 100
				}), Y(v, r), Y(S, i), Y(w, `${o ?? ""} `), Y(T, `/ ${s ?? ""}`), Y(D, l), Y(te, u);
			}, [
				() => i("minTps"),
				() => u(G(x).minTps),
				() => i("maxMspt"),
				() => s(G(x).maxMspt),
				() => i("maxRam"),
				() => l(G(x).maxRam),
				() => l(G(x).heapMax),
				() => i("maxEntities"),
				() => o(G(x).maxEnt)
			]), J(e, t);
		};
		X(r, (e) => {
			G(x) && e(a);
		});
		var c = V(r, 2), m = R(c);
		Q(m, 21, () => G(d), (e) => e.id, (e, t) => {
			var n = qa();
			let r;
			var i = B(n, !0);
			H(() => {
				$(n, "aria-selected", G(f) === G(t).id), r = Qr(n, 1, "svelte-1y95gkm", null, r, { on: G(f) === G(t).id }), Y(i, G(t).label);
			}), K("click", n, () => L(f, G(t).id, !0)), J(e, n);
		}), M(m);
		var h = V(m, 2);
		Q(h, 21, () => G(g), Z, (e, t) => {
			var n = Ja();
			let r;
			var a = B(n, !0);
			H((e) => {
				r = Qr(n, 1, "svelte-1y95gkm", null, r, { on: G(v) === G(t) }), Y(a, e);
			}, [() => i("min", { n: G(t) })]), K("click", n, () => L(_, G(t), !0)), J(e, n);
		}), M(h), M(c), Pr(V(c, 2), () => G(f) + G(v), (e) => {
			{
				let n = /* @__PURE__ */ P(() => G(v) > 1), r = /* @__PURE__ */ P(() => G(p).yMax ?? null), i = /* @__PURE__ */ P(() => G(p).refs ?? []);
				Zi(e, {
					get title() {
						return G(p).label;
					},
					get points() {
						return G(b);
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
	}, Ee = (e) => {
		var t = Xa(), n = B(t, !0);
		H((e) => Y(n, e), [() => i("noHealth")]), J(e, t);
	};
	X(we, (e) => {
		G(a).length ? e(Te) : e(Ee, -1);
	});
	var De = V(we, 2), Oe = R(De), ke = R(Oe);
	Q(ke, 17, () => G(T), Z, (e, n, r) => {
		let a = /* @__PURE__ */ P(() => G(n).info + G(n).warn + G(n).error + G(n).event);
		var o = Za();
		let s;
		H((e, t, r) => {
			s = Qr(o, 1, "slice svelte-1y95gkm", null, s, {
				sel: e,
				err: G(n).error,
				wrn: !G(n).error && G(n).warn,
				evt: !G(n).error && !G(n).warn && G(n).event
			}), ei(o, `--h: ${G(a) ? 18 + G(a) / G(E) * 82 : 4}%`), $(o, "title", t), $(o, "aria-label", r);
		}, [
			() => G(O) && Math.abs(G(O)[0] - (t.log.from + G(w) * r / 90)) < 1,
			() => `${oe(t.log.from + G(w) * r / 90)} · ${G(n).error} ${i("errors")}, ${G(n).warn} ${i("warnings")}, ${G(n).event} ${i("events")}, ${G(n).info} info`,
			() => oe(t.log.from + G(w) * r / 90)
		]), K("click", o, () => ae(r)), J(e, o);
	});
	var Ae = V(ke, 2);
	M(Oe);
	var je = V(Oe, 2), Me = R(je), Ne = B(Me, !0), Pe = B(V(Me));
	M(je), M(De);
	var Fe = V(De, 2), Ie = R(Fe), Le = R(Ie), Re = B(Le, !0), Ve = V(Le, 2), He = R(Ve), Ue = B(He, !0), We = V(He), Ge = B(We, !0), Ke = V(We, 3), qe = B(Ke, !0), N = V(Ke, 3), Je = B(N, !0), Ye = V(N, 3), Xe = B(Ye, !0), Ze = V(Ye, 2), Qe = B(Ze, !0), $e = V(Ze), et = B($e), tt = V($e, 2), nt = B(tt, !0), rt = V(tt), it = B(rt, !0), at = V(rt, 3), ot = B(at), st = V(at, 2), ct = B(st, !0), lt = V(st), ut = B(lt), dt = V(lt, 2), ft = B(dt, !0), pt = V(dt), F = B(pt), mt = V(pt, 2), ht = B(mt, !0), gt = B(V(mt), !0);
	M(Ve), M(Ie);
	var _t = V(Ie, 2);
	Q(_t, 17, () => G(le), Z, (e, t) => {
		let n = () => G(t).who, r = () => G(t).p;
		var a = to(), o = R(a), s = B(o), c = V(o, 2), l = R(c), u = B(l, !0), d = V(l), f = R(d), p = B(V(f));
		M(d);
		var h = V(d, 2), g = B(h, !0), _ = V(h), v = B(_), y = V(_, 2), b = B(y, !0), x = V(y), S = B(x), C = V(x, 2), w = B(C, !0), T = V(C), E = B(T), ee = V(T, 2), D = B(ee, !0), te = V(ee), O = B(te), ne = V(te, 3), re = B(ne), ie = V(ne, 2), ae = B(ie, !0), oe = V(ie), se = B(oe, !0), ce = V(oe, 2), le = (e) => {
			var t = Qa(), n = z(t), a = B(n, !0), o = B(V(n), !0);
			H((e, t) => {
				Y(a, e), Y(o, t);
			}, [() => i("effects"), () => r().effects.join(", ")]), J(e, t);
		};
		X(ce, (e) => {
			r().effects?.length && e(le);
		});
		var ue = V(ce, 2), de = (e) => {
			var t = Qa(), n = z(t), a = B(n, !0), o = B(V(n), !0);
			H((e, t) => {
				Y(a, e), Y(o, t);
			}, [() => i("nearPlayers"), () => r().players.map((e) => `${e.name} (${Math.round(e.distance)} m)`).join(", ")]), J(e, t);
		};
		X(ue, (e) => {
			r().players?.length && e(de);
		}), M(c);
		var k = V(c, 2), fe = R(k), pe = R(fe), me = B(pe, !0);
		Q(V(pe, 2), 17, () => (r().entities ?? []).slice(0, 8), Z, (e, t) => {
			var n = /* @__PURE__ */ P(() => m(G(t), 2));
			let r = () => G(n)[0], i = () => G(n)[1];
			var a = $a(), o = R(a), s = B(o, !0), c = B(V(o), !0);
			M(a), H(() => {
				Y(s, r()), Y(c, i());
			}), J(e, a);
		}, (e) => {
			J(e, eo());
		}), M(fe);
		var he = V(fe, 2), A = R(he), ge = R(A), j = B(V(ge), !0);
		M(A), Q(V(A, 2), 17, () => (r().tiles ?? []).slice(0, 8), Z, (e, t) => {
			var n = /* @__PURE__ */ P(() => m(G(t), 2));
			let r = () => G(n)[0], i = () => G(n)[1];
			var a = $a(), o = R(a), s = B(o, !0), c = B(V(o), !0);
			M(a), H(() => {
				Y(s, r()), Y(c, i());
			}), J(e, a);
		}, (e) => {
			J(e, eo());
		}), M(he), M(k), M(a), H((e, t, i, a, o, c, l, d, m, h, _, y, x, C, T, ee, te) => {
			Y(s, `${n() ?? ""}: ${r().name ?? ""}`), Y(u, e), Y(f, `${r().world ?? ""} · ${t ?? ""} ${i ?? ""} ${a ?? ""} `), Y(p, `(${o ?? ""} ${c ?? ""})`), Y(g, l), Y(v, `${r().biome ?? ""} · ${d ?? ""} ${r().light ?? ""}`), Y(b, m), Y(S, `${r().gameMode ?? ""}${h ?? ""}${r().vehicle ? " · " + r().vehicle : ""}${r().op ? " · OP" : ""}`), Y(w, _), Y(E, `❤ ${r().health ?? ""}/${r().maxHealth ?? ""} · 🍗 ${r().food ?? ""} · Lvl ${r().level ?? ""}`), Y(D, y), Y(O, `${r().client ?? "-" ?? ""} · ${x ?? ""} ${r().protocol ?? ""} · ${r().locale ?? ""} · ${C ?? ""} ${r().viewDistance ?? ""}`), Y(re, `${r().ping ?? ""} ms`), Y(ae, T), Y(se, r().hand ?? "-"), Y(me, ee), Y(ge, `${te ?? ""} `), Y(j, r().tileArea);
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
	var vt = V(_t, 2), yt = R(vt), bt = B(yt, !0), xt = V(yt, 2);
	Q(xt, 17, () => t.log.server?.worlds ?? [], Z, (e, t) => {
		var n = no(), r = R(n), i = R(r), a = B(V(i));
		M(r);
		var s = B(V(r, 2));
		M(n), H((e, n, r, o) => {
			Y(i, `${G(t).name ?? ""} `), Y(a, `${G(t).environment ?? ""} · ${G(t).weather ?? ""}`), Y(s, `${e ?? ""} 👤 · ${n ?? ""} ▦ · ${r ?? ""} E · ${o ?? ""} T`);
		}, [
			() => o(G(t).players),
			() => o(G(t).chunks),
			() => o(G(t).entities),
			() => o(G(t).tiles)
		]), J(e, n);
	});
	var St = V(xt, 2), Ct = (e) => {
		var n = io(), r = z(n), a = B(r, !0);
		Q(V(r, 2), 17, () => t.log.hotChunks, Z, (e, t) => {
			var n = ro(), r = R(n), i = R(r), a = B(V(i), !0);
			M(r);
			var o = B(V(r), !0);
			M(n), H((e) => {
				Y(i, `${G(t).world ?? ""} ${G(t).x ?? ""} ${G(t).z ?? ""} `), Y(a, e), Y(o, G(t).count);
			}, [() => G(t).types.slice(0, 3).map(([e, t]) => `${e} ${t}`).join(", ")]), J(e, n);
		}), H((e) => Y(a, e), [() => i("hotChunks")]), J(e, n);
	};
	X(St, (e) => {
		t.log.hotChunks?.length && e(Ct);
	}), M(vt), M(Fe);
	var wt = V(Fe, 2), Tt = (e) => {
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
					return G(r);
				}
			});
		}
	};
	X(wt, (e) => {
		(t.log.area || t.log.timeline) && e(Tt);
	});
	var Et = V(wt, 2), Dt = R(Et), Ot = B(Dt, !0), kt = V(Dt, 2);
	Q(kt, 21, () => t.log.server?.plugins ?? [], Z, (e, t) => {
		var n = ao();
		let r;
		var i = R(n), a = B(V(i), !0);
		M(n), H(() => {
			r = Qr(n, 1, "svelte-1y95gkm", null, r, { off: !G(t).enabled }), Y(i, `${G(t).name ?? ""} `), Y(a, G(t).version);
		}), J(e, n);
	}), M(kt), M(Et);
	var At = V(Et, 2), jt = R(At);
	Q(jt, 21, () => [
		["all", i("all")],
		["console", i("console")],
		["event", i("events")]
	], Z, (e, t) => {
		var n = /* @__PURE__ */ P(() => m(G(t), 2));
		let r = () => G(n)[0], i = () => G(n)[1];
		var a = Ja();
		let o;
		var s = B(a, !0);
		H(() => {
			o = Qr(a, 1, "svelte-1y95gkm", null, o, { on: G(ee) === r() }), Y(s, i());
		}), K("click", a, () => L(ee, r(), !0)), J(e, a);
	}), M(jt);
	var Mt = V(jt, 2), Nt = (e) => {
		var t = oo();
		Q(t, 21, () => [
			["info", "Info"],
			["warn", i("warnings")],
			["error", i("errors")]
		], Z, (e, t) => {
			var n = /* @__PURE__ */ P(() => m(G(t), 2));
			let r = () => G(n)[0], i = () => G(n)[1];
			var a = Ja();
			let o;
			var s = B(a, !0);
			H(() => {
				o = Qr(a, 1, Kr(r()), "svelte-1y95gkm", o, { on: D[r()] }), Y(s, i());
			}), K("click", a, () => D[r()] = !D[r()]), J(e, a);
		}), M(t), J(e, t);
	};
	X(Mt, (e) => {
		G(ee) !== "event" && e(Nt);
	});
	var Pt = V(Mt, 2);
	ai(Pt);
	var Ft = V(Pt, 2), It = (e) => {
		var t = Ga(), n = B(t);
		H((e, t) => Y(n, `${e ?? ""}-${t ?? ""} ✕`), [() => oe(G(O)[0]), () => oe(G(O)[1])]), K("click", t, () => L(O, null)), J(e, t);
	};
	X(Ft, (e) => {
		G(O) && e(It);
	}), M(At);
	var Lt = V(At, 2), Rt = R(Lt), zt = (e) => {
		var t = so(), n = B(t, !0);
		H((e) => Y(n, e), [() => i("older", { count: G(re).length - G(ie).length })]), K("click", t, () => L(ne, G(ne) + 500)), J(e, t);
	};
	X(Rt, (e) => {
		G(re).length > G(ie).length && e(zt);
	});
	var Bt = V(Rt, 2);
	Q(Bt, 17, () => G(ie), Z, (e, t) => {
		var n = lo(), r = R(n), i = B(r, !0), a = V(r, 2), o = (e) => {
			var n = co(), r = B(n, !0);
			H(() => {
				ei(n, `--c: ${G(t).color ?? ""}`), Y(r, G(t).source);
			}), J(e, n);
		};
		X(a, (e) => {
			G(t).kind === "event" && e(o);
		});
		var s = B(V(a, 2), !0);
		M(n), H((e) => {
			Qr(n, 1, `line ${G(t).level ?? ""}`, "svelte-1y95gkm"), Y(i, e), Y(s, G(t).text);
		}, [() => oe(G(t).time)]), J(e, n);
	}, (e) => {
		var t = Xa(), n = B(t, !0);
		H((e) => Y(n, e), [() => i("empty")]), J(e, t);
	});
	var Vt = V(Bt, 2), Ut = (e) => {
		var t = Xa(), n = B(t, !0);
		H((e) => Y(n, e), [() => i("cut")]), J(e, t);
	};
	X(Vt, (e) => {
		t.log.console?.cut && e(Ut);
	}), M(Lt), M(ue), H((e, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, w) => {
		Y(pe, e), Y(me, n), Y(ye, `${G(C).event ?? ""} ${r ?? ""}`), $(Oe, "aria-label", i), ei(Ae, `left: ${G(ce) ?? ""}%`), $(Ae, "title", a), Y(Ne, o), Y(Pe, `${s ?? ""} ${c ?? ""}`), Y(Re, l), Y(Ue, u), Y(Ge, t.log.server?.software), Y(qe, t.log.server?.minecraft), Y(Je, t.log.server?.mradmin), Y(Xe, t.log.server?.java), Y(Qe, d), Y(et, `${t.log.server?.os ?? ""} · ${t.log.server?.cores ?? ""} ${f ?? ""} · ${p ?? ""}`), Y(nt, m), Y(it, h), Y(ot, `${g ?? ""} · ${_ ?? ""}`), Y(ct, v), Y(ut, `${t.log.server?.online ?? ""} / ${t.log.server?.maxPlayers ?? ""}`), Y(ft, y), Y(F, `${t.log.server?.viewDistance ?? ""} / ${t.log.server?.simulationDistance ?? ""}`), Y(ht, b), Y(gt, t.log.server?.storage), Y(bt, x), Y(Ot, S), $(Pt, "placeholder", w);
	}, [
		() => i("title"),
		() => i("span", {
			from: oe(t.log.from),
			to: oe(t.log.time),
			minutes: Math.round(G(w) / 6e4)
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
	]), ui(Pt, () => G(te), (e) => L(te, e)), J(e, ue), Be();
}
fr(["click"]);
//#endregion
//#region src/ticketlog/viewer/main.js
function po(e, t, n = "de") {
	e.classList.add("mr-tlog-root");
	let r = Dr(fo, {
		target: e,
		props: {
			log: t,
			lang: n
		}
	});
	return { destroy: () => jr(r) };
}
//#endregion
export { po as mountTicketLog };
