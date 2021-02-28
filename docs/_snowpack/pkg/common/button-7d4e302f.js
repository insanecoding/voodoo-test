import {
  b as _classCallCheck,
  l as ConfigConsumer,
  e as classnames,
  f as _defineProperty,
  g as _extends,
  _ as _inherits,
  a as _createSuper,
  m as _assertThisInitialized,
  n as cloneElement,
  c as _createClass,
  C as ConfigContext,
  d as _slicedToArray,
  h as _typeof,
} from './reactNode-2dfb2fa1.js';
import { r as react } from './index-57a74e37.js';
import { o as omit } from './omit-bd9123d1.js';
import {
  I as Icon,
  w as wrapperRaf$1,
  s as supportRef,
  c as composeRef,
  C as CSSMotion,
} from './CSSMotion-9e0d6b93.js';
import { t as tuple } from './type-d6a9954c.js';
import { d as devWarning } from './devWarning-2e23fea1.js';

var SizeContext = /*#__PURE__*/ react.createContext(undefined);

// This icon file is generated automatically.
var LoadingOutlined = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z',
        },
      },
    ],
  },
  name: 'loading',
  theme: 'outlined',
};

// GENERATE BY ./scripts/generate.ts

var LoadingOutlined$1 = function LoadingOutlined$1(props, ref) {
  return /*#__PURE__*/ react.createElement(
    Icon,
    Object.assign({}, props, {
      ref: ref,
      icon: LoadingOutlined,
    }),
  );
};

LoadingOutlined$1.displayName = 'LoadingOutlined';
var LoadingOutlined$2 = /*#__PURE__*/ react.forwardRef(LoadingOutlined$1);

var UnreachableException = function UnreachableException(value) {
  _classCallCheck(this, UnreachableException);

  return new Error('unreachable case: '.concat(JSON.stringify(value)));
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

var ButtonGroup = function ButtonGroup(props) {
  return /*#__PURE__*/ react.createElement(
    ConfigConsumer,
    null,
    function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

      var customizePrefixCls = props.prefixCls,
        size = props.size,
        className = props.className,
        others = __rest(props, ['prefixCls', 'size', 'className']);

      var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
      // small => sm

      var sizeCls = '';

      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;

        case 'small':
          sizeCls = 'sm';
          break;

        case 'middle':
        case undefined:
          break;

        default:
          // eslint-disable-next-line no-console
          console.warn(new UnreachableException(size));
      }

      var classes = classnames(
        prefixCls,
        ((_classNames = {}),
        _defineProperty(
          _classNames,
          ''.concat(prefixCls, '-').concat(sizeCls),
          sizeCls,
        ),
        _defineProperty(
          _classNames,
          ''.concat(prefixCls, '-rtl'),
          direction === 'rtl',
        ),
        _classNames),
        className,
      );
      return /*#__PURE__*/ react.createElement(
        'div',
        _extends({}, others, {
          className: classes,
        }),
      );
    },
  );
};

var id = 0;
var ids = {}; // Support call raf with delay specified frame

function wrapperRaf(callback) {
  var delayFrames =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;

  function internalCallback() {
    restFrames -= 1;

    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = wrapperRaf$1(internalCallback);
    }
  }

  ids[myId] = wrapperRaf$1(internalCallback);
  return myId;
}

wrapperRaf.cancel = function cancel(pid) {
  if (pid === undefined) return;
  wrapperRaf$1.cancel(ids[pid]);
  delete ids[pid];
};

wrapperRaf.ids = ids; // export this for test usage

var styleForPseudo; // Where el is the DOM element you'd like to test for visibility

function isHidden(element) {
  return !element || element.offsetParent === null || element.hidden;
}

function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);

  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }

  return true;
}

