import SiteCardElem, { SiteInfo } from "./siteCardElem";
import ListElem from "../../lib/elem/listElem";

export default class SiteCardsListElem extends ListElem {
    constructor() {
        super(false);
    }

    push(info: SiteInfo) {
        super.pushElem(new SiteCardElem(info));
    }

    unshift(info: SiteInfo) {
        super.unshiftElem(new SiteCardElem(info));
    }
}
