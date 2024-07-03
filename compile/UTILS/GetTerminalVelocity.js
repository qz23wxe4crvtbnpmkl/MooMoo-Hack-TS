"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTerminalVel = getTerminalVel;
/**
 * Imports the getDistance function from the UTILS/GetDistance module
 */
var GetDistance_1 = require("../UTILS/GetDistance");
/**
 * Calculates the terminal velocity of a player
 *
 * @param {any} player The player object
 * @returns {number} The terminal velocity of the player
 * @memberOf module:GetTerminalVelocity
 * @example getTerminalVel(enemy);
 */
function getTerminalVel(player) {
    /**
     * Calls the getDistance function to calculate the distance between the player's current position and their last position
     * The type parameters 2 and 0 are passed to getDistance to specify the types of the player and lastPos objects
     */
    return (0, GetDistance_1.getDistance)(player, { x: player.lastPos.x, y: player.lastPos.y }, 2, 0);
}
