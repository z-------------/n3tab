export default class Timer {
    private timerId: number;

    constructor(private fn: Function, private interval: number, private that: any) {}

    start() {
        const that = this.that;
        setInterval(() => {
            this.fn.call(that);
        }, this.interval);
    }

    stop() {
        if (!this.timerId) throw new Error("This timer is not running.");
        clearInterval(this.timerId);
    }
}
