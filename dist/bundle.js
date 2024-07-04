/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UTILS/Game.ts":
/*!***************************!*\
  !*** ./src/UTILS/Game.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/**\n * Imports the msgpack library\n */\n//const msgpack = require(\"msgpack\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\n/**\n * A class for encoding and decoding data using MessagePack\n */\nvar Msgpack = /** @class */ (function () {\n    function Msgpack() {\n    }\n    /**\n     * Encodes data using MessagePack\n     *\n     * @param {any} data The data to encode\n     * @returns {Buffer} The encoded data\n     */\n    Msgpack.prototype.encode = function (data) {\n        return msgpack.encode(data);\n    };\n    /**\n     * Decodes data using MessagePack\n     *\n     * @param {Buffer} data The data to decode\n     * @returns {any} The decoded data\n     */\n    Msgpack.prototype.decode = function (data) {\n        return msgpack.decode(data);\n    };\n    return Msgpack;\n}());\n/**\n * A class for handling WebSocket connections and sending/receiving packets\n */\nvar WS = /** @class */ (function (_super) {\n    __extends(WS, _super);\n    /**\n     * Constructor\n     */\n    function WS() {\n        var _this = _super.call(this) || this;\n        _this.ws = null;\n        return _this;\n    }\n    /**\n     * Sends a packet over the WebSocket connection\n     *\n     * @param {string} type The type of packet\n     * @param {...any[]} data The data to send\n     */\n    WS.prototype.send = function (type) {\n        var data = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            data[_i - 1] = arguments[_i];\n        }\n        if (!this.ws) {\n            throw new Error(\"[*] WebSocket is not initialized\");\n        }\n        console.log.apply(console, data);\n        this.ws.send(this.encode(__spreadArray([type], data, true)));\n    };\n    /**\n     * Handles incoming packets from the WebSocket connection\n     *\n     * @param {any} data The incoming packet data\n     */\n    WS.prototype.handlePackets = function (data) {\n        data = new Uint8Array(data);\n        var parsed = this.decode(data);\n        var type = parsed[0];\n        var packetData = parsed[1];\n        if (type === \"a\") {\n            this.send(\"6\", \"wow\");\n        }\n    };\n    return WS;\n}(Msgpack));\n/**\n * Monkey patches the WebSocket prototype to add a custom send method\n */\nWebSocket.prototype.send2 = WebSocket.prototype.send; // so it won't call itself each time\nWebSocket.prototype.send = function (packet) {\n    var _this = this;\n    if (!this.mod) {\n        this.mod = new WS();\n        this.mod.ws = this;\n        this.addEventListener(\"message\", function (msg) {\n            _this.mod.handlePackets(msg.data);\n        });\n    }\n    this.send2(packet);\n};\n/**\n * The Game class, which extends WS and adds game-specific properties and methods\n */\nvar Game = /** @class */ (function (_super) {\n    __extends(Game, _super);\n    function Game() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this.enemies = [];\n        _this.teammates = [];\n        return _this;\n    }\n    /**\n     * Gets the singleton instance of the Game class\n     *\n     * @returns {Game} The singleton instance\n     */\n    Game.getInstance = function () {\n        if (!Game.instance) {\n            Game.instance = new Game();\n        }\n        return Game.instance;\n    };\n    return Game;\n}(WS));\n\nvar Mod = Game.getInstance();\nalert(\"MooMoo TS Loaded\");\n\n\n//# sourceURL=webpack:///./src/UTILS/Game.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/UTILS/Game.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;