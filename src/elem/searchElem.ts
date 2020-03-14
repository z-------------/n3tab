import ListElem from "lib/elem/listElem";
import Widgetable from "./widgetable";
import pmx from "lib/pmx";
import EventWrapper from "src/eventWrapper";
import InfoElem from "lib/elem/infoElem";

export default class SearchElem extends ListElem implements Widgetable {
    protected onInput: EventWrapper;
    private matchFunction: (query: string, info: InfoElem["info"]) => boolean;

    constructor(c: new () => InfoElem, matchFunction: SearchElem["matchFunction"]) {
        super(c, false);
        this.matchFunction = matchFunction;

        const inputElement = pmx("input", {
            attrs: {
                "type": "text",
                "placeholder": "Search",
            }
        });
        this.onInput = new EventWrapper(fire => {
            inputElement.addEventListener("input", e => {
                fire((e.target as HTMLInputElement).value);
            });
        });
        this.onInput.addListener(query => this.filter(query, this.matchFunction));

        this.element.insertBefore(
            pmx("div", {
                classList: ["searchelem_form"],
                children: [inputElement],
            }),
            this.element.children[0]
        );
    }

    private filter(query: string, f: SearchElem["matchFunction"]) {
        for (const elem of this.elems) {
            const classList = elem.getElement().classList;
            if (f(query, elem.info)) {
                classList.add("searchelem-match");
                classList.remove("searchelem-nomatch");
            } else {
                classList.add("searchelem-nomatch");
                classList.remove("searchelem-match");
            }
        }
    }

    getIcon() { return ""; }
}
