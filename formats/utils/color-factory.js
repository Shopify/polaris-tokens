/* eslint-disable id-length */
const tinycolor = require('tinycolor2');
const {hexToHsluvObj, hsluvToRgb} = require('hsluv');

const colorFactory = (colors, roleVariants, colorScheme) => {
  return Object.assign(
    {},
    ...Object.entries(colors).map(([role, hex]) => {
      const base = hexToHsluvObj(hex);
      const variants = roleVariants[role] || [];
      return {
        ...variants.reduce((accumulator, {name, ...settings}) => {
          const {
            hue = base.hue,
            saturation = base.saturation,
            lightness = base.lightness,
            alpha = 1,
          } = settings[colorScheme];

          const resolve = (value, baseToResolve) =>
            typeof value === 'number' ? value : value(baseToResolve);

          const rgbColor = hsluvToRgb([
            resolve(hue, base.hue),
            resolve(saturation, base.saturation),
            resolve(lightness, base.lightness),
          ]);

          return {
            ...accumulator,
            [name]: tinycolor({
              r: rgbColor[0],
              g: rgbColor[1],
              b: rgbColor[2],
              a: alpha,
            }),
          };
        }, {}),
      };
    }),
  );
};

module.exports = {
  colorFactory,
};
