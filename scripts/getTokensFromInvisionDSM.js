/* eslint-disable no-console */
const path = require('path');
const fs = require('fs-extra');
const yaml = require('js-yaml');
const fetch = require('node-fetch');
const dashify = require('dashify');

// You can edit tokens in Invision DSM and in Sketch
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
const getColorTokens = (object) => object.list.colors[0].colors;

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
# Run 'yarn getTokensFromInvisionDSM' to generate a new version
# Last updated: ${new Date().toTimeString()}
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
