import {hexToHsluv, hsluvToRgb} from 'hsluv';
import {config as baseConfig} from './configs/base';
import {Lambda} from './types';

type Scheme = 'light' | 'dark';

export function colorFactory(
  theme: Partial<Record<string, string>>,
  scheme: Scheme,
  config = baseConfig,
) {
  return Object.assign(
    {},
    ...Object.entries(theme).map(([role, hex]) => {
      if (typeof hex !== 'string') {
        return null;
      }

      const base = hexToHsluv(hex);
      const variants = config[role] || [];
      return {
        ...variants.reduce((accumulator, {name, ...settings}) => {
          const {
            hue = base[0],
            saturation = base[1],
            lightness = base[2],
            alpha = 1,
          } = settings[scheme];

          const resolve = (value: number | Lambda, baseToResolve: number) => {
            return typeof value === 'number' ? value : value(baseToResolve);
          };

          const [red, green, blue] = hsluvToRgb([
            resolve(hue, base[0]),
            resolve(saturation, base[1]),
            resolve(lightness, base[2]),
          ]).map((channel) => Math.round(channel * 255));

          return {
            ...accumulator,
            [name]: `rgba(${red}, ${green}, ${blue}, ${alpha})`,
          };
        }, {}),
      };
    }),
  );
}
