/* eslint-disable id-length */
const tinycolor2 = require('tinycolor2');

const convertToRGBArray = (input) => {
  const {r, g, b} = tinycolor2(input).toRgb();
  return [r / 255, g / 255, b / 255];
};

module.exports = (result) =>
  JSON.stringify({
    version: '1.0',
    groups: [],
    colors: result.toJS().props.map(({name, value}) => ({
      name: name.replace('color-', ''),
      model: 'RGB',
      type: 'global',
      color: convertToRGBArray(value),
    })),
  });
