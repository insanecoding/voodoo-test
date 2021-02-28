import { r as react } from './index-57a74e37.js';
import { c as createCommonjsModule } from './_commonjsHelpers-8c19dec8.js';

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classnames = createCommonjsModule(function (module) {
  /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;

    function classNames() {
      var classes = [];

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = classNames.apply(null, arg);
          if (inner) {
            classes.push(inner);
          }
        } else if (argType === 'object') {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }

      return classes.join(' ');
    }

    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }

  return target;
}

function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }

  return _typeof(obj);
}

/* eslint-disable no-console */
var warned = {};
function warning(valid, message) {}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
/* eslint-enable */

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = 'function' === typeof Symbol && Symbol.for,
  c = b ? Symbol.for('react.element') : 60103,
  d = b ? Symbol.for('react.portal') : 60106,
  e = b ? Symbol.for('react.fragment') : 60107,
  f = b ? Symbol.for('react.strict_mode') : 60108,
  g = b ? Symbol.for('react.profiler') : 60114,
  h = b ? Symbol.for('react.provider') : 60109,
  k = b ? Symbol.for('react.context') : 60110,
  l = b ? Symbol.for('react.async_mode') : 60111,
  m = b ? Symbol.for('react.concurrent_mode') : 60111,
  n = b ? Symbol.for('react.forward_ref') : 60112,
  p = b ? Symbol.for('react.suspense') : 60113,
  q = b ? Symbol.for('react.suspense_list') : 60120,
  r = b ? Symbol.for('react.memo') : 60115,
  t = b ? Symbol.for('react.lazy') : 60116,
  v = b ? Symbol.for('react.block') : 60121,
  w = b ? Symbol.for('react.fundamental') : 60117,
  x = b ? Symbol.for('react.responder') : 60118,
  y = b ? Symbol.for('react.scope') : 60119;
function z(a) {
  if ('object' === typeof a && null !== a) {
    var u = a.$$typeof;
    switch (u) {
      case c:
        switch (((a = a.type), a)) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (((a = a && a.$$typeof), a)) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A(a) {
  return z(a) === m;
}
var AsyncMode = l;
var ConcurrentMode = m;
var ContextConsumer = k;
var ContextProvider = h;
var Element = c;
var ForwardRef = n;
var Fragment = e;
var Lazy = t;
var Memo = r;
var Portal = d;
var Profiler = g;
var StrictMode = f;
var Suspense = p;
var isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};
var isConcurrentMode = A;
var isContextConsumer = function (a) {
  return z(a) === k;
};
var isContextProvider = function (a) {
  return z(a) === h;
};
var isElement = function (a) {
  return 'object' === typeof a && null !== a && a.$$typeof === c;
};
var isForwardRef = function (a) {
  return z(a) === n;
};
var isFragment = function (a) {
  return z(a) === e;
};
var isLazy = function (a) {
  return z(a) === t;
};
var isMemo = function (a) {
  return z(a) === r;
};
var isPortal = function (a) {
  return z(a) === d;
};
var isProfiler = function (a) {
  return z(a) === g;
};
var isStrictMode = function (a) {
  return z(a) === f;
};
var isSuspense = function (a) {
  return z(a) === p;
};
var isValidElementType = function (a) {
  return (
    'string' === typeof a ||
    'function' === typeof a ||
    a === e ||
    a === m ||
    a === g ||
    a === f ||
    a === p ||
    a === q ||
    ('object' === typeof a &&
      null !== a &&
      (a.$$typeof === t ||
        a.$$typeof === r ||
        a.$$typeof === h ||
        a.$$typeof === k ||
        a.$$typeof === n ||
        a.$$typeof === w ||
        a.$$typeof === x ||
        a.$$typeof === y ||
        a.$$typeof === v))
  );
};
var typeOf = z;

var reactIs_production_min = {
  AsyncMode: AsyncMode,
  ConcurrentMode: ConcurrentMode,
  ContextConsumer: ContextConsumer,
  ContextProvider: ContextProvider,
  Element: Element,
  ForwardRef: ForwardRef,
  Fragment: Fragment,
  Lazy: Lazy,
  Memo: Memo,
  Portal: Portal,
  Profiler: Profiler,
  StrictMode: StrictMode,
  Suspense: Suspense,
  isAsyncMode: isAsyncMode,
  isConcurrentMode: isConcurrentMode,
  isContextConsumer: isContextConsumer,
  isContextProvider: isContextProvider,
  isElement: isElement,
  isForwardRef: isForwardRef,
  isFragment: isFragment,
  isLazy: isLazy,
  isMemo: isMemo,
  isPortal: isPortal,
  isProfiler: isProfiler,
  isStrictMode: isStrictMode,
  isSuspense: isSuspense,
  isValidElementType: isValidElementType,
  typeOf: typeOf,
};

var reactIs = createCommonjsModule(function (module) {
  {
    module.exports = reactIs_production_min;
  }
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter))
    return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function toArray(children) {
  var option =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ret = [];
  react.Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if (reactIs.isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

var HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS'; // eslint-disable-next-line @typescript-eslint/no-explicit-any

var warningFunc = function warningFunc() {
  warningOnce(
    false,
    'Can not find FormContext. Please make sure you wrap Field under Form.',
  );
};

var Context = /*#__PURE__*/ react.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: function getInternalHooks() {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      setCallbacks: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc,
    };
  },
});

function toArray$1(value) {
  if (value === undefined || value === null) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === 'function' ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || '@@iterator';
    var asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator';
    var toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, '');
    } catch (err) {
      define = function (obj, key, value) {
        return (obj[key] = value);
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator =
        outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: 'normal', arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: 'throw', arg: err };
      }
    }

    var GenStateSuspendedStart = 'suspendedStart';
    var GenStateSuspendedYield = 'suspendedYield';
    var GenStateExecuting = 'executing';
    var GenStateCompleted = 'completed';

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (
      NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
    ) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(
      IteratorPrototype,
    ));
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, 'GeneratorFunction');

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ['next', 'throw', 'return'].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === 'function' && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
            // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === 'GeneratorFunction'
        : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, 'GeneratorFunction');
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function (arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === 'throw') {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (
            value &&
            typeof value === 'object' &&
            hasOwn.call(value, '__await')
          ) {
            return PromiseImpl.resolve(value.__await).then(
              function (value) {
                invoke('next', value, resolve, reject);
              },
              function (err) {
                invoke('throw', err, resolve, reject);
              },
            );
          }

          return PromiseImpl.resolve(value).then(
            function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            },
            function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke('throw', error, resolve, reject);
            },
          );
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return (previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise
            ? previousPromise.then(
                callInvokeWithMethodAndArg,
                // Avoid propagating failures to Promises returned by later
                // invocations of the iterator.
                callInvokeWithMethodAndArg,
              )
            : callInvokeWithMethodAndArg());
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function (
      innerFn,
      outerFn,
      self,
      tryLocsList,
      PromiseImpl,
    ) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl,
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error('Generator is already running');
        }

        if (state === GenStateCompleted) {
          if (method === 'throw') {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === 'next') {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === 'throw') {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === 'return') {
            context.abrupt('return', context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === 'normal') {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done,
            };
          } else if (record.type === 'throw') {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = 'throw';
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === 'throw') {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator['return']) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = 'return';
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === 'throw') {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = 'throw';
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method",
          );
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === 'throw') {
        context.method = 'throw';
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = 'throw';
        context.arg = new TypeError('iterator result is not an object');
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== 'return') {
          context.method = 'next';
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    define(Gp, toStringTagSymbol, 'Generator');

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return '[object Generator]';
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = 'normal';
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: 'root' }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === 'function') {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;

              return next;
            };

          return (next.next = next);
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function (skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = 'next';
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (
              name.charAt(0) === 't' &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))
            ) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function () {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === 'throw') {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function (exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = 'throw';
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = 'next';
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === 'root') {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle('end');
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, 'catchLoc');
            var hasFinally = hasOwn.call(entry, 'finallyLoc');

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error('try statement without catch or finally');
            }
          }
        }
      },

      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (
            entry.tryLoc <= this.prev &&
            hasOwn.call(entry, 'finallyLoc') &&
            this.prev < entry.finallyLoc
          ) {
            var finallyEntry = entry;
            break;
          }
        }

        if (
          finallyEntry &&
          (type === 'break' || type === 'continue') &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc
        ) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = 'next';
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function (record, afterLoc) {
        if (record.type === 'throw') {
          throw record.arg;
        }

        if (record.type === 'break' || record.type === 'continue') {
          this.next = record.arg;
        } else if (record.type === 'return') {
          this.rval = this.arg = record.arg;
          this.method = 'return';
          this.next = 'end';
        } else if (record.type === 'normal' && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === 'throw') {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error('illegal catch attempt');
      },

      delegateYield: function (iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc,
        };

        if (this.method === 'next') {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      },
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
  })(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports,
  );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function('r', 'regeneratorRuntime = r')(runtime);
  }
});

var regenerator = runtime_1;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }

      _next(undefined);
    });
  };
}

/* SNOWPACK PROCESS POLYFILL (based on https://github.com/calvinmetcalf/node-process-es6) */
function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== 'undefined') {
  globalContext = window;
} else if (typeof self !== 'undefined') {
  globalContext = self;
} else {
  globalContext = {};
}
if (typeof globalContext.setTimeout === 'function') {
  cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === 'function') {
  cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if (
    (cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) &&
    setTimeout
  ) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if (
    (cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) &&
    clearTimeout
  ) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;

  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}
// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
  throw new Error('process.binding is not supported');
}

function cwd() {
  return '/';
}
function chdir(dir) {
  throw new Error('process.chdir is not supported');
}
function umask() {
  return 0;
}

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = globalContext.performance || {};
var performanceNow =
  performance.now ||
  performance.mozNow ||
  performance.msNow ||
  performance.oNow ||
  performance.webkitNow ||
  function () {
    return new Date().getTime();
  };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime % 1) * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: { NODE_ENV: 'production' },
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime,
};

function _extends$1() {
  _extends$1 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends$1.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf$1(o, p);
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct$1()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf$1(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf('[native code]') !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === 'function' ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== 'function') {
      throw new TypeError('Super expression must either be null or a function');
    }

    if (typeof _cache !== 'undefined') {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf$1(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return _setPrototypeOf$1(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning$1 = function warning() {}; // don't print warning message when in production env or node runtime

if (
  typeof process !== 'undefined' &&
  process.env &&
  'production' !== 'production' &&
  typeof window !== 'undefined' &&
  typeof document !== 'undefined'
) {
  warning$1 = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (
        errors.every(function (e) {
          return typeof e === 'string';
        })
      ) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;

  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }

  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });
    return str;
  }

  return f;
}

