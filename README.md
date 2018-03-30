# polaris-tokens

[![CircleCI](https://circleci.com/gh/Shopify/polaris-tokens.svg?style=shield)](https://circleci.com/gh/Shopify/polaris-tokens)

[Design tokens](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421) for [Polaris](https://polaris.shopify.com), Shopify’s design system.

Design tokens originated at Salesforce, and the best way to describe them is to simply quote their documentation:

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development – [Salesforce UX](https://www.lightningdesignsystem.com/design-tokens/)

## Usage

```
yarn add @shopify/polaris-tokens --dev
```

### JavaScript

```js
const tokens = require('@shopify/polaris-tokens');
console.log(tokens.colorBlueLighter) // rgb(235, 245, 250)
```

### Sass

```scss
@import 'node_modules/@shopify/polaris-tokens/dist/index';
p {
  color: $color-blue-text;
}
```

---

Head to <https://github.com/Shopify/polaris-tokens/releases/>, where generated files are available.

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

## Updating colors

Colors are stored in Invision’s DSM.

Fetch the latest version:

```
yarn getTokensFromInvision
yarn dist
```

## Dev workflow

```
dev server
```
