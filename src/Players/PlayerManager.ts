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
  public static players: any[] = [];

  /**
   * My player
   */
  public static myPlayer: any = {};

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
  public static addPlayer(SID: number, data: any) {
    /* Data format:

      0: {id, sid, name, x, y, something, health, something, scale?, something}
      1: true/false for yes/no is me
      */

    if (data[1]) {
      // MY PLAYER:

      Players.myPlayer = new Player(SID);
      Players.players.push(Players.myPlayer);

      // INIT:
      Players.myPlayer.init(
        data[0][0],
        data[0][2],
        data[0][3],
        data[0][4],
        data[0][5],
        data[0][6],
        data[0][7],
        data[0][8],
        data[0][9],
      );
    } else {
      var tmpObj = new Player(SID);
      Players.players.push(tmpObj);

      tmpObj.init(
        data[0][0],
        data[0][2],
        data[0][3],
        data[0][4],
        data[0][5],
        data[0][6],
        data[0][7],
        data[0][8],
        data[0][9],
      );
    }
  }

  /**
   * Removes a player from the collection
   *
   * @param {number} sid The SID for the player to remove
   * @memberOf Players
   * @example players.removePlayer(10);
   */
  public static removePlayer(sid: number) {
    const index: number = Players.players.indexOf(
      Players.players.find((player: any) => player.sid === sid),
      0,
    );

    delete Players.players[index];
  }

  /**
   * Updates the players in the collection based on new data
   *
   * @param {any[]} data The new data to update the players with
   * @memberOf Players
   * @example players.updatePlayers(tmpPlayer);
   */
  public static updatePlayers(data: any) {
    // Unrender all players and rerender players in range

    console.log(data);

    for (let i = 0; i < this.players.length; ++i) {
      const tmpPlayer: any = this.players[i];
      tmpPlayer.visible = false;
      console.log(tmpPlayer);
    }

    for (let i = 0; i < data.length; i += 13) {
      const tmpPlayer: any = findPlayerBySid(data[0]);
      console.log(tmpPlayer);

      if (tmpPlayer) {
        updatePlayer(tmpPlayer, data, i);
      }
    }
  }
}
