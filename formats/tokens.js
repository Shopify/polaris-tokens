const path = require('path');
const fs = require('fs');

const {colorFactory} = require('../dist-modern/color-factory.js');
const {tokensToJson} = require('../dist-modern/utils');

function tokenify(scheme) {
  return (result) => {
    const configFile = path.basename(result.toJS().meta.file, '.yml');
    const config = `${__dirname}/../dist-modern/configs/${configFile}`;
    let configArg;

    if (fs.existsSync(`${config}.js`)) {
      configArg = require(`../dist-modern/configs/${configFile}`).config;
    }

    const theme = tokensToJson(result);
    const palette = colorFactory(theme, scheme, configArg);

    const yml = Object.entries(palette).reduce((accumulator, [key, value]) => {
      return `${accumulator}  - name: ${key}\n    value: '${value}'\n`;
    }, '');

    return `props:\n${yml}global:\n  type: color\n  category: background-color\n`;
  };
}

module.exports = {tokenify};
