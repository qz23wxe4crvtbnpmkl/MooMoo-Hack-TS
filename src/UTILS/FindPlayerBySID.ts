/**
 * Imports the Players class
 */
import { Players } from "../Players/PlayerManager";

/**
 * Finds a player by their SID
 *
 * @param {number} sid The SID of the player to find
 * @returns {any} The player with the matching SID, or undefined if not found
 * @memberOf module:FindPlayerBySID
 * @example findPlayerBySid(123);
 */
export function findPlayerBySid(sid: number): any {
  /**
   * Uses the find method to search the players array for a player with a matching SID
   */

  console.log(Players, Players.players[0]);
  return Players.players[0].find((player: any) => player.sid === sid);
}
