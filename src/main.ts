import ClockElem from "./elem/clockElem";
import TopSitesElem from "./elem/topSitesElem";
import WeatherElem from "./elem/weatherElem";
import WidgetElem from "./elem/widgetElem";
import LauncherElem from "./elem/launcherElem";
import HKRegionalWeatherInfo from "./regionalWeatherInfo/hkRegionalWeatherInfo";

import { fetchIcons } from "../lib/icons";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("widgets-container");

    const launcherElem = new LauncherElem([{
        title: "GitHub",
        url: "https://github.com"
    }, {
        title: "YouTube",
        url: "https://youtube.com"
    }]);
    new WidgetElem(launcherElem, 2).appendTo(container);

    new WidgetElem(new WeatherElem(), 1, "Weather").appendTo(container);

    new WidgetElem(new TopSitesElem(), 1, "Top Sites").appendTo(container);

    new WidgetElem(new ClockElem(), 1).appendTo(container);

    const hkrwx = new HKRegionalWeatherInfo();
    console.log(await hkrwx.getInfo());
});
