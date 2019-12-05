# Contributing

When contributing to this repository, please first discuss the change you wish to make via an issue with the owners of this repository before making a change. Adding tests, documentation updates such as typo fixes and other improvements are welcome at any time without submitting an issue first.

Please note we have a [code of conduct](https://github.com/Shopify/polaris-tokens/blob/master/.github/CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

---

## Generating the design tokens

In a terminal, paste the following instructions.

With `dev` (Shopify employees):

```
dev clone polaris-tokens
dev up
dev start
```

Without `dev` (external contributors), with [yarn](https://yarnpkg.com/en/):

```
git clone https://github.com/Shopify/polaris-tokens.git
cd polaris-tokens
yarn
yarn dist
```

Tokens are exported under the `dist/` folder for consumption by external projects:

```
color-filters.color-map.scss
color-filters.common.js
color-filters.custom-properties.css
color-filters.json
color-filters.map.scss
color-filters.raw.json
color-filters.scss
colors.android.xml
colors.ase.json
colors.color-map.scss
colors.common.js
colors.custom-properties.css
colors.json
colors.map.scss
colors.raw.json
colors.scss
duration.common.js
duration.custom-properties.css
duration.json
duration.map.scss
duration.raw.json
duration.scss
easing.common.js
easing.custom-properties.css
easing.json
easing.map.scss
easing.raw.json
easing.scss
index.common.js
index.custom-properties.css
index.d.ts
index.json
index.map.scss
index.raw.json
index.scss
Polaris.ase
Polaris.clr
Polaris.sketchpalette
spacing.common.js
spacing.custom-properties.css
spacing.json
spacing.map.scss
spacing.raw.json
spacing.scss
spacing.spacing-map.scss
typography.common.js
typography.custom-properties.css
typography.json
typography.map.scss
typography.raw.json
typography.scss
```

---

## Developing with the watch mode

In watch mode, the [documentation](https://shopify.github.io/polaris-tokens/) automatically live reloads at <http://localhost:3000>
when design tokens files (`./tokens/*.yml`) are edited.

```
dev server
```

or, if you don’t have `dev` on your machine:

```
yarn watch
```

---

## Running the tests

This project uses [Jest snapshot testing](https://facebook.github.io/jest/docs/en/snapshot-testing.html) to test the output of design tokens files in `./dist` generated from the YAML source files from `./tokens`.

Tests are located in the [`__tests__`](https://github.com/Shopify/polaris-tokens/tree/master/__tests__) folder.

### Running tests once

```
yarn test
```

### Running tests on every file change

When developing or refactoring, running tests continuously can be a great time saver.

This command will run the test suite every time a file change is detected:

```
yarn test-watch
```

### Updating snapshots

Snapshots can become out of date (for example, after an update was made to any of the `./tokens/*.yml` files), and need to be updated for the test to pass:

```
yarn test -u
```

---

## Editing design tokens

Design tokens source files are in the `./tokens` directory, in YAML format.

Adding, removing, and updating design tokens should be discussed in the issues of this project before contributing to code changes.

---

## Releasing

When releasing a new version, follow these steps on `master`:

1.  Update [CHANGELOG.md](https://github.com/Shopify/polaris-tokens/blob/master/CHANGELOG.md) and commit the changes
2.  Run `yarn version` and assign a new version
3.  Run `git push --follow-tags`
4.  [Deploy on Shipit](https://shipit.shopify.io/shopify/polaris-tokens/production)
