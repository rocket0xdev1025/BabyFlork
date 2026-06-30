(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) s(c);
  new MutationObserver((c) => {
    for (const h of c)
      if (h.type === "childList")
        for (const f of h.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && s(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const h = {};
    return (
      c.integrity && (h.integrity = c.integrity),
      c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function s(c) {
    if (c.ep) return;
    c.ep = !0;
    const h = u(c);
    fetch(c.href, h);
  }
})();
var Kr = { exports: {} },
  dl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tp;
function Tb() {
  if (Tp) return dl;
  Tp = 1;
  var i = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.fragment");
  function u(s, c, h) {
    var f = null;
    if (
      (h !== void 0 && (f = "" + h),
      c.key !== void 0 && (f = "" + c.key),
      "key" in c)
    ) {
      h = {};
      for (var m in c) m !== "key" && (h[m] = c[m]);
    } else h = c;
    return (
      (c = h.ref),
      { $$typeof: i, type: s, key: f, ref: c !== void 0 ? c : null, props: h }
    );
  }
  return (dl.Fragment = a), (dl.jsx = u), (dl.jsxs = u), dl;
}
var Ap;
function Ab() {
  return Ap || ((Ap = 1), (Kr.exports = Tb())), Kr.exports;
}
var R = Ab(),
  kr = { exports: {} },
  at = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ep;
function Eb() {
  if (Ep) return at;
  Ep = 1;
  var i = Symbol.for("react.transitional.element"),
    a = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    S = Symbol.iterator;
  function M(A) {
    return A === null || typeof A != "object"
      ? null
      : ((A = (S && A[S]) || A["@@iterator"]),
        typeof A == "function" ? A : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    U = Object.assign,
    L = {};
  function H(A, _, Z) {
    (this.props = A),
      (this.context = _),
      (this.refs = L),
      (this.updater = Z || w);
  }
  (H.prototype.isReactComponent = {}),
    (H.prototype.setState = function (A, _) {
      if (typeof A != "object" && typeof A != "function" && A != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, A, _, "setState");
    }),
    (H.prototype.forceUpdate = function (A) {
      this.updater.enqueueForceUpdate(this, A, "forceUpdate");
    });
  function G() {}
  G.prototype = H.prototype;
  function Y(A, _, Z) {
    (this.props = A),
      (this.context = _),
      (this.refs = L),
      (this.updater = Z || w);
  }
  var X = (Y.prototype = new G());
  (X.constructor = Y), U(X, H.prototype), (X.isPureReactComponent = !0);
  var k = Array.isArray;
  function lt() {}
  var I = { H: null, A: null, T: null, S: null },
    $ = Object.prototype.hasOwnProperty;
  function it(A, _, Z) {
    var W = Z.ref;
    return {
      $$typeof: i,
      type: A,
      key: _,
      ref: W !== void 0 ? W : null,
      props: Z,
    };
  }
  function tt(A, _) {
    return it(A.type, _, A.props);
  }
  function pt(A) {
    return typeof A == "object" && A !== null && A.$$typeof === i;
  }
  function bt(A) {
    var _ = { "=": "=0", ":": "=2" };
    return (
      "$" +
      A.replace(/[=:]/g, function (Z) {
        return _[Z];
      })
    );
  }
  var It = /\/+/g;
  function Gt(A, _) {
    return typeof A == "object" && A !== null && A.key != null
      ? bt("" + A.key)
      : _.toString(36);
  }
  function Lt(A) {
    switch (A.status) {
      case "fulfilled":
        return A.value;
      case "rejected":
        throw A.reason;
      default:
        switch (
          (typeof A.status == "string"
            ? A.then(lt, lt)
            : ((A.status = "pending"),
              A.then(
                function (_) {
                  A.status === "pending" &&
                    ((A.status = "fulfilled"), (A.value = _));
                },
                function (_) {
                  A.status === "pending" &&
                    ((A.status = "rejected"), (A.reason = _));
                }
              )),
          A.status)
        ) {
          case "fulfilled":
            return A.value;
          case "rejected":
            throw A.reason;
        }
    }
    throw A;
  }
  function V(A, _, Z, W, st) {
    var ct = typeof A;
    (ct === "undefined" || ct === "boolean") && (A = null);
    var At = !1;
    if (A === null) At = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          At = !0;
          break;
        case "object":
          switch (A.$$typeof) {
            case i:
            case a:
              At = !0;
              break;
            case v:
              return (At = A._init), V(At(A._payload), _, Z, W, st);
          }
      }
    if (At)
      return (
        (st = st(A)),
        (At = W === "" ? "." + Gt(A, 0) : W),
        k(st)
          ? ((Z = ""),
            At != null && (Z = At.replace(It, "$&/") + "/"),
            V(st, _, Z, "", function (Sa) {
              return Sa;
            }))
          : st != null &&
            (pt(st) &&
              (st = tt(
                st,
                Z +
                  (st.key == null || (A && A.key === st.key)
                    ? ""
                    : ("" + st.key).replace(It, "$&/") + "/") +
                  At
              )),
            _.push(st)),
        1
      );
    At = 0;
    var ue = W === "" ? "." : W + ":";
    if (k(A))
      for (var Ht = 0; Ht < A.length; Ht++)
        (W = A[Ht]), (ct = ue + Gt(W, Ht)), (At += V(W, _, Z, ct, st));
    else if (((Ht = M(A)), typeof Ht == "function"))
      for (A = Ht.call(A), Ht = 0; !(W = A.next()).done; )
        (W = W.value), (ct = ue + Gt(W, Ht++)), (At += V(W, _, Z, ct, st));
    else if (ct === "object") {
      if (typeof A.then == "function") return V(Lt(A), _, Z, W, st);
      throw (
        ((_ = String(A)),
        Error(
          "Objects are not valid as a React child (found: " +
            (_ === "[object Object]"
              ? "object with keys {" + Object.keys(A).join(", ") + "}"
              : _) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return At;
  }
  function Q(A, _, Z) {
    if (A == null) return A;
    var W = [],
      st = 0;
    return (
      V(A, W, "", "", function (ct) {
        return _.call(Z, ct, st++);
      }),
      W
    );
  }
  function K(A) {
    if (A._status === -1) {
      var _ = A._result;
      (_ = _()),
        _.then(
          function (Z) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 1), (A._result = Z));
          },
          function (Z) {
            (A._status === 0 || A._status === -1) &&
              ((A._status = 2), (A._result = Z));
          }
        ),
        A._status === -1 && ((A._status = 0), (A._result = _));
    }
    if (A._status === 1) return A._result.default;
    throw A._result;
  }
  var ot =
      typeof reportError == "function"
        ? reportError
        : function (A) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var _ = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof A == "object" &&
                  A !== null &&
                  typeof A.message == "string"
                    ? String(A.message)
                    : String(A),
                error: A,
              });
              if (!window.dispatchEvent(_)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", A);
              return;
            }
            console.error(A);
          },
    yt = {
      map: Q,
      forEach: function (A, _, Z) {
        Q(
          A,
          function () {
            _.apply(this, arguments);
          },
          Z
        );
      },
      count: function (A) {
        var _ = 0;
        return (
          Q(A, function () {
            _++;
          }),
          _
        );
      },
      toArray: function (A) {
        return (
          Q(A, function (_) {
            return _;
          }) || []
        );
      },
      only: function (A) {
        if (!pt(A))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return A;
      },
    };
  return (
    (at.Activity = b),
    (at.Children = yt),
    (at.Component = H),
    (at.Fragment = u),
    (at.Profiler = c),
    (at.PureComponent = Y),
    (at.StrictMode = s),
    (at.Suspense = y),
    (at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (at.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (A) {
        return I.H.useMemoCache(A);
      },
    }),
    (at.cache = function (A) {
      return function () {
        return A.apply(null, arguments);
      };
    }),
    (at.cacheSignal = function () {
      return null;
    }),
    (at.cloneElement = function (A, _, Z) {
      if (A == null)
        throw Error(
          "The argument must be a React element, but you passed " + A + "."
        );
      var W = U({}, A.props),
        st = A.key;
      if (_ != null)
        for (ct in (_.key !== void 0 && (st = "" + _.key), _))
          !$.call(_, ct) ||
            ct === "key" ||
            ct === "__self" ||
            ct === "__source" ||
            (ct === "ref" && _.ref === void 0) ||
            (W[ct] = _[ct]);
      var ct = arguments.length - 2;
      if (ct === 1) W.children = Z;
      else if (1 < ct) {
        for (var At = Array(ct), ue = 0; ue < ct; ue++)
          At[ue] = arguments[ue + 2];
        W.children = At;
      }
      return it(A.type, st, W);
    }),
    (at.createContext = function (A) {
      return (
        (A = {
          $$typeof: f,
          _currentValue: A,
          _currentValue2: A,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (A.Provider = A),
        (A.Consumer = { $$typeof: h, _context: A }),
        A
      );
    }),
    (at.createElement = function (A, _, Z) {
      var W,
        st = {},
        ct = null;
      if (_ != null)
        for (W in (_.key !== void 0 && (ct = "" + _.key), _))
          $.call(_, W) &&
            W !== "key" &&
            W !== "__self" &&
            W !== "__source" &&
            (st[W] = _[W]);
      var At = arguments.length - 2;
      if (At === 1) st.children = Z;
      else if (1 < At) {
        for (var ue = Array(At), Ht = 0; Ht < At; Ht++)
          ue[Ht] = arguments[Ht + 2];
        st.children = ue;
      }
      if (A && A.defaultProps)
        for (W in ((At = A.defaultProps), At))
          st[W] === void 0 && (st[W] = At[W]);
      return it(A, ct, st);
    }),
    (at.createRef = function () {
      return { current: null };
    }),
    (at.forwardRef = function (A) {
      return { $$typeof: m, render: A };
    }),
    (at.isValidElement = pt),
    (at.lazy = function (A) {
      return { $$typeof: v, _payload: { _status: -1, _result: A }, _init: K };
    }),
    (at.memo = function (A, _) {
      return { $$typeof: p, type: A, compare: _ === void 0 ? null : _ };
    }),
    (at.startTransition = function (A) {
      var _ = I.T,
        Z = {};
      I.T = Z;
      try {
        var W = A(),
          st = I.S;
        st !== null && st(Z, W),
          typeof W == "object" &&
            W !== null &&
            typeof W.then == "function" &&
            W.then(lt, ot);
      } catch (ct) {
        ot(ct);
      } finally {
        _ !== null && Z.types !== null && (_.types = Z.types), (I.T = _);
      }
    }),
    (at.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (at.use = function (A) {
      return I.H.use(A);
    }),
    (at.useActionState = function (A, _, Z) {
      return I.H.useActionState(A, _, Z);
    }),
    (at.useCallback = function (A, _) {
      return I.H.useCallback(A, _);
    }),
    (at.useContext = function (A) {
      return I.H.useContext(A);
    }),
    (at.useDebugValue = function () {}),
    (at.useDeferredValue = function (A, _) {
      return I.H.useDeferredValue(A, _);
    }),
    (at.useEffect = function (A, _) {
      return I.H.useEffect(A, _);
    }),
    (at.useEffectEvent = function (A) {
      return I.H.useEffectEvent(A);
    }),
    (at.useId = function () {
      return I.H.useId();
    }),
    (at.useImperativeHandle = function (A, _, Z) {
      return I.H.useImperativeHandle(A, _, Z);
    }),
    (at.useInsertionEffect = function (A, _) {
      return I.H.useInsertionEffect(A, _);
    }),
    (at.useLayoutEffect = function (A, _) {
      return I.H.useLayoutEffect(A, _);
    }),
    (at.useMemo = function (A, _) {
      return I.H.useMemo(A, _);
    }),
    (at.useOptimistic = function (A, _) {
      return I.H.useOptimistic(A, _);
    }),
    (at.useReducer = function (A, _, Z) {
      return I.H.useReducer(A, _, Z);
    }),
    (at.useRef = function (A) {
      return I.H.useRef(A);
    }),
    (at.useState = function (A) {
      return I.H.useState(A);
    }),
    (at.useSyncExternalStore = function (A, _, Z) {
      return I.H.useSyncExternalStore(A, _, Z);
    }),
    (at.useTransition = function () {
      return I.H.useTransition();
    }),
    (at.version = "19.2.5"),
    at
  );
}
var Mp;
function Gc() {
  return Mp || ((Mp = 1), (kr.exports = Eb())), kr.exports;
}
var q = Gc(),
  Jr = { exports: {} },
  ml = {},
  Fr = { exports: {} },
  Wr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dp;
function Mb() {
  return (
    Dp ||
      ((Dp = 1),
      (function (i) {
        function a(V, Q) {
          var K = V.length;
          V.push(Q);
          t: for (; 0 < K; ) {
            var ot = (K - 1) >>> 1,
              yt = V[ot];
            if (0 < c(yt, Q)) (V[ot] = Q), (V[K] = yt), (K = ot);
            else break t;
          }
        }
        function u(V) {
          return V.length === 0 ? null : V[0];
        }
        function s(V) {
          if (V.length === 0) return null;
          var Q = V[0],
            K = V.pop();
          if (K !== Q) {
            V[0] = K;
            t: for (var ot = 0, yt = V.length, A = yt >>> 1; ot < A; ) {
              var _ = 2 * (ot + 1) - 1,
                Z = V[_],
                W = _ + 1,
                st = V[W];
              if (0 > c(Z, K))
                W < yt && 0 > c(st, Z)
                  ? ((V[ot] = st), (V[W] = K), (ot = W))
                  : ((V[ot] = Z), (V[_] = K), (ot = _));
              else if (W < yt && 0 > c(st, K))
                (V[ot] = st), (V[W] = K), (ot = W);
              else break t;
            }
          }
          return Q;
        }
        function c(V, Q) {
          var K = V.sortIndex - Q.sortIndex;
          return K !== 0 ? K : V.id - Q.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          i.unstable_now = function () {
            return h.now();
          };
        } else {
          var f = Date,
            m = f.now();
          i.unstable_now = function () {
            return f.now() - m;
          };
        }
        var y = [],
          p = [],
          v = 1,
          b = null,
          S = 3,
          M = !1,
          w = !1,
          U = !1,
          L = !1,
          H = typeof setTimeout == "function" ? setTimeout : null,
          G = typeof clearTimeout == "function" ? clearTimeout : null,
          Y = typeof setImmediate < "u" ? setImmediate : null;
        function X(V) {
          for (var Q = u(p); Q !== null; ) {
            if (Q.callback === null) s(p);
            else if (Q.startTime <= V)
              s(p), (Q.sortIndex = Q.expirationTime), a(y, Q);
            else break;
            Q = u(p);
          }
        }
        function k(V) {
          if (((U = !1), X(V), !w))
            if (u(y) !== null) (w = !0), lt || ((lt = !0), bt());
            else {
              var Q = u(p);
              Q !== null && Lt(k, Q.startTime - V);
            }
        }
        var lt = !1,
          I = -1,
          $ = 5,
          it = -1;
        function tt() {
          return L ? !0 : !(i.unstable_now() - it < $);
        }
        function pt() {
          if (((L = !1), lt)) {
            var V = i.unstable_now();
            it = V;
            var Q = !0;
            try {
              t: {
                (w = !1), U && ((U = !1), G(I), (I = -1)), (M = !0);
                var K = S;
                try {
                  e: {
                    for (
                      X(V), b = u(y);
                      b !== null && !(b.expirationTime > V && tt());

                    ) {
                      var ot = b.callback;
                      if (typeof ot == "function") {
                        (b.callback = null), (S = b.priorityLevel);
                        var yt = ot(b.expirationTime <= V);
                        if (((V = i.unstable_now()), typeof yt == "function")) {
                          (b.callback = yt), X(V), (Q = !0);
                          break e;
                        }
                        b === u(y) && s(y), X(V);
                      } else s(y);
                      b = u(y);
                    }
                    if (b !== null) Q = !0;
                    else {
                      var A = u(p);
                      A !== null && Lt(k, A.startTime - V), (Q = !1);
                    }
                  }
                  break t;
                } finally {
                  (b = null), (S = K), (M = !1);
                }
                Q = void 0;
              }
            } finally {
              Q ? bt() : (lt = !1);
            }
          }
        }
        var bt;
        if (typeof Y == "function")
          bt = function () {
            Y(pt);
          };
        else if (typeof MessageChannel < "u") {
          var It = new MessageChannel(),
            Gt = It.port2;
          (It.port1.onmessage = pt),
            (bt = function () {
              Gt.postMessage(null);
            });
        } else
          bt = function () {
            H(pt, 0);
          };
        function Lt(V, Q) {
          I = H(function () {
            V(i.unstable_now());
          }, Q);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (V) {
            V.callback = null;
          }),
          (i.unstable_forceFrameRate = function (V) {
            0 > V || 125 < V
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : ($ = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (i.unstable_next = function (V) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = S;
            }
            var K = S;
            S = Q;
            try {
              return V();
            } finally {
              S = K;
            }
          }),
          (i.unstable_requestPaint = function () {
            L = !0;
          }),
          (i.unstable_runWithPriority = function (V, Q) {
            switch (V) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                V = 3;
            }
            var K = S;
            S = V;
            try {
              return Q();
            } finally {
              S = K;
            }
          }),
          (i.unstable_scheduleCallback = function (V, Q, K) {
            var ot = i.unstable_now();
            switch (
              (typeof K == "object" && K !== null
                ? ((K = K.delay),
                  (K = typeof K == "number" && 0 < K ? ot + K : ot))
                : (K = ot),
              V)
            ) {
              case 1:
                var yt = -1;
                break;
              case 2:
                yt = 250;
                break;
              case 5:
                yt = 1073741823;
                break;
              case 4:
                yt = 1e4;
                break;
              default:
                yt = 5e3;
            }
            return (
              (yt = K + yt),
              (V = {
                id: v++,
                callback: Q,
                priorityLevel: V,
                startTime: K,
                expirationTime: yt,
                sortIndex: -1,
              }),
              K > ot
                ? ((V.sortIndex = K),
                  a(p, V),
                  u(y) === null &&
                    V === u(p) &&
                    (U ? (G(I), (I = -1)) : (U = !0), Lt(k, K - ot)))
                : ((V.sortIndex = yt),
                  a(y, V),
                  w || M || ((w = !0), lt || ((lt = !0), bt()))),
              V
            );
          }),
          (i.unstable_shouldYield = tt),
          (i.unstable_wrapCallback = function (V) {
            var Q = S;
            return function () {
              var K = S;
              S = Q;
              try {
                return V.apply(this, arguments);
              } finally {
                S = K;
              }
            };
          });
      })(Wr)),
    Wr
  );
}
var Cp;
function Db() {
  return Cp || ((Cp = 1), (Fr.exports = Mb())), Fr.exports;
}
var Pr = { exports: {} },
  se = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zp;
function Cb() {
  if (zp) return se;
  zp = 1;
  var i = Gc();
  function a(y) {
    var p = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        p += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var s = {
      d: {
        f: u,
        r: function () {
          throw Error(a(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function h(y, p, v) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: y,
      containerInfo: p,
      implementation: v,
    };
  }
  var f = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(y, p) {
    if (y === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (se.createPortal = function (y, p) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(a(299));
      return h(y, p, null, v);
    }),
    (se.flushSync = function (y) {
      var p = f.T,
        v = s.p;
      try {
        if (((f.T = null), (s.p = 2), y)) return y();
      } finally {
        (f.T = p), (s.p = v), s.d.f();
      }
    }),
    (se.preconnect = function (y, p) {
      typeof y == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        s.d.C(y, p));
    }),
    (se.prefetchDNS = function (y) {
      typeof y == "string" && s.d.D(y);
    }),
    (se.preinit = function (y, p) {
      if (typeof y == "string" && p && typeof p.as == "string") {
        var v = p.as,
          b = m(v, p.crossOrigin),
          S = typeof p.integrity == "string" ? p.integrity : void 0,
          M = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        v === "style"
          ? s.d.S(y, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: M,
            })
          : v === "script" &&
            s.d.X(y, {
              crossOrigin: b,
              integrity: S,
              fetchPriority: M,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (se.preinitModule = function (y, p) {
      if (typeof y == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var v = m(p.as, p.crossOrigin);
            s.d.M(y, {
              crossOrigin: v,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && s.d.M(y);
    }),
    (se.preload = function (y, p) {
      if (
        typeof y == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var v = p.as,
          b = m(v, p.crossOrigin);
        s.d.L(y, v, {
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (se.preloadModule = function (y, p) {
      if (typeof y == "string")
        if (p) {
          var v = m(p.as, p.crossOrigin);
          s.d.m(y, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else s.d.m(y);
    }),
    (se.requestFormReset = function (y) {
      s.d.r(y);
    }),
    (se.unstable_batchedUpdates = function (y, p) {
      return y(p);
    }),
    (se.useFormState = function (y, p, v) {
      return f.H.useFormState(y, p, v);
    }),
    (se.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (se.version = "19.2.5"),
    se
  );
}
var Rp;
function zb() {
  if (Rp) return Pr.exports;
  Rp = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), (Pr.exports = Cb()), Pr.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Op;
function Rb() {
  if (Op) return ml;
  Op = 1;
  var i = Db(),
    a = Gc(),
    u = zb();
  function s(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function h(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (h(t) !== t) throw Error(s(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = h(t)), e === null)) throw Error(s(188));
      return e !== t ? null : t;
    }
    for (var n = t, l = e; ; ) {
      var o = n.return;
      if (o === null) break;
      var r = o.alternate;
      if (r === null) {
        if (((l = o.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (o.child === r.child) {
        for (r = o.child; r; ) {
          if (r === n) return y(o), t;
          if (r === l) return y(o), e;
          r = r.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== l.return) (n = o), (l = r);
      else {
        for (var d = !1, g = o.child; g; ) {
          if (g === n) {
            (d = !0), (n = o), (l = r);
            break;
          }
          if (g === l) {
            (d = !0), (l = o), (n = r);
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = r.child; g; ) {
            if (g === n) {
              (d = !0), (n = r), (l = o);
              break;
            }
            if (g === l) {
              (d = !0), (l = r), (n = o);
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(s(189));
        }
      }
      if (n.alternate !== l) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = v(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    S = Symbol.for("react.element"),
    M = Symbol.for("react.transitional.element"),
    w = Symbol.for("react.portal"),
    U = Symbol.for("react.fragment"),
    L = Symbol.for("react.strict_mode"),
    H = Symbol.for("react.profiler"),
    G = Symbol.for("react.consumer"),
    Y = Symbol.for("react.context"),
    X = Symbol.for("react.forward_ref"),
    k = Symbol.for("react.suspense"),
    lt = Symbol.for("react.suspense_list"),
    I = Symbol.for("react.memo"),
    $ = Symbol.for("react.lazy"),
    it = Symbol.for("react.activity"),
    tt = Symbol.for("react.memo_cache_sentinel"),
    pt = Symbol.iterator;
  function bt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (pt && t[pt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var It = Symbol.for("react.client.reference");
  function Gt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === It ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case U:
        return "Fragment";
      case H:
        return "Profiler";
      case L:
        return "StrictMode";
      case k:
        return "Suspense";
      case lt:
        return "SuspenseList";
      case it:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case w:
          return "Portal";
        case Y:
          return t.displayName || "Context";
        case G:
          return (t._context.displayName || "Context") + ".Consumer";
        case X:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case I:
          return (
            (e = t.displayName || null), e !== null ? e : Gt(t.type) || "Memo"
          );
        case $:
          (e = t._payload), (t = t._init);
          try {
            return Gt(t(e));
          } catch {}
      }
    return null;
  }
  var Lt = Array.isArray,
    V = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = { pending: !1, data: null, method: null, action: null },
    ot = [],
    yt = -1;
  function A(t) {
    return { current: t };
  }
  function _(t) {
    0 > yt || ((t.current = ot[yt]), (ot[yt] = null), yt--);
  }
  function Z(t, e) {
    yt++, (ot[yt] = t.current), (t.current = e);
  }
  var W = A(null),
    st = A(null),
    ct = A(null),
    At = A(null);
  function ue(t, e) {
    switch ((Z(ct, e), Z(st, t), Z(W, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Zm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Zm(e)), (t = Km(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    _(W), Z(W, t);
  }
  function Ht() {
    _(W), _(st), _(ct);
  }
  function Sa(t) {
    t.memoizedState !== null && Z(At, t);
    var e = W.current,
      n = Km(e, t.type);
    e !== n && (Z(st, t), Z(W, n));
  }
  function Vl(t) {
    st.current === t && (_(W), _(st)),
      At.current === t && (_(At), (rl._currentValue = K));
  }
  var Cu, xf;
  function ei(t) {
    if (Cu === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (Cu = (e && e[1]) || ""),
          (xf =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Cu +
      t +
      xf
    );
  }
  var zu = !1;
  function Ru(t, e) {
    if (!t || zu) return "";
    zu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var B = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(B.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(B, []);
                } catch (O) {
                  var z = O;
                }
                Reflect.construct(t, [], B);
              } else {
                try {
                  B.call();
                } catch (O) {
                  z = O;
                }
                t.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                z = O;
              }
              (B = t()) &&
                typeof B.catch == "function" &&
                B.catch(function () {});
            }
          } catch (O) {
            if (O && z && typeof O.stack == "string") return [O.stack, z.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      o &&
        o.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = l.DetermineComponentFrameRoot(),
        d = r[0],
        g = r[1];
      if (d && g) {
        var x = d.split(`
`),
          C = g.split(`
`);
        for (
          o = l = 0;
          l < x.length && !x[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; o < C.length && !C[o].includes("DetermineComponentFrameRoot"); )
          o++;
        if (l === x.length || o === C.length)
          for (
            l = x.length - 1, o = C.length - 1;
            1 <= l && 0 <= o && x[l] !== C[o];

          )
            o--;
        for (; 1 <= l && 0 <= o; l--, o--)
          if (x[l] !== C[o]) {
            if (l !== 1 || o !== 1)
              do
                if ((l--, o--, 0 > o || x[l] !== C[o])) {
                  var N =
                    `
` + x[l].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", t.displayName)),
                    N
                  );
                }
              while (1 <= l && 0 <= o);
            break;
          }
      }
    } finally {
      (zu = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? ei(n) : "";
  }
  function Ig(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ei(t.type);
      case 16:
        return ei("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? ei("Suspense Fallback")
          : ei("Suspense");
      case 19:
        return ei("SuspenseList");
      case 0:
      case 15:
        return Ru(t.type, !1);
      case 11:
        return Ru(t.type.render, !1);
      case 1:
        return Ru(t.type, !0);
      case 31:
        return ei("Activity");
      default:
        return "";
    }
  }
  function Tf(t) {
    try {
      var e = "",
        n = null;
      do (e += Ig(t, n)), (n = t), (t = t.return);
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var Ou = Object.prototype.hasOwnProperty,
    wu = i.unstable_scheduleCallback,
    Vu = i.unstable_cancelCallback,
    tv = i.unstable_shouldYield,
    ev = i.unstable_requestPaint,
    be = i.unstable_now,
    nv = i.unstable_getCurrentPriorityLevel,
    Af = i.unstable_ImmediatePriority,
    Ef = i.unstable_UserBlockingPriority,
    Nl = i.unstable_NormalPriority,
    iv = i.unstable_LowPriority,
    Mf = i.unstable_IdlePriority,
    av = i.log,
    lv = i.unstable_setDisableYieldValue,
    xa = null,
    Se = null;
  function An(t) {
    if (
      (typeof av == "function" && lv(t),
      Se && typeof Se.setStrictMode == "function")
    )
      try {
        Se.setStrictMode(xa, t);
      } catch {}
  }
  var xe = Math.clz32 ? Math.clz32 : ov,
    sv = Math.log,
    uv = Math.LN2;
  function ov(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((sv(t) / uv) | 0)) | 0;
  }
  var jl = 256,
    Bl = 262144,
    _l = 4194304;
  function ni(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ul(t, e, n) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var o = 0,
      r = t.suspendedLanes,
      d = t.pingedLanes;
    t = t.warmLanes;
    var g = l & 134217727;
    return (
      g !== 0
        ? ((l = g & ~r),
          l !== 0
            ? (o = ni(l))
            : ((d &= g),
              d !== 0
                ? (o = ni(d))
                : n || ((n = g & ~t), n !== 0 && (o = ni(n)))))
        : ((g = l & ~r),
          g !== 0
            ? (o = ni(g))
            : d !== 0
            ? (o = ni(d))
            : n || ((n = l & ~t), n !== 0 && (o = ni(n)))),
      o === 0
        ? 0
        : e !== 0 &&
          e !== o &&
          (e & r) === 0 &&
          ((r = o & -o),
          (n = e & -e),
          r >= n || (r === 32 && (n & 4194048) !== 0))
        ? e
        : o
    );
  }
  function Ta(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function rv(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Df() {
    var t = _l;
    return (_l <<= 1), (_l & 62914560) === 0 && (_l = 4194304), t;
  }
  function Nu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Aa(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function cv(t, e, n, l, o, r) {
    var d = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var g = t.entanglements,
      x = t.expirationTimes,
      C = t.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var N = 31 - xe(n),
        B = 1 << N;
      (g[N] = 0), (x[N] = -1);
      var z = C[N];
      if (z !== null)
        for (C[N] = null, N = 0; N < z.length; N++) {
          var O = z[N];
          O !== null && (O.lane &= -536870913);
        }
      n &= ~B;
    }
    l !== 0 && Cf(t, l, 0),
      r !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(d & ~e));
  }
  function Cf(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var l = 31 - xe(e);
    (t.entangledLanes |= e),
      (t.entanglements[l] = t.entanglements[l] | 1073741824 | (n & 261930));
  }
  function zf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var l = 31 - xe(n),
        o = 1 << l;
      (o & e) | (t[l] & e) && (t[l] |= e), (n &= ~o);
    }
  }
  function Rf(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : ju(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function ju(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Bu(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Of() {
    var t = Q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : pp(t.type));
  }
  function wf(t, e) {
    var n = Q.p;
    try {
      return (Q.p = t), e();
    } finally {
      Q.p = n;
    }
  }
  var En = Math.random().toString(36).slice(2),
    te = "__reactFiber$" + En,
    fe = "__reactProps$" + En,
    Di = "__reactContainer$" + En,
    _u = "__reactEvents$" + En,
    fv = "__reactListeners$" + En,
    hv = "__reactHandles$" + En,
    Vf = "__reactResources$" + En,
    Ea = "__reactMarker$" + En;
  function Uu(t) {
    delete t[te], delete t[fe], delete t[_u], delete t[fv], delete t[hv];
  }
  function Ci(t) {
    var e = t[te];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Di] || n[te])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Im(t); t !== null; ) {
            if ((n = t[te])) return n;
            t = Im(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function zi(t) {
    if ((t = t[te] || t[Di])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Ma(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function Ri(t) {
    var e = t[Vf];
    return (
      e ||
        (e = t[Vf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Wt(t) {
    t[Ea] = !0;
  }
  var Nf = new Set(),
    jf = {};
  function ii(t, e) {
    Oi(t, e), Oi(t + "Capture", e);
  }
  function Oi(t, e) {
    for (jf[t] = e, t = 0; t < e.length; t++) Nf.add(e[t]);
  }
  var dv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Bf = {},
    _f = {};
  function mv(t) {
    return Ou.call(_f, t)
      ? !0
      : Ou.call(Bf, t)
      ? !1
      : dv.test(t)
      ? (_f[t] = !0)
      : ((Bf[t] = !0), !1);
  }
  function Ll(t, e, n) {
    if (mv(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Hl(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function ln(t, e, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + l);
    }
  }
  function Oe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Uf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function pv(t, e, n) {
    var l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var o = l.get,
        r = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (d) {
            (n = "" + d), r.call(this, d);
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (d) {
            n = "" + d;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Lu(t) {
    if (!t._valueTracker) {
      var e = Uf(t) ? "checked" : "value";
      t._valueTracker = pv(t, e, "" + t[e]);
    }
  }
  function Lf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      l = "";
    return (
      t && (l = Uf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = l),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Yl(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var yv = /[\n"\\]/g;
  function we(t) {
    return t.replace(yv, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Hu(t, e, n, l, o, r, d, g) {
    (t.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (t.type = d)
        : t.removeAttribute("type"),
      e != null
        ? d === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Oe(e))
          : t.value !== "" + Oe(e) && (t.value = "" + Oe(e))
        : (d !== "submit" && d !== "reset") || t.removeAttribute("value"),
      e != null
        ? Yu(t, d, Oe(e))
        : n != null
        ? Yu(t, d, Oe(n))
        : l != null && t.removeAttribute("value"),
      o == null && r != null && (t.defaultChecked = !!r),
      o != null &&
        (t.checked = o && typeof o != "function" && typeof o != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (t.name = "" + Oe(g))
        : t.removeAttribute("name");
  }
  function Hf(t, e, n, l, o, r, d, g) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (t.type = r),
      e != null || n != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || e != null)) {
        Lu(t);
        return;
      }
      (n = n != null ? "" + Oe(n) : ""),
        (e = e != null ? "" + Oe(e) : n),
        g || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (l = l ?? o),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (t.checked = g ? t.checked : !!l),
      (t.defaultChecked = !!l),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.name = d),
      Lu(t);
  }
  function Yu(t, e, n) {
    (e === "number" && Yl(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function wi(t, e, n, l) {
    if (((t = t.options), e)) {
      e = {};
      for (var o = 0; o < n.length; o++) e["$" + n[o]] = !0;
      for (n = 0; n < t.length; n++)
        (o = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== o && (t[n].selected = o),
          o && l && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Oe(n), e = null, o = 0; o < t.length; o++) {
        if (t[o].value === n) {
          (t[o].selected = !0), l && (t[o].defaultSelected = !0);
          return;
        }
        e !== null || t[o].disabled || (e = t[o]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Yf(t, e, n) {
    if (
      e != null &&
      ((e = "" + Oe(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Oe(n) : "";
  }
  function qf(t, e, n, l) {
    if (e == null) {
      if (l != null) {
        if (n != null) throw Error(s(92));
        if (Lt(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), (e = n);
    }
    (n = Oe(e)),
      (t.defaultValue = n),
      (l = t.textContent),
      l === n && l !== "" && l !== null && (t.value = l),
      Lu(t);
  }
  function Vi(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var gv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Gf(t, e, n) {
    var l = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? l
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : l
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || gv.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function Xf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(s(62));
    if (((t = t.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (e != null && e.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? t.setProperty(l, "")
            : l === "float"
            ? (t.cssFloat = "")
            : (t[l] = ""));
      for (var o in e)
        (l = e[o]), e.hasOwnProperty(o) && n[o] !== l && Gf(t, o, l);
    } else for (var r in e) e.hasOwnProperty(r) && Gf(t, r, e[r]);
  }
  function qu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    bv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ql(t) {
    return bv.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function sn() {}
  var Gu = null;
  function Xu(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ni = null,
    ji = null;
  function Qf(t) {
    var e = zi(t);
    if (e && (t = e.stateNode)) {
      var n = t[fe] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Hu(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + we("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var l = n[e];
              if (l !== t && l.form === t.form) {
                var o = l[fe] || null;
                if (!o) throw Error(s(90));
                Hu(
                  l,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (l = n[e]), l.form === t.form && Lf(l);
          }
          break t;
        case "textarea":
          Yf(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && wi(t, !!n.multiple, e, !1);
      }
    }
  }
  var Qu = !1;
  function Zf(t, e, n) {
    if (Qu) return t(e, n);
    Qu = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (
        ((Qu = !1),
        (Ni !== null || ji !== null) &&
          (zs(), Ni && ((e = Ni), (t = ji), (ji = Ni = null), Qf(e), t)))
      )
        for (e = 0; e < t.length; e++) Qf(t[e]);
    }
  }
  function Da(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var l = n[fe] || null;
    if (l === null) return null;
    n = l[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((t = t.type),
          (l = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !l);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(s(231, e, typeof n));
    return n;
  }
  var un = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Zu = !1;
  if (un)
    try {
      var Ca = {};
      Object.defineProperty(Ca, "passive", {
        get: function () {
          Zu = !0;
        },
      }),
        window.addEventListener("test", Ca, Ca),
        window.removeEventListener("test", Ca, Ca);
    } catch {
      Zu = !1;
    }
  var Mn = null,
    Ku = null,
    Gl = null;
  function Kf() {
    if (Gl) return Gl;
    var t,
      e = Ku,
      n = e.length,
      l,
      o = "value" in Mn ? Mn.value : Mn.textContent,
      r = o.length;
    for (t = 0; t < n && e[t] === o[t]; t++);
    var d = n - t;
    for (l = 1; l <= d && e[n - l] === o[r - l]; l++);
    return (Gl = o.slice(t, 1 < l ? 1 - l : void 0));
  }
  function Xl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Ql() {
    return !0;
  }
  function kf() {
    return !1;
  }
  function he(t) {
    function e(n, l, o, r, d) {
      (this._reactName = n),
        (this._targetInst = o),
        (this.type = l),
        (this.nativeEvent = r),
        (this.target = d),
        (this.currentTarget = null);
      for (var g in t)
        t.hasOwnProperty(g) && ((n = t[g]), (this[g] = n ? n(r) : r[g]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? Ql
          : kf),
        (this.isPropagationStopped = kf),
        this
      );
    }
    return (
      b(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ql));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ql));
        },
        persist: function () {},
        isPersistent: Ql,
      }),
      e
    );
  }
  var ai = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Zl = he(ai),
    za = b({}, ai, { view: 0, detail: 0 }),
    Sv = he(za),
    ku,
    Ju,
    Ra,
    Kl = b({}, za, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Wu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ra &&
              (Ra && t.type === "mousemove"
                ? ((ku = t.screenX - Ra.screenX), (Ju = t.screenY - Ra.screenY))
                : (Ju = ku = 0),
              (Ra = t)),
            ku);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Ju;
      },
    }),
    Jf = he(Kl),
    xv = b({}, Kl, { dataTransfer: 0 }),
    Tv = he(xv),
    Av = b({}, za, { relatedTarget: 0 }),
    Fu = he(Av),
    Ev = b({}, ai, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Mv = he(Ev),
    Dv = b({}, ai, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Cv = he(Dv),
    zv = b({}, ai, { data: 0 }),
    Ff = he(zv),
    Rv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Ov = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    wv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Vv(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = wv[t])
      ? !!e[t]
      : !1;
  }
  function Wu() {
    return Vv;
  }
  var Nv = b({}, za, {
      key: function (t) {
        if (t.key) {
          var e = Rv[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Xl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? Ov[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Wu,
      charCode: function (t) {
        return t.type === "keypress" ? Xl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Xl(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    jv = he(Nv),
    Bv = b({}, Kl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Wf = he(Bv),
    _v = b({}, za, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Wu,
    }),
    Uv = he(_v),
    Lv = b({}, ai, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hv = he(Lv),
    Yv = b({}, Kl, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    qv = he(Yv),
    Gv = b({}, ai, { newState: 0, oldState: 0 }),
    Xv = he(Gv),
    Qv = [9, 13, 27, 32],
    Pu = un && "CompositionEvent" in window,
    Oa = null;
  un && "documentMode" in document && (Oa = document.documentMode);
  var Zv = un && "TextEvent" in window && !Oa,
    Pf = un && (!Pu || (Oa && 8 < Oa && 11 >= Oa)),
    $f = " ",
    If = !1;
  function th(t, e) {
    switch (t) {
      case "keyup":
        return Qv.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function eh(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Bi = !1;
  function Kv(t, e) {
    switch (t) {
      case "compositionend":
        return eh(e);
      case "keypress":
        return e.which !== 32 ? null : ((If = !0), $f);
      case "textInput":
        return (t = e.data), t === $f && If ? null : t;
      default:
        return null;
    }
  }
  function kv(t, e) {
    if (Bi)
      return t === "compositionend" || (!Pu && th(t, e))
        ? ((t = Kf()), (Gl = Ku = Mn = null), (Bi = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Pf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Jv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function nh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Jv[t.type] : e === "textarea";
  }
  function ih(t, e, n, l) {
    Ni ? (ji ? ji.push(l) : (ji = [l])) : (Ni = l),
      (e = Bs(e, "onChange")),
      0 < e.length &&
        ((n = new Zl("onChange", "change", null, n, l)),
        t.push({ event: n, listeners: e }));
  }
  var wa = null,
    Va = null;
  function Fv(t) {
    Hm(t, 0);
  }
  function kl(t) {
    var e = Ma(t);
    if (Lf(e)) return t;
  }
  function ah(t, e) {
    if (t === "change") return e;
  }
  var lh = !1;
  if (un) {
    var $u;
    if (un) {
      var Iu = "oninput" in document;
      if (!Iu) {
        var sh = document.createElement("div");
        sh.setAttribute("oninput", "return;"),
          (Iu = typeof sh.oninput == "function");
      }
      $u = Iu;
    } else $u = !1;
    lh = $u && (!document.documentMode || 9 < document.documentMode);
  }
  function uh() {
    wa && (wa.detachEvent("onpropertychange", oh), (Va = wa = null));
  }
  function oh(t) {
    if (t.propertyName === "value" && kl(Va)) {
      var e = [];
      ih(e, Va, t, Xu(t)), Zf(Fv, e);
    }
  }
  function Wv(t, e, n) {
    t === "focusin"
      ? (uh(), (wa = e), (Va = n), wa.attachEvent("onpropertychange", oh))
      : t === "focusout" && uh();
  }
  function Pv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return kl(Va);
  }
  function $v(t, e) {
    if (t === "click") return kl(e);
  }
  function Iv(t, e) {
    if (t === "input" || t === "change") return kl(e);
  }
  function t1(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Te = typeof Object.is == "function" ? Object.is : t1;
  function Na(t, e) {
    if (Te(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      l = Object.keys(e);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var o = n[l];
      if (!Ou.call(e, o) || !Te(t[o], e[o])) return !1;
    }
    return !0;
  }
  function rh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ch(t, e) {
    var n = rh(t);
    t = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = t + n.textContent.length), t <= e && l >= e))
          return { node: n, offset: e - t };
        t = l;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = rh(n);
    }
  }
  function fh(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? fh(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function hh(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Yl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Yl(t.document);
    }
    return e;
  }
  function to(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var e1 = un && "documentMode" in document && 11 >= document.documentMode,
    _i = null,
    eo = null,
    ja = null,
    no = !1;
  function dh(t, e, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    no ||
      _i == null ||
      _i !== Yl(l) ||
      ((l = _i),
      "selectionStart" in l && to(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (ja && Na(ja, l)) ||
        ((ja = l),
        (l = Bs(eo, "onSelect")),
        0 < l.length &&
          ((e = new Zl("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: l }),
          (e.target = _i))));
  }
  function li(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Ui = {
      animationend: li("Animation", "AnimationEnd"),
      animationiteration: li("Animation", "AnimationIteration"),
      animationstart: li("Animation", "AnimationStart"),
      transitionrun: li("Transition", "TransitionRun"),
      transitionstart: li("Transition", "TransitionStart"),
      transitioncancel: li("Transition", "TransitionCancel"),
      transitionend: li("Transition", "TransitionEnd"),
    },
    io = {},
    mh = {};
  un &&
    ((mh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ui.animationend.animation,
      delete Ui.animationiteration.animation,
      delete Ui.animationstart.animation),
    "TransitionEvent" in window || delete Ui.transitionend.transition);
  function si(t) {
    if (io[t]) return io[t];
    if (!Ui[t]) return t;
    var e = Ui[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in mh) return (io[t] = e[n]);
    return t;
  }
  var ph = si("animationend"),
    yh = si("animationiteration"),
    gh = si("animationstart"),
    n1 = si("transitionrun"),
    i1 = si("transitionstart"),
    a1 = si("transitioncancel"),
    vh = si("transitionend"),
    bh = new Map(),
    ao =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  ao.push("scrollEnd");
  function Ge(t, e) {
    bh.set(t, e), ii(e, [t]);
  }
  var Jl =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    Ve = [],
    Li = 0,
    lo = 0;
  function Fl() {
    for (var t = Li, e = (lo = Li = 0); e < t; ) {
      var n = Ve[e];
      Ve[e++] = null;
      var l = Ve[e];
      Ve[e++] = null;
      var o = Ve[e];
      Ve[e++] = null;
      var r = Ve[e];
      if (((Ve[e++] = null), l !== null && o !== null)) {
        var d = l.pending;
        d === null ? (o.next = o) : ((o.next = d.next), (d.next = o)),
          (l.pending = o);
      }
      r !== 0 && Sh(n, o, r);
    }
  }
  function Wl(t, e, n, l) {
    (Ve[Li++] = t),
      (Ve[Li++] = e),
      (Ve[Li++] = n),
      (Ve[Li++] = l),
      (lo |= l),
      (t.lanes |= l),
      (t = t.alternate),
      t !== null && (t.lanes |= l);
  }
  function so(t, e, n, l) {
    return Wl(t, e, n, l), Pl(t);
  }
  function ui(t, e) {
    return Wl(t, null, null, e), Pl(t);
  }
  function Sh(t, e, n) {
    t.lanes |= n;
    var l = t.alternate;
    l !== null && (l.lanes |= n);
    for (var o = !1, r = t.return; r !== null; )
      (r.childLanes |= n),
        (l = r.alternate),
        l !== null && (l.childLanes |= n),
        r.tag === 22 &&
          ((t = r.stateNode), t === null || t._visibility & 1 || (o = !0)),
        (t = r),
        (r = r.return);
    return t.tag === 3
      ? ((r = t.stateNode),
        o &&
          e !== null &&
          ((o = 31 - xe(n)),
          (t = r.hiddenUpdates),
          (l = t[o]),
          l === null ? (t[o] = [e]) : l.push(e),
          (e.lane = n | 536870912)),
        r)
      : null;
  }
  function Pl(t) {
    if (50 < nl) throw ((nl = 0), (yr = null), Error(s(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Hi = {};
  function l1(t, e, n, l) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ae(t, e, n, l) {
    return new l1(t, e, n, l);
  }
  function uo(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function on(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Ae(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function xh(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function $l(t, e, n, l, o, r) {
    var d = 0;
    if (((l = t), typeof t == "function")) uo(t) && (d = 1);
    else if (typeof t == "string")
      d = cb(t, n, W.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case it:
          return (t = Ae(31, n, e, o)), (t.elementType = it), (t.lanes = r), t;
        case U:
          return oi(n.children, o, r, e);
        case L:
          (d = 8), (o |= 24);
          break;
        case H:
          return (
            (t = Ae(12, n, e, o | 2)), (t.elementType = H), (t.lanes = r), t
          );
        case k:
          return (t = Ae(13, n, e, o)), (t.elementType = k), (t.lanes = r), t;
        case lt:
          return (t = Ae(19, n, e, o)), (t.elementType = lt), (t.lanes = r), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Y:
                d = 10;
                break t;
              case G:
                d = 9;
                break t;
              case X:
                d = 11;
                break t;
              case I:
                d = 14;
                break t;
              case $:
                (d = 16), (l = null);
                break t;
            }
          (d = 29),
            (n = Error(s(130, t === null ? "null" : typeof t, ""))),
            (l = null);
      }
    return (
      (e = Ae(d, n, e, o)), (e.elementType = t), (e.type = l), (e.lanes = r), e
    );
  }
  function oi(t, e, n, l) {
    return (t = Ae(7, t, l, e)), (t.lanes = n), t;
  }
  function oo(t, e, n) {
    return (t = Ae(6, t, null, e)), (t.lanes = n), t;
  }
  function Th(t) {
    var e = Ae(18, null, null, 0);
    return (e.stateNode = t), e;
  }
  function ro(t, e, n) {
    return (
      (e = Ae(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Ah = new WeakMap();
  function Ne(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Ah.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Tf(e) }), Ah.set(t, e), e);
    }
    return { value: t, source: e, stack: Tf(e) };
  }
  var Yi = [],
    qi = 0,
    Il = null,
    Ba = 0,
    je = [],
    Be = 0,
    Dn = null,
    Pe = 1,
    $e = "";
  function rn(t, e) {
    (Yi[qi++] = Ba), (Yi[qi++] = Il), (Il = t), (Ba = e);
  }
  function Eh(t, e, n) {
    (je[Be++] = Pe), (je[Be++] = $e), (je[Be++] = Dn), (Dn = t);
    var l = Pe;
    t = $e;
    var o = 32 - xe(l) - 1;
    (l &= ~(1 << o)), (n += 1);
    var r = 32 - xe(e) + o;
    if (30 < r) {
      var d = o - (o % 5);
      (r = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (o -= d),
        (Pe = (1 << (32 - xe(e) + o)) | (n << o) | l),
        ($e = r + t);
    } else (Pe = (1 << r) | (n << o) | l), ($e = t);
  }
  function co(t) {
    t.return !== null && (rn(t, 1), Eh(t, 1, 0));
  }
  function fo(t) {
    for (; t === Il; )
      (Il = Yi[--qi]), (Yi[qi] = null), (Ba = Yi[--qi]), (Yi[qi] = null);
    for (; t === Dn; )
      (Dn = je[--Be]),
        (je[Be] = null),
        ($e = je[--Be]),
        (je[Be] = null),
        (Pe = je[--Be]),
        (je[Be] = null);
  }
  function Mh(t, e) {
    (je[Be++] = Pe),
      (je[Be++] = $e),
      (je[Be++] = Dn),
      (Pe = e.id),
      ($e = e.overflow),
      (Dn = t);
  }
  var ee = null,
    wt = null,
    gt = !1,
    Cn = null,
    _e = !1,
    ho = Error(s(519));
  function zn(t) {
    var e = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (_a(Ne(e, t)), ho);
  }
  function Dh(t) {
    var e = t.stateNode,
      n = t.type,
      l = t.memoizedProps;
    switch (((e[te] = t), (e[fe] = l), n)) {
      case "dialog":
        ht("cancel", e), ht("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ht("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < al.length; n++) ht(al[n], e);
        break;
      case "source":
        ht("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ht("error", e), ht("load", e);
        break;
      case "details":
        ht("toggle", e);
        break;
      case "input":
        ht("invalid", e),
          Hf(
            e,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          );
        break;
      case "select":
        ht("invalid", e);
        break;
      case "textarea":
        ht("invalid", e), qf(e, l.value, l.defaultValue, l.children);
    }
    (n = l.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      l.suppressHydrationWarning === !0 ||
      Xm(e.textContent, n)
        ? (l.popover != null && (ht("beforetoggle", e), ht("toggle", e)),
          l.onScroll != null && ht("scroll", e),
          l.onScrollEnd != null && ht("scrollend", e),
          l.onClick != null && (e.onclick = sn),
          (e = !0))
        : (e = !1),
      e || zn(t, !0);
  }
  function Ch(t) {
    for (ee = t.return; ee; )
      switch (ee.tag) {
        case 5:
        case 31:
        case 13:
          _e = !1;
          return;
        case 27:
        case 3:
          _e = !0;
          return;
        default:
          ee = ee.return;
      }
  }
  function Gi(t) {
    if (t !== ee) return !1;
    if (!gt) return Ch(t), (gt = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || wr(t.type, t.memoizedProps))),
        (n = !n)),
      n && wt && zn(t),
      Ch(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      wt = $m(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      wt = $m(t);
    } else
      e === 27
        ? ((e = wt), Gn(t.type) ? ((t = _r), (_r = null), (wt = t)) : (wt = e))
        : (wt = ee ? Le(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ri() {
    (wt = ee = null), (gt = !1);
  }
  function mo() {
    var t = Cn;
    return (
      t !== null &&
        (ye === null ? (ye = t) : ye.push.apply(ye, t), (Cn = null)),
      t
    );
  }
  function _a(t) {
    Cn === null ? (Cn = [t]) : Cn.push(t);
  }
  var po = A(null),
    ci = null,
    cn = null;
  function Rn(t, e, n) {
    Z(po, e._currentValue), (e._currentValue = n);
  }
  function fn(t) {
    (t._currentValue = po.current), _(po);
  }
  function yo(t, e, n) {
    for (; t !== null; ) {
      var l = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), l !== null && (l.childLanes |= e))
          : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function go(t, e, n, l) {
    var o = t.child;
    for (o !== null && (o.return = t); o !== null; ) {
      var r = o.dependencies;
      if (r !== null) {
        var d = o.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var g = r;
          r = o;
          for (var x = 0; x < e.length; x++)
            if (g.context === e[x]) {
              (r.lanes |= n),
                (g = r.alternate),
                g !== null && (g.lanes |= n),
                yo(r.return, n, t),
                l || (d = null);
              break t;
            }
          r = g.next;
        }
      } else if (o.tag === 18) {
        if (((d = o.return), d === null)) throw Error(s(341));
        (d.lanes |= n),
          (r = d.alternate),
          r !== null && (r.lanes |= n),
          yo(d, n, t),
          (d = null);
      } else d = o.child;
      if (d !== null) d.return = o;
      else
        for (d = o; d !== null; ) {
          if (d === t) {
            d = null;
            break;
          }
          if (((o = d.sibling), o !== null)) {
            (o.return = d.return), (d = o);
            break;
          }
          d = d.return;
        }
      o = d;
    }
  }
  function Xi(t, e, n, l) {
    t = null;
    for (var o = e, r = !1; o !== null; ) {
      if (!r) {
        if ((o.flags & 524288) !== 0) r = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var d = o.alternate;
        if (d === null) throw Error(s(387));
        if (((d = d.memoizedProps), d !== null)) {
          var g = o.type;
          Te(o.pendingProps.value, d.value) ||
            (t !== null ? t.push(g) : (t = [g]));
        }
      } else if (o === At.current) {
        if (((d = o.alternate), d === null)) throw Error(s(387));
        d.memoizedState.memoizedState !== o.memoizedState.memoizedState &&
          (t !== null ? t.push(rl) : (t = [rl]));
      }
      o = o.return;
    }
    t !== null && go(e, t, n, l), (e.flags |= 262144);
  }
  function ts(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Te(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function fi(t) {
    (ci = t),
      (cn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function ne(t) {
    return zh(ci, t);
  }
  function es(t, e) {
    return ci === null && fi(t), zh(t, e);
  }
  function zh(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), cn === null)) {
      if (t === null) throw Error(s(308));
      (cn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else cn = cn.next = e;
    return n;
  }
  var s1 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  t.push(l);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    u1 = i.unstable_scheduleCallback,
    o1 = i.unstable_NormalPriority,
    Xt = {
      $$typeof: Y,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function vo() {
    return { controller: new s1(), data: new Map(), refCount: 0 };
  }
  function Ua(t) {
    t.refCount--,
      t.refCount === 0 &&
        u1(o1, function () {
          t.controller.abort();
        });
  }
  var La = null,
    bo = 0,
    Qi = 0,
    Zi = null;
  function r1(t, e) {
    if (La === null) {
      var n = (La = []);
      (bo = 0),
        (Qi = Tr()),
        (Zi = {
          status: "pending",
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        });
    }
    return bo++, e.then(Rh, Rh), e;
  }
  function Rh() {
    if (--bo === 0 && La !== null) {
      Zi !== null && (Zi.status = "fulfilled");
      var t = La;
      (La = null), (Qi = 0), (Zi = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function c1(t, e) {
    var n = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (o) {
          n.push(o);
        },
      };
    return (
      t.then(
        function () {
          (l.status = "fulfilled"), (l.value = e);
          for (var o = 0; o < n.length; o++) (0, n[o])(e);
        },
        function (o) {
          for (l.status = "rejected", l.reason = o, o = 0; o < n.length; o++)
            (0, n[o])(void 0);
        }
      ),
      l
    );
  }
  var Oh = V.S;
  V.S = function (t, e) {
    (dm = be()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        r1(t, e),
      Oh !== null && Oh(t, e);
  };
  var hi = A(null);
  function So() {
    var t = hi.current;
    return t !== null ? t : Rt.pooledCache;
  }
  function ns(t, e) {
    e === null ? Z(hi, hi.current) : Z(hi, e.pool);
  }
  function wh() {
    var t = So();
    return t === null ? null : { parent: Xt._currentValue, pool: t };
  }
  var Ki = Error(s(460)),
    xo = Error(s(474)),
    is = Error(s(542)),
    as = { then: function () {} };
  function Vh(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Nh(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(sn, sn), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Bh(t), t);
      default:
        if (typeof e.status == "string") e.then(sn, sn);
        else {
          if (((t = Rt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(s(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (l) {
                if (e.status === "pending") {
                  var o = e;
                  (o.status = "fulfilled"), (o.value = l);
                }
              },
              function (l) {
                if (e.status === "pending") {
                  var o = e;
                  (o.status = "rejected"), (o.reason = l);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Bh(t), t);
        }
        throw ((mi = e), Ki);
    }
  }
  function di(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((mi = n), Ki)
        : n;
    }
  }
  var mi = null;
  function jh() {
    if (mi === null) throw Error(s(459));
    var t = mi;
    return (mi = null), t;
  }
  function Bh(t) {
    if (t === Ki || t === is) throw Error(s(483));
  }
  var ki = null,
    Ha = 0;
  function ls(t) {
    var e = Ha;
    return (Ha += 1), ki === null && (ki = []), Nh(ki, t, e);
  }
  function Ya(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function ss(t, e) {
    throw e.$$typeof === S
      ? Error(s(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          s(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function _h(t) {
    function e(E, T) {
      if (t) {
        var D = E.deletions;
        D === null ? ((E.deletions = [T]), (E.flags |= 16)) : D.push(T);
      }
    }
    function n(E, T) {
      if (!t) return null;
      for (; T !== null; ) e(E, T), (T = T.sibling);
      return null;
    }
    function l(E) {
      for (var T = new Map(); E !== null; )
        E.key !== null ? T.set(E.key, E) : T.set(E.index, E), (E = E.sibling);
      return T;
    }
    function o(E, T) {
      return (E = on(E, T)), (E.index = 0), (E.sibling = null), E;
    }
    function r(E, T, D) {
      return (
        (E.index = D),
        t
          ? ((D = E.alternate),
            D !== null
              ? ((D = D.index), D < T ? ((E.flags |= 67108866), T) : D)
              : ((E.flags |= 67108866), T))
          : ((E.flags |= 1048576), T)
      );
    }
    function d(E) {
      return t && E.alternate === null && (E.flags |= 67108866), E;
    }
    function g(E, T, D, j) {
      return T === null || T.tag !== 6
        ? ((T = oo(D, E.mode, j)), (T.return = E), T)
        : ((T = o(T, D)), (T.return = E), T);
    }
    function x(E, T, D, j) {
      var et = D.type;
      return et === U
        ? N(E, T, D.props.children, j, D.key)
        : T !== null &&
          (T.elementType === et ||
            (typeof et == "object" &&
              et !== null &&
              et.$$typeof === $ &&
              di(et) === T.type))
        ? ((T = o(T, D.props)), Ya(T, D), (T.return = E), T)
        : ((T = $l(D.type, D.key, D.props, null, E.mode, j)),
          Ya(T, D),
          (T.return = E),
          T);
    }
    function C(E, T, D, j) {
      return T === null ||
        T.tag !== 4 ||
        T.stateNode.containerInfo !== D.containerInfo ||
        T.stateNode.implementation !== D.implementation
        ? ((T = ro(D, E.mode, j)), (T.return = E), T)
        : ((T = o(T, D.children || [])), (T.return = E), T);
    }
    function N(E, T, D, j, et) {
      return T === null || T.tag !== 7
        ? ((T = oi(D, E.mode, j, et)), (T.return = E), T)
        : ((T = o(T, D)), (T.return = E), T);
    }
    function B(E, T, D) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return (T = oo("" + T, E.mode, D)), (T.return = E), T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case M:
            return (
              (D = $l(T.type, T.key, T.props, null, E.mode, D)),
              Ya(D, T),
              (D.return = E),
              D
            );
          case w:
            return (T = ro(T, E.mode, D)), (T.return = E), T;
          case $:
            return (T = di(T)), B(E, T, D);
        }
        if (Lt(T) || bt(T))
          return (T = oi(T, E.mode, D, null)), (T.return = E), T;
        if (typeof T.then == "function") return B(E, ls(T), D);
        if (T.$$typeof === Y) return B(E, es(E, T), D);
        ss(E, T);
      }
      return null;
    }
    function z(E, T, D, j) {
      var et = T !== null ? T.key : null;
      if (
        (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
      )
        return et !== null ? null : g(E, T, "" + D, j);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case M:
            return D.key === et ? x(E, T, D, j) : null;
          case w:
            return D.key === et ? C(E, T, D, j) : null;
          case $:
            return (D = di(D)), z(E, T, D, j);
        }
        if (Lt(D) || bt(D)) return et !== null ? null : N(E, T, D, j, null);
        if (typeof D.then == "function") return z(E, T, ls(D), j);
        if (D.$$typeof === Y) return z(E, T, es(E, D), j);
        ss(E, D);
      }
      return null;
    }
    function O(E, T, D, j, et) {
      if (
        (typeof j == "string" && j !== "") ||
        typeof j == "number" ||
        typeof j == "bigint"
      )
        return (E = E.get(D) || null), g(T, E, "" + j, et);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case M:
            return (
              (E = E.get(j.key === null ? D : j.key) || null), x(T, E, j, et)
            );
          case w:
            return (
              (E = E.get(j.key === null ? D : j.key) || null), C(T, E, j, et)
            );
          case $:
            return (j = di(j)), O(E, T, D, j, et);
        }
        if (Lt(j) || bt(j)) return (E = E.get(D) || null), N(T, E, j, et, null);
        if (typeof j.then == "function") return O(E, T, D, ls(j), et);
        if (j.$$typeof === Y) return O(E, T, D, es(T, j), et);
        ss(T, j);
      }
      return null;
    }
    function J(E, T, D, j) {
      for (
        var et = null, St = null, P = T, rt = (T = 0), mt = null;
        P !== null && rt < D.length;
        rt++
      ) {
        P.index > rt ? ((mt = P), (P = null)) : (mt = P.sibling);
        var xt = z(E, P, D[rt], j);
        if (xt === null) {
          P === null && (P = mt);
          break;
        }
        t && P && xt.alternate === null && e(E, P),
          (T = r(xt, T, rt)),
          St === null ? (et = xt) : (St.sibling = xt),
          (St = xt),
          (P = mt);
      }
      if (rt === D.length) return n(E, P), gt && rn(E, rt), et;
      if (P === null) {
        for (; rt < D.length; rt++)
          (P = B(E, D[rt], j)),
            P !== null &&
              ((T = r(P, T, rt)),
              St === null ? (et = P) : (St.sibling = P),
              (St = P));
        return gt && rn(E, rt), et;
      }
      for (P = l(P); rt < D.length; rt++)
        (mt = O(P, E, rt, D[rt], j)),
          mt !== null &&
            (t &&
              mt.alternate !== null &&
              P.delete(mt.key === null ? rt : mt.key),
            (T = r(mt, T, rt)),
            St === null ? (et = mt) : (St.sibling = mt),
            (St = mt));
      return (
        t &&
          P.forEach(function (kn) {
            return e(E, kn);
          }),
        gt && rn(E, rt),
        et
      );
    }
    function nt(E, T, D, j) {
      if (D == null) throw Error(s(151));
      for (
        var et = null, St = null, P = T, rt = (T = 0), mt = null, xt = D.next();
        P !== null && !xt.done;
        rt++, xt = D.next()
      ) {
        P.index > rt ? ((mt = P), (P = null)) : (mt = P.sibling);
        var kn = z(E, P, xt.value, j);
        if (kn === null) {
          P === null && (P = mt);
          break;
        }
        t && P && kn.alternate === null && e(E, P),
          (T = r(kn, T, rt)),
          St === null ? (et = kn) : (St.sibling = kn),
          (St = kn),
          (P = mt);
      }
      if (xt.done) return n(E, P), gt && rn(E, rt), et;
      if (P === null) {
        for (; !xt.done; rt++, xt = D.next())
          (xt = B(E, xt.value, j)),
            xt !== null &&
              ((T = r(xt, T, rt)),
              St === null ? (et = xt) : (St.sibling = xt),
              (St = xt));
        return gt && rn(E, rt), et;
      }
      for (P = l(P); !xt.done; rt++, xt = D.next())
        (xt = O(P, E, rt, xt.value, j)),
          xt !== null &&
            (t &&
              xt.alternate !== null &&
              P.delete(xt.key === null ? rt : xt.key),
            (T = r(xt, T, rt)),
            St === null ? (et = xt) : (St.sibling = xt),
            (St = xt));
      return (
        t &&
          P.forEach(function (xb) {
            return e(E, xb);
          }),
        gt && rn(E, rt),
        et
      );
    }
    function zt(E, T, D, j) {
      if (
        (typeof D == "object" &&
          D !== null &&
          D.type === U &&
          D.key === null &&
          (D = D.props.children),
        typeof D == "object" && D !== null)
      ) {
        switch (D.$$typeof) {
          case M:
            t: {
              for (var et = D.key; T !== null; ) {
                if (T.key === et) {
                  if (((et = D.type), et === U)) {
                    if (T.tag === 7) {
                      n(E, T.sibling),
                        (j = o(T, D.props.children)),
                        (j.return = E),
                        (E = j);
                      break t;
                    }
                  } else if (
                    T.elementType === et ||
                    (typeof et == "object" &&
                      et !== null &&
                      et.$$typeof === $ &&
                      di(et) === T.type)
                  ) {
                    n(E, T.sibling),
                      (j = o(T, D.props)),
                      Ya(j, D),
                      (j.return = E),
                      (E = j);
                    break t;
                  }
                  n(E, T);
                  break;
                } else e(E, T);
                T = T.sibling;
              }
              D.type === U
                ? ((j = oi(D.props.children, E.mode, j, D.key)),
                  (j.return = E),
                  (E = j))
                : ((j = $l(D.type, D.key, D.props, null, E.mode, j)),
                  Ya(j, D),
                  (j.return = E),
                  (E = j));
            }
            return d(E);
          case w:
            t: {
              for (et = D.key; T !== null; ) {
                if (T.key === et)
                  if (
                    T.tag === 4 &&
                    T.stateNode.containerInfo === D.containerInfo &&
                    T.stateNode.implementation === D.implementation
                  ) {
                    n(E, T.sibling),
                      (j = o(T, D.children || [])),
                      (j.return = E),
                      (E = j);
                    break t;
                  } else {
                    n(E, T);
                    break;
                  }
                else e(E, T);
                T = T.sibling;
              }
              (j = ro(D, E.mode, j)), (j.return = E), (E = j);
            }
            return d(E);
          case $:
            return (D = di(D)), zt(E, T, D, j);
        }
        if (Lt(D)) return J(E, T, D, j);
        if (bt(D)) {
          if (((et = bt(D)), typeof et != "function")) throw Error(s(150));
          return (D = et.call(D)), nt(E, T, D, j);
        }
        if (typeof D.then == "function") return zt(E, T, ls(D), j);
        if (D.$$typeof === Y) return zt(E, T, es(E, D), j);
        ss(E, D);
      }
      return (typeof D == "string" && D !== "") ||
        typeof D == "number" ||
        typeof D == "bigint"
        ? ((D = "" + D),
          T !== null && T.tag === 6
            ? (n(E, T.sibling), (j = o(T, D)), (j.return = E), (E = j))
            : (n(E, T), (j = oo(D, E.mode, j)), (j.return = E), (E = j)),
          d(E))
        : n(E, T);
    }
    return function (E, T, D, j) {
      try {
        Ha = 0;
        var et = zt(E, T, D, j);
        return (ki = null), et;
      } catch (P) {
        if (P === Ki || P === is) throw P;
        var St = Ae(29, P, null, E.mode);
        return (St.lanes = j), (St.return = E), St;
      } finally {
      }
    };
  }
  var pi = _h(!0),
    Uh = _h(!1),
    On = !1;
  function To(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ao(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function wn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Vn(t, e, n) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Tt & 2) !== 0)) {
      var o = l.pending;
      return (
        o === null ? (e.next = e) : ((e.next = o.next), (o.next = e)),
        (l.pending = e),
        (e = Pl(t)),
        Sh(t, null, n),
        e
      );
    }
    return Wl(t, l, e, n), Pl(t);
  }
  function qa(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var l = e.lanes;
      (l &= t.pendingLanes), (n |= l), (e.lanes = n), zf(t, n);
    }
  }
  function Eo(t, e) {
    var n = t.updateQueue,
      l = t.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var o = null,
        r = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          r === null ? (o = r = d) : (r = r.next = d), (n = n.next);
        } while (n !== null);
        r === null ? (o = r = e) : (r = r.next = e);
      } else o = r = e;
      (n = {
        baseState: l.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: r,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var Mo = !1;
  function Ga() {
    if (Mo) {
      var t = Zi;
      if (t !== null) throw t;
    }
  }
  function Xa(t, e, n, l) {
    Mo = !1;
    var o = t.updateQueue;
    On = !1;
    var r = o.firstBaseUpdate,
      d = o.lastBaseUpdate,
      g = o.shared.pending;
    if (g !== null) {
      o.shared.pending = null;
      var x = g,
        C = x.next;
      (x.next = null), d === null ? (r = C) : (d.next = C), (d = x);
      var N = t.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (g = N.lastBaseUpdate),
        g !== d &&
          (g === null ? (N.firstBaseUpdate = C) : (g.next = C),
          (N.lastBaseUpdate = x)));
    }
    if (r !== null) {
      var B = o.baseState;
      (d = 0), (N = C = x = null), (g = r);
      do {
        var z = g.lane & -536870913,
          O = z !== g.lane;
        if (O ? (dt & z) === z : (l & z) === z) {
          z !== 0 && z === Qi && (Mo = !0),
            N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var J = t,
              nt = g;
            z = e;
            var zt = n;
            switch (nt.tag) {
              case 1:
                if (((J = nt.payload), typeof J == "function")) {
                  B = J.call(zt, B, z);
                  break t;
                }
                B = J;
                break t;
              case 3:
                J.flags = (J.flags & -65537) | 128;
              case 0:
                if (
                  ((J = nt.payload),
                  (z = typeof J == "function" ? J.call(zt, B, z) : J),
                  z == null)
                )
                  break t;
                B = b({}, B, z);
                break t;
              case 2:
                On = !0;
            }
          }
          (z = g.callback),
            z !== null &&
              ((t.flags |= 64),
              O && (t.flags |= 8192),
              (O = o.callbacks),
              O === null ? (o.callbacks = [z]) : O.push(z));
        } else
          (O = {
            lane: z,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            N === null ? ((C = N = O), (x = B)) : (N = N.next = O),
            (d |= z);
        if (((g = g.next), g === null)) {
          if (((g = o.shared.pending), g === null)) break;
          (O = g),
            (g = O.next),
            (O.next = null),
            (o.lastBaseUpdate = O),
            (o.shared.pending = null);
        }
      } while (!0);
      N === null && (x = B),
        (o.baseState = x),
        (o.firstBaseUpdate = C),
        (o.lastBaseUpdate = N),
        r === null && (o.shared.lanes = 0),
        (Un |= d),
        (t.lanes = d),
        (t.memoizedState = B);
    }
  }
  function Lh(t, e) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(e);
  }
  function Hh(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Lh(n[t], e);
  }
  var Ji = A(null),
    us = A(0);
  function Yh(t, e) {
    (t = Sn), Z(us, t), Z(Ji, e), (Sn = t | e.baseLanes);
  }
  function Do() {
    Z(us, Sn), Z(Ji, Ji.current);
  }
  function Co() {
    (Sn = us.current), _(Ji), _(us);
  }
  var Ee = A(null),
    Ue = null;
  function Nn(t) {
    var e = t.alternate;
    Z(Yt, Yt.current & 1),
      Z(Ee, t),
      Ue === null &&
        (e === null || Ji.current !== null || e.memoizedState !== null) &&
        (Ue = t);
  }
  function zo(t) {
    Z(Yt, Yt.current), Z(Ee, t), Ue === null && (Ue = t);
  }
  function qh(t) {
    t.tag === 22
      ? (Z(Yt, Yt.current), Z(Ee, t), Ue === null && (Ue = t))
      : jn();
  }
  function jn() {
    Z(Yt, Yt.current), Z(Ee, Ee.current);
  }
  function Me(t) {
    _(Ee), Ue === t && (Ue = null), _(Yt);
  }
  var Yt = A(0);
  function os(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || jr(n) || Br(n)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var hn = 0,
    ut = null,
    Dt = null,
    Qt = null,
    rs = !1,
    Fi = !1,
    yi = !1,
    cs = 0,
    Qa = 0,
    Wi = null,
    f1 = 0;
  function Bt() {
    throw Error(s(321));
  }
  function Ro(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Te(t[n], e[n])) return !1;
    return !0;
  }
  function Oo(t, e, n, l, o, r) {
    return (
      (hn = r),
      (ut = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (V.H = t === null || t.memoizedState === null ? Ed : Zo),
      (yi = !1),
      (r = n(l, o)),
      (yi = !1),
      Fi && (r = Xh(e, n, l, o)),
      Gh(t),
      r
    );
  }
  function Gh(t) {
    V.H = ka;
    var e = Dt !== null && Dt.next !== null;
    if (((hn = 0), (Qt = Dt = ut = null), (rs = !1), (Qa = 0), (Wi = null), e))
      throw Error(s(300));
    t === null ||
      Zt ||
      ((t = t.dependencies), t !== null && ts(t) && (Zt = !0));
  }
  function Xh(t, e, n, l) {
    ut = t;
    var o = 0;
    do {
      if ((Fi && (Wi = null), (Qa = 0), (Fi = !1), 25 <= o))
        throw Error(s(301));
      if (((o += 1), (Qt = Dt = null), t.updateQueue != null)) {
        var r = t.updateQueue;
        (r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0);
      }
      (V.H = Md), (r = e(n, l));
    } while (Fi);
    return r;
  }
  function h1() {
    var t = V.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Za(e) : e),
      (t = t.useState()[0]),
      (Dt !== null ? Dt.memoizedState : null) !== t && (ut.flags |= 1024),
      e
    );
  }
  function wo() {
    var t = cs !== 0;
    return (cs = 0), t;
  }
  function Vo(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function No(t) {
    if (rs) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      rs = !1;
    }
    (hn = 0), (Qt = Dt = ut = null), (Fi = !1), (Qa = cs = 0), (Wi = null);
  }
  function oe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Qt === null ? (ut.memoizedState = Qt = t) : (Qt = Qt.next = t), Qt;
  }
  function qt() {
    if (Dt === null) {
      var t = ut.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Dt.next;
    var e = Qt === null ? ut.memoizedState : Qt.next;
    if (e !== null) (Qt = e), (Dt = t);
    else {
      if (t === null)
        throw ut.alternate === null ? Error(s(467)) : Error(s(310));
      (Dt = t),
        (t = {
          memoizedState: Dt.memoizedState,
          baseState: Dt.baseState,
          baseQueue: Dt.baseQueue,
          queue: Dt.queue,
          next: null,
        }),
        Qt === null ? (ut.memoizedState = Qt = t) : (Qt = Qt.next = t);
    }
    return Qt;
  }
  function fs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Za(t) {
    var e = Qa;
    return (
      (Qa += 1),
      Wi === null && (Wi = []),
      (t = Nh(Wi, t, e)),
      (e = ut),
      (Qt === null ? e.memoizedState : Qt.next) === null &&
        ((e = e.alternate),
        (V.H = e === null || e.memoizedState === null ? Ed : Zo)),
      t
    );
  }
  function hs(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Za(t);
      if (t.$$typeof === Y) return ne(t);
    }
    throw Error(s(438, String(t)));
  }
  function jo(t) {
    var e = null,
      n = ut.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var l = ut.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (e = {
              data: l.data.map(function (o) {
                return o.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = fs()), (ut.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), l = 0; l < t; l++) n[l] = tt;
    return e.index++, n;
  }
  function dn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ds(t) {
    var e = qt();
    return Bo(e, Dt, t);
  }
  function Bo(t, e, n) {
    var l = t.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = n;
    var o = t.baseQueue,
      r = l.pending;
    if (r !== null) {
      if (o !== null) {
        var d = o.next;
        (o.next = r.next), (r.next = d);
      }
      (e.baseQueue = o = r), (l.pending = null);
    }
    if (((r = t.baseState), o === null)) t.memoizedState = r;
    else {
      e = o.next;
      var g = (d = null),
        x = null,
        C = e,
        N = !1;
      do {
        var B = C.lane & -536870913;
        if (B !== C.lane ? (dt & B) === B : (hn & B) === B) {
          var z = C.revertLane;
          if (z === 0)
            x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: C.action,
                  hasEagerState: C.hasEagerState,
                  eagerState: C.eagerState,
                  next: null,
                }),
              B === Qi && (N = !0);
          else if ((hn & z) === z) {
            (C = C.next), z === Qi && (N = !0);
            continue;
          } else
            (B = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null,
            }),
              x === null ? ((g = x = B), (d = r)) : (x = x.next = B),
              (ut.lanes |= z),
              (Un |= z);
          (B = C.action),
            yi && n(r, B),
            (r = C.hasEagerState ? C.eagerState : n(r, B));
        } else
          (z = {
            lane: B,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null,
          }),
            x === null ? ((g = x = z), (d = r)) : (x = x.next = z),
            (ut.lanes |= B),
            (Un |= B);
        C = C.next;
      } while (C !== null && C !== e);
      if (
        (x === null ? (d = r) : (x.next = g),
        !Te(r, t.memoizedState) && ((Zt = !0), N && ((n = Zi), n !== null)))
      )
        throw n;
      (t.memoizedState = r),
        (t.baseState = d),
        (t.baseQueue = x),
        (l.lastRenderedState = r);
    }
    return o === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function _o(t) {
    var e = qt(),
      n = e.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = t;
    var l = n.dispatch,
      o = n.pending,
      r = e.memoizedState;
    if (o !== null) {
      n.pending = null;
      var d = (o = o.next);
      do (r = t(r, d.action)), (d = d.next);
      while (d !== o);
      Te(r, e.memoizedState) || (Zt = !0),
        (e.memoizedState = r),
        e.baseQueue === null && (e.baseState = r),
        (n.lastRenderedState = r);
    }
    return [r, l];
  }
  function Qh(t, e, n) {
    var l = ut,
      o = qt(),
      r = gt;
    if (r) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = e();
    var d = !Te((Dt || o).memoizedState, n);
    if (
      (d && ((o.memoizedState = n), (Zt = !0)),
      (o = o.queue),
      Ho(kh.bind(null, l, o, t), [t]),
      o.getSnapshot !== e || d || (Qt !== null && Qt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Pi(9, { destroy: void 0 }, Kh.bind(null, l, o, n, e), null),
        Rt === null)
      )
        throw Error(s(349));
      r || (hn & 127) !== 0 || Zh(l, e, n);
    }
    return n;
  }
  function Zh(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ut.updateQueue),
      e === null
        ? ((e = fs()), (ut.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function Kh(t, e, n, l) {
    (e.value = n), (e.getSnapshot = l), Jh(e) && Fh(t);
  }
  function kh(t, e, n) {
    return n(function () {
      Jh(e) && Fh(t);
    });
  }
  function Jh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Te(t, n);
    } catch {
      return !0;
    }
  }
  function Fh(t) {
    var e = ui(t, 2);
    e !== null && ge(e, t, 2);
  }
  function Uo(t) {
    var e = oe();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), yi)) {
        An(!0);
        try {
          n();
        } finally {
          An(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Wh(t, e, n, l) {
    return (t.baseState = n), Bo(t, Dt, typeof l == "function" ? l : dn);
  }
  function d1(t, e, n, l, o) {
    if (ys(t)) throw Error(s(485));
    if (((t = e.action), t !== null)) {
      var r = {
        payload: o,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          r.listeners.push(d);
        },
      };
      V.T !== null ? n(!0) : (r.isTransition = !1),
        l(r),
        (n = e.pending),
        n === null
          ? ((r.next = e.pending = r), Ph(e, r))
          : ((r.next = n.next), (e.pending = n.next = r));
    }
  }
  function Ph(t, e) {
    var n = e.action,
      l = e.payload,
      o = t.state;
    if (e.isTransition) {
      var r = V.T,
        d = {};
      V.T = d;
      try {
        var g = n(o, l),
          x = V.S;
        x !== null && x(d, g), $h(t, e, g);
      } catch (C) {
        Lo(t, e, C);
      } finally {
        r !== null && d.types !== null && (r.types = d.types), (V.T = r);
      }
    } else
      try {
        (r = n(o, l)), $h(t, e, r);
      } catch (C) {
        Lo(t, e, C);
      }
  }
  function $h(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (l) {
            Ih(t, e, l);
          },
          function (l) {
            return Lo(t, e, l);
          }
        )
      : Ih(t, e, n);
  }
  function Ih(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      td(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Ph(t, n)));
  }
  function Lo(t, e, n) {
    var l = t.pending;
    if (((t.pending = null), l !== null)) {
      l = l.next;
      do (e.status = "rejected"), (e.reason = n), td(e), (e = e.next);
      while (e !== l);
    }
    t.action = null;
  }
  function td(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function ed(t, e) {
    return e;
  }
  function nd(t, e) {
    if (gt) {
      var n = Rt.formState;
      if (n !== null) {
        t: {
          var l = ut;
          if (gt) {
            if (wt) {
              e: {
                for (var o = wt, r = _e; o.nodeType !== 8; ) {
                  if (!r) {
                    o = null;
                    break e;
                  }
                  if (((o = Le(o.nextSibling)), o === null)) {
                    o = null;
                    break e;
                  }
                }
                (r = o.data), (o = r === "F!" || r === "F" ? o : null);
              }
              if (o) {
                (wt = Le(o.nextSibling)), (l = o.data === "F!");
                break t;
              }
            }
            zn(l);
          }
          l = !1;
        }
        l && (e = n[0]);
      }
    }
    return (
      (n = oe()),
      (n.memoizedState = n.baseState = e),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ed,
        lastRenderedState: e,
      }),
      (n.queue = l),
      (n = xd.bind(null, ut, l)),
      (l.dispatch = n),
      (l = Uo(!1)),
      (r = Qo.bind(null, ut, !1, l.queue)),
      (l = oe()),
      (o = { state: e, dispatch: null, action: t, pending: null }),
      (l.queue = o),
      (n = d1.bind(null, ut, o, r, n)),
      (o.dispatch = n),
      (l.memoizedState = t),
      [e, n, !1]
    );
  }
  function id(t) {
    var e = qt();
    return ad(e, Dt, t);
  }
  function ad(t, e, n) {
    if (
      ((e = Bo(t, e, ed)[0]),
      (t = ds(dn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var l = Za(e);
      } catch (d) {
        throw d === Ki ? is : d;
      }
    else l = e;
    e = qt();
    var o = e.queue,
      r = o.dispatch;
    return (
      n !== e.memoizedState &&
        ((ut.flags |= 2048),
        Pi(9, { destroy: void 0 }, m1.bind(null, o, n), null)),
      [l, r, t]
    );
  }
  function m1(t, e) {
    t.action = e;
  }
  function ld(t) {
    var e = qt(),
      n = Dt;
    if (n !== null) return ad(e, n, t);
    qt(), (e = e.memoizedState), (n = qt());
    var l = n.queue.dispatch;
    return (n.memoizedState = t), [e, l, !1];
  }
  function Pi(t, e, n, l) {
    return (
      (t = { tag: t, create: n, deps: l, inst: e, next: null }),
      (e = ut.updateQueue),
      e === null && ((e = fs()), (ut.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((l = n.next), (n.next = t), (t.next = l), (e.lastEffect = t)),
      t
    );
  }
  function sd() {
    return qt().memoizedState;
  }
  function ms(t, e, n, l) {
    var o = oe();
    (ut.flags |= t),
      (o.memoizedState = Pi(
        1 | e,
        { destroy: void 0 },
        n,
        l === void 0 ? null : l
      ));
  }
  function ps(t, e, n, l) {
    var o = qt();
    l = l === void 0 ? null : l;
    var r = o.memoizedState.inst;
    Dt !== null && l !== null && Ro(l, Dt.memoizedState.deps)
      ? (o.memoizedState = Pi(e, r, n, l))
      : ((ut.flags |= t), (o.memoizedState = Pi(1 | e, r, n, l)));
  }
  function ud(t, e) {
    ms(8390656, 8, t, e);
  }
  function Ho(t, e) {
    ps(2048, 8, t, e);
  }
  function p1(t) {
    ut.flags |= 4;
    var e = ut.updateQueue;
    if (e === null) (e = fs()), (ut.updateQueue = e), (e.events = [t]);
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function od(t) {
    var e = qt().memoizedState;
    return (
      p1({ ref: e, nextImpl: t }),
      function () {
        if ((Tt & 2) !== 0) throw Error(s(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function rd(t, e) {
    return ps(4, 2, t, e);
  }
  function cd(t, e) {
    return ps(4, 4, t, e);
  }
  function fd(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function hd(t, e, n) {
    (n = n != null ? n.concat([t]) : null), ps(4, 4, fd.bind(null, e, t), n);
  }
  function Yo() {}
  function dd(t, e) {
    var n = qt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    return e !== null && Ro(e, l[1]) ? l[0] : ((n.memoizedState = [t, e]), t);
  }
  function md(t, e) {
    var n = qt();
    e = e === void 0 ? null : e;
    var l = n.memoizedState;
    if (e !== null && Ro(e, l[1])) return l[0];
    if (((l = t()), yi)) {
      An(!0);
      try {
        t();
      } finally {
        An(!1);
      }
    }
    return (n.memoizedState = [l, e]), l;
  }
  function qo(t, e, n) {
    return n === void 0 || ((hn & 1073741824) !== 0 && (dt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = pm()), (ut.lanes |= t), (Un |= t), n);
  }
  function pd(t, e, n, l) {
    return Te(n, e)
      ? n
      : Ji.current !== null
      ? ((t = qo(t, n, l)), Te(t, e) || (Zt = !0), t)
      : (hn & 42) === 0 || ((hn & 1073741824) !== 0 && (dt & 261930) === 0)
      ? ((Zt = !0), (t.memoizedState = n))
      : ((t = pm()), (ut.lanes |= t), (Un |= t), e);
  }
  function yd(t, e, n, l, o) {
    var r = Q.p;
    Q.p = r !== 0 && 8 > r ? r : 8;
    var d = V.T,
      g = {};
    (V.T = g), Qo(t, !1, e, n);
    try {
      var x = o(),
        C = V.S;
      if (
        (C !== null && C(g, x),
        x !== null && typeof x == "object" && typeof x.then == "function")
      ) {
        var N = c1(x, l);
        Ka(t, e, N, ze(t));
      } else Ka(t, e, l, ze(t));
    } catch (B) {
      Ka(t, e, { then: function () {}, status: "rejected", reason: B }, ze());
    } finally {
      (Q.p = r),
        d !== null && g.types !== null && (d.types = g.types),
        (V.T = d);
    }
  }
  function y1() {}
  function Go(t, e, n, l) {
    if (t.tag !== 5) throw Error(s(476));
    var o = gd(t).queue;
    yd(
      t,
      o,
      e,
      K,
      n === null
        ? y1
        : function () {
            return vd(t), n(l);
          }
    );
  }
  function gd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dn,
        lastRenderedState: K,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: dn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function vd(t) {
    var e = gd(t);
    e.next === null && (e = t.alternate.memoizedState),
      Ka(t, e.next.queue, {}, ze());
  }
  function Xo() {
    return ne(rl);
  }
  function bd() {
    return qt().memoizedState;
  }
  function Sd() {
    return qt().memoizedState;
  }
  function g1(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = ze();
          t = wn(n);
          var l = Vn(e, t, n);
          l !== null && (ge(l, e, n), qa(l, e, n)),
            (e = { cache: vo() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function v1(t, e, n) {
    var l = ze();
    (n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ys(t)
        ? Td(e, n)
        : ((n = so(t, e, n, l)), n !== null && (ge(n, t, l), Ad(n, e, l)));
  }
  function xd(t, e, n) {
    var l = ze();
    Ka(t, e, n, l);
  }
  function Ka(t, e, n, l) {
    var o = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ys(t)) Td(e, o);
    else {
      var r = t.alternate;
      if (
        t.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = e.lastRenderedReducer), r !== null)
      )
        try {
          var d = e.lastRenderedState,
            g = r(d, n);
          if (((o.hasEagerState = !0), (o.eagerState = g), Te(g, d)))
            return Wl(t, e, o, 0), Rt === null && Fl(), !1;
        } catch {
        } finally {
        }
      if (((n = so(t, e, o, l)), n !== null))
        return ge(n, t, l), Ad(n, e, l), !0;
    }
    return !1;
  }
  function Qo(t, e, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Tr(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ys(t))
    ) {
      if (e) throw Error(s(479));
    } else (e = so(t, n, l, 2)), e !== null && ge(e, t, 2);
  }
  function ys(t) {
    var e = t.alternate;
    return t === ut || (e !== null && e === ut);
  }
  function Td(t, e) {
    Fi = rs = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function Ad(t, e, n) {
    if ((n & 4194048) !== 0) {
      var l = e.lanes;
      (l &= t.pendingLanes), (n |= l), (e.lanes = n), zf(t, n);
    }
  }
  var ka = {
    readContext: ne,
    use: hs,
    useCallback: Bt,
    useContext: Bt,
    useEffect: Bt,
    useImperativeHandle: Bt,
    useLayoutEffect: Bt,
    useInsertionEffect: Bt,
    useMemo: Bt,
    useReducer: Bt,
    useRef: Bt,
    useState: Bt,
    useDebugValue: Bt,
    useDeferredValue: Bt,
    useTransition: Bt,
    useSyncExternalStore: Bt,
    useId: Bt,
    useHostTransitionStatus: Bt,
    useFormState: Bt,
    useActionState: Bt,
    useOptimistic: Bt,
    useMemoCache: Bt,
    useCacheRefresh: Bt,
  };
  ka.useEffectEvent = Bt;
  var Ed = {
      readContext: ne,
      use: hs,
      useCallback: function (t, e) {
        return (oe().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: ne,
      useEffect: ud,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          ms(4194308, 4, fd.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return ms(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        ms(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = oe();
        e = e === void 0 ? null : e;
        var l = t();
        if (yi) {
          An(!0);
          try {
            t();
          } finally {
            An(!1);
          }
        }
        return (n.memoizedState = [l, e]), l;
      },
      useReducer: function (t, e, n) {
        var l = oe();
        if (n !== void 0) {
          var o = n(e);
          if (yi) {
            An(!0);
            try {
              n(e);
            } finally {
              An(!1);
            }
          }
        } else o = e;
        return (
          (l.memoizedState = l.baseState = o),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: o,
          }),
          (l.queue = t),
          (t = t.dispatch = v1.bind(null, ut, t)),
          [l.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = oe();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Uo(t);
        var e = t.queue,
          n = xd.bind(null, ut, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: Yo,
      useDeferredValue: function (t, e) {
        var n = oe();
        return qo(n, t, e);
      },
      useTransition: function () {
        var t = Uo(!1);
        return (
          (t = yd.bind(null, ut, t.queue, !0, !1)),
          (oe().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var l = ut,
          o = oe();
        if (gt) {
          if (n === void 0) throw Error(s(407));
          n = n();
        } else {
          if (((n = e()), Rt === null)) throw Error(s(349));
          (dt & 127) !== 0 || Zh(l, e, n);
        }
        o.memoizedState = n;
        var r = { value: n, getSnapshot: e };
        return (
          (o.queue = r),
          ud(kh.bind(null, l, r, t), [t]),
          (l.flags |= 2048),
          Pi(9, { destroy: void 0 }, Kh.bind(null, l, r, n, e), null),
          n
        );
      },
      useId: function () {
        var t = oe(),
          e = Rt.identifierPrefix;
        if (gt) {
          var n = $e,
            l = Pe;
          (n = (l & ~(1 << (32 - xe(l) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = cs++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_");
        } else (n = f1++), (e = "_" + e + "r_" + n.toString(32) + "_");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Xo,
      useFormState: nd,
      useActionState: nd,
      useOptimistic: function (t) {
        var e = oe();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Qo.bind(null, ut, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: jo,
      useCacheRefresh: function () {
        return (oe().memoizedState = g1.bind(null, ut));
      },
      useEffectEvent: function (t) {
        var e = oe(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((Tt & 2) !== 0) throw Error(s(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Zo = {
      readContext: ne,
      use: hs,
      useCallback: dd,
      useContext: ne,
      useEffect: Ho,
      useImperativeHandle: hd,
      useInsertionEffect: rd,
      useLayoutEffect: cd,
      useMemo: md,
      useReducer: ds,
      useRef: sd,
      useState: function () {
        return ds(dn);
      },
      useDebugValue: Yo,
      useDeferredValue: function (t, e) {
        var n = qt();
        return pd(n, Dt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ds(dn)[0],
          e = qt().memoizedState;
        return [typeof t == "boolean" ? t : Za(t), e];
      },
      useSyncExternalStore: Qh,
      useId: bd,
      useHostTransitionStatus: Xo,
      useFormState: id,
      useActionState: id,
      useOptimistic: function (t, e) {
        var n = qt();
        return Wh(n, Dt, t, e);
      },
      useMemoCache: jo,
      useCacheRefresh: Sd,
    };
  Zo.useEffectEvent = od;
  var Md = {
    readContext: ne,
    use: hs,
    useCallback: dd,
    useContext: ne,
    useEffect: Ho,
    useImperativeHandle: hd,
    useInsertionEffect: rd,
    useLayoutEffect: cd,
    useMemo: md,
    useReducer: _o,
    useRef: sd,
    useState: function () {
      return _o(dn);
    },
    useDebugValue: Yo,
    useDeferredValue: function (t, e) {
      var n = qt();
      return Dt === null ? qo(n, t, e) : pd(n, Dt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = _o(dn)[0],
        e = qt().memoizedState;
      return [typeof t == "boolean" ? t : Za(t), e];
    },
    useSyncExternalStore: Qh,
    useId: bd,
    useHostTransitionStatus: Xo,
    useFormState: ld,
    useActionState: ld,
    useOptimistic: function (t, e) {
      var n = qt();
      return Dt !== null
        ? Wh(n, Dt, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: jo,
    useCacheRefresh: Sd,
  };
  Md.useEffectEvent = od;
  function Ko(t, e, n, l) {
    (e = t.memoizedState),
      (n = n(l, e)),
      (n = n == null ? e : b({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var ko = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var l = ze(),
        o = wn(l);
      (o.payload = e),
        n != null && (o.callback = n),
        (e = Vn(t, o, l)),
        e !== null && (ge(e, t, l), qa(e, t, l));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var l = ze(),
        o = wn(l);
      (o.tag = 1),
        (o.payload = e),
        n != null && (o.callback = n),
        (e = Vn(t, o, l)),
        e !== null && (ge(e, t, l), qa(e, t, l));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = ze(),
        l = wn(n);
      (l.tag = 2),
        e != null && (l.callback = e),
        (e = Vn(t, l, n)),
        e !== null && (ge(e, t, n), qa(e, t, n));
    },
  };
  function Dd(t, e, n, l, o, r, d) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(l, r, d)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Na(n, l) || !Na(o, r)
        : !0
    );
  }
  function Cd(t, e, n, l) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, l),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, l),
      e.state !== t && ko.enqueueReplaceState(e, e.state, null);
  }
  function gi(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var l in e) l !== "ref" && (n[l] = e[l]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = b({}, n));
      for (var o in t) n[o] === void 0 && (n[o] = t[o]);
    }
    return n;
  }
  function zd(t) {
    Jl(t);
  }
  function Rd(t) {
    console.error(t);
  }
  function Od(t) {
    Jl(t);
  }
  function gs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function wd(t, e, n) {
    try {
      var l = t.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Jo(t, e, n) {
    return (
      (n = wn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        gs(t, e);
      }),
      n
    );
  }
  function Vd(t) {
    return (t = wn(t)), (t.tag = 3), t;
  }
  function Nd(t, e, n, l) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var r = l.value;
      (t.payload = function () {
        return o(r);
      }),
        (t.callback = function () {
          wd(e, n, l);
        });
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (t.callback = function () {
        wd(e, n, l),
          typeof o != "function" &&
            (Ln === null ? (Ln = new Set([this])) : Ln.add(this));
        var g = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function b1(t, e, n, l, o) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Xi(e, n, o, !0),
        (n = Ee.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Ue === null ? Rs() : n.alternate === null && _t === 0 && (_t = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = o),
              l === as
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([l])) : e.add(l),
                  br(t, l, o)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === as
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([l])) : n.add(l)),
                  br(t, l, o)),
              !1
            );
        }
        throw Error(s(435, n.tag));
      }
      return br(t, l, o), Rs(), !1;
    }
    if (gt)
      return (
        (e = Ee.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = o),
            l !== ho && ((t = Error(s(422), { cause: l })), _a(Ne(t, n))))
          : (l !== ho && ((e = Error(s(423), { cause: l })), _a(Ne(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (o &= -o),
            (t.lanes |= o),
            (l = Ne(l, n)),
            (o = Jo(t.stateNode, l, o)),
            Eo(t, o),
            _t !== 4 && (_t = 2)),
        !1
      );
    var r = Error(s(520), { cause: l });
    if (
      ((r = Ne(r, n)),
      el === null ? (el = [r]) : el.push(r),
      _t !== 4 && (_t = 2),
      e === null)
    )
      return !0;
    (l = Ne(l, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = o & -o),
            (n.lanes |= t),
            (t = Jo(n.stateNode, l, t)),
            Eo(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (r = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (Ln === null || !Ln.has(r)))))
          )
            return (
              (n.flags |= 65536),
              (o &= -o),
              (n.lanes |= o),
              (o = Vd(o)),
              Nd(o, t, n, l),
              Eo(n, o),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Fo = Error(s(461)),
    Zt = !1;
  function ie(t, e, n, l) {
    e.child = t === null ? Uh(e, null, n, l) : pi(e, t.child, n, l);
  }
  function jd(t, e, n, l, o) {
    n = n.render;
    var r = e.ref;
    if ("ref" in l) {
      var d = {};
      for (var g in l) g !== "ref" && (d[g] = l[g]);
    } else d = l;
    return (
      fi(e),
      (l = Oo(t, e, n, d, r, o)),
      (g = wo()),
      t !== null && !Zt
        ? (Vo(t, e, o), mn(t, e, o))
        : (gt && g && co(e), (e.flags |= 1), ie(t, e, l, o), e.child)
    );
  }
  function Bd(t, e, n, l, o) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" &&
        !uo(r) &&
        r.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = r), _d(t, e, r, l, o))
        : ((t = $l(n.type, null, l, e, e.mode, o)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((r = t.child), !ir(t, o))) {
      var d = r.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Na), n(d, l) && t.ref === e.ref)
      )
        return mn(t, e, o);
    }
    return (
      (e.flags |= 1),
      (t = on(r, l)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function _d(t, e, n, l, o) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (Na(r, l) && t.ref === e.ref)
        if (((Zt = !1), (e.pendingProps = l = r), ir(t, o)))
          (t.flags & 131072) !== 0 && (Zt = !0);
        else return (e.lanes = t.lanes), mn(t, e, o);
    }
    return Wo(t, e, n, l, o);
  }
  function Ud(t, e, n, l) {
    var o = l.children,
      r = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((r = r !== null ? r.baseLanes | n : n), t !== null)) {
          for (l = e.child = t.child, o = 0; l !== null; )
            (o = o | l.lanes | l.childLanes), (l = l.sibling);
          l = o & ~r;
        } else (l = 0), (e.child = null);
        return Ld(t, e, r, n, l);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ns(e, r !== null ? r.cachePool : null),
          r !== null ? Yh(e, r) : Do(),
          qh(e);
      else
        return (
          (l = e.lanes = 536870912),
          Ld(t, e, r !== null ? r.baseLanes | n : n, n, l)
        );
    } else
      r !== null
        ? (ns(e, r.cachePool), Yh(e, r), jn(), (e.memoizedState = null))
        : (t !== null && ns(e, null), Do(), jn());
    return ie(t, e, o, n), e.child;
  }
  function Ja(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Ld(t, e, n, l, o) {
    var r = So();
    return (
      (r = r === null ? null : { parent: Xt._currentValue, pool: r }),
      (e.memoizedState = { baseLanes: n, cachePool: r }),
      t !== null && ns(e, null),
      Do(),
      qh(e),
      t !== null && Xi(t, e, l, !0),
      (e.childLanes = o),
      null
    );
  }
  function vs(t, e) {
    return (
      (e = Ss({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Hd(t, e, n) {
    return (
      pi(e, t.child, null, n),
      (t = vs(e, e.pendingProps)),
      (t.flags |= 2),
      Me(e),
      (e.memoizedState = null),
      t
    );
  }
  function S1(t, e, n) {
    var l = e.pendingProps,
      o = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (gt) {
        if (l.mode === "hidden")
          return (t = vs(e, l)), (e.lanes = 536870912), Ja(null, t);
        if (
          (zo(e),
          (t = wt)
            ? ((t = Pm(t, _e)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Dn !== null ? { id: Pe, overflow: $e } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Th(t)),
                (n.return = e),
                (e.child = n),
                (ee = e),
                (wt = null)))
            : (t = null),
          t === null)
        )
          throw zn(e);
        return (e.lanes = 536870912), null;
      }
      return vs(e, l);
    }
    var r = t.memoizedState;
    if (r !== null) {
      var d = r.dehydrated;
      if ((zo(e), o))
        if (e.flags & 256) (e.flags &= -257), (e = Hd(t, e, n));
        else if (e.memoizedState !== null)
          (e.child = t.child), (e.flags |= 128), (e = null);
        else throw Error(s(558));
      else if (
        (Zt || Xi(t, e, n, !1), (o = (n & t.childLanes) !== 0), Zt || o)
      ) {
        if (
          ((l = Rt),
          l !== null && ((d = Rf(l, n)), d !== 0 && d !== r.retryLane))
        )
          throw ((r.retryLane = d), ui(t, d), ge(l, t, d), Fo);
        Rs(), (e = Hd(t, e, n));
      } else
        (t = r.treeContext),
          (wt = Le(d.nextSibling)),
          (ee = e),
          (gt = !0),
          (Cn = null),
          (_e = !1),
          t !== null && Mh(e, t),
          (e = vs(e, l)),
          (e.flags |= 4096);
      return e;
    }
    return (
      (t = on(t.child, { mode: l.mode, children: l.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function bs(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(s(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Wo(t, e, n, l, o) {
    return (
      fi(e),
      (n = Oo(t, e, n, l, void 0, o)),
      (l = wo()),
      t !== null && !Zt
        ? (Vo(t, e, o), mn(t, e, o))
        : (gt && l && co(e), (e.flags |= 1), ie(t, e, n, o), e.child)
    );
  }
  function Yd(t, e, n, l, o, r) {
    return (
      fi(e),
      (e.updateQueue = null),
      (n = Xh(e, l, n, o)),
      Gh(t),
      (l = wo()),
      t !== null && !Zt
        ? (Vo(t, e, r), mn(t, e, r))
        : (gt && l && co(e), (e.flags |= 1), ie(t, e, n, r), e.child)
    );
  }
  function qd(t, e, n, l, o) {
    if ((fi(e), e.stateNode === null)) {
      var r = Hi,
        d = n.contextType;
      typeof d == "object" && d !== null && (r = ne(d)),
        (r = new n(l, r)),
        (e.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = ko),
        (e.stateNode = r),
        (r._reactInternals = e),
        (r = e.stateNode),
        (r.props = l),
        (r.state = e.memoizedState),
        (r.refs = {}),
        To(e),
        (d = n.contextType),
        (r.context = typeof d == "object" && d !== null ? ne(d) : Hi),
        (r.state = e.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (Ko(e, n, d, l), (r.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((d = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          d !== r.state && ko.enqueueReplaceState(r, r.state, null),
          Xa(e, l, r, o),
          Ga(),
          (r.state = e.memoizedState)),
        typeof r.componentDidMount == "function" && (e.flags |= 4194308),
        (l = !0);
    } else if (t === null) {
      r = e.stateNode;
      var g = e.memoizedProps,
        x = gi(n, g);
      r.props = x;
      var C = r.context,
        N = n.contextType;
      (d = Hi), typeof N == "object" && N !== null && (d = ne(N));
      var B = n.getDerivedStateFromProps;
      (N =
        typeof B == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (g = e.pendingProps !== g),
        N ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((g || C !== d) && Cd(e, r, l, d)),
        (On = !1);
      var z = e.memoizedState;
      (r.state = z),
        Xa(e, l, r, o),
        Ga(),
        (C = e.memoizedState),
        g || z !== C || On
          ? (typeof B == "function" && (Ko(e, n, B, l), (C = e.memoizedState)),
            (x = On || Dd(e, n, x, l, z, C, d))
              ? (N ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" &&
                    r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = l),
                (e.memoizedState = C)),
            (r.props = l),
            (r.state = C),
            (r.context = d),
            (l = x))
          : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
            (l = !1));
    } else {
      (r = e.stateNode),
        Ao(t, e),
        (d = e.memoizedProps),
        (N = gi(n, d)),
        (r.props = N),
        (B = e.pendingProps),
        (z = r.context),
        (C = n.contextType),
        (x = Hi),
        typeof C == "object" && C !== null && (x = ne(C)),
        (g = n.getDerivedStateFromProps),
        (C =
          typeof g == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((d !== B || z !== x) && Cd(e, r, l, x)),
        (On = !1),
        (z = e.memoizedState),
        (r.state = z),
        Xa(e, l, r, o),
        Ga();
      var O = e.memoizedState;
      d !== B ||
      z !== O ||
      On ||
      (t !== null && t.dependencies !== null && ts(t.dependencies))
        ? (typeof g == "function" && (Ko(e, n, g, l), (O = e.memoizedState)),
          (N =
            On ||
            Dd(e, n, N, l, z, O, x) ||
            (t !== null && t.dependencies !== null && ts(t.dependencies)))
            ? (C ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(l, O, x),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(l, O, x)),
              typeof r.componentDidUpdate == "function" && (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (d === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (d === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = l),
              (e.memoizedState = O)),
          (r.props = l),
          (r.state = O),
          (r.context = x),
          (l = N))
        : (typeof r.componentDidUpdate != "function" ||
            (d === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (d === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 1024),
          (l = !1));
    }
    return (
      (r = l),
      bs(t, e),
      (l = (e.flags & 128) !== 0),
      r || l
        ? ((r = e.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (e.flags |= 1),
          t !== null && l
            ? ((e.child = pi(e, t.child, null, o)),
              (e.child = pi(e, null, n, o)))
            : ie(t, e, n, o),
          (e.memoizedState = r.state),
          (t = e.child))
        : (t = mn(t, e, o)),
      t
    );
  }
  function Gd(t, e, n, l) {
    return ri(), (e.flags |= 256), ie(t, e, n, l), e.child;
  }
  var Po = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function $o(t) {
    return { baseLanes: t, cachePool: wh() };
  }
  function Io(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ce), t;
  }
  function Xd(t, e, n) {
    var l = e.pendingProps,
      o = !1,
      r = (e.flags & 128) !== 0,
      d;
    if (
      ((d = r) ||
        (d =
          t !== null && t.memoizedState === null ? !1 : (Yt.current & 2) !== 0),
      d && ((o = !0), (e.flags &= -129)),
      (d = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (gt) {
        if (
          (o ? Nn(e) : jn(),
          (t = wt)
            ? ((t = Pm(t, _e)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Dn !== null ? { id: Pe, overflow: $e } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Th(t)),
                (n.return = e),
                (e.child = n),
                (ee = e),
                (wt = null)))
            : (t = null),
          t === null)
        )
          throw zn(e);
        return Br(t) ? (e.lanes = 32) : (e.lanes = 536870912), null;
      }
      var g = l.children;
      return (
        (l = l.fallback),
        o
          ? (jn(),
            (o = e.mode),
            (g = Ss({ mode: "hidden", children: g }, o)),
            (l = oi(l, o, n, null)),
            (g.return = e),
            (l.return = e),
            (g.sibling = l),
            (e.child = g),
            (l = e.child),
            (l.memoizedState = $o(n)),
            (l.childLanes = Io(t, d, n)),
            (e.memoizedState = Po),
            Ja(null, l))
          : (Nn(e), tr(e, g))
      );
    }
    var x = t.memoizedState;
    if (x !== null && ((g = x.dehydrated), g !== null)) {
      if (r)
        e.flags & 256
          ? (Nn(e), (e.flags &= -257), (e = er(t, e, n)))
          : e.memoizedState !== null
          ? (jn(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (jn(),
            (g = l.fallback),
            (o = e.mode),
            (l = Ss({ mode: "visible", children: l.children }, o)),
            (g = oi(g, o, n, null)),
            (g.flags |= 2),
            (l.return = e),
            (g.return = e),
            (l.sibling = g),
            (e.child = l),
            pi(e, t.child, null, n),
            (l = e.child),
            (l.memoizedState = $o(n)),
            (l.childLanes = Io(t, d, n)),
            (e.memoizedState = Po),
            (e = Ja(null, l)));
      else if ((Nn(e), Br(g))) {
        if (((d = g.nextSibling && g.nextSibling.dataset), d)) var C = d.dgst;
        (d = C),
          (l = Error(s(419))),
          (l.stack = ""),
          (l.digest = d),
          _a({ value: l, source: null, stack: null }),
          (e = er(t, e, n));
      } else if (
        (Zt || Xi(t, e, n, !1), (d = (n & t.childLanes) !== 0), Zt || d)
      ) {
        if (
          ((d = Rt),
          d !== null && ((l = Rf(d, n)), l !== 0 && l !== x.retryLane))
        )
          throw ((x.retryLane = l), ui(t, l), ge(d, t, l), Fo);
        jr(g) || Rs(), (e = er(t, e, n));
      } else
        jr(g)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = x.treeContext),
            (wt = Le(g.nextSibling)),
            (ee = e),
            (gt = !0),
            (Cn = null),
            (_e = !1),
            t !== null && Mh(e, t),
            (e = tr(e, l.children)),
            (e.flags |= 4096));
      return e;
    }
    return o
      ? (jn(),
        (g = l.fallback),
        (o = e.mode),
        (x = t.child),
        (C = x.sibling),
        (l = on(x, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = x.subtreeFlags & 65011712),
        C !== null ? (g = on(C, g)) : ((g = oi(g, o, n, null)), (g.flags |= 2)),
        (g.return = e),
        (l.return = e),
        (l.sibling = g),
        (e.child = l),
        Ja(null, l),
        (l = e.child),
        (g = t.child.memoizedState),
        g === null
          ? (g = $o(n))
          : ((o = g.cachePool),
            o !== null
              ? ((x = Xt._currentValue),
                (o = o.parent !== x ? { parent: x, pool: x } : o))
              : (o = wh()),
            (g = { baseLanes: g.baseLanes | n, cachePool: o })),
        (l.memoizedState = g),
        (l.childLanes = Io(t, d, n)),
        (e.memoizedState = Po),
        Ja(t.child, l))
      : (Nn(e),
        (n = t.child),
        (t = n.sibling),
        (n = on(n, { mode: "visible", children: l.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((d = e.deletions),
          d === null ? ((e.deletions = [t]), (e.flags |= 16)) : d.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function tr(t, e) {
    return (
      (e = Ss({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ss(t, e) {
    return (t = Ae(22, t, null, e)), (t.lanes = 0), t;
  }
  function er(t, e, n) {
    return (
      pi(e, t.child, null, n),
      (t = tr(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Qd(t, e, n) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), yo(t.return, e, n);
  }
  function nr(t, e, n, l, o, r) {
    var d = t.memoizedState;
    d === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: o,
          treeForkCount: r,
        })
      : ((d.isBackwards = e),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = l),
        (d.tail = n),
        (d.tailMode = o),
        (d.treeForkCount = r));
  }
  function Zd(t, e, n) {
    var l = e.pendingProps,
      o = l.revealOrder,
      r = l.tail;
    l = l.children;
    var d = Yt.current,
      g = (d & 2) !== 0;
    if (
      (g ? ((d = (d & 1) | 2), (e.flags |= 128)) : (d &= 1),
      Z(Yt, d),
      ie(t, e, l, n),
      (l = gt ? Ba : 0),
      !g && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Qd(t, n, e);
        else if (t.tag === 19) Qd(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    switch (o) {
      case "forwards":
        for (n = e.child, o = null; n !== null; )
          (t = n.alternate),
            t !== null && os(t) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = e.child), (e.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          nr(e, !1, o, n, r, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, o = e.child, e.child = null; o !== null; ) {
          if (((t = o.alternate), t !== null && os(t) === null)) {
            e.child = o;
            break;
          }
          (t = o.sibling), (o.sibling = n), (n = o), (o = t);
        }
        nr(e, !0, n, null, r, l);
        break;
      case "together":
        nr(e, !1, null, null, void 0, l);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function mn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Un |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Xi(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(s(153));
    if (e.child !== null) {
      for (
        t = e.child, n = on(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = on(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function ir(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && ts(t)));
  }
  function x1(t, e, n) {
    switch (e.tag) {
      case 3:
        ue(e, e.stateNode.containerInfo),
          Rn(e, Xt, t.memoizedState.cache),
          ri();
        break;
      case 27:
      case 5:
        Sa(e);
        break;
      case 4:
        ue(e, e.stateNode.containerInfo);
        break;
      case 10:
        Rn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return (e.flags |= 128), zo(e), null;
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Nn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? Xd(t, e, n)
            : (Nn(e), (t = mn(t, e, n)), t !== null ? t.sibling : null);
        Nn(e);
        break;
      case 19:
        var o = (t.flags & 128) !== 0;
        if (
          ((l = (n & e.childLanes) !== 0),
          l || (Xi(t, e, n, !1), (l = (n & e.childLanes) !== 0)),
          o)
        ) {
          if (l) return Zd(t, e, n);
          e.flags |= 128;
        }
        if (
          ((o = e.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          Z(Yt, Yt.current),
          l)
        )
          break;
        return null;
      case 22:
        return (e.lanes = 0), Ud(t, e, n, e.pendingProps);
      case 24:
        Rn(e, Xt, t.memoizedState.cache);
    }
    return mn(t, e, n);
  }
  function Kd(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Zt = !0;
      else {
        if (!ir(t, n) && (e.flags & 128) === 0) return (Zt = !1), x1(t, e, n);
        Zt = (t.flags & 131072) !== 0;
      }
    else (Zt = !1), gt && (e.flags & 1048576) !== 0 && Eh(e, Ba, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (((t = di(e.elementType)), (e.type = t), typeof t == "function"))
            uo(t)
              ? ((l = gi(t, l)), (e.tag = 1), (e = qd(null, e, t, l, n)))
              : ((e.tag = 0), (e = Wo(null, e, t, l, n)));
          else {
            if (t != null) {
              var o = t.$$typeof;
              if (o === X) {
                (e.tag = 11), (e = jd(null, e, t, l, n));
                break t;
              } else if (o === I) {
                (e.tag = 14), (e = Bd(null, e, t, l, n));
                break t;
              }
            }
            throw ((e = Gt(t) || t), Error(s(306, e, "")));
          }
        }
        return e;
      case 0:
        return Wo(t, e, e.type, e.pendingProps, n);
      case 1:
        return (l = e.type), (o = gi(l, e.pendingProps)), qd(t, e, l, o, n);
      case 3:
        t: {
          if ((ue(e, e.stateNode.containerInfo), t === null))
            throw Error(s(387));
          l = e.pendingProps;
          var r = e.memoizedState;
          (o = r.element), Ao(t, e), Xa(e, l, null, n);
          var d = e.memoizedState;
          if (
            ((l = d.cache),
            Rn(e, Xt, l),
            l !== r.cache && go(e, [Xt], n, !0),
            Ga(),
            (l = d.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: l, isDehydrated: !1, cache: d.cache }),
              (e.updateQueue.baseState = r),
              (e.memoizedState = r),
              e.flags & 256)
            ) {
              e = Gd(t, e, l, n);
              break t;
            } else if (l !== o) {
              (o = Ne(Error(s(424)), e)), _a(o), (e = Gd(t, e, l, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                wt = Le(t.firstChild),
                  ee = e,
                  gt = !0,
                  Cn = null,
                  _e = !0,
                  n = Uh(e, null, l, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((ri(), l === o)) {
              e = mn(t, e, n);
              break t;
            }
            ie(t, e, l, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          bs(t, e),
          t === null
            ? (n = ip(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : gt ||
                ((n = e.type),
                (t = e.pendingProps),
                (l = _s(ct.current).createElement(n)),
                (l[te] = e),
                (l[fe] = t),
                ae(l, n, t),
                Wt(l),
                (e.stateNode = l))
            : (e.memoizedState = ip(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Sa(e),
          t === null &&
            gt &&
            ((l = e.stateNode = tp(e.type, e.pendingProps, ct.current)),
            (ee = e),
            (_e = !0),
            (o = wt),
            Gn(e.type) ? ((_r = o), (wt = Le(l.firstChild))) : (wt = o)),
          ie(t, e, e.pendingProps.children, n),
          bs(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            gt &&
            ((o = l = wt) &&
              ((l = P1(l, e.type, e.pendingProps, _e)),
              l !== null
                ? ((e.stateNode = l),
                  (ee = e),
                  (wt = Le(l.firstChild)),
                  (_e = !1),
                  (o = !0))
                : (o = !1)),
            o || zn(e)),
          Sa(e),
          (o = e.type),
          (r = e.pendingProps),
          (d = t !== null ? t.memoizedProps : null),
          (l = r.children),
          wr(o, r) ? (l = null) : d !== null && wr(o, d) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((o = Oo(t, e, h1, null, null, n)), (rl._currentValue = o)),
          bs(t, e),
          ie(t, e, l, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            gt &&
            ((t = n = wt) &&
              ((n = $1(n, e.pendingProps, _e)),
              n !== null
                ? ((e.stateNode = n), (ee = e), (wt = null), (t = !0))
                : (t = !1)),
            t || zn(e)),
          null
        );
      case 13:
        return Xd(t, e, n);
      case 4:
        return (
          ue(e, e.stateNode.containerInfo),
          (l = e.pendingProps),
          t === null ? (e.child = pi(e, null, l, n)) : ie(t, e, l, n),
          e.child
        );
      case 11:
        return jd(t, e, e.type, e.pendingProps, n);
      case 7:
        return ie(t, e, e.pendingProps, n), e.child;
      case 8:
        return ie(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return ie(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (l = e.pendingProps),
          Rn(e, e.type, l.value),
          ie(t, e, l.children, n),
          e.child
        );
      case 9:
        return (
          (o = e.type._context),
          (l = e.pendingProps.children),
          fi(e),
          (o = ne(o)),
          (l = l(o)),
          (e.flags |= 1),
          ie(t, e, l, n),
          e.child
        );
      case 14:
        return Bd(t, e, e.type, e.pendingProps, n);
      case 15:
        return _d(t, e, e.type, e.pendingProps, n);
      case 19:
        return Zd(t, e, n);
      case 31:
        return S1(t, e, n);
      case 22:
        return Ud(t, e, n, e.pendingProps);
      case 24:
        return (
          fi(e),
          (l = ne(Xt)),
          t === null
            ? ((o = So()),
              o === null &&
                ((o = Rt),
                (r = vo()),
                (o.pooledCache = r),
                r.refCount++,
                r !== null && (o.pooledCacheLanes |= n),
                (o = r)),
              (e.memoizedState = { parent: l, cache: o }),
              To(e),
              Rn(e, Xt, o))
            : ((t.lanes & n) !== 0 && (Ao(t, e), Xa(e, null, null, n), Ga()),
              (o = t.memoizedState),
              (r = e.memoizedState),
              o.parent !== l
                ? ((o = { parent: l, cache: l }),
                  (e.memoizedState = o),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = o),
                  Rn(e, Xt, l))
                : ((l = r.cache),
                  Rn(e, Xt, l),
                  l !== o.cache && go(e, [Xt], n, !0))),
          ie(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  function pn(t) {
    t.flags |= 4;
  }
  function ar(t, e, n, l, o) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (o & 335544128) === o))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (bm()) t.flags |= 8192;
        else throw ((mi = as), xo);
    } else t.flags &= -16777217;
  }
  function kd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !op(e)))
      if (bm()) t.flags |= 8192;
      else throw ((mi = as), xo);
  }
  function xs(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Df() : 536870912), (t.lanes |= e), (ea |= e));
  }
  function Fa(t, e) {
    if (!gt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), (n = n.sibling);
          l === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Vt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      l = 0;
    if (e)
      for (var o = t.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (l |= o.subtreeFlags & 65011712),
          (l |= o.flags & 65011712),
          (o.return = t),
          (o = o.sibling);
    else
      for (o = t.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (l |= o.subtreeFlags),
          (l |= o.flags),
          (o.return = t),
          (o = o.sibling);
    return (t.subtreeFlags |= l), (t.childLanes = n), e;
  }
  function T1(t, e, n) {
    var l = e.pendingProps;
    switch ((fo(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Vt(e), null;
      case 1:
        return Vt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          fn(Xt),
          Ht(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Gi(e)
              ? pn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), mo())),
          Vt(e),
          null
        );
      case 26:
        var o = e.type,
          r = e.memoizedState;
        return (
          t === null
            ? (pn(e),
              r !== null ? (Vt(e), kd(e, r)) : (Vt(e), ar(e, o, null, l, n)))
            : r
            ? r !== t.memoizedState
              ? (pn(e), Vt(e), kd(e, r))
              : (Vt(e), (e.flags &= -16777217))
            : ((t = t.memoizedProps),
              t !== l && pn(e),
              Vt(e),
              ar(e, o, t, l, n)),
          null
        );
      case 27:
        if (
          (Vl(e),
          (n = ct.current),
          (o = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== l && pn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return Vt(e), null;
          }
          (t = W.current),
            Gi(e) ? Dh(e) : ((t = tp(o, l, n)), (e.stateNode = t), pn(e));
        }
        return Vt(e), null;
      case 5:
        if ((Vl(e), (o = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== l && pn(e);
        else {
          if (!l) {
            if (e.stateNode === null) throw Error(s(166));
            return Vt(e), null;
          }
          if (((r = W.current), Gi(e))) Dh(e);
          else {
            var d = _s(ct.current);
            switch (r) {
              case 1:
                r = d.createElementNS("http://www.w3.org/2000/svg", o);
                break;
              case 2:
                r = d.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                break;
              default:
                switch (o) {
                  case "svg":
                    r = d.createElementNS("http://www.w3.org/2000/svg", o);
                    break;
                  case "math":
                    r = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o
                    );
                    break;
                  case "script":
                    (r = d.createElement("div")),
                      (r.innerHTML = "<script></script>"),
                      (r = r.removeChild(r.firstChild));
                    break;
                  case "select":
                    (r =
                      typeof l.is == "string"
                        ? d.createElement("select", { is: l.is })
                        : d.createElement("select")),
                      l.multiple
                        ? (r.multiple = !0)
                        : l.size && (r.size = l.size);
                    break;
                  default:
                    r =
                      typeof l.is == "string"
                        ? d.createElement(o, { is: l.is })
                        : d.createElement(o);
                }
            }
            (r[te] = e), (r[fe] = l);
            t: for (d = e.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6) r.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                (d.child.return = d), (d = d.child);
                continue;
              }
              if (d === e) break t;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === e) break t;
                d = d.return;
              }
              (d.sibling.return = d.return), (d = d.sibling);
            }
            e.stateNode = r;
            t: switch ((ae(r, o, l), o)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && pn(e);
          }
        }
        return (
          Vt(e),
          ar(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== l && pn(e);
        else {
          if (typeof l != "string" && e.stateNode === null) throw Error(s(166));
          if (((t = ct.current), Gi(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (l = null),
              (o = ee),
              o !== null)
            )
              switch (o.tag) {
                case 27:
                case 5:
                  l = o.memoizedProps;
              }
            (t[te] = e),
              (t = !!(
                t.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Xm(t.nodeValue, n)
              )),
              t || zn(e, !0);
          } else (t = _s(t).createTextNode(l)), (t[te] = e), (e.stateNode = t);
        }
        return Vt(e), null;
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((l = Gi(e)), n !== null)) {
            if (t === null) {
              if (!l) throw Error(s(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(s(557));
              t[te] = e;
            } else
              ri(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Vt(e), (t = !1);
          } else
            (n = mo()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0);
          if (!t) return e.flags & 256 ? (Me(e), e) : (Me(e), null);
          if ((e.flags & 128) !== 0) throw Error(s(558));
        }
        return Vt(e), null;
      case 13:
        if (
          ((l = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((o = Gi(e)), l !== null && l.dehydrated !== null)) {
            if (t === null) {
              if (!o) throw Error(s(318));
              if (
                ((o = e.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(s(317));
              o[te] = e;
            } else
              ri(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Vt(e), (o = !1);
          } else
            (o = mo()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = o),
              (o = !0);
          if (!o) return e.flags & 256 ? (Me(e), e) : (Me(e), null);
        }
        return (
          Me(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = l !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((l = e.child),
                (o = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (o = l.alternate.memoizedState.cachePool.pool),
                (r = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (r = l.memoizedState.cachePool.pool),
                r !== o && (l.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              xs(e, e.updateQueue),
              Vt(e),
              null)
        );
      case 4:
        return Ht(), t === null && Dr(e.stateNode.containerInfo), Vt(e), null;
      case 10:
        return fn(e.type), Vt(e), null;
      case 19:
        if ((_(Yt), (l = e.memoizedState), l === null)) return Vt(e), null;
        if (((o = (e.flags & 128) !== 0), (r = l.rendering), r === null))
          if (o) Fa(l, !1);
          else {
            if (_t !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((r = os(t)), r !== null)) {
                  for (
                    e.flags |= 128,
                      Fa(l, !1),
                      t = r.updateQueue,
                      e.updateQueue = t,
                      xs(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    xh(n, t), (n = n.sibling);
                  return (
                    Z(Yt, (Yt.current & 1) | 2),
                    gt && rn(e, l.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            l.tail !== null &&
              be() > Ds &&
              ((e.flags |= 128), (o = !0), Fa(l, !1), (e.lanes = 4194304));
          }
        else {
          if (!o)
            if (((t = os(r)), t !== null)) {
              if (
                ((e.flags |= 128),
                (o = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                xs(e, t),
                Fa(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !r.alternate &&
                  !gt)
              )
                return Vt(e), null;
            } else
              2 * be() - l.renderingStartTime > Ds &&
                n !== 536870912 &&
                ((e.flags |= 128), (o = !0), Fa(l, !1), (e.lanes = 4194304));
          l.isBackwards
            ? ((r.sibling = e.child), (e.child = r))
            : ((t = l.last),
              t !== null ? (t.sibling = r) : (e.child = r),
              (l.last = r));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = be()),
            (t.sibling = null),
            (n = Yt.current),
            Z(Yt, o ? (n & 1) | 2 : n & 1),
            gt && rn(e, l.treeForkCount),
            t)
          : (Vt(e), null);
      case 22:
      case 23:
        return (
          Me(e),
          Co(),
          (l = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== l && (e.flags |= 8192)
            : l && (e.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Vt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Vt(e),
          (n = e.updateQueue),
          n !== null && xs(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (l = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          l !== n && (e.flags |= 2048),
          t !== null && _(hi),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          fn(Xt),
          Vt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function A1(t, e) {
    switch ((fo(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          fn(Xt),
          Ht(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Vl(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if ((Me(e), e.alternate === null)) throw Error(s(340));
          ri();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Me(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(s(340));
          ri();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return _(Yt), null;
      case 4:
        return Ht(), null;
      case 10:
        return fn(e.type), null;
      case 22:
      case 23:
        return (
          Me(e),
          Co(),
          t !== null && _(hi),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return fn(Xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Jd(t, e) {
    switch ((fo(e), e.tag)) {
      case 3:
        fn(Xt), Ht();
        break;
      case 26:
      case 27:
      case 5:
        Vl(e);
        break;
      case 4:
        Ht();
        break;
      case 31:
        e.memoizedState !== null && Me(e);
        break;
      case 13:
        Me(e);
        break;
      case 19:
        _(Yt);
        break;
      case 10:
        fn(e.type);
        break;
      case 22:
      case 23:
        Me(e), Co(), t !== null && _(hi);
        break;
      case 24:
        fn(Xt);
    }
  }
  function Wa(t, e) {
    try {
      var n = e.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var o = l.next;
        n = o;
        do {
          if ((n.tag & t) === t) {
            l = void 0;
            var r = n.create,
              d = n.inst;
            (l = r()), (d.destroy = l);
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (g) {
      Mt(e, e.return, g);
    }
  }
  function Bn(t, e, n) {
    try {
      var l = e.updateQueue,
        o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var r = o.next;
        l = r;
        do {
          if ((l.tag & t) === t) {
            var d = l.inst,
              g = d.destroy;
            if (g !== void 0) {
              (d.destroy = void 0), (o = e);
              var x = n,
                C = g;
              try {
                C();
              } catch (N) {
                Mt(o, x, N);
              }
            }
          }
          l = l.next;
        } while (l !== r);
      }
    } catch (N) {
      Mt(e, e.return, N);
    }
  }
  function Fd(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Hh(e, n);
      } catch (l) {
        Mt(t, t.return, l);
      }
    }
  }
  function Wd(t, e, n) {
    (n.props = gi(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (l) {
      Mt(t, e, l);
    }
  }
  function Pa(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(l)) : (n.current = l);
      }
    } catch (o) {
      Mt(t, e, o);
    }
  }
  function Ie(t, e) {
    var n = t.ref,
      l = t.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (o) {
          Mt(t, e, o);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          Mt(t, e, o);
        }
      else n.current = null;
  }
  function Pd(t) {
    var e = t.type,
      n = t.memoizedProps,
      l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break t;
        case "img":
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (o) {
      Mt(t, t.return, o);
    }
  }
  function lr(t, e, n) {
    try {
      var l = t.stateNode;
      Z1(l, t.type, n, e), (l[fe] = e);
    } catch (o) {
      Mt(t, t.return, o);
    }
  }
  function $d(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Gn(t.type)) ||
      t.tag === 4
    );
  }
  function sr(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || $d(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Gn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function ur(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = sn));
    else if (
      l !== 4 &&
      (l === 27 && Gn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (ur(t, e, n), t = t.sibling; t !== null; )
        ur(t, e, n), (t = t.sibling);
  }
  function Ts(t, e, n) {
    var l = t.tag;
    if (l === 5 || l === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      l !== 4 &&
      (l === 27 && Gn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (Ts(t, e, n), t = t.sibling; t !== null; )
        Ts(t, e, n), (t = t.sibling);
  }
  function Id(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var l = t.type, o = e.attributes; o.length; )
        e.removeAttributeNode(o[0]);
      ae(e, l, n), (e[te] = t), (e[fe] = n);
    } catch (r) {
      Mt(t, t.return, r);
    }
  }
  var yn = !1,
    Kt = !1,
    or = !1,
    tm = typeof WeakSet == "function" ? WeakSet : Set,
    Pt = null;
  function E1(t, e) {
    if (((t = t.containerInfo), (Rr = Xs), (t = hh(t)), to(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var o = l.anchorOffset,
              r = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, r.nodeType;
            } catch {
              n = null;
              break t;
            }
            var d = 0,
              g = -1,
              x = -1,
              C = 0,
              N = 0,
              B = t,
              z = null;
            e: for (;;) {
              for (
                var O;
                B !== n || (o !== 0 && B.nodeType !== 3) || (g = d + o),
                  B !== r || (l !== 0 && B.nodeType !== 3) || (x = d + l),
                  B.nodeType === 3 && (d += B.nodeValue.length),
                  (O = B.firstChild) !== null;

              )
                (z = B), (B = O);
              for (;;) {
                if (B === t) break e;
                if (
                  (z === n && ++C === o && (g = d),
                  z === r && ++N === l && (x = d),
                  (O = B.nextSibling) !== null)
                )
                  break;
                (B = z), (z = B.parentNode);
              }
              B = O;
            }
            n = g === -1 || x === -1 ? null : { start: g, end: x };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Or = { focusedElem: t, selectionRange: n }, Xs = !1, Pt = e;
      Pt !== null;

    )
      if (
        ((e = Pt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (Pt = t);
      else
        for (; Pt !== null; ) {
          switch (((e = Pt), (r = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (n = 0; n < t.length; n++)
                  (o = t[n]), (o.ref.impl = o.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && r !== null) {
                (t = void 0),
                  (n = e),
                  (o = r.memoizedProps),
                  (r = r.memoizedState),
                  (l = n.stateNode);
                try {
                  var J = gi(n.type, o);
                  (t = l.getSnapshotBeforeUpdate(J, r)),
                    (l.__reactInternalSnapshotBeforeUpdate = t);
                } catch (nt) {
                  Mt(n, n.return, nt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  Nr(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Nr(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Pt = t);
            break;
          }
          Pt = e.return;
        }
  }
  function em(t, e, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        vn(t, n), l & 4 && Wa(5, n);
        break;
      case 1:
        if ((vn(t, n), l & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (d) {
              Mt(n, n.return, d);
            }
          else {
            var o = gi(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(o, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Mt(n, n.return, d);
            }
          }
        l & 64 && Fd(n), l & 512 && Pa(n, n.return);
        break;
      case 3:
        if ((vn(t, n), l & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Hh(t, e);
          } catch (d) {
            Mt(n, n.return, d);
          }
        }
        break;
      case 27:
        e === null && l & 4 && Id(n);
      case 26:
      case 5:
        vn(t, n), e === null && l & 4 && Pd(n), l & 512 && Pa(n, n.return);
        break;
      case 12:
        vn(t, n);
        break;
      case 31:
        vn(t, n), l & 4 && am(t, n);
        break;
      case 13:
        vn(t, n),
          l & 4 && lm(t, n),
          l & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = N1.bind(null, n)), I1(t, n))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || yn), !l)) {
          (e = (e !== null && e.memoizedState !== null) || Kt), (o = yn);
          var r = Kt;
          (yn = l),
            (Kt = e) && !r ? bn(t, n, (n.subtreeFlags & 8772) !== 0) : vn(t, n),
            (yn = o),
            (Kt = r);
        }
        break;
      case 30:
        break;
      default:
        vn(t, n);
    }
  }
  function nm(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), nm(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Uu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var jt = null,
    de = !1;
  function gn(t, e, n) {
    for (n = n.child; n !== null; ) im(t, e, n), (n = n.sibling);
  }
  function im(t, e, n) {
    if (Se && typeof Se.onCommitFiberUnmount == "function")
      try {
        Se.onCommitFiberUnmount(xa, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Kt || Ie(n, e),
          gn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Kt || Ie(n, e);
        var l = jt,
          o = de;
        Gn(n.type) && ((jt = n.stateNode), (de = !1)),
          gn(t, e, n),
          sl(n.stateNode),
          (jt = l),
          (de = o);
        break;
      case 5:
        Kt || Ie(n, e);
      case 6:
        if (
          ((l = jt),
          (o = de),
          (jt = null),
          gn(t, e, n),
          (jt = l),
          (de = o),
          jt !== null)
        )
          if (de)
            try {
              (jt.nodeType === 9
                ? jt.body
                : jt.nodeName === "HTML"
                ? jt.ownerDocument.body
                : jt
              ).removeChild(n.stateNode);
            } catch (r) {
              Mt(n, e, r);
            }
          else
            try {
              jt.removeChild(n.stateNode);
            } catch (r) {
              Mt(n, e, r);
            }
        break;
      case 18:
        jt !== null &&
          (de
            ? ((t = jt),
              Fm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                n.stateNode
              ),
              ra(t))
            : Fm(jt, n.stateNode));
        break;
      case 4:
        (l = jt),
          (o = de),
          (jt = n.stateNode.containerInfo),
          (de = !0),
          gn(t, e, n),
          (jt = l),
          (de = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Bn(2, n, e), Kt || Bn(4, n, e), gn(t, e, n);
        break;
      case 1:
        Kt ||
          (Ie(n, e),
          (l = n.stateNode),
          typeof l.componentWillUnmount == "function" && Wd(n, e, l)),
          gn(t, e, n);
        break;
      case 21:
        gn(t, e, n);
        break;
      case 22:
        (Kt = (l = Kt) || n.memoizedState !== null), gn(t, e, n), (Kt = l);
        break;
      default:
        gn(t, e, n);
    }
  }
  function am(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        ra(t);
      } catch (n) {
        Mt(e, e.return, n);
      }
    }
  }
  function lm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ra(t);
      } catch (n) {
        Mt(e, e.return, n);
      }
  }
  function M1(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new tm()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new tm()),
          e
        );
      default:
        throw Error(s(435, t.tag));
    }
  }
  function As(t, e) {
    var n = M1(t);
    e.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var o = j1.bind(null, t, l);
        l.then(o, o);
      }
    });
  }
  function me(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var o = n[l],
          r = t,
          d = e,
          g = d;
        t: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Gn(g.type)) {
                (jt = g.stateNode), (de = !1);
                break t;
              }
              break;
            case 5:
              (jt = g.stateNode), (de = !1);
              break t;
            case 3:
            case 4:
              (jt = g.stateNode.containerInfo), (de = !0);
              break t;
          }
          g = g.return;
        }
        if (jt === null) throw Error(s(160));
        im(r, d, o),
          (jt = null),
          (de = !1),
          (r = o.alternate),
          r !== null && (r.return = null),
          (o.return = null);
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) sm(e, t), (e = e.sibling);
  }
  var Xe = null;
  function sm(t, e) {
    var n = t.alternate,
      l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        me(e, t),
          pe(t),
          l & 4 && (Bn(3, t, t.return), Wa(3, t), Bn(5, t, t.return));
        break;
      case 1:
        me(e, t),
          pe(t),
          l & 512 && (Kt || n === null || Ie(n, n.return)),
          l & 64 &&
            yn &&
            ((t = t.updateQueue),
            t !== null &&
              ((l = t.callbacks),
              l !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? l : n.concat(l)))));
        break;
      case 26:
        var o = Xe;
        if (
          (me(e, t),
          pe(t),
          l & 512 && (Kt || n === null || Ie(n, n.return)),
          l & 4)
        ) {
          var r = n !== null ? n.memoizedState : null;
          if (((l = t.memoizedState), n === null))
            if (l === null)
              if (t.stateNode === null) {
                t: {
                  (l = t.type),
                    (n = t.memoizedProps),
                    (o = o.ownerDocument || o);
                  e: switch (l) {
                    case "title":
                      (r = o.getElementsByTagName("title")[0]),
                        (!r ||
                          r[Ea] ||
                          r[te] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = o.createElement(l)),
                          o.head.insertBefore(
                            r,
                            o.querySelector("head > title")
                          )),
                        ae(r, l, n),
                        (r[te] = t),
                        Wt(r),
                        (l = r);
                      break t;
                    case "link":
                      var d = sp("link", "href", o).get(l + (n.href || ""));
                      if (d) {
                        for (var g = 0; g < d.length; g++)
                          if (
                            ((r = d[g]),
                            r.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              r.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              r.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              r.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(g, 1);
                            break e;
                          }
                      }
                      (r = o.createElement(l)),
                        ae(r, l, n),
                        o.head.appendChild(r);
                      break;
                    case "meta":
                      if (
                        (d = sp("meta", "content", o).get(
                          l + (n.content || "")
                        ))
                      ) {
                        for (g = 0; g < d.length; g++)
                          if (
                            ((r = d[g]),
                            r.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              r.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              r.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              r.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              r.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(g, 1);
                            break e;
                          }
                      }
                      (r = o.createElement(l)),
                        ae(r, l, n),
                        o.head.appendChild(r);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  (r[te] = t), Wt(r), (l = r);
                }
                t.stateNode = l;
              } else up(o, t.type, t.stateNode);
            else t.stateNode = lp(o, l, t.memoizedProps);
          else
            r !== l
              ? (r === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : r.count--,
                l === null
                  ? up(o, t.type, t.stateNode)
                  : lp(o, l, t.memoizedProps))
              : l === null &&
                t.stateNode !== null &&
                lr(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        me(e, t),
          pe(t),
          l & 512 && (Kt || n === null || Ie(n, n.return)),
          n !== null && l & 4 && lr(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (me(e, t),
          pe(t),
          l & 512 && (Kt || n === null || Ie(n, n.return)),
          t.flags & 32)
        ) {
          o = t.stateNode;
          try {
            Vi(o, "");
          } catch (J) {
            Mt(t, t.return, J);
          }
        }
        l & 4 &&
          t.stateNode != null &&
          ((o = t.memoizedProps), lr(t, o, n !== null ? n.memoizedProps : o)),
          l & 1024 && (or = !0);
        break;
      case 6:
        if ((me(e, t), pe(t), l & 4)) {
          if (t.stateNode === null) throw Error(s(162));
          (l = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = l;
          } catch (J) {
            Mt(t, t.return, J);
          }
        }
        break;
      case 3:
        if (
          ((Hs = null),
          (o = Xe),
          (Xe = Us(e.containerInfo)),
          me(e, t),
          (Xe = o),
          pe(t),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ra(e.containerInfo);
          } catch (J) {
            Mt(t, t.return, J);
          }
        or && ((or = !1), um(t));
        break;
      case 4:
        (l = Xe),
          (Xe = Us(t.stateNode.containerInfo)),
          me(e, t),
          pe(t),
          (Xe = l);
        break;
      case 12:
        me(e, t), pe(t);
        break;
      case 31:
        me(e, t),
          pe(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), As(t, l)));
        break;
      case 13:
        me(e, t),
          pe(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Ms = be()),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), As(t, l)));
        break;
      case 22:
        o = t.memoizedState !== null;
        var x = n !== null && n.memoizedState !== null,
          C = yn,
          N = Kt;
        if (
          ((yn = C || o),
          (Kt = N || x),
          me(e, t),
          (Kt = N),
          (yn = C),
          pe(t),
          l & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = o ? e._visibility & -2 : e._visibility | 1,
              o && (n === null || x || yn || Kt || vi(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                x = n = e;
                try {
                  if (((r = x.stateNode), o))
                    (d = r.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none");
                  else {
                    g = x.stateNode;
                    var B = x.memoizedProps.style,
                      z =
                        B != null && B.hasOwnProperty("display")
                          ? B.display
                          : null;
                    g.style.display =
                      z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (J) {
                  Mt(x, x.return, J);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                x = e;
                try {
                  x.stateNode.nodeValue = o ? "" : x.memoizedProps;
                } catch (J) {
                  Mt(x, x.return, J);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                x = e;
                try {
                  var O = x.stateNode;
                  o ? Wm(O, !0) : Wm(x.stateNode, !1);
                } catch (J) {
                  Mt(x, x.return, J);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        l & 4 &&
          ((l = t.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), As(t, n))));
        break;
      case 19:
        me(e, t),
          pe(t),
          l & 4 &&
            ((l = t.updateQueue),
            l !== null && ((t.updateQueue = null), As(t, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        me(e, t), pe(t);
    }
  }
  function pe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, l = t.return; l !== null; ) {
          if ($d(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode,
              r = sr(t);
            Ts(t, r, o);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (Vi(d, ""), (n.flags &= -33));
            var g = sr(t);
            Ts(t, g, d);
            break;
          case 3:
          case 4:
            var x = n.stateNode.containerInfo,
              C = sr(t);
            ur(t, C, x);
            break;
          default:
            throw Error(s(161));
        }
      } catch (N) {
        Mt(t, t.return, N);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function um(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        um(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function vn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) em(t, e.alternate, e), (e = e.sibling);
  }
  function vi(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Bn(4, e, e.return), vi(e);
          break;
        case 1:
          Ie(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Wd(e, e.return, n),
            vi(e);
          break;
        case 27:
          sl(e.stateNode);
        case 26:
        case 5:
          Ie(e, e.return), vi(e);
          break;
        case 22:
          e.memoizedState === null && vi(e);
          break;
        case 30:
          vi(e);
          break;
        default:
          vi(e);
      }
      t = t.sibling;
    }
  }
  function bn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var l = e.alternate,
        o = t,
        r = e,
        d = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          bn(o, r, n), Wa(4, r);
          break;
        case 1:
          if (
            (bn(o, r, n),
            (l = r),
            (o = l.stateNode),
            typeof o.componentDidMount == "function")
          )
            try {
              o.componentDidMount();
            } catch (C) {
              Mt(l, l.return, C);
            }
          if (((l = r), (o = l.updateQueue), o !== null)) {
            var g = l.stateNode;
            try {
              var x = o.shared.hiddenCallbacks;
              if (x !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < x.length; o++)
                  Lh(x[o], g);
            } catch (C) {
              Mt(l, l.return, C);
            }
          }
          n && d & 64 && Fd(r), Pa(r, r.return);
          break;
        case 27:
          Id(r);
        case 26:
        case 5:
          bn(o, r, n), n && l === null && d & 4 && Pd(r), Pa(r, r.return);
          break;
        case 12:
          bn(o, r, n);
          break;
        case 31:
          bn(o, r, n), n && d & 4 && am(o, r);
          break;
        case 13:
          bn(o, r, n), n && d & 4 && lm(o, r);
          break;
        case 22:
          r.memoizedState === null && bn(o, r, n), Pa(r, r.return);
          break;
        case 30:
          break;
        default:
          bn(o, r, n);
      }
      e = e.sibling;
    }
  }
  function rr(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Ua(n));
  }
  function cr(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Ua(t));
  }
  function Qe(t, e, n, l) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) om(t, e, n, l), (e = e.sibling);
  }
  function om(t, e, n, l) {
    var o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Qe(t, e, n, l), o & 2048 && Wa(9, e);
        break;
      case 1:
        Qe(t, e, n, l);
        break;
      case 3:
        Qe(t, e, n, l),
          o & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Ua(t)));
        break;
      case 12:
        if (o & 2048) {
          Qe(t, e, n, l), (t = e.stateNode);
          try {
            var r = e.memoizedProps,
              d = r.id,
              g = r.onPostCommit;
            typeof g == "function" &&
              g(
                d,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (x) {
            Mt(e, e.return, x);
          }
        } else Qe(t, e, n, l);
        break;
      case 31:
        Qe(t, e, n, l);
        break;
      case 13:
        Qe(t, e, n, l);
        break;
      case 23:
        break;
      case 22:
        (r = e.stateNode),
          (d = e.alternate),
          e.memoizedState !== null
            ? r._visibility & 2
              ? Qe(t, e, n, l)
              : $a(t, e)
            : r._visibility & 2
            ? Qe(t, e, n, l)
            : ((r._visibility |= 2),
              $i(t, e, n, l, (e.subtreeFlags & 10256) !== 0 || !1)),
          o & 2048 && rr(d, e);
        break;
      case 24:
        Qe(t, e, n, l), o & 2048 && cr(e.alternate, e);
        break;
      default:
        Qe(t, e, n, l);
    }
  }
  function $i(t, e, n, l, o) {
    for (
      o = o && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;

    ) {
      var r = t,
        d = e,
        g = n,
        x = l,
        C = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          $i(r, d, g, x, o), Wa(8, d);
          break;
        case 23:
          break;
        case 22:
          var N = d.stateNode;
          d.memoizedState !== null
            ? N._visibility & 2
              ? $i(r, d, g, x, o)
              : $a(r, d)
            : ((N._visibility |= 2), $i(r, d, g, x, o)),
            o && C & 2048 && rr(d.alternate, d);
          break;
        case 24:
          $i(r, d, g, x, o), o && C & 2048 && cr(d.alternate, d);
          break;
        default:
          $i(r, d, g, x, o);
      }
      e = e.sibling;
    }
  }
  function $a(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          l = e,
          o = l.flags;
        switch (l.tag) {
          case 22:
            $a(n, l), o & 2048 && rr(l.alternate, l);
            break;
          case 24:
            $a(n, l), o & 2048 && cr(l.alternate, l);
            break;
          default:
            $a(n, l);
        }
        e = e.sibling;
      }
  }
  var Ia = 8192;
  function Ii(t, e, n) {
    if (t.subtreeFlags & Ia)
      for (t = t.child; t !== null; ) rm(t, e, n), (t = t.sibling);
  }
  function rm(t, e, n) {
    switch (t.tag) {
      case 26:
        Ii(t, e, n),
          t.flags & Ia &&
            t.memoizedState !== null &&
            fb(n, Xe, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Ii(t, e, n);
        break;
      case 3:
      case 4:
        var l = Xe;
        (Xe = Us(t.stateNode.containerInfo)), Ii(t, e, n), (Xe = l);
        break;
      case 22:
        t.memoizedState === null &&
          ((l = t.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = Ia), (Ia = 16777216), Ii(t, e, n), (Ia = l))
            : Ii(t, e, n));
        break;
      default:
        Ii(t, e, n);
    }
  }
  function cm(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function tl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          (Pt = l), hm(l, t);
        }
      cm(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) fm(t), (t = t.sibling);
  }
  function fm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        tl(t), t.flags & 2048 && Bn(9, t, t.return);
        break;
      case 3:
        tl(t);
        break;
      case 12:
        tl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Es(t))
          : tl(t);
        break;
      default:
        tl(t);
    }
  }
  function Es(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var l = e[n];
          (Pt = l), hm(l, t);
        }
      cm(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          Bn(8, e, e.return), Es(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Es(e));
          break;
        default:
          Es(e);
      }
      t = t.sibling;
    }
  }
  function hm(t, e) {
    for (; Pt !== null; ) {
      var n = Pt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Bn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ua(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) (l.return = n), (Pt = l);
      else
        t: for (n = t; Pt !== null; ) {
          l = Pt;
          var o = l.sibling,
            r = l.return;
          if ((nm(l), l === n)) {
            Pt = null;
            break t;
          }
          if (o !== null) {
            (o.return = r), (Pt = o);
            break t;
          }
          Pt = r;
        }
    }
  }
  var D1 = {
      getCacheForType: function (t) {
        var e = ne(Xt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
      cacheSignal: function () {
        return ne(Xt).controller.signal;
      },
    },
    C1 = typeof WeakMap == "function" ? WeakMap : Map,
    Tt = 0,
    Rt = null,
    ft = null,
    dt = 0,
    Et = 0,
    De = null,
    _n = !1,
    ta = !1,
    fr = !1,
    Sn = 0,
    _t = 0,
    Un = 0,
    bi = 0,
    hr = 0,
    Ce = 0,
    ea = 0,
    el = null,
    ye = null,
    dr = !1,
    Ms = 0,
    dm = 0,
    Ds = 1 / 0,
    Cs = null,
    Ln = null,
    Jt = 0,
    Hn = null,
    na = null,
    xn = 0,
    mr = 0,
    pr = null,
    mm = null,
    nl = 0,
    yr = null;
  function ze() {
    return (Tt & 2) !== 0 && dt !== 0 ? dt & -dt : V.T !== null ? Tr() : Of();
  }
  function pm() {
    if (Ce === 0)
      if ((dt & 536870912) === 0 || gt) {
        var t = Bl;
        (Bl <<= 1), (Bl & 3932160) === 0 && (Bl = 262144), (Ce = t);
      } else Ce = 536870912;
    return (t = Ee.current), t !== null && (t.flags |= 32), Ce;
  }
  function ge(t, e, n) {
    ((t === Rt && (Et === 2 || Et === 9)) || t.cancelPendingCommit !== null) &&
      (ia(t, 0), Yn(t, dt, Ce, !1)),
      Aa(t, n),
      ((Tt & 2) === 0 || t !== Rt) &&
        (t === Rt &&
          ((Tt & 2) === 0 && (bi |= n), _t === 4 && Yn(t, dt, Ce, !1)),
        tn(t));
  }
  function ym(t, e, n) {
    if ((Tt & 6) !== 0) throw Error(s(327));
    var l = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Ta(t, e),
      o = l ? O1(t, e) : vr(t, e, !0),
      r = l;
    do {
      if (o === 0) {
        ta && !l && Yn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), r && !z1(n))) {
          (o = vr(t, e, !1)), (r = !1);
          continue;
        }
        if (o === 2) {
          if (((r = e), t.errorRecoveryDisabledLanes & r)) var d = 0;
          else
            (d = t.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0);
          if (d !== 0) {
            e = d;
            t: {
              var g = t;
              o = el;
              var x = g.current.memoizedState.isDehydrated;
              if ((x && (ia(g, d).flags |= 256), (d = vr(g, d, !1)), d !== 2)) {
                if (fr && !x) {
                  (g.errorRecoveryDisabledLanes |= r), (bi |= r), (o = 4);
                  break t;
                }
                (r = ye),
                  (ye = o),
                  r !== null && (ye === null ? (ye = r) : ye.push.apply(ye, r));
              }
              o = d;
            }
            if (((r = !1), o !== 2)) continue;
          }
        }
        if (o === 1) {
          ia(t, 0), Yn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((l = t), (r = o), r)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Yn(l, e, Ce, !_n);
              break t;
            case 2:
              ye = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((e & 62914560) === e && ((o = Ms + 300 - be()), 10 < o)) {
            if ((Yn(l, e, Ce, !_n), Ul(l, 0, !0) !== 0)) break t;
            (xn = e),
              (l.timeoutHandle = km(
                gm.bind(
                  null,
                  l,
                  n,
                  ye,
                  Cs,
                  dr,
                  e,
                  Ce,
                  bi,
                  ea,
                  _n,
                  r,
                  "Throttled",
                  -0,
                  0
                ),
                o
              ));
            break t;
          }
          gm(l, n, ye, Cs, dr, e, Ce, bi, ea, _n, r, null, -0, 0);
        }
      }
      break;
    } while (!0);
    tn(t);
  }
  function gm(t, e, n, l, o, r, d, g, x, C, N, B, z, O) {
    if (
      ((t.timeoutHandle = -1),
      (B = e.subtreeFlags),
      B & 8192 || (B & 16785408) === 16785408)
    ) {
      (B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: sn,
      }),
        rm(e, r, B);
      var J =
        (r & 62914560) === r ? Ms - be() : (r & 4194048) === r ? dm - be() : 0;
      if (((J = hb(B, J)), J !== null)) {
        (xn = r),
          (t.cancelPendingCommit = J(
            Mm.bind(null, t, e, r, n, l, o, d, g, x, N, B, null, z, O)
          )),
          Yn(t, r, d, !C);
        return;
      }
    }
    Mm(t, e, r, n, l, o, d, g, x);
  }
  function z1(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var o = n[l],
            r = o.getSnapshot;
          o = o.value;
          try {
            if (!Te(r(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Yn(t, e, n, l) {
    (e &= ~hr),
      (e &= ~bi),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      l && (t.warmLanes |= e),
      (l = t.expirationTimes);
    for (var o = e; 0 < o; ) {
      var r = 31 - xe(o),
        d = 1 << r;
      (l[r] = -1), (o &= ~d);
    }
    n !== 0 && Cf(t, n, e);
  }
  function zs() {
    return (Tt & 6) === 0 ? (il(0), !1) : !0;
  }
  function gr() {
    if (ft !== null) {
      if (Et === 0) var t = ft.return;
      else (t = ft), (cn = ci = null), No(t), (ki = null), (Ha = 0), (t = ft);
      for (; t !== null; ) Jd(t.alternate, t), (t = t.return);
      ft = null;
    }
  }
  function ia(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), J1(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (xn = 0),
      gr(),
      (Rt = t),
      (ft = n = on(t.current, null)),
      (dt = e),
      (Et = 0),
      (De = null),
      (_n = !1),
      (ta = Ta(t, e)),
      (fr = !1),
      (ea = Ce = hr = bi = Un = _t = 0),
      (ye = el = null),
      (dr = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var l = t.entangledLanes;
    if (l !== 0)
      for (t = t.entanglements, l &= e; 0 < l; ) {
        var o = 31 - xe(l),
          r = 1 << o;
        (e |= t[o]), (l &= ~r);
      }
    return (Sn = e), Fl(), n;
  }
  function vm(t, e) {
    (ut = null),
      (V.H = ka),
      e === Ki || e === is
        ? ((e = jh()), (Et = 3))
        : e === xo
        ? ((e = jh()), (Et = 4))
        : (Et =
            e === Fo
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (De = e),
      ft === null && ((_t = 1), gs(t, Ne(e, t.current)));
  }
  function bm() {
    var t = Ee.current;
    return t === null
      ? !0
      : (dt & 4194048) === dt
      ? Ue === null
      : (dt & 62914560) === dt || (dt & 536870912) !== 0
      ? t === Ue
      : !1;
  }
  function Sm() {
    var t = V.H;
    return (V.H = ka), t === null ? ka : t;
  }
  function xm() {
    var t = V.A;
    return (V.A = D1), t;
  }
  function Rs() {
    (_t = 4),
      _n || ((dt & 4194048) !== dt && Ee.current !== null) || (ta = !0),
      ((Un & 134217727) === 0 && (bi & 134217727) === 0) ||
        Rt === null ||
        Yn(Rt, dt, Ce, !1);
  }
  function vr(t, e, n) {
    var l = Tt;
    Tt |= 2;
    var o = Sm(),
      r = xm();
    (Rt !== t || dt !== e) && ((Cs = null), ia(t, e)), (e = !1);
    var d = _t;
    t: do
      try {
        if (Et !== 0 && ft !== null) {
          var g = ft,
            x = De;
          switch (Et) {
            case 8:
              gr(), (d = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ee.current === null && (e = !0);
              var C = Et;
              if (((Et = 0), (De = null), aa(t, g, x, C), n && ta)) {
                d = 0;
                break t;
              }
              break;
            default:
              (C = Et), (Et = 0), (De = null), aa(t, g, x, C);
          }
        }
        R1(), (d = _t);
        break;
      } catch (N) {
        vm(t, N);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (cn = ci = null),
      (Tt = l),
      (V.H = o),
      (V.A = r),
      ft === null && ((Rt = null), (dt = 0), Fl()),
      d
    );
  }
  function R1() {
    for (; ft !== null; ) Tm(ft);
  }
  function O1(t, e) {
    var n = Tt;
    Tt |= 2;
    var l = Sm(),
      o = xm();
    Rt !== t || dt !== e
      ? ((Cs = null), (Ds = be() + 500), ia(t, e))
      : (ta = Ta(t, e));
    t: do
      try {
        if (Et !== 0 && ft !== null) {
          e = ft;
          var r = De;
          e: switch (Et) {
            case 1:
              (Et = 0), (De = null), aa(t, e, r, 1);
              break;
            case 2:
            case 9:
              if (Vh(r)) {
                (Et = 0), (De = null), Am(e);
                break;
              }
              (e = function () {
                (Et !== 2 && Et !== 9) || Rt !== t || (Et = 7), tn(t);
              }),
                r.then(e, e);
              break t;
            case 3:
              Et = 7;
              break t;
            case 4:
              Et = 5;
              break t;
            case 7:
              Vh(r)
                ? ((Et = 0), (De = null), Am(e))
                : ((Et = 0), (De = null), aa(t, e, r, 7));
              break;
            case 5:
              var d = null;
              switch (ft.tag) {
                case 26:
                  d = ft.memoizedState;
                case 5:
                case 27:
                  var g = ft;
                  if (d ? op(d) : g.stateNode.complete) {
                    (Et = 0), (De = null);
                    var x = g.sibling;
                    if (x !== null) ft = x;
                    else {
                      var C = g.return;
                      C !== null ? ((ft = C), Os(C)) : (ft = null);
                    }
                    break e;
                  }
              }
              (Et = 0), (De = null), aa(t, e, r, 5);
              break;
            case 6:
              (Et = 0), (De = null), aa(t, e, r, 6);
              break;
            case 8:
              gr(), (_t = 6);
              break t;
            default:
              throw Error(s(462));
          }
        }
        w1();
        break;
      } catch (N) {
        vm(t, N);
      }
    while (!0);
    return (
      (cn = ci = null),
      (V.H = l),
      (V.A = o),
      (Tt = n),
      ft !== null ? 0 : ((Rt = null), (dt = 0), Fl(), _t)
    );
  }
  function w1() {
    for (; ft !== null && !tv(); ) Tm(ft);
  }
  function Tm(t) {
    var e = Kd(t.alternate, t, Sn);
    (t.memoizedProps = t.pendingProps), e === null ? Os(t) : (ft = e);
  }
  function Am(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Yd(n, e, e.pendingProps, e.type, void 0, dt);
        break;
      case 11:
        e = Yd(n, e, e.pendingProps, e.type.render, e.ref, dt);
        break;
      case 5:
        No(e);
      default:
        Jd(n, e), (e = ft = xh(e, Sn)), (e = Kd(n, e, Sn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Os(t) : (ft = e);
  }
  function aa(t, e, n, l) {
    (cn = ci = null), No(e), (ki = null), (Ha = 0);
    var o = e.return;
    try {
      if (b1(t, o, e, n, dt)) {
        (_t = 1), gs(t, Ne(n, t.current)), (ft = null);
        return;
      }
    } catch (r) {
      if (o !== null) throw ((ft = o), r);
      (_t = 1), gs(t, Ne(n, t.current)), (ft = null);
      return;
    }
    e.flags & 32768
      ? (gt || l === 1
          ? (t = !0)
          : ta || (dt & 536870912) !== 0
          ? (t = !1)
          : ((_n = t = !0),
            (l === 2 || l === 9 || l === 3 || l === 6) &&
              ((l = Ee.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        Em(e, t))
      : Os(e);
  }
  function Os(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Em(e, _n);
        return;
      }
      t = e.return;
      var n = T1(e.alternate, e, Sn);
      if (n !== null) {
        ft = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ft = e;
        return;
      }
      ft = e = t;
    } while (e !== null);
    _t === 0 && (_t = 5);
  }
  function Em(t, e) {
    do {
      var n = A1(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (ft = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ft = t;
        return;
      }
      ft = t = n;
    } while (t !== null);
    (_t = 6), (ft = null);
  }
  function Mm(t, e, n, l, o, r, d, g, x) {
    t.cancelPendingCommit = null;
    do ws();
    while (Jt !== 0);
    if ((Tt & 6) !== 0) throw Error(s(327));
    if (e !== null) {
      if (e === t.current) throw Error(s(177));
      if (
        ((r = e.lanes | e.childLanes),
        (r |= lo),
        cv(t, n, r, d, g, x),
        t === Rt && ((ft = Rt = null), (dt = 0)),
        (na = e),
        (Hn = t),
        (xn = n),
        (mr = r),
        (pr = o),
        (mm = l),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            B1(Nl, function () {
              return Om(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (l = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || l)
      ) {
        (l = V.T), (V.T = null), (o = Q.p), (Q.p = 2), (d = Tt), (Tt |= 4);
        try {
          E1(t, e, n);
        } finally {
          (Tt = d), (Q.p = o), (V.T = l);
        }
      }
      (Jt = 1), Dm(), Cm(), zm();
    }
  }
  function Dm() {
    if (Jt === 1) {
      Jt = 0;
      var t = Hn,
        e = na,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = V.T), (V.T = null);
        var l = Q.p;
        Q.p = 2;
        var o = Tt;
        Tt |= 4;
        try {
          sm(e, t);
          var r = Or,
            d = hh(t.containerInfo),
            g = r.focusedElem,
            x = r.selectionRange;
          if (
            d !== g &&
            g &&
            g.ownerDocument &&
            fh(g.ownerDocument.documentElement, g)
          ) {
            if (x !== null && to(g)) {
              var C = x.start,
                N = x.end;
              if ((N === void 0 && (N = C), "selectionStart" in g))
                (g.selectionStart = C),
                  (g.selectionEnd = Math.min(N, g.value.length));
              else {
                var B = g.ownerDocument || document,
                  z = (B && B.defaultView) || window;
                if (z.getSelection) {
                  var O = z.getSelection(),
                    J = g.textContent.length,
                    nt = Math.min(x.start, J),
                    zt = x.end === void 0 ? nt : Math.min(x.end, J);
                  !O.extend && nt > zt && ((d = zt), (zt = nt), (nt = d));
                  var E = ch(g, nt),
                    T = ch(g, zt);
                  if (
                    E &&
                    T &&
                    (O.rangeCount !== 1 ||
                      O.anchorNode !== E.node ||
                      O.anchorOffset !== E.offset ||
                      O.focusNode !== T.node ||
                      O.focusOffset !== T.offset)
                  ) {
                    var D = B.createRange();
                    D.setStart(E.node, E.offset),
                      O.removeAllRanges(),
                      nt > zt
                        ? (O.addRange(D), O.extend(T.node, T.offset))
                        : (D.setEnd(T.node, T.offset), O.addRange(D));
                  }
                }
              }
            }
            for (B = [], O = g; (O = O.parentNode); )
              O.nodeType === 1 &&
                B.push({ element: O, left: O.scrollLeft, top: O.scrollTop });
            for (
              typeof g.focus == "function" && g.focus(), g = 0;
              g < B.length;
              g++
            ) {
              var j = B[g];
              (j.element.scrollLeft = j.left), (j.element.scrollTop = j.top);
            }
          }
          (Xs = !!Rr), (Or = Rr = null);
        } finally {
          (Tt = o), (Q.p = l), (V.T = n);
        }
      }
      (t.current = e), (Jt = 2);
    }
  }
  function Cm() {
    if (Jt === 2) {
      Jt = 0;
      var t = Hn,
        e = na,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = V.T), (V.T = null);
        var l = Q.p;
        Q.p = 2;
        var o = Tt;
        Tt |= 4;
        try {
          em(t, e.alternate, e);
        } finally {
          (Tt = o), (Q.p = l), (V.T = n);
        }
      }
      Jt = 3;
    }
  }
  function zm() {
    if (Jt === 4 || Jt === 3) {
      (Jt = 0), ev();
      var t = Hn,
        e = na,
        n = xn,
        l = mm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Jt = 5)
        : ((Jt = 0), (na = Hn = null), Rm(t, t.pendingLanes));
      var o = t.pendingLanes;
      if (
        (o === 0 && (Ln = null),
        Bu(n),
        (e = e.stateNode),
        Se && typeof Se.onCommitFiberRoot == "function")
      )
        try {
          Se.onCommitFiberRoot(xa, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        (e = V.T), (o = Q.p), (Q.p = 2), (V.T = null);
        try {
          for (var r = t.onRecoverableError, d = 0; d < l.length; d++) {
            var g = l[d];
            r(g.value, { componentStack: g.stack });
          }
        } finally {
          (V.T = e), (Q.p = o);
        }
      }
      (xn & 3) !== 0 && ws(),
        tn(t),
        (o = t.pendingLanes),
        (n & 261930) !== 0 && (o & 42) !== 0
          ? t === yr
            ? nl++
            : ((nl = 0), (yr = t))
          : (nl = 0),
        il(0);
    }
  }
  function Rm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Ua(e)));
  }
  function ws() {
    return Dm(), Cm(), zm(), Om();
  }
  function Om() {
    if (Jt !== 5) return !1;
    var t = Hn,
      e = mr;
    mr = 0;
    var n = Bu(xn),
      l = V.T,
      o = Q.p;
    try {
      (Q.p = 32 > n ? 32 : n), (V.T = null), (n = pr), (pr = null);
      var r = Hn,
        d = xn;
      if (((Jt = 0), (na = Hn = null), (xn = 0), (Tt & 6) !== 0))
        throw Error(s(331));
      var g = Tt;
      if (
        ((Tt |= 4),
        fm(r.current),
        om(r, r.current, d, n),
        (Tt = g),
        il(0, !1),
        Se && typeof Se.onPostCommitFiberRoot == "function")
      )
        try {
          Se.onPostCommitFiberRoot(xa, r);
        } catch {}
      return !0;
    } finally {
      (Q.p = o), (V.T = l), Rm(t, e);
    }
  }
  function wm(t, e, n) {
    (e = Ne(n, e)),
      (e = Jo(t.stateNode, e, 2)),
      (t = Vn(t, e, 2)),
      t !== null && (Aa(t, 2), tn(t));
  }
  function Mt(t, e, n) {
    if (t.tag === 3) wm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          wm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Ln === null || !Ln.has(l)))
          ) {
            (t = Ne(n, t)),
              (n = Vd(2)),
              (l = Vn(e, n, 2)),
              l !== null && (Nd(n, l, e, t), Aa(l, 2), tn(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function br(t, e, n) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new C1();
      var o = new Set();
      l.set(e, o);
    } else (o = l.get(e)), o === void 0 && ((o = new Set()), l.set(e, o));
    o.has(n) ||
      ((fr = !0), o.add(n), (t = V1.bind(null, t, e, n)), e.then(t, t));
  }
  function V1(t, e, n) {
    var l = t.pingCache;
    l !== null && l.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Rt === t &&
        (dt & n) === n &&
        (_t === 4 || (_t === 3 && (dt & 62914560) === dt && 300 > be() - Ms)
          ? (Tt & 2) === 0 && ia(t, 0)
          : (hr |= n),
        ea === dt && (ea = 0)),
      tn(t);
  }
  function Vm(t, e) {
    e === 0 && (e = Df()), (t = ui(t, e)), t !== null && (Aa(t, e), tn(t));
  }
  function N1(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), Vm(t, n);
  }
  function j1(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode,
          o = t.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(e), Vm(t, n);
  }
  function B1(t, e) {
    return wu(t, e);
  }
  var Vs = null,
    la = null,
    Sr = !1,
    Ns = !1,
    xr = !1,
    qn = 0;
  function tn(t) {
    t !== la &&
      t.next === null &&
      (la === null ? (Vs = la = t) : (la = la.next = t)),
      (Ns = !0),
      Sr || ((Sr = !0), U1());
  }
  function il(t, e) {
    if (!xr && Ns) {
      xr = !0;
      do
        for (var n = !1, l = Vs; l !== null; ) {
          if (t !== 0) {
            var o = l.pendingLanes;
            if (o === 0) var r = 0;
            else {
              var d = l.suspendedLanes,
                g = l.pingedLanes;
              (r = (1 << (31 - xe(42 | t) + 1)) - 1),
                (r &= o & ~(d & ~g)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0);
            }
            r !== 0 && ((n = !0), _m(l, r));
          } else
            (r = dt),
              (r = Ul(
                l,
                l === Rt ? r : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (r & 3) === 0 || Ta(l, r) || ((n = !0), _m(l, r));
          l = l.next;
        }
      while (n);
      xr = !1;
    }
  }
  function _1() {
    Nm();
  }
  function Nm() {
    Ns = Sr = !1;
    var t = 0;
    qn !== 0 && k1() && (t = qn);
    for (var e = be(), n = null, l = Vs; l !== null; ) {
      var o = l.next,
        r = jm(l, e);
      r === 0
        ? ((l.next = null),
          n === null ? (Vs = o) : (n.next = o),
          o === null && (la = n))
        : ((n = l), (t !== 0 || (r & 3) !== 0) && (Ns = !0)),
        (l = o);
    }
    (Jt !== 0 && Jt !== 5) || il(t), qn !== 0 && (qn = 0);
  }
  function jm(t, e) {
    for (
      var n = t.suspendedLanes,
        l = t.pingedLanes,
        o = t.expirationTimes,
        r = t.pendingLanes & -62914561;
      0 < r;

    ) {
      var d = 31 - xe(r),
        g = 1 << d,
        x = o[d];
      x === -1
        ? ((g & n) === 0 || (g & l) !== 0) && (o[d] = rv(g, e))
        : x <= e && (t.expiredLanes |= g),
        (r &= ~g);
    }
    if (
      ((e = Rt),
      (n = dt),
      (n = Ul(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (l = t.callbackNode),
      n === 0 ||
        (t === e && (Et === 2 || Et === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Vu(l),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Ta(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((l !== null && Vu(l), Bu(n))) {
        case 2:
        case 8:
          n = Ef;
          break;
        case 32:
          n = Nl;
          break;
        case 268435456:
          n = Mf;
          break;
        default:
          n = Nl;
      }
      return (
        (l = Bm.bind(null, t)),
        (n = wu(n, l)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      l !== null && l !== null && Vu(l),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Bm(t, e) {
    if (Jt !== 0 && Jt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (ws() && t.callbackNode !== n) return null;
    var l = dt;
    return (
      (l = Ul(
        t,
        t === Rt ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (ym(t, l, e),
          jm(t, be()),
          t.callbackNode != null && t.callbackNode === n
            ? Bm.bind(null, t)
            : null)
    );
  }
  function _m(t, e) {
    if (ws()) return null;
    ym(t, e, !0);
  }
  function U1() {
    F1(function () {
      (Tt & 6) !== 0 ? wu(Af, _1) : Nm();
    });
  }
  function Tr() {
    if (qn === 0) {
      var t = Qi;
      t === 0 && ((t = jl), (jl <<= 1), (jl & 261888) === 0 && (jl = 256)),
        (qn = t);
    }
    return qn;
  }
  function Um(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : ql("" + t);
  }
  function Lm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function L1(t, e, n, l, o) {
    if (e === "submit" && n && n.stateNode === o) {
      var r = Um((o[fe] || null).action),
        d = l.submitter;
      d &&
        ((e = (e = d[fe] || null)
          ? Um(e.formAction)
          : d.getAttribute("formAction")),
        e !== null && ((r = e), (d = null)));
      var g = new Zl("action", "action", null, l, o);
      t.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (qn !== 0) {
                  var x = d ? Lm(o, d) : new FormData(o);
                  Go(
                    n,
                    { pending: !0, data: x, method: o.method, action: r },
                    null,
                    x
                  );
                }
              } else
                typeof r == "function" &&
                  (g.preventDefault(),
                  (x = d ? Lm(o, d) : new FormData(o)),
                  Go(
                    n,
                    { pending: !0, data: x, method: o.method, action: r },
                    r,
                    x
                  ));
            },
            currentTarget: o,
          },
        ],
      });
    }
  }
  for (var Ar = 0; Ar < ao.length; Ar++) {
    var Er = ao[Ar],
      H1 = Er.toLowerCase(),
      Y1 = Er[0].toUpperCase() + Er.slice(1);
    Ge(H1, "on" + Y1);
  }
  Ge(ph, "onAnimationEnd"),
    Ge(yh, "onAnimationIteration"),
    Ge(gh, "onAnimationStart"),
    Ge("dblclick", "onDoubleClick"),
    Ge("focusin", "onFocus"),
    Ge("focusout", "onBlur"),
    Ge(n1, "onTransitionRun"),
    Ge(i1, "onTransitionStart"),
    Ge(a1, "onTransitionCancel"),
    Ge(vh, "onTransitionEnd"),
    Oi("onMouseEnter", ["mouseout", "mouseover"]),
    Oi("onMouseLeave", ["mouseout", "mouseover"]),
    Oi("onPointerEnter", ["pointerout", "pointerover"]),
    Oi("onPointerLeave", ["pointerout", "pointerover"]),
    ii(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    ii(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    ii("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ii(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    ii(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    ii(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var al =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    q1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(al)
    );
  function Hm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var l = t[n],
        o = l.event;
      l = l.listeners;
      t: {
        var r = void 0;
        if (e)
          for (var d = l.length - 1; 0 <= d; d--) {
            var g = l[d],
              x = g.instance,
              C = g.currentTarget;
            if (((g = g.listener), x !== r && o.isPropagationStopped()))
              break t;
            (r = g), (o.currentTarget = C);
            try {
              r(o);
            } catch (N) {
              Jl(N);
            }
            (o.currentTarget = null), (r = x);
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((g = l[d]),
              (x = g.instance),
              (C = g.currentTarget),
              (g = g.listener),
              x !== r && o.isPropagationStopped())
            )
              break t;
            (r = g), (o.currentTarget = C);
            try {
              r(o);
            } catch (N) {
              Jl(N);
            }
            (o.currentTarget = null), (r = x);
          }
      }
    }
  }
  function ht(t, e) {
    var n = e[_u];
    n === void 0 && (n = e[_u] = new Set());
    var l = t + "__bubble";
    n.has(l) || (Ym(e, t, 2, !1), n.add(l));
  }
  function Mr(t, e, n) {
    var l = 0;
    e && (l |= 4), Ym(n, t, l, e);
  }
  var js = "_reactListening" + Math.random().toString(36).slice(2);
  function Dr(t) {
    if (!t[js]) {
      (t[js] = !0),
        Nf.forEach(function (n) {
          n !== "selectionchange" && (q1.has(n) || Mr(n, !1, t), Mr(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[js] || ((e[js] = !0), Mr("selectionchange", !1, e));
    }
  }
  function Ym(t, e, n, l) {
    switch (pp(e)) {
      case 2:
        var o = pb;
        break;
      case 8:
        o = yb;
        break;
      default:
        o = qr;
    }
    (n = o.bind(null, e, n, t)),
      (o = void 0),
      !Zu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (o = !0),
      l
        ? o !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: o })
          : t.addEventListener(e, n, !0)
        : o !== void 0
        ? t.addEventListener(e, n, { passive: o })
        : t.addEventListener(e, n, !1);
  }
  function Cr(t, e, n, l, o) {
    var r = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var g = l.stateNode.containerInfo;
          if (g === o) break;
          if (d === 4)
            for (d = l.return; d !== null; ) {
              var x = d.tag;
              if ((x === 3 || x === 4) && d.stateNode.containerInfo === o)
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (((d = Ci(g)), d === null)) return;
            if (((x = d.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
              l = r = d;
              continue t;
            }
            g = g.parentNode;
          }
        }
        l = l.return;
      }
    Zf(function () {
      var C = r,
        N = Xu(n),
        B = [];
      t: {
        var z = bh.get(t);
        if (z !== void 0) {
          var O = Zl,
            J = t;
          switch (t) {
            case "keypress":
              if (Xl(n) === 0) break t;
            case "keydown":
            case "keyup":
              O = jv;
              break;
            case "focusin":
              (J = "focus"), (O = Fu);
              break;
            case "focusout":
              (J = "blur"), (O = Fu);
              break;
            case "beforeblur":
            case "afterblur":
              O = Fu;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = Jf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = Tv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = Uv;
              break;
            case ph:
            case yh:
            case gh:
              O = Mv;
              break;
            case vh:
              O = Hv;
              break;
            case "scroll":
            case "scrollend":
              O = Sv;
              break;
            case "wheel":
              O = qv;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = Cv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = Wf;
              break;
            case "toggle":
            case "beforetoggle":
              O = Xv;
          }
          var nt = (e & 4) !== 0,
            zt = !nt && (t === "scroll" || t === "scrollend"),
            E = nt ? (z !== null ? z + "Capture" : null) : z;
          nt = [];
          for (var T = C, D; T !== null; ) {
            var j = T;
            if (
              ((D = j.stateNode),
              (j = j.tag),
              (j !== 5 && j !== 26 && j !== 27) ||
                D === null ||
                E === null ||
                ((j = Da(T, E)), j != null && nt.push(ll(T, j, D))),
              zt)
            )
              break;
            T = T.return;
          }
          0 < nt.length &&
            ((z = new O(z, J, null, n, N)),
            B.push({ event: z, listeners: nt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((z = t === "mouseover" || t === "pointerover"),
            (O = t === "mouseout" || t === "pointerout"),
            z &&
              n !== Gu &&
              (J = n.relatedTarget || n.fromElement) &&
              (Ci(J) || J[Di]))
          )
            break t;
          if (
            (O || z) &&
            ((z =
              N.window === N
                ? N
                : (z = N.ownerDocument)
                ? z.defaultView || z.parentWindow
                : window),
            O
              ? ((J = n.relatedTarget || n.toElement),
                (O = C),
                (J = J ? Ci(J) : null),
                J !== null &&
                  ((zt = h(J)),
                  (nt = J.tag),
                  J !== zt || (nt !== 5 && nt !== 27 && nt !== 6)) &&
                  (J = null))
              : ((O = null), (J = C)),
            O !== J)
          ) {
            if (
              ((nt = Jf),
              (j = "onMouseLeave"),
              (E = "onMouseEnter"),
              (T = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((nt = Wf),
                (j = "onPointerLeave"),
                (E = "onPointerEnter"),
                (T = "pointer")),
              (zt = O == null ? z : Ma(O)),
              (D = J == null ? z : Ma(J)),
              (z = new nt(j, T + "leave", O, n, N)),
              (z.target = zt),
              (z.relatedTarget = D),
              (j = null),
              Ci(N) === C &&
                ((nt = new nt(E, T + "enter", J, n, N)),
                (nt.target = D),
                (nt.relatedTarget = zt),
                (j = nt)),
              (zt = j),
              O && J)
            )
              e: {
                for (nt = G1, E = O, T = J, D = 0, j = E; j; j = nt(j)) D++;
                j = 0;
                for (var et = T; et; et = nt(et)) j++;
                for (; 0 < D - j; ) (E = nt(E)), D--;
                for (; 0 < j - D; ) (T = nt(T)), j--;
                for (; D--; ) {
                  if (E === T || (T !== null && E === T.alternate)) {
                    nt = E;
                    break e;
                  }
                  (E = nt(E)), (T = nt(T));
                }
                nt = null;
              }
            else nt = null;
            O !== null && qm(B, z, O, nt, !1),
              J !== null && zt !== null && qm(B, zt, J, nt, !0);
          }
        }
        t: {
          if (
            ((z = C ? Ma(C) : window),
            (O = z.nodeName && z.nodeName.toLowerCase()),
            O === "select" || (O === "input" && z.type === "file"))
          )
            var St = ah;
          else if (nh(z))
            if (lh) St = Iv;
            else {
              St = Pv;
              var P = Wv;
            }
          else
            (O = z.nodeName),
              !O ||
              O.toLowerCase() !== "input" ||
              (z.type !== "checkbox" && z.type !== "radio")
                ? C && qu(C.elementType) && (St = ah)
                : (St = $v);
          if (St && (St = St(t, C))) {
            ih(B, St, n, N);
            break t;
          }
          P && P(t, z, C),
            t === "focusout" &&
              C &&
              z.type === "number" &&
              C.memoizedProps.value != null &&
              Yu(z, "number", z.value);
        }
        switch (((P = C ? Ma(C) : window), t)) {
          case "focusin":
            (nh(P) || P.contentEditable === "true") &&
              ((_i = P), (eo = C), (ja = null));
            break;
          case "focusout":
            ja = eo = _i = null;
            break;
          case "mousedown":
            no = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (no = !1), dh(B, n, N);
            break;
          case "selectionchange":
            if (e1) break;
          case "keydown":
          case "keyup":
            dh(B, n, N);
        }
        var rt;
        if (Pu)
          t: {
            switch (t) {
              case "compositionstart":
                var mt = "onCompositionStart";
                break t;
              case "compositionend":
                mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                mt = "onCompositionUpdate";
                break t;
            }
            mt = void 0;
          }
        else
          Bi
            ? th(t, n) && (mt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (mt = "onCompositionStart");
        mt &&
          (Pf &&
            n.locale !== "ko" &&
            (Bi || mt !== "onCompositionStart"
              ? mt === "onCompositionEnd" && Bi && (rt = Kf())
              : ((Mn = N),
                (Ku = "value" in Mn ? Mn.value : Mn.textContent),
                (Bi = !0))),
          (P = Bs(C, mt)),
          0 < P.length &&
            ((mt = new Ff(mt, t, null, n, N)),
            B.push({ event: mt, listeners: P }),
            rt
              ? (mt.data = rt)
              : ((rt = eh(n)), rt !== null && (mt.data = rt)))),
          (rt = Zv ? Kv(t, n) : kv(t, n)) &&
            ((mt = Bs(C, "onBeforeInput")),
            0 < mt.length &&
              ((P = new Ff("onBeforeInput", "beforeinput", null, n, N)),
              B.push({ event: P, listeners: mt }),
              (P.data = rt))),
          L1(B, t, C, n, N);
      }
      Hm(B, e);
    });
  }
  function ll(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Bs(t, e) {
    for (var n = e + "Capture", l = []; t !== null; ) {
      var o = t,
        r = o.stateNode;
      if (
        ((o = o.tag),
        (o !== 5 && o !== 26 && o !== 27) ||
          r === null ||
          ((o = Da(t, n)),
          o != null && l.unshift(ll(t, o, r)),
          (o = Da(t, e)),
          o != null && l.push(ll(t, o, r))),
        t.tag === 3)
      )
        return l;
      t = t.return;
    }
    return [];
  }
  function G1(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function qm(t, e, n, l, o) {
    for (var r = e._reactName, d = []; n !== null && n !== l; ) {
      var g = n,
        x = g.alternate,
        C = g.stateNode;
      if (((g = g.tag), x !== null && x === l)) break;
      (g !== 5 && g !== 26 && g !== 27) ||
        C === null ||
        ((x = C),
        o
          ? ((C = Da(n, r)), C != null && d.unshift(ll(n, C, x)))
          : o || ((C = Da(n, r)), C != null && d.push(ll(n, C, x)))),
        (n = n.return);
    }
    d.length !== 0 && t.push({ event: e, listeners: d });
  }
  var X1 = /\r\n?/g,
    Q1 = /\u0000|\uFFFD/g;
  function Gm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        X1,
        `
`
      )
      .replace(Q1, "");
  }
  function Xm(t, e) {
    return (e = Gm(e)), Gm(t) === e;
  }
  function Ct(t, e, n, l, o, r) {
    switch (n) {
      case "children":
        typeof l == "string"
          ? e === "body" || (e === "textarea" && l === "") || Vi(t, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            e !== "body" &&
            Vi(t, "" + l);
        break;
      case "className":
        Hl(t, "class", l);
        break;
      case "tabIndex":
        Hl(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Hl(t, n, l);
        break;
      case "style":
        Xf(t, l, r);
        break;
      case "data":
        if (e !== "object") {
          Hl(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (l = ql("" + l)), t.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" &&
            (n === "formAction"
              ? (e !== "input" && Ct(t, e, "name", o.name, o, null),
                Ct(t, e, "formEncType", o.formEncType, o, null),
                Ct(t, e, "formMethod", o.formMethod, o, null),
                Ct(t, e, "formTarget", o.formTarget, o, null))
              : (Ct(t, e, "encType", o.encType, o, null),
                Ct(t, e, "method", o.method, o, null),
                Ct(t, e, "target", o.target, o, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (l = ql("" + l)), t.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (t.onclick = sn);
        break;
      case "onScroll":
        l != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ht("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((n = l.__html), n != null)) {
            if (o.children != null) throw Error(s(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = ql("" + l)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "" + l)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0
          ? t.setAttribute(n, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? t.setAttribute(n, l)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? t.removeAttribute(n)
          : t.setAttribute(n, l);
        break;
      case "popover":
        ht("beforetoggle", t), ht("toggle", t), Ll(t, "popover", l);
        break;
      case "xlinkActuate":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        ln(t, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        ln(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        ln(t, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Ll(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = vv.get(n) || n), Ll(t, n, l));
    }
  }
  function zr(t, e, n, l, o, r) {
    switch (n) {
      case "style":
        Xf(t, l, r);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((n = l.__html), n != null)) {
            if (o.children != null) throw Error(s(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Vi(t, l)
          : (typeof l == "number" || typeof l == "bigint") && Vi(t, "" + l);
        break;
      case "onScroll":
        l != null && ht("scroll", t);
        break;
      case "onScrollEnd":
        l != null && ht("scrollend", t);
        break;
      case "onClick":
        l != null && (t.onclick = sn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!jf.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((o = n.endsWith("Capture")),
              (e = n.slice(2, o ? n.length - 7 : void 0)),
              (r = t[fe] || null),
              (r = r != null ? r[n] : null),
              typeof r == "function" && t.removeEventListener(e, r, o),
              typeof l == "function")
            ) {
              typeof r != "function" &&
                r !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, l, o);
              break t;
            }
            n in t
              ? (t[n] = l)
              : l === !0
              ? t.setAttribute(n, "")
              : Ll(t, n, l);
          }
    }
  }
  function ae(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ht("error", t), ht("load", t);
        var l = !1,
          o = !1,
          r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var d = n[r];
            if (d != null)
              switch (r) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, e));
                default:
                  Ct(t, e, r, d, n, null);
              }
          }
        o && Ct(t, e, "srcSet", n.srcSet, n, null),
          l && Ct(t, e, "src", n.src, n, null);
        return;
      case "input":
        ht("invalid", t);
        var g = (r = d = o = null),
          x = null,
          C = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var N = n[l];
            if (N != null)
              switch (l) {
                case "name":
                  o = N;
                  break;
                case "type":
                  d = N;
                  break;
                case "checked":
                  x = N;
                  break;
                case "defaultChecked":
                  C = N;
                  break;
                case "value":
                  r = N;
                  break;
                case "defaultValue":
                  g = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null) throw Error(s(137, e));
                  break;
                default:
                  Ct(t, e, l, N, n, null);
              }
          }
        Hf(t, r, g, x, C, d, o, !1);
        return;
      case "select":
        ht("invalid", t), (l = d = r = null);
        for (o in n)
          if (n.hasOwnProperty(o) && ((g = n[o]), g != null))
            switch (o) {
              case "value":
                r = g;
                break;
              case "defaultValue":
                d = g;
                break;
              case "multiple":
                l = g;
              default:
                Ct(t, e, o, g, n, null);
            }
        (e = r),
          (n = d),
          (t.multiple = !!l),
          e != null ? wi(t, !!l, e, !1) : n != null && wi(t, !!l, n, !0);
        return;
      case "textarea":
        ht("invalid", t), (r = o = l = null);
        for (d in n)
          if (n.hasOwnProperty(d) && ((g = n[d]), g != null))
            switch (d) {
              case "value":
                l = g;
                break;
              case "defaultValue":
                o = g;
                break;
              case "children":
                r = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(s(91));
                break;
              default:
                Ct(t, e, d, g, n, null);
            }
        qf(t, l, o, r);
        return;
      case "option":
        for (x in n)
          if (n.hasOwnProperty(x) && ((l = n[x]), l != null))
            switch (x) {
              case "selected":
                t.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ct(t, e, x, l, n, null);
            }
        return;
      case "dialog":
        ht("beforetoggle", t), ht("toggle", t), ht("cancel", t), ht("close", t);
        break;
      case "iframe":
      case "object":
        ht("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < al.length; l++) ht(al[l], t);
        break;
      case "image":
        ht("error", t), ht("load", t);
        break;
      case "details":
        ht("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ht("error", t), ht("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in n)
          if (n.hasOwnProperty(C) && ((l = n[C]), l != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, e));
              default:
                Ct(t, e, C, l, n, null);
            }
        return;
      default:
        if (qu(e)) {
          for (N in n)
            n.hasOwnProperty(N) &&
              ((l = n[N]), l !== void 0 && zr(t, e, N, l, n, void 0));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && ((l = n[g]), l != null && Ct(t, e, g, l, n, null));
  }
  function Z1(t, e, n, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null,
          r = null,
          d = null,
          g = null,
          x = null,
          C = null,
          N = null;
        for (O in n) {
          var B = n[O];
          if (n.hasOwnProperty(O) && B != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = B;
              default:
                l.hasOwnProperty(O) || Ct(t, e, O, null, l, B);
            }
        }
        for (var z in l) {
          var O = l[z];
          if (((B = n[z]), l.hasOwnProperty(z) && (O != null || B != null)))
            switch (z) {
              case "type":
                r = O;
                break;
              case "name":
                o = O;
                break;
              case "checked":
                C = O;
                break;
              case "defaultChecked":
                N = O;
                break;
              case "value":
                d = O;
                break;
              case "defaultValue":
                g = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(s(137, e));
                break;
              default:
                O !== B && Ct(t, e, z, O, l, B);
            }
        }
        Hu(t, d, g, x, C, N, r, o);
        return;
      case "select":
        O = d = g = z = null;
        for (r in n)
          if (((x = n[r]), n.hasOwnProperty(r) && x != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                O = x;
              default:
                l.hasOwnProperty(r) || Ct(t, e, r, null, l, x);
            }
        for (o in l)
          if (
            ((r = l[o]),
            (x = n[o]),
            l.hasOwnProperty(o) && (r != null || x != null))
          )
            switch (o) {
              case "value":
                z = r;
                break;
              case "defaultValue":
                g = r;
                break;
              case "multiple":
                d = r;
              default:
                r !== x && Ct(t, e, o, r, l, x);
            }
        (e = g),
          (n = d),
          (l = O),
          z != null
            ? wi(t, !!n, z, !1)
            : !!l != !!n &&
              (e != null ? wi(t, !!n, e, !0) : wi(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        O = z = null;
        for (g in n)
          if (
            ((o = n[g]),
            n.hasOwnProperty(g) && o != null && !l.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ct(t, e, g, null, l, o);
            }
        for (d in l)
          if (
            ((o = l[d]),
            (r = n[d]),
            l.hasOwnProperty(d) && (o != null || r != null))
          )
            switch (d) {
              case "value":
                z = o;
                break;
              case "defaultValue":
                O = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(s(91));
                break;
              default:
                o !== r && Ct(t, e, d, o, l, r);
            }
        Yf(t, z, O);
        return;
      case "option":
        for (var J in n)
          if (
            ((z = n[J]),
            n.hasOwnProperty(J) && z != null && !l.hasOwnProperty(J))
          )
            switch (J) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ct(t, e, J, null, l, z);
            }
        for (x in l)
          if (
            ((z = l[x]),
            (O = n[x]),
            l.hasOwnProperty(x) && z !== O && (z != null || O != null))
          )
            switch (x) {
              case "selected":
                t.selected =
                  z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                Ct(t, e, x, z, l, O);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var nt in n)
          (z = n[nt]),
            n.hasOwnProperty(nt) &&
              z != null &&
              !l.hasOwnProperty(nt) &&
              Ct(t, e, nt, null, l, z);
        for (C in l)
          if (
            ((z = l[C]),
            (O = n[C]),
            l.hasOwnProperty(C) && z !== O && (z != null || O != null))
          )
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(s(137, e));
                break;
              default:
                Ct(t, e, C, z, l, O);
            }
        return;
      default:
        if (qu(e)) {
          for (var zt in n)
            (z = n[zt]),
              n.hasOwnProperty(zt) &&
                z !== void 0 &&
                !l.hasOwnProperty(zt) &&
                zr(t, e, zt, void 0, l, z);
          for (N in l)
            (z = l[N]),
              (O = n[N]),
              !l.hasOwnProperty(N) ||
                z === O ||
                (z === void 0 && O === void 0) ||
                zr(t, e, N, z, l, O);
          return;
        }
    }
    for (var E in n)
      (z = n[E]),
        n.hasOwnProperty(E) &&
          z != null &&
          !l.hasOwnProperty(E) &&
          Ct(t, e, E, null, l, z);
    for (B in l)
      (z = l[B]),
        (O = n[B]),
        !l.hasOwnProperty(B) ||
          z === O ||
          (z == null && O == null) ||
          Ct(t, e, B, z, l, O);
  }
  function Qm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function K1() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), l = 0;
        l < n.length;
        l++
      ) {
        var o = n[l],
          r = o.transferSize,
          d = o.initiatorType,
          g = o.duration;
        if (r && g && Qm(d)) {
          for (d = 0, g = o.responseEnd, l += 1; l < n.length; l++) {
            var x = n[l],
              C = x.startTime;
            if (C > g) break;
            var N = x.transferSize,
              B = x.initiatorType;
            N &&
              Qm(B) &&
              ((x = x.responseEnd), (d += N * (x < g ? 1 : (g - C) / (x - C))));
          }
          if ((--l, (e += (8 * (r + d)) / (o.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Rr = null,
    Or = null;
  function _s(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Zm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Km(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function wr(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Vr = null;
  function k1() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Vr
        ? !1
        : ((Vr = t), !0)
      : ((Vr = null), !1);
  }
  var km = typeof setTimeout == "function" ? setTimeout : void 0,
    J1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Jm = typeof Promise == "function" ? Promise : void 0,
    F1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Jm < "u"
        ? function (t) {
            return Jm.resolve(null).then(t).catch(W1);
          }
        : km;
  function W1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Gn(t) {
    return t === "head";
  }
  function Fm(t, e) {
    var n = e,
      l = 0;
    do {
      var o = n.nextSibling;
      if ((t.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$" || n === "/&")) {
          if (l === 0) {
            t.removeChild(o), ra(e);
            return;
          }
          l--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          l++;
        else if (n === "html") sl(t.ownerDocument.documentElement);
        else if (n === "head") {
          (n = t.ownerDocument.head), sl(n);
          for (var r = n.firstChild; r; ) {
            var d = r.nextSibling,
              g = r.nodeName;
            r[Ea] ||
              g === "SCRIPT" ||
              g === "STYLE" ||
              (g === "LINK" && r.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(r),
              (r = d);
          }
        } else n === "body" && sl(t.ownerDocument.body);
      n = o;
    } while (n);
    ra(e);
  }
  function Wm(t, e) {
    var n = t;
    t = 0;
    do {
      var l = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = l;
    } while (n);
  }
  function Nr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Nr(n), Uu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function P1(t, e, n, l) {
    for (; t.nodeType === 1; ) {
      var o = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (l) {
        if (!t[Ea])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((r = t.getAttribute("rel")),
                r === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== o.rel ||
                t.getAttribute("href") !==
                  (o.href == null || o.href === "" ? null : o.href) ||
                t.getAttribute("crossorigin") !==
                  (o.crossOrigin == null ? null : o.crossOrigin) ||
                t.getAttribute("title") !== (o.title == null ? null : o.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((r = t.getAttribute("src")),
                (r !== (o.src == null ? null : o.src) ||
                  t.getAttribute("type") !== (o.type == null ? null : o.type) ||
                  t.getAttribute("crossorigin") !==
                    (o.crossOrigin == null ? null : o.crossOrigin)) &&
                  r &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var r = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && t.getAttribute("name") === r) return t;
      } else return t;
      if (((t = Le(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function $1(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Le(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Pm(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Le(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function jr(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Br(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function I1(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var l = function () {
        e(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), (t._reactRetry = l);
    }
  }
  function Le(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var _r = null;
  function $m(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return Le(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Im(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function tp(t, e, n) {
    switch (((e = _s(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(s(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(s(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function sl(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Uu(t);
  }
  var He = new Map(),
    ep = new Set();
  function Us(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Tn = Q.d;
  Q.d = { f: tb, r: eb, D: nb, C: ib, L: ab, m: lb, X: ub, S: sb, M: ob };
  function tb() {
    var t = Tn.f(),
      e = zs();
    return t || e;
  }
  function eb(t) {
    var e = zi(t);
    e !== null && e.tag === 5 && e.type === "form" ? vd(e) : Tn.r(t);
  }
  var sa = typeof document > "u" ? null : document;
  function np(t, e, n) {
    var l = sa;
    if (l && typeof e == "string" && e) {
      var o = we(e);
      (o = 'link[rel="' + t + '"][href="' + o + '"]'),
        typeof n == "string" && (o += '[crossorigin="' + n + '"]'),
        ep.has(o) ||
          (ep.add(o),
          (t = { rel: t, crossOrigin: n, href: e }),
          l.querySelector(o) === null &&
            ((e = l.createElement("link")),
            ae(e, "link", t),
            Wt(e),
            l.head.appendChild(e)));
    }
  }
  function nb(t) {
    Tn.D(t), np("dns-prefetch", t, null);
  }
  function ib(t, e) {
    Tn.C(t, e), np("preconnect", t, e);
  }
  function ab(t, e, n) {
    Tn.L(t, e, n);
    var l = sa;
    if (l && t && e) {
      var o = 'link[rel="preload"][as="' + we(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((o += '[imagesrcset="' + we(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (o += '[imagesizes="' + we(n.imageSizes) + '"]'))
        : (o += '[href="' + we(t) + '"]');
      var r = o;
      switch (e) {
        case "style":
          r = ua(t);
          break;
        case "script":
          r = oa(t);
      }
      He.has(r) ||
        ((t = b(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        He.set(r, t),
        l.querySelector(o) !== null ||
          (e === "style" && l.querySelector(ul(r))) ||
          (e === "script" && l.querySelector(ol(r))) ||
          ((e = l.createElement("link")),
          ae(e, "link", t),
          Wt(e),
          l.head.appendChild(e)));
    }
  }
  function lb(t, e) {
    Tn.m(t, e);
    var n = sa;
    if (n && t) {
      var l = e && typeof e.as == "string" ? e.as : "script",
        o =
          'link[rel="modulepreload"][as="' + we(l) + '"][href="' + we(t) + '"]',
        r = o;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = oa(t);
      }
      if (
        !He.has(r) &&
        ((t = b({ rel: "modulepreload", href: t }, e)),
        He.set(r, t),
        n.querySelector(o) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ol(r))) return;
        }
        (l = n.createElement("link")),
          ae(l, "link", t),
          Wt(l),
          n.head.appendChild(l);
      }
    }
  }
  function sb(t, e, n) {
    Tn.S(t, e, n);
    var l = sa;
    if (l && t) {
      var o = Ri(l).hoistableStyles,
        r = ua(t);
      e = e || "default";
      var d = o.get(r);
      if (!d) {
        var g = { loading: 0, preload: null };
        if ((d = l.querySelector(ul(r)))) g.loading = 5;
        else {
          (t = b({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = He.get(r)) && Ur(t, n);
          var x = (d = l.createElement("link"));
          Wt(x),
            ae(x, "link", t),
            (x._p = new Promise(function (C, N) {
              (x.onload = C), (x.onerror = N);
            })),
            x.addEventListener("load", function () {
              g.loading |= 1;
            }),
            x.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            Ls(d, e, l);
        }
        (d = { type: "stylesheet", instance: d, count: 1, state: g }),
          o.set(r, d);
      }
    }
  }
  function ub(t, e) {
    Tn.X(t, e);
    var n = sa;
    if (n && t) {
      var l = Ri(n).hoistableScripts,
        o = oa(t),
        r = l.get(o);
      r ||
        ((r = n.querySelector(ol(o))),
        r ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = He.get(o)) && Lr(t, e),
          (r = n.createElement("script")),
          Wt(r),
          ae(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        l.set(o, r));
    }
  }
  function ob(t, e) {
    Tn.M(t, e);
    var n = sa;
    if (n && t) {
      var l = Ri(n).hoistableScripts,
        o = oa(t),
        r = l.get(o);
      r ||
        ((r = n.querySelector(ol(o))),
        r ||
          ((t = b({ src: t, async: !0, type: "module" }, e)),
          (e = He.get(o)) && Lr(t, e),
          (r = n.createElement("script")),
          Wt(r),
          ae(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        l.set(o, r));
    }
  }
  function ip(t, e, n, l) {
    var o = (o = ct.current) ? Us(o) : null;
    if (!o) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = ua(n.href)),
            (n = Ri(o).hoistableStyles),
            (l = n.get(e)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = ua(n.href);
          var r = Ri(o).hoistableStyles,
            d = r.get(t);
          if (
            (d ||
              ((o = o.ownerDocument || o),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(t, d),
              (r = o.querySelector(ul(t))) &&
                !r._p &&
                ((d.instance = r), (d.state.loading = 5)),
              He.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                He.set(t, n),
                r || rb(o, t, n, d.state))),
            e && l === null)
          )
            throw Error(s(528, ""));
          return d;
        }
        if (e && l !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = oa(n)),
              (n = Ri(o).hoistableScripts),
              (l = n.get(e)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, t));
    }
  }
  function ua(t) {
    return 'href="' + we(t) + '"';
  }
  function ul(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function ap(t) {
    return b({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function rb(t, e, n, l) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (l.loading = 1)
      : ((e = t.createElement("link")),
        (l.preload = e),
        e.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        ae(e, "link", n),
        Wt(e),
        t.head.appendChild(e));
  }
  function oa(t) {
    return '[src="' + we(t) + '"]';
  }
  function ol(t) {
    return "script[async]" + t;
  }
  function lp(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var l = t.querySelector('style[data-href~="' + we(n.href) + '"]');
          if (l) return (e.instance = l), Wt(l), l;
          var o = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (t.ownerDocument || t).createElement("style")),
            Wt(l),
            ae(l, "style", o),
            Ls(l, n.precedence, t),
            (e.instance = l)
          );
        case "stylesheet":
          o = ua(n.href);
          var r = t.querySelector(ul(o));
          if (r) return (e.state.loading |= 4), (e.instance = r), Wt(r), r;
          (l = ap(n)),
            (o = He.get(o)) && Ur(l, o),
            (r = (t.ownerDocument || t).createElement("link")),
            Wt(r);
          var d = r;
          return (
            (d._p = new Promise(function (g, x) {
              (d.onload = g), (d.onerror = x);
            })),
            ae(r, "link", l),
            (e.state.loading |= 4),
            Ls(r, n.precedence, t),
            (e.instance = r)
          );
        case "script":
          return (
            (r = oa(n.src)),
            (o = t.querySelector(ol(r)))
              ? ((e.instance = o), Wt(o), o)
              : ((l = n),
                (o = He.get(r)) && ((l = b({}, n)), Lr(l, o)),
                (t = t.ownerDocument || t),
                (o = t.createElement("script")),
                Wt(o),
                ae(o, "link", l),
                t.head.appendChild(o),
                (e.instance = o))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((l = e.instance), (e.state.loading |= 4), Ls(l, n.precedence, t));
    return e.instance;
  }
  function Ls(t, e, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        o = l.length ? l[l.length - 1] : null,
        r = o,
        d = 0;
      d < l.length;
      d++
    ) {
      var g = l[d];
      if (g.dataset.precedence === e) r = g;
      else if (r !== o) break;
    }
    r
      ? r.parentNode.insertBefore(t, r.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Ur(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function Lr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Hs = null;
  function sp(t, e, n) {
    if (Hs === null) {
      var l = new Map(),
        o = (Hs = new Map());
      o.set(n, l);
    } else (o = Hs), (l = o.get(n)), l || ((l = new Map()), o.set(n, l));
    if (l.has(t)) return l;
    for (
      l.set(t, null), n = n.getElementsByTagName(t), o = 0;
      o < n.length;
      o++
    ) {
      var r = n[o];
      if (
        !(
          r[Ea] ||
          r[te] ||
          (t === "link" && r.getAttribute("rel") === "stylesheet")
        ) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = r.getAttribute(e) || "";
        d = t + d;
        var g = l.get(d);
        g ? g.push(r) : l.set(d, [r]);
      }
    }
    return l;
  }
  function up(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function cb(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function op(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function fb(t, e, n, l) {
    if (
      n.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var o = ua(l.href),
          r = e.querySelector(ul(o));
        if (r) {
          (e = r._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Ys.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = r),
            Wt(r);
          return;
        }
        (r = e.ownerDocument || e),
          (l = ap(l)),
          (o = He.get(o)) && Ur(l, o),
          (r = r.createElement("link")),
          Wt(r);
        var d = r;
        (d._p = new Promise(function (g, x) {
          (d.onload = g), (d.onerror = x);
        })),
          ae(r, "link", l),
          (n.instance = r);
      }
      t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = Ys.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n));
    }
  }
  var Hr = 0;
  function hb(t, e) {
    return (
      t.stylesheets && t.count === 0 && Gs(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((t.stylesheets && Gs(t, t.stylesheets), t.unsuspend)) {
                var r = t.unsuspend;
                (t.unsuspend = null), r();
              }
            }, 6e4 + e);
            0 < t.imgBytes && Hr === 0 && (Hr = 62500 * K1());
            var o = setTimeout(function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && Gs(t, t.stylesheets), t.unsuspend))
              ) {
                var r = t.unsuspend;
                (t.unsuspend = null), r();
              }
            }, (t.imgBytes > Hr ? 50 : 800) + e);
            return (
              (t.unsuspend = n),
              function () {
                (t.unsuspend = null), clearTimeout(l), clearTimeout(o);
              }
            );
          }
        : null
    );
  }
  function Ys() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Gs(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var qs = null;
  function Gs(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (qs = new Map()),
        e.forEach(db, t),
        (qs = null),
        Ys.call(t));
  }
  function db(t, e) {
    if (!(e.state.loading & 4)) {
      var n = qs.get(t);
      if (n) var l = n.get(null);
      else {
        (n = new Map()), qs.set(t, n);
        for (
          var o = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            r = 0;
          r < o.length;
          r++
        ) {
          var d = o[r];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (l = d));
        }
        l && n.set(null, l);
      }
      (o = e.instance),
        (d = o.getAttribute("data-precedence")),
        (r = n.get(d) || l),
        r === l && n.set(null, o),
        n.set(d, o),
        this.count++,
        (l = Ys.bind(this)),
        o.addEventListener("load", l),
        o.addEventListener("error", l),
        r
          ? r.parentNode.insertBefore(o, r.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(o, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var rl = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0,
  };
  function mb(t, e, n, l, o, r, d, g, x) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Nu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Nu(0)),
      (this.hiddenUpdates = Nu(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = o),
      (this.onCaughtError = r),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = x),
      (this.incompleteTransitions = new Map());
  }
  function rp(t, e, n, l, o, r, d, g, x, C, N, B) {
    return (
      (t = new mb(t, e, n, d, x, C, N, B, g)),
      (e = 1),
      r === !0 && (e |= 24),
      (r = Ae(3, null, null, e)),
      (t.current = r),
      (r.stateNode = t),
      (e = vo()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (r.memoizedState = { element: l, isDehydrated: n, cache: e }),
      To(r),
      t
    );
  }
  function cp(t) {
    return t ? ((t = Hi), t) : Hi;
  }
  function fp(t, e, n, l, o, r) {
    (o = cp(o)),
      l.context === null ? (l.context = o) : (l.pendingContext = o),
      (l = wn(e)),
      (l.payload = { element: n }),
      (r = r === void 0 ? null : r),
      r !== null && (l.callback = r),
      (n = Vn(t, l, e)),
      n !== null && (ge(n, t, e), qa(n, t, e));
  }
  function hp(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Yr(t, e) {
    hp(t, e), (t = t.alternate) && hp(t, e);
  }
  function dp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ui(t, 67108864);
      e !== null && ge(e, t, 67108864), Yr(t, 67108864);
    }
  }
  function mp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ze();
      e = ju(e);
      var n = ui(t, e);
      n !== null && ge(n, t, e), Yr(t, e);
    }
  }
  var Xs = !0;
  function pb(t, e, n, l) {
    var o = V.T;
    V.T = null;
    var r = Q.p;
    try {
      (Q.p = 2), qr(t, e, n, l);
    } finally {
      (Q.p = r), (V.T = o);
    }
  }
  function yb(t, e, n, l) {
    var o = V.T;
    V.T = null;
    var r = Q.p;
    try {
      (Q.p = 8), qr(t, e, n, l);
    } finally {
      (Q.p = r), (V.T = o);
    }
  }
  function qr(t, e, n, l) {
    if (Xs) {
      var o = Gr(l);
      if (o === null) Cr(t, e, l, Qs, n), yp(t, l);
      else if (vb(o, t, e, n, l)) l.stopPropagation();
      else if ((yp(t, l), e & 4 && -1 < gb.indexOf(t))) {
        for (; o !== null; ) {
          var r = zi(o);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var d = ni(r.pendingLanes);
                  if (d !== 0) {
                    var g = r;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var x = 1 << (31 - xe(d));
                      (g.entanglements[1] |= x), (d &= ~x);
                    }
                    tn(r), (Tt & 6) === 0 && ((Ds = be() + 500), il(0));
                  }
                }
                break;
              case 31:
              case 13:
                (g = ui(r, 2)), g !== null && ge(g, r, 2), zs(), Yr(r, 2);
            }
          if (((r = Gr(l)), r === null && Cr(t, e, l, Qs, n), r === o)) break;
          o = r;
        }
        o !== null && l.stopPropagation();
      } else Cr(t, e, l, null, n);
    }
  }
  function Gr(t) {
    return (t = Xu(t)), Xr(t);
  }
  var Qs = null;
  function Xr(t) {
    if (((Qs = null), (t = Ci(t)), t !== null)) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = f(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = m(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Qs = t), null;
  }
  function pp(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (nv()) {
          case Af:
            return 2;
          case Ef:
            return 8;
          case Nl:
          case iv:
            return 32;
          case Mf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qr = !1,
    Xn = null,
    Qn = null,
    Zn = null,
    cl = new Map(),
    fl = new Map(),
    Kn = [],
    gb =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function yp(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Xn = null;
        break;
      case "dragenter":
      case "dragleave":
        Qn = null;
        break;
      case "mouseover":
      case "mouseout":
        Zn = null;
        break;
      case "pointerover":
      case "pointerout":
        cl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fl.delete(e.pointerId);
    }
  }
  function hl(t, e, n, l, o, r) {
    return t === null || t.nativeEvent !== r
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: r,
          targetContainers: [o],
        }),
        e !== null && ((e = zi(e)), e !== null && dp(e)),
        t)
      : ((t.eventSystemFlags |= l),
        (e = t.targetContainers),
        o !== null && e.indexOf(o) === -1 && e.push(o),
        t);
  }
  function vb(t, e, n, l, o) {
    switch (e) {
      case "focusin":
        return (Xn = hl(Xn, t, e, n, l, o)), !0;
      case "dragenter":
        return (Qn = hl(Qn, t, e, n, l, o)), !0;
      case "mouseover":
        return (Zn = hl(Zn, t, e, n, l, o)), !0;
      case "pointerover":
        var r = o.pointerId;
        return cl.set(r, hl(cl.get(r) || null, t, e, n, l, o)), !0;
      case "gotpointercapture":
        return (
          (r = o.pointerId), fl.set(r, hl(fl.get(r) || null, t, e, n, l, o)), !0
        );
    }
    return !1;
  }
  function gp(t) {
    var e = Ci(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = f(n)), e !== null)) {
            (t.blockedOn = e),
              wf(t.priority, function () {
                mp(n);
              });
            return;
          }
        } else if (e === 31) {
          if (((e = m(n)), e !== null)) {
            (t.blockedOn = e),
              wf(t.priority, function () {
                mp(n);
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Zs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Gr(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var l = new n.constructor(n.type, n);
        (Gu = l), n.target.dispatchEvent(l), (Gu = null);
      } else return (e = zi(n)), e !== null && dp(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function vp(t, e, n) {
    Zs(t) && n.delete(e);
  }
  function bb() {
    (Qr = !1),
      Xn !== null && Zs(Xn) && (Xn = null),
      Qn !== null && Zs(Qn) && (Qn = null),
      Zn !== null && Zs(Zn) && (Zn = null),
      cl.forEach(vp),
      fl.forEach(vp);
  }
  function Ks(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Qr ||
        ((Qr = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, bb)));
  }
  var ks = null;
  function bp(t) {
    ks !== t &&
      ((ks = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        ks === t && (ks = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            l = t[e + 1],
            o = t[e + 2];
          if (typeof l != "function") {
            if (Xr(l || n) === null) continue;
            break;
          }
          var r = zi(n);
          r !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Go(r, { pending: !0, data: o, method: n.method, action: l }, l, o));
        }
      }));
  }
  function ra(t) {
    function e(x) {
      return Ks(x, t);
    }
    Xn !== null && Ks(Xn, t),
      Qn !== null && Ks(Qn, t),
      Zn !== null && Ks(Zn, t),
      cl.forEach(e),
      fl.forEach(e);
    for (var n = 0; n < Kn.length; n++) {
      var l = Kn[n];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < Kn.length && ((n = Kn[0]), n.blockedOn === null); )
      gp(n), n.blockedOn === null && Kn.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var o = n[l],
          r = n[l + 1],
          d = o[fe] || null;
        if (typeof r == "function") d || bp(n);
        else if (d) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (((o = r), (d = r[fe] || null))) g = d.formAction;
            else if (Xr(o) !== null) continue;
          } else g = d.action;
          typeof g == "function" ? (n[l + 1] = g) : (n.splice(l, 3), (l -= 3)),
            bp(n);
        }
      }
  }
  function Sp() {
    function t(r) {
      r.canIntercept &&
        r.info === "react-transition" &&
        r.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (o = d);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      o !== null && (o(), (o = null)), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var r = navigation.currentEntry;
        r &&
          r.url != null &&
          navigation.navigate(r.url, {
            state: r.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        o = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          (l = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            o !== null && (o(), (o = null));
        }
      );
    }
  }
  function Zr(t) {
    this._internalRoot = t;
  }
  (Js.prototype.render = Zr.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(s(409));
      var n = e.current,
        l = ze();
      fp(n, l, t, e, null, null);
    }),
    (Js.prototype.unmount = Zr.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          fp(t.current, 2, null, t, null, null), zs(), (e[Di] = null);
        }
      });
  function Js(t) {
    this._internalRoot = t;
  }
  Js.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Of();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Kn.length && e !== 0 && e < Kn[n].priority; n++);
      Kn.splice(n, 0, t), n === 0 && gp(t);
    }
  };
  var xp = a.version;
  if (xp !== "19.2.5") throw Error(s(527, xp, "19.2.5"));
  Q.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(s(188))
        : ((t = Object.keys(t).join(",")), Error(s(268, t)));
    return (
      (t = p(e)),
      (t = t !== null ? v(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Sb = {
    bundleType: 0,
    version: "19.2.5",
    rendererPackageName: "react-dom",
    currentDispatcherRef: V,
    reconcilerVersion: "19.2.5",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fs.isDisabled && Fs.supportsFiber)
      try {
        (xa = Fs.inject(Sb)), (Se = Fs);
      } catch {}
  }
  return (
    (ml.createRoot = function (t, e) {
      if (!c(t)) throw Error(s(299));
      var n = !1,
        l = "",
        o = zd,
        r = Rd,
        d = Od;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (l = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (o = e.onUncaughtError),
          e.onCaughtError !== void 0 && (r = e.onCaughtError),
          e.onRecoverableError !== void 0 && (d = e.onRecoverableError)),
        (e = rp(t, 1, !1, null, null, n, l, null, o, r, d, Sp)),
        (t[Di] = e.current),
        Dr(t),
        new Zr(e)
      );
    }),
    (ml.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(s(299));
      var l = !1,
        o = "",
        r = zd,
        d = Rd,
        g = Od,
        x = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.formState !== void 0 && (x = n.formState)),
        (e = rp(t, 1, !0, e, n ?? null, l, o, x, r, d, g, Sp)),
        (e.context = cp(null)),
        (n = e.current),
        (l = ze()),
        (l = ju(l)),
        (o = wn(l)),
        (o.callback = null),
        Vn(n, o, l),
        (n = l),
        (e.current.lanes = n),
        Aa(e, n),
        tn(e),
        (t[Di] = e.current),
        Dr(t),
        new Js(e)
      );
    }),
    (ml.version = "19.2.5"),
    ml
  );
}
var wp;
function Ob() {
  if (wp) return Jr.exports;
  wp = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), (Jr.exports = Rb()), Jr.exports;
}
var wb = Ob();
const Xc = q.createContext({});
function $n(i) {
  const a = q.useRef(null);
  return a.current === null && (a.current = i()), a.current;
}
const Vb = typeof window < "u",
  Su = Vb ? q.useLayoutEffect : q.useEffect,
  xu = q.createContext(null);
function Qc(i, a) {
  i.indexOf(a) === -1 && i.push(a);
}
function cu(i, a) {
  const u = i.indexOf(a);
  u > -1 && i.splice(u, 1);
}
const Fe = (i, a, u) => (u > a ? a : u < i ? i : u);
let El = () => {};
const In = {},
  u0 = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i);
function o0(i) {
  return typeof i == "object" && i !== null;
}
const r0 = (i) => /^0[^.\s]+$/u.test(i);
function c0(i) {
  let a;
  return () => (a === void 0 && (a = i()), a);
}
const ve = (i) => i,
  Nb = (i, a) => (u) => a(i(u)),
  zl = (...i) => i.reduce(Nb),
  pa = (i, a, u) => {
    const s = a - i;
    return s === 0 ? 1 : (u - i) / s;
  };
class Zc {
  constructor() {
    this.subscriptions = [];
  }
  add(a) {
    return Qc(this.subscriptions, a), () => cu(this.subscriptions, a);
  }
  notify(a, u, s) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](a, u, s);
      else
        for (let h = 0; h < c; h++) {
          const f = this.subscriptions[h];
          f && f(a, u, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Re = (i) => i * 1e3,
  Ye = (i) => i / 1e3;
function Kc(i, a) {
  return a ? i * (1e3 / a) : 0;
}
const f0 = (i, a, u) =>
    (((1 - 3 * u + 3 * a) * i + (3 * u - 6 * a)) * i + 3 * a) * i,
  jb = 1e-7,
  Bb = 12;
function _b(i, a, u, s, c) {
  let h,
    f,
    m = 0;
  do (f = a + (u - a) / 2), (h = f0(f, s, c) - i), h > 0 ? (u = f) : (a = f);
  while (Math.abs(h) > jb && ++m < Bb);
  return f;
}
function Rl(i, a, u, s) {
  if (i === a && u === s) return ve;
  const c = (h) => _b(h, 0, 1, i, u);
  return (h) => (h === 0 || h === 1 ? h : f0(c(h), a, s));
}
const h0 = (i) => (a) => a <= 0.5 ? i(2 * a) / 2 : (2 - i(2 * (1 - a))) / 2,
  d0 = (i) => (a) => 1 - i(1 - a),
  m0 = Rl(0.33, 1.53, 0.69, 0.99),
  kc = d0(m0),
  p0 = h0(kc),
  y0 = (i) =>
    i >= 1
      ? 1
      : (i *= 2) < 1
      ? 0.5 * kc(i)
      : 0.5 * (2 - Math.pow(2, -10 * (i - 1))),
  Jc = (i) => 1 - Math.sin(Math.acos(i)),
  g0 = d0(Jc),
  v0 = h0(Jc),
  Ub = Rl(0.42, 0, 1, 1),
  Lb = Rl(0, 0, 0.58, 1),
  b0 = Rl(0.42, 0, 0.58, 1),
  Hb = (i) => Array.isArray(i) && typeof i[0] != "number",
  S0 = (i) => Array.isArray(i) && typeof i[0] == "number",
  Yb = {
    linear: ve,
    easeIn: Ub,
    easeInOut: b0,
    easeOut: Lb,
    circIn: Jc,
    circInOut: v0,
    circOut: g0,
    backIn: kc,
    backInOut: p0,
    backOut: m0,
    anticipate: y0,
  },
  qb = (i) => typeof i == "string",
  Vp = (i) => {
    if (S0(i)) {
      El(i.length === 4);
      const [a, u, s, c] = i;
      return Rl(a, u, s, c);
    } else if (qb(i)) return Yb[i];
    return i;
  },
  Ws = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Gb(i, a) {
  let u = new Set(),
    s = new Set(),
    c = !1,
    h = !1;
  const f = new WeakSet();
  let m = { delta: 0, timestamp: 0, isProcessing: !1 };
  function y(v) {
    f.has(v) && (p.schedule(v), i()), v(m);
  }
  const p = {
    schedule: (v, b = !1, S = !1) => {
      const w = S && c ? u : s;
      return b && f.add(v), w.add(v), v;
    },
    cancel: (v) => {
      s.delete(v), f.delete(v);
    },
    process: (v) => {
      if (((m = v), c)) {
        h = !0;
        return;
      }
      c = !0;
      const b = u;
      (u = s),
        (s = b),
        u.forEach(y),
        u.clear(),
        (c = !1),
        h && ((h = !1), p.process(v));
    },
  };
  return p;
}
const Xb = 40;
function x0(i, a) {
  let u = !1,
    s = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    h = () => (u = !0),
    f = Ws.reduce((Y, X) => ((Y[X] = Gb(h)), Y), {}),
    {
      setup: m,
      read: y,
      resolveKeyframes: p,
      preUpdate: v,
      update: b,
      preRender: S,
      render: M,
      postRender: w,
    } = f,
    U = () => {
      const Y = In.useManualTiming,
        X = Y ? c.timestamp : performance.now();
      (u = !1),
        Y ||
          (c.delta = s ? 1e3 / 60 : Math.max(Math.min(X - c.timestamp, Xb), 1)),
        (c.timestamp = X),
        (c.isProcessing = !0),
        m.process(c),
        y.process(c),
        p.process(c),
        v.process(c),
        b.process(c),
        S.process(c),
        M.process(c),
        w.process(c),
        (c.isProcessing = !1),
        u && a && ((s = !1), i(U));
    },
    L = () => {
      (u = !0), (s = !0), c.isProcessing || i(U);
    };
  return {
    schedule: Ws.reduce((Y, X) => {
      const k = f[X];
      return (
        (Y[X] = (lt, I = !1, $ = !1) => (u || L(), k.schedule(lt, I, $))), Y
      );
    }, {}),
    cancel: (Y) => {
      for (let X = 0; X < Ws.length; X++) f[Ws[X]].cancel(Y);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: vt,
  cancel: qe,
  state: $t,
  steps: $r,
} = x0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ve, !0);
let iu;
function Qb() {
  iu = void 0;
}
const re = {
    now: () => (
      iu === void 0 &&
        re.set(
          $t.isProcessing || In.useManualTiming
            ? $t.timestamp
            : performance.now()
        ),
      iu
    ),
    set: (i) => {
      (iu = i), queueMicrotask(Qb);
    },
  },
  T0 = (i) => (a) => typeof a == "string" && a.startsWith(i),
  A0 = T0("--"),
  Zb = T0("var(--"),
  Fc = (i) => (Zb(i) ? Kb.test(i.split("/*")[0].trim()) : !1),
  Kb =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Np(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const ga = {
    test: (i) => typeof i == "number",
    parse: parseFloat,
    transform: (i) => i,
  },
  Ml = { ...ga, transform: (i) => Fe(0, 1, i) },
  Ps = { ...ga, default: 1 },
  vl = (i) => Math.round(i * 1e5) / 1e5,
  Wc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function kb(i) {
  return i == null;
}
const Jb =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Pc = (i, a) => (u) =>
    !!(
      (typeof u == "string" && Jb.test(u) && u.startsWith(i)) ||
      (a && !kb(u) && Object.prototype.hasOwnProperty.call(u, a))
    ),
  E0 = (i, a, u) => (s) => {
    if (typeof s != "string") return s;
    const [c, h, f, m] = s.match(Wc);
    return {
      [i]: parseFloat(c),
      [a]: parseFloat(h),
      [u]: parseFloat(f),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  Fb = (i) => Fe(0, 255, i),
  Ir = { ...ga, transform: (i) => Math.round(Fb(i)) },
  Ti = {
    test: Pc("rgb", "red"),
    parse: E0("red", "green", "blue"),
    transform: ({ red: i, green: a, blue: u, alpha: s = 1 }) =>
      "rgba(" +
      Ir.transform(i) +
      ", " +
      Ir.transform(a) +
      ", " +
      Ir.transform(u) +
      ", " +
      vl(Ml.transform(s)) +
      ")",
  };
function Wb(i) {
  let a = "",
    u = "",
    s = "",
    c = "";
  return (
    i.length > 5
      ? ((a = i.substring(1, 3)),
        (u = i.substring(3, 5)),
        (s = i.substring(5, 7)),
        (c = i.substring(7, 9)))
      : ((a = i.substring(1, 2)),
        (u = i.substring(2, 3)),
        (s = i.substring(3, 4)),
        (c = i.substring(4, 5)),
        (a += a),
        (u += u),
        (s += s),
        (c += c)),
    {
      red: parseInt(a, 16),
      green: parseInt(u, 16),
      blue: parseInt(s, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const yc = { test: Pc("#"), parse: Wb, transform: Ti.transform },
  Ol = (i) => ({
    test: (a) =>
      typeof a == "string" && a.endsWith(i) && a.split(" ").length === 1,
    parse: parseFloat,
    transform: (a) => `${a}${i}`,
  }),
  Fn = Ol("deg"),
  an = Ol("%"),
  F = Ol("px"),
  Pb = Ol("vh"),
  $b = Ol("vw"),
  jp = {
    ...an,
    parse: (i) => an.parse(i) / 100,
    transform: (i) => an.transform(i * 100),
  },
  ha = {
    test: Pc("hsl", "hue"),
    parse: E0("hue", "saturation", "lightness"),
    transform: ({ hue: i, saturation: a, lightness: u, alpha: s = 1 }) =>
      "hsla(" +
      Math.round(i) +
      ", " +
      an.transform(vl(a)) +
      ", " +
      an.transform(vl(u)) +
      ", " +
      vl(Ml.transform(s)) +
      ")",
  },
  kt = {
    test: (i) => Ti.test(i) || yc.test(i) || ha.test(i),
    parse: (i) =>
      Ti.test(i) ? Ti.parse(i) : ha.test(i) ? ha.parse(i) : yc.parse(i),
    transform: (i) =>
      typeof i == "string"
        ? i
        : i.hasOwnProperty("red")
        ? Ti.transform(i)
        : ha.transform(i),
    getAnimatableNone: (i) => {
      const a = kt.parse(i);
      return (a.alpha = 0), kt.transform(a);
    },
  },
  Ib =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function tS(i) {
  var a, u;
  return (
    isNaN(i) &&
    typeof i == "string" &&
    (((a = i.match(Wc)) == null ? void 0 : a.length) || 0) +
      (((u = i.match(Ib)) == null ? void 0 : u.length) || 0) >
      0
  );
}
const M0 = "number",
  D0 = "color",
  eS = "var",
  nS = "var(",
  Bp = "${}",
  iS =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ya(i) {
  const a = i.toString(),
    u = [],
    s = { color: [], number: [], var: [] },
    c = [];
  let h = 0;
  const m = a
    .replace(
      iS,
      (y) => (
        kt.test(y)
          ? (s.color.push(h), c.push(D0), u.push(kt.parse(y)))
          : y.startsWith(nS)
          ? (s.var.push(h), c.push(eS), u.push(y))
          : (s.number.push(h), c.push(M0), u.push(parseFloat(y))),
        ++h,
        Bp
      )
    )
    .split(Bp);
  return { values: u, split: m, indexes: s, types: c };
}
function aS(i) {
  return ya(i).values;
}
function C0({ split: i, types: a }) {
  const u = i.length;
  return (s) => {
    let c = "";
    for (let h = 0; h < u; h++)
      if (((c += i[h]), s[h] !== void 0)) {
        const f = a[h];
        f === M0
          ? (c += vl(s[h]))
          : f === D0
          ? (c += kt.transform(s[h]))
          : (c += s[h]);
      }
    return c;
  };
}
function lS(i) {
  return C0(ya(i));
}
const sS = (i) =>
    typeof i == "number" ? 0 : kt.test(i) ? kt.getAnimatableNone(i) : i,
  uS = (i, a) =>
    typeof i == "number"
      ? a != null && a.trim().endsWith("/")
        ? i
        : 0
      : sS(i);
function oS(i) {
  const a = ya(i);
  return C0(a)(a.values.map((s, c) => uS(s, a.split[c])));
}
const Je = {
  test: tS,
  parse: aS,
  createTransformer: lS,
  getAnimatableNone: oS,
};
function tc(i, a, u) {
  return (
    u < 0 && (u += 1),
    u > 1 && (u -= 1),
    u < 1 / 6
      ? i + (a - i) * 6 * u
      : u < 1 / 2
      ? a
      : u < 2 / 3
      ? i + (a - i) * (2 / 3 - u) * 6
      : i
  );
}
function rS({ hue: i, saturation: a, lightness: u, alpha: s }) {
  (i /= 360), (a /= 100), (u /= 100);
  let c = 0,
    h = 0,
    f = 0;
  if (!a) c = h = f = u;
  else {
    const m = u < 0.5 ? u * (1 + a) : u + a - u * a,
      y = 2 * u - m;
    (c = tc(y, m, i + 1 / 3)), (h = tc(y, m, i)), (f = tc(y, m, i - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(f * 255),
    alpha: s,
  };
}
function fu(i, a) {
  return (u) => (u > 0 ? a : i);
}
const Nt = (i, a, u) => i + (a - i) * u,
  ec = (i, a, u) => {
    const s = i * i,
      c = u * (a * a - s) + s;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  cS = [yc, Ti, ha],
  fS = (i) => cS.find((a) => a.test(i));
function _p(i) {
  const a = fS(i);
  if (!a) return !1;
  let u = a.parse(i);
  return a === ha && (u = rS(u)), u;
}
const Up = (i, a) => {
    const u = _p(i),
      s = _p(a);
    if (!u || !s) return fu(i, a);
    const c = { ...u };
    return (h) => (
      (c.red = ec(u.red, s.red, h)),
      (c.green = ec(u.green, s.green, h)),
      (c.blue = ec(u.blue, s.blue, h)),
      (c.alpha = Nt(u.alpha, s.alpha, h)),
      Ti.transform(c)
    );
  },
  gc = new Set(["none", "hidden"]);
function hS(i, a) {
  return gc.has(i) ? (u) => (u <= 0 ? i : a) : (u) => (u >= 1 ? a : i);
}
function dS(i, a) {
  return (u) => Nt(i, a, u);
}
function $c(i) {
  return typeof i == "number"
    ? dS
    : typeof i == "string"
    ? Fc(i)
      ? fu
      : kt.test(i)
      ? Up
      : yS
    : Array.isArray(i)
    ? z0
    : typeof i == "object"
    ? kt.test(i)
      ? Up
      : mS
    : fu;
}
function z0(i, a) {
  const u = [...i],
    s = u.length,
    c = i.map((h, f) => $c(h)(h, a[f]));
  return (h) => {
    for (let f = 0; f < s; f++) u[f] = c[f](h);
    return u;
  };
}
function mS(i, a) {
  const u = { ...i, ...a },
    s = {};
  for (const c in u)
    i[c] !== void 0 && a[c] !== void 0 && (s[c] = $c(i[c])(i[c], a[c]));
  return (c) => {
    for (const h in s) u[h] = s[h](c);
    return u;
  };
}
function pS(i, a) {
  const u = [],
    s = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < a.values.length; c++) {
    const h = a.types[c],
      f = i.indexes[h][s[h]],
      m = i.values[f] ?? 0;
    (u[c] = m), s[h]++;
  }
  return u;
}
const yS = (i, a) => {
  const u = Je.createTransformer(a),
    s = ya(i),
    c = ya(a);
  return s.indexes.var.length === c.indexes.var.length &&
    s.indexes.color.length === c.indexes.color.length &&
    s.indexes.number.length >= c.indexes.number.length
    ? (gc.has(i) && !c.values.length) || (gc.has(a) && !s.values.length)
      ? hS(i, a)
      : zl(z0(pS(s, c), c.values), u)
    : fu(i, a);
};
function R0(i, a, u) {
  return typeof i == "number" && typeof a == "number" && typeof u == "number"
    ? Nt(i, a, u)
    : $c(i)(i, a);
}
const gS = (i) => {
    const a = ({ timestamp: u }) => i(u);
    return {
      start: (u = !0) => vt.update(a, u),
      stop: () => qe(a),
      now: () => ($t.isProcessing ? $t.timestamp : re.now()),
    };
  },
  O0 = (i, a, u = 10) => {
    let s = "";
    const c = Math.max(Math.round(a / u), 2);
    for (let h = 0; h < c; h++)
      s += Math.round(i(h / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${s.substring(0, s.length - 2)})`;
  },
  hu = 2e4;
function Ic(i) {
  let a = 0;
  const u = 50;
  let s = i.next(a);
  for (; !s.done && a < hu; ) (a += u), (s = i.next(a));
  return a >= hu ? 1 / 0 : a;
}
function vS(i, a = 100, u) {
  const s = u({ ...i, keyframes: [0, a] }),
    c = Math.min(Ic(s), hu);
  return {
    type: "keyframes",
    ease: (h) => s.next(c * h).value / a,
    duration: Ye(c),
  };
}
const Ut = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function vc(i, a) {
  return i * Math.sqrt(1 - a * a);
}
const bS = 12;
function SS(i, a, u) {
  let s = u;
  for (let c = 1; c < bS; c++) s = s - i(s) / a(s);
  return s;
}
const nc = 0.001;
function xS({
  duration: i = Ut.duration,
  bounce: a = Ut.bounce,
  velocity: u = Ut.velocity,
  mass: s = Ut.mass,
}) {
  let c,
    h,
    f = 1 - a;
  (f = Fe(Ut.minDamping, Ut.maxDamping, f)),
    (i = Fe(Ut.minDuration, Ut.maxDuration, Ye(i))),
    f < 1
      ? ((c = (p) => {
          const v = p * f,
            b = v * i,
            S = v - u,
            M = vc(p, f),
            w = Math.exp(-b);
          return nc - (S / M) * w;
        }),
        (h = (p) => {
          const b = p * f * i,
            S = b * u + u,
            M = Math.pow(f, 2) * Math.pow(p, 2) * i,
            w = Math.exp(-b),
            U = vc(Math.pow(p, 2), f);
          return ((-c(p) + nc > 0 ? -1 : 1) * ((S - M) * w)) / U;
        }))
      : ((c = (p) => {
          const v = Math.exp(-p * i),
            b = (p - u) * i + 1;
          return -nc + v * b;
        }),
        (h = (p) => {
          const v = Math.exp(-p * i),
            b = (u - p) * (i * i);
          return v * b;
        }));
  const m = 5 / i,
    y = SS(c, h, m);
  if (((i = Re(i)), isNaN(y)))
    return { stiffness: Ut.stiffness, damping: Ut.damping, duration: i };
  {
    const p = Math.pow(y, 2) * s;
    return { stiffness: p, damping: f * 2 * Math.sqrt(s * p), duration: i };
  }
}
const TS = ["duration", "bounce"],
  AS = ["stiffness", "damping", "mass"];
function Lp(i, a) {
  return a.some((u) => i[u] !== void 0);
}
function ES(i) {
  let a = {
    velocity: Ut.velocity,
    stiffness: Ut.stiffness,
    damping: Ut.damping,
    mass: Ut.mass,
    isResolvedFromDuration: !1,
    ...i,
  };
  if (!Lp(i, AS) && Lp(i, TS))
    if (((a.velocity = 0), i.visualDuration)) {
      const u = i.visualDuration,
        s = (2 * Math.PI) / (u * 1.2),
        c = s * s,
        h = 2 * Fe(0.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c);
      a = { ...a, mass: Ut.mass, stiffness: c, damping: h };
    } else {
      const u = xS({ ...i, velocity: 0 });
      (a = { ...a, ...u, mass: Ut.mass }), (a.isResolvedFromDuration = !0);
    }
  return a;
}
function du(i = Ut.visualDuration, a = Ut.bounce) {
  const u =
    typeof i != "object"
      ? { visualDuration: i, keyframes: [0, 1], bounce: a }
      : i;
  let { restSpeed: s, restDelta: c } = u;
  const h = u.keyframes[0],
    f = u.keyframes[u.keyframes.length - 1],
    m = { done: !1, value: h },
    {
      stiffness: y,
      damping: p,
      mass: v,
      duration: b,
      velocity: S,
      isResolvedFromDuration: M,
    } = ES({ ...u, velocity: -Ye(u.velocity || 0) }),
    w = S || 0,
    U = p / (2 * Math.sqrt(y * v)),
    L = f - h,
    H = Ye(Math.sqrt(y / v)),
    G = Math.abs(L) < 5;
  s || (s = G ? Ut.restSpeed.granular : Ut.restSpeed.default),
    c || (c = G ? Ut.restDelta.granular : Ut.restDelta.default);
  let Y, X, k, lt, I, $;
  if (U < 1)
    (k = vc(H, U)),
      (lt = (w + U * H * L) / k),
      (Y = (tt) => {
        const pt = Math.exp(-U * H * tt);
        return f - pt * (lt * Math.sin(k * tt) + L * Math.cos(k * tt));
      }),
      (I = U * H * lt + L * k),
      ($ = U * H * L - lt * k),
      (X = (tt) =>
        Math.exp(-U * H * tt) * (I * Math.sin(k * tt) + $ * Math.cos(k * tt)));
  else if (U === 1) {
    Y = (pt) => f - Math.exp(-H * pt) * (L + (w + H * L) * pt);
    const tt = w + H * L;
    X = (pt) => Math.exp(-H * pt) * (H * tt * pt - w);
  } else {
    const tt = H * Math.sqrt(U * U - 1);
    Y = (Gt) => {
      const Lt = Math.exp(-U * H * Gt),
        V = Math.min(tt * Gt, 300);
      return (
        f - (Lt * ((w + U * H * L) * Math.sinh(V) + tt * L * Math.cosh(V))) / tt
      );
    };
    const pt = (w + U * H * L) / tt,
      bt = U * H * pt - L * tt,
      It = U * H * L - pt * tt;
    X = (Gt) => {
      const Lt = Math.exp(-U * H * Gt),
        V = Math.min(tt * Gt, 300);
      return Lt * (bt * Math.sinh(V) + It * Math.cosh(V));
    };
  }
  const it = {
    calculatedDuration: (M && b) || null,
    velocity: (tt) => Re(X(tt)),
    next: (tt) => {
      if (!M && U < 1) {
        const bt = Math.exp(-U * H * tt),
          It = Math.sin(k * tt),
          Gt = Math.cos(k * tt),
          Lt = f - bt * (lt * It + L * Gt),
          V = Re(bt * (I * It + $ * Gt));
        return (
          (m.done = Math.abs(V) <= s && Math.abs(f - Lt) <= c),
          (m.value = m.done ? f : Lt),
          m
        );
      }
      const pt = Y(tt);
      if (M) m.done = tt >= b;
      else {
        const bt = Re(X(tt));
        m.done = Math.abs(bt) <= s && Math.abs(f - pt) <= c;
      }
      return (m.value = m.done ? f : pt), m;
    },
    toString: () => {
      const tt = Math.min(Ic(it), hu),
        pt = O0((bt) => it.next(tt * bt).value, tt, 30);
      return tt + "ms " + pt;
    },
    toTransition: () => {},
  };
  return it;
}
du.applyToOptions = (i) => {
  const a = vS(i, 100, du);
  return (
    (i.ease = a.ease), (i.duration = Re(a.duration)), (i.type = "keyframes"), i
  );
};
const MS = 5;
function w0(i, a, u) {
  const s = Math.max(a - MS, 0);
  return Kc(u - i(s), a - s);
}
function bc({
  keyframes: i,
  velocity: a = 0,
  power: u = 0.8,
  timeConstant: s = 325,
  bounceDamping: c = 10,
  bounceStiffness: h = 500,
  modifyTarget: f,
  min: m,
  max: y,
  restDelta: p = 0.5,
  restSpeed: v,
}) {
  const b = i[0],
    S = { done: !1, value: b },
    M = ($) => (m !== void 0 && $ < m) || (y !== void 0 && $ > y),
    w = ($) =>
      m === void 0
        ? y
        : y === void 0 || Math.abs(m - $) < Math.abs(y - $)
        ? m
        : y;
  let U = u * a;
  const L = b + U,
    H = f === void 0 ? L : f(L);
  H !== L && (U = H - b);
  const G = ($) => -U * Math.exp(-$ / s),
    Y = ($) => H + G($),
    X = ($) => {
      const it = G($),
        tt = Y($);
      (S.done = Math.abs(it) <= p), (S.value = S.done ? H : tt);
    };
  let k, lt;
  const I = ($) => {
    M(S.value) &&
      ((k = $),
      (lt = du({
        keyframes: [S.value, w(S.value)],
        velocity: w0(Y, $, S.value),
        damping: c,
        stiffness: h,
        restDelta: p,
        restSpeed: v,
      })));
  };
  return (
    I(0),
    {
      calculatedDuration: null,
      next: ($) => {
        let it = !1;
        return (
          !lt && k === void 0 && ((it = !0), X($), I($)),
          k !== void 0 && $ >= k ? lt.next($ - k) : (!it && X($), S)
        );
      },
    }
  );
}
function DS(i, a, u) {
  const s = [],
    c = u || In.mix || R0,
    h = i.length - 1;
  for (let f = 0; f < h; f++) {
    let m = c(i[f], i[f + 1]);
    if (a) {
      const y = Array.isArray(a) ? a[f] || ve : a;
      m = zl(y, m);
    }
    s.push(m);
  }
  return s;
}
function tf(i, a, { clamp: u = !0, ease: s, mixer: c } = {}) {
  const h = i.length;
  if ((El(h === a.length), h === 1)) return () => a[0];
  if (h === 2 && a[0] === a[1]) return () => a[1];
  const f = i[0] === i[1];
  i[0] > i[h - 1] && ((i = [...i].reverse()), (a = [...a].reverse()));
  const m = DS(a, s, c),
    y = m.length,
    p = (v) => {
      if (f && v < i[0]) return a[0];
      let b = 0;
      if (y > 1) for (; b < i.length - 2 && !(v < i[b + 1]); b++);
      const S = pa(i[b], i[b + 1], v);
      return m[b](S);
    };
  return u ? (v) => p(Fe(i[0], i[h - 1], v)) : p;
}
function CS(i, a) {
  const u = i[i.length - 1];
  for (let s = 1; s <= a; s++) {
    const c = pa(0, a, s);
    i.push(Nt(u, 1, c));
  }
}
function V0(i) {
  const a = [0];
  return CS(a, i.length - 1), a;
}
function zS(i, a) {
  return i.map((u) => u * a);
}
function RS(i, a) {
  return i.map(() => a || b0).splice(0, i.length - 1);
}
function bl({
  duration: i = 300,
  keyframes: a,
  times: u,
  ease: s = "easeInOut",
}) {
  const c = Hb(s) ? s.map(Vp) : Vp(s),
    h = { done: !1, value: a[0] },
    f = zS(u && u.length === a.length ? u : V0(a), i),
    m = tf(f, a, { ease: Array.isArray(c) ? c : RS(a, c) });
  return {
    calculatedDuration: i,
    next: (y) => ((h.value = m(y)), (h.done = y >= i), h),
  };
}
const OS = (i) => i !== null;
function Tu(i, { repeat: a, repeatType: u = "loop" }, s, c = 1) {
  const h = i.filter(OS),
    m = c < 0 || (a && u !== "loop" && a % 2 === 1) ? 0 : h.length - 1;
  return !m || s === void 0 ? h[m] : s;
}
const wS = { decay: bc, inertia: bc, tween: bl, keyframes: bl, spring: du };
function N0(i) {
  typeof i.type == "string" && (i.type = wS[i.type]);
}
class ef {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((a) => {
      this.resolve = a;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(a, u) {
    return this.finished.then(a, u);
  }
}
const VS = (i) => i / 100;
class mu extends ef {
  constructor(a) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var s, c;
        const { motionValue: u } = this.options;
        u && u.updatedAt !== re.now() && this.tick(re.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (c = (s = this.options).onStop) == null || c.call(s));
      }),
      (this.options = a),
      this.initAnimation(),
      this.play(),
      a.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: a } = this;
    N0(a);
    const {
      type: u = bl,
      repeat: s = 0,
      repeatDelay: c = 0,
      repeatType: h,
      velocity: f = 0,
    } = a;
    let { keyframes: m } = a;
    const y = u || bl;
    y !== bl &&
      typeof m[0] != "number" &&
      ((this.mixKeyframes = zl(VS, R0(m[0], m[1]))), (m = [0, 100]));
    const p = y({ ...a, keyframes: m });
    h === "mirror" &&
      (this.mirroredGenerator = y({
        ...a,
        keyframes: [...m].reverse(),
        velocity: -f,
      })),
      p.calculatedDuration === null && (p.calculatedDuration = Ic(p));
    const { calculatedDuration: v } = p;
    (this.calculatedDuration = v),
      (this.resolvedDuration = v + c),
      (this.totalDuration = this.resolvedDuration * (s + 1) - c),
      (this.generator = p);
  }
  updateTime(a) {
    const u = Math.round(a - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = u);
  }
  tick(a, u = !1) {
    const {
      generator: s,
      totalDuration: c,
      mixKeyframes: h,
      mirroredGenerator: f,
      resolvedDuration: m,
      calculatedDuration: y,
    } = this;
    if (this.startTime === null) return s.next(0);
    const {
      delay: p = 0,
      keyframes: v,
      repeat: b,
      repeatType: S,
      repeatDelay: M,
      type: w,
      onUpdate: U,
      finalKeyframe: L,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, a))
      : this.speed < 0 &&
        (this.startTime = Math.min(a - c / this.speed, this.startTime)),
      u ? (this.currentTime = a) : this.updateTime(a);
    const H = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1),
      G = this.playbackSpeed >= 0 ? H < 0 : H > c;
    (this.currentTime = Math.max(H, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let Y = this.currentTime,
      X = s;
    if (b) {
      const $ = Math.min(this.currentTime, c) / m;
      let it = Math.floor($),
        tt = $ % 1;
      !tt && $ >= 1 && (tt = 1),
        tt === 1 && it--,
        (it = Math.min(it, b + 1)),
        !!(it % 2) &&
          (S === "reverse"
            ? ((tt = 1 - tt), M && (tt -= M / m))
            : S === "mirror" && (X = f)),
        (Y = Fe(0, 1, tt) * m);
    }
    let k;
    G
      ? ((this.delayState.value = v[0]), (k = this.delayState))
      : (k = X.next(Y)),
      h && !G && (k.value = h(k.value));
    let { done: lt } = k;
    !G &&
      y !== null &&
      (lt =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const I =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && lt));
    return (
      I && w !== bc && (k.value = Tu(v, this.options, L, this.speed)),
      U && U(k.value),
      I && this.finish(),
      k
    );
  }
  then(a, u) {
    return this.finished.then(a, u);
  }
  get duration() {
    return Ye(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: a = 0 } = this.options || {};
    return this.duration + Ye(a);
  }
  get time() {
    return Ye(this.currentTime);
  }
  set time(a) {
    (a = Re(a)),
      (this.currentTime = a),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = a)
        : this.driver &&
          (this.startTime = this.driver.now() - a / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = a),
          this.tick(a));
  }
  getGeneratorVelocity() {
    const a = this.currentTime;
    if (a <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(a);
    const u = this.generator.next(a).value;
    return w0((s) => this.generator.next(s).value, a, u);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(a) {
    const u = this.playbackSpeed !== a;
    u && this.driver && this.updateTime(re.now()),
      (this.playbackSpeed = a),
      u && this.driver && (this.time = Ye(this.currentTime));
  }
  play() {
    var c, h;
    if (this.isStopped) return;
    const { driver: a = gS, startTime: u } = this.options;
    this.driver || (this.driver = a((f) => this.tick(f))),
      (h = (c = this.options).onPlay) == null || h.call(c);
    const s = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = s))
      : this.holdTime !== null
      ? (this.startTime = s - this.holdTime)
      : this.startTime || (this.startTime = u ?? s),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(re.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var a, u;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (u = (a = this.options).onComplete) == null || u.call(a);
  }
  cancel() {
    var a, u;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (u = (a = this.options).onCancel) == null || u.call(a);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(a) {
    return (this.startTime = 0), this.tick(a, !0);
  }
  attachTimeline(a) {
    var u;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (u = this.driver) == null || u.stop(),
      a.observe(this)
    );
  }
}
function NS(i) {
  for (let a = 1; a < i.length; a++) i[a] ?? (i[a] = i[a - 1]);
}
const Ai = (i) => (i * 180) / Math.PI,
  Sc = (i) => {
    const a = Ai(Math.atan2(i[1], i[0]));
    return xc(a);
  },
  jS = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
    rotate: Sc,
    rotateZ: Sc,
    skewX: (i) => Ai(Math.atan(i[1])),
    skewY: (i) => Ai(Math.atan(i[2])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2,
  },
  xc = (i) => ((i = i % 360), i < 0 && (i += 360), i),
  Hp = Sc,
  Yp = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]),
  qp = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]),
  BS = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Yp,
    scaleY: qp,
    scale: (i) => (Yp(i) + qp(i)) / 2,
    rotateX: (i) => xc(Ai(Math.atan2(i[6], i[5]))),
    rotateY: (i) => xc(Ai(Math.atan2(-i[2], i[0]))),
    rotateZ: Hp,
    rotate: Hp,
    skewX: (i) => Ai(Math.atan(i[4])),
    skewY: (i) => Ai(Math.atan(i[1])),
    skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2,
  };
function Tc(i) {
  return i.includes("scale") ? 1 : 0;
}
function Ac(i, a) {
  if (!i || i === "none") return Tc(a);
  const u = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, c;
  if (u) (s = BS), (c = u);
  else {
    const m = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (s = jS), (c = m);
  }
  if (!c) return Tc(a);
  const h = s[a],
    f = c[1].split(",").map(US);
  return typeof h == "function" ? h(f) : f[h];
}
const _S = (i, a) => {
  const { transform: u = "none" } = getComputedStyle(i);
  return Ac(u, a);
};
function US(i) {
  return parseFloat(i.trim());
}
const va = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ba = new Set(va),
  Gp = (i) => i === ga || i === F,
  LS = new Set(["x", "y", "z"]),
  HS = va.filter((i) => !LS.has(i));
function YS(i) {
  const a = [];
  return (
    HS.forEach((u) => {
      const s = i.getValue(u);
      s !== void 0 &&
        (a.push([u, s.get()]), s.set(u.startsWith("scale") ? 1 : 0));
    }),
    a
  );
}
const Pn = {
  width: (
    { x: i },
    { paddingLeft: a = "0", paddingRight: u = "0", boxSizing: s }
  ) => {
    const c = i.max - i.min;
    return s === "border-box" ? c : c - parseFloat(a) - parseFloat(u);
  },
  height: (
    { y: i },
    { paddingTop: a = "0", paddingBottom: u = "0", boxSizing: s }
  ) => {
    const c = i.max - i.min;
    return s === "border-box" ? c : c - parseFloat(a) - parseFloat(u);
  },
  top: (i, { top: a }) => parseFloat(a),
  left: (i, { left: a }) => parseFloat(a),
  bottom: ({ y: i }, { top: a }) => parseFloat(a) + (i.max - i.min),
  right: ({ x: i }, { left: a }) => parseFloat(a) + (i.max - i.min),
  x: (i, { transform: a }) => Ac(a, "x"),
  y: (i, { transform: a }) => Ac(a, "y"),
};
Pn.translateX = Pn.x;
Pn.translateY = Pn.y;
const Ei = new Set();
let Ec = !1,
  Mc = !1,
  Dc = !1;
function j0() {
  if (Mc) {
    const i = Array.from(Ei).filter((s) => s.needsMeasurement),
      a = new Set(i.map((s) => s.element)),
      u = new Map();
    a.forEach((s) => {
      const c = YS(s);
      c.length && (u.set(s, c), s.render());
    }),
      i.forEach((s) => s.measureInitialState()),
      a.forEach((s) => {
        s.render();
        const c = u.get(s);
        c &&
          c.forEach(([h, f]) => {
            var m;
            (m = s.getValue(h)) == null || m.set(f);
          });
      }),
      i.forEach((s) => s.measureEndState()),
      i.forEach((s) => {
        s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
      });
  }
  (Mc = !1), (Ec = !1), Ei.forEach((i) => i.complete(Dc)), Ei.clear();
}
function B0() {
  Ei.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (Mc = !0);
  });
}
function qS() {
  (Dc = !0), B0(), j0(), (Dc = !1);
}
class nf {
  constructor(a, u, s, c, h, f = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...a]),
      (this.onComplete = u),
      (this.name = s),
      (this.motionValue = c),
      (this.element = h),
      (this.isAsync = f);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (Ei.add(this),
          Ec || ((Ec = !0), vt.read(B0), vt.resolveKeyframes(j0)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: a,
      name: u,
      element: s,
      motionValue: c,
    } = this;
    if (a[0] === null) {
      const h = c == null ? void 0 : c.get(),
        f = a[a.length - 1];
      if (h !== void 0) a[0] = h;
      else if (s && u) {
        const m = s.readValue(u, f);
        m != null && (a[0] = m);
      }
      a[0] === void 0 && (a[0] = f), c && h === void 0 && c.set(a[0]);
    }
    NS(a);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(a = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, a),
      Ei.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ei.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const GS = (i) => i.startsWith("--");
function _0(i, a, u) {
  GS(a) ? i.style.setProperty(a, u) : (i.style[a] = u);
}
const XS = {};
function af(i, a) {
  const u = c0(i);
  return () => XS[a] ?? u();
}
const lf = af(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  U0 = af(() => window.ViewTimeline !== void 0, "viewTimeline"),
  L0 = af(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  yl = ([i, a, u, s]) => `cubic-bezier(${i}, ${a}, ${u}, ${s})`,
  Xp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: yl([0, 0.65, 0.55, 1]),
    circOut: yl([0.55, 0, 1, 0.45]),
    backIn: yl([0.31, 0.01, 0.66, -0.59]),
    backOut: yl([0.33, 1.53, 0.69, 0.99]),
  };
function H0(i, a) {
  if (i)
    return typeof i == "function"
      ? L0()
        ? O0(i, a)
        : "ease-out"
      : S0(i)
      ? yl(i)
      : Array.isArray(i)
      ? i.map((u) => H0(u, a) || Xp.easeOut)
      : Xp[i];
}
function QS(
  i,
  a,
  u,
  {
    delay: s = 0,
    duration: c = 300,
    repeat: h = 0,
    repeatType: f = "loop",
    ease: m = "easeOut",
    times: y,
  } = {},
  p = void 0
) {
  const v = { [a]: u };
  y && (v.offset = y);
  const b = H0(m, c);
  Array.isArray(b) && (v.easing = b);
  const S = {
    delay: s,
    duration: c,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: h + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return p && (S.pseudoElement = p), i.animate(v, S);
}
function Y0(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function ZS({ type: i, ...a }) {
  return Y0(i) && L0()
    ? i.applyToOptions(a)
    : (a.duration ?? (a.duration = 300), a.ease ?? (a.ease = "easeOut"), a);
}
class q0 extends ef {
  constructor(a) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !a)
    )
      return;
    const {
      element: u,
      name: s,
      keyframes: c,
      pseudoElement: h,
      allowFlatten: f = !1,
      finalKeyframe: m,
      onComplete: y,
    } = a;
    (this.isPseudoElement = !!h),
      (this.allowFlatten = f),
      (this.options = a),
      El(typeof a.type != "string");
    const p = ZS(a);
    (this.animation = QS(u, s, c, p, h)),
      p.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !h)) {
          const v = Tu(c, this.options, m, this.speed);
          this.updateMotionValue && this.updateMotionValue(v),
            _0(u, s, v),
            this.animation.cancel();
        }
        y == null || y(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var a, u;
    (u = (a = this.animation).finish) == null || u.call(a);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: a } = this;
    a === "idle" ||
      a === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var u, s, c;
    const a = (u = this.options) == null ? void 0 : u.element;
    !this.isPseudoElement &&
      a != null &&
      a.isConnected &&
      ((c = (s = this.animation).commitStyles) == null || c.call(s));
  }
  get duration() {
    var u, s;
    const a =
      ((s =
        (u = this.animation.effect) == null ? void 0 : u.getComputedTiming) ==
      null
        ? void 0
        : s.call(u).duration) || 0;
    return Ye(Number(a));
  }
  get iterationDuration() {
    const { delay: a = 0 } = this.options || {};
    return this.duration + Ye(a);
  }
  get time() {
    return Ye(Number(this.animation.currentTime) || 0);
  }
  set time(a) {
    const u = this.finishedTime !== null;
    (this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = Re(a)),
      u && this.animation.pause();
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(a) {
    a < 0 && (this.finishedTime = null), (this.animation.playbackRate = a);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(a) {
    this.manualStartTime = this.animation.startTime = a;
  }
  attachTimeline({ timeline: a, rangeStart: u, rangeEnd: s, observe: c }) {
    var h;
    return (
      this.allowFlatten &&
        ((h = this.animation.effect) == null ||
          h.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      a && lf()
        ? ((this.animation.timeline = a),
          u && (this.animation.rangeStart = u),
          s && (this.animation.rangeEnd = s),
          ve)
        : c(this)
    );
  }
}
const G0 = { anticipate: y0, backInOut: p0, circInOut: v0 };
function KS(i) {
  return i in G0;
}
function kS(i) {
  typeof i.ease == "string" && KS(i.ease) && (i.ease = G0[i.ease]);
}
const ic = 10;
class JS extends q0 {
  constructor(a) {
    kS(a),
      N0(a),
      super(a),
      a.startTime !== void 0 &&
        a.autoplay !== !1 &&
        (this.startTime = a.startTime),
      (this.options = a);
  }
  updateMotionValue(a) {
    const {
      motionValue: u,
      onUpdate: s,
      onComplete: c,
      element: h,
      ...f
    } = this.options;
    if (!u) return;
    if (a !== void 0) {
      u.set(a);
      return;
    }
    const m = new mu({ ...f, autoplay: !1 }),
      y = Math.max(ic, re.now() - this.startTime),
      p = Fe(0, ic, y - ic),
      v = m.sample(y).value,
      { name: b } = this.options;
    h && b && _0(h, b, v),
      u.setWithVelocity(m.sample(Math.max(0, y - p)).value, v, p),
      m.stop();
  }
}
const Qp = (i, a) =>
  a === "zIndex"
    ? !1
    : !!(
        typeof i == "number" ||
        Array.isArray(i) ||
        (typeof i == "string" &&
          (Je.test(i) || i === "0") &&
          !i.startsWith("url("))
      );
function FS(i) {
  const a = i[0];
  if (i.length === 1) return !0;
  for (let u = 0; u < i.length; u++) if (i[u] !== a) return !0;
}
function WS(i, a, u, s) {
  const c = i[0];
  if (c === null) return !1;
  if (a === "display" || a === "visibility") return !0;
  const h = i[i.length - 1],
    f = Qp(c, a),
    m = Qp(h, a);
  return !f || !m ? !1 : FS(i) || ((u === "spring" || Y0(u)) && s);
}
function Cc(i) {
  (i.duration = 0), (i.type = "keyframes");
}
const X0 = new Set(["opacity", "clipPath", "filter", "transform"]),
  PS = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function $S(i) {
  for (let a = 0; a < i.length; a++)
    if (typeof i[a] == "string" && PS.test(i[a])) return !0;
  return !1;
}
const IS = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  tx = c0(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ex(i) {
  var b;
  const {
    motionValue: a,
    name: u,
    repeatDelay: s,
    repeatType: c,
    damping: h,
    type: f,
    keyframes: m,
  } = i;
  if (
    !(
      ((b = a == null ? void 0 : a.owner) == null
        ? void 0
        : b.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: p, transformTemplate: v } = a.owner.getProps();
  return (
    tx() &&
    u &&
    (X0.has(u) || (IS.has(u) && $S(m))) &&
    (u !== "transform" || !v) &&
    !p &&
    !s &&
    c !== "mirror" &&
    h !== 0 &&
    f !== "inertia"
  );
}
const nx = 40;
class ix extends ef {
  constructor({
    autoplay: a = !0,
    delay: u = 0,
    type: s = "keyframes",
    repeat: c = 0,
    repeatDelay: h = 0,
    repeatType: f = "loop",
    keyframes: m,
    name: y,
    motionValue: p,
    element: v,
    ...b
  }) {
    var w;
    super(),
      (this.stop = () => {
        var U, L;
        this._animation &&
          (this._animation.stop(),
          (U = this.stopTimeline) == null || U.call(this)),
          (L = this.keyframeResolver) == null || L.cancel();
      }),
      (this.createdAt = re.now());
    const S = {
        autoplay: a,
        delay: u,
        type: s,
        repeat: c,
        repeatDelay: h,
        repeatType: f,
        name: y,
        motionValue: p,
        element: v,
        ...b,
      },
      M = (v == null ? void 0 : v.KeyframeResolver) || nf;
    (this.keyframeResolver = new M(
      m,
      (U, L, H) => this.onKeyframesResolved(U, L, S, !H),
      y,
      p,
      v
    )),
      (w = this.keyframeResolver) == null || w.scheduleResolve();
  }
  onKeyframesResolved(a, u, s, c) {
    var H, G;
    this.keyframeResolver = void 0;
    const {
      name: h,
      type: f,
      velocity: m,
      delay: y,
      isHandoff: p,
      onUpdate: v,
    } = s;
    this.resolvedAt = re.now();
    let b = !0;
    WS(a, h, f, m) ||
      ((b = !1),
      (In.instantAnimations || !y) && (v == null || v(Tu(a, s, u))),
      (a[0] = a[a.length - 1]),
      Cc(s),
      (s.repeat = 0));
    const M = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > nx
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: u,
        ...s,
        keyframes: a,
      },
      w = b && !p && ex(M),
      U =
        (G = (H = M.motionValue) == null ? void 0 : H.owner) == null
          ? void 0
          : G.current;
    let L;
    if (w)
      try {
        L = new JS({ ...M, element: U });
      } catch {
        L = new mu(M);
      }
    else L = new mu(M);
    L.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(ve),
      this.pendingTimeline &&
        ((this.stopTimeline = L.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = L);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(a, u) {
    return this.finished.finally(a).then(() => {});
  }
  get animation() {
    var a;
    return (
      this._animation ||
        ((a = this.keyframeResolver) == null || a.resume(), qS()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(a) {
    this.animation.time = a;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(a) {
    this.animation.speed = a;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(a) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(a))
        : (this.pendingTimeline = a),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var a;
    this._animation && this.animation.cancel(),
      (a = this.keyframeResolver) == null || a.cancel();
  }
}
function Q0(i, a, u, s = 0, c = 1) {
  const h = Array.from(i)
      .sort((p, v) => p.sortNodePosition(v))
      .indexOf(a),
    f = i.size,
    m = (f - 1) * s;
  return typeof u == "function" ? u(h, f) : c === 1 ? h * s : m - h * s;
}
const ax = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function lx(i) {
  const a = ax.exec(i);
  if (!a) return [,];
  const [, u, s, c] = a;
  return [`--${u ?? s}`, c];
}
function Z0(i, a, u = 1) {
  const [s, c] = lx(i);
  if (!s) return;
  const h = window.getComputedStyle(a).getPropertyValue(s);
  if (h) {
    const f = h.trim();
    return u0(f) ? parseFloat(f) : f;
  }
  return Fc(c) ? Z0(c, a, u + 1) : c;
}
const sx = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  ux = (i) => ({
    type: "spring",
    stiffness: 550,
    damping: i === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  ox = { type: "keyframes", duration: 0.8 },
  rx = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  cx = (i, { keyframes: a }) =>
    a.length > 2
      ? ox
      : ba.has(i)
      ? i.startsWith("scale")
        ? ux(a[1])
        : sx
      : rx;
function K0(i, a) {
  if (i != null && i.inherit && a) {
    const { inherit: u, ...s } = i;
    return { ...a, ...s };
  }
  return i;
}
function sf(i, a) {
  const u =
    (i == null ? void 0 : i[a]) ?? (i == null ? void 0 : i.default) ?? i;
  return u !== i ? K0(u, i) : u;
}
const fx = new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed",
]);
function hx(i) {
  for (const a in i) if (!fx.has(a)) return !0;
  return !1;
}
const uf =
  (i, a, u, s = {}, c, h) =>
  (f) => {
    const m = sf(s, i) || {},
      y = m.delay || s.delay || 0;
    let { elapsed: p = 0 } = s;
    p = p - Re(y);
    const v = {
      keyframes: Array.isArray(u) ? u : [null, u],
      ease: "easeOut",
      velocity: a.getVelocity(),
      ...m,
      delay: -p,
      onUpdate: (S) => {
        a.set(S), m.onUpdate && m.onUpdate(S);
      },
      onComplete: () => {
        f(), m.onComplete && m.onComplete();
      },
      name: i,
      motionValue: a,
      element: h ? void 0 : c,
    };
    hx(m) || Object.assign(v, cx(i, v)),
      v.duration && (v.duration = Re(v.duration)),
      v.repeatDelay && (v.repeatDelay = Re(v.repeatDelay)),
      v.from !== void 0 && (v.keyframes[0] = v.from);
    let b = !1;
    if (
      ((v.type === !1 || (v.duration === 0 && !v.repeatDelay)) &&
        (Cc(v), v.delay === 0 && (b = !0)),
      (In.instantAnimations ||
        In.skipAnimations ||
        (c != null && c.shouldSkipAnimations)) &&
        ((b = !0), Cc(v), (v.delay = 0)),
      (v.allowFlatten = !m.type && !m.ease),
      b && !h && a.get() !== void 0)
    ) {
      const S = Tu(v.keyframes, m);
      if (S !== void 0) {
        vt.update(() => {
          v.onUpdate(S), v.onComplete();
        });
        return;
      }
    }
    return m.isSync ? new mu(v) : new ix(v);
  };
function Zp(i) {
  const a = [{}, {}];
  return (
    i == null ||
      i.values.forEach((u, s) => {
        (a[0][s] = u.get()), (a[1][s] = u.getVelocity());
      }),
    a
  );
}
function of(i, a, u, s) {
  if (typeof a == "function") {
    const [c, h] = Zp(s);
    a = a(u !== void 0 ? u : i.custom, c, h);
  }
  if (
    (typeof a == "string" && (a = i.variants && i.variants[a]),
    typeof a == "function")
  ) {
    const [c, h] = Zp(s);
    a = a(u !== void 0 ? u : i.custom, c, h);
  }
  return a;
}
function Mi(i, a, u) {
  const s = i.getProps();
  return of(s, a, u !== void 0 ? u : s.custom, i);
}
const k0 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...va,
  ]),
  Kp = 30,
  dx = (i) => !isNaN(parseFloat(i)),
  Sl = { current: void 0 };
class mx {
  constructor(a, u = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (s) => {
        var h;
        const c = re.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(s),
          this.current !== this.prev &&
            ((h = this.events.change) == null || h.notify(this.current),
            this.dependents))
        )
          for (const f of this.dependents) f.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(a),
      (this.owner = u.owner);
  }
  setCurrent(a) {
    (this.current = a),
      (this.updatedAt = re.now()),
      this.canTrackVelocity === null &&
        a !== void 0 &&
        (this.canTrackVelocity = dx(this.current));
  }
  setPrevFrameValue(a = this.current) {
    (this.prevFrameValue = a), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(a) {
    return this.on("change", a);
  }
  on(a, u) {
    this.events[a] || (this.events[a] = new Zc());
    const s = this.events[a].add(u);
    return a === "change"
      ? () => {
          s(),
            vt.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : s;
  }
  clearListeners() {
    for (const a in this.events) this.events[a].clear();
  }
  attach(a, u) {
    (this.passiveEffect = a), (this.stopPassiveEffect = u);
  }
  set(a) {
    this.passiveEffect
      ? this.passiveEffect(a, this.updateAndNotify)
      : this.updateAndNotify(a);
  }
  setWithVelocity(a, u, s) {
    this.set(u),
      (this.prev = void 0),
      (this.prevFrameValue = a),
      (this.prevUpdatedAt = this.updatedAt - s);
  }
  jump(a, u = !0) {
    this.updateAndNotify(a),
      (this.prev = a),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      u && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var a;
    (a = this.events.change) == null || a.notify(this.current);
  }
  addDependent(a) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(a);
  }
  removeDependent(a) {
    this.dependents && this.dependents.delete(a);
  }
  get() {
    return Sl.current && Sl.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const a = re.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      a - this.updatedAt > Kp
    )
      return 0;
    const u = Math.min(this.updatedAt - this.prevUpdatedAt, Kp);
    return Kc(parseFloat(this.current) - parseFloat(this.prevFrameValue), u);
  }
  start(a) {
    return (
      this.stop(),
      new Promise((u) => {
        (this.hasAnimated = !0),
          (this.animation = a(u)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var a, u;
    (a = this.dependents) == null || a.clear(),
      (u = this.events.destroy) == null || u.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ke(i, a) {
  return new mx(i, a);
}
const zc = (i) => Array.isArray(i);
function px(i, a, u) {
  i.hasValue(a) ? i.getValue(a).set(u) : i.addValue(a, ke(u));
}
function yx(i) {
  return zc(i) ? i[i.length - 1] || 0 : i;
}
function gx(i, a) {
  const u = Mi(i, a);
  let { transitionEnd: s = {}, transition: c = {}, ...h } = u || {};
  h = { ...h, ...s };
  for (const f in h) {
    const m = yx(h[f]);
    px(i, f, m);
  }
}
const le = (i) => !!(i && i.getVelocity);
function vx(i) {
  return !!(le(i) && i.add);
}
function Rc(i, a) {
  const u = i.getValue("willChange");
  if (vx(u)) return u.add(a);
  if (!u && In.WillChange) {
    const s = new In.WillChange("auto");
    i.addValue("willChange", s), s.add(a);
  }
}
function rf(i) {
  return i.replace(/([A-Z])/g, (a) => `-${a.toLowerCase()}`);
}
const bx = "framerAppearId",
  J0 = "data-" + rf(bx);
function F0(i) {
  return i.props[J0];
}
function Sx({ protectedKeys: i, needsAnimating: a }, u) {
  const s = i.hasOwnProperty(u) && a[u] !== !0;
  return (a[u] = !1), s;
}
function W0(i, a, { delay: u = 0, transitionOverride: s, type: c } = {}) {
  let { transition: h, transitionEnd: f, ...m } = a;
  const y = i.getDefaultTransition();
  h = h ? K0(h, y) : y;
  const p = h == null ? void 0 : h.reduceMotion;
  s && (h = s);
  const v = [],
    b = c && i.animationState && i.animationState.getState()[c];
  for (const S in m) {
    const M = i.getValue(S, i.latestValues[S] ?? null),
      w = m[S];
    if (w === void 0 || (b && Sx(b, S))) continue;
    const U = { delay: u, ...sf(h || {}, S) },
      L = M.get();
    if (
      L !== void 0 &&
      !M.isAnimating() &&
      !Array.isArray(w) &&
      w === L &&
      !U.velocity
    ) {
      vt.update(() => M.set(w));
      continue;
    }
    let H = !1;
    if (window.MotionHandoffAnimation) {
      const X = F0(i);
      if (X) {
        const k = window.MotionHandoffAnimation(X, S, vt);
        k !== null && ((U.startTime = k), (H = !0));
      }
    }
    Rc(i, S);
    const G = p ?? i.shouldReduceMotion;
    M.start(uf(S, M, w, G && k0.has(S) ? { type: !1 } : U, i, H));
    const Y = M.animation;
    Y && v.push(Y);
  }
  if (f) {
    const S = () =>
      vt.update(() => {
        f && gx(i, f);
      });
    v.length ? Promise.all(v).then(S) : S();
  }
  return v;
}
function Oc(i, a, u = {}) {
  var y;
  const s = Mi(
    i,
    a,
    u.type === "exit"
      ? (y = i.presenceContext) == null
        ? void 0
        : y.custom
      : void 0
  );
  let { transition: c = i.getDefaultTransition() || {} } = s || {};
  u.transitionOverride && (c = u.transitionOverride);
  const h = s ? () => Promise.all(W0(i, s, u)) : () => Promise.resolve(),
    f =
      i.variantChildren && i.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: v = 0,
              staggerChildren: b,
              staggerDirection: S,
            } = c;
            return xx(i, a, p, v, b, S, u);
          }
        : () => Promise.resolve(),
    { when: m } = c;
  if (m) {
    const [p, v] = m === "beforeChildren" ? [h, f] : [f, h];
    return p().then(() => v());
  } else return Promise.all([h(), f(u.delay)]);
}
function xx(i, a, u = 0, s = 0, c = 0, h = 1, f) {
  const m = [];
  for (const y of i.variantChildren)
    y.notify("AnimationStart", a),
      m.push(
        Oc(y, a, {
          ...f,
          delay:
            u +
            (typeof s == "function" ? 0 : s) +
            Q0(i.variantChildren, y, s, c, h),
        }).then(() => y.notify("AnimationComplete", a))
      );
  return Promise.all(m);
}
function Tx(i, a, u = {}) {
  i.notify("AnimationStart", a);
  let s;
  if (Array.isArray(a)) {
    const c = a.map((h) => Oc(i, h, u));
    s = Promise.all(c);
  } else if (typeof a == "string") s = Oc(i, a, u);
  else {
    const c = typeof a == "function" ? Mi(i, a, u.custom) : a;
    s = Promise.all(W0(i, c, u));
  }
  return s.then(() => {
    i.notify("AnimationComplete", a);
  });
}
const Ax = { test: (i) => i === "auto", parse: (i) => i },
  P0 = (i) => (a) => a.test(i),
  $0 = [ga, F, an, Fn, $b, Pb, Ax],
  kp = (i) => $0.find(P0(i));
function Ex(i) {
  return typeof i == "number"
    ? i === 0
    : i !== null
    ? i === "none" || i === "0" || r0(i)
    : !0;
}
const Mx = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Dx(i) {
  const [a, u] = i.slice(0, -1).split("(");
  if (a === "drop-shadow") return i;
  const [s] = u.match(Wc) || [];
  if (!s) return i;
  const c = u.replace(s, "");
  let h = Mx.has(a) ? 1 : 0;
  return s !== u && (h *= 100), a + "(" + h + c + ")";
}
const Cx = /\b([a-z-]*)\(.*?\)/gu,
  wc = {
    ...Je,
    getAnimatableNone: (i) => {
      const a = i.match(Cx);
      return a ? a.map(Dx).join(" ") : i;
    },
  },
  Vc = {
    ...Je,
    getAnimatableNone: (i) => {
      const a = Je.parse(i);
      return Je.createTransformer(i)(
        a.map((s) =>
          typeof s == "number"
            ? 0
            : typeof s == "object"
            ? { ...s, alpha: 1 }
            : s
        )
      );
    },
  },
  Jp = { ...ga, transform: Math.round },
  zx = {
    rotate: Fn,
    rotateX: Fn,
    rotateY: Fn,
    rotateZ: Fn,
    scale: Ps,
    scaleX: Ps,
    scaleY: Ps,
    scaleZ: Ps,
    skew: Fn,
    skewX: Fn,
    skewY: Fn,
    distance: F,
    translateX: F,
    translateY: F,
    translateZ: F,
    x: F,
    y: F,
    z: F,
    perspective: F,
    transformPerspective: F,
    opacity: Ml,
    originX: jp,
    originY: jp,
    originZ: F,
  },
  cf = {
    borderWidth: F,
    borderTopWidth: F,
    borderRightWidth: F,
    borderBottomWidth: F,
    borderLeftWidth: F,
    borderRadius: F,
    borderTopLeftRadius: F,
    borderTopRightRadius: F,
    borderBottomRightRadius: F,
    borderBottomLeftRadius: F,
    width: F,
    maxWidth: F,
    height: F,
    maxHeight: F,
    top: F,
    right: F,
    bottom: F,
    left: F,
    inset: F,
    insetBlock: F,
    insetBlockStart: F,
    insetBlockEnd: F,
    insetInline: F,
    insetInlineStart: F,
    insetInlineEnd: F,
    padding: F,
    paddingTop: F,
    paddingRight: F,
    paddingBottom: F,
    paddingLeft: F,
    paddingBlock: F,
    paddingBlockStart: F,
    paddingBlockEnd: F,
    paddingInline: F,
    paddingInlineStart: F,
    paddingInlineEnd: F,
    margin: F,
    marginTop: F,
    marginRight: F,
    marginBottom: F,
    marginLeft: F,
    marginBlock: F,
    marginBlockStart: F,
    marginBlockEnd: F,
    marginInline: F,
    marginInlineStart: F,
    marginInlineEnd: F,
    fontSize: F,
    backgroundPositionX: F,
    backgroundPositionY: F,
    ...zx,
    zIndex: Jp,
    fillOpacity: Ml,
    strokeOpacity: Ml,
    numOctaves: Jp,
  },
  Rx = {
    ...cf,
    color: kt,
    backgroundColor: kt,
    outlineColor: kt,
    fill: kt,
    stroke: kt,
    borderColor: kt,
    borderTopColor: kt,
    borderRightColor: kt,
    borderBottomColor: kt,
    borderLeftColor: kt,
    filter: wc,
    WebkitFilter: wc,
    mask: Vc,
    WebkitMask: Vc,
  },
  I0 = (i) => Rx[i],
  Ox = new Set([wc, Vc]);
function tg(i, a) {
  let u = I0(i);
  return (
    Ox.has(u) || (u = Je), u.getAnimatableNone ? u.getAnimatableNone(a) : void 0
  );
}
const wx = new Set(["auto", "none", "0"]);
function Vx(i, a, u) {
  let s = 0,
    c;
  for (; s < i.length && !c; ) {
    const h = i[s];
    typeof h == "string" && !wx.has(h) && ya(h).values.length && (c = i[s]),
      s++;
  }
  if (c && u) for (const h of a) i[h] = tg(u, c);
}
class Nx extends nf {
  constructor(a, u, s, c, h) {
    super(a, u, s, c, h, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: a, element: u, name: s } = this;
    if (!u || !u.current) return;
    super.readKeyframes();
    for (let v = 0; v < a.length; v++) {
      let b = a[v];
      if (typeof b == "string" && ((b = b.trim()), Fc(b))) {
        const S = Z0(b, u.current);
        S !== void 0 && (a[v] = S),
          v === a.length - 1 && (this.finalKeyframe = b);
      }
    }
    if ((this.resolveNoneKeyframes(), !k0.has(s) || a.length !== 2)) return;
    const [c, h] = a,
      f = kp(c),
      m = kp(h),
      y = Np(c),
      p = Np(h);
    if (y !== p && Pn[s]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== m)
      if (Gp(f) && Gp(m))
        for (let v = 0; v < a.length; v++) {
          const b = a[v];
          typeof b == "string" && (a[v] = parseFloat(b));
        }
      else Pn[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: a, name: u } = this,
      s = [];
    for (let c = 0; c < a.length; c++) (a[c] === null || Ex(a[c])) && s.push(c);
    s.length && Vx(a, s, u);
  }
  measureInitialState() {
    const { element: a, unresolvedKeyframes: u, name: s } = this;
    if (!a || !a.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Pn[s](
        a.measureViewportBox(),
        window.getComputedStyle(a.current)
      )),
      (u[0] = this.measuredOrigin);
    const c = u[u.length - 1];
    c !== void 0 && a.getValue(s, c).jump(c, !1);
  }
  measureEndState() {
    var m;
    const { element: a, name: u, unresolvedKeyframes: s } = this;
    if (!a || !a.current) return;
    const c = a.getValue(u);
    c && c.jump(this.measuredOrigin, !1);
    const h = s.length - 1,
      f = s[h];
    (s[h] = Pn[u](a.measureViewportBox(), window.getComputedStyle(a.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (m = this.removedTransforms) != null &&
        m.length &&
        this.removedTransforms.forEach(([y, p]) => {
          a.getValue(y).set(p);
        }),
      this.resolveNoneKeyframes();
  }
}
function eg(i, a, u) {
  if (i == null) return [];
  if (i instanceof EventTarget) return [i];
  if (typeof i == "string") {
    const c = document.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i).filter((s) => s != null);
}
const ng = (i, a) => (a && typeof i == "number" ? a.transform(i) : i);
function xl(i) {
  return o0(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
const { schedule: ff } = x0(queueMicrotask, !1),
  Ke = { x: !1, y: !1 };
function ig() {
  return Ke.x || Ke.y;
}
function jx(i) {
  return i === "x" || i === "y"
    ? Ke[i]
      ? null
      : ((Ke[i] = !0),
        () => {
          Ke[i] = !1;
        })
    : Ke.x || Ke.y
    ? null
    : ((Ke.x = Ke.y = !0),
      () => {
        Ke.x = Ke.y = !1;
      });
}
function ag(i, a) {
  const u = eg(i),
    s = new AbortController(),
    c = { passive: !0, ...a, signal: s.signal };
  return [u, c, () => s.abort()];
}
function Bx(i) {
  return !(i.pointerType === "touch" || ig());
}
function _x(i, a, u = {}) {
  const [s, c, h] = ag(i, u);
  return (
    s.forEach((f) => {
      let m = !1,
        y = !1,
        p;
      const v = () => {
          f.removeEventListener("pointerleave", w);
        },
        b = (L) => {
          p && (p(L), (p = void 0)), v();
        },
        S = (L) => {
          (m = !1),
            window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", S),
            y && ((y = !1), b(L));
        },
        M = () => {
          (m = !0),
            window.addEventListener("pointerup", S, c),
            window.addEventListener("pointercancel", S, c);
        },
        w = (L) => {
          if (L.pointerType !== "touch") {
            if (m) {
              y = !0;
              return;
            }
            b(L);
          }
        },
        U = (L) => {
          if (!Bx(L)) return;
          y = !1;
          const H = a(f, L);
          typeof H == "function" &&
            ((p = H), f.addEventListener("pointerleave", w, c));
        };
      f.addEventListener("pointerenter", U, c),
        f.addEventListener("pointerdown", M, c);
    }),
    h
  );
}
const lg = (i, a) => (a ? (i === a ? !0 : lg(i, a.parentElement)) : !1),
  hf = (i) =>
    i.pointerType === "mouse"
      ? typeof i.button != "number" || i.button <= 0
      : i.isPrimary !== !1,
  Ux = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Lx(i) {
  return Ux.has(i.tagName) || i.isContentEditable === !0;
}
const Hx = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function Yx(i) {
  return Hx.has(i.tagName) || i.isContentEditable === !0;
}
const au = new WeakSet();
function Fp(i) {
  return (a) => {
    a.key === "Enter" && i(a);
  };
}
function ac(i, a) {
  i.dispatchEvent(
    new PointerEvent("pointer" + a, { isPrimary: !0, bubbles: !0 })
  );
}
const qx = (i, a) => {
  const u = i.currentTarget;
  if (!u) return;
  const s = Fp(() => {
    if (au.has(u)) return;
    ac(u, "down");
    const c = Fp(() => {
        ac(u, "up");
      }),
      h = () => ac(u, "cancel");
    u.addEventListener("keyup", c, a), u.addEventListener("blur", h, a);
  });
  u.addEventListener("keydown", s, a),
    u.addEventListener("blur", () => u.removeEventListener("keydown", s), a);
};
function Wp(i) {
  return hf(i) && !ig();
}
const Pp = new WeakSet();
function Gx(i, a, u = {}) {
  const [s, c, h] = ag(i, u),
    f = (m) => {
      const y = m.currentTarget;
      if (!Wp(m) || Pp.has(m)) return;
      au.add(y), u.stopPropagation && Pp.add(m);
      const p = a(y, m),
        v = (M, w) => {
          window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", S),
            au.has(y) && au.delete(y),
            Wp(M) && typeof p == "function" && p(M, { success: w });
        },
        b = (M) => {
          v(
            M,
            y === window ||
              y === document ||
              u.useGlobalTarget ||
              lg(y, M.target)
          );
        },
        S = (M) => {
          v(M, !1);
        };
      window.addEventListener("pointerup", b, c),
        window.addEventListener("pointercancel", S, c);
    };
  return (
    s.forEach((m) => {
      (u.useGlobalTarget ? window : m).addEventListener("pointerdown", f, c),
        xl(m) &&
          (m.addEventListener("focus", (p) => qx(p, c)),
          !Lx(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
    }),
    h
  );
}
function df(i) {
  return o0(i) && "ownerSVGElement" in i;
}
const lu = new WeakMap();
let Wn;
const sg = (i, a, u) => (s, c) =>
    c && c[0]
      ? c[0][i + "Size"]
      : df(s) && "getBBox" in s
      ? s.getBBox()[a]
      : s[u],
  Xx = sg("inline", "width", "offsetWidth"),
  Qx = sg("block", "height", "offsetHeight");
function Zx({ target: i, borderBoxSize: a }) {
  var u;
  (u = lu.get(i)) == null ||
    u.forEach((s) => {
      s(i, {
        get width() {
          return Xx(i, a);
        },
        get height() {
          return Qx(i, a);
        },
      });
    });
}
function Kx(i) {
  i.forEach(Zx);
}
function kx() {
  typeof ResizeObserver > "u" || (Wn = new ResizeObserver(Kx));
}
function Jx(i, a) {
  Wn || kx();
  const u = eg(i);
  return (
    u.forEach((s) => {
      let c = lu.get(s);
      c || ((c = new Set()), lu.set(s, c)),
        c.add(a),
        Wn == null || Wn.observe(s);
    }),
    () => {
      u.forEach((s) => {
        const c = lu.get(s);
        c == null || c.delete(a),
          (c != null && c.size) || Wn == null || Wn.unobserve(s);
      });
    }
  );
}
const su = new Set();
let da;
function Fx() {
  (da = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    su.forEach((a) => a(i));
  }),
    window.addEventListener("resize", da);
}
function Wx(i) {
  return (
    su.add(i),
    da || Fx(),
    () => {
      su.delete(i),
        !su.size &&
          typeof da == "function" &&
          (window.removeEventListener("resize", da), (da = void 0));
    }
  );
}
function Nc(i, a) {
  return typeof i == "function" ? Wx(i) : Jx(i, a);
}
function ug(i, a) {
  let u;
  const s = () => {
    const { currentTime: c } = a,
      f = (c === null ? 0 : c.value) / 100;
    u !== f && i(f), (u = f);
  };
  return vt.preUpdate(s, !0), () => qe(s);
}
function Px(i) {
  return df(i) && i.tagName === "svg";
}
function $x(...i) {
  const a = !Array.isArray(i[0]),
    u = a ? 0 : -1,
    s = i[0 + u],
    c = i[1 + u],
    h = i[2 + u],
    f = i[3 + u],
    m = tf(c, h, f);
  return a ? m(s) : m;
}
const Ix = [...$0, kt, Je],
  t2 = (i) => Ix.find(P0(i)),
  $p = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ma = () => ({ x: $p(), y: $p() }),
  Ip = () => ({ min: 0, max: 0 }),
  Ft = () => ({ x: Ip(), y: Ip() }),
  e2 = new WeakMap();
function Au(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Dl(i) {
  return typeof i == "string" || Array.isArray(i);
}
const mf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  pf = ["initial", ...mf];
function Eu(i) {
  return Au(i.animate) || pf.some((a) => Dl(i[a]));
}
function og(i) {
  return !!(Eu(i) || i.variants);
}
function n2(i, a, u) {
  for (const s in a) {
    const c = a[s],
      h = u[s];
    if (le(c)) i.addValue(s, c);
    else if (le(h)) i.addValue(s, ke(c, { owner: i }));
    else if (h !== c)
      if (i.hasValue(s)) {
        const f = i.getValue(s);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = i.getStaticValue(s);
        i.addValue(s, ke(f !== void 0 ? f : c, { owner: i }));
      }
  }
  for (const s in u) a[s] === void 0 && i.removeValue(s);
  return a;
}
const jc = { current: null },
  rg = { current: !1 },
  i2 = typeof window < "u";
function a2() {
  if (((rg.current = !0), !!i2))
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"),
        a = () => (jc.current = i.matches);
      i.addEventListener("change", a), a();
    } else jc.current = !1;
}
const ty = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let pu = {};
function cg(i) {
  pu = i;
}
function l2() {
  return pu;
}
class s2 {
  scrapeMotionValuesFromProps(a, u, s) {
    return {};
  }
  constructor(
    {
      parent: a,
      props: u,
      presenceContext: s,
      reducedMotionConfig: c,
      skipAnimations: h,
      blockInitialAnimation: f,
      visualState: m,
    },
    y = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = nf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const M = re.now();
        this.renderScheduledAt < M &&
          ((this.renderScheduledAt = M), vt.render(this.render, !1, !0));
      });
    const { latestValues: p, renderState: v } = m;
    (this.latestValues = p),
      (this.baseTarget = { ...p }),
      (this.initialValues = u.initial ? { ...p } : {}),
      (this.renderState = v),
      (this.parent = a),
      (this.props = u),
      (this.presenceContext = s),
      (this.depth = a ? a.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.skipAnimationsConfig = h),
      (this.options = y),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = Eu(u)),
      (this.isVariantNode = og(u)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(a && a.current));
    const { willChange: b, ...S } = this.scrapeMotionValuesFromProps(
      u,
      {},
      this
    );
    for (const M in S) {
      const w = S[M];
      p[M] !== void 0 && le(w) && w.set(p[M]);
    }
  }
  mount(a) {
    var u, s;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        (u = this.values.get(c)) == null || u.jump(this.initialValues[c]),
          (this.latestValues[c] = this.initialValues[c]);
    (this.current = a),
      e2.set(a, this),
      this.projection && !this.projection.instance && this.projection.mount(a),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((c, h) => this.bindToMotionValue(h, c)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
        ? (this.shouldReduceMotion = !0)
        : (rg.current || a2(), (this.shouldReduceMotion = jc.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (s = this.parent) == null || s.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0);
  }
  unmount() {
    var a;
    this.projection && this.projection.unmount(),
      qe(this.notifyUpdate),
      qe(this.render),
      this.valueSubscriptions.forEach((u) => u()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (a = this.parent) == null || a.removeChild(this);
    for (const u in this.events) this.events[u].clear();
    for (const u in this.features) {
      const s = this.features[u];
      s && (s.unmount(), (s.isMounted = !1));
    }
    this.current = null;
  }
  addChild(a) {
    this.children.add(a),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(a);
  }
  removeChild(a) {
    this.children.delete(a),
      this.enteringChildren && this.enteringChildren.delete(a);
  }
  bindToMotionValue(a, u) {
    if (
      (this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)(),
      u.accelerate && X0.has(a) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: f,
          keyframes: m,
          times: y,
          ease: p,
          duration: v,
        } = u.accelerate,
        b = new q0({
          element: this.current,
          name: a,
          keyframes: m,
          times: y,
          ease: p,
          duration: Re(v),
        }),
        S = f(b);
      this.valueSubscriptions.set(a, () => {
        S(), b.cancel();
      });
      return;
    }
    const s = ba.has(a);
    s && this.onBindTransform && this.onBindTransform();
    const c = u.on("change", (f) => {
      (this.latestValues[a] = f),
        this.props.onUpdate && vt.preRender(this.notifyUpdate),
        s && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let h;
    typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (h = window.MotionCheckAppearSync(this, a, u)),
      this.valueSubscriptions.set(a, () => {
        c(), h && h(), u.owner && u.stop();
      });
  }
  sortNodePosition(a) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== a.type
      ? 0
      : this.sortInstanceNodePosition(this.current, a.current);
  }
  updateFeatures() {
    let a = "animation";
    for (a in pu) {
      const u = pu[a];
      if (!u) continue;
      const { isEnabled: s, Feature: c } = u;
      if (
        (!this.features[a] &&
          c &&
          s(this.props) &&
          (this.features[a] = new c(this)),
        this.features[a])
      ) {
        const h = this.features[a];
        h.isMounted ? h.update() : (h.mount(), (h.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Ft();
  }
  getStaticValue(a) {
    return this.latestValues[a];
  }
  setStaticValue(a, u) {
    this.latestValues[a] = u;
  }
  update(a, u) {
    (a.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = a),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = u);
    for (let s = 0; s < ty.length; s++) {
      const c = ty[s];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const h = "on" + c,
        f = a[h];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    (this.prevMotionValues = n2(
      this,
      this.scrapeMotionValuesFromProps(a, this.prevProps || {}, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(a) {
    return this.props.variants ? this.props.variants[a] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(a) {
    const u = this.getClosestVariantNode();
    if (u)
      return (
        u.variantChildren && u.variantChildren.add(a),
        () => u.variantChildren.delete(a)
      );
  }
  addValue(a, u) {
    const s = this.values.get(a);
    u !== s &&
      (s && this.removeValue(a),
      this.bindToMotionValue(a, u),
      this.values.set(a, u),
      (this.latestValues[a] = u.get()));
  }
  removeValue(a) {
    this.values.delete(a);
    const u = this.valueSubscriptions.get(a);
    u && (u(), this.valueSubscriptions.delete(a)),
      delete this.latestValues[a],
      this.removeValueFromRenderState(a, this.renderState);
  }
  hasValue(a) {
    return this.values.has(a);
  }
  getValue(a, u) {
    if (this.props.values && this.props.values[a]) return this.props.values[a];
    let s = this.values.get(a);
    return (
      s === void 0 &&
        u !== void 0 &&
        ((s = ke(u === null ? void 0 : u, { owner: this })),
        this.addValue(a, s)),
      s
    );
  }
  readValue(a, u) {
    let s =
      this.latestValues[a] !== void 0 || !this.current
        ? this.latestValues[a]
        : this.getBaseTargetFromProps(this.props, a) ??
          this.readValueFromInstance(this.current, a, this.options);
    return (
      s != null &&
        (typeof s == "string" && (u0(s) || r0(s))
          ? (s = parseFloat(s))
          : !t2(s) && Je.test(u) && (s = tg(a, u)),
        this.setBaseTarget(a, le(s) ? s.get() : s)),
      le(s) ? s.get() : s
    );
  }
  setBaseTarget(a, u) {
    this.baseTarget[a] = u;
  }
  getBaseTarget(a) {
    var h;
    const { initial: u } = this.props;
    let s;
    if (typeof u == "string" || typeof u == "object") {
      const f = of(
        this.props,
        u,
        (h = this.presenceContext) == null ? void 0 : h.custom
      );
      f && (s = f[a]);
    }
    if (u && s !== void 0) return s;
    const c = this.getBaseTargetFromProps(this.props, a);
    return c !== void 0 && !le(c)
      ? c
      : this.initialValues[a] !== void 0 && s === void 0
      ? void 0
      : this.baseTarget[a];
  }
  on(a, u) {
    return this.events[a] || (this.events[a] = new Zc()), this.events[a].add(u);
  }
  notify(a, ...u) {
    this.events[a] && this.events[a].notify(...u);
  }
  scheduleRenderMicrotask() {
    ff.render(this.render);
  }
}
class fg extends s2 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Nx);
  }
  sortInstanceNodePosition(a, u) {
    return a.compareDocumentPosition(u) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(a, u) {
    const s = a.style;
    return s ? s[u] : void 0;
  }
  removeValueFromRenderState(a, { vars: u, style: s }) {
    delete u[a], delete s[a];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: a } = this.props;
    le(a) &&
      (this.childSubscription = a.on("change", (u) => {
        this.current && (this.current.textContent = `${u}`);
      }));
  }
}
class ti {
  constructor(a) {
    (this.isMounted = !1), (this.node = a);
  }
  update() {}
}
function hg({ top: i, left: a, right: u, bottom: s }) {
  return { x: { min: a, max: u }, y: { min: i, max: s } };
}
function u2({ x: i, y: a }) {
  return { top: a.min, right: i.max, bottom: a.max, left: i.min };
}
function o2(i, a) {
  if (!a) return i;
  const u = a({ x: i.left, y: i.top }),
    s = a({ x: i.right, y: i.bottom });
  return { top: u.y, left: u.x, bottom: s.y, right: s.x };
}
function lc(i) {
  return i === void 0 || i === 1;
}
function Bc({ scale: i, scaleX: a, scaleY: u }) {
  return !lc(i) || !lc(a) || !lc(u);
}
function xi(i) {
  return (
    Bc(i) ||
    dg(i) ||
    i.z ||
    i.rotate ||
    i.rotateX ||
    i.rotateY ||
    i.skewX ||
    i.skewY
  );
}
function dg(i) {
  return ey(i.x) || ey(i.y);
}
function ey(i) {
  return i && i !== "0%";
}
function yu(i, a, u) {
  const s = i - u,
    c = a * s;
  return u + c;
}
function ny(i, a, u, s, c) {
  return c !== void 0 && (i = yu(i, c, s)), yu(i, u, s) + a;
}
function _c(i, a = 0, u = 1, s, c) {
  (i.min = ny(i.min, a, u, s, c)), (i.max = ny(i.max, a, u, s, c));
}
function mg(i, { x: a, y: u }) {
  _c(i.x, a.translate, a.scale, a.originPoint),
    _c(i.y, u.translate, u.scale, u.originPoint);
}
const iy = 0.999999999999,
  ay = 1.0000000000001;
function r2(i, a, u, s = !1) {
  var m;
  const c = u.length;
  if (!c) return;
  a.x = a.y = 1;
  let h, f;
  for (let y = 0; y < c; y++) {
    (h = u[y]), (f = h.projectionDelta);
    const { visualElement: p } = h.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (s &&
        h.options.layoutScroll &&
        h.scroll &&
        h !== h.root &&
        (nn(i.x, -h.scroll.offset.x), nn(i.y, -h.scroll.offset.y)),
      f && ((a.x *= f.x.scale), (a.y *= f.y.scale), mg(i, f)),
      s &&
        xi(h.latestValues) &&
        uu(i, h.latestValues, (m = h.layout) == null ? void 0 : m.layoutBox));
  }
  a.x < ay && a.x > iy && (a.x = 1), a.y < ay && a.y > iy && (a.y = 1);
}
function nn(i, a) {
  (i.min += a), (i.max += a);
}
function ly(i, a, u, s, c = 0.5) {
  const h = Nt(i.min, i.max, c);
  _c(i, a, u, h, s);
}
function sy(i, a) {
  return typeof i == "string" ? (parseFloat(i) / 100) * (a.max - a.min) : i;
}
function uu(i, a, u) {
  const s = u ?? i;
  ly(i.x, sy(a.x, s.x), a.scaleX, a.scale, a.originX),
    ly(i.y, sy(a.y, s.y), a.scaleY, a.scale, a.originY);
}
function pg(i, a) {
  return hg(o2(i.getBoundingClientRect(), a));
}
function c2(i, a, u) {
  const s = pg(i, u),
    { scroll: c } = a;
  return c && (nn(s.x, c.offset.x), nn(s.y, c.offset.y)), s;
}
const f2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  h2 = va.length;
function d2(i, a, u) {
  let s = "",
    c = !0;
  for (let h = 0; h < h2; h++) {
    const f = va[h],
      m = i[f];
    if (m === void 0) continue;
    let y = !0;
    if (typeof m == "number") y = m === (f.startsWith("scale") ? 1 : 0);
    else {
      const p = parseFloat(m);
      y = f.startsWith("scale") ? p === 1 : p === 0;
    }
    if (!y || u) {
      const p = ng(m, cf[f]);
      if (!y) {
        c = !1;
        const v = f2[f] || f;
        s += `${v}(${p}) `;
      }
      u && (a[f] = p);
    }
  }
  return (s = s.trim()), u ? (s = u(a, c ? "" : s)) : c && (s = "none"), s;
}
function yf(i, a, u) {
  const { style: s, vars: c, transformOrigin: h } = i;
  let f = !1,
    m = !1;
  for (const y in a) {
    const p = a[y];
    if (ba.has(y)) {
      f = !0;
      continue;
    } else if (A0(y)) {
      c[y] = p;
      continue;
    } else {
      const v = ng(p, cf[y]);
      y.startsWith("origin") ? ((m = !0), (h[y] = v)) : (s[y] = v);
    }
  }
  if (
    (a.transform ||
      (f || u
        ? (s.transform = d2(a, i.transform, u))
        : s.transform && (s.transform = "none")),
    m)
  ) {
    const { originX: y = "50%", originY: p = "50%", originZ: v = 0 } = h;
    s.transformOrigin = `${y} ${p} ${v}`;
  }
}
function yg(i, { style: a, vars: u }, s, c) {
  const h = i.style;
  let f;
  for (f in a) h[f] = a[f];
  c == null || c.applyProjectionStyles(h, s);
  for (f in u) h.setProperty(f, u[f]);
}
function uy(i, a) {
  return a.max === a.min ? 0 : (i / (a.max - a.min)) * 100;
}
const pl = {
    correct: (i, a) => {
      if (!a.target) return i;
      if (typeof i == "string")
        if (F.test(i)) i = parseFloat(i);
        else return i;
      const u = uy(i, a.target.x),
        s = uy(i, a.target.y);
      return `${u}% ${s}%`;
    },
  },
  m2 = {
    correct: (i, { treeScale: a, projectionDelta: u }) => {
      const s = i,
        c = Je.parse(i);
      if (c.length > 5) return s;
      const h = Je.createTransformer(i),
        f = typeof c[0] != "number" ? 1 : 0,
        m = u.x.scale * a.x,
        y = u.y.scale * a.y;
      (c[0 + f] /= m), (c[1 + f] /= y);
      const p = Nt(m, y, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= p),
        typeof c[3 + f] == "number" && (c[3 + f] /= p),
        h(c)
      );
    },
  },
  Uc = {
    borderRadius: {
      ...pl,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: pl,
    borderTopRightRadius: pl,
    borderBottomLeftRadius: pl,
    borderBottomRightRadius: pl,
    boxShadow: m2,
  };
function gg(i, { layout: a, layoutId: u }) {
  return (
    ba.has(i) ||
    i.startsWith("origin") ||
    ((a || u !== void 0) && (!!Uc[i] || i === "opacity"))
  );
}
function gf(i, a, u) {
  var f;
  const s = i.style,
    c = a == null ? void 0 : a.style,
    h = {};
  if (!s) return h;
  for (const m in s)
    (le(s[m]) ||
      (c && le(c[m])) ||
      gg(m, i) ||
      ((f = u == null ? void 0 : u.getValue(m)) == null
        ? void 0
        : f.liveStyle) !== void 0) &&
      (h[m] = s[m]);
  return h;
}
function p2(i) {
  return window.getComputedStyle(i);
}
class y2 extends fg {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = yg);
  }
  readValueFromInstance(a, u) {
    var s;
    if (ba.has(u))
      return (s = this.projection) != null && s.isProjecting ? Tc(u) : _S(a, u);
    {
      const c = p2(a),
        h = (A0(u) ? c.getPropertyValue(u) : c[u]) || 0;
      return typeof h == "string" ? h.trim() : h;
    }
  }
  measureInstanceViewportBox(a, { transformPagePoint: u }) {
    return pg(a, u);
  }
  build(a, u, s) {
    yf(a, u, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(a, u, s) {
    return gf(a, u, s);
  }
}
const g2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  v2 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function b2(i, a, u = 1, s = 0, c = !0) {
  i.pathLength = 1;
  const h = c ? g2 : v2;
  (i[h.offset] = `${-s}`), (i[h.array] = `${a} ${u}`);
}
const S2 = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function vg(
  i,
  {
    attrX: a,
    attrY: u,
    attrScale: s,
    pathLength: c,
    pathSpacing: h = 1,
    pathOffset: f = 0,
    ...m
  },
  y,
  p,
  v
) {
  if ((yf(i, m, p), y)) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  (i.attrs = i.style), (i.style = {});
  const { attrs: b, style: S } = i;
  b.transform && ((S.transform = b.transform), delete b.transform),
    (S.transform || b.transformOrigin) &&
      ((S.transformOrigin = b.transformOrigin ?? "50% 50%"),
      delete b.transformOrigin),
    S.transform &&
      ((S.transformBox = (v == null ? void 0 : v.transformBox) ?? "fill-box"),
      delete b.transformBox);
  for (const M of S2) b[M] !== void 0 && ((S[M] = b[M]), delete b[M]);
  a !== void 0 && (b.x = a),
    u !== void 0 && (b.y = u),
    s !== void 0 && (b.scale = s),
    c !== void 0 && b2(b, c, h, f, !1);
}
const bg = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Sg = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function x2(i, a, u, s) {
  yg(i, a, void 0, s);
  for (const c in a.attrs) i.setAttribute(bg.has(c) ? c : rf(c), a.attrs[c]);
}
function xg(i, a, u) {
  const s = gf(i, a, u);
  for (const c in i)
    if (le(i[c]) || le(a[c])) {
      const h =
        va.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      s[h] = i[c];
    }
  return s;
}
class T2 extends fg {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Ft);
  }
  getBaseTargetFromProps(a, u) {
    return a[u];
  }
  readValueFromInstance(a, u) {
    if (ba.has(u)) {
      const s = I0(u);
      return (s && s.default) || 0;
    }
    return (u = bg.has(u) ? u : rf(u)), a.getAttribute(u);
  }
  scrapeMotionValuesFromProps(a, u, s) {
    return xg(a, u, s);
  }
  build(a, u, s) {
    vg(a, u, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(a, u, s, c) {
    x2(a, u, s, c);
  }
  mount(a) {
    (this.isSVGTag = Sg(a.tagName)), super.mount(a);
  }
}
const A2 = pf.length;
function Tg(i) {
  if (!i) return;
  if (!i.isControllingVariants) {
    const u = i.parent ? Tg(i.parent) || {} : {};
    return i.props.initial !== void 0 && (u.initial = i.props.initial), u;
  }
  const a = {};
  for (let u = 0; u < A2; u++) {
    const s = pf[u],
      c = i.props[s];
    (Dl(c) || c === !1) && (a[s] = c);
  }
  return a;
}
function Ag(i, a) {
  if (!Array.isArray(a)) return !1;
  const u = a.length;
  if (u !== i.length) return !1;
  for (let s = 0; s < u; s++) if (a[s] !== i[s]) return !1;
  return !0;
}
const E2 = [...mf].reverse(),
  M2 = mf.length;
function D2(i) {
  return (a) =>
    Promise.all(a.map(({ animation: u, options: s }) => Tx(i, u, s)));
}
function C2(i) {
  let a = D2(i),
    u = oy(),
    s = !0,
    c = !1;
  const h = (p) => (v, b) => {
    var M;
    const S = Mi(
      i,
      b,
      p === "exit"
        ? (M = i.presenceContext) == null
          ? void 0
          : M.custom
        : void 0
    );
    if (S) {
      const { transition: w, transitionEnd: U, ...L } = S;
      v = { ...v, ...L, ...U };
    }
    return v;
  };
  function f(p) {
    a = p(i);
  }
  function m(p) {
    const { props: v } = i,
      b = Tg(i.parent) || {},
      S = [],
      M = new Set();
    let w = {},
      U = 1 / 0;
    for (let H = 0; H < M2; H++) {
      const G = E2[H],
        Y = u[G],
        X = v[G] !== void 0 ? v[G] : b[G],
        k = Dl(X),
        lt = G === p ? Y.isActive : null;
      lt === !1 && (U = H);
      let I = X === b[G] && X !== v[G] && k;
      if (
        (I && (s || c) && i.manuallyAnimateOnMount && (I = !1),
        (Y.protectedKeys = { ...w }),
        (!Y.isActive && lt === null) ||
          (!X && !Y.prevProp) ||
          Au(X) ||
          typeof X == "boolean")
      )
        continue;
      if (G === "exit" && Y.isActive && lt !== !0) {
        Y.prevResolvedValues && (w = { ...w, ...Y.prevResolvedValues });
        continue;
      }
      const $ = z2(Y.prevProp, X);
      let it = $ || (G === p && Y.isActive && !I && k) || (H > U && k),
        tt = !1;
      const pt = Array.isArray(X) ? X : [X];
      let bt = pt.reduce(h(G), {});
      lt === !1 && (bt = {});
      const { prevResolvedValues: It = {} } = Y,
        Gt = { ...It, ...bt },
        Lt = (K) => {
          (it = !0),
            M.has(K) && ((tt = !0), M.delete(K)),
            (Y.needsAnimating[K] = !0);
          const ot = i.getValue(K);
          ot && (ot.liveStyle = !1);
        };
      for (const K in Gt) {
        const ot = bt[K],
          yt = It[K];
        if (w.hasOwnProperty(K)) continue;
        let A = !1;
        zc(ot) && zc(yt) ? (A = !Ag(ot, yt)) : (A = ot !== yt),
          A
            ? ot != null
              ? Lt(K)
              : M.add(K)
            : ot !== void 0 && M.has(K)
            ? Lt(K)
            : (Y.protectedKeys[K] = !0);
      }
      (Y.prevProp = X),
        (Y.prevResolvedValues = bt),
        Y.isActive && (w = { ...w, ...bt }),
        (s || c) && i.blockInitialAnimation && (it = !1);
      const V = I && $;
      it &&
        (!V || tt) &&
        S.push(
          ...pt.map((K) => {
            const ot = { type: G };
            if (
              typeof K == "string" &&
              (s || c) &&
              !V &&
              i.manuallyAnimateOnMount &&
              i.parent
            ) {
              const { parent: yt } = i,
                A = Mi(yt, K);
              if (yt.enteringChildren && A) {
                const { delayChildren: _ } = A.transition || {};
                ot.delay = Q0(yt.enteringChildren, i, _);
              }
            }
            return { animation: K, options: ot };
          })
        );
    }
    if (M.size) {
      const H = {};
      if (typeof v.initial != "boolean") {
        const G = Mi(i, Array.isArray(v.initial) ? v.initial[0] : v.initial);
        G && G.transition && (H.transition = G.transition);
      }
      M.forEach((G) => {
        const Y = i.getBaseTarget(G),
          X = i.getValue(G);
        X && (X.liveStyle = !0), (H[G] = Y ?? null);
      }),
        S.push({ animation: H });
    }
    let L = !!S.length;
    return (
      s &&
        (v.initial === !1 || v.initial === v.animate) &&
        !i.manuallyAnimateOnMount &&
        (L = !1),
      (s = !1),
      (c = !1),
      L ? a(S) : Promise.resolve()
    );
  }
  function y(p, v) {
    var S;
    if (u[p].isActive === v) return Promise.resolve();
    (S = i.variantChildren) == null ||
      S.forEach((M) => {
        var w;
        return (w = M.animationState) == null ? void 0 : w.setActive(p, v);
      }),
      (u[p].isActive = v);
    const b = m(p);
    for (const M in u) u[M].protectedKeys = {};
    return b;
  }
  return {
    animateChanges: m,
    setActive: y,
    setAnimateFunction: f,
    getState: () => u,
    reset: () => {
      (u = oy()), (c = !0);
    },
  };
}
function z2(i, a) {
  return typeof a == "string" ? a !== i : Array.isArray(a) ? !Ag(a, i) : !1;
}
function Si(i = !1) {
  return {
    isActive: i,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function oy() {
  return {
    animate: Si(!0),
    whileInView: Si(),
    whileHover: Si(),
    whileTap: Si(),
    whileDrag: Si(),
    whileFocus: Si(),
    exit: Si(),
  };
}
function Lc(i, a) {
  (i.min = a.min), (i.max = a.max);
}
function Ze(i, a) {
  Lc(i.x, a.x), Lc(i.y, a.y);
}
function ry(i, a) {
  (i.translate = a.translate),
    (i.scale = a.scale),
    (i.originPoint = a.originPoint),
    (i.origin = a.origin);
}
const Eg = 1e-4,
  R2 = 1 - Eg,
  O2 = 1 + Eg,
  Mg = 0.01,
  w2 = 0 - Mg,
  V2 = 0 + Mg;
function ce(i) {
  return i.max - i.min;
}
function N2(i, a, u) {
  return Math.abs(i - a) <= u;
}
function cy(i, a, u, s = 0.5) {
  (i.origin = s),
    (i.originPoint = Nt(a.min, a.max, i.origin)),
    (i.scale = ce(u) / ce(a)),
    (i.translate = Nt(u.min, u.max, i.origin) - i.originPoint),
    ((i.scale >= R2 && i.scale <= O2) || isNaN(i.scale)) && (i.scale = 1),
    ((i.translate >= w2 && i.translate <= V2) || isNaN(i.translate)) &&
      (i.translate = 0);
}
function Tl(i, a, u, s) {
  cy(i.x, a.x, u.x, s ? s.originX : void 0),
    cy(i.y, a.y, u.y, s ? s.originY : void 0);
}
function fy(i, a, u, s = 0) {
  const c = s ? Nt(u.min, u.max, s) : u.min;
  (i.min = c + a.min), (i.max = i.min + ce(a));
}
function j2(i, a, u, s) {
  fy(i.x, a.x, u.x, s == null ? void 0 : s.x),
    fy(i.y, a.y, u.y, s == null ? void 0 : s.y);
}
function hy(i, a, u, s = 0) {
  const c = s ? Nt(u.min, u.max, s) : u.min;
  (i.min = a.min - c), (i.max = i.min + ce(a));
}
function gu(i, a, u, s) {
  hy(i.x, a.x, u.x, s == null ? void 0 : s.x),
    hy(i.y, a.y, u.y, s == null ? void 0 : s.y);
}
function dy(i, a, u, s, c) {
  return (
    (i -= a), (i = yu(i, 1 / u, s)), c !== void 0 && (i = yu(i, 1 / c, s)), i
  );
}
function B2(i, a = 0, u = 1, s = 0.5, c, h = i, f = i) {
  if (
    (an.test(a) &&
      ((a = parseFloat(a)), (a = Nt(f.min, f.max, a / 100) - f.min)),
    typeof a != "number")
  )
    return;
  let m = Nt(h.min, h.max, s);
  i === h && (m -= a),
    (i.min = dy(i.min, a, u, m, c)),
    (i.max = dy(i.max, a, u, m, c));
}
function my(i, a, [u, s, c], h, f) {
  B2(i, a[u], a[s], a[c], a.scale, h, f);
}
const _2 = ["x", "scaleX", "originX"],
  U2 = ["y", "scaleY", "originY"];
function py(i, a, u, s) {
  my(i.x, a, _2, u ? u.x : void 0, s ? s.x : void 0),
    my(i.y, a, U2, u ? u.y : void 0, s ? s.y : void 0);
}
function yy(i) {
  return i.translate === 0 && i.scale === 1;
}
function Dg(i) {
  return yy(i.x) && yy(i.y);
}
function gy(i, a) {
  return i.min === a.min && i.max === a.max;
}
function L2(i, a) {
  return gy(i.x, a.x) && gy(i.y, a.y);
}
function vy(i, a) {
  return (
    Math.round(i.min) === Math.round(a.min) &&
    Math.round(i.max) === Math.round(a.max)
  );
}
function Cg(i, a) {
  return vy(i.x, a.x) && vy(i.y, a.y);
}
function by(i) {
  return ce(i.x) / ce(i.y);
}
function Sy(i, a) {
  return (
    i.translate === a.translate &&
    i.scale === a.scale &&
    i.originPoint === a.originPoint
  );
}
function en(i) {
  return [i("x"), i("y")];
}
function H2(i, a, u) {
  let s = "";
  const c = i.x.translate / a.x,
    h = i.y.translate / a.y,
    f = (u == null ? void 0 : u.z) || 0;
  if (
    ((c || h || f) && (s = `translate3d(${c}px, ${h}px, ${f}px) `),
    (a.x !== 1 || a.y !== 1) && (s += `scale(${1 / a.x}, ${1 / a.y}) `),
    u)
  ) {
    const {
      transformPerspective: p,
      rotate: v,
      rotateX: b,
      rotateY: S,
      skewX: M,
      skewY: w,
    } = u;
    p && (s = `perspective(${p}px) ${s}`),
      v && (s += `rotate(${v}deg) `),
      b && (s += `rotateX(${b}deg) `),
      S && (s += `rotateY(${S}deg) `),
      M && (s += `skewX(${M}deg) `),
      w && (s += `skewY(${w}deg) `);
  }
  const m = i.x.scale * a.x,
    y = i.y.scale * a.y;
  return (m !== 1 || y !== 1) && (s += `scale(${m}, ${y})`), s || "none";
}
const zg = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  Y2 = zg.length,
  xy = (i) => (typeof i == "string" ? parseFloat(i) : i),
  Ty = (i) => typeof i == "number" || F.test(i);
function q2(i, a, u, s, c, h) {
  c
    ? ((i.opacity = Nt(0, u.opacity ?? 1, G2(s))),
      (i.opacityExit = Nt(a.opacity ?? 1, 0, X2(s))))
    : h && (i.opacity = Nt(a.opacity ?? 1, u.opacity ?? 1, s));
  for (let f = 0; f < Y2; f++) {
    const m = zg[f];
    let y = Ay(a, m),
      p = Ay(u, m);
    if (y === void 0 && p === void 0) continue;
    y || (y = 0),
      p || (p = 0),
      y === 0 || p === 0 || Ty(y) === Ty(p)
        ? ((i[m] = Math.max(Nt(xy(y), xy(p), s), 0)),
          (an.test(p) || an.test(y)) && (i[m] += "%"))
        : (i[m] = p);
  }
  (a.rotate || u.rotate) && (i.rotate = Nt(a.rotate || 0, u.rotate || 0, s));
}
function Ay(i, a) {
  return i[a] !== void 0 ? i[a] : i.borderRadius;
}
const G2 = Rg(0, 0.5, g0),
  X2 = Rg(0.5, 0.95, ve);
function Rg(i, a, u) {
  return (s) => (s < i ? 0 : s > a ? 1 : u(pa(i, a, s)));
}
function Q2(i, a, u) {
  const s = le(i) ? i : ke(i);
  return s.start(uf("", s, a, u)), s.animation;
}
function Cl(i, a, u, s = { passive: !0 }) {
  return i.addEventListener(a, u, s), () => i.removeEventListener(a, u);
}
const Z2 = (i, a) => i.depth - a.depth;
class K2 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(a) {
    Qc(this.children, a), (this.isDirty = !0);
  }
  remove(a) {
    cu(this.children, a), (this.isDirty = !0);
  }
  forEach(a) {
    this.isDirty && this.children.sort(Z2),
      (this.isDirty = !1),
      this.children.forEach(a);
  }
}
function k2(i, a) {
  const u = re.now(),
    s = ({ timestamp: c }) => {
      const h = c - u;
      h >= a && (qe(s), i(h - a));
    };
  return vt.setup(s, !0), () => qe(s);
}
function ou(i) {
  return le(i) ? i.get() : i;
}
class J2 {
  constructor() {
    this.members = [];
  }
  add(a) {
    Qc(this.members, a);
    for (let u = this.members.length - 1; u >= 0; u--) {
      const s = this.members[u];
      if (s === a || s === this.lead || s === this.prevLead) continue;
      const c = s.instance;
      (!c || c.isConnected === !1) &&
        !s.snapshot &&
        (cu(this.members, s), s.unmount());
    }
    a.scheduleRender();
  }
  remove(a) {
    if (
      (cu(this.members, a),
      a === this.prevLead && (this.prevLead = void 0),
      a === this.lead)
    ) {
      const u = this.members[this.members.length - 1];
      u && this.promote(u);
    }
  }
  relegate(a) {
    var u;
    for (let s = this.members.indexOf(a) - 1; s >= 0; s--) {
      const c = this.members[s];
      if (
        c.isPresent !== !1 &&
        ((u = c.instance) == null ? void 0 : u.isConnected) !== !1
      )
        return this.promote(c), !0;
    }
    return !1;
  }
  promote(a, u) {
    var c;
    const s = this.lead;
    if (a !== s && ((this.prevLead = s), (this.lead = a), a.show(), s)) {
      s.updateSnapshot(), a.scheduleRender();
      const { layoutDependency: h } = s.options,
        { layoutDependency: f } = a.options;
      (h === void 0 || h !== f) &&
        ((a.resumeFrom = s),
        u && (s.preserveOpacity = !0),
        s.snapshot &&
          ((a.snapshot = s.snapshot),
          (a.snapshot.latestValues = s.animationValues || s.latestValues)),
        (c = a.root) != null && c.isUpdating && (a.isLayoutDirty = !0)),
        a.options.crossfade === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((a) => {
      var u, s, c, h, f;
      (s = (u = a.options).onExitComplete) == null || s.call(u),
        (f =
          (c = a.resumingFrom) == null
            ? void 0
            : (h = c.options).onExitComplete) == null || f.call(h);
    });
  }
  scheduleRender() {
    this.members.forEach((a) => a.instance && a.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var a;
    (a = this.lead) != null && a.snapshot && (this.lead.snapshot = void 0);
  }
}
const ru = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  sc = ["", "X", "Y", "Z"],
  F2 = 1e3;
let W2 = 0;
function uc(i, a, u, s) {
  const { latestValues: c } = a;
  c[i] && ((u[i] = c[i]), a.setStaticValue(i, 0), s && (s[i] = 0));
}
function Og(i) {
  if (((i.hasCheckedOptimisedAppear = !0), i.root === i)) return;
  const { visualElement: a } = i.options;
  if (!a) return;
  const u = F0(a);
  if (window.MotionHasOptimisedAnimation(u, "transform")) {
    const { layout: c, layoutId: h } = i.options;
    window.MotionCancelOptimisedAnimation(u, "transform", vt, !(c || h));
  }
  const { parent: s } = i;
  s && !s.hasCheckedOptimisedAppear && Og(s);
}
function wg({
  attachResizeListener: i,
  defaultParent: a,
  measureScroll: u,
  checkIsScrollRoot: s,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, m = a == null ? void 0 : a()) {
      (this.id = W2++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(I2),
            this.nodes.forEach(lT),
            this.nodes.forEach(sT),
            this.nodes.forEach(tT);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0);
      for (let y = 0; y < this.path.length; y++)
        this.path[y].shouldResetTransform = !0;
      this.root === this && (this.nodes = new K2());
    }
    addEventListener(f, m) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new Zc()),
        this.eventHandlers.get(f).add(m)
      );
    }
    notifyListeners(f, ...m) {
      const y = this.eventHandlers.get(f);
      y && y.notify(...m);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      (this.isSVG = df(f) && !Px(f)), (this.instance = f);
      const { layoutId: m, layout: y, visualElement: p } = this.options;
      if (
        (p && !p.current && p.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (y || m) && (this.isLayoutDirty = !0),
        i)
      ) {
        let v,
          b = 0;
        const S = () => (this.root.updateBlockedByResize = !1);
        vt.read(() => {
          b = window.innerWidth;
        }),
          i(f, () => {
            const M = window.innerWidth;
            M !== b &&
              ((b = M),
              (this.root.updateBlockedByResize = !0),
              v && v(),
              (v = k2(S, 250)),
              ru.hasAnimatedSinceResize &&
                ((ru.hasAnimatedSinceResize = !1), this.nodes.forEach(Dy)));
          });
      }
      m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          p &&
          (m || y) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: v,
              hasLayoutChanged: b,
              hasRelativeLayoutChanged: S,
              layout: M,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const w =
                  this.options.transition || p.getDefaultTransition() || fT,
                { onLayoutAnimationStart: U, onLayoutAnimationComplete: L } =
                  p.getProps(),
                H = !this.targetLayout || !Cg(this.targetLayout, M),
                G = !b && S;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                G ||
                (b && (H || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const Y = { ...sf(w, "layout"), onPlay: U, onComplete: L };
                (p.shouldReduceMotion || this.options.layoutRoot) &&
                  ((Y.delay = 0), (Y.type = !1)),
                  this.startAnimation(Y),
                  this.setAnimationOrigin(v, G);
              } else
                b || Dy(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = M;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        qe(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(uT),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Og(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const b = this.path[v];
        (b.shouldResetTransform = !0),
          (typeof b.latestValues.x == "string" ||
            typeof b.latestValues.y == "string") &&
            (b.isLayoutDirty = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1);
      }
      const { layoutId: m, layout: y } = this.options;
      if (m === void 0 && !y) return;
      const p = this.getTransformTemplate();
      (this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const y = this.updateBlockedByResize;
        this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          y && this.nodes.forEach(nT),
          this.nodes.forEach(Ey);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(My);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(iT),
            this.nodes.forEach(aT),
            this.nodes.forEach(P2),
            this.nodes.forEach($2))
          : this.nodes.forEach(My),
        this.clearAllSnapshots();
      const m = re.now();
      ($t.delta = Fe(0, 1e3 / 60, m - $t.timestamp)),
        ($t.timestamp = m),
        ($t.isProcessing = !0),
        $r.update.process($t),
        $r.preRender.process($t),
        $r.render.process($t),
        ($t.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), ff.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(eT), this.sharedNodes.forEach(oT);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        vt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      vt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !ce(this.snapshot.measuredBox.x) &&
          !ce(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let y = 0; y < this.path.length; y++) this.path[y].updateScroll();
      const f = this.layout;
      (this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = Ft()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m &&
        m.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0
        );
    }
    updateScroll(f = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (m = !1),
        m && this.instance)
      ) {
        const y = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: y,
          offset: u(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : y,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !Dg(this.projectionDelta),
        y = this.getTransformTemplate(),
        p = y ? y(this.latestValues, "") : void 0,
        v = p !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (m || xi(this.latestValues) || v) &&
        (c(this.instance, p),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let y = this.removeElementScroll(m);
      return (
        f && (y = this.removeTransform(y)),
        hT(y),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: y,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var p;
      const { visualElement: f } = this.options;
      if (!f) return Ft();
      const m = f.measureViewportBox();
      if (
        !(
          ((p = this.scroll) == null ? void 0 : p.wasRoot) || this.path.some(dT)
        )
      ) {
        const { scroll: v } = this.root;
        v && (nn(m.x, v.offset.x), nn(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      var y;
      const m = Ft();
      if ((Ze(m, f), (y = this.scroll) != null && y.wasRoot)) return m;
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p],
          { scroll: b, options: S } = v;
        v !== this.root &&
          b &&
          S.layoutScroll &&
          (b.wasRoot && Ze(m, f), nn(m.x, b.offset.x), nn(m.y, b.offset.y));
      }
      return m;
    }
    applyTransform(f, m = !1, y) {
      var v, b;
      const p = y || Ft();
      Ze(p, f);
      for (let S = 0; S < this.path.length; S++) {
        const M = this.path[S];
        !m &&
          M.options.layoutScroll &&
          M.scroll &&
          M !== M.root &&
          (nn(p.x, -M.scroll.offset.x), nn(p.y, -M.scroll.offset.y)),
          xi(M.latestValues) &&
            uu(
              p,
              M.latestValues,
              (v = M.layout) == null ? void 0 : v.layoutBox
            );
      }
      return (
        xi(this.latestValues) &&
          uu(
            p,
            this.latestValues,
            (b = this.layout) == null ? void 0 : b.layoutBox
          ),
        p
      );
    }
    removeTransform(f) {
      var y;
      const m = Ft();
      Ze(m, f);
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p];
        if (!xi(v.latestValues)) continue;
        let b;
        v.instance &&
          (Bc(v.latestValues) && v.updateSnapshot(),
          (b = Ft()),
          Ze(b, v.measurePageBox())),
          py(
            m,
            v.latestValues,
            (y = v.snapshot) == null ? void 0 : y.layoutBox,
            b
          );
      }
      return xi(this.latestValues) && py(m, this.latestValues), m;
    }
    setTargetDelta(f) {
      (this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== $t.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var M;
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const y = !!this.resumingFrom || this !== m;
      if (
        !(
          f ||
          (y && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((M = this.parent) != null && M.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: v, layoutId: b } = this.options;
      if (!this.layout || !(v || b)) return;
      this.resolvedRelativeTargetAt = $t.timestamp;
      const S = this.getClosestProjectingParent();
      S &&
        this.linkedParentVersion !== S.layoutVersion &&
        !S.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && S && S.layout
            ? this.createRelativeTarget(
                S,
                this.layout.layoutBox,
                S.layout.layoutBox
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Ft()), (this.targetWithTransforms = Ft())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              j2(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0
              ))
            : this.targetDelta
            ? (this.resumingFrom
                ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                : Ze(this.target, this.layout.layoutBox),
              mg(this.target, this.targetDelta))
            : Ze(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            S &&
            !!S.resumingFrom == !!this.resumingFrom &&
            !S.options.layoutScroll &&
            S.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(S, this.target, S.target)
              : (this.relativeParent = this.relativeTarget = void 0)));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Bc(this.parent.latestValues) ||
          dg(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(f, m, y) {
      (this.relativeParent = f),
        (this.linkedParentVersion = f.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Ft()),
        (this.relativeTargetOrigin = Ft()),
        gu(
          this.relativeTargetOrigin,
          m,
          y,
          this.options.layoutAnchor || void 0
        ),
        Ze(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var w;
      const f = this.getLead(),
        m = !!this.resumingFrom || this !== f;
      let y = !0;
      if (
        ((this.isProjectionDirty ||
          ((w = this.parent) != null && w.isProjectionDirty)) &&
          (y = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (y = !1),
        this.resolvedRelativeTargetAt === $t.timestamp && (y = !1),
        y)
      )
        return;
      const { layout: p, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(p || v))
      )
        return;
      Ze(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        S = this.treeScale.y;
      r2(this.layoutCorrected, this.treeScale, this.path, m),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = Ft()));
      const { target: M } = f;
      if (!M) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (ry(this.prevProjectionDelta.x, this.projectionDelta.x),
          ry(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Tl(this.projectionDelta, this.layoutCorrected, M, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== S ||
          !Sy(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Sy(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", M));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var m;
      if (((m = this.options.visualElement) == null || m.scheduleRender(), f)) {
        const y = this.getStack();
        y && y.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ma()),
        (this.projectionDelta = ma()),
        (this.projectionDeltaWithTransform = ma());
    }
    setAnimationOrigin(f, m = !1) {
      const y = this.snapshot,
        p = y ? y.latestValues : {},
        v = { ...this.latestValues },
        b = ma();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m);
      const S = Ft(),
        M = y ? y.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        U = M !== w,
        L = this.getStack(),
        H = !L || L.members.length <= 1,
        G = !!(U && !H && this.options.crossfade === !0 && !this.path.some(cT));
      this.animationProgress = 0;
      let Y;
      (this.mixTargetDelta = (X) => {
        const k = X / 1e3;
        Cy(b.x, f.x, k),
          Cy(b.y, f.y, k),
          this.setTargetDelta(b),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (gu(
              S,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0
            ),
            rT(this.relativeTarget, this.relativeTargetOrigin, S, k),
            Y && L2(this.relativeTarget, Y) && (this.isProjectionDirty = !1),
            Y || (Y = Ft()),
            Ze(Y, this.relativeTarget)),
          U &&
            ((this.animationValues = v), q2(v, p, this.latestValues, k, G, H)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      var m, y, p;
      this.notifyListeners("animationStart"),
        (m = this.currentAnimation) == null || m.stop(),
        (p = (y = this.resumingFrom) == null ? void 0 : y.currentAnimation) ==
          null || p.stop(),
        this.pendingAnimation &&
          (qe(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = vt.update(() => {
          (ru.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = ke(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = Q2(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (v) => {
                this.mixTargetDelta(v), f.onUpdate && f.onUpdate(v);
              },
              onStop: () => {},
              onComplete: () => {
                f.onComplete && f.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(F2),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: m,
        target: y,
        layout: p,
        latestValues: v,
      } = f;
      if (!(!m || !y || !p)) {
        if (
          this !== f &&
          this.layout &&
          p &&
          Vg(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          y = this.target || Ft();
          const b = ce(this.layout.layoutBox.x);
          (y.x.min = f.target.x.min), (y.x.max = y.x.min + b);
          const S = ce(this.layout.layoutBox.y);
          (y.y.min = f.target.y.min), (y.y.max = y.y.min + S);
        }
        Ze(m, y),
          uu(m, v),
          Tl(this.projectionDeltaWithTransform, this.layoutCorrected, m, v);
      }
    }
    registerSharedNode(f, m) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new J2()),
        this.sharedNodes.get(f).add(m);
      const p = m.options.initialPromotionConfig;
      m.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity
            ? p.shouldPreserveFollowOpacity(m)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var m;
      const { layoutId: f } = this.options;
      return f
        ? ((m = this.getStack()) == null ? void 0 : m.lead) || this
        : this;
    }
    getPrevLead() {
      var m;
      const { layoutId: f } = this.options;
      return f ? ((m = this.getStack()) == null ? void 0 : m.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: m, preserveFollowOpacity: y } = {}) {
      const p = this.getStack();
      p && p.promote(this, y),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let m = !1;
      const { latestValues: y } = f;
      if (
        ((y.z ||
          y.rotate ||
          y.rotateX ||
          y.rotateY ||
          y.rotateZ ||
          y.skewX ||
          y.skewY) &&
          (m = !0),
        !m)
      )
        return;
      const p = {};
      y.z && uc("z", f, p, this.animationValues);
      for (let v = 0; v < sc.length; v++)
        uc(`rotate${sc[v]}`, f, p, this.animationValues),
          uc(`skew${sc[v]}`, f, p, this.animationValues);
      f.render();
      for (const v in p)
        f.setStaticValue(v, p[v]),
          this.animationValues && (this.animationValues[v] = p[v]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, m) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const y = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = ou(m == null ? void 0 : m.pointerEvents) || ""),
          (f.transform = y ? y(this.latestValues, "") : "none");
        return;
      }
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = ou(m == null ? void 0 : m.pointerEvents) || "")),
          this.hasProjected &&
            !xi(this.latestValues) &&
            ((f.transform = y ? y({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      f.visibility = "";
      const v = p.animationValues || p.latestValues;
      this.applyTransformsToTarget();
      let b = H2(this.projectionDeltaWithTransform, this.treeScale, v);
      y && (b = y(v, b)), (f.transform = b);
      const { x: S, y: M } = this.projectionDelta;
      (f.transformOrigin = `${S.origin * 100}% ${M.origin * 100}% 0`),
        p.animationValues
          ? (f.opacity =
              p === this
                ? v.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : v.opacityExit)
          : (f.opacity =
              p === this
                ? v.opacity !== void 0
                  ? v.opacity
                  : ""
                : v.opacityExit !== void 0
                ? v.opacityExit
                : 0);
      for (const w in Uc) {
        if (v[w] === void 0) continue;
        const { correct: U, applyTo: L, isCSSVariable: H } = Uc[w],
          G = b === "none" ? v[w] : U(v[w], p);
        if (L) {
          const Y = L.length;
          for (let X = 0; X < Y; X++) f[L[X]] = G;
        } else
          H ? (this.options.visualElement.renderState.vars[w] = G) : (f[w] = G);
      }
      this.options.layoutId &&
        (f.pointerEvents =
          p === this ? ou(m == null ? void 0 : m.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((f) => {
        var m;
        return (m = f.currentAnimation) == null ? void 0 : m.stop();
      }),
        this.root.nodes.forEach(Ey),
        this.root.sharedNodes.clear();
    }
  };
}
function P2(i) {
  i.updateLayout();
}
function $2(i) {
  var u;
  const a = ((u = i.resumeFrom) == null ? void 0 : u.snapshot) || i.snapshot;
  if (i.isLead() && i.layout && a && i.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: c } = i.layout,
      { animationType: h } = i.options,
      f = a.source !== i.layout.source;
    if (h === "size")
      en((b) => {
        const S = f ? a.measuredBox[b] : a.layoutBox[b],
          M = ce(S);
        (S.min = s[b].min), (S.max = S.min + M);
      });
    else if (h === "x" || h === "y") {
      const b = h === "x" ? "y" : "x";
      Lc(f ? a.measuredBox[b] : a.layoutBox[b], s[b]);
    } else
      Vg(h, a.layoutBox, s) &&
        en((b) => {
          const S = f ? a.measuredBox[b] : a.layoutBox[b],
            M = ce(s[b]);
          (S.max = S.min + M),
            i.relativeTarget &&
              !i.currentAnimation &&
              ((i.isProjectionDirty = !0),
              (i.relativeTarget[b].max = i.relativeTarget[b].min + M));
        });
    const m = ma();
    Tl(m, s, a.layoutBox);
    const y = ma();
    f ? Tl(y, i.applyTransform(c, !0), a.measuredBox) : Tl(y, s, a.layoutBox);
    const p = !Dg(m);
    let v = !1;
    if (!i.resumeFrom) {
      const b = i.getClosestProjectingParent();
      if (b && !b.resumeFrom) {
        const { snapshot: S, layout: M } = b;
        if (S && M) {
          const w = i.options.layoutAnchor || void 0,
            U = Ft();
          gu(U, a.layoutBox, S.layoutBox, w);
          const L = Ft();
          gu(L, s, M.layoutBox, w),
            Cg(U, L) || (v = !0),
            b.options.layoutRoot &&
              ((i.relativeTarget = L),
              (i.relativeTargetOrigin = U),
              (i.relativeParent = b));
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: s,
      snapshot: a,
      delta: y,
      layoutDelta: m,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: v,
    });
  } else if (i.isLead()) {
    const { onExitComplete: s } = i.options;
    s && s();
  }
  i.options.transition = void 0;
}
function I2(i) {
  i.parent &&
    (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty),
    i.isSharedProjectionDirty ||
      (i.isSharedProjectionDirty = !!(
        i.isProjectionDirty ||
        i.parent.isProjectionDirty ||
        i.parent.isSharedProjectionDirty
      )),
    i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function tT(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function eT(i) {
  i.clearSnapshot();
}
function Ey(i) {
  i.clearMeasurements();
}
function nT(i) {
  (i.isLayoutDirty = !0), i.updateLayout();
}
function My(i) {
  i.isLayoutDirty = !1;
}
function iT(i) {
  i.isAnimationBlocked &&
    i.layout &&
    !i.isLayoutDirty &&
    ((i.snapshot = i.layout), (i.isLayoutDirty = !0));
}
function aT(i) {
  const { visualElement: a } = i.options;
  a && a.getProps().onBeforeLayoutMeasure && a.notify("BeforeLayoutMeasure"),
    i.resetTransform();
}
function Dy(i) {
  i.finishAnimation(),
    (i.targetDelta = i.relativeTarget = i.target = void 0),
    (i.isProjectionDirty = !0);
}
function lT(i) {
  i.resolveTargetDelta();
}
function sT(i) {
  i.calcProjection();
}
function uT(i) {
  i.resetSkewAndRotation();
}
function oT(i) {
  i.removeLeadSnapshot();
}
function Cy(i, a, u) {
  (i.translate = Nt(a.translate, 0, u)),
    (i.scale = Nt(a.scale, 1, u)),
    (i.origin = a.origin),
    (i.originPoint = a.originPoint);
}
function zy(i, a, u, s) {
  (i.min = Nt(a.min, u.min, s)), (i.max = Nt(a.max, u.max, s));
}
function rT(i, a, u, s) {
  zy(i.x, a.x, u.x, s), zy(i.y, a.y, u.y, s);
}
function cT(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const fT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ry = (i) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(i),
  Oy = Ry("applewebkit/") && !Ry("chrome/") ? Math.round : ve;
function wy(i) {
  (i.min = Oy(i.min)), (i.max = Oy(i.max));
}
function hT(i) {
  wy(i.x), wy(i.y);
}
function Vg(i, a, u) {
  return (
    i === "position" || (i === "preserve-aspect" && !N2(by(a), by(u), 0.2))
  );
}
function dT(i) {
  var a;
  return i !== i.root && ((a = i.scroll) == null ? void 0 : a.wasRoot);
}
const mT = wg({
    attachResizeListener: (i, a) => Cl(i, "resize", a),
    measureScroll: () => {
      var i, a;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((i = document.body) == null ? void 0 : i.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((a = document.body) == null ? void 0 : a.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  oc = { current: void 0 },
  Ng = wg({
    measureScroll: (i) => ({ x: i.scrollLeft, y: i.scrollTop }),
    defaultParent: () => {
      if (!oc.current) {
        const i = new mT({});
        i.mount(window), i.setOptions({ layoutScroll: !0 }), (oc.current = i);
      }
      return oc.current;
    },
    resetTransform: (i, a) => {
      i.style.transform = a !== void 0 ? a : "none";
    },
    checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed",
  }),
  Mu = q.createContext({
    transformPagePoint: (i) => i,
    isStatic: !1,
    reducedMotion: "never",
  });
function Vy(i, a) {
  if (typeof i == "function") return i(a);
  i != null && (i.current = a);
}
function pT(...i) {
  return (a) => {
    let u = !1;
    const s = i.map((c) => {
      const h = Vy(c, a);
      return !u && typeof h == "function" && (u = !0), h;
    });
    if (u)
      return () => {
        for (let c = 0; c < s.length; c++) {
          const h = s[c];
          typeof h == "function" ? h() : Vy(i[c], null);
        }
      };
  };
}
function yT(...i) {
  return q.useCallback(pT(...i), i);
}
class gT extends q.Component {
  getSnapshotBeforeUpdate(a) {
    const u = this.props.childRef.current;
    if (
      xl(u) &&
      a.isPresent &&
      !this.props.isPresent &&
      this.props.pop !== !1
    ) {
      const s = u.offsetParent,
        c = (xl(s) && s.offsetWidth) || 0,
        h = (xl(s) && s.offsetHeight) || 0,
        f = getComputedStyle(u),
        m = this.props.sizeRef.current;
      (m.height = parseFloat(f.height)),
        (m.width = parseFloat(f.width)),
        (m.top = u.offsetTop),
        (m.left = u.offsetLeft),
        (m.right = c - m.width - m.left),
        (m.bottom = h - m.height - m.top);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function vT({
  children: i,
  isPresent: a,
  anchorX: u,
  anchorY: s,
  root: c,
  pop: h,
}) {
  var S;
  const f = q.useId(),
    m = q.useRef(null),
    y = q.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: p } = q.useContext(Mu),
    v =
      ((S = i.props) == null ? void 0 : S.ref) ?? (i == null ? void 0 : i.ref),
    b = yT(m, v);
  return (
    q.useInsertionEffect(() => {
      const {
        width: M,
        height: w,
        top: U,
        left: L,
        right: H,
        bottom: G,
      } = y.current;
      if (a || h === !1 || !m.current || !M || !w) return;
      const Y = u === "left" ? `left: ${L}` : `right: ${H}`,
        X = s === "bottom" ? `bottom: ${G}` : `top: ${U}`;
      m.current.dataset.motionPopId = f;
      const k = document.createElement("style");
      p && (k.nonce = p);
      const lt = c ?? document.head;
      return (
        lt.appendChild(k),
        k.sheet &&
          k.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${M}px !important;
            height: ${w}px !important;
            ${Y}px !important;
            ${X}px !important;
          }
        `),
        () => {
          var I;
          (I = m.current) == null || I.removeAttribute("data-motion-pop-id"),
            lt.contains(k) && lt.removeChild(k);
        }
      );
    }, [a]),
    R.jsx(gT, {
      isPresent: a,
      childRef: m,
      sizeRef: y,
      pop: h,
      children: h === !1 ? i : q.cloneElement(i, { ref: b }),
    })
  );
}
const bT = ({
  children: i,
  initial: a,
  isPresent: u,
  onExitComplete: s,
  custom: c,
  presenceAffectsLayout: h,
  mode: f,
  anchorX: m,
  anchorY: y,
  root: p,
}) => {
  const v = $n(ST),
    b = q.useId();
  let S = !0,
    M = q.useMemo(
      () => (
        (S = !1),
        {
          id: b,
          initial: a,
          isPresent: u,
          custom: c,
          onExitComplete: (w) => {
            v.set(w, !0);
            for (const U of v.values()) if (!U) return;
            s && s();
          },
          register: (w) => (v.set(w, !1), () => v.delete(w)),
        }
      ),
      [u, v, s]
    );
  return (
    h && S && (M = { ...M }),
    q.useMemo(() => {
      v.forEach((w, U) => v.set(U, !1));
    }, [u]),
    q.useEffect(() => {
      !u && !v.size && s && s();
    }, [u]),
    (i = R.jsx(vT, {
      pop: f === "popLayout",
      isPresent: u,
      anchorX: m,
      anchorY: y,
      root: p,
      children: i,
    })),
    R.jsx(xu.Provider, { value: M, children: i })
  );
};
function ST() {
  return new Map();
}
function jg(i = !0) {
  const a = q.useContext(xu);
  if (a === null) return [!0, null];
  const { isPresent: u, onExitComplete: s, register: c } = a,
    h = q.useId();
  q.useEffect(() => {
    if (i) return c(h);
  }, [i]);
  const f = q.useCallback(() => i && s && s(h), [h, s, i]);
  return !u && s ? [!1, f] : [!0];
}
const $s = (i) => i.key || "";
function Ny(i) {
  const a = [];
  return (
    q.Children.forEach(i, (u) => {
      q.isValidElement(u) && a.push(u);
    }),
    a
  );
}
const xT = ({
    children: i,
    custom: a,
    initial: u = !0,
    onExitComplete: s,
    presenceAffectsLayout: c = !0,
    mode: h = "sync",
    propagate: f = !1,
    anchorX: m = "left",
    anchorY: y = "top",
    root: p,
  }) => {
    const [v, b] = jg(f),
      S = q.useMemo(() => Ny(i), [i]),
      M = f && !v ? [] : S.map($s),
      w = q.useRef(!0),
      U = q.useRef(S),
      L = $n(() => new Map()),
      H = q.useRef(new Set()),
      [G, Y] = q.useState(S),
      [X, k] = q.useState(S);
    Su(() => {
      (w.current = !1), (U.current = S);
      for (let $ = 0; $ < X.length; $++) {
        const it = $s(X[$]);
        M.includes(it)
          ? (L.delete(it), H.current.delete(it))
          : L.get(it) !== !0 && L.set(it, !1);
      }
    }, [X, M.length, M.join("-")]);
    const lt = [];
    if (S !== G) {
      let $ = [...S];
      for (let it = 0; it < X.length; it++) {
        const tt = X[it],
          pt = $s(tt);
        M.includes(pt) || ($.splice(it, 0, tt), lt.push(tt));
      }
      return h === "wait" && lt.length && ($ = lt), k(Ny($)), Y(S), null;
    }
    const { forceRender: I } = q.useContext(Xc);
    return R.jsx(R.Fragment, {
      children: X.map(($) => {
        const it = $s($),
          tt = f && !v ? !1 : S === X || M.includes(it),
          pt = () => {
            if (H.current.has(it)) return;
            if (L.has(it)) H.current.add(it), L.set(it, !0);
            else return;
            let bt = !0;
            L.forEach((It) => {
              It || (bt = !1);
            }),
              bt &&
                (I == null || I(),
                k(U.current),
                f && (b == null || b()),
                s && s());
          };
        return R.jsx(
          bT,
          {
            isPresent: tt,
            initial: !w.current || u ? void 0 : !1,
            custom: a,
            presenceAffectsLayout: c,
            mode: h,
            root: p,
            onExitComplete: tt ? void 0 : pt,
            anchorX: m,
            anchorY: y,
            children: $,
          },
          it
        );
      }),
    });
  },
  Bg = q.createContext({ strict: !1 }),
  jy = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let By = !1;
function TT() {
  if (By) return;
  const i = {};
  for (const a in jy) i[a] = { isEnabled: (u) => jy[a].some((s) => !!u[s]) };
  cg(i), (By = !0);
}
function _g() {
  return TT(), l2();
}
function AT(i) {
  const a = _g();
  for (const u in i) a[u] = { ...a[u], ...i[u] };
  cg(a);
}
const ET = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function vu(i) {
  return (
    i.startsWith("while") ||
    (i.startsWith("drag") && i !== "draggable") ||
    i.startsWith("layout") ||
    i.startsWith("onTap") ||
    i.startsWith("onPan") ||
    i.startsWith("onLayout") ||
    ET.has(i)
  );
}
let Ug = (i) => !vu(i);
function MT(i) {
  typeof i == "function" && (Ug = (a) => (a.startsWith("on") ? !vu(a) : i(a)));
}
try {
  MT(require("@emotion/is-prop-valid").default);
} catch {}
function DT(i, a, u) {
  const s = {};
  for (const c in i)
    (c === "values" && typeof i.values == "object") ||
      le(i[c]) ||
      ((Ug(c) ||
        (u === !0 && vu(c)) ||
        (!a && !vu(c)) ||
        (i.draggable && c.startsWith("onDrag"))) &&
        (s[c] = i[c]));
  return s;
}
const Du = q.createContext({});
function CT(i, a) {
  if (Eu(i)) {
    const { initial: u, animate: s } = i;
    return {
      initial: u === !1 || Dl(u) ? u : void 0,
      animate: Dl(s) ? s : void 0,
    };
  }
  return i.inherit !== !1 ? a : {};
}
function zT(i) {
  const { initial: a, animate: u } = CT(i, q.useContext(Du));
  return q.useMemo(() => ({ initial: a, animate: u }), [_y(a), _y(u)]);
}
function _y(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const vf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Lg(i, a, u) {
  for (const s in a) !le(a[s]) && !gg(s, u) && (i[s] = a[s]);
}
function RT({ transformTemplate: i }, a) {
  return q.useMemo(() => {
    const u = vf();
    return yf(u, a, i), Object.assign({}, u.vars, u.style);
  }, [a]);
}
function OT(i, a) {
  const u = i.style || {},
    s = {};
  return Lg(s, u, i), Object.assign(s, RT(i, a)), s;
}
function wT(i, a) {
  const u = {},
    s = OT(i, a);
  return (
    i.drag &&
      i.dragListener !== !1 &&
      ((u.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`)),
    i.tabIndex === void 0 &&
      (i.onTap || i.onTapStart || i.whileTap) &&
      (u.tabIndex = 0),
    (u.style = s),
    u
  );
}
const Hg = () => ({ ...vf(), attrs: {} });
function VT(i, a, u, s) {
  const c = q.useMemo(() => {
    const h = Hg();
    return (
      vg(h, a, Sg(s), i.transformTemplate, i.style),
      { ...h.attrs, style: { ...h.style } }
    );
  }, [a]);
  if (i.style) {
    const h = {};
    Lg(h, i.style, i), (c.style = { ...h, ...c.style });
  }
  return c;
}
const NT = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function bf(i) {
  return typeof i != "string" || i.includes("-")
    ? !1
    : !!(NT.indexOf(i) > -1 || /[A-Z]/u.test(i));
}
function jT(i, a, u, { latestValues: s }, c, h = !1, f) {
  const y = (f ?? bf(i) ? VT : wT)(a, s, c, i),
    p = DT(a, typeof i == "string", h),
    v = i !== q.Fragment ? { ...p, ...y, ref: u } : {},
    { children: b } = a,
    S = q.useMemo(() => (le(b) ? b.get() : b), [b]);
  return q.createElement(i, { ...v, children: S });
}
function BT({ scrapeMotionValuesFromProps: i, createRenderState: a }, u, s, c) {
  return { latestValues: _T(u, s, c, i), renderState: a() };
}
function _T(i, a, u, s) {
  const c = {},
    h = s(i, {});
  for (const S in h) c[S] = ou(h[S]);
  let { initial: f, animate: m } = i;
  const y = Eu(i),
    p = og(i);
  a &&
    p &&
    !y &&
    i.inherit !== !1 &&
    (f === void 0 && (f = a.initial), m === void 0 && (m = a.animate));
  let v = u ? u.initial === !1 : !1;
  v = v || f === !1;
  const b = v ? m : f;
  if (b && typeof b != "boolean" && !Au(b)) {
    const S = Array.isArray(b) ? b : [b];
    for (let M = 0; M < S.length; M++) {
      const w = of(i, S[M]);
      if (w) {
        const { transitionEnd: U, transition: L, ...H } = w;
        for (const G in H) {
          let Y = H[G];
          if (Array.isArray(Y)) {
            const X = v ? Y.length - 1 : 0;
            Y = Y[X];
          }
          Y !== null && (c[G] = Y);
        }
        for (const G in U) c[G] = U[G];
      }
    }
  }
  return c;
}
const Yg = (i) => (a, u) => {
    const s = q.useContext(Du),
      c = q.useContext(xu),
      h = () => BT(i, a, s, c);
    return u ? h() : $n(h);
  },
  UT = Yg({ scrapeMotionValuesFromProps: gf, createRenderState: vf }),
  LT = Yg({ scrapeMotionValuesFromProps: xg, createRenderState: Hg }),
  HT = Symbol.for("motionComponentSymbol");
function YT(i, a, u) {
  const s = q.useRef(u);
  q.useInsertionEffect(() => {
    s.current = u;
  });
  const c = q.useRef(null);
  return q.useCallback(
    (h) => {
      var m;
      h && ((m = i.onMount) == null || m.call(i, h));
      const f = s.current;
      if (typeof f == "function")
        if (h) {
          const y = f(h);
          typeof y == "function" && (c.current = y);
        } else c.current ? (c.current(), (c.current = null)) : f(h);
      else f && (f.current = h);
      a && (h ? a.mount(h) : a.unmount());
    },
    [a]
  );
}
const qg = q.createContext({});
function fa(i) {
  return (
    i &&
    typeof i == "object" &&
    Object.prototype.hasOwnProperty.call(i, "current")
  );
}
function qT(i, a, u, s, c, h) {
  var Y, X;
  const { visualElement: f } = q.useContext(Du),
    m = q.useContext(Bg),
    y = q.useContext(xu),
    p = q.useContext(Mu),
    v = p.reducedMotion,
    b = p.skipAnimations,
    S = q.useRef(null),
    M = q.useRef(!1);
  (s = s || m.renderer),
    !S.current &&
      s &&
      ((S.current = s(i, {
        visualState: a,
        parent: f,
        props: u,
        presenceContext: y,
        blockInitialAnimation: y ? y.initial === !1 : !1,
        reducedMotionConfig: v,
        skipAnimations: b,
        isSVG: h,
      })),
      M.current && S.current && (S.current.manuallyAnimateOnMount = !0));
  const w = S.current,
    U = q.useContext(qg);
  w &&
    !w.projection &&
    c &&
    (w.type === "html" || w.type === "svg") &&
    GT(S.current, u, c, U);
  const L = q.useRef(!1);
  q.useInsertionEffect(() => {
    w && L.current && w.update(u, y);
  });
  const H = u[J0],
    G = q.useRef(
      !!H &&
        typeof window < "u" &&
        !((Y = window.MotionHandoffIsComplete) != null && Y.call(window, H)) &&
        ((X = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : X.call(window, H))
    );
  return (
    Su(() => {
      (M.current = !0),
        w &&
          ((L.current = !0),
          (window.MotionIsMounted = !0),
          w.updateFeatures(),
          w.scheduleRenderMicrotask(),
          G.current && w.animationState && w.animationState.animateChanges());
    }),
    q.useEffect(() => {
      w &&
        (!G.current && w.animationState && w.animationState.animateChanges(),
        G.current &&
          (queueMicrotask(() => {
            var k;
            (k = window.MotionHandoffMarkAsComplete) == null ||
              k.call(window, H);
          }),
          (G.current = !1)),
        (w.enteringChildren = void 0));
    }),
    w
  );
}
function GT(i, a, u, s) {
  const {
    layoutId: c,
    layout: h,
    drag: f,
    dragConstraints: m,
    layoutScroll: y,
    layoutRoot: p,
    layoutAnchor: v,
    layoutCrossfade: b,
  } = a;
  (i.projection = new u(
    i.latestValues,
    a["data-framer-portal-id"] ? void 0 : Gg(i.parent)
  )),
    i.projection.setOptions({
      layoutId: c,
      layout: h,
      alwaysMeasureLayout: !!f || (m && fa(m)),
      visualElement: i,
      animationType: typeof h == "string" ? h : "both",
      initialPromotionConfig: s,
      crossfade: b,
      layoutScroll: y,
      layoutRoot: p,
      layoutAnchor: v,
    });
}
function Gg(i) {
  if (i) return i.options.allowProjection !== !1 ? i.projection : Gg(i.parent);
}
function rc(i, { forwardMotionProps: a = !1, type: u } = {}, s, c) {
  s && AT(s);
  const h = u ? u === "svg" : bf(i),
    f = h ? LT : UT;
  function m(p, v) {
    let b;
    const S = { ...q.useContext(Mu), ...p, layoutId: XT(p) },
      { isStatic: M } = S,
      w = zT(p),
      U = f(p, M);
    if (!M && typeof window < "u") {
      QT();
      const L = ZT(S);
      (b = L.MeasureLayout),
        (w.visualElement = qT(i, U, S, c, L.ProjectionNode, h));
    }
    return R.jsxs(Du.Provider, {
      value: w,
      children: [
        b && w.visualElement
          ? R.jsx(b, { visualElement: w.visualElement, ...S })
          : null,
        jT(i, p, YT(U, w.visualElement, v), U, M, a, h),
      ],
    });
  }
  m.displayName = `motion.${
    typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`
  }`;
  const y = q.forwardRef(m);
  return (y[HT] = i), y;
}
function XT({ layoutId: i }) {
  const a = q.useContext(Xc).id;
  return a && i !== void 0 ? a + "-" + i : i;
}
function QT(i, a) {
  q.useContext(Bg).strict;
}
function ZT(i) {
  const a = _g(),
    { drag: u, layout: s } = a;
  if (!u && !s) return {};
  const c = { ...u, ...s };
  return {
    MeasureLayout:
      (u != null && u.isEnabled(i)) || (s != null && s.isEnabled(i))
        ? c.MeasureLayout
        : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
function KT(i, a) {
  if (typeof Proxy > "u") return rc;
  const u = new Map(),
    s = (h, f) => rc(h, f, i, a),
    c = (h, f) => s(h, f);
  return new Proxy(c, {
    get: (h, f) =>
      f === "create"
        ? s
        : (u.has(f) || u.set(f, rc(f, void 0, i, a)), u.get(f)),
  });
}
const kT = (i, a) =>
  a.isSVG ?? bf(i)
    ? new T2(a)
    : new y2(a, { allowProjection: i !== q.Fragment });
class JT extends ti {
  constructor(a) {
    super(a), a.animationState || (a.animationState = C2(a));
  }
  updateAnimationControlsSubscription() {
    const { animate: a } = this.node.getProps();
    Au(a) && (this.unmountControls = a.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: a } = this.node.getProps(),
      { animate: u } = this.node.prevProps || {};
    a !== u && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var a;
    this.node.animationState.reset(),
      (a = this.unmountControls) == null || a.call(this);
  }
}
let FT = 0;
class WT extends ti {
  constructor() {
    super(...arguments), (this.id = FT++), (this.isExitComplete = !1);
  }
  update() {
    var h;
    if (!this.node.presenceContext) return;
    const { isPresent: a, onExitComplete: u } = this.node.presenceContext,
      { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || a === s) return;
    if (a && s === !1) {
      if (this.isExitComplete) {
        const { initial: f, custom: m } = this.node.getProps();
        if (typeof f == "string") {
          const y = Mi(this.node, f, m);
          if (y) {
            const { transition: p, transitionEnd: v, ...b } = y;
            for (const S in b)
              (h = this.node.getValue(S)) == null || h.jump(b[S]);
          }
        }
        this.node.animationState.reset(),
          this.node.animationState.animateChanges();
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !a);
    u &&
      !a &&
      c.then(() => {
        (this.isExitComplete = !0), u(this.id);
      });
  }
  mount() {
    const { register: a, onExitComplete: u } = this.node.presenceContext || {};
    u && u(this.id), a && (this.unmount = a(this.id));
  }
  unmount() {}
}
const PT = { animation: { Feature: JT }, exit: { Feature: WT } };
function wl(i) {
  return { point: { x: i.pageX, y: i.pageY } };
}
const $T = (i) => (a) => hf(a) && i(a, wl(a));
function Al(i, a, u, s) {
  return Cl(i, a, $T(u), s);
}
const Xg = ({ current: i }) => (i ? i.ownerDocument.defaultView : null),
  Uy = (i, a) => Math.abs(i - a);
function IT(i, a) {
  const u = Uy(i.x, a.x),
    s = Uy(i.y, a.y);
  return Math.sqrt(u ** 2 + s ** 2);
}
const Ly = new Set(["auto", "scroll"]);
class Qg {
  constructor(
    a,
    u,
    {
      transformPagePoint: s,
      contextWindow: c = window,
      dragSnapToOrigin: h = !1,
      distanceThreshold: f = 3,
      element: m,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (M) => {
        this.handleScroll(M.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Is(
            this.lastRawMoveEventInfo,
            this.transformPagePoint
          ));
        const M = cc(this.lastMoveEventInfo, this.history),
          w = this.startEvent !== null,
          U = IT(M.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!w && !U) return;
        const { point: L } = M,
          { timestamp: H } = $t;
        this.history.push({ ...L, timestamp: H });
        const { onStart: G, onMove: Y } = this.handlers;
        w ||
          (G && G(this.lastMoveEvent, M),
          (this.startEvent = this.lastMoveEvent)),
          Y && Y(this.lastMoveEvent, M);
      }),
      (this.handlePointerMove = (M, w) => {
        (this.lastMoveEvent = M),
          (this.lastRawMoveEventInfo = w),
          (this.lastMoveEventInfo = Is(w, this.transformPagePoint)),
          vt.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (M, w) => {
        this.end();
        const { onEnd: U, onSessionEnd: L, resumeAnimation: H } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && H && H(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const G = cc(
          M.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Is(w, this.transformPagePoint),
          this.history
        );
        this.startEvent && U && U(M, G), L && L(M, G);
      }),
      !hf(a))
    )
      return;
    (this.dragSnapToOrigin = h),
      (this.handlers = u),
      (this.transformPagePoint = s),
      (this.distanceThreshold = f),
      (this.contextWindow = c || window);
    const y = wl(a),
      p = Is(y, this.transformPagePoint),
      { point: v } = p,
      { timestamp: b } = $t;
    this.history = [{ ...v, timestamp: b }];
    const { onSessionStart: S } = u;
    S && S(a, cc(p, this.history)),
      (this.removeListeners = zl(
        Al(this.contextWindow, "pointermove", this.handlePointerMove),
        Al(this.contextWindow, "pointerup", this.handlePointerUp),
        Al(this.contextWindow, "pointercancel", this.handlePointerUp)
      )),
      m && this.startScrollTracking(m);
  }
  startScrollTracking(a) {
    let u = a.parentElement;
    for (; u; ) {
      const s = getComputedStyle(u);
      (Ly.has(s.overflowX) || Ly.has(s.overflowY)) &&
        this.scrollPositions.set(u, { x: u.scrollLeft, y: u.scrollTop }),
        (u = u.parentElement);
    }
    this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll);
      });
  }
  handleScroll(a) {
    const u = this.scrollPositions.get(a);
    if (!u) return;
    const s = a === window,
      c = s
        ? { x: window.scrollX, y: window.scrollY }
        : { x: a.scrollLeft, y: a.scrollTop },
      h = { x: c.x - u.x, y: c.y - u.y };
    (h.x === 0 && h.y === 0) ||
      (s
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += h.x),
          (this.lastMoveEventInfo.point.y += h.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= h.x), (this.history[0].y -= h.y)),
      this.scrollPositions.set(a, c),
      vt.update(this.updatePoint, !0));
  }
  updateHandlers(a) {
    this.handlers = a;
  }
  end() {
    this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      qe(this.updatePoint);
  }
}
function Is(i, a) {
  return a ? { point: a(i.point) } : i;
}
function Hy(i, a) {
  return { x: i.x - a.x, y: i.y - a.y };
}
function cc({ point: i }, a) {
  return {
    point: i,
    delta: Hy(i, Zg(a)),
    offset: Hy(i, tA(a)),
    velocity: eA(a, 0.1),
  };
}
function tA(i) {
  return i[0];
}
function Zg(i) {
  return i[i.length - 1];
}
function eA(i, a) {
  if (i.length < 2) return { x: 0, y: 0 };
  let u = i.length - 1,
    s = null;
  const c = Zg(i);
  for (; u >= 0 && ((s = i[u]), !(c.timestamp - s.timestamp > Re(a))); ) u--;
  if (!s) return { x: 0, y: 0 };
  s === i[0] &&
    i.length > 2 &&
    c.timestamp - s.timestamp > Re(a) * 2 &&
    (s = i[1]);
  const h = Ye(c.timestamp - s.timestamp);
  if (h === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - s.x) / h, y: (c.y - s.y) / h };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function nA(i, { min: a, max: u }, s) {
  return (
    a !== void 0 && i < a
      ? (i = s ? Nt(a, i, s.min) : Math.max(i, a))
      : u !== void 0 && i > u && (i = s ? Nt(u, i, s.max) : Math.min(i, u)),
    i
  );
}
function Yy(i, a, u) {
  return {
    min: a !== void 0 ? i.min + a : void 0,
    max: u !== void 0 ? i.max + u - (i.max - i.min) : void 0,
  };
}
function iA(i, { top: a, left: u, bottom: s, right: c }) {
  return { x: Yy(i.x, u, c), y: Yy(i.y, a, s) };
}
function qy(i, a) {
  let u = a.min - i.min,
    s = a.max - i.max;
  return a.max - a.min < i.max - i.min && ([u, s] = [s, u]), { min: u, max: s };
}
function aA(i, a) {
  return { x: qy(i.x, a.x), y: qy(i.y, a.y) };
}
function lA(i, a) {
  let u = 0.5;
  const s = ce(i),
    c = ce(a);
  return (
    c > s
      ? (u = pa(a.min, a.max - s, i.min))
      : s > c && (u = pa(i.min, i.max - c, a.min)),
    Fe(0, 1, u)
  );
}
function sA(i, a) {
  const u = {};
  return (
    a.min !== void 0 && (u.min = a.min - i.min),
    a.max !== void 0 && (u.max = a.max - i.min),
    u
  );
}
const Hc = 0.35;
function uA(i = Hc) {
  return (
    i === !1 ? (i = 0) : i === !0 && (i = Hc),
    { x: Gy(i, "left", "right"), y: Gy(i, "top", "bottom") }
  );
}
function Gy(i, a, u) {
  return { min: Xy(i, a), max: Xy(i, u) };
}
function Xy(i, a) {
  return typeof i == "number" ? i : i[a] || 0;
}
const oA = new WeakMap();
class rA {
  constructor(a) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Ft()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = a);
  }
  start(a, { snapToCursor: u = !1, distanceThreshold: s } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const h = (b) => {
        u && this.snapToCursor(wl(b).point), this.stopAnimation();
      },
      f = (b, S) => {
        const { drag: M, dragPropagation: w, onDragStart: U } = this.getProps();
        if (
          M &&
          !w &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = jx(M)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = b),
          (this.latestPanInfo = S),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          en((H) => {
            let G = this.getAxisMotionValue(H).get() || 0;
            if (an.test(G)) {
              const { projection: Y } = this.visualElement;
              if (Y && Y.layout) {
                const X = Y.layout.layoutBox[H];
                X && (G = ce(X) * (parseFloat(G) / 100));
              }
            }
            this.originPoint[H] = G;
          }),
          U && vt.update(() => U(b, S), !1, !0),
          Rc(this.visualElement, "transform");
        const { animationState: L } = this.visualElement;
        L && L.setActive("whileDrag", !0);
      },
      m = (b, S) => {
        (this.latestPointerEvent = b), (this.latestPanInfo = S);
        const {
          dragPropagation: M,
          dragDirectionLock: w,
          onDirectionLock: U,
          onDrag: L,
        } = this.getProps();
        if (!M && !this.openDragLock) return;
        const { offset: H } = S;
        if (w && this.currentDirection === null) {
          (this.currentDirection = fA(H)),
            this.currentDirection !== null && U && U(this.currentDirection);
          return;
        }
        this.updateAxis("x", S.point, H),
          this.updateAxis("y", S.point, H),
          this.visualElement.render(),
          L && vt.update(() => L(b, S), !1, !0);
      },
      y = (b, S) => {
        (this.latestPointerEvent = b),
          (this.latestPanInfo = S),
          this.stop(b, S),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      p = () => {
        const { dragSnapToOrigin: b } = this.getProps();
        (b || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new Qg(
      a,
      {
        onSessionStart: h,
        onStart: f,
        onMove: m,
        onSessionEnd: y,
        resumeAnimation: p,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: v,
        distanceThreshold: s,
        contextWindow: Xg(this.visualElement),
        element: this.visualElement.current,
      }
    );
  }
  stop(a, u) {
    const s = a || this.latestPointerEvent,
      c = u || this.latestPanInfo,
      h = this.isDragging;
    if ((this.cancel(), !h || !c || !s)) return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: m } = this.getProps();
    m && vt.postRender(() => m(s, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: a, animationState: u } = this.visualElement;
    a && (a.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: s } = this.getProps();
    !s &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      u && u.setActive("whileDrag", !1);
  }
  endPanSession() {
    this.panSession && this.panSession.end(), (this.panSession = void 0);
  }
  updateAxis(a, u, s) {
    const { drag: c } = this.getProps();
    if (!s || !tu(a, c, this.currentDirection)) return;
    const h = this.getAxisMotionValue(a);
    let f = this.originPoint[a] + s[a];
    this.constraints &&
      this.constraints[a] &&
      (f = nA(f, this.constraints[a], this.elastic[a])),
      h.set(f);
  }
  resolveConstraints() {
    var h;
    const { dragConstraints: a, dragElastic: u } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (h = this.visualElement.projection) == null
          ? void 0
          : h.layout,
      c = this.constraints;
    a && fa(a)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : a && s
      ? (this.constraints = iA(s.layoutBox, a))
      : (this.constraints = !1),
      (this.elastic = uA(u)),
      c !== this.constraints &&
        !fa(a) &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        en((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = sA(s.layoutBox[f], this.constraints[f]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: a, onMeasureDragConstraints: u } = this.getProps();
    if (!a || !fa(a)) return !1;
    const s = a.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const h = c2(s, c.root, this.visualElement.getTransformPagePoint());
    let f = aA(c.layout.layoutBox, h);
    if (u) {
      const m = u(u2(f));
      (this.hasMutatedConstraints = !!m), m && (f = hg(m));
    }
    return f;
  }
  startAnimation(a) {
    const {
        drag: u,
        dragMomentum: s,
        dragElastic: c,
        dragTransition: h,
        dragSnapToOrigin: f,
        onDragTransitionEnd: m,
      } = this.getProps(),
      y = this.constraints || {},
      p = en((v) => {
        if (!tu(v, u, this.currentDirection)) return;
        let b = (y && y[v]) || {};
        (f === !0 || f === v) && (b = { min: 0, max: 0 });
        const S = c ? 200 : 1e6,
          M = c ? 40 : 1e7,
          w = {
            type: "inertia",
            velocity: s ? a[v] : 0,
            bounceStiffness: S,
            bounceDamping: M,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...h,
            ...b,
          };
        return this.startAxisValueAnimation(v, w);
      });
    return Promise.all(p).then(m);
  }
  startAxisValueAnimation(a, u) {
    const s = this.getAxisMotionValue(a);
    return (
      Rc(this.visualElement, a), s.start(uf(a, s, 0, u, this.visualElement, !1))
    );
  }
  stopAnimation() {
    en((a) => this.getAxisMotionValue(a).stop());
  }
  getAxisMotionValue(a) {
    const u = `_drag${a.toUpperCase()}`,
      s = this.visualElement.getProps(),
      c = s[u];
    return (
      c ||
      this.visualElement.getValue(a, (s.initial ? s.initial[a] : void 0) || 0)
    );
  }
  snapToCursor(a) {
    en((u) => {
      const { drag: s } = this.getProps();
      if (!tu(u, s, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        h = this.getAxisMotionValue(u);
      if (c && c.layout) {
        const { min: f, max: m } = c.layout.layoutBox[u],
          y = h.get() || 0;
        h.set(a[u] - Nt(f, m, 0.5) + y);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: a, dragConstraints: u } = this.getProps(),
      { projection: s } = this.visualElement;
    if (!fa(u) || !s || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    en((f) => {
      const m = this.getAxisMotionValue(f);
      if (m && this.constraints !== !1) {
        const y = m.get();
        c[f] = lA({ min: y, max: y }, this.constraints[f]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = h ? h({}, "") : "none"),
      s.root && s.root.updateScroll(),
      s.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      en((f) => {
        if (!tu(f, a, null)) return;
        const m = this.getAxisMotionValue(f),
          { min: y, max: p } = this.constraints[f];
        m.set(Nt(y, p, c[f]));
      }),
      this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current) return;
    oA.set(this.visualElement, this);
    const a = this.visualElement.current,
      u = Al(a, "pointerdown", (p) => {
        const { drag: v, dragListener: b = !0 } = this.getProps(),
          S = p.target,
          M = S !== a && Yx(S);
        v && b && !M && this.start(p);
      });
    let s;
    const c = () => {
        const { dragConstraints: p } = this.getProps();
        fa(p) &&
          p.current &&
          ((this.constraints = this.resolveRefConstraints()),
          s ||
            (s = cA(a, p.current, () =>
              this.scalePositionWithinConstraints()
            )));
      },
      { projection: h } = this.visualElement,
      f = h.addEventListener("measure", c);
    h && !h.layout && (h.root && h.root.updateScroll(), h.updateLayout()),
      vt.read(c);
    const m = Cl(window, "resize", () => this.scalePositionWithinConstraints()),
      y = h.addEventListener(
        "didUpdate",
        ({ delta: p, hasLayoutChanged: v }) => {
          this.isDragging &&
            v &&
            (en((b) => {
              const S = this.getAxisMotionValue(b);
              S &&
                ((this.originPoint[b] += p[b].translate),
                S.set(S.get() + p[b].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      m(), u(), f(), y && y(), s && s();
    };
  }
  getProps() {
    const a = this.visualElement.getProps(),
      {
        drag: u = !1,
        dragDirectionLock: s = !1,
        dragPropagation: c = !1,
        dragConstraints: h = !1,
        dragElastic: f = Hc,
        dragMomentum: m = !0,
      } = a;
    return {
      ...a,
      drag: u,
      dragDirectionLock: s,
      dragPropagation: c,
      dragConstraints: h,
      dragElastic: f,
      dragMomentum: m,
    };
  }
}
function Qy(i) {
  let a = !0;
  return () => {
    if (a) {
      a = !1;
      return;
    }
    i();
  };
}
function cA(i, a, u) {
  const s = Nc(i, Qy(u)),
    c = Nc(a, Qy(u));
  return () => {
    s(), c();
  };
}
function tu(i, a, u) {
  return (a === !0 || a === i) && (u === null || u === i);
}
function fA(i, a = 10) {
  let u = null;
  return Math.abs(i.y) > a ? (u = "y") : Math.abs(i.x) > a && (u = "x"), u;
}
class hA extends ti {
  constructor(a) {
    super(a),
      (this.removeGroupControls = ve),
      (this.removeListeners = ve),
      (this.controls = new rA(a));
  }
  mount() {
    const { dragControls: a } = this.node.getProps();
    a && (this.removeGroupControls = a.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ve);
  }
  update() {
    const { dragControls: a } = this.node.getProps(),
      { dragControls: u } = this.node.prevProps || {};
    a !== u &&
      (this.removeGroupControls(),
      a && (this.removeGroupControls = a.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession();
  }
}
const fc = (i) => (a, u) => {
  i && vt.update(() => i(a, u), !1, !0);
};
class dA extends ti {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ve);
  }
  onPointerDown(a) {
    this.session = new Qg(a, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Xg(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: a,
      onPanStart: u,
      onPan: s,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: fc(a),
      onStart: fc(u),
      onMove: fc(s),
      onEnd: (h, f) => {
        delete this.session, c && vt.postRender(() => c(h, f));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Al(this.node.current, "pointerdown", (a) =>
      this.onPointerDown(a)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let hc = !1;
class mA extends q.Component {
  componentDidMount() {
    const {
        visualElement: a,
        layoutGroup: u,
        switchLayoutGroup: s,
        layoutId: c,
      } = this.props,
      { projection: h } = a;
    h &&
      (u.group && u.group.add(h),
      s && s.register && c && s.register(h),
      hc && h.root.didUpdate(),
      h.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      h.setOptions({
        ...h.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (ru.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(a) {
    const {
        layoutDependency: u,
        visualElement: s,
        drag: c,
        isPresent: h,
      } = this.props,
      { projection: f } = s;
    return (
      f &&
        ((f.isPresent = h),
        a.layoutDependency !== u &&
          f.setOptions({ ...f.options, layoutDependency: u }),
        (hc = !0),
        c || a.layoutDependency !== u || u === void 0 || a.isPresent !== h
          ? f.willUpdate()
          : this.safeToRemove(),
        a.isPresent !== h &&
          (h
            ? f.promote()
            : f.relegate() ||
              vt.postRender(() => {
                const m = f.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: a, layoutAnchor: u } = this.props,
      { projection: s } = a;
    s &&
      ((s.options.layoutAnchor = u),
      s.root.didUpdate(),
      ff.postRender(() => {
        !s.currentAnimation && s.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: a,
        layoutGroup: u,
        switchLayoutGroup: s,
      } = this.props,
      { projection: c } = a;
    (hc = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        u && u.group && u.group.remove(c),
        s && s.deregister && s.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: a } = this.props;
    a && a();
  }
  render() {
    return null;
  }
}
function Kg(i) {
  const [a, u] = jg(),
    s = q.useContext(Xc);
  return R.jsx(mA, {
    ...i,
    layoutGroup: s,
    switchLayoutGroup: q.useContext(qg),
    isPresent: a,
    safeToRemove: u,
  });
}
const pA = {
  pan: { Feature: dA },
  drag: { Feature: hA, ProjectionNode: Ng, MeasureLayout: Kg },
};
function Zy(i, a, u) {
  const { props: s } = i;
  i.animationState &&
    s.whileHover &&
    i.animationState.setActive("whileHover", u === "Start");
  const c = "onHover" + u,
    h = s[c];
  h && vt.postRender(() => h(a, wl(a)));
}
class yA extends ti {
  mount() {
    const { current: a } = this.node;
    a &&
      (this.unmount = _x(
        a,
        (u, s) => (Zy(this.node, s, "Start"), (c) => Zy(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class gA extends ti {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let a = !1;
    try {
      a = this.node.current.matches(":focus-visible");
    } catch {
      a = !0;
    }
    !a ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = zl(
      Cl(this.node.current, "focus", () => this.onFocus()),
      Cl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function Ky(i, a, u) {
  const { props: s } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled) return;
  i.animationState &&
    s.whileTap &&
    i.animationState.setActive("whileTap", u === "Start");
  const c = "onTap" + (u === "End" ? "" : u),
    h = s[c];
  h && vt.postRender(() => h(a, wl(a)));
}
class vA extends ti {
  mount() {
    const { current: a } = this.node;
    if (!a) return;
    const { globalTapTarget: u, propagate: s } = this.node.props;
    this.unmount = Gx(
      a,
      (c, h) => (
        Ky(this.node, h, "Start"),
        (f, { success: m }) => Ky(this.node, f, m ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: u,
        stopPropagation: (s == null ? void 0 : s.tap) === !1,
      }
    );
  }
  unmount() {}
}
const Yc = new WeakMap(),
  dc = new WeakMap(),
  bA = (i) => {
    const a = Yc.get(i.target);
    a && a(i);
  },
  SA = (i) => {
    i.forEach(bA);
  };
function xA({ root: i, ...a }) {
  const u = i || document;
  dc.has(u) || dc.set(u, {});
  const s = dc.get(u),
    c = JSON.stringify(a);
  return s[c] || (s[c] = new IntersectionObserver(SA, { root: i, ...a })), s[c];
}
function TA(i, a, u) {
  const s = xA(a);
  return (
    Yc.set(i, u),
    s.observe(i),
    () => {
      Yc.delete(i), s.unobserve(i);
    }
  );
}
const AA = { some: 0, all: 1 };
class EA extends ti {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    var y;
    (y = this.stopObserver) == null || y.call(this);
    const { viewport: a = {} } = this.node.getProps(),
      { root: u, margin: s, amount: c = "some", once: h } = a,
      f = {
        root: u ? u.current : void 0,
        rootMargin: s,
        threshold: typeof c == "number" ? c : AA[c],
      },
      m = (p) => {
        const { isIntersecting: v } = p;
        if (
          this.isInView === v ||
          ((this.isInView = v), h && !v && this.hasEnteredView)
        )
          return;
        v && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", v);
        const { onViewportEnter: b, onViewportLeave: S } = this.node.getProps(),
          M = v ? b : S;
        M && M(p);
      };
    this.stopObserver = TA(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: a, prevProps: u } = this.node;
    ["amount", "margin", "root"].some(MA(a, u)) && this.startObserver();
  }
  unmount() {
    var a;
    (a = this.stopObserver) == null || a.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1);
  }
}
function MA({ viewport: i = {} }, { viewport: a = {} } = {}) {
  return (u) => i[u] !== a[u];
}
const DA = {
    inView: { Feature: EA },
    tap: { Feature: vA },
    focus: { Feature: gA },
    hover: { Feature: yA },
  },
  CA = { layout: { ProjectionNode: Ng, MeasureLayout: Kg } },
  zA = { ...PT, ...DA, ...pA, ...CA },
  Ot = KT(zA, kT);
function bu(i) {
  return typeof window > "u" ? !1 : i ? U0() : lf();
}
const RA = 50,
  ky = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  OA = () => ({ time: 0, x: ky(), y: ky() }),
  wA = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Jy(i, a, u, s) {
  const c = u[a],
    { length: h, position: f } = wA[a],
    m = c.current,
    y = u.time;
  (c.current = Math.abs(i[`scroll${f}`])),
    (c.scrollLength = i[`scroll${h}`] - i[`client${h}`]),
    (c.offset.length = 0),
    (c.offset[0] = 0),
    (c.offset[1] = c.scrollLength),
    (c.progress = pa(0, c.scrollLength, c.current));
  const p = s - y;
  c.velocity = p > RA ? 0 : Kc(c.current - m, p);
}
function VA(i, a, u) {
  Jy(i, "x", a, u), Jy(i, "y", a, u), (a.time = u);
}
function NA(i, a) {
  const u = { x: 0, y: 0 };
  let s = i;
  for (; s && s !== a; )
    if (xl(s))
      (u.x += s.offsetLeft), (u.y += s.offsetTop), (s = s.offsetParent);
    else if (s.tagName === "svg") {
      const c = s.getBoundingClientRect();
      s = s.parentElement;
      const h = s.getBoundingClientRect();
      (u.x += c.left - h.left), (u.y += c.top - h.top);
    } else if (s instanceof SVGGraphicsElement) {
      const { x: c, y: h } = s.getBBox();
      (u.x += c), (u.y += h);
      let f = null,
        m = s.parentNode;
      for (; !f; ) m.tagName === "svg" && (f = m), (m = s.parentNode);
      s = f;
    } else break;
  return u;
}
const qc = { start: 0, center: 0.5, end: 1 };
function Fy(i, a, u = 0) {
  let s = 0;
  if ((i in qc && (i = qc[i]), typeof i == "string")) {
    const c = parseFloat(i);
    i.endsWith("px")
      ? (s = c)
      : i.endsWith("%")
      ? (i = c / 100)
      : i.endsWith("vw")
      ? (s = (c / 100) * document.documentElement.clientWidth)
      : i.endsWith("vh")
      ? (s = (c / 100) * document.documentElement.clientHeight)
      : (i = c);
  }
  return typeof i == "number" && (s = a * i), u + s;
}
const jA = [0, 0];
function BA(i, a, u, s) {
  let c = Array.isArray(i) ? i : jA,
    h = 0,
    f = 0;
  return (
    typeof i == "number"
      ? (c = [i, i])
      : typeof i == "string" &&
        ((i = i.trim()),
        i.includes(" ") ? (c = i.split(" ")) : (c = [i, qc[i] ? i : "0"])),
    (h = Fy(c[0], u, s)),
    (f = Fy(c[1], a)),
    h - f
  );
}
const gl = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  _A = { x: 0, y: 0 };
function UA(i) {
  return "getBBox" in i && i.tagName !== "svg"
    ? i.getBBox()
    : { width: i.clientWidth, height: i.clientHeight };
}
function LA(i, a, u) {
  const { offset: s = gl.All } = u,
    { target: c = i, axis: h = "y" } = u,
    f = h === "y" ? "height" : "width",
    m = c !== i ? NA(c, i) : _A,
    y = c === i ? { width: i.scrollWidth, height: i.scrollHeight } : UA(c),
    p = { width: i.clientWidth, height: i.clientHeight };
  a[h].offset.length = 0;
  let v = !a[h].interpolate;
  const b = s.length;
  for (let S = 0; S < b; S++) {
    const M = BA(s[S], p[f], y[f], m[h]);
    !v && M !== a[h].interpolatorOffsets[S] && (v = !0), (a[h].offset[S] = M);
  }
  v &&
    ((a[h].interpolate = tf(a[h].offset, V0(s), { clamp: !1 })),
    (a[h].interpolatorOffsets = [...a[h].offset])),
    (a[h].progress = Fe(0, 1, a[h].interpolate(a[h].current)));
}
function HA(i, a = i, u) {
  if (((u.x.targetOffset = 0), (u.y.targetOffset = 0), a !== i)) {
    let s = a;
    for (; s && s !== i; )
      (u.x.targetOffset += s.offsetLeft),
        (u.y.targetOffset += s.offsetTop),
        (s = s.offsetParent);
  }
  (u.x.targetLength = a === i ? a.scrollWidth : a.clientWidth),
    (u.y.targetLength = a === i ? a.scrollHeight : a.clientHeight),
    (u.x.containerLength = i.clientWidth),
    (u.y.containerLength = i.clientHeight);
}
function YA(i, a, u, s = {}) {
  return {
    measure: (c) => {
      HA(i, s.target, u), VA(i, u, c), (s.offset || s.target) && LA(i, u, s);
    },
    notify: () => a(u),
  };
}
const ca = new WeakMap(),
  Wy = new WeakMap(),
  mc = new WeakMap(),
  Py = new WeakMap(),
  eu = new WeakMap(),
  $y = (i) => (i === document.scrollingElement ? window : i);
function kg(
  i,
  {
    container: a = document.scrollingElement,
    trackContentSize: u = !1,
    ...s
  } = {}
) {
  if (!a) return ve;
  let c = mc.get(a);
  c || ((c = new Set()), mc.set(a, c));
  const h = OA(),
    f = YA(a, i, h, s);
  if ((c.add(f), !ca.has(a))) {
    const y = () => {
        for (const S of c) S.measure($t.timestamp);
        vt.preUpdate(p);
      },
      p = () => {
        for (const S of c) S.notify();
      },
      v = () => vt.read(y);
    ca.set(a, v);
    const b = $y(a);
    window.addEventListener("resize", v),
      a !== document.documentElement && Wy.set(a, Nc(a, v)),
      b.addEventListener("scroll", v),
      v();
  }
  if (u && !eu.has(a)) {
    const y = ca.get(a),
      p = { width: a.scrollWidth, height: a.scrollHeight };
    Py.set(a, p);
    const v = () => {
        const S = a.scrollWidth,
          M = a.scrollHeight;
        (p.width !== S || p.height !== M) &&
          (y(), (p.width = S), (p.height = M));
      },
      b = vt.read(v, !0);
    eu.set(a, b);
  }
  const m = ca.get(a);
  return (
    vt.read(m, !1, !0),
    () => {
      var b;
      qe(m);
      const y = mc.get(a);
      if (!y || (y.delete(f), y.size)) return;
      const p = ca.get(a);
      ca.delete(a),
        p &&
          ($y(a).removeEventListener("scroll", p),
          (b = Wy.get(a)) == null || b(),
          window.removeEventListener("resize", p));
      const v = eu.get(a);
      v && (qe(v), eu.delete(a)), Py.delete(a);
    }
  );
}
const qA = [
    [gl.Enter, "entry"],
    [gl.Exit, "exit"],
    [gl.Any, "cover"],
    [gl.All, "contain"],
  ],
  Iy = { start: 0, end: 1 };
function GA(i) {
  const a = i.trim().split(/\s+/);
  if (a.length !== 2) return;
  const u = Iy[a[0]],
    s = Iy[a[1]];
  if (!(u === void 0 || s === void 0)) return [u, s];
}
function XA(i) {
  if (i.length !== 2) return;
  const a = [];
  for (const u of i)
    if (Array.isArray(u)) a.push(u);
    else if (typeof u == "string") {
      const s = GA(u);
      if (!s) return;
      a.push(s);
    } else return;
  return a;
}
function QA(i, a) {
  const u = XA(i);
  if (!u) return !1;
  for (let s = 0; s < 2; s++) {
    const c = u[s],
      h = a[s];
    if (c[0] !== h[0] || c[1] !== h[1]) return !1;
  }
  return !0;
}
function Sf(i) {
  if (!i) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
  for (const [a, u] of qA)
    if (QA(i, a)) return { rangeStart: `${u} 0%`, rangeEnd: `${u} 100%` };
}
const t0 = new Map();
function e0(i) {
  const a = { value: 0 },
    u = kg((s) => {
      a.value = s[i.axis].progress * 100;
    }, i);
  return { currentTime: a, cancel: u };
}
function Jg({ source: i, container: a, ...u }) {
  const { axis: s } = u;
  i && (a = i);
  let c = t0.get(a);
  c || ((c = new Map()), t0.set(a, c));
  const h = u.target ?? "self";
  let f = c.get(h);
  f || ((f = {}), c.set(h, f));
  const m = s + (u.offset ?? []).join(",");
  return (
    f[m] ||
      (u.target && bu(u.target)
        ? Sf(u.offset)
          ? (f[m] = new ViewTimeline({ subject: u.target, axis: s }))
          : (f[m] = e0({ container: a, ...u }))
        : bu()
        ? (f[m] = new ScrollTimeline({ source: a, axis: s }))
        : (f[m] = e0({ container: a, ...u }))),
    f[m]
  );
}
function ZA(i, a) {
  const u = Jg(a),
    s = a.target ? Sf(a.offset) : void 0,
    c = a.target ? bu(a.target) && !!s : bu();
  return i.attachTimeline({
    timeline: c ? u : void 0,
    ...(s && c && { rangeStart: s.rangeStart, rangeEnd: s.rangeEnd }),
    observe: (h) => (
      h.pause(),
      ug((f) => {
        h.time = h.iterationDuration * f;
      }, u)
    ),
  });
}
function KA(i) {
  return i.length === 2;
}
function kA(i, a) {
  return KA(i)
    ? kg((u) => {
        i(u[a.axis].progress, u);
      }, a)
    : ug(i, Jg(a));
}
function Fg(
  i,
  { axis: a = "y", container: u = document.scrollingElement, ...s } = {}
) {
  if (!u) return ve;
  const c = { axis: a, container: u, ...s };
  return typeof i == "function" ? kA(i, c) : ZA(i, c);
}
const JA = () => ({
    scrollX: ke(0),
    scrollY: ke(0),
    scrollXProgress: ke(0),
    scrollYProgress: ke(0),
  }),
  nu = (i) => (i ? !i.current : !1);
function n0(i, a, u, s) {
  return {
    factory: (c) =>
      Fg(c, {
        ...a,
        axis: i,
        container: (u == null ? void 0 : u.current) || void 0,
        target: (s == null ? void 0 : s.current) || void 0,
      }),
    times: [0, 1],
    keyframes: [0, 1],
    ease: (c) => c,
    duration: 1,
  };
}
function FA(i, a) {
  return typeof window > "u" ? !1 : i ? U0() && !!Sf(a) : lf();
}
function WA({ container: i, target: a, ...u } = {}) {
  const s = $n(JA);
  FA(a, u.offset) &&
    ((s.scrollXProgress.accelerate = n0("x", u, i, a)),
    (s.scrollYProgress.accelerate = n0("y", u, i, a)));
  const c = q.useRef(null),
    h = q.useRef(!1),
    f = q.useCallback(
      () => (
        (c.current = Fg(
          (m, { x: y, y: p }) => {
            s.scrollX.set(y.current),
              s.scrollXProgress.set(y.progress),
              s.scrollY.set(p.current),
              s.scrollYProgress.set(p.progress);
          },
          {
            ...u,
            container: (i == null ? void 0 : i.current) || void 0,
            target: (a == null ? void 0 : a.current) || void 0,
          }
        )),
        () => {
          var m;
          (m = c.current) == null || m.call(c);
        }
      ),
      [i, a, JSON.stringify(u.offset)]
    );
  return (
    Su(() => {
      if (((h.current = !1), nu(i) || nu(a))) {
        h.current = !0;
        return;
      } else return f();
    }, [f]),
    q.useEffect(() => {
      if (h.current) return El(!nu(i)), El(!nu(a)), f();
    }, [f]),
    s
  );
}
function PA(i) {
  const a = $n(() => ke(i)),
    { isStatic: u } = q.useContext(Mu);
  if (u) {
    const [, s] = q.useState(i);
    q.useEffect(() => a.on("change", s), []);
  }
  return a;
}
function Wg(i, a) {
  const u = PA(a()),
    s = () => u.set(a());
  return (
    s(),
    Su(() => {
      const c = () => vt.preRender(s, !1, !0),
        h = i.map((f) => f.on("change", c));
      return () => {
        h.forEach((f) => f()), qe(s);
      };
    }),
    u
  );
}
function $A(i) {
  (Sl.current = []), i();
  const a = Wg(Sl.current, i);
  return (Sl.current = void 0), a;
}
function Pg(i, a, u, s) {
  if (typeof i == "function") return $A(i);
  if (u !== void 0 && !Array.isArray(u) && typeof a != "function")
    return IA(i, a, u, s);
  const f = typeof a == "function" ? a : $x(a, u, s),
    m = Array.isArray(i) ? i0(i, f) : i0([i], ([p]) => f(p)),
    y = Array.isArray(i) ? void 0 : i.accelerate;
  return (
    y &&
      !y.isTransformed &&
      typeof a != "function" &&
      Array.isArray(u) &&
      (s == null ? void 0 : s.clamp) !== !1 &&
      (m.accelerate = { ...y, times: a, keyframes: u, isTransformed: !0 }),
    m
  );
}
function i0(i, a) {
  const u = $n(() => []);
  return Wg(i, () => {
    u.length = 0;
    const s = i.length;
    for (let c = 0; c < s; c++) u[c] = i[c].get();
    return a(u);
  });
}
function IA(i, a, u, s) {
  const c = $n(() => Object.keys(u)),
    h = $n(() => ({}));
  for (const f of c) h[f] = Pg(i, a, u[f], s);
  return h;
}
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tE = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  eE = (i) =>
    i.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, u, s) =>
      s ? s.toUpperCase() : u.toLowerCase()
    ),
  a0 = (i) => {
    const a = eE(i);
    return a.charAt(0).toUpperCase() + a.slice(1);
  },
  $g = (...i) =>
    i
      .filter((a, u, s) => !!a && a.trim() !== "" && s.indexOf(a) === u)
      .join(" ")
      .trim(),
  nE = (i) => {
    for (const a in i)
      if (a.startsWith("aria-") || a === "role" || a === "title") return !0;
  };
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var iE = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aE = q.forwardRef(
  (
    {
      color: i = "currentColor",
      size: a = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: s,
      className: c = "",
      children: h,
      iconNode: f,
      ...m
    },
    y
  ) =>
    q.createElement(
      "svg",
      {
        ref: y,
        ...iE,
        width: a,
        height: a,
        stroke: i,
        strokeWidth: s ? (Number(u) * 24) / Number(a) : u,
        className: $g("lucide", c),
        ...(!h && !nE(m) && { "aria-hidden": "true" }),
        ...m,
      },
      [
        ...f.map(([p, v]) => q.createElement(p, v)),
        ...(Array.isArray(h) ? h : [h]),
      ]
    )
);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const We = (i, a) => {
  const u = q.forwardRef(({ className: s, ...c }, h) =>
    q.createElement(aE, {
      ref: h,
      iconNode: a,
      className: $g(`lucide-${tE(a0(i))}`, `lucide-${i}`, s),
      ...c,
    })
  );
  return (u.displayName = a0(i)), u;
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lE = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  sE = We("book-open", lE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uE = [
    ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
    ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
    ["path", { d: "M7 6h1v4", key: "1obek4" }],
    ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
  ],
  oE = We("coins", uE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rE = [
    ["path", { d: "M10 2v2", key: "7u0qdc" }],
    ["path", { d: "M14 2v2", key: "6buw04" }],
    [
      "path",
      {
        d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
        key: "pwadti",
      },
    ],
    ["path", { d: "M6 2v2", key: "colzsn" }],
  ],
  cE = We("coffee", rE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fE = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
  hE = We("copy", fE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dE = [
    [
      "path",
      {
        d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
        key: "169xi5",
      },
    ],
    ["path", { d: "M15 5.764v15", key: "1pn4in" }],
    ["path", { d: "M9 3.236v15", key: "1uimfh" }],
  ],
  mE = We("map", dE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pE = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  yE = We("menu", pE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gE = [
    [
      "path",
      {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
        key: "m3kijz",
      },
    ],
    [
      "path",
      {
        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
        key: "1fmvmk",
      },
    ],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  ],
  vE = We("rocket", gE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bE = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  SE = We("search", bE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xE = [
    ["path", { d: "M7 10v12", key: "1qc93n" }],
    [
      "path",
      {
        d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
        key: "emmmcr",
      },
    ],
  ],
  TE = We("thumbs-up", xE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AE = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  EE = We("triangle-alert", AE);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ME = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  DE = We("x", ME);
function Jn({
  children: i,
  onClick: a,
  className: u = "",
  crazyHover: s = !1,
}) {
  return R.jsx("button", {
    onClick: a,
    className: `cta-btn font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none ${u}`,
    children: i,
  });
}
function pc({ className: i = "" }) {
  return R.jsxs(Ot.svg, {
    viewBox: "0 0 200 150",
    fill: "white",
    stroke: "black",
    strokeWidth: "6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: i,
    animate: { y: [0, -10, 0, -5, 0], rotate: [0, 2, -2, 0] },
    transition: { duration: 4, repeat: 1 / 0, repeatType: "mirror" },
    whileHover: {
      scale: 1.1,
      rotate: 15,
      transition: { type: "spring", stiffness: 300 },
    },
    children: [
      R.jsx("path", {
        d: "M 40 120 C 30 80, 50 30, 100 25 C 150 20, 180 50, 185 90 C 190 130, 140 140, 100 140 C 60 140, 45 130, 40 120 Z",
      }),
      R.jsx("path", {
        d: "M 60 45 Q 20 40 10 50 C 20 50, 40 60, 55 55",
        fill: "white",
      }),
      R.jsx("circle", {
        cx: "80",
        cy: "40",
        r: "3",
        fill: "black",
        stroke: "none",
      }),
      R.jsx("circle", {
        cx: "130",
        cy: "55",
        r: "3",
        fill: "black",
        stroke: "none",
      }),
      R.jsx("path", { d: "M 60 70 Q 70 90 90 85", fill: "none" }),
      R.jsx("path", { d: "M 130 75 Q 110 95 90 90", fill: "none" }),
      R.jsx("path", { d: "M 40 120 L 20 125 L 25 115", fill: "none" }),
      R.jsx("path", { d: "M 160 135 L 180 140 L 175 130", fill: "none" }),
    ],
  });
}
const l0 = "0x79bAe69A90E112fe9ded209A118381f448826172",
  s0 = [
    { label: "Home", href: "#home" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "How to Buy", href: "#howtobuy" },
    { label: "Roadmap", href: "#roadmap" },
  ];
function CE() {
  const { scrollYProgress: i } = WA(),
    a = Pg(i, [0, 1], [0, 15]),
    [u, s] = q.useState(!1),
    [c, h] = q.useState(!1);
  function f() {
    navigator.clipboard.writeText(l0), s(!0), setTimeout(() => s(!1), 2e3);
  }
  return R.jsxs("div", {
    className:
      "min-h-screen bg-black font-meme selection:bg-black selection:text-white",
    children: [
      R.jsxs("nav", {
        className:
          "fixed top-0 left-0 z-50 w-full border-b-8 border-yellow bg-black",
        children: [
          R.jsxs("div", {
            className:
              "mx-auto flex max-w-6xl items-center justify-between px-4 py-3",
            children: [
              R.jsxs(Ot.div, {
                className: "flex items-center gap-2",
                whileHover: { rotate: -5, scale: 1.1 },
                children: [
                  R.jsx("img", {
                    src: "/favicon.png",
                    alt: "Baby Flork",
                    style: { mixBlendMode: "multiply" },
                  }),
                  R.jsx("span", {
                    className: "text-3xl font-black uppercase tracking-tighter",
                    children: "BABYFLORK",
                  }),
                ],
              }),
              R.jsx("div", {
                className: "hidden gap-6 md:flex",
                children: s0.map(({ label: m, href: y }, p) =>
                  R.jsx(
                    Ot.a,
                    {
                      href: y,
                      className:
                        "nav-item text-xl font-bold uppercase transition-transform text-white",
                      whileHover: { y: -5, rotate: p % 2 === 0 ? 3 : -3 },
                      initial: { opacity: 0, y: -20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: p * 0.1 },
                      children: m,
                    },
                    m
                  )
                ),
              }),
              R.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  R.jsx(Jn, {
                    className: "hidden text-xl md:block",
                    children: "Buy $BABYFLORK",
                  }),
                  R.jsx("button", {
                    className:
                      "flex items-center justify-center border-4 border-yellow p-2 md:hidden",
                    onClick: () => h((m) => !m),
                    "aria-label": "Toggle menu",
                    children: c
                      ? R.jsx(DE, { size: 28, strokeWidth: 3 })
                      : R.jsx(yE, { size: 28, strokeWidth: 3 }),
                  }),
                ],
              }),
            ],
          }),
          R.jsx(xT, {
            children:
              c &&
              R.jsx(
                Ot.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.25 },
                  className:
                    "overflow-hidden border-t-4 border-yellow bg-black md:hidden",
                  children: R.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      s0.map(({ label: m, href: y }, p) =>
                        R.jsx(
                          Ot.a,
                          {
                            href: y,
                            onClick: () => h(!1),
                            className:
                              "border-b-4 border-yellow px-6 py-4 text-2xl font-black uppercase hover:bg-black hover:text-white transition-colors",
                            initial: { x: -20, opacity: 0 },
                            animate: { x: 0, opacity: 1 },
                            transition: { delay: p * 0.06 },
                            children: m,
                          },
                          m
                        )
                      ),
                      R.jsx("div", {
                        className: "px-6 py-5",
                        children: R.jsx(Jn, {
                          className: "w-full text-2xl",
                          onClick: () => h(!1),
                          children: "Buy $BABYFLORK",
                        }),
                      }),
                    ],
                  }),
                },
                "mobile-menu"
              ),
          }),
        ],
      }),
      R.jsxs("main", {
        className: "pt-32",
        children: [
          R.jsxs("section", {
            id: "home",
            className:
              "relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden border-b-8 border-yellow px-4 text-center",
            children: [
              R.jsx(Ot.div, {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: { type: "spring", bounce: 0.5 },
                className: "relative z-10 mx-auto",
                children: R.jsx("img", {
                  src: "/home.png",
                  alt: "Baby Flork",
                  className: "h-64 w-64 md:h-96 md:w-96 object-contain",
                  style: { mixBlendMode: "multiply" },
                }),
              }),
              R.jsx(Ot.h1, {
                className:
                  "z-10 mt-4 text-5xl font-bold text-white uppercase md:text-8xl",
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3 },
                children: "$BABYFLORK",
              }),
              R.jsx(Ot.p, {
                className:
                  "z-10 mt-2 text-xl font-bold uppercase text-gray-600 md:text-3xl",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.5 },
                children: "The thirstiest meme coin on BNB",
              }),
              R.jsx(Ot.div, {
                className: "absolute top-1/4 left-10 md:left-32",
                animate: { y: [0, 20, 0] },
                transition: { duration: 2, repeat: 1 / 0 },
                children: R.jsx("div", {
                  className:
                    "scribble-border tilt-slight bg-yellow p-4 text-2xl font-bold md:text-4xl text-white",
                  children: `"I'm so thirsty"`,
                }),
              }),
              R.jsx(Ot.div, {
                className: "absolute right-10 bottom-1/4 md:right-32",
                animate: { y: [0, -20, 0] },
                transition: { duration: 2.5, repeat: 1 / 0, delay: 0.5 },
                children: R.jsx("div", {
                  className:
                    "scribble-border-2 tilt-slight-right bg-black p-4 text-xl font-bold md:p-6 md:text-3xl text-white",
                  children: "I need milk!",
                }),
              }),
              R.jsxs("div", {
                className: "z-10 mt-12 flex flex-col gap-6 md:flex-row",
                children: [
                  R.jsx("a", {
                    href: "https://t.me",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: R.jsx(Jn, {
                      crazyHover: !0,
                      children: "Join Now",
                    }),
                  }),
                  R.jsx("a", {
                    href: "https://x.com/babyflorkbnb",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: R.jsx(Jn, {
                      crazyHover: !0,
                      className:
                        "bg-black text-white hover:bg-black hover:text-black hover:invert",
                      children: "Join on X",
                    }),
                  }),
                ],
              }),
              R.jsx("div", {
                className:
                  "pointer-events-none absolute inset-0 z-0 opacity-10",
                style: {
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, black 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                },
              }),
            ],
          }),
          R.jsx("section", {
            className: "border-b-8 border-yellow bg-black-300 py-10 px-4",
            children: R.jsxs("div", {
              className: "mx-auto max-w-4xl text-center",
              children: [
                R.jsx(Ot.p, {
                  className: "mb-3 text-2xl font-black uppercase",
                  animate: { rotate: [-1, 1, -1] },
                  transition: { duration: 2, repeat: 1 / 0 },
                  children: "📋 Contract Address (BNB)",
                }),
                R.jsxs("div", {
                  className:
                    "flex flex-col items-center gap-4 md:flex-row md:justify-center",
                  children: [
                    R.jsx("code", {
                      className:
                        "scribble-border bg-yellow px-6 py-3 text-lg font-bold tracking-widest md:text-2xl break-all",
                      children: l0,
                    }),
                    R.jsxs("button", {
                      onClick: f,
                      className:
                        "flex items-center gap-2 border-4 border-yellow bg-black text-white px-6 py-3 text-xl font-bold uppercase hover:bg-black hover:text-black transition-colors",
                      children: [
                        R.jsx(hE, { size: 24 }),
                        u ? "COPIED!!!" : "COPY",
                      ],
                    }),
                  ],
                }),
                R.jsx("p", {
                  className: "mt-4 text-lg font-bold text-gray-700",
                  children:
                    "Always verify the contract before buying. Baby Flork is watching.",
                }),
              ],
            }),
          }),
          R.jsx("section", {
            id: "vessels",
            className: "border-b-8 border-yellow py-20",
            children: R.jsxs("div", {
              className: "mx-auto max-w-5xl px-4",
              children: [
                R.jsx(Ot.h2, {
                  className:
                    "mb-16 text-center text-4xl font-bold md:text-6xl text-white",
                  whileInView: { scale: [0.8, 1.2, 1], rotate: [0, 5, -2, 0] },
                  children: "NEW BERCH ALERCH!!!!!",
                }),
                R.jsxs("div", {
                  className: "grid items-center gap-12 md:grid-cols-2",
                  children: [
                    R.jsxs("div", {
                      className: "flex flex-col gap-8 text-2xl md:text-4xl",
                      children: [
                        R.jsxs(Ot.div, {
                          className: "scribble-border tilt-slight p-6",
                          whileHover: { x: 10 },
                          children: [
                            R.jsx("span", {
                              className: "text-green-600 font-bold",
                              children: "HOLDS NEARLY ANY LIQUID!",
                            }),
                            R.jsx("br", {}),
                            R.jsx("span", {
                              className: "text-white font-bold",
                              children: "EVEN SOME SOLIDS!",
                            }),
                          ],
                        }),
                        R.jsx(Ot.div, {
                          className:
                            "scribble-border-2 tilt-slight-right p-6 text-right",
                          whileHover: { x: -10 },
                          children: R.jsx("span", {
                            className: "text-purple-600 font-bold",
                            children: "THE PERFECT VESSEL!!!!",
                          }),
                        }),
                      ],
                    }),
                    R.jsxs(Ot.div, {
                      className: "relative mx-auto",
                      style: { rotate: a },
                      whileHover: { scale: 1.1 },
                      children: [
                        R.jsx("div", {
                          className:
                            "absolute -inset-4 z-[-1] animate-pulse rounded-full bg-black-300 opacity-50 blur-xl",
                        }),
                        R.jsx("img", {
                          src: "/berd-new.png",
                          alt: "Baby Flork",
                          className: "h-64 w-64 md:h-96 md:w-96 object-contain",
                          style: { mixBlendMode: "multiply" },
                        }),
                        R.jsxs(Ot.div, {
                          className:
                            "absolute -bottom-8 -right-8 flex items-center gap-2 text-red-600 font-bold text-3xl tilt-slight",
                          animate: { scale: [1, 1.2, 1] },
                          transition: { repeat: 1 / 0, duration: 0.5 },
                          children: [
                            R.jsx(SE, { size: 40, className: "stroke-[3]" }),
                            "FUNNY",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                R.jsxs("div", {
                  className: "mt-20 text-center",
                  children: [
                    R.jsx(Jn, {
                      crazyHover: !0,
                      className: "text-4xl px-12 py-6 border-8 border-yellow",
                      children: "BUY THE BUG (Baby Flork MUG)",
                    }),
                  ],
                }),
              ],
            }),
          }),
          R.jsx("section", {
            className: "bg-black text-white py-20 px-4",
            children: R.jsxs("div", {
              className: "mx-auto max-w-6xl",
              children: [
                R.jsx("h2", {
                  className:
                    "mb-16 text-center text-4xl font-bold md:text-6xl text-white",
                  children: "Why trust Baby Flork?",
                }),
                R.jsx("div", {
                  className: "grid gap-8 md:grid-cols-3",
                  children: [
                    {
                      title: "Quality",
                      text: "Made from real internet pixels.",
                      icon: TE,
                    },
                    {
                      title: "Danger",
                      text: "May contain sulfuric acid.",
                      icon: EE,
                    },
                    {
                      title: "Energy",
                      text: "Freshly brewed MS Paint.",
                      icon: cE,
                    },
                  ].map((m, y) =>
                    R.jsxs(
                      Ot.div,
                      {
                        className:
                          "scribble-border bg-black text-black p-8 tilt-slight",
                        initial: { opacity: 0, y: 50 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0 },
                        transition: { delay: y * 0.2 },
                        whileHover: {
                          rotate: y % 2 === 0 ? 5 : -5,
                          scale: 1.05,
                        },
                        children: [
                          R.jsx(m.icon, {
                            size: 64,
                            className: "mb-4 stroke-[3]",
                          }),
                          R.jsx("h3", {
                            className: "text-3xl font-bold mb-4",
                            children: m.title,
                          }),
                          R.jsx("p", {
                            className: "text-xl",
                            children: m.text,
                          }),
                        ],
                      },
                      y
                    )
                  ),
                }),
              ],
            }),
          }),
          R.jsx("section", {
            id: "tokenomics",
            className: "border-b-8 border-yellow py-20 px-4",
            children: R.jsxs("div", {
              className: "mx-auto max-w-5xl",
              children: [
                R.jsxs(Ot.h2, {
                  className:
                    "mb-16 text-center text-4xl font-bold md:text-6xl text-white",
                  whileInView: { scale: [0.9, 1.05, 1] },
                  viewport: { once: !0 },
                  children: [
                    R.jsx(oE, {
                      className: "inline mb-2 mr-4 stroke-[3]",
                      size: 64,
                    }),
                    "Tokenomics",
                  ],
                }),
                R.jsx("div", {
                  className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4",
                  children: [
                    {
                      label: "Total Supply",
                      value: "1B",
                      sub: "1 Billion $BABYFLORK",
                      color: "bg-black-300",
                    },
                    {
                      label: "Tax",
                      value: "0% / 0%",
                      sub: "Buy / Sell. Zero. Nada.",
                      color: "bg-green-300",
                    },
                    {
                      label: "Liquidity",
                      value: "100%",
                      sub: "Burned forever 🔥",
                      color: "bg-red-300",
                    },
                    {
                      label: "Ownership",
                      value: "Renounced",
                      sub: "No devs. Just Baby Flork.",
                      color: "bg-purple-300",
                    },
                  ].map((m, y) =>
                    R.jsxs(
                      Ot.div,
                      {
                        className: `scribble-border ${m.color} p-8 text-center`,
                        initial: { opacity: 0, scale: 0.8 },
                        whileInView: { opacity: 1, scale: 1 },
                        viewport: { once: !0 },
                        transition: {
                          delay: y * 0.15,
                          type: "spring",
                          bounce: 0.4,
                        },
                        whileHover: {
                          scale: 1.08,
                          rotate: y % 2 === 0 ? 2 : -2,
                        },
                        children: [
                          R.jsx("p", {
                            className:
                              "text-lg font-bold uppercase text-gray-700 mb-2",
                            children: m.label,
                          }),
                          R.jsx("p", {
                            className: "text-3xl font-black md:text-4xl",
                            children: m.value,
                          }),
                          R.jsx("p", {
                            className: "mt-2 text-base font-bold text-gray-600",
                            children: m.sub,
                          }),
                        ],
                      },
                      y
                    )
                  ),
                }),
                R.jsx(Ot.div, {
                  className:
                    "mt-12 scribble-border-2 bg-black text-white p-8 text-center text-2xl font-bold md:text-4xl",
                  whileInView: { rotate: [-1, 1, 0] },
                  viewport: { once: !0 },
                  children: "No presale. No team tokens. Just vibes and Baby Flork.",
                }),
              ],
            }),
          }),
          R.jsx("section", {
            id: "howtobuy",
            className: "border-b-8 border-yellow bg-black py-20 px-4 text-white",
            children: R.jsxs("div", {
              className: "mx-auto max-w-4xl",
              children: [
                R.jsxs(Ot.h2, {
                  className:
                    "mb-16 text-center text-4xl font-bold md:text-6xl text-white",
                  whileInView: { scale: [0.9, 1.05, 1] },
                  viewport: { once: !0 },
                  children: [
                    R.jsx(sE, {
                      className: "inline mb-2 mr-4 stroke-[3]",
                      size: 64,
                    }),
                    "How to Buy",
                  ],
                }),
                R.jsx("div", {
                  className: "flex flex-col gap-8",
                  children: [
                    {
                      step: "01",
                      title: "Get a Wallet",
                      desc: "Download MetaMask or any Binance wallet. Yes, you need one. No, your bank app does not count.",
                      color: "bg-black-300 text-black",
                    },
                    {
                      step: "02",
                      title: "Get Some BNB",
                      desc: "Buy BNB on any exchange (Coinbase, Binance, etc.) and send it to your wallet. Very hard. Much effort.",
                      color: "bg-green-300 text-black",
                    },
                    {
                      step: "03",
                      title: "Go to Pancakeswap",
                      desc: "Head to pancakeswap.finance, connect your wallet, and paste the $BABYFLORK contract address.",
                      color: "bg-purple-300 text-black",
                    },
                    {
                      step: "04",
                      title: "Swap for $BABYFLORK",
                      desc: "Swap your BNB for $BABYFLORK. Set slippage to ~5% if needed. Welcome to the Baby Flork family. You did it.",
                      color: "bg-red-300 text-black",
                    },
                  ].map((m, y) =>
                    R.jsxs(
                      Ot.div,
                      {
                        className: `scribble-border ${m.color} flex flex-col gap-4 p-8 md:flex-row md:items-center`,
                        initial: { opacity: 0, x: y % 2 === 0 ? -60 : 60 },
                        whileInView: { opacity: 1, x: 0 },
                        viewport: { once: !0 },
                        transition: { delay: y * 0.15 },
                        whileHover: { scale: 1.02 },
                        children: [
                          R.jsx("span", {
                            className:
                              "text-7xl font-black opacity-30 md:text-9xl",
                            children: m.step,
                          }),
                          R.jsxs("div", {
                            children: [
                              R.jsx("h3", {
                                className: "text-3xl font-black uppercase mb-2",
                                children: m.title,
                              }),
                              R.jsx("p", {
                                className: "text-xl font-bold",
                                children: m.desc,
                              }),
                            ],
                          }),
                        ],
                      },
                      y
                    )
                  ),
                }),
                R.jsx("a",{
                  href: "https://pancakeswap.finance/swap?outputCurrency=0x79bAe69A90E112fe9ded209A118381f448826172",
                  children: [
                    R.jsx("div", {
                      className: "mt-12 text-center",
                      children: R.jsx(Jn, {
                        className:
                          "text-3xl px-10 py-6 border-8 border-white bg-black text-black",
                        children: "Buy $BABYFLORK",
                      }),
                    }),
                  ]
                })
                
              ],
            }),
          }),
          R.jsx("section", {
            id: "roadmap",
            className: "border-b-8 border-yellow py-20 px-4",
            children: R.jsxs("div", {
              className: "mx-auto max-w-4xl",
              children: [
                R.jsxs(Ot.h2, {
                  className:
                    "mb-16 text-center text-4xl font-bold md:text-6xl text-white",
                  whileInView: { scale: [0.9, 1.05, 1] },
                  viewport: { once: !0 },
                  children: [
                    R.jsx(mE, {
                      className: "inline mb-2 mr-4 stroke-[3]",
                      size: 64,
                    }),
                    "Roadmap",
                  ],
                }),
                R.jsxs("div", {
                  className: "relative flex flex-col gap-0",
                  children: [
                    R.jsx("div", {
                      className:
                        "absolute left-8 top-0 h-full w-1 bg-black md:left-1/2",
                    }),
                    [
                      {
                        phase: "Phase 1",
                        title: "Baby Flork Awakens",
                        items: [
                          "Launch on BNB",
                          "Website goes live",
                          "CoinGecko & CMC listing",
                          "1,000 holders",
                        ],
                        done: !0,
                        side: "left",
                      },
                      {
                        phase: "Phase 2",
                        title: "Baby Flork Gets Thirsty",
                        items: [
                          "10,000 holders",
                          "CEX listings",
                          "Merch store (real mugs)",
                          "Community meme contest",
                        ],
                        done: !1,
                        side: "right",
                      },
                      {
                        phase: "Phase 3",
                        title: "Baby Flork Goes Cosmic",
                        items: [
                          "100,000 holders",
                          "Major CEX listing",
                          "Baby Flork NFT collection",
                          "World domination (maybe)",
                        ],
                        done: !1,
                        side: "left",
                      },
                      {
                        phase: "Phase 4",
                        title: "Baby Flork Transcends",
                        items: [
                          "1,000,000 holders",
                          "Baby Flork in space",
                          "UN recognizes Baby Flork",
                          "Retire and drink liquid forever",
                        ],
                        done: !1,
                        side: "right",
                      },
                    ].map((m, y) =>
                      R.jsxs(
                        Ot.div,
                        {
                          className: `relative mb-12 pl-20 md:w-1/2 md:pl-0 ${
                            m.side === "right"
                              ? "md:ml-auto md:pl-16"
                              : "md:pr-16"
                          }`,
                          initial: { opacity: 0, y: 40 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0 },
                          transition: { delay: y * 0.15 },
                          children: [
                            R.jsx("div", {
                              className: `absolute left-4 top-4 h-8 w-8 rounded-full border-4 border-yellow md:left-auto ${
                                m.side === "right"
                                  ? "md:-left-5"
                                  : "md:-right-5"
                              } ${m.done ? "bg-green-400" : "bg-black"}`,
                            }),
                            R.jsxs("div", {
                              className: `scribble-border p-6 ${
                                m.done ? "bg-green-100" : "bg-purple-300"
                              }`,
                              children: [
                                R.jsx("span", {
                                  className:
                                    "text-sm font-black uppercase tracking-widest text-gray-500",
                                  children: m.phase,
                                }),
                                R.jsx("h3", {
                                  className:
                                    "text-2xl font-black uppercase md:text-3xl mb-4",
                                  children: m.title,
                                }),
                                R.jsx("ul", {
                                  className: "flex flex-col gap-2",
                                  children: m.items.map((p, v) =>
                                    R.jsxs(
                                      "li",
                                      {
                                        className:
                                          "flex items-start gap-2 text-lg font-bold",
                                        children: [
                                          R.jsx("span", {
                                            children: m.done ? "✅" : "⬜",
                                          }),
                                          p,
                                        ],
                                      },
                                      v
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        },
                        y
                      )
                    ),
                  ],
                }),
              ],
            }),
          }),
          R.jsx("section", {
            className:
              "border-b-8 border-yellow bg-black-300 py-20 px-4 text-center",
            children: R.jsxs(Ot.div, {
              whileInView: { scale: [0.9, 1.05, 1] },
              viewport: { once: !0 },
              children: [
                R.jsx(vE, { size: 80, className: "mx-auto mb-6 stroke-[3]" }),
                R.jsx("h2", {
                  className: "text-5xl font-black uppercase md:text-7xl",
                  children: "Join the Baby Flork",
                }),
                R.jsx("p", {
                  className: "mt-4 text-2xl font-bold",
                  children:
                    "Thousands of Baby Flork already holding. Don't be the one who missed it.",
                }),
                R.jsxs("div", {
                  className:
                    "mt-10 flex flex-col items-center gap-6 md:flex-row md:justify-center",
                  children: [
                    R.jsx("a", {
                      href: "https://t.me",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: R.jsx(Jn, {
                        crazyHover: !0,
                        className: "text-3xl px-10 py-6 border-8 border-yellow",
                        children: "Join Telegram",
                      }),
                    }),
                    R.jsx("a", {
                      href: "https://x.com/babyflorkbnb",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: R.jsx(Jn, {
                        crazyHover: !0,
                        className:
                          "text-3xl px-10 py-6 border-8 border-yellow bg-black text-white hover:bg-black hover:text-black",
                        children: "Follow on X",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      R.jsxs("footer", {
        className: "border-t-8 border-yellow p-12 text-center",
        children: [
          R.jsx(pc, { className: "mx-auto h-20 w-20 mb-6" }),
          R.jsxs("div", {
            className: "mb-6 flex justify-center gap-6",
            children: [
              R.jsx(Ot.a, {
                href: "https://x.com/babyflorkbnb",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Follow on X",
                className:
                  "flex h-14 w-14 items-center justify-center border-4 border-yellow bg-black text-white hover:bg-black hover:text-black transition-colors",
                whileHover: { scale: 1.15, rotate: -5 },
                whileTap: { scale: 0.95 },
                children: R.jsx("svg", {
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  className: "h-7 w-7",
                  children: R.jsx("path", {
                    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.261 5.633 5.904-5.633Zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                  }),
                }),
              }),
              R.jsx(Ot.a, {
                href: "https://t.me",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Join Telegram",
                className:
                  "flex h-14 w-14 items-center justify-center border-4 border-yellow bg-black text-white hover:bg-black hover:text-black transition-colors",
                whileHover: { scale: 1.15, rotate: 5 },
                whileTap: { scale: 0.95 },
                children: R.jsx("svg", {
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  className: "h-7 w-7",
                  children: R.jsx("path", {
                    d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                  }),
                }),
              }),
            ],
          }),
          R.jsxs("p", {
            className: "text-2xl font-bold",
            children: ["© ", new Date().getFullYear(), " Berd Corporation."],
          }),
          R.jsx("p", {
            className: "text-lg mt-2",
            children:
              "All rights reversed. $BABYFLORK is a meme coin with no intrinsic value. Not financial advice.",
          }),
          R.jsx("p", {
            className: "mt-4 text-sm text-gray-500 font-bold",
            children: "Don't hit me with a hammer.",
          }),
        ],
      }),
    ],
  });
}
wb.createRoot(document.getElementById("root")).render(
  R.jsx(q.StrictMode, { children: R.jsx(CE, {}) })
);
