import {
  d as _slicedToArray,
  e as classnames,
  f as _defineProperty,
  _ as _inherits,
  a as _createSuper,
  b as _classCallCheck,
  c as _createClass,
  o as _toConsumableArray,
  t as toArray,
  C as ConfigContext,
  g as _extends,
  n as cloneElement,
} from '../../common/reactNode-2dfb2fa1.js';
import { r as react } from '../../common/index-57a74e37.js';
import { s as shallowequal } from '../../common/index-c2bf21cb.js';
import { C as CSSMotion, I as Icon } from '../../common/CSSMotion-9e0d6b93.js';
import { o as omit } from '../../common/omit-bd9123d1.js';
import { d as devWarning } from '../../common/devWarning-2e23fea1.js';
import '../../common/_commonjsHelpers-8c19dec8.js';
import '../../common/index-8dbeb7e4.js';

var PanelContent = react.forwardRef(function (props, ref) {
  var _classnames;

  var prefixCls = props.prefixCls,
    forceRender = props.forceRender,
    className = props.className,
    style = props.style,
    children = props.children,
    isActive = props.isActive,
    role = props.role;

  var _React$useState = react.useState(isActive || forceRender),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    rendered = _React$useState2[0],
    setRendered = _React$useState2[1];

  react.useEffect(
    function () {
      if (forceRender || isActive) {
        setRendered(true);
      }
    },
    [forceRender, isActive],
  );

  if (!rendered) {
    return null;
  }

  return react.createElement(
    'div',
    {
      ref: ref,
      className: classnames(
        ''.concat(prefixCls, '-content'),
        ((_classnames = {}),
        _defineProperty(
          _classnames,
          ''.concat(prefixCls, '-content-active'),
          isActive,
        ),
        _defineProperty(
          _classnames,
          ''.concat(prefixCls, '-content-inactive'),
          !isActive,
        ),
        _classnames),
        className,
      ),
      style: style,
      role: role,
    },
    react.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-content-box'),
      },
      children,
    ),
  );
});
PanelContent.displayName = 'PanelContent';

