"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Building = void 0;
/* Building class */
var Building = /** @class */ (function () {
    function Building(sid) {
        this.sid = sid;
    }
    Building.prototype.init = function (sid, x, y, dir, scale, type, owner, data, isFake) {
        data = data || {}; //safeholder incase its fucked
        this.isAlive = true;
        this.sid = sid;
        this.id = data.id;
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.scale = scale;
        this.type = type;
        this.group = data.group;
        this.owner = owner;
        this.isFake = isFake;
        this.wiggle = {
            x: 0,
            y: 0
        };
        this.isItem = (data.id !== null);
        this.objectType = data.trap || data.dmg || data.teleport;
        this.maxHealth = data.health;
        this.buildHealth = this.maxHealth;
    };
    return Building;
}());
exports.Building = Building;
