import {ConfigurationCallback} from '@shopify/sewing-kit';

const sewingKitConfig: ConfigurationCallback = () => {
  return {
    name: 'polaris-tokens',
    library: true,
    plugins: [],
  };
};

export default sewingKitConfig;
