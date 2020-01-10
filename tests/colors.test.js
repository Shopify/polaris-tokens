/* eslint-disable shopify/jest/no-snapshots */

const fs = require('fs');
const path = require('path');

const _ = require('lodash');

const colorsJSON = require('../dist/colors.json');
const colorsAseJSON = require('../dist/colors.ase.json');
const colorsRawJSON = require('../dist/colors.raw.json');

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
    expect(
      _(colorsJSON)
        .toPairs()
        .sortBy(0)
        .fromPairs()
        .value(),
    ).toMatchSnapshot();
  });

  it('renders similar ASE JSON objects', () => {
    expect(colorsAseJSON.version).toBe('1.0');
    expect(colorsAseJSON.groups).toHaveLength(0);
    expect(_(colorsAseJSON.colors).sortBy('name')).toMatchSnapshot();
  });

  it('renders similar RAW JSON objects', () => {
    // Aliases
    expect(
      _(colorsRawJSON.aliases)
        .toPairs()
        .sortBy(0)
        .fromPairs()
        .value(),
    ).toMatchSnapshot();

    // Props
    expect(_(colorsRawJSON.props).sortBy('name')).toMatchSnapshot();
  });
});
