const path = require('path');
const groupBy = require('lodash/groupBy');
const color = require('./utils/color');

class CustomMap {
  constructor({props, meta}) {
    this.meta = meta;
    const propsWithCategory = props.map(prop => {
      prop.category = color.getCategory(prop.name);
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
      ${props
        .filter(prop => prop.name.includes(category))
        .map(prop =>
          `${prop.comment ? `// ${prop.comment}` : ''}
            ${color.getVariant(prop.name)}: ${prop.value}
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
