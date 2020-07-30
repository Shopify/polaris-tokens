declare type Scheme = 'light' | 'dark';
interface Theme {
    [K: string]: any;
}
export declare function colorFactory(theme: Theme, scheme: Scheme, config?: Record<string, import("./types").Variant[]>): any;
export {};
