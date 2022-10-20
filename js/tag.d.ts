import { PlantTagCategory } from './enum.js';
declare class PlantTagNode {
    protected readonly tier_name_key: string;
    protected _subtag: PlantTagNode | null;
    constructor(tier_name_key: string, subtag?: PlantTagNode | null);
    get subtag(): PlantTagNode | null;
    set subtag(tag: PlantTagNode | null);
    get name_keys(): string[];
    toString(): string;
}
declare class PlantTagRoot extends PlantTagNode {
    readonly category: keyof typeof PlantTagCategory;
    constructor(tier_name_key: string, category: keyof typeof PlantTagCategory, subtag?: PlantTagNode | null);
    attach(sub_tier_name_key: string): this;
    isEqualTo(tag_root: PlantTagRoot): boolean;
    toString(): string;
}
export { PlantTagRoot as PlantTag };
