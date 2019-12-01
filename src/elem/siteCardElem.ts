import Elem from "../../lib/elem/elem";
import InfoElem from "../../lib/elem/infoElem";
import pmx from "../../lib/pmx";

export type SiteInfo = browser.topSites.MostVisitedURL;

export default class SiteCardElem extends InfoElem {
    constructor() {
        super([
            {
                href: "${url}",
                title: "${tooltip}",
            },
            "<span>${heading}</span>",
        ]);
        this.element = pmx("a", {
            classList: ["chip", "plain-anchor"]
        });
    }

    setInfo(info: SiteInfo) {
        this.setParams({
            url: info.url,
            tooltip: info.url,
            heading: info.title ? Elem.escape(info.title) : this.getSimpleURL(info.url),
        });
    }

    private getSimpleURL(url: string) {
        return new URL(url).hostname;
    }
}
