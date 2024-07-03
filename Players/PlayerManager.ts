/**
 * Imports
 */
import { findPlayerBySid } from "../UTILS/FindPlayerBySID"; // Import function to find a player by their SID
import { updatePlayer } from "./updatePlayer"; // Import function to update a player's information
import { Player } from "./Player"; // Import player class

/**
 * Player Manager class
 * 
 * This class manages a collection of players and provides methods to add, remove, and update players.
 * 
 * @memberOf module:Players
 */
export class Players {
  /**
   * Private static instance of the Players class
   */
  private static instance: Players;

  /**
   * Array of players
   */
  public players: any[];

  /**
   * Gets the singleton instance of the Players class
   * 
   * @returns {Players} The singleton instance of the Players class
   * @memberOf Players
   * @example const players = Players.getInstance();
   */
  public static getInstance(): Players {
    if (!Players.instance) {
      Players.instance = new Players();
    }
    return Players.instance;
  }

  /**
   * Adds a player to the collection
   * 
   * @param {number} SID The SID for the player
   * @param {any[]} data The player's data
   * @memberOf Players
   * @example players.addPlayer(1, { name: "Onion", skin: "__proto__"});
   */
  public addPlayer(sid: number, ...data) {
    var tmpObj = new Player(sid);

    // INIT:
    tmpObj.init(...data);

    this.players.push(Player);
  }

  /**
   * Removes a player from the collection
   * 
   * @param {number} sid The SID for the player to remove
   * @memberOf Players
   * @example players.removePlayer(10);
   */
  public removePlayer(sid: number) {
    const index: number = this.players.indexOf(this.players.find((player) => player.sid === sid), 0);
    delete this.players[index];
  }

  /**
   * Updates the players in the collection based on new data
   * 
   * @param {any[]} data The new data to update the players with
   * @memberOf Players
   * @example players.updatePlayers(tmpPlayer);
   */
  public updatePlayers(data) {
    // Unrender all players and rerender players in range
    for (let i = 0; i < this.players.length; ++i) {
      const tmpPlayer: any = this.players[i];
      tmpPlayer.visible = false;
    }

    for (let i = 0; i < data.length; i += 13) {
      const tmpPlayer: any = findPlayerBySid(data[0]);

      if (tmpPlayer) {
        updatePlayer(tmpPlayer, data, i);
      }
    }
  }
}