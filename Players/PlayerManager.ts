/* Player Manager class */
export class Players {
    private static instance: Players;
    public players: any;

    public static getInstance(): Players {
        if (!Players.instance) {
          Players.instance = new Players();
        }
        return Players.instance;
    }  
}