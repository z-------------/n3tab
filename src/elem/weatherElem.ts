import InfoElem from "../../lib/elem/infoElem";
import pmx from "../../lib/pmx";
import get, { TIME_HOUR } from "../../lib/get";

type WeatherInfo = {
    temperature: number,
    summary: string,
    icon: string,
    location: [number, number],
}

const ICON_DEFAULT = "na";
const EXTERNAL_URL = "https://darksky.net/forecast";

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
        super([
            {
                href: "${url}",
            },
            pmx("div", {
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
            }).innerHTML
        ]);
        this.element = pmx("a", {
            attrs: {
                target: "_blank",
            },
            classList: ["card", "weather", "plain-anchor"],
        });
        this.setParams({
            url: EXTERNAL_URL,
        });
        this.update();
    }

    setInfo(info: WeatherInfo) {
        this.setParams({
            temperature: Math.round(info.temperature),
            summary: info.summary,
            icon: iconMap.get(info.icon) || ICON_DEFAULT,
            url: `${EXTERNAL_URL}/${info.location[0]},${info.location[1]}`,
        });
    }

    private async update() {
        const res = await get(WeatherElem.REQUEST_URL, {
            json: true,
        });
        const weather = res.weather.currently;
        const location = [res.weather.latitude, res.weather.longitude] as [number, number];
        this.setInfo({
            temperature: weather.temperature,
            summary: weather.summary,
            icon: weather.icon,
            location
        });
    }
}
