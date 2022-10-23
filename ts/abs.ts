import { DamageType } from './enum.js'
import { isCommon, getUUID } from './util.js'
import { AbstractQueue } from './seq.js'

abstract class AbstractAbility {
    protected _id: string
    protected _priority: number
    constructor(id: string, priority: number) {
        this._id = id
        this._priority = priority
    }

    public get id(): string {
        return this._id
    }

    public get priority(): number {
        return this._priority
    }

    public toString(): string {
        return `ability(${this._id})`
    }

    public abstract prepare(...args: any[]): void
    public abstract exert(): void
    public abstract report(): any
}

class AbilityQueue extends AbstractQueue<AbstractAbility> {
    private _count: number
    private _records: { [index: string]: number }
    constructor() {
        super()
        this._count = 0
        this._records = {}
    }

    public isIncluding(ability_id: string, owner_id: string): boolean {
        ability_id
        owner_id
        return true
    }

    public find(ability_id: string, owner_id: string): AbstractAbility | undefined {
        ability_id
        owner_id
        return undefined
    }

    public remove(ability_id: string, owner_id: string): AbstractAbility | undefined {
        ability_id
        owner_id
        return undefined
    }

    public insert(item: AbstractAbility): void {
        this._records[item.toString()] = this._count
        this._count += 1
    }

    public sort(): void {

    }
}

abstract class AbstractEntity {
    private _uuid: string
    protected _health: number
    protected _attack: number
    protected _defense: number
    protected _abilities: AbilityQueue

    constructor(health: number, attack: number, defense: number) {
        this._uuid = getUUID()
        this._health = health
        this._attack = attack
        this._defense = defense
        this._abilities = new AbilityQueue()
        this.constructor.name
    }

    public get id(): string {
        return this._uuid
    }

    public get heath(): number {
        return this._health
    }

    public get attack(): number {
        return this._attack
    }

    public get defense(): number {
        return this._defense
    }

    public updateHealth(increment: number) {
        this._health += increment
        if (this._health < 0 || !isCommon(this._health)) {
            this._health = 0
        }
    }

    public updateAttack(increment: number) {
        this._attack += increment
        if (this._attack < 0 || !isCommon(this._attack)) {
            this._attack = 0
        }
    }

    public updateDefense(increment: number) {
        this._defense += increment
        if (this._defense < 0 || !isCommon(this._defense)) {
            this._defense = 0
        }
    }

    public isDefeated(): boolean {
        return this._health <= 0
    }

    public isEqualTo(entity: AbstractEntity): boolean {
        return this.id === entity.id
    }
}

abstract class AbstractDamage {
    protected _type: DamageType
    protected _value: number
    protected _target: AbstractEntity[]
    protected _origin: AbstractEntity | null
    constructor(type: DamageType, value: number, target: AbstractEntity[], origin: AbstractEntity | null = null) {
        this._type = type
        this._value = value
        this._target = target
        this._origin = origin
    }
}

export { AbstractAbility, AbstractEntity, AbstractDamage }