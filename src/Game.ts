/**
 * Imports the msgpack library
 */
//const msgpack = require("msgpack");

import { Players } from "./Players/PlayerManager";

import { badWords } from "./badWords";

import { ObjectManager } from "./Buildings/BuildingManager";

import { projectileManager } from "./Projectiles/ProjectileManager";
import { findPlayerBySid } from "./UTILS/FindPlayerBySID";

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

    //console.log(type);

    if (type === "A") {
      // SET INIT DATA;
    } else if (type === "B") {
      // DISCONNECT:

      window.location.reload();
    } else if (type === "D") {
      // ADD PLAYER:

      console.warn(packetData[0][1])
      Players.addPlayer(packetData[0][1], packetData);
    } else if (type === "E") {
      // REMOVE PLAYER:

      Players.removePlayer(packetData[0]);
    } else if (type === "a") {
      // UPDATE PLAYERS:

      Players.updatePlayers(packetData);
    } else if (type === "H") {
      // LOAD GAME OBJECT:

      for (let i = 0; i < packetData.length;) {
        ObjectManager.addBuilding(packetData, i);

        i += 8;
      }
    } else if (type === "K") {
      // GATHER ANIMATION:

      if (packetData[0][2])
        var bonk = new Audio(
          "https://cdn.glitch.global/1d1dafa9-ba5a-47e7-a4e7-bcbf0851583d/bonk.mp4",
        );
      bonk.play();
    } else if (type === "O") {
      // UPDATE HEALTH:
    } else if (type === "X") {
      // ADD PROJECTILE:

      projectileManager.addProjectile(packetData[0], packetData[1], packetData[2], packetData[3], packetData[4], packetData[5], packetData[6], packetData[7]);
    } else if (type === "Y") {
      // REMOVE PROJECTILE:

      projectileManager.removeProjectile(packetData[0]);
    } else if (type === "6") {
      // RECEIVE CHAT:

      console.log(packetData[1]);
      if(packetData[1].includes("ferris")) {
        this.send("6", "ferris is a skid");
      } else if (packetData[1].includes("pashka")) {
        this.send("6", "pashka is a skid");
      }
    }
  }
}

/**
 * Monkey patches the WebSocket prototype to add a custom send method
 */
WebSocket.prototype.send2 = WebSocket.prototype.send; // so it won't call itself each time
WebSocket.prototype.send = function (packet: any, ...param: any): void {
  if (!this.mod) {
    this.mod = new WS();

    this.mod.ws = this;

    this.addEventListener("message", (msg) => {
      this.mod.handlePackets(msg.data);
    });
  }

// ANTI PROFANITY FILTER:
const decodedPacket = this.mod.decode(packet);
if (decodedPacket[0] === "6" && badWords.some((word) => decodedPacket[1].toLowerCase().includes(word.toLowerCase()))) {
  const msg = decodedPacket[1];
  const words = msg.split(' ');
  const newWords = words.map((word) => {
    let modifiedWord = word;
    badWords.forEach((badWord) => {
      if (word.toLowerCase().includes(badWord.toLowerCase())) {
        modifiedWord = modifiedWord.replace(new RegExp(badWord, 'gi'), badWord.charAt(0).toUpperCase() + badWord.slice(1));
      }
    });
    return modifiedWord;
  });
  const newMsg = newWords.join(' ');
  this.send2(this.mod.encode(["6", [newMsg]]));
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

window.onload = function () {
  document.getElementById("gameName").innerHTML = `
<img src="https://cdn.glitch.global/1d1dafa9-ba5a-47e7-a4e7-bcbf0851583d/%5Bremoval.ai%5D_f5b07bfb-d250-4a8f-8714-2b5f4e5af3d2-banner.png?v=1720093338201" style="width: 400px; height: 250px">
`;

  // GAME OVERLAY:
  var overlay = document.createElement("div");
  overlay.style = `
position: absolute;
top: 0;
left: 0;
background: rgba(255, 255, 185, 0.15);
width: 100%;
height: 100%;
pointer-events: none;
`;
  document.body.appendChild(overlay);

  // VERIFICATION PROMPT:
  class VerificationPrompt {
    private mainHolder: HTMLElement;
    private title: HTMLElement;
    private input: HTMLInputElement;
    private check: HTMLElement;
    private blur: HTMLElement;

    constructor() {}

    public prepare(): void {
      this.blur = document.createElement("div");
      this.blur.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 40, 0.3);
      backdrop-filter: blur(6px);
      z-index: 8887;
    `;

      document.body.appendChild(this.blur);

      this.mainHolder = document.createElement("div");
      this.mainHolder.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 35%;
      height: 20%;
      background: rgba(185, 185, 185, 0.95);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      border: 6px solid lightgrey;
      z-index: 8888;
    `;

      document.body.appendChild(this.mainHolder);

      this.title = document.createElement("div");
      this.title.innerHTML = "Authentication.";
      this.title.style.cssText = `
      position: absolute;
      top: 35%;
      left: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 80px;
      color: #000;
      font: 32px Arial;
      font-weight: bold;
    `;

      this.mainHolder.appendChild(this.title);

      this.input = document.createElement("input");
      this.input.placeholder = "Enter Token Here...";
      this.input.type = "password";
      this.input.style.cssText = `
      position: absolute;
      height: 50px;
      background: rgba(135, 135, 135, 0.3);
      width: 70%;
      bottom: 5%;
      left: 3%;
      border-radius: 10px;
      border: none;
      padding-left: 8px;
      color: #fff;
    `;

      this.mainHolder.appendChild(this.input);

      this.check = document.createElement("div");
      this.check.style.cssText = `
      position: absolute;
      bottom: 5%;
      right: 3%;
      width: 90px;
      height: 50px;
      background: rgba(47, 117, 193, 0.2);
      text-align: center;
      font: 20px Arial;
      font-weight: bold;
      vertical-align: middle;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
      this.check.innerHTML = "Verify";

      this.mainHolder.appendChild(this.check);
    }
  }

  const verify = new VerificationPrompt();
  //verify.prepare();

  document.getElementById("ageBarBody").style.transition = "0.3s all";
  document.getElementById("actionBar").style.position = "relative";
};
