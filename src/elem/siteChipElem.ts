import InfoElem from "lib/elem/infoElem";
import pmx from "lib/pmx";
import { escape } from "lib/html";

export type SiteInfo = browser.topSites.MostVisitedURL;

export default class SiteChipElem extends InfoElem {
    constructor() {
        super(pmx("a", {
            attrs: {
                href: "${url}",
                title: "${tooltip}",
            },
            classList: ["chip", "plain-anchor"],
            children: [
                pmx("span", { text: "${heading}" }),
            ],
        }));
    }

    processInfo(info: SiteInfo) {
        this.setParams({
            url: info.url,
            tooltip: info.url,
            heading: info.title ? escape(info.title) : this.getSimpleURL(info.url),
        });
    }

    private getSimpleURL(url: string) {
        return new URL(url).hostname;
    }
}
