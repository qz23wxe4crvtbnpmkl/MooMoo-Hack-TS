/**
 * Imports the msgpack library
 */
const msgpack = require("msgpack");

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
  private ws: WebSocket | null;

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
  public send(type: string,...data: any[]): void {
    if (!this.ws) {
      throw new Error("[*] WebSocket is not initialized");
    }
    this.ws.send(this.encode([type,...data]));
  }

  /**
   * Handles incoming packets from the WebSocket connection
   * 
   * @param {any} data The incoming packet data
   */
  public handlePackets(data: any): void {
    data = new Uint8Array(data);
    const parsed = this.decode(data);
    const type: string = parsed[0];
    const packetData = parsed[1];

    if (type === "a") {
      this.send("6", "ITS WORKING");
    }
  }
}

/**
 * Monkey patches the WebSocket prototype to add a custom send method
 */
WebSocket.prototype.send = function(packet: any): void {
  const ws = this;
  if (!(ws as any).ws) {
    (ws as any).ws = new WS();
    ws.addEventListener("message", (msg) => {
      (ws as any).ws.handlePackets(msg.data);
    });
  }
  (ws as any).ws.send(packet);
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