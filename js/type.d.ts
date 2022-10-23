declare type TupleOf<T, N extends number, R extends readonly unknown[]> = R['length'] extends N ? R : TupleOf<T, N, readonly [T, ...R]>;
declare type Tuple<T, N extends number> = N extends N ? number extends N ? T[] : TupleOf<T, N, []> & {
    length: N;
} : never;
declare type NestedArray<T> = Array<NestedArray<T> | T>;
declare type Dictionary<K extends string | number | symbol = string, V = string> = {
    [key in K]?: V;
};
declare type L10nRawData = {
    "language": string;
    "fields": Dictionary;
};
declare type ImageRequest = {
    [index: string]: string;
};
declare type ImageResponse = {
    [index: string]: HTMLImageElement;
};
export { Tuple, NestedArray, Dictionary };
export { L10nRawData, ImageRequest, ImageResponse };
