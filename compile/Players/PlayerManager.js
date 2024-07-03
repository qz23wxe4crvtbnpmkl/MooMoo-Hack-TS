/**
 * Imports
 */
import { findPlayerBySid } from "../UTILS/FindPlayerBySID"; // Import function to find a player by their session ID
import { updatePlayer } from "./updatePlayer"; // Import function to update a player's information
/**
 * Player Manager class
 *
 * This class manages a collection of players and provides methods to add, remove, and update players.
 *
 * @memberOf module:Players
 */
var Players = /** @class */ (function () {
    function Players() {
    }
    /**
     * Gets the singleton instance of the Players class
     *
     * @returns {Players} The singleton instance of the Players class
     * @memberOf Players
     * @example const players = Players.getInstance();
     */
    Players.getInstance = function () {
        if (!Players.instance) {
            Players.instance = new Players();
        }
        return Players.instance;
    };
    /**
     * Adds a player to the collection
     *
     * @param {any} Player The player to add
     * @memberOf Players
     * @example players.addPlayer(new Player('John Doe', 123));
     */
    Players.prototype.addPlayer = function (Player) {
        this.players.push(Player);
    };
    /**
     * Removes a player from the collection
     *
     * @param {any} Player The player to remove
     * @memberOf Players
     * @example players.removePlayer(player);
     */
    Players.prototype.removePlayer = function (Player) {
        var index = this.players.indexOf(this.players.find(function (player) { return player.sid === Player.sid; }), 0);
        delete this.players[index];
    };
    /**
     * Updates the players in the collection based on new data
     *
     * @param {any[]} data The new data to update the players with
     * @memberOf Players
     * @example players.updatePlayers(tmpPlayer);
     */
    Players.prototype.updatePlayers = function (data) {
        // Unrender all players and rerender players in range
        for (var i = 0; i < this.players.length; ++i) {
            var tmpPlayer = this.players[i];
            tmpPlayer.visible = false;
        }
        for (var i = 0; i < data.length; i += 13) {
            var tmpPlayer = findPlayerBySid(data[0]);
            if (tmpPlayer) {
                updatePlayer(tmpPlayer, data, i);
            }
        }
    };
    return Players;
}());
export { Players };
