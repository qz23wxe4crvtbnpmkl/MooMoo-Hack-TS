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
                player.oldX = player.x2;
                player.oldY = player.y2;
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
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
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
/* harmony import */ var _Math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Math */ "./src/Math.ts");
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
                        M.fillStyle = "rgba(200, 0, 0, 0.3)";
                        M.arc(building.x - Game.xOffset, building.y - Game.yOffset, building.scale, 0, _Math__WEBPACK_IMPORTED_MODULE_7__.PI * 2);
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9CdWlsZGluZ3MvQnVpbGRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0J1aWxkaW5ncy9CdWlsZGluZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01hdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL05vdGlmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxheWVycy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllcnMvUGxheWVyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdGlsZXMvUHJvamVjdGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdGlsZXMvUHJvamVjdGlsZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VUSUxTL0ZpbmRQbGF5ZXJCeVNJRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVVRJTFMvR2V0RGlyZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9VVElMUy9HZXREaXN0YW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVVRJTFMvSXRlbUdyb3Vwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVVRJTFMvSXRlbXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VUSUxTL1Byb2plY3RpbGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWRXb3Jkcy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaW5kUGxheWVyQnlTaWQgfSBmcm9tIFwiLi4vVVRJTFMvRmluZFBsYXllckJ5U0lEXCI7XG4vKiBCdWlsZGluZyBjbGFzcyAqL1xudmFyIEJ1aWxkaW5nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJ1aWxkaW5nKHNpZCwgeCwgeSwgZGlyLCBzY2FsZSwgdHlwZSwgZGF0YSwgb3duZXIsIGlzRmFrZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNpZCA9IHNpZDtcbiAgICAgICAgZGF0YSA9IGRhdGEgfHwge307IC8vIHNhZmUgaG9sZGVyIGluIGNhc2UgaXQncyBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5kaXIgPSBkaXI7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5ncm91cCA9IGRhdGEuZ3JvdXA7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgdGhpcy5pc0Zha2UgPSBpc0Zha2U7XG4gICAgICAgIHRoaXMuaXNBbGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53aWdnbGUgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pc0l0ZW0gPSBkYXRhLmlkICE9PSBudWxsO1xuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSBkYXRhLnRyYXAgPyBcInRyYXBcIiA6IGRhdGEuZG1nID8gXCJkbWdcIiA6IGRhdGEudGVsZXBvcnQgPyBcInRlbGVwb3J0ZXJcIiA6IG51bGw7XG4gICAgICAgIHRoaXMubWF4SGVhbHRoID0gZGF0YS5oZWFsdGg7XG4gICAgICAgIHRoaXMuYnVpbGRIZWFsdGggPSB0aGlzLm1heEhlYWx0aDtcbiAgICAgICAgdGhpcy5pc1RlYW1PYmplY3QgPSBmdW5jdGlvbiAodG1wT2JqKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gdG1wT2JqLnNpZCA9PT0gKChfYSA9IF90aGlzLm93bmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2lkKSB8fCB0bXBPYmouaXNUZWFtKGZpbmRQbGF5ZXJCeVNpZCh0bXBPYmopKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIEJ1aWxkaW5nO1xufSgpKTtcbmV4cG9ydCB7IEJ1aWxkaW5nIH07XG4iLCIvKipcbiAqIEltcG9ydHNcbiAqL1xuaW1wb3J0IHsgQnVpbGRpbmcgfSBmcm9tIFwiLi9CdWlsZGluZ1wiOyAvLyBJbXBvcnQgQnVpbGRpbmcgY2xhc3NcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSBcIi4uL1VUSUxTL0l0ZW1zXCI7IC8vIEltcG9ydCBHYW1lIEl0ZW1zXG4vKipcbiAqIEJ1aWxkaW5nIE1hbmFnZXIgY2xhc3NcbiAqXG4gKiBUaGlzIGNsYXNzIG1hbmFnZXMgYSBjb2xsZWN0aW9uIG9mIGdhbWUgb2JqZWN0cyBhbmQgcHJvdmlkZXMgbWV0aG9kcyB0byBhZGQsIHJlbW92ZSwgYW5kIGNsZWFyIHRoZW0uXG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTpPYmplY3RNYW5hZ2VyXG4gKi9cbnZhciBPYmplY3RNYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIFByaXZhdGUgY29uc3RydWN0b3IgdG8gcHJldmVudCBpbnN0YW50aWF0aW9uXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE9iamVjdE1hbmFnZXIoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYmplY3Qgb2YgcmVsZXZhbnQgZ2FtZSBvYmplY3RzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlbGV2YW50QnVpbGRpbmdzID0gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgT2JqZWN0TWFuYWdlciBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdE1hbmFnZXJ9IFRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIE9iamVjdE1hbmFnZXIgY2xhc3NcbiAgICAgKiBAbWVtYmVyT2YgT2JqZWN0TWFuYWdlclxuICAgICAqIEBleGFtcGxlIE9iamVjdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICAgICAqL1xuICAgIE9iamVjdE1hbmFnZXIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghT2JqZWN0TWFuYWdlci5pbnN0YW5jZSkge1xuICAgICAgICAgICAgT2JqZWN0TWFuYWdlci5pbnN0YW5jZSA9IG5ldyBPYmplY3RNYW5hZ2VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9iamVjdE1hbmFnZXIuaW5zdGFuY2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgYnVpbGRpbmcgZ2FtZSBvYmplY3QgdG8gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55W119IGRhdGEgVGhlIGRhdGEgdG8gY3JlYXRlIHRoZSBidWlsZGluZyBnYW1lIG9iamVjdFxuICAgICAqIEBtZW1iZXJPZiBPYmplY3RNYW5hZ2VyXG4gICAgICogQGV4YW1wbGUgT2JqZWN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLmFkZEJ1aWxkaW5nKFsxMjM0LCAuLi5dKTtcbiAgICAgKi9cbiAgICBPYmplY3RNYW5hZ2VyLmFkZEJ1aWxkaW5nID0gZnVuY3Rpb24gKGRhdGEsIGluZGV4KSB7XG4gICAgICAgIGRhdGEgPSBkYXRhWzBdO1xuICAgICAgICB2YXIgdG1wT2JqID0gbmV3IEJ1aWxkaW5nKGRhdGFbMCArIGluZGV4XSwgZGF0YVsxICsgaW5kZXhdLCBkYXRhWzIgKyBpbmRleF0sIGRhdGFbMyArIGluZGV4XSwgZGF0YVs0ICsgaW5kZXhdLCBkYXRhWzUgKyBpbmRleF0sIEl0ZW1zW2RhdGFbNiArIGluZGV4XV0sIGRhdGFbNyArIGluZGV4XSA+PSAwXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBzaWQ6IGRhdGFbNyArIGluZGV4XSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbCwgZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyh0bXBPYmopO1xuICAgICAgICBPYmplY3RNYW5hZ2VyLkJ1aWxkaW5ncy5wdXNoKHRtcE9iaik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgZ2FtZSBvYmplY3QgZnJvbSB0aGUgY29sbGVjdGlvbiBieSBTSURcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWQgVGhlIFNJRCBvZiB0aGUgZ2FtZSBvYmplY3QgdG8gcmVtb3ZlXG4gICAgICogQG1lbWJlck9mIE9iamVjdE1hbmFnZXJcbiAgICAgKiBAZXhhbXBsZSBPYmplY3RNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVtb3ZlR2FtZU9iamVjdCgxMjMpO1xuICAgICAqL1xuICAgIE9iamVjdE1hbmFnZXIucHJvdG90eXBlLnJlbW92ZUJ1aWxkaW5nID0gZnVuY3Rpb24gKHNpZCkgeyB9O1xuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgZ2FtZSBvYmplY3RzIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBPYmplY3RNYW5hZ2VyXG4gICAgICogQGV4YW1wbGUgT2JqZWN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlbW92ZUFsbE9iamVjdHMoMTApO1xuICAgICAqL1xuICAgIE9iamVjdE1hbmFnZXIucHJvdG90eXBlLnJlbW92ZUFsbEJ1aWxkaW5ncyA9IGZ1bmN0aW9uIChzaWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgT2JqZWN0TWFuYWdlci5CdWlsZGluZ3MuZm9yRWFjaChmdW5jdGlvbiAodG1wT2JqKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoKChfYSA9IHRtcE9iaiA9PT0gbnVsbCB8fCB0bXBPYmogPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRtcE9iai5vd25lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNpZCkgPT09IHNpZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZUJ1aWxkaW5nKHRtcE9iai5zaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIGdhbWUgb2JqZWN0c1xuICAgICAqL1xuICAgIE9iamVjdE1hbmFnZXIuQnVpbGRpbmdzID0gW107XG4gICAgcmV0dXJuIE9iamVjdE1hbmFnZXI7XG59KCkpO1xuZXhwb3J0IHsgT2JqZWN0TWFuYWdlciB9O1xuIiwiLy9zZWxmIGV4cGxhbmF0b3J5IChob3BlZnVsbHkpXG5leHBvcnQgdmFyIHNpbiA9IE1hdGguc2luLCBjb3MgPSBNYXRoLmNvcywgbWluID0gTWF0aC5taW4sIG1heCA9IE1hdGgubWF4LCByYW5kb20gPSBNYXRoLnJhbmRvbSwgZmxvb3IgPSBNYXRoLmZsb29yLCBjZWlsID0gTWF0aC5jZWlsLCByb3VuZCA9IE1hdGgucm91bmQsIFBJID0gTWF0aC5QSSwgc3FydCA9IE1hdGguc3FydCwgYWJzID0gTWF0aC5hYnMsIHBvdyA9IE1hdGgucG93LCBsb2cgPSBNYXRoLmxvZywgTE4yID0gTWF0aC5MTjIsIGF0YW4yID0gTWF0aC5hdGFuMiwgaHlwb3QgPSBNYXRoLmh5cG90O1xuIiwidmFyIE5vdGlmaWNhdGlvbk1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm90aWZpY2F0aW9uTWFuYWdlcigpIHtcbiAgICB9XG4gICAgTm90aWZpY2F0aW9uTWFuYWdlci5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBOb3RpZmljYXRpb25NYW5hZ2VyLmhvbGRlci5zdHlsZS5jc3NUZXh0ID0gXCJcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgaGVpZ2h0OiAyMDAlO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICB6LWluZGV4OiA5OTk5OTtcXG4gICAgXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoTm90aWZpY2F0aW9uTWFuYWdlci5ob2xkZXIpO1xuICAgIH07XG4gICAgTm90aWZpY2F0aW9uTWFuYWdlci5ob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIE5vdGlmaWNhdGlvbk1hbmFnZXIubm90aWZpY2F0aW9ucyA9IFtdO1xuICAgIHJldHVybiBOb3RpZmljYXRpb25NYW5hZ2VyO1xufSgpKTtcbnZhciBOb3RpZmljYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm90aWZpY2F0aW9uKHRleHQsIGxpZmUsIGNvbG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMubGlmZSA9IGxpZmU7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbi5zdHlsZS5jc3NUZXh0ID0gXCJcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICAgIGJhY2tncm91bmQ6IFwiLmNvbmNhdCh0aGlzLmNvbG9yLCBcIjtcXG4gICAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgIGZvbnQ6IDE4cHggc2Fucy1zZXJpZjtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMS4zNXB4O1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgICAgdHJhbnNpdGlvbjogM3MgdG9wLCAwLjVzIG9wYWNpdHk7XFxuICAgICAgY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMSk7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXG4gICAgXCIpO1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbi5pbm5lclRleHQgPSB0aGlzLnRleHQ7XG4gICAgICAgIE5vdGlmaWNhdGlvbk1hbmFnZXIubm90aWZpY2F0aW9ucy5wdXNoKHRoaXMpO1xuICAgICAgICBOb3RpZmljYXRpb25NYW5hZ2VyLmhvbGRlci5hcHBlbmRDaGlsZCh0aGlzLm5vdGlmaWNhdGlvbik7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubm90aWZpY2F0aW9uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICAgIF90aGlzLm5vdGlmaWNhdGlvbi5zdHlsZS50b3AgPSBcIi0yMDBweFwiOyAvLyB0byBtYWtlIGl0IGZhZGUgdXB3YXJkc1xuICAgICAgICAgICAgLy8gbWF5YmUgaW4gZnV0dXJlIHdlIG1ha2UgaXQgc2NhbGUgMC43NSVcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgbm90aWYgYWZ0ZXIgYSBiaXRcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIE5vdGlmaWNhdGlvbk1hbmFnZXIuaG9sZGVyLnJlbW92ZUNoaWxkKF90aGlzLm5vdGlmaWNhdGlvbik7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gTm90aWZpY2F0aW9uTWFuYWdlci5ub3RpZmljYXRpb25zLmluZGV4T2YoX3RoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgTm90aWZpY2F0aW9uTWFuYWdlci5ub3RpZmljYXRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSwgdGhpcy5saWZlKTtcbiAgICB9XG4gICAgcmV0dXJuIE5vdGlmaWNhdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBOb3RpZmljYXRpb24gfTtcbk5vdGlmaWNhdGlvbk1hbmFnZXIuaW5pdCgpO1xuIiwiLyogUGxheWVyIGNsYXNzICovXG52YXIgUGxheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBsYXllcihzaWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zaWQgPSBzaWQ7XG4gICAgICAgIHRoaXMuaXNUZWFtID0gZnVuY3Rpb24gKHRtcE9iaikge1xuICAgICAgICAgICAgcmV0dXJuICh0bXBPYmouc2lkID09PSBfdGhpcy5zaWQgfHwgKHRtcE9iai50ZWFtICYmIHRtcE9iai50ZWFtID09PSBfdGhpcy50ZWFtKSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIElOSVQ6XG4gICAgICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uIChpZCwgbmFtZSwgeCwgeSwgZGlyLCBoZWFsdGgsIG1heEhlYWx0aCwgc2NhbGUsIHNraW5Db2xvcikge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyO1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XG4gICAgICAgICAgICB0aGlzLm1heEhlYWx0aCA9IG1heEhlYWx0aDtcbiAgICAgICAgICAgIHRoaXMubGFzdEhlYWx0aCA9IHRoaXMuaGVhbHRoO1xuICAgICAgICAgICAgdGhpcy5vbGRYID0geDtcbiAgICAgICAgICAgIHRoaXMub2xkWSA9IHk7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgICAgIHRoaXMueDIgPSB4O1xuICAgICAgICAgICAgdGhpcy55MiA9IHk7XG4gICAgICAgICAgICB0aGlzLngzID0gMDtcbiAgICAgICAgICAgIHRoaXMueTMgPSAwO1xuICAgICAgICAgICAgdGhpcy5za2luSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXN0U2tpbkluZGV4ID0gdGhpcy5za2luSW5kZXg7XG4gICAgICAgICAgICB0aGlzLnRhaWxJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLmxhc3RUYWlsSW5kZXggPSB0aGlzLnRhaWxJbmRleDtcbiAgICAgICAgICAgIHRoaXMud2VhcG9uSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy53ZWFwb25zID0gWzAsIDBdO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gUGxheWVyO1xufSgpKTtcbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiLyoqXG4gKiBJbXBvcnRzXG4gKi9cbmltcG9ydCB7IGZpbmRQbGF5ZXJCeVNpZCB9IGZyb20gXCIuLi9VVElMUy9GaW5kUGxheWVyQnlTSURcIjsgLy8gSW1wb3J0IGZ1bmN0aW9uIHRvIGZpbmQgYSBwbGF5ZXIgYnkgdGhlaXIgU0lEXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjsgLy8gSW1wb3J0IHBsYXllciBjbGFzc1xuLyoqXG4gKiBQbGF5ZXIgTWFuYWdlciBjbGFzc1xuICpcbiAqIFRoaXMgY2xhc3MgbWFuYWdlcyBhIGNvbGxlY3Rpb24gb2YgcGxheWVycyBhbmQgcHJvdmlkZXMgbWV0aG9kcyB0byBhZGQsIHJlbW92ZSwgYW5kIHVwZGF0ZSBwbGF5ZXJzLlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6UGxheWVyc1xuICovXG52YXIgUGxheWVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQbGF5ZXJzKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFBsYXllcnMgY2xhc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbGF5ZXJzfSBUaGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBQbGF5ZXJzIGNsYXNzXG4gICAgICogQG1lbWJlck9mIFBsYXllcnNcbiAgICAgKiBAZXhhbXBsZSBjb25zdCBwbGF5ZXJzID0gUGxheWVycy5nZXRJbnN0YW5jZSgpO1xuICAgICAqL1xuICAgIFBsYXllcnMuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghUGxheWVycy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgUGxheWVycy5pbnN0YW5jZSA9IG5ldyBQbGF5ZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBsYXllcnMuaW5zdGFuY2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgcGxheWVyIHRvIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gU0lEIFRoZSBTSUQgZm9yIHRoZSBwbGF5ZXJcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBkYXRhIFRoZSBwbGF5ZXIncyBkYXRhXG4gICAgICogQG1lbWJlck9mIFBsYXllcnNcbiAgICAgKiBAZXhhbXBsZSBwbGF5ZXJzLmFkZFBsYXllcigxLCB7IG5hbWU6IFwiT25pb25cIiwgc2tpbjogXCJfX3Byb3RvX19cIn0pO1xuICAgICAqL1xuICAgIFBsYXllcnMuYWRkUGxheWVyID0gZnVuY3Rpb24gKFNJRCwgZGF0YSkge1xuICAgICAgICAvKiBEYXRhIGZvcm1hdDpcbiAgICBcbiAgICAgICAgICAwOiB7aWQsIHNpZCwgbmFtZSwgeCwgeSwgc29tZXRoaW5nLCBoZWFsdGgsIHNvbWV0aGluZywgc2NhbGU/LCBzb21ldGhpbmd9XG4gICAgICAgICAgMTogdHJ1ZS9mYWxzZSBmb3IgeWVzL25vIGlzIG1lXG4gICAgICAgICAgKi9cbiAgICAgICAgaWYgKGRhdGFbMV0pIHtcbiAgICAgICAgICAgIC8vIE1ZIFBMQVlFUjpcbiAgICAgICAgICAgIFBsYXllcnMubXlQbGF5ZXIgPSBuZXcgUGxheWVyKFNJRCk7XG4gICAgICAgICAgICBQbGF5ZXJzLnBsYXllcnMucHVzaChQbGF5ZXJzLm15UGxheWVyKTtcbiAgICAgICAgICAgIC8vIElOSVQ6XG4gICAgICAgICAgICBQbGF5ZXJzLm15UGxheWVyLmluaXQoZGF0YVswXVswXSwgZGF0YVswXVsyXSwgZGF0YVswXVszXSwgZGF0YVswXVs0XSwgZGF0YVswXVs1XSwgZGF0YVswXVs2XSwgZGF0YVswXVs3XSwgZGF0YVswXVs4XSwgZGF0YVswXVs5XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdG1wT2JqID0gbmV3IFBsYXllcihTSUQpO1xuICAgICAgICAgICAgUGxheWVycy5wbGF5ZXJzLnB1c2godG1wT2JqKTtcbiAgICAgICAgICAgIHRtcE9iai5pbml0KGRhdGFbMF1bMF0sIGRhdGFbMF1bMl0sIGRhdGFbMF1bM10sIGRhdGFbMF1bNF0sIGRhdGFbMF1bNV0sIGRhdGFbMF1bNl0sIGRhdGFbMF1bN10sIGRhdGFbMF1bOF0sIGRhdGFbMF1bOV0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgcGxheWVyIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWQgVGhlIFNJRCBmb3IgdGhlIHBsYXllciB0byByZW1vdmVcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIHBsYXllcnMucmVtb3ZlUGxheWVyKDEwKTtcbiAgICAgKi9cbiAgICBQbGF5ZXJzLnJlbW92ZVBsYXllciA9IGZ1bmN0aW9uIChzaWQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gUGxheWVycy5wbGF5ZXJzLmluZGV4T2YoUGxheWVycy5wbGF5ZXJzLmZpbmQoZnVuY3Rpb24gKHBsYXllcikgeyByZXR1cm4gcGxheWVyLnNpZCA9PT0gc2lkOyB9KSwgMCk7XG4gICAgICAgIGRlbGV0ZSBQbGF5ZXJzLnBsYXllcnNbaW5kZXhdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGxheWVycyBpbiB0aGUgY29sbGVjdGlvbiBiYXNlZCBvbiBuZXcgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnlbXX0gZGF0YSBUaGUgbmV3IGRhdGEgdG8gdXBkYXRlIHRoZSBwbGF5ZXJzIHdpdGhcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIHBsYXllcnMudXBkYXRlUGxheWVycyh0bXBQbGF5ZXIpO1xuICAgICAqL1xuICAgIFBsYXllcnMudXBkYXRlUGxheWVycyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIFVucmVuZGVyIGFsbCBwbGF5ZXJzIGFuZCByZXJlbmRlciBwbGF5ZXJzIGluIHJhbmdlXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgdG1wUGxheWVyID0gdGhpcy5wbGF5ZXJzW2ldO1xuICAgICAgICAgICAgdG1wUGxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4ICs9IDEzKSB7XG4gICAgICAgICAgICB2YXIgcGxheWVyID0gZmluZFBsYXllckJ5U2lkKGRhdGFbMF0pO1xuICAgICAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgICAgIHBsYXllci50MSA9IHBsYXllci50MiA9PT0gdm9pZCAwID8gRGF0ZS5ub3coKSA6IHBsYXllci50MjtcbiAgICAgICAgICAgICAgICBwbGF5ZXIudDIgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHBsYXllci5vbGRYID0gcGxheWVyLngyO1xuICAgICAgICAgICAgICAgIHBsYXllci5vbGRZID0gcGxheWVyLnkyO1xuICAgICAgICAgICAgICAgIHBsYXllci54MiA9IGRhdGFbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIueTIgPSBkYXRhW2luZGV4ICsgMl07XG4gICAgICAgICAgICAgICAgcGxheWVyLmQxID0gcGxheWVyLmQyID09PSB2b2lkIDAgPyBkYXRhW2luZGV4ICsgM10gOiBwbGF5ZXIuZDI7XG4gICAgICAgICAgICAgICAgcGxheWVyLmRlbHRhID0gMDtcbiAgICAgICAgICAgICAgICBwbGF5ZXIud2VhcG9uSW5kZXggPSBkYXRhW2luZGV4ICsgNV07XG4gICAgICAgICAgICAgICAgcGxheWVyLndlYXBvbkluZGV4IDwgOSAmJiAocGxheWVyLndlYXBvbnNbMF0gPSBwbGF5ZXIud2VhcG9uSW5kZXgpO1xuICAgICAgICAgICAgICAgIHBsYXllci53ZWFwb25JbmRleCA+PSA5ICYmIChwbGF5ZXIud2VhcG9uc1sxXSA9IHBsYXllci53ZWFwb25JbmRleCk7XG4gICAgICAgICAgICAgICAgcGxheWVyLndlYXBvblZhcmlhbnQgPSBkYXRhW2luZGV4ICsgNl07XG4gICAgICAgICAgICAgICAgcGxheWVyLnRlYW0gPSBkYXRhW2luZGV4ICsgN107XG4gICAgICAgICAgICAgICAgcGxheWVyLmxhc3RTa2luSW5kZXggPSBwbGF5ZXIuc2tpbkluZGV4O1xuICAgICAgICAgICAgICAgIHBsYXllci5za2luSW5kZXggPSBkYXRhW2luZGV4ICsgOV07XG4gICAgICAgICAgICAgICAgcGxheWVyLmxhc3RUYWlsSW5kZXggPSBwbGF5ZXIudGFpbEluZGV4O1xuICAgICAgICAgICAgICAgIHBsYXllci50YWlsSW5kZXggPSBkYXRhW2luZGV4ICsgMTBdO1xuICAgICAgICAgICAgICAgIHBsYXllci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgcGxheWVyc1xuICAgICAqL1xuICAgIFBsYXllcnMucGxheWVycyA9IFtdO1xuICAgIC8qKlxuICAgICAqIE15IHBsYXllclxuICAgICAqL1xuICAgIFBsYXllcnMubXlQbGF5ZXIgPSB7fTtcbiAgICByZXR1cm4gUGxheWVycztcbn0oKSk7XG5leHBvcnQgeyBQbGF5ZXJzIH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0aWxlcyB9IGZyb20gXCIuLi9VVElMUy9Qcm9qZWN0aWxlc1wiO1xuaW1wb3J0IHsgcHJvamVjdGlsZU1hbmFnZXIgfSBmcm9tIFwiLi9Qcm9qZWN0aWxlTWFuYWdlclwiO1xudmFyIFByb2plY3RpbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJvamVjdGlsZSh4LCB5LCBkaXIsIHJhbmdlLCBzcGVlZCwgaW5kZXgsIG93bmVyLCBpZ25vcmVPYmplY3RzLCBsYXllcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmRhdGEgPSBQcm9qZWN0aWxlc1tpbmRleF07XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuZGlyID0gZGlyO1xuICAgICAgICB0aGlzLnJhbmdlID0gcmFuZ2U7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgICAgIHRoaXMuaWdub3JlT2JqZWN0cyA9IGlnbm9yZU9iamVjdHM7XG4gICAgICAgIHRoaXMuc2lkID0gcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZUNvdW50O1xuICAgICAgICB0aGlzLmxheWVyID0gbGF5ZXIgfHwgdGhpcy5kYXRhLmxheWVyO1xuICAgICAgICB0aGlzLmRpc3RhbmNlUGVyVGljayA9IFByb2plY3RpbGVzW2luZGV4XS5kaXN0UGVyVGljaztcbiAgICAgICAgdGhpcy5yZXR1cm5OZXh0VGlja1Bvc2l0aW9uID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogeCArIF90aGlzLmRpc3RhbmNlUGVyVGljayAqIE1hdGguc2luKF90aGlzLmRpciksXG4gICAgICAgICAgICAgICAgeTogeSArIF90aGlzLmRpc3RhbmNlUGVyVGljayAqIE1hdGguY29zKF90aGlzLmRpciksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gUHJvamVjdGlsZTtcbn0oKSk7XG5leHBvcnQgeyBQcm9qZWN0aWxlIH07XG4iLCJpbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gXCIuLi9VVElMUy9HZXREaXN0YW5jZVwiO1xuaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gXCIuL1Byb2plY3RpbGVcIjtcbnZhciBwcm9qZWN0aWxlTWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBwcm9qZWN0aWxlTWFuYWdlcigpIHtcbiAgICB9XG4gICAgcHJvamVjdGlsZU1hbmFnZXIuYWRkUHJvamVjdGlsZSA9IGZ1bmN0aW9uICh4LCB5LCBkaXIsIHJhbmdlLCBzcGVlZCwgaW5kZXgsIGxheWVyLCBzaWQpIHtcbiAgICAgICAgdmFyIHByb2plY3RpbGUgPSBuZXcgUHJvamVjdGlsZSh4LCB5LCBkaXIsIHJhbmdlLCBzcGVlZCwgaW5kZXgsIG51bGwsIG51bGwsIGxheWVyKTtcbiAgICAgICAgcHJvamVjdGlsZS5zaWQgPSBzaWQ7XG4gICAgICAgIGNvbnNvbGUud2Fybihwcm9qZWN0aWxlKTtcbiAgICAgICAgcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZXMucHVzaChwcm9qZWN0aWxlKTtcbiAgICAgICAgcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZUNvdW50Kys7XG4gICAgfTtcbiAgICBwcm9qZWN0aWxlTWFuYWdlci5yZW1vdmVQcm9qZWN0aWxlID0gZnVuY3Rpb24gKFNJRCkge1xuICAgICAgICB2YXIgaXRlbSA9IHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVzLmluZGV4T2YocHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZXMuZmluZChmdW5jdGlvbiAocHJvaikgeyByZXR1cm4gcHJvai5zaWQgPT09IFNJRDsgfSksIDApO1xuICAgICAgICBjb25zb2xlLndhcm4ocHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZXNbaXRlbV0sIFNJRCk7XG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0aWxlTWFuYWdlci5wcm9qZWN0aWxlc1tpdGVtXTtcbiAgICAgICAgcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZUNvdW50LS07XG4gICAgfTtcbiAgICAvL211c3QgYmUgY2FsbGVkIGV2ZXJ5IHRpY2tcbiAgICBwcm9qZWN0aWxlTWFuYWdlci5yZXRyaWV2ZURhbmdlcm91c1Byb2plY3RpbGVzID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgICB2YXIgcHJvamVjdGlsZXMgPSBbXTtcbiAgICAgICAgLypcbiAgICAgICAgICAgIG9rIHNvIHdlIGFyZSBnb25uYSBmaWx0ZXIgdGhpcyBzaGl0XG4gICAgICAgICAgICBieSBkaXN0YW5jZSB0cmF2ZWxhYmxlIHBlciB0aWNrXG4gICAgICAgICAgICArIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHByb2plY3RpbGVcbiAgICBcbiAgICAgICAgICAgIHNvIGlmIGl0cyBnb2luZyB0byBoaXQgdGhlIHBsYXllclxuICAgICAgICAgICAgd2UgY2FuIHJldHVybiBpdCBpbiBhbiBhcnJheVxuICAgICAgICAgICAgZm9yIGRhbWFnZSBwb3RlbnRpYWwgbGF0ZXJcbiAgICAgICAgICAgIGFuZCBhbHNvIGNvb2wgdmlzdWFscyB5a1xuICAgICAgICAgICAgKi9cbiAgICAgICAgLy90aGUgY29kZSBiZWxvdyBpcyB2ZXJ5IGJldGEsIGFuZCBpcyBqdXN0IGEgcGxhY2Vob2xkZXIgdG8gbWFrZSBpdCBsb29rIGxpa2UgaSBkaWQgd29yayB0b2RheVxuICAgICAgICAvL2luIHRoZSBmdXR1cmUsIG1hcCBvdXQgYWxsIHRoZSBwcm9qZWN0aWxlcyBzcGVlZCBhbmQgYXNzaWduIGl0IHdpdGggdGhlIHByb2plY3RpbGUgc3BlZWRzL3RpY2tcbiAgICAgICAgLy9Qcm9qZWN0aWxlLnByb2plY3RpbGVzLm1hcCgocHJvamVjdGlsZSkgPT4gcHJvamVjdGlsZS5kaXN0UGVyVGljayAvKiAoMWUzIC8gOSkqLyk7XG4gICAgICAgIHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVzLmZvckVhY2goZnVuY3Rpb24gKHByb2plY3RpbGUpIHtcbiAgICAgICAgICAgIGlmIChnZXREaXN0YW5jZShwcm9qZWN0aWxlLnJldHVybk5leHRUaWNrUG9zaXRpb24ocHJvamVjdGlsZS54LCBwcm9qZWN0aWxlLnkpLCBwbGF5ZXIsIDAsIDIpIDw9XG4gICAgICAgICAgICAgICAgcGxheWVyLnNjYWxlKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdGlsZXMucHVzaChwcm9qZWN0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0aWxlcy5zb3J0KGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGlzdGFuY2UocGxheWVyLCB7IHg6IHgsIHk6IHkgfSwgMiwgMCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZUNvdW50ID0gMDtcbiAgICBwcm9qZWN0aWxlTWFuYWdlci5wcm9qZWN0aWxlcyA9IFtdO1xuICAgIHJldHVybiBwcm9qZWN0aWxlTWFuYWdlcjtcbn0oKSk7XG5leHBvcnQgeyBwcm9qZWN0aWxlTWFuYWdlciB9O1xuIiwiLyoqXG4gKiBJbXBvcnRzIHRoZSBQbGF5ZXJzIGNsYXNzXG4gKi9cbmltcG9ydCB7IFBsYXllcnMgfSBmcm9tIFwiLi4vUGxheWVycy9QbGF5ZXJNYW5hZ2VyXCI7XG4vKipcbiAqIEZpbmRzIGEgcGxheWVyIGJ5IHRoZWlyIFNJRFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaWQgVGhlIFNJRCBvZiB0aGUgcGxheWVyIHRvIGZpbmRcbiAqIEByZXR1cm5zIHthbnl9IFRoZSBwbGF5ZXIgd2l0aCB0aGUgbWF0Y2hpbmcgU0lELCBvciB1bmRlZmluZWQgaWYgbm90IGZvdW5kXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkZpbmRQbGF5ZXJCeVNJRFxuICogQGV4YW1wbGUgZmluZFBsYXllckJ5U2lkKDEyMyk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGxheWVyQnlTaWQoc2lkKSB7XG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgZmluZCBtZXRob2QgdG8gc2VhcmNoIHRoZSBwbGF5ZXJzIGFycmF5IGZvciBhIHBsYXllciB3aXRoIGEgbWF0Y2hpbmcgU0lEXG4gICAgICovXG4gICAgcmV0dXJuIFBsYXllcnMucGxheWVycy5maW5kKGZ1bmN0aW9uIChwbGF5ZXIpIHsgcmV0dXJuIHBsYXllci5zaWQgPT09IHNpZDsgfSk7XG59XG4iLCIvKipcbiAqIEltcG9ydHMgdGhlIGF0YW4yIGZ1bmN0aW9uIGZyb20gdGhlIE1hdGggbW9kdWxlXG4gKi9cbmltcG9ydCB7IGF0YW4yIH0gZnJvbSBcIi4uL01hdGhcIjtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGlyZWN0aW9uIGZyb20gb2JqMSB0byBvYmoyXG4gKlxuICogQHBhcmFtIHthbnl9IG9iajEgVGhlIHNvdXJjZSBvYmplY3RcbiAqIEBwYXJhbSB7YW55fSBvYmoyIFRoZSB0YXJnZXQgb2JqZWN0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgZGlyZWN0aW9uIGluIHJhZGlhbnMgZnJvbSBvYmoxIHRvIG9iajJcbiAqIEBtZW1iZXJPZiBtb2R1bGU6R2V0RGlyZWN0aW9uXG4gKiBAZXhhbXBsZSBnZXREaXJlY3Rpb24ocGxheWVyLCBlbmVteSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXJlY3Rpb24ob2JqMSwgb2JqMikge1xuICAgIC8qKlxuICAgICAqIFVzZXMgdGhlIGF0YW4yIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgZGlyZWN0aW9uXG4gICAgICogYXRhbjIoeSwgeCkgcmV0dXJucyB0aGUgYW5nbGUgaW4gcmFkaWFucyBmcm9tIHRoZSB4LWF4aXMgdG8gdGhlIHBvaW50ICh4LCB5KVxuICAgICAqL1xuICAgIHJldHVybiBhdGFuMihvYmoxLnkgLSBvYmoyLnksIG9iajEueCAtIG9iajIueCk7XG59XG4vL3RoaXMgbmVlZHMgdG8gYmUgcmVkb25lIHRvIGFjY291bnQgZm9yIHgyL3kyXG4iLCIvKipcbiAqIEltcG9ydHMgdGhlIGh5cG90IGZ1bmN0aW9uIGZyb20gdGhlIE1hdGggbW9kdWxlXG4gKi9cbmltcG9ydCB7IGh5cG90IH0gZnJvbSBcIi4uL01hdGhcIjtcbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gb2JqZWN0c1xuICpcbiAqIEBwYXJhbSB7YW55fSBvYmoxIFRoZSBmaXJzdCBvYmplY3RcbiAqIEBwYXJhbSB7YW55fSBvYmoyIFRoZSBzZWNvbmQgb2JqZWN0XG4gKiBAcGFyYW0ge251bWJlcn0gb2JqMXR5cGUgVGhlIGNvb3JkaW5hdGUgdHlwZSBvZiBvYmoxIChvcHRpb25hbClcbiAqIEBwYXJhbSB7bnVtYmVyfSBvYmoydHlwZSBUaGUgY29vcmRpbmF0ZSB0eXBlIG9mIG9iajIgKG9wdGlvbmFsKVxuICogQHJldHVybnMge251bWJlcn0gVGhlIGRpc3RhbmNlIGJldHdlZW4gb2JqMSBhbmQgb2JqMlxuICogQG1lbWJlck9mIG1vZHVsZTpHZXREaXN0YW5jZVxuICogQGV4YW1wbGUgZ2V0RGlzdGFuY2UocGxheWVyLCBlbmVteSwgMiwgMik7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZShvYmoxLCBvYmoyLCBvYmoxdHlwZSwgb2JqMnR5cGUpIHtcbiAgICAvKipcbiAgICAgKiBVc2VzIHRoZSBoeXBvdCBmdW5jdGlvbiB0byBjYWxjdWxhdGUgdGhlIGRpc3RhbmNlXG4gICAgICogaHlwb3QoYSwgYikgcmV0dXJucyB0aGUgc3F1YXJlIHJvb3Qgb2YgYV4yICsgYl4yXG4gICAgICpcbiAgICAgKiBUaGUgeCBhbmQgeSBjb29yZGluYXRlcyBhcmUgZHluYW1pY2FsbHkgYWNjZXNzZWQgdXNpbmcgYnJhY2tldCBub3RhdGlvblxuICAgICAqIFRoZSB0eXBlIHBhcmFtZXRlcnMgYXJlIHVzZWQgdG8gYXBwZW5kIGEgc3VmZml4IHRvIHRoZSBwcm9wZXJ0eSBuYW1lcyAoZS5nLiBcIngxXCIgb3IgXCJ5MlwiKVxuICAgICAqL1xuICAgIHJldHVybiBoeXBvdChvYmoxW1wieFwiLmNvbmNhdChvYmoxdHlwZSB8fCBcIlwiKV0gLSBvYmoyW1wieFwiLmNvbmNhdChvYmoydHlwZSB8fCBcIlwiKV0sIG9iajFbXCJ5XCIuY29uY2F0KG9iajF0eXBlIHx8IFwiXCIpXSAtIG9iajJbXCJ5XCIuY29uY2F0KG9iajJ0eXBlIHx8IFwiXCIpXSk7XG59XG4iLCJleHBvcnQgdmFyIGl0ZW1Hcm91cHMgPSBbXG4gICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogXCJmb29kXCIsXG4gICAgICAgIGxheWVyOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogXCJ3YWxsc1wiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAzMCxcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiBcInNwaWtlc1wiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAxNSxcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiBcIm1pbGxcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogNyxcbiAgICAgICAgc2FuZGJveExpbWl0OiAyOTksXG4gICAgICAgIGxheWVyOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogXCJtaW5lXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDEsXG4gICAgICAgIGxheWVyOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogXCJ0cmFwXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDYsXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIG5hbWU6IFwiYm9vc3RlclwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAxMixcbiAgICAgICAgc2FuZGJveExpbWl0OiAyOTksXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIG5hbWU6IFwidHVycmV0XCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDIsXG4gICAgICAgIGxheWVyOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogOCxcbiAgICAgICAgbmFtZTogXCJ3YXRjaHRvd2VyXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDEyLFxuICAgICAgICBsYXllcjogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIG5hbWU6IFwiYnVmZlwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiA0LFxuICAgICAgICBsYXllcjogLTEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMCxcbiAgICAgICAgbmFtZTogXCJzcGF3blwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAxLFxuICAgICAgICBsYXllcjogLTEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMSxcbiAgICAgICAgbmFtZTogXCJzYXBsaW5nXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDIsXG4gICAgICAgIGxheWVyOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTIsXG4gICAgICAgIG5hbWU6IFwiYmxvY2tlclwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAzLFxuICAgICAgICBsYXllcjogLTEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMyxcbiAgICAgICAgbmFtZTogXCJ0ZWxlcG9ydGVyXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDIsXG4gICAgICAgIHNhbmRib3hMaW1pdDogMjk5LFxuICAgICAgICBsYXllcjogLTEsXG4gICAgfSxcbl07XG4iLCJpbXBvcnQgeyBpdGVtR3JvdXBzIH0gZnJvbSBcIi4vSXRlbUdyb3Vwc1wiO1xuZXhwb3J0IHZhciBJdGVtcyA9IFtcbiAgICB7XG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzBdLFxuICAgICAgICBuYW1lOiBcImFwcGxlXCIsXG4gICAgICAgIGRlc2M6IFwicmVzdG9yZXMgMjAgaGVhbHRoIHdoZW4gY29uc3VtZWRcIixcbiAgICAgICAgcmVxOiBbXCJmb29kXCIsIDEwXSxcbiAgICAgICAgY29uc3VtZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LmNoYW5nZUhlYWx0aCgyMCwgdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhlYWxpbmc6IDIwLFxuICAgICAgICBzY2FsZTogMjIsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDE1LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDMsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzBdLFxuICAgICAgICBuYW1lOiBcImNvb2tpZVwiLFxuICAgICAgICBkZXNjOiBcInJlc3RvcmVzIDQwIGhlYWx0aCB3aGVuIGNvbnN1bWVkXCIsXG4gICAgICAgIHJlcTogW1wiZm9vZFwiLCAxNV0sXG4gICAgICAgIGNvbnN1bWU6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdC5jaGFuZ2VIZWFsdGgoNDAsIHQpO1xuICAgICAgICB9LFxuICAgICAgICBoZWFsaW5nOiA0MCxcbiAgICAgICAgc2NhbGU6IDI3LFxuICAgICAgICBob2xkT2Zmc2V0OiAxNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1swXSxcbiAgICAgICAgbmFtZTogXCJjaGVlc2VcIixcbiAgICAgICAgZGVzYzogXCJyZXN0b3JlcyAzMCBoZWFsdGggYW5kIGFub3RoZXIgNTAgb3ZlciA1IHNlY29uZHNcIixcbiAgICAgICAgcmVxOiBbXCJmb29kXCIsIDI1XSxcbiAgICAgICAgY29uc3VtZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiAoKCEhdC5jaGFuZ2VIZWFsdGgoMzAsIHQpIHx8IHQuaGVhbHRoIDwgMTAwKSAmJlxuICAgICAgICAgICAgICAgICgodC5kbWdPdmVyVGltZS5kbWcgPSAtMTApLFxuICAgICAgICAgICAgICAgICAgICAodC5kbWdPdmVyVGltZS5kb2VyID0gdCksXG4gICAgICAgICAgICAgICAgICAgICh0LmRtZ092ZXJUaW1lLnRpbWUgPSA1KSxcbiAgICAgICAgICAgICAgICAgICAgITApKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGVhbGluZzogMzAsXG4gICAgICAgIHNjYWxlOiAyNyxcbiAgICAgICAgaG9sZE9mZnNldDogMTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzFdLFxuICAgICAgICBuYW1lOiBcIndvb2Qgd2FsbFwiLFxuICAgICAgICBkZXNjOiBcInByb3ZpZGVzIHByb3RlY3Rpb24gZm9yIHlvdXIgdmlsbGFnZVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMTBdLFxuICAgICAgICBwcm9qRG1nOiAhMCxcbiAgICAgICAgaGVhbHRoOiAzODAsXG4gICAgICAgIHNjYWxlOiA1MCxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiAzLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxXSxcbiAgICAgICAgbmFtZTogXCJzdG9uZSB3YWxsXCIsXG4gICAgICAgIGRlc2M6IFwicHJvdmlkZXMgaW1wcm92ZWQgcHJvdGVjdGlvbiBmb3IgeW91ciB2aWxsYWdlXCIsXG4gICAgICAgIHJlcTogW1wic3RvbmVcIiwgMjVdLFxuICAgICAgICBoZWFsdGg6IDkwMCxcbiAgICAgICAgc2NhbGU6IDUwLFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDcsXG4gICAgICAgIHByZTogMSxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMV0sXG4gICAgICAgIG5hbWU6IFwiY2FzdGxlIHdhbGxcIixcbiAgICAgICAgZGVzYzogXCJwcm92aWRlcyBwb3dlcmZ1bCBwcm90ZWN0aW9uIGZvciB5b3VyIHZpbGxhZ2VcIixcbiAgICAgICAgcmVxOiBbXCJzdG9uZVwiLCAzNV0sXG4gICAgICAgIGhlYWx0aDogMTUwMCxcbiAgICAgICAgc2NhbGU6IDUyLFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1syXSxcbiAgICAgICAgbmFtZTogXCJzcGlrZXNcIixcbiAgICAgICAgZGVzYzogXCJkYW1hZ2VzIGVuZW1pZXMgd2hlbiB0aGV5IHRvdWNoIHRoZW1cIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDIwLCBcInN0b25lXCIsIDVdLFxuICAgICAgICBoZWFsdGg6IDQwMCxcbiAgICAgICAgZG1nOiAyMCxcbiAgICAgICAgc2NhbGU6IDQ5LFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAtMjMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDgsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA1LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1syXSxcbiAgICAgICAgbmFtZTogXCJncmVhdGVyIHNwaWtlc1wiLFxuICAgICAgICBkZXNjOiBcImRhbWFnZXMgZW5lbWllcyB3aGVuIHRoZXkgdG91Y2ggdGhlbVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMzAsIFwic3RvbmVcIiwgMTBdLFxuICAgICAgICBoZWFsdGg6IDUwMCxcbiAgICAgICAgZG1nOiAzNSxcbiAgICAgICAgc2NhbGU6IDUyLFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAtMjMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDgsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA5LFxuICAgICAgICBwcmU6IDEsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzJdLFxuICAgICAgICBuYW1lOiBcInBvaXNvbiBzcGlrZXNcIixcbiAgICAgICAgZGVzYzogXCJwb2lzb25zIGVuZW1pZXMgd2hlbiB0aGV5IHRvdWNoIHRoZW1cIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDM1LCBcInN0b25lXCIsIDE1XSxcbiAgICAgICAgaGVhbHRoOiA2MDAsXG4gICAgICAgIGRtZzogMzAsXG4gICAgICAgIHBEbWc6IDUsXG4gICAgICAgIHNjYWxlOiA1MixcbiAgICAgICAgc3ByaXRlUGFkZGluZzogLTIzLFxuICAgICAgICBob2xkT2Zmc2V0OiA4LFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogOSxcbiAgICAgICAgcHJlOiAyLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1syXSxcbiAgICAgICAgbmFtZTogXCJzcGlubmluZyBzcGlrZXNcIixcbiAgICAgICAgZGVzYzogXCJkYW1hZ2VzIGVuZW1pZXMgd2hlbiB0aGV5IHRvdWNoIHRoZW1cIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDMwLCBcInN0b25lXCIsIDIwXSxcbiAgICAgICAgaGVhbHRoOiA1MDAsXG4gICAgICAgIGRtZzogNDUsXG4gICAgICAgIHR1cm5TcGVlZDogMC4wMDMsXG4gICAgICAgIHNjYWxlOiA1MixcbiAgICAgICAgc3ByaXRlUGFkZGluZzogLTIzLFxuICAgICAgICBob2xkT2Zmc2V0OiA4LFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzNdLFxuICAgICAgICBuYW1lOiBcIndpbmRtaWxsXCIsXG4gICAgICAgIGRlc2M6IFwiZ2VuZXJhdGVzIGdvbGQgb3ZlciB0aW1lXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCA1MCwgXCJzdG9uZVwiLCAxMF0sXG4gICAgICAgIGhlYWx0aDogNDAwLFxuICAgICAgICBwcHM6IDEsXG4gICAgICAgIHR1cm5TcGVlZDogMC4wMDE2LFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAyNSxcbiAgICAgICAgaWNvbkxpbmVNdWx0OiAxMixcbiAgICAgICAgc2NhbGU6IDQ1LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IDUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNSxcbiAgICAgICAgcHJlOiAxLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1szXSxcbiAgICAgICAgbmFtZTogXCJmYXN0ZXIgd2luZG1pbGxcIixcbiAgICAgICAgZGVzYzogXCJnZW5lcmF0ZXMgbW9yZSBnb2xkIG92ZXIgdGltZVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgNjAsIFwic3RvbmVcIiwgMjBdLFxuICAgICAgICBoZWFsdGg6IDUwMCxcbiAgICAgICAgcHBzOiAxLjUsXG4gICAgICAgIHR1cm5TcGVlZDogMC4wMDI1LFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAyNSxcbiAgICAgICAgaWNvbkxpbmVNdWx0OiAxMixcbiAgICAgICAgc2NhbGU6IDQ3LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IDUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogOCxcbiAgICAgICAgcHJlOiAxLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1szXSxcbiAgICAgICAgbmFtZTogXCJwb3dlciBtaWxsXCIsXG4gICAgICAgIGRlc2M6IFwiZ2VuZXJhdGVzIG1vcmUgZ29sZCBvdmVyIHRpbWVcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDEwMCwgXCJzdG9uZVwiLCA1MF0sXG4gICAgICAgIGhlYWx0aDogODAwLFxuICAgICAgICBwcHM6IDIsXG4gICAgICAgIHR1cm5TcGVlZDogMC4wMDUsXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IDI1LFxuICAgICAgICBpY29uTGluZU11bHQ6IDEyLFxuICAgICAgICBzY2FsZTogNDcsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA1LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s0XSxcbiAgICAgICAgdHlwZTogMixcbiAgICAgICAgbmFtZTogXCJtaW5lXCIsXG4gICAgICAgIGRlc2M6IFwiYWxsb3dzIHlvdSB0byBtaW5lIHN0b25lXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAyMCwgXCJzdG9uZVwiLCAxMDBdLFxuICAgICAgICBpY29uTGluZU11bHQ6IDEyLFxuICAgICAgICBzY2FsZTogNjUsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA1LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxMV0sXG4gICAgICAgIHR5cGU6IDAsXG4gICAgICAgIG5hbWU6IFwic2FwbGluZ1wiLFxuICAgICAgICBkZXNjOiBcImFsbG93cyB5b3UgdG8gZmFybSB3b29kXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAxNTBdLFxuICAgICAgICBpY29uTGluZU11bHQ6IDEyLFxuICAgICAgICBjb2xEaXY6IDAuNSxcbiAgICAgICAgc2NhbGU6IDExMCxcbiAgICAgICAgaG9sZE9mZnNldDogNTAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtMTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNCxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbNV0sXG4gICAgICAgIG5hbWU6IFwicGl0IHRyYXBcIixcbiAgICAgICAgZGVzYzogXCJwaXQgdGhhdCB0cmFwcyBlbmVtaWVzIGlmIHRoZXkgd2FsayBvdmVyIGl0XCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAzMCwgXCJzdG9uZVwiLCAzMF0sXG4gICAgICAgIHRyYXA6ICEwLFxuICAgICAgICBpZ25vcmVDb2xsaXNpb246ICEwLFxuICAgICAgICBoaWRlRnJvbUVuZW15OiAhMCxcbiAgICAgICAgaGVhbHRoOiA1MDAsXG4gICAgICAgIGNvbERpdjogMC4yLFxuICAgICAgICBzY2FsZTogNTAsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNCxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbNl0sXG4gICAgICAgIG5hbWU6IFwiYm9vc3QgcGFkXCIsXG4gICAgICAgIGRlc2M6IFwicHJvdmlkZXMgYm9vc3Qgd2hlbiBzdGVwcGVkIG9uXCIsXG4gICAgICAgIHJlcTogW1wic3RvbmVcIiwgMjAsIFwid29vZFwiLCA1XSxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgYm9vc3RTcGVlZDogMS41LFxuICAgICAgICBoZWFsdGg6IDE1MCxcbiAgICAgICAgY29sRGl2OiAwLjcsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s3XSxcbiAgICAgICAgZG9VcGRhdGU6ICEwLFxuICAgICAgICBuYW1lOiBcInR1cnJldFwiLFxuICAgICAgICBkZXNjOiBcImRlZmVuc2l2ZSBzdHJ1Y3R1cmUgdGhhdCBzaG9vdHMgYXQgZW5lbWllc1wiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMjAwLCBcInN0b25lXCIsIDE1MF0sXG4gICAgICAgIGhlYWx0aDogODAwLFxuICAgICAgICBwcm9qZWN0aWxlOiAxLFxuICAgICAgICBzaG9vdFJhbmdlOiA3MDAsXG4gICAgICAgIHNob290UmF0ZTogMjIwMCxcbiAgICAgICAgc2NhbGU6IDQzLFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDcsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzhdLFxuICAgICAgICBuYW1lOiBcInBsYXRmb3JtXCIsXG4gICAgICAgIGRlc2M6IFwicGxhdGZvcm0gdG8gc2hvb3Qgb3ZlciB3YWxscyBhbmQgY3Jvc3Mgb3ZlciB3YXRlclwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMjBdLFxuICAgICAgICBpZ25vcmVDb2xsaXNpb246ICEwLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIGhlYWx0aDogMzAwLFxuICAgICAgICBzY2FsZTogNDMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbOV0sXG4gICAgICAgIG5hbWU6IFwiaGVhbGluZyBwYWRcIixcbiAgICAgICAgZGVzYzogXCJzdGFuZGluZyBvbiBpdCB3aWxsIHNsb3dseSBoZWFsIHlvdVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMzAsIFwiZm9vZFwiLCAxMF0sXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIGhlYWxDb2w6IDE1LFxuICAgICAgICBoZWFsdGg6IDQwMCxcbiAgICAgICAgY29sRGl2OiAwLjcsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA5LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxMF0sXG4gICAgICAgIG5hbWU6IFwic3Bhd24gcGFkXCIsXG4gICAgICAgIGRlc2M6IFwieW91IHdpbGwgc3Bhd24gaGVyZSB3aGVuIHlvdSBkaWUgYnV0IGl0IHdpbGwgZGlzc2FwZWFyXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAxMDAsIFwic3RvbmVcIiwgMTAwXSxcbiAgICAgICAgaGVhbHRoOiA0MDAsXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIHNwYXduUG9pbnQ6ICEwLFxuICAgICAgICBzY2FsZTogNDUsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMTJdLFxuICAgICAgICBuYW1lOiBcImJsb2NrZXJcIixcbiAgICAgICAgZGVzYzogXCJibG9ja3MgYnVpbGRpbmcgaW4gcmFkaXVzXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAzMCwgXCJzdG9uZVwiLCAyNV0sXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIGJsb2NrZXI6IDMwMCxcbiAgICAgICAgaGVhbHRoOiA0MDAsXG4gICAgICAgIGNvbERpdjogMC43LFxuICAgICAgICBzY2FsZTogNDUsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMTNdLFxuICAgICAgICBuYW1lOiBcInRlbGVwb3J0ZXJcIixcbiAgICAgICAgZGVzYzogXCJ0ZWxlcG9ydHMgeW91IHRvIGEgcmFuZG9tIHBvaW50IG9uIHRoZSBtYXBcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDYwLCBcInN0b25lXCIsIDYwXSxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgdGVsZXBvcnQ6ICEwLFxuICAgICAgICBoZWFsdGg6IDIwMCxcbiAgICAgICAgY29sRGl2OiAwLjcsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuXTtcbiIsImV4cG9ydCB2YXIgUHJvamVjdGlsZXMgPSBbXG4gICAge1xuICAgICAgICBpbmR4OiAwLFxuICAgICAgICBsYXllcjogMCxcbiAgICAgICAgc3JjOiBcImFycm93XzFcIixcbiAgICAgICAgZG1nOiAyNSxcbiAgICAgICAgc3BlZWQ6IDEuNixcbiAgICAgICAgc2NhbGU6IDEwMyxcbiAgICAgICAgcmFuZ2U6IDFlMyxcbiAgICAgICAgZGlzdFBlclRpY2s6IDEuNixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5keDogMSxcbiAgICAgICAgbGF5ZXI6IDEsXG4gICAgICAgIGRtZzogMjUsXG4gICAgICAgIHNjYWxlOiAyMCxcbiAgICAgICAgZGlzdFBlclRpY2s6IDEuNixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5keDogMCxcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgICAgIHNyYzogXCJhcnJvd18xXCIsXG4gICAgICAgIGRtZzogMzUsXG4gICAgICAgIHNwZWVkOiAyLjUsXG4gICAgICAgIHNjYWxlOiAxMDMsXG4gICAgICAgIHJhbmdlOiAxMjAwLFxuICAgICAgICBkaXN0UGVyVGljazogMi41LFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmR4OiAwLFxuICAgICAgICBsYXllcjogMCxcbiAgICAgICAgc3JjOiBcImFycm93XzFcIixcbiAgICAgICAgZG1nOiAzMCxcbiAgICAgICAgc3BlZWQ6IDIsXG4gICAgICAgIHNjYWxlOiAxMDMsXG4gICAgICAgIHJhbmdlOiAxMjAwLFxuICAgICAgICBkaXN0UGVyVGljazogMixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5keDogMSxcbiAgICAgICAgbGF5ZXI6IDEsXG4gICAgICAgIGRtZzogMTYsXG4gICAgICAgIHNjYWxlOiAyMCxcbiAgICAgICAgZGlzdFBlclRpY2s6IE5hTixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5keDogMCxcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgICAgIHNyYzogXCJidWxsZXRfMVwiLFxuICAgICAgICBkbWc6IDUwLFxuICAgICAgICBzcGVlZDogMy42LFxuICAgICAgICBzY2FsZTogMTYwLFxuICAgICAgICByYW5nZTogMTQwMCxcbiAgICAgICAgZGlzdFBlclRpY2s6IDMuNixcbiAgICB9LFxuXTtcbiIsImV4cG9ydCB2YXIgYmFkV29yZHMgPSBbXG4gICAgXCJhaG9sZVwiLFxuICAgIFwiYW51c1wiLFxuICAgIFwiYXNoMGxlXCIsXG4gICAgXCJhc2gwbGVzXCIsXG4gICAgXCJhc2hvbGVzXCIsXG4gICAgXCJhc3NcIixcbiAgICBcIkFzcyBNb25rZXlcIixcbiAgICBcIkFzc2ZhY2VcIixcbiAgICBcImFzc2gwbGVcIixcbiAgICBcImFzc2gwbGV6XCIsXG4gICAgXCJhc3Nob2xlXCIsXG4gICAgXCJhc3Nob2xlc1wiLFxuICAgIFwiYXNzaG9selwiLFxuICAgIFwiYXNzd2lwZVwiLFxuICAgIFwiYXp6aG9sZVwiLFxuICAgIFwiYmFzc3RlcmRzXCIsXG4gICAgXCJiYXN0YXJkXCIsXG4gICAgXCJiYXN0YXJkc1wiLFxuICAgIFwiYmFzdGFyZHpcIixcbiAgICBcImJhc3RlcmRzXCIsXG4gICAgXCJiYXN0ZXJkelwiLFxuICAgIFwiQmlhdGNoXCIsXG4gICAgXCJiaXRjaFwiLFxuICAgIFwiYml0Y2hlc1wiLFxuICAgIFwiQmxvdyBKb2JcIixcbiAgICBcImJvZmZpbmdcIixcbiAgICBcImJ1dHRob2xlXCIsXG4gICAgXCJidXR0d2lwZVwiLFxuICAgIFwiYzBja1wiLFxuICAgIFwiYzBja3NcIixcbiAgICBcImMwa1wiLFxuICAgIFwiQ2FycGV0IE11bmNoZXJcIixcbiAgICBcImNhd2tcIixcbiAgICBcImNhd2tzXCIsXG4gICAgXCJDbGl0XCIsXG4gICAgXCJjbnRzXCIsXG4gICAgXCJjbnR6XCIsXG4gICAgXCJjb2NrXCIsXG4gICAgXCJjb2NraGVhZFwiLFxuICAgIFwiY29jay1oZWFkXCIsXG4gICAgXCJjb2Nrc1wiLFxuICAgIFwiQ29ja1N1Y2tlclwiLFxuICAgIFwiY29jay1zdWNrZXJcIixcbiAgICBcImNyYXBcIixcbiAgICBcImN1bVwiLFxuICAgIFwiY3VudFwiLFxuICAgIFwiY3VudHNcIixcbiAgICBcImN1bnR6XCIsXG4gICAgXCJkaWNrXCIsXG4gICAgXCJkaWxkMFwiLFxuICAgIFwiZGlsZDBzXCIsXG4gICAgXCJkaWxkb1wiLFxuICAgIFwiZGlsZG9zXCIsXG4gICAgXCJkaWxsZDBcIixcbiAgICBcImRpbGxkMHNcIixcbiAgICBcImRvbWluYXRyaWNrc1wiLFxuICAgIFwiZG9taW5hdHJpY3NcIixcbiAgICBcImRvbWluYXRyaXhcIixcbiAgICBcImR5a2VcIixcbiAgICBcImVuZW1hXCIsXG4gICAgXCJmIHUgYyBrXCIsXG4gICAgXCJmIHUgYyBrIGUgclwiLFxuICAgIFwiZmFnXCIsXG4gICAgXCJmYWcxdFwiLFxuICAgIFwiZmFnZXRcIixcbiAgICBcImZhZ2cxdFwiLFxuICAgIFwiZmFnZ2l0XCIsXG4gICAgXCJmYWdnb3RcIixcbiAgICBcImZhZ2cwdFwiLFxuICAgIFwiZmFnaXRcIixcbiAgICBcImZhZ3NcIixcbiAgICBcImZhZ3pcIixcbiAgICBcImZhaWdcIixcbiAgICBcImZhaWdzXCIsXG4gICAgXCJmYXJ0XCIsXG4gICAgXCJmbGlwcGluZyB0aGUgYmlyZFwiLFxuICAgIFwiZnVja1wiLFxuICAgIFwiZnVja2VyXCIsXG4gICAgXCJmdWNraW5cIixcbiAgICBcImZ1Y2tpbmdcIixcbiAgICBcImZ1Y2tzXCIsXG4gICAgXCJGdWRnZSBQYWNrZXJcIixcbiAgICBcImZ1a1wiLFxuICAgIFwiRnVrYWhcIixcbiAgICBcIkZ1a2VuXCIsXG4gICAgXCJmdWtlclwiLFxuICAgIFwiRnVraW5cIixcbiAgICBcIkZ1a2tcIixcbiAgICBcIkZ1a2thaFwiLFxuICAgIFwiRnVra2VuXCIsXG4gICAgXCJGdWtrZXJcIixcbiAgICBcIkZ1a2tpblwiLFxuICAgIFwiZzAwa1wiLFxuICAgIFwiR29kLWRhbW5lZFwiLFxuICAgIFwiaDAwclwiLFxuICAgIFwiaDBhclwiLFxuICAgIFwiaDByZVwiLFxuICAgIFwiaGVsbHNcIixcbiAgICBcImhvYXJcIixcbiAgICBcImhvb3JcIixcbiAgICBcImhvb3JlXCIsXG4gICAgXCJqYWNrb2ZmXCIsXG4gICAgXCJqYXBcIixcbiAgICBcImphcHNcIixcbiAgICBcImplcmstb2ZmXCIsXG4gICAgXCJqaXNpbVwiLFxuICAgIFwiamlzc1wiLFxuICAgIFwiaml6bVwiLFxuICAgIFwiaml6elwiLFxuICAgIFwia25vYlwiLFxuICAgIFwia25vYnNcIixcbiAgICBcImtub2J6XCIsXG4gICAgXCJrdW50XCIsXG4gICAgXCJrdW50c1wiLFxuICAgIFwia3VudHpcIixcbiAgICBcIkxlenppYW5cIixcbiAgICBcIkxpcHNoaXRzXCIsXG4gICAgXCJMaXBzaGl0elwiLFxuICAgIFwibWFzb2NoaXN0XCIsXG4gICAgXCJtYXNva2lzdFwiLFxuICAgIFwibWFzc3RlcmJhaXRcIixcbiAgICBcIm1hc3N0cmJhaXRcIixcbiAgICBcIm1hc3N0cmJhdGVcIixcbiAgICBcIm1hc3RlcmJhaXRlclwiLFxuICAgIFwibWFzdGVyYmF0ZVwiLFxuICAgIFwibWFzdGVyYmF0ZXNcIixcbiAgICBcIk1vdGhhIEZ1Y2tlclwiLFxuICAgIFwiTW90aGEgRnVrZXJcIixcbiAgICBcIk1vdGhhIEZ1a2thaFwiLFxuICAgIFwiTW90aGEgRnVra2VyXCIsXG4gICAgXCJNb3RoZXIgRnVja2VyXCIsXG4gICAgXCJNb3RoZXIgRnVrYWhcIixcbiAgICBcIk1vdGhlciBGdWtlclwiLFxuICAgIFwiTW90aGVyIEZ1a2thaFwiLFxuICAgIFwiTW90aGVyIEZ1a2tlclwiLFxuICAgIFwibW90aGVyLWZ1Y2tlclwiLFxuICAgIFwiTXV0aGEgRnVja2VyXCIsXG4gICAgXCJNdXRoYSBGdWthaFwiLFxuICAgIFwiTXV0aGEgRnVrZXJcIixcbiAgICBcIk11dGhhIEZ1a2thaFwiLFxuICAgIFwiTXV0aGEgRnVra2VyXCIsXG4gICAgXCJuMWdyXCIsXG4gICAgXCJuYXN0dFwiLFxuICAgIFwibmlnZ2VyO1wiLFxuICAgIFwibmlndXI7XCIsXG4gICAgXCJuaWlnZXI7XCIsXG4gICAgXCJuaWlncjtcIixcbiAgICBcIm9yYWZpc1wiLFxuICAgIFwib3JnYXNpbTtcIixcbiAgICBcIm9yZ2FzbVwiLFxuICAgIFwib3JnYXN1bVwiLFxuICAgIFwib3JpZmFjZVwiLFxuICAgIFwib3JpZmljZVwiLFxuICAgIFwib3JpZmlzc1wiLFxuICAgIFwicGFja2lcIixcbiAgICBcInBhY2tpZVwiLFxuICAgIFwicGFja3lcIixcbiAgICBcInBha2lcIixcbiAgICBcInBha2llXCIsXG4gICAgXCJwYWt5XCIsXG4gICAgXCJwZWNrZXJcIixcbiAgICBcInBlZWVudXNcIixcbiAgICBcInBlZWVudXNzc1wiLFxuICAgIFwicGVlbnVzXCIsXG4gICAgXCJwZWludXNcIixcbiAgICBcInBlbjFzXCIsXG4gICAgXCJwZW5hc1wiLFxuICAgIFwicGVuaXNcIixcbiAgICBcInBlbmlzLWJyZWF0aFwiLFxuICAgIFwicGVudXNcIixcbiAgICBcInBlbnV1c1wiLFxuICAgIFwiUGh1Y1wiLFxuICAgIFwiUGh1Y2tcIixcbiAgICBcIlBodWtcIixcbiAgICBcIlBodWtlclwiLFxuICAgIFwiUGh1a2tlclwiLFxuICAgIFwicG9sYWNcIixcbiAgICBcInBvbGFja1wiLFxuICAgIFwicG9sYWtcIixcbiAgICBcIlBvb25hbmlcIixcbiAgICBcInByMWNcIixcbiAgICBcInByMWNrXCIsXG4gICAgXCJwcjFrXCIsXG4gICAgXCJwdXNzZVwiLFxuICAgIFwicHVzc2VlXCIsXG4gICAgXCJwdXNzeVwiLFxuICAgIFwicHV1a2VcIixcbiAgICBcInB1dWtlclwiLFxuICAgIFwicXdlaXJcIixcbiAgICBcInJlY2t0dW1cIixcbiAgICBcInJlY3R1bVwiLFxuICAgIFwicmV0YXJkXCIsXG4gICAgXCJzYWRpc3RcIixcbiAgICBcInNjYW5rXCIsXG4gICAgXCJzY2hsb25nXCIsXG4gICAgXCJzY3Jld2luZ1wiLFxuICAgIFwic2VtZW5cIixcbiAgICBcInNleFwiLFxuICAgIFwic2V4eVwiLFxuICAgIFwiU2ghdFwiLFxuICAgIFwic2gxdFwiLFxuICAgIFwic2gxdGVyXCIsXG4gICAgXCJzaDF0c1wiLFxuICAgIFwic2gxdHRlclwiLFxuICAgIFwic2gxdHpcIixcbiAgICBcInNoaXRcIixcbiAgICBcInNoaXRzXCIsXG4gICAgXCJzaGl0dGVyXCIsXG4gICAgXCJTaGl0dHlcIixcbiAgICBcIlNoaXR5XCIsXG4gICAgXCJzaGl0elwiLFxuICAgIFwiU2h5dFwiLFxuICAgIFwiU2h5dGVcIixcbiAgICBcIlNoeXR0eVwiLFxuICAgIFwiU2h5dHlcIixcbiAgICBcInNrYW5ja1wiLFxuICAgIFwic2thbmtcIixcbiAgICBcInNrYW5rZWVcIixcbiAgICBcInNrYW5rZXlcIixcbiAgICBcInNrYW5rc1wiLFxuICAgIFwiU2thbmt5XCIsXG4gICAgXCJzbGFnXCIsXG4gICAgXCJzbHV0XCIsXG4gICAgXCJzbHV0c1wiLFxuICAgIFwiU2x1dHR5XCIsXG4gICAgXCJzbHV0elwiLFxuICAgIFwic29uLW9mLWEtYml0Y2hcIixcbiAgICBcInRpdFwiLFxuICAgIFwidHVyZFwiLFxuICAgIFwidmExamluYVwiLFxuICAgIFwidmFnMW5hXCIsXG4gICAgXCJ2YWdpaW5hXCIsXG4gICAgXCJ2YWdpbmFcIixcbiAgICBcInZhajFuYVwiLFxuICAgIFwidmFqaW5hXCIsXG4gICAgXCJ2dWxsdmFcIixcbiAgICBcInZ1bHZhXCIsXG4gICAgXCJ3MHBcIixcbiAgICBcIndoMDByXCIsXG4gICAgXCJ3aDByZVwiLFxuICAgIFwid2hvcmVcIixcbiAgICBcInhyYXRlZFwiLFxuICAgIFwieHh4XCIsXG4gICAgXCJiIStjaFwiLFxuICAgIFwiYml0Y2hcIixcbiAgICBcImJsb3dqb2JcIixcbiAgICBcImNsaXRcIixcbiAgICBcImFyc2NobG9jaFwiLFxuICAgIFwiZnVja1wiLFxuICAgIFwic2hpdFwiLFxuICAgIFwiYXNzXCIsXG4gICAgXCJhc3Nob2xlXCIsXG4gICAgXCJiIXRjaFwiLFxuICAgIFwiYjE3Y2hcIixcbiAgICBcImIxdGNoXCIsXG4gICAgXCJiYXN0YXJkXCIsXG4gICAgXCJiaStjaFwiLFxuICAgIFwiYm9pb2xhc1wiLFxuICAgIFwiYnVjZXRhXCIsXG4gICAgXCJjMGNrXCIsXG4gICAgXCJjYXdrXCIsXG4gICAgXCJjaGlua1wiLFxuICAgIFwiY2lwYVwiLFxuICAgIFwiY2xpdHNcIixcbiAgICBcImNvY2tcIixcbiAgICBcImN1bVwiLFxuICAgIFwiY3VudFwiLFxuICAgIFwiZGlsZG9cIixcbiAgICBcImRpcnNhXCIsXG4gICAgXCJlamFrdWxhdGVcIixcbiAgICBcImZhdGFzc1wiLFxuICAgIFwiZmN1a1wiLFxuICAgIFwiZnVrXCIsXG4gICAgXCJmdXgwclwiLFxuICAgIFwiaG9lclwiLFxuICAgIFwiaG9yZVwiLFxuICAgIFwiamlzbVwiLFxuICAgIFwia2F3a1wiLFxuICAgIFwibDNpdGNoXCIsXG4gICAgXCJsM2krY2hcIixcbiAgICBcIm1hc3R1cmJhdGVcIixcbiAgICBcIm1hc3RlcmJhdCpcIixcbiAgICBcIm1hc3RlcmJhdDNcIixcbiAgICBcIm1vdGhlcmZ1Y2tlclwiLFxuICAgIFwicy5vLmIuXCIsXG4gICAgXCJtb2ZvXCIsXG4gICAgXCJuYXppXCIsXG4gICAgXCJuaWdnYVwiLFxuICAgIFwibmlnZ2VyXCIsXG4gICAgXCJudXRzYWNrXCIsXG4gICAgXCJwaHVja1wiLFxuICAgIFwicGltcGlzXCIsXG4gICAgXCJwdXNzZVwiLFxuICAgIFwicHVzc3lcIixcbiAgICBcInNjcm90dW1cIixcbiAgICBcInNoIXRcIixcbiAgICBcInNoZW1hbGVcIixcbiAgICBcInNoaStcIixcbiAgICBcInNoIStcIixcbiAgICBcInNsdXRcIixcbiAgICBcInNtdXRcIixcbiAgICBcInRlZXRzXCIsXG4gICAgXCJ0aXRzXCIsXG4gICAgXCJib29ic1wiLFxuICAgIFwiYjAwYnNcIixcbiAgICBcInRlZXpcIixcbiAgICBcInRlc3RpY2FsXCIsXG4gICAgXCJ0ZXN0aWNsZVwiLFxuICAgIFwidGl0dFwiLFxuICAgIFwidzAwc2VcIixcbiAgICBcImphY2tvZmZcIixcbiAgICBcIndhbmtcIixcbiAgICBcIndob2FyXCIsXG4gICAgXCJ3aG9yZVwiLFxuICAgIFwiKmRhbW5cIixcbiAgICBcIipkeWtlXCIsXG4gICAgXCIqZnVjaypcIixcbiAgICBcIipzaGl0KlwiLFxuICAgIFwiQCQkXCIsXG4gICAgXCJhbWNpa1wiLFxuICAgIFwiYW5kc2tvdGFcIixcbiAgICBcImFyc2UqXCIsXG4gICAgXCJhc3NyYW1tZXJcIixcbiAgICBcImF5aXJcIixcbiAgICBcImJpN2NoXCIsXG4gICAgXCJiaXRjaCpcIixcbiAgICBcImJvbGxvY2sqXCIsXG4gICAgXCJicmVhc3RzXCIsXG4gICAgXCJidXR0LXBpcmF0ZVwiLFxuICAgIFwiY2Ficm9uXCIsXG4gICAgXCJjYXp6b1wiLFxuICAgIFwiY2hyYWFcIixcbiAgICBcImNodWpcIixcbiAgICBcIkNvY2sqXCIsXG4gICAgXCJjdW50KlwiLFxuICAgIFwiZDRtblwiLFxuICAgIFwiZGF5Z29cIixcbiAgICBcImRlZ29cIixcbiAgICBcImRpY2sqXCIsXG4gICAgXCJkaWtlKlwiLFxuICAgIFwiZHVwYVwiLFxuICAgIFwiZHppd2thXCIsXG4gICAgXCJlamFja3VsYXRlXCIsXG4gICAgXCJFa3JlbSpcIixcbiAgICBcIkVrdG9cIixcbiAgICBcImVuY3VsZXJcIixcbiAgICBcImZhZW5cIixcbiAgICBcImZhZypcIixcbiAgICBcImZhbmN1bG9cIixcbiAgICBcImZhbm55XCIsXG4gICAgXCJmZWNlc1wiLFxuICAgIFwiZmVnXCIsXG4gICAgXCJGZWxjaGVyXCIsXG4gICAgXCJmaWNrZW5cIixcbiAgICBcImZpdHQqXCIsXG4gICAgXCJGbGlra2VyXCIsXG4gICAgXCJmb3Jlc2tpblwiLFxuICAgIFwiRm90emVcIixcbiAgICBcIkZ1KCpcIixcbiAgICBcImZ1aypcIixcbiAgICBcImZ1dGtyZXR6blwiLFxuICAgIFwiZ29va1wiLFxuICAgIFwiZ3VpZW5hXCIsXG4gICAgXCJoMHJcIixcbiAgICBcImg0eDByXCIsXG4gICAgXCJoZWxsXCIsXG4gICAgXCJoZWx2ZXRlXCIsXG4gICAgXCJob2VyKlwiLFxuICAgIFwiaG9ua2V5XCIsXG4gICAgXCJIdWV2b25cIixcbiAgICBcImh1aVwiLFxuICAgIFwiaW5qdW5cIixcbiAgICBcImppenpcIixcbiAgICBcImthbmtlcipcIixcbiAgICBcImtpa2VcIixcbiAgICBcImtsb290emFrXCIsXG4gICAgXCJrcmF1dFwiLFxuICAgIFwia251bGxlXCIsXG4gICAgXCJrdWtcIixcbiAgICBcImt1a3N1Z2VyXCIsXG4gICAgXCJLdXJhY1wiLFxuICAgIFwia3Vyd2FcIixcbiAgICBcImt1c2kqXCIsXG4gICAgXCJreXJwYSpcIixcbiAgICBcImxlc2JvXCIsXG4gICAgXCJtYW1ob29uXCIsXG4gICAgXCJtYXN0dXJiYXQqXCIsXG4gICAgXCJtZXJkKlwiLFxuICAgIFwibWlidW5cIixcbiAgICBcIm1vbmtsZWlnaFwiLFxuICAgIFwibW91bGlld29wXCIsXG4gICAgXCJtdWllXCIsXG4gICAgXCJtdWxra3VcIixcbiAgICBcIm11c2NoaVwiLFxuICAgIFwibmF6aXNcIixcbiAgICBcIm5lcGVzYXVyaW9cIixcbiAgICBcIm5pZ2dlcipcIixcbiAgICBcIm9yb3NwdVwiLFxuICAgIFwicGFza2EqXCIsXG4gICAgXCJwZXJzZVwiLFxuICAgIFwicGlja2FcIixcbiAgICBcInBpZXJkb2wqXCIsXG4gICAgXCJwaWxsdSpcIixcbiAgICBcInBpbW1lbFwiLFxuICAgIFwicGlzcypcIixcbiAgICBcInBpemRhXCIsXG4gICAgXCJwb29udHNlZVwiLFxuICAgIFwicG9vcFwiLFxuICAgIFwicG9yblwiLFxuICAgIFwicDByblwiLFxuICAgIFwicHIwblwiLFxuICAgIFwicHJldGVlblwiLFxuICAgIFwicHVsYVwiLFxuICAgIFwicHVsZVwiLFxuICAgIFwicHV0YVwiLFxuICAgIFwicHV0b1wiLFxuICAgIFwicWFoYmVoXCIsXG4gICAgXCJxdWVlZipcIixcbiAgICBcInJhdXRlbmJlcmdcIixcbiAgICBcInNjaGFmZmVyXCIsXG4gICAgXCJzY2hlaXNzKlwiLFxuICAgIFwic2NobGFtcGVcIixcbiAgICBcInNjaG11Y2tcIixcbiAgICBcInNjcmV3XCIsXG4gICAgXCJzaCF0KlwiLFxuICAgIFwic2hhcm11dGFcIixcbiAgICBcInNoYXJtdXRlXCIsXG4gICAgXCJzaGlwYWxcIixcbiAgICBcInNoaXpcIixcbiAgICBcInNrcmlielwiLFxuICAgIFwic2t1cnd5c3luXCIsXG4gICAgXCJzcGhlbmN0ZXJcIixcbiAgICBcInNwaWNcIixcbiAgICBcInNwaWVyZGFsYWpcIixcbiAgICBcInNwbG9vZ2VcIixcbiAgICBcInN1a2FcIixcbiAgICBcImIwMGIqXCIsXG4gICAgXCJ0ZXN0aWNsZSpcIixcbiAgICBcInRpdHQqXCIsXG4gICAgXCJ0d2F0XCIsXG4gICAgXCJ2aXR0dVwiLFxuICAgIFwid2FuaypcIixcbiAgICBcIndldGJhY2sqXCIsXG4gICAgXCJ3aWNoc2VyXCIsXG4gICAgXCJ3b3AqXCIsXG4gICAgXCJ5ZWRcIixcbiAgICBcInphYm91cmFoXCIsXG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEltcG9ydHMgdGhlIG1zZ3BhY2sgbGlicmFyeVxuICovXG4vL2NvbnN0IG1zZ3BhY2sgPSByZXF1aXJlKFwibXNncGFja1wiKTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBQbGF5ZXJzIH0gZnJvbSBcIi4vUGxheWVycy9QbGF5ZXJNYW5hZ2VyXCI7XG5pbXBvcnQgeyBiYWRXb3JkcyB9IGZyb20gXCIuL2JhZFdvcmRzXCI7XG5pbXBvcnQgeyBPYmplY3RNYW5hZ2VyIH0gZnJvbSBcIi4vQnVpbGRpbmdzL0J1aWxkaW5nTWFuYWdlclwiO1xuaW1wb3J0IHsgcHJvamVjdGlsZU1hbmFnZXIgfSBmcm9tIFwiLi9Qcm9qZWN0aWxlcy9Qcm9qZWN0aWxlTWFuYWdlclwiO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSBcIi4vTm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gXCIuL1VUSUxTL0dldERpc3RhbmNlXCI7XG5pbXBvcnQgeyBnZXREaXJlY3Rpb24gfSBmcm9tIFwiLi9VVElMUy9HZXREaXJlY3Rpb25cIjtcbmltcG9ydCB7IG1pbiB9IGZyb20gXCIuL01hdGhcIjtcbmltcG9ydCB7IFBJIH0gZnJvbSBcIi4vTWF0aFwiO1xuLyoqXG4gKiBBIGNsYXNzIGZvciBlbmNvZGluZyBhbmQgZGVjb2RpbmcgZGF0YSB1c2luZyBNZXNzYWdlUGFja1xuICovXG52YXIgTXNncGFjayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNc2dwYWNrKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmNvZGVzIGRhdGEgdXNpbmcgTWVzc2FnZVBhY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55fSBkYXRhIFRoZSBkYXRhIHRvIGVuY29kZVxuICAgICAqIEByZXR1cm5zIHtCdWZmZXJ9IFRoZSBlbmNvZGVkIGRhdGFcbiAgICAgKi9cbiAgICBNc2dwYWNrLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gbXNncGFjay5lbmNvZGUoZGF0YSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZWNvZGVzIGRhdGEgdXNpbmcgTWVzc2FnZVBhY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIFRoZSBkYXRhIHRvIGRlY29kZVxuICAgICAqIEByZXR1cm5zIHthbnl9IFRoZSBkZWNvZGVkIGRhdGFcbiAgICAgKi9cbiAgICBNc2dwYWNrLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gbXNncGFjay5kZWNvZGUoZGF0YSk7XG4gICAgfTtcbiAgICByZXR1cm4gTXNncGFjaztcbn0oKSk7XG4vKipcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIFdlYlNvY2tldCBjb25uZWN0aW9ucyBhbmQgc2VuZGluZy9yZWNlaXZpbmcgcGFja2V0c1xuICovXG52YXIgV1MgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFdTLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gV1MoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLndzID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIHBhY2tldCBvdmVyIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgcGFja2V0XG4gICAgICogQHBhcmFtIHsuLi5hbnlbXX0gZGF0YSBUaGUgZGF0YSB0byBzZW5kXG4gICAgICovXG4gICAgV1MucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgZGF0YVtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMud3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlsqXSBXZWJTb2NrZXQgaXMgbm90IGluaXRpYWxpemVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud3Muc2VuZCh0aGlzLmVuY29kZShbdHlwZSwgZGF0YV0pKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgaW5jb21pbmcgcGFja2V0cyBmcm9tIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGRhdGEgVGhlIGluY29taW5nIHBhY2tldCBkYXRhXG4gICAgICovXG4gICAgV1MucHJvdG90eXBlLmhhbmRsZVBhY2tldHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gICAgICAgIHZhciBwYXJzZWQgPSB0aGlzLmRlY29kZShkYXRhKTtcbiAgICAgICAgdmFyIHR5cGUgPSBwYXJzZWRbMF07XG4gICAgICAgIHZhciBwYWNrZXREYXRhID0gcGFyc2VkWzFdO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJBXCIpIHtcbiAgICAgICAgICAgIC8vIFNFVCBJTklUIERBVEE6XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJCXCIpIHtcbiAgICAgICAgICAgIC8vIERJU0NPTk5FQ1Q6XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJEXCIpIHtcbiAgICAgICAgICAgIC8vIEFERCBQTEFZRVI6XG4gICAgICAgICAgICBQbGF5ZXJzLmFkZFBsYXllcihwYWNrZXREYXRhWzBdWzFdLCBwYWNrZXREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkVcIikge1xuICAgICAgICAgICAgLy8gUkVNT1ZFIFBMQVlFUjpcbiAgICAgICAgICAgIFBsYXllcnMucmVtb3ZlUGxheWVyKHBhY2tldERhdGFbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiUFwiKSB7XG4gICAgICAgICAgICAvLyBNWSBQTEFZRVIgREVBVEg6XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgIC8vIFVQREFURSBQTEFZRVJTOlxuICAgICAgICAgICAgUGxheWVycy51cGRhdGVQbGF5ZXJzKHBhY2tldERhdGFbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiSFwiKSB7XG4gICAgICAgICAgICAvLyBMT0FEIEdBTUUgT0JKRUNUOlxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWNrZXREYXRhLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBPYmplY3RNYW5hZ2VyLmFkZEJ1aWxkaW5nKHBhY2tldERhdGEsIGkpO1xuICAgICAgICAgICAgICAgIGkgKz0gODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIktcIikge1xuICAgICAgICAgICAgLy8gR0FUSEVSIEFOSU1BVElPTjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhY2tldERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiTlwiKSB7XG4gICAgICAgICAgICAvLyBVUERBVEUgUExBWUVSIFZBTFVFUyAoUkVTT1VSQ0VTKTpcbiAgICAgICAgICAgIGlmIChwYWNrZXREYXRhWzBdID09PSBcInBvaW50c1wiKSB7XG4gICAgICAgICAgICAgICAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Njb3JlRGlzcGxheVwiKS5pbm5lckhUTUwgPSBTbW9vdGhpZShNYXRoLnJvdW5kKFBsYXllcnMubXlQbGF5ZXIucG9pbnRzKSwgMWU2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIk9cIikge1xuICAgICAgICAgICAgLy8gVVBEQVRFIEhFQUxUSDpcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIlhcIikge1xuICAgICAgICAgICAgLy8gQUREIFBST0pFQ1RJTEU6XG4gICAgICAgICAgICBwcm9qZWN0aWxlTWFuYWdlci5hZGRQcm9qZWN0aWxlKHBhY2tldERhdGFbMF0sIHBhY2tldERhdGFbMV0sIHBhY2tldERhdGFbMl0sIHBhY2tldERhdGFbM10sIHBhY2tldERhdGFbNF0sIHBhY2tldERhdGFbNV0sIHBhY2tldERhdGFbNl0sIHBhY2tldERhdGFbN10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiWVwiKSB7XG4gICAgICAgICAgICAvLyBSRU1PVkUgUFJPSkVDVElMRTpcbiAgICAgICAgICAgIHByb2plY3RpbGVNYW5hZ2VyLnJlbW92ZVByb2plY3RpbGUocGFja2V0RGF0YVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCI2XCIpIHtcbiAgICAgICAgICAgIC8vIFJFQ0VJVkUgQ0hBVDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhY2tldERhdGFbMV0pO1xuICAgICAgICAgICAgaWYgKHBhY2tldERhdGFbMV0uaW5jbHVkZXMoXCJmZXJyaXNcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmQoXCI2XCIsIFwiZmVycmlzIGlzIGEgc2tpZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhY2tldERhdGFbMV0uaW5jbHVkZXMoXCJwYXNoa2FcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmQoXCI2XCIsIFwicGFzaGthIGlzIGEgc2tpZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFdTO1xufShNc2dwYWNrKSk7XG4vKipcbiAqIE1vbmtleSBwYXRjaGVzIHRoZSBXZWJTb2NrZXQgcHJvdG90eXBlIHRvIGFkZCBhIGN1c3RvbSBzZW5kIG1ldGhvZFxuICovXG5XZWJTb2NrZXQucHJvdG90eXBlLnNlbmQyID0gV2ViU29ja2V0LnByb3RvdHlwZS5zZW5kOyAvLyBzbyBpdCB3b24ndCBjYWxsIGl0c2VsZiBlYWNoIHRpbWVcbldlYlNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBwYXJhbSA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHBhcmFtW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubW9kKSB7XG4gICAgICAgIHRoaXMubW9kID0gbmV3IFdTKCk7XG4gICAgICAgIHRoaXMubW9kLndzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICBfdGhpcy5tb2QuaGFuZGxlUGFja2V0cyhtc2cuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBBTlRJIFBST0ZBTklUWSBGSUxURVI6XG4gICAgdmFyIGRlY29kZWRQYWNrZXQgPSB0aGlzLm1vZC5kZWNvZGUocGFja2V0KTtcbiAgICBpZiAoZGVjb2RlZFBhY2tldFswXSA9PT0gXCI2XCIgJiYgYmFkV29yZHMuc29tZShmdW5jdGlvbiAod29yZCkgeyByZXR1cm4gZGVjb2RlZFBhY2tldFsxXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMod29yZC50b0xvd2VyQ2FzZSgpKTsgfSkpIHtcbiAgICAgICAgdmFyIG1zZyA9IGRlY29kZWRQYWNrZXRbMV07XG4gICAgICAgIHZhciB3b3JkcyA9IG1zZy5zcGxpdCgnICcpO1xuICAgICAgICB2YXIgbmV3V29yZHMgPSB3b3Jkcy5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbiAgICAgICAgICAgIHZhciBtb2RpZmllZFdvcmQgPSB3b3JkO1xuICAgICAgICAgICAgYmFkV29yZHMuZm9yRWFjaChmdW5jdGlvbiAoYmFkV29yZCkge1xuICAgICAgICAgICAgICAgIGlmICh3b3JkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYmFkV29yZC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFdvcmQgPSBtb2RpZmllZFdvcmQucmVwbGFjZShuZXcgUmVnRXhwKGJhZFdvcmQsICdnaScpLCBiYWRXb3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYmFkV29yZC5zbGljZSgxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbW9kaWZpZWRXb3JkO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG5ld01zZyA9IG5ld1dvcmRzLmpvaW4oJyAnKTtcbiAgICAgICAgdGhpcy5zZW5kMih0aGlzLm1vZC5lbmNvZGUoW1wiNlwiLCBbbmV3TXNnXV0pKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2VuZDIocGFja2V0KTtcbiAgICB9XG59O1xuLyoqXG4gKiBUaGUgR2FtZSBjbGFzcywgd2hpY2ggZXh0ZW5kcyBXUyBhbmQgYWRkcyBnYW1lLXNwZWNpZmljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHNcbiAqL1xudmFyIEdhbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEdhbWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmVuZW1pZXMgPSBbXTtcbiAgICAgICAgX3RoaXMudGVhbW1hdGVzID0gW107XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBHYW1lIGNsYXNzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7R2FtZX0gVGhlIHNpbmdsZXRvbiBpbnN0YW5jZVxuICAgICAqL1xuICAgIEdhbWUuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghR2FtZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgR2FtZS5pbnN0YW5jZSA9IG5ldyBHYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEdhbWUuaW5zdGFuY2U7XG4gICAgfTtcbiAgICBHYW1lLnVwZGF0ZUdhbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChQbGF5ZXJzLm15UGxheWVyKSB7XG4gICAgICAgICAgICBpZiAoR2FtZS5jYW52YXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY3R4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4ID0gR2FtZS5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9sZENhbVhZID0gR2FtZS5jYW1YWTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbURpc3RhbmNlID0gZ2V0RGlzdGFuY2UoR2FtZS5jYW1YWSwgb2xkQ2FtWFksIDAsIDApO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FtRGlyZWN0aW9uID0gZ2V0RGlyZWN0aW9uKEdhbWUuY2FtWFksIG9sZENhbVhZKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbVNwZWVkID0gbWluKGNhbURpc3RhbmNlICogMC4wMSAqIEdhbWUuZGVsdGEsIGNhbURpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbURpc3RhbmNlID4gMC4wNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgR2FtZS5jYW1YWS54ICs9IGNhbVNwZWVkICogTWF0aC5jb3MoY2FtRGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWUuY2FtWFkueSArPSBjYW1TcGVlZCAqIE1hdGguc2luKGNhbURpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lLmNhbVhZLnggPSBHYW1lLnBsYXllclhZLng7XG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lLmNhbVhZLnkgPSBHYW1lLnBsYXllclhZLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhdGUgPSAxNzA7XG4gICAgICAgICAgICAgICAgICAgIFBsYXllcnMubXlQbGF5ZXIuZGVsdGEgKz0gR2FtZS5kZWx0YTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcFJhdGUgPSBtaW4oMS43LCBQbGF5ZXJzLm15UGxheWVyLmRlbHRhIC8gcmF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0bXBEaWZmID0gKFBsYXllcnMubXlQbGF5ZXIueDIgLSBQbGF5ZXJzLm15UGxheWVyLm9sZFgpO1xuICAgICAgICAgICAgICAgICAgICBHYW1lLnBsYXllclhZLnggPSBQbGF5ZXJzLm15UGxheWVyLm9sZFggKyAodG1wRGlmZiAqIHRtcFJhdGUpO1xuICAgICAgICAgICAgICAgICAgICB0bXBEaWZmID0gKFBsYXllcnMubXlQbGF5ZXIueTIgLSBQbGF5ZXJzLm15UGxheWVyLm9sZFkpO1xuICAgICAgICAgICAgICAgICAgICBHYW1lLnBsYXllclhZLnkgPSBQbGF5ZXJzLm15UGxheWVyLm9sZFkgKyAodG1wRGlmZiAqIHRtcFJhdGUpO1xuICAgICAgICAgICAgICAgICAgICBHYW1lLnhPZmZzZXQgPSBHYW1lLmNhbVhZLnggLSAoMTkyMCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICBHYW1lLnlPZmZzZXQgPSBHYW1lLmNhbVhZLnkgLSAoMTA4MCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgTSA9IHRoaXMuY3R4O1xuICAgICAgICAgICAgICAgICAgICBPYmplY3RNYW5hZ2VyLkJ1aWxkaW5ncy5mb3JFYWNoKGZ1bmN0aW9uIChidWlsZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgTS5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIE0uZmlsbFN0eWxlID0gXCJyZ2JhKDIwMCwgMCwgMCwgMC4zKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgTS5hcmMoYnVpbGRpbmcueCAtIEdhbWUueE9mZnNldCwgYnVpbGRpbmcueSAtIEdhbWUueU9mZnNldCwgYnVpbGRpbmcuc2NhbGUsIDAsIFBJICogMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBNLmZpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBHYW1lLmNhbnZhcyA9IGZhbHNlO1xuICAgIEdhbWUuY3R4ID0gZmFsc2U7XG4gICAgR2FtZS5jYW1YWSA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH07XG4gICAgR2FtZS5wbGF5ZXJYWSA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH07XG4gICAgR2FtZS5kZWx0YSA9IDA7XG4gICAgR2FtZS54T2Zmc2V0ID0gMDtcbiAgICBHYW1lLnlPZmZzZXQgPSAwO1xuICAgIHJldHVybiBHYW1lO1xufShXUykpO1xuZXhwb3J0IHsgR2FtZSB9O1xudmFyIE1vZCA9IEdhbWUuZ2V0SW5zdGFuY2UoKTtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgR2FtZS5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVDYW52YXNcIik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lTmFtZVwiKS5pbm5lckhUTUwgPSBcIlxcbjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5nbGl0Y2guZ2xvYmFsLzFkMWRhZmE5LWJhNWEtNDdlNy1hNGU3LWJjYmYwODUxNTgzZC8lNUJyZW1vdmFsLmFpJTVEX2Y1YjA3YmZiLWQyNTAtNGE4Zi04NzE0LTJiNWY0ZTVhZjNkMi1iYW5uZXIucG5nP3Y9MTcyMDA5MzMzODIwMVxcXCIgc3R5bGU9XFxcIndpZHRoOiA1MDBweDsgaGVpZ2h0OiAyNTBweFxcXCI+XFxuXCI7XG4gICAgLy8gR0FNRSBPVkVSTEFZOlxuICAgIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGF5LnN0eWxlID0gXCJcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiAwO1xcbmxlZnQ6IDA7XFxuYmFja2dyb3VuZDogcmdiYSgwLCAwLCA3MCwgMC4yKTtcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IDEwMCU7XFxucG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICAvLyBWRVJJRklDQVRJT04gUFJPTVBUOlxuICAgIHZhciBWZXJpZmljYXRpb25Qcm9tcHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFZlcmlmaWNhdGlvblByb21wdCgpIHtcbiAgICAgICAgfVxuICAgICAgICBWZXJpZmljYXRpb25Qcm9tcHQucHJvdG90eXBlLnByZXBhcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmJsdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGhpcy5ibHVyLnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgNDAsIDAuMyk7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxuICAgICAgei1pbmRleDogODg4NztcXG4gICAgXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYmx1cik7XG4gICAgICAgICAgICB0aGlzLm1haW5Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGhpcy5tYWluSG9sZGVyLnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgd2lkdGg6IDM1JTtcXG4gICAgICBoZWlnaHQ6IDIwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4NSwgMTg1LCAxODUsIDAuOTUpO1xcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICAgIGJvcmRlcjogNnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgICB6LWluZGV4OiA4ODg4O1xcbiAgICBcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5tYWluSG9sZGVyKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGhpcy50aXRsZS5pbm5lckhUTUwgPSBcIkF1dGhlbnRpY2F0aW9uLlwiO1xuICAgICAgICAgICAgdGhpcy50aXRsZS5zdHlsZS5jc3NUZXh0ID0gXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAzNSU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgY29sb3I6ICMwMDA7XFxuICAgICAgZm9udDogMzJweCBBcmlhbDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgXCI7XG4gICAgICAgICAgICB0aGlzLm1haW5Ib2xkZXIuYXBwZW5kQ2hpbGQodGhpcy50aXRsZSk7XG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgVG9rZW4gSGVyZS4uLlwiO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5jc3NUZXh0ID0gXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTM1LCAxMzUsIDEzNSwgMC4zKTtcXG4gICAgICB3aWR0aDogNzAlO1xcbiAgICAgIGJvdHRvbTogNSU7XFxuICAgICAgbGVmdDogMyU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgIFwiO1xuICAgICAgICAgICAgdGhpcy5tYWluSG9sZGVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5jaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLmNoZWNrLnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IDUlO1xcbiAgICAgIHJpZ2h0OiAzJTtcXG4gICAgICB3aWR0aDogOTBweDtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSg0NywgMTE3LCAxOTMsIDAuMik7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZvbnQ6IDIwcHggQXJpYWw7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXCI7XG4gICAgICAgICAgICB0aGlzLmNoZWNrLmlubmVySFRNTCA9IFwiVmVyaWZ5XCI7XG4gICAgICAgICAgICB0aGlzLm1haW5Ib2xkZXIuYXBwZW5kQ2hpbGQodGhpcy5jaGVjayk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBWZXJpZmljYXRpb25Qcm9tcHQ7XG4gICAgfSgpKTtcbiAgICB2YXIgdmVyaWZ5ID0gbmV3IFZlcmlmaWNhdGlvblByb21wdCgpO1xuICAgIC8vdmVyaWZ5LnByZXBhcmUoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFnZUJhckJvZHlcIikuc3R5bGUudHJhbnNpdGlvbiA9IFwiMC4zcyBhbGxcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbUNvbnRhaW5lclwiKS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdHRvbUNvbnRhaW5lclwiKS5zdHlsZSA9IFwiXFxuICB0b3A6IDIwcHg7XFxuICBcIjtcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3Rpb25CYXJJdGVtXCIpKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBcIlxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgICAgYm9yZGVyOiA2cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBcIjtcbiAgICB9KTtcbiAgICAvLyBSRU1PVkUgT0xEIFVJIEVMRU1FTlRTOlxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlVGV4dFwiKS5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFnZUJhckNvbnRhaW5lclwiKS5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpZWRUZXh0XCIpLnJlbW92ZSgpO1xuICAgIG5ldyBOb3RpZmljYXRpb24oXCJNb29Nb28gVFMgTG9hZGVkIVwiLCAyNTAwLCBcInJnYmEoNDUsIDEyMSwgMTk5LCAwLjQpXCIpO1xuICAgIG5ldyBOb3RpZmljYXRpb24oXCJXZWxjb21lIE9uaW9uXCIsIDI1MDAsIFwicmdiYSgyMCwgMCwgMCwgMC42KVwiKTtcbn07XG53aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZSwgMWUzIC8gNjApO1xuICAgICAgICB9KTtcbn0pKCk7XG52YXIgbGFzdFVwZGF0ZSA9IDA7XG5mdW5jdGlvbiBMb29wKCkge1xuICAgIEdhbWUuZGVsdGEgPSBEYXRlLm5vdygpIC0gbGFzdFVwZGF0ZTtcbiAgICBsYXN0VXBkYXRlID0gRGF0ZS5ub3coKTtcbiAgICBHYW1lLnVwZGF0ZUdhbWUoKTtcbiAgICByZXF1ZXN0QW5pbUZyYW1lKExvb3ApO1xufVxuTG9vcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9