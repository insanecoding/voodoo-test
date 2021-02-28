import {
  h as _typeof,
  w as warningOnce,
  i as _objectSpread2,
  j as _objectWithoutProperties,
  d as _slicedToArray,
  e as classnames,
  f as _defineProperty,
  k as reactIs,
  _ as _inherits,
  a as _createSuper,
  b as _classCallCheck,
  c as _createClass,
} from './reactNode-2dfb2fa1.js';
import { r as react } from './index-57a74e37.js';
import { r as reactDom } from './index-8dbeb7e4.js';

var IconContext = /*#__PURE__*/ react.createContext({});

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = '100%';
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  // Automatically convert percentage into number
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  // Handle floating point rounding errors
  if (Math.abs(n - max) < 0.000001) {
    return 1;
  }
  // Convert into [0, 1] range if it isn't already
  if (max === 360) {
    // If n is a hue given in degrees,
    // wrap around out-of-range values into [0, 360] range
    // then convert into [0, 1].
    n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
  } else {
    // If n not a hue given in degrees
    // Convert into [0, 1] range if it isn't already.
    n = (n % max) / parseFloat(String(max));
  }
  return n;
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
  return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
  return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
  if (n <= 1) {
    return Number(n) * 100 + '%';
  }
  return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
  return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255,
  };
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * (6 * t);
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
  var r;
  var g;
  var b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    // achromatic
    g = l;
    b = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
  return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16)),
  ];
  // Return a 3 character hex if possible
  if (
    allow3Char &&
    hex[0].startsWith(hex[0].charAt(1)) &&
    hex[1].startsWith(hex[1].charAt(1)) &&
    hex[2].startsWith(hex[2].charAt(1))
  ) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join('');
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
  return parseInt(val, 16);
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
};

/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;
  if (typeof color === 'string') {
    color = stringInputToObject(color);
  }
  if (typeof color === 'object') {
    if (
      isValidCSSUnit(color.r) &&
      isValidCSSUnit(color.g) &&
      isValidCSSUnit(color.b)
    ) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
    } else if (
      isValidCSSUnit(color.h) &&
      isValidCSSUnit(color.s) &&
      isValidCSSUnit(color.v)
    ) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format = 'hsv';
    } else if (
      isValidCSSUnit(color.h) &&
      isValidCSSUnit(color.s) &&
      isValidCSSUnit(color.l)
    ) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format = 'hsl';
    }
    if (Object.prototype.hasOwnProperty.call(color, 'a')) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok: ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a,
  };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = '(?:' + CSS_NUMBER + ')|(?:' + CSS_INTEGER + ')';
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 =
  '[\\s|\\(]+(' +
  CSS_UNIT +
  ')[,|\\s]+(' +
  CSS_UNIT +
  ')[,|\\s]+(' +
  CSS_UNIT +
  ')\\s*\\)?';
var PERMISSIVE_MATCH4 =
  '[\\s|\\(]+(' +
  CSS_UNIT +
  ')[,|\\s]+(' +
  CSS_UNIT +
  ')[,|\\s]+(' +
  CSS_UNIT +
  ')[,|\\s]+(' +
  CSS_UNIT +
  ')\\s*\\)?';
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
  rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
  hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
  hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
  hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
  hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === 'transparent') {
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
  }
  // Try to match string input using regular expressions.
  // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
  // Just return an object and let the conversion functions handle that.
  // This way the result will be the same whether the tinycolor is initialized with string or object.
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? 'name' : 'hex8',
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? 'name' : 'hex',
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? 'name' : 'hex8',
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? 'name' : 'hex',
    };
  }
  return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [
  {
    index: 7,
    opacity: 0.15,
  },
  {
    index: 6,
    opacity: 0.25,
  },
  {
    index: 5,
    opacity: 0.3,
  },
  {
    index: 5,
    opacity: 0.45,
  },
  {
    index: 5,
    opacity: 0.65,
  },
  {
    index: 5,
    opacity: 0.85,
  },
  {
    index: 4,
    opacity: 0.9,
  },
  {
    index: 3,
    opacity: 0.95,
  },
  {
    index: 2,
    opacity: 0.97,
  },
  {
    index: 1,
    opacity: 0.98,
  },
]; // Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`

