import pmx from "../../lib/pmx";
import Elem from "./elem";
import { Params } from "./interpolateElem";
import InfoElem from "./infoElem";

export default class ListElem<T extends InfoElem> extends Elem {
    private elems: InfoElem[] = [];

    constructor(ordered: boolean = false, private c: new () => T) {
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

    push(info: object): void {
        const newItem = new this.c();
        newItem.setInfo(info);
        this.elems.push(newItem);

        const liElement = document.createElement("li");
        newItem.appendTo(liElement);
        this.element.appendChild(liElement);
    }

    // unshift(o: object): void;

    // remove(index: number) {
    //     const removedElem = this.elems.splice(index, 1)[0];
    //     if (!removedElem) return;
    //     this.element.removeChild(removedElem.getElement());
    // }

    // set(index: number, datum: Params) {
    //     this.elems[index].setParams(datum);
    // }
}
