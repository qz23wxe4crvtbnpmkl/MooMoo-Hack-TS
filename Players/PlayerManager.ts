/* Imports */
import { findPlayerBySid } from "../UTILS/FindPlayerBySID";
import { updatePlayer } from "./updatePlayer"

/* Player Manager class */
export class Players {
    private static instance: Players;
    public players: any[];

    public static getInstance(): Players {
        if (!Players.instance) {
          Players.instance = new Players();
        }
        return Players.instance;
    }

    public addPlayer(Player) {
      this.players.push(Player);
    }

    public removePlayer(Player) {
      var index: number = this.players.indexOf(this.players.find((player) => player.sid === Player.sid), 0);
      delete this.players[index];
    }

    public updatePlayers(data) {
      for(let i = 0; i < data.length; i += 13) {
        var tmpPlayer: any = findPlayerBySid(data[0]);

        if(tmpPlayer) {
          updatePlayer(tmpPlayer);
        }
      }
    }
}