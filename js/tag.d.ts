import { PlantTagCategory } from './enum.js';
declare class PlantTagNode {
    private readonly _tier_name_key;
    private _subtag;
    constructor(tier_name_key: string, subtag?: PlantTagNode | null);
    get tier_name_key(): string;
    get subtag(): PlantTagNode | null;
    get name_keys(): string[];
    push(tier_name_key: string): void;
    toString(): string;
}
declare class PlantTagRoot extends PlantTagNode {
    readonly category: keyof typeof PlantTagCategory;
    constructor(category: keyof typeof PlantTagCategory, tier_name_key: string);
    attach(tier_name_key: string): this;
    isEqualTo(tag_root: PlantTagRoot): boolean;
    isDeriviedFrom(tag_root: PlantTagRoot): boolean;
    toString(): string;
    static create(category: keyof typeof PlantTagCategory, name_keys: readonly [string, ...string[]]): PlantTagRoot;
}
export { PlantTagRoot as PlantTag };
