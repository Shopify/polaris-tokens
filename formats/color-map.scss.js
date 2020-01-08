const path = require('path');

const groupBy = require('lodash/groupBy');

const {getPalette, getShade} = require('./utils/color');

class CustomMap {
  constructor({props, meta}) {
    this.meta = meta;
    const propsWithPalette = props.map((prop) => {
      prop.palette = getPalette(prop.name);
      return prop;
    });
    this.palettes = groupBy(propsWithPalette, 'palette');
  }

  renderPalette(palette) {
    const props = this.palettes[palette];
    if (!props) {
      return '';
    }
    return `
    '${palette}': (
      ${props
        .filter((prop) => prop.name.includes(palette))
        .map((prop) =>
          `${prop.comment ? `/* ${prop.comment} */` : ''}
            '${getShade(prop.name)}': ${prop.value}
          `.trim(),
        )
        .join(',\n')}
    )`;
  }

  render() {
    return `
    $${path.basename(this.meta.file, '.yml')}: (
      ${Object.keys(this.palettes)
        .map((palette) => this.renderPalette(palette))
        .join(',\n')}
    );`;
  }
}

module.exports = (result) => {
  const customMap = new CustomMap(result.toJS());
  return customMap.render();
};
