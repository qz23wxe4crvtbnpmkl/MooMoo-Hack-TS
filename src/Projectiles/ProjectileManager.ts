import { getDistance } from "../UTILS/GetDistance";
import { Projectile } from "./Projectile";

export class projectileManager {
  public static projectileCount: number = 0;
  public static projectiles: any[] = [];

  public static addProjectile(x: number, y: number, dir: number, range: number, speed: number, index: number, layer: number, sid: number) {
    var projectile = new Projectile(x, y, dir, range, speed, index, null, null, layer);
    projectile.sid = sid;

    console.warn(projectile);
    projectileManager.projectiles.push(projectile);
    projectileManager.projectileCount++;
  }

  public static removeProjectile(SID: number) {
    var item = projectileManager.projectiles.indexOf(
      projectileManager.projectiles.find((proj) => proj.sid === SID),
      0,
    );

    console.warn(projectileManager.projectiles[item], SID);

    delete projectileManager.projectiles[item];
    projectileManager.projectileCount--;
  }

  public static retrieveDangerousProjectiles(player: any) {
    var projectiles: any[] = [];

    /*
        ok so we are gonna filter this shit
        by distance travelable per tick
        + the direction of the projectile

        so if its going to hit the player
        we can return it in an array
        for damage potential later
        and also cool visuals yk
        */

    //the code below is very beta, and is just a placeholder to make it look like i did work today
    //in the future, map out all the projectiles speed and assign it with the projectile speeds/tick

    //Projectile.projectiles.map((projectile) => projectile.distPerTick /* (1e3 / 9)*/);

    projectileManager.projectiles.forEach((projectile) => {
      if (
        getDistance(projectile.returnNextTickPosition(projectile.x, projectile.y), player, 0, 2) <=
        player.scale
      ) {
        projectiles.push(projectile);
      }
    });

    return projectiles.sort((x: number, y: number) => {
      return getDistance(player, { x: x, y: y }, 2, 0);
    });
  }
}
