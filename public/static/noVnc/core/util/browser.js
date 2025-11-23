"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasScrollbarGutter = exports.dragThreshold = void 0;
exports.isAndroid = isAndroid;
exports.isBlink = isBlink;
exports.isChrome = isChrome;
exports.isChromeOS = isChromeOS;
exports.isChromium = isChromium;
exports.isEdge = isEdge;
exports.isFirefox = isFirefox;
exports.isGecko = isGecko;
exports.isIOS = isIOS;
exports.isMac = isMac;
exports.isOpera = isOpera;
exports.isSafari = isSafari;
exports.isTouchDevice = void 0;
exports.isWebKit = isWebKit;
exports.isWindows = isWindows;
exports.supportsWebCodecsH264Decode = exports.supportsCursorURIs = void 0;
var Log = _interopRequireWildcard(require("./logging.js"));
var _base = _interopRequireDefault(require("../base64.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } /*
 * noVNC: HTML5 VNC client
 * Copyright (C) 2019 The noVNC authors
 * Licensed under MPL 2.0 (see LICENSE.txt)
 *
 * See README.md for usage and integration instructions.
 *
 * Browser feature support detection
 */
// Touch detection
var isTouchDevice = exports.isTouchDevice = 'ontouchstart' in document.documentElement ||
// required for Chrome debugger
document.ontouchstart !== undefined ||
// required for MS Surface
navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
window.addEventListener('touchstart', function onFirstTouch() {
  exports.isTouchDevice = isTouchDevice = true;
  window.removeEventListener('touchstart', onFirstTouch, false);
}, false);

// The goal is to find a certain physical width, the devicePixelRatio
// brings us a bit closer but is not optimal.
var dragThreshold = exports.dragThreshold = 10 * (window.devicePixelRatio || 1);
var _supportsCursorURIs = false;
try {
  var target = document.createElement('canvas');
  target.style.cursor = 'url("data:image/x-icon;base64,AAACAAEACAgAAAIAAgA4AQAAFgAAACgAAAAIAAAAEAAAAAEAIAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAA==") 2 2, default';
  if (target.style.cursor.indexOf("url") === 0) {
    Log.Info("Data URI scheme cursor supported");
    _supportsCursorURIs = true;
  } else {
    Log.Warn("Data URI scheme cursor not supported");
  }
} catch (exc) {
  Log.Error("Data URI scheme cursor test exception: " + exc);
}
var supportsCursorURIs = exports.supportsCursorURIs = _supportsCursorURIs;
var _hasScrollbarGutter = true;
try {
  // Create invisible container
  var container = document.createElement('div');
  container.style.visibility = 'hidden';
  container.style.overflow = 'scroll'; // forcing scrollbars
  document.body.appendChild(container);

  // Create a div and place it in the container
  var child = document.createElement('div');
  container.appendChild(child);

  // Calculate the difference between the container's full width
  // and the child's width - the difference is the scrollbars
  var scrollbarWidth = container.offsetWidth - child.offsetWidth;

  // Clean up
  container.parentNode.removeChild(container);
  _hasScrollbarGutter = scrollbarWidth != 0;
} catch (exc) {
  Log.Error("Scrollbar test exception: " + exc);
}
var hasScrollbarGutter = exports.hasScrollbarGutter = _hasScrollbarGutter;
var supportsWebCodecsH264Decode = exports.supportsWebCodecsH264Decode = false;
function _checkWebCodecsH264DecodeSupport() {
  return _checkWebCodecsH264DecodeSupport2.apply(this, arguments);
}
function _checkWebCodecsH264DecodeSupport2() {
  _checkWebCodecsH264DecodeSupport2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var config, support, data, gotframe, _error, decoder, chunk, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          if ('VideoDecoder' in window) {
            _context.n = 1;
            break;
          }
          return _context.a(2, false);
        case 1:
          // We'll need to make do with some placeholders here
          config = {
            codec: 'avc1.42401f',
            codedWidth: 1920,
            codedHeight: 1080,
            optimizeForLatency: true
          };
          _context.n = 2;
          return VideoDecoder.isConfigSupported(config);
        case 2:
          support = _context.v;
          if (support.supported) {
            _context.n = 3;
            break;
          }
          return _context.a(2, false);
        case 3:
          // Firefox incorrectly reports supports for H.264 under some
          // circumstances, so we need to actually test a real frame
          // https://bugzilla.mozilla.org/show_bug.cgi?id=1932392
          data = new Uint8Array(_base["default"].decode('AAAAAWdCwBTZnpuAgICgAAADACAAAAZB4oVNAAAAAWjJYyyAAAABBgX//4Hc' + 'Rem95tlIt5Ys2CDZI+7veDI2NCAtIGNvcmUgMTY0IHIzMTA4IDMxZTE5Zjkg' + 'LSBILjI2NC9NUEVHLTQgQVZDIGNvZGVjIC0gQ29weWxlZnQgMjAwMy0yMDIz' + 'IC0gaHR0cDovL3d3dy52aWRlb2xhbi5vcmcveDI2NC5odG1sIC0gb3B0aW9u' + 'czogY2FiYWM9MCByZWY9NSBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgxOjB4' + 'MTExIG1lPWhleCBzdWJtZT04IHBzeT0xIHBzeV9yZD0xLjAwOjAuMDAgbWl4' + 'ZWRfcmVmPTEgbWVfcmFuZ2U9MTYgY2hyb21hX21lPTEgdHJlbGxpcz0yIDh4' + 'OGRjdD0wIGNxbT0wIGRlYWR6b25lPTIxLDExIGZhc3RfcHNraXA9MSBjaHJv' + 'bWFfcXBfb2Zmc2V0PS0yIHRocmVhZHM9MSBsb29rYWhlYWRfdGhyZWFkcz0x' + 'IHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9' + 'MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVz' + 'PTAgd2VpZ2h0cD0wIGtleWludD1pbmZpbml0ZSBrZXlpbnRfbWluPTI1IHNj' + 'ZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NTAgcmM9' + 'YWJyIG1idHJlZT0xIGJpdHJhdGU9NDAwIHJhdGV0b2w9MS4wIHFjb21wPTAu' + 'NjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFx' + 'PTE6MS4wMACAAAABZYiEBrxmKAAPVccAAS044AA5DRJMnkycJk4TPw=='));
          gotframe = false;
          _error = null;
          decoder = new VideoDecoder({
            output: function output(frame) {
              gotframe = true;
            },
            error: function error(e) {
              _error = e;
            }
          });
          chunk = new EncodedVideoChunk({
            timestamp: 0,
            type: 'key',
            data: data
          });
          decoder.configure(config);
          decoder.decode(chunk);
          _context.p = 4;
          _context.n = 5;
          return decoder.flush();
        case 5:
          _context.n = 7;
          break;
        case 6:
          _context.p = 6;
          _t = _context.v;
          // Firefox incorrectly throws an exception here
          // https://bugzilla.mozilla.org/show_bug.cgi?id=1932566
          _error = _t;
        case 7:
          if (gotframe) {
            _context.n = 8;
            break;
          }
          return _context.a(2, false);
        case 8:
          if (!(_error !== null)) {
            _context.n = 9;
            break;
          }
          return _context.a(2, false);
        case 9:
          return _context.a(2, true);
      }
    }, _callee, null, [[4, 6]]);
  }));
  return _checkWebCodecsH264DecodeSupport2.apply(this, arguments);
}
exports.supportsWebCodecsH264Decode = supportsWebCodecsH264Decode = await _checkWebCodecsH264DecodeSupport();

