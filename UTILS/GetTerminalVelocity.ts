/**
 * Imports the getDistance function from the UTILS/GetDistance module
 */
import { getDistance } from "../UTILS/GetDistance";

/**
 * Calculates the terminal velocity of a player
 * 
 * @param {any} player The player object
 * @returns {number} The terminal velocity of the player
 * @memberOf module:GetTerminalVelocity
 * @example getTerminalVel(enemy);
 */
export function getTerminalVel(player: any) {
  /**
   * Calls the getDistance function to calculate the distance between the player's current position and their last position
   * The type parameters 2 and 0 are passed to getDistance to specify the types of the player and lastPos objects
   */
  return getDistance(player, {x: player.lastPos.x, y: player.lastPos.y}, 2, 0);
}