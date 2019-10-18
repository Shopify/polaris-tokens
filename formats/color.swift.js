/* eslint-disable id-length */
const tinycolor2 = require('tinycolor2');
const Immutable = require('immutable');
const _ = require('lodash');

const convertToColorLiteral = (input) => {
  const {r, g, b, a} = tinycolor2(input).toRgb();
  return `#colorLiteral(red: ${r / 255}, green: ${g / 255}, blue: ${b /
    255}, alpha: ${a}) // 0x${tinycolor2(input).toHex8()}`;
};

module.exports = (def) => {
  const content = def
    .get('props')
    .sortBy((prop) => prop.get('name'))
    .map((prop) => {
      let result = Immutable.List();
      const key = _.camelCase(prop.get('name'));
      const value = convertToColorLiteral(prop.get('value'));
      result = result.push(`  public static let ${key} = ${value}`);
      return result;
    })
    .flatten(1)
    .toArray()
    .join('\n');

  return ['import UIKit', '', 'public enum Color {', content, '}', ''].join(
    '\n',
  );
};
