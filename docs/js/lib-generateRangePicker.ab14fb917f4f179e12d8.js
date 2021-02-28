(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    57: function (e, t, n) {
      'use strict';
      (function (e) {
        n(11), n(13);
        var o = n(3),
          r = n(0),
          a = n(4),
          i = n(18),
          c = n(5),
          u = n(19),
          l = n(15),
          s = n(10),
          f = n(7);
        n(2), n(16);
        function d(e, t, n) {
          var o = r.b.useRef({});
          return (
            ('value' in o.current && !n(o.current.condition, t)) ||
              ((o.current.value = e()), (o.current.condition = t)),
            o.current.value
          );
        }
        var p = {
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
          },
          b = function (e, t) {
            return r.b.createElement(
              a.b,
              Object.assign({}, e, { ref: t, icon: p }),
            );
          };
        b.displayName = 'CalendarOutlined';
        var h = r.b.forwardRef(b),
          v = {
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
          },
          m = function (e, t) {
            return r.b.createElement(
              a.b,
              Object.assign({}, e, { ref: t, icon: v }),
            );
          };
        m.displayName = 'ClockCircleOutlined';
        var g = r.b.forwardRef(m),
          w = {
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
          },
          y = function (e, t) {
            return r.b.createElement(
              a.b,
              Object.assign({}, e, { ref: t, icon: w }),
            );
          };
        y.displayName = 'SwapRightOutlined';
        var C = r.b.forwardRef(y);
        function O(e, t) {
          var n = t || {},
            a = n.defaultValue,
            i = n.value,
            c = n.onChange,
            u = n.postState,
            l = r.b.useState(function () {
              return void 0 !== i
                ? i
                : void 0 !== a
                ? 'function' == typeof a
                  ? a()
                  : a
                : 'function' == typeof e
                ? e()
                : e;
            }),
            s = Object(o.g)(l, 2),
            f = s[0],
            d = s[1],
            p = void 0 !== i ? i : f;
          u && (p = u(p));
          var b = r.b.useRef(!0);
          return (
            r.b.useEffect(
              function () {
                b.current ? (b.current = !1) : void 0 === i && d(i);
              },
              [i],
            ),
            [
              p,
              function (e) {
                d(e), p !== e && c && c(e, p);
              },
            ]
          );
        }
        var E = {
            MAC_ENTER: 3,
            BACKSPACE: 8,
            TAB: 9,
            NUM_CENTER: 12,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAUSE: 19,
            CAPS_LOCK: 20,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PRINT_SCREEN: 44,
            INSERT: 45,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            QUESTION_MARK: 63,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            META: 91,
            WIN_KEY_RIGHT: 92,
            CONTEXT_MENU: 93,
            NUM_ZERO: 96,
            NUM_ONE: 97,
            NUM_TWO: 98,
            NUM_THREE: 99,
            NUM_FOUR: 100,
            NUM_FIVE: 101,
            NUM_SIX: 102,
            NUM_SEVEN: 103,
            NUM_EIGHT: 104,
            NUM_NINE: 105,
            NUM_MULTIPLY: 106,
            NUM_PLUS: 107,
            NUM_MINUS: 109,
            NUM_PERIOD: 110,
            NUM_DIVISION: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            NUMLOCK: 144,
            SEMICOLON: 186,
            DASH: 189,
            EQUALS: 187,
            COMMA: 188,
            PERIOD: 190,
            SLASH: 191,
            APOSTROPHE: 192,
            SINGLE_QUOTE: 222,
            OPEN_SQUARE_BRACKET: 219,
            BACKSLASH: 220,
            CLOSE_SQUARE_BRACKET: 221,
            WIN_KEY: 224,
            MAC_FF_META: 224,
            WIN_IME: 229,
            isTextModifyingKeyEvent: function (e) {
              var t = e.keyCode;
              if (
                (e.altKey && !e.ctrlKey) ||
                e.metaKey ||
                (t >= E.F1 && t <= E.F12)
              )
                return !1;
              switch (t) {
                case E.ALT:
                case E.CAPS_LOCK:
                case E.CONTEXT_MENU:
                case E.CTRL:
                case E.DOWN:
                case E.END:
                case E.ESC:
                case E.HOME:
                case E.INSERT:
                case E.LEFT:
                case E.MAC_FF_META:
                case E.META:
                case E.NUMLOCK:
                case E.NUM_CENTER:
                case E.PAGE_DOWN:
                case E.PAGE_UP:
                case E.PAUSE:
                case E.PRINT_SCREEN:
                case E.RIGHT:
                case E.SHIFT:
                case E.UP:
                case E.WIN_KEY:
                case E.WIN_KEY_RIGHT:
                  return !1;
                default:
                  return !0;
              }
            },
            isCharacterKey: function (e) {
              if (e >= E.ZERO && e <= E.NINE) return !0;
              if (e >= E.NUM_ZERO && e <= E.NUM_MULTIPLY) return !0;
              if (e >= E.A && e <= E.Z) return !0;
              if (
                -1 !== window.navigator.userAgent.indexOf('WebKit') &&
                0 === e
              )
                return !0;
              switch (e) {
                case E.SPACE:
                case E.QUESTION_MARK:
                case E.NUM_PLUS:
                case E.NUM_MINUS:
                case E.NUM_PERIOD:
                case E.NUM_DIVISION:
                case E.SEMICOLON:
                case E.DASH:
                case E.EQUALS:
                case E.COMMA:
                case E.PERIOD:
                case E.SLASH:
                case E.APOSTROPHE:
                case E.SINGLE_QUOTE:
                case E.OPEN_SQUARE_BRACKET:
                case E.BACKSLASH:
                case E.CLOSE_SQUARE_BRACKET:
                  return !0;
                default:
                  return !1;
              }
            },
          },
          j = r.b.createContext({}),
          k = { visibility: 'hidden' };
        function M(e) {
          var t = e.prefixCls,
            n = e.prevIcon,
            o = void 0 === n ? '‹' : n,
            a = e.nextIcon,
            i = void 0 === a ? '›' : a,
            c = e.superPrevIcon,
            u = void 0 === c ? '«' : c,
            l = e.superNextIcon,
            s = void 0 === l ? '»' : l,
            f = e.onSuperPrev,
            d = e.onSuperNext,
            p = e.onPrev,
            b = e.onNext,
            h = e.children,
            v = r.b.useContext(j),
            m = v.hideNextBtn,
            g = v.hidePrevBtn;
          return r.b.createElement(
            'div',
            { className: t },
            f &&
              r.b.createElement(
                'button',
                {
                  type: 'button',
                  onClick: f,
                  tabIndex: -1,
                  className: ''.concat(t, '-super-prev-btn'),
                  style: g ? k : {},
                },
                u,
              ),
            p &&
              r.b.createElement(
                'button',
                {
                  type: 'button',
                  onClick: p,
                  tabIndex: -1,
                  className: ''.concat(t, '-prev-btn'),
                  style: g ? k : {},
                },
                o,
              ),
            r.b.createElement('div', { className: ''.concat(t, '-view') }, h),
            b &&
              r.b.createElement(
                'button',
                {
                  type: 'button',
                  onClick: b,
                  tabIndex: -1,
                  className: ''.concat(t, '-next-btn'),
                  style: m ? k : {},
                },
                i,
              ),
            d &&
              r.b.createElement(
                'button',
                {
                  type: 'button',
                  onClick: d,
                  tabIndex: -1,
                  className: ''.concat(t, '-super-next-btn'),
                  style: m ? k : {},
                },
                s,
              ),
          );
        }
        function x(e) {
          var t = e.prefixCls,
            n = e.generateConfig,
            a = e.viewDate,
            i = e.onPrevDecades,
            c = e.onNextDecades;
          if (r.b.useContext(j).hideHeader) return null;
          var u = ''.concat(t, '-header'),
            l = n.getYear(a),
            s = Math.floor(l / F) * F,
            f = s + F - 1;
          return r.b.createElement(
            M,
            Object(o.j)({}, e, {
              prefixCls: u,
              onSuperPrev: i,
              onSuperNext: c,
            }),
            s,
            '-',
            f,
          );
        }
        function N(e, t, n, o, r) {
          var a = e.setHour(t, n);
          return (a = e.setMinute(a, o)), (a = e.setSecond(a, r));
        }
        function D(e, t) {
          var n = e.getYear(t),
            o = e.getMonth(t) + 1,
            r = e.getEndDate(
              e.getFixedDate(''.concat(n, '-').concat(o, '-01')),
            ),
            a = e.getDate(r),
            i = o < 10 ? '0'.concat(o) : ''.concat(o);
          return ''.concat(n, '-').concat(i, '-').concat(a);
        }
        function P(e) {
          for (
            var t = e.prefixCls,
              n = e.disabledDate,
              a = e.onSelect,
              i = e.picker,
              c = e.rowNum,
              u = e.colNum,
              l = e.prefixColumn,
              s = e.rowClassName,
              f = e.baseDate,
              d = e.getCellClassName,
              p = e.getCellText,
              b = e.getCellNode,
              h = e.getCellDate,
              v = e.generateConfig,
              m = e.titleCell,
              g = e.headerCells,
              w = r.b.useContext(j),
              y = w.onDateMouseEnter,
              C = w.onDateMouseLeave,
              O = w.mode,
              E = ''.concat(t, '-cell'),
              k = [],
              M = 0;
            M < c;
            M += 1
          ) {
            for (
              var x = [],
                N = void 0,
                P = function (e) {
                  var t,
                    c = h(f, M * u + e),
                    s = ee({
                      cellDate: c,
                      mode: O,
                      disabledDate: n,
                      generateConfig: v,
                    });
                  0 === e && ((N = c), l && x.push(l(N)));
                  var g = m && m(c);
                  x.push(
                    r.b.createElement(
                      'td',
                      {
                        key: e,
                        title: g,
                        className: Object(o.h)(
                          E,
                          Object(o.l)(
                            ((t = {}),
                            Object(o.i)(t, ''.concat(E, '-disabled'), s),
                            Object(o.i)(
                              t,
                              ''.concat(E, '-start'),
                              1 === p(c) ||
                                ('year' === i && Number(g) % 10 == 0),
                            ),
                            Object(o.i)(
                              t,
                              ''.concat(E, '-end'),
                              g === D(v, c) ||
                                ('year' === i && Number(g) % 10 == 9),
                            ),
                            t),
                            d(c),
                          ),
                        ),
                        onClick: function () {
                          s || a(c);
                        },
                        onMouseEnter: function () {
                          !s && y && y(c);
                        },
                        onMouseLeave: function () {
                          !s && C && C(c);
                        },
                      },
                      b
                        ? b(c)
                        : r.b.createElement(
                            'div',
                            { className: ''.concat(E, '-inner') },
                            p(c),
                          ),
                    ),
                  );
                },
                S = 0;
              S < u;
              S += 1
            )
              P(S);
            k.push(
              r.b.createElement('tr', { key: M, className: s && s(N) }, x),
            );
          }
          return r.b.createElement(
            'div',
            { className: ''.concat(t, '-body') },
            r.b.createElement(
              'table',
              { className: ''.concat(t, '-content') },
              g &&
                r.b.createElement(
                  'thead',
                  null,
                  r.b.createElement('tr', null, g),
                ),
              r.b.createElement('tbody', null, k),
            ),
          );
        }
        function S(e) {
          var t = I - 1,
            n = e.prefixCls,
            a = e.viewDate,
            i = e.generateConfig,
            c = ''.concat(n, '-cell'),
            u = i.getYear(a),
            l = Math.floor(u / I) * I,
            s = Math.floor(u / F) * F,
            f = s + F - 1,
            d = i.setYear(a, s - Math.ceil((12 * I - F) / 2));
          return r.b.createElement(
            P,
            Object(o.j)({}, e, {
              rowNum: 4,
              colNum: 3,
              baseDate: d,
              getCellText: function (e) {
                var n = i.getYear(e);
                return ''.concat(n, '-').concat(n + t);
              },
              getCellClassName: function (e) {
                var n,
                  r = i.getYear(e),
                  a = r + t;
                return (
                  (n = {}),
                  Object(o.i)(n, ''.concat(c, '-in-view'), s <= r && a <= f),
                  Object(o.i)(n, ''.concat(c, '-selected'), r === l),
                  n
                );
              },
              getCellDate: function (e, t) {
                return i.addYear(e, t * I);
              },
            }),
          );
        }
        var T = function (e) {
            if (!e) return !1;
            if (e.offsetParent) return !0;
            if (e.getBBox) {
              var t = e.getBBox();
              if (t.width || t.height) return !0;
            }
            if (e.getBoundingClientRect) {
              var n = e.getBoundingClientRect();
              if (n.width || n.height) return !0;
            }
            return !1;
          },
          R = new Map();
        function _(e, t, n) {
          if ((R.get(e) && cancelAnimationFrame(R.get(e)), n <= 0))
            R.set(
              e,
              requestAnimationFrame(function () {
                e.scrollTop = t;
              }),
            );
          else {
            var o = ((t - e.scrollTop) / n) * 10;
            R.set(
              e,
              requestAnimationFrame(function () {
                (e.scrollTop += o), e.scrollTop !== t && _(e, t, n - 10);
              }),
            );
          }
        }
        function A(e, t) {
          var n = t.onLeftRight,
            o = t.onCtrlLeftRight,
            r = t.onUpDown,
            a = t.onPageUpDown,
            i = t.onEnter,
            c = e.which,
            u = e.ctrlKey,
            l = e.metaKey;
          switch (c) {
            case E.LEFT:
              if (u || l) {
                if (o) return o(-1), !0;
              } else if (n) return n(-1), !0;
              break;
            case E.RIGHT:
              if (u || l) {
                if (o) return o(1), !0;
              } else if (n) return n(1), !0;
              break;
            case E.UP:
              if (r) return r(-1), !0;
              break;
            case E.DOWN:
              if (r) return r(1), !0;
              break;
            case E.PAGE_UP:
              if (a) return a(-1), !0;
              break;
            case E.PAGE_DOWN:
              if (a) return a(1), !0;
              break;
            case E.ENTER:
              if (i) return i(), !0;
          }
          return !1;
        }
        function Y(e, t, n) {
          var o = 'time' === e ? 8 : 10,
            r = 'function' == typeof t ? t(n.getNow()).length : t.length;
          return Math.max(o, r) + 2;
        }
        var H = null,
          V = new Set();
        var L = {
          year: function (e) {
            return 'month' === e || 'date' === e ? 'year' : e;
          },
          month: function (e) {
            return 'date' === e ? 'month' : e;
          },
          quarter: function (e) {
            return 'month' === e || 'date' === e ? 'quarter' : e;
          },
          week: function (e) {
            return 'date' === e ? 'week' : e;
          },
          time: null,
          date: null,
        };
        var I = 10,
          F = 10 * I;
        function W(e) {
          var t = e.prefixCls,
            n = e.onViewDateChange,
            a = e.generateConfig,
            i = e.viewDate,
            c = e.operationRef,
            u = e.onSelect,
            l = e.onPanelChange,
            s = ''.concat(t, '-decade-panel');
          c.current = {
            onKeyDown: function (e) {
              return A(e, {
                onLeftRight: function (e) {
                  u(a.addYear(i, e * I), 'key');
                },
                onCtrlLeftRight: function (e) {
                  u(a.addYear(i, e * F), 'key');
                },
                onUpDown: function (e) {
                  u(a.addYear(i, e * I * 3), 'key');
                },
                onEnter: function () {
                  l('year', i);
                },
              });
            },
          };
          var f = function (e) {
            var t = a.addYear(i, e * F);
            n(t), l(null, t);
          };
          return r.b.createElement(
            'div',
            { className: s },
            r.b.createElement(
              x,
              Object(o.j)({}, e, {
                prefixCls: t,
                onPrevDecades: function () {
                  f(-1);
                },
                onNextDecades: function () {
                  f(1);
                },
              }),
            ),
            r.b.createElement(
              S,
              Object(o.j)({}, e, {
                prefixCls: t,
                onSelect: function (e) {
                  u(e, 'mouse'), l('year', e);
                },
              }),
            ),
          );
        }
        function U(e, t) {
          return (!e && !t) || (!(!e || !t) && void 0);
        }
        function B(e, t, n) {
          var o = U(t, n);
          return 'boolean' == typeof o ? o : e.getYear(t) === e.getYear(n);
        }
        function K(e, t) {
          return Math.floor(e.getMonth(t) / 3) + 1;
        }
        function z(e, t, n) {
          var o = U(t, n);
          return 'boolean' == typeof o ? o : B(e, t, n) && K(e, t) === K(e, n);
        }
        function X(e, t, n) {
          var o = U(t, n);
          return 'boolean' == typeof o
            ? o
            : B(e, t, n) && e.getMonth(t) === e.getMonth(n);
        }
        function q(e, t, n) {
          var o = U(t, n);
          return 'boolean' == typeof o
            ? o
            : e.getYear(t) === e.getYear(n) &&
                e.getMonth(t) === e.getMonth(n) &&
                e.getDate(t) === e.getDate(n);
        }
        function G(e, t, n, o) {
          var r = U(n, o);
          return 'boolean' == typeof r
            ? r
            : e.locale.getWeek(t, n) === e.locale.getWeek(t, o);
        }
        function Q(e, t, n) {
          return (
            q(e, t, n) &&
            (function (e, t, n) {
              var o = U(t, n);
              return 'boolean' == typeof o
                ? o
                : e.getHour(t) === e.getHour(n) &&
                    e.getMinute(t) === e.getMinute(n) &&
                    e.getSecond(t) === e.getSecond(n);
            })(e, t, n)
          );
        }
        function Z(e, t, n, o) {
          return (
            !!(t && n && o) &&
            !q(e, t, o) &&
            !q(e, n, o) &&
            e.isAfter(o, t) &&
            e.isAfter(n, o)
          );
        }
        function $(e, t, n) {
          var o =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          switch (t) {
            case 'year':
              return n.addYear(e, 10 * o);
            case 'quarter':
            case 'month':
              return n.addYear(e, o);
            default:
              return n.addMonth(e, o);
          }
        }
        function J(e, t) {
          var n = t.generateConfig,
            o = t.locale,
            r = t.format;
          return 'function' == typeof r
            ? r(e)
            : n.locale.format(o.locale, e, r);
        }
        function ee(e) {
          var t = e.cellDate,
            n = e.mode,
            o = e.disabledDate,
            r = e.generateConfig;
          if (!o) return !1;
          var a = function (e, n, a) {
            for (var i = n; i <= a; ) {
              var c = void 0;
              switch (e) {
                case 'date':
                  if (((c = r.setDate(t, i)), !o(c))) return !1;
                  break;
                case 'month':
                  if (
                    !ee({
                      cellDate: (c = r.setMonth(t, i)),
                      mode: 'month',
                      generateConfig: r,
                      disabledDate: o,
                    })
                  )
                    return !1;
                  break;
                case 'year':
                  if (
                    !ee({
                      cellDate: (c = r.setYear(t, i)),
                      mode: 'year',
                      generateConfig: r,
                      disabledDate: o,
                    })
                  )
                    return !1;
              }
              i += 1;
            }
            return !0;
          };
          switch (n) {
            case 'date':
            case 'week':
              return o(t);
            case 'month':
              return a('date', 1, r.getDate(r.getEndDate(t)));
            case 'quarter':
              var i = 3 * Math.floor(r.getMonth(t) / 3);
              return a('month', i, i + 2);
            case 'year':
              return a('month', 0, 11);
            case 'decade':
              var c = r.getYear(t),
                u = Math.floor(c / I) * I;
              return a('year', u, u + I - 1);
          }
        }
        function te(e) {
          if (r.b.useContext(j).hideHeader) return null;
          var t = e.prefixCls,
            n = e.generateConfig,
            o = e.locale,
            a = e.value,
            i = e.format,
            c = ''.concat(t, '-header');
          return r.b.createElement(
            M,
            { prefixCls: c },
            a ? J(a, { locale: o, format: i, generateConfig: n }) : ' ',
          );
        }
        function ne(e) {
          var t = e.prefixCls,
            n = e.units,
            i = e.onSelect,
            c = e.value,
            u = e.active,
            l = e.hideDisabledOptions,
            s = ''.concat(t, '-cell'),
            f = r.b.useContext(j).open,
            d = r.b.useRef(null),
            p = r.b.useRef(new Map()),
            b = r.b.useRef();
          return (
            r.b.useLayoutEffect(
              function () {
                var e = p.current.get(c);
                e && !1 !== f && _(d.current, e.offsetTop, 120);
              },
              [c],
            ),
            r.b.useLayoutEffect(
              function () {
                if (f) {
                  var e = p.current.get(c);
                  e &&
                    (b.current =
                      ((t = e),
                      (n = function () {
                        _(d.current, e.offsetTop, 0);
                      }),
                      (function e() {
                        T(t)
                          ? n()
                          : (o = Object(a.g)(function () {
                              e();
                            }));
                      })(),
                      function () {
                        a.g.cancel(o);
                      }));
                }
                var t, n, o;
                return function () {
                  var e;
                  null === (e = b.current) || void 0 === e || e.call(b);
                };
              },
              [f],
            ),
            r.b.createElement(
              'ul',
              {
                className: Object(o.h)(
                  ''.concat(t, '-column'),
                  Object(o.i)({}, ''.concat(t, '-column-active'), u),
                ),
                ref: d,
                style: { position: 'relative' },
              },
              n.map(function (e) {
                var t;
                return l && e.disabled
                  ? null
                  : r.b.createElement(
                      'li',
                      {
                        key: e.value,
                        ref: function (t) {
                          p.current.set(e.value, t);
                        },
                        className: Object(o.h)(
                          s,
                          ((t = {}),
                          Object(o.i)(t, ''.concat(s, '-disabled'), e.disabled),
                          Object(o.i)(
                            t,
                            ''.concat(s, '-selected'),
                            c === e.value,
                          ),
                          t),
                        ),
                        onClick: function () {
                          e.disabled || i(e.value);
                        },
                      },
                      r.b.createElement(
                        'div',
                        { className: ''.concat(s, '-inner') },
                        e.label,
                      ),
                    );
              }),
            )
          );
        }
        function oe(e, t) {
          for (
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : '0',
              o = String(e);
            o.length < t;

          )
            o = ''.concat(n).concat(e);
          return o;
        }
        function re(e, t) {
          return e ? e[t] : null;
        }
        function ae(e, t, n) {
          var o = [re(e, 0), re(e, 1)];
          return (
            (o[n] = 'function' == typeof t ? t(o[n]) : t),
            o[0] || o[1] ? o : null
          );
        }
        function ie(e, t) {
          if (e.length !== t.length) return !0;
          for (var n = 0; n < e.length; n += 1)
            if (e[n].disabled !== t[n].disabled) return !0;
          return !1;
        }
        function ce(e, t, n, o) {
          for (var r = [], a = e; a <= t; a += n)
            r.push({
              label: oe(a, 2),
              value: a,
              disabled: (o || []).includes(a),
            });
          return r;
        }
        function ue(e) {
          var t,
            n = e.generateConfig,
            a = e.prefixCls,
            i = e.operationRef,
            c = e.activeColumnIndex,
            u = e.value,
            l = e.showHour,
            s = e.showMinute,
            f = e.showSecond,
            p = e.use12Hours,
            b = e.hourStep,
            h = void 0 === b ? 1 : b,
            v = e.minuteStep,
            m = void 0 === v ? 1 : v,
            g = e.secondStep,
            w = void 0 === g ? 1 : g,
            y = e.disabledHours,
            C = e.disabledMinutes,
            O = e.disabledSeconds,
            E = e.hideDisabledOptions,
            j = e.onSelect,
            k = [],
            M = ''.concat(a, '-content'),
            x = ''.concat(a, '-time-panel'),
            D = u ? n.getHour(u) : -1,
            P = D,
            S = u ? n.getMinute(u) : -1,
            T = u ? n.getSecond(u) : -1,
            R = function (e, t, o, r) {
              var a = u || n.getNow(),
                i = Math.max(0, t),
                c = Math.max(0, o),
                l = Math.max(0, r);
              return (a = N(n, a, p && e ? i + 12 : i, c, l));
            },
            _ = ce(0, 23, h, y && y()),
            A = d(
              function () {
                return _;
              },
              _,
              ie,
            );
          p && ((t = P >= 12), (P %= 12));
          var Y = r.b.useMemo(
              function () {
                if (!p) return [!1, !1];
                var e = [!0, !0];
                return (
                  A.forEach(function (t) {
                    var n = t.disabled,
                      o = t.value;
                    n || (o >= 12 ? (e[1] = !1) : (e[0] = !1));
                  }),
                  e
                );
              },
              [p, A],
            ),
            H = Object(o.g)(Y, 2),
            V = H[0],
            L = H[1],
            I = r.b.useMemo(
              function () {
                return p
                  ? A.filter(
                      t
                        ? function (e) {
                            return e.value >= 12;
                          }
                        : function (e) {
                            return e.value < 12;
                          },
                    ).map(function (e) {
                      var t = e.value % 12,
                        n = 0 === t ? '12' : oe(t, 2);
                      return Object(o.l)(
                        Object(o.l)({}, e),
                        {},
                        { label: n, value: t },
                      );
                    })
                  : A;
              },
              [p, t, A],
            ),
            F = ce(0, 59, m, C && C(D)),
            W = ce(0, 59, w, O && O(D, S));
          function U(e, t, n, o, a) {
            !1 !== e &&
              k.push({
                node: r.b.cloneElement(t, {
                  prefixCls: x,
                  value: n,
                  active: c === k.length,
                  onSelect: a,
                  units: o,
                  hideDisabledOptions: E,
                }),
                onSelect: a,
                value: n,
                units: o,
              });
          }
          (i.current = {
            onUpDown: function (e) {
              var t = k[c];
              if (t)
                for (
                  var n = t.units.findIndex(function (e) {
                      return e.value === t.value;
                    }),
                    o = t.units.length,
                    r = 1;
                  r < o;
                  r += 1
                ) {
                  var a = t.units[(n + e * r + o) % o];
                  if (!0 !== a.disabled) {
                    t.onSelect(a.value);
                    break;
                  }
                }
            },
          }),
            U(l, r.b.createElement(ne, { key: 'hour' }), P, I, function (e) {
              j(R(t, e, S, T), 'mouse');
            }),
            U(s, r.b.createElement(ne, { key: 'minute' }), S, F, function (e) {
              j(R(t, P, e, T), 'mouse');
            }),
            U(f, r.b.createElement(ne, { key: 'second' }), T, W, function (e) {
              j(R(t, P, S, e), 'mouse');
            });
          var B = -1;
          return (
            'boolean' == typeof t && (B = t ? 1 : 0),
            U(
              !0 === p,
              r.b.createElement(ne, { key: '12hours' }),
              B,
              [
                { label: 'AM', value: 0, disabled: V },
                { label: 'PM', value: 1, disabled: L },
              ],
              function (e) {
                j(R(!!e, P, S, T), 'mouse');
              },
            ),
            r.b.createElement(
              'div',
              { className: M },
              k.map(function (e) {
                return e.node;
              }),
            )
          );
        }
        function le(e) {
          var t = e.generateConfig,
            n = e.format,
            a = void 0 === n ? 'HH:mm:ss' : n,
            i = e.prefixCls,
            c = e.active,
            u = e.operationRef,
            l = e.showHour,
            s = e.showMinute,
            f = e.showSecond,
            d = e.use12Hours,
            p = void 0 !== d && d,
            b = e.onSelect,
            h = e.value,
            v = ''.concat(i, '-time-panel'),
            m = r.b.useRef(),
            g = r.b.useState(-1),
            w = Object(o.g)(g, 2),
            y = w[0],
            C = w[1],
            O = [l, s, f, p].filter(function (e) {
              return !1 !== e;
            }).length;
          return (
            (u.current = {
              onKeyDown: function (e) {
                return A(e, {
                  onLeftRight: function (e) {
                    C((y + e + O) % O);
                  },
                  onUpDown: function (e) {
                    -1 === y ? C(0) : m.current && m.current.onUpDown(e);
                  },
                  onEnter: function () {
                    b(h || t.getNow(), 'key'), C(-1);
                  },
                });
              },
              onBlur: function () {
                C(-1);
              },
            }),
            r.b.createElement(
              'div',
              {
                className: Object(o.h)(
                  v,
                  Object(o.i)({}, ''.concat(v, '-active'), c),
                ),
              },
              r.b.createElement(
                te,
                Object(o.j)({}, e, { format: a, prefixCls: i }),
              ),
              r.b.createElement(
                ue,
                Object(o.j)({}, e, {
                  prefixCls: i,
                  activeColumnIndex: y,
                  operationRef: m,
                }),
              ),
            )
          );
        }
        var se = r.b.createContext({});
        function fe(e) {
          var t = e.cellPrefixCls,
            n = e.generateConfig,
            r = e.rangedValue,
            a = e.hoverRangedValue,
            i = e.isInView,
            c = e.isSameCell,
            u = e.offsetCell,
            l = e.today,
            s = e.value;
          return function (e) {
            var f,
              d = u(e, -1),
              p = u(e, 1),
              b = re(r, 0),
              h = re(r, 1),
              v = re(a, 0),
              m = re(a, 1),
              g = Z(n, v, m, e);
            function w(e) {
              return c(b, e);
            }
            function y(e) {
              return c(h, e);
            }
            var C = c(v, e),
              O = c(m, e),
              E = (g || O) && (!i(d) || y(d)),
              j = (g || C) && (!i(p) || w(p));
            return (
              (f = {}),
              Object(o.i)(f, ''.concat(t, '-in-view'), i(e)),
              Object(o.i)(f, ''.concat(t, '-in-range'), Z(n, b, h, e)),
              Object(o.i)(f, ''.concat(t, '-range-start'), w(e)),
              Object(o.i)(f, ''.concat(t, '-range-end'), y(e)),
              Object(o.i)(f, ''.concat(t, '-range-start-single'), w(e) && !h),
              Object(o.i)(f, ''.concat(t, '-range-end-single'), y(e) && !b),
              Object(o.i)(
                f,
                ''.concat(t, '-range-start-near-hover'),
                w(e) && (c(d, v) || Z(n, v, m, d)),
              ),
              Object(o.i)(
                f,
                ''.concat(t, '-range-end-near-hover'),
                y(e) && (c(p, m) || Z(n, v, m, p)),
              ),
              Object(o.i)(f, ''.concat(t, '-range-hover'), g),
              Object(o.i)(f, ''.concat(t, '-range-hover-start'), C),
              Object(o.i)(f, ''.concat(t, '-range-hover-end'), O),
              Object(o.i)(f, ''.concat(t, '-range-hover-edge-start'), E),
              Object(o.i)(f, ''.concat(t, '-range-hover-edge-end'), j),
              Object(o.i)(
                f,
                ''.concat(t, '-range-hover-edge-start-near-range'),
                E && c(d, h),
              ),
              Object(o.i)(
                f,
                ''.concat(t, '-range-hover-edge-end-near-range'),
                j && c(p, b),
              ),
              Object(o.i)(f, ''.concat(t, '-today'), c(l, e)),
              Object(o.i)(f, ''.concat(t, '-selected'), c(s, e)),
              f
            );
          };
        }
        function de(e) {
          var t = e.prefixCls,
            n = e.generateConfig,
            a = e.prefixColumn,
            i = e.locale,
            c = e.rowCount,
            u = e.viewDate,
            l = e.value,
            s = e.dateRender,
            f = r.b.useContext(se),
            d = f.rangedValue,
            p = f.hoverRangedValue,
            b = (function (e, t, n) {
              var o = t.locale.getWeekFirstDay(e),
                r = t.setDate(n, 1),
                a = t.getWeekDay(r),
                i = t.addDate(r, o - a);
              return (
                t.getMonth(i) === t.getMonth(n) &&
                  t.getDate(i) > 1 &&
                  (i = t.addDate(i, -7)),
                i
              );
            })(i.locale, n, u),
            h = ''.concat(t, '-cell'),
            v = n.locale.getWeekFirstDay(i.locale),
            m = n.getNow(),
            g = [],
            w =
              i.shortWeekDays ||
              (n.locale.getShortWeekDays
                ? n.locale.getShortWeekDays(i.locale)
                : []);
          a &&
            g.push(
              r.b.createElement('th', {
                key: 'empty',
                'aria-label': 'empty cell',
              }),
            );
          for (var y = 0; y < 7; y += 1)
            g.push(r.b.createElement('th', { key: y }, w[(y + v) % 7]));
          var C = fe({
              cellPrefixCls: h,
              today: m,
              value: l,
              generateConfig: n,
              rangedValue: a ? null : d,
              hoverRangedValue: a ? null : p,
              isSameCell: function (e, t) {
                return q(n, e, t);
              },
              isInView: function (e) {
                return X(n, e, u);
              },
              offsetCell: function (e, t) {
                return n.addDate(e, t);
              },
            }),
            O = s
              ? function (e) {
                  return s(e, m);
                }
              : void 0;
          return r.b.createElement(
            P,
            Object(o.j)({}, e, {
              rowNum: c,
              colNum: 7,
              baseDate: b,
              getCellNode: O,
              getCellText: n.getDate,
              getCellClassName: C,
              getCellDate: n.addDate,
              titleCell: function (e) {
                return J(e, {
                  locale: i,
                  format: 'YYYY-MM-DD',
                  generateConfig: n,
                });
              },
              headerCells: g,
            }),
          );
        }
        function pe(e) {
          var t = e.prefixCls,
            n = e.generateConfig,
            a = e.locale,
            i = e.viewDate,
            c = e.onNextMonth,
            u = e.onPrevMonth,
            l = e.onNextYear,
            s = e.onPrevYear,
            f = e.onYearClick,
            d = e.onMonthClick;
          if (r.b.useContext(j).hideHeader) return null;
          var p = ''.concat(t, '-header'),
            b =
              a.shortMonths ||
              (n.locale.getShortMonths
                ? n.locale.getShortMonths(a.locale)
                : []),
            h = n.getMonth(i),
            v = r.b.createElement(
              'button',
              {
                type: 'button',
                key: 'year',
                onClick: f,
                tabIndex: -1,
                className: ''.concat(t, '-year-btn'),
              },
              J(i, { locale: a, format: a.yearFormat, generateConfig: n }),
            ),
            m = r.b.createElement(
              'button',
              {
                type: 'button',
                key: 'month',
                onClick: d,
                tabIndex: -1,
                className: ''.concat(t, '-month-btn'),
              },
              a.monthFormat
                ? J(i, { locale: a, format: a.monthFormat, generateConfig: n })
                : b[h],
            ),
            g = a.monthBeforeYear ? [m, v] : [v, m];
          return r.b.createElement(
            M,
            Object(o.j)({}, e, {
              prefixCls: p,
              onSuperPrev: s,
              onPrev: u,
              onNext: c,
              onSuperNext: l,
            }),
            g,
          );
        }
        function be(e) {
          var t = e.prefixCls,
            n = e.panelName,
            a = void 0 === n ? 'date' : n,
            i = e.keyboardConfig,
            c = e.active,
            u = e.operationRef,
            l = e.generateConfig,
            s = e.value,
            f = e.viewDate,
            d = e.onViewDateChange,
            p = e.onPanelChange,
            b = e.onSelect,
            h = ''.concat(t, '-').concat(a, '-panel');
          u.current = {
            onKeyDown: function (e) {
              return A(
                e,
                Object(o.l)(
                  {
                    onLeftRight: function (e) {
                      b(l.addDate(s || f, e), 'key');
                    },
                    onCtrlLeftRight: function (e) {
                      b(l.addYear(s || f, e), 'key');
                    },
                    onUpDown: function (e) {
                      b(l.addDate(s || f, 7 * e), 'key');
                    },
                    onPageUpDown: function (e) {
                      b(l.addMonth(s || f, e), 'key');
                    },
                  },
                  i,
                ),
              );
            },
          };
          var v = function (e) {
              var t = l.addYear(f, e);
              d(t), p(null, t);
            },
            m = function (e) {
              var t = l.addMonth(f, e);
              d(t), p(null, t);
            };
          return r.b.createElement(
            'div',
            {
              className: Object(o.h)(
                h,
                Object(o.i)({}, ''.concat(h, '-active'), c),
              ),
            },
            r.b.createElement(
              pe,
              Object(o.j)({}, e, {
                prefixCls: t,
                value: s,
                viewDate: f,
                onPrevYear: function () {
                  v(-1);
                },
                onNextYear: function () {
                  v(1);
                },
                onPrevMonth: function () {
                  m(-1);
                },
                onNextMonth: function () {
                  m(1);
                },
                onMonthClick: function () {
                  p('month', f);
                },
                onYearClick: function () {
                  p('year', f);
                },
              }),
            ),
            r.b.createElement(
              de,
              Object(o.j)({}, e, {
                onSelect: function (e) {
                  return b(e, 'mouse');
                },
                prefixCls: t,
                value: s,
                viewDate: f,
                rowCount: 6,
              }),
            ),
          );
        }
        var he = (function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t;
        })('date', 'time');
        function ve(e) {
          var t = e.prefixCls,
            n = e.operationRef,
            a = e.generateConfig,
            i = e.value,
            c = e.defaultValue,
            u = e.disabledTime,
            l = e.showTime,
            s = e.onSelect,
            f = ''.concat(t, '-datetime-panel'),
            d = r.b.useState(null),
            p = Object(o.g)(d, 2),
            b = p[0],
            h = p[1],
            v = r.b.useRef({}),
            m = r.b.useRef({}),
            g = 'object' === Object(o.k)(l) ? Object(o.l)({}, l) : {};
          var w = function (e) {
            m.current.onBlur && m.current.onBlur(e), h(null);
          };
          n.current = {
            onKeyDown: function (e) {
              if (e.which === E.TAB) {
                var t =
                  ((n = e.shiftKey ? -1 : 1),
                  (o = he.indexOf(b) + n),
                  he[o] || null);
                return h(t), t && e.preventDefault(), !0;
              }
              var n, o;
              if (b) {
                var r = 'date' === b ? v : m;
                return (
                  r.current && r.current.onKeyDown && r.current.onKeyDown(e), !0
                );
              }
              return (
                !![E.LEFT, E.RIGHT, E.UP, E.DOWN].includes(e.which) &&
                (h('date'), !0)
              );
            },
            onBlur: w,
            onClose: w,
          };
          var y = function (e, t) {
              var n = e;
              'date' === t && !i && g.defaultValue
                ? ((n = a.setHour(n, a.getHour(g.defaultValue))),
                  (n = a.setMinute(n, a.getMinute(g.defaultValue))),
                  (n = a.setSecond(n, a.getSecond(g.defaultValue))))
                : 'time' === t &&
                  !i &&
                  c &&
                  ((n = a.setYear(n, a.getYear(c))),
                  (n = a.setMonth(n, a.getMonth(c))),
                  (n = a.setDate(n, a.getDate(c)))),
                s && s(n, 'mouse');
            },
            C = u ? u(i || null) : {};
          return r.b.createElement(
            'div',
            {
              className: Object(o.h)(
                f,
                Object(o.i)({}, ''.concat(f, '-active'), b),
              ),
            },
            r.b.createElement(
              be,
              Object(o.j)({}, e, {
                operationRef: v,
                active: 'date' === b,
                onSelect: function (e) {
                  y(
                    (function (e, t, n) {
                      if (!n) return t;
                      var o = t;
                      return (
                        (o = e.setHour(o, e.getHour(n))),
                        (o = e.setMinute(o, e.getMinute(n))),
                        e.setSecond(o, e.getSecond(n))
                      );
                    })(
                      a,
                      e,
                      l && 'object' === Object(o.k)(l) ? l.defaultValue : null,
                    ),
                    'date',
                  );
                },
              }),
            ),
            r.b.createElement(
              le,
              Object(o.j)({}, e, { format: void 0 }, g, C, {
                defaultValue: void 0,
                operationRef: m,
                active: 'time' === b,
                onSelect: function (e) {
                  y(e, 'time');
                },
              }),
            ),
          );
        }
        function me(e) {
          var t = e.prefixCls,
            n = e.generateConfig,
            a = e.locale,
            i = e.value,
            c = ''.concat(t, '-cell'),
            u = ''.concat(t, '-week-panel-row');
          return r.b.createElement(
            be,
            Object(o.j)({}, e, {
              panelName: 'week',
              prefixColumn: function (e) {
                return r.b.createElement(
                  'td',
                  {
                    key: 'week',
                    className: Object(o.h)(c, ''.concat(c, '-week')),
                  },
                  n.locale.getWeek(a.locale, e),
                );
              },
              rowClassName: function (e) {
                return Object(o.h)(
                  u,
                  Object(o.i)(
                    {},
                    ''.concat(u, '-selected'),
                    G(n, a.locale, i, e),
                  ),
                );
              },
              keyboardConfig: { onLeftRight: null },
            }),
          );
        }
        function ge(e) {
          var t = e.prefixCls,
            n = e.generateConfig,
            a = e.locale,
            i = e.viewDate,
            c = e.onNextYear,
            u = e.onPrevYear,
            l = e.onYearClick;
          if (r.b.useContext(j).hideHeader) return null;
          var s = ''.concat(t, '-header');
          return r.b.createElement(
            M,
            Object(o.j)({}, e, {
              prefixCls: s,
              onSuperPrev: u,
              onSuperNext: c,
            }),
            r.b.createElement(
              'button',
              {
                type: 'button',
                onClick: l,
                className: ''.concat(t, '-year-btn'),
              },
              J(i, { locale: a, format: a.yearFormat, generateConfig: n }),
            ),
          );
        }
        function we(e) {
          var t = e.prefixCls,
            n = e.locale,
            a = e.value,
            i = e.viewDate,
            c = e.generateConfig,
            u = e.monthCellRender,
            l = r.b.useContext(se),
            s = l.rangedValue,
            f = l.hoverRangedValue,
            d = fe({
              cellPrefixCls: ''.concat(t, '-cell'),
              value: a,
              generateConfig: c,
              rangedValue: s,
              hoverRangedValue: f,
              isSameCell: function (e, t) {
                return X(c, e, t);
              },
              isInView: function () {
                return !0;
              },
              offsetCell: function (e, t) {
                return c.addMonth(e, t);
              },
            }),
            p =
              n.shortMonths ||
              (c.locale.getShortMonths
                ? c.locale.getShortMonths(n.locale)
                : []),
            b = c.setMonth(i, 0),
            h = u
              ? function (e) {
                  return u(e, n);
                }
              : void 0;
          return r.b.createElement(
            P,
            Object(o.j)({}, e, {
              rowNum: 4,
              colNum: 3,
              baseDate: b,
              getCellNode: h,
              getCellText: function (e) {
                return n.monthFormat
                  ? J(e, {
                      locale: n,
                      format: n.monthFormat,
                      generateConfig: c,
                    })
                  : p[c.getMonth(e)];
              },
              getCellClassName: d,
              getCellDate: c.addMonth,
              titleCell: function (e) {
                return J(e, {
                  locale: n,
                  format: 'YYYY-MM',
                  generateConfig: c,
                });
              },
            }),
          );
        }
        function ye(e) {
          var t = e.prefixCls,
            n = e.operationRef,
            a = e.onViewDateChange,
            i = e.generateConfig,
            c = e.value,
            u = e.viewDate,
            l = e.onPanelChange,
            s = e.onSelect,
            f = ''.concat(t, '-month-panel');
          n.current = {
            onKeyDown: function (e) {
              return A(e, {
                onLeftRight: function (e) {
                  s(i.addMonth(c || u, e), 'key');
                },
                onCtrlLeftRight: function (e) {
                  s(i.addYear(c || u, e), 'key');
                },
                onUpDown: function (e) {
                  s(i.addMonth(c || u, 3 * e), 'key');
                },
                onEnter: function () {
                  l('date', c || u);
                },
              });
            },
          };
          var d = function (e) {
            var t = i.addYear(u, e);
            a(t), l(null, t);
          };
          return r.b.createElement(
            'div',
            { className: f },
            r.b.createElement(
              ge,
              Object(o.j)({}, e, {
                prefixCls: t,
                onPrevYear: function () {
                  d(-1);
                },
                onNextYear: function () {
                  d(1);
                },
                onYearClick: function () {
                  l('year', u);
                },
              }),
            ),
            r.b.createElement(
              we,
              Object(o.j)({}, e, {
                prefixCls: t,
                onSelect: function (e) {
                  s(e, 'mouse'), l('date', e);
                },
              }),
            ),
          );
        }
        function Ce(e) {
          var t = e.prefixCls,
            n = e.generateConfig,
            a = e.locale,
            i = e.viewDate,
            c = e.onNextYear,
            u = e.onPrevYear,
            l = e.onYearClick;
          if (r.b.useContext(j).hideHeader) return null;
          var s = ''.concat(t, '-header');
          return r.b.createElement(
            M,
            Object(o.j)({}, e, {
              prefixCls: s,
              onSuperPrev: u,
              onSuperNext: c,
            }),
            r.b.createElement(
              'button',
              {
                type: 'button',
                onClick: l,
                className: ''.concat(t, '-year-btn'),
              },
              J(i, { locale: a, format: a.yearFormat, generateConfig: n }),
            ),
          );
        }
        function Oe(e) {
          var t = e.prefixCls,
            n = e.locale,
            a = e.value,
            i = e.viewDate,
            c = e.generateConfig,
            u = r.b.useContext(se),
            l = u.rangedValue,
            s = u.hoverRangedValue,
            f = fe({
              cellPrefixCls: ''.concat(t, '-cell'),
              value: a,
              generateConfig: c,
              rangedValue: l,
              hoverRangedValue: s,
              isSameCell: function (e, t) {
                return z(c, e, t);
              },
              isInView: function () {
                return !0;
              },
              offsetCell: function (e, t) {
                return c.addMonth(e, 3 * t);
              },
            }),
            d = c.setDate(c.setMonth(i, 0), 1);
          return r.b.createElement(
            P,
            Object(o.j)({}, e, {
              rowNum: 1,
              colNum: 4,
              baseDate: d,
              getCellText: function (e) {
                return J(e, {
                  locale: n,
                  format: n.quarterFormat || '[Q]Q',
                  generateConfig: c,
                });
              },
              getCellClassName: f,
              getCellDate: function (e, t) {
                return c.addMonth(e, 3 * t);
              },
              titleCell: function (e) {
                return J(e, {
                  locale: n,
                  format: 'YYYY-[Q]Q',
                  generateConfig: c,
                });
              },
            }),
          );
        }
        function Ee(e) {
          var t = e.prefixCls,
            n = e.operationRef,
            a = e.onViewDateChange,
            i = e.generateConfig,
            c = e.value,
            u = e.viewDate,
            l = e.onPanelChange,
            s = e.onSelect,
            f = ''.concat(t, '-quarter-panel');
          n.current = {
            onKeyDown: function (e) {
              return A(e, {
                onLeftRight: function (e) {
                  s(i.addMonth(c || u, 3 * e), 'key');
                },
                onCtrlLeftRight: function (e) {
                  s(i.addYear(c || u, e), 'key');
                },
                onUpDown: function (e) {
                  s(i.addYear(c || u, e), 'key');
                },
              });
            },
          };
          var d = function (e) {
            var t = i.addYear(u, e);
            a(t), l(null, t);
          };
          return r.b.createElement(
            'div',
            { className: f },
            r.b.createElement(
              Ce,
              Object(o.j)({}, e, {
                prefixCls: t,
                onPrevYear: function () {
                  d(-1);
                },
                onNextYear: function () {
                  d(1);
                },
                onYearClick: function () {
                  l('year', u);
                },
              }),
            ),
            r.b.createElement(
              Oe,
              Object(o.j)({}, e, {
                prefixCls: t,
                onSelect: function (e) {
                  s(e, 'mouse');
                },
              }),
            ),
          );
        }
        function je(e) {
          var t = e.prefixCls,
            n = e.generateConfig,
            a = e.viewDate,
            i = e.onPrevDecade,
            c = e.onNextDecade,
            u = e.onDecadeClick;
          if (r.b.useContext(j).hideHeader) return null;
          var l = ''.concat(t, '-header'),
            s = n.getYear(a),
            f = Math.floor(s / Me) * Me,
            d = f + Me - 1;
          return r.b.createElement(
            M,
            Object(o.j)({}, e, {
              prefixCls: l,
              onSuperPrev: i,
              onSuperNext: c,
            }),
            r.b.createElement(
              'button',
              {
                type: 'button',
                onClick: u,
                className: ''.concat(t, '-decade-btn'),
              },
              f,
              '-',
              d,
            ),
          );
        }
        function ke(e) {
          var t = e.prefixCls,
            n = e.value,
            a = e.viewDate,
            i = e.locale,
            c = e.generateConfig,
            u = r.b.useContext(se),
            l = u.rangedValue,
            s = u.hoverRangedValue,
            f = ''.concat(t, '-cell'),
            d = c.getYear(a),
            p = Math.floor(d / Me) * Me,
            b = p + Me - 1,
            h = c.setYear(a, p - Math.ceil((12 - Me) / 2)),
            v = fe({
              cellPrefixCls: f,
              value: n,
              generateConfig: c,
              rangedValue: l,
              hoverRangedValue: s,
              isSameCell: function (e, t) {
                return B(c, e, t);
              },
              isInView: function (e) {
                var t = c.getYear(e);
                return p <= t && t <= b;
              },
              offsetCell: function (e, t) {
                return c.addYear(e, t);
              },
            });
          return r.b.createElement(
            P,
            Object(o.j)({}, e, {
              rowNum: 4,
              colNum: 3,
              baseDate: h,
              getCellText: c.getYear,
              getCellClassName: v,
              getCellDate: c.addYear,
              titleCell: function (e) {
                return J(e, { locale: i, format: 'YYYY', generateConfig: c });
              },
            }),
          );
        }
        var Me = 10;
        function xe(e) {
          var t = e.prefixCls,
            n = e.operationRef,
            a = e.onViewDateChange,
            i = e.generateConfig,
            c = e.value,
            u = e.viewDate,
            l = e.sourceMode,
            s = e.onSelect,
            f = e.onPanelChange,
            d = ''.concat(t, '-year-panel');
          n.current = {
            onKeyDown: function (e) {
              return A(e, {
                onLeftRight: function (e) {
                  s(i.addYear(c || u, e), 'key');
                },
                onCtrlLeftRight: function (e) {
                  s(i.addYear(c || u, e * Me), 'key');
                },
                onUpDown: function (e) {
                  s(i.addYear(c || u, 3 * e), 'key');
                },
                onEnter: function () {
                  f('date' === l ? 'date' : 'month', c || u);
                },
              });
            },
          };
          var p = function (e) {
            var t = i.addYear(u, 10 * e);
            a(t), f(null, t);
          };
          return r.b.createElement(
            'div',
            { className: d },
            r.b.createElement(
              je,
              Object(o.j)({}, e, {
                prefixCls: t,
                onPrevDecade: function () {
                  p(-1);
                },
                onNextDecade: function () {
                  p(1);
                },
                onDecadeClick: function () {
                  f('decade', u);
                },
              }),
            ),
            r.b.createElement(
              ke,
              Object(o.j)({}, e, {
                prefixCls: t,
                onSelect: function (e) {
                  f('date' === l ? 'date' : 'month', e), s(e, 'mouse');
                },
              }),
            ),
          );
        }
        function Ne(e, t, n) {
          return n
            ? r.b.createElement(
                'div',
                { className: ''.concat(e, '-footer-extra') },
                n(t),
              )
            : null;
        }
        function De(e) {
          var t,
            n,
            o = e.prefixCls,
            a = e.rangeList,
            i = void 0 === a ? [] : a,
            c = e.components,
            u = void 0 === c ? {} : c,
            l = e.needConfirmButton,
            s = e.onNow,
            f = e.onOk,
            d = e.okDisabled,
            p = e.showNow,
            b = e.locale;
          if (i.length) {
            var h = u.rangeItem || 'span';
            t = r.b.createElement(
              r.b.Fragment,
              null,
              i.map(function (e) {
                var t = e.label,
                  n = e.onClick,
                  a = e.onMouseEnter,
                  i = e.onMouseLeave;
                return r.b.createElement(
                  'li',
                  { key: t, className: ''.concat(o, '-preset') },
                  r.b.createElement(
                    h,
                    { onClick: n, onMouseEnter: a, onMouseLeave: i },
                    t,
                  ),
                );
              }),
            );
          }
          if (l) {
            var v = u.button || 'button';
            s &&
              !t &&
              !1 !== p &&
              (t = r.b.createElement(
                'li',
                { className: ''.concat(o, '-now') },
                r.b.createElement(
                  'a',
                  { className: ''.concat(o, '-now-btn'), onClick: s },
                  b.now,
                ),
              )),
              (n =
                l &&
                r.b.createElement(
                  'li',
                  { className: ''.concat(o, '-ok') },
                  r.b.createElement(v, { disabled: d, onClick: f }, b.ok),
                ));
          }
          return t || n
            ? r.b.createElement(
                'ul',
                { className: ''.concat(o, '-ranges') },
                t,
                n,
              )
            : null;
        }
        function Pe(e) {
          var t,
            n = e.prefixCls,
            a = void 0 === n ? 'rc-picker' : n,
            i = e.className,
            c = e.style,
            u = e.locale,
            l = e.generateConfig,
            s = e.value,
            f = e.defaultValue,
            d = e.pickerValue,
            p = e.defaultPickerValue,
            b = e.disabledDate,
            h = e.mode,
            v = e.picker,
            m = void 0 === v ? 'date' : v,
            g = e.tabIndex,
            w = void 0 === g ? 0 : g,
            y = e.showNow,
            C = e.showTime,
            k = e.showToday,
            M = e.renderExtraFooter,
            x = e.hideHeader,
            D = e.onSelect,
            P = e.onChange,
            S = e.onPanelChange,
            T = e.onMouseDown,
            R = e.onPickerValueChange,
            _ = e.onOk,
            A = e.components,
            Y = e.direction,
            H = e.hourStep,
            V = void 0 === H ? 1 : H,
            I = e.minuteStep,
            F = void 0 === I ? 1 : I,
            U = e.secondStep,
            B = void 0 === U ? 1 : U,
            K = ('date' === m && !!C) || 'time' === m,
            z = 24 % V == 0,
            X = 60 % F == 0,
            q = 60 % B == 0,
            G = r.b.useContext(j),
            Z = G.operationRef,
            $ = G.panelRef,
            J = G.onSelect,
            ee = G.hideRanges,
            te = G.defaultOpenValue,
            ne = r.b.useContext(se),
            oe = ne.inRange,
            re = ne.panelPosition,
            ae = ne.rangedValue,
            ie = ne.hoverRangedValue,
            ce = r.b.useRef({}),
            ue = r.b.useRef(!0),
            fe = O(null, {
              value: s,
              defaultValue: f,
              postState: function (e) {
                return !e && te && 'time' === m ? te : e;
              },
            }),
            de = Object(o.g)(fe, 2),
            pe = de[0],
            he = de[1],
            ge = O(null, {
              value: d,
              defaultValue: p || pe,
              postState: function (e) {
                return e || l.getNow();
              },
            }),
            we = Object(o.g)(ge, 2),
            Ce = we[0],
            Oe = we[1],
            je = function (e) {
              Oe(e), R && R(e);
            },
            ke = function (e) {
              var t = L[m];
              return t ? t(e) : e;
            },
            Me = O(
              function () {
                return 'time' === m ? 'time' : ke('date');
              },
              { value: h },
            ),
            Pe = Object(o.g)(Me, 2),
            Se = Pe[0],
            Te = Pe[1];
          r.b.useEffect(
            function () {
              Te(m);
            },
            [m],
          );
          var Re,
            _e = r.b.useState(function () {
              return Se;
            }),
            Ae = Object(o.g)(_e, 2),
            Ye = Ae[0],
            He = Ae[1],
            Ve = function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              (Se === m || n) &&
                (he(e),
                D && D(e),
                J && J(e, t),
                !P || Q(l, e, pe) || (null == b ? void 0 : b(e)) || P(e));
            },
            Le = function (e) {
              return ce.current && ce.current.onKeyDown
                ? ([
                    E.LEFT,
                    E.RIGHT,
                    E.UP,
                    E.DOWN,
                    E.PAGE_UP,
                    E.PAGE_DOWN,
                    E.ENTER,
                  ].includes(e.which) && e.preventDefault(),
                  ce.current.onKeyDown(e))
                : (Object(o.y)(
                    !1,
                    'Panel not correct handle keyDown event. Please help to fire issue about this.',
                  ),
                  !1);
            };
          Z &&
            'right' !== re &&
            (Z.current = {
              onKeyDown: Le,
              onClose: function () {
                ce.current && ce.current.onClose && ce.current.onClose();
              },
            }),
            r.b.useEffect(
              function () {
                s && !ue.current && Oe(s);
              },
              [s],
            ),
            r.b.useEffect(function () {
              ue.current = !1;
            }, []);
          var Ie,
            Fe,
            We = Object(o.l)(
              Object(o.l)({}, e),
              {},
              {
                operationRef: ce,
                prefixCls: a,
                viewDate: Ce,
                value: pe,
                onViewDateChange: je,
                sourceMode: Ye,
                onPanelChange: function (e, t) {
                  var n = ke(e || Se);
                  He(Se), Te(n), S && (Se !== n || Q(l, Ce, Ce)) && S(t, n);
                },
                disabledDate: b,
              },
            );
          switch ((delete We.onChange, delete We.onSelect, Se)) {
            case 'decade':
              Re = r.b.createElement(
                W,
                Object(o.j)({}, We, {
                  onSelect: function (e, t) {
                    je(e), Ve(e, t);
                  },
                }),
              );
              break;
            case 'year':
              Re = r.b.createElement(
                xe,
                Object(o.j)({}, We, {
                  onSelect: function (e, t) {
                    je(e), Ve(e, t);
                  },
                }),
              );
              break;
            case 'month':
              Re = r.b.createElement(
                ye,
                Object(o.j)({}, We, {
                  onSelect: function (e, t) {
                    je(e), Ve(e, t);
                  },
                }),
              );
              break;
            case 'quarter':
              Re = r.b.createElement(
                Ee,
                Object(o.j)({}, We, {
                  onSelect: function (e, t) {
                    je(e), Ve(e, t);
                  },
                }),
              );
              break;
            case 'week':
              Re = r.b.createElement(
                me,
                Object(o.j)({}, We, {
                  onSelect: function (e, t) {
                    je(e), Ve(e, t);
                  },
                }),
              );
              break;
            case 'time':
              delete We.showTime,
                (Re = r.b.createElement(
                  le,
                  Object(o.j)({}, We, 'object' === Object(o.k)(C) ? C : null, {
                    onSelect: function (e, t) {
                      je(e), Ve(e, t);
                    },
                  }),
                ));
              break;
            default:
              Re = C
                ? r.b.createElement(
                    ve,
                    Object(o.j)({}, We, {
                      onSelect: function (e, t) {
                        je(e), Ve(e, t);
                      },
                    }),
                  )
                : r.b.createElement(
                    be,
                    Object(o.j)({}, We, {
                      onSelect: function (e, t) {
                        je(e), Ve(e, t);
                      },
                    }),
                  );
          }
          var Ue;
          if (
            (ee ||
              ((Ie = Ne(a, Se, M)),
              (Fe = De({
                prefixCls: a,
                components: A,
                needConfirmButton: K,
                okDisabled: !pe || (b && b(pe)),
                locale: u,
                showNow: y,
                onNow:
                  K &&
                  function () {
                    var e = l.getNow(),
                      t = (function (e, t, n, o, r, a) {
                        var i = Math.floor(e / o) * o;
                        if (i < e) return [i, 60 - r, 60 - a];
                        var c = Math.floor(t / r) * r;
                        return c < t
                          ? [i, c, 60 - a]
                          : [i, c, Math.floor(n / a) * a];
                      })(
                        l.getHour(e),
                        l.getMinute(e),
                        l.getSecond(e),
                        z ? V : 1,
                        X ? F : 1,
                        q ? B : 1,
                      ),
                      n = N(l, e, t[0], t[1], t[2]);
                    Ve(n, 'submit');
                  },
                onOk: function () {
                  pe && (Ve(pe, 'submit', !0), _ && _(pe));
                },
              }))),
            k && 'date' === Se && 'date' === m && !C)
          ) {
            var Be = l.getNow(),
              Ke = ''.concat(a, '-today-btn'),
              ze = b && b(Be);
            Ue = r.b.createElement(
              'a',
              {
                className: Object(o.h)(Ke, ze && ''.concat(Ke, '-disabled')),
                'aria-disabled': ze,
                onClick: function () {
                  ze || Ve(Be, 'mouse', !0);
                },
              },
              u.today,
            );
          }
          return r.b.createElement(
            j.Provider,
            {
              value: Object(o.l)(
                Object(o.l)({}, G),
                {},
                {
                  mode: Se,
                  hideHeader: 'hideHeader' in e ? x : G.hideHeader,
                  hidePrevBtn: oe && 'right' === re,
                  hideNextBtn: oe && 'left' === re,
                },
              ),
            },
            r.b.createElement(
              'div',
              {
                tabIndex: w,
                className: Object(o.h)(
                  ''.concat(a, '-panel'),
                  i,
                  ((t = {}),
                  Object(o.i)(
                    t,
                    ''.concat(a, '-panel-has-range'),
                    ae && ae[0] && ae[1],
                  ),
                  Object(o.i)(
                    t,
                    ''.concat(a, '-panel-has-range-hover'),
                    ie && ie[0] && ie[1],
                  ),
                  Object(o.i)(t, ''.concat(a, '-panel-rtl'), 'rtl' === Y),
                  t),
                ),
                style: c,
                onKeyDown: Le,
                onBlur: function (e) {
                  ce.current && ce.current.onBlur && ce.current.onBlur(e);
                },
                onMouseDown: T,
                ref: $,
              },
              Re,
              Ie || Fe || Ue
                ? r.b.createElement(
                    'div',
                    { className: ''.concat(a, '-footer') },
                    Ie,
                    Fe,
                    Ue,
                  )
                : null,
            ),
          );
        }
        function Se(e, t) {
          return !!e && e.contains(t);
        }
        function Te(e, t, n, o) {
          var r = c.a.unstable_batchedUpdates
            ? function (e) {
                c.a.unstable_batchedUpdates(n, e);
              }
            : n;
          return (
            e.addEventListener && e.addEventListener(t, r, o),
            {
              remove: function () {
                e.removeEventListener && e.removeEventListener(t, r);
              },
            }
          );
        }
        var Re = r.b.forwardRef(function (e, t) {
          var n = e.didUpdate,
            o = e.getContainer,
            i = e.children,
            u = r.b.useRef();
          r.b.useImperativeHandle(t, function () {
            return {};
          });
          var l = r.b.useRef(!1);
          return (
            !l.current &&
              Object(a.c)() &&
              ((u.current = o()), (l.current = !0)),
            r.b.useEffect(function () {
              null == n || n(e);
            }),
            r.b.useEffect(function () {
              return function () {
                var e, t;
                null === (e = u.current) ||
                  void 0 === e ||
                  null === (t = e.parentNode) ||
                  void 0 === t ||
                  t.removeChild(u.current);
              };
            }, []),
            u.current ? c.a.createPortal(i, u.current) : null
          );
        });
        function _e(e, t, n) {
          return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
        }
        var Ae;
        function Ye(e) {
          var t = e.prefixCls,
            n = e.motion,
            o = e.animation,
            r = e.transitionName;
          return (
            n ||
            (o
              ? { motionName: ''.concat(t, '-').concat(o) }
              : r
              ? { motionName: r }
              : null)
          );
        }
        function He(e) {
          var t = e.prefixCls,
            n = e.visible,
            i = e.zIndex,
            c = e.mask,
            u = e.maskMotion,
            l = e.maskAnimation,
            s = e.maskTransitionName;
          if (!c) return null;
          var f = {};
          return (
            (u || s || l) &&
              (f = Object(o.l)(
                { motionAppear: !0 },
                Ye({
                  motion: u,
                  prefixCls: t,
                  transitionName: s,
                  animation: l,
                }),
              )),
            r.b.createElement(
              a.a,
              Object.assign({}, f, { visible: n, removeOnLeave: !0 }),
              function (e) {
                var n = e.className;
                return r.b.createElement('div', {
                  style: { zIndex: i },
                  className: Object(o.h)(''.concat(t, '-mask'), n),
                });
              },
            )
          );
        }
        function Ve(e) {
          return (Ve =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                })(e);
        }
        function Le(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function Ie(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t &&
              (o = o.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        var Fe = { Webkit: '-webkit-', Moz: '-moz-', ms: '-ms-', O: '-o-' };
        function We() {
          if (void 0 !== Ae) return Ae;
          Ae = '';
          var e = document.createElement('p').style;
          for (var t in Fe) t + 'Transform' in e && (Ae = t);
          return Ae;
        }
        function Ue() {
          return We()
            ? ''.concat(We(), 'TransitionProperty')
            : 'transitionProperty';
        }
        function Be() {
          return We() ? ''.concat(We(), 'Transform') : 'transform';
        }
        function Ke(e, t) {
          var n = Ue();
          n &&
            ((e.style[n] = t),
            'transitionProperty' !== n && (e.style.transitionProperty = t));
        }
        function ze(e, t) {
          var n = Be();
          n && ((e.style[n] = t), 'transform' !== n && (e.style.transform = t));
        }
        var Xe,
          qe = /matrix\((.*)\)/,
          Ge = /matrix3d\((.*)\)/;
        function Qe(e) {
          var t = e.style.display;
          (e.style.display = 'none'), e.offsetHeight, (e.style.display = t);
        }
        function Ze(e, t, n) {
          var o = n;
          if ('object' !== Ve(t))
            return void 0 !== o
              ? ('number' == typeof o && (o = ''.concat(o, 'px')),
                void (e.style[t] = o))
              : Xe(e, t);
          for (var r in t) t.hasOwnProperty(r) && Ze(e, r, t[r]);
        }
        function $e(e, t) {
          var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
            o = 'scroll'.concat(t ? 'Top' : 'Left');
          if ('number' != typeof n) {
            var r = e.document;
            'number' != typeof (n = r.documentElement[o]) && (n = r.body[o]);
          }
          return n;
        }
        function Je(e) {
          return $e(e);
        }
        function et(e) {
          return $e(e, !0);
        }
        function tt(e) {
          var t = (function (e) {
              var t,
                n,
                o,
                r = e.ownerDocument,
                a = r.body,
                i = r && r.documentElement;
              return (
                (n = (t = e.getBoundingClientRect()).left),
                (o = t.top),
                {
                  left: (n -= i.clientLeft || a.clientLeft || 0),
                  top: (o -= i.clientTop || a.clientTop || 0),
                }
              );
            })(e),
            n = e.ownerDocument,
            o = n.defaultView || n.parentWindow;
          return (t.left += Je(o)), (t.top += et(o)), t;
        }
        function nt(e) {
          return null != e && e == e.window;
        }
        function ot(e) {
          return nt(e) ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
        }
        var rt = new RegExp(
            '^('.concat(
              /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
              ')(?!px)[a-z%]+$',
            ),
            'i',
          ),
          at = /^(top|right|bottom|left)$/;
        function it(e, t) {
          return 'left' === e
            ? t.useCssRight
              ? 'right'
              : e
            : t.useCssBottom
            ? 'bottom'
            : e;
        }
        function ct(e) {
          return 'left' === e
            ? 'right'
            : 'right' === e
            ? 'left'
            : 'top' === e
            ? 'bottom'
            : 'bottom' === e
            ? 'top'
            : void 0;
        }
        function ut(e, t, n) {
          'static' === Ze(e, 'position') && (e.style.position = 'relative');
          var o = -999,
            r = -999,
            a = it('left', n),
            i = it('top', n),
            c = ct(a),
            u = ct(i);
          'left' !== a && (o = 999), 'top' !== i && (r = 999);
          var l,
            s = '',
            f = tt(e);
          ('left' in t || 'top' in t) &&
            ((s = (l = e).style.transitionProperty || l.style[Ue()] || ''),
            Ke(e, 'none')),
            'left' in t &&
              ((e.style[c] = ''), (e.style[a] = ''.concat(o, 'px'))),
            'top' in t &&
              ((e.style[u] = ''), (e.style[i] = ''.concat(r, 'px'))),
            Qe(e);
          var d = tt(e),
            p = {};
          for (var b in t)
            if (t.hasOwnProperty(b)) {
              var h = it(b, n),
                v = 'left' === b ? o : r,
                m = f[b] - d[b];
              p[h] = h === b ? v + m : v - m;
            }
          Ze(e, p), Qe(e), ('left' in t || 'top' in t) && Ke(e, s);
          var g = {};
          for (var w in t)
            if (t.hasOwnProperty(w)) {
              var y = it(w, n),
                C = t[w] - f[w];
              g[y] = w === y ? p[y] + C : p[y] - C;
            }
          Ze(e, g);
        }
        function lt(e, t) {
          var n = tt(e),
            o = (function (e) {
              var t = window.getComputedStyle(e, null),
                n = t.getPropertyValue('transform') || t.getPropertyValue(Be());
              if (n && 'none' !== n) {
                var o = n.replace(/[^0-9\-.,]/g, '').split(',');
                return {
                  x: parseFloat(o[12] || o[4], 0),
                  y: parseFloat(o[13] || o[5], 0),
                };
              }
              return { x: 0, y: 0 };
            })(e),
            r = { x: o.x, y: o.y };
          'left' in t && (r.x = o.x + t.left - n.left),
            'top' in t && (r.y = o.y + t.top - n.top),
            (function (e, t) {
              var n = window.getComputedStyle(e, null),
                o = n.getPropertyValue('transform') || n.getPropertyValue(Be());
              if (o && 'none' !== o) {
                var r,
                  a = o.match(qe);
                a
                  ? (((r = (a = a[1]).split(',').map(function (e) {
                      return parseFloat(e, 10);
                    }))[4] = t.x),
                    (r[5] = t.y),
                    ze(e, 'matrix('.concat(r.join(','), ')')))
                  : (((r = o
                      .match(Ge)[1]
                      .split(',')
                      .map(function (e) {
                        return parseFloat(e, 10);
                      }))[12] = t.x),
                    (r[13] = t.y),
                    ze(e, 'matrix3d('.concat(r.join(','), ')')));
              } else
                ze(
                  e,
                  'translateX('
                    .concat(t.x, 'px) translateY(')
                    .concat(t.y, 'px) translateZ(0)'),
                );
            })(e, r);
        }
        function st(e, t) {
          for (var n = 0; n < e.length; n++) t(e[n]);
        }
        function ft(e) {
          return 'border-box' === Xe(e, 'boxSizing');
        }
        'undefined' != typeof window &&
          (Xe = window.getComputedStyle
            ? function (e, t, n) {
                var o = n,
                  r = '',
                  a = ot(e);
                return (
                  (o = o || a.defaultView.getComputedStyle(e, null)) &&
                    (r = o.getPropertyValue(t) || o[t]),
                  r
                );
              }
            : function (e, t) {
                var n = e.currentStyle && e.currentStyle[t];
                if (rt.test(n) && !at.test(t)) {
                  var o = e.style,
                    r = o.left,
                    a = e.runtimeStyle.left;
                  (e.runtimeStyle.left = e.currentStyle.left),
                    (o.left = 'fontSize' === t ? '1em' : n || 0),
                    (n = o.pixelLeft + 'px'),
                    (o.left = r),
                    (e.runtimeStyle.left = a);
                }
                return '' === n ? 'auto' : n;
              });
        var dt = ['margin', 'border', 'padding'];
        function pt(e, t, n) {
          var o,
            r = {},
            a = e.style;
          for (o in t) t.hasOwnProperty(o) && ((r[o] = a[o]), (a[o] = t[o]));
          for (o in (n.call(e), t)) t.hasOwnProperty(o) && (a[o] = r[o]);
        }
        function bt(e, t, n) {
          var o,
            r,
            a,
            i = 0;
          for (r = 0; r < t.length; r++)
            if ((o = t[r]))
              for (a = 0; a < n.length; a++) {
                var c = void 0;
                (c =
                  'border' === o
                    ? ''.concat(o).concat(n[a], 'Width')
                    : o + n[a]),
                  (i += parseFloat(Xe(e, c)) || 0);
              }
          return i;
        }
        var ht = {
          getParent: function (e) {
            var t = e;
            do {
              t = 11 === t.nodeType && t.host ? t.host : t.parentNode;
            } while (t && 1 !== t.nodeType && 9 !== t.nodeType);
            return t;
          },
        };
        function vt(e, t, n) {
          var o = n;
          if (nt(e))
            return 'width' === t ? ht.viewportWidth(e) : ht.viewportHeight(e);
          if (9 === e.nodeType)
            return 'width' === t ? ht.docWidth(e) : ht.docHeight(e);
          var r = 'width' === t ? ['Left', 'Right'] : ['Top', 'Bottom'],
            a =
              'width' === t
                ? e.getBoundingClientRect().width
                : e.getBoundingClientRect().height;
          Xe(e);
          var i = ft(e),
            c = 0;
          (null == a || a <= 0) &&
            ((a = void 0),
            (null == (c = Xe(e, t)) || Number(c) < 0) && (c = e.style[t] || 0),
            (c = parseFloat(c) || 0)),
            void 0 === o && (o = i ? 1 : -1);
          var u = void 0 !== a || i,
            l = a || c;
          return -1 === o
            ? u
              ? l - bt(e, ['border', 'padding'], r)
              : c
            : u
            ? 1 === o
              ? l
              : l + (2 === o ? -bt(e, ['border'], r) : bt(e, ['margin'], r))
            : c + bt(e, dt.slice(o), r);
        }
        st(['Width', 'Height'], function (e) {
          (ht['doc'.concat(e)] = function (t) {
            var n = t.document;
            return Math.max(
              n.documentElement['scroll'.concat(e)],
              n.body['scroll'.concat(e)],
              ht['viewport'.concat(e)](n),
            );
          }),
            (ht['viewport'.concat(e)] = function (t) {
              var n = 'client'.concat(e),
                o = t.document,
                r = o.body,
                a = o.documentElement[n];
              return ('CSS1Compat' === o.compatMode && a) || (r && r[n]) || a;
            });
        });
        var mt = {
          position: 'absolute',
          visibility: 'hidden',
          display: 'block',
        };
        function gt() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var o,
            r = t[0];
          return (
            0 !== r.offsetWidth
              ? (o = vt.apply(void 0, t))
              : pt(r, mt, function () {
                  o = vt.apply(void 0, t);
                }),
            o
          );
        }
        function wt(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          return e;
        }
        st(['width', 'height'], function (e) {
          var t = e.charAt(0).toUpperCase() + e.slice(1);
          ht['outer'.concat(t)] = function (t, n) {
            return t && gt(t, e, n ? 0 : 1);
          };
          var n = 'width' === e ? ['Left', 'Right'] : ['Top', 'Bottom'];
          ht[e] = function (t, o) {
            var r = o;
            return void 0 !== r
              ? t
                ? (Xe(t),
                  ft(t) && (r += bt(t, ['padding', 'border'], n)),
                  Ze(t, e, r))
                : void 0
              : t && gt(t, e, -1);
          };
        });
        var yt = {
          getWindow: function (e) {
            if (e && e.document && e.setTimeout) return e;
            var t = e.ownerDocument || e;
            return t.defaultView || t.parentWindow;
          },
          getDocument: ot,
          offset: function (e, t, n) {
            if (void 0 === t) return tt(e);
            !(function (e, t, n) {
              if (n.ignoreShake) {
                var o = tt(e),
                  r = o.left.toFixed(0),
                  a = o.top.toFixed(0),
                  i = t.left.toFixed(0),
                  c = t.top.toFixed(0);
                if (r === i && a === c) return;
              }
              n.useCssRight || n.useCssBottom
                ? ut(e, t, n)
                : n.useCssTransform && Be() in document.body.style
                ? lt(e, t)
                : ut(e, t, n);
            })(e, t, n || {});
          },
          isWindow: nt,
          each: st,
          css: Ze,
          clone: function (e) {
            var t,
              n = {};
            for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
            if (e.overflow)
              for (t in e)
                e.hasOwnProperty(t) && (n.overflow[t] = e.overflow[t]);
            return n;
          },
          mix: wt,
          getWindowScrollLeft: function (e) {
            return Je(e);
          },
          getWindowScrollTop: function (e) {
            return et(e);
          },
          merge: function () {
            for (var e = {}, t = 0; t < arguments.length; t++)
              yt.mix(e, t < 0 || arguments.length <= t ? void 0 : arguments[t]);
            return e;
          },
          viewportWidth: 0,
          viewportHeight: 0,
        };
        wt(yt, ht);
        var Ct = yt.getParent;
        function Ot(e) {
          if (yt.isWindow(e) || 9 === e.nodeType) return null;
          var t,
            n = yt.getDocument(e).body,
            o = yt.css(e, 'position');
          if (!('fixed' === o || 'absolute' === o))
            return 'html' === e.nodeName.toLowerCase() ? null : Ct(e);
          for (t = Ct(e); t && t !== n && 9 !== t.nodeType; t = Ct(t))
            if ('static' !== (o = yt.css(t, 'position'))) return t;
          return null;
        }
        var Et = yt.getParent;
        function jt(e, t) {
          for (
            var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
              o = Ot(e),
              r = yt.getDocument(e),
              a = r.defaultView || r.parentWindow,
              i = r.body,
              c = r.documentElement;
            o;

          ) {
            if (
              (-1 !== navigator.userAgent.indexOf('MSIE') &&
                0 === o.clientWidth) ||
              o === i ||
              o === c ||
              'visible' === yt.css(o, 'overflow')
            ) {
              if (o === i || o === c) break;
            } else {
              var u = yt.offset(o);
              (u.left += o.clientLeft),
                (u.top += o.clientTop),
                (n.top = Math.max(n.top, u.top)),
                (n.right = Math.min(n.right, u.left + o.clientWidth)),
                (n.bottom = Math.min(n.bottom, u.top + o.clientHeight)),
                (n.left = Math.max(n.left, u.left));
            }
            o = Ot(o);
          }
          var l = null;
          yt.isWindow(e) ||
            9 === e.nodeType ||
            ((l = e.style.position),
            'absolute' === yt.css(e, 'position') &&
              (e.style.position = 'fixed'));
          var s = yt.getWindowScrollLeft(a),
            f = yt.getWindowScrollTop(a),
            d = yt.viewportWidth(a),
            p = yt.viewportHeight(a),
            b = c.scrollWidth,
            h = c.scrollHeight,
            v = window.getComputedStyle(i);
          if (
            ('hidden' === v.overflowX && (b = a.innerWidth),
            'hidden' === v.overflowY && (h = a.innerHeight),
            e.style && (e.style.position = l),
            t ||
              (function (e) {
                if (yt.isWindow(e) || 9 === e.nodeType) return !1;
                var t = yt.getDocument(e).body,
                  n = null;
                for (n = Et(e); n && n !== t; n = Et(n))
                  if ('fixed' === yt.css(n, 'position')) return !0;
                return !1;
              })(e))
          )
            (n.left = Math.max(n.left, s)),
              (n.top = Math.max(n.top, f)),
              (n.right = Math.min(n.right, s + d)),
              (n.bottom = Math.min(n.bottom, f + p));
          else {
            var m = Math.max(b, s + d);
            n.right = Math.min(n.right, m);
            var g = Math.max(h, f + p);
            n.bottom = Math.min(n.bottom, g);
          }
          return n.top >= 0 &&
            n.left >= 0 &&
            n.bottom > n.top &&
            n.right > n.left
            ? n
            : null;
        }
        function kt(e) {
          var t, n, o;
          if (yt.isWindow(e) || 9 === e.nodeType) {
            var r = yt.getWindow(e);
            (t = {
              left: yt.getWindowScrollLeft(r),
              top: yt.getWindowScrollTop(r),
            }),
              (n = yt.viewportWidth(r)),
              (o = yt.viewportHeight(r));
          } else
            (t = yt.offset(e)), (n = yt.outerWidth(e)), (o = yt.outerHeight(e));
          return (t.width = n), (t.height = o), t;
        }
        function Mt(e, t) {
          var n = t.charAt(0),
            o = t.charAt(1),
            r = e.width,
            a = e.height,
            i = e.left,
            c = e.top;
          return (
            'c' === n ? (c += a / 2) : 'b' === n && (c += a),
            'c' === o ? (i += r / 2) : 'r' === o && (i += r),
            { left: i, top: c }
          );
        }
        function xt(e, t, n, o, r) {
          var a = Mt(t, n[1]),
            i = Mt(e, n[0]),
            c = [i.left - a.left, i.top - a.top];
          return {
            left: Math.round(e.left - c[0] + o[0] - r[0]),
            top: Math.round(e.top - c[1] + o[1] - r[1]),
          };
        }
        function Nt(e, t, n) {
          return e.left < n.left || e.left + t.width > n.right;
        }
        function Dt(e, t, n) {
          return e.top < n.top || e.top + t.height > n.bottom;
        }
        function Pt(e, t, n) {
          var o = [];
          return (
            yt.each(e, function (e) {
              o.push(
                e.replace(t, function (e) {
                  return n[e];
                }),
              );
            }),
            o
          );
        }
        function St(e, t) {
          return (e[t] = -e[t]), e;
        }
        function Tt(e, t) {
          return (
            (/%$/.test(e)
              ? (parseInt(e.substring(0, e.length - 1), 10) / 100) * t
              : parseInt(e, 10)) || 0
          );
        }
        function Rt(e, t) {
          (e[0] = Tt(e[0], t.width)), (e[1] = Tt(e[1], t.height));
        }
        function _t(e, t, n, o) {
          var r = n.points,
            a = n.offset || [0, 0],
            i = n.targetOffset || [0, 0],
            c = n.overflow,
            u = n.source || e;
          (a = [].concat(a)), (i = [].concat(i));
          var l = {},
            s = 0,
            f = jt(u, !(!(c = c || {}) || !c.alwaysByViewport)),
            d = kt(u);
          Rt(a, d), Rt(i, t);
          var p = xt(d, t, r, a, i),
            b = yt.merge(d, p);
          if (f && (c.adjustX || c.adjustY) && o) {
            if (c.adjustX && Nt(p, d, f)) {
              var h = Pt(r, /[lr]/gi, { l: 'r', r: 'l' }),
                v = St(a, 0),
                m = St(i, 0);
              (function (e, t, n) {
                return e.left > n.right || e.left + t.width < n.left;
              })(xt(d, t, h, v, m), d, f) ||
                ((s = 1), (r = h), (a = v), (i = m));
            }
            if (c.adjustY && Dt(p, d, f)) {
              var g = Pt(r, /[tb]/gi, { t: 'b', b: 't' }),
                w = St(a, 1),
                y = St(i, 1);
              (function (e, t, n) {
                return e.top > n.bottom || e.top + t.height < n.top;
              })(xt(d, t, g, w, y), d, f) ||
                ((s = 1), (r = g), (a = w), (i = y));
            }
            s && ((p = xt(d, t, r, a, i)), yt.mix(b, p));
            var C = Nt(p, d, f),
              O = Dt(p, d, f);
            if (C || O) {
              var E = r;
              C && (E = Pt(r, /[lr]/gi, { l: 'r', r: 'l' })),
                O && (E = Pt(r, /[tb]/gi, { t: 'b', b: 't' })),
                (r = E),
                (a = n.offset || [0, 0]),
                (i = n.targetOffset || [0, 0]);
            }
            (l.adjustX = c.adjustX && C),
              (l.adjustY = c.adjustY && O),
              (l.adjustX || l.adjustY) &&
                (b = (function (e, t, n, o) {
                  var r = yt.clone(e),
                    a = { width: t.width, height: t.height };
                  return (
                    o.adjustX && r.left < n.left && (r.left = n.left),
                    o.resizeWidth &&
                      r.left >= n.left &&
                      r.left + a.width > n.right &&
                      (a.width -= r.left + a.width - n.right),
                    o.adjustX &&
                      r.left + a.width > n.right &&
                      (r.left = Math.max(n.right - a.width, n.left)),
                    o.adjustY && r.top < n.top && (r.top = n.top),
                    o.resizeHeight &&
                      r.top >= n.top &&
                      r.top + a.height > n.bottom &&
                      (a.height -= r.top + a.height - n.bottom),
                    o.adjustY &&
                      r.top + a.height > n.bottom &&
                      (r.top = Math.max(n.bottom - a.height, n.top)),
                    yt.mix(r, a)
                  );
                })(p, d, f, l));
          }
          return (
            b.width !== d.width &&
              yt.css(u, 'width', yt.width(u) + b.width - d.width),
            b.height !== d.height &&
              yt.css(u, 'height', yt.height(u) + b.height - d.height),
            yt.offset(
              u,
              { left: b.left, top: b.top },
              {
                useCssRight: n.useCssRight,
                useCssBottom: n.useCssBottom,
                useCssTransform: n.useCssTransform,
                ignoreShake: n.ignoreShake,
              },
            ),
            { points: r, offset: a, targetOffset: i, overflow: l }
          );
        }
        function At(e, t, n) {
          var o = n.target || t;
          return _t(
            e,
            kt(o),
            n,
            !(function (e, t) {
              var n = jt(e, t),
                o = kt(e);
              return (
                !n ||
                o.left + o.width <= n.left ||
                o.top + o.height <= n.top ||
                o.left >= n.right ||
                o.top >= n.bottom
              );
            })(o, n.overflow && n.overflow.alwaysByViewport),
          );
        }
        function Yt(e, t, n) {
          var o,
            r,
            a = yt.getDocument(e),
            i = a.defaultView || a.parentWindow,
            c = yt.getWindowScrollLeft(i),
            u = yt.getWindowScrollTop(i),
            l = yt.viewportWidth(i),
            s = yt.viewportHeight(i);
          (o = 'pageX' in t ? t.pageX : c + t.clientX),
            (r = 'pageY' in t ? t.pageY : u + t.clientY);
          var f = o >= 0 && o <= c + l && r >= 0 && r <= u + s;
          return _t(
            e,
            { left: o, top: r, width: 0, height: 0 },
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? Ie(n, !0).forEach(function (t) {
                      Le(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n),
                    )
                  : Ie(n).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t),
                      );
                    });
              }
              return e;
            })({}, n, { points: [n.points[0], 'cc'] }),
            f,
          );
        }
        (At.__getOffsetParent = Ot), (At.__getVisibleRectForElement = jt);
        var Ht = (function () {
            if ('undefined' != typeof Map) return Map;
            function e(e, t) {
              var n = -1;
              return (
                e.some(function (e, o) {
                  return e[0] === t && ((n = o), !0);
                }),
                n
              );
            }
            return (function () {
              function t() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(t.prototype, 'size', {
                  get: function () {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                (t.prototype.get = function (t) {
                  var n = e(this.__entries__, t),
                    o = this.__entries__[n];
                  return o && o[1];
                }),
                (t.prototype.set = function (t, n) {
                  var o = e(this.__entries__, t);
                  ~o
                    ? (this.__entries__[o][1] = n)
                    : this.__entries__.push([t, n]);
                }),
                (t.prototype.delete = function (t) {
                  var n = this.__entries__,
                    o = e(n, t);
                  ~o && n.splice(o, 1);
                }),
                (t.prototype.has = function (t) {
                  return !!~e(this.__entries__, t);
                }),
                (t.prototype.clear = function () {
                  this.__entries__.splice(0);
                }),
                (t.prototype.forEach = function (e, t) {
                  void 0 === t && (t = null);
                  for (var n = 0, o = this.__entries__; n < o.length; n++) {
                    var r = o[n];
                    e.call(t, r[1], r[0]);
                  }
                }),
                t
              );
            })();
          })(),
          Vt =
            'undefined' != typeof window &&
            'undefined' != typeof document &&
            window.document === document,
          Lt =
            void 0 !== e && e.Math === Math
              ? e
              : 'undefined' != typeof self && self.Math === Math
              ? self
              : 'undefined' != typeof window && window.Math === Math
              ? window
              : Function('return this')(),
          It =
            'function' == typeof requestAnimationFrame
              ? requestAnimationFrame.bind(Lt)
              : function (e) {
                  return setTimeout(function () {
                    return e(Date.now());
                  }, 1e3 / 60);
                };
        var Ft = [
            'top',
            'right',
            'bottom',
            'left',
            'width',
            'height',
            'size',
            'weight',
          ],
          Wt = 'undefined' != typeof MutationObserver,
          Ut = (function () {
            function e() {
              (this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = (function (e, t) {
                  var n = !1,
                    o = !1,
                    r = 0;
                  function a() {
                    n && ((n = !1), e()), o && c();
                  }
                  function i() {
                    It(a);
                  }
                  function c() {
                    var e = Date.now();
                    if (n) {
                      if (e - r < 2) return;
                      o = !0;
                    } else (n = !0), (o = !1), setTimeout(i, t);
                    r = e;
                  }
                  return c;
                })(this.refresh.bind(this), 20));
            }
            return (
              (e.prototype.addObserver = function (e) {
                ~this.observers_.indexOf(e) || this.observers_.push(e),
                  this.connected_ || this.connect_();
              }),
              (e.prototype.removeObserver = function (e) {
                var t = this.observers_,
                  n = t.indexOf(e);
                ~n && t.splice(n, 1),
                  !t.length && this.connected_ && this.disconnect_();
              }),
              (e.prototype.refresh = function () {
                this.updateObservers_() && this.refresh();
              }),
              (e.prototype.updateObservers_ = function () {
                var e = this.observers_.filter(function (e) {
                  return e.gatherActive(), e.hasActive();
                });
                return (
                  e.forEach(function (e) {
                    return e.broadcastActive();
                  }),
                  e.length > 0
                );
              }),
              (e.prototype.connect_ = function () {
                Vt &&
                  !this.connected_ &&
                  (document.addEventListener(
                    'transitionend',
                    this.onTransitionEnd_,
                  ),
                  window.addEventListener('resize', this.refresh),
                  Wt
                    ? ((this.mutationsObserver_ = new MutationObserver(
                        this.refresh,
                      )),
                      this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0,
                      }))
                    : (document.addEventListener(
                        'DOMSubtreeModified',
                        this.refresh,
                      ),
                      (this.mutationEventsAdded_ = !0)),
                  (this.connected_ = !0));
              }),
              (e.prototype.disconnect_ = function () {
                Vt &&
                  this.connected_ &&
                  (document.removeEventListener(
                    'transitionend',
                    this.onTransitionEnd_,
                  ),
                  window.removeEventListener('resize', this.refresh),
                  this.mutationsObserver_ &&
                    this.mutationsObserver_.disconnect(),
                  this.mutationEventsAdded_ &&
                    document.removeEventListener(
                      'DOMSubtreeModified',
                      this.refresh,
                    ),
                  (this.mutationsObserver_ = null),
                  (this.mutationEventsAdded_ = !1),
                  (this.connected_ = !1));
              }),
              (e.prototype.onTransitionEnd_ = function (e) {
                var t = e.propertyName,
                  n = void 0 === t ? '' : t;
                Ft.some(function (e) {
                  return !!~n.indexOf(e);
                }) && this.refresh();
              }),
              (e.getInstance = function () {
                return (
                  this.instance_ || (this.instance_ = new e()), this.instance_
                );
              }),
              (e.instance_ = null),
              e
            );
          })(),
          Bt = function (e, t) {
            for (var n = 0, o = Object.keys(t); n < o.length; n++) {
              var r = o[n];
              Object.defineProperty(e, r, {
                value: t[r],
                enumerable: !1,
                writable: !1,
                configurable: !0,
              });
            }
            return e;
          },
          Kt = function (e) {
            return (e && e.ownerDocument && e.ownerDocument.defaultView) || Lt;
          },
          zt = $t(0, 0, 0, 0);
        function Xt(e) {
          return parseFloat(e) || 0;
        }
        function qt(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          return t.reduce(function (t, n) {
            return t + Xt(e['border-' + n + '-width']);
          }, 0);
        }
        function Gt(e) {
          var t = e.clientWidth,
            n = e.clientHeight;
          if (!t && !n) return zt;
          var o = Kt(e).getComputedStyle(e),
            r = (function (e) {
              for (
                var t = {}, n = 0, o = ['top', 'right', 'bottom', 'left'];
                n < o.length;
                n++
              ) {
                var r = o[n],
                  a = e['padding-' + r];
                t[r] = Xt(a);
              }
              return t;
            })(o),
            a = r.left + r.right,
            i = r.top + r.bottom,
            c = Xt(o.width),
            u = Xt(o.height);
          if (
            ('border-box' === o.boxSizing &&
              (Math.round(c + a) !== t && (c -= qt(o, 'left', 'right') + a),
              Math.round(u + i) !== n && (u -= qt(o, 'top', 'bottom') + i)),
            !(function (e) {
              return e === Kt(e).document.documentElement;
            })(e))
          ) {
            var l = Math.round(c + a) - t,
              s = Math.round(u + i) - n;
            1 !== Math.abs(l) && (c -= l), 1 !== Math.abs(s) && (u -= s);
          }
          return $t(r.left, r.top, c, u);
        }
        var Qt =
          'undefined' != typeof SVGGraphicsElement
            ? function (e) {
                return e instanceof Kt(e).SVGGraphicsElement;
              }
            : function (e) {
                return (
                  e instanceof Kt(e).SVGElement &&
                  'function' == typeof e.getBBox
                );
              };
        function Zt(e) {
          return Vt
            ? Qt(e)
              ? (function (e) {
                  var t = e.getBBox();
                  return $t(0, 0, t.width, t.height);
                })(e)
              : Gt(e)
            : zt;
        }
        function $t(e, t, n, o) {
          return { x: e, y: t, width: n, height: o };
        }
        var Jt = (function () {
            function e(e) {
              (this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = $t(0, 0, 0, 0)),
                (this.target = e);
            }
            return (
              (e.prototype.isActive = function () {
                var e = Zt(this.target);
                return (
                  (this.contentRect_ = e),
                  e.width !== this.broadcastWidth ||
                    e.height !== this.broadcastHeight
                );
              }),
              (e.prototype.broadcastRect = function () {
                var e = this.contentRect_;
                return (
                  (this.broadcastWidth = e.width),
                  (this.broadcastHeight = e.height),
                  e
                );
              }),
              e
            );
          })(),
          en = function (e, t) {
            var n,
              o,
              r,
              a,
              i,
              c,
              u,
              l =
                ((o = (n = t).x),
                (r = n.y),
                (a = n.width),
                (i = n.height),
                (c =
                  'undefined' != typeof DOMRectReadOnly
                    ? DOMRectReadOnly
                    : Object),
                (u = Object.create(c.prototype)),
                Bt(u, {
                  x: o,
                  y: r,
                  width: a,
                  height: i,
                  top: r,
                  right: o + a,
                  bottom: i + r,
                  left: o,
                }),
                u);
            Bt(this, { target: e, contentRect: l });
          },
          tn = (function () {
            function e(e, t, n) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new Ht()),
                'function' != typeof e)
              )
                throw new TypeError(
                  'The callback provided as parameter 1 is not a function.',
                );
              (this.callback_ = e),
                (this.controller_ = t),
                (this.callbackCtx_ = n);
            }
            return (
              (e.prototype.observe = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    '1 argument required, but only 0 present.',
                  );
                if (
                  'undefined' != typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof Kt(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".',
                    );
                  var t = this.observations_;
                  t.has(e) ||
                    (t.set(e, new Jt(e)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh());
                }
              }),
              (e.prototype.unobserve = function (e) {
                if (!arguments.length)
                  throw new TypeError(
                    '1 argument required, but only 0 present.',
                  );
                if (
                  'undefined' != typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof Kt(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".',
                    );
                  var t = this.observations_;
                  t.has(e) &&
                    (t.delete(e),
                    t.size || this.controller_.removeObserver(this));
                }
              }),
              (e.prototype.disconnect = function () {
                this.clearActive(),
                  this.observations_.clear(),
                  this.controller_.removeObserver(this);
              }),
              (e.prototype.gatherActive = function () {
                var e = this;
                this.clearActive(),
                  this.observations_.forEach(function (t) {
                    t.isActive() && e.activeObservations_.push(t);
                  });
              }),
              (e.prototype.broadcastActive = function () {
                if (this.hasActive()) {
                  var e = this.callbackCtx_,
                    t = this.activeObservations_.map(function (e) {
                      return new en(e.target, e.broadcastRect());
                    });
                  this.callback_.call(e, t, e), this.clearActive();
                }
              }),
              (e.prototype.clearActive = function () {
                this.activeObservations_.splice(0);
              }),
              (e.prototype.hasActive = function () {
                return this.activeObservations_.length > 0;
              }),
              e
            );
          })(),
          nn = 'undefined' != typeof WeakMap ? new WeakMap() : new Ht(),
          on = function e(t) {
            if (!(this instanceof e))
              throw new TypeError('Cannot call a class as a function.');
            if (!arguments.length)
              throw new TypeError('1 argument required, but only 0 present.');
            var n = Ut.getInstance(),
              o = new tn(t, n, this);
            nn.set(this, o);
          };
        ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
          on.prototype[e] = function () {
            var t;
            return (t = nn.get(this))[e].apply(t, arguments);
          };
        });
        var rn = void 0 !== Lt.ResizeObserver ? Lt.ResizeObserver : on;
        function an(e, t) {
          var n = null,
            r = null;
          var a = new rn(function (e) {
            var a = Object(o.g)(e, 1)[0].target;
            if (document.documentElement.contains(a)) {
              var i = a.getBoundingClientRect(),
                c = i.width,
                u = i.height,
                l = Math.floor(c),
                s = Math.floor(u);
              (n === l && r === s) ||
                Promise.resolve().then(function () {
                  t({ width: l, height: s });
                }),
                (n = l),
                (r = s);
            }
          });
          return (
            e && a.observe(e),
            function () {
              a.disconnect();
            }
          );
        }
        function cn(e) {
          return 'function' != typeof e ? null : e();
        }
        function un(e) {
          return 'object' === Object(o.k)(e) && e ? e : null;
        }
        var ln = r.b.forwardRef(function (e, t) {
          var n = e.children,
            i = e.disabled,
            c = e.target,
            u = e.align,
            l = e.onAlign,
            s = e.monitorWindowResize,
            f = e.monitorBufferTime,
            d = void 0 === f ? 0 : f,
            p = r.b.useRef({}),
            b = r.b.useRef(),
            h = r.b.Children.only(n),
            v = r.b.useRef({});
          (v.current.disabled = i),
            (v.current.target = c),
            (v.current.onAlign = l);
          var m = (function (e, t) {
              var n = r.b.useRef(!1),
                o = r.b.useRef(null);
              function a() {
                window.clearTimeout(o.current);
              }
              return [
                function r(i) {
                  if (n.current && !0 !== i)
                    a(),
                      (o.current = window.setTimeout(function () {
                        (n.current = !1), r();
                      }, t));
                  else {
                    if (!1 === e()) return;
                    (n.current = !0),
                      a(),
                      (o.current = window.setTimeout(function () {
                        n.current = !1;
                      }, t));
                  }
                },
                function () {
                  (n.current = !1), a();
                },
              ];
            })(function () {
              var e = v.current,
                t = e.disabled,
                n = e.target,
                o = e.onAlign;
              if (!t && n) {
                var r,
                  a = b.current,
                  i = cn(n),
                  c = un(n);
                (p.current.element = i), (p.current.point = c);
                var l = document.activeElement;
                return (
                  i && T(i) ? (r = At(a, i, u)) : c && (r = Yt(a, c, u)),
                  (function (e, t) {
                    e !== document.activeElement &&
                      Se(t, e) &&
                      'function' == typeof e.focus &&
                      e.focus();
                  })(l, a),
                  o && r && o(a, r),
                  !0
                );
              }
              return !1;
            }, d),
            g = Object(o.g)(m, 2),
            w = g[0],
            y = g[1],
            C = r.b.useRef({ cancel: function () {} }),
            O = r.b.useRef({ cancel: function () {} });
          r.b.useEffect(function () {
            var e,
              t,
              n = cn(c),
              o = un(c);
            b.current !== O.current.element &&
              (O.current.cancel(),
              (O.current.element = b.current),
              (O.current.cancel = an(b.current, w))),
              (p.current.element === n &&
                ((e = p.current.point) === (t = o) ||
                  (e &&
                    t &&
                    ('pageX' in t && 'pageY' in t
                      ? e.pageX === t.pageX && e.pageY === t.pageY
                      : 'clientX' in t &&
                        'clientY' in t &&
                        e.clientX === t.clientX &&
                        e.clientY === t.clientY)))) ||
                (w(),
                C.current.element !== n &&
                  (C.current.cancel(),
                  (C.current.element = n),
                  (C.current.cancel = an(n, w))));
          }),
            r.b.useEffect(
              function () {
                i ? y() : w();
              },
              [i],
            );
          var E = r.b.useRef(null);
          return (
            r.b.useEffect(
              function () {
                s
                  ? E.current || (E.current = Te(window, 'resize', w))
                  : E.current && (E.current.remove(), (E.current = null));
              },
              [s],
            ),
            r.b.useEffect(function () {
              return function () {
                C.current.cancel(),
                  O.current.cancel(),
                  E.current && E.current.remove(),
                  y();
              };
            }, []),
            r.b.useImperativeHandle(t, function () {
              return {
                forceAlign: function () {
                  return w(!0);
                },
              };
            }),
            r.b.isValidElement(h) &&
              (h = r.b.cloneElement(h, { ref: Object(a.d)(h.ref, b) })),
            h
          );
        });
        ln.displayName = 'Align';
        var sn = ['measure', 'align', null, 'motion'],
          fn = r.b.forwardRef(function (e, t) {
            var n = e.visible,
              i = e.prefixCls,
              c = e.className,
              u = e.style,
              l = e.children,
              s = e.zIndex,
              f = e.stretch,
              d = e.destroyPopupOnHide,
              p = e.align,
              b = e.point,
              h = e.getRootDomNode,
              v = e.getClassNameFromAlign,
              m = e.onAlign,
              g = e.onMouseEnter,
              w = e.onMouseLeave,
              y = e.onMouseDown,
              C = e.onTouchStart,
              O = r.b.useRef(),
              E = r.b.useRef(),
              j = r.b.useState(),
              k = Object(o.g)(j, 2),
              M = k[0],
              x = k[1],
              N = (function (e) {
                var t = r.b.useState({ width: 0, height: 0 }),
                  n = Object(o.g)(t, 2),
                  a = n[0],
                  i = n[1];
                return [
                  r.b.useMemo(
                    function () {
                      var t = {};
                      if (e) {
                        var n = a.width,
                          o = a.height;
                        -1 !== e.indexOf('height') && o
                          ? (t.height = o)
                          : -1 !== e.indexOf('minHeight') &&
                            o &&
                            (t.minHeight = o),
                          -1 !== e.indexOf('width') && n
                            ? (t.width = n)
                            : -1 !== e.indexOf('minWidth') &&
                              n &&
                              (t.minWidth = n);
                      }
                      return t;
                    },
                    [e, a],
                  ),
                  function (e) {
                    i({ width: e.offsetWidth, height: e.offsetHeight });
                  },
                ];
              })(f),
              D = Object(o.g)(N, 2),
              P = D[0],
              S = D[1];
            var T = (function (e, t) {
                var n = r.b.useState(null),
                  i = Object(o.g)(n, 2),
                  c = i[0],
                  u = i[1],
                  l = r.b.useRef();
                function s() {
                  a.g.cancel(l.current);
                }
                return (
                  r.b.useEffect(
                    function () {
                      u('measure');
                    },
                    [e],
                  ),
                  r.b.useEffect(
                    function () {
                      switch (c) {
                        case 'measure':
                          t();
                      }
                      c &&
                        (s(),
                        (l.current = Object(a.g)(
                          Object(o.s)(
                            o.t.mark(function e() {
                              var t, n;
                              return o.t.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (t = sn.indexOf(c)),
                                        (n = sn[t + 1]) && -1 !== t && u(n);
                                    case 3:
                                    case 'end':
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          ),
                        )));
                    },
                    [c],
                  ),
                  r.b.useEffect(function () {
                    return function () {
                      s();
                    };
                  }, []),
                  [
                    c,
                    function (e) {
                      s(),
                        (l.current = Object(a.g)(function () {
                          u(function (e) {
                            switch (c) {
                              case 'align':
                                return 'motion';
                              case 'motion':
                                return 'stable';
                            }
                            return e;
                          }),
                            null == e || e();
                        }));
                    },
                  ]
                );
              })(n, function () {
                f && S(h());
              }),
              R = Object(o.g)(T, 2),
              _ = R[0],
              A = R[1],
              Y = r.b.useRef();
            function H() {
              var e;
              null === (e = O.current) || void 0 === e || e.forceAlign();
            }
            function V(e, t) {
              if ('align' === _) {
                var n = v(t);
                x(n),
                  M !== n
                    ? Promise.resolve().then(function () {
                        H();
                      })
                    : A(function () {
                        var e;
                        null === (e = Y.current) || void 0 === e || e.call(Y);
                      }),
                  null == m || m(e, t);
              }
            }
            var L = Object(o.l)({}, Ye(e));
            function I() {
              return new Promise(function (e) {
                Y.current = e;
              });
            }
            ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (e) {
              var t = L[e];
              L[e] = function (e, n) {
                return A(), null == t ? void 0 : t(e, n);
              };
            }),
              r.b.useEffect(
                function () {
                  L.motionName || 'motion' !== _ || A();
                },
                [L.motionName, _],
              ),
              r.b.useImperativeHandle(t, function () {
                return {
                  forceAlign: H,
                  getElement: function () {
                    return E.current;
                  },
                };
              });
            var F = Object(o.l)(
                Object(o.l)(Object(o.l)({}, P), {}, { zIndex: s }, u),
                {},
                {
                  opacity: 'motion' !== _ && 'stable' !== _ && n ? 0 : void 0,
                  pointerEvents: 'stable' === _ ? void 0 : 'none',
                },
              ),
              W = !0;
            !(null == p ? void 0 : p.points) ||
              ('align' !== _ && 'stable' !== _) ||
              (W = !1);
            var U = l;
            return (
              r.b.Children.count(l) > 1 &&
                (U = r.b.createElement(
                  'div',
                  { className: ''.concat(i, '-content') },
                  l,
                )),
              r.b.createElement(
                a.a,
                Object.assign(
                  {
                    visible: n,
                    ref: E,
                    leavedClassName: ''.concat(i, '-hidden'),
                  },
                  L,
                  { onAppearPrepare: I, onEnterPrepare: I, removeOnLeave: d },
                ),
                function (e, t) {
                  var n = e.className,
                    a = e.style,
                    u = Object(o.h)(i, c, M, n);
                  return r.b.createElement(
                    ln,
                    {
                      target: b || h,
                      key: 'popup',
                      ref: O,
                      monitorWindowResize: !0,
                      disabled: W,
                      align: p,
                      onAlign: V,
                    },
                    r.b.createElement(
                      'div',
                      {
                        ref: t,
                        className: u,
                        onMouseEnter: g,
                        onMouseLeave: w,
                        onMouseDown: y,
                        onTouchStart: C,
                        style: Object(o.l)(Object(o.l)({}, a), F),
                      },
                      U,
                    ),
                  );
                },
              )
            );
          });
        fn.displayName = 'PopupInner';
        var dn = r.b.forwardRef(function (e, t) {
          var n = e.prefixCls,
            i = e.visible,
            c = e.zIndex,
            u = e.children,
            l = e.mobile,
            s = (l = void 0 === l ? {} : l).popupClassName,
            f = l.popupStyle,
            d = l.popupMotion,
            p = void 0 === d ? {} : d,
            b = l.popupRender,
            h = r.b.useRef();
          r.b.useImperativeHandle(t, function () {
            return {
              forceAlign: function () {},
              getElement: function () {
                return h.current;
              },
            };
          });
          var v = Object(o.l)({ zIndex: c }, f),
            m = u;
          return (
            r.b.Children.count(u) > 1 &&
              (m = r.b.createElement(
                'div',
                { className: ''.concat(n, '-content') },
                u,
              )),
            b && (m = b(m)),
            r.b.createElement(
              a.a,
              Object.assign({ visible: i, ref: h, removeOnLeave: !0 }, p),
              function (e, t) {
                var a = e.className,
                  i = e.style,
                  c = Object(o.h)(n, s, a);
                return r.b.createElement(
                  'div',
                  {
                    ref: t,
                    className: c,
                    style: Object(o.l)(Object(o.l)({}, i), v),
                  },
                  m,
                );
              },
            )
          );
        });
        dn.displayName = 'MobilePopupInner';
        var pn = r.b.forwardRef(function (e, t) {
          var n = e.visible,
            a = e.mobile,
            i = Object(o.m)(e, ['visible', 'mobile']),
            c = r.b.useState(n),
            u = Object(o.g)(c, 2),
            l = u[0],
            s = u[1],
            f = r.b.useState(!1),
            d = Object(o.g)(f, 2),
            p = d[0],
            b = d[1],
            h = Object(o.l)(Object(o.l)({}, i), {}, { visible: l });
          r.b.useEffect(
            function () {
              s(n),
                n &&
                  a &&
                  b(
                    (function () {
                      if (
                        'undefined' == typeof navigator ||
                        'undefined' == typeof window
                      )
                        return !1;
                      var e =
                        navigator.userAgent || navigator.vendor || window.opera;
                      return !(
                        !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                          e,
                        ) &&
                        !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                          e.substr(0, 4),
                        )
                      );
                    })(),
                  );
            },
            [n, !!a],
          );
          var v = p
            ? r.b.createElement(dn, Object.assign({}, h, { mobile: a, ref: t }))
            : r.b.createElement(fn, Object.assign({}, h, { ref: t }));
          return r.b.createElement(
            'div',
            null,
            r.b.createElement(He, Object.assign({}, h)),
            v,
          );
        });
        pn.displayName = 'Popup';
        var bn = r.b.createContext(null);
        function hn() {}
        function vn() {
          return '';
        }
        function mn(e) {
          return e ? e.ownerDocument : window.document;
        }
        var gn = [
          'onClick',
          'onMouseDown',
          'onTouchStart',
          'onMouseEnter',
          'onMouseLeave',
          'onFocus',
          'onBlur',
          'onContextMenu',
        ];
        var wn = (function (e) {
            var t = (function (t) {
              Object(o.c)(i, t);
              var n = Object(o.d)(i);
              function i(e) {
                var t, u;
                return (
                  Object(o.e)(this, i),
                  ((t = n.call(this, e)).popupRef = r.b.createRef()),
                  (t.triggerRef = r.b.createRef()),
                  (t.onMouseEnter = function (e) {
                    var n = t.props.mouseEnterDelay;
                    t.fireEvents('onMouseEnter', e),
                      t.delaySetPopupVisible(!0, n, n ? null : e);
                  }),
                  (t.onMouseMove = function (e) {
                    t.fireEvents('onMouseMove', e), t.setPoint(e);
                  }),
                  (t.onMouseLeave = function (e) {
                    t.fireEvents('onMouseLeave', e),
                      t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
                  }),
                  (t.onPopupMouseEnter = function () {
                    t.clearDelayTimer();
                  }),
                  (t.onPopupMouseLeave = function (e) {
                    var n;
                    (e.relatedTarget &&
                      !e.relatedTarget.setTimeout &&
                      Se(
                        null === (n = t.popupRef.current) || void 0 === n
                          ? void 0
                          : n.getElement(),
                        e.relatedTarget,
                      )) ||
                      t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
                  }),
                  (t.onFocus = function (e) {
                    t.fireEvents('onFocus', e),
                      t.clearDelayTimer(),
                      t.isFocusToShow() &&
                        ((t.focusTime = Date.now()),
                        t.delaySetPopupVisible(!0, t.props.focusDelay));
                  }),
                  (t.onMouseDown = function (e) {
                    t.fireEvents('onMouseDown', e),
                      (t.preClickTime = Date.now());
                  }),
                  (t.onTouchStart = function (e) {
                    t.fireEvents('onTouchStart', e),
                      (t.preTouchTime = Date.now());
                  }),
                  (t.onBlur = function (e) {
                    t.fireEvents('onBlur', e),
                      t.clearDelayTimer(),
                      t.isBlurToHide() &&
                        t.delaySetPopupVisible(!1, t.props.blurDelay);
                  }),
                  (t.onContextMenu = function (e) {
                    e.preventDefault(),
                      t.fireEvents('onContextMenu', e),
                      t.setPopupVisible(!0, e);
                  }),
                  (t.onContextMenuClose = function () {
                    t.isContextMenuToShow() && t.close();
                  }),
                  (t.onClick = function (e) {
                    if ((t.fireEvents('onClick', e), t.focusTime)) {
                      var n;
                      if (
                        (t.preClickTime && t.preTouchTime
                          ? (n = Math.min(t.preClickTime, t.preTouchTime))
                          : t.preClickTime
                          ? (n = t.preClickTime)
                          : t.preTouchTime && (n = t.preTouchTime),
                        Math.abs(n - t.focusTime) < 20)
                      )
                        return;
                      t.focusTime = 0;
                    }
                    (t.preClickTime = 0),
                      (t.preTouchTime = 0),
                      t.isClickToShow() &&
                        (t.isClickToHide() || t.isBlurToHide()) &&
                        e &&
                        e.preventDefault &&
                        e.preventDefault();
                    var o = !t.state.popupVisible;
                    ((t.isClickToHide() && !o) || (o && t.isClickToShow())) &&
                      t.setPopupVisible(!t.state.popupVisible, e);
                  }),
                  (t.onPopupMouseDown = function () {
                    var e;
                    ((t.hasPopupMouseDown = !0),
                    clearTimeout(t.mouseDownTimeout),
                    (t.mouseDownTimeout = window.setTimeout(function () {
                      t.hasPopupMouseDown = !1;
                    }, 0)),
                    t.context) &&
                      (e = t.context).onPopupMouseDown.apply(e, arguments);
                  }),
                  (t.onDocumentClick = function (e) {
                    if (!t.props.mask || t.props.maskClosable) {
                      var n = e.target,
                        o = t.getRootDomNode(),
                        r = t.getPopupDomNode();
                      Se(o, n) || Se(r, n) || t.hasPopupMouseDown || t.close();
                    }
                  }),
                  (t.getRootDomNode = function () {
                    var e = t.props.getTriggerDOMNode;
                    if (e) return e(t.triggerRef.current);
                    try {
                      var n = Object(a.e)(t.triggerRef.current);
                      if (n) return n;
                    } catch (e) {}
                    return c.a.findDOMNode(Object(o.p)(t));
                  }),
                  (t.getPopupClassNameFromAlign = function (e) {
                    var n = [],
                      o = t.props,
                      r = o.popupPlacement,
                      a = o.builtinPlacements,
                      i = o.prefixCls,
                      c = o.alignPoint,
                      u = o.getPopupClassNameFromAlign;
                    return (
                      r &&
                        a &&
                        n.push(
                          (function (e, t, n, o) {
                            for (
                              var r = n.points, a = Object.keys(e), i = 0;
                              i < a.length;
                              i += 1
                            ) {
                              var c = a[i];
                              if (_e(e[c].points, r, o))
                                return ''.concat(t, '-placement-').concat(c);
                            }
                            return '';
                          })(a, i, e, c),
                        ),
                      u && n.push(u(e)),
                      n.join(' ')
                    );
                  }),
                  (t.getComponent = function () {
                    var e = t.props,
                      n = e.prefixCls,
                      o = e.destroyPopupOnHide,
                      a = e.popupClassName,
                      i = e.onPopupAlign,
                      c = e.popupMotion,
                      u = e.popupAnimation,
                      l = e.popupTransitionName,
                      s = e.popupStyle,
                      f = e.mask,
                      d = e.maskAnimation,
                      p = e.maskTransitionName,
                      b = e.maskMotion,
                      h = e.zIndex,
                      v = e.popup,
                      m = e.stretch,
                      g = e.alignPoint,
                      w = e.mobile,
                      y = t.state,
                      C = y.popupVisible,
                      O = y.point,
                      E = t.getPopupAlign(),
                      j = {};
                    return (
                      t.isMouseEnterToShow() &&
                        (j.onMouseEnter = t.onPopupMouseEnter),
                      t.isMouseLeaveToHide() &&
                        (j.onMouseLeave = t.onPopupMouseLeave),
                      (j.onMouseDown = t.onPopupMouseDown),
                      (j.onTouchStart = t.onPopupMouseDown),
                      r.b.createElement(
                        pn,
                        Object.assign(
                          {
                            prefixCls: n,
                            destroyPopupOnHide: o,
                            visible: C,
                            point: g && O,
                            className: a,
                            align: E,
                            onAlign: i,
                            animation: u,
                            getClassNameFromAlign: t.getPopupClassNameFromAlign,
                          },
                          j,
                          {
                            stretch: m,
                            getRootDomNode: t.getRootDomNode,
                            style: s,
                            mask: f,
                            zIndex: h,
                            transitionName: l,
                            maskAnimation: d,
                            maskTransitionName: p,
                            maskMotion: b,
                            ref: t.popupRef,
                            motion: c,
                            mobile: w,
                          },
                        ),
                        'function' == typeof v ? v() : v,
                      )
                    );
                  }),
                  (t.attachParent = function (e) {
                    a.g.cancel(t.attachId);
                    var n,
                      o = t.props,
                      r = o.getPopupContainer,
                      i = o.getDocument,
                      c = t.getRootDomNode();
                    r
                      ? (c || 0 === r.length) && (n = r(c))
                      : (n = i(t.getRootDomNode()).body),
                      n
                        ? n.appendChild(e)
                        : (t.attachId = Object(a.g)(function () {
                            t.attachParent(e);
                          }));
                  }),
                  (t.getContainer = function () {
                    var e = (0, t.props.getDocument)(
                      t.getRootDomNode(),
                    ).createElement('div');
                    return (
                      (e.style.position = 'absolute'),
                      (e.style.top = '0'),
                      (e.style.left = '0'),
                      (e.style.width = '100%'),
                      t.attachParent(e),
                      e
                    );
                  }),
                  (t.setPoint = function (e) {
                    t.props.alignPoint &&
                      e &&
                      t.setState({ point: { pageX: e.pageX, pageY: e.pageY } });
                  }),
                  (t.handlePortalUpdate = function () {
                    t.state.prevPopupVisible !== t.state.popupVisible &&
                      t.props.afterPopupVisibleChange(t.state.popupVisible);
                  }),
                  (u =
                    'popupVisible' in e
                      ? !!e.popupVisible
                      : !!e.defaultPopupVisible),
                  (t.state = { prevPopupVisible: u, popupVisible: u }),
                  gn.forEach(function (e) {
                    t['fire'.concat(e)] = function (n) {
                      t.fireEvents(e, n);
                    };
                  }),
                  t
                );
              }
              return (
                Object(o.f)(
                  i,
                  [
                    {
                      key: 'componentDidMount',
                      value: function () {
                        this.componentDidUpdate();
                      },
                    },
                    {
                      key: 'componentDidUpdate',
                      value: function () {
                        var e,
                          t = this.props;
                        if (this.state.popupVisible)
                          return (
                            this.clickOutsideHandler ||
                              (!this.isClickToHide() &&
                                !this.isContextMenuToShow()) ||
                              ((e = t.getDocument(this.getRootDomNode())),
                              (this.clickOutsideHandler = Te(
                                e,
                                'mousedown',
                                this.onDocumentClick,
                              ))),
                            this.touchOutsideHandler ||
                              ((e = e || t.getDocument(this.getRootDomNode())),
                              (this.touchOutsideHandler = Te(
                                e,
                                'touchstart',
                                this.onDocumentClick,
                              ))),
                            !this.contextMenuOutsideHandler1 &&
                              this.isContextMenuToShow() &&
                              ((e = e || t.getDocument(this.getRootDomNode())),
                              (this.contextMenuOutsideHandler1 = Te(
                                e,
                                'scroll',
                                this.onContextMenuClose,
                              ))),
                            void (
                              !this.contextMenuOutsideHandler2 &&
                              this.isContextMenuToShow() &&
                              (this.contextMenuOutsideHandler2 = Te(
                                window,
                                'blur',
                                this.onContextMenuClose,
                              ))
                            )
                          );
                        this.clearOutsideHandler();
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function () {
                        this.clearDelayTimer(),
                          this.clearOutsideHandler(),
                          clearTimeout(this.mouseDownTimeout),
                          a.g.cancel(this.attachId);
                      },
                    },
                    {
                      key: 'getPopupDomNode',
                      value: function () {
                        var e;
                        return (
                          (null === (e = this.popupRef.current) || void 0 === e
                            ? void 0
                            : e.getElement()) || null
                        );
                      },
                    },
                    {
                      key: 'getPopupAlign',
                      value: function () {
                        var e = this.props,
                          t = e.popupPlacement,
                          n = e.popupAlign,
                          r = e.builtinPlacements;
                        return t && r
                          ? (function (e, t, n) {
                              var r = e[t] || {};
                              return Object(o.l)(Object(o.l)({}, r), n);
                            })(r, t, n)
                          : n;
                      },
                    },
                    {
                      key: 'setPopupVisible',
                      value: function (e, t) {
                        var n = this.props.alignPoint,
                          o = this.state.popupVisible;
                        this.clearDelayTimer(),
                          o !== e &&
                            ('popupVisible' in this.props ||
                              this.setState({
                                popupVisible: e,
                                prevPopupVisible: o,
                              }),
                            this.props.onPopupVisibleChange(e)),
                          n && t && e && this.setPoint(t);
                      },
                    },
                    {
                      key: 'delaySetPopupVisible',
                      value: function (e, t, n) {
                        var o = this,
                          r = 1e3 * t;
                        if ((this.clearDelayTimer(), r)) {
                          var a = n ? { pageX: n.pageX, pageY: n.pageY } : null;
                          this.delayTimer = window.setTimeout(function () {
                            o.setPopupVisible(e, a), o.clearDelayTimer();
                          }, r);
                        } else this.setPopupVisible(e, n);
                      },
                    },
                    {
                      key: 'clearDelayTimer',
                      value: function () {
                        this.delayTimer &&
                          (clearTimeout(this.delayTimer),
                          (this.delayTimer = null));
                      },
                    },
                    {
                      key: 'clearOutsideHandler',
                      value: function () {
                        this.clickOutsideHandler &&
                          (this.clickOutsideHandler.remove(),
                          (this.clickOutsideHandler = null)),
                          this.contextMenuOutsideHandler1 &&
                            (this.contextMenuOutsideHandler1.remove(),
                            (this.contextMenuOutsideHandler1 = null)),
                          this.contextMenuOutsideHandler2 &&
                            (this.contextMenuOutsideHandler2.remove(),
                            (this.contextMenuOutsideHandler2 = null)),
                          this.touchOutsideHandler &&
                            (this.touchOutsideHandler.remove(),
                            (this.touchOutsideHandler = null));
                      },
                    },
                    {
                      key: 'createTwoChains',
                      value: function (e) {
                        var t = this.props.children.props,
                          n = this.props;
                        return t[e] && n[e]
                          ? this['fire'.concat(e)]
                          : t[e] || n[e];
                      },
                    },
                    {
                      key: 'isClickToShow',
                      value: function () {
                        var e = this.props,
                          t = e.action,
                          n = e.showAction;
                        return (
                          -1 !== t.indexOf('click') || -1 !== n.indexOf('click')
                        );
                      },
                    },
                    {
                      key: 'isContextMenuToShow',
                      value: function () {
                        var e = this.props,
                          t = e.action,
                          n = e.showAction;
                        return (
                          -1 !== t.indexOf('contextMenu') ||
                          -1 !== n.indexOf('contextMenu')
                        );
                      },
                    },
                    {
                      key: 'isClickToHide',
                      value: function () {
                        var e = this.props,
                          t = e.action,
                          n = e.hideAction;
                        return (
                          -1 !== t.indexOf('click') || -1 !== n.indexOf('click')
                        );
                      },
                    },
                    {
                      key: 'isMouseEnterToShow',
                      value: function () {
                        var e = this.props,
                          t = e.action,
                          n = e.showAction;
                        return (
                          -1 !== t.indexOf('hover') ||
                          -1 !== n.indexOf('mouseEnter')
                        );
                      },
                    },
                    {
                      key: 'isMouseLeaveToHide',
                      value: function () {
                        var e = this.props,
                          t = e.action,
                          n = e.hideAction;
                        return (
                          -1 !== t.indexOf('hover') ||
                          -1 !== n.indexOf('mouseLeave')
                        );
                      },
                    },
                    {
                      key: 'isFocusToShow',
                      value: function () {
                        var e = this.props,
                          t = e.action,
                          n = e.showAction;
                        return (
                          -1 !== t.indexOf('focus') || -1 !== n.indexOf('focus')
                        );
                      },
                    },
                    {
                      key: 'isBlurToHide',
                      value: function () {
                        var e = this.props,
                          t = e.action,
                          n = e.hideAction;
                        return (
                          -1 !== t.indexOf('focus') || -1 !== n.indexOf('blur')
                        );
                      },
                    },
                    {
                      key: 'forcePopupAlign',
                      value: function () {
                        var e;
                        this.state.popupVisible &&
                          (null === (e = this.popupRef.current) ||
                            void 0 === e ||
                            e.forceAlign());
                      },
                    },
                    {
                      key: 'fireEvents',
                      value: function (e, t) {
                        var n = this.props.children.props[e];
                        n && n(t);
                        var o = this.props[e];
                        o && o(t);
                      },
                    },
                    {
                      key: 'close',
                      value: function () {
                        this.setPopupVisible(!1);
                      },
                    },
                    {
                      key: 'render',
                      value: function () {
                        var t = this.state.popupVisible,
                          n = this.props,
                          i = n.children,
                          c = n.forceRender,
                          u = n.alignPoint,
                          l = n.className,
                          s = n.autoDestroy,
                          f = r.b.Children.only(i),
                          d = { key: 'trigger' };
                        this.isContextMenuToShow()
                          ? (d.onContextMenu = this.onContextMenu)
                          : (d.onContextMenu = this.createTwoChains(
                              'onContextMenu',
                            )),
                          this.isClickToHide() || this.isClickToShow()
                            ? ((d.onClick = this.onClick),
                              (d.onMouseDown = this.onMouseDown),
                              (d.onTouchStart = this.onTouchStart))
                            : ((d.onClick = this.createTwoChains('onClick')),
                              (d.onMouseDown = this.createTwoChains(
                                'onMouseDown',
                              )),
                              (d.onTouchStart = this.createTwoChains(
                                'onTouchStart',
                              ))),
                          this.isMouseEnterToShow()
                            ? ((d.onMouseEnter = this.onMouseEnter),
                              u && (d.onMouseMove = this.onMouseMove))
                            : (d.onMouseEnter = this.createTwoChains(
                                'onMouseEnter',
                              )),
                          this.isMouseLeaveToHide()
                            ? (d.onMouseLeave = this.onMouseLeave)
                            : (d.onMouseLeave = this.createTwoChains(
                                'onMouseLeave',
                              )),
                          this.isFocusToShow() || this.isBlurToHide()
                            ? ((d.onFocus = this.onFocus),
                              (d.onBlur = this.onBlur))
                            : ((d.onFocus = this.createTwoChains('onFocus')),
                              (d.onBlur = this.createTwoChains('onBlur')));
                        var p = Object(o.h)(
                          f && f.props && f.props.className,
                          l,
                        );
                        p && (d.className = p);
                        var b = Object(o.l)({}, d);
                        Object(a.f)(f) &&
                          (b.ref = Object(a.d)(this.triggerRef, f.ref));
                        var h,
                          v = r.b.cloneElement(f, b);
                        return (
                          (t || this.popupRef.current || c) &&
                            (h = r.b.createElement(
                              e,
                              {
                                key: 'portal',
                                getContainer: this.getContainer,
                                didUpdate: this.handlePortalUpdate,
                              },
                              this.getComponent(),
                            )),
                          !t && s && (h = null),
                          r.b.createElement(
                            bn.Provider,
                            {
                              value: {
                                onPopupMouseDown: this.onPopupMouseDown,
                              },
                            },
                            v,
                            h,
                          )
                        );
                      },
                    },
                  ],
                  [
                    {
                      key: 'getDerivedStateFromProps',
                      value: function (e, t) {
                        var n = e.popupVisible,
                          o = {};
                        return (
                          void 0 !== n &&
                            t.popupVisible !== n &&
                            ((o.popupVisible = n),
                            (o.prevPopupVisible = t.popupVisible)),
                          o
                        );
                      },
                    },
                  ],
                ),
                i
              );
            })(r.b.Component);
            return (
              (t.contextType = bn),
              (t.defaultProps = {
                prefixCls: 'rc-trigger-popup',
                getPopupClassNameFromAlign: vn,
                getDocument: mn,
                onPopupVisibleChange: hn,
                afterPopupVisibleChange: hn,
                onPopupAlign: hn,
                popupClassName: '',
                mouseEnterDelay: 0,
                mouseLeaveDelay: 0.1,
                focusDelay: 0,
                blurDelay: 0.15,
                popupStyle: {},
                destroyPopupOnHide: !1,
                popupAlign: {},
                defaultPopupVisible: !1,
                mask: !1,
                maskClosable: !0,
                action: [],
                showAction: [],
                hideAction: [],
                autoDestroy: !1,
              }),
              t
            );
          })(Re),
          yn = {
            bottomLeft: {
              points: ['tl', 'bl'],
              offset: [0, 4],
              overflow: { adjustX: 1, adjustY: 1 },
            },
            bottomRight: {
              points: ['tr', 'br'],
              offset: [0, 4],
              overflow: { adjustX: 1, adjustY: 1 },
            },
            topLeft: {
              points: ['bl', 'tl'],
              offset: [0, -4],
              overflow: { adjustX: 0, adjustY: 1 },
            },
            topRight: {
              points: ['br', 'tr'],
              offset: [0, -4],
              overflow: { adjustX: 0, adjustY: 1 },
            },
          };
        function Cn(e) {
          var t,
            n = e.prefixCls,
            a = e.popupElement,
            i = e.popupStyle,
            c = e.visible,
            u = e.dropdownClassName,
            l = e.dropdownAlign,
            s = e.transitionName,
            f = e.getPopupContainer,
            d = e.children,
            p = e.range,
            b = e.popupPlacement,
            h = e.direction,
            v = ''.concat(n, '-dropdown');
          return r.b.createElement(
            wn,
            {
              showAction: [],
              hideAction: [],
              popupPlacement:
                void 0 !== b ? b : 'rtl' === h ? 'bottomRight' : 'bottomLeft',
              builtinPlacements: yn,
              prefixCls: v,
              popupTransitionName: s,
              popup: a,
              popupAlign: l,
              popupVisible: c,
              popupClassName: Object(o.h)(
                u,
                ((t = {}),
                Object(o.i)(t, ''.concat(v, '-range'), p),
                Object(o.i)(t, ''.concat(v, '-rtl'), 'rtl' === h),
                t),
              ),
              popupStyle: i,
              getPopupContainer: f,
            },
            d,
          );
        }
        function On(e) {
          var t = e.open,
            n = e.value,
            a = e.isClickOutside,
            i = e.triggerOpen,
            c = e.forwardKeyDown,
            u = e.onKeyDown,
            l = e.blurToCancel,
            s = e.onSubmit,
            f = e.onCancel,
            d = e.onFocus,
            p = e.onBlur,
            b = r.b.useState(!1),
            h = Object(o.g)(b, 2),
            v = h[0],
            m = h[1],
            g = r.b.useState(!1),
            w = Object(o.g)(g, 2),
            y = w[0],
            C = w[1],
            O = r.b.useRef(!1),
            j = r.b.useRef(!1),
            k = r.b.useRef(!1),
            M = {
              onMouseDown: function () {
                m(!0), i(!0);
              },
              onKeyDown: function (e) {
                if (
                  (u(e, function () {
                    k.current = !0;
                  }),
                  !k.current)
                ) {
                  switch (e.which) {
                    case E.ENTER:
                      return (
                        t ? !1 !== s() && m(!0) : i(!0), void e.preventDefault()
                      );
                    case E.TAB:
                      return void (v && t && !e.shiftKey
                        ? (m(!1), e.preventDefault())
                        : !v &&
                          t &&
                          !c(e) &&
                          e.shiftKey &&
                          (m(!0), e.preventDefault()));
                    case E.ESC:
                      return m(!0), void f();
                  }
                  t || [E.SHIFT].includes(e.which) ? v || c(e) : i(!0);
                }
              },
              onFocus: function (e) {
                m(!0), C(!0), d && d(e);
              },
              onBlur: function (e) {
                !O.current && a(document.activeElement)
                  ? (l
                      ? setTimeout(function () {
                          a(document.activeElement) && f();
                        }, 0)
                      : t && (i(!1), j.current && s()),
                    C(!1),
                    p && p(e))
                  : (O.current = !1);
              },
            };
          return (
            r.b.useEffect(
              function () {
                j.current = !1;
              },
              [t],
            ),
            r.b.useEffect(
              function () {
                j.current = !0;
              },
              [n],
            ),
            r.b.useEffect(function () {
              return (
                (e = function (e) {
                  var n = (function (e) {
                    var t,
                      n = e.target;
                    return (
                      (e.composed &&
                        n.shadowRoot &&
                        (null === (t = e.composedPath) || void 0 === t
                          ? void 0
                          : t.call(e)[0])) ||
                      n
                    );
                  })(e);
                  if (t) {
                    var o = a(n);
                    o
                      ? (y && !o) || i(!1)
                      : ((O.current = !0),
                        requestAnimationFrame(function () {
                          O.current = !1;
                        }));
                  }
                }),
                !H &&
                  'undefined' != typeof window &&
                  window.addEventListener &&
                  ((H = function (e) {
                    Object(o.r)(V).forEach(function (t) {
                      t(e);
                    });
                  }),
                  window.addEventListener('mousedown', H)),
                V.add(e),
                function () {
                  V.delete(e),
                    0 === V.size &&
                      (window.removeEventListener('mousedown', H), (H = null));
                }
              );
              var e;
            }),
            [M, { focused: y, typing: v }]
          );
        }
        function En(e) {
          var t = e.valueTexts,
            n = e.onTextChange,
            a = r.b.useState(''),
            i = Object(o.g)(a, 2),
            c = i[0],
            u = i[1],
            l = r.b.useRef([]);
          function s() {
            u(l.current[0]);
          }
          return (
            (l.current = t),
            r.b.useEffect(
              function () {
                t.every(function (e) {
                  return e !== c;
                }) && s();
              },
              [t.join('||')],
            ),
            [
              c,
              function (e) {
                u(e), n(e);
              },
              s,
            ]
          );
        }
        function jn(e, t) {
          var n = t.formatList,
            o = t.generateConfig,
            r = t.locale;
          return d(
            function () {
              if (!e) return [[''], ''];
              for (var t = '', a = [], i = 0; i < n.length; i += 1) {
                var c = n[i],
                  u = J(e, { generateConfig: o, locale: r, format: c });
                a.push(u), 0 === i && (t = u);
              }
              return [a, t];
            },
            [e, n],
            function (e, t) {
              return e[0] !== t[0] || !Object(u.a)(e[1], t[1]);
            },
          );
        }
        function kn(e, t) {
          var n = t.formatList,
            a = t.generateConfig,
            i = t.locale,
            c = r.b.useState(null),
            u = Object(o.g)(c, 2),
            l = u[0],
            s = u[1],
            f = r.b.useRef(null);
          function d(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            cancelAnimationFrame(f.current),
              t
                ? s(e)
                : (f.current = requestAnimationFrame(function () {
                    s(e);
                  }));
          }
          var p = jn(l, { formatList: n, generateConfig: a, locale: i }),
            b = Object(o.g)(p, 2)[1];
          function h() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            d(null, e);
          }
          return (
            r.b.useEffect(
              function () {
                h(!0);
              },
              [e],
            ),
            r.b.useEffect(function () {
              return function () {
                return cancelAnimationFrame(f.current);
              };
            }, []),
            [
              b,
              function (e) {
                d(e);
              },
              h,
            ]
          );
        }
        function Mn(e, t, n, o) {
          var r = $(e, n, o, 1);
          function a(n) {
            return n(e, t) ? 'same' : n(r, t) ? 'closing' : 'far';
          }
          switch (n) {
            case 'year':
              return a(function (e, t) {
                return (function (e, t, n) {
                  var o = U(t, n);
                  return 'boolean' == typeof o
                    ? o
                    : Math.floor(e.getYear(t) / 10) ===
                        Math.floor(e.getYear(n) / 10);
                })(o, e, t);
              });
            case 'quarter':
            case 'month':
              return a(function (e, t) {
                return B(o, e, t);
              });
            default:
              return a(function (e, t) {
                return X(o, e, t);
              });
          }
        }
        function xn(e) {
          var t = e.values,
            n = e.picker,
            a = e.defaultDates,
            i = e.generateConfig,
            c = r.b.useState(function () {
              return [re(a, 0), re(a, 1)];
            }),
            u = Object(o.g)(c, 2),
            l = u[0],
            s = u[1],
            f = r.b.useState(null),
            d = Object(o.g)(f, 2),
            p = d[0],
            b = d[1],
            h = re(t, 0),
            v = re(t, 1);
          return [
            function (e) {
              return l[e]
                ? l[e]
                : re(p, e) ||
                    (function (e, t, n, o) {
                      var r = re(e, 0),
                        a = re(e, 1);
                      if (0 === t) return r;
                      if (r && a)
                        switch (Mn(r, a, n, o)) {
                          case 'same':
                          case 'closing':
                            return r;
                          default:
                            return $(a, n, o, -1);
                        }
                      return r;
                    })(t, e, n, i) ||
                    h ||
                    v ||
                    i.getNow();
            },
            function (e, n) {
              if (e) {
                var o = ae(p, e, n);
                s(ae(l, null, n) || [null, null]);
                var r = (n + 1) % 2;
                re(t, r) || (o = ae(o, e, r)), b(o);
              } else (h || v) && b(null);
            },
          ];
        }
        function Nn(e, t) {
          return e && e[0] && e[1] && t.isAfter(e[0], e[1]) ? [e[1], e[0]] : e;
        }
        function Dn(e, t, n, o) {
          return !!e || !(!o || !o[t]) || !!n[(t + 1) % 2];
        }
        function Pn(e) {
          var t,
            n,
            a,
            i,
            c = e.prefixCls,
            u = void 0 === c ? 'rc-picker' : c,
            l = e.id,
            s = e.style,
            f = e.className,
            d = e.popupStyle,
            p = e.dropdownClassName,
            b = e.transitionName,
            h = e.dropdownAlign,
            v = e.getPopupContainer,
            m = e.generateConfig,
            g = e.locale,
            w = e.placeholder,
            y = e.autoFocus,
            C = e.disabled,
            E = e.format,
            k = e.picker,
            M = void 0 === k ? 'date' : k,
            x = e.showTime,
            N = e.use12Hours,
            D = e.separator,
            P = void 0 === D ? '~' : D,
            S = e.value,
            T = e.defaultValue,
            R = e.defaultPickerValue,
            _ = e.open,
            A = e.defaultOpen,
            H = e.disabledDate,
            V = e.disabledTime,
            L = e.dateRender,
            I = e.panelRender,
            F = e.ranges,
            W = e.allowEmpty,
            U = e.allowClear,
            B = e.suffixIcon,
            X = e.clearIcon,
            Z = e.pickerRef,
            ee = e.inputReadOnly,
            te = e.mode,
            ne = e.renderExtraFooter,
            oe = e.onChange,
            ie = e.onOpenChange,
            ce = e.onPanelChange,
            ue = e.onCalendarChange,
            le = e.onFocus,
            fe = e.onBlur,
            de = e.onOk,
            pe = e.onKeyDown,
            be = e.components,
            he = e.order,
            ve = e.direction,
            me = e.activePickerIndex,
            ge = e.autoComplete,
            we = void 0 === ge ? 'off' : ge,
            ye = ('date' === M && !!x) || 'time' === M,
            Ce = r.b.useRef({}),
            Oe = r.b.useRef(null),
            Ee = r.b.useRef(null),
            je = r.b.useRef(null),
            ke = r.b.useRef(null),
            Me = r.b.useRef(null),
            xe = r.b.useRef(null),
            Se = r.b.useRef(null),
            Te =
              null ==
              (i = (function (e, t, n, o) {
                var r = e;
                if (!r)
                  switch (t) {
                    case 'time':
                      r = o ? 'hh:mm:ss a' : 'HH:mm:ss';
                      break;
                    case 'week':
                      r = 'gggg-wo';
                      break;
                    case 'month':
                      r = 'YYYY-MM';
                      break;
                    case 'quarter':
                      r = 'YYYY-[Q]Q';
                      break;
                    case 'year':
                      r = 'YYYY';
                      break;
                    default:
                      r = n ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
                  }
                return r;
              })(E, M, x, N))
                ? []
                : Array.isArray(i)
                ? i
                : [i],
            Re = O(0, { value: me }),
            _e = Object(o.g)(Re, 2),
            Ae = _e[0],
            Ye = _e[1],
            He = r.b.useRef(null),
            Ve = r.b.useMemo(
              function () {
                return Array.isArray(C) ? C : [C || !1, C || !1];
              },
              [C],
            ),
            Le = O(null, {
              value: S,
              defaultValue: T,
              postState: function (e) {
                return 'time' !== M || he ? Nn(e, m) : e;
              },
            }),
            Ie = Object(o.g)(Le, 2),
            Fe = Ie[0],
            We = Ie[1],
            Ue = xn({
              values: Fe,
              picker: M,
              defaultDates: R,
              generateConfig: m,
            }),
            Be = Object(o.g)(Ue, 2),
            Ke = Be[0],
            ze = Be[1],
            Xe = O(Fe, {
              postState: function (e) {
                var t = e;
                if (Ve[0] && Ve[1]) return t;
                for (var n = 0; n < 2; n += 1)
                  !Ve[n] || re(t, n) || re(W, n) || (t = ae(t, m.getNow(), n));
                return t;
              },
            }),
            qe = Object(o.g)(Xe, 2),
            Ge = qe[0],
            Qe = qe[1],
            Ze = O([M, M], { value: te }),
            $e = Object(o.g)(Ze, 2),
            Je = $e[0],
            et = $e[1];
          r.b.useEffect(
            function () {
              et([M, M]);
            },
            [M],
          );
          var tt = function (e, t) {
              et(e), ce && ce(t, e);
            },
            nt = (function (e, t, n) {
              var o = e.picker,
                a = e.locale,
                i = e.selectedValue,
                c = e.disabledDate,
                u = e.disabled,
                l = e.generateConfig,
                s = re(i, 0),
                f = re(i, 1);
              function d(e) {
                return l.locale.getWeekFirstDate(a.locale, e);
              }
              function p(e) {
                return 100 * l.getYear(e) + l.getMonth(e);
              }
              function b(e) {
                return 10 * l.getYear(e) + K(l, e);
              }
              return [
                r.b.useCallback(
                  function (e) {
                    if (c && c(e)) return !0;
                    if (u[1] && f) return !q(l, e, f) && l.isAfter(e, f);
                    if (t && f)
                      switch (o) {
                        case 'quarter':
                          return b(e) > b(f);
                        case 'month':
                          return p(e) > p(f);
                        case 'week':
                          return d(e) > d(f);
                        default:
                          return !q(l, e, f) && l.isAfter(e, f);
                      }
                    return !1;
                  },
                  [c, u[1], f, t],
                ),
                r.b.useCallback(
                  function (e) {
                    if (c && c(e)) return !0;
                    if (u[0] && s) return !q(l, e, f) && l.isAfter(s, e);
                    if (n && s)
                      switch (o) {
                        case 'quarter':
                          return b(e) < b(s);
                        case 'month':
                          return p(e) < p(s);
                        case 'week':
                          return d(e) < d(s);
                        default:
                          return !q(l, e, s) && l.isAfter(s, e);
                      }
                    return !1;
                  },
                  [c, u[0], s, n],
                ),
              ];
            })(
              {
                picker: M,
                selectedValue: Ge,
                locale: g,
                disabled: Ve,
                disabledDate: H,
                generateConfig: m,
              },
              Ce.current[1],
              Ce.current[0],
            ),
            ot = Object(o.g)(nt, 2),
            rt = ot[0],
            at = ot[1],
            it = O(!1, {
              value: _,
              defaultValue: A,
              postState: function (e) {
                return !Ve[Ae] && e;
              },
              onChange: function (e) {
                ie && ie(e),
                  !e &&
                    He.current &&
                    He.current.onClose &&
                    He.current.onClose();
              },
            }),
            ct = Object(o.g)(it, 2),
            ut = ct[0],
            lt = ct[1],
            st = ut && 0 === Ae,
            ft = ut && 1 === Ae,
            dt = r.b.useState(0),
            pt = Object(o.g)(dt, 2),
            bt = pt[0],
            ht = pt[1];
          r.b.useEffect(
            function () {
              !ut && Oe.current && ht(Oe.current.offsetWidth);
            },
            [ut],
          );
          var vt = r.b.useRef();
          function mt(e, t) {
            if (e)
              clearTimeout(vt.current),
                (Ce.current[t] = !0),
                Ye(t),
                lt(e),
                ut || ze(null, t);
            else if (Ae === t) {
              lt(e);
              var n = Ce.current;
              vt.current = setTimeout(function () {
                n === Ce.current && (Ce.current = {});
              });
            }
          }
          function gt(e) {
            mt(!0, e),
              setTimeout(function () {
                var t = [xe, Se][e];
                t.current && t.current.focus();
              }, 0);
          }
          function wt(e, t) {
            var n = e,
              r = re(n, 0),
              a = re(n, 1);
            r &&
              a &&
              m.isAfter(r, a) &&
              (('week' === M && !G(m, g.locale, r, a)) ||
              ('quarter' === M && !z(m, r, a)) ||
              ('week' !== M && 'quarter' !== M && 'time' !== M && !q(m, r, a))
                ? (0 === t
                    ? ((n = [r, null]), (a = null))
                    : ((r = null), (n = [null, a])),
                  (Ce.current = Object(o.i)({}, t, !0)))
                : ('time' === M && !1 === he) || (n = Nn(n, m))),
              Qe(n);
            var i =
                n && n[0]
                  ? J(n[0], { generateConfig: m, locale: g, format: Te[0] })
                  : '',
              c =
                n && n[1]
                  ? J(n[1], { generateConfig: m, locale: g, format: Te[0] })
                  : '';
            ue && ue(n, [i, c], { range: 0 === t ? 'start' : 'end' });
            var u = Dn(r, 0, Ve, W),
              l = Dn(a, 1, Ve, W);
            (null === n || (u && l)) &&
              (We(n),
              !oe ||
                (Q(m, re(Fe, 0), r) && Q(m, re(Fe, 1), a)) ||
                oe(n, [i, c]));
            var s = null;
            0 !== t || Ve[1] ? 1 !== t || Ve[0] || (s = 0) : (s = 1),
              null === s || s === Ae || (Ce.current[s] && re(n, s)) || !re(n, t)
                ? mt(!1, t)
                : gt(s);
          }
          var yt = function (e) {
              return ut && He.current && He.current.onKeyDown
                ? He.current.onKeyDown(e)
                : (Object(o.y)(
                    !1,
                    'Picker not correct forward KeyDown operation. Please help to fire issue about this.',
                  ),
                  !1);
            },
            Ct = { formatList: Te, generateConfig: m, locale: g },
            Ot = jn(re(Ge, 0), Ct),
            Et = Object(o.g)(Ot, 2),
            jt = Et[0],
            kt = Et[1],
            Mt = jn(re(Ge, 1), Ct),
            xt = Object(o.g)(Mt, 2),
            Nt = xt[0],
            Dt = xt[1],
            Pt = function (e, t) {
              var n = (function (e, t) {
                var n = t.generateConfig,
                  o = t.locale,
                  r = t.formatList;
                return e && 'function' != typeof r[0]
                  ? n.locale.parse(o.locale, e, r)
                  : null;
              })(e, { locale: g, formatList: Te, generateConfig: m });
              n && !(0 === t ? rt : at)(n) && (Qe(ae(Ge, n, t)), ze(n, t));
            },
            St = En({
              valueTexts: jt,
              onTextChange: function (e) {
                return Pt(e, 0);
              },
            }),
            Tt = Object(o.g)(St, 3),
            Rt = Tt[0],
            _t = Tt[1],
            At = Tt[2],
            Yt = En({
              valueTexts: Nt,
              onTextChange: function (e) {
                return Pt(e, 1);
              },
            }),
            Ht = Object(o.g)(Yt, 3),
            Vt = Ht[0],
            Lt = Ht[1],
            It = Ht[2],
            Ft = r.b.useState(null),
            Wt = Object(o.g)(Ft, 2),
            Ut = Wt[0],
            Bt = Wt[1],
            Kt = r.b.useState(null),
            zt = Object(o.g)(Kt, 2),
            Xt = zt[0],
            qt = zt[1],
            Gt = kn(Rt, { formatList: Te, generateConfig: m, locale: g }),
            Qt = Object(o.g)(Gt, 3),
            Zt = Qt[0],
            $t = Qt[1],
            Jt = Qt[2],
            en = kn(Vt, { formatList: Te, generateConfig: m, locale: g }),
            tn = Object(o.g)(en, 3),
            nn = tn[0],
            on = tn[1],
            rn = tn[2],
            an = function (e, t) {
              return {
                blurToCancel: ye,
                forwardKeyDown: yt,
                onBlur: fe,
                isClickOutside: function (e) {
                  return !(function (e, t) {
                    return e.some(function (e) {
                      return e && e.contains(t);
                    });
                  })([Ee.current, je.current, ke.current], e);
                },
                onFocus: function (t) {
                  Ye(e), le && le(t);
                },
                triggerOpen: function (t) {
                  mt(t, e);
                },
                onSubmit: function () {
                  wt(Ge, e), t();
                },
                onCancel: function () {
                  mt(!1, e), Qe(Fe), t();
                },
              };
            },
            cn = On(
              Object(o.l)(
                Object(o.l)({}, an(0, At)),
                {},
                {
                  open: st,
                  value: Rt,
                  onKeyDown: function (e, t) {
                    null == pe || pe(e, t);
                  },
                },
              ),
            ),
            un = Object(o.g)(cn, 2),
            ln = un[0],
            sn = un[1],
            fn = sn.focused,
            dn = sn.typing,
            pn = On(
              Object(o.l)(
                Object(o.l)({}, an(1, It)),
                {},
                {
                  open: ft,
                  value: Vt,
                  onKeyDown: function (e, t) {
                    null == pe || pe(e, t);
                  },
                },
              ),
            ),
            bn = Object(o.g)(pn, 2),
            hn = bn[0],
            vn = bn[1],
            mn = vn.focused,
            gn = vn.typing,
            wn =
              Fe && Fe[0]
                ? J(Fe[0], {
                    locale: g,
                    format: 'YYYYMMDDHHmmss',
                    generateConfig: m,
                  })
                : '',
            yn =
              Fe && Fe[1]
                ? J(Fe[1], {
                    locale: g,
                    format: 'YYYYMMDDHHmmss',
                    generateConfig: m,
                  })
                : '';
          r.b.useEffect(
            function () {
              ut ||
                (Qe(Fe),
                jt.length && '' !== jt[0] ? kt !== Rt && At() : _t(''),
                Nt.length && '' !== Nt[0] ? Dt !== Vt && It() : Lt(''));
            },
            [ut, jt, Nt],
          ),
            r.b.useEffect(
              function () {
                Qe(Fe);
              },
              [wn, yn],
            ),
            Z &&
              (Z.current = {
                focus: function () {
                  xe.current && xe.current.focus();
                },
                blur: function () {
                  xe.current && xe.current.blur(),
                    Se.current && Se.current.blur();
                },
              });
          var Mn = Object.keys(F || {}).map(function (e) {
            var t = F[e],
              n = 'function' == typeof t ? t() : t;
            return {
              label: e,
              onClick: function () {
                wt(n, null), mt(!1, Ae);
              },
              onMouseEnter: function () {
                Bt(n);
              },
              onMouseLeave: function () {
                Bt(null);
              },
            };
          });
          function Pn() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              a = null;
            ut && Xt && Xt[0] && Xt[1] && m.isAfter(Xt[1], Xt[0]) && (a = Xt);
            var i = x;
            if (x && 'object' === Object(o.k)(x) && x.defaultValue) {
              var c = x.defaultValue;
              i = Object(o.l)(
                Object(o.l)({}, x),
                {},
                { defaultValue: re(c, Ae) || void 0 },
              );
            }
            var l = null;
            return (
              L &&
                (l = function (e, t) {
                  return L(e, t, { range: Ae ? 'end' : 'start' });
                }),
              r.b.createElement(
                se.Provider,
                {
                  value: {
                    inRange: !0,
                    panelPosition: t,
                    rangedValue: Ut || Ge,
                    hoverRangedValue: a,
                  },
                },
                r.b.createElement(
                  Pe,
                  Object(o.j)({}, e, n, {
                    dateRender: l,
                    showTime: i,
                    mode: Je[Ae],
                    generateConfig: m,
                    style: void 0,
                    direction: ve,
                    disabledDate: 0 === Ae ? rt : at,
                    disabledTime: function (e) {
                      return !!V && V(e, 0 === Ae ? 'start' : 'end');
                    },
                    className: Object(o.h)(
                      Object(o.i)(
                        {},
                        ''.concat(u, '-panel-focused'),
                        0 === Ae ? !dn : !gn,
                      ),
                    ),
                    value: re(Ge, Ae),
                    locale: g,
                    tabIndex: -1,
                    onPanelChange: function (e, n) {
                      0 === Ae && Jt(!0),
                        1 === Ae && rn(!0),
                        tt(ae(Je, n, Ae), ae(Ge, e, Ae));
                      var o = e;
                      'right' === t && Je[Ae] === n && (o = $(o, n, m, -1)),
                        ze(o, Ae);
                    },
                    onOk: null,
                    onSelect: void 0,
                    onChange: void 0,
                    defaultValue: re(Ge, 0 === Ae ? 1 : 0),
                    defaultPickerValue: void 0,
                  }),
                ),
              )
            );
          }
          var Sn = 0,
            Tn = 0;
          Ae &&
            je.current &&
            Me.current &&
            Ee.current &&
            ((Sn = je.current.offsetWidth + Me.current.offsetWidth),
            Ee.current.offsetWidth && Sn > Ee.current.offsetWidth && (Tn = Sn));
          var Rn = 'rtl' === ve ? { right: Sn } : { left: Sn };
          var _n,
            An,
            Yn = r.b.createElement(
              'div',
              {
                className: Object(o.h)(
                  ''.concat(u, '-range-wrapper'),
                  ''.concat(u, '-').concat(M, '-range-wrapper'),
                ),
                style: { minWidth: bt },
              },
              r.b.createElement('div', {
                className: ''.concat(u, '-range-arrow'),
                style: Rn,
              }),
              (function () {
                var e,
                  t = Ne(u, Je[Ae], ne),
                  n = De({
                    prefixCls: u,
                    components: be,
                    needConfirmButton: ye,
                    okDisabled: !re(Ge, Ae) || (H && H(Ge[Ae])),
                    locale: g,
                    rangeList: Mn,
                    onOk: function () {
                      re(Ge, Ae) && (wt(Ge, Ae), de && de(Ge));
                    },
                  });
                if ('time' === M || x) e = Pn();
                else {
                  var o = Ke(Ae),
                    a = $(o, M, m),
                    i = Je[Ae] === M,
                    c = Pn(!!i && 'left', {
                      pickerValue: o,
                      onPickerValueChange: function (e) {
                        ze(e, Ae);
                      },
                    }),
                    l = Pn('right', {
                      pickerValue: a,
                      onPickerValueChange: function (e) {
                        ze($(e, M, m, -1), Ae);
                      },
                    });
                  e =
                    'rtl' === ve
                      ? r.b.createElement(r.b.Fragment, null, l, i && c)
                      : r.b.createElement(r.b.Fragment, null, c, i && l);
                }
                var s = r.b.createElement(
                  r.b.Fragment,
                  null,
                  r.b.createElement(
                    'div',
                    { className: ''.concat(u, '-panels') },
                    e,
                  ),
                  (t || n) &&
                    r.b.createElement(
                      'div',
                      { className: ''.concat(u, '-footer') },
                      t,
                      n,
                    ),
                );
                return (
                  I && (s = I(s)),
                  r.b.createElement(
                    'div',
                    {
                      className: ''.concat(u, '-panel-container'),
                      style: { marginLeft: Tn },
                      ref: Ee,
                      onMouseDown: function (e) {
                        e.preventDefault();
                      },
                    },
                    s,
                  )
                );
              })(),
            );
          B &&
            (_n = r.b.createElement(
              'span',
              { className: ''.concat(u, '-suffix') },
              B,
            )),
            U &&
              ((re(Fe, 0) && !Ve[0]) || (re(Fe, 1) && !Ve[1])) &&
              (An = r.b.createElement(
                'span',
                {
                  onMouseDown: function (e) {
                    e.preventDefault(), e.stopPropagation();
                  },
                  onMouseUp: function (e) {
                    e.preventDefault(), e.stopPropagation();
                    var t = Fe;
                    Ve[0] || (t = ae(t, null, 0)),
                      Ve[1] || (t = ae(t, null, 1)),
                      wt(t, null),
                      mt(!1, Ae);
                  },
                  className: ''.concat(u, '-clear'),
                },
                X ||
                  r.b.createElement('span', {
                    className: ''.concat(u, '-clear-btn'),
                  }),
              ));
          var Hn = { size: Y(M, Te[0], m) },
            Vn = 0,
            Ln = 0;
          je.current &&
            ke.current &&
            Me.current &&
            (0 === Ae
              ? (Ln = je.current.offsetWidth)
              : ((Vn = Sn), (Ln = ke.current.offsetWidth)));
          var In = 'rtl' === ve ? { right: Vn } : { left: Vn };
          return r.b.createElement(
            j.Provider,
            {
              value: {
                operationRef: He,
                hideHeader: 'time' === M,
                onDateMouseEnter: function (e) {
                  qt(ae(Ge, e, Ae)), 0 === Ae ? $t(e) : on(e);
                },
                onDateMouseLeave: function () {
                  qt(ae(Ge, null, Ae)), 0 === Ae ? Jt() : rn();
                },
                hideRanges: !0,
                onSelect: function (e, t) {
                  var n = ae(Ge, e, Ae);
                  'submit' === t || ('key' !== t && !ye)
                    ? (wt(n, Ae), 0 === Ae ? Jt() : rn())
                    : Qe(n);
                },
                open: ut,
              },
            },
            r.b.createElement(
              Cn,
              {
                visible: ut,
                popupElement: Yn,
                popupStyle: d,
                prefixCls: u,
                dropdownClassName: p,
                dropdownAlign: h,
                getPopupContainer: v,
                transitionName: b,
                range: !0,
                direction: ve,
              },
              r.b.createElement(
                'div',
                Object(o.j)(
                  {
                    ref: Oe,
                    className: Object(o.h)(
                      u,
                      ''.concat(u, '-range'),
                      f,
                      ((t = {}),
                      Object(o.i)(t, ''.concat(u, '-disabled'), Ve[0] && Ve[1]),
                      Object(o.i)(
                        t,
                        ''.concat(u, '-focused'),
                        0 === Ae ? fn : mn,
                      ),
                      Object(o.i)(t, ''.concat(u, '-rtl'), 'rtl' === ve),
                      t),
                    ),
                    style: s,
                    onClick: function (e) {
                      ut ||
                        xe.current.contains(e.target) ||
                        Se.current.contains(e.target) ||
                        (Ve[0] ? Ve[1] || gt(1) : gt(0));
                    },
                    onMouseDown: function (e) {
                      !ut ||
                        (!fn && !mn) ||
                        xe.current.contains(e.target) ||
                        Se.current.contains(e.target) ||
                        e.preventDefault();
                    },
                  },
                  (function (e) {
                    var t = {};
                    return (
                      Object.keys(e).forEach(function (n) {
                        ('data-' !== n.substr(0, 5) &&
                          'aria-' !== n.substr(0, 5) &&
                          'role' !== n &&
                          'name' !== n) ||
                          'data-__' === n.substr(0, 7) ||
                          (t[n] = e[n]);
                      }),
                      t
                    );
                  })(e),
                ),
                r.b.createElement(
                  'div',
                  {
                    className: Object(o.h)(
                      ''.concat(u, '-input'),
                      ((n = {}),
                      Object(o.i)(n, ''.concat(u, '-input-active'), 0 === Ae),
                      Object(o.i)(n, ''.concat(u, '-input-placeholder'), !!Zt),
                      n),
                    ),
                    ref: je,
                  },
                  r.b.createElement(
                    'input',
                    Object(o.j)(
                      {
                        id: l,
                        disabled: Ve[0],
                        readOnly: ee || 'function' == typeof Te[0] || !dn,
                        value: Zt || Rt,
                        onChange: function (e) {
                          _t(e.target.value);
                        },
                        autoFocus: y,
                        placeholder: re(w, 0) || '',
                        ref: xe,
                      },
                      ln,
                      Hn,
                      { autoComplete: we },
                    ),
                  ),
                ),
                r.b.createElement(
                  'div',
                  { className: ''.concat(u, '-range-separator'), ref: Me },
                  P,
                ),
                r.b.createElement(
                  'div',
                  {
                    className: Object(o.h)(
                      ''.concat(u, '-input'),
                      ((a = {}),
                      Object(o.i)(a, ''.concat(u, '-input-active'), 1 === Ae),
                      Object(o.i)(a, ''.concat(u, '-input-placeholder'), !!nn),
                      a),
                    ),
                    ref: ke,
                  },
                  r.b.createElement(
                    'input',
                    Object(o.j)(
                      {
                        disabled: Ve[1],
                        readOnly: ee || 'function' == typeof Te[0] || !gn,
                        value: nn || Vt,
                        onChange: function (e) {
                          Lt(e.target.value);
                        },
                        placeholder: re(w, 1) || '',
                        ref: Se,
                      },
                      hn,
                      Hn,
                      { autoComplete: we },
                    ),
                  ),
                ),
                r.b.createElement('div', {
                  className: ''.concat(u, '-active-bar'),
                  style: Object(o.l)(
                    Object(o.l)({}, In),
                    {},
                    { width: Ln, position: 'absolute' },
                  ),
                }),
                _n,
                An,
              ),
            ),
          );
        }
        var Sn = (function (e) {
          Object(o.c)(n, e);
          var t = Object(o.d)(n);
          function n() {
            var e;
            return (
              Object(o.e)(this, n),
              ((e = t.apply(this, arguments)).pickerRef = r.b.createRef()),
              (e.focus = function () {
                e.pickerRef.current && e.pickerRef.current.focus();
              }),
              (e.blur = function () {
                e.pickerRef.current && e.pickerRef.current.blur();
              }),
              e
            );
          }
          return (
            Object(o.f)(n, [
              {
                key: 'render',
                value: function () {
                  return r.b.createElement(
                    Pn,
                    Object(o.j)({}, this.props, { pickerRef: this.pickerRef }),
                  );
                },
              },
            ]),
            n
          );
        })(r.b.Component);
        function Tn(e, t, n) {
          return void 0 !== n
            ? n
            : 'year' === e && t.lang.yearPlaceholder
            ? t.lang.rangeYearPlaceholder
            : 'month' === e && t.lang.monthPlaceholder
            ? t.lang.rangeMonthPlaceholder
            : 'week' === e && t.lang.weekPlaceholder
            ? t.lang.rangeWeekPlaceholder
            : 'time' === e && t.timePickerLocale.placeholder
            ? t.timePickerLocale.rangePlaceholder
            : t.lang.rangePlaceholder;
        }
        var Rn = function (e, t) {
            var n = {};
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) &&
                t.indexOf(o) < 0 &&
                (n[o] = e[o]);
            if (
              null != e &&
              'function' == typeof Object.getOwnPropertySymbols
            ) {
              var r = 0;
              for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                t.indexOf(o[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                  (n[o[r]] = e[o[r]]);
            }
            return n;
          },
          _n = Object(f.a)(
            'success',
            'processing',
            'error',
            'default',
            'warning',
          ),
          An = Object(f.a)(
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
          ),
          Yn = function (e, t) {
            var n = {};
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) &&
                t.indexOf(o) < 0 &&
                (n[o] = e[o]);
            if (
              null != e &&
              'function' == typeof Object.getOwnPropertySymbols
            ) {
              var r = 0;
              for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                t.indexOf(o[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                  (n[o[r]] = e[o[r]]);
            }
            return n;
          },
          Hn = new RegExp('^('.concat(An.join('|'), ')(-inverse)?$')),
          Vn = new RegExp('^('.concat(_n.join('|'), ')$')),
          Ln = function (e, t) {
            var n,
              a = e.prefixCls,
              c = e.className,
              u = e.style,
              f = e.children,
              d = e.icon,
              p = e.color,
              b = e.onClose,
              h = e.closeIcon,
              v = e.closable,
              m = void 0 !== v && v,
              g = Yn(e, [
                'prefixCls',
                'className',
                'style',
                'children',
                'icon',
                'color',
                'onClose',
                'closeIcon',
                'closable',
              ]),
              w = r.b.useContext(o.a),
              y = w.getPrefixCls,
              C = w.direction,
              O = r.b.useState(!0),
              E = Object(o.g)(O, 2),
              j = E[0],
              k = E[1];
            r.b.useEffect(
              function () {
                'visible' in g && k(g.visible);
              },
              [g.visible],
            );
            var M = function () {
                return !!p && (Hn.test(p) || Vn.test(p));
              },
              x = Object(o.j)({ backgroundColor: p && !M() ? p : void 0 }, u),
              N = M(),
              D = y('tag', a),
              P = Object(o.h)(
                D,
                ((n = {}),
                Object(o.i)(n, ''.concat(D, '-').concat(p), N),
                Object(o.i)(n, ''.concat(D, '-has-color'), p && !N),
                Object(o.i)(n, ''.concat(D, '-hidden'), !j),
                Object(o.i)(n, ''.concat(D, '-rtl'), 'rtl' === C),
                n),
                c,
              ),
              S = function (e) {
                e.stopPropagation(),
                  b && b(e),
                  e.defaultPrevented || 'visible' in g || k(!1);
              },
              T = 'onClick' in g || (f && 'a' === f.type),
              R = Object(s.a)(g, ['visible']),
              _ = d || null,
              A = _
                ? r.b.createElement(
                    r.b.Fragment,
                    null,
                    _,
                    r.b.createElement('span', null, f),
                  )
                : f,
              Y = r.b.createElement(
                'span',
                Object(o.j)({}, R, { ref: t, className: P, style: x }),
                A,
                m
                  ? h
                    ? r.b.createElement(
                        'span',
                        { className: ''.concat(D, '-close-icon'), onClick: S },
                        h,
                      )
                    : r.b.createElement(i.a, {
                        className: ''.concat(D, '-close-icon'),
                        onClick: S,
                      })
                  : null,
              );
            return T ? r.b.createElement(l.c, null, Y) : Y;
          },
          In = r.b.forwardRef(Ln);
        (In.displayName = 'Tag'),
          (In.CheckableTag = function (e) {
            var t,
              n = e.prefixCls,
              a = e.className,
              i = e.checked,
              c = e.onChange,
              u = e.onClick,
              l = Rn(e, [
                'prefixCls',
                'className',
                'checked',
                'onChange',
                'onClick',
              ]),
              s = (0, r.b.useContext(o.a).getPrefixCls)('tag', n),
              f = Object(o.h)(
                s,
                ((t = {}),
                Object(o.i)(t, ''.concat(s, '-checkable'), !0),
                Object(o.i)(t, ''.concat(s, '-checkable-checked'), i),
                t),
                a,
              );
            return r.b.createElement(
              'span',
              Object(o.j)({}, l, {
                className: f,
                onClick: function (e) {
                  c && c(!i), u && u(e);
                },
              }),
            );
          });
        var Fn = {
          button: function (e) {
            return r.b.createElement(
              l.a,
              Object(o.j)({ size: 'small', type: 'primary' }, e),
            );
          },
          rangeItem: function (e) {
            return r.b.createElement(In, Object(o.j)({ color: 'blue' }, e));
          },
        };
        function Wn(e) {
          var t,
            n = e.format,
            r = e.picker,
            a = e.showHour,
            i = e.showMinute,
            c = e.showSecond,
            u = e.use12Hours,
            l = ((t = n), t ? (Array.isArray(t) ? t : [t]) : [])[0],
            s = Object(o.j)({}, e);
          return (
            l &&
              'string' == typeof l &&
              (l.includes('s') || void 0 !== c || (s.showSecond = !1),
              l.includes('m') || void 0 !== i || (s.showMinute = !1),
              l.includes('H') ||
                l.includes('h') ||
                void 0 !== a ||
                (s.showHour = !1),
              (l.includes('a') || l.includes('A')) &&
                void 0 === u &&
                (s.use12Hours = !0)),
            'time' === r
              ? s
              : ('function' == typeof l && delete s.format, { showTime: s })
          );
        }
        var Un = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        };
        t.a = function (e) {
          var t = (function (t) {
            Object(o.c)(a, t);
            var n = Object(o.d)(a);
            function a() {
              var t;
              return (
                Object(o.e)(this, a),
                ((t = n.apply(this, arguments)).pickerRef = r.b.createRef()),
                (t.focus = function () {
                  t.pickerRef.current && t.pickerRef.current.focus();
                }),
                (t.blur = function () {
                  t.pickerRef.current && t.pickerRef.current.blur();
                }),
                (t.getDefaultLocale = function () {
                  var e = t.props.locale,
                    n = Object(o.j)(Object(o.j)({}, o.v), e);
                  return (
                    (n.lang = Object(o.j)(
                      Object(o.j)({}, n.lang),
                      (e || {}).lang,
                    )),
                    n
                  );
                }),
                (t.renderPicker = function (n) {
                  var a = t.context,
                    c = a.getPrefixCls,
                    u = a.direction,
                    s = a.getPopupContainer,
                    f = t.props,
                    d = f.prefixCls,
                    p = f.getPopupContainer,
                    b = f.className,
                    v = f.size,
                    m = f.bordered,
                    w = void 0 === m || m,
                    y = f.placeholder,
                    O = Un(f, [
                      'prefixCls',
                      'getPopupContainer',
                      'className',
                      'size',
                      'bordered',
                      'placeholder',
                    ]),
                    E = t.props,
                    j = E.format,
                    k = E.showTime,
                    M = E.picker,
                    x = c('picker', d),
                    N = {};
                  return (
                    (N = Object(o.j)(
                      Object(o.j)(
                        Object(o.j)({}, N),
                        k ? Wn(Object(o.j)({ format: j, picker: M }, k)) : {},
                      ),
                      'time' === M
                        ? Wn(
                            Object(o.j)(Object(o.j)({ format: j }, t.props), {
                              picker: M,
                            }),
                          )
                        : {},
                    )),
                    r.b.createElement(l.b.Consumer, null, function (a) {
                      var c,
                        l = v || a;
                      return r.b.createElement(
                        Sn,
                        Object(o.j)(
                          {
                            separator: r.b.createElement(
                              'span',
                              {
                                'aria-label': 'to',
                                className: ''.concat(x, '-separator'),
                              },
                              r.b.createElement(C, null),
                            ),
                            ref: t.pickerRef,
                            placeholder: Tn(M, n, y),
                            suffixIcon:
                              'time' === M
                                ? r.b.createElement(g, null)
                                : r.b.createElement(h, null),
                            clearIcon: r.b.createElement(i.b, null),
                            allowClear: !0,
                            transitionName: 'slide-up',
                          },
                          O,
                          N,
                          {
                            className: Object(o.h)(
                              ((c = {}),
                              Object(o.i)(c, ''.concat(x, '-').concat(l), l),
                              Object(o.i)(c, ''.concat(x, '-borderless'), !w),
                              c),
                              b,
                            ),
                            locale: n.lang,
                            prefixCls: x,
                            getPopupContainer: p || s,
                            generateConfig: e,
                            prevIcon: r.b.createElement('span', {
                              className: ''.concat(x, '-prev-icon'),
                            }),
                            nextIcon: r.b.createElement('span', {
                              className: ''.concat(x, '-next-icon'),
                            }),
                            superPrevIcon: r.b.createElement('span', {
                              className: ''.concat(x, '-super-prev-icon'),
                            }),
                            superNextIcon: r.b.createElement('span', {
                              className: ''.concat(x, '-super-next-icon'),
                            }),
                            components: Fn,
                            direction: u,
                          },
                        ),
                      );
                    })
                  );
                }),
                t
              );
            }
            return (
              Object(o.f)(a, [
                {
                  key: 'render',
                  value: function () {
                    return r.b.createElement(
                      o.b,
                      {
                        componentName: 'DatePicker',
                        defaultLocale: this.getDefaultLocale,
                      },
                      this.renderPicker,
                    );
                  },
                },
              ]),
              a
            );
          })(r.b.Component);
          return (t.contextType = o.a), t;
        };
      }.call(this, n(26)));
    },
  },
]);
//# sourceMappingURL=lib-generateRangePicker.ab14fb917f4f179e12d8.js.map
