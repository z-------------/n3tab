import InterpolateElem, { TemplateWithAttrs } from "./interpolateElem";

export default abstract class InfoElem extends InterpolateElem {
    constructor(template: string | TemplateWithAttrs) {
        super(template);
    }

    abstract setInfo(info: object): void;
}
