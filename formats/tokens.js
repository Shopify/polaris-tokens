const path = require('path');
const fs = require('fs');

const {colorFactory} = require('../dist/color-factory.js');

function tokenify(scheme) {
  return (result) => {
    const configFile = path.basename(result.toJS().meta.file, '.yml');
    const config = `${__dirname}/../dist/configs/${configFile}`;
    let configArg;

    if (fs.existsSync(`${config}.js`)) {
      configArg = require(`../dist/configs/${configFile}`).config;
    }

    const theme = tokensToJson(result);
    const palette = colorFactory(theme, scheme, configArg);

    const yml = Object.entries(palette).reduce((accumulator, [key, value]) => {
      const figmaName = findFigmaName(configArg, key);

      return `${accumulator}  - name: ${key}\n    value: '${value}'\n${figmaMetaData(
        figmaName,
      )}`;
    }, '');

    return `props:\n${yml}global:\n  type: color\n  category: background-color\n`;
  };
}

function tokensToJson(data) {
  return data.toJS().props.reduce(
    (accumulator, prop) => ({
      ...accumulator,
      [prop.name]: prop.originalValue,
    }),
    {},
  );
}

function figmaMetaData(name) {
  return name == null ? '' : `    meta:\n      figmaName: ${name}\n`;
}

function findFigmaName(config, key) {
  if (config == null) return null;

  let returnValue;
  Object.values(config).forEach((variants) => {
    const found = variants.find((variant) => variant.name === key);

    if (found && found.meta && found.meta.figmaName) {
      returnValue = found.meta.figmaName;
    }
  });

  return returnValue;
}

module.exports = {tokenify};
