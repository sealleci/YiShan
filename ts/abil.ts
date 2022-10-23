// TODO: 能力

import { AbstractAbility } from './abs.js'

class ThornAbility extends AbstractAbility {
    constructor() {
        super('', 0)
    }

    public prepare(...args: any[]) {
        args
    }

    public exert() {

    }

    public report(): any {
        return
    }
}

export { ThornAbility }