export default class Timer {
    private timerId: number;

    constructor(private fn: Function, private interval: number, private that: any) {}

    start() {
        const that = this.that;
        this.timerId = window.setInterval(() => {
            this.fn.call(that);
        }, this.interval);
    }

    stop() {
        if (!this.timerId) throw new Error("Cannot stop a timer that hasn't started.");
        clearInterval(this.timerId);
    }
}
