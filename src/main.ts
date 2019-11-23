import SiteCardsListElem from "./elem/siteCardsListElem";
import WidgetElem from "./elem/widgetElem";
import ClockElem from "./elem/clockElem";
import WeatherElem from "./elem/weatherElem";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("widgets-container");

    new WidgetElem(new WeatherElem(), 1, "Weather").appendTo(container);

    const topSites = await browser.topSites.get();
    const list = new SiteCardsListElem();
    for (let info of topSites) {
        list.push(info);
    }
    new WidgetElem(list, 1, "Top Sites").appendTo(container);

    new WidgetElem(new ClockElem(), 1).appendTo(container);
});
