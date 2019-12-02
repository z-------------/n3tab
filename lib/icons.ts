import { parseHTML } from "./parse";

type IconInfo = {
    url: string,
    size: number,
}

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
                    url: resolve(url, icon.src),
                    size: getSize(icon.sizes),
                });
            }
            if (manifestIcons.length > 0) {
                return getURLs(sortIcons(manifestIcons));
            }
        }
    }

    // rel="icon"
    const iconEls = qsa(d.head, "link[rel='icon'][href]");
    if (iconEls.length > 0) {
        const iconIcons = [];
        for (let iconEl of iconEls) {
            iconIcons.push({
                url: resolve(url, iconEl.getAttribute("href")),
                size: getSize(iconEl.getAttribute("sizes")),
            });
        }
        if (iconIcons.length > 0) {
            return getURLs(sortIcons(iconIcons));
        }
    }

    // apple-touch-icon
    const appleTouchIconEls = qsa(d.head, "link[rel='apple-touch-icon'][href]");
    icons.push(...appleTouchIconEls.map(el => el.getAttribute("href")));

    // shortcut icon
    const shortcutIconEls = qsa(d.head, "link[rel='shortcut icon'][href]");
    icons.push(...shortcutIconEls.map(el => el.getAttribute("href")));

    return icons;
}

function qs(element: HTMLElement, selector: string): HTMLElement {
    return element.querySelector(selector);
}

function qsa(element: HTMLElement, selector: string): HTMLElement[] {
    return [].slice.call(element.querySelectorAll(selector));
}

function resolve(baseURL: string, relURL: string): string {
    return new URL(relURL, baseURL).href;
}

function sortIcons(icons: IconInfo[]): IconInfo[] {
    return icons.sort((a, b) => b.size - a.size);
}

function getURLs(icons: IconInfo[]): string[] {
    return icons.map(icon => icon.url);
}

function getSize(sizeStr: string): number {
    return Number(sizeStr.split("x")[0]);
}
