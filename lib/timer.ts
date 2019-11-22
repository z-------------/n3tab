export default class Timer {
    private timerId: number | undefined;

    constructor(private fn: Function, private interval: number, private that: any) {}

    start() {
        const that = this.that;
        this.timerId = window.setInterval(() => {
            this.fn.call(that);
        }, this.interval);
    }

    stop() {
        if (typeof this.timerId === "undefined") throw new Error("Timer not running.");
        clearInterval(this.timerId);
        this.timerId = undefined;
    }

    once() {
        const that = this.that;
        this.timerId = window.setTimeout(() => {
            this.fn.call(that);
        }, this.interval);
    }
}
