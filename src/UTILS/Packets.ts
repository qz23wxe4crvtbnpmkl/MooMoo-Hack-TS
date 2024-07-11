import { WS } from "../Game"
var ws = new WS;

class SendHit {
    static hasHit: boolean = false;

    static sendHit(yesno: boolean) {
        if(yesno !== SendHit.hasHit) {
            SendHit.hasHit = yesno;

            ws.send("K", 1);
        }
    }
}

const Packets = {
    Equip: function (index: number, isWeapon: boolean) {
        ws.send("G", index, isWeapon);
    },
    sendMovementDir: function (dir: number) {
        ws.send("a", dir);
    },
    resetMovementDir: function () {
        ws.send("e");
    },
    sendHit: SendHit.sendHit,
    lockDir: function () {
        ws.send("K", 0);
    },
    sendChat: function (msg: string) {
        ws.send("6", msg);
    },
    sendUpgrade: function (indx: number) {
        ws.send("H", indx);
    },
    createClan: function (name: string) {
        ws.send("L", name);
    },
    acceptPlayerIntoClan: function (sid: number) {
        ws.send("b", sid);
    },
    pingServer: function () {
        ws.send("0");
    },
    sendDir: function (dir: number) {
        ws.send("D", dir);
    },
    spawnPlayer: function (name: string, moofoll: boolean, skin: any) {
        ws.send("M", {
            name: name,
            moofoll: moofoll,
            skin: skin
        })
    }
};

export { Packets };