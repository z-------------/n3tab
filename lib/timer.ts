enum TimerType { INTERVAL, TIMEOUT }

export default class Timer {
    private timerId: number | undefined;

    constructor(private fn: Function, private interval: number, private that: any) {}

    start() {
        this.do(TimerType.INTERVAL);
    }

    once() {
        this.do(TimerType.TIMEOUT);
    }

    stop() {
        if (typeof this.timerId === "undefined") throw new Error("Timer not running.");
        window.clearInterval(this.timerId);
        this.timerId = undefined;
    }

    private do(type: TimerType) {
        const that = this.that;
        const method = type === TimerType.INTERVAL ? "setInterval" : "setTimeout";
        this.timerId = window[method](() => {
            this.fn.call(that);
        }, this.interval);
    }
}
