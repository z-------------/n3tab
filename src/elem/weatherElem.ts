import InterpolateElem, { Params } from "../../lib/elem/interpolateElem";
import InfoElem from "../../lib/elem/infoElem";
import pmx from "../../lib/pmx";

type WeatherInfo = {
    temperature: number,
    summary: string
}

export default class WeatherElem extends InfoElem {
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

    setInfo(info: WeatherInfo) {
        this.setParams({
            temperature: Math.round(info.temperature),
            summary: info.summary
        });
    }

    private async update() {
        const res = await fetch(WeatherElem.REQUEST_URL);
        const weather = (await res.json()).weather.currently;
        this.setInfo({
            temperature: weather.temperature,
            summary: weather.summary
        });
    }
}
