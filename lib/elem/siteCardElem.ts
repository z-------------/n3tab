import CardElem from "./cardElem";
import Elem from "./elem";

type SiteInfo = browser.topSites.MostVisitedURL;

export default class SiteCardElem extends CardElem {
    private processSiteInfo(info: SiteInfo) {
        return {
            heading: Elem.escape(info.title),
            body: Elem.escape(info.url)
        };
    }

    constructor(info: SiteInfo) {
        super({}, 2);
        this.element.classList.add("site-card");
        this.setParams(this.processSiteInfo(info));
    }
}
