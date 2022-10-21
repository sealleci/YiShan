import { PlantTagCategory } from './enum.js';
/**
 * The node of tag linked list.
 */
declare class PlantTagNode {
    private readonly _tier_name_key;
    private _subtag;
    constructor(tier_name_key: string, subtag?: PlantTagNode | null);
    get tier_name_key(): string;
    get subtag(): PlantTagNode | null;
    get name_keys(): string[];
    /**
     * Add a tag node after this.
     */
    push(tier_name_key: string): void;
    toString(): string;
}
/**
 * The head node of tag linked list.
 * @extends {PlantTagNode}
 */
declare class PlantTagRoot extends PlantTagNode {
    readonly category: keyof typeof PlantTagCategory;
    constructor(category: keyof typeof PlantTagCategory, tier_name_key: string);
    /**
     * Attach a tag node at tail of tag linked list. Support method chaining.
     *
     * Usage:
     * ``` js
     * tag.attach('a').attach('b')
     * ```
     */
    attach(tier_name_key: string): this;
    /**
     * Determine whether 2 tag linked lists are same.
     */
    isEqualTo(tag_root: PlantTagRoot): boolean;
    /**
     * Determine whether this tag linked list has the same prefix of given tag linked list and is longer than it.
     *
     * Usage:
     * ``` js
     * long_tag.isDeriviedFrom(short_tag)
     * ```
     */
    isDeriviedFrom(tag_root: PlantTagRoot): boolean;
    toString(): string;
    /**
     * Create a tag linked list from given name list.
     *
     * Usage:
     * ``` js
     * create(CATEGORY, ['A', 'B']) // <CATEGORY>tag_root(A) -> tag_node(B)
     * ```
     */
    static create(category: keyof typeof PlantTagCategory, name_keys: readonly [string, ...string[]]): PlantTagRoot;
}
export { PlantTagRoot as PlantTag };
