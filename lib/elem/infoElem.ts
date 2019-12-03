import InterpolateElem from "./interpolateElem";

export default abstract class InfoElem extends InterpolateElem {
    constructor(element: HTMLElement) {
        super(element);
    }

    abstract setInfo(info: object): void;
}
