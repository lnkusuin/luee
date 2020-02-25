/**
 * 単体テストを実行できるようにするために、フィルタリング系の関数をここで定義
 */

import * as moment from 'moment'

/**
 * 文字列カット関数
 *
 * @param str
 * @param limit
 * @param decoration
 * @returns {*}
 */
export const cut = function(str: string, limit = 20, decoration = '・・・') {
    if (limit >= str.length) {
        return str
    }

    return str.substr(0, limit) + decoration
}

/**
 * 配列からの文字列結合
 *
 * @param list
 * @param key
 * @param decoration
 */
export const combinationFromArrayToStr = function(
    list: any[],
    key = '',
    decoration = '/'
) {
    if (!Array.isArray(list)) {
        return ''
    }

    return list.reduce((x, y, idx) => {
        if (key) {
            return idx === 0 ? y[key] : x + decoration + y[key]
        }

        return idx === 0 ? y : x + decoration + y
    }, '')
}

/**
 * 通過の計算
 * @param val
 * @param prefix
 * @returns {string}
 */
export const minorUnit = function(val: string, prefix = '￥') {
    if (!val) return ''

    return prefix + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 *
 * @param val
 * @returns {*}
 */
export const spaceSplit = function(val: string) {
    if (!val) return ''

    return val.split(' ')
}

/**
 * 日付のフォーマット
 * @param val
 * @param format
 * @returns {*}
 */
export const dateFormat = function(val: string, format = 'YYYY/MM/DD') {
    if (!val) return ''
    // 日付不正時のmomentの警告対策のため、一度Dateインスタンス化
    let date = moment(new Date(val))

    if (date.isValid()) {
        return date.format(format)
    }

    return ''
}
