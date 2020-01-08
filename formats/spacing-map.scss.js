const path = require('path');

const Immutable = require('immutable');

module.exports = (def) => {
  const content = def
    .get('props')
    .map((prop) => {
      let result = Immutable.List();
      const key = prop.get('name').replace('spacing-', '');
      const value = prop.get('value');
      result = result.push(`  '${key}': ${value}`);
      return result;
    })
    .flatten(1)
    .toArray()
    .join(',\n');
  return `
    $${path.basename(def.getIn(['meta', 'file']), '.yml')}: (
      ${content}
    );`;
};
