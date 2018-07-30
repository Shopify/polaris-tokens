# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

- **Breaking:** renamed `colors.android-colors.xml` to `colors.android.xml`
- **Breaking:** removed `-base` suffix from base color token names (fixes [#16](https://github.com/Shopify/polaris-tokens/issues/16))

  Upgrade path:

  - CSS: remove `-base`. For example: `var(--color-ink-base)` → `var(--color-ink)`.
  - Sass: remove `-base`. For example: `$color-ink-base` → `$color-ink`.
  - JSON: remove `-base`. For example: `tokens['color-ink-base']` → `tokens['color-ink']`.
  - Android: remove `_base`. For example: `polaris_color_blue_base` → `polaris_color_blue`.
  - JavaScript: remove `Base`. For example: `colorPurpleBase` → `colorPurple`.

- Updated dependencies, including Theo to from `^7.0.1` to `8.0.0-beta.2`
- Updated the Android token format to enable it to format other properties than just colors

## [1.3.1] - 2018-07-09

- Updated devDependencies, including [Prettier](https://prettier.io/). This reformatted SCSS files in `./dist/` but didn’t impact the tokens themselves.

## [1.3.0] - 2018-06-29

- Added [`colors.android-colors.xml`](https://github.com/Shopify/polaris-tokens/blob/master/dist/colors.android-colors.xml), for Android apps

## [1.2.0] - 2018-05-30

- `ase` and `clr` palettes: removed the `color-` prefix from color names
- Updated devDependencies

## [1.1.0] - 2018-04-24

Polaris tokens are now available as both a [npm package](https://www.npmjs.com/package/@shopify/polaris-tokens) and a [Ruby gem](https://rubygems.org/gems/polaris_tokens)! Check the [README](https://github.com/Shopify/polaris-tokens/blob/master/README.md) for installation and usage instructions for both.

## 1.0.0 - 2018-04-13

First stable release 🎉

Color design tokens are now used in:

- `Shopify/shopify`
- `Shopify/polaris-styleguide`
- `Shopify/polaris-react` (`@shopify/polaris` v2 on npm)

[unreleased]: https://github.com/Shopify/polaris-tokens/compare/v1.3.1...HEAD
[1.3.1]: https://github.com/Shopify/polaris-tokens/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/Shopify/polaris-tokens/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/Shopify/polaris-tokens/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/Shopify/polaris-tokens/compare/v1.0.0...v1.1.0
