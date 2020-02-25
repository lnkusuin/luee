// Vue フィルター置き場
import Vue from 'vue'
import * as _ from 'lodash'
import {
    cut,
    combinationFromArrayToStr,
    minorUnit,
    spaceSplit,
    dateFormat
} from '~filter'

// FIXME tsで?演算子使えるのでいらないかも
Vue.prototype.$get = _.get
Vue.prototype.$has = _.has

Vue.filter('cut', cut)
Vue.filter('combinationFromArrayToStr', combinationFromArrayToStr)
Vue.filter('minorUnit', minorUnit)
Vue.filter('spaceSplit', spaceSplit)
Vue.filter('dateFormat', dateFormat)
Vue.filter('get', _.get)
Vue.filter('has', _.has)
