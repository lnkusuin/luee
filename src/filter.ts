/**
 * 単体テストを実行できるようにするために、フィルタリング系の関数をここで定義
 */

import * as dayjs from "dayjs";
import 'dayjs/locale/ja';

dayjs.locale('ja');

/**
 * 文字列カット関数
 *
 * @param str
 * @param limit
 * @param decoration
 * @returns {*}
 */
export const cut = (str: string, limit = 20, decoration = "・・・") => {
    if (limit >= str.length) {
        return str;
    }

    return str.substr(0, limit) + decoration;
};

/**
 * 配列からの文字列結合
 *
 * @param list
 * @param key
 * @param decoration
 */
export const combinationFromArrayToStr = (
    list: any[],
    key = "",
    decoration = "/",
) => {
    if (!Array.isArray(list)) {
        return "";
    }

    return list.reduce((x, y, idx) => {
        if (key) {
            return idx === 0 ? y[key] : x + decoration + y[key];
        }

        return idx === 0 ? y : x + decoration + y;
    }, "");
};

/**
 * 通過の計算
 * @param val
 * @param prefix
 * @returns {string}
 */
export const minorUnit = (val: string, prefix = "￥") => {
    if (!val) { return ""; }

    return prefix + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * 指定の文字列を半角スペースで分割し、配列に格納する
 * @param val
 * string[] | string
 */
export const spaceSplit = (val: string): string[] | string => {
    if (!val) { return ""; }

    return val.split(" ");
};

/**
 * 日付のフォーマット
 * @param val
 * @param format
 * @returns {*}
 */
export const dateFormat = (val: string | number, format = "YYYY/MM/DD") => {
    if (!val) { return ""; }

    // unixタイムとかの対応
    if(!isNaN(val as number)){
        val = Number(val);
    }

    const date = dayjs(new Date(val));

    if (date.isValid()) {
        return date.format(format);
    }

    return "";
};
