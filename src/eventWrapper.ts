export default class EventWrapper {
    private listeners: Function[] = [];

    constructor(c: (fire: (info: any) => any) => any) {
        c(this.fire.bind(this));
    }

    private fire(info: any) {
        for (const listener of this.listeners) {
            listener(info);
        }
    }

    addListener(listener: (info: any) => any) {
        this.listeners.push(listener);
    }
}
