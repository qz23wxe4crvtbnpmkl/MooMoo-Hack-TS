/* Player class */
export class Player {
    private sid: number;
    public init: any;
    public isTeam: any;
    private id: string;
    private name: string;
    private health: number;
    private lastHealth: number;
    private x: number;
    private y: number;
    private x2: number;
    private y2: number;
    private x3: number;
    private y3: number;
    private skinIndex: number;
    private lastSkinIndex: number;
    private tailIndex: number;
    private lastTailIndex: number; 
    
    constructor(sid: number) {
        this.sid = sid;
        this.isTeam = (tmpObj) {
            return (tmpObj.sid === this.sid || tmpObj.team && tmpObj.team === this.team);
        }

        // INIT:
        this.init = function(id: string, name: string, x: number, y: number) {
            this.id = id;
            this.name = name;

            this.health = 100;
            this.lastHealth = this.health;

            this.x = 0;
            this.y = 0;
            this.x2 = x;
            this.y2 = y;
            this.x3 = 0;
            this.y3 = 0;

            this.skinIndex = 0;
            this.lastSkinIndex = this.skinIndex;

            this.tailIndex = 0;
            this.lastTailIndex = this.tailIndex;
        }
    }
}