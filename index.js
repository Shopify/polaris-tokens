// This file used to be the main entrpoint for the package, but now main points
// directly to `dist/index.common.js`. This file is left in the unlikely event
// that somebody is importing `@shopify/polaris-tokens/index.js`.
// This file can be removed as a breaking change in polaris-tokens v3.
module.exports = require('./dist/index.common.js');
