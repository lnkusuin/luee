"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inViewport = require("in-viewport");
exports.setComma = {
    bind(el, binding, vnode) {
        el.addEventListener("blur", (e) => {
            let commaValue;
            commaValue = e.target.value.replace(/,/g, "")(e.target).value = commaValue.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            vnode.elm.dispatchEvent(new CustomEvent("input", { detail: true }));
        });
    },
    update(el, binding, vnode) {
        inViewport(el, () => {
            vnode.elm.dispatchEvent(new CustomEvent("input"));
        });
    },
};
//# sourceMappingURL=directive.js.map