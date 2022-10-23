import { DamageType } from './enum.js';
import { AbstractQueue } from './seq.js';
declare abstract class AbstractAbility {
    protected _id: string;
    protected _priority: number;
    constructor(id: string, priority: number);
    get id(): string;
    get priority(): number;
    toString(): string;
    abstract prepare(...args: any[]): void;
    abstract exert(): void;
    abstract report(): any;
}
declare class AbilityQueue extends AbstractQueue<AbstractAbility> {
    private _count;
    private _records;
    constructor();
    isIncluding(ability_id: string, owner_id: string): boolean;
    find(ability_id: string, owner_id: string): AbstractAbility | undefined;
    remove(ability_id: string, owner_id: string): AbstractAbility | undefined;
    insert(item: AbstractAbility): void;
    sort(): void;
}
declare abstract class AbstractEntity {
    private _uuid;
    protected _health: number;
    protected _attack: number;
    protected _defense: number;
    protected _abilities: AbilityQueue;
    constructor(health: number, attack: number, defense: number);
    get id(): string;
    get heath(): number;
    get attack(): number;
    get defense(): number;
    updateHealth(increment: number): void;
    updateAttack(increment: number): void;
    updateDefense(increment: number): void;
    isDefeated(): boolean;
    isEqualTo(entity: AbstractEntity): boolean;
}
declare abstract class AbstractDamage {
    protected _type: DamageType;
    protected _value: number;
    protected _target: AbstractEntity[];
    protected _origin: AbstractEntity | null;
    constructor(type: DamageType, value: number, target: AbstractEntity[], origin?: AbstractEntity | null);
}
export { AbstractAbility, AbstractEntity, AbstractDamage };