function isNativeStringType(type) {
  return (
    type === 'string' ||
    type === 'url' ||
    type === 'hex' ||
    type === 'email' ||
    type === 'date' ||
    type === 'pattern'
  );
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

var AsyncValidationError = /*#__PURE__*/ (function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);

  function AsyncValidationError(errors, fields) {
    var _this;

    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError;
})(/*#__PURE__*/ _wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length
          ? reject(new AsyncValidationError(errors, convertFieldsError(errors)))
          : resolve();
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending['catch'](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields || [];

  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }

  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length
          ? reject(
              new AsyncValidationError(results, convertFieldsError(results)),
            )
          : resolve();
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending['catch'](function (e) {
    return e;
  });
  return pending;
}
function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField,
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends$1(_extends$1({}, target[s]), value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function required(rule, value, source, errors, options, type) {
  if (
    rule.required &&
    (!source.hasOwnProperty(rule.field) ||
      isEmptyValue(value, type || rule.type))
  ) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp(
    '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
    'i',
  ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float: function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return (
      typeof value.getTime === 'function' &&
      typeof value.getMonth === 'function' &&
      typeof value.getYear === 'function' &&
      !isNaN(value.getTime())
    );
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return (
      typeof value === 'string' &&
      !!value.match(pattern.email) &&
      value.length < 255
    );
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  },
};
/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }

  var custom = [
    'integer',
    'float',
    'array',
    'regexp',
    'object',
    'method',
    'email',
    'number',
    'date',
    'url',
    'hex',
  ];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(
        format(options.messages.types[ruleType], rule.fullField, rule.type),
      );
    } // straight typeof check
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(
      format(options.messages.types[ruleType], rule.fullField, rule.type),
    );
  }
}

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type

  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(
      format(options.messages[key].range, rule.fullField, rule.min, rule.max),
    );
  }
}

var ENUM = 'enum';
/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];

  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(
      format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')),
    );
  }
}

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(
          format(
            options.messages.pattern.mismatch,
            rule.fullField,
            value,
            rule.pattern,
          ),
        );
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(
          format(
            options.messages.pattern.mismatch,
            rule.fullField,
            value,
            rule.pattern,
          ),
        );
      }
    }
  }
}

var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  enum: enumerable,
  pattern: pattern$1,
};

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field));

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
}

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function method(rule, value, callback, source, options) {
  var errors = [];
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field));

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function number(rule, value, callback, source, options) {
  var errors = [];
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field));

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field));

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field));

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field));

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field));

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function array(rule, value, callback, source, options) {
  var errors = [];
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field));

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function object(rule, value, callback, source, options) {
  var errors = [];
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field));

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var ENUM$1 = 'enum';
/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field));

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field));

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field)); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'date')) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
}

function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}

function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field));

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
 *  Performs validation for any type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function any(rule, value, callback, source, options) {
  var errors = [];
  var validate =
    rule.required || (!rule.required && source.hasOwnProperty(rule.field));

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
}

var validators = {
  string: string,
  method: method,
  number: number,
  boolean: _boolean,
  regexp: regexp,
  integer: integer,
  float: floatFn,
  array: array,
  object: object,
  enum: enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any,
};

function newMessages() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid',
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s',
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters',
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s',
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length',
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s',
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    },
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    var z;
    var item;

    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }

      return Promise.resolve();
    }

    function complete(results) {
      var i;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }

      callback(errors, fields);
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends$1({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule,
          };
        } else {
          rule = _extends$1({}, rule);
        }

        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);

        if (!rule.validator) {
          return;
        }

        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z,
        });
      });
    });
    var errorFields = {};
    return asyncMap(
      series,
      options,
      function (data, doIt) {
        var rule = data.rule;
        var deep =
          (rule.type === 'object' || rule.type === 'array') &&
          (typeof rule.fields === 'object' ||
            typeof rule.defaultField === 'object');
        deep = deep && (rule.required || (!rule.required && data.value));
        rule.field = data.field;

        function addFullfield(key, schema) {
          return _extends$1(
            _extends$1({}, schema),
            {},
            {
              fullField: rule.fullField + '.' + key,
            },
          );
        }

        function cb(e) {
          if (e === void 0) {
            e = [];
          }

          var errors = e;

          if (!Array.isArray(errors)) {
            errors = [errors];
          }

          if (!options.suppressWarning && errors.length) {
            Schema.warning('async-validator:', errors);
          }

          if (errors.length && rule.message !== undefined) {
            errors = [].concat(rule.message);
          }

          errors = errors.map(complementError(rule));

          if (options.first && errors.length) {
            errorFields[rule.field] = 1;
            return doIt(errors);
          }

          if (!deep) {
            doIt(errors);
          } else {
            // if rule is required but the target object
            // does not exist fail at the rule level and don't
            // go deeper
            if (rule.required && !data.value) {
              if (rule.message !== undefined) {
                errors = [].concat(rule.message).map(complementError(rule));
              } else if (options.error) {
                errors = [
                  options.error(
                    rule,
                    format(options.messages.required, rule.field),
                  ),
                ];
              }

              return doIt(errors);
            }

            var fieldsSchema = {};

            if (rule.defaultField) {
              for (var k in data.value) {
                if (data.value.hasOwnProperty(k)) {
                  fieldsSchema[k] = rule.defaultField;
                }
              }
            }

            fieldsSchema = _extends$1(
              _extends$1({}, fieldsSchema),
              data.rule.fields,
            );

            for (var f in fieldsSchema) {
              if (fieldsSchema.hasOwnProperty(f)) {
                var fieldSchema = Array.isArray(fieldsSchema[f])
                  ? fieldsSchema[f]
                  : [fieldsSchema[f]];
                fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
              }
            }

            var schema = new Schema(fieldsSchema);
            schema.messages(options.messages);

            if (data.rule.options) {
              data.rule.options.messages = options.messages;
              data.rule.options.error = options.error;
            }

            schema.validate(
              data.value,
              data.rule.options || options,
              function (errs) {
                var finalErrors = [];

                if (errors && errors.length) {
                  finalErrors.push.apply(finalErrors, errors);
                }

                if (errs && errs.length) {
                  finalErrors.push.apply(finalErrors, errs);
                }

                doIt(finalErrors.length ? finalErrors : null);
              },
            );
          }
        }

        var res;

        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options);
        } else if (rule.validator) {
          res = rule.validator(rule, data.value, cb, data.source, options);

          if (res === true) {
            cb();
          } else if (res === false) {
            cb(rule.message || rule.field + ' fails');
          } else if (res instanceof Array) {
            cb(res);
          } else if (res instanceof Error) {
            cb(res.message);
          }
        }

        if (res && res.then) {
          res.then(
            function () {
              return cb();
            },
            function (e) {
              return cb(e);
            },
          );
        }
      },
      function (results) {
        complete(results);
      },
    );
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (
      typeof rule.validator !== 'function' &&
      rule.type &&
      !validators.hasOwnProperty(rule.type)
    ) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || false;
  },
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error(
      'Cannot register a validator by type, validator is not a function',
    );
  }

  validators[type] = validator;
};

Schema.warning = warning$1;
Schema.messages = messages;
Schema.validators = validators;

function get(entity, path) {
  var current = entity;

  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === undefined) {
      return undefined;
    }

    current = current[path[i]];
  }

  return current;
}

function _toArray(arr) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableRest()
  );
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }

  var _paths = _toArray(paths),
    path = _paths[0],
    restPath = _paths.slice(1);

  var clone;

  if (!entity && typeof path === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = _toConsumableArray(entity);
  } else {
    clone = _objectSpread({}, entity);
  } // Delete prop if `removeIfUndefined` and value is undefined

  if (removeIfUndefined && value === undefined && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }

  return clone;
}

function set(entity, paths, value) {
  var removeIfUndefined =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  // Do nothing if `removeIfUndefined` and parent object not exist
  if (
    paths.length &&
    removeIfUndefined &&
    value === undefined &&
    !get(entity, paths.slice(0, -1))
  ) {
    return entity;
  }

  return internalSet(entity, paths, value, removeIfUndefined);
}

/**
 * Convert name to internal supported format.
 * This function should keep since we still thinking if need support like `a.b.c` format.
 * 'a' => ['a']
 * 123 => [123]
 * ['a', 123] => ['a', 123]
 */

function getNamePath(path) {
  return toArray$1(path);
}
function getValue(store, namePath) {
  var value = get(store, namePath);
  return value;
}
function setValue(store, namePath, value) {
  var newStore = set(store, namePath, value);
  return newStore;
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function (namePath) {
    var value = getValue(store, namePath);
    newStore = setValue(newStore, namePath, value);
  });
  return newStore;
}
function containsNamePath(namePathList, namePath) {
  return (
    namePathList &&
    namePathList.some(function (path) {
      return matchNamePath(path, namePath);
    })
  );
}

function isObject(obj) {
  return (
    _typeof(obj) === 'object' &&
    obj !== null &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}
/**
 * Copy values into store and return a new values object
 * ({ a: 1, b: { c: 2 } }, { a: 4, b: { d: 5 } }) => { a: 4, b: { c: 2, d: 5 } }
 */

function internalSetValues(store, values) {
  var newStore = Array.isArray(store)
    ? _toConsumableArray(store)
    : _objectSpread2({}, store);

  if (!values) {
    return newStore;
  }

  Object.keys(values).forEach(function (key) {
    var prevValue = newStore[key];
    var value = values[key]; // If both are object (but target is not array), we use recursion to set deep value

    var recursive = isObject(prevValue) && isObject(value);
    newStore[key] = recursive
      ? internalSetValues(prevValue, value || {})
      : value;
  });
  return newStore;
}

function setValues(store) {
  for (
    var _len = arguments.length,
      restValues = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    restValues[_key - 1] = arguments[_key];
  }

  return restValues.reduce(function (current, newStore) {
    return internalSetValues(current, newStore);
  }, store);
}
function matchNamePath(namePath, changedNamePath) {
  if (
    !namePath ||
    !changedNamePath ||
    namePath.length !== changedNamePath.length
  ) {
    return false;
  }

  return namePath.every(function (nameUnit, i) {
    return changedNamePath[i] === nameUnit;
  });
}
function isSimilar(source, target) {
  if (source === target) {
    return true;
  }

  if ((!source && target) || (source && !target)) {
    return false;
  }

  if (
    !source ||
    !target ||
    _typeof(source) !== 'object' ||
    _typeof(target) !== 'object'
  ) {
    return false;
  }

  var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  var keys = new Set(
    [].concat(_toConsumableArray(sourceKeys), _toConsumableArray(targetKeys)),
  );
  return _toConsumableArray(keys).every(function (key) {
    var sourceValue = source[key];
    var targetValue = target[key];

    if (
      typeof sourceValue === 'function' &&
      typeof targetValue === 'function'
    ) {
      return true;
    }

    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? undefined : arguments[1];

  if (event && event.target && valuePropName in event.target) {
    return event.target[valuePropName];
  }

  return event;
}
/**
 * Moves an array item from one position in an array to another.
 *
 * Note: This is a pure function so a new array will be returned, instead
 * of altering the array argument.
 *
 * @param array         Array in which to move an item.         (required)
 * @param moveIndex     The index of the item to move.          (required)
 * @param toIndex       The index to move item at moveIndex to. (required)
 */

function move(array, moveIndex, toIndex) {
  var length = array.length;

  if (
    moveIndex < 0 ||
    moveIndex >= length ||
    toIndex < 0 ||
    toIndex >= length
  ) {
    return array;
  }

  var item = array[moveIndex];
  var diff = moveIndex - toIndex;

  if (diff > 0) {
    // move left
    return [].concat(
      _toConsumableArray(array.slice(0, toIndex)),
      [item],
      _toConsumableArray(array.slice(toIndex, moveIndex)),
      _toConsumableArray(array.slice(moveIndex + 1, length)),
    );
  }

  if (diff < 0) {
    // move right
    return [].concat(
      _toConsumableArray(array.slice(0, moveIndex)),
      _toConsumableArray(array.slice(moveIndex + 1, toIndex + 1)),
      [item],
      _toConsumableArray(array.slice(toIndex + 1, length)),
    );
  }

  return array;
}

var typeTemplate = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date",
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate,
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters",
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}",
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length",
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}",
  },
};

