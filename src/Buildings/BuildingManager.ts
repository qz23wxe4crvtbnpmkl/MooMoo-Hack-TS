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
  public static addBuilding(data: any[]) {
    var tmpObj = new Building(data[0]);

    ObjectManager.Buildings.push(tmpObj);
    tmpObj.init(data[1], data[2], data[3], data[4], data[5], Items[data[6]]);
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
      this.Buildings.forEach((tmpObj) => {
          if(tmpObj?.owner?.sid === sid) {
            this.removeBuilding(tmpObj.sid);
          }
      })
    }
}