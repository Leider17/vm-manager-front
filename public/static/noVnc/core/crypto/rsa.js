"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RSACipher = void 0;
var _base = _interopRequireDefault(require("../base64.js"));
var _bigint = require("./bigint.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var RSACipher = exports.RSACipher = /*#__PURE__*/function () {
  function RSACipher() {
    _classCallCheck(this, RSACipher);
    this._keyLength = 0;
    this._keyBytes = 0;
    this._n = null;
    this._e = null;
    this._d = null;
    this._nBigInt = null;
    this._eBigInt = null;
    this._dBigInt = null;
    this._extractable = false;
  }
  return _createClass(RSACipher, [{
    key: "algorithm",
    get: function get() {
      return {
        name: "RSA-PKCS1-v1_5"
      };
    }
  }, {
    key: "_base64urlDecode",
    value: function _base64urlDecode(data) {
      data = data.replace(/-/g, "+").replace(/_/g, "/");
      data = data.padEnd(Math.ceil(data.length / 4) * 4, "=");
      return _base["default"].decode(data);
    }
  }, {
    key: "_padArray",
    value: function _padArray(arr, length) {
      var res = new Uint8Array(length);
      res.set(arr, length - arr.length);
      return res;
    }
  }, {
    key: "_generateKey",
    value: function () {
      var _generateKey2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(algorithm, extractable) {
        var key, privateKey;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              this._keyLength = algorithm.modulusLength;
              this._keyBytes = Math.ceil(this._keyLength / 8);
              _context.n = 1;
              return window.crypto.subtle.generateKey({
                name: "RSA-OAEP",
                modulusLength: algorithm.modulusLength,
                publicExponent: algorithm.publicExponent,
                hash: {
                  name: "SHA-256"
                }
              }, true, ["encrypt", "decrypt"]);
            case 1:
              key = _context.v;
              _context.n = 2;
              return window.crypto.subtle.exportKey("jwk", key.privateKey);
            case 2:
              privateKey = _context.v;
              this._n = this._padArray(this._base64urlDecode(privateKey.n), this._keyBytes);
              this._nBigInt = (0, _bigint.u8ArrayToBigInt)(this._n);
              this._e = this._padArray(this._base64urlDecode(privateKey.e), this._keyBytes);
              this._eBigInt = (0, _bigint.u8ArrayToBigInt)(this._e);
              this._d = this._padArray(this._base64urlDecode(privateKey.d), this._keyBytes);
              this._dBigInt = (0, _bigint.u8ArrayToBigInt)(this._d);
              this._extractable = extractable;
            case 3:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function _generateKey(_x, _x2) {
        return _generateKey2.apply(this, arguments);
      }
      return _generateKey;
    }()
  }, {
    key: "_importKey",
    value: function () {
      var _importKey2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(key, extractable) {
        var n, e;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              n = key.n;
              e = key.e;
              if (!(n.length !== e.length)) {
                _context2.n = 1;
                break;
              }
              throw new Error("the sizes of modulus and public exponent do not match");
            case 1:
              this._keyBytes = n.length;
              this._keyLength = this._keyBytes * 8;
              this._n = new Uint8Array(this._keyBytes);
              this._e = new Uint8Array(this._keyBytes);
              this._n.set(n);
              this._e.set(e);
              this._nBigInt = (0, _bigint.u8ArrayToBigInt)(this._n);
              this._eBigInt = (0, _bigint.u8ArrayToBigInt)(this._e);
              this._extractable = extractable;
            case 2:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function _importKey(_x3, _x4) {
        return _importKey2.apply(this, arguments);
      }
      return _importKey;
    }()
  }, {
    key: "encrypt",
    value: function () {
      var _encrypt = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(_algorithm, message) {
        var ps, i, em, emBigInt, c;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (!(message.length > this._keyBytes - 11)) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2, null);
            case 1:
              ps = new Uint8Array(this._keyBytes - message.length - 3);
              window.crypto.getRandomValues(ps);
              for (i = 0; i < ps.length; i++) {
                ps[i] = Math.floor(ps[i] * 254 / 255 + 1);
              }
              em = new Uint8Array(this._keyBytes);
              em[1] = 0x02;
              em.set(ps, 2);
              em.set(message, ps.length + 3);
              emBigInt = (0, _bigint.u8ArrayToBigInt)(em);
              c = (0, _bigint.modPow)(emBigInt, this._eBigInt, this._nBigInt);
              return _context3.a(2, (0, _bigint.bigIntToU8Array)(c, this._keyBytes));
          }
        }, _callee3, this);
      }));
      function encrypt(_x5, _x6) {
        return _encrypt.apply(this, arguments);
      }
      return encrypt;
    }()
  }, {
    key: "decrypt",
    value: function () {
      var _decrypt = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(_algorithm, message) {
        var msgBigInt, emBigInt, em, i;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (!(message.length !== this._keyBytes)) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2, null);
            case 1:
              msgBigInt = (0, _bigint.u8ArrayToBigInt)(message);
              emBigInt = (0, _bigint.modPow)(msgBigInt, this._dBigInt, this._nBigInt);
              em = (0, _bigint.bigIntToU8Array)(emBigInt, this._keyBytes);
              if (!(em[0] !== 0x00 || em[1] !== 0x02)) {
                _context4.n = 2;
                break;
              }
              return _context4.a(2, null);
            case 2:
              i = 2;
            case 3:
              if (!(i < em.length)) {
                _context4.n = 5;
                break;
              }
              if (!(em[i] === 0x00)) {
                _context4.n = 4;
                break;
              }
              return _context4.a(3, 5);
            case 4:
              i++;
              _context4.n = 3;
              break;
            case 5:
              if (!(i === em.length)) {
                _context4.n = 6;
                break;
              }
              return _context4.a(2, null);
            case 6:
              return _context4.a(2, em.slice(i + 1, em.length));
          }
        }, _callee4, this);
      }));
      function decrypt(_x7, _x8) {
        return _decrypt.apply(this, arguments);
      }
      return decrypt;
    }()
  }, {
    key: "exportKey",
    value: function () {
      var _exportKey = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              if (this._extractable) {
                _context5.n = 1;
                break;
              }
              throw new Error("key is not extractable");
            case 1:
              return _context5.a(2, {
                n: this._n,
                e: this._e,
                d: this._d
              });
          }
        }, _callee5, this);
      }));
      function exportKey() {
        return _exportKey.apply(this, arguments);
      }
      return exportKey;
    }()
  }], [{
    key: "generateKey",
    value: function () {
      var _generateKey3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(algorithm, extractable, _keyUsages) {
        var cipher;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              cipher = new RSACipher();
              _context6.n = 1;
              return cipher._generateKey(algorithm, extractable);
            case 1:
              return _context6.a(2, {
                privateKey: cipher
              });
          }
        }, _callee6);
      }));
      function generateKey(_x9, _x0, _x1) {
        return _generateKey3.apply(this, arguments);
      }
      return generateKey;
    }()
  }, {
    key: "importKey",
    value: function () {
      var _importKey3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(key, _algorithm, extractable, keyUsages) {
        var cipher;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              if (!(keyUsages.length !== 1 || keyUsages[0] !== "encrypt")) {
                _context7.n = 1;
                break;
              }
              throw new Error("only support importing RSA public key");
            case 1:
              cipher = new RSACipher();
              _context7.n = 2;
              return cipher._importKey(key, extractable);
            case 2:
              return _context7.a(2, cipher);
          }
        }, _callee7);
      }));
      function importKey(_x10, _x11, _x12, _x13) {
        return _importKey3.apply(this, arguments);
      }
      return importKey;
    }()
  }]);
}();