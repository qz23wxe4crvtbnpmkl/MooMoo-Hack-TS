/**
 * Imports the ObjectManager class
 */
import { ObjectManager } from "../Buildings/BuildingManager";
/**
 * Gets the gameObjects array from the ObjectManager instance
 */
var gameObjects = ObjectManager.getInstance().gameObjects;
/**
 * Finds an object by its SID
 *
 * @param {number} sid The SID of the object to find
 * @returns {any} The object with the matching SID, or undefined if not found
 * @memberOf module:FindObjectBySID
 * @example findObjectBySid(123);
 */
export function findObjectBySid(sid) {
    /**
     * Uses the find method to search the gameObjects array for an object with a matching SID
     */
    var Object = gameObjects.find(function (object) { return object.sid === sid; });
    return Object;
}
// module.exports = { findObjectBySid }; // This line is commented out, but it's used to export the function in a CommonJS module