var AsyncValidator = Schema;
/**
 * Replace with template.
 *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
 */

function replaceMessage(template, kv) {
  return template.replace(/\$\{\w+\}/g, function (str) {
    var key = str.slice(2, -1);
    return kv[key];
  });
}
/**
 * We use `async-validator` to validate rules. So have to hot replace the message with validator.
 * { required: '${name} is required' } => { required: () => 'field is required' }
 */

function convertMessages(messages, name, rule, messageVariables) {
  var kv = _objectSpread2(
    _objectSpread2({}, rule),
    {},
    {
      name: name,
      enum: (rule.enum || []).join(', '),
    },
  );

  var replaceFunc = function replaceFunc(template, additionalKV) {
    return function () {
      return replaceMessage(
        template,
        _objectSpread2(_objectSpread2({}, kv), additionalKV),
      );
    };
  };
  /* eslint-disable no-param-reassign */

  function fillTemplate(source) {
    var target =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Object.keys(source).forEach(function (ruleName) {
      var value = source[ruleName];

      if (typeof value === 'string') {
        target[ruleName] = replaceFunc(value, messageVariables);
      } else if (value && _typeof(value) === 'object') {
        target[ruleName] = {};
        fillTemplate(value, target[ruleName]);
      } else {
        target[ruleName] = value;
      }
    });
    return target;
  }
  /* eslint-enable */

  return fillTemplate(setValues({}, defaultValidateMessages, messages));
}

function validateRule(_x, _x2, _x3, _x4, _x5) {
  return _validateRule.apply(this, arguments);
}
/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */

function _validateRule() {
  _validateRule = _asyncToGenerator(
    /*#__PURE__*/ regenerator.mark(function _callee2(
      name,
      value,
      rule,
      options,
      messageVariables,
    ) {
      var cloneRule, subRuleField, validator, messages, result, subResults;
      return regenerator.wrap(
        function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                cloneRule = _objectSpread2({}, rule); // We should special handle array validate

                subRuleField = null;

                if (
                  cloneRule &&
                  cloneRule.type === 'array' &&
                  cloneRule.defaultField
                ) {
                  subRuleField = cloneRule.defaultField;
                  delete cloneRule.defaultField;
                }

                validator = new AsyncValidator(
                  _defineProperty({}, name, [cloneRule]),
                );
                messages = convertMessages(
                  options.validateMessages,
                  name,
                  cloneRule,
                  messageVariables,
                );
                validator.messages(messages);
                result = [];
                _context2.prev = 7;
                _context2.next = 10;
                return Promise.resolve(
                  validator.validate(
                    _defineProperty({}, name, value),
                    _objectSpread2({}, options),
                  ),
                );

              case 10:
                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2['catch'](7);

                if (_context2.t0.errors) {
                  result = _context2.t0.errors.map(function (_ref2, index) {
                    var message = _ref2.message;
                    return (
                      // Wrap ReactNode with `key`

                      /*#__PURE__*/
                      react.isValidElement(message)
                        ? /*#__PURE__*/ react.cloneElement(message, {
                            key: 'error_'.concat(index),
                          })
                        : message
                    );
                  });
                } else {
                  console.error(_context2.t0);
                  result = [messages.default()];
                }

              case 15:
                if (!(!result.length && subRuleField)) {
                  _context2.next = 20;
                  break;
                }

                _context2.next = 18;
                return Promise.all(
                  value.map(function (subValue, i) {
                    return validateRule(
                      ''.concat(name, '.').concat(i),
                      subValue,
                      subRuleField,
                      options,
                      messageVariables,
                    );
                  }),
                );

              case 18:
                subResults = _context2.sent;
                return _context2.abrupt(
                  'return',
                  subResults.reduce(function (prev, errors) {
                    return [].concat(
                      _toConsumableArray(prev),
                      _toConsumableArray(errors),
                    );
                  }, []),
                );

              case 20:
                return _context2.abrupt('return', result);

              case 21:
              case 'end':
                return _context2.stop();
            }
          }
        },
        _callee2,
        null,
        [[7, 12]],
      );
    }),
  );
  return _validateRule.apply(this, arguments);
}

function validateRules(
  namePath,
  value,
  rules,
  options,
  validateFirst,
  messageVariables,
) {
  var name = namePath.join('.'); // Fill rule with context

  var filledRules = rules.map(function (currentRule) {
    var originValidatorFunc = currentRule.validator;

    if (!originValidatorFunc) {
      return currentRule;
    }

    return _objectSpread2(
      _objectSpread2({}, currentRule),
      {},
      {
        validator: function validator(rule, val, callback) {
          var hasPromise = false; // Wrap callback only accept when promise not provided

          var wrappedCallback = function wrappedCallback() {
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            // Wait a tick to make sure return type is a promise
            Promise.resolve().then(function () {
              warningOnce(
                !hasPromise,
                'Your validator function has already return a promise. `callback` will be ignored.',
              );

              if (!hasPromise) {
                callback.apply(void 0, args);
              }
            });
          }; // Get promise

          var promise = originValidatorFunc(rule, val, wrappedCallback);
          hasPromise =
            promise &&
            typeof promise.then === 'function' &&
            typeof promise.catch === 'function';
          /**
           * 1. Use promise as the first priority.
           * 2. If promise not exist, use callback with warning instead
           */

          warningOnce(
            hasPromise,
            '`callback` is deprecated. Please return a promise instead.',
          );

          if (hasPromise) {
            promise
              .then(function () {
                callback();
              })
              .catch(function (err) {
                callback(err || ' ');
              });
          }
        },
      },
    );
  });
  var summaryPromise;

  if (validateFirst === true) {
    // >>>>> Validate by serialization
    summaryPromise = new Promise(
      /*#__PURE__*/ (function () {
        var _ref = _asyncToGenerator(
          /*#__PURE__*/ regenerator.mark(function _callee(resolve, reject) {
            var i, errors;
            return regenerator.wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    i = 0;

                  case 1:
                    if (!(i < filledRules.length)) {
                      _context.next = 11;
                      break;
                    }

                    _context.next = 4;
                    return validateRule(
                      name,
                      value,
                      filledRules[i],
                      options,
                      messageVariables,
                    );

                  case 4:
                    errors = _context.sent;

                    if (!errors.length) {
                      _context.next = 8;
                      break;
                    }

                    reject(errors);
                    return _context.abrupt('return');

                  case 8:
                    i += 1;
                    _context.next = 1;
                    break;

                  case 11:
                    /* eslint-enable */
                    resolve([]);

                  case 12:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          }),
        );

        return function (_x6, _x7) {
          return _ref.apply(this, arguments);
        };
      })(),
    );
  } else {
    // >>>>> Validate by parallel
    var rulePromises = filledRules.map(function (rule) {
      return validateRule(name, value, rule, options, messageVariables);
    });
    summaryPromise = (validateFirst
      ? finishOnFirstFailed(rulePromises)
      : finishOnAllFailed(rulePromises)
    ).then(function (errors) {
      if (!errors.length) {
        return [];
      }

      return Promise.reject(errors);
    });
  } // Internal catch error to avoid console error log.

  summaryPromise.catch(function (e) {
    return e;
  });
  return summaryPromise;
}

function finishOnAllFailed(_x8) {
  return _finishOnAllFailed.apply(this, arguments);
}

