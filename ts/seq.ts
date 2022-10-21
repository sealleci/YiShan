abstract class AbstractQueue<T> {
    protected readonly _data: T[]
    constructor() {
        this._data = []
    }

    public get length(): number {
        return this._data.length
    }

    public push(item: T) {
        this._data.push(item)
    }

    public pop(): T | undefined {
        return this._data.pop()
    }

    public unshift(item: T) {
        this._data.unshift(item)
    }

    public shift(): T | undefined {
        return this._data.shift()
    }

    public abstract isIncluding(...args: any[]): boolean
    public abstract find(...args: any[]): T | undefined
    public abstract remove(...args: any[]): T | undefined
    public abstract insert(item: T): void
    public abstract sort(): void
}

export { AbstractQueue }