var CollapsePanel = /*#__PURE__*/ (function (_React$Component) {
  _inherits(CollapsePanel, _React$Component);

  var _super = _createSuper(CollapsePanel);

  function CollapsePanel() {
    var _this;

    _classCallCheck(this, CollapsePanel);

    _this = _super.apply(this, arguments);

    _this.handleItemClick = function () {
      var _this$props = _this.props,
        onItemClick = _this$props.onItemClick,
        panelKey = _this$props.panelKey;

      if (typeof onItemClick === 'function') {
        onItemClick(panelKey);
      }
    };

    _this.handleKeyPress = function (e) {
      if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
        _this.handleItemClick();
      }
    };

    return _this;
  }

  _createClass(CollapsePanel, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return !shallowequal(this.props, nextProps);
      },
    },
    {
      key: 'render',
      value: function render() {
        var _classNames,
          _classNames2,
          _this2 = this;

        var _this$props2 = this.props,
          className = _this$props2.className,
          id = _this$props2.id,
          style = _this$props2.style,
          prefixCls = _this$props2.prefixCls,
          header = _this$props2.header,
          headerClass = _this$props2.headerClass,
          children = _this$props2.children,
          isActive = _this$props2.isActive,
          showArrow = _this$props2.showArrow,
          destroyInactivePanel = _this$props2.destroyInactivePanel,
          accordion = _this$props2.accordion,
          forceRender = _this$props2.forceRender,
          openMotion = _this$props2.openMotion,
          expandIcon = _this$props2.expandIcon,
          extra = _this$props2.extra,
          collapsible = _this$props2.collapsible;
        var disabled = collapsible === 'disabled';
        var headerCls = classnames(
          ''.concat(prefixCls, '-header'),
          ((_classNames = {}),
          _defineProperty(_classNames, headerClass, headerClass),
          _defineProperty(
            _classNames,
            ''.concat(prefixCls, '-header-collapsible-only'),
            collapsible === 'header',
          ),
          _classNames),
        );
        var itemCls = classnames(
          ((_classNames2 = {}),
          _defineProperty(_classNames2, ''.concat(prefixCls, '-item'), true),
          _defineProperty(
            _classNames2,
            ''.concat(prefixCls, '-item-active'),
            isActive,
          ),
          _defineProperty(
            _classNames2,
            ''.concat(prefixCls, '-item-disabled'),
            disabled,
          ),
          _classNames2),
          className,
        );
        var icon = react.createElement('i', {
          className: 'arrow',
        });

        if (showArrow && typeof expandIcon === 'function') {
          icon = expandIcon(this.props);
        }

        return react.createElement(
          'div',
          {
            className: itemCls,
            style: style,
            id: id,
          },
          react.createElement(
            'div',
            {
              className: headerCls,
              onClick: function onClick() {
                return collapsible !== 'header' && _this2.handleItemClick();
              },
              role: accordion ? 'tab' : 'button',
              tabIndex: disabled ? -1 : 0,
              'aria-expanded': isActive,
              onKeyPress: this.handleKeyPress,
            },
            showArrow && icon,
            collapsible === 'header'
              ? react.createElement(
                  'span',
                  {
                    onClick: this.handleItemClick,
                    className: ''.concat(prefixCls, '-header-text'),
                  },
                  header,
                )
              : header,
            extra &&
              react.createElement(
                'div',
                {
                  className: ''.concat(prefixCls, '-extra'),
                },
                extra,
              ),
          ),
          react.createElement(
            CSSMotion,
            Object.assign(
              {
                visible: isActive,
                leavedClassName: ''.concat(prefixCls, '-content-hidden'),
              },
              openMotion,
              {
                forceRender: forceRender,
                removeOnLeave: destroyInactivePanel,
              },
            ),
            function (_ref, ref) {
              var motionClassName = _ref.className,
                motionStyle = _ref.style;
              return react.createElement(
                PanelContent,
                {
                  ref: ref,
                  prefixCls: prefixCls,
                  className: motionClassName,
                  style: motionStyle,
                  isActive: isActive,
                  forceRender: forceRender,
                  role: accordion ? 'tabpanel' : null,
                },
                children,
              );
            },
          ),
        );
      },
    },
  ]);

  return CollapsePanel;
})(react.Component);

CollapsePanel.defaultProps = {
  showArrow: true,
  isActive: false,
  onItemClick: function onItemClick() {},
  headerClass: '',
  forceRender: false,
};

function getActiveKeysArray(activeKey) {
  var currentActiveKey = activeKey;

  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }

  return currentActiveKey.map(function (key) {
    return String(key);
  });
}

