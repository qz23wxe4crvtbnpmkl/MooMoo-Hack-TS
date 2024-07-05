//import { findPlayerBySid  } from "../FindPlayerBySID";

/* Building class */
export class Building {
    private sid: number;
    private id: string;
    private x: number;
    private y: number;
    private dir: number;
    private scale: number;
    private type: string;
    private group: any;
    private maxHealth: number;
    private buildHealth: number;
    private owner: string;
    private data: any;
    private active: boolean;
    private isAlive: boolean;
    private isFake: boolean;
    private wiggle: any;
    private isItem: boolean;
    private objectType: any;
    public isTeamObject: any;
    public init: any;

    constructor(sid: number) {
        this.sid = sid;

    this.init = function(x: number, y: number, dir: number, scale: number, type: string, owner: string, data: any, isFake: boolean) {
        data = data || {}; //safeholder incase its fucked
        
        this.id = data.id;
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.scale = scale;
        this.type = type;
        this.group = data.group;
        this.owner = owner;
        this.isFake = isFake;
        this.isAlive = true;
        this.active = true;

        this.wiggle = {
            x: 0,
            y: 0
        };
        
        this.isItem = (data.id !== null);
        this.objectType = data.trap || data.dmg || data.teleport;
        this.maxHealth = data.health;
        this.buildHealth = this.maxHealth;

        this.isTeamObject = (tmpObj) => {
            return false; //(tmpObj.sid === this.owner?.sid || this.isTeam(findPlayerBySid(tmpObj)))
        }
    }
}