import pmx from "../../lib/pmx";
import TextElem from "./textElem";

export default class ParagraphElem extends TextElem {
    constructor(html: string) {
        super(html);
        this.element = pmx("p", {
            html: html
        });
    }
}
