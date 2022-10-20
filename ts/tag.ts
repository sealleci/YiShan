// TODO: 标签和子标签，递归比较

import { PlantTagCategory } from './enum.js'

/**
 * The node of tag linked list. 
 */
class PlantTagNode {
    protected readonly tier_name_key: string
    protected _subtag: PlantTagNode | null

    constructor(tier_name_key: string, subtag: PlantTagNode | null = null) {
        this.tier_name_key = tier_name_key
        this._subtag = subtag
    }

    public get subtag(): PlantTagNode | null {
        return this._subtag
    }
    public set subtag(tag: PlantTagNode | null) {
        this._subtag = tag
    }

    public get name_keys(): string[] {
        return [this.tier_name_key].concat(this.subtag === null ? [] : this.subtag.name_keys)
    }

    public toString(): string {
        return ``
    }
}

/**
 * The head node of tag linked list. 
 */
class PlantTagRoot extends PlantTagNode {
    public readonly category: keyof typeof PlantTagCategory

    constructor(tier_name_key: string, category: keyof typeof PlantTagCategory, subtag: PlantTagNode | null = null) {
        super(tier_name_key, subtag)
        this.category = category
    }

    /**
     * Attach a subtag. Support method chaining.
     * 
     * Usage:
     * ``` js
     * tag.attach('a').attach('b')
     * ```
     */
    public attach(sub_tier_name_key: string): this {
        if (this._subtag === null) {
            this._subtag = new PlantTagNode(sub_tier_name_key)
            return this
        }

        let tag_pointer = this._subtag
        while (true) {
            if (tag_pointer.subtag === null) {
                tag_pointer.subtag = new PlantTagNode(sub_tier_name_key)
                break
            }
            tag_pointer = tag_pointer.subtag
        }

        return this
    }

    /**
     * Determine whether 2 tag linked lists are same.
     */
    public isEqualTo(tag_root: PlantTagRoot): boolean {
        return tag_root.category === this.category
    }

    public override toString(): string {
        return ``
    }
}

export { PlantTagRoot as PlantTag }