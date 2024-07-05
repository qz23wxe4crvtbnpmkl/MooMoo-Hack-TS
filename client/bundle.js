/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/Players/Player.ts":
      /*!*******************************!*\
  !*** ./src/Players/Player.ts ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Player: () => /* binding */ Player,
          /* harmony export */
        });
        /* Player class */
        var Player = /** @class */ (function () {
          function Player(sid) {
            var _this = this;
            this.sid = sid;
            this.isTeam = function (tmpObj) {
              return (
                tmpObj.sid === _this.sid ||
                (tmpObj.team && tmpObj.team === _this.team)
              );
            };
            // INIT:
            this.init = function (
              id,
              name,
              x,
              y,
              dir,
              health,
              maxHealth,
              scale,
              skinColor,
            ) {
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
        })();

        /***/
      },

    /***/ "./src/Players/PlayerManager.ts":
      /*!**************************************!*\
  !*** ./src/Players/PlayerManager.ts ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Players: () => /* binding */ Players,
          /* harmony export */
        });
        /* harmony import */ var _UTILS_FindPlayerBySID__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../UTILS/FindPlayerBySID */ "./src/UTILS/FindPlayerBySID.ts",
          );
        /* harmony import */ var _updatePlayer__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./updatePlayer */ "./src/Players/updatePlayer.ts",
          );
        /* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./Player */ "./src/Players/Player.ts");
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
          function Players() {}
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
              Players.myPlayer =
                new _Player__WEBPACK_IMPORTED_MODULE_2__.Player(SID);
              Players.players.push(Players.myPlayer);
              // INIT:
              Players.myPlayer.init(
                data[0][0],
                data[0][2],
                data[0][3],
                data[0][4],
                data[0][5],
                data[0][6],
                data[0][7],
                data[0][8],
                data[0][9],
              );
            } else {
              var tmpObj = new _Player__WEBPACK_IMPORTED_MODULE_2__.Player(SID);
              Players.players.push(tmpObj);
              tmpObj.init(
                data[0][0],
                data[0][2],
                data[0][3],
                data[0][4],
                data[0][5],
                data[0][6],
                data[0][7],
                data[0][8],
                data[0][9],
              );
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
            var index = Players.players.indexOf(
              Players.players.find(function (player) {
                return player.sid === sid;
              }),
              0,
            );
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
              var tmpPlayer = (0,
              _UTILS_FindPlayerBySID__WEBPACK_IMPORTED_MODULE_0__.findPlayerBySid)(
                data[0],
              );
              if (tmpPlayer) {
                (0, _updatePlayer__WEBPACK_IMPORTED_MODULE_1__.updatePlayer)(
                  tmpPlayer,
                  data,
                  i,
                );
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
        })();

        /***/
      },

    /***/ "./src/Players/updatePlayer.ts":
      /*!*************************************!*\
  !*** ./src/Players/updatePlayer.ts ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ updatePlayer: () => /* binding */ updatePlayer,
          /* harmony export */
        });
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

        /***/
      },

    /***/ "./src/UTILS/FindPlayerBySID.ts":
      /*!**************************************!*\
  !*** ./src/UTILS/FindPlayerBySID.ts ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ findPlayerBySid: () =>
            /* binding */ findPlayerBySid,
          /* harmony export */
        });
        /* harmony import */ var _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../Players/PlayerManager */ "./src/Players/PlayerManager.ts",
          );
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
          return _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.players.find(
            function (player) {
              return player.sid === sid;
            },
          );
        }

        /***/
      },

    /***/ "./src/badWords.ts":
      /*!*************************!*\
  !*** ./src/badWords.ts ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ badWords: () => /* binding */ badWords,
          /* harmony export */
        });
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

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  /*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */ Game: () => /* binding */ Game,
    /* harmony export */
  });
  /* harmony import */ var _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__ =
    __webpack_require__(
      /*! ./Players/PlayerManager */ "./src/Players/PlayerManager.ts",
    );
  /* harmony import */ var _badWords__WEBPACK_IMPORTED_MODULE_1__ =
    __webpack_require__(/*! ./badWords */ "./src/badWords.ts");
  /**
   * Imports the msgpack library
   */
  //const msgpack = require("msgpack");
  var __extends =
    (undefined && undefined.__extends) ||
    (function () {
      var extendStatics = function (d, b) {
        extendStatics =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (d, b) {
              d.__proto__ = b;
            }) ||
          function (d, b) {
            for (var p in b)
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
          };
        return extendStatics(d, b);
      };
      return function (d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError(
            "Class extends value " +
              String(b) +
              " is not a constructor or null",
          );
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype =
          b === null
            ? Object.create(b)
            : ((__.prototype = b.prototype), new __());
      };
    })();

  var players =
    _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.getInstance()
      .players;

  /**
   * A class for encoding and decoding data using MessagePack
   */
  var Msgpack = /** @class */ (function () {
    function Msgpack() {}
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
  })();
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
      } else if (type === "B") {
        // DISCONNECT:
        window.location.reload();
      } else if (type === "D") {
        // ADD PLAYER:
        _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.addPlayer(
          packetData[0][0],
          packetData,
        );
      } else if (type === "E") {
        // REMOVE PLAYER:
        //Players.removePlayer()
      } else if (type === "a") {
        // UPDATE PLAYERS:
        console.log(
          _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.myPlayer,
        );
        _Players_PlayerManager__WEBPACK_IMPORTED_MODULE_0__.Players.updatePlayers(
          packetData,
        );
      } else if (type === "H") {
        // LOAD GAME OBJECT:
      } else if (type === "K") {
        // GATHER ANIMATION:
        if (packetData[2])
          var bonk = new Audio(
            "https://cdn.glitch.global/1d1dafa9-ba5a-47e7-a4e7-bcbf0851583d/bonk.mp4",
          );
        bonk.play();
      } else if (type === "O") {
        // UPDATE HEALTH:
      } else if (type === "6") {
        // RECEIVE CHAT:
      }
    };
    return WS;
  })(Msgpack);
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
    if (
      this.mod.decode(packet)[0] == "6" &&
      _badWords__WEBPACK_IMPORTED_MODULE_1__.badWords.some(function (word) {
        return _this.mod.decode(packet)[1][0].toLowerCase().includes(word);
      })
    ) {
      var msg = this.mod.decode(packet)[1][0];
      this.send2(
        this.mod.encode(["6", [msg.charAt(0).toUpperCase() + msg.slice(1)]]),
      );
    } else {
      this.send2(packet);
    }
  };
  /**
   * The Game class, which extends WS and adds game-specific properties and methods
   */
  var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
      var _this = (_super !== null && _super.apply(this, arguments)) || this;
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
  })(WS);

  var Mod = Game.getInstance();
  alert("MooMoo TS Loaded");
  window.onload = function () {
    document.getElementById("gameName").innerHTML =
      '\n<img src="https://cdn.glitch.global/1d1dafa9-ba5a-47e7-a4e7-bcbf0851583d/%5Bremoval.ai%5D_f5b07bfb-d250-4a8f-8714-2b5f4e5af3d2-banner.png?v=1720093338201">\n';
    // GAME OVERLAY:
    var overlay = document.createElement("div");
    overlay.style =
      "\nposition: absolute;\ntop: 0;\nleft: 0;\nbackground: rgba(255, 255, 185, 0.15);\nwidth: 100%;\nheight: 100%;\npointer-events: none;\n";
    document.body.appendChild(overlay);
    // VERIFICATION PROMPT:
    var VerificationPrompt = /** @class */ (function () {
      function VerificationPrompt() {}
      VerificationPrompt.prototype.prepare = function () {
        this.blur = document.createElement("div");
        this.blur.style.cssText =
          "\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 40, 0.3);\n      backdrop-filter: blur(6px);\n      z-index: 8887;\n    ";
        document.body.appendChild(this.blur);
        this.mainHolder = document.createElement("div");
        this.mainHolder.style.cssText =
          "\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 35%;\n      height: 20%;\n      background: rgba(185, 185, 185, 0.95);\n      backdrop-filter: blur(10px);\n      border-radius: 16px;\n      border: 6px solid lightgrey;\n      z-index: 8888;\n    ";
        document.body.appendChild(this.mainHolder);
        this.title = document.createElement("div");
        this.title.innerHTML = "Authentication.";
        this.title.style.cssText =
          "\n      position: absolute;\n      top: 35%;\n      left: 50%;\n      text-align: center;\n      transform: translate(-50%, -50%);\n      width: 100%;\n      height: 80px;\n      color: #000;\n      font: 32px Arial;\n      font-weight: bold;\n    ";
        this.mainHolder.appendChild(this.title);
        this.input = document.createElement("input");
        this.input.placeholder = "Enter Token Here...";
        this.input.type = "password";
        this.input.style.cssText =
          "\n      position: absolute;\n      height: 50px;\n      background: rgba(135, 135, 135, 0.3);\n      width: 70%;\n      bottom: 5%;\n      left: 3%;\n      border-radius: 10px;\n      border: none;\n      padding-left: 8px;\n      color: #fff;\n    ";
        this.mainHolder.appendChild(this.input);
        this.check = document.createElement("div");
        this.check.style.cssText =
          "\n      position: absolute;\n      bottom: 5%;\n      right: 3%;\n      width: 90px;\n      height: 50px;\n      background: rgba(47, 117, 193, 0.2);\n      text-align: center;\n      font: 20px Arial;\n      font-weight: bold;\n      vertical-align: middle;\n      border-radius: 10px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    ";
        this.check.innerHTML = "Verify";
        this.mainHolder.appendChild(this.check);
      };
      return VerificationPrompt;
    })();
    var verify = new VerificationPrompt();
    verify.prepare();
  };

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaGNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUGxheWVycy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BsYXllcnMvUGxheWVyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUGxheWVycy91cGRhdGVQbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VUSUxTL0ZpbmRQbGF5ZXJCeVNJRC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFkV29yZHMudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogUGxheWVyIGNsYXNzICovXG52YXIgUGxheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBsYXllcihzaWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zaWQgPSBzaWQ7XG4gICAgICAgIHRoaXMuaXNUZWFtID0gZnVuY3Rpb24gKHRtcE9iaikge1xuICAgICAgICAgICAgcmV0dXJuICh0bXBPYmouc2lkID09PSBfdGhpcy5zaWQgfHwgdG1wT2JqLnRlYW0gJiYgdG1wT2JqLnRlYW0gPT09IF90aGlzLnRlYW0pO1xuICAgICAgICB9O1xuICAgICAgICAvLyBJTklUOlxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbiAoaWQsIG5hbWUsIHgsIHksIGRpciwgaGVhbHRoLCBtYXhIZWFsdGgsIHNjYWxlLCBza2luQ29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRpciA9IGRpcjtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoO1xuICAgICAgICAgICAgdGhpcy5tYXhIZWFsdGggPSBtYXhIZWFsdGg7XG4gICAgICAgICAgICB0aGlzLmxhc3RIZWFsdGggPSB0aGlzLmhlYWx0aDtcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgICAgICAgICAgdGhpcy54MiA9IHg7XG4gICAgICAgICAgICB0aGlzLnkyID0geTtcbiAgICAgICAgICAgIHRoaXMueDMgPSAwO1xuICAgICAgICAgICAgdGhpcy55MyA9IDA7XG4gICAgICAgICAgICB0aGlzLnNraW5JbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLmxhc3RTa2luSW5kZXggPSB0aGlzLnNraW5JbmRleDtcbiAgICAgICAgICAgIHRoaXMudGFpbEluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMubGFzdFRhaWxJbmRleCA9IHRoaXMudGFpbEluZGV4O1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gUGxheWVyO1xufSgpKTtcbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiLyoqXG4gKiBJbXBvcnRzXG4gKi9cbmltcG9ydCB7IGZpbmRQbGF5ZXJCeVNpZCB9IGZyb20gXCIuLi9VVElMUy9GaW5kUGxheWVyQnlTSURcIjsgLy8gSW1wb3J0IGZ1bmN0aW9uIHRvIGZpbmQgYSBwbGF5ZXIgYnkgdGhlaXIgU0lEXG5pbXBvcnQgeyB1cGRhdGVQbGF5ZXIgfSBmcm9tIFwiLi91cGRhdGVQbGF5ZXJcIjsgLy8gSW1wb3J0IGZ1bmN0aW9uIHRvIHVwZGF0ZSBhIHBsYXllcidzIGluZm9ybWF0aW9uXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjsgLy8gSW1wb3J0IHBsYXllciBjbGFzc1xuLyoqXG4gKiBQbGF5ZXIgTWFuYWdlciBjbGFzc1xuICpcbiAqIFRoaXMgY2xhc3MgbWFuYWdlcyBhIGNvbGxlY3Rpb24gb2YgcGxheWVycyBhbmQgcHJvdmlkZXMgbWV0aG9kcyB0byBhZGQsIHJlbW92ZSwgYW5kIHVwZGF0ZSBwbGF5ZXJzLlxuICpcbiAqIEBtZW1iZXJPZiBtb2R1bGU6UGxheWVyc1xuICovXG52YXIgUGxheWVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQbGF5ZXJzKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFBsYXllcnMgY2xhc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQbGF5ZXJzfSBUaGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBQbGF5ZXJzIGNsYXNzXG4gICAgICogQG1lbWJlck9mIFBsYXllcnNcbiAgICAgKiBAZXhhbXBsZSBjb25zdCBwbGF5ZXJzID0gUGxheWVycy5nZXRJbnN0YW5jZSgpO1xuICAgICAqL1xuICAgIFBsYXllcnMuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghUGxheWVycy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgUGxheWVycy5pbnN0YW5jZSA9IG5ldyBQbGF5ZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBsYXllcnMuaW5zdGFuY2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgcGxheWVyIHRvIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gU0lEIFRoZSBTSUQgZm9yIHRoZSBwbGF5ZXJcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBkYXRhIFRoZSBwbGF5ZXIncyBkYXRhXG4gICAgICogQG1lbWJlck9mIFBsYXllcnNcbiAgICAgKiBAZXhhbXBsZSBwbGF5ZXJzLmFkZFBsYXllcigxLCB7IG5hbWU6IFwiT25pb25cIiwgc2tpbjogXCJfX3Byb3RvX19cIn0pO1xuICAgICAqL1xuICAgIFBsYXllcnMuYWRkUGxheWVyID0gZnVuY3Rpb24gKFNJRCwgZGF0YSkge1xuICAgICAgICAvKiBEYXRhIGZvcm1hdDpcbiAgXG4gICAgICAgIDA6IHtpZCwgc2lkLCBuYW1lLCB4LCB5LCBzb21ldGhpbmcsIGhlYWx0aCwgc29tZXRoaW5nLCBzY2FsZT8sIHNvbWV0aGluZ31cbiAgICAgICAgMTogdHJ1ZS9mYWxzZSBmb3IgeWVzL25vIGlzIG1lXG4gICAgICAgICovXG4gICAgICAgIGlmIChkYXRhWzFdKSB7XG4gICAgICAgICAgICAvLyBNWSBQTEFZRVI6XG4gICAgICAgICAgICBQbGF5ZXJzLm15UGxheWVyID0gbmV3IFBsYXllcihTSUQpO1xuICAgICAgICAgICAgUGxheWVycy5wbGF5ZXJzLnB1c2goUGxheWVycy5teVBsYXllcik7XG4gICAgICAgICAgICAvLyBJTklUOlxuICAgICAgICAgICAgUGxheWVycy5teVBsYXllci5pbml0KGRhdGFbMF1bMF0sIGRhdGFbMF1bMl0sIGRhdGFbMF1bM10sIGRhdGFbMF1bNF0sIGRhdGFbMF1bNV0sIGRhdGFbMF1bNl0sIGRhdGFbMF1bN10sIGRhdGFbMF1bOF0sIGRhdGFbMF1bOV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRtcE9iaiA9IG5ldyBQbGF5ZXIoU0lEKTtcbiAgICAgICAgICAgIFBsYXllcnMucGxheWVycy5wdXNoKHRtcE9iaik7XG4gICAgICAgICAgICB0bXBPYmouaW5pdChkYXRhWzBdWzBdLCBkYXRhWzBdWzJdLCBkYXRhWzBdWzNdLCBkYXRhWzBdWzRdLCBkYXRhWzBdWzVdLCBkYXRhWzBdWzZdLCBkYXRhWzBdWzddLCBkYXRhWzBdWzhdLCBkYXRhWzBdWzldKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHBsYXllciBmcm9tIHRoZSBjb2xsZWN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lkIFRoZSBTSUQgZm9yIHRoZSBwbGF5ZXIgdG8gcmVtb3ZlXG4gICAgICogQG1lbWJlck9mIFBsYXllcnNcbiAgICAgKiBAZXhhbXBsZSBwbGF5ZXJzLnJlbW92ZVBsYXllcigxMCk7XG4gICAgICovXG4gICAgUGxheWVycy5wcm90b3R5cGUucmVtb3ZlUGxheWVyID0gZnVuY3Rpb24gKHNpZCkge1xuICAgICAgICB2YXIgaW5kZXggPSBQbGF5ZXJzLnBsYXllcnMuaW5kZXhPZihQbGF5ZXJzLnBsYXllcnMuZmluZChmdW5jdGlvbiAocGxheWVyKSB7IHJldHVybiBwbGF5ZXIuc2lkID09PSBzaWQ7IH0pLCAwKTtcbiAgICAgICAgZGVsZXRlIFBsYXllcnMucGxheWVyc1tpbmRleF07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBwbGF5ZXJzIGluIHRoZSBjb2xsZWN0aW9uIGJhc2VkIG9uIG5ldyBkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FueVtdfSBkYXRhIFRoZSBuZXcgZGF0YSB0byB1cGRhdGUgdGhlIHBsYXllcnMgd2l0aFxuICAgICAqIEBtZW1iZXJPZiBQbGF5ZXJzXG4gICAgICogQGV4YW1wbGUgcGxheWVycy51cGRhdGVQbGF5ZXJzKHRtcFBsYXllcik7XG4gICAgICovXG4gICAgUGxheWVycy51cGRhdGVQbGF5ZXJzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy8gVW5yZW5kZXIgYWxsIHBsYXllcnMgYW5kIHJlcmVuZGVyIHBsYXllcnMgaW4gcmFuZ2VcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciB0bXBQbGF5ZXIgPSB0aGlzLnBsYXllcnNbaV07XG4gICAgICAgICAgICB0bXBQbGF5ZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMTMpIHtcbiAgICAgICAgICAgIHZhciB0bXBQbGF5ZXIgPSBmaW5kUGxheWVyQnlTaWQoZGF0YVswXSk7XG4gICAgICAgICAgICBpZiAodG1wUGxheWVyKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlUGxheWVyKHRtcFBsYXllciwgZGF0YSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFycmF5IG9mIHBsYXllcnNcbiAgICAgKi9cbiAgICBQbGF5ZXJzLnBsYXllcnMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBNeSBwbGF5ZXJcbiAgICAgKi9cbiAgICBQbGF5ZXJzLm15UGxheWVyID0ge307XG4gICAgcmV0dXJuIFBsYXllcnM7XG59KCkpO1xuZXhwb3J0IHsgUGxheWVycyB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBsYXllcihwbGF5ZXIsIGRhdGEsIGluZGV4KSB7XG4gICAgcGxheWVyLnQxID0gKHBsYXllci50MiA9PT0gdm9pZCAwID8gRGF0ZS5ub3coKSA6IHBsYXllci50Mik7XG4gICAgcGxheWVyLnQyID0gRGF0ZS5ub3coKTtcbiAgICBwbGF5ZXIubGFzUG9zID0ge1xuICAgICAgICB4OiBwbGF5ZXIueDIsXG4gICAgICAgIHk6IHBsYXllci55MlxuICAgIH07XG4gICAgcGxheWVyLngyID0gZGF0YVtpbmRleCArIDFdO1xuICAgIHBsYXllci55MiA9IGRhdGFbaW5kZXggKyAyXTtcbiAgICBwbGF5ZXIuZDEgPSAocGxheWVyLmQyID09PSB2b2lkIDAgPyBkYXRhW2luZGV4ICsgM10gOiBwbGF5ZXIuZDIpO1xuICAgIHBsYXllci5kZWx0YSA9IDA7XG4gICAgcGxheWVyLndlYXBvbkluZGV4ID0gZGF0YVtpbmRleCArIDVdO1xuICAgIHBsYXllci53ZWFwb25JbmRleCA8IDkgJiYgKHBsYXllci53ZWFwb25zWzBdID0gcGxheWVyLndlYXBvbkluZGV4KTtcbiAgICBwbGF5ZXIud2VhcG9uSW5kZXggPj0gOSAmJiAocGxheWVyLndlYXBvbnNbMV0gPSBwbGF5ZXIud2VhcG9uSW5kZXgpO1xuICAgIHBsYXllci53ZWFwb25WYXJpYW50ID0gZGF0YVtpbmRleCArIDZdO1xuICAgIHBsYXllci50ZWFtID0gZGF0YVtpbmRleCArIDddO1xuICAgIHBsYXllci5sYXN0U2tpbkluZGV4ID0gcGxheWVyLnNraW5JbmRleDtcbiAgICBwbGF5ZXIuc2tpbkluZGV4ID0gZGF0YVtpbmRleCArIDldO1xuICAgIHBsYXllci5sYXN0VGFpbEluZGV4ID0gcGxheWVyLnRhaWxJbmRleDtcbiAgICBwbGF5ZXIudGFpbEluZGV4ID0gZGF0YVtpbmRleCArIDEwXTtcbiAgICBwbGF5ZXIudmlzaWJsZSA9IHRydWU7XG59XG4iLCIvKipcbiAqIEltcG9ydHMgdGhlIFBsYXllcnMgY2xhc3NcbiAqL1xuaW1wb3J0IHsgUGxheWVycyB9IGZyb20gXCIuLi9QbGF5ZXJzL1BsYXllck1hbmFnZXJcIjtcbi8qKlxuICogRmluZHMgYSBwbGF5ZXIgYnkgdGhlaXIgU0lEXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNpZCBUaGUgU0lEIG9mIHRoZSBwbGF5ZXIgdG8gZmluZFxuICogQHJldHVybnMge2FueX0gVGhlIHBsYXllciB3aXRoIHRoZSBtYXRjaGluZyBTSUQsIG9yIHVuZGVmaW5lZCBpZiBub3QgZm91bmRcbiAqIEBtZW1iZXJPZiBtb2R1bGU6RmluZFBsYXllckJ5U0lEXG4gKiBAZXhhbXBsZSBmaW5kUGxheWVyQnlTaWQoMTIzKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQbGF5ZXJCeVNpZChzaWQpIHtcbiAgICAvKipcbiAgICAgKiBVc2VzIHRoZSBmaW5kIG1ldGhvZCB0byBzZWFyY2ggdGhlIHBsYXllcnMgYXJyYXkgZm9yIGEgcGxheWVyIHdpdGggYSBtYXRjaGluZyBTSURcbiAgICAgKi9cbiAgICByZXR1cm4gUGxheWVycy5wbGF5ZXJzLmZpbmQoZnVuY3Rpb24gKHBsYXllcikgeyByZXR1cm4gcGxheWVyLnNpZCA9PT0gc2lkOyB9KTtcbn1cbiIsImV4cG9ydCB2YXIgYmFkV29yZHMgPSBbXG4gICAgXCJhaG9sZVwiLFxuICAgIFwiYW51c1wiLFxuICAgIFwiYXNoMGxlXCIsXG4gICAgXCJhc2gwbGVzXCIsXG4gICAgXCJhc2hvbGVzXCIsXG4gICAgXCJhc3NcIixcbiAgICBcIkFzcyBNb25rZXlcIixcbiAgICBcIkFzc2ZhY2VcIixcbiAgICBcImFzc2gwbGVcIixcbiAgICBcImFzc2gwbGV6XCIsXG4gICAgXCJhc3Nob2xlXCIsXG4gICAgXCJhc3Nob2xlc1wiLFxuICAgIFwiYXNzaG9selwiLFxuICAgIFwiYXNzd2lwZVwiLFxuICAgIFwiYXp6aG9sZVwiLFxuICAgIFwiYmFzc3RlcmRzXCIsXG4gICAgXCJiYXN0YXJkXCIsXG4gICAgXCJiYXN0YXJkc1wiLFxuICAgIFwiYmFzdGFyZHpcIixcbiAgICBcImJhc3RlcmRzXCIsXG4gICAgXCJiYXN0ZXJkelwiLFxuICAgIFwiQmlhdGNoXCIsXG4gICAgXCJiaXRjaFwiLFxuICAgIFwiYml0Y2hlc1wiLFxuICAgIFwiQmxvdyBKb2JcIixcbiAgICBcImJvZmZpbmdcIixcbiAgICBcImJ1dHRob2xlXCIsXG4gICAgXCJidXR0d2lwZVwiLFxuICAgIFwiYzBja1wiLFxuICAgIFwiYzBja3NcIixcbiAgICBcImMwa1wiLFxuICAgIFwiQ2FycGV0IE11bmNoZXJcIixcbiAgICBcImNhd2tcIixcbiAgICBcImNhd2tzXCIsXG4gICAgXCJDbGl0XCIsXG4gICAgXCJjbnRzXCIsXG4gICAgXCJjbnR6XCIsXG4gICAgXCJjb2NrXCIsXG4gICAgXCJjb2NraGVhZFwiLFxuICAgIFwiY29jay1oZWFkXCIsXG4gICAgXCJjb2Nrc1wiLFxuICAgIFwiQ29ja1N1Y2tlclwiLFxuICAgIFwiY29jay1zdWNrZXJcIixcbiAgICBcImNyYXBcIixcbiAgICBcImN1bVwiLFxuICAgIFwiY3VudFwiLFxuICAgIFwiY3VudHNcIixcbiAgICBcImN1bnR6XCIsXG4gICAgXCJkaWNrXCIsXG4gICAgXCJkaWxkMFwiLFxuICAgIFwiZGlsZDBzXCIsXG4gICAgXCJkaWxkb1wiLFxuICAgIFwiZGlsZG9zXCIsXG4gICAgXCJkaWxsZDBcIixcbiAgICBcImRpbGxkMHNcIixcbiAgICBcImRvbWluYXRyaWNrc1wiLFxuICAgIFwiZG9taW5hdHJpY3NcIixcbiAgICBcImRvbWluYXRyaXhcIixcbiAgICBcImR5a2VcIixcbiAgICBcImVuZW1hXCIsXG4gICAgXCJmIHUgYyBrXCIsXG4gICAgXCJmIHUgYyBrIGUgclwiLFxuICAgIFwiZmFnXCIsXG4gICAgXCJmYWcxdFwiLFxuICAgIFwiZmFnZXRcIixcbiAgICBcImZhZ2cxdFwiLFxuICAgIFwiZmFnZ2l0XCIsXG4gICAgXCJmYWdnb3RcIixcbiAgICBcImZhZ2cwdFwiLFxuICAgIFwiZmFnaXRcIixcbiAgICBcImZhZ3NcIixcbiAgICBcImZhZ3pcIixcbiAgICBcImZhaWdcIixcbiAgICBcImZhaWdzXCIsXG4gICAgXCJmYXJ0XCIsXG4gICAgXCJmbGlwcGluZyB0aGUgYmlyZFwiLFxuICAgIFwiZnVja1wiLFxuICAgIFwiZnVja2VyXCIsXG4gICAgXCJmdWNraW5cIixcbiAgICBcImZ1Y2tpbmdcIixcbiAgICBcImZ1Y2tzXCIsXG4gICAgXCJGdWRnZSBQYWNrZXJcIixcbiAgICBcImZ1a1wiLFxuICAgIFwiRnVrYWhcIixcbiAgICBcIkZ1a2VuXCIsXG4gICAgXCJmdWtlclwiLFxuICAgIFwiRnVraW5cIixcbiAgICBcIkZ1a2tcIixcbiAgICBcIkZ1a2thaFwiLFxuICAgIFwiRnVra2VuXCIsXG4gICAgXCJGdWtrZXJcIixcbiAgICBcIkZ1a2tpblwiLFxuICAgIFwiZzAwa1wiLFxuICAgIFwiR29kLWRhbW5lZFwiLFxuICAgIFwiaDAwclwiLFxuICAgIFwiaDBhclwiLFxuICAgIFwiaDByZVwiLFxuICAgIFwiaGVsbHNcIixcbiAgICBcImhvYXJcIixcbiAgICBcImhvb3JcIixcbiAgICBcImhvb3JlXCIsXG4gICAgXCJqYWNrb2ZmXCIsXG4gICAgXCJqYXBcIixcbiAgICBcImphcHNcIixcbiAgICBcImplcmstb2ZmXCIsXG4gICAgXCJqaXNpbVwiLFxuICAgIFwiamlzc1wiLFxuICAgIFwiaml6bVwiLFxuICAgIFwiaml6elwiLFxuICAgIFwia25vYlwiLFxuICAgIFwia25vYnNcIixcbiAgICBcImtub2J6XCIsXG4gICAgXCJrdW50XCIsXG4gICAgXCJrdW50c1wiLFxuICAgIFwia3VudHpcIixcbiAgICBcIkxlenppYW5cIixcbiAgICBcIkxpcHNoaXRzXCIsXG4gICAgXCJMaXBzaGl0elwiLFxuICAgIFwibWFzb2NoaXN0XCIsXG4gICAgXCJtYXNva2lzdFwiLFxuICAgIFwibWFzc3RlcmJhaXRcIixcbiAgICBcIm1hc3N0cmJhaXRcIixcbiAgICBcIm1hc3N0cmJhdGVcIixcbiAgICBcIm1hc3RlcmJhaXRlclwiLFxuICAgIFwibWFzdGVyYmF0ZVwiLFxuICAgIFwibWFzdGVyYmF0ZXNcIixcbiAgICBcIk1vdGhhIEZ1Y2tlclwiLFxuICAgIFwiTW90aGEgRnVrZXJcIixcbiAgICBcIk1vdGhhIEZ1a2thaFwiLFxuICAgIFwiTW90aGEgRnVra2VyXCIsXG4gICAgXCJNb3RoZXIgRnVja2VyXCIsXG4gICAgXCJNb3RoZXIgRnVrYWhcIixcbiAgICBcIk1vdGhlciBGdWtlclwiLFxuICAgIFwiTW90aGVyIEZ1a2thaFwiLFxuICAgIFwiTW90aGVyIEZ1a2tlclwiLFxuICAgIFwibW90aGVyLWZ1Y2tlclwiLFxuICAgIFwiTXV0aGEgRnVja2VyXCIsXG4gICAgXCJNdXRoYSBGdWthaFwiLFxuICAgIFwiTXV0aGEgRnVrZXJcIixcbiAgICBcIk11dGhhIEZ1a2thaFwiLFxuICAgIFwiTXV0aGEgRnVra2VyXCIsXG4gICAgXCJuMWdyXCIsXG4gICAgXCJuYXN0dFwiLFxuICAgIFwibmlnZ2VyO1wiLFxuICAgIFwibmlndXI7XCIsXG4gICAgXCJuaWlnZXI7XCIsXG4gICAgXCJuaWlncjtcIixcbiAgICBcIm9yYWZpc1wiLFxuICAgIFwib3JnYXNpbTtcIixcbiAgICBcIm9yZ2FzbVwiLFxuICAgIFwib3JnYXN1bVwiLFxuICAgIFwib3JpZmFjZVwiLFxuICAgIFwib3JpZmljZVwiLFxuICAgIFwib3JpZmlzc1wiLFxuICAgIFwicGFja2lcIixcbiAgICBcInBhY2tpZVwiLFxuICAgIFwicGFja3lcIixcbiAgICBcInBha2lcIixcbiAgICBcInBha2llXCIsXG4gICAgXCJwYWt5XCIsXG4gICAgXCJwZWNrZXJcIixcbiAgICBcInBlZWVudXNcIixcbiAgICBcInBlZWVudXNzc1wiLFxuICAgIFwicGVlbnVzXCIsXG4gICAgXCJwZWludXNcIixcbiAgICBcInBlbjFzXCIsXG4gICAgXCJwZW5hc1wiLFxuICAgIFwicGVuaXNcIixcbiAgICBcInBlbmlzLWJyZWF0aFwiLFxuICAgIFwicGVudXNcIixcbiAgICBcInBlbnV1c1wiLFxuICAgIFwiUGh1Y1wiLFxuICAgIFwiUGh1Y2tcIixcbiAgICBcIlBodWtcIixcbiAgICBcIlBodWtlclwiLFxuICAgIFwiUGh1a2tlclwiLFxuICAgIFwicG9sYWNcIixcbiAgICBcInBvbGFja1wiLFxuICAgIFwicG9sYWtcIixcbiAgICBcIlBvb25hbmlcIixcbiAgICBcInByMWNcIixcbiAgICBcInByMWNrXCIsXG4gICAgXCJwcjFrXCIsXG4gICAgXCJwdXNzZVwiLFxuICAgIFwicHVzc2VlXCIsXG4gICAgXCJwdXNzeVwiLFxuICAgIFwicHV1a2VcIixcbiAgICBcInB1dWtlclwiLFxuICAgIFwicXdlaXJcIixcbiAgICBcInJlY2t0dW1cIixcbiAgICBcInJlY3R1bVwiLFxuICAgIFwicmV0YXJkXCIsXG4gICAgXCJzYWRpc3RcIixcbiAgICBcInNjYW5rXCIsXG4gICAgXCJzY2hsb25nXCIsXG4gICAgXCJzY3Jld2luZ1wiLFxuICAgIFwic2VtZW5cIixcbiAgICBcInNleFwiLFxuICAgIFwic2V4eVwiLFxuICAgIFwiU2ghdFwiLFxuICAgIFwic2gxdFwiLFxuICAgIFwic2gxdGVyXCIsXG4gICAgXCJzaDF0c1wiLFxuICAgIFwic2gxdHRlclwiLFxuICAgIFwic2gxdHpcIixcbiAgICBcInNoaXRcIixcbiAgICBcInNoaXRzXCIsXG4gICAgXCJzaGl0dGVyXCIsXG4gICAgXCJTaGl0dHlcIixcbiAgICBcIlNoaXR5XCIsXG4gICAgXCJzaGl0elwiLFxuICAgIFwiU2h5dFwiLFxuICAgIFwiU2h5dGVcIixcbiAgICBcIlNoeXR0eVwiLFxuICAgIFwiU2h5dHlcIixcbiAgICBcInNrYW5ja1wiLFxuICAgIFwic2thbmtcIixcbiAgICBcInNrYW5rZWVcIixcbiAgICBcInNrYW5rZXlcIixcbiAgICBcInNrYW5rc1wiLFxuICAgIFwiU2thbmt5XCIsXG4gICAgXCJzbGFnXCIsXG4gICAgXCJzbHV0XCIsXG4gICAgXCJzbHV0c1wiLFxuICAgIFwiU2x1dHR5XCIsXG4gICAgXCJzbHV0elwiLFxuICAgIFwic29uLW9mLWEtYml0Y2hcIixcbiAgICBcInRpdFwiLFxuICAgIFwidHVyZFwiLFxuICAgIFwidmExamluYVwiLFxuICAgIFwidmFnMW5hXCIsXG4gICAgXCJ2YWdpaW5hXCIsXG4gICAgXCJ2YWdpbmFcIixcbiAgICBcInZhajFuYVwiLFxuICAgIFwidmFqaW5hXCIsXG4gICAgXCJ2dWxsdmFcIixcbiAgICBcInZ1bHZhXCIsXG4gICAgXCJ3MHBcIixcbiAgICBcIndoMDByXCIsXG4gICAgXCJ3aDByZVwiLFxuICAgIFwid2hvcmVcIixcbiAgICBcInhyYXRlZFwiLFxuICAgIFwieHh4XCIsXG4gICAgXCJiIStjaFwiLFxuICAgIFwiYml0Y2hcIixcbiAgICBcImJsb3dqb2JcIixcbiAgICBcImNsaXRcIixcbiAgICBcImFyc2NobG9jaFwiLFxuICAgIFwiZnVja1wiLFxuICAgIFwic2hpdFwiLFxuICAgIFwiYXNzXCIsXG4gICAgXCJhc3Nob2xlXCIsXG4gICAgXCJiIXRjaFwiLFxuICAgIFwiYjE3Y2hcIixcbiAgICBcImIxdGNoXCIsXG4gICAgXCJiYXN0YXJkXCIsXG4gICAgXCJiaStjaFwiLFxuICAgIFwiYm9pb2xhc1wiLFxuICAgIFwiYnVjZXRhXCIsXG4gICAgXCJjMGNrXCIsXG4gICAgXCJjYXdrXCIsXG4gICAgXCJjaGlua1wiLFxuICAgIFwiY2lwYVwiLFxuICAgIFwiY2xpdHNcIixcbiAgICBcImNvY2tcIixcbiAgICBcImN1bVwiLFxuICAgIFwiY3VudFwiLFxuICAgIFwiZGlsZG9cIixcbiAgICBcImRpcnNhXCIsXG4gICAgXCJlamFrdWxhdGVcIixcbiAgICBcImZhdGFzc1wiLFxuICAgIFwiZmN1a1wiLFxuICAgIFwiZnVrXCIsXG4gICAgXCJmdXgwclwiLFxuICAgIFwiaG9lclwiLFxuICAgIFwiaG9yZVwiLFxuICAgIFwiamlzbVwiLFxuICAgIFwia2F3a1wiLFxuICAgIFwibDNpdGNoXCIsXG4gICAgXCJsM2krY2hcIixcbiAgICBcIm1hc3R1cmJhdGVcIixcbiAgICBcIm1hc3RlcmJhdCpcIixcbiAgICBcIm1hc3RlcmJhdDNcIixcbiAgICBcIm1vdGhlcmZ1Y2tlclwiLFxuICAgIFwicy5vLmIuXCIsXG4gICAgXCJtb2ZvXCIsXG4gICAgXCJuYXppXCIsXG4gICAgXCJuaWdnYVwiLFxuICAgIFwibmlnZ2VyXCIsXG4gICAgXCJudXRzYWNrXCIsXG4gICAgXCJwaHVja1wiLFxuICAgIFwicGltcGlzXCIsXG4gICAgXCJwdXNzZVwiLFxuICAgIFwicHVzc3lcIixcbiAgICBcInNjcm90dW1cIixcbiAgICBcInNoIXRcIixcbiAgICBcInNoZW1hbGVcIixcbiAgICBcInNoaStcIixcbiAgICBcInNoIStcIixcbiAgICBcInNsdXRcIixcbiAgICBcInNtdXRcIixcbiAgICBcInRlZXRzXCIsXG4gICAgXCJ0aXRzXCIsXG4gICAgXCJib29ic1wiLFxuICAgIFwiYjAwYnNcIixcbiAgICBcInRlZXpcIixcbiAgICBcInRlc3RpY2FsXCIsXG4gICAgXCJ0ZXN0aWNsZVwiLFxuICAgIFwidGl0dFwiLFxuICAgIFwidzAwc2VcIixcbiAgICBcImphY2tvZmZcIixcbiAgICBcIndhbmtcIixcbiAgICBcIndob2FyXCIsXG4gICAgXCJ3aG9yZVwiLFxuICAgIFwiKmRhbW5cIixcbiAgICBcIipkeWtlXCIsXG4gICAgXCIqZnVjaypcIixcbiAgICBcIipzaGl0KlwiLFxuICAgIFwiQCQkXCIsXG4gICAgXCJhbWNpa1wiLFxuICAgIFwiYW5kc2tvdGFcIixcbiAgICBcImFyc2UqXCIsXG4gICAgXCJhc3NyYW1tZXJcIixcbiAgICBcImF5aXJcIixcbiAgICBcImJpN2NoXCIsXG4gICAgXCJiaXRjaCpcIixcbiAgICBcImJvbGxvY2sqXCIsXG4gICAgXCJicmVhc3RzXCIsXG4gICAgXCJidXR0LXBpcmF0ZVwiLFxuICAgIFwiY2Ficm9uXCIsXG4gICAgXCJjYXp6b1wiLFxuICAgIFwiY2hyYWFcIixcbiAgICBcImNodWpcIixcbiAgICBcIkNvY2sqXCIsXG4gICAgXCJjdW50KlwiLFxuICAgIFwiZDRtblwiLFxuICAgIFwiZGF5Z29cIixcbiAgICBcImRlZ29cIixcbiAgICBcImRpY2sqXCIsXG4gICAgXCJkaWtlKlwiLFxuICAgIFwiZHVwYVwiLFxuICAgIFwiZHppd2thXCIsXG4gICAgXCJlamFja3VsYXRlXCIsXG4gICAgXCJFa3JlbSpcIixcbiAgICBcIkVrdG9cIixcbiAgICBcImVuY3VsZXJcIixcbiAgICBcImZhZW5cIixcbiAgICBcImZhZypcIixcbiAgICBcImZhbmN1bG9cIixcbiAgICBcImZhbm55XCIsXG4gICAgXCJmZWNlc1wiLFxuICAgIFwiZmVnXCIsXG4gICAgXCJGZWxjaGVyXCIsXG4gICAgXCJmaWNrZW5cIixcbiAgICBcImZpdHQqXCIsXG4gICAgXCJGbGlra2VyXCIsXG4gICAgXCJmb3Jlc2tpblwiLFxuICAgIFwiRm90emVcIixcbiAgICBcIkZ1KCpcIixcbiAgICBcImZ1aypcIixcbiAgICBcImZ1dGtyZXR6blwiLFxuICAgIFwiZ29va1wiLFxuICAgIFwiZ3VpZW5hXCIsXG4gICAgXCJoMHJcIixcbiAgICBcImg0eDByXCIsXG4gICAgXCJoZWxsXCIsXG4gICAgXCJoZWx2ZXRlXCIsXG4gICAgXCJob2VyKlwiLFxuICAgIFwiaG9ua2V5XCIsXG4gICAgXCJIdWV2b25cIixcbiAgICBcImh1aVwiLFxuICAgIFwiaW5qdW5cIixcbiAgICBcImppenpcIixcbiAgICBcImthbmtlcipcIixcbiAgICBcImtpa2VcIixcbiAgICBcImtsb290emFrXCIsXG4gICAgXCJrcmF1dFwiLFxuICAgIFwia251bGxlXCIsXG4gICAgXCJrdWtcIixcbiAgICBcImt1a3N1Z2VyXCIsXG4gICAgXCJLdXJhY1wiLFxuICAgIFwia3Vyd2FcIixcbiAgICBcImt1c2kqXCIsXG4gICAgXCJreXJwYSpcIixcbiAgICBcImxlc2JvXCIsXG4gICAgXCJtYW1ob29uXCIsXG4gICAgXCJtYXN0dXJiYXQqXCIsXG4gICAgXCJtZXJkKlwiLFxuICAgIFwibWlidW5cIixcbiAgICBcIm1vbmtsZWlnaFwiLFxuICAgIFwibW91bGlld29wXCIsXG4gICAgXCJtdWllXCIsXG4gICAgXCJtdWxra3VcIixcbiAgICBcIm11c2NoaVwiLFxuICAgIFwibmF6aXNcIixcbiAgICBcIm5lcGVzYXVyaW9cIixcbiAgICBcIm5pZ2dlcipcIixcbiAgICBcIm9yb3NwdVwiLFxuICAgIFwicGFza2EqXCIsXG4gICAgXCJwZXJzZVwiLFxuICAgIFwicGlja2FcIixcbiAgICBcInBpZXJkb2wqXCIsXG4gICAgXCJwaWxsdSpcIixcbiAgICBcInBpbW1lbFwiLFxuICAgIFwicGlzcypcIixcbiAgICBcInBpemRhXCIsXG4gICAgXCJwb29udHNlZVwiLFxuICAgIFwicG9vcFwiLFxuICAgIFwicG9yblwiLFxuICAgIFwicDByblwiLFxuICAgIFwicHIwblwiLFxuICAgIFwicHJldGVlblwiLFxuICAgIFwicHVsYVwiLFxuICAgIFwicHVsZVwiLFxuICAgIFwicHV0YVwiLFxuICAgIFwicHV0b1wiLFxuICAgIFwicWFoYmVoXCIsXG4gICAgXCJxdWVlZipcIixcbiAgICBcInJhdXRlbmJlcmdcIixcbiAgICBcInNjaGFmZmVyXCIsXG4gICAgXCJzY2hlaXNzKlwiLFxuICAgIFwic2NobGFtcGVcIixcbiAgICBcInNjaG11Y2tcIixcbiAgICBcInNjcmV3XCIsXG4gICAgXCJzaCF0KlwiLFxuICAgIFwic2hhcm11dGFcIixcbiAgICBcInNoYXJtdXRlXCIsXG4gICAgXCJzaGlwYWxcIixcbiAgICBcInNoaXpcIixcbiAgICBcInNrcmlielwiLFxuICAgIFwic2t1cnd5c3luXCIsXG4gICAgXCJzcGhlbmN0ZXJcIixcbiAgICBcInNwaWNcIixcbiAgICBcInNwaWVyZGFsYWpcIixcbiAgICBcInNwbG9vZ2VcIixcbiAgICBcInN1a2FcIixcbiAgICBcImIwMGIqXCIsXG4gICAgXCJ0ZXN0aWNsZSpcIixcbiAgICBcInRpdHQqXCIsXG4gICAgXCJ0d2F0XCIsXG4gICAgXCJ2aXR0dVwiLFxuICAgIFwid2FuaypcIixcbiAgICBcIndldGJhY2sqXCIsXG4gICAgXCJ3aWNoc2VyXCIsXG4gICAgXCJ3b3AqXCIsXG4gICAgXCJ5ZWRcIixcbiAgICBcInphYm91cmFoXCIsXG5dO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKipcbiAqIEltcG9ydHMgdGhlIG1zZ3BhY2sgbGlicmFyeVxuICovXG4vL2NvbnN0IG1zZ3BhY2sgPSByZXF1aXJlKFwibXNncGFja1wiKTtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBQbGF5ZXJzIH0gZnJvbSBcIi4vUGxheWVycy9QbGF5ZXJNYW5hZ2VyXCI7XG52YXIgcGxheWVycyA9IFBsYXllcnMuZ2V0SW5zdGFuY2UoKS5wbGF5ZXJzO1xuaW1wb3J0IHsgYmFkV29yZHMgfSBmcm9tIFwiLi9iYWRXb3Jkc1wiO1xuLyoqXG4gKiBBIGNsYXNzIGZvciBlbmNvZGluZyBhbmQgZGVjb2RpbmcgZGF0YSB1c2luZyBNZXNzYWdlUGFja1xuICovXG52YXIgTXNncGFjayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNc2dwYWNrKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbmNvZGVzIGRhdGEgdXNpbmcgTWVzc2FnZVBhY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55fSBkYXRhIFRoZSBkYXRhIHRvIGVuY29kZVxuICAgICAqIEByZXR1cm5zIHtCdWZmZXJ9IFRoZSBlbmNvZGVkIGRhdGFcbiAgICAgKi9cbiAgICBNc2dwYWNrLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gbXNncGFjay5lbmNvZGUoZGF0YSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZWNvZGVzIGRhdGEgdXNpbmcgTWVzc2FnZVBhY2tcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QnVmZmVyfSBkYXRhIFRoZSBkYXRhIHRvIGRlY29kZVxuICAgICAqIEByZXR1cm5zIHthbnl9IFRoZSBkZWNvZGVkIGRhdGFcbiAgICAgKi9cbiAgICBNc2dwYWNrLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gbXNncGFjay5kZWNvZGUoZGF0YSk7XG4gICAgfTtcbiAgICByZXR1cm4gTXNncGFjaztcbn0oKSk7XG4vKipcbiAqIEEgY2xhc3MgZm9yIGhhbmRsaW5nIFdlYlNvY2tldCBjb25uZWN0aW9ucyBhbmQgc2VuZGluZy9yZWNlaXZpbmcgcGFja2V0c1xuICovXG52YXIgV1MgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFdTLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gV1MoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLndzID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIHBhY2tldCBvdmVyIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgcGFja2V0XG4gICAgICogQHBhcmFtIHsuLi5hbnlbXX0gZGF0YSBUaGUgZGF0YSB0byBzZW5kXG4gICAgICovXG4gICAgV1MucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgZGF0YSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgZGF0YVtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMud3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlsqXSBXZWJTb2NrZXQgaXMgbm90IGluaXRpYWxpemVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB0aGlzLndzLnNlbmQodGhpcy5lbmNvZGUoW3R5cGUsIGRhdGFdKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGluY29taW5nIHBhY2tldHMgZnJvbSB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YW55fSBkYXRhIFRoZSBpbmNvbWluZyBwYWNrZXQgZGF0YVxuICAgICAqL1xuICAgIFdTLnByb3RvdHlwZS5oYW5kbGVQYWNrZXRzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICAgICAgICB2YXIgcGFyc2VkID0gdGhpcy5kZWNvZGUoZGF0YSk7XG4gICAgICAgIHZhciB0eXBlID0gcGFyc2VkWzBdO1xuICAgICAgICB2YXIgcGFja2V0RGF0YSA9IHBhcnNlZFsxXTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiQVwiKSB7XG4gICAgICAgICAgICAvLyBTRVQgSU5JVCBEQVRBO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiQlwiKSB7XG4gICAgICAgICAgICAvLyBESVNDT05ORUNUOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwiRFwiKSB7XG4gICAgICAgICAgICAvLyBBREQgUExBWUVSOlxuICAgICAgICAgICAgUGxheWVycy5hZGRQbGF5ZXIocGFja2V0RGF0YVswXVswXSwgcGFja2V0RGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJFXCIpIHtcbiAgICAgICAgICAgIC8vIFJFTU9WRSBQTEFZRVI6XG4gICAgICAgICAgICAvL1BsYXllcnMucmVtb3ZlUGxheWVyKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcImFcIikge1xuICAgICAgICAgICAgLy8gVVBEQVRFIFBMQVlFUlM6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhQbGF5ZXJzLm15UGxheWVyKTtcbiAgICAgICAgICAgIFBsYXllcnMudXBkYXRlUGxheWVycyhwYWNrZXREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIkhcIikge1xuICAgICAgICAgICAgLy8gTE9BRCBHQU1FIE9CSkVDVDpcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIktcIikge1xuICAgICAgICAgICAgLy8gR0FUSEVSIEFOSU1BVElPTjpcbiAgICAgICAgICAgIGlmIChwYWNrZXREYXRhWzJdKVxuICAgICAgICAgICAgICAgIHZhciBib25rID0gbmV3IEF1ZGlvKFwiaHR0cHM6Ly9jZG4uZ2xpdGNoLmdsb2JhbC8xZDFkYWZhOS1iYTVhLTQ3ZTctYTRlNy1iY2JmMDg1MTU4M2QvYm9uay5tcDRcIik7XG4gICAgICAgICAgICBib25rLnBsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIk9cIikge1xuICAgICAgICAgICAgLy8gVVBEQVRFIEhFQUxUSDpcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIjZcIikge1xuICAgICAgICAgICAgLy8gUkVDRUlWRSBDSEFUOlxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gV1M7XG59KE1zZ3BhY2spKTtcbi8qKlxuICogTW9ua2V5IHBhdGNoZXMgdGhlIFdlYlNvY2tldCBwcm90b3R5cGUgdG8gYWRkIGEgY3VzdG9tIHNlbmQgbWV0aG9kXG4gKi9cbldlYlNvY2tldC5wcm90b3R5cGUuc2VuZDIgPSBXZWJTb2NrZXQucHJvdG90eXBlLnNlbmQ7IC8vIHNvIGl0IHdvbid0IGNhbGwgaXRzZWxmIGVhY2ggdGltZVxuV2ViU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIHBhcmFtID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgcGFyYW1bX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGlmICghdGhpcy5tb2QpIHtcbiAgICAgICAgdGhpcy5tb2QgPSBuZXcgV1MoKTtcbiAgICAgICAgdGhpcy5tb2Qud3MgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgICAgIF90aGlzLm1vZC5oYW5kbGVQYWNrZXRzKG1zZy5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEFOVEkgUFJPRkFOSVRZIEZJTFRFUjpcbiAgICBpZiAodGhpcy5tb2QuZGVjb2RlKHBhY2tldClbMF0gPT0gXCI2XCIgJiYgYmFkV29yZHMuc29tZShmdW5jdGlvbiAod29yZCkgeyByZXR1cm4gX3RoaXMubW9kLmRlY29kZShwYWNrZXQpWzFdWzBdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMod29yZCk7IH0pKSB7XG4gICAgICAgIHZhciBtc2cgPSB0aGlzLm1vZC5kZWNvZGUocGFja2V0KVsxXVswXTtcbiAgICAgICAgdGhpcy5zZW5kMih0aGlzLm1vZC5lbmNvZGUoW1wiNlwiLCBbbXNnLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbXNnLnNsaWNlKDEpXV0pKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2VuZDIocGFja2V0KTtcbiAgICB9XG59O1xuLyoqXG4gKiBUaGUgR2FtZSBjbGFzcywgd2hpY2ggZXh0ZW5kcyBXUyBhbmQgYWRkcyBnYW1lLXNwZWNpZmljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHNcbiAqL1xudmFyIEdhbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEdhbWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR2FtZSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmVuZW1pZXMgPSBbXTtcbiAgICAgICAgX3RoaXMudGVhbW1hdGVzID0gW107XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBHYW1lIGNsYXNzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7R2FtZX0gVGhlIHNpbmdsZXRvbiBpbnN0YW5jZVxuICAgICAqL1xuICAgIEdhbWUuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghR2FtZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgR2FtZS5pbnN0YW5jZSA9IG5ldyBHYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEdhbWUuaW5zdGFuY2U7XG4gICAgfTtcbiAgICByZXR1cm4gR2FtZTtcbn0oV1MpKTtcbmV4cG9ydCB7IEdhbWUgfTtcbnZhciBNb2QgPSBHYW1lLmdldEluc3RhbmNlKCk7XG5hbGVydChcIk1vb01vbyBUUyBMb2FkZWRcIik7XG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZU5hbWVcIikuaW5uZXJIVE1MID0gXCJcXG48aW1nIHNyYz1cXFwiaHR0cHM6Ly9jZG4uZ2xpdGNoLmdsb2JhbC8xZDFkYWZhOS1iYTVhLTQ3ZTctYTRlNy1iY2JmMDg1MTU4M2QvJTVCcmVtb3ZhbC5haSU1RF9mNWIwN2JmYi1kMjUwLTRhOGYtODcxNC0yYjVmNGU1YWYzZDItYmFubmVyLnBuZz92PTE3MjAwOTMzMzgyMDFcXFwiPlxcblwiO1xuICAgIC8vIEdBTUUgT1ZFUkxBWTpcbiAgICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5zdHlsZSA9IFwiXFxucG9zaXRpb246IGFic29sdXRlO1xcbnRvcDogMDtcXG5sZWZ0OiAwO1xcbmJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDE4NSwgMC4xNSk7XFxud2lkdGg6IDEwMCU7XFxuaGVpZ2h0OiAxMDAlO1xcbnBvaW50ZXItZXZlbnRzOiBub25lO1xcblwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgLy8gVkVSSUZJQ0FUSU9OIFBST01QVDpcbiAgICB2YXIgVmVyaWZpY2F0aW9uUHJvbXB0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBWZXJpZmljYXRpb25Qcm9tcHQoKSB7XG4gICAgICAgIH1cbiAgICAgICAgVmVyaWZpY2F0aW9uUHJvbXB0LnByb3RvdHlwZS5wcmVwYXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5ibHVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMuYmx1ci5zdHlsZS5jc3NUZXh0ID0gXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDQwLCAwLjMpO1xcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xcbiAgICAgIHotaW5kZXg6IDg4ODc7XFxuICAgIFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJsdXIpO1xuICAgICAgICAgICAgdGhpcy5tYWluSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlci5zdHlsZS5jc3NUZXh0ID0gXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIHdpZHRoOiAzNSU7XFxuICAgICAgaGVpZ2h0OiAyMCU7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxODUsIDE4NSwgMTg1LCAwLjk1KTtcXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgICBib3JkZXI6IDZweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgei1pbmRleDogODg4ODtcXG4gICAgXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubWFpbkhvbGRlcik7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRoaXMudGl0bGUuaW5uZXJIVE1MID0gXCJBdXRoZW50aWNhdGlvbi5cIjtcbiAgICAgICAgICAgIHRoaXMudGl0bGUuc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMzUlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgIGNvbG9yOiAjMDAwO1xcbiAgICAgIGZvbnQ6IDMycHggQXJpYWw7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIFwiO1xuICAgICAgICAgICAgdGhpcy5tYWluSG9sZGVyLmFwcGVuZENoaWxkKHRoaXMudGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIFRva2VuIEhlcmUuLi5cIjtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudHlwZSA9IFwicGFzc3dvcmRcIjtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3R5bGUuY3NzVGV4dCA9IFwiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzNSwgMTM1LCAxMzUsIDAuMyk7XFxuICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICBib3R0b206IDUlO1xcbiAgICAgIGxlZnQ6IDMlO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICBcIjtcbiAgICAgICAgICAgIHRoaXMubWFpbkhvbGRlci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGhpcy5jaGVjay5zdHlsZS5jc3NUZXh0ID0gXCJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiA1JTtcXG4gICAgICByaWdodDogMyU7XFxuICAgICAgd2lkdGg6IDkwcHg7XFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDcsIDExNywgMTkzLCAwLjIpO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250OiAyMHB4IEFyaWFsO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFwiO1xuICAgICAgICAgICAgdGhpcy5jaGVjay5pbm5lckhUTUwgPSBcIlZlcmlmeVwiO1xuICAgICAgICAgICAgdGhpcy5tYWluSG9sZGVyLmFwcGVuZENoaWxkKHRoaXMuY2hlY2spO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gVmVyaWZpY2F0aW9uUHJvbXB0O1xuICAgIH0oKSk7XG4gICAgdmFyIHZlcmlmeSA9IG5ldyBWZXJpZmljYXRpb25Qcm9tcHQoKTtcbiAgICB2ZXJpZnkucHJlcGFyZSgpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
