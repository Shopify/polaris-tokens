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

function friendlyName(propName) {
  return propName
    .replace(/^color-/, '')
    .replace(/-/g, ' ')
    .replace(/(?<=^| )[a-z]/g, (letter) => letter.toUpperCase());
}

const convertColorArray = (result) => {
  // Convert each color token into a Sketch-friendly color format
  return result.toJS().props.map((prop) => ({
    name: friendlyName(prop.name),
    ...convertToSketchPaletteColor(prop.value),
  }));
};

module.exports = (result) =>
  JSON.stringify({
    compatibleVersion: '2.0',
    pluginVersion: '2.21',
    colors: convertColorArray(result),
    gradients: [],
    images: [],
  });
