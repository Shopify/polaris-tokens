/* eslint-env jest */

const fs = require('fs');
const path = require('path');

const colorFiles = [
  'colors.color-map.scss',
  'colors.custom-properties.css',
  'colors.json',
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
