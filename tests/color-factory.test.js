const {colorFactory} = require('../formats/utils/color-factory');
const {roleVariants} = require('../formats/utils/role-variants');

describe('colorFactory()', () => {
  const DefaultThemeColors = {
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
    const variants = colorFactory(DefaultThemeColors, roleVariants, 'light');
    console.log(variants);
    expect(Object.keys(variants)).toContain('text');
  });
});
