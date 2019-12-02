import ListElem from "../../lib/elem/listElem";
import InfoElem from "../../lib/elem/infoElem";
import pmx from "../../lib/pmx";
import { fetchIcons } from "../../lib/icons";

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
        this.setParams({
            icon: (await fetchIcons(info.url))[0]
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
