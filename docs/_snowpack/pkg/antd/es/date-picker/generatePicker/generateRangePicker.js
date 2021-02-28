import {
  d as _slicedToArray,
  g as _extends,
  e as classnames,
  i as _objectSpread2$1,
  f as _defineProperty$1,
  o as _toConsumableArray,
  h as _typeof$1,
  w as warningOnce,
  p as _asyncToGenerator,
  q as regenerator,
  j as _objectWithoutProperties,
  _ as _inherits,
  a as _createSuper,
  b as _classCallCheck,
  m as _assertThisInitialized,
  c as _createClass,
  C as ConfigContext,
  s as locale,
  L as LocaleReceiver,
} from '../../../../common/reactNode-2dfb2fa1.js';
import { r as react } from '../../../../common/index-57a74e37.js';
import {
  I as Icon,
  w as wrapperRaf,
  a as canUseDom,
  C as CSSMotion,
  c as composeRef,
  f as findDOMNode,
  s as supportRef,
} from '../../../../common/CSSMotion-9e0d6b93.js';
import {
  C as CloseOutlined,
  a as CloseCircleFilled,
} from '../../../../common/CloseCircleFilled-0ba6a98c.js';
import { r as reactDom } from '../../../../common/index-8dbeb7e4.js';
import { s as shallowequal } from '../../../../common/index-c2bf21cb.js';
import {
  B as Button,
  W as Wave,
  S as SizeContext,
} from '../../../../common/button-7d4e302f.js';
import { o as omit } from '../../../../common/omit-bd9123d1.js';
import { t as tuple$1 } from '../../../../common/type-d6a9954c.js';
import '../../../../common/_commonjsHelpers-8c19dec8.js';
import '../../../../common/devWarning-2e23fea1.js';

function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = react.useRef({});

  if (
    !('value' in cacheRef.current) ||
    shouldUpdate(cacheRef.current.condition, condition)
  ) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }

  return cacheRef.current.value;
}

// This icon file is generated automatically.
var CalendarOutlined = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z',
        },
      },
    ],
  },
  name: 'calendar',
  theme: 'outlined',
};

// GENERATE BY ./scripts/generate.ts

var CalendarOutlined$1 = function CalendarOutlined$1(props, ref) {
  return /*#__PURE__*/ react.createElement(
    Icon,
    Object.assign({}, props, {
      ref: ref,
      icon: CalendarOutlined,
    }),
  );
};

CalendarOutlined$1.displayName = 'CalendarOutlined';
var CalendarOutlined$2 = /*#__PURE__*/ react.forwardRef(CalendarOutlined$1);

// This icon file is generated automatically.
var ClockCircleOutlined = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '64 64 896 896', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d:
            'M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z',
        },
      },
    ],
  },
  name: 'clock-circle',
  theme: 'outlined',
};

// GENERATE BY ./scripts/generate.ts

var ClockCircleOutlined$1 = function ClockCircleOutlined$1(props, ref) {
  return /*#__PURE__*/ react.createElement(
    Icon,
    Object.assign({}, props, {
      ref: ref,
      icon: ClockCircleOutlined,
    }),
  );
};

ClockCircleOutlined$1.displayName = 'ClockCircleOutlined';
var ClockCircleOutlined$2 = /*#__PURE__*/ react.forwardRef(
  ClockCircleOutlined$1,
);

// This icon file is generated automatically.
var SwapRightOutlined = {
  icon: {
    tag: 'svg',
    attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
    children: [
      {
        tag: 'path',
        attrs: {
          d:
            'M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z',
        },
      },
    ],
  },
  name: 'swap-right',
  theme: 'outlined',
};

// GENERATE BY ./scripts/generate.ts

var SwapRightOutlined$1 = function SwapRightOutlined$1(props, ref) {
  return /*#__PURE__*/ react.createElement(
    Icon,
    Object.assign({}, props, {
      ref: ref,
      icon: SwapRightOutlined,
    }),
  );
};

SwapRightOutlined$1.displayName = 'SwapRightOutlined';
var SwapRightOutlined$2 = /*#__PURE__*/ react.forwardRef(SwapRightOutlined$1);

function useControlledState(defaultStateValue, option) {
  var _ref = option || {},
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    postState = _ref.postState;

  var _React$useState = react.useState(function () {
      if (value !== undefined) {
        return value;
      }

      if (defaultValue !== undefined) {
        return typeof defaultValue === 'function'
          ? defaultValue()
          : defaultValue;
      }

      return typeof defaultStateValue === 'function'
        ? defaultStateValue()
        : defaultStateValue;
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    innerValue = _React$useState2[0],
    setInnerValue = _React$useState2[1];

  var mergedValue = value !== undefined ? value : innerValue;

  if (postState) {
    mergedValue = postState(mergedValue);
  }

  function triggerChange(newValue) {
    setInnerValue(newValue);

    if (mergedValue !== newValue && onChange) {
      onChange(newValue, mergedValue);
    }
  } // Effect of reset value to `undefined`

  var firstRenderRef = react.useRef(true);
  react.useEffect(
    function () {
      if (firstRenderRef.current) {
        firstRenderRef.current = false;
        return;
      }

      if (value === undefined) {
        setInnerValue(value);
      }
    },
    [value],
  );
  return [mergedValue, triggerChange];
}

/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (
      (e.altKey && !e.ctrlKey) ||
      e.metaKey || // Function keys don't generate text
      (keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12)
    ) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.

    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.

    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  },
};

var PanelContext = /*#__PURE__*/ react.createContext({});

var HIDDEN_STYLE = {
  visibility: 'hidden',
};

function Header(_ref) {
  var prefixCls = _ref.prefixCls,
    _ref$prevIcon = _ref.prevIcon,
    prevIcon = _ref$prevIcon === void 0 ? '\u2039' : _ref$prevIcon,
    _ref$nextIcon = _ref.nextIcon,
    nextIcon = _ref$nextIcon === void 0 ? '\u203A' : _ref$nextIcon,
    _ref$superPrevIcon = _ref.superPrevIcon,
    superPrevIcon = _ref$superPrevIcon === void 0 ? '\xAB' : _ref$superPrevIcon,
    _ref$superNextIcon = _ref.superNextIcon,
    superNextIcon = _ref$superNextIcon === void 0 ? '\xBB' : _ref$superNextIcon,
    onSuperPrev = _ref.onSuperPrev,
    onSuperNext = _ref.onSuperNext,
    onPrev = _ref.onPrev,
    onNext = _ref.onNext,
    children = _ref.children;

  var _React$useContext = react.useContext(PanelContext),
    hideNextBtn = _React$useContext.hideNextBtn,
    hidePrevBtn = _React$useContext.hidePrevBtn;

  return /*#__PURE__*/ react.createElement(
    'div',
    {
      className: prefixCls,
    },
    onSuperPrev &&
      /*#__PURE__*/ react.createElement(
        'button',
        {
          type: 'button',
          onClick: onSuperPrev,
          tabIndex: -1,
          className: ''.concat(prefixCls, '-super-prev-btn'),
          style: hidePrevBtn ? HIDDEN_STYLE : {},
        },
        superPrevIcon,
      ),
    onPrev &&
      /*#__PURE__*/ react.createElement(
        'button',
        {
          type: 'button',
          onClick: onPrev,
          tabIndex: -1,
          className: ''.concat(prefixCls, '-prev-btn'),
          style: hidePrevBtn ? HIDDEN_STYLE : {},
        },
        prevIcon,
      ),
    /*#__PURE__*/ react.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-view'),
      },
      children,
    ),
    onNext &&
      /*#__PURE__*/ react.createElement(
        'button',
        {
          type: 'button',
          onClick: onNext,
          tabIndex: -1,
          className: ''.concat(prefixCls, '-next-btn'),
          style: hideNextBtn ? HIDDEN_STYLE : {},
        },
        nextIcon,
      ),
    onSuperNext &&
      /*#__PURE__*/ react.createElement(
        'button',
        {
          type: 'button',
          onClick: onSuperNext,
          tabIndex: -1,
          className: ''.concat(prefixCls, '-super-next-btn'),
          style: hideNextBtn ? HIDDEN_STYLE : {},
        },
        superNextIcon,
      ),
  );
}

function DecadeHeader(props) {
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    viewDate = props.viewDate,
    onPrevDecades = props.onPrevDecades,
    onNextDecades = props.onNextDecades;

  var _React$useContext = react.useContext(PanelContext),
    hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = ''.concat(prefixCls, '-header');
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear =
    Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  var endYear = startYear + DECADE_DISTANCE_COUNT - 1;
  return /*#__PURE__*/ react.createElement(
    Header,
    _extends({}, props, {
      prefixCls: headerPrefixCls,
      onSuperPrev: onPrevDecades,
      onSuperNext: onNextDecades,
    }),
    startYear,
    '-',
    endYear,
  );
}

function setTime(generateConfig, date, hour, minute, second) {
  var nextTime = generateConfig.setHour(date, hour);
  nextTime = generateConfig.setMinute(nextTime, minute);
  nextTime = generateConfig.setSecond(nextTime, second);
  return nextTime;
}
function getLowerBoundTime(
  hour,
  minute,
  second,
  hourStep,
  minuteStep,
  secondStep,
) {
  var lowerBoundHour = Math.floor(hour / hourStep) * hourStep;

  if (lowerBoundHour < hour) {
    return [lowerBoundHour, 60 - minuteStep, 60 - secondStep];
  }

  var lowerBoundMinute = Math.floor(minute / minuteStep) * minuteStep;

  if (lowerBoundMinute < minute) {
    return [lowerBoundHour, lowerBoundMinute, 60 - secondStep];
  }

  var lowerBoundSecond = Math.floor(second / secondStep) * secondStep;
  return [lowerBoundHour, lowerBoundMinute, lowerBoundSecond];
}
function getLastDay(generateConfig, date) {
  var year = generateConfig.getYear(date);
  var month = generateConfig.getMonth(date) + 1;
  var endDate = generateConfig.getEndDate(
    generateConfig.getFixedDate(''.concat(year, '-').concat(month, '-01')),
  );
  var lastDay = generateConfig.getDate(endDate);
  var monthShow = month < 10 ? '0'.concat(month) : ''.concat(month);
  return ''.concat(year, '-').concat(monthShow, '-').concat(lastDay);
}

function PanelBody(_ref) {
  var prefixCls = _ref.prefixCls,
    disabledDate = _ref.disabledDate,
    onSelect = _ref.onSelect,
    picker = _ref.picker,
    rowNum = _ref.rowNum,
    colNum = _ref.colNum,
    prefixColumn = _ref.prefixColumn,
    rowClassName = _ref.rowClassName,
    baseDate = _ref.baseDate,
    getCellClassName = _ref.getCellClassName,
    getCellText = _ref.getCellText,
    getCellNode = _ref.getCellNode,
    getCellDate = _ref.getCellDate,
    generateConfig = _ref.generateConfig,
    titleCell = _ref.titleCell,
    headerCells = _ref.headerCells;

  var _React$useContext = react.useContext(PanelContext),
    onDateMouseEnter = _React$useContext.onDateMouseEnter,
    onDateMouseLeave = _React$useContext.onDateMouseLeave,
    mode = _React$useContext.mode;

  var cellPrefixCls = ''.concat(prefixCls, '-cell'); // =============================== Body ===============================

  var rows = [];

  for (var i = 0; i < rowNum; i += 1) {
    var row = [];
    var rowStartDate = void 0;

    var _loop = function _loop(j) {
      var _objectSpread2;

      var offset = i * colNum + j;
      var currentDate = getCellDate(baseDate, offset);
      var disabled = getCellDateDisabled({
        cellDate: currentDate,
        mode: mode,
        disabledDate: disabledDate,
        generateConfig: generateConfig,
      });

      if (j === 0) {
        rowStartDate = currentDate;

        if (prefixColumn) {
          row.push(prefixColumn(rowStartDate));
        }
      }

      var title = titleCell && titleCell(currentDate);
      row.push(
        /*#__PURE__*/ react.createElement(
          'td',
          {
            key: j,
            title: title,
            className: classnames(
              cellPrefixCls,
              _objectSpread2$1(
                ((_objectSpread2 = {}),
                _defineProperty$1(
                  _objectSpread2,
                  ''.concat(cellPrefixCls, '-disabled'),
                  disabled,
                ),
                _defineProperty$1(
                  _objectSpread2,
                  ''.concat(cellPrefixCls, '-start'),
                  getCellText(currentDate) === 1 ||
                    (picker === 'year' && Number(title) % 10 === 0),
                ),
                _defineProperty$1(
                  _objectSpread2,
                  ''.concat(cellPrefixCls, '-end'),
                  title === getLastDay(generateConfig, currentDate) ||
                    (picker === 'year' && Number(title) % 10 === 9),
                ),
                _objectSpread2),
                getCellClassName(currentDate),
              ),
            ),
            onClick: function onClick() {
              if (!disabled) {
                onSelect(currentDate);
              }
            },
            onMouseEnter: function onMouseEnter() {
              if (!disabled && onDateMouseEnter) {
                onDateMouseEnter(currentDate);
              }
            },
            onMouseLeave: function onMouseLeave() {
              if (!disabled && onDateMouseLeave) {
                onDateMouseLeave(currentDate);
              }
            },
          },
          getCellNode
            ? getCellNode(currentDate)
            : /*#__PURE__*/ react.createElement(
                'div',
                {
                  className: ''.concat(cellPrefixCls, '-inner'),
                },
                getCellText(currentDate),
              ),
        ),
      );
    };

    for (var j = 0; j < colNum; j += 1) {
      _loop(j);
    }

    rows.push(
      /*#__PURE__*/ react.createElement(
        'tr',
        {
          key: i,
          className: rowClassName && rowClassName(rowStartDate),
        },
        row,
      ),
    );
  }

  return /*#__PURE__*/ react.createElement(
    'div',
    {
      className: ''.concat(prefixCls, '-body'),
    },
    /*#__PURE__*/ react.createElement(
      'table',
      {
        className: ''.concat(prefixCls, '-content'),
      },
      headerCells &&
        /*#__PURE__*/ react.createElement(
          'thead',
          null,
          /*#__PURE__*/ react.createElement('tr', null, headerCells),
        ),
      /*#__PURE__*/ react.createElement('tbody', null, rows),
    ),
  );
}

var DECADE_COL_COUNT = 3;
var DECADE_ROW_COUNT = 4;

function DecadeBody(props) {
  var DECADE_UNIT_DIFF_DES = DECADE_UNIT_DIFF - 1;
  var prefixCls = props.prefixCls,
    viewDate = props.viewDate,
    generateConfig = props.generateConfig;
  var cellPrefixCls = ''.concat(prefixCls, '-cell');
  var yearNumber = generateConfig.getYear(viewDate);
  var decadeYearNumber =
    Math.floor(yearNumber / DECADE_UNIT_DIFF) * DECADE_UNIT_DIFF;
  var startDecadeYear =
    Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  var endDecadeYear = startDecadeYear + DECADE_DISTANCE_COUNT - 1;
  var baseDecadeYear = generateConfig.setYear(
    viewDate,
    startDecadeYear -
      Math.ceil(
        (DECADE_COL_COUNT * DECADE_ROW_COUNT * DECADE_UNIT_DIFF -
          DECADE_DISTANCE_COUNT) /
          2,
      ),
  );

  var getCellClassName = function getCellClassName(date) {
    var _ref;

    var startDecadeNumber = generateConfig.getYear(date);
    var endDecadeNumber = startDecadeNumber + DECADE_UNIT_DIFF_DES;
    return (
      (_ref = {}),
      _defineProperty$1(
        _ref,
        ''.concat(cellPrefixCls, '-in-view'),
        startDecadeYear <= startDecadeNumber &&
          endDecadeNumber <= endDecadeYear,
      ),
      _defineProperty$1(
        _ref,
        ''.concat(cellPrefixCls, '-selected'),
        startDecadeNumber === decadeYearNumber,
      ),
      _ref
    );
  };

  return /*#__PURE__*/ react.createElement(
    PanelBody,
    _extends({}, props, {
      rowNum: DECADE_ROW_COUNT,
      colNum: DECADE_COL_COUNT,
      baseDate: baseDecadeYear,
      getCellText: function getCellText(date) {
        var startDecadeNumber = generateConfig.getYear(date);
        return ''
          .concat(startDecadeNumber, '-')
          .concat(startDecadeNumber + DECADE_UNIT_DIFF_DES);
      },
      getCellClassName: getCellClassName,
      getCellDate: function getCellDate(date, offset) {
        return generateConfig.addYear(date, offset * DECADE_UNIT_DIFF);
      },
    }),
  );
}

var isVisible = function (element) {
  if (!element) {
    return false;
  }

  if (element.offsetParent) {
    return true;
  }

  if (element.getBBox) {
    var box = element.getBBox();

    if (box.width || box.height) {
      return true;
    }
  }

  if (element.getBoundingClientRect) {
    var _box = element.getBoundingClientRect();

    if (_box.width || _box.height) {
      return true;
    }
  }

  return false;
};

var scrollIds = new Map();
/** Trigger when element is visible in view */

function waitElementReady(element, callback) {
  var id;

  function tryOrNextFrame() {
    if (isVisible(element)) {
      callback();
    } else {
      id = wrapperRaf(function () {
        tryOrNextFrame();
      });
    }
  }

  tryOrNextFrame();
  return function () {
    wrapperRaf.cancel(id);
  };
}
/* eslint-disable no-param-reassign */

function scrollTo(element, to, duration) {
  if (scrollIds.get(element)) {
    cancelAnimationFrame(scrollIds.get(element));
  } // jump to target if duration zero

  if (duration <= 0) {
    scrollIds.set(
      element,
      requestAnimationFrame(function () {
        element.scrollTop = to;
      }),
    );
    return;
  }

  var difference = to - element.scrollTop;
  var perTick = (difference / duration) * 10;
  scrollIds.set(
    element,
    requestAnimationFrame(function () {
      element.scrollTop += perTick;

      if (element.scrollTop !== to) {
        scrollTo(element, to, duration - 10);
      }
    }),
  );
}
function createKeyDownHandler(event, _ref) {
  var onLeftRight = _ref.onLeftRight,
    onCtrlLeftRight = _ref.onCtrlLeftRight,
    onUpDown = _ref.onUpDown,
    onPageUpDown = _ref.onPageUpDown,
    onEnter = _ref.onEnter;
  var which = event.which,
    ctrlKey = event.ctrlKey,
    metaKey = event.metaKey;

  switch (which) {
    case KeyCode.LEFT:
      if (ctrlKey || metaKey) {
        if (onCtrlLeftRight) {
          onCtrlLeftRight(-1);
          return true;
        }
      } else if (onLeftRight) {
        onLeftRight(-1);
        return true;
      }
      /* istanbul ignore next */

      break;

    case KeyCode.RIGHT:
      if (ctrlKey || metaKey) {
        if (onCtrlLeftRight) {
          onCtrlLeftRight(1);
          return true;
        }
      } else if (onLeftRight) {
        onLeftRight(1);
        return true;
      }
      /* istanbul ignore next */

      break;

    case KeyCode.UP:
      if (onUpDown) {
        onUpDown(-1);
        return true;
      }
      /* istanbul ignore next */

      break;

    case KeyCode.DOWN:
      if (onUpDown) {
        onUpDown(1);
        return true;
      }
      /* istanbul ignore next */

      break;

    case KeyCode.PAGE_UP:
      if (onPageUpDown) {
        onPageUpDown(-1);
        return true;
      }
      /* istanbul ignore next */

      break;

    case KeyCode.PAGE_DOWN:
      if (onPageUpDown) {
        onPageUpDown(1);
        return true;
      }
      /* istanbul ignore next */

      break;

    case KeyCode.ENTER:
      if (onEnter) {
        onEnter();
        return true;
      }
      /* istanbul ignore next */

      break;
  }

  return false;
} // ===================== Format =====================

function getDefaultFormat(format, picker, showTime, use12Hours) {
  var mergedFormat = format;

  if (!mergedFormat) {
    switch (picker) {
      case 'time':
        mergedFormat = use12Hours ? 'hh:mm:ss a' : 'HH:mm:ss';
        break;

      case 'week':
        mergedFormat = 'gggg-wo';
        break;

      case 'month':
        mergedFormat = 'YYYY-MM';
        break;

      case 'quarter':
        mergedFormat = 'YYYY-[Q]Q';
        break;

      case 'year':
        mergedFormat = 'YYYY';
        break;

      default:
        mergedFormat = showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
    }
  }

  return mergedFormat;
}
function getInputSize(picker, format, generateConfig) {
  var defaultSize = picker === 'time' ? 8 : 10;
  var length =
    typeof format === 'function'
      ? format(generateConfig.getNow()).length
      : format.length;
  return Math.max(defaultSize, length) + 2;
}
var globalClickFunc = null;
var clickCallbacks = new Set();
function addGlobalMouseDownEvent(callback) {
  if (
    !globalClickFunc &&
    typeof window !== 'undefined' &&
    window.addEventListener
  ) {
    globalClickFunc = function globalClickFunc(e) {
      // Clone a new list to avoid repeat trigger events
      _toConsumableArray(clickCallbacks).forEach(function (queueFunc) {
        queueFunc(e);
      });
    };

    window.addEventListener('mousedown', globalClickFunc);
  }

  clickCallbacks.add(callback);
  return function () {
    clickCallbacks.delete(callback);

    if (clickCallbacks.size === 0) {
      window.removeEventListener('mousedown', globalClickFunc);
      globalClickFunc = null;
    }
  };
}
function getTargetFromEvent(e) {
  var target = e.target; // get target if in shadow dom

  if (e.composed && target.shadowRoot) {
    var _e$composedPath;

    return (
      ((_e$composedPath = e.composedPath) === null || _e$composedPath === void 0
        ? void 0
        : _e$composedPath.call(e)[0]) || target
    );
  }

  return target;
} // ====================== Mode ======================

var getYearNextMode = function getYearNextMode(next) {
  if (next === 'month' || next === 'date') {
    return 'year';
  }

  return next;
};

var getMonthNextMode = function getMonthNextMode(next) {
  if (next === 'date') {
    return 'month';
  }

  return next;
};

var getQuarterNextMode = function getQuarterNextMode(next) {
  if (next === 'month' || next === 'date') {
    return 'quarter';
  }

  return next;
};

var getWeekNextMode = function getWeekNextMode(next) {
  if (next === 'date') {
    return 'week';
  }

  return next;
};

var PickerModeMap = {
  year: getYearNextMode,
  month: getMonthNextMode,
  quarter: getQuarterNextMode,
  week: getWeekNextMode,
  time: null,
  date: null,
};
function elementsContains(elements, target) {
  return elements.some(function (ele) {
    return ele && ele.contains(target);
  });
}

var DECADE_UNIT_DIFF = 10;
var DECADE_DISTANCE_COUNT = DECADE_UNIT_DIFF * 10;

function DecadePanel(props) {
  var prefixCls = props.prefixCls,
    onViewDateChange = props.onViewDateChange,
    generateConfig = props.generateConfig,
    viewDate = props.viewDate,
    operationRef = props.operationRef,
    onSelect = props.onSelect,
    onPanelChange = props.onPanelChange;
  var panelPrefixCls = ''.concat(prefixCls, '-decade-panel'); // ======================= Keyboard =======================

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          onSelect(
            generateConfig.addYear(viewDate, diff * DECADE_UNIT_DIFF),
            'key',
          );
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          onSelect(
            generateConfig.addYear(viewDate, diff * DECADE_DISTANCE_COUNT),
            'key',
          );
        },
        onUpDown: function onUpDown(diff) {
          onSelect(
            generateConfig.addYear(
              viewDate,
              diff * DECADE_UNIT_DIFF * DECADE_COL_COUNT,
            ),
            'key',
          );
        },
        onEnter: function onEnter() {
          onPanelChange('year', viewDate);
        },
      });
    },
  }; // ==================== View Operation ====================

  var onDecadesChange = function onDecadesChange(diff) {
    var newDate = generateConfig.addYear(
      viewDate,
      diff * DECADE_DISTANCE_COUNT,
    );
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  var onInternalSelect = function onInternalSelect(date) {
    onSelect(date, 'mouse');
    onPanelChange('year', date);
  };

  return /*#__PURE__*/ react.createElement(
    'div',
    {
      className: panelPrefixCls,
    },
    /*#__PURE__*/ react.createElement(
      DecadeHeader,
      _extends({}, props, {
        prefixCls: prefixCls,
        onPrevDecades: function onPrevDecades() {
          onDecadesChange(-1);
        },
        onNextDecades: function onNextDecades() {
          onDecadesChange(1);
        },
      }),
    ),
    /*#__PURE__*/ react.createElement(
      DecadeBody,
      _extends({}, props, {
        prefixCls: prefixCls,
        onSelect: onInternalSelect,
      }),
    ),
  );
}

