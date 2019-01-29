/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar routes_1 = __webpack_require__(/*! ./src/routes */ \"./src/server/src/routes/index.ts\");\r\nvar app = express();\r\nvar p = path.join(__dirname, '../public');\r\nconsole.log(p);\r\napp.use(express.static(p));\r\napp.use(express.json());\r\napp.use('/api', routes_1.default);\r\napp.use('*', function (req, res, next) {\r\n    res.sendFile(path.join(__dirname, '../public/index.html'));\r\n});\r\nvar port = process.env.PORT || 3000;\r\napp.listen(port, function () {\r\n    console.log(\"Server listening on port: \" + port);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "./src/server/src/config/index.ts":
/*!****************************************!*\
  !*** ./src/server/src/config/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = {\r\n    mysql: {\r\n        host: 'localhost',\r\n        database: 'smash',\r\n        user: 'smashapp',\r\n        password: 'smashbros'\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/src/config/index.ts?");

/***/ }),

/***/ "./src/server/src/db/avatar.ts":
/*!*************************************!*\
  !*** ./src/server/src/db/avatar.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/src/db/index.ts\");\r\nvar getAvatars = function () {\r\n    var query = \"SELECT * FROM avatars\";\r\n    return new Promise(function (resolve, reject) {\r\n        index_1.Connection.query(query, function (err, results, fields) {\r\n            if (err) {\r\n                reject(err);\r\n            }\r\n            else {\r\n                resolve(results);\r\n            }\r\n        });\r\n    });\r\n};\r\nexports.getAvatars = getAvatars;\r\nvar getAvatar = function (id) {\r\n    var query = \"SELECT * FROM avatars WHERE id = \" + id;\r\n    return new Promise(function (resolve, reject) {\r\n        index_1.Connection.query(query, function (err, results, fields) {\r\n            if (err) {\r\n                reject(err);\r\n            }\r\n            else {\r\n                resolve(results[0]);\r\n            }\r\n        });\r\n    });\r\n};\r\nexports.getAvatar = getAvatar;\r\n\n\n//# sourceURL=webpack:///./src/server/src/db/avatar.ts?");

/***/ }),

/***/ "./src/server/src/db/index.ts":
/*!************************************!*\
  !*** ./src/server/src/db/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\r\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/src/config/index.ts\");\r\nexports.Connection = mysql.createConnection(config_1.default.mysql);\r\nexports.Connection.connect(function (err) {\r\n    if (err) {\r\n        console.log(err);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/src/db/index.ts?");

/***/ }),

