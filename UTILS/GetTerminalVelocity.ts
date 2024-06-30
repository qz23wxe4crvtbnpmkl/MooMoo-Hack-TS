import { getDistance } from "../UTILS/GetDistance";

/* We can support all entities eventually, but not a necessity atm. */
export function getTerminalVel(player: any) {
    return getDistance(player, {x: player.lastPos.x, y: player.lastPos.y}, 2, 0);
}