var WEEK_DAY_COUNT = 7;
function isNullEqual(value1, value2) {
  if (!value1 && !value2) {
    return true;
  }

  if (!value1 || !value2) {
    return false;
  }

  return undefined;
}
function isSameDecade(generateConfig, decade1, decade2) {
  var equal = isNullEqual(decade1, decade2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  var num1 = Math.floor(generateConfig.getYear(decade1) / 10);
  var num2 = Math.floor(generateConfig.getYear(decade2) / 10);
  return num1 === num2;
}
function isSameYear(generateConfig, year1, year2) {
  var equal = isNullEqual(year1, year2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return generateConfig.getYear(year1) === generateConfig.getYear(year2);
}
function getQuarter(generateConfig, date) {
  var quota = Math.floor(generateConfig.getMonth(date) / 3);
  return quota + 1;
}
function isSameQuarter(generateConfig, quarter1, quarter2) {
  var equal = isNullEqual(quarter1, quarter2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return (
    isSameYear(generateConfig, quarter1, quarter2) &&
    getQuarter(generateConfig, quarter1) ===
      getQuarter(generateConfig, quarter2)
  );
}
function isSameMonth(generateConfig, month1, month2) {
  var equal = isNullEqual(month1, month2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return (
    isSameYear(generateConfig, month1, month2) &&
    generateConfig.getMonth(month1) === generateConfig.getMonth(month2)
  );
}
function isSameDate(generateConfig, date1, date2) {
  var equal = isNullEqual(date1, date2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return (
    generateConfig.getYear(date1) === generateConfig.getYear(date2) &&
    generateConfig.getMonth(date1) === generateConfig.getMonth(date2) &&
    generateConfig.getDate(date1) === generateConfig.getDate(date2)
  );
}
function isSameTime(generateConfig, time1, time2) {
  var equal = isNullEqual(time1, time2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return (
    generateConfig.getHour(time1) === generateConfig.getHour(time2) &&
    generateConfig.getMinute(time1) === generateConfig.getMinute(time2) &&
    generateConfig.getSecond(time1) === generateConfig.getSecond(time2)
  );
}
function isSameWeek(generateConfig, locale, date1, date2) {
  var equal = isNullEqual(date1, date2);

  if (typeof equal === 'boolean') {
    return equal;
  }

  return (
    generateConfig.locale.getWeek(locale, date1) ===
    generateConfig.locale.getWeek(locale, date2)
  );
}
function isEqual(generateConfig, value1, value2) {
  return (
    isSameDate(generateConfig, value1, value2) &&
    isSameTime(generateConfig, value1, value2)
  );
}
/** Between in date but not equal of date */

function isInRange(generateConfig, startDate, endDate, current) {
  if (!startDate || !endDate || !current) {
    return false;
  }

  return (
    !isSameDate(generateConfig, startDate, current) &&
    !isSameDate(generateConfig, endDate, current) &&
    generateConfig.isAfter(current, startDate) &&
    generateConfig.isAfter(endDate, current)
  );
}
function getWeekStartDate(locale, generateConfig, value) {
  var weekFirstDay = generateConfig.locale.getWeekFirstDay(locale);
  var monthStartDate = generateConfig.setDate(value, 1);
  var startDateWeekDay = generateConfig.getWeekDay(monthStartDate);
  var alignStartDate = generateConfig.addDate(
    monthStartDate,
    weekFirstDay - startDateWeekDay,
  );

  if (
    generateConfig.getMonth(alignStartDate) ===
      generateConfig.getMonth(value) &&
    generateConfig.getDate(alignStartDate) > 1
  ) {
    alignStartDate = generateConfig.addDate(alignStartDate, -7);
  }

  return alignStartDate;
}
function getClosingViewDate(viewDate, picker, generateConfig) {
  var offset =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  switch (picker) {
    case 'year':
      return generateConfig.addYear(viewDate, offset * 10);

    case 'quarter':
    case 'month':
      return generateConfig.addYear(viewDate, offset);

    default:
      return generateConfig.addMonth(viewDate, offset);
  }
}
function formatValue(value, _ref) {
  var generateConfig = _ref.generateConfig,
    locale = _ref.locale,
    format = _ref.format;
  return typeof format === 'function'
    ? format(value)
    : generateConfig.locale.format(locale.locale, value, format);
}
function parseValue(value, _ref2) {
  var generateConfig = _ref2.generateConfig,
    locale = _ref2.locale,
    formatList = _ref2.formatList;

  if (!value || typeof formatList[0] === 'function') {
    return null;
  }

  return generateConfig.locale.parse(locale.locale, value, formatList);
} // eslint-disable-next-line consistent-return

function getCellDateDisabled(_ref3) {
  var cellDate = _ref3.cellDate,
    mode = _ref3.mode,
    disabledDate = _ref3.disabledDate,
    generateConfig = _ref3.generateConfig;
  if (!disabledDate) return false; // Whether cellDate is disabled in range

  var getDisabledFromRange = function getDisabledFromRange(
    currentMode,
    start,
    end,
  ) {
    var current = start;

    while (current <= end) {
      var date = void 0;

      switch (currentMode) {
        case 'date': {
          date = generateConfig.setDate(cellDate, current);

          if (!disabledDate(date)) {
            return false;
          }

          break;
        }

        case 'month': {
          date = generateConfig.setMonth(cellDate, current);

          if (
            !getCellDateDisabled({
              cellDate: date,
              mode: 'month',
              generateConfig: generateConfig,
              disabledDate: disabledDate,
            })
          ) {
            return false;
          }

          break;
        }

        case 'year': {
          date = generateConfig.setYear(cellDate, current);

          if (
            !getCellDateDisabled({
              cellDate: date,
              mode: 'year',
              generateConfig: generateConfig,
              disabledDate: disabledDate,
            })
          ) {
            return false;
          }

          break;
        }
      }

      current += 1;
    }

    return true;
  };

  switch (mode) {
    case 'date':
    case 'week': {
      return disabledDate(cellDate);
    }

    case 'month': {
      var startDate = 1;
      var endDate = generateConfig.getDate(generateConfig.getEndDate(cellDate));
      return getDisabledFromRange('date', startDate, endDate);
    }

    case 'quarter': {
      var startMonth = Math.floor(generateConfig.getMonth(cellDate) / 3) * 3;
      var endMonth = startMonth + 2;
      return getDisabledFromRange('month', startMonth, endMonth);
    }

    case 'year': {
      return getDisabledFromRange('month', 0, 11);
    }

    case 'decade': {
      var year = generateConfig.getYear(cellDate);
      var startYear = Math.floor(year / DECADE_UNIT_DIFF) * DECADE_UNIT_DIFF;
      var endYear = startYear + DECADE_UNIT_DIFF - 1;
      return getDisabledFromRange('year', startYear, endYear);
    }
  }
}

function TimeHeader(props) {
  var _React$useContext = react.useContext(PanelContext),
    hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    value = props.value,
    format = props.format;
  var headerPrefixCls = ''.concat(prefixCls, '-header');
  return /*#__PURE__*/ react.createElement(
    Header,
    {
      prefixCls: headerPrefixCls,
    },
    value
      ? formatValue(value, {
          locale: locale,
          format: format,
          generateConfig: generateConfig,
        })
      : '\xA0',
  );
}

function TimeUnitColumn(props) {
  var prefixCls = props.prefixCls,
    units = props.units,
    onSelect = props.onSelect,
    value = props.value,
    active = props.active,
    hideDisabledOptions = props.hideDisabledOptions;
  var cellPrefixCls = ''.concat(prefixCls, '-cell');

  var _React$useContext = react.useContext(PanelContext),
    open = _React$useContext.open;

  var ulRef = react.useRef(null);
  var liRefs = react.useRef(new Map());
  var scrollRef = react.useRef(); // `useLayoutEffect` here to avoid blink by duration is 0

  react.useLayoutEffect(
    function () {
      var li = liRefs.current.get(value);

      if (li && open !== false) {
        scrollTo(ulRef.current, li.offsetTop, 120);
      }
    },
    [value],
  );
  react.useLayoutEffect(
    function () {
      if (open) {
        var li = liRefs.current.get(value);

        if (li) {
          scrollRef.current = waitElementReady(li, function () {
            scrollTo(ulRef.current, li.offsetTop, 0);
          });
        }
      }

      return function () {
        var _scrollRef$current;

        (_scrollRef$current = scrollRef.current) === null ||
        _scrollRef$current === void 0
          ? void 0
          : _scrollRef$current.call(scrollRef);
      };
    },
    [open],
  );
  return /*#__PURE__*/ react.createElement(
    'ul',
    {
      className: classnames(
        ''.concat(prefixCls, '-column'),
        _defineProperty$1({}, ''.concat(prefixCls, '-column-active'), active),
      ),
      ref: ulRef,
      style: {
        position: 'relative',
      },
    },
    units.map(function (unit) {
      var _classNames2;

      if (hideDisabledOptions && unit.disabled) {
        return null;
      }

      return /*#__PURE__*/ react.createElement(
        'li',
        {
          key: unit.value,
          ref: function ref(element) {
            liRefs.current.set(unit.value, element);
          },
          className: classnames(
            cellPrefixCls,
            ((_classNames2 = {}),
            _defineProperty$1(
              _classNames2,
              ''.concat(cellPrefixCls, '-disabled'),
              unit.disabled,
            ),
            _defineProperty$1(
              _classNames2,
              ''.concat(cellPrefixCls, '-selected'),
              value === unit.value,
            ),
            _classNames2),
          ),
          onClick: function onClick() {
            if (unit.disabled) {
              return;
            }

            onSelect(unit.value);
          },
        },
        /*#__PURE__*/ react.createElement(
          'div',
          {
            className: ''.concat(cellPrefixCls, '-inner'),
          },
          unit.label,
        ),
      );
    }),
  );
}

function leftPad(str, length) {
  var fill =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  var current = String(str);

  while (current.length < length) {
    current = ''.concat(fill).concat(str);
  }

  return current;
}
var tuple = function tuple() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    args[_key] = arguments[_key];
  }

  return args;
};
function toArray(val) {
  if (val === null || val === undefined) {
    return [];
  }

  return Array.isArray(val) ? val : [val];
}
function getDataOrAriaProps(props) {
  var retProps = {};
  Object.keys(props).forEach(function (key) {
    if (
      (key.substr(0, 5) === 'data-' ||
        key.substr(0, 5) === 'aria-' ||
        key === 'role' ||
        key === 'name') &&
      key.substr(0, 7) !== 'data-__'
    ) {
      retProps[key] = props[key];
    }
  });
  return retProps;
}
function getValue(values, index) {
  return values ? values[index] : null;
}
function updateValues(values, value, index) {
  var newValues = [getValue(values, 0), getValue(values, 1)];
  newValues[index] =
    typeof value === 'function' ? value(newValues[index]) : value;

  if (!newValues[0] && !newValues[1]) {
    return null;
  }

  return newValues;
}

function shouldUnitsUpdate(prevUnits, nextUnits) {
  if (prevUnits.length !== nextUnits.length) return true; // if any unit's disabled status is different, the units should be re-evaluted

  for (var i = 0; i < prevUnits.length; i += 1) {
    if (prevUnits[i].disabled !== nextUnits[i].disabled) return true;
  }

  return false;
}

function generateUnits(start, end, step, disabledUnits) {
  var units = [];

  for (var i = start; i <= end; i += step) {
    units.push({
      label: leftPad(i, 2),
      value: i,
      disabled: (disabledUnits || []).includes(i),
    });
  }

  return units;
}

function TimeBody(props) {
  var generateConfig = props.generateConfig,
    prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    activeColumnIndex = props.activeColumnIndex,
    value = props.value,
    showHour = props.showHour,
    showMinute = props.showMinute,
    showSecond = props.showSecond,
    use12Hours = props.use12Hours,
    _props$hourStep = props.hourStep,
    hourStep = _props$hourStep === void 0 ? 1 : _props$hourStep,
    _props$minuteStep = props.minuteStep,
    minuteStep = _props$minuteStep === void 0 ? 1 : _props$minuteStep,
    _props$secondStep = props.secondStep,
    secondStep = _props$secondStep === void 0 ? 1 : _props$secondStep,
    disabledHours = props.disabledHours,
    disabledMinutes = props.disabledMinutes,
    disabledSeconds = props.disabledSeconds,
    hideDisabledOptions = props.hideDisabledOptions,
    onSelect = props.onSelect;
  var columns = [];
  var contentPrefixCls = ''.concat(prefixCls, '-content');
  var columnPrefixCls = ''.concat(prefixCls, '-time-panel');
  var isPM;
  var originHour = value ? generateConfig.getHour(value) : -1;
  var hour = originHour;
  var minute = value ? generateConfig.getMinute(value) : -1;
  var second = value ? generateConfig.getSecond(value) : -1;

  var setTime$1 = function setTime$1(isNewPM, newHour, newMinute, newSecond) {
    var newDate = value || generateConfig.getNow();
    var mergedHour = Math.max(0, newHour);
    var mergedMinute = Math.max(0, newMinute);
    var mergedSecond = Math.max(0, newSecond);
    newDate = setTime(
      generateConfig,
      newDate,
      !use12Hours || !isNewPM ? mergedHour : mergedHour + 12,
      mergedMinute,
      mergedSecond,
    );
    return newDate;
  }; // ========================= Unit =========================

  var rawHours = generateUnits(
    0,
    23,
    hourStep,
    disabledHours && disabledHours(),
  );
  var memorizedRawHours = useMemo(
    function () {
      return rawHours;
    },
    rawHours,
    shouldUnitsUpdate,
  ); // Should additional logic to handle 12 hours

  if (use12Hours) {
    isPM = hour >= 12; // -1 means should display AM

    hour %= 12;
  }

  var _React$useMemo = react.useMemo(
      function () {
        if (!use12Hours) {
          return [false, false];
        }

        var AMPMDisabled = [true, true];
        memorizedRawHours.forEach(function (_ref) {
          var disabled = _ref.disabled,
            hourValue = _ref.value;
          if (disabled) return;

          if (hourValue >= 12) {
            AMPMDisabled[1] = false;
          } else {
            AMPMDisabled[0] = false;
          }
        });
        return AMPMDisabled;
      },
      [use12Hours, memorizedRawHours],
    ),
    _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
    AMDisabled = _React$useMemo2[0],
    PMDisabled = _React$useMemo2[1];

  var hours = react.useMemo(
    function () {
      if (!use12Hours) return memorizedRawHours;
      return memorizedRawHours
        .filter(
          isPM
            ? function (hourMeta) {
                return hourMeta.value >= 12;
              }
            : function (hourMeta) {
                return hourMeta.value < 12;
              },
        )
        .map(function (hourMeta) {
          var hourValue = hourMeta.value % 12;
          var hourLabel = hourValue === 0 ? '12' : leftPad(hourValue, 2);
          return _objectSpread2$1(
            _objectSpread2$1({}, hourMeta),
            {},
            {
              label: hourLabel,
              value: hourValue,
            },
          );
        });
    },
    [use12Hours, isPM, memorizedRawHours],
  );
  var minutes = generateUnits(
    0,
    59,
    minuteStep,
    disabledMinutes && disabledMinutes(originHour),
  );
  var seconds = generateUnits(
    0,
    59,
    secondStep,
    disabledSeconds && disabledSeconds(originHour, minute),
  ); // ====================== Operations ======================

  operationRef.current = {
    onUpDown: function onUpDown(diff) {
      var column = columns[activeColumnIndex];

      if (column) {
        var valueIndex = column.units.findIndex(function (unit) {
          return unit.value === column.value;
        });
        var unitLen = column.units.length;

        for (var i = 1; i < unitLen; i += 1) {
          var nextUnit =
            column.units[(valueIndex + diff * i + unitLen) % unitLen];

          if (nextUnit.disabled !== true) {
            column.onSelect(nextUnit.value);
            break;
          }
        }
      }
    },
  }; // ======================== Render ========================

  function addColumnNode(condition, node, columnValue, units, onColumnSelect) {
    if (condition !== false) {
      columns.push({
        node: /*#__PURE__*/ react.cloneElement(node, {
          prefixCls: columnPrefixCls,
          value: columnValue,
          active: activeColumnIndex === columns.length,
          onSelect: onColumnSelect,
          units: units,
          hideDisabledOptions: hideDisabledOptions,
        }),
        onSelect: onColumnSelect,
        value: columnValue,
        units: units,
      });
    }
  } // Hour

  addColumnNode(
    showHour,
    /*#__PURE__*/ react.createElement(TimeUnitColumn, {
      key: 'hour',
    }),
    hour,
    hours,
    function (num) {
      onSelect(setTime$1(isPM, num, minute, second), 'mouse');
    },
  ); // Minute

  addColumnNode(
    showMinute,
    /*#__PURE__*/ react.createElement(TimeUnitColumn, {
      key: 'minute',
    }),
    minute,
    minutes,
    function (num) {
      onSelect(setTime$1(isPM, hour, num, second), 'mouse');
    },
  ); // Second

  addColumnNode(
    showSecond,
    /*#__PURE__*/ react.createElement(TimeUnitColumn, {
      key: 'second',
    }),
    second,
    seconds,
    function (num) {
      onSelect(setTime$1(isPM, hour, minute, num), 'mouse');
    },
  ); // 12 Hours

  var PMIndex = -1;

  if (typeof isPM === 'boolean') {
    PMIndex = isPM ? 1 : 0;
  }

  addColumnNode(
    use12Hours === true,
    /*#__PURE__*/ react.createElement(TimeUnitColumn, {
      key: '12hours',
    }),
    PMIndex,
    [
      {
        label: 'AM',
        value: 0,
        disabled: AMDisabled,
      },
      {
        label: 'PM',
        value: 1,
        disabled: PMDisabled,
      },
    ],
    function (num) {
      onSelect(setTime$1(!!num, hour, minute, second), 'mouse');
    },
  );
  return /*#__PURE__*/ react.createElement(
    'div',
    {
      className: contentPrefixCls,
    },
    columns.map(function (_ref2) {
      var node = _ref2.node;
      return node;
    }),
  );
}

var countBoolean = function countBoolean(boolList) {
  return boolList.filter(function (bool) {
    return bool !== false;
  }).length;
};

function TimePanel(props) {
  var generateConfig = props.generateConfig,
    _props$format = props.format,
    format = _props$format === void 0 ? 'HH:mm:ss' : _props$format,
    prefixCls = props.prefixCls,
    active = props.active,
    operationRef = props.operationRef,
    showHour = props.showHour,
    showMinute = props.showMinute,
    showSecond = props.showSecond,
    _props$use12Hours = props.use12Hours,
    use12Hours = _props$use12Hours === void 0 ? false : _props$use12Hours,
    onSelect = props.onSelect,
    value = props.value;
  var panelPrefixCls = ''.concat(prefixCls, '-time-panel');
  var bodyOperationRef = react.useRef(); // ======================= Keyboard =======================

  var _React$useState = react.useState(-1),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activeColumnIndex = _React$useState2[0],
    setActiveColumnIndex = _React$useState2[1];

  var columnsCount = countBoolean([
    showHour,
    showMinute,
    showSecond,
    use12Hours,
  ]);
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          setActiveColumnIndex(
            (activeColumnIndex + diff + columnsCount) % columnsCount,
          );
        },
        onUpDown: function onUpDown(diff) {
          if (activeColumnIndex === -1) {
            setActiveColumnIndex(0);
          } else if (bodyOperationRef.current) {
            bodyOperationRef.current.onUpDown(diff);
          }
        },
        onEnter: function onEnter() {
          onSelect(value || generateConfig.getNow(), 'key');
          setActiveColumnIndex(-1);
        },
      });
    },
    onBlur: function onBlur() {
      setActiveColumnIndex(-1);
    },
  };
  return /*#__PURE__*/ react.createElement(
    'div',
    {
      className: classnames(
        panelPrefixCls,
        _defineProperty$1({}, ''.concat(panelPrefixCls, '-active'), active),
      ),
    },
    /*#__PURE__*/ react.createElement(
      TimeHeader,
      _extends({}, props, {
        format: format,
        prefixCls: prefixCls,
      }),
    ),
    /*#__PURE__*/ react.createElement(
      TimeBody,
      _extends({}, props, {
        prefixCls: prefixCls,
        activeColumnIndex: activeColumnIndex,
        operationRef: bodyOperationRef,
      }),
    ),
  );
}

var RangeContext = /*#__PURE__*/ react.createContext({});

function useCellClassName(_ref) {
  var cellPrefixCls = _ref.cellPrefixCls,
    generateConfig = _ref.generateConfig,
    rangedValue = _ref.rangedValue,
    hoverRangedValue = _ref.hoverRangedValue,
    isInView = _ref.isInView,
    isSameCell = _ref.isSameCell,
    offsetCell = _ref.offsetCell,
    today = _ref.today,
    value = _ref.value;

  function getClassName(currentDate) {
    var _ref2;

    var prevDate = offsetCell(currentDate, -1);
    var nextDate = offsetCell(currentDate, 1);
    var rangeStart = getValue(rangedValue, 0);
    var rangeEnd = getValue(rangedValue, 1);
    var hoverStart = getValue(hoverRangedValue, 0);
    var hoverEnd = getValue(hoverRangedValue, 1);
    var isRangeHovered = isInRange(
      generateConfig,
      hoverStart,
      hoverEnd,
      currentDate,
    );

    function isRangeStart(date) {
      return isSameCell(rangeStart, date);
    }

    function isRangeEnd(date) {
      return isSameCell(rangeEnd, date);
    }

    var isHoverStart = isSameCell(hoverStart, currentDate);
    var isHoverEnd = isSameCell(hoverEnd, currentDate);
    var isHoverEdgeStart =
      (isRangeHovered || isHoverEnd) &&
      (!isInView(prevDate) || isRangeEnd(prevDate));
    var isHoverEdgeEnd =
      (isRangeHovered || isHoverStart) &&
      (!isInView(nextDate) || isRangeStart(nextDate));
    return (
      (_ref2 = {}),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-in-view'),
        isInView(currentDate),
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-in-range'),
        isInRange(generateConfig, rangeStart, rangeEnd, currentDate),
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-range-start'),
        isRangeStart(currentDate),
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-range-end'),
        isRangeEnd(currentDate),
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-range-start-single'),
        isRangeStart(currentDate) && !rangeEnd,
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-range-end-single'),
        isRangeEnd(currentDate) && !rangeStart,
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-range-start-near-hover'),
        isRangeStart(currentDate) &&
          (isSameCell(prevDate, hoverStart) ||
            isInRange(generateConfig, hoverStart, hoverEnd, prevDate)),
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-range-end-near-hover'),
        isRangeEnd(currentDate) &&
          (isSameCell(nextDate, hoverEnd) ||
            isInRange(generateConfig, hoverStart, hoverEnd, nextDate)),
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-range-hover'),
        isRangeHovered,
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-range-hover-start'),
        isHoverStart,
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-range-hover-end'),
        isHoverEnd,
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-range-hover-edge-start'),
        isHoverEdgeStart,
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-range-hover-edge-end'),
        isHoverEdgeEnd,
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-range-hover-edge-start-near-range'),
        isHoverEdgeStart && isSameCell(prevDate, rangeEnd),
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-range-hover-edge-end-near-range'),
        isHoverEdgeEnd && isSameCell(nextDate, rangeStart),
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-today'),
        isSameCell(today, currentDate),
      ),
      _defineProperty$1(
        _ref2,
        ''.concat(cellPrefixCls, '-selected'),
        isSameCell(value, currentDate),
      ),
      _ref2
    );
  }

  return getClassName;
}

function DateBody(props) {
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    prefixColumn = props.prefixColumn,
    locale = props.locale,
    rowCount = props.rowCount,
    viewDate = props.viewDate,
    value = props.value,
    dateRender = props.dateRender;

  var _React$useContext = react.useContext(RangeContext),
    rangedValue = _React$useContext.rangedValue,
    hoverRangedValue = _React$useContext.hoverRangedValue;

  var baseDate = getWeekStartDate(locale.locale, generateConfig, viewDate);
  var cellPrefixCls = ''.concat(prefixCls, '-cell');
  var weekFirstDay = generateConfig.locale.getWeekFirstDay(locale.locale);
  var today = generateConfig.getNow(); // ============================== Header ==============================

  var headerCells = [];
  var weekDaysLocale =
    locale.shortWeekDays ||
    (generateConfig.locale.getShortWeekDays
      ? generateConfig.locale.getShortWeekDays(locale.locale)
      : []);

  if (prefixColumn) {
    headerCells.push(
      /*#__PURE__*/ react.createElement('th', {
        key: 'empty',
        'aria-label': 'empty cell',
      }),
    );
  }

  for (var i = 0; i < WEEK_DAY_COUNT; i += 1) {
    headerCells.push(
      /*#__PURE__*/ react.createElement(
        'th',
        {
          key: i,
        },
        weekDaysLocale[(i + weekFirstDay) % WEEK_DAY_COUNT],
      ),
    );
  } // =============================== Body ===============================

  var getCellClassName = useCellClassName({
    cellPrefixCls: cellPrefixCls,
    today: today,
    value: value,
    generateConfig: generateConfig,
    rangedValue: prefixColumn ? null : rangedValue,
    hoverRangedValue: prefixColumn ? null : hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameDate(generateConfig, current, target);
    },
    isInView: function isInView(date) {
      return isSameMonth(generateConfig, date, viewDate);
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addDate(date, offset);
    },
  });
  var getCellNode = dateRender
    ? function (date) {
        return dateRender(date, today);
      }
    : undefined;
  return /*#__PURE__*/ react.createElement(
    PanelBody,
    _extends({}, props, {
      rowNum: rowCount,
      colNum: WEEK_DAY_COUNT,
      baseDate: baseDate,
      getCellNode: getCellNode,
      getCellText: generateConfig.getDate,
      getCellClassName: getCellClassName,
      getCellDate: generateConfig.addDate,
      titleCell: function titleCell(date) {
        return formatValue(date, {
          locale: locale,
          format: 'YYYY-MM-DD',
          generateConfig: generateConfig,
        });
      },
      headerCells: headerCells,
    }),
  );
}

function DateHeader(props) {
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    viewDate = props.viewDate,
    onNextMonth = props.onNextMonth,
    onPrevMonth = props.onPrevMonth,
    onNextYear = props.onNextYear,
    onPrevYear = props.onPrevYear,
    onYearClick = props.onYearClick,
    onMonthClick = props.onMonthClick;

  var _React$useContext = react.useContext(PanelContext),
    hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = ''.concat(prefixCls, '-header');
  var monthsLocale =
    locale.shortMonths ||
    (generateConfig.locale.getShortMonths
      ? generateConfig.locale.getShortMonths(locale.locale)
      : []);
  var month = generateConfig.getMonth(viewDate); // =================== Month & Year ===================

  var yearNode = /*#__PURE__*/ react.createElement(
    'button',
    {
      type: 'button',
      key: 'year',
      onClick: onYearClick,
      tabIndex: -1,
      className: ''.concat(prefixCls, '-year-btn'),
    },
    formatValue(viewDate, {
      locale: locale,
      format: locale.yearFormat,
      generateConfig: generateConfig,
    }),
  );
  var monthNode = /*#__PURE__*/ react.createElement(
    'button',
    {
      type: 'button',
      key: 'month',
      onClick: onMonthClick,
      tabIndex: -1,
      className: ''.concat(prefixCls, '-month-btn'),
    },
    locale.monthFormat
      ? formatValue(viewDate, {
          locale: locale,
          format: locale.monthFormat,
          generateConfig: generateConfig,
        })
      : monthsLocale[month],
  );
  var monthYearNodes = locale.monthBeforeYear
    ? [monthNode, yearNode]
    : [yearNode, monthNode];
  return /*#__PURE__*/ react.createElement(
    Header,
    _extends({}, props, {
      prefixCls: headerPrefixCls,
      onSuperPrev: onPrevYear,
      onPrev: onPrevMonth,
      onNext: onNextMonth,
      onSuperNext: onNextYear,
    }),
    monthYearNodes,
  );
}

var DATE_ROW_COUNT = 6;

