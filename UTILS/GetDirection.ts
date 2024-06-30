/**
 * Imports the atan2 function from the Math module
 */
import { atan2 } from "../Math.ts";

/**
 * Calculates the direction from obj1 to obj2
 * 
 * @param {any} obj1 The source object
 * @param {any} obj2 The target object
 * @returns {number} The direction in radians from obj1 to obj2
 * @memberOf module:GetDirection
 * @example getDirection(player, enemy);
 */
export function getDirection(obj1: any, obj2: any) {
  /**
   * Uses the atan2 function to calculate the direction
   * atan2(y, x) returns the angle in radians from the x-axis to the point (x, y)
   */
  return atan2(obj1.y - obj2.y, obj1.x - obj2.x);
}

//this needs to be redone to account for x2/y2