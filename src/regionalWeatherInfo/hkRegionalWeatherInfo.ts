import get from "../../lib/get";
import { parseXML } from "../../lib/parse";
import IRegionalWeatherInfo, { ASSETS_PATH } from "./iRegionalWeatherInfo";

const iconMap = new Map([
    ["yellow fire danger warning", "warning_firey"],
    ["red fire danger warning", "warning_firer"],
    ["standby signal, no. 1", "No._01_Standby_Signal"],
    ["strong wind signal, no. 3", "No._03_Strong_Wind_Signal"],
    ["no. 8 northeast gale or storm signal", "No._8_Northeast_Gale_or_Storm_Signal"],
    ["no. 8 northwest gale or storm signal", "No._8_Northwest_Gale_or_Storm_Signal"],
    ["no. 8 southeast gale or storm signal", "No._8_Southeast_Gale_or_Storm_Signal"],
    ["no. 8 southwest gale or storm signal", "No._8_Southwest_Gale_or_Storm_Signal"],
    ["increasing gale or storm signal, no. 9", "No._09_Increasing_Gale_or_Storm_Signal"],
    ["hurricane signal, no. 10", "No._10_Hurricane_Signal"],
    ["amber rainstorm warning signal", "Rainstorm_Amber"],
    ["red rainstorm warning signal", "Rainstorm_Red"],
    ["black rainstorm warning signal", "Rainstorm_Black"],
    ["thunderstorm warning", "Thunderstorm_Warning"],
    ["special announcement on flooding in northern new territories", "warning_ntfl"],
    ["landslip warning", "Landslip"],
    ["strong monsoon signal", "warning_sms"],
    ["frost warning", "warning_frost"],
    ["cold weather warning", "Cold_Weather_Warning"],
    ["very hot weather warning", "Very_Hot_Weather_Warning"],
    ["tsunami warning", "warning_tsunami_warn"],
]);

export default class HKRegionalWeatherInfo implements IRegionalWeatherInfo {
    private static URL = "https://rss.weather.gov.hk/rss/WeatherWarningSummaryv2.xml";

    async getInfo() {
        const xml = await get(HKRegionalWeatherInfo.URL, {
            headers: new Headers({
                "Accept": "text/xml",
            }),
        });
        const doc = parseXML(xml);
        const titleStr = doc.querySelector("item:first-of-type > title").textContent;
        const warningStr = titleStr.substring(0, titleStr.indexOf(" issued"));
        const warningKey = warningStr.toLowerCase();
        const icon = `${ASSETS_PATH}/hk/${iconMap.get(warningKey)}.png`;
        return {
            summary: warningStr,
            icon
        };
    }
}
