import pmx from "lib/pmx";
import Elem from "./elem";
import InfoElem from "./infoElem";

export default class ListElem extends Elem {
    private elems: InfoElem[] = [];

    constructor(ordered = false, private c: new () => InfoElem) {
        super();
        this.element = pmx(ordered ? "ol" : "ul");
    }

    // setAll(data: Params[]) {
    //     // TODO: grow or shrink list if lengths don't match
    //     for (let i = 0, l = Math.min(data.length, this.elems.length); i < l; ++i) {
    //         this.elems[i].setParams(data[i]);
    //     }
    // }

    // getAll(): Params[] {
    //     return this.elems.map(elem => elem.getParams());
    // }

    private createContainer(elem: InfoElem) {
        const liElement = document.createElement("li");
        elem.appendTo(liElement);
        return liElement;
    }

    private create(info: object): InfoElem {
        const newItem = new this.c();
        newItem.setInfo(info);
        return newItem;
    }

    push(info: object) {
        const elem = this.create(info);
        this.elems.push(elem);
        this.element.appendChild(this.createContainer(elem));
    }

    unshift(info: object) {
        if (this.element.children.length > 0) {
            const elem = this.create(info);
            this.element.insertBefore(this.createContainer(elem), this.element.children[0]);
        } else {
            this.push(info);
        }
    }

    remove(index: number) {
        if (index >= this.elems.length) return;
        const removedElem = this.elems.splice(index, 1)[0];
        const removedElement = removedElem.getElement();
        let liElement;
        for (const element of [].slice.call(this.element.children)) {
            if (element.children[0] === removedElement) {
                liElement = element;
                break;
            }
        }
        this.element.removeChild(liElement);
    }

    setInfo(index: number, info: object) {
        this.elems[index].setInfo(info);
    }
}