function toHsv(_ref) {
  var r = _ref.r,
    g = _ref.g,
    b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v,
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`

function toHex(_ref2) {
  var r = _ref2.r,
    g = _ref2.g,
    b = _ref2.b;
  return '#'.concat(rgbToHex(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.

function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b,
  };
  return rgb;
}

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light
      ? Math.round(hsv.h) - hueStep * i
      : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light
      ? Math.round(hsv.h) + hueStep * i
      : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正

  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间

  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate(color) {
  var opts =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(
      inputToRGB({
        h: getHue(hsv, i, true),
        s: getSaturation(hsv, i, true),
        v: getValue(hsv, i, true),
      }),
    );
    patterns.push(colorString);
  }

  patterns.push(toHex(pColor));

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);

    var _colorString = toHex(
      inputToRGB({
        h: getHue(_hsv, _i),
        s: getSaturation(_hsv, _i),
        v: getValue(_hsv, _i),
      }),
    );

    patterns.push(_colorString);
  } // dark theme patterns

  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
        opacity = _ref3.opacity;
      var darkColorString = toHex(
        mix(
          inputToRGB(opts.backgroundColor || '#141414'),
          inputToRGB(patterns[index]),
          opacity * 100,
        ),
      );
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666',
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414',
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});

var containers = []; // will store container HTMLElement references
var styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

var usage =
  'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';

function insertCss(css, options) {
  options = options || {};

  if (css === undefined) {
    throw new Error(usage);
  }

  var position = options.prepend === true ? 'prepend' : 'append';
  var container =
    options.container !== undefined
      ? options.container
      : document.querySelector('head');
  var containerId = containers.indexOf(container);

  // first time we see this container, create the necessary entries
  if (containerId === -1) {
    containerId = containers.push(container) - 1;
    styleElements[containerId] = {};
  }

  // try to get the correponding container + position styleElement, create it otherwise
  var styleElement;

  if (
    styleElements[containerId] !== undefined &&
    styleElements[containerId][position] !== undefined
  ) {
    styleElement = styleElements[containerId][position];
  } else {
    styleElement = styleElements[containerId][position] = createStyleElement();

    if (position === 'prepend') {
      container.insertBefore(styleElement, container.childNodes[0]);
    } else {
      container.appendChild(styleElement);
    }
  }

  // strip potential UTF-8 BOM if css was read from a file
  if (css.charCodeAt(0) === 0xfeff) {
    css = css.substr(1, css.length);
  }

  // actually add the stylesheet
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText += css;
  } else {
    styleElement.textContent += css;
  }

  return styleElement;
}
function createStyleElement() {
  var styleElement = document.createElement('style');
  styleElement.setAttribute('type', 'text/css');
  return styleElement;
}

var insertCss_1 = insertCss;
var insertCss_2 = insertCss;
insertCss_1.insertCss = insertCss_2;

function warning(valid, message) {
  warningOnce(valid, '[@ant-design/icons] '.concat(message));
}
function isIconDefinition(target) {
  return (
    _typeof(target) === 'object' &&
    typeof target.name === 'string' &&
    typeof target.theme === 'string' &&
    (_typeof(target.icon) === 'object' || typeof target.icon === 'function')
  );
}
function normalizeAttrs() {
  var attrs =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];

    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;

      default:
        acc[key] = val;
    }

    return acc;
  }, {});
}
function generate$1(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/ react.createElement(
      node.tag,
      _objectSpread2(
        {
          key: key,
        },
        normalizeAttrs(node.attrs),
      ),
      (node.children || []).map(function (child, index) {
        return generate$1(
          child,
          ''.concat(key, '-').concat(node.tag, '-').concat(index),
        );
      }),
    );
  }

  return /*#__PURE__*/ react.createElement(
    node.tag,
    _objectSpread2(
      _objectSpread2(
        {
          key: key,
        },
        normalizeAttrs(node.attrs),
      ),
      rootProps,
    ),
    (node.children || []).map(function (child, index) {
      return generate$1(
        child,
        ''.concat(key, '-').concat(node.tag, '-').concat(index),
      );
    }),
  );
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
var iconStyles =
  '\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n';
var cssInjectedFlag = false;
var useInsertStyles = function useInsertStyles() {
  var styleStr =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : iconStyles;
  react.useEffect(function () {
    if (!cssInjectedFlag) {
      insertCss_2(styleStr, {
        prepend: true,
      });
      cssInjectedFlag = true;
    }
  }, []);
};

var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false,
};

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
    secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor =
    secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return _objectSpread2({}, twoToneColorPalette);
}

var IconBase = function IconBase(props) {
  var icon = props.icon,
    className = props.className,
    onClick = props.onClick,
    style = props.style,
    primaryColor = props.primaryColor,
    secondaryColor = props.secondaryColor,
    restProps = _objectWithoutProperties(props, [
      'icon',
      'className',
      'onClick',
      'style',
      'primaryColor',
      'secondaryColor',
    ]);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor),
    };
  }

  useInsertStyles();
  warning(
    isIconDefinition(icon),
    'icon should be icon definiton, but got '.concat(icon),
  );

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = _objectSpread2(
      _objectSpread2({}, target),
      {},
      {
        icon: target.icon(colors.primaryColor, colors.secondaryColor),
      },
    );
  }

  return generate$1(
    target.icon,
    'svg-'.concat(target.name),
    _objectSpread2(
      {
        className: className,
        onClick: onClick,
        style: style,
        'data-icon': target.name,
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true',
      },
      restProps,
    ),
  );
};

IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];

  return IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
  });
}
function getTwoToneColor() {
  var colors = IconBase.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}

// should move it to antd main repo?

setTwoToneColor('#1890ff');
var Icon = /*#__PURE__*/ react.forwardRef(function (props, ref) {
  var _classNames;

  var className = props.className,
    icon = props.icon,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    twoToneColor = props.twoToneColor,
    restProps = _objectWithoutProperties(props, [
      'className',
      'icon',
      'spin',
      'rotate',
      'tabIndex',
      'onClick',
      'twoToneColor',
    ]);

  var _React$useContext = react.useContext(IconContext),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls =
      _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;

  var classString = classnames(
    prefixCls,
    ((_classNames = {}),
    _defineProperty(
      _classNames,
      ''.concat(prefixCls, '-').concat(icon.name),
      !!icon.name,
    ),
    _defineProperty(
      _classNames,
      ''.concat(prefixCls, '-spin'),
      !!spin || icon.name === 'loading',
    ),
    _classNames),
    className,
  );
  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate
    ? {
        msTransform: 'rotate('.concat(rotate, 'deg)'),
        transform: 'rotate('.concat(rotate, 'deg)'),
      }
    : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];

  return /*#__PURE__*/ react.createElement(
    'span',
    Object.assign(
      {
        role: 'img',
        'aria-label': icon.name,
      },
      restProps,
      {
        ref: ref,
        tabIndex: iconTabIndex,
        onClick: onClick,
        className: classString,
      },
    ),
    /*#__PURE__*/ react.createElement(IconBase, {
      icon: icon,
      primaryColor: primaryColor,
      secondaryColor: secondaryColor,
      style: svgStyle,
    }),
  );
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */

function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }

  return reactDom.findDOMNode(node);
}

function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (_typeof(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}
/**
 * Merge refs into one ref function to support ref passing.
 */

function composeRef() {
  for (
    var _len = arguments.length, refs = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    refs[_key] = arguments[_key];
  }

  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;

  var type = reactIs.isMemo(nodeOrComponent)
    ? nodeOrComponent.type.type
    : nodeOrComponent.type; // Function component node

  if (
    typeof type === 'function' &&
    !((_type$prototype = type.prototype) === null || _type$prototype === void 0
      ? void 0
      : _type$prototype.render)
  ) {
    return false;
  } // Class component

  if (
    typeof nodeOrComponent === 'function' &&
    !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null ||
    _nodeOrComponent$prot === void 0
      ? void 0
      : _nodeOrComponent$prot.render)
  ) {
    return false;
  }

  return true;
}
/* eslint-enable */

function canUseDom() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}

// Event wrapper. Copy from react source code

function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes['Webkit'.concat(styleProp)] = 'webkit'.concat(eventName);
  prefixes['Moz'.concat(styleProp)] = 'moz'.concat(eventName);
  prefixes['ms'.concat(styleProp)] = 'MS'.concat(eventName);
  prefixes['O'.concat(styleProp)] = 'o'.concat(eventName.toLowerCase());
  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd'),
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(
  canUseDom(),
  typeof window !== 'undefined' ? window : {},
);
var style = {};

if (canUseDom()) {
  var _document$createEleme = document.createElement('div');

  style = _document$createEleme.style;
}

var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;

    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];

      if (
        Object.prototype.hasOwnProperty.call(prefixMap, styleProp) &&
        styleProp in style
      ) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(
  internalAnimationEndName && internalTransitionEndName
);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;

  if (_typeof(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return ''.concat(transitionName, '-').concat(transitionType);
}

var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';

function useMountStatus(defaultValue) {
  var destroyRef = react.useRef(false);

  var _useState = react.useState(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    val = _useState2[0],
    setVal = _useState2[1];

  function setValue(next) {
    if (!destroyRef.current) {
      setVal(next);
    }
  }

  react.useEffect(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);
  return [val, setValue];
}

var useIsomorphicLayoutEffect = canUseDom()
  ? react.useLayoutEffect
  : react.useEffect;

var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};

var caf = function caf(num) {
  return clearTimeout(num);
};

if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };

  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}

function wrapperRaf(callback) {
  return raf(callback);
}
wrapperRaf.cancel = caf;

var useNextFrame = function () {
  var nextFrameRef = react.useRef(null);

  function cancelNextFrame() {
    wrapperRaf.cancel(nextFrameRef.current);
  }

  function nextFrame(callback) {
    var delay =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = wrapperRaf(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          },
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }

  react.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
};

var STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
/** Skip current step */

var SkipStep = false;
/** Current step should be update in */

var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
var useStepQueue = function (status, callback) {
  var _React$useState = react.useState(STEP_NONE),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    step = _React$useState2[0],
    setStep = _React$useState2[1];

  var _useNextFrame = useNextFrame(),
    _useNextFrame2 = _slicedToArray(_useNextFrame, 2),
    nextFrame = _useNextFrame2[0],
    cancelNextFrame = _useNextFrame2[1];

  function startQueue() {
    setStep(STEP_PREPARE);
  }

  useIsomorphicLayoutEffect(
    function () {
      if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
        var index = STEP_QUEUE.indexOf(step);
        var nextStep = STEP_QUEUE[index + 1];
        var result = callback(step);

        if (result === SkipStep) {
          // Skip when no needed
          setStep(nextStep);
        } else {
          // Do as frame for step update
          nextFrame(function (info) {
            function doNext() {
              // Skip since current queue is ood
              if (info.isCanceled()) return;
              setStep(nextStep);
            }

            if (result === true) {
              doNext();
            } else {
              // Only promise should be async
              Promise.resolve(result).then(doNext);
            }
          });
        }
      }
    },
    [status, step],
  );
  react.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
};

var useDomMotionEvents = function (callback) {
  var cacheElementRef = react.useRef(); // Cache callback

  var callbackRef = react.useRef(callback);
  callbackRef.current = callback; // Internal motion event handler

  var onInternalMotionEnd = react.useCallback(function (event) {
    callbackRef.current(event);
  }, []); // Remove events

  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  } // Patch events

  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }

    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd); // Save as cache in case dom removed trigger by `motionDeadline`

      cacheElementRef.current = element;
    }
  } // Clean up when removed

  react.useEffect(function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
};

function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
    motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
    _ref$motionAppear = _ref.motionAppear,
    motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
    _ref$motionLeave = _ref.motionLeave,
    motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
    motionDeadline = _ref.motionDeadline,
    motionLeaveImmediately = _ref.motionLeaveImmediately,
    onAppearPrepare = _ref.onAppearPrepare,
    onEnterPrepare = _ref.onEnterPrepare,
    onLeavePrepare = _ref.onLeavePrepare,
    onAppearStart = _ref.onAppearStart,
    onEnterStart = _ref.onEnterStart,
    onLeaveStart = _ref.onLeaveStart,
    onAppearActive = _ref.onAppearActive,
    onEnterActive = _ref.onEnterActive,
    onLeaveActive = _ref.onLeaveActive,
    onAppearEnd = _ref.onAppearEnd,
    onEnterEnd = _ref.onEnterEnd,
    onLeaveEnd = _ref.onLeaveEnd,
    onVisibleChanged = _ref.onVisibleChanged;

  // Used for outer render usage to avoid `visible: false & status: none` to render nothing
  var _useState = useMountStatus(),
    _useState2 = _slicedToArray(_useState, 2),
    asyncVisible = _useState2[0],
    setAsyncVisible = _useState2[1];

  var _useState3 = useMountStatus(STATUS_NONE),
    _useState4 = _slicedToArray(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1];

  var _useState5 = useMountStatus(null),
    _useState6 = _slicedToArray(_useState5, 2),
    style = _useState6[0],
    setStyle = _useState6[1];

  var mountedRef = react.useRef(false);
  var deadlineRef = react.useRef(null);
  var destroyedRef = react.useRef(false); // =========================== Dom Node ===========================

  var cacheElementRef = react.useRef(null);

  function getDomElement() {
    var element = getElement();
    return element || cacheElementRef.current;
  } // ========================== Motion End ==========================

  var activeRef = react.useRef(false);

  function onInternalMotionEnd(event) {
    var element = getDomElement();

    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }

    var canEnd;

    if (status === STATUS_APPEAR && activeRef.current) {
      canEnd =
        onAppearEnd === null || onAppearEnd === void 0
          ? void 0
          : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && activeRef.current) {
      canEnd =
        onEnterEnd === null || onEnterEnd === void 0
          ? void 0
          : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && activeRef.current) {
      canEnd =
        onLeaveEnd === null || onLeaveEnd === void 0
          ? void 0
          : onLeaveEnd(element, event);
    } // Only update status when `canEnd` and not destroyed

    if (canEnd !== false && !destroyedRef.current) {
      setStatus(STATUS_NONE);
      setStyle(null);
    }
  }

  var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd),
    _useDomMotionEvents2 = _slicedToArray(_useDomMotionEvents, 1),
    patchMotionEvents = _useDomMotionEvents2[0]; // ============================= Step =============================

  var eventHandlers = react.useMemo(
    function () {
      var _ref2, _ref3, _ref4;

      switch (status) {
        case 'appear':
          return (
            (_ref2 = {}),
            _defineProperty(_ref2, STEP_PREPARE, onAppearPrepare),
            _defineProperty(_ref2, STEP_START, onAppearStart),
            _defineProperty(_ref2, STEP_ACTIVE, onAppearActive),
            _ref2
          );

        case 'enter':
          return (
            (_ref3 = {}),
            _defineProperty(_ref3, STEP_PREPARE, onEnterPrepare),
            _defineProperty(_ref3, STEP_START, onEnterStart),
            _defineProperty(_ref3, STEP_ACTIVE, onEnterActive),
            _ref3
          );

        case 'leave':
          return (
            (_ref4 = {}),
            _defineProperty(_ref4, STEP_PREPARE, onLeavePrepare),
            _defineProperty(_ref4, STEP_START, onLeaveStart),
            _defineProperty(_ref4, STEP_ACTIVE, onLeaveActive),
            _ref4
          );

        default:
          return {};
      }
    },
    [status],
  );

  var _useStepQueue = useStepQueue(status, function (newStep) {
      // Only prepare step can be skip
      if (newStep === STEP_PREPARE) {
        var onPrepare = eventHandlers[STEP_PREPARE];

        if (!onPrepare) {
          return SkipStep;
        }

        return onPrepare(getDomElement());
      } // Rest step is sync update

      if (step in eventHandlers) {
        var _eventHandlers$step;

        setStyle(
          ((_eventHandlers$step = eventHandlers[step]) === null ||
          _eventHandlers$step === void 0
            ? void 0
            : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) ||
            null,
        );
      }

      if (step === STEP_ACTIVE) {
        // Patch events when motion needed
        patchMotionEvents(getDomElement());

        if (motionDeadline > 0) {
          clearTimeout(deadlineRef.current);
          deadlineRef.current = setTimeout(function () {
            onInternalMotionEnd({
              deadline: true,
            });
          }, motionDeadline);
        }
      }

      return DoStep;
    }),
    _useStepQueue2 = _slicedToArray(_useStepQueue, 2),
    startStep = _useStepQueue2[0],
    step = _useStepQueue2[1];

  var active = isActive(step);
  activeRef.current = active; // ============================ Status ============================
  // Update with new status

  useIsomorphicLayoutEffect(
    function () {
      setAsyncVisible(visible);

      if (!supportMotion) {
        return;
      }

      var isMounted = mountedRef.current;
      mountedRef.current = true;
      var nextStatus; // Appear

      if (!isMounted && visible && motionAppear) {
        nextStatus = STATUS_APPEAR;
      } // Enter

      if (isMounted && visible && motionEnter) {
        nextStatus = STATUS_ENTER;
      } // Leave

      if (
        (isMounted && !visible && motionLeave) ||
        (!isMounted && motionLeaveImmediately && !visible && motionLeave)
      ) {
        nextStatus = STATUS_LEAVE;
      } // Update to next status

      if (nextStatus) {
        setStatus(nextStatus);
        startStep();
      }
    },
    [visible],
  ); // ============================ Effect ============================
  // Reset when motion changed

  react.useEffect(
    function () {
      if (
        // Cancel appear
        (status === STATUS_APPEAR && !motionAppear) || // Cancel enter
        (status === STATUS_ENTER && !motionEnter) || // Cancel leave
        (status === STATUS_LEAVE && !motionLeave)
      ) {
        setStatus(STATUS_NONE);
      }
    },
    [motionAppear, motionEnter, motionLeave],
  );
  react.useEffect(function () {
    return function () {
      clearTimeout(deadlineRef.current);
      destroyedRef.current = true;
    };
  }, []); // Trigger `onVisibleChanged`

  react.useEffect(
    function () {
      if (asyncVisible !== undefined && status === STATUS_NONE) {
        onVisibleChanged === null || onVisibleChanged === void 0
          ? void 0
          : onVisibleChanged(asyncVisible);
      }
    },
    [asyncVisible, status],
  ); // ============================ Styles ============================

  var mergedStyle = style;

  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = _objectSpread2(
      {
        transition: 'none',
      },
      mergedStyle,
    );
  }

  return [
    status,
    step,
    mergedStyle,
    asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible,
  ];
}

var DomWrapper = /*#__PURE__*/ (function (_React$Component) {
  _inherits(DomWrapper, _React$Component);

  var _super = _createSuper(DomWrapper);

  function DomWrapper() {
    _classCallCheck(this, DomWrapper);

    return _super.apply(this, arguments);
  }

  _createClass(DomWrapper, [
    {
      key: 'render',
      value: function render() {
        return this.props.children;
      },
    },
  ]);

  return DomWrapper;
})(react.Component);

/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */

function genCSSMotion(config) {
  var transitionSupport = config;

  if (_typeof(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }

  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }

  var CSSMotion = /*#__PURE__*/ react.forwardRef(function (props, ref) {
    var _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      _props$removeOnLeave = props.removeOnLeave,
      removeOnLeave =
        _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
      forceRender = props.forceRender,
      children = props.children,
      motionName = props.motionName,
      leavedClassName = props.leavedClassName,
      eventProps = props.eventProps;
    var supportMotion = isSupportTransition(props); // Ref to the react node, it may be a HTMLElement

    var nodeRef = react.useRef(); // Ref to the dom wrapper in case ref can not pass to HTMLElement

    var wrapperNodeRef = react.useRef();

    function getDomElement() {
      try {
        return findDOMNode(nodeRef.current || wrapperNodeRef.current);
      } catch (e) {
        // Only happen when `motionDeadline` trigger but element removed.
        return null;
      }
    }

    var _useStatus = useStatus(supportMotion, visible, getDomElement, props),
      _useStatus2 = _slicedToArray(_useStatus, 4),
      status = _useStatus2[0],
      statusStep = _useStatus2[1],
      statusStyle = _useStatus2[2],
      mergedVisible = _useStatus2[3]; // ====================== Refs ======================

    var originRef = react.useRef(ref);
    originRef.current = ref;
    var setNodeRef = react.useCallback(function (node) {
      nodeRef.current = node;
      fillRef(originRef.current, node);
    }, []); // ===================== Render =====================

    var motionChildren;

    var mergedProps = _objectSpread2(
      _objectSpread2({}, eventProps),
      {},
      {
        visible: visible,
      },
    );

    if (!children) {
      // No children
      motionChildren = null;
    } else if (status === STATUS_NONE || !isSupportTransition(props)) {
      // Stable children
      if (mergedVisible) {
        motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave) {
        motionChildren = children(
          _objectSpread2(
            _objectSpread2({}, mergedProps),
            {},
            {
              className: leavedClassName,
            },
          ),
          setNodeRef,
        );
      } else if (forceRender) {
        motionChildren = children(
          _objectSpread2(
            _objectSpread2({}, mergedProps),
            {},
            {
              style: {
                display: 'none',
              },
            },
          ),
          setNodeRef,
        );
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames;

      // In motion
      var statusSuffix;

      if (statusStep === STEP_PREPARE) {
        statusSuffix = 'prepare';
      } else if (isActive(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === STEP_START) {
        statusSuffix = 'start';
      }

      motionChildren = children(
        _objectSpread2(
          _objectSpread2({}, mergedProps),
          {},
          {
            className: classnames(
              getTransitionName(motionName, status),
              ((_classNames = {}),
              _defineProperty(
                _classNames,
                getTransitionName(
                  motionName,
                  ''.concat(status, '-').concat(statusSuffix),
                ),
                statusSuffix,
              ),
              _defineProperty(
                _classNames,
                motionName,
                typeof motionName === 'string',
              ),
              _classNames),
            ),
            style: statusStyle,
          },
        ),
        setNodeRef,
      );
    }

    return /*#__PURE__*/ react.createElement(
      DomWrapper,
      {
        ref: wrapperNodeRef,
      },
      motionChildren,
    );
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
var CSSMotion = genCSSMotion(supportTransition);

export {
  CSSMotion as C,
  Icon as I,
  canUseDom as a,
  composeRef as c,
  findDOMNode as f,
  supportRef as s,
  wrapperRaf as w,
};
