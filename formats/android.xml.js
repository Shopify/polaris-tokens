const _ = require('lodash');
const xml = require('xml');

module.exports = (def) => {
  const obj = {
    resources: def
      .get('props')
      .sortBy((prop) => prop.get('name'))
      .map((prop) => {
        const key = (() => {
          switch (prop.get('type')) {
            case 'color':
              return 'color';
            case 'size':
              return 'dimen';
            case 'number':
              return 'integer';
            case 'string':
              return 'string';
            default:
              return 'property';
          }
        })();

        return {
          [key]: [
            {
              _attr: {
                name: `polaris_${_.snakeCase(prop.get('name'))}`,
              },
            },
            prop.get('value'),
          ],
        };
      })
      .toJS(),
  };
  return xml(obj, {
    indent: '    ',
    declaration: true,
  });
};