function _finishOnAllFailed() {
  _finishOnAllFailed = _asyncToGenerator(
    /*#__PURE__*/ regenerator.mark(function _callee3(rulePromises) {
      return regenerator.wrap(function _callee3$(_context3) {
        while (1) {
          switch ((_context3.prev = _context3.next)) {
            case 0:
              return _context3.abrupt(
                'return',
                Promise.all(rulePromises).then(function (errorsList) {
                  var _ref3;

                  var errors = (_ref3 = []).concat.apply(
                    _ref3,
                    _toConsumableArray(errorsList),
                  );

                  return errors;
                }),
              );

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3);
    }),
  );
  return _finishOnAllFailed.apply(this, arguments);
}

function finishOnFirstFailed(_x9) {
  return _finishOnFirstFailed.apply(this, arguments);
}

function _finishOnFirstFailed() {
  _finishOnFirstFailed = _asyncToGenerator(
    /*#__PURE__*/ regenerator.mark(function _callee4(rulePromises) {
      var count;
      return regenerator.wrap(function _callee4$(_context4) {
        while (1) {
          switch ((_context4.prev = _context4.next)) {
            case 0:
              count = 0;
              return _context4.abrupt(
                'return',
                new Promise(function (resolve) {
                  rulePromises.forEach(function (promise) {
                    promise.then(function (errors) {
                      if (errors.length) {
                        resolve(errors);
                      }

                      count += 1;

                      if (count === rulePromises.length) {
                        resolve([]);
                      }
                    });
                  });
                }),
              );

            case 2:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4);
    }),
  );
  return _finishOnFirstFailed.apply(this, arguments);
}

function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === 'function') {
    return shouldUpdate(
      prev,
      next,
      'source' in info
        ? {
            source: info.source,
          }
        : {},
    );
  }

  return prevValue !== nextValue;
} // We use Class instead of Hooks here since it will cost much code by using Hooks.

var Field = /*#__PURE__*/ (function (_React$Component) {
  _inherits(Field, _React$Component);

  var _super = _createSuper(Field);

  // ============================== Subscriptions ==============================
  function Field(props) {
    var _this;

    _classCallCheck(this, Field);

    _this = _super.call(this, props);
    _this.state = {
      resetCount: 0,
    };
    _this.cancelRegisterFunc = null;
    _this.mounted = false;
    /**
     * Follow state should not management in State since it will async update by React.
     * This makes first render of form can not get correct state value.
     */

    _this.touched = false;
    /** Mark when touched & validated. Currently only used for `dependencies` */

    _this.dirty = false;
    _this.validatePromise = null;
    _this.errors = [];

    _this.cancelRegister = function () {
      var _this$props = _this.props,
        preserve = _this$props.preserve,
        isListField = _this$props.isListField;

      if (_this.cancelRegisterFunc) {
        _this.cancelRegisterFunc(isListField, preserve);
      }

      _this.cancelRegisterFunc = null;
    }; // ================================== Utils ==================================

    _this.getNamePath = function () {
      var _this$props2 = _this.props,
        name = _this$props2.name,
        fieldContext = _this$props2.fieldContext;
      var _fieldContext$prefixN = fieldContext.prefixName,
        prefixName =
          _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
      return name !== undefined
        ? [].concat(_toConsumableArray(prefixName), _toConsumableArray(name))
        : [];
    };

    _this.getRules = function () {
      var _this$props3 = _this.props,
        _this$props3$rules = _this$props3.rules,
        rules = _this$props3$rules === void 0 ? [] : _this$props3$rules,
        fieldContext = _this$props3.fieldContext;
      return rules.map(function (rule) {
        if (typeof rule === 'function') {
          return rule(fieldContext);
        }

        return rule;
      });
    };

    _this.refresh = function () {
      if (!_this.mounted) return;
      /**
       * Clean up current node.
       */

      _this.setState(function (_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1,
        };
      });
    }; // ========================= Field Entity Interfaces =========================
    // Trigger by store update. Check if need update the component

    _this.onStoreChange = function (prevStore, namePathList, info) {
      var _this$props4 = _this.props,
        shouldUpdate = _this$props4.shouldUpdate,
        _this$props4$dependen = _this$props4.dependencies,
        dependencies =
          _this$props4$dependen === void 0 ? [] : _this$props4$dependen,
        onReset = _this$props4.onReset;
      var store = info.store;

      var namePath = _this.getNamePath();

      var prevValue = _this.getValue(prevStore);

      var curValue = _this.getValue(store);

      var namePathMatch =
        namePathList && containsNamePath(namePathList, namePath); // `setFieldsValue` is a quick access to update related status

      if (
        info.type === 'valueUpdate' &&
        info.source === 'external' &&
        prevValue !== curValue
      ) {
        _this.touched = true;
        _this.dirty = true;
        _this.validatePromise = null;
        _this.errors = [];
      }

      switch (info.type) {
        case 'reset':
          if (!namePathList || namePathMatch) {
            // Clean up state
            _this.touched = false;
            _this.dirty = false;
            _this.validatePromise = null;
            _this.errors = [];

            if (onReset) {
              onReset();
            }

            _this.refresh();

            return;
          }

          break;

        case 'setField': {
          if (namePathMatch) {
            var data = info.data;

            if ('touched' in data) {
              _this.touched = data.touched;
            }

            if ('validating' in data && !('originRCField' in data)) {
              _this.validatePromise = data.validating
                ? Promise.resolve([])
                : null;
            }

            if ('errors' in data) {
              _this.errors = data.errors || [];
            }

            _this.dirty = true;

            _this.reRender();

            return;
          } // Handle update by `setField` with `shouldUpdate`

          if (
            shouldUpdate &&
            !namePath.length &&
            requireUpdate(
              shouldUpdate,
              prevStore,
              store,
              prevValue,
              curValue,
              info,
            )
          ) {
            _this.reRender();

            return;
          }

          break;
        }

        case 'dependenciesUpdate': {
          /**
           * Trigger when marked `dependencies` updated. Related fields will all update
           */
          var dependencyList = dependencies.map(getNamePath); // No need for `namePathMath` check and `shouldUpdate` check, since `valueUpdate` will be
          // emitted earlier and they will work there
          // If set it may cause unnecessary twice rerendering

          if (
            dependencyList.some(function (dependency) {
              return containsNamePath(info.relatedFields, dependency);
            })
          ) {
            _this.reRender();

            return;
          }

          break;
        }

        default:
          // 1. If `namePath` exists in `namePathList`, means it's related value and should update
          //      For example <List name="list"><Field name={['list', 0]}></List>
          //      If `namePathList` is [['list']] (List value update), Field should be updated
          //      If `namePathList` is [['list', 0]] (Field value update), List shouldn't be updated
          // 2.
          //   2.1 If `dependencies` is set, `name` is not set and `shouldUpdate` is not set,
          //       don't use `shouldUpdate`. `dependencies` is view as a shortcut if `shouldUpdate`
          //       is not provided
          //   2.2 If `shouldUpdate` provided, use customize logic to update the field
          //       else to check if value changed
          if (
            namePathMatch ||
            ((!dependencies.length || namePath.length || shouldUpdate) &&
              requireUpdate(
                shouldUpdate,
                prevStore,
                store,
                prevValue,
                curValue,
                info,
              ))
          ) {
            _this.reRender();

            return;
          }

          break;
      }

      if (shouldUpdate === true) {
        _this.reRender();
      }
    };

    _this.validateRules = function (options) {
      // We should fixed namePath & value to avoid developer change then by form function
      var namePath = _this.getNamePath();

      var currentValue = _this.getValue(); // Force change to async to avoid rule OOD under renderProps field

      var rootPromise = Promise.resolve().then(function () {
        if (!_this.mounted) {
          return [];
        }

        var _this$props5 = _this.props,
          _this$props5$validate = _this$props5.validateFirst,
          validateFirst =
            _this$props5$validate === void 0 ? false : _this$props5$validate,
          messageVariables = _this$props5.messageVariables;

        var _ref2 = options || {},
          triggerName = _ref2.triggerName;

        var filteredRules = _this.getRules();

        if (triggerName) {
          filteredRules = filteredRules.filter(function (rule) {
            var validateTrigger = rule.validateTrigger;

            if (!validateTrigger) {
              return true;
            }

            var triggerList = toArray$1(validateTrigger);
            return triggerList.includes(triggerName);
          });
        }

        var promise = validateRules(
          namePath,
          currentValue,
          filteredRules,
          options,
          validateFirst,
          messageVariables,
        );
        promise
          .catch(function (e) {
            return e;
          })
          .then(function () {
            var errors =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : [];

            if (_this.validatePromise === rootPromise) {
              _this.validatePromise = null;
              _this.errors = errors;

              _this.reRender();
            }
          });
        return promise;
      });
      _this.validatePromise = rootPromise;
      _this.dirty = true;
      _this.errors = []; // Force trigger re-render since we need sync renderProps with new meta

      _this.reRender();

      return rootPromise;
    };

    _this.isFieldValidating = function () {
      return !!_this.validatePromise;
    };

    _this.isFieldTouched = function () {
      return _this.touched;
    };

    _this.isFieldDirty = function () {
      return _this.dirty;
    };

    _this.getErrors = function () {
      return _this.errors;
    };

    _this.isListField = function () {
      return _this.props.isListField;
    };

    _this.isList = function () {
      return _this.props.isList;
    };

    _this.isPreserve = function () {
      return _this.props.preserve;
    }; // ============================= Child Component =============================

    _this.getMeta = function () {
      // Make error & validating in cache to save perf
      _this.prevValidating = _this.isFieldValidating();
      var meta = {
        touched: _this.isFieldTouched(),
        validating: _this.prevValidating,
        errors: _this.errors,
        name: _this.getNamePath(),
      };
      return meta;
    }; // Only return validate child node. If invalidate, will do nothing about field.

    _this.getOnlyChild = function (children) {
      // Support render props
      if (typeof children === 'function') {
        var meta = _this.getMeta();

        return _objectSpread2(
          _objectSpread2(
            {},
            _this.getOnlyChild(
              children(_this.getControlled(), meta, _this.props.fieldContext),
            ),
          ),
          {},
          {
            isFunction: true,
          },
        );
      } // Filed element only

      var childList = toArray(children);

      if (
        childList.length !== 1 ||
        !(/*#__PURE__*/ react.isValidElement(childList[0]))
      ) {
        return {
          child: childList,
          isFunction: false,
        };
      }

      return {
        child: childList[0],
        isFunction: false,
      };
    }; // ============================== Field Control ==============================

    _this.getValue = function (store) {
      var getFieldsValue = _this.props.fieldContext.getFieldsValue;

      var namePath = _this.getNamePath();

      return getValue(store || getFieldsValue(true), namePath);
    };

    _this.getControlled = function () {
      var childProps =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props6 = _this.props,
        trigger = _this$props6.trigger,
        validateTrigger = _this$props6.validateTrigger,
        getValueFromEvent = _this$props6.getValueFromEvent,
        normalize = _this$props6.normalize,
        valuePropName = _this$props6.valuePropName,
        getValueProps = _this$props6.getValueProps,
        fieldContext = _this$props6.fieldContext;
      var mergedValidateTrigger =
        validateTrigger !== undefined
          ? validateTrigger
          : fieldContext.validateTrigger;

      var namePath = _this.getNamePath();

      var getInternalHooks = fieldContext.getInternalHooks,
        getFieldsValue = fieldContext.getFieldsValue;

      var _getInternalHooks = getInternalHooks(HOOK_MARK),
        dispatch = _getInternalHooks.dispatch;

      var value = _this.getValue();

      var mergedGetValueProps =
        getValueProps ||
        function (val) {
          return _defineProperty({}, valuePropName, val);
        }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      var originTriggerFunc = childProps[trigger];

      var control = _objectSpread2(
        _objectSpread2({}, childProps),
        mergedGetValueProps(value),
      ); // Add trigger

      control[trigger] = function () {
        // Mark as touched
        _this.touched = true;
        _this.dirty = true;
        var newValue;

        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key];
        }

        if (getValueFromEvent) {
          newValue = getValueFromEvent.apply(void 0, args);
        } else {
          newValue = defaultGetValueFromEvent.apply(
            void 0,
            [valuePropName].concat(args),
          );
        }

        if (normalize) {
          newValue = normalize(newValue, value, getFieldsValue(true));
        }

        dispatch({
          type: 'updateValue',
          namePath: namePath,
          value: newValue,
        });

        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, args);
        }
      }; // Add validateTrigger

      var validateTriggerList = toArray$1(mergedValidateTrigger || []);
      validateTriggerList.forEach(function (triggerName) {
        // Wrap additional function of component, so that we can get latest value from store
        var originTrigger = control[triggerName];

        control[triggerName] = function () {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          } // Always use latest rules

          var rules = _this.props.rules;

          if (rules && rules.length) {
            // We dispatch validate to root,
            // since it will update related data with other field with same name
            dispatch({
              type: 'validateField',
              namePath: namePath,
              triggerName: triggerName,
            });
          }
        };
      });
      return control;
    }; // Register on init

    if (props.fieldContext) {
      var getInternalHooks = props.fieldContext.getInternalHooks;

      var _getInternalHooks2 = getInternalHooks(HOOK_MARK),
        initEntityValue = _getInternalHooks2.initEntityValue;

      initEntityValue(_assertThisInitialized(_this));
    }

    return _this;
  }

  _createClass(Field, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this$props7 = this.props,
          shouldUpdate = _this$props7.shouldUpdate,
          fieldContext = _this$props7.fieldContext;
        this.mounted = true; // Register on init

        if (fieldContext) {
          var getInternalHooks = fieldContext.getInternalHooks;

          var _getInternalHooks3 = getInternalHooks(HOOK_MARK),
            registerField = _getInternalHooks3.registerField;

          this.cancelRegisterFunc = registerField(this);
        } // One more render for component in case fields not ready

        if (shouldUpdate === true) {
          this.reRender();
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.cancelRegister();
        this.mounted = false;
      },
    },
    {
      key: 'reRender',
      value: function reRender() {
        if (!this.mounted) return;
        this.forceUpdate();
      },
    },
    {
      key: 'render',
      value: function render() {
        var resetCount = this.state.resetCount;
        var children = this.props.children;

        var _this$getOnlyChild = this.getOnlyChild(children),
          child = _this$getOnlyChild.child,
          isFunction = _this$getOnlyChild.isFunction; // Not need to `cloneElement` since user can handle this in render function self

        var returnChildNode;

        if (isFunction) {
          returnChildNode = child;
        } else if (/*#__PURE__*/ react.isValidElement(child)) {
          returnChildNode = /*#__PURE__*/ react.cloneElement(
            child,
            this.getControlled(child.props),
          );
        } else {
          warningOnce(
            !child,
            '`children` of Field is not validate ReactElement.',
          );
          returnChildNode = child;
        }

        return /*#__PURE__*/ react.createElement(
          react.Fragment,
          {
            key: resetCount,
          },
          returnChildNode,
        );
      },
    },
  ]);

  return Field;
})(react.Component);

