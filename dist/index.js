"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = require("moment");
exports.cut = function (str, limit = 20, decoration = '・・・') {
    if (limit >= str.length) {
        return str;
    }
    return str.substr(0, limit) + decoration;
};
exports.combinationFromArrayToStr = function (list, key = '', decoration = '/') {
    if (!Array.isArray(list)) {
        return '';
    }
    return list.reduce((x, y, idx) => {
        if (key) {
            return idx === 0 ? y[key] : x + decoration + y[key];
        }
        return idx === 0 ? y : x + decoration + y;
    }, '');
};
exports.minorUnit = function (val, prefix = '￥') {
    if (!val)
        return '';
    return prefix + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
exports.spaceSplit = function (val) {
    if (!val)
        return '';
    return val.split(' ');
};
exports.dateFormat = function (val, format = 'YYYY/MM/DD') {
    if (!val)
        return '';
    let date = moment_1.default(new Date(val));
    if (date.isValid()) {
        return date.format(format);
    }
    return '';
};
//# sourceMappingURL=index.js.map