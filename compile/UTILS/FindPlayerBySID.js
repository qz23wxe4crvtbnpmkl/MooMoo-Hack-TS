"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPlayerBySid = findPlayerBySid;
/**
 * Imports the Players class
 */
var PlayerManager_1 = require("../Players/PlayerManager");
/**
 * Gets the players array from the Players instance
 */
var players = PlayerManager_1.Players.getInstance().players;
/**
 * Finds a player by their SID
 *
 * @param {number} sid The SID of the player to find
 * @returns {any} The player with the matching SID, or undefined if not found
 * @memberOf module:FindPlayerBySID
 * @example findPlayerBySid(123);
 */
function findPlayerBySid(sid) {
    /**
     * Uses the find method to search the players array for a player with a matching SID
     */
    return players.find(function (player) { return player.sid === sid; });
}
