"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AESECBCipher = exports.AESEAXCipher = void 0;
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
var AESECBCipher = exports.AESECBCipher = /*#__PURE__*/function () {
  function AESECBCipher() {
    _classCallCheck(this, AESECBCipher);
    this._key = null;
  }
  return _createClass(AESECBCipher, [{
    key: "algorithm",
    get: function get() {
      return {
        name: "AES-ECB"
      };
    }
  }, {
    key: "_importKey",
    value: function () {
      var _importKey2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(key, extractable, keyUsages) {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return window.crypto.subtle.importKey("raw", key, {
                name: "AES-CBC"
              }, extractable, keyUsages);
            case 1:
              this._key = _context.v;
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function _importKey(_x, _x2, _x3) {
        return _importKey2.apply(this, arguments);
      }
      return _importKey;
    }()
  }, {
    key: "encrypt",
    value: function () {
      var _encrypt = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(_algorithm, plaintext) {
        var x, n, i, y, _t, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              x = new Uint8Array(plaintext);
              if (!(x.length % 16 !== 0 || this._key === null)) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2, null);
            case 1:
              n = x.length / 16;
              i = 0;
            case 2:
              if (!(i < n)) {
                _context2.n = 5;
                break;
              }
              _t = Uint8Array;
              _context2.n = 3;
              return window.crypto.subtle.encrypt({
                name: "AES-CBC",
                iv: new Uint8Array(16)
              }, this._key, x.slice(i * 16, i * 16 + 16));
            case 3:
              _t2 = _context2.v;
              y = new _t(_t2).slice(0, 16);
              x.set(y, i * 16);
            case 4:
              i++;
              _context2.n = 2;
              break;
            case 5:
              return _context2.a(2, x);
          }
        }, _callee2, this);
      }));
      function encrypt(_x4, _x5) {
        return _encrypt.apply(this, arguments);
      }
      return encrypt;
    }()
  }], [{
    key: "importKey",
    value: function () {
      var _importKey3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(key, _algorithm, extractable, keyUsages) {
        var cipher;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              cipher = new AESECBCipher();
              _context3.n = 1;
              return cipher._importKey(key, extractable, keyUsages);
            case 1:
              return _context3.a(2, cipher);
          }
        }, _callee3);
      }));
      function importKey(_x6, _x7, _x8, _x9) {
        return _importKey3.apply(this, arguments);
      }
      return importKey;
    }()
  }]);
}();
var AESEAXCipher = exports.AESEAXCipher = /*#__PURE__*/function () {
  function AESEAXCipher() {
    _classCallCheck(this, AESEAXCipher);
    this._rawKey = null;
    this._ctrKey = null;
    this._cbcKey = null;
    this._zeroBlock = new Uint8Array(16);
    this._prefixBlock0 = this._zeroBlock;
    this._prefixBlock1 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    this._prefixBlock2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]);
  }
  return _createClass(AESEAXCipher, [{
    key: "algorithm",
    get: function get() {
      return {
        name: "AES-EAX"
      };
    }
  }, {
    key: "_encryptBlock",
    value: function () {
      var _encryptBlock2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(block) {
        var encrypted;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return window.crypto.subtle.encrypt({
                name: "AES-CBC",
                iv: this._zeroBlock
              }, this._cbcKey, block);
            case 1:
              encrypted = _context4.v;
              return _context4.a(2, new Uint8Array(encrypted).slice(0, 16));
          }
        }, _callee4, this);
      }));
      function _encryptBlock(_x0) {
        return _encryptBlock2.apply(this, arguments);
      }
      return _encryptBlock;
    }()
  }, {
    key: "_initCMAC",
    value: function () {
      var _initCMAC2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var k1, k2, v, i, lut;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return this._encryptBlock(this._zeroBlock);
            case 1:
              k1 = _context5.v;
              k2 = new Uint8Array(16);
              v = k1[0] >>> 6;
              for (i = 0; i < 15; i++) {
                k2[i] = k1[i + 1] >> 6 | k1[i] << 2;
                k1[i] = k1[i + 1] >> 7 | k1[i] << 1;
              }
              lut = [0x0, 0x87, 0x0e, 0x89];
              k2[14] ^= v >>> 1;
              k2[15] = k1[15] << 2 ^ lut[v];
              k1[15] = k1[15] << 1 ^ lut[v >> 1];
              this._k1 = k1;
              this._k2 = k2;
            case 2:
              return _context5.a(2);
          }
        }, _callee5, this);
      }));
      function _initCMAC() {
        return _initCMAC2.apply(this, arguments);
      }
      return _initCMAC;
    }()
  }, {
    key: "_encryptCTR",
    value: function () {
      var _encryptCTR2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(data, counter) {
        var encrypted;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.n = 1;
              return window.crypto.subtle.encrypt({
                name: "AES-CTR",
                counter: counter,
                length: 128
              }, this._ctrKey, data);
            case 1:
              encrypted = _context6.v;
              return _context6.a(2, new Uint8Array(encrypted));
          }
        }, _callee6, this);
      }));
      function _encryptCTR(_x1, _x10) {
        return _encryptCTR2.apply(this, arguments);
      }
      return _encryptCTR;
    }()
  }, {
    key: "_decryptCTR",
    value: function () {
      var _decryptCTR2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(data, counter) {
        var decrypted;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.n = 1;
              return window.crypto.subtle.decrypt({
                name: "AES-CTR",
                counter: counter,
                length: 128
              }, this._ctrKey, data);
            case 1:
              decrypted = _context7.v;
              return _context7.a(2, new Uint8Array(decrypted));
          }
        }, _callee7, this);
      }));
      function _decryptCTR(_x11, _x12) {
        return _decryptCTR2.apply(this, arguments);
      }
      return _decryptCTR;
    }()
  }, {
    key: "_computeCMAC",
    value: function () {
      var _computeCMAC2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(data, prefixBlock) {
        var n, m, r, cbcData, i, _i, cbcEncrypted, mac;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              if (!(prefixBlock.length !== 16)) {
                _context8.n = 1;
                break;
              }
              return _context8.a(2, null);
            case 1:
              n = Math.floor(data.length / 16);
              m = Math.ceil(data.length / 16);
              r = data.length - n * 16;
              cbcData = new Uint8Array((m + 1) * 16);
              cbcData.set(prefixBlock);
              cbcData.set(data, 16);
              if (r === 0) {
                for (i = 0; i < 16; i++) {
                  cbcData[n * 16 + i] ^= this._k1[i];
                }
              } else {
                cbcData[(n + 1) * 16 + r] = 0x80;
                for (_i = 0; _i < 16; _i++) {
                  cbcData[(n + 1) * 16 + _i] ^= this._k2[_i];
                }
              }
              _context8.n = 2;
              return window.crypto.subtle.encrypt({
                name: "AES-CBC",
                iv: this._zeroBlock
              }, this._cbcKey, cbcData);
            case 2:
              cbcEncrypted = _context8.v;
              cbcEncrypted = new Uint8Array(cbcEncrypted);
              mac = cbcEncrypted.slice(cbcEncrypted.length - 32, cbcEncrypted.length - 16);
              return _context8.a(2, mac);
          }
        }, _callee8, this);
      }));
      function _computeCMAC(_x13, _x14) {
        return _computeCMAC2.apply(this, arguments);
      }
      return _computeCMAC;
    }()
  }, {
    key: "_importKey",
    value: function () {
      var _importKey4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(key) {
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              this._rawKey = key;
              _context9.n = 1;
              return window.crypto.subtle.importKey("raw", key, {
                name: "AES-CTR"
              }, false, ["encrypt", "decrypt"]);
            case 1:
              this._ctrKey = _context9.v;
              _context9.n = 2;
              return window.crypto.subtle.importKey("raw", key, {
                name: "AES-CBC"
              }, false, ["encrypt"]);
            case 2:
              this._cbcKey = _context9.v;
              _context9.n = 3;
              return this._initCMAC();
            case 3:
              return _context9.a(2);
          }
        }, _callee9, this);
      }));
      function _importKey(_x15) {
        return _importKey4.apply(this, arguments);
      }
      return _importKey;
    }()
  }, {
    key: "encrypt",
    value: function () {
      var _encrypt2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(algorithm, message) {
        var ad, nonce, nCMAC, encrypted, adCMAC, mac, i, res;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              ad = algorithm.additionalData;
              nonce = algorithm.iv;
              _context0.n = 1;
              return this._computeCMAC(nonce, this._prefixBlock0);
            case 1:
              nCMAC = _context0.v;
              _context0.n = 2;
              return this._encryptCTR(message, nCMAC);
            case 2:
              encrypted = _context0.v;
              _context0.n = 3;
              return this._computeCMAC(ad, this._prefixBlock1);
            case 3:
              adCMAC = _context0.v;
              _context0.n = 4;
              return this._computeCMAC(encrypted, this._prefixBlock2);
            case 4:
              mac = _context0.v;
              for (i = 0; i < 16; i++) {
                mac[i] ^= nCMAC[i] ^ adCMAC[i];
              }
              res = new Uint8Array(16 + encrypted.length);
              res.set(encrypted);
              res.set(mac, encrypted.length);
              return _context0.a(2, res);
          }
        }, _callee0, this);
      }));
      function encrypt(_x16, _x17) {
        return _encrypt2.apply(this, arguments);
      }
      return encrypt;
    }()
  }, {
    key: "decrypt",
    value: function () {
      var _decrypt = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(algorithm, data) {
        var encrypted, ad, nonce, mac, nCMAC, adCMAC, computedMac, i, _i2, res;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              encrypted = data.slice(0, data.length - 16);
              ad = algorithm.additionalData;
              nonce = algorithm.iv;
              mac = data.slice(data.length - 16);
              _context1.n = 1;
              return this._computeCMAC(nonce, this._prefixBlock0);
            case 1:
              nCMAC = _context1.v;
              _context1.n = 2;
              return this._computeCMAC(ad, this._prefixBlock1);
            case 2:
              adCMAC = _context1.v;
              _context1.n = 3;
              return this._computeCMAC(encrypted, this._prefixBlock2);
            case 3:
              computedMac = _context1.v;
              for (i = 0; i < 16; i++) {
                computedMac[i] ^= nCMAC[i] ^ adCMAC[i];
              }
              if (!(computedMac.length !== mac.length)) {
                _context1.n = 4;
                break;
              }
              return _context1.a(2, null);
            case 4:
              _i2 = 0;
            case 5:
              if (!(_i2 < mac.length)) {
                _context1.n = 7;
                break;
              }
              if (!(computedMac[_i2] !== mac[_i2])) {
                _context1.n = 6;
                break;
              }
              return _context1.a(2, null);
            case 6:
              _i2++;
              _context1.n = 5;
              break;
            case 7:
              _context1.n = 8;
              return this._decryptCTR(encrypted, nCMAC);
            case 8:
              res = _context1.v;
              return _context1.a(2, res);
          }
        }, _callee1, this);
      }));
      function decrypt(_x18, _x19) {
        return _decrypt.apply(this, arguments);
      }
      return decrypt;
    }()
  }], [{
    key: "importKey",
    value: function () {
      var _importKey5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(key, _algorithm, _extractable, _keyUsages) {
        var cipher;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              cipher = new AESEAXCipher();
              _context10.n = 1;
              return cipher._importKey(key);
            case 1:
              return _context10.a(2, cipher);
          }
        }, _callee10);
      }));
      function importKey(_x20, _x21, _x22, _x23) {
        return _importKey5.apply(this, arguments);
      }
      return importKey;
    }()
  }]);
}();