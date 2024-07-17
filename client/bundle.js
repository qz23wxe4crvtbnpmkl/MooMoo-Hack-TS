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
/* harmony export */   Game: () => (/* binding */ Game),
/* harmony export */   WS: () => (/* binding */ WS),
/* harmony export */   getInstance: () => (/* binding */ getInstance)
/* harmony export */ });
/* harmony import */ var _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Players/PlayerManager */ "./src/Players/PlayerManager.ts");
/* harmony import */ var _badWords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badWords */ "./src/badWords.ts");
/* harmony import */ var _Buildings_BuildingManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buildings/BuildingManager */ "./src/Buildings/BuildingManager.ts");
/* harmony import */ var _Projectiles_ProjectileManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Projectiles/ProjectileManager */ "./src/Projectiles/ProjectileManager.ts");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Notification */ "./src/Notification.ts");
/* harmony import */ var _UTILS_GetDistance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UTILS/GetDistance */ "./src/UTILS/GetDistance.ts");
/* harmony import */ var _UTILS_GetDirection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UTILS/GetDirection */ "./src/UTILS/GetDirection.ts");
/* harmony import */ var _Math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Math */ "./src/Math.ts");
/* harmony import */ var _Placer_AutoMill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Placer/AutoMill */ "./src/Placer/AutoMill.ts");
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
    function WS() {
        return _super.call(this) || this;
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
            _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.updatePlayers(packetData[0]);
            _Placer_AutoMill__WEBPACK_IMPORTED_MODULE_8__["default"].place();
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
        return Game.instance || (Game.instance = new Game());
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
                    var camSpeed = (0,_Math__WEBPACK_IMPORTED_MODULE_7__.min)(camDistance * 0.01 * Game.delta, camDistance);
                    if (camDistance > 0.05) {
                        Game.camXY.x += camSpeed * Math.cos(camDirection);
                        Game.camXY.y += camSpeed * Math.sin(camDirection);
                    }
                    else {
                        Game.camXY.x = Game.playerXY.x;
                        Game.camXY.y = Game.playerXY.y;
                    }
                    var rate = 170;
                    _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.delta += Game.delta;
                    var tmpRate = (0,_Math__WEBPACK_IMPORTED_MODULE_7__.min)(1.7, _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.delta / rate);
                    var tmpDiff = (_Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.x2 - _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.oldX);
                    Game.playerXY.x = _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.oldX + (tmpDiff * tmpRate);
                    tmpDiff = (_Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.y2 - _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.oldY);
                    Game.playerXY.y = _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer.oldY + (tmpDiff * tmpRate);
                    Game.xOffset = Game.camXY.x - (1920 / 2);
                    Game.yOffset = Game.camXY.y - (1080 / 2);
                    var M = this.ctx;
                    _Buildings_BuildingManager__WEBPACK_IMPORTED_MODULE_2__.ObjectManager.Buildings.forEach(function (building) {
                        M.beginPath();
                        M.fillStyle = "rgba(200, 0, 0, 0.05)";
                        M.arc(building.x - Game.xOffset, building.y - Game.yOffset, building.scale + 5 /* Padding */, 0, _Math__WEBPACK_IMPORTED_MODULE_7__.PI * 2);
                        M.fill();
                    });
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

function getInstance() {
    return new Game();
}
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
window.requestAnimFrame = (function () {
    return (window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (e) {
            window.setTimeout(e, 1e3 / 60);
        });
})();
var lastUpdate = 0;
function Loop() {
    Game.delta = Date.now() - lastUpdate;
    lastUpdate = Date.now();
    Game.updateGame();
    requestAnimFrame(Loop);
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

/***/ "./src/Placer/AutoMill.ts":
/*!********************************!*\
  !*** ./src/Placer/AutoMill.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UTILS_GetDistance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UTILS/GetDistance */ "./src/UTILS/GetDistance.ts");
/* harmony import */ var _UTILS_GetDirection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UTILS/GetDirection */ "./src/UTILS/GetDirection.ts");
/* harmony import */ var _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Players/PlayerManager */ "./src/Players/PlayerManager.ts");
/* harmony import */ var _Place__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Place */ "./src/Placer/Place.ts");




var AutoMill = /** @class */ (function () {
    function AutoMill() {
    }
    AutoMill.place = function () {
        if ((0,_UTILS_GetDistance__WEBPACK_IMPORTED_MODULE_0__.getDistance)(_Players_PlayerManager__WEBPACK_IMPORTED_MODULE_2__.Players.myPlayer, AutoMill.lastPos, 2, 0) > 100) {
            var dir = (0,_UTILS_GetDirection__WEBPACK_IMPORTED_MODULE_1__.getDirection)(_Players_PlayerManager__WEBPACK_IMPORTED_MODULE_2__.Players.myPlayer, AutoMill.lastPos);
            _Place__WEBPACK_IMPORTED_MODULE_3__["default"].place(3, dir - 1.25);
            _Place__WEBPACK_IMPORTED_MODULE_3__["default"].place(3, dir);
            _Place__WEBPACK_IMPORTED_MODULE_3__["default"].place(3, dir + 1.25);
            AutoMill.lastPos = {
                x: _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_2__.Players.myPlayer.x2,
                y: _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_2__.Players.myPlayer.y2
            };
        }
    };
    AutoMill.lastPos = {
        x: 0,
        y: 0
    };
    return AutoMill;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoMill);


/***/ }),

/***/ "./src/Placer/Place.ts":
/*!*****************************!*\
  !*** ./src/Placer/Place.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Players/PlayerManager */ "./src/Players/PlayerManager.ts");
/* harmony import */ var _UTILS_Packets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UTILS/Packets */ "./src/UTILS/Packets.ts");


var Placer = /** @class */ (function () {
    function Placer() {
    }
    Placer.place = function (objType, dir) {
        var weaponIndx = _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer;
        _UTILS_Packets__WEBPACK_IMPORTED_MODULE_1__.Packets.Equip(objType, false);
        _UTILS_Packets__WEBPACK_IMPORTED_MODULE_1__.Packets.sendBuild(dir);
        _UTILS_Packets__WEBPACK_IMPORTED_MODULE_1__.Packets.Equip(weaponIndx, true);
    };
    Placer.placementsThisTick = 0;
    return Placer;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Placer);


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
            this.oldX = x;
            this.oldY = y;
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
                player.x2 = data[index + 1];
                player.y2 = data[index + 2];
                //player.oldX = player.x2;
                //player.oldY = player.y2;
                player.oldX = _Game__WEBPACK_IMPORTED_MODULE_2__.Game.playerXY.x;
                player.oldY = _Game__WEBPACK_IMPORTED_MODULE_2__.Game.playerXY.y;
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
    return (0,_Math__WEBPACK_IMPORTED_MODULE_0__.atan2)(obj1.y2 - obj2.y, obj1.x2 - obj2.x);
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

/***/ "./src/UTILS/Packets.ts":
/*!******************************!*\
  !*** ./src/UTILS/Packets.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Packets: () => (/* binding */ Packets)
/* harmony export */ });
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Game */ "./src/Game.ts");

