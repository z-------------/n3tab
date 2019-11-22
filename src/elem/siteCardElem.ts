import Elem from "../../lib/elem/elem";
import InterpolateElem from "../../lib/elem/interpolateElem";
import pmx from "../../lib/pmx";

export type SiteInfo = browser.topSites.MostVisitedURL;

export default class SiteCardElem extends InterpolateElem {
    private getSimpleURL(url: string) {
        return new URL(url).hostname;
    }

    // TODO: somehow work (domain-specific -> Params) conversion into InterpolateElem
    private processSiteInfo(info: SiteInfo) {
        return {
            heading: info.title ? Elem.escape(info.title) : this.getSimpleURL(info.url),
            // body: Elem.escape(info.url)
        };
    }

    constructor(info: SiteInfo) {
        super("<span>${heading}</span>");
        this.element = pmx("a", {
            classList: ["chip", "plain-anchor"],
            attrs: {
                href: info.url,
                title: info.url
            }
        });
        this.setParams(this.processSiteInfo(info));
    }
}
