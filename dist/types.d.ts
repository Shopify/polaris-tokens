export declare type Lambda = (value: number) => number;
interface HslaSetting {
    hue?: number | Lambda;
    saturation?: number | Lambda;
    lightness?: number | Lambda;
    alpha?: number;
}
export interface Variant {
    name: string;
    description?: string;
    light: HslaSetting;
    dark: HslaSetting;
    meta?: {
        figmaName?: string;
        figmaDescription?: string;
    };
}
export declare type Config = Record<string, Variant[]>;
export {};
