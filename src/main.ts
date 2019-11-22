import SiteCardElem from "../lib/elem/siteCardElem";

document.addEventListener("DOMContentLoaded", async () => {
    const topSites = await browser.topSites.get();
    for (let info of topSites) {
        const card = new SiteCardElem(info);
        card.appendTo(document.body);
    }
});
