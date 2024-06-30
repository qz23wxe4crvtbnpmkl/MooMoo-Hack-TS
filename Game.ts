const msgpack = require("msgpack");

class Msgpack {
    public encode(data: any) {
        return msgpack.encode(data);
    }

    public decode(data: any) {
        return msgpack.decode(data);
    }
}

class WS extends Msgpack {
    private ws: any;

    public Send(type: any) {
        var data = Array.prototype.slice.call(arguments, 1);
        this.ws.send(super.encode([type, data]));
    }

    public HandlePackets(data: any) {

    }
}

class Game extends WS {

}