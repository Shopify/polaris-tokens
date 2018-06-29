const _ = require('lodash');
const xml = require('xml');

module.exports = (def) => {
  const obj = {
    resources: def
      .get('props')
      .sortBy((prop) => prop.get('name'))
      .map((prop) => ({
        color: [
          {
            _attr: {
              name: `polaris_${_.snakeCase(prop.get('name'))}`,
            },
          },
          prop.get('value'),
        ],
      }))
      .toJS(),
  };
  return xml(obj, {
    indent: '    ',
    declaration: true,
  });
};
