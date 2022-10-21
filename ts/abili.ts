import { AbstractQueue } from './seq.js'

abstract class AbstractAbility { }

class AbilityQueue extends AbstractQueue<AbstractAbility> {
    constructor() {
        super()
    }
}

export { AbstractAbility, AbilityQueue }

