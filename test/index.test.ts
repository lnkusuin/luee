/* eslint-env jest */

import {
    cut,
    combinationFromArrayToStr,
    minorUnit,
    spaceSplit,
    dateFormat
} from '../src/filter'

describe('フィルター関数の動作確認', () => {
    test('cut - 20文字で正しくカットされているか確認を行う', async () => {
        const str = 'あいうえおかきくけこさしすせそたちつてと'
        const ret = cut(str)

        expect(ret).toEqual(str)
    })

    test('cut - 21文字以上でカットされているか確認を行う', async () => {
        const cutstr = 'あいうえおかきくけこさしすせそたちつてと・・・'

        const str = 'あいうえおかきくけこさしすせそたちつてとな'
        const ret = cut(str)

        expect(ret).toEqual(cutstr)
    })

    test('combinationFromArrayToStr - キーを指定しない形で動作を確認', async () => {
        const list = [
            '佐藤', '鈴木', '加藤'
        ]
        const ret = combinationFromArrayToStr(list)

        expect(ret).toEqual('佐藤/鈴木/加藤')
    })

    test('combinationFromArrayToStr - キーを指定した形で動作を確認', async () => {
        const list = [
            { name: '佐藤' },
            { name: '鈴木' },
            { name: '加藤' }
        ]
        const ret = combinationFromArrayToStr(list, 'name')

        expect(ret).toEqual('佐藤/鈴木/加藤')
    })

    test('combinationFromArrayToStr - 配列以外を与えた場合に空文字を返すことを確認', async () => {
        const list = {}

        const ret = combinationFromArrayToStr(list as any)

        expect(ret).toEqual('')
    })

    test('minorUnit - 通過計算ができていることを確認', async () => {
        const yen = '1234567890'

        const ret = minorUnit(yen)

        expect(ret).toEqual('￥1,234,567,890')

        const ret2 = minorUnit(yen, '-')
        expect(ret2).toEqual('-1,234,567,890')
    })

    test('minorUnit - 値が空なら空の値を返すことを確認', () => {
        const ret = minorUnit('')

        expect(ret).toEqual('')
    })

    test('spaceSplit - 値が空なら空の値を返すことを確認', () => {
        const ret = spaceSplit('')

        expect(ret).toEqual('')
    })

    test('spaceSplit - 値がある場合に空白文字で配列に分割されていることを確認', () => {
        const ret = spaceSplit('あい うえお')

        expect(ret).toEqual(['あい', 'うえお'])
    })

    test('dateFormat - 空データを与えた場合に空文字を返すことを確認', async () => {
        const date = ""
        const ret = dateFormat(date)

        expect(ret).toEqual('')
    })

    test('dateFormat - 日付以外を与えた場合に空文字を返すことを確認', async () => {
        const date = 'あいうえお'
        const ret = dateFormat(date)

        expect(ret).toEqual('')
    })

    test('dateFormat - 日付フォーマット変換ができていることを確認', async () => {
        const date = '2018-09-01T12:34:50+09:00'
        const ret = dateFormat(date)

        expect(ret).toEqual('2018/09/01')
    })

    test('dateFormat - 日付フォーマットにミリセカンド与えた時に変換ができていることを確認', async () => {
        const date = 1583984201921
        const ret = dateFormat(date)

        expect(ret).toEqual('2020/03/12')
    })
})
