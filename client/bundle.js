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
    Players.addPlayer = function (SID, data) {
        /* Data format:
    
          0: {id, sid, name, x, y, something, health, something, scale?, something}
          1: true/false for yes/no is me
          */
        if (data[1]) {
            // MY PLAYER:
            Players.myPlayer = new _Player__WEBPACK_IMPORTED_MODULE_2__.Player(SID);
            Players.players.push(Players.myPlayer);
            // INIT:
            Players.myPlayer.init(data[0][0], data[0][2], data[0][3], data[0][4], data[0][5], data[0][6], data[0][7], data[0][8], data[0][9]);
        }
        else {
            var tmpObj = new _Player__WEBPACK_IMPORTED_MODULE_2__.Player(SID);
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
        for (var i = 0; i < data.length; i += 13) {
            var tmpPlayer = (0,_UTILS_FindPlayerBySID__WEBPACK_IMPORTED_MODULE_0__.findPlayerBySid)(data[0]);
            if (tmpPlayer) {
                (0,_updatePlayer__WEBPACK_IMPORTED_MODULE_1__.updatePlayer)(tmpPlayer, data, i);
                console.log(tmpPlayer);
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
    player.t1 = player.t2 === void 0 ? Date.now() : player.t2;
    player.t2 = Date.now();
    player.lasPos = {
        x: player.x2,
        y: player.y2,
    };
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
    console.log(player.weaponIndex);
}


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
            // SET INIT DATA;
        }
        else if (type === "B") {
            // DISCONNECT:
            window.location.reload();
        }
        else if (type === "D") {
            // ADD PLAYER:
            _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.addPlayer(packetData[0][0], packetData);
        }
        else if (type === "E") {
            // REMOVE PLAYER:
            _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.removePlayer(packetData[0]);
        }
        else if (type === "a") {
            // UPDATE PLAYERS:
            for (var i = 0; i < packetData.length; i += 13) {
                _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.updatePlayers(packetData[i]);
            }
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
            if (packetData[0][2])
                var bonk = new Audio("https://cdn.glitch.global/1d1dafa9-ba5a-47e7-a4e7-bcbf0851583d/bonk.mp4");
            bonk.play();
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
    if (decodedPacket[0] === "6" && _badWords__WEBPACK_IMPORTED_MODULE_1__.badWords.some(function (word) { return decodedPacket[1].toLowerCase().includes(word.toLowerCase()); })) {
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
    return Game;
}(WS));

var Mod = Game.getInstance();
alert("MooMoo TS Loaded");
window.onload = function () {
    document.getElementById("gameName").innerHTML = "\n<img src=\"https://cdn.glitch.global/1d1dafa9-ba5a-47e7-a4e7-bcbf0851583d/%5Bremoval.ai%5D_f5b07bfb-d250-4a8f-8714-2b5f4e5af3d2-banner.png?v=1720093338201\" style=\"width: 400px; height: 250px\">\n";
    // GAME OVERLAY:
    var overlay = document.createElement("div");
    overlay.style = "\nposition: absolute;\ntop: 0;\nleft: 0;\nbackground: rgba(255, 255, 185, 0.15);\nwidth: 100%;\nheight: 100%;\npointer-events: none;\n";
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
    document.getElementById("actionBar").style.position = "relative";
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaGNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQnVpbGRpbmdzL0J1aWxkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9CdWlsZGluZ3MvQnVpbGRpbmdNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9NYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF5ZXJzL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxheWVycy9QbGF5ZXJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF5ZXJzL3VwZGF0ZVBsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdGlsZXMvUHJvamVjdGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvamVjdGlsZXMvUHJvamVjdGlsZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VUSUxTL0ZpbmRQbGF5ZXJCeVNJRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVVRJTFMvR2V0RGlzdGFuY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VUSUxTL0l0ZW1Hcm91cHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VUSUxTL0l0ZW1zLnRzIiwid2VicGFjazovLy8uL3NyYy9VVElMUy9Qcm9qZWN0aWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFkV29yZHMudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmluZFBsYXllckJ5U2lkIH0gZnJvbSBcIi4uL1VUSUxTL0ZpbmRQbGF5ZXJCeVNJRFwiO1xuLyogQnVpbGRpbmcgY2xhc3MgKi9cbnZhciBCdWlsZGluZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCdWlsZGluZyhzaWQsIHgsIHksIGRpciwgc2NhbGUsIHR5cGUsIGRhdGEsIG93bmVyLCBpc0Zha2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zaWQgPSBzaWQ7XG4gICAgICAgIGRhdGEgPSBkYXRhIHx8IHt9OyAvLyBzYWZlIGhvbGRlciBpbiBjYXNlIGl0J3MgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQ7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuZGlyID0gZGlyO1xuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZ3JvdXAgPSBkYXRhLmdyb3VwO1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgICAgIHRoaXMuaXNGYWtlID0gaXNGYWtlO1xuICAgICAgICB0aGlzLmlzQWxpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMud2lnZ2xlID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaXNJdGVtID0gZGF0YS5pZCAhPT0gbnVsbDtcbiAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gZGF0YS50cmFwID8gXCJ0cmFwXCIgOiBkYXRhLmRtZyA/IFwiZG1nXCIgOiBkYXRhLnRlbGVwb3J0ID8gXCJ0ZWxlcG9ydGVyXCIgOiBudWxsO1xuICAgICAgICB0aGlzLm1heEhlYWx0aCA9IGRhdGEuaGVhbHRoO1xuICAgICAgICB0aGlzLmJ1aWxkSGVhbHRoID0gdGhpcy5tYXhIZWFsdGg7XG4gICAgICAgIHRoaXMuaXNUZWFtT2JqZWN0ID0gZnVuY3Rpb24gKHRtcE9iaikge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgcmV0dXJuIHRtcE9iai5zaWQgPT09ICgoX2EgPSBfdGhpcy5vd25lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNpZCkgfHwgdG1wT2JqLmlzVGVhbShmaW5kUGxheWVyQnlTaWQodG1wT2JqKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBCdWlsZGluZztcbn0oKSk7XG5leHBvcnQgeyBCdWlsZGluZyB9O1xuIiwiLyoqXG4gKiBJbXBvcnRzXG4gKi9cbmltcG9ydCB7IEJ1aWxkaW5nIH0gZnJvbSBcIi4vQnVpbGRpbmdcIjsgLy8gSW1wb3J0IEJ1aWxkaW5nIGNsYXNzXG5pbXBvcnQgeyBJdGVtcyB9IGZyb20gXCIuLi9VVElMUy9JdGVtc1wiOyAvLyBJbXBvcnQgR2FtZSBJdGVtc1xuLyoqXG4gKiBCdWlsZGluZyBNYW5hZ2VyIGNsYXNzXG4gKlxuICogVGhpcyBjbGFzcyBtYW5hZ2VzIGEgY29sbGVjdGlvbiBvZiBnYW1lIG9iamVjdHMgYW5kIHByb3ZpZGVzIG1ldGhvZHMgdG8gYWRkLCByZW1vdmUsIGFuZCBjbGVhciB0aGVtLlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6T2JqZWN0TWFuYWdlclxuICovXG52YXIgT2JqZWN0TWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBQcml2YXRlIGNvbnN0cnVjdG9yIHRvIHByZXZlbnQgaW5zdGFudGlhdGlvblxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBPYmplY3RNYW5hZ2VyKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogT2JqZWN0IG9mIHJlbGV2YW50IGdhbWUgb2JqZWN0c1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZWxldmFudEJ1aWxkaW5ncyA9IFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIE9iamVjdE1hbmFnZXIgY2xhc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3RNYW5hZ2VyfSBUaGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBPYmplY3RNYW5hZ2VyIGNsYXNzXG4gICAgICogQG1lbWJlck9mIE9iamVjdE1hbmFnZXJcbiAgICAgKiBAZXhhbXBsZSBPYmplY3RNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICAgKi9cbiAgICBPYmplY3RNYW5hZ2VyLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIU9iamVjdE1hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIE9iamVjdE1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgT2JqZWN0TWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3RNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGJ1aWxkaW5nIGdhbWUgb2JqZWN0IHRvIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBkYXRhIFRoZSBkYXRhIHRvIGNyZWF0ZSB0aGUgYnVpbGRpbmcgZ2FtZSBvYmplY3RcbiAgICAgKiBAbWVtYmVyT2YgT2JqZWN0TWFuYWdlclxuICAgICAqIEBleGFtcGxlIE9iamVjdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZGRCdWlsZGluZyhbMTIzNCwgLi4uXSk7XG4gICAgICovXG4gICAgT2JqZWN0TWFuYWdlci5hZGRCdWlsZGluZyA9IGZ1bmN0aW9uIChkYXRhLCBpbmRleCkge1xuICAgICAgICBkYXRhID0gZGF0YVswXTtcbiAgICAgICAgdmFyIHRtcE9iaiA9IG5ldyBCdWlsZGluZyhkYXRhWzAgKyBpbmRleF0sIGRhdGFbMSArIGluZGV4XSwgZGF0YVsyICsgaW5kZXhdLCBkYXRhWzMgKyBpbmRleF0sIGRhdGFbNCArIGluZGV4XSwgZGF0YVs1ICsgaW5kZXhdLCBJdGVtc1tkYXRhWzYgKyBpbmRleF1dLCBkYXRhWzcgKyBpbmRleF0gPj0gMFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgc2lkOiBkYXRhWzcgKyBpbmRleF0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6IG51bGwsIGZhbHNlKTtcbiAgICAgICAgY29uc29sZS5sb2codG1wT2JqKTtcbiAgICAgICAgT2JqZWN0TWFuYWdlci5CdWlsZGluZ3MucHVzaCh0bXBPYmopO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGdhbWUgb2JqZWN0IGZyb20gdGhlIGNvbGxlY3Rpb24gYnkgU0lEXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lkIFRoZSBTSUQgb2YgdGhlIGdhbWUgb2JqZWN0IHRvIHJlbW92ZVxuICAgICAqIEBtZW1iZXJPZiBPYmplY3RNYW5hZ2VyXG4gICAgICogQGV4YW1wbGUgT2JqZWN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlbW92ZUdhbWVPYmplY3QoMTIzKTtcbiAgICAgKi9cbiAgICBPYmplY3RNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVCdWlsZGluZyA9IGZ1bmN0aW9uIChzaWQpIHsgfTtcbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGdhbWUgb2JqZWN0cyBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgT2JqZWN0TWFuYWdlclxuICAgICAqIEBleGFtcGxlIE9iamVjdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZW1vdmVBbGxPYmplY3RzKDEwKTtcbiAgICAgKi9cbiAgICBPYmplY3RNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVBbGxCdWlsZGluZ3MgPSBmdW5jdGlvbiAoc2lkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIE9iamVjdE1hbmFnZXIuQnVpbGRpbmdzLmZvckVhY2goZnVuY3Rpb24gKHRtcE9iaikge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKCgoX2EgPSB0bXBPYmogPT09IG51bGwgfHwgdG1wT2JqID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0bXBPYmoub3duZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zaWQpID09PSBzaWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVCdWlsZGluZyh0bXBPYmouc2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBnYW1lIG9iamVjdHNcbiAgICAgKi9cbiAgICBPYmplY3RNYW5hZ2VyLkJ1aWxkaW5ncyA9IFtdO1xuICAgIHJldHVybiBPYmplY3RNYW5hZ2VyO1xufSgpKTtcbmV4cG9ydCB7IE9iamVjdE1hbmFnZXIgfTtcbiIsIi8vc2VsZiBleHBsYW5hdG9yeSAoaG9wZWZ1bGx5KVxuZXhwb3J0IHZhciBzaW4gPSBNYXRoLnNpbiwgY29zID0gTWF0aC5jb3MsIG1pbiA9IE1hdGgubWluLCBtYXggPSBNYXRoLm1heCwgcmFuZG9tID0gTWF0aC5yYW5kb20sIGZsb29yID0gTWF0aC5mbG9vciwgY2VpbCA9IE1hdGguY2VpbCwgcm91bmQgPSBNYXRoLnJvdW5kLCBQSSA9IE1hdGguUEksIHNxcnQgPSBNYXRoLnNxcnQsIGFicyA9IE1hdGguYWJzLCBwb3cgPSBNYXRoLnBvdywgbG9nID0gTWF0aC5sb2csIExOMiA9IE1hdGguTE4yLCBhdGFuMiA9IE1hdGguYXRhbjIsIGh5cG90ID0gTWF0aC5oeXBvdDtcbiIsIi8qIFBsYXllciBjbGFzcyAqL1xudmFyIFBsYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQbGF5ZXIoc2lkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2lkID0gc2lkO1xuICAgICAgICB0aGlzLmlzVGVhbSA9IGZ1bmN0aW9uICh0bXBPYmopIHtcbiAgICAgICAgICAgIHJldHVybiAodG1wT2JqLnNpZCA9PT0gX3RoaXMuc2lkIHx8ICh0bXBPYmoudGVhbSAmJiB0bXBPYmoudGVhbSA9PT0gX3RoaXMudGVhbSkpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBJTklUOlxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoaWQsIG5hbWUsIHgsIHksIGRpciwgaGVhbHRoLCBtYXhIZWFsdGgsIHNjYWxlLCBza2luQ29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcjtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgICAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBtYXhIZWFsdGg7XG4gICAgICAgICAgICB0aGlzLmxhc3RIZWFsdGggPSB0aGlzLmhlYWx0aDtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICAgICAgdGhpcy54MiA9IHg7XG4gICAgICAgICAgICB0aGlzLnkyID0geTtcbiAgICAgICAgICAgIHRoaXMueDMgPSAwO1xuICAgICAgICAgICAgdGhpcy55MyA9IDA7XG4gICAgICAgICAgICB0aGlzLnNraW5JbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLmxhc3RTa2luSW5kZXggPSB0aGlzLnNraW5JbmRleDtcbiAgICAgICAgICAgIHRoaXMudGFpbEluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMubGFzdFRhaWxJbmRleCA9IHRoaXMudGFpbEluZGV4O1xuICAgICAgICAgICAgdGhpcy53ZWFwb25JbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLndlYXBvbnMgPSBbMCwgMF07XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBQbGF5ZXI7XG59KCkpO1xuZXhwb3J0IHsgUGxheWVyIH07XG4iLCIvKipcbiAqIEltcG9ydHNcbiAqL1xuaW1wb3J0IHsgZmluZFBsYXllckJ5U2lkIH0gZnJvbSBcIi4uL1VUSUxTL0ZpbmRQbGF5ZXJCeVNJRFwiOyAvLyBJbXBvcnQgZnVuY3Rpb24gdG8gZmluZCBhIHBsYXllciBieSB0aGVpciBTSURcbmltcG9ydCB7IHVwZGF0ZVBsYXllciB9IGZyb20gXCIuL3VwZGF0ZVBsYXllclwiOyAvLyBJbXBvcnQgZnVuY3Rpb24gdG8gdXBkYXRlIGEgcGxheWVyJ3MgaW5mb3JtYXRpb25cbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiOyAvLyBJbXBvcnQgcGxheWVyIGNsYXNzXG4vKipcbiAqIFBsYXllciBNYW5hZ2VyIGNsYXNzXG4gKlxuICogVGhpcyBjbGFzcyBtYW5hZ2VzIGEgY29sbGVjdGlvbiBvZiBwbGF5ZXJzIGFuZCBwcm92aWRlcyBtZXRob2RzIHRvIGFkZCwgcmVtb3ZlLCBhbmQgdXBkYXRlIHBsYXllcnMuXG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTpQbGF5ZXJzXG4gKi9cbnZhciBQbGF5ZXJzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBsYXllcnMoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgUGxheWVycyBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybnMge1BsYXllcnN9IFRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFBsYXllcnMgY2xhc3NcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIGNvbnN0IHBsYXllcnMgPSBQbGF5ZXJzLmdldEluc3RhbmNlKCk7XG4gICAgICovXG4gICAgUGxheWVycy5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFQbGF5ZXJzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBQbGF5ZXJzLmluc3RhbmNlID0gbmV3IFBsYXllcnMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGxheWVycy5pbnN0YW5jZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSBwbGF5ZXIgdG8gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBTSUQgVGhlIFNJRCBmb3IgdGhlIHBsYXllclxuICAgICAqIEBwYXJhbSB7YW55W119IGRhdGEgVGhlIHBsYXllcidzIGRhdGFcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIHBsYXllcnMuYWRkUGxheWVyKDEsIHsgbmFtZTogXCJPbmlvblwiLCBza2luOiBcIl9fcHJvdG9fX1wifSk7XG4gICAgICovXG4gICAgUGxheWVycy5hZGRQbGF5ZXIgPSBmdW5jdGlvbiAoU0lELCBkYXRhKSB7XG4gICAgICAgIC8qIERhdGEgZm9ybWF0OlxuICAgIFxuICAgICAgICAgIDA6IHtpZCwgc2lkLCBuYW1lLCB4LCB5LCBzb21ldGhpbmcsIGhlYWx0aCwgc29tZXRoaW5nLCBzY2FsZT8sIHNvbWV0aGluZ31cbiAgICAgICAgICAxOiB0cnVlL2ZhbHNlIGZvciB5ZXMvbm8gaXMgbWVcbiAgICAgICAgICAqL1xuICAgICAgICBpZiAoZGF0YVsxXSkge1xuICAgICAgICAgICAgLy8gTVkgUExBWUVSOlxuICAgICAgICAgICAgUGxheWVycy5teVBsYXllciA9IG5ldyBQbGF5ZXIoU0lEKTtcbiAgICAgICAgICAgIFBsYXllcnMucGxheWVycy5wdXNoKFBsYXllcnMubXlQbGF5ZXIpO1xuICAgICAgICAgICAgLy8gSU5JVDpcbiAgICAgICAgICAgIFBsYXllcnMubXlQbGF5ZXIuaW5pdChkYXRhWzBdWzBdLCBkYXRhWzBdWzJdLCBkYXRhWzBdWzNdLCBkYXRhWzBdWzRdLCBkYXRhWzBdWzVdLCBkYXRhWzBdWzZdLCBkYXRhWzBdWzddLCBkYXRhWzBdWzhdLCBkYXRhWzBdWzldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0bXBPYmogPSBuZXcgUGxheWVyKFNJRCk7XG4gICAgICAgICAgICBQbGF5ZXJzLnBsYXllcnMucHVzaCh0bXBPYmopO1xuICAgICAgICAgICAgdG1wT2JqLmluaXQoZGF0YVswXVswXSwgZGF0YVswXVsyXSwgZGF0YVswXVszXSwgZGF0YVswXVs0XSwgZGF0YVswXVs1XSwgZGF0YVswXVs2XSwgZGF0YVswXVs3XSwgZGF0YVswXVs4XSwgZGF0YVswXVs5XSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBwbGF5ZXIgZnJvbSB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpZCBUaGUgU0lEIGZvciB0aGUgcGxheWVyIHRvIHJlbW92ZVxuICAgICAqIEBtZW1iZXJPZiBQbGF5ZXJzXG4gICAgICogQGV4YW1wbGUgcGxheWVycy5yZW1vdmVQbGF5ZXIoMTApO1xuICAgICAqL1xuICAgIFBsYXllcnMucmVtb3ZlUGxheWVyID0gZnVuY3Rpb24gKHNpZCkge1xuICAgICAgICB2YXIgaW5kZXggPSBQbGF5ZXJzLnBsYXllcnMuaW5kZXhPZihQbGF5ZXJzLnBsYXllcnMuZmluZChmdW5jdGlvbiAocGxheWVyKSB7IHJldHVybiBwbGF5ZXIuc2lkID09PSBzaWQ7IH0pLCAwKTtcbiAgICAgICAgZGVsZXRlIFBsYXllcnMucGxheWVyc1tpbmRleF07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwbGF5ZXJzIGluIHRoZSBjb2xsZWN0aW9uIGJhc2VkIG9uIG5ldyBkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBkYXRhIFRoZSBuZXcgZGF0YSB0byB1cGRhdGUgdGhlIHBsYXllcnMgd2l0aFxuICAgICAqIEBtZW1iZXJPZiBQbGF5ZXJzXG4gICAgICogQGV4YW1wbGUgcGxheWVycy51cGRhdGVQbGF5ZXJzKHRtcFBsYXllcik7XG4gICAgICovXG4gICAgUGxheWVycy51cGRhdGVQbGF5ZXJzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy8gVW5yZW5kZXIgYWxsIHBsYXllcnMgYW5kIHJlcmVuZGVyIHBsYXllcnMgaW4gcmFuZ2VcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciB0bXBQbGF5ZXIgPSB0aGlzLnBsYXllcnNbaV07XG4gICAgICAgICAgICB0bXBQbGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMTMpIHtcbiAgICAgICAgICAgIHZhciB0bXBQbGF5ZXIgPSBmaW5kUGxheWVyQnlTaWQoZGF0YVswXSk7XG4gICAgICAgICAgICBpZiAodG1wUGxheWVyKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlUGxheWVyKHRtcFBsYXllciwgZGF0YSwgaSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codG1wUGxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgcGxheWVyc1xuICAgICAqL1xuICAgIFBsYXllcnMucGxheWVycyA9IFtdO1xuICAgIC8qKlxuICAgICAqIE15IHBsYXllclxuICAgICAqL1xuICAgIFBsYXllcnMubXlQbGF5ZXIgPSB7fTtcbiAgICByZXR1cm4gUGxheWVycztcbn0oKSk7XG5leHBvcnQgeyBQbGF5ZXJzIH07XG4iLCJleHBvcnQgZnVuY3Rpb24gdXBkYXRlUGxheWVyKHBsYXllciwgZGF0YSwgaW5kZXgpIHtcbiAgICBwbGF5ZXIudDEgPSBwbGF5ZXIudDIgPT09IHZvaWQgMCA/IERhdGUubm93KCkgOiBwbGF5ZXIudDI7XG4gICAgcGxheWVyLnQyID0gRGF0ZS5ub3coKTtcbiAgICBwbGF5ZXIubGFzUG9zID0ge1xuICAgICAgICB4OiBwbGF5ZXIueDIsXG4gICAgICAgIHk6IHBsYXllci55MixcbiAgICB9O1xuICAgIHBsYXllci54MiA9IGRhdGFbaW5kZXggKyAxXTtcbiAgICBwbGF5ZXIueTIgPSBkYXRhW2luZGV4ICsgMl07XG4gICAgcGxheWVyLmQxID0gcGxheWVyLmQyID09PSB2b2lkIDAgPyBkYXRhW2luZGV4ICsgM10gOiBwbGF5ZXIuZDI7XG4gICAgcGxheWVyLmRlbHRhID0gMDtcbiAgICBwbGF5ZXIud2VhcG9uSW5kZXggPSBkYXRhW2luZGV4ICsgNV07XG4gICAgcGxheWVyLndlYXBvbkluZGV4IDwgOSAmJiAocGxheWVyLndlYXBvbnNbMF0gPSBwbGF5ZXIud2VhcG9uSW5kZXgpO1xuICAgIHBsYXllci53ZWFwb25JbmRleCA+PSA5ICYmIChwbGF5ZXIud2VhcG9uc1sxXSA9IHBsYXllci53ZWFwb25JbmRleCk7XG4gICAgcGxheWVyLndlYXBvblZhcmlhbnQgPSBkYXRhW2luZGV4ICsgNl07XG4gICAgcGxheWVyLnRlYW0gPSBkYXRhW2luZGV4ICsgN107XG4gICAgcGxheWVyLmxhc3RTa2luSW5kZXggPSBwbGF5ZXIuc2tpbkluZGV4O1xuICAgIHBsYXllci5za2luSW5kZXggPSBkYXRhW2luZGV4ICsgOV07XG4gICAgcGxheWVyLmxhc3RUYWlsSW5kZXggPSBwbGF5ZXIudGFpbEluZGV4O1xuICAgIHBsYXllci50YWlsSW5kZXggPSBkYXRhW2luZGV4ICsgMTBdO1xuICAgIHBsYXllci52aXNpYmxlID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIud2VhcG9uSW5kZXgpO1xufVxuIiwiaW1wb3J0IHsgUHJvamVjdGlsZXMgfSBmcm9tIFwiLi4vVVRJTFMvUHJvamVjdGlsZXNcIjtcbmltcG9ydCB7IHByb2plY3RpbGVNYW5hZ2VyIH0gZnJvbSBcIi4vUHJvamVjdGlsZU1hbmFnZXJcIjtcbnZhciBQcm9qZWN0aWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByb2plY3RpbGUoeCwgeSwgZGlyLCByYW5nZSwgc3BlZWQsIGluZGV4LCBvd25lciwgaWdub3JlT2JqZWN0cywgbGF5ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5kYXRhID0gUHJvamVjdGlsZXNbaW5kZXhdO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRpciA9IGRpcjtcbiAgICAgICAgdGhpcy5yYW5nZSA9IHJhbmdlO1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgICAgICB0aGlzLmlnbm9yZU9iamVjdHMgPSBpZ25vcmVPYmplY3RzO1xuICAgICAgICB0aGlzLnNpZCA9IHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVDb3VudDtcbiAgICAgICAgdGhpcy5sYXllciA9IGxheWVyIHx8IHRoaXMuZGF0YS5sYXllcjtcbiAgICAgICAgdGhpcy5kaXN0YW5jZVBlclRpY2sgPSBQcm9qZWN0aWxlc1tpbmRleF0uZGlzdFBlclRpY2s7XG4gICAgICAgIHRoaXMucmV0dXJuTmV4dFRpY2tQb3NpdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IHggKyBfdGhpcy5kaXN0YW5jZVBlclRpY2sgKiBNYXRoLnNpbihfdGhpcy5kaXIpLFxuICAgICAgICAgICAgICAgIHk6IHkgKyBfdGhpcy5kaXN0YW5jZVBlclRpY2sgKiBNYXRoLmNvcyhfdGhpcy5kaXIpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIFByb2plY3RpbGU7XG59KCkpO1xuZXhwb3J0IHsgUHJvamVjdGlsZSB9O1xuIiwiaW1wb3J0IHsgZ2V0RGlzdGFuY2UgfSBmcm9tIFwiLi4vVVRJTFMvR2V0RGlzdGFuY2VcIjtcbmltcG9ydCB7IFByb2plY3RpbGUgfSBmcm9tIFwiLi9Qcm9qZWN0aWxlXCI7XG52YXIgcHJvamVjdGlsZU1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gcHJvamVjdGlsZU1hbmFnZXIoKSB7XG4gICAgfVxuICAgIHByb2plY3RpbGVNYW5hZ2VyLmFkZFByb2plY3RpbGUgPSBmdW5jdGlvbiAoeCwgeSwgZGlyLCByYW5nZSwgc3BlZWQsIGluZGV4LCBsYXllciwgc2lkKSB7XG4gICAgICAgIHZhciBwcm9qZWN0aWxlID0gbmV3IFByb2plY3RpbGUoeCwgeSwgZGlyLCByYW5nZSwgc3BlZWQsIGluZGV4LCBudWxsLCBudWxsLCBsYXllcik7XG4gICAgICAgIHByb2plY3RpbGUuc2lkID0gc2lkO1xuICAgICAgICBjb25zb2xlLndhcm4ocHJvamVjdGlsZSk7XG4gICAgICAgIHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVzLnB1c2gocHJvamVjdGlsZSk7XG4gICAgICAgIHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVDb3VudCsrO1xuICAgIH07XG4gICAgcHJvamVjdGlsZU1hbmFnZXIucmVtb3ZlUHJvamVjdGlsZSA9IGZ1bmN0aW9uIChTSUQpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBwcm9qZWN0aWxlTWFuYWdlci5wcm9qZWN0aWxlcy5pbmRleE9mKHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVzLmZpbmQoZnVuY3Rpb24gKHByb2opIHsgcmV0dXJuIHByb2ouc2lkID09PSBTSUQ7IH0pLCAwKTtcbiAgICAgICAgY29uc29sZS53YXJuKHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVzW2l0ZW1dLCBTSUQpO1xuICAgICAgICBkZWxldGUgcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZXNbaXRlbV07XG4gICAgICAgIHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVDb3VudC0tO1xuICAgIH07XG4gICAgcHJvamVjdGlsZU1hbmFnZXIucmV0cmlldmVEYW5nZXJvdXNQcm9qZWN0aWxlcyA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgICAgdmFyIHByb2plY3RpbGVzID0gW107XG4gICAgICAgIC8qXG4gICAgICAgICAgICBvayBzbyB3ZSBhcmUgZ29ubmEgZmlsdGVyIHRoaXMgc2hpdFxuICAgICAgICAgICAgYnkgZGlzdGFuY2UgdHJhdmVsYWJsZSBwZXIgdGlja1xuICAgICAgICAgICAgKyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBwcm9qZWN0aWxlXG4gICAgXG4gICAgICAgICAgICBzbyBpZiBpdHMgZ29pbmcgdG8gaGl0IHRoZSBwbGF5ZXJcbiAgICAgICAgICAgIHdlIGNhbiByZXR1cm4gaXQgaW4gYW4gYXJyYXlcbiAgICAgICAgICAgIGZvciBkYW1hZ2UgcG90ZW50aWFsIGxhdGVyXG4gICAgICAgICAgICBhbmQgYWxzbyBjb29sIHZpc3VhbHMgeWtcbiAgICAgICAgICAgICovXG4gICAgICAgIC8vdGhlIGNvZGUgYmVsb3cgaXMgdmVyeSBiZXRhLCBhbmQgaXMganVzdCBhIHBsYWNlaG9sZGVyIHRvIG1ha2UgaXQgbG9vayBsaWtlIGkgZGlkIHdvcmsgdG9kYXlcbiAgICAgICAgLy9pbiB0aGUgZnV0dXJlLCBtYXAgb3V0IGFsbCB0aGUgcHJvamVjdGlsZXMgc3BlZWQgYW5kIGFzc2lnbiBpdCB3aXRoIHRoZSBwcm9qZWN0aWxlIHNwZWVkcy90aWNrXG4gICAgICAgIC8vUHJvamVjdGlsZS5wcm9qZWN0aWxlcy5tYXAoKHByb2plY3RpbGUpID0+IHByb2plY3RpbGUuZGlzdFBlclRpY2sgLyogKDFlMyAvIDkpKi8pO1xuICAgICAgICBwcm9qZWN0aWxlTWFuYWdlci5wcm9qZWN0aWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9qZWN0aWxlKSB7XG4gICAgICAgICAgICBpZiAoZ2V0RGlzdGFuY2UocHJvamVjdGlsZS5yZXR1cm5OZXh0VGlja1Bvc2l0aW9uKHByb2plY3RpbGUueCwgcHJvamVjdGlsZS55KSwgcGxheWVyLCAwLCAyKSA8PVxuICAgICAgICAgICAgICAgIHBsYXllci5zY2FsZSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RpbGVzLnB1c2gocHJvamVjdGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvamVjdGlsZXMuc29ydChmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldERpc3RhbmNlKHBsYXllciwgeyB4OiB4LCB5OiB5IH0sIDIsIDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVDb3VudCA9IDA7XG4gICAgcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZXMgPSBbXTtcbiAgICByZXR1cm4gcHJvamVjdGlsZU1hbmFnZXI7XG59KCkpO1xuZXhwb3J0IHsgcHJvamVjdGlsZU1hbmFnZXIgfTtcbiIsIi8qKlxuICogSW1wb3J0cyB0aGUgUGxheWVycyBjbGFzc1xuICovXG5pbXBvcnQgeyBQbGF5ZXJzIH0gZnJvbSBcIi4uL1BsYXllcnMvUGxheWVyTWFuYWdlclwiO1xuLyoqXG4gKiBGaW5kcyBhIHBsYXllciBieSB0aGVpciBTSURcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gc2lkIFRoZSBTSUQgb2YgdGhlIHBsYXllciB0byBmaW5kXG4gKiBAcmV0dXJucyB7YW55fSBUaGUgcGxheWVyIHdpdGggdGhlIG1hdGNoaW5nIFNJRCwgb3IgdW5kZWZpbmVkIGlmIG5vdCBmb3VuZFxuICogQG1lbWJlck9mIG1vZHVsZTpGaW5kUGxheWVyQnlTSURcbiAqIEBleGFtcGxlIGZpbmRQbGF5ZXJCeVNpZCgxMjMpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZFBsYXllckJ5U2lkKHNpZCkge1xuICAgIC8qKlxuICAgICAqIFVzZXMgdGhlIGZpbmQgbWV0aG9kIHRvIHNlYXJjaCB0aGUgcGxheWVycyBhcnJheSBmb3IgYSBwbGF5ZXIgd2l0aCBhIG1hdGNoaW5nIFNJRFxuICAgICAqL1xuICAgIHJldHVybiBQbGF5ZXJzLnBsYXllcnMuZmluZChmdW5jdGlvbiAocGxheWVyKSB7IHJldHVybiBwbGF5ZXIuc2lkID09PSBzaWQ7IH0pO1xufVxuIiwiLyoqXG4gKiBJbXBvcnRzIHRoZSBoeXBvdCBmdW5jdGlvbiBmcm9tIHRoZSBNYXRoIG1vZHVsZVxuICovXG5pbXBvcnQgeyBoeXBvdCB9IGZyb20gXCIuLi9NYXRoXCI7XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG9iamVjdHNcbiAqXG4gKiBAcGFyYW0ge2FueX0gb2JqMSBUaGUgZmlyc3Qgb2JqZWN0XG4gKiBAcGFyYW0ge2FueX0gb2JqMiBUaGUgc2Vjb25kIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IG9iajF0eXBlIFRoZSBjb29yZGluYXRlIHR5cGUgb2Ygb2JqMSAob3B0aW9uYWwpXG4gKiBAcGFyYW0ge251bWJlcn0gb2JqMnR5cGUgVGhlIGNvb3JkaW5hdGUgdHlwZSBvZiBvYmoyIChvcHRpb25hbClcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIG9iajEgYW5kIG9iajJcbiAqIEBtZW1iZXJPZiBtb2R1bGU6R2V0RGlzdGFuY2VcbiAqIEBleGFtcGxlIGdldERpc3RhbmNlKHBsYXllciwgZW5lbXksIDIsIDIpO1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2Uob2JqMSwgb2JqMiwgb2JqMXR5cGUsIG9iajJ0eXBlKSB7XG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgaHlwb3QgZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBkaXN0YW5jZVxuICAgICAqIGh5cG90KGEsIGIpIHJldHVybnMgdGhlIHNxdWFyZSByb290IG9mIGFeMiArIGJeMlxuICAgICAqXG4gICAgICogVGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgYXJlIGR5bmFtaWNhbGx5IGFjY2Vzc2VkIHVzaW5nIGJyYWNrZXQgbm90YXRpb25cbiAgICAgKiBUaGUgdHlwZSBwYXJhbWV0ZXJzIGFyZSB1c2VkIHRvIGFwcGVuZCBhIHN1ZmZpeCB0byB0aGUgcHJvcGVydHkgbmFtZXMgKGUuZy4gXCJ4MVwiIG9yIFwieTJcIilcbiAgICAgKi9cbiAgICByZXR1cm4gaHlwb3Qob2JqMVtcInhcIi5jb25jYXQob2JqMXR5cGUgfHwgXCJcIildIC0gb2JqMltcInhcIi5jb25jYXQob2JqMnR5cGUgfHwgXCJcIildLCBvYmoxW1wieVwiLmNvbmNhdChvYmoxdHlwZSB8fCBcIlwiKV0gLSBvYmoyW1wieVwiLmNvbmNhdChvYmoydHlwZSB8fCBcIlwiKV0pO1xufVxuIiwiZXhwb3J0IHZhciBpdGVtR3JvdXBzID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6IFwiZm9vZFwiLFxuICAgICAgICBsYXllcjogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6IFwid2FsbHNcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMzAsXG4gICAgICAgIGxheWVyOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogXCJzcGlrZXNcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMTUsXG4gICAgICAgIGxheWVyOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogXCJtaWxsXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDcsXG4gICAgICAgIHNhbmRib3hMaW1pdDogMjk5LFxuICAgICAgICBsYXllcjogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6IFwibWluZVwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAxLFxuICAgICAgICBsYXllcjogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIG5hbWU6IFwidHJhcFwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiA2LFxuICAgICAgICBsYXllcjogLTEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBuYW1lOiBcImJvb3N0ZXJcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMTIsXG4gICAgICAgIHNhbmRib3hMaW1pdDogMjk5LFxuICAgICAgICBsYXllcjogLTEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICBuYW1lOiBcInR1cnJldFwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAyLFxuICAgICAgICBsYXllcjogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDgsXG4gICAgICAgIG5hbWU6IFwid2F0Y2h0b3dlclwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAxMixcbiAgICAgICAgbGF5ZXI6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA5LFxuICAgICAgICBuYW1lOiBcImJ1ZmZcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogNCxcbiAgICAgICAgbGF5ZXI6IC0xLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTAsXG4gICAgICAgIG5hbWU6IFwic3Bhd25cIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMSxcbiAgICAgICAgbGF5ZXI6IC0xLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTEsXG4gICAgICAgIG5hbWU6IFwic2FwbGluZ1wiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAyLFxuICAgICAgICBsYXllcjogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEyLFxuICAgICAgICBuYW1lOiBcImJsb2NrZXJcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMyxcbiAgICAgICAgbGF5ZXI6IC0xLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTMsXG4gICAgICAgIG5hbWU6IFwidGVsZXBvcnRlclwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAyLFxuICAgICAgICBzYW5kYm94TGltaXQ6IDI5OSxcbiAgICAgICAgbGF5ZXI6IC0xLFxuICAgIH0sXG5dO1xuIiwiaW1wb3J0IHsgaXRlbUdyb3VwcyB9IGZyb20gXCIuL0l0ZW1Hcm91cHNcIjtcbmV4cG9ydCB2YXIgSXRlbXMgPSBbXG4gICAge1xuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1swXSxcbiAgICAgICAgbmFtZTogXCJhcHBsZVwiLFxuICAgICAgICBkZXNjOiBcInJlc3RvcmVzIDIwIGhlYWx0aCB3aGVuIGNvbnN1bWVkXCIsXG4gICAgICAgIHJlcTogW1wiZm9vZFwiLCAxMF0sXG4gICAgICAgIGNvbnN1bWU6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdC5jaGFuZ2VIZWFsdGgoMjAsIHQpO1xuICAgICAgICB9LFxuICAgICAgICBoZWFsaW5nOiAyMCxcbiAgICAgICAgc2NhbGU6IDIyLFxuICAgICAgICBob2xkT2Zmc2V0OiAxNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiAzLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1swXSxcbiAgICAgICAgbmFtZTogXCJjb29raWVcIixcbiAgICAgICAgZGVzYzogXCJyZXN0b3JlcyA0MCBoZWFsdGggd2hlbiBjb25zdW1lZFwiLFxuICAgICAgICByZXE6IFtcImZvb2RcIiwgMTVdLFxuICAgICAgICBjb25zdW1lOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuY2hhbmdlSGVhbHRoKDQwLCB0KTtcbiAgICAgICAgfSxcbiAgICAgICAgaGVhbGluZzogNDAsXG4gICAgICAgIHNjYWxlOiAyNyxcbiAgICAgICAgaG9sZE9mZnNldDogMTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMF0sXG4gICAgICAgIG5hbWU6IFwiY2hlZXNlXCIsXG4gICAgICAgIGRlc2M6IFwicmVzdG9yZXMgMzAgaGVhbHRoIGFuZCBhbm90aGVyIDUwIG92ZXIgNSBzZWNvbmRzXCIsXG4gICAgICAgIHJlcTogW1wiZm9vZFwiLCAyNV0sXG4gICAgICAgIGNvbnN1bWU6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gKCghIXQuY2hhbmdlSGVhbHRoKDMwLCB0KSB8fCB0LmhlYWx0aCA8IDEwMCkgJiZcbiAgICAgICAgICAgICAgICAoKHQuZG1nT3ZlclRpbWUuZG1nID0gLTEwKSxcbiAgICAgICAgICAgICAgICAgICAgKHQuZG1nT3ZlclRpbWUuZG9lciA9IHQpLFxuICAgICAgICAgICAgICAgICAgICAodC5kbWdPdmVyVGltZS50aW1lID0gNSksXG4gICAgICAgICAgICAgICAgICAgICEwKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhlYWxpbmc6IDMwLFxuICAgICAgICBzY2FsZTogMjcsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDE1LFxuICAgIH0sXG4gICAge1xuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxXSxcbiAgICAgICAgbmFtZTogXCJ3b29kIHdhbGxcIixcbiAgICAgICAgZGVzYzogXCJwcm92aWRlcyBwcm90ZWN0aW9uIGZvciB5b3VyIHZpbGxhZ2VcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDEwXSxcbiAgICAgICAgcHJvakRtZzogITAsXG4gICAgICAgIGhlYWx0aDogMzgwLFxuICAgICAgICBzY2FsZTogNTAsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogMyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMV0sXG4gICAgICAgIG5hbWU6IFwic3RvbmUgd2FsbFwiLFxuICAgICAgICBkZXNjOiBcInByb3ZpZGVzIGltcHJvdmVkIHByb3RlY3Rpb24gZm9yIHlvdXIgdmlsbGFnZVwiLFxuICAgICAgICByZXE6IFtcInN0b25lXCIsIDI1XSxcbiAgICAgICAgaGVhbHRoOiA5MDAsXG4gICAgICAgIHNjYWxlOiA1MCxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBwcmU6IDEsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzFdLFxuICAgICAgICBuYW1lOiBcImNhc3RsZSB3YWxsXCIsXG4gICAgICAgIGRlc2M6IFwicHJvdmlkZXMgcG93ZXJmdWwgcHJvdGVjdGlvbiBmb3IgeW91ciB2aWxsYWdlXCIsXG4gICAgICAgIHJlcTogW1wic3RvbmVcIiwgMzVdLFxuICAgICAgICBoZWFsdGg6IDE1MDAsXG4gICAgICAgIHNjYWxlOiA1MixcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMl0sXG4gICAgICAgIG5hbWU6IFwic3Bpa2VzXCIsXG4gICAgICAgIGRlc2M6IFwiZGFtYWdlcyBlbmVtaWVzIHdoZW4gdGhleSB0b3VjaCB0aGVtXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAyMCwgXCJzdG9uZVwiLCA1XSxcbiAgICAgICAgaGVhbHRoOiA0MDAsXG4gICAgICAgIGRtZzogMjAsXG4gICAgICAgIHNjYWxlOiA0OSxcbiAgICAgICAgc3ByaXRlUGFkZGluZzogLTIzLFxuICAgICAgICBob2xkT2Zmc2V0OiA4LFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNSxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMl0sXG4gICAgICAgIG5hbWU6IFwiZ3JlYXRlciBzcGlrZXNcIixcbiAgICAgICAgZGVzYzogXCJkYW1hZ2VzIGVuZW1pZXMgd2hlbiB0aGV5IHRvdWNoIHRoZW1cIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDMwLCBcInN0b25lXCIsIDEwXSxcbiAgICAgICAgaGVhbHRoOiA1MDAsXG4gICAgICAgIGRtZzogMzUsXG4gICAgICAgIHNjYWxlOiA1MixcbiAgICAgICAgc3ByaXRlUGFkZGluZzogLTIzLFxuICAgICAgICBob2xkT2Zmc2V0OiA4LFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogOSxcbiAgICAgICAgcHJlOiAxLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1syXSxcbiAgICAgICAgbmFtZTogXCJwb2lzb24gc3Bpa2VzXCIsXG4gICAgICAgIGRlc2M6IFwicG9pc29ucyBlbmVtaWVzIHdoZW4gdGhleSB0b3VjaCB0aGVtXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAzNSwgXCJzdG9uZVwiLCAxNV0sXG4gICAgICAgIGhlYWx0aDogNjAwLFxuICAgICAgICBkbWc6IDMwLFxuICAgICAgICBwRG1nOiA1LFxuICAgICAgICBzY2FsZTogNTIsXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IC0yMyxcbiAgICAgICAgaG9sZE9mZnNldDogOCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDksXG4gICAgICAgIHByZTogMixcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMl0sXG4gICAgICAgIG5hbWU6IFwic3Bpbm5pbmcgc3Bpa2VzXCIsXG4gICAgICAgIGRlc2M6IFwiZGFtYWdlcyBlbmVtaWVzIHdoZW4gdGhleSB0b3VjaCB0aGVtXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAzMCwgXCJzdG9uZVwiLCAyMF0sXG4gICAgICAgIGhlYWx0aDogNTAwLFxuICAgICAgICBkbWc6IDQ1LFxuICAgICAgICB0dXJuU3BlZWQ6IDAuMDAzLFxuICAgICAgICBzY2FsZTogNTIsXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IC0yMyxcbiAgICAgICAgaG9sZE9mZnNldDogOCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1szXSxcbiAgICAgICAgbmFtZTogXCJ3aW5kbWlsbFwiLFxuICAgICAgICBkZXNjOiBcImdlbmVyYXRlcyBnb2xkIG92ZXIgdGltZVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgNTAsIFwic3RvbmVcIiwgMTBdLFxuICAgICAgICBoZWFsdGg6IDQwMCxcbiAgICAgICAgcHBzOiAxLFxuICAgICAgICB0dXJuU3BlZWQ6IDAuMDAxNixcbiAgICAgICAgc3ByaXRlUGFkZGluZzogMjUsXG4gICAgICAgIGljb25MaW5lTXVsdDogMTIsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiA1LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDUsXG4gICAgICAgIHByZTogMSxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbM10sXG4gICAgICAgIG5hbWU6IFwiZmFzdGVyIHdpbmRtaWxsXCIsXG4gICAgICAgIGRlc2M6IFwiZ2VuZXJhdGVzIG1vcmUgZ29sZCBvdmVyIHRpbWVcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDYwLCBcInN0b25lXCIsIDIwXSxcbiAgICAgICAgaGVhbHRoOiA1MDAsXG4gICAgICAgIHBwczogMS41LFxuICAgICAgICB0dXJuU3BlZWQ6IDAuMDAyNSxcbiAgICAgICAgc3ByaXRlUGFkZGluZzogMjUsXG4gICAgICAgIGljb25MaW5lTXVsdDogMTIsXG4gICAgICAgIHNjYWxlOiA0NyxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiA1LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDgsXG4gICAgICAgIHByZTogMSxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbM10sXG4gICAgICAgIG5hbWU6IFwicG93ZXIgbWlsbFwiLFxuICAgICAgICBkZXNjOiBcImdlbmVyYXRlcyBtb3JlIGdvbGQgb3ZlciB0aW1lXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAxMDAsIFwic3RvbmVcIiwgNTBdLFxuICAgICAgICBoZWFsdGg6IDgwMCxcbiAgICAgICAgcHBzOiAyLFxuICAgICAgICB0dXJuU3BlZWQ6IDAuMDA1LFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAyNSxcbiAgICAgICAgaWNvbkxpbmVNdWx0OiAxMixcbiAgICAgICAgc2NhbGU6IDQ3LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IDUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNSxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbNF0sXG4gICAgICAgIHR5cGU6IDIsXG4gICAgICAgIG5hbWU6IFwibWluZVwiLFxuICAgICAgICBkZXNjOiBcImFsbG93cyB5b3UgdG8gbWluZSBzdG9uZVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMjAsIFwic3RvbmVcIiwgMTAwXSxcbiAgICAgICAgaWNvbkxpbmVNdWx0OiAxMixcbiAgICAgICAgc2NhbGU6IDY1LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNSxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMTFdLFxuICAgICAgICB0eXBlOiAwLFxuICAgICAgICBuYW1lOiBcInNhcGxpbmdcIixcbiAgICAgICAgZGVzYzogXCJhbGxvd3MgeW91IHRvIGZhcm0gd29vZFwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMTUwXSxcbiAgICAgICAgaWNvbkxpbmVNdWx0OiAxMixcbiAgICAgICAgY29sRGl2OiAwLjUsXG4gICAgICAgIHNjYWxlOiAxMTAsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDUwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTE1LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDQsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzVdLFxuICAgICAgICBuYW1lOiBcInBpdCB0cmFwXCIsXG4gICAgICAgIGRlc2M6IFwicGl0IHRoYXQgdHJhcHMgZW5lbWllcyBpZiB0aGV5IHdhbGsgb3ZlciBpdFwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMzAsIFwic3RvbmVcIiwgMzBdLFxuICAgICAgICB0cmFwOiAhMCxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgaGlkZUZyb21FbmVteTogITAsXG4gICAgICAgIGhlYWx0aDogNTAwLFxuICAgICAgICBjb2xEaXY6IDAuMixcbiAgICAgICAgc2NhbGU6IDUwLFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDQsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzZdLFxuICAgICAgICBuYW1lOiBcImJvb3N0IHBhZFwiLFxuICAgICAgICBkZXNjOiBcInByb3ZpZGVzIGJvb3N0IHdoZW4gc3RlcHBlZCBvblwiLFxuICAgICAgICByZXE6IFtcInN0b25lXCIsIDIwLCBcIndvb2RcIiwgNV0sXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIGJvb3N0U3BlZWQ6IDEuNSxcbiAgICAgICAgaGVhbHRoOiAxNTAsXG4gICAgICAgIGNvbERpdjogMC43LFxuICAgICAgICBzY2FsZTogNDUsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbN10sXG4gICAgICAgIGRvVXBkYXRlOiAhMCxcbiAgICAgICAgbmFtZTogXCJ0dXJyZXRcIixcbiAgICAgICAgZGVzYzogXCJkZWZlbnNpdmUgc3RydWN0dXJlIHRoYXQgc2hvb3RzIGF0IGVuZW1pZXNcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDIwMCwgXCJzdG9uZVwiLCAxNTBdLFxuICAgICAgICBoZWFsdGg6IDgwMCxcbiAgICAgICAgcHJvamVjdGlsZTogMSxcbiAgICAgICAgc2hvb3RSYW5nZTogNzAwLFxuICAgICAgICBzaG9vdFJhdGU6IDIyMDAsXG4gICAgICAgIHNjYWxlOiA0MyxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s4XSxcbiAgICAgICAgbmFtZTogXCJwbGF0Zm9ybVwiLFxuICAgICAgICBkZXNjOiBcInBsYXRmb3JtIHRvIHNob290IG92ZXIgd2FsbHMgYW5kIGNyb3NzIG92ZXIgd2F0ZXJcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDIwXSxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgekluZGV4OiAxLFxuICAgICAgICBoZWFsdGg6IDMwMCxcbiAgICAgICAgc2NhbGU6IDQzLFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDcsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzldLFxuICAgICAgICBuYW1lOiBcImhlYWxpbmcgcGFkXCIsXG4gICAgICAgIGRlc2M6IFwic3RhbmRpbmcgb24gaXQgd2lsbCBzbG93bHkgaGVhbCB5b3VcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDMwLCBcImZvb2RcIiwgMTBdLFxuICAgICAgICBpZ25vcmVDb2xsaXNpb246ICEwLFxuICAgICAgICBoZWFsQ29sOiAxNSxcbiAgICAgICAgaGVhbHRoOiA0MDAsXG4gICAgICAgIGNvbERpdjogMC43LFxuICAgICAgICBzY2FsZTogNDUsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogOSxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMTBdLFxuICAgICAgICBuYW1lOiBcInNwYXduIHBhZFwiLFxuICAgICAgICBkZXNjOiBcInlvdSB3aWxsIHNwYXduIGhlcmUgd2hlbiB5b3UgZGllIGJ1dCBpdCB3aWxsIGRpc3NhcGVhclwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMTAwLCBcInN0b25lXCIsIDEwMF0sXG4gICAgICAgIGhlYWx0aDogNDAwLFxuICAgICAgICBpZ25vcmVDb2xsaXNpb246ICEwLFxuICAgICAgICBzcGF3blBvaW50OiAhMCxcbiAgICAgICAgc2NhbGU6IDQ1LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDcsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzEyXSxcbiAgICAgICAgbmFtZTogXCJibG9ja2VyXCIsXG4gICAgICAgIGRlc2M6IFwiYmxvY2tzIGJ1aWxkaW5nIGluIHJhZGl1c1wiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMzAsIFwic3RvbmVcIiwgMjVdLFxuICAgICAgICBpZ25vcmVDb2xsaXNpb246ICEwLFxuICAgICAgICBibG9ja2VyOiAzMDAsXG4gICAgICAgIGhlYWx0aDogNDAwLFxuICAgICAgICBjb2xEaXY6IDAuNyxcbiAgICAgICAgc2NhbGU6IDQ1LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDcsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzEzXSxcbiAgICAgICAgbmFtZTogXCJ0ZWxlcG9ydGVyXCIsXG4gICAgICAgIGRlc2M6IFwidGVsZXBvcnRzIHlvdSB0byBhIHJhbmRvbSBwb2ludCBvbiB0aGUgbWFwXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCA2MCwgXCJzdG9uZVwiLCA2MF0sXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIHRlbGVwb3J0OiAhMCxcbiAgICAgICAgaGVhbHRoOiAyMDAsXG4gICAgICAgIGNvbERpdjogMC43LFxuICAgICAgICBzY2FsZTogNDUsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbl07XG4iLCJleHBvcnQgdmFyIFByb2plY3RpbGVzID0gW1xuICAgIHtcbiAgICAgICAgaW5keDogMCxcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgICAgIHNyYzogXCJhcnJvd18xXCIsXG4gICAgICAgIGRtZzogMjUsXG4gICAgICAgIHNwZWVkOiAxLjYsXG4gICAgICAgIHNjYWxlOiAxMDMsXG4gICAgICAgIHJhbmdlOiAxZTMsXG4gICAgICAgIGRpc3RQZXJUaWNrOiAxLjYsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZHg6IDEsXG4gICAgICAgIGxheWVyOiAxLFxuICAgICAgICBkbWc6IDI1LFxuICAgICAgICBzY2FsZTogMjAsXG4gICAgICAgIGRpc3RQZXJUaWNrOiAxLjYsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZHg6IDAsXG4gICAgICAgIGxheWVyOiAwLFxuICAgICAgICBzcmM6IFwiYXJyb3dfMVwiLFxuICAgICAgICBkbWc6IDM1LFxuICAgICAgICBzcGVlZDogMi41LFxuICAgICAgICBzY2FsZTogMTAzLFxuICAgICAgICByYW5nZTogMTIwMCxcbiAgICAgICAgZGlzdFBlclRpY2s6IDIuNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW5keDogMCxcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgICAgIHNyYzogXCJhcnJvd18xXCIsXG4gICAgICAgIGRtZzogMzAsXG4gICAgICAgIHNwZWVkOiAyLFxuICAgICAgICBzY2FsZTogMTAzLFxuICAgICAgICByYW5nZTogMTIwMCxcbiAgICAgICAgZGlzdFBlclRpY2s6IDIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZHg6IDEsXG4gICAgICAgIGxheWVyOiAxLFxuICAgICAgICBkbWc6IDE2LFxuICAgICAgICBzY2FsZTogMjAsXG4gICAgICAgIGRpc3RQZXJUaWNrOiBOYU4sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZHg6IDAsXG4gICAgICAgIGxheWVyOiAwLFxuICAgICAgICBzcmM6IFwiYnVsbGV0XzFcIixcbiAgICAgICAgZG1nOiA1MCxcbiAgICAgICAgc3BlZWQ6IDMuNixcbiAgICAgICAgc2NhbGU6IDE2MCxcbiAgICAgICAgcmFuZ2U6IDE0MDAsXG4gICAgICAgIGRpc3RQZXJUaWNrOiAzLjYsXG4gICAgfSxcbl07XG4iLCJleHBvcnQgdmFyIGJhZFdvcmRzID0gW1xuICAgIFwiYWhvbGVcIixcbiAgICBcImFudXNcIixcbiAgICBcImFzaDBsZVwiLFxuICAgIFwiYXNoMGxlc1wiLFxuICAgIFwiYXNob2xlc1wiLFxuICAgIFwiYXNzXCIsXG4gICAgXCJBc3MgTW9ua2V5XCIsXG4gICAgXCJBc3NmYWNlXCIsXG4gICAgXCJhc3NoMGxlXCIsXG4gICAgXCJhc3NoMGxlelwiLFxuICAgIFwiYXNzaG9sZVwiLFxuICAgIFwiYXNzaG9sZXNcIixcbiAgICBcImFzc2hvbHpcIixcbiAgICBcImFzc3dpcGVcIixcbiAgICBcImF6emhvbGVcIixcbiAgICBcImJhc3N0ZXJkc1wiLFxuICAgIFwiYmFzdGFyZFwiLFxuICAgIFwiYmFzdGFyZHNcIixcbiAgICBcImJhc3RhcmR6XCIsXG4gICAgXCJiYXN0ZXJkc1wiLFxuICAgIFwiYmFzdGVyZHpcIixcbiAgICBcIkJpYXRjaFwiLFxuICAgIFwiYml0Y2hcIixcbiAgICBcImJpdGNoZXNcIixcbiAgICBcIkJsb3cgSm9iXCIsXG4gICAgXCJib2ZmaW5nXCIsXG4gICAgXCJidXR0aG9sZVwiLFxuICAgIFwiYnV0dHdpcGVcIixcbiAgICBcImMwY2tcIixcbiAgICBcImMwY2tzXCIsXG4gICAgXCJjMGtcIixcbiAgICBcIkNhcnBldCBNdW5jaGVyXCIsXG4gICAgXCJjYXdrXCIsXG4gICAgXCJjYXdrc1wiLFxuICAgIFwiQ2xpdFwiLFxuICAgIFwiY250c1wiLFxuICAgIFwiY250elwiLFxuICAgIFwiY29ja1wiLFxuICAgIFwiY29ja2hlYWRcIixcbiAgICBcImNvY2staGVhZFwiLFxuICAgIFwiY29ja3NcIixcbiAgICBcIkNvY2tTdWNrZXJcIixcbiAgICBcImNvY2stc3Vja2VyXCIsXG4gICAgXCJjcmFwXCIsXG4gICAgXCJjdW1cIixcbiAgICBcImN1bnRcIixcbiAgICBcImN1bnRzXCIsXG4gICAgXCJjdW50elwiLFxuICAgIFwiZGlja1wiLFxuICAgIFwiZGlsZDBcIixcbiAgICBcImRpbGQwc1wiLFxuICAgIFwiZGlsZG9cIixcbiAgICBcImRpbGRvc1wiLFxuICAgIFwiZGlsbGQwXCIsXG4gICAgXCJkaWxsZDBzXCIsXG4gICAgXCJkb21pbmF0cmlja3NcIixcbiAgICBcImRvbWluYXRyaWNzXCIsXG4gICAgXCJkb21pbmF0cml4XCIsXG4gICAgXCJkeWtlXCIsXG4gICAgXCJlbmVtYVwiLFxuICAgIFwiZiB1IGMga1wiLFxuICAgIFwiZiB1IGMgayBlIHJcIixcbiAgICBcImZhZ1wiLFxuICAgIFwiZmFnMXRcIixcbiAgICBcImZhZ2V0XCIsXG4gICAgXCJmYWdnMXRcIixcbiAgICBcImZhZ2dpdFwiLFxuICAgIFwiZmFnZ290XCIsXG4gICAgXCJmYWdnMHRcIixcbiAgICBcImZhZ2l0XCIsXG4gICAgXCJmYWdzXCIsXG4gICAgXCJmYWd6XCIsXG4gICAgXCJmYWlnXCIsXG4gICAgXCJmYWlnc1wiLFxuICAgIFwiZmFydFwiLFxuICAgIFwiZmxpcHBpbmcgdGhlIGJpcmRcIixcbiAgICBcImZ1Y2tcIixcbiAgICBcImZ1Y2tlclwiLFxuICAgIFwiZnVja2luXCIsXG4gICAgXCJmdWNraW5nXCIsXG4gICAgXCJmdWNrc1wiLFxuICAgIFwiRnVkZ2UgUGFja2VyXCIsXG4gICAgXCJmdWtcIixcbiAgICBcIkZ1a2FoXCIsXG4gICAgXCJGdWtlblwiLFxuICAgIFwiZnVrZXJcIixcbiAgICBcIkZ1a2luXCIsXG4gICAgXCJGdWtrXCIsXG4gICAgXCJGdWtrYWhcIixcbiAgICBcIkZ1a2tlblwiLFxuICAgIFwiRnVra2VyXCIsXG4gICAgXCJGdWtraW5cIixcbiAgICBcImcwMGtcIixcbiAgICBcIkdvZC1kYW1uZWRcIixcbiAgICBcImgwMHJcIixcbiAgICBcImgwYXJcIixcbiAgICBcImgwcmVcIixcbiAgICBcImhlbGxzXCIsXG4gICAgXCJob2FyXCIsXG4gICAgXCJob29yXCIsXG4gICAgXCJob29yZVwiLFxuICAgIFwiamFja29mZlwiLFxuICAgIFwiamFwXCIsXG4gICAgXCJqYXBzXCIsXG4gICAgXCJqZXJrLW9mZlwiLFxuICAgIFwiamlzaW1cIixcbiAgICBcImppc3NcIixcbiAgICBcImppem1cIixcbiAgICBcImppenpcIixcbiAgICBcImtub2JcIixcbiAgICBcImtub2JzXCIsXG4gICAgXCJrbm9ielwiLFxuICAgIFwia3VudFwiLFxuICAgIFwia3VudHNcIixcbiAgICBcImt1bnR6XCIsXG4gICAgXCJMZXp6aWFuXCIsXG4gICAgXCJMaXBzaGl0c1wiLFxuICAgIFwiTGlwc2hpdHpcIixcbiAgICBcIm1hc29jaGlzdFwiLFxuICAgIFwibWFzb2tpc3RcIixcbiAgICBcIm1hc3N0ZXJiYWl0XCIsXG4gICAgXCJtYXNzdHJiYWl0XCIsXG4gICAgXCJtYXNzdHJiYXRlXCIsXG4gICAgXCJtYXN0ZXJiYWl0ZXJcIixcbiAgICBcIm1hc3RlcmJhdGVcIixcbiAgICBcIm1hc3RlcmJhdGVzXCIsXG4gICAgXCJNb3RoYSBGdWNrZXJcIixcbiAgICBcIk1vdGhhIEZ1a2VyXCIsXG4gICAgXCJNb3RoYSBGdWtrYWhcIixcbiAgICBcIk1vdGhhIEZ1a2tlclwiLFxuICAgIFwiTW90aGVyIEZ1Y2tlclwiLFxuICAgIFwiTW90aGVyIEZ1a2FoXCIsXG4gICAgXCJNb3RoZXIgRnVrZXJcIixcbiAgICBcIk1vdGhlciBGdWtrYWhcIixcbiAgICBcIk1vdGhlciBGdWtrZXJcIixcbiAgICBcIm1vdGhlci1mdWNrZXJcIixcbiAgICBcIk11dGhhIEZ1Y2tlclwiLFxuICAgIFwiTXV0aGEgRnVrYWhcIixcbiAgICBcIk11dGhhIEZ1a2VyXCIsXG4gICAgXCJNdXRoYSBGdWtrYWhcIixcbiAgICBcIk11dGhhIEZ1a2tlclwiLFxuICAgIFwibjFnclwiLFxuICAgIFwibmFzdHRcIixcbiAgICBcIm5pZ2dlcjtcIixcbiAgICBcIm5pZ3VyO1wiLFxuICAgIFwibmlpZ2VyO1wiLFxuICAgIFwibmlpZ3I7XCIsXG4gICAgXCJvcmFmaXNcIixcbiAgICBcIm9yZ2FzaW07XCIsXG4gICAgXCJvcmdhc21cIixcbiAgICBcIm9yZ2FzdW1cIixcbiAgICBcIm9yaWZhY2VcIixcbiAgICBcIm9yaWZpY2VcIixcbiAgICBcIm9yaWZpc3NcIixcbiAgICBcInBhY2tpXCIsXG4gICAgXCJwYWNraWVcIixcbiAgICBcInBhY2t5XCIsXG4gICAgXCJwYWtpXCIsXG4gICAgXCJwYWtpZVwiLFxuICAgIFwicGFreVwiLFxuICAgIFwicGVja2VyXCIsXG4gICAgXCJwZWVlbnVzXCIsXG4gICAgXCJwZWVlbnVzc3NcIixcbiAgICBcInBlZW51c1wiLFxuICAgIFwicGVpbnVzXCIsXG4gICAgXCJwZW4xc1wiLFxuICAgIFwicGVuYXNcIixcbiAgICBcInBlbmlzXCIsXG4gICAgXCJwZW5pcy1icmVhdGhcIixcbiAgICBcInBlbnVzXCIsXG4gICAgXCJwZW51dXNcIixcbiAgICBcIlBodWNcIixcbiAgICBcIlBodWNrXCIsXG4gICAgXCJQaHVrXCIsXG4gICAgXCJQaHVrZXJcIixcbiAgICBcIlBodWtrZXJcIixcbiAgICBcInBvbGFjXCIsXG4gICAgXCJwb2xhY2tcIixcbiAgICBcInBvbGFrXCIsXG4gICAgXCJQb29uYW5pXCIsXG4gICAgXCJwcjFjXCIsXG4gICAgXCJwcjFja1wiLFxuICAgIFwicHIxa1wiLFxuICAgIFwicHVzc2VcIixcbiAgICBcInB1c3NlZVwiLFxuICAgIFwicHVzc3lcIixcbiAgICBcInB1dWtlXCIsXG4gICAgXCJwdXVrZXJcIixcbiAgICBcInF3ZWlyXCIsXG4gICAgXCJyZWNrdHVtXCIsXG4gICAgXCJyZWN0dW1cIixcbiAgICBcInJldGFyZFwiLFxuICAgIFwic2FkaXN0XCIsXG4gICAgXCJzY2Fua1wiLFxuICAgIFwic2NobG9uZ1wiLFxuICAgIFwic2NyZXdpbmdcIixcbiAgICBcInNlbWVuXCIsXG4gICAgXCJzZXhcIixcbiAgICBcInNleHlcIixcbiAgICBcIlNoIXRcIixcbiAgICBcInNoMXRcIixcbiAgICBcInNoMXRlclwiLFxuICAgIFwic2gxdHNcIixcbiAgICBcInNoMXR0ZXJcIixcbiAgICBcInNoMXR6XCIsXG4gICAgXCJzaGl0XCIsXG4gICAgXCJzaGl0c1wiLFxuICAgIFwic2hpdHRlclwiLFxuICAgIFwiU2hpdHR5XCIsXG4gICAgXCJTaGl0eVwiLFxuICAgIFwic2hpdHpcIixcbiAgICBcIlNoeXRcIixcbiAgICBcIlNoeXRlXCIsXG4gICAgXCJTaHl0dHlcIixcbiAgICBcIlNoeXR5XCIsXG4gICAgXCJza2FuY2tcIixcbiAgICBcInNrYW5rXCIsXG4gICAgXCJza2Fua2VlXCIsXG4gICAgXCJza2Fua2V5XCIsXG4gICAgXCJza2Fua3NcIixcbiAgICBcIlNrYW5reVwiLFxuICAgIFwic2xhZ1wiLFxuICAgIFwic2x1dFwiLFxuICAgIFwic2x1dHNcIixcbiAgICBcIlNsdXR0eVwiLFxuICAgIFwic2x1dHpcIixcbiAgICBcInNvbi1vZi1hLWJpdGNoXCIsXG4gICAgXCJ0aXRcIixcbiAgICBcInR1cmRcIixcbiAgICBcInZhMWppbmFcIixcbiAgICBcInZhZzFuYVwiLFxuICAgIFwidmFnaWluYVwiLFxuICAgIFwidmFnaW5hXCIsXG4gICAgXCJ2YWoxbmFcIixcbiAgICBcInZhamluYVwiLFxuICAgIFwidnVsbHZhXCIsXG4gICAgXCJ2dWx2YVwiLFxuICAgIFwidzBwXCIsXG4gICAgXCJ3aDAwclwiLFxuICAgIFwid2gwcmVcIixcbiAgICBcIndob3JlXCIsXG4gICAgXCJ4cmF0ZWRcIixcbiAgICBcInh4eFwiLFxuICAgIFwiYiErY2hcIixcbiAgICBcImJpdGNoXCIsXG4gICAgXCJibG93am9iXCIsXG4gICAgXCJjbGl0XCIsXG4gICAgXCJhcnNjaGxvY2hcIixcbiAgICBcImZ1Y2tcIixcbiAgICBcInNoaXRcIixcbiAgICBcImFzc1wiLFxuICAgIFwiYXNzaG9sZVwiLFxuICAgIFwiYiF0Y2hcIixcbiAgICBcImIxN2NoXCIsXG4gICAgXCJiMXRjaFwiLFxuICAgIFwiYmFzdGFyZFwiLFxuICAgIFwiYmkrY2hcIixcbiAgICBcImJvaW9sYXNcIixcbiAgICBcImJ1Y2V0YVwiLFxuICAgIFwiYzBja1wiLFxuICAgIFwiY2F3a1wiLFxuICAgIFwiY2hpbmtcIixcbiAgICBcImNpcGFcIixcbiAgICBcImNsaXRzXCIsXG4gICAgXCJjb2NrXCIsXG4gICAgXCJjdW1cIixcbiAgICBcImN1bnRcIixcbiAgICBcImRpbGRvXCIsXG4gICAgXCJkaXJzYVwiLFxuICAgIFwiZWpha3VsYXRlXCIsXG4gICAgXCJmYXRhc3NcIixcbiAgICBcImZjdWtcIixcbiAgICBcImZ1a1wiLFxuICAgIFwiZnV4MHJcIixcbiAgICBcImhvZXJcIixcbiAgICBcImhvcmVcIixcbiAgICBcImppc21cIixcbiAgICBcImthd2tcIixcbiAgICBcImwzaXRjaFwiLFxuICAgIFwibDNpK2NoXCIsXG4gICAgXCJtYXN0dXJiYXRlXCIsXG4gICAgXCJtYXN0ZXJiYXQqXCIsXG4gICAgXCJtYXN0ZXJiYXQzXCIsXG4gICAgXCJtb3RoZXJmdWNrZXJcIixcbiAgICBcInMuby5iLlwiLFxuICAgIFwibW9mb1wiLFxuICAgIFwibmF6aVwiLFxuICAgIFwibmlnZ2FcIixcbiAgICBcIm5pZ2dlclwiLFxuICAgIFwibnV0c2Fja1wiLFxuICAgIFwicGh1Y2tcIixcbiAgICBcInBpbXBpc1wiLFxuICAgIFwicHVzc2VcIixcbiAgICBcInB1c3N5XCIsXG4gICAgXCJzY3JvdHVtXCIsXG4gICAgXCJzaCF0XCIsXG4gICAgXCJzaGVtYWxlXCIsXG4gICAgXCJzaGkrXCIsXG4gICAgXCJzaCErXCIsXG4gICAgXCJzbHV0XCIsXG4gICAgXCJzbXV0XCIsXG4gICAgXCJ0ZWV0c1wiLFxuICAgIFwidGl0c1wiLFxuICAgIFwiYm9vYnNcIixcbiAgICBcImIwMGJzXCIsXG4gICAgXCJ0ZWV6XCIsXG4gICAgXCJ0ZXN0aWNhbFwiLFxuICAgIFwidGVzdGljbGVcIixcbiAgICBcInRpdHRcIixcbiAgICBcIncwMHNlXCIsXG4gICAgXCJqYWNrb2ZmXCIsXG4gICAgXCJ3YW5rXCIsXG4gICAgXCJ3aG9hclwiLFxuICAgIFwid2hvcmVcIixcbiAgICBcIipkYW1uXCIsXG4gICAgXCIqZHlrZVwiLFxuICAgIFwiKmZ1Y2sqXCIsXG4gICAgXCIqc2hpdCpcIixcbiAgICBcIkAkJFwiLFxuICAgIFwiYW1jaWtcIixcbiAgICBcImFuZHNrb3RhXCIsXG4gICAgXCJhcnNlKlwiLFxuICAgIFwiYXNzcmFtbWVyXCIsXG4gICAgXCJheWlyXCIsXG4gICAgXCJiaTdjaFwiLFxuICAgIFwiYml0Y2gqXCIsXG4gICAgXCJib2xsb2NrKlwiLFxuICAgIFwiYnJlYXN0c1wiLFxuICAgIFwiYnV0dC1waXJhdGVcIixcbiAgICBcImNhYnJvblwiLFxuICAgIFwiY2F6em9cIixcbiAgICBcImNocmFhXCIsXG4gICAgXCJjaHVqXCIsXG4gICAgXCJDb2NrKlwiLFxuICAgIFwiY3VudCpcIixcbiAgICBcImQ0bW5cIixcbiAgICBcImRheWdvXCIsXG4gICAgXCJkZWdvXCIsXG4gICAgXCJkaWNrKlwiLFxuICAgIFwiZGlrZSpcIixcbiAgICBcImR1cGFcIixcbiAgICBcImR6aXdrYVwiLFxuICAgIFwiZWphY2t1bGF0ZVwiLFxuICAgIFwiRWtyZW0qXCIsXG4gICAgXCJFa3RvXCIsXG4gICAgXCJlbmN1bGVyXCIsXG4gICAgXCJmYWVuXCIsXG4gICAgXCJmYWcqXCIsXG4gICAgXCJmYW5jdWxvXCIsXG4gICAgXCJmYW5ueVwiLFxuICAgIFwiZmVjZXNcIixcbiAgICBcImZlZ1wiLFxuICAgIFwiRmVsY2hlclwiLFxuICAgIFwiZmlja2VuXCIsXG4gICAgXCJmaXR0KlwiLFxuICAgIFwiRmxpa2tlclwiLFxuICAgIFwiZm9yZXNraW5cIixcbiAgICBcIkZvdHplXCIsXG4gICAgXCJGdSgqXCIsXG4gICAgXCJmdWsqXCIsXG4gICAgXCJmdXRrcmV0em5cIixcbiAgICBcImdvb2tcIixcbiAgICBcImd1aWVuYVwiLFxuICAgIFwiaDByXCIsXG4gICAgXCJoNHgwclwiLFxuICAgIFwiaGVsbFwiLFxuICAgIFwiaGVsdmV0ZVwiLFxuICAgIFwiaG9lcipcIixcbiAgICBcImhvbmtleVwiLFxuICAgIFwiSHVldm9uXCIsXG4gICAgXCJodWlcIixcbiAgICBcImluanVuXCIsXG4gICAgXCJqaXp6XCIsXG4gICAgXCJrYW5rZXIqXCIsXG4gICAgXCJraWtlXCIsXG4gICAgXCJrbG9vdHpha1wiLFxuICAgIFwia3JhdXRcIixcbiAgICBcImtudWxsZVwiLFxuICAgIFwia3VrXCIsXG4gICAgXCJrdWtzdWdlclwiLFxuICAgIFwiS3VyYWNcIixcbiAgICBcImt1cndhXCIsXG4gICAgXCJrdXNpKlwiLFxuICAgIFwia3lycGEqXCIsXG4gICAgXCJsZXNib1wiLFxuICAgIFwibWFtaG9vblwiLFxuICAgIFwibWFzdHVyYmF0KlwiLFxuICAgIFwibWVyZCpcIixcbiAgICBcIm1pYnVuXCIsXG4gICAgXCJtb25rbGVpZ2hcIixcbiAgICBcIm1vdWxpZXdvcFwiLFxuICAgIFwibXVpZVwiLFxuICAgIFwibXVsa2t1XCIsXG4gICAgXCJtdXNjaGlcIixcbiAgICBcIm5hemlzXCIsXG4gICAgXCJuZXBlc2F1cmlvXCIsXG4gICAgXCJuaWdnZXIqXCIsXG4gICAgXCJvcm9zcHVcIixcbiAgICBcInBhc2thKlwiLFxuICAgIFwicGVyc2VcIixcbiAgICBcInBpY2thXCIsXG4gICAgXCJwaWVyZG9sKlwiLFxuICAgIFwicGlsbHUqXCIsXG4gICAgXCJwaW1tZWxcIixcbiAgICBcInBpc3MqXCIsXG4gICAgXCJwaXpkYVwiLFxuICAgIFwicG9vbnRzZWVcIixcbiAgICBcInBvb3BcIixcbiAgICBcInBvcm5cIixcbiAgICBcInAwcm5cIixcbiAgICBcInByMG5cIixcbiAgICBcInByZXRlZW5cIixcbiAgICBcInB1bGFcIixcbiAgICBcInB1bGVcIixcbiAgICBcInB1dGFcIixcbiAgICBcInB1dG9cIixcbiAgICBcInFhaGJlaFwiLFxuICAgIFwicXVlZWYqXCIsXG4gICAgXCJyYXV0ZW5iZXJnXCIsXG4gICAgXCJzY2hhZmZlclwiLFxuICAgIFwic2NoZWlzcypcIixcbiAgICBcInNjaGxhbXBlXCIsXG4gICAgXCJzY2htdWNrXCIsXG4gICAgXCJzY3Jld1wiLFxuICAgIFwic2ghdCpcIixcbiAgICBcInNoYXJtdXRhXCIsXG4gICAgXCJzaGFybXV0ZVwiLFxuICAgIFwic2hpcGFsXCIsXG4gICAgXCJzaGl6XCIsXG4gICAgXCJza3JpYnpcIixcbiAgICBcInNrdXJ3eXN5blwiLFxuICAgIFwic3BoZW5jdGVyXCIsXG4gICAgXCJzcGljXCIsXG4gICAgXCJzcGllcmRhbGFqXCIsXG4gICAgXCJzcGxvb2dlXCIsXG4gICAgXCJzdWthXCIsXG4gICAgXCJiMDBiKlwiLFxuICAgIFwidGVzdGljbGUqXCIsXG4gICAgXCJ0aXR0KlwiLFxuICAgIFwidHdhdFwiLFxuICAgIFwidml0dHVcIixcbiAgICBcIndhbmsqXCIsXG4gICAgXCJ3ZXRiYWNrKlwiLFxuICAgIFwid2ljaHNlclwiLFxuICAgIFwid29wKlwiLFxuICAgIFwieWVkXCIsXG4gICAgXCJ6YWJvdXJhaFwiLFxuXTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBJbXBvcnRzIHRoZSBtc2dwYWNrIGxpYnJhcnlcbiAqL1xuLy9jb25zdCBtc2dwYWNrID0gcmVxdWlyZShcIm1zZ3BhY2tcIik7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgUGxheWVycyB9IGZyb20gXCIuL1BsYXllcnMvUGxheWVyTWFuYWdlclwiO1xuaW1wb3J0IHsgYmFkV29yZHMgfSBmcm9tIFwiLi9iYWRXb3Jkc1wiO1xuaW1wb3J0IHsgT2JqZWN0TWFuYWdlciB9IGZyb20gXCIuL0J1aWxkaW5ncy9CdWlsZGluZ01hbmFnZXJcIjtcbmltcG9ydCB7IHByb2plY3RpbGVNYW5hZ2VyIH0gZnJvbSBcIi4vUHJvamVjdGlsZXMvUHJvamVjdGlsZU1hbmFnZXJcIjtcbi8qKlxuICogQSBjbGFzcyBmb3IgZW5jb2RpbmcgYW5kIGRlY29kaW5nIGRhdGEgdXNpbmcgTWVzc2FnZVBhY2tcbiAqL1xudmFyIE1zZ3BhY2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTXNncGFjaygpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5jb2RlcyBkYXRhIHVzaW5nIE1lc3NhZ2VQYWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueX0gZGF0YSBUaGUgZGF0YSB0byBlbmNvZGVcbiAgICAgKiBAcmV0dXJucyB7QnVmZmVyfSBUaGUgZW5jb2RlZCBkYXRhXG4gICAgICovXG4gICAgTXNncGFjay5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1zZ3BhY2suZW5jb2RlKGRhdGEpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVjb2RlcyBkYXRhIHVzaW5nIE1lc3NhZ2VQYWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBUaGUgZGF0YSB0byBkZWNvZGVcbiAgICAgKiBAcmV0dXJucyB7YW55fSBUaGUgZGVjb2RlZCBkYXRhXG4gICAgICovXG4gICAgTXNncGFjay5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1zZ3BhY2suZGVjb2RlKGRhdGEpO1xuICAgIH07XG4gICAgcmV0dXJuIE1zZ3BhY2s7XG59KCkpO1xuLyoqXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBXZWJTb2NrZXQgY29ubmVjdGlvbnMgYW5kIHNlbmRpbmcvcmVjZWl2aW5nIHBhY2tldHNcbiAqL1xudmFyIFdTID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhXUywgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFdTKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy53cyA9IG51bGw7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBwYWNrZXQgb3ZlciB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIHBhY2tldFxuICAgICAqIEBwYXJhbSB7Li4uYW55W119IGRhdGEgVGhlIGRhdGEgdG8gc2VuZFxuICAgICAqL1xuICAgIFdTLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGRhdGFbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLndzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbKl0gV2ViU29ja2V0IGlzIG5vdCBpbml0aWFsaXplZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndzLnNlbmQodGhpcy5lbmNvZGUoW3R5cGUsIGRhdGFdKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGluY29taW5nIHBhY2tldHMgZnJvbSB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55fSBkYXRhIFRoZSBpbmNvbWluZyBwYWNrZXQgZGF0YVxuICAgICAqL1xuICAgIFdTLnByb3RvdHlwZS5oYW5kbGVQYWNrZXRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICAgICAgICB2YXIgcGFyc2VkID0gdGhpcy5kZWNvZGUoZGF0YSk7XG4gICAgICAgIHZhciB0eXBlID0gcGFyc2VkWzBdO1xuICAgICAgICB2YXIgcGFja2V0RGF0YSA9IHBhcnNlZFsxXTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0eXBlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiQVwiKSB7XG4gICAgICAgICAgICAvLyBTRVQgSU5JVCBEQVRBO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiQlwiKSB7XG4gICAgICAgICAgICAvLyBESVNDT05ORUNUOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiRFwiKSB7XG4gICAgICAgICAgICAvLyBBREQgUExBWUVSOlxuICAgICAgICAgICAgUGxheWVycy5hZGRQbGF5ZXIocGFja2V0RGF0YVswXVswXSwgcGFja2V0RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJFXCIpIHtcbiAgICAgICAgICAgIC8vIFJFTU9WRSBQTEFZRVI6XG4gICAgICAgICAgICBQbGF5ZXJzLnJlbW92ZVBsYXllcihwYWNrZXREYXRhWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcImFcIikge1xuICAgICAgICAgICAgLy8gVVBEQVRFIFBMQVlFUlM6XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhY2tldERhdGEubGVuZ3RoOyBpICs9IDEzKSB7XG4gICAgICAgICAgICAgICAgUGxheWVycy51cGRhdGVQbGF5ZXJzKHBhY2tldERhdGFbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiSFwiKSB7XG4gICAgICAgICAgICAvLyBMT0FEIEdBTUUgT0JKRUNUOlxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWNrZXREYXRhLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBPYmplY3RNYW5hZ2VyLmFkZEJ1aWxkaW5nKHBhY2tldERhdGEsIGkpO1xuICAgICAgICAgICAgICAgIGkgKz0gODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIktcIikge1xuICAgICAgICAgICAgLy8gR0FUSEVSIEFOSU1BVElPTjpcbiAgICAgICAgICAgIGlmIChwYWNrZXREYXRhWzBdWzJdKVxuICAgICAgICAgICAgICAgIHZhciBib25rID0gbmV3IEF1ZGlvKFwiaHR0cHM6Ly9jZG4uZ2xpdGNoLmdsb2JhbC8xZDFkYWZhOS1iYTVhLTQ3ZTctYTRlNy1iY2JmMDg1MTU4M2QvYm9uay5tcDRcIik7XG4gICAgICAgICAgICBib25rLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIk9cIikge1xuICAgICAgICAgICAgLy8gVVBEQVRFIEhFQUxUSDpcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIlhcIikge1xuICAgICAgICAgICAgLy8gQUREIFBST0pFQ1RJTEU6XG4gICAgICAgICAgICBwcm9qZWN0aWxlTWFuYWdlci5hZGRQcm9qZWN0aWxlKHBhY2tldERhdGFbMF0sIHBhY2tldERhdGFbMV0sIHBhY2tldERhdGFbMl0sIHBhY2tldERhdGFbM10sIHBhY2tldERhdGFbNF0sIHBhY2tldERhdGFbNV0sIHBhY2tldERhdGFbNl0sIHBhY2tldERhdGFbN10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiWVwiKSB7XG4gICAgICAgICAgICAvLyBSRU1PVkUgUFJPSkVDVElMRTpcbiAgICAgICAgICAgIHByb2plY3RpbGVNYW5hZ2VyLnJlbW92ZVByb2plY3RpbGUocGFja2V0RGF0YVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCI2XCIpIHtcbiAgICAgICAgICAgIC8vIFJFQ0VJVkUgQ0hBVDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhY2tldERhdGFbMV0pO1xuICAgICAgICAgICAgaWYgKHBhY2tldERhdGFbMV0uaW5jbHVkZXMoXCJmZXJyaXNcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmQoXCI2XCIsIFwiZmVycmlzIGlzIGEgc2tpZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhY2tldERhdGFbMV0uaW5jbHVkZXMoXCJwYXNoa2FcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmQoXCI2XCIsIFwicGFzaGthIGlzIGEgc2tpZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFdTO1xufShNc2dwYWNrKSk7XG4vKipcbiAqIE1vbmtleSBwYXRjaGVzIHRoZSBXZWJTb2NrZXQgcHJvdG90eXBlIHRvIGFkZCBhIGN1c3RvbSBzZW5kIG1ldGhvZFxuICovXG5XZWJTb2NrZXQucHJvdG90eXBlLnNlbmQyID0gV2ViU29ja2V0LnByb3RvdHlwZS5zZW5kOyAvLyBzbyBpdCB3b24ndCBjYWxsIGl0c2VsZiBlYWNoIHRpbWVcbldlYlNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBwYXJhbSA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHBhcmFtW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubW9kKSB7XG4gICAgICAgIHRoaXMubW9kID0gbmV3IFdTKCk7XG4gICAgICAgIHRoaXMubW9kLndzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICBfdGhpcy5tb2QuaGFuZGxlUGFja2V0cyhtc2cuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBBTlRJIFBST0ZBTklUWSBGSUxURVI6XG4gICAgdmFyIGRlY29kZWRQYWNrZXQgPSB0aGlzLm1vZC5kZWNvZGUocGFja2V0KTtcbiAgICBpZiAoZGVjb2RlZFBhY2tldFswXSA9PT0gXCI2XCIgJiYgYmFkV29yZHMuc29tZShmdW5jdGlvbiAod29yZCkgeyByZXR1cm4gZGVjb2RlZFBhY2tldFsxXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHdvcmQudG9Mb3dlckNhc2UoKSk7IH0pKSB7XG4gICAgICAgIHZhciBtc2cgPSBkZWNvZGVkUGFja2V0WzFdO1xuICAgICAgICB2YXIgd29yZHMgPSBtc2cuc3BsaXQoJyAnKTtcbiAgICAgICAgdmFyIG5ld1dvcmRzID0gd29yZHMubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZWRXb3JkID0gd29yZDtcbiAgICAgICAgICAgIGJhZFdvcmRzLmZvckVhY2goZnVuY3Rpb24gKGJhZFdvcmQpIHtcbiAgICAgICAgICAgICAgICBpZiAod29yZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJhZFdvcmQudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRXb3JkID0gbW9kaWZpZWRXb3JkLnJlcGxhY2UobmV3IFJlZ0V4cChiYWRXb3JkLCAnZ2knKSwgYmFkV29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGJhZFdvcmQuc2xpY2UoMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1vZGlmaWVkV29yZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBuZXdNc2cgPSBuZXdXb3Jkcy5qb2luKCcgJyk7XG4gICAgICAgIHRoaXMuc2VuZDIodGhpcy5tb2QuZW5jb2RlKFtcIjZcIiwgW25ld01zZ11dKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNlbmQyKHBhY2tldCk7XG4gICAgfVxufTtcbi8qKlxuICogVGhlIEdhbWUgY2xhc3MsIHdoaWNoIGV4dGVuZHMgV1MgYW5kIGFkZHMgZ2FtZS1zcGVjaWZpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXG4gKi9cbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHYW1lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdhbWUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5lbmVtaWVzID0gW107XG4gICAgICAgIF90aGlzLnRlYW1tYXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgR2FtZSBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybnMge0dhbWV9IFRoZSBzaW5nbGV0b24gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBHYW1lLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIUdhbWUuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEdhbWUuaW5zdGFuY2UgPSBuZXcgR2FtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBHYW1lLmluc3RhbmNlO1xuICAgIH07XG4gICAgcmV0dXJuIEdhbWU7XG59KFdTKSk7XG5leHBvcnQgeyBHYW1lIH07XG52YXIgTW9kID0gR2FtZS5nZXRJbnN0YW5jZSgpO1xuYWxlcnQoXCJNb29Nb28gVFMgTG9hZGVkXCIpO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVOYW1lXCIpLmlubmVySFRNTCA9IFwiXFxuPGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmdsaXRjaC5nbG9iYWwvMWQxZGFmYTktYmE1YS00N2U3LWE0ZTctYmNiZjA4NTE1ODNkLyU1QnJlbW92YWwuYWklNURfZjViMDdiZmItZDI1MC00YThmLTg3MTQtMmI1ZjRlNWFmM2QyLWJhbm5lci5wbmc/dj0xNzIwMDkzMzM4MjAxXFxcIiBzdHlsZT1cXFwid2lkdGg6IDQwMHB4OyBoZWlnaHQ6IDI1MHB4XFxcIj5cXG5cIjtcbiAgICAvLyBHQU1FIE9WRVJMQVk6XG4gICAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXkuc3R5bGUgPSBcIlxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IDA7XFxubGVmdDogMDtcXG5iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAxODUsIDAuMTUpO1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwJTtcXG5wb2ludGVyLWV2ZW50czogbm9uZTtcXG5cIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIC8vIFZFUklGSUNBVElPTiBQUk9NUFQ6XG4gICAgdmFyIFZlcmlmaWNhdGlvblByb21wdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gVmVyaWZpY2F0aW9uUHJvbXB0KCkge1xuICAgICAgICB9XG4gICAgICAgIFZlcmlmaWNhdGlvblByb21wdC5wcm90b3R5cGUucHJlcGFyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuYmx1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLmJsdXIuc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCA0MCwgMC4zKTtcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcXG4gICAgICB6LWluZGV4OiA4ODg3O1xcbiAgICBcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ibHVyKTtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLm1haW5Ib2xkZXIuc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICB3aWR0aDogMzUlO1xcbiAgICAgIGhlaWdodDogMjAlO1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTg1LCAxODUsIDE4NSwgMC45NSk7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgICAgYm9yZGVyOiA2cHggc29saWQgbGlnaHRncmV5O1xcbiAgICAgIHotaW5kZXg6IDg4ODg7XFxuICAgIFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1haW5Ib2xkZXIpO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLnRpdGxlLmlubmVySFRNTCA9IFwiQXV0aGVudGljYXRpb24uXCI7XG4gICAgICAgICAgICB0aGlzLnRpdGxlLnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDM1JTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogODBweDtcXG4gICAgICBjb2xvcjogIzAwMDtcXG4gICAgICBmb250OiAzMnB4IEFyaWFsO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBcIjtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlci5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBUb2tlbiBIZXJlLi4uXCI7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjMpO1xcbiAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgYm90dG9tOiA1JTtcXG4gICAgICBsZWZ0OiAzJTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgXCI7XG4gICAgICAgICAgICB0aGlzLm1haW5Ib2xkZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2suc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogNSU7XFxuICAgICAgcmlnaHQ6IDMlO1xcbiAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ3LCAxMTcsIDE5MywgMC4yKTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udDogMjBweCBBcmlhbDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcIjtcbiAgICAgICAgICAgIHRoaXMuY2hlY2suaW5uZXJIVE1MID0gXCJWZXJpZnlcIjtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlci5hcHBlbmRDaGlsZCh0aGlzLmNoZWNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFZlcmlmaWNhdGlvblByb21wdDtcbiAgICB9KCkpO1xuICAgIHZhciB2ZXJpZnkgPSBuZXcgVmVyaWZpY2F0aW9uUHJvbXB0KCk7XG4gICAgLy92ZXJpZnkucHJlcGFyZSgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlQmFyQm9keVwiKS5zdHlsZS50cmFuc2l0aW9uID0gXCIwLjNzIGFsbFwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uQmFyXCIpLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==