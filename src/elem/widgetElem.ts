import Elem from "lib/elem/elem";
import HeadingElem from "lib/elem/headingElem";
import pmx from "lib/pmx";
import { escape } from "lib/html";
import Widgetable from "./widgetable";

export default class WidgetElem extends Elem {
    constructor(private child: Elem & Widgetable, private size: 1 | 2, private title: string = "") {
        super();
        this.element = pmx("section", { classList: ["widget", `widget--width-${this.size}`] });
        child.appendTo(this.element);
        new HeadingElem(2, escape(title)).appendToHead(this.element);
    }

    getIcon() {
        return this.child.getIcon();
    }
}
