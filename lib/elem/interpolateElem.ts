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
    private origAttrs = new Map();
    private template: string;

    constructor(element: HTMLElement) {
        super();
        this.element = element;
        this.template = element.innerHTML;
        for (const attr of this.element.getAttributeNames()) {
            this.origAttrs.set(attr, this.element.getAttribute(attr));
        }
    }

    private interpolate() {
        this.element.innerHTML = stringInterpolate(this.template, this.params);

        for (const attr of this.element.getAttributeNames()) {
            if (!this.origAttrs.has(attr)) continue;
            const orig = this.origAttrs.get(attr);
            const val = stringInterpolate(orig, this.params);
            this.element.setAttribute(attr, val);
        }
    }

    setParams(params: Params) {
        for (const key in params) {
            if (typeof params[key] === "undefined") continue;
            this.params[key] = params[key];
        }
        this.interpolate();
    }

    getParams(): Params {
        return this.params;
    }
}

function escapeRegEx(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // https://stackoverflow.com/a/6969486
}

function stringInterpolate(template: string, params: Params) {
    let result = template;
    for (const key in params) {
        result = result.replace(new RegExp(escapeRegEx(`\${${key}}`), "g"), params[key].toString());
    }
    return result;
}
