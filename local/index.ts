const assert = require('assert').strict;

import * as Vue from 'vue'
import VueFilter, {filters} from "./../dist"

// 読み込めてることを確認
// @ts-ignore
Vue.use(VueFilter)
assert.equal(true, true)


// 関数が読み込めているか確認
assert.notEqual(filters.cut, undefined)