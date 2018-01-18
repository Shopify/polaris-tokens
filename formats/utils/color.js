// getCategory('color-ink-lightest') -> 'ink'
const getCategory = (name) =>
  name
    .replace('color-', '')
    .split('-')
    .shift();

// getVariant('color-ink-lightest') -> 'lightest'
const getVariant = (name) =>
  name
    .replace('color-', '')
    .split('-')
    .pop();

module.exports = {
  getCategory,
  getVariant,
};