Field.contextType = Context;
Field.defaultProps = {
  trigger: 'onChange',
  valuePropName: 'value',
};

function WrapperField(_ref4) {
  var name = _ref4.name,
    restProps = _objectWithoutProperties(_ref4, ['name']);

  var fieldContext = react.useContext(Context);
  var namePath = name !== undefined ? getNamePath(name) : undefined;
  var key = 'keep';

  if (!restProps.isListField) {
    key = '_'.concat((namePath || []).join('_'));
  }

  return /*#__PURE__*/ react.createElement(
    Field,
    _extends(
      {
        key: key,
        name: namePath,
      },
      restProps,
      {
        fieldContext: fieldContext,
      },
    ),
  );
}

var List = function List(_ref) {
  var name = _ref.name,
    initialValue = _ref.initialValue,
    children = _ref.children,
    rules = _ref.rules,
    validateTrigger = _ref.validateTrigger;
  var context = react.useContext(Context);
  var keyRef = react.useRef({
    keys: [],
    id: 0,
  });
  var keyManager = keyRef.current; // User should not pass `children` as other type.

  if (typeof children !== 'function') {
    warningOnce(false, 'Form.List only accepts function as children.');
    return null;
  }

  var parentPrefixName = getNamePath(context.prefixName) || [];
  var prefixName = [].concat(
    _toConsumableArray(parentPrefixName),
    _toConsumableArray(getNamePath(name)),
  );

  var shouldUpdate = function shouldUpdate(prevValue, nextValue, _ref2) {
    var source = _ref2.source;

    if (source === 'internal') {
      return false;
    }

    return prevValue !== nextValue;
  };

  return /*#__PURE__*/ react.createElement(
    Context.Provider,
    {
      value: _objectSpread2(
        _objectSpread2({}, context),
        {},
        {
          prefixName: prefixName,
        },
      ),
    },
    /*#__PURE__*/ react.createElement(
      WrapperField,
      {
        name: [],
        shouldUpdate: shouldUpdate,
        rules: rules,
        validateTrigger: validateTrigger,
        initialValue: initialValue,
        isList: true,
      },
      function (_ref3, meta) {
        var _ref3$value = _ref3.value,
          value = _ref3$value === void 0 ? [] : _ref3$value,
          onChange = _ref3.onChange;
        var getFieldValue = context.getFieldValue;

        var getNewValue = function getNewValue() {
          var values = getFieldValue(prefixName || []);
          return values || [];
        };
        /**
         * Always get latest value in case user update fields by `form` api.
         */

        var operations = {
          add: function add(defaultValue, index) {
            // Mapping keys
            var newValue = getNewValue();

            if (index >= 0 && index <= newValue.length) {
              keyManager.keys = [].concat(
                _toConsumableArray(keyManager.keys.slice(0, index)),
                [keyManager.id],
                _toConsumableArray(keyManager.keys.slice(index)),
              );
              onChange(
                [].concat(
                  _toConsumableArray(newValue.slice(0, index)),
                  [defaultValue],
                  _toConsumableArray(newValue.slice(index)),
                ),
              );
            } else {
              keyManager.keys = [].concat(_toConsumableArray(keyManager.keys), [
                keyManager.id,
              ]);
              onChange([].concat(_toConsumableArray(newValue), [defaultValue]));
            }

            keyManager.id += 1;
          },
          remove: function remove(index) {
            var newValue = getNewValue();
            var indexSet = new Set(Array.isArray(index) ? index : [index]);

            if (indexSet.size <= 0) {
              return;
            }

            keyManager.keys = keyManager.keys.filter(function (_, keysIndex) {
              return !indexSet.has(keysIndex);
            }); // Trigger store change

            onChange(
              newValue.filter(function (_, valueIndex) {
                return !indexSet.has(valueIndex);
              }),
            );
          },
          move: function move$1(from, to) {
            if (from === to) {
              return;
            }

            var newValue = getNewValue(); // Do not handle out of range

            if (
              from < 0 ||
              from >= newValue.length ||
              to < 0 ||
              to >= newValue.length
            ) {
              return;
            }

            keyManager.keys = move(keyManager.keys, from, to); // Trigger store change

            onChange(move(newValue, from, to));
          },
        };
        var listValue = value || [];

        if (!Array.isArray(listValue)) {
          listValue = [];
        }

        return children(
          listValue.map(function (__, index) {
            var key = keyManager.keys[index];

            if (key === undefined) {
              keyManager.keys[index] = keyManager.id;
              key = keyManager.keys[index];
              keyManager.id += 1;
            }

            return {
              name: index,
              key: key,
              isListField: true,
            };
          }),
          operations,
          meta,
        );
      },
    ),
  );
};

function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];

  if (!promiseList.length) {
    return Promise.resolve([]);
  }

  return new Promise(function (resolve, reject) {
    promiseList.forEach(function (promise, index) {
      promise
        .catch(function (e) {
          hasError = true;
          return e;
        })
        .then(function (result) {
          count -= 1;
          results[index] = result;

          if (count > 0) {
            return;
          }

          if (hasError) {
            reject(results);
          }

          resolve(results);
        });
    });
  });
}

var SPLIT = '__@field_split__';
/**
 * Convert name path into string to fast the fetch speed of Map.
 */

function normalize(namePath) {
  return namePath
    .map(function (cell) {
      return ''.concat(_typeof(cell), ':').concat(cell);
    }) // Magic split
    .join(SPLIT);
}
/**
 * NameMap like a `Map` but accepts `string[]` as key.
 */

var NameMap = /*#__PURE__*/ (function () {
  function NameMap() {
    _classCallCheck(this, NameMap);

    this.kvs = new Map();
  }

  _createClass(NameMap, [
    {
      key: 'set',
      value: function set(key, value) {
        this.kvs.set(normalize(key), value);
      },
    },
    {
      key: 'get',
      value: function get(key) {
        return this.kvs.get(normalize(key));
      },
    },
    {
      key: 'update',
      value: function update(key, updater) {
        var origin = this.get(key);
        var next = updater(origin);

        if (!next) {
          this.delete(key);
        } else {
          this.set(key, next);
        }
      },
    },
    {
      key: 'delete',
      value: function _delete(key) {
        this.kvs.delete(normalize(key));
      }, // Since we only use this in test, let simply realize this
    },
    {
      key: 'map',
      value: function map(callback) {
        return _toConsumableArray(this.kvs.entries()).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

          var cells = key.split(SPLIT);
          return callback({
            key: cells.map(function (cell) {
              var _cell$match = cell.match(/^([^:]*):(.*)$/),
                _cell$match2 = _slicedToArray(_cell$match, 3),
                type = _cell$match2[1],
                unit = _cell$match2[2];

              return type === 'number' ? Number(unit) : unit;
            }),
            value: value,
          });
        });
      },
    },
    {
      key: 'toJSON',
      value: function toJSON() {
        var json = {};
        this.map(function (_ref3) {
          var key = _ref3.key,
            value = _ref3.value;
          json[key.join('.')] = value;
          return null;
        });
        return json;
      },
    },
  ]);

  return NameMap;
})();

