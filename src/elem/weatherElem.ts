import InfoElem from "../../lib/elem/infoElem";
import pmx from "../../lib/pmx";
import get from "../../lib/get";
import IHideableElem from "./iSoftHideableElem";

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

export default class WeatherElem extends InfoElem implements IHideableElem {
    private static REQUEST_URL = "https://nntp-server-redux.netlify.com/.netlify/functions/wx";

    constructor() {
        super(pmx("a", {
            attrs: {
                target: "_blank",
                href: "${url}",
            },
            classList: ["card", "weather", "plain-anchor"],
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
        }));

        this.setParams({
            url: EXTERNAL_URL,
        });
        this.hide();
        this.update().then(() => {
            this.show()
        });
    }

    setInfo(info: WeatherInfo) {
        this.setParams({
            temperature: Math.round(info.temperature),
            summary: info.summary,
            icon: iconMap.get(info.icon) || ICON_DEFAULT,
            url: `${EXTERNAL_URL}/${info.location[0]},${info.location[1]}`,
        });
    }

    hide() {
        this.element.style.color = "white";
    }

    show() {
        this.element.style.color = null;
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
