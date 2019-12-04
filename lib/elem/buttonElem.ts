import pmx from "lib/pmx";
import TextElem from "./textElem";

export default class ButtonElem extends TextElem {
    constructor(html = "") {
        super(html);
        this.element = pmx("button");
        this.setContent(html);
    }

    // signature from standard lib.dom.d.ts
    addEventListener<K extends keyof HTMLElementEventMap>(eventName: K, listener: (this: HTMLElement, e: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void {
        this.element.addEventListener(eventName, listener, options);
    }
}