var Collapse = /*#__PURE__*/ (function (_React$Component) {
  _inherits(Collapse, _React$Component);

  var _super = _createSuper(Collapse);

  function Collapse(props) {
    var _this;

    _classCallCheck(this, Collapse);

    _this = _super.call(this, props);

    _this.onClickItem = function (key) {
      var activeKey = _this.state.activeKey;

      if (_this.props.accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = _toConsumableArray(activeKey);
        var index = activeKey.indexOf(key);
        var isActive = index > -1;

        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }

      _this.setActiveKey(activeKey);
    };

    _this.getNewChild = function (child, index) {
      if (!child) return null;
      var activeKey = _this.state.activeKey;
      var _this$props = _this.props,
        prefixCls = _this$props.prefixCls,
        openMotion = _this$props.openMotion,
        accordion = _this$props.accordion,
        rootDestroyInactivePanel = _this$props.destroyInactivePanel,
        expandIcon = _this$props.expandIcon,
        collapsible = _this$props.collapsible; // If there is no key provide, use the panel order as default key

      var key = child.key || String(index);
      var _child$props = child.props,
        header = _child$props.header,
        headerClass = _child$props.headerClass,
        destroyInactivePanel = _child$props.destroyInactivePanel,
        childCollapsible = _child$props.collapsible;
      var isActive = false;

      if (accordion) {
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }

      var mergeCollapsible =
        childCollapsible !== null && childCollapsible !== void 0
          ? childCollapsible
          : collapsible;
      var props = {
        key: key,
        panelKey: key,
        header: header,
        headerClass: headerClass,
        isActive: isActive,
        prefixCls: prefixCls,
        destroyInactivePanel:
          destroyInactivePanel !== null && destroyInactivePanel !== void 0
            ? destroyInactivePanel
            : rootDestroyInactivePanel,
        openMotion: openMotion,
        accordion: accordion,
        children: child.props.children,
        onItemClick: mergeCollapsible === 'disabled' ? null : _this.onClickItem,
        expandIcon: expandIcon,
        collapsible: mergeCollapsible,
      }; // https://github.com/ant-design/ant-design/issues/20479

      if (typeof child.type === 'string') {
        return child;
      }

      return react.cloneElement(child, props);
    };

    _this.getItems = function () {
      var children = _this.props.children;
      return toArray(children).map(_this.getNewChild);
    };

    _this.setActiveKey = function (activeKey) {
      if (!('activeKey' in _this.props)) {
        _this.setState({
          activeKey: activeKey,
        });
      }

      _this.props.onChange(_this.props.accordion ? activeKey[0] : activeKey);
    };

    var activeKey = props.activeKey,
      defaultActiveKey = props.defaultActiveKey;
    var currentActiveKey = defaultActiveKey;

    if ('activeKey' in props) {
      currentActiveKey = activeKey;
    }

    _this.state = {
      activeKey: getActiveKeysArray(currentActiveKey),
    };
    return _this;
  }

  _createClass(
    Collapse,
    [
      {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
          return (
            !shallowequal(this.props, nextProps) ||
            !shallowequal(this.state, nextState)
          );
        },
      },
      {
        key: 'render',
        value: function render() {
          var _classNames;

          var _this$props2 = this.props,
            prefixCls = _this$props2.prefixCls,
            className = _this$props2.className,
            style = _this$props2.style,
            accordion = _this$props2.accordion;
          var collapseClassName = classnames(
            ((_classNames = {}),
            _defineProperty(_classNames, prefixCls, true),
            _defineProperty(_classNames, className, !!className),
            _classNames),
          );
          return react.createElement(
            'div',
            {
              className: collapseClassName,
              style: style,
              role: accordion ? 'tablist' : null,
            },
            this.getItems(),
          );
        },
      },
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps) {
          var newState = {};

          if ('activeKey' in nextProps) {
            newState.activeKey = getActiveKeysArray(nextProps.activeKey);
          }

          return newState;
        },
      },
    ],
  );

  return Collapse;
})(react.Component);

Collapse.defaultProps = {
  prefixCls: 'rc-collapse',
  onChange: function onChange() {},
  accordion: false,
  destroyInactivePanel: false,
};
Collapse.Panel = CollapsePanel;

// This icon file is generated automatically.
var RightOutlined = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
        },
      },
    ],
  },
  name: 'right',
  theme: 'outlined',
};

// GENERATE BY ./scripts/generate.ts

var RightOutlined$1 = function RightOutlined$1(props, ref) {
  return /*#__PURE__*/ react.createElement(
    Icon,
    Object.assign({}, props, {
      ref: ref,
      icon: RightOutlined,
    }),
  );
};

RightOutlined$1.displayName = 'RightOutlined';
var RightOutlined$2 = /*#__PURE__*/ react.forwardRef(RightOutlined$1);

