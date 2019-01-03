/* eslint-disable no-console */
const path = require('path');
const fs = require('fs-extra');
const yaml = require('js-yaml');
const fetch = require('node-fetch');
const dashify = require('dashify');
const matter = require('gray-matter');

// You can edit tokens in Invision DSM and in Sketch
// https://shopify.invisionapp.com/dsm/shopify/design-tokens
// Run 'yarn dist:invision' to generate a new version of the tokens

// Name of the color palette in Invision DSM, as per:
// https://shopify.invisionapp.com/dsm/shopify/design-tokens/folder/colors/5b194575d36cf900115a42c3
const DSM_PALETTE_NAME = '00 Polaris';

const fetchTokens = async () => {
  const res = await fetch(
    'https://shopify.invisionapp.com/dsm-export/shopify/design-tokens/style-data.json?exportFormat=list&key=r1eA1Z8zEz',
  );
  const data = await res.json();
  return data;
};

// Invision’s API returns colors under this path
const getColorTokens = (object) =>
  object.list.colors.find(({name}) => name === DSM_PALETTE_NAME).colors;

// local metadata
// this is a workaround until DSM resurfaces the `description` field in its API
const colorMetadata = yaml.safeLoad(
  fs.readFileSync(path.join('data', 'color-metadata.yml')),
);

const buildTheoColorTokens = (colors) => ({
  aliases: Object.assign(
    {},
    ...colors.map((color) => ({[`color-${dashify(color.name)}`]: color.value})),
  ),
  props: colors.map((color) => {
    color.meta = {friendlyName: color.name};
    color.name = `color-${dashify(color.name)}`;
    color.value = `{!${color.name}}`;
    if (color.name.includes('text')) {
      color.category = 'text-color';
    }

    // Metadata from Invision, if present, will overwrite local metadata
    if (colorMetadata[color.name]) {
      color.meta = Object.assign(color.meta, colorMetadata[color.name]);
    }
    if (color.description) {
      const parsedDescription = matter(color.description);
      color.comment = parsedDescription.content;
      color.meta = Object.assign(color.meta, parsedDescription.data);
      delete color.description;
    }

    return color;
  }),
  global: {
    type: 'color',
    category: 'background-color',
  },
});

const warningBanner = `# DO NOT MANUALLY EDIT THIS FILE
# This file was automatically generated
# Run 'yarn get-tokens-from-invision-dsm' to generate a new version
# Last updated: ${new Date().toISOString()}
`;

module.exports = fetchTokens()
  .then(getColorTokens)
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
