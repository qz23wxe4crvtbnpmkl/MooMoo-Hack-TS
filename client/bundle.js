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
//import { findPlayerBySid } from "../FindPlayerBySID";
/* Building class */
var Building = /** @class */ (function () {
    function Building(sid, x, y, dir, scale, type, data, owner, isFake) {
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
            y: 0
        };
        this.isItem = (data.id !== null);
        this.objectType = data.trap || data.dmg || data.teleport;
        this.maxHealth = data.health;
        this.buildHealth = this.maxHealth;
        this.isTeamObject = function (tmpObj) {
            return false;
            //return tmpObj.sid === this.owner?.sid || this.isTeam(findPlayerBySid(tmpObj));
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
    ObjectManager.addBuilding = function (data) {
        var tmpObj = new _Building__WEBPACK_IMPORTED_MODULE_0__.Building(data[0], data[1], data[2], data[3], data[4], data[5], _UTILS_Items__WEBPACK_IMPORTED_MODULE_1__.Items[data[6]], (data[7] >= 0 ? {
            sid: data[7]
        } : null), false);
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
    Players.prototype.removePlayer = function (sid) {
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
}


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
            for (var i = 0; i < data.length;) {
                _Buildings_BuildingManager__WEBPACK_IMPORTED_MODULE_2__.ObjectManager.addBuilding(data[i]);
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
        else if (type === "6") {
            // RECEIVE CHAT:
            console.log(packetData);
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
    if (this.mod.decode(packet)[0] == "6" &&
        _badWords__WEBPACK_IMPORTED_MODULE_1__.badWords.some(function (word) {
            return _this.mod.decode(packet)[1][0].toLowerCase().includes(word);
        })) {
        var msg = this.mod.decode(packet)[1][0];
        this.send2(this.mod.encode(["6", [msg.charAt(0).toUpperCase() + msg.slice(1)]]));
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
    document.getElementById("gameName").innerHTML = "\n<img src=\"https://cdn.glitch.global/1d1dafa9-ba5a-47e7-a4e7-bcbf0851583d/%5Bremoval.ai%5D_f5b07bfb-d250-4a8f-8714-2b5f4e5af3d2-banner.png?v=1720093338201\">\n";
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
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQnVpbGRpbmdzL0J1aWxkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9CdWlsZGluZ3MvQnVpbGRpbmdNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF5ZXJzL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxheWVycy9QbGF5ZXJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF5ZXJzL3VwZGF0ZVBsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVVRJTFMvRmluZFBsYXllckJ5U0lELnRzIiwid2VicGFjazovLy8uL3NyYy9VVElMUy9JdGVtR3JvdXBzLnRzIiwid2VicGFjazovLy8uL3NyYy9VVElMUy9JdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFkV29yZHMudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBmaW5kUGxheWVyQnlTaWQgfSBmcm9tIFwiLi4vRmluZFBsYXllckJ5U0lEXCI7XG4vKiBCdWlsZGluZyBjbGFzcyAqL1xudmFyIEJ1aWxkaW5nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJ1aWxkaW5nKHNpZCwgeCwgeSwgZGlyLCBzY2FsZSwgdHlwZSwgZGF0YSwgb3duZXIsIGlzRmFrZSkge1xuICAgICAgICB0aGlzLnNpZCA9IHNpZDtcbiAgICAgICAgZGF0YSA9IGRhdGEgfHwge307IC8vIHNhZmUgaG9sZGVyIGluIGNhc2UgaXQncyBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5kaXIgPSBkaXI7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5ncm91cCA9IGRhdGEuZ3JvdXA7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgdGhpcy5pc0Zha2UgPSBpc0Zha2U7XG4gICAgICAgIHRoaXMuaXNBbGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53aWdnbGUgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlzSXRlbSA9IChkYXRhLmlkICE9PSBudWxsKTtcbiAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gZGF0YS50cmFwIHx8IGRhdGEuZG1nIHx8IGRhdGEudGVsZXBvcnQ7XG4gICAgICAgIHRoaXMubWF4SGVhbHRoID0gZGF0YS5oZWFsdGg7XG4gICAgICAgIHRoaXMuYnVpbGRIZWFsdGggPSB0aGlzLm1heEhlYWx0aDtcbiAgICAgICAgdGhpcy5pc1RlYW1PYmplY3QgPSBmdW5jdGlvbiAodG1wT2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAvL3JldHVybiB0bXBPYmouc2lkID09PSB0aGlzLm93bmVyPy5zaWQgfHwgdGhpcy5pc1RlYW0oZmluZFBsYXllckJ5U2lkKHRtcE9iaikpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gQnVpbGRpbmc7XG59KCkpO1xuZXhwb3J0IHsgQnVpbGRpbmcgfTtcbiIsIi8qKlxuICogSW1wb3J0c1xuICovXG5pbXBvcnQgeyBCdWlsZGluZyB9IGZyb20gXCIuL0J1aWxkaW5nXCI7IC8vIEltcG9ydCBCdWlsZGluZyBjbGFzc1xuaW1wb3J0IHsgSXRlbXMgfSBmcm9tIFwiLi4vVVRJTFMvSXRlbXNcIjsgLy8gSW1wb3J0IEdhbWUgSXRlbXNcbi8qKlxuICogQnVpbGRpbmcgTWFuYWdlciBjbGFzc1xuICpcbiAqIFRoaXMgY2xhc3MgbWFuYWdlcyBhIGNvbGxlY3Rpb24gb2YgZ2FtZSBvYmplY3RzIGFuZCBwcm92aWRlcyBtZXRob2RzIHRvIGFkZCwgcmVtb3ZlLCBhbmQgY2xlYXIgdGhlbS5cbiAqXG4gKiBAbWVtYmVyT2YgbW9kdWxlOk9iamVjdE1hbmFnZXJcbiAqL1xudmFyIE9iamVjdE1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogUHJpdmF0ZSBjb25zdHJ1Y3RvciB0byBwcmV2ZW50IGluc3RhbnRpYXRpb25cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gT2JqZWN0TWFuYWdlcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9iamVjdCBvZiByZWxldmFudCBnYW1lIG9iamVjdHNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVsZXZhbnRCdWlsZGluZ3MgPSBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBPYmplY3RNYW5hZ2VyIGNsYXNzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0TWFuYWdlcn0gVGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgT2JqZWN0TWFuYWdlciBjbGFzc1xuICAgICAqIEBtZW1iZXJPZiBPYmplY3RNYW5hZ2VyXG4gICAgICogQGV4YW1wbGUgT2JqZWN0TWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gICAgICovXG4gICAgT2JqZWN0TWFuYWdlci5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFPYmplY3RNYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBPYmplY3RNYW5hZ2VyLmluc3RhbmNlID0gbmV3IE9iamVjdE1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0TWFuYWdlci5pbnN0YW5jZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSBidWlsZGluZyBnYW1lIG9iamVjdCB0byB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnlbXX0gZGF0YSBUaGUgZGF0YSB0byBjcmVhdGUgdGhlIGJ1aWxkaW5nIGdhbWUgb2JqZWN0XG4gICAgICogQG1lbWJlck9mIE9iamVjdE1hbmFnZXJcbiAgICAgKiBAZXhhbXBsZSBPYmplY3RNYW5hZ2VyLmdldEluc3RhbmNlKCkuYWRkQnVpbGRpbmcoWzEyMzQsIC4uLl0pO1xuICAgICAqL1xuICAgIE9iamVjdE1hbmFnZXIuYWRkQnVpbGRpbmcgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgdG1wT2JqID0gbmV3IEJ1aWxkaW5nKGRhdGFbMF0sIGRhdGFbMV0sIGRhdGFbMl0sIGRhdGFbM10sIGRhdGFbNF0sIGRhdGFbNV0sIEl0ZW1zW2RhdGFbNl1dLCAoZGF0YVs3XSA+PSAwID8ge1xuICAgICAgICAgICAgc2lkOiBkYXRhWzddXG4gICAgICAgIH0gOiBudWxsKSwgZmFsc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyh0bXBPYmopO1xuICAgICAgICBPYmplY3RNYW5hZ2VyLkJ1aWxkaW5ncy5wdXNoKHRtcE9iaik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgZ2FtZSBvYmplY3QgZnJvbSB0aGUgY29sbGVjdGlvbiBieSBTSURcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWQgVGhlIFNJRCBvZiB0aGUgZ2FtZSBvYmplY3QgdG8gcmVtb3ZlXG4gICAgICogQG1lbWJlck9mIE9iamVjdE1hbmFnZXJcbiAgICAgKiBAZXhhbXBsZSBPYmplY3RNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVtb3ZlR2FtZU9iamVjdCgxMjMpO1xuICAgICAqL1xuICAgIE9iamVjdE1hbmFnZXIucHJvdG90eXBlLnJlbW92ZUJ1aWxkaW5nID0gZnVuY3Rpb24gKHNpZCkgeyB9O1xuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgZ2FtZSBvYmplY3RzIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBPYmplY3RNYW5hZ2VyXG4gICAgICogQGV4YW1wbGUgT2JqZWN0TWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlbW92ZUFsbE9iamVjdHMoMTApO1xuICAgICAqL1xuICAgIE9iamVjdE1hbmFnZXIucHJvdG90eXBlLnJlbW92ZUFsbEJ1aWxkaW5ncyA9IGZ1bmN0aW9uIChzaWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgT2JqZWN0TWFuYWdlci5CdWlsZGluZ3MuZm9yRWFjaChmdW5jdGlvbiAodG1wT2JqKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoKChfYSA9IHRtcE9iaiA9PT0gbnVsbCB8fCB0bXBPYmogPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRtcE9iai5vd25lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNpZCkgPT09IHNpZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZUJ1aWxkaW5nKHRtcE9iai5zaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIGdhbWUgb2JqZWN0c1xuICAgICAqL1xuICAgIE9iamVjdE1hbmFnZXIuQnVpbGRpbmdzID0gW107XG4gICAgcmV0dXJuIE9iamVjdE1hbmFnZXI7XG59KCkpO1xuZXhwb3J0IHsgT2JqZWN0TWFuYWdlciB9O1xuIiwiLyogUGxheWVyIGNsYXNzICovXG52YXIgUGxheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBsYXllcihzaWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zaWQgPSBzaWQ7XG4gICAgICAgIHRoaXMuaXNUZWFtID0gZnVuY3Rpb24gKHRtcE9iaikge1xuICAgICAgICAgICAgcmV0dXJuICh0bXBPYmouc2lkID09PSBfdGhpcy5zaWQgfHwgKHRtcE9iai50ZWFtICYmIHRtcE9iai50ZWFtID09PSBfdGhpcy50ZWFtKSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIElOSVQ6XG4gICAgICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uIChpZCwgbmFtZSwgeCwgeSwgZGlyLCBoZWFsdGgsIG1heEhlYWx0aCwgc2NhbGUsIHNraW5Db2xvcikge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gZGlyO1xuICAgICAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XG4gICAgICAgICAgICB0aGlzLm1heEhlYWx0aCA9IG1heEhlYWx0aDtcbiAgICAgICAgICAgIHRoaXMubGFzdEhlYWx0aCA9IHRoaXMuaGVhbHRoO1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgICAgICB0aGlzLngyID0geDtcbiAgICAgICAgICAgIHRoaXMueTIgPSB5O1xuICAgICAgICAgICAgdGhpcy54MyA9IDA7XG4gICAgICAgICAgICB0aGlzLnkzID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2tpbkluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMubGFzdFNraW5JbmRleCA9IHRoaXMuc2tpbkluZGV4O1xuICAgICAgICAgICAgdGhpcy50YWlsSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXN0VGFpbEluZGV4ID0gdGhpcy50YWlsSW5kZXg7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBQbGF5ZXI7XG59KCkpO1xuZXhwb3J0IHsgUGxheWVyIH07XG4iLCIvKipcbiAqIEltcG9ydHNcbiAqL1xuaW1wb3J0IHsgZmluZFBsYXllckJ5U2lkIH0gZnJvbSBcIi4uL1VUSUxTL0ZpbmRQbGF5ZXJCeVNJRFwiOyAvLyBJbXBvcnQgZnVuY3Rpb24gdG8gZmluZCBhIHBsYXllciBieSB0aGVpciBTSURcbmltcG9ydCB7IHVwZGF0ZVBsYXllciB9IGZyb20gXCIuL3VwZGF0ZVBsYXllclwiOyAvLyBJbXBvcnQgZnVuY3Rpb24gdG8gdXBkYXRlIGEgcGxheWVyJ3MgaW5mb3JtYXRpb25cbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiOyAvLyBJbXBvcnQgcGxheWVyIGNsYXNzXG4vKipcbiAqIFBsYXllciBNYW5hZ2VyIGNsYXNzXG4gKlxuICogVGhpcyBjbGFzcyBtYW5hZ2VzIGEgY29sbGVjdGlvbiBvZiBwbGF5ZXJzIGFuZCBwcm92aWRlcyBtZXRob2RzIHRvIGFkZCwgcmVtb3ZlLCBhbmQgdXBkYXRlIHBsYXllcnMuXG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTpQbGF5ZXJzXG4gKi9cbnZhciBQbGF5ZXJzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBsYXllcnMoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgUGxheWVycyBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybnMge1BsYXllcnN9IFRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFBsYXllcnMgY2xhc3NcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIGNvbnN0IHBsYXllcnMgPSBQbGF5ZXJzLmdldEluc3RhbmNlKCk7XG4gICAgICovXG4gICAgUGxheWVycy5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFQbGF5ZXJzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBQbGF5ZXJzLmluc3RhbmNlID0gbmV3IFBsYXllcnMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGxheWVycy5pbnN0YW5jZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSBwbGF5ZXIgdG8gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBTSUQgVGhlIFNJRCBmb3IgdGhlIHBsYXllclxuICAgICAqIEBwYXJhbSB7YW55W119IGRhdGEgVGhlIHBsYXllcidzIGRhdGFcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIHBsYXllcnMuYWRkUGxheWVyKDEsIHsgbmFtZTogXCJPbmlvblwiLCBza2luOiBcIl9fcHJvdG9fX1wifSk7XG4gICAgICovXG4gICAgUGxheWVycy5hZGRQbGF5ZXIgPSBmdW5jdGlvbiAoU0lELCBkYXRhKSB7XG4gICAgICAgIC8qIERhdGEgZm9ybWF0OlxuICAgIFxuICAgICAgICAgIDA6IHtpZCwgc2lkLCBuYW1lLCB4LCB5LCBzb21ldGhpbmcsIGhlYWx0aCwgc29tZXRoaW5nLCBzY2FsZT8sIHNvbWV0aGluZ31cbiAgICAgICAgICAxOiB0cnVlL2ZhbHNlIGZvciB5ZXMvbm8gaXMgbWVcbiAgICAgICAgICAqL1xuICAgICAgICBpZiAoZGF0YVsxXSkge1xuICAgICAgICAgICAgLy8gTVkgUExBWUVSOlxuICAgICAgICAgICAgUGxheWVycy5teVBsYXllciA9IG5ldyBQbGF5ZXIoU0lEKTtcbiAgICAgICAgICAgIFBsYXllcnMucGxheWVycy5wdXNoKFBsYXllcnMubXlQbGF5ZXIpO1xuICAgICAgICAgICAgLy8gSU5JVDpcbiAgICAgICAgICAgIFBsYXllcnMubXlQbGF5ZXIuaW5pdChkYXRhWzBdWzBdLCBkYXRhWzBdWzJdLCBkYXRhWzBdWzNdLCBkYXRhWzBdWzRdLCBkYXRhWzBdWzVdLCBkYXRhWzBdWzZdLCBkYXRhWzBdWzddLCBkYXRhWzBdWzhdLCBkYXRhWzBdWzldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0bXBPYmogPSBuZXcgUGxheWVyKFNJRCk7XG4gICAgICAgICAgICBQbGF5ZXJzLnBsYXllcnMucHVzaCh0bXBPYmopO1xuICAgICAgICAgICAgdG1wT2JqLmluaXQoZGF0YVswXVswXSwgZGF0YVswXVsyXSwgZGF0YVswXVszXSwgZGF0YVswXVs0XSwgZGF0YVswXVs1XSwgZGF0YVswXVs2XSwgZGF0YVswXVs3XSwgZGF0YVswXVs4XSwgZGF0YVswXVs5XSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBwbGF5ZXIgZnJvbSB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpZCBUaGUgU0lEIGZvciB0aGUgcGxheWVyIHRvIHJlbW92ZVxuICAgICAqIEBtZW1iZXJPZiBQbGF5ZXJzXG4gICAgICogQGV4YW1wbGUgcGxheWVycy5yZW1vdmVQbGF5ZXIoMTApO1xuICAgICAqL1xuICAgIFBsYXllcnMucHJvdG90eXBlLnJlbW92ZVBsYXllciA9IGZ1bmN0aW9uIChzaWQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gUGxheWVycy5wbGF5ZXJzLmluZGV4T2YoUGxheWVycy5wbGF5ZXJzLmZpbmQoZnVuY3Rpb24gKHBsYXllcikgeyByZXR1cm4gcGxheWVyLnNpZCA9PT0gc2lkOyB9KSwgMCk7XG4gICAgICAgIGRlbGV0ZSBQbGF5ZXJzLnBsYXllcnNbaW5kZXhdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGxheWVycyBpbiB0aGUgY29sbGVjdGlvbiBiYXNlZCBvbiBuZXcgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnlbXX0gZGF0YSBUaGUgbmV3IGRhdGEgdG8gdXBkYXRlIHRoZSBwbGF5ZXJzIHdpdGhcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIHBsYXllcnMudXBkYXRlUGxheWVycyh0bXBQbGF5ZXIpO1xuICAgICAqL1xuICAgIFBsYXllcnMudXBkYXRlUGxheWVycyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIFVucmVuZGVyIGFsbCBwbGF5ZXJzIGFuZCByZXJlbmRlciBwbGF5ZXJzIGluIHJhbmdlXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgdG1wUGxheWVyID0gdGhpcy5wbGF5ZXJzW2ldO1xuICAgICAgICAgICAgdG1wUGxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDEzKSB7XG4gICAgICAgICAgICB2YXIgdG1wUGxheWVyID0gZmluZFBsYXllckJ5U2lkKGRhdGFbMF0pO1xuICAgICAgICAgICAgaWYgKHRtcFBsYXllcikge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVBsYXllcih0bXBQbGF5ZXIsIGRhdGEsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBwbGF5ZXJzXG4gICAgICovXG4gICAgUGxheWVycy5wbGF5ZXJzID0gW107XG4gICAgLyoqXG4gICAgICogTXkgcGxheWVyXG4gICAgICovXG4gICAgUGxheWVycy5teVBsYXllciA9IHt9O1xuICAgIHJldHVybiBQbGF5ZXJzO1xufSgpKTtcbmV4cG9ydCB7IFBsYXllcnMgfTtcbiIsImV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQbGF5ZXIocGxheWVyLCBkYXRhLCBpbmRleCkge1xuICAgIHBsYXllci50MSA9IHBsYXllci50MiA9PT0gdm9pZCAwID8gRGF0ZS5ub3coKSA6IHBsYXllci50MjtcbiAgICBwbGF5ZXIudDIgPSBEYXRlLm5vdygpO1xuICAgIHBsYXllci5sYXNQb3MgPSB7XG4gICAgICAgIHg6IHBsYXllci54MixcbiAgICAgICAgeTogcGxheWVyLnkyLFxuICAgIH07XG4gICAgcGxheWVyLngyID0gZGF0YVtpbmRleCArIDFdO1xuICAgIHBsYXllci55MiA9IGRhdGFbaW5kZXggKyAyXTtcbiAgICBwbGF5ZXIuZDEgPSBwbGF5ZXIuZDIgPT09IHZvaWQgMCA/IGRhdGFbaW5kZXggKyAzXSA6IHBsYXllci5kMjtcbiAgICBwbGF5ZXIuZGVsdGEgPSAwO1xuICAgIHBsYXllci53ZWFwb25JbmRleCA9IGRhdGFbaW5kZXggKyA1XTtcbiAgICBwbGF5ZXIud2VhcG9uSW5kZXggPCA5ICYmIChwbGF5ZXIud2VhcG9uc1swXSA9IHBsYXllci53ZWFwb25JbmRleCk7XG4gICAgcGxheWVyLndlYXBvbkluZGV4ID49IDkgJiYgKHBsYXllci53ZWFwb25zWzFdID0gcGxheWVyLndlYXBvbkluZGV4KTtcbiAgICBwbGF5ZXIud2VhcG9uVmFyaWFudCA9IGRhdGFbaW5kZXggKyA2XTtcbiAgICBwbGF5ZXIudGVhbSA9IGRhdGFbaW5kZXggKyA3XTtcbiAgICBwbGF5ZXIubGFzdFNraW5JbmRleCA9IHBsYXllci5za2luSW5kZXg7XG4gICAgcGxheWVyLnNraW5JbmRleCA9IGRhdGFbaW5kZXggKyA5XTtcbiAgICBwbGF5ZXIubGFzdFRhaWxJbmRleCA9IHBsYXllci50YWlsSW5kZXg7XG4gICAgcGxheWVyLnRhaWxJbmRleCA9IGRhdGFbaW5kZXggKyAxMF07XG4gICAgcGxheWVyLnZpc2libGUgPSB0cnVlO1xufVxuIiwiLyoqXG4gKiBJbXBvcnRzIHRoZSBQbGF5ZXJzIGNsYXNzXG4gKi9cbmltcG9ydCB7IFBsYXllcnMgfSBmcm9tIFwiLi4vUGxheWVycy9QbGF5ZXJNYW5hZ2VyXCI7XG4vKipcbiAqIEZpbmRzIGEgcGxheWVyIGJ5IHRoZWlyIFNJRFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaWQgVGhlIFNJRCBvZiB0aGUgcGxheWVyIHRvIGZpbmRcbiAqIEByZXR1cm5zIHthbnl9IFRoZSBwbGF5ZXIgd2l0aCB0aGUgbWF0Y2hpbmcgU0lELCBvciB1bmRlZmluZWQgaWYgbm90IGZvdW5kXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkZpbmRQbGF5ZXJCeVNJRFxuICogQGV4YW1wbGUgZmluZFBsYXllckJ5U2lkKDEyMyk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGxheWVyQnlTaWQoc2lkKSB7XG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgZmluZCBtZXRob2QgdG8gc2VhcmNoIHRoZSBwbGF5ZXJzIGFycmF5IGZvciBhIHBsYXllciB3aXRoIGEgbWF0Y2hpbmcgU0lEXG4gICAgICovXG4gICAgcmV0dXJuIFBsYXllcnMucGxheWVycy5maW5kKGZ1bmN0aW9uIChwbGF5ZXIpIHsgcmV0dXJuIHBsYXllci5zaWQgPT09IHNpZDsgfSk7XG59XG4iLCJleHBvcnQgdmFyIGl0ZW1Hcm91cHMgPSBbXG4gICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogXCJmb29kXCIsXG4gICAgICAgIGxheWVyOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogXCJ3YWxsc1wiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAzMCxcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiBcInNwaWtlc1wiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAxNSxcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiBcIm1pbGxcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogNyxcbiAgICAgICAgc2FuZGJveExpbWl0OiAyOTksXG4gICAgICAgIGxheWVyOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogXCJtaW5lXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDEsXG4gICAgICAgIGxheWVyOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogXCJ0cmFwXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDYsXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIG5hbWU6IFwiYm9vc3RlclwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAxMixcbiAgICAgICAgc2FuZGJveExpbWl0OiAyOTksXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIG5hbWU6IFwidHVycmV0XCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDIsXG4gICAgICAgIGxheWVyOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogOCxcbiAgICAgICAgbmFtZTogXCJ3YXRjaHRvd2VyXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDEyLFxuICAgICAgICBsYXllcjogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIG5hbWU6IFwiYnVmZlwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiA0LFxuICAgICAgICBsYXllcjogLTEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMCxcbiAgICAgICAgbmFtZTogXCJzcGF3blwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAxLFxuICAgICAgICBsYXllcjogLTEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMSxcbiAgICAgICAgbmFtZTogXCJzYXBsaW5nXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDIsXG4gICAgICAgIGxheWVyOiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTIsXG4gICAgICAgIG5hbWU6IFwiYmxvY2tlclwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiAzLFxuICAgICAgICBsYXllcjogLTEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMyxcbiAgICAgICAgbmFtZTogXCJ0ZWxlcG9ydGVyXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDIsXG4gICAgICAgIHNhbmRib3hMaW1pdDogMjk5LFxuICAgICAgICBsYXllcjogLTEsXG4gICAgfSxcbl07XG4iLCJpbXBvcnQgeyBpdGVtR3JvdXBzIH0gZnJvbSBcIi4vSXRlbUdyb3Vwc1wiO1xuZXhwb3J0IHZhciBJdGVtcyA9IFtcbiAgICB7XG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzBdLFxuICAgICAgICBuYW1lOiBcImFwcGxlXCIsXG4gICAgICAgIGRlc2M6IFwicmVzdG9yZXMgMjAgaGVhbHRoIHdoZW4gY29uc3VtZWRcIixcbiAgICAgICAgcmVxOiBbXCJmb29kXCIsIDEwXSxcbiAgICAgICAgY29uc3VtZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LmNoYW5nZUhlYWx0aCgyMCwgdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhlYWxpbmc6IDIwLFxuICAgICAgICBzY2FsZTogMjIsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDE1LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDMsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzBdLFxuICAgICAgICBuYW1lOiBcImNvb2tpZVwiLFxuICAgICAgICBkZXNjOiBcInJlc3RvcmVzIDQwIGhlYWx0aCB3aGVuIGNvbnN1bWVkXCIsXG4gICAgICAgIHJlcTogW1wiZm9vZFwiLCAxNV0sXG4gICAgICAgIGNvbnN1bWU6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdC5jaGFuZ2VIZWFsdGgoNDAsIHQpO1xuICAgICAgICB9LFxuICAgICAgICBoZWFsaW5nOiA0MCxcbiAgICAgICAgc2NhbGU6IDI3LFxuICAgICAgICBob2xkT2Zmc2V0OiAxNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1swXSxcbiAgICAgICAgbmFtZTogXCJjaGVlc2VcIixcbiAgICAgICAgZGVzYzogXCJyZXN0b3JlcyAzMCBoZWFsdGggYW5kIGFub3RoZXIgNTAgb3ZlciA1IHNlY29uZHNcIixcbiAgICAgICAgcmVxOiBbXCJmb29kXCIsIDI1XSxcbiAgICAgICAgY29uc3VtZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiAoKCEhdC5jaGFuZ2VIZWFsdGgoMzAsIHQpIHx8IHQuaGVhbHRoIDwgMTAwKSAmJlxuICAgICAgICAgICAgICAgICgodC5kbWdPdmVyVGltZS5kbWcgPSAtMTApLFxuICAgICAgICAgICAgICAgICAgICAodC5kbWdPdmVyVGltZS5kb2VyID0gdCksXG4gICAgICAgICAgICAgICAgICAgICh0LmRtZ092ZXJUaW1lLnRpbWUgPSA1KSxcbiAgICAgICAgICAgICAgICAgICAgITApKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGVhbGluZzogMzAsXG4gICAgICAgIHNjYWxlOiAyNyxcbiAgICAgICAgaG9sZE9mZnNldDogMTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzFdLFxuICAgICAgICBuYW1lOiBcIndvb2Qgd2FsbFwiLFxuICAgICAgICBkZXNjOiBcInByb3ZpZGVzIHByb3RlY3Rpb24gZm9yIHlvdXIgdmlsbGFnZVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMTBdLFxuICAgICAgICBwcm9qRG1nOiAhMCxcbiAgICAgICAgaGVhbHRoOiAzODAsXG4gICAgICAgIHNjYWxlOiA1MCxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiAzLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxXSxcbiAgICAgICAgbmFtZTogXCJzdG9uZSB3YWxsXCIsXG4gICAgICAgIGRlc2M6IFwicHJvdmlkZXMgaW1wcm92ZWQgcHJvdGVjdGlvbiBmb3IgeW91ciB2aWxsYWdlXCIsXG4gICAgICAgIHJlcTogW1wic3RvbmVcIiwgMjVdLFxuICAgICAgICBoZWFsdGg6IDkwMCxcbiAgICAgICAgc2NhbGU6IDUwLFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDcsXG4gICAgICAgIHByZTogMSxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMV0sXG4gICAgICAgIG5hbWU6IFwiY2FzdGxlIHdhbGxcIixcbiAgICAgICAgZGVzYzogXCJwcm92aWRlcyBwb3dlcmZ1bCBwcm90ZWN0aW9uIGZvciB5b3VyIHZpbGxhZ2VcIixcbiAgICAgICAgcmVxOiBbXCJzdG9uZVwiLCAzNV0sXG4gICAgICAgIGhlYWx0aDogMTUwMCxcbiAgICAgICAgc2NhbGU6IDUyLFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1syXSxcbiAgICAgICAgbmFtZTogXCJzcGlrZXNcIixcbiAgICAgICAgZGVzYzogXCJkYW1hZ2VzIGVuZW1pZXMgd2hlbiB0aGV5IHRvdWNoIHRoZW1cIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDIwLCBcInN0b25lXCIsIDVdLFxuICAgICAgICBoZWFsdGg6IDQwMCxcbiAgICAgICAgZG1nOiAyMCxcbiAgICAgICAgc2NhbGU6IDQ5LFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAtMjMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDgsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA1LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1syXSxcbiAgICAgICAgbmFtZTogXCJncmVhdGVyIHNwaWtlc1wiLFxuICAgICAgICBkZXNjOiBcImRhbWFnZXMgZW5lbWllcyB3aGVuIHRoZXkgdG91Y2ggdGhlbVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMzAsIFwic3RvbmVcIiwgMTBdLFxuICAgICAgICBoZWFsdGg6IDUwMCxcbiAgICAgICAgZG1nOiAzNSxcbiAgICAgICAgc2NhbGU6IDUyLFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAtMjMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDgsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA5LFxuICAgICAgICBwcmU6IDEsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzJdLFxuICAgICAgICBuYW1lOiBcInBvaXNvbiBzcGlrZXNcIixcbiAgICAgICAgZGVzYzogXCJwb2lzb25zIGVuZW1pZXMgd2hlbiB0aGV5IHRvdWNoIHRoZW1cIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDM1LCBcInN0b25lXCIsIDE1XSxcbiAgICAgICAgaGVhbHRoOiA2MDAsXG4gICAgICAgIGRtZzogMzAsXG4gICAgICAgIHBEbWc6IDUsXG4gICAgICAgIHNjYWxlOiA1MixcbiAgICAgICAgc3ByaXRlUGFkZGluZzogLTIzLFxuICAgICAgICBob2xkT2Zmc2V0OiA4LFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogOSxcbiAgICAgICAgcHJlOiAyLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1syXSxcbiAgICAgICAgbmFtZTogXCJzcGlubmluZyBzcGlrZXNcIixcbiAgICAgICAgZGVzYzogXCJkYW1hZ2VzIGVuZW1pZXMgd2hlbiB0aGV5IHRvdWNoIHRoZW1cIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDMwLCBcInN0b25lXCIsIDIwXSxcbiAgICAgICAgaGVhbHRoOiA1MDAsXG4gICAgICAgIGRtZzogNDUsXG4gICAgICAgIHR1cm5TcGVlZDogMC4wMDMsXG4gICAgICAgIHNjYWxlOiA1MixcbiAgICAgICAgc3ByaXRlUGFkZGluZzogLTIzLFxuICAgICAgICBob2xkT2Zmc2V0OiA4LFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzNdLFxuICAgICAgICBuYW1lOiBcIndpbmRtaWxsXCIsXG4gICAgICAgIGRlc2M6IFwiZ2VuZXJhdGVzIGdvbGQgb3ZlciB0aW1lXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCA1MCwgXCJzdG9uZVwiLCAxMF0sXG4gICAgICAgIGhlYWx0aDogNDAwLFxuICAgICAgICBwcHM6IDEsXG4gICAgICAgIHR1cm5TcGVlZDogMC4wMDE2LFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAyNSxcbiAgICAgICAgaWNvbkxpbmVNdWx0OiAxMixcbiAgICAgICAgc2NhbGU6IDQ1LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IDUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNSxcbiAgICAgICAgcHJlOiAxLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1szXSxcbiAgICAgICAgbmFtZTogXCJmYXN0ZXIgd2luZG1pbGxcIixcbiAgICAgICAgZGVzYzogXCJnZW5lcmF0ZXMgbW9yZSBnb2xkIG92ZXIgdGltZVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgNjAsIFwic3RvbmVcIiwgMjBdLFxuICAgICAgICBoZWFsdGg6IDUwMCxcbiAgICAgICAgcHBzOiAxLjUsXG4gICAgICAgIHR1cm5TcGVlZDogMC4wMDI1LFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAyNSxcbiAgICAgICAgaWNvbkxpbmVNdWx0OiAxMixcbiAgICAgICAgc2NhbGU6IDQ3LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IDUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogOCxcbiAgICAgICAgcHJlOiAxLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1szXSxcbiAgICAgICAgbmFtZTogXCJwb3dlciBtaWxsXCIsXG4gICAgICAgIGRlc2M6IFwiZ2VuZXJhdGVzIG1vcmUgZ29sZCBvdmVyIHRpbWVcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDEwMCwgXCJzdG9uZVwiLCA1MF0sXG4gICAgICAgIGhlYWx0aDogODAwLFxuICAgICAgICBwcHM6IDIsXG4gICAgICAgIHR1cm5TcGVlZDogMC4wMDUsXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IDI1LFxuICAgICAgICBpY29uTGluZU11bHQ6IDEyLFxuICAgICAgICBzY2FsZTogNDcsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA1LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s0XSxcbiAgICAgICAgdHlwZTogMixcbiAgICAgICAgbmFtZTogXCJtaW5lXCIsXG4gICAgICAgIGRlc2M6IFwiYWxsb3dzIHlvdSB0byBtaW5lIHN0b25lXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAyMCwgXCJzdG9uZVwiLCAxMDBdLFxuICAgICAgICBpY29uTGluZU11bHQ6IDEyLFxuICAgICAgICBzY2FsZTogNjUsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA1LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxMV0sXG4gICAgICAgIHR5cGU6IDAsXG4gICAgICAgIG5hbWU6IFwic2FwbGluZ1wiLFxuICAgICAgICBkZXNjOiBcImFsbG93cyB5b3UgdG8gZmFybSB3b29kXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAxNTBdLFxuICAgICAgICBpY29uTGluZU11bHQ6IDEyLFxuICAgICAgICBjb2xEaXY6IDAuNSxcbiAgICAgICAgc2NhbGU6IDExMCxcbiAgICAgICAgaG9sZE9mZnNldDogNTAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtMTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNCxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbNV0sXG4gICAgICAgIG5hbWU6IFwicGl0IHRyYXBcIixcbiAgICAgICAgZGVzYzogXCJwaXQgdGhhdCB0cmFwcyBlbmVtaWVzIGlmIHRoZXkgd2FsayBvdmVyIGl0XCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAzMCwgXCJzdG9uZVwiLCAzMF0sXG4gICAgICAgIHRyYXA6ICEwLFxuICAgICAgICBpZ25vcmVDb2xsaXNpb246ICEwLFxuICAgICAgICBoaWRlRnJvbUVuZW15OiAhMCxcbiAgICAgICAgaGVhbHRoOiA1MDAsXG4gICAgICAgIGNvbERpdjogMC4yLFxuICAgICAgICBzY2FsZTogNTAsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNCxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbNl0sXG4gICAgICAgIG5hbWU6IFwiYm9vc3QgcGFkXCIsXG4gICAgICAgIGRlc2M6IFwicHJvdmlkZXMgYm9vc3Qgd2hlbiBzdGVwcGVkIG9uXCIsXG4gICAgICAgIHJlcTogW1wic3RvbmVcIiwgMjAsIFwid29vZFwiLCA1XSxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgYm9vc3RTcGVlZDogMS41LFxuICAgICAgICBoZWFsdGg6IDE1MCxcbiAgICAgICAgY29sRGl2OiAwLjcsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s3XSxcbiAgICAgICAgZG9VcGRhdGU6ICEwLFxuICAgICAgICBuYW1lOiBcInR1cnJldFwiLFxuICAgICAgICBkZXNjOiBcImRlZmVuc2l2ZSBzdHJ1Y3R1cmUgdGhhdCBzaG9vdHMgYXQgZW5lbWllc1wiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMjAwLCBcInN0b25lXCIsIDE1MF0sXG4gICAgICAgIGhlYWx0aDogODAwLFxuICAgICAgICBwcm9qZWN0aWxlOiAxLFxuICAgICAgICBzaG9vdFJhbmdlOiA3MDAsXG4gICAgICAgIHNob290UmF0ZTogMjIwMCxcbiAgICAgICAgc2NhbGU6IDQzLFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDcsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzhdLFxuICAgICAgICBuYW1lOiBcInBsYXRmb3JtXCIsXG4gICAgICAgIGRlc2M6IFwicGxhdGZvcm0gdG8gc2hvb3Qgb3ZlciB3YWxscyBhbmQgY3Jvc3Mgb3ZlciB3YXRlclwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMjBdLFxuICAgICAgICBpZ25vcmVDb2xsaXNpb246ICEwLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIGhlYWx0aDogMzAwLFxuICAgICAgICBzY2FsZTogNDMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbOV0sXG4gICAgICAgIG5hbWU6IFwiaGVhbGluZyBwYWRcIixcbiAgICAgICAgZGVzYzogXCJzdGFuZGluZyBvbiBpdCB3aWxsIHNsb3dseSBoZWFsIHlvdVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMzAsIFwiZm9vZFwiLCAxMF0sXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIGhlYWxDb2w6IDE1LFxuICAgICAgICBoZWFsdGg6IDQwMCxcbiAgICAgICAgY29sRGl2OiAwLjcsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA5LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxMF0sXG4gICAgICAgIG5hbWU6IFwic3Bhd24gcGFkXCIsXG4gICAgICAgIGRlc2M6IFwieW91IHdpbGwgc3Bhd24gaGVyZSB3aGVuIHlvdSBkaWUgYnV0IGl0IHdpbGwgZGlzc2FwZWFyXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAxMDAsIFwic3RvbmVcIiwgMTAwXSxcbiAgICAgICAgaGVhbHRoOiA0MDAsXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIHNwYXduUG9pbnQ6ICEwLFxuICAgICAgICBzY2FsZTogNDUsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMTJdLFxuICAgICAgICBuYW1lOiBcImJsb2NrZXJcIixcbiAgICAgICAgZGVzYzogXCJibG9ja3MgYnVpbGRpbmcgaW4gcmFkaXVzXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAzMCwgXCJzdG9uZVwiLCAyNV0sXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIGJsb2NrZXI6IDMwMCxcbiAgICAgICAgaGVhbHRoOiA0MDAsXG4gICAgICAgIGNvbERpdjogMC43LFxuICAgICAgICBzY2FsZTogNDUsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMTNdLFxuICAgICAgICBuYW1lOiBcInRlbGVwb3J0ZXJcIixcbiAgICAgICAgZGVzYzogXCJ0ZWxlcG9ydHMgeW91IHRvIGEgcmFuZG9tIHBvaW50IG9uIHRoZSBtYXBcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDYwLCBcInN0b25lXCIsIDYwXSxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgdGVsZXBvcnQ6ICEwLFxuICAgICAgICBoZWFsdGg6IDIwMCxcbiAgICAgICAgY29sRGl2OiAwLjcsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuXTtcbiIsImV4cG9ydCB2YXIgYmFkV29yZHMgPSBbXG4gICAgXCJhaG9sZVwiLFxuICAgIFwiYW51c1wiLFxuICAgIFwiYXNoMGxlXCIsXG4gICAgXCJhc2gwbGVzXCIsXG4gICAgXCJhc2hvbGVzXCIsXG4gICAgXCJhc3NcIixcbiAgICBcIkFzcyBNb25rZXlcIixcbiAgICBcIkFzc2ZhY2VcIixcbiAgICBcImFzc2gwbGVcIixcbiAgICBcImFzc2gwbGV6XCIsXG4gICAgXCJhc3Nob2xlXCIsXG4gICAgXCJhc3Nob2xlc1wiLFxuICAgIFwiYXNzaG9selwiLFxuICAgIFwiYXNzd2lwZVwiLFxuICAgIFwiYXp6aG9sZVwiLFxuICAgIFwiYmFzc3RlcmRzXCIsXG4gICAgXCJiYXN0YXJkXCIsXG4gICAgXCJiYXN0YXJkc1wiLFxuICAgIFwiYmFzdGFyZHpcIixcbiAgICBcImJhc3RlcmRzXCIsXG4gICAgXCJiYXN0ZXJkelwiLFxuICAgIFwiQmlhdGNoXCIsXG4gICAgXCJiaXRjaFwiLFxuICAgIFwiYml0Y2hlc1wiLFxuICAgIFwiQmxvdyBKb2JcIixcbiAgICBcImJvZmZpbmdcIixcbiAgICBcImJ1dHRob2xlXCIsXG4gICAgXCJidXR0d2lwZVwiLFxuICAgIFwiYzBja1wiLFxuICAgIFwiYzBja3NcIixcbiAgICBcImMwa1wiLFxuICAgIFwiQ2FycGV0IE11bmNoZXJcIixcbiAgICBcImNhd2tcIixcbiAgICBcImNhd2tzXCIsXG4gICAgXCJDbGl0XCIsXG4gICAgXCJjbnRzXCIsXG4gICAgXCJjbnR6XCIsXG4gICAgXCJjb2NrXCIsXG4gICAgXCJjb2NraGVhZFwiLFxuICAgIFwiY29jay1oZWFkXCIsXG4gICAgXCJjb2Nrc1wiLFxuICAgIFwiQ29ja1N1Y2tlclwiLFxuICAgIFwiY29jay1zdWNrZXJcIixcbiAgICBcImNyYXBcIixcbiAgICBcImN1bVwiLFxuICAgIFwiY3VudFwiLFxuICAgIFwiY3VudHNcIixcbiAgICBcImN1bnR6XCIsXG4gICAgXCJkaWNrXCIsXG4gICAgXCJkaWxkMFwiLFxuICAgIFwiZGlsZDBzXCIsXG4gICAgXCJkaWxkb1wiLFxuICAgIFwiZGlsZG9zXCIsXG4gICAgXCJkaWxsZDBcIixcbiAgICBcImRpbGxkMHNcIixcbiAgICBcImRvbWluYXRyaWNrc1wiLFxuICAgIFwiZG9taW5hdHJpY3NcIixcbiAgICBcImRvbWluYXRyaXhcIixcbiAgICBcImR5a2VcIixcbiAgICBcImVuZW1hXCIsXG4gICAgXCJmIHUgYyBrXCIsXG4gICAgXCJmIHUgYyBrIGUgclwiLFxuICAgIFwiZmFnXCIsXG4gICAgXCJmYWcxdFwiLFxuICAgIFwiZmFnZXRcIixcbiAgICBcImZhZ2cxdFwiLFxuICAgIFwiZmFnZ2l0XCIsXG4gICAgXCJmYWdnb3RcIixcbiAgICBcImZhZ2cwdFwiLFxuICAgIFwiZmFnaXRcIixcbiAgICBcImZhZ3NcIixcbiAgICBcImZhZ3pcIixcbiAgICBcImZhaWdcIixcbiAgICBcImZhaWdzXCIsXG4gICAgXCJmYXJ0XCIsXG4gICAgXCJmbGlwcGluZyB0aGUgYmlyZFwiLFxuICAgIFwiZnVja1wiLFxuICAgIFwiZnVja2VyXCIsXG4gICAgXCJmdWNraW5cIixcbiAgICBcImZ1Y2tpbmdcIixcbiAgICBcImZ1Y2tzXCIsXG4gICAgXCJGdWRnZSBQYWNrZXJcIixcbiAgICBcImZ1a1wiLFxuICAgIFwiRnVrYWhcIixcbiAgICBcIkZ1a2VuXCIsXG4gICAgXCJmdWtlclwiLFxuICAgIFwiRnVraW5cIixcbiAgICBcIkZ1a2tcIixcbiAgICBcIkZ1a2thaFwiLFxuICAgIFwiRnVra2VuXCIsXG4gICAgXCJGdWtrZXJcIixcbiAgICBcIkZ1a2tpblwiLFxuICAgIFwiZzAwa1wiLFxuICAgIFwiR29kLWRhbW5lZFwiLFxuICAgIFwiaDAwclwiLFxuICAgIFwiaDBhclwiLFxuICAgIFwiaDByZVwiLFxuICAgIFwiaGVsbHNcIixcbiAgICBcImhvYXJcIixcbiAgICBcImhvb3JcIixcbiAgICBcImhvb3JlXCIsXG4gICAgXCJqYWNrb2ZmXCIsXG4gICAgXCJqYXBcIixcbiAgICBcImphcHNcIixcbiAgICBcImplcmstb2ZmXCIsXG4gICAgXCJqaXNpbVwiLFxuICAgIFwiamlzc1wiLFxuICAgIFwiaml6bVwiLFxuICAgIFwiaml6elwiLFxuICAgIFwia25vYlwiLFxuICAgIFwia25vYnNcIixcbiAgICBcImtub2J6XCIsXG4gICAgXCJrdW50XCIsXG4gICAgXCJrdW50c1wiLFxuICAgIFwia3VudHpcIixcbiAgICBcIkxlenppYW5cIixcbiAgICBcIkxpcHNoaXRzXCIsXG4gICAgXCJMaXBzaGl0elwiLFxuICAgIFwibWFzb2NoaXN0XCIsXG4gICAgXCJtYXNva2lzdFwiLFxuICAgIFwibWFzc3RlcmJhaXRcIixcbiAgICBcIm1hc3N0cmJhaXRcIixcbiAgICBcIm1hc3N0cmJhdGVcIixcbiAgICBcIm1hc3RlcmJhaXRlclwiLFxuICAgIFwibWFzdGVyYmF0ZVwiLFxuICAgIFwibWFzdGVyYmF0ZXNcIixcbiAgICBcIk1vdGhhIEZ1Y2tlclwiLFxuICAgIFwiTW90aGEgRnVrZXJcIixcbiAgICBcIk1vdGhhIEZ1a2thaFwiLFxuICAgIFwiTW90aGEgRnVra2VyXCIsXG4gICAgXCJNb3RoZXIgRnVja2VyXCIsXG4gICAgXCJNb3RoZXIgRnVrYWhcIixcbiAgICBcIk1vdGhlciBGdWtlclwiLFxuICAgIFwiTW90aGVyIEZ1a2thaFwiLFxuICAgIFwiTW90aGVyIEZ1a2tlclwiLFxuICAgIFwibW90aGVyLWZ1Y2tlclwiLFxuICAgIFwiTXV0aGEgRnVja2VyXCIsXG4gICAgXCJNdXRoYSBGdWthaFwiLFxuICAgIFwiTXV0aGEgRnVrZXJcIixcbiAgICBcIk11dGhhIEZ1a2thaFwiLFxuICAgIFwiTXV0aGEgRnVra2VyXCIsXG4gICAgXCJuMWdyXCIsXG4gICAgXCJuYXN0dFwiLFxuICAgIFwibmlnZ2VyO1wiLFxuICAgIFwibmlndXI7XCIsXG4gICAgXCJuaWlnZXI7XCIsXG4gICAgXCJuaWlncjtcIixcbiAgICBcIm9yYWZpc1wiLFxuICAgIFwib3JnYXNpbTtcIixcbiAgICBcIm9yZ2FzbVwiLFxuICAgIFwib3JnYXN1bVwiLFxuICAgIFwib3JpZmFjZVwiLFxuICAgIFwib3JpZmljZVwiLFxuICAgIFwib3JpZmlzc1wiLFxuICAgIFwicGFja2lcIixcbiAgICBcInBhY2tpZVwiLFxuICAgIFwicGFja3lcIixcbiAgICBcInBha2lcIixcbiAgICBcInBha2llXCIsXG4gICAgXCJwYWt5XCIsXG4gICAgXCJwZWNrZXJcIixcbiAgICBcInBlZWVudXNcIixcbiAgICBcInBlZWVudXNzc1wiLFxuICAgIFwicGVlbnVzXCIsXG4gICAgXCJwZWludXNcIixcbiAgICBcInBlbjFzXCIsXG4gICAgXCJwZW5hc1wiLFxuICAgIFwicGVuaXNcIixcbiAgICBcInBlbmlzLWJyZWF0aFwiLFxuICAgIFwicGVudXNcIixcbiAgICBcInBlbnV1c1wiLFxuICAgIFwiUGh1Y1wiLFxuICAgIFwiUGh1Y2tcIixcbiAgICBcIlBodWtcIixcbiAgICBcIlBodWtlclwiLFxuICAgIFwiUGh1a2tlclwiLFxuICAgIFwicG9sYWNcIixcbiAgICBcInBvbGFja1wiLFxuICAgIFwicG9sYWtcIixcbiAgICBcIlBvb25hbmlcIixcbiAgICBcInByMWNcIixcbiAgICBcInByMWNrXCIsXG4gICAgXCJwcjFrXCIsXG4gICAgXCJwdXNzZVwiLFxuICAgIFwicHVzc2VlXCIsXG4gICAgXCJwdXNzeVwiLFxuICAgIFwicHV1a2VcIixcbiAgICBcInB1dWtlclwiLFxuICAgIFwicXdlaXJcIixcbiAgICBcInJlY2t0dW1cIixcbiAgICBcInJlY3R1bVwiLFxuICAgIFwicmV0YXJkXCIsXG4gICAgXCJzYWRpc3RcIixcbiAgICBcInNjYW5rXCIsXG4gICAgXCJzY2hsb25nXCIsXG4gICAgXCJzY3Jld2luZ1wiLFxuICAgIFwic2VtZW5cIixcbiAgICBcInNleFwiLFxuICAgIFwic2V4eVwiLFxuICAgIFwiU2ghdFwiLFxuICAgIFwic2gxdFwiLFxuICAgIFwic2gxdGVyXCIsXG4gICAgXCJzaDF0c1wiLFxuICAgIFwic2gxdHRlclwiLFxuICAgIFwic2gxdHpcIixcbiAgICBcInNoaXRcIixcbiAgICBcInNoaXRzXCIsXG4gICAgXCJzaGl0dGVyXCIsXG4gICAgXCJTaGl0dHlcIixcbiAgICBcIlNoaXR5XCIsXG4gICAgXCJzaGl0elwiLFxuICAgIFwiU2h5dFwiLFxuICAgIFwiU2h5dGVcIixcbiAgICBcIlNoeXR0eVwiLFxuICAgIFwiU2h5dHlcIixcbiAgICBcInNrYW5ja1wiLFxuICAgIFwic2thbmtcIixcbiAgICBcInNrYW5rZWVcIixcbiAgICBcInNrYW5rZXlcIixcbiAgICBcInNrYW5rc1wiLFxuICAgIFwiU2thbmt5XCIsXG4gICAgXCJzbGFnXCIsXG4gICAgXCJzbHV0XCIsXG4gICAgXCJzbHV0c1wiLFxuICAgIFwiU2x1dHR5XCIsXG4gICAgXCJzbHV0elwiLFxuICAgIFwic29uLW9mLWEtYml0Y2hcIixcbiAgICBcInRpdFwiLFxuICAgIFwidHVyZFwiLFxuICAgIFwidmExamluYVwiLFxuICAgIFwidmFnMW5hXCIsXG4gICAgXCJ2YWdpaW5hXCIsXG4gICAgXCJ2YWdpbmFcIixcbiAgICBcInZhajFuYVwiLFxuICAgIFwidmFqaW5hXCIsXG4gICAgXCJ2dWxsdmFcIixcbiAgICBcInZ1bHZhXCIsXG4gICAgXCJ3MHBcIixcbiAgICBcIndoMDByXCIsXG4gICAgXCJ3aDByZVwiLFxuICAgIFwid2hvcmVcIixcbiAgICBcInhyYXRlZFwiLFxuICAgIFwieHh4XCIsXG4gICAgXCJiIStjaFwiLFxuICAgIFwiYml0Y2hcIixcbiAgICBcImJsb3dqb2JcIixcbiAgICBcImNsaXRcIixcbiAgICBcImFyc2NobG9jaFwiLFxuICAgIFwiZnVja1wiLFxuICAgIFwic2hpdFwiLFxuICAgIFwiYXNzXCIsXG4gICAgXCJhc3Nob2xlXCIsXG4gICAgXCJiIXRjaFwiLFxuICAgIFwiYjE3Y2hcIixcbiAgICBcImIxdGNoXCIsXG4gICAgXCJiYXN0YXJkXCIsXG4gICAgXCJiaStjaFwiLFxuICAgIFwiYm9pb2xhc1wiLFxuICAgIFwiYnVjZXRhXCIsXG4gICAgXCJjMGNrXCIsXG4gICAgXCJjYXdrXCIsXG4gICAgXCJjaGlua1wiLFxuICAgIFwiY2lwYVwiLFxuICAgIFwiY2xpdHNcIixcbiAgICBcImNvY2tcIixcbiAgICBcImN1bVwiLFxuICAgIFwiY3VudFwiLFxuICAgIFwiZGlsZG9cIixcbiAgICBcImRpcnNhXCIsXG4gICAgXCJlamFrdWxhdGVcIixcbiAgICBcImZhdGFzc1wiLFxuICAgIFwiZmN1a1wiLFxuICAgIFwiZnVrXCIsXG4gICAgXCJmdXgwclwiLFxuICAgIFwiaG9lclwiLFxuICAgIFwiaG9yZVwiLFxuICAgIFwiamlzbVwiLFxuICAgIFwia2F3a1wiLFxuICAgIFwibDNpdGNoXCIsXG4gICAgXCJsM2krY2hcIixcbiAgICBcIm1hc3R1cmJhdGVcIixcbiAgICBcIm1hc3RlcmJhdCpcIixcbiAgICBcIm1hc3RlcmJhdDNcIixcbiAgICBcIm1vdGhlcmZ1Y2tlclwiLFxuICAgIFwicy5vLmIuXCIsXG4gICAgXCJtb2ZvXCIsXG4gICAgXCJuYXppXCIsXG4gICAgXCJuaWdnYVwiLFxuICAgIFwibmlnZ2VyXCIsXG4gICAgXCJudXRzYWNrXCIsXG4gICAgXCJwaHVja1wiLFxuICAgIFwicGltcGlzXCIsXG4gICAgXCJwdXNzZVwiLFxuICAgIFwicHVzc3lcIixcbiAgICBcInNjcm90dW1cIixcbiAgICBcInNoIXRcIixcbiAgICBcInNoZW1hbGVcIixcbiAgICBcInNoaStcIixcbiAgICBcInNoIStcIixcbiAgICBcInNsdXRcIixcbiAgICBcInNtdXRcIixcbiAgICBcInRlZXRzXCIsXG4gICAgXCJ0aXRzXCIsXG4gICAgXCJib29ic1wiLFxuICAgIFwiYjAwYnNcIixcbiAgICBcInRlZXpcIixcbiAgICBcInRlc3RpY2FsXCIsXG4gICAgXCJ0ZXN0aWNsZVwiLFxuICAgIFwidGl0dFwiLFxuICAgIFwidzAwc2VcIixcbiAgICBcImphY2tvZmZcIixcbiAgICBcIndhbmtcIixcbiAgICBcIndob2FyXCIsXG4gICAgXCJ3aG9yZVwiLFxuICAgIFwiKmRhbW5cIixcbiAgICBcIipkeWtlXCIsXG4gICAgXCIqZnVjaypcIixcbiAgICBcIipzaGl0KlwiLFxuICAgIFwiQCQkXCIsXG4gICAgXCJhbWNpa1wiLFxuICAgIFwiYW5kc2tvdGFcIixcbiAgICBcImFyc2UqXCIsXG4gICAgXCJhc3NyYW1tZXJcIixcbiAgICBcImF5aXJcIixcbiAgICBcImJpN2NoXCIsXG4gICAgXCJiaXRjaCpcIixcbiAgICBcImJvbGxvY2sqXCIsXG4gICAgXCJicmVhc3RzXCIsXG4gICAgXCJidXR0LXBpcmF0ZVwiLFxuICAgIFwiY2Ficm9uXCIsXG4gICAgXCJjYXp6b1wiLFxuICAgIFwiY2hyYWFcIixcbiAgICBcImNodWpcIixcbiAgICBcIkNvY2sqXCIsXG4gICAgXCJjdW50KlwiLFxuICAgIFwiZDRtblwiLFxuICAgIFwiZGF5Z29cIixcbiAgICBcImRlZ29cIixcbiAgICBcImRpY2sqXCIsXG4gICAgXCJkaWtlKlwiLFxuICAgIFwiZHVwYVwiLFxuICAgIFwiZHppd2thXCIsXG4gICAgXCJlamFja3VsYXRlXCIsXG4gICAgXCJFa3JlbSpcIixcbiAgICBcIkVrdG9cIixcbiAgICBcImVuY3VsZXJcIixcbiAgICBcImZhZW5cIixcbiAgICBcImZhZypcIixcbiAgICBcImZhbmN1bG9cIixcbiAgICBcImZhbm55XCIsXG4gICAgXCJmZWNlc1wiLFxuICAgIFwiZmVnXCIsXG4gICAgXCJGZWxjaGVyXCIsXG4gICAgXCJmaWNrZW5cIixcbiAgICBcImZpdHQqXCIsXG4gICAgXCJGbGlra2VyXCIsXG4gICAgXCJmb3Jlc2tpblwiLFxuICAgIFwiRm90emVcIixcbiAgICBcIkZ1KCpcIixcbiAgICBcImZ1aypcIixcbiAgICBcImZ1dGtyZXR6blwiLFxuICAgIFwiZ29va1wiLFxuICAgIFwiZ3VpZW5hXCIsXG4gICAgXCJoMHJcIixcbiAgICBcImg0eDByXCIsXG4gICAgXCJoZWxsXCIsXG4gICAgXCJoZWx2ZXRlXCIsXG4gICAgXCJob2VyKlwiLFxuICAgIFwiaG9ua2V5XCIsXG4gICAgXCJIdWV2b25cIixcbiAgICBcImh1aVwiLFxuICAgIFwiaW5qdW5cIixcbiAgICBcImppenpcIixcbiAgICBcImthbmtlcipcIixcbiAgICBcImtpa2VcIixcbiAgICBcImtsb290emFrXCIsXG4gICAgXCJrcmF1dFwiLFxuICAgIFwia251bGxlXCIsXG4gICAgXCJrdWtcIixcbiAgICBcImt1a3N1Z2VyXCIsXG4gICAgXCJLdXJhY1wiLFxuICAgIFwia3Vyd2FcIixcbiAgICBcImt1c2kqXCIsXG4gICAgXCJreXJwYSpcIixcbiAgICBcImxlc2JvXCIsXG4gICAgXCJtYW1ob29uXCIsXG4gICAgXCJtYXN0dXJiYXQqXCIsXG4gICAgXCJtZXJkKlwiLFxuICAgIFwibWlidW5cIixcbiAgICBcIm1vbmtsZWlnaFwiLFxuICAgIFwibW91bGlld29wXCIsXG4gICAgXCJtdWllXCIsXG4gICAgXCJtdWxra3VcIixcbiAgICBcIm11c2NoaVwiLFxuICAgIFwibmF6aXNcIixcbiAgICBcIm5lcGVzYXVyaW9cIixcbiAgICBcIm5pZ2dlcipcIixcbiAgICBcIm9yb3NwdVwiLFxuICAgIFwicGFza2EqXCIsXG4gICAgXCJwZXJzZVwiLFxuICAgIFwicGlja2FcIixcbiAgICBcInBpZXJkb2wqXCIsXG4gICAgXCJwaWxsdSpcIixcbiAgICBcInBpbW1lbFwiLFxuICAgIFwicGlzcypcIixcbiAgICBcInBpemRhXCIsXG4gICAgXCJwb29udHNlZVwiLFxuICAgIFwicG9vcFwiLFxuICAgIFwicG9yblwiLFxuICAgIFwicDByblwiLFxuICAgIFwicHIwblwiLFxuICAgIFwicHJldGVlblwiLFxuICAgIFwicHVsYVwiLFxuICAgIFwicHVsZVwiLFxuICAgIFwicHV0YVwiLFxuICAgIFwicHV0b1wiLFxuICAgIFwicWFoYmVoXCIsXG4gICAgXCJxdWVlZipcIixcbiAgICBcInJhdXRlbmJlcmdcIixcbiAgICBcInNjaGFmZmVyXCIsXG4gICAgXCJzY2hlaXNzKlwiLFxuICAgIFwic2NobGFtcGVcIixcbiAgICBcInNjaG11Y2tcIixcbiAgICBcInNjcmV3XCIsXG4gICAgXCJzaCF0KlwiLFxuICAgIFwic2hhcm11dGFcIixcbiAgICBcInNoYXJtdXRlXCIsXG4gICAgXCJzaGlwYWxcIixcbiAgICBcInNoaXpcIixcbiAgICBcInNrcmlielwiLFxuICAgIFwic2t1cnd5c3luXCIsXG4gICAgXCJzcGhlbmN0ZXJcIixcbiAgICBcInNwaWNcIixcbiAgICBcInNwaWVyZGFsYWpcIixcbiAgICBcInNwbG9vZ2VcIixcbiAgICBcInN1a2FcIixcbiAgICBcImIwMGIqXCIsXG4gICAgXCJ0ZXN0aWNsZSpcIixcbiAgICBcInRpdHQqXCIsXG4gICAgXCJ0d2F0XCIsXG4gICAgXCJ2aXR0dVwiLFxuICAgIFwid2FuaypcIixcbiAgICBcIndldGJhY2sqXCIsXG4gICAgXCJ3aWNoc2VyXCIsXG4gICAgXCJ3b3AqXCIsXG4gICAgXCJ5ZWRcIixcbiAgICBcInphYm91cmFoXCIsXG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEltcG9ydHMgdGhlIG1zZ3BhY2sgbGlicmFyeVxuICovXG4vL2NvbnN0IG1zZ3BhY2sgPSByZXF1aXJlKFwibXNncGFja1wiKTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBQbGF5ZXJzIH0gZnJvbSBcIi4vUGxheWVycy9QbGF5ZXJNYW5hZ2VyXCI7XG5pbXBvcnQgeyBiYWRXb3JkcyB9IGZyb20gXCIuL2JhZFdvcmRzXCI7XG5pbXBvcnQgeyBPYmplY3RNYW5hZ2VyIH0gZnJvbSBcIi4vQnVpbGRpbmdzL0J1aWxkaW5nTWFuYWdlclwiO1xuLyoqXG4gKiBBIGNsYXNzIGZvciBlbmNvZGluZyBhbmQgZGVjb2RpbmcgZGF0YSB1c2luZyBNZXNzYWdlUGFja1xuICovXG52YXIgTXNncGFjayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNc2dwYWNrKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmNvZGVzIGRhdGEgdXNpbmcgTWVzc2FnZVBhY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55fSBkYXRhIFRoZSBkYXRhIHRvIGVuY29kZVxuICAgICAqIEByZXR1cm5zIHtCdWZmZXJ9IFRoZSBlbmNvZGVkIGRhdGFcbiAgICAgKi9cbiAgICBNc2dwYWNrLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gbXNncGFjay5lbmNvZGUoZGF0YSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZWNvZGVzIGRhdGEgdXNpbmcgTWVzc2FnZVBhY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIFRoZSBkYXRhIHRvIGRlY29kZVxuICAgICAqIEByZXR1cm5zIHthbnl9IFRoZSBkZWNvZGVkIGRhdGFcbiAgICAgKi9cbiAgICBNc2dwYWNrLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gbXNncGFjay5kZWNvZGUoZGF0YSk7XG4gICAgfTtcbiAgICByZXR1cm4gTXNncGFjaztcbn0oKSk7XG4vKipcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIFdlYlNvY2tldCBjb25uZWN0aW9ucyBhbmQgc2VuZGluZy9yZWNlaXZpbmcgcGFja2V0c1xuICovXG52YXIgV1MgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFdTLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gV1MoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLndzID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIHBhY2tldCBvdmVyIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgcGFja2V0XG4gICAgICogQHBhcmFtIHsuLi5hbnlbXX0gZGF0YSBUaGUgZGF0YSB0byBzZW5kXG4gICAgICovXG4gICAgV1MucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgZGF0YVtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMud3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlsqXSBXZWJTb2NrZXQgaXMgbm90IGluaXRpYWxpemVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud3Muc2VuZCh0aGlzLmVuY29kZShbdHlwZSwgZGF0YV0pKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgaW5jb21pbmcgcGFja2V0cyBmcm9tIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGRhdGEgVGhlIGluY29taW5nIHBhY2tldCBkYXRhXG4gICAgICovXG4gICAgV1MucHJvdG90eXBlLmhhbmRsZVBhY2tldHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gICAgICAgIHZhciBwYXJzZWQgPSB0aGlzLmRlY29kZShkYXRhKTtcbiAgICAgICAgdmFyIHR5cGUgPSBwYXJzZWRbMF07XG4gICAgICAgIHZhciBwYWNrZXREYXRhID0gcGFyc2VkWzFdO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJBXCIpIHtcbiAgICAgICAgICAgIC8vIFNFVCBJTklUIERBVEE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJCXCIpIHtcbiAgICAgICAgICAgIC8vIERJU0NPTk5FQ1Q6XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJEXCIpIHtcbiAgICAgICAgICAgIC8vIEFERCBQTEFZRVI6XG4gICAgICAgICAgICBQbGF5ZXJzLmFkZFBsYXllcihwYWNrZXREYXRhWzBdWzBdLCBwYWNrZXREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkVcIikge1xuICAgICAgICAgICAgLy8gUkVNT1ZFIFBMQVlFUjpcbiAgICAgICAgICAgIFBsYXllcnMucmVtb3ZlUGxheWVyKHBhY2tldERhdGFbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiYVwiKSB7XG4gICAgICAgICAgICAvLyBVUERBVEUgUExBWUVSUzpcbiAgICAgICAgICAgIFBsYXllcnMudXBkYXRlUGxheWVycyhwYWNrZXREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkhcIikge1xuICAgICAgICAgICAgLy8gTE9BRCBHQU1FIE9CSkVDVDpcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0TWFuYWdlci5hZGRCdWlsZGluZyhkYXRhW2ldKTtcbiAgICAgICAgICAgICAgICBpICs9IDg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJLXCIpIHtcbiAgICAgICAgICAgIC8vIEdBVEhFUiBBTklNQVRJT046XG4gICAgICAgICAgICBpZiAocGFja2V0RGF0YVswXVsyXSlcbiAgICAgICAgICAgICAgICB2YXIgYm9uayA9IG5ldyBBdWRpbyhcImh0dHBzOi8vY2RuLmdsaXRjaC5nbG9iYWwvMWQxZGFmYTktYmE1YS00N2U3LWE0ZTctYmNiZjA4NTE1ODNkL2JvbmsubXA0XCIpO1xuICAgICAgICAgICAgYm9uay5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJPXCIpIHtcbiAgICAgICAgICAgIC8vIFVQREFURSBIRUFMVEg6XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCI2XCIpIHtcbiAgICAgICAgICAgIC8vIFJFQ0VJVkUgQ0hBVDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhY2tldERhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gV1M7XG59KE1zZ3BhY2spKTtcbi8qKlxuICogTW9ua2V5IHBhdGNoZXMgdGhlIFdlYlNvY2tldCBwcm90b3R5cGUgdG8gYWRkIGEgY3VzdG9tIHNlbmQgbWV0aG9kXG4gKi9cbldlYlNvY2tldC5wcm90b3R5cGUuc2VuZDIgPSBXZWJTb2NrZXQucHJvdG90eXBlLnNlbmQ7IC8vIHNvIGl0IHdvbid0IGNhbGwgaXRzZWxmIGVhY2ggdGltZVxuV2ViU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIHBhcmFtID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgcGFyYW1bX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGlmICghdGhpcy5tb2QpIHtcbiAgICAgICAgdGhpcy5tb2QgPSBuZXcgV1MoKTtcbiAgICAgICAgdGhpcy5tb2Qud3MgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgICAgIF90aGlzLm1vZC5oYW5kbGVQYWNrZXRzKG1zZy5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEFOVEkgUFJPRkFOSVRZIEZJTFRFUjpcbiAgICBpZiAodGhpcy5tb2QuZGVjb2RlKHBhY2tldClbMF0gPT0gXCI2XCIgJiZcbiAgICAgICAgYmFkV29yZHMuc29tZShmdW5jdGlvbiAod29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm1vZC5kZWNvZGUocGFja2V0KVsxXVswXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHdvcmQpO1xuICAgICAgICB9KSkge1xuICAgICAgICB2YXIgbXNnID0gdGhpcy5tb2QuZGVjb2RlKHBhY2tldClbMV1bMF07XG4gICAgICAgIHRoaXMuc2VuZDIodGhpcy5tb2QuZW5jb2RlKFtcIjZcIiwgW21zZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1zZy5zbGljZSgxKV1dKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNlbmQyKHBhY2tldCk7XG4gICAgfVxufTtcbi8qKlxuICogVGhlIEdhbWUgY2xhc3MsIHdoaWNoIGV4dGVuZHMgV1MgYW5kIGFkZHMgZ2FtZS1zcGVjaWZpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXG4gKi9cbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHYW1lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdhbWUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5lbmVtaWVzID0gW107XG4gICAgICAgIF90aGlzLnRlYW1tYXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgR2FtZSBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybnMge0dhbWV9IFRoZSBzaW5nbGV0b24gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBHYW1lLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIUdhbWUuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEdhbWUuaW5zdGFuY2UgPSBuZXcgR2FtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBHYW1lLmluc3RhbmNlO1xuICAgIH07XG4gICAgcmV0dXJuIEdhbWU7XG59KFdTKSk7XG5leHBvcnQgeyBHYW1lIH07XG52YXIgTW9kID0gR2FtZS5nZXRJbnN0YW5jZSgpO1xuYWxlcnQoXCJNb29Nb28gVFMgTG9hZGVkXCIpO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVOYW1lXCIpLmlubmVySFRNTCA9IFwiXFxuPGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmdsaXRjaC5nbG9iYWwvMWQxZGFmYTktYmE1YS00N2U3LWE0ZTctYmNiZjA4NTE1ODNkLyU1QnJlbW92YWwuYWklNURfZjViMDdiZmItZDI1MC00YThmLTg3MTQtMmI1ZjRlNWFmM2QyLWJhbm5lci5wbmc/dj0xNzIwMDkzMzM4MjAxXFxcIj5cXG5cIjtcbiAgICAvLyBHQU1FIE9WRVJMQVk6XG4gICAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXkuc3R5bGUgPSBcIlxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IDA7XFxubGVmdDogMDtcXG5iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAxODUsIDAuMTUpO1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwJTtcXG5wb2ludGVyLWV2ZW50czogbm9uZTtcXG5cIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIC8vIFZFUklGSUNBVElPTiBQUk9NUFQ6XG4gICAgdmFyIFZlcmlmaWNhdGlvblByb21wdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gVmVyaWZpY2F0aW9uUHJvbXB0KCkge1xuICAgICAgICB9XG4gICAgICAgIFZlcmlmaWNhdGlvblByb21wdC5wcm90b3R5cGUucHJlcGFyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuYmx1ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLmJsdXIuc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCA0MCwgMC4zKTtcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcXG4gICAgICB6LWluZGV4OiA4ODg3O1xcbiAgICBcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ibHVyKTtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLm1haW5Ib2xkZXIuc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICB3aWR0aDogMzUlO1xcbiAgICAgIGhlaWdodDogMjAlO1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTg1LCAxODUsIDE4NSwgMC45NSk7XFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgICAgYm9yZGVyOiA2cHggc29saWQgbGlnaHRncmV5O1xcbiAgICAgIHotaW5kZXg6IDg4ODg7XFxuICAgIFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1haW5Ib2xkZXIpO1xuICAgICAgICAgICAgdGhpcy50aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aGlzLnRpdGxlLmlubmVySFRNTCA9IFwiQXV0aGVudGljYXRpb24uXCI7XG4gICAgICAgICAgICB0aGlzLnRpdGxlLnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDM1JTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogODBweDtcXG4gICAgICBjb2xvcjogIzAwMDtcXG4gICAgICBmb250OiAzMnB4IEFyaWFsO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBcIjtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlci5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBUb2tlbiBIZXJlLi4uXCI7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnR5cGUgPSBcInBhc3N3b3JkXCI7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmNzc1RleHQgPSBcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMzUsIDEzNSwgMTM1LCAwLjMpO1xcbiAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgYm90dG9tOiA1JTtcXG4gICAgICBsZWZ0OiAzJTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgXCI7XG4gICAgICAgICAgICB0aGlzLm1haW5Ib2xkZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2suc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogNSU7XFxuICAgICAgcmlnaHQ6IDMlO1xcbiAgICAgIHdpZHRoOiA5MHB4O1xcbiAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ3LCAxMTcsIDE5MywgMC4yKTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udDogMjBweCBBcmlhbDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcIjtcbiAgICAgICAgICAgIHRoaXMuY2hlY2suaW5uZXJIVE1MID0gXCJWZXJpZnlcIjtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlci5hcHBlbmRDaGlsZCh0aGlzLmNoZWNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFZlcmlmaWNhdGlvblByb21wdDtcbiAgICB9KCkpO1xuICAgIHZhciB2ZXJpZnkgPSBuZXcgVmVyaWZpY2F0aW9uUHJvbXB0KCk7XG4gICAgLy92ZXJpZnkucHJlcGFyZSgpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==