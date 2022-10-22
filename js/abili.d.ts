import { AbstractQueue } from './seq.js';
declare abstract class AbstractAbility {
    protected _id: string;
    protected _priority: number;
    constructor(id: string, priority: number);
    get id(): string;
    get priority(): number;
    abstract prepare(...args: any[]): void;
    abstract exert(): void;
    abstract report(): any;
}
declare class AbilityQueue extends AbstractQueue<AbstractAbility> {
    constructor();
    isIncluding(ability_id: string, owner_id: string): boolean;
    find(ability_id: string, owner_id: string): AbstractAbility | undefined;
    remove(ability_id: string, owner_id: string): AbstractAbility | undefined;
    insert(item: AbstractAbility): void;
    sort(): void;
}
export { AbstractAbility, AbilityQueue };
