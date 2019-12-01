export async function fetchIcons(url: string): Promise<string[]> {
    const html = await fetch(url).then(res => res.text());
    const doc = getDocument(html);
    return getIcons(doc);
}

export function getIcons(d: Document): string[] {
    const icons = [];
    icons.push(...[].slice.call(d.head.querySelectorAll("link[rel='apple-touch-icon'][href]")).map(el => el.getAttribute("href")));
    return icons;
}

function getDocument(html: string): Document {
    const d = document.implementation.createHTMLDocument();
    d.documentElement.outerHTML = html;
    return d;
}
