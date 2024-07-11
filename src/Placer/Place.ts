import { Players } from "../Players/PlayerManager";
import { WS } from "../Game";

import { Packets } from "../UTILS/Packets";

var ws = new WS;

export class Placer {
    static placementsThisTick: number = 0;

    place(objType: number, dir: number) {
        var weaponIndx = Players.myPlayer.weaponIndex;
        Packets.Equip(objType, false);
        ws.send("d", 1, dir, 1);
        Packets.Equip(weaponIndx, true);
    }
}