function DatePanel(props) {
  var prefixCls = props.prefixCls,
    _props$panelName = props.panelName,
    panelName = _props$panelName === void 0 ? 'date' : _props$panelName,
    keyboardConfig = props.keyboardConfig,
    active = props.active,
    operationRef = props.operationRef,
    generateConfig = props.generateConfig,
    value = props.value,
    viewDate = props.viewDate,
    onViewDateChange = props.onViewDateChange,
    onPanelChange = props.onPanelChange,
    _onSelect = props.onSelect;
  var panelPrefixCls = ''.concat(prefixCls, '-').concat(panelName, '-panel'); // ======================= Keyboard =======================

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(
        event,
        _objectSpread2$1(
          {
            onLeftRight: function onLeftRight(diff) {
              _onSelect(generateConfig.addDate(value || viewDate, diff), 'key');
            },
            onCtrlLeftRight: function onCtrlLeftRight(diff) {
              _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
            },
            onUpDown: function onUpDown(diff) {
              _onSelect(
                generateConfig.addDate(
                  value || viewDate,
                  diff * WEEK_DAY_COUNT,
                ),
                'key',
              );
            },
            onPageUpDown: function onPageUpDown(diff) {
              _onSelect(
                generateConfig.addMonth(value || viewDate, diff),
                'key',
              );
            },
          },
          keyboardConfig,
        ),
      );
    },
  }; // ==================== View Operation ====================

  var onYearChange = function onYearChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  var onMonthChange = function onMonthChange(diff) {
    var newDate = generateConfig.addMonth(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  return /*#__PURE__*/ react.createElement(
    'div',
    {
      className: classnames(
        panelPrefixCls,
        _defineProperty$1({}, ''.concat(panelPrefixCls, '-active'), active),
      ),
    },
    /*#__PURE__*/ react.createElement(
      DateHeader,
      _extends({}, props, {
        prefixCls: prefixCls,
        value: value,
        viewDate: viewDate, // View Operation
        onPrevYear: function onPrevYear() {
          onYearChange(-1);
        },
        onNextYear: function onNextYear() {
          onYearChange(1);
        },
        onPrevMonth: function onPrevMonth() {
          onMonthChange(-1);
        },
        onNextMonth: function onNextMonth() {
          onMonthChange(1);
        },
        onMonthClick: function onMonthClick() {
          onPanelChange('month', viewDate);
        },
        onYearClick: function onYearClick() {
          onPanelChange('year', viewDate);
        },
      }),
    ),
    /*#__PURE__*/ react.createElement(
      DateBody,
      _extends({}, props, {
        onSelect: function onSelect(date) {
          return _onSelect(date, 'mouse');
        },
        prefixCls: prefixCls,
        value: value,
        viewDate: viewDate,
        rowCount: DATE_ROW_COUNT,
      }),
    ),
  );
}

function setTime$1(generateConfig, date, defaultDate) {
  if (!defaultDate) {
    return date;
  }

  var newDate = date;
  newDate = generateConfig.setHour(
    newDate,
    generateConfig.getHour(defaultDate),
  );
  newDate = generateConfig.setMinute(
    newDate,
    generateConfig.getMinute(defaultDate),
  );
  newDate = generateConfig.setSecond(
    newDate,
    generateConfig.getSecond(defaultDate),
  );
  return newDate;
}

var ACTIVE_PANEL = tuple('date', 'time');

function DatetimePanel(props) {
  var prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    generateConfig = props.generateConfig,
    value = props.value,
    defaultValue = props.defaultValue,
    disabledTime = props.disabledTime,
    showTime = props.showTime,
    onSelect = props.onSelect;
  var panelPrefixCls = ''.concat(prefixCls, '-datetime-panel');

  var _React$useState = react.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activePanel = _React$useState2[0],
    setActivePanel = _React$useState2[1];

  var dateOperationRef = react.useRef({});
  var timeOperationRef = react.useRef({});
  var timeProps =
    _typeof$1(showTime) === 'object' ? _objectSpread2$1({}, showTime) : {}; // ======================= Keyboard =======================

  function getNextActive(offset) {
    var activeIndex = ACTIVE_PANEL.indexOf(activePanel) + offset;
    var nextActivePanel = ACTIVE_PANEL[activeIndex] || null;
    return nextActivePanel;
  }

  var onBlur = function onBlur(e) {
    if (timeOperationRef.current.onBlur) {
      timeOperationRef.current.onBlur(e);
    }

    setActivePanel(null);
  };

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      // Switch active panel
      if (event.which === KeyCode.TAB) {
        var nextActivePanel = getNextActive(event.shiftKey ? -1 : 1);
        setActivePanel(nextActivePanel);

        if (nextActivePanel) {
          event.preventDefault();
        }

        return true;
      } // Operate on current active panel

      if (activePanel) {
        var ref = activePanel === 'date' ? dateOperationRef : timeOperationRef;

        if (ref.current && ref.current.onKeyDown) {
          ref.current.onKeyDown(event);
        }

        return true;
      } // Switch first active panel if operate without panel

      if (
        [KeyCode.LEFT, KeyCode.RIGHT, KeyCode.UP, KeyCode.DOWN].includes(
          event.which,
        )
      ) {
        setActivePanel('date');
        return true;
      }

      return false;
    },
    onBlur: onBlur,
    onClose: onBlur,
  }; // ======================== Events ========================

  var onInternalSelect = function onInternalSelect(date, source) {
    var selectedDate = date;

    if (source === 'date' && !value && timeProps.defaultValue) {
      // Date with time defaultValue
      selectedDate = generateConfig.setHour(
        selectedDate,
        generateConfig.getHour(timeProps.defaultValue),
      );
      selectedDate = generateConfig.setMinute(
        selectedDate,
        generateConfig.getMinute(timeProps.defaultValue),
      );
      selectedDate = generateConfig.setSecond(
        selectedDate,
        generateConfig.getSecond(timeProps.defaultValue),
      );
    } else if (source === 'time' && !value && defaultValue) {
      selectedDate = generateConfig.setYear(
        selectedDate,
        generateConfig.getYear(defaultValue),
      );
      selectedDate = generateConfig.setMonth(
        selectedDate,
        generateConfig.getMonth(defaultValue),
      );
      selectedDate = generateConfig.setDate(
        selectedDate,
        generateConfig.getDate(defaultValue),
      );
    }

    if (onSelect) {
      onSelect(selectedDate, 'mouse');
    }
  }; // ======================== Render ========================

  var disabledTimes = disabledTime ? disabledTime(value || null) : {};
  return /*#__PURE__*/ react.createElement(
    'div',
    {
      className: classnames(
        panelPrefixCls,
        _defineProperty$1(
          {},
          ''.concat(panelPrefixCls, '-active'),
          activePanel,
        ),
      ),
    },
    /*#__PURE__*/ react.createElement(
      DatePanel,
      _extends({}, props, {
        operationRef: dateOperationRef,
        active: activePanel === 'date',
        onSelect: function onSelect(date) {
          onInternalSelect(
            setTime$1(
              generateConfig,
              date,
              showTime && _typeof$1(showTime) === 'object'
                ? showTime.defaultValue
                : null,
            ),
            'date',
          );
        },
      }),
    ),
    /*#__PURE__*/ react.createElement(
      TimePanel,
      _extends(
        {},
        props,
        {
          format: undefined,
        },
        timeProps,
        disabledTimes,
        {
          defaultValue: undefined,
          operationRef: timeOperationRef,
          active: activePanel === 'time',
          onSelect: function onSelect(date) {
            onInternalSelect(date, 'time');
          },
        },
      ),
    ),
  );
}

function WeekPanel(props) {
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    value = props.value; // Render additional column

  var cellPrefixCls = ''.concat(prefixCls, '-cell');

  var prefixColumn = function prefixColumn(date) {
    return /*#__PURE__*/ react.createElement(
      'td',
      {
        key: 'week',
        className: classnames(cellPrefixCls, ''.concat(cellPrefixCls, '-week')),
      },
      generateConfig.locale.getWeek(locale.locale, date),
    );
  }; // Add row className

  var rowPrefixCls = ''.concat(prefixCls, '-week-panel-row');

  var rowClassName = function rowClassName(date) {
    return classnames(
      rowPrefixCls,
      _defineProperty$1(
        {},
        ''.concat(rowPrefixCls, '-selected'),
        isSameWeek(generateConfig, locale.locale, value, date),
      ),
    );
  };

  return /*#__PURE__*/ react.createElement(
    DatePanel,
    _extends({}, props, {
      panelName: 'week',
      prefixColumn: prefixColumn,
      rowClassName: rowClassName,
      keyboardConfig: {
        onLeftRight: null,
      },
    }),
  );
}

function MonthHeader(props) {
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    viewDate = props.viewDate,
    onNextYear = props.onNextYear,
    onPrevYear = props.onPrevYear,
    onYearClick = props.onYearClick;

  var _React$useContext = react.useContext(PanelContext),
    hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = ''.concat(prefixCls, '-header');
  return /*#__PURE__*/ react.createElement(
    Header,
    _extends({}, props, {
      prefixCls: headerPrefixCls,
      onSuperPrev: onPrevYear,
      onSuperNext: onNextYear,
    }),
    /*#__PURE__*/ react.createElement(
      'button',
      {
        type: 'button',
        onClick: onYearClick,
        className: ''.concat(prefixCls, '-year-btn'),
      },
      formatValue(viewDate, {
        locale: locale,
        format: locale.yearFormat,
        generateConfig: generateConfig,
      }),
    ),
  );
}

var MONTH_COL_COUNT = 3;
var MONTH_ROW_COUNT = 4;

function MonthBody(props) {
  var prefixCls = props.prefixCls,
    locale = props.locale,
    value = props.value,
    viewDate = props.viewDate,
    generateConfig = props.generateConfig,
    monthCellRender = props.monthCellRender;

  var _React$useContext = react.useContext(RangeContext),
    rangedValue = _React$useContext.rangedValue,
    hoverRangedValue = _React$useContext.hoverRangedValue;

  var cellPrefixCls = ''.concat(prefixCls, '-cell');
  var getCellClassName = useCellClassName({
    cellPrefixCls: cellPrefixCls,
    value: value,
    generateConfig: generateConfig,
    rangedValue: rangedValue,
    hoverRangedValue: hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameMonth(generateConfig, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addMonth(date, offset);
    },
  });
  var monthsLocale =
    locale.shortMonths ||
    (generateConfig.locale.getShortMonths
      ? generateConfig.locale.getShortMonths(locale.locale)
      : []);
  var baseMonth = generateConfig.setMonth(viewDate, 0);
  var getCellNode = monthCellRender
    ? function (date) {
        return monthCellRender(date, locale);
      }
    : undefined;
  return /*#__PURE__*/ react.createElement(
    PanelBody,
    _extends({}, props, {
      rowNum: MONTH_ROW_COUNT,
      colNum: MONTH_COL_COUNT,
      baseDate: baseMonth,
      getCellNode: getCellNode,
      getCellText: function getCellText(date) {
        return locale.monthFormat
          ? formatValue(date, {
              locale: locale,
              format: locale.monthFormat,
              generateConfig: generateConfig,
            })
          : monthsLocale[generateConfig.getMonth(date)];
      },
      getCellClassName: getCellClassName,
      getCellDate: generateConfig.addMonth,
      titleCell: function titleCell(date) {
        return formatValue(date, {
          locale: locale,
          format: 'YYYY-MM',
          generateConfig: generateConfig,
        });
      },
    }),
  );
}

function MonthPanel(props) {
  var prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    onViewDateChange = props.onViewDateChange,
    generateConfig = props.generateConfig,
    value = props.value,
    viewDate = props.viewDate,
    onPanelChange = props.onPanelChange,
    _onSelect = props.onSelect;
  var panelPrefixCls = ''.concat(prefixCls, '-month-panel'); // ======================= Keyboard =======================

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(
            generateConfig.addMonth(value || viewDate, diff * MONTH_COL_COUNT),
            'key',
          );
        },
        onEnter: function onEnter() {
          onPanelChange('date', value || viewDate);
        },
      });
    },
  }; // ==================== View Operation ====================

  var onYearChange = function onYearChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  return /*#__PURE__*/ react.createElement(
    'div',
    {
      className: panelPrefixCls,
    },
    /*#__PURE__*/ react.createElement(
      MonthHeader,
      _extends({}, props, {
        prefixCls: prefixCls,
        onPrevYear: function onPrevYear() {
          onYearChange(-1);
        },
        onNextYear: function onNextYear() {
          onYearChange(1);
        },
        onYearClick: function onYearClick() {
          onPanelChange('year', viewDate);
        },
      }),
    ),
    /*#__PURE__*/ react.createElement(
      MonthBody,
      _extends({}, props, {
        prefixCls: prefixCls,
        onSelect: function onSelect(date) {
          _onSelect(date, 'mouse');

          onPanelChange('date', date);
        },
      }),
    ),
  );
}

function QuarterHeader(props) {
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    viewDate = props.viewDate,
    onNextYear = props.onNextYear,
    onPrevYear = props.onPrevYear,
    onYearClick = props.onYearClick;

  var _React$useContext = react.useContext(PanelContext),
    hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = ''.concat(prefixCls, '-header');
  return /*#__PURE__*/ react.createElement(
    Header,
    _extends({}, props, {
      prefixCls: headerPrefixCls,
      onSuperPrev: onPrevYear,
      onSuperNext: onNextYear,
    }),
    /*#__PURE__*/ react.createElement(
      'button',
      {
        type: 'button',
        onClick: onYearClick,
        className: ''.concat(prefixCls, '-year-btn'),
      },
      formatValue(viewDate, {
        locale: locale,
        format: locale.yearFormat,
        generateConfig: generateConfig,
      }),
    ),
  );
}

var QUARTER_COL_COUNT = 4;
var QUARTER_ROW_COUNT = 1;

function QuarterBody(props) {
  var prefixCls = props.prefixCls,
    locale = props.locale,
    value = props.value,
    viewDate = props.viewDate,
    generateConfig = props.generateConfig;

  var _React$useContext = react.useContext(RangeContext),
    rangedValue = _React$useContext.rangedValue,
    hoverRangedValue = _React$useContext.hoverRangedValue;

  var cellPrefixCls = ''.concat(prefixCls, '-cell');
  var getCellClassName = useCellClassName({
    cellPrefixCls: cellPrefixCls,
    value: value,
    generateConfig: generateConfig,
    rangedValue: rangedValue,
    hoverRangedValue: hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameQuarter(generateConfig, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addMonth(date, offset * 3);
    },
  });
  var baseQuarter = generateConfig.setDate(
    generateConfig.setMonth(viewDate, 0),
    1,
  );
  return /*#__PURE__*/ react.createElement(
    PanelBody,
    _extends({}, props, {
      rowNum: QUARTER_ROW_COUNT,
      colNum: QUARTER_COL_COUNT,
      baseDate: baseQuarter,
      getCellText: function getCellText(date) {
        return formatValue(date, {
          locale: locale,
          format: locale.quarterFormat || '[Q]Q',
          generateConfig: generateConfig,
        });
      },
      getCellClassName: getCellClassName,
      getCellDate: function getCellDate(date, offset) {
        return generateConfig.addMonth(date, offset * 3);
      },
      titleCell: function titleCell(date) {
        return formatValue(date, {
          locale: locale,
          format: 'YYYY-[Q]Q',
          generateConfig: generateConfig,
        });
      },
    }),
  );
}

function QuarterPanel(props) {
  var prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    onViewDateChange = props.onViewDateChange,
    generateConfig = props.generateConfig,
    value = props.value,
    viewDate = props.viewDate,
    onPanelChange = props.onPanelChange,
    _onSelect = props.onSelect;
  var panelPrefixCls = ''.concat(prefixCls, '-quarter-panel'); // ======================= Keyboard =======================

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(
            generateConfig.addMonth(value || viewDate, diff * 3),
            'key',
          );
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
      });
    },
  }; // ==================== View Operation ====================

  var onYearChange = function onYearChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  return /*#__PURE__*/ react.createElement(
    'div',
    {
      className: panelPrefixCls,
    },
    /*#__PURE__*/ react.createElement(
      QuarterHeader,
      _extends({}, props, {
        prefixCls: prefixCls,
        onPrevYear: function onPrevYear() {
          onYearChange(-1);
        },
        onNextYear: function onNextYear() {
          onYearChange(1);
        },
        onYearClick: function onYearClick() {
          onPanelChange('year', viewDate);
        },
      }),
    ),
    /*#__PURE__*/ react.createElement(
      QuarterBody,
      _extends({}, props, {
        prefixCls: prefixCls,
        onSelect: function onSelect(date) {
          _onSelect(date, 'mouse');
        },
      }),
    ),
  );
}

function YearHeader(props) {
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    viewDate = props.viewDate,
    onPrevDecade = props.onPrevDecade,
    onNextDecade = props.onNextDecade,
    onDecadeClick = props.onDecadeClick;

  var _React$useContext = react.useContext(PanelContext),
    hideHeader = _React$useContext.hideHeader;

  if (hideHeader) {
    return null;
  }

  var headerPrefixCls = ''.concat(prefixCls, '-header');
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear =
    Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  var endYear = startYear + YEAR_DECADE_COUNT - 1;
  return /*#__PURE__*/ react.createElement(
    Header,
    _extends({}, props, {
      prefixCls: headerPrefixCls,
      onSuperPrev: onPrevDecade,
      onSuperNext: onNextDecade,
    }),
    /*#__PURE__*/ react.createElement(
      'button',
      {
        type: 'button',
        onClick: onDecadeClick,
        className: ''.concat(prefixCls, '-decade-btn'),
      },
      startYear,
      '-',
      endYear,
    ),
  );
}

var YEAR_COL_COUNT = 3;
var YEAR_ROW_COUNT = 4;

function YearBody(props) {
  var prefixCls = props.prefixCls,
    value = props.value,
    viewDate = props.viewDate,
    locale = props.locale,
    generateConfig = props.generateConfig;

  var _React$useContext = react.useContext(RangeContext),
    rangedValue = _React$useContext.rangedValue,
    hoverRangedValue = _React$useContext.hoverRangedValue;

  var yearPrefixCls = ''.concat(prefixCls, '-cell'); // =============================== Year ===============================

  var yearNumber = generateConfig.getYear(viewDate);
  var startYear =
    Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  var endYear = startYear + YEAR_DECADE_COUNT - 1;
  var baseYear = generateConfig.setYear(
    viewDate,
    startYear -
      Math.ceil((YEAR_COL_COUNT * YEAR_ROW_COUNT - YEAR_DECADE_COUNT) / 2),
  );

  var isInView = function isInView(date) {
    var currentYearNumber = generateConfig.getYear(date);
    return startYear <= currentYearNumber && currentYearNumber <= endYear;
  };

  var getCellClassName = useCellClassName({
    cellPrefixCls: yearPrefixCls,
    value: value,
    generateConfig: generateConfig,
    rangedValue: rangedValue,
    hoverRangedValue: hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameYear(generateConfig, current, target);
    },
    isInView: isInView,
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addYear(date, offset);
    },
  });
  return /*#__PURE__*/ react.createElement(
    PanelBody,
    _extends({}, props, {
      rowNum: YEAR_ROW_COUNT,
      colNum: YEAR_COL_COUNT,
      baseDate: baseYear,
      getCellText: generateConfig.getYear,
      getCellClassName: getCellClassName,
      getCellDate: generateConfig.addYear,
      titleCell: function titleCell(date) {
        return formatValue(date, {
          locale: locale,
          format: 'YYYY',
          generateConfig: generateConfig,
        });
      },
    }),
  );
}

var YEAR_DECADE_COUNT = 10;

function YearPanel(props) {
  var prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    onViewDateChange = props.onViewDateChange,
    generateConfig = props.generateConfig,
    value = props.value,
    viewDate = props.viewDate,
    sourceMode = props.sourceMode,
    _onSelect = props.onSelect,
    onPanelChange = props.onPanelChange;
  var panelPrefixCls = ''.concat(prefixCls, '-year-panel'); // ======================= Keyboard =======================

  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(
            generateConfig.addYear(value || viewDate, diff * YEAR_DECADE_COUNT),
            'key',
          );
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(
            generateConfig.addYear(value || viewDate, diff * YEAR_COL_COUNT),
            'key',
          );
        },
        onEnter: function onEnter() {
          onPanelChange(
            sourceMode === 'date' ? 'date' : 'month',
            value || viewDate,
          );
        },
      });
    },
  }; // ==================== View Operation ====================

  var onDecadeChange = function onDecadeChange(diff) {
    var newDate = generateConfig.addYear(viewDate, diff * 10);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };

  return /*#__PURE__*/ react.createElement(
    'div',
    {
      className: panelPrefixCls,
    },
    /*#__PURE__*/ react.createElement(
      YearHeader,
      _extends({}, props, {
        prefixCls: prefixCls,
        onPrevDecade: function onPrevDecade() {
          onDecadeChange(-1);
        },
        onNextDecade: function onNextDecade() {
          onDecadeChange(1);
        },
        onDecadeClick: function onDecadeClick() {
          onPanelChange('decade', viewDate);
        },
      }),
    ),
    /*#__PURE__*/ react.createElement(
      YearBody,
      _extends({}, props, {
        prefixCls: prefixCls,
        onSelect: function onSelect(date) {
          onPanelChange(sourceMode === 'date' ? 'date' : 'month', date);

          _onSelect(date, 'mouse');
        },
      }),
    ),
  );
}

function getExtraFooter(prefixCls, mode, renderExtraFooter) {
  if (!renderExtraFooter) {
    return null;
  }

  return /*#__PURE__*/ react.createElement(
    'div',
    {
      className: ''.concat(prefixCls, '-footer-extra'),
    },
    renderExtraFooter(mode),
  );
}

function getRanges(_ref) {
  var prefixCls = _ref.prefixCls,
    _ref$rangeList = _ref.rangeList,
    rangeList = _ref$rangeList === void 0 ? [] : _ref$rangeList,
    _ref$components = _ref.components,
    components = _ref$components === void 0 ? {} : _ref$components,
    needConfirmButton = _ref.needConfirmButton,
    onNow = _ref.onNow,
    onOk = _ref.onOk,
    okDisabled = _ref.okDisabled,
    showNow = _ref.showNow,
    locale = _ref.locale;
  var presetNode;
  var okNode;

  if (rangeList.length) {
    var Item = components.rangeItem || 'span';
    presetNode = /*#__PURE__*/ react.createElement(
      react.Fragment,
      null,
      rangeList.map(function (_ref2) {
        var label = _ref2.label,
          onClick = _ref2.onClick,
          onMouseEnter = _ref2.onMouseEnter,
          onMouseLeave = _ref2.onMouseLeave;
        return /*#__PURE__*/ react.createElement(
          'li',
          {
            key: label,
            className: ''.concat(prefixCls, '-preset'),
          },
          /*#__PURE__*/ react.createElement(
            Item,
            {
              onClick: onClick,
              onMouseEnter: onMouseEnter,
              onMouseLeave: onMouseLeave,
            },
            label,
          ),
        );
      }),
    );
  }

  if (needConfirmButton) {
    var Button = components.button || 'button';

    if (onNow && !presetNode && showNow !== false) {
      presetNode = /*#__PURE__*/ react.createElement(
        'li',
        {
          className: ''.concat(prefixCls, '-now'),
        },
        /*#__PURE__*/ react.createElement(
          'a',
          {
            className: ''.concat(prefixCls, '-now-btn'),
            onClick: onNow,
          },
          locale.now,
        ),
      );
    }

    okNode =
      needConfirmButton &&
      /*#__PURE__*/ react.createElement(
        'li',
        {
          className: ''.concat(prefixCls, '-ok'),
        },
        /*#__PURE__*/ react.createElement(
          Button,
          {
            disabled: okDisabled,
            onClick: onOk,
          },
          locale.ok,
        ),
      );
  }

  if (!presetNode && !okNode) {
    return null;
  }

  return /*#__PURE__*/ react.createElement(
    'ul',
    {
      className: ''.concat(prefixCls, '-ranges'),
    },
    presetNode,
    okNode,
  );
}

