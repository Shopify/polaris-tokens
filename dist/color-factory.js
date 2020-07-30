"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorFactory = void 0;
const tslib_1 = require("tslib");
const hsluv_1 = require("hsluv");
const base_1 = require("./configs/base");
function colorFactory(theme, scheme, config = base_1.config) {
    return Object.assign({}, ...Object.entries(theme).map(([role, hex]) => {
        if (typeof hex !== 'string') {
            return null;
        }
        const base = hsluv_1.hexToHsluv(hex);
        const variants = config[role] || [];
        return Object.assign({}, variants.reduce((accumulator, _a) => {
            var { name } = _a, settings = tslib_1.__rest(_a, ["name"]);
            const { hue = base[0], saturation = base[1], lightness = base[2], alpha = 1, } = settings[scheme];
            const resolve = (value, baseToResolve) => {
                return typeof value === 'number' ? value : value(baseToResolve);
            };
            const [red, green, blue] = hsluv_1.hsluvToRgb([
                resolve(hue, base[0]),
                resolve(saturation, base[1]),
                resolve(lightness, base[2]),
            ]).map((channel) => Math.round(channel * 255));
            return Object.assign(Object.assign({}, accumulator), { [name]: `rgba(${red}, ${green}, ${blue}, ${alpha})` });
        }, {}));
    }));
}
exports.colorFactory = colorFactory;
