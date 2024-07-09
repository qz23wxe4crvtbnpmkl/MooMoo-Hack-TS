/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Buildings/Building.ts":
/*!***********************************!*\
  !*** ./src/Buildings/Building.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Building: () => (/* binding */ Building)
/* harmony export */ });
/* harmony import */ var _UTILS_FindPlayerBySID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UTILS/FindPlayerBySID */ "./src/UTILS/FindPlayerBySID.ts");

/* Building class */
var Building = /** @class */ (function () {
    function Building(sid, x, y, dir, scale, type, data, owner, isFake) {
        var _this = this;
        this.sid = sid;
        data = data || {}; // safe holder in case it's null or undefined
        this.id = data.id;
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.scale = scale;
        this.type = type;
        this.group = data.group;
        this.owner = owner;
        this.isFake = isFake;
        this.isAlive = true;
        this.active = true;
        this.wiggle = {
            x: 0,
            y: 0,
        };
        this.isItem = data.id !== null;
        this.objectType = data.trap ? "trap" : data.dmg ? "dmg" : data.teleport ? "teleporter" : null;
        this.maxHealth = data.health;
        this.buildHealth = this.maxHealth;
        this.isTeamObject = function (tmpObj) {
            var _a;
            return tmpObj.sid === ((_a = _this.owner) === null || _a === void 0 ? void 0 : _a.sid) || tmpObj.isTeam((0,_UTILS_FindPlayerBySID__WEBPACK_IMPORTED_MODULE_0__.findPlayerBySid)(tmpObj));
        };
    }
    return Building;
}());



/***/ }),

/***/ "./src/Buildings/BuildingManager.ts":
/*!******************************************!*\
  !*** ./src/Buildings/BuildingManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectManager: () => (/* binding */ ObjectManager)
/* harmony export */ });
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Building */ "./src/Buildings/Building.ts");
/* harmony import */ var _UTILS_Items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UTILS/Items */ "./src/UTILS/Items.ts");
/**
 * Imports
 */
 // Import Building class
 // Import Game Items
/**
 * Building Manager class
 *
 * This class manages a collection of game objects and provides methods to add, remove, and clear them.
 *
 * @memberOf module:ObjectManager
 */
var ObjectManager = /** @class */ (function () {
    /**
     * Private constructor to prevent instantiation
     *
     * @private
     */
    function ObjectManager() {
        /**
         * Object of relevant game objects
         */
        this.relevantBuildings = [];
    }
    /**
     * Gets the singleton instance of the ObjectManager class
     *
     * @returns {ObjectManager} The singleton instance of the ObjectManager class
     * @memberOf ObjectManager
     * @example ObjectManager.getInstance()
     */
    ObjectManager.getInstance = function () {
        if (!ObjectManager.instance) {
            ObjectManager.instance = new ObjectManager();
        }
        return ObjectManager.instance;
    };
    /**
     * Adds a building game object to the collection
     *
     * @param {any[]} data The data to create the building game object
     * @memberOf ObjectManager
     * @example ObjectManager.getInstance().addBuilding([1234, ...]);
     */
    ObjectManager.addBuilding = function (data, index) {
        data = data[0];
        var tmpObj = new _Building__WEBPACK_IMPORTED_MODULE_0__.Building(data[0 + index], data[1 + index], data[2 + index], data[3 + index], data[4 + index], data[5 + index], _UTILS_Items__WEBPACK_IMPORTED_MODULE_1__.Items[data[6 + index]], data[7 + index] >= 0
            ? {
                sid: data[7 + index],
            }
            : null, false);
        console.log(tmpObj);
        ObjectManager.Buildings.push(tmpObj);
    };
    /**
     * Removes a game object from the collection by SID
     *
     * @param {number} sid The SID of the game object to remove
     * @memberOf ObjectManager
     * @example ObjectManager.getInstance().removeGameObject(123);
     */
    ObjectManager.prototype.removeBuilding = function (sid) { };
    /**
     * Clears all game objects from the collection
     *
     * @memberOf ObjectManager
     * @example ObjectManager.getInstance().removeAllObjects(10);
     */
    ObjectManager.prototype.removeAllBuildings = function (sid) {
        var _this = this;
        ObjectManager.Buildings.forEach(function (tmpObj) {
            var _a;
            if (((_a = tmpObj === null || tmpObj === void 0 ? void 0 : tmpObj.owner) === null || _a === void 0 ? void 0 : _a.sid) === sid) {
                _this.removeBuilding(tmpObj.sid);
            }
        });
    };
    /**
     * Array of game objects
     */
    ObjectManager.Buildings = [];
    return ObjectManager;
}());



/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Players/PlayerManager */ "./src/Players/PlayerManager.ts");
/* harmony import */ var _badWords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badWords */ "./src/badWords.ts");
/* harmony import */ var _Buildings_BuildingManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buildings/BuildingManager */ "./src/Buildings/BuildingManager.ts");
/* harmony import */ var _Projectiles_ProjectileManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projectiles/ProjectileManager */ "./src/Projectiles/ProjectileManager.ts");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Notification */ "./src/Notification.ts");
/* harmony import */ var _UTILS_GetDistance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UTILS/GetDistance */ "./src/UTILS/GetDistance.ts");
/* harmony import */ var _UTILS_GetDirection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UTILS/GetDirection */ "./src/UTILS/GetDirection.ts");
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
        //console.log(type);
        if (type === "A") {
            // SET INIT DATA:
        }
        else if (type === "B") {
            // DISCONNECT:
            window.location.reload();
        }
        else if (type === "D") {
            // ADD PLAYER:
            _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.addPlayer(packetData[0][1], packetData);
        }
        else if (type === "E") {
            // REMOVE PLAYER:
            _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.removePlayer(packetData[0]);
        }
        else if (type === "P") {
            // MY PLAYER DEATH:
        }
        else if (type === "a") {
            // UPDATE PLAYERS:
            console.log(packetData[0]);
            _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.updatePlayers(packetData[0]);
            console.log(_Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.x2, _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.y2);
            // temp just to make sure shit works
            _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.delta = 0;
        }
        else if (type === "H") {
            // LOAD GAME OBJECT:
            for (var i = 0; i < packetData.length;) {
                _Buildings_BuildingManager__WEBPACK_IMPORTED_MODULE_2__.ObjectManager.addBuilding(packetData, i);
                i += 8;
            }
        }
        else if (type === "K") {
            // GATHER ANIMATION:
            console.log(packetData);
        }
        else if (type === "N") {
            // UPDATE PLAYER VALUES (RESOURCES):
            if (packetData[0] === "points") {
                //document.querySelector("#scoreDisplay").innerHTML = Smoothie(Math.round(Players.myPlayer.points), 1e6);
            }
        }
        else if (type === "O") {
            // UPDATE HEALTH:
        }
        else if (type === "X") {
            // ADD PROJECTILE:
            _Projectiles_ProjectileManager__WEBPACK_IMPORTED_MODULE_3__.projectileManager.addProjectile(packetData[0], packetData[1], packetData[2], packetData[3], packetData[4], packetData[5], packetData[6], packetData[7]);
        }
        else if (type === "Y") {
            // REMOVE PROJECTILE:
            _Projectiles_ProjectileManager__WEBPACK_IMPORTED_MODULE_3__.projectileManager.removeProjectile(packetData[0]);
        }
        else if (type === "6") {
            // RECEIVE CHAT:
            console.log(packetData[1]);
            if (packetData[1].includes("ferris")) {
                this.send("6", "ferris is a skid");
            }
            else if (packetData[1].includes("pashka")) {
                this.send("6", "pashka is a skid");
            }
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
    var param = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        param[_i - 1] = arguments[_i];
    }
    if (!this.mod) {
        this.mod = new WS();
        this.mod.ws = this;
        this.addEventListener("message", function (msg) {
            _this.mod.handlePackets(msg.data);
        });
    }
    // ANTI PROFANITY FILTER:
    var decodedPacket = this.mod.decode(packet);
    if (decodedPacket[0] === "6" && _badWords__WEBPACK_IMPORTED_MODULE_1__.badWords.some(function (word) { return decodedPacket[1].toString().toLowerCase().includes(word.toLowerCase()); })) {
        var msg = decodedPacket[1];
        var words = msg.split(' ');
        var newWords = words.map(function (word) {
            var modifiedWord = word;
            _badWords__WEBPACK_IMPORTED_MODULE_1__.badWords.forEach(function (badWord) {
                if (word.toLowerCase().includes(badWord.toLowerCase())) {
                    modifiedWord = modifiedWord.replace(new RegExp(badWord, 'gi'), badWord.charAt(0).toUpperCase() + badWord.slice(1));
                }
            });
            return modifiedWord;
        });
        var newMsg = newWords.join(' ');
        this.send2(this.mod.encode(["6", [newMsg]]));
    }
    else {
        this.send2(packet);
    }
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
    Game.updateGame = function () {
        if (_Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer) {
            if (Game.canvas) {
                if (!this.ctx) {
                    this.ctx = Game.canvas.getContext("2d");
                }
                else {
                    var oldCamXY = Game.camXY;
                    var camDistance = (0,_UTILS_GetDistance__WEBPACK_IMPORTED_MODULE_5__.getDistance)(Game.camXY, oldCamXY, 0, 0);
                    var camDirection = (0,_UTILS_GetDirection__WEBPACK_IMPORTED_MODULE_6__.getDirection)(Game.camXY, oldCamXY);
                    var camSpeed = Math.min(camDistance * 0.01 * Game.delta, camDistance);
                    if (camDistance > 0.05) {
                        Game.camXY.x += camSpeed * Math.cos(camDirection);
                        Game.camXY.y += camSpeed * Math.sin(camDirection);
                    }
                    else {
                        Game.camXY.x = Game.playerXY.x2;
                        Game.camXY.y = Game.playerXY.y2;
                    }
                    var rate = 170;
                    _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.delta += Game.delta;
                    var tmpRate = Math.min(1.7, _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.delta / rate);
                    var tmpDiff = (_Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.x2 - _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.oldX);
                    Game.playerXY.x = _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.oldX + (tmpDiff * tmpRate);
                    tmpDiff = (_Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.y2 - _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.oldY);
                    Game.playerXY.y = _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.oldY + (tmpDiff * tmpRate);
                    Game.xOffset = Game.camXY.x - (1920 / 2);
                    Game.yOffset = Game.camXY.y - (1080 / 2);
                    this.ctx.beginPath();
                    this.ctx.fillStyle = "#ff0000";
                    this.ctx.arc(200 - Game.xOffset, 200 - Game.yOffset, 50, 0, Math.PI * 2);
                    this.ctx.fill();
                    this.ctx.beginPath(); // added this line
                    this.ctx.arc(_Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.x2 - Game.xOffset, _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.y2 - Game.yOffset, 50, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            }
        }
    };
    Game.canvas = false;
    Game.ctx = false;
    Game.camXY = {
        x: 0,
        y: 0
    };
    Game.playerXY = {
        x: 0,
        y: 0
    };
    Game.delta = 0;
    Game.xOffset = 0;
    Game.yOffset = 0;
    return Game;
}(WS));

var Mod = Game.getInstance();
window.onload = function () {
    Game.canvas = document.getElementById("gameCanvas");
    document.getElementById("gameName").innerHTML = "\n<img src=\"https://cdn.glitch.global/1d1dafa9-ba5a-47e7-a4e7-bcbf0851583d/%5Bremoval.ai%5D_f5b07bfb-d250-4a8f-8714-2b5f4e5af3d2-banner.png?v=1720093338201\" style=\"width: 500px; height: 250px\">\n";
    // GAME OVERLAY:
    var overlay = document.createElement("div");
    overlay.style = "\nposition: absolute;\ntop: 0;\nleft: 0;\nbackground: rgba(0, 0, 70, 0.2);\nwidth: 100%;\nheight: 100%;\npointer-events: none;\n";
    document.body.appendChild(overlay);
    // VERIFICATION PROMPT:
    var VerificationPrompt = /** @class */ (function () {
        function VerificationPrompt() {
        }
        VerificationPrompt.prototype.prepare = function () {
            this.blur = document.createElement("div");
            this.blur.style.cssText = "\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 40, 0.3);\n      backdrop-filter: blur(6px);\n      z-index: 8887;\n    ";
            document.body.appendChild(this.blur);
            this.mainHolder = document.createElement("div");
            this.mainHolder.style.cssText = "\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 35%;\n      height: 20%;\n      background: rgba(185, 185, 185, 0.95);\n      backdrop-filter: blur(10px);\n      border-radius: 16px;\n      border: 6px solid lightgrey;\n      z-index: 8888;\n    ";
            document.body.appendChild(this.mainHolder);
            this.title = document.createElement("div");
            this.title.innerHTML = "Authentication.";
            this.title.style.cssText = "\n      position: absolute;\n      top: 35%;\n      left: 50%;\n      text-align: center;\n      transform: translate(-50%, -50%);\n      width: 100%;\n      height: 80px;\n      color: #000;\n      font: 32px Arial;\n      font-weight: bold;\n    ";
            this.mainHolder.appendChild(this.title);
            this.input = document.createElement("input");
            this.input.placeholder = "Enter Token Here...";
            this.input.type = "password";
            this.input.style.cssText = "\n      position: absolute;\n      height: 50px;\n      background: rgba(135, 135, 135, 0.3);\n      width: 70%;\n      bottom: 5%;\n      left: 3%;\n      border-radius: 10px;\n      border: none;\n      padding-left: 8px;\n      color: #fff;\n    ";
            this.mainHolder.appendChild(this.input);
            this.check = document.createElement("div");
            this.check.style.cssText = "\n      position: absolute;\n      bottom: 5%;\n      right: 3%;\n      width: 90px;\n      height: 50px;\n      background: rgba(47, 117, 193, 0.2);\n      text-align: center;\n      font: 20px Arial;\n      font-weight: bold;\n      vertical-align: middle;\n      border-radius: 10px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    ";
            this.check.innerHTML = "Verify";
            this.mainHolder.appendChild(this.check);
        };
        return VerificationPrompt;
    }());
    var verify = new VerificationPrompt();
    //verify.prepare();
    document.getElementById("ageBarBody").style.transition = "0.3s all";
    document.getElementById("bottomContainer").style.position = "relative";
    document.getElementById("bottomContainer").style = "\n  top: 20px;\n  ";
    Array.from(document.getElementsByClassName("actionBarItem")).forEach(function (element) {
        element.style.cssText += "\n      border-radius: 12px;\n      border: 6px solid rgba(0, 0, 0, 0.2);\n    ";
    });
    // REMOVE OLD UI ELEMENTS:
    document.getElementById("ageText").remove();
    document.getElementById("ageBarContainer").remove();
    document.getElementById("diedText").remove();
    new _Notification__WEBPACK_IMPORTED_MODULE_4__.Notification("MooMoo TS Loaded!", 2500, "rgba(45, 121, 199, 0.4)");
    new _Notification__WEBPACK_IMPORTED_MODULE_4__.Notification("Welcome Onion", 2500, "rgba(20, 0, 0, 0.6)");
};
var lastUpdate = 0;
function Loop() {
    Game.delta = Date.now() - lastUpdate;
    lastUpdate = Date.now();
    Game.updateGame();
    window.requestAnimationFrame(Loop);
}
Loop();


/***/ }),

/***/ "./src/Math.ts":
/*!*********************!*\
  !*** ./src/Math.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LN2: () => (/* binding */ LN2),
/* harmony export */   PI: () => (/* binding */ PI),
/* harmony export */   abs: () => (/* binding */ abs),
/* harmony export */   atan2: () => (/* binding */ atan2),
/* harmony export */   ceil: () => (/* binding */ ceil),
/* harmony export */   cos: () => (/* binding */ cos),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   hypot: () => (/* binding */ hypot),
/* harmony export */   log: () => (/* binding */ log),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   pow: () => (/* binding */ pow),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   sin: () => (/* binding */ sin),
/* harmony export */   sqrt: () => (/* binding */ sqrt)
/* harmony export */ });
//self explanatory (hopefully)
var sin = Math.sin, cos = Math.cos, min = Math.min, max = Math.max, random = Math.random, floor = Math.floor, ceil = Math.ceil, round = Math.round, PI = Math.PI, sqrt = Math.sqrt, abs = Math.abs, pow = Math.pow, log = Math.log, LN2 = Math.LN2, atan2 = Math.atan2, hypot = Math.hypot;


/***/ }),

/***/ "./src/Notification.ts":
/*!*****************************!*\
  !*** ./src/Notification.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Notification: () => (/* binding */ Notification)
/* harmony export */ });
var NotificationManager = /** @class */ (function () {
    function NotificationManager() {
    }
    NotificationManager.init = function () {
        NotificationManager.holder.style.cssText = "\n      position: fixed;\n      top: 0;\n      left: 50%;\n      transform: translate(-50%, 0%);\n      width: auto;\n      height: 200%;\n      text-align: center;\n      pointer-events: none;\n      z-index: 99999;\n    ";
        document.body.appendChild(NotificationManager.holder);
    };
    NotificationManager.holder = document.createElement("div");
    NotificationManager.notifications = [];
    return NotificationManager;
}());
var Notification = /** @class */ (function () {
    function Notification(text, life, color) {
        var _this = this;
        this.text = text;
        this.life = life;
        this.color = color;
        this.notification = document.createElement("div");
        this.notification.style.cssText = "\n      width: auto;\n      position: relative;\n      top: 0;\n      margin: 10px auto;\n      background: ".concat(this.color, ";\n      border: 4px solid rgba(0, 0, 0, 0.1);\n      padding: 10px 30px;\n      border-radius: 8px;\n      font-weight: 900;\n      font: 18px sans-serif;\n      letter-spacing: 1.35px;\n      vertical-align: middle;\n      line-height: 30px;\n      transition: 3s top, 0.5s opacity;\n      color: rgba(225, 225, 225, 1);\n      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);\n      backdrop-filter: blur(4px);\n    ");
        this.notification.innerText = this.text;
        NotificationManager.notifications.push(this);
        NotificationManager.holder.appendChild(this.notification);
        setTimeout(function () {
            _this.notification.style.opacity = "0";
            _this.notification.style.top = "-200px"; // to make it fade upwards
            // maybe in future we make it scale 0.75%
            // remove the notif after a bit
            setTimeout(function () {
                NotificationManager.holder.removeChild(_this.notification);
                var index = NotificationManager.notifications.indexOf(_this);
                if (index !== -1) {
                    NotificationManager.notifications.splice(index, 1);
                }
            }, 500);
        }, this.life);
    }
    return Notification;
}());

NotificationManager.init();


