import test from "ava";
import { parseHTML, parseXML } from "../lib/parse";

const HTML = "<!DOCTYPE html><html><head><title>Title</title></head><body><span data-foo=\"bar\">Text</span></body></html>";
const XML = "<?xml version=\"1.0\"?><foo><bar id=\"zero\"><author>Lear</author><title>A Paperback</title></bar><bar id=\"one\"><author>Dr. Seuss</author><title>Green Eggs and Ham</title></bar></foo>";

/**
 * parseHTML
 */

test("parseHTML is a function", t => {
    t.assert(typeof parseHTML === "function");
});

test("parseHTML returns a Document", t => {
    const d = parseHTML(HTML);
    t.assert(d instanceof window.Document);
});

test("parseHTML parses correctly", t => {
    const d = parseHTML(HTML);

    t.is(d.childElementCount, 1);
    t.is(d.documentElement.tagName, "HTML");

    t.is(d.head.childElementCount, 1);
    t.is(d.head.getElementsByTagName("title")[0].textContent, "Title");

    t.is(d.body.childElementCount, 1);

    const span = d.body.querySelector("span");
    t.is(span.dataset.foo, "bar");
    t.is(span.textContent, "Text");
});

/**
 * parseXML
 */

test("parseXML is a function", t => {
    t.assert(typeof parseXML === "function");
});

test("parseXML returns a Document", t => {
    const d = parseXML(XML);
    t.assert(d instanceof window.Document);
});

test("parseXML parses correctly", t => {
    const d = parseXML(XML);

    t.is(d.childElementCount, 1);
    t.is(d.documentElement.tagName, "foo");

    t.is(d.documentElement.childElementCount, 2);

    const bar0 = d.getElementsByTagName("bar")[0];
    t.is(bar0.getAttribute("id"), "zero");
    t.is(bar0.childElementCount, 2);
    t.is(bar0.querySelector("author").textContent, "Lear");
    t.is(bar0.querySelector("title").textContent, "A Paperback");

    const bar1 = d.getElementsByTagName("bar")[1];
    t.is(bar1.getAttribute("id"), "one");
    t.is(bar1.childElementCount, 2);
    t.is(bar1.querySelector("author").textContent, "Dr. Seuss");
    t.is(bar1.querySelector("title").textContent, "Green Eggs and Ham");
});
