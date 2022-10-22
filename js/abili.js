// TODO: 能力和能力队列
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
}
class AbilityQueue extends AbstractQueue {
    constructor() {
        super();
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
        item;
    }
    sort() {
    }
}
export { AbstractAbility, AbilityQueue };
//# sourceMappingURL=abili.js.map