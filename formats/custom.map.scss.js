const path = require('path');
const tinycolor2 = require('tinycolor2');
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
      ${props
        .sort((colorA, colorB) => {
          // Force 'text' to always be the last color
          if (removeCategory(colorA.name) === 'text') return 1;
          if (removeCategory(colorB.name) === 'text') return -1;

          // Sort colors by brightness
          return (
            tinycolor2(colorB.value).getBrightness() -
            tinycolor2(colorA.value).getBrightness()
          );
        })
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
