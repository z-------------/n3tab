import { parseHTML } from "./parse";

export async function fetchIcons(url: string): Promise<string[]> {
    const html = await fetch(url).then(res => res.text());
    const doc = parseHTML(html);
    return getIcons(doc, url);
}

export async function getIcons(d: Document, url: string): Promise<string[]> {
    const icons = [];

    // manifest
    const manifestLinkEl = qs(d.head, "link[rel='manifest'][href]");
    if (manifestLinkEl) {
        const manifestURL = new URL(manifestLinkEl.getAttribute("href"), url).href;
        const manifest = await fetch(manifestURL).then(res => res.json());
        const manifestIcons = [];
        if ("icons" in manifest) {
            for (let icon of manifest["icons"]) {
                manifestIcons.push({
                    url: icon.src,
                    size: Number(icon.sizes.split("x")[0]),
                });
            }
            if (manifestIcons.length > 0) {
                manifestIcons.sort((a, b) => b.size - a.size);
                return manifestIcons.map(icon => icon.url);
            }
        }
    }

    // apple-touch-icon
    const appleTouchIconEls = qsa(d.head, "link[rel='apple-touch-icon'][href]");
    icons.push(...appleTouchIconEls.map(el => el.getAttribute("href")));

    return icons;
}

function qs(element: HTMLElement, selector: string): HTMLElement {
    return element.querySelector(selector);
}

function qsa(element: HTMLElement, selector: string): HTMLElement[] {
    return [].slice.call(element.querySelectorAll(selector));
}
