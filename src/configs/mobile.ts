import {Config} from '../types';
import {mergeConfigs} from '../utils';

import {config} from './base';

export const mobileConfig: Config = mergeConfigs(config, {
  surface: [
    {
      name: 'fancy',
      description: 'Fancy pants',
      light: {lightness: 90},
      dark: {lightness: 10},
      meta: {
        figmaName: 'Fancy/Default',
      },
    },
  ],
});
