export type Lambda = (value: number) => number;

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
}

export type Config = Record<string, Variant[]>;
