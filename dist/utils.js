"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeConfigs = exports.saturationAdjustmentFn = exports.hueRotationFn = void 0;
function hueRotationFn(rotation) {
    return (hue) => (360 + hue + rotation) % 360;
}
exports.hueRotationFn = hueRotationFn;
function saturationAdjustmentFn(adjustment) {
    return (saturation) => Math.min(Math.max(saturation + adjustment, 0), 100);
}
exports.saturationAdjustmentFn = saturationAdjustmentFn;
function mergeConfigs(base, extended) {
    return Object.entries(base).reduce((accumulator, [role, variants]) => {
        const extendedVariants = extended[role];
        const mergedVariants = variants;
        if (extendedVariants != null) {
            extendedVariants.forEach((variant) => {
                const { name } = variant;
                const indexToReplace = mergedVariants.findIndex((baseVariant) => baseVariant.name === name);
                if (indexToReplace === -1) {
                    mergedVariants.push(variant);
                }
                else {
                    mergedVariants.splice(indexToReplace, 1, variant);
                }
            });
        }
        return Object.assign(Object.assign({}, accumulator), { [role]: mergedVariants });
    }, {});
}
exports.mergeConfigs = mergeConfigs;
