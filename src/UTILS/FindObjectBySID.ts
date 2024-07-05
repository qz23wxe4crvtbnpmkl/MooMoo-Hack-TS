/**
 * Imports the ObjectManager class
 */
import { ObjectManager } from "../Buildings/BuildingManager";

/**
 * Finds an object by its SID
 *
 * @param {number} sid The SID of the object to find
 * @returns {any} The object with the matching SID, or undefined if not found
 * @memberOf module:FindObjectBySID
 * @example findObjectBySid(123);
 */
export function findObjectBySid(sid: number) {
  /**
   * Uses the find method to search the gameObjects array for an object with a matching SID
   */
  var Object = ObjectManager.Buildings.find(
    (object: any) => object.sid === sid,
  );
  return Object;
}

// module.exports = { findObjectBySid }; // This line is commented out, but it's used to export the function in a CommonJS module
