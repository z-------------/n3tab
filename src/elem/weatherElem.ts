import InterpolateElem from "../../lib/elem/interpolateElem";
import pmx from "../../lib/pmx";

export default class WeatherElem extends InterpolateElem {
    private static REQUEST_URL = "https://nntp-server-redux.netlify.com/.netlify/functions/wx";

    constructor() {
        super(pmx("div", {
            children: [
                pmx("div", { text: "${temperature}°", classList: ["weather_info--temperature"] }),
                pmx("div", { text: "${summary}", classList: ["weather_info--summary"] })
            ]
        }).innerHTML);
        this.element = pmx("div", { classList: ["card", "weather"] });
        this.update();
    }

    private async update() {
        const res = await fetch(WeatherElem.REQUEST_URL);
        const weather = (await res.json()).weather.currently;
        this.setParams({
            temperature: Math.round(weather.temperature),
            summary: weather.summary
        });
    }
}
