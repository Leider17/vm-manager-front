"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _strings = require("./util/strings.js");
var _eventtarget = _interopRequireDefault(require("./util/eventtarget.js"));
var _crypto = _interopRequireDefault(require("./crypto/crypto.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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
var RA2Cipher = /*#__PURE__*/function () {
  function RA2Cipher() {
    _classCallCheck(this, RA2Cipher);
    this._cipher = null;
    this._counter = new Uint8Array(16);
  }
  return _createClass(RA2Cipher, [{
    key: "setKey",
    value: function () {
      var _setKey = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(key) {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _crypto["default"].importKey("raw", key, {
                name: "AES-EAX"
              }, false, ["encrypt, decrypt"]);
            case 1:
              this._cipher = _context.v;
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function setKey(_x) {
        return _setKey.apply(this, arguments);
      }
      return setKey;
    }()
  }, {
    key: "makeMessage",
    value: function () {
      var _makeMessage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(message) {
        var ad, encrypted, i, res;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              ad = new Uint8Array([(message.length & 0xff00) >>> 8, message.length & 0xff]);
              _context2.n = 1;
              return _crypto["default"].encrypt({
                name: "AES-EAX",
                iv: this._counter,
                additionalData: ad
              }, this._cipher, message);
            case 1:
              encrypted = _context2.v;
              for (i = 0; i < 16 && this._counter[i]++ === 255; i++);
              res = new Uint8Array(message.length + 2 + 16);
              res.set(ad);
              res.set(encrypted, 2);
              return _context2.a(2, res);
          }
        }, _callee2, this);
      }));
      function makeMessage(_x2) {
        return _makeMessage.apply(this, arguments);
      }
      return makeMessage;
    }()
  }, {
    key: "receiveMessage",
    value: function () {
      var _receiveMessage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(length, encrypted) {
        var ad, res, i;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              ad = new Uint8Array([(length & 0xff00) >>> 8, length & 0xff]);
              _context3.n = 1;
              return _crypto["default"].decrypt({
                name: "AES-EAX",
                iv: this._counter,
                additionalData: ad
              }, this._cipher, encrypted);
            case 1:
              res = _context3.v;
              for (i = 0; i < 16 && this._counter[i]++ === 255; i++);
              return _context3.a(2, res);
          }
        }, _callee3, this);
      }));
      function receiveMessage(_x3, _x4) {
        return _receiveMessage.apply(this, arguments);
      }
      return receiveMessage;
    }()
  }]);
}();
var RSAAESAuthenticationState = exports["default"] = /*#__PURE__*/function (_EventTargetMixin) {
  function RSAAESAuthenticationState(sock, getCredentials) {
    var _this;
    _classCallCheck(this, RSAAESAuthenticationState);
    _this = _callSuper(this, RSAAESAuthenticationState);
    _this._hasStarted = false;
    _this._checkSock = null;
    _this._checkCredentials = null;
    _this._approveServerResolve = null;
    _this._sockReject = null;
    _this._credentialsReject = null;
    _this._approveServerReject = null;
    _this._sock = sock;
    _this._getCredentials = getCredentials;
    return _this;
  }
  _inherits(RSAAESAuthenticationState, _EventTargetMixin);
  return _createClass(RSAAESAuthenticationState, [{
    key: "_waitSockAsync",
    value: function _waitSockAsync(len) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        var hasData = function hasData() {
          return !_this2._sock.rQwait('RA2', len);
        };
        if (hasData()) {
          resolve();
        } else {
          _this2._checkSock = function () {
            if (hasData()) {
              resolve();
              _this2._checkSock = null;
              _this2._sockReject = null;
            }
          };
          _this2._sockReject = reject;
        }
      });
    }
  }, {
    key: "_waitApproveKeyAsync",
    value: function _waitApproveKeyAsync() {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        _this3._approveServerResolve = resolve;
        _this3._approveServerReject = reject;
      });
    }
  }, {
    key: "_waitCredentialsAsync",
    value: function _waitCredentialsAsync(subtype) {
      var _this4 = this;
      var hasCredentials = function hasCredentials() {
        if (subtype === 1 && _this4._getCredentials().username !== undefined && _this4._getCredentials().password !== undefined) {
          return true;
        } else if (subtype === 2 && _this4._getCredentials().password !== undefined) {
          return true;
        }
        return false;
      };
      return new Promise(function (resolve, reject) {
        if (hasCredentials()) {
          resolve();
        } else {
          _this4._checkCredentials = function () {
            if (hasCredentials()) {
              resolve();
              _this4._checkCredentials = null;
              _this4._credentialsReject = null;
            }
          };
          _this4._credentialsReject = reject;
        }
      });
    }
  }, {
    key: "checkInternalEvents",
    value: function checkInternalEvents() {
      if (this._checkSock !== null) {
        this._checkSock();
      }
      if (this._checkCredentials !== null) {
        this._checkCredentials();
      }
    }
  }, {
    key: "approveServer",
    value: function approveServer() {
      if (this._approveServerResolve !== null) {
        this._approveServerResolve();
        this._approveServerResolve = null;
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this._sockReject !== null) {
        this._sockReject(new Error("disconnect normally"));
        this._sockReject = null;
      }
      if (this._credentialsReject !== null) {
        this._credentialsReject(new Error("disconnect normally"));
        this._credentialsReject = null;
      }
      if (this._approveServerReject !== null) {
        this._approveServerReject(new Error("disconnect normally"));
        this._approveServerReject = null;
      }
    }
  }, {
    key: "negotiateRA2neAuthAsync",
    value: function () {
      var _negotiateRA2neAuthAsync = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var serverKeyLengthBuffer, serverKeyLength, serverKeyBytes, serverN, serverE, serverRSACipher, serverPublickey, approveKey, clientKeyLength, clientKeyBytes, clientRSACipher, clientExportedRSAKey, clientN, clientE, clientPublicKey, clientRandom, clientEncryptedRandom, clientRandomMessage, serverEncryptedRandom, serverRandom, clientSessionKey, serverSessionKey, clientCipher, serverCipher, serverHash, clientHash, serverHashReceived, i, subtype, waitCredentials, username, password, credentials, _i, _i2, _t, _t2;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              this._hasStarted = true;
              // 1: Receive server public key
              _context4.n = 1;
              return this._waitSockAsync(4);
            case 1:
              serverKeyLengthBuffer = this._sock.rQpeekBytes(4);
              serverKeyLength = this._sock.rQshift32();
              if (!(serverKeyLength < 1024)) {
                _context4.n = 2;
                break;
              }
              throw new Error("RA2: server public key is too short: " + serverKeyLength);
            case 2:
              if (!(serverKeyLength > 8192)) {
                _context4.n = 3;
                break;
              }
              throw new Error("RA2: server public key is too long: " + serverKeyLength);
            case 3:
              serverKeyBytes = Math.ceil(serverKeyLength / 8);
              _context4.n = 4;
              return this._waitSockAsync(serverKeyBytes * 2);
            case 4:
              serverN = this._sock.rQshiftBytes(serverKeyBytes);
              serverE = this._sock.rQshiftBytes(serverKeyBytes);
              _context4.n = 5;
              return _crypto["default"].importKey("raw", {
                n: serverN,
                e: serverE
              }, {
                name: "RSA-PKCS1-v1_5"
              }, false, ["encrypt"]);
            case 5:
              serverRSACipher = _context4.v;
              serverPublickey = new Uint8Array(4 + serverKeyBytes * 2);
              serverPublickey.set(serverKeyLengthBuffer);
              serverPublickey.set(serverN, 4);
              serverPublickey.set(serverE, 4 + serverKeyBytes);

              // verify server public key
              approveKey = this._waitApproveKeyAsync();
              this.dispatchEvent(new CustomEvent("serververification", {
                detail: {
                  type: "RSA",
                  publickey: serverPublickey
                }
              }));
              _context4.n = 6;
              return approveKey;
            case 6:
              // 2: Send client public key
              clientKeyLength = 2048;
              clientKeyBytes = Math.ceil(clientKeyLength / 8);
              _context4.n = 7;
              return _crypto["default"].generateKey({
                name: "RSA-PKCS1-v1_5",
                modulusLength: clientKeyLength,
                publicExponent: new Uint8Array([1, 0, 1])
              }, true, ["encrypt"]);
            case 7:
              clientRSACipher = _context4.v.privateKey;
              _context4.n = 8;
              return _crypto["default"].exportKey("raw", clientRSACipher);
            case 8:
              clientExportedRSAKey = _context4.v;
              clientN = clientExportedRSAKey.n;
              clientE = clientExportedRSAKey.e;
              clientPublicKey = new Uint8Array(4 + clientKeyBytes * 2);
              clientPublicKey[0] = (clientKeyLength & 0xff000000) >>> 24;
              clientPublicKey[1] = (clientKeyLength & 0xff0000) >>> 16;
              clientPublicKey[2] = (clientKeyLength & 0xff00) >>> 8;
              clientPublicKey[3] = clientKeyLength & 0xff;
              clientPublicKey.set(clientN, 4);
              clientPublicKey.set(clientE, 4 + clientKeyBytes);
              this._sock.sQpushBytes(clientPublicKey);
              this._sock.flush();

              // 3: Send client random
              clientRandom = new Uint8Array(16);
              window.crypto.getRandomValues(clientRandom);
              _context4.n = 9;
              return _crypto["default"].encrypt({
                name: "RSA-PKCS1-v1_5"
              }, serverRSACipher, clientRandom);
            case 9:
              clientEncryptedRandom = _context4.v;
              clientRandomMessage = new Uint8Array(2 + serverKeyBytes);
              clientRandomMessage[0] = (serverKeyBytes & 0xff00) >>> 8;
              clientRandomMessage[1] = serverKeyBytes & 0xff;
              clientRandomMessage.set(clientEncryptedRandom, 2);
              this._sock.sQpushBytes(clientRandomMessage);
              this._sock.flush();

              // 4: Receive server random
              _context4.n = 10;
              return this._waitSockAsync(2);
            case 10:
              if (!(this._sock.rQshift16() !== clientKeyBytes)) {
                _context4.n = 11;
                break;
              }
              throw new Error("RA2: wrong encrypted message length");
            case 11:
              serverEncryptedRandom = this._sock.rQshiftBytes(clientKeyBytes);
              _context4.n = 12;
              return _crypto["default"].decrypt({
                name: "RSA-PKCS1-v1_5"
              }, clientRSACipher, serverEncryptedRandom);
            case 12:
              serverRandom = _context4.v;
              if (!(serverRandom === null || serverRandom.length !== 16)) {
                _context4.n = 13;
                break;
              }
              throw new Error("RA2: corrupted server encrypted random");
            case 13:
              // 5: Compute session keys and set ciphers
              clientSessionKey = new Uint8Array(32);
              serverSessionKey = new Uint8Array(32);
              clientSessionKey.set(serverRandom);
              clientSessionKey.set(clientRandom, 16);
              serverSessionKey.set(clientRandom);
              serverSessionKey.set(serverRandom, 16);
              _context4.n = 14;
              return window.crypto.subtle.digest("SHA-1", clientSessionKey);
            case 14:
              clientSessionKey = _context4.v;
              clientSessionKey = new Uint8Array(clientSessionKey).slice(0, 16);
              _context4.n = 15;
              return window.crypto.subtle.digest("SHA-1", serverSessionKey);
            case 15:
              serverSessionKey = _context4.v;
              serverSessionKey = new Uint8Array(serverSessionKey).slice(0, 16);
              clientCipher = new RA2Cipher();
              _context4.n = 16;
              return clientCipher.setKey(clientSessionKey);
            case 16:
              serverCipher = new RA2Cipher();
              _context4.n = 17;
              return serverCipher.setKey(serverSessionKey);
            case 17:
              // 6: Compute and exchange hashes
              serverHash = new Uint8Array(8 + serverKeyBytes * 2 + clientKeyBytes * 2);
              clientHash = new Uint8Array(8 + serverKeyBytes * 2 + clientKeyBytes * 2);
              serverHash.set(serverPublickey);
              serverHash.set(clientPublicKey, 4 + serverKeyBytes * 2);
              clientHash.set(clientPublicKey);
              clientHash.set(serverPublickey, 4 + clientKeyBytes * 2);
              _context4.n = 18;
              return window.crypto.subtle.digest("SHA-1", serverHash);
            case 18:
              serverHash = _context4.v;
              _context4.n = 19;
              return window.crypto.subtle.digest("SHA-1", clientHash);
            case 19:
              clientHash = _context4.v;
              serverHash = new Uint8Array(serverHash);
              clientHash = new Uint8Array(clientHash);
              _t = this._sock;
              _context4.n = 20;
              return clientCipher.makeMessage(clientHash);
            case 20:
              _t.sQpushBytes.call(_t, _context4.v);
              this._sock.flush();
              _context4.n = 21;
              return this._waitSockAsync(2 + 20 + 16);
            case 21:
              if (!(this._sock.rQshift16() !== 20)) {
                _context4.n = 22;
                break;
              }
              throw new Error("RA2: wrong server hash");
            case 22:
              _context4.n = 23;
              return serverCipher.receiveMessage(20, this._sock.rQshiftBytes(20 + 16));
            case 23:
              serverHashReceived = _context4.v;
              if (!(serverHashReceived === null)) {
                _context4.n = 24;
                break;
              }
              throw new Error("RA2: failed to authenticate the message");
            case 24:
              i = 0;
            case 25:
              if (!(i < 20)) {
                _context4.n = 27;
                break;
              }
              if (!(serverHashReceived[i] !== serverHash[i])) {
                _context4.n = 26;
                break;
              }
              throw new Error("RA2: wrong server hash");
            case 26:
              i++;
              _context4.n = 25;
              break;
            case 27:
              _context4.n = 28;
              return this._waitSockAsync(2 + 1 + 16);
            case 28:
              if (!(this._sock.rQshift16() !== 1)) {
                _context4.n = 29;
                break;
              }
              throw new Error("RA2: wrong subtype");
            case 29:
              _context4.n = 30;
              return serverCipher.receiveMessage(1, this._sock.rQshiftBytes(1 + 16));
            case 30:
              subtype = _context4.v;
              if (!(subtype === null)) {
                _context4.n = 31;
                break;
              }
              throw new Error("RA2: failed to authenticate the message");
            case 31:
              subtype = subtype[0];
              waitCredentials = this._waitCredentialsAsync(subtype);
              if (!(subtype === 1)) {
                _context4.n = 32;
                break;
              }
              if (this._getCredentials().username === undefined || this._getCredentials().password === undefined) {
                this.dispatchEvent(new CustomEvent("credentialsrequired", {
                  detail: {
                    types: ["username", "password"]
                  }
                }));
              }
              _context4.n = 34;
              break;
            case 32:
              if (!(subtype === 2)) {
                _context4.n = 33;
                break;
              }
              if (this._getCredentials().password === undefined) {
                this.dispatchEvent(new CustomEvent("credentialsrequired", {
                  detail: {
                    types: ["password"]
                  }
                }));
              }
              _context4.n = 34;
              break;
            case 33:
              throw new Error("RA2: wrong subtype");
            case 34:
              _context4.n = 35;
              return waitCredentials;
            case 35:
              if (subtype === 1) {
                username = (0, _strings.encodeUTF8)(this._getCredentials().username).slice(0, 255);
              } else {
                username = "";
              }
              password = (0, _strings.encodeUTF8)(this._getCredentials().password).slice(0, 255);
              credentials = new Uint8Array(username.length + password.length + 2);
              credentials[0] = username.length;
              credentials[username.length + 1] = password.length;
              for (_i = 0; _i < username.length; _i++) {
                credentials[_i + 1] = username.charCodeAt(_i);
              }
              for (_i2 = 0; _i2 < password.length; _i2++) {
                credentials[username.length + 2 + _i2] = password.charCodeAt(_i2);
              }
              _t2 = this._sock;
              _context4.n = 36;
              return clientCipher.makeMessage(credentials);
            case 36:
              _t2.sQpushBytes.call(_t2, _context4.v);
              this._sock.flush();
            case 37:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function negotiateRA2neAuthAsync() {
        return _negotiateRA2neAuthAsync.apply(this, arguments);
      }
      return negotiateRA2neAuthAsync;
    }()
  }, {
    key: "hasStarted",
    get: function get() {
      return this._hasStarted;
    },
    set: function set(s) {
      this._hasStarted = s;
    }
  }]);
}(_eventtarget["default"]);