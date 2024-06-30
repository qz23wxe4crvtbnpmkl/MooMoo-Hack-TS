import { atan2 } from "../Math.ts";

export function getDirection(obj1: any, obj2: any) {
    return atan2(obj1.y - obj2.y, obj1.x - obj2.x)
};