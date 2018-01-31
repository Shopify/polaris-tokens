// getPalette('color-ink-lightest') -> 'ink'
const getPalette = (name) =>
  name
    .replace('color-', '')
    .split('-')
    .shift();

// getShade('color-ink-lightest') -> 'lightest'
const getShade = (name) =>
  name
    .replace('color-', '')
    .split('-')
    .pop();

module.exports = {
  getPalette,
  getShade,
};
