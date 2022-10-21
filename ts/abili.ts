// TODO: 能力和能力队列

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

    public abstract configurate(...args: any[]): void
    public abstract exert(): void
    public abstract report(): any
}

class AbilityQueue extends AbstractQueue<AbstractAbility> {
    constructor() {
        super()
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
        item
    }

    public sort(): void {

    }
}

export { AbstractAbility, AbilityQueue }

