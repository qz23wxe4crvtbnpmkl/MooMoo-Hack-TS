//import { findPlayerBySid } from "../FindPlayerBySID";

/* Building class */
export class Building {
  public sid: number;
  public id: string;
  public x: number;
  public y: number;
  public dir: number;
  public scale: number;
  public type: string;
  public group: any;
  public maxHealth: number;
  public buildHealth: number;
  public owner: any;
  public data: any;
  public active: boolean;
  public isAlive: boolean;
  public isFake: boolean;
  public wiggle: { x: number; y: number };
  public isItem: boolean;
  public objectType: any;
  public isTeamObject: (tmpObj: any) => boolean;

  constructor(
    sid: number,
    x: number,
    y: number,
    dir: number,
    scale: number,
    type: any,
    data: any,
    owner: any,
    isFake: boolean,
  ) {
    this.sid = sid;

    data = data || {}; // safe holder in case it's null or undefined

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
      y: 0,
    };

    this.isItem = data.id !== null;
    this.objectType = data.trap || data.dmg || data.teleport;
    this.maxHealth = data.health;
    this.buildHealth = this.maxHealth;

    this.isTeamObject = (tmpObj: any) => {
      return false;
      //return tmpObj.sid === this.owner?.sid || this.isTeam(findPlayerBySid(tmpObj));
    };
  }
}
