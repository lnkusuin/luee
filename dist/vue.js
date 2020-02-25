"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const vue_1 = require("vue");
const _filter_1 = require("~filter");
vue_1.default.prototype.$get = _.get;
vue_1.default.prototype.$has = _.has;
vue_1.default.filter("cut", _filter_1.cut);
vue_1.default.filter("combinationFromArrayToStr", _filter_1.combinationFromArrayToStr);
vue_1.default.filter("minorUnit", _filter_1.minorUnit);
vue_1.default.filter("spaceSplit", _filter_1.spaceSplit);
vue_1.default.filter("dateFormat", _filter_1.dateFormat);
vue_1.default.filter("get", _.get);
vue_1.default.filter("has", _.has);
//# sourceMappingURL=vue.js.map