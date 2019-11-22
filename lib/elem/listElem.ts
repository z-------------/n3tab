import pmx from "../../lib/pmx";
import Elem from "./elem";
import InterpolateElem, { Params } from "./interpolateElem";

export default abstract class ListElem extends Elem {
    private elems: InterpolateElem[] = [];

    constructor(ordered: boolean = false) {
        super();
        this.element = pmx(ordered ? "ol" : "ul");
    }

    // setAll(data: Params[]) {
    //     // TODO: grow or shrink list if lengths don't match
    //     for (let i = 0, l = Math.min(data.length, this.elems.length); i < l; ++i) {
    //         this.elems[i].setParams(data[i]);
    //     }
    // }

    getAll(): Params[] {
        return this.elems.map(elem => elem.getParams());
    }

    protected pushElem(elem: InterpolateElem) {
        this.elems.push(elem);
        elem.appendTo(this.element);
    }

    protected unshiftElem(elem: InterpolateElem) {
        this.elems.unshift(elem);
        elem.appendToHead(this.element);
    }

    abstract push(o: object): void;

    abstract unshift(o: object): void;

    remove(index: number) {
        const removedElem = this.elems.splice(index, 1)[0];
        if (!removedElem) return;
        this.element.removeChild(removedElem.getElement());
    }

    // set(index: number, datum: Params) {
    //     this.elems[index].setParams(datum);
    // }
}
