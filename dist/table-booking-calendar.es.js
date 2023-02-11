import * as It from "react";
import $e, { useContext as xt, useMemo as Se, useRef as re, useCallback as xe, useEffect as se, useState as ye, useLayoutEffect as Bs, createContext as rr, cloneElement as Fs, useDebugValue as il, forwardRef as al, memo as ul, useReducer as za, Fragment as tn } from "react";
import cr, { unstable_batchedUpdates as _r, createPortal as cl } from "react-dom";
function sl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lr = {}, fl = {
  get exports() {
    return Lr;
  },
  set exports(e) {
    Lr = e;
  }
}, Or = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bu;
function ll() {
  if (bu)
    return Or;
  bu = 1;
  var e = $e, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(u, c, s) {
    var f, l = {}, v = null, d = null;
    s !== void 0 && (v = "" + s), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (d = c.ref);
    for (f in c)
      n.call(c, f) && !i.hasOwnProperty(f) && (l[f] = c[f]);
    if (u && u.defaultProps)
      for (f in c = u.defaultProps, c)
        l[f] === void 0 && (l[f] = c[f]);
    return { $$typeof: t, type: u, key: v, ref: d, props: l, _owner: o.current };
  }
  return Or.Fragment = r, Or.jsx = a, Or.jsxs = a, Or;
}
var Er = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wu;
function dl() {
  return wu || (wu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = $e, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), u = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), g = Symbol.iterator, y = "@@iterator";
    function m(p) {
      if (p === null || typeof p != "object")
        return null;
      var C = g && p[g] || p[y];
      return typeof C == "function" ? C : null;
    }
    var h = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(p) {
      {
        for (var C = arguments.length, B = new Array(C > 1 ? C - 1 : 0), ue = 1; ue < C; ue++)
          B[ue - 1] = arguments[ue];
        w("error", p, B);
      }
    }
    function w(p, C, B) {
      {
        var ue = h.ReactDebugCurrentFrame, ge = ue.getStackAddendum();
        ge !== "" && (C += "%s", B = B.concat([ge]));
        var Te = B.map(function(me) {
          return String(me);
        });
        Te.unshift("Warning: " + C), Function.prototype.apply.call(console[p], console, Te);
      }
    }
    var _ = !1, b = !1, E = !1, S = !1, P = !1, D;
    D = Symbol.for("react.module.reference");
    function A(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === n || p === i || P || p === o || p === s || p === f || S || p === d || _ || b || E || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === l || p.$$typeof === a || p.$$typeof === u || p.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === D || p.getModuleId !== void 0));
    }
    function $(p, C, B) {
      var ue = p.displayName;
      if (ue)
        return ue;
      var ge = C.displayName || C.name || "";
      return ge !== "" ? B + "(" + ge + ")" : B;
    }
    function F(p) {
      return p.displayName || "Context";
    }
    function k(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case s:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case u:
            var C = p;
            return F(C) + ".Consumer";
          case a:
            var B = p;
            return F(B._context) + ".Provider";
          case c:
            return $(p, p.render, "ForwardRef");
          case l:
            var ue = p.displayName || null;
            return ue !== null ? ue : k(p.type) || "Memo";
          case v: {
            var ge = p, Te = ge._payload, me = ge._init;
            try {
              return k(me(Te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, U = 0, L, G, pe, he, T, M, V;
    function Q() {
    }
    Q.__reactDisabledLog = !0;
    function X() {
      {
        if (U === 0) {
          L = console.log, G = console.info, pe = console.warn, he = console.error, T = console.group, M = console.groupCollapsed, V = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: Q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        U++;
      }
    }
    function ee() {
      {
        if (U--, U === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, p, {
              value: L
            }),
            info: j({}, p, {
              value: G
            }),
            warn: j({}, p, {
              value: pe
            }),
            error: j({}, p, {
              value: he
            }),
            group: j({}, p, {
              value: T
            }),
            groupCollapsed: j({}, p, {
              value: M
            }),
            groupEnd: j({}, p, {
              value: V
            })
          });
        }
        U < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = h.ReactCurrentDispatcher, J;
    function W(p, C, B) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (ge) {
            var ue = ge.stack.trim().match(/\n( *(at )?)/);
            J = ue && ue[1] || "";
          }
        return `
` + J + p;
      }
    }
    var N = !1, x;
    {
      var H = typeof WeakMap == "function" ? WeakMap : Map;
      x = new H();
    }
    function R(p, C) {
      if (!p || N)
        return "";
      {
        var B = x.get(p);
        if (B !== void 0)
          return B;
      }
      var ue;
      N = !0;
      var ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Te;
      Te = Y.current, Y.current = null, X();
      try {
        if (C) {
          var me = function() {
            throw Error();
          };
          if (Object.defineProperty(me.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(me, []);
            } catch (Et) {
              ue = Et;
            }
            Reflect.construct(p, [], me);
          } else {
            try {
              me.call();
            } catch (Et) {
              ue = Et;
            }
            p.call(me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Et) {
            ue = Et;
          }
          p();
        }
      } catch (Et) {
        if (Et && ue && typeof Et.stack == "string") {
          for (var ve = Et.stack.split(`
`), Xe = ue.stack.split(`
`), Ne = ve.length - 1, Be = Xe.length - 1; Ne >= 1 && Be >= 0 && ve[Ne] !== Xe[Be]; )
            Be--;
          for (; Ne >= 1 && Be >= 0; Ne--, Be--)
            if (ve[Ne] !== Xe[Be]) {
              if (Ne !== 1 || Be !== 1)
                do
                  if (Ne--, Be--, Be < 0 || ve[Ne] !== Xe[Be]) {
                    var nt = `
` + ve[Ne].replace(" at new ", " at ");
                    return p.displayName && nt.includes("<anonymous>") && (nt = nt.replace("<anonymous>", p.displayName)), typeof p == "function" && x.set(p, nt), nt;
                  }
                while (Ne >= 1 && Be >= 0);
              break;
            }
        }
      } finally {
        N = !1, Y.current = Te, ee(), Error.prepareStackTrace = ge;
      }
      var ir = p ? p.displayName || p.name : "", gu = ir ? W(ir) : "";
      return typeof p == "function" && x.set(p, gu), gu;
    }
    function ne(p, C, B) {
      return R(p, !1);
    }
    function te(p) {
      var C = p.prototype;
      return !!(C && C.isReactComponent);
    }
    function oe(p, C, B) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return R(p, te(p));
      if (typeof p == "string")
        return W(p);
      switch (p) {
        case s:
          return W("Suspense");
        case f:
          return W("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case c:
            return ne(p.render);
          case l:
            return oe(p.type, C, B);
          case v: {
            var ue = p, ge = ue._payload, Te = ue._init;
            try {
              return oe(Te(ge), C, B);
            } catch {
            }
          }
        }
      return "";
    }
    var ie = Object.prototype.hasOwnProperty, ce = {}, fe = h.ReactDebugCurrentFrame;
    function K(p) {
      if (p) {
        var C = p._owner, B = oe(p.type, p._source, C ? C.type : null);
        fe.setExtraStackFrame(B);
      } else
        fe.setExtraStackFrame(null);
    }
    function q(p, C, B, ue, ge) {
      {
        var Te = Function.call.bind(ie);
        for (var me in p)
          if (Te(p, me)) {
            var ve = void 0;
            try {
              if (typeof p[me] != "function") {
                var Xe = Error((ue || "React class") + ": " + B + " type `" + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Xe.name = "Invariant Violation", Xe;
              }
              ve = p[me](C, me, ue, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ne) {
              ve = Ne;
            }
            ve && !(ve instanceof Error) && (K(ge), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ue || "React class", B, me, typeof ve), K(null)), ve instanceof Error && !(ve.message in ce) && (ce[ve.message] = !0, K(ge), O("Failed %s type: %s", B, ve.message), K(null));
          }
      }
    }
    var Z = Array.isArray;
    function z(p) {
      return Z(p);
    }
    function I(p) {
      {
        var C = typeof Symbol == "function" && Symbol.toStringTag, B = C && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return B;
      }
    }
    function le(p) {
      try {
        return we(p), !1;
      } catch {
        return !0;
      }
    }
    function we(p) {
      return "" + p;
    }
    function ke(p) {
      if (le(p))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", I(p)), we(p);
    }
    var Ue = h.ReactCurrentOwner, Ie = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, st, Tt, Re;
    Re = {};
    function tt(p) {
      if (ie.call(p, "ref")) {
        var C = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function ft(p) {
      if (ie.call(p, "key")) {
        var C = Object.getOwnPropertyDescriptor(p, "key").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function _t(p, C) {
      if (typeof p.ref == "string" && Ue.current && C && Ue.current.stateNode !== C) {
        var B = k(Ue.current.type);
        Re[B] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(Ue.current.type), p.ref), Re[B] = !0);
      }
    }
    function nr(p, C) {
      {
        var B = function() {
          st || (st = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        B.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: B,
          configurable: !0
        });
      }
    }
    function Wt(p, C) {
      {
        var B = function() {
          Tt || (Tt = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        B.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: B,
          configurable: !0
        });
      }
    }
    var Jr = function(p, C, B, ue, ge, Te, me) {
      var ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: p,
        key: C,
        ref: B,
        props: me,
        // Record the component responsible for creating this element.
        _owner: Te
      };
      return ve._store = {}, Object.defineProperty(ve._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ve, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.defineProperty(ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ge
      }), Object.freeze && (Object.freeze(ve.props), Object.freeze(ve)), ve;
    };
    function Xo(p, C, B, ue, ge) {
      {
        var Te, me = {}, ve = null, Xe = null;
        B !== void 0 && (ke(B), ve = "" + B), ft(C) && (ke(C.key), ve = "" + C.key), tt(C) && (Xe = C.ref, _t(C, ge));
        for (Te in C)
          ie.call(C, Te) && !Ie.hasOwnProperty(Te) && (me[Te] = C[Te]);
        if (p && p.defaultProps) {
          var Ne = p.defaultProps;
          for (Te in Ne)
            me[Te] === void 0 && (me[Te] = Ne[Te]);
        }
        if (ve || Xe) {
          var Be = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          ve && nr(me, Be), Xe && Wt(me, Be);
        }
        return Jr(p, ve, Xe, ge, ue, Ue.current, me);
      }
    }
    var wr = h.ReactCurrentOwner, Zr = h.ReactDebugCurrentFrame;
    function Ce(p) {
      if (p) {
        var C = p._owner, B = oe(p.type, p._source, C ? C.type : null);
        Zr.setExtraStackFrame(B);
      } else
        Zr.setExtraStackFrame(null);
    }
    var He;
    He = !1;
    function ze(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function lt() {
      {
        if (wr.current) {
          var p = k(wr.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function Ge(p) {
      {
        if (p !== void 0) {
          var C = p.fileName.replace(/^.*[\\\/]/, ""), B = p.lineNumber;
          return `

Check your code at ` + C + ":" + B + ".";
        }
        return "";
      }
    }
    var Qe = {};
    function rt(p) {
      {
        var C = lt();
        if (!C) {
          var B = typeof p == "string" ? p : p.displayName || p.name;
          B && (C = `

Check the top-level render call using <` + B + ">.");
        }
        return C;
      }
    }
    function Ot(p, C) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var B = rt(C);
        if (Qe[B])
          return;
        Qe[B] = !0;
        var ue = "";
        p && p._owner && p._owner !== wr.current && (ue = " It was passed a child from " + k(p._owner.type) + "."), Ce(p), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, ue), Ce(null);
      }
    }
    function Ke(p, C) {
      {
        if (typeof p != "object")
          return;
        if (z(p))
          for (var B = 0; B < p.length; B++) {
            var ue = p[B];
            ze(ue) && Ot(ue, C);
          }
        else if (ze(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var ge = m(p);
          if (typeof ge == "function" && ge !== p.entries)
            for (var Te = ge.call(p), me; !(me = Te.next()).done; )
              ze(me.value) && Ot(me.value, C);
        }
      }
    }
    function Ut(p) {
      {
        var C = p.type;
        if (C == null || typeof C == "string")
          return;
        var B;
        if (typeof C == "function")
          B = C.propTypes;
        else if (typeof C == "object" && (C.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        C.$$typeof === l))
          B = C.propTypes;
        else
          return;
        if (B) {
          var ue = k(C);
          q(B, p.props, "prop", ue, p);
        } else if (C.PropTypes !== void 0 && !He) {
          He = !0;
          var ge = k(C);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ge || "Unknown");
        }
        typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(p) {
      {
        for (var C = Object.keys(p.props), B = 0; B < C.length; B++) {
          var ue = C[B];
          if (ue !== "children" && ue !== "key") {
            Ce(p), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ue), Ce(null);
            break;
          }
        }
        p.ref !== null && (Ce(p), O("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    function Ft(p, C, B, ue, ge, Te) {
      {
        var me = A(p);
        if (!me) {
          var ve = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Xe = Ge(ge);
          Xe ? ve += Xe : ve += lt();
          var Ne;
          p === null ? Ne = "null" : z(p) ? Ne = "array" : p !== void 0 && p.$$typeof === t ? (Ne = "<" + (k(p.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : Ne = typeof p, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ne, ve);
        }
        var Be = Xo(p, C, B, ge, Te);
        if (Be == null)
          return Be;
        if (me) {
          var nt = C.children;
          if (nt !== void 0)
            if (ue)
              if (z(nt)) {
                for (var ir = 0; ir < nt.length; ir++)
                  Ke(nt[ir], p);
                Object.freeze && Object.freeze(nt);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ke(nt, p);
        }
        return p === n ? Bt(Be) : Ut(Be), Be;
      }
    }
    function or(p, C, B) {
      return Ft(p, C, B, !0);
    }
    function en(p, C, B) {
      return Ft(p, C, B, !1);
    }
    var Yt = en, qt = or;
    Er.Fragment = n, Er.jsx = Yt, Er.jsxs = qt;
  }()), Er;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ll() : e.exports = dl();
})(fl);
const Lo = Lr.Fragment, ae = Lr.jsx, Ye = Lr.jsxs;
var mi = {}, pl = {
  get exports() {
    return mi;
  },
  set exports(e) {
    mi = e;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o];
        if (i) {
          var a = typeof i;
          if (a === "string" || a === "number")
            n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var u = r.apply(null, i);
              u && n.push(u);
            }
          } else if (a === "object") {
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) {
              n.push(i.toString());
              continue;
            }
            for (var c in i)
              t.call(i, c) && i[c] && n.push(c);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(pl);
const jo = mi;
function vl(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function gi(e, t) {
  return gi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, gi(e, t);
}
function yl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, gi(e, t);
}
const hl = ["xxl", "xl", "lg", "md", "sm", "xs"], ml = "xs", Ys = /* @__PURE__ */ It.createContext({
  prefixes: {},
  breakpoints: hl,
  minBreakpoint: ml
});
function Va(e, t) {
  const {
    prefixes: r
  } = xt(Ys);
  return e || r[t] || t;
}
function gl() {
  const {
    dir: e
  } = xt(Ys);
  return e === "rtl";
}
function Wo(e) {
  return e && e.ownerDocument || document;
}
function bl(e) {
  var t = Wo(e);
  return t && t.defaultView || window;
}
function wl(e, t) {
  return bl(e).getComputedStyle(e, t);
}
var _l = /([A-Z])/g;
function Ol(e) {
  return e.replace(_l, "-$1").toLowerCase();
}
var El = /^ms-/;
function rn(e) {
  return Ol(e).replace(El, "-ms-");
}
var xl = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function Sl(e) {
  return !!(e && xl.test(e));
}
function qs(e, t) {
  var r = "", n = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(rn(t)) || wl(e).getPropertyValue(rn(t));
  Object.keys(t).forEach(function(o) {
    var i = t[o];
    !i && i !== 0 ? e.style.removeProperty(rn(o)) : Sl(o) ? n += o + "(" + i + ") " : r += rn(o) + ": " + i + ";";
  }), n && (r += "transform: " + n + ";"), e.style.cssText += ";" + r;
}
var de = {}, _u = {
  get exports() {
    return de;
  },
  set exports(e) {
    de = e;
  }
}, Vn = {}, Rl = {
  get exports() {
    return Vn;
  },
  set exports(e) {
    Vn = e;
  }
}, _e = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ou;
function Tl() {
  if (Ou)
    return _e;
  Ou = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, s = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, h = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function w(b) {
    if (typeof b == "object" && b !== null) {
      var E = b.$$typeof;
      switch (E) {
        case t:
          switch (b = b.type, b) {
            case c:
            case s:
            case n:
            case i:
            case o:
            case l:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case u:
                case f:
                case g:
                case d:
                case a:
                  return b;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function _(b) {
    return w(b) === s;
  }
  return _e.AsyncMode = c, _e.ConcurrentMode = s, _e.ContextConsumer = u, _e.ContextProvider = a, _e.Element = t, _e.ForwardRef = f, _e.Fragment = n, _e.Lazy = g, _e.Memo = d, _e.Portal = r, _e.Profiler = i, _e.StrictMode = o, _e.Suspense = l, _e.isAsyncMode = function(b) {
    return _(b) || w(b) === c;
  }, _e.isConcurrentMode = _, _e.isContextConsumer = function(b) {
    return w(b) === u;
  }, _e.isContextProvider = function(b) {
    return w(b) === a;
  }, _e.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, _e.isForwardRef = function(b) {
    return w(b) === f;
  }, _e.isFragment = function(b) {
    return w(b) === n;
  }, _e.isLazy = function(b) {
    return w(b) === g;
  }, _e.isMemo = function(b) {
    return w(b) === d;
  }, _e.isPortal = function(b) {
    return w(b) === r;
  }, _e.isProfiler = function(b) {
    return w(b) === i;
  }, _e.isStrictMode = function(b) {
    return w(b) === o;
  }, _e.isSuspense = function(b) {
    return w(b) === l;
  }, _e.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === s || b === i || b === o || b === l || b === v || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === d || b.$$typeof === a || b.$$typeof === u || b.$$typeof === f || b.$$typeof === m || b.$$typeof === h || b.$$typeof === O || b.$$typeof === y);
  }, _e.typeOf = w, _e;
}
var Oe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eu;
function Pl() {
  return Eu || (Eu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, s = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, d = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, h = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function w(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === s || R === i || R === o || R === l || R === v || typeof R == "object" && R !== null && (R.$$typeof === g || R.$$typeof === d || R.$$typeof === a || R.$$typeof === u || R.$$typeof === f || R.$$typeof === m || R.$$typeof === h || R.$$typeof === O || R.$$typeof === y);
    }
    function _(R) {
      if (typeof R == "object" && R !== null) {
        var ne = R.$$typeof;
        switch (ne) {
          case t:
            var te = R.type;
            switch (te) {
              case c:
              case s:
              case n:
              case i:
              case o:
              case l:
                return te;
              default:
                var oe = te && te.$$typeof;
                switch (oe) {
                  case u:
                  case f:
                  case g:
                  case d:
                  case a:
                    return oe;
                  default:
                    return ne;
                }
            }
          case r:
            return ne;
        }
      }
    }
    var b = c, E = s, S = u, P = a, D = t, A = f, $ = n, F = g, k = d, j = r, U = i, L = o, G = l, pe = !1;
    function he(R) {
      return pe || (pe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(R) || _(R) === c;
    }
    function T(R) {
      return _(R) === s;
    }
    function M(R) {
      return _(R) === u;
    }
    function V(R) {
      return _(R) === a;
    }
    function Q(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function X(R) {
      return _(R) === f;
    }
    function ee(R) {
      return _(R) === n;
    }
    function Y(R) {
      return _(R) === g;
    }
    function J(R) {
      return _(R) === d;
    }
    function W(R) {
      return _(R) === r;
    }
    function N(R) {
      return _(R) === i;
    }
    function x(R) {
      return _(R) === o;
    }
    function H(R) {
      return _(R) === l;
    }
    Oe.AsyncMode = b, Oe.ConcurrentMode = E, Oe.ContextConsumer = S, Oe.ContextProvider = P, Oe.Element = D, Oe.ForwardRef = A, Oe.Fragment = $, Oe.Lazy = F, Oe.Memo = k, Oe.Portal = j, Oe.Profiler = U, Oe.StrictMode = L, Oe.Suspense = G, Oe.isAsyncMode = he, Oe.isConcurrentMode = T, Oe.isContextConsumer = M, Oe.isContextProvider = V, Oe.isElement = Q, Oe.isForwardRef = X, Oe.isFragment = ee, Oe.isLazy = Y, Oe.isMemo = J, Oe.isPortal = W, Oe.isProfiler = N, Oe.isStrictMode = x, Oe.isSuspense = H, Oe.isValidElementType = w, Oe.typeOf = _;
  }()), Oe;
}
var xu;
function Hs() {
  return xu || (xu = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Tl() : e.exports = Pl();
  }(Rl)), Vn;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Go, Su;
function $l() {
  if (Su)
    return Go;
  Su = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, u = 0; u < 10; u++)
        a["_" + String.fromCharCode(u)] = u;
      var c = Object.getOwnPropertyNames(a).map(function(f) {
        return a[f];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var s = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        s[f] = f;
      }), Object.keys(Object.assign({}, s)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Go = o() ? Object.assign : function(i, a) {
    for (var u, c = n(i), s, f = 1; f < arguments.length; f++) {
      u = Object(arguments[f]);
      for (var l in u)
        t.call(u, l) && (c[l] = u[l]);
      if (e) {
        s = e(u);
        for (var v = 0; v < s.length; v++)
          r.call(u, s[v]) && (c[s[v]] = u[s[v]]);
      }
    }
    return c;
  }, Go;
}
var Qo, Ru;
function Xa() {
  if (Ru)
    return Qo;
  Ru = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qo = e, Qo;
}
var Ko, Tu;
function zs() {
  return Tu || (Tu = 1, Ko = Function.call.bind(Object.prototype.hasOwnProperty)), Ko;
}
var Jo, Pu;
function Dl() {
  if (Pu)
    return Jo;
  Pu = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Xa(), r = {}, n = zs();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, u, c, s) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var l;
          try {
            if (typeof i[f] != "function") {
              var v = Error(
                (c || "React class") + ": " + u + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            l = i[f](a, f, c, u, null, t);
          } catch (g) {
            l = g;
          }
          if (l && !(l instanceof Error) && e(
            (c || "React class") + ": type specification of " + u + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), l instanceof Error && !(l.message in r)) {
            r[l.message] = !0;
            var d = s ? s() : "";
            e(
              "Failed " + u + " type: " + l.message + (d ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Jo = o, Jo;
}
var Zo, $u;
function Cl() {
  if ($u)
    return Zo;
  $u = 1;
  var e = Hs(), t = $l(), r = Xa(), n = zs(), o = Dl(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(u) {
    var c = "Warning: " + u;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Zo = function(u, c) {
    var s = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function l(T) {
      var M = T && (s && T[s] || T[f]);
      if (typeof M == "function")
        return M;
    }
    var v = "<<anonymous>>", d = {
      array: h("array"),
      bigint: h("bigint"),
      bool: h("boolean"),
      func: h("function"),
      number: h("number"),
      object: h("object"),
      string: h("string"),
      symbol: h("symbol"),
      any: O(),
      arrayOf: w,
      element: _(),
      elementType: b(),
      instanceOf: E,
      node: A(),
      objectOf: P,
      oneOf: S,
      oneOfType: D,
      shape: F,
      exact: k
    };
    function g(T, M) {
      return T === M ? T !== 0 || 1 / T === 1 / M : T !== T && M !== M;
    }
    function y(T, M) {
      this.message = T, this.data = M && typeof M == "object" ? M : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function m(T) {
      if (process.env.NODE_ENV !== "production")
        var M = {}, V = 0;
      function Q(ee, Y, J, W, N, x, H) {
        if (W = W || v, x = x || J, H !== r) {
          if (c) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ne = W + ":" + J;
            !M[ne] && // Avoid spamming the console because they are often not actionable except for lib authors
            V < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + x + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), M[ne] = !0, V++);
          }
        }
        return Y[J] == null ? ee ? Y[J] === null ? new y("The " + N + " `" + x + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new y("The " + N + " `" + x + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : T(Y, J, W, N, x);
      }
      var X = Q.bind(null, !1);
      return X.isRequired = Q.bind(null, !0), X;
    }
    function h(T) {
      function M(V, Q, X, ee, Y, J) {
        var W = V[Q], N = L(W);
        if (N !== T) {
          var x = G(W);
          return new y(
            "Invalid " + ee + " `" + Y + "` of type " + ("`" + x + "` supplied to `" + X + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return m(M);
    }
    function O() {
      return m(a);
    }
    function w(T) {
      function M(V, Q, X, ee, Y) {
        if (typeof T != "function")
          return new y("Property `" + Y + "` of component `" + X + "` has invalid PropType notation inside arrayOf.");
        var J = V[Q];
        if (!Array.isArray(J)) {
          var W = L(J);
          return new y("Invalid " + ee + " `" + Y + "` of type " + ("`" + W + "` supplied to `" + X + "`, expected an array."));
        }
        for (var N = 0; N < J.length; N++) {
          var x = T(J, N, X, ee, Y + "[" + N + "]", r);
          if (x instanceof Error)
            return x;
        }
        return null;
      }
      return m(M);
    }
    function _() {
      function T(M, V, Q, X, ee) {
        var Y = M[V];
        if (!u(Y)) {
          var J = L(Y);
          return new y("Invalid " + X + " `" + ee + "` of type " + ("`" + J + "` supplied to `" + Q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(T);
    }
    function b() {
      function T(M, V, Q, X, ee) {
        var Y = M[V];
        if (!e.isValidElementType(Y)) {
          var J = L(Y);
          return new y("Invalid " + X + " `" + ee + "` of type " + ("`" + J + "` supplied to `" + Q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(T);
    }
    function E(T) {
      function M(V, Q, X, ee, Y) {
        if (!(V[Q] instanceof T)) {
          var J = T.name || v, W = he(V[Q]);
          return new y("Invalid " + ee + " `" + Y + "` of type " + ("`" + W + "` supplied to `" + X + "`, expected ") + ("instance of `" + J + "`."));
        }
        return null;
      }
      return m(M);
    }
    function S(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function M(V, Q, X, ee, Y) {
        for (var J = V[Q], W = 0; W < T.length; W++)
          if (g(J, T[W]))
            return null;
        var N = JSON.stringify(T, function(H, R) {
          var ne = G(R);
          return ne === "symbol" ? String(R) : R;
        });
        return new y("Invalid " + ee + " `" + Y + "` of value `" + String(J) + "` " + ("supplied to `" + X + "`, expected one of " + N + "."));
      }
      return m(M);
    }
    function P(T) {
      function M(V, Q, X, ee, Y) {
        if (typeof T != "function")
          return new y("Property `" + Y + "` of component `" + X + "` has invalid PropType notation inside objectOf.");
        var J = V[Q], W = L(J);
        if (W !== "object")
          return new y("Invalid " + ee + " `" + Y + "` of type " + ("`" + W + "` supplied to `" + X + "`, expected an object."));
        for (var N in J)
          if (n(J, N)) {
            var x = T(J, N, X, ee, Y + "." + N, r);
            if (x instanceof Error)
              return x;
          }
        return null;
      }
      return m(M);
    }
    function D(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var M = 0; M < T.length; M++) {
        var V = T[M];
        if (typeof V != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + pe(V) + " at index " + M + "."
          ), a;
      }
      function Q(X, ee, Y, J, W) {
        for (var N = [], x = 0; x < T.length; x++) {
          var H = T[x], R = H(X, ee, Y, J, W, r);
          if (R == null)
            return null;
          R.data && n(R.data, "expectedType") && N.push(R.data.expectedType);
        }
        var ne = N.length > 0 ? ", expected one of type [" + N.join(", ") + "]" : "";
        return new y("Invalid " + J + " `" + W + "` supplied to " + ("`" + Y + "`" + ne + "."));
      }
      return m(Q);
    }
    function A() {
      function T(M, V, Q, X, ee) {
        return j(M[V]) ? null : new y("Invalid " + X + " `" + ee + "` supplied to " + ("`" + Q + "`, expected a ReactNode."));
      }
      return m(T);
    }
    function $(T, M, V, Q, X) {
      return new y(
        (T || "React class") + ": " + M + " type `" + V + "." + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + X + "`."
      );
    }
    function F(T) {
      function M(V, Q, X, ee, Y) {
        var J = V[Q], W = L(J);
        if (W !== "object")
          return new y("Invalid " + ee + " `" + Y + "` of type `" + W + "` " + ("supplied to `" + X + "`, expected `object`."));
        for (var N in T) {
          var x = T[N];
          if (typeof x != "function")
            return $(X, ee, Y, N, G(x));
          var H = x(J, N, X, ee, Y + "." + N, r);
          if (H)
            return H;
        }
        return null;
      }
      return m(M);
    }
    function k(T) {
      function M(V, Q, X, ee, Y) {
        var J = V[Q], W = L(J);
        if (W !== "object")
          return new y("Invalid " + ee + " `" + Y + "` of type `" + W + "` " + ("supplied to `" + X + "`, expected `object`."));
        var N = t({}, V[Q], T);
        for (var x in N) {
          var H = T[x];
          if (n(T, x) && typeof H != "function")
            return $(X, ee, Y, x, G(H));
          if (!H)
            return new y(
              "Invalid " + ee + " `" + Y + "` key `" + x + "` supplied to `" + X + "`.\nBad object: " + JSON.stringify(V[Q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var R = H(J, x, X, ee, Y + "." + x, r);
          if (R)
            return R;
        }
        return null;
      }
      return m(M);
    }
    function j(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(j);
          if (T === null || u(T))
            return !0;
          var M = l(T);
          if (M) {
            var V = M.call(T), Q;
            if (M !== T.entries) {
              for (; !(Q = V.next()).done; )
                if (!j(Q.value))
                  return !1;
            } else
              for (; !(Q = V.next()).done; ) {
                var X = Q.value;
                if (X && !j(X[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function U(T, M) {
      return T === "symbol" ? !0 : M ? M["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && M instanceof Symbol : !1;
    }
    function L(T) {
      var M = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : U(M, T) ? "symbol" : M;
    }
    function G(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var M = L(T);
      if (M === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return M;
    }
    function pe(T) {
      var M = G(T);
      switch (M) {
        case "array":
        case "object":
          return "an " + M;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + M;
        default:
          return M;
      }
    }
    function he(T) {
      return !T.constructor || !T.constructor.name ? v : T.constructor.name;
    }
    return d.checkPropTypes = o, d.resetWarningCache = o.resetWarningCache, d.PropTypes = d, d;
  }, Zo;
}
var ei, Du;
function Al() {
  if (Du)
    return ei;
  Du = 1;
  var e = Xa();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ei = function() {
    function n(a, u, c, s, f, l) {
      if (l !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, ei;
}
if (process.env.NODE_ENV !== "production") {
  var Ml = Hs(), kl = !0;
  _u.exports = Cl()(Ml.isElement, kl);
} else
  _u.exports = Al()();
const Cu = {
  disabled: !1
};
var Il = process.env.NODE_ENV !== "production" ? de.oneOfType([de.number, de.shape({
  enter: de.number,
  exit: de.number,
  appear: de.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && de.oneOfType([de.string, de.shape({
  enter: de.string,
  exit: de.string,
  active: de.string
}), de.shape({
  enter: de.string,
  enterDone: de.string,
  enterActive: de.string,
  exit: de.string,
  exitDone: de.string,
  exitActive: de.string
})]);
const Vs = $e.createContext(null);
var Nl = function(t) {
  return t.scrollTop;
}, Tr = "unmounted", Vt = "exited", Ct = "entering", Gt = "entered", bi = "exiting", Rt = /* @__PURE__ */ function(e) {
  yl(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = o, u = a && !a.isMounting ? n.enter : n.appear, c;
    return i.appearStatus = null, n.in ? u ? (c = Vt, i.appearStatus = Ct) : c = Gt : n.unmountOnExit || n.mountOnEnter ? c = Tr : c = Vt, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var a = o.in;
    return a && i.status === Tr ? {
      status: Vt
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Ct && a !== Gt && (i = Ct) : (a === Ct || a === Gt) && (i = bi);
    }
    this.updateStatus(!1, i);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, i, a, u;
    return i = a = u = o, o != null && typeof o != "number" && (i = o.exit, a = o.enter, u = o.appear !== void 0 ? o.appear : a), {
      exit: i,
      enter: a,
      appear: u
    };
  }, r.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === Ct) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : cr.findDOMNode(this);
          a && Nl(a);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Vt && this.setState({
        status: Tr
      });
  }, r.performEnter = function(o) {
    var i = this, a = this.props.enter, u = this.context ? this.context.isMounting : o, c = this.props.nodeRef ? [u] : [cr.findDOMNode(this), u], s = c[0], f = c[1], l = this.getTimeouts(), v = u ? l.appear : l.enter;
    if (!o && !a || Cu.disabled) {
      this.safeSetState({
        status: Gt
      }, function() {
        i.props.onEntered(s);
      });
      return;
    }
    this.props.onEnter(s, f), this.safeSetState({
      status: Ct
    }, function() {
      i.props.onEntering(s, f), i.onTransitionEnd(v, function() {
        i.safeSetState({
          status: Gt
        }, function() {
          i.props.onEntered(s, f);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, a = this.getTimeouts(), u = this.props.nodeRef ? void 0 : cr.findDOMNode(this);
    if (!i || Cu.disabled) {
      this.safeSetState({
        status: Vt
      }, function() {
        o.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: bi
    }, function() {
      o.props.onExiting(u), o.onTransitionEnd(a.exit, function() {
        o.safeSetState({
          status: Vt
        }, function() {
          o.props.onExited(u);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, r.setNextCallback = function(o) {
    var i = this, a = !0;
    return this.nextCallback = function(u) {
      a && (a = !1, i.nextCallback = null, o(u));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var a = this.props.nodeRef ? this.props.nodeRef.current : cr.findDOMNode(this), u = o == null && !this.props.addEndListener;
    if (!a || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], s = c[0], f = c[1];
      this.props.addEndListener(s, f);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === Tr)
      return null;
    var i = this.props, a = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var u = vl(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ $e.createElement(Vs.Provider, {
        value: null
      }, typeof a == "function" ? a(o, u) : $e.cloneElement($e.Children.only(a), u))
    );
  }, t;
}($e.Component);
Rt.contextType = Vs;
Rt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: de.shape({
    current: typeof Element > "u" ? de.any : function(e, t, r, n, o, i) {
      var a = e[t];
      return de.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, r, n, o, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: de.oneOfType([de.func.isRequired, de.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: de.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: de.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: de.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: de.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: de.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: de.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var r = Il;
    t.addEndListener || (r = r.isRequired);
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      o[i - 1] = arguments[i];
    return r.apply(void 0, [t].concat(o));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: de.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: de.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: de.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: de.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: de.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: de.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: de.func
} : {};
function ar() {
}
Rt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ar,
  onEntering: ar,
  onEntered: ar,
  onExit: ar,
  onExiting: ar,
  onExited: ar
};
Rt.UNMOUNTED = Tr;
Rt.EXITED = Vt;
Rt.ENTERING = Ct;
Rt.ENTERED = Gt;
Rt.EXITING = bi;
const Ga = !!(typeof window < "u" && window.document && window.document.createElement);
var wi = !1, _i = !1;
try {
  var ti = {
    get passive() {
      return wi = !0;
    },
    get once() {
      return _i = wi = !0;
    }
  };
  Ga && (window.addEventListener("test", ti, ti), window.removeEventListener("test", ti, !0));
} catch {
}
function Ll(e, t, r, n) {
  if (n && typeof n != "boolean" && !_i) {
    var o = n.once, i = n.capture, a = r;
    !_i && o && (a = r.__once || function u(c) {
      this.removeEventListener(t, u, i), r.call(this, c);
    }, r.__once = a), e.addEventListener(t, a, wi ? n : i);
  }
  e.addEventListener(t, r, n);
}
function jl(e, t, r, n) {
  var o = n && typeof n != "boolean" ? n.capture : n;
  e.removeEventListener(t, r, o), r.__once && e.removeEventListener(t, r.__once, o);
}
function Qt(e, t, r, n) {
  return Ll(e, t, r, n), function() {
    jl(e, t, r, n);
  };
}
function Wl(e, t, r, n) {
  if (r === void 0 && (r = !1), n === void 0 && (n = !0), e) {
    var o = document.createEvent("HTMLEvents");
    o.initEvent(t, r, n), e.dispatchEvent(o);
  }
}
function Ul(e) {
  var t = qs(e, "transitionDuration") || "", r = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * r;
}
function Bl(e, t, r) {
  r === void 0 && (r = 5);
  var n = !1, o = setTimeout(function() {
    n || Wl(e, "transitionend", !0);
  }, t + r), i = Qt(e, "transitionend", function() {
    n = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(o), i();
  };
}
function Fl(e, t, r, n) {
  r == null && (r = Ul(e) || 0);
  var o = Bl(e, r, n), i = Qt(e, "transitionend", t);
  return function() {
    o(), i();
  };
}
function Au(e, t) {
  const r = qs(e, t) || "", n = r.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(r) * n;
}
function Yl(e, t) {
  const r = Au(e, "transitionDuration"), n = Au(e, "transitionDelay"), o = Fl(e, (i) => {
    i.target === e && (o(), t(i));
  }, r + n);
}
function ql(e) {
  e.offsetHeight;
}
var Mu = function(t) {
  return !t || typeof t == "function" ? t : function(r) {
    t.current = r;
  };
};
function Hl(e, t) {
  var r = Mu(e), n = Mu(t);
  return function(o) {
    r && r(o), n && n(o);
  };
}
function qr(e, t) {
  return Se(function() {
    return Hl(e, t);
  }, [e, t]);
}
function Oi(e) {
  return e && "setState" in e ? cr.findDOMNode(e) : e ?? null;
}
const zl = /* @__PURE__ */ $e.forwardRef(({
  onEnter: e,
  onEntering: t,
  onEntered: r,
  onExit: n,
  onExiting: o,
  onExited: i,
  addEndListener: a,
  children: u,
  childRef: c,
  ...s
}, f) => {
  const l = re(null), v = qr(l, c), d = (E) => {
    v(Oi(E));
  }, g = (E) => (S) => {
    E && l.current && E(l.current, S);
  }, y = xe(g(e), [e]), m = xe(g(t), [t]), h = xe(g(r), [r]), O = xe(g(n), [n]), w = xe(g(o), [o]), _ = xe(g(i), [i]), b = xe(g(a), [a]);
  return /* @__PURE__ */ ae(Rt, {
    ref: f,
    ...s,
    onEnter: y,
    onEntered: h,
    onEntering: m,
    onExit: O,
    onExited: _,
    onExiting: w,
    addEndListener: b,
    nodeRef: l,
    children: typeof u == "function" ? (E, S) => u(E, {
      ...S,
      ref: d
    }) : /* @__PURE__ */ $e.cloneElement(u, {
      ref: d
    })
  });
}), Vl = zl;
function Xl(e) {
  var t = re(e);
  return se(function() {
    t.current = e;
  }, [e]), t;
}
function lr(e) {
  var t = Xl(e);
  return xe(function() {
    return t.current && t.current.apply(t, arguments);
  }, [t]);
}
function Ei() {
  return ye(null);
}
function Gl() {
  var e = re(!0), t = re(function() {
    return e.current;
  });
  return se(function() {
    return e.current = !0, function() {
      e.current = !1;
    };
  }, []), t.current;
}
var Ql = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", Kl = typeof document < "u";
const xi = Kl || Ql ? Bs : se, Jl = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1
}, Zl = {
  [Ct]: "show",
  [Gt]: "show"
}, Qa = /* @__PURE__ */ It.forwardRef(({
  className: e,
  children: t,
  transitionClasses: r = {},
  ...n
}, o) => {
  const i = xe((a, u) => {
    ql(a), n.onEnter == null || n.onEnter(a, u);
  }, [n]);
  return /* @__PURE__ */ ae(Vl, {
    ref: o,
    addEndListener: Yl,
    ...n,
    onEnter: i,
    childRef: t.ref,
    children: (a, u) => /* @__PURE__ */ It.cloneElement(t, {
      ...u,
      className: jo("fade", e, t.props.className, Zl[a], r[a])
    })
  });
});
Qa.defaultProps = Jl;
Qa.displayName = "Fade";
const Xs = Qa;
var ed = /-(.)/g;
function td(e) {
  return e.replace(ed, function(t, r) {
    return r.toUpperCase();
  });
}
const rd = (e) => e[0].toUpperCase() + td(e).slice(1);
function Gs(e, {
  displayName: t = rd(e),
  Component: r,
  defaultProps: n
} = {}) {
  const o = /* @__PURE__ */ It.forwardRef(({
    className: i,
    bsPrefix: a,
    as: u = r || "div",
    ...c
  }, s) => {
    const f = Va(a, e);
    return /* @__PURE__ */ ae(u, {
      ref: s,
      className: jo(i, f),
      ...c
    });
  });
  return o.defaultProps = n, o.displayName = t, o;
}
var ku = Object.prototype.hasOwnProperty;
function Iu(e, t, r) {
  for (r of e.keys())
    if (Pr(r, t))
      return r;
}
function Pr(e, t) {
  var r, n, o;
  if (e === t)
    return !0;
  if (e && t && (r = e.constructor) === t.constructor) {
    if (r === Date)
      return e.getTime() === t.getTime();
    if (r === RegExp)
      return e.toString() === t.toString();
    if (r === Array) {
      if ((n = e.length) === t.length)
        for (; n-- && Pr(e[n], t[n]); )
          ;
      return n === -1;
    }
    if (r === Set) {
      if (e.size !== t.size)
        return !1;
      for (n of e)
        if (o = n, o && typeof o == "object" && (o = Iu(t, o), !o) || !t.has(o))
          return !1;
      return !0;
    }
    if (r === Map) {
      if (e.size !== t.size)
        return !1;
      for (n of e)
        if (o = n[0], o && typeof o == "object" && (o = Iu(t, o), !o) || !Pr(n[1], t.get(o)))
          return !1;
      return !0;
    }
    if (r === ArrayBuffer)
      e = new Uint8Array(e), t = new Uint8Array(t);
    else if (r === DataView) {
      if ((n = e.byteLength) === t.byteLength)
        for (; n-- && e.getInt8(n) === t.getInt8(n); )
          ;
      return n === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((n = e.byteLength) === t.byteLength)
        for (; n-- && e[n] === t[n]; )
          ;
      return n === -1;
    }
    if (!r || typeof e == "object") {
      n = 0;
      for (r in e)
        if (ku.call(e, r) && ++n && !ku.call(t, r) || !(r in t) || !Pr(e[r], t[r]))
          return !1;
      return Object.keys(t).length === n;
    }
  }
  return e !== e && t !== t;
}
function nd(e) {
  var t = Gl();
  return [e[0], xe(function(r) {
    if (t())
      return e[1](r);
  }, [t, e[1]])];
}
var Je = "top", at = "bottom", ut = "right", Ze = "left", Uo = "auto", Hr = [Je, at, ut, Ze], dr = "start", jr = "end", od = "clippingParents", Qs = "viewport", xr = "popper", id = "reference", Nu = /* @__PURE__ */ Hr.reduce(function(e, t) {
  return e.concat([t + "-" + dr, t + "-" + jr]);
}, []), Ks = /* @__PURE__ */ [].concat(Hr, [Uo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + dr, t + "-" + jr]);
}, []), ad = "beforeRead", ud = "read", cd = "afterRead", sd = "beforeMain", fd = "main", ld = "afterMain", dd = "beforeWrite", pd = "write", vd = "afterWrite", Si = [ad, ud, cd, sd, fd, ld, dd, pd, vd];
function dt(e) {
  return e.split("-")[0];
}
function ct(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function er(e) {
  var t = ct(e).Element;
  return e instanceof t || e instanceof Element;
}
function pt(e) {
  var t = ct(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ka(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ct(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Kt = Math.max, Xn = Math.min, pr = Math.round;
function Ri() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Js() {
  return !/^((?!chrome|android).)*safari/i.test(Ri());
}
function vr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, i = 1;
  t && pt(e) && (o = e.offsetWidth > 0 && pr(n.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && pr(n.height) / e.offsetHeight || 1);
  var a = er(e) ? ct(e) : window, u = a.visualViewport, c = !Js() && r, s = (n.left + (c && u ? u.offsetLeft : 0)) / o, f = (n.top + (c && u ? u.offsetTop : 0)) / i, l = n.width / o, v = n.height / i;
  return {
    width: l,
    height: v,
    top: f,
    right: s + l,
    bottom: f + v,
    left: s,
    x: s,
    y: f
  };
}
function Ja(e) {
  var t = vr(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Zs(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Ka(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Nt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function vt(e) {
  return ct(e).getComputedStyle(e);
}
function yd(e) {
  return ["table", "td", "th"].indexOf(Nt(e)) >= 0;
}
function jt(e) {
  return ((er(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Bo(e) {
  return Nt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ka(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    jt(e)
  );
}
function Lu(e) {
  return !pt(e) || // https://github.com/popperjs/popper-core/issues/837
  vt(e).position === "fixed" ? null : e.offsetParent;
}
function hd(e) {
  var t = /firefox/i.test(Ri()), r = /Trident/i.test(Ri());
  if (r && pt(e)) {
    var n = vt(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Bo(e);
  for (Ka(o) && (o = o.host); pt(o) && ["html", "body"].indexOf(Nt(o)) < 0; ) {
    var i = vt(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function zr(e) {
  for (var t = ct(e), r = Lu(e); r && yd(r) && vt(r).position === "static"; )
    r = Lu(r);
  return r && (Nt(r) === "html" || Nt(r) === "body" && vt(r).position === "static") ? t : r || hd(e) || t;
}
function Za(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function $r(e, t, r) {
  return Kt(e, Xn(t, r));
}
function md(e, t, r) {
  var n = $r(e, t, r);
  return n > r ? r : n;
}
function ef() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function tf(e) {
  return Object.assign({}, ef(), e);
}
function rf(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var gd = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, tf(typeof t != "number" ? t : rf(t, Hr));
};
function bd(e) {
  var t, r = e.state, n = e.name, o = e.options, i = r.elements.arrow, a = r.modifiersData.popperOffsets, u = dt(r.placement), c = Za(u), s = [Ze, ut].indexOf(u) >= 0, f = s ? "height" : "width";
  if (!(!i || !a)) {
    var l = gd(o.padding, r), v = Ja(i), d = c === "y" ? Je : Ze, g = c === "y" ? at : ut, y = r.rects.reference[f] + r.rects.reference[c] - a[c] - r.rects.popper[f], m = a[c] - r.rects.reference[c], h = zr(i), O = h ? c === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, w = y / 2 - m / 2, _ = l[d], b = O - v[f] - l[g], E = O / 2 - v[f] / 2 + w, S = $r(_, E, b), P = c;
    r.modifiersData[n] = (t = {}, t[P] = S, t.centerOffset = S - E, t);
  }
}
function wd(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  if (o != null && !(typeof o == "string" && (o = t.elements.popper.querySelector(o), !o))) {
    if (process.env.NODE_ENV !== "production" && (pt(o) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "))), !Zs(t.elements.popper, o)) {
      process.env.NODE_ENV !== "production" && console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = o;
  }
}
const _d = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: bd,
  effect: wd,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function yr(e) {
  return e.split("-")[1];
}
var Od = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ed(e) {
  var t = e.x, r = e.y, n = window, o = n.devicePixelRatio || 1;
  return {
    x: pr(t * o) / o || 0,
    y: pr(r * o) / o || 0
  };
}
function ju(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, u = e.position, c = e.gpuAcceleration, s = e.adaptive, f = e.roundOffsets, l = e.isFixed, v = a.x, d = v === void 0 ? 0 : v, g = a.y, y = g === void 0 ? 0 : g, m = typeof f == "function" ? f({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  d = m.x, y = m.y;
  var h = a.hasOwnProperty("x"), O = a.hasOwnProperty("y"), w = Ze, _ = Je, b = window;
  if (s) {
    var E = zr(r), S = "clientHeight", P = "clientWidth";
    if (E === ct(r) && (E = jt(r), vt(E).position !== "static" && u === "absolute" && (S = "scrollHeight", P = "scrollWidth")), E = E, o === Je || (o === Ze || o === ut) && i === jr) {
      _ = at;
      var D = l && E === b && b.visualViewport ? b.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[S]
      );
      y -= D - n.height, y *= c ? 1 : -1;
    }
    if (o === Ze || (o === Je || o === at) && i === jr) {
      w = ut;
      var A = l && E === b && b.visualViewport ? b.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[P]
      );
      d -= A - n.width, d *= c ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: u
  }, s && Od), F = f === !0 ? Ed({
    x: d,
    y
  }) : {
    x: d,
    y
  };
  if (d = F.x, y = F.y, c) {
    var k;
    return Object.assign({}, $, (k = {}, k[_] = O ? "0" : "", k[w] = h ? "0" : "", k.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + y + "px)" : "translate3d(" + d + "px, " + y + "px, 0)", k));
  }
  return Object.assign({}, $, (t = {}, t[_] = O ? y + "px" : "", t[w] = h ? d + "px" : "", t.transform = "", t));
}
function xd(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, a = i === void 0 ? !0 : i, u = r.roundOffsets, c = u === void 0 ? !0 : u;
  if (process.env.NODE_ENV !== "production") {
    var s = vt(t.elements.popper).transitionProperty || "";
    a && ["transform", "top", "right", "bottom", "left"].some(function(l) {
      return s.indexOf(l) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var f = {
    placement: dt(t.placement),
    variation: yr(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ju(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ju(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Sd = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: xd,
  data: {}
};
var nn = {
  passive: !0
};
function Rd(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, i = o === void 0 ? !0 : o, a = n.resize, u = a === void 0 ? !0 : a, c = ct(t.elements.popper), s = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && s.forEach(function(f) {
    f.addEventListener("scroll", r.update, nn);
  }), u && c.addEventListener("resize", r.update, nn), function() {
    i && s.forEach(function(f) {
      f.removeEventListener("scroll", r.update, nn);
    }), u && c.removeEventListener("resize", r.update, nn);
  };
}
const Td = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Rd,
  data: {}
};
var Pd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function an(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Pd[t];
  });
}
var $d = {
  start: "end",
  end: "start"
};
function Wu(e) {
  return e.replace(/start|end/g, function(t) {
    return $d[t];
  });
}
function eu(e) {
  var t = ct(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function tu(e) {
  return vr(jt(e)).left + eu(e).scrollLeft;
}
function Dd(e, t) {
  var r = ct(e), n = jt(e), o = r.visualViewport, i = n.clientWidth, a = n.clientHeight, u = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    var s = Js();
    (s || !s && t === "fixed") && (u = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: u + tu(e),
    y: c
  };
}
function Cd(e) {
  var t, r = jt(e), n = eu(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Kt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), a = Kt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), u = -n.scrollLeft + tu(e), c = -n.scrollTop;
  return vt(o || r).direction === "rtl" && (u += Kt(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: a,
    x: u,
    y: c
  };
}
function ru(e) {
  var t = vt(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function nf(e) {
  return ["html", "body", "#document"].indexOf(Nt(e)) >= 0 ? e.ownerDocument.body : pt(e) && ru(e) ? e : nf(Bo(e));
}
function Dr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = nf(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = ct(n), a = o ? [i].concat(i.visualViewport || [], ru(n) ? n : []) : n, u = t.concat(a);
  return o ? u : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    u.concat(Dr(Bo(a)))
  );
}
function Ti(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Ad(e, t) {
  var r = vr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Uu(e, t, r) {
  return t === Qs ? Ti(Dd(e, r)) : er(t) ? Ad(t, r) : Ti(Cd(jt(e)));
}
function Md(e) {
  var t = Dr(Bo(e)), r = ["absolute", "fixed"].indexOf(vt(e).position) >= 0, n = r && pt(e) ? zr(e) : e;
  return er(n) ? t.filter(function(o) {
    return er(o) && Zs(o, n) && Nt(o) !== "body";
  }) : [];
}
function kd(e, t, r, n) {
  var o = t === "clippingParents" ? Md(e) : [].concat(t), i = [].concat(o, [r]), a = i[0], u = i.reduce(function(c, s) {
    var f = Uu(e, s, n);
    return c.top = Kt(f.top, c.top), c.right = Xn(f.right, c.right), c.bottom = Xn(f.bottom, c.bottom), c.left = Kt(f.left, c.left), c;
  }, Uu(e, a, n));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function of(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? dt(n) : null, i = n ? yr(n) : null, a = t.x + t.width / 2 - r.width / 2, u = t.y + t.height / 2 - r.height / 2, c;
  switch (o) {
    case Je:
      c = {
        x: a,
        y: t.y - r.height
      };
      break;
    case at:
      c = {
        x: a,
        y: t.y + t.height
      };
      break;
    case ut:
      c = {
        x: t.x + t.width,
        y: u
      };
      break;
    case Ze:
      c = {
        x: t.x - r.width,
        y: u
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var s = o ? Za(o) : null;
  if (s != null) {
    var f = s === "y" ? "height" : "width";
    switch (i) {
      case dr:
        c[s] = c[s] - (t[f] / 2 - r[f] / 2);
        break;
      case jr:
        c[s] = c[s] + (t[f] / 2 - r[f] / 2);
        break;
    }
  }
  return c;
}
function Wr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, i = r.strategy, a = i === void 0 ? e.strategy : i, u = r.boundary, c = u === void 0 ? od : u, s = r.rootBoundary, f = s === void 0 ? Qs : s, l = r.elementContext, v = l === void 0 ? xr : l, d = r.altBoundary, g = d === void 0 ? !1 : d, y = r.padding, m = y === void 0 ? 0 : y, h = tf(typeof m != "number" ? m : rf(m, Hr)), O = v === xr ? id : xr, w = e.rects.popper, _ = e.elements[g ? O : v], b = kd(er(_) ? _ : _.contextElement || jt(e.elements.popper), c, f, a), E = vr(e.elements.reference), S = of({
    reference: E,
    element: w,
    strategy: "absolute",
    placement: o
  }), P = Ti(Object.assign({}, w, S)), D = v === xr ? P : E, A = {
    top: b.top - D.top + h.top,
    bottom: D.bottom - b.bottom + h.bottom,
    left: b.left - D.left + h.left,
    right: D.right - b.right + h.right
  }, $ = e.modifiersData.offset;
  if (v === xr && $) {
    var F = $[o];
    Object.keys(A).forEach(function(k) {
      var j = [ut, at].indexOf(k) >= 0 ? 1 : -1, U = [Je, at].indexOf(k) >= 0 ? "y" : "x";
      A[k] += F[U] * j;
    });
  }
  return A;
}
function Id(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, a = r.padding, u = r.flipVariations, c = r.allowedAutoPlacements, s = c === void 0 ? Ks : c, f = yr(n), l = f ? u ? Nu : Nu.filter(function(g) {
    return yr(g) === f;
  }) : Hr, v = l.filter(function(g) {
    return s.indexOf(g) >= 0;
  });
  v.length === 0 && (v = l, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = v.reduce(function(g, y) {
    return g[y] = Wr(e, {
      placement: y,
      boundary: o,
      rootBoundary: i,
      padding: a
    })[dt(y)], g;
  }, {});
  return Object.keys(d).sort(function(g, y) {
    return d[g] - d[y];
  });
}
function Nd(e) {
  if (dt(e) === Uo)
    return [];
  var t = an(e);
  return [Wu(e), t, Wu(t)];
}
function Ld(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, u = a === void 0 ? !0 : a, c = r.fallbackPlacements, s = r.padding, f = r.boundary, l = r.rootBoundary, v = r.altBoundary, d = r.flipVariations, g = d === void 0 ? !0 : d, y = r.allowedAutoPlacements, m = t.options.placement, h = dt(m), O = h === m, w = c || (O || !g ? [an(m)] : Nd(m)), _ = [m].concat(w).reduce(function(X, ee) {
      return X.concat(dt(ee) === Uo ? Id(t, {
        placement: ee,
        boundary: f,
        rootBoundary: l,
        padding: s,
        flipVariations: g,
        allowedAutoPlacements: y
      }) : ee);
    }, []), b = t.rects.reference, E = t.rects.popper, S = /* @__PURE__ */ new Map(), P = !0, D = _[0], A = 0; A < _.length; A++) {
      var $ = _[A], F = dt($), k = yr($) === dr, j = [Je, at].indexOf(F) >= 0, U = j ? "width" : "height", L = Wr(t, {
        placement: $,
        boundary: f,
        rootBoundary: l,
        altBoundary: v,
        padding: s
      }), G = j ? k ? ut : Ze : k ? at : Je;
      b[U] > E[U] && (G = an(G));
      var pe = an(G), he = [];
      if (i && he.push(L[F] <= 0), u && he.push(L[G] <= 0, L[pe] <= 0), he.every(function(X) {
        return X;
      })) {
        D = $, P = !1;
        break;
      }
      S.set($, he);
    }
    if (P)
      for (var T = g ? 3 : 1, M = function(ee) {
        var Y = _.find(function(J) {
          var W = S.get(J);
          if (W)
            return W.slice(0, ee).every(function(N) {
              return N;
            });
        });
        if (Y)
          return D = Y, "break";
      }, V = T; V > 0; V--) {
        var Q = M(V);
        if (Q === "break")
          break;
      }
    t.placement !== D && (t.modifiersData[n]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const jd = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ld,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Bu(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function Fu(e) {
  return [Je, ut, at, Ze].some(function(t) {
    return e[t] >= 0;
  });
}
function Wd(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, a = Wr(t, {
    elementContext: "reference"
  }), u = Wr(t, {
    altBoundary: !0
  }), c = Bu(a, n), s = Bu(u, o, i), f = Fu(c), l = Fu(s);
  t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: s,
    isReferenceHidden: f,
    hasPopperEscaped: l
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": l
  });
}
const Ud = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Wd
};
function Bd(e, t, r) {
  var n = dt(e), o = [Ze, Je].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, a = i[0], u = i[1];
  return a = a || 0, u = (u || 0) * o, [Ze, ut].indexOf(n) >= 0 ? {
    x: u,
    y: a
  } : {
    x: a,
    y: u
  };
}
function Fd(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, i = o === void 0 ? [0, 0] : o, a = Ks.reduce(function(f, l) {
    return f[l] = Bd(l, t.rects, i), f;
  }, {}), u = a[t.placement], c = u.x, s = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += s), t.modifiersData[n] = a;
}
const Yd = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Fd
};
function qd(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = of({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Hd = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: qd,
  data: {}
};
function zd(e) {
  return e === "x" ? "y" : "x";
}
function Vd(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, i = o === void 0 ? !0 : o, a = r.altAxis, u = a === void 0 ? !1 : a, c = r.boundary, s = r.rootBoundary, f = r.altBoundary, l = r.padding, v = r.tether, d = v === void 0 ? !0 : v, g = r.tetherOffset, y = g === void 0 ? 0 : g, m = Wr(t, {
    boundary: c,
    rootBoundary: s,
    padding: l,
    altBoundary: f
  }), h = dt(t.placement), O = yr(t.placement), w = !O, _ = Za(h), b = zd(_), E = t.modifiersData.popperOffsets, S = t.rects.reference, P = t.rects.popper, D = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, A = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (E) {
    if (i) {
      var k, j = _ === "y" ? Je : Ze, U = _ === "y" ? at : ut, L = _ === "y" ? "height" : "width", G = E[_], pe = G + m[j], he = G - m[U], T = d ? -P[L] / 2 : 0, M = O === dr ? S[L] : P[L], V = O === dr ? -P[L] : -S[L], Q = t.elements.arrow, X = d && Q ? Ja(Q) : {
        width: 0,
        height: 0
      }, ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ef(), Y = ee[j], J = ee[U], W = $r(0, S[L], X[L]), N = w ? S[L] / 2 - T - W - Y - A.mainAxis : M - W - Y - A.mainAxis, x = w ? -S[L] / 2 + T + W + J + A.mainAxis : V + W + J + A.mainAxis, H = t.elements.arrow && zr(t.elements.arrow), R = H ? _ === "y" ? H.clientTop || 0 : H.clientLeft || 0 : 0, ne = (k = $ == null ? void 0 : $[_]) != null ? k : 0, te = G + N - ne - R, oe = G + x - ne, ie = $r(d ? Xn(pe, te) : pe, G, d ? Kt(he, oe) : he);
      E[_] = ie, F[_] = ie - G;
    }
    if (u) {
      var ce, fe = _ === "x" ? Je : Ze, K = _ === "x" ? at : ut, q = E[b], Z = b === "y" ? "height" : "width", z = q + m[fe], I = q - m[K], le = [Je, Ze].indexOf(h) !== -1, we = (ce = $ == null ? void 0 : $[b]) != null ? ce : 0, ke = le ? z : q - S[Z] - P[Z] - we + A.altAxis, Ue = le ? q + S[Z] + P[Z] - we - A.altAxis : I, Ie = d && le ? md(ke, q, Ue) : $r(d ? ke : z, q, d ? Ue : I);
      E[b] = Ie, F[b] = Ie - q;
    }
    t.modifiersData[n] = F;
  }
}
const Xd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Vd,
  requiresIfExists: ["offset"]
};
function Gd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Qd(e) {
  return e === ct(e) || !pt(e) ? eu(e) : Gd(e);
}
function Kd(e) {
  var t = e.getBoundingClientRect(), r = pr(t.width) / e.offsetWidth || 1, n = pr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Jd(e, t, r) {
  r === void 0 && (r = !1);
  var n = pt(t), o = pt(t) && Kd(t), i = jt(t), a = vr(e, o, r), u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Nt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ru(i)) && (u = Qd(t)), pt(t) ? (c = vr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = tu(i))), {
    x: a.left + u.scrollLeft - c.x,
    y: a.top + u.scrollTop - c.y,
    width: a.width,
    height: a.height
  };
}
function Zd(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(u) {
      if (!r.has(u)) {
        var c = t.get(u);
        c && o(c);
      }
    }), n.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function ep(e) {
  var t = Zd(e);
  return Si.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function tp(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Pt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(o, i) {
    return o.replace(/%s/, i);
  }, e);
}
var Ht = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', rp = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Yu = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function np(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Yu).filter(function(r, n, o) {
      return o.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(Pt(Ht, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(Pt(Ht, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          Si.indexOf(t.phase) < 0 && console.error(Pt(Ht, t.name, '"phase"', "either " + Si.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(Pt(Ht, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(Pt(Ht, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(Pt(Ht, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(Pt(Ht, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Yu.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(o) {
          return o.name === n;
        }) == null && console.error(Pt(rp, String(t.name), n, n));
      });
    });
  });
}
function op(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var o = t(n);
    if (!r.has(o))
      return r.add(o), !0;
  });
}
function ip(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var qu = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", ap = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Hu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function zu() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function up(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, i = o === void 0 ? Hu : o;
  return function(u, c, s) {
    s === void 0 && (s = i);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Hu, i),
      modifiersData: {},
      elements: {
        reference: u,
        popper: c
      },
      attributes: {},
      styles: {}
    }, l = [], v = !1, d = {
      state: f,
      setOptions: function(h) {
        var O = typeof h == "function" ? h(f.options) : h;
        y(), f.options = Object.assign({}, i, f.options, O), f.scrollParents = {
          reference: er(u) ? Dr(u) : u.contextElement ? Dr(u.contextElement) : [],
          popper: Dr(c)
        };
        var w = ep(ip([].concat(n, f.options.modifiers)));
        if (f.orderedModifiers = w.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var _ = op([].concat(w, f.options.modifiers), function($) {
            var F = $.name;
            return F;
          });
          if (np(_), dt(f.options.placement) === Uo) {
            var b = f.orderedModifiers.find(function($) {
              var F = $.name;
              return F === "flip";
            });
            b || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var E = vt(c), S = E.marginTop, P = E.marginRight, D = E.marginBottom, A = E.marginLeft;
          [S, P, D, A].some(function($) {
            return parseFloat($);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return g(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var h = f.elements, O = h.reference, w = h.popper;
          if (!zu(O, w)) {
            process.env.NODE_ENV !== "production" && console.error(qu);
            return;
          }
          f.rects = {
            reference: Jd(O, zr(w), f.options.strategy === "fixed"),
            popper: Ja(w)
          }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function($) {
            return f.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var _ = 0, b = 0; b < f.orderedModifiers.length; b++) {
            if (process.env.NODE_ENV !== "production" && (_ += 1, _ > 100)) {
              console.error(ap);
              break;
            }
            if (f.reset === !0) {
              f.reset = !1, b = -1;
              continue;
            }
            var E = f.orderedModifiers[b], S = E.fn, P = E.options, D = P === void 0 ? {} : P, A = E.name;
            typeof S == "function" && (f = S({
              state: f,
              options: D,
              name: A,
              instance: d
            }) || f);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: tp(function() {
        return new Promise(function(m) {
          d.forceUpdate(), m(f);
        });
      }),
      destroy: function() {
        y(), v = !0;
      }
    };
    if (!zu(u, c))
      return process.env.NODE_ENV !== "production" && console.error(qu), d;
    d.setOptions(s).then(function(m) {
      !v && s.onFirstUpdate && s.onFirstUpdate(m);
    });
    function g() {
      f.orderedModifiers.forEach(function(m) {
        var h = m.name, O = m.options, w = O === void 0 ? {} : O, _ = m.effect;
        if (typeof _ == "function") {
          var b = _({
            state: f,
            name: h,
            instance: d,
            options: w
          }), E = function() {
          };
          l.push(b || E);
        }
      });
    }
    function y() {
      l.forEach(function(m) {
        return m();
      }), l = [];
    }
    return d;
  };
}
const cp = up({
  defaultModifiers: [Ud, Hd, Sd, Td, Yd, jd, Xd, _d]
}), sp = ["enabled", "placement", "strategy", "modifiers"];
function fp(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
const lp = {
  name: "applyStyles",
  enabled: !1,
  phase: "afterWrite",
  fn: () => {
  }
}, dp = {
  name: "ariaDescribedBy",
  enabled: !0,
  phase: "afterWrite",
  effect: ({
    state: e
  }) => () => {
    const {
      reference: t,
      popper: r
    } = e.elements;
    if ("removeAttribute" in t) {
      const n = (t.getAttribute("aria-describedby") || "").split(",").filter((o) => o.trim() !== r.id);
      n.length ? t.setAttribute("aria-describedby", n.join(",")) : t.removeAttribute("aria-describedby");
    }
  },
  fn: ({
    state: e
  }) => {
    var t;
    const {
      popper: r,
      reference: n
    } = e.elements, o = (t = r.getAttribute("role")) == null ? void 0 : t.toLowerCase();
    if (r.id && o === "tooltip" && "setAttribute" in n) {
      const i = n.getAttribute("aria-describedby");
      if (i && i.split(",").indexOf(r.id) !== -1)
        return;
      n.setAttribute("aria-describedby", i ? `${i},${r.id}` : r.id);
    }
  }
}, pp = [];
function vp(e, t, r = {}) {
  let {
    enabled: n = !0,
    placement: o = "bottom",
    strategy: i = "absolute",
    modifiers: a = pp
  } = r, u = fp(r, sp);
  const c = re(a), s = re(), f = xe(() => {
    var m;
    (m = s.current) == null || m.update();
  }, []), l = xe(() => {
    var m;
    (m = s.current) == null || m.forceUpdate();
  }, []), [v, d] = nd(ye({
    placement: o,
    update: f,
    forceUpdate: l,
    attributes: {},
    styles: {
      popper: {},
      arrow: {}
    }
  })), g = Se(() => ({
    name: "updateStateModifier",
    enabled: !0,
    phase: "write",
    requires: ["computeStyles"],
    fn: ({
      state: m
    }) => {
      const h = {}, O = {};
      Object.keys(m.elements).forEach((w) => {
        h[w] = m.styles[w], O[w] = m.attributes[w];
      }), d({
        state: m,
        styles: h,
        attributes: O,
        update: f,
        forceUpdate: l,
        placement: m.placement
      });
    }
  }), [f, l, d]), y = Se(() => (Pr(c.current, a) || (c.current = a), c.current), [a]);
  return se(() => {
    !s.current || !n || s.current.setOptions({
      placement: o,
      strategy: i,
      modifiers: [...y, g, lp]
    });
  }, [i, o, g, n, y]), se(() => {
    if (!(!n || e == null || t == null))
      return s.current = cp(e, t, Object.assign({}, u, {
        placement: o,
        strategy: i,
        modifiers: [...y, dp, g]
      })), () => {
        s.current != null && (s.current.destroy(), s.current = void 0, d((m) => Object.assign({}, m, {
          attributes: {},
          styles: {
            popper: {}
          }
        })));
      };
  }, [n, e, t]), v;
}
function Vu(e, t) {
  if (e.contains)
    return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var yp = process.env.NODE_ENV !== "production", af = function() {
};
if (yp) {
  var hp = function(t, r) {
    var n = arguments.length;
    r = new Array(n > 1 ? n - 1 : 0);
    for (var o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    var i = 0, a = "Warning: " + t.replace(/%s/g, function() {
      return r[i++];
    });
    typeof console < "u" && console.error(a);
    try {
      throw new Error(a);
    } catch {
    }
  };
  af = function(e, t, r) {
    var n = arguments.length;
    r = new Array(n > 2 ? n - 2 : 0);
    for (var o = 2; o < n; o++)
      r[o - 2] = arguments[o];
    if (t === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    e || hp.apply(null, [t].concat(r));
  };
}
var mp = af;
const Xu = () => {
};
function gp(e) {
  return e.button === 0;
}
function bp(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const un = (e) => e && ("current" in e ? e.current : e), Gu = {
  click: "mousedown",
  mouseup: "mousedown",
  pointerup: "pointerdown"
};
function wp(e, t = Xu, {
  disabled: r,
  clickTrigger: n = "click"
} = {}) {
  const o = re(!1), i = re(!1), a = xe((s) => {
    const f = un(e);
    mp(!!f, "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"), o.current = !f || bp(s) || !gp(s) || !!Vu(f, s.target) || i.current, i.current = !1;
  }, [e]), u = lr((s) => {
    const f = un(e);
    f && Vu(f, s.target) && (i.current = !0);
  }), c = lr((s) => {
    o.current || t(s);
  });
  se(() => {
    if (r || e == null)
      return;
    const s = Wo(un(e));
    let f = (s.defaultView || window).event, l = null;
    Gu[n] && (l = Qt(s, Gu[n], u, !0));
    const v = Qt(s, n, a, !0), d = Qt(s, n, (y) => {
      if (y === f) {
        f = void 0;
        return;
      }
      c(y);
    });
    let g = [];
    return "ontouchstart" in s.documentElement && (g = [].slice.call(s.body.children).map((y) => Qt(y, "mousemove", Xu))), () => {
      l == null || l(), v(), d(), g.forEach((y) => y());
    };
  }, [e, r, n, a, u, c]);
}
function _p(e) {
  const t = {};
  return Array.isArray(e) ? (e == null || e.forEach((r) => {
    t[r.name] = r;
  }), t) : e || t;
}
function Op(e = {}) {
  return Array.isArray(e) ? e : Object.keys(e).map((t) => (e[t].name = t, e[t]));
}
function Ep({
  enabled: e,
  enableEvents: t,
  placement: r,
  flip: n,
  offset: o,
  fixed: i,
  containerPadding: a,
  arrowElement: u,
  popperConfig: c = {}
}) {
  var s, f, l, v, d;
  const g = _p(c.modifiers);
  return Object.assign({}, c, {
    placement: r,
    enabled: e,
    strategy: i ? "fixed" : c.strategy,
    modifiers: Op(Object.assign({}, g, {
      eventListeners: {
        enabled: t,
        options: (s = g.eventListeners) == null ? void 0 : s.options
      },
      preventOverflow: Object.assign({}, g.preventOverflow, {
        options: a ? Object.assign({
          padding: a
        }, (f = g.preventOverflow) == null ? void 0 : f.options) : (l = g.preventOverflow) == null ? void 0 : l.options
      }),
      offset: {
        options: Object.assign({
          offset: o
        }, (v = g.offset) == null ? void 0 : v.options)
      },
      arrow: Object.assign({}, g.arrow, {
        enabled: !!u,
        options: Object.assign({}, (d = g.arrow) == null ? void 0 : d.options, {
          element: u
        })
      }),
      flip: Object.assign({
        enabled: !!n
      }, g.flip)
    }))
  });
}
const uf = /* @__PURE__ */ rr(Ga ? window : void 0);
uf.Provider;
function xp() {
  return xt(uf);
}
const ri = (e, t) => Ga ? e == null ? (t || Wo()).body : (typeof e == "function" && (e = e()), e && "current" in e && (e = e.current), e && ("nodeType" in e || e.getBoundingClientRect) ? e : null) : null;
function Qu(e, t) {
  const r = xp(), [n, o] = ye(() => ri(e, r == null ? void 0 : r.document));
  if (!n) {
    const i = ri(e);
    i && o(i);
  }
  return se(() => {
    t && n && t(n);
  }, [t, n]), se(() => {
    const i = ri(e);
    i !== n && o(i);
  }, [e, n]), n;
}
function Sp({
  children: e,
  in: t,
  onExited: r,
  mountOnEnter: n,
  unmountOnExit: o
}) {
  const i = re(null), a = re(t), u = lr(r);
  se(() => {
    t ? a.current = !0 : u(i.current);
  }, [t, u]);
  const c = qr(i, e.ref), s = /* @__PURE__ */ Fs(e, {
    ref: c
  });
  return t ? s : o || !a.current && n ? null : s;
}
function Rp({
  in: e,
  onTransition: t
}) {
  const r = re(null), n = re(!0), o = lr(t);
  return xi(() => {
    if (!r.current)
      return;
    let i = !1;
    return o({
      in: e,
      element: r.current,
      initial: n.current,
      isStale: () => i
    }), () => {
      i = !0;
    };
  }, [e, o]), xi(() => (n.current = !1, () => {
    n.current = !0;
  }), []), r;
}
function Tp({
  children: e,
  in: t,
  onExited: r,
  onEntered: n,
  transition: o
}) {
  const [i, a] = ye(!t);
  t && i && a(!1);
  const u = Rp({
    in: !!t,
    onTransition: (s) => {
      const f = () => {
        s.isStale() || (s.in ? n == null || n(s.element, s.initial) : (a(!0), r == null || r(s.element)));
      };
      Promise.resolve(o(s)).then(f, (l) => {
        throw s.in || a(!0), l;
      });
    }
  }), c = qr(u, e.ref);
  return i && !t ? null : /* @__PURE__ */ Fs(e, {
    ref: c
  });
}
function Pp(e, t, r) {
  return e ? /* @__PURE__ */ ae(e, Object.assign({}, r)) : t ? /* @__PURE__ */ ae(Tp, Object.assign({}, r, {
    transition: t
  })) : /* @__PURE__ */ ae(Sp, Object.assign({}, r));
}
function $p(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
const Dp = 27, Cp = () => {
};
function Ap(e, t, {
  disabled: r,
  clickTrigger: n
} = {}) {
  const o = t || Cp;
  wp(e, o, {
    disabled: r,
    clickTrigger: n
  });
  const i = lr((a) => {
    a.keyCode === Dp && o(a);
  });
  se(() => {
    if (r || e == null)
      return;
    const a = Wo(un(e));
    let u = (a.defaultView || window).event;
    const c = Qt(a, "keyup", (s) => {
      if (s === u) {
        u = void 0;
        return;
      }
      i(s);
    });
    return () => {
      c();
    };
  }, [e, r, i]);
}
const cf = /* @__PURE__ */ It.forwardRef((e, t) => {
  const {
    flip: r,
    offset: n,
    placement: o,
    containerPadding: i,
    popperConfig: a = {},
    transition: u,
    runTransition: c
  } = e, [s, f] = Ei(), [l, v] = Ei(), d = qr(f, t), g = Qu(e.container), y = Qu(e.target), [m, h] = ye(!e.show), O = vp(y, s, Ep({
    placement: o,
    enableEvents: !!e.show,
    containerPadding: i || 5,
    flip: r,
    offset: n,
    arrowElement: l,
    popperConfig: a
  }));
  e.show && m && h(!1);
  const w = (...$) => {
    h(!0), e.onExited && e.onExited(...$);
  }, _ = e.show || !m;
  if (Ap(s, e.onHide, {
    disabled: !e.rootClose || e.rootCloseDisabled,
    clickTrigger: e.rootCloseEvent
  }), !_)
    return null;
  const {
    onExit: b,
    onExiting: E,
    onEnter: S,
    onEntering: P,
    onEntered: D
  } = e;
  let A = e.children(Object.assign({}, O.attributes.popper, {
    style: O.styles.popper,
    ref: d
  }), {
    popper: O,
    placement: o,
    show: !!e.show,
    arrowProps: Object.assign({}, O.attributes.arrow, {
      style: O.styles.arrow,
      ref: v
    })
  });
  return A = Pp(u, c, {
    in: !!e.show,
    appear: !0,
    mountOnEnter: !0,
    unmountOnExit: !0,
    children: A,
    onExit: b,
    onExiting: E,
    onExited: w,
    onEnter: S,
    onEntering: P,
    onEntered: D
  }), g ? /* @__PURE__ */ cr.createPortal(A, g) : null;
});
cf.displayName = "Overlay";
const Mp = Gs("popover-header"), sf = Gs("popover-body");
function kp(e, t) {
  let r = e;
  return e === "left" ? r = t ? "end" : "start" : e === "right" && (r = t ? "start" : "end"), r;
}
const Ip = {
  placement: "right"
}, ff = /* @__PURE__ */ It.forwardRef(({
  bsPrefix: e,
  placement: t,
  className: r,
  style: n,
  children: o,
  body: i,
  arrowProps: a,
  popper: u,
  show: c,
  ...s
}, f) => {
  const l = Va(e, "popover"), v = gl(), [d] = (t == null ? void 0 : t.split("-")) || [], g = kp(d, v);
  return /* @__PURE__ */ Ye("div", {
    ref: f,
    role: "tooltip",
    style: n,
    "x-placement": d,
    className: jo(r, l, d && `bs-popover-${g}`),
    ...s,
    children: [/* @__PURE__ */ ae("div", {
      className: "popover-arrow",
      ...a
    }), i ? /* @__PURE__ */ ae(sf, {
      children: o
    }) : o]
  });
});
ff.defaultProps = Ip;
const Np = Object.assign(ff, {
  Header: Mp,
  Body: sf,
  // Default popover offset.
  // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
  POPPER_OFFSET: [0, 8]
});
function Lp(e) {
  const t = re(null), r = Va(void 0, "popover"), n = Se(() => ({
    name: "offset",
    options: {
      offset: () => t.current && $p(t.current, r) ? e || Np.POPPER_OFFSET : e || [0, 0]
    }
  }), [e, r]);
  return [t, [n]];
}
const jp = {
  transition: Xs,
  rootClose: !1,
  show: !1,
  placement: "top"
};
function Wp(e, t) {
  const {
    ref: r
  } = e, {
    ref: n
  } = t;
  e.ref = r.__wrapped || (r.__wrapped = (o) => r(Oi(o))), t.ref = n.__wrapped || (n.__wrapped = (o) => n(Oi(o)));
}
const nu = /* @__PURE__ */ It.forwardRef(({
  children: e,
  transition: t,
  popperConfig: r = {},
  ...n
}, o) => {
  const i = re({}), [a, u] = Ei(), [c, s] = Lp(n.offset), f = qr(o, c), l = t === !0 ? Xs : t || void 0, v = lr((d) => {
    u(d), r == null || r.onFirstUpdate == null || r.onFirstUpdate(d);
  });
  return xi(() => {
    a && (i.current.scheduleUpdate == null || i.current.scheduleUpdate());
  }, [a]), /* @__PURE__ */ ae(cf, {
    ...n,
    ref: f,
    popperConfig: {
      ...r,
      modifiers: s.concat(r.modifiers || []),
      onFirstUpdate: v
    },
    transition: l,
    children: (d, {
      arrowProps: g,
      popper: y,
      show: m
    }) => {
      var h, O;
      Wp(d, g);
      const w = y == null ? void 0 : y.placement, _ = Object.assign(i.current, {
        state: y == null ? void 0 : y.state,
        scheduleUpdate: y == null ? void 0 : y.update,
        placement: w,
        outOfBoundaries: (y == null || (h = y.state) == null || (O = h.modifiersData.hide) == null ? void 0 : O.isReferenceHidden) || !1
      });
      return typeof e == "function" ? e({
        ...d,
        placement: w,
        show: m,
        ...!t && m && {
          className: "show"
        },
        popper: _,
        arrowProps: g
      }) : /* @__PURE__ */ It.cloneElement(e, {
        ...d,
        placement: w,
        arrowProps: g,
        popper: _,
        className: jo(e.props.className, !t && m && "show"),
        style: {
          ...e.props.style,
          ...d.style
        }
      });
    }
  });
});
nu.displayName = "Overlay";
nu.defaultProps = jp;
const lf = nu;
const Ku = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (c, s) => {
    const f = typeof c == "function" ? c(t) : c;
    if (!Object.is(f, t)) {
      const l = t;
      t = s ?? typeof f != "object" ? f : Object.assign({}, t, f), r.forEach((v) => v(t, l));
    }
  }, o = () => t, u = { setState: n, getState: o, subscribe: (c) => (r.add(c), () => r.delete(c)), destroy: () => {
    ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && console.warn(
      "[DEPRECATED] The destroy method will be unsupported in the future version. You should use unsubscribe function returned by subscribe. Everything will be garbage collected if store is garbage collected."
    ), r.clear();
  } };
  return t = e(n, o, u), u;
}, Up = (e) => e ? Ku(e) : Ku;
var Pi = {}, Bp = {
  get exports() {
    return Pi;
  },
  set exports(e) {
    Pi = e;
  }
}, ni = {}, Gn = {}, Fp = {
  get exports() {
    return Gn;
  },
  set exports(e) {
    Gn = e;
  }
}, oi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ju;
function Yp() {
  if (Ju)
    return oi;
  Ju = 1;
  var e = $e;
  function t(l, v) {
    return l === v && (l !== 0 || 1 / l === 1 / v) || l !== l && v !== v;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function u(l, v) {
    var d = v(), g = n({ inst: { value: d, getSnapshot: v } }), y = g[0].inst, m = g[1];
    return i(function() {
      y.value = d, y.getSnapshot = v, c(y) && m({ inst: y });
    }, [l, d, v]), o(function() {
      return c(y) && m({ inst: y }), l(function() {
        c(y) && m({ inst: y });
      });
    }, [l]), a(d), d;
  }
  function c(l) {
    var v = l.getSnapshot;
    l = l.value;
    try {
      var d = v();
      return !r(l, d);
    } catch {
      return !0;
    }
  }
  function s(l, v) {
    return v();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s : u;
  return oi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, oi;
}
var ii = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zu;
function qp() {
  return Zu || (Zu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = $e, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(w) {
      {
        for (var _ = arguments.length, b = new Array(_ > 1 ? _ - 1 : 0), E = 1; E < _; E++)
          b[E - 1] = arguments[E];
        n("error", w, b);
      }
    }
    function n(w, _, b) {
      {
        var E = t.ReactDebugCurrentFrame, S = E.getStackAddendum();
        S !== "" && (_ += "%s", b = b.concat([S]));
        var P = b.map(function(D) {
          return String(D);
        });
        P.unshift("Warning: " + _), Function.prototype.apply.call(console[w], console, P);
      }
    }
    function o(w, _) {
      return w === _ && (w !== 0 || 1 / w === 1 / _) || w !== w && _ !== _;
    }
    var i = typeof Object.is == "function" ? Object.is : o, a = e.useState, u = e.useEffect, c = e.useLayoutEffect, s = e.useDebugValue, f = !1, l = !1;
    function v(w, _, b) {
      f || e.startTransition !== void 0 && (f = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var E = _();
      if (!l) {
        var S = _();
        i(E, S) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), l = !0);
      }
      var P = a({
        inst: {
          value: E,
          getSnapshot: _
        }
      }), D = P[0].inst, A = P[1];
      return c(function() {
        D.value = E, D.getSnapshot = _, d(D) && A({
          inst: D
        });
      }, [w, E, _]), u(function() {
        d(D) && A({
          inst: D
        });
        var $ = function() {
          d(D) && A({
            inst: D
          });
        };
        return w($);
      }, [w]), s(E), E;
    }
    function d(w) {
      var _ = w.getSnapshot, b = w.value;
      try {
        var E = _();
        return !i(b, E);
      } catch {
        return !0;
      }
    }
    function g(w, _, b) {
      return _();
    }
    var y = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", m = !y, h = m ? g : v, O = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : h;
    ii.useSyncExternalStore = O, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ii;
}
var ec;
function df() {
  return ec || (ec = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Yp() : e.exports = qp();
  }(Fp)), Gn;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tc;
function Hp() {
  if (tc)
    return ni;
  tc = 1;
  var e = $e, t = df();
  function r(s, f) {
    return s === f && (s !== 0 || 1 / s === 1 / f) || s !== s && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, u = e.useMemo, c = e.useDebugValue;
  return ni.useSyncExternalStoreWithSelector = function(s, f, l, v, d) {
    var g = i(null);
    if (g.current === null) {
      var y = { hasValue: !1, value: null };
      g.current = y;
    } else
      y = g.current;
    g = u(function() {
      function h(E) {
        if (!O) {
          if (O = !0, w = E, E = v(E), d !== void 0 && y.hasValue) {
            var S = y.value;
            if (d(S, E))
              return _ = S;
          }
          return _ = E;
        }
        if (S = _, n(w, E))
          return S;
        var P = v(E);
        return d !== void 0 && d(S, P) ? S : (w = E, _ = P);
      }
      var O = !1, w, _, b = l === void 0 ? null : l;
      return [function() {
        return h(f());
      }, b === null ? void 0 : function() {
        return h(b());
      }];
    }, [f, l, v, d]);
    var m = o(s, g[0], g[1]);
    return a(function() {
      y.hasValue = !0, y.value = m;
    }, [m]), c(m), m;
  }, ni;
}
var ai = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rc;
function zp() {
  return rc || (rc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = $e, t = df();
    function r(f, l) {
      return f === l && (f !== 0 || 1 / f === 1 / l) || f !== f && l !== l;
    }
    var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, u = e.useMemo, c = e.useDebugValue;
    function s(f, l, v, d, g) {
      var y = i(null), m;
      y.current === null ? (m = {
        hasValue: !1,
        value: null
      }, y.current = m) : m = y.current;
      var h = u(function() {
        var b = !1, E, S, P = function(F) {
          if (!b) {
            b = !0, E = F;
            var k = d(F);
            if (g !== void 0 && m.hasValue) {
              var j = m.value;
              if (g(j, k))
                return S = j, j;
            }
            return S = k, k;
          }
          var U = E, L = S;
          if (n(U, F))
            return L;
          var G = d(F);
          return g !== void 0 && g(L, G) ? L : (E = F, S = G, G);
        }, D = v === void 0 ? null : v, A = function() {
          return P(l());
        }, $ = D === null ? void 0 : function() {
          return P(D());
        };
        return [A, $];
      }, [l, v, d, g]), O = h[0], w = h[1], _ = o(f, O, w);
      return a(function() {
        m.hasValue = !0, m.value = _;
      }, [_]), c(_), _;
    }
    ai.useSyncExternalStoreWithSelector = s, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ai;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Hp() : e.exports = zp();
})(Bp);
const Vp = /* @__PURE__ */ sl(Pi), { useSyncExternalStoreWithSelector: Xp } = Vp;
function Gp(e, t = e.getState, r) {
  const n = Xp(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return il(n), n;
}
const nc = (e) => {
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0 } && "production") !== "production" && typeof e != "function" && console.warn(
    '[DEPRECATED] Passing a vanilla store will be unsupported in the future version. Please use `import { useStore } from "zustand"` to use the vanilla store in React.'
  );
  const t = typeof e == "function" ? Up(e) : e, r = (n, o) => Gp(t, n, o);
  return Object.assign(r, t), r;
}, Qp = (e) => e ? nc(e) : nc, gt = Qp()((e) => ({
  focusedTimestamp: -1,
  FocusedCapacity: -1,
  isResizing: !1,
  isDraging: !1,
  setIsResizing: (t) => e({ isResizing: t }),
  setIsDraging: (t) => e({ isDraging: t }),
  setFocusedTimestamp: (t) => e({ focusedTimestamp: t }),
  setFocusedCapacity: (t) => e({ FocusedCapacity: t })
})), Kp = () => gt((e) => e.focusedTimestamp), Jp = () => gt((e) => e.FocusedCapacity);
const pf = al(function({ children: t, onClose: r, props: n }, o) {
  return /* @__PURE__ */ Ye(Lo, { children: [
    /* @__PURE__ */ ae("div", { className: "modal-tip-backdrop", onClick: r }),
    /* @__PURE__ */ Ye("div", { className: "modal-tip", ...n, ref: o, children: [
      t,
      /* @__PURE__ */ ae(
        "button",
        {
          type: "button",
          className: "btn-close close",
          "aria-label": "Close",
          onClick: r
        }
      )
    ] })
  ] });
});
function Zp({
  timeBlock: e,
  index: t,
  isLocked: r,
  modal: n
}) {
  const o = Jp(), i = (f) => {
    gt.getState().setFocusedTimestamp(f ? t : -1);
  }, a = re(null), [u, c] = ye(!1), s = () => {
    c(!1);
  };
  return /* @__PURE__ */ Ye(Lo, { children: [
    /* @__PURE__ */ ae(
      "div",
      {
        className: "capacity-cell" + (o == t ? " focus" : "") + (r ? " locked" : ""),
        ref: a,
        onMouseEnter: () => {
          i == null || i(!0);
        },
        onMouseLeave: () => {
          i == null || i(!1);
        },
        onClick: () => {
          c(!0);
        },
        id: `capacity-cell-${t}`,
        children: /* @__PURE__ */ ae("span", { children: e.reservationCount })
      }
    ),
    n && /* @__PURE__ */ ae(lf, { target: a.current, show: u, placement: "bottom", children: ({
      placement: f,
      arrowProps: l,
      show: v,
      popper: d,
      ref: g,
      ...y
    }) => /* @__PURE__ */ ae(pf, { onClose: s, props: y, ref: g, children: n(s) }) })
  ] });
}
const Fo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function mr(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function ou(e) {
  return "nodeType" in e;
}
function et(e) {
  var t, r;
  return e ? mr(e) ? e : ou(e) && (t = (r = e.ownerDocument) == null ? void 0 : r.defaultView) != null ? t : window : window;
}
function iu(e) {
  const {
    Document: t
  } = et(e);
  return e instanceof t;
}
function Vr(e) {
  return mr(e) ? !1 : e instanceof et(e).HTMLElement;
}
function ev(e) {
  return e instanceof et(e).SVGElement;
}
function gr(e) {
  return e ? mr(e) ? e.document : ou(e) ? iu(e) ? e : Vr(e) ? e.ownerDocument : document : document : document;
}
const St = Fo ? Bs : se;
function au(e) {
  const t = re(e);
  return St(() => {
    t.current = e;
  }), xe(function() {
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return t.current == null ? void 0 : t.current(...n);
  }, []);
}
function tv() {
  const e = re(null), t = xe((n, o) => {
    e.current = setInterval(n, o);
  }, []), r = xe(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, r];
}
function Ur(e, t) {
  t === void 0 && (t = [e]);
  const r = re(e);
  return St(() => {
    r.current !== e && (r.current = e);
  }, t), r;
}
function Xr(e, t) {
  const r = re();
  return Se(
    () => {
      const n = e(r.current);
      return r.current = n, n;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function Qn(e) {
  const t = au(e), r = re(null), n = xe(
    (o) => {
      o !== r.current && (t == null || t(o, r.current)), r.current = o;
    },
    //eslint-disable-next-line
    []
  );
  return [r, n];
}
function $i(e) {
  const t = re();
  return se(() => {
    t.current = e;
  }, [e]), t.current;
}
let ui = {};
function Yo(e, t) {
  return Se(() => {
    if (t)
      return t;
    const r = ui[e] == null ? 0 : ui[e] + 1;
    return ui[e] = r, e + "-" + r;
  }, [e, t]);
}
function vf(e) {
  return function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    return n.reduce((i, a) => {
      const u = Object.entries(a);
      for (const [c, s] of u) {
        const f = i[c];
        f != null && (i[c] = f + e * s);
      }
      return i;
    }, {
      ...t
    });
  };
}
const sr = /* @__PURE__ */ vf(1), Kn = /* @__PURE__ */ vf(-1);
function rv(e) {
  return "clientX" in e && "clientY" in e;
}
function yf(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = et(e.target);
  return t && e instanceof t;
}
function nv(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = et(e.target);
  return t && e instanceof t;
}
function Di(e) {
  if (nv(e)) {
    if (e.touches && e.touches.length) {
      const {
        clientX: t,
        clientY: r
      } = e.touches[0];
      return {
        x: t,
        y: r
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      const {
        clientX: t,
        clientY: r
      } = e.changedTouches[0];
      return {
        x: t,
        y: r
      };
    }
  }
  return rv(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const oc = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function ov(e) {
  return e.matches(oc) ? e : e.querySelector(oc);
}
const iv = {
  display: "none"
};
function av(e) {
  let {
    id: t,
    value: r
  } = e;
  return $e.createElement("div", {
    id: t,
    style: iv
  }, r);
}
const uv = {
  position: "fixed",
  width: 1,
  height: 1,
  margin: -1,
  border: 0,
  padding: 0,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  clipPath: "inset(100%)",
  whiteSpace: "nowrap"
};
function cv(e) {
  let {
    id: t,
    announcement: r
  } = e;
  return $e.createElement("div", {
    id: t,
    style: uv,
    role: "status",
    "aria-live": "assertive",
    "aria-atomic": !0
  }, r);
}
function sv() {
  const [e, t] = ye("");
  return {
    announce: xe((n) => {
      n != null && t(n);
    }, []),
    announcement: e
  };
}
const hf = /* @__PURE__ */ rr(null);
function fv(e) {
  const t = xt(hf);
  se(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function lv() {
  const [e] = ye(() => /* @__PURE__ */ new Set()), t = xe((n) => (e.add(n), () => e.delete(n)), [e]);
  return [xe((n) => {
    let {
      type: o,
      event: i
    } = n;
    e.forEach((a) => {
      var u;
      return (u = a[o]) == null ? void 0 : u.call(a, i);
    });
  }, [e]), t];
}
const dv = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, pv = {
  onDragStart(e) {
    let {
      active: t
    } = e;
    return "Picked up draggable item " + t.id + ".";
  },
  onDragOver(e) {
    let {
      active: t,
      over: r
    } = e;
    return r ? "Draggable item " + t.id + " was moved over droppable area " + r.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
  },
  onDragEnd(e) {
    let {
      active: t,
      over: r
    } = e;
    return r ? "Draggable item " + t.id + " was dropped over droppable area " + r.id : "Draggable item " + t.id + " was dropped.";
  },
  onDragCancel(e) {
    let {
      active: t
    } = e;
    return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
  }
};
function vv(e) {
  let {
    announcements: t = pv,
    container: r,
    hiddenTextDescribedById: n,
    screenReaderInstructions: o = dv
  } = e;
  const {
    announce: i,
    announcement: a
  } = sv(), u = Yo("DndLiveRegion"), [c, s] = ye(!1);
  if (se(() => {
    s(!0);
  }, []), fv(Se(() => ({
    onDragStart(l) {
      let {
        active: v
      } = l;
      i(t.onDragStart({
        active: v
      }));
    },
    onDragMove(l) {
      let {
        active: v,
        over: d
      } = l;
      t.onDragMove && i(t.onDragMove({
        active: v,
        over: d
      }));
    },
    onDragOver(l) {
      let {
        active: v,
        over: d
      } = l;
      i(t.onDragOver({
        active: v,
        over: d
      }));
    },
    onDragEnd(l) {
      let {
        active: v,
        over: d
      } = l;
      i(t.onDragEnd({
        active: v,
        over: d
      }));
    },
    onDragCancel(l) {
      let {
        active: v,
        over: d
      } = l;
      i(t.onDragCancel({
        active: v,
        over: d
      }));
    }
  }), [i, t])), !c)
    return null;
  const f = $e.createElement($e.Fragment, null, $e.createElement(av, {
    id: n,
    value: o.draggable
  }), $e.createElement(cv, {
    id: u,
    announcement: a
  }));
  return r ? cl(f, r) : f;
}
var Fe;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(Fe || (Fe = {}));
function Jn() {
}
function yv(e, t) {
  return Se(
    () => ({
      sensor: e,
      options: t ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e, t]
  );
}
function hv() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Se(
    () => [...t].filter((n) => n != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
const yt = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function mv(e, t) {
  let {
    data: {
      value: r
    }
  } = e, {
    data: {
      value: n
    }
  } = t;
  return n - r;
}
function gv(e, t) {
  if (!e || e.length === 0)
    return null;
  const [r] = e;
  return t ? r[t] : r;
}
function bv(e, t) {
  const r = Math.max(t.top, e.top), n = Math.max(t.left, e.left), o = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), a = o - n, u = i - r;
  if (n < o && r < i) {
    const c = t.width * t.height, s = e.width * e.height, f = a * u, l = f / (c + s - f);
    return Number(l.toFixed(4));
  }
  return 0;
}
const wv = (e) => {
  let {
    collisionRect: t,
    droppableRects: r,
    droppableContainers: n
  } = e;
  const o = [];
  for (const i of n) {
    const {
      id: a
    } = i, u = r.get(a);
    if (u) {
      const c = bv(u, t);
      c > 0 && o.push({
        id: a,
        data: {
          droppableContainer: i,
          value: c
        }
      });
    }
  }
  return o.sort(mv);
};
function _v(e, t, r) {
  return {
    ...e,
    scaleX: t && r ? t.width / r.width : 1,
    scaleY: t && r ? t.height / r.height : 1
  };
}
function mf(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : yt;
}
function Ov(e) {
  return function(r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      o[i - 1] = arguments[i];
    return o.reduce((a, u) => ({
      ...a,
      top: a.top + e * u.y,
      bottom: a.bottom + e * u.y,
      left: a.left + e * u.x,
      right: a.right + e * u.x
    }), {
      ...r
    });
  };
}
const Ev = /* @__PURE__ */ Ov(1);
function xv(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function Sv(e, t, r) {
  const n = xv(t);
  if (!n)
    return e;
  const {
    scaleX: o,
    scaleY: i,
    x: a,
    y: u
  } = n, c = e.left - a - (1 - o) * parseFloat(r), s = e.top - u - (1 - i) * parseFloat(r.slice(r.indexOf(" ") + 1)), f = o ? e.width / o : e.width, l = i ? e.height / i : e.height;
  return {
    width: f,
    height: l,
    top: s,
    right: c + f,
    bottom: s + l,
    left: c
  };
}
const Rv = {
  ignoreTransform: !1
};
function Gr(e, t) {
  t === void 0 && (t = Rv);
  let r = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      getComputedStyle: s
    } = et(e), {
      transform: f,
      transformOrigin: l
    } = s(e);
    f && (r = Sv(r, f, l));
  }
  const {
    top: n,
    left: o,
    width: i,
    height: a,
    bottom: u,
    right: c
  } = r;
  return {
    top: n,
    left: o,
    width: i,
    height: a,
    bottom: u,
    right: c
  };
}
function ic(e) {
  return Gr(e, {
    ignoreTransform: !0
  });
}
function Tv(e) {
  const t = e.innerWidth, r = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: r,
    width: t,
    height: r
  };
}
function Pv(e, t) {
  return t === void 0 && (t = et(e).getComputedStyle(e)), t.position === "fixed";
}
function $v(e, t) {
  t === void 0 && (t = et(e).getComputedStyle(e));
  const r = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((o) => {
    const i = t[o];
    return typeof i == "string" ? r.test(i) : !1;
  });
}
function uu(e, t) {
  const r = [];
  function n(o) {
    if (t != null && r.length >= t || !o)
      return r;
    if (iu(o) && o.scrollingElement != null && !r.includes(o.scrollingElement))
      return r.push(o.scrollingElement), r;
    if (!Vr(o) || ev(o) || r.includes(o))
      return r;
    const {
      getComputedStyle: i
    } = et(o), a = i(o);
    return o !== e && $v(o, a) && r.push(o), Pv(o, a) ? r : n(o.parentNode);
  }
  return e ? n(e) : r;
}
function gf(e) {
  const [t] = uu(e, 1);
  return t ?? null;
}
function ci(e) {
  return !Fo || !e ? null : mr(e) ? e : ou(e) ? iu(e) || e === gr(e).scrollingElement ? window : Vr(e) ? e : null : null;
}
function bf(e) {
  return mr(e) ? e.scrollX : e.scrollLeft;
}
function wf(e) {
  return mr(e) ? e.scrollY : e.scrollTop;
}
function Ci(e) {
  return {
    x: bf(e),
    y: wf(e)
  };
}
var qe;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(qe || (qe = {}));
function _f(e) {
  return !Fo || !e ? !1 : e === document.scrollingElement;
}
function Of(e) {
  const t = {
    x: 0,
    y: 0
  }, r = _f(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, n = {
    x: e.scrollWidth - r.width,
    y: e.scrollHeight - r.height
  }, o = e.scrollTop <= t.y, i = e.scrollLeft <= t.x, a = e.scrollTop >= n.y, u = e.scrollLeft >= n.x;
  return {
    isTop: o,
    isLeft: i,
    isBottom: a,
    isRight: u,
    maxScroll: n,
    minScroll: t
  };
}
const Dv = {
  x: 0.2,
  y: 0.2
};
function Cv(e, t, r, n, o) {
  let {
    top: i,
    left: a,
    right: u,
    bottom: c
  } = r;
  n === void 0 && (n = 10), o === void 0 && (o = Dv);
  const {
    isTop: s,
    isBottom: f,
    isLeft: l,
    isRight: v
  } = Of(e), d = {
    x: 0,
    y: 0
  }, g = {
    x: 0,
    y: 0
  }, y = {
    height: t.height * o.y,
    width: t.width * o.x
  };
  return !s && i <= t.top + y.height ? (d.y = qe.Backward, g.y = n * Math.abs((t.top + y.height - i) / y.height)) : !f && c >= t.bottom - y.height && (d.y = qe.Forward, g.y = n * Math.abs((t.bottom - y.height - c) / y.height)), !v && u >= t.right - y.width ? (d.x = qe.Forward, g.x = n * Math.abs((t.right - y.width - u) / y.width)) : !l && a <= t.left + y.width && (d.x = qe.Backward, g.x = n * Math.abs((t.left + y.width - a) / y.width)), {
    direction: d,
    speed: g
  };
}
function Av(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: i,
      innerHeight: a
    } = window;
    return {
      top: 0,
      left: 0,
      right: i,
      bottom: a,
      width: i,
      height: a
    };
  }
  const {
    top: t,
    left: r,
    right: n,
    bottom: o
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: r,
    right: n,
    bottom: o,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function Ef(e) {
  return e.reduce((t, r) => sr(t, Ci(r)), yt);
}
function Mv(e) {
  return e.reduce((t, r) => t + bf(r), 0);
}
function kv(e) {
  return e.reduce((t, r) => t + wf(r), 0);
}
function Iv(e, t) {
  if (t === void 0 && (t = Gr), !e)
    return;
  const {
    top: r,
    left: n,
    bottom: o,
    right: i
  } = t(e);
  gf(e) && (o <= 0 || i <= 0 || r >= window.innerHeight || n >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Nv = [["x", ["left", "right"], Mv], ["y", ["top", "bottom"], kv]];
class cu {
  constructor(t, r) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const n = uu(r), o = Ef(n);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, a, u] of Nv)
      for (const c of a)
        Object.defineProperty(this, c, {
          get: () => {
            const s = u(n), f = o[i] - s;
            return this.rect[c] + f;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class Cr {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((r) => {
        var n;
        return (n = this.target) == null ? void 0 : n.removeEventListener(...r);
      });
    }, this.target = t;
  }
  add(t, r, n) {
    var o;
    (o = this.target) == null || o.addEventListener(t, r, n), this.listeners.push([t, r, n]);
  }
}
function Lv(e) {
  const {
    EventTarget: t
  } = et(e);
  return e instanceof t ? e : gr(e);
}
function si(e, t) {
  const r = Math.abs(e.x), n = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(r ** 2 + n ** 2) > t : "x" in t && "y" in t ? r > t.x && n > t.y : "x" in t ? r > t.x : "y" in t ? n > t.y : !1;
}
var ot;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(ot || (ot = {}));
function ac(e) {
  e.preventDefault();
}
function jv(e) {
  e.stopPropagation();
}
var Pe;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter";
})(Pe || (Pe = {}));
const xf = {
  start: [Pe.Space, Pe.Enter],
  cancel: [Pe.Esc],
  end: [Pe.Space, Pe.Enter]
}, Wv = (e, t) => {
  let {
    currentCoordinates: r
  } = t;
  switch (e.code) {
    case Pe.Right:
      return {
        ...r,
        x: r.x + 25
      };
    case Pe.Left:
      return {
        ...r,
        x: r.x - 25
      };
    case Pe.Down:
      return {
        ...r,
        y: r.y + 25
      };
    case Pe.Up:
      return {
        ...r,
        y: r.y - 25
      };
  }
};
class Sf {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: r
      }
    } = t;
    this.props = t, this.listeners = new Cr(gr(r)), this.windowListeners = new Cr(et(r)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(ot.Resize, this.handleCancel), this.windowListeners.add(ot.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(ot.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: r
    } = this.props, n = t.node.current;
    n && Iv(n), r(yt);
  }
  handleKeyDown(t) {
    if (yf(t)) {
      const {
        active: r,
        context: n,
        options: o
      } = this.props, {
        keyboardCodes: i = xf,
        coordinateGetter: a = Wv,
        scrollBehavior: u = "smooth"
      } = o, {
        code: c
      } = t;
      if (i.end.includes(c)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(c)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: s
      } = n.current, f = s ? {
        x: s.left,
        y: s.top
      } : yt;
      this.referenceCoordinates || (this.referenceCoordinates = f);
      const l = a(t, {
        active: r,
        context: n.current,
        currentCoordinates: f
      });
      if (l) {
        const v = Kn(l, f), d = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: g
        } = n.current;
        for (const y of g) {
          const m = t.code, {
            isTop: h,
            isRight: O,
            isLeft: w,
            isBottom: _,
            maxScroll: b,
            minScroll: E
          } = Of(y), S = Av(y), P = {
            x: Math.min(m === Pe.Right ? S.right - S.width / 2 : S.right, Math.max(m === Pe.Right ? S.left : S.left + S.width / 2, l.x)),
            y: Math.min(m === Pe.Down ? S.bottom - S.height / 2 : S.bottom, Math.max(m === Pe.Down ? S.top : S.top + S.height / 2, l.y))
          }, D = m === Pe.Right && !O || m === Pe.Left && !w, A = m === Pe.Down && !_ || m === Pe.Up && !h;
          if (D && P.x !== l.x) {
            const $ = y.scrollLeft + v.x, F = m === Pe.Right && $ <= b.x || m === Pe.Left && $ >= E.x;
            if (F && !v.y) {
              y.scrollTo({
                left: $,
                behavior: u
              });
              return;
            }
            F ? d.x = y.scrollLeft - $ : d.x = m === Pe.Right ? y.scrollLeft - b.x : y.scrollLeft - E.x, d.x && y.scrollBy({
              left: -d.x,
              behavior: u
            });
            break;
          } else if (A && P.y !== l.y) {
            const $ = y.scrollTop + v.y, F = m === Pe.Down && $ <= b.y || m === Pe.Up && $ >= E.y;
            if (F && !v.x) {
              y.scrollTo({
                top: $,
                behavior: u
              });
              return;
            }
            F ? d.y = y.scrollTop - $ : d.y = m === Pe.Down ? y.scrollTop - b.y : y.scrollTop - E.y, d.y && y.scrollBy({
              top: -d.y,
              behavior: u
            });
            break;
          }
        }
        this.handleMove(t, sr(Kn(l, this.referenceCoordinates), d));
      }
    }
  }
  handleMove(t, r) {
    const {
      onMove: n
    } = this.props;
    t.preventDefault(), n(r);
  }
  handleEnd(t) {
    const {
      onEnd: r
    } = this.props;
    t.preventDefault(), this.detach(), r();
  }
  handleCancel(t) {
    const {
      onCancel: r
    } = this.props;
    t.preventDefault(), this.detach(), r();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
Sf.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, r) => {
    let {
      keyboardCodes: n = xf,
      onActivation: o
    } = t, {
      active: i
    } = r;
    const {
      code: a
    } = e.nativeEvent;
    if (n.start.includes(a)) {
      const u = i.activatorNode.current;
      return u && e.target !== u ? !1 : (e.preventDefault(), o == null || o({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function uc(e) {
  return Boolean(e && "distance" in e);
}
function cc(e) {
  return Boolean(e && "delay" in e);
}
class su {
  constructor(t, r, n) {
    var o;
    n === void 0 && (n = Lv(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = r;
    const {
      event: i
    } = t, {
      target: a
    } = i;
    this.props = t, this.events = r, this.document = gr(a), this.documentListeners = new Cr(this.document), this.listeners = new Cr(n), this.windowListeners = new Cr(et(a)), this.initialCoordinates = (o = Di(i)) != null ? o : yt, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), this.windowListeners.add(ot.Resize, this.handleCancel), this.windowListeners.add(ot.DragStart, ac), this.windowListeners.add(ot.VisibilityChange, this.handleCancel), this.windowListeners.add(ot.ContextMenu, ac), this.documentListeners.add(ot.Keydown, this.handleKeydown), r) {
      if (uc(r))
        return;
      if (cc(r)) {
        this.timeoutId = setTimeout(this.handleStart, r.delay);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: r
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add(ot.Click, jv, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(ot.SelectionChange, this.removeTextSelection), r(t));
  }
  handleMove(t) {
    var r;
    const {
      activated: n,
      initialCoordinates: o,
      props: i
    } = this, {
      onMove: a,
      options: {
        activationConstraint: u
      }
    } = i;
    if (!o)
      return;
    const c = (r = Di(t)) != null ? r : yt, s = Kn(o, c);
    if (!n && u) {
      if (cc(u))
        return si(s, u.tolerance) ? this.handleCancel() : void 0;
      if (uc(u))
        return u.tolerance != null && si(s, u.tolerance) ? this.handleCancel() : si(s, u.distance) ? this.handleStart() : void 0;
    }
    t.cancelable && t.preventDefault(), a(c);
  }
  handleEnd() {
    const {
      onEnd: t
    } = this.props;
    this.detach(), t();
  }
  handleCancel() {
    const {
      onCancel: t
    } = this.props;
    this.detach(), t();
  }
  handleKeydown(t) {
    t.code === Pe.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Uv = {
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class fu extends su {
  constructor(t) {
    const {
      event: r
    } = t, n = gr(r.target);
    super(t, Uv, n);
  }
}
fu.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: r
    } = e, {
      onActivation: n
    } = t;
    return !r.isPrimary || r.button !== 0 ? !1 : (n == null || n({
      event: r
    }), !0);
  }
}];
const Bv = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Ai;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Ai || (Ai = {}));
class Fv extends su {
  constructor(t) {
    super(t, Bv, gr(t.event.target));
  }
}
Fv.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: r
    } = e, {
      onActivation: n
    } = t;
    return r.button === Ai.RightClick ? !1 : (n == null || n({
      event: r
    }), !0);
  }
}];
const fi = {
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class Yv extends su {
  constructor(t) {
    super(t, fi);
  }
  static setup() {
    return window.addEventListener(fi.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(fi.move.name, t);
    };
    function t() {
    }
  }
}
Yv.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: r
    } = e, {
      onActivation: n
    } = t;
    const {
      touches: o
    } = r;
    return o.length > 1 ? !1 : (n == null || n({
      event: r
    }), !0);
  }
}];
var Ar;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Ar || (Ar = {}));
var Zn;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Zn || (Zn = {}));
function qv(e) {
  let {
    acceleration: t,
    activator: r = Ar.Pointer,
    canScroll: n,
    draggingRect: o,
    enabled: i,
    interval: a = 5,
    order: u = Zn.TreeOrder,
    pointerCoordinates: c,
    scrollableAncestors: s,
    scrollableAncestorRects: f,
    delta: l,
    threshold: v
  } = e;
  const d = zv({
    delta: l,
    disabled: !i
  }), [g, y] = tv(), m = re({
    x: 0,
    y: 0
  }), h = re({
    x: 0,
    y: 0
  }), O = Se(() => {
    switch (r) {
      case Ar.Pointer:
        return c ? {
          top: c.y,
          bottom: c.y,
          left: c.x,
          right: c.x
        } : null;
      case Ar.DraggableRect:
        return o;
    }
  }, [r, o, c]), w = re(null), _ = xe(() => {
    const E = w.current;
    if (!E)
      return;
    const S = m.current.x * h.current.x, P = m.current.y * h.current.y;
    E.scrollBy(S, P);
  }, []), b = Se(() => u === Zn.TreeOrder ? [...s].reverse() : s, [u, s]);
  se(
    () => {
      if (!i || !s.length || !O) {
        y();
        return;
      }
      for (const E of b) {
        if ((n == null ? void 0 : n(E)) === !1)
          continue;
        const S = s.indexOf(E), P = f[S];
        if (!P)
          continue;
        const {
          direction: D,
          speed: A
        } = Cv(E, P, O, t, v);
        for (const $ of ["x", "y"])
          d[$][D[$]] || (A[$] = 0, D[$] = 0);
        if (A.x > 0 || A.y > 0) {
          y(), w.current = E, g(_, a), m.current = A, h.current = D;
          return;
        }
      }
      m.current = {
        x: 0,
        y: 0
      }, h.current = {
        x: 0,
        y: 0
      }, y();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      _,
      n,
      y,
      i,
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(O),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(d),
      g,
      s,
      b,
      f,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(v)
    ]
  );
}
const Hv = {
  x: {
    [qe.Backward]: !1,
    [qe.Forward]: !1
  },
  y: {
    [qe.Backward]: !1,
    [qe.Forward]: !1
  }
};
function zv(e) {
  let {
    delta: t,
    disabled: r
  } = e;
  const n = $i(t);
  return Xr((o) => {
    if (r || !n || !o)
      return Hv;
    const i = {
      x: Math.sign(t.x - n.x),
      y: Math.sign(t.y - n.y)
    };
    return {
      x: {
        [qe.Backward]: o.x[qe.Backward] || i.x === -1,
        [qe.Forward]: o.x[qe.Forward] || i.x === 1
      },
      y: {
        [qe.Backward]: o.y[qe.Backward] || i.y === -1,
        [qe.Forward]: o.y[qe.Forward] || i.y === 1
      }
    };
  }, [r, t, n]);
}
function Vv(e, t) {
  const r = t !== null ? e.get(t) : void 0, n = r ? r.node.current : null;
  return Xr((o) => {
    var i;
    return t === null ? null : (i = n ?? o) != null ? i : null;
  }, [n, t]);
}
function Xv(e, t) {
  return Se(() => e.reduce((r, n) => {
    const {
      sensor: o
    } = n, i = o.activators.map((a) => ({
      eventName: a.eventName,
      handler: t(a.handler, n)
    }));
    return [...r, ...i];
  }, []), [e, t]);
}
var Br;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Br || (Br = {}));
var Mi;
(function(e) {
  e.Optimized = "optimized";
})(Mi || (Mi = {}));
const sc = /* @__PURE__ */ new Map();
function Gv(e, t) {
  let {
    dragging: r,
    dependencies: n,
    config: o
  } = t;
  const [i, a] = ye(null), {
    frequency: u,
    measure: c,
    strategy: s
  } = o, f = re(e), l = m(), v = Ur(l), d = xe(function(h) {
    h === void 0 && (h = []), !v.current && a((O) => O === null ? h : O.concat(h.filter((w) => !O.includes(w))));
  }, [v]), g = re(null), y = Xr((h) => {
    if (l && !r)
      return sc;
    if (!h || h === sc || f.current !== e || i != null) {
      const O = /* @__PURE__ */ new Map();
      for (let w of e) {
        if (!w)
          continue;
        if (i && i.length > 0 && !i.includes(w.id) && w.rect.current) {
          O.set(w.id, w.rect.current);
          continue;
        }
        const _ = w.node.current, b = _ ? new cu(c(_), _) : null;
        w.rect.current = b, b && O.set(w.id, b);
      }
      return O;
    }
    return h;
  }, [e, i, r, l, c]);
  return se(() => {
    f.current = e;
  }, [e]), se(
    () => {
      l || d();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r, l]
  ), se(
    () => {
      i && i.length > 0 && a(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), se(
    () => {
      l || typeof u != "number" || g.current !== null || (g.current = setTimeout(() => {
        d(), g.current = null;
      }, u));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [u, l, d, ...n]
  ), {
    droppableRects: y,
    measureDroppableContainers: d,
    measuringScheduled: i != null
  };
  function m() {
    switch (s) {
      case Br.Always:
        return !1;
      case Br.BeforeDragging:
        return r;
      default:
        return !r;
    }
  }
}
function Rf(e, t) {
  return Xr((r) => e ? r || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function Qv(e, t) {
  return Rf(e, t);
}
function Kv(e) {
  let {
    callback: t,
    disabled: r
  } = e;
  const n = au(t), o = Se(() => {
    if (r || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(n);
  }, [n, r]);
  return se(() => () => o == null ? void 0 : o.disconnect(), [o]), o;
}
function qo(e) {
  let {
    callback: t,
    disabled: r
  } = e;
  const n = au(t), o = Se(
    () => {
      if (r || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: i
      } = window;
      return new i(n);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  );
  return se(() => () => o == null ? void 0 : o.disconnect(), [o]), o;
}
function Jv(e) {
  return new cu(Gr(e), e);
}
function fc(e, t, r) {
  t === void 0 && (t = Jv);
  const [n, o] = za(u, null), i = Kv({
    callback(c) {
      if (e)
        for (const s of c) {
          const {
            type: f,
            target: l
          } = s;
          if (f === "childList" && l instanceof HTMLElement && l.contains(e)) {
            o();
            break;
          }
        }
    }
  }), a = qo({
    callback: o
  });
  return St(() => {
    o(), e ? (a == null || a.observe(e), i == null || i.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a == null || a.disconnect(), i == null || i.disconnect());
  }, [e]), n;
  function u(c) {
    if (!e)
      return null;
    if (e.isConnected === !1) {
      var s;
      return (s = c ?? r) != null ? s : null;
    }
    const f = t(e);
    return JSON.stringify(c) === JSON.stringify(f) ? c : f;
  }
}
function Zv(e) {
  const t = Rf(e);
  return mf(e, t);
}
const lc = [];
function ey(e) {
  const t = re(e), r = Xr((n) => e ? n && n !== lc && e && t.current && e.parentNode === t.current.parentNode ? n : uu(e) : lc, [e]);
  return se(() => {
    t.current = e;
  }, [e]), r;
}
function ty(e) {
  const [t, r] = ye(null), n = re(e), o = xe((i) => {
    const a = ci(i.target);
    a && r((u) => u ? (u.set(a, Ci(a)), new Map(u)) : null);
  }, []);
  return se(() => {
    const i = n.current;
    if (e !== i) {
      a(i);
      const u = e.map((c) => {
        const s = ci(c);
        return s ? (s.addEventListener("scroll", o, {
          passive: !0
        }), [s, Ci(s)]) : null;
      }).filter((c) => c != null);
      r(u.length ? new Map(u) : null), n.current = e;
    }
    return () => {
      a(e), a(i);
    };
    function a(u) {
      u.forEach((c) => {
        const s = ci(c);
        s == null || s.removeEventListener("scroll", o);
      });
    }
  }, [o, e]), Se(() => e.length ? t ? Array.from(t.values()).reduce((i, a) => sr(i, a), yt) : Ef(e) : yt, [e, t]);
}
function dc(e, t) {
  t === void 0 && (t = []);
  const r = re(null);
  return se(
    () => {
      r.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), se(() => {
    const n = e !== yt;
    n && !r.current && (r.current = e), !n && r.current && (r.current = null);
  }, [e]), r.current ? Kn(e, r.current) : yt;
}
function ry(e) {
  se(
    () => {
      if (!Fo)
        return;
      const t = e.map((r) => {
        let {
          sensor: n
        } = r;
        return n.setup == null ? void 0 : n.setup();
      });
      return () => {
        for (const r of t)
          r == null || r();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((t) => {
      let {
        sensor: r
      } = t;
      return r;
    })
  );
}
function ny(e, t) {
  return Se(() => e.reduce((r, n) => {
    let {
      eventName: o,
      handler: i
    } = n;
    return r[o] = (a) => {
      i(a, t);
    }, r;
  }, {}), [e, t]);
}
function Tf(e) {
  return Se(() => e ? Tv(e) : null, [e]);
}
const li = [];
function oy(e, t) {
  t === void 0 && (t = Gr);
  const [r] = e, n = Tf(r ? et(r) : null), [o, i] = za(u, li), a = qo({
    callback: i
  });
  return e.length > 0 && o === li && i(), St(() => {
    e.length ? e.forEach((c) => a == null ? void 0 : a.observe(c)) : (a == null || a.disconnect(), i());
  }, [e]), o;
  function u() {
    return e.length ? e.map((c) => _f(c) ? n : new cu(t(c), c)) : li;
  }
}
function iy(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return Vr(t) ? t : e;
}
function ay(e) {
  let {
    measure: t
  } = e;
  const [r, n] = ye(null), o = xe((s) => {
    for (const {
      target: f
    } of s)
      if (Vr(f)) {
        n((l) => {
          const v = t(f);
          return l ? {
            ...l,
            width: v.width,
            height: v.height
          } : v;
        });
        break;
      }
  }, [t]), i = qo({
    callback: o
  }), a = xe((s) => {
    const f = iy(s);
    i == null || i.disconnect(), f && (i == null || i.observe(f)), n(f ? t(f) : null);
  }, [t, i]), [u, c] = Qn(a);
  return Se(() => ({
    nodeRef: u,
    rect: r,
    setRef: c
  }), [r, u, c]);
}
const uy = [{
  sensor: fu,
  options: {}
}, {
  sensor: Sf,
  options: {}
}], cy = {
  current: {}
}, cn = {
  draggable: {
    measure: ic
  },
  droppable: {
    measure: ic,
    strategy: Br.WhileDragging,
    frequency: Mi.Optimized
  },
  dragOverlay: {
    measure: Gr
  }
};
class Mr extends Map {
  get(t) {
    var r;
    return t != null && (r = super.get(t)) != null ? r : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let {
        disabled: r
      } = t;
      return !r;
    });
  }
  getNodeFor(t) {
    var r, n;
    return (r = (n = this.get(t)) == null ? void 0 : n.node.current) != null ? r : void 0;
  }
}
const sy = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Mr(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Jn
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: cn,
  measureDroppableContainers: Jn,
  windowRect: null,
  measuringScheduled: !1
}, fy = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Jn,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Jn
}, Ho = /* @__PURE__ */ rr(fy), ly = /* @__PURE__ */ rr(sy);
function dy() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new Mr()
    }
  };
}
function py(e, t) {
  switch (t.type) {
    case Fe.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case Fe.DragMove:
      return e.draggable.active ? {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: t.coordinates.x - e.draggable.initialCoordinates.x,
            y: t.coordinates.y - e.draggable.initialCoordinates.y
          }
        }
      } : e;
    case Fe.DragEnd:
    case Fe.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case Fe.RegisterDroppable: {
      const {
        element: r
      } = t, {
        id: n
      } = r, o = new Mr(e.droppable.containers);
      return o.set(n, r), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: o
        }
      };
    }
    case Fe.SetDroppableDisabled: {
      const {
        id: r,
        key: n,
        disabled: o
      } = t, i = e.droppable.containers.get(r);
      if (!i || n !== i.key)
        return e;
      const a = new Mr(e.droppable.containers);
      return a.set(r, {
        ...i,
        disabled: o
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a
        }
      };
    }
    case Fe.UnregisterDroppable: {
      const {
        id: r,
        key: n
      } = t, o = e.droppable.containers.get(r);
      if (!o || n !== o.key)
        return e;
      const i = new Mr(e.droppable.containers);
      return i.delete(r), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    default:
      return e;
  }
}
function vy(e) {
  let {
    disabled: t
  } = e;
  const {
    active: r,
    activatorEvent: n,
    draggableNodes: o
  } = xt(Ho), i = $i(n), a = $i(r == null ? void 0 : r.id);
  return se(() => {
    if (!t && !n && i && a != null) {
      if (!yf(i) || document.activeElement === i.target)
        return;
      const u = o.get(a);
      if (!u)
        return;
      const {
        activatorNode: c,
        node: s
      } = u;
      if (!c.current && !s.current)
        return;
      requestAnimationFrame(() => {
        for (const f of [c.current, s.current]) {
          if (!f)
            continue;
          const l = ov(f);
          if (l) {
            l.focus();
            break;
          }
        }
      });
    }
  }, [n, t, o, a, i]), null;
}
function yy(e, t) {
  let {
    transform: r,
    ...n
  } = t;
  return e != null && e.length ? e.reduce((o, i) => i({
    transform: o,
    ...n
  }), r) : r;
}
function hy(e) {
  return Se(
    () => ({
      draggable: {
        ...cn.draggable,
        ...e == null ? void 0 : e.draggable
      },
      droppable: {
        ...cn.droppable,
        ...e == null ? void 0 : e.droppable
      },
      dragOverlay: {
        ...cn.dragOverlay,
        ...e == null ? void 0 : e.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e == null ? void 0 : e.draggable, e == null ? void 0 : e.droppable, e == null ? void 0 : e.dragOverlay]
  );
}
function my(e) {
  let {
    activeNode: t,
    measure: r,
    initialRect: n,
    config: o = !0
  } = e;
  const i = re(!1), {
    x: a,
    y: u
  } = typeof o == "boolean" ? {
    x: o,
    y: o
  } : o;
  St(() => {
    if (!a && !u || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !n)
      return;
    const s = t == null ? void 0 : t.node.current;
    if (!s || s.isConnected === !1)
      return;
    const f = r(s), l = mf(f, n);
    if (a || (l.x = 0), u || (l.y = 0), i.current = !0, Math.abs(l.x) > 0 || Math.abs(l.y) > 0) {
      const v = gf(s);
      v && v.scrollBy({
        top: l.y,
        left: l.x
      });
    }
  }, [t, a, u, n, r]);
}
const Pf = /* @__PURE__ */ rr({
  ...yt,
  scaleX: 1,
  scaleY: 1
});
var At;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(At || (At = {}));
const gy = /* @__PURE__ */ ul(function(t) {
  var r, n, o, i;
  let {
    id: a,
    accessibility: u,
    autoScroll: c = !0,
    children: s,
    sensors: f = uy,
    collisionDetection: l = wv,
    measuring: v,
    modifiers: d,
    ...g
  } = t;
  const y = za(py, void 0, dy), [m, h] = y, [O, w] = lv(), [_, b] = ye(At.Uninitialized), E = _ === At.Initialized, {
    draggable: {
      active: S,
      nodes: P,
      translate: D
    },
    droppable: {
      containers: A
    }
  } = m, $ = S ? P.get(S) : null, F = re({
    initial: null,
    translated: null
  }), k = Se(() => {
    var Ce;
    return S != null ? {
      id: S,
      // It's possible for the active node to unmount while dragging
      data: (Ce = $ == null ? void 0 : $.data) != null ? Ce : cy,
      rect: F
    } : null;
  }, [S, $]), j = re(null), [U, L] = ye(null), [G, pe] = ye(null), he = Ur(g, Object.values(g)), T = Yo("DndDescribedBy", a), M = Se(() => A.getEnabled(), [A]), V = hy(v), {
    droppableRects: Q,
    measureDroppableContainers: X,
    measuringScheduled: ee
  } = Gv(M, {
    dragging: E,
    dependencies: [D.x, D.y],
    config: V.droppable
  }), Y = Vv(P, S), J = Se(() => G ? Di(G) : null, [G]), W = Zr(), N = Qv(Y, V.draggable.measure);
  my({
    activeNode: S ? P.get(S) : null,
    config: W.layoutShiftCompensation,
    initialRect: N,
    measure: V.draggable.measure
  });
  const x = fc(Y, V.draggable.measure, N), H = fc(Y ? Y.parentElement : null), R = re({
    activatorEvent: null,
    active: null,
    activeNode: Y,
    collisionRect: null,
    collisions: null,
    droppableRects: Q,
    draggableNodes: P,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: A,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), ne = A.getNodeFor((r = R.current.over) == null ? void 0 : r.id), te = ay({
    measure: V.dragOverlay.measure
  }), oe = (n = te.nodeRef.current) != null ? n : Y, ie = E ? (o = te.rect) != null ? o : x : null, ce = Boolean(te.nodeRef.current && te.rect), fe = Zv(ce ? null : x), K = Tf(oe ? et(oe) : null), q = ey(E ? ne ?? Y : null), Z = oy(q), z = yy(d, {
    transform: {
      x: D.x - fe.x,
      y: D.y - fe.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: G,
    active: k,
    activeNodeRect: x,
    containerNodeRect: H,
    draggingNodeRect: ie,
    over: R.current.over,
    overlayNodeRect: te.rect,
    scrollableAncestors: q,
    scrollableAncestorRects: Z,
    windowRect: K
  }), I = J ? sr(J, D) : null, le = ty(q), we = dc(le), ke = dc(le, [x]), Ue = sr(z, we), Ie = ie ? Ev(ie, z) : null, st = k && Ie ? l({
    active: k,
    collisionRect: Ie,
    droppableRects: Q,
    droppableContainers: M,
    pointerCoordinates: I
  }) : null, Tt = gv(st, "id"), [Re, tt] = ye(null), ft = ce ? z : sr(z, ke), _t = _v(ft, (i = Re == null ? void 0 : Re.rect) != null ? i : null, x), nr = xe(
    (Ce, He) => {
      let {
        sensor: ze,
        options: lt
      } = He;
      if (j.current == null)
        return;
      const Ge = P.get(j.current);
      if (!Ge)
        return;
      const Qe = Ce.nativeEvent, rt = new ze({
        active: j.current,
        activeNode: Ge,
        event: Qe,
        options: lt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: R,
        onStart(Ke) {
          const Ut = j.current;
          if (Ut == null)
            return;
          const Bt = P.get(Ut);
          if (!Bt)
            return;
          const {
            onDragStart: Ft
          } = he.current, or = {
            active: {
              id: Ut,
              data: Bt.data,
              rect: F
            }
          };
          _r(() => {
            Ft == null || Ft(or), b(At.Initializing), h({
              type: Fe.DragStart,
              initialCoordinates: Ke,
              active: Ut
            }), O({
              type: "onDragStart",
              event: or
            });
          });
        },
        onMove(Ke) {
          h({
            type: Fe.DragMove,
            coordinates: Ke
          });
        },
        onEnd: Ot(Fe.DragEnd),
        onCancel: Ot(Fe.DragCancel)
      });
      _r(() => {
        L(rt), pe(Ce.nativeEvent);
      });
      function Ot(Ke) {
        return async function() {
          const {
            active: Bt,
            collisions: Ft,
            over: or,
            scrollAdjustedTranslate: en
          } = R.current;
          let Yt = null;
          if (Bt && en) {
            const {
              cancelDrop: qt
            } = he.current;
            Yt = {
              activatorEvent: Qe,
              active: Bt,
              collisions: Ft,
              delta: en,
              over: or
            }, Ke === Fe.DragEnd && typeof qt == "function" && await Promise.resolve(qt(Yt)) && (Ke = Fe.DragCancel);
          }
          j.current = null, _r(() => {
            h({
              type: Ke
            }), b(At.Uninitialized), tt(null), L(null), pe(null);
            const qt = Ke === Fe.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Yt) {
              const p = he.current[qt];
              p == null || p(Yt), O({
                type: qt,
                event: Yt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [P]
  ), Wt = xe((Ce, He) => (ze, lt) => {
    const Ge = ze.nativeEvent, Qe = P.get(lt);
    if (
      // Another sensor is already instantiating
      j.current !== null || // No active draggable
      !Qe || // Event has already been captured
      Ge.dndKit || Ge.defaultPrevented
    )
      return;
    const rt = {
      active: Qe
    };
    Ce(ze, He.options, rt) === !0 && (Ge.dndKit = {
      capturedBy: He.sensor
    }, j.current = lt, nr(ze, He));
  }, [P, nr]), Jr = Xv(f, Wt);
  ry(f), St(() => {
    x && _ === At.Initializing && b(At.Initialized);
  }, [x, _]), se(
    () => {
      const {
        onDragMove: Ce
      } = he.current, {
        active: He,
        activatorEvent: ze,
        collisions: lt,
        over: Ge
      } = R.current;
      if (!He || !ze)
        return;
      const Qe = {
        active: He,
        activatorEvent: ze,
        collisions: lt,
        delta: {
          x: Ue.x,
          y: Ue.y
        },
        over: Ge
      };
      _r(() => {
        Ce == null || Ce(Qe), O({
          type: "onDragMove",
          event: Qe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Ue.x, Ue.y]
  ), se(
    () => {
      const {
        active: Ce,
        activatorEvent: He,
        collisions: ze,
        droppableContainers: lt,
        scrollAdjustedTranslate: Ge
      } = R.current;
      if (!Ce || j.current == null || !He || !Ge)
        return;
      const {
        onDragOver: Qe
      } = he.current, rt = lt.get(Tt), Ot = rt && rt.rect.current ? {
        id: rt.id,
        rect: rt.rect.current,
        data: rt.data,
        disabled: rt.disabled
      } : null, Ke = {
        active: Ce,
        activatorEvent: He,
        collisions: ze,
        delta: {
          x: Ge.x,
          y: Ge.y
        },
        over: Ot
      };
      _r(() => {
        tt(Ot), Qe == null || Qe(Ke), O({
          type: "onDragOver",
          event: Ke
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Tt]
  ), St(() => {
    R.current = {
      activatorEvent: G,
      active: k,
      activeNode: Y,
      collisionRect: Ie,
      collisions: st,
      droppableRects: Q,
      draggableNodes: P,
      draggingNode: oe,
      draggingNodeRect: ie,
      droppableContainers: A,
      over: Re,
      scrollableAncestors: q,
      scrollAdjustedTranslate: Ue
    }, F.current = {
      initial: ie,
      translated: Ie
    };
  }, [k, Y, st, Ie, P, oe, ie, Q, A, Re, q, Ue]), qv({
    ...W,
    delta: D,
    draggingRect: Ie,
    pointerCoordinates: I,
    scrollableAncestors: q,
    scrollableAncestorRects: Z
  });
  const Xo = Se(() => ({
    active: k,
    activeNode: Y,
    activeNodeRect: x,
    activatorEvent: G,
    collisions: st,
    containerNodeRect: H,
    dragOverlay: te,
    draggableNodes: P,
    droppableContainers: A,
    droppableRects: Q,
    over: Re,
    measureDroppableContainers: X,
    scrollableAncestors: q,
    scrollableAncestorRects: Z,
    measuringConfiguration: V,
    measuringScheduled: ee,
    windowRect: K
  }), [k, Y, x, G, st, H, te, P, A, Q, Re, X, q, Z, V, ee, K]), wr = Se(() => ({
    activatorEvent: G,
    activators: Jr,
    active: k,
    activeNodeRect: x,
    ariaDescribedById: {
      draggable: T
    },
    dispatch: h,
    draggableNodes: P,
    over: Re,
    measureDroppableContainers: X
  }), [G, Jr, k, x, h, T, P, Re, X]);
  return $e.createElement(hf.Provider, {
    value: w
  }, $e.createElement(Ho.Provider, {
    value: wr
  }, $e.createElement(ly.Provider, {
    value: Xo
  }, $e.createElement(Pf.Provider, {
    value: _t
  }, s)), $e.createElement(vy, {
    disabled: (u == null ? void 0 : u.restoreFocus) === !1
  })), $e.createElement(vv, {
    ...u,
    hiddenTextDescribedById: T
  }));
  function Zr() {
    const Ce = (U == null ? void 0 : U.autoScrollEnabled) === !1, He = typeof c == "object" ? c.enabled === !1 : c === !1, ze = E && !Ce && !He;
    return typeof c == "object" ? {
      ...c,
      enabled: ze
    } : {
      enabled: ze
    };
  }
}), by = /* @__PURE__ */ rr(null), pc = "button", wy = "Droppable";
function _y(e) {
  let {
    id: t,
    data: r,
    disabled: n = !1,
    attributes: o
  } = e;
  const i = Yo(wy), {
    activators: a,
    activatorEvent: u,
    active: c,
    activeNodeRect: s,
    ariaDescribedById: f,
    draggableNodes: l,
    over: v
  } = xt(Ho), {
    role: d = pc,
    roleDescription: g = "draggable",
    tabIndex: y = 0
  } = o ?? {}, m = (c == null ? void 0 : c.id) === t, h = xt(m ? Pf : by), [O, w] = Qn(), [_, b] = Qn(), E = ny(a, t), S = Ur(r);
  St(
    () => (l.set(t, {
      id: t,
      key: i,
      node: O,
      activatorNode: _,
      data: S
    }), () => {
      const D = l.get(t);
      D && D.key === i && l.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l, t]
  );
  const P = Se(() => ({
    role: d,
    tabIndex: y,
    "aria-disabled": n,
    "aria-pressed": m && d === pc ? !0 : void 0,
    "aria-roledescription": g,
    "aria-describedby": f.draggable
  }), [n, d, y, m, g, f.draggable]);
  return {
    active: c,
    activatorEvent: u,
    activeNodeRect: s,
    attributes: P,
    isDragging: m,
    listeners: n ? void 0 : E,
    node: O,
    over: v,
    setNodeRef: w,
    setActivatorNodeRef: b,
    transform: h
  };
}
const Oy = "Droppable", Ey = {
  timeout: 25
};
function xy(e) {
  let {
    data: t,
    disabled: r = !1,
    id: n,
    resizeObserverConfig: o
  } = e;
  const i = Yo(Oy), {
    active: a,
    dispatch: u,
    over: c,
    measureDroppableContainers: s
  } = xt(Ho), f = re({
    disabled: r
  }), l = re(!1), v = re(null), d = re(null), {
    disabled: g,
    updateMeasurementsFor: y,
    timeout: m
  } = {
    ...Ey,
    ...o
  }, h = Ur(y ?? n), O = xe(
    () => {
      if (!l.current) {
        l.current = !0;
        return;
      }
      d.current != null && clearTimeout(d.current), d.current = setTimeout(() => {
        s(Array.isArray(h.current) ? h.current : [h.current]), d.current = null;
      }, m);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [m]
  ), w = qo({
    callback: O,
    disabled: g || !a
  }), _ = xe((P, D) => {
    w && (D && (w.unobserve(D), l.current = !1), P && w.observe(P));
  }, [w]), [b, E] = Qn(_), S = Ur(t);
  return se(() => {
    !w || !b.current || (w.disconnect(), l.current = !1, w.observe(b.current));
  }, [b, w]), St(
    () => (u({
      type: Fe.RegisterDroppable,
      element: {
        id: n,
        key: i,
        disabled: r,
        node: b,
        rect: v,
        data: S
      }
    }), () => u({
      type: Fe.UnregisterDroppable,
      key: i,
      id: n
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  ), se(() => {
    r !== f.current.disabled && (u({
      type: Fe.SetDroppableDisabled,
      id: n,
      key: i,
      disabled: r
    }), f.current.disabled = r);
  }, [n, i, r, u]), {
    active: a,
    rect: v,
    isOver: (c == null ? void 0 : c.id) === n,
    node: b,
    over: c,
    setNodeRef: E
  };
}
function Sy(e, t, r) {
  const n = [];
  for (let o = 0; o < t - e; o++)
    for (let i = 0; i < 60; i += r) {
      const a = o + e;
      n.push({
        hour: `${a > 9 ? a : "0" + a}`,
        minute: `${i > 9 ? i : "0" + i}`
      });
    }
  return n;
}
function Ry({
  children: e,
  onClick: t,
  index: r,
  row: n,
  pair: o
}) {
  const i = Kp(), a = (c) => {
    gt.getState().setFocusedCapacity(c ? r : -1);
  }, u = re(null);
  return /* @__PURE__ */ ae(Lo, { children: /* @__PURE__ */ Ye(
    "div",
    {
      className: "data-cell",
      onMouseEnter: () => a(!0),
      onMouseLeave: () => a(!1),
      children: [
        /* @__PURE__ */ ae(
          "div",
          {
            className: "data-cell-content" + (i == r ? " focus" : ""),
            ref: u,
            onClick: t,
            id: `data-cell-${r}-${n}`,
            style: { backgroundColor: o ? "#f7f7f7" : "white" }
          }
        ),
        e
      ]
    }
  ) });
}
const Ty = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiIGNsYXNzPSJiaSBiaS1sb2NrIiB2aWV3Qm94PSIwIDAgMTYgMTYiPg0KICA8cGF0aCBkPSJNOCAxYTIgMiAwIDAgMSAyIDJ2NEg2VjNhMiAyIDAgMCAxIDItMnptMyA2VjNhMyAzIDAgMCAwLTYgMHY0YTIgMiAwIDAgMC0yIDJ2NWEyIDIgMCAwIDAgMiAyaDZhMiAyIDAgMCAwIDItMlY5YTIgMiAwIDAgMC0yLTJ6TTUgOGg2YTEgMSAwIDAgMSAxIDF2NWExIDEgMCAwIDEtMSAxSDVhMSAxIDAgMCAxLTEtMVY5YTEgMSAwIDAgMSAxLTF6Ii8+DQo8L3N2Zz4=", Py = (e) => e != null && e.transform ? {
  ...e,
  transform: `translateY(${e.transform.split(",")[1]}`
} : e;
function $y({
  factor: e,
  onResized: t,
  reservation: r,
  modal: n,
  onDoubleClick: o
}) {
  const i = re(null), a = re(null), [u, c] = ye(!1), s = re(0), f = re(e), l = re(0);
  se(() => {
    var F, k;
    const b = ((k = (F = document.querySelector(".table-item")) == null ? void 0 : F.getClientRects()[0]) == null ? void 0 : k.width) ?? 0;
    s.current = b * e, l.current = b, c(!u);
    function E() {
      var U, L;
      const j = ((L = (U = document.querySelector(".table-item")) == null ? void 0 : U.getClientRects()[0]) == null ? void 0 : L.width) ?? 0;
      l.current = j, s.current = j * f.current, c((G) => !G);
    }
    if (window.addEventListener("resize", E), r.isLocked)
      return;
    const { current: S } = i, { current: P } = a;
    if (!S || !P)
      return;
    const D = (j) => {
      gt.getState().setIsResizing(!0);
      const { clientX: U } = j, { left: L } = S.getBoundingClientRect(), G = U - L;
      G < 0 || (s.current = G, S.style.width = `${G}px`);
    }, A = () => {
      document.body.style.cursor = "default";
      let j = Math.round(s.current / l.current) * l.current;
      j = j == 0 ? l.current : j, s.current = j, f.current = j / l.current, t == null || t(j / l.current), gt.getState().setIsResizing(!1), S.style.width = `${j}px`, document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", A);
    }, $ = (j) => {
      var U;
      j.preventDefault(), document.body.style.cursor = "ew-resize", document.addEventListener("mousemove", D), document.addEventListener("mouseup", A), (U = i.current) == null || U.classList.remove("transition");
    };
    return P.addEventListener("mousedown", $), () => {
      P.removeEventListener("mousedown", $), document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", A), window.removeEventListener("resize", E);
    };
  }, [e]);
  const [v, d] = ye(!1);
  function g() {
    d(!1);
  }
  const { attributes: y, listeners: m, setNodeRef: h, transform: O, isDragging: w } = _y({
    id: r.id,
    data: r
  }), _ = O ? {
    transform: `translate3d(${O.x}px, ${O.y}px, 0)`
  } : void 0;
  return /* @__PURE__ */ Ye(Lo, { children: [
    /* @__PURE__ */ Ye(
      "div",
      {
        className: "dragable-resizable-item",
        id: `reservation-${r.id}`,
        ref: (b) => {
          i.current = b, !r.isLocked && h(b);
        },
        onClick: (b) => {
          b.detail === 2 && (o == null || o());
        },
        style: {
          width: `${s.current}px`,
          ...r.isLocked ? {} : Py(_),
          backgroundColor: r.color ?? "#b95501"
        },
        children: [
          r.isLocked && /* @__PURE__ */ ae("img", { src: Ty }),
          /* @__PURE__ */ ae(
            "span",
            {
              ...m,
              ...y,
              onClick: () => {
                d(!v);
              },
              children: r.name
            }
          ),
          !r.isLocked && /* @__PURE__ */ ae("div", { className: "resize-cursor", ref: a, children: /* @__PURE__ */ ae("div", {}) })
        ]
      }
    ),
    n && /* @__PURE__ */ ae(
      lf,
      {
        target: i.current,
        show: v && !w,
        placement: "bottom",
        children: ({ placement: b, arrowProps: E, show: S, popper: P, ref: D, ...A }) => /* @__PURE__ */ ae(pf, { onClose: g, props: A, ref: D, children: n(g) })
      }
    )
  ] });
}
function Dy({
  table: e,
  row: t,
  rangeList: r,
  onReservationChange: n,
  onEmptyCellClick: o,
  reservationModal: i,
  onReservationClick: a
}) {
  const { setNodeRef: u, isOver: c } = xy({
    id: e.id.toString()
  });
  return /* @__PURE__ */ Ye("tr", { className: "room-table", ref: u, children: [
    /* @__PURE__ */ Ye("td", { style: { fontWeight: c ? 700 : void 0 }, children: [
      e.name,
      "(" + e.capacity + ")"
    ] }),
    r.map(({ hour: s, minute: f }, l) => {
      const v = e.reservations.find(
        ({ start: y }) => y == `${s}:${f}`
      );
      let d, g;
      return v && (d = v.end.split(":"), g = r.findIndex(
        ({ hour: y, minute: m }) => y == (d == null ? void 0 : d[0]) && m == (d == null ? void 0 : d[1])
      ) - l), /* @__PURE__ */ ae("td", { className: "table-item", children: /* @__PURE__ */ ae(
        Ry,
        {
          index: l,
          pair: Math.floor(l / 4) % 2 == 0,
          row: t,
          onClick: () => o == null ? void 0 : o(l),
          children: v && /* @__PURE__ */ ae(
            $y,
            {
              onDoubleClick: () => a == null ? void 0 : a(v),
              modal: (y) => i == null ? void 0 : i(v, y),
              reservation: v,
              factor: g ?? 1,
              onResized: (y) => {
                const m = r[l + y];
                n == null || n({
                  type: "resized",
                  newEndTime: `${m.hour}:${m.minute}`,
                  reservation: v
                });
              }
            }
          )
        }
      ) }, l);
    })
  ] }, e.id);
}
function Qr(e) {
  return e.split("-")[1];
}
function lu(e) {
  return e === "y" ? "height" : "width";
}
function Jt(e) {
  return e.split("-")[0];
}
function Kr(e) {
  return ["top", "bottom"].includes(Jt(e)) ? "x" : "y";
}
function vc(e, t, r) {
  let { reference: n, floating: o } = e;
  const i = n.x + n.width / 2 - o.width / 2, a = n.y + n.height / 2 - o.height / 2, u = Kr(t), c = lu(u), s = n[c] / 2 - o[c] / 2, f = u === "x";
  let l;
  switch (Jt(t)) {
    case "top":
      l = { x: i, y: n.y - o.height };
      break;
    case "bottom":
      l = { x: i, y: n.y + n.height };
      break;
    case "right":
      l = { x: n.x + n.width, y: a };
      break;
    case "left":
      l = { x: n.x - o.width, y: a };
      break;
    default:
      l = { x: n.x, y: n.y };
  }
  switch (Qr(t)) {
    case "start":
      l[u] -= s * (r && f ? -1 : 1);
      break;
    case "end":
      l[u] += s * (r && f ? -1 : 1);
  }
  return l;
}
function $f(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function kr(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Df(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: o, platform: i, rects: a, elements: u, strategy: c } = e, { boundary: s = "clippingAncestors", rootBoundary: f = "viewport", elementContext: l = "floating", altBoundary: v = !1, padding: d = 0 } = t, g = $f(d), y = u[v ? l === "floating" ? "reference" : "floating" : l], m = kr(await i.getClippingRect({ element: (r = await (i.isElement == null ? void 0 : i.isElement(y))) == null || r ? y : y.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(u.floating)), boundary: s, rootBoundary: f, strategy: c })), h = l === "floating" ? { ...a.floating, x: n, y: o } : a.reference, O = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u.floating)), w = await (i.isElement == null ? void 0 : i.isElement(O)) && await (i.getScale == null ? void 0 : i.getScale(O)) || { x: 1, y: 1 }, _ = kr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: h, offsetParent: O, strategy: c }) : h);
  return { top: (m.top - _.top + g.top) / w.y, bottom: (_.bottom - m.bottom + g.bottom) / w.y, left: (m.left - _.left + g.left) / w.x, right: (_.right - m.right + g.right) / w.x };
}
const Cy = Math.min, Ay = Math.max;
function ki(e, t, r) {
  return Ay(e, Cy(t, r));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const My = { left: "right", right: "left", bottom: "top", top: "bottom" };
function eo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => My[t]);
}
function ky(e, t, r) {
  r === void 0 && (r = !1);
  const n = Qr(e), o = Kr(e), i = lu(o);
  let a = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = eo(a)), { main: a, cross: eo(a) };
}
const Iy = { start: "end", end: "start" };
function di(e) {
  return e.replace(/start|end/g, (t) => Iy[t]);
}
const Ny = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r;
    const { placement: n, middlewareData: o, rects: i, initialPlacement: a, platform: u, elements: c } = t, { mainAxis: s = !0, crossAxis: f = !0, fallbackPlacements: l, fallbackStrategy: v = "bestFit", fallbackAxisSideDirection: d = "none", flipAlignment: g = !0, ...y } = e, m = Jt(n), h = Jt(a) === a, O = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), w = l || (h || !g ? [eo(a)] : function($) {
      const F = eo($);
      return [di($), F, di(F)];
    }(a));
    l || d === "none" || w.push(...function($, F, k, j) {
      const U = Qr($);
      let L = function(G, pe, he) {
        const T = ["left", "right"], M = ["right", "left"], V = ["top", "bottom"], Q = ["bottom", "top"];
        switch (G) {
          case "top":
          case "bottom":
            return he ? pe ? M : T : pe ? T : M;
          case "left":
          case "right":
            return pe ? V : Q;
          default:
            return [];
        }
      }(Jt($), k === "start", j);
      return U && (L = L.map((G) => G + "-" + U), F && (L = L.concat(L.map(di)))), L;
    }(a, g, d, O));
    const _ = [a, ...w], b = await Df(t, y), E = [];
    let S = ((r = o.flip) == null ? void 0 : r.overflows) || [];
    if (s && E.push(b[m]), f) {
      const { main: $, cross: F } = ky(n, i, O);
      E.push(b[$], b[F]);
    }
    if (S = [...S, { placement: n, overflows: E }], !E.every(($) => $ <= 0)) {
      var P, D;
      const $ = (((P = o.flip) == null ? void 0 : P.index) || 0) + 1, F = _[$];
      if (F)
        return { data: { index: $, overflows: S }, reset: { placement: F } };
      let k = (D = S.find((j) => j.overflows[0] <= 0)) == null ? void 0 : D.placement;
      if (!k)
        switch (v) {
          case "bestFit": {
            var A;
            const j = (A = S.map((U) => [U.placement, U.overflows.filter((L) => L > 0).reduce((L, G) => L + G, 0)]).sort((U, L) => U[1] - L[1])[0]) == null ? void 0 : A[0];
            j && (k = j);
            break;
          }
          case "initialPlacement":
            k = a;
        }
      if (n !== k)
        return { reset: { placement: k } };
    }
    return {};
  } };
}, Ly = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: r, y: n } = t, o = await async function(i, a) {
      const { placement: u, platform: c, elements: s } = i, f = await (c.isRTL == null ? void 0 : c.isRTL(s.floating)), l = Jt(u), v = Qr(u), d = Kr(u) === "x", g = ["left", "top"].includes(l) ? -1 : 1, y = f && d ? -1 : 1, m = typeof a == "function" ? a(i) : a;
      let { mainAxis: h, crossAxis: O, alignmentAxis: w } = typeof m == "number" ? { mainAxis: m, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...m };
      return v && typeof w == "number" && (O = v === "end" ? -1 * w : w), d ? { x: O * y, y: h * g } : { x: h * g, y: O * y };
    }(t, e);
    return { x: r + o.x, y: n + o.y, data: o };
  } };
}, jy = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: r, y: n, placement: o } = t, { mainAxis: i = !0, crossAxis: a = !1, limiter: u = { fn: (m) => {
      let { x: h, y: O } = m;
      return { x: h, y: O };
    } }, ...c } = e, s = { x: r, y: n }, f = await Df(t, c), l = Kr(Jt(o)), v = l === "x" ? "y" : "x";
    let d = s[l], g = s[v];
    if (i) {
      const m = l === "y" ? "bottom" : "right";
      d = ki(d + f[l === "y" ? "top" : "left"], d, d - f[m]);
    }
    if (a) {
      const m = v === "y" ? "bottom" : "right";
      g = ki(g + f[v === "y" ? "top" : "left"], g, g - f[m]);
    }
    const y = u.fn({ ...t, [l]: d, [v]: g });
    return { ...y, data: { x: y.x - r, y: y.y - n } };
  } };
};
function it(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function bt(e) {
  return it(e).getComputedStyle(e);
}
const yc = Math.min, Ir = Math.max, to = Math.round;
function Cf(e) {
  const t = bt(e);
  let r = parseFloat(t.width), n = parseFloat(t.height);
  const o = e.offsetWidth, i = e.offsetHeight, a = to(r) !== o || to(n) !== i;
  return a && (r = o, n = i), { width: r, height: n, fallback: a };
}
function Lt(e) {
  return Mf(e) ? (e.nodeName || "").toLowerCase() : "";
}
let on;
function Af() {
  if (on)
    return on;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (on = e.brands.map((t) => t.brand + "/" + t.version).join(" "), on) : navigator.userAgent;
}
function wt(e) {
  return e instanceof it(e).HTMLElement;
}
function Mt(e) {
  return e instanceof it(e).Element;
}
function Mf(e) {
  return e instanceof it(e).Node;
}
function hc(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof it(e).ShadowRoot || e instanceof ShadowRoot;
}
function zo(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: o } = bt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o);
}
function Wy(e) {
  return ["table", "td", "th"].includes(Lt(e));
}
function Ii(e) {
  const t = /firefox/i.test(Af()), r = bt(e), n = r.backdropFilter || r.WebkitBackdropFilter;
  return r.transform !== "none" || r.perspective !== "none" || !!n && n !== "none" || t && r.willChange === "filter" || t && !!r.filter && r.filter !== "none" || ["transform", "perspective"].some((o) => r.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some((o) => {
    const i = r.contain;
    return i != null && i.includes(o);
  });
}
function kf() {
  return !/^((?!chrome|android).)*safari/i.test(Af());
}
function du(e) {
  return ["html", "body", "#document"].includes(Lt(e));
}
function If(e) {
  return Mt(e) ? e : e.contextElement;
}
const Nf = { x: 1, y: 1 };
function fr(e) {
  const t = If(e);
  if (!wt(t))
    return Nf;
  const r = t.getBoundingClientRect(), { width: n, height: o, fallback: i } = Cf(t);
  let a = (i ? to(r.width) : r.width) / n, u = (i ? to(r.height) : r.height) / o;
  return a && Number.isFinite(a) || (a = 1), u && Number.isFinite(u) || (u = 1), { x: a, y: u };
}
function Fr(e, t, r, n) {
  var o, i;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const a = e.getBoundingClientRect(), u = If(e);
  let c = Nf;
  t && (n ? Mt(n) && (c = fr(n)) : c = fr(e));
  const s = u ? it(u) : window, f = !kf() && r;
  let l = (a.left + (f && ((o = s.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / c.x, v = (a.top + (f && ((i = s.visualViewport) == null ? void 0 : i.offsetTop) || 0)) / c.y, d = a.width / c.x, g = a.height / c.y;
  if (u) {
    const y = it(u), m = n && Mt(n) ? it(n) : n;
    let h = y.frameElement;
    for (; h && n && m !== y; ) {
      const O = fr(h), w = h.getBoundingClientRect(), _ = getComputedStyle(h);
      w.x += (h.clientLeft + parseFloat(_.paddingLeft)) * O.x, w.y += (h.clientTop + parseFloat(_.paddingTop)) * O.y, l *= O.x, v *= O.y, d *= O.x, g *= O.y, l += w.x, v += w.y, h = it(h).frameElement;
    }
  }
  return { width: d, height: g, top: v, right: l + d, bottom: v + g, left: l, x: l, y: v };
}
function kt(e) {
  return ((Mf(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Vo(e) {
  return Mt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Lf(e) {
  return Fr(kt(e)).left + Vo(e).scrollLeft;
}
function Yr(e) {
  if (Lt(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || hc(e) && e.host || kt(e);
  return hc(t) ? t.host : t;
}
function jf(e) {
  const t = Yr(e);
  return du(t) ? t.ownerDocument.body : wt(t) && zo(t) ? t : jf(t);
}
function Wf(e, t) {
  var r;
  t === void 0 && (t = []);
  const n = jf(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), i = it(n);
  return o ? t.concat(i, i.visualViewport || [], zo(n) ? n : []) : t.concat(n, Wf(n));
}
function mc(e, t, r) {
  return t === "viewport" ? kr(function(n, o) {
    const i = it(n), a = kt(n), u = i.visualViewport;
    let c = a.clientWidth, s = a.clientHeight, f = 0, l = 0;
    if (u) {
      c = u.width, s = u.height;
      const v = kf();
      (v || !v && o === "fixed") && (f = u.offsetLeft, l = u.offsetTop);
    }
    return { width: c, height: s, x: f, y: l };
  }(e, r)) : Mt(t) ? kr(function(n, o) {
    const i = Fr(n, !0, o === "fixed"), a = i.top + n.clientTop, u = i.left + n.clientLeft, c = wt(n) ? fr(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * c.x, height: n.clientHeight * c.y, x: u * c.x, y: a * c.y };
  }(t, r)) : kr(function(n) {
    const o = kt(n), i = Vo(n), a = n.ownerDocument.body, u = Ir(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), c = Ir(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
    let s = -i.scrollLeft + Lf(n);
    const f = -i.scrollTop;
    return bt(a).direction === "rtl" && (s += Ir(o.clientWidth, a.clientWidth) - u), { width: u, height: c, x: s, y: f };
  }(kt(e)));
}
function gc(e) {
  return wt(e) && bt(e).position !== "fixed" ? e.offsetParent : null;
}
function bc(e) {
  const t = it(e);
  let r = gc(e);
  for (; r && Wy(r) && bt(r).position === "static"; )
    r = gc(r);
  return r && (Lt(r) === "html" || Lt(r) === "body" && bt(r).position === "static" && !Ii(r)) ? t : r || function(n) {
    let o = Yr(n);
    for (; wt(o) && !du(o); ) {
      if (Ii(o))
        return o;
      o = Yr(o);
    }
    return null;
  }(e) || t;
}
function Uy(e, t, r) {
  const n = wt(t), o = kt(t), i = Fr(e, !0, r === "fixed", t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const u = { x: 0, y: 0 };
  if (n || !n && r !== "fixed")
    if ((Lt(t) !== "body" || zo(o)) && (a = Vo(t)), wt(t)) {
      const c = Fr(t, !0);
      u.x = c.x + t.clientLeft, u.y = c.y + t.clientTop;
    } else
      o && (u.x = Lf(o));
  return { x: i.left + a.scrollLeft - u.x, y: i.top + a.scrollTop - u.y, width: i.width, height: i.height };
}
const By = { getClippingRect: function(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: o } = e;
  const i = r === "clippingAncestors" ? function(s, f) {
    const l = f.get(s);
    if (l)
      return l;
    let v = Wf(s).filter((m) => Mt(m) && Lt(m) !== "body"), d = null;
    const g = bt(s).position === "fixed";
    let y = g ? Yr(s) : s;
    for (; Mt(y) && !du(y); ) {
      const m = bt(y), h = Ii(y);
      (g ? h || d : h || m.position !== "static" || !d || !["absolute", "fixed"].includes(d.position)) ? d = m : v = v.filter((O) => O !== y), y = Yr(y);
    }
    return f.set(s, v), v;
  }(t, this._c) : [].concat(r), a = [...i, n], u = a[0], c = a.reduce((s, f) => {
    const l = mc(t, f, o);
    return s.top = Ir(l.top, s.top), s.right = yc(l.right, s.right), s.bottom = yc(l.bottom, s.bottom), s.left = Ir(l.left, s.left), s;
  }, mc(t, u, o));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: r, strategy: n } = e;
  const o = wt(r), i = kt(r);
  if (r === i)
    return t;
  let a = { scrollLeft: 0, scrollTop: 0 }, u = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((o || !o && n !== "fixed") && ((Lt(r) !== "body" || zo(i)) && (a = Vo(r)), wt(r))) {
    const s = Fr(r);
    u = fr(r), c.x = s.x + r.clientLeft, c.y = s.y + r.clientTop;
  }
  return { width: t.width * u.x, height: t.height * u.y, x: t.x * u.x - a.scrollLeft * u.x + c.x, y: t.y * u.y - a.scrollTop * u.y + c.y };
}, isElement: Mt, getDimensions: function(e) {
  return wt(e) ? Cf(e) : e.getBoundingClientRect();
}, getOffsetParent: bc, getDocumentElement: kt, getScale: fr, async getElementRects(e) {
  let { reference: t, floating: r, strategy: n } = e;
  const o = this.getOffsetParent || bc, i = this.getDimensions;
  return { reference: Uy(t, await o(r), n), floating: { x: 0, y: 0, ...await i(r) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => bt(e).direction === "rtl" }, wc = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = { platform: By, ...r }, i = { ...o.platform, _c: n };
  return (async (a, u, c) => {
    const { placement: s = "bottom", strategy: f = "absolute", middleware: l = [], platform: v } = c, d = l.filter(Boolean), g = await (v.isRTL == null ? void 0 : v.isRTL(u));
    if (v == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), d.filter((b) => {
      let { name: E } = b;
      return E === "autoPlacement" || E === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    a && u || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let y = await v.getElementRects({ reference: a, floating: u, strategy: f }), { x: m, y: h } = vc(y, s, g), O = s, w = {}, _ = 0;
    for (let b = 0; b < d.length; b++) {
      const { name: E, fn: S } = d[b], { x: P, y: D, data: A, reset: $ } = await S({ x: m, y: h, initialPlacement: s, placement: O, strategy: f, middlewareData: w, rects: y, platform: v, elements: { reference: a, floating: u } });
      m = P ?? m, h = D ?? h, w = { ...w, [E]: { ...w[E], ...A } }, _ > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), $ && _ <= 50 && (_++, typeof $ == "object" && ($.placement && (O = $.placement), $.rects && (y = $.rects === !0 ? await v.getElementRects({ reference: a, floating: u, strategy: f }) : $.rects), { x: m, y: h } = vc(y, O, g)), b = -1);
    }
    return { x: m, y: h, placement: O, strategy: f, middlewareData: w };
  })(e, t, { ...o, platform: i });
};
var $t, Zt = { exports: {} }, _c = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
$t = _c, function() {
  var e = $e, t = 60103, r = 60106;
  $t.Fragment = 60107;
  var n = 60108, o = 60114, i = 60109, a = 60110, u = 60112, c = 60113, s = 60120, f = 60115, l = 60116, v = 60121, d = 60122, g = 60117, y = 60129, m = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var h = Symbol.for;
    t = h("react.element"), r = h("react.portal"), $t.Fragment = h("react.fragment"), n = h("react.strict_mode"), o = h("react.profiler"), i = h("react.provider"), a = h("react.context"), u = h("react.forward_ref"), c = h("react.suspense"), s = h("react.suspense_list"), f = h("react.memo"), l = h("react.lazy"), v = h("react.block"), d = h("react.server.block"), g = h("react.fundamental"), h("react.scope"), h("react.opaque.id"), y = h("react.debug_trace_mode"), h("react.offscreen"), m = h("react.legacy_hidden");
  }
  var O = typeof Symbol == "function" && Symbol.iterator, w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function _(x) {
    for (var H = arguments.length, R = new Array(H > 1 ? H - 1 : 0), ne = 1; ne < H; ne++)
      R[ne - 1] = arguments[ne];
    b("error", x, R);
  }
  function b(x, H, R) {
    var ne = w.ReactDebugCurrentFrame, te = "";
    if (D) {
      var oe = S(D.type), ie = D._owner;
      te += function(fe, K, q) {
        var Z = "";
        if (K) {
          var z = K.fileName, I = z.replace(E, "");
          if (/^index\./.test(I)) {
            var le = z.match(E);
            if (le) {
              var we = le[1];
              we && (I = we.replace(E, "") + "/" + I);
            }
          }
          Z = " (at " + I + ":" + K.lineNumber + ")";
        } else
          q && (Z = " (created by " + q + ")");
        return `
    in ` + (fe || "Unknown") + Z;
      }(oe, D._source, ie && S(ie.type));
    }
    (te += ne.getStackAddendum()) !== "" && (H += "%s", R = R.concat([te]));
    var ce = R.map(function(fe) {
      return "" + fe;
    });
    ce.unshift("Warning: " + H), Function.prototype.apply.call(console[x], console, ce);
  }
  var E = /^(.*)[\\\/]/;
  function S(x) {
    if (x == null)
      return null;
    if (typeof x.tag == "number" && _("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof x == "function")
      return x.displayName || x.name || null;
    if (typeof x == "string")
      return x;
    switch (x) {
      case $t.Fragment:
        return "Fragment";
      case r:
        return "Portal";
      case o:
        return "Profiler";
      case n:
        return "StrictMode";
      case c:
        return "Suspense";
      case s:
        return "SuspenseList";
    }
    if (typeof x == "object")
      switch (x.$$typeof) {
        case a:
          return "Context.Consumer";
        case i:
          return "Context.Provider";
        case u:
          return ne = x, te = x.render, oe = "ForwardRef", ie = te.displayName || te.name || "", ne.displayName || (ie !== "" ? oe + "(" + ie + ")" : oe);
        case f:
          return S(x.type);
        case v:
          return S(x.render);
        case l:
          var H = (R = x)._status === 1 ? R._result : null;
          if (H)
            return S(H);
      }
    var R, ne, te, oe, ie;
    return null;
  }
  var P = {};
  w.ReactDebugCurrentFrame;
  var D = null;
  function A(x) {
    D = x;
  }
  var $, F, k, j = w.ReactCurrentOwner, U = Object.prototype.hasOwnProperty, L = { key: !0, ref: !0, __self: !0, __source: !0 };
  function G(x, H, R, ne, te) {
    var oe, ie = {}, ce = null, fe = null;
    for (oe in R !== void 0 && (ce = "" + R), function(Z) {
      if (U.call(Z, "key")) {
        var z = Object.getOwnPropertyDescriptor(Z, "key").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return Z.key !== void 0;
    }(H) && (ce = "" + H.key), function(Z) {
      if (U.call(Z, "ref")) {
        var z = Object.getOwnPropertyDescriptor(Z, "ref").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return Z.ref !== void 0;
    }(H) && (fe = H.ref, function(Z, z) {
      if (typeof Z.ref == "string" && j.current && z && j.current.stateNode !== z) {
        var I = S(j.current.type);
        k[I] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(j.current.type), Z.ref), k[I] = !0);
      }
    }(H, te)), H)
      U.call(H, oe) && !L.hasOwnProperty(oe) && (ie[oe] = H[oe]);
    if (x && x.defaultProps) {
      var K = x.defaultProps;
      for (oe in K)
        ie[oe] === void 0 && (ie[oe] = K[oe]);
    }
    if (ce || fe) {
      var q = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
      ce && function(Z, z) {
        var I = function() {
          $ || ($ = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        I.isReactWarning = !0, Object.defineProperty(Z, "key", { get: I, configurable: !0 });
      }(ie, q), fe && function(Z, z) {
        var I = function() {
          F || (F = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        I.isReactWarning = !0, Object.defineProperty(Z, "ref", { get: I, configurable: !0 });
      }(ie, q);
    }
    return function(Z, z, I, le, we, ke, Ue) {
      var Ie = { $$typeof: t, type: Z, key: z, ref: I, props: Ue, _owner: ke, _store: {} };
      return Object.defineProperty(Ie._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(Ie, "_self", { configurable: !1, enumerable: !1, writable: !1, value: le }), Object.defineProperty(Ie, "_source", { configurable: !1, enumerable: !1, writable: !1, value: we }), Object.freeze && (Object.freeze(Ie.props), Object.freeze(Ie)), Ie;
    }(x, ce, fe, te, ne, j.current, ie);
  }
  k = {};
  var pe, he = w.ReactCurrentOwner;
  function T(x) {
    D = x;
  }
  function M(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }
  function V() {
    if (he.current) {
      var x = S(he.current.type);
      if (x)
        return `

Check the render method of \`` + x + "`.";
    }
    return "";
  }
  w.ReactDebugCurrentFrame, pe = !1;
  var Q = {};
  function X(x, H) {
    if (x._store && !x._store.validated && x.key == null) {
      x._store.validated = !0;
      var R = function(te) {
        var oe = V();
        if (!oe) {
          var ie = typeof te == "string" ? te : te.displayName || te.name;
          ie && (oe = `

Check the top-level render call using <` + ie + ">.");
        }
        return oe;
      }(H);
      if (!Q[R]) {
        Q[R] = !0;
        var ne = "";
        x && x._owner && x._owner !== he.current && (ne = " It was passed a child from " + S(x._owner.type) + "."), T(x), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, ne), T(null);
      }
    }
  }
  function ee(x, H) {
    if (typeof x == "object") {
      if (Array.isArray(x))
        for (var R = 0; R < x.length; R++) {
          var ne = x[R];
          M(ne) && X(ne, H);
        }
      else if (M(x))
        x._store && (x._store.validated = !0);
      else if (x) {
        var te = function(ce) {
          if (ce === null || typeof ce != "object")
            return null;
          var fe = O && ce[O] || ce["@@iterator"];
          return typeof fe == "function" ? fe : null;
        }(x);
        if (typeof te == "function" && te !== x.entries)
          for (var oe, ie = te.call(x); !(oe = ie.next()).done; )
            M(oe.value) && X(oe.value, H);
      }
    }
  }
  function Y(x) {
    var H, R = x.type;
    if (R != null && typeof R != "string") {
      if (typeof R == "function")
        H = R.propTypes;
      else {
        if (typeof R != "object" || R.$$typeof !== u && R.$$typeof !== f)
          return;
        H = R.propTypes;
      }
      if (H) {
        var ne = S(R);
        (function(te, oe, ie, ce, fe) {
          var K = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var q in te)
            if (K(te, q)) {
              var Z = void 0;
              try {
                if (typeof te[q] != "function") {
                  var z = Error((ce || "React class") + ": " + ie + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof te[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw z.name = "Invariant Violation", z;
                }
                Z = te[q](oe, q, ce, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (I) {
                Z = I;
              }
              !Z || Z instanceof Error || (A(fe), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", ie, q, typeof Z), A(null)), Z instanceof Error && !(Z.message in P) && (P[Z.message] = !0, A(fe), _("Failed %s type: %s", ie, Z.message), A(null));
            }
        })(H, x.props, "prop", ne, x);
      } else
        R.PropTypes === void 0 || pe || (pe = !0, _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S(R) || "Unknown"));
      typeof R.getDefaultProps != "function" || R.getDefaultProps.isReactClassApproved || _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function J(x, H, R, ne, te, oe) {
    var ie = function(I) {
      return typeof I == "string" || typeof I == "function" || I === $t.Fragment || I === o || I === y || I === n || I === c || I === s || I === m || typeof I == "object" && I !== null && (I.$$typeof === l || I.$$typeof === f || I.$$typeof === i || I.$$typeof === a || I.$$typeof === u || I.$$typeof === g || I.$$typeof === v || I[0] === d);
    }(x);
    if (!ie) {
      var ce = "";
      (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var fe, K = function(I) {
        return I !== void 0 ? `

Check your code at ` + I.fileName.replace(/^.*[\\\/]/, "") + ":" + I.lineNumber + "." : "";
      }(te);
      ce += K || V(), x === null ? fe = "null" : Array.isArray(x) ? fe = "array" : x !== void 0 && x.$$typeof === t ? (fe = "<" + (S(x.type) || "Unknown") + " />", ce = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof x, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fe, ce);
    }
    var q = G(x, H, R, te, oe);
    if (q == null)
      return q;
    if (ie) {
      var Z = H.children;
      if (Z !== void 0)
        if (ne)
          if (Array.isArray(Z)) {
            for (var z = 0; z < Z.length; z++)
              ee(Z[z], x);
            Object.freeze && Object.freeze(Z);
          } else
            _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          ee(Z, x);
    }
    return x === $t.Fragment ? function(I) {
      for (var le = Object.keys(I.props), we = 0; we < le.length; we++) {
        var ke = le[we];
        if (ke !== "children" && ke !== "key") {
          T(I), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ke), T(null);
          break;
        }
      }
      I.ref !== null && (T(I), _("Invalid attribute `ref` supplied to `React.Fragment`."), T(null));
    }(q) : Y(q), q;
  }
  var W = function(x, H, R) {
    return J(x, H, R, !1);
  }, N = function(x, H, R) {
    return J(x, H, R, !0);
  };
  $t.jsx = W, $t.jsxs = N;
}(), Zt.exports = _c;
var pi, Uf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
pi = Uf, function() {
  var e = {}.hasOwnProperty;
  function t() {
    for (var r = [], n = 0; n < arguments.length; n++) {
      var o = arguments[n];
      if (o) {
        var i = typeof o;
        if (i === "string" || i === "number")
          r.push(o);
        else if (Array.isArray(o)) {
          if (o.length) {
            var a = t.apply(null, o);
            a && r.push(a);
          }
        } else if (i === "object") {
          if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
            r.push(o.toString());
            continue;
          }
          for (var u in o)
            e.call(o, u) && o[u] && r.push(u);
        }
      }
    }
    return r.join(" ");
  }
  pi.exports ? (t.default = t, pi.exports = t) : window.classNames = t;
}();
var Oc = Uf.exports;
const Ec = (e, t, r) => {
  let n = null;
  return function(...o) {
    n && clearTimeout(n), n = setTimeout(() => {
      n = null, r || e.apply(this, o);
    }, t);
  };
}, Fy = ({ content: e }) => Zt.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), Yy = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, qy = rr({ getTooltipData: () => Yy });
function Bf(e = "DEFAULT_TOOLTIP_ID") {
  return xt(qy).getTooltipData(e);
}
const xc = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: r = null, place: n = "top", offset: o = 10, strategy: i = "absolute", middlewares: a = [Ly(Number(o)), Ny(), jy({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const u = a;
  return r ? (u.push({ name: "arrow", options: c = { element: r, padding: 5 }, async fn(s) {
    const { element: f, padding: l = 0 } = c || {}, { x: v, y: d, placement: g, rects: y, platform: m } = s;
    if (f == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const h = $f(l), O = { x: v, y: d }, w = Kr(g), _ = lu(w), b = await m.getDimensions(f), E = w === "y" ? "top" : "left", S = w === "y" ? "bottom" : "right", P = y.reference[_] + y.reference[w] - O[w] - y.floating[_], D = O[w] - y.reference[w], A = await (m.getOffsetParent == null ? void 0 : m.getOffsetParent(f));
    let $ = A ? w === "y" ? A.clientHeight || 0 : A.clientWidth || 0 : 0;
    $ === 0 && ($ = y.floating[_]);
    const F = P / 2 - D / 2, k = h[E], j = $ - b[_] - h[S], U = $ / 2 - b[_] / 2 + F, L = ki(k, U, j), G = Qr(g) != null && U != L && y.reference[_] / 2 - (U < k ? h[E] : h[S]) - b[_] / 2 < 0;
    return { [w]: O[w] - (G ? U < k ? k - U : j - U : 0), data: { [w]: L, centerOffset: U - L } };
  } }), wc(e, t, { placement: n, strategy: i, middleware: u }).then(({ x: s, y: f, placement: l, middlewareData: v }) => {
    var d, g;
    const y = { left: `${s}px`, top: `${f}px` }, { x: m, y: h } = (d = v.arrow) !== null && d !== void 0 ? d : { x: 0, y: 0 };
    return { tooltipStyles: y, tooltipArrowStyles: { left: m != null ? `${m}px` : "", top: h != null ? `${h}px` : "", right: "", bottom: "", [(g = { top: "bottom", right: "left", bottom: "top", left: "right" }[l.split("-")[0]]) !== null && g !== void 0 ? g : "bottom"]: "-4px" } };
  })) : wc(e, t, { placement: "bottom", strategy: i, middleware: u }).then(({ x: s, y: f }) => ({ tooltipStyles: { left: `${s}px`, top: `${f}px` }, tooltipArrowStyles: {} }));
  var c;
};
var zt = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const Sc = ({ id: e, className: t, classNameArrow: r, variant: n = "dark", anchorId: o, place: i = "top", offset: a = 10, events: u = ["hover"], positionStrategy: c = "absolute", middlewares: s, wrapper: f, children: l = null, delayShow: v = 0, delayHide: d = 0, float: g = !1, noArrow: y = !1, clickable: m = !1, closeOnEsc: h = !1, style: O, position: w, afterShow: _, afterHide: b, content: E, html: S, isOpen: P, setIsOpen: D }) => {
  const A = re(null), $ = re(null), F = re(null), k = re(null), [j, U] = ye({}), [L, G] = ye({}), [pe, he] = ye(!1), [T, M] = ye(!1), V = re(!1), Q = re(null), { anchorRefs: X, setActiveAnchor: ee } = Bf(e), [Y, J] = ye({ current: null }), W = re(!1);
  se(() => {
    pe || M(!1);
  }, [pe]);
  const N = (z) => {
    M(!0), setTimeout(() => {
      D == null || D(z), P === void 0 && he(z);
    }, 10);
  };
  se(() => {
    if (P === void 0)
      return () => null;
    P && M(!0);
    const z = setTimeout(() => {
      he(P);
    }, 10);
    return () => {
      clearTimeout(z);
    };
  }, [P]), se(() => {
    pe !== V.current && (V.current = pe, pe ? _ == null || _() : b == null || b());
  }, [pe]);
  const x = (z = d) => {
    k.current && clearTimeout(k.current), k.current = setTimeout(() => {
      W.current || N(!1);
    }, z);
  }, H = (z) => {
    var I;
    if (!z)
      return;
    v ? (F.current && clearTimeout(F.current), F.current = setTimeout(() => {
      N(!0);
    }, v)) : N(!0);
    const le = (I = z.currentTarget) !== null && I !== void 0 ? I : z.target;
    J((we) => we.current === le ? we : { current: le }), ee({ current: le }), k.current && clearTimeout(k.current);
  }, R = () => {
    m ? x(d || 100) : d ? x() : N(!1), F.current && clearTimeout(F.current);
  }, ne = ({ x: z, y: I }) => {
    xc({ place: i, offset: a, elementReference: { getBoundingClientRect: () => ({ x: z, y: I, width: 0, height: 0, top: I, left: z, right: z, bottom: I }) }, tooltipReference: A.current, tooltipArrowReference: $.current, strategy: c, middlewares: s }).then((le) => {
      Object.keys(le.tooltipStyles).length && U(le.tooltipStyles), Object.keys(le.tooltipArrowStyles).length && G(le.tooltipArrowStyles);
    });
  }, te = (z) => {
    if (!z)
      return;
    const I = z, le = { x: I.clientX, y: I.clientY };
    ne(le), Q.current = le;
  }, oe = (z) => {
    H(z), d && x();
  }, ie = (z) => {
    var I;
    !((I = Y.current) === null || I === void 0) && I.contains(z.target) || N(!1);
  }, ce = (z) => {
    z.key === "Escape" && N(!1);
  }, fe = Ec(H, 50), K = Ec(R, 50);
  se(() => {
    var z, I;
    const le = new Set(X), we = document.querySelector(`[id='${o}']`);
    if (we && (J((Re) => Re.current === we ? Re : { current: we }), le.add({ current: we })), !le.size)
      return () => null;
    h && window.addEventListener("keydown", ce);
    const ke = [];
    u.find((Re) => Re === "click") && (window.addEventListener("click", ie), ke.push({ event: "click", listener: oe })), u.find((Re) => Re === "hover") && (ke.push({ event: "mouseenter", listener: fe }, { event: "mouseleave", listener: K }, { event: "focus", listener: fe }, { event: "blur", listener: K }), g && ke.push({ event: "mousemove", listener: te }));
    const Ue = () => {
      W.current = !0;
    }, Ie = () => {
      W.current = !1, R();
    };
    m && ((z = A.current) === null || z === void 0 || z.addEventListener("mouseenter", Ue), (I = A.current) === null || I === void 0 || I.addEventListener("mouseleave", Ie)), ke.forEach(({ event: Re, listener: tt }) => {
      le.forEach((ft) => {
        var _t;
        (_t = ft.current) === null || _t === void 0 || _t.addEventListener(Re, tt);
      });
    });
    const st = we ?? Y.current, Tt = new MutationObserver((Re) => {
      st && Re.some((tt) => tt.type === "childList" && [...tt.removedNodes].some((ft) => !!ft.contains(st) && (N(!1), !0)));
    });
    return Tt.observe(document.body, { attributes: !1, childList: !0, subtree: !0 }), () => {
      var Re, tt;
      u.find((ft) => ft === "click") && window.removeEventListener("click", ie), h && window.removeEventListener("keydown", ce), m && ((Re = A.current) === null || Re === void 0 || Re.removeEventListener("mouseenter", Ue), (tt = A.current) === null || tt === void 0 || tt.removeEventListener("mouseleave", Ie)), ke.forEach(({ event: ft, listener: _t }) => {
        le.forEach((nr) => {
          var Wt;
          (Wt = nr.current) === null || Wt === void 0 || Wt.removeEventListener(ft, _t);
        });
      }), Tt.disconnect();
    };
  }, [T, X, Y, h, o, u, d, v]), se(() => {
    if (w)
      return ne(w), () => null;
    if (g)
      return Q.current && ne(Q.current), () => null;
    let z = Y.current;
    o && (z = document.querySelector(`[id='${o}']`));
    let I = !0;
    return xc({ place: i, offset: a, elementReference: z, tooltipReference: A.current, tooltipArrowReference: $.current, strategy: c, middlewares: s }).then((le) => {
      I && (Object.keys(le.tooltipStyles).length && U(le.tooltipStyles), Object.keys(le.tooltipArrowStyles).length && G(le.tooltipArrowStyles));
    }), () => {
      I = !1;
    };
  }, [pe, o, Y, E, S, i, a, c, w]), se(() => () => {
    F.current && clearTimeout(F.current), k.current && clearTimeout(k.current);
  }, []);
  const q = Boolean(S || E || l), Z = Boolean(q && pe && Object.keys(j).length > 0);
  return T ? Zt.exports.jsxs(f, { id: e, role: "tooltip", className: Oc("react-tooltip", zt.tooltip, zt[n], t, { [zt.show]: Z, [zt.fixed]: c === "fixed", [zt.clickable]: m }), style: { ...O, ...j }, ref: A, children: [l || S && Zt.exports.jsx(Fy, { content: S }) || E, Zt.exports.jsx(f, { className: Oc("react-tooltip-arrow", zt.arrow, r, { [zt["no-arrow"]]: y }), style: L, ref: $ })] }) : null;
}, sn = ({ id: e, anchorId: t, content: r, html: n, className: o, classNameArrow: i, variant: a = "dark", place: u = "top", offset: c = 10, wrapper: s = "div", children: f = null, events: l = ["hover"], positionStrategy: v = "absolute", middlewares: d, delayShow: g = 0, delayHide: y = 0, float: m = !1, noArrow: h = !1, clickable: O = !1, closeOnEsc: w = !1, style: _, position: b, isOpen: E, setIsOpen: S, afterShow: P, afterHide: D }) => {
  const [A, $] = ye(r), [F, k] = ye(n), [j, U] = ye(u), [L, G] = ye(a), [pe, he] = ye(c), [T, M] = ye(g), [V, Q] = ye(y), [X, ee] = ye(m), [Y, J] = ye(s), [W, N] = ye(l), [x, H] = ye(v), { anchorRefs: R, activeAnchor: ne } = Bf(e), te = (ce) => ce == null ? void 0 : ce.getAttributeNames().reduce((fe, K) => {
    var q;
    return K.startsWith("data-tooltip-") && (fe[K.replace(/^data-tooltip-/, "")] = (q = ce == null ? void 0 : ce.getAttribute(K)) !== null && q !== void 0 ? q : null), fe;
  }, {}), oe = (ce) => {
    const fe = { place: (K) => {
      var q;
      U((q = K) !== null && q !== void 0 ? q : u);
    }, content: (K) => {
      $(K ?? r);
    }, html: (K) => {
      k(K ?? n);
    }, variant: (K) => {
      var q;
      G((q = K) !== null && q !== void 0 ? q : a);
    }, offset: (K) => {
      he(K === null ? c : Number(K));
    }, wrapper: (K) => {
      var q;
      J((q = K) !== null && q !== void 0 ? q : s);
    }, events: (K) => {
      const q = K == null ? void 0 : K.split(" ");
      N(q ?? l);
    }, "position-strategy": (K) => {
      var q;
      H((q = K) !== null && q !== void 0 ? q : v);
    }, "delay-show": (K) => {
      M(K === null ? g : Number(K));
    }, "delay-hide": (K) => {
      Q(K === null ? y : Number(K));
    }, float: (K) => {
      ee(K === null ? m : Boolean(K));
    } };
    Object.values(fe).forEach((K) => K(null)), Object.entries(ce).forEach(([K, q]) => {
      var Z;
      (Z = fe[K]) === null || Z === void 0 || Z.call(fe, q);
    });
  };
  se(() => {
    $(r);
  }, [r]), se(() => {
    k(n);
  }, [n]), se(() => {
    var ce;
    const fe = new Set(R), K = document.querySelector(`[id='${t}']`);
    if (K && fe.add({ current: K }), !fe.size)
      return () => null;
    const q = (ce = ne.current) !== null && ce !== void 0 ? ce : K, Z = new MutationObserver((I) => {
      I.forEach((le) => {
        var we;
        if (!q || le.type !== "attributes" || !(!((we = le.attributeName) === null || we === void 0) && we.startsWith("data-tooltip-")))
          return;
        const ke = te(q);
        oe(ke);
      });
    }), z = { attributes: !0, childList: !1, subtree: !1 };
    if (q) {
      const I = te(q);
      oe(I), Z.observe(q, z);
    }
    return () => {
      Z.disconnect();
    };
  }, [R, ne, t]);
  const ie = { id: e, anchorId: t, className: o, classNameArrow: i, content: A, html: F, place: j, variant: L, offset: pe, wrapper: Y, events: W, positionStrategy: x, middlewares: d, delayShow: T, delayHide: V, float: X, noArrow: h, clickable: O, closeOnEsc: w, style: _, position: b, isOpen: E, setIsOpen: S, afterShow: P, afterHide: D };
  return f ? Zt.exports.jsx(Sc, { ...ie, children: f }) : Zt.exports.jsx(Sc, { ...ie });
};
function Ve(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function De(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function fn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fn = function(r) {
    return typeof r;
  } : fn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, fn(e);
}
function We(e) {
  De(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || fn(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Ff(e, t) {
  De(2, arguments);
  var r = We(e).getTime(), n = Ve(t);
  return new Date(r + n);
}
var Hy = {};
function br() {
  return Hy;
}
function Yf(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
var zy = 6e4;
function Vy(e, t) {
  De(2, arguments);
  var r = Ve(t);
  return Ff(e, r * zy);
}
var qf = 6e4, Xy = 36e5, Gy = 1e3;
function ln(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ln = function(r) {
    return typeof r;
  } : ln = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ln(e);
}
function Qy(e) {
  return De(1, arguments), e instanceof Date || ln(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ky(e) {
  if (De(1, arguments), !Qy(e) && typeof e != "number")
    return !1;
  var t = We(e);
  return !isNaN(Number(t));
}
function Jy(e, t) {
  return De(2, arguments), We(e).getTime() - We(t).getTime();
}
var Rc = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function(t) {
    return t < 0 ? Math.ceil(t) : Math.floor(t);
  }
  // Math.trunc is not supported by IE
}, Zy = "trunc";
function eh(e) {
  return e ? Rc[e] : Rc[Zy];
}
function Tc(e, t, r) {
  De(2, arguments);
  var n = Jy(e, t) / qf;
  return eh(r == null ? void 0 : r.roundingMethod)(n);
}
function Hf(e, t) {
  De(2, arguments);
  var r = Ve(t);
  return Ff(e, -r);
}
var th = 864e5;
function rh(e) {
  De(1, arguments);
  var t = We(e), r = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var n = t.getTime(), o = r - n;
  return Math.floor(o / th) + 1;
}
function hr(e) {
  De(1, arguments);
  var t = 1, r = We(e), n = r.getUTCDay(), o = (n < t ? 7 : 0) + n - t;
  return r.setUTCDate(r.getUTCDate() - o), r.setUTCHours(0, 0, 0, 0), r;
}
function zf(e) {
  De(1, arguments);
  var t = We(e), r = t.getUTCFullYear(), n = new Date(0);
  n.setUTCFullYear(r + 1, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var o = hr(n), i = new Date(0);
  i.setUTCFullYear(r, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var a = hr(i);
  return t.getTime() >= o.getTime() ? r + 1 : t.getTime() >= a.getTime() ? r : r - 1;
}
function nh(e) {
  De(1, arguments);
  var t = zf(e), r = new Date(0);
  r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var n = hr(r);
  return n;
}
var oh = 6048e5;
function Vf(e) {
  De(1, arguments);
  var t = We(e), r = hr(t).getTime() - nh(t).getTime();
  return Math.round(r / oh) + 1;
}
function tr(e, t) {
  var r, n, o, i, a, u, c, s;
  De(1, arguments);
  var f = br(), l = Ve((r = (n = (o = (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0 ? i : t == null || (a = t.locale) === null || a === void 0 || (u = a.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && o !== void 0 ? o : f.weekStartsOn) !== null && n !== void 0 ? n : (c = f.locale) === null || c === void 0 || (s = c.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(l >= 0 && l <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = We(e), d = v.getUTCDay(), g = (d < l ? 7 : 0) + d - l;
  return v.setUTCDate(v.getUTCDate() - g), v.setUTCHours(0, 0, 0, 0), v;
}
function pu(e, t) {
  var r, n, o, i, a, u, c, s;
  De(1, arguments);
  var f = We(e), l = f.getUTCFullYear(), v = br(), d = Ve((r = (n = (o = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (a = t.locale) === null || a === void 0 || (u = a.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && o !== void 0 ? o : v.firstWeekContainsDate) !== null && n !== void 0 ? n : (c = v.locale) === null || c === void 0 || (s = c.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(d >= 1 && d <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var g = new Date(0);
  g.setUTCFullYear(l + 1, 0, d), g.setUTCHours(0, 0, 0, 0);
  var y = tr(g, t), m = new Date(0);
  m.setUTCFullYear(l, 0, d), m.setUTCHours(0, 0, 0, 0);
  var h = tr(m, t);
  return f.getTime() >= y.getTime() ? l + 1 : f.getTime() >= h.getTime() ? l : l - 1;
}
function ih(e, t) {
  var r, n, o, i, a, u, c, s;
  De(1, arguments);
  var f = br(), l = Ve((r = (n = (o = (i = t == null ? void 0 : t.firstWeekContainsDate) !== null && i !== void 0 ? i : t == null || (a = t.locale) === null || a === void 0 || (u = a.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && n !== void 0 ? n : (c = f.locale) === null || c === void 0 || (s = c.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), v = pu(e, t), d = new Date(0);
  d.setUTCFullYear(v, 0, l), d.setUTCHours(0, 0, 0, 0);
  var g = tr(d, t);
  return g;
}
var ah = 6048e5;
function Xf(e, t) {
  De(1, arguments);
  var r = We(e), n = tr(r, t).getTime() - ih(r, t).getTime();
  return Math.round(n / ah) + 1;
}
function Ee(e, t) {
  for (var r = e < 0 ? "-" : "", n = Math.abs(e).toString(); n.length < t; )
    n = "0" + n;
  return r + n;
}
var uh = {
  // Year
  y: function(t, r) {
    var n = t.getUTCFullYear(), o = n > 0 ? n : 1 - n;
    return Ee(r === "yy" ? o % 100 : o, r.length);
  },
  // Month
  M: function(t, r) {
    var n = t.getUTCMonth();
    return r === "M" ? String(n + 1) : Ee(n + 1, 2);
  },
  // Day of the month
  d: function(t, r) {
    return Ee(t.getUTCDate(), r.length);
  },
  // AM or PM
  a: function(t, r) {
    var n = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, r) {
    return Ee(t.getUTCHours() % 12 || 12, r.length);
  },
  // Hour [0-23]
  H: function(t, r) {
    return Ee(t.getUTCHours(), r.length);
  },
  // Minute
  m: function(t, r) {
    return Ee(t.getUTCMinutes(), r.length);
  },
  // Second
  s: function(t, r) {
    return Ee(t.getUTCSeconds(), r.length);
  },
  // Fraction of second
  S: function(t, r) {
    var n = r.length, o = t.getUTCMilliseconds(), i = Math.floor(o * Math.pow(10, n - 3));
    return Ee(i, r.length);
  }
};
const Dt = uh;
var ur = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ch = {
  // Era
  G: function(t, r, n) {
    var o = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(o, {
          width: "abbreviated"
        });
      case "GGGGG":
        return n.era(o, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return n.era(o, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, r, n) {
    if (r === "yo") {
      var o = t.getUTCFullYear(), i = o > 0 ? o : 1 - o;
      return n.ordinalNumber(i, {
        unit: "year"
      });
    }
    return Dt.y(t, r);
  },
  // Local week-numbering year
  Y: function(t, r, n, o) {
    var i = pu(t, o), a = i > 0 ? i : 1 - i;
    if (r === "YY") {
      var u = a % 100;
      return Ee(u, 2);
    }
    return r === "Yo" ? n.ordinalNumber(a, {
      unit: "year"
    }) : Ee(a, r.length);
  },
  // ISO week-numbering year
  R: function(t, r) {
    var n = zf(t);
    return Ee(n, r.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, r) {
    var n = t.getUTCFullYear();
    return Ee(n, r.length);
  },
  // Quarter
  Q: function(t, r, n) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(o);
      case "QQ":
        return Ee(o, 2);
      case "Qo":
        return n.ordinalNumber(o, {
          unit: "quarter"
        });
      case "QQQ":
        return n.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, r, n) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(o);
      case "qq":
        return Ee(o, 2);
      case "qo":
        return n.ordinalNumber(o, {
          unit: "quarter"
        });
      case "qqq":
        return n.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, r, n) {
    var o = t.getUTCMonth();
    switch (r) {
      case "M":
      case "MM":
        return Dt.M(t, r);
      case "Mo":
        return n.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "MMM":
        return n.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, r, n) {
    var o = t.getUTCMonth();
    switch (r) {
      case "L":
        return String(o + 1);
      case "LL":
        return Ee(o + 1, 2);
      case "Lo":
        return n.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "LLL":
        return n.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, r, n, o) {
    var i = Xf(t, o);
    return r === "wo" ? n.ordinalNumber(i, {
      unit: "week"
    }) : Ee(i, r.length);
  },
  // ISO week of year
  I: function(t, r, n) {
    var o = Vf(t);
    return r === "Io" ? n.ordinalNumber(o, {
      unit: "week"
    }) : Ee(o, r.length);
  },
  // Day of the month
  d: function(t, r, n) {
    return r === "do" ? n.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Dt.d(t, r);
  },
  // Day of year
  D: function(t, r, n) {
    var o = rh(t);
    return r === "Do" ? n.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : Ee(o, r.length);
  },
  // Day of week
  E: function(t, r, n) {
    var o = t.getUTCDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, r, n, o) {
    var i = t.getUTCDay(), a = (i - o.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(a);
      case "ee":
        return Ee(a, 2);
      case "eo":
        return n.ordinalNumber(a, {
          unit: "day"
        });
      case "eee":
        return n.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(i, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, r, n, o) {
    var i = t.getUTCDay(), a = (i - o.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(a);
      case "cc":
        return Ee(a, r.length);
      case "co":
        return n.ordinalNumber(a, {
          unit: "day"
        });
      case "ccc":
        return n.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(i, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(i, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, r, n) {
    var o = t.getUTCDay(), i = o === 0 ? 7 : o;
    switch (r) {
      case "i":
        return String(i);
      case "ii":
        return Ee(i, r.length);
      case "io":
        return n.ordinalNumber(i, {
          unit: "day"
        });
      case "iii":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, r, n) {
    var o = t.getUTCHours(), i = o / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, r, n) {
    var o = t.getUTCHours(), i;
    switch (o === 12 ? i = ur.noon : o === 0 ? i = ur.midnight : i = o / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, r, n) {
    var o = t.getUTCHours(), i;
    switch (o >= 17 ? i = ur.evening : o >= 12 ? i = ur.afternoon : o >= 4 ? i = ur.morning : i = ur.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, r, n) {
    if (r === "ho") {
      var o = t.getUTCHours() % 12;
      return o === 0 && (o = 12), n.ordinalNumber(o, {
        unit: "hour"
      });
    }
    return Dt.h(t, r);
  },
  // Hour [0-23]
  H: function(t, r, n) {
    return r === "Ho" ? n.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Dt.H(t, r);
  },
  // Hour [0-11]
  K: function(t, r, n) {
    var o = t.getUTCHours() % 12;
    return r === "Ko" ? n.ordinalNumber(o, {
      unit: "hour"
    }) : Ee(o, r.length);
  },
  // Hour [1-24]
  k: function(t, r, n) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), r === "ko" ? n.ordinalNumber(o, {
      unit: "hour"
    }) : Ee(o, r.length);
  },
  // Minute
  m: function(t, r, n) {
    return r === "mo" ? n.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Dt.m(t, r);
  },
  // Second
  s: function(t, r, n) {
    return r === "so" ? n.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Dt.s(t, r);
  },
  // Fraction of second
  S: function(t, r) {
    return Dt.S(t, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, r, n, o) {
    var i = o._originalDate || t, a = i.getTimezoneOffset();
    if (a === 0)
      return "Z";
    switch (r) {
      case "X":
        return $c(a);
      case "XXXX":
      case "XX":
        return Xt(a);
      case "XXXXX":
      case "XXX":
      default:
        return Xt(a, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, r, n, o) {
    var i = o._originalDate || t, a = i.getTimezoneOffset();
    switch (r) {
      case "x":
        return $c(a);
      case "xxxx":
      case "xx":
        return Xt(a);
      case "xxxxx":
      case "xxx":
      default:
        return Xt(a, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, r, n, o) {
    var i = o._originalDate || t, a = i.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Pc(a, ":");
      case "OOOO":
      default:
        return "GMT" + Xt(a, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, r, n, o) {
    var i = o._originalDate || t, a = i.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Pc(a, ":");
      case "zzzz":
      default:
        return "GMT" + Xt(a, ":");
    }
  },
  // Seconds timestamp
  t: function(t, r, n, o) {
    var i = o._originalDate || t, a = Math.floor(i.getTime() / 1e3);
    return Ee(a, r.length);
  },
  // Milliseconds timestamp
  T: function(t, r, n, o) {
    var i = o._originalDate || t, a = i.getTime();
    return Ee(a, r.length);
  }
};
function Pc(e, t) {
  var r = e > 0 ? "-" : "+", n = Math.abs(e), o = Math.floor(n / 60), i = n % 60;
  if (i === 0)
    return r + String(o);
  var a = t || "";
  return r + String(o) + a + Ee(i, 2);
}
function $c(e, t) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + Ee(Math.abs(e) / 60, 2);
  }
  return Xt(e, t);
}
function Xt(e, t) {
  var r = t || "", n = e > 0 ? "-" : "+", o = Math.abs(e), i = Ee(Math.floor(o / 60), 2), a = Ee(o % 60, 2);
  return n + i + r + a;
}
const sh = ch;
var Dc = function(t, r) {
  switch (t) {
    case "P":
      return r.date({
        width: "short"
      });
    case "PP":
      return r.date({
        width: "medium"
      });
    case "PPP":
      return r.date({
        width: "long"
      });
    case "PPPP":
    default:
      return r.date({
        width: "full"
      });
  }
}, Gf = function(t, r) {
  switch (t) {
    case "p":
      return r.time({
        width: "short"
      });
    case "pp":
      return r.time({
        width: "medium"
      });
    case "ppp":
      return r.time({
        width: "long"
      });
    case "pppp":
    default:
      return r.time({
        width: "full"
      });
  }
}, fh = function(t, r) {
  var n = t.match(/(P+)(p+)?/) || [], o = n[1], i = n[2];
  if (!i)
    return Dc(t, r);
  var a;
  switch (o) {
    case "P":
      a = r.dateTime({
        width: "short"
      });
      break;
    case "PP":
      a = r.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      a = r.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      a = r.dateTime({
        width: "full"
      });
      break;
  }
  return a.replace("{{date}}", Dc(o, r)).replace("{{time}}", Gf(i, r));
}, lh = {
  p: Gf,
  P: fh
};
const Ni = lh;
var dh = ["D", "DD"], ph = ["YY", "YYYY"];
function Qf(e) {
  return dh.indexOf(e) !== -1;
}
function Kf(e) {
  return ph.indexOf(e) !== -1;
}
function ro(e, t, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var vh = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, yh = function(t, r, n) {
  var o, i = vh[t];
  return typeof i == "string" ? o = i : r === 1 ? o = i.one : o = i.other.replace("{{count}}", r.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + o : o + " ago" : o;
};
const hh = yh;
function vi(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.width ? String(t.width) : e.defaultWidth, n = e.formats[r] || e.formats[e.defaultWidth];
    return n;
  };
}
var mh = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, gh = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, bh = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, wh = {
  date: vi({
    formats: mh,
    defaultWidth: "full"
  }),
  time: vi({
    formats: gh,
    defaultWidth: "full"
  }),
  dateTime: vi({
    formats: bh,
    defaultWidth: "full"
  })
};
const _h = wh;
var Oh = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Eh = function(t, r, n, o) {
  return Oh[t];
};
const xh = Eh;
function Sr(e) {
  return function(t, r) {
    var n = r != null && r.context ? String(r.context) : "standalone", o;
    if (n === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth, a = r != null && r.width ? String(r.width) : i;
      o = e.formattingValues[a] || e.formattingValues[i];
    } else {
      var u = e.defaultWidth, c = r != null && r.width ? String(r.width) : e.defaultWidth;
      o = e.values[c] || e.values[u];
    }
    var s = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[s];
  };
}
var Sh = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Rh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Th = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Ph = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, $h = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Dh = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Ch = function(t, r) {
  var n = Number(t), o = n % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Ah = {
  ordinalNumber: Ch,
  era: Sr({
    values: Sh,
    defaultWidth: "wide"
  }),
  quarter: Sr({
    values: Rh,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Sr({
    values: Th,
    defaultWidth: "wide"
  }),
  day: Sr({
    values: Ph,
    defaultWidth: "wide"
  }),
  dayPeriod: Sr({
    values: $h,
    defaultWidth: "wide",
    formattingValues: Dh,
    defaultFormattingWidth: "wide"
  })
};
const Mh = Ah;
function Rr(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    var a = i[0], u = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(u) ? Ih(u, function(l) {
      return l.test(a);
    }) : kh(u, function(l) {
      return l.test(a);
    }), s;
    s = e.valueCallback ? e.valueCallback(c) : c, s = r.valueCallback ? r.valueCallback(s) : s;
    var f = t.slice(a.length);
    return {
      value: s,
      rest: f
    };
  };
}
function kh(e, t) {
  for (var r in e)
    if (e.hasOwnProperty(r) && t(e[r]))
      return r;
}
function Ih(e, t) {
  for (var r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Nh(e) {
  return function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.match(e.matchPattern);
    if (!n)
      return null;
    var o = n[0], i = t.match(e.parsePattern);
    if (!i)
      return null;
    var a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = r.valueCallback ? r.valueCallback(a) : a;
    var u = t.slice(o.length);
    return {
      value: a,
      rest: u
    };
  };
}
var Lh = /^(\d+)(th|st|nd|rd)?/i, jh = /\d+/i, Wh = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Uh = {
  any: [/^b/i, /^(a|c)/i]
}, Bh = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Fh = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Yh = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, qh = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Hh = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, zh = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Vh = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Xh = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Gh = {
  ordinalNumber: Nh({
    matchPattern: Lh,
    parsePattern: jh,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Rr({
    matchPatterns: Wh,
    defaultMatchWidth: "wide",
    parsePatterns: Uh,
    defaultParseWidth: "any"
  }),
  quarter: Rr({
    matchPatterns: Bh,
    defaultMatchWidth: "wide",
    parsePatterns: Fh,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Rr({
    matchPatterns: Yh,
    defaultMatchWidth: "wide",
    parsePatterns: qh,
    defaultParseWidth: "any"
  }),
  day: Rr({
    matchPatterns: Hh,
    defaultMatchWidth: "wide",
    parsePatterns: zh,
    defaultParseWidth: "any"
  }),
  dayPeriod: Rr({
    matchPatterns: Vh,
    defaultMatchWidth: "any",
    parsePatterns: Xh,
    defaultParseWidth: "any"
  })
};
const Qh = Gh;
var Kh = {
  code: "en-US",
  formatDistance: hh,
  formatLong: _h,
  formatRelative: xh,
  localize: Mh,
  match: Qh,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Jf = Kh;
var Jh = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Zh = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, em = /^'([^]*?)'?$/, tm = /''/g, rm = /[a-zA-Z]/;
function nm(e, t, r) {
  var n, o, i, a, u, c, s, f, l, v, d, g, y, m, h, O, w, _;
  De(2, arguments);
  var b = String(t), E = br(), S = (n = (o = r == null ? void 0 : r.locale) !== null && o !== void 0 ? o : E.locale) !== null && n !== void 0 ? n : Jf, P = Ve((i = (a = (u = (c = r == null ? void 0 : r.firstWeekContainsDate) !== null && c !== void 0 ? c : r == null || (s = r.locale) === null || s === void 0 || (f = s.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && u !== void 0 ? u : E.firstWeekContainsDate) !== null && a !== void 0 ? a : (l = E.locale) === null || l === void 0 || (v = l.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(P >= 1 && P <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var D = Ve((d = (g = (y = (m = r == null ? void 0 : r.weekStartsOn) !== null && m !== void 0 ? m : r == null || (h = r.locale) === null || h === void 0 || (O = h.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && y !== void 0 ? y : E.weekStartsOn) !== null && g !== void 0 ? g : (w = E.locale) === null || w === void 0 || (_ = w.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && d !== void 0 ? d : 0);
  if (!(D >= 0 && D <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!S.localize)
    throw new RangeError("locale must contain localize property");
  if (!S.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var A = We(e);
  if (!Ky(A))
    throw new RangeError("Invalid time value");
  var $ = Yf(A), F = Hf(A, $), k = {
    firstWeekContainsDate: P,
    weekStartsOn: D,
    locale: S,
    _originalDate: A
  }, j = b.match(Zh).map(function(U) {
    var L = U[0];
    if (L === "p" || L === "P") {
      var G = Ni[L];
      return G(U, S.formatLong);
    }
    return U;
  }).join("").match(Jh).map(function(U) {
    if (U === "''")
      return "'";
    var L = U[0];
    if (L === "'")
      return om(U);
    var G = sh[L];
    if (G)
      return !(r != null && r.useAdditionalWeekYearTokens) && Kf(U) && ro(U, t, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && Qf(U) && ro(U, t, String(e)), G(F, U, S.localize, k);
    if (L.match(rm))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + L + "`");
    return U;
  }).join("");
  return j;
}
function om(e) {
  var t = e.match(em);
  return t ? t[1].replace(tm, "'") : e;
}
function im(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return e;
}
function dn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? dn = function(r) {
    return typeof r;
  } : dn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, dn(e);
}
function Zf(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Li(e, t);
}
function Li(e, t) {
  return Li = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Li(e, t);
}
function el(e) {
  var t = um();
  return function() {
    var n = no(e), o;
    if (t) {
      var i = no(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return am(this, o);
  };
}
function am(e, t) {
  return t && (dn(t) === "object" || typeof t == "function") ? t : ji(e);
}
function ji(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function um() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function no(e) {
  return no = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, no(e);
}
function vu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function yu(e, t, r) {
  return t && Cc(e.prototype, t), r && Cc(e, r), e;
}
function Wi(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var cm = 10, tl = /* @__PURE__ */ function() {
  function e() {
    vu(this, e), Wi(this, "subPriority", 0);
  }
  return yu(e, [{
    key: "validate",
    value: function(r, n) {
      return !0;
    }
  }]), e;
}(), sm = /* @__PURE__ */ function(e) {
  Zf(r, e);
  var t = el(r);
  function r(n, o, i, a, u) {
    var c;
    return vu(this, r), c = t.call(this), c.value = n, c.validateValue = o, c.setValue = i, c.priority = a, u && (c.subPriority = u), c;
  }
  return yu(r, [{
    key: "validate",
    value: function(o, i) {
      return this.validateValue(o, this.value, i);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return this.setValue(o, i, this.value, a);
    }
  }]), r;
}(tl), fm = /* @__PURE__ */ function(e) {
  Zf(r, e);
  var t = el(r);
  function r() {
    var n;
    vu(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), Wi(ji(n), "priority", cm), Wi(ji(n), "subPriority", -1), n;
  }
  return yu(r, [{
    key: "set",
    value: function(o, i) {
      if (i.timestampIsSet)
        return o;
      var a = new Date(0);
      return a.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), a.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), a;
    }
  }]), r;
}(tl);
function lm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ac(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function dm(e, t, r) {
  return t && Ac(e.prototype, t), r && Ac(e, r), e;
}
var be = /* @__PURE__ */ function() {
  function e() {
    lm(this, e);
  }
  return dm(e, [{
    key: "run",
    value: function(r, n, o, i) {
      var a = this.parse(r, n, o, i);
      return a ? {
        setter: new sm(a.value, this.validate, this.set, this.priority, this.subPriority),
        rest: a.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(r, n, o) {
      return !0;
    }
  }]), e;
}();
function pn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? pn = function(r) {
    return typeof r;
  } : pn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, pn(e);
}
function pm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Mc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function vm(e, t, r) {
  return t && Mc(e.prototype, t), r && Mc(e, r), e;
}
function ym(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ui(e, t);
}
function Ui(e, t) {
  return Ui = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Ui(e, t);
}
function hm(e) {
  var t = gm();
  return function() {
    var n = oo(e), o;
    if (t) {
      var i = oo(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return mm(this, o);
  };
}
function mm(e, t) {
  return t && (pn(t) === "object" || typeof t == "function") ? t : Bi(e);
}
function Bi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function oo(e) {
  return oo = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, oo(e);
}
function kc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var bm = /* @__PURE__ */ function(e) {
  ym(r, e);
  var t = hm(r);
  function r() {
    var n;
    pm(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), kc(Bi(n), "priority", 140), kc(Bi(n), "incompatibleTokens", ["R", "u", "t", "T"]), n;
  }
  return vm(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "G":
        case "GG":
        case "GGG":
          return a.era(o, {
            width: "abbreviated"
          }) || a.era(o, {
            width: "narrow"
          });
        case "GGGGG":
          return a.era(o, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return a.era(o, {
            width: "wide"
          }) || a.era(o, {
            width: "abbreviated"
          }) || a.era(o, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return i.era = a, o.setUTCFullYear(a, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(be), Le = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, ht = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function je(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function Ae(e, t) {
  var r = t.match(e);
  return r ? {
    value: parseInt(r[0], 10),
    rest: t.slice(r[0].length)
  } : null;
}
function mt(e, t) {
  var r = t.match(e);
  if (!r)
    return null;
  if (r[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  var n = r[1] === "+" ? 1 : -1, o = r[2] ? parseInt(r[2], 10) : 0, i = r[3] ? parseInt(r[3], 10) : 0, a = r[5] ? parseInt(r[5], 10) : 0;
  return {
    value: n * (o * Xy + i * qf + a * Gy),
    rest: t.slice(r[0].length)
  };
}
function rl(e) {
  return Ae(Le.anyDigitsSigned, e);
}
function Me(e, t) {
  switch (e) {
    case 1:
      return Ae(Le.singleDigit, t);
    case 2:
      return Ae(Le.twoDigits, t);
    case 3:
      return Ae(Le.threeDigits, t);
    case 4:
      return Ae(Le.fourDigits, t);
    default:
      return Ae(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function io(e, t) {
  switch (e) {
    case 1:
      return Ae(Le.singleDigitSigned, t);
    case 2:
      return Ae(Le.twoDigitsSigned, t);
    case 3:
      return Ae(Le.threeDigitsSigned, t);
    case 4:
      return Ae(Le.fourDigitsSigned, t);
    default:
      return Ae(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function hu(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function nl(e, t) {
  var r = t > 0, n = r ? t : 1 - t, o;
  if (n <= 50)
    o = e || 100;
  else {
    var i = n + 50, a = Math.floor(i / 100) * 100, u = e >= i % 100;
    o = e + a - (u ? 100 : 0);
  }
  return r ? o : 1 - o;
}
function ol(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function vn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vn = function(r) {
    return typeof r;
  } : vn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, vn(e);
}
function wm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ic(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function _m(e, t, r) {
  return t && Ic(e.prototype, t), r && Ic(e, r), e;
}
function Om(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Fi(e, t);
}
function Fi(e, t) {
  return Fi = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Fi(e, t);
}
function Em(e) {
  var t = Sm();
  return function() {
    var n = ao(e), o;
    if (t) {
      var i = ao(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return xm(this, o);
  };
}
function xm(e, t) {
  return t && (vn(t) === "object" || typeof t == "function") ? t : Yi(e);
}
function Yi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Sm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ao(e) {
  return ao = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ao(e);
}
function Nc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Rm = /* @__PURE__ */ function(e) {
  Om(r, e);
  var t = Em(r);
  function r() {
    var n;
    wm(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), Nc(Yi(n), "priority", 130), Nc(Yi(n), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), n;
  }
  return _m(r, [{
    key: "parse",
    value: function(o, i, a) {
      var u = function(s) {
        return {
          year: s,
          isTwoDigitYear: i === "yy"
        };
      };
      switch (i) {
        case "y":
          return je(Me(4, o), u);
        case "yo":
          return je(a.ordinalNumber(o, {
            unit: "year"
          }), u);
        default:
          return je(Me(i.length, o), u);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i.isTwoDigitYear || i.year > 0;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      var u = o.getUTCFullYear();
      if (a.isTwoDigitYear) {
        var c = nl(a.year, u);
        return o.setUTCFullYear(c, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
      }
      var s = !("era" in i) || i.era === 1 ? a.year : 1 - a.year;
      return o.setUTCFullYear(s, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(be);
function yn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? yn = function(r) {
    return typeof r;
  } : yn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, yn(e);
}
function Tm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Lc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Pm(e, t, r) {
  return t && Lc(e.prototype, t), r && Lc(e, r), e;
}
function $m(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && qi(e, t);
}
function qi(e, t) {
  return qi = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, qi(e, t);
}
function Dm(e) {
  var t = Am();
  return function() {
    var n = uo(e), o;
    if (t) {
      var i = uo(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Cm(this, o);
  };
}
function Cm(e, t) {
  return t && (yn(t) === "object" || typeof t == "function") ? t : Hi(e);
}
function Hi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Am() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function uo(e) {
  return uo = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, uo(e);
}
function jc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Mm = /* @__PURE__ */ function(e) {
  $m(r, e);
  var t = Dm(r);
  function r() {
    var n;
    Tm(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), jc(Hi(n), "priority", 130), jc(Hi(n), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), n;
  }
  return Pm(r, [{
    key: "parse",
    value: function(o, i, a) {
      var u = function(s) {
        return {
          year: s,
          isTwoDigitYear: i === "YY"
        };
      };
      switch (i) {
        case "Y":
          return je(Me(4, o), u);
        case "Yo":
          return je(a.ordinalNumber(o, {
            unit: "year"
          }), u);
        default:
          return je(Me(i.length, o), u);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i.isTwoDigitYear || i.year > 0;
    }
  }, {
    key: "set",
    value: function(o, i, a, u) {
      var c = pu(o, u);
      if (a.isTwoDigitYear) {
        var s = nl(a.year, c);
        return o.setUTCFullYear(s, 0, u.firstWeekContainsDate), o.setUTCHours(0, 0, 0, 0), tr(o, u);
      }
      var f = !("era" in i) || i.era === 1 ? a.year : 1 - a.year;
      return o.setUTCFullYear(f, 0, u.firstWeekContainsDate), o.setUTCHours(0, 0, 0, 0), tr(o, u);
    }
  }]), r;
}(be);
function hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? hn = function(r) {
    return typeof r;
  } : hn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, hn(e);
}
function km(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Im(e, t, r) {
  return t && Wc(e.prototype, t), r && Wc(e, r), e;
}
function Nm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && zi(e, t);
}
function zi(e, t) {
  return zi = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, zi(e, t);
}
function Lm(e) {
  var t = Wm();
  return function() {
    var n = co(e), o;
    if (t) {
      var i = co(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return jm(this, o);
  };
}
function jm(e, t) {
  return t && (hn(t) === "object" || typeof t == "function") ? t : Vi(e);
}
function Vi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Wm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function co(e) {
  return co = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, co(e);
}
function Uc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Um = /* @__PURE__ */ function(e) {
  Nm(r, e);
  var t = Lm(r);
  function r() {
    var n;
    km(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), Uc(Vi(n), "priority", 130), Uc(Vi(n), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), n;
  }
  return Im(r, [{
    key: "parse",
    value: function(o, i) {
      return io(i === "R" ? 4 : i.length, o);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      var u = new Date(0);
      return u.setUTCFullYear(a, 0, 4), u.setUTCHours(0, 0, 0, 0), hr(u);
    }
  }]), r;
}(be);
function mn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mn = function(r) {
    return typeof r;
  } : mn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, mn(e);
}
function Bm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Fm(e, t, r) {
  return t && Bc(e.prototype, t), r && Bc(e, r), e;
}
function Ym(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Xi(e, t);
}
function Xi(e, t) {
  return Xi = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Xi(e, t);
}
function qm(e) {
  var t = zm();
  return function() {
    var n = so(e), o;
    if (t) {
      var i = so(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Hm(this, o);
  };
}
function Hm(e, t) {
  return t && (mn(t) === "object" || typeof t == "function") ? t : Gi(e);
}
function Gi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function so(e) {
  return so = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, so(e);
}
function Fc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Vm = /* @__PURE__ */ function(e) {
  Ym(r, e);
  var t = qm(r);
  function r() {
    var n;
    Bm(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), Fc(Gi(n), "priority", 130), Fc(Gi(n), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), n;
  }
  return Fm(r, [{
    key: "parse",
    value: function(o, i) {
      return io(i === "u" ? 4 : i.length, o);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCFullYear(a, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(be);
function gn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? gn = function(r) {
    return typeof r;
  } : gn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, gn(e);
}
function Xm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Yc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Gm(e, t, r) {
  return t && Yc(e.prototype, t), r && Yc(e, r), e;
}
function Qm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Qi(e, t);
}
function Qi(e, t) {
  return Qi = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Qi(e, t);
}
function Km(e) {
  var t = Zm();
  return function() {
    var n = fo(e), o;
    if (t) {
      var i = fo(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Jm(this, o);
  };
}
function Jm(e, t) {
  return t && (gn(t) === "object" || typeof t == "function") ? t : Ki(e);
}
function Ki(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Zm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function fo(e) {
  return fo = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fo(e);
}
function qc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var eg = /* @__PURE__ */ function(e) {
  Qm(r, e);
  var t = Km(r);
  function r() {
    var n;
    Xm(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), qc(Ki(n), "priority", 120), qc(Ki(n), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), n;
  }
  return Gm(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "Q":
        case "QQ":
          return Me(i.length, o);
        case "Qo":
          return a.ordinalNumber(o, {
            unit: "quarter"
          });
        case "QQQ":
          return a.quarter(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.quarter(o, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return a.quarter(o, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return a.quarter(o, {
            width: "wide",
            context: "formatting"
          }) || a.quarter(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.quarter(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 4;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMonth((a - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(be);
function bn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? bn = function(r) {
    return typeof r;
  } : bn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, bn(e);
}
function tg(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function rg(e, t, r) {
  return t && Hc(e.prototype, t), r && Hc(e, r), e;
}
function ng(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ji(e, t);
}
function Ji(e, t) {
  return Ji = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Ji(e, t);
}
function og(e) {
  var t = ag();
  return function() {
    var n = lo(e), o;
    if (t) {
      var i = lo(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return ig(this, o);
  };
}
function ig(e, t) {
  return t && (bn(t) === "object" || typeof t == "function") ? t : Zi(e);
}
function Zi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ag() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function lo(e) {
  return lo = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, lo(e);
}
function zc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var ug = /* @__PURE__ */ function(e) {
  ng(r, e);
  var t = og(r);
  function r() {
    var n;
    tg(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), zc(Zi(n), "priority", 120), zc(Zi(n), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), n;
  }
  return rg(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "q":
        case "qq":
          return Me(i.length, o);
        case "qo":
          return a.ordinalNumber(o, {
            unit: "quarter"
          });
        case "qqq":
          return a.quarter(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.quarter(o, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return a.quarter(o, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return a.quarter(o, {
            width: "wide",
            context: "standalone"
          }) || a.quarter(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.quarter(o, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 4;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMonth((a - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(be);
function wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wn = function(r) {
    return typeof r;
  } : wn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, wn(e);
}
function cg(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function sg(e, t, r) {
  return t && Vc(e.prototype, t), r && Vc(e, r), e;
}
function fg(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ea(e, t);
}
function ea(e, t) {
  return ea = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, ea(e, t);
}
function lg(e) {
  var t = pg();
  return function() {
    var n = po(e), o;
    if (t) {
      var i = po(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return dg(this, o);
  };
}
function dg(e, t) {
  return t && (wn(t) === "object" || typeof t == "function") ? t : ta(e);
}
function ta(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pg() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function po(e) {
  return po = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, po(e);
}
function Xc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var vg = /* @__PURE__ */ function(e) {
  fg(r, e);
  var t = lg(r);
  function r() {
    var n;
    cg(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), Xc(ta(n), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), Xc(ta(n), "priority", 110), n;
  }
  return sg(r, [{
    key: "parse",
    value: function(o, i, a) {
      var u = function(s) {
        return s - 1;
      };
      switch (i) {
        case "M":
          return je(Ae(Le.month, o), u);
        case "MM":
          return je(Me(2, o), u);
        case "Mo":
          return je(a.ordinalNumber(o, {
            unit: "month"
          }), u);
        case "MMM":
          return a.month(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.month(o, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return a.month(o, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return a.month(o, {
            width: "wide",
            context: "formatting"
          }) || a.month(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.month(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMonth(a, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(be);
function _n(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _n = function(r) {
    return typeof r;
  } : _n = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, _n(e);
}
function yg(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function hg(e, t, r) {
  return t && Gc(e.prototype, t), r && Gc(e, r), e;
}
function mg(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ra(e, t);
}
function ra(e, t) {
  return ra = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, ra(e, t);
}
function gg(e) {
  var t = wg();
  return function() {
    var n = vo(e), o;
    if (t) {
      var i = vo(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return bg(this, o);
  };
}
function bg(e, t) {
  return t && (_n(t) === "object" || typeof t == "function") ? t : na(e);
}
function na(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wg() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function vo(e) {
  return vo = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vo(e);
}
function Qc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var _g = /* @__PURE__ */ function(e) {
  mg(r, e);
  var t = gg(r);
  function r() {
    var n;
    yg(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), Qc(na(n), "priority", 110), Qc(na(n), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), n;
  }
  return hg(r, [{
    key: "parse",
    value: function(o, i, a) {
      var u = function(s) {
        return s - 1;
      };
      switch (i) {
        case "L":
          return je(Ae(Le.month, o), u);
        case "LL":
          return je(Me(2, o), u);
        case "Lo":
          return je(a.ordinalNumber(o, {
            unit: "month"
          }), u);
        case "LLL":
          return a.month(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.month(o, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return a.month(o, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return a.month(o, {
            width: "wide",
            context: "standalone"
          }) || a.month(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.month(o, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMonth(a, 1), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(be);
function Og(e, t, r) {
  De(2, arguments);
  var n = We(e), o = Ve(t), i = Xf(n, r) - o;
  return n.setUTCDate(n.getUTCDate() - i * 7), n;
}
function On(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? On = function(r) {
    return typeof r;
  } : On = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, On(e);
}
function Eg(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function xg(e, t, r) {
  return t && Kc(e.prototype, t), r && Kc(e, r), e;
}
function Sg(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && oa(e, t);
}
function oa(e, t) {
  return oa = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, oa(e, t);
}
function Rg(e) {
  var t = Pg();
  return function() {
    var n = yo(e), o;
    if (t) {
      var i = yo(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Tg(this, o);
  };
}
function Tg(e, t) {
  return t && (On(t) === "object" || typeof t == "function") ? t : ia(e);
}
function ia(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pg() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function yo(e) {
  return yo = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, yo(e);
}
function Jc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var $g = /* @__PURE__ */ function(e) {
  Sg(r, e);
  var t = Rg(r);
  function r() {
    var n;
    Eg(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), Jc(ia(n), "priority", 100), Jc(ia(n), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), n;
  }
  return xg(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "w":
          return Ae(Le.week, o);
        case "wo":
          return a.ordinalNumber(o, {
            unit: "week"
          });
        default:
          return Me(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 53;
    }
  }, {
    key: "set",
    value: function(o, i, a, u) {
      return tr(Og(o, a, u), u);
    }
  }]), r;
}(be);
function Dg(e, t) {
  De(2, arguments);
  var r = We(e), n = Ve(t), o = Vf(r) - n;
  return r.setUTCDate(r.getUTCDate() - o * 7), r;
}
function En(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? En = function(r) {
    return typeof r;
  } : En = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, En(e);
}
function Cg(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zc(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ag(e, t, r) {
  return t && Zc(e.prototype, t), r && Zc(e, r), e;
}
function Mg(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && aa(e, t);
}
function aa(e, t) {
  return aa = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, aa(e, t);
}
function kg(e) {
  var t = Ng();
  return function() {
    var n = ho(e), o;
    if (t) {
      var i = ho(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Ig(this, o);
  };
}
function Ig(e, t) {
  return t && (En(t) === "object" || typeof t == "function") ? t : ua(e);
}
function ua(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ng() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ho(e) {
  return ho = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ho(e);
}
function es(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Lg = /* @__PURE__ */ function(e) {
  Mg(r, e);
  var t = kg(r);
  function r() {
    var n;
    Cg(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), es(ua(n), "priority", 100), es(ua(n), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), n;
  }
  return Ag(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "I":
          return Ae(Le.week, o);
        case "Io":
          return a.ordinalNumber(o, {
            unit: "week"
          });
        default:
          return Me(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 53;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return hr(Dg(o, a));
    }
  }]), r;
}(be);
function xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xn = function(r) {
    return typeof r;
  } : xn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, xn(e);
}
function jg(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ts(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Wg(e, t, r) {
  return t && ts(e.prototype, t), r && ts(e, r), e;
}
function Ug(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ca(e, t);
}
function ca(e, t) {
  return ca = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, ca(e, t);
}
function Bg(e) {
  var t = Yg();
  return function() {
    var n = mo(e), o;
    if (t) {
      var i = mo(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Fg(this, o);
  };
}
function Fg(e, t) {
  return t && (xn(t) === "object" || typeof t == "function") ? t : Sn(e);
}
function Sn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Yg() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function mo(e) {
  return mo = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, mo(e);
}
function yi(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var qg = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Hg = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], zg = /* @__PURE__ */ function(e) {
  Ug(r, e);
  var t = Bg(r);
  function r() {
    var n;
    jg(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), yi(Sn(n), "priority", 90), yi(Sn(n), "subPriority", 1), yi(Sn(n), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), n;
  }
  return Wg(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "d":
          return Ae(Le.date, o);
        case "do":
          return a.ordinalNumber(o, {
            unit: "date"
          });
        default:
          return Me(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      var a = o.getUTCFullYear(), u = ol(a), c = o.getUTCMonth();
      return u ? i >= 1 && i <= Hg[c] : i >= 1 && i <= qg[c];
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCDate(a), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(be);
function Rn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Rn = function(r) {
    return typeof r;
  } : Rn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Rn(e);
}
function Vg(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rs(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Xg(e, t, r) {
  return t && rs(e.prototype, t), r && rs(e, r), e;
}
function Gg(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && sa(e, t);
}
function sa(e, t) {
  return sa = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, sa(e, t);
}
function Qg(e) {
  var t = Jg();
  return function() {
    var n = go(e), o;
    if (t) {
      var i = go(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Kg(this, o);
  };
}
function Kg(e, t) {
  return t && (Rn(t) === "object" || typeof t == "function") ? t : Tn(e);
}
function Tn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jg() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function go(e) {
  return go = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, go(e);
}
function hi(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Zg = /* @__PURE__ */ function(e) {
  Gg(r, e);
  var t = Qg(r);
  function r() {
    var n;
    Vg(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), hi(Tn(n), "priority", 90), hi(Tn(n), "subpriority", 1), hi(Tn(n), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), n;
  }
  return Xg(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "D":
        case "DD":
          return Ae(Le.dayOfYear, o);
        case "Do":
          return a.ordinalNumber(o, {
            unit: "date"
          });
        default:
          return Me(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      var a = o.getUTCFullYear(), u = ol(a);
      return u ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMonth(0, a), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(be);
function mu(e, t, r) {
  var n, o, i, a, u, c, s, f;
  De(2, arguments);
  var l = br(), v = Ve((n = (o = (i = (a = r == null ? void 0 : r.weekStartsOn) !== null && a !== void 0 ? a : r == null || (u = r.locale) === null || u === void 0 || (c = u.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && i !== void 0 ? i : l.weekStartsOn) !== null && o !== void 0 ? o : (s = l.locale) === null || s === void 0 || (f = s.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(v >= 0 && v <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var d = We(e), g = Ve(t), y = d.getUTCDay(), m = g % 7, h = (m + 7) % 7, O = (h < v ? 7 : 0) + g - y;
  return d.setUTCDate(d.getUTCDate() + O), d;
}
function Pn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pn = function(r) {
    return typeof r;
  } : Pn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Pn(e);
}
function eb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ns(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function tb(e, t, r) {
  return t && ns(e.prototype, t), r && ns(e, r), e;
}
function rb(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && fa(e, t);
}
function fa(e, t) {
  return fa = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, fa(e, t);
}
function nb(e) {
  var t = ib();
  return function() {
    var n = bo(e), o;
    if (t) {
      var i = bo(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return ob(this, o);
  };
}
function ob(e, t) {
  return t && (Pn(t) === "object" || typeof t == "function") ? t : la(e);
}
function la(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ib() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function bo(e) {
  return bo = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bo(e);
}
function os(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var ab = /* @__PURE__ */ function(e) {
  rb(r, e);
  var t = nb(r);
  function r() {
    var n;
    eb(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), os(la(n), "priority", 90), os(la(n), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), n;
  }
  return tb(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "E":
        case "EE":
        case "EEE":
          return a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return a.day(o, {
            width: "wide",
            context: "formatting"
          }) || a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(o, i, a, u) {
      return o = mu(o, a, u), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(be);
function $n(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $n = function(r) {
    return typeof r;
  } : $n = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, $n(e);
}
function ub(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function is(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function cb(e, t, r) {
  return t && is(e.prototype, t), r && is(e, r), e;
}
function sb(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && da(e, t);
}
function da(e, t) {
  return da = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, da(e, t);
}
function fb(e) {
  var t = db();
  return function() {
    var n = wo(e), o;
    if (t) {
      var i = wo(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return lb(this, o);
  };
}
function lb(e, t) {
  return t && ($n(t) === "object" || typeof t == "function") ? t : pa(e);
}
function pa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function db() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function wo(e) {
  return wo = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wo(e);
}
function as(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var pb = /* @__PURE__ */ function(e) {
  sb(r, e);
  var t = fb(r);
  function r() {
    var n;
    ub(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), as(pa(n), "priority", 90), as(pa(n), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), n;
  }
  return cb(r, [{
    key: "parse",
    value: function(o, i, a, u) {
      var c = function(f) {
        var l = Math.floor((f - 1) / 7) * 7;
        return (f + u.weekStartsOn + 6) % 7 + l;
      };
      switch (i) {
        case "e":
        case "ee":
          return je(Me(i.length, o), c);
        case "eo":
          return je(a.ordinalNumber(o, {
            unit: "day"
          }), c);
        case "eee":
          return a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return a.day(o, {
            width: "wide",
            context: "formatting"
          }) || a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(o, i, a, u) {
      return o = mu(o, a, u), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(be);
function Dn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Dn = function(r) {
    return typeof r;
  } : Dn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Dn(e);
}
function vb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function us(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function yb(e, t, r) {
  return t && us(e.prototype, t), r && us(e, r), e;
}
function hb(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && va(e, t);
}
function va(e, t) {
  return va = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, va(e, t);
}
function mb(e) {
  var t = bb();
  return function() {
    var n = _o(e), o;
    if (t) {
      var i = _o(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return gb(this, o);
  };
}
function gb(e, t) {
  return t && (Dn(t) === "object" || typeof t == "function") ? t : ya(e);
}
function ya(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bb() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function _o(e) {
  return _o = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _o(e);
}
function cs(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var wb = /* @__PURE__ */ function(e) {
  hb(r, e);
  var t = mb(r);
  function r() {
    var n;
    vb(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), cs(ya(n), "priority", 90), cs(ya(n), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), n;
  }
  return yb(r, [{
    key: "parse",
    value: function(o, i, a, u) {
      var c = function(f) {
        var l = Math.floor((f - 1) / 7) * 7;
        return (f + u.weekStartsOn + 6) % 7 + l;
      };
      switch (i) {
        case "c":
        case "cc":
          return je(Me(i.length, o), c);
        case "co":
          return je(a.ordinalNumber(o, {
            unit: "day"
          }), c);
        case "ccc":
          return a.day(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.day(o, {
            width: "short",
            context: "standalone"
          }) || a.day(o, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return a.day(o, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return a.day(o, {
            width: "short",
            context: "standalone"
          }) || a.day(o, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return a.day(o, {
            width: "wide",
            context: "standalone"
          }) || a.day(o, {
            width: "abbreviated",
            context: "standalone"
          }) || a.day(o, {
            width: "short",
            context: "standalone"
          }) || a.day(o, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 6;
    }
  }, {
    key: "set",
    value: function(o, i, a, u) {
      return o = mu(o, a, u), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(be);
function _b(e, t) {
  De(2, arguments);
  var r = Ve(t);
  r % 7 === 0 && (r = r - 7);
  var n = 1, o = We(e), i = o.getUTCDay(), a = r % 7, u = (a + 7) % 7, c = (u < n ? 7 : 0) + r - i;
  return o.setUTCDate(o.getUTCDate() + c), o;
}
function Cn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Cn = function(r) {
    return typeof r;
  } : Cn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Cn(e);
}
function Ob(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ss(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Eb(e, t, r) {
  return t && ss(e.prototype, t), r && ss(e, r), e;
}
function xb(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ha(e, t);
}
function ha(e, t) {
  return ha = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, ha(e, t);
}
function Sb(e) {
  var t = Tb();
  return function() {
    var n = Oo(e), o;
    if (t) {
      var i = Oo(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Rb(this, o);
  };
}
function Rb(e, t) {
  return t && (Cn(t) === "object" || typeof t == "function") ? t : ma(e);
}
function ma(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Tb() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Oo(e) {
  return Oo = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Oo(e);
}
function fs(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Pb = /* @__PURE__ */ function(e) {
  xb(r, e);
  var t = Sb(r);
  function r() {
    var n;
    Ob(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), fs(ma(n), "priority", 90), fs(ma(n), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), n;
  }
  return Eb(r, [{
    key: "parse",
    value: function(o, i, a) {
      var u = function(s) {
        return s === 0 ? 7 : s;
      };
      switch (i) {
        case "i":
        case "ii":
          return Me(i.length, o);
        case "io":
          return a.ordinalNumber(o, {
            unit: "day"
          });
        case "iii":
          return je(a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiii":
          return je(a.day(o, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiiiii":
          return je(a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          }), u);
        case "iiii":
        default:
          return je(a.day(o, {
            width: "wide",
            context: "formatting"
          }) || a.day(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(o, {
            width: "short",
            context: "formatting"
          }) || a.day(o, {
            width: "narrow",
            context: "formatting"
          }), u);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 7;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o = _b(o, a), o.setUTCHours(0, 0, 0, 0), o;
    }
  }]), r;
}(be);
function An(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? An = function(r) {
    return typeof r;
  } : An = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, An(e);
}
function $b(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ls(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Db(e, t, r) {
  return t && ls(e.prototype, t), r && ls(e, r), e;
}
function Cb(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ga(e, t);
}
function ga(e, t) {
  return ga = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, ga(e, t);
}
function Ab(e) {
  var t = kb();
  return function() {
    var n = Eo(e), o;
    if (t) {
      var i = Eo(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Mb(this, o);
  };
}
function Mb(e, t) {
  return t && (An(t) === "object" || typeof t == "function") ? t : ba(e);
}
function ba(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kb() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Eo(e) {
  return Eo = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Eo(e);
}
function ds(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Ib = /* @__PURE__ */ function(e) {
  Cb(r, e);
  var t = Ab(r);
  function r() {
    var n;
    $b(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), ds(ba(n), "priority", 80), ds(ba(n), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), n;
  }
  return Db(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "a":
        case "aa":
        case "aaa":
          return a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return a.dayPeriod(o, {
            width: "wide",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCHours(hu(a), 0, 0, 0), o;
    }
  }]), r;
}(be);
function Mn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Mn = function(r) {
    return typeof r;
  } : Mn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Mn(e);
}
function Nb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ps(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Lb(e, t, r) {
  return t && ps(e.prototype, t), r && ps(e, r), e;
}
function jb(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && wa(e, t);
}
function wa(e, t) {
  return wa = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, wa(e, t);
}
function Wb(e) {
  var t = Bb();
  return function() {
    var n = xo(e), o;
    if (t) {
      var i = xo(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Ub(this, o);
  };
}
function Ub(e, t) {
  return t && (Mn(t) === "object" || typeof t == "function") ? t : _a(e);
}
function _a(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Bb() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function xo(e) {
  return xo = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xo(e);
}
function vs(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Fb = /* @__PURE__ */ function(e) {
  jb(r, e);
  var t = Wb(r);
  function r() {
    var n;
    Nb(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), vs(_a(n), "priority", 80), vs(_a(n), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), n;
  }
  return Lb(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "b":
        case "bb":
        case "bbb":
          return a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return a.dayPeriod(o, {
            width: "wide",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCHours(hu(a), 0, 0, 0), o;
    }
  }]), r;
}(be);
function kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? kn = function(r) {
    return typeof r;
  } : kn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, kn(e);
}
function Yb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ys(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function qb(e, t, r) {
  return t && ys(e.prototype, t), r && ys(e, r), e;
}
function Hb(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Oa(e, t);
}
function Oa(e, t) {
  return Oa = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Oa(e, t);
}
function zb(e) {
  var t = Xb();
  return function() {
    var n = So(e), o;
    if (t) {
      var i = So(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Vb(this, o);
  };
}
function Vb(e, t) {
  return t && (kn(t) === "object" || typeof t == "function") ? t : Ea(e);
}
function Ea(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xb() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function So(e) {
  return So = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, So(e);
}
function hs(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Gb = /* @__PURE__ */ function(e) {
  Hb(r, e);
  var t = zb(r);
  function r() {
    var n;
    Yb(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), hs(Ea(n), "priority", 80), hs(Ea(n), "incompatibleTokens", ["a", "b", "t", "T"]), n;
  }
  return qb(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "B":
        case "BB":
        case "BBB":
          return a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return a.dayPeriod(o, {
            width: "wide",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "abbreviated",
            context: "formatting"
          }) || a.dayPeriod(o, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCHours(hu(a), 0, 0, 0), o;
    }
  }]), r;
}(be);
function In(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? In = function(r) {
    return typeof r;
  } : In = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, In(e);
}
function Qb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ms(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Kb(e, t, r) {
  return t && ms(e.prototype, t), r && ms(e, r), e;
}
function Jb(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && xa(e, t);
}
function xa(e, t) {
  return xa = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, xa(e, t);
}
function Zb(e) {
  var t = tw();
  return function() {
    var n = Ro(e), o;
    if (t) {
      var i = Ro(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return ew(this, o);
  };
}
function ew(e, t) {
  return t && (In(t) === "object" || typeof t == "function") ? t : Sa(e);
}
function Sa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tw() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ro(e) {
  return Ro = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ro(e);
}
function gs(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var rw = /* @__PURE__ */ function(e) {
  Jb(r, e);
  var t = Zb(r);
  function r() {
    var n;
    Qb(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), gs(Sa(n), "priority", 70), gs(Sa(n), "incompatibleTokens", ["H", "K", "k", "t", "T"]), n;
  }
  return Kb(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "h":
          return Ae(Le.hour12h, o);
        case "ho":
          return a.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return Me(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 12;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      var u = o.getUTCHours() >= 12;
      return u && a < 12 ? o.setUTCHours(a + 12, 0, 0, 0) : !u && a === 12 ? o.setUTCHours(0, 0, 0, 0) : o.setUTCHours(a, 0, 0, 0), o;
    }
  }]), r;
}(be);
function Nn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Nn = function(r) {
    return typeof r;
  } : Nn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Nn(e);
}
function nw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bs(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ow(e, t, r) {
  return t && bs(e.prototype, t), r && bs(e, r), e;
}
function iw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ra(e, t);
}
function Ra(e, t) {
  return Ra = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Ra(e, t);
}
function aw(e) {
  var t = cw();
  return function() {
    var n = To(e), o;
    if (t) {
      var i = To(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return uw(this, o);
  };
}
function uw(e, t) {
  return t && (Nn(t) === "object" || typeof t == "function") ? t : Ta(e);
}
function Ta(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cw() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function To(e) {
  return To = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, To(e);
}
function ws(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var sw = /* @__PURE__ */ function(e) {
  iw(r, e);
  var t = aw(r);
  function r() {
    var n;
    nw(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), ws(Ta(n), "priority", 70), ws(Ta(n), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), n;
  }
  return ow(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "H":
          return Ae(Le.hour23h, o);
        case "Ho":
          return a.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return Me(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 23;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCHours(a, 0, 0, 0), o;
    }
  }]), r;
}(be);
function Ln(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ln = function(r) {
    return typeof r;
  } : Ln = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ln(e);
}
function fw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _s(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function lw(e, t, r) {
  return t && _s(e.prototype, t), r && _s(e, r), e;
}
function dw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Pa(e, t);
}
function Pa(e, t) {
  return Pa = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Pa(e, t);
}
function pw(e) {
  var t = yw();
  return function() {
    var n = Po(e), o;
    if (t) {
      var i = Po(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return vw(this, o);
  };
}
function vw(e, t) {
  return t && (Ln(t) === "object" || typeof t == "function") ? t : $a(e);
}
function $a(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yw() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Po(e) {
  return Po = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Po(e);
}
function Os(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var hw = /* @__PURE__ */ function(e) {
  dw(r, e);
  var t = pw(r);
  function r() {
    var n;
    fw(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), Os($a(n), "priority", 70), Os($a(n), "incompatibleTokens", ["h", "H", "k", "t", "T"]), n;
  }
  return lw(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "K":
          return Ae(Le.hour11h, o);
        case "Ko":
          return a.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return Me(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 11;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      var u = o.getUTCHours() >= 12;
      return u && a < 12 ? o.setUTCHours(a + 12, 0, 0, 0) : o.setUTCHours(a, 0, 0, 0), o;
    }
  }]), r;
}(be);
function jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jn = function(r) {
    return typeof r;
  } : jn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, jn(e);
}
function mw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Es(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function gw(e, t, r) {
  return t && Es(e.prototype, t), r && Es(e, r), e;
}
function bw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Da(e, t);
}
function Da(e, t) {
  return Da = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Da(e, t);
}
function ww(e) {
  var t = Ow();
  return function() {
    var n = $o(e), o;
    if (t) {
      var i = $o(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return _w(this, o);
  };
}
function _w(e, t) {
  return t && (jn(t) === "object" || typeof t == "function") ? t : Ca(e);
}
function Ca(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ow() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function $o(e) {
  return $o = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $o(e);
}
function xs(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Ew = /* @__PURE__ */ function(e) {
  bw(r, e);
  var t = ww(r);
  function r() {
    var n;
    mw(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), xs(Ca(n), "priority", 70), xs(Ca(n), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), n;
  }
  return gw(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "k":
          return Ae(Le.hour24h, o);
        case "ko":
          return a.ordinalNumber(o, {
            unit: "hour"
          });
        default:
          return Me(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 1 && i <= 24;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      var u = a <= 24 ? a % 24 : a;
      return o.setUTCHours(u, 0, 0, 0), o;
    }
  }]), r;
}(be);
function Wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wn = function(r) {
    return typeof r;
  } : Wn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Wn(e);
}
function xw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ss(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Sw(e, t, r) {
  return t && Ss(e.prototype, t), r && Ss(e, r), e;
}
function Rw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Aa(e, t);
}
function Aa(e, t) {
  return Aa = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Aa(e, t);
}
function Tw(e) {
  var t = $w();
  return function() {
    var n = Do(e), o;
    if (t) {
      var i = Do(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Pw(this, o);
  };
}
function Pw(e, t) {
  return t && (Wn(t) === "object" || typeof t == "function") ? t : Ma(e);
}
function Ma(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $w() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Do(e) {
  return Do = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Do(e);
}
function Rs(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Dw = /* @__PURE__ */ function(e) {
  Rw(r, e);
  var t = Tw(r);
  function r() {
    var n;
    xw(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), Rs(Ma(n), "priority", 60), Rs(Ma(n), "incompatibleTokens", ["t", "T"]), n;
  }
  return Sw(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "m":
          return Ae(Le.minute, o);
        case "mo":
          return a.ordinalNumber(o, {
            unit: "minute"
          });
        default:
          return Me(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 59;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMinutes(a, 0, 0), o;
    }
  }]), r;
}(be);
function Un(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Un = function(r) {
    return typeof r;
  } : Un = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Un(e);
}
function Cw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ts(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Aw(e, t, r) {
  return t && Ts(e.prototype, t), r && Ts(e, r), e;
}
function Mw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ka(e, t);
}
function ka(e, t) {
  return ka = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, ka(e, t);
}
function kw(e) {
  var t = Nw();
  return function() {
    var n = Co(e), o;
    if (t) {
      var i = Co(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Iw(this, o);
  };
}
function Iw(e, t) {
  return t && (Un(t) === "object" || typeof t == "function") ? t : Ia(e);
}
function Ia(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Nw() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Co(e) {
  return Co = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Co(e);
}
function Ps(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Lw = /* @__PURE__ */ function(e) {
  Mw(r, e);
  var t = kw(r);
  function r() {
    var n;
    Cw(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), Ps(Ia(n), "priority", 50), Ps(Ia(n), "incompatibleTokens", ["t", "T"]), n;
  }
  return Aw(r, [{
    key: "parse",
    value: function(o, i, a) {
      switch (i) {
        case "s":
          return Ae(Le.second, o);
        case "so":
          return a.ordinalNumber(o, {
            unit: "second"
          });
        default:
          return Me(i.length, o);
      }
    }
  }, {
    key: "validate",
    value: function(o, i) {
      return i >= 0 && i <= 59;
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCSeconds(a, 0), o;
    }
  }]), r;
}(be);
function Bn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bn = function(r) {
    return typeof r;
  } : Bn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Bn(e);
}
function jw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $s(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ww(e, t, r) {
  return t && $s(e.prototype, t), r && $s(e, r), e;
}
function Uw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Na(e, t);
}
function Na(e, t) {
  return Na = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Na(e, t);
}
function Bw(e) {
  var t = Yw();
  return function() {
    var n = Ao(e), o;
    if (t) {
      var i = Ao(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Fw(this, o);
  };
}
function Fw(e, t) {
  return t && (Bn(t) === "object" || typeof t == "function") ? t : La(e);
}
function La(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Yw() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ao(e) {
  return Ao = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ao(e);
}
function Ds(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var qw = /* @__PURE__ */ function(e) {
  Uw(r, e);
  var t = Bw(r);
  function r() {
    var n;
    jw(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), Ds(La(n), "priority", 30), Ds(La(n), "incompatibleTokens", ["t", "T"]), n;
  }
  return Ww(r, [{
    key: "parse",
    value: function(o, i) {
      var a = function(c) {
        return Math.floor(c * Math.pow(10, -i.length + 3));
      };
      return je(Me(i.length, o), a);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return o.setUTCMilliseconds(a), o;
    }
  }]), r;
}(be);
function Fn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fn = function(r) {
    return typeof r;
  } : Fn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Fn(e);
}
function Hw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cs(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function zw(e, t, r) {
  return t && Cs(e.prototype, t), r && Cs(e, r), e;
}
function Vw(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ja(e, t);
}
function ja(e, t) {
  return ja = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, ja(e, t);
}
function Xw(e) {
  var t = Qw();
  return function() {
    var n = Mo(e), o;
    if (t) {
      var i = Mo(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return Gw(this, o);
  };
}
function Gw(e, t) {
  return t && (Fn(t) === "object" || typeof t == "function") ? t : Wa(e);
}
function Wa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qw() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Mo(e) {
  return Mo = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Mo(e);
}
function As(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var Kw = /* @__PURE__ */ function(e) {
  Vw(r, e);
  var t = Xw(r);
  function r() {
    var n;
    Hw(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), As(Wa(n), "priority", 10), As(Wa(n), "incompatibleTokens", ["t", "T", "x"]), n;
  }
  return zw(r, [{
    key: "parse",
    value: function(o, i) {
      switch (i) {
        case "X":
          return mt(ht.basicOptionalMinutes, o);
        case "XX":
          return mt(ht.basic, o);
        case "XXXX":
          return mt(ht.basicOptionalSeconds, o);
        case "XXXXX":
          return mt(ht.extendedOptionalSeconds, o);
        case "XXX":
        default:
          return mt(ht.extended, o);
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return i.timestampIsSet ? o : new Date(o.getTime() - a);
    }
  }]), r;
}(be);
function Yn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yn = function(r) {
    return typeof r;
  } : Yn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Yn(e);
}
function Jw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ms(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Zw(e, t, r) {
  return t && Ms(e.prototype, t), r && Ms(e, r), e;
}
function e_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ua(e, t);
}
function Ua(e, t) {
  return Ua = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Ua(e, t);
}
function t_(e) {
  var t = n_();
  return function() {
    var n = ko(e), o;
    if (t) {
      var i = ko(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return r_(this, o);
  };
}
function r_(e, t) {
  return t && (Yn(t) === "object" || typeof t == "function") ? t : Ba(e);
}
function Ba(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function n_() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ko(e) {
  return ko = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ko(e);
}
function ks(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var o_ = /* @__PURE__ */ function(e) {
  e_(r, e);
  var t = t_(r);
  function r() {
    var n;
    Jw(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), ks(Ba(n), "priority", 10), ks(Ba(n), "incompatibleTokens", ["t", "T", "X"]), n;
  }
  return Zw(r, [{
    key: "parse",
    value: function(o, i) {
      switch (i) {
        case "x":
          return mt(ht.basicOptionalMinutes, o);
        case "xx":
          return mt(ht.basic, o);
        case "xxxx":
          return mt(ht.basicOptionalSeconds, o);
        case "xxxxx":
          return mt(ht.extendedOptionalSeconds, o);
        case "xxx":
        default:
          return mt(ht.extended, o);
      }
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return i.timestampIsSet ? o : new Date(o.getTime() - a);
    }
  }]), r;
}(be);
function qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qn = function(r) {
    return typeof r;
  } : qn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, qn(e);
}
function i_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Is(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function a_(e, t, r) {
  return t && Is(e.prototype, t), r && Is(e, r), e;
}
function u_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Fa(e, t);
}
function Fa(e, t) {
  return Fa = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, Fa(e, t);
}
function c_(e) {
  var t = f_();
  return function() {
    var n = Io(e), o;
    if (t) {
      var i = Io(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return s_(this, o);
  };
}
function s_(e, t) {
  return t && (qn(t) === "object" || typeof t == "function") ? t : Ya(e);
}
function Ya(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function f_() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Io(e) {
  return Io = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Io(e);
}
function Ns(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var l_ = /* @__PURE__ */ function(e) {
  u_(r, e);
  var t = c_(r);
  function r() {
    var n;
    i_(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), Ns(Ya(n), "priority", 40), Ns(Ya(n), "incompatibleTokens", "*"), n;
  }
  return a_(r, [{
    key: "parse",
    value: function(o) {
      return rl(o);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return [new Date(a * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), r;
}(be);
function Hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Hn = function(r) {
    return typeof r;
  } : Hn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Hn(e);
}
function d_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ls(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function p_(e, t, r) {
  return t && Ls(e.prototype, t), r && Ls(e, r), e;
}
function v_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && qa(e, t);
}
function qa(e, t) {
  return qa = Object.setPrototypeOf || function(n, o) {
    return n.__proto__ = o, n;
  }, qa(e, t);
}
function y_(e) {
  var t = m_();
  return function() {
    var n = No(e), o;
    if (t) {
      var i = No(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else
      o = n.apply(this, arguments);
    return h_(this, o);
  };
}
function h_(e, t) {
  return t && (Hn(t) === "object" || typeof t == "function") ? t : Ha(e);
}
function Ha(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function m_() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function No(e) {
  return No = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, No(e);
}
function js(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var g_ = /* @__PURE__ */ function(e) {
  v_(r, e);
  var t = y_(r);
  function r() {
    var n;
    d_(this, r);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return n = t.call.apply(t, [this].concat(i)), js(Ha(n), "priority", 20), js(Ha(n), "incompatibleTokens", "*"), n;
  }
  return p_(r, [{
    key: "parse",
    value: function(o) {
      return rl(o);
    }
  }, {
    key: "set",
    value: function(o, i, a) {
      return [new Date(a), {
        timestampIsSet: !0
      }];
    }
  }]), r;
}(be), b_ = {
  G: new bm(),
  y: new Rm(),
  Y: new Mm(),
  R: new Um(),
  u: new Vm(),
  Q: new eg(),
  q: new ug(),
  M: new vg(),
  L: new _g(),
  w: new $g(),
  I: new Lg(),
  d: new zg(),
  D: new Zg(),
  E: new ab(),
  e: new pb(),
  c: new wb(),
  i: new Pb(),
  a: new Ib(),
  b: new Fb(),
  B: new Gb(),
  h: new rw(),
  H: new sw(),
  K: new hw(),
  k: new Ew(),
  m: new Dw(),
  s: new Lw(),
  S: new qw(),
  X: new Kw(),
  x: new o_(),
  t: new l_(),
  T: new g_()
};
function zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zn = function(r) {
    return typeof r;
  } : zn = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, zn(e);
}
function Ws(e, t) {
  var r;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (r = w_(e)) || t && e && typeof e.length == "number") {
      r && (e = r);
      var n = 0, o = function() {
      };
      return { s: o, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(s) {
        throw s;
      }, f: o };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, a = !1, u;
  return { s: function() {
    r = e[Symbol.iterator]();
  }, n: function() {
    var s = r.next();
    return i = s.done, s;
  }, e: function(s) {
    a = !0, u = s;
  }, f: function() {
    try {
      !i && r.return != null && r.return();
    } finally {
      if (a)
        throw u;
    }
  } };
}
function w_(e, t) {
  if (e) {
    if (typeof e == "string")
      return Us(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Us(e, t);
  }
}
function Us(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var __ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, O_ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, E_ = /^'([^]*?)'?$/, x_ = /''/g, S_ = /\S/, R_ = /[a-zA-Z]/;
function Nr(e, t, r, n) {
  var o, i, a, u, c, s, f, l, v, d, g, y, m, h, O, w, _, b;
  De(3, arguments);
  var E = String(e), S = String(t), P = br(), D = (o = (i = n == null ? void 0 : n.locale) !== null && i !== void 0 ? i : P.locale) !== null && o !== void 0 ? o : Jf;
  if (!D.match)
    throw new RangeError("locale must contain match property");
  var A = Ve((a = (u = (c = (s = n == null ? void 0 : n.firstWeekContainsDate) !== null && s !== void 0 ? s : n == null || (f = n.locale) === null || f === void 0 || (l = f.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && c !== void 0 ? c : P.firstWeekContainsDate) !== null && u !== void 0 ? u : (v = P.locale) === null || v === void 0 || (d = v.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(A >= 1 && A <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var $ = Ve((g = (y = (m = (h = n == null ? void 0 : n.weekStartsOn) !== null && h !== void 0 ? h : n == null || (O = n.locale) === null || O === void 0 || (w = O.options) === null || w === void 0 ? void 0 : w.weekStartsOn) !== null && m !== void 0 ? m : P.weekStartsOn) !== null && y !== void 0 ? y : (_ = P.locale) === null || _ === void 0 || (b = _.options) === null || b === void 0 ? void 0 : b.weekStartsOn) !== null && g !== void 0 ? g : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (S === "")
    return E === "" ? We(r) : new Date(NaN);
  var F = {
    firstWeekContainsDate: A,
    weekStartsOn: $,
    locale: D
  }, k = [new fm()], j = S.match(O_).map(function(W) {
    var N = W[0];
    if (N in Ni) {
      var x = Ni[N];
      return x(W, D.formatLong);
    }
    return W;
  }).join("").match(__), U = [], L = Ws(j), G;
  try {
    var pe = function() {
      var N = G.value;
      !(n != null && n.useAdditionalWeekYearTokens) && Kf(N) && ro(N, S, e), !(n != null && n.useAdditionalDayOfYearTokens) && Qf(N) && ro(N, S, e);
      var x = N[0], H = b_[x];
      if (H) {
        var R = H.incompatibleTokens;
        if (Array.isArray(R)) {
          var ne = U.find(function(oe) {
            return R.includes(oe.token) || oe.token === x;
          });
          if (ne)
            throw new RangeError("The format string mustn't contain `".concat(ne.fullToken, "` and `").concat(N, "` at the same time"));
        } else if (H.incompatibleTokens === "*" && U.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(N, "` and any other token at the same time"));
        U.push({
          token: x,
          fullToken: N
        });
        var te = H.run(E, N, D.match, F);
        if (!te)
          return {
            v: new Date(NaN)
          };
        k.push(te.setter), E = te.rest;
      } else {
        if (x.match(R_))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + x + "`");
        if (N === "''" ? N = "'" : x === "'" && (N = T_(N)), E.indexOf(N) === 0)
          E = E.slice(N.length);
        else
          return {
            v: new Date(NaN)
          };
      }
    };
    for (L.s(); !(G = L.n()).done; ) {
      var he = pe();
      if (zn(he) === "object")
        return he.v;
    }
  } catch (W) {
    L.e(W);
  } finally {
    L.f();
  }
  if (E.length > 0 && S_.test(E))
    return new Date(NaN);
  var T = k.map(function(W) {
    return W.priority;
  }).sort(function(W, N) {
    return N - W;
  }).filter(function(W, N, x) {
    return x.indexOf(W) === N;
  }).map(function(W) {
    return k.filter(function(N) {
      return N.priority === W;
    }).sort(function(N, x) {
      return x.subPriority - N.subPriority;
    });
  }).map(function(W) {
    return W[0];
  }), M = We(r);
  if (isNaN(M.getTime()))
    return new Date(NaN);
  var V = Hf(M, Yf(M)), Q = {}, X = Ws(T), ee;
  try {
    for (X.s(); !(ee = X.n()).done; ) {
      var Y = ee.value;
      if (!Y.validate(V, F))
        return new Date(NaN);
      var J = Y.set(V, Q, F);
      Array.isArray(J) ? (V = J[0], im(Q, J[1])) : V = J;
    }
  } catch (W) {
    X.e(W);
  } finally {
    X.f();
  }
  return V;
}
function T_(e) {
  return e.match(E_)[1].replace(x_, "'");
}
function P_(e, t) {
  De(2, arguments);
  var r = We(e).getTime(), n = We(t.start).getTime(), o = We(t.end).getTime();
  if (!(n <= o))
    throw new RangeError("Invalid interval");
  return r >= n && r <= o;
}
function $_(e, t) {
  De(2, arguments);
  var r = Ve(t);
  return Vy(e, -r);
}
function D_({ timeRange: e }) {
  const t = re(null), [r, n] = ye(Date.now());
  return se(() => {
    var f, l;
    const o = setInterval(() => n(Date.now()), 6e4);
    if (!t.current)
      return;
    const i = () => {
      var m, h;
      if (!t.current)
        return;
      const v = ((h = (m = document.querySelector(".table-item")) == null ? void 0 : m.getClientRects()[0]) == null ? void 0 : h.width) ?? 0, d = Nr(
        e.startHour.toString() + ":00",
        "HH:mm",
        new Date()
      ), y = Tc(new Date(), d) / e.step * v + 100;
      t.current.style.left = y + "px";
    }, a = ((l = (f = document.querySelector(".table-item")) == null ? void 0 : f.getClientRects()[0]) == null ? void 0 : l.width) ?? 0, u = Nr(
      e.startHour.toString() + ":00",
      "HH:mm",
      new Date()
    ), s = Tc(new Date(), u) / e.step * a + 100;
    return t.current.style.left = s + "px", window.addEventListener("resize", i), () => {
      clearInterval(o), window.removeEventListener("resize", i);
    };
  }, [e]), /* @__PURE__ */ Ye("div", { className: "time-indicator", ref: t, children: [
    /* @__PURE__ */ ae("i", { className: "arrow", id: "time-indicator" }),
    /* @__PURE__ */ ae(
      sn,
      {
        anchorId: "time-indicator",
        content: nm(new Date(), "HH:mm")
      }
    ),
    /* @__PURE__ */ ae("div", { className: "line" })
  ] });
}
function C_(e, t) {
  let r = 0, n = 0, o = 0;
  return e.forEach(({ tables: i }) => {
    i.forEach(({ reservations: a }) => {
      a.forEach(({ start: u, end: c, capacity: s }) => {
        const f = `${t.hour}:${t.minute}`, l = Nr(f, "HH:mm", new Date()), v = Nr(u, "HH:mm", new Date()), d = $_(Nr(c, "HH:mm", new Date()), 1);
        u == f && (o += s, n++), P_(l, { start: v, end: d }) && (r += s);
      });
    });
  }), {
    guestsCount: r,
    reservationCount: n,
    reservationGuests: o,
    time: `${t.hour}:${t.minute}`
  };
}
function k_({
  data: e,
  timeRange: t,
  lockedTime: r,
  reservationTooltip: n,
  onReservationChange: o,
  cellTooltip: i,
  onEmptyCellClick: a,
  reservationModal: u,
  capacityModal: c,
  onReservationClick: s
}) {
  const f = Se(
    () => Sy(t.startHour, t.endHour, t.step),
    [t]
  ), l = Se(
    () => e.reduce((h, { tables: O }) => h + O.length, 0),
    [e]
  ), v = hv(
    yv(fu, {
      activationConstraint: {
        distance: 8
      }
    })
  ), d = gt((h) => h.isResizing), g = gt((h) => h.isDraging), y = re(!1), m = Se(
    () => f.map((h) => C_(e, h)),
    [e, f]
  );
  return /* @__PURE__ */ Ye(
    "div",
    {
      className: "table-booking-calendar",
      style: g || d ? {
        cursor: y.current ? "no-drop" : g ? "move" : "e-resize"
      } : void 0,
      children: [
        /* @__PURE__ */ ae(
          gy,
          {
            onDragStart: (h) => {
              var O, w, _;
              (_ = (w = (O = h == null ? void 0 : h.active) == null ? void 0 : O.data) == null ? void 0 : w.current) != null && _.isLocked ? y.current = !0 : y.current = !1, gt.getState().setIsDraging(!0);
            },
            sensors: v,
            onDragEnd: (h) => {
              var O;
              y.current = !1, gt.getState().setIsDraging(!1), ((O = h.over) == null ? void 0 : O.id) != null && (o == null || o({
                type: "moved",
                newTableId: Number(h.over.id),
                reservation: h.active.data.current
              }));
            },
            children: /* @__PURE__ */ ae(
              "table",
              {
                style: g || d ? { pointerEvents: "none" } : void 0,
                children: /* @__PURE__ */ Ye("tbody", { children: [
                  /* @__PURE__ */ Ye("tr", { className: "timeline", children: [
                    /* @__PURE__ */ ae("td", {}),
                    f.map(
                      ({ minute: h, hour: O }, w) => h === "00" ? /* @__PURE__ */ ae("td", { className: "timeline-hour", children: /* @__PURE__ */ ae("span", { children: O }) }, w) : /* @__PURE__ */ ae("td", {}, w)
                    )
                  ] }),
                  /* @__PURE__ */ Ye("tr", { className: "capacity", children: [
                    /* @__PURE__ */ ae("td", { children: "Capacity" }),
                    f.map((h, O) => {
                      const w = r.includes(
                        `${h.hour}:${h.minute}`
                      );
                      return /* @__PURE__ */ ae("td", { children: /* @__PURE__ */ ae(
                        Zp,
                        {
                          index: O,
                          timeBlock: m[O],
                          isLocked: w,
                          modal: (_) => c == null ? void 0 : c(m[O], _)
                        }
                      ) }, O);
                    })
                  ] }),
                  e.map((h, O) => {
                    const w = h.tables.reduce(
                      (E, S) => E + S.reservations.length,
                      0
                    ), _ = h.tables.reduce(
                      (E, S) => E + S.reservations.reduce(
                        (P, D) => P + D.capacity,
                        0
                      ),
                      0
                    );
                    let b = 0;
                    for (let E = 0; E < O; E++)
                      b += e[E].tables.length;
                    return /* @__PURE__ */ Ye(tn, { children: [
                      /* @__PURE__ */ Ye("tr", { className: "room", children: [
                        /* @__PURE__ */ ae("td", { className: "room-details", children: h.name }),
                        /* @__PURE__ */ Ye("td", { className: "room-info", children: [
                          _,
                          " guests ,",
                          w,
                          " bookings"
                        ] })
                      ] }, h.id),
                      h.tables.map((E, S) => /* @__PURE__ */ ae(
                        Dy,
                        {
                          row: S + b,
                          table: E,
                          rangeList: f,
                          onReservationChange: o,
                          onEmptyCellClick: (P) => a == null ? void 0 : a(m[P]),
                          reservationModal: u,
                          onReservationClick: s
                        },
                        E.id
                      ))
                    ] }, h.id);
                  })
                ] })
              }
            )
          }
        ),
        /* @__PURE__ */ ae(D_, { timeRange: t }),
        /* @__PURE__ */ Ye("div", { className: "tooltips", children: [
          f.map((h, O) => /* @__PURE__ */ ae(
            sn,
            {
              style: { zIndex: 99, position: "absolute" },
              anchorId: `capacity-cell-${O}`,
              place: "bottom",
              delayShow: 200,
              children: i == null ? void 0 : i(m[O])
            },
            O
          )),
          e.map((h) => /* @__PURE__ */ ae(tn, { children: h.tables.map((O) => /* @__PURE__ */ ae(tn, { children: O.reservations.map((w) => /* @__PURE__ */ ae(
            sn,
            {
              style: { zIndex: 99, position: "absolute" },
              anchorId: `reservation-${w.id}`,
              place: "bottom",
              delayShow: 200,
              children: n == null ? void 0 : n(w)
            },
            w.id
          )) }, O.id)) }, h.id)),
          Array.from({ length: l }).map((h, O) => /* @__PURE__ */ ae(tn, { children: f.map((w, _) => /* @__PURE__ */ ae(
            sn,
            {
              style: { zIndex: 99, position: "absolute" },
              anchorId: `data-cell-${_}-${O}`,
              place: "bottom",
              delayShow: 200,
              children: i == null ? void 0 : i(m[_])
            },
            _
          )) }, O))
        ] })
      ]
    }
  );
}
export {
  k_ as default
};
