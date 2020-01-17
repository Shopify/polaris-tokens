const {colorFactory} = require('../formats/utils/color-factory');
const {roleVariants} = require('../formats/utils/role-variants');

function format(data) {
  return data.toJS().props.reduce(
    (accumulator, prop) => ({
      ...accumulator,
      [prop.name]: prop.originalValue,
    }),
    {},
  );
}

module.exports = (result) => {
  const colors = format(result);
  const variants = colorFactory(colors, roleVariants, 'light');
  return JSON.stringify(variants);
};
