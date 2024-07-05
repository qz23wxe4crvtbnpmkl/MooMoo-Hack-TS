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
//import { findPlayerBySid  } from "../FindPlayerBySID";
/* Building class */
var Building = /** @class */ (function () {
    function Building(sid, x, y, dir, scale, type, data, owner, isFake) {
        this.sid = sid;
        data = data || {}; //safeholder incase its fucked
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
            return false; //(tmpObj.sid === this.owner?.sid || this.isTeam(findPlayerBySid(tmpObj)))
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
        var tmpObj = new _Building__WEBPACK_IMPORTED_MODULE_0__.Building(data[0]);
        tmpObj.init(data[index + 1], data[index + 2], data[index + 3], data[index + 4], data[index + 5], _UTILS_Items__WEBPACK_IMPORTED_MODULE_1__.Items[data[index + 6]]);
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
            _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.addPlayer(packetData[0][0], packetData);
        }
        else if (type === "E") {
            // REMOVE PLAYER:
            //Players.removePlayer()
        }
        else if (type === "a") {
            // UPDATE PLAYERS:
            _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.updatePlayers(packetData);
        }
        else if (type === "H") {
            // LOAD GAME OBJECT:
            console.warn(this.decode(data));
            for (var i = 0; i < data.length; i += 8) {
                _Buildings_BuildingManager__WEBPACK_IMPORTED_MODULE_2__.ObjectManager.addBuilding(data[i], i);
            }
            console.log(_Buildings_BuildingManager__WEBPACK_IMPORTED_MODULE_2__.ObjectManager.Buildings);
        }
        else if (type === "K") {
            // GATHER ANIMATION:
            if (packetData[2])
                var bonk = new Audio("https://cdn.glitch.global/1d1dafa9-ba5a-47e7-a4e7-bcbf0851583d/bonk.mp4");
            bonk.play();
        }
        else if (type === "O") {
            // UPDATE HEALTH:
        }
        else if (type === "6") {
            // RECEIVE CHAT:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9CdWlsZGluZ3MvQnVpbGRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0J1aWxkaW5ncy9CdWlsZGluZ01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllcnMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF5ZXJzL1BsYXllck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllcnMvdXBkYXRlUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9VVElMUy9GaW5kUGxheWVyQnlTSUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VUSUxTL0l0ZW1Hcm91cHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VUSUxTL0l0ZW1zLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWRXb3Jkcy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IGZpbmRQbGF5ZXJCeVNpZCAgfSBmcm9tIFwiLi4vRmluZFBsYXllckJ5U0lEXCI7XG4vKiBCdWlsZGluZyBjbGFzcyAqL1xudmFyIEJ1aWxkaW5nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJ1aWxkaW5nKHNpZCwgeCwgeSwgZGlyLCBzY2FsZSwgdHlwZSwgZGF0YSwgb3duZXIsIGlzRmFrZSkge1xuICAgICAgICB0aGlzLnNpZCA9IHNpZDtcbiAgICAgICAgZGF0YSA9IGRhdGEgfHwge307IC8vc2FmZWhvbGRlciBpbmNhc2UgaXRzIGZ1Y2tlZFxuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5kaXIgPSBkaXI7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5ncm91cCA9IGRhdGEuZ3JvdXA7XG4gICAgICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICAgICAgdGhpcy5pc0Zha2UgPSBpc0Zha2U7XG4gICAgICAgIHRoaXMuaXNBbGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53aWdnbGUgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlzSXRlbSA9IChkYXRhLmlkICE9PSBudWxsKTtcbiAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gZGF0YS50cmFwIHx8IGRhdGEuZG1nIHx8IGRhdGEudGVsZXBvcnQ7XG4gICAgICAgIHRoaXMubWF4SGVhbHRoID0gZGF0YS5oZWFsdGg7XG4gICAgICAgIHRoaXMuYnVpbGRIZWFsdGggPSB0aGlzLm1heEhlYWx0aDtcbiAgICAgICAgdGhpcy5pc1RlYW1PYmplY3QgPSBmdW5jdGlvbiAodG1wT2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vKHRtcE9iai5zaWQgPT09IHRoaXMub3duZXI/LnNpZCB8fCB0aGlzLmlzVGVhbShmaW5kUGxheWVyQnlTaWQodG1wT2JqKSkpXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBCdWlsZGluZztcbn0oKSk7XG5leHBvcnQgeyBCdWlsZGluZyB9O1xuIiwiLyoqXG4gKiBJbXBvcnRzXG4gKi9cbmltcG9ydCB7IEJ1aWxkaW5nIH0gZnJvbSBcIi4vQnVpbGRpbmdcIjsgLy8gSW1wb3J0IEJ1aWxkaW5nIGNsYXNzXG5pbXBvcnQgeyBJdGVtcyB9IGZyb20gXCIuLi9VVElMUy9JdGVtc1wiOyAvLyBJbXBvcnQgR2FtZSBJdGVtc1xuLyoqXG4gKiBCdWlsZGluZyBNYW5hZ2VyIGNsYXNzXG4gKlxuICogVGhpcyBjbGFzcyBtYW5hZ2VzIGEgY29sbGVjdGlvbiBvZiBnYW1lIG9iamVjdHMgYW5kIHByb3ZpZGVzIG1ldGhvZHMgdG8gYWRkLCByZW1vdmUsIGFuZCBjbGVhciB0aGVtLlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6T2JqZWN0TWFuYWdlclxuICovXG52YXIgT2JqZWN0TWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBQcml2YXRlIGNvbnN0cnVjdG9yIHRvIHByZXZlbnQgaW5zdGFudGlhdGlvblxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBPYmplY3RNYW5hZ2VyKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogT2JqZWN0IG9mIHJlbGV2YW50IGdhbWUgb2JqZWN0c1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZWxldmFudEJ1aWxkaW5ncyA9IFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIE9iamVjdE1hbmFnZXIgY2xhc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3RNYW5hZ2VyfSBUaGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBPYmplY3RNYW5hZ2VyIGNsYXNzXG4gICAgICogQG1lbWJlck9mIE9iamVjdE1hbmFnZXJcbiAgICAgKiBAZXhhbXBsZSBPYmplY3RNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICAgKi9cbiAgICBPYmplY3RNYW5hZ2VyLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIU9iamVjdE1hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIE9iamVjdE1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgT2JqZWN0TWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3RNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGJ1aWxkaW5nIGdhbWUgb2JqZWN0IHRvIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBkYXRhIFRoZSBkYXRhIHRvIGNyZWF0ZSB0aGUgYnVpbGRpbmcgZ2FtZSBvYmplY3RcbiAgICAgKiBAbWVtYmVyT2YgT2JqZWN0TWFuYWdlclxuICAgICAqIEBleGFtcGxlIE9iamVjdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5hZGRCdWlsZGluZyhbMTIzNCwgLi4uXSk7XG4gICAgICovXG4gICAgT2JqZWN0TWFuYWdlci5hZGRCdWlsZGluZyA9IGZ1bmN0aW9uIChkYXRhLCBpbmRleCkge1xuICAgICAgICB2YXIgdG1wT2JqID0gbmV3IEJ1aWxkaW5nKGRhdGFbMF0pO1xuICAgICAgICB0bXBPYmouaW5pdChkYXRhW2luZGV4ICsgMV0sIGRhdGFbaW5kZXggKyAyXSwgZGF0YVtpbmRleCArIDNdLCBkYXRhW2luZGV4ICsgNF0sIGRhdGFbaW5kZXggKyA1XSwgSXRlbXNbZGF0YVtpbmRleCArIDZdXSk7XG4gICAgICAgIE9iamVjdE1hbmFnZXIuQnVpbGRpbmdzLnB1c2godG1wT2JqKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBnYW1lIG9iamVjdCBmcm9tIHRoZSBjb2xsZWN0aW9uIGJ5IFNJRFxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpZCBUaGUgU0lEIG9mIHRoZSBnYW1lIG9iamVjdCB0byByZW1vdmVcbiAgICAgKiBAbWVtYmVyT2YgT2JqZWN0TWFuYWdlclxuICAgICAqIEBleGFtcGxlIE9iamVjdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5yZW1vdmVHYW1lT2JqZWN0KDEyMyk7XG4gICAgICovXG4gICAgT2JqZWN0TWFuYWdlci5wcm90b3R5cGUucmVtb3ZlQnVpbGRpbmcgPSBmdW5jdGlvbiAoc2lkKSB7IH07XG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBnYW1lIG9iamVjdHMgZnJvbSB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQG1lbWJlck9mIE9iamVjdE1hbmFnZXJcbiAgICAgKiBAZXhhbXBsZSBPYmplY3RNYW5hZ2VyLmdldEluc3RhbmNlKCkucmVtb3ZlQWxsT2JqZWN0cygxMCk7XG4gICAgICovXG4gICAgT2JqZWN0TWFuYWdlci5wcm90b3R5cGUucmVtb3ZlQWxsQnVpbGRpbmdzID0gZnVuY3Rpb24gKHNpZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBPYmplY3RNYW5hZ2VyLkJ1aWxkaW5ncy5mb3JFYWNoKGZ1bmN0aW9uICh0bXBPYmopIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmICgoKF9hID0gdG1wT2JqID09PSBudWxsIHx8IHRtcE9iaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdG1wT2JqLm93bmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2lkKSA9PT0gc2lkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlQnVpbGRpbmcodG1wT2JqLnNpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQXJyYXkgb2YgZ2FtZSBvYmplY3RzXG4gICAgICovXG4gICAgT2JqZWN0TWFuYWdlci5CdWlsZGluZ3MgPSBbXTtcbiAgICByZXR1cm4gT2JqZWN0TWFuYWdlcjtcbn0oKSk7XG5leHBvcnQgeyBPYmplY3RNYW5hZ2VyIH07XG4iLCIvKiBQbGF5ZXIgY2xhc3MgKi9cbnZhciBQbGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGxheWVyKHNpZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNpZCA9IHNpZDtcbiAgICAgICAgdGhpcy5pc1RlYW0gPSBmdW5jdGlvbiAodG1wT2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRtcE9iai5zaWQgPT09IF90aGlzLnNpZCB8fCAodG1wT2JqLnRlYW0gJiYgdG1wT2JqLnRlYW0gPT09IF90aGlzLnRlYW0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSU5JVDpcbiAgICAgICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKGlkLCBuYW1lLCB4LCB5LCBkaXIsIGhlYWx0aCwgbWF4SGVhbHRoLCBzY2FsZSwgc2tpbkNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXI7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgICAgIHRoaXMubWF4SGVhbHRoID0gbWF4SGVhbHRoO1xuICAgICAgICAgICAgdGhpcy5sYXN0SGVhbHRoID0gdGhpcy5oZWFsdGg7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgICAgIHRoaXMueDIgPSB4O1xuICAgICAgICAgICAgdGhpcy55MiA9IHk7XG4gICAgICAgICAgICB0aGlzLngzID0gMDtcbiAgICAgICAgICAgIHRoaXMueTMgPSAwO1xuICAgICAgICAgICAgdGhpcy5za2luSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXN0U2tpbkluZGV4ID0gdGhpcy5za2luSW5kZXg7XG4gICAgICAgICAgICB0aGlzLnRhaWxJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLmxhc3RUYWlsSW5kZXggPSB0aGlzLnRhaWxJbmRleDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIFBsYXllcjtcbn0oKSk7XG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsIi8qKlxuICogSW1wb3J0c1xuICovXG5pbXBvcnQgeyBmaW5kUGxheWVyQnlTaWQgfSBmcm9tIFwiLi4vVVRJTFMvRmluZFBsYXllckJ5U0lEXCI7IC8vIEltcG9ydCBmdW5jdGlvbiB0byBmaW5kIGEgcGxheWVyIGJ5IHRoZWlyIFNJRFxuaW1wb3J0IHsgdXBkYXRlUGxheWVyIH0gZnJvbSBcIi4vdXBkYXRlUGxheWVyXCI7IC8vIEltcG9ydCBmdW5jdGlvbiB0byB1cGRhdGUgYSBwbGF5ZXIncyBpbmZvcm1hdGlvblxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7IC8vIEltcG9ydCBwbGF5ZXIgY2xhc3Ncbi8qKlxuICogUGxheWVyIE1hbmFnZXIgY2xhc3NcbiAqXG4gKiBUaGlzIGNsYXNzIG1hbmFnZXMgYSBjb2xsZWN0aW9uIG9mIHBsYXllcnMgYW5kIHByb3ZpZGVzIG1ldGhvZHMgdG8gYWRkLCByZW1vdmUsIGFuZCB1cGRhdGUgcGxheWVycy5cbiAqXG4gKiBAbWVtYmVyT2YgbW9kdWxlOlBsYXllcnNcbiAqL1xudmFyIFBsYXllcnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGxheWVycygpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBQbGF5ZXJzIGNsYXNzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UGxheWVyc30gVGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgUGxheWVycyBjbGFzc1xuICAgICAqIEBtZW1iZXJPZiBQbGF5ZXJzXG4gICAgICogQGV4YW1wbGUgY29uc3QgcGxheWVycyA9IFBsYXllcnMuZ2V0SW5zdGFuY2UoKTtcbiAgICAgKi9cbiAgICBQbGF5ZXJzLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIVBsYXllcnMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIFBsYXllcnMuaW5zdGFuY2UgPSBuZXcgUGxheWVycygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQbGF5ZXJzLmluc3RhbmNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkcyBhIHBsYXllciB0byB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFNJRCBUaGUgU0lEIGZvciB0aGUgcGxheWVyXG4gICAgICogQHBhcmFtIHthbnlbXX0gZGF0YSBUaGUgcGxheWVyJ3MgZGF0YVxuICAgICAqIEBtZW1iZXJPZiBQbGF5ZXJzXG4gICAgICogQGV4YW1wbGUgcGxheWVycy5hZGRQbGF5ZXIoMSwgeyBuYW1lOiBcIk9uaW9uXCIsIHNraW46IFwiX19wcm90b19fXCJ9KTtcbiAgICAgKi9cbiAgICBQbGF5ZXJzLmFkZFBsYXllciA9IGZ1bmN0aW9uIChTSUQsIGRhdGEpIHtcbiAgICAgICAgLyogRGF0YSBmb3JtYXQ6XG4gICAgXG4gICAgICAgICAgMDoge2lkLCBzaWQsIG5hbWUsIHgsIHksIHNvbWV0aGluZywgaGVhbHRoLCBzb21ldGhpbmcsIHNjYWxlPywgc29tZXRoaW5nfVxuICAgICAgICAgIDE6IHRydWUvZmFsc2UgZm9yIHllcy9ubyBpcyBtZVxuICAgICAgICAgICovXG4gICAgICAgIGlmIChkYXRhWzFdKSB7XG4gICAgICAgICAgICAvLyBNWSBQTEFZRVI6XG4gICAgICAgICAgICBQbGF5ZXJzLm15UGxheWVyID0gbmV3IFBsYXllcihTSUQpO1xuICAgICAgICAgICAgUGxheWVycy5wbGF5ZXJzLnB1c2goUGxheWVycy5teVBsYXllcik7XG4gICAgICAgICAgICAvLyBJTklUOlxuICAgICAgICAgICAgUGxheWVycy5teVBsYXllci5pbml0KGRhdGFbMF1bMF0sIGRhdGFbMF1bMl0sIGRhdGFbMF1bM10sIGRhdGFbMF1bNF0sIGRhdGFbMF1bNV0sIGRhdGFbMF1bNl0sIGRhdGFbMF1bN10sIGRhdGFbMF1bOF0sIGRhdGFbMF1bOV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRtcE9iaiA9IG5ldyBQbGF5ZXIoU0lEKTtcbiAgICAgICAgICAgIFBsYXllcnMucGxheWVycy5wdXNoKHRtcE9iaik7XG4gICAgICAgICAgICB0bXBPYmouaW5pdChkYXRhWzBdWzBdLCBkYXRhWzBdWzJdLCBkYXRhWzBdWzNdLCBkYXRhWzBdWzRdLCBkYXRhWzBdWzVdLCBkYXRhWzBdWzZdLCBkYXRhWzBdWzddLCBkYXRhWzBdWzhdLCBkYXRhWzBdWzldKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHBsYXllciBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lkIFRoZSBTSUQgZm9yIHRoZSBwbGF5ZXIgdG8gcmVtb3ZlXG4gICAgICogQG1lbWJlck9mIFBsYXllcnNcbiAgICAgKiBAZXhhbXBsZSBwbGF5ZXJzLnJlbW92ZVBsYXllcigxMCk7XG4gICAgICovXG4gICAgUGxheWVycy5wcm90b3R5cGUucmVtb3ZlUGxheWVyID0gZnVuY3Rpb24gKHNpZCkge1xuICAgICAgICB2YXIgaW5kZXggPSBQbGF5ZXJzLnBsYXllcnMuaW5kZXhPZihQbGF5ZXJzLnBsYXllcnMuZmluZChmdW5jdGlvbiAocGxheWVyKSB7IHJldHVybiBwbGF5ZXIuc2lkID09PSBzaWQ7IH0pLCAwKTtcbiAgICAgICAgZGVsZXRlIFBsYXllcnMucGxheWVyc1tpbmRleF07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwbGF5ZXJzIGluIHRoZSBjb2xsZWN0aW9uIGJhc2VkIG9uIG5ldyBkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBkYXRhIFRoZSBuZXcgZGF0YSB0byB1cGRhdGUgdGhlIHBsYXllcnMgd2l0aFxuICAgICAqIEBtZW1iZXJPZiBQbGF5ZXJzXG4gICAgICogQGV4YW1wbGUgcGxheWVycy51cGRhdGVQbGF5ZXJzKHRtcFBsYXllcik7XG4gICAgICovXG4gICAgUGxheWVycy51cGRhdGVQbGF5ZXJzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy8gVW5yZW5kZXIgYWxsIHBsYXllcnMgYW5kIHJlcmVuZGVyIHBsYXllcnMgaW4gcmFuZ2VcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciB0bXBQbGF5ZXIgPSB0aGlzLnBsYXllcnNbaV07XG4gICAgICAgICAgICB0bXBQbGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMTMpIHtcbiAgICAgICAgICAgIHZhciB0bXBQbGF5ZXIgPSBmaW5kUGxheWVyQnlTaWQoZGF0YVswXSk7XG4gICAgICAgICAgICBpZiAodG1wUGxheWVyKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlUGxheWVyKHRtcFBsYXllciwgZGF0YSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIHBsYXllcnNcbiAgICAgKi9cbiAgICBQbGF5ZXJzLnBsYXllcnMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBNeSBwbGF5ZXJcbiAgICAgKi9cbiAgICBQbGF5ZXJzLm15UGxheWVyID0ge307XG4gICAgcmV0dXJuIFBsYXllcnM7XG59KCkpO1xuZXhwb3J0IHsgUGxheWVycyB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBsYXllcihwbGF5ZXIsIGRhdGEsIGluZGV4KSB7XG4gICAgcGxheWVyLnQxID0gcGxheWVyLnQyID09PSB2b2lkIDAgPyBEYXRlLm5vdygpIDogcGxheWVyLnQyO1xuICAgIHBsYXllci50MiA9IERhdGUubm93KCk7XG4gICAgcGxheWVyLmxhc1BvcyA9IHtcbiAgICAgICAgeDogcGxheWVyLngyLFxuICAgICAgICB5OiBwbGF5ZXIueTIsXG4gICAgfTtcbiAgICBwbGF5ZXIueDIgPSBkYXRhW2luZGV4ICsgMV07XG4gICAgcGxheWVyLnkyID0gZGF0YVtpbmRleCArIDJdO1xuICAgIHBsYXllci5kMSA9IHBsYXllci5kMiA9PT0gdm9pZCAwID8gZGF0YVtpbmRleCArIDNdIDogcGxheWVyLmQyO1xuICAgIHBsYXllci5kZWx0YSA9IDA7XG4gICAgcGxheWVyLndlYXBvbkluZGV4ID0gZGF0YVtpbmRleCArIDVdO1xuICAgIHBsYXllci53ZWFwb25JbmRleCA8IDkgJiYgKHBsYXllci53ZWFwb25zWzBdID0gcGxheWVyLndlYXBvbkluZGV4KTtcbiAgICBwbGF5ZXIud2VhcG9uSW5kZXggPj0gOSAmJiAocGxheWVyLndlYXBvbnNbMV0gPSBwbGF5ZXIud2VhcG9uSW5kZXgpO1xuICAgIHBsYXllci53ZWFwb25WYXJpYW50ID0gZGF0YVtpbmRleCArIDZdO1xuICAgIHBsYXllci50ZWFtID0gZGF0YVtpbmRleCArIDddO1xuICAgIHBsYXllci5sYXN0U2tpbkluZGV4ID0gcGxheWVyLnNraW5JbmRleDtcbiAgICBwbGF5ZXIuc2tpbkluZGV4ID0gZGF0YVtpbmRleCArIDldO1xuICAgIHBsYXllci5sYXN0VGFpbEluZGV4ID0gcGxheWVyLnRhaWxJbmRleDtcbiAgICBwbGF5ZXIudGFpbEluZGV4ID0gZGF0YVtpbmRleCArIDEwXTtcbiAgICBwbGF5ZXIudmlzaWJsZSA9IHRydWU7XG59XG4iLCIvKipcbiAqIEltcG9ydHMgdGhlIFBsYXllcnMgY2xhc3NcbiAqL1xuaW1wb3J0IHsgUGxheWVycyB9IGZyb20gXCIuLi9QbGF5ZXJzL1BsYXllck1hbmFnZXJcIjtcbi8qKlxuICogRmluZHMgYSBwbGF5ZXIgYnkgdGhlaXIgU0lEXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNpZCBUaGUgU0lEIG9mIHRoZSBwbGF5ZXIgdG8gZmluZFxuICogQHJldHVybnMge2FueX0gVGhlIHBsYXllciB3aXRoIHRoZSBtYXRjaGluZyBTSUQsIG9yIHVuZGVmaW5lZCBpZiBub3QgZm91bmRcbiAqIEBtZW1iZXJPZiBtb2R1bGU6RmluZFBsYXllckJ5U0lEXG4gKiBAZXhhbXBsZSBmaW5kUGxheWVyQnlTaWQoMTIzKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQbGF5ZXJCeVNpZChzaWQpIHtcbiAgICAvKipcbiAgICAgKiBVc2VzIHRoZSBmaW5kIG1ldGhvZCB0byBzZWFyY2ggdGhlIHBsYXllcnMgYXJyYXkgZm9yIGEgcGxheWVyIHdpdGggYSBtYXRjaGluZyBTSURcbiAgICAgKi9cbiAgICByZXR1cm4gUGxheWVycy5wbGF5ZXJzLmZpbmQoZnVuY3Rpb24gKHBsYXllcikgeyByZXR1cm4gcGxheWVyLnNpZCA9PT0gc2lkOyB9KTtcbn1cbiIsImV4cG9ydCB2YXIgaXRlbUdyb3VwcyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiBcImZvb2RcIixcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIndhbGxzXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDMwLFxuICAgICAgICBsYXllcjogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6IFwic3Bpa2VzXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDE1LFxuICAgICAgICBsYXllcjogMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6IFwibWlsbFwiLFxuICAgICAgICBwbGFjZTogITAsXG4gICAgICAgIGxpbWl0OiA3LFxuICAgICAgICBzYW5kYm94TGltaXQ6IDI5OSxcbiAgICAgICAgbGF5ZXI6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBuYW1lOiBcIm1pbmVcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMSxcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiBcInRyYXBcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogNixcbiAgICAgICAgbGF5ZXI6IC0xLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNixcbiAgICAgICAgbmFtZTogXCJib29zdGVyXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDEyLFxuICAgICAgICBzYW5kYm94TGltaXQ6IDI5OSxcbiAgICAgICAgbGF5ZXI6IC0xLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNyxcbiAgICAgICAgbmFtZTogXCJ0dXJyZXRcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMixcbiAgICAgICAgbGF5ZXI6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA4LFxuICAgICAgICBuYW1lOiBcIndhdGNodG93ZXJcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMTIsXG4gICAgICAgIGxheWVyOiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogOSxcbiAgICAgICAgbmFtZTogXCJidWZmXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDQsXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEwLFxuICAgICAgICBuYW1lOiBcInNwYXduXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDEsXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDExLFxuICAgICAgICBuYW1lOiBcInNhcGxpbmdcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMixcbiAgICAgICAgbGF5ZXI6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMixcbiAgICAgICAgbmFtZTogXCJibG9ja2VyXCIsXG4gICAgICAgIHBsYWNlOiAhMCxcbiAgICAgICAgbGltaXQ6IDMsXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEzLFxuICAgICAgICBuYW1lOiBcInRlbGVwb3J0ZXJcIixcbiAgICAgICAgcGxhY2U6ICEwLFxuICAgICAgICBsaW1pdDogMixcbiAgICAgICAgc2FuZGJveExpbWl0OiAyOTksXG4gICAgICAgIGxheWVyOiAtMSxcbiAgICB9LFxuXTtcbiIsImltcG9ydCB7IGl0ZW1Hcm91cHMgfSBmcm9tIFwiLi9JdGVtR3JvdXBzXCI7XG5leHBvcnQgdmFyIEl0ZW1zID0gW1xuICAgIHtcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMF0sXG4gICAgICAgIG5hbWU6IFwiYXBwbGVcIixcbiAgICAgICAgZGVzYzogXCJyZXN0b3JlcyAyMCBoZWFsdGggd2hlbiBjb25zdW1lZFwiLFxuICAgICAgICByZXE6IFtcImZvb2RcIiwgMTBdLFxuICAgICAgICBjb25zdW1lOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuY2hhbmdlSGVhbHRoKDIwLCB0KTtcbiAgICAgICAgfSxcbiAgICAgICAgaGVhbGluZzogMjAsXG4gICAgICAgIHNjYWxlOiAyMixcbiAgICAgICAgaG9sZE9mZnNldDogMTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogMyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMF0sXG4gICAgICAgIG5hbWU6IFwiY29va2llXCIsXG4gICAgICAgIGRlc2M6IFwicmVzdG9yZXMgNDAgaGVhbHRoIHdoZW4gY29uc3VtZWRcIixcbiAgICAgICAgcmVxOiBbXCJmb29kXCIsIDE1XSxcbiAgICAgICAgY29uc3VtZTogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LmNoYW5nZUhlYWx0aCg0MCwgdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhlYWxpbmc6IDQwLFxuICAgICAgICBzY2FsZTogMjcsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDE1LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDcsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzBdLFxuICAgICAgICBuYW1lOiBcImNoZWVzZVwiLFxuICAgICAgICBkZXNjOiBcInJlc3RvcmVzIDMwIGhlYWx0aCBhbmQgYW5vdGhlciA1MCBvdmVyIDUgc2Vjb25kc1wiLFxuICAgICAgICByZXE6IFtcImZvb2RcIiwgMjVdLFxuICAgICAgICBjb25zdW1lOiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuICgoISF0LmNoYW5nZUhlYWx0aCgzMCwgdCkgfHwgdC5oZWFsdGggPCAxMDApICYmXG4gICAgICAgICAgICAgICAgKCh0LmRtZ092ZXJUaW1lLmRtZyA9IC0xMCksXG4gICAgICAgICAgICAgICAgICAgICh0LmRtZ092ZXJUaW1lLmRvZXIgPSB0KSxcbiAgICAgICAgICAgICAgICAgICAgKHQuZG1nT3ZlclRpbWUudGltZSA9IDUpLFxuICAgICAgICAgICAgICAgICAgICAhMCkpO1xuICAgICAgICB9LFxuICAgICAgICBoZWFsaW5nOiAzMCxcbiAgICAgICAgc2NhbGU6IDI3LFxuICAgICAgICBob2xkT2Zmc2V0OiAxNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMV0sXG4gICAgICAgIG5hbWU6IFwid29vZCB3YWxsXCIsXG4gICAgICAgIGRlc2M6IFwicHJvdmlkZXMgcHJvdGVjdGlvbiBmb3IgeW91ciB2aWxsYWdlXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAxMF0sXG4gICAgICAgIHByb2pEbWc6ICEwLFxuICAgICAgICBoZWFsdGg6IDM4MCxcbiAgICAgICAgc2NhbGU6IDUwLFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDMsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzFdLFxuICAgICAgICBuYW1lOiBcInN0b25lIHdhbGxcIixcbiAgICAgICAgZGVzYzogXCJwcm92aWRlcyBpbXByb3ZlZCBwcm90ZWN0aW9uIGZvciB5b3VyIHZpbGxhZ2VcIixcbiAgICAgICAgcmVxOiBbXCJzdG9uZVwiLCAyNV0sXG4gICAgICAgIGhlYWx0aDogOTAwLFxuICAgICAgICBzY2FsZTogNTAsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgcHJlOiAxLFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxXSxcbiAgICAgICAgbmFtZTogXCJjYXN0bGUgd2FsbFwiLFxuICAgICAgICBkZXNjOiBcInByb3ZpZGVzIHBvd2VyZnVsIHByb3RlY3Rpb24gZm9yIHlvdXIgdmlsbGFnZVwiLFxuICAgICAgICByZXE6IFtcInN0b25lXCIsIDM1XSxcbiAgICAgICAgaGVhbHRoOiAxNTAwLFxuICAgICAgICBzY2FsZTogNTIsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzJdLFxuICAgICAgICBuYW1lOiBcInNwaWtlc1wiLFxuICAgICAgICBkZXNjOiBcImRhbWFnZXMgZW5lbWllcyB3aGVuIHRoZXkgdG91Y2ggdGhlbVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMjAsIFwic3RvbmVcIiwgNV0sXG4gICAgICAgIGhlYWx0aDogNDAwLFxuICAgICAgICBkbWc6IDIwLFxuICAgICAgICBzY2FsZTogNDksXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IC0yMyxcbiAgICAgICAgaG9sZE9mZnNldDogOCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDUsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzJdLFxuICAgICAgICBuYW1lOiBcImdyZWF0ZXIgc3Bpa2VzXCIsXG4gICAgICAgIGRlc2M6IFwiZGFtYWdlcyBlbmVtaWVzIHdoZW4gdGhleSB0b3VjaCB0aGVtXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAzMCwgXCJzdG9uZVwiLCAxMF0sXG4gICAgICAgIGhlYWx0aDogNTAwLFxuICAgICAgICBkbWc6IDM1LFxuICAgICAgICBzY2FsZTogNTIsXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IC0yMyxcbiAgICAgICAgaG9sZE9mZnNldDogOCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDksXG4gICAgICAgIHByZTogMSxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbMl0sXG4gICAgICAgIG5hbWU6IFwicG9pc29uIHNwaWtlc1wiLFxuICAgICAgICBkZXNjOiBcInBvaXNvbnMgZW5lbWllcyB3aGVuIHRoZXkgdG91Y2ggdGhlbVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMzUsIFwic3RvbmVcIiwgMTVdLFxuICAgICAgICBoZWFsdGg6IDYwMCxcbiAgICAgICAgZG1nOiAzMCxcbiAgICAgICAgcERtZzogNSxcbiAgICAgICAgc2NhbGU6IDUyLFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAtMjMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDgsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA5LFxuICAgICAgICBwcmU6IDIsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzJdLFxuICAgICAgICBuYW1lOiBcInNwaW5uaW5nIHNwaWtlc1wiLFxuICAgICAgICBkZXNjOiBcImRhbWFnZXMgZW5lbWllcyB3aGVuIHRoZXkgdG91Y2ggdGhlbVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMzAsIFwic3RvbmVcIiwgMjBdLFxuICAgICAgICBoZWFsdGg6IDUwMCxcbiAgICAgICAgZG1nOiA0NSxcbiAgICAgICAgdHVyblNwZWVkOiAwLjAwMyxcbiAgICAgICAgc2NhbGU6IDUyLFxuICAgICAgICBzcHJpdGVQYWRkaW5nOiAtMjMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDgsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbM10sXG4gICAgICAgIG5hbWU6IFwid2luZG1pbGxcIixcbiAgICAgICAgZGVzYzogXCJnZW5lcmF0ZXMgZ29sZCBvdmVyIHRpbWVcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDUwLCBcInN0b25lXCIsIDEwXSxcbiAgICAgICAgaGVhbHRoOiA0MDAsXG4gICAgICAgIHBwczogMSxcbiAgICAgICAgdHVyblNwZWVkOiAwLjAwMTYsXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IDI1LFxuICAgICAgICBpY29uTGluZU11bHQ6IDEyLFxuICAgICAgICBzY2FsZTogNDUsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA1LFxuICAgICAgICBwcmU6IDEsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzNdLFxuICAgICAgICBuYW1lOiBcImZhc3RlciB3aW5kbWlsbFwiLFxuICAgICAgICBkZXNjOiBcImdlbmVyYXRlcyBtb3JlIGdvbGQgb3ZlciB0aW1lXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCA2MCwgXCJzdG9uZVwiLCAyMF0sXG4gICAgICAgIGhlYWx0aDogNTAwLFxuICAgICAgICBwcHM6IDEuNSxcbiAgICAgICAgdHVyblNwZWVkOiAwLjAwMjUsXG4gICAgICAgIHNwcml0ZVBhZGRpbmc6IDI1LFxuICAgICAgICBpY29uTGluZU11bHQ6IDEyLFxuICAgICAgICBzY2FsZTogNDcsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA4LFxuICAgICAgICBwcmU6IDEsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzNdLFxuICAgICAgICBuYW1lOiBcInBvd2VyIG1pbGxcIixcbiAgICAgICAgZGVzYzogXCJnZW5lcmF0ZXMgbW9yZSBnb2xkIG92ZXIgdGltZVwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgMTAwLCBcInN0b25lXCIsIDUwXSxcbiAgICAgICAgaGVhbHRoOiA4MDAsXG4gICAgICAgIHBwczogMixcbiAgICAgICAgdHVyblNwZWVkOiAwLjAwNSxcbiAgICAgICAgc3ByaXRlUGFkZGluZzogMjUsXG4gICAgICAgIGljb25MaW5lTXVsdDogMTIsXG4gICAgICAgIHNjYWxlOiA0NyxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiA1LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDUsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzRdLFxuICAgICAgICB0eXBlOiAyLFxuICAgICAgICBuYW1lOiBcIm1pbmVcIixcbiAgICAgICAgZGVzYzogXCJhbGxvd3MgeW91IHRvIG1pbmUgc3RvbmVcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDIwLCBcInN0b25lXCIsIDEwMF0sXG4gICAgICAgIGljb25MaW5lTXVsdDogMTIsXG4gICAgICAgIHNjYWxlOiA2NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDUsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzExXSxcbiAgICAgICAgdHlwZTogMCxcbiAgICAgICAgbmFtZTogXCJzYXBsaW5nXCIsXG4gICAgICAgIGRlc2M6IFwiYWxsb3dzIHlvdSB0byBmYXJtIHdvb2RcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDE1MF0sXG4gICAgICAgIGljb25MaW5lTXVsdDogMTIsXG4gICAgICAgIGNvbERpdjogMC41LFxuICAgICAgICBzY2FsZTogMTEwLFxuICAgICAgICBob2xkT2Zmc2V0OiA1MCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC0xNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA0LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s1XSxcbiAgICAgICAgbmFtZTogXCJwaXQgdHJhcFwiLFxuICAgICAgICBkZXNjOiBcInBpdCB0aGF0IHRyYXBzIGVuZW1pZXMgaWYgdGhleSB3YWxrIG92ZXIgaXRcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDMwLCBcInN0b25lXCIsIDMwXSxcbiAgICAgICAgdHJhcDogITAsXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIGhpZGVGcm9tRW5lbXk6ICEwLFxuICAgICAgICBoZWFsdGg6IDUwMCxcbiAgICAgICAgY29sRGl2OiAwLjIsXG4gICAgICAgIHNjYWxlOiA1MCxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA0LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s2XSxcbiAgICAgICAgbmFtZTogXCJib29zdCBwYWRcIixcbiAgICAgICAgZGVzYzogXCJwcm92aWRlcyBib29zdCB3aGVuIHN0ZXBwZWQgb25cIixcbiAgICAgICAgcmVxOiBbXCJzdG9uZVwiLCAyMCwgXCJ3b29kXCIsIDVdLFxuICAgICAgICBpZ25vcmVDb2xsaXNpb246ICEwLFxuICAgICAgICBib29zdFNwZWVkOiAxLjUsXG4gICAgICAgIGhlYWx0aDogMTUwLFxuICAgICAgICBjb2xEaXY6IDAuNyxcbiAgICAgICAgc2NhbGU6IDQ1LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDcsXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzddLFxuICAgICAgICBkb1VwZGF0ZTogITAsXG4gICAgICAgIG5hbWU6IFwidHVycmV0XCIsXG4gICAgICAgIGRlc2M6IFwiZGVmZW5zaXZlIHN0cnVjdHVyZSB0aGF0IHNob290cyBhdCBlbmVtaWVzXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAyMDAsIFwic3RvbmVcIiwgMTUwXSxcbiAgICAgICAgaGVhbHRoOiA4MDAsXG4gICAgICAgIHByb2plY3RpbGU6IDEsXG4gICAgICAgIHNob290UmFuZ2U6IDcwMCxcbiAgICAgICAgc2hvb3RSYXRlOiAyMjAwLFxuICAgICAgICBzY2FsZTogNDMsXG4gICAgICAgIGhvbGRPZmZzZXQ6IDIwLFxuICAgICAgICBwbGFjZU9mZnNldDogLTUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFnZTogNyxcbiAgICAgICAgZ3JvdXA6IGl0ZW1Hcm91cHNbOF0sXG4gICAgICAgIG5hbWU6IFwicGxhdGZvcm1cIixcbiAgICAgICAgZGVzYzogXCJwbGF0Zm9ybSB0byBzaG9vdCBvdmVyIHdhbGxzIGFuZCBjcm9zcyBvdmVyIHdhdGVyXCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAyMF0sXG4gICAgICAgIGlnbm9yZUNvbGxpc2lvbjogITAsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgaGVhbHRoOiAzMDAsXG4gICAgICAgIHNjYWxlOiA0MyxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1s5XSxcbiAgICAgICAgbmFtZTogXCJoZWFsaW5nIHBhZFwiLFxuICAgICAgICBkZXNjOiBcInN0YW5kaW5nIG9uIGl0IHdpbGwgc2xvd2x5IGhlYWwgeW91XCIsXG4gICAgICAgIHJlcTogW1wid29vZFwiLCAzMCwgXCJmb29kXCIsIDEwXSxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgaGVhbENvbDogMTUsXG4gICAgICAgIGhlYWx0aDogNDAwLFxuICAgICAgICBjb2xEaXY6IDAuNyxcbiAgICAgICAgc2NhbGU6IDQ1LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG4gICAge1xuICAgICAgICBhZ2U6IDksXG4gICAgICAgIGdyb3VwOiBpdGVtR3JvdXBzWzEwXSxcbiAgICAgICAgbmFtZTogXCJzcGF3biBwYWRcIixcbiAgICAgICAgZGVzYzogXCJ5b3Ugd2lsbCBzcGF3biBoZXJlIHdoZW4geW91IGRpZSBidXQgaXQgd2lsbCBkaXNzYXBlYXJcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDEwMCwgXCJzdG9uZVwiLCAxMDBdLFxuICAgICAgICBoZWFsdGg6IDQwMCxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgc3Bhd25Qb2ludDogITAsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxMl0sXG4gICAgICAgIG5hbWU6IFwiYmxvY2tlclwiLFxuICAgICAgICBkZXNjOiBcImJsb2NrcyBidWlsZGluZyBpbiByYWRpdXNcIixcbiAgICAgICAgcmVxOiBbXCJ3b29kXCIsIDMwLCBcInN0b25lXCIsIDI1XSxcbiAgICAgICAgaWdub3JlQ29sbGlzaW9uOiAhMCxcbiAgICAgICAgYmxvY2tlcjogMzAwLFxuICAgICAgICBoZWFsdGg6IDQwMCxcbiAgICAgICAgY29sRGl2OiAwLjcsXG4gICAgICAgIHNjYWxlOiA0NSxcbiAgICAgICAgaG9sZE9mZnNldDogMjAsXG4gICAgICAgIHBsYWNlT2Zmc2V0OiAtNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgYWdlOiA3LFxuICAgICAgICBncm91cDogaXRlbUdyb3Vwc1sxM10sXG4gICAgICAgIG5hbWU6IFwidGVsZXBvcnRlclwiLFxuICAgICAgICBkZXNjOiBcInRlbGVwb3J0cyB5b3UgdG8gYSByYW5kb20gcG9pbnQgb24gdGhlIG1hcFwiLFxuICAgICAgICByZXE6IFtcIndvb2RcIiwgNjAsIFwic3RvbmVcIiwgNjBdLFxuICAgICAgICBpZ25vcmVDb2xsaXNpb246ICEwLFxuICAgICAgICB0ZWxlcG9ydDogITAsXG4gICAgICAgIGhlYWx0aDogMjAwLFxuICAgICAgICBjb2xEaXY6IDAuNyxcbiAgICAgICAgc2NhbGU6IDQ1LFxuICAgICAgICBob2xkT2Zmc2V0OiAyMCxcbiAgICAgICAgcGxhY2VPZmZzZXQ6IC01LFxuICAgIH0sXG5dO1xuIiwiZXhwb3J0IHZhciBiYWRXb3JkcyA9IFtcbiAgICBcImFob2xlXCIsXG4gICAgXCJhbnVzXCIsXG4gICAgXCJhc2gwbGVcIixcbiAgICBcImFzaDBsZXNcIixcbiAgICBcImFzaG9sZXNcIixcbiAgICBcImFzc1wiLFxuICAgIFwiQXNzIE1vbmtleVwiLFxuICAgIFwiQXNzZmFjZVwiLFxuICAgIFwiYXNzaDBsZVwiLFxuICAgIFwiYXNzaDBsZXpcIixcbiAgICBcImFzc2hvbGVcIixcbiAgICBcImFzc2hvbGVzXCIsXG4gICAgXCJhc3Nob2x6XCIsXG4gICAgXCJhc3N3aXBlXCIsXG4gICAgXCJhenpob2xlXCIsXG4gICAgXCJiYXNzdGVyZHNcIixcbiAgICBcImJhc3RhcmRcIixcbiAgICBcImJhc3RhcmRzXCIsXG4gICAgXCJiYXN0YXJkelwiLFxuICAgIFwiYmFzdGVyZHNcIixcbiAgICBcImJhc3RlcmR6XCIsXG4gICAgXCJCaWF0Y2hcIixcbiAgICBcImJpdGNoXCIsXG4gICAgXCJiaXRjaGVzXCIsXG4gICAgXCJCbG93IEpvYlwiLFxuICAgIFwiYm9mZmluZ1wiLFxuICAgIFwiYnV0dGhvbGVcIixcbiAgICBcImJ1dHR3aXBlXCIsXG4gICAgXCJjMGNrXCIsXG4gICAgXCJjMGNrc1wiLFxuICAgIFwiYzBrXCIsXG4gICAgXCJDYXJwZXQgTXVuY2hlclwiLFxuICAgIFwiY2F3a1wiLFxuICAgIFwiY2F3a3NcIixcbiAgICBcIkNsaXRcIixcbiAgICBcImNudHNcIixcbiAgICBcImNudHpcIixcbiAgICBcImNvY2tcIixcbiAgICBcImNvY2toZWFkXCIsXG4gICAgXCJjb2NrLWhlYWRcIixcbiAgICBcImNvY2tzXCIsXG4gICAgXCJDb2NrU3Vja2VyXCIsXG4gICAgXCJjb2NrLXN1Y2tlclwiLFxuICAgIFwiY3JhcFwiLFxuICAgIFwiY3VtXCIsXG4gICAgXCJjdW50XCIsXG4gICAgXCJjdW50c1wiLFxuICAgIFwiY3VudHpcIixcbiAgICBcImRpY2tcIixcbiAgICBcImRpbGQwXCIsXG4gICAgXCJkaWxkMHNcIixcbiAgICBcImRpbGRvXCIsXG4gICAgXCJkaWxkb3NcIixcbiAgICBcImRpbGxkMFwiLFxuICAgIFwiZGlsbGQwc1wiLFxuICAgIFwiZG9taW5hdHJpY2tzXCIsXG4gICAgXCJkb21pbmF0cmljc1wiLFxuICAgIFwiZG9taW5hdHJpeFwiLFxuICAgIFwiZHlrZVwiLFxuICAgIFwiZW5lbWFcIixcbiAgICBcImYgdSBjIGtcIixcbiAgICBcImYgdSBjIGsgZSByXCIsXG4gICAgXCJmYWdcIixcbiAgICBcImZhZzF0XCIsXG4gICAgXCJmYWdldFwiLFxuICAgIFwiZmFnZzF0XCIsXG4gICAgXCJmYWdnaXRcIixcbiAgICBcImZhZ2dvdFwiLFxuICAgIFwiZmFnZzB0XCIsXG4gICAgXCJmYWdpdFwiLFxuICAgIFwiZmFnc1wiLFxuICAgIFwiZmFnelwiLFxuICAgIFwiZmFpZ1wiLFxuICAgIFwiZmFpZ3NcIixcbiAgICBcImZhcnRcIixcbiAgICBcImZsaXBwaW5nIHRoZSBiaXJkXCIsXG4gICAgXCJmdWNrXCIsXG4gICAgXCJmdWNrZXJcIixcbiAgICBcImZ1Y2tpblwiLFxuICAgIFwiZnVja2luZ1wiLFxuICAgIFwiZnVja3NcIixcbiAgICBcIkZ1ZGdlIFBhY2tlclwiLFxuICAgIFwiZnVrXCIsXG4gICAgXCJGdWthaFwiLFxuICAgIFwiRnVrZW5cIixcbiAgICBcImZ1a2VyXCIsXG4gICAgXCJGdWtpblwiLFxuICAgIFwiRnVra1wiLFxuICAgIFwiRnVra2FoXCIsXG4gICAgXCJGdWtrZW5cIixcbiAgICBcIkZ1a2tlclwiLFxuICAgIFwiRnVra2luXCIsXG4gICAgXCJnMDBrXCIsXG4gICAgXCJHb2QtZGFtbmVkXCIsXG4gICAgXCJoMDByXCIsXG4gICAgXCJoMGFyXCIsXG4gICAgXCJoMHJlXCIsXG4gICAgXCJoZWxsc1wiLFxuICAgIFwiaG9hclwiLFxuICAgIFwiaG9vclwiLFxuICAgIFwiaG9vcmVcIixcbiAgICBcImphY2tvZmZcIixcbiAgICBcImphcFwiLFxuICAgIFwiamFwc1wiLFxuICAgIFwiamVyay1vZmZcIixcbiAgICBcImppc2ltXCIsXG4gICAgXCJqaXNzXCIsXG4gICAgXCJqaXptXCIsXG4gICAgXCJqaXp6XCIsXG4gICAgXCJrbm9iXCIsXG4gICAgXCJrbm9ic1wiLFxuICAgIFwia25vYnpcIixcbiAgICBcImt1bnRcIixcbiAgICBcImt1bnRzXCIsXG4gICAgXCJrdW50elwiLFxuICAgIFwiTGV6emlhblwiLFxuICAgIFwiTGlwc2hpdHNcIixcbiAgICBcIkxpcHNoaXR6XCIsXG4gICAgXCJtYXNvY2hpc3RcIixcbiAgICBcIm1hc29raXN0XCIsXG4gICAgXCJtYXNzdGVyYmFpdFwiLFxuICAgIFwibWFzc3RyYmFpdFwiLFxuICAgIFwibWFzc3RyYmF0ZVwiLFxuICAgIFwibWFzdGVyYmFpdGVyXCIsXG4gICAgXCJtYXN0ZXJiYXRlXCIsXG4gICAgXCJtYXN0ZXJiYXRlc1wiLFxuICAgIFwiTW90aGEgRnVja2VyXCIsXG4gICAgXCJNb3RoYSBGdWtlclwiLFxuICAgIFwiTW90aGEgRnVra2FoXCIsXG4gICAgXCJNb3RoYSBGdWtrZXJcIixcbiAgICBcIk1vdGhlciBGdWNrZXJcIixcbiAgICBcIk1vdGhlciBGdWthaFwiLFxuICAgIFwiTW90aGVyIEZ1a2VyXCIsXG4gICAgXCJNb3RoZXIgRnVra2FoXCIsXG4gICAgXCJNb3RoZXIgRnVra2VyXCIsXG4gICAgXCJtb3RoZXItZnVja2VyXCIsXG4gICAgXCJNdXRoYSBGdWNrZXJcIixcbiAgICBcIk11dGhhIEZ1a2FoXCIsXG4gICAgXCJNdXRoYSBGdWtlclwiLFxuICAgIFwiTXV0aGEgRnVra2FoXCIsXG4gICAgXCJNdXRoYSBGdWtrZXJcIixcbiAgICBcIm4xZ3JcIixcbiAgICBcIm5hc3R0XCIsXG4gICAgXCJuaWdnZXI7XCIsXG4gICAgXCJuaWd1cjtcIixcbiAgICBcIm5paWdlcjtcIixcbiAgICBcIm5paWdyO1wiLFxuICAgIFwib3JhZmlzXCIsXG4gICAgXCJvcmdhc2ltO1wiLFxuICAgIFwib3JnYXNtXCIsXG4gICAgXCJvcmdhc3VtXCIsXG4gICAgXCJvcmlmYWNlXCIsXG4gICAgXCJvcmlmaWNlXCIsXG4gICAgXCJvcmlmaXNzXCIsXG4gICAgXCJwYWNraVwiLFxuICAgIFwicGFja2llXCIsXG4gICAgXCJwYWNreVwiLFxuICAgIFwicGFraVwiLFxuICAgIFwicGFraWVcIixcbiAgICBcInBha3lcIixcbiAgICBcInBlY2tlclwiLFxuICAgIFwicGVlZW51c1wiLFxuICAgIFwicGVlZW51c3NzXCIsXG4gICAgXCJwZWVudXNcIixcbiAgICBcInBlaW51c1wiLFxuICAgIFwicGVuMXNcIixcbiAgICBcInBlbmFzXCIsXG4gICAgXCJwZW5pc1wiLFxuICAgIFwicGVuaXMtYnJlYXRoXCIsXG4gICAgXCJwZW51c1wiLFxuICAgIFwicGVudXVzXCIsXG4gICAgXCJQaHVjXCIsXG4gICAgXCJQaHVja1wiLFxuICAgIFwiUGh1a1wiLFxuICAgIFwiUGh1a2VyXCIsXG4gICAgXCJQaHVra2VyXCIsXG4gICAgXCJwb2xhY1wiLFxuICAgIFwicG9sYWNrXCIsXG4gICAgXCJwb2xha1wiLFxuICAgIFwiUG9vbmFuaVwiLFxuICAgIFwicHIxY1wiLFxuICAgIFwicHIxY2tcIixcbiAgICBcInByMWtcIixcbiAgICBcInB1c3NlXCIsXG4gICAgXCJwdXNzZWVcIixcbiAgICBcInB1c3N5XCIsXG4gICAgXCJwdXVrZVwiLFxuICAgIFwicHV1a2VyXCIsXG4gICAgXCJxd2VpclwiLFxuICAgIFwicmVja3R1bVwiLFxuICAgIFwicmVjdHVtXCIsXG4gICAgXCJyZXRhcmRcIixcbiAgICBcInNhZGlzdFwiLFxuICAgIFwic2NhbmtcIixcbiAgICBcInNjaGxvbmdcIixcbiAgICBcInNjcmV3aW5nXCIsXG4gICAgXCJzZW1lblwiLFxuICAgIFwic2V4XCIsXG4gICAgXCJzZXh5XCIsXG4gICAgXCJTaCF0XCIsXG4gICAgXCJzaDF0XCIsXG4gICAgXCJzaDF0ZXJcIixcbiAgICBcInNoMXRzXCIsXG4gICAgXCJzaDF0dGVyXCIsXG4gICAgXCJzaDF0elwiLFxuICAgIFwic2hpdFwiLFxuICAgIFwic2hpdHNcIixcbiAgICBcInNoaXR0ZXJcIixcbiAgICBcIlNoaXR0eVwiLFxuICAgIFwiU2hpdHlcIixcbiAgICBcInNoaXR6XCIsXG4gICAgXCJTaHl0XCIsXG4gICAgXCJTaHl0ZVwiLFxuICAgIFwiU2h5dHR5XCIsXG4gICAgXCJTaHl0eVwiLFxuICAgIFwic2thbmNrXCIsXG4gICAgXCJza2Fua1wiLFxuICAgIFwic2thbmtlZVwiLFxuICAgIFwic2thbmtleVwiLFxuICAgIFwic2thbmtzXCIsXG4gICAgXCJTa2Fua3lcIixcbiAgICBcInNsYWdcIixcbiAgICBcInNsdXRcIixcbiAgICBcInNsdXRzXCIsXG4gICAgXCJTbHV0dHlcIixcbiAgICBcInNsdXR6XCIsXG4gICAgXCJzb24tb2YtYS1iaXRjaFwiLFxuICAgIFwidGl0XCIsXG4gICAgXCJ0dXJkXCIsXG4gICAgXCJ2YTFqaW5hXCIsXG4gICAgXCJ2YWcxbmFcIixcbiAgICBcInZhZ2lpbmFcIixcbiAgICBcInZhZ2luYVwiLFxuICAgIFwidmFqMW5hXCIsXG4gICAgXCJ2YWppbmFcIixcbiAgICBcInZ1bGx2YVwiLFxuICAgIFwidnVsdmFcIixcbiAgICBcIncwcFwiLFxuICAgIFwid2gwMHJcIixcbiAgICBcIndoMHJlXCIsXG4gICAgXCJ3aG9yZVwiLFxuICAgIFwieHJhdGVkXCIsXG4gICAgXCJ4eHhcIixcbiAgICBcImIhK2NoXCIsXG4gICAgXCJiaXRjaFwiLFxuICAgIFwiYmxvd2pvYlwiLFxuICAgIFwiY2xpdFwiLFxuICAgIFwiYXJzY2hsb2NoXCIsXG4gICAgXCJmdWNrXCIsXG4gICAgXCJzaGl0XCIsXG4gICAgXCJhc3NcIixcbiAgICBcImFzc2hvbGVcIixcbiAgICBcImIhdGNoXCIsXG4gICAgXCJiMTdjaFwiLFxuICAgIFwiYjF0Y2hcIixcbiAgICBcImJhc3RhcmRcIixcbiAgICBcImJpK2NoXCIsXG4gICAgXCJib2lvbGFzXCIsXG4gICAgXCJidWNldGFcIixcbiAgICBcImMwY2tcIixcbiAgICBcImNhd2tcIixcbiAgICBcImNoaW5rXCIsXG4gICAgXCJjaXBhXCIsXG4gICAgXCJjbGl0c1wiLFxuICAgIFwiY29ja1wiLFxuICAgIFwiY3VtXCIsXG4gICAgXCJjdW50XCIsXG4gICAgXCJkaWxkb1wiLFxuICAgIFwiZGlyc2FcIixcbiAgICBcImVqYWt1bGF0ZVwiLFxuICAgIFwiZmF0YXNzXCIsXG4gICAgXCJmY3VrXCIsXG4gICAgXCJmdWtcIixcbiAgICBcImZ1eDByXCIsXG4gICAgXCJob2VyXCIsXG4gICAgXCJob3JlXCIsXG4gICAgXCJqaXNtXCIsXG4gICAgXCJrYXdrXCIsXG4gICAgXCJsM2l0Y2hcIixcbiAgICBcImwzaStjaFwiLFxuICAgIFwibWFzdHVyYmF0ZVwiLFxuICAgIFwibWFzdGVyYmF0KlwiLFxuICAgIFwibWFzdGVyYmF0M1wiLFxuICAgIFwibW90aGVyZnVja2VyXCIsXG4gICAgXCJzLm8uYi5cIixcbiAgICBcIm1vZm9cIixcbiAgICBcIm5hemlcIixcbiAgICBcIm5pZ2dhXCIsXG4gICAgXCJuaWdnZXJcIixcbiAgICBcIm51dHNhY2tcIixcbiAgICBcInBodWNrXCIsXG4gICAgXCJwaW1waXNcIixcbiAgICBcInB1c3NlXCIsXG4gICAgXCJwdXNzeVwiLFxuICAgIFwic2Nyb3R1bVwiLFxuICAgIFwic2ghdFwiLFxuICAgIFwic2hlbWFsZVwiLFxuICAgIFwic2hpK1wiLFxuICAgIFwic2ghK1wiLFxuICAgIFwic2x1dFwiLFxuICAgIFwic211dFwiLFxuICAgIFwidGVldHNcIixcbiAgICBcInRpdHNcIixcbiAgICBcImJvb2JzXCIsXG4gICAgXCJiMDBic1wiLFxuICAgIFwidGVlelwiLFxuICAgIFwidGVzdGljYWxcIixcbiAgICBcInRlc3RpY2xlXCIsXG4gICAgXCJ0aXR0XCIsXG4gICAgXCJ3MDBzZVwiLFxuICAgIFwiamFja29mZlwiLFxuICAgIFwid2Fua1wiLFxuICAgIFwid2hvYXJcIixcbiAgICBcIndob3JlXCIsXG4gICAgXCIqZGFtblwiLFxuICAgIFwiKmR5a2VcIixcbiAgICBcIipmdWNrKlwiLFxuICAgIFwiKnNoaXQqXCIsXG4gICAgXCJAJCRcIixcbiAgICBcImFtY2lrXCIsXG4gICAgXCJhbmRza290YVwiLFxuICAgIFwiYXJzZSpcIixcbiAgICBcImFzc3JhbW1lclwiLFxuICAgIFwiYXlpclwiLFxuICAgIFwiYmk3Y2hcIixcbiAgICBcImJpdGNoKlwiLFxuICAgIFwiYm9sbG9jaypcIixcbiAgICBcImJyZWFzdHNcIixcbiAgICBcImJ1dHQtcGlyYXRlXCIsXG4gICAgXCJjYWJyb25cIixcbiAgICBcImNhenpvXCIsXG4gICAgXCJjaHJhYVwiLFxuICAgIFwiY2h1alwiLFxuICAgIFwiQ29jaypcIixcbiAgICBcImN1bnQqXCIsXG4gICAgXCJkNG1uXCIsXG4gICAgXCJkYXlnb1wiLFxuICAgIFwiZGVnb1wiLFxuICAgIFwiZGljaypcIixcbiAgICBcImRpa2UqXCIsXG4gICAgXCJkdXBhXCIsXG4gICAgXCJkeml3a2FcIixcbiAgICBcImVqYWNrdWxhdGVcIixcbiAgICBcIkVrcmVtKlwiLFxuICAgIFwiRWt0b1wiLFxuICAgIFwiZW5jdWxlclwiLFxuICAgIFwiZmFlblwiLFxuICAgIFwiZmFnKlwiLFxuICAgIFwiZmFuY3Vsb1wiLFxuICAgIFwiZmFubnlcIixcbiAgICBcImZlY2VzXCIsXG4gICAgXCJmZWdcIixcbiAgICBcIkZlbGNoZXJcIixcbiAgICBcImZpY2tlblwiLFxuICAgIFwiZml0dCpcIixcbiAgICBcIkZsaWtrZXJcIixcbiAgICBcImZvcmVza2luXCIsXG4gICAgXCJGb3R6ZVwiLFxuICAgIFwiRnUoKlwiLFxuICAgIFwiZnVrKlwiLFxuICAgIFwiZnV0a3JldHpuXCIsXG4gICAgXCJnb29rXCIsXG4gICAgXCJndWllbmFcIixcbiAgICBcImgwclwiLFxuICAgIFwiaDR4MHJcIixcbiAgICBcImhlbGxcIixcbiAgICBcImhlbHZldGVcIixcbiAgICBcImhvZXIqXCIsXG4gICAgXCJob25rZXlcIixcbiAgICBcIkh1ZXZvblwiLFxuICAgIFwiaHVpXCIsXG4gICAgXCJpbmp1blwiLFxuICAgIFwiaml6elwiLFxuICAgIFwia2Fua2VyKlwiLFxuICAgIFwia2lrZVwiLFxuICAgIFwia2xvb3R6YWtcIixcbiAgICBcImtyYXV0XCIsXG4gICAgXCJrbnVsbGVcIixcbiAgICBcImt1a1wiLFxuICAgIFwia3Vrc3VnZXJcIixcbiAgICBcIkt1cmFjXCIsXG4gICAgXCJrdXJ3YVwiLFxuICAgIFwia3VzaSpcIixcbiAgICBcImt5cnBhKlwiLFxuICAgIFwibGVzYm9cIixcbiAgICBcIm1hbWhvb25cIixcbiAgICBcIm1hc3R1cmJhdCpcIixcbiAgICBcIm1lcmQqXCIsXG4gICAgXCJtaWJ1blwiLFxuICAgIFwibW9ua2xlaWdoXCIsXG4gICAgXCJtb3VsaWV3b3BcIixcbiAgICBcIm11aWVcIixcbiAgICBcIm11bGtrdVwiLFxuICAgIFwibXVzY2hpXCIsXG4gICAgXCJuYXppc1wiLFxuICAgIFwibmVwZXNhdXJpb1wiLFxuICAgIFwibmlnZ2VyKlwiLFxuICAgIFwib3Jvc3B1XCIsXG4gICAgXCJwYXNrYSpcIixcbiAgICBcInBlcnNlXCIsXG4gICAgXCJwaWNrYVwiLFxuICAgIFwicGllcmRvbCpcIixcbiAgICBcInBpbGx1KlwiLFxuICAgIFwicGltbWVsXCIsXG4gICAgXCJwaXNzKlwiLFxuICAgIFwicGl6ZGFcIixcbiAgICBcInBvb250c2VlXCIsXG4gICAgXCJwb29wXCIsXG4gICAgXCJwb3JuXCIsXG4gICAgXCJwMHJuXCIsXG4gICAgXCJwcjBuXCIsXG4gICAgXCJwcmV0ZWVuXCIsXG4gICAgXCJwdWxhXCIsXG4gICAgXCJwdWxlXCIsXG4gICAgXCJwdXRhXCIsXG4gICAgXCJwdXRvXCIsXG4gICAgXCJxYWhiZWhcIixcbiAgICBcInF1ZWVmKlwiLFxuICAgIFwicmF1dGVuYmVyZ1wiLFxuICAgIFwic2NoYWZmZXJcIixcbiAgICBcInNjaGVpc3MqXCIsXG4gICAgXCJzY2hsYW1wZVwiLFxuICAgIFwic2NobXVja1wiLFxuICAgIFwic2NyZXdcIixcbiAgICBcInNoIXQqXCIsXG4gICAgXCJzaGFybXV0YVwiLFxuICAgIFwic2hhcm11dGVcIixcbiAgICBcInNoaXBhbFwiLFxuICAgIFwic2hpelwiLFxuICAgIFwic2tyaWJ6XCIsXG4gICAgXCJza3Vyd3lzeW5cIixcbiAgICBcInNwaGVuY3RlclwiLFxuICAgIFwic3BpY1wiLFxuICAgIFwic3BpZXJkYWxhalwiLFxuICAgIFwic3Bsb29nZVwiLFxuICAgIFwic3VrYVwiLFxuICAgIFwiYjAwYipcIixcbiAgICBcInRlc3RpY2xlKlwiLFxuICAgIFwidGl0dCpcIixcbiAgICBcInR3YXRcIixcbiAgICBcInZpdHR1XCIsXG4gICAgXCJ3YW5rKlwiLFxuICAgIFwid2V0YmFjaypcIixcbiAgICBcIndpY2hzZXJcIixcbiAgICBcIndvcCpcIixcbiAgICBcInllZFwiLFxuICAgIFwiemFib3VyYWhcIixcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogSW1wb3J0cyB0aGUgbXNncGFjayBsaWJyYXJ5XG4gKi9cbi8vY29uc3QgbXNncGFjayA9IHJlcXVpcmUoXCJtc2dwYWNrXCIpO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IFBsYXllcnMgfSBmcm9tIFwiLi9QbGF5ZXJzL1BsYXllck1hbmFnZXJcIjtcbmltcG9ydCB7IGJhZFdvcmRzIH0gZnJvbSBcIi4vYmFkV29yZHNcIjtcbmltcG9ydCB7IE9iamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9CdWlsZGluZ3MvQnVpbGRpbmdNYW5hZ2VyXCI7XG4vKipcbiAqIEEgY2xhc3MgZm9yIGVuY29kaW5nIGFuZCBkZWNvZGluZyBkYXRhIHVzaW5nIE1lc3NhZ2VQYWNrXG4gKi9cbnZhciBNc2dwYWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1zZ3BhY2soKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVuY29kZXMgZGF0YSB1c2luZyBNZXNzYWdlUGFja1xuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGRhdGEgVGhlIGRhdGEgdG8gZW5jb2RlXG4gICAgICogQHJldHVybnMge0J1ZmZlcn0gVGhlIGVuY29kZWQgZGF0YVxuICAgICAqL1xuICAgIE1zZ3BhY2sucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBtc2dwYWNrLmVuY29kZShkYXRhKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlY29kZXMgZGF0YSB1c2luZyBNZXNzYWdlUGFja1xuICAgICAqXG4gICAgICogQHBhcmFtIHtCdWZmZXJ9IGRhdGEgVGhlIGRhdGEgdG8gZGVjb2RlXG4gICAgICogQHJldHVybnMge2FueX0gVGhlIGRlY29kZWQgZGF0YVxuICAgICAqL1xuICAgIE1zZ3BhY2sucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBtc2dwYWNrLmRlY29kZShkYXRhKTtcbiAgICB9O1xuICAgIHJldHVybiBNc2dwYWNrO1xufSgpKTtcbi8qKlxuICogQSBjbGFzcyBmb3IgaGFuZGxpbmcgV2ViU29ja2V0IGNvbm5lY3Rpb25zIGFuZCBzZW5kaW5nL3JlY2VpdmluZyBwYWNrZXRzXG4gKi9cbnZhciBXUyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoV1MsIF9zdXBlcik7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBXUygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMud3MgPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgcGFja2V0IG92ZXIgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBwYWNrZXRcbiAgICAgKiBAcGFyYW0gey4uLmFueVtdfSBkYXRhIFRoZSBkYXRhIHRvIHNlbmRcbiAgICAgKi9cbiAgICBXUy5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciBkYXRhID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBkYXRhW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy53cykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWypdIFdlYlNvY2tldCBpcyBub3QgaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMud3Muc2VuZCh0aGlzLmVuY29kZShbdHlwZSwgZGF0YV0pKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgaW5jb21pbmcgcGFja2V0cyBmcm9tIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnl9IGRhdGEgVGhlIGluY29taW5nIHBhY2tldCBkYXRhXG4gICAgICovXG4gICAgV1MucHJvdG90eXBlLmhhbmRsZVBhY2tldHMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gICAgICAgIHZhciBwYXJzZWQgPSB0aGlzLmRlY29kZShkYXRhKTtcbiAgICAgICAgdmFyIHR5cGUgPSBwYXJzZWRbMF07XG4gICAgICAgIHZhciBwYWNrZXREYXRhID0gcGFyc2VkWzFdO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJBXCIpIHtcbiAgICAgICAgICAgIC8vIFNFVCBJTklUIERBVEE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJCXCIpIHtcbiAgICAgICAgICAgIC8vIERJU0NPTk5FQ1Q6XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJEXCIpIHtcbiAgICAgICAgICAgIC8vIEFERCBQTEFZRVI6XG4gICAgICAgICAgICBQbGF5ZXJzLmFkZFBsYXllcihwYWNrZXREYXRhWzBdWzBdLCBwYWNrZXREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkVcIikge1xuICAgICAgICAgICAgLy8gUkVNT1ZFIFBMQVlFUjpcbiAgICAgICAgICAgIC8vUGxheWVycy5yZW1vdmVQbGF5ZXIoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiYVwiKSB7XG4gICAgICAgICAgICAvLyBVUERBVEUgUExBWUVSUzpcbiAgICAgICAgICAgIFBsYXllcnMudXBkYXRlUGxheWVycyhwYWNrZXREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkhcIikge1xuICAgICAgICAgICAgLy8gTE9BRCBHQU1FIE9CSkVDVDpcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybih0aGlzLmRlY29kZShkYXRhKSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDgpIHtcbiAgICAgICAgICAgICAgICBPYmplY3RNYW5hZ2VyLmFkZEJ1aWxkaW5nKGRhdGFbaV0sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coT2JqZWN0TWFuYWdlci5CdWlsZGluZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiS1wiKSB7XG4gICAgICAgICAgICAvLyBHQVRIRVIgQU5JTUFUSU9OOlxuICAgICAgICAgICAgaWYgKHBhY2tldERhdGFbMl0pXG4gICAgICAgICAgICAgICAgdmFyIGJvbmsgPSBuZXcgQXVkaW8oXCJodHRwczovL2Nkbi5nbGl0Y2guZ2xvYmFsLzFkMWRhZmE5LWJhNWEtNDdlNy1hNGU3LWJjYmYwODUxNTgzZC9ib25rLm1wNFwiKTtcbiAgICAgICAgICAgIGJvbmsucGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiT1wiKSB7XG4gICAgICAgICAgICAvLyBVUERBVEUgSEVBTFRIOlxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiNlwiKSB7XG4gICAgICAgICAgICAvLyBSRUNFSVZFIENIQVQ6XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBXUztcbn0oTXNncGFjaykpO1xuLyoqXG4gKiBNb25rZXkgcGF0Y2hlcyB0aGUgV2ViU29ja2V0IHByb3RvdHlwZSB0byBhZGQgYSBjdXN0b20gc2VuZCBtZXRob2RcbiAqL1xuV2ViU29ja2V0LnByb3RvdHlwZS5zZW5kMiA9IFdlYlNvY2tldC5wcm90b3R5cGUuc2VuZDsgLy8gc28gaXQgd29uJ3QgY2FsbCBpdHNlbGYgZWFjaCB0aW1lXG5XZWJTb2NrZXQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgcGFyYW0gPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBwYXJhbVtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm1vZCkge1xuICAgICAgICB0aGlzLm1vZCA9IG5ldyBXUygpO1xuICAgICAgICB0aGlzLm1vZC53cyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgX3RoaXMubW9kLmhhbmRsZVBhY2tldHMobXNnLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gQU5USSBQUk9GQU5JVFkgRklMVEVSOlxuICAgIGlmICh0aGlzLm1vZC5kZWNvZGUocGFja2V0KVswXSA9PSBcIjZcIiAmJlxuICAgICAgICBiYWRXb3Jkcy5zb21lKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMubW9kLmRlY29kZShwYWNrZXQpWzFdWzBdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMod29yZCk7XG4gICAgICAgIH0pKSB7XG4gICAgICAgIHZhciBtc2cgPSB0aGlzLm1vZC5kZWNvZGUocGFja2V0KVsxXVswXTtcbiAgICAgICAgdGhpcy5zZW5kMih0aGlzLm1vZC5lbmNvZGUoW1wiNlwiLCBbbXNnLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbXNnLnNsaWNlKDEpXV0pKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2VuZDIocGFja2V0KTtcbiAgICB9XG59O1xuLyoqXG4gKiBUaGUgR2FtZSBjbGFzcywgd2hpY2ggZXh0ZW5kcyBXUyBhbmQgYWRkcyBnYW1lLXNwZWNpZmljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHNcbiAqL1xudmFyIEdhbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEdhbWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmVuZW1pZXMgPSBbXTtcbiAgICAgICAgX3RoaXMudGVhbW1hdGVzID0gW107XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBHYW1lIGNsYXNzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7R2FtZX0gVGhlIHNpbmdsZXRvbiBpbnN0YW5jZVxuICAgICAqL1xuICAgIEdhbWUuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghR2FtZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgR2FtZS5pbnN0YW5jZSA9IG5ldyBHYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEdhbWUuaW5zdGFuY2U7XG4gICAgfTtcbiAgICByZXR1cm4gR2FtZTtcbn0oV1MpKTtcbmV4cG9ydCB7IEdhbWUgfTtcbnZhciBNb2QgPSBHYW1lLmdldEluc3RhbmNlKCk7XG5hbGVydChcIk1vb01vbyBUUyBMb2FkZWRcIik7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZU5hbWVcIikuaW5uZXJIVE1MID0gXCJcXG48aW1nIHNyYz1cXFwiaHR0cHM6Ly9jZG4uZ2xpdGNoLmdsb2JhbC8xZDFkYWZhOS1iYTVhLTQ3ZTctYTRlNy1iY2JmMDg1MTU4M2QvJTVCcmVtb3ZhbC5haSU1RF9mNWIwN2JmYi1kMjUwLTRhOGYtODcxNC0yYjVmNGU1YWYzZDItYmFubmVyLnBuZz92PTE3MjAwOTMzMzgyMDFcXFwiPlxcblwiO1xuICAgIC8vIEdBTUUgT1ZFUkxBWTpcbiAgICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5zdHlsZSA9IFwiXFxucG9zaXRpb246IGFic29sdXRlO1xcbnRvcDogMDtcXG5sZWZ0OiAwO1xcbmJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDE4NSwgMC4xNSk7XFxud2lkdGg6IDEwMCU7XFxuaGVpZ2h0OiAxMDAlO1xcbnBvaW50ZXItZXZlbnRzOiBub25lO1xcblwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgLy8gVkVSSUZJQ0FUSU9OIFBST01QVDpcbiAgICB2YXIgVmVyaWZpY2F0aW9uUHJvbXB0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBWZXJpZmljYXRpb25Qcm9tcHQoKSB7XG4gICAgICAgIH1cbiAgICAgICAgVmVyaWZpY2F0aW9uUHJvbXB0LnByb3RvdHlwZS5wcmVwYXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ibHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuYmx1ci5zdHlsZS5jc3NUZXh0ID0gXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDQwLCAwLjMpO1xcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xcbiAgICAgIHotaW5kZXg6IDg4ODc7XFxuICAgIFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJsdXIpO1xuICAgICAgICAgICAgdGhpcy5tYWluSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlci5zdHlsZS5jc3NUZXh0ID0gXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIHdpZHRoOiAzNSU7XFxuICAgICAgaGVpZ2h0OiAyMCU7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxODUsIDE4NSwgMTg1LCAwLjk1KTtcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgICBib3JkZXI6IDZweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgei1pbmRleDogODg4ODtcXG4gICAgXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubWFpbkhvbGRlcik7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGUuaW5uZXJIVE1MID0gXCJBdXRoZW50aWNhdGlvbi5cIjtcbiAgICAgICAgICAgIHRoaXMudGl0bGUuc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMzUlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgIGNvbG9yOiAjMDAwO1xcbiAgICAgIGZvbnQ6IDMycHggQXJpYWw7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIFwiO1xuICAgICAgICAgICAgdGhpcy5tYWluSG9sZGVyLmFwcGVuZENoaWxkKHRoaXMudGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIFRva2VuIEhlcmUuLi5cIjtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuMyk7XFxuICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICBib3R0b206IDUlO1xcbiAgICAgIGxlZnQ6IDMlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICBcIjtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGhpcy5jaGVjay5zdHlsZS5jc3NUZXh0ID0gXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiA1JTtcXG4gICAgICByaWdodDogMyU7XFxuICAgICAgd2lkdGg6IDkwcHg7XFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDcsIDExNywgMTkzLCAwLjIpO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250OiAyMHB4IEFyaWFsO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFwiO1xuICAgICAgICAgICAgdGhpcy5jaGVjay5pbm5lckhUTUwgPSBcIlZlcmlmeVwiO1xuICAgICAgICAgICAgdGhpcy5tYWluSG9sZGVyLmFwcGVuZENoaWxkKHRoaXMuY2hlY2spO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVmVyaWZpY2F0aW9uUHJvbXB0O1xuICAgIH0oKSk7XG4gICAgdmFyIHZlcmlmeSA9IG5ldyBWZXJpZmljYXRpb25Qcm9tcHQoKTtcbiAgICAvL3ZlcmlmeS5wcmVwYXJlKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9