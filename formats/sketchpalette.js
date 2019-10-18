/* eslint-disable id-length */
const tinycolor2 = require('tinycolor2');

const convertToSketchPaletteColor = (input) => {
  const {r, g, b, a} = tinycolor2(input).toRgb();

  return {
    red: r / 255,
    green: g / 255,
    blue: b / 255,
    alpha: a,
  };
};

const friendlyName = (propName) =>
  propName
    .replace(/^color-/, '')
    .replace(/-/g, ' ')
    .replace(/(?<=^| )[a-z]/g, (letter) => letter.toUpperCase());

// Convert each color token into a Sketch-friendly color format
const convertColorArray = (result) =>
  result.toJS().props.map((prop) => ({
    name: friendlyName(prop.name),
    ...convertToSketchPaletteColor(prop.value),
  }));

module.exports = (result) =>
  JSON.stringify({
    compatibleVersion: '2.0',
    pluginVersion: '2.21',
    colors: convertColorArray(result),
    gradients: [],
    images: [],
  });