var FormStore = function FormStore(forceRootUpdate) {
  var _this = this;

  _classCallCheck(this, FormStore);

  this.formHooked = false;
  this.subscribable = true;
  this.store = {};
  this.fieldEntities = [];
  this.initialValues = {};
  this.callbacks = {};
  this.validateMessages = null;
  this.preserve = null;
  this.lastValidatePromise = null;

  this.getForm = function () {
    return {
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      getFieldError: _this.getFieldError,
      getFieldsError: _this.getFieldsError,
      isFieldsTouched: _this.isFieldsTouched,
      isFieldTouched: _this.isFieldTouched,
      isFieldValidating: _this.isFieldValidating,
      isFieldsValidating: _this.isFieldsValidating,
      resetFields: _this.resetFields,
      setFields: _this.setFields,
      setFieldsValue: _this.setFieldsValue,
      validateFields: _this.validateFields,
      submit: _this.submit,
      getInternalHooks: _this.getInternalHooks,
    };
  }; // ======================== Internal Hooks ========================

  this.getInternalHooks = function (key) {
    if (key === HOOK_MARK) {
      _this.formHooked = true;
      return {
        dispatch: _this.dispatch,
        initEntityValue: _this.initEntityValue,
        registerField: _this.registerField,
        useSubscribe: _this.useSubscribe,
        setInitialValues: _this.setInitialValues,
        setCallbacks: _this.setCallbacks,
        setValidateMessages: _this.setValidateMessages,
        getFields: _this.getFields,
        setPreserve: _this.setPreserve,
      };
    }

    warningOnce(
      false,
      '`getInternalHooks` is internal usage. Should not call directly.',
    );
    return null;
  };

  this.useSubscribe = function (subscribable) {
    _this.subscribable = subscribable;
  };
  /**
   * First time `setInitialValues` should update store with initial value
   */

  this.setInitialValues = function (initialValues, init) {
    _this.initialValues = initialValues || {};

    if (init) {
      _this.store = setValues({}, initialValues, _this.store);
    }
  };

  this.getInitialValue = function (namePath) {
    return getValue(_this.initialValues, namePath);
  };

  this.setCallbacks = function (callbacks) {
    _this.callbacks = callbacks;
  };

  this.setValidateMessages = function (validateMessages) {
    _this.validateMessages = validateMessages;
  };

  this.setPreserve = function (preserve) {
    _this.preserve = preserve;
  }; // ========================== Dev Warning =========================

  this.timeoutId = null;

  this.warningUnhooked = function () {}; // ============================ Fields ============================

  /**
   * Get registered field entities.
   * @param pure Only return field which has a `name`. Default: false
   */

  this.getFieldEntities = function () {
    var pure =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!pure) {
      return _this.fieldEntities;
    }

    return _this.fieldEntities.filter(function (field) {
      return field.getNamePath().length;
    });
  };

  this.getFieldsMap = function () {
    var pure =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var cache = new NameMap();

    _this.getFieldEntities(pure).forEach(function (field) {
      var namePath = field.getNamePath();
      cache.set(namePath, field);
    });

    return cache;
  };

  this.getFieldEntitiesForNamePathList = function (nameList) {
    if (!nameList) {
      return _this.getFieldEntities(true);
    }

    var cache = _this.getFieldsMap(true);

    return nameList.map(function (name) {
      var namePath = getNamePath(name);
      return (
        cache.get(namePath) || {
          INVALIDATE_NAME_PATH: getNamePath(name),
        }
      );
    });
  };

  this.getFieldsValue = function (nameList, filterFunc) {
    _this.warningUnhooked();

    if (nameList === true && !filterFunc) {
      return _this.store;
    }

    var fieldEntities = _this.getFieldEntitiesForNamePathList(
      Array.isArray(nameList) ? nameList : null,
    );

    var filteredNameList = [];
    fieldEntities.forEach(function (entity) {
      var _entity$isListField;

      var namePath =
        'INVALIDATE_NAME_PATH' in entity
          ? entity.INVALIDATE_NAME_PATH
          : entity.getNamePath(); // Ignore when it's a list item and not specific the namePath,
      // since parent field is already take in count

      if (
        !nameList &&
        ((_entity$isListField = entity.isListField) === null ||
        _entity$isListField === void 0
          ? void 0
          : _entity$isListField.call(entity))
      ) {
        return;
      }

      if (!filterFunc) {
        filteredNameList.push(namePath);
      } else {
        var meta = 'getMeta' in entity ? entity.getMeta() : null;

        if (filterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
  };

  this.getFieldValue = function (name) {
    _this.warningUnhooked();

    var namePath = getNamePath(name);
    return getValue(_this.store, namePath);
  };

  this.getFieldsError = function (nameList) {
    _this.warningUnhooked();

    var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);

    return fieldEntities.map(function (entity, index) {
      if (entity && !('INVALIDATE_NAME_PATH' in entity)) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors(),
        };
      }

      return {
        name: getNamePath(nameList[index]),
        errors: [],
      };
    });
  };

  this.getFieldError = function (name) {
    _this.warningUnhooked();

    var namePath = getNamePath(name);

    var fieldError = _this.getFieldsError([namePath])[0];

    return fieldError.errors;
  };

  this.isFieldsTouched = function () {
    _this.warningUnhooked();

    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    var arg0 = args[0],
      arg1 = args[1];
    var namePathList;
    var isAllFieldsTouched = false;

    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(getNamePath);
      isAllFieldsTouched = arg1;
    }

    var fieldEntities = _this.getFieldEntities(true);

    var isFieldTouched = function isFieldTouched(field) {
      return field.isFieldTouched();
    }; // ===== Will get fully compare when not config namePathList =====

    if (!namePathList) {
      return isAllFieldsTouched
        ? fieldEntities.every(isFieldTouched)
        : fieldEntities.some(isFieldTouched);
    } // Generate a nest tree for validate

    var map = new NameMap();
    namePathList.forEach(function (shortNamePath) {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach(function (field) {
      var fieldNamePath = field.getNamePath(); // Find matched entity and put into list

      namePathList.forEach(function (shortNamePath) {
        if (
          shortNamePath.every(function (nameUnit, i) {
            return fieldNamePath[i] === nameUnit;
          })
        ) {
          map.update(shortNamePath, function (list) {
            return [].concat(_toConsumableArray(list), [field]);
          });
        }
      });
    }); // Check if NameMap value is touched

    var isNamePathListTouched = function isNamePathListTouched(entities) {
      return entities.some(isFieldTouched);
    };

    var namePathListEntities = map.map(function (_ref) {
      var value = _ref.value;
      return value;
    });
    return isAllFieldsTouched
      ? namePathListEntities.every(isNamePathListTouched)
      : namePathListEntities.some(isNamePathListTouched);
  };

  this.isFieldTouched = function (name) {
    _this.warningUnhooked();

    return _this.isFieldsTouched([name]);
  };

  this.isFieldsValidating = function (nameList) {
    _this.warningUnhooked();

    var fieldEntities = _this.getFieldEntities();

    if (!nameList) {
      return fieldEntities.some(function (testField) {
        return testField.isFieldValidating();
      });
    }

    var namePathList = nameList.map(getNamePath);
    return fieldEntities.some(function (testField) {
      var fieldNamePath = testField.getNamePath();
      return (
        containsNamePath(namePathList, fieldNamePath) &&
        testField.isFieldValidating()
      );
    });
  };

  this.isFieldValidating = function (name) {
    _this.warningUnhooked();

    return _this.isFieldsValidating([name]);
  };
  /**
   * Reset Field with field `initialValue` prop.
   * Can pass `entities` or `namePathList` or just nothing.
   */

  this.resetWithFieldInitialValue = function () {
    var info =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // Create cache
    var cache = new NameMap();

    var fieldEntities = _this.getFieldEntities(true);

    fieldEntities.forEach(function (field) {
      var initialValue = field.props.initialValue;
      var namePath = field.getNamePath(); // Record only if has `initialValue`

      if (initialValue !== undefined) {
        var records = cache.get(namePath) || new Set();
        records.add({
          entity: field,
          value: initialValue,
        });
        cache.set(namePath, records);
      }
    }); // Reset

    var resetWithFields = function resetWithFields(entities) {
      entities.forEach(function (field) {
        var initialValue = field.props.initialValue;

        if (initialValue !== undefined) {
          var namePath = field.getNamePath();

          var formInitialValue = _this.getInitialValue(namePath);

          if (formInitialValue !== undefined) {
            // Warning if conflict with form initialValues and do not modify value
            warningOnce(
              false,
              "Form already set 'initialValues' with path '".concat(
                namePath.join('.'),
                "'. Field can not overwrite it.",
              ),
            );
          } else {
            var records = cache.get(namePath);

            if (records && records.size > 1) {
              // Warning if multiple field set `initialValue`and do not modify value
              warningOnce(
                false,
                "Multiple Field with path '".concat(
                  namePath.join('.'),
                  "' set 'initialValue'. Can not decide which one to pick.",
                ),
              );
            } else if (records) {
              var originValue = _this.getFieldValue(namePath); // Set `initialValue`

              if (!info.skipExist || originValue === undefined) {
                _this.store = setValue(
                  _this.store,
                  namePath,
                  _toConsumableArray(records)[0].value,
                );
              }
            }
          }
        }
      });
    };

    var requiredFieldEntities;

    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach(function (namePath) {
        var records = cache.get(namePath);

        if (records) {
          var _requiredFieldEntitie;

          (_requiredFieldEntitie = requiredFieldEntities).push.apply(
            _requiredFieldEntitie,
            _toConsumableArray(
              _toConsumableArray(records).map(function (r) {
                return r.entity;
              }),
            ),
          );
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }

    resetWithFields(requiredFieldEntities);
  };

  this.resetFields = function (nameList) {
    _this.warningUnhooked();

    var prevStore = _this.store;

    if (!nameList) {
      _this.store = setValues({}, _this.initialValues);

      _this.resetWithFieldInitialValue();

      _this.notifyObservers(prevStore, null, {
        type: 'reset',
      });

      return;
    } // Reset by `nameList`

    var namePathList = nameList.map(getNamePath);
    namePathList.forEach(function (namePath) {
      var initialValue = _this.getInitialValue(namePath);

      _this.store = setValue(_this.store, namePath, initialValue);
    });

    _this.resetWithFieldInitialValue({
      namePathList: namePathList,
    });

    _this.notifyObservers(prevStore, namePathList, {
      type: 'reset',
    });
  };

  this.setFields = function (fields) {
    _this.warningUnhooked();

    var prevStore = _this.store;
    fields.forEach(function (fieldData) {
      var name = fieldData.name;
      fieldData.errors;
      var data = _objectWithoutProperties(fieldData, ['name', 'errors']);

      var namePath = getNamePath(name); // Value

      if ('value' in data) {
        _this.store = setValue(_this.store, namePath, data.value);
      }

      _this.notifyObservers(prevStore, [namePath], {
        type: 'setField',
        data: fieldData,
      });
    });
  };

  this.getFields = function () {
    var entities = _this.getFieldEntities(true);

    var fields = entities.map(function (field) {
      var namePath = field.getNamePath();
      var meta = field.getMeta();

      var fieldData = _objectSpread2(
        _objectSpread2({}, meta),
        {},
        {
          name: namePath,
          value: _this.getFieldValue(namePath),
        },
      );

      Object.defineProperty(fieldData, 'originRCField', {
        value: true,
      });
      return fieldData;
    });
    return fields;
  }; // =========================== Observer ===========================

  /**
   * This only trigger when a field is on constructor to avoid we get initialValue too late
   */

  this.initEntityValue = function (entity) {
    var initialValue = entity.props.initialValue;

    if (initialValue !== undefined) {
      var namePath = entity.getNamePath();
      var prevValue = getValue(_this.store, namePath);

      if (prevValue === undefined) {
        _this.store = setValue(_this.store, namePath, initialValue);
      }
    }
  };

  this.registerField = function (entity) {
    _this.fieldEntities.push(entity); // Set initial values

    if (entity.props.initialValue !== undefined) {
      var prevStore = _this.store;

      _this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true,
      });

      _this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: 'valueUpdate',
        source: 'internal',
      });
    } // un-register field callback

    return function (isListField, preserve) {
      _this.fieldEntities = _this.fieldEntities.filter(function (item) {
        return item !== entity;
      }); // Clean up store value if preserve

      var mergedPreserve = preserve !== undefined ? preserve : _this.preserve;

      if (mergedPreserve === false && !isListField) {
        var namePath = entity.getNamePath();
        var defaultValue = getValue(_this.initialValues, namePath);

        if (
          namePath.length &&
          _this.getFieldValue(namePath) !== defaultValue &&
          _this.fieldEntities.every(function (field) {
            return (
              // Only reset when no namePath exist
              !matchNamePath(field.getNamePath(), namePath)
            );
          })
        ) {
          _this.store = setValue(_this.store, namePath, defaultValue);
        }
      }
    };
  };

  this.dispatch = function (action) {
    switch (action.type) {
      case 'updateValue': {
        var namePath = action.namePath,
          value = action.value;

        _this.updateValue(namePath, value);

        break;
      }

      case 'validateField': {
        var _namePath = action.namePath,
          triggerName = action.triggerName;

        _this.validateFields([_namePath], {
          triggerName: triggerName,
        });

        break;
      }
    }
  };

  this.notifyObservers = function (prevStore, namePathList, info) {
    if (_this.subscribable) {
      var mergedInfo = _objectSpread2(
        _objectSpread2({}, info),
        {},
        {
          store: _this.getFieldsValue(true),
        },
      );

      _this.getFieldEntities().forEach(function (_ref2) {
        var onStoreChange = _ref2.onStoreChange;
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      _this.forceRootUpdate();
    }
  };

  this.updateValue = function (name, value) {
    var namePath = getNamePath(name);
    var prevStore = _this.store;
    _this.store = setValue(_this.store, namePath, value);

    _this.notifyObservers(prevStore, [namePath], {
      type: 'valueUpdate',
      source: 'internal',
    }); // Notify dependencies children with parent update
    // We need delay to trigger validate in case Field is under render props

    var childrenFields = _this.getDependencyChildrenFields(namePath);

    if (childrenFields.length) {
      _this.validateFields(childrenFields);
    }

    _this.notifyObservers(prevStore, childrenFields, {
      type: 'dependenciesUpdate',
      relatedFields: [namePath].concat(_toConsumableArray(childrenFields)),
    }); // trigger callback function

    var onValuesChange = _this.callbacks.onValuesChange;

    if (onValuesChange) {
      var changedValues = cloneByNamePathList(_this.store, [namePath]);
      onValuesChange(changedValues, _this.getFieldsValue());
    }

    _this.triggerOnFieldsChange(
      [namePath].concat(_toConsumableArray(childrenFields)),
    );
  }; // Let all child Field get update.

  this.setFieldsValue = function (store) {
    _this.warningUnhooked();

    var prevStore = _this.store;

    if (store) {
      _this.store = setValues(_this.store, store);
    }

    _this.notifyObservers(prevStore, null, {
      type: 'valueUpdate',
      source: 'external',
    });
  };

  this.getDependencyChildrenFields = function (rootNamePath) {
    var children = new Set();
    var childrenFields = [];
    var dependencies2fields = new NameMap();
    /**
     * Generate maps
     * Can use cache to save perf if user report performance issue with this
     */

    _this.getFieldEntities().forEach(function (field) {
      var dependencies = field.props.dependencies;
      (dependencies || []).forEach(function (dependency) {
        var dependencyNamePath = getNamePath(dependency);
        dependencies2fields.update(dependencyNamePath, function () {
          var fields =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : new Set();
          fields.add(field);
          return fields;
        });
      });
    });

    var fillChildren = function fillChildren(namePath) {
      var fields = dependencies2fields.get(namePath) || new Set();
      fields.forEach(function (field) {
        if (!children.has(field)) {
          children.add(field);
          var fieldNamePath = field.getNamePath();

          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren(fieldNamePath);
          }
        }
      });
    };

    fillChildren(rootNamePath);
    return childrenFields;
  };

  this.triggerOnFieldsChange = function (namePathList, filedErrors) {
    var onFieldsChange = _this.callbacks.onFieldsChange;

    if (onFieldsChange) {
      var fields = _this.getFields();
      /**
       * Fill errors since `fields` may be replaced by controlled fields
       */

      if (filedErrors) {
        var cache = new NameMap();
        filedErrors.forEach(function (_ref3) {
          var name = _ref3.name,
            errors = _ref3.errors;
          cache.set(name, errors);
        });
        fields.forEach(function (field) {
          // eslint-disable-next-line no-param-reassign
          field.errors = cache.get(field.name) || field.errors;
        });
      }

      var changedFields = fields.filter(function (_ref4) {
        var fieldName = _ref4.name;
        return containsNamePath(namePathList, fieldName);
      });
      onFieldsChange(changedFields, fields);
    }
  }; // =========================== Validate ===========================

  this.validateFields = function (nameList, options) {
    _this.warningUnhooked();

    var provideNameList = !!nameList;
    var namePathList = provideNameList ? nameList.map(getNamePath) : []; // Collect result in promise list

    var promiseList = [];

    _this.getFieldEntities(true).forEach(function (field) {
      // Add field if not provide `nameList`
      if (!provideNameList) {
        namePathList.push(field.getNamePath());
      }
      /**
       * Recursive validate if configured.
       * TODO: perf improvement @zombieJ
       */

      if (
        (options === null || options === void 0 ? void 0 : options.recursive) &&
        provideNameList
      ) {
        var namePath = field.getNamePath();

        if (
          // nameList[i] === undefined 说明是以 nameList 开头的
          // ['name'] -> ['name','list']
          namePath.every(function (nameUnit, i) {
            return nameList[i] === nameUnit || nameList[i] === undefined;
          })
        ) {
          namePathList.push(namePath);
        }
      } // Skip if without rule

      if (!field.props.rules || !field.props.rules.length) {
        return;
      }

      var fieldNamePath = field.getNamePath(); // Add field validate rule in to promise list

      if (!provideNameList || containsNamePath(namePathList, fieldNamePath)) {
        var promise = field.validateRules(
          _objectSpread2(
            {
              validateMessages: _objectSpread2(
                _objectSpread2({}, defaultValidateMessages),
                _this.validateMessages,
              ),
            },
            options,
          ),
        ); // Wrap promise with field

        promiseList.push(
          promise
            .then(function () {
              return {
                name: fieldNamePath,
                errors: [],
              };
            })
            .catch(function (errors) {
              return Promise.reject({
                name: fieldNamePath,
                errors: errors,
              });
            }),
        );
      }
    });

    var summaryPromise = allPromiseFinish(promiseList);
    _this.lastValidatePromise = summaryPromise; // Notify fields with rule that validate has finished and need update

    summaryPromise
      .catch(function (results) {
        return results;
      })
      .then(function (results) {
        var resultNamePathList = results.map(function (_ref5) {
          var name = _ref5.name;
          return name;
        });

        _this.notifyObservers(_this.store, resultNamePathList, {
          type: 'validateFinish',
        });

        _this.triggerOnFieldsChange(resultNamePathList, results);
      });
    var returnPromise = summaryPromise
      .then(function () {
        if (_this.lastValidatePromise === summaryPromise) {
          return Promise.resolve(_this.getFieldsValue(namePathList));
        }

        return Promise.reject([]);
      })
      .catch(function (results) {
        var errorList = results.filter(function (result) {
          return result && result.errors.length;
        });
        return Promise.reject({
          values: _this.getFieldsValue(namePathList),
          errorFields: errorList,
          outOfDate: _this.lastValidatePromise !== summaryPromise,
        });
      }); // Do not throw in console

    returnPromise.catch(function (e) {
      return e;
    });
    return returnPromise;
  }; // ============================ Submit ============================

  this.submit = function () {
    _this.warningUnhooked();

    _this
      .validateFields()
      .then(function (values) {
        var onFinish = _this.callbacks.onFinish;

        if (onFinish) {
          try {
            onFinish(values);
          } catch (err) {
            // Should print error if user `onFinish` callback failed
            console.error(err);
          }
        }
      })
      .catch(function (e) {
        var onFinishFailed = _this.callbacks.onFinishFailed;

        if (onFinishFailed) {
          onFinishFailed(e);
        }
      });
  };

  this.forceRootUpdate = forceRootUpdate;
};

