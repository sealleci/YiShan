type TupleOf<T, N extends number, R extends readonly unknown[]> = R['length'] extends N ? R : TupleOf<T, N, readonly [T, ...R]>
type Tuple<T, N extends number> = N extends N ? number extends N ? T[] : TupleOf<T, N, []> & { length: N } : never
type NestedArray<T> = Array<NestedArray<T> | T>
type Dictionary = { [key: string]: string }


export { Tuple, NestedArray, Dictionary }