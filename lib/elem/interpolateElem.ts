import Elem from "./elem";

export interface Params {
    [key: string]: string | number,
}

type AttrDict = {
    [attr: string]: string,
}

export type TemplateWithAttrs = [
    AttrDict,
    string,
]

/**
 * TODO: refactor the interpolation algorithm so that not the whole innerHTML needs to be replaced.
 * i.e. upon construction, for each child in template, copy the relevant part of the template into an associated field (e.g. dataset or a private dictionary),
 * and upon interpolation use each element's corresponding template to replace its own innerHTML instead of replacing the whole innerHTML
 * more expensive during construction but cheaper during updates (of course, confirm with benchmarks...)
 */
export default abstract class InterpolateElem extends Elem {
    private params: Params = {};
    private template: string;
    private attrsTemplate: AttrDict;

    constructor(template: string | TemplateWithAttrs) {
        super();
        if (typeof template === "string") {
            this.template = template;
        } else {
            this.attrsTemplate = template[0];
            this.template = template[1];
        }
    }

    private escapeRegEx(str: string): string {
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // https://stackoverflow.com/a/6969486
    }

    private stringInterpolate(template: string, params: Params) {
        let result: string = template;
        for (let key in params) {
            result = result.replace(new RegExp(this.escapeRegEx(`\${${key}}`), "g"), params[key].toString());
        }
        return result;
    }

    private interpolate() {
        this.element.innerHTML = this.stringInterpolate(this.template, this.params);
        if (this.attrsTemplate) {
            for (let attr in this.attrsTemplate) {
                this.element.setAttribute(attr, this.stringInterpolate(this.attrsTemplate[attr], this.params));
            }
        }
    }

    setParams(params: Params) {
        for (let key in params) {
            if (typeof params[key] === "undefined") continue;
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
