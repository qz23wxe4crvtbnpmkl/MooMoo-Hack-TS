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
            var bonk = new Audio("../assets/bonk.mp4");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUGxheWVycy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllcnMvUGxheWVyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFkV29yZHMudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogUGxheWVyIGNsYXNzICovXG52YXIgUGxheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBsYXllcihzaWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zaWQgPSBzaWQ7XG4gICAgICAgIHRoaXMuaXNUZWFtID0gZnVuY3Rpb24gKHRtcE9iaikge1xuICAgICAgICAgICAgcmV0dXJuICh0bXBPYmouc2lkID09PSBfdGhpcy5zaWQgfHwgdG1wT2JqLnRlYW0gJiYgdG1wT2JqLnRlYW0gPT09IF90aGlzLnRlYW0pO1xuICAgICAgICB9O1xuICAgICAgICAvLyBJTklUOlxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoaWQsIG5hbWUsIHgsIHkpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDtcbiAgICAgICAgICAgIHRoaXMubGFzdEhlYWx0aCA9IHRoaXMuaGVhbHRoO1xuICAgICAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgICAgICB0aGlzLngyID0geDtcbiAgICAgICAgICAgIHRoaXMueTIgPSB5O1xuICAgICAgICAgICAgdGhpcy54MyA9IDA7XG4gICAgICAgICAgICB0aGlzLnkzID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2tpbkluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMubGFzdFNraW5JbmRleCA9IHRoaXMuc2tpbkluZGV4O1xuICAgICAgICAgICAgdGhpcy50YWlsSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5sYXN0VGFpbEluZGV4ID0gdGhpcy50YWlsSW5kZXg7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBQbGF5ZXI7XG59KCkpO1xuZXhwb3J0IHsgUGxheWVyIH07XG4iLCIvKipcbiAqIEltcG9ydHNcbiAqL1xuLy9pbXBvcnQgeyBmaW5kUGxheWVyQnlTaWQgfSBmcm9tIFwiLi4vVVRJTFMvRmluZFBsYXllckJ5U0lEXCI7IC8vIEltcG9ydCBmdW5jdGlvbiB0byBmaW5kIGEgcGxheWVyIGJ5IHRoZWlyIFNJRFxuLy9pbXBvcnQgeyB1cGRhdGVQbGF5ZXIgfSBmcm9tIFwiLi91cGRhdGVQbGF5ZXJcIjsgLy8gSW1wb3J0IGZ1bmN0aW9uIHRvIHVwZGF0ZSBhIHBsYXllcidzIGluZm9ybWF0aW9uXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjsgLy8gSW1wb3J0IHBsYXllciBjbGFzc1xuLyoqXG4gKiBQbGF5ZXIgTWFuYWdlciBjbGFzc1xuICpcbiAqIFRoaXMgY2xhc3MgbWFuYWdlcyBhIGNvbGxlY3Rpb24gb2YgcGxheWVycyBhbmQgcHJvdmlkZXMgbWV0aG9kcyB0byBhZGQsIHJlbW92ZSwgYW5kIHVwZGF0ZSBwbGF5ZXJzLlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6UGxheWVyc1xuICovXG52YXIgUGxheWVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQbGF5ZXJzKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQXJyYXkgb2YgcGxheWVyc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgUGxheWVycyBjbGFzc1xuICAgICAqXG4gICAgICogQHJldHVybnMge1BsYXllcnN9IFRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFBsYXllcnMgY2xhc3NcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIGNvbnN0IHBsYXllcnMgPSBQbGF5ZXJzLmdldEluc3RhbmNlKCk7XG4gICAgICovXG4gICAgUGxheWVycy5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFQbGF5ZXJzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBQbGF5ZXJzLmluc3RhbmNlID0gbmV3IFBsYXllcnMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGxheWVycy5pbnN0YW5jZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSBwbGF5ZXIgdG8gdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBTSUQgVGhlIFNJRCBmb3IgdGhlIHBsYXllclxuICAgICAqIEBwYXJhbSB7YW55W119IGRhdGEgVGhlIHBsYXllcidzIGRhdGFcbiAgICAgKiBAbWVtYmVyT2YgUGxheWVyc1xuICAgICAqIEBleGFtcGxlIHBsYXllcnMuYWRkUGxheWVyKDEsIHsgbmFtZTogXCJPbmlvblwiLCBza2luOiBcIl9fcHJvdG9fX1wifSk7XG4gICAgICovXG4gICAgUGxheWVycy5wcm90b3R5cGUuYWRkUGxheWVyID0gZnVuY3Rpb24gKFNJRCkge1xuICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgZGF0YVtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdG1wT2JqID0gbmV3IFBsYXllcihTSUQpO1xuICAgICAgICAvLyBJTklUOlxuICAgICAgICB0bXBPYmouaW5pdC5hcHBseSh0bXBPYmosIGRhdGEpO1xuICAgICAgICB0aGlzLnBsYXllcnMucHVzaChQbGF5ZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHBsYXllciBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lkIFRoZSBTSUQgZm9yIHRoZSBwbGF5ZXIgdG8gcmVtb3ZlXG4gICAgICogQG1lbWJlck9mIFBsYXllcnNcbiAgICAgKiBAZXhhbXBsZSBwbGF5ZXJzLnJlbW92ZVBsYXllcigxMCk7XG4gICAgICovXG4gICAgUGxheWVycy5wcm90b3R5cGUucmVtb3ZlUGxheWVyID0gZnVuY3Rpb24gKHNpZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnBsYXllcnMuaW5kZXhPZih0aGlzLnBsYXllcnMuZmluZChmdW5jdGlvbiAocGxheWVyKSB7IHJldHVybiBwbGF5ZXIuc2lkID09PSBzaWQ7IH0pLCAwKTtcbiAgICAgICAgZGVsZXRlIHRoaXMucGxheWVyc1tpbmRleF07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwbGF5ZXJzIGluIHRoZSBjb2xsZWN0aW9uIGJhc2VkIG9uIG5ldyBkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBkYXRhIFRoZSBuZXcgZGF0YSB0byB1cGRhdGUgdGhlIHBsYXllcnMgd2l0aFxuICAgICAqIEBtZW1iZXJPZiBQbGF5ZXJzXG4gICAgICogQGV4YW1wbGUgcGxheWVycy51cGRhdGVQbGF5ZXJzKHRtcFBsYXllcik7XG4gICAgICovXG4gICAgUGxheWVycy5wcm90b3R5cGUudXBkYXRlUGxheWVycyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIFVucmVuZGVyIGFsbCBwbGF5ZXJzIGFuZCByZXJlbmRlciBwbGF5ZXJzIGluIHJhbmdlXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgdG1wUGxheWVyID0gdGhpcy5wbGF5ZXJzW2ldO1xuICAgICAgICAgICAgdG1wUGxheWVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDEzKSB7XG4gICAgICAgICAgICAvL2NvbnN0IHRtcFBsYXllcjogYW55ID0gZmluZFBsYXllckJ5U2lkKGRhdGFbMF0pO1xuICAgICAgICAgICAgLy9pZiAodG1wUGxheWVyKSB7XG4gICAgICAgICAgICAvLyAgdXBkYXRlUGxheWVyKHRtcFBsYXllciwgZGF0YSwgaSk7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogTXkgcGxheWVyXG4gICAgICovXG4gICAgUGxheWVycy5teVBsYXllciA9IHt9O1xuICAgIHJldHVybiBQbGF5ZXJzO1xufSgpKTtcbmV4cG9ydCB7IFBsYXllcnMgfTtcbiIsImV4cG9ydCB2YXIgYmFkV29yZHMgPSBbXG4gICAgXCJhaG9sZVwiLFxuICAgIFwiYW51c1wiLFxuICAgIFwiYXNoMGxlXCIsXG4gICAgXCJhc2gwbGVzXCIsXG4gICAgXCJhc2hvbGVzXCIsXG4gICAgXCJhc3NcIixcbiAgICBcIkFzcyBNb25rZXlcIixcbiAgICBcIkFzc2ZhY2VcIixcbiAgICBcImFzc2gwbGVcIixcbiAgICBcImFzc2gwbGV6XCIsXG4gICAgXCJhc3Nob2xlXCIsXG4gICAgXCJhc3Nob2xlc1wiLFxuICAgIFwiYXNzaG9selwiLFxuICAgIFwiYXNzd2lwZVwiLFxuICAgIFwiYXp6aG9sZVwiLFxuICAgIFwiYmFzc3RlcmRzXCIsXG4gICAgXCJiYXN0YXJkXCIsXG4gICAgXCJiYXN0YXJkc1wiLFxuICAgIFwiYmFzdGFyZHpcIixcbiAgICBcImJhc3RlcmRzXCIsXG4gICAgXCJiYXN0ZXJkelwiLFxuICAgIFwiQmlhdGNoXCIsXG4gICAgXCJiaXRjaFwiLFxuICAgIFwiYml0Y2hlc1wiLFxuICAgIFwiQmxvdyBKb2JcIixcbiAgICBcImJvZmZpbmdcIixcbiAgICBcImJ1dHRob2xlXCIsXG4gICAgXCJidXR0d2lwZVwiLFxuICAgIFwiYzBja1wiLFxuICAgIFwiYzBja3NcIixcbiAgICBcImMwa1wiLFxuICAgIFwiQ2FycGV0IE11bmNoZXJcIixcbiAgICBcImNhd2tcIixcbiAgICBcImNhd2tzXCIsXG4gICAgXCJDbGl0XCIsXG4gICAgXCJjbnRzXCIsXG4gICAgXCJjbnR6XCIsXG4gICAgXCJjb2NrXCIsXG4gICAgXCJjb2NraGVhZFwiLFxuICAgIFwiY29jay1oZWFkXCIsXG4gICAgXCJjb2Nrc1wiLFxuICAgIFwiQ29ja1N1Y2tlclwiLFxuICAgIFwiY29jay1zdWNrZXJcIixcbiAgICBcImNyYXBcIixcbiAgICBcImN1bVwiLFxuICAgIFwiY3VudFwiLFxuICAgIFwiY3VudHNcIixcbiAgICBcImN1bnR6XCIsXG4gICAgXCJkaWNrXCIsXG4gICAgXCJkaWxkMFwiLFxuICAgIFwiZGlsZDBzXCIsXG4gICAgXCJkaWxkb1wiLFxuICAgIFwiZGlsZG9zXCIsXG4gICAgXCJkaWxsZDBcIixcbiAgICBcImRpbGxkMHNcIixcbiAgICBcImRvbWluYXRyaWNrc1wiLFxuICAgIFwiZG9taW5hdHJpY3NcIixcbiAgICBcImRvbWluYXRyaXhcIixcbiAgICBcImR5a2VcIixcbiAgICBcImVuZW1hXCIsXG4gICAgXCJmIHUgYyBrXCIsXG4gICAgXCJmIHUgYyBrIGUgclwiLFxuICAgIFwiZmFnXCIsXG4gICAgXCJmYWcxdFwiLFxuICAgIFwiZmFnZXRcIixcbiAgICBcImZhZ2cxdFwiLFxuICAgIFwiZmFnZ2l0XCIsXG4gICAgXCJmYWdnb3RcIixcbiAgICBcImZhZ2cwdFwiLFxuICAgIFwiZmFnaXRcIixcbiAgICBcImZhZ3NcIixcbiAgICBcImZhZ3pcIixcbiAgICBcImZhaWdcIixcbiAgICBcImZhaWdzXCIsXG4gICAgXCJmYXJ0XCIsXG4gICAgXCJmbGlwcGluZyB0aGUgYmlyZFwiLFxuICAgIFwiZnVja1wiLFxuICAgIFwiZnVja2VyXCIsXG4gICAgXCJmdWNraW5cIixcbiAgICBcImZ1Y2tpbmdcIixcbiAgICBcImZ1Y2tzXCIsXG4gICAgXCJGdWRnZSBQYWNrZXJcIixcbiAgICBcImZ1a1wiLFxuICAgIFwiRnVrYWhcIixcbiAgICBcIkZ1a2VuXCIsXG4gICAgXCJmdWtlclwiLFxuICAgIFwiRnVraW5cIixcbiAgICBcIkZ1a2tcIixcbiAgICBcIkZ1a2thaFwiLFxuICAgIFwiRnVra2VuXCIsXG4gICAgXCJGdWtrZXJcIixcbiAgICBcIkZ1a2tpblwiLFxuICAgIFwiZzAwa1wiLFxuICAgIFwiR29kLWRhbW5lZFwiLFxuICAgIFwiaDAwclwiLFxuICAgIFwiaDBhclwiLFxuICAgIFwiaDByZVwiLFxuICAgIFwiaGVsbHNcIixcbiAgICBcImhvYXJcIixcbiAgICBcImhvb3JcIixcbiAgICBcImhvb3JlXCIsXG4gICAgXCJqYWNrb2ZmXCIsXG4gICAgXCJqYXBcIixcbiAgICBcImphcHNcIixcbiAgICBcImplcmstb2ZmXCIsXG4gICAgXCJqaXNpbVwiLFxuICAgIFwiamlzc1wiLFxuICAgIFwiaml6bVwiLFxuICAgIFwiaml6elwiLFxuICAgIFwia25vYlwiLFxuICAgIFwia25vYnNcIixcbiAgICBcImtub2J6XCIsXG4gICAgXCJrdW50XCIsXG4gICAgXCJrdW50c1wiLFxuICAgIFwia3VudHpcIixcbiAgICBcIkxlenppYW5cIixcbiAgICBcIkxpcHNoaXRzXCIsXG4gICAgXCJMaXBzaGl0elwiLFxuICAgIFwibWFzb2NoaXN0XCIsXG4gICAgXCJtYXNva2lzdFwiLFxuICAgIFwibWFzc3RlcmJhaXRcIixcbiAgICBcIm1hc3N0cmJhaXRcIixcbiAgICBcIm1hc3N0cmJhdGVcIixcbiAgICBcIm1hc3RlcmJhaXRlclwiLFxuICAgIFwibWFzdGVyYmF0ZVwiLFxuICAgIFwibWFzdGVyYmF0ZXNcIixcbiAgICBcIk1vdGhhIEZ1Y2tlclwiLFxuICAgIFwiTW90aGEgRnVrZXJcIixcbiAgICBcIk1vdGhhIEZ1a2thaFwiLFxuICAgIFwiTW90aGEgRnVra2VyXCIsXG4gICAgXCJNb3RoZXIgRnVja2VyXCIsXG4gICAgXCJNb3RoZXIgRnVrYWhcIixcbiAgICBcIk1vdGhlciBGdWtlclwiLFxuICAgIFwiTW90aGVyIEZ1a2thaFwiLFxuICAgIFwiTW90aGVyIEZ1a2tlclwiLFxuICAgIFwibW90aGVyLWZ1Y2tlclwiLFxuICAgIFwiTXV0aGEgRnVja2VyXCIsXG4gICAgXCJNdXRoYSBGdWthaFwiLFxuICAgIFwiTXV0aGEgRnVrZXJcIixcbiAgICBcIk11dGhhIEZ1a2thaFwiLFxuICAgIFwiTXV0aGEgRnVra2VyXCIsXG4gICAgXCJuMWdyXCIsXG4gICAgXCJuYXN0dFwiLFxuICAgIFwibmlnZ2VyO1wiLFxuICAgIFwibmlndXI7XCIsXG4gICAgXCJuaWlnZXI7XCIsXG4gICAgXCJuaWlncjtcIixcbiAgICBcIm9yYWZpc1wiLFxuICAgIFwib3JnYXNpbTtcIixcbiAgICBcIm9yZ2FzbVwiLFxuICAgIFwib3JnYXN1bVwiLFxuICAgIFwib3JpZmFjZVwiLFxuICAgIFwib3JpZmljZVwiLFxuICAgIFwib3JpZmlzc1wiLFxuICAgIFwicGFja2lcIixcbiAgICBcInBhY2tpZVwiLFxuICAgIFwicGFja3lcIixcbiAgICBcInBha2lcIixcbiAgICBcInBha2llXCIsXG4gICAgXCJwYWt5XCIsXG4gICAgXCJwZWNrZXJcIixcbiAgICBcInBlZWVudXNcIixcbiAgICBcInBlZWVudXNzc1wiLFxuICAgIFwicGVlbnVzXCIsXG4gICAgXCJwZWludXNcIixcbiAgICBcInBlbjFzXCIsXG4gICAgXCJwZW5hc1wiLFxuICAgIFwicGVuaXNcIixcbiAgICBcInBlbmlzLWJyZWF0aFwiLFxuICAgIFwicGVudXNcIixcbiAgICBcInBlbnV1c1wiLFxuICAgIFwiUGh1Y1wiLFxuICAgIFwiUGh1Y2tcIixcbiAgICBcIlBodWtcIixcbiAgICBcIlBodWtlclwiLFxuICAgIFwiUGh1a2tlclwiLFxuICAgIFwicG9sYWNcIixcbiAgICBcInBvbGFja1wiLFxuICAgIFwicG9sYWtcIixcbiAgICBcIlBvb25hbmlcIixcbiAgICBcInByMWNcIixcbiAgICBcInByMWNrXCIsXG4gICAgXCJwcjFrXCIsXG4gICAgXCJwdXNzZVwiLFxuICAgIFwicHVzc2VlXCIsXG4gICAgXCJwdXNzeVwiLFxuICAgIFwicHV1a2VcIixcbiAgICBcInB1dWtlclwiLFxuICAgIFwicXdlaXJcIixcbiAgICBcInJlY2t0dW1cIixcbiAgICBcInJlY3R1bVwiLFxuICAgIFwicmV0YXJkXCIsXG4gICAgXCJzYWRpc3RcIixcbiAgICBcInNjYW5rXCIsXG4gICAgXCJzY2hsb25nXCIsXG4gICAgXCJzY3Jld2luZ1wiLFxuICAgIFwic2VtZW5cIixcbiAgICBcInNleFwiLFxuICAgIFwic2V4eVwiLFxuICAgIFwiU2ghdFwiLFxuICAgIFwic2gxdFwiLFxuICAgIFwic2gxdGVyXCIsXG4gICAgXCJzaDF0c1wiLFxuICAgIFwic2gxdHRlclwiLFxuICAgIFwic2gxdHpcIixcbiAgICBcInNoaXRcIixcbiAgICBcInNoaXRzXCIsXG4gICAgXCJzaGl0dGVyXCIsXG4gICAgXCJTaGl0dHlcIixcbiAgICBcIlNoaXR5XCIsXG4gICAgXCJzaGl0elwiLFxuICAgIFwiU2h5dFwiLFxuICAgIFwiU2h5dGVcIixcbiAgICBcIlNoeXR0eVwiLFxuICAgIFwiU2h5dHlcIixcbiAgICBcInNrYW5ja1wiLFxuICAgIFwic2thbmtcIixcbiAgICBcInNrYW5rZWVcIixcbiAgICBcInNrYW5rZXlcIixcbiAgICBcInNrYW5rc1wiLFxuICAgIFwiU2thbmt5XCIsXG4gICAgXCJzbGFnXCIsXG4gICAgXCJzbHV0XCIsXG4gICAgXCJzbHV0c1wiLFxuICAgIFwiU2x1dHR5XCIsXG4gICAgXCJzbHV0elwiLFxuICAgIFwic29uLW9mLWEtYml0Y2hcIixcbiAgICBcInRpdFwiLFxuICAgIFwidHVyZFwiLFxuICAgIFwidmExamluYVwiLFxuICAgIFwidmFnMW5hXCIsXG4gICAgXCJ2YWdpaW5hXCIsXG4gICAgXCJ2YWdpbmFcIixcbiAgICBcInZhajFuYVwiLFxuICAgIFwidmFqaW5hXCIsXG4gICAgXCJ2dWxsdmFcIixcbiAgICBcInZ1bHZhXCIsXG4gICAgXCJ3MHBcIixcbiAgICBcIndoMDByXCIsXG4gICAgXCJ3aDByZVwiLFxuICAgIFwid2hvcmVcIixcbiAgICBcInhyYXRlZFwiLFxuICAgIFwieHh4XCIsXG4gICAgXCJiIStjaFwiLFxuICAgIFwiYml0Y2hcIixcbiAgICBcImJsb3dqb2JcIixcbiAgICBcImNsaXRcIixcbiAgICBcImFyc2NobG9jaFwiLFxuICAgIFwiZnVja1wiLFxuICAgIFwic2hpdFwiLFxuICAgIFwiYXNzXCIsXG4gICAgXCJhc3Nob2xlXCIsXG4gICAgXCJiIXRjaFwiLFxuICAgIFwiYjE3Y2hcIixcbiAgICBcImIxdGNoXCIsXG4gICAgXCJiYXN0YXJkXCIsXG4gICAgXCJiaStjaFwiLFxuICAgIFwiYm9pb2xhc1wiLFxuICAgIFwiYnVjZXRhXCIsXG4gICAgXCJjMGNrXCIsXG4gICAgXCJjYXdrXCIsXG4gICAgXCJjaGlua1wiLFxuICAgIFwiY2lwYVwiLFxuICAgIFwiY2xpdHNcIixcbiAgICBcImNvY2tcIixcbiAgICBcImN1bVwiLFxuICAgIFwiY3VudFwiLFxuICAgIFwiZGlsZG9cIixcbiAgICBcImRpcnNhXCIsXG4gICAgXCJlamFrdWxhdGVcIixcbiAgICBcImZhdGFzc1wiLFxuICAgIFwiZmN1a1wiLFxuICAgIFwiZnVrXCIsXG4gICAgXCJmdXgwclwiLFxuICAgIFwiaG9lclwiLFxuICAgIFwiaG9yZVwiLFxuICAgIFwiamlzbVwiLFxuICAgIFwia2F3a1wiLFxuICAgIFwibDNpdGNoXCIsXG4gICAgXCJsM2krY2hcIixcbiAgICBcIm1hc3R1cmJhdGVcIixcbiAgICBcIm1hc3RlcmJhdCpcIixcbiAgICBcIm1hc3RlcmJhdDNcIixcbiAgICBcIm1vdGhlcmZ1Y2tlclwiLFxuICAgIFwicy5vLmIuXCIsXG4gICAgXCJtb2ZvXCIsXG4gICAgXCJuYXppXCIsXG4gICAgXCJuaWdnYVwiLFxuICAgIFwibmlnZ2VyXCIsXG4gICAgXCJudXRzYWNrXCIsXG4gICAgXCJwaHVja1wiLFxuICAgIFwicGltcGlzXCIsXG4gICAgXCJwdXNzZVwiLFxuICAgIFwicHVzc3lcIixcbiAgICBcInNjcm90dW1cIixcbiAgICBcInNoIXRcIixcbiAgICBcInNoZW1hbGVcIixcbiAgICBcInNoaStcIixcbiAgICBcInNoIStcIixcbiAgICBcInNsdXRcIixcbiAgICBcInNtdXRcIixcbiAgICBcInRlZXRzXCIsXG4gICAgXCJ0aXRzXCIsXG4gICAgXCJib29ic1wiLFxuICAgIFwiYjAwYnNcIixcbiAgICBcInRlZXpcIixcbiAgICBcInRlc3RpY2FsXCIsXG4gICAgXCJ0ZXN0aWNsZVwiLFxuICAgIFwidGl0dFwiLFxuICAgIFwidzAwc2VcIixcbiAgICBcImphY2tvZmZcIixcbiAgICBcIndhbmtcIixcbiAgICBcIndob2FyXCIsXG4gICAgXCJ3aG9yZVwiLFxuICAgIFwiKmRhbW5cIixcbiAgICBcIipkeWtlXCIsXG4gICAgXCIqZnVjaypcIixcbiAgICBcIipzaGl0KlwiLFxuICAgIFwiQCQkXCIsXG4gICAgXCJhbWNpa1wiLFxuICAgIFwiYW5kc2tvdGFcIixcbiAgICBcImFyc2UqXCIsXG4gICAgXCJhc3NyYW1tZXJcIixcbiAgICBcImF5aXJcIixcbiAgICBcImJpN2NoXCIsXG4gICAgXCJiaXRjaCpcIixcbiAgICBcImJvbGxvY2sqXCIsXG4gICAgXCJicmVhc3RzXCIsXG4gICAgXCJidXR0LXBpcmF0ZVwiLFxuICAgIFwiY2Ficm9uXCIsXG4gICAgXCJjYXp6b1wiLFxuICAgIFwiY2hyYWFcIixcbiAgICBcImNodWpcIixcbiAgICBcIkNvY2sqXCIsXG4gICAgXCJjdW50KlwiLFxuICAgIFwiZDRtblwiLFxuICAgIFwiZGF5Z29cIixcbiAgICBcImRlZ29cIixcbiAgICBcImRpY2sqXCIsXG4gICAgXCJkaWtlKlwiLFxuICAgIFwiZHVwYVwiLFxuICAgIFwiZHppd2thXCIsXG4gICAgXCJlamFja3VsYXRlXCIsXG4gICAgXCJFa3JlbSpcIixcbiAgICBcIkVrdG9cIixcbiAgICBcImVuY3VsZXJcIixcbiAgICBcImZhZW5cIixcbiAgICBcImZhZypcIixcbiAgICBcImZhbmN1bG9cIixcbiAgICBcImZhbm55XCIsXG4gICAgXCJmZWNlc1wiLFxuICAgIFwiZmVnXCIsXG4gICAgXCJGZWxjaGVyXCIsXG4gICAgXCJmaWNrZW5cIixcbiAgICBcImZpdHQqXCIsXG4gICAgXCJGbGlra2VyXCIsXG4gICAgXCJmb3Jlc2tpblwiLFxuICAgIFwiRm90emVcIixcbiAgICBcIkZ1KCpcIixcbiAgICBcImZ1aypcIixcbiAgICBcImZ1dGtyZXR6blwiLFxuICAgIFwiZ29va1wiLFxuICAgIFwiZ3VpZW5hXCIsXG4gICAgXCJoMHJcIixcbiAgICBcImg0eDByXCIsXG4gICAgXCJoZWxsXCIsXG4gICAgXCJoZWx2ZXRlXCIsXG4gICAgXCJob2VyKlwiLFxuICAgIFwiaG9ua2V5XCIsXG4gICAgXCJIdWV2b25cIixcbiAgICBcImh1aVwiLFxuICAgIFwiaW5qdW5cIixcbiAgICBcImppenpcIixcbiAgICBcImthbmtlcipcIixcbiAgICBcImtpa2VcIixcbiAgICBcImtsb290emFrXCIsXG4gICAgXCJrcmF1dFwiLFxuICAgIFwia251bGxlXCIsXG4gICAgXCJrdWtcIixcbiAgICBcImt1a3N1Z2VyXCIsXG4gICAgXCJLdXJhY1wiLFxuICAgIFwia3Vyd2FcIixcbiAgICBcImt1c2kqXCIsXG4gICAgXCJreXJwYSpcIixcbiAgICBcImxlc2JvXCIsXG4gICAgXCJtYW1ob29uXCIsXG4gICAgXCJtYXN0dXJiYXQqXCIsXG4gICAgXCJtZXJkKlwiLFxuICAgIFwibWlidW5cIixcbiAgICBcIm1vbmtsZWlnaFwiLFxuICAgIFwibW91bGlld29wXCIsXG4gICAgXCJtdWllXCIsXG4gICAgXCJtdWxra3VcIixcbiAgICBcIm11c2NoaVwiLFxuICAgIFwibmF6aXNcIixcbiAgICBcIm5lcGVzYXVyaW9cIixcbiAgICBcIm5pZ2dlcipcIixcbiAgICBcIm9yb3NwdVwiLFxuICAgIFwicGFza2EqXCIsXG4gICAgXCJwZXJzZVwiLFxuICAgIFwicGlja2FcIixcbiAgICBcInBpZXJkb2wqXCIsXG4gICAgXCJwaWxsdSpcIixcbiAgICBcInBpbW1lbFwiLFxuICAgIFwicGlzcypcIixcbiAgICBcInBpemRhXCIsXG4gICAgXCJwb29udHNlZVwiLFxuICAgIFwicG9vcFwiLFxuICAgIFwicG9yblwiLFxuICAgIFwicDByblwiLFxuICAgIFwicHIwblwiLFxuICAgIFwicHJldGVlblwiLFxuICAgIFwicHVsYVwiLFxuICAgIFwicHVsZVwiLFxuICAgIFwicHV0YVwiLFxuICAgIFwicHV0b1wiLFxuICAgIFwicWFoYmVoXCIsXG4gICAgXCJxdWVlZipcIixcbiAgICBcInJhdXRlbmJlcmdcIixcbiAgICBcInNjaGFmZmVyXCIsXG4gICAgXCJzY2hlaXNzKlwiLFxuICAgIFwic2NobGFtcGVcIixcbiAgICBcInNjaG11Y2tcIixcbiAgICBcInNjcmV3XCIsXG4gICAgXCJzaCF0KlwiLFxuICAgIFwic2hhcm11dGFcIixcbiAgICBcInNoYXJtdXRlXCIsXG4gICAgXCJzaGlwYWxcIixcbiAgICBcInNoaXpcIixcbiAgICBcInNrcmlielwiLFxuICAgIFwic2t1cnd5c3luXCIsXG4gICAgXCJzcGhlbmN0ZXJcIixcbiAgICBcInNwaWNcIixcbiAgICBcInNwaWVyZGFsYWpcIixcbiAgICBcInNwbG9vZ2VcIixcbiAgICBcInN1a2FcIixcbiAgICBcImIwMGIqXCIsXG4gICAgXCJ0ZXN0aWNsZSpcIixcbiAgICBcInRpdHQqXCIsXG4gICAgXCJ0d2F0XCIsXG4gICAgXCJ2aXR0dVwiLFxuICAgIFwid2FuaypcIixcbiAgICBcIndldGJhY2sqXCIsXG4gICAgXCJ3aWNoc2VyXCIsXG4gICAgXCJ3b3AqXCIsXG4gICAgXCJ5ZWRcIixcbiAgICBcInphYm91cmFoXCIsXG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEltcG9ydHMgdGhlIG1zZ3BhY2sgbGlicmFyeVxuICovXG4vL2NvbnN0IG1zZ3BhY2sgPSByZXF1aXJlKFwibXNncGFja1wiKTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBQbGF5ZXJzIH0gZnJvbSBcIi4vUGxheWVycy9QbGF5ZXJNYW5hZ2VyXCI7XG52YXIgcGxheWVycyA9IFBsYXllcnMuZ2V0SW5zdGFuY2UoKS5wbGF5ZXJzO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVycy9QbGF5ZXJcIjtcbmltcG9ydCB7IGJhZFdvcmRzIH0gZnJvbSBcIi4vYmFkV29yZHNcIjtcbi8qKlxuICogQSBjbGFzcyBmb3IgZW5jb2RpbmcgYW5kIGRlY29kaW5nIGRhdGEgdXNpbmcgTWVzc2FnZVBhY2tcbiAqL1xudmFyIE1zZ3BhY2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTXNncGFjaygpIHtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW5jb2RlcyBkYXRhIHVzaW5nIE1lc3NhZ2VQYWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueX0gZGF0YSBUaGUgZGF0YSB0byBlbmNvZGVcbiAgICAgKiBAcmV0dXJucyB7QnVmZmVyfSBUaGUgZW5jb2RlZCBkYXRhXG4gICAgICovXG4gICAgTXNncGFjay5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1zZ3BhY2suZW5jb2RlKGRhdGEpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVjb2RlcyBkYXRhIHVzaW5nIE1lc3NhZ2VQYWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0J1ZmZlcn0gZGF0YSBUaGUgZGF0YSB0byBkZWNvZGVcbiAgICAgKiBAcmV0dXJucyB7YW55fSBUaGUgZGVjb2RlZCBkYXRhXG4gICAgICovXG4gICAgTXNncGFjay5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1zZ3BhY2suZGVjb2RlKGRhdGEpO1xuICAgIH07XG4gICAgcmV0dXJuIE1zZ3BhY2s7XG59KCkpO1xuLyoqXG4gKiBBIGNsYXNzIGZvciBoYW5kbGluZyBXZWJTb2NrZXQgY29ubmVjdGlvbnMgYW5kIHNlbmRpbmcvcmVjZWl2aW5nIHBhY2tldHNcbiAqL1xudmFyIFdTID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhXUywgX3N1cGVyKTtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFdTKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy53cyA9IG51bGw7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBwYWNrZXQgb3ZlciB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIG9mIHBhY2tldFxuICAgICAqIEBwYXJhbSB7Li4uYW55W119IGRhdGEgVGhlIGRhdGEgdG8gc2VuZFxuICAgICAqL1xuICAgIFdTLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGRhdGFbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLndzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbKl0gV2ViU29ja2V0IGlzIG5vdCBpbml0aWFsaXplZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgdGhpcy53cy5zZW5kKHRoaXMuZW5jb2RlKFt0eXBlLCBkYXRhXSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBpbmNvbWluZyBwYWNrZXRzIGZyb20gdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueX0gZGF0YSBUaGUgaW5jb21pbmcgcGFja2V0IGRhdGFcbiAgICAgKi9cbiAgICBXUy5wcm90b3R5cGUuaGFuZGxlUGFja2V0cyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHRoaXMuZGVjb2RlKGRhdGEpO1xuICAgICAgICB2YXIgdHlwZSA9IHBhcnNlZFswXTtcbiAgICAgICAgdmFyIHBhY2tldERhdGEgPSBwYXJzZWRbMV07XG4gICAgICAgIGlmICh0eXBlID09PSBcIkFcIikge1xuICAgICAgICAgICAgLy8gU0VUIElOSVQgREFUQTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkJcIikge1xuICAgICAgICAgICAgLy8gRElTQ09OTkVDVDpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkRcIikge1xuICAgICAgICAgICAgLy8gQUREIFBMQVlFUjpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhY2tldERhdGEpO1xuICAgICAgICAgICAgaWYgKHBhY2tldERhdGFbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBNWSBQTEFZRVI6XG4gICAgICAgICAgICAgICAgLyogRGF0YSBmb3JtYXQ6XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDA6IHtpZCwgc2lkLCBuYW1lLCB4LCB5LCBzb21ldGhpbmcsIGhlYWx0aCwgc29tZXRoaW5nLCBzY2FsZT8sIHNvbWV0aGluZ31cbiAgICAgICAgICAgICAgICAxOiB0cnVlL2ZhbHNlIGZvciB5ZXMvbm8gaXMgbWVcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHBsYXllcnMubXlQbGF5ZXIgPSBuZXcgUGxheWVyKHBhY2tldERhdGFbMF1bMV0pO1xuICAgICAgICAgICAgICAgIHBsYXllcnMucHVzaChwbGF5ZXJzLm15UGxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB0bXBPYmogPSBuZXcgUGxheWVyKHBhY2tldERhdGFbMF1bMF0pO1xuICAgICAgICAgICAgICAgIHBsYXllcnMucGxheWVycy5wdXNoKHRtcE9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJFXCIpIHtcbiAgICAgICAgICAgIC8vIFJFTU9WRSBQTEFZRVI6XG4gICAgICAgICAgICAvL1BsYXllcnMucmVtb3ZlUGxheWVyKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcImFcIikge1xuICAgICAgICAgICAgLy8gVVBEQVRFIFBMQVlFUlM6XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJIXCIpIHtcbiAgICAgICAgICAgIC8vIExPQUQgR0FNRSBPQkpFQ1Q6XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJLXCIpIHtcbiAgICAgICAgICAgIC8vIEdBVEhFUiBBTklNQVRJT046XG4gICAgICAgICAgICB2YXIgYm9uayA9IG5ldyBBdWRpbyhcIi4uL2Fzc2V0cy9ib25rLm1wNFwiKTtcbiAgICAgICAgICAgIGJvbmsucGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiT1wiKSB7XG4gICAgICAgICAgICAvLyBVUERBVEUgSEVBTFRIOlxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiNlwiKSB7XG4gICAgICAgICAgICAvLyBSRUNFSVZFIENIQVQ6XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBXUztcbn0oTXNncGFjaykpO1xuLyoqXG4gKiBNb25rZXkgcGF0Y2hlcyB0aGUgV2ViU29ja2V0IHByb3RvdHlwZSB0byBhZGQgYSBjdXN0b20gc2VuZCBtZXRob2RcbiAqL1xuV2ViU29ja2V0LnByb3RvdHlwZS5zZW5kMiA9IFdlYlNvY2tldC5wcm90b3R5cGUuc2VuZDsgLy8gc28gaXQgd29uJ3QgY2FsbCBpdHNlbGYgZWFjaCB0aW1lXG5XZWJTb2NrZXQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgcGFyYW0gPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBwYXJhbVtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm1vZCkge1xuICAgICAgICB0aGlzLm1vZCA9IG5ldyBXUygpO1xuICAgICAgICB0aGlzLm1vZC53cyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgICAgX3RoaXMubW9kLmhhbmRsZVBhY2tldHMobXNnLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gQU5USSBQUk9GQU5JVFkgRklMVEVSOlxuICAgIGlmICh0aGlzLm1vZC5kZWNvZGUocGFja2V0KVswXSA9PSBcIjZcIiAmJiBiYWRXb3Jkcy5zb21lKGZ1bmN0aW9uICh3b3JkKSB7IHJldHVybiBfdGhpcy5tb2QuZGVjb2RlKHBhY2tldClbMV1bMF0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh3b3JkKTsgfSkpIHtcbiAgICAgICAgdmFyIG1zZyA9IHRoaXMubW9kLmRlY29kZShwYWNrZXQpWzFdWzBdO1xuICAgICAgICB0aGlzLnNlbmQyKHRoaXMubW9kLmVuY29kZShbXCI2XCIsIFttc2cuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtc2cuc2xpY2UoMSldXSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zZW5kMihwYWNrZXQpO1xuICAgIH1cbn07XG4vKipcbiAqIFRoZSBHYW1lIGNsYXNzLCB3aGljaCBleHRlbmRzIFdTIGFuZCBhZGRzIGdhbWUtc3BlY2lmaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kc1xuICovXG52YXIgR2FtZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoR2FtZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHYW1lKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZW5lbWllcyA9IFtdO1xuICAgICAgICBfdGhpcy50ZWFtbWF0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIEdhbWUgY2xhc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtHYW1lfSBUaGUgc2luZ2xldG9uIGluc3RhbmNlXG4gICAgICovXG4gICAgR2FtZS5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFHYW1lLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBHYW1lLmluc3RhbmNlID0gbmV3IEdhbWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gR2FtZS5pbnN0YW5jZTtcbiAgICB9O1xuICAgIHJldHVybiBHYW1lO1xufShXUykpO1xuZXhwb3J0IHsgR2FtZSB9O1xudmFyIE1vZCA9IEdhbWUuZ2V0SW5zdGFuY2UoKTtcbmFsZXJ0KFwiTW9vTW9vIFRTIExvYWRlZFwiKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZU5hbWVcIikuaW5uZXJIVE1MID0gXCJcXG48aW1nIHNyYz1cXFwiaHR0cHM6Ly9jZG4uZ2xpdGNoLmdsb2JhbC8xZDFkYWZhOS1iYTVhLTQ3ZTctYTRlNy1iY2JmMDg1MTU4M2QvJTVCcmVtb3ZhbC5haSU1RF9mNWIwN2JmYi1kMjUwLTRhOGYtODcxNC0yYjVmNGU1YWYzZDItYmFubmVyLnBuZz92PTE3MjAwOTMzMzgyMDFcXFwiPlxcblwiO1xuLy9kYXJrIG1vZGUgb3ZlcmxheVxudmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xub3ZlcmxheS5zdHlsZSA9IFwiXFxucG9zaXRpb246IGFic29sdXRlO1xcbnRvcDogMDtcXG5sZWZ0OiAwO1xcbmJhY2tncm91bmQ6IHJnYmEoMCwgMCwgNzAsIDAuMzUpO1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwJTtcXG5wb2ludGVyLWV2ZW50czogbm9uZTtcXG5cIjtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=