/***/ }),

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
            return (tmpObj.sid === _this.sid || (tmpObj.team && tmpObj.team === _this.team));
        };
        // INIT:
        this.init = function (id, name, x, y, dir, health, maxHealth, scale, skinColor) {
            this.id = id;
            this.name = name;
            this.scale = scale;
            this.dir = dir;
            this.health = health;
            this.maxHealth = maxHealth;
            this.lastHealth = this.health;
            this.oldX = 0;
            this.oldY = 0;
            this.x = 0;
            this.y = 0;
            this.x2 = x;
            this.y2 = y;
            this.x3 = 0;
            this.y3 = 0;
            this.skinIndex = 0;
            this.lastSkinIndex = this.skinIndex;
            this.tailIndex = 0;
            this.lastTailIndex = this.tailIndex;
            this.weaponIndex = 0;
            this.weapons = [0, 0];
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
/* harmony export */   Players: () => (/* binding */ Players)
/* harmony export */ });
/* harmony import */ var _UTILS_FindPlayerBySID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UTILS/FindPlayerBySID */ "./src/UTILS/FindPlayerBySID.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/Players/Player.ts");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Game */ "./src/Game.ts");
/**
 * Imports
 */
 // Import function to find a player by their SID
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
    Players.addPlayer = function (SID, data) {
        /* Data format:
    
          0: {id, sid, name, x, y, something, health, something, scale?, something}
          1: true/false for yes/no is me
          */
        if (data[1]) {
            // MY PLAYER:
            Players.myPlayer = new _Player__WEBPACK_IMPORTED_MODULE_1__.Player(SID);
            Players.players.push(Players.myPlayer);
            // INIT:
            Players.myPlayer.init(data[0][0], data[0][2], data[0][3], data[0][4], data[0][5], data[0][6], data[0][7], data[0][8], data[0][9]);
        }
        else {
            var tmpObj = new _Player__WEBPACK_IMPORTED_MODULE_1__.Player(SID);
            Players.players.push(tmpObj);
            tmpObj.init(data[0][0], data[0][2], data[0][3], data[0][4], data[0][5], data[0][6], data[0][7], data[0][8], data[0][9]);
        }
    };
    /**
     * Removes a player from the collection
     *
     * @param {number} sid The SID for the player to remove
     * @memberOf Players
     * @example players.removePlayer(10);
     */
    Players.removePlayer = function (sid) {
        var index = Players.players.indexOf(Players.players.find(function (player) { return player.sid === sid; }), 0);
        delete Players.players[index];
    };
    /**
     * Updates the players in the collection based on new data
     *
     * @param {any[]} data The new data to update the players with
     * @memberOf Players
     * @example players.updatePlayers(tmpPlayer);
     */
    Players.updatePlayers = function (data) {
        // Unrender all players and rerender players in range
        for (var i = 0; i < this.players.length; ++i) {
            var tmpPlayer = this.players[i];
            tmpPlayer.visible = false;
        }
        for (var index = 0; index < data.length; index += 13) {
            var player = (0,_UTILS_FindPlayerBySID__WEBPACK_IMPORTED_MODULE_0__.findPlayerBySid)(data[0]);
            if (player) {
                player.t1 = player.t2 === void 0 ? Date.now() : player.t2;
                player.t2 = Date.now();
                player.oldX = _Game__WEBPACK_IMPORTED_MODULE_2__.Game.playerXY.x2;
                player.oldY = _Game__WEBPACK_IMPORTED_MODULE_2__.Game.playerXY.y2;
                player.x2 = data[index + 1];
                player.y2 = data[index + 2];
                player.d1 = player.d2 === void 0 ? data[index + 3] : player.d2;
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
        }
    };
    /**
     * Array of players
     */
    Players.players = [];
    /**
     * My player
     */
    Players.myPlayer = {};
    return Players;
}());



/***/ }),

/***/ "./src/Projectiles/Projectile.ts":
/*!***************************************!*\
  !*** ./src/Projectiles/Projectile.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Projectile: () => (/* binding */ Projectile)
/* harmony export */ });
/* harmony import */ var _UTILS_Projectiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UTILS/Projectiles */ "./src/UTILS/Projectiles.ts");
/* harmony import */ var _ProjectileManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectileManager */ "./src/Projectiles/ProjectileManager.ts");


var Projectile = /** @class */ (function () {
    function Projectile(x, y, dir, range, speed, index, owner, ignoreObjects, layer) {
        var _this = this;
        this.data = _UTILS_Projectiles__WEBPACK_IMPORTED_MODULE_0__.Projectiles[index];
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.range = range;
        this.speed = speed;
        this.index = index;
        this.owner = owner;
        this.ignoreObjects = ignoreObjects;
        this.sid = _ProjectileManager__WEBPACK_IMPORTED_MODULE_1__.projectileManager.projectileCount;
        this.layer = layer || this.data.layer;
        this.distancePerTick = _UTILS_Projectiles__WEBPACK_IMPORTED_MODULE_0__.Projectiles[index].distPerTick;
        this.returnNextTickPosition = function (x, y) {
            return {
                x: x + _this.distancePerTick * Math.sin(_this.dir),
                y: y + _this.distancePerTick * Math.cos(_this.dir),
            };
        };
    }
    return Projectile;
}());



/***/ }),

/***/ "./src/Projectiles/ProjectileManager.ts":
/*!**********************************************!*\
  !*** ./src/Projectiles/ProjectileManager.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectileManager: () => (/* binding */ projectileManager)
/* harmony export */ });
/* harmony import */ var _UTILS_GetDistance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UTILS/GetDistance */ "./src/UTILS/GetDistance.ts");
/* harmony import */ var _Projectile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projectile */ "./src/Projectiles/Projectile.ts");


var projectileManager = /** @class */ (function () {
    function projectileManager() {
    }
    projectileManager.addProjectile = function (x, y, dir, range, speed, index, layer, sid) {
        var projectile = new _Projectile__WEBPACK_IMPORTED_MODULE_1__.Projectile(x, y, dir, range, speed, index, null, null, layer);
        projectile.sid = sid;
        console.warn(projectile);
        projectileManager.projectiles.push(projectile);
        projectileManager.projectileCount++;
    };
    projectileManager.removeProjectile = function (SID) {
        var item = projectileManager.projectiles.indexOf(projectileManager.projectiles.find(function (proj) { return proj.sid === SID; }), 0);
        console.warn(projectileManager.projectiles[item], SID);
        delete projectileManager.projectiles[item];
        projectileManager.projectileCount--;
    };
    //must be called every tick
    projectileManager.retrieveDangerousProjectiles = function (player) {
        var projectiles = [];
        /*
            ok so we are gonna filter this shit
            by distance travelable per tick
            + the direction of the projectile
    
            so if its going to hit the player
            we can return it in an array
            for damage potential later
            and also cool visuals yk
            */
        //the code below is very beta, and is just a placeholder to make it look like i did work today
        //in the future, map out all the projectiles speed and assign it with the projectile speeds/tick
        //Projectile.projectiles.map((projectile) => projectile.distPerTick /* (1e3 / 9)*/);
        projectileManager.projectiles.forEach(function (projectile) {
            if ((0,_UTILS_GetDistance__WEBPACK_IMPORTED_MODULE_0__.getDistance)(projectile.returnNextTickPosition(projectile.x, projectile.y), player, 0, 2) <=
                player.scale) {
                projectiles.push(projectile);
            }
        });
        return projectiles.sort(function (x, y) {
            return (0,_UTILS_GetDistance__WEBPACK_IMPORTED_MODULE_0__.getDistance)(player, { x: x, y: y }, 2, 0);
        });
    };
    projectileManager.projectileCount = 0;
    projectileManager.projectiles = [];
    return projectileManager;
}());



/***/ }),

/***/ "./src/UTILS/FindPlayerBySID.ts":
/*!**************************************!*\
  !*** ./src/UTILS/FindPlayerBySID.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findPlayerBySid: () => (/* binding */ findPlayerBySid)
/* harmony export */ });
/* harmony import */ var _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Players/PlayerManager */ "./src/Players/PlayerManager.ts");
/**
 * Imports the Players class
 */

/**
 * Finds a player by their SID
 *
 * @param {number} sid The SID of the player to find
 * @returns {any} The player with the matching SID, or undefined if not found
 * @memberOf module:FindPlayerBySID
 * @example findPlayerBySid(123);
 */
function findPlayerBySid(sid) {
    /**
     * Uses the find method to search the players array for a player with a matching SID
     */
    return _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.players.find(function (player) { return player.sid === sid; });
}


/***/ }),

/***/ "./src/UTILS/GetDirection.ts":
/*!***********************************!*\
  !*** ./src/UTILS/GetDirection.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDirection: () => (/* binding */ getDirection)
/* harmony export */ });
/* harmony import */ var _Math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math */ "./src/Math.ts");
/**
 * Imports the atan2 function from the Math module
 */

/**
 * Calculates the direction from obj1 to obj2
 *
 * @param {any} obj1 The source object
 * @param {any} obj2 The target object
 * @returns {number} The direction in radians from obj1 to obj2
 * @memberOf module:GetDirection
 * @example getDirection(player, enemy);
 */
function getDirection(obj1, obj2) {
    /**
     * Uses the atan2 function to calculate the direction
     * atan2(y, x) returns the angle in radians from the x-axis to the point (x, y)
     */
    return (0,_Math__WEBPACK_IMPORTED_MODULE_0__.atan2)(obj1.y - obj2.y, obj1.x - obj2.x);
}
//this needs to be redone to account for x2/y2


/***/ }),

/***/ "./src/UTILS/GetDistance.ts":
/*!**********************************!*\
  !*** ./src/UTILS/GetDistance.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDistance: () => (/* binding */ getDistance)
/* harmony export */ });
/* harmony import */ var _Math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math */ "./src/Math.ts");
/**
 * Imports the hypot function from the Math module
 */

/**
 * Calculates the distance between two objects
 *
 * @param {any} obj1 The first object
 * @param {any} obj2 The second object
 * @param {number} obj1type The coordinate type of obj1 (optional)
 * @param {number} obj2type The coordinate type of obj2 (optional)
 * @returns {number} The distance between obj1 and obj2
 * @memberOf module:GetDistance
 * @example getDistance(player, enemy, 2, 2);
 */
function getDistance(obj1, obj2, obj1type, obj2type) {
    /**
     * Uses the hypot function to calculate the distance
     * hypot(a, b) returns the square root of a^2 + b^2
     *
     * The x and y coordinates are dynamically accessed using bracket notation
     * The type parameters are used to append a suffix to the property names (e.g. "x1" or "y2")
     */
    return (0,_Math__WEBPACK_IMPORTED_MODULE_0__.hypot)(obj1["x".concat(obj1type || "")] - obj2["x".concat(obj2type || "")], obj1["y".concat(obj1type || "")] - obj2["y".concat(obj2type || "")]);
}


/***/ }),

/***/ "./src/UTILS/ItemGroups.ts":
/*!*********************************!*\
  !*** ./src/UTILS/ItemGroups.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemGroups: () => (/* binding */ itemGroups)
/* harmony export */ });
var itemGroups = [
    {
        id: 0,
        name: "food",
        layer: 0,
    },
    {
        id: 1,
        name: "walls",
        place: !0,
        limit: 30,
        layer: 0,
    },
    {
        id: 2,
        name: "spikes",
        place: !0,
        limit: 15,
        layer: 0,
    },
    {
        id: 3,
        name: "mill",
        place: !0,
        limit: 7,
        sandboxLimit: 299,
        layer: 1,
    },
    {
        id: 4,
        name: "mine",
        place: !0,
        limit: 1,
        layer: 0,
    },
    {
        id: 5,
        name: "trap",
        place: !0,
        limit: 6,
        layer: -1,
    },
    {
        id: 6,
        name: "booster",
        place: !0,
        limit: 12,
        sandboxLimit: 299,
        layer: -1,
    },
    {
        id: 7,
        name: "turret",
        place: !0,
        limit: 2,
        layer: 1,
    },
    {
        id: 8,
        name: "watchtower",
        place: !0,
        limit: 12,
        layer: 1,
    },
    {
        id: 9,
        name: "buff",
        place: !0,
        limit: 4,
        layer: -1,
    },
    {
        id: 10,
        name: "spawn",
        place: !0,
        limit: 1,
        layer: -1,
    },
    {
        id: 11,
        name: "sapling",
        place: !0,
        limit: 2,
        layer: 0,
    },
    {
        id: 12,
        name: "blocker",
        place: !0,
        limit: 3,
        layer: -1,
    },
    {
        id: 13,
        name: "teleporter",
        place: !0,
        limit: 2,
        sandboxLimit: 299,
        layer: -1,
    },
];


/***/ }),

/***/ "./src/UTILS/Items.ts":
/*!****************************!*\
  !*** ./src/UTILS/Items.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Items: () => (/* binding */ Items)
/* harmony export */ });
/* harmony import */ var _ItemGroups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemGroups */ "./src/UTILS/ItemGroups.ts");

var Items = [
    {
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[0],
        name: "apple",
        desc: "restores 20 health when consumed",
        req: ["food", 10],
        consume: function (t) {
            return t.changeHealth(20, t);
        },
        healing: 20,
        scale: 22,
        holdOffset: 15,
    },
    {
        age: 3,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[0],
        name: "cookie",
        desc: "restores 40 health when consumed",
        req: ["food", 15],
        consume: function (t) {
            return t.changeHealth(40, t);
        },
        healing: 40,
        scale: 27,
        holdOffset: 15,
    },
    {
        age: 7,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[0],
        name: "cheese",
        desc: "restores 30 health and another 50 over 5 seconds",
        req: ["food", 25],
        consume: function (t) {
            return ((!!t.changeHealth(30, t) || t.health < 100) &&
                ((t.dmgOverTime.dmg = -10),
                    (t.dmgOverTime.doer = t),
                    (t.dmgOverTime.time = 5),
                    !0));
        },
        healing: 30,
        scale: 27,
        holdOffset: 15,
    },
    {
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[1],
        name: "wood wall",
        desc: "provides protection for your village",
        req: ["wood", 10],
        projDmg: !0,
        health: 380,
        scale: 50,
        holdOffset: 20,
        placeOffset: -5,
    },
    {
        age: 3,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[1],
        name: "stone wall",
        desc: "provides improved protection for your village",
        req: ["stone", 25],
        health: 900,
        scale: 50,
        holdOffset: 20,
        placeOffset: -5,
    },
    {
        age: 7,
        pre: 1,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[1],
        name: "castle wall",
        desc: "provides powerful protection for your village",
        req: ["stone", 35],
        health: 1500,
        scale: 52,
        holdOffset: 20,
        placeOffset: -5,
    },
    {
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[2],
        name: "spikes",
        desc: "damages enemies when they touch them",
        req: ["wood", 20, "stone", 5],
        health: 400,
        dmg: 20,
        scale: 49,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5,
    },
    {
        age: 5,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[2],
        name: "greater spikes",
        desc: "damages enemies when they touch them",
        req: ["wood", 30, "stone", 10],
        health: 500,
        dmg: 35,
        scale: 52,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5,
    },
    {
        age: 9,
        pre: 1,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[2],
        name: "poison spikes",
        desc: "poisons enemies when they touch them",
        req: ["wood", 35, "stone", 15],
        health: 600,
        dmg: 30,
        pDmg: 5,
        scale: 52,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5,
    },
    {
        age: 9,
        pre: 2,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[2],
        name: "spinning spikes",
        desc: "damages enemies when they touch them",
        req: ["wood", 30, "stone", 20],
        health: 500,
        dmg: 45,
        turnSpeed: 0.003,
        scale: 52,
        spritePadding: -23,
        holdOffset: 8,
        placeOffset: -5,
    },
    {
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[3],
        name: "windmill",
        desc: "generates gold over time",
        req: ["wood", 50, "stone", 10],
        health: 400,
        pps: 1,
        turnSpeed: 0.0016,
        spritePadding: 25,
        iconLineMult: 12,
        scale: 45,
        holdOffset: 20,
        placeOffset: 5,
    },
    {
        age: 5,
        pre: 1,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[3],
        name: "faster windmill",
        desc: "generates more gold over time",
        req: ["wood", 60, "stone", 20],
        health: 500,
        pps: 1.5,
        turnSpeed: 0.0025,
        spritePadding: 25,
        iconLineMult: 12,
        scale: 47,
        holdOffset: 20,
        placeOffset: 5,
    },
    {
        age: 8,
        pre: 1,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[3],
        name: "power mill",
        desc: "generates more gold over time",
        req: ["wood", 100, "stone", 50],
        health: 800,
        pps: 2,
        turnSpeed: 0.005,
        spritePadding: 25,
        iconLineMult: 12,
        scale: 47,
        holdOffset: 20,
        placeOffset: 5,
    },
    {
        age: 5,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[4],
        type: 2,
        name: "mine",
        desc: "allows you to mine stone",
        req: ["wood", 20, "stone", 100],
        iconLineMult: 12,
        scale: 65,
        holdOffset: 20,
        placeOffset: 0,
    },
    {
        age: 5,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[11],
        type: 0,
        name: "sapling",
        desc: "allows you to farm wood",
        req: ["wood", 150],
        iconLineMult: 12,
        colDiv: 0.5,
        scale: 110,
        holdOffset: 50,
        placeOffset: -15,
    },
    {
        age: 4,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[5],
        name: "pit trap",
        desc: "pit that traps enemies if they walk over it",
        req: ["wood", 30, "stone", 30],
        trap: !0,
        ignoreCollision: !0,
        hideFromEnemy: !0,
        health: 500,
        colDiv: 0.2,
        scale: 50,
        holdOffset: 20,
        placeOffset: -5,
    },
    {
        age: 4,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[6],
        name: "boost pad",
        desc: "provides boost when stepped on",
        req: ["stone", 20, "wood", 5],
        ignoreCollision: !0,
        boostSpeed: 1.5,
        health: 150,
        colDiv: 0.7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5,
    },
    {
        age: 7,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[7],
        doUpdate: !0,
        name: "turret",
        desc: "defensive structure that shoots at enemies",
        req: ["wood", 200, "stone", 150],
        health: 800,
        projectile: 1,
        shootRange: 700,
        shootRate: 2200,
        scale: 43,
        holdOffset: 20,
        placeOffset: -5,
    },
    {
        age: 7,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[8],
        name: "platform",
        desc: "platform to shoot over walls and cross over water",
        req: ["wood", 20],
        ignoreCollision: !0,
        zIndex: 1,
        health: 300,
        scale: 43,
        holdOffset: 20,
        placeOffset: -5,
    },
    {
        age: 7,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[9],
        name: "healing pad",
        desc: "standing on it will slowly heal you",
        req: ["wood", 30, "food", 10],
        ignoreCollision: !0,
        healCol: 15,
        health: 400,
        colDiv: 0.7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5,
    },
    {
        age: 9,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[10],
        name: "spawn pad",
        desc: "you will spawn here when you die but it will dissapear",
        req: ["wood", 100, "stone", 100],
        health: 400,
        ignoreCollision: !0,
        spawnPoint: !0,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5,
    },
    {
        age: 7,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[12],
        name: "blocker",
        desc: "blocks building in radius",
        req: ["wood", 30, "stone", 25],
        ignoreCollision: !0,
        blocker: 300,
        health: 400,
        colDiv: 0.7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5,
    },
    {
        age: 7,
        group: _ItemGroups__WEBPACK_IMPORTED_MODULE_0__.itemGroups[13],
        name: "teleporter",
        desc: "teleports you to a random point on the map",
        req: ["wood", 60, "stone", 60],
        ignoreCollision: !0,
        teleport: !0,
        health: 200,
        colDiv: 0.7,
        scale: 45,
        holdOffset: 20,
        placeOffset: -5,
    },
];


