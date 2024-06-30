import { hypot } from "../Math.ts";

export function getDistance(obj1: any, obj2: any, obj1type: number, obj2type: number) {
    return hypot(
        obj1[`x${obj1type || ""}`] - obj2[`x${obj2type || ""}`],
        obj1[`y${obj1type || ""}`] - obj2[`y${obj2type || ""}`]
    );
};