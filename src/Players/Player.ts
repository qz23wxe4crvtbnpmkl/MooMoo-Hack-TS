/* Player class */
export class Player {
  public sid: number;
  public init: any;
  public isTeam: any;
  public id: string;
  public name: string;
  public team: string;
  public health: number;
  public lastHealth: number;
  public maxHealth: number;
  public oldX: number;
  public oldY: number;
  public x: number;
  public y: number;
  public x2: number;
  public y2: number;
  public x3: number;
  public y3: number;
  public skinIndex: number;
  public lastSkinIndex: number;
  public tailIndex: number;
  public lastTailIndex: number;
  public skinColor: any;
  public scale: number;
  public weapons: any[];
  public weaponIndex: number;

  constructor(sid: number) {
    this.sid = sid;
    this.isTeam = (tmpObj: any) => {
      return (
        tmpObj.sid === this.sid || (tmpObj.team && tmpObj.team === this.team)
      );
    };

    // INIT:
    this.init = function (
      id: string,
      name: string,
      x: number,
      y: number,
      dir: number,
      health: number,
      maxHealth: number,
      scale: any,
      skinColor: any,
    ) {
      this.id = id;
      this.name = name;
      this.scale = scale;
      this.dir = dir;

      this.health = health;
      this.maxHealth = maxHealth;
      this.lastHealth = this.health;

      this.oldX = x;
      this.oldY = y;
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

      this.weaponIndex = 0;
      this.weapons = [0, 0];
    };
  }
}
