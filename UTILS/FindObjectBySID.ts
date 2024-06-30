import { ObjectManager } from "../Buildings/BuildingManager.ts";

const { gameObjects } = ObjectManager.getInstance();


export function findObjectBySid(sid: number) {
    var Object = gameObjects.find((object) => object.sid === sid);
    return Object;
}

// module.exports = { findObjectBySid };