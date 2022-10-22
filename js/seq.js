class AbstractQueue {
    constructor() {
        this._data = [];
    }
    get length() {
        return this._data.length;
    }
    push(item) {
        this._data.push(item);
    }
    pop() {
        return this._data.pop();
    }
    unshift(item) {
        this._data.unshift(item);
    }
    shift() {
        return this._data.shift();
    }
}
export { AbstractQueue };
//# sourceMappingURL=seq.js.map