function PickerPanel(props) {
  var _classNames;

  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-picker' : _props$prefixCls,
    className = props.className,
    style = props.style,
    locale = props.locale,
    generateConfig = props.generateConfig,
    value = props.value,
    defaultValue = props.defaultValue,
    pickerValue = props.pickerValue,
    defaultPickerValue = props.defaultPickerValue,
    disabledDate = props.disabledDate,
    mode = props.mode,
    _props$picker = props.picker,
    picker = _props$picker === void 0 ? 'date' : _props$picker,
    _props$tabIndex = props.tabIndex,
    tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
    showNow = props.showNow,
    showTime = props.showTime,
    showToday = props.showToday,
    renderExtraFooter = props.renderExtraFooter,
    hideHeader = props.hideHeader,
    onSelect = props.onSelect,
    onChange = props.onChange,
    onPanelChange = props.onPanelChange,
    onMouseDown = props.onMouseDown,
    onPickerValueChange = props.onPickerValueChange,
    _onOk = props.onOk,
    components = props.components,
    direction = props.direction,
    _props$hourStep = props.hourStep,
    hourStep = _props$hourStep === void 0 ? 1 : _props$hourStep,
    _props$minuteStep = props.minuteStep,
    minuteStep = _props$minuteStep === void 0 ? 1 : _props$minuteStep,
    _props$secondStep = props.secondStep,
    secondStep = _props$secondStep === void 0 ? 1 : _props$secondStep;
  var needConfirmButton =
    (picker === 'date' && !!showTime) || picker === 'time';
  var isHourStepValid = 24 % hourStep === 0;
  var isMinuteStepValid = 60 % minuteStep === 0;
  var isSecondStepValid = 60 % secondStep === 0;

  var panelContext = react.useContext(PanelContext);
  var operationRef = panelContext.operationRef,
    panelDivRef = panelContext.panelRef,
    onContextSelect = panelContext.onSelect,
    hideRanges = panelContext.hideRanges,
    defaultOpenValue = panelContext.defaultOpenValue;

  var _React$useContext = react.useContext(RangeContext),
    inRange = _React$useContext.inRange,
    panelPosition = _React$useContext.panelPosition,
    rangedValue = _React$useContext.rangedValue,
    hoverRangedValue = _React$useContext.hoverRangedValue;

  var panelRef = react.useRef({}); // Handle init logic

  var initRef = react.useRef(true); // Value

  var _useMergedState = useControlledState(null, {
      value: value,
      defaultValue: defaultValue,
      postState: function postState(val) {
        if (!val && defaultOpenValue && picker === 'time') {
          return defaultOpenValue;
        }

        return val;
      },
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setInnerValue = _useMergedState2[1]; // View date control

  var _useMergedState3 = useControlledState(null, {
      value: pickerValue,
      defaultValue: defaultPickerValue || mergedValue,
      postState: function postState(date) {
        return date || generateConfig.getNow();
      },
    }),
    _useMergedState4 = _slicedToArray(_useMergedState3, 2),
    viewDate = _useMergedState4[0],
    setInnerViewDate = _useMergedState4[1];

  var setViewDate = function setViewDate(date) {
    setInnerViewDate(date);

    if (onPickerValueChange) {
      onPickerValueChange(date);
    }
  }; // Panel control

  var getInternalNextMode = function getInternalNextMode(nextMode) {
    var getNextMode = PickerModeMap[picker];

    if (getNextMode) {
      return getNextMode(nextMode);
    }

    return nextMode;
  }; // Save panel is changed from which panel

  var _useMergedState5 = useControlledState(
      function () {
        if (picker === 'time') {
          return 'time';
        }

        return getInternalNextMode('date');
      },
      {
        value: mode,
      },
    ),
    _useMergedState6 = _slicedToArray(_useMergedState5, 2),
    mergedMode = _useMergedState6[0],
    setInnerMode = _useMergedState6[1];

  react.useEffect(
    function () {
      setInnerMode(picker);
    },
    [picker],
  );

  var _React$useState = react.useState(function () {
      return mergedMode;
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sourceMode = _React$useState2[0],
    setSourceMode = _React$useState2[1];

  var onInternalPanelChange = function onInternalPanelChange(
    newMode,
    viewValue,
  ) {
    var nextMode = getInternalNextMode(newMode || mergedMode);
    setSourceMode(mergedMode);
    setInnerMode(nextMode);

    if (
      onPanelChange &&
      (mergedMode !== nextMode || isEqual(generateConfig, viewDate, viewDate))
    ) {
      onPanelChange(viewValue, nextMode);
    }
  };

  var triggerSelect = function triggerSelect(date, type) {
    var forceTriggerSelect =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (mergedMode === picker || forceTriggerSelect) {
      setInnerValue(date);

      if (onSelect) {
        onSelect(date);
      }

      if (onContextSelect) {
        onContextSelect(date, type);
      }

      if (
        onChange &&
        !isEqual(generateConfig, date, mergedValue) &&
        !(disabledDate === null || disabledDate === void 0
          ? void 0
          : disabledDate(date))
      ) {
        onChange(date);
      }
    }
  }; // ========================= Interactive ==========================

  var onInternalKeyDown = function onInternalKeyDown(e) {
    if (panelRef.current && panelRef.current.onKeyDown) {
      if (
        [
          KeyCode.LEFT,
          KeyCode.RIGHT,
          KeyCode.UP,
          KeyCode.DOWN,
          KeyCode.PAGE_UP,
          KeyCode.PAGE_DOWN,
          KeyCode.ENTER,
        ].includes(e.which)
      ) {
        e.preventDefault();
      }

      return panelRef.current.onKeyDown(e);
    }
    /* istanbul ignore next */

    /* eslint-disable no-lone-blocks */

    {
      warningOnce(
        false,
        'Panel not correct handle keyDown event. Please help to fire issue about this.',
      );
      return false;
    }
    /* eslint-enable no-lone-blocks */
  };

  var onInternalBlur = function onInternalBlur(e) {
    if (panelRef.current && panelRef.current.onBlur) {
      panelRef.current.onBlur(e);
    }
  };

  if (operationRef && panelPosition !== 'right') {
    operationRef.current = {
      onKeyDown: onInternalKeyDown,
      onClose: function onClose() {
        if (panelRef.current && panelRef.current.onClose) {
          panelRef.current.onClose();
        }
      },
    };
  } // ============================ Effect ============================

  react.useEffect(
    function () {
      if (value && !initRef.current) {
        setInnerViewDate(value);
      }
    },
    [value],
  );
  react.useEffect(function () {
    initRef.current = false;
  }, []); // ============================ Panels ============================

  var panelNode;

  var pickerProps = _objectSpread2$1(
    _objectSpread2$1({}, props),
    {},
    {
      operationRef: panelRef,
      prefixCls: prefixCls,
      viewDate: viewDate,
      value: mergedValue,
      onViewDateChange: setViewDate,
      sourceMode: sourceMode,
      onPanelChange: onInternalPanelChange,
      disabledDate: disabledDate,
    },
  );

  delete pickerProps.onChange;
  delete pickerProps.onSelect;

  switch (mergedMode) {
    case 'decade':
      panelNode = /*#__PURE__*/ react.createElement(
        DecadePanel,
        _extends({}, pickerProps, {
          onSelect: function onSelect(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          },
        }),
      );
      break;

    case 'year':
      panelNode = /*#__PURE__*/ react.createElement(
        YearPanel,
        _extends({}, pickerProps, {
          onSelect: function onSelect(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          },
        }),
      );
      break;

    case 'month':
      panelNode = /*#__PURE__*/ react.createElement(
        MonthPanel,
        _extends({}, pickerProps, {
          onSelect: function onSelect(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          },
        }),
      );
      break;

    case 'quarter':
      panelNode = /*#__PURE__*/ react.createElement(
        QuarterPanel,
        _extends({}, pickerProps, {
          onSelect: function onSelect(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          },
        }),
      );
      break;

    case 'week':
      panelNode = /*#__PURE__*/ react.createElement(
        WeekPanel,
        _extends({}, pickerProps, {
          onSelect: function onSelect(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          },
        }),
      );
      break;

    case 'time':
      delete pickerProps.showTime;
      panelNode = /*#__PURE__*/ react.createElement(
        TimePanel,
        _extends(
          {},
          pickerProps,
          _typeof$1(showTime) === 'object' ? showTime : null,
          {
            onSelect: function onSelect(date, type) {
              setViewDate(date);
              triggerSelect(date, type);
            },
          },
        ),
      );
      break;

    default:
      if (showTime) {
        panelNode = /*#__PURE__*/ react.createElement(
          DatetimePanel,
          _extends({}, pickerProps, {
            onSelect: function onSelect(date, type) {
              setViewDate(date);
              triggerSelect(date, type);
            },
          }),
        );
      } else {
        panelNode = /*#__PURE__*/ react.createElement(
          DatePanel,
          _extends({}, pickerProps, {
            onSelect: function onSelect(date, type) {
              setViewDate(date);
              triggerSelect(date, type);
            },
          }),
        );
      }
  } // ============================ Footer ============================

  var extraFooter;
  var rangesNode;

  var onNow = function onNow() {
    var now = generateConfig.getNow();
    var lowerBoundTime = getLowerBoundTime(
      generateConfig.getHour(now),
      generateConfig.getMinute(now),
      generateConfig.getSecond(now),
      isHourStepValid ? hourStep : 1,
      isMinuteStepValid ? minuteStep : 1,
      isSecondStepValid ? secondStep : 1,
    );
    var adjustedNow = setTime(
      generateConfig,
      now,
      lowerBoundTime[0], // hour
      lowerBoundTime[1], // minute
      lowerBoundTime[2],
    );
    triggerSelect(adjustedNow, 'submit');
  };

  if (!hideRanges) {
    extraFooter = getExtraFooter(prefixCls, mergedMode, renderExtraFooter);
    rangesNode = getRanges({
      prefixCls: prefixCls,
      components: components,
      needConfirmButton: needConfirmButton,
      okDisabled: !mergedValue || (disabledDate && disabledDate(mergedValue)),
      locale: locale,
      showNow: showNow,
      onNow: needConfirmButton && onNow,
      onOk: function onOk() {
        if (mergedValue) {
          triggerSelect(mergedValue, 'submit', true);

          if (_onOk) {
            _onOk(mergedValue);
          }
        }
      },
    });
  }

  var todayNode;

  if (showToday && mergedMode === 'date' && picker === 'date' && !showTime) {
    var now = generateConfig.getNow();
    var todayCls = ''.concat(prefixCls, '-today-btn');
    var disabled = disabledDate && disabledDate(now);
    todayNode = /*#__PURE__*/ react.createElement(
      'a',
      {
        className: classnames(
          todayCls,
          disabled && ''.concat(todayCls, '-disabled'),
        ),
        'aria-disabled': disabled,
        onClick: function onClick() {
          if (!disabled) {
            triggerSelect(now, 'mouse', true);
          }
        },
      },
      locale.today,
    );
  }

  return /*#__PURE__*/ react.createElement(
    PanelContext.Provider,
    {
      value: _objectSpread2$1(
        _objectSpread2$1({}, panelContext),
        {},
        {
          mode: mergedMode,
          hideHeader:
            'hideHeader' in props ? hideHeader : panelContext.hideHeader,
          hidePrevBtn: inRange && panelPosition === 'right',
          hideNextBtn: inRange && panelPosition === 'left',
        },
      ),
    },
    /*#__PURE__*/ react.createElement(
      'div',
      {
        tabIndex: tabIndex,
        className: classnames(
          ''.concat(prefixCls, '-panel'),
          className,
          ((_classNames = {}),
          _defineProperty$1(
            _classNames,
            ''.concat(prefixCls, '-panel-has-range'),
            rangedValue && rangedValue[0] && rangedValue[1],
          ),
          _defineProperty$1(
            _classNames,
            ''.concat(prefixCls, '-panel-has-range-hover'),
            hoverRangedValue && hoverRangedValue[0] && hoverRangedValue[1],
          ),
          _defineProperty$1(
            _classNames,
            ''.concat(prefixCls, '-panel-rtl'),
            direction === 'rtl',
          ),
          _classNames),
        ),
        style: style,
        onKeyDown: onInternalKeyDown,
        onBlur: onInternalBlur,
        onMouseDown: onMouseDown,
        ref: panelDivRef,
      },
      panelNode,
      extraFooter || rangesNode || todayNode
        ? /*#__PURE__*/ react.createElement(
            'div',
            {
              className: ''.concat(prefixCls, '-footer'),
            },
            extraFooter,
            rangesNode,
            todayNode,
          )
        : null,
    ),
  );
}
/* eslint-enable */

function contains(root, n) {
  if (!root) {
    return false;
  }

  return root.contains(n);
}

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = reactDom.unstable_batchedUpdates
    ? function run(e) {
        reactDom.unstable_batchedUpdates(cb, e);
      }
    : cb;

  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }

  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback);
      }
    },
  };
}

var Portal = react.forwardRef(function (props, ref) {
  var didUpdate = props.didUpdate,
    getContainer = props.getContainer,
    children = props.children;
  var containerRef = react.useRef(); // Ref return nothing, only for wrapper check exist

  react.useImperativeHandle(ref, function () {
    return {};
  }); // Create container in client side with sync to avoid useEffect not get ref

  var initRef = react.useRef(false);

  if (!initRef.current && canUseDom()) {
    containerRef.current = getContainer();
    initRef.current = true;
  } // [Legacy] Used by `rc-trigger`

  react.useEffect(function () {
    didUpdate === null || didUpdate === void 0 ? void 0 : didUpdate(props);
  });
  react.useEffect(function () {
    return function () {
      var _containerRef$current, _containerRef$current2;

      // [Legacy] This should not be handle by Portal but parent PortalWrapper instead.
      // Since some component use `Portal` directly, we have to keep the logic here.
      (_containerRef$current = containerRef.current) === null ||
      _containerRef$current === void 0
        ? void 0
        : (_containerRef$current2 = _containerRef$current.parentNode) ===
            null || _containerRef$current2 === void 0
        ? void 0
        : _containerRef$current2.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current
    ? reactDom.createPortal(children, containerRef.current)
    : null;
});

function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }

  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return _objectSpread2$1(_objectSpread2$1({}, baseAlign), align);
}
function getAlignPopupClassName(
  builtinPlacements,
  prefixCls,
  align,
  isAlignPoint,
) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);

  for (var i = 0; i < placements.length; i += 1) {
    var placement = placements[i];

    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return ''.concat(prefixCls, '-placement-').concat(placement);
    }
  }

  return '';
}

var isMobile = function () {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }

  var agent = navigator.userAgent || navigator.vendor || window.opera;

  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
      agent,
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
      agent.substr(0, 4),
    )
  ) {
    return true;
  }

  return false;
};

function getMotion(_ref) {
  var prefixCls = _ref.prefixCls,
    motion = _ref.motion,
    animation = _ref.animation,
    transitionName = _ref.transitionName;

  if (motion) {
    return motion;
  }

  if (animation) {
    return {
      motionName: ''.concat(prefixCls, '-').concat(animation),
    };
  }

  if (transitionName) {
    return {
      motionName: transitionName,
    };
  }

  return null;
}

function Mask(props) {
  var prefixCls = props.prefixCls,
    visible = props.visible,
    zIndex = props.zIndex,
    mask = props.mask,
    maskMotion = props.maskMotion,
    maskAnimation = props.maskAnimation,
    maskTransitionName = props.maskTransitionName;

  if (!mask) {
    return null;
  }

  var motion = {};

  if (maskMotion || maskTransitionName || maskAnimation) {
    motion = _objectSpread2$1(
      {
        motionAppear: true,
      },
      getMotion({
        motion: maskMotion,
        prefixCls: prefixCls,
        transitionName: maskTransitionName,
        animation: maskAnimation,
      }),
    );
  }

  return /*#__PURE__*/ react.createElement(
    CSSMotion,
    Object.assign({}, motion, {
      visible: visible,
      removeOnLeave: true,
    }),
    function (_ref) {
      var className = _ref.className;
      return /*#__PURE__*/ react.createElement('div', {
        style: {
          zIndex: zIndex,
        },
        className: classnames(''.concat(prefixCls, '-mask'), className),
      });
    },
  );
}

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
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
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
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

var vendorPrefix;
var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-',
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }

  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }

  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix()
    ? ''.concat(getVendorPrefix(), 'TransitionProperty')
    : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix()
    ? ''.concat(getVendorPrefix(), 'Transform')
    : 'transform';
}
function setTransitionProperty(node, value) {
  var name = getTransitionName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform =
    style.getPropertyValue('transform') ||
    style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0),
    };
  }

  return {
    x: 0,
    y: 0,
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform =
    style.getPropertyValue('transform') ||
    style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var arr;
    var match2d = transform.match(matrix2d);

    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, 'matrix('.concat(arr.join(','), ')'));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, 'matrix3d('.concat(arr.join(','), ')'));
    }
  } else {
    setTransform(
      node,
      'translateX('
        .concat(xy.x, 'px) translateY(')
        .concat(xy.y, 'px) translateZ(0)'),
    );
  }
}

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605

function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line

  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;

  if (_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }

    return undefined;
  }

  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = ''.concat(value, 'px');
    }

    el.style[name] = value;
    return undefined;
  }

  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y,
  };
}

function getScroll(w, top) {
  var ret = w['page'.concat(top ? 'Y' : 'X', 'Offset')];
  var method = 'scroll'.concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */

function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }

  if (node.nodeType === 9) {
    return node;
  }

  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^('.concat(RE_NUM, ')(?!px)[a-z%]+$'), 'i');

var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }

  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle
    ? _getComputedStyle
    : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }

  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
} // 设置 elem 相对 elem.ownerDocument 的坐标

function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }

  var originalTransition = '';
  var originalOffset = getOffset(elem);

  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }

  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = ''.concat(presetH, 'px');
  }

  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = ''.concat(presetV, 'px');
  } // force relayout

  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};

  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];

      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }

  css(elem, originalStyle); // force relayout

  forceRelayout(elem);

  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }

  var ret = {};

  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);

      var _off = offset[_key] - originalOffset[_key];

      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }

  css(elem, ret);
}

function setTransform$1(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y,
  };

  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }

  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }

  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (
    option.useCssTransform &&
    getTransformName() in document.body.style
  ) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;

  for (j = 0; j < props.length; j++) {
    prop = props[j];

    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;

        if (prop === 'border') {
          cssProp = ''.concat(prop).concat(which[i], 'Width');
        } else {
          cssProp = prop + which[i];
        }

        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }

  return value;
}

var domUtils = {
  getParent: function getParent(element) {
    var parent = element;

    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);

    return parent;
  },
};
each(['Width', 'Height'], function (name) {
  domUtils['doc'.concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      d.documentElement['scroll'.concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      d.body['scroll'.concat(name)],
      domUtils['viewport'.concat(name)](d),
    );
  };

  domUtils['viewport'.concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client'.concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return (
      (doc.compatMode === 'CSS1Compat' && documentElementProp) ||
      (body && body[prop]) ||
      documentElementProp
    );
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, ex) {
  var extra = ex;

  if (isWindow(elem)) {
    return name === 'width'
      ? domUtils.viewportWidth(elem)
      : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width'
      ? domUtils.docWidth(elem)
      : domUtils.docHeight(elem);
  }

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue =
    name === 'width'
      ? elem.getBoundingClientRect().width
      : elem.getBoundingClientRect().height;
  getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;

  if (
    borderBoxValue === null ||
    borderBoxValue === undefined ||
    borderBoxValue <= 0
  ) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);

    if (
      cssBoxValue === null ||
      cssBoxValue === undefined ||
      Number(cssBoxValue) < 0
    ) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra

    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }

  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }

  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;

  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }

    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }

    return (
      val +
      (extra === PADDING_INDEX
        ? -getPBMWidth(elem, ['border'], which)
        : getPBMWidth(elem, ['margin'], which))
    );
  }

  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block',
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay() {
  for (
    var _len = arguments.length, args = new Array(_len), _key2 = 0;
    _key2 < _len;
    _key2++
  ) {
    args[_key2] = arguments[_key2];
  }

  var val;
  var elem = args[0]; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }

  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);

  domUtils['outer'.concat(first)] = function (el, includeMargin) {
    return (
      el &&
      getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX)
    );
  };

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;

    if (val !== undefined) {
      if (elem) {
        getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);

        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }

        return css(elem, name, val);
      }

      return undefined;
    }

    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }

  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }

    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i;
    var ret = {};

    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }

    var overflow = obj.overflow;

    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }

    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }

    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0,
};
mix(utils, domUtils);

/**
 * 得到会导致元素显示不全的祖先元素
 */

var getParent = utils.getParent;

function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  } // ie 这个也不是完全可行

  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法

  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html'
      ? null
      : getParent(element);
  }

  for (
    parent = getParent(element);
    parent && parent !== body && parent.nodeType !== 9;
    parent = getParent(parent)
  ) {
    positionStyle = utils.css(parent, 'position');

    if (positionStyle !== 'static') {
      return parent;
    }
  }

  return null;
}

var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;

  for (
    parent = getParent$1(element);
    parent && parent !== body;
    parent = getParent$1(parent)
  ) {
    var positionStyle = utils.css(parent, 'position');

    if (positionStyle === 'fixed') {
      return true;
    }
  }

  return false;
}

/**
 * 获得元素的显示部分的区域
 */

function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity,
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.

  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if (
      (navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
      // viewport. In some browsers, el.offsetParent may be
      // document.documentElement, so check for that too.
      el !== body &&
      el !== documentElement &&
      utils.css(el, 'overflow') !== 'visible'
    ) {
      var pos = utils.offset(el); // add border

      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(
        visibleRect.right, // consider area without scrollBar
        pos.left + el.clientWidth,
      );
      visibleRect.bottom = Math.min(
        visibleRect.bottom,
        pos.top + el.clientHeight,
      );
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }

    el = getOffsetParent(el);
  } // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601

  var originalPosition = null;

  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');

    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.

  var bodyStyle = window.getComputedStyle(body);

  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }

  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  } // Reset element position after calculate the visible area

  if (element.style) {
    element.style.position = originalPosition;
  }

  if (alwaysByViewport || isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 &&
    visibleRect.left >= 0 &&
    visibleRect.bottom > visibleRect.top &&
    visibleRect.right > visibleRect.left
    ? visibleRect
    : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height,
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  } // Left edge inside and right edge outside viewport, try to resize it.

  if (
    overflow.resizeWidth &&
    pos.left >= visibleRect.left &&
    pos.left + size.width > visibleRect.right
  ) {
    size.width -= pos.left + size.width - visibleRect.right;
  } // Right edge outside viewport, try to move it.

  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  } // Top edge outside viewport, try to move it.

  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  } // Top edge inside and bottom edge outside viewport, try to resize it.

  if (
    overflow.resizeHeight &&
    pos.top >= visibleRect.top &&
    pos.top + size.height > visibleRect.bottom
  ) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  } // Bottom edge outside viewport, try to move it.

  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return utils.mix(pos, size);
}

function getRegion(node) {
  var offset;
  var w;
  var h;

  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win),
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }

  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */
function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y,
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1]),
  };
}

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

function isFailX(elFuturePos, elRegion, visibleRect) {
  return (
    elFuturePos.left < visibleRect.left ||
    elFuturePos.left + elRegion.width > visibleRect.right
  );
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return (
    elFuturePos.top < visibleRect.top ||
    elFuturePos.top + elRegion.height > visibleRect.bottom
  );
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return (
    elFuturePos.left > visibleRect.right ||
    elFuturePos.left + elRegion.width < visibleRect.left
  );
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return (
    elFuturePos.top > visibleRect.bottom ||
    elFuturePos.top + elRegion.height < visibleRect.top
  );
}

function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(
      p.replace(reg, function (m) {
        return map[m];
      }),
    );
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n;

  if (/%$/.test(str)) {
    n = (parseInt(str.substring(0, str.length - 1), 10) / 100) * offsetLen;
  } else {
    n = parseInt(str, 10);
  }

  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}
/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */

function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport); // 当前节点可以被放置的显示区域

  var visibleRect = getVisibleRectForElement(source, alwaysByViewport); // 当前节点所占的区域, left/top/width/height

  var elRegion = getRegion(source); // 将 offset 转换成数值，支持百分比

  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置

  var elFuturePos = getElFuturePos(
    elRegion,
    tgtRegion,
    points,
    offset,
    targetOffset,
  ); // 当前节点将要所处的区域

  var newElRegion = utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整

  if (
    visibleRect &&
    (overflow.adjustX || overflow.adjustY) &&
    isTgtRegionVisible
  ) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l',
        }); // 偏移量也反下

        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(
          elRegion,
          tgtRegion,
          newPoints,
          newOffset,
          newTargetOffset,
        );

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't',
        }); // 偏移量也反下

        var _newOffset = flipOffset(offset, 1);

        var _newTargetOffset = flipOffset(targetOffset, 1);

        var _newElFuturePos = getElFuturePos(
          elRegion,
          tgtRegion,
          _newPoints,
          _newOffset,
          _newTargetOffset,
        );

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    } // 如果失败，重新计算当前节点将要被放置的位置

    if (fail) {
      elFuturePos = getElFuturePos(
        elRegion,
        tgtRegion,
        points,
        offset,
        targetOffset,
      );
      utils.mix(newElRegion, elFuturePos);
    }

    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数

    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points; // 重置对应部分的翻转逻辑

      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l',
        });
      }

      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't',
        });
      }

      points = _newPoints2;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    } // 2. 只有指定了可以调整当前方向才调整

    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度

    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(
        elFuturePos,
        elRegion,
        visibleRect,
        newOverflowCfg,
      );
    }
  } // need judge to in case set fixed with in css on height auto element

  if (newElRegion.width !== elRegion.width) {
    utils.css(
      source,
      'width',
      utils.width(source) + newElRegion.width - elRegion.width,
    );
  }

  if (newElRegion.height !== elRegion.height) {
    utils.css(
      source,
      'height',
      utils.height(source) + newElRegion.height - elRegion.height,
    );
  } // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>

  utils.offset(
    source,
    {
      left: newElRegion.left,
      top: newElRegion.top,
    },
    {
      useCssRight: align.useCssRight,
      useCssBottom: align.useCssBottom,
      useCssTransform: align.useCssTransform,
      ignoreShake: align.ignoreShake,
    },
  );
  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg,
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return (
    !visibleRect ||
    targetRegion.left + targetRegion.width <= visibleRect.left ||
    targetRegion.top + targetRegion.height <= visibleRect.top ||
    targetRegion.left >= visibleRect.right ||
    targetRegion.top >= visibleRect.bottom
  );
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(
    target,
    align.overflow && align.overflow.alwaysByViewport,
  );
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;

/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0,
  };
  var pointInView =
    pageX >= 0 &&
    pageX <= scrollX + viewportWidth &&
    pageY >= 0 &&
    pageY <= scrollY + viewportHeight; // Provide default target point

  var points = [align.points[0], 'cc'];
  return doAlign(
    el,
    tgtRegion,
    _objectSpread2({}, align, {
      points: points,
    }),
    pointInView,
  );
}

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
  if (typeof Map !== 'undefined') {
    return Map;
  }
  /**
   * Returns index in provided array that matches the specified key.
   *
   * @param {Array<Array>} arr
   * @param {*} key
   * @returns {number}
   */
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function (entry, index) {
      if (entry[0] === key) {
        result = index;
        return true;
      }
      return false;
    });
    return result;
  }
  return /** @class */ (function () {
    function class_1() {
      this.__entries__ = [];
    }
    Object.defineProperty(class_1.prototype, 'size', {
      /**
       * @returns {boolean}
       */
      get: function () {
        return this.__entries__.length;
      },
      enumerable: true,
      configurable: true,
    });
    /**
     * @param {*} key
     * @returns {*}
     */
    class_1.prototype.get = function (key) {
      var index = getIndex(this.__entries__, key);
      var entry = this.__entries__[index];
      return entry && entry[1];
    };
    /**
     * @param {*} key
     * @param {*} value
     * @returns {void}
     */
    class_1.prototype.set = function (key, value) {
      var index = getIndex(this.__entries__, key);
      if (~index) {
        this.__entries__[index][1] = value;
      } else {
        this.__entries__.push([key, value]);
      }
    };
    /**
     * @param {*} key
     * @returns {void}
     */
    class_1.prototype.delete = function (key) {
      var entries = this.__entries__;
      var index = getIndex(entries, key);
      if (~index) {
        entries.splice(index, 1);
      }
    };
    /**
     * @param {*} key
     * @returns {void}
     */
    class_1.prototype.has = function (key) {
      return !!~getIndex(this.__entries__, key);
    };
    /**
     * @returns {void}
     */
    class_1.prototype.clear = function () {
      this.__entries__.splice(0);
    };
    /**
     * @param {Function} callback
     * @param {*} [ctx=null]
     * @returns {void}
     */
    class_1.prototype.forEach = function (callback, ctx) {
      if (ctx === void 0) {
        ctx = null;
      }
      for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
        var entry = _a[_i];
        callback.call(ctx, entry[1], entry[0]);
      }
    };
    return class_1;
  })();
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser =
  typeof window !== 'undefined' &&
  typeof document !== 'undefined' &&
  window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
  if (typeof global !== 'undefined' && global.Math === Math) {
    return global;
  }
  if (typeof self !== 'undefined' && self.Math === Math) {
    return self;
  }
  if (typeof window !== 'undefined' && window.Math === Math) {
    return window;
  }
  // eslint-disable-next-line no-new-func
  return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
  if (typeof requestAnimationFrame === 'function') {
    // It's required to use a bounded function because IE sometimes throws
    // an "Invalid calling object" error if rAF is invoked without the global
    // object on the left hand side.
    return requestAnimationFrame.bind(global$1);
  }
  return function (callback) {
    return setTimeout(function () {
      return callback(Date.now());
    }, 1000 / 60);
  };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle(callback, delay) {
  var leadingCall = false,
    trailingCall = false,
    lastCallTime = 0;
  /**
   * Invokes the original callback function and schedules new invocation if
   * the "proxy" was called during current request.
   *
   * @returns {void}
   */
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  /**
   * Callback invoked after the specified delay. It will further postpone
   * invocation of the original function delegating it to the
   * requestAnimationFrame.
   *
   * @returns {void}
   */
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  /**
   * Schedules invocation of the original function.
   *
   * @returns {void}
   */
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      // Reject immediately following calls.
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      // Schedule new call to be in invoked when the pending one is resolved.
      // This is important for "transitions" which never actually start
      // immediately so there is a chance that we might miss one if change
      // happens amids the pending invocation.
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = [
  'top',
  'right',
  'bottom',
  'left',
  'width',
  'height',
  'size',
  'weight',
];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
  /**
   * Creates a new instance of ResizeObserverController.
   *
   * @private
   */
  function ResizeObserverController() {
    /**
     * Indicates whether DOM listeners have been added.
     *
     * @private {boolean}
     */
    this.connected_ = false;
    /**
     * Tells that controller has subscribed for Mutation Events.
     *
     * @private {boolean}
     */
    this.mutationEventsAdded_ = false;
    /**
     * Keeps reference to the instance of MutationObserver.
     *
     * @private {MutationObserver}
     */
    this.mutationsObserver_ = null;
    /**
     * A list of connected observers.
     *
     * @private {Array<ResizeObserverSPI>}
     */
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  /**
   * Adds observer to observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be added.
   * @returns {void}
   */
  ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    }
    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
      this.connect_();
    }
  };
  /**
   * Removes observer from observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be removed.
   * @returns {void}
   */
  ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);
    // Remove observer if it's present in registry.
    if (~index) {
      observers.splice(index, 1);
    }
    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
      this.disconnect_();
    }
  };
  /**
   * Invokes the update of observers. It will continue running updates insofar
   * it detects changes.
   *
   * @returns {void}
   */
  ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();
    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
      this.refresh();
    }
  };
  /**
   * Updates every observer from observers list and notifies them of queued
   * entries.
   *
   * @private
   * @returns {boolean} Returns "true" if any observer has detected changes in
   *      dimensions of it's elements.
   */
  ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
      return observer.gatherActive(), observer.hasActive();
    });
    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  /**
   * Initializes DOM listeners.
   *
   * @private
   * @returns {void}
   */
  ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
      return;
    }
    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);
    window.addEventListener('resize', this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true,
      });
    } else {
      document.addEventListener('DOMSubtreeModified', this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  /**
   * Removes DOM listeners.
   *
   * @private
   * @returns {void}
   */
  ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
      return;
    }
    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);
    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }
    if (this.mutationEventsAdded_) {
      document.removeEventListener('DOMSubtreeModified', this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  /**
   * "Transitionend" event handler.
   *
   * @private
   * @param {TransitionEvent} event
   * @returns {void}
   */
  ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
    var _b = _a.propertyName,
      propertyName = _b === void 0 ? '' : _b;
    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
      return !!~propertyName.indexOf(key);
    });
    if (isReflowProperty) {
      this.refresh();
    }
  };
  /**
   * Returns instance of the ResizeObserverController.
   *
   * @returns {ResizeObserverController}
   */
  ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController();
    }
    return this.instance_;
  };
  /**
   * Holds reference to the controller's instance.
   *
   * @private {ResizeObserverController}
   */
  ResizeObserverController.instance_ = null;
  return ResizeObserverController;
})();

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = function (target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true,
    });
  }
  return target;
};

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = function (target) {
  // Assume that the element is an instance of Node, which means that it
  // has the "ownerDocument" property from which we can retrieve a
  // corresponding global object.
  var ownerGlobal =
    target && target.ownerDocument && target.ownerDocument.defaultView;
  // Return the local global object if it's not possible extract one from
  // provided element.
  return ownerGlobal || global$1;
};

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
  return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function (size, position) {
    var value = styles['border-' + position + '-width'];
    return size + toFloat(value);
  }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
  var positions = ['top', 'right', 'bottom', 'left'];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles['padding-' + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
  // Client width & height properties can't be
  // used exclusively as they provide rounded values.
  var clientWidth = target.clientWidth,
    clientHeight = target.clientHeight;
  // By this condition we can catch all non-replaced inline, hidden and
  // detached elements. Though elements with width & height properties less
  // than 0.5 will be discarded as well.
  //
  // Without it we would need to implement separate methods for each of
  // those cases and it's not possible to perform a precise and performance
  // effective test for hidden elements. E.g. even jQuery's ':visible' filter
  // gives wrong results for elements with width & height less than 0.5.
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  // Computed styles of width & height are being used because they are the
  // only dimensions available to JS that contain non-rounded values. It could
  // be possible to utilize the getBoundingClientRect if only it's data wasn't
  // affected by CSS transformations let alone paddings, borders and scroll bars.
  var width = toFloat(styles.width),
    height = toFloat(styles.height);
  // Width & height include paddings and borders when the 'border-box' box
  // model is applied (except for IE).
  if (styles.boxSizing === 'border-box') {
    // Following conditions are required to handle Internet Explorer which
    // doesn't include paddings and borders to computed CSS dimensions.
    //
    // We can say that if CSS dimensions + paddings are equal to the "client"
    // properties then it's either IE, and thus we don't need to subtract
    // anything, or an element merely doesn't have paddings/borders styles.
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, 'left', 'right') + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
    }
  }
  // Following steps can't be applied to the document's root element as its
  // client[Width/Height] properties represent viewport area of the window.
  // Besides, it's as well not necessary as the <html> itself neither has
  // rendered scroll bars nor it can be clipped.
  if (!isDocumentElement(target)) {
    // In some browsers (only in Firefox, actually) CSS width & height
    // include scroll bars size which can be removed at this step as scroll
    // bars are the only difference between rounded dimensions + paddings
    // and "client" properties, though that is not always true in Chrome.
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    // Chrome has a rather weird rounding of "client" properties.
    // E.g. for an element with content width of 314.2px it sometimes gives
    // the client width of 315px and for the width of 314.7px it may give
    // 314px. And it doesn't happen all the time. So just ignore this delta
    // as a non-relevant.
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
  // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
  // interface.
  if (typeof SVGGraphicsElement !== 'undefined') {
    return function (target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  // If it's so, then check that element is at least an instance of the
  // SVGElement and that it has the "getBBox" method.
  // eslint-disable-next-line no-extra-parens
  return function (target) {
    return (
      target instanceof getWindowOf(target).SVGElement &&
      typeof target.getBBox === 'function'
    );
  };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
  var x = _a.x,
    y = _a.y,
    width = _a.width,
    height = _a.height;
  // If DOMRectReadOnly is available use it as a prototype for the rectangle.
  var Constr =
    typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  // Rectangle's properties are not writable and non-enumerable.
  defineConfigurable(rect, {
    x: x,
    y: y,
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x,
  });
  return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
  return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
  /**
   * Creates an instance of ResizeObservation.
   *
   * @param {Element} target - Element to be observed.
   */
  function ResizeObservation(target) {
    /**
     * Broadcasted width of content rectangle.
     *
     * @type {number}
     */
    this.broadcastWidth = 0;
    /**
     * Broadcasted height of content rectangle.
     *
     * @type {number}
     */
    this.broadcastHeight = 0;
    /**
     * Reference to the last observed content rectangle.
     *
     * @private {DOMRectInit}
     */
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  /**
   * Updates content rectangle and tells whether it's width or height properties
   * have changed since the last broadcast.
   *
   * @returns {boolean}
   */
  ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return (
      rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight
    );
  };
  /**
   * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
   * from the corresponding properties of the last observed content rectangle.
   *
   * @returns {DOMRectInit} Last observed content rectangle.
   */
  ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  return ResizeObservation;
})();

var ResizeObserverEntry = /** @class */ (function () {
  /**
   * Creates an instance of ResizeObserverEntry.
   *
   * @param {Element} target - Element that is being observed.
   * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
   */
  function ResizeObserverEntry(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);
    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
  }
  return ResizeObserverEntry;
})();

