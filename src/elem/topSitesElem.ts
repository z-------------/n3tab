import ListElem from "../../lib/elem/listElem";
import SiteCardElem from "./siteCardElem";

export default class TopSitesElem extends ListElem {
    constructor() {
        super(true, SiteCardElem);
        this.initialize();
    }

    private async initialize() {
        const topSites = await browser.topSites.get();
        for (let info of topSites) {
            this.push(info);
        }
    }
}
