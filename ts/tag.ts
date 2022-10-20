// TODO: 标签和子标签，递归比较

import { PlantTagCategory } from './enum.js'

/**
 * The node of tag linked list. 
 */
class PlantTagNode {
    private readonly _tier_name_key: string
    private _subtag: PlantTagNode | null

    constructor(tier_name_key: string, subtag: PlantTagNode | null = null) {
        this._tier_name_key = tier_name_key
        this._subtag = subtag
    }

    public get tier_name_key(): string {
        return this._tier_name_key
    }

    public get subtag(): PlantTagNode | null {
        return this._subtag
    }

    public get name_keys(): string[] {
        return [this._tier_name_key].concat(this.subtag === null ? [] : this.subtag.name_keys)
    }

    /**
     * Add a tag node after this.
     */
    public push(tier_name_key: string) {
        if (this._subtag === null) {
            this._subtag = new PlantTagNode(tier_name_key)
        }
    }

    /**
     * Overwrite the subsequent linked list.
     */
    public overwrite(tag_node: PlantTagNode | null) {
        this._subtag = tag_node
    }

    public toString(): string {
        return `tag_node(${this._tier_name_key})`
    }
}

/**
 * The head node of tag linked list. 
 */
class PlantTagRoot extends PlantTagNode {
    public readonly category: keyof typeof PlantTagCategory

    constructor(category: keyof typeof PlantTagCategory, tier_name_key: string) {
        super(tier_name_key, null)
        this.category = category
    }

    /**
     * Attach a tag node at tail of tag linked list. Support method chaining.
     * 
     * Usage:
     * ``` js
     * tag.attach('a').attach('b')
     * ```
     */
    public attach(tier_name_key: string): this {
        if (this.subtag === null) {
            this.push(tier_name_key)
            return this
        }

        let tag_pointer = this.subtag
        while (true) {
            if (tag_pointer.subtag === null) {
                tag_pointer.push(tier_name_key)
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
        if (this.category !== tag_root.category ||
            this.tier_name_key !== tag_root.tier_name_key) {
            return false
        }

        let tag_pointer_1 = this.subtag
        let tag_pointer_2 = tag_root.subtag
        while (true) {
            if (tag_pointer_1 === null && tag_pointer_2 === null) {
                return true
            }

            if (tag_pointer_1 !== null &&
                tag_pointer_2 !== null &&
                tag_pointer_1.tier_name_key === tag_pointer_2.tier_name_key) {
                tag_pointer_1 = tag_pointer_1.subtag
                tag_pointer_2 = tag_pointer_2.subtag
            } else {
                break
            }
        }

        return false
    }

    public override toString(): string {
        return `tag_root(${this.tier_name_key}):${this.category}`
    }

    /**
     * Create a tag linked list from given name list.
     * 
     * Usage:
     * ``` js
     * create(category, ['A', 'B']) // tag_root(A):category -> tag_node(B)
     * ```
     */
    public static create(category: keyof typeof PlantTagCategory, name_keys: readonly [string, ...string[]]): PlantTagRoot {
        const tag_root = new PlantTagRoot(category, name_keys[0])
        for (let i = 1; i < name_keys.length; i += 1) {
            tag_root.attach(name_keys[i])
        }
        return tag_root
    }
}

export { PlantTagRoot as PlantTag }