enum TimerType { INTERVAL, TIMEOUT }

export default class Timer {
    private timerId: number | undefined;
    private runner: Function;

    constructor(private fn: Function, private interval: number, private that?: any) {
        this.runner = that ?
            () => {
                this.fn.call(that);
            } :
            () => {
                this.fn();
            };
    }

    start() {
        this.do(TimerType.INTERVAL);
    }

    once() {
        this.do(TimerType.TIMEOUT);
    }

    doStart() {
        this.runner();
        this.start();
    }

    stop() {
        if (typeof this.timerId === "undefined") throw new Error("Timer not running.");
        window.clearInterval(this.timerId);
        this.timerId = undefined;
    }

    private do(type: TimerType) {
        const method = type === TimerType.INTERVAL ? "setInterval" : "setTimeout";
        this.timerId = window[method](this.runner, this.interval);
    }
}
