// getCategory('ink-lightest') -> 'ink'
const getCategory = name => name.split('-').shift();

// getVariant('ink-lightest') -> 'lightest'
const getVariant = name => name.split('-').pop();

module.exports = {
  getCategory,
  getVariant,
};