var ResizeObserverSPI = /** @class */ (function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback function that is invoked
   *      when one of the observed elements changes it's content dimensions.
   * @param {ResizeObserverController} controller - Controller instance which
   *      is responsible for the updates of observer.
   * @param {ResizeObserver} callbackCtx - Reference to the public
   *      ResizeObserver instance which will be passed to callback function.
   */
  function ResizeObserverSPI(callback, controller, callbackCtx) {
    /**
     * Collection of resize observations that have detected changes in dimensions
     * of elements.
     *
     * @private {Array<ResizeObservation>}
     */
    this.activeObservations_ = [];
    /**
     * Registry of the ResizeObservation instances.
     *
     * @private {Map<Element, ResizeObservation>}
     */
    this.observations_ = new MapShim();
    if (typeof callback !== 'function') {
      throw new TypeError(
        'The callback provided as parameter 1 is not a function.',
      );
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  /**
   * Starts observing provided element.
   *
   * @param {Element} target - Element to be observed.
   * @returns {void}
   */
  ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }
    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    // Do nothing if element is already being observed.
    if (observations.has(target)) {
      return;
    }
    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this);
    // Force the update of observations.
    this.controller_.refresh();
  };
  /**
   * Stops observing provided element.
   *
   * @param {Element} target - Element to stop observing.
   * @returns {void}
   */
  ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }
    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
      return;
    }
    observations.delete(target);
    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  /**
   * Stops observing all elements.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  /**
   * Collects observation instances the associated element of which has changed
   * it's content rectangle.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.gatherActive = function () {
    var _this = this;
    this.clearActive();
    this.observations_.forEach(function (observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  /**
   * Invokes initial callback function with a list of ResizeObserverEntry
   * instances collected from active resize observations.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
      return;
    }
    var ctx = this.callbackCtx_;
    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
      return new ResizeObserverEntry(
        observation.target,
        observation.broadcastRect(),
      );
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  /**
   * Clears the collection of active observations.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
  };
  /**
   * Tells whether observer has active observations.
   *
   * @returns {boolean}
   */
  ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
  };
  return ResizeObserverSPI;
})();

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback that is invoked when
   *      dimensions of the observed elements change.
   */
  function ResizeObserver(callback) {
    if (!(this instanceof ResizeObserver)) {
      throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }
    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver;
})();
// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
  ResizeObserver.prototype[method] = function () {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});

var index = (function () {
  // Export existing implementation if available.
  if (typeof global$1.ResizeObserver !== 'undefined') {
    return global$1.ResizeObserver;
  }
  return ResizeObserver;
})();

function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}
function restoreFocus(activeElement, container) {
  // Focus back if is in the container
  if (
    activeElement !== document.activeElement &&
    contains(container, activeElement) &&
    typeof activeElement.focus === 'function'
  ) {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;

  function onResize(_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      target = _ref2[0].target;

    if (!document.documentElement.contains(target)) return;

    var _target$getBoundingCl = target.getBoundingClientRect(),
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;

    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);

    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      // https://webkit.org/blog/9997/resizeobserver-in-webkit/
      Promise.resolve().then(function () {
        callback({
          width: fixedWidth,
          height: fixedHeight,
        });
      });
    }

    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }

  var resizeObserver = new index(onResize);

  if (element) {
    resizeObserver.observe(element);
  }

  return function () {
    resizeObserver.disconnect();
  };
}

var useBuffer = function (callback, buffer) {
  var calledRef = react.useRef(false);
  var timeoutRef = react.useRef(null);

  function cancelTrigger() {
    window.clearTimeout(timeoutRef.current);
  }

  function trigger(force) {
    if (!calledRef.current || force === true) {
      if (callback() === false) {
        // Not delay since callback cancelled self
        return;
      }

      calledRef.current = true;
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
      }, buffer);
    } else {
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
        trigger();
      }, buffer);
    }
  }

  return [
    trigger,
    function () {
      calledRef.current = false;
      cancelTrigger();
    },
  ];
};

function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}

function getPoint(point) {
  if (_typeof$1(point) !== 'object' || !point) return null;
  return point;
}

var Align = function Align(_ref, ref) {
  var children = _ref.children,
    disabled = _ref.disabled,
    target = _ref.target,
    align = _ref.align,
    onAlign = _ref.onAlign,
    monitorWindowResize = _ref.monitorWindowResize,
    _ref$monitorBufferTim = _ref.monitorBufferTime,
    monitorBufferTime =
      _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
  var cacheRef = react.useRef({});
  var nodeRef = react.useRef();
  var childNode = react.Children.only(children); // ===================== Align ======================
  // We save the props here to avoid closure makes props ood

  var forceAlignPropsRef = react.useRef({});
  forceAlignPropsRef.current.disabled = disabled;
  forceAlignPropsRef.current.target = target;
  forceAlignPropsRef.current.onAlign = onAlign;

  var _useBuffer = useBuffer(function () {
      var _forceAlignPropsRef$c = forceAlignPropsRef.current,
        latestDisabled = _forceAlignPropsRef$c.disabled,
        latestTarget = _forceAlignPropsRef$c.target,
        latestOnAlign = _forceAlignPropsRef$c.onAlign;

      if (!latestDisabled && latestTarget) {
        var source = nodeRef.current;
        var result;
        var element = getElement(latestTarget);
        var point = getPoint(latestTarget);
        cacheRef.current.element = element;
        cacheRef.current.point = point; // IE lose focus after element realign
        // We should record activeElement and restore later

        var _document = document,
          activeElement = _document.activeElement; // We only align when element is visible

        if (element && isVisible(element)) {
          result = alignElement(source, element, align);
        } else if (point) {
          result = alignPoint(source, point, align);
        }

        restoreFocus(activeElement, source);

        if (latestOnAlign && result) {
          latestOnAlign(source, result);
        }

        return true;
      }

      return false;
    }, monitorBufferTime),
    _useBuffer2 = _slicedToArray(_useBuffer, 2),
    _forceAlign = _useBuffer2[0],
    cancelForceAlign = _useBuffer2[1]; // ===================== Effect =====================
  // Listen for target updated

  var resizeMonitor = react.useRef({
    cancel: function cancel() {},
  }); // Listen for source updated

  var sourceResizeMonitor = react.useRef({
    cancel: function cancel() {},
  });
  react.useEffect(function () {
    var element = getElement(target);
    var point = getPoint(target);

    if (nodeRef.current !== sourceResizeMonitor.current.element) {
      sourceResizeMonitor.current.cancel();
      sourceResizeMonitor.current.element = nodeRef.current;
      sourceResizeMonitor.current.cancel = monitorResize(
        nodeRef.current,
        _forceAlign,
      );
    }

    if (
      cacheRef.current.element !== element ||
      !isSamePoint(cacheRef.current.point, point)
    ) {
      _forceAlign(); // Add resize observer

      if (resizeMonitor.current.element !== element) {
        resizeMonitor.current.cancel();
        resizeMonitor.current.element = element;
        resizeMonitor.current.cancel = monitorResize(element, _forceAlign);
      }
    }
  }); // Listen for disabled change

  react.useEffect(
    function () {
      if (!disabled) {
        _forceAlign();
      } else {
        cancelForceAlign();
      }
    },
    [disabled],
  ); // Listen for window resize

  var winResizeRef = react.useRef(null);
  react.useEffect(
    function () {
      if (monitorWindowResize) {
        if (!winResizeRef.current) {
          winResizeRef.current = addEventListenerWrap(
            window,
            'resize',
            _forceAlign,
          );
        }
      } else if (winResizeRef.current) {
        winResizeRef.current.remove();
        winResizeRef.current = null;
      }
    },
    [monitorWindowResize],
  ); // Clear all if unmount

  react.useEffect(function () {
    return function () {
      resizeMonitor.current.cancel();
      sourceResizeMonitor.current.cancel();
      if (winResizeRef.current) winResizeRef.current.remove();
      cancelForceAlign();
    };
  }, []); // ====================== Ref =======================

  react.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      },
    };
  }); // ===================== Render =====================

  if (react.isValidElement(childNode)) {
    childNode = react.cloneElement(childNode, {
      ref: composeRef(childNode.ref, nodeRef),
    });
  }

  return childNode;
};

var RefAlign = react.forwardRef(Align);
RefAlign.displayName = 'Align';

var StatusQueue = ['measure', 'align', null, 'motion'];
var useVisibleStatus = function (visible, doMeasure) {
  var _useState = react.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    status = _useState2[0],
    setStatus = _useState2[1];

  var rafRef = react.useRef();

  function cancelRaf() {
    wrapperRaf.cancel(rafRef.current);
  }

  function goNextStatus(callback) {
    cancelRaf();
    rafRef.current = wrapperRaf(function () {
      // Only align should be manually trigger
      setStatus(function (prev) {
        switch (status) {
          case 'align':
            return 'motion';

          case 'motion':
            return 'stable';
        }

        return prev;
      });
      callback === null || callback === void 0 ? void 0 : callback();
    });
  } // Init status

  react.useEffect(
    function () {
      setStatus('measure');
    },
    [visible],
  ); // Go next status

  react.useEffect(
    function () {
      switch (status) {
        case 'measure':
          doMeasure();
          break;
      }

      if (status) {
        cancelRaf();
        rafRef.current = wrapperRaf(
          /*#__PURE__*/ _asyncToGenerator(
            /*#__PURE__*/ regenerator.mark(function _callee() {
              var index, nextStatus;
              return regenerator.wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      index = StatusQueue.indexOf(status);
                      nextStatus = StatusQueue[index + 1];

                      if (nextStatus && index !== -1) {
                        setStatus(nextStatus);
                      }

                    case 3:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee);
            }),
          ),
        );
      }
    },
    [status],
  );
  react.useEffect(function () {
    return function () {
      cancelRaf();
    };
  }, []);
  return [status, goNextStatus];
};

var useStretchStyle = function (stretch) {
  var _React$useState = react.useState({
      width: 0,
      height: 0,
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    targetSize = _React$useState2[0],
    setTargetSize = _React$useState2[1];

  function measureStretch(element) {
    setTargetSize({
      width: element.offsetWidth,
      height: element.offsetHeight,
    });
  } // Merge stretch style

  var style = react.useMemo(
    function () {
      var sizeStyle = {};

      if (stretch) {
        var width = targetSize.width,
          height = targetSize.height; // Stretch with target

        if (stretch.indexOf('height') !== -1 && height) {
          sizeStyle.height = height;
        } else if (stretch.indexOf('minHeight') !== -1 && height) {
          sizeStyle.minHeight = height;
        }

        if (stretch.indexOf('width') !== -1 && width) {
          sizeStyle.width = width;
        } else if (stretch.indexOf('minWidth') !== -1 && width) {
          sizeStyle.minWidth = width;
        }
      }

      return sizeStyle;
    },
    [stretch, targetSize],
  );
  return [style, measureStretch];
};

var PopupInner = /*#__PURE__*/ react.forwardRef(function (props, ref) {
  var visible = props.visible,
    prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    children = props.children,
    zIndex = props.zIndex,
    stretch = props.stretch,
    destroyPopupOnHide = props.destroyPopupOnHide,
    align = props.align,
    point = props.point,
    getRootDomNode = props.getRootDomNode,
    getClassNameFromAlign = props.getClassNameFromAlign,
    onAlign = props.onAlign,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onMouseDown = props.onMouseDown,
    onTouchStart = props.onTouchStart;
  var alignRef = react.useRef();
  var elementRef = react.useRef();

  var _useState = react.useState(),
    _useState2 = _slicedToArray(_useState, 2),
    alignedClassName = _useState2[0],
    setAlignedClassName = _useState2[1]; // ======================= Measure ========================

  var _useStretchStyle = useStretchStyle(stretch),
    _useStretchStyle2 = _slicedToArray(_useStretchStyle, 2),
    stretchStyle = _useStretchStyle2[0],
    measureStretchStyle = _useStretchStyle2[1];

  function doMeasure() {
    if (stretch) {
      measureStretchStyle(getRootDomNode());
    }
  } // ======================== Status ========================

  var _useVisibleStatus = useVisibleStatus(visible, doMeasure),
    _useVisibleStatus2 = _slicedToArray(_useVisibleStatus, 2),
    status = _useVisibleStatus2[0],
    goNextStatus = _useVisibleStatus2[1]; // ======================== Aligns ========================

  var prepareResolveRef = react.useRef(); // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align

  function getAlignTarget() {
    if (point) {
      return point;
    }

    return getRootDomNode;
  }

  function forceAlign() {
    var _alignRef$current;

    (_alignRef$current = alignRef.current) === null ||
    _alignRef$current === void 0
      ? void 0
      : _alignRef$current.forceAlign();
  }

  function onInternalAlign(popupDomNode, matchAlign) {
    if (status === 'align') {
      var nextAlignedClassName = getClassNameFromAlign(matchAlign);
      setAlignedClassName(nextAlignedClassName); // Repeat until not more align needed

      if (alignedClassName !== nextAlignedClassName) {
        Promise.resolve().then(function () {
          forceAlign();
        });
      } else {
        goNextStatus(function () {
          var _prepareResolveRef$cu;

          (_prepareResolveRef$cu = prepareResolveRef.current) === null ||
          _prepareResolveRef$cu === void 0
            ? void 0
            : _prepareResolveRef$cu.call(prepareResolveRef);
        });
      }

      onAlign === null || onAlign === void 0
        ? void 0
        : onAlign(popupDomNode, matchAlign);
    }
  } // ======================== Motion ========================

  var motion = _objectSpread2$1({}, getMotion(props));

  ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (eventName) {
    var originHandler = motion[eventName];

    motion[eventName] = function (element, event) {
      goNextStatus();
      return originHandler === null || originHandler === void 0
        ? void 0
        : originHandler(element, event);
    };
  });

  function onShowPrepare() {
    return new Promise(function (resolve) {
      prepareResolveRef.current = resolve;
    });
  } // Go to stable directly when motion not provided

  react.useEffect(
    function () {
      if (!motion.motionName && status === 'motion') {
        goNextStatus();
      }
    },
    [motion.motionName, status],
  ); // ========================= Refs =========================

  react.useImperativeHandle(ref, function () {
    return {
      forceAlign: forceAlign,
      getElement: function getElement() {
        return elementRef.current;
      },
    };
  }); // ======================== Render ========================

  var mergedStyle = _objectSpread2$1(
    _objectSpread2$1(
      _objectSpread2$1({}, stretchStyle),
      {},
      {
        zIndex: zIndex,
      },
      style,
    ),
    {},
    {
      opacity:
        status === 'motion' || status === 'stable' || !visible ? undefined : 0,
      pointerEvents: status === 'stable' ? undefined : 'none',
    },
  ); // Align status

  var alignDisabled = true;

  if (
    (align === null || align === void 0 ? void 0 : align.points) &&
    (status === 'align' || status === 'stable')
  ) {
    alignDisabled = false;
  }

  var childNode = children; // Wrapper when multiple children

  if (react.Children.count(children) > 1) {
    childNode = /*#__PURE__*/ react.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-content'),
      },
      children,
    );
  }

  return /*#__PURE__*/ react.createElement(
    CSSMotion,
    Object.assign(
      {
        visible: visible,
        ref: elementRef,
        leavedClassName: ''.concat(prefixCls, '-hidden'),
      },
      motion,
      {
        onAppearPrepare: onShowPrepare,
        onEnterPrepare: onShowPrepare,
        removeOnLeave: destroyPopupOnHide,
      },
    ),
    function (_ref, motionRef) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      var mergedClassName = classnames(
        prefixCls,
        className,
        alignedClassName,
        motionClassName,
      );
      return /*#__PURE__*/ react.createElement(
        RefAlign,
        {
          target: getAlignTarget(),
          key: 'popup',
          ref: alignRef,
          monitorWindowResize: true,
          disabled: alignDisabled,
          align: align,
          onAlign: onInternalAlign,
        },
        /*#__PURE__*/ react.createElement(
          'div',
          {
            ref: motionRef,
            className: mergedClassName,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onMouseDown: onMouseDown,
            onTouchStart: onTouchStart,
            style: _objectSpread2$1(
              _objectSpread2$1({}, motionStyle),
              mergedStyle,
            ),
          },
          childNode,
        ),
      );
    },
  );
});
PopupInner.displayName = 'PopupInner';

var MobilePopupInner = /*#__PURE__*/ react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    visible = props.visible,
    zIndex = props.zIndex,
    children = props.children,
    _props$mobile = props.mobile;
  _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
  var popupClassName = _props$mobile.popupClassName,
    popupStyle = _props$mobile.popupStyle,
    _props$mobile$popupMo = _props$mobile.popupMotion,
    popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo,
    popupRender = _props$mobile.popupRender;
  var elementRef = react.useRef(); // ========================= Refs =========================

  react.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {},
      getElement: function getElement() {
        return elementRef.current;
      },
    };
  }); // ======================== Render ========================

  var mergedStyle = _objectSpread2$1(
    {
      zIndex: zIndex,
    },
    popupStyle,
  );

  var childNode = children; // Wrapper when multiple children

  if (react.Children.count(children) > 1) {
    childNode = /*#__PURE__*/ react.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-content'),
      },
      children,
    );
  } // Mobile support additional render

  if (popupRender) {
    childNode = popupRender(childNode);
  }

  return /*#__PURE__*/ react.createElement(
    CSSMotion,
    Object.assign(
      {
        visible: visible,
        ref: elementRef,
        removeOnLeave: true,
      },
      popupMotion,
    ),
    function (_ref, motionRef) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      var mergedClassName = classnames(
        prefixCls,
        popupClassName,
        motionClassName,
      );
      return /*#__PURE__*/ react.createElement(
        'div',
        {
          ref: motionRef,
          className: mergedClassName,
          style: _objectSpread2$1(
            _objectSpread2$1({}, motionStyle),
            mergedStyle,
          ),
        },
        childNode,
      );
    },
  );
});
MobilePopupInner.displayName = 'MobilePopupInner';

var Popup = /*#__PURE__*/ react.forwardRef(function (_ref, ref) {
  var visible = _ref.visible,
    mobile = _ref.mobile,
    props = _objectWithoutProperties(_ref, ['visible', 'mobile']);

  var _useState = react.useState(visible),
    _useState2 = _slicedToArray(_useState, 2),
    innerVisible = _useState2[0],
    serInnerVisible = _useState2[1];

  var _useState3 = react.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    inMobile = _useState4[0],
    setInMobile = _useState4[1];

  var cloneProps = _objectSpread2$1(
    _objectSpread2$1({}, props),
    {},
    {
      visible: innerVisible,
    },
  ); // We check mobile in visible changed here.
  // And this also delay set `innerVisible` to avoid popup component render flash

  react.useEffect(
    function () {
      serInnerVisible(visible);

      if (visible && mobile) {
        setInMobile(isMobile());
      }
    },
    [visible, !!mobile],
  );
  var popupNode = inMobile
    ? /*#__PURE__*/ react.createElement(
        MobilePopupInner,
        Object.assign({}, cloneProps, {
          mobile: mobile,
          ref: ref,
        }),
      )
    : /*#__PURE__*/ react.createElement(
        PopupInner,
        Object.assign({}, cloneProps, {
          ref: ref,
        }),
      ); // We can use fragment directly but this may failed some selector usage. Keep as origin logic

  return /*#__PURE__*/ react.createElement(
    'div',
    null,
    /*#__PURE__*/ react.createElement(Mask, Object.assign({}, cloneProps)),
    popupNode,
  );
});
Popup.displayName = 'Popup';

var TriggerContext = /*#__PURE__*/ react.createContext(null);

function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }

  return window.document;
}

var ALL_HANDLERS = [
  'onClick',
  'onMouseDown',
  'onTouchStart',
  'onMouseEnter',
  'onMouseLeave',
  'onFocus',
  'onBlur',
  'onContextMenu',
];
/**
 * Internal usage. Do not use in your code since this will be removed.
 */

