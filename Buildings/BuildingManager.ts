/**
 * Imports
 */
import { Building } from "../Buildings/Building"; // Import Building class

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
  public gameObjects: any[] = [];

  /**
   * Object of relevant game objects
   */
  public relevantGameObjects: object = {};

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
   * Adds a game object to the collection
   * 
   * @param {any} gameObject The game object to add
   * @memberOf ObjectManager
   * @example ObjectManager.getInstance().addGameObject(new Building(1234'));
   */
  public addGameObject(gameObject: any) {
    this.gameObjects.push(gameObject);
  }

  /**
   * Removes a game object from the collection by SID
   * 
   * @param {number} sid The SID of the game object to remove
   * @memberOf ObjectManager
   * @example ObjectManager.getInstance().removeGameObject(123);
   */
  public removeGameObject(sid: number) {}

  /**
   * Clears all game objects from the collection
   * 
   * @memberOf ObjectManager
   * @example ObjectManager.getInstance().removeAllObjects(10);
   */
  public removeAllObjects(sid: number) {
    this.gameObjects = [];
    this.relevantGameObjects = {};
  }
}