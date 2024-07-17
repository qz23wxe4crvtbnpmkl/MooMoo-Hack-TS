import { Players } from "../Players/PlayerManager";
import { Packets } from "../UTILS/Packets";
export default class Placer {
  public static placementsThisTick: number = 0;

  static place(objType: number, dir: number) {
    const weaponIndx = Players.myPlayer;
    Packets.Equip(objType, false);
    Packets.sendBuild(dir);
    Packets.Equip(weaponIndx, true);
  }
}