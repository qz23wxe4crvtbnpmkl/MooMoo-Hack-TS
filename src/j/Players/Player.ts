/* Player class */
export class Player {
    private sid: number;
    public init: any;
    public isTeam: any;
    public team: string;
    
    constructor(sid: number) {
        this.sid = sid;
        this.isTeam = (tmpObj) => {
            return (tmpObj.sid === this.sid || tmpObj.team && tmpObj.team === this.team);
        }

        // INIT:
        this.init = function(/* idk i forgot args for this ill check later */) {

        }
    }
}