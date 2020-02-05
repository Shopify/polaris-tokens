import {Config} from './types';

export function hueRotationFn(rotation: number) {
  return (hue: number) => (360 + hue + rotation) % 360;
}

export function saturationAdjustmentFn(adjustment: number) {
  return (saturation: number) =>
    Math.min(Math.max(saturation + adjustment, 0), 100);
}

// TODO: type data
export function tokensToJson(data: any) {
  return data.toJS().props.reduce(
    (accumulator: any, prop: any) => ({
      ...accumulator,
      [prop.name]: prop.originalValue,
    }),
    {},
  );
}

export function mergeConfigs(base: Config, extended: Config) {
  return Object.entries(base).reduce((accumulator, [role, variants]) => {
    const extendedVariants = extended[role];
    const mergedVariants = variants;

    if (extendedVariants != null) {
      extendedVariants.forEach((variant) => {
        const {name} = variant;
        const indexToReplace = mergedVariants.findIndex(
          (baseVariant) => baseVariant.name === name,
        );

        if (indexToReplace === -1) {
          mergedVariants.push(variant);
        } else {
          mergedVariants.splice(indexToReplace, 1, variant);
        }
      });
    }

    return {
      ...accumulator,
      [role]: mergedVariants,
    };
  }, {});
}
