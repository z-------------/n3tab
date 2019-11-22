import SiteCardsListElem from "./elem/siteCardsListElem";
import WidgetElem from "./elem/widgetElem";
import ClockElem from "./elem/clockElem";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("widgets-container");

    const topSites = await browser.topSites.get();
    const list = new SiteCardsListElem();
    for (let info of topSites) {
        list.push(info);
    }
    new WidgetElem(list, 1, "Top Sites").appendTo(container);

    new WidgetElem(new ClockElem(), 1).appendTo(container);
});
