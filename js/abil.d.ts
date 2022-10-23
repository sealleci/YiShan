import { AbstractAbility } from './abs.js';
declare class ThornAbility extends AbstractAbility {
    constructor();
    prepare(...args: any[]): void;
    exert(): void;
    report(): any;
}
export { ThornAbility };
