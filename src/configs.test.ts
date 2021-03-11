import {readdirSync} from 'fs';
import {join} from 'path';

import {Config, Variant} from './types';

describe('configs', () => {
  const configsPath = join(__dirname, 'configs');
  const configFileNames = readdirSync(configsPath);

  describe.each(configFileNames)('%s', (configFileName) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const config: Config = require(`configs/${configFileName}`).config;

    describe.each(Object.entries(config))('property "%s"', (_, variants) => {
      const variantsByName = variants.map(({name}, index) => [
        name,
        variants[index],
      ]);
      it.each(variantsByName)(
        'variant "%s" must use a unique Figma name',
        (_, variant) => {
          try {
            expect(variant).toUseUniqueFigmaName(config);
          } catch (error) {
            // Override stack trace to show problematic file path instead of test file
            error.stack = `at src/configs/${configFileName}`;
            throw error;
          }
        },
      );
    });
  });
});

expect.extend({
  toUseUniqueFigmaName(variant: Variant, config: Config) {
    if (this.isNot === true) {
      throw new Error('.not is not supported');
    }

    const figmaName = variant.meta?.figmaName;
    if (figmaName === undefined) {
      return {
        message: () => `variant ${variant.name} has no Figma name`,
        pass: true,
      };
    }

    // Get all variants using this Figma name, including the current variant
    // eslint-disable-next-line @typescript-eslint/ban-types
    const variantsUsingFigmaName: Array<{
      property: string;
      variant: Variant;
    }> = [];
    for (const [property, variants] of Object.entries(config)) {
      for (const variantForComparison of variants) {
        if (figmaName === variantForComparison.meta?.figmaName) {
          variantsUsingFigmaName.push({
            property,
            variant: variantForComparison,
          });
        }
      }
    }

    // Build an informative message for troubleshooting purposes
    const variantsOutput = variantsUsingFigmaName
      .map(
        ({property, variant}) =>
          `- property "${property}" variant "${variant.name}"\n` +
          `${JSON.stringify(variant, null, 2)}`,
      )
      .join('\n');

    return {
      // There should only be a single variant using this Figma name
      pass: variantsUsingFigmaName.length === 1,
      message: () => `${this.utils.matcherHint(
        'toUseUniqueFigmaName',
        'variant',
        'config',
      )}

Duplicate Figma name "${figmaName}" found in variants:
${variantsOutput}
`,
    };
  },
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toUseUniqueFigmaName(config: Config): R;
    }
  }
}