/***/ }),

/***/ "./src/UTILS/Projectiles.ts":
/*!**********************************!*\
  !*** ./src/UTILS/Projectiles.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Projectiles: () => (/* binding */ Projectiles)
/* harmony export */ });
var Projectiles = [
    {
        indx: 0,
        layer: 0,
        src: "arrow_1",
        dmg: 25,
        speed: 1.6,
        scale: 103,
        range: 1e3,
        distPerTick: 1.6,
    },
    {
        indx: 1,
        layer: 1,
        dmg: 25,
        scale: 20,
        distPerTick: 1.6,
    },
    {
        indx: 0,
        layer: 0,
        src: "arrow_1",
        dmg: 35,
        speed: 2.5,
        scale: 103,
        range: 1200,
        distPerTick: 2.5,
    },
    {
        indx: 0,
        layer: 0,
        src: "arrow_1",
        dmg: 30,
        speed: 2,
        scale: 103,
        range: 1200,
        distPerTick: 2,
    },
    {
        indx: 1,
        layer: 1,
        dmg: 16,
        scale: 20,
        distPerTick: NaN,
    },
    {
        indx: 0,
        layer: 0,
        src: "bullet_1",
        dmg: 50,
        speed: 3.6,
        scale: 160,
        range: 1400,
        distPerTick: 3.6,
    },
];


/***/ }),

/***/ "./src/badWords.ts":
/*!*************************!*\
  !*** ./src/badWords.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   badWords: () => (/* binding */ badWords)
