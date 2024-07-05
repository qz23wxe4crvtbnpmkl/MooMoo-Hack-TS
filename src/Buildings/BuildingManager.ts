/**
 * Imports
 */
import { Building } from "./Building"; // Import Building class
import { Items } from "../UTILS/Items"; // Import Game Items

/**
 * Building Manager class
 *
 * This class manages a collection of game objects and provides methods to add, remove, and clear them.
 *
 * @memberOf module:ObjectManager
 */
export class ObjectManager {
  /**
   * Private static instance of the ObjectManager class
   */
  private static instance: ObjectManager;

  /**
   * Array of game objects
   */
  public static Buildings: any[] = [];

  /**
   * Object of relevant game objects
   */
  public relevantBuildings: any[] = [];

  /**
   * Private constructor to prevent instantiation
   *
   * @private
   */
  private constructor() {}

  /**
   * Gets the singleton instance of the ObjectManager class
   *
   * @returns {ObjectManager} The singleton instance of the ObjectManager class
   * @memberOf ObjectManager
   * @example ObjectManager.getInstance()
   */
  public static getInstance(): ObjectManager {
    if (!ObjectManager.instance) {
      ObjectManager.instance = new ObjectManager();
    }
    return ObjectManager.instance;
  }

  /**
   * Adds a building game object to the collection
   *
   * @param {any[]} data The data to create the building game object
   * @memberOf ObjectManager
   * @example ObjectManager.getInstance().addBuilding([1234, ...]);
   */
  public static addBuilding(data: any[], index: number) {
    var tmpObj = new Building(data[0 + index], data[1 + index], data[2 + index], data[3 + index], data[4 + index],
      data[5 + index], Items[data[6 + index]], (data[7 + index] >= 0 ? {
sid: data[7 + index]
} : null), false);
console.log(data[index], data[5 + index]);
ObjectManager.Buildings.push(tmpObj);
  }

  /**
   * Removes a game object from the collection by SID
   *
   * @param {number} sid The SID of the game object to remove
   * @memberOf ObjectManager
   * @example ObjectManager.getInstance().removeGameObject(123);
   */
  public removeBuilding(sid: number) {}

  /**
   * Clears all game objects from the collection
   *
   * @memberOf ObjectManager
   * @example ObjectManager.getInstance().removeAllObjects(10);
   */
  public removeAllBuildings(sid: number) {
    ObjectManager.Buildings.forEach((tmpObj) => {
      if (tmpObj?.owner?.sid === sid) {
        this.removeBuilding(tmpObj.sid);
      }
    });
  }
}
