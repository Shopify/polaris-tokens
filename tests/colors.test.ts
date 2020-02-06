/* eslint-disable shopify/jest/no-snapshots */

import fs from 'fs';
import path from 'path';

import lodash from 'lodash';

/* eslint-disable @typescript-eslint/no-var-requires */
const colorsJSON = require('../dist/colors.json');
const colorsAseJSON = require('../dist/colors.ase.json');
const colorsRawJSON = require('../dist/colors.raw.json');
/* eslint-enable @typescript-eslint/no-var-requires */

const colorFiles = [
  'colors.android.xml',
  'colors.color-map.scss',
  'colors.custom-properties.css',
  'colors.scss',
  'Polaris.sketchpalette',
  'index.d.ts',
];

describe('Compare files snapshots', () => {
  colorFiles.map((filename) =>
    it(`renders ${filename} as expected`, () => {
      const contents = fs.readFileSync(
        path.join(__dirname, '..', 'dist', filename),
        {
          encoding: 'utf-8',
        },
      );
      expect(contents).toMatchSnapshot();
    }),
  );
});

describe('JSON object representation', () => {
  it('renders similar JSON objects', () => {
    // console.log('hai', lodash);
    expect(
      lodash
        .chain(colorsJSON)
        .toPairs()
        .sortBy(0)
        .fromPairs()
        .value(),
    ).toMatchSnapshot();
  });

  it('renders similar ASE JSON objects', () => {
    expect(colorsAseJSON.version).toBe('1.0');
    expect(colorsAseJSON.groups).toHaveLength(0);
    expect(lodash.sortBy(colorsAseJSON.colors, 'name')).toMatchSnapshot();
  });

  it('renders similar RAW JSON objects', () => {
    // Aliases
    expect(
      lodash
        .chain(colorsRawJSON.aliases)
        .toPairs()
        .sortBy(0)
        .fromPairs()
        .value(),
    ).toMatchSnapshot();

    // Props
    expect(lodash.sortBy(colorsRawJSON.props, 'name')).toMatchSnapshot();
  });
});
