class PlantTagNode {
    constructor(tier_name_key, subtag = null) {
        this.tier_name_key = tier_name_key;
        this._subtag = subtag;
    }
    get subtag() {
        return this._subtag;
    }
    set subtag(tag) {
        this._subtag = tag;
    }
    get name_keys() {
        return [this.tier_name_key].concat(this.subtag === null ? [] : this.subtag.name_keys);
    }
    toString() {
        return ``;
    }
}
class PlantTagRoot extends PlantTagNode {
    constructor(tier_name_key, category, subtag = null) {
        super(tier_name_key, subtag);
        this.category = category;
    }
    attach(sub_tier_name_key) {
        if (this._subtag === null) {
            this._subtag = new PlantTagNode(sub_tier_name_key);
            return this;
        }
        let tag_pointer = this._subtag;
        while (true) {
            if (tag_pointer.subtag === null) {
                tag_pointer.subtag = new PlantTagNode(sub_tier_name_key);
                break;
            }
            tag_pointer = tag_pointer.subtag;
        }
        return this;
    }
    isEqualTo(tag_root) {
        return tag_root.category === this.category;
    }
    toString() {
        return ``;
    }
}
export { PlantTagRoot as PlantTag };
//# sourceMappingURL=tag.js.map