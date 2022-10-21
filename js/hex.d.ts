import { FlatHexagonDirection } from './enum.js';
import { Tuple } from './type.js';
declare type Vector<N extends number> = Omit<Tuple<number, N>, keyof any[]> & {
    length: N;
    /**
     * Add two vectors.
     */
    add(vector: Vector<N>): Vector<N>;
    /**
     * Multiply the vector with given factor.
     */
    scale(factor: number): Vector<N>;
    /**
     * Return the dot product of two vectors.
     */
    dot(vector: Vector<N>): number;
    /**
     * Return the cross product of two vectors with three dimensions.
     */
    cross(vector: Vector<3>): Vector<3>;
    /**
     * Return the norm of the vector.
     */
    getNorm(): number;
    /**
     * Normalize the vector.
     */
    normalize(): Vector<N>;
    /**
     * Return the mapping ID for HTML element.
     *
     * Format of ID:
     * ``` js
     * /v(\d+_)*\d+/
     * ```
     */
    get id(): string;
    /**
     * Determine whether this is equal to the given vector.
     */
    isEqualTo(vector: Vector<N>): boolean;
    toString(): string;
};
interface VectorConverter {
    new <N extends number>(...initials: Tuple<number, N>): Vector<N>;
}
/**
 * Instantiate a vector with given initials.
 *
 * Usages:
 * ``` js
 * new GeneralVector(1, 2) // Vector<2>
 * ```
 */
declare const GeneralVector: VectorConverter;
/**
 * The coordinate of rectangular grid.
 */
declare type CartesianCoordinate = Vector<2>;
/**
 * The coordinate of flat hexagonal grid.
 */
declare type CubeCoordinate = Vector<3>;
declare const FLAT_HEXAGON_DIRECTION_VECTORS: Record<keyof typeof FlatHexagonDirection, CubeCoordinate>;
export { GeneralVector, CartesianCoordinate, CubeCoordinate, FLAT_HEXAGON_DIRECTION_VECTORS };
