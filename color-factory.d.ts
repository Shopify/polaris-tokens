type Scheme = 'light' | 'dark';
type Lambda = (value: number) => number;

interface HslaSetting {
  hue?: number | Lambda;
  saturation?: number | Lambda;
  lightness?: number | Lambda;
  alpha?: number;
}

interface Variant {
  name: string;
  description?: string;
  light: HslaSetting;
  dark: HslaSetting;
}

type Config = Record<string, Variant[]>;

export declare function colorFactory(
  theme: Partial<Record<string, string>>,
  scheme: Scheme,
  config?: Config,
): Record<string, string>;
