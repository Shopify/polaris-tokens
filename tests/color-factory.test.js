const {colorFactory} = require('../formats/utils/color-factory/color-factory');

describe('colorFactory()', () => {
  const colors = {
    surface: '#111213',
    onSurface: '#111213',
    interactive: '#2E72D2',
    secondary: '#111213',
    primary: '#008060',
    critical: '#D82C0D',
    warning: '#FFC453',
    highlight: '#5BCDDA',
    success: '#008060',
    decorative: '#FFC96B',
  };

  it('outputs variants', () => {
    const variants = colorFactory(colors, 'light');
    expect(Object.keys(variants)).toContain('text');
  });

  it.todo('creates variants based on a theme');

  it.todo('creates variants based on a custom config');
});
