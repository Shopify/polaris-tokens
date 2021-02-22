import {readdirSync} from 'fs';
import {join} from 'path';

import {Config, Variant} from './types';

describe('configs', () => {
  const configsPath = join(__dirname, 'configs');
  const configFileNames = readdirSync(configsPath);

  it.each(configFileNames)('%s', (configFileName) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const config: Config = require(`configs/${configFileName}`).config;
    const variantsByFigmaName: Record<
      string,
      {property: string; variant: Variant}
    > = {};

    for (const [property, variants] of Object.entries(config)) {
      for (const variant of variants) {
        const figmaName = variant.meta?.figmaName;

        if (figmaName === undefined) {
          continue;
        }

        if (figmaName in variantsByFigmaName) {
          const otherVariantUsingThisName = variantsByFigmaName[figmaName];
          const errorMessage =
            `property "${property}" variant "${variant.name}" ` +
            `uses non-unique figmaName "${figmaName}", also used by ` +
            `property "${otherVariantUsingThisName.property}" variant "${otherVariantUsingThisName.variant.name}"`;
          throw new Error(errorMessage);
        }

        variantsByFigmaName[figmaName] = {property, variant};
      }
    }
  });
});