function generateTrigger(PortalComponent) {
  var Trigger = /*#__PURE__*/ (function (_React$Component) {
    _inherits(Trigger, _React$Component);

    var _super = _createSuper(Trigger);

    function Trigger(props) {
      var _this;

      _classCallCheck(this, Trigger);

      _this = _super.call(this, props);
      _this.popupRef = /*#__PURE__*/ react.createRef();
      _this.triggerRef = /*#__PURE__*/ react.createRef();

      _this.onMouseEnter = function (e) {
        var mouseEnterDelay = _this.props.mouseEnterDelay;

        _this.fireEvents('onMouseEnter', e);

        _this.delaySetPopupVisible(
          true,
          mouseEnterDelay,
          mouseEnterDelay ? null : e,
        );
      };

      _this.onMouseMove = function (e) {
        _this.fireEvents('onMouseMove', e);

        _this.setPoint(e);
      };

      _this.onMouseLeave = function (e) {
        _this.fireEvents('onMouseLeave', e);

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onPopupMouseEnter = function () {
        _this.clearDelayTimer();
      };

      _this.onPopupMouseLeave = function (e) {
        var _this$popupRef$curren;

        // https://github.com/react-component/trigger/pull/13
        // react bug?
        if (
          e.relatedTarget &&
          !e.relatedTarget.setTimeout &&
          contains(
            (_this$popupRef$curren = _this.popupRef.current) === null ||
              _this$popupRef$curren === void 0
              ? void 0
              : _this$popupRef$curren.getElement(),
            e.relatedTarget,
          )
        ) {
          return;
        }

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onFocus = function (e) {
        _this.fireEvents('onFocus', e); // incase focusin and focusout

        _this.clearDelayTimer();

        if (_this.isFocusToShow()) {
          _this.focusTime = Date.now();

          _this.delaySetPopupVisible(true, _this.props.focusDelay);
        }
      };

      _this.onMouseDown = function (e) {
        _this.fireEvents('onMouseDown', e);

        _this.preClickTime = Date.now();
      };

      _this.onTouchStart = function (e) {
        _this.fireEvents('onTouchStart', e);

        _this.preTouchTime = Date.now();
      };

      _this.onBlur = function (e) {
        _this.fireEvents('onBlur', e);

        _this.clearDelayTimer();

        if (_this.isBlurToHide()) {
          _this.delaySetPopupVisible(false, _this.props.blurDelay);
        }
      };

      _this.onContextMenu = function (e) {
        e.preventDefault();

        _this.fireEvents('onContextMenu', e);

        _this.setPopupVisible(true, e);
      };

      _this.onContextMenuClose = function () {
        if (_this.isContextMenuToShow()) {
          _this.close();
        }
      };

      _this.onClick = function (event) {
        _this.fireEvents('onClick', event); // focus will trigger click

        if (_this.focusTime) {
          var preTime;

          if (_this.preClickTime && _this.preTouchTime) {
            preTime = Math.min(_this.preClickTime, _this.preTouchTime);
          } else if (_this.preClickTime) {
            preTime = _this.preClickTime;
          } else if (_this.preTouchTime) {
            preTime = _this.preTouchTime;
          }

          if (Math.abs(preTime - _this.focusTime) < 20) {
            return;
          }

          _this.focusTime = 0;
        }

        _this.preClickTime = 0;
        _this.preTouchTime = 0; // Only prevent default when all the action is click.
        // https://github.com/ant-design/ant-design/issues/17043
        // https://github.com/ant-design/ant-design/issues/17291

        if (
          _this.isClickToShow() &&
          (_this.isClickToHide() || _this.isBlurToHide()) &&
          event &&
          event.preventDefault
        ) {
          event.preventDefault();
        }

        var nextVisible = !_this.state.popupVisible;

        if (
          (_this.isClickToHide() && !nextVisible) ||
          (nextVisible && _this.isClickToShow())
        ) {
          _this.setPopupVisible(!_this.state.popupVisible, event);
        }
      };

      _this.onPopupMouseDown = function () {
        _this.hasPopupMouseDown = true;
        clearTimeout(_this.mouseDownTimeout);
        _this.mouseDownTimeout = window.setTimeout(function () {
          _this.hasPopupMouseDown = false;
        }, 0);

        if (_this.context) {
          var _this$context;

          (_this$context = _this.context).onPopupMouseDown.apply(
            _this$context,
            arguments,
          );
        }
      };

      _this.onDocumentClick = function (event) {
        if (_this.props.mask && !_this.props.maskClosable) {
          return;
        }

        var target = event.target;

        var root = _this.getRootDomNode();

        var popupNode = _this.getPopupDomNode();

        if (
          !contains(root, target) &&
          !contains(popupNode, target) &&
          !_this.hasPopupMouseDown
        ) {
          _this.close();
        }
      };

      _this.getRootDomNode = function () {
        var getTriggerDOMNode = _this.props.getTriggerDOMNode;

        if (getTriggerDOMNode) {
          return getTriggerDOMNode(_this.triggerRef.current);
        }

        try {
          var domNode = findDOMNode(_this.triggerRef.current);

          if (domNode) {
            return domNode;
          }
        } catch (err) {
          // Do nothing
        }

        return reactDom.findDOMNode(_assertThisInitialized(_this));
      };

      _this.getPopupClassNameFromAlign = function (align) {
        var className = [];
        var _this$props = _this.props,
          popupPlacement = _this$props.popupPlacement,
          builtinPlacements = _this$props.builtinPlacements,
          prefixCls = _this$props.prefixCls,
          alignPoint = _this$props.alignPoint,
          getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;

        if (popupPlacement && builtinPlacements) {
          className.push(
            getAlignPopupClassName(
              builtinPlacements,
              prefixCls,
              align,
              alignPoint,
            ),
          );
        }

        if (getPopupClassNameFromAlign) {
          className.push(getPopupClassNameFromAlign(align));
        }

        return className.join(' ');
      };

      _this.getComponent = function () {
        var _this$props2 = _this.props,
          prefixCls = _this$props2.prefixCls,
          destroyPopupOnHide = _this$props2.destroyPopupOnHide,
          popupClassName = _this$props2.popupClassName,
          onPopupAlign = _this$props2.onPopupAlign,
          popupMotion = _this$props2.popupMotion,
          popupAnimation = _this$props2.popupAnimation,
          popupTransitionName = _this$props2.popupTransitionName,
          popupStyle = _this$props2.popupStyle,
          mask = _this$props2.mask,
          maskAnimation = _this$props2.maskAnimation,
          maskTransitionName = _this$props2.maskTransitionName,
          maskMotion = _this$props2.maskMotion,
          zIndex = _this$props2.zIndex,
          popup = _this$props2.popup,
          stretch = _this$props2.stretch,
          alignPoint = _this$props2.alignPoint,
          mobile = _this$props2.mobile;
        var _this$state = _this.state,
          popupVisible = _this$state.popupVisible,
          point = _this$state.point;

        var align = _this.getPopupAlign();

        var mouseProps = {};

        if (_this.isMouseEnterToShow()) {
          mouseProps.onMouseEnter = _this.onPopupMouseEnter;
        }

        if (_this.isMouseLeaveToHide()) {
          mouseProps.onMouseLeave = _this.onPopupMouseLeave;
        }

        mouseProps.onMouseDown = _this.onPopupMouseDown;
        mouseProps.onTouchStart = _this.onPopupMouseDown;
        return /*#__PURE__*/ react.createElement(
          Popup,
          Object.assign(
            {
              prefixCls: prefixCls,
              destroyPopupOnHide: destroyPopupOnHide,
              visible: popupVisible,
              point: alignPoint && point,
              className: popupClassName,
              align: align,
              onAlign: onPopupAlign,
              animation: popupAnimation,
              getClassNameFromAlign: _this.getPopupClassNameFromAlign,
            },
            mouseProps,
            {
              stretch: stretch,
              getRootDomNode: _this.getRootDomNode,
              style: popupStyle,
              mask: mask,
              zIndex: zIndex,
              transitionName: popupTransitionName,
              maskAnimation: maskAnimation,
              maskTransitionName: maskTransitionName,
              maskMotion: maskMotion,
              ref: _this.popupRef,
              motion: popupMotion,
              mobile: mobile,
            },
          ),
          typeof popup === 'function' ? popup() : popup,
        );
      };

      _this.attachParent = function (popupContainer) {
        wrapperRaf.cancel(_this.attachId);
        var _this$props3 = _this.props,
          getPopupContainer = _this$props3.getPopupContainer,
          getDocument = _this$props3.getDocument;

        var domNode = _this.getRootDomNode();

        var mountNode;

        if (!getPopupContainer) {
          mountNode = getDocument(_this.getRootDomNode()).body;
        } else if (domNode || getPopupContainer.length === 0) {
          // Compatible for legacy getPopupContainer with domNode argument.
          // If no need `domNode` argument, will call directly.
          // https://codesandbox.io/s/eloquent-mclean-ss93m?file=/src/App.js
          mountNode = getPopupContainer(domNode);
        }

        if (mountNode) {
          mountNode.appendChild(popupContainer);
        } else {
          // Retry after frame render in case parent not ready
          _this.attachId = wrapperRaf(function () {
            _this.attachParent(popupContainer);
          });
        }
      };

      _this.getContainer = function () {
        var getDocument = _this.props.getDocument;
        var popupContainer = getDocument(_this.getRootDomNode()).createElement(
          'div',
        ); // Make sure default popup container will never cause scrollbar appearing
        // https://github.com/react-component/trigger/issues/41

        popupContainer.style.position = 'absolute';
        popupContainer.style.top = '0';
        popupContainer.style.left = '0';
        popupContainer.style.width = '100%';

        _this.attachParent(popupContainer);

        return popupContainer;
      };

      _this.setPoint = function (point) {
        var alignPoint = _this.props.alignPoint;
        if (!alignPoint || !point) return;

        _this.setState({
          point: {
            pageX: point.pageX,
            pageY: point.pageY,
          },
        });
      };

      _this.handlePortalUpdate = function () {
        if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
          _this.props.afterPopupVisibleChange(_this.state.popupVisible);
        }
      };

      var popupVisible;

      if ('popupVisible' in props) {
        popupVisible = !!props.popupVisible;
      } else {
        popupVisible = !!props.defaultPopupVisible;
      }

      _this.state = {
        prevPopupVisible: popupVisible,
        popupVisible: popupVisible,
      };
      ALL_HANDLERS.forEach(function (h) {
        _this['fire'.concat(h)] = function (e) {
          _this.fireEvents(h, e);
        };
      });
      return _this;
    }

    _createClass(
      Trigger,
      [
        {
          key: 'componentDidMount',
          value: function componentDidMount() {
            this.componentDidUpdate();
          },
        },
        {
          key: 'componentDidUpdate',
          value: function componentDidUpdate() {
            var props = this.props;
            var state = this.state; // We must listen to `mousedown` or `touchstart`, edge case:
            // https://github.com/ant-design/ant-design/issues/5804
            // https://github.com/react-component/calendar/issues/250
            // https://github.com/react-component/trigger/issues/50

            if (state.popupVisible) {
              var currentDocument;

              if (
                !this.clickOutsideHandler &&
                (this.isClickToHide() || this.isContextMenuToShow())
              ) {
                currentDocument = props.getDocument(this.getRootDomNode());
                this.clickOutsideHandler = addEventListenerWrap(
                  currentDocument,
                  'mousedown',
                  this.onDocumentClick,
                );
              } // always hide on mobile

              if (!this.touchOutsideHandler) {
                currentDocument =
                  currentDocument || props.getDocument(this.getRootDomNode());
                this.touchOutsideHandler = addEventListenerWrap(
                  currentDocument,
                  'touchstart',
                  this.onDocumentClick,
                );
              } // close popup when trigger type contains 'onContextMenu' and document is scrolling.

              if (
                !this.contextMenuOutsideHandler1 &&
                this.isContextMenuToShow()
              ) {
                currentDocument =
                  currentDocument || props.getDocument(this.getRootDomNode());
                this.contextMenuOutsideHandler1 = addEventListenerWrap(
                  currentDocument,
                  'scroll',
                  this.onContextMenuClose,
                );
              } // close popup when trigger type contains 'onContextMenu' and window is blur.

              if (
                !this.contextMenuOutsideHandler2 &&
                this.isContextMenuToShow()
              ) {
                this.contextMenuOutsideHandler2 = addEventListenerWrap(
                  window,
                  'blur',
                  this.onContextMenuClose,
                );
              }

              return;
            }

            this.clearOutsideHandler();
          },
        },
        {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            this.clearDelayTimer();
            this.clearOutsideHandler();
            clearTimeout(this.mouseDownTimeout);
            wrapperRaf.cancel(this.attachId);
          },
        },
        {
          key: 'getPopupDomNode',
          value: function getPopupDomNode() {
            var _this$popupRef$curren2;

            // for test
            return (
              ((_this$popupRef$curren2 = this.popupRef.current) === null ||
              _this$popupRef$curren2 === void 0
                ? void 0
                : _this$popupRef$curren2.getElement()) || null
            );
          },
        },
        {
          key: 'getPopupAlign',
          value: function getPopupAlign() {
            var props = this.props;
            var popupPlacement = props.popupPlacement,
              popupAlign = props.popupAlign,
              builtinPlacements = props.builtinPlacements;

            if (popupPlacement && builtinPlacements) {
              return getAlignFromPlacement(
                builtinPlacements,
                popupPlacement,
                popupAlign,
              );
            }

            return popupAlign;
          },
          /**
           * @param popupVisible    Show or not the popup element
           * @param event           SyntheticEvent, used for `pointAlign`
           */
        },
        {
          key: 'setPopupVisible',
          value: function setPopupVisible(popupVisible, event) {
            var alignPoint = this.props.alignPoint;
            var prevPopupVisible = this.state.popupVisible;
            this.clearDelayTimer();

            if (prevPopupVisible !== popupVisible) {
              if (!('popupVisible' in this.props)) {
                this.setState({
                  popupVisible: popupVisible,
                  prevPopupVisible: prevPopupVisible,
                });
              }

              this.props.onPopupVisibleChange(popupVisible);
            } // Always record the point position since mouseEnterDelay will delay the show

            if (alignPoint && event && popupVisible) {
              this.setPoint(event);
            }
          },
        },
        {
          key: 'delaySetPopupVisible',
          value: function delaySetPopupVisible(visible, delayS, event) {
            var _this2 = this;

            var delay = delayS * 1000;
            this.clearDelayTimer();

            if (delay) {
              var point = event
                ? {
                    pageX: event.pageX,
                    pageY: event.pageY,
                  }
                : null;
              this.delayTimer = window.setTimeout(function () {
                _this2.setPopupVisible(visible, point);

                _this2.clearDelayTimer();
              }, delay);
            } else {
              this.setPopupVisible(visible, event);
            }
          },
        },
        {
          key: 'clearDelayTimer',
          value: function clearDelayTimer() {
            if (this.delayTimer) {
              clearTimeout(this.delayTimer);
              this.delayTimer = null;
            }
          },
        },
        {
          key: 'clearOutsideHandler',
          value: function clearOutsideHandler() {
            if (this.clickOutsideHandler) {
              this.clickOutsideHandler.remove();
              this.clickOutsideHandler = null;
            }

            if (this.contextMenuOutsideHandler1) {
              this.contextMenuOutsideHandler1.remove();
              this.contextMenuOutsideHandler1 = null;
            }

            if (this.contextMenuOutsideHandler2) {
              this.contextMenuOutsideHandler2.remove();
              this.contextMenuOutsideHandler2 = null;
            }

            if (this.touchOutsideHandler) {
              this.touchOutsideHandler.remove();
              this.touchOutsideHandler = null;
            }
          },
        },
        {
          key: 'createTwoChains',
          value: function createTwoChains(event) {
            var childPros = this.props.children.props;
            var props = this.props;

            if (childPros[event] && props[event]) {
              return this['fire'.concat(event)];
            }

            return childPros[event] || props[event];
          },
        },
        {
          key: 'isClickToShow',
          value: function isClickToShow() {
            var _this$props4 = this.props,
              action = _this$props4.action,
              showAction = _this$props4.showAction;
            return (
              action.indexOf('click') !== -1 ||
              showAction.indexOf('click') !== -1
            );
          },
        },
        {
          key: 'isContextMenuToShow',
          value: function isContextMenuToShow() {
            var _this$props5 = this.props,
              action = _this$props5.action,
              showAction = _this$props5.showAction;
            return (
              action.indexOf('contextMenu') !== -1 ||
              showAction.indexOf('contextMenu') !== -1
            );
          },
        },
        {
          key: 'isClickToHide',
          value: function isClickToHide() {
            var _this$props6 = this.props,
              action = _this$props6.action,
              hideAction = _this$props6.hideAction;
            return (
              action.indexOf('click') !== -1 ||
              hideAction.indexOf('click') !== -1
            );
          },
        },
        {
          key: 'isMouseEnterToShow',
          value: function isMouseEnterToShow() {
            var _this$props7 = this.props,
              action = _this$props7.action,
              showAction = _this$props7.showAction;
            return (
              action.indexOf('hover') !== -1 ||
              showAction.indexOf('mouseEnter') !== -1
            );
          },
        },
        {
          key: 'isMouseLeaveToHide',
          value: function isMouseLeaveToHide() {
            var _this$props8 = this.props,
              action = _this$props8.action,
              hideAction = _this$props8.hideAction;
            return (
              action.indexOf('hover') !== -1 ||
              hideAction.indexOf('mouseLeave') !== -1
            );
          },
        },
        {
          key: 'isFocusToShow',
          value: function isFocusToShow() {
            var _this$props9 = this.props,
              action = _this$props9.action,
              showAction = _this$props9.showAction;
            return (
              action.indexOf('focus') !== -1 ||
              showAction.indexOf('focus') !== -1
            );
          },
        },
        {
          key: 'isBlurToHide',
          value: function isBlurToHide() {
            var _this$props10 = this.props,
              action = _this$props10.action,
              hideAction = _this$props10.hideAction;
            return (
              action.indexOf('focus') !== -1 ||
              hideAction.indexOf('blur') !== -1
            );
          },
        },
        {
          key: 'forcePopupAlign',
          value: function forcePopupAlign() {
            if (this.state.popupVisible) {
              var _this$popupRef$curren3;

              (_this$popupRef$curren3 = this.popupRef.current) === null ||
              _this$popupRef$curren3 === void 0
                ? void 0
                : _this$popupRef$curren3.forceAlign();
            }
          },
        },
        {
          key: 'fireEvents',
          value: function fireEvents(type, e) {
            var childCallback = this.props.children.props[type];

            if (childCallback) {
              childCallback(e);
            }

            var callback = this.props[type];

            if (callback) {
              callback(e);
            }
          },
        },
        {
          key: 'close',
          value: function close() {
            this.setPopupVisible(false);
          },
        },
        {
          key: 'render',
          value: function render() {
            var popupVisible = this.state.popupVisible;
            var _this$props11 = this.props,
              children = _this$props11.children,
              forceRender = _this$props11.forceRender,
              alignPoint = _this$props11.alignPoint,
              className = _this$props11.className,
              autoDestroy = _this$props11.autoDestroy;
            var child = react.Children.only(children);
            var newChildProps = {
              key: 'trigger',
            }; // ============================== Visible Handlers ==============================
            // >>> ContextMenu

            if (this.isContextMenuToShow()) {
              newChildProps.onContextMenu = this.onContextMenu;
            } else {
              newChildProps.onContextMenu = this.createTwoChains(
                'onContextMenu',
              );
            } // >>> Click

            if (this.isClickToHide() || this.isClickToShow()) {
              newChildProps.onClick = this.onClick;
              newChildProps.onMouseDown = this.onMouseDown;
              newChildProps.onTouchStart = this.onTouchStart;
            } else {
              newChildProps.onClick = this.createTwoChains('onClick');
              newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
              newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
            } // >>> Hover(enter)

            if (this.isMouseEnterToShow()) {
              newChildProps.onMouseEnter = this.onMouseEnter; // Point align

              if (alignPoint) {
                newChildProps.onMouseMove = this.onMouseMove;
              }
            } else {
              newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
            } // >>> Hover(leave)

            if (this.isMouseLeaveToHide()) {
              newChildProps.onMouseLeave = this.onMouseLeave;
            } else {
              newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
            } // >>> Focus

            if (this.isFocusToShow() || this.isBlurToHide()) {
              newChildProps.onFocus = this.onFocus;
              newChildProps.onBlur = this.onBlur;
            } else {
              newChildProps.onFocus = this.createTwoChains('onFocus');
              newChildProps.onBlur = this.createTwoChains('onBlur');
            } // =================================== Render ===================================

            var childrenClassName = classnames(
              child && child.props && child.props.className,
              className,
            );

            if (childrenClassName) {
              newChildProps.className = childrenClassName;
            }

            var cloneProps = _objectSpread2$1({}, newChildProps);

            if (supportRef(child)) {
              cloneProps.ref = composeRef(this.triggerRef, child.ref);
            }

            var trigger = /*#__PURE__*/ react.cloneElement(child, cloneProps);
            var portal; // prevent unmounting after it's rendered

            if (popupVisible || this.popupRef.current || forceRender) {
              portal = /*#__PURE__*/ react.createElement(
                PortalComponent,
                {
                  key: 'portal',
                  getContainer: this.getContainer,
                  didUpdate: this.handlePortalUpdate,
                },
                this.getComponent(),
              );
            }

            if (!popupVisible && autoDestroy) {
              portal = null;
            }

            return /*#__PURE__*/ react.createElement(
              TriggerContext.Provider,
              {
                value: {
                  onPopupMouseDown: this.onPopupMouseDown,
                },
              },
              trigger,
              portal,
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function getDerivedStateFromProps(_ref, prevState) {
            var popupVisible = _ref.popupVisible;
            var newState = {};

            if (
              popupVisible !== undefined &&
              prevState.popupVisible !== popupVisible
            ) {
              newState.popupVisible = popupVisible;
              newState.prevPopupVisible = prevState.popupVisible;
            }

            return newState;
          },
        },
      ],
    );

    return Trigger;
  })(react.Component);

  Trigger.contextType = TriggerContext;
  Trigger.defaultProps = {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: '',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false,
  };
  return Trigger;
}
var Trigger = generateTrigger(Portal);

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
  bottomRight: {
    points: ['tr', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1,
    },
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1,
    },
  },
  topRight: {
    points: ['br', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1,
    },
  },
};

function PickerTrigger(_ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
    popupElement = _ref.popupElement,
    popupStyle = _ref.popupStyle,
    visible = _ref.visible,
    dropdownClassName = _ref.dropdownClassName,
    dropdownAlign = _ref.dropdownAlign,
    transitionName = _ref.transitionName,
    getPopupContainer = _ref.getPopupContainer,
    children = _ref.children,
    range = _ref.range,
    popupPlacement = _ref.popupPlacement,
    direction = _ref.direction;
  var dropdownPrefixCls = ''.concat(prefixCls, '-dropdown');

  var getPopupPlacement = function getPopupPlacement() {
    if (popupPlacement !== undefined) {
      return popupPlacement;
    }

    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };

  return /*#__PURE__*/ react.createElement(
    Trigger,
    {
      showAction: [],
      hideAction: [],
      popupPlacement: getPopupPlacement(),
      builtinPlacements: BUILT_IN_PLACEMENTS,
      prefixCls: dropdownPrefixCls,
      popupTransitionName: transitionName,
      popup: popupElement,
      popupAlign: dropdownAlign,
      popupVisible: visible,
      popupClassName: classnames(
        dropdownClassName,
        ((_classNames = {}),
        _defineProperty$1(
          _classNames,
          ''.concat(dropdownPrefixCls, '-range'),
          range,
        ),
        _defineProperty$1(
          _classNames,
          ''.concat(dropdownPrefixCls, '-rtl'),
          direction === 'rtl',
        ),
        _classNames),
      ),
      popupStyle: popupStyle,
      getPopupContainer: getPopupContainer,
    },
    children,
  );
}

function usePickerInput(_ref) {
  var open = _ref.open,
    value = _ref.value,
    isClickOutside = _ref.isClickOutside,
    triggerOpen = _ref.triggerOpen,
    forwardKeyDown = _ref.forwardKeyDown,
    _onKeyDown = _ref.onKeyDown,
    blurToCancel = _ref.blurToCancel,
    onSubmit = _ref.onSubmit,
    onCancel = _ref.onCancel,
    _onFocus = _ref.onFocus,
    _onBlur = _ref.onBlur;

  var _useState = react.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    typing = _useState2[0],
    setTyping = _useState2[1];

  var _useState3 = react.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1];
  /**
   * We will prevent blur to handle open event when user click outside,
   * since this will repeat trigger `onOpenChange` event.
   */

  var preventBlurRef = react.useRef(false);
  var valueChangedRef = react.useRef(false);
  var preventDefaultRef = react.useRef(false);
  var inputProps = {
    onMouseDown: function onMouseDown() {
      setTyping(true);
      triggerOpen(true);
    },
    onKeyDown: function onKeyDown(e) {
      var preventDefault = function preventDefault() {
        preventDefaultRef.current = true;
      };

      _onKeyDown(e, preventDefault);

      if (preventDefaultRef.current) return;

      switch (e.which) {
        case KeyCode.ENTER: {
          if (!open) {
            triggerOpen(true);
          } else if (onSubmit() !== false) {
            setTyping(true);
          }

          e.preventDefault();
          return;
        }

        case KeyCode.TAB: {
          if (typing && open && !e.shiftKey) {
            setTyping(false);
            e.preventDefault();
          } else if (!typing && open) {
            if (!forwardKeyDown(e) && e.shiftKey) {
              setTyping(true);
              e.preventDefault();
            }
          }

          return;
        }

        case KeyCode.ESC: {
          setTyping(true);
          onCancel();
          return;
        }
      }

      if (!open && ![KeyCode.SHIFT].includes(e.which)) {
        triggerOpen(true);
      } else if (!typing) {
        // Let popup panel handle keyboard
        forwardKeyDown(e);
      }
    },
    onFocus: function onFocus(e) {
      setTyping(true);
      setFocused(true);

      if (_onFocus) {
        _onFocus(e);
      }
    },
    onBlur: function onBlur(e) {
      if (preventBlurRef.current || !isClickOutside(document.activeElement)) {
        preventBlurRef.current = false;
        return;
      }

      if (blurToCancel) {
        setTimeout(function () {
          if (isClickOutside(document.activeElement)) {
            onCancel();
          }
        }, 0);
      } else if (open) {
        triggerOpen(false);

        if (valueChangedRef.current) {
          onSubmit();
        }
      }

      setFocused(false);

      if (_onBlur) {
        _onBlur(e);
      }
    },
  }; // check if value changed

  react.useEffect(
    function () {
      valueChangedRef.current = false;
    },
    [open],
  );
  react.useEffect(
    function () {
      valueChangedRef.current = true;
    },
    [value],
  ); // Global click handler

  react.useEffect(function () {
    return addGlobalMouseDownEvent(function (e) {
      var target = getTargetFromEvent(e);

      if (open) {
        var clickedOutside = isClickOutside(target);

        if (!clickedOutside) {
          preventBlurRef.current = true; // Always set back in case `onBlur` prevented by user

          requestAnimationFrame(function () {
            preventBlurRef.current = false;
          });
        } else if (!focused || clickedOutside) {
          triggerOpen(false);
        }
      }
    });
  });
  return [
    inputProps,
    {
      focused: focused,
      typing: typing,
    },
  ];
}

function useTextValueMapping(_ref) {
  var valueTexts = _ref.valueTexts,
    onTextChange = _ref.onTextChange;

  var _React$useState = react.useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    text = _React$useState2[0],
    setInnerText = _React$useState2[1];

  var valueTextsRef = react.useRef([]);
  valueTextsRef.current = valueTexts;

  function triggerTextChange(value) {
    setInnerText(value);
    onTextChange(value);
  }

  function resetText() {
    setInnerText(valueTextsRef.current[0]);
  }

  react.useEffect(
    function () {
      if (
        valueTexts.every(function (valText) {
          return valText !== text;
        })
      ) {
        resetText();
      }
    },
    [valueTexts.join('||')],
  );
  return [text, triggerTextChange, resetText];
}

function useValueTexts(value, _ref) {
  var formatList = _ref.formatList,
    generateConfig = _ref.generateConfig,
    locale = _ref.locale;
  return useMemo(
    function () {
      if (!value) {
        return [[''], ''];
      } // We will convert data format back to first format

      var firstValueText = '';
      var fullValueTexts = [];

      for (var i = 0; i < formatList.length; i += 1) {
        var format = formatList[i];
        var formatStr = formatValue(value, {
          generateConfig: generateConfig,
          locale: locale,
          format: format,
        });
        fullValueTexts.push(formatStr);

        if (i === 0) {
          firstValueText = formatStr;
        }
      }

      return [fullValueTexts, firstValueText];
    },
    [value, formatList],
    function (prev, next) {
      return prev[0] !== next[0] || !shallowequal(prev[1], next[1]);
    },
  );
}

