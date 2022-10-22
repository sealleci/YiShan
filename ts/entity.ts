import { isCommon } from './util.js'

abstract class AbstractEntity {
    protected _health: number
    protected _attack: number
    protected _defense: number

    constructor(health: number, attack: number, defense: number) {
        this._health = health
        this._attack = attack
        this._defense = defense
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
}

export { AbstractEntity }