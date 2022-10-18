import { Tuple } from './type';
declare type Vector<N extends number> = Omit<Tuple<number, N>, keyof any[]> & {
    length: N;
    add(vector: Vector<N>): Vector<N>;
    scale(factor: number): Vector<N>;
    dot(vector: Vector<N>): number;
    cross(vector: Vector<N>): Vector<N>;
    getNorm(): number;
    normalize(): Vector<N>;
    getMappingId(): string;
    isEqualTo(vector: Vector<N>): boolean;
    toString(): string;
};
interface VectorConstructor {
    new <N extends number>(...initials: Tuple<number, N>): Vector<N>;
}
declare const GeneralVector: VectorConstructor;
declare type CartesianCoordinate = Vector<3>;
declare type CubeCoordinate = Vector<3>;
declare const FLAT_HEXAGON_DIRECTION_VECTORS: {
    TOP_LEFT: Vector<3>;
    TOP: Vector<3>;
    TOP_RIGHT: Vector<3>;
    BOTTOM_RIGHT: Vector<3>;
    BOTTOM: Vector<3>;
    BOTTOM_LEFT: Vector<3>;
};
export { GeneralVector, CartesianCoordinate, CubeCoordinate, FLAT_HEXAGON_DIRECTION_VECTORS };