function useForm(form) {
  var formRef = react.useRef();

  var _React$useState = react.useState({}),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    forceUpdate = _React$useState2[1];

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // Create a new FormStore if not provided
      var forceReRender = function forceReRender() {
        forceUpdate({});
      };

      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
}

var FormContext = /*#__PURE__*/ react.createContext({
  triggerFormChange: function triggerFormChange() {},
  triggerFormFinish: function triggerFormFinish() {},
  registerForm: function registerForm() {},
  unregisterForm: function unregisterForm() {},
});

var FormProvider = function FormProvider(_ref) {
  var validateMessages = _ref.validateMessages,
    onFormChange = _ref.onFormChange,
    onFormFinish = _ref.onFormFinish,
    children = _ref.children;
  var formContext = react.useContext(FormContext);
  var formsRef = react.useRef({});
  return /*#__PURE__*/ react.createElement(
    FormContext.Provider,
    {
      value: _objectSpread2(
        _objectSpread2({}, formContext),
        {},
        {
          validateMessages: _objectSpread2(
            _objectSpread2({}, formContext.validateMessages),
            validateMessages,
          ),
          // =========================================================
          // =                  Global Form Control                  =
          // =========================================================
          triggerFormChange: function triggerFormChange(name, changedFields) {
            if (onFormChange) {
              onFormChange(name, {
                changedFields: changedFields,
                forms: formsRef.current,
              });
            }

            formContext.triggerFormChange(name, changedFields);
          },
          triggerFormFinish: function triggerFormFinish(name, values) {
            if (onFormFinish) {
              onFormFinish(name, {
                values: values,
                forms: formsRef.current,
              });
            }

            formContext.triggerFormFinish(name, values);
          },
          registerForm: function registerForm(name, form) {
            if (name) {
              formsRef.current = _objectSpread2(
                _objectSpread2({}, formsRef.current),
                {},
                _defineProperty({}, name, form),
              );
            }

            formContext.registerForm(name, form);
          },
          unregisterForm: function unregisterForm(name) {
            var newForms = _objectSpread2({}, formsRef.current);

            delete newForms[name];
            formsRef.current = newForms;
            formContext.unregisterForm(name);
          },
        },
      ),
    },
    children,
  );
};

var Form = function Form(_ref, ref) {
  var name = _ref.name,
    initialValues = _ref.initialValues,
    fields = _ref.fields,
    form = _ref.form,
    preserve = _ref.preserve,
    children = _ref.children,
    _ref$component = _ref.component,
    Component = _ref$component === void 0 ? 'form' : _ref$component,
    validateMessages = _ref.validateMessages,
    _ref$validateTrigger = _ref.validateTrigger,
    validateTrigger =
      _ref$validateTrigger === void 0 ? 'onChange' : _ref$validateTrigger,
    onValuesChange = _ref.onValuesChange,
    _onFieldsChange = _ref.onFieldsChange,
    _onFinish = _ref.onFinish,
    onFinishFailed = _ref.onFinishFailed,
    restProps = _objectWithoutProperties(_ref, [
      'name',
      'initialValues',
      'fields',
      'form',
      'preserve',
      'children',
      'component',
      'validateMessages',
      'validateTrigger',
      'onValuesChange',
      'onFieldsChange',
      'onFinish',
      'onFinishFailed',
    ]);

  var formContext = react.useContext(FormContext); // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider

  var _useForm = useForm(form),
    _useForm2 = _slicedToArray(_useForm, 1),
    formInstance = _useForm2[0];

  var _formInstance$getInte = formInstance.getInternalHooks(HOOK_MARK),
    useSubscribe = _formInstance$getInte.useSubscribe,
    setInitialValues = _formInstance$getInte.setInitialValues,
    setCallbacks = _formInstance$getInte.setCallbacks,
    setValidateMessages = _formInstance$getInte.setValidateMessages,
    setPreserve = _formInstance$getInte.setPreserve; // Pass ref with form instance

  react.useImperativeHandle(ref, function () {
    return formInstance;
  }); // Register form into Context

  react.useEffect(
    function () {
      formContext.registerForm(name, formInstance);
      return function () {
        formContext.unregisterForm(name);
      };
    },
    [formContext, formInstance, name],
  ); // Pass props to store

  setValidateMessages(
    _objectSpread2(
      _objectSpread2({}, formContext.validateMessages),
      validateMessages,
    ),
  );
  setCallbacks({
    onValuesChange: onValuesChange,
    onFieldsChange: function onFieldsChange(changedFields) {
      formContext.triggerFormChange(name, changedFields);

      if (_onFieldsChange) {
        for (
          var _len = arguments.length,
            rest = new Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          rest[_key - 1] = arguments[_key];
        }

        _onFieldsChange.apply(void 0, [changedFields].concat(rest));
      }
    },
    onFinish: function onFinish(values) {
      formContext.triggerFormFinish(name, values);

      if (_onFinish) {
        _onFinish(values);
      }
    },
    onFinishFailed: onFinishFailed,
  });
  setPreserve(preserve); // Set initial value, init store value when first mount

  var mountRef = react.useRef(null);
  setInitialValues(initialValues, !mountRef.current);

  if (!mountRef.current) {
    mountRef.current = true;
  } // Prepare children by `children` type

  var childrenNode = children;
  var childrenRenderProps = typeof children === 'function';

  if (childrenRenderProps) {
    var values = formInstance.getFieldsValue(true);
    childrenNode = children(values, formInstance);
  } // Not use subscribe when using render props

  useSubscribe(!childrenRenderProps); // Listen if fields provided. We use ref to save prev data here to avoid additional render

  var prevFieldsRef = react.useRef();
  react.useEffect(
    function () {
      if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
        formInstance.setFields(fields || []);
      }

      prevFieldsRef.current = fields;
    },
    [fields, formInstance],
  );
  var formContextValue = react.useMemo(
    function () {
      return _objectSpread2(
        _objectSpread2({}, formInstance),
        {},
        {
          validateTrigger: validateTrigger,
        },
      );
    },
    [formInstance, validateTrigger],
  );
  var wrapperNode = /*#__PURE__*/ react.createElement(
    Context.Provider,
    {
      value: formContextValue,
    },
    childrenNode,
  );

  if (Component === false) {
    return wrapperNode;
  }

  return /*#__PURE__*/ react.createElement(
    Component,
    _extends({}, restProps, {
      onSubmit: function onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        formInstance.submit();
      },
    }),
    wrapperNode,
  );
};

