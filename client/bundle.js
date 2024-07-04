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
        this.init = function (id, name, x, y) {
            this.id = id;
            this.name = name;
            this.health = 100;
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
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/Players/Player.ts");
/**
 * Imports
 */
//import { findPlayerBySid } from "../UTILS/FindPlayerBySID"; // Import function to find a player by their SID
//import { updatePlayer } from "./updatePlayer"; // Import function to update a player's information
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
        /**
         * Array of players
         */
        this.players = [];
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
        var tmpObj = new _Player__WEBPACK_IMPORTED_MODULE_0__.Player(SID);
        // INIT:
        tmpObj.init.apply(tmpObj, data);
        this.players.push(_Player__WEBPACK_IMPORTED_MODULE_0__.Player);
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
            //const tmpPlayer: any = findPlayerBySid(data[0]);
            //if (tmpPlayer) {
            //  updatePlayer(tmpPlayer, data, i);
            //}
        }
    };
    /**
     * My player
     */
    Players.myPlayer = {};
    return Players;
}());



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
/* harmony import */ var _Players_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Players/Player */ "./src/Players/Player.ts");
/* harmony import */ var _badWords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badWords */ "./src/badWords.ts");
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
            console.log(packetData);
            if (packetData[1]) {
                // MY PLAYER:
                /* Data format:
        
                0: {id, sid, name, x, y, something, health, something, scale?, something}
                1: true/false for yes/no is me
                */
                players.myPlayer = new _Players_Player__WEBPACK_IMPORTED_MODULE_1__.Player(packetData[0][1]);
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
    if (this.mod.decode(packet)[0] == "6" && _badWords__WEBPACK_IMPORTED_MODULE_2__.badWords.some(function (word) { return _this.mod.decode(packet)[1][0].toLowerCase().includes(word); })) {
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
overlay.style = "\nposition: absolute;\ntop: 0;\nleft: 0;\nbackground: rgba(0, 0, 70, 0.35);\nwidth: 100%;\nheight: 100%;\npointer-events: none;\n";
document.body.appendChild(overlay);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9QbGF5ZXJzL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxheWVycy9QbGF5ZXJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWRXb3Jkcy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvR2FtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQbGF5ZXIgY2xhc3MgKi9cbnZhciBQbGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUGxheWVyKHNpZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNpZCA9IHNpZDtcbiAgICAgICAgdGhpcy5pc1RlYW0gPSBmdW5jdGlvbiAodG1wT2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRtcE9iai5zaWQgPT09IF90aGlzLnNpZCB8fCB0bXBPYmoudGVhbSAmJiB0bXBPYmoudGVhbSA9PT0gX3RoaXMudGVhbSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIElOSVQ6XG4gICAgICAgIHRoaXMuaW5pdCA9IGZ1bmN0aW9uIChpZCwgbmFtZSwgeCwgeSkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xuICAgICAgICAgICAgdGhpcy5sYXN0SGVhbHRoID0gdGhpcy5oZWFsdGg7XG4gICAgICAgICAgICB0aGlzLnggPSAwO1xuICAgICAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgICAgIHRoaXMueDIgPSB4O1xuICAgICAgICAgICAgdGhpcy55MiA9IHk7XG4gICAgICAgICAgICB0aGlzLngzID0gMDtcbiAgICAgICAgICAgIHRoaXMueTMgPSAwO1xuICAgICAgICAgICAgdGhpcy5za2luSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXN0U2tpbkluZGV4ID0gdGhpcy5za2luSW5kZXg7XG4gICAgICAgICAgICB0aGlzLnRhaWxJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLmxhc3RUYWlsSW5kZXggPSB0aGlzLnRhaWxJbmRleDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIFBsYXllcjtcbn0oKSk7XG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsIi8qKlxuICogSW1wb3J0c1xuICovXG4vL2ltcG9ydCB7IGZpbmRQbGF5ZXJCeVNpZCB9IGZyb20gXCIuLi9VVElMUy9GaW5kUGxheWVyQnlTSURcIjsgLy8gSW1wb3J0IGZ1bmN0aW9uIHRvIGZpbmQgYSBwbGF5ZXIgYnkgdGhlaXIgU0lEXG4vL2ltcG9ydCB7IHVwZGF0ZVBsYXllciB9IGZyb20gXCIuL3VwZGF0ZVBsYXllclwiOyAvLyBJbXBvcnQgZnVuY3Rpb24gdG8gdXBkYXRlIGEgcGxheWVyJ3MgaW5mb3JtYXRpb25cbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiOyAvLyBJbXBvcnQgcGxheWVyIGNsYXNzXG4vKipcbiAqIFBsYXllciBNYW5hZ2VyIGNsYXNzXG4gKlxuICogVGhpcyBjbGFzcyBtYW5hZ2VzIGEgY29sbGVjdGlvbiBvZiBwbGF5ZXJzIGFuZCBwcm92aWRlcyBtZXRob2RzIHRvIGFkZCwgcmVtb3ZlLCBhbmQgdXBkYXRlIHBsYXllcnMuXG4gKlxuICogQG1lbWJlck9mIG1vZHVsZTpQbGF5ZXJzXG4gKi9cbnZhciBQbGF5ZXJzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBsYXllcnMoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcnJheSBvZiBwbGF5ZXJzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBQbGF5ZXJzIGNsYXNzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UGxheWVyc30gVGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgUGxheWVycyBjbGFzc1xuICAgICAqIEBtZW1iZXJPZiBQbGF5ZXJzXG4gICAgICogQGV4YW1wbGUgY29uc3QgcGxheWVycyA9IFBsYXllcnMuZ2V0SW5zdGFuY2UoKTtcbiAgICAgKi9cbiAgICBQbGF5ZXJzLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIVBsYXllcnMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIFBsYXllcnMuaW5zdGFuY2UgPSBuZXcgUGxheWVycygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQbGF5ZXJzLmluc3RhbmNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRkcyBhIHBsYXllciB0byB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFNJRCBUaGUgU0lEIGZvciB0aGUgcGxheWVyXG4gICAgICogQHBhcmFtIHthbnlbXX0gZGF0YSBUaGUgcGxheWVyJ3MgZGF0YVxuICAgICAqIEBtZW1iZXJPZiBQbGF5ZXJzXG4gICAgICogQGV4YW1wbGUgcGxheWVycy5hZGRQbGF5ZXIoMSwgeyBuYW1lOiBcIk9uaW9uXCIsIHNraW46IFwiX19wcm90b19fXCJ9KTtcbiAgICAgKi9cbiAgICBQbGF5ZXJzLnByb3RvdHlwZS5hZGRQbGF5ZXIgPSBmdW5jdGlvbiAoU0lEKSB7XG4gICAgICAgIHZhciBkYXRhID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBkYXRhW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0bXBPYmogPSBuZXcgUGxheWVyKFNJRCk7XG4gICAgICAgIC8vIElOSVQ6XG4gICAgICAgIHRtcE9iai5pbml0LmFwcGx5KHRtcE9iaiwgZGF0YSk7XG4gICAgICAgIHRoaXMucGxheWVycy5wdXNoKFBsYXllcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgcGxheWVyIGZyb20gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWQgVGhlIFNJRCBmb3IgdGhlIHBsYXllciB0byByZW1vdmVcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIHBsYXllcnMucmVtb3ZlUGxheWVyKDEwKTtcbiAgICAgKi9cbiAgICBQbGF5ZXJzLnByb3RvdHlwZS5yZW1vdmVQbGF5ZXIgPSBmdW5jdGlvbiAoc2lkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMucGxheWVycy5pbmRleE9mKHRoaXMucGxheWVycy5maW5kKGZ1bmN0aW9uIChwbGF5ZXIpIHsgcmV0dXJuIHBsYXllci5zaWQgPT09IHNpZDsgfSksIDApO1xuICAgICAgICBkZWxldGUgdGhpcy5wbGF5ZXJzW2luZGV4XTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHBsYXllcnMgaW4gdGhlIGNvbGxlY3Rpb24gYmFzZWQgb24gbmV3IGRhdGFcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55W119IGRhdGEgVGhlIG5ldyBkYXRhIHRvIHVwZGF0ZSB0aGUgcGxheWVycyB3aXRoXG4gICAgICogQG1lbWJlck9mIFBsYXllcnNcbiAgICAgKiBAZXhhbXBsZSBwbGF5ZXJzLnVwZGF0ZVBsYXllcnModG1wUGxheWVyKTtcbiAgICAgKi9cbiAgICBQbGF5ZXJzLnByb3RvdHlwZS51cGRhdGVQbGF5ZXJzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy8gVW5yZW5kZXIgYWxsIHBsYXllcnMgYW5kIHJlcmVuZGVyIHBsYXllcnMgaW4gcmFuZ2VcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciB0bXBQbGF5ZXIgPSB0aGlzLnBsYXllcnNbaV07XG4gICAgICAgICAgICB0bXBQbGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMTMpIHtcbiAgICAgICAgICAgIC8vY29uc3QgdG1wUGxheWVyOiBhbnkgPSBmaW5kUGxheWVyQnlTaWQoZGF0YVswXSk7XG4gICAgICAgICAgICAvL2lmICh0bXBQbGF5ZXIpIHtcbiAgICAgICAgICAgIC8vICB1cGRhdGVQbGF5ZXIodG1wUGxheWVyLCBkYXRhLCBpKTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNeSBwbGF5ZXJcbiAgICAgKi9cbiAgICBQbGF5ZXJzLm15UGxheWVyID0ge307XG4gICAgcmV0dXJuIFBsYXllcnM7XG59KCkpO1xuZXhwb3J0IHsgUGxheWVycyB9O1xuIiwiZXhwb3J0IHZhciBiYWRXb3JkcyA9IFtcbiAgICBcImFob2xlXCIsXG4gICAgXCJhbnVzXCIsXG4gICAgXCJhc2gwbGVcIixcbiAgICBcImFzaDBsZXNcIixcbiAgICBcImFzaG9sZXNcIixcbiAgICBcImFzc1wiLFxuICAgIFwiQXNzIE1vbmtleVwiLFxuICAgIFwiQXNzZmFjZVwiLFxuICAgIFwiYXNzaDBsZVwiLFxuICAgIFwiYXNzaDBsZXpcIixcbiAgICBcImFzc2hvbGVcIixcbiAgICBcImFzc2hvbGVzXCIsXG4gICAgXCJhc3Nob2x6XCIsXG4gICAgXCJhc3N3aXBlXCIsXG4gICAgXCJhenpob2xlXCIsXG4gICAgXCJiYXNzdGVyZHNcIixcbiAgICBcImJhc3RhcmRcIixcbiAgICBcImJhc3RhcmRzXCIsXG4gICAgXCJiYXN0YXJkelwiLFxuICAgIFwiYmFzdGVyZHNcIixcbiAgICBcImJhc3RlcmR6XCIsXG4gICAgXCJCaWF0Y2hcIixcbiAgICBcImJpdGNoXCIsXG4gICAgXCJiaXRjaGVzXCIsXG4gICAgXCJCbG93IEpvYlwiLFxuICAgIFwiYm9mZmluZ1wiLFxuICAgIFwiYnV0dGhvbGVcIixcbiAgICBcImJ1dHR3aXBlXCIsXG4gICAgXCJjMGNrXCIsXG4gICAgXCJjMGNrc1wiLFxuICAgIFwiYzBrXCIsXG4gICAgXCJDYXJwZXQgTXVuY2hlclwiLFxuICAgIFwiY2F3a1wiLFxuICAgIFwiY2F3a3NcIixcbiAgICBcIkNsaXRcIixcbiAgICBcImNudHNcIixcbiAgICBcImNudHpcIixcbiAgICBcImNvY2tcIixcbiAgICBcImNvY2toZWFkXCIsXG4gICAgXCJjb2NrLWhlYWRcIixcbiAgICBcImNvY2tzXCIsXG4gICAgXCJDb2NrU3Vja2VyXCIsXG4gICAgXCJjb2NrLXN1Y2tlclwiLFxuICAgIFwiY3JhcFwiLFxuICAgIFwiY3VtXCIsXG4gICAgXCJjdW50XCIsXG4gICAgXCJjdW50c1wiLFxuICAgIFwiY3VudHpcIixcbiAgICBcImRpY2tcIixcbiAgICBcImRpbGQwXCIsXG4gICAgXCJkaWxkMHNcIixcbiAgICBcImRpbGRvXCIsXG4gICAgXCJkaWxkb3NcIixcbiAgICBcImRpbGxkMFwiLFxuICAgIFwiZGlsbGQwc1wiLFxuICAgIFwiZG9taW5hdHJpY2tzXCIsXG4gICAgXCJkb21pbmF0cmljc1wiLFxuICAgIFwiZG9taW5hdHJpeFwiLFxuICAgIFwiZHlrZVwiLFxuICAgIFwiZW5lbWFcIixcbiAgICBcImYgdSBjIGtcIixcbiAgICBcImYgdSBjIGsgZSByXCIsXG4gICAgXCJmYWdcIixcbiAgICBcImZhZzF0XCIsXG4gICAgXCJmYWdldFwiLFxuICAgIFwiZmFnZzF0XCIsXG4gICAgXCJmYWdnaXRcIixcbiAgICBcImZhZ2dvdFwiLFxuICAgIFwiZmFnZzB0XCIsXG4gICAgXCJmYWdpdFwiLFxuICAgIFwiZmFnc1wiLFxuICAgIFwiZmFnelwiLFxuICAgIFwiZmFpZ1wiLFxuICAgIFwiZmFpZ3NcIixcbiAgICBcImZhcnRcIixcbiAgICBcImZsaXBwaW5nIHRoZSBiaXJkXCIsXG4gICAgXCJmdWNrXCIsXG4gICAgXCJmdWNrZXJcIixcbiAgICBcImZ1Y2tpblwiLFxuICAgIFwiZnVja2luZ1wiLFxuICAgIFwiZnVja3NcIixcbiAgICBcIkZ1ZGdlIFBhY2tlclwiLFxuICAgIFwiZnVrXCIsXG4gICAgXCJGdWthaFwiLFxuICAgIFwiRnVrZW5cIixcbiAgICBcImZ1a2VyXCIsXG4gICAgXCJGdWtpblwiLFxuICAgIFwiRnVra1wiLFxuICAgIFwiRnVra2FoXCIsXG4gICAgXCJGdWtrZW5cIixcbiAgICBcIkZ1a2tlclwiLFxuICAgIFwiRnVra2luXCIsXG4gICAgXCJnMDBrXCIsXG4gICAgXCJHb2QtZGFtbmVkXCIsXG4gICAgXCJoMDByXCIsXG4gICAgXCJoMGFyXCIsXG4gICAgXCJoMHJlXCIsXG4gICAgXCJoZWxsc1wiLFxuICAgIFwiaG9hclwiLFxuICAgIFwiaG9vclwiLFxuICAgIFwiaG9vcmVcIixcbiAgICBcImphY2tvZmZcIixcbiAgICBcImphcFwiLFxuICAgIFwiamFwc1wiLFxuICAgIFwiamVyay1vZmZcIixcbiAgICBcImppc2ltXCIsXG4gICAgXCJqaXNzXCIsXG4gICAgXCJqaXptXCIsXG4gICAgXCJqaXp6XCIsXG4gICAgXCJrbm9iXCIsXG4gICAgXCJrbm9ic1wiLFxuICAgIFwia25vYnpcIixcbiAgICBcImt1bnRcIixcbiAgICBcImt1bnRzXCIsXG4gICAgXCJrdW50elwiLFxuICAgIFwiTGV6emlhblwiLFxuICAgIFwiTGlwc2hpdHNcIixcbiAgICBcIkxpcHNoaXR6XCIsXG4gICAgXCJtYXNvY2hpc3RcIixcbiAgICBcIm1hc29raXN0XCIsXG4gICAgXCJtYXNzdGVyYmFpdFwiLFxuICAgIFwibWFzc3RyYmFpdFwiLFxuICAgIFwibWFzc3RyYmF0ZVwiLFxuICAgIFwibWFzdGVyYmFpdGVyXCIsXG4gICAgXCJtYXN0ZXJiYXRlXCIsXG4gICAgXCJtYXN0ZXJiYXRlc1wiLFxuICAgIFwiTW90aGEgRnVja2VyXCIsXG4gICAgXCJNb3RoYSBGdWtlclwiLFxuICAgIFwiTW90aGEgRnVra2FoXCIsXG4gICAgXCJNb3RoYSBGdWtrZXJcIixcbiAgICBcIk1vdGhlciBGdWNrZXJcIixcbiAgICBcIk1vdGhlciBGdWthaFwiLFxuICAgIFwiTW90aGVyIEZ1a2VyXCIsXG4gICAgXCJNb3RoZXIgRnVra2FoXCIsXG4gICAgXCJNb3RoZXIgRnVra2VyXCIsXG4gICAgXCJtb3RoZXItZnVja2VyXCIsXG4gICAgXCJNdXRoYSBGdWNrZXJcIixcbiAgICBcIk11dGhhIEZ1a2FoXCIsXG4gICAgXCJNdXRoYSBGdWtlclwiLFxuICAgIFwiTXV0aGEgRnVra2FoXCIsXG4gICAgXCJNdXRoYSBGdWtrZXJcIixcbiAgICBcIm4xZ3JcIixcbiAgICBcIm5hc3R0XCIsXG4gICAgXCJuaWdnZXI7XCIsXG4gICAgXCJuaWd1cjtcIixcbiAgICBcIm5paWdlcjtcIixcbiAgICBcIm5paWdyO1wiLFxuICAgIFwib3JhZmlzXCIsXG4gICAgXCJvcmdhc2ltO1wiLFxuICAgIFwib3JnYXNtXCIsXG4gICAgXCJvcmdhc3VtXCIsXG4gICAgXCJvcmlmYWNlXCIsXG4gICAgXCJvcmlmaWNlXCIsXG4gICAgXCJvcmlmaXNzXCIsXG4gICAgXCJwYWNraVwiLFxuICAgIFwicGFja2llXCIsXG4gICAgXCJwYWNreVwiLFxuICAgIFwicGFraVwiLFxuICAgIFwicGFraWVcIixcbiAgICBcInBha3lcIixcbiAgICBcInBlY2tlclwiLFxuICAgIFwicGVlZW51c1wiLFxuICAgIFwicGVlZW51c3NzXCIsXG4gICAgXCJwZWVudXNcIixcbiAgICBcInBlaW51c1wiLFxuICAgIFwicGVuMXNcIixcbiAgICBcInBlbmFzXCIsXG4gICAgXCJwZW5pc1wiLFxuICAgIFwicGVuaXMtYnJlYXRoXCIsXG4gICAgXCJwZW51c1wiLFxuICAgIFwicGVudXVzXCIsXG4gICAgXCJQaHVjXCIsXG4gICAgXCJQaHVja1wiLFxuICAgIFwiUGh1a1wiLFxuICAgIFwiUGh1a2VyXCIsXG4gICAgXCJQaHVra2VyXCIsXG4gICAgXCJwb2xhY1wiLFxuICAgIFwicG9sYWNrXCIsXG4gICAgXCJwb2xha1wiLFxuICAgIFwiUG9vbmFuaVwiLFxuICAgIFwicHIxY1wiLFxuICAgIFwicHIxY2tcIixcbiAgICBcInByMWtcIixcbiAgICBcInB1c3NlXCIsXG4gICAgXCJwdXNzZWVcIixcbiAgICBcInB1c3N5XCIsXG4gICAgXCJwdXVrZVwiLFxuICAgIFwicHV1a2VyXCIsXG4gICAgXCJxd2VpclwiLFxuICAgIFwicmVja3R1bVwiLFxuICAgIFwicmVjdHVtXCIsXG4gICAgXCJyZXRhcmRcIixcbiAgICBcInNhZGlzdFwiLFxuICAgIFwic2NhbmtcIixcbiAgICBcInNjaGxvbmdcIixcbiAgICBcInNjcmV3aW5nXCIsXG4gICAgXCJzZW1lblwiLFxuICAgIFwic2V4XCIsXG4gICAgXCJzZXh5XCIsXG4gICAgXCJTaCF0XCIsXG4gICAgXCJzaDF0XCIsXG4gICAgXCJzaDF0ZXJcIixcbiAgICBcInNoMXRzXCIsXG4gICAgXCJzaDF0dGVyXCIsXG4gICAgXCJzaDF0elwiLFxuICAgIFwic2hpdFwiLFxuICAgIFwic2hpdHNcIixcbiAgICBcInNoaXR0ZXJcIixcbiAgICBcIlNoaXR0eVwiLFxuICAgIFwiU2hpdHlcIixcbiAgICBcInNoaXR6XCIsXG4gICAgXCJTaHl0XCIsXG4gICAgXCJTaHl0ZVwiLFxuICAgIFwiU2h5dHR5XCIsXG4gICAgXCJTaHl0eVwiLFxuICAgIFwic2thbmNrXCIsXG4gICAgXCJza2Fua1wiLFxuICAgIFwic2thbmtlZVwiLFxuICAgIFwic2thbmtleVwiLFxuICAgIFwic2thbmtzXCIsXG4gICAgXCJTa2Fua3lcIixcbiAgICBcInNsYWdcIixcbiAgICBcInNsdXRcIixcbiAgICBcInNsdXRzXCIsXG4gICAgXCJTbHV0dHlcIixcbiAgICBcInNsdXR6XCIsXG4gICAgXCJzb24tb2YtYS1iaXRjaFwiLFxuICAgIFwidGl0XCIsXG4gICAgXCJ0dXJkXCIsXG4gICAgXCJ2YTFqaW5hXCIsXG4gICAgXCJ2YWcxbmFcIixcbiAgICBcInZhZ2lpbmFcIixcbiAgICBcInZhZ2luYVwiLFxuICAgIFwidmFqMW5hXCIsXG4gICAgXCJ2YWppbmFcIixcbiAgICBcInZ1bGx2YVwiLFxuICAgIFwidnVsdmFcIixcbiAgICBcIncwcFwiLFxuICAgIFwid2gwMHJcIixcbiAgICBcIndoMHJlXCIsXG4gICAgXCJ3aG9yZVwiLFxuICAgIFwieHJhdGVkXCIsXG4gICAgXCJ4eHhcIixcbiAgICBcImIhK2NoXCIsXG4gICAgXCJiaXRjaFwiLFxuICAgIFwiYmxvd2pvYlwiLFxuICAgIFwiY2xpdFwiLFxuICAgIFwiYXJzY2hsb2NoXCIsXG4gICAgXCJmdWNrXCIsXG4gICAgXCJzaGl0XCIsXG4gICAgXCJhc3NcIixcbiAgICBcImFzc2hvbGVcIixcbiAgICBcImIhdGNoXCIsXG4gICAgXCJiMTdjaFwiLFxuICAgIFwiYjF0Y2hcIixcbiAgICBcImJhc3RhcmRcIixcbiAgICBcImJpK2NoXCIsXG4gICAgXCJib2lvbGFzXCIsXG4gICAgXCJidWNldGFcIixcbiAgICBcImMwY2tcIixcbiAgICBcImNhd2tcIixcbiAgICBcImNoaW5rXCIsXG4gICAgXCJjaXBhXCIsXG4gICAgXCJjbGl0c1wiLFxuICAgIFwiY29ja1wiLFxuICAgIFwiY3VtXCIsXG4gICAgXCJjdW50XCIsXG4gICAgXCJkaWxkb1wiLFxuICAgIFwiZGlyc2FcIixcbiAgICBcImVqYWt1bGF0ZVwiLFxuICAgIFwiZmF0YXNzXCIsXG4gICAgXCJmY3VrXCIsXG4gICAgXCJmdWtcIixcbiAgICBcImZ1eDByXCIsXG4gICAgXCJob2VyXCIsXG4gICAgXCJob3JlXCIsXG4gICAgXCJqaXNtXCIsXG4gICAgXCJrYXdrXCIsXG4gICAgXCJsM2l0Y2hcIixcbiAgICBcImwzaStjaFwiLFxuICAgIFwibWFzdHVyYmF0ZVwiLFxuICAgIFwibWFzdGVyYmF0KlwiLFxuICAgIFwibWFzdGVyYmF0M1wiLFxuICAgIFwibW90aGVyZnVja2VyXCIsXG4gICAgXCJzLm8uYi5cIixcbiAgICBcIm1vZm9cIixcbiAgICBcIm5hemlcIixcbiAgICBcIm5pZ2dhXCIsXG4gICAgXCJuaWdnZXJcIixcbiAgICBcIm51dHNhY2tcIixcbiAgICBcInBodWNrXCIsXG4gICAgXCJwaW1waXNcIixcbiAgICBcInB1c3NlXCIsXG4gICAgXCJwdXNzeVwiLFxuICAgIFwic2Nyb3R1bVwiLFxuICAgIFwic2ghdFwiLFxuICAgIFwic2hlbWFsZVwiLFxuICAgIFwic2hpK1wiLFxuICAgIFwic2ghK1wiLFxuICAgIFwic2x1dFwiLFxuICAgIFwic211dFwiLFxuICAgIFwidGVldHNcIixcbiAgICBcInRpdHNcIixcbiAgICBcImJvb2JzXCIsXG4gICAgXCJiMDBic1wiLFxuICAgIFwidGVlelwiLFxuICAgIFwidGVzdGljYWxcIixcbiAgICBcInRlc3RpY2xlXCIsXG4gICAgXCJ0aXR0XCIsXG4gICAgXCJ3MDBzZVwiLFxuICAgIFwiamFja29mZlwiLFxuICAgIFwid2Fua1wiLFxuICAgIFwid2hvYXJcIixcbiAgICBcIndob3JlXCIsXG4gICAgXCIqZGFtblwiLFxuICAgIFwiKmR5a2VcIixcbiAgICBcIipmdWNrKlwiLFxuICAgIFwiKnNoaXQqXCIsXG4gICAgXCJAJCRcIixcbiAgICBcImFtY2lrXCIsXG4gICAgXCJhbmRza290YVwiLFxuICAgIFwiYXJzZSpcIixcbiAgICBcImFzc3JhbW1lclwiLFxuICAgIFwiYXlpclwiLFxuICAgIFwiYmk3Y2hcIixcbiAgICBcImJpdGNoKlwiLFxuICAgIFwiYm9sbG9jaypcIixcbiAgICBcImJyZWFzdHNcIixcbiAgICBcImJ1dHQtcGlyYXRlXCIsXG4gICAgXCJjYWJyb25cIixcbiAgICBcImNhenpvXCIsXG4gICAgXCJjaHJhYVwiLFxuICAgIFwiY2h1alwiLFxuICAgIFwiQ29jaypcIixcbiAgICBcImN1bnQqXCIsXG4gICAgXCJkNG1uXCIsXG4gICAgXCJkYXlnb1wiLFxuICAgIFwiZGVnb1wiLFxuICAgIFwiZGljaypcIixcbiAgICBcImRpa2UqXCIsXG4gICAgXCJkdXBhXCIsXG4gICAgXCJkeml3a2FcIixcbiAgICBcImVqYWNrdWxhdGVcIixcbiAgICBcIkVrcmVtKlwiLFxuICAgIFwiRWt0b1wiLFxuICAgIFwiZW5jdWxlclwiLFxuICAgIFwiZmFlblwiLFxuICAgIFwiZmFnKlwiLFxuICAgIFwiZmFuY3Vsb1wiLFxuICAgIFwiZmFubnlcIixcbiAgICBcImZlY2VzXCIsXG4gICAgXCJmZWdcIixcbiAgICBcIkZlbGNoZXJcIixcbiAgICBcImZpY2tlblwiLFxuICAgIFwiZml0dCpcIixcbiAgICBcIkZsaWtrZXJcIixcbiAgICBcImZvcmVza2luXCIsXG4gICAgXCJGb3R6ZVwiLFxuICAgIFwiRnUoKlwiLFxuICAgIFwiZnVrKlwiLFxuICAgIFwiZnV0a3JldHpuXCIsXG4gICAgXCJnb29rXCIsXG4gICAgXCJndWllbmFcIixcbiAgICBcImgwclwiLFxuICAgIFwiaDR4MHJcIixcbiAgICBcImhlbGxcIixcbiAgICBcImhlbHZldGVcIixcbiAgICBcImhvZXIqXCIsXG4gICAgXCJob25rZXlcIixcbiAgICBcIkh1ZXZvblwiLFxuICAgIFwiaHVpXCIsXG4gICAgXCJpbmp1blwiLFxuICAgIFwiaml6elwiLFxuICAgIFwia2Fua2VyKlwiLFxuICAgIFwia2lrZVwiLFxuICAgIFwia2xvb3R6YWtcIixcbiAgICBcImtyYXV0XCIsXG4gICAgXCJrbnVsbGVcIixcbiAgICBcImt1a1wiLFxuICAgIFwia3Vrc3VnZXJcIixcbiAgICBcIkt1cmFjXCIsXG4gICAgXCJrdXJ3YVwiLFxuICAgIFwia3VzaSpcIixcbiAgICBcImt5cnBhKlwiLFxuICAgIFwibGVzYm9cIixcbiAgICBcIm1hbWhvb25cIixcbiAgICBcIm1hc3R1cmJhdCpcIixcbiAgICBcIm1lcmQqXCIsXG4gICAgXCJtaWJ1blwiLFxuICAgIFwibW9ua2xlaWdoXCIsXG4gICAgXCJtb3VsaWV3b3BcIixcbiAgICBcIm11aWVcIixcbiAgICBcIm11bGtrdVwiLFxuICAgIFwibXVzY2hpXCIsXG4gICAgXCJuYXppc1wiLFxuICAgIFwibmVwZXNhdXJpb1wiLFxuICAgIFwibmlnZ2VyKlwiLFxuICAgIFwib3Jvc3B1XCIsXG4gICAgXCJwYXNrYSpcIixcbiAgICBcInBlcnNlXCIsXG4gICAgXCJwaWNrYVwiLFxuICAgIFwicGllcmRvbCpcIixcbiAgICBcInBpbGx1KlwiLFxuICAgIFwicGltbWVsXCIsXG4gICAgXCJwaXNzKlwiLFxuICAgIFwicGl6ZGFcIixcbiAgICBcInBvb250c2VlXCIsXG4gICAgXCJwb29wXCIsXG4gICAgXCJwb3JuXCIsXG4gICAgXCJwMHJuXCIsXG4gICAgXCJwcjBuXCIsXG4gICAgXCJwcmV0ZWVuXCIsXG4gICAgXCJwdWxhXCIsXG4gICAgXCJwdWxlXCIsXG4gICAgXCJwdXRhXCIsXG4gICAgXCJwdXRvXCIsXG4gICAgXCJxYWhiZWhcIixcbiAgICBcInF1ZWVmKlwiLFxuICAgIFwicmF1dGVuYmVyZ1wiLFxuICAgIFwic2NoYWZmZXJcIixcbiAgICBcInNjaGVpc3MqXCIsXG4gICAgXCJzY2hsYW1wZVwiLFxuICAgIFwic2NobXVja1wiLFxuICAgIFwic2NyZXdcIixcbiAgICBcInNoIXQqXCIsXG4gICAgXCJzaGFybXV0YVwiLFxuICAgIFwic2hhcm11dGVcIixcbiAgICBcInNoaXBhbFwiLFxuICAgIFwic2hpelwiLFxuICAgIFwic2tyaWJ6XCIsXG4gICAgXCJza3Vyd3lzeW5cIixcbiAgICBcInNwaGVuY3RlclwiLFxuICAgIFwic3BpY1wiLFxuICAgIFwic3BpZXJkYWxhalwiLFxuICAgIFwic3Bsb29nZVwiLFxuICAgIFwic3VrYVwiLFxuICAgIFwiYjAwYipcIixcbiAgICBcInRlc3RpY2xlKlwiLFxuICAgIFwidGl0dCpcIixcbiAgICBcInR3YXRcIixcbiAgICBcInZpdHR1XCIsXG4gICAgXCJ3YW5rKlwiLFxuICAgIFwid2V0YmFjaypcIixcbiAgICBcIndpY2hzZXJcIixcbiAgICBcIndvcCpcIixcbiAgICBcInllZFwiLFxuICAgIFwiemFib3VyYWhcIixcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogSW1wb3J0cyB0aGUgbXNncGFjayBsaWJyYXJ5XG4gKi9cbi8vY29uc3QgbXNncGFjayA9IHJlcXVpcmUoXCJtc2dwYWNrXCIpO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IFBsYXllcnMgfSBmcm9tIFwiLi9QbGF5ZXJzL1BsYXllck1hbmFnZXJcIjtcbnZhciBwbGF5ZXJzID0gUGxheWVycy5nZXRJbnN0YW5jZSgpLnBsYXllcnM7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJzL1BsYXllclwiO1xuaW1wb3J0IHsgYmFkV29yZHMgfSBmcm9tIFwiLi9iYWRXb3Jkc1wiO1xuLyoqXG4gKiBBIGNsYXNzIGZvciBlbmNvZGluZyBhbmQgZGVjb2RpbmcgZGF0YSB1c2luZyBNZXNzYWdlUGFja1xuICovXG52YXIgTXNncGFjayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNc2dwYWNrKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmNvZGVzIGRhdGEgdXNpbmcgTWVzc2FnZVBhY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55fSBkYXRhIFRoZSBkYXRhIHRvIGVuY29kZVxuICAgICAqIEByZXR1cm5zIHtCdWZmZXJ9IFRoZSBlbmNvZGVkIGRhdGFcbiAgICAgKi9cbiAgICBNc2dwYWNrLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gbXNncGFjay5lbmNvZGUoZGF0YSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZWNvZGVzIGRhdGEgdXNpbmcgTWVzc2FnZVBhY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIFRoZSBkYXRhIHRvIGRlY29kZVxuICAgICAqIEByZXR1cm5zIHthbnl9IFRoZSBkZWNvZGVkIGRhdGFcbiAgICAgKi9cbiAgICBNc2dwYWNrLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gbXNncGFjay5kZWNvZGUoZGF0YSk7XG4gICAgfTtcbiAgICByZXR1cm4gTXNncGFjaztcbn0oKSk7XG4vKipcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIFdlYlNvY2tldCBjb25uZWN0aW9ucyBhbmQgc2VuZGluZy9yZWNlaXZpbmcgcGFja2V0c1xuICovXG52YXIgV1MgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFdTLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gV1MoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLndzID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIHBhY2tldCBvdmVyIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgcGFja2V0XG4gICAgICogQHBhcmFtIHsuLi5hbnlbXX0gZGF0YSBUaGUgZGF0YSB0byBzZW5kXG4gICAgICovXG4gICAgV1MucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgZGF0YVtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMud3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlsqXSBXZWJTb2NrZXQgaXMgbm90IGluaXRpYWxpemVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB0aGlzLndzLnNlbmQodGhpcy5lbmNvZGUoW3R5cGUsIGRhdGFdKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGluY29taW5nIHBhY2tldHMgZnJvbSB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55fSBkYXRhIFRoZSBpbmNvbWluZyBwYWNrZXQgZGF0YVxuICAgICAqL1xuICAgIFdTLnByb3RvdHlwZS5oYW5kbGVQYWNrZXRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICAgICAgICB2YXIgcGFyc2VkID0gdGhpcy5kZWNvZGUoZGF0YSk7XG4gICAgICAgIHZhciB0eXBlID0gcGFyc2VkWzBdO1xuICAgICAgICB2YXIgcGFja2V0RGF0YSA9IHBhcnNlZFsxXTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiQVwiKSB7XG4gICAgICAgICAgICAvLyBTRVQgSU5JVCBEQVRBO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiQlwiKSB7XG4gICAgICAgICAgICAvLyBESVNDT05ORUNUOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiRFwiKSB7XG4gICAgICAgICAgICAvLyBBREQgUExBWUVSOlxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFja2V0RGF0YSk7XG4gICAgICAgICAgICBpZiAocGFja2V0RGF0YVsxXSkge1xuICAgICAgICAgICAgICAgIC8vIE1ZIFBMQVlFUjpcbiAgICAgICAgICAgICAgICAvKiBEYXRhIGZvcm1hdDpcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgMDoge2lkLCBzaWQsIG5hbWUsIHgsIHksIHNvbWV0aGluZywgaGVhbHRoLCBzb21ldGhpbmcsIHNjYWxlPywgc29tZXRoaW5nfVxuICAgICAgICAgICAgICAgIDE6IHRydWUvZmFsc2UgZm9yIHllcy9ubyBpcyBtZVxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgcGxheWVycy5teVBsYXllciA9IG5ldyBQbGF5ZXIocGFja2V0RGF0YVswXVsxXSk7XG4gICAgICAgICAgICAgICAgcGxheWVycy5wdXNoKHBsYXllcnMubXlQbGF5ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHRtcE9iaiA9IG5ldyBQbGF5ZXIocGFja2V0RGF0YVswXVswXSk7XG4gICAgICAgICAgICAgICAgcGxheWVycy5wbGF5ZXJzLnB1c2godG1wT2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkVcIikge1xuICAgICAgICAgICAgLy8gUkVNT1ZFIFBMQVlFUjpcbiAgICAgICAgICAgIC8vUGxheWVycy5yZW1vdmVQbGF5ZXIoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiYVwiKSB7XG4gICAgICAgICAgICAvLyBVUERBVEUgUExBWUVSUzpcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkhcIikge1xuICAgICAgICAgICAgLy8gTE9BRCBHQU1FIE9CSkVDVDpcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIktcIikge1xuICAgICAgICAgICAgLy8gR0FUSEVSIEFOSU1BVElPTjpcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIk9cIikge1xuICAgICAgICAgICAgLy8gVVBEQVRFIEhFQUxUSDpcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIjZcIikge1xuICAgICAgICAgICAgLy8gUkVDRUlWRSBDSEFUOlxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gV1M7XG59KE1zZ3BhY2spKTtcbi8qKlxuICogTW9ua2V5IHBhdGNoZXMgdGhlIFdlYlNvY2tldCBwcm90b3R5cGUgdG8gYWRkIGEgY3VzdG9tIHNlbmQgbWV0aG9kXG4gKi9cbldlYlNvY2tldC5wcm90b3R5cGUuc2VuZDIgPSBXZWJTb2NrZXQucHJvdG90eXBlLnNlbmQ7IC8vIHNvIGl0IHdvbid0IGNhbGwgaXRzZWxmIGVhY2ggdGltZVxuV2ViU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIHBhcmFtID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgcGFyYW1bX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGlmICghdGhpcy5tb2QpIHtcbiAgICAgICAgdGhpcy5tb2QgPSBuZXcgV1MoKTtcbiAgICAgICAgdGhpcy5tb2Qud3MgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgICAgIF90aGlzLm1vZC5oYW5kbGVQYWNrZXRzKG1zZy5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEFOVEkgUFJPRkFOSVRZIEZJTFRFUjpcbiAgICBpZiAodGhpcy5tb2QuZGVjb2RlKHBhY2tldClbMF0gPT0gXCI2XCIgJiYgYmFkV29yZHMuc29tZShmdW5jdGlvbiAod29yZCkgeyByZXR1cm4gX3RoaXMubW9kLmRlY29kZShwYWNrZXQpWzFdWzBdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMod29yZCk7IH0pKSB7XG4gICAgICAgIHZhciBtc2cgPSB0aGlzLm1vZC5kZWNvZGUocGFja2V0KVsxXVswXTtcbiAgICAgICAgdGhpcy5zZW5kMih0aGlzLm1vZC5lbmNvZGUoW1wiNlwiLCBbbXNnLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbXNnLnNsaWNlKDEpXV0pKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2VuZDIocGFja2V0KTtcbiAgICB9XG59O1xuLyoqXG4gKiBUaGUgR2FtZSBjbGFzcywgd2hpY2ggZXh0ZW5kcyBXUyBhbmQgYWRkcyBnYW1lLXNwZWNpZmljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHNcbiAqL1xudmFyIEdhbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEdhbWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmVuZW1pZXMgPSBbXTtcbiAgICAgICAgX3RoaXMudGVhbW1hdGVzID0gW107XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBHYW1lIGNsYXNzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7R2FtZX0gVGhlIHNpbmdsZXRvbiBpbnN0YW5jZVxuICAgICAqL1xuICAgIEdhbWUuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghR2FtZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgR2FtZS5pbnN0YW5jZSA9IG5ldyBHYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEdhbWUuaW5zdGFuY2U7XG4gICAgfTtcbiAgICByZXR1cm4gR2FtZTtcbn0oV1MpKTtcbmV4cG9ydCB7IEdhbWUgfTtcbnZhciBNb2QgPSBHYW1lLmdldEluc3RhbmNlKCk7XG5hbGVydChcIk1vb01vbyBUUyBMb2FkZWRcIik7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVOYW1lXCIpLmlubmVySFRNTCA9IFwiXFxuPGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmdsaXRjaC5nbG9iYWwvMWQxZGFmYTktYmE1YS00N2U3LWE0ZTctYmNiZjA4NTE1ODNkLyU1QnJlbW92YWwuYWklNURfZjViMDdiZmItZDI1MC00YThmLTg3MTQtMmI1ZjRlNWFmM2QyLWJhbm5lci5wbmc/dj0xNzIwMDkzMzM4MjAxXFxcIj5cXG5cIjtcbi8vZGFyayBtb2RlIG92ZXJsYXlcbnZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm92ZXJsYXkuc3R5bGUgPSBcIlxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXG50b3A6IDA7XFxubGVmdDogMDtcXG5iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDcwLCAwLjM1KTtcXG53aWR0aDogMTAwJTtcXG5oZWlnaHQ6IDEwMCU7XFxucG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXCI7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9