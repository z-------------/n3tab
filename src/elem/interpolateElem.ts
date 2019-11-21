import Elem from "./elem";

export interface Params {
    [key: string]: string | number;
}

/**
 * TODO: refactor the interpolation algorithm so that not the whole innerHTML needs to be replaced.
 * i.e. upon construction, for each child in template, copy the relevant part of the template into an associated field (e.g. dataset or a private dictionary),
 * and upon interpolation use each element's corresponding template to replace its own innerHTML instead of replacing the whole innerHTML
 * more expensive during construction but cheaper during updates (of course, confirm with benchmarks...)
 */
export default abstract class InterpolateElem extends Elem {
    private params: Params = {};
    private template: string;

    constructor(template: string) {
        super();
        this.template = template;
    }

    private escapeRegEx(str: string): string {
        // https://stackoverflow.com/a/6969486
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    private interpolate() {
        let result: string = this.template;
        for (let key in this.params) {
            result = result.replace(new RegExp(this.escapeRegEx(`\${${key}}`), "g"), this.params[key].toString());
        }
        this.element.innerHTML = result;
    }

    setParams(params: Params) {
        for (let key in params) {
            this.params[key] = params[key];
        }
        this.interpolate();
    }

    getParams(): Params {
        return this.params;
    }

    setTemplate(template: string) {
        this.template = template;
    }
}
