import { Players } from "../Players/PlayerManager";

const { players } = Players.getInstance();

export function findPlayerbySid(sid: number) {
    return players.find((player) => player.sid === sid);
}