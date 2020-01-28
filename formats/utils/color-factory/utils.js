function hueRotationFn(rotation) {
  return (hue) => (360 + hue + rotation) % 360;
}

function saturationAdjustmentFn(adjustment) {
  return (saturation) => Math.min(Math.max(saturation + adjustment, 0), 100);
}

function tokensToJson(data) {
  return data.toJS().props.reduce(
    (accumulator, prop) => ({
      ...accumulator,
      [prop.name]: prop.originalValue,
    }),
    {},
  );
}

function mergeConfigs(base, extended) {
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

module.exports = {
  tokensToJson,
  hueRotationFn,
  saturationAdjustmentFn,
  mergeConfigs,
};
