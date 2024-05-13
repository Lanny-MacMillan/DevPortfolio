/* eslint-disable */
import { useEffect } from 'react';
import { ReactComponent as Svg } from './blinking.svg';

export default function Blinking() {
  useEffect(() => {
    !(function (t, e) {
      'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = e())
        : 'function' == typeof __SVGATOR_DEFINE__ && __SVGATOR_DEFINE__.amd
        ? __SVGATOR_DEFINE__(e)
        : (((t =
            'undefined' != typeof globalThis
              ? globalThis
              : t || self).__SVGATOR_PLAYER__ = t.__SVGATOR_PLAYER__ || {}),
          (t.__SVGATOR_PLAYER__['91c80d77'] = e()));
    })(this, function () {
      'use strict';
      function t(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function e(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? t(Object(r), !0).forEach(function (t) {
                u(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : t(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function n(t) {
        return (n =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function r(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
      }
      function u(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function a(t) {
        return (a = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function l(t, e) {
        return (l =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function s() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function f(t, e, n) {
        return (f = s()
          ? Reflect.construct
          : function (t, e, n) {
              var r = [null];
              r.push.apply(r, e);
              var i = new (Function.bind.apply(t, r))();
              return n && l(i, n.prototype), i;
            }).apply(null, arguments);
      }
      function c(t, e) {
        if (e && ('object' == typeof e || 'function' == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        })(t);
      }
      function h(t, e, n) {
        return (h =
          'undefined' != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = (function (t, e) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(t, e) &&
                    null !== (t = a(t));

                  );
                  return t;
                })(t, e);
                if (r) {
                  var i = Object.getOwnPropertyDescriptor(r, e);
                  return i.get ? i.get.call(n) : i.value;
                }
              })(t, e, n || t);
      }
      function v(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return d(t);
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return d(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return d(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function y(t, e, n) {
        if (Number.isInteger(t)) return t;
        var r = Math.pow(10, e);
        return Math[n]((+t + Number.EPSILON) * r) / r;
      }
      Number.isInteger ||
        (Number.isInteger = function (t) {
          return 'number' == typeof t && isFinite(t) && Math.floor(t) === t;
        }),
        Number.EPSILON || (Number.EPSILON = 2220446049250313e-31);
      var g = p(Math.pow(10, -6));
      function p(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        return y(t, e, 'round');
      }
      function m(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g;
        return Math.abs(t - e) < n;
      }
      p(Math.pow(10, -2)), p(Math.pow(10, -4));
      var b = Math.PI / 180;
      function w(t) {
        return t * b;
      }
      function k(t) {
        return t / b;
      }
      function _(t) {
        return t;
      }
      function A(t, e, n) {
        var r = 1 - n;
        return 3 * n * r * (t * r + e * n) + n * n * n;
      }
      function x() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        return t < 0 || t > 1 || n < 0 || n > 1
          ? null
          : m(t, e) && m(n, r)
          ? _
          : function (i) {
              if (i <= 0)
                return t > 0 ? (i * e) / t : 0 === e && n > 0 ? (i * r) / n : 0;
              if (i >= 1)
                return n < 1
                  ? 1 + ((i - 1) * (r - 1)) / (n - 1)
                  : 1 === n && t < 1
                  ? 1 + ((i - 1) * (e - 1)) / (t - 1)
                  : 1;
              for (var o, u = 0, a = 1; u < a; ) {
                var l = A(t, n, (o = (u + a) / 2));
                if (m(i, l)) break;
                l < i ? (u = o) : (a = o);
              }
              return A(e, r, o);
            };
      }
      function S() {
        return 1;
      }
      function O(t) {
        return 1 === t ? 1 : 0;
      }
      function E() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (1 === t) {
          if (0 === e) return O;
          if (1 === e) return S;
        }
        var n = 1 / t;
        return function (t) {
          return t >= 1 ? 1 : (t += e * n) - (t % n);
        };
      }
      var j = Math.sin,
        M = Math.cos,
        P = Math.acos,
        B = Math.asin,
        I = Math.tan,
        T = Math.atan2,
        N = Math.sqrt,
        R = (function () {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
              u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
              a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            r(this, t),
              (this.m = [e, n, i, o, u, a]),
              (this.i = null),
              (this.w = null),
              (this.s = null);
          }
          return (
            o(
              t,
              [
                {
                  key: 'determinant',
                  get: function () {
                    var t = this.m;
                    return t[0] * t[3] - t[1] * t[2];
                  },
                },
                {
                  key: 'isIdentity',
                  get: function () {
                    if (null === this.i) {
                      var t = this.m;
                      this.i =
                        1 === t[0] &&
                        0 === t[1] &&
                        0 === t[2] &&
                        1 === t[3] &&
                        0 === t[4] &&
                        0 === t[5];
                    }
                    return this.i;
                  },
                },
                {
                  key: 'point',
                  value: function (t, e) {
                    var n = this.m;
                    return {
                      x: n[0] * t + n[2] * e + n[4],
                      y: n[1] * t + n[3] * e + n[5],
                    };
                  },
                },
                {
                  key: 'translateSelf',
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0;
                    if (!t && !e) return this;
                    var n = this.m;
                    return (
                      (n[4] += n[0] * t + n[2] * e),
                      (n[5] += n[1] * t + n[3] * e),
                      (this.w = this.s = this.i = null),
                      this
                    );
                  },
                },
                {
                  key: 'rotateSelf',
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0;
                    if ((t %= 360)) {
                      t = w(t);
                      var e = j(t),
                        n = M(t),
                        r = this.m,
                        i = r[0],
                        o = r[1];
                      (r[0] = i * n + r[2] * e),
                        (r[1] = o * n + r[3] * e),
                        (r[2] = r[2] * n - i * e),
                        (r[3] = r[3] * n - o * e),
                        (this.w = this.s = this.i = null);
                    }
                    return this;
                  },
                },
                {
                  key: 'scaleSelf',
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1;
                    if (1 !== t || 1 !== e) {
                      var n = this.m;
                      (n[0] *= t),
                        (n[1] *= t),
                        (n[2] *= e),
                        (n[3] *= e),
                        (this.w = this.s = this.i = null);
                    }
                    return this;
                  },
                },
                {
                  key: 'skewSelf',
                  value: function (t, e) {
                    if (((e %= 360), (t %= 360) || e)) {
                      var n = this.m,
                        r = n[0],
                        i = n[1],
                        o = n[2],
                        u = n[3];
                      t && ((t = I(w(t))), (n[2] += r * t), (n[3] += i * t)),
                        e && ((e = I(w(e))), (n[0] += o * e), (n[1] += u * e)),
                        (this.w = this.s = this.i = null);
                    }
                    return this;
                  },
                },
                {
                  key: 'resetSelf',
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 1,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 1,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 0,
                      o =
                        arguments.length > 5 && void 0 !== arguments[5]
                          ? arguments[5]
                          : 0,
                      u = this.m;
                    return (
                      (u[0] = t),
                      (u[1] = e),
                      (u[2] = n),
                      (u[3] = r),
                      (u[4] = i),
                      (u[5] = o),
                      (this.w = this.s = this.i = null),
                      this
                    );
                  },
                },
                {
                  key: 'recomposeSelf',
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : null,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : null;
                    return (
                      this.isIdentity || this.resetSelf(),
                      t && (t.x || t.y) && this.translateSelf(t.x, t.y),
                      e && this.rotateSelf(e),
                      n &&
                        (n.x && this.skewSelf(n.x, 0), n.y && this.skewSelf(0, n.y)),
                      !r || (1 === r.x && 1 === r.y) || this.scaleSelf(r.x, r.y),
                      i && (i.x || i.y) && this.translateSelf(i.x, i.y),
                      this
                    );
                  },
                },
                {
                  key: 'decompose',
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      n = this.m,
                      r = n[0] * n[0] + n[1] * n[1],
                      i = [
                        [n[0], n[1]],
                        [n[2], n[3]],
                      ],
                      o = N(r);
                    if (0 === o)
                      return {
                        origin: { x: p(n[4]), y: p(n[5]) },
                        translate: { x: p(t), y: p(e) },
                        scale: { x: 0, y: 0 },
                        skew: { x: 0, y: 0 },
                        rotate: 0,
                      };
                    (i[0][0] /= o), (i[0][1] /= o);
                    var u = n[0] * n[3] - n[1] * n[2] < 0;
                    u && (o = -o);
                    var a = i[0][0] * i[1][0] + i[0][1] * i[1][1];
                    (i[1][0] -= i[0][0] * a), (i[1][1] -= i[0][1] * a);
                    var l,
                      s = N(i[1][0] * i[1][0] + i[1][1] * i[1][1]);
                    return 0 === s
                      ? {
                          origin: { x: p(n[4]), y: p(n[5]) },
                          translate: { x: p(t), y: p(e) },
                          scale: { x: p(o), y: 0 },
                          skew: { x: 0, y: 0 },
                          rotate: 0,
                        }
                      : ((i[1][0] /= s),
                        (i[1][1] /= s),
                        (a /= s),
                        i[1][1] < 0
                          ? ((l = k(P(i[1][1]))), i[0][1] < 0 && (l = 360 - l))
                          : (l = k(B(i[0][1]))),
                        u && (l = -l),
                        (a = k(T(a, N(i[0][0] * i[0][0] + i[0][1] * i[0][1])))),
                        u && (a = -a),
                        {
                          origin: { x: p(n[4]), y: p(n[5]) },
                          translate: { x: p(t), y: p(e) },
                          scale: { x: p(o), y: p(s) },
                          skew: { x: p(a), y: 0 },
                          rotate: p(l),
                        });
                  },
                },
                {
                  key: 'multiply',
                  value: function (t) {
                    return this.clone().multiplySelf(t);
                  },
                },
                {
                  key: 'preMultiply',
                  value: function (t) {
                    return t.multiply(this);
                  },
                },
                {
                  key: 'multiplySelf',
                  value: function (t) {
                    var e = F(this.m, t.m),
                      n = e.a,
                      r = e.b,
                      i = e.c,
                      o = e.d,
                      u = e.tx,
                      a = e.ty;
                    return this.resetSelf(n, r, i, o, u, a), this;
                  },
                },
                {
                  key: 'preMultiplySelf',
                  value: function (t) {
                    var e = F(t.m, this.m),
                      n = e.a,
                      r = e.b,
                      i = e.c,
                      o = e.d,
                      u = e.tx,
                      a = e.ty;
                    return this.resetSelf(n, r, i, o, u, a), this;
                  },
                },
                {
                  key: 'clone',
                  value: function () {
                    var t = this.m;
                    return new this.constructor(t[0], t[1], t[2], t[3], t[4], t[5]);
                  },
                },
                {
                  key: 'toString',
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : ' ';
                    if (null === this.s) {
                      var e = this.m.map(function (t) {
                        return p(t);
                      });
                      1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3]
                        ? (this.s = 'translate(' + e[4] + t + e[5] + ')')
                        : (this.s = 'matrix(' + e.join(t) + ')');
                    }
                    return this.s;
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function (t) {
                    return t
                      ? Array.isArray(t)
                        ? f(this, v(t))
                        : t instanceof this
                        ? t.clone()
                        : new this().recomposeSelf(
                            t.origin,
                            t.rotate,
                            t.skew,
                            t.scale,
                            t.translate,
                          )
                      : new this();
                  },
                },
              ],
            ),
            t
          );
        })();
      function F(t, e) {
        return {
          a: t[0] * e[0] + t[2] * e[1],
          b: t[1] * e[0] + t[3] * e[1],
          c: t[0] * e[2] + t[2] * e[3],
          d: t[1] * e[2] + t[3] * e[3],
          tx: t[0] * e[4] + t[2] * e[5] + t[4],
          ty: t[1] * e[4] + t[3] * e[5] + t[5],
        };
      }
      function D(t, e, n) {
        return t >= 0.5 ? n : e;
      }
      function C(t, e, n) {
        return 0 === t || e === n ? e : t * (n - e) + e;
      }
      function q(t, e, n) {
        var r = C(t, e, n);
        return r <= 0 ? 0 : r;
      }
      function L(t, e, n) {
        var r = C(t, e, n);
        return r <= 0 ? 0 : r >= 1 ? 1 : r;
      }
      function V(t, e, n) {
        return 0 === t ? e : 1 === t ? n : { x: C(t, e.x, n.x), y: C(t, e.y, n.y) };
      }
      function G(t, e, n) {
        return 0 === t ? e : 1 === t ? n : { x: q(t, e.x, n.x), y: q(t, e.y, n.y) };
      }
      function z(t, e, n) {
        var r = (function (t, e, n) {
          return Math.round(C(t, e, n));
        })(t, e, n);
        return r <= 0 ? 0 : r >= 255 ? 255 : r;
      }
      function Y(t, e, n) {
        return 0 === t
          ? e
          : 1 === t
          ? n
          : {
              r: z(t, e.r, n.r),
              g: z(t, e.g, n.g),
              b: z(t, e.b, n.b),
              a: C(t, null == e.a ? 1 : e.a, null == n.a ? 1 : n.a),
            };
      }
      function U(t, e, n) {
        var r = e.length;
        if (r !== n.length) return D(t, e, n);
        for (var i = new Array(r), o = 0; o < r; o++) i[o] = C(t, e[o], n[o]);
        return i;
      }
      function W(t, e) {
        for (var n = [], r = 0; r < t; r++) n.push(e);
        return n;
      }
      function $(t, e) {
        if (--e <= 0) return t;
        var n = (t = Object.assign([], t)).length;
        do {
          for (var r = 0; r < n; r++) t.push(t[r]);
        } while (--e > 0);
        return t;
      }
      var H,
        Q = (function () {
          function t(e) {
            r(this, t), (this.list = e), (this.length = e.length);
          }
          return (
            o(t, [
              {
                key: 'setAttribute',
                value: function (t, e) {
                  for (var n = this.list, r = 0; r < this.length; r++)
                    n[r].setAttribute(t, e);
                },
              },
              {
                key: 'removeAttribute',
                value: function (t) {
                  for (var e = this.list, n = 0; n < this.length; n++)
                    e[n].removeAttribute(t);
                },
              },
              {
                key: 'style',
                value: function (t, e) {
                  for (var n = this.list, r = 0; r < this.length; r++)
                    n[r].style[t] = e;
                },
              },
            ]),
            t
          );
        })(),
        X = /-./g,
        J = function (t, e) {
          return e.toUpperCase();
        };
      function K(t) {
        return 'function' == typeof t ? t : D;
      }
      function Z(t) {
        return t
          ? 'function' == typeof t
            ? t
            : Array.isArray(t)
            ? (function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
                if (!Array.isArray(t)) return e;
                switch (t.length) {
                  case 1:
                    return E(t[0]) || e;
                  case 2:
                    return E(t[0], t[1]) || e;
                  case 4:
                    return x(t[0], t[1], t[2], t[3]) || e;
                }
                return e;
              })(t, null)
            : (function (t, e) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _;
                switch (t) {
                  case 'linear':
                    return _;
                  case 'steps':
                    return E(e.steps || 1, e.jump || 0) || n;
                  case 'bezier':
                  case 'cubic-bezier':
                    return x(e.x1 || 0, e.y1 || 0, e.x2 || 0, e.y2 || 0) || n;
                }
                return n;
              })(t.type, t.value, null)
          : null;
      }
      function tt(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = e.length - 1;
        if (t <= e[0].t) return r ? [0, 0, e[0].v] : e[0].v;
        if (t >= e[i].t) return r ? [i, 1, e[i].v] : e[i].v;
        var o,
          u = e[0],
          a = null;
        for (o = 1; o <= i; o++) {
          if (!(t > e[o].t)) {
            a = e[o];
            break;
          }
          u = e[o];
        }
        return null == a
          ? r
            ? [i, 1, e[i].v]
            : e[i].v
          : u.t === a.t
          ? r
            ? [o, 1, a.v]
            : a.v
          : ((t = (t - u.t) / (a.t - u.t)),
            u.e && (t = u.e(t)),
            r ? [o, t, n(t, u.v, a.v)] : n(t, u.v, a.v));
      }
      function et(t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return t && t.length
          ? 'function' != typeof e
            ? null
            : ('function' != typeof n && (n = null),
              function (r) {
                var i = tt(r, t, e);
                return null != i && n && (i = n(i)), i;
              })
          : null;
      }
      function nt(t, e) {
        return t.t - e.t;
      }
      function rt(t, e, r, i, o) {
        var u,
          a = '@' === r[0],
          l = '#' === r[0],
          s = H[r],
          f = D;
        switch (
          (a ? ((u = r.substr(1)), (r = u.replace(X, J))) : l && (r = r.substr(1)),
          n(s))
        ) {
          case 'function':
            if (((f = s(i, o, tt, Z, r, a, e, t)), l)) return f;
            break;
          case 'string':
            f = et(i, K(s));
            break;
          case 'object':
            if ((f = et(i, K(s.i), s.f)) && 'function' == typeof s.u)
              return s.u(e, f, r, a, t);
        }
        return f
          ? (function (t, e, n) {
              if (arguments.length > 3 && void 0 !== arguments[3] && arguments[3])
                return t instanceof Q
                  ? function (r) {
                      return t.style(e, n(r));
                    }
                  : function (r) {
                      return (t.style[e] = n(r));
                    };
              if (Array.isArray(e)) {
                var r = e.length;
                return function (i) {
                  var o = n(i);
                  if (null == o) for (var u = 0; u < r; u++) t[u].removeAttribute(e);
                  else for (var a = 0; a < r; a++) t[a].setAttribute(e, o);
                };
              }
              return function (r) {
                var i = n(r);
                null == i ? t.removeAttribute(e) : t.setAttribute(e, i);
              };
            })(e, r, f, a)
          : null;
      }
      function it(t, e, r, i) {
        if (!i || 'object' !== n(i)) return null;
        var o = null,
          u = null;
        return (
          Array.isArray(i)
            ? (u = (function (t) {
                if (!t || !t.length) return null;
                for (var e = 0; e < t.length; e++) t[e].e && (t[e].e = Z(t[e].e));
                return t.sort(nt);
              })(i))
            : ((u = i.keys), (o = i.data || null)),
          u ? rt(t, e, r, u, o) : null
        );
      }
      function ot(t, e, n) {
        if (!n) return null;
        var r = [];
        for (var i in n)
          if (n.hasOwnProperty(i)) {
            var o = it(t, e, i, n[i]);
            o && r.push(o);
          }
        return r.length ? r : null;
      }
      function ut(t, e) {
        if (!e.settings.duration || e.settings.duration < 0) return null;
        var n,
          r,
          i,
          o,
          u,
          a = (function (t, e) {
            if (!e) return null;
            var n = [];
            if (Array.isArray(e))
              for (var r = e.length, i = 0; i < r; i++) {
                var o = e[i];
                if (2 === o.length) {
                  var u = null;
                  if ('string' == typeof o[0]) u = t.getElementById(o[0]);
                  else if (Array.isArray(o[0])) {
                    u = [];
                    for (var a = 0; a < o[0].length; a++)
                      if ('string' == typeof o[0][a]) {
                        var l = t.getElementById(o[0][a]);
                        l && u.push(l);
                      }
                    u = u.length ? (1 === u.length ? u[0] : new Q(u)) : null;
                  }
                  if (u) {
                    var s = ot(t, u, o[1]);
                    s && (n = n.concat(s));
                  }
                }
              }
            else
              for (var f in e)
                if (e.hasOwnProperty(f)) {
                  var c = t.getElementById(f);
                  if (c) {
                    var h = ot(t, c, e[f]);
                    h && (n = n.concat(h));
                  }
                }
            return n.length ? n : null;
          })(t, e.elements);
        return a
          ? ((n = a),
            (r = e.settings),
            (i = r.duration),
            (o = n.length),
            (u = null),
            function (t, e) {
              var a = r.iterations || 1 / 0,
                l = (r.alternate && a % 2 == 0) ^ (r.direction > 0) ? i : 0,
                s = t % i,
                f = 1 + (t - s) / i;
              (e *= r.direction), r.alternate && f % 2 == 0 && (e = -e);
              var c = !1;
              if (f > a)
                (s = l), (c = !0), -1 === r.fill && (s = r.direction > 0 ? 0 : i);
              else if ((e < 0 && (s = i - s), s === u)) return !1;
              u = s;
              for (var h = 0; h < o; h++) n[h](s);
              return c;
            })
          : null;
      }
      function at(t, e) {
        for (var n = e.querySelectorAll('svg'), r = 0; r < n.length; r++)
          if (n[r].id === t.root && !n[r].svgatorAnimation)
            return (n[r].svgatorAnimation = !0), n[r];
        return null;
      }
      function lt(t) {
        var e = function (t) {
          return t.shadowRoot;
        };
        return document
          ? Array.from(
              t.querySelectorAll(
                ':not(' +
                  [
                    'a',
                    'area',
                    'audio',
                    'br',
                    'canvas',
                    'circle',
                    'datalist',
                    'embed',
                    'g',
                    'head',
                    'hr',
                    'iframe',
                    'img',
                    'input',
                    'link',
                    'object',
                    'path',
                    'polygon',
                    'rect',
                    'script',
                    'source',
                    'style',
                    'svg',
                    'title',
                    'track',
                    'video',
                  ].join() +
                  ')',
              ),
            )
              .filter(e)
              .map(e)
          : [];
      }
      function st(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : document,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = at(t, e);
        if (r) return r;
        if (n >= 20) return null;
        for (var i = lt(e), o = 0; o < i.length; o++) {
          var u = st(t, i[o], n + 1);
          if (u) return u;
        }
        return null;
      }
      function ft(t, e) {
        if (((H = e), !t || !t.root || !Array.isArray(t.animations))) return null;
        var n = st(t);
        if (!n) return null;
        var r = t.animations
          .map(function (t) {
            return ut(n, t);
          })
          .filter(function (t) {
            return !!t;
          });
        return r.length
          ? {
              svg: n,
              animations: r,
              animationSettings: t.animationSettings,
              options: t.options || void 0,
            }
          : null;
      }
      function ct(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number,
          r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : 'undefined' != typeof BigInt && BigInt,
          i = '0x' + (t.replace(/[^0-9a-fA-F]+/g, '') || 27);
        return e && r && n.isSafeInteger && !n.isSafeInteger(+i)
          ? (n(r(i)) % e) + e
          : +i;
      }
      function ht(t, e, n) {
        return !t || !n || e > t.length
          ? t
          : t.substring(0, e) + ht(t.substring(e + 1), n, n);
      }
      function vt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 27;
        return !t || t % e ? t % e : [0, 1].includes(e) ? e : vt(t / e, e);
      }
      function dt(t, e, n) {
        if (t && t.length) {
          var r = ct(n),
            i = vt(r) + 5,
            o = ht(t, vt(r, 5), i);
          return (
            (o = o.replace(/\x7c$/g, '==').replace(/\x2f$/g, '=')),
            (o = (function (t, e, n) {
              var r = +('0x' + t.substring(0, 4));
              t = t.substring(4);
              for (
                var i = (ct(e, r) % r) + (n % 27), o = [], u = 0;
                u < t.length;
                u += 2
              )
                if ('|' !== t[u]) {
                  var a = +('0x' + t[u] + t[u + 1]) - i;
                  o.push(a);
                } else {
                  var l = +('0x' + t.substring(u + 1, u + 1 + 4)) - i;
                  (u += 3), o.push(l);
                }
              return String.fromCharCode.apply(String, o);
            })((o = (o = atob(o)).replace(/[\x41-\x5A]/g, '')), e, r)),
            (o = JSON.parse(o))
          );
        }
      }
      var yt = [
          { key: 'alternate', def: !1 },
          { key: 'fill', def: 1 },
          { key: 'iterations', def: 0 },
          { key: 'direction', def: 1 },
          { key: 'speed', def: 1 },
          { key: 'fps', def: 100 },
        ],
        gt = (function () {
          function t(e, n) {
            var i = this,
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
            r(this, t),
              (this._id = 0),
              (this._running = !1),
              (this._rollingBack = !1),
              (this._animations = e),
              (this._settings = n),
              (!o || o < '2022-05-02') && delete this._settings.speed,
              yt.forEach(function (t) {
                i._settings[t.key] = i._settings[t.key] || t.def;
              }),
              (this.duration = n.duration),
              (this.offset = n.offset || 0),
              (this.rollbackStartOffset = 0);
          }
          return (
            o(
              t,
              [
                {
                  key: 'alternate',
                  get: function () {
                    return this._settings.alternate;
                  },
                },
                {
                  key: 'fill',
                  get: function () {
                    return this._settings.fill;
                  },
                },
                {
                  key: 'iterations',
                  get: function () {
                    return this._settings.iterations;
                  },
                },
                {
                  key: 'direction',
                  get: function () {
                    return this._settings.direction;
                  },
                },
                {
                  key: 'speed',
                  get: function () {
                    return this._settings.speed;
                  },
                },
                {
                  key: 'fps',
                  get: function () {
                    return this._settings.fps;
                  },
                },
                {
                  key: 'maxFiniteDuration',
                  get: function () {
                    return this.iterations > 0
                      ? this.iterations * this.duration
                      : this.duration;
                  },
                },
                {
                  key: '_apply',
                  value: function (t) {
                    for (
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        n = this._animations,
                        r = n.length,
                        i = 0,
                        o = 0;
                      o < r;
                      o++
                    )
                      e[o] ? i++ : ((e[o] = n[o](t, 1)), e[o] && i++);
                    return i;
                  },
                },
                {
                  key: '_rollback',
                  value: function (t) {
                    var e = this,
                      n = 1 / 0,
                      r = null;
                    (this.rollbackStartOffset = t),
                      (this._rollingBack = !0),
                      (this._running = !0);
                    this._id = window.requestAnimationFrame(function i(o) {
                      if (e._rollingBack) {
                        null == r && (r = o);
                        var u = Math.round(t - (o - r) * e.speed);
                        if (u > e.duration && n !== 1 / 0) {
                          var a = !!e.alternate && (u / e.duration) % 2 > 1,
                            l = u % e.duration;
                          u = (l += a ? e.duration : 0) || e.duration;
                        }
                        var s = (e.fps ? 1e3 / e.fps : 0) * e.speed,
                          f = Math.max(0, u);
                        f <= n - s && ((e.offset = f), (n = f), e._apply(f));
                        var c =
                          e.iterations > 0 &&
                          -1 === e.fill &&
                          u >= e.maxFiniteDuration;
                        (u <= 0 || e.offset < u || c) && e.stop(),
                          (e._id = window.requestAnimationFrame(i));
                      }
                    });
                  },
                },
                {
                  key: '_start',
                  value: function () {
                    var t = this,
                      e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      n = -1 / 0,
                      r = null,
                      i = {};
                    this._running = !0;
                    var o = function o(u) {
                      null == r && (r = u);
                      var a = Math.round((u - r) * t.speed + e),
                        l = (t.fps ? 1e3 / t.fps : 0) * t.speed;
                      if (
                        a >= n + l &&
                        !t._rollingBack &&
                        ((t.offset = a),
                        (n = a),
                        t._apply(a, i) === t._animations.length)
                      )
                        return void t.pause(!0);
                      t._id = window.requestAnimationFrame(o);
                    };
                    this._id = window.requestAnimationFrame(o);
                  },
                },
                {
                  key: '_pause',
                  value: function () {
                    this._id && window.cancelAnimationFrame(this._id),
                      (this._running = !1);
                  },
                },
                {
                  key: 'play',
                  value: function () {
                    if (!this._running)
                      return this._rollingBack
                        ? this._rollback(this.offset)
                        : this._start(this.offset);
                  },
                },
                {
                  key: 'stop',
                  value: function () {
                    this._pause(),
                      (this.offset = 0),
                      (this.rollbackStartOffset = 0),
                      (this._rollingBack = !1),
                      this._apply(0);
                  },
                },
                {
                  key: 'reachedToEnd',
                  value: function () {
                    return (
                      this.iterations > 0 &&
                      this.offset >= this.iterations * this.duration
                    );
                  },
                },
                {
                  key: 'restart',
                  value: function () {
                    var t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    this.stop(t), this.play(t);
                  },
                },
                {
                  key: 'pause',
                  value: function () {
                    this._pause();
                  },
                },
                {
                  key: 'reverse',
                  value: function () {
                    this.direction = -this.direction;
                  },
                },
              ],
              [
                {
                  key: 'build',
                  value: function (t, e) {
                    delete t.animationSettings,
                      (t.options = dt(t.options, t.root, '91c80d77')),
                      t.animations.map(function (e) {
                        (e.settings = dt(e.s, t.root, '91c80d77')),
                          delete e.s,
                          t.animationSettings || (t.animationSettings = e.settings);
                      });
                    var n = t.version;
                    if (!(t = ft(t, e))) return null;
                    var r = t.options || {},
                      i = new this(t.animations, t.animationSettings, n);
                    return { el: t.svg, options: r, player: i };
                  },
                },
                {
                  key: 'push',
                  value: function (t) {
                    return this.build(t);
                  },
                },
                {
                  key: 'init',
                  value: function () {
                    var t = this,
                      e =
                        window.__SVGATOR_PLAYER__ &&
                        window.__SVGATOR_PLAYER__['91c80d77'];
                    Array.isArray(e) &&
                      e.splice(0).forEach(function (e) {
                        return t.build(e);
                      });
                  },
                },
              ],
            ),
            t
          );
        })();
      !(function () {
        for (
          var t = 0, e = ['ms', 'moz', 'webkit', 'o'], n = 0;
          n < e.length && !window.requestAnimationFrame;
          ++n
        )
          (window.requestAnimationFrame = window[e[n] + 'RequestAnimationFrame']),
            (window.cancelAnimationFrame =
              window[e[n] + 'CancelAnimationFrame'] ||
              window[e[n] + 'CancelRequestAnimationFrame']);
        window.requestAnimationFrame ||
          ((window.requestAnimationFrame = function (e) {
            var n = Date.now(),
              r = Math.max(0, 16 - (n - t)),
              i = window.setTimeout(function () {
                e(n + r);
              }, r);
            return (t = n + r), i;
          }),
          (window.cancelAnimationFrame = window.clearTimeout));
      })();
      var pt = (function () {
        function t(e, n, i) {
          r(this, t);
          var o = (function (t) {
            var e,
              n,
              r,
              i =
                t &&
                1 ===
                  (null === (e = t.ownerDocument) ||
                  void 0 === e ||
                  null === (n = e.childNodes) ||
                  void 0 === n
                    ? void 0
                    : n.length) &&
                window.parent !== window,
              o = { el: t, window: window };
            if (!i) return o;
            try {
              r = window.parent.document;
            } catch (t) {
              return o;
            }
            return (
              (o.window = window.parent),
              (o.el =
                Array.from(r.querySelectorAll('iframe,object')).filter(function (t) {
                  return t.contentWindow === window;
                })[0] || o.el),
              o
            );
          })(e);
          (n = Math.max(1, n || 1)),
            (n = Math.min(n, 100)),
            (this.el = o.el),
            (this._handlers = []),
            (this.onThresholdChange = i && i.call ? i : function () {}),
            (this.thresholdPercent = n || 1),
            (this.currentVisibility = null),
            (this.visibilityCalculator = (function (t, e) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n,
                r = !1,
                i = null,
                o = function () {
                  for (
                    var o = 0,
                      u = n.innerHeight,
                      a = 0,
                      l = n.innerWidth,
                      s = t.parentNode;
                    s instanceof Element;

                  ) {
                    var f = n.getComputedStyle(s);
                    if ('visible' !== f.overflowY || 'visible' !== f.overflowX) {
                      var c = s.getBoundingClientRect();
                      'visible' !== f.overflowY &&
                        ((o = Math.max(o, c.top)), (u = Math.min(u, c.bottom))),
                        'visible' !== f.overflowX &&
                          ((a = Math.max(a, c.left)), (l = Math.min(l, c.right)));
                    }
                    if (s === s.parentNode) break;
                    s = s.parentNode;
                  }
                  r = !1;
                  var h = t.getBoundingClientRect(),
                    v = Math.min(h.height, Math.max(0, o - h.top)),
                    d = Math.min(h.height, Math.max(0, h.bottom - u)),
                    y = Math.min(h.width, Math.max(0, a - h.left)),
                    g = Math.min(h.width, Math.max(0, h.right - l)),
                    p = (h.height - v - d) / h.height,
                    m = (h.width - y - g) / h.width,
                    b = Math.round(p * m * 100);
                  (null !== i && i === b) || ((i = b), e(b));
                };
              return function (t) {
                r && clearTimeout(r),
                  (r = setTimeout(function () {
                    return o();
                  }, 100));
              };
            })(this.el, this.onVisibilityUpdate.bind(this), o.window)),
            this.bindScrollWatchers(),
            this.visibilityCalculator();
        }
        return (
          o(t, [
            {
              key: 'bindScrollWatchers',
              value: function () {
                for (
                  var t = this.el.parentNode;
                  t &&
                  (this._handlers.push({
                    element: t,
                    event: 'scroll',
                    handler: this.visibilityCalculator,
                  }),
                  t.addEventListener('scroll', this.visibilityCalculator),
                  t !== t.parentNode && t !== document);

                )
                  t = t.parentNode;
              },
            },
            {
              key: 'onVisibilityUpdate',
              value: function (t) {
                var e = this.currentVisibility >= this.thresholdPercent,
                  n = t >= this.thresholdPercent;
                if (null === this.currentVisibility || e !== n)
                  return (
                    (this.currentVisibility = t), void this.onThresholdChange(n)
                  );
                this.currentVisibility = t;
              },
            },
            {
              key: 'destruct',
              value: function () {
                this._handlers.forEach(function (t) {
                  t.element.removeEventListener(t.event, t.handler);
                });
              },
            },
          ]),
          t
        );
      })();
      function mt(t) {
        return p(t) + '';
      }
      function bt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ' ';
        return t && t.length ? t.map(mt).join(e) : '';
      }
      function wt(t) {
        return mt(t.x) + ',' + mt(t.y);
      }
      function kt(t) {
        return t
          ? null == t.a || t.a >= 1
            ? (function (t) {
                if (!t) return 'transparent';
                var e = function (t) {
                  return parseInt(t).toString(16).padStart(2, '0');
                };
                return (function (t) {
                  for (
                    var e = [], n = '#' === t[0] ? e.push('#') : 0;
                    n < t.length;
                    n += 2
                  ) {
                    if (t[n] !== t[n + 1]) return t;
                    e.push(t[n]);
                  }
                  return e.join('');
                })(
                  '#' +
                    e(t.r) +
                    e(t.g) +
                    e(t.b) +
                    (null == t.a || t.a >= 1 ? '' : e(255 * t.a)),
                );
              })(t)
            : 'rgba(' + t.r + ',' + t.g + ',' + t.b + ',' + t.a + ')'
          : 'transparent';
      }
      function _t(t) {
        return t ? 'url(#' + t + ')' : 'none';
      }
      var At = {
          f: null,
          i: G,
          u: function (t, e) {
            return function (n) {
              var r = e(n);
              t.setAttribute('rx', mt(r.x)), t.setAttribute('ry', mt(r.y));
            };
          },
        },
        xt = {
          f: null,
          i: function (t, e, n) {
            return 0 === t
              ? e
              : 1 === t
              ? n
              : {
                  width: q(t, e.width, n.width),
                  height: q(t, e.height, n.height),
                };
          },
          u: function (t, e) {
            return function (n) {
              var r = e(n);
              t.setAttribute('width', mt(r.width)),
                t.setAttribute('height', mt(r.height));
            };
          },
        };
      Object.freeze({
        M: 2,
        L: 2,
        Z: 0,
        H: 1,
        V: 1,
        C: 6,
        Q: 4,
        T: 2,
        S: 4,
        A: 7,
      });
      var St = {},
        Ot = null;
      function Et(t) {
        var e = (function () {
          if (Ot) return Ot;
          if (
            'object' !==
              ('undefined' == typeof document ? 'undefined' : n(document)) ||
            !document.createElementNS
          )
            return {};
          var t = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          return t && t.style
            ? ((t.style.position = 'absolute'),
              (t.style.opacity = '0.01'),
              (t.style.zIndex = '-9999'),
              (t.style.left = '-9999px'),
              (t.style.width = '1px'),
              (t.style.height = '1px'),
              (Ot = { svg: t }))
            : {};
        })().svg;
        if (!e)
          return function (t) {
            return null;
          };
        var r = document.createElementNS(e.namespaceURI, 'path');
        r.setAttributeNS(null, 'd', t),
          r.setAttributeNS(null, 'fill', 'none'),
          r.setAttributeNS(null, 'stroke', 'none'),
          e.appendChild(r);
        var i = r.getTotalLength();
        return function (t) {
          var e = r.getPointAtLength(i * t);
          return { x: e.x, y: e.y };
        };
      }
      function jt(t) {
        return St[t] ? St[t] : (St[t] = Et(t));
      }
      function Mt(t, e, n, r) {
        if (!t || !r) return !1;
        var i = ['M', t.x, t.y];
        if (
          (e &&
            n &&
            (i.push('C'), i.push(e.x), i.push(e.y), i.push(n.x), i.push(n.y)),
          e ? !n : n)
        ) {
          var o = e || n;
          i.push('Q'), i.push(o.x), i.push(o.y);
        }
        return e || n || i.push('L'), i.push(r.x), i.push(r.y), i.join(' ');
      }
      function Pt(t, e, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          o = Mt(t, e, n, r),
          u = jt(o);
        try {
          return u(i);
        } catch (t) {
          return null;
        }
      }
      function Bt(t, e, n) {
        return t + (e - t) * n;
      }
      function It(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = { x: Bt(t.x, e.x, n), y: Bt(t.y, e.y, n) };
        return r && (i.a = Tt(t, e)), i;
      }
      function Tt(t, e) {
        return Math.atan2(e.y - t.y, e.x - t.x);
      }
      function Nt(t, e, n, r) {
        var i = 1 - r;
        return i * i * t + 2 * i * r * e + r * r * n;
      }
      function Rt(t, e, n, r) {
        return 2 * (1 - r) * (e - t) + 2 * r * (n - e);
      }
      function Ft(t, e, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          o = Pt(t, e, null, n, r);
        return (
          o || (o = { x: Nt(t.x, e.x, n.x, r), y: Nt(t.y, e.y, n.y, r) }),
          i && (o.a = Dt(t, e, n, r)),
          o
        );
      }
      function Dt(t, e, n, r) {
        return Math.atan2(Rt(t.y, e.y, n.y, r), Rt(t.x, e.x, n.x, r));
      }
      function Ct(t, e, n, r, i) {
        var o = i * i;
        return (
          i * o * (r - t + 3 * (e - n)) +
          3 * o * (t + n - 2 * e) +
          3 * i * (e - t) +
          t
        );
      }
      function qt(t, e, n, r, i) {
        var o = 1 - i;
        return 3 * (o * o * (e - t) + 2 * o * i * (n - e) + i * i * (r - n));
      }
      function Lt(t, e, n, r, i) {
        var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          u = Pt(t, e, n, r, i);
        return (
          u ||
            (u = {
              x: Ct(t.x, e.x, n.x, r.x, i),
              y: Ct(t.y, e.y, n.y, r.y, i),
            }),
          o && (u.a = Vt(t, e, n, r, i)),
          u
        );
      }
      function Vt(t, e, n, r, i) {
        return Math.atan2(qt(t.y, e.y, n.y, r.y, i), qt(t.x, e.x, n.x, r.x, i));
      }
      function Gt(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (Yt(e)) {
          if (Ut(n)) return Ft(e, n.start, n, t, r);
        } else if (Yt(n)) {
          if (Wt(e)) return Ft(e, e.end, n, t, r);
        } else {
          if (Wt(e))
            return Ut(n) ? Lt(e, e.end, n.start, n, t, r) : Ft(e, e.end, n, t, r);
          if (Ut(n)) return Ft(e, n.start, n, t, r);
        }
        return It(e, n, t, r);
      }
      function zt(t, e, n) {
        var r = Gt(t, e, n, !0);
        return (
          (r.a = k(
            (function (t) {
              return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                ? t + Math.PI
                : t;
            })(r.a),
          )),
          r
        );
      }
      function Yt(t) {
        return !t.type || 'corner' === t.type;
      }
      function Ut(t) {
        return null != t.start && !Yt(t);
      }
      function Wt(t) {
        return null != t.end && !Yt(t);
      }
      var $t = new R();
      var Ht = {
          f: function (t) {
            return t ? t.join(' ') : '';
          },
          i: function (t, e, r) {
            if (0 === t) return e;
            if (1 === t) return r;
            var i = e.length;
            if (i !== r.length) return D(t, e, r);
            for (var o, u = new Array(i), a = 0; a < i; a++) {
              if ((o = n(e[a])) !== n(r[a])) return D(t, e, r);
              if ('number' === o) u[a] = C(t, e[a], r[a]);
              else {
                if (e[a] !== r[a]) return D(t, e, r);
                u[a] = e[a];
              }
            }
            return u;
          },
        },
        Qt = {
          f: null,
          i: U,
          u: function (t, e) {
            return function (n) {
              var r = e(n);
              t.setAttribute('x1', mt(r[0])),
                t.setAttribute('y1', mt(r[1])),
                t.setAttribute('x2', mt(r[2])),
                t.setAttribute('y2', mt(r[3]));
            };
          },
        },
        Xt = { f: mt, i: C },
        Jt = { f: mt, i: L },
        Kt = {
          f: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ' ';
            return (
              t &&
                t.length > 0 &&
                (t = t.map(function (t) {
                  return p(t, 4);
                })),
              bt(t, e)
            );
          },
          i: function (t, e, n) {
            var r,
              i,
              o,
              u = e.length,
              a = n.length;
            if (u !== a)
              if (0 === u) e = W((u = a), 0);
              else if (0 === a) (a = u), (n = W(u, 0));
              else {
                var l =
                  (o =
                    ((r = u) * (i = a)) /
                    (function (t, e) {
                      for (var n; e; ) (n = e), (e = t % e), (t = n);
                      return t || 1;
                    })(r, i)) < 0
                    ? -o
                    : o;
                (e = $(e, Math.floor(l / u))),
                  (n = $(n, Math.floor(l / a))),
                  (u = a = l);
              }
            for (var s = [], f = 0; f < u; f++) s.push(p(q(t, e[f], n[f])));
            return s;
          },
        };
      function Zt(t, e, n) {
        return t.map(function (t) {
          return (function (t, e, n) {
            var r = t.v;
            if (!r || 'g' !== r.t || r.s || !r.v || !r.r) return t;
            var i = n.getElementById(r.r),
              o = (i && i.querySelectorAll('stop')) || [];
            return (
              (r.s = r.v.map(function (t, e) {
                var n = o[e] && o[e].getAttribute('offset');
                return { c: t, o: (n = p(parseInt(n) / 100)) };
              })),
              delete r.v,
              t
            );
          })(t, 0, n);
        });
      }
      var te = {
        gt: 'gradientTransform',
        c: { x: 'cx', y: 'cy' },
        rd: 'r',
        f: { x: 'x1', y: 'y1' },
        to: { x: 'x2', y: 'y2' },
      };
      function ee(t, e, r, i, o, u, a, l) {
        return (
          Zt(t, 0, l),
          (e = (function (t, e, n) {
            for (var r, i, o, u = t.length - 1, a = {}, l = 0; l <= u; l++)
              (r = t[l]).e && (r.e = e(r.e)),
                r.v &&
                  'g' === (i = r.v).t &&
                  i.r &&
                  (o = n.getElementById(i.r)) &&
                  (a[i.r] = { e: o, s: o.querySelectorAll('stop') });
            return a;
          })(t, i, l)),
          function (i) {
            var o = r(i, t, ne);
            if (!o) return 'none';
            if ('c' === o.t) return kt(o.v);
            if ('g' === o.t) {
              if (!e[o.r]) return _t(o.r);
              var u = e[o.r];
              return (
                (function (t, e) {
                  for (var n = t.s, r = n.length; r < e.length; r++) {
                    var i = n[n.length - 1].cloneNode();
                    (i.id = oe(i.id)),
                      t.e.appendChild(i),
                      (n = t.s = t.e.querySelectorAll('stop'));
                  }
                  for (var o = 0, u = n.length, a = e.length - 1; o < u; o++)
                    n[o].setAttribute('stop-color', kt(e[Math.min(o, a)].c)),
                      n[o].setAttribute('offset', e[Math.min(o, a)].o);
                })(u, o.s),
                Object.keys(te).forEach(function (t) {
                  if (void 0 !== o[t])
                    if ('object' !== n(te[t])) {
                      var e,
                        r =
                          'gt' === t
                            ? ((e = o[t]),
                              Array.isArray(e) ? 'matrix(' + e.join(' ') + ')' : '')
                            : o[t],
                        i = te[t];
                      u.e.setAttribute(i, r);
                    } else
                      Object.keys(te[t]).forEach(function (e) {
                        if (void 0 !== o[t][e]) {
                          var n = o[t][e],
                            r = te[t][e];
                          u.e.setAttribute(r, n);
                        }
                      });
                }),
                _t(o.r)
              );
            }
            return 'none';
          }
        );
      }
      function ne(t, n, r) {
        if (0 === t) return n;
        if (1 === t) return r;
        if (n && r) {
          var i = n.t;
          if (i === r.t)
            switch (n.t) {
              case 'c':
                return { t: i, v: Y(t, n.v, r.v) };
              case 'g':
                if (n.r === r.r) {
                  var o = { t: i, s: re(t, n.s, r.s), r: n.r };
                  return (
                    n.gt && r.gt && (o.gt = U(t, n.gt, r.gt)),
                    n.c
                      ? ((o.c = V(t, n.c, r.c)), (o.rd = q(t, n.rd, r.rd)))
                      : n.f && ((o.f = V(t, n.f, r.f)), (o.to = V(t, n.to, r.to))),
                    o
                  );
                }
            }
          if (('c' === n.t && 'g' === r.t) || ('c' === r.t && 'g' === n.t)) {
            var u = 'c' === n.t ? n : r,
              a = 'g' === n.t ? e({}, n) : e({}, r),
              l = a.s.map(function (t) {
                return { c: u.v, o: t.o };
              });
            return (a.s = 'c' === n.t ? re(t, l, a.s) : re(t, a.s, l)), a;
          }
        }
        return D(t, n, r);
      }
      function re(t, e, n) {
        if (e.length === n.length)
          return e.map(function (e, r) {
            return ie(t, e, n[r]);
          });
        for (var r = Math.max(e.length, n.length), i = [], o = 0; o < r; o++) {
          var u = ie(t, e[Math.min(o, e.length - 1)], n[Math.min(o, n.length - 1)]);
          i.push(u);
        }
        return i;
      }
      function ie(t, e, n) {
        return { o: L(t, e.o, n.o || 0), c: Y(t, e.c, n.c || {}) };
      }
      function oe(t) {
        return t.replace(/-fill-([0-9]+)$/, function (t, e) {
          return '-fill-' + (+e + 1);
        });
      }
      function ue(t, e, n) {
        return 0 === t
          ? e
          : 1 === t
          ? n
          : {
              blur: G(t, e.blur, n.blur),
              offset: V(t, e.offset, n.offset),
              color: Y(t, e.color, n.color),
            };
      }
      var ae = {
        blur: G,
        brightness: q,
        contrast: q,
        'drop-shadow': ue,
        'inner-shadow': ue,
        grayscale: q,
        'hue-rotate': C,
        invert: q,
        opacity: q,
        saturate: q,
        sepia: q,
      };
      function le(t, e, n) {
        if (0 === t) return e;
        if (1 === t) return n;
        var r = e.length;
        if (r !== n.length) return D(t, e, n);
        for (var i, o = [], u = 0; u < r; u++) {
          if (e[u].type !== n[u].type) return e;
          if (!(i = ae[e[u].type])) return D(t, e, n);
          o.push({ type: e.type, value: i(t, e[u].value, n[u].value) });
        }
        return o;
      }
      var se = {
        blur: function (t) {
          return t
            ? function (e) {
                t.setAttribute('stdDeviation', wt(e));
              }
            : null;
        },
        brightness: function (t, e, n) {
          return (t = ce(n, e))
            ? function (e) {
                (e = mt(e)),
                  t.map(function (t) {
                    return t.setAttribute('slope', e);
                  });
              }
            : null;
        },
        contrast: function (t, e, n) {
          return (t = ce(n, e))
            ? function (e) {
                var n = mt((1 - e) / 2);
                (e = mt(e)),
                  t.map(function (t) {
                    t.setAttribute('slope', e), t.setAttribute('intercept', n);
                  });
              }
            : null;
        },
        'drop-shadow': function (t, e, n) {
          var r = n.getElementById(e + '-blur');
          if (!r) return null;
          var i = n.getElementById(e + '-offset');
          if (!i) return null;
          var o = n.getElementById(e + '-flood');
          return o
            ? function (t) {
                r.setAttribute('stdDeviation', wt(t.blur)),
                  i.setAttribute('dx', mt(t.offset.x)),
                  i.setAttribute('dy', mt(t.offset.y)),
                  o.setAttribute('flood-color', kt(t.color));
              }
            : null;
        },
        'inner-shadow': function (t, e, n) {
          var r = n.getElementById(e + '-blur');
          if (!r) return null;
          var i = n.getElementById(e + '-offset');
          if (!i) return null;
          var o = n.getElementById(e + '-color-matrix');
          return o
            ? function (t) {
                r.setAttribute('stdDeviation', wt(t.blur)),
                  i.setAttribute('dx', mt(t.offset.x)),
                  i.setAttribute('dy', mt(t.offset.y));
                var e = [
                  0,
                  0,
                  0,
                  0,
                  t.color.r / 255,
                  0,
                  0,
                  0,
                  0,
                  t.color.g / 255,
                  0,
                  0,
                  0,
                  0,
                  t.color.b / 255,
                  0,
                  0,
                  0,
                  t.color.a,
                  0,
                ];
                o.setAttribute('values', bt(e));
              }
            : null;
        },
        grayscale: function (t) {
          return t
            ? function (e) {
                t.setAttribute(
                  'values',
                  bt(
                    (function (t) {
                      return [
                        0.2126 + 0.7874 * (t = 1 - t),
                        0.7152 - 0.7152 * t,
                        0.0722 - 0.0722 * t,
                        0,
                        0,
                        0.2126 - 0.2126 * t,
                        0.7152 + 0.2848 * t,
                        0.0722 - 0.0722 * t,
                        0,
                        0,
                        0.2126 - 0.2126 * t,
                        0.7152 - 0.7152 * t,
                        0.0722 + 0.9278 * t,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                      ];
                    })(e),
                  ),
                );
              }
            : null;
        },
        'hue-rotate': function (t) {
          return t
            ? function (e) {
                return t.setAttribute('values', mt(e));
              }
            : null;
        },
        invert: function (t, e, n) {
          return (t = ce(n, e))
            ? function (e) {
                (e = mt(e) + ' ' + mt(1 - e)),
                  t.map(function (t) {
                    return t.setAttribute('tableValues', e);
                  });
              }
            : null;
        },
        opacity: function (t, e, n) {
          return (t = n.getElementById(e + '-A'))
            ? function (e) {
                return t.setAttribute('tableValues', '0 ' + mt(e));
              }
            : null;
        },
        saturate: function (t) {
          return t
            ? function (e) {
                return t.setAttribute('values', mt(e));
              }
            : null;
        },
        sepia: function (t) {
          return t
            ? function (e) {
                return t.setAttribute(
                  'values',
                  bt(
                    (function (t) {
                      return [
                        0.393 + 0.607 * (t = 1 - t),
                        0.769 - 0.769 * t,
                        0.189 - 0.189 * t,
                        0,
                        0,
                        0.349 - 0.349 * t,
                        0.686 + 0.314 * t,
                        0.168 - 0.168 * t,
                        0,
                        0,
                        0.272 - 0.272 * t,
                        0.534 - 0.534 * t,
                        0.131 + 0.869 * t,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                      ];
                    })(e),
                  ),
                );
              }
            : null;
        },
      };
      var fe = ['R', 'G', 'B'];
      function ce(t, e) {
        var n = fe.map(function (n) {
          return t.getElementById(e + '-' + n) || null;
        });
        return -1 !== n.indexOf(null) ? null : n;
      }
      var he = {
          fill: ee,
          'fill-opacity': Jt,
          stroke: ee,
          'stroke-opacity': Jt,
          'stroke-width': Xt,
          'stroke-dashoffset': { f: mt, i: C },
          'stroke-dasharray': Kt,
          opacity: Jt,
          transform: function (t, e, r, i) {
            if (
              !(t = (function (t, e) {
                if (!t || 'object' !== n(t)) return null;
                var r = !1;
                for (var i in t)
                  t.hasOwnProperty(i) &&
                    (t[i] && t[i].length
                      ? (t[i].forEach(function (t) {
                          t.e && (t.e = e(t.e));
                        }),
                        (r = !0))
                      : delete t[i]);
                return r ? t : null;
              })(t, i))
            )
              return null;
            var o = function (n, i, o) {
              var u =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return t[n] ? r(i, t[n], o) : e && e[n] ? e[n] : u;
            };
            return e && e.a && t.o
              ? function (e) {
                  var n = r(e, t.o, zt);
                  return $t
                    .recomposeSelf(
                      n,
                      o('r', e, C, 0) + n.a,
                      o('k', e, V),
                      o('s', e, V),
                      o('t', e, V),
                    )
                    .toString();
                }
              : function (t) {
                  return $t
                    .recomposeSelf(
                      o('o', t, Gt, null),
                      o('r', t, C, 0),
                      o('k', t, V),
                      o('s', t, V),
                      o('t', t, V),
                    )
                    .toString();
                };
          },
          '#filter': function (t, e, n, r, i, o, u, a) {
            if (!e.items || !t || !t.length) return null;
            var l = (function (t, e) {
              var n = (t = t.map(function (t) {
                return t && se[t[0]]
                  ? (e.getElementById(t[1]),
                    se[t[0]](e.getElementById(t[1]), t[1], e))
                  : null;
              })).length;
              return function (e) {
                for (var r = 0; r < n; r++) t[r] && t[r](e[r].value);
              };
            })(e.items, a);
            return l
              ? ((t = (function (t, e) {
                  return t.map(function (t) {
                    return (t.e = e(t.e)), t;
                  });
                })(t, r)),
                function (e) {
                  l(n(e, t, le));
                })
              : null;
          },
          '#line': Qt,
          points: { f: bt, i: U },
          d: Ht,
          r: Xt,
          '#size': xt,
          '#radius': At,
          _: function (t, e) {
            if (Array.isArray(t)) for (var n = 0; n < t.length; n++) this[t[n]] = e;
            else this[t] = e;
          },
        },
        ve = {
          currentTime: 'offset',
          duration: 'duration',
          hasEnded: function () {
            return this.reachedToEnd();
          },
          isAlternate: 'alternate',
          isPlaying: '_running',
          isRollingBack: '_rollingBack',
          state: function (t, e) {
            return e.isPlaying
              ? e.isRollingBack
                ? 'rollback'
                : 'playing'
              : e.hasEnded
              ? 'ended'
              : 'paused';
          },
          totalTime: 'maxFiniteDuration',
          iterations: 'iterations',
          direction: 'direction',
          fill: 'fill',
          isReversed: function (t, e) {
            return -1 === e.direction;
          },
          isBackwards: function (t, e) {
            return -1 === e.fill;
          },
          isInfinite: function (t, e) {
            return 0 === e.iterations;
          },
          speed: 'speed',
          fps: 'fps',
        },
        de = {
          destruct: 'destruct',
          pause: 'pause',
          play: function (t, e) {
            return ye(t, e.hasEnded ? 'restart' : 'play', e);
          },
          restart: 'restart',
          reverse: function (t, e) {
            return ye(t, 'reverse', e, [!0]);
          },
          seek: 'seek',
          seekBy: 'seekBy',
          seekTo: 'seekTo',
          stop: 'stop',
          toggle: 'toggle',
          togglePlay: 'toggle',
          set: 'set',
        };
      function ye(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        return function () {
          var i,
            o = Array.prototype.slice.call(arguments);
          return (
            o.unshift.apply(o, v(r)), (i = t[e]).call.apply(i, [t].concat(v(o))), n
          );
        };
      }
      var ge = function t(e) {
        r(this, t);
        var n = {},
          i = ['on', 'off'],
          o = {
            get: function (t, e, r) {
              return ve[e]
                ? 'function' == typeof ve[e]
                  ? ve[e].call(t, t, r)
                  : t[ve[e]]
                : de[e]
                ? 'function' == typeof de[e]
                  ? de[e].call(t, t, r)
                  : ye(t, de[e], r)
                : -1 !== i.indexOf(e)
                ? n[e]
                : 'ready' === e
                ? function (t) {
                    return t && t.call(r, r), r;
                  }
                : void 0;
            },
            set: function (t, e, r) {
              return -1 !== i.indexOf(e) && (n[e] = r);
            },
            ownKeys: function (t) {
              return Object.keys(ve);
            },
            has: function (t, e) {
              return void 0 !== ve[e];
            },
          };
        if ('function' == typeof Proxy) return new Proxy(e, o);
        var u = Object.keys(ve).concat(Object.keys(de)).concat(i),
          a = {};
        return (
          u.forEach(function (t) {
            var n = {
              enumerable: !1,
              configurable: !1,
              get: function () {
                return o.get(e, t, a);
              },
            };
            -1 !== i.indexOf(t) &&
              (n.set = function (n) {
                return o.set(e, t, n);
              }),
              Object.defineProperty(a, t, n);
          }),
          a
        );
      };
      function pe(t) {
        t || (t = this);
        var e = {};
        (this.on = function (t, n) {
          var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return (
            'function' == typeof n &&
            (t.split(/[, ]+/g).forEach(function (t) {
              return (e[t] = e[t] || []), r ? e[t].unshift(n) : e[t].push(n);
            }),
            !0)
          );
        }),
          (this.off = function (t, n) {
            for (var r in e)
              if (e.hasOwnProperty(r) && r.substr(0, t.length) === t)
                if (n)
                  for (var i = 0; i < e[r].length; i++)
                    e[r][i] === n && (e[r][i] = null);
                else e[r] = null;
          }),
          (this.trigger = function () {
            var n,
              r = Array.prototype.slice.call(arguments),
              i = r[0],
              o = r.slice(1);
            t: for (var u in e)
              if (
                e.hasOwnProperty(u) &&
                e[u] &&
                (u === i || u.substr(0, i.length + 1) === i + '.')
              )
                for (var a = 0; a < (e[u] || []).length; a++)
                  if (e[u][a] && !1 === (n = e[u][a].apply(t, o))) break t;
            return n;
          });
      }
      var me = !0,
        be = ['iterations', 'speed', 'fps', 'direction', 'fill', 'alternate'],
        we = (function (t) {
          !(function (t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              e && l(t, e);
          })(u, t);
          var e,
            n,
            i =
              ((e = u),
              (n = s()),
              function () {
                var t,
                  r = a(e);
                if (n) {
                  var i = a(this).constructor;
                  t = Reflect.construct(r, arguments, i);
                } else t = r.apply(this, arguments);
                return c(this, t);
              });
          function u(t, e) {
            var n,
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
            return r(this, u), ((n = i.call(this, t, e, o))._handlers = []), n;
          }
          return (
            o(
              u,
              [
                {
                  key: '_adjustOffset',
                  value: function () {
                    var t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      e = this.alternate ? 2 * this.duration : this.duration;
                    if (t) {
                      if (!this._rollingBack && 0 === this.offset)
                        return void (this.offset = e);
                      this._rollingBack && (this.offset, this.maxFiniteDuration);
                    }
                    !this._rollingBack || this.rollbackStartOffset <= this.duration
                      ? 0 !== this.iterations &&
                        (this.offset = Math.min(this.offset, this.maxFiniteDuration))
                      : ((this.offset =
                          this.rollbackStartOffset -
                          ((this.rollbackStartOffset - this.offset) % e)),
                        (this.rollbackStartOffset = 0));
                  },
                },
                {
                  key: 'reverse',
                  value: function () {
                    var t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    if (!this._running)
                      return (
                        this._adjustOffset(t),
                        (this._rollingBack = !this._rollingBack),
                        t && this.play(!1),
                        void this.trigger('reverse', this.offset)
                      );
                    this.pause(!1, !1),
                      this._adjustOffset(),
                      (this._rollingBack = !this._rollingBack),
                      this.play(!1),
                      this.trigger('reverse', this.offset);
                  },
                },
                {
                  key: 'play',
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : me,
                      e = h(a(u.prototype), 'play', this).call(this);
                    return t === me && this.trigger('play', this.offset), e;
                  },
                },
                {
                  key: 'pause',
                  value: function () {
                    var t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : me,
                      n = h(a(u.prototype), 'pause', this).call(this);
                    return (
                      e === me && this.trigger(t ? 'end' : 'pause', this.offset), n
                    );
                  },
                },
                {
                  key: 'restart',
                  value: function () {
                    var t = h(a(u.prototype), 'restart', this).call(this, !1);
                    return this.trigger('restart', this.offset), t;
                  },
                },
                {
                  key: 'stop',
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : me,
                      e = h(a(u.prototype), 'stop', this).call(this);
                    return t === me && this.trigger('stop', this.offset), e;
                  },
                },
                {
                  key: '_apply',
                  value: function (t) {
                    var e = this,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : me,
                      r = h(a(u.prototype), '_apply', this).call(this, t);
                    if (n === me) {
                      var i = function () {
                        return e.trigger('keyframe', t);
                      };
                      window.requestAnimationFrame(i);
                    }
                    return r;
                  },
                },
                {
                  key: 'seekTo',
                  value: function (t) {
                    var e,
                      n,
                      r,
                      i = this._running;
                    i && this.pause(!1, !1),
                      (this.offset =
                        this.iterations > 0
                          ? ((e = t),
                            (n = 0),
                            (r = this.maxFiniteDuration),
                            e < n ? n : e > r ? r : e)
                          : Math.max(t, 0)),
                      this._apply(this.offset),
                      i && this.play(!1);
                  },
                },
                {
                  key: 'seek',
                  value: function (t) {
                    return this.seekTo(
                      Math.round((t / 100) * this.maxFiniteDuration),
                    );
                  },
                },
                {
                  key: 'seekBy',
                  value: function (t) {
                    return this.seekTo(this.offset + t);
                  },
                },
                {
                  key: 'toggle',
                  value: function () {
                    return this._running
                      ? this.pause()
                      : this.reachedToEnd()
                      ? this.restart()
                      : this.play();
                  },
                },
                {
                  key: 'set',
                  value: function (t, e) {
                    if (be.includes(t)) {
                      var n = this._running;
                      n && this.pause(!1, !1),
                        (this._settings[t] = e),
                        n ? this.play(!1) : this._apply(this.offset, {}, !1);
                    }
                  },
                },
                {
                  key: 'destruct',
                  value: function () {
                    var t = this;
                    this.stop(),
                      this._handlers.forEach(function (t) {
                        t.element
                          ? t.element.removeEventListener(t.event, t.handler)
                          : t.callback && t.callback.call && t.callback.call();
                      });
                    var e = function () {},
                      n = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
                    n.push.apply(n, v(Object.getOwnPropertyNames(this))),
                      n.forEach(function (n) {
                        'function' == typeof t[n] ? (t[n] = e) : delete t[n];
                      });
                  },
                },
              ],
              [
                {
                  key: 'build',
                  value: function (t) {
                    var e = h(a(u), 'build', this).call(this, t, he);
                    if (!e) return null;
                    var n = e.el,
                      r = e.options,
                      i = e.player,
                      o = new ge(i),
                      l = new pe(o);
                    (o.on = l.on), (o.off = l.off), (i.trigger = l.trigger);
                    var s =
                      n.svgatorPlayer &&
                      n.svgatorPlayer.ready &&
                      n.svgatorPlayer.ready.call &&
                      n.svgatorPlayer.ready.call();
                    (n.svgatorPlayer = o),
                      (function (t) {
                        var e,
                          n,
                          r =
                            t &&
                            1 ===
                              (null === (e = t.ownerDocument) ||
                              void 0 === e ||
                              null === (n = e.childNodes) ||
                              void 0 === n
                                ? void 0
                                : n.length) &&
                            window.parent !== window,
                          i = null == t ? void 0 : t.firstElementChild;
                        if (
                          !r ||
                          !i ||
                          'a' !== i.tagName ||
                          i.getAttribute('target')
                        )
                          return;
                        i.setAttributeNS(null, 'target', '_parent');
                      })(n),
                      (function (t, e, n) {
                        if ('click' === n.start) {
                          var r = function () {
                            switch (n.click) {
                              case 'freeze':
                                return !t._running && t.reachedToEnd()
                                  ? t.restart()
                                  : t.toggle();
                              case 'restart':
                                return t.offset > 0 ? t.restart() : t.play();
                              case 'reverse':
                                return t._running
                                  ? t.reverse()
                                  : t.reachedToEnd()
                                  ? 1 === t.fill
                                    ? t.reverse(!0)
                                    : t.restart()
                                  : t.play();
                              case 'none':
                              default:
                                if (t._running) return;
                                return t.reachedToEnd() ? t.restart() : t.play();
                            }
                          };
                          return (
                            t._handlers.push({
                              element: e,
                              event: 'click',
                              handler: r,
                            }),
                            void e.addEventListener('click', r)
                          );
                        }
                        if ('hover' === n.start) {
                          var i = function () {
                            return t.reachedToEnd()
                              ? t.restart()
                              : t._rollingBack
                              ? t.reverse()
                              : t.play();
                          };
                          t._handlers.push({
                            element: e,
                            event: 'mouseenter',
                            handler: i,
                          }),
                            e.addEventListener('mouseenter', i);
                          var o = function () {
                            switch (n.hover) {
                              case 'freeze':
                                return t.pause();
                              case 'reset':
                                return t.stop();
                              case 'reverse':
                                if ((t.reverse(), t._running)) return;
                                return t.play();
                              case 'none':
                              default:
                                return;
                            }
                          };
                          return (
                            t._handlers.push({
                              element: e,
                              event: 'mouseleave',
                              handler: o,
                            }),
                            void e.addEventListener('mouseleave', o)
                          );
                        }
                        if ('scroll' === n.start) {
                          var u = new pt(e, n.scroll || 25, function (e) {
                            e
                              ? t.reachedToEnd()
                                ? t.restart()
                                : t.play()
                              : t.pause();
                          });
                          return void t._handlers.push({
                            callback: function () {
                              return u.destruct();
                            },
                          });
                        }
                        if ('programmatic' === n.start) return;
                        t.play();
                      })(i, n, r),
                      (function (t, e, n) {
                        var r;
                        'function' == typeof Event
                          ? (r = new Event('ready'))
                          : (r = document.createEvent('Event')).initEvent(
                              'ready',
                              !0,
                              !0,
                            );
                        if ((t.dispatchEvent(r), !n || !n.length)) return;
                        n.forEach(function (t) {
                          return e.ready(t);
                        });
                      })(n, n.svgatorPlayer, s);
                  },
                },
              ],
            ),
            u
          );
        })(gt);
      return we.init(), we;
    });
    (function (s, i, o, w, d, a, b) {
      (a =
        Array.from(d.querySelectorAll('svg#' + i.root)).filter(
          (n) => !n.svgatorPlayer,
        )[0] || {}).svgatorPlayer = {
        ready: (function (a) {
          b = [];
          return function (c) {
            return c ? (b.push(c), a.svgatorPlayer) : b;
          };
        })(a),
      };
      w[o] = w[o] || {};
      w[o][s] = w[o][s] || [];
      w[o][s].push(i);
    })(
      '91c80d77',
      {
        root: 'ef2Bh6mAPoH1',
        version: '2022-05-04',
        animations: [
          {
            elements: {
              ef2Bh6mAPoH37: {
                '#radius': [
                  { t: 0, v: { x: 6.88, y: 7.43 } },
                  { t: 50, v: { x: 6.88, y: 0.5 } },
                  { t: 100, v: { x: 6.88, y: 7.43 } },
                  { t: 3500, v: { x: 6.88, y: 7.43 } },
                  { t: 3550, v: { x: 6.88, y: 0.5 } },
                  { t: 3600, v: { x: 6.88, y: 7.43 } },
                  { t: 7800, v: { x: 6.88, y: 7.43 } },
                  { t: 7850, v: { x: 6.88, y: 0.5 } },
                  { t: 7900, v: { x: 6.88, y: 7.43 } },
                  { t: 8000, v: { x: 6.88, y: 7.43 } },
                  { t: 8050, v: { x: 6.88, y: 0.5 } },
                  { t: 8100, v: { x: 6.88, y: 7.43 } },
                  { t: 11000, v: { x: 6.88, y: 7.43 } },
                  { t: 11050, v: { x: 6.88, y: 0.5 } },
                  { t: 11100, v: { x: 6.88, y: 7.43 } },
                  { t: 14900, v: { x: 6.88, y: 7.43 } },
                  { t: 14950, v: { x: 6.88, y: 0.5 } },
                  { t: 15000, v: { x: 6.88, y: 7.43 } },
                ],
                transform: {
                  data: { t: { x: 231.5, y: 158.68 } },
                  keys: {
                    o: [
                      { t: 0, v: { x: 0.005, y: 7.15, type: 'corner' } },
                      { t: 50, v: { x: 0.005, y: 6.16, type: 'corner' } },
                      { t: 100, v: { x: 0.005, y: 7.15, type: 'corner' } },
                      { t: 3500, v: { x: 0.005, y: 7.15, type: 'corner' } },
                      { t: 3550, v: { x: 0.005, y: 6.16, type: 'corner' } },
                      { t: 3600, v: { x: 0.005, y: 7.15, type: 'corner' } },
                      { t: 7800, v: { x: 0.005, y: 7.15, type: 'corner' } },
                      { t: 7850, v: { x: 0.005, y: 6.16, type: 'corner' } },
                      { t: 7900, v: { x: 0.005, y: 7.15, type: 'corner' } },
                      { t: 8000, v: { x: 0.005, y: 7.15, type: 'corner' } },
                      { t: 8050, v: { x: 0.005, y: 6.16, type: 'corner' } },
                      { t: 8100, v: { x: 0.005, y: 7.15, type: 'corner' } },
                      { t: 11000, v: { x: 0.005, y: 7.15, type: 'corner' } },
                      { t: 11050, v: { x: 0.005, y: 6.16, type: 'corner' } },
                      { t: 11100, v: { x: 0.005, y: 7.15, type: 'corner' } },
                      { t: 14900, v: { x: 0.005, y: 7.15, type: 'corner' } },
                      { t: 14950, v: { x: 0.005, y: 6.16, type: 'corner' } },
                      { t: 15000, v: { x: 0.005, y: 7.15, type: 'corner' } },
                    ],
                  },
                },
              },
              ef2Bh6mAPoH38: {
                '#radius': [
                  { t: 0, v: { x: 6.88, y: 7.43 } },
                  { t: 50, v: { x: 6.88, y: 0.5 } },
                  { t: 100, v: { x: 6.88, y: 7.43 } },
                  { t: 3500, v: { x: 6.88, y: 7.43 } },
                  { t: 3550, v: { x: 6.88, y: 0.5 } },
                  { t: 3600, v: { x: 6.88, y: 7.43 } },
                  { t: 7800, v: { x: 6.88, y: 7.43 } },
                  { t: 7850, v: { x: 6.88, y: 0.5 } },
                  { t: 7900, v: { x: 6.88, y: 7.43 } },
                  { t: 8000, v: { x: 6.88, y: 7.43 } },
                  { t: 8050, v: { x: 6.88, y: 0.5 } },
                  { t: 8100, v: { x: 6.88, y: 7.43 } },
                  { t: 11000, v: { x: 6.88, y: 7.43 } },
                  { t: 11050, v: { x: 6.88, y: 0.5 } },
                  { t: 11100, v: { x: 6.88, y: 7.43 } },
                  { t: 14900, v: { x: 6.88, y: 7.43 } },
                  { t: 14950, v: { x: 6.88, y: 0.5 } },
                  { t: 15000, v: { x: 6.88, y: 7.43 } },
                ],
              },
            },
            s: 'MDDA1ZTgyMjk2YXjdjNzk2ODdiXNzA3Njc1MjkQ0MTM4M2UzNzVM3MzczMzI5NVmI3MDc5SzZjNNmE3YjcwNzYK3NVAyOTQxMzDgzMzI5NzA3YKjZjRzc5Njg3DYjcwNzY3NTdPhMjk0MTM3MzWMyOTZkNzA3MJzczQzI5TjQxTMzhNMzMyOTYP4NzM3YjZjNzHk3NTY4N2I2YTzI5NDE2ZEE2BODczN2FZNmMSzMzI5N2E3NzRZjTzZjNmIyOCTQxMzgzMzI5GUDZkNzc3YUUGyOTQxMzhJMzKczNzg0Qw|',
          },
        ],
        options: 'MDBAxMDgyMjk3YWU03YjY4Nzk3SYjI5NDEyOTcWzTzc2Njg2YjKI5ODQ/',
      },
      '__SVGATOR_PLAYER__',
      window,
      document,
    );
  }, []);
  return <Svg />;
}
