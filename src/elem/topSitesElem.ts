import ListElem from "lib/elem/listElem";
import SiteCardElem from "./siteCardElem";
import Widgetable from "./widgetable";

export default class TopSitesElem extends ListElem implements Widgetable {
    constructor() {
        super(true, SiteCardElem);
        this.initialize();
    }

    private async initialize() {
        const topSites = await browser.topSites.get();
        for (const info of topSites) {
            this.push(info);
        }
    }

    getIcon() {
        return "";
    }
}
