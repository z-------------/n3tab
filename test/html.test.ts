import test from "ava";
import { sanitize, escape } from "../lib/html";

test("sanitize works", t => {
    const o = sanitize("My <em>formatted</em> text: <a href=\"https://example.com\">Foo</a>");
    t.is(o, "My formatted text: Foo");
});

test("escape works", t => {
    const text = "My <em>formatted</em> text: <a href=\"https://example.com\">Foo</a>";
    const o = escape(text);
    const el = document.createElement("div");
    el.innerHTML = o;
    t.is(el.textContent, text);
});
