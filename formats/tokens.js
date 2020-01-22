const {
  colorFactory,
  tokensToColors,
} = require('./utils/color-factory/color-factory');
const {
  backOfficeVariants,
} = require('./utils/color-factory/variants/back-office-variants');

module.exports = (result) => {
  const backOfficeColors = tokensToColors(result);
  const variants = colorFactory(backOfficeColors, backOfficeVariants, 'light');

  const yml = Object.entries(variants).reduce((accumulator, [key, value]) => {
    return `${accumulator}  - name: ${key}\n    value: '${value}'\n`;
  }, '');

  return `props:\n${yml}global:\n  type: color\n  category: background-color\n`;
};
