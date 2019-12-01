import ListElem from "../lib/elem/listElem";
import ClockElem from "./elem/clockElem";
import SiteCardElem from "./elem/siteCardElem";
import WeatherElem from "./elem/weatherElem";
import WidgetElem from "./elem/widgetElem";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("widgets-container");

    new WidgetElem(new WeatherElem(), 1, "Weather").appendTo(container);

    const topSites = await browser.topSites.get();
    const list = new ListElem(false, SiteCardElem);
    for (let info of topSites) {
        list.push(info);
    }
    new WidgetElem(list, 1, "Top Sites").appendTo(container);

    new WidgetElem(new ClockElem(), 1).appendTo(container);
});
