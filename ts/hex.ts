import { FlatHexagonDirection } from './enum.js'
import { Tuple } from './type.js'

type Vector<N extends number> = Omit<Tuple<number, N>, keyof any[]> & {
    length: N
    /**
     * Add two vectors.
     */
    add(vector: Vector<N>): Vector<N>
    /**
     * Multiply the vector with given factor.
     */
    scale(factor: number): Vector<N>
    /**
     * Return the dot product of two vectors.
     */
    dot(vector: Vector<N>): number
    /**
     * Return the cross product of two vectors with three dimensions.
     */
    cross(vector: Vector<3>): Vector<3>
    /**
     * Return the norm of the vector.
     */
    getNorm(): number
    /**
     * Normalize the vector.
     */
    normalize(): Vector<N>
    /**
     * Return the mapping ID for HTML element.
     * 
     * Format of ID:
     * ``` js
     * /v(\d+_)*\d+/
     * ```
     */
    get id(): string
    /**
     * Determine whether this is equal to the given vector.
     */
    isEqualTo(vector: Vector<N>): boolean
    toString(): string
}

interface VectorConverter {
    new <N extends number>(...initials: Tuple<number, N>): Vector<N>
}

class VectorImplementation<N extends number>  {
    [k: number]: number
    public length: number

    constructor(...initials: readonly number[]) {
        this.length = initials.length
        for (let i = 0; i < initials.length; i += 1) {
            this[i] = initials[i]
        }
    }

    public add(vector: VectorImplementation<N>): VectorImplementation<N> {
        let components: number[] = []
        for (let i = 0; i < this.length; i += 1) {
            components.push(this[i] + vector[i])
        }
        return new VectorImplementation(...components)
    }

    public scale(factor: number): VectorImplementation<N> {
        let components: number[] = []
        for (let i = 0; i < this.length; i += 1) {
            components.push(this[i] * factor)
        }
        return new VectorImplementation(...components)
    }

    public dot(vector: VectorImplementation<N>): number {
        let result: number = 0.0
        for (let i = 0; i < this.length; i += 1) {
            result += this[i] * vector[i]
        }
        return result
    }

    public cross(vector: VectorImplementation<3>): VectorImplementation<3> {
        if (this.length !== 3 || vector.length !== 3) {
            throw new Error(`@ts.hex.VectorImplementation.cross: arg.dim(${this.length}) and this.dim(${vector.length}) are not both 3.`)
        }
        return new VectorImplementation(
            this[1] * vector[2] - this[2] * vector[1],
            this[2] * vector[0] - this[0] * vector[2],
            this[0] * vector[1] - this[1] * vector[0]
        )
    }

    public getNorm(): number {
        let result: number = 0.0
        for (let i = 0; i < this.length; i += 1) {
            result += this[i] * this[i]
        }
        return Math.sqrt(result)
    }

    public normalize(): VectorImplementation<N> {
        let components: number[] = []
        let norm = this.getNorm()
        if (norm === 0) {
            throw new Error(`@ts.hex.VectorImplementation.normalize: this.norm(${norm}) is 0.`)
        }
        for (let i = 0; i < this.length; i += 1) {
            components.push(this[i] / norm)
        }
        return new VectorImplementation(...components)
    }

    public get id(): string {
        let components: string[] = []
        for (let i = 0; i < this.length; i += 1) {
            components.push(Math.floor(this[i]).toString())
        }
        return `v${components.join('_')}`
    }

    public isEqualTo(vector: VectorImplementation<N>): boolean {
        for (let i = 0; i < this.length; i += 1) {
            if (this[i] !== vector[i]) {
                return false
            }
        }
        return true
    }

    public toString(): string {
        let components: string[] = []
        for (let i = 0; i < this.length; i += 1) {
            components.push(Math.floor(this[i]) === this[i] ? this[i].toString() : this[i].toFixed(2).toString())
        }
        return `vec(${components.join(',')})`
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
const GeneralVector = VectorImplementation as VectorConverter
/**
 * The coordinate of rectangular grid.
 */
type CartesianCoordinate = Vector<2>
/**
 * The coordinate of flat hexagonal grid.
 */
type CubeCoordinate = Vector<3>

const FLAT_HEXAGON_DIRECTION_VECTORS: Record<keyof typeof FlatHexagonDirection, CubeCoordinate> = {
    TOP_LEFT: new GeneralVector(-1, 0, 1),
    TOP: new GeneralVector(0, -1, 1),
    TOP_RIGHT: new GeneralVector(1, -1, 0),
    BOTTOM_RIGHT: new GeneralVector(1, 0, -1),
    BOTTOM: new GeneralVector(0, 1, -1),
    BOTTOM_LEFT: new GeneralVector(-1, 1, 0)
} as any

export { GeneralVector, CartesianCoordinate, CubeCoordinate, FLAT_HEXAGON_DIRECTION_VECTORS }