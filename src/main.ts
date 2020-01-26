import ClockElem from "./elem/clockElem";
import TopSitesElem from "./elem/topSitesElem";
import WeatherElem from "./elem/weatherElem";
import WidgetElem from "./elem/widgetElem";
import LauncherElem from "./elem/launcherElem";
import HKRegionalWeather from "./regionalWeather/hkRegionalWeather";

// import { db } from "./storage";
// import * as util from "./util";

// interface HTMLInputEvent extends Event {
//     target: HTMLInputElement & EventTarget;
// }

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("widgets-container");

    const launcherElem = new LauncherElem([{
        title: "GitHub",
        url: "https://github.com"
    }, {
        title: "YouTube",
        url: "https://youtube.com"
    }, {
        title: "Messenger",
        url: "https://messenger.com"
    }, {
        title: "Google Drive",
        url: "https://drive.google.com"
    }]);
    new WidgetElem(launcherElem, 2).appendTo(container);

    const regionalWeather = new HKRegionalWeather();
    new WidgetElem(new WeatherElem(regionalWeather), 1, "Weather").appendTo(container);

    new WidgetElem(new TopSitesElem(), 1, "Top Sites").appendTo(container);

    new WidgetElem(new ClockElem(), 1).appendTo(container);
});
