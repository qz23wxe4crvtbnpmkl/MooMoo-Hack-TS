/**
 * Imports the msgpack library
 */
//const msgpack = require("msgpack");

import { Players } from "./Players/PlayerManager";
const { players } = Players.getInstance();

import { Player } from "./Players/Player";

import { badWords } from "./badWords";

/**
 * A class for encoding and decoding data using MessagePack
 */
class Msgpack {
  /**
   * Encodes data using MessagePack
   * 
   * @param {any} data The data to encode
   * @returns {Buffer} The encoded data
   */
  public encode(data: any): Buffer {
    return msgpack.encode(data);
  }

  /**
   * Decodes data using MessagePack
   * 
   * @param {Buffer} data The data to decode
   * @returns {any} The decoded data
   */
  public decode(data: Buffer): any {
    return msgpack.decode(data);
  }
}

/**
 * A class for handling WebSocket connections and sending/receiving packets
 */
class WS extends Msgpack {
  /**
   * The WebSocket object
   */
  public ws: WebSocket | null;

  /**
   * Constructor
   */
  constructor() {
    super();
    this.ws = null;
  }

  /**
   * Sends a packet over the WebSocket connection
   * 
   * @param {string} type The type of packet
   * @param {...any[]} data The data to send
   */
  public send(type: string, ...data: any[]): void {
    if (!this.ws) {
      throw new Error("[*] WebSocket is not initialized");
    }

    console.log(data);
    this.ws.send(this.encode([type, data]));
  }

  /**
   * Handles incoming packets from the WebSocket connection
   * 
   * @param {any} data The incoming packet data
   */
  public handlePackets(data: any): void {
    data = new Uint8Array(data);
    const parsed: any = this.decode(data);
    const type: string = parsed[0];
    const packetData: any[] = parsed[1];

    if(type === "A") {
      // SET INIT DATA;
    } else if (type === "B") {
      // DISCONNECT:
      window.location.reload();
    } else if (type === "D") {
      // ADD PLAYER:
      
      console.log(packetData);
      if(packetData[1]) {
        // MY PLAYER:

        /* Data format:

        0: {id, sid, name, x, y, something, health, something, scale?, something}
        1: true/false for yes/no is me
        */

        players.myPlayer = new Player(packetData[0][1]);
        players.push(players.myPlayer);
      } else {
        var tmpObj = new Player(packetData[0][0]);

        players.players.push(tmpObj);
      }
    } else if (type === "E") {
      // REMOVE PLAYER:

      //Players.removePlayer()
    } else if (type === "a") {
      // UPDATE PLAYERS:
    } else if (type === "H") {
      // LOAD GAME OBJECT:
    } else if (type === "K") {
      // GATHER ANIMATION:
    } else if (type === "O") {
      // UPDATE HEALTH:
    } else if (type === "6") {
      // RECEIVE CHAT:
    }
  }
}

/**
 * Monkey patches the WebSocket prototype to add a custom send method
 */
WebSocket.prototype.send2 = WebSocket.prototype.send // so it won't call itself each time
WebSocket.prototype.send = function(packet: any, ...param: any): void {
  if (!this.mod) {
    this.mod = new WS();

    this.mod.ws = this;

    this.addEventListener("message", (msg) => {
      this.mod.handlePackets(msg.data);
    });
  }

  // ANTI PROFANITY FILTER:
  if (this.mod.decode(packet)[0] == "6" && badWords.some(word => this.mod.decode(packet)[1][0].toLowerCase().includes(word))) {
    var msg = this.mod.decode(packet)[1][0];
    this.send2(this.mod.encode(["6", msg.charAt(0).toUpperCase() + msg.slice(1)]));
  } else {
    this.send2(packet);
  }
};

/**
 * The Game class, which extends WS and adds game-specific properties and methods
 */
export class Game extends WS {
  public player: any;
  public enemy: any;
  public teammate: any;
  public enemies: any[] = [];
  public teammates: any[] = [];

  /**
   * The singleton instance of the Game class
   */
  private static instance: Game;

  /**
   * Gets the singleton instance of the Game class
   * 
   * @returns {Game} The singleton instance
   */
  public static getInstance(): Game {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  }
}

var Mod = Game.getInstance();

alert("MooMoo TS Loaded");
document.getElementById("gameName").innerHTML = `
<img src="https://cdn.glitch.global/1d1dafa9-ba5a-47e7-a4e7-bcbf0851583d/%5Bremoval.ai%5D_f5b07bfb-d250-4a8f-8714-2b5f4e5af3d2-banner.png?v=1720093338201">
`;

//dark mode overlay
var overlay = document.createElement("div");
overlay.style = `
position: absolute;
top: 0;
left: 0;
background: rgba(0, 0, 70, 0.35);
width: 100%;
height: 100%;
pointer-events: none;
`;
document.body.appendChild(overlay);