var Wave = /*#__PURE__*/ (function (_React$Component) {
  _inherits(Wave, _React$Component);

  var _super = _createSuper(Wave);

  function Wave() {
    var _this;

    _classCallCheck(this, Wave);

    _this = _super.apply(this, arguments);
    _this.containerRef = /*#__PURE__*/ react.createRef();
    _this.animationStart = false;
    _this.destroyed = false;

    _this.onClick = function (node, waveColor) {
      if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }

      var insertExtraNode = _this.props.insertExtraNode;
      _this.extraNode = document.createElement('div');

      var _assertThisInitialize = _assertThisInitialized(_this),
        extraNode = _assertThisInitialize.extraNode;

      var getPrefixCls = _this.context.getPrefixCls;
      extraNode.className = ''.concat(
        getPrefixCls(''),
        '-click-animating-node',
      );

      var attributeName = _this.getAttributeName();

      node.setAttribute(attributeName, 'true'); // Not white or transparent or grey

      styleForPseudo = styleForPseudo || document.createElement('style');

      if (
        waveColor &&
        waveColor !== '#ffffff' &&
        waveColor !== 'rgb(255, 255, 255)' &&
        isNotGrey(waveColor) &&
        !/rgba\((?:\d*, ){3}0\)/.test(waveColor) && // any transparent rgba color
        waveColor !== 'transparent'
      ) {
        // Add nonce if CSP exist
        if (_this.csp && _this.csp.nonce) {
          styleForPseudo.nonce = _this.csp.nonce;
        }

        extraNode.style.borderColor = waveColor;
        styleForPseudo.innerHTML = '\n      ['
          .concat(
            getPrefixCls(''),
            "-click-animating-without-extra-node='true']::after, .",
          )
          .concat(
            getPrefixCls(''),
            '-click-animating-node {\n        --antd-wave-shadow-color: ',
          )
          .concat(waveColor, ';\n      }');

        if (!node.ownerDocument.body.contains(styleForPseudo)) {
          node.ownerDocument.body.appendChild(styleForPseudo);
        }
      }

      if (insertExtraNode) {
        node.appendChild(extraNode);
      }

      ['transition', 'animation'].forEach(function (name) {
        node.addEventListener(
          ''.concat(name, 'start'),
          _this.onTransitionStart,
        );
        node.addEventListener(''.concat(name, 'end'), _this.onTransitionEnd);
      });
    };

    _this.onTransitionStart = function (e) {
      if (_this.destroyed) {
        return;
      }

      var node = _this.containerRef.current;

      if (!e || e.target !== node || _this.animationStart) {
        return;
      }

      _this.resetEffect(node);
    };

    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }

      _this.resetEffect(e.target);
    };

    _this.bindAnimationEvent = function (node) {
      if (
        !node ||
        !node.getAttribute ||
        node.getAttribute('disabled') ||
        node.className.indexOf('disabled') >= 0
      ) {
        return;
      }

      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }

        _this.resetEffect(node); // Get wave color from target

        var waveColor =
          getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
          getComputedStyle(node).getPropertyValue('border-color') ||
          getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);
        wrapperRaf.cancel(_this.animationStartId);
        _this.animationStart = true; // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.

        _this.animationStartId = wrapperRaf(function () {
          _this.animationStart = false;
        }, 10);
      };

      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        },
      };
    };

    _this.renderWave = function (_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      if (!(/*#__PURE__*/ react.isValidElement(children))) return children;
      var ref = _this.containerRef;

      if (supportRef(children)) {
        ref = composeRef(children.ref, _this.containerRef);
      }

      return cloneElement(children, {
        ref: ref,
      });
    };

    return _this;
  }

  _createClass(Wave, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var node = this.containerRef.current;

        if (!node || node.nodeType !== 1) {
          return;
        }

        this.instance = this.bindAnimationEvent(node);
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.instance) {
          this.instance.cancel();
        }

        if (this.clickWaveTimeoutId) {
          clearTimeout(this.clickWaveTimeoutId);
        }

        this.destroyed = true;
      },
    },
    {
      key: 'getAttributeName',
      value: function getAttributeName() {
        var getPrefixCls = this.context.getPrefixCls;
        var insertExtraNode = this.props.insertExtraNode;
        return insertExtraNode
          ? ''.concat(getPrefixCls(''), '-click-animating')
          : ''.concat(getPrefixCls(''), '-click-animating-without-extra-node');
      },
    },
    {
      key: 'resetEffect',
      value: function resetEffect(node) {
        var _this2 = this;

        if (!node || node === this.extraNode || !(node instanceof Element)) {
          return;
        }

        var insertExtraNode = this.props.insertExtraNode;
        var attributeName = this.getAttributeName();
        node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466

        if (styleForPseudo) {
          styleForPseudo.innerHTML = '';
        }

        if (
          insertExtraNode &&
          this.extraNode &&
          node.contains(this.extraNode)
        ) {
          node.removeChild(this.extraNode);
        }

        ['transition', 'animation'].forEach(function (name) {
          node.removeEventListener(
            ''.concat(name, 'start'),
            _this2.onTransitionStart,
          );
          node.removeEventListener(
            ''.concat(name, 'end'),
            _this2.onTransitionEnd,
          );
        });
      },
    },
    {
      key: 'render',
      value: function render() {
        return /*#__PURE__*/ react.createElement(
          ConfigConsumer,
          null,
          this.renderWave,
        );
      },
    },
  ]);

  return Wave;
})(react.Component);
Wave.contextType = ConfigContext;

