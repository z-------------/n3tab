export default abstract class Elem {
    protected element: HTMLElement;

    getElement(): HTMLElement {
        return this.element;
    }

    addElem(elem: Elem) {
        this.element.appendChild(elem.getElement());
    }

    appendTo(parentElement: HTMLElement) {
        parentElement.appendChild(this.element);
    }

    appendToHead(parentElement: HTMLElement) {
        if (parentElement.children.length === 0) this.appendTo(parentElement);
        else parentElement.insertBefore(this.element, parentElement.children[0]);
    }
}
