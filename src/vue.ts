// @ts-ignore
import has from "lodash.has";
// @ts-ignore
import get from "lodash.get";
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
        Vue.prototype.$get = get;
        Vue.prototype.$has = has;

        Vue.filter("cut", cut);
        Vue.filter("combinationFromArrayToStr", combinationFromArrayToStr);
        Vue.filter("minorUnit", minorUnit);
        Vue.filter("spaceSplit", spaceSplit);
        Vue.filter("dateFormat", dateFormat);
        Vue.filter("get", get);
        Vue.filter("has", has);
    },
};

export const VueDirective = {
    install: (Vue: any, options: any) => {
        Vue.directive("set-comma", setComma);
    },
};
