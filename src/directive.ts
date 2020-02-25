// tslint:disable-next-line:no-var-requires
const inViewport = require("in-viewport");

/**
 * 自動でカンマを追加する
 */
export const setComma = {
    bind(el: any, binding: any, vnode: any) {
        el.addEventListener("blur", (e: any) => {

            let commaValue: string;
            // @ts-ignore
            commaValue = (e.target as HTMLTextAreaElement).value.replace(/,/g, "")
                // @ts-ignore
                (e.target as HTMLTextAreaElement).value = commaValue.replace(
                /(\d)(?=(\d\d\d)+(?!\d))/g,
                "$1,",
            );
            vnode.elm.dispatchEvent(new CustomEvent("input", { detail: true }));
        });
    },

    update(el: any, binding: any, vnode: any) {
        // @ts-ignore
        inViewport(el, () => {
            vnode.elm.dispatchEvent(new CustomEvent("input"));
        });
    },
};
