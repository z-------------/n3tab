import InterpolateElem from "../../lib/elem/interpolateElem";
import pmx from "../../lib/pmx";
import Timer from "../../lib/timer";

export default class ClockElem extends InterpolateElem {
    constructor() {
        super("<span class='clock_segment'>${h}</span><span class='clock_sep'>:</span><span class='clock_segment'>${m}</span><span class='clock_sep'>:</span><span class='clock_segment'>${s}</span>");
        this.element = pmx("div", {
            classList: ["card", "clock"]
        });
        this.update();
        new Timer(this.update, 500, this).start();
    }

    private formatSegment(n: number) {
        return n.toString().padStart(2, "0");
    }

    private update() {
        const now = new Date();
        const [h, m, s] = [now.getHours(), now.getMinutes(), now.getSeconds()].map(this.formatSegment);
        this.setParams({ h, m, s });
    }
}
