import ClockElem from "./elem/clockElem";
import TopSitesElem from "./elem/topSitesElem";
import WeatherElem from "./elem/weatherElem";
import WidgetElem from "./elem/widgetElem";
import HKRegionalWeatherInfo from "./regionalWeatherInfo/hkRegionalWeatherInfo";

import { fetchIcons } from "../lib/icons";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("widgets-container");

    new WidgetElem(new WeatherElem(), 1, "Weather").appendTo(container);

    new WidgetElem(new TopSitesElem(), 1, "Top Sites").appendTo(container);

    new WidgetElem(new ClockElem(), 1).appendTo(container);

    const hkrwx = new HKRegionalWeatherInfo();
    console.log(await hkrwx.getInfo());

    const icons = await fetchIcons("https://github.com");
    console.log(icons);
});