function useHoverValue(valueText, _ref) {
  var formatList = _ref.formatList,
    generateConfig = _ref.generateConfig,
    locale = _ref.locale;

  var _useState = react.useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    internalSetValue = _useState2[1];

  var raf = react.useRef(null);

  function setValue(val) {
    var immediately =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    cancelAnimationFrame(raf.current);

    if (immediately) {
      internalSetValue(val);
      return;
    }

    raf.current = requestAnimationFrame(function () {
      internalSetValue(val);
    });
  }

  var _useValueTexts = useValueTexts(value, {
      formatList: formatList,
      generateConfig: generateConfig,
      locale: locale,
    }),
    _useValueTexts2 = _slicedToArray(_useValueTexts, 2),
    firstText = _useValueTexts2[1];

  function onEnter(date) {
    setValue(date);
  }

  function onLeave() {
    var immediately =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    setValue(null, immediately);
  }

  react.useEffect(
    function () {
      onLeave(true);
    },
    [valueText],
  );
  react.useEffect(function () {
    return function () {
      return cancelAnimationFrame(raf.current);
    };
  }, []);
  return [firstText, onEnter, onLeave];
}

function useRangeDisabled(_ref, disabledStart, disabledEnd) {
  var picker = _ref.picker,
    locale = _ref.locale,
    selectedValue = _ref.selectedValue,
    disabledDate = _ref.disabledDate,
    disabled = _ref.disabled,
    generateConfig = _ref.generateConfig;
  var startDate = getValue(selectedValue, 0);
  var endDate = getValue(selectedValue, 1);

  function weekFirstDate(date) {
    return generateConfig.locale.getWeekFirstDate(locale.locale, date);
  }

  function monthNumber(date) {
    var year = generateConfig.getYear(date);
    var month = generateConfig.getMonth(date);
    return year * 100 + month;
  }

  function quarterNumber(date) {
    var year = generateConfig.getYear(date);
    var quarter = getQuarter(generateConfig, date);
    return year * 10 + quarter;
  }

  var disabledStartDate = react.useCallback(
    function (date) {
      if (disabledDate && disabledDate(date)) {
        return true;
      } // Disabled range

      if (disabled[1] && endDate) {
        return (
          !isSameDate(generateConfig, date, endDate) &&
          generateConfig.isAfter(date, endDate)
        );
      } // Disabled part

      if (disabledStart && endDate) {
        switch (picker) {
          case 'quarter':
            return quarterNumber(date) > quarterNumber(endDate);

          case 'month':
            return monthNumber(date) > monthNumber(endDate);

          case 'week':
            return weekFirstDate(date) > weekFirstDate(endDate);

          default:
            return (
              !isSameDate(generateConfig, date, endDate) &&
              generateConfig.isAfter(date, endDate)
            );
        }
      }

      return false;
    },
    [disabledDate, disabled[1], endDate, disabledStart],
  );
  var disabledEndDate = react.useCallback(
    function (date) {
      if (disabledDate && disabledDate(date)) {
        return true;
      } // Disabled range

      if (disabled[0] && startDate) {
        return (
          !isSameDate(generateConfig, date, endDate) &&
          generateConfig.isAfter(startDate, date)
        );
      } // Disabled part

      if (disabledEnd && startDate) {
        switch (picker) {
          case 'quarter':
            return quarterNumber(date) < quarterNumber(startDate);

          case 'month':
            return monthNumber(date) < monthNumber(startDate);

          case 'week':
            return weekFirstDate(date) < weekFirstDate(startDate);

          default:
            return (
              !isSameDate(generateConfig, date, startDate) &&
              generateConfig.isAfter(startDate, date)
            );
        }
      }

      return false;
    },
    [disabledDate, disabled[0], startDate, disabledEnd],
  );
  return [disabledStartDate, disabledEndDate];
}

function getStartEndDistance(startDate, endDate, picker, generateConfig) {
  var startNext = getClosingViewDate(startDate, picker, generateConfig, 1);

  function getDistance(compareFunc) {
    if (compareFunc(startDate, endDate)) {
      return 'same';
    }

    if (compareFunc(startNext, endDate)) {
      return 'closing';
    }

    return 'far';
  }

  switch (picker) {
    case 'year':
      return getDistance(function (start, end) {
        return isSameDecade(generateConfig, start, end);
      });

    case 'quarter':
    case 'month':
      return getDistance(function (start, end) {
        return isSameYear(generateConfig, start, end);
      });

    default:
      return getDistance(function (start, end) {
        return isSameMonth(generateConfig, start, end);
      });
  }
}

function getRangeViewDate(values, index, picker, generateConfig) {
  var startDate = getValue(values, 0);
  var endDate = getValue(values, 1);

  if (index === 0) {
    return startDate;
  }

  if (startDate && endDate) {
    var distance = getStartEndDistance(
      startDate,
      endDate,
      picker,
      generateConfig,
    );

    switch (distance) {
      case 'same':
        return startDate;

      case 'closing':
        return startDate;

      default:
        return getClosingViewDate(endDate, picker, generateConfig, -1);
    }
  }

  return startDate;
}

function useRangeViewDates(_ref) {
  var values = _ref.values,
    picker = _ref.picker,
    defaultDates = _ref.defaultDates,
    generateConfig = _ref.generateConfig;

  var _React$useState = react.useState(function () {
      return [getValue(defaultDates, 0), getValue(defaultDates, 1)];
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    defaultViewDates = _React$useState2[0],
    setDefaultViewDates = _React$useState2[1];

  var _React$useState3 = react.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    viewDates = _React$useState4[0],
    setInternalViewDates = _React$useState4[1];

  var startDate = getValue(values, 0);
  var endDate = getValue(values, 1);

  function getViewDate(index) {
    // If set default view date, use it
    if (defaultViewDates[index]) {
      return defaultViewDates[index];
    }

    return (
      getValue(viewDates, index) ||
      getRangeViewDate(values, index, picker, generateConfig) ||
      startDate ||
      endDate ||
      generateConfig.getNow()
    );
  }

  function setViewDate(viewDate, index) {
    if (viewDate) {
      var newViewDates = updateValues(viewDates, viewDate, index); // Set view date will clean up default one

      setDefaultViewDates(
        // Should always be an array
        updateValues(defaultViewDates, null, index) || [null, null],
      ); // Reset another one when not have value

      var anotherIndex = (index + 1) % 2;

      if (!getValue(values, anotherIndex)) {
        newViewDates = updateValues(newViewDates, viewDate, anotherIndex);
      }

      setInternalViewDates(newViewDates);
    } else if (startDate || endDate) {
      // Reset all when has values when `viewDate` is `null` which means from open trigger
      setInternalViewDates(null);
    }
  }

  return [getViewDate, setViewDate];
}

function reorderValues(values, generateConfig) {
  if (
    values &&
    values[0] &&
    values[1] &&
    generateConfig.isAfter(values[0], values[1])
  ) {
    return [values[1], values[0]];
  }

  return values;
}

function canValueTrigger(value, index, disabled, allowEmpty) {
  if (value) {
    return true;
  }

  if (allowEmpty && allowEmpty[index]) {
    return true;
  }

  if (disabled[(index + 1) % 2]) {
    return true;
  }

  return false;
}

function InnerRangePicker(props) {
  var _classNames2, _classNames3, _classNames4;

  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-picker' : _props$prefixCls,
    id = props.id,
    style = props.style,
    className = props.className,
    popupStyle = props.popupStyle,
    dropdownClassName = props.dropdownClassName,
    transitionName = props.transitionName,
    dropdownAlign = props.dropdownAlign,
    getPopupContainer = props.getPopupContainer,
    generateConfig = props.generateConfig,
    locale = props.locale,
    placeholder = props.placeholder,
    autoFocus = props.autoFocus,
    disabled = props.disabled,
    format = props.format,
    _props$picker = props.picker,
    picker = _props$picker === void 0 ? 'date' : _props$picker,
    showTime = props.showTime,
    use12Hours = props.use12Hours,
    _props$separator = props.separator,
    separator = _props$separator === void 0 ? '~' : _props$separator,
    value = props.value,
    defaultValue = props.defaultValue,
    defaultPickerValue = props.defaultPickerValue,
    open = props.open,
    defaultOpen = props.defaultOpen,
    disabledDate = props.disabledDate,
    _disabledTime = props.disabledTime,
    dateRender = props.dateRender,
    panelRender = props.panelRender,
    ranges = props.ranges,
    allowEmpty = props.allowEmpty,
    allowClear = props.allowClear,
    suffixIcon = props.suffixIcon,
    clearIcon = props.clearIcon,
    pickerRef = props.pickerRef,
    inputReadOnly = props.inputReadOnly,
    mode = props.mode,
    renderExtraFooter = props.renderExtraFooter,
    onChange = props.onChange,
    onOpenChange = props.onOpenChange,
    onPanelChange = props.onPanelChange,
    onCalendarChange = props.onCalendarChange,
    _onFocus = props.onFocus,
    onBlur = props.onBlur,
    _onOk = props.onOk,
    _onKeyDown = props.onKeyDown,
    components = props.components,
    order = props.order,
    direction = props.direction,
    activePickerIndex = props.activePickerIndex,
    _props$autoComplete = props.autoComplete,
    autoComplete = _props$autoComplete === void 0 ? 'off' : _props$autoComplete;
  var needConfirmButton =
    (picker === 'date' && !!showTime) || picker === 'time'; // We record opened status here in case repeat open with picker

  var openRecordsRef = react.useRef({});
  var containerRef = react.useRef(null);
  var panelDivRef = react.useRef(null);
  var startInputDivRef = react.useRef(null);
  var endInputDivRef = react.useRef(null);
  var separatorRef = react.useRef(null);
  var startInputRef = react.useRef(null);
  var endInputRef = react.useRef(null); // ============================= Misc ==============================

  var formatList = toArray(
    getDefaultFormat(format, picker, showTime, use12Hours),
  ); // Active picker

  var _useMergedState = useControlledState(0, {
      value: activePickerIndex,
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    mergedActivePickerIndex = _useMergedState2[0],
    setMergedActivePickerIndex = _useMergedState2[1]; // Operation ref

  var operationRef = react.useRef(null);
  var mergedDisabled = react.useMemo(
    function () {
      if (Array.isArray(disabled)) {
        return disabled;
      }

      return [disabled || false, disabled || false];
    },
    [disabled],
  ); // ============================= Value =============================

  var _useMergedState3 = useControlledState(null, {
      value: value,
      defaultValue: defaultValue,
      postState: function postState(values) {
        return picker === 'time' && !order
          ? values
          : reorderValues(values, generateConfig);
      },
    }),
    _useMergedState4 = _slicedToArray(_useMergedState3, 2),
    mergedValue = _useMergedState4[0],
    setInnerValue = _useMergedState4[1]; // =========================== View Date ===========================
  // Config view panel

  var _useRangeViewDates = useRangeViewDates({
      values: mergedValue,
      picker: picker,
      defaultDates: defaultPickerValue,
      generateConfig: generateConfig,
    }),
    _useRangeViewDates2 = _slicedToArray(_useRangeViewDates, 2),
    getViewDate = _useRangeViewDates2[0],
    setViewDate = _useRangeViewDates2[1]; // ========================= Select Values =========================

  var _useMergedState5 = useControlledState(mergedValue, {
      postState: function postState(values) {
        var postValues = values;

        if (mergedDisabled[0] && mergedDisabled[1]) {
          return postValues;
        } // Fill disabled unit

        for (var i = 0; i < 2; i += 1) {
          if (
            mergedDisabled[i] &&
            !getValue(postValues, i) &&
            !getValue(allowEmpty, i)
          ) {
            postValues = updateValues(postValues, generateConfig.getNow(), i);
          }
        }

        return postValues;
      },
    }),
    _useMergedState6 = _slicedToArray(_useMergedState5, 2),
    selectedValue = _useMergedState6[0],
    setSelectedValue = _useMergedState6[1]; // ============================= Modes =============================

  var _useMergedState7 = useControlledState([picker, picker], {
      value: mode,
    }),
    _useMergedState8 = _slicedToArray(_useMergedState7, 2),
    mergedModes = _useMergedState8[0],
    setInnerModes = _useMergedState8[1];

  react.useEffect(
    function () {
      setInnerModes([picker, picker]);
    },
    [picker],
  );

  var triggerModesChange = function triggerModesChange(modes, values) {
    setInnerModes(modes);

    if (onPanelChange) {
      onPanelChange(values, modes);
    }
  }; // ========================= Disable Date ==========================

  var _useRangeDisabled = useRangeDisabled(
      {
        picker: picker,
        selectedValue: selectedValue,
        locale: locale,
        disabled: mergedDisabled,
        disabledDate: disabledDate,
        generateConfig: generateConfig,
      },
      openRecordsRef.current[1],
      openRecordsRef.current[0],
    ),
    _useRangeDisabled2 = _slicedToArray(_useRangeDisabled, 2),
    disabledStartDate = _useRangeDisabled2[0],
    disabledEndDate = _useRangeDisabled2[1]; // ============================= Open ==============================

  var _useMergedState9 = useControlledState(false, {
      value: open,
      defaultValue: defaultOpen,
      postState: function postState(postOpen) {
        return mergedDisabled[mergedActivePickerIndex] ? false : postOpen;
      },
      onChange: function onChange(newOpen) {
        if (onOpenChange) {
          onOpenChange(newOpen);
        }

        if (!newOpen && operationRef.current && operationRef.current.onClose) {
          operationRef.current.onClose();
        }
      },
    }),
    _useMergedState10 = _slicedToArray(_useMergedState9, 2),
    mergedOpen = _useMergedState10[0],
    triggerInnerOpen = _useMergedState10[1];

  var startOpen = mergedOpen && mergedActivePickerIndex === 0;
  var endOpen = mergedOpen && mergedActivePickerIndex === 1; // ============================= Popup =============================
  // Popup min width

  var _useState = react.useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    popupMinWidth = _useState2[0],
    setPopupMinWidth = _useState2[1];

  react.useEffect(
    function () {
      if (!mergedOpen && containerRef.current) {
        setPopupMinWidth(containerRef.current.offsetWidth);
      }
    },
    [mergedOpen],
  ); // ============================ Trigger ============================

  var triggerRef = react.useRef();

  function _triggerOpen(newOpen, index) {
    if (newOpen) {
      clearTimeout(triggerRef.current);
      openRecordsRef.current[index] = true;
      setMergedActivePickerIndex(index);
      triggerInnerOpen(newOpen); // Open to reset view date

      if (!mergedOpen) {
        setViewDate(null, index);
      }
    } else if (mergedActivePickerIndex === index) {
      triggerInnerOpen(newOpen); // Clean up async
      // This makes ref not quick refresh in case user open another input with blur trigger

      var openRecords = openRecordsRef.current;
      triggerRef.current = setTimeout(function () {
        if (openRecords === openRecordsRef.current) {
          openRecordsRef.current = {};
        }
      });
    }
  }

  function triggerOpenAndFocus(index) {
    _triggerOpen(true, index); // Use setTimeout to make sure panel DOM exists

    setTimeout(function () {
      var inputRef = [startInputRef, endInputRef][index];

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  }

  function triggerChange(newValue, sourceIndex) {
    var values = newValue;
    var startValue = getValue(values, 0);
    var endValue = getValue(values, 1); // >>>>> Format start & end values

    if (
      startValue &&
      endValue &&
      generateConfig.isAfter(startValue, endValue)
    ) {
      if (
        // WeekPicker only compare week
        (picker === 'week' &&
          !isSameWeek(generateConfig, locale.locale, startValue, endValue)) || // QuotaPicker only compare week
        (picker === 'quarter' &&
          !isSameQuarter(generateConfig, startValue, endValue)) || // Other non-TimePicker compare date
        (picker !== 'week' &&
          picker !== 'quarter' &&
          picker !== 'time' &&
          !isSameDate(generateConfig, startValue, endValue))
      ) {
        // Clean up end date when start date is after end date
        if (sourceIndex === 0) {
          values = [startValue, null];
          endValue = null;
        } else {
          startValue = null;
          values = [null, endValue];
        } // Clean up cache since invalidate

        openRecordsRef.current = _defineProperty$1({}, sourceIndex, true);
      } else if (picker !== 'time' || order !== false) {
        // Reorder when in same date
        values = reorderValues(values, generateConfig);
      }
    }

    setSelectedValue(values);
    var startStr =
      values && values[0]
        ? formatValue(values[0], {
            generateConfig: generateConfig,
            locale: locale,
            format: formatList[0],
          })
        : '';
    var endStr =
      values && values[1]
        ? formatValue(values[1], {
            generateConfig: generateConfig,
            locale: locale,
            format: formatList[0],
          })
        : '';

    if (onCalendarChange) {
      var info = {
        range: sourceIndex === 0 ? 'start' : 'end',
      };
      onCalendarChange(values, [startStr, endStr], info);
    } // >>>>> Trigger `onChange` event

    var canStartValueTrigger = canValueTrigger(
      startValue,
      0,
      mergedDisabled,
      allowEmpty,
    );
    var canEndValueTrigger = canValueTrigger(
      endValue,
      1,
      mergedDisabled,
      allowEmpty,
    );
    var canTrigger =
      values === null || (canStartValueTrigger && canEndValueTrigger);

    if (canTrigger) {
      // Trigger onChange only when value is validate
      setInnerValue(values);

      if (
        onChange &&
        (!isEqual(generateConfig, getValue(mergedValue, 0), startValue) ||
          !isEqual(generateConfig, getValue(mergedValue, 1), endValue))
      ) {
        onChange(values, [startStr, endStr]);
      }
    } // >>>>> Open picker when
    // Always open another picker if possible

    var nextOpenIndex = null;

    if (sourceIndex === 0 && !mergedDisabled[1]) {
      nextOpenIndex = 1;
    } else if (sourceIndex === 1 && !mergedDisabled[0]) {
      nextOpenIndex = 0;
    }

    if (
      nextOpenIndex !== null &&
      nextOpenIndex !== mergedActivePickerIndex &&
      (!openRecordsRef.current[nextOpenIndex] ||
        !getValue(values, nextOpenIndex)) &&
      getValue(values, sourceIndex)
    ) {
      // Delay to focus to avoid input blur trigger expired selectedValues
      triggerOpenAndFocus(nextOpenIndex);
    } else {
      _triggerOpen(false, sourceIndex);
    }
  }

  var forwardKeyDown = function forwardKeyDown(e) {
    if (mergedOpen && operationRef.current && operationRef.current.onKeyDown) {
      // Let popup panel handle keyboard
      return operationRef.current.onKeyDown(e);
    }
    /* istanbul ignore next */

    /* eslint-disable no-lone-blocks */

    {
      warningOnce(
        false,
        'Picker not correct forward KeyDown operation. Please help to fire issue about this.',
      );
      return false;
    }
  }; // ============================= Text ==============================

  var sharedTextHooksProps = {
    formatList: formatList,
    generateConfig: generateConfig,
    locale: locale,
  };

  var _useValueTexts = useValueTexts(
      getValue(selectedValue, 0),
      sharedTextHooksProps,
    ),
    _useValueTexts2 = _slicedToArray(_useValueTexts, 2),
    startValueTexts = _useValueTexts2[0],
    firstStartValueText = _useValueTexts2[1];

  var _useValueTexts3 = useValueTexts(
      getValue(selectedValue, 1),
      sharedTextHooksProps,
    ),
    _useValueTexts4 = _slicedToArray(_useValueTexts3, 2),
    endValueTexts = _useValueTexts4[0],
    firstEndValueText = _useValueTexts4[1];

  var _onTextChange = function onTextChange(newText, index) {
    var inputDate = parseValue(newText, {
      locale: locale,
      formatList: formatList,
      generateConfig: generateConfig,
    });
    var disabledFunc = index === 0 ? disabledStartDate : disabledEndDate;

    if (inputDate && !disabledFunc(inputDate)) {
      setSelectedValue(updateValues(selectedValue, inputDate, index));
      setViewDate(inputDate, index);
    }
  };

  var _useTextValueMapping = useTextValueMapping({
      valueTexts: startValueTexts,
      onTextChange: function onTextChange(newText) {
        return _onTextChange(newText, 0);
      },
    }),
    _useTextValueMapping2 = _slicedToArray(_useTextValueMapping, 3),
    startText = _useTextValueMapping2[0],
    triggerStartTextChange = _useTextValueMapping2[1],
    resetStartText = _useTextValueMapping2[2];

  var _useTextValueMapping3 = useTextValueMapping({
      valueTexts: endValueTexts,
      onTextChange: function onTextChange(newText) {
        return _onTextChange(newText, 1);
      },
    }),
    _useTextValueMapping4 = _slicedToArray(_useTextValueMapping3, 3),
    endText = _useTextValueMapping4[0],
    triggerEndTextChange = _useTextValueMapping4[1],
    resetEndText = _useTextValueMapping4[2];

  var _useState3 = react.useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    rangeHoverValue = _useState4[0],
    setRangeHoverValue = _useState4[1]; // ========================== Hover Range ==========================

  var _useState5 = react.useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    hoverRangedValue = _useState6[0],
    setHoverRangedValue = _useState6[1];

  var _useHoverValue = useHoverValue(startText, {
      formatList: formatList,
      generateConfig: generateConfig,
      locale: locale,
    }),
    _useHoverValue2 = _slicedToArray(_useHoverValue, 3),
    startHoverValue = _useHoverValue2[0],
    onStartEnter = _useHoverValue2[1],
    onStartLeave = _useHoverValue2[2];

  var _useHoverValue3 = useHoverValue(endText, {
      formatList: formatList,
      generateConfig: generateConfig,
      locale: locale,
    }),
    _useHoverValue4 = _slicedToArray(_useHoverValue3, 3),
    endHoverValue = _useHoverValue4[0],
    onEndEnter = _useHoverValue4[1],
    onEndLeave = _useHoverValue4[2];

  var onDateMouseEnter = function onDateMouseEnter(date) {
    setHoverRangedValue(
      updateValues(selectedValue, date, mergedActivePickerIndex),
    );

    if (mergedActivePickerIndex === 0) {
      onStartEnter(date);
    } else {
      onEndEnter(date);
    }
  };

  var onDateMouseLeave = function onDateMouseLeave() {
    setHoverRangedValue(
      updateValues(selectedValue, null, mergedActivePickerIndex),
    );

    if (mergedActivePickerIndex === 0) {
      onStartLeave();
    } else {
      onEndLeave();
    }
  }; // ============================= Input =============================

  var getSharedInputHookProps = function getSharedInputHookProps(
    index,
    resetText,
  ) {
    return {
      blurToCancel: needConfirmButton,
      forwardKeyDown: forwardKeyDown,
      onBlur: onBlur,
      isClickOutside: function isClickOutside(target) {
        return !elementsContains(
          [
            panelDivRef.current,
            startInputDivRef.current,
            endInputDivRef.current,
          ],
          target,
        );
      },
      onFocus: function onFocus(e) {
        setMergedActivePickerIndex(index);

        if (_onFocus) {
          _onFocus(e);
        }
      },
      triggerOpen: function triggerOpen(newOpen) {
        _triggerOpen(newOpen, index);
      },
      onSubmit: function onSubmit() {
        triggerChange(selectedValue, index);
        resetText();
      },
      onCancel: function onCancel() {
        _triggerOpen(false, index);

        setSelectedValue(mergedValue);
        resetText();
      },
    };
  };

  var _usePickerInput = usePickerInput(
      _objectSpread2$1(
        _objectSpread2$1({}, getSharedInputHookProps(0, resetStartText)),
        {},
        {
          open: startOpen,
          value: startText,
          onKeyDown: function onKeyDown(e, preventDefault) {
            _onKeyDown === null || _onKeyDown === void 0
              ? void 0
              : _onKeyDown(e, preventDefault);
          },
        },
      ),
    ),
    _usePickerInput2 = _slicedToArray(_usePickerInput, 2),
    startInputProps = _usePickerInput2[0],
    _usePickerInput2$ = _usePickerInput2[1],
    startFocused = _usePickerInput2$.focused,
    startTyping = _usePickerInput2$.typing;

  var _usePickerInput3 = usePickerInput(
      _objectSpread2$1(
        _objectSpread2$1({}, getSharedInputHookProps(1, resetEndText)),
        {},
        {
          open: endOpen,
          value: endText,
          onKeyDown: function onKeyDown(e, preventDefault) {
            _onKeyDown === null || _onKeyDown === void 0
              ? void 0
              : _onKeyDown(e, preventDefault);
          },
        },
      ),
    ),
    _usePickerInput4 = _slicedToArray(_usePickerInput3, 2),
    endInputProps = _usePickerInput4[0],
    _usePickerInput4$ = _usePickerInput4[1],
    endFocused = _usePickerInput4$.focused,
    endTyping = _usePickerInput4$.typing; // ========================== Click Picker ==========================

  var onPickerClick = function onPickerClick(e) {
    // When click inside the picker & outside the picker's input elements
    // the panel should still be opened
    if (
      !mergedOpen &&
      !startInputRef.current.contains(e.target) &&
      !endInputRef.current.contains(e.target)
    ) {
      if (!mergedDisabled[0]) {
        triggerOpenAndFocus(0);
      } else if (!mergedDisabled[1]) {
        triggerOpenAndFocus(1);
      }
    }
  };

  var onPickerMouseDown = function onPickerMouseDown(e) {
    // shouldn't affect input elements if picker is active
    if (
      mergedOpen &&
      (startFocused || endFocused) &&
      !startInputRef.current.contains(e.target) &&
      !endInputRef.current.contains(e.target)
    ) {
      e.preventDefault();
    }
  }; // ============================= Sync ==============================
  // Close should sync back with text value

  var startStr =
    mergedValue && mergedValue[0]
      ? formatValue(mergedValue[0], {
          locale: locale,
          format: 'YYYYMMDDHHmmss',
          generateConfig: generateConfig,
        })
      : '';
  var endStr =
    mergedValue && mergedValue[1]
      ? formatValue(mergedValue[1], {
          locale: locale,
          format: 'YYYYMMDDHHmmss',
          generateConfig: generateConfig,
        })
      : '';
  react.useEffect(
    function () {
      if (!mergedOpen) {
        setSelectedValue(mergedValue);

        if (!startValueTexts.length || startValueTexts[0] === '') {
          triggerStartTextChange('');
        } else if (firstStartValueText !== startText) {
          resetStartText();
        }

        if (!endValueTexts.length || endValueTexts[0] === '') {
          triggerEndTextChange('');
        } else if (firstEndValueText !== endText) {
          resetEndText();
        }
      }
    },
    [mergedOpen, startValueTexts, endValueTexts],
  ); // Sync innerValue with control mode

  react.useEffect(
    function () {
      setSelectedValue(mergedValue);
    },
    [startStr, endStr],
  ); // ============================ Warning ============================

  if (pickerRef) {
    pickerRef.current = {
      focus: function focus() {
        if (startInputRef.current) {
          startInputRef.current.focus();
        }
      },
      blur: function blur() {
        if (startInputRef.current) {
          startInputRef.current.blur();
        }

        if (endInputRef.current) {
          endInputRef.current.blur();
        }
      },
    };
  } // ============================ Ranges =============================

  var rangeLabels = Object.keys(ranges || {});
  var rangeList = rangeLabels.map(function (label) {
    var range = ranges[label];
    var newValues = typeof range === 'function' ? range() : range;
    return {
      label: label,
      onClick: function onClick() {
        triggerChange(newValues, null);

        _triggerOpen(false, mergedActivePickerIndex);
      },
      onMouseEnter: function onMouseEnter() {
        setRangeHoverValue(newValues);
      },
      onMouseLeave: function onMouseLeave() {
        setRangeHoverValue(null);
      },
    };
  }); // ============================= Panel =============================

  function renderPanel() {
    var panelPosition =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var panelProps =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var panelHoverRangedValue = null;

    if (
      mergedOpen &&
      hoverRangedValue &&
      hoverRangedValue[0] &&
      hoverRangedValue[1] &&
      generateConfig.isAfter(hoverRangedValue[1], hoverRangedValue[0])
    ) {
      panelHoverRangedValue = hoverRangedValue;
    }

    var panelShowTime = showTime;

    if (showTime && _typeof$1(showTime) === 'object' && showTime.defaultValue) {
      var timeDefaultValues = showTime.defaultValue;
      panelShowTime = _objectSpread2$1(
        _objectSpread2$1({}, showTime),
        {},
        {
          defaultValue:
            getValue(timeDefaultValues, mergedActivePickerIndex) || undefined,
        },
      );
    }

    var panelDateRender = null;

    if (dateRender) {
      panelDateRender = function panelDateRender(date, today) {
        return dateRender(date, today, {
          range: mergedActivePickerIndex ? 'end' : 'start',
        });
      };
    }

    return /*#__PURE__*/ react.createElement(
      RangeContext.Provider,
      {
        value: {
          inRange: true,
          panelPosition: panelPosition,
          rangedValue: rangeHoverValue || selectedValue,
          hoverRangedValue: panelHoverRangedValue,
        },
      },
      /*#__PURE__*/ react.createElement(
        PickerPanel,
        _extends({}, props, panelProps, {
          dateRender: panelDateRender,
          showTime: panelShowTime,
          mode: mergedModes[mergedActivePickerIndex],
          generateConfig: generateConfig,
          style: undefined,
          direction: direction,
          disabledDate:
            mergedActivePickerIndex === 0 ? disabledStartDate : disabledEndDate,
          disabledTime: function disabledTime(date) {
            if (_disabledTime) {
              return _disabledTime(
                date,
                mergedActivePickerIndex === 0 ? 'start' : 'end',
              );
            }

            return false;
          },
          className: classnames(
            _defineProperty$1(
              {},
              ''.concat(prefixCls, '-panel-focused'),
              mergedActivePickerIndex === 0 ? !startTyping : !endTyping,
            ),
          ),
          value: getValue(selectedValue, mergedActivePickerIndex),
          locale: locale,
          tabIndex: -1,
          onPanelChange: function onPanelChange(date, newMode) {
            // clear hover value when panel change
            if (mergedActivePickerIndex === 0) {
              onStartLeave(true);
            }

            if (mergedActivePickerIndex === 1) {
              onEndLeave(true);
            }

            triggerModesChange(
              updateValues(mergedModes, newMode, mergedActivePickerIndex),
              updateValues(selectedValue, date, mergedActivePickerIndex),
            );
            var viewDate = date;

            if (
              panelPosition === 'right' &&
              mergedModes[mergedActivePickerIndex] === newMode
            ) {
              viewDate = getClosingViewDate(
                viewDate,
                newMode,
                generateConfig,
                -1,
              );
            }

            setViewDate(viewDate, mergedActivePickerIndex);
          },
          onOk: null,
          onSelect: undefined,
          onChange: undefined,
          defaultValue:
            mergedActivePickerIndex === 0
              ? getValue(selectedValue, 1)
              : getValue(selectedValue, 0),
          defaultPickerValue: undefined,
        }),
      ),
    );
  }

  var arrowLeft = 0;
  var panelLeft = 0;

  if (
    mergedActivePickerIndex &&
    startInputDivRef.current &&
    separatorRef.current &&
    panelDivRef.current
  ) {
    // Arrow offset
    arrowLeft =
      startInputDivRef.current.offsetWidth + separatorRef.current.offsetWidth;

    if (
      panelDivRef.current.offsetWidth &&
      arrowLeft > panelDivRef.current.offsetWidth
    ) {
      panelLeft = arrowLeft;
    }
  }

  var arrowPositionStyle =
    direction === 'rtl'
      ? {
          right: arrowLeft,
        }
      : {
          left: arrowLeft,
        };

  function renderPanels() {
    var panels;
    var extraNode = getExtraFooter(
      prefixCls,
      mergedModes[mergedActivePickerIndex],
      renderExtraFooter,
    );
    var rangesNode = getRanges({
      prefixCls: prefixCls,
      components: components,
      needConfirmButton: needConfirmButton,
      okDisabled:
        !getValue(selectedValue, mergedActivePickerIndex) ||
        (disabledDate && disabledDate(selectedValue[mergedActivePickerIndex])),
      locale: locale,
      rangeList: rangeList,
      onOk: function onOk() {
        if (getValue(selectedValue, mergedActivePickerIndex)) {
          // triggerChangeOld(selectedValue);
          triggerChange(selectedValue, mergedActivePickerIndex);

          if (_onOk) {
            _onOk(selectedValue);
          }
        }
      },
    });

    if (picker !== 'time' && !showTime) {
      var viewDate = getViewDate(mergedActivePickerIndex);
      var nextViewDate = getClosingViewDate(viewDate, picker, generateConfig);
      var currentMode = mergedModes[mergedActivePickerIndex];
      var showDoublePanel = currentMode === picker;
      var leftPanel = renderPanel(showDoublePanel ? 'left' : false, {
        pickerValue: viewDate,
        onPickerValueChange: function onPickerValueChange(newViewDate) {
          setViewDate(newViewDate, mergedActivePickerIndex);
        },
      });
      var rightPanel = renderPanel('right', {
        pickerValue: nextViewDate,
        onPickerValueChange: function onPickerValueChange(newViewDate) {
          setViewDate(
            getClosingViewDate(newViewDate, picker, generateConfig, -1),
            mergedActivePickerIndex,
          );
        },
      });

      if (direction === 'rtl') {
        panels = /*#__PURE__*/ react.createElement(
          react.Fragment,
          null,
          rightPanel,
          showDoublePanel && leftPanel,
        );
      } else {
        panels = /*#__PURE__*/ react.createElement(
          react.Fragment,
          null,
          leftPanel,
          showDoublePanel && rightPanel,
        );
      }
    } else {
      panels = renderPanel();
    }

    var mergedNodes = /*#__PURE__*/ react.createElement(
      react.Fragment,
      null,
      /*#__PURE__*/ react.createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-panels'),
        },
        panels,
      ),
      (extraNode || rangesNode) &&
        /*#__PURE__*/ react.createElement(
          'div',
          {
            className: ''.concat(prefixCls, '-footer'),
          },
          extraNode,
          rangesNode,
        ),
    );

    if (panelRender) {
      mergedNodes = panelRender(mergedNodes);
    }

    return /*#__PURE__*/ react.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-panel-container'),
        style: {
          marginLeft: panelLeft,
        },
        ref: panelDivRef,
        onMouseDown: function onMouseDown(e) {
          e.preventDefault();
        },
      },
      mergedNodes,
    );
  }

  var rangePanel = /*#__PURE__*/ react.createElement(
    'div',
    {
      className: classnames(
        ''.concat(prefixCls, '-range-wrapper'),
        ''.concat(prefixCls, '-').concat(picker, '-range-wrapper'),
      ),
      style: {
        minWidth: popupMinWidth,
      },
    },
    /*#__PURE__*/ react.createElement('div', {
      className: ''.concat(prefixCls, '-range-arrow'),
      style: arrowPositionStyle,
    }),
    renderPanels(),
  ); // ============================= Icons =============================

  var suffixNode;

  if (suffixIcon) {
    suffixNode = /*#__PURE__*/ react.createElement(
      'span',
      {
        className: ''.concat(prefixCls, '-suffix'),
      },
      suffixIcon,
    );
  }

  var clearNode;

  if (
    allowClear &&
    ((getValue(mergedValue, 0) && !mergedDisabled[0]) ||
      (getValue(mergedValue, 1) && !mergedDisabled[1]))
  ) {
    clearNode = /*#__PURE__*/ react.createElement(
      'span',
      {
        onMouseDown: function onMouseDown(e) {
          e.preventDefault();
          e.stopPropagation();
        },
        onMouseUp: function onMouseUp(e) {
          e.preventDefault();
          e.stopPropagation();
          var values = mergedValue;

          if (!mergedDisabled[0]) {
            values = updateValues(values, null, 0);
          }

          if (!mergedDisabled[1]) {
            values = updateValues(values, null, 1);
          }

          triggerChange(values, null);

          _triggerOpen(false, mergedActivePickerIndex);
        },
        className: ''.concat(prefixCls, '-clear'),
      },
      clearIcon ||
        /*#__PURE__*/ react.createElement('span', {
          className: ''.concat(prefixCls, '-clear-btn'),
        }),
    );
  }

  var inputSharedProps = {
    size: getInputSize(picker, formatList[0], generateConfig),
  };
  var activeBarLeft = 0;
  var activeBarWidth = 0;

  if (
    startInputDivRef.current &&
    endInputDivRef.current &&
    separatorRef.current
  ) {
    if (mergedActivePickerIndex === 0) {
      activeBarWidth = startInputDivRef.current.offsetWidth;
    } else {
      activeBarLeft = arrowLeft;
      activeBarWidth = endInputDivRef.current.offsetWidth;
    }
  }

  var activeBarPositionStyle =
    direction === 'rtl'
      ? {
          right: activeBarLeft,
        }
      : {
          left: activeBarLeft,
        }; // ============================ Return =============================

  var onContextSelect = function onContextSelect(date, type) {
    var values = updateValues(selectedValue, date, mergedActivePickerIndex);

    if (type === 'submit' || (type !== 'key' && !needConfirmButton)) {
      // triggerChange will also update selected values
      triggerChange(values, mergedActivePickerIndex); // clear hover value style

      if (mergedActivePickerIndex === 0) {
        onStartLeave();
      } else {
        onEndLeave();
      }
    } else {
      setSelectedValue(values);
    }
  };

  return /*#__PURE__*/ react.createElement(
    PanelContext.Provider,
    {
      value: {
        operationRef: operationRef,
        hideHeader: picker === 'time',
        onDateMouseEnter: onDateMouseEnter,
        onDateMouseLeave: onDateMouseLeave,
        hideRanges: true,
        onSelect: onContextSelect,
        open: mergedOpen,
      },
    },
    /*#__PURE__*/ react.createElement(
      PickerTrigger,
      {
        visible: mergedOpen,
        popupElement: rangePanel,
        popupStyle: popupStyle,
        prefixCls: prefixCls,
        dropdownClassName: dropdownClassName,
        dropdownAlign: dropdownAlign,
        getPopupContainer: getPopupContainer,
        transitionName: transitionName,
        range: true,
        direction: direction,
      },
      /*#__PURE__*/ react.createElement(
        'div',
        _extends(
          {
            ref: containerRef,
            className: classnames(
              prefixCls,
              ''.concat(prefixCls, '-range'),
              className,
              ((_classNames2 = {}),
              _defineProperty$1(
                _classNames2,
                ''.concat(prefixCls, '-disabled'),
                mergedDisabled[0] && mergedDisabled[1],
              ),
              _defineProperty$1(
                _classNames2,
                ''.concat(prefixCls, '-focused'),
                mergedActivePickerIndex === 0 ? startFocused : endFocused,
              ),
              _defineProperty$1(
                _classNames2,
                ''.concat(prefixCls, '-rtl'),
                direction === 'rtl',
              ),
              _classNames2),
            ),
            style: style,
            onClick: onPickerClick,
            onMouseDown: onPickerMouseDown,
          },
          getDataOrAriaProps(props),
        ),
        /*#__PURE__*/ react.createElement(
          'div',
          {
            className: classnames(
              ''.concat(prefixCls, '-input'),
              ((_classNames3 = {}),
              _defineProperty$1(
                _classNames3,
                ''.concat(prefixCls, '-input-active'),
                mergedActivePickerIndex === 0,
              ),
              _defineProperty$1(
                _classNames3,
                ''.concat(prefixCls, '-input-placeholder'),
                !!startHoverValue,
              ),
              _classNames3),
            ),
            ref: startInputDivRef,
          },
          /*#__PURE__*/ react.createElement(
            'input',
            _extends(
              {
                id: id,
                disabled: mergedDisabled[0],
                readOnly:
                  inputReadOnly ||
                  typeof formatList[0] === 'function' ||
                  !startTyping,
                value: startHoverValue || startText,
                onChange: function onChange(e) {
                  triggerStartTextChange(e.target.value);
                },
                autoFocus: autoFocus,
                placeholder: getValue(placeholder, 0) || '',
                ref: startInputRef,
              },
              startInputProps,
              inputSharedProps,
              {
                autoComplete: autoComplete,
              },
            ),
          ),
        ),
        /*#__PURE__*/ react.createElement(
          'div',
          {
            className: ''.concat(prefixCls, '-range-separator'),
            ref: separatorRef,
          },
          separator,
        ),
        /*#__PURE__*/ react.createElement(
          'div',
          {
            className: classnames(
              ''.concat(prefixCls, '-input'),
              ((_classNames4 = {}),
              _defineProperty$1(
                _classNames4,
                ''.concat(prefixCls, '-input-active'),
                mergedActivePickerIndex === 1,
              ),
              _defineProperty$1(
                _classNames4,
                ''.concat(prefixCls, '-input-placeholder'),
                !!endHoverValue,
              ),
              _classNames4),
            ),
            ref: endInputDivRef,
          },
          /*#__PURE__*/ react.createElement(
            'input',
            _extends(
              {
                disabled: mergedDisabled[1],
                readOnly:
                  inputReadOnly ||
                  typeof formatList[0] === 'function' ||
                  !endTyping,
                value: endHoverValue || endText,
                onChange: function onChange(e) {
                  triggerEndTextChange(e.target.value);
                },
                placeholder: getValue(placeholder, 1) || '',
                ref: endInputRef,
              },
              endInputProps,
              inputSharedProps,
              {
                autoComplete: autoComplete,
              },
            ),
          ),
        ),
        /*#__PURE__*/ react.createElement('div', {
          className: ''.concat(prefixCls, '-active-bar'),
          style: _objectSpread2$1(
            _objectSpread2$1({}, activeBarPositionStyle),
            {},
            {
              width: activeBarWidth,
              position: 'absolute',
            },
          ),
        }),
        suffixNode,
        clearNode,
      ),
    ),
  );
} // Wrap with class component to enable pass generic with instance method

var RangePicker = /*#__PURE__*/ (function (_React$Component) {
  _inherits(RangePicker, _React$Component);

  var _super = _createSuper(RangePicker);

  function RangePicker() {
    var _this;

    _classCallCheck(this, RangePicker);

    _this = _super.apply(this, arguments);
    _this.pickerRef = /*#__PURE__*/ react.createRef();

    _this.focus = function () {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.focus();
      }
    };

    _this.blur = function () {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.blur();
      }
    };

    return _this;
  }

  _createClass(RangePicker, [
    {
      key: 'render',
      value: function render() {
        return /*#__PURE__*/ react.createElement(
          InnerRangePicker,
          _extends({}, this.props, {
            pickerRef: this.pickerRef,
          }),
        );
      },
    },
  ]);

  return RangePicker;
})(react.Component);

