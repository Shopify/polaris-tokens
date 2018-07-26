<h1 align="center">Polaris design tokens</h1>

<img src="https://user-images.githubusercontent.com/85783/39013335-ebf76f5e-43cb-11e8-81f2-706259125897.png" alt="" align="center" />

<h3 align="center">Colors, spacing, typography for all platforms</h3>

<p align="center"><em>JavaScript · JSON · CSS · SCSS · Android · Sketch · macOS · Adobe Swatch</em></p>

<div align="center" markdown="1">

[![CircleCI](https://circleci.com/gh/Shopify/polaris-tokens.svg?style=shield)](https://circleci.com/gh/Shopify/polaris-tokens) [![npm version](https://img.shields.io/npm/v/@shopify/polaris-tokens.svg)](https://www.npmjs.com/package/@shopify/polaris-tokens) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

</div>

---

[Design tokens](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421) for [Polaris](https://polaris.shopify.com), Shopify’s design system.

Design tokens originated at Salesforce, and the best way to describe them is to simply quote their documentation:

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development – [Salesforce UX](https://www.lightningdesignsystem.com/design-tokens/)

## Installation

Polaris design tokens are available as both a npm package (`@shopify/polaris-tokens`) on [npm](https://www.npmjs.com/), and as a Ruby gem (`polaris_tokens`) on [RubyGems](https://rubygems.org/).

The recommended way to use and install design tokens may vary depending on your project; the most common are documented below.

Using [npm](https://www.npmjs.com/):

```console
npm install @shopify/polaris-tokens --save
```

Using [yarn](https://yarnpkg.com/en/):

```console
yarn add @shopify/polaris-tokens
```

Using [Bundler](https://bundler.io/):

```console
bundle add polaris_tokens
```

## Usage

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

### Rails

Token files are added to the assets pipeline. In JSON, design token names are formatted in [kebab-case](http://wiki.c2.com/?KebabCase).

```ruby
require 'json'
polaris_token_file = Rails.application.assets_manifest.find_sources('colors.json').first
polaris_colors = JSON.parse(polaris_token_file)
polaris_colors['color-blue-lighter'] # "rgb(235, 245, 250)"
```

---

## Contributing

The purpose of this repository is to see the core design elements of the Polaris design system
evolve and improve over time with the needs of developers, designers and partners in mind.

We gratefully accept impromptu contributions to the documentation, typo and bug fixes,
and expect design token requests and changes to be discussed before a pull request.

### [Code of conduct](https://github.com/Shopify/polaris-tokens/blob/master/.github/CODE_OF_CONDUCT.md)

We have a [code of conduct](https://github.com/Shopify/polaris-tokens/blob/master/.github/CODE_OF_CONDUCT.md),
please follow it in all your interactions with the project.

### [Contributing guide](https://github.com/Shopify/polaris-tokens/blob/master/.github/CONTRIBUTING.md)

Read the [contributing guide](https://github.com/Shopify/polaris-tokens/blob/master/.github/CONTRIBUTING.md)
to learn how to propose changes and understand our development process.

### [License](https://github.com/Shopify/polaris-tokens/blob/master/LICENSE.md)

The polaris-tokens project is available under the [MIT license](https://github.com/Shopify/polaris-tokens/blob/master/LICENSE.md).
