import SiteCardsListElem from "./elem/siteCardsListElem";

document.addEventListener("DOMContentLoaded", async () => {
    const topSites = await browser.topSites.get();
    const list = new SiteCardsListElem();
    for (let info of topSites) {
        list.push(info);
    }
    list.appendTo(document.body);
});
