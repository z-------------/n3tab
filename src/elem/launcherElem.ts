import ListElem from "../../lib/elem/listElem";
import InfoElem from "../../lib/elem/infoElem";
import pmx from "../../lib/pmx";
import { fetchIcons } from "../../lib/icons";
import { Cache, TIME_DAY } from "../../lib/get";

type LauncherItem = {
    title: string,
    url: string,
}

class LauncherItemElem extends InfoElem {
    constructor() {
        super([
            {
                href: "${url}",
                title: "${title}",
                style: "background-image: url('${icon}')",
            },
            "",
        ]);
        this.element = pmx("a", {
            classList: ["launcher_item"]
        });
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

export default class LauncherElem extends ListElem {
    constructor(private items: LauncherItem[]) {
        super(false, LauncherItemElem);
        this.initialize();
    }

    private initialize() {
        for (let item of this.items) {
            this.push(item);
        }
    }
}
