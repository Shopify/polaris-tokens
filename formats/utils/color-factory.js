/* eslint-disable id-length */
const tinycolor = require('tinycolor2');
const {hexToHsluv, hsluvToRgb} = require('hsluv');

const colorFactory = (colors, roleVariants, colorScheme) => {
  return Object.assign(
    {},
    ...Object.entries(colors).map(([role, hex]) => {
      const base = hexToHsluv(hex);
      const variants = roleVariants[role] || [];
      return {
        ...variants.reduce((accumulator, {name, ...settings}) => {
          const {
            hue = base[0],
            saturation = base[1],
            lightness = base[2],
            alpha = 1,
          } = settings[colorScheme];

          const resolve = (value, baseToResolve) => {
            return typeof value === 'number' ? value : value(baseToResolve);
          };

          const [red, green, blue] = hsluvToRgb([
            resolve(hue, base[0]),
            resolve(saturation, base[1]),
            resolve(lightness, base[2]),
          ]);

          return {
            ...accumulator,
            [name]: tinycolor({
              r: red * 255,
              g: green * 255,
              b: blue * 255,
              a: alpha,
            }).toHex(),
          };
        }, {}),
      };
    }),
  );
};

module.exports = {
  colorFactory,
};
