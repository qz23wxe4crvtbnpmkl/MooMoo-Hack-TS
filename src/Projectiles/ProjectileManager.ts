import { getDistance } from "../UTILS/GetDistance";

export class Projectile {
  public projectileCount: number = 0;
  public static projectiles: any[] = [];

  public addProjectile() {

    this.projectileCount++;
  }

  public removeProjectile(SID: number) {
    var item = Projectile.projectiles.indexOf(Projectile.projectiles.find((proj) => proj.sid === SID), 0);

    delete Projectile.projectiles[item];
    this.projectileCount--;
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

    Projectile.projectiles.map((projectile) => projectile.speed / (1e3 / 9));

    Projectile.projectiles.forEach((projectile) => {
      if(getDistance(projectile.returnNextTickPosition, player, 0, 2) <= player.scale + projectile.scale) {
        projectiles.push(projectile);
      }
    });

    return projectiles.sort((x: number, y: number) => {
      return getDistance(player, {x: x, y: y}, 2, 0);
    })
  }
}
