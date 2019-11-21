import pmx from "../../lib/pmx";
import TextElem from "./textElem";

export default class ButtonElem extends TextElem {
    constructor(html: string = "") {
        super(html);
        this.element = pmx("button");
        this.setContent(html);
    }

    // TODO: find a way to wrap a call to addEventListener
}
