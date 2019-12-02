import get from "../../lib/get";
import { parseXML } from "../../lib/parse";
import IRegionalWeather, { RegionalWeatherInfo } from "./iRegionalWeather";

const feedsMap = new Map([
    ["nsw", "http://www.bom.gov.au/fwo/IDZ00054.warnings_nsw.xml"],
    ["vic", "http://www.bom.gov.au/fwo/IDZ00059.warnings_vic.xml"],
    ["qld", "http://www.bom.gov.au/fwo/IDZ00056.warnings_qld.xml"],
    ["wa",  "http://www.bom.gov.au/fwo/IDZ00060.warnings_wa.xml"],
    ["sa",  "http://www.bom.gov.au/fwo/IDZ00057.warnings_sa.xml"],
    ["tas", "http://www.bom.gov.au/fwo/IDZ00058.warnings_tas.xml"],
    ["nt",  "http://www.bom.gov.au/fwo/IDZ00055.warnings_nt.xml"],
]);

export default class AURegionalWeather implements IRegionalWeather {
    async getInfo(region: string) {
        if (!(feedsMap.has(region))) throw new Error("Invalid region");

        const r: RegionalWeatherInfo[] = [];

        const xml = await get(feedsMap.get(region));
        const doc = parseXML(xml);
        const titleNodes = [].slice.call(doc.querySelectorAll("item > title"));
        if (titleNodes.length === 0) return [];

        for (let titleNode of titleNodes) {
            const warningStr = titleNode.textContent
                .replace(/\n/g, " ").replace(/\s\s+/g, " ")  // normalize whitespace
                .replace(/\d\d\/\d\d:\d\d [A-Z]+ /, "");     // remove leading timestamp
            r.push({
                summary: warningStr,
                icon: null
            });
        }

        return r;
    }
}
