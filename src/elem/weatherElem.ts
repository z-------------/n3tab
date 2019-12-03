import InfoElem from "../../lib/elem/infoElem";
import pmx from "../../lib/pmx";
import get, { TIME_HOUR } from "../../lib/get";

type WeatherInfo = {
    temperature: number,
    summary: string,
    icon: string,
}

const ICON_DEFAULT = "na";

const iconMap = new Map([
    ["clear-day", "day-sunny"],
    ["clear-night", "night-clear"],
    ["rain", "rain"],
    ["snow", "snow"],
    ["sleet", "sleet"],
    ["wind", "strong-wind"],
    ["fog", "fog"],
    ["cloudy", "cloudy"],
    ["partly-cloudy-day", "day-sunny-overcast"],
    ["partly-cloudy-night", "night-partly-cloudy"],
]);

export default class WeatherElem extends InfoElem {
    private static REQUEST_URL = "https://nntp-server-redux.netlify.com/.netlify/functions/wx";

    constructor() {
        super(pmx("div", {
            children: [
                pmx("div", {
                    classList: ["weather_top"],
                    children: [
                        pmx("i", { classList: ["weather_info--icon", "wi", "wi-${icon}"] }),
                        pmx("div", { text: "${temperature}°", classList: ["weather_info--temperature"] }),
                    ],
                }),
                pmx("div", {
                    classList: ["weather_bottom"],
                    children: [
                        pmx("div", { text: "${summary}", classList: ["weather_info--summary"] }),
                    ],
                }),
            ]
        }).innerHTML);
        this.element = pmx("div", { classList: ["card", "weather"] });
        this.update();
    }

    setInfo(info: WeatherInfo) {
        this.setParams({
            temperature: Math.round(info.temperature),
            summary: info.summary,
            icon: iconMap.get(info.icon) || ICON_DEFAULT,
        });
    }

    private async update() {
        const res = await get(WeatherElem.REQUEST_URL, {
            json: true,
        });
        const weather = res.weather.currently;
        this.setInfo({
            temperature: weather.temperature,
            summary: weather.summary,
            icon: weather.icon,
        });
    }
}
