/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Players/Player.ts":
/*!*******************************!*\
  !*** ./src/Players/Player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* Player class */
var Player = /** @class */ (function () {
    function Player(sid) {
        var _this = this;
        this.sid = sid;
        this.isTeam = function (tmpObj) {
            return (tmpObj.sid === _this.sid || tmpObj.team && tmpObj.team === _this.team);
        };
        // INIT:
        this.init = function ( /* idk i forgot args for this ill check later */) {
        };
    }
    return Player;
}());



/***/ }),

/***/ "./src/Players/PlayerManager.ts":
/*!**************************************!*\
  !*** ./src/Players/PlayerManager.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../FindPlayerBySID'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _updatePlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatePlayer */ "./src/Players/updatePlayer.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/Players/Player.ts");
/**
 * Imports
 */
 // Import function to find a player by their SID
 // Import function to update a player's information
 // Import player class
/**
 * Player Manager class
 *
 * This class manages a collection of players and provides methods to add, remove, and update players.
 *
 * @memberOf module:Players
 */
var Players = /** @class */ (function () {
    function Players() {
    }
    /**
     * Gets the singleton instance of the Players class
     *
     * @returns {Players} The singleton instance of the Players class
     * @memberOf Players
     * @example const players = Players.getInstance();
     */
    Players.getInstance = function () {
        if (!Players.instance) {
            Players.instance = new Players();
        }
        return Players.instance;
    };
    /**
     * Adds a player to the collection
     *
     * @param {number} SID The SID for the player
     * @param {any[]} data The player's data
     * @memberOf Players
     * @example players.addPlayer(1, { name: "Onion", skin: "__proto__"});
     */
    Players.prototype.addPlayer = function (SID) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var tmpObj = new _Player__WEBPACK_IMPORTED_MODULE_2__.Player(SID);
        // INIT:
        tmpObj.init.apply(tmpObj, data);
        this.players.push(_Player__WEBPACK_IMPORTED_MODULE_2__.Player);
    };
    /**
     * Removes a player from the collection
     *
     * @param {number} sid The SID for the player to remove
     * @memberOf Players
     * @example players.removePlayer(10);
     */
    Players.prototype.removePlayer = function (sid) {
        var index = this.players.indexOf(this.players.find(function (player) { return player.sid === sid; }), 0);
        delete this.players[index];
    };
    /**
     * Updates the players in the collection based on new data
     *
     * @param {any[]} data The new data to update the players with
     * @memberOf Players
     * @example players.updatePlayers(tmpPlayer);
     */
    Players.prototype.updatePlayers = function (data) {
        // Unrender all players and rerender players in range
        for (var i = 0; i < this.players.length; ++i) {
            var tmpPlayer = this.players[i];
            tmpPlayer.visible = false;
        }
        for (var i = 0; i < data.length; i += 13) {
            var tmpPlayer = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../FindPlayerBySID'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data[0]);
            if (tmpPlayer) {
                (0,_updatePlayer__WEBPACK_IMPORTED_MODULE_1__.updatePlayer)(tmpPlayer, data, i);
            }
        }
    };
    return Players;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Players);


/***/ }),

/***/ "./src/Players/updatePlayer.ts":
/*!*************************************!*\
  !*** ./src/Players/updatePlayer.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updatePlayer: () => (/* binding */ updatePlayer)
/* harmony export */ });
function updatePlayer(player, data, index) {
    player.t1 = (player.t2 === void 0 ? Date.now() : player.t2);
    player.t2 = Date.now();
    player.lasPos = {
        x: player.x2,
        y: player.y2
    };
    player.x2 = data[index + 1];
    player.y2 = data[index + 2];
    player.d1 = (player.d2 === void 0 ? data[index + 3] : player.d2);
    player.delta = 0;
    player.weaponIndex = data[index + 5];
    player.weaponIndex < 9 && (player.weapons[0] = player.weaponIndex);
    player.weaponIndex >= 9 && (player.weapons[1] = player.weaponIndex);
    player.weaponVariant = data[index + 6];
    player.team = data[index + 7];
    player.lastSkinIndex = player.skinIndex;
    player.skinIndex = data[index + 9];
    player.lastTailIndex = player.tailIndex;
    player.tailIndex = data[index + 10];
    player.visible = true;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Players/PlayerManager */ "./src/Players/PlayerManager.ts");
