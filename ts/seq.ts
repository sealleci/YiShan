abstract class AbstractQueue<T> {
    protected readonly data: T[]
    constructor() {
        this.data = []
    }
}

export { AbstractQueue }