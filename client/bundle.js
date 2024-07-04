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

var players = _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.getInstance().players;

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
            console.log(_Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer);
            _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.updatePlayers(packetData);
        }
        else if (type === "H") {
            // LOAD GAME OBJECT:
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
    if (this.mod.decode(packet)[0] == "6" && _badWords__WEBPACK_IMPORTED_MODULE_1__.badWords.some(function (word) { return _this.mod.decode(packet)[1][0].toLowerCase().includes(word); })) {
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
document.getElementById("gameName").innerHTML = "\n<img src=\"https://cdn.glitch.global/1d1dafa9-ba5a-47e7-a4e7-bcbf0851583d/%5Bremoval.ai%5D_f5b07bfb-d250-4a8f-8714-2b5f4e5af3d2-banner.png?v=1720093338201\">\n";
//dark mode overlay
var overlay = document.createElement("div");
overlay.style = "\nposition: absolute;\ntop: 0;\nleft: 0;\nbackground: rgba(255, 255, 185, 0.15);\nwidth: 100%;\nheight: 100%;\npointer-events: none;\n";
document.body.appendChild(overlay);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaGNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllcnMvUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9QbGF5ZXJzL1BsYXllck1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllcnMvdXBkYXRlUGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9VVElMUy9GaW5kUGxheWVyQnlTSUQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhZFdvcmRzLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9HYW1lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIFBsYXllciBjbGFzcyAqL1xudmFyIFBsYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQbGF5ZXIoc2lkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2lkID0gc2lkO1xuICAgICAgICB0aGlzLmlzVGVhbSA9IGZ1bmN0aW9uICh0bXBPYmopIHtcbiAgICAgICAgICAgIHJldHVybiAodG1wT2JqLnNpZCA9PT0gX3RoaXMuc2lkIHx8IHRtcE9iai50ZWFtICYmIHRtcE9iai50ZWFtID09PSBfdGhpcy50ZWFtKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSU5JVDpcbiAgICAgICAgdGhpcy5pbml0ID0gZnVuY3Rpb24gKGlkLCBuYW1lLCB4LCB5LCBkaXIsIGhlYWx0aCwgbWF4SGVhbHRoLCBzY2FsZSwgc2tpbkNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgICAgICAgICAgdGhpcy5kaXIgPSBkaXI7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgICAgIHRoaXMubWF4SGVhbHRoID0gbWF4SGVhbHRoO1xuICAgICAgICAgICAgdGhpcy5sYXN0SGVhbHRoID0gdGhpcy5oZWFsdGg7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgICAgIHRoaXMueDIgPSB4O1xuICAgICAgICAgICAgdGhpcy55MiA9IHk7XG4gICAgICAgICAgICB0aGlzLngzID0gMDtcbiAgICAgICAgICAgIHRoaXMueTMgPSAwO1xuICAgICAgICAgICAgdGhpcy5za2luSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXN0U2tpbkluZGV4ID0gdGhpcy5za2luSW5kZXg7XG4gICAgICAgICAgICB0aGlzLnRhaWxJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLmxhc3RUYWlsSW5kZXggPSB0aGlzLnRhaWxJbmRleDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIFBsYXllcjtcbn0oKSk7XG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsIi8qKlxuICogSW1wb3J0c1xuICovXG5pbXBvcnQgeyBmaW5kUGxheWVyQnlTaWQgfSBmcm9tIFwiLi4vVVRJTFMvRmluZFBsYXllckJ5U0lEXCI7IC8vIEltcG9ydCBmdW5jdGlvbiB0byBmaW5kIGEgcGxheWVyIGJ5IHRoZWlyIFNJRFxuaW1wb3J0IHsgdXBkYXRlUGxheWVyIH0gZnJvbSBcIi4vdXBkYXRlUGxheWVyXCI7IC8vIEltcG9ydCBmdW5jdGlvbiB0byB1cGRhdGUgYSBwbGF5ZXIncyBpbmZvcm1hdGlvblxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7IC8vIEltcG9ydCBwbGF5ZXIgY2xhc3Ncbi8qKlxuICogUGxheWVyIE1hbmFnZXIgY2xhc3NcbiAqXG4gKiBUaGlzIGNsYXNzIG1hbmFnZXMgYSBjb2xsZWN0aW9uIG9mIHBsYXllcnMgYW5kIHByb3ZpZGVzIG1ldGhvZHMgdG8gYWRkLCByZW1vdmUsIGFuZCB1cGRhdGUgcGxheWVycy5cbiAqXG4gKiBAbWVtYmVyT2YgbW9kdWxlOlBsYXllcnNcbiAqL1xudmFyIFBsYXllcnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGxheWVycygpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBQbGF5ZXJzIGNsYXNzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UGxheWVyc30gVGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgUGxheWVycyBjbGFzc1xuICAgICAqIEBtZW1iZXJPZiBQbGF5ZXJzXG4gICAgICogQGV4YW1wbGUgY29uc3QgcGxheWVycyA9IFBsYXllcnMuZ2V0SW5zdGFuY2UoKTtcbiAgICAgKi9cbiAgICBQbGF5ZXJzLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIVBsYXllcnMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIFBsYXllcnMuaW5zdGFuY2UgPSBuZXcgUGxheWVycygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQbGF5ZXJzLmluc3RhbmNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkcyBhIHBsYXllciB0byB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFNJRCBUaGUgU0lEIGZvciB0aGUgcGxheWVyXG4gICAgICogQHBhcmFtIHthbnlbXX0gZGF0YSBUaGUgcGxheWVyJ3MgZGF0YVxuICAgICAqIEBtZW1iZXJPZiBQbGF5ZXJzXG4gICAgICogQGV4YW1wbGUgcGxheWVycy5hZGRQbGF5ZXIoMSwgeyBuYW1lOiBcIk9uaW9uXCIsIHNraW46IFwiX19wcm90b19fXCJ9KTtcbiAgICAgKi9cbiAgICBQbGF5ZXJzLmFkZFBsYXllciA9IGZ1bmN0aW9uIChTSUQsIGRhdGEpIHtcbiAgICAgICAgLyogRGF0YSBmb3JtYXQ6XG4gIFxuICAgICAgICAwOiB7aWQsIHNpZCwgbmFtZSwgeCwgeSwgc29tZXRoaW5nLCBoZWFsdGgsIHNvbWV0aGluZywgc2NhbGU/LCBzb21ldGhpbmd9XG4gICAgICAgIDE6IHRydWUvZmFsc2UgZm9yIHllcy9ubyBpcyBtZVxuICAgICAgICAqL1xuICAgICAgICBpZiAoZGF0YVsxXSkge1xuICAgICAgICAgICAgLy8gTVkgUExBWUVSOlxuICAgICAgICAgICAgUGxheWVycy5teVBsYXllciA9IG5ldyBQbGF5ZXIoU0lEKTtcbiAgICAgICAgICAgIFBsYXllcnMucGxheWVycy5wdXNoKFBsYXllcnMubXlQbGF5ZXIpO1xuICAgICAgICAgICAgLy8gSU5JVDpcbiAgICAgICAgICAgIFBsYXllcnMubXlQbGF5ZXIuaW5pdChkYXRhWzBdWzBdLCBkYXRhWzBdWzJdLCBkYXRhWzBdWzNdLCBkYXRhWzBdWzRdLCBkYXRhWzBdWzVdLCBkYXRhWzBdWzZdLCBkYXRhWzBdWzddLCBkYXRhWzBdWzhdLCBkYXRhWzBdWzldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0bXBPYmogPSBuZXcgUGxheWVyKFNJRCk7XG4gICAgICAgICAgICBQbGF5ZXJzLnBsYXllcnMucHVzaCh0bXBPYmopO1xuICAgICAgICAgICAgdG1wT2JqLmluaXQoZGF0YVswXVswXSwgZGF0YVswXVsyXSwgZGF0YVswXVszXSwgZGF0YVswXVs0XSwgZGF0YVswXVs1XSwgZGF0YVswXVs2XSwgZGF0YVswXVs3XSwgZGF0YVswXVs4XSwgZGF0YVswXVs5XSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBwbGF5ZXIgZnJvbSB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpZCBUaGUgU0lEIGZvciB0aGUgcGxheWVyIHRvIHJlbW92ZVxuICAgICAqIEBtZW1iZXJPZiBQbGF5ZXJzXG4gICAgICogQGV4YW1wbGUgcGxheWVycy5yZW1vdmVQbGF5ZXIoMTApO1xuICAgICAqL1xuICAgIFBsYXllcnMucHJvdG90eXBlLnJlbW92ZVBsYXllciA9IGZ1bmN0aW9uIChzaWQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gUGxheWVycy5wbGF5ZXJzLmluZGV4T2YoUGxheWVycy5wbGF5ZXJzLmZpbmQoZnVuY3Rpb24gKHBsYXllcikgeyByZXR1cm4gcGxheWVyLnNpZCA9PT0gc2lkOyB9KSwgMCk7XG4gICAgICAgIGRlbGV0ZSBQbGF5ZXJzLnBsYXllcnNbaW5kZXhdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgcGxheWVycyBpbiB0aGUgY29sbGVjdGlvbiBiYXNlZCBvbiBuZXcgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIHthbnlbXX0gZGF0YSBUaGUgbmV3IGRhdGEgdG8gdXBkYXRlIHRoZSBwbGF5ZXJzIHdpdGhcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIHBsYXllcnMudXBkYXRlUGxheWVycyh0bXBQbGF5ZXIpO1xuICAgICAqL1xuICAgIFBsYXllcnMudXBkYXRlUGxheWVycyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIFVucmVuZGVyIGFsbCBwbGF5ZXJzIGFuZCByZXJlbmRlciBwbGF5ZXJzIGluIHJhbmdlXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgdG1wUGxheWVyID0gdGhpcy5wbGF5ZXJzW2ldO1xuICAgICAgICAgICAgdG1wUGxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDEzKSB7XG4gICAgICAgICAgICB2YXIgdG1wUGxheWVyID0gZmluZFBsYXllckJ5U2lkKGRhdGFbMF0pO1xuICAgICAgICAgICAgaWYgKHRtcFBsYXllcikge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVBsYXllcih0bXBQbGF5ZXIsIGRhdGEsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBcnJheSBvZiBwbGF5ZXJzXG4gICAgICovXG4gICAgUGxheWVycy5wbGF5ZXJzID0gW107XG4gICAgLyoqXG4gICAgICogTXkgcGxheWVyXG4gICAgICovXG4gICAgUGxheWVycy5teVBsYXllciA9IHt9O1xuICAgIHJldHVybiBQbGF5ZXJzO1xufSgpKTtcbmV4cG9ydCB7IFBsYXllcnMgfTtcbiIsImV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQbGF5ZXIocGxheWVyLCBkYXRhLCBpbmRleCkge1xuICAgIHBsYXllci50MSA9IChwbGF5ZXIudDIgPT09IHZvaWQgMCA/IERhdGUubm93KCkgOiBwbGF5ZXIudDIpO1xuICAgIHBsYXllci50MiA9IERhdGUubm93KCk7XG4gICAgcGxheWVyLmxhc1BvcyA9IHtcbiAgICAgICAgeDogcGxheWVyLngyLFxuICAgICAgICB5OiBwbGF5ZXIueTJcbiAgICB9O1xuICAgIHBsYXllci54MiA9IGRhdGFbaW5kZXggKyAxXTtcbiAgICBwbGF5ZXIueTIgPSBkYXRhW2luZGV4ICsgMl07XG4gICAgcGxheWVyLmQxID0gKHBsYXllci5kMiA9PT0gdm9pZCAwID8gZGF0YVtpbmRleCArIDNdIDogcGxheWVyLmQyKTtcbiAgICBwbGF5ZXIuZGVsdGEgPSAwO1xuICAgIHBsYXllci53ZWFwb25JbmRleCA9IGRhdGFbaW5kZXggKyA1XTtcbiAgICBwbGF5ZXIud2VhcG9uSW5kZXggPCA5ICYmIChwbGF5ZXIud2VhcG9uc1swXSA9IHBsYXllci53ZWFwb25JbmRleCk7XG4gICAgcGxheWVyLndlYXBvbkluZGV4ID49IDkgJiYgKHBsYXllci53ZWFwb25zWzFdID0gcGxheWVyLndlYXBvbkluZGV4KTtcbiAgICBwbGF5ZXIud2VhcG9uVmFyaWFudCA9IGRhdGFbaW5kZXggKyA2XTtcbiAgICBwbGF5ZXIudGVhbSA9IGRhdGFbaW5kZXggKyA3XTtcbiAgICBwbGF5ZXIubGFzdFNraW5JbmRleCA9IHBsYXllci5za2luSW5kZXg7XG4gICAgcGxheWVyLnNraW5JbmRleCA9IGRhdGFbaW5kZXggKyA5XTtcbiAgICBwbGF5ZXIubGFzdFRhaWxJbmRleCA9IHBsYXllci50YWlsSW5kZXg7XG4gICAgcGxheWVyLnRhaWxJbmRleCA9IGRhdGFbaW5kZXggKyAxMF07XG4gICAgcGxheWVyLnZpc2libGUgPSB0cnVlO1xufVxuIiwiLyoqXG4gKiBJbXBvcnRzIHRoZSBQbGF5ZXJzIGNsYXNzXG4gKi9cbmltcG9ydCB7IFBsYXllcnMgfSBmcm9tIFwiLi4vUGxheWVycy9QbGF5ZXJNYW5hZ2VyXCI7XG4vKipcbiAqIEZpbmRzIGEgcGxheWVyIGJ5IHRoZWlyIFNJRFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaWQgVGhlIFNJRCBvZiB0aGUgcGxheWVyIHRvIGZpbmRcbiAqIEByZXR1cm5zIHthbnl9IFRoZSBwbGF5ZXIgd2l0aCB0aGUgbWF0Y2hpbmcgU0lELCBvciB1bmRlZmluZWQgaWYgbm90IGZvdW5kXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkZpbmRQbGF5ZXJCeVNJRFxuICogQGV4YW1wbGUgZmluZFBsYXllckJ5U2lkKDEyMyk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGxheWVyQnlTaWQoc2lkKSB7XG4gICAgLyoqXG4gICAgICogVXNlcyB0aGUgZmluZCBtZXRob2QgdG8gc2VhcmNoIHRoZSBwbGF5ZXJzIGFycmF5IGZvciBhIHBsYXllciB3aXRoIGEgbWF0Y2hpbmcgU0lEXG4gICAgICovXG4gICAgcmV0dXJuIFBsYXllcnMucGxheWVycy5maW5kKGZ1bmN0aW9uIChwbGF5ZXIpIHsgcmV0dXJuIHBsYXllci5zaWQgPT09IHNpZDsgfSk7XG59XG4iLCJleHBvcnQgdmFyIGJhZFdvcmRzID0gW1xuICAgIFwiYWhvbGVcIixcbiAgICBcImFudXNcIixcbiAgICBcImFzaDBsZVwiLFxuICAgIFwiYXNoMGxlc1wiLFxuICAgIFwiYXNob2xlc1wiLFxuICAgIFwiYXNzXCIsXG4gICAgXCJBc3MgTW9ua2V5XCIsXG4gICAgXCJBc3NmYWNlXCIsXG4gICAgXCJhc3NoMGxlXCIsXG4gICAgXCJhc3NoMGxlelwiLFxuICAgIFwiYXNzaG9sZVwiLFxuICAgIFwiYXNzaG9sZXNcIixcbiAgICBcImFzc2hvbHpcIixcbiAgICBcImFzc3dpcGVcIixcbiAgICBcImF6emhvbGVcIixcbiAgICBcImJhc3N0ZXJkc1wiLFxuICAgIFwiYmFzdGFyZFwiLFxuICAgIFwiYmFzdGFyZHNcIixcbiAgICBcImJhc3RhcmR6XCIsXG4gICAgXCJiYXN0ZXJkc1wiLFxuICAgIFwiYmFzdGVyZHpcIixcbiAgICBcIkJpYXRjaFwiLFxuICAgIFwiYml0Y2hcIixcbiAgICBcImJpdGNoZXNcIixcbiAgICBcIkJsb3cgSm9iXCIsXG4gICAgXCJib2ZmaW5nXCIsXG4gICAgXCJidXR0aG9sZVwiLFxuICAgIFwiYnV0dHdpcGVcIixcbiAgICBcImMwY2tcIixcbiAgICBcImMwY2tzXCIsXG4gICAgXCJjMGtcIixcbiAgICBcIkNhcnBldCBNdW5jaGVyXCIsXG4gICAgXCJjYXdrXCIsXG4gICAgXCJjYXdrc1wiLFxuICAgIFwiQ2xpdFwiLFxuICAgIFwiY250c1wiLFxuICAgIFwiY250elwiLFxuICAgIFwiY29ja1wiLFxuICAgIFwiY29ja2hlYWRcIixcbiAgICBcImNvY2staGVhZFwiLFxuICAgIFwiY29ja3NcIixcbiAgICBcIkNvY2tTdWNrZXJcIixcbiAgICBcImNvY2stc3Vja2VyXCIsXG4gICAgXCJjcmFwXCIsXG4gICAgXCJjdW1cIixcbiAgICBcImN1bnRcIixcbiAgICBcImN1bnRzXCIsXG4gICAgXCJjdW50elwiLFxuICAgIFwiZGlja1wiLFxuICAgIFwiZGlsZDBcIixcbiAgICBcImRpbGQwc1wiLFxuICAgIFwiZGlsZG9cIixcbiAgICBcImRpbGRvc1wiLFxuICAgIFwiZGlsbGQwXCIsXG4gICAgXCJkaWxsZDBzXCIsXG4gICAgXCJkb21pbmF0cmlja3NcIixcbiAgICBcImRvbWluYXRyaWNzXCIsXG4gICAgXCJkb21pbmF0cml4XCIsXG4gICAgXCJkeWtlXCIsXG4gICAgXCJlbmVtYVwiLFxuICAgIFwiZiB1IGMga1wiLFxuICAgIFwiZiB1IGMgayBlIHJcIixcbiAgICBcImZhZ1wiLFxuICAgIFwiZmFnMXRcIixcbiAgICBcImZhZ2V0XCIsXG4gICAgXCJmYWdnMXRcIixcbiAgICBcImZhZ2dpdFwiLFxuICAgIFwiZmFnZ290XCIsXG4gICAgXCJmYWdnMHRcIixcbiAgICBcImZhZ2l0XCIsXG4gICAgXCJmYWdzXCIsXG4gICAgXCJmYWd6XCIsXG4gICAgXCJmYWlnXCIsXG4gICAgXCJmYWlnc1wiLFxuICAgIFwiZmFydFwiLFxuICAgIFwiZmxpcHBpbmcgdGhlIGJpcmRcIixcbiAgICBcImZ1Y2tcIixcbiAgICBcImZ1Y2tlclwiLFxuICAgIFwiZnVja2luXCIsXG4gICAgXCJmdWNraW5nXCIsXG4gICAgXCJmdWNrc1wiLFxuICAgIFwiRnVkZ2UgUGFja2VyXCIsXG4gICAgXCJmdWtcIixcbiAgICBcIkZ1a2FoXCIsXG4gICAgXCJGdWtlblwiLFxuICAgIFwiZnVrZXJcIixcbiAgICBcIkZ1a2luXCIsXG4gICAgXCJGdWtrXCIsXG4gICAgXCJGdWtrYWhcIixcbiAgICBcIkZ1a2tlblwiLFxuICAgIFwiRnVra2VyXCIsXG4gICAgXCJGdWtraW5cIixcbiAgICBcImcwMGtcIixcbiAgICBcIkdvZC1kYW1uZWRcIixcbiAgICBcImgwMHJcIixcbiAgICBcImgwYXJcIixcbiAgICBcImgwcmVcIixcbiAgICBcImhlbGxzXCIsXG4gICAgXCJob2FyXCIsXG4gICAgXCJob29yXCIsXG4gICAgXCJob29yZVwiLFxuICAgIFwiamFja29mZlwiLFxuICAgIFwiamFwXCIsXG4gICAgXCJqYXBzXCIsXG4gICAgXCJqZXJrLW9mZlwiLFxuICAgIFwiamlzaW1cIixcbiAgICBcImppc3NcIixcbiAgICBcImppem1cIixcbiAgICBcImppenpcIixcbiAgICBcImtub2JcIixcbiAgICBcImtub2JzXCIsXG4gICAgXCJrbm9ielwiLFxuICAgIFwia3VudFwiLFxuICAgIFwia3VudHNcIixcbiAgICBcImt1bnR6XCIsXG4gICAgXCJMZXp6aWFuXCIsXG4gICAgXCJMaXBzaGl0c1wiLFxuICAgIFwiTGlwc2hpdHpcIixcbiAgICBcIm1hc29jaGlzdFwiLFxuICAgIFwibWFzb2tpc3RcIixcbiAgICBcIm1hc3N0ZXJiYWl0XCIsXG4gICAgXCJtYXNzdHJiYWl0XCIsXG4gICAgXCJtYXNzdHJiYXRlXCIsXG4gICAgXCJtYXN0ZXJiYWl0ZXJcIixcbiAgICBcIm1hc3RlcmJhdGVcIixcbiAgICBcIm1hc3RlcmJhdGVzXCIsXG4gICAgXCJNb3RoYSBGdWNrZXJcIixcbiAgICBcIk1vdGhhIEZ1a2VyXCIsXG4gICAgXCJNb3RoYSBGdWtrYWhcIixcbiAgICBcIk1vdGhhIEZ1a2tlclwiLFxuICAgIFwiTW90aGVyIEZ1Y2tlclwiLFxuICAgIFwiTW90aGVyIEZ1a2FoXCIsXG4gICAgXCJNb3RoZXIgRnVrZXJcIixcbiAgICBcIk1vdGhlciBGdWtrYWhcIixcbiAgICBcIk1vdGhlciBGdWtrZXJcIixcbiAgICBcIm1vdGhlci1mdWNrZXJcIixcbiAgICBcIk11dGhhIEZ1Y2tlclwiLFxuICAgIFwiTXV0aGEgRnVrYWhcIixcbiAgICBcIk11dGhhIEZ1a2VyXCIsXG4gICAgXCJNdXRoYSBGdWtrYWhcIixcbiAgICBcIk11dGhhIEZ1a2tlclwiLFxuICAgIFwibjFnclwiLFxuICAgIFwibmFzdHRcIixcbiAgICBcIm5pZ2dlcjtcIixcbiAgICBcIm5pZ3VyO1wiLFxuICAgIFwibmlpZ2VyO1wiLFxuICAgIFwibmlpZ3I7XCIsXG4gICAgXCJvcmFmaXNcIixcbiAgICBcIm9yZ2FzaW07XCIsXG4gICAgXCJvcmdhc21cIixcbiAgICBcIm9yZ2FzdW1cIixcbiAgICBcIm9yaWZhY2VcIixcbiAgICBcIm9yaWZpY2VcIixcbiAgICBcIm9yaWZpc3NcIixcbiAgICBcInBhY2tpXCIsXG4gICAgXCJwYWNraWVcIixcbiAgICBcInBhY2t5XCIsXG4gICAgXCJwYWtpXCIsXG4gICAgXCJwYWtpZVwiLFxuICAgIFwicGFreVwiLFxuICAgIFwicGVja2VyXCIsXG4gICAgXCJwZWVlbnVzXCIsXG4gICAgXCJwZWVlbnVzc3NcIixcbiAgICBcInBlZW51c1wiLFxuICAgIFwicGVpbnVzXCIsXG4gICAgXCJwZW4xc1wiLFxuICAgIFwicGVuYXNcIixcbiAgICBcInBlbmlzXCIsXG4gICAgXCJwZW5pcy1icmVhdGhcIixcbiAgICBcInBlbnVzXCIsXG4gICAgXCJwZW51dXNcIixcbiAgICBcIlBodWNcIixcbiAgICBcIlBodWNrXCIsXG4gICAgXCJQaHVrXCIsXG4gICAgXCJQaHVrZXJcIixcbiAgICBcIlBodWtrZXJcIixcbiAgICBcInBvbGFjXCIsXG4gICAgXCJwb2xhY2tcIixcbiAgICBcInBvbGFrXCIsXG4gICAgXCJQb29uYW5pXCIsXG4gICAgXCJwcjFjXCIsXG4gICAgXCJwcjFja1wiLFxuICAgIFwicHIxa1wiLFxuICAgIFwicHVzc2VcIixcbiAgICBcInB1c3NlZVwiLFxuICAgIFwicHVzc3lcIixcbiAgICBcInB1dWtlXCIsXG4gICAgXCJwdXVrZXJcIixcbiAgICBcInF3ZWlyXCIsXG4gICAgXCJyZWNrdHVtXCIsXG4gICAgXCJyZWN0dW1cIixcbiAgICBcInJldGFyZFwiLFxuICAgIFwic2FkaXN0XCIsXG4gICAgXCJzY2Fua1wiLFxuICAgIFwic2NobG9uZ1wiLFxuICAgIFwic2NyZXdpbmdcIixcbiAgICBcInNlbWVuXCIsXG4gICAgXCJzZXhcIixcbiAgICBcInNleHlcIixcbiAgICBcIlNoIXRcIixcbiAgICBcInNoMXRcIixcbiAgICBcInNoMXRlclwiLFxuICAgIFwic2gxdHNcIixcbiAgICBcInNoMXR0ZXJcIixcbiAgICBcInNoMXR6XCIsXG4gICAgXCJzaGl0XCIsXG4gICAgXCJzaGl0c1wiLFxuICAgIFwic2hpdHRlclwiLFxuICAgIFwiU2hpdHR5XCIsXG4gICAgXCJTaGl0eVwiLFxuICAgIFwic2hpdHpcIixcbiAgICBcIlNoeXRcIixcbiAgICBcIlNoeXRlXCIsXG4gICAgXCJTaHl0dHlcIixcbiAgICBcIlNoeXR5XCIsXG4gICAgXCJza2FuY2tcIixcbiAgICBcInNrYW5rXCIsXG4gICAgXCJza2Fua2VlXCIsXG4gICAgXCJza2Fua2V5XCIsXG4gICAgXCJza2Fua3NcIixcbiAgICBcIlNrYW5reVwiLFxuICAgIFwic2xhZ1wiLFxuICAgIFwic2x1dFwiLFxuICAgIFwic2x1dHNcIixcbiAgICBcIlNsdXR0eVwiLFxuICAgIFwic2x1dHpcIixcbiAgICBcInNvbi1vZi1hLWJpdGNoXCIsXG4gICAgXCJ0aXRcIixcbiAgICBcInR1cmRcIixcbiAgICBcInZhMWppbmFcIixcbiAgICBcInZhZzFuYVwiLFxuICAgIFwidmFnaWluYVwiLFxuICAgIFwidmFnaW5hXCIsXG4gICAgXCJ2YWoxbmFcIixcbiAgICBcInZhamluYVwiLFxuICAgIFwidnVsbHZhXCIsXG4gICAgXCJ2dWx2YVwiLFxuICAgIFwidzBwXCIsXG4gICAgXCJ3aDAwclwiLFxuICAgIFwid2gwcmVcIixcbiAgICBcIndob3JlXCIsXG4gICAgXCJ4cmF0ZWRcIixcbiAgICBcInh4eFwiLFxuICAgIFwiYiErY2hcIixcbiAgICBcImJpdGNoXCIsXG4gICAgXCJibG93am9iXCIsXG4gICAgXCJjbGl0XCIsXG4gICAgXCJhcnNjaGxvY2hcIixcbiAgICBcImZ1Y2tcIixcbiAgICBcInNoaXRcIixcbiAgICBcImFzc1wiLFxuICAgIFwiYXNzaG9sZVwiLFxuICAgIFwiYiF0Y2hcIixcbiAgICBcImIxN2NoXCIsXG4gICAgXCJiMXRjaFwiLFxuICAgIFwiYmFzdGFyZFwiLFxuICAgIFwiYmkrY2hcIixcbiAgICBcImJvaW9sYXNcIixcbiAgICBcImJ1Y2V0YVwiLFxuICAgIFwiYzBja1wiLFxuICAgIFwiY2F3a1wiLFxuICAgIFwiY2hpbmtcIixcbiAgICBcImNpcGFcIixcbiAgICBcImNsaXRzXCIsXG4gICAgXCJjb2NrXCIsXG4gICAgXCJjdW1cIixcbiAgICBcImN1bnRcIixcbiAgICBcImRpbGRvXCIsXG4gICAgXCJkaXJzYVwiLFxuICAgIFwiZWpha3VsYXRlXCIsXG4gICAgXCJmYXRhc3NcIixcbiAgICBcImZjdWtcIixcbiAgICBcImZ1a1wiLFxuICAgIFwiZnV4MHJcIixcbiAgICBcImhvZXJcIixcbiAgICBcImhvcmVcIixcbiAgICBcImppc21cIixcbiAgICBcImthd2tcIixcbiAgICBcImwzaXRjaFwiLFxuICAgIFwibDNpK2NoXCIsXG4gICAgXCJtYXN0dXJiYXRlXCIsXG4gICAgXCJtYXN0ZXJiYXQqXCIsXG4gICAgXCJtYXN0ZXJiYXQzXCIsXG4gICAgXCJtb3RoZXJmdWNrZXJcIixcbiAgICBcInMuby5iLlwiLFxuICAgIFwibW9mb1wiLFxuICAgIFwibmF6aVwiLFxuICAgIFwibmlnZ2FcIixcbiAgICBcIm5pZ2dlclwiLFxuICAgIFwibnV0c2Fja1wiLFxuICAgIFwicGh1Y2tcIixcbiAgICBcInBpbXBpc1wiLFxuICAgIFwicHVzc2VcIixcbiAgICBcInB1c3N5XCIsXG4gICAgXCJzY3JvdHVtXCIsXG4gICAgXCJzaCF0XCIsXG4gICAgXCJzaGVtYWxlXCIsXG4gICAgXCJzaGkrXCIsXG4gICAgXCJzaCErXCIsXG4gICAgXCJzbHV0XCIsXG4gICAgXCJzbXV0XCIsXG4gICAgXCJ0ZWV0c1wiLFxuICAgIFwidGl0c1wiLFxuICAgIFwiYm9vYnNcIixcbiAgICBcImIwMGJzXCIsXG4gICAgXCJ0ZWV6XCIsXG4gICAgXCJ0ZXN0aWNhbFwiLFxuICAgIFwidGVzdGljbGVcIixcbiAgICBcInRpdHRcIixcbiAgICBcIncwMHNlXCIsXG4gICAgXCJqYWNrb2ZmXCIsXG4gICAgXCJ3YW5rXCIsXG4gICAgXCJ3aG9hclwiLFxuICAgIFwid2hvcmVcIixcbiAgICBcIipkYW1uXCIsXG4gICAgXCIqZHlrZVwiLFxuICAgIFwiKmZ1Y2sqXCIsXG4gICAgXCIqc2hpdCpcIixcbiAgICBcIkAkJFwiLFxuICAgIFwiYW1jaWtcIixcbiAgICBcImFuZHNrb3RhXCIsXG4gICAgXCJhcnNlKlwiLFxuICAgIFwiYXNzcmFtbWVyXCIsXG4gICAgXCJheWlyXCIsXG4gICAgXCJiaTdjaFwiLFxuICAgIFwiYml0Y2gqXCIsXG4gICAgXCJib2xsb2NrKlwiLFxuICAgIFwiYnJlYXN0c1wiLFxuICAgIFwiYnV0dC1waXJhdGVcIixcbiAgICBcImNhYnJvblwiLFxuICAgIFwiY2F6em9cIixcbiAgICBcImNocmFhXCIsXG4gICAgXCJjaHVqXCIsXG4gICAgXCJDb2NrKlwiLFxuICAgIFwiY3VudCpcIixcbiAgICBcImQ0bW5cIixcbiAgICBcImRheWdvXCIsXG4gICAgXCJkZWdvXCIsXG4gICAgXCJkaWNrKlwiLFxuICAgIFwiZGlrZSpcIixcbiAgICBcImR1cGFcIixcbiAgICBcImR6aXdrYVwiLFxuICAgIFwiZWphY2t1bGF0ZVwiLFxuICAgIFwiRWtyZW0qXCIsXG4gICAgXCJFa3RvXCIsXG4gICAgXCJlbmN1bGVyXCIsXG4gICAgXCJmYWVuXCIsXG4gICAgXCJmYWcqXCIsXG4gICAgXCJmYW5jdWxvXCIsXG4gICAgXCJmYW5ueVwiLFxuICAgIFwiZmVjZXNcIixcbiAgICBcImZlZ1wiLFxuICAgIFwiRmVsY2hlclwiLFxuICAgIFwiZmlja2VuXCIsXG4gICAgXCJmaXR0KlwiLFxuICAgIFwiRmxpa2tlclwiLFxuICAgIFwiZm9yZXNraW5cIixcbiAgICBcIkZvdHplXCIsXG4gICAgXCJGdSgqXCIsXG4gICAgXCJmdWsqXCIsXG4gICAgXCJmdXRrcmV0em5cIixcbiAgICBcImdvb2tcIixcbiAgICBcImd1aWVuYVwiLFxuICAgIFwiaDByXCIsXG4gICAgXCJoNHgwclwiLFxuICAgIFwiaGVsbFwiLFxuICAgIFwiaGVsdmV0ZVwiLFxuICAgIFwiaG9lcipcIixcbiAgICBcImhvbmtleVwiLFxuICAgIFwiSHVldm9uXCIsXG4gICAgXCJodWlcIixcbiAgICBcImluanVuXCIsXG4gICAgXCJqaXp6XCIsXG4gICAgXCJrYW5rZXIqXCIsXG4gICAgXCJraWtlXCIsXG4gICAgXCJrbG9vdHpha1wiLFxuICAgIFwia3JhdXRcIixcbiAgICBcImtudWxsZVwiLFxuICAgIFwia3VrXCIsXG4gICAgXCJrdWtzdWdlclwiLFxuICAgIFwiS3VyYWNcIixcbiAgICBcImt1cndhXCIsXG4gICAgXCJrdXNpKlwiLFxuICAgIFwia3lycGEqXCIsXG4gICAgXCJsZXNib1wiLFxuICAgIFwibWFtaG9vblwiLFxuICAgIFwibWFzdHVyYmF0KlwiLFxuICAgIFwibWVyZCpcIixcbiAgICBcIm1pYnVuXCIsXG4gICAgXCJtb25rbGVpZ2hcIixcbiAgICBcIm1vdWxpZXdvcFwiLFxuICAgIFwibXVpZVwiLFxuICAgIFwibXVsa2t1XCIsXG4gICAgXCJtdXNjaGlcIixcbiAgICBcIm5hemlzXCIsXG4gICAgXCJuZXBlc2F1cmlvXCIsXG4gICAgXCJuaWdnZXIqXCIsXG4gICAgXCJvcm9zcHVcIixcbiAgICBcInBhc2thKlwiLFxuICAgIFwicGVyc2VcIixcbiAgICBcInBpY2thXCIsXG4gICAgXCJwaWVyZG9sKlwiLFxuICAgIFwicGlsbHUqXCIsXG4gICAgXCJwaW1tZWxcIixcbiAgICBcInBpc3MqXCIsXG4gICAgXCJwaXpkYVwiLFxuICAgIFwicG9vbnRzZWVcIixcbiAgICBcInBvb3BcIixcbiAgICBcInBvcm5cIixcbiAgICBcInAwcm5cIixcbiAgICBcInByMG5cIixcbiAgICBcInByZXRlZW5cIixcbiAgICBcInB1bGFcIixcbiAgICBcInB1bGVcIixcbiAgICBcInB1dGFcIixcbiAgICBcInB1dG9cIixcbiAgICBcInFhaGJlaFwiLFxuICAgIFwicXVlZWYqXCIsXG4gICAgXCJyYXV0ZW5iZXJnXCIsXG4gICAgXCJzY2hhZmZlclwiLFxuICAgIFwic2NoZWlzcypcIixcbiAgICBcInNjaGxhbXBlXCIsXG4gICAgXCJzY2htdWNrXCIsXG4gICAgXCJzY3Jld1wiLFxuICAgIFwic2ghdCpcIixcbiAgICBcInNoYXJtdXRhXCIsXG4gICAgXCJzaGFybXV0ZVwiLFxuICAgIFwic2hpcGFsXCIsXG4gICAgXCJzaGl6XCIsXG4gICAgXCJza3JpYnpcIixcbiAgICBcInNrdXJ3eXN5blwiLFxuICAgIFwic3BoZW5jdGVyXCIsXG4gICAgXCJzcGljXCIsXG4gICAgXCJzcGllcmRhbGFqXCIsXG4gICAgXCJzcGxvb2dlXCIsXG4gICAgXCJzdWthXCIsXG4gICAgXCJiMDBiKlwiLFxuICAgIFwidGVzdGljbGUqXCIsXG4gICAgXCJ0aXR0KlwiLFxuICAgIFwidHdhdFwiLFxuICAgIFwidml0dHVcIixcbiAgICBcIndhbmsqXCIsXG4gICAgXCJ3ZXRiYWNrKlwiLFxuICAgIFwid2ljaHNlclwiLFxuICAgIFwid29wKlwiLFxuICAgIFwieWVkXCIsXG4gICAgXCJ6YWJvdXJhaFwiLFxuXTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBJbXBvcnRzIHRoZSBtc2dwYWNrIGxpYnJhcnlcbiAqL1xuLy9jb25zdCBtc2dwYWNrID0gcmVxdWlyZShcIm1zZ3BhY2tcIik7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgUGxheWVycyB9IGZyb20gXCIuL1BsYXllcnMvUGxheWVyTWFuYWdlclwiO1xudmFyIHBsYXllcnMgPSBQbGF5ZXJzLmdldEluc3RhbmNlKCkucGxheWVycztcbmltcG9ydCB7IGJhZFdvcmRzIH0gZnJvbSBcIi4vYmFkV29yZHNcIjtcbi8qKlxuICogQSBjbGFzcyBmb3IgZW5jb2RpbmcgYW5kIGRlY29kaW5nIGRhdGEgdXNpbmcgTWVzc2FnZVBhY2tcbiAqL1xudmFyIE1zZ3BhY2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTXNncGFjaygpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5jb2RlcyBkYXRhIHVzaW5nIE1lc3NhZ2VQYWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueX0gZGF0YSBUaGUgZGF0YSB0byBlbmNvZGVcbiAgICAgKiBAcmV0dXJucyB7QnVmZmVyfSBUaGUgZW5jb2RlZCBkYXRhXG4gICAgICovXG4gICAgTXNncGFjay5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1zZ3BhY2suZW5jb2RlKGRhdGEpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVjb2RlcyBkYXRhIHVzaW5nIE1lc3NhZ2VQYWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBUaGUgZGF0YSB0byBkZWNvZGVcbiAgICAgKiBAcmV0dXJucyB7YW55fSBUaGUgZGVjb2RlZCBkYXRhXG4gICAgICovXG4gICAgTXNncGFjay5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1zZ3BhY2suZGVjb2RlKGRhdGEpO1xuICAgIH07XG4gICAgcmV0dXJuIE1zZ3BhY2s7XG59KCkpO1xuLyoqXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBXZWJTb2NrZXQgY29ubmVjdGlvbnMgYW5kIHNlbmRpbmcvcmVjZWl2aW5nIHBhY2tldHNcbiAqL1xudmFyIFdTID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhXUywgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFdTKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy53cyA9IG51bGw7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBwYWNrZXQgb3ZlciB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIHBhY2tldFxuICAgICAqIEBwYXJhbSB7Li4uYW55W119IGRhdGEgVGhlIGRhdGEgdG8gc2VuZFxuICAgICAqL1xuICAgIFdTLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGRhdGFbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLndzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbKl0gV2ViU29ja2V0IGlzIG5vdCBpbml0aWFsaXplZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgdGhpcy53cy5zZW5kKHRoaXMuZW5jb2RlKFt0eXBlLCBkYXRhXSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBpbmNvbWluZyBwYWNrZXRzIGZyb20gdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueX0gZGF0YSBUaGUgaW5jb21pbmcgcGFja2V0IGRhdGFcbiAgICAgKi9cbiAgICBXUy5wcm90b3R5cGUuaGFuZGxlUGFja2V0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHRoaXMuZGVjb2RlKGRhdGEpO1xuICAgICAgICB2YXIgdHlwZSA9IHBhcnNlZFswXTtcbiAgICAgICAgdmFyIHBhY2tldERhdGEgPSBwYXJzZWRbMV07XG4gICAgICAgIGlmICh0eXBlID09PSBcIkFcIikge1xuICAgICAgICAgICAgLy8gU0VUIElOSVQgREFUQTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkJcIikge1xuICAgICAgICAgICAgLy8gRElTQ09OTkVDVDpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkRcIikge1xuICAgICAgICAgICAgLy8gQUREIFBMQVlFUjpcbiAgICAgICAgICAgIFBsYXllcnMuYWRkUGxheWVyKHBhY2tldERhdGFbMF1bMF0sIHBhY2tldERhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiRVwiKSB7XG4gICAgICAgICAgICAvLyBSRU1PVkUgUExBWUVSOlxuICAgICAgICAgICAgLy9QbGF5ZXJzLnJlbW92ZVBsYXllcigpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgIC8vIFVQREFURSBQTEFZRVJTOlxuICAgICAgICAgICAgY29uc29sZS5sb2coUGxheWVycy5teVBsYXllcik7XG4gICAgICAgICAgICBQbGF5ZXJzLnVwZGF0ZVBsYXllcnMocGFja2V0RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJIXCIpIHtcbiAgICAgICAgICAgIC8vIExPQUQgR0FNRSBPQkpFQ1Q6XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJLXCIpIHtcbiAgICAgICAgICAgIC8vIEdBVEhFUiBBTklNQVRJT046XG4gICAgICAgICAgICBpZiAocGFja2V0RGF0YVsyXSlcbiAgICAgICAgICAgICAgICB2YXIgYm9uayA9IG5ldyBBdWRpbyhcImh0dHBzOi8vY2RuLmdsaXRjaC5nbG9iYWwvMWQxZGFmYTktYmE1YS00N2U3LWE0ZTctYmNiZjA4NTE1ODNkL2JvbmsubXA0XCIpO1xuICAgICAgICAgICAgYm9uay5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJPXCIpIHtcbiAgICAgICAgICAgIC8vIFVQREFURSBIRUFMVEg6XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCI2XCIpIHtcbiAgICAgICAgICAgIC8vIFJFQ0VJVkUgQ0hBVDpcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFdTO1xufShNc2dwYWNrKSk7XG4vKipcbiAqIE1vbmtleSBwYXRjaGVzIHRoZSBXZWJTb2NrZXQgcHJvdG90eXBlIHRvIGFkZCBhIGN1c3RvbSBzZW5kIG1ldGhvZFxuICovXG5XZWJTb2NrZXQucHJvdG90eXBlLnNlbmQyID0gV2ViU29ja2V0LnByb3RvdHlwZS5zZW5kOyAvLyBzbyBpdCB3b24ndCBjYWxsIGl0c2VsZiBlYWNoIHRpbWVcbldlYlNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBwYXJhbSA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHBhcmFtW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubW9kKSB7XG4gICAgICAgIHRoaXMubW9kID0gbmV3IFdTKCk7XG4gICAgICAgIHRoaXMubW9kLndzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICBfdGhpcy5tb2QuaGFuZGxlUGFja2V0cyhtc2cuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBBTlRJIFBST0ZBTklUWSBGSUxURVI6XG4gICAgaWYgKHRoaXMubW9kLmRlY29kZShwYWNrZXQpWzBdID09IFwiNlwiICYmIGJhZFdvcmRzLnNvbWUoZnVuY3Rpb24gKHdvcmQpIHsgcmV0dXJuIF90aGlzLm1vZC5kZWNvZGUocGFja2V0KVsxXVswXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHdvcmQpOyB9KSkge1xuICAgICAgICB2YXIgbXNnID0gdGhpcy5tb2QuZGVjb2RlKHBhY2tldClbMV1bMF07XG4gICAgICAgIHRoaXMuc2VuZDIodGhpcy5tb2QuZW5jb2RlKFtcIjZcIiwgW21zZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1zZy5zbGljZSgxKV1dKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNlbmQyKHBhY2tldCk7XG4gICAgfVxufTtcbi8qKlxuICogVGhlIEdhbWUgY2xhc3MsIHdoaWNoIGV4dGVuZHMgV1MgYW5kIGFkZHMgZ2FtZS1zcGVjaWZpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzXG4gKi9cbnZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHYW1lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdhbWUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5lbmVtaWVzID0gW107XG4gICAgICAgIF90aGlzLnRlYW1tYXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgR2FtZSBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybnMge0dhbWV9IFRoZSBzaW5nbGV0b24gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBHYW1lLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIUdhbWUuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEdhbWUuaW5zdGFuY2UgPSBuZXcgR2FtZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBHYW1lLmluc3RhbmNlO1xuICAgIH07XG4gICAgcmV0dXJuIEdhbWU7XG59KFdTKSk7XG5leHBvcnQgeyBHYW1lIH07XG52YXIgTW9kID0gR2FtZS5nZXRJbnN0YW5jZSgpO1xuYWxlcnQoXCJNb29Nb28gVFMgTG9hZGVkXCIpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lTmFtZVwiKS5pbm5lckhUTUwgPSBcIlxcbjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5nbGl0Y2guZ2xvYmFsLzFkMWRhZmE5LWJhNWEtNDdlNy1hNGU3LWJjYmYwODUxNTgzZC8lNUJyZW1vdmFsLmFpJTVEX2Y1YjA3YmZiLWQyNTAtNGE4Zi04NzE0LTJiNWY0ZTVhZjNkMi1iYW5uZXIucG5nP3Y9MTcyMDA5MzMzODIwMVxcXCI+XFxuXCI7XG4vL2RhcmsgbW9kZSBvdmVybGF5XG52YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5vdmVybGF5LnN0eWxlID0gXCJcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxudG9wOiAwO1xcbmxlZnQ6IDA7XFxuYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMTg1LCAwLjE1KTtcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IDEwMCU7XFxucG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXCI7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9