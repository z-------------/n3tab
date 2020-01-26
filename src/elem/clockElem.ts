import InterpolateElem from "lib/elem/interpolateElem";
import pmx from "lib/pmx";
import Timer from "lib/timer";
import Widgetable from "./widgetable";

export default class ClockElem extends InterpolateElem implements Widgetable {
    constructor() {
        super(pmx("div", {
            classList: ["card", "clock"],
            html: "<span class='clock_segment'>${h}</span><span class='clock_sep'>:</span><span class='clock_segment'>${m}</span><span class='clock_sep'>:</span><span class='clock_segment'>${s}</span>",
        }));
        this.update();
        new Timer(() => {
            new Timer(this.update, 1000, this).doStart();
        }, 1000 - new Date().getMilliseconds()).once();
    }

    private formatSegment(n: number) {
        return n.toString().padStart(2, "0");
    }

    private update() {
        const now = new Date();
        const [h, m, s] = [now.getHours(), now.getMinutes(), now.getSeconds()].map(this.formatSegment);
        this.setParams({ h, m, s });
    }

    getIcon() {
        return "";
    }
}
