import { getDistance } from "../UTILS/GetDistance";
import { getDirection } from "../UTILS/GetDirection";
import { Players } from "../Players/PlayerManager";
import Placer from "./Place";

export default class AutoMill {
    static lastPos: any = {
        x: 0,
        y: 0
    };

    static place() {
        if(getDistance(Players.myPlayer, AutoMill.lastPos, 2, 0) > 100) {
            var dir: number = getDirection(Players.myPlayer, AutoMill.lastPos);
            Placer.place(3, dir - 1.25);
            Placer.place(3, dir);
            Placer.place(3, dir + 1.25);

            AutoMill.lastPos = {
                x: Players.myPlayer.x2,
                y: Players.myPlayer.y2
            }
        }
    }
}