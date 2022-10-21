/**
 * The node of tag linked list.
 */
class PlantTagNode {
    constructor(tier_name_key, subtag = null) {
        this._tier_name_key = tier_name_key;
        this._subtag = subtag;
    }
    get tier_name_key() {
        return this._tier_name_key;
    }
    get subtag() {
        return this._subtag;
    }
    get name_keys() {
        return [this._tier_name_key].concat(this.subtag === null ? [] : this.subtag.name_keys);
    }
    /**
     * Add a tag node after this.
     */
    push(tier_name_key) {
        if (this._subtag === null) {
            this._subtag = new PlantTagNode(tier_name_key);
        }
    }
    toString() {
        return `tag_node(${this._tier_name_key})`;
    }
}
/**
 * The head node of tag linked list.
 * @extends {PlantTagNode}
 */
class PlantTagRoot extends PlantTagNode {
    constructor(category, tier_name_key) {
        super(tier_name_key, null);
        this.category = category;
    }
    /**
     * Attach a tag node at tail of tag linked list. Support method chaining.
     *
     * Usage:
     * ``` js
     * tag.attach('a').attach('b')
     * ```
     */
    attach(tier_name_key) {
        if (this.subtag === null) {
            this.push(tier_name_key);
            return this;
        }
        let tag_pointer = this.subtag;
        while (true) {
            if (tag_pointer.subtag === null) {
                tag_pointer.push(tier_name_key);
                break;
            }
            tag_pointer = tag_pointer.subtag;
        }
        return this;
    }
    /**
     * Determine whether 2 tag linked lists are same.
     */
    isEqualTo(tag_root) {
        if (this.category !== tag_root.category ||
            this.tier_name_key !== tag_root.tier_name_key) {
            return false;
        }
        let tag_pointer_1 = this.subtag;
        let tag_pointer_2 = tag_root.subtag;
        while (true) {
            if (tag_pointer_1 === null && tag_pointer_2 === null) {
                return true;
            }
            if (tag_pointer_1 !== null &&
                tag_pointer_2 !== null &&
                tag_pointer_1.tier_name_key === tag_pointer_2.tier_name_key) {
                tag_pointer_1 = tag_pointer_1.subtag;
                tag_pointer_2 = tag_pointer_2.subtag;
            }
            else {
                break;
            }
        }
        return false;
    }
    /**
     * Determine whether this tag linked list has the same prefix of given tag linked list and is longer than it.
     *
     * Usage:
     * ``` js
     * long_tag.isDeriviedFrom(short_tag)
     * ```
     */
    isDeriviedFrom(tag_root) {
        if (this.category !== tag_root.category ||
            this.tier_name_key !== tag_root.tier_name_key) {
            return false;
        }
        let tag_pointer_1 = this.subtag;
        let tag_pointer_2 = tag_root.subtag;
        while (true) {
            if (tag_pointer_1 === null && tag_pointer_2 === null ||
                tag_pointer_1 !== null && tag_pointer_2 === null) {
                return true;
            }
            if (tag_pointer_1 !== null &&
                tag_pointer_2 !== null &&
                tag_pointer_1.tier_name_key === tag_pointer_2.tier_name_key) {
                tag_pointer_1 = tag_pointer_1.subtag;
                tag_pointer_2 = tag_pointer_2.subtag;
            }
            else {
                break;
            }
        }
        return false;
    }
    toString() {
        return `${'<' + this.category + '>'}tag_root(${this.tier_name_key})`;
    }
    /**
     * Create a tag linked list from given name list.
     *
     * Usage:
     * ``` js
     * create(CATEGORY, ['A', 'B']) // <CATEGORY>tag_root(A) -> tag_node(B)
     * ```
     */
    static create(category, name_keys) {
        const tag_root = new PlantTagRoot(category, name_keys[0]);
        for (let i = 1; i < name_keys.length; i += 1) {
            tag_root.attach(name_keys[i]);
        }
        return tag_root;
    }
}
export { PlantTagRoot as PlantTag };
//# sourceMappingURL=tag.js.map