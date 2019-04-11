# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<!-- ## [Unreleased] -->

## [2.5.0] - 2019-04-19

- Duration tokens (with `type: time`) are treated as unitless and converted to milliseconds in JavaScript formats

## [2.4.0] - 2019-04-04

- Added color names to the Sketch palette ([#53](https://github.com/Shopify/polaris-tokens/pull/53))
- Fixed a bug where the font family value was wrapped in quotes ([#58](https://github.com/Shopify/polaris-tokens/pull/58))

## [2.3.0] - 2019-02-19

- Added spacing-map format, usable as `spacing.spacing-map.scss` ([#52](https://github.com/Shopify/polaris-tokens/pull/52))

## [2.2.0] - 2019-02-19

- Updated devDependencies ([#45](https://github.com/Shopify/polaris-tokens/pull/45))
- Added `base-tight` to the spacing map ([#48](https://github.com/Shopify/polaris-tokens/pull/48))

## [2.1.1] - 2019-01-04

- No changes in this version (re-publishing as the 2.1.0 Gem release failed)

## [2.1.0] - 2019-01-04

- Updated `color-yellow-dark` for accessibility ([#44](https://github.com/Shopify/polaris-tokens/pull/44))
- Documented how to import tokens using ES Modules ([#37](https://github.com/Shopify/polaris-tokens/pull/37))
- Updated Node.js to v10
- Updated Node.js & Ruby dependencies
- Reformatted files using sewing-kit

## [2.0.0] - 2018-10-23

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

[unreleased]: https://github.com/Shopify/polaris-tokens/compare/v2.5.0...HEAD
[2.5.0]: https://github.com/Shopify/polaris-tokens/compare/v2.4.0...v2.5.0
[2.4.0]: https://github.com/Shopify/polaris-tokens/compare/v2.3.0...v2.4.0
[2.3.0]: https://github.com/Shopify/polaris-tokens/compare/v2.2.0...v2.3.0
[2.2.0]: https://github.com/Shopify/polaris-tokens/compare/v2.1.1...v2.2.0
[2.1.1]: https://github.com/Shopify/polaris-tokens/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/Shopify/polaris-tokens/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/Shopify/polaris-tokens/compare/v1.3.1...v2.0.0
[1.3.1]: https://github.com/Shopify/polaris-tokens/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/Shopify/polaris-tokens/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/Shopify/polaris-tokens/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/Shopify/polaris-tokens/compare/v1.0.0...v1.1.0
