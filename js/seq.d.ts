declare abstract class AbstractQueue<T> {
    protected readonly _data: T[];
    constructor();
    get length(): number;
    push(item: T): void;
    pop(): T | undefined;
    unshift(item: T): void;
    shift(): T | undefined;
    abstract isIncluding(...args: any[]): boolean;
    abstract find(...args: any[]): T | undefined;
    abstract remove(...args: any[]): T | undefined;
    abstract insert(item: T): void;
    abstract sort(): void;
}
export { AbstractQueue };
