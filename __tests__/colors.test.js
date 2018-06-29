/* eslint-env jest */

const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const xml2json = require('xml2json');

const colorsJSON = require('../dist/colors.json');
const colorsAseJSON = require('../dist/colors.ase.json');
const colorsRawJSON = require('../dist/colors.raw.json');

const colorsAndroidXML = fs.readFileSync(
  path.resolve(__dirname, '../dist/colors.android-colors.xml'),
  'utf-8',
);

const colorFiles = [
  'colors.color-map.scss',
  'colors.custom-properties.css',
  'colors.scss',
  'Polaris.sketchpalette',
  'index.d.ts',
];

colorFiles.map((filename) =>
  it(`renders ${filename} correctly`, () => {
    const contents = fs.readFileSync(
      path.join(__dirname, '..', 'dist', filename),
      {
        encoding: 'utf-8',
      },
    );
    expect(contents).toMatchSnapshot();
  }),
);

describe('JSON objects', () => {
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
    expect(colorsAseJSON.groups.length).toBe(0);
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

  it('renders similar colors for Android', () => {
    const colorsAndroidObject = xml2json.toJson(colorsAndroidXML, {
      object: true,
    });
    expect(
      _(colorsAndroidObject.resources.color)
        .sortBy('name')
        .keyBy('name')
        .mapValues('$t')
        .value(),
    ).toMatchSnapshot();
  });
});
