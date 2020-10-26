"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setComma = void 0;
const inViewport = require("in-viewport");
exports.setComma = {
    bind(el, binding, vnode) {
        const target = el.tagName === "INPUT" ? el : el.querySelector("input");
        target.addEventListener("blur", (e) => {
            let commaValue;
            commaValue = e.target.value.replace(/,/g, "");
            e.target.value = commaValue.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
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