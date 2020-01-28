const path = require('path');
const fs = require('fs');

const {colorFactory} = require('./utils/color-factory/color-factory');
const {tokensToJson} = require('./utils/color-factory/utils');

function tokenify(scheme) {
  return (result) => {
    const configFile = path.basename(result.toJS().meta.file, '.yml');
    const config = `${__dirname}/utils/color-factory/configs/${configFile}`;
    let configArg;

    if (fs.existsSync(`${config}.js`)) {
      configArg = require(`./utils/color-factory/configs/${configFile}`);
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
