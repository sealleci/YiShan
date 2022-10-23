import { isCommon, getUUID } from './util.js';
import { AbstractQueue } from './seq.js';
class AbstractAbility {
    constructor(id, priority) {
        this._id = id;
        this._priority = priority;
    }
    get id() {
        return this._id;
    }
    get priority() {
        return this._priority;
    }
    toString() {
        return `ability(${this._id})`;
    }
}
class AbilityQueue extends AbstractQueue {
    constructor() {
        super();
        this._count = 0;
        this._records = {};
    }
    isIncluding(ability_id, owner_id) {
        ability_id;
        owner_id;
        return true;
    }
    find(ability_id, owner_id) {
        ability_id;
        owner_id;
        return undefined;
    }
    remove(ability_id, owner_id) {
        ability_id;
        owner_id;
        return undefined;
    }
    insert(item) {
        this._records[item.toString()] = this._count;
        this._count += 1;
    }
    sort() {
    }
}
class AbstractEntity {
    constructor(health, attack, defense) {
        this._uuid = getUUID();
        this._health = health;
        this._attack = attack;
        this._defense = defense;
        this._abilities = new AbilityQueue();
        this.constructor.name;
    }
    get id() {
        return this._uuid;
    }
    get heath() {
        return this._health;
    }
    get attack() {
        return this._attack;
    }
    get defense() {
        return this._defense;
    }
    updateHealth(increment) {
        this._health += increment;
        if (this._health < 0 || !isCommon(this._health)) {
            this._health = 0;
        }
    }
    updateAttack(increment) {
        this._attack += increment;
        if (this._attack < 0 || !isCommon(this._attack)) {
            this._attack = 0;
        }
    }
    updateDefense(increment) {
        this._defense += increment;
        if (this._defense < 0 || !isCommon(this._defense)) {
            this._defense = 0;
        }
    }
    isDefeated() {
        return this._health <= 0;
    }
    isEqualTo(entity) {
        return this.id === entity.id;
    }
}
class AbstractDamage {
    constructor(type, value, target, origin = null) {
        this._type = type;
        this._value = value;
        this._target = target;
        this._origin = origin;
    }
}
export { AbstractAbility, AbstractEntity, AbstractDamage };
//# sourceMappingURL=abs.js.map