/* harmony export */ });
var badWords = [
    "ahole",
    "anus",
    "ash0le",
    "ash0les",
    "asholes",
    "ass",
    "Ass Monkey",
    "Assface",
    "assh0le",
    "assh0lez",
    "asshole",
    "assholes",
    "assholz",
    "asswipe",
    "azzhole",
    "bassterds",
    "bastard",
    "bastards",
    "bastardz",
    "basterds",
    "basterdz",
    "Biatch",
    "bitch",
    "bitches",
    "Blow Job",
    "boffing",
    "butthole",
    "buttwipe",
    "c0ck",
    "c0cks",
    "c0k",
    "Carpet Muncher",
    "cawk",
    "cawks",
    "Clit",
    "cnts",
    "cntz",
    "cock",
    "cockhead",
    "cock-head",
    "cocks",
    "CockSucker",
    "cock-sucker",
    "crap",
    "cum",
    "cunt",
    "cunts",
    "cuntz",
    "dick",
    "dild0",
    "dild0s",
    "dildo",
    "dildos",
    "dilld0",
    "dilld0s",
    "dominatricks",
    "dominatrics",
    "dominatrix",
    "dyke",
    "enema",
    "f u c k",
    "f u c k e r",
    "fag",
    "fag1t",
    "faget",
    "fagg1t",
    "faggit",
    "faggot",
    "fagg0t",
    "fagit",
    "fags",
    "fagz",
    "faig",
    "faigs",
    "fart",
    "flipping the bird",
    "fuck",
    "fucker",
    "fuckin",
    "fucking",
    "fucks",
    "Fudge Packer",
    "fuk",
    "Fukah",
    "Fuken",
    "fuker",
    "Fukin",
    "Fukk",
    "Fukkah",
    "Fukken",
    "Fukker",
    "Fukkin",
    "g00k",
    "God-damned",
    "h00r",
    "h0ar",
    "h0re",
    "hells",
    "hoar",
    "hoor",
    "hoore",
    "jackoff",
    "jap",
    "japs",
    "jerk-off",
    "jisim",
    "jiss",
    "jizm",
    "jizz",
    "knob",
    "knobs",
    "knobz",
    "kunt",
    "kunts",
    "kuntz",
    "Lezzian",
    "Lipshits",
    "Lipshitz",
    "masochist",
    "masokist",
    "massterbait",
    "masstrbait",
    "masstrbate",
    "masterbaiter",
    "masterbate",
    "masterbates",
    "Motha Fucker",
    "Motha Fuker",
    "Motha Fukkah",
    "Motha Fukker",
    "Mother Fucker",
    "Mother Fukah",
    "Mother Fuker",
    "Mother Fukkah",
    "Mother Fukker",
    "mother-fucker",
    "Mutha Fucker",
    "Mutha Fukah",
    "Mutha Fuker",
    "Mutha Fukkah",
    "Mutha Fukker",
    "n1gr",
    "nastt",
    "nigger;",
    "nigur;",
    "niiger;",
    "niigr;",
    "orafis",
    "orgasim;",
    "orgasm",
    "orgasum",
    "oriface",
    "orifice",
    "orifiss",
    "packi",
    "packie",
    "packy",
    "paki",
    "pakie",
    "paky",
    "pecker",
    "peeenus",
    "peeenusss",
    "peenus",
    "peinus",
    "pen1s",
    "penas",
    "penis",
    "penis-breath",
    "penus",
    "penuus",
    "Phuc",
    "Phuck",
    "Phuk",
    "Phuker",
    "Phukker",
    "polac",
    "polack",
    "polak",
    "Poonani",
    "pr1c",
    "pr1ck",
    "pr1k",
    "pusse",
    "pussee",
    "pussy",
    "puuke",
    "puuker",
    "qweir",
    "recktum",
    "rectum",
    "retard",
    "sadist",
    "scank",
    "schlong",
    "screwing",
    "semen",
    "sex",
    "sexy",
    "Sh!t",
    "sh1t",
    "sh1ter",
    "sh1ts",
    "sh1tter",
    "sh1tz",
    "shit",
    "shits",
    "shitter",
    "Shitty",
    "Shity",
    "shitz",
    "Shyt",
    "Shyte",
    "Shytty",
    "Shyty",
    "skanck",
    "skank",
    "skankee",
    "skankey",
    "skanks",
    "Skanky",
    "slag",
    "slut",
    "sluts",
    "Slutty",
    "slutz",
    "son-of-a-bitch",
    "tit",
    "turd",
    "va1jina",
    "vag1na",
    "vagiina",
    "vagina",
    "vaj1na",
    "vajina",
    "vullva",
    "vulva",
    "w0p",
    "wh00r",
    "wh0re",
    "whore",
    "xrated",
    "xxx",
    "b!+ch",
    "bitch",
    "blowjob",
    "clit",
    "arschloch",
    "fuck",
    "shit",
    "ass",
    "asshole",
    "b!tch",
    "b17ch",
    "b1tch",
    "bastard",
    "bi+ch",
    "boiolas",
    "buceta",
    "c0ck",
    "cawk",
    "chink",
    "cipa",
    "clits",
    "cock",
    "cum",
    "cunt",
    "dildo",
    "dirsa",
    "ejakulate",
    "fatass",
    "fcuk",
    "fuk",
    "fux0r",
    "hoer",
    "hore",
    "jism",
    "kawk",
    "l3itch",
    "l3i+ch",
    "masturbate",
    "masterbat*",
    "masterbat3",
    "motherfucker",
    "s.o.b.",
    "mofo",
    "nazi",
    "nigga",
    "nigger",
    "nutsack",
    "phuck",
    "pimpis",
    "pusse",
    "pussy",
    "scrotum",
    "sh!t",
    "shemale",
    "shi+",
    "sh!+",
    "slut",
    "smut",
    "teets",
    "tits",
    "boobs",
    "b00bs",
    "teez",
    "testical",
    "testicle",
    "titt",
    "w00se",
    "jackoff",
    "wank",
    "whoar",
    "whore",
    "*damn",
    "*dyke",
    "*fuck*",
    "*shit*",
    "@$$",
    "amcik",
    "andskota",
    "arse*",
    "assrammer",
    "ayir",
    "bi7ch",
    "bitch*",
    "bollock*",
    "breasts",
    "butt-pirate",
    "cabron",
    "cazzo",
    "chraa",
    "chuj",
    "Cock*",
    "cunt*",
    "d4mn",
    "daygo",
    "dego",
    "dick*",
    "dike*",
    "dupa",
    "dziwka",
    "ejackulate",
    "Ekrem*",
    "Ekto",
    "enculer",
    "faen",
    "fag*",
    "fanculo",
    "fanny",
    "feces",
    "feg",
    "Felcher",
    "ficken",
    "fitt*",
    "Flikker",
    "foreskin",
    "Fotze",
    "Fu(*",
    "fuk*",
    "futkretzn",
    "gook",
    "guiena",
    "h0r",
    "h4x0r",
    "hell",
    "helvete",
    "hoer*",
    "honkey",
    "Huevon",
    "hui",
    "injun",
    "jizz",
    "kanker*",
    "kike",
    "klootzak",
    "kraut",
    "knulle",
    "kuk",
    "kuksuger",
    "Kurac",
    "kurwa",
    "kusi*",
    "kyrpa*",
    "lesbo",
    "mamhoon",
    "masturbat*",
    "merd*",
    "mibun",
    "monkleigh",
    "mouliewop",
    "muie",
    "mulkku",
    "muschi",
    "nazis",
    "nepesaurio",
    "nigger*",
    "orospu",
    "paska*",
    "perse",
    "picka",
    "pierdol*",
    "pillu*",
    "pimmel",
    "piss*",
    "pizda",
    "poontsee",
    "poop",
    "porn",
    "p0rn",
    "pr0n",
    "preteen",
    "pula",
    "pule",
    "puta",
    "puto",
    "qahbeh",
    "queef*",
    "rautenberg",
    "schaffer",
    "scheiss*",
    "schlampe",
    "schmuck",
    "screw",
    "sh!t*",
    "sharmuta",
    "sharmute",
    "shipal",
    "shiz",
    "skribz",
    "skurwysyn",
    "sphencter",
    "spic",
    "spierdalaj",
    "splooge",
    "suka",
    "b00b*",
    "testicle*",
    "titt*",
    "twat",
    "vittu",
    "wank*",
    "wetback*",
    "wichser",
    "wop*",
    "yed",
    "zabourah",
];


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Game.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1VBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaGNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBRU5BO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0J1aWxkaW5ncy9CdWlsZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQnVpbGRpbmdzL0J1aWxkaW5nTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTWF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF5ZXJzL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxheWVycy9QbGF5ZXJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9Qcm9qZWN0aWxlcy9Qcm9qZWN0aWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9Qcm9qZWN0aWxlcy9Qcm9qZWN0aWxlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVVRJTFMvRmluZFBsYXllckJ5U0lELnRzIiwid2VicGFjazovLy8uL3NyYy9VVElMUy9HZXREaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VUSUxTL0dldERpc3RhbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9VVElMUy9JdGVtR3JvdXBzLnRzIiwid2VicGFjazovLy8uL3NyYy9VVElMUy9JdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVVRJTFMvUHJvamVjdGlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhZFdvcmRzLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaW5kUGxheWVyQnlTaWQgfSBmcm9tIFwiLi4vVVRJTFMvRmluZFBsYXllckJ5U0lEXCI7XG4vKiBCdWlsZGluZyBjbGFzcyAqL1xudmFyIEJ1aWxkaW5nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJ1aWxkaW5nKHNpZCwgeCwgeSwgZGlyLCBzY2FsZSwgdHlwZSwgZGF0YSwgb3duZXIsIGlzRmFrZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNpZCA9IHNpZDtcbiAgICAgICAgZGF0YSA9IGRhdGEgfHwge307IC8vIHNhZmUgaG9sZGVyIGluIGNhc2UgaXQncyBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5kaXIgPSBkaXI7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5ncm91cCA9IGRhdGEuZ3JvdXA7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgdGhpcy5pc0Zha2UgPSBpc0Zha2U7XG4gICAgICAgIHRoaXMuaXNBbGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53aWdnbGUgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pc0l0ZW0gPSBkYXRhLmlkICE9PSBudWxsO1xuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSBkYXRhLnRyYXAgPyBcInRyYXBcIiA6IGRhdGEuZG1nID8gXCJkbWdcIiA6IGRhdGEudGVsZXBvcnQgPyBcInRlbGVwb3J0ZXJcIiA6IG51bGw7XG4gICAgICAgIHRoaXMubWF4SGVhbHRoID0gZGF0YS5oZWFsdGg7XG4gICAgICAgIHRoaXMuYnVpbGRIZWFsdGggPSB0aGlzLm1heEhlYWx0aDtcbiAgICAgICAgdGhpcy5pc1RlYW1PYmplY3QgPSBmdW5jdGlvbiAodG1wT2JqKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gdG1wT2JqLnNpZCA9PT0gKChfYSA9IF90aGlzLm93bmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2lkKSB8fCB0bXBPYmouaXNUZWFtKGZpbmRQbGF5ZXJCeVNpZCh0bXBPYmopKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIEJ1aWxkaW5nO1xufSgpKTtcbmV4cG9ydCB7IEJ1aWxkaW5nIH07XG4iLCIvKipcbiAqIEltcG9ydHNcbiAqL1xuaW1wb3J0IHsgQnVpbGRpbmcgfSBmcm9tIFwiLi9CdWlsZGluZ1wiOyAvLyBJbXBvcnQgQnVpbGRpbmcgY2xhc3NcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSBcIi4uL1VUSUxTL0l0ZW1zXCI7IC8vIEltcG9ydCBHYW1lIEl0ZW1zXG4vKipcbiAqIEJ1aWxkaW5nIE1hbmFnZXIgY2xhc3NcbiAqXG4gKiBUaGlzIGNsYXNzIG1hbmFnZXMgYSBjb2xsZWN0aW9uIG9mIGdhbWUgb2JqZWN0cyBhbmQgcHJvdmlkZXMgbWV0aG9kcyB0byBhZGQsIHJlbW92ZSwgYW5kIGNsZWFyIHRoZW0uXG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTpPYmplY3RNYW5hZ2VyXG4gKi9cbnZhciBPYmplY3RNYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIFByaXZhdGUgY29uc3RydWN0b3IgdG8gcHJldmVudCBpbnN0YW50aWF0aW9uXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE9iamVjdE1hbmFnZXIoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYmplY3Qgb2YgcmVsZXZhbnQgZ2FtZSBvYmplY3RzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlbGV2YW50QnVpbGRpbmdzID0gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgT2JqZWN0TWFuYWdlciBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdE1hbmFnZXJ9IFRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIE9iamVjdE1hbmFnZXIgY2xhc3NcbiAgICAgKiBAbWVtYmVyT2YgT2JqZWN0TWFuYWdlclxuICAgICAqIEBleGFtcGxlIE9iamVjdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICAgICAqL1xuICAgIE9iamVjdE1hbmFnZXIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghT2JqZWN0TWFuYWdlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgT2JqZWN0TWFuYWdlci5pbnN0YW5jZSA9IG5ldyBPYmplY3RNYW5hZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9iamVjdE1hbmFnZXIuaW5zdGFuY2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgYnVpbGRpbmcgZ2FtZSBvYmplY3QgdG8gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55W119IGRhdGEgVGhlIGRhdGEgdG8gY3JlYXRlIHRoZSBidWlsZGluZyBnYW1lIG9iamVjdFxuICAgICAqIEBtZW1iZXJPZiBPYmplY3RNYW5hZ2VyXG4gICAgICogQGV4YW1wbGUgT2JqZWN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLmFkZEJ1aWxkaW5nKFsxMjM0LCAuLi5dKTtcbiAgICAgKi9cbiAgICBPYmplY3RNYW5hZ2VyLmFkZEJ1aWxkaW5nID0gZnVuY3Rpb24gKGRhdGEsIGluZGV4KSB7XG4gICAgICAgIGRhdGEgPSBkYXRhWzBdO1xuICAgICAgICB2YXIgdG1wT2JqID0gbmV3IEJ1aWxkaW5nKGRhdGFbMCArIGluZGV4XSwgZGF0YVsxICsgaW5kZXhdLCBkYXRhWzIgKyBpbmRleF0sIGRhdGFbMyArIGluZGV4XSwgZGF0YVs0ICsgaW5kZXhdLCBkYXRhWzUgKyBpbmRleF0sIEl0ZW1zW2RhdGFbNiArIGluZGV4XV0sIGRhdGFbNyArIGluZGV4XSA+PSAwXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBzaWQ6IGRhdGFbNyArIGluZGV4XSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbCwgZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyh0bXBPYmopO1xuICAgICAgICBPYmplY3RNYW5hZ2VyLkJ1aWxkaW5ncy5wdXNoKHRtcE9iaik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgZ2FtZSBvYmplY3QgZnJvbSB0aGUgY29sbGVjdGlvbiBieSBTSURcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWQgVGhlIFNJRCBvZiB0aGUgZ2FtZSBvYmplY3QgdG8gcmVtb3ZlXG4gICAgICogQG1lbWJlck9mIE9iamVjdE1hbmFnZXJcbiAgICAgKiBAZXhhbXBsZSBPYmplY3RNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVtb3ZlR2FtZU9iamVjdCgxMjMpO1xuICAgICAqL1xuICAgIE9iamVjdE1hbmFnZXIucHJvdG90eXBlLnJlbW92ZUJ1aWxkaW5nID0gZnVuY3Rpb24gKHNpZCkgeyB9O1xuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgZ2FtZSBvYmplY3RzIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBPYmplY3RNYW5hZ2VyXG4gICAgICogQGV4YW1wbGUgT2JqZWN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlbW92ZUFsbE9iamVjdHMoMTApO1xuICAgICAqL1xuICAgIE9iamVjdE1hbmFnZXIucHJvdG90eXBlLnJlbW92ZUFsbEJ1aWxkaW5ncyA9IGZ1bmN0aW9uIChzaWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgT2JqZWN0TWFuYWdlci5CdWlsZGluZ3MuZm9yRWFjaChmdW5jdGlvbiAodG1wT2JqKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoKChfYSA9IHRtcE9iaiA9PT0gbnVsbCB8fCB0bXBPYmogPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRtcE9iai5vd25lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNpZCkgPT09IHNpZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZUJ1aWxkaW5nKHRtcE9iai5zaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIGdhbWUgb2JqZWN0c1xuICAgICAqL1xuICAgIE9iamVjdE1hbmFnZXIuQnVpbGRpbmdzID0gW107XG4gICAgcmV0dXJuIE9iamVjdE1hbmFnZXI7XG59KCkpO1xuZXhwb3J0IHsgT2JqZWN0TWFuYWdlciB9O1xuIiwiLyoqXG4gKiBJbXBvcnRzIHRoZSBtc2dwYWNrIGxpYnJhcnlcbiAqL1xuLy9jb25zdCBtc2dwYWNrID0gcmVxdWlyZShcIm1zZ3BhY2tcIik7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgUGxheWVycyB9IGZyb20gXCIuL1BsYXllcnMvUGxheWVyTWFuYWdlclwiO1xuaW1wb3J0IHsgYmFkV29yZHMgfSBmcm9tIFwiLi9iYWRXb3Jkc1wiO1xuaW1wb3J0IHsgT2JqZWN0TWFuYWdlciB9IGZyb20gXCIuL0J1aWxkaW5ncy9CdWlsZGluZ01hbmFnZXJcIjtcbmltcG9ydCB7IHByb2plY3RpbGVNYW5hZ2VyIH0gZnJvbSBcIi4vUHJvamVjdGlsZXMvUHJvamVjdGlsZU1hbmFnZXJcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gXCIuL05vdGlmaWNhdGlvblwiO1xuaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tIFwiLi9VVElMUy9HZXREaXN0YW5jZVwiO1xuaW1wb3J0IHsgZ2V0RGlyZWN0aW9uIH0gZnJvbSBcIi4vVVRJTFMvR2V0RGlyZWN0aW9uXCI7XG4vKipcbiAqIEEgY2xhc3MgZm9yIGVuY29kaW5nIGFuZCBkZWNvZGluZyBkYXRhIHVzaW5nIE1lc3NhZ2VQYWNrXG4gKi9cbnZhciBNc2dwYWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1zZ3BhY2soKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuY29kZXMgZGF0YSB1c2luZyBNZXNzYWdlUGFja1xuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGRhdGEgVGhlIGRhdGEgdG8gZW5jb2RlXG4gICAgICogQHJldHVybnMge0J1ZmZlcn0gVGhlIGVuY29kZWQgZGF0YVxuICAgICAqL1xuICAgIE1zZ3BhY2sucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBtc2dwYWNrLmVuY29kZShkYXRhKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlY29kZXMgZGF0YSB1c2luZyBNZXNzYWdlUGFja1xuICAgICAqXG4gICAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgVGhlIGRhdGEgdG8gZGVjb2RlXG4gICAgICogQHJldHVybnMge2FueX0gVGhlIGRlY29kZWQgZGF0YVxuICAgICAqL1xuICAgIE1zZ3BhY2sucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBtc2dwYWNrLmRlY29kZShkYXRhKTtcbiAgICB9O1xuICAgIHJldHVybiBNc2dwYWNrO1xufSgpKTtcbi8qKlxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgV2ViU29ja2V0IGNvbm5lY3Rpb25zIGFuZCBzZW5kaW5nL3JlY2VpdmluZyBwYWNrZXRzXG4gKi9cbnZhciBXUyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoV1MsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBXUygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMud3MgPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgcGFja2V0IG92ZXIgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBwYWNrZXRcbiAgICAgKiBAcGFyYW0gey4uLmFueVtdfSBkYXRhIFRoZSBkYXRhIHRvIHNlbmRcbiAgICAgKi9cbiAgICBXUy5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciBkYXRhID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBkYXRhW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy53cykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWypdIFdlYlNvY2tldCBpcyBub3QgaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53cy5zZW5kKHRoaXMuZW5jb2RlKFt0eXBlLCBkYXRhXSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBpbmNvbWluZyBwYWNrZXRzIGZyb20gdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueX0gZGF0YSBUaGUgaW5jb21pbmcgcGFja2V0IGRhdGFcbiAgICAgKi9cbiAgICBXUy5wcm90b3R5cGUuaGFuZGxlUGFja2V0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHRoaXMuZGVjb2RlKGRhdGEpO1xuICAgICAgICB2YXIgdHlwZSA9IHBhcnNlZFswXTtcbiAgICAgICAgdmFyIHBhY2tldERhdGEgPSBwYXJzZWRbMV07XG4gICAgICAgIC8vY29uc29sZS5sb2codHlwZSk7XG4gICAgICAgIGlmICh0eXBlID09PSBcIkFcIikge1xuICAgICAgICAgICAgLy8gU0VUIElOSVQgREFUQTpcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkJcIikge1xuICAgICAgICAgICAgLy8gRElTQ09OTkVDVDpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkRcIikge1xuICAgICAgICAgICAgLy8gQUREIFBMQVlFUjpcbiAgICAgICAgICAgIFBsYXllcnMuYWRkUGxheWVyKHBhY2tldERhdGFbMF1bMV0sIHBhY2tldERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiRVwiKSB7XG4gICAgICAgICAgICAvLyBSRU1PVkUgUExBWUVSOlxuICAgICAgICAgICAgUGxheWVycy5yZW1vdmVQbGF5ZXIocGFja2V0RGF0YVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJQXCIpIHtcbiAgICAgICAgICAgIC8vIE1ZIFBMQVlFUiBERUFUSDpcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcImFcIikge1xuICAgICAgICAgICAgLy8gVVBEQVRFIFBMQVlFUlM6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYWNrZXREYXRhWzBdKTtcbiAgICAgICAgICAgIFBsYXllcnMudXBkYXRlUGxheWVycyhwYWNrZXREYXRhWzBdKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFBsYXllcnMubXlQbGF5ZXIueDIsIFBsYXllcnMubXlQbGF5ZXIueTIpO1xuICAgICAgICAgICAgLy8gdGVtcCBqdXN0IHRvIG1ha2Ugc3VyZSBzaGl0IHdvcmtzXG4gICAgICAgICAgICBQbGF5ZXJzLm15UGxheWVyLmRlbHRhID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkhcIikge1xuICAgICAgICAgICAgLy8gTE9BRCBHQU1FIE9CSkVDVDpcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFja2V0RGF0YS5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0TWFuYWdlci5hZGRCdWlsZGluZyhwYWNrZXREYXRhLCBpKTtcbiAgICAgICAgICAgICAgICBpICs9IDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJLXCIpIHtcbiAgICAgICAgICAgIC8vIEdBVEhFUiBBTklNQVRJT046XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYWNrZXREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIk5cIikge1xuICAgICAgICAgICAgLy8gVVBEQVRFIFBMQVlFUiBWQUxVRVMgKFJFU09VUkNFUyk6XG4gICAgICAgICAgICBpZiAocGFja2V0RGF0YVswXSA9PT0gXCJwb2ludHNcIikge1xuICAgICAgICAgICAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY29yZURpc3BsYXlcIikuaW5uZXJIVE1MID0gU21vb3RoaWUoTWF0aC5yb3VuZChQbGF5ZXJzLm15UGxheWVyLnBvaW50cyksIDFlNik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJPXCIpIHtcbiAgICAgICAgICAgIC8vIFVQREFURSBIRUFMVEg6XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJYXCIpIHtcbiAgICAgICAgICAgIC8vIEFERCBQUk9KRUNUSUxFOlxuICAgICAgICAgICAgcHJvamVjdGlsZU1hbmFnZXIuYWRkUHJvamVjdGlsZShwYWNrZXREYXRhWzBdLCBwYWNrZXREYXRhWzFdLCBwYWNrZXREYXRhWzJdLCBwYWNrZXREYXRhWzNdLCBwYWNrZXREYXRhWzRdLCBwYWNrZXREYXRhWzVdLCBwYWNrZXREYXRhWzZdLCBwYWNrZXREYXRhWzddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIllcIikge1xuICAgICAgICAgICAgLy8gUkVNT1ZFIFBST0pFQ1RJTEU6XG4gICAgICAgICAgICBwcm9qZWN0aWxlTWFuYWdlci5yZW1vdmVQcm9qZWN0aWxlKHBhY2tldERhdGFbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiNlwiKSB7XG4gICAgICAgICAgICAvLyBSRUNFSVZFIENIQVQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYWNrZXREYXRhWzFdKTtcbiAgICAgICAgICAgIGlmIChwYWNrZXREYXRhWzFdLmluY2x1ZGVzKFwiZmVycmlzXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kKFwiNlwiLCBcImZlcnJpcyBpcyBhIHNraWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYWNrZXREYXRhWzFdLmluY2x1ZGVzKFwicGFzaGthXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kKFwiNlwiLCBcInBhc2hrYSBpcyBhIHNraWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBXUztcbn0oTXNncGFjaykpO1xuLyoqXG4gKiBNb25rZXkgcGF0Y2hlcyB0aGUgV2ViU29ja2V0IHByb3RvdHlwZSB0byBhZGQgYSBjdXN0b20gc2VuZCBtZXRob2RcbiAqL1xuV2ViU29ja2V0LnByb3RvdHlwZS5zZW5kMiA9IFdlYlNvY2tldC5wcm90b3R5cGUuc2VuZDsgLy8gc28gaXQgd29uJ3QgY2FsbCBpdHNlbGYgZWFjaCB0aW1lXG5XZWJTb2NrZXQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgcGFyYW0gPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBwYXJhbVtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm1vZCkge1xuICAgICAgICB0aGlzLm1vZCA9IG5ldyBXUygpO1xuICAgICAgICB0aGlzLm1vZC53cyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgX3RoaXMubW9kLmhhbmRsZVBhY2tldHMobXNnLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gQU5USSBQUk9GQU5JVFkgRklMVEVSOlxuICAgIHZhciBkZWNvZGVkUGFja2V0ID0gdGhpcy5tb2QuZGVjb2RlKHBhY2tldCk7XG4gICAgaWYgKGRlY29kZWRQYWNrZXRbMF0gPT09IFwiNlwiICYmIGJhZFdvcmRzLnNvbWUoZnVuY3Rpb24gKHdvcmQpIHsgcmV0dXJuIGRlY29kZWRQYWNrZXRbMV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHdvcmQudG9Mb3dlckNhc2UoKSk7IH0pKSB7XG4gICAgICAgIHZhciBtc2cgPSBkZWNvZGVkUGFja2V0WzFdO1xuICAgICAgICB2YXIgd29yZHMgPSBtc2cuc3BsaXQoJyAnKTtcbiAgICAgICAgdmFyIG5ld1dvcmRzID0gd29yZHMubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZWRXb3JkID0gd29yZDtcbiAgICAgICAgICAgIGJhZFdvcmRzLmZvckVhY2goZnVuY3Rpb24gKGJhZFdvcmQpIHtcbiAgICAgICAgICAgICAgICBpZiAod29yZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJhZFdvcmQudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRXb3JkID0gbW9kaWZpZWRXb3JkLnJlcGxhY2UobmV3IFJlZ0V4cChiYWRXb3JkLCAnZ2knKSwgYmFkV29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGJhZFdvcmQuc2xpY2UoMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1vZGlmaWVkV29yZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBuZXdNc2cgPSBuZXdXb3Jkcy5qb2luKCcgJyk7XG4gICAgICAgIHRoaXMuc2VuZDIodGhpcy5tb2QuZW5jb2RlKFtcIjZcIiwgW25ld01zZ11dKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNlbmQyKHBhY2tldCk7XG4gICAgfVxufTtcbi8qKlxuICogVGhlIEdhbWUgY2xhc3MsIHdoaWNoIGV4dGVuZHMgV1MgYW5kIGFkZHMgZ2FtZS1zcGVjaWZpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXG4gKi9cbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHYW1lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdhbWUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5lbmVtaWVzID0gW107XG4gICAgICAgIF90aGlzLnRlYW1tYXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgR2FtZSBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybnMge0dhbWV9IFRoZSBzaW5nbGV0b24gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBHYW1lLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIUdhbWUuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEdhbWUuaW5zdGFuY2UgPSBuZXcgR2FtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBHYW1lLmluc3RhbmNlO1xuICAgIH07XG4gICAgR2FtZS51cGRhdGVHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoUGxheWVycy5teVBsYXllcikge1xuICAgICAgICAgICAgaWYgKEdhbWUuY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmN0eCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eCA9IEdhbWUuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvbGRDYW1YWSA9IEdhbWUuY2FtWFk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW1EaXN0YW5jZSA9IGdldERpc3RhbmNlKEdhbWUuY2FtWFksIG9sZENhbVhZLCAwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbURpcmVjdGlvbiA9IGdldERpcmVjdGlvbihHYW1lLmNhbVhZLCBvbGRDYW1YWSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW1TcGVlZCA9IE1hdGgubWluKGNhbURpc3RhbmNlICogMC4wMSAqIEdhbWUuZGVsdGEsIGNhbURpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbURpc3RhbmNlID4gMC4wNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgR2FtZS5jYW1YWS54ICs9IGNhbVNwZWVkICogTWF0aC5jb3MoY2FtRGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWUuY2FtWFkueSArPSBjYW1TcGVlZCAqIE1hdGguc2luKGNhbURpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lLmNhbVhZLnggPSBHYW1lLnBsYXllclhZLngyO1xuICAgICAgICAgICAgICAgICAgICAgICAgR2FtZS5jYW1YWS55ID0gR2FtZS5wbGF5ZXJYWS55MjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmF0ZSA9IDE3MDtcbiAgICAgICAgICAgICAgICAgICAgUGxheWVycy5teVBsYXllci5kZWx0YSArPSBHYW1lLmRlbHRhO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG1wUmF0ZSA9IE1hdGgubWluKDEuNywgUGxheWVycy5teVBsYXllci5kZWx0YSAvIHJhdGUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG1wRGlmZiA9IChQbGF5ZXJzLm15UGxheWVyLngyIC0gUGxheWVycy5teVBsYXllci5vbGRYKTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZS5wbGF5ZXJYWS54ID0gUGxheWVycy5teVBsYXllci5vbGRYICsgKHRtcERpZmYgKiB0bXBSYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdG1wRGlmZiA9IChQbGF5ZXJzLm15UGxheWVyLnkyIC0gUGxheWVycy5teVBsYXllci5vbGRZKTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZS5wbGF5ZXJYWS55ID0gUGxheWVycy5teVBsYXllci5vbGRZICsgKHRtcERpZmYgKiB0bXBSYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZS54T2Zmc2V0ID0gR2FtZS5jYW1YWS54IC0gKDE5MjAgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZS55T2Zmc2V0ID0gR2FtZS5jYW1YWS55IC0gKDEwODAgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2ZmMDAwMFwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5hcmMoMjAwIC0gR2FtZS54T2Zmc2V0LCAyMDAgLSBHYW1lLnlPZmZzZXQsIDUwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7IC8vIGFkZGVkIHRoaXMgbGluZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5hcmMoUGxheWVycy5teVBsYXllci54MiAtIEdhbWUueE9mZnNldCwgUGxheWVycy5teVBsYXllci55MiAtIEdhbWUueU9mZnNldCwgNTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgR2FtZS5jYW52YXMgPSBmYWxzZTtcbiAgICBHYW1lLmN0eCA9IGZhbHNlO1xuICAgIEdhbWUuY2FtWFkgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICB9O1xuICAgIEdhbWUucGxheWVyWFkgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICB9O1xuICAgIEdhbWUuZGVsdGEgPSAwO1xuICAgIEdhbWUueE9mZnNldCA9IDA7XG4gICAgR2FtZS55T2Zmc2V0ID0gMDtcbiAgICByZXR1cm4gR2FtZTtcbn0oV1MpKTtcbmV4cG9ydCB7IEdhbWUgfTtcbnZhciBNb2QgPSBHYW1lLmdldEluc3RhbmNlKCk7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIEdhbWUuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lQ2FudmFzXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZU5hbWVcIikuaW5uZXJIVE1MID0gXCJcXG48aW1nIHNyYz1cXFwiaHR0cHM6Ly9jZG4uZ2xpdGNoLmdsb2JhbC8xZDFkYWZhOS1iYTVhLTQ3ZTctYTRlNy1iY2JmMDg1MTU4M2QvJTVCcmVtb3ZhbC5haSU1RF9mNWIwN2JmYi1kMjUwLTRhOGYtODcxNC0yYjVmNGU1YWYzZDItYmFubmVyLnBuZz92PTE3MjAwOTMzMzgyMDFcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNTAwcHg7IGhlaWdodDogMjUwcHhcXFwiPlxcblwiO1xuICAgIC8vIEdBTUUgT1ZFUkxBWTpcbiAgICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5zdHlsZSA9IFwiXFxucG9zaXRpb246IGFic29sdXRlO1xcbnRvcDogMDtcXG5sZWZ0OiAwO1xcbmJhY2tncm91bmQ6IHJnYmEoMCwgMCwgNzAsIDAuMik7XFxud2lkdGg6IDEwMCU7XFxuaGVpZ2h0OiAxMDAlO1xcbnBvaW50ZXItZXZlbnRzOiBub25lO1xcblwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgLy8gVkVSSUZJQ0FUSU9OIFBST01QVDpcbiAgICB2YXIgVmVyaWZpY2F0aW9uUHJvbXB0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBWZXJpZmljYXRpb25Qcm9tcHQoKSB7XG4gICAgICAgIH1cbiAgICAgICAgVmVyaWZpY2F0aW9uUHJvbXB0LnByb3RvdHlwZS5wcmVwYXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ibHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuYmx1ci5zdHlsZS5jc3NUZXh0ID0gXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDQwLCAwLjMpO1xcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xcbiAgICAgIHotaW5kZXg6IDg4ODc7XFxuICAgIFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJsdXIpO1xuICAgICAgICAgICAgdGhpcy5tYWluSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlci5zdHlsZS5jc3NUZXh0ID0gXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIHdpZHRoOiAzNSU7XFxuICAgICAgaGVpZ2h0OiAyMCU7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxODUsIDE4NSwgMTg1LCAwLjk1KTtcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgICBib3JkZXI6IDZweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgei1pbmRleDogODg4ODtcXG4gICAgXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubWFpbkhvbGRlcik7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGUuaW5uZXJIVE1MID0gXCJBdXRoZW50aWNhdGlvbi5cIjtcbiAgICAgICAgICAgIHRoaXMudGl0bGUuc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMzUlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgIGNvbG9yOiAjMDAwO1xcbiAgICAgIGZvbnQ6IDMycHggQXJpYWw7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIFwiO1xuICAgICAgICAgICAgdGhpcy5tYWluSG9sZGVyLmFwcGVuZENoaWxkKHRoaXMudGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIFRva2VuIEhlcmUuLi5cIjtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuMyk7XFxuICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICBib3R0b206IDUlO1xcbiAgICAgIGxlZnQ6IDMlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICBcIjtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGhpcy5jaGVjay5zdHlsZS5jc3NUZXh0ID0gXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiA1JTtcXG4gICAgICByaWdodDogMyU7XFxuICAgICAgd2lkdGg6IDkwcHg7XFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDcsIDExNywgMTkzLCAwLjIpO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250OiAyMHB4IEFyaWFsO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFwiO1xuICAgICAgICAgICAgdGhpcy5jaGVjay5pbm5lckhUTUwgPSBcIlZlcmlmeVwiO1xuICAgICAgICAgICAgdGhpcy5tYWluSG9sZGVyLmFwcGVuZENoaWxkKHRoaXMuY2hlY2spO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVmVyaWZpY2F0aW9uUHJvbXB0O1xuICAgIH0oKSk7XG4gICAgdmFyIHZlcmlmeSA9IG5ldyBWZXJpZmljYXRpb25Qcm9tcHQoKTtcbiAgICAvL3ZlcmlmeS5wcmVwYXJlKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VCYXJCb2R5XCIpLnN0eWxlLnRyYW5zaXRpb24gPSBcIjAuM3MgYWxsXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3R0b21Db250YWluZXJcIikuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3R0b21Db250YWluZXJcIikuc3R5bGUgPSBcIlxcbiAgdG9wOiAyMHB4O1xcbiAgXCI7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aW9uQmFySXRlbVwiKSkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gXCJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICAgIGJvcmRlcjogNnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgXCI7XG4gICAgfSk7XG4gICAgLy8gUkVNT1ZFIE9MRCBVSSBFTEVNRU5UUzpcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFnZVRleHRcIikucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VCYXJDb250YWluZXJcIikucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWVkVGV4dFwiKS5yZW1vdmUoKTtcbiAgICBuZXcgTm90aWZpY2F0aW9uKFwiTW9vTW9vIFRTIExvYWRlZCFcIiwgMjUwMCwgXCJyZ2JhKDQ1LCAxMjEsIDE5OSwgMC40KVwiKTtcbiAgICBuZXcgTm90aWZpY2F0aW9uKFwiV2VsY29tZSBPbmlvblwiLCAyNTAwLCBcInJnYmEoMjAsIDAsIDAsIDAuNilcIik7XG59O1xudmFyIGxhc3RVcGRhdGUgPSAwO1xuZnVuY3Rpb24gTG9vcCgpIHtcbiAgICBHYW1lLmRlbHRhID0gRGF0ZS5ub3coKSAtIGxhc3RVcGRhdGU7XG4gICAgbGFzdFVwZGF0ZSA9IERhdGUubm93KCk7XG4gICAgR2FtZS51cGRhdGVHYW1lKCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShMb29wKTtcbn1cbkxvb3AoKTtcbiIsIi8vc2VsZiBleHBsYW5hdG9yeSAoaG9wZWZ1bGx5KVxuZXhwb3J0IHZhciBzaW4gPSBNYXRoLnNpbiwgY29zID0gTWF0aC5jb3MsIG1pbiA9IE1hdGgubWluLCBtYXggPSBNYXRoLm1heCwgcmFuZG9tID0gTWF0aC5yYW5kb20sIGZsb29yID0gTWF0aC5mbG9vciwgY2VpbCA9IE1hdGguY2VpbCwgcm91bmQgPSBNYXRoLnJvdW5kLCBQSSA9IE1hdGguUEksIHNxcnQgPSBNYXRoLnNxcnQsIGFicyA9IE1hdGguYWJzLCBwb3cgPSBNYXRoLnBvdywgbG9nID0gTWF0aC5sb2csIExOMiA9IE1hdGguTE4yLCBhdGFuMiA9IE1hdGguYXRhbjIsIGh5cG90ID0gTWF0aC5oeXBvdDtcbiIsInZhciBOb3RpZmljYXRpb25NYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vdGlmaWNhdGlvbk1hbmFnZXIoKSB7XG4gICAgfVxuICAgIE5vdGlmaWNhdGlvbk1hbmFnZXIuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTm90aWZpY2F0aW9uTWFuYWdlci5ob2xkZXIuc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xcbiAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgIGhlaWdodDogMjAwJTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgei1pbmRleDogOTk5OTk7XFxuICAgIFwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKE5vdGlmaWNhdGlvbk1hbmFnZXIuaG9sZGVyKTtcbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbk1hbmFnZXIuaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBOb3RpZmljYXRpb25NYW5hZ2VyLm5vdGlmaWNhdGlvbnMgPSBbXTtcbiAgICByZXR1cm4gTm90aWZpY2F0aW9uTWFuYWdlcjtcbn0oKSk7XG52YXIgTm90aWZpY2F0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vdGlmaWNhdGlvbih0ZXh0LCBsaWZlLCBjb2xvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmxpZmUgPSBsaWZlO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gICAgICBiYWNrZ3JvdW5kOiBcIi5jb25jYXQodGhpcy5jb2xvciwgXCI7XFxuICAgICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICBmb250OiAxOHB4IHNhbnMtc2VyaWY7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuMzVweDtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICAgIHRyYW5zaXRpb246IDNzIHRvcCwgMC41cyBvcGFjaXR5O1xcbiAgICAgIGNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDEpO1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgIFwiKTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uaW5uZXJUZXh0ID0gdGhpcy50ZXh0O1xuICAgICAgICBOb3RpZmljYXRpb25NYW5hZ2VyLm5vdGlmaWNhdGlvbnMucHVzaCh0aGlzKTtcbiAgICAgICAgTm90aWZpY2F0aW9uTWFuYWdlci5ob2xkZXIuYXBwZW5kQ2hpbGQodGhpcy5ub3RpZmljYXRpb24pO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLm5vdGlmaWNhdGlvbi5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgICBfdGhpcy5ub3RpZmljYXRpb24uc3R5bGUudG9wID0gXCItMjAwcHhcIjsgLy8gdG8gbWFrZSBpdCBmYWRlIHVwd2FyZHNcbiAgICAgICAgICAgIC8vIG1heWJlIGluIGZ1dHVyZSB3ZSBtYWtlIGl0IHNjYWxlIDAuNzUlXG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIG5vdGlmIGFmdGVyIGEgYml0XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBOb3RpZmljYXRpb25NYW5hZ2VyLmhvbGRlci5yZW1vdmVDaGlsZChfdGhpcy5ub3RpZmljYXRpb24pO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IE5vdGlmaWNhdGlvbk1hbmFnZXIubm90aWZpY2F0aW9ucy5pbmRleE9mKF90aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbk1hbmFnZXIubm90aWZpY2F0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0sIHRoaXMubGlmZSk7XG4gICAgfVxuICAgIHJldHVybiBOb3RpZmljYXRpb247XG59KCkpO1xuZXhwb3J0IHsgTm90aWZpY2F0aW9uIH07XG5Ob3RpZmljYXRpb25NYW5hZ2VyLmluaXQoKTtcbiIsIi8qIFBsYXllciBjbGFzcyAqL1xudmFyIFBsYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQbGF5ZXIoc2lkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2lkID0gc2lkO1xuICAgICAgICB0aGlzLmlzVGVhbSA9IGZ1bmN0aW9uICh0bXBPYmopIHtcbiAgICAgICAgICAgIHJldHVybiAodG1wT2JqLnNpZCA9PT0gX3RoaXMuc2lkIHx8ICh0bXBPYmoudGVhbSAmJiB0bXBPYmoudGVhbSA9PT0gX3RoaXMudGVhbSkpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBJTklUOlxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoaWQsIG5hbWUsIHgsIHksIGRpciwgaGVhbHRoLCBtYXhIZWFsdGgsIHNjYWxlLCBza2luQ29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcjtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgICAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBtYXhIZWFsdGg7XG4gICAgICAgICAgICB0aGlzLmxhc3RIZWFsdGggPSB0aGlzLmhlYWx0aDtcbiAgICAgICAgICAgIHRoaXMub2xkWCA9IDA7XG4gICAgICAgICAgICB0aGlzLm9sZFkgPSAwO1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgICAgICB0aGlzLngyID0geDtcbiAgICAgICAgICAgIHRoaXMueTIgPSB5O1xuICAgICAgICAgICAgdGhpcy54MyA9IDA7XG4gICAgICAgICAgICB0aGlzLnkzID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2tpbkluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMubGFzdFNraW5JbmRleCA9IHRoaXMuc2tpbkluZGV4O1xuICAgICAgICAgICAgdGhpcy50YWlsSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXN0VGFpbEluZGV4ID0gdGhpcy50YWlsSW5kZXg7XG4gICAgICAgICAgICB0aGlzLndlYXBvbkluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMud2VhcG9ucyA9IFswLCAwXTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIFBsYXllcjtcbn0oKSk7XG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsIi8qKlxuICogSW1wb3J0c1xuICovXG5pbXBvcnQgeyBmaW5kUGxheWVyQnlTaWQgfSBmcm9tIFwiLi4vVVRJTFMvRmluZFBsYXllckJ5U0lEXCI7IC8vIEltcG9ydCBmdW5jdGlvbiB0byBmaW5kIGEgcGxheWVyIGJ5IHRoZWlyIFNJRFxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7IC8vIEltcG9ydCBwbGF5ZXIgY2xhc3NcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vR2FtZVwiO1xuLyoqXG4gKiBQbGF5ZXIgTWFuYWdlciBjbGFzc1xuICpcbiAqIFRoaXMgY2xhc3MgbWFuYWdlcyBhIGNvbGxlY3Rpb24gb2YgcGxheWVycyBhbmQgcHJvdmlkZXMgbWV0aG9kcyB0byBhZGQsIHJlbW92ZSwgYW5kIHVwZGF0ZSBwbGF5ZXJzLlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6UGxheWVyc1xuICovXG52YXIgUGxheWVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQbGF5ZXJzKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFBsYXllcnMgY2xhc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbGF5ZXJzfSBUaGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBQbGF5ZXJzIGNsYXNzXG4gICAgICogQG1lbWJlck9mIFBsYXllcnNcbiAgICAgKiBAZXhhbXBsZSBjb25zdCBwbGF5ZXJzID0gUGxheWVycy5nZXRJbnN0YW5jZSgpO1xuICAgICAqL1xuICAgIFBsYXllcnMuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghUGxheWVycy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgUGxheWVycy5pbnN0YW5jZSA9IG5ldyBQbGF5ZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBsYXllcnMuaW5zdGFuY2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgcGxheWVyIHRvIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gU0lEIFRoZSBTSUQgZm9yIHRoZSBwbGF5ZXJcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBkYXRhIFRoZSBwbGF5ZXIncyBkYXRhXG4gICAgICogQG1lbWJlck9mIFBsYXllcnNcbiAgICAgKiBAZXhhbXBsZSBwbGF5ZXJzLmFkZFBsYXllcigxLCB7IG5hbWU6IFwiT25pb25cIiwgc2tpbjogXCJfX3Byb3RvX19cIn0pO1xuICAgICAqL1xuICAgIFBsYXllcnMuYWRkUGxheWVyID0gZnVuY3Rpb24gKFNJRCwgZGF0YSkge1xuICAgICAgICAvKiBEYXRhIGZvcm1hdDpcbiAgICBcbiAgICAgICAgICAwOiB7aWQsIHNpZCwgbmFtZSwgeCwgeSwgc29tZXRoaW5nLCBoZWFsdGgsIHNvbWV0aGluZywgc2NhbGU/LCBzb21ldGhpbmd9XG4gICAgICAgICAgMTogdHJ1ZS9mYWxzZSBmb3IgeWVzL25vIGlzIG1lXG4gICAgICAgICAgKi9cbiAgICAgICAgaWYgKGRhdGFbMV0pIHtcbiAgICAgICAgICAgIC8vIE1ZIFBMQVlFUjpcbiAgICAgICAgICAgIFBsYXllcnMubXlQbGF5ZXIgPSBuZXcgUGxheWVyKFNJRCk7XG4gICAgICAgICAgICBQbGF5ZXJzLnBsYXllcnMucHVzaChQbGF5ZXJzLm15UGxheWVyKTtcbiAgICAgICAgICAgIC8vIElOSVQ6XG4gICAgICAgICAgICBQbGF5ZXJzLm15UGxheWVyLmluaXQoZGF0YVswXVswXSwgZGF0YVswXVsyXSwgZGF0YVswXVszXSwgZGF0YVswXVs0XSwgZGF0YVswXVs1XSwgZGF0YVswXVs2XSwgZGF0YVswXVs3XSwgZGF0YVswXVs4XSwgZGF0YVswXVs5XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdG1wT2JqID0gbmV3IFBsYXllcihTSUQpO1xuICAgICAgICAgICAgUGxheWVycy5wbGF5ZXJzLnB1c2godG1wT2JqKTtcbiAgICAgICAgICAgIHRtcE9iai5pbml0KGRhdGFbMF1bMF0sIGRhdGFbMF1bMl0sIGRhdGFbMF1bM10sIGRhdGFbMF1bNF0sIGRhdGFbMF1bNV0sIGRhdGFbMF1bNl0sIGRhdGFbMF1bN10sIGRhdGFbMF1bOF0sIGRhdGFbMF1bOV0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgcGxheWVyIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWQgVGhlIFNJRCBmb3IgdGhlIHBsYXllciB0byByZW1vdmVcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIHBsYXllcnMucmVtb3ZlUGxheWVyKDEwKTtcbiAgICAgKi9cbiAgICBQbGF5ZXJzLnJlbW92ZVBsYXllciA9IGZ1bmN0aW9uIChzaWQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gUGxheWVycy5wbGF5ZXJzLmluZGV4T2YoUGxheWVycy5wbGF5ZXJzLmZpbmQoZnVuY3Rpb24gKHBsYXllcikgeyByZXR1cm4gcGxheWVyLnNpZCA9PT0gc2lkOyB9KSwgMCk7XG4gICAgICAgIGRlbGV0ZSBQbGF5ZXJzLnBsYXllcnNbaW5kZXhdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGxheWVycyBpbiB0aGUgY29sbGVjdGlvbiBiYXNlZCBvbiBuZXcgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnlbXX0gZGF0YSBUaGUgbmV3IGRhdGEgdG8gdXBkYXRlIHRoZSBwbGF5ZXJzIHdpdGhcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIHBsYXllcnMudXBkYXRlUGxheWVycyh0bXBQbGF5ZXIpO1xuICAgICAqL1xuICAgIFBsYXllcnMudXBkYXRlUGxheWVycyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIFVucmVuZGVyIGFsbCBwbGF5ZXJzIGFuZCByZXJlbmRlciBwbGF5ZXJzIGluIHJhbmdlXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgdG1wUGxheWVyID0gdGhpcy5wbGF5ZXJzW2ldO1xuICAgICAgICAgICAgdG1wUGxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4ICs9IDEzKSB7XG4gICAgICAgICAgICB2YXIgcGxheWVyID0gZmluZFBsYXllckJ5U2lkKGRhdGFbMF0pO1xuICAgICAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgICAgIHBsYXllci50MSA9IHBsYXllci50MiA9PT0gdm9pZCAwID8gRGF0ZS5ub3coKSA6IHBsYXllci50MjtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudDIgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHBsYXllci5vbGRYID0gR2FtZS5wbGF5ZXJYWS54MjtcbiAgICAgICAgICAgICAgICBwbGF5ZXIub2xkWSA9IEdhbWUucGxheWVyWFkueTI7XG4gICAgICAgICAgICAgICAgcGxheWVyLngyID0gZGF0YVtpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgIHBsYXllci55MiA9IGRhdGFbaW5kZXggKyAyXTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuZDEgPSBwbGF5ZXIuZDIgPT09IHZvaWQgMCA/IGRhdGFbaW5kZXggKyAzXSA6IHBsYXllci5kMjtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuZGVsdGEgPSAwO1xuICAgICAgICAgICAgICAgIHBsYXllci53ZWFwb25JbmRleCA9IGRhdGFbaW5kZXggKyA1XTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIud2VhcG9uSW5kZXggPCA5ICYmIChwbGF5ZXIud2VhcG9uc1swXSA9IHBsYXllci53ZWFwb25JbmRleCk7XG4gICAgICAgICAgICAgICAgcGxheWVyLndlYXBvbkluZGV4ID49IDkgJiYgKHBsYXllci53ZWFwb25zWzFdID0gcGxheWVyLndlYXBvbkluZGV4KTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIud2VhcG9uVmFyaWFudCA9IGRhdGFbaW5kZXggKyA2XTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudGVhbSA9IGRhdGFbaW5kZXggKyA3XTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubGFzdFNraW5JbmRleCA9IHBsYXllci5za2luSW5kZXg7XG4gICAgICAgICAgICAgICAgcGxheWVyLnNraW5JbmRleCA9IGRhdGFbaW5kZXggKyA5XTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIubGFzdFRhaWxJbmRleCA9IHBsYXllci50YWlsSW5kZXg7XG4gICAgICAgICAgICAgICAgcGxheWVyLnRhaWxJbmRleCA9IGRhdGFbaW5kZXggKyAxMF07XG4gICAgICAgICAgICAgICAgcGxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBwbGF5ZXJzXG4gICAgICovXG4gICAgUGxheWVycy5wbGF5ZXJzID0gW107XG4gICAgLyoqXG4gICAgICogTXkgcGxheWVyXG4gICAgICovXG4gICAgUGxheWVycy5teVBsYXllciA9IHt9O1xuICAgIHJldHVybiBQbGF5ZXJzO1xufSgpKTtcbmV4cG9ydCB7IFBsYXllcnMgfTtcbiIsImltcG9ydCB7IFByb2plY3RpbGVzIH0gZnJvbSBcIi4uL1VUSUxTL1Byb2plY3RpbGVzXCI7XG5pbXBvcnQgeyBwcm9qZWN0aWxlTWFuYWdlciB9IGZyb20gXCIuL1Byb2plY3RpbGVNYW5hZ2VyXCI7XG52YXIgUHJvamVjdGlsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQcm9qZWN0aWxlKHgsIHksIGRpciwgcmFuZ2UsIHNwZWVkLCBpbmRleCwgb3duZXIsIGlnbm9yZU9iamVjdHMsIGxheWVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZGF0YSA9IFByb2plY3RpbGVzW2luZGV4XTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5kaXIgPSBkaXI7XG4gICAgICAgIHRoaXMucmFuZ2UgPSByYW5nZTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgdGhpcy5pZ25vcmVPYmplY3RzID0gaWdub3JlT2JqZWN0cztcbiAgICAgICAgdGhpcy5zaWQgPSBwcm9qZWN0aWxlTWFuYWdlci5wcm9qZWN0aWxlQ291bnQ7XG4gICAgICAgIHRoaXMubGF5ZXIgPSBsYXllciB8fCB0aGlzLmRhdGEubGF5ZXI7XG4gICAgICAgIHRoaXMuZGlzdGFuY2VQZXJUaWNrID0gUHJvamVjdGlsZXNbaW5kZXhdLmRpc3RQZXJUaWNrO1xuICAgICAgICB0aGlzLnJldHVybk5leHRUaWNrUG9zaXRpb24gPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiB4ICsgX3RoaXMuZGlzdGFuY2VQZXJUaWNrICogTWF0aC5zaW4oX3RoaXMuZGlyKSxcbiAgICAgICAgICAgICAgICB5OiB5ICsgX3RoaXMuZGlzdGFuY2VQZXJUaWNrICogTWF0aC5jb3MoX3RoaXMuZGlyKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBQcm9qZWN0aWxlO1xufSgpKTtcbmV4cG9ydCB7IFByb2plY3RpbGUgfTtcbiIsImltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSBcIi4uL1VUSUxTL0dldERpc3RhbmNlXCI7XG5pbXBvcnQgeyBQcm9qZWN0aWxlIH0gZnJvbSBcIi4vUHJvamVjdGlsZVwiO1xudmFyIHByb2plY3RpbGVNYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHByb2plY3RpbGVNYW5hZ2VyKCkge1xuICAgIH1cbiAgICBwcm9qZWN0aWxlTWFuYWdlci5hZGRQcm9qZWN0aWxlID0gZnVuY3Rpb24gKHgsIHksIGRpciwgcmFuZ2UsIHNwZWVkLCBpbmRleCwgbGF5ZXIsIHNpZCkge1xuICAgICAgICB2YXIgcHJvamVjdGlsZSA9IG5ldyBQcm9qZWN0aWxlKHgsIHksIGRpciwgcmFuZ2UsIHNwZWVkLCBpbmRleCwgbnVsbCwgbnVsbCwgbGF5ZXIpO1xuICAgICAgICBwcm9qZWN0aWxlLnNpZCA9IHNpZDtcbiAgICAgICAgY29uc29sZS53YXJuKHByb2plY3RpbGUpO1xuICAgICAgICBwcm9qZWN0aWxlTWFuYWdlci5wcm9qZWN0aWxlcy5wdXNoKHByb2plY3RpbGUpO1xuICAgICAgICBwcm9qZWN0aWxlTWFuYWdlci5wcm9qZWN0aWxlQ291bnQrKztcbiAgICB9O1xuICAgIHByb2plY3RpbGVNYW5hZ2VyLnJlbW92ZVByb2plY3RpbGUgPSBmdW5jdGlvbiAoU0lEKSB7XG4gICAgICAgIHZhciBpdGVtID0gcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZXMuaW5kZXhPZihwcm9qZWN0aWxlTWFuYWdlci5wcm9qZWN0aWxlcy5maW5kKGZ1bmN0aW9uIChwcm9qKSB7IHJldHVybiBwcm9qLnNpZCA9PT0gU0lEOyB9KSwgMCk7XG4gICAgICAgIGNvbnNvbGUud2Fybihwcm9qZWN0aWxlTWFuYWdlci5wcm9qZWN0aWxlc1tpdGVtXSwgU0lEKTtcbiAgICAgICAgZGVsZXRlIHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVzW2l0ZW1dO1xuICAgICAgICBwcm9qZWN0aWxlTWFuYWdlci5wcm9qZWN0aWxlQ291bnQtLTtcbiAgICB9O1xuICAgIC8vbXVzdCBiZSBjYWxsZWQgZXZlcnkgdGlja1xuICAgIHByb2plY3RpbGVNYW5hZ2VyLnJldHJpZXZlRGFuZ2Vyb3VzUHJvamVjdGlsZXMgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICAgIHZhciBwcm9qZWN0aWxlcyA9IFtdO1xuICAgICAgICAvKlxuICAgICAgICAgICAgb2sgc28gd2UgYXJlIGdvbm5hIGZpbHRlciB0aGlzIHNoaXRcbiAgICAgICAgICAgIGJ5IGRpc3RhbmNlIHRyYXZlbGFibGUgcGVyIHRpY2tcbiAgICAgICAgICAgICsgdGhlIGRpcmVjdGlvbiBvZiB0aGUgcHJvamVjdGlsZVxuICAgIFxuICAgICAgICAgICAgc28gaWYgaXRzIGdvaW5nIHRvIGhpdCB0aGUgcGxheWVyXG4gICAgICAgICAgICB3ZSBjYW4gcmV0dXJuIGl0IGluIGFuIGFycmF5XG4gICAgICAgICAgICBmb3IgZGFtYWdlIHBvdGVudGlhbCBsYXRlclxuICAgICAgICAgICAgYW5kIGFsc28gY29vbCB2aXN1YWxzIHlrXG4gICAgICAgICAgICAqL1xuICAgICAgICAvL3RoZSBjb2RlIGJlbG93IGlzIHZlcnkgYmV0YSwgYW5kIGlzIGp1c3QgYSBwbGFjZWhvbGRlciB0byBtYWtlIGl0IGxvb2sgbGlrZSBpIGRpZCB3b3JrIHRvZGF5XG4gICAgICAgIC8vaW4gdGhlIGZ1dHVyZSwgbWFwIG91dCBhbGwgdGhlIHByb2plY3RpbGVzIHNwZWVkIGFuZCBhc3NpZ24gaXQgd2l0aCB0aGUgcHJvamVjdGlsZSBzcGVlZHMvdGlja1xuICAgICAgICAvL1Byb2plY3RpbGUucHJvamVjdGlsZXMubWFwKChwcm9qZWN0aWxlKSA9PiBwcm9qZWN0aWxlLmRpc3RQZXJUaWNrIC8qICgxZTMgLyA5KSovKTtcbiAgICAgICAgcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvamVjdGlsZSkge1xuICAgICAgICAgICAgaWYgKGdldERpc3RhbmNlKHByb2plY3RpbGUucmV0dXJuTmV4dFRpY2tQb3NpdGlvbihwcm9qZWN0aWxlLngsIHByb2plY3RpbGUueSksIHBsYXllciwgMCwgMikgPD1cbiAgICAgICAgICAgICAgICBwbGF5ZXIuc2NhbGUpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0aWxlcy5wdXNoKHByb2plY3RpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RpbGVzLnNvcnQoZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXREaXN0YW5jZShwbGF5ZXIsIHsgeDogeCwgeTogeSB9LCAyLCAwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBwcm9qZWN0aWxlTWFuYWdlci5wcm9qZWN0aWxlQ291bnQgPSAwO1xuICAgIHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVzID0gW107XG4gICAgcmV0dXJuIHByb2plY3RpbGVNYW5hZ2VyO1xufSgpKTtcbmV4cG9ydCB7IHByb2plY3RpbGVNYW5hZ2VyIH07XG4iLCIvKipcbiAqIEltcG9ydHMgdGhlIFBsYXllcnMgY2xhc3NcbiAqL1xuaW1wb3J0IHsgUGxheWVycyB9IGZyb20gXCIuLi9QbGF5ZXJzL1BsYXllck1hbmFnZXJcIjtcbi8qKlxuICogRmluZHMgYSBwbGF5ZXIgYnkgdGhlaXIgU0lEXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNpZCBUaGUgU0lEIG9mIHRoZSBwbGF5ZXIgdG8gZmluZFxuICogQHJldHVybnMge2FueX0gVGhlIHBsYXllciB3aXRoIHRoZSBtYXRjaGluZyBTSUQsIG9yIHVuZGVmaW5lZCBpZiBub3QgZm91bmRcbiAqIEBtZW1iZXJPZiBtb2R1bGU6RmluZFBsYXllckJ5U0lEXG4gKiBAZXhhbXBsZSBmaW5kUGxheWVyQnlTaWQoMTIzKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQbGF5ZXJCeVNpZChzaWQpIHtcbiAgICAvKipcbiAgICAgKiBVc2VzIHRoZSBmaW5kIG1ldGhvZCB0byBzZWFyY2ggdGhlIHBsYXllcnMgYXJyYXkgZm9yIGEgcGxheWVyIHdpdGggYSBtYXRjaGluZyBTSURcbiAgICAgKi9cbiAgICByZXR1cm4gUGxheWVycy5wbGF5ZXJzLmZpbmQoZnVuY3Rpb24gKHBsYXllcikgeyByZXR1cm4gcGxheWVyLnNpZCA9PT0gc2lkOyB9KTtcbn1cbiIsIi8qKlxuICogSW1wb3J0cyB0aGUgYXRhbjIgZnVuY3Rpb24gZnJvbSB0aGUgTWF0aCBtb2R1bGVcbiAqL1xuaW1wb3J0IHsgYXRhbjIgfSBmcm9tIFwiLi4vTWF0aFwiO1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkaXJlY3Rpb24gZnJvbSBvYmoxIHRvIG9iajJcbiAqXG4gKiBAcGFyYW0ge2FueX0gb2JqMSBUaGUgc291cmNlIG9iamVjdFxuICogQHBhcmFtIHthbnl9IG9iajIgVGhlIHRhcmdldCBvYmplY3RcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBkaXJlY3Rpb24gaW4gcmFkaWFucyBmcm9tIG9iajEgdG8gb2JqMlxuICogQG1lbWJlck9mIG1vZHVsZTpHZXREaXJlY3Rpb25cbiAqIEBleGFtcGxlIGdldERpcmVjdGlvbihwbGF5ZXIsIGVuZW15KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERpcmVjdGlvbihvYmoxLCBvYmoyKSB7XG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgYXRhbjIgZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBkaXJlY3Rpb25cbiAgICAgKiBhdGFuMih5LCB4KSByZXR1cm5zIHRoZSBhbmdsZSBpbiByYWRpYW5zIGZyb20gdGhlIHgtYXhpcyB0byB0aGUgcG9pbnQgKHgsIHkpXG4gICAgICovXG4gICAgcmV0dXJuIGF0YW4yKG9iajEueSAtIG9iajIueSwgb2JqMS54IC0gb2JqMi54KTtcbn1cbi8vdGhpcyBuZWVkcyB0byBiZSByZWRvbmUgdG8gYWNjb3VudCBmb3IgeDIveTJcbiIsIi8qKlxuICogSW1wb3J0cyB0aGUgaHlwb3QgZnVuY3Rpb24gZnJvbSB0aGUgTWF0aCBtb2R1bGVcbiAqL1xuaW1wb3J0IHsgaHlwb3QgfSBmcm9tIFwiLi4vTWF0aFwiO1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBvYmplY3RzXG4gKlxuICogQHBhcmFtIHthbnl9IG9iajEgVGhlIGZpcnN0IG9iamVjdFxuICogQHBhcmFtIHthbnl9IG9iajIgVGhlIHNlY29uZCBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBvYmoxdHlwZSBUaGUgY29vcmRpbmF0ZSB0eXBlIG9mIG9iajEgKG9wdGlvbmFsKVxuICogQHBhcmFtIHtudW1iZXJ9IG9iajJ0eXBlIFRoZSBjb29yZGluYXRlIHR5cGUgb2Ygb2JqMiAob3B0aW9uYWwpXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgZGlzdGFuY2UgYmV0d2VlbiBvYmoxIGFuZCBvYmoyXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkdldERpc3RhbmNlXG4gKiBAZXhhbXBsZSBnZXREaXN0YW5jZShwbGF5ZXIsIGVuZW15LCAyLCAyKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKG9iajEsIG9iajIsIG9iajF0eXBlLCBvYmoydHlwZSkge1xuICAgIC8qKlxuICAgICAqIFVzZXMgdGhlIGh5cG90IGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgZGlzdGFuY2VcbiAgICAgKiBoeXBvdChhLCBiKSByZXR1cm5zIHRoZSBzcXVhcmUgcm9vdCBvZiBhXjIgKyBiXjJcbiAgICAgKlxuICAgICAqIFRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIGFyZSBkeW5hbWljYWxseSBhY2Nlc3NlZCB1c2luZyBicmFja2V0IG5vdGF0aW9uXG4gICAgICogVGhlIHR5cGUgcGFyYW1ldGVycyBhcmUgdXNlZCB0byBhcHBlbmQgYSBzdWZmaXggdG8gdGhlIHByb3BlcnR5IG5hbWVzIChlLmcuIFwieDFcIiBvciBcInkyXCIpXG4gICAgICovXG4gICAgcmV0dXJuIGh5cG90KG9iajFbXCJ4XCIuY29uY2F0KG9iajF0eXBlIHx8IFwiXCIpXSAtIG9iajJbXCJ4XCIuY29uY2F0KG9iajJ0eXBlIHx8IFwiXCIpXSwgb2JqMVtcInlcIi5jb25jYXQob2JqMXR5cGUgfHwgXCJcIildIC0gb2JqMltcInlcIi5jb25jYXQob2JqMnR5cGUgfHwgXCJcIildKTtcbn1cbiIsImV4cG9ydCB2YXIgaXRlbUdyb3VwcyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiBcImZvb2RcIixcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIndhbGxzXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDMwLFxuICAgICAgICBsYXllcjogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6IFwic3Bpa2VzXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDE1LFxuICAgICAgICBsYXllcjogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6IFwibWlsbFwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiA3LFxuICAgICAgICBzYW5kYm94TGltaXQ6IDI5OSxcbiAgICAgICAgbGF5ZXI6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBuYW1lOiBcIm1pbmVcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMSxcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiBcInRyYXBcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogNixcbiAgICAgICAgbGF5ZXI6IC0xLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNixcbiAgICAgICAgbmFtZTogXCJib29zdGVyXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDEyLFxuICAgICAgICBzYW5kYm94TGltaXQ6IDI5OSxcbiAgICAgICAgbGF5ZXI6IC0xLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNyxcbiAgICAgICAgbmFtZTogXCJ0dXJyZXRcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMixcbiAgICAgICAgbGF5ZXI6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA4LFxuICAgICAgICBuYW1lOiBcIndhdGNodG93ZXJcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMTIsXG4gICAgICAgIGxheWVyOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogOSxcbiAgICAgICAgbmFtZTogXCJidWZmXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDQsXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEwLFxuICAgICAgICBuYW1lOiBcInNwYXduXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDEsXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDExLFxuICAgICAgICBuYW1lOiBcInNhcGxpbmdcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMixcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMixcbiAgICAgICAgbmFtZTogXCJibG9ja2VyXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDMsXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEzLFxuICAgICAgICBuYW1lOiBcInRlbGVwb3J0ZXJcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMixcbiAgICAgICAgc2FuZGJveExpbWl0OiAyOTksXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuXTtcbiIsImltcG9ydCB7IGl0ZW1Hcm91cHMgfSBmcm9tIFwiLi9JdGVtR3JvdXBzXCI7XG5leHBvcnQgdmFyIEl0ZW1zID0gW1xuICAgIHtcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMF0sXG4gICAgICAgIG5hbWU6IFwiYXBwbGVcIixcbiAgICAgICAgZGVzYzogXCJyZXN0b3JlcyAyMCBoZWFsdGggd2hlbiBjb25zdW1lZFwiLFxuICAgICAgICByZXE6IFtcImZvb2RcIiwgMTBdLFxuICAgICAgICBjb25zdW1lOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuY2hhbmdlSGVhbHRoKDIwLCB0KTtcbiAgICAgICAgfSxcbiAgICAgICAgaGVhbGluZzogMjAsXG4gICAgICAgIHNjYWxlOiAyMixcbiAgICAgICAgaG9sZE9mZnNldDogMTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogMyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMF0sXG4gICAgICAgIG5hbWU6IFwiY29va2llXCIsXG4gICAgICAgIGRlc2M6IFwicmVzdG9yZXMgNDAgaGVhbHRoIHdoZW4gY29uc3VtZWRcIixcbiAgICAgICAgcmVxOiBbXCJmb29kXCIsIDE1XSxcbiAgICAgICAgY29uc3VtZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LmNoYW5nZUhlYWx0aCg0MCwgdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhlYWxpbmc6IDQwLFxuICAgICAgICBzY2FsZTogMjcsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDE1LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDcsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzBdLFxuICAgICAgICBuYW1lOiBcImNoZWVzZVwiLFxuICAgICAgICBkZXNjOiBcInJlc3RvcmVzIDMwIGhlYWx0aCBhbmQgYW5vdGhlciA1MCBvdmVyIDUgc2Vjb25kc1wiLFxuICAgICAgICByZXE6IFtcImZvb2RcIiwgMjVdLFxuICAgICAgICBjb25zdW1lOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuICgoISF0LmNoYW5nZUhlYWx0aCgzMCwgdCkgfHwgdC5oZWFsdGggPCAxMDApICYmXG4gICAgICAgICAgICAgICAgKCh0LmRtZ092ZXJUaW1lLmRtZyA9IC0xMCksXG4gICAgICAgICAgICAgICAgICAgICh0LmRtZ092ZXJUaW1lLmRvZXIgPSB0KSxcbiAgICAgICAgICAgICAgICAgICAgKHQuZG1nT3ZlclRpbWUudGltZSA9IDUpLFxuICAgICAgICAgICAgICAgICAgICAhMCkpO1xuICAgICAgICB9LFxuICAgICAgICBoZWFsaW5nOiAzMCxcbiAgICAgICAgc2NhbGU6IDI3LFxuICAgICAgICBob2xkT2Zmc2V0OiAxNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMV0sXG4gICAgICAgIG5hbWU6IFwid29vZCB3YWxsXCIsXG4gICAgICAgIGRlc2M6IFwicHJvdmlkZXMgcHJvdGVjdGlvbiBmb3IgeW91ciB2aWxsYWdlXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAxMF0sXG4gICAgICAgIHByb2pEbWc6ICEwLFxuICAgICAgICBoZWFsdGg6IDM4MCxcbiAgICAgICAgc2NhbGU6IDUwLFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDMsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzFdLFxuICAgICAgICBuYW1lOiBcInN0b25lIHdhbGxcIixcbiAgICAgICAgZGVzYzogXCJwcm92aWRlcyBpbXByb3ZlZCBwcm90ZWN0aW9uIGZvciB5b3VyIHZpbGxhZ2VcIixcbiAgICAgICAgcmVxOiBbXCJzdG9uZVwiLCAyNV0sXG4gICAgICAgIGhlYWx0aDogOTAwLFxuICAgICAgICBzY2FsZTogNTAsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgcHJlOiAxLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxXSxcbiAgICAgICAgbmFtZTogXCJjYXN0bGUgd2FsbFwiLFxuICAgICAgICBkZXNjOiBcInByb3ZpZGVzIHBvd2VyZnVsIHByb3RlY3Rpb24gZm9yIHlvdXIgdmlsbGFnZVwiLFxuICAgICAgICByZXE6IFtcInN0b25lXCIsIDM1XSxcbiAgICAgICAgaGVhbHRoOiAxNTAwLFxuICAgICAgICBzY2FsZTogNTIsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzJdLFxuICAgICAgICBuYW1lOiBcInNwaWtlc1wiLFxuICAgICAgICBkZXNjOiBcImRhbWFnZXMgZW5lbWllcyB3aGVuIHRoZXkgdG91Y2ggdGhlbVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMjAsIFwic3RvbmVcIiwgNV0sXG4gICAgICAgIGhlYWx0aDogNDAwLFxuICAgICAgICBkbWc6IDIwLFxuICAgICAgICBzY2FsZTogNDksXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IC0yMyxcbiAgICAgICAgaG9sZE9mZnNldDogOCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDUsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzJdLFxuICAgICAgICBuYW1lOiBcImdyZWF0ZXIgc3Bpa2VzXCIsXG4gICAgICAgIGRlc2M6IFwiZGFtYWdlcyBlbmVtaWVzIHdoZW4gdGhleSB0b3VjaCB0aGVtXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAzMCwgXCJzdG9uZVwiLCAxMF0sXG4gICAgICAgIGhlYWx0aDogNTAwLFxuICAgICAgICBkbWc6IDM1LFxuICAgICAgICBzY2FsZTogNTIsXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IC0yMyxcbiAgICAgICAgaG9sZE9mZnNldDogOCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDksXG4gICAgICAgIHByZTogMSxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMl0sXG4gICAgICAgIG5hbWU6IFwicG9pc29uIHNwaWtlc1wiLFxuICAgICAgICBkZXNjOiBcInBvaXNvbnMgZW5lbWllcyB3aGVuIHRoZXkgdG91Y2ggdGhlbVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMzUsIFwic3RvbmVcIiwgMTVdLFxuICAgICAgICBoZWFsdGg6IDYwMCxcbiAgICAgICAgZG1nOiAzMCxcbiAgICAgICAgcERtZzogNSxcbiAgICAgICAgc2NhbGU6IDUyLFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAtMjMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDgsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA5LFxuICAgICAgICBwcmU6IDIsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzJdLFxuICAgICAgICBuYW1lOiBcInNwaW5uaW5nIHNwaWtlc1wiLFxuICAgICAgICBkZXNjOiBcImRhbWFnZXMgZW5lbWllcyB3aGVuIHRoZXkgdG91Y2ggdGhlbVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMzAsIFwic3RvbmVcIiwgMjBdLFxuICAgICAgICBoZWFsdGg6IDUwMCxcbiAgICAgICAgZG1nOiA0NSxcbiAgICAgICAgdHVyblNwZWVkOiAwLjAwMyxcbiAgICAgICAgc2NhbGU6IDUyLFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAtMjMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDgsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbM10sXG4gICAgICAgIG5hbWU6IFwid2luZG1pbGxcIixcbiAgICAgICAgZGVzYzogXCJnZW5lcmF0ZXMgZ29sZCBvdmVyIHRpbWVcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDUwLCBcInN0b25lXCIsIDEwXSxcbiAgICAgICAgaGVhbHRoOiA0MDAsXG4gICAgICAgIHBwczogMSxcbiAgICAgICAgdHVyblNwZWVkOiAwLjAwMTYsXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IDI1LFxuICAgICAgICBpY29uTGluZU11bHQ6IDEyLFxuICAgICAgICBzY2FsZTogNDUsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA1LFxuICAgICAgICBwcmU6IDEsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzNdLFxuICAgICAgICBuYW1lOiBcImZhc3RlciB3aW5kbWlsbFwiLFxuICAgICAgICBkZXNjOiBcImdlbmVyYXRlcyBtb3JlIGdvbGQgb3ZlciB0aW1lXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCA2MCwgXCJzdG9uZVwiLCAyMF0sXG4gICAgICAgIGhlYWx0aDogNTAwLFxuICAgICAgICBwcHM6IDEuNSxcbiAgICAgICAgdHVyblNwZWVkOiAwLjAwMjUsXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IDI1LFxuICAgICAgICBpY29uTGluZU11bHQ6IDEyLFxuICAgICAgICBzY2FsZTogNDcsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA4LFxuICAgICAgICBwcmU6IDEsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzNdLFxuICAgICAgICBuYW1lOiBcInBvd2VyIG1pbGxcIixcbiAgICAgICAgZGVzYzogXCJnZW5lcmF0ZXMgbW9yZSBnb2xkIG92ZXIgdGltZVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMTAwLCBcInN0b25lXCIsIDUwXSxcbiAgICAgICAgaGVhbHRoOiA4MDAsXG4gICAgICAgIHBwczogMixcbiAgICAgICAgdHVyblNwZWVkOiAwLjAwNSxcbiAgICAgICAgc3ByaXRlUGFkZGluZzogMjUsXG4gICAgICAgIGljb25MaW5lTXVsdDogMTIsXG4gICAgICAgIHNjYWxlOiA0NyxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiA1LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDUsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzRdLFxuICAgICAgICB0eXBlOiAyLFxuICAgICAgICBuYW1lOiBcIm1pbmVcIixcbiAgICAgICAgZGVzYzogXCJhbGxvd3MgeW91IHRvIG1pbmUgc3RvbmVcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDIwLCBcInN0b25lXCIsIDEwMF0sXG4gICAgICAgIGljb25MaW5lTXVsdDogMTIsXG4gICAgICAgIHNjYWxlOiA2NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDUsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzExXSxcbiAgICAgICAgdHlwZTogMCxcbiAgICAgICAgbmFtZTogXCJzYXBsaW5nXCIsXG4gICAgICAgIGRlc2M6IFwiYWxsb3dzIHlvdSB0byBmYXJtIHdvb2RcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDE1MF0sXG4gICAgICAgIGljb25MaW5lTXVsdDogMTIsXG4gICAgICAgIGNvbERpdjogMC41LFxuICAgICAgICBzY2FsZTogMTEwLFxuICAgICAgICBob2xkT2Zmc2V0OiA1MCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC0xNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA0LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s1XSxcbiAgICAgICAgbmFtZTogXCJwaXQgdHJhcFwiLFxuICAgICAgICBkZXNjOiBcInBpdCB0aGF0IHRyYXBzIGVuZW1pZXMgaWYgdGhleSB3YWxrIG92ZXIgaXRcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDMwLCBcInN0b25lXCIsIDMwXSxcbiAgICAgICAgdHJhcDogITAsXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIGhpZGVGcm9tRW5lbXk6ICEwLFxuICAgICAgICBoZWFsdGg6IDUwMCxcbiAgICAgICAgY29sRGl2OiAwLjIsXG4gICAgICAgIHNjYWxlOiA1MCxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA0LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s2XSxcbiAgICAgICAgbmFtZTogXCJib29zdCBwYWRcIixcbiAgICAgICAgZGVzYzogXCJwcm92aWRlcyBib29zdCB3aGVuIHN0ZXBwZWQgb25cIixcbiAgICAgICAgcmVxOiBbXCJzdG9uZVwiLCAyMCwgXCJ3b29kXCIsIDVdLFxuICAgICAgICBpZ25vcmVDb2xsaXNpb246ICEwLFxuICAgICAgICBib29zdFNwZWVkOiAxLjUsXG4gICAgICAgIGhlYWx0aDogMTUwLFxuICAgICAgICBjb2xEaXY6IDAuNyxcbiAgICAgICAgc2NhbGU6IDQ1LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDcsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzddLFxuICAgICAgICBkb1VwZGF0ZTogITAsXG4gICAgICAgIG5hbWU6IFwidHVycmV0XCIsXG4gICAgICAgIGRlc2M6IFwiZGVmZW5zaXZlIHN0cnVjdHVyZSB0aGF0IHNob290cyBhdCBlbmVtaWVzXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAyMDAsIFwic3RvbmVcIiwgMTUwXSxcbiAgICAgICAgaGVhbHRoOiA4MDAsXG4gICAgICAgIHByb2plY3RpbGU6IDEsXG4gICAgICAgIHNob290UmFuZ2U6IDcwMCxcbiAgICAgICAgc2hvb3RSYXRlOiAyMjAwLFxuICAgICAgICBzY2FsZTogNDMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbOF0sXG4gICAgICAgIG5hbWU6IFwicGxhdGZvcm1cIixcbiAgICAgICAgZGVzYzogXCJwbGF0Zm9ybSB0byBzaG9vdCBvdmVyIHdhbGxzIGFuZCBjcm9zcyBvdmVyIHdhdGVyXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAyMF0sXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgaGVhbHRoOiAzMDAsXG4gICAgICAgIHNjYWxlOiA0MyxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s5XSxcbiAgICAgICAgbmFtZTogXCJoZWFsaW5nIHBhZFwiLFxuICAgICAgICBkZXNjOiBcInN0YW5kaW5nIG9uIGl0IHdpbGwgc2xvd2x5IGhlYWwgeW91XCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAzMCwgXCJmb29kXCIsIDEwXSxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgaGVhbENvbDogMTUsXG4gICAgICAgIGhlYWx0aDogNDAwLFxuICAgICAgICBjb2xEaXY6IDAuNyxcbiAgICAgICAgc2NhbGU6IDQ1LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDksXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzEwXSxcbiAgICAgICAgbmFtZTogXCJzcGF3biBwYWRcIixcbiAgICAgICAgZGVzYzogXCJ5b3Ugd2lsbCBzcGF3biBoZXJlIHdoZW4geW91IGRpZSBidXQgaXQgd2lsbCBkaXNzYXBlYXJcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDEwMCwgXCJzdG9uZVwiLCAxMDBdLFxuICAgICAgICBoZWFsdGg6IDQwMCxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgc3Bhd25Qb2ludDogITAsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxMl0sXG4gICAgICAgIG5hbWU6IFwiYmxvY2tlclwiLFxuICAgICAgICBkZXNjOiBcImJsb2NrcyBidWlsZGluZyBpbiByYWRpdXNcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDMwLCBcInN0b25lXCIsIDI1XSxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgYmxvY2tlcjogMzAwLFxuICAgICAgICBoZWFsdGg6IDQwMCxcbiAgICAgICAgY29sRGl2OiAwLjcsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxM10sXG4gICAgICAgIG5hbWU6IFwidGVsZXBvcnRlclwiLFxuICAgICAgICBkZXNjOiBcInRlbGVwb3J0cyB5b3UgdG8gYSByYW5kb20gcG9pbnQgb24gdGhlIG1hcFwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgNjAsIFwic3RvbmVcIiwgNjBdLFxuICAgICAgICBpZ25vcmVDb2xsaXNpb246ICEwLFxuICAgICAgICB0ZWxlcG9ydDogITAsXG4gICAgICAgIGhlYWx0aDogMjAwLFxuICAgICAgICBjb2xEaXY6IDAuNyxcbiAgICAgICAgc2NhbGU6IDQ1LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG5dO1xuIiwiZXhwb3J0IHZhciBQcm9qZWN0aWxlcyA9IFtcbiAgICB7XG4gICAgICAgIGluZHg6IDAsXG4gICAgICAgIGxheWVyOiAwLFxuICAgICAgICBzcmM6IFwiYXJyb3dfMVwiLFxuICAgICAgICBkbWc6IDI1LFxuICAgICAgICBzcGVlZDogMS42LFxuICAgICAgICBzY2FsZTogMTAzLFxuICAgICAgICByYW5nZTogMWUzLFxuICAgICAgICBkaXN0UGVyVGljazogMS42LFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmR4OiAxLFxuICAgICAgICBsYXllcjogMSxcbiAgICAgICAgZG1nOiAyNSxcbiAgICAgICAgc2NhbGU6IDIwLFxuICAgICAgICBkaXN0UGVyVGljazogMS42LFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmR4OiAwLFxuICAgICAgICBsYXllcjogMCxcbiAgICAgICAgc3JjOiBcImFycm93XzFcIixcbiAgICAgICAgZG1nOiAzNSxcbiAgICAgICAgc3BlZWQ6IDIuNSxcbiAgICAgICAgc2NhbGU6IDEwMyxcbiAgICAgICAgcmFuZ2U6IDEyMDAsXG4gICAgICAgIGRpc3RQZXJUaWNrOiAyLjUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZHg6IDAsXG4gICAgICAgIGxheWVyOiAwLFxuICAgICAgICBzcmM6IFwiYXJyb3dfMVwiLFxuICAgICAgICBkbWc6IDMwLFxuICAgICAgICBzcGVlZDogMixcbiAgICAgICAgc2NhbGU6IDEwMyxcbiAgICAgICAgcmFuZ2U6IDEyMDAsXG4gICAgICAgIGRpc3RQZXJUaWNrOiAyLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmR4OiAxLFxuICAgICAgICBsYXllcjogMSxcbiAgICAgICAgZG1nOiAxNixcbiAgICAgICAgc2NhbGU6IDIwLFxuICAgICAgICBkaXN0UGVyVGljazogTmFOLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmR4OiAwLFxuICAgICAgICBsYXllcjogMCxcbiAgICAgICAgc3JjOiBcImJ1bGxldF8xXCIsXG4gICAgICAgIGRtZzogNTAsXG4gICAgICAgIHNwZWVkOiAzLjYsXG4gICAgICAgIHNjYWxlOiAxNjAsXG4gICAgICAgIHJhbmdlOiAxNDAwLFxuICAgICAgICBkaXN0UGVyVGljazogMy42LFxuICAgIH0sXG5dO1xuIiwiZXhwb3J0IHZhciBiYWRXb3JkcyA9IFtcbiAgICBcImFob2xlXCIsXG4gICAgXCJhbnVzXCIsXG4gICAgXCJhc2gwbGVcIixcbiAgICBcImFzaDBsZXNcIixcbiAgICBcImFzaG9sZXNcIixcbiAgICBcImFzc1wiLFxuICAgIFwiQXNzIE1vbmtleVwiLFxuICAgIFwiQXNzZmFjZVwiLFxuICAgIFwiYXNzaDBsZVwiLFxuICAgIFwiYXNzaDBsZXpcIixcbiAgICBcImFzc2hvbGVcIixcbiAgICBcImFzc2hvbGVzXCIsXG4gICAgXCJhc3Nob2x6XCIsXG4gICAgXCJhc3N3aXBlXCIsXG4gICAgXCJhenpob2xlXCIsXG4gICAgXCJiYXNzdGVyZHNcIixcbiAgICBcImJhc3RhcmRcIixcbiAgICBcImJhc3RhcmRzXCIsXG4gICAgXCJiYXN0YXJkelwiLFxuICAgIFwiYmFzdGVyZHNcIixcbiAgICBcImJhc3RlcmR6XCIsXG4gICAgXCJCaWF0Y2hcIixcbiAgICBcImJpdGNoXCIsXG4gICAgXCJiaXRjaGVzXCIsXG4gICAgXCJCbG93IEpvYlwiLFxuICAgIFwiYm9mZmluZ1wiLFxuICAgIFwiYnV0dGhvbGVcIixcbiAgICBcImJ1dHR3aXBlXCIsXG4gICAgXCJjMGNrXCIsXG4gICAgXCJjMGNrc1wiLFxuICAgIFwiYzBrXCIsXG4gICAgXCJDYXJwZXQgTXVuY2hlclwiLFxuICAgIFwiY2F3a1wiLFxuICAgIFwiY2F3a3NcIixcbiAgICBcIkNsaXRcIixcbiAgICBcImNudHNcIixcbiAgICBcImNudHpcIixcbiAgICBcImNvY2tcIixcbiAgICBcImNvY2toZWFkXCIsXG4gICAgXCJjb2NrLWhlYWRcIixcbiAgICBcImNvY2tzXCIsXG4gICAgXCJDb2NrU3Vja2VyXCIsXG4gICAgXCJjb2NrLXN1Y2tlclwiLFxuICAgIFwiY3JhcFwiLFxuICAgIFwiY3VtXCIsXG4gICAgXCJjdW50XCIsXG4gICAgXCJjdW50c1wiLFxuICAgIFwiY3VudHpcIixcbiAgICBcImRpY2tcIixcbiAgICBcImRpbGQwXCIsXG4gICAgXCJkaWxkMHNcIixcbiAgICBcImRpbGRvXCIsXG4gICAgXCJkaWxkb3NcIixcbiAgICBcImRpbGxkMFwiLFxuICAgIFwiZGlsbGQwc1wiLFxuICAgIFwiZG9taW5hdHJpY2tzXCIsXG4gICAgXCJkb21pbmF0cmljc1wiLFxuICAgIFwiZG9taW5hdHJpeFwiLFxuICAgIFwiZHlrZVwiLFxuICAgIFwiZW5lbWFcIixcbiAgICBcImYgdSBjIGtcIixcbiAgICBcImYgdSBjIGsgZSByXCIsXG4gICAgXCJmYWdcIixcbiAgICBcImZhZzF0XCIsXG4gICAgXCJmYWdldFwiLFxuICAgIFwiZmFnZzF0XCIsXG4gICAgXCJmYWdnaXRcIixcbiAgICBcImZhZ2dvdFwiLFxuICAgIFwiZmFnZzB0XCIsXG4gICAgXCJmYWdpdFwiLFxuICAgIFwiZmFnc1wiLFxuICAgIFwiZmFnelwiLFxuICAgIFwiZmFpZ1wiLFxuICAgIFwiZmFpZ3NcIixcbiAgICBcImZhcnRcIixcbiAgICBcImZsaXBwaW5nIHRoZSBiaXJkXCIsXG4gICAgXCJmdWNrXCIsXG4gICAgXCJmdWNrZXJcIixcbiAgICBcImZ1Y2tpblwiLFxuICAgIFwiZnVja2luZ1wiLFxuICAgIFwiZnVja3NcIixcbiAgICBcIkZ1ZGdlIFBhY2tlclwiLFxuICAgIFwiZnVrXCIsXG4gICAgXCJGdWthaFwiLFxuICAgIFwiRnVrZW5cIixcbiAgICBcImZ1a2VyXCIsXG4gICAgXCJGdWtpblwiLFxuICAgIFwiRnVra1wiLFxuICAgIFwiRnVra2FoXCIsXG4gICAgXCJGdWtrZW5cIixcbiAgICBcIkZ1a2tlclwiLFxuICAgIFwiRnVra2luXCIsXG4gICAgXCJnMDBrXCIsXG4gICAgXCJHb2QtZGFtbmVkXCIsXG4gICAgXCJoMDByXCIsXG4gICAgXCJoMGFyXCIsXG4gICAgXCJoMHJlXCIsXG4gICAgXCJoZWxsc1wiLFxuICAgIFwiaG9hclwiLFxuICAgIFwiaG9vclwiLFxuICAgIFwiaG9vcmVcIixcbiAgICBcImphY2tvZmZcIixcbiAgICBcImphcFwiLFxuICAgIFwiamFwc1wiLFxuICAgIFwiamVyay1vZmZcIixcbiAgICBcImppc2ltXCIsXG4gICAgXCJqaXNzXCIsXG4gICAgXCJqaXptXCIsXG4gICAgXCJqaXp6XCIsXG4gICAgXCJrbm9iXCIsXG4gICAgXCJrbm9ic1wiLFxuICAgIFwia25vYnpcIixcbiAgICBcImt1bnRcIixcbiAgICBcImt1bnRzXCIsXG4gICAgXCJrdW50elwiLFxuICAgIFwiTGV6emlhblwiLFxuICAgIFwiTGlwc2hpdHNcIixcbiAgICBcIkxpcHNoaXR6XCIsXG4gICAgXCJtYXNvY2hpc3RcIixcbiAgICBcIm1hc29raXN0XCIsXG4gICAgXCJtYXNzdGVyYmFpdFwiLFxuICAgIFwibWFzc3RyYmFpdFwiLFxuICAgIFwibWFzc3RyYmF0ZVwiLFxuICAgIFwibWFzdGVyYmFpdGVyXCIsXG4gICAgXCJtYXN0ZXJiYXRlXCIsXG4gICAgXCJtYXN0ZXJiYXRlc1wiLFxuICAgIFwiTW90aGEgRnVja2VyXCIsXG4gICAgXCJNb3RoYSBGdWtlclwiLFxuICAgIFwiTW90aGEgRnVra2FoXCIsXG4gICAgXCJNb3RoYSBGdWtrZXJcIixcbiAgICBcIk1vdGhlciBGdWNrZXJcIixcbiAgICBcIk1vdGhlciBGdWthaFwiLFxuICAgIFwiTW90aGVyIEZ1a2VyXCIsXG4gICAgXCJNb3RoZXIgRnVra2FoXCIsXG4gICAgXCJNb3RoZXIgRnVra2VyXCIsXG4gICAgXCJtb3RoZXItZnVja2VyXCIsXG4gICAgXCJNdXRoYSBGdWNrZXJcIixcbiAgICBcIk11dGhhIEZ1a2FoXCIsXG4gICAgXCJNdXRoYSBGdWtlclwiLFxuICAgIFwiTXV0aGEgRnVra2FoXCIsXG4gICAgXCJNdXRoYSBGdWtrZXJcIixcbiAgICBcIm4xZ3JcIixcbiAgICBcIm5hc3R0XCIsXG4gICAgXCJuaWdnZXI7XCIsXG4gICAgXCJuaWd1cjtcIixcbiAgICBcIm5paWdlcjtcIixcbiAgICBcIm5paWdyO1wiLFxuICAgIFwib3JhZmlzXCIsXG4gICAgXCJvcmdhc2ltO1wiLFxuICAgIFwib3JnYXNtXCIsXG4gICAgXCJvcmdhc3VtXCIsXG4gICAgXCJvcmlmYWNlXCIsXG4gICAgXCJvcmlmaWNlXCIsXG4gICAgXCJvcmlmaXNzXCIsXG4gICAgXCJwYWNraVwiLFxuICAgIFwicGFja2llXCIsXG4gICAgXCJwYWNreVwiLFxuICAgIFwicGFraVwiLFxuICAgIFwicGFraWVcIixcbiAgICBcInBha3lcIixcbiAgICBcInBlY2tlclwiLFxuICAgIFwicGVlZW51c1wiLFxuICAgIFwicGVlZW51c3NzXCIsXG4gICAgXCJwZWVudXNcIixcbiAgICBcInBlaW51c1wiLFxuICAgIFwicGVuMXNcIixcbiAgICBcInBlbmFzXCIsXG4gICAgXCJwZW5pc1wiLFxuICAgIFwicGVuaXMtYnJlYXRoXCIsXG4gICAgXCJwZW51c1wiLFxuICAgIFwicGVudXVzXCIsXG4gICAgXCJQaHVjXCIsXG4gICAgXCJQaHVja1wiLFxuICAgIFwiUGh1a1wiLFxuICAgIFwiUGh1a2VyXCIsXG4gICAgXCJQaHVra2VyXCIsXG4gICAgXCJwb2xhY1wiLFxuICAgIFwicG9sYWNrXCIsXG4gICAgXCJwb2xha1wiLFxuICAgIFwiUG9vbmFuaVwiLFxuICAgIFwicHIxY1wiLFxuICAgIFwicHIxY2tcIixcbiAgICBcInByMWtcIixcbiAgICBcInB1c3NlXCIsXG4gICAgXCJwdXNzZWVcIixcbiAgICBcInB1c3N5XCIsXG4gICAgXCJwdXVrZVwiLFxuICAgIFwicHV1a2VyXCIsXG4gICAgXCJxd2VpclwiLFxuICAgIFwicmVja3R1bVwiLFxuICAgIFwicmVjdHVtXCIsXG4gICAgXCJyZXRhcmRcIixcbiAgICBcInNhZGlzdFwiLFxuICAgIFwic2NhbmtcIixcbiAgICBcInNjaGxvbmdcIixcbiAgICBcInNjcmV3aW5nXCIsXG4gICAgXCJzZW1lblwiLFxuICAgIFwic2V4XCIsXG4gICAgXCJzZXh5XCIsXG4gICAgXCJTaCF0XCIsXG4gICAgXCJzaDF0XCIsXG4gICAgXCJzaDF0ZXJcIixcbiAgICBcInNoMXRzXCIsXG4gICAgXCJzaDF0dGVyXCIsXG4gICAgXCJzaDF0elwiLFxuICAgIFwic2hpdFwiLFxuICAgIFwic2hpdHNcIixcbiAgICBcInNoaXR0ZXJcIixcbiAgICBcIlNoaXR0eVwiLFxuICAgIFwiU2hpdHlcIixcbiAgICBcInNoaXR6XCIsXG4gICAgXCJTaHl0XCIsXG4gICAgXCJTaHl0ZVwiLFxuICAgIFwiU2h5dHR5XCIsXG4gICAgXCJTaHl0eVwiLFxuICAgIFwic2thbmNrXCIsXG4gICAgXCJza2Fua1wiLFxuICAgIFwic2thbmtlZVwiLFxuICAgIFwic2thbmtleVwiLFxuICAgIFwic2thbmtzXCIsXG4gICAgXCJTa2Fua3lcIixcbiAgICBcInNsYWdcIixcbiAgICBcInNsdXRcIixcbiAgICBcInNsdXRzXCIsXG4gICAgXCJTbHV0dHlcIixcbiAgICBcInNsdXR6XCIsXG4gICAgXCJzb24tb2YtYS1iaXRjaFwiLFxuICAgIFwidGl0XCIsXG4gICAgXCJ0dXJkXCIsXG4gICAgXCJ2YTFqaW5hXCIsXG4gICAgXCJ2YWcxbmFcIixcbiAgICBcInZhZ2lpbmFcIixcbiAgICBcInZhZ2luYVwiLFxuICAgIFwidmFqMW5hXCIsXG4gICAgXCJ2YWppbmFcIixcbiAgICBcInZ1bGx2YVwiLFxuICAgIFwidnVsdmFcIixcbiAgICBcIncwcFwiLFxuICAgIFwid2gwMHJcIixcbiAgICBcIndoMHJlXCIsXG4gICAgXCJ3aG9yZVwiLFxuICAgIFwieHJhdGVkXCIsXG4gICAgXCJ4eHhcIixcbiAgICBcImIhK2NoXCIsXG4gICAgXCJiaXRjaFwiLFxuICAgIFwiYmxvd2pvYlwiLFxuICAgIFwiY2xpdFwiLFxuICAgIFwiYXJzY2hsb2NoXCIsXG4gICAgXCJmdWNrXCIsXG4gICAgXCJzaGl0XCIsXG4gICAgXCJhc3NcIixcbiAgICBcImFzc2hvbGVcIixcbiAgICBcImIhdGNoXCIsXG4gICAgXCJiMTdjaFwiLFxuICAgIFwiYjF0Y2hcIixcbiAgICBcImJhc3RhcmRcIixcbiAgICBcImJpK2NoXCIsXG4gICAgXCJib2lvbGFzXCIsXG4gICAgXCJidWNldGFcIixcbiAgICBcImMwY2tcIixcbiAgICBcImNhd2tcIixcbiAgICBcImNoaW5rXCIsXG4gICAgXCJjaXBhXCIsXG4gICAgXCJjbGl0c1wiLFxuICAgIFwiY29ja1wiLFxuICAgIFwiY3VtXCIsXG4gICAgXCJjdW50XCIsXG4gICAgXCJkaWxkb1wiLFxuICAgIFwiZGlyc2FcIixcbiAgICBcImVqYWt1bGF0ZVwiLFxuICAgIFwiZmF0YXNzXCIsXG4gICAgXCJmY3VrXCIsXG4gICAgXCJmdWtcIixcbiAgICBcImZ1eDByXCIsXG4gICAgXCJob2VyXCIsXG4gICAgXCJob3JlXCIsXG4gICAgXCJqaXNtXCIsXG4gICAgXCJrYXdrXCIsXG4gICAgXCJsM2l0Y2hcIixcbiAgICBcImwzaStjaFwiLFxuICAgIFwibWFzdHVyYmF0ZVwiLFxuICAgIFwibWFzdGVyYmF0KlwiLFxuICAgIFwibWFzdGVyYmF0M1wiLFxuICAgIFwibW90aGVyZnVja2VyXCIsXG4gICAgXCJzLm8uYi5cIixcbiAgICBcIm1vZm9cIixcbiAgICBcIm5hemlcIixcbiAgICBcIm5pZ2dhXCIsXG4gICAgXCJuaWdnZXJcIixcbiAgICBcIm51dHNhY2tcIixcbiAgICBcInBodWNrXCIsXG4gICAgXCJwaW1waXNcIixcbiAgICBcInB1c3NlXCIsXG4gICAgXCJwdXNzeVwiLFxuICAgIFwic2Nyb3R1bVwiLFxuICAgIFwic2ghdFwiLFxuICAgIFwic2hlbWFsZVwiLFxuICAgIFwic2hpK1wiLFxuICAgIFwic2ghK1wiLFxuICAgIFwic2x1dFwiLFxuICAgIFwic211dFwiLFxuICAgIFwidGVldHNcIixcbiAgICBcInRpdHNcIixcbiAgICBcImJvb2JzXCIsXG4gICAgXCJiMDBic1wiLFxuICAgIFwidGVlelwiLFxuICAgIFwidGVzdGljYWxcIixcbiAgICBcInRlc3RpY2xlXCIsXG4gICAgXCJ0aXR0XCIsXG4gICAgXCJ3MDBzZVwiLFxuICAgIFwiamFja29mZlwiLFxuICAgIFwid2Fua1wiLFxuICAgIFwid2hvYXJcIixcbiAgICBcIndob3JlXCIsXG4gICAgXCIqZGFtblwiLFxuICAgIFwiKmR5a2VcIixcbiAgICBcIipmdWNrKlwiLFxuICAgIFwiKnNoaXQqXCIsXG4gICAgXCJAJCRcIixcbiAgICBcImFtY2lrXCIsXG4gICAgXCJhbmRza290YVwiLFxuICAgIFwiYXJzZSpcIixcbiAgICBcImFzc3JhbW1lclwiLFxuICAgIFwiYXlpclwiLFxuICAgIFwiYmk3Y2hcIixcbiAgICBcImJpdGNoKlwiLFxuICAgIFwiYm9sbG9jaypcIixcbiAgICBcImJyZWFzdHNcIixcbiAgICBcImJ1dHQtcGlyYXRlXCIsXG4gICAgXCJjYWJyb25cIixcbiAgICBcImNhenpvXCIsXG4gICAgXCJjaHJhYVwiLFxuICAgIFwiY2h1alwiLFxuICAgIFwiQ29jaypcIixcbiAgICBcImN1bnQqXCIsXG4gICAgXCJkNG1uXCIsXG4gICAgXCJkYXlnb1wiLFxuICAgIFwiZGVnb1wiLFxuICAgIFwiZGljaypcIixcbiAgICBcImRpa2UqXCIsXG4gICAgXCJkdXBhXCIsXG4gICAgXCJkeml3a2FcIixcbiAgICBcImVqYWNrdWxhdGVcIixcbiAgICBcIkVrcmVtKlwiLFxuICAgIFwiRWt0b1wiLFxuICAgIFwiZW5jdWxlclwiLFxuICAgIFwiZmFlblwiLFxuICAgIFwiZmFnKlwiLFxuICAgIFwiZmFuY3Vsb1wiLFxuICAgIFwiZmFubnlcIixcbiAgICBcImZlY2VzXCIsXG4gICAgXCJmZWdcIixcbiAgICBcIkZlbGNoZXJcIixcbiAgICBcImZpY2tlblwiLFxuICAgIFwiZml0dCpcIixcbiAgICBcIkZsaWtrZXJcIixcbiAgICBcImZvcmVza2luXCIsXG4gICAgXCJGb3R6ZVwiLFxuICAgIFwiRnUoKlwiLFxuICAgIFwiZnVrKlwiLFxuICAgIFwiZnV0a3JldHpuXCIsXG4gICAgXCJnb29rXCIsXG4gICAgXCJndWllbmFcIixcbiAgICBcImgwclwiLFxuICAgIFwiaDR4MHJcIixcbiAgICBcImhlbGxcIixcbiAgICBcImhlbHZldGVcIixcbiAgICBcImhvZXIqXCIsXG4gICAgXCJob25rZXlcIixcbiAgICBcIkh1ZXZvblwiLFxuICAgIFwiaHVpXCIsXG4gICAgXCJpbmp1blwiLFxuICAgIFwiaml6elwiLFxuICAgIFwia2Fua2VyKlwiLFxuICAgIFwia2lrZVwiLFxuICAgIFwia2xvb3R6YWtcIixcbiAgICBcImtyYXV0XCIsXG4gICAgXCJrbnVsbGVcIixcbiAgICBcImt1a1wiLFxuICAgIFwia3Vrc3VnZXJcIixcbiAgICBcIkt1cmFjXCIsXG4gICAgXCJrdXJ3YVwiLFxuICAgIFwia3VzaSpcIixcbiAgICBcImt5cnBhKlwiLFxuICAgIFwibGVzYm9cIixcbiAgICBcIm1hbWhvb25cIixcbiAgICBcIm1hc3R1cmJhdCpcIixcbiAgICBcIm1lcmQqXCIsXG4gICAgXCJtaWJ1blwiLFxuICAgIFwibW9ua2xlaWdoXCIsXG4gICAgXCJtb3VsaWV3b3BcIixcbiAgICBcIm11aWVcIixcbiAgICBcIm11bGtrdVwiLFxuICAgIFwibXVzY2hpXCIsXG4gICAgXCJuYXppc1wiLFxuICAgIFwibmVwZXNhdXJpb1wiLFxuICAgIFwibmlnZ2VyKlwiLFxuICAgIFwib3Jvc3B1XCIsXG4gICAgXCJwYXNrYSpcIixcbiAgICBcInBlcnNlXCIsXG4gICAgXCJwaWNrYVwiLFxuICAgIFwicGllcmRvbCpcIixcbiAgICBcInBpbGx1KlwiLFxuICAgIFwicGltbWVsXCIsXG4gICAgXCJwaXNzKlwiLFxuICAgIFwicGl6ZGFcIixcbiAgICBcInBvb250c2VlXCIsXG4gICAgXCJwb29wXCIsXG4gICAgXCJwb3JuXCIsXG4gICAgXCJwMHJuXCIsXG4gICAgXCJwcjBuXCIsXG4gICAgXCJwcmV0ZWVuXCIsXG4gICAgXCJwdWxhXCIsXG4gICAgXCJwdWxlXCIsXG4gICAgXCJwdXRhXCIsXG4gICAgXCJwdXRvXCIsXG4gICAgXCJxYWhiZWhcIixcbiAgICBcInF1ZWVmKlwiLFxuICAgIFwicmF1dGVuYmVyZ1wiLFxuICAgIFwic2NoYWZmZXJcIixcbiAgICBcInNjaGVpc3MqXCIsXG4gICAgXCJzY2hsYW1wZVwiLFxuICAgIFwic2NobXVja1wiLFxuICAgIFwic2NyZXdcIixcbiAgICBcInNoIXQqXCIsXG4gICAgXCJzaGFybXV0YVwiLFxuICAgIFwic2hhcm11dGVcIixcbiAgICBcInNoaXBhbFwiLFxuICAgIFwic2hpelwiLFxuICAgIFwic2tyaWJ6XCIsXG4gICAgXCJza3Vyd3lzeW5cIixcbiAgICBcInNwaGVuY3RlclwiLFxuICAgIFwic3BpY1wiLFxuICAgIFwic3BpZXJkYWxhalwiLFxuICAgIFwic3Bsb29nZVwiLFxuICAgIFwic3VrYVwiLFxuICAgIFwiYjAwYipcIixcbiAgICBcInRlc3RpY2xlKlwiLFxuICAgIFwidGl0dCpcIixcbiAgICBcInR3YXRcIixcbiAgICBcInZpdHR1XCIsXG4gICAgXCJ3YW5rKlwiLFxuICAgIFwid2V0YmFjaypcIixcbiAgICBcIndpY2hzZXJcIixcbiAgICBcIndvcCpcIixcbiAgICBcInllZFwiLFxuICAgIFwiemFib3VyYWhcIixcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL0dhbWUudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=