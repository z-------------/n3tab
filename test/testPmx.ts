import test from "ava";
import pmx from "../lib/pmx";

test("pmx is a function", t => {
    t.assert(typeof pmx === "function");
});

test("pmx returns an HTMLElement", t => {
    const el = pmx("div");
    t.assert(el instanceof window.HTMLElement);
});

test("pmx tag name works", t => {
    const el = pmx("em");
    t.is(el.tagName, "EM");
});

test("pmx id works", t => {
    const ID = "foo";
    const el = pmx("div", {
        id: ID
    });
    t.is(el.id, ID);
});

test("pmx classList works", t => {
    const classList = ["foo", "bar"];
    const el = pmx("div", { classList });
    for (let className of classList)
        t.assert(el.classList.contains(className));
});

test("pmx text works", t => {
    const text = "<span>some text</span> that could be <em>HTML</em>.";
    const el = pmx("div", { text });
    t.is(el.textContent, text);
});

test("pmx html works", t => {
    const html = "<span>some text</span> that could be <em>HTML</em>.";
    const el = pmx("div", { html });
    t.is(el.innerHTML, html);
});

test("pmx children works", t => {
    const children = [
        pmx("h1", { id: "foo" }),
        pmx("p", { id: "bar" }),
    ];
    const el = pmx("div", { children });

    t.is(el.children[0], children[0]);
    t.is(el.children[1], children[1]);
    t.is(el.children.length, 2);
});

test("pmx children overrides text", t => {
    const children = [
        pmx("h1", { id: "foo" }),
        pmx("p", { id: "bar" }),
    ];
    const text = "<span>some text</span> that could be <em>HTML</em>.";
    const el = pmx("div", {
        children, text
    });

    t.is(el.children[0], children[0]);
    t.is(el.children[1], children[1]);
    t.is(el.children.length, 2);
});

test("pmx text overrides html", t => {
    const text = "<span>some text</span> that could be <em>HTML</em>.";
    const html = "<span>some text</span> that could be <em>HTML</em>.";
    const el = pmx("div", {
        text, html
    });
    t.is(el.textContent, text);
});

test("pmx style works", t => {
    const style = {
        "color": "rebeccapurple",
        "font-family": "Helvetica, sans-serif;",
    };
    const styleMap = new Map(Object.entries(style));
    const el = pmx("div", { style });
    for (let prop in style) {
        t.is(el.style.getPropertyValue(prop), styleMap.get(prop));
    }
});

test("pmx attrs works", t => {
    const attrs = {
        "type": "checkbox",
        "name": "foo",
    };
    const attrsMap = new Map(Object.entries(attrs));
    const el = pmx("input", { attrs });
    for (let attr in attrs) {
        t.is(el.getAttribute(attr), attrsMap.get(attr));
    }
});

test("pmx combined options work", t => {
    const el = pmx("ul", {
        id: "foo",
        classList: ["bar", "baz"],
        text: "Some text",
        html: "<p>Some HTML</p>",
        children: [
            pmx("li", { text: "Some" }),
            pmx("li", { text: "children" }),
        ],
        style: {
            "color": "red",
        },
        attrs: {
            "data-spam": "eggs"
        },
    });

    t.is(el.tagName, "UL");

    t.is(el.id, "foo");

    t.assert(el.classList.contains("bar"));
    t.assert(el.classList.contains("baz"));

    t.is(el.children.length, 2);
    t.is(el.children[0].tagName, "LI");
    t.is(el.children[0].textContent, "Some");
    t.is(el.children[1].tagName, "LI");
    t.is(el.children[1].textContent, "children");

    t.is(el.style.color, "red");

    t.is(el.dataset.spam, "eggs");
});
