import * as _ from "lodash";
import {
    combinationFromArrayToStr,
    cut,
    dateFormat,
    minorUnit,
    spaceSplit,
} from "./filter";

import {
    setComma,
} from "./directive";

export const VueFilter = {
    install: (Vue: any, options: any) => {
        // FIXME tsで?演算子使えるのでいらないかも
        Vue.prototype.$get = _.get;
        Vue.prototype.$has = _.has;

        Vue.filter("cut", cut);
        Vue.filter("combinationFromArrayToStr", combinationFromArrayToStr);
        Vue.filter("minorUnit", minorUnit);
        Vue.filter("spaceSplit", spaceSplit);
        Vue.filter("dateFormat", dateFormat);
        Vue.filter("get", _.get);
        Vue.filter("has", _.has);
    },
};

export const VueDirective = {
    install: (Vue: any, options: any) => {
        Vue.filter("set-comma", setComma);
    },
};
