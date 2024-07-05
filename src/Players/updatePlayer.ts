export function updatePlayer(player: any, data: any[], index: number) {
  player.t1 = player.t2 === void 0 ? Date.now() : player.t2;
  player.t2 = Date.now();
  player.lasPos = {
    x: player.x2,
    y: player.y2,
  };
  player.x2 = data[index + 1];
  player.y2 = data[index + 2];
  player.d1 = player.d2 === void 0 ? data[index + 3] : player.d2;
  player.delta = 0;
  player.weaponIndex = data[index + 5];
  player.weaponIndex < 9 && (player.weapons[0] = player.weaponIndex);
  player.weaponIndex >= 9 && (player.weapons[1] = player.weaponIndex);
  player.weaponVariant = data[index + 6];
  player.team = data[index + 7];
  player.lastSkinIndex = player.skinIndex;
  player.skinIndex = data[index + 9];
  player.lastTailIndex = player.tailIndex;
  player.tailIndex = data[index + 10];
  player.visible = true;
}
