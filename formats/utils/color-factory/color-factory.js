const {hexToHsluv, hsluvToRgb} = require('hsluv');

const hueRotationFn = (rotation) => {
  return (hue) => (360 + hue + rotation) % 360;
};

const saturationAdjustmentFn = (adjustment) => {
  return (saturation) => Math.min(Math.max(saturation + adjustment, 0), 100);
};

function tokensToColors(data) {
  return data.toJS().props.reduce(
    (accumulator, prop) => ({
      ...accumulator,
      [prop.name]: prop.originalValue,
    }),
    {},
  );
}

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
          ]).map((channel) => Math.round(channel * 255));

          return {
            ...accumulator,
            [name]: `rgba(${red}, ${green}, ${blue}, ${alpha})`,
          };
        }, {}),
      };
    }),
  );
};

module.exports = {
  colorFactory,
  tokensToColors,
  hueRotationFn,
  saturationAdjustmentFn,
};
