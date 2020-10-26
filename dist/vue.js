"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VueDirective = exports.VueFilter = void 0;
const lodash_has_1 = require("lodash.has");
const lodash_get_1 = require("lodash.get");
const filter_1 = require("./filter");
const directive_1 = require("./directive");
exports.VueFilter = {
    install: (Vue, options) => {
        Vue.prototype.$get = lodash_get_1.default;
        Vue.prototype.$has = lodash_has_1.default;
        Vue.filter("cut", filter_1.cut);
        Vue.filter("combinationFromArrayToStr", filter_1.combinationFromArrayToStr);
        Vue.filter("minorUnit", filter_1.minorUnit);
        Vue.filter("spaceSplit", filter_1.spaceSplit);
        Vue.filter("dateFormat", filter_1.dateFormat);
        Vue.filter("get", lodash_get_1.default);
        Vue.filter("has", lodash_has_1.default);
    },
};
exports.VueDirective = {
    install: (Vue, options) => {
        Vue.directive("set-comma", directive_1.setComma);
    },
};
//# sourceMappingURL=vue.js.map