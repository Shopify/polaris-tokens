# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2021-09-17

- Removed color theme for 6 River Systems MFP UI design system ([#208](https://github.com/Shopify/polaris-tokens/pull/208))

## [3.1.0] - 2021-04-15

Added `iconInteractive` to colors ([#189](https://github.com/Shopify/polaris-tokens/pull/189))

## [3.0.0] - 2021-03-10

- **Breaking:** Move `onSurface.onSurfaceBackground` to `surface.surfaceSearchField`. ([#183](https://github.com/Shopify/polaris-tokens/pull/183))
  Consumers of the variant `onSurfaceBackground` should replace it with `surfaceSearchField`. The color value is unchanged.

## [2.21.1] - 2021-03-03

- Fix `icon` and `action` colors not being exposed in `dist/color-filters.color-map.scss`. ([#182](https://github.com/Shopify/polaris-tokens/pull/182))

## [2.21.0] - 2021-03-02

- Added `mergeConfigs` and `Config` to the public API of `dist-modern/index.js` ([#180](https://github.com/Shopify/polaris-tokens/pull/180))
- Added esm support for legacy tokens. Doing `import {colorInk} from '@shopify/polaris-tokens';` shall load content from `dist/index.esm.js` which allows for better tree shaking. A default export so you can do `import tokens from '@shopify/polaris-tokens';` is provided for backwards compatability however this is just a stopgap, and will be removed in polaris-tokens v3.0.0. You should use either named imports (`import {colorInk}`) or a namespace import (`import * as tokens`) ([#181](https://github.com/Shopify/polaris-tokens/pull/181))

## [2.20.0] - 2021-02-24

- Added color theme for 6 River Systems MFP UI design system ([#179](https://github.com/Shopify/polaris-tokens/pull/179))

## [2.19.0] - 2021-02-17

- Added support for `.hbs` (handlebars) format templates ([#176](https://github.com/Shopify/polaris-tokens/pull/176))
- Increased contrast of dark border divider ([#177](https://github.com/Shopify/polaris-tokens/pull/177))

## [2.18.0] - 2021-01-26

- Added prefixed CSS custom properties output for colors ([#174](https://github.com/Shopify/polaris-tokens/pull/174), [#175](https://github.com/Shopify/polaris-tokens/pull/175))

## [2.17.0] - 2021-01-13

- Froze and deprecated design tokens in `./dist`. In a future version, this directory may be moved to `./dist-legacy` ([#170](https://github.com/Shopify/polaris-tokens/pull/170))

## [2.16.0] - 2020-12-17

- Added textPrimary with hovered and pressed variations ([#164](https://github.com/Shopify/polaris-tokens/pull/164))

## [2.15.0] - 2020-11-07

- Changed borderShadow value ([#157](https://github.com/Shopify/polaris-tokens/pull/157))

## [2.14.0] - 2020-11-01

- Adds states for surfaceNeutral ([#155](https://github.com/Shopify/polaris-tokens/pull/155))
- Changed dark mode values for some subdued borders ([#156](https://github.com/Shopify/polaris-tokens/pull/156))

## [2.13.1] - 2020-11-01

- Moved mistaken border variants to surface variants ([#154](https://github.com/Shopify/polaris-tokens/pull/154))

## [2.13.0] - 2020-11-01

- Add subdued variants to warning, highlight, and success ([#153](https://github.com/Shopify/polaris-tokens/pull/153))

## [2.12.9] - 2020-09-11

- Update action secondary depressed color / add border depressed ([#150](https://github.com/Shopify/polaris-tokens/pull/150))

## [2.12.8] - 2020-09-10

- Add icon and action colors to color-filters-map ([#149](https://github.com/Shopify/polaris-tokens/pull/149))

## [2.12.7] - 2020-09-09

- Updates the onSurface background name ([#147](https://github.com/Shopify/polaris-tokens/pull/147))

## [2.12.6] - 2020-09-09

- Added background under onSurface ([#146](https://github.com/Shopify/polaris-tokens/pull/146))

## [2.12.5] - 2020-09-08

- Updated borderSubdued and added borderShadow, borderShadowSubdued, and divider colors ([#145](https://github.com/Shopify/polaris-tokens/pull/145))

## [2.12.4] - 2020-08-27

- Updated background, surface, and action colors ([#140](https://github.com/Shopify/polaris-tokens/pull/140))

## [2.12.3] - 2020-04-07

- Updated the font stack so that Segoe UI comes before Roboto. ([#131](https://github.com/Shopify/polaris-tokens/pull/131))

## [2.12.2] - 2020-03-25

- Loosened the type of the first argument of `color-factory` to account for stricter merge checks in Typescript 3.8 ([#130](https://github.com/Shopify/polaris-tokens/pull/130))

## [2.12.1] - 2020-03-18

- Adjusted Figma metadata for variants. Adjusted description of one variant. ([#126](https://github.com/Shopify/polaris-tokens/pull/126))

## [2.12.0] - 2020-03-13

- Added variants for border subdued roles ([#123](https://github.com/Shopify/polaris-tokens/pull/123))

## [2.11.0] - 2020-03-11

- Added missing variants ([#121](https://github.com/Shopify/polaris-tokens/pull/121))
- Updated hover variants ([#120](https://github.com/Shopify/polaris-tokens/pull/120))
- Updated color variants to use `saturationAdjustmentFn` instead of `saturation` ([#119](https://github.com/Shopify/polaris-tokens/pull/119))

## [2.10.0] - 2020-03-05

- Removed `borderSecondary`, `borderSecondaryHovered`, and `borderSecondaryDisabled` color variants from the `secondary` role in favor of `border` and the newly added `borderHovered` and `borderDisabled` color variants in the `onSurface` role ([#115](https://github.com/Shopify/polaris-tokens/pull/115))
  - Note: This is technically a breaking change although we will continue to ship as minor and patch versions until the new color system is enabled by default in production

## [2.9.0] - 2020-03-03

- Added Figma color name metadata ([#110](https://github.com/Shopify/polaris-tokens/pull/110))

## [2.8.2] - 2020-02-27

- Fixed an issue where dev environment utils and types were exported ([#113](https://github.com/Shopify/polaris-tokens/pull/113))

## [2.8.1] - 2020-02-27

- Updated color variants to match Figma ([#108](https://github.com/Shopify/polaris-tokens/pull/108))
- Updated `interactiveCritical` description ([#107](https://github.com/Shopify/polaris-tokens/pull/107))

## [2.8.0] - 2020-02-20

- Added color factory and built modern tokens ([#105](https://github.com/Shopify/polaris-tokens/pull/105))
  - Added surface disabled variant and updated other variant configs ([#101](https://github.com/Shopify/polaris-tokens/pull/101))
  - Added TypeScript build for modern tokens, and shifted directory structures to differentiate between legacy and modern tokens ([#97](https://github.com/Shopify/polaris-tokens/pull/97))
  - Updated variant names and descriptions ([#96](https://github.com/Shopify/polaris-tokens/pull/96))
  - Added decorative icon variants ([#94](https://github.com/Shopify/polaris-tokens/pull/94))
  - Built changes from previous release, and added textOnInteractive variant ([#93](https://github.com/Shopify/polaris-tokens/pull/93))
  - Fixed an issue where legacy themes caused the color factory to throw ([#92](https://github.com/Shopify/polaris-tokens/pull/92))
  - Updated color variants for consistency with changes in Polaris React ([#91](https://github.com/Shopify/polaris-tokens/pull/91))
  - Marked the config as optional and the colors as partial ([dd3d8fc](https://github.com/Shopify/polaris-tokens/commit/dd3d8fc05572fb03e764a85a0519bbd3dde11855))
  - Added the Color Factory. Long live the Color Factory! ([#89](https://github.com/Shopify/polaris-tokens/pull/89))

## [2.7.0] - 2019-10-28

- Updated filter for the Blue color ([#64](https://github.com/Shopify/polaris-tokens/pull/64))
- Removed reliance on the Invision DSM import script (colors are now directly managed in `tokens/colors.yml`) ([#66](https://github.com/Shopify/polaris-tokens/pull/66))
- Added a JSON color export for iOS ([`colors.ios.json`](/dist/colors.ios.json)) ([#86](https://github.com/Shopify/polaris-tokens/pull/86))

## [2.6.0] - 2019-06-06

- Update `color-blue` to `#006fbb` from `#007ace` for accessibility ([#63](https://github.com/Shopify/polaris-tokens/pull/63))
- Add missing `colorYellowDark` values from ([#44](https://github.com/Shopify/polaris-tokens/pull/44))

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

- Added [`colors.android-colors.xml`](https://github.com/Shopify/polaris-tokens/blob/main/dist/colors.android-colors.xml), for Android apps

## [1.2.0] - 2018-05-30

- `ase` and `clr` palettes: removed the `color-` prefix from color names
- Updated devDependencies

## [1.1.0] - 2018-04-24

Polaris tokens are now available as both a [npm package](https://www.npmjs.com/package/@shopify/polaris-tokens) and a [Ruby gem](https://rubygems.org/gems/polaris_tokens)! Check the [README](https://github.com/Shopify/polaris-tokens/blob/main/README.md) for installation and usage instructions for both.

## 1.0.0 - 2018-04-13

First stable release 🎉

Color design tokens are now used in:

- `Shopify/shopify`
- `Shopify/polaris-styleguide`
- `Shopify/polaris-react` (`@shopify/polaris` v2 on npm)

[unreleased]: https://github.com/Shopify/polaris-tokens/compare/v4.0.0...HEAD
[4.0.0]: https://github.com/Shopify/polaris-tokens/compare/v3.1.0...v4.0.0
[3.1.0]: https://github.com/Shopify/polaris-tokens/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/Shopify/polaris-tokens/compare/v2.21.1...v3.0.0
[2.21.1]: https://github.com/Shopify/polaris-tokens/compare/v2.21.0...v2.21.1
[2.21.0]: https://github.com/Shopify/polaris-tokens/compare/v2.20.0...v2.21.0
[2.20.0]: https://github.com/Shopify/polaris-tokens/compare/v2.19.0...v2.20.0
[2.19.0]: https://github.com/Shopify/polaris-tokens/compare/v2.18.0...v2.19.0
[2.18.0]: https://github.com/Shopify/polaris-tokens/compare/v2.17.0...v2.18.0
[2.17.0]: https://github.com/Shopify/polaris-tokens/compare/v2.16.0...v2.17.0
[2.16.0]: https://github.com/Shopify/polaris-tokens/compare/v2.15.0...v2.16.0
[2.15.0]: https://github.com/Shopify/polaris-tokens/compare/v2.14.0...v2.15.0
[2.14.0]: https://github.com/Shopify/polaris-tokens/compare/v2.13.1...v2.14.0
[2.13.1]: https://github.com/Shopify/polaris-tokens/compare/v2.13.0...v2.13.1
[2.13.0]: https://github.com/Shopify/polaris-tokens/compare/v2.12.9...v2.13.0
[2.12.9]: https://github.com/Shopify/polaris-tokens/compare/v2.12.8...v2.12.9
[2.12.8]: https://github.com/Shopify/polaris-tokens/compare/v2.12.7...v2.12.8
[2.12.7]: https://github.com/Shopify/polaris-tokens/compare/v2.12.6...v2.12.7
[2.12.6]: https://github.com/Shopify/polaris-tokens/compare/v2.12.5...v2.12.6
[2.12.5]: https://github.com/Shopify/polaris-tokens/compare/v2.12.4...v2.12.5
[2.12.4]: https://github.com/Shopify/polaris-tokens/compare/v2.12.3...v2.12.4
[2.12.3]: https://github.com/Shopify/polaris-tokens/compare/v2.12.2...v2.12.3
[2.12.2]: https://github.com/Shopify/polaris-tokens/compare/v2.12.1...v2.12.2
[2.12.1]: https://github.com/Shopify/polaris-tokens/compare/v2.12.0...v2.12.1
[2.12.0]: https://github.com/Shopify/polaris-tokens/compare/v2.11.0...v2.12.0
[2.11.0]: https://github.com/Shopify/polaris-tokens/compare/v2.10.0...v2.11.0
[2.10.0]: https://github.com/Shopify/polaris-tokens/compare/v2.9.0...v2.10.0
[2.9.0]: https://github.com/Shopify/polaris-tokens/compare/v2.8.2...v2.9.0
[2.8.2]: https://github.com/Shopify/polaris-tokens/compare/v2.8.1...v2.8.2
[2.8.1]: https://github.com/Shopify/polaris-tokens/compare/v2.8.0...v2.8.1
[2.8.0]: https://github.com/Shopify/polaris-tokens/compare/v2.7.0...v2.8.0
[2.7.0]: https://github.com/Shopify/polaris-tokens/compare/v2.6.0...v2.7.0
[2.6.0]: https://github.com/Shopify/polaris-tokens/compare/v2.5.0...v2.6.0
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
