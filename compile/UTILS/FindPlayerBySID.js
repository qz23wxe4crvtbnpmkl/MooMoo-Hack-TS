/**
 * Imports the Players class
 */
import { Players } from "../Players/PlayerManager";
/**
 * Gets the players array from the Players instance
 */
var players = Players.getInstance().players;
/**
 * Finds a player by their SID
 *
 * @param {number} sid The SID of the player to find
 * @returns {any} The player with the matching SID, or undefined if not found
 * @memberOf module:FindPlayerBySID
 * @example findPlayerBySid(123);
 */
export function findPlayerBySid(sid) {
    /**
     * Uses the find method to search the players array for a player with a matching SID
     */
    return players.find(function (player) { return player.sid === sid; });
}