var CollapsePanel$1 = function CollapsePanel(props) {
  devWarning(
    !('disabled' in props),
    'Collapse.Panel',
    '`disabled` is deprecated. Please use `collapsible="disabled"` instead.',
  );

  var _React$useContext = react.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;

  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$showArrow = props.showArrow,
    showArrow = _props$showArrow === void 0 ? true : _props$showArrow;
  var prefixCls = getPrefixCls('collapse', customizePrefixCls);
  var collapsePanelClassName = classnames(
    _defineProperty({}, ''.concat(prefixCls, '-no-arrow'), !showArrow),
    className,
  );
  return /*#__PURE__*/ react.createElement(
    Collapse.Panel,
    _extends({}, props, {
      prefixCls: prefixCls,
      className: collapsePanelClassName,
    }),
  );
};

// ================== Collapse Motion ==================
var getCollapsedHeight = function getCollapsedHeight() {
  return {
    height: 0,
    opacity: 0,
  };
};

var getRealHeight = function getRealHeight(node) {
  return {
    height: node.scrollHeight,
    opacity: 1,
  };
};

var getCurrentHeight = function getCurrentHeight(node) {
  return {
    height: node.offsetHeight,
  };
};

var skipOpacityTransition = function skipOpacityTransition(_, event) {
  return event.propertyName === 'height';
};

var collapseMotion = {
  motionName: 'ant-motion-collapse',
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500,
};

var Collapse$1 = function Collapse$1(props) {
  var _classNames;

  var _React$useContext = react.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;

  var customizePrefixCls = props.prefixCls,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? true : _props$bordered,
    ghost = props.ghost;
  var prefixCls = getPrefixCls('collapse', customizePrefixCls);

  var getIconPosition = function getIconPosition() {
    var expandIconPosition = props.expandIconPosition;

    if (expandIconPosition !== undefined) {
      return expandIconPosition;
    }

    return direction === 'rtl' ? 'right' : 'left';
  };

  var renderExpandIcon = function renderExpandIcon() {
    var panelProps =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var expandIcon = props.expandIcon;
    var icon = expandIcon
      ? expandIcon(panelProps)
      : /*#__PURE__*/ react.createElement(RightOutlined$2, {
          rotate: panelProps.isActive ? 90 : undefined,
        });
    return cloneElement(icon, function () {
      return {
        className: classnames(
          icon.props.className,
          ''.concat(prefixCls, '-arrow'),
        ),
      };
    });
  };

  var iconPosition = getIconPosition();
  var collapseClassName = classnames(
    ((_classNames = {}),
    _defineProperty(
      _classNames,
      ''.concat(prefixCls, '-borderless'),
      !bordered,
    ),
    _defineProperty(
      _classNames,
      ''.concat(prefixCls, '-icon-position-').concat(iconPosition),
      true,
    ),
    _defineProperty(
      _classNames,
      ''.concat(prefixCls, '-rtl'),
      direction === 'rtl',
    ),
    _defineProperty(_classNames, ''.concat(prefixCls, '-ghost'), !!ghost),
    _classNames),
    className,
  );

  var openMotion = _extends(_extends({}, collapseMotion), {
    motionAppear: false,
    leavedClassName: ''.concat(prefixCls, '-content-hidden'),
  });

  var getItems = function getItems() {
    var children = props.children;
    return toArray(children).map(function (child, index) {
      var _a;

      if ((_a = child.props) === null || _a === void 0 ? void 0 : _a.disabled) {
        var key = child.key || String(index);
        var _child$props = child.props,
          disabled = _child$props.disabled,
          collapsible = _child$props.collapsible;

        var childProps = _extends(
          _extends({}, omit(child.props, ['disabled'])),
          {
            key: key,
            collapsible:
              collapsible !== null && collapsible !== void 0
                ? collapsible
                : disabled
                ? 'disabled'
                : undefined,
          },
        );

        return cloneElement(child, childProps);
      }

      return child;
    });
  };

  return /*#__PURE__*/ react.createElement(
    Collapse,
    _extends(
      {
        openMotion: openMotion,
      },
      props,
      {
        bordered: bordered,
        expandIcon: renderExpandIcon,
        prefixCls: prefixCls,
        className: collapseClassName,
      },
    ),
    getItems(),
  );
};

Collapse$1.Panel = CollapsePanel$1;

export default Collapse$1;
