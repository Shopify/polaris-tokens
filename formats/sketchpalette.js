/* eslint-disable id-length */
const tinycolor2 = require('tinycolor2');
const sortBy = require('lodash/sortBy');

function getCategory(name) {
  return name.split('-').shift();
}

function convertToSketchPaletteColor(input) {
  const {r, g, b, a} = tinycolor2(input).toRgb();

  return {
    red: r / 255,
    green: g / 255,
    blue: b / 255,
    alpha: a,
  };
}

function sortedColors(result) {
  return sortBy(
    result
      .toJS()
      .props.map(prop => {
        prop.colorCategory = getCategory(prop.name);
        return prop;
      })
      .map(prop => {
        prop.brightness = tinycolor2(prop.value).getBrightness() * -1;
        return prop;
      }),
    ['colorCategory', 'brightness'],
  );
}

module.exports = result => {
  return JSON.stringify({
    compatibleVersion: '2.0',
    pluginVersion: '2.0',
    colors: sortedColors(result).map(prop =>
      convertToSketchPaletteColor(prop.value),
    ),
    gradients: [],
    images: [],
  });
};
