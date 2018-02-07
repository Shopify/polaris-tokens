# polaris-tokens

[Design tokens](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421) for [Polaris](https://polaris.shopify.com), Shopify’s design system.

## Usage

```
yarn add polaris-tokens --dev
```

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

## Dev workflow

```
dev server
```
