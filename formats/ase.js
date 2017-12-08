/* eslint-disable id-length */
const tinycolor2 = require('tinycolor2');
const sortBy = require('lodash/sortBy');

function convertToRGBArray(input) {
  const {r, g, b} = tinycolor2(input).toRgb();
  return [r / 255, g / 255, b / 255];
}

module.exports = result =>
  JSON.stringify({
    version: '1.0',
    groups: [],
    colors: sortBy(result.toJS().props, 'name').map(({name, value}) => ({
      name,
      model: 'RGB',
      type: 'global',
      color: convertToRGBArray(value),
    })),
  });
