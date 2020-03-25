import {hexToHsluv, hsluvToRgb} from 'hsluv';

import {config as baseConfig} from './configs/base';
import {Lambda} from './types';

type Scheme = 'light' | 'dark';

// This really should have a value of "one of the variant names defined in the
// config you pass in", but my TS-fu isn't that strong at the moment.
// We can't use a value of "string" because TS 3.8 refuses to merge a known
// object shape into this interface, complaining that
// "Index signature is missing in type of [THE TYPE OF THE OBJECT YOU PASS INTO THEME]"
interface Theme {
  [K: string]: any;
}

export function colorFactory(
  theme: Theme,
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
