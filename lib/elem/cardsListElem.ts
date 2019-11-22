import CardElem from "./cardElem";
import { Params } from "./interpolateElem";
import ListElem from "./listElem";

export default class CardsListElem extends ListElem {
    private headingLevel: number;

    constructor(headingLevel: number = 2) {
        super(false);
        this.headingLevel = headingLevel;
    }

    push(datum: Params) {
        super.pushElem(new CardElem(datum, this.headingLevel));
    }

    unshift(datum: Params) {
        super.unshiftElem(new CardElem(datum, this.headingLevel));
    }
}
