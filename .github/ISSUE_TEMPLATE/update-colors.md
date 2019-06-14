🎨 Colors were updated in the [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1HzVgcxnnOCeB2zI46gcSd5fPFUJ2R03CSldx_SKQQwA/edit#gid=0), please update this repository!

### Changes

<!-- Describe what this update should do -->

### Follow these steps

- [ ] If you haven’t yet, clone this repository
  ```
  dev clone polaris-tokens
  dev up
  ```
- [ ] Fetch tokens from Google Spreadsheets
  ```
  dev cd polaris-tokens
  git checkout master
  git pull
  git checkout -B update-color-tokens
  yarn get-tokens-from-google-spreadsheets
  yarn dist
  yarn test -u
  ```
- [ ] Update `CHANGELOG.md`
- [ ] Commit & push the changes
  ```
  git commit -am "Update color tokens to the latest version"
  git push origin update-color-tokens
  ```
- [ ] [Open a pull request][pr-link]

[pr-link]: https://github.com/Shopify/polaris-tokens/compare/master...update-color-tokens?expand=1&title=Update%20color%20tokens&body=Fixes%20%23XXX%20%3C!--%20replace%20XXX%20with%20the%20id%20of%20the%20original%20issue%20--%3E&assignees=kaelig,tmlayton,alex-page