/*
 * The functions for detection of platforms and browsers below are exported
 * but the use of these should be minimized as much as possible.
 *
 * It's better to use feature detection than platform detection.
 */

/* OS */

function isMac() {
  return !!/mac/i.exec(navigator.platform);
}
function isWindows() {
  return !!/win/i.exec(navigator.platform);
}
function isIOS() {
  return !!/ipad/i.exec(navigator.platform) || !!/iphone/i.exec(navigator.platform) || !!/ipod/i.exec(navigator.platform);
}
function isAndroid() {
  /* Android sets navigator.platform to Linux :/ */
  return !!navigator.userAgent.match('Android ');
}
function isChromeOS() {
  /* ChromeOS sets navigator.platform to Linux :/ */
  return !!navigator.userAgent.match(' CrOS ');
}

/* Browser */

function isSafari() {
  return !!navigator.userAgent.match('Safari/...') && !navigator.userAgent.match('Chrome/...') && !navigator.userAgent.match('Chromium/...') && !navigator.userAgent.match('Epiphany/...');
}
function isFirefox() {
  return !!navigator.userAgent.match('Firefox/...') && !navigator.userAgent.match('Seamonkey/...');
}
function isChrome() {
  return !!navigator.userAgent.match('Chrome/...') && !navigator.userAgent.match('Chromium/...') && !navigator.userAgent.match('Edg/...') && !navigator.userAgent.match('OPR/...');
}
function isChromium() {
  return !!navigator.userAgent.match('Chromium/...');
}
function isOpera() {
  return !!navigator.userAgent.match('OPR/...');
}
function isEdge() {
  return !!navigator.userAgent.match('Edg/...');
}

/* Engine */

function isGecko() {
  return !!navigator.userAgent.match('Gecko/...');
}
function isWebKit() {
  return !!navigator.userAgent.match('AppleWebKit/...') && !navigator.userAgent.match('Chrome/...');
}
function isBlink() {
  return !!navigator.userAgent.match('Chrome/...');
}