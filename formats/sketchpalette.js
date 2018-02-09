/* eslint-disable id-length */
const tinycolor2 = require('tinycolor2');
const {sortBy, groupBy} = require('lodash');
const {getPaletteFromFriendlyName} = require('./utils/color');

function convertToSketchPaletteColor(input) {
  const {r, g, b, a} = tinycolor2(input).toRgb();

  return {
    red: r / 255,
    green: g / 255,
    blue: b / 255,
    alpha: a,
  };
}

const colorFiller = {
  type: 'color',
  category: 'background-color',
  name: 'white',
  value: 'rgb(255, 255, 255)',
  originalValue: '#ffffff',
  meta: {},
};

const groupColorsByPalette = (props) =>
  Object.values(
    groupBy(props, (prop) =>
      getPaletteFromFriendlyName(prop.meta.friendlyName),
    ),
  );

const orderPalettesByHue = (palettes) =>
  sortBy(
    palettes.map((palette) => {
      palette.hue = tinycolor2(palette[5].value).toHsl().h * -1;
      return palette;
    }),
    ['hue'],
  ).map((palette) => {
    delete palette.hue;
    return palette;
  });

const removeBasicColors = (props) =>
  props.filter(
    ({value}) => !['black', 'white'].includes(tinycolor2(value).toName()),
  );

const convertColorArray = (result) => {
  const {props} = result.toJS();
  const propsWithoutBaseColors = removeBasicColors(props);
  return (
    orderPalettesByHue(
      groupColorsByPalette(propsWithoutBaseColors)
        // Filling imaginary 8-color rows with white colors at the end
        // This allows us to have a nicely laid out Sketch palette (1 palette = 1 row)
        .map((palette) => {
          const originalPaletteLength = palette.length;
          // Manually set the palette length to 8,
          // allowing fill() to fill other colors
          palette.length = 8;
          const filledPalette = palette.fill(
            colorFiller,
            originalPaletteLength,
            8,
          );
          return filledPalette;
        }),
    )
      // Concatenate palette arrays into one
      .reduce(
        (previousValue, currentValue) => currentValue.concat(previousValue),
        [],
      )
      // Convert each color token into a Sketch-friendly color format
      .map((prop) => convertToSketchPaletteColor(prop.value))
  );
};

module.exports = (result) =>
  JSON.stringify({
    compatibleVersion: '2.0',
    pluginVersion: '2.0',
    colors: convertColorArray(result),
    gradients: [],
    images: [],
  });
