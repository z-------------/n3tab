import pmx from "lib/pmx";
import Elem from "./elem";
import InfoElem from "./infoElem";

export default class ListElem extends Elem {
    protected elems: InfoElem[] = [];
    private listElement: HTMLElement;

    constructor(private c: new () => InfoElem, ordered = false) {
        super();
        this.listElement = pmx(ordered ? "ol" : "ul");
        this.element = pmx("div", {
            children: [this.listElement],
        });
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
        this.listElement.appendChild(this.createContainer(elem));
    }

    unshift(info: object) {
        if (this.listElement.children.length > 0) {
            const elem = this.create(info);
            this.listElement.insertBefore(this.createContainer(elem), this.listElement.children[0]);
        } else {
            this.push(info);
        }
    }

    remove(index: number) {
        if (index >= this.elems.length) return;
        const removedElem = this.elems.splice(index, 1)[0];
        const removedElement = removedElem.getElement();
        let liElement;
        for (const element of [].slice.call(this.listElement.children)) {
            if (element.children[0] === removedElement) {
                liElement = element;
                break;
            }
        }
        this.listElement.removeChild(liElement);
    }

    setInfo(index: number, info: object) {
        this.elems[index].setInfo(info);
    }
}
