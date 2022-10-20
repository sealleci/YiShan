import { FlatHexagonDirection } from './enum.js';
import { Tuple } from './type.js';
declare type Vector<N extends number> = Omit<Tuple<number, N>, keyof any[]> & {
    length: N;
    add(vector: Vector<N>): Vector<N>;
    scale(factor: number): Vector<N>;
    dot(vector: Vector<N>): number;
    cross(vector: Vector<3>): Vector<3>;
    getNorm(): number;
    normalize(): Vector<N>;
    get id(): string;
    isEqualTo(vector: Vector<N>): boolean;
    toString(): string;
};
interface VectorConverter {
    new <N extends number>(...initials: Tuple<number, N>): Vector<N>;
}
declare const GeneralVector: VectorConverter;
declare type CartesianCoordinate = Vector<2>;
declare type CubeCoordinate = Vector<3>;
declare const FLAT_HEXAGON_DIRECTION_VECTORS: Record<keyof typeof FlatHexagonDirection, CubeCoordinate>;
export { GeneralVector, CartesianCoordinate, CubeCoordinate, FLAT_HEXAGON_DIRECTION_VECTORS };
