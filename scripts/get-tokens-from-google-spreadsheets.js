/* eslint-disable no-console */
const path = require('path');
const fs = require('fs-extra');
const yaml = require('js-yaml');
const fetch = require('node-fetch');

// You can edit tokens in Google Spreadsheet
// https://docs.google.com/spreadsheets/d/1HzVgcxnnOCeB2zI46gcSd5fPFUJ2R03CSldx_SKQQwA/edit#gid=0
// Run 'yarn get-tokens-from-google-spreadsheets' to generate a new version of the tokens

// Index of the "Colors" sheet
const SHEET_ID = 1;

const fetchTokens = async () => {
  const res = await fetch(
    `https://spreadsheets.google.com/feeds/list/1HzVgcxnnOCeB2zI46gcSd5fPFUJ2R03CSldx_SKQQwA/${SHEET_ID}/public/values?alt=json`,
  );
  const data = await res.json();
  return data;
};

// Google Spreadsheet returns colors under this path
const getColorTokens = (object) => object.feed.entry;

const buildTheoColorTokens = (colors) => ({
  aliases: Object.assign(
    {},
    ...colors.map((color) => ({
      [color.gsx$name.$t]: color.gsx$value.$t,
    })),
  ),
  props: colors.map((rawColor) => {
    const color = {};
    color.name = rawColor.gsx$name.$t;
    color.value = `{!${color.name}}`;

    if (color.name.includes('text')) {
      color.category = 'text-color';
    }

    color.meta = {
      friendlyName: rawColor['gsx$meta.friendlyname'].$t,
      camelCaseName: rawColor['gsx$meta.camelcasename'].$t,
      filter: rawColor['gsx$meta.filter'].$t,
      description: rawColor['gsx$meta.description'].$t,
    };

    return color;
  }),
  global: {
    type: 'color',
    category: 'background-color',
  },
});

const warningBanner = `# DO NOT MANUALLY EDIT THIS FILE
# This file was automatically generated
# Run 'yarn get-tokens-from-google-spreadsheets' to generate a new version
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
      `Tokens successfully fetched from Google Spreadsheets.
      ./tokens/colors.yml updated`,
    ),
  )
  .catch((err) => console.error(err));