var getCollapsedWidth = function getCollapsedWidth() {
  return {
    width: 0,
    opacity: 0,
    transform: 'scale(0)',
  };
};

var getRealWidth = function getRealWidth(node) {
  return {
    width: node.scrollWidth,
    opacity: 1,
    transform: 'scale(1)',
  };
};

var LoadingIcon = function LoadingIcon(_ref) {
  var prefixCls = _ref.prefixCls,
    loading = _ref.loading,
    existIcon = _ref.existIcon;
  var visible = !!loading;

  if (existIcon) {
    return /*#__PURE__*/ react.createElement(
      'span',
      {
        className: ''.concat(prefixCls, '-loading-icon'),
      },
      /*#__PURE__*/ react.createElement(LoadingOutlined$2, null),
    );
  }

  return /*#__PURE__*/ react.createElement(
    CSSMotion,
    {
      visible: visible, // We do not really use this motionName
      motionName: ''.concat(prefixCls, '-loading-icon-motion'),
      removeOnLeave: true,
      onAppearStart: getCollapsedWidth,
      onAppearActive: getRealWidth,
      onEnterStart: getCollapsedWidth,
      onEnterActive: getRealWidth,
      onLeaveStart: getRealWidth,
      onLeaveActive: getCollapsedWidth,
    },
    function (_ref2, ref) {
      var className = _ref2.className,
        style = _ref2.style;
      return /*#__PURE__*/ react.createElement(
        'span',
        {
          className: ''.concat(prefixCls, '-loading-icon'),
          style: style,
          ref: ref,
        },
        /*#__PURE__*/ react.createElement(LoadingOutlined$2, {
          className: className,
        }),
      );
    },
  );
};

var __rest$1 =
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
var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
}

function isUnborderedButtonType(type) {
  return type === 'text' || type === 'link';
} // Insert one space between two chinese characters automatically.

function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (
    typeof child !== 'string' &&
    typeof child !== 'number' &&
    isString(child.type) &&
    isTwoCNChar(child.props.children)
  ) {
    return cloneElement(child, {
      children: child.props.children.split('').join(SPACE),
    });
  }

  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE);
    }

    return /*#__PURE__*/ react.createElement('span', null, child);
  }

  return child;
}

function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  react.Children.forEach(children, function (child) {
    var type = _typeof(child);

    var isCurrentChildPure = type === 'string' || type === 'number';

    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = ''.concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  }); // Pass to React.Children.map to auto fill key

  return react.Children.map(childList, function (child) {
    return insertSpace(child, needInserted);
  });
}

tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');
tuple('circle', 'round');
tuple('submit', 'button', 'reset');

