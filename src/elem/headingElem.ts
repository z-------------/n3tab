import pmx from "../../lib/pmx";
import TextElem from "./textElem";

export default class HeadingElem extends TextElem {
    constructor(level: number, html: string) {
        if (level < 0 || level > 6) throw new RangeError("'level' parameter must be in range [0, 6].");
        super(html);
        this.element = pmx(`h${level}`, {
            html: html
        });
    }
}
