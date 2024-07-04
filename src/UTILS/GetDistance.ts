/**
 * Imports the hypot function from the Math module
 */
import { hypot } from "./Math";

/**
 * Calculates the distance between two objects
 * 
 * @param {any} obj1 The first object
 * @param {any} obj2 The second object
 * @param {number} obj1type The coordinate type of obj1 (optional)
 * @param {number} obj2type The coordinate type of obj2 (optional)
 * @returns {number} The distance between obj1 and obj2
 * @memberOf module:GetDistance
 * @example getDistance(player, enemy, 2, 2);
 */
export function getDistance(obj1: any, obj2: any, obj1type: number, obj2type: number) {
  /**
   * Uses the hypot function to calculate the distance
   * hypot(a, b) returns the square root of a^2 + b^2
   * 
   * The x and y coordinates are dynamically accessed using bracket notation
   * The type parameters are used to append a suffix to the property names (e.g. "x1" or "y2")
   */
  return hypot(
    obj1[`x${obj1type || ""}`] - obj2[`x${obj2type || ""}`],
    obj1[`y${obj1type || ""}`] - obj2[`y${obj2type || ""}`]
  );
}