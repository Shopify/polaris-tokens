import { Config } from './types';
export declare function hueRotationFn(rotation: number): (hue: number) => number;
export declare function saturationAdjustmentFn(adjustment: number): (saturation: number) => number;
export declare function mergeConfigs(base: Config, extended: Config): {};
