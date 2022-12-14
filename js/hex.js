class VectorImplementation {
    constructor(...initials) {
        this.length = initials.length;
        for (let i = 0; i < initials.length; i += 1) {
            this[i] = initials[i];
        }
    }
    add(vector) {
        let components = [];
        for (let i = 0; i < this.length; i += 1) {
            components.push(this[i] + vector[i]);
        }
        return new VectorImplementation(...components);
    }
    scale(factor) {
        let components = [];
        for (let i = 0; i < this.length; i += 1) {
            components.push(this[i] * factor);
        }
        return new VectorImplementation(...components);
    }
    dot(vector) {
        let result = 0.0;
        for (let i = 0; i < this.length; i += 1) {
            result += this[i] * vector[i];
        }
        return result;
    }
    cross(vector) {
        if (this.length !== 3 || vector.length !== 3) {
            throw new Error(`@ts.hex.VectorImplementation.cross: arg.dim(${this.length}) and this.dim(${vector.length}) are not both 3.`);
        }
        return new VectorImplementation(this[1] * vector[2] - this[2] * vector[1], this[2] * vector[0] - this[0] * vector[2], this[0] * vector[1] - this[1] * vector[0]);
    }
    getNorm() {
        let result = 0.0;
        for (let i = 0; i < this.length; i += 1) {
            result += this[i] * this[i];
        }
        return Math.sqrt(result);
    }
    normalize() {
        let components = [];
        let norm = this.getNorm();
        if (norm === 0) {
            throw new Error(`@ts.hex.VectorImplementation.normalize: this.norm(${norm}) is 0.`);
        }
        for (let i = 0; i < this.length; i += 1) {
            components.push(this[i] / norm);
        }
        return new VectorImplementation(...components);
    }
    get id() {
        let components = [];
        for (let i = 0; i < this.length; i += 1) {
            components.push(Math.floor(this[i]).toString());
        }
        return `v${components.join('_')}`;
    }
    isEqualTo(vector) {
        for (let i = 0; i < this.length; i += 1) {
            if (this[i] !== vector[i]) {
                return false;
            }
        }
        return true;
    }
    toString() {
        let components = [];
        for (let i = 0; i < this.length; i += 1) {
            components.push(Math.floor(this[i]) === this[i] ? this[i].toString() : this[i].toFixed(2).toString());
        }
        return `vec(${components.join(',')})`;
    }
}
/**
 * Instantiate a vector with given initials.
 *
 * Usages:
 * ``` js
 * new GeneralVector(1, 2) // Vector<2>
 * ```
 */
const GeneralVector = VectorImplementation;
const FLAT_HEXAGON_DIRECTION_VECTORS = {
    TOP_LEFT: new GeneralVector(-1, 0, 1),
    TOP: new GeneralVector(0, -1, 1),
    TOP_RIGHT: new GeneralVector(1, -1, 0),
    BOTTOM_RIGHT: new GeneralVector(1, 0, -1),
    BOTTOM: new GeneralVector(0, 1, -1),
    BOTTOM_LEFT: new GeneralVector(-1, 1, 0)
};
export { GeneralVector, FLAT_HEXAGON_DIRECTION_VECTORS };
//# sourceMappingURL=hex.js.map