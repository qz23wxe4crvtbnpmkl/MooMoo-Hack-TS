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
   * @param {any} Player The player to add
   * @memberOf Players
   * @example players.addPlayer(new Player('John Doe', 123));
   */
  public addPlayer(Player) {
    this.players.push(Player);
  }

  /**
   * Removes a player from the collection
   * 
   * @param {any} Player The player to remove
   * @memberOf Players
   * @example players.removePlayer(player);
   */
  public removePlayer(Player) {
    const index: number = this.players.indexOf(this.players.find((player) => player.sid === Player.sid), 0);
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