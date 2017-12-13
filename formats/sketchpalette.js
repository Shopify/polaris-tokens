/* eslint-disable id-length */
const tinycolor2 = require('tinycolor2');

function convertToSketchPaletteColor(input) {
  const {r, g, b, a} = tinycolor2(input).toRgb();

  return {
    red: r / 255,
    green: g / 255,
    blue: b / 255,
    alpha: a,
  };
}

module.exports = result => {
  return JSON.stringify({
    compatibleVersion: '2.0',
    pluginVersion: '2.0',
    colors: result
      .toJS()
      .props.map(prop => convertToSketchPaletteColor(prop.value)),
    gradients: [],
    images: [],
  });
};
