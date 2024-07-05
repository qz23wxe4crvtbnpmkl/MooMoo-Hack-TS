export class Projectile {
  public projectileCount: number = 0;
  public projectiles: any[] = [];

  public addProjectile() {}

  public removeProjectile() {}

  public retrieveDangerousProjectiles() {
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

    this.projectiles.map((projectile) => projectile.speed / (1e3 / 9));

    this.projectiles.forEach((projectile) => {});
  }
}
