/* eslint-disable shopify/jest/no-snapshots */

import fs from 'fs';
import path from 'path';

import lodash from 'lodash';

/* eslint-disable @typescript-eslint/no-var-requires */
const durationJSON = require('../dist/duration.json');
const durationRawJSON = require('../dist/duration.raw.json');
/* eslint-enable @typescript-eslint/no-var-requires */

const durationFiles = [
  'duration.map.scss',
  'duration.custom-properties.css',
  'duration.scss',
  'index.d.ts',
];

const rawUnitlessKey = 'duration-none';

describe('Compare files snapshots', () => {
  durationFiles.map((filename) =>
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
      lodash
        .chain(durationJSON)
        .toPairs()
        .sortBy(0)
        .fromPairs()
        .value(),
    ).toMatchSnapshot();
  });

  it('outputs integers in JSON', () => {
    const everyValueIsInteger = Object.values(
      durationJSON,
    ).every((value: any) => Number.isInteger(value));
    expect(everyValueIsInteger).toBe(true);
  });

  it('renders similar RAW JSON objects', () => {
    // Aliases
    expect(
      lodash
        .chain(durationRawJSON.aliases)
        .toPairs()
        .sortBy(0)
        .fromPairs()
        .value(),
    ).toMatchSnapshot();

    // Props
    expect(lodash.sortBy(durationRawJSON.props, 'name')).toMatchSnapshot();
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
