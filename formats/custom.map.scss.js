const path = require('path');
const sortBy = require('lodash/sortBy');
const groupBy = require('lodash/groupBy');

function removeCategory(name) {
  return name.split('-').pop();
}
function getCategory(name) {
  return name.split('-').shift();
}

class CustomMap {
  constructor({props, meta}) {
    this.meta = meta;
    const propsWithCategory = props.map(prop => {
      prop.category = getCategory(prop.name);
      return prop;
    });
    this.categories = groupBy(propsWithCategory, 'category');
  }

  renderCategory(category) {
    const props = this.categories[category];
    if (!props) {
      return '';
    }
    return `
    '${category}': (
      ${sortBy(props, 'name')
        .filter(prop => prop.name.startsWith(category))
        .map(prop =>
          `${prop.comment ? `// ${prop.comment}` : ''}
            ${removeCategory(prop.name)}: ${prop.value}
          `.trim(),
        )
        .join(',\n')}
    )`;
  }

  render() {
    return `
    $${path.basename(this.meta.file, '.yml')}: (
      ${Object.keys(this.categories)
        .map(category => this.renderCategory(category))
        .join(',\n')}
    );`;
  }
}

module.exports = result => {
  const customMap = new CustomMap(result.toJS());
  return customMap.render();
};
