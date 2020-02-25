# l-vue-filter

<p align="center">
  <a href="https://travis-ci.org/inkusu/l-vue-filter"><img src="https://travis-ci.org/inkusu/l-vue-filter.svg?branch=master" alt="travis"></a>
  <a href="https://codecov.io/gh/inkusu/l-vue-filter"><img src="https://codecov.io/gh/inkusu/l-vue-filter/branch/master/graph/badge.svg" /></a>
  <a href="https://www.npmjs.com/package/l-vue-filter"><img src="https://badgen.net/npm/dm/l-vue-filter" alt="download"></a>
  <a href="https://www.npmjs.com/package/l-vue-filter"><img src="https://badgen.net/npm/v/l-vue-filter" alt="version"></a>
  <a href="https://www.npmjs.com/package/l-vue-filter"><img src="https://badgen.net/npm/license/l-vue-filter" alt="License"></a>
 </p>
 
### install

```bash
npm install --save lue-filter
```

Vue.use でvue フィルターとして使用可能になります。
```javascript
import Vue from "vue"
import VueFilter from "lue-filter"

Vue.use(VueFilter)
```

### 使い方

* [Cutフィルター](https://github.com/inkusu/l-vue-filter/blob/master/src/filter.ts#L15)
* [combinationFromArrayToStrフィルター](https://github.com/inkusu/l-vue-filter/blob/master/src/filter.ts#L30)
* [minorUnitフィルター](https://github.com/inkusu/l-vue-filter/blob/master/src/filter.ts#L54)
* [spaceSplitフィルター](https://github.com/inkusu/l-vue-filter/blob/master/src/filter.ts#L65)
* [dateFormatフィルター](https://github.com/inkusu/l-vue-filter/blob/master/src/filter.ts#L77) 

### Vue filterなしでフィルタリング関数を使用する

```javascript
import {filters} from "lue-filter"

const ret = filters.cut("")

// 処理・・・

```