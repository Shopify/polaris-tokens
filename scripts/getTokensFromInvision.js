/* eslint-disable no-console */
const path = require('path');
const fs = require('fs-extra');
const yaml = require('js-yaml');
const fetch = require('node-fetch');
const tinycolor2 = require('tinycolor2');
const sortBy = require('lodash/sortBy');
const dashify = require('dashify');

// Edit tokens in Invision DSM
// https://shopify.invisionapp.com/dsm/shopify/design-tokens
// Run 'yarn dist:invision' to generate a new version of the tokens

const fetchTokens = async () => {
  const res = await fetch(
    'https://shopify.invisionapp.com/dsm-export/shopify/design-tokens/style-data.json?exportFormat=list&key=r1eA1Z8zEz',
  );
  const data = await res.json();
  return data;
};

// Invision’s API returns colors under this path
const getColorTokens = (tokens) => tokens.colors[0].colors;

const getPalette = (friendlyName) => friendlyName.split(' ').shift();

// Invision doesn't support manual color sorting from the DSM UI
// so we're doing our best to sort colors in a way that makes sense
// to designers: light to dark, then the text color
const sortColorTokens = (colors) =>
  sortBy(
    colors.map((color) => {
      // Force base colors (black, white) to be at the beginning of the file
      color.isNotBaseColor = !/black|white/.test(color.name.toLowerCase());
      // Sort colors by color palette (ink, indigo…)
      color.colorPalette = getPalette(color.name);
      // Force text-specific colors to be last in a palette
      color.isText = color.name.toLowerCase().includes('text');
      // Sort by brightness inside of a color palette
      color.brightness = tinycolor2(color.value).getBrightness() * -1;
      return color;
    }),
    ['isNotBaseColor', 'colorPalette', 'isText', 'brightness'],
  ).map((color) => {
    // Clean up keys introduced in previous steps
    delete color.isNotBaseColor;
    delete color.isText;
    delete color.colorPalette;
    delete color.brightness;
    return color;
  });

const buildTheoColorTokens = (colors) => ({
  props: colors.map((color) => {
    color.friendlyName = color.name;
    color.name = `color-${dashify(color.name)}`;
    if (color.name.includes('text')) {
      color.category = 'text-color';
    }
    if (color.description) {
      color.comment = color.description;
    }
    delete color.description;
    return color;
  }),
  global: {
    type: 'color',
    category: 'background-color',
  },
});

const warningBanner = `# DO NOT MANUALLY EDIT THIS FILE
# This file was automatically generated
# Run 'yarn dist:invision' to generate a new version
# Last updated: ${new Date().toTimeString()}
`;

fetchTokens()
  .then((object) => object.list)
  .then(getColorTokens)
  .then(sortColorTokens)
  .then(buildTheoColorTokens)
  .then((data) =>
    fs.writeFile(
      path.join('tokens', 'colors.yml'),
      warningBanner + yaml.safeDump(data),
    ),
  )
  .then(
    console.log(
      `Tokens successfully fetched from invision.
      ./tokens/colors.yml updated`,
    ),
  )
  .catch((err) => console.error(err));
