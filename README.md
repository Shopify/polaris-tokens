# polaris-tokens

[![CircleCI](https://circleci.com/gh/Shopify/polaris-tokens.svg?style=shield)](https://circleci.com/gh/Shopify/polaris-tokens)

[Design tokens](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421) for [Polaris](https://polaris.shopify.com), Shopify’s design system.

Design tokens originated at Salesforce, and the best way to describe them is to simply quote their documentation:

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development – [Salesforce UX](https://www.lightningdesignsystem.com/design-tokens/)

## Usage

```
yarn add @shopify/polaris-tokens --dev
```

Find all available tokens in the [design tokens documentation](https://shopify.github.io/polaris-tokens/).

### JavaScript

In JavaScript, design token names are formatted in [lower camelCase](http://wiki.c2.com/?CamelCase).

```js
const tokens = require('@shopify/polaris-tokens');
console.log(tokens.colorBlueLighter); // rgb(235, 245, 250)
```

In JSON, design token names are formatted in [kebab-case](http://wiki.c2.com/?KebabCase).

```js
const tokens = require('@shopify/polaris-tokens/dist/index.json');
console.log(tokens['color-blue-lighter']); // rgb(235, 245, 250)
```

### Sass

Sass variables and map keys are formatted in [kebab-case](http://wiki.c2.com/?KebabCase).

```scss
// Using variables
@import '~@shopify/polaris-tokens/dist/index';

a {
  color: $color-blue-text;
}

// Using the map of all tokens
@import '~@shopify/polaris-tokens/dist/index.map';

a {
  color: map-get($polaris-index-map, 'color-blue-text');
}

// Using the map for a specific type of tokens (here: spacing)
@import '~@shopify/polaris-tokens/dist/spacing.map';

a {
  color: map-get($polaris-spacing-map, 'spacing-loose');
}
```

### Sass, with CSS Custom Properties

Custom properties are formatted in [kebab-case](http://wiki.c2.com/?KebabCase).

```scss
// Omit .css at the end of the file
@import '~@shopify/polaris-tokens/dist/colors.custom-properties';

a {
  color: var(--color-blue-text);
}
```

---

## Generate tokens

1. `dev clone polaris-tokens`
2. `dev up`
3. `yarn dist`

Tokens are generated under the `dist/` folder:

```
colors.color-map.scss
colors.common.js
colors.custom-properties.css
colors.json
colors.map.scss
colors.scss
index.common.js
index.custom-properties.css
index.d.ts
index.json
index.map.scss
index.scss
Polaris.ase
Polaris.clr
Polaris.sketchpalette
spacing.common.js
spacing.custom-properties.css
spacing.json
spacing.map.scss
spacing.scss
typography.common.js
typography.custom-properties.css
typography.json
typography.map.scss
typography.scss
```

---

## Contributing

### Updating colors

Colors are stored in Invision’s DSM.

Fetch the latest version from DSM:

```
yarn getTokensFromInvision
yarn dist
```

### Dev workflow

Editing any file will refresh the list of available tokens:

```
dev server
```
