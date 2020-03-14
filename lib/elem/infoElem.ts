import InterpolateElem from "./interpolateElem";

export default abstract class InfoElem extends InterpolateElem {
    info: object;

    constructor(element: HTMLElement) {
        super(element);
    }

    setInfo(info: object): void {
        this.info = info;
        this.processInfo(info);
    }

    abstract processInfo(info: object): void;
}
