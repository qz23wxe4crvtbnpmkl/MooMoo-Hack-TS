import { Players } from "../Players/PlayerManager";

const { players } = Players.getInstance();

export function findPlayerBySid(sid: number) {
    return players.find((player) => player.sid === sid);
}