/***/ "./src/server/src/db/player.ts":
/*!*************************************!*\
  !*** ./src/server/src/db/player.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = this;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/src/db/index.ts\");\r\nvar getPlayers = function () { return __awaiter(_this, void 0, void 0, function () {\r\n    var query;\r\n    return __generator(this, function (_a) {\r\n        query = \"SELECT * FROM players\";\r\n        return [2 /*return*/, new Promise(function (resolve, reject) {\r\n                index_1.Connection.query(query, function (err, results, fields) {\r\n                    if (err) {\r\n                        reject(err);\r\n                    }\r\n                    else {\r\n                        resolve(results);\r\n                    }\r\n                });\r\n            })];\r\n    });\r\n}); };\r\nexports.getPlayers = getPlayers;\r\nvar getPlayer = function (id) { return __awaiter(_this, void 0, void 0, function () {\r\n    var query;\r\n    return __generator(this, function (_a) {\r\n        query = \"SELECT * FROM players WHERE id = \" + id + \";\";\r\n        return [2 /*return*/, new Promise(function (resolve, reject) {\r\n                index_1.Connection.query(query, function (err, results, fields) {\r\n                    if (err) {\r\n                        reject(err);\r\n                    }\r\n                    else {\r\n                        resolve(results);\r\n                    }\r\n                });\r\n            })];\r\n    });\r\n}); };\r\nexports.getPlayer = getPlayer;\r\nvar addPlayer = function (player) { return __awaiter(_this, void 0, void 0, function () {\r\n    var query, data;\r\n    return __generator(this, function (_a) {\r\n        query = \"INSERT INTO players(username) VALUE(?);\";\r\n        data = Object[\"values\"](player);\r\n        console.log(data);\r\n        return [2 /*return*/, new Promise(function (resolve, reject) {\r\n                index_1.Connection.query(query, [data], function (err, results, fields) {\r\n                    if (err) {\r\n                        reject(err);\r\n                    }\r\n                    else {\r\n                        resolve(results);\r\n                    }\r\n                });\r\n            })];\r\n    });\r\n}); };\r\nexports.addPlayer = addPlayer;\r\nvar deletePlayer = function (id) { return __awaiter(_this, void 0, void 0, function () {\r\n    var query;\r\n    return __generator(this, function (_a) {\r\n        query = \"DELETE FROM players WHERE players.id = \" + id + \";\";\r\n        return [2 /*return*/, new Promise(function (resolve, reject) {\r\n                index_1.Connection.query(query, function (err, results, fields) {\r\n                    if (err) {\r\n                        reject(err);\r\n                    }\r\n                    else {\r\n                        resolve(results);\r\n                    }\r\n                });\r\n            })];\r\n    });\r\n}); };\r\nexports.deletePlayer = deletePlayer;\r\nvar editPlayer = function (username, id) { return __awaiter(_this, void 0, void 0, function () {\r\n    var query;\r\n    return __generator(this, function (_a) {\r\n        console.log(username);\r\n        console.log(id);\r\n        query = \"UPDATE players SET username = '\" + username + \"' WHERE players.id=\" + id + \";\";\r\n        return [2 /*return*/, new Promise(function (resolve, reject) {\r\n                index_1.Connection.query(query, function (err, results, fields) {\r\n                    if (err) {\r\n                        reject(err);\r\n                    }\r\n                    else {\r\n                        resolve(results);\r\n                    }\r\n                });\r\n            })];\r\n    });\r\n}); };\r\nexports.editPlayer = editPlayer;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/server/src/db/player.ts?");

/***/ }),

/***/ "./src/server/src/routes/avatarRouter.ts":
/*!***********************************************!*\
  !*** ./src/server/src/routes/avatarRouter.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = this;\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar Avatar = __webpack_require__(/*! ../db/avatar */ \"./src/server/src/db/avatar.ts\");\r\nvar router = express_1.Router();\r\nrouter.get('/:id?', function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {\r\n    var id, avatar, e_1, avatars, e_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                id = req.params.id;\r\n                if (!id) return [3 /*break*/, 5];\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, Avatar.getAvatar(id)];\r\n            case 2:\r\n                avatar = _a.sent();\r\n                res.send(avatar);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_1 = _a.sent();\r\n                console.log(e_1);\r\n                res.status(500);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [3 /*break*/, 8];\r\n            case 5:\r\n                _a.trys.push([5, 7, , 8]);\r\n                return [4 /*yield*/, Avatar.getAvatars()];\r\n            case 6:\r\n                avatars = _a.sent();\r\n                res.send(avatars);\r\n                return [3 /*break*/, 8];\r\n            case 7:\r\n                e_2 = _a.sent();\r\n                console.log(e_2);\r\n                res.status(500);\r\n                return [3 /*break*/, 8];\r\n            case 8: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/src/routes/avatarRouter.ts?");

/***/ }),

/***/ "./src/server/src/routes/index.ts":
/*!****************************************!*\
  !*** ./src/server/src/routes/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar players_1 = __webpack_require__(/*! ./players */ \"./src/server/src/routes/players.ts\");\r\nvar avatarRouter_1 = __webpack_require__(/*! ./avatarRouter */ \"./src/server/src/routes/avatarRouter.ts\");\r\nvar router = express_1.Router();\r\nrouter.use('/players', players_1.default);\r\nrouter.use('/avatars', avatarRouter_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/src/routes/index.ts?");

/***/ }),

/***/ "./src/server/src/routes/players.ts":
/*!******************************************!*\
  !*** ./src/server/src/routes/players.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar player_1 = __webpack_require__(/*! ../db/player */ \"./src/server/src/db/player.ts\");\r\nvar router = express_1.Router();\r\nrouter.get('/:id?', function (req, res) {\r\n    var id = req.params.id;\r\n    if (id) {\r\n        player_1.getPlayer(id)\r\n            .then(function (results) { return res.send(results); })\r\n            .catch(function (e) { return console.log(e); });\r\n    }\r\n    else {\r\n        player_1.getPlayers()\r\n            .then(function (results) { return res.send(results); })\r\n            .catch(function (e) { return console.log(e); });\r\n    }\r\n});\r\nrouter.post('/', function (req, res) {\r\n    player_1.addPlayer(req.body)\r\n        .then(function (results) { return res.send(results); })\r\n        .catch(function (e) { return console.log(e); });\r\n});\r\nrouter.delete('/:id', function (req, res) {\r\n    var id = req.params.id;\r\n    player_1.deletePlayer(id)\r\n        .then(function (results) { return res.send(results); })\r\n        .catch(function (e) { return console.log(e); });\r\n});\r\nrouter.put('/:id', function (req, res) {\r\n    var id = req.params.id;\r\n    player_1.editPlayer(req.body.username, id)\r\n        .then(function (results) { return res.send(results); })\r\n        .catch(function (e) { return console.log(e); });\r\n});\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/src/routes/players.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });