/* Imports */
import { Building } from "../Buildings/Building.ts";

/* Building Manager class */
export class ObjectManager {
    private static instance: ObjectManager;
  
    public gameObjects: any[] = [];
    public relevantGameObjects: object = {};
  
    private constructor() {}
  
    public static getInstance(): ObjectManager {
      if (!ObjectManager.instance) {
        ObjectManager.instance = new ObjectManager();
      }
      return ObjectManager.instance;
    }
  
    public addGameObject(gameObject: any) {

      this.gameObjects.push(gameObject);
    }
  
    public removeGameObject(sid: number) {}
  
    public removeAllObjects(sid: number) {
      this.gameObjects = [];
      this.relevantGameObjects = {};
    }
  }