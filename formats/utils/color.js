// getPalette('color-ink-lightest') -> 'ink'
const getPalette = (name) =>
  name
    .replace('color-', '')
    .split('-')
    .shift();

// getPaletteFromFriendlyName('Ink Base') -> 'Ink'
const getPaletteFromFriendlyName = (friendlyName) =>
  friendlyName
    .split(' ')
    .shift()
    .toLowerCase();

// getShade('color-ink-lightest') -> 'lightest'
const getShade = (name) =>
  name
    .replace('color-', '')
    .split('-')
    .pop();

module.exports = {
  getPalette,
  getPaletteFromFriendlyName,
  getShade,
};
