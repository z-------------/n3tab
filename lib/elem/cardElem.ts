import pmx from "../../lib/pmx";
import InterpolateElem, { Params } from "./interpolateElem";

export default class CardElem extends InterpolateElem {
    constructor(params: Params, headingLevel: number = 2) {
        const headingTag = `h${headingLevel}`;
        super(`<${headingTag}>\${heading}</${headingTag}><p>\${body}<p>`);
        this.element = pmx("div", { classList: ["card"] });
        this.setParams(params);
    }
}
