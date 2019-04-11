/* eslint-env jest */

const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const durationJSON = require('../dist/duration.json');
const durationRawJSON = require('../dist/duration.raw.json');

const durationFiles = [
  'duration.map.scss',
  'duration.custom-properties.css',
  'duration.scss',
  'index.d.ts',
];

const rawUnitlessKey = 'duration-none';

durationFiles.map((filename) =>
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

describe('JSON object representation', () => {
  it('renders similar JSON objects', () => {
    expect(
      _(durationJSON)
        .toPairs()
        .sortBy(0)
        .fromPairs()
        .value(),
    ).toMatchSnapshot();
  });

  it('outputs integers in JSON', () => {
    const everyValueIsInteger = Object.values(durationJSON).every((value) =>
      Number.isInteger(value),
    );
    expect(everyValueIsInteger).toBe(true);
  });

  it('renders similar RAW JSON objects', () => {
    // Aliases
    expect(
      _(durationRawJSON.aliases)
        .toPairs()
        .sortBy(0)
        .fromPairs()
        .value(),
    ).toMatchSnapshot();

    // Props
    expect(_(durationRawJSON.props).sortBy('name')).toMatchSnapshot();
  });

  it('outputs `none` value as integer', () => {
    const unitlessValue = durationRawJSON.props[rawUnitlessKey].value;
    expect(Number.isInteger(unitlessValue)).toBe(true);
  });

  it('outputs all non-`none` values with `ms` unit', () => {
    const msUnitRegExp = new RegExp('ms$');
    const keysWithUnit = Object.keys(durationRawJSON.props).filter(
      (key) => key !== rawUnitlessKey,
    );
    const keysHaveMsUnit = keysWithUnit.every((key) =>
      msUnitRegExp.test(durationRawJSON.props[key].value),
    );

    expect(keysHaveMsUnit).toBe(true);
  });
});
