/* eslint-disable id-length */
const tinycolor2 = require('tinycolor2');
const _ = require('lodash');

const convertToComposite = (input) => {
  const {r, g, b, a} = tinycolor2(input).toRgb();

  return {
    r: r / 255,
    g: g / 255,
    b: b / 255,
    a,
  };
};

const iosColorName = (propName) => _.camelCase(propName.replace('color-', ''));

// Convert each color token into an iOS-friendly color format
const convertColorArray = (result) =>
  result.toJS().props.map((prop) => ({
    name: iosColorName(prop.name),
    rgba: convertToComposite(prop.value),
    hex: tinycolor2(prop.value).toHex8String(),
  }));

module.exports = (result) => JSON.stringify(convertColorArray(result));