var InternalButton = function InternalButton(props, ref) {
  var _classNames;

  var _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    customizePrefixCls = props.prefixCls,
    type = props.type,
    danger = props.danger,
    shape = props.shape,
    customizeSize = props.size,
    className = props.className,
    children = props.children,
    icon = props.icon,
    _props$ghost = props.ghost,
    ghost = _props$ghost === void 0 ? false : _props$ghost,
    _props$block = props.block,
    block = _props$block === void 0 ? false : _props$block,
    _props$htmlType = props.htmlType,
    htmlType = _props$htmlType === void 0 ? 'button' : _props$htmlType,
    rest = __rest$1(props, [
      'loading',
      'prefixCls',
      'type',
      'danger',
      'shape',
      'size',
      'className',
      'children',
      'icon',
      'ghost',
      'block',
      'htmlType',
    ]);

  var size = react.useContext(SizeContext);

  var _React$useState = react.useState(!!loading),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    innerLoading = _React$useState2[0],
    setLoading = _React$useState2[1];

  var _React$useState3 = react.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    hasTwoCNChar = _React$useState4[0],
    setHasTwoCNChar = _React$useState4[1];

  var _React$useContext = react.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    autoInsertSpaceInButton = _React$useContext.autoInsertSpaceInButton,
    direction = _React$useContext.direction;

  var buttonRef = ref || /*#__PURE__*/ react.createRef();
  var delayTimeoutRef = react.useRef();

  var isNeedInserted = function isNeedInserted() {
    return (
      react.Children.count(children) === 1 &&
      !icon &&
      !isUnborderedButtonType(type)
    );
  };

  var fixTwoCNChar = function fixTwoCNChar() {
    // Fix for HOC usage like <FormatMessage />
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }

    var buttonText = buttonRef.current.textContent;

    if (isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  }; // =============== Update Loading ===============

  var loadingOrDelay;

  if (_typeof(loading) === 'object' && loading.delay) {
    loadingOrDelay = loading.delay || true;
  } else {
    loadingOrDelay = !!loading;
  }

  react.useEffect(
    function () {
      clearTimeout(delayTimeoutRef.current);

      if (typeof loadingOrDelay === 'number') {
        delayTimeoutRef.current = window.setTimeout(function () {
          setLoading(loadingOrDelay);
        }, loadingOrDelay);
      } else {
        setLoading(loadingOrDelay);
      }
    },
    [loadingOrDelay],
  );
  react.useEffect(fixTwoCNChar, [buttonRef]);

  var handleClick = function handleClick(e) {
    var onClick = props.onClick;

    if (innerLoading) {
      return;
    }

    if (onClick) {
      onClick(e);
    }
  };

  devWarning(
    !(typeof icon === 'string' && icon.length > 2),
    'Button',
    '`icon` is using ReactNode instead of string naming in v4. Please check `'.concat(
      icon,
      '` at https://ant.design/components/icon',
    ),
  );
  devWarning(
    !(ghost && isUnborderedButtonType(type)),
    'Button',
    "`link` or `text` button can't be a `ghost` button.",
  );
  var prefixCls = getPrefixCls('btn', customizePrefixCls);
  var autoInsertSpace = autoInsertSpaceInButton !== false; // large => lg
  // small => sm

  var sizeCls = '';

  switch (customizeSize || size) {
    case 'large':
      sizeCls = 'lg';
      break;

    case 'small':
      sizeCls = 'sm';
      break;
  }

  var iconType = innerLoading ? 'loading' : icon;
  var classes = classnames(
    prefixCls,
    ((_classNames = {}),
    _defineProperty(_classNames, ''.concat(prefixCls, '-').concat(type), type),
    _defineProperty(
      _classNames,
      ''.concat(prefixCls, '-').concat(shape),
      shape,
    ),
    _defineProperty(
      _classNames,
      ''.concat(prefixCls, '-').concat(sizeCls),
      sizeCls,
    ),
    _defineProperty(
      _classNames,
      ''.concat(prefixCls, '-icon-only'),
      !children && children !== 0 && iconType,
    ),
    _defineProperty(
      _classNames,
      ''.concat(prefixCls, '-background-ghost'),
      ghost && !isUnborderedButtonType(type),
    ),
    _defineProperty(
      _classNames,
      ''.concat(prefixCls, '-loading'),
      innerLoading,
    ),
    _defineProperty(
      _classNames,
      ''.concat(prefixCls, '-two-chinese-chars'),
      hasTwoCNChar && autoInsertSpace,
    ),
    _defineProperty(_classNames, ''.concat(prefixCls, '-block'), block),
    _defineProperty(_classNames, ''.concat(prefixCls, '-dangerous'), !!danger),
    _defineProperty(
      _classNames,
      ''.concat(prefixCls, '-rtl'),
      direction === 'rtl',
    ),
    _classNames),
    className,
  );
  var iconNode =
    icon && !innerLoading
      ? icon
      : /*#__PURE__*/ react.createElement(LoadingIcon, {
          existIcon: !!icon,
          prefixCls: prefixCls,
          loading: !!innerLoading,
        });
  var kids =
    children || children === 0
      ? spaceChildren(children, isNeedInserted() && autoInsertSpace)
      : null;
  var linkButtonRestProps = omit(rest, ['navigate']);

  if (linkButtonRestProps.href !== undefined) {
    return /*#__PURE__*/ react.createElement(
      'a',
      _extends({}, linkButtonRestProps, {
        className: classes,
        onClick: handleClick,
        ref: buttonRef,
      }),
      iconNode,
      kids,
    );
  }

  var buttonNode = /*#__PURE__*/ react.createElement(
    'button',
    _extends({}, rest, {
      type: htmlType,
      className: classes,
      onClick: handleClick,
      ref: buttonRef,
    }),
    iconNode,
    kids,
  );

  if (isUnborderedButtonType(type)) {
    return buttonNode;
  }

  return /*#__PURE__*/ react.createElement(Wave, null, buttonNode);
};

var Button = /*#__PURE__*/ react.forwardRef(InternalButton);
Button.displayName = 'Button';
Button.Group = ButtonGroup;
Button.__ANT_BUTTON = true;

export { Button as B, SizeContext as S, Wave as W };
