"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectManager = void 0;
/**
 * Building Manager class
 *
 * This class manages a collection of game objects and provides methods to add, remove, and clear them.
 *
 * @memberOf module:ObjectManager
 */
var ObjectManager = /** @class */ (function () {
    /**
     * Private constructor to prevent instantiation
     *
     * @private
     */
    function ObjectManager() {
        /**
         * Array of game objects
         */
        this.gameObjects = [];
        /**
         * Object of relevant game objects
         */
        this.relevantGameObjects = {};
    }
    /**
     * Gets the singleton instance of the ObjectManager class
     *
     * @returns {ObjectManager} The singleton instance of the ObjectManager class
     * @memberOf ObjectManager
     * @example ObjectManager.getInstance()
     */
    ObjectManager.getInstance = function () {
        if (!ObjectManager.instance) {
            ObjectManager.instance = new ObjectManager();
        }
        return ObjectManager.instance;
    };
    /**
     * Adds a game object to the collection
     *
     * @param {any} gameObject The game object to add
     * @memberOf ObjectManager
     * @example ObjectManager.getInstance().addGameObject(new Building(1234'));
     */
    ObjectManager.prototype.addGameObject = function (gameObject) {
        this.gameObjects.push(gameObject);
    };
    /**
     * Removes a game object from the collection by SID
     *
     * @param {number} sid The SID of the game object to remove
     * @memberOf ObjectManager
     * @example ObjectManager.getInstance().removeGameObject(123);
     */
    ObjectManager.prototype.removeGameObject = function (sid) { };
    /**
     * Clears all game objects from the collection
     *
     * @memberOf ObjectManager
     * @example ObjectManager.getInstance().removeAllObjects(10);
     */
    ObjectManager.prototype.removeAllObjects = function (sid) {
        this.gameObjects = [];
        this.relevantGameObjects = {};
    };
    return ObjectManager;
}());
exports.ObjectManager = ObjectManager;