var ws = (0,_Game__WEBPACK_IMPORTED_MODULE_0__.getInstance)();
var SendHit = /** @class */ (function () {
    function SendHit() {
    }
    SendHit.sendHit = function (yesno) {
        if (yesno !== SendHit.hasHit) {
            SendHit.hasHit = yesno;
            ws.send("K", 1);
        }
    };
    SendHit.hasHit = false;
    return SendHit;
}());
var Packets = {
    Equip: function (index, isWeapon) {
        ws.send("G", index, isWeapon);
    },
    sendMovementDir: function (dir) {
        ws.send("a", dir);
    },
    resetMovementDir: function () {
        ws.send("e");
    },
    sendHit: SendHit.sendHit,
    lockDir: function () {
        ws.send("K", 0);
    },
    sendChat: function (msg) {
        ws.send("6", msg);
    },
    sendUpgrade: function (indx) {
        ws.send("H", indx);
    },
    createClan: function (name) {
        ws.send("L", name);
    },
    acceptPlayerIntoClan: function (sid) {
        ws.send("b", sid);
    },
    pingServer: function () {
        ws.send("0");
    },
    sendDir: function (dir) {
        ws.send("D", dir);
    },
    spawnPlayer: function (name, moofoll, skin) {
        ws.send("M", {
            name: name,
            moofoll: moofoll,
            skin: skin
        });
    },
    sendBuild: function (dir) {
        ws.send("d", 1, dir, 1);
    }
};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3VUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaGNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBRU5BO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0J1aWxkaW5ncy9CdWlsZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQnVpbGRpbmdzL0J1aWxkaW5nTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTWF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGFjZXIvQXV0b01pbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYWNlci9QbGFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxheWVycy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllcnMvUGxheWVyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdGlsZXMvUHJvamVjdGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdGlsZXMvUHJvamVjdGlsZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VUSUxTL0ZpbmRQbGF5ZXJCeVNJRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVVRJTFMvR2V0RGlyZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9VVElMUy9HZXREaXN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVVRJTFMvSXRlbUdyb3Vwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVVRJTFMvSXRlbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VUSUxTL1BhY2tldHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VUSUxTL1Byb2plY3RpbGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWRXb3Jkcy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmluZFBsYXllckJ5U2lkIH0gZnJvbSBcIi4uL1VUSUxTL0ZpbmRQbGF5ZXJCeVNJRFwiO1xuLyogQnVpbGRpbmcgY2xhc3MgKi9cbnZhciBCdWlsZGluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCdWlsZGluZyhzaWQsIHgsIHksIGRpciwgc2NhbGUsIHR5cGUsIGRhdGEsIG93bmVyLCBpc0Zha2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zaWQgPSBzaWQ7XG4gICAgICAgIGRhdGEgPSBkYXRhIHx8IHt9OyAvLyBzYWZlIGhvbGRlciBpbiBjYXNlIGl0J3MgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQ7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuZGlyID0gZGlyO1xuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZ3JvdXAgPSBkYXRhLmdyb3VwO1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgICAgIHRoaXMuaXNGYWtlID0gaXNGYWtlO1xuICAgICAgICB0aGlzLmlzQWxpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMud2lnZ2xlID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaXNJdGVtID0gZGF0YS5pZCAhPT0gbnVsbDtcbiAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gZGF0YS50cmFwID8gXCJ0cmFwXCIgOiBkYXRhLmRtZyA/IFwiZG1nXCIgOiBkYXRhLnRlbGVwb3J0ID8gXCJ0ZWxlcG9ydGVyXCIgOiBudWxsO1xuICAgICAgICB0aGlzLm1heEhlYWx0aCA9IGRhdGEuaGVhbHRoO1xuICAgICAgICB0aGlzLmJ1aWxkSGVhbHRoID0gdGhpcy5tYXhIZWFsdGg7XG4gICAgICAgIHRoaXMuaXNUZWFtT2JqZWN0ID0gZnVuY3Rpb24gKHRtcE9iaikge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgcmV0dXJuIHRtcE9iai5zaWQgPT09ICgoX2EgPSBfdGhpcy5vd25lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNpZCkgfHwgdG1wT2JqLmlzVGVhbShmaW5kUGxheWVyQnlTaWQodG1wT2JqKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBCdWlsZGluZztcbn0oKSk7XG5leHBvcnQgeyBCdWlsZGluZyB9O1xuIiwiLyoqXG4gKiBJbXBvcnRzXG4gKi9cbmltcG9ydCB7IEJ1aWxkaW5nIH0gZnJvbSBcIi4vQnVpbGRpbmdcIjsgLy8gSW1wb3J0IEJ1aWxkaW5nIGNsYXNzXG5pbXBvcnQgeyBJdGVtcyB9IGZyb20gXCIuLi9VVElMUy9JdGVtc1wiOyAvLyBJbXBvcnQgR2FtZSBJdGVtc1xuLyoqXG4gKiBCdWlsZGluZyBNYW5hZ2VyIGNsYXNzXG4gKlxuICogVGhpcyBjbGFzcyBtYW5hZ2VzIGEgY29sbGVjdGlvbiBvZiBnYW1lIG9iamVjdHMgYW5kIHByb3ZpZGVzIG1ldGhvZHMgdG8gYWRkLCByZW1vdmUsIGFuZCBjbGVhciB0aGVtLlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6T2JqZWN0TWFuYWdlclxuICovXG52YXIgT2JqZWN0TWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBQcml2YXRlIGNvbnN0cnVjdG9yIHRvIHByZXZlbnQgaW5zdGFudGlhdGlvblxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBPYmplY3RNYW5hZ2VyKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogT2JqZWN0IG9mIHJlbGV2YW50IGdhbWUgb2JqZWN0c1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZWxldmFudEJ1aWxkaW5ncyA9IFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIE9iamVjdE1hbmFnZXIgY2xhc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3RNYW5hZ2VyfSBUaGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBPYmplY3RNYW5hZ2VyIGNsYXNzXG4gICAgICogQG1lbWJlck9mIE9iamVjdE1hbmFnZXJcbiAgICAgKiBAZXhhbXBsZSBPYmplY3RNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICAgKi9cbiAgICBPYmplY3RNYW5hZ2VyLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIU9iamVjdE1hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIE9iamVjdE1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgT2JqZWN0TWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3RNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGJ1aWxkaW5nIGdhbWUgb2JqZWN0IHRvIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBkYXRhIFRoZSBkYXRhIHRvIGNyZWF0ZSB0aGUgYnVpbGRpbmcgZ2FtZSBvYmplY3RcbiAgICAgKiBAbWVtYmVyT2YgT2JqZWN0TWFuYWdlclxuICAgICAqIEBleGFtcGxlIE9iamVjdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZGRCdWlsZGluZyhbMTIzNCwgLi4uXSk7XG4gICAgICovXG4gICAgT2JqZWN0TWFuYWdlci5hZGRCdWlsZGluZyA9IGZ1bmN0aW9uIChkYXRhLCBpbmRleCkge1xuICAgICAgICBkYXRhID0gZGF0YVswXTtcbiAgICAgICAgdmFyIHRtcE9iaiA9IG5ldyBCdWlsZGluZyhkYXRhWzAgKyBpbmRleF0sIGRhdGFbMSArIGluZGV4XSwgZGF0YVsyICsgaW5kZXhdLCBkYXRhWzMgKyBpbmRleF0sIGRhdGFbNCArIGluZGV4XSwgZGF0YVs1ICsgaW5kZXhdLCBJdGVtc1tkYXRhWzYgKyBpbmRleF1dLCBkYXRhWzcgKyBpbmRleF0gPj0gMFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgc2lkOiBkYXRhWzcgKyBpbmRleF0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IG51bGwsIGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2codG1wT2JqKTtcbiAgICAgICAgT2JqZWN0TWFuYWdlci5CdWlsZGluZ3MucHVzaCh0bXBPYmopO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGdhbWUgb2JqZWN0IGZyb20gdGhlIGNvbGxlY3Rpb24gYnkgU0lEXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lkIFRoZSBTSUQgb2YgdGhlIGdhbWUgb2JqZWN0IHRvIHJlbW92ZVxuICAgICAqIEBtZW1iZXJPZiBPYmplY3RNYW5hZ2VyXG4gICAgICogQGV4YW1wbGUgT2JqZWN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlbW92ZUdhbWVPYmplY3QoMTIzKTtcbiAgICAgKi9cbiAgICBPYmplY3RNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVCdWlsZGluZyA9IGZ1bmN0aW9uIChzaWQpIHsgfTtcbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGdhbWUgb2JqZWN0cyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgT2JqZWN0TWFuYWdlclxuICAgICAqIEBleGFtcGxlIE9iamVjdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZW1vdmVBbGxPYmplY3RzKDEwKTtcbiAgICAgKi9cbiAgICBPYmplY3RNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVBbGxCdWlsZGluZ3MgPSBmdW5jdGlvbiAoc2lkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIE9iamVjdE1hbmFnZXIuQnVpbGRpbmdzLmZvckVhY2goZnVuY3Rpb24gKHRtcE9iaikge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKCgoX2EgPSB0bXBPYmogPT09IG51bGwgfHwgdG1wT2JqID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0bXBPYmoub3duZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zaWQpID09PSBzaWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVCdWlsZGluZyh0bXBPYmouc2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBnYW1lIG9iamVjdHNcbiAgICAgKi9cbiAgICBPYmplY3RNYW5hZ2VyLkJ1aWxkaW5ncyA9IFtdO1xuICAgIHJldHVybiBPYmplY3RNYW5hZ2VyO1xufSgpKTtcbmV4cG9ydCB7IE9iamVjdE1hbmFnZXIgfTtcbiIsIi8qKlxuICogSW1wb3J0cyB0aGUgbXNncGFjayBsaWJyYXJ5XG4gKi9cbi8vY29uc3QgbXNncGFjayA9IHJlcXVpcmUoXCJtc2dwYWNrXCIpO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IFBsYXllcnMgfSBmcm9tIFwiLi9QbGF5ZXJzL1BsYXllck1hbmFnZXJcIjtcbmltcG9ydCB7IGJhZFdvcmRzIH0gZnJvbSBcIi4vYmFkV29yZHNcIjtcbmltcG9ydCB7IE9iamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9CdWlsZGluZ3MvQnVpbGRpbmdNYW5hZ2VyXCI7XG5pbXBvcnQgeyBwcm9qZWN0aWxlTWFuYWdlciB9IGZyb20gXCIuL1Byb2plY3RpbGVzL1Byb2plY3RpbGVNYW5hZ2VyXCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tIFwiLi9Ob3RpZmljYXRpb25cIjtcbmltcG9ydCB7IGdldERpc3RhbmNlIH0gZnJvbSBcIi4vVVRJTFMvR2V0RGlzdGFuY2VcIjtcbmltcG9ydCB7IGdldERpcmVjdGlvbiB9IGZyb20gXCIuL1VUSUxTL0dldERpcmVjdGlvblwiO1xuaW1wb3J0IHsgbWluIH0gZnJvbSBcIi4vTWF0aFwiO1xuaW1wb3J0IHsgUEkgfSBmcm9tIFwiLi9NYXRoXCI7XG5pbXBvcnQgQXV0b01pbGwgZnJvbSBcIi4vUGxhY2VyL0F1dG9NaWxsXCI7XG4vKipcbiAqIEEgY2xhc3MgZm9yIGVuY29kaW5nIGFuZCBkZWNvZGluZyBkYXRhIHVzaW5nIE1lc3NhZ2VQYWNrXG4gKi9cbnZhciBNc2dwYWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1zZ3BhY2soKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuY29kZXMgZGF0YSB1c2luZyBNZXNzYWdlUGFja1xuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGRhdGEgVGhlIGRhdGEgdG8gZW5jb2RlXG4gICAgICogQHJldHVybnMge0J1ZmZlcn0gVGhlIGVuY29kZWQgZGF0YVxuICAgICAqL1xuICAgIE1zZ3BhY2sucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBtc2dwYWNrLmVuY29kZShkYXRhKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlY29kZXMgZGF0YSB1c2luZyBNZXNzYWdlUGFja1xuICAgICAqXG4gICAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgVGhlIGRhdGEgdG8gZGVjb2RlXG4gICAgICogQHJldHVybnMge2FueX0gVGhlIGRlY29kZWQgZGF0YVxuICAgICAqL1xuICAgIE1zZ3BhY2sucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBtc2dwYWNrLmRlY29kZShkYXRhKTtcbiAgICB9O1xuICAgIHJldHVybiBNc2dwYWNrO1xufSgpKTtcbi8qKlxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgV2ViU29ja2V0IGNvbm5lY3Rpb25zIGFuZCBzZW5kaW5nL3JlY2VpdmluZyBwYWNrZXRzXG4gKi9cbnZhciBXUyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoV1MsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gV1MoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIHBhY2tldCBvdmVyIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgcGFja2V0XG4gICAgICogQHBhcmFtIHsuLi5hbnlbXX0gZGF0YSBUaGUgZGF0YSB0byBzZW5kXG4gICAgICovXG4gICAgV1MucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgZGF0YVtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMud3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlsqXSBXZWJTb2NrZXQgaXMgbm90IGluaXRpYWxpemVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud3Muc2VuZCh0aGlzLmVuY29kZShbdHlwZSwgZGF0YV0pKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgaW5jb21pbmcgcGFja2V0cyBmcm9tIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGRhdGEgVGhlIGluY29taW5nIHBhY2tldCBkYXRhXG4gICAgICovXG4gICAgV1MucHJvdG90eXBlLmhhbmRsZVBhY2tldHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gICAgICAgIHZhciBwYXJzZWQgPSB0aGlzLmRlY29kZShkYXRhKTtcbiAgICAgICAgdmFyIHR5cGUgPSBwYXJzZWRbMF07XG4gICAgICAgIHZhciBwYWNrZXREYXRhID0gcGFyc2VkWzFdO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJBXCIpIHtcbiAgICAgICAgICAgIC8vIFNFVCBJTklUIERBVEE6XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJCXCIpIHtcbiAgICAgICAgICAgIC8vIERJU0NPTk5FQ1Q6XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJEXCIpIHtcbiAgICAgICAgICAgIC8vIEFERCBQTEFZRVI6XG4gICAgICAgICAgICBQbGF5ZXJzLmFkZFBsYXllcihwYWNrZXREYXRhWzBdWzFdLCBwYWNrZXREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkVcIikge1xuICAgICAgICAgICAgLy8gUkVNT1ZFIFBMQVlFUjpcbiAgICAgICAgICAgIFBsYXllcnMucmVtb3ZlUGxheWVyKHBhY2tldERhdGFbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiUFwiKSB7XG4gICAgICAgICAgICAvLyBNWSBQTEFZRVIgREVBVEg6XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgIC8vIFVQREFURSBQTEFZRVJTOlxuICAgICAgICAgICAgUGxheWVycy51cGRhdGVQbGF5ZXJzKHBhY2tldERhdGFbMF0pO1xuICAgICAgICAgICAgQXV0b01pbGwucGxhY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkhcIikge1xuICAgICAgICAgICAgLy8gTE9BRCBHQU1FIE9CSkVDVDpcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFja2V0RGF0YS5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0TWFuYWdlci5hZGRCdWlsZGluZyhwYWNrZXREYXRhLCBpKTtcbiAgICAgICAgICAgICAgICBpICs9IDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJLXCIpIHtcbiAgICAgICAgICAgIC8vIEdBVEhFUiBBTklNQVRJT046XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYWNrZXREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIk5cIikge1xuICAgICAgICAgICAgLy8gVVBEQVRFIFBMQVlFUiBWQUxVRVMgKFJFU09VUkNFUyk6XG4gICAgICAgICAgICBpZiAocGFja2V0RGF0YVswXSA9PT0gXCJwb2ludHNcIikge1xuICAgICAgICAgICAgICAgIC8vZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzY29yZURpc3BsYXlcIikuaW5uZXJIVE1MID0gU21vb3RoaWUoTWF0aC5yb3VuZChQbGF5ZXJzLm15UGxheWVyLnBvaW50cyksIDFlNik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJPXCIpIHtcbiAgICAgICAgICAgIC8vIFVQREFURSBIRUFMVEg6XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJYXCIpIHtcbiAgICAgICAgICAgIC8vIEFERCBQUk9KRUNUSUxFOlxuICAgICAgICAgICAgcHJvamVjdGlsZU1hbmFnZXIuYWRkUHJvamVjdGlsZShwYWNrZXREYXRhWzBdLCBwYWNrZXREYXRhWzFdLCBwYWNrZXREYXRhWzJdLCBwYWNrZXREYXRhWzNdLCBwYWNrZXREYXRhWzRdLCBwYWNrZXREYXRhWzVdLCBwYWNrZXREYXRhWzZdLCBwYWNrZXREYXRhWzddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIllcIikge1xuICAgICAgICAgICAgLy8gUkVNT1ZFIFBST0pFQ1RJTEU6XG4gICAgICAgICAgICBwcm9qZWN0aWxlTWFuYWdlci5yZW1vdmVQcm9qZWN0aWxlKHBhY2tldERhdGFbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiNlwiKSB7XG4gICAgICAgICAgICAvLyBSRUNFSVZFIENIQVQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYWNrZXREYXRhWzFdKTtcbiAgICAgICAgICAgIGlmIChwYWNrZXREYXRhWzFdLmluY2x1ZGVzKFwiZmVycmlzXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kKFwiNlwiLCBcImZlcnJpcyBpcyBhIHNraWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYWNrZXREYXRhWzFdLmluY2x1ZGVzKFwicGFzaGthXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kKFwiNlwiLCBcInBhc2hrYSBpcyBhIHNraWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBXUztcbn0oTXNncGFjaykpO1xuZXhwb3J0IHsgV1MgfTtcbi8qKlxuICogTW9ua2V5IHBhdGNoZXMgdGhlIFdlYlNvY2tldCBwcm90b3R5cGUgdG8gYWRkIGEgY3VzdG9tIHNlbmQgbWV0aG9kXG4gKi9cbldlYlNvY2tldC5wcm90b3R5cGUuc2VuZDIgPSBXZWJTb2NrZXQucHJvdG90eXBlLnNlbmQ7IC8vIHNvIGl0IHdvbid0IGNhbGwgaXRzZWxmIGVhY2ggdGltZVxuV2ViU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIHBhcmFtID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgcGFyYW1bX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGlmICghdGhpcy5tb2QpIHtcbiAgICAgICAgdGhpcy5tb2QgPSBuZXcgV1MoKTtcbiAgICAgICAgdGhpcy5tb2Qud3MgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgICAgIF90aGlzLm1vZC5oYW5kbGVQYWNrZXRzKG1zZy5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEFOVEkgUFJPRkFOSVRZIEZJTFRFUjpcbiAgICB2YXIgZGVjb2RlZFBhY2tldCA9IHRoaXMubW9kLmRlY29kZShwYWNrZXQpO1xuICAgIGlmIChkZWNvZGVkUGFja2V0WzBdID09PSBcIjZcIiAmJiBiYWRXb3Jkcy5zb21lKGZ1bmN0aW9uICh3b3JkKSB7IHJldHVybiBkZWNvZGVkUGFja2V0WzFdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh3b3JkLnRvTG93ZXJDYXNlKCkpOyB9KSkge1xuICAgICAgICB2YXIgbXNnID0gZGVjb2RlZFBhY2tldFsxXTtcbiAgICAgICAgdmFyIHdvcmRzID0gbXNnLnNwbGl0KCcgJyk7XG4gICAgICAgIHZhciBuZXdXb3JkcyA9IHdvcmRzLm1hcChmdW5jdGlvbiAod29yZCkge1xuICAgICAgICAgICAgdmFyIG1vZGlmaWVkV29yZCA9IHdvcmQ7XG4gICAgICAgICAgICBiYWRXb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChiYWRXb3JkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdvcmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhiYWRXb3JkLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkV29yZCA9IG1vZGlmaWVkV29yZC5yZXBsYWNlKG5ldyBSZWdFeHAoYmFkV29yZCwgJ2dpJyksIGJhZFdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBiYWRXb3JkLnNsaWNlKDEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBtb2RpZmllZFdvcmQ7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbmV3TXNnID0gbmV3V29yZHMuam9pbignICcpO1xuICAgICAgICB0aGlzLnNlbmQyKHRoaXMubW9kLmVuY29kZShbXCI2XCIsIFtuZXdNc2ddXSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZW5kMihwYWNrZXQpO1xuICAgIH1cbn07XG4vKipcbiAqIFRoZSBHYW1lIGNsYXNzLCB3aGljaCBleHRlbmRzIFdTIGFuZCBhZGRzIGdhbWUtc3BlY2lmaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kc1xuICovXG52YXIgR2FtZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoR2FtZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHYW1lKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZW5lbWllcyA9IFtdO1xuICAgICAgICBfdGhpcy50ZWFtbWF0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIEdhbWUgY2xhc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtHYW1lfSBUaGUgc2luZ2xldG9uIGluc3RhbmNlXG4gICAgICovXG4gICAgR2FtZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEdhbWUuaW5zdGFuY2UgfHwgKEdhbWUuaW5zdGFuY2UgPSBuZXcgR2FtZSgpKTtcbiAgICB9O1xuICAgIEdhbWUudXBkYXRlR2FtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKFBsYXllcnMubXlQbGF5ZXIpIHtcbiAgICAgICAgICAgIGlmIChHYW1lLmNhbnZhcykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jdHgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHggPSBHYW1lLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2xkQ2FtWFkgPSBHYW1lLmNhbVhZO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FtRGlzdGFuY2UgPSBnZXREaXN0YW5jZShHYW1lLmNhbVhZLCBvbGRDYW1YWSwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW1EaXJlY3Rpb24gPSBnZXREaXJlY3Rpb24oR2FtZS5jYW1YWSwgb2xkQ2FtWFkpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FtU3BlZWQgPSBtaW4oY2FtRGlzdGFuY2UgKiAwLjAxICogR2FtZS5kZWx0YSwgY2FtRGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FtRGlzdGFuY2UgPiAwLjA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lLmNhbVhZLnggKz0gY2FtU3BlZWQgKiBNYXRoLmNvcyhjYW1EaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgR2FtZS5jYW1YWS55ICs9IGNhbVNwZWVkICogTWF0aC5zaW4oY2FtRGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWUuY2FtWFkueCA9IEdhbWUucGxheWVyWFkueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWUuY2FtWFkueSA9IEdhbWUucGxheWVyWFkueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcmF0ZSA9IDE3MDtcbiAgICAgICAgICAgICAgICAgICAgUGxheWVycy5teVBsYXllci5kZWx0YSArPSBHYW1lLmRlbHRhO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG1wUmF0ZSA9IG1pbigxLjcsIFBsYXllcnMubXlQbGF5ZXIuZGVsdGEgLyByYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcERpZmYgPSAoUGxheWVycy5teVBsYXllci54MiAtIFBsYXllcnMubXlQbGF5ZXIub2xkWCk7XG4gICAgICAgICAgICAgICAgICAgIEdhbWUucGxheWVyWFkueCA9IFBsYXllcnMubXlQbGF5ZXIub2xkWCArICh0bXBEaWZmICogdG1wUmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRtcERpZmYgPSAoUGxheWVycy5teVBsYXllci55MiAtIFBsYXllcnMubXlQbGF5ZXIub2xkWSk7XG4gICAgICAgICAgICAgICAgICAgIEdhbWUucGxheWVyWFkueSA9IFBsYXllcnMubXlQbGF5ZXIub2xkWSArICh0bXBEaWZmICogdG1wUmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIEdhbWUueE9mZnNldCA9IEdhbWUuY2FtWFkueCAtICgxOTIwIC8gMik7XG4gICAgICAgICAgICAgICAgICAgIEdhbWUueU9mZnNldCA9IEdhbWUuY2FtWFkueSAtICgxMDgwIC8gMik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBNID0gdGhpcy5jdHg7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdE1hbmFnZXIuQnVpbGRpbmdzLmZvckVhY2goZnVuY3Rpb24gKGJ1aWxkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBNLmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgTS5maWxsU3R5bGUgPSBcInJnYmEoMjAwLCAwLCAwLCAwLjA1KVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgTS5hcmMoYnVpbGRpbmcueCAtIEdhbWUueE9mZnNldCwgYnVpbGRpbmcueSAtIEdhbWUueU9mZnNldCwgYnVpbGRpbmcuc2NhbGUgKyA1IC8qIFBhZGRpbmcgKi8sIDAsIFBJICogMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBNLmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBHYW1lLmNhbnZhcyA9IGZhbHNlO1xuICAgIEdhbWUuY3R4ID0gZmFsc2U7XG4gICAgR2FtZS5jYW1YWSA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH07XG4gICAgR2FtZS5wbGF5ZXJYWSA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH07XG4gICAgR2FtZS5kZWx0YSA9IDA7XG4gICAgR2FtZS54T2Zmc2V0ID0gMDtcbiAgICBHYW1lLnlPZmZzZXQgPSAwO1xuICAgIHJldHVybiBHYW1lO1xufShXUykpO1xuZXhwb3J0IHsgR2FtZSB9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbmNlKCkge1xuICAgIHJldHVybiBuZXcgR2FtZSgpO1xufVxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBHYW1lLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUNhbnZhc1wiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVOYW1lXCIpLmlubmVySFRNTCA9IFwiXFxuPGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmdsaXRjaC5nbG9iYWwvMWQxZGFmYTktYmE1YS00N2U3LWE0ZTctYmNiZjA4NTE1ODNkLyU1QnJlbW92YWwuYWklNURfZjViMDdiZmItZDI1MC00YThmLTg3MTQtMmI1ZjRlNWFmM2QyLWJhbm5lci5wbmc/dj0xNzIwMDkzMzM4MjAxXFxcIiBzdHlsZT1cXFwid2lkdGg6IDUwMHB4OyBoZWlnaHQ6IDI1MHB4XFxcIj5cXG5cIjtcbiAgICAvLyBHQU1FIE9WRVJMQVk6XG4gICAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXkuc3R5bGUgPSBcIlxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IDA7XFxubGVmdDogMDtcXG5iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDcwLCAwLjIpO1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwJTtcXG5wb2ludGVyLWV2ZW50czogbm9uZTtcXG5cIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIC8vIFZFUklGSUNBVElPTiBQUk9NUFQ6XG4gICAgdmFyIFZlcmlmaWNhdGlvblByb21wdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gVmVyaWZpY2F0aW9uUHJvbXB0KCkge1xuICAgICAgICB9XG4gICAgICAgIFZlcmlmaWNhdGlvblByb21wdC5wcm90b3R5cGUucHJlcGFyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuYmx1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLmJsdXIuc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCA0MCwgMC4zKTtcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcXG4gICAgICB6LWluZGV4OiA4ODg3O1xcbiAgICBcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ibHVyKTtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLm1haW5Ib2xkZXIuc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICB3aWR0aDogMzUlO1xcbiAgICAgIGhlaWdodDogMjAlO1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTg1LCAxODUsIDE4NSwgMC45NSk7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgICAgYm9yZGVyOiA2cHggc29saWQgbGlnaHRncmV5O1xcbiAgICAgIHotaW5kZXg6IDg4ODg7XFxuICAgIFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1haW5Ib2xkZXIpO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLnRpdGxlLmlubmVySFRNTCA9IFwiQXV0aGVudGljYXRpb24uXCI7XG4gICAgICAgICAgICB0aGlzLnRpdGxlLnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDM1JTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogODBweDtcXG4gICAgICBjb2xvcjogIzAwMDtcXG4gICAgICBmb250OiAzMnB4IEFyaWFsO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBcIjtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlci5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBUb2tlbiBIZXJlLi4uXCI7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjMpO1xcbiAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgYm90dG9tOiA1JTtcXG4gICAgICBsZWZ0OiAzJTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgXCI7XG4gICAgICAgICAgICB0aGlzLm1haW5Ib2xkZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2suc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogNSU7XFxuICAgICAgcmlnaHQ6IDMlO1xcbiAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ3LCAxMTcsIDE5MywgMC4yKTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udDogMjBweCBBcmlhbDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcIjtcbiAgICAgICAgICAgIHRoaXMuY2hlY2suaW5uZXJIVE1MID0gXCJWZXJpZnlcIjtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlci5hcHBlbmRDaGlsZCh0aGlzLmNoZWNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFZlcmlmaWNhdGlvblByb21wdDtcbiAgICB9KCkpO1xuICAgIHZhciB2ZXJpZnkgPSBuZXcgVmVyaWZpY2F0aW9uUHJvbXB0KCk7XG4gICAgLy92ZXJpZnkucHJlcGFyZSgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlQmFyQm9keVwiKS5zdHlsZS50cmFuc2l0aW9uID0gXCIwLjNzIGFsbFwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm90dG9tQ29udGFpbmVyXCIpLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm90dG9tQ29udGFpbmVyXCIpLnN0eWxlID0gXCJcXG4gIHRvcDogMjBweDtcXG4gIFwiO1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGlvbkJhckl0ZW1cIikpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IFwiXFxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgICBib3JkZXI6IDZweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIFwiO1xuICAgIH0pO1xuICAgIC8vIFJFTU9WRSBPTEQgVUkgRUxFTUVOVFM6XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZ2VUZXh0XCIpLnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlQmFyQ29udGFpbmVyXCIpLnJlbW92ZSgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGllZFRleHRcIikucmVtb3ZlKCk7XG4gICAgbmV3IE5vdGlmaWNhdGlvbihcIk1vb01vbyBUUyBMb2FkZWQhXCIsIDI1MDAsIFwicmdiYSg0NSwgMTIxLCAxOTksIDAuNClcIik7XG4gICAgbmV3IE5vdGlmaWNhdGlvbihcIldlbGNvbWUgT25pb25cIiwgMjUwMCwgXCJyZ2JhKDIwLCAwLCAwLCAwLjYpXCIpO1xufTtcbndpbmRvdy5yZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChlLCAxZTMgLyA2MCk7XG4gICAgICAgIH0pO1xufSkoKTtcbnZhciBsYXN0VXBkYXRlID0gMDtcbmZ1bmN0aW9uIExvb3AoKSB7XG4gICAgR2FtZS5kZWx0YSA9IERhdGUubm93KCkgLSBsYXN0VXBkYXRlO1xuICAgIGxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuICAgIEdhbWUudXBkYXRlR2FtZSgpO1xuICAgIHJlcXVlc3RBbmltRnJhbWUoTG9vcCk7XG59XG5Mb29wKCk7XG4iLCIvL3NlbGYgZXhwbGFuYXRvcnkgKGhvcGVmdWxseSlcbmV4cG9ydCB2YXIgc2luID0gTWF0aC5zaW4sIGNvcyA9IE1hdGguY29zLCBtaW4gPSBNYXRoLm1pbiwgbWF4ID0gTWF0aC5tYXgsIHJhbmRvbSA9IE1hdGgucmFuZG9tLCBmbG9vciA9IE1hdGguZmxvb3IsIGNlaWwgPSBNYXRoLmNlaWwsIHJvdW5kID0gTWF0aC5yb3VuZCwgUEkgPSBNYXRoLlBJLCBzcXJ0ID0gTWF0aC5zcXJ0LCBhYnMgPSBNYXRoLmFicywgcG93ID0gTWF0aC5wb3csIGxvZyA9IE1hdGgubG9nLCBMTjIgPSBNYXRoLkxOMiwgYXRhbjIgPSBNYXRoLmF0YW4yLCBoeXBvdCA9IE1hdGguaHlwb3Q7XG4iLCJ2YXIgTm90aWZpY2F0aW9uTWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb3RpZmljYXRpb25NYW5hZ2VyKCkge1xuICAgIH1cbiAgICBOb3RpZmljYXRpb25NYW5hZ2VyLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIE5vdGlmaWNhdGlvbk1hbmFnZXIuaG9sZGVyLnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICBoZWlnaHQ6IDIwMCU7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICAgIHotaW5kZXg6IDk5OTk5O1xcbiAgICBcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChOb3RpZmljYXRpb25NYW5hZ2VyLmhvbGRlcik7XG4gICAgfTtcbiAgICBOb3RpZmljYXRpb25NYW5hZ2VyLmhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgTm90aWZpY2F0aW9uTWFuYWdlci5ub3RpZmljYXRpb25zID0gW107XG4gICAgcmV0dXJuIE5vdGlmaWNhdGlvbk1hbmFnZXI7XG59KCkpO1xudmFyIE5vdGlmaWNhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb3RpZmljYXRpb24odGV4dCwgbGlmZSwgY29sb3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5saWZlID0gbGlmZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uLnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICAgICAgYmFja2dyb3VuZDogXCIuY29uY2F0KHRoaXMuY29sb3IsIFwiO1xcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgZm9udDogMThweCBzYW5zLXNlcmlmO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxLjM1cHg7XFxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgICB0cmFuc2l0aW9uOiAzcyB0b3AsIDAuNXMgb3BhY2l0eTtcXG4gICAgICBjb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LCAxKTtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcbiAgICBcIik7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uLmlubmVyVGV4dCA9IHRoaXMudGV4dDtcbiAgICAgICAgTm90aWZpY2F0aW9uTWFuYWdlci5ub3RpZmljYXRpb25zLnB1c2godGhpcyk7XG4gICAgICAgIE5vdGlmaWNhdGlvbk1hbmFnZXIuaG9sZGVyLmFwcGVuZENoaWxkKHRoaXMubm90aWZpY2F0aW9uKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5ub3RpZmljYXRpb24uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgICAgX3RoaXMubm90aWZpY2F0aW9uLnN0eWxlLnRvcCA9IFwiLTIwMHB4XCI7IC8vIHRvIG1ha2UgaXQgZmFkZSB1cHdhcmRzXG4gICAgICAgICAgICAvLyBtYXliZSBpbiBmdXR1cmUgd2UgbWFrZSBpdCBzY2FsZSAwLjc1JVxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBub3RpZiBhZnRlciBhIGJpdFxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uTWFuYWdlci5ob2xkZXIucmVtb3ZlQ2hpbGQoX3RoaXMubm90aWZpY2F0aW9uKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBOb3RpZmljYXRpb25NYW5hZ2VyLm5vdGlmaWNhdGlvbnMuaW5kZXhPZihfdGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBOb3RpZmljYXRpb25NYW5hZ2VyLm5vdGlmaWNhdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9LCB0aGlzLmxpZmUpO1xuICAgIH1cbiAgICByZXR1cm4gTm90aWZpY2F0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE5vdGlmaWNhdGlvbiB9O1xuTm90aWZpY2F0aW9uTWFuYWdlci5pbml0KCk7XG4iLCJpbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gXCIuLi9VVElMUy9HZXREaXN0YW5jZVwiO1xuaW1wb3J0IHsgZ2V0RGlyZWN0aW9uIH0gZnJvbSBcIi4uL1VUSUxTL0dldERpcmVjdGlvblwiO1xuaW1wb3J0IHsgUGxheWVycyB9IGZyb20gXCIuLi9QbGF5ZXJzL1BsYXllck1hbmFnZXJcIjtcbmltcG9ydCBQbGFjZXIgZnJvbSBcIi4vUGxhY2VcIjtcbnZhciBBdXRvTWlsbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBdXRvTWlsbCgpIHtcbiAgICB9XG4gICAgQXV0b01pbGwucGxhY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChnZXREaXN0YW5jZShQbGF5ZXJzLm15UGxheWVyLCBBdXRvTWlsbC5sYXN0UG9zLCAyLCAwKSA+IDEwMCkge1xuICAgICAgICAgICAgdmFyIGRpciA9IGdldERpcmVjdGlvbihQbGF5ZXJzLm15UGxheWVyLCBBdXRvTWlsbC5sYXN0UG9zKTtcbiAgICAgICAgICAgIFBsYWNlci5wbGFjZSgzLCBkaXIgLSAxLjI1KTtcbiAgICAgICAgICAgIFBsYWNlci5wbGFjZSgzLCBkaXIpO1xuICAgICAgICAgICAgUGxhY2VyLnBsYWNlKDMsIGRpciArIDEuMjUpO1xuICAgICAgICAgICAgQXV0b01pbGwubGFzdFBvcyA9IHtcbiAgICAgICAgICAgICAgICB4OiBQbGF5ZXJzLm15UGxheWVyLngyLFxuICAgICAgICAgICAgICAgIHk6IFBsYXllcnMubXlQbGF5ZXIueTJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEF1dG9NaWxsLmxhc3RQb3MgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICB9O1xuICAgIHJldHVybiBBdXRvTWlsbDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBBdXRvTWlsbDtcbiIsImltcG9ydCB7IFBsYXllcnMgfSBmcm9tIFwiLi4vUGxheWVycy9QbGF5ZXJNYW5hZ2VyXCI7XG5pbXBvcnQgeyBQYWNrZXRzIH0gZnJvbSBcIi4uL1VUSUxTL1BhY2tldHNcIjtcbnZhciBQbGFjZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGxhY2VyKCkge1xuICAgIH1cbiAgICBQbGFjZXIucGxhY2UgPSBmdW5jdGlvbiAob2JqVHlwZSwgZGlyKSB7XG4gICAgICAgIHZhciB3ZWFwb25JbmR4ID0gUGxheWVycy5teVBsYXllcjtcbiAgICAgICAgUGFja2V0cy5FcXVpcChvYmpUeXBlLCBmYWxzZSk7XG4gICAgICAgIFBhY2tldHMuc2VuZEJ1aWxkKGRpcik7XG4gICAgICAgIFBhY2tldHMuRXF1aXAod2VhcG9uSW5keCwgdHJ1ZSk7XG4gICAgfTtcbiAgICBQbGFjZXIucGxhY2VtZW50c1RoaXNUaWNrID0gMDtcbiAgICByZXR1cm4gUGxhY2VyO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFBsYWNlcjtcbiIsIi8qIFBsYXllciBjbGFzcyAqL1xudmFyIFBsYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQbGF5ZXIoc2lkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2lkID0gc2lkO1xuICAgICAgICB0aGlzLmlzVGVhbSA9IGZ1bmN0aW9uICh0bXBPYmopIHtcbiAgICAgICAgICAgIHJldHVybiAodG1wT2JqLnNpZCA9PT0gX3RoaXMuc2lkIHx8ICh0bXBPYmoudGVhbSAmJiB0bXBPYmoudGVhbSA9PT0gX3RoaXMudGVhbSkpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBJTklUOlxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoaWQsIG5hbWUsIHgsIHksIGRpciwgaGVhbHRoLCBtYXhIZWFsdGgsIHNjYWxlLCBza2luQ29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcjtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgICAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBtYXhIZWFsdGg7XG4gICAgICAgICAgICB0aGlzLmxhc3RIZWFsdGggPSB0aGlzLmhlYWx0aDtcbiAgICAgICAgICAgIHRoaXMub2xkWCA9IHg7XG4gICAgICAgICAgICB0aGlzLm9sZFkgPSB5O1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgICAgICB0aGlzLngyID0geDtcbiAgICAgICAgICAgIHRoaXMueTIgPSB5O1xuICAgICAgICAgICAgdGhpcy54MyA9IDA7XG4gICAgICAgICAgICB0aGlzLnkzID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2tpbkluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMubGFzdFNraW5JbmRleCA9IHRoaXMuc2tpbkluZGV4O1xuICAgICAgICAgICAgdGhpcy50YWlsSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXN0VGFpbEluZGV4ID0gdGhpcy50YWlsSW5kZXg7XG4gICAgICAgICAgICB0aGlzLndlYXBvbkluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMud2VhcG9ucyA9IFswLCAwXTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIFBsYXllcjtcbn0oKSk7XG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsIi8qKlxuICogSW1wb3J0c1xuICovXG5pbXBvcnQgeyBmaW5kUGxheWVyQnlTaWQgfSBmcm9tIFwiLi4vVVRJTFMvRmluZFBsYXllckJ5U0lEXCI7IC8vIEltcG9ydCBmdW5jdGlvbiB0byBmaW5kIGEgcGxheWVyIGJ5IHRoZWlyIFNJRFxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7IC8vIEltcG9ydCBwbGF5ZXIgY2xhc3NcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vR2FtZVwiO1xuLyoqXG4gKiBQbGF5ZXIgTWFuYWdlciBjbGFzc1xuICpcbiAqIFRoaXMgY2xhc3MgbWFuYWdlcyBhIGNvbGxlY3Rpb24gb2YgcGxheWVycyBhbmQgcHJvdmlkZXMgbWV0aG9kcyB0byBhZGQsIHJlbW92ZSwgYW5kIHVwZGF0ZSBwbGF5ZXJzLlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6UGxheWVyc1xuICovXG52YXIgUGxheWVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQbGF5ZXJzKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFBsYXllcnMgY2xhc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbGF5ZXJzfSBUaGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBQbGF5ZXJzIGNsYXNzXG4gICAgICogQG1lbWJlck9mIFBsYXllcnNcbiAgICAgKiBAZXhhbXBsZSBjb25zdCBwbGF5ZXJzID0gUGxheWVycy5nZXRJbnN0YW5jZSgpO1xuICAgICAqL1xuICAgIFBsYXllcnMuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghUGxheWVycy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgUGxheWVycy5pbnN0YW5jZSA9IG5ldyBQbGF5ZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBsYXllcnMuaW5zdGFuY2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgcGxheWVyIHRvIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gU0lEIFRoZSBTSUQgZm9yIHRoZSBwbGF5ZXJcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBkYXRhIFRoZSBwbGF5ZXIncyBkYXRhXG4gICAgICogQG1lbWJlck9mIFBsYXllcnNcbiAgICAgKiBAZXhhbXBsZSBwbGF5ZXJzLmFkZFBsYXllcigxLCB7IG5hbWU6IFwiT25pb25cIiwgc2tpbjogXCJfX3Byb3RvX19cIn0pO1xuICAgICAqL1xuICAgIFBsYXllcnMuYWRkUGxheWVyID0gZnVuY3Rpb24gKFNJRCwgZGF0YSkge1xuICAgICAgICAvKiBEYXRhIGZvcm1hdDpcbiAgICBcbiAgICAgICAgICAwOiB7aWQsIHNpZCwgbmFtZSwgeCwgeSwgc29tZXRoaW5nLCBoZWFsdGgsIHNvbWV0aGluZywgc2NhbGU/LCBzb21ldGhpbmd9XG4gICAgICAgICAgMTogdHJ1ZS9mYWxzZSBmb3IgeWVzL25vIGlzIG1lXG4gICAgICAgICAgKi9cbiAgICAgICAgaWYgKGRhdGFbMV0pIHtcbiAgICAgICAgICAgIC8vIE1ZIFBMQVlFUjpcbiAgICAgICAgICAgIFBsYXllcnMubXlQbGF5ZXIgPSBuZXcgUGxheWVyKFNJRCk7XG4gICAgICAgICAgICBQbGF5ZXJzLnBsYXllcnMucHVzaChQbGF5ZXJzLm15UGxheWVyKTtcbiAgICAgICAgICAgIC8vIElOSVQ6XG4gICAgICAgICAgICBQbGF5ZXJzLm15UGxheWVyLmluaXQoZGF0YVswXVswXSwgZGF0YVswXVsyXSwgZGF0YVswXVszXSwgZGF0YVswXVs0XSwgZGF0YVswXVs1XSwgZGF0YVswXVs2XSwgZGF0YVswXVs3XSwgZGF0YVswXVs4XSwgZGF0YVswXVs5XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdG1wT2JqID0gbmV3IFBsYXllcihTSUQpO1xuICAgICAgICAgICAgUGxheWVycy5wbGF5ZXJzLnB1c2godG1wT2JqKTtcbiAgICAgICAgICAgIHRtcE9iai5pbml0KGRhdGFbMF1bMF0sIGRhdGFbMF1bMl0sIGRhdGFbMF1bM10sIGRhdGFbMF1bNF0sIGRhdGFbMF1bNV0sIGRhdGFbMF1bNl0sIGRhdGFbMF1bN10sIGRhdGFbMF1bOF0sIGRhdGFbMF1bOV0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgcGxheWVyIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWQgVGhlIFNJRCBmb3IgdGhlIHBsYXllciB0byByZW1vdmVcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIHBsYXllcnMucmVtb3ZlUGxheWVyKDEwKTtcbiAgICAgKi9cbiAgICBQbGF5ZXJzLnJlbW92ZVBsYXllciA9IGZ1bmN0aW9uIChzaWQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gUGxheWVycy5wbGF5ZXJzLmluZGV4T2YoUGxheWVycy5wbGF5ZXJzLmZpbmQoZnVuY3Rpb24gKHBsYXllcikgeyByZXR1cm4gcGxheWVyLnNpZCA9PT0gc2lkOyB9KSwgMCk7XG4gICAgICAgIGRlbGV0ZSBQbGF5ZXJzLnBsYXllcnNbaW5kZXhdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGxheWVycyBpbiB0aGUgY29sbGVjdGlvbiBiYXNlZCBvbiBuZXcgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnlbXX0gZGF0YSBUaGUgbmV3IGRhdGEgdG8gdXBkYXRlIHRoZSBwbGF5ZXJzIHdpdGhcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIHBsYXllcnMudXBkYXRlUGxheWVycyh0bXBQbGF5ZXIpO1xuICAgICAqL1xuICAgIFBsYXllcnMudXBkYXRlUGxheWVycyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIFVucmVuZGVyIGFsbCBwbGF5ZXJzIGFuZCByZXJlbmRlciBwbGF5ZXJzIGluIHJhbmdlXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgdG1wUGxheWVyID0gdGhpcy5wbGF5ZXJzW2ldO1xuICAgICAgICAgICAgdG1wUGxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4ICs9IDEzKSB7XG4gICAgICAgICAgICB2YXIgcGxheWVyID0gZmluZFBsYXllckJ5U2lkKGRhdGFbMF0pO1xuICAgICAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgICAgIHBsYXllci50MSA9IHBsYXllci50MiA9PT0gdm9pZCAwID8gRGF0ZS5ub3coKSA6IHBsYXllci50MjtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudDIgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHBsYXllci54MiA9IGRhdGFbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIueTIgPSBkYXRhW2luZGV4ICsgMl07XG4gICAgICAgICAgICAgICAgLy9wbGF5ZXIub2xkWCA9IHBsYXllci54MjtcbiAgICAgICAgICAgICAgICAvL3BsYXllci5vbGRZID0gcGxheWVyLnkyO1xuICAgICAgICAgICAgICAgIHBsYXllci5vbGRYID0gR2FtZS5wbGF5ZXJYWS54O1xuICAgICAgICAgICAgICAgIHBsYXllci5vbGRZID0gR2FtZS5wbGF5ZXJYWS55O1xuICAgICAgICAgICAgICAgIHBsYXllci5kMSA9IHBsYXllci5kMiA9PT0gdm9pZCAwID8gZGF0YVtpbmRleCArIDNdIDogcGxheWVyLmQyO1xuICAgICAgICAgICAgICAgIHBsYXllci5kZWx0YSA9IDA7XG4gICAgICAgICAgICAgICAgcGxheWVyLndlYXBvbkluZGV4ID0gZGF0YVtpbmRleCArIDVdO1xuICAgICAgICAgICAgICAgIHBsYXllci53ZWFwb25JbmRleCA8IDkgJiYgKHBsYXllci53ZWFwb25zWzBdID0gcGxheWVyLndlYXBvbkluZGV4KTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIud2VhcG9uSW5kZXggPj0gOSAmJiAocGxheWVyLndlYXBvbnNbMV0gPSBwbGF5ZXIud2VhcG9uSW5kZXgpO1xuICAgICAgICAgICAgICAgIHBsYXllci53ZWFwb25WYXJpYW50ID0gZGF0YVtpbmRleCArIDZdO1xuICAgICAgICAgICAgICAgIHBsYXllci50ZWFtID0gZGF0YVtpbmRleCArIDddO1xuICAgICAgICAgICAgICAgIHBsYXllci5sYXN0U2tpbkluZGV4ID0gcGxheWVyLnNraW5JbmRleDtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc2tpbkluZGV4ID0gZGF0YVtpbmRleCArIDldO1xuICAgICAgICAgICAgICAgIHBsYXllci5sYXN0VGFpbEluZGV4ID0gcGxheWVyLnRhaWxJbmRleDtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudGFpbEluZGV4ID0gZGF0YVtpbmRleCArIDEwXTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIHBsYXllcnNcbiAgICAgKi9cbiAgICBQbGF5ZXJzLnBsYXllcnMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBNeSBwbGF5ZXJcbiAgICAgKi9cbiAgICBQbGF5ZXJzLm15UGxheWVyID0ge307XG4gICAgcmV0dXJuIFBsYXllcnM7XG59KCkpO1xuZXhwb3J0IHsgUGxheWVycyB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdGlsZXMgfSBmcm9tIFwiLi4vVVRJTFMvUHJvamVjdGlsZXNcIjtcbmltcG9ydCB7IHByb2plY3RpbGVNYW5hZ2VyIH0gZnJvbSBcIi4vUHJvamVjdGlsZU1hbmFnZXJcIjtcbnZhciBQcm9qZWN0aWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByb2plY3RpbGUoeCwgeSwgZGlyLCByYW5nZSwgc3BlZWQsIGluZGV4LCBvd25lciwgaWdub3JlT2JqZWN0cywgbGF5ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5kYXRhID0gUHJvamVjdGlsZXNbaW5kZXhdO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRpciA9IGRpcjtcbiAgICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlO1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgICAgICB0aGlzLmlnbm9yZU9iamVjdHMgPSBpZ25vcmVPYmplY3RzO1xuICAgICAgICB0aGlzLnNpZCA9IHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVDb3VudDtcbiAgICAgICAgdGhpcy5sYXllciA9IGxheWVyIHx8IHRoaXMuZGF0YS5sYXllcjtcbiAgICAgICAgdGhpcy5kaXN0YW5jZVBlclRpY2sgPSBQcm9qZWN0aWxlc1tpbmRleF0uZGlzdFBlclRpY2s7XG4gICAgICAgIHRoaXMucmV0dXJuTmV4dFRpY2tQb3NpdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IHggKyBfdGhpcy5kaXN0YW5jZVBlclRpY2sgKiBNYXRoLnNpbihfdGhpcy5kaXIpLFxuICAgICAgICAgICAgICAgIHk6IHkgKyBfdGhpcy5kaXN0YW5jZVBlclRpY2sgKiBNYXRoLmNvcyhfdGhpcy5kaXIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIFByb2plY3RpbGU7XG59KCkpO1xuZXhwb3J0IHsgUHJvamVjdGlsZSB9O1xuIiwiaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tIFwiLi4vVVRJTFMvR2V0RGlzdGFuY2VcIjtcbmltcG9ydCB7IFByb2plY3RpbGUgfSBmcm9tIFwiLi9Qcm9qZWN0aWxlXCI7XG52YXIgcHJvamVjdGlsZU1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gcHJvamVjdGlsZU1hbmFnZXIoKSB7XG4gICAgfVxuICAgIHByb2plY3RpbGVNYW5hZ2VyLmFkZFByb2plY3RpbGUgPSBmdW5jdGlvbiAoeCwgeSwgZGlyLCByYW5nZSwgc3BlZWQsIGluZGV4LCBsYXllciwgc2lkKSB7XG4gICAgICAgIHZhciBwcm9qZWN0aWxlID0gbmV3IFByb2plY3RpbGUoeCwgeSwgZGlyLCByYW5nZSwgc3BlZWQsIGluZGV4LCBudWxsLCBudWxsLCBsYXllcik7XG4gICAgICAgIHByb2plY3RpbGUuc2lkID0gc2lkO1xuICAgICAgICBjb25zb2xlLndhcm4ocHJvamVjdGlsZSk7XG4gICAgICAgIHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVzLnB1c2gocHJvamVjdGlsZSk7XG4gICAgICAgIHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVDb3VudCsrO1xuICAgIH07XG4gICAgcHJvamVjdGlsZU1hbmFnZXIucmVtb3ZlUHJvamVjdGlsZSA9IGZ1bmN0aW9uIChTSUQpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBwcm9qZWN0aWxlTWFuYWdlci5wcm9qZWN0aWxlcy5pbmRleE9mKHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVzLmZpbmQoZnVuY3Rpb24gKHByb2opIHsgcmV0dXJuIHByb2ouc2lkID09PSBTSUQ7IH0pLCAwKTtcbiAgICAgICAgY29uc29sZS53YXJuKHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVzW2l0ZW1dLCBTSUQpO1xuICAgICAgICBkZWxldGUgcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZXNbaXRlbV07XG4gICAgICAgIHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVDb3VudC0tO1xuICAgIH07XG4gICAgLy9tdXN0IGJlIGNhbGxlZCBldmVyeSB0aWNrXG4gICAgcHJvamVjdGlsZU1hbmFnZXIucmV0cmlldmVEYW5nZXJvdXNQcm9qZWN0aWxlcyA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgICAgdmFyIHByb2plY3RpbGVzID0gW107XG4gICAgICAgIC8qXG4gICAgICAgICAgICBvayBzbyB3ZSBhcmUgZ29ubmEgZmlsdGVyIHRoaXMgc2hpdFxuICAgICAgICAgICAgYnkgZGlzdGFuY2UgdHJhdmVsYWJsZSBwZXIgdGlja1xuICAgICAgICAgICAgKyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBwcm9qZWN0aWxlXG4gICAgXG4gICAgICAgICAgICBzbyBpZiBpdHMgZ29pbmcgdG8gaGl0IHRoZSBwbGF5ZXJcbiAgICAgICAgICAgIHdlIGNhbiByZXR1cm4gaXQgaW4gYW4gYXJyYXlcbiAgICAgICAgICAgIGZvciBkYW1hZ2UgcG90ZW50aWFsIGxhdGVyXG4gICAgICAgICAgICBhbmQgYWxzbyBjb29sIHZpc3VhbHMgeWtcbiAgICAgICAgICAgICovXG4gICAgICAgIC8vdGhlIGNvZGUgYmVsb3cgaXMgdmVyeSBiZXRhLCBhbmQgaXMganVzdCBhIHBsYWNlaG9sZGVyIHRvIG1ha2UgaXQgbG9vayBsaWtlIGkgZGlkIHdvcmsgdG9kYXlcbiAgICAgICAgLy9pbiB0aGUgZnV0dXJlLCBtYXAgb3V0IGFsbCB0aGUgcHJvamVjdGlsZXMgc3BlZWQgYW5kIGFzc2lnbiBpdCB3aXRoIHRoZSBwcm9qZWN0aWxlIHNwZWVkcy90aWNrXG4gICAgICAgIC8vUHJvamVjdGlsZS5wcm9qZWN0aWxlcy5tYXAoKHByb2plY3RpbGUpID0+IHByb2plY3RpbGUuZGlzdFBlclRpY2sgLyogKDFlMyAvIDkpKi8pO1xuICAgICAgICBwcm9qZWN0aWxlTWFuYWdlci5wcm9qZWN0aWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9qZWN0aWxlKSB7XG4gICAgICAgICAgICBpZiAoZ2V0RGlzdGFuY2UocHJvamVjdGlsZS5yZXR1cm5OZXh0VGlja1Bvc2l0aW9uKHByb2plY3RpbGUueCwgcHJvamVjdGlsZS55KSwgcGxheWVyLCAwLCAyKSA8PVxuICAgICAgICAgICAgICAgIHBsYXllci5zY2FsZSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RpbGVzLnB1c2gocHJvamVjdGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvamVjdGlsZXMuc29ydChmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldERpc3RhbmNlKHBsYXllciwgeyB4OiB4LCB5OiB5IH0sIDIsIDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVDb3VudCA9IDA7XG4gICAgcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZXMgPSBbXTtcbiAgICByZXR1cm4gcHJvamVjdGlsZU1hbmFnZXI7XG59KCkpO1xuZXhwb3J0IHsgcHJvamVjdGlsZU1hbmFnZXIgfTtcbiIsIi8qKlxuICogSW1wb3J0cyB0aGUgUGxheWVycyBjbGFzc1xuICovXG5pbXBvcnQgeyBQbGF5ZXJzIH0gZnJvbSBcIi4uL1BsYXllcnMvUGxheWVyTWFuYWdlclwiO1xuLyoqXG4gKiBGaW5kcyBhIHBsYXllciBieSB0aGVpciBTSURcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gc2lkIFRoZSBTSUQgb2YgdGhlIHBsYXllciB0byBmaW5kXG4gKiBAcmV0dXJucyB7YW55fSBUaGUgcGxheWVyIHdpdGggdGhlIG1hdGNoaW5nIFNJRCwgb3IgdW5kZWZpbmVkIGlmIG5vdCBmb3VuZFxuICogQG1lbWJlck9mIG1vZHVsZTpGaW5kUGxheWVyQnlTSURcbiAqIEBleGFtcGxlIGZpbmRQbGF5ZXJCeVNpZCgxMjMpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZFBsYXllckJ5U2lkKHNpZCkge1xuICAgIC8qKlxuICAgICAqIFVzZXMgdGhlIGZpbmQgbWV0aG9kIHRvIHNlYXJjaCB0aGUgcGxheWVycyBhcnJheSBmb3IgYSBwbGF5ZXIgd2l0aCBhIG1hdGNoaW5nIFNJRFxuICAgICAqL1xuICAgIHJldHVybiBQbGF5ZXJzLnBsYXllcnMuZmluZChmdW5jdGlvbiAocGxheWVyKSB7IHJldHVybiBwbGF5ZXIuc2lkID09PSBzaWQ7IH0pO1xufVxuIiwiLyoqXG4gKiBJbXBvcnRzIHRoZSBhdGFuMiBmdW5jdGlvbiBmcm9tIHRoZSBNYXRoIG1vZHVsZVxuICovXG5pbXBvcnQgeyBhdGFuMiB9IGZyb20gXCIuLi9NYXRoXCI7XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRpcmVjdGlvbiBmcm9tIG9iajEgdG8gb2JqMlxuICpcbiAqIEBwYXJhbSB7YW55fSBvYmoxIFRoZSBzb3VyY2Ugb2JqZWN0XG4gKiBAcGFyYW0ge2FueX0gb2JqMiBUaGUgdGFyZ2V0IG9iamVjdFxuICogQHJldHVybnMge251bWJlcn0gVGhlIGRpcmVjdGlvbiBpbiByYWRpYW5zIGZyb20gb2JqMSB0byBvYmoyXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkdldERpcmVjdGlvblxuICogQGV4YW1wbGUgZ2V0RGlyZWN0aW9uKHBsYXllciwgZW5lbXkpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKG9iajEsIG9iajIpIHtcbiAgICAvKipcbiAgICAgKiBVc2VzIHRoZSBhdGFuMiBmdW5jdGlvbiB0byBjYWxjdWxhdGUgdGhlIGRpcmVjdGlvblxuICAgICAqIGF0YW4yKHksIHgpIHJldHVybnMgdGhlIGFuZ2xlIGluIHJhZGlhbnMgZnJvbSB0aGUgeC1heGlzIHRvIHRoZSBwb2ludCAoeCwgeSlcbiAgICAgKi9cbiAgICByZXR1cm4gYXRhbjIob2JqMS55MiAtIG9iajIueSwgb2JqMS54MiAtIG9iajIueCk7XG59XG4vL3RoaXMgbmVlZHMgdG8gYmUgcmVkb25lIHRvIGFjY291bnQgZm9yIHgyL3kyXG4iLCIvKipcbiAqIEltcG9ydHMgdGhlIGh5cG90IGZ1bmN0aW9uIGZyb20gdGhlIE1hdGggbW9kdWxlXG4gKi9cbmltcG9ydCB7IGh5cG90IH0gZnJvbSBcIi4uL01hdGhcIjtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gb2JqZWN0c1xuICpcbiAqIEBwYXJhbSB7YW55fSBvYmoxIFRoZSBmaXJzdCBvYmplY3RcbiAqIEBwYXJhbSB7YW55fSBvYmoyIFRoZSBzZWNvbmQgb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0gb2JqMXR5cGUgVGhlIGNvb3JkaW5hdGUgdHlwZSBvZiBvYmoxIChvcHRpb25hbClcbiAqIEBwYXJhbSB7bnVtYmVyfSBvYmoydHlwZSBUaGUgY29vcmRpbmF0ZSB0eXBlIG9mIG9iajIgKG9wdGlvbmFsKVxuICogQHJldHVybnMge251bWJlcn0gVGhlIGRpc3RhbmNlIGJldHdlZW4gb2JqMSBhbmQgb2JqMlxuICogQG1lbWJlck9mIG1vZHVsZTpHZXREaXN0YW5jZVxuICogQGV4YW1wbGUgZ2V0RGlzdGFuY2UocGxheWVyLCBlbmVteSwgMiwgMik7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShvYmoxLCBvYmoyLCBvYmoxdHlwZSwgb2JqMnR5cGUpIHtcbiAgICAvKipcbiAgICAgKiBVc2VzIHRoZSBoeXBvdCBmdW5jdGlvbiB0byBjYWxjdWxhdGUgdGhlIGRpc3RhbmNlXG4gICAgICogaHlwb3QoYSwgYikgcmV0dXJucyB0aGUgc3F1YXJlIHJvb3Qgb2YgYV4yICsgYl4yXG4gICAgICpcbiAgICAgKiBUaGUgeCBhbmQgeSBjb29yZGluYXRlcyBhcmUgZHluYW1pY2FsbHkgYWNjZXNzZWQgdXNpbmcgYnJhY2tldCBub3RhdGlvblxuICAgICAqIFRoZSB0eXBlIHBhcmFtZXRlcnMgYXJlIHVzZWQgdG8gYXBwZW5kIGEgc3VmZml4IHRvIHRoZSBwcm9wZXJ0eSBuYW1lcyAoZS5nLiBcIngxXCIgb3IgXCJ5MlwiKVxuICAgICAqL1xuICAgIHJldHVybiBoeXBvdChvYmoxW1wieFwiLmNvbmNhdChvYmoxdHlwZSB8fCBcIlwiKV0gLSBvYmoyW1wieFwiLmNvbmNhdChvYmoydHlwZSB8fCBcIlwiKV0sIG9iajFbXCJ5XCIuY29uY2F0KG9iajF0eXBlIHx8IFwiXCIpXSAtIG9iajJbXCJ5XCIuY29uY2F0KG9iajJ0eXBlIHx8IFwiXCIpXSk7XG59XG4iLCJleHBvcnQgdmFyIGl0ZW1Hcm91cHMgPSBbXG4gICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogXCJmb29kXCIsXG4gICAgICAgIGxheWVyOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogXCJ3YWxsc1wiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAzMCxcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiBcInNwaWtlc1wiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAxNSxcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiBcIm1pbGxcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogNyxcbiAgICAgICAgc2FuZGJveExpbWl0OiAyOTksXG4gICAgICAgIGxheWVyOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogXCJtaW5lXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDEsXG4gICAgICAgIGxheWVyOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogXCJ0cmFwXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDYsXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIG5hbWU6IFwiYm9vc3RlclwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAxMixcbiAgICAgICAgc2FuZGJveExpbWl0OiAyOTksXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIG5hbWU6IFwidHVycmV0XCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDIsXG4gICAgICAgIGxheWVyOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogOCxcbiAgICAgICAgbmFtZTogXCJ3YXRjaHRvd2VyXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDEyLFxuICAgICAgICBsYXllcjogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIG5hbWU6IFwiYnVmZlwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiA0LFxuICAgICAgICBsYXllcjogLTEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMCxcbiAgICAgICAgbmFtZTogXCJzcGF3blwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAxLFxuICAgICAgICBsYXllcjogLTEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMSxcbiAgICAgICAgbmFtZTogXCJzYXBsaW5nXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDIsXG4gICAgICAgIGxheWVyOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTIsXG4gICAgICAgIG5hbWU6IFwiYmxvY2tlclwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAzLFxuICAgICAgICBsYXllcjogLTEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMyxcbiAgICAgICAgbmFtZTogXCJ0ZWxlcG9ydGVyXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDIsXG4gICAgICAgIHNhbmRib3hMaW1pdDogMjk5LFxuICAgICAgICBsYXllcjogLTEsXG4gICAgfSxcbl07XG4iLCJpbXBvcnQgeyBpdGVtR3JvdXBzIH0gZnJvbSBcIi4vSXRlbUdyb3Vwc1wiO1xuZXhwb3J0IHZhciBJdGVtcyA9IFtcbiAgICB7XG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzBdLFxuICAgICAgICBuYW1lOiBcImFwcGxlXCIsXG4gICAgICAgIGRlc2M6IFwicmVzdG9yZXMgMjAgaGVhbHRoIHdoZW4gY29uc3VtZWRcIixcbiAgICAgICAgcmVxOiBbXCJmb29kXCIsIDEwXSxcbiAgICAgICAgY29uc3VtZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LmNoYW5nZUhlYWx0aCgyMCwgdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhlYWxpbmc6IDIwLFxuICAgICAgICBzY2FsZTogMjIsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDE1LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDMsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzBdLFxuICAgICAgICBuYW1lOiBcImNvb2tpZVwiLFxuICAgICAgICBkZXNjOiBcInJlc3RvcmVzIDQwIGhlYWx0aCB3aGVuIGNvbnN1bWVkXCIsXG4gICAgICAgIHJlcTogW1wiZm9vZFwiLCAxNV0sXG4gICAgICAgIGNvbnN1bWU6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdC5jaGFuZ2VIZWFsdGgoNDAsIHQpO1xuICAgICAgICB9LFxuICAgICAgICBoZWFsaW5nOiA0MCxcbiAgICAgICAgc2NhbGU6IDI3LFxuICAgICAgICBob2xkT2Zmc2V0OiAxNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1swXSxcbiAgICAgICAgbmFtZTogXCJjaGVlc2VcIixcbiAgICAgICAgZGVzYzogXCJyZXN0b3JlcyAzMCBoZWFsdGggYW5kIGFub3RoZXIgNTAgb3ZlciA1IHNlY29uZHNcIixcbiAgICAgICAgcmVxOiBbXCJmb29kXCIsIDI1XSxcbiAgICAgICAgY29uc3VtZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiAoKCEhdC5jaGFuZ2VIZWFsdGgoMzAsIHQpIHx8IHQuaGVhbHRoIDwgMTAwKSAmJlxuICAgICAgICAgICAgICAgICgodC5kbWdPdmVyVGltZS5kbWcgPSAtMTApLFxuICAgICAgICAgICAgICAgICAgICAodC5kbWdPdmVyVGltZS5kb2VyID0gdCksXG4gICAgICAgICAgICAgICAgICAgICh0LmRtZ092ZXJUaW1lLnRpbWUgPSA1KSxcbiAgICAgICAgICAgICAgICAgICAgITApKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGVhbGluZzogMzAsXG4gICAgICAgIHNjYWxlOiAyNyxcbiAgICAgICAgaG9sZE9mZnNldDogMTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzFdLFxuICAgICAgICBuYW1lOiBcIndvb2Qgd2FsbFwiLFxuICAgICAgICBkZXNjOiBcInByb3ZpZGVzIHByb3RlY3Rpb24gZm9yIHlvdXIgdmlsbGFnZVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMTBdLFxuICAgICAgICBwcm9qRG1nOiAhMCxcbiAgICAgICAgaGVhbHRoOiAzODAsXG4gICAgICAgIHNjYWxlOiA1MCxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiAzLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxXSxcbiAgICAgICAgbmFtZTogXCJzdG9uZSB3YWxsXCIsXG4gICAgICAgIGRlc2M6IFwicHJvdmlkZXMgaW1wcm92ZWQgcHJvdGVjdGlvbiBmb3IgeW91ciB2aWxsYWdlXCIsXG4gICAgICAgIHJlcTogW1wic3RvbmVcIiwgMjVdLFxuICAgICAgICBoZWFsdGg6IDkwMCxcbiAgICAgICAgc2NhbGU6IDUwLFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDcsXG4gICAgICAgIHByZTogMSxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMV0sXG4gICAgICAgIG5hbWU6IFwiY2FzdGxlIHdhbGxcIixcbiAgICAgICAgZGVzYzogXCJwcm92aWRlcyBwb3dlcmZ1bCBwcm90ZWN0aW9uIGZvciB5b3VyIHZpbGxhZ2VcIixcbiAgICAgICAgcmVxOiBbXCJzdG9uZVwiLCAzNV0sXG4gICAgICAgIGhlYWx0aDogMTUwMCxcbiAgICAgICAgc2NhbGU6IDUyLFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1syXSxcbiAgICAgICAgbmFtZTogXCJzcGlrZXNcIixcbiAgICAgICAgZGVzYzogXCJkYW1hZ2VzIGVuZW1pZXMgd2hlbiB0aGV5IHRvdWNoIHRoZW1cIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDIwLCBcInN0b25lXCIsIDVdLFxuICAgICAgICBoZWFsdGg6IDQwMCxcbiAgICAgICAgZG1nOiAyMCxcbiAgICAgICAgc2NhbGU6IDQ5LFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAtMjMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDgsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA1LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1syXSxcbiAgICAgICAgbmFtZTogXCJncmVhdGVyIHNwaWtlc1wiLFxuICAgICAgICBkZXNjOiBcImRhbWFnZXMgZW5lbWllcyB3aGVuIHRoZXkgdG91Y2ggdGhlbVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMzAsIFwic3RvbmVcIiwgMTBdLFxuICAgICAgICBoZWFsdGg6IDUwMCxcbiAgICAgICAgZG1nOiAzNSxcbiAgICAgICAgc2NhbGU6IDUyLFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAtMjMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDgsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA5LFxuICAgICAgICBwcmU6IDEsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzJdLFxuICAgICAgICBuYW1lOiBcInBvaXNvbiBzcGlrZXNcIixcbiAgICAgICAgZGVzYzogXCJwb2lzb25zIGVuZW1pZXMgd2hlbiB0aGV5IHRvdWNoIHRoZW1cIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDM1LCBcInN0b25lXCIsIDE1XSxcbiAgICAgICAgaGVhbHRoOiA2MDAsXG4gICAgICAgIGRtZzogMzAsXG4gICAgICAgIHBEbWc6IDUsXG4gICAgICAgIHNjYWxlOiA1MixcbiAgICAgICAgc3ByaXRlUGFkZGluZzogLTIzLFxuICAgICAgICBob2xkT2Zmc2V0OiA4LFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogOSxcbiAgICAgICAgcHJlOiAyLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1syXSxcbiAgICAgICAgbmFtZTogXCJzcGlubmluZyBzcGlrZXNcIixcbiAgICAgICAgZGVzYzogXCJkYW1hZ2VzIGVuZW1pZXMgd2hlbiB0aGV5IHRvdWNoIHRoZW1cIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDMwLCBcInN0b25lXCIsIDIwXSxcbiAgICAgICAgaGVhbHRoOiA1MDAsXG4gICAgICAgIGRtZzogNDUsXG4gICAgICAgIHR1cm5TcGVlZDogMC4wMDMsXG4gICAgICAgIHNjYWxlOiA1MixcbiAgICAgICAgc3ByaXRlUGFkZGluZzogLTIzLFxuICAgICAgICBob2xkT2Zmc2V0OiA4LFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzNdLFxuICAgICAgICBuYW1lOiBcIndpbmRtaWxsXCIsXG4gICAgICAgIGRlc2M6IFwiZ2VuZXJhdGVzIGdvbGQgb3ZlciB0aW1lXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCA1MCwgXCJzdG9uZVwiLCAxMF0sXG4gICAgICAgIGhlYWx0aDogNDAwLFxuICAgICAgICBwcHM6IDEsXG4gICAgICAgIHR1cm5TcGVlZDogMC4wMDE2LFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAyNSxcbiAgICAgICAgaWNvbkxpbmVNdWx0OiAxMixcbiAgICAgICAgc2NhbGU6IDQ1LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IDUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNSxcbiAgICAgICAgcHJlOiAxLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1szXSxcbiAgICAgICAgbmFtZTogXCJmYXN0ZXIgd2luZG1pbGxcIixcbiAgICAgICAgZGVzYzogXCJnZW5lcmF0ZXMgbW9yZSBnb2xkIG92ZXIgdGltZVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgNjAsIFwic3RvbmVcIiwgMjBdLFxuICAgICAgICBoZWFsdGg6IDUwMCxcbiAgICAgICAgcHBzOiAxLjUsXG4gICAgICAgIHR1cm5TcGVlZDogMC4wMDI1LFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAyNSxcbiAgICAgICAgaWNvbkxpbmVNdWx0OiAxMixcbiAgICAgICAgc2NhbGU6IDQ3LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IDUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogOCxcbiAgICAgICAgcHJlOiAxLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1szXSxcbiAgICAgICAgbmFtZTogXCJwb3dlciBtaWxsXCIsXG4gICAgICAgIGRlc2M6IFwiZ2VuZXJhdGVzIG1vcmUgZ29sZCBvdmVyIHRpbWVcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDEwMCwgXCJzdG9uZVwiLCA1MF0sXG4gICAgICAgIGhlYWx0aDogODAwLFxuICAgICAgICBwcHM6IDIsXG4gICAgICAgIHR1cm5TcGVlZDogMC4wMDUsXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IDI1LFxuICAgICAgICBpY29uTGluZU11bHQ6IDEyLFxuICAgICAgICBzY2FsZTogNDcsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA1LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s0XSxcbiAgICAgICAgdHlwZTogMixcbiAgICAgICAgbmFtZTogXCJtaW5lXCIsXG4gICAgICAgIGRlc2M6IFwiYWxsb3dzIHlvdSB0byBtaW5lIHN0b25lXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAyMCwgXCJzdG9uZVwiLCAxMDBdLFxuICAgICAgICBpY29uTGluZU11bHQ6IDEyLFxuICAgICAgICBzY2FsZTogNjUsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA1LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxMV0sXG4gICAgICAgIHR5cGU6IDAsXG4gICAgICAgIG5hbWU6IFwic2FwbGluZ1wiLFxuICAgICAgICBkZXNjOiBcImFsbG93cyB5b3UgdG8gZmFybSB3b29kXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAxNTBdLFxuICAgICAgICBpY29uTGluZU11bHQ6IDEyLFxuICAgICAgICBjb2xEaXY6IDAuNSxcbiAgICAgICAgc2NhbGU6IDExMCxcbiAgICAgICAgaG9sZE9mZnNldDogNTAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtMTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNCxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbNV0sXG4gICAgICAgIG5hbWU6IFwicGl0IHRyYXBcIixcbiAgICAgICAgZGVzYzogXCJwaXQgdGhhdCB0cmFwcyBlbmVtaWVzIGlmIHRoZXkgd2FsayBvdmVyIGl0XCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAzMCwgXCJzdG9uZVwiLCAzMF0sXG4gICAgICAgIHRyYXA6ICEwLFxuICAgICAgICBpZ25vcmVDb2xsaXNpb246ICEwLFxuICAgICAgICBoaWRlRnJvbUVuZW15OiAhMCxcbiAgICAgICAgaGVhbHRoOiA1MDAsXG4gICAgICAgIGNvbERpdjogMC4yLFxuICAgICAgICBzY2FsZTogNTAsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNCxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbNl0sXG4gICAgICAgIG5hbWU6IFwiYm9vc3QgcGFkXCIsXG4gICAgICAgIGRlc2M6IFwicHJvdmlkZXMgYm9vc3Qgd2hlbiBzdGVwcGVkIG9uXCIsXG4gICAgICAgIHJlcTogW1wic3RvbmVcIiwgMjAsIFwid29vZFwiLCA1XSxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgYm9vc3RTcGVlZDogMS41LFxuICAgICAgICBoZWFsdGg6IDE1MCxcbiAgICAgICAgY29sRGl2OiAwLjcsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s3XSxcbiAgICAgICAgZG9VcGRhdGU6ICEwLFxuICAgICAgICBuYW1lOiBcInR1cnJldFwiLFxuICAgICAgICBkZXNjOiBcImRlZmVuc2l2ZSBzdHJ1Y3R1cmUgdGhhdCBzaG9vdHMgYXQgZW5lbWllc1wiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMjAwLCBcInN0b25lXCIsIDE1MF0sXG4gICAgICAgIGhlYWx0aDogODAwLFxuICAgICAgICBwcm9qZWN0aWxlOiAxLFxuICAgICAgICBzaG9vdFJhbmdlOiA3MDAsXG4gICAgICAgIHNob290UmF0ZTogMjIwMCxcbiAgICAgICAgc2NhbGU6IDQzLFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDcsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzhdLFxuICAgICAgICBuYW1lOiBcInBsYXRmb3JtXCIsXG4gICAgICAgIGRlc2M6IFwicGxhdGZvcm0gdG8gc2hvb3Qgb3ZlciB3YWxscyBhbmQgY3Jvc3Mgb3ZlciB3YXRlclwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMjBdLFxuICAgICAgICBpZ25vcmVDb2xsaXNpb246ICEwLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIGhlYWx0aDogMzAwLFxuICAgICAgICBzY2FsZTogNDMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbOV0sXG4gICAgICAgIG5hbWU6IFwiaGVhbGluZyBwYWRcIixcbiAgICAgICAgZGVzYzogXCJzdGFuZGluZyBvbiBpdCB3aWxsIHNsb3dseSBoZWFsIHlvdVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMzAsIFwiZm9vZFwiLCAxMF0sXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIGhlYWxDb2w6IDE1LFxuICAgICAgICBoZWFsdGg6IDQwMCxcbiAgICAgICAgY29sRGl2OiAwLjcsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA5LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxMF0sXG4gICAgICAgIG5hbWU6IFwic3Bhd24gcGFkXCIsXG4gICAgICAgIGRlc2M6IFwieW91IHdpbGwgc3Bhd24gaGVyZSB3aGVuIHlvdSBkaWUgYnV0IGl0IHdpbGwgZGlzc2FwZWFyXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAxMDAsIFwic3RvbmVcIiwgMTAwXSxcbiAgICAgICAgaGVhbHRoOiA0MDAsXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIHNwYXduUG9pbnQ6ICEwLFxuICAgICAgICBzY2FsZTogNDUsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMTJdLFxuICAgICAgICBuYW1lOiBcImJsb2NrZXJcIixcbiAgICAgICAgZGVzYzogXCJibG9ja3MgYnVpbGRpbmcgaW4gcmFkaXVzXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAzMCwgXCJzdG9uZVwiLCAyNV0sXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIGJsb2NrZXI6IDMwMCxcbiAgICAgICAgaGVhbHRoOiA0MDAsXG4gICAgICAgIGNvbERpdjogMC43LFxuICAgICAgICBzY2FsZTogNDUsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMTNdLFxuICAgICAgICBuYW1lOiBcInRlbGVwb3J0ZXJcIixcbiAgICAgICAgZGVzYzogXCJ0ZWxlcG9ydHMgeW91IHRvIGEgcmFuZG9tIHBvaW50IG9uIHRoZSBtYXBcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDYwLCBcInN0b25lXCIsIDYwXSxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgdGVsZXBvcnQ6ICEwLFxuICAgICAgICBoZWFsdGg6IDIwMCxcbiAgICAgICAgY29sRGl2OiAwLjcsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuXTtcbiIsImltcG9ydCB7IGdldEluc3RhbmNlIH0gZnJvbSBcIi4uL0dhbWVcIjtcbnZhciB3cyA9IGdldEluc3RhbmNlKCk7XG52YXIgU2VuZEhpdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZW5kSGl0KCkge1xuICAgIH1cbiAgICBTZW5kSGl0LnNlbmRIaXQgPSBmdW5jdGlvbiAoeWVzbm8pIHtcbiAgICAgICAgaWYgKHllc25vICE9PSBTZW5kSGl0Lmhhc0hpdCkge1xuICAgICAgICAgICAgU2VuZEhpdC5oYXNIaXQgPSB5ZXNubztcbiAgICAgICAgICAgIHdzLnNlbmQoXCJLXCIsIDEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTZW5kSGl0Lmhhc0hpdCA9IGZhbHNlO1xuICAgIHJldHVybiBTZW5kSGl0O1xufSgpKTtcbnZhciBQYWNrZXRzID0ge1xuICAgIEVxdWlwOiBmdW5jdGlvbiAoaW5kZXgsIGlzV2VhcG9uKSB7XG4gICAgICAgIHdzLnNlbmQoXCJHXCIsIGluZGV4LCBpc1dlYXBvbik7XG4gICAgfSxcbiAgICBzZW5kTW92ZW1lbnREaXI6IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgd3Muc2VuZChcImFcIiwgZGlyKTtcbiAgICB9LFxuICAgIHJlc2V0TW92ZW1lbnREaXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd3Muc2VuZChcImVcIik7XG4gICAgfSxcbiAgICBzZW5kSGl0OiBTZW5kSGl0LnNlbmRIaXQsXG4gICAgbG9ja0RpcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB3cy5zZW5kKFwiS1wiLCAwKTtcbiAgICB9LFxuICAgIHNlbmRDaGF0OiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgIHdzLnNlbmQoXCI2XCIsIG1zZyk7XG4gICAgfSxcbiAgICBzZW5kVXBncmFkZTogZnVuY3Rpb24gKGluZHgpIHtcbiAgICAgICAgd3Muc2VuZChcIkhcIiwgaW5keCk7XG4gICAgfSxcbiAgICBjcmVhdGVDbGFuOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB3cy5zZW5kKFwiTFwiLCBuYW1lKTtcbiAgICB9LFxuICAgIGFjY2VwdFBsYXllckludG9DbGFuOiBmdW5jdGlvbiAoc2lkKSB7XG4gICAgICAgIHdzLnNlbmQoXCJiXCIsIHNpZCk7XG4gICAgfSxcbiAgICBwaW5nU2VydmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdzLnNlbmQoXCIwXCIpO1xuICAgIH0sXG4gICAgc2VuZERpcjogZnVuY3Rpb24gKGRpcikge1xuICAgICAgICB3cy5zZW5kKFwiRFwiLCBkaXIpO1xuICAgIH0sXG4gICAgc3Bhd25QbGF5ZXI6IGZ1bmN0aW9uIChuYW1lLCBtb29mb2xsLCBza2luKSB7XG4gICAgICAgIHdzLnNlbmQoXCJNXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBtb29mb2xsOiBtb29mb2xsLFxuICAgICAgICAgICAgc2tpbjogc2tpblxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNlbmRCdWlsZDogZnVuY3Rpb24gKGRpcikge1xuICAgICAgICB3cy5zZW5kKFwiZFwiLCAxLCBkaXIsIDEpO1xuICAgIH1cbn07XG5leHBvcnQgeyBQYWNrZXRzIH07XG4iLCJleHBvcnQgdmFyIFByb2plY3RpbGVzID0gW1xuICAgIHtcbiAgICAgICAgaW5keDogMCxcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgICAgIHNyYzogXCJhcnJvd18xXCIsXG4gICAgICAgIGRtZzogMjUsXG4gICAgICAgIHNwZWVkOiAxLjYsXG4gICAgICAgIHNjYWxlOiAxMDMsXG4gICAgICAgIHJhbmdlOiAxZTMsXG4gICAgICAgIGRpc3RQZXJUaWNrOiAxLjYsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZHg6IDEsXG4gICAgICAgIGxheWVyOiAxLFxuICAgICAgICBkbWc6IDI1LFxuICAgICAgICBzY2FsZTogMjAsXG4gICAgICAgIGRpc3RQZXJUaWNrOiAxLjYsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZHg6IDAsXG4gICAgICAgIGxheWVyOiAwLFxuICAgICAgICBzcmM6IFwiYXJyb3dfMVwiLFxuICAgICAgICBkbWc6IDM1LFxuICAgICAgICBzcGVlZDogMi41LFxuICAgICAgICBzY2FsZTogMTAzLFxuICAgICAgICByYW5nZTogMTIwMCxcbiAgICAgICAgZGlzdFBlclRpY2s6IDIuNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5keDogMCxcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgICAgIHNyYzogXCJhcnJvd18xXCIsXG4gICAgICAgIGRtZzogMzAsXG4gICAgICAgIHNwZWVkOiAyLFxuICAgICAgICBzY2FsZTogMTAzLFxuICAgICAgICByYW5nZTogMTIwMCxcbiAgICAgICAgZGlzdFBlclRpY2s6IDIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZHg6IDEsXG4gICAgICAgIGxheWVyOiAxLFxuICAgICAgICBkbWc6IDE2LFxuICAgICAgICBzY2FsZTogMjAsXG4gICAgICAgIGRpc3RQZXJUaWNrOiBOYU4sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZHg6IDAsXG4gICAgICAgIGxheWVyOiAwLFxuICAgICAgICBzcmM6IFwiYnVsbGV0XzFcIixcbiAgICAgICAgZG1nOiA1MCxcbiAgICAgICAgc3BlZWQ6IDMuNixcbiAgICAgICAgc2NhbGU6IDE2MCxcbiAgICAgICAgcmFuZ2U6IDE0MDAsXG4gICAgICAgIGRpc3RQZXJUaWNrOiAzLjYsXG4gICAgfSxcbl07XG4iLCJleHBvcnQgdmFyIGJhZFdvcmRzID0gW1xuICAgIFwiYWhvbGVcIixcbiAgICBcImFudXNcIixcbiAgICBcImFzaDBsZVwiLFxuICAgIFwiYXNoMGxlc1wiLFxuICAgIFwiYXNob2xlc1wiLFxuICAgIFwiYXNzXCIsXG4gICAgXCJBc3MgTW9ua2V5XCIsXG4gICAgXCJBc3NmYWNlXCIsXG4gICAgXCJhc3NoMGxlXCIsXG4gICAgXCJhc3NoMGxlelwiLFxuICAgIFwiYXNzaG9sZVwiLFxuICAgIFwiYXNzaG9sZXNcIixcbiAgICBcImFzc2hvbHpcIixcbiAgICBcImFzc3dpcGVcIixcbiAgICBcImF6emhvbGVcIixcbiAgICBcImJhc3N0ZXJkc1wiLFxuICAgIFwiYmFzdGFyZFwiLFxuICAgIFwiYmFzdGFyZHNcIixcbiAgICBcImJhc3RhcmR6XCIsXG4gICAgXCJiYXN0ZXJkc1wiLFxuICAgIFwiYmFzdGVyZHpcIixcbiAgICBcIkJpYXRjaFwiLFxuICAgIFwiYml0Y2hcIixcbiAgICBcImJpdGNoZXNcIixcbiAgICBcIkJsb3cgSm9iXCIsXG4gICAgXCJib2ZmaW5nXCIsXG4gICAgXCJidXR0aG9sZVwiLFxuICAgIFwiYnV0dHdpcGVcIixcbiAgICBcImMwY2tcIixcbiAgICBcImMwY2tzXCIsXG4gICAgXCJjMGtcIixcbiAgICBcIkNhcnBldCBNdW5jaGVyXCIsXG4gICAgXCJjYXdrXCIsXG4gICAgXCJjYXdrc1wiLFxuICAgIFwiQ2xpdFwiLFxuICAgIFwiY250c1wiLFxuICAgIFwiY250elwiLFxuICAgIFwiY29ja1wiLFxuICAgIFwiY29ja2hlYWRcIixcbiAgICBcImNvY2staGVhZFwiLFxuICAgIFwiY29ja3NcIixcbiAgICBcIkNvY2tTdWNrZXJcIixcbiAgICBcImNvY2stc3Vja2VyXCIsXG4gICAgXCJjcmFwXCIsXG4gICAgXCJjdW1cIixcbiAgICBcImN1bnRcIixcbiAgICBcImN1bnRzXCIsXG4gICAgXCJjdW50elwiLFxuICAgIFwiZGlja1wiLFxuICAgIFwiZGlsZDBcIixcbiAgICBcImRpbGQwc1wiLFxuICAgIFwiZGlsZG9cIixcbiAgICBcImRpbGRvc1wiLFxuICAgIFwiZGlsbGQwXCIsXG4gICAgXCJkaWxsZDBzXCIsXG4gICAgXCJkb21pbmF0cmlja3NcIixcbiAgICBcImRvbWluYXRyaWNzXCIsXG4gICAgXCJkb21pbmF0cml4XCIsXG4gICAgXCJkeWtlXCIsXG4gICAgXCJlbmVtYVwiLFxuICAgIFwiZiB1IGMga1wiLFxuICAgIFwiZiB1IGMgayBlIHJcIixcbiAgICBcImZhZ1wiLFxuICAgIFwiZmFnMXRcIixcbiAgICBcImZhZ2V0XCIsXG4gICAgXCJmYWdnMXRcIixcbiAgICBcImZhZ2dpdFwiLFxuICAgIFwiZmFnZ290XCIsXG4gICAgXCJmYWdnMHRcIixcbiAgICBcImZhZ2l0XCIsXG4gICAgXCJmYWdzXCIsXG4gICAgXCJmYWd6XCIsXG4gICAgXCJmYWlnXCIsXG4gICAgXCJmYWlnc1wiLFxuICAgIFwiZmFydFwiLFxuICAgIFwiZmxpcHBpbmcgdGhlIGJpcmRcIixcbiAgICBcImZ1Y2tcIixcbiAgICBcImZ1Y2tlclwiLFxuICAgIFwiZnVja2luXCIsXG4gICAgXCJmdWNraW5nXCIsXG4gICAgXCJmdWNrc1wiLFxuICAgIFwiRnVkZ2UgUGFja2VyXCIsXG4gICAgXCJmdWtcIixcbiAgICBcIkZ1a2FoXCIsXG4gICAgXCJGdWtlblwiLFxuICAgIFwiZnVrZXJcIixcbiAgICBcIkZ1a2luXCIsXG4gICAgXCJGdWtrXCIsXG4gICAgXCJGdWtrYWhcIixcbiAgICBcIkZ1a2tlblwiLFxuICAgIFwiRnVra2VyXCIsXG4gICAgXCJGdWtraW5cIixcbiAgICBcImcwMGtcIixcbiAgICBcIkdvZC1kYW1uZWRcIixcbiAgICBcImgwMHJcIixcbiAgICBcImgwYXJcIixcbiAgICBcImgwcmVcIixcbiAgICBcImhlbGxzXCIsXG4gICAgXCJob2FyXCIsXG4gICAgXCJob29yXCIsXG4gICAgXCJob29yZVwiLFxuICAgIFwiamFja29mZlwiLFxuICAgIFwiamFwXCIsXG4gICAgXCJqYXBzXCIsXG4gICAgXCJqZXJrLW9mZlwiLFxuICAgIFwiamlzaW1cIixcbiAgICBcImppc3NcIixcbiAgICBcImppem1cIixcbiAgICBcImppenpcIixcbiAgICBcImtub2JcIixcbiAgICBcImtub2JzXCIsXG4gICAgXCJrbm9ielwiLFxuICAgIFwia3VudFwiLFxuICAgIFwia3VudHNcIixcbiAgICBcImt1bnR6XCIsXG4gICAgXCJMZXp6aWFuXCIsXG4gICAgXCJMaXBzaGl0c1wiLFxuICAgIFwiTGlwc2hpdHpcIixcbiAgICBcIm1hc29jaGlzdFwiLFxuICAgIFwibWFzb2tpc3RcIixcbiAgICBcIm1hc3N0ZXJiYWl0XCIsXG4gICAgXCJtYXNzdHJiYWl0XCIsXG4gICAgXCJtYXNzdHJiYXRlXCIsXG4gICAgXCJtYXN0ZXJiYWl0ZXJcIixcbiAgICBcIm1hc3RlcmJhdGVcIixcbiAgICBcIm1hc3RlcmJhdGVzXCIsXG4gICAgXCJNb3RoYSBGdWNrZXJcIixcbiAgICBcIk1vdGhhIEZ1a2VyXCIsXG4gICAgXCJNb3RoYSBGdWtrYWhcIixcbiAgICBcIk1vdGhhIEZ1a2tlclwiLFxuICAgIFwiTW90aGVyIEZ1Y2tlclwiLFxuICAgIFwiTW90aGVyIEZ1a2FoXCIsXG4gICAgXCJNb3RoZXIgRnVrZXJcIixcbiAgICBcIk1vdGhlciBGdWtrYWhcIixcbiAgICBcIk1vdGhlciBGdWtrZXJcIixcbiAgICBcIm1vdGhlci1mdWNrZXJcIixcbiAgICBcIk11dGhhIEZ1Y2tlclwiLFxuICAgIFwiTXV0aGEgRnVrYWhcIixcbiAgICBcIk11dGhhIEZ1a2VyXCIsXG4gICAgXCJNdXRoYSBGdWtrYWhcIixcbiAgICBcIk11dGhhIEZ1a2tlclwiLFxuICAgIFwibjFnclwiLFxuICAgIFwibmFzdHRcIixcbiAgICBcIm5pZ2dlcjtcIixcbiAgICBcIm5pZ3VyO1wiLFxuICAgIFwibmlpZ2VyO1wiLFxuICAgIFwibmlpZ3I7XCIsXG4gICAgXCJvcmFmaXNcIixcbiAgICBcIm9yZ2FzaW07XCIsXG4gICAgXCJvcmdhc21cIixcbiAgICBcIm9yZ2FzdW1cIixcbiAgICBcIm9yaWZhY2VcIixcbiAgICBcIm9yaWZpY2VcIixcbiAgICBcIm9yaWZpc3NcIixcbiAgICBcInBhY2tpXCIsXG4gICAgXCJwYWNraWVcIixcbiAgICBcInBhY2t5XCIsXG4gICAgXCJwYWtpXCIsXG4gICAgXCJwYWtpZVwiLFxuICAgIFwicGFreVwiLFxuICAgIFwicGVja2VyXCIsXG4gICAgXCJwZWVlbnVzXCIsXG4gICAgXCJwZWVlbnVzc3NcIixcbiAgICBcInBlZW51c1wiLFxuICAgIFwicGVpbnVzXCIsXG4gICAgXCJwZW4xc1wiLFxuICAgIFwicGVuYXNcIixcbiAgICBcInBlbmlzXCIsXG4gICAgXCJwZW5pcy1icmVhdGhcIixcbiAgICBcInBlbnVzXCIsXG4gICAgXCJwZW51dXNcIixcbiAgICBcIlBodWNcIixcbiAgICBcIlBodWNrXCIsXG4gICAgXCJQaHVrXCIsXG4gICAgXCJQaHVrZXJcIixcbiAgICBcIlBodWtrZXJcIixcbiAgICBcInBvbGFjXCIsXG4gICAgXCJwb2xhY2tcIixcbiAgICBcInBvbGFrXCIsXG4gICAgXCJQb29uYW5pXCIsXG4gICAgXCJwcjFjXCIsXG4gICAgXCJwcjFja1wiLFxuICAgIFwicHIxa1wiLFxuICAgIFwicHVzc2VcIixcbiAgICBcInB1c3NlZVwiLFxuICAgIFwicHVzc3lcIixcbiAgICBcInB1dWtlXCIsXG4gICAgXCJwdXVrZXJcIixcbiAgICBcInF3ZWlyXCIsXG4gICAgXCJyZWNrdHVtXCIsXG4gICAgXCJyZWN0dW1cIixcbiAgICBcInJldGFyZFwiLFxuICAgIFwic2FkaXN0XCIsXG4gICAgXCJzY2Fua1wiLFxuICAgIFwic2NobG9uZ1wiLFxuICAgIFwic2NyZXdpbmdcIixcbiAgICBcInNlbWVuXCIsXG4gICAgXCJzZXhcIixcbiAgICBcInNleHlcIixcbiAgICBcIlNoIXRcIixcbiAgICBcInNoMXRcIixcbiAgICBcInNoMXRlclwiLFxuICAgIFwic2gxdHNcIixcbiAgICBcInNoMXR0ZXJcIixcbiAgICBcInNoMXR6XCIsXG4gICAgXCJzaGl0XCIsXG4gICAgXCJzaGl0c1wiLFxuICAgIFwic2hpdHRlclwiLFxuICAgIFwiU2hpdHR5XCIsXG4gICAgXCJTaGl0eVwiLFxuICAgIFwic2hpdHpcIixcbiAgICBcIlNoeXRcIixcbiAgICBcIlNoeXRlXCIsXG4gICAgXCJTaHl0dHlcIixcbiAgICBcIlNoeXR5XCIsXG4gICAgXCJza2FuY2tcIixcbiAgICBcInNrYW5rXCIsXG4gICAgXCJza2Fua2VlXCIsXG4gICAgXCJza2Fua2V5XCIsXG4gICAgXCJza2Fua3NcIixcbiAgICBcIlNrYW5reVwiLFxuICAgIFwic2xhZ1wiLFxuICAgIFwic2x1dFwiLFxuICAgIFwic2x1dHNcIixcbiAgICBcIlNsdXR0eVwiLFxuICAgIFwic2x1dHpcIixcbiAgICBcInNvbi1vZi1hLWJpdGNoXCIsXG4gICAgXCJ0aXRcIixcbiAgICBcInR1cmRcIixcbiAgICBcInZhMWppbmFcIixcbiAgICBcInZhZzFuYVwiLFxuICAgIFwidmFnaWluYVwiLFxuICAgIFwidmFnaW5hXCIsXG4gICAgXCJ2YWoxbmFcIixcbiAgICBcInZhamluYVwiLFxuICAgIFwidnVsbHZhXCIsXG4gICAgXCJ2dWx2YVwiLFxuICAgIFwidzBwXCIsXG4gICAgXCJ3aDAwclwiLFxuICAgIFwid2gwcmVcIixcbiAgICBcIndob3JlXCIsXG4gICAgXCJ4cmF0ZWRcIixcbiAgICBcInh4eFwiLFxuICAgIFwiYiErY2hcIixcbiAgICBcImJpdGNoXCIsXG4gICAgXCJibG93am9iXCIsXG4gICAgXCJjbGl0XCIsXG4gICAgXCJhcnNjaGxvY2hcIixcbiAgICBcImZ1Y2tcIixcbiAgICBcInNoaXRcIixcbiAgICBcImFzc1wiLFxuICAgIFwiYXNzaG9sZVwiLFxuICAgIFwiYiF0Y2hcIixcbiAgICBcImIxN2NoXCIsXG4gICAgXCJiMXRjaFwiLFxuICAgIFwiYmFzdGFyZFwiLFxuICAgIFwiYmkrY2hcIixcbiAgICBcImJvaW9sYXNcIixcbiAgICBcImJ1Y2V0YVwiLFxuICAgIFwiYzBja1wiLFxuICAgIFwiY2F3a1wiLFxuICAgIFwiY2hpbmtcIixcbiAgICBcImNpcGFcIixcbiAgICBcImNsaXRzXCIsXG4gICAgXCJjb2NrXCIsXG4gICAgXCJjdW1cIixcbiAgICBcImN1bnRcIixcbiAgICBcImRpbGRvXCIsXG4gICAgXCJkaXJzYVwiLFxuICAgIFwiZWpha3VsYXRlXCIsXG4gICAgXCJmYXRhc3NcIixcbiAgICBcImZjdWtcIixcbiAgICBcImZ1a1wiLFxuICAgIFwiZnV4MHJcIixcbiAgICBcImhvZXJcIixcbiAgICBcImhvcmVcIixcbiAgICBcImppc21cIixcbiAgICBcImthd2tcIixcbiAgICBcImwzaXRjaFwiLFxuICAgIFwibDNpK2NoXCIsXG4gICAgXCJtYXN0dXJiYXRlXCIsXG4gICAgXCJtYXN0ZXJiYXQqXCIsXG4gICAgXCJtYXN0ZXJiYXQzXCIsXG4gICAgXCJtb3RoZXJmdWNrZXJcIixcbiAgICBcInMuby5iLlwiLFxuICAgIFwibW9mb1wiLFxuICAgIFwibmF6aVwiLFxuICAgIFwibmlnZ2FcIixcbiAgICBcIm5pZ2dlclwiLFxuICAgIFwibnV0c2Fja1wiLFxuICAgIFwicGh1Y2tcIixcbiAgICBcInBpbXBpc1wiLFxuICAgIFwicHVzc2VcIixcbiAgICBcInB1c3N5XCIsXG4gICAgXCJzY3JvdHVtXCIsXG4gICAgXCJzaCF0XCIsXG4gICAgXCJzaGVtYWxlXCIsXG4gICAgXCJzaGkrXCIsXG4gICAgXCJzaCErXCIsXG4gICAgXCJzbHV0XCIsXG4gICAgXCJzbXV0XCIsXG4gICAgXCJ0ZWV0c1wiLFxuICAgIFwidGl0c1wiLFxuICAgIFwiYm9vYnNcIixcbiAgICBcImIwMGJzXCIsXG4gICAgXCJ0ZWV6XCIsXG4gICAgXCJ0ZXN0aWNhbFwiLFxuICAgIFwidGVzdGljbGVcIixcbiAgICBcInRpdHRcIixcbiAgICBcIncwMHNlXCIsXG4gICAgXCJqYWNrb2ZmXCIsXG4gICAgXCJ3YW5rXCIsXG4gICAgXCJ3aG9hclwiLFxuICAgIFwid2hvcmVcIixcbiAgICBcIipkYW1uXCIsXG4gICAgXCIqZHlrZVwiLFxuICAgIFwiKmZ1Y2sqXCIsXG4gICAgXCIqc2hpdCpcIixcbiAgICBcIkAkJFwiLFxuICAgIFwiYW1jaWtcIixcbiAgICBcImFuZHNrb3RhXCIsXG4gICAgXCJhcnNlKlwiLFxuICAgIFwiYXNzcmFtbWVyXCIsXG4gICAgXCJheWlyXCIsXG4gICAgXCJiaTdjaFwiLFxuICAgIFwiYml0Y2gqXCIsXG4gICAgXCJib2xsb2NrKlwiLFxuICAgIFwiYnJlYXN0c1wiLFxuICAgIFwiYnV0dC1waXJhdGVcIixcbiAgICBcImNhYnJvblwiLFxuICAgIFwiY2F6em9cIixcbiAgICBcImNocmFhXCIsXG4gICAgXCJjaHVqXCIsXG4gICAgXCJDb2NrKlwiLFxuICAgIFwiY3VudCpcIixcbiAgICBcImQ0bW5cIixcbiAgICBcImRheWdvXCIsXG4gICAgXCJkZWdvXCIsXG4gICAgXCJkaWNrKlwiLFxuICAgIFwiZGlrZSpcIixcbiAgICBcImR1cGFcIixcbiAgICBcImR6aXdrYVwiLFxuICAgIFwiZWphY2t1bGF0ZVwiLFxuICAgIFwiRWtyZW0qXCIsXG4gICAgXCJFa3RvXCIsXG4gICAgXCJlbmN1bGVyXCIsXG4gICAgXCJmYWVuXCIsXG4gICAgXCJmYWcqXCIsXG4gICAgXCJmYW5jdWxvXCIsXG4gICAgXCJmYW5ueVwiLFxuICAgIFwiZmVjZXNcIixcbiAgICBcImZlZ1wiLFxuICAgIFwiRmVsY2hlclwiLFxuICAgIFwiZmlja2VuXCIsXG4gICAgXCJmaXR0KlwiLFxuICAgIFwiRmxpa2tlclwiLFxuICAgIFwiZm9yZXNraW5cIixcbiAgICBcIkZvdHplXCIsXG4gICAgXCJGdSgqXCIsXG4gICAgXCJmdWsqXCIsXG4gICAgXCJmdXRrcmV0em5cIixcbiAgICBcImdvb2tcIixcbiAgICBcImd1aWVuYVwiLFxuICAgIFwiaDByXCIsXG4gICAgXCJoNHgwclwiLFxuICAgIFwiaGVsbFwiLFxuICAgIFwiaGVsdmV0ZVwiLFxuICAgIFwiaG9lcipcIixcbiAgICBcImhvbmtleVwiLFxuICAgIFwiSHVldm9uXCIsXG4gICAgXCJodWlcIixcbiAgICBcImluanVuXCIsXG4gICAgXCJqaXp6XCIsXG4gICAgXCJrYW5rZXIqXCIsXG4gICAgXCJraWtlXCIsXG4gICAgXCJrbG9vdHpha1wiLFxuICAgIFwia3JhdXRcIixcbiAgICBcImtudWxsZVwiLFxuICAgIFwia3VrXCIsXG4gICAgXCJrdWtzdWdlclwiLFxuICAgIFwiS3VyYWNcIixcbiAgICBcImt1cndhXCIsXG4gICAgXCJrdXNpKlwiLFxuICAgIFwia3lycGEqXCIsXG4gICAgXCJsZXNib1wiLFxuICAgIFwibWFtaG9vblwiLFxuICAgIFwibWFzdHVyYmF0KlwiLFxuICAgIFwibWVyZCpcIixcbiAgICBcIm1pYnVuXCIsXG4gICAgXCJtb25rbGVpZ2hcIixcbiAgICBcIm1vdWxpZXdvcFwiLFxuICAgIFwibXVpZVwiLFxuICAgIFwibXVsa2t1XCIsXG4gICAgXCJtdXNjaGlcIixcbiAgICBcIm5hemlzXCIsXG4gICAgXCJuZXBlc2F1cmlvXCIsXG4gICAgXCJuaWdnZXIqXCIsXG4gICAgXCJvcm9zcHVcIixcbiAgICBcInBhc2thKlwiLFxuICAgIFwicGVyc2VcIixcbiAgICBcInBpY2thXCIsXG4gICAgXCJwaWVyZG9sKlwiLFxuICAgIFwicGlsbHUqXCIsXG4gICAgXCJwaW1tZWxcIixcbiAgICBcInBpc3MqXCIsXG4gICAgXCJwaXpkYVwiLFxuICAgIFwicG9vbnRzZWVcIixcbiAgICBcInBvb3BcIixcbiAgICBcInBvcm5cIixcbiAgICBcInAwcm5cIixcbiAgICBcInByMG5cIixcbiAgICBcInByZXRlZW5cIixcbiAgICBcInB1bGFcIixcbiAgICBcInB1bGVcIixcbiAgICBcInB1dGFcIixcbiAgICBcInB1dG9cIixcbiAgICBcInFhaGJlaFwiLFxuICAgIFwicXVlZWYqXCIsXG4gICAgXCJyYXV0ZW5iZXJnXCIsXG4gICAgXCJzY2hhZmZlclwiLFxuICAgIFwic2NoZWlzcypcIixcbiAgICBcInNjaGxhbXBlXCIsXG4gICAgXCJzY2htdWNrXCIsXG4gICAgXCJzY3Jld1wiLFxuICAgIFwic2ghdCpcIixcbiAgICBcInNoYXJtdXRhXCIsXG4gICAgXCJzaGFybXV0ZVwiLFxuICAgIFwic2hpcGFsXCIsXG4gICAgXCJzaGl6XCIsXG4gICAgXCJza3JpYnpcIixcbiAgICBcInNrdXJ3eXN5blwiLFxuICAgIFwic3BoZW5jdGVyXCIsXG4gICAgXCJzcGljXCIsXG4gICAgXCJzcGllcmRhbGFqXCIsXG4gICAgXCJzcGxvb2dlXCIsXG4gICAgXCJzdWthXCIsXG4gICAgXCJiMDBiKlwiLFxuICAgIFwidGVzdGljbGUqXCIsXG4gICAgXCJ0aXR0KlwiLFxuICAgIFwidHdhdFwiLFxuICAgIFwidml0dHVcIixcbiAgICBcIndhbmsqXCIsXG4gICAgXCJ3ZXRiYWNrKlwiLFxuICAgIFwid2ljaHNlclwiLFxuICAgIFwid29wKlwiLFxuICAgIFwieWVkXCIsXG4gICAgXCJ6YWJvdXJhaFwiLFxuXTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvR2FtZS50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==