import CardElem from "../../lib/elem/cardElem";
import Elem from "../../lib/elem/elem";

export type SiteInfo = browser.topSites.MostVisitedURL;

export default class SiteCardElem extends CardElem {
    private getSimpleURL(url: string) {
        return new URL(url).hostname;
    }

    // TODO: somehow work (domain-specific -> Params) conversion into InterpolateElem
    private processSiteInfo(info: SiteInfo) {
        return {
            heading: info.title ? Elem.escape(info.title) : this.getSimpleURL(info.url),
            body: Elem.escape(info.url)
        };
    }

    constructor(info: SiteInfo) {
        super({}, 2);
        this.element.classList.add("site-card", "card--horizontal");
        this.setParams(this.processSiteInfo(info));
    }
}
