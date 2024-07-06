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
        console.log(data);
        for (var i = 0; i < this.players.length; ++i) {
            var tmpPlayer = this.players[i];
            tmpPlayer.visible = false;
            console.log(tmpPlayer);
        }
        for (var i = 0; i < data.length; i += 13) {
            var tmpPlayer = (0,_UTILS_FindPlayerBySID__WEBPACK_IMPORTED_MODULE_0__.findPlayerBySid)(data[0]);
            console.log(tmpPlayer);
            if (tmpPlayer) {
                (0,_updatePlayer__WEBPACK_IMPORTED_MODULE_1__.updatePlayer)(tmpPlayer, data, i);
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
    console.log(_Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players, _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.players);
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
            _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.updatePlayers(packetData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0J1aWxkaW5ncy9CdWlsZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQnVpbGRpbmdzL0J1aWxkaW5nTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTWF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxheWVycy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllcnMvUGxheWVyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxheWVycy91cGRhdGVQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3RpbGVzL1Byb2plY3RpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Byb2plY3RpbGVzL1Byb2plY3RpbGVNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9VVElMUy9GaW5kUGxheWVyQnlTSUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VUSUxTL0dldERpc3RhbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9VVElMUy9JdGVtR3JvdXBzLnRzIiwid2VicGFjazovLy8uL3NyYy9VVElMUy9JdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVVRJTFMvUHJvamVjdGlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhZFdvcmRzLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9HYW1lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpbmRQbGF5ZXJCeVNpZCB9IGZyb20gXCIuLi9VVElMUy9GaW5kUGxheWVyQnlTSURcIjtcbi8qIEJ1aWxkaW5nIGNsYXNzICovXG52YXIgQnVpbGRpbmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnVpbGRpbmcoc2lkLCB4LCB5LCBkaXIsIHNjYWxlLCB0eXBlLCBkYXRhLCBvd25lciwgaXNGYWtlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2lkID0gc2lkO1xuICAgICAgICBkYXRhID0gZGF0YSB8fCB7fTsgLy8gc2FmZSBob2xkZXIgaW4gY2FzZSBpdCdzIG51bGwgb3IgdW5kZWZpbmVkXG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRpciA9IGRpcjtcbiAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmdyb3VwID0gZGF0YS5ncm91cDtcbiAgICAgICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgICAgICB0aGlzLmlzRmFrZSA9IGlzRmFrZTtcbiAgICAgICAgdGhpcy5pc0FsaXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLndpZ2dsZSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlzSXRlbSA9IGRhdGEuaWQgIT09IG51bGw7XG4gICAgICAgIHRoaXMub2JqZWN0VHlwZSA9IGRhdGEudHJhcCA/IFwidHJhcFwiIDogZGF0YS5kbWcgPyBcImRtZ1wiIDogZGF0YS50ZWxlcG9ydCA/IFwidGVsZXBvcnRlclwiIDogbnVsbDtcbiAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBkYXRhLmhlYWx0aDtcbiAgICAgICAgdGhpcy5idWlsZEhlYWx0aCA9IHRoaXMubWF4SGVhbHRoO1xuICAgICAgICB0aGlzLmlzVGVhbU9iamVjdCA9IGZ1bmN0aW9uICh0bXBPYmopIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHJldHVybiB0bXBPYmouc2lkID09PSAoKF9hID0gX3RoaXMub3duZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zaWQpIHx8IHRtcE9iai5pc1RlYW0oZmluZFBsYXllckJ5U2lkKHRtcE9iaikpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gQnVpbGRpbmc7XG59KCkpO1xuZXhwb3J0IHsgQnVpbGRpbmcgfTtcbiIsIi8qKlxuICogSW1wb3J0c1xuICovXG5pbXBvcnQgeyBCdWlsZGluZyB9IGZyb20gXCIuL0J1aWxkaW5nXCI7IC8vIEltcG9ydCBCdWlsZGluZyBjbGFzc1xuaW1wb3J0IHsgSXRlbXMgfSBmcm9tIFwiLi4vVVRJTFMvSXRlbXNcIjsgLy8gSW1wb3J0IEdhbWUgSXRlbXNcbi8qKlxuICogQnVpbGRpbmcgTWFuYWdlciBjbGFzc1xuICpcbiAqIFRoaXMgY2xhc3MgbWFuYWdlcyBhIGNvbGxlY3Rpb24gb2YgZ2FtZSBvYmplY3RzIGFuZCBwcm92aWRlcyBtZXRob2RzIHRvIGFkZCwgcmVtb3ZlLCBhbmQgY2xlYXIgdGhlbS5cbiAqXG4gKiBAbWVtYmVyT2YgbW9kdWxlOk9iamVjdE1hbmFnZXJcbiAqL1xudmFyIE9iamVjdE1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogUHJpdmF0ZSBjb25zdHJ1Y3RvciB0byBwcmV2ZW50IGluc3RhbnRpYXRpb25cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gT2JqZWN0TWFuYWdlcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9iamVjdCBvZiByZWxldmFudCBnYW1lIG9iamVjdHNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVsZXZhbnRCdWlsZGluZ3MgPSBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBPYmplY3RNYW5hZ2VyIGNsYXNzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0TWFuYWdlcn0gVGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgT2JqZWN0TWFuYWdlciBjbGFzc1xuICAgICAqIEBtZW1iZXJPZiBPYmplY3RNYW5hZ2VyXG4gICAgICogQGV4YW1wbGUgT2JqZWN0TWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgICovXG4gICAgT2JqZWN0TWFuYWdlci5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFPYmplY3RNYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBPYmplY3RNYW5hZ2VyLmluc3RhbmNlID0gbmV3IE9iamVjdE1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0TWFuYWdlci5pbnN0YW5jZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSBidWlsZGluZyBnYW1lIG9iamVjdCB0byB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnlbXX0gZGF0YSBUaGUgZGF0YSB0byBjcmVhdGUgdGhlIGJ1aWxkaW5nIGdhbWUgb2JqZWN0XG4gICAgICogQG1lbWJlck9mIE9iamVjdE1hbmFnZXJcbiAgICAgKiBAZXhhbXBsZSBPYmplY3RNYW5hZ2VyLmdldEluc3RhbmNlKCkuYWRkQnVpbGRpbmcoWzEyMzQsIC4uLl0pO1xuICAgICAqL1xuICAgIE9iamVjdE1hbmFnZXIuYWRkQnVpbGRpbmcgPSBmdW5jdGlvbiAoZGF0YSwgaW5kZXgpIHtcbiAgICAgICAgZGF0YSA9IGRhdGFbMF07XG4gICAgICAgIHZhciB0bXBPYmogPSBuZXcgQnVpbGRpbmcoZGF0YVswICsgaW5kZXhdLCBkYXRhWzEgKyBpbmRleF0sIGRhdGFbMiArIGluZGV4XSwgZGF0YVszICsgaW5kZXhdLCBkYXRhWzQgKyBpbmRleF0sIGRhdGFbNSArIGluZGV4XSwgSXRlbXNbZGF0YVs2ICsgaW5kZXhdXSwgZGF0YVs3ICsgaW5kZXhdID49IDBcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHNpZDogZGF0YVs3ICsgaW5kZXhdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBudWxsLCBmYWxzZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRtcE9iaik7XG4gICAgICAgIE9iamVjdE1hbmFnZXIuQnVpbGRpbmdzLnB1c2godG1wT2JqKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBnYW1lIG9iamVjdCBmcm9tIHRoZSBjb2xsZWN0aW9uIGJ5IFNJRFxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpZCBUaGUgU0lEIG9mIHRoZSBnYW1lIG9iamVjdCB0byByZW1vdmVcbiAgICAgKiBAbWVtYmVyT2YgT2JqZWN0TWFuYWdlclxuICAgICAqIEBleGFtcGxlIE9iamVjdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZW1vdmVHYW1lT2JqZWN0KDEyMyk7XG4gICAgICovXG4gICAgT2JqZWN0TWFuYWdlci5wcm90b3R5cGUucmVtb3ZlQnVpbGRpbmcgPSBmdW5jdGlvbiAoc2lkKSB7IH07XG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBnYW1lIG9iamVjdHMgZnJvbSB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIE9iamVjdE1hbmFnZXJcbiAgICAgKiBAZXhhbXBsZSBPYmplY3RNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVtb3ZlQWxsT2JqZWN0cygxMCk7XG4gICAgICovXG4gICAgT2JqZWN0TWFuYWdlci5wcm90b3R5cGUucmVtb3ZlQWxsQnVpbGRpbmdzID0gZnVuY3Rpb24gKHNpZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBPYmplY3RNYW5hZ2VyLkJ1aWxkaW5ncy5mb3JFYWNoKGZ1bmN0aW9uICh0bXBPYmopIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmICgoKF9hID0gdG1wT2JqID09PSBudWxsIHx8IHRtcE9iaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG1wT2JqLm93bmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2lkKSA9PT0gc2lkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlQnVpbGRpbmcodG1wT2JqLnNpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgZ2FtZSBvYmplY3RzXG4gICAgICovXG4gICAgT2JqZWN0TWFuYWdlci5CdWlsZGluZ3MgPSBbXTtcbiAgICByZXR1cm4gT2JqZWN0TWFuYWdlcjtcbn0oKSk7XG5leHBvcnQgeyBPYmplY3RNYW5hZ2VyIH07XG4iLCIvL3NlbGYgZXhwbGFuYXRvcnkgKGhvcGVmdWxseSlcbmV4cG9ydCB2YXIgc2luID0gTWF0aC5zaW4sIGNvcyA9IE1hdGguY29zLCBtaW4gPSBNYXRoLm1pbiwgbWF4ID0gTWF0aC5tYXgsIHJhbmRvbSA9IE1hdGgucmFuZG9tLCBmbG9vciA9IE1hdGguZmxvb3IsIGNlaWwgPSBNYXRoLmNlaWwsIHJvdW5kID0gTWF0aC5yb3VuZCwgUEkgPSBNYXRoLlBJLCBzcXJ0ID0gTWF0aC5zcXJ0LCBhYnMgPSBNYXRoLmFicywgcG93ID0gTWF0aC5wb3csIGxvZyA9IE1hdGgubG9nLCBMTjIgPSBNYXRoLkxOMiwgYXRhbjIgPSBNYXRoLmF0YW4yLCBoeXBvdCA9IE1hdGguaHlwb3Q7XG4iLCIvKiBQbGF5ZXIgY2xhc3MgKi9cbnZhciBQbGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGxheWVyKHNpZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNpZCA9IHNpZDtcbiAgICAgICAgdGhpcy5pc1RlYW0gPSBmdW5jdGlvbiAodG1wT2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRtcE9iai5zaWQgPT09IF90aGlzLnNpZCB8fCAodG1wT2JqLnRlYW0gJiYgdG1wT2JqLnRlYW0gPT09IF90aGlzLnRlYW0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSU5JVDpcbiAgICAgICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKGlkLCBuYW1lLCB4LCB5LCBkaXIsIGhlYWx0aCwgbWF4SGVhbHRoLCBzY2FsZSwgc2tpbkNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXI7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgICAgIHRoaXMubWF4SGVhbHRoID0gbWF4SGVhbHRoO1xuICAgICAgICAgICAgdGhpcy5sYXN0SGVhbHRoID0gdGhpcy5oZWFsdGg7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgICAgIHRoaXMueDIgPSB4O1xuICAgICAgICAgICAgdGhpcy55MiA9IHk7XG4gICAgICAgICAgICB0aGlzLngzID0gMDtcbiAgICAgICAgICAgIHRoaXMueTMgPSAwO1xuICAgICAgICAgICAgdGhpcy5za2luSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXN0U2tpbkluZGV4ID0gdGhpcy5za2luSW5kZXg7XG4gICAgICAgICAgICB0aGlzLnRhaWxJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLmxhc3RUYWlsSW5kZXggPSB0aGlzLnRhaWxJbmRleDtcbiAgICAgICAgICAgIHRoaXMud2VhcG9uSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy53ZWFwb25zID0gWzAsIDBdO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gUGxheWVyO1xufSgpKTtcbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiLyoqXG4gKiBJbXBvcnRzXG4gKi9cbmltcG9ydCB7IGZpbmRQbGF5ZXJCeVNpZCB9IGZyb20gXCIuLi9VVElMUy9GaW5kUGxheWVyQnlTSURcIjsgLy8gSW1wb3J0IGZ1bmN0aW9uIHRvIGZpbmQgYSBwbGF5ZXIgYnkgdGhlaXIgU0lEXG5pbXBvcnQgeyB1cGRhdGVQbGF5ZXIgfSBmcm9tIFwiLi91cGRhdGVQbGF5ZXJcIjsgLy8gSW1wb3J0IGZ1bmN0aW9uIHRvIHVwZGF0ZSBhIHBsYXllcidzIGluZm9ybWF0aW9uXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjsgLy8gSW1wb3J0IHBsYXllciBjbGFzc1xuLyoqXG4gKiBQbGF5ZXIgTWFuYWdlciBjbGFzc1xuICpcbiAqIFRoaXMgY2xhc3MgbWFuYWdlcyBhIGNvbGxlY3Rpb24gb2YgcGxheWVycyBhbmQgcHJvdmlkZXMgbWV0aG9kcyB0byBhZGQsIHJlbW92ZSwgYW5kIHVwZGF0ZSBwbGF5ZXJzLlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6UGxheWVyc1xuICovXG52YXIgUGxheWVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQbGF5ZXJzKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFBsYXllcnMgY2xhc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbGF5ZXJzfSBUaGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBQbGF5ZXJzIGNsYXNzXG4gICAgICogQG1lbWJlck9mIFBsYXllcnNcbiAgICAgKiBAZXhhbXBsZSBjb25zdCBwbGF5ZXJzID0gUGxheWVycy5nZXRJbnN0YW5jZSgpO1xuICAgICAqL1xuICAgIFBsYXllcnMuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghUGxheWVycy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgUGxheWVycy5pbnN0YW5jZSA9IG5ldyBQbGF5ZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBsYXllcnMuaW5zdGFuY2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgcGxheWVyIHRvIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gU0lEIFRoZSBTSUQgZm9yIHRoZSBwbGF5ZXJcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBkYXRhIFRoZSBwbGF5ZXIncyBkYXRhXG4gICAgICogQG1lbWJlck9mIFBsYXllcnNcbiAgICAgKiBAZXhhbXBsZSBwbGF5ZXJzLmFkZFBsYXllcigxLCB7IG5hbWU6IFwiT25pb25cIiwgc2tpbjogXCJfX3Byb3RvX19cIn0pO1xuICAgICAqL1xuICAgIFBsYXllcnMuYWRkUGxheWVyID0gZnVuY3Rpb24gKFNJRCwgZGF0YSkge1xuICAgICAgICAvKiBEYXRhIGZvcm1hdDpcbiAgICBcbiAgICAgICAgICAwOiB7aWQsIHNpZCwgbmFtZSwgeCwgeSwgc29tZXRoaW5nLCBoZWFsdGgsIHNvbWV0aGluZywgc2NhbGU/LCBzb21ldGhpbmd9XG4gICAgICAgICAgMTogdHJ1ZS9mYWxzZSBmb3IgeWVzL25vIGlzIG1lXG4gICAgICAgICAgKi9cbiAgICAgICAgaWYgKGRhdGFbMV0pIHtcbiAgICAgICAgICAgIC8vIE1ZIFBMQVlFUjpcbiAgICAgICAgICAgIFBsYXllcnMubXlQbGF5ZXIgPSBuZXcgUGxheWVyKFNJRCk7XG4gICAgICAgICAgICBQbGF5ZXJzLnBsYXllcnMucHVzaChQbGF5ZXJzLm15UGxheWVyKTtcbiAgICAgICAgICAgIC8vIElOSVQ6XG4gICAgICAgICAgICBQbGF5ZXJzLm15UGxheWVyLmluaXQoZGF0YVswXVswXSwgZGF0YVswXVsyXSwgZGF0YVswXVszXSwgZGF0YVswXVs0XSwgZGF0YVswXVs1XSwgZGF0YVswXVs2XSwgZGF0YVswXVs3XSwgZGF0YVswXVs4XSwgZGF0YVswXVs5XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgdG1wT2JqID0gbmV3IFBsYXllcihTSUQpO1xuICAgICAgICAgICAgUGxheWVycy5wbGF5ZXJzLnB1c2godG1wT2JqKTtcbiAgICAgICAgICAgIHRtcE9iai5pbml0KGRhdGFbMF1bMF0sIGRhdGFbMF1bMl0sIGRhdGFbMF1bM10sIGRhdGFbMF1bNF0sIGRhdGFbMF1bNV0sIGRhdGFbMF1bNl0sIGRhdGFbMF1bN10sIGRhdGFbMF1bOF0sIGRhdGFbMF1bOV0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgcGxheWVyIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWQgVGhlIFNJRCBmb3IgdGhlIHBsYXllciB0byByZW1vdmVcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIHBsYXllcnMucmVtb3ZlUGxheWVyKDEwKTtcbiAgICAgKi9cbiAgICBQbGF5ZXJzLnJlbW92ZVBsYXllciA9IGZ1bmN0aW9uIChzaWQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gUGxheWVycy5wbGF5ZXJzLmluZGV4T2YoUGxheWVycy5wbGF5ZXJzLmZpbmQoZnVuY3Rpb24gKHBsYXllcikgeyByZXR1cm4gcGxheWVyLnNpZCA9PT0gc2lkOyB9KSwgMCk7XG4gICAgICAgIGRlbGV0ZSBQbGF5ZXJzLnBsYXllcnNbaW5kZXhdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGxheWVycyBpbiB0aGUgY29sbGVjdGlvbiBiYXNlZCBvbiBuZXcgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnlbXX0gZGF0YSBUaGUgbmV3IGRhdGEgdG8gdXBkYXRlIHRoZSBwbGF5ZXJzIHdpdGhcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIHBsYXllcnMudXBkYXRlUGxheWVycyh0bXBQbGF5ZXIpO1xuICAgICAqL1xuICAgIFBsYXllcnMudXBkYXRlUGxheWVycyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIFVucmVuZGVyIGFsbCBwbGF5ZXJzIGFuZCByZXJlbmRlciBwbGF5ZXJzIGluIHJhbmdlXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGxheWVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIHRtcFBsYXllciA9IHRoaXMucGxheWVyc1tpXTtcbiAgICAgICAgICAgIHRtcFBsYXllci52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0bXBQbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMTMpIHtcbiAgICAgICAgICAgIHZhciB0bXBQbGF5ZXIgPSBmaW5kUGxheWVyQnlTaWQoZGF0YVswXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0bXBQbGF5ZXIpO1xuICAgICAgICAgICAgaWYgKHRtcFBsYXllcikge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVBsYXllcih0bXBQbGF5ZXIsIGRhdGEsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBwbGF5ZXJzXG4gICAgICovXG4gICAgUGxheWVycy5wbGF5ZXJzID0gW107XG4gICAgLyoqXG4gICAgICogTXkgcGxheWVyXG4gICAgICovXG4gICAgUGxheWVycy5teVBsYXllciA9IHt9O1xuICAgIHJldHVybiBQbGF5ZXJzO1xufSgpKTtcbmV4cG9ydCB7IFBsYXllcnMgfTtcbiIsImV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQbGF5ZXIocGxheWVyLCBkYXRhLCBpbmRleCkge1xuICAgIHBsYXllci50MSA9IHBsYXllci50MiA9PT0gdm9pZCAwID8gRGF0ZS5ub3coKSA6IHBsYXllci50MjtcbiAgICBwbGF5ZXIudDIgPSBEYXRlLm5vdygpO1xuICAgIHBsYXllci5sYXNQb3MgPSB7XG4gICAgICAgIHg6IHBsYXllci54MixcbiAgICAgICAgeTogcGxheWVyLnkyLFxuICAgIH07XG4gICAgcGxheWVyLngyID0gZGF0YVtpbmRleCArIDFdO1xuICAgIHBsYXllci55MiA9IGRhdGFbaW5kZXggKyAyXTtcbiAgICBwbGF5ZXIuZDEgPSBwbGF5ZXIuZDIgPT09IHZvaWQgMCA/IGRhdGFbaW5kZXggKyAzXSA6IHBsYXllci5kMjtcbiAgICBwbGF5ZXIuZGVsdGEgPSAwO1xuICAgIHBsYXllci53ZWFwb25JbmRleCA9IGRhdGFbaW5kZXggKyA1XTtcbiAgICBwbGF5ZXIud2VhcG9uSW5kZXggPCA5ICYmIChwbGF5ZXIud2VhcG9uc1swXSA9IHBsYXllci53ZWFwb25JbmRleCk7XG4gICAgcGxheWVyLndlYXBvbkluZGV4ID49IDkgJiYgKHBsYXllci53ZWFwb25zWzFdID0gcGxheWVyLndlYXBvbkluZGV4KTtcbiAgICBwbGF5ZXIud2VhcG9uVmFyaWFudCA9IGRhdGFbaW5kZXggKyA2XTtcbiAgICBwbGF5ZXIudGVhbSA9IGRhdGFbaW5kZXggKyA3XTtcbiAgICBwbGF5ZXIubGFzdFNraW5JbmRleCA9IHBsYXllci5za2luSW5kZXg7XG4gICAgcGxheWVyLnNraW5JbmRleCA9IGRhdGFbaW5kZXggKyA5XTtcbiAgICBwbGF5ZXIubGFzdFRhaWxJbmRleCA9IHBsYXllci50YWlsSW5kZXg7XG4gICAgcGxheWVyLnRhaWxJbmRleCA9IGRhdGFbaW5kZXggKyAxMF07XG4gICAgcGxheWVyLnZpc2libGUgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKHBsYXllci53ZWFwb25JbmRleCk7XG59XG4iLCJpbXBvcnQgeyBQcm9qZWN0aWxlcyB9IGZyb20gXCIuLi9VVElMUy9Qcm9qZWN0aWxlc1wiO1xuaW1wb3J0IHsgcHJvamVjdGlsZU1hbmFnZXIgfSBmcm9tIFwiLi9Qcm9qZWN0aWxlTWFuYWdlclwiO1xudmFyIFByb2plY3RpbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHJvamVjdGlsZSh4LCB5LCBkaXIsIHJhbmdlLCBzcGVlZCwgaW5kZXgsIG93bmVyLCBpZ25vcmVPYmplY3RzLCBsYXllcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmRhdGEgPSBQcm9qZWN0aWxlc1tpbmRleF07XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuZGlyID0gZGlyO1xuICAgICAgICB0aGlzLnJhbmdlID0gcmFuZ2U7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgICAgIHRoaXMuaWdub3JlT2JqZWN0cyA9IGlnbm9yZU9iamVjdHM7XG4gICAgICAgIHRoaXMuc2lkID0gcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZUNvdW50O1xuICAgICAgICB0aGlzLmxheWVyID0gbGF5ZXIgfHwgdGhpcy5kYXRhLmxheWVyO1xuICAgICAgICB0aGlzLmRpc3RhbmNlUGVyVGljayA9IFByb2plY3RpbGVzW2luZGV4XS5kaXN0UGVyVGljaztcbiAgICAgICAgdGhpcy5yZXR1cm5OZXh0VGlja1Bvc2l0aW9uID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogeCArIF90aGlzLmRpc3RhbmNlUGVyVGljayAqIE1hdGguc2luKF90aGlzLmRpciksXG4gICAgICAgICAgICAgICAgeTogeSArIF90aGlzLmRpc3RhbmNlUGVyVGljayAqIE1hdGguY29zKF90aGlzLmRpciksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gUHJvamVjdGlsZTtcbn0oKSk7XG5leHBvcnQgeyBQcm9qZWN0aWxlIH07XG4iLCJpbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gXCIuLi9VVElMUy9HZXREaXN0YW5jZVwiO1xuaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gXCIuL1Byb2plY3RpbGVcIjtcbnZhciBwcm9qZWN0aWxlTWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBwcm9qZWN0aWxlTWFuYWdlcigpIHtcbiAgICB9XG4gICAgcHJvamVjdGlsZU1hbmFnZXIuYWRkUHJvamVjdGlsZSA9IGZ1bmN0aW9uICh4LCB5LCBkaXIsIHJhbmdlLCBzcGVlZCwgaW5kZXgsIGxheWVyLCBzaWQpIHtcbiAgICAgICAgdmFyIHByb2plY3RpbGUgPSBuZXcgUHJvamVjdGlsZSh4LCB5LCBkaXIsIHJhbmdlLCBzcGVlZCwgaW5kZXgsIG51bGwsIG51bGwsIGxheWVyKTtcbiAgICAgICAgcHJvamVjdGlsZS5zaWQgPSBzaWQ7XG4gICAgICAgIGNvbnNvbGUud2Fybihwcm9qZWN0aWxlKTtcbiAgICAgICAgcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZXMucHVzaChwcm9qZWN0aWxlKTtcbiAgICAgICAgcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZUNvdW50Kys7XG4gICAgfTtcbiAgICBwcm9qZWN0aWxlTWFuYWdlci5yZW1vdmVQcm9qZWN0aWxlID0gZnVuY3Rpb24gKFNJRCkge1xuICAgICAgICB2YXIgaXRlbSA9IHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVzLmluZGV4T2YocHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZXMuZmluZChmdW5jdGlvbiAocHJvaikgeyByZXR1cm4gcHJvai5zaWQgPT09IFNJRDsgfSksIDApO1xuICAgICAgICBjb25zb2xlLndhcm4ocHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZXNbaXRlbV0sIFNJRCk7XG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0aWxlTWFuYWdlci5wcm9qZWN0aWxlc1tpdGVtXTtcbiAgICAgICAgcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZUNvdW50LS07XG4gICAgfTtcbiAgICAvL211c3QgYmUgY2FsbGVkIGV2ZXJ5IHRpY2tcbiAgICBwcm9qZWN0aWxlTWFuYWdlci5yZXRyaWV2ZURhbmdlcm91c1Byb2plY3RpbGVzID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgICB2YXIgcHJvamVjdGlsZXMgPSBbXTtcbiAgICAgICAgLypcbiAgICAgICAgICAgIG9rIHNvIHdlIGFyZSBnb25uYSBmaWx0ZXIgdGhpcyBzaGl0XG4gICAgICAgICAgICBieSBkaXN0YW5jZSB0cmF2ZWxhYmxlIHBlciB0aWNrXG4gICAgICAgICAgICArIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHByb2plY3RpbGVcbiAgICBcbiAgICAgICAgICAgIHNvIGlmIGl0cyBnb2luZyB0byBoaXQgdGhlIHBsYXllclxuICAgICAgICAgICAgd2UgY2FuIHJldHVybiBpdCBpbiBhbiBhcnJheVxuICAgICAgICAgICAgZm9yIGRhbWFnZSBwb3RlbnRpYWwgbGF0ZXJcbiAgICAgICAgICAgIGFuZCBhbHNvIGNvb2wgdmlzdWFscyB5a1xuICAgICAgICAgICAgKi9cbiAgICAgICAgLy90aGUgY29kZSBiZWxvdyBpcyB2ZXJ5IGJldGEsIGFuZCBpcyBqdXN0IGEgcGxhY2Vob2xkZXIgdG8gbWFrZSBpdCBsb29rIGxpa2UgaSBkaWQgd29yayB0b2RheVxuICAgICAgICAvL2luIHRoZSBmdXR1cmUsIG1hcCBvdXQgYWxsIHRoZSBwcm9qZWN0aWxlcyBzcGVlZCBhbmQgYXNzaWduIGl0IHdpdGggdGhlIHByb2plY3RpbGUgc3BlZWRzL3RpY2tcbiAgICAgICAgLy9Qcm9qZWN0aWxlLnByb2plY3RpbGVzLm1hcCgocHJvamVjdGlsZSkgPT4gcHJvamVjdGlsZS5kaXN0UGVyVGljayAvKiAoMWUzIC8gOSkqLyk7XG4gICAgICAgIHByb2plY3RpbGVNYW5hZ2VyLnByb2plY3RpbGVzLmZvckVhY2goZnVuY3Rpb24gKHByb2plY3RpbGUpIHtcbiAgICAgICAgICAgIGlmIChnZXREaXN0YW5jZShwcm9qZWN0aWxlLnJldHVybk5leHRUaWNrUG9zaXRpb24ocHJvamVjdGlsZS54LCBwcm9qZWN0aWxlLnkpLCBwbGF5ZXIsIDAsIDIpIDw9XG4gICAgICAgICAgICAgICAgcGxheWVyLnNjYWxlKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdGlsZXMucHVzaChwcm9qZWN0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0aWxlcy5zb3J0KGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RGlzdGFuY2UocGxheWVyLCB7IHg6IHgsIHk6IHkgfSwgMiwgMCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcHJvamVjdGlsZU1hbmFnZXIucHJvamVjdGlsZUNvdW50ID0gMDtcbiAgICBwcm9qZWN0aWxlTWFuYWdlci5wcm9qZWN0aWxlcyA9IFtdO1xuICAgIHJldHVybiBwcm9qZWN0aWxlTWFuYWdlcjtcbn0oKSk7XG5leHBvcnQgeyBwcm9qZWN0aWxlTWFuYWdlciB9O1xuIiwiLyoqXG4gKiBJbXBvcnRzIHRoZSBQbGF5ZXJzIGNsYXNzXG4gKi9cbmltcG9ydCB7IFBsYXllcnMgfSBmcm9tIFwiLi4vUGxheWVycy9QbGF5ZXJNYW5hZ2VyXCI7XG4vKipcbiAqIEZpbmRzIGEgcGxheWVyIGJ5IHRoZWlyIFNJRFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaWQgVGhlIFNJRCBvZiB0aGUgcGxheWVyIHRvIGZpbmRcbiAqIEByZXR1cm5zIHthbnl9IFRoZSBwbGF5ZXIgd2l0aCB0aGUgbWF0Y2hpbmcgU0lELCBvciB1bmRlZmluZWQgaWYgbm90IGZvdW5kXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkZpbmRQbGF5ZXJCeVNJRFxuICogQGV4YW1wbGUgZmluZFBsYXllckJ5U2lkKDEyMyk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGxheWVyQnlTaWQoc2lkKSB7XG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgZmluZCBtZXRob2QgdG8gc2VhcmNoIHRoZSBwbGF5ZXJzIGFycmF5IGZvciBhIHBsYXllciB3aXRoIGEgbWF0Y2hpbmcgU0lEXG4gICAgICovXG4gICAgY29uc29sZS5sb2coUGxheWVycywgUGxheWVycy5wbGF5ZXJzKTtcbiAgICByZXR1cm4gUGxheWVycy5wbGF5ZXJzLmZpbmQoZnVuY3Rpb24gKHBsYXllcikgeyByZXR1cm4gcGxheWVyLnNpZCA9PT0gc2lkOyB9KTtcbn1cbiIsIi8qKlxuICogSW1wb3J0cyB0aGUgaHlwb3QgZnVuY3Rpb24gZnJvbSB0aGUgTWF0aCBtb2R1bGVcbiAqL1xuaW1wb3J0IHsgaHlwb3QgfSBmcm9tIFwiLi4vTWF0aFwiO1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBvYmplY3RzXG4gKlxuICogQHBhcmFtIHthbnl9IG9iajEgVGhlIGZpcnN0IG9iamVjdFxuICogQHBhcmFtIHthbnl9IG9iajIgVGhlIHNlY29uZCBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBvYmoxdHlwZSBUaGUgY29vcmRpbmF0ZSB0eXBlIG9mIG9iajEgKG9wdGlvbmFsKVxuICogQHBhcmFtIHtudW1iZXJ9IG9iajJ0eXBlIFRoZSBjb29yZGluYXRlIHR5cGUgb2Ygb2JqMiAob3B0aW9uYWwpXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgZGlzdGFuY2UgYmV0d2VlbiBvYmoxIGFuZCBvYmoyXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkdldERpc3RhbmNlXG4gKiBAZXhhbXBsZSBnZXREaXN0YW5jZShwbGF5ZXIsIGVuZW15LCAyLCAyKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3RhbmNlKG9iajEsIG9iajIsIG9iajF0eXBlLCBvYmoydHlwZSkge1xuICAgIC8qKlxuICAgICAqIFVzZXMgdGhlIGh5cG90IGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgZGlzdGFuY2VcbiAgICAgKiBoeXBvdChhLCBiKSByZXR1cm5zIHRoZSBzcXVhcmUgcm9vdCBvZiBhXjIgKyBiXjJcbiAgICAgKlxuICAgICAqIFRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIGFyZSBkeW5hbWljYWxseSBhY2Nlc3NlZCB1c2luZyBicmFja2V0IG5vdGF0aW9uXG4gICAgICogVGhlIHR5cGUgcGFyYW1ldGVycyBhcmUgdXNlZCB0byBhcHBlbmQgYSBzdWZmaXggdG8gdGhlIHByb3BlcnR5IG5hbWVzIChlLmcuIFwieDFcIiBvciBcInkyXCIpXG4gICAgICovXG4gICAgcmV0dXJuIGh5cG90KG9iajFbXCJ4XCIuY29uY2F0KG9iajF0eXBlIHx8IFwiXCIpXSAtIG9iajJbXCJ4XCIuY29uY2F0KG9iajJ0eXBlIHx8IFwiXCIpXSwgb2JqMVtcInlcIi5jb25jYXQob2JqMXR5cGUgfHwgXCJcIildIC0gb2JqMltcInlcIi5jb25jYXQob2JqMnR5cGUgfHwgXCJcIildKTtcbn1cbiIsImV4cG9ydCB2YXIgaXRlbUdyb3VwcyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiBcImZvb2RcIixcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIndhbGxzXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDMwLFxuICAgICAgICBsYXllcjogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6IFwic3Bpa2VzXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDE1LFxuICAgICAgICBsYXllcjogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6IFwibWlsbFwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiA3LFxuICAgICAgICBzYW5kYm94TGltaXQ6IDI5OSxcbiAgICAgICAgbGF5ZXI6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBuYW1lOiBcIm1pbmVcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMSxcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiBcInRyYXBcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogNixcbiAgICAgICAgbGF5ZXI6IC0xLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNixcbiAgICAgICAgbmFtZTogXCJib29zdGVyXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDEyLFxuICAgICAgICBzYW5kYm94TGltaXQ6IDI5OSxcbiAgICAgICAgbGF5ZXI6IC0xLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNyxcbiAgICAgICAgbmFtZTogXCJ0dXJyZXRcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMixcbiAgICAgICAgbGF5ZXI6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA4LFxuICAgICAgICBuYW1lOiBcIndhdGNodG93ZXJcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMTIsXG4gICAgICAgIGxheWVyOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogOSxcbiAgICAgICAgbmFtZTogXCJidWZmXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDQsXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEwLFxuICAgICAgICBuYW1lOiBcInNwYXduXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDEsXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDExLFxuICAgICAgICBuYW1lOiBcInNhcGxpbmdcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMixcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMixcbiAgICAgICAgbmFtZTogXCJibG9ja2VyXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDMsXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEzLFxuICAgICAgICBuYW1lOiBcInRlbGVwb3J0ZXJcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMixcbiAgICAgICAgc2FuZGJveExpbWl0OiAyOTksXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuXTtcbiIsImltcG9ydCB7IGl0ZW1Hcm91cHMgfSBmcm9tIFwiLi9JdGVtR3JvdXBzXCI7XG5leHBvcnQgdmFyIEl0ZW1zID0gW1xuICAgIHtcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMF0sXG4gICAgICAgIG5hbWU6IFwiYXBwbGVcIixcbiAgICAgICAgZGVzYzogXCJyZXN0b3JlcyAyMCBoZWFsdGggd2hlbiBjb25zdW1lZFwiLFxuICAgICAgICByZXE6IFtcImZvb2RcIiwgMTBdLFxuICAgICAgICBjb25zdW1lOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuY2hhbmdlSGVhbHRoKDIwLCB0KTtcbiAgICAgICAgfSxcbiAgICAgICAgaGVhbGluZzogMjAsXG4gICAgICAgIHNjYWxlOiAyMixcbiAgICAgICAgaG9sZE9mZnNldDogMTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogMyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMF0sXG4gICAgICAgIG5hbWU6IFwiY29va2llXCIsXG4gICAgICAgIGRlc2M6IFwicmVzdG9yZXMgNDAgaGVhbHRoIHdoZW4gY29uc3VtZWRcIixcbiAgICAgICAgcmVxOiBbXCJmb29kXCIsIDE1XSxcbiAgICAgICAgY29uc3VtZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LmNoYW5nZUhlYWx0aCg0MCwgdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhlYWxpbmc6IDQwLFxuICAgICAgICBzY2FsZTogMjcsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDE1LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDcsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzBdLFxuICAgICAgICBuYW1lOiBcImNoZWVzZVwiLFxuICAgICAgICBkZXNjOiBcInJlc3RvcmVzIDMwIGhlYWx0aCBhbmQgYW5vdGhlciA1MCBvdmVyIDUgc2Vjb25kc1wiLFxuICAgICAgICByZXE6IFtcImZvb2RcIiwgMjVdLFxuICAgICAgICBjb25zdW1lOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuICgoISF0LmNoYW5nZUhlYWx0aCgzMCwgdCkgfHwgdC5oZWFsdGggPCAxMDApICYmXG4gICAgICAgICAgICAgICAgKCh0LmRtZ092ZXJUaW1lLmRtZyA9IC0xMCksXG4gICAgICAgICAgICAgICAgICAgICh0LmRtZ092ZXJUaW1lLmRvZXIgPSB0KSxcbiAgICAgICAgICAgICAgICAgICAgKHQuZG1nT3ZlclRpbWUudGltZSA9IDUpLFxuICAgICAgICAgICAgICAgICAgICAhMCkpO1xuICAgICAgICB9LFxuICAgICAgICBoZWFsaW5nOiAzMCxcbiAgICAgICAgc2NhbGU6IDI3LFxuICAgICAgICBob2xkT2Zmc2V0OiAxNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMV0sXG4gICAgICAgIG5hbWU6IFwid29vZCB3YWxsXCIsXG4gICAgICAgIGRlc2M6IFwicHJvdmlkZXMgcHJvdGVjdGlvbiBmb3IgeW91ciB2aWxsYWdlXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAxMF0sXG4gICAgICAgIHByb2pEbWc6ICEwLFxuICAgICAgICBoZWFsdGg6IDM4MCxcbiAgICAgICAgc2NhbGU6IDUwLFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDMsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzFdLFxuICAgICAgICBuYW1lOiBcInN0b25lIHdhbGxcIixcbiAgICAgICAgZGVzYzogXCJwcm92aWRlcyBpbXByb3ZlZCBwcm90ZWN0aW9uIGZvciB5b3VyIHZpbGxhZ2VcIixcbiAgICAgICAgcmVxOiBbXCJzdG9uZVwiLCAyNV0sXG4gICAgICAgIGhlYWx0aDogOTAwLFxuICAgICAgICBzY2FsZTogNTAsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgcHJlOiAxLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxXSxcbiAgICAgICAgbmFtZTogXCJjYXN0bGUgd2FsbFwiLFxuICAgICAgICBkZXNjOiBcInByb3ZpZGVzIHBvd2VyZnVsIHByb3RlY3Rpb24gZm9yIHlvdXIgdmlsbGFnZVwiLFxuICAgICAgICByZXE6IFtcInN0b25lXCIsIDM1XSxcbiAgICAgICAgaGVhbHRoOiAxNTAwLFxuICAgICAgICBzY2FsZTogNTIsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzJdLFxuICAgICAgICBuYW1lOiBcInNwaWtlc1wiLFxuICAgICAgICBkZXNjOiBcImRhbWFnZXMgZW5lbWllcyB3aGVuIHRoZXkgdG91Y2ggdGhlbVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMjAsIFwic3RvbmVcIiwgNV0sXG4gICAgICAgIGhlYWx0aDogNDAwLFxuICAgICAgICBkbWc6IDIwLFxuICAgICAgICBzY2FsZTogNDksXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IC0yMyxcbiAgICAgICAgaG9sZE9mZnNldDogOCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDUsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzJdLFxuICAgICAgICBuYW1lOiBcImdyZWF0ZXIgc3Bpa2VzXCIsXG4gICAgICAgIGRlc2M6IFwiZGFtYWdlcyBlbmVtaWVzIHdoZW4gdGhleSB0b3VjaCB0aGVtXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAzMCwgXCJzdG9uZVwiLCAxMF0sXG4gICAgICAgIGhlYWx0aDogNTAwLFxuICAgICAgICBkbWc6IDM1LFxuICAgICAgICBzY2FsZTogNTIsXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IC0yMyxcbiAgICAgICAgaG9sZE9mZnNldDogOCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDksXG4gICAgICAgIHByZTogMSxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMl0sXG4gICAgICAgIG5hbWU6IFwicG9pc29uIHNwaWtlc1wiLFxuICAgICAgICBkZXNjOiBcInBvaXNvbnMgZW5lbWllcyB3aGVuIHRoZXkgdG91Y2ggdGhlbVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMzUsIFwic3RvbmVcIiwgMTVdLFxuICAgICAgICBoZWFsdGg6IDYwMCxcbiAgICAgICAgZG1nOiAzMCxcbiAgICAgICAgcERtZzogNSxcbiAgICAgICAgc2NhbGU6IDUyLFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAtMjMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDgsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA5LFxuICAgICAgICBwcmU6IDIsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzJdLFxuICAgICAgICBuYW1lOiBcInNwaW5uaW5nIHNwaWtlc1wiLFxuICAgICAgICBkZXNjOiBcImRhbWFnZXMgZW5lbWllcyB3aGVuIHRoZXkgdG91Y2ggdGhlbVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMzAsIFwic3RvbmVcIiwgMjBdLFxuICAgICAgICBoZWFsdGg6IDUwMCxcbiAgICAgICAgZG1nOiA0NSxcbiAgICAgICAgdHVyblNwZWVkOiAwLjAwMyxcbiAgICAgICAgc2NhbGU6IDUyLFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAtMjMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDgsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbM10sXG4gICAgICAgIG5hbWU6IFwid2luZG1pbGxcIixcbiAgICAgICAgZGVzYzogXCJnZW5lcmF0ZXMgZ29sZCBvdmVyIHRpbWVcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDUwLCBcInN0b25lXCIsIDEwXSxcbiAgICAgICAgaGVhbHRoOiA0MDAsXG4gICAgICAgIHBwczogMSxcbiAgICAgICAgdHVyblNwZWVkOiAwLjAwMTYsXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IDI1LFxuICAgICAgICBpY29uTGluZU11bHQ6IDEyLFxuICAgICAgICBzY2FsZTogNDUsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA1LFxuICAgICAgICBwcmU6IDEsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzNdLFxuICAgICAgICBuYW1lOiBcImZhc3RlciB3aW5kbWlsbFwiLFxuICAgICAgICBkZXNjOiBcImdlbmVyYXRlcyBtb3JlIGdvbGQgb3ZlciB0aW1lXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCA2MCwgXCJzdG9uZVwiLCAyMF0sXG4gICAgICAgIGhlYWx0aDogNTAwLFxuICAgICAgICBwcHM6IDEuNSxcbiAgICAgICAgdHVyblNwZWVkOiAwLjAwMjUsXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IDI1LFxuICAgICAgICBpY29uTGluZU11bHQ6IDEyLFxuICAgICAgICBzY2FsZTogNDcsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA4LFxuICAgICAgICBwcmU6IDEsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzNdLFxuICAgICAgICBuYW1lOiBcInBvd2VyIG1pbGxcIixcbiAgICAgICAgZGVzYzogXCJnZW5lcmF0ZXMgbW9yZSBnb2xkIG92ZXIgdGltZVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMTAwLCBcInN0b25lXCIsIDUwXSxcbiAgICAgICAgaGVhbHRoOiA4MDAsXG4gICAgICAgIHBwczogMixcbiAgICAgICAgdHVyblNwZWVkOiAwLjAwNSxcbiAgICAgICAgc3ByaXRlUGFkZGluZzogMjUsXG4gICAgICAgIGljb25MaW5lTXVsdDogMTIsXG4gICAgICAgIHNjYWxlOiA0NyxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiA1LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDUsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzRdLFxuICAgICAgICB0eXBlOiAyLFxuICAgICAgICBuYW1lOiBcIm1pbmVcIixcbiAgICAgICAgZGVzYzogXCJhbGxvd3MgeW91IHRvIG1pbmUgc3RvbmVcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDIwLCBcInN0b25lXCIsIDEwMF0sXG4gICAgICAgIGljb25MaW5lTXVsdDogMTIsXG4gICAgICAgIHNjYWxlOiA2NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDUsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzExXSxcbiAgICAgICAgdHlwZTogMCxcbiAgICAgICAgbmFtZTogXCJzYXBsaW5nXCIsXG4gICAgICAgIGRlc2M6IFwiYWxsb3dzIHlvdSB0byBmYXJtIHdvb2RcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDE1MF0sXG4gICAgICAgIGljb25MaW5lTXVsdDogMTIsXG4gICAgICAgIGNvbERpdjogMC41LFxuICAgICAgICBzY2FsZTogMTEwLFxuICAgICAgICBob2xkT2Zmc2V0OiA1MCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC0xNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA0LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s1XSxcbiAgICAgICAgbmFtZTogXCJwaXQgdHJhcFwiLFxuICAgICAgICBkZXNjOiBcInBpdCB0aGF0IHRyYXBzIGVuZW1pZXMgaWYgdGhleSB3YWxrIG92ZXIgaXRcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDMwLCBcInN0b25lXCIsIDMwXSxcbiAgICAgICAgdHJhcDogITAsXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIGhpZGVGcm9tRW5lbXk6ICEwLFxuICAgICAgICBoZWFsdGg6IDUwMCxcbiAgICAgICAgY29sRGl2OiAwLjIsXG4gICAgICAgIHNjYWxlOiA1MCxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA0LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s2XSxcbiAgICAgICAgbmFtZTogXCJib29zdCBwYWRcIixcbiAgICAgICAgZGVzYzogXCJwcm92aWRlcyBib29zdCB3aGVuIHN0ZXBwZWQgb25cIixcbiAgICAgICAgcmVxOiBbXCJzdG9uZVwiLCAyMCwgXCJ3b29kXCIsIDVdLFxuICAgICAgICBpZ25vcmVDb2xsaXNpb246ICEwLFxuICAgICAgICBib29zdFNwZWVkOiAxLjUsXG4gICAgICAgIGhlYWx0aDogMTUwLFxuICAgICAgICBjb2xEaXY6IDAuNyxcbiAgICAgICAgc2NhbGU6IDQ1LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDcsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzddLFxuICAgICAgICBkb1VwZGF0ZTogITAsXG4gICAgICAgIG5hbWU6IFwidHVycmV0XCIsXG4gICAgICAgIGRlc2M6IFwiZGVmZW5zaXZlIHN0cnVjdHVyZSB0aGF0IHNob290cyBhdCBlbmVtaWVzXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAyMDAsIFwic3RvbmVcIiwgMTUwXSxcbiAgICAgICAgaGVhbHRoOiA4MDAsXG4gICAgICAgIHByb2plY3RpbGU6IDEsXG4gICAgICAgIHNob290UmFuZ2U6IDcwMCxcbiAgICAgICAgc2hvb3RSYXRlOiAyMjAwLFxuICAgICAgICBzY2FsZTogNDMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbOF0sXG4gICAgICAgIG5hbWU6IFwicGxhdGZvcm1cIixcbiAgICAgICAgZGVzYzogXCJwbGF0Zm9ybSB0byBzaG9vdCBvdmVyIHdhbGxzIGFuZCBjcm9zcyBvdmVyIHdhdGVyXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAyMF0sXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgaGVhbHRoOiAzMDAsXG4gICAgICAgIHNjYWxlOiA0MyxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s5XSxcbiAgICAgICAgbmFtZTogXCJoZWFsaW5nIHBhZFwiLFxuICAgICAgICBkZXNjOiBcInN0YW5kaW5nIG9uIGl0IHdpbGwgc2xvd2x5IGhlYWwgeW91XCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAzMCwgXCJmb29kXCIsIDEwXSxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgaGVhbENvbDogMTUsXG4gICAgICAgIGhlYWx0aDogNDAwLFxuICAgICAgICBjb2xEaXY6IDAuNyxcbiAgICAgICAgc2NhbGU6IDQ1LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDksXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzEwXSxcbiAgICAgICAgbmFtZTogXCJzcGF3biBwYWRcIixcbiAgICAgICAgZGVzYzogXCJ5b3Ugd2lsbCBzcGF3biBoZXJlIHdoZW4geW91IGRpZSBidXQgaXQgd2lsbCBkaXNzYXBlYXJcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDEwMCwgXCJzdG9uZVwiLCAxMDBdLFxuICAgICAgICBoZWFsdGg6IDQwMCxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgc3Bhd25Qb2ludDogITAsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxMl0sXG4gICAgICAgIG5hbWU6IFwiYmxvY2tlclwiLFxuICAgICAgICBkZXNjOiBcImJsb2NrcyBidWlsZGluZyBpbiByYWRpdXNcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDMwLCBcInN0b25lXCIsIDI1XSxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgYmxvY2tlcjogMzAwLFxuICAgICAgICBoZWFsdGg6IDQwMCxcbiAgICAgICAgY29sRGl2OiAwLjcsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxM10sXG4gICAgICAgIG5hbWU6IFwidGVsZXBvcnRlclwiLFxuICAgICAgICBkZXNjOiBcInRlbGVwb3J0cyB5b3UgdG8gYSByYW5kb20gcG9pbnQgb24gdGhlIG1hcFwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgNjAsIFwic3RvbmVcIiwgNjBdLFxuICAgICAgICBpZ25vcmVDb2xsaXNpb246ICEwLFxuICAgICAgICB0ZWxlcG9ydDogITAsXG4gICAgICAgIGhlYWx0aDogMjAwLFxuICAgICAgICBjb2xEaXY6IDAuNyxcbiAgICAgICAgc2NhbGU6IDQ1LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG5dO1xuIiwiZXhwb3J0IHZhciBQcm9qZWN0aWxlcyA9IFtcbiAgICB7XG4gICAgICAgIGluZHg6IDAsXG4gICAgICAgIGxheWVyOiAwLFxuICAgICAgICBzcmM6IFwiYXJyb3dfMVwiLFxuICAgICAgICBkbWc6IDI1LFxuICAgICAgICBzcGVlZDogMS42LFxuICAgICAgICBzY2FsZTogMTAzLFxuICAgICAgICByYW5nZTogMWUzLFxuICAgICAgICBkaXN0UGVyVGljazogMS42LFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmR4OiAxLFxuICAgICAgICBsYXllcjogMSxcbiAgICAgICAgZG1nOiAyNSxcbiAgICAgICAgc2NhbGU6IDIwLFxuICAgICAgICBkaXN0UGVyVGljazogMS42LFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmR4OiAwLFxuICAgICAgICBsYXllcjogMCxcbiAgICAgICAgc3JjOiBcImFycm93XzFcIixcbiAgICAgICAgZG1nOiAzNSxcbiAgICAgICAgc3BlZWQ6IDIuNSxcbiAgICAgICAgc2NhbGU6IDEwMyxcbiAgICAgICAgcmFuZ2U6IDEyMDAsXG4gICAgICAgIGRpc3RQZXJUaWNrOiAyLjUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGluZHg6IDAsXG4gICAgICAgIGxheWVyOiAwLFxuICAgICAgICBzcmM6IFwiYXJyb3dfMVwiLFxuICAgICAgICBkbWc6IDMwLFxuICAgICAgICBzcGVlZDogMixcbiAgICAgICAgc2NhbGU6IDEwMyxcbiAgICAgICAgcmFuZ2U6IDEyMDAsXG4gICAgICAgIGRpc3RQZXJUaWNrOiAyLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmR4OiAxLFxuICAgICAgICBsYXllcjogMSxcbiAgICAgICAgZG1nOiAxNixcbiAgICAgICAgc2NhbGU6IDIwLFxuICAgICAgICBkaXN0UGVyVGljazogTmFOLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpbmR4OiAwLFxuICAgICAgICBsYXllcjogMCxcbiAgICAgICAgc3JjOiBcImJ1bGxldF8xXCIsXG4gICAgICAgIGRtZzogNTAsXG4gICAgICAgIHNwZWVkOiAzLjYsXG4gICAgICAgIHNjYWxlOiAxNjAsXG4gICAgICAgIHJhbmdlOiAxNDAwLFxuICAgICAgICBkaXN0UGVyVGljazogMy42LFxuICAgIH0sXG5dO1xuIiwiZXhwb3J0IHZhciBiYWRXb3JkcyA9IFtcbiAgICBcImFob2xlXCIsXG4gICAgXCJhbnVzXCIsXG4gICAgXCJhc2gwbGVcIixcbiAgICBcImFzaDBsZXNcIixcbiAgICBcImFzaG9sZXNcIixcbiAgICBcImFzc1wiLFxuICAgIFwiQXNzIE1vbmtleVwiLFxuICAgIFwiQXNzZmFjZVwiLFxuICAgIFwiYXNzaDBsZVwiLFxuICAgIFwiYXNzaDBsZXpcIixcbiAgICBcImFzc2hvbGVcIixcbiAgICBcImFzc2hvbGVzXCIsXG4gICAgXCJhc3Nob2x6XCIsXG4gICAgXCJhc3N3aXBlXCIsXG4gICAgXCJhenpob2xlXCIsXG4gICAgXCJiYXNzdGVyZHNcIixcbiAgICBcImJhc3RhcmRcIixcbiAgICBcImJhc3RhcmRzXCIsXG4gICAgXCJiYXN0YXJkelwiLFxuICAgIFwiYmFzdGVyZHNcIixcbiAgICBcImJhc3RlcmR6XCIsXG4gICAgXCJCaWF0Y2hcIixcbiAgICBcImJpdGNoXCIsXG4gICAgXCJiaXRjaGVzXCIsXG4gICAgXCJCbG93IEpvYlwiLFxuICAgIFwiYm9mZmluZ1wiLFxuICAgIFwiYnV0dGhvbGVcIixcbiAgICBcImJ1dHR3aXBlXCIsXG4gICAgXCJjMGNrXCIsXG4gICAgXCJjMGNrc1wiLFxuICAgIFwiYzBrXCIsXG4gICAgXCJDYXJwZXQgTXVuY2hlclwiLFxuICAgIFwiY2F3a1wiLFxuICAgIFwiY2F3a3NcIixcbiAgICBcIkNsaXRcIixcbiAgICBcImNudHNcIixcbiAgICBcImNudHpcIixcbiAgICBcImNvY2tcIixcbiAgICBcImNvY2toZWFkXCIsXG4gICAgXCJjb2NrLWhlYWRcIixcbiAgICBcImNvY2tzXCIsXG4gICAgXCJDb2NrU3Vja2VyXCIsXG4gICAgXCJjb2NrLXN1Y2tlclwiLFxuICAgIFwiY3JhcFwiLFxuICAgIFwiY3VtXCIsXG4gICAgXCJjdW50XCIsXG4gICAgXCJjdW50c1wiLFxuICAgIFwiY3VudHpcIixcbiAgICBcImRpY2tcIixcbiAgICBcImRpbGQwXCIsXG4gICAgXCJkaWxkMHNcIixcbiAgICBcImRpbGRvXCIsXG4gICAgXCJkaWxkb3NcIixcbiAgICBcImRpbGxkMFwiLFxuICAgIFwiZGlsbGQwc1wiLFxuICAgIFwiZG9taW5hdHJpY2tzXCIsXG4gICAgXCJkb21pbmF0cmljc1wiLFxuICAgIFwiZG9taW5hdHJpeFwiLFxuICAgIFwiZHlrZVwiLFxuICAgIFwiZW5lbWFcIixcbiAgICBcImYgdSBjIGtcIixcbiAgICBcImYgdSBjIGsgZSByXCIsXG4gICAgXCJmYWdcIixcbiAgICBcImZhZzF0XCIsXG4gICAgXCJmYWdldFwiLFxuICAgIFwiZmFnZzF0XCIsXG4gICAgXCJmYWdnaXRcIixcbiAgICBcImZhZ2dvdFwiLFxuICAgIFwiZmFnZzB0XCIsXG4gICAgXCJmYWdpdFwiLFxuICAgIFwiZmFnc1wiLFxuICAgIFwiZmFnelwiLFxuICAgIFwiZmFpZ1wiLFxuICAgIFwiZmFpZ3NcIixcbiAgICBcImZhcnRcIixcbiAgICBcImZsaXBwaW5nIHRoZSBiaXJkXCIsXG4gICAgXCJmdWNrXCIsXG4gICAgXCJmdWNrZXJcIixcbiAgICBcImZ1Y2tpblwiLFxuICAgIFwiZnVja2luZ1wiLFxuICAgIFwiZnVja3NcIixcbiAgICBcIkZ1ZGdlIFBhY2tlclwiLFxuICAgIFwiZnVrXCIsXG4gICAgXCJGdWthaFwiLFxuICAgIFwiRnVrZW5cIixcbiAgICBcImZ1a2VyXCIsXG4gICAgXCJGdWtpblwiLFxuICAgIFwiRnVra1wiLFxuICAgIFwiRnVra2FoXCIsXG4gICAgXCJGdWtrZW5cIixcbiAgICBcIkZ1a2tlclwiLFxuICAgIFwiRnVra2luXCIsXG4gICAgXCJnMDBrXCIsXG4gICAgXCJHb2QtZGFtbmVkXCIsXG4gICAgXCJoMDByXCIsXG4gICAgXCJoMGFyXCIsXG4gICAgXCJoMHJlXCIsXG4gICAgXCJoZWxsc1wiLFxuICAgIFwiaG9hclwiLFxuICAgIFwiaG9vclwiLFxuICAgIFwiaG9vcmVcIixcbiAgICBcImphY2tvZmZcIixcbiAgICBcImphcFwiLFxuICAgIFwiamFwc1wiLFxuICAgIFwiamVyay1vZmZcIixcbiAgICBcImppc2ltXCIsXG4gICAgXCJqaXNzXCIsXG4gICAgXCJqaXptXCIsXG4gICAgXCJqaXp6XCIsXG4gICAgXCJrbm9iXCIsXG4gICAgXCJrbm9ic1wiLFxuICAgIFwia25vYnpcIixcbiAgICBcImt1bnRcIixcbiAgICBcImt1bnRzXCIsXG4gICAgXCJrdW50elwiLFxuICAgIFwiTGV6emlhblwiLFxuICAgIFwiTGlwc2hpdHNcIixcbiAgICBcIkxpcHNoaXR6XCIsXG4gICAgXCJtYXNvY2hpc3RcIixcbiAgICBcIm1hc29raXN0XCIsXG4gICAgXCJtYXNzdGVyYmFpdFwiLFxuICAgIFwibWFzc3RyYmFpdFwiLFxuICAgIFwibWFzc3RyYmF0ZVwiLFxuICAgIFwibWFzdGVyYmFpdGVyXCIsXG4gICAgXCJtYXN0ZXJiYXRlXCIsXG4gICAgXCJtYXN0ZXJiYXRlc1wiLFxuICAgIFwiTW90aGEgRnVja2VyXCIsXG4gICAgXCJNb3RoYSBGdWtlclwiLFxuICAgIFwiTW90aGEgRnVra2FoXCIsXG4gICAgXCJNb3RoYSBGdWtrZXJcIixcbiAgICBcIk1vdGhlciBGdWNrZXJcIixcbiAgICBcIk1vdGhlciBGdWthaFwiLFxuICAgIFwiTW90aGVyIEZ1a2VyXCIsXG4gICAgXCJNb3RoZXIgRnVra2FoXCIsXG4gICAgXCJNb3RoZXIgRnVra2VyXCIsXG4gICAgXCJtb3RoZXItZnVja2VyXCIsXG4gICAgXCJNdXRoYSBGdWNrZXJcIixcbiAgICBcIk11dGhhIEZ1a2FoXCIsXG4gICAgXCJNdXRoYSBGdWtlclwiLFxuICAgIFwiTXV0aGEgRnVra2FoXCIsXG4gICAgXCJNdXRoYSBGdWtrZXJcIixcbiAgICBcIm4xZ3JcIixcbiAgICBcIm5hc3R0XCIsXG4gICAgXCJuaWdnZXI7XCIsXG4gICAgXCJuaWd1cjtcIixcbiAgICBcIm5paWdlcjtcIixcbiAgICBcIm5paWdyO1wiLFxuICAgIFwib3JhZmlzXCIsXG4gICAgXCJvcmdhc2ltO1wiLFxuICAgIFwib3JnYXNtXCIsXG4gICAgXCJvcmdhc3VtXCIsXG4gICAgXCJvcmlmYWNlXCIsXG4gICAgXCJvcmlmaWNlXCIsXG4gICAgXCJvcmlmaXNzXCIsXG4gICAgXCJwYWNraVwiLFxuICAgIFwicGFja2llXCIsXG4gICAgXCJwYWNreVwiLFxuICAgIFwicGFraVwiLFxuICAgIFwicGFraWVcIixcbiAgICBcInBha3lcIixcbiAgICBcInBlY2tlclwiLFxuICAgIFwicGVlZW51c1wiLFxuICAgIFwicGVlZW51c3NzXCIsXG4gICAgXCJwZWVudXNcIixcbiAgICBcInBlaW51c1wiLFxuICAgIFwicGVuMXNcIixcbiAgICBcInBlbmFzXCIsXG4gICAgXCJwZW5pc1wiLFxuICAgIFwicGVuaXMtYnJlYXRoXCIsXG4gICAgXCJwZW51c1wiLFxuICAgIFwicGVudXVzXCIsXG4gICAgXCJQaHVjXCIsXG4gICAgXCJQaHVja1wiLFxuICAgIFwiUGh1a1wiLFxuICAgIFwiUGh1a2VyXCIsXG4gICAgXCJQaHVra2VyXCIsXG4gICAgXCJwb2xhY1wiLFxuICAgIFwicG9sYWNrXCIsXG4gICAgXCJwb2xha1wiLFxuICAgIFwiUG9vbmFuaVwiLFxuICAgIFwicHIxY1wiLFxuICAgIFwicHIxY2tcIixcbiAgICBcInByMWtcIixcbiAgICBcInB1c3NlXCIsXG4gICAgXCJwdXNzZWVcIixcbiAgICBcInB1c3N5XCIsXG4gICAgXCJwdXVrZVwiLFxuICAgIFwicHV1a2VyXCIsXG4gICAgXCJxd2VpclwiLFxuICAgIFwicmVja3R1bVwiLFxuICAgIFwicmVjdHVtXCIsXG4gICAgXCJyZXRhcmRcIixcbiAgICBcInNhZGlzdFwiLFxuICAgIFwic2NhbmtcIixcbiAgICBcInNjaGxvbmdcIixcbiAgICBcInNjcmV3aW5nXCIsXG4gICAgXCJzZW1lblwiLFxuICAgIFwic2V4XCIsXG4gICAgXCJzZXh5XCIsXG4gICAgXCJTaCF0XCIsXG4gICAgXCJzaDF0XCIsXG4gICAgXCJzaDF0ZXJcIixcbiAgICBcInNoMXRzXCIsXG4gICAgXCJzaDF0dGVyXCIsXG4gICAgXCJzaDF0elwiLFxuICAgIFwic2hpdFwiLFxuICAgIFwic2hpdHNcIixcbiAgICBcInNoaXR0ZXJcIixcbiAgICBcIlNoaXR0eVwiLFxuICAgIFwiU2hpdHlcIixcbiAgICBcInNoaXR6XCIsXG4gICAgXCJTaHl0XCIsXG4gICAgXCJTaHl0ZVwiLFxuICAgIFwiU2h5dHR5XCIsXG4gICAgXCJTaHl0eVwiLFxuICAgIFwic2thbmNrXCIsXG4gICAgXCJza2Fua1wiLFxuICAgIFwic2thbmtlZVwiLFxuICAgIFwic2thbmtleVwiLFxuICAgIFwic2thbmtzXCIsXG4gICAgXCJTa2Fua3lcIixcbiAgICBcInNsYWdcIixcbiAgICBcInNsdXRcIixcbiAgICBcInNsdXRzXCIsXG4gICAgXCJTbHV0dHlcIixcbiAgICBcInNsdXR6XCIsXG4gICAgXCJzb24tb2YtYS1iaXRjaFwiLFxuICAgIFwidGl0XCIsXG4gICAgXCJ0dXJkXCIsXG4gICAgXCJ2YTFqaW5hXCIsXG4gICAgXCJ2YWcxbmFcIixcbiAgICBcInZhZ2lpbmFcIixcbiAgICBcInZhZ2luYVwiLFxuICAgIFwidmFqMW5hXCIsXG4gICAgXCJ2YWppbmFcIixcbiAgICBcInZ1bGx2YVwiLFxuICAgIFwidnVsdmFcIixcbiAgICBcIncwcFwiLFxuICAgIFwid2gwMHJcIixcbiAgICBcIndoMHJlXCIsXG4gICAgXCJ3aG9yZVwiLFxuICAgIFwieHJhdGVkXCIsXG4gICAgXCJ4eHhcIixcbiAgICBcImIhK2NoXCIsXG4gICAgXCJiaXRjaFwiLFxuICAgIFwiYmxvd2pvYlwiLFxuICAgIFwiY2xpdFwiLFxuICAgIFwiYXJzY2hsb2NoXCIsXG4gICAgXCJmdWNrXCIsXG4gICAgXCJzaGl0XCIsXG4gICAgXCJhc3NcIixcbiAgICBcImFzc2hvbGVcIixcbiAgICBcImIhdGNoXCIsXG4gICAgXCJiMTdjaFwiLFxuICAgIFwiYjF0Y2hcIixcbiAgICBcImJhc3RhcmRcIixcbiAgICBcImJpK2NoXCIsXG4gICAgXCJib2lvbGFzXCIsXG4gICAgXCJidWNldGFcIixcbiAgICBcImMwY2tcIixcbiAgICBcImNhd2tcIixcbiAgICBcImNoaW5rXCIsXG4gICAgXCJjaXBhXCIsXG4gICAgXCJjbGl0c1wiLFxuICAgIFwiY29ja1wiLFxuICAgIFwiY3VtXCIsXG4gICAgXCJjdW50XCIsXG4gICAgXCJkaWxkb1wiLFxuICAgIFwiZGlyc2FcIixcbiAgICBcImVqYWt1bGF0ZVwiLFxuICAgIFwiZmF0YXNzXCIsXG4gICAgXCJmY3VrXCIsXG4gICAgXCJmdWtcIixcbiAgICBcImZ1eDByXCIsXG4gICAgXCJob2VyXCIsXG4gICAgXCJob3JlXCIsXG4gICAgXCJqaXNtXCIsXG4gICAgXCJrYXdrXCIsXG4gICAgXCJsM2l0Y2hcIixcbiAgICBcImwzaStjaFwiLFxuICAgIFwibWFzdHVyYmF0ZVwiLFxuICAgIFwibWFzdGVyYmF0KlwiLFxuICAgIFwibWFzdGVyYmF0M1wiLFxuICAgIFwibW90aGVyZnVja2VyXCIsXG4gICAgXCJzLm8uYi5cIixcbiAgICBcIm1vZm9cIixcbiAgICBcIm5hemlcIixcbiAgICBcIm5pZ2dhXCIsXG4gICAgXCJuaWdnZXJcIixcbiAgICBcIm51dHNhY2tcIixcbiAgICBcInBodWNrXCIsXG4gICAgXCJwaW1waXNcIixcbiAgICBcInB1c3NlXCIsXG4gICAgXCJwdXNzeVwiLFxuICAgIFwic2Nyb3R1bVwiLFxuICAgIFwic2ghdFwiLFxuICAgIFwic2hlbWFsZVwiLFxuICAgIFwic2hpK1wiLFxuICAgIFwic2ghK1wiLFxuICAgIFwic2x1dFwiLFxuICAgIFwic211dFwiLFxuICAgIFwidGVldHNcIixcbiAgICBcInRpdHNcIixcbiAgICBcImJvb2JzXCIsXG4gICAgXCJiMDBic1wiLFxuICAgIFwidGVlelwiLFxuICAgIFwidGVzdGljYWxcIixcbiAgICBcInRlc3RpY2xlXCIsXG4gICAgXCJ0aXR0XCIsXG4gICAgXCJ3MDBzZVwiLFxuICAgIFwiamFja29mZlwiLFxuICAgIFwid2Fua1wiLFxuICAgIFwid2hvYXJcIixcbiAgICBcIndob3JlXCIsXG4gICAgXCIqZGFtblwiLFxuICAgIFwiKmR5a2VcIixcbiAgICBcIipmdWNrKlwiLFxuICAgIFwiKnNoaXQqXCIsXG4gICAgXCJAJCRcIixcbiAgICBcImFtY2lrXCIsXG4gICAgXCJhbmRza290YVwiLFxuICAgIFwiYXJzZSpcIixcbiAgICBcImFzc3JhbW1lclwiLFxuICAgIFwiYXlpclwiLFxuICAgIFwiYmk3Y2hcIixcbiAgICBcImJpdGNoKlwiLFxuICAgIFwiYm9sbG9jaypcIixcbiAgICBcImJyZWFzdHNcIixcbiAgICBcImJ1dHQtcGlyYXRlXCIsXG4gICAgXCJjYWJyb25cIixcbiAgICBcImNhenpvXCIsXG4gICAgXCJjaHJhYVwiLFxuICAgIFwiY2h1alwiLFxuICAgIFwiQ29jaypcIixcbiAgICBcImN1bnQqXCIsXG4gICAgXCJkNG1uXCIsXG4gICAgXCJkYXlnb1wiLFxuICAgIFwiZGVnb1wiLFxuICAgIFwiZGljaypcIixcbiAgICBcImRpa2UqXCIsXG4gICAgXCJkdXBhXCIsXG4gICAgXCJkeml3a2FcIixcbiAgICBcImVqYWNrdWxhdGVcIixcbiAgICBcIkVrcmVtKlwiLFxuICAgIFwiRWt0b1wiLFxuICAgIFwiZW5jdWxlclwiLFxuICAgIFwiZmFlblwiLFxuICAgIFwiZmFnKlwiLFxuICAgIFwiZmFuY3Vsb1wiLFxuICAgIFwiZmFubnlcIixcbiAgICBcImZlY2VzXCIsXG4gICAgXCJmZWdcIixcbiAgICBcIkZlbGNoZXJcIixcbiAgICBcImZpY2tlblwiLFxuICAgIFwiZml0dCpcIixcbiAgICBcIkZsaWtrZXJcIixcbiAgICBcImZvcmVza2luXCIsXG4gICAgXCJGb3R6ZVwiLFxuICAgIFwiRnUoKlwiLFxuICAgIFwiZnVrKlwiLFxuICAgIFwiZnV0a3JldHpuXCIsXG4gICAgXCJnb29rXCIsXG4gICAgXCJndWllbmFcIixcbiAgICBcImgwclwiLFxuICAgIFwiaDR4MHJcIixcbiAgICBcImhlbGxcIixcbiAgICBcImhlbHZldGVcIixcbiAgICBcImhvZXIqXCIsXG4gICAgXCJob25rZXlcIixcbiAgICBcIkh1ZXZvblwiLFxuICAgIFwiaHVpXCIsXG4gICAgXCJpbmp1blwiLFxuICAgIFwiaml6elwiLFxuICAgIFwia2Fua2VyKlwiLFxuICAgIFwia2lrZVwiLFxuICAgIFwia2xvb3R6YWtcIixcbiAgICBcImtyYXV0XCIsXG4gICAgXCJrbnVsbGVcIixcbiAgICBcImt1a1wiLFxuICAgIFwia3Vrc3VnZXJcIixcbiAgICBcIkt1cmFjXCIsXG4gICAgXCJrdXJ3YVwiLFxuICAgIFwia3VzaSpcIixcbiAgICBcImt5cnBhKlwiLFxuICAgIFwibGVzYm9cIixcbiAgICBcIm1hbWhvb25cIixcbiAgICBcIm1hc3R1cmJhdCpcIixcbiAgICBcIm1lcmQqXCIsXG4gICAgXCJtaWJ1blwiLFxuICAgIFwibW9ua2xlaWdoXCIsXG4gICAgXCJtb3VsaWV3b3BcIixcbiAgICBcIm11aWVcIixcbiAgICBcIm11bGtrdVwiLFxuICAgIFwibXVzY2hpXCIsXG4gICAgXCJuYXppc1wiLFxuICAgIFwibmVwZXNhdXJpb1wiLFxuICAgIFwibmlnZ2VyKlwiLFxuICAgIFwib3Jvc3B1XCIsXG4gICAgXCJwYXNrYSpcIixcbiAgICBcInBlcnNlXCIsXG4gICAgXCJwaWNrYVwiLFxuICAgIFwicGllcmRvbCpcIixcbiAgICBcInBpbGx1KlwiLFxuICAgIFwicGltbWVsXCIsXG4gICAgXCJwaXNzKlwiLFxuICAgIFwicGl6ZGFcIixcbiAgICBcInBvb250c2VlXCIsXG4gICAgXCJwb29wXCIsXG4gICAgXCJwb3JuXCIsXG4gICAgXCJwMHJuXCIsXG4gICAgXCJwcjBuXCIsXG4gICAgXCJwcmV0ZWVuXCIsXG4gICAgXCJwdWxhXCIsXG4gICAgXCJwdWxlXCIsXG4gICAgXCJwdXRhXCIsXG4gICAgXCJwdXRvXCIsXG4gICAgXCJxYWhiZWhcIixcbiAgICBcInF1ZWVmKlwiLFxuICAgIFwicmF1dGVuYmVyZ1wiLFxuICAgIFwic2NoYWZmZXJcIixcbiAgICBcInNjaGVpc3MqXCIsXG4gICAgXCJzY2hsYW1wZVwiLFxuICAgIFwic2NobXVja1wiLFxuICAgIFwic2NyZXdcIixcbiAgICBcInNoIXQqXCIsXG4gICAgXCJzaGFybXV0YVwiLFxuICAgIFwic2hhcm11dGVcIixcbiAgICBcInNoaXBhbFwiLFxuICAgIFwic2hpelwiLFxuICAgIFwic2tyaWJ6XCIsXG4gICAgXCJza3Vyd3lzeW5cIixcbiAgICBcInNwaGVuY3RlclwiLFxuICAgIFwic3BpY1wiLFxuICAgIFwic3BpZXJkYWxhalwiLFxuICAgIFwic3Bsb29nZVwiLFxuICAgIFwic3VrYVwiLFxuICAgIFwiYjAwYipcIixcbiAgICBcInRlc3RpY2xlKlwiLFxuICAgIFwidGl0dCpcIixcbiAgICBcInR3YXRcIixcbiAgICBcInZpdHR1XCIsXG4gICAgXCJ3YW5rKlwiLFxuICAgIFwid2V0YmFjaypcIixcbiAgICBcIndpY2hzZXJcIixcbiAgICBcIndvcCpcIixcbiAgICBcInllZFwiLFxuICAgIFwiemFib3VyYWhcIixcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogSW1wb3J0cyB0aGUgbXNncGFjayBsaWJyYXJ5XG4gKi9cbi8vY29uc3QgbXNncGFjayA9IHJlcXVpcmUoXCJtc2dwYWNrXCIpO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IFBsYXllcnMgfSBmcm9tIFwiLi9QbGF5ZXJzL1BsYXllck1hbmFnZXJcIjtcbmltcG9ydCB7IGJhZFdvcmRzIH0gZnJvbSBcIi4vYmFkV29yZHNcIjtcbmltcG9ydCB7IE9iamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9CdWlsZGluZ3MvQnVpbGRpbmdNYW5hZ2VyXCI7XG5pbXBvcnQgeyBwcm9qZWN0aWxlTWFuYWdlciB9IGZyb20gXCIuL1Byb2plY3RpbGVzL1Byb2plY3RpbGVNYW5hZ2VyXCI7XG4vKipcbiAqIEEgY2xhc3MgZm9yIGVuY29kaW5nIGFuZCBkZWNvZGluZyBkYXRhIHVzaW5nIE1lc3NhZ2VQYWNrXG4gKi9cbnZhciBNc2dwYWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1zZ3BhY2soKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuY29kZXMgZGF0YSB1c2luZyBNZXNzYWdlUGFja1xuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGRhdGEgVGhlIGRhdGEgdG8gZW5jb2RlXG4gICAgICogQHJldHVybnMge0J1ZmZlcn0gVGhlIGVuY29kZWQgZGF0YVxuICAgICAqL1xuICAgIE1zZ3BhY2sucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBtc2dwYWNrLmVuY29kZShkYXRhKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlY29kZXMgZGF0YSB1c2luZyBNZXNzYWdlUGFja1xuICAgICAqXG4gICAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgVGhlIGRhdGEgdG8gZGVjb2RlXG4gICAgICogQHJldHVybnMge2FueX0gVGhlIGRlY29kZWQgZGF0YVxuICAgICAqL1xuICAgIE1zZ3BhY2sucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBtc2dwYWNrLmRlY29kZShkYXRhKTtcbiAgICB9O1xuICAgIHJldHVybiBNc2dwYWNrO1xufSgpKTtcbi8qKlxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgV2ViU29ja2V0IGNvbm5lY3Rpb25zIGFuZCBzZW5kaW5nL3JlY2VpdmluZyBwYWNrZXRzXG4gKi9cbnZhciBXUyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoV1MsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBXUygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMud3MgPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgcGFja2V0IG92ZXIgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBwYWNrZXRcbiAgICAgKiBAcGFyYW0gey4uLmFueVtdfSBkYXRhIFRoZSBkYXRhIHRvIHNlbmRcbiAgICAgKi9cbiAgICBXUy5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciBkYXRhID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBkYXRhW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy53cykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWypdIFdlYlNvY2tldCBpcyBub3QgaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53cy5zZW5kKHRoaXMuZW5jb2RlKFt0eXBlLCBkYXRhXSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBpbmNvbWluZyBwYWNrZXRzIGZyb20gdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueX0gZGF0YSBUaGUgaW5jb21pbmcgcGFja2V0IGRhdGFcbiAgICAgKi9cbiAgICBXUy5wcm90b3R5cGUuaGFuZGxlUGFja2V0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHRoaXMuZGVjb2RlKGRhdGEpO1xuICAgICAgICB2YXIgdHlwZSA9IHBhcnNlZFswXTtcbiAgICAgICAgdmFyIHBhY2tldERhdGEgPSBwYXJzZWRbMV07XG4gICAgICAgIC8vY29uc29sZS5sb2codHlwZSk7XG4gICAgICAgIGlmICh0eXBlID09PSBcIkFcIikge1xuICAgICAgICAgICAgLy8gU0VUIElOSVQgREFUQTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkJcIikge1xuICAgICAgICAgICAgLy8gRElTQ09OTkVDVDpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkRcIikge1xuICAgICAgICAgICAgLy8gQUREIFBMQVlFUjpcbiAgICAgICAgICAgIFBsYXllcnMuYWRkUGxheWVyKHBhY2tldERhdGFbMF1bMF0sIHBhY2tldERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiRVwiKSB7XG4gICAgICAgICAgICAvLyBSRU1PVkUgUExBWUVSOlxuICAgICAgICAgICAgUGxheWVycy5yZW1vdmVQbGF5ZXIocGFja2V0RGF0YVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgIC8vIFVQREFURSBQTEFZRVJTOlxuICAgICAgICAgICAgUGxheWVycy51cGRhdGVQbGF5ZXJzKHBhY2tldERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiSFwiKSB7XG4gICAgICAgICAgICAvLyBMT0FEIEdBTUUgT0JKRUNUOlxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWNrZXREYXRhLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICBPYmplY3RNYW5hZ2VyLmFkZEJ1aWxkaW5nKHBhY2tldERhdGEsIGkpO1xuICAgICAgICAgICAgICAgIGkgKz0gODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIktcIikge1xuICAgICAgICAgICAgLy8gR0FUSEVSIEFOSU1BVElPTjpcbiAgICAgICAgICAgIGlmIChwYWNrZXREYXRhWzBdWzJdKVxuICAgICAgICAgICAgICAgIHZhciBib25rID0gbmV3IEF1ZGlvKFwiaHR0cHM6Ly9jZG4uZ2xpdGNoLmdsb2JhbC8xZDFkYWZhOS1iYTVhLTQ3ZTctYTRlNy1iY2JmMDg1MTU4M2QvYm9uay5tcDRcIik7XG4gICAgICAgICAgICBib25rLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIk9cIikge1xuICAgICAgICAgICAgLy8gVVBEQVRFIEhFQUxUSDpcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIlhcIikge1xuICAgICAgICAgICAgLy8gQUREIFBST0pFQ1RJTEU6XG4gICAgICAgICAgICBwcm9qZWN0aWxlTWFuYWdlci5hZGRQcm9qZWN0aWxlKHBhY2tldERhdGFbMF0sIHBhY2tldERhdGFbMV0sIHBhY2tldERhdGFbMl0sIHBhY2tldERhdGFbM10sIHBhY2tldERhdGFbNF0sIHBhY2tldERhdGFbNV0sIHBhY2tldERhdGFbNl0sIHBhY2tldERhdGFbN10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiWVwiKSB7XG4gICAgICAgICAgICAvLyBSRU1PVkUgUFJPSkVDVElMRTpcbiAgICAgICAgICAgIHByb2plY3RpbGVNYW5hZ2VyLnJlbW92ZVByb2plY3RpbGUocGFja2V0RGF0YVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCI2XCIpIHtcbiAgICAgICAgICAgIC8vIFJFQ0VJVkUgQ0hBVDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhY2tldERhdGFbMV0pO1xuICAgICAgICAgICAgaWYgKHBhY2tldERhdGFbMV0uaW5jbHVkZXMoXCJmZXJyaXNcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmQoXCI2XCIsIFwiZmVycmlzIGlzIGEgc2tpZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhY2tldERhdGFbMV0uaW5jbHVkZXMoXCJwYXNoa2FcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmQoXCI2XCIsIFwicGFzaGthIGlzIGEgc2tpZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFdTO1xufShNc2dwYWNrKSk7XG4vKipcbiAqIE1vbmtleSBwYXRjaGVzIHRoZSBXZWJTb2NrZXQgcHJvdG90eXBlIHRvIGFkZCBhIGN1c3RvbSBzZW5kIG1ldGhvZFxuICovXG5XZWJTb2NrZXQucHJvdG90eXBlLnNlbmQyID0gV2ViU29ja2V0LnByb3RvdHlwZS5zZW5kOyAvLyBzbyBpdCB3b24ndCBjYWxsIGl0c2VsZiBlYWNoIHRpbWVcbldlYlNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBwYXJhbSA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHBhcmFtW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubW9kKSB7XG4gICAgICAgIHRoaXMubW9kID0gbmV3IFdTKCk7XG4gICAgICAgIHRoaXMubW9kLndzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICBfdGhpcy5tb2QuaGFuZGxlUGFja2V0cyhtc2cuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBBTlRJIFBST0ZBTklUWSBGSUxURVI6XG4gICAgdmFyIGRlY29kZWRQYWNrZXQgPSB0aGlzLm1vZC5kZWNvZGUocGFja2V0KTtcbiAgICBpZiAoZGVjb2RlZFBhY2tldFswXSA9PT0gXCI2XCIgJiYgYmFkV29yZHMuc29tZShmdW5jdGlvbiAod29yZCkgeyByZXR1cm4gZGVjb2RlZFBhY2tldFsxXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHdvcmQudG9Mb3dlckNhc2UoKSk7IH0pKSB7XG4gICAgICAgIHZhciBtc2cgPSBkZWNvZGVkUGFja2V0WzFdO1xuICAgICAgICB2YXIgd29yZHMgPSBtc2cuc3BsaXQoJyAnKTtcbiAgICAgICAgdmFyIG5ld1dvcmRzID0gd29yZHMubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgICAgICB2YXIgbW9kaWZpZWRXb3JkID0gd29yZDtcbiAgICAgICAgICAgIGJhZFdvcmRzLmZvckVhY2goZnVuY3Rpb24gKGJhZFdvcmQpIHtcbiAgICAgICAgICAgICAgICBpZiAod29yZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGJhZFdvcmQudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRXb3JkID0gbW9kaWZpZWRXb3JkLnJlcGxhY2UobmV3IFJlZ0V4cChiYWRXb3JkLCAnZ2knKSwgYmFkV29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGJhZFdvcmQuc2xpY2UoMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1vZGlmaWVkV29yZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBuZXdNc2cgPSBuZXdXb3Jkcy5qb2luKCcgJyk7XG4gICAgICAgIHRoaXMuc2VuZDIodGhpcy5tb2QuZW5jb2RlKFtcIjZcIiwgW25ld01zZ11dKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNlbmQyKHBhY2tldCk7XG4gICAgfVxufTtcbi8qKlxuICogVGhlIEdhbWUgY2xhc3MsIHdoaWNoIGV4dGVuZHMgV1MgYW5kIGFkZHMgZ2FtZS1zcGVjaWZpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXG4gKi9cbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHYW1lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdhbWUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5lbmVtaWVzID0gW107XG4gICAgICAgIF90aGlzLnRlYW1tYXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgR2FtZSBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybnMge0dhbWV9IFRoZSBzaW5nbGV0b24gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBHYW1lLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIUdhbWUuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEdhbWUuaW5zdGFuY2UgPSBuZXcgR2FtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBHYW1lLmluc3RhbmNlO1xuICAgIH07XG4gICAgcmV0dXJuIEdhbWU7XG59KFdTKSk7XG5leHBvcnQgeyBHYW1lIH07XG52YXIgTW9kID0gR2FtZS5nZXRJbnN0YW5jZSgpO1xuYWxlcnQoXCJNb29Nb28gVFMgTG9hZGVkXCIpO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVOYW1lXCIpLmlubmVySFRNTCA9IFwiXFxuPGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmdsaXRjaC5nbG9iYWwvMWQxZGFmYTktYmE1YS00N2U3LWE0ZTctYmNiZjA4NTE1ODNkLyU1QnJlbW92YWwuYWklNURfZjViMDdiZmItZDI1MC00YThmLTg3MTQtMmI1ZjRlNWFmM2QyLWJhbm5lci5wbmc/dj0xNzIwMDkzMzM4MjAxXFxcIiBzdHlsZT1cXFwid2lkdGg6IDQwMHB4OyBoZWlnaHQ6IDI1MHB4XFxcIj5cXG5cIjtcbiAgICAvLyBHQU1FIE9WRVJMQVk6XG4gICAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXkuc3R5bGUgPSBcIlxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IDA7XFxubGVmdDogMDtcXG5iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAxODUsIDAuMTUpO1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwJTtcXG5wb2ludGVyLWV2ZW50czogbm9uZTtcXG5cIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIC8vIFZFUklGSUNBVElPTiBQUk9NUFQ6XG4gICAgdmFyIFZlcmlmaWNhdGlvblByb21wdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gVmVyaWZpY2F0aW9uUHJvbXB0KCkge1xuICAgICAgICB9XG4gICAgICAgIFZlcmlmaWNhdGlvblByb21wdC5wcm90b3R5cGUucHJlcGFyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuYmx1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLmJsdXIuc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCA0MCwgMC4zKTtcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcXG4gICAgICB6LWluZGV4OiA4ODg3O1xcbiAgICBcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ibHVyKTtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLm1haW5Ib2xkZXIuc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICB3aWR0aDogMzUlO1xcbiAgICAgIGhlaWdodDogMjAlO1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTg1LCAxODUsIDE4NSwgMC45NSk7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgICAgYm9yZGVyOiA2cHggc29saWQgbGlnaHRncmV5O1xcbiAgICAgIHotaW5kZXg6IDg4ODg7XFxuICAgIFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1haW5Ib2xkZXIpO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLnRpdGxlLmlubmVySFRNTCA9IFwiQXV0aGVudGljYXRpb24uXCI7XG4gICAgICAgICAgICB0aGlzLnRpdGxlLnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDM1JTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogODBweDtcXG4gICAgICBjb2xvcjogIzAwMDtcXG4gICAgICBmb250OiAzMnB4IEFyaWFsO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBcIjtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlci5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBUb2tlbiBIZXJlLi4uXCI7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjMpO1xcbiAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgYm90dG9tOiA1JTtcXG4gICAgICBsZWZ0OiAzJTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgXCI7XG4gICAgICAgICAgICB0aGlzLm1haW5Ib2xkZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2suc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogNSU7XFxuICAgICAgcmlnaHQ6IDMlO1xcbiAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ3LCAxMTcsIDE5MywgMC4yKTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udDogMjBweCBBcmlhbDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcIjtcbiAgICAgICAgICAgIHRoaXMuY2hlY2suaW5uZXJIVE1MID0gXCJWZXJpZnlcIjtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlci5hcHBlbmRDaGlsZCh0aGlzLmNoZWNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFZlcmlmaWNhdGlvblByb21wdDtcbiAgICB9KCkpO1xuICAgIHZhciB2ZXJpZnkgPSBuZXcgVmVyaWZpY2F0aW9uUHJvbXB0KCk7XG4gICAgLy92ZXJpZnkucHJlcGFyZSgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWdlQmFyQm9keVwiKS5zdHlsZS50cmFuc2l0aW9uID0gXCIwLjNzIGFsbFwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uQmFyXCIpLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==