"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKey = getKey;
exports.getKeycode = getKeycode;
exports.getKeysym = getKeysym;
var _keysym = _interopRequireDefault(require("./keysym.js"));
var _keysymdef = _interopRequireDefault(require("./keysymdef.js"));
var _vkeys = _interopRequireDefault(require("./vkeys.js"));
var _fixedkeys = _interopRequireDefault(require("./fixedkeys.js"));
var _domkeytable = _interopRequireDefault(require("./domkeytable.js"));
var browser = _interopRequireWildcard(require("../util/browser.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Get 'KeyboardEvent.code', handling legacy browsers
function getKeycode(evt) {
  // Are we getting proper key identifiers?
  // (unfortunately Firefox and Chrome are crappy here and gives
  // us an empty string on some platforms, rather than leaving it
  // undefined)
  if (evt.code) {
    // Mozilla isn't fully in sync with the spec yet
    switch (evt.code) {
      case 'OSLeft':
        return 'MetaLeft';
      case 'OSRight':
        return 'MetaRight';
    }
    return evt.code;
  }

  // The de-facto standard is to use Windows Virtual-Key codes
  // in the 'keyCode' field for non-printable characters
  if (evt.keyCode in _vkeys["default"]) {
    var code = _vkeys["default"][evt.keyCode];

    // macOS has messed up this code for some reason
    if (browser.isMac() && code === 'ContextMenu') {
      code = 'MetaRight';
    }

    // The keyCode doesn't distinguish between left and right
    // for the standard modifiers
    if (evt.location === 2) {
      switch (code) {
        case 'ShiftLeft':
          return 'ShiftRight';
        case 'ControlLeft':
          return 'ControlRight';
        case 'AltLeft':
          return 'AltRight';
      }
    }

    // Nor a bunch of the numpad keys
    if (evt.location === 3) {
      switch (code) {
        case 'Delete':
          return 'NumpadDecimal';
        case 'Insert':
          return 'Numpad0';
        case 'End':
          return 'Numpad1';
        case 'ArrowDown':
          return 'Numpad2';
        case 'PageDown':
          return 'Numpad3';
        case 'ArrowLeft':
          return 'Numpad4';
        case 'ArrowRight':
          return 'Numpad6';
        case 'Home':
          return 'Numpad7';
        case 'ArrowUp':
          return 'Numpad8';
        case 'PageUp':
          return 'Numpad9';
        case 'Enter':
          return 'NumpadEnter';
      }
    }
    return code;
  }
  return 'Unidentified';
}

// Get 'KeyboardEvent.key', handling legacy browsers
function getKey(evt) {
  // Are we getting a proper key value?
  if (evt.key !== undefined && evt.key !== 'Unidentified') {
    // Mozilla isn't fully in sync with the spec yet
    switch (evt.key) {
      case 'OS':
        return 'Meta';
      case 'LaunchMyComputer':
        return 'LaunchApplication1';
      case 'LaunchCalculator':
        return 'LaunchApplication2';
    }

    // iOS leaks some OS names
    switch (evt.key) {
      case 'UIKeyInputUpArrow':
        return 'ArrowUp';
      case 'UIKeyInputDownArrow':
        return 'ArrowDown';
      case 'UIKeyInputLeftArrow':
        return 'ArrowLeft';
      case 'UIKeyInputRightArrow':
        return 'ArrowRight';
      case 'UIKeyInputEscape':
        return 'Escape';
    }

    // Broken behaviour in Chrome
    if (evt.key === '\x00' && evt.code === 'NumpadDecimal') {
      return 'Delete';
    }
    return evt.key;
  }

  // Try to deduce it based on the physical key
  var code = getKeycode(evt);
  if (code in _fixedkeys["default"]) {
    return _fixedkeys["default"][code];
  }

  // If that failed, then see if we have a printable character
  if (evt.charCode) {
    return String.fromCharCode(evt.charCode);
  }

  // At this point we have nothing left to go on
  return 'Unidentified';
}

// Get the most reliable keysym value we can get from a key event
function getKeysym(evt) {
  var key = getKey(evt);
  if (key === 'Unidentified') {
    return null;
  }

  // First look up special keys
  if (key in _domkeytable["default"]) {
    var location = evt.location;

    // Safari screws up location for the right cmd key
    if (key === 'Meta' && location === 0) {
      location = 2;
    }

    // And for Clear
    if (key === 'Clear' && location === 3) {
      var code = getKeycode(evt);
      if (code === 'NumLock') {
        location = 0;
      }
    }
    if (location === undefined || location > 3) {
      location = 0;
    }

    // The original Meta key now gets confused with the Windows key
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1020141
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1232918
    if (key === 'Meta') {
      var _code = getKeycode(evt);
      if (_code === 'AltLeft') {
        return _keysym["default"].XK_Meta_L;
      } else if (_code === 'AltRight') {
        return _keysym["default"].XK_Meta_R;
      }
    }

    // macOS has Clear instead of NumLock, but the remote system is
    // probably not macOS, so lying here is probably best...
    if (key === 'Clear') {
      var _code2 = getKeycode(evt);
      if (_code2 === 'NumLock') {
        return _keysym["default"].XK_Num_Lock;
      }
    }

    // Windows sends alternating symbols for some keys when using a
    // Japanese layout. We have no way of synchronising with the IM
    // running on the remote system, so we send some combined keysym
    // instead and hope for the best.
    if (browser.isWindows()) {
      switch (key) {
        case 'Zenkaku':
        case 'Hankaku':
          return _keysym["default"].XK_Zenkaku_Hankaku;
        case 'Romaji':
        case 'KanaMode':
          return _keysym["default"].XK_Romaji;
      }
    }
    return _domkeytable["default"][key][location];
  }

  // Now we need to look at the Unicode symbol instead

  // Special key? (FIXME: Should have been caught earlier)
  if (key.length !== 1) {
    return null;
  }
  var codepoint = key.charCodeAt();
  if (codepoint) {
    return _keysymdef["default"].lookup(codepoint);
  }
  return null;
}