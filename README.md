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
colors.custom-properties.css
colors.json
colors.scss
index.custom-properties.css
index.json
index.scss
Polaris.ase
Polaris.clr
Polaris.sketchpalette
spacing.custom-properties.css
spacing.json
spacing.scss
typography.custom-properties.css
typography.json
typography.scss
```

## Dev workflow

```
dev server
```
