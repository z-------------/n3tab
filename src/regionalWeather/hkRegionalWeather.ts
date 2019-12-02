import get from "../../lib/get";
import { parseXML } from "../../lib/parse";
import IRegionalWeather, { ASSETS_PATH, RegionalWeatherInfo } from "./iRegionalWeather";

const FILE_EXT = "svg";

const iconMap = new Map([
    ["yellow fire danger warning", "warning_firey_no_text"],
    ["red fire danger warning", "warning_firer_no_text"],
    ["standby signal, no. 1", "No._01_Standby_Signal"],
    ["strong wind signal, no. 3", "No._03_Strong_Wind_Signal"],
    ["no. 8 northeast gale or storm signal", "No._8_Northeast_Gale_or_Storm_Signal"],
    ["no. 8 northwest gale or storm signal", "No._8_Northwest_Gale_or_Storm_Signal"],
    ["no. 8 southeast gale or storm signal", "No._8_Southeast_Gale_or_Storm_Signal"],
    ["no. 8 southwest gale or storm signal", "No._8_Southwest_Gale_or_Storm_Signal"],
    ["increasing gale or storm signal, no. 9", "No._09_Increasing_Gale_or_Storm_Signal"],
    ["hurricane signal, no. 10", "No._10_Hurricane_Signal"],
    ["amber rainstorm warning signal", "Rainstorm_Amber_no_text"],
    ["red rainstorm warning signal", "Rainstorm_Red_no_text"],
    ["black rainstorm warning signal", "Rainstorm_Black_no_text"],
    ["thunderstorm warning", "Thunderstorm_Warning_no_text"],
    ["special announcement on flooding in northern new territories", "warning_ntfl"],
    ["landslip warning", "Landslip"],
    ["strong monsoon signal", "warning_sms_no_text"],
    ["frost warning", "warning_frost_no_text"],
    ["cold weather warning", "Cold_Weather_Warning_no_text"],
    ["very hot weather warning", "Very_Hot_Weather_Warning_no_text"],
    ["tsunami warning", "warning_tsunami_no_text"],
]);

export default class HKRegionalWeather implements IRegionalWeather {
    private static URL = "https://rss.weather.gov.hk/rss/WeatherWarningSummaryv2.xml";

    async getInfo() {
        const r: RegionalWeatherInfo[] = [];

        const xml = await get(HKRegionalWeather.URL, {
            headers: new Headers({
                "Accept": "text/xml",
            }),
        });
        const doc = parseXML(xml);
        const titleNodes = [].slice.call(doc.querySelectorAll("item > title"));
        if (titleNodes.length === 0) return [];

        for (let titleNode of titleNodes) {
            const titleStr = titleNode.textContent;
            const warningStr = titleStr.substring(0, titleStr.indexOf(" issued"));
            if (!warningStr) continue;

            const warningKey = warningStr.toLowerCase();
            const icon = `${ASSETS_PATH}/hk/${iconMap.get(warningKey)}.${FILE_EXT}`;
            r.push({
                summary: warningStr,
                icon
            });
        }

        return r;
    }
}