/* harmony import */ var _Players_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Players/Player */ "./src/Players/Player.ts");
/**
 * Imports the msgpack library
 */
//const msgpack = require("msgpack");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var players = _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance().players;

/**
 * A class for encoding and decoding data using MessagePack
 */
var Msgpack = /** @class */ (function () {
    function Msgpack() {
    }
    /**
     * Encodes data using MessagePack
     *
     * @param {any} data The data to encode
     * @returns {Buffer} The encoded data
     */
    Msgpack.prototype.encode = function (data) {
        return msgpack.encode(data);
    };
    /**
     * Decodes data using MessagePack
     *
     * @param {Buffer} data The data to decode
     * @returns {any} The decoded data
     */
    Msgpack.prototype.decode = function (data) {
        return msgpack.decode(data);
    };
    return Msgpack;
}());
/**
 * A class for handling WebSocket connections and sending/receiving packets
 */
var WS = /** @class */ (function (_super) {
    __extends(WS, _super);
    /**
     * Constructor
     */
    function WS() {
        var _this = _super.call(this) || this;
        _this.ws = null;
        return _this;
    }
    /**
     * Sends a packet over the WebSocket connection
     *
     * @param {string} type The type of packet
     * @param {...any[]} data The data to send
     */
    WS.prototype.send = function (type) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        if (!this.ws) {
            throw new Error("[*] WebSocket is not initialized");
        }
        console.log(data);
        this.ws.send(this.encode([type, data]));
    };
    /**
     * Handles incoming packets from the WebSocket connection
     *
     * @param {any} data The incoming packet data
     */
    WS.prototype.handlePackets = function (data) {
        data = new Uint8Array(data);
        var parsed = this.decode(data);
        var type = parsed[0];
        var packetData = parsed[1];
        if (type === "A") {
            // SET INIT DATA;
        }
        else if (type === "B") {
            // DISCONNECT:
            window.location.reload();
        }
        else if (type === "D") {
            // ADD PLAYER:
            alert(packetData[1]);
            if (packetData[1]) {
                // MY PLAYER:
                players.myPlayer = new _Players_Player__WEBPACK_IMPORTED_MODULE_1__.Player(packetData[0][0]);
                console.warn(packetData[0]);
                players.push(players.myPlayer);
            }
            else {
                var tmpObj = new _Players_Player__WEBPACK_IMPORTED_MODULE_1__.Player(packetData[0][0]);
                players.players.push(tmpObj);
            }
        }
        else if (type === "E") {
            // REMOVE PLAYER:
            //Players.removePlayer()
        }
        else if (type === "a") {
            // UPDATE PLAYERS:
        }
        else if (type === "H") {
            // LOAD GAME OBJECT:
        }
        else if (type === "K") {
            // GATHER ANIMATION:
        }
        else if (type === "O") {
            // UPDATE HEALTH:
        }
    };
    return WS;
}(Msgpack));
/**
 * Monkey patches the WebSocket prototype to add a custom send method
 */
WebSocket.prototype.send2 = WebSocket.prototype.send; // so it won't call itself each time
WebSocket.prototype.send = function (packet) {
    var _this = this;
    if (!this.mod) {
        this.mod = new WS();
        this.mod.ws = this;
        this.addEventListener("message", function (msg) {
            _this.mod.handlePackets(msg.data);
        });
    }
    this.send2(packet);
};
/**
 * The Game class, which extends WS and adds game-specific properties and methods
 */
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enemies = [];
        _this.teammates = [];
        return _this;
    }
    /**
     * Gets the singleton instance of the Game class
     *
     * @returns {Game} The singleton instance
     */
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    };
    return Game;
}(WS));

