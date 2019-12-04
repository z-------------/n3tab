import Elem from "./elem";

export default abstract class TextElem extends Elem {
    protected text: string;

    constructor(html = "") {
        super();
        this.text = html;
    }

    getContent(): string {
        return this.text;
    }

    setContent(html: string) {
        this.text = html;
        this.element.innerHTML = html;
    }
}
