/* Player class */
export class Player {
  private sid: number;
  public init: any;
  public isTeam: any;
  private id: string;
  private name: string;
  private team: string;
  private health: number;
  private lastHealth: number;
  private maxHealth: number;
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
  private skinColor: any;
  private scale: number;

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
    };
  }
}