var Mod = Game.getInstance();
alert("MooMoo TS Loaded");
document.getElementById("gameName").innerHTML = "\n<img src=\"https://cdn.glitch.global/1d1dafa9-ba5a-47e7-a4e7-bcbf0851583d/%5Bremoval.ai%5D_f5b07bfb-d250-4a8f-8714-2b5f4e5af3d2-banner.png?v=1720093338201\">\n";
//dark mode overlay
var overlay = document.createElement("div");
overlay.style = "\nposition: absolute;\ntop: 0;\nleft: 0;\nbackground: rgba(0, 0, 70, 0.2);\nwidth: 100%;\nheight: 100%;\npointer-events: none;\n";
document.body.appendChild(overlay);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9QbGF5ZXJzL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxheWVycy9QbGF5ZXJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF5ZXJzL3VwZGF0ZVBsYXllci50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQbGF5ZXIgY2xhc3MgKi9cbnZhciBQbGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGxheWVyKHNpZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNpZCA9IHNpZDtcbiAgICAgICAgdGhpcy5pc1RlYW0gPSBmdW5jdGlvbiAodG1wT2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRtcE9iai5zaWQgPT09IF90aGlzLnNpZCB8fCB0bXBPYmoudGVhbSAmJiB0bXBPYmoudGVhbSA9PT0gX3RoaXMudGVhbSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIElOSVQ6XG4gICAgICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uICggLyogaWRrIGkgZm9yZ290IGFyZ3MgZm9yIHRoaXMgaWxsIGNoZWNrIGxhdGVyICovKSB7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBQbGF5ZXI7XG59KCkpO1xuZXhwb3J0IHsgUGxheWVyIH07XG4iLCIvKipcbiAqIEltcG9ydHNcbiAqL1xuaW1wb3J0IHsgZmluZFBsYXllckJ5U2lkIH0gZnJvbSBcIi4uL0ZpbmRQbGF5ZXJCeVNJRFwiOyAvLyBJbXBvcnQgZnVuY3Rpb24gdG8gZmluZCBhIHBsYXllciBieSB0aGVpciBTSURcbmltcG9ydCB7IHVwZGF0ZVBsYXllciB9IGZyb20gXCIuL3VwZGF0ZVBsYXllclwiOyAvLyBJbXBvcnQgZnVuY3Rpb24gdG8gdXBkYXRlIGEgcGxheWVyJ3MgaW5mb3JtYXRpb25cbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiOyAvLyBJbXBvcnQgcGxheWVyIGNsYXNzXG4vKipcbiAqIFBsYXllciBNYW5hZ2VyIGNsYXNzXG4gKlxuICogVGhpcyBjbGFzcyBtYW5hZ2VzIGEgY29sbGVjdGlvbiBvZiBwbGF5ZXJzIGFuZCBwcm92aWRlcyBtZXRob2RzIHRvIGFkZCwgcmVtb3ZlLCBhbmQgdXBkYXRlIHBsYXllcnMuXG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTpQbGF5ZXJzXG4gKi9cbnZhciBQbGF5ZXJzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBsYXllcnMoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgUGxheWVycyBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybnMge1BsYXllcnN9IFRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFBsYXllcnMgY2xhc3NcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIGNvbnN0IHBsYXllcnMgPSBQbGF5ZXJzLmdldEluc3RhbmNlKCk7XG4gICAgICovXG4gICAgUGxheWVycy5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFQbGF5ZXJzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBQbGF5ZXJzLmluc3RhbmNlID0gbmV3IFBsYXllcnMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGxheWVycy5pbnN0YW5jZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSBwbGF5ZXIgdG8gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBTSUQgVGhlIFNJRCBmb3IgdGhlIHBsYXllclxuICAgICAqIEBwYXJhbSB7YW55W119IGRhdGEgVGhlIHBsYXllcidzIGRhdGFcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIHBsYXllcnMuYWRkUGxheWVyKDEsIHsgbmFtZTogXCJPbmlvblwiLCBza2luOiBcIl9fcHJvdG9fX1wifSk7XG4gICAgICovXG4gICAgUGxheWVycy5wcm90b3R5cGUuYWRkUGxheWVyID0gZnVuY3Rpb24gKFNJRCkge1xuICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgZGF0YVtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG1wT2JqID0gbmV3IFBsYXllcihTSUQpO1xuICAgICAgICAvLyBJTklUOlxuICAgICAgICB0bXBPYmouaW5pdC5hcHBseSh0bXBPYmosIGRhdGEpO1xuICAgICAgICB0aGlzLnBsYXllcnMucHVzaChQbGF5ZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHBsYXllciBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lkIFRoZSBTSUQgZm9yIHRoZSBwbGF5ZXIgdG8gcmVtb3ZlXG4gICAgICogQG1lbWJlck9mIFBsYXllcnNcbiAgICAgKiBAZXhhbXBsZSBwbGF5ZXJzLnJlbW92ZVBsYXllcigxMCk7XG4gICAgICovXG4gICAgUGxheWVycy5wcm90b3R5cGUucmVtb3ZlUGxheWVyID0gZnVuY3Rpb24gKHNpZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnBsYXllcnMuaW5kZXhPZih0aGlzLnBsYXllcnMuZmluZChmdW5jdGlvbiAocGxheWVyKSB7IHJldHVybiBwbGF5ZXIuc2lkID09PSBzaWQ7IH0pLCAwKTtcbiAgICAgICAgZGVsZXRlIHRoaXMucGxheWVyc1tpbmRleF07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwbGF5ZXJzIGluIHRoZSBjb2xsZWN0aW9uIGJhc2VkIG9uIG5ldyBkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBkYXRhIFRoZSBuZXcgZGF0YSB0byB1cGRhdGUgdGhlIHBsYXllcnMgd2l0aFxuICAgICAqIEBtZW1iZXJPZiBQbGF5ZXJzXG4gICAgICogQGV4YW1wbGUgcGxheWVycy51cGRhdGVQbGF5ZXJzKHRtcFBsYXllcik7XG4gICAgICovXG4gICAgUGxheWVycy5wcm90b3R5cGUudXBkYXRlUGxheWVycyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIFVucmVuZGVyIGFsbCBwbGF5ZXJzIGFuZCByZXJlbmRlciBwbGF5ZXJzIGluIHJhbmdlXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgdG1wUGxheWVyID0gdGhpcy5wbGF5ZXJzW2ldO1xuICAgICAgICAgICAgdG1wUGxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDEzKSB7XG4gICAgICAgICAgICB2YXIgdG1wUGxheWVyID0gZmluZFBsYXllckJ5U2lkKGRhdGFbMF0pO1xuICAgICAgICAgICAgaWYgKHRtcFBsYXllcikge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVBsYXllcih0bXBQbGF5ZXIsIGRhdGEsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gUGxheWVycztcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJzO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBsYXllcihwbGF5ZXIsIGRhdGEsIGluZGV4KSB7XG4gICAgcGxheWVyLnQxID0gKHBsYXllci50MiA9PT0gdm9pZCAwID8gRGF0ZS5ub3coKSA6IHBsYXllci50Mik7XG4gICAgcGxheWVyLnQyID0gRGF0ZS5ub3coKTtcbiAgICBwbGF5ZXIubGFzUG9zID0ge1xuICAgICAgICB4OiBwbGF5ZXIueDIsXG4gICAgICAgIHk6IHBsYXllci55MlxuICAgIH07XG4gICAgcGxheWVyLngyID0gZGF0YVtpbmRleCArIDFdO1xuICAgIHBsYXllci55MiA9IGRhdGFbaW5kZXggKyAyXTtcbiAgICBwbGF5ZXIuZDEgPSAocGxheWVyLmQyID09PSB2b2lkIDAgPyBkYXRhW2luZGV4ICsgM10gOiBwbGF5ZXIuZDIpO1xuICAgIHBsYXllci5kZWx0YSA9IDA7XG4gICAgcGxheWVyLndlYXBvbkluZGV4ID0gZGF0YVtpbmRleCArIDVdO1xuICAgIHBsYXllci53ZWFwb25JbmRleCA8IDkgJiYgKHBsYXllci53ZWFwb25zWzBdID0gcGxheWVyLndlYXBvbkluZGV4KTtcbiAgICBwbGF5ZXIud2VhcG9uSW5kZXggPj0gOSAmJiAocGxheWVyLndlYXBvbnNbMV0gPSBwbGF5ZXIud2VhcG9uSW5kZXgpO1xuICAgIHBsYXllci53ZWFwb25WYXJpYW50ID0gZGF0YVtpbmRleCArIDZdO1xuICAgIHBsYXllci50ZWFtID0gZGF0YVtpbmRleCArIDddO1xuICAgIHBsYXllci5sYXN0U2tpbkluZGV4ID0gcGxheWVyLnNraW5JbmRleDtcbiAgICBwbGF5ZXIuc2tpbkluZGV4ID0gZGF0YVtpbmRleCArIDldO1xuICAgIHBsYXllci5sYXN0VGFpbEluZGV4ID0gcGxheWVyLnRhaWxJbmRleDtcbiAgICBwbGF5ZXIudGFpbEluZGV4ID0gZGF0YVtpbmRleCArIDEwXTtcbiAgICBwbGF5ZXIudmlzaWJsZSA9IHRydWU7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogSW1wb3J0cyB0aGUgbXNncGFjayBsaWJyYXJ5XG4gKi9cbi8vY29uc3QgbXNncGFjayA9IHJlcXVpcmUoXCJtc2dwYWNrXCIpO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBQbGF5ZXJzIGZyb20gXCIuL1BsYXllcnMvUGxheWVyTWFuYWdlclwiO1xudmFyIHBsYXllcnMgPSBQbGF5ZXJzLmdldEluc3RhbmNlKCkucGxheWVycztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllcnMvUGxheWVyXCI7XG4vKipcbiAqIEEgY2xhc3MgZm9yIGVuY29kaW5nIGFuZCBkZWNvZGluZyBkYXRhIHVzaW5nIE1lc3NhZ2VQYWNrXG4gKi9cbnZhciBNc2dwYWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1zZ3BhY2soKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuY29kZXMgZGF0YSB1c2luZyBNZXNzYWdlUGFja1xuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGRhdGEgVGhlIGRhdGEgdG8gZW5jb2RlXG4gICAgICogQHJldHVybnMge0J1ZmZlcn0gVGhlIGVuY29kZWQgZGF0YVxuICAgICAqL1xuICAgIE1zZ3BhY2sucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBtc2dwYWNrLmVuY29kZShkYXRhKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlY29kZXMgZGF0YSB1c2luZyBNZXNzYWdlUGFja1xuICAgICAqXG4gICAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgVGhlIGRhdGEgdG8gZGVjb2RlXG4gICAgICogQHJldHVybnMge2FueX0gVGhlIGRlY29kZWQgZGF0YVxuICAgICAqL1xuICAgIE1zZ3BhY2sucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBtc2dwYWNrLmRlY29kZShkYXRhKTtcbiAgICB9O1xuICAgIHJldHVybiBNc2dwYWNrO1xufSgpKTtcbi8qKlxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgV2ViU29ja2V0IGNvbm5lY3Rpb25zIGFuZCBzZW5kaW5nL3JlY2VpdmluZyBwYWNrZXRzXG4gKi9cbnZhciBXUyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoV1MsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBXUygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMud3MgPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgcGFja2V0IG92ZXIgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBwYWNrZXRcbiAgICAgKiBAcGFyYW0gey4uLmFueVtdfSBkYXRhIFRoZSBkYXRhIHRvIHNlbmRcbiAgICAgKi9cbiAgICBXUy5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciBkYXRhID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBkYXRhW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy53cykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWypdIFdlYlNvY2tldCBpcyBub3QgaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMud3Muc2VuZCh0aGlzLmVuY29kZShbdHlwZSwgZGF0YV0pKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgaW5jb21pbmcgcGFja2V0cyBmcm9tIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGRhdGEgVGhlIGluY29taW5nIHBhY2tldCBkYXRhXG4gICAgICovXG4gICAgV1MucHJvdG90eXBlLmhhbmRsZVBhY2tldHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gICAgICAgIHZhciBwYXJzZWQgPSB0aGlzLmRlY29kZShkYXRhKTtcbiAgICAgICAgdmFyIHR5cGUgPSBwYXJzZWRbMF07XG4gICAgICAgIHZhciBwYWNrZXREYXRhID0gcGFyc2VkWzFdO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJBXCIpIHtcbiAgICAgICAgICAgIC8vIFNFVCBJTklUIERBVEE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJCXCIpIHtcbiAgICAgICAgICAgIC8vIERJU0NPTk5FQ1Q6XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJEXCIpIHtcbiAgICAgICAgICAgIC8vIEFERCBQTEFZRVI6XG4gICAgICAgICAgICBhbGVydChwYWNrZXREYXRhWzFdKTtcbiAgICAgICAgICAgIGlmIChwYWNrZXREYXRhWzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gTVkgUExBWUVSOlxuICAgICAgICAgICAgICAgIHBsYXllcnMubXlQbGF5ZXIgPSBuZXcgUGxheWVyKHBhY2tldERhdGFbMF1bMF0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihwYWNrZXREYXRhWzBdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJzLnB1c2gocGxheWVycy5teVBsYXllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdG1wT2JqID0gbmV3IFBsYXllcihwYWNrZXREYXRhWzBdWzBdKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJzLnBsYXllcnMucHVzaCh0bXBPYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiRVwiKSB7XG4gICAgICAgICAgICAvLyBSRU1PVkUgUExBWUVSOlxuICAgICAgICAgICAgLy9QbGF5ZXJzLnJlbW92ZVBsYXllcigpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgIC8vIFVQREFURSBQTEFZRVJTOlxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiSFwiKSB7XG4gICAgICAgICAgICAvLyBMT0FEIEdBTUUgT0JKRUNUOlxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiS1wiKSB7XG4gICAgICAgICAgICAvLyBHQVRIRVIgQU5JTUFUSU9OOlxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiT1wiKSB7XG4gICAgICAgICAgICAvLyBVUERBVEUgSEVBTFRIOlxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gV1M7XG59KE1zZ3BhY2spKTtcbi8qKlxuICogTW9ua2V5IHBhdGNoZXMgdGhlIFdlYlNvY2tldCBwcm90b3R5cGUgdG8gYWRkIGEgY3VzdG9tIHNlbmQgbWV0aG9kXG4gKi9cbldlYlNvY2tldC5wcm90b3R5cGUuc2VuZDIgPSBXZWJTb2NrZXQucHJvdG90eXBlLnNlbmQ7IC8vIHNvIGl0IHdvbid0IGNhbGwgaXRzZWxmIGVhY2ggdGltZVxuV2ViU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLm1vZCkge1xuICAgICAgICB0aGlzLm1vZCA9IG5ldyBXUygpO1xuICAgICAgICB0aGlzLm1vZC53cyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgX3RoaXMubW9kLmhhbmRsZVBhY2tldHMobXNnLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zZW5kMihwYWNrZXQpO1xufTtcbi8qKlxuICogVGhlIEdhbWUgY2xhc3MsIHdoaWNoIGV4dGVuZHMgV1MgYW5kIGFkZHMgZ2FtZS1zcGVjaWZpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXG4gKi9cbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHYW1lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdhbWUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5lbmVtaWVzID0gW107XG4gICAgICAgIF90aGlzLnRlYW1tYXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgR2FtZSBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybnMge0dhbWV9IFRoZSBzaW5nbGV0b24gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBHYW1lLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIUdhbWUuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEdhbWUuaW5zdGFuY2UgPSBuZXcgR2FtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBHYW1lLmluc3RhbmNlO1xuICAgIH07XG4gICAgcmV0dXJuIEdhbWU7XG59KFdTKSk7XG5leHBvcnQgeyBHYW1lIH07XG52YXIgTW9kID0gR2FtZS5nZXRJbnN0YW5jZSgpO1xuYWxlcnQoXCJNb29Nb28gVFMgTG9hZGVkXCIpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lTmFtZVwiKS5pbm5lckhUTUwgPSBcIlxcbjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5nbGl0Y2guZ2xvYmFsLzFkMWRhZmE5LWJhNWEtNDdlNy1hNGU3LWJjYmYwODUxNTgzZC8lNUJyZW1vdmFsLmFpJTVEX2Y1YjA3YmZiLWQyNTAtNGE4Zi04NzE0LTJiNWY0ZTVhZjNkMi1iYW5uZXIucG5nP3Y9MTcyMDA5MzMzODIwMVxcXCI+XFxuXCI7XG4vL2RhcmsgbW9kZSBvdmVybGF5XG52YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5vdmVybGF5LnN0eWxlID0gXCJcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiAwO1xcbmxlZnQ6IDA7XFxuYmFja2dyb3VuZDogcmdiYSgwLCAwLCA3MCwgMC4yKTtcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IDEwMCU7XFxucG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXCI7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9