const parser = new DOMParser();

export function parseHTML(html: string) {
    const doc = document.implementation.createHTMLDocument();
    doc.documentElement.outerHTML = html;
    return doc;
}

export function parseXML(xml: string) {
    const doc = parser.parseFromString(xml, "text/xml");
    return doc;
}
