import { Projectiles } from "../UTILS/Projectiles";
import { projectileManager } from "./ProjectileManager";
export class Projectile {
  public sid: number;
  public x: number;
  public y: number;
  public dir: number;
  public range: number;
  public speed: number;
  public index: number;
  public owner: any;
  public ignoreObjects: boolean;
  public layer: number;
  public data: any;
  public returnNextTickPosition: any;
  public distancePerTick: number;

  constructor(
    x: number,
    y: number,
    dir: number,
    range: number,
    speed: number,
    index: number,
    owner: any,
    ignoreObjects: boolean,
    layer: number,
  ) {
    this.data = Projectiles[index];

    this.x = x;
    this.y = y;
    this.dir = dir;
    this.range = range;
    this.speed = speed;
    this.index = index;
    this.owner = owner;
    this.ignoreObjects = ignoreObjects;

    this.sid = projectileManager.projectileCount;
    this.layer = layer || this.data.layer;

    this.distancePerTick = Projectiles[index].distPerTick;

    this.returnNextTickPosition = (x: number, y: number) => {
      return {
        x: x + this.distancePerTick * Math.sin(this.dir),
        y: y + this.distancePerTick * Math.cos(this.dir),
      };
    };
  }
}
