"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistance = getDistance;
/**
 * Imports the hypot function from the Math module
 */
var Math_1 = require("../Math");
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
function getDistance(obj1, obj2, obj1type, obj2type) {
    /**
     * Uses the hypot function to calculate the distance
     * hypot(a, b) returns the square root of a^2 + b^2
     *
     * The x and y coordinates are dynamically accessed using bracket notation
     * The type parameters are used to append a suffix to the property names (e.g. "x1" or "y2")
     */
    return (0, Math_1.hypot)(obj1["x".concat(obj1type || "")] - obj2["x".concat(obj2type || "")], obj1["y".concat(obj1type || "")] - obj2["y".concat(obj2type || "")]);
}
