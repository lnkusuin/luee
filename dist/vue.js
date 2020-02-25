"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const filter_1 = require("./filter");
exports.default = {
    install: (Vue, options) => {
        Vue.prototype.$get = _.get;
        Vue.prototype.$has = _.has;
        Vue.filter("cut", filter_1.cut);
        Vue.filter("combinationFromArrayToStr", filter_1.combinationFromArrayToStr);
        Vue.filter("minorUnit", filter_1.minorUnit);
        Vue.filter("spaceSplit", filter_1.spaceSplit);
        Vue.filter("dateFormat", filter_1.dateFormat);
        Vue.filter("get", _.get);
        Vue.filter("has", _.has);
    },
};
//# sourceMappingURL=vue.js.map