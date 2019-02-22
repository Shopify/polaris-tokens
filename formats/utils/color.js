// getPalette('color-ink-lightest') -> 'ink'
const getPalette = (name) =>
  name
    .replace('color-', '')
    .split('-')
    .shift();

// getShade('color-ink-lightest') -> 'lightest'
// getShade('color-ink') -> 'base'
const getShade = (name) => {
  const nameWithoutPrefix = name.replace('color-', '');
  const shade = nameWithoutPrefix.split('-').pop();
  if (shade === nameWithoutPrefix) {
    return 'base';
  } else {
    return shade;
  }
};

module.exports = {
  getPalette,
  getShade,
};
