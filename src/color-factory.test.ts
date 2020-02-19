import {colorFactory} from './color-factory';

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

  it('does not throw when given a color role without a corresponding config', () => {
    expect(() => {
      colorFactory({blarp: 'notAColor'}, 'light');
    }).not.toThrow();
  });

  it('does not throw when given a non-standard shape', () => {
    expect(() => {
      colorFactory(
        {
          // Silly casting needed to stop typescript helpfully pointing out that
          // this is invalid as topBar should be a string, not an object
          topBar: ({background: '#eeeeee'} as unknown) as string,
          surface: '#ffffff',
        },
        'light',
      );
    }).not.toThrow();
  });

  it.todo('creates variants based on a theme');

  it.todo('creates variants based on a custom config');
});