function getRangePlaceholder(picker, locale, customizePlaceholder) {
  if (customizePlaceholder !== undefined) {
    return customizePlaceholder;
  }

  if (picker === 'year' && locale.lang.yearPlaceholder) {
    return locale.lang.rangeYearPlaceholder;
  }

  if (picker === 'month' && locale.lang.monthPlaceholder) {
    return locale.lang.rangeMonthPlaceholder;
  }

  if (picker === 'week' && locale.lang.weekPlaceholder) {
    return locale.lang.rangeWeekPlaceholder;
  }

  if (picker === 'time' && locale.timePickerLocale.placeholder) {
    return locale.timePickerLocale.rangePlaceholder;
  }

  return locale.lang.rangePlaceholder;
}

function PickerButton(props) {
  return /*#__PURE__*/ react.createElement(
    Button,
    _extends(
      {
        size: 'small',
        type: 'primary',
      },
      props,
    ),
  );
}

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

var CheckableTag = function CheckableTag(_a) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
    className = _a.className,
    checked = _a.checked,
    onChange = _a.onChange,
    onClick = _a.onClick,
    restProps = __rest(_a, [
      'prefixCls',
      'className',
      'checked',
      'onChange',
      'onClick',
    ]);

  var _React$useContext = react.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls;

  var handleClick = function handleClick(e) {
    if (onChange) {
      onChange(!checked);
    }

    if (onClick) {
      onClick(e);
    }
  };

  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var cls = classnames(
    prefixCls,
    ((_classNames = {}),
    _defineProperty$1(_classNames, ''.concat(prefixCls, '-checkable'), true),
    _defineProperty$1(
      _classNames,
      ''.concat(prefixCls, '-checkable-checked'),
      checked,
    ),
    _classNames),
    className,
  );
  return /*#__PURE__*/ react.createElement(
    'span',
    _extends({}, restProps, {
      className: cls,
      onClick: handleClick,
    }),
  );
};

var PresetStatusColorTypes = tuple$1(
  'success',
  'processing',
  'error',
  'default',
  'warning',
); // eslint-disable-next-line import/prefer-default-export

var PresetColorTypes = tuple$1(
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
);

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
var PresetColorRegex = new RegExp(
  '^('.concat(PresetColorTypes.join('|'), ')(-inverse)?$'),
);
var PresetStatusColorRegex = new RegExp(
  '^('.concat(PresetStatusColorTypes.join('|'), ')$'),
);

var InternalTag = function InternalTag(_a, ref) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
    className = _a.className,
    style = _a.style,
    children = _a.children,
    icon = _a.icon,
    color = _a.color,
    onClose = _a.onClose,
    closeIcon = _a.closeIcon,
    _a$closable = _a.closable,
    closable = _a$closable === void 0 ? false : _a$closable,
    props = __rest$1(_a, [
      'prefixCls',
      'className',
      'style',
      'children',
      'icon',
      'color',
      'onClose',
      'closeIcon',
      'closable',
    ]);

  var _React$useContext = react.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;

  var _React$useState = react.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    visible = _React$useState2[0],
    setVisible = _React$useState2[1];

  react.useEffect(
    function () {
      if ('visible' in props) {
        setVisible(props.visible);
      }
    },
    [props.visible],
  );

  var isPresetColor = function isPresetColor() {
    if (!color) {
      return false;
    }

    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  };

  var tagStyle = _extends(
    {
      backgroundColor: color && !isPresetColor() ? color : undefined,
    },
    style,
  );

  var presetColor = isPresetColor();
  var prefixCls = getPrefixCls('tag', customizePrefixCls);
  var tagClassName = classnames(
    prefixCls,
    ((_classNames = {}),
    _defineProperty$1(
      _classNames,
      ''.concat(prefixCls, '-').concat(color),
      presetColor,
    ),
    _defineProperty$1(
      _classNames,
      ''.concat(prefixCls, '-has-color'),
      color && !presetColor,
    ),
    _defineProperty$1(_classNames, ''.concat(prefixCls, '-hidden'), !visible),
    _defineProperty$1(
      _classNames,
      ''.concat(prefixCls, '-rtl'),
      direction === 'rtl',
    ),
    _classNames),
    className,
  );

  var handleCloseClick = function handleCloseClick(e) {
    e.stopPropagation();

    if (onClose) {
      onClose(e);
    }

    if (e.defaultPrevented) {
      return;
    }

    if (!('visible' in props)) {
      setVisible(false);
    }
  };

  var renderCloseIcon = function renderCloseIcon() {
    if (closable) {
      return closeIcon
        ? /*#__PURE__*/ react.createElement(
            'span',
            {
              className: ''.concat(prefixCls, '-close-icon'),
              onClick: handleCloseClick,
            },
            closeIcon,
          )
        : /*#__PURE__*/ react.createElement(CloseOutlined, {
            className: ''.concat(prefixCls, '-close-icon'),
            onClick: handleCloseClick,
          });
    }

    return null;
  };

  var isNeedWave = 'onClick' in props || (children && children.type === 'a');
  var tagProps = omit(props, ['visible']);
  var iconNode = icon || null;
  var kids = iconNode
    ? /*#__PURE__*/ react.createElement(
        react.Fragment,
        null,
        iconNode,
        /*#__PURE__*/ react.createElement('span', null, children),
      )
    : children;
  var tagNode = /*#__PURE__*/ react.createElement(
    'span',
    _extends({}, tagProps, {
      ref: ref,
      className: tagClassName,
      style: tagStyle,
    }),
    kids,
    renderCloseIcon(),
  );
  return isNeedWave
    ? /*#__PURE__*/ react.createElement(Wave, null, tagNode)
    : tagNode;
};

var Tag = /*#__PURE__*/ react.forwardRef(InternalTag);
Tag.displayName = 'Tag';
Tag.CheckableTag = CheckableTag;

function PickerTag(props) {
  return /*#__PURE__*/ react.createElement(
    Tag,
    _extends(
      {
        color: 'blue',
      },
      props,
    ),
  );
}

var Components = {
  button: PickerButton,
  rangeItem: PickerTag,
};

function toArray$1(list) {
  if (!list) {
    return [];
  }

  return Array.isArray(list) ? list : [list];
}

function getTimeProps(props) {
  var format = props.format,
    picker = props.picker,
    showHour = props.showHour,
    showMinute = props.showMinute,
    showSecond = props.showSecond,
    use12Hours = props.use12Hours;
  var firstFormat = toArray$1(format)[0];

  var showTimeObj = _extends({}, props);

  if (firstFormat && typeof firstFormat === 'string') {
    if (!firstFormat.includes('s') && showSecond === undefined) {
      showTimeObj.showSecond = false;
    }

    if (!firstFormat.includes('m') && showMinute === undefined) {
      showTimeObj.showMinute = false;
    }

    if (
      !firstFormat.includes('H') &&
      !firstFormat.includes('h') &&
      showHour === undefined
    ) {
      showTimeObj.showHour = false;
    }

    if (
      (firstFormat.includes('a') || firstFormat.includes('A')) &&
      use12Hours === undefined
    ) {
      showTimeObj.use12Hours = true;
    }
  }

  if (picker === 'time') {
    return showTimeObj;
  }

  if (typeof firstFormat === 'function') {
    // format of showTime should use default when format is custom format function
    delete showTimeObj.format;
  }

  return {
    showTime: showTimeObj,
  };
}

var __rest$2 =
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
function generateRangePicker(generateConfig) {
  var RangePicker$1 = /*#__PURE__*/ (function (_React$Component) {
    _inherits(RangePicker$1, _React$Component);

    var _super = _createSuper(RangePicker$1);

    function RangePicker$1() {
      var _this;

      _classCallCheck(this, RangePicker$1);

      _this = _super.apply(this, arguments);
      _this.pickerRef = /*#__PURE__*/ react.createRef();

      _this.focus = function () {
        if (_this.pickerRef.current) {
          _this.pickerRef.current.focus();
        }
      };

      _this.blur = function () {
        if (_this.pickerRef.current) {
          _this.pickerRef.current.blur();
        }
      };

      _this.getDefaultLocale = function () {
        var locale$1 = _this.props.locale;

        var result = _extends(_extends({}, locale), locale$1);

        result.lang = _extends(
          _extends({}, result.lang),
          (locale$1 || {}).lang,
        );
        return result;
      };

      _this.renderPicker = function (locale) {
        var _this$context = _this.context,
          getPrefixCls = _this$context.getPrefixCls,
          direction = _this$context.direction,
          getPopupContainer = _this$context.getPopupContainer;

        var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          customGetPopupContainer = _a.getPopupContainer,
          className = _a.className,
          customizeSize = _a.size,
          _a$bordered = _a.bordered,
          bordered = _a$bordered === void 0 ? true : _a$bordered,
          placeholder = _a.placeholder,
          restProps = __rest$2(_a, [
            'prefixCls',
            'getPopupContainer',
            'className',
            'size',
            'bordered',
            'placeholder',
          ]);

        var _this$props = _this.props,
          format = _this$props.format,
          showTime = _this$props.showTime,
          picker = _this$props.picker;
        var prefixCls = getPrefixCls('picker', customizePrefixCls);
        var additionalOverrideProps = {};
        additionalOverrideProps = _extends(
          _extends(
            _extends({}, additionalOverrideProps),
            showTime
              ? getTimeProps(
                  _extends(
                    {
                      format: format,
                      picker: picker,
                    },
                    showTime,
                  ),
                )
              : {},
          ),
          picker === 'time'
            ? getTimeProps(
                _extends(
                  _extends(
                    {
                      format: format,
                    },
                    _this.props,
                  ),
                  {
                    picker: picker,
                  },
                ),
              )
            : {},
        );
        return /*#__PURE__*/ react.createElement(
          SizeContext.Consumer,
          null,
          function (size) {
            var _classNames;

            var mergedSize = customizeSize || size;
            return /*#__PURE__*/ react.createElement(
              RangePicker,
              _extends(
                {
                  separator: /*#__PURE__*/ react.createElement(
                    'span',
                    {
                      'aria-label': 'to',
                      className: ''.concat(prefixCls, '-separator'),
                    },
                    /*#__PURE__*/ react.createElement(
                      SwapRightOutlined$2,
                      null,
                    ),
                  ),
                  ref: _this.pickerRef,
                  placeholder: getRangePlaceholder(picker, locale, placeholder),
                  suffixIcon:
                    picker === 'time'
                      ? /*#__PURE__*/ react.createElement(
                          ClockCircleOutlined$2,
                          null,
                        )
                      : /*#__PURE__*/ react.createElement(
                          CalendarOutlined$2,
                          null,
                        ),
                  clearIcon: /*#__PURE__*/ react.createElement(
                    CloseCircleFilled,
                    null,
                  ),
                  allowClear: true,
                  transitionName: 'slide-up',
                },
                restProps,
                additionalOverrideProps,
                {
                  className: classnames(
                    ((_classNames = {}),
                    _defineProperty$1(
                      _classNames,
                      ''.concat(prefixCls, '-').concat(mergedSize),
                      mergedSize,
                    ),
                    _defineProperty$1(
                      _classNames,
                      ''.concat(prefixCls, '-borderless'),
                      !bordered,
                    ),
                    _classNames),
                    className,
                  ),
                  locale: locale.lang,
                  prefixCls: prefixCls,
                  getPopupContainer:
                    customGetPopupContainer || getPopupContainer,
                  generateConfig: generateConfig,
                  prevIcon: /*#__PURE__*/ react.createElement('span', {
                    className: ''.concat(prefixCls, '-prev-icon'),
                  }),
                  nextIcon: /*#__PURE__*/ react.createElement('span', {
                    className: ''.concat(prefixCls, '-next-icon'),
                  }),
                  superPrevIcon: /*#__PURE__*/ react.createElement('span', {
                    className: ''.concat(prefixCls, '-super-prev-icon'),
                  }),
                  superNextIcon: /*#__PURE__*/ react.createElement('span', {
                    className: ''.concat(prefixCls, '-super-next-icon'),
                  }),
                  components: Components,
                  direction: direction,
                },
              ),
            );
          },
        );
      };

      return _this;
    }

    _createClass(RangePicker$1, [
      {
        key: 'render',
        value: function render() {
          return /*#__PURE__*/ react.createElement(
            LocaleReceiver,
            {
              componentName: 'DatePicker',
              defaultLocale: this.getDefaultLocale,
            },
            this.renderPicker,
          );
        },
      },
    ]);

    return RangePicker$1;
  })(react.Component);

  RangePicker$1.contextType = ConfigContext;
  return RangePicker$1;
}

export default generateRangePicker;
