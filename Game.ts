const msgpack = require("msgpack");

class Msgpack {
    public encode(data: any): Buffer {
        return msgpack.encode(data);
    }

    public decode(data: Buffer): any {
        return msgpack.decode(data);
    }
}

class WS extends Msgpack {
    private ws: WebSocket | null;

    constructor() {
        super();
        this.ws = null;
    }

    public send(type: string, ...data: any[]): void {
        if (!this.ws) {
            throw new Error("[*] WebSocket is not initialized");
        }
        this.ws.send(this.encode([type,...data]));
    }

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

export class Game extends WS {
    public player: any;
    public enemy: any;
    public teammate: any;
    public enemies: any[] = [];
    public teammates: any[] = [];

    private static instance: Game;

    public static getInstance(): Game {
        if (!Game.instance) {
          Game.instance = new Game();
        }
        return Game.instance;
    }
}