const tinycolor2 = require('tinycolor2');

module.exports = (result) =>
  JSON.stringify(
    result.toJS().props.map((prop) => {
      const {name, value, meta} = prop;

      const returnValue = {
        name,
        value: tinycolor2(value).toRgb(),
      };

      if (meta && meta.figmaName) {
        returnValue.figmaName = meta.figmaName;
      }

      return returnValue;
    }),
  );