var InternalForm = /*#__PURE__*/ react.forwardRef(Form);
var RefForm = InternalForm;
RefForm.FormProvider = FormProvider;
RefForm.Field = WrapperField;
RefForm.List = List;
RefForm.useForm = useForm;

var Pagination = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
};

var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century',
};

var locale$1 = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time'],
};

var locale$2 = {
  lang: _extends(
    {
      placeholder: 'Select date',
      yearPlaceholder: 'Select year',
      quarterPlaceholder: 'Select quarter',
      monthPlaceholder: 'Select month',
      weekPlaceholder: 'Select week',
      rangePlaceholder: ['Start date', 'End date'],
      rangeYearPlaceholder: ['Start year', 'End year'],
      rangeMonthPlaceholder: ['Start month', 'End month'],
      rangeWeekPlaceholder: ['Start week', 'End week'],
    },
    locale,
  ),
  timePickerLocale: _extends({}, locale$1),
}; // All settings at:

/* eslint-disable no-template-curly-in-string */
var typeTemplate$1 = '${label} is not a valid ${type}';
var localeValues = {
  locale: 'en',
  Pagination: Pagination,
  DatePicker: locale$2,
  TimePicker: locale$1,
  Calendar: locale$2,
  global: {
    placeholder: 'Please select',
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel',
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page',
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file',
  },
  Empty: {
    description: 'No Data',
  },
  Icon: {
    icon: 'icon',
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand',
  },
  PageHeader: {
    back: 'Back',
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      default: 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      enum: '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date',
      },
      types: {
        string: typeTemplate$1,
        method: typeTemplate$1,
        array: typeTemplate$1,
        object: typeTemplate$1,
        number: typeTemplate$1,
        date: typeTemplate$1,
        boolean: typeTemplate$1,
        integer: typeTemplate$1,
        float: typeTemplate$1,
        regexp: typeTemplate$1,
        email: typeTemplate$1,
        url: typeTemplate$1,
        hex: typeTemplate$1,
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters',
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}',
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}',
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}',
      },
    },
  },
  Image: {
    preview: 'Preview',
  },
};

var LocaleContext = /*#__PURE__*/ react.createContext(undefined);

var LocaleReceiver = /*#__PURE__*/ (function (_React$Component) {
  _inherits(LocaleReceiver, _React$Component);

  var _super = _createSuper(LocaleReceiver);

  function LocaleReceiver() {
    _classCallCheck(this, LocaleReceiver);

    return _super.apply(this, arguments);
  }

  _createClass(LocaleReceiver, [
    {
      key: 'getLocale',
      value: function getLocale() {
        var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale = _this$props.defaultLocale;
        var locale = defaultLocale || localeValues[componentName || 'global'];
        var antLocale = this.context;
        var localeFromContext =
          componentName && antLocale ? antLocale[componentName] : {};
        return _extends(
          _extends({}, typeof locale === 'function' ? locale() : locale),
          localeFromContext || {},
        );
      },
    },
    {
      key: 'getLocaleCode',
      value: function getLocaleCode() {
        var antLocale = this.context;
        var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

        if (antLocale && antLocale.exist && !localeCode) {
          return localeValues.locale;
        }

        return localeCode;
      },
    },
    {
      key: 'render',
      value: function render() {
        return this.props.children(
          this.getLocale(),
          this.getLocaleCode(),
          this.context,
        );
      },
    },
  ]);

  return LocaleReceiver;
})(react.Component);
LocaleReceiver.defaultProps = {
  componentName: 'global',
};
LocaleReceiver.contextType = LocaleContext;

var Empty = function Empty() {
  var _React$useContext = react.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-default');
  return /*#__PURE__*/ react.createElement(
    'svg',
    {
      className: prefixCls,
      width: '184',
      height: '152',
      viewBox: '0 0 184 152',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ react.createElement(
      'g',
      {
        fill: 'none',
        fillRule: 'evenodd',
      },
      /*#__PURE__*/ react.createElement(
        'g',
        {
          transform: 'translate(24 31.67)',
        },
        /*#__PURE__*/ react.createElement('ellipse', {
          className: ''.concat(prefixCls, '-ellipse'),
          cx: '67.797',
          cy: '106.89',
          rx: '67.797',
          ry: '12.668',
        }),
        /*#__PURE__*/ react.createElement('path', {
          className: ''.concat(prefixCls, '-path-1'),
          d:
            'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
        }),
        /*#__PURE__*/ react.createElement('path', {
          className: ''.concat(prefixCls, '-path-2'),
          d:
            'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
          transform: 'translate(13.56)',
        }),
        /*#__PURE__*/ react.createElement('path', {
          className: ''.concat(prefixCls, '-path-3'),
          d:
            'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
        }),
        /*#__PURE__*/ react.createElement('path', {
          className: ''.concat(prefixCls, '-path-4'),
          d:
            'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
        }),
      ),
      /*#__PURE__*/ react.createElement('path', {
        className: ''.concat(prefixCls, '-path-5'),
        d:
          'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
      }),
      /*#__PURE__*/ react.createElement(
        'g',
        {
          className: ''.concat(prefixCls, '-g'),
          transform: 'translate(149.65 15.383)',
        },
        /*#__PURE__*/ react.createElement('ellipse', {
          cx: '20.654',
          cy: '3.167',
          rx: '2.849',
          ry: '2.815',
        }),
        /*#__PURE__*/ react.createElement('path', {
          d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z',
        }),
      ),
    ),
  );
};

var Simple = function Simple() {
  var _React$useContext = react.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-simple');
  return /*#__PURE__*/ react.createElement(
    'svg',
    {
      className: prefixCls,
      width: '64',
      height: '41',
      viewBox: '0 0 64 41',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ react.createElement(
      'g',
      {
        transform: 'translate(0 1)',
        fill: 'none',
        fillRule: 'evenodd',
      },
      /*#__PURE__*/ react.createElement('ellipse', {
        className: ''.concat(prefixCls, '-ellipse'),
        cx: '32',
        cy: '33',
        rx: '32',
        ry: '7',
      }),
      /*#__PURE__*/ react.createElement(
        'g',
        {
          className: ''.concat(prefixCls, '-g'),
          fillRule: 'nonzero',
        },
        /*#__PURE__*/ react.createElement('path', {
          d:
            'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
        }),
        /*#__PURE__*/ react.createElement('path', {
          d:
            'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
          className: ''.concat(prefixCls, '-path'),
        }),
      ),
    ),
  );
};

var __rest =
  (undefined && undefined.__rest) ||
  function (s, e) {
    var t = {};

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    }

    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var defaultEmptyImg = /*#__PURE__*/ react.createElement(Empty, null);
var simpleEmptyImg = /*#__PURE__*/ react.createElement(Simple, null);

var Empty$1 = function Empty(_a) {
  var className = _a.className,
    customizePrefixCls = _a.prefixCls,
    _a$image = _a.image,
    image = _a$image === void 0 ? defaultEmptyImg : _a$image,
    description = _a.description,
    children = _a.children,
    imageStyle = _a.imageStyle,
    restProps = __rest(_a, [
      'className',
      'prefixCls',
      'image',
      'description',
      'children',
      'imageStyle',
    ]);

  var _React$useContext = react.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;

  return /*#__PURE__*/ react.createElement(
    LocaleReceiver,
    {
      componentName: 'Empty',
    },
    function (locale) {
      var _classNames;

      var prefixCls = getPrefixCls('empty', customizePrefixCls);
      var des =
        typeof description !== 'undefined' ? description : locale.description;
      var alt = typeof des === 'string' ? des : 'empty';
      var imageNode = null;

      if (typeof image === 'string') {
        imageNode = /*#__PURE__*/ react.createElement('img', {
          alt: alt,
          src: image,
        });
      } else {
        imageNode = image;
      }

      return /*#__PURE__*/ react.createElement(
        'div',
        _extends(
          {
            className: classnames(
              prefixCls,
              ((_classNames = {}),
              _defineProperty(
                _classNames,
                ''.concat(prefixCls, '-normal'),
                image === simpleEmptyImg,
              ),
              _defineProperty(
                _classNames,
                ''.concat(prefixCls, '-rtl'),
                direction === 'rtl',
              ),
              _classNames),
              className,
            ),
          },
          restProps,
        ),
        /*#__PURE__*/ react.createElement(
          'div',
          {
            className: ''.concat(prefixCls, '-image'),
            style: imageStyle,
          },
          imageNode,
        ),
        des &&
          /*#__PURE__*/ react.createElement(
            'div',
            {
              className: ''.concat(prefixCls, '-description'),
            },
            des,
          ),
        children &&
          /*#__PURE__*/ react.createElement(
            'div',
            {
              className: ''.concat(prefixCls, '-footer'),
            },
            children,
          ),
      );
    },
  );
};

Empty$1.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty$1.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;

var renderEmpty = function renderEmpty(componentName) {
  return /*#__PURE__*/ react.createElement(
    ConfigConsumer,
    null,
    function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;
      var prefix = getPrefixCls('empty');

      switch (componentName) {
        case 'Table':
        case 'List':
          return /*#__PURE__*/ react.createElement(Empty$1, {
            image: Empty$1.PRESENTED_IMAGE_SIMPLE,
          });

        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
        case 'Mentions':
          return /*#__PURE__*/ react.createElement(Empty$1, {
            image: Empty$1.PRESENTED_IMAGE_SIMPLE,
            className: ''.concat(prefix, '-small'),
          });

        default:
          return /*#__PURE__*/ react.createElement(Empty$1, null);
      }
    },
  );
};

var defaultGetPrefixCls = function defaultGetPrefixCls(
  suffixCls,
  customizePrefixCls,
) {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? 'ant-'.concat(suffixCls) : 'ant';
};

var ConfigContext = /*#__PURE__*/ react.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  renderEmpty: renderEmpty,
});
var ConfigConsumer = ConfigContext.Consumer;

var isValidElement = react.isValidElement;
function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) return replacement;
  return /*#__PURE__*/ react.cloneElement(
    element,
    typeof props === 'function' ? props(element.props || {}) : props,
  );
}
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}

export {
  ConfigContext as C,
  LocaleReceiver as L,
  _inherits as _,
  _createSuper as a,
  _classCallCheck as b,
  _createClass as c,
  _slicedToArray as d,
  classnames as e,
  _defineProperty as f,
  _extends as g,
  _typeof as h,
  _objectSpread2 as i,
  _objectWithoutProperties as j,
  reactIs as k,
  ConfigConsumer as l,
  _assertThisInitialized as m,
  cloneElement as n,
  _toConsumableArray as o,
  _asyncToGenerator as p,
  regenerator as q,
  replaceElement as r,
  locale$2 as s,
  toArray as t,
  isValidElement as u,
  warningOnce as w,
};
