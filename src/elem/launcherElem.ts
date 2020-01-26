import ListElem from "lib/elem/listElem";
import InfoElem from "lib/elem/infoElem";
import pmx from "lib/pmx";
import { fetchIcons } from "lib/icons";
import { Cache, TIME_DAY } from "lib/get";
import Widgetable from "./widgetable";

type LauncherItem = {
    title: string;
    url: string;
}

class LauncherItemElem extends InfoElem {
    constructor() {
        super(pmx("a", {
            attrs: {
                href: "${url}",
                title: "${title}",
                style: "background-image: url('${icon}')",
            },
            classList: ["launcher_item"],
        }));
    }

    async setInfo(info: LauncherItem) {
        this.setParams({
            url: info.url,
            title: info.title,
        });

        const key = `siteicon_${info.url}`;
        let iconURL;
        try {
            iconURL = await Cache.get(key, TIME_DAY);
        } catch (exp) {
            iconURL = (await fetchIcons(info.url))[0];
            Cache.add(key, iconURL);
        }
        this.setParams({
            icon: iconURL
        });
    }
}

export default class LauncherElem extends ListElem implements Widgetable {
    constructor(private items: LauncherItem[]) {
        super(false, LauncherItemElem);
        this.initialize();
    }

    private initialize() {
        for (const item of this.items) {
            this.push(item);
        }
    }

    getIcon() {
        return "";
    }
}
