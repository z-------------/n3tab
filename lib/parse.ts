const parser = new DOMParser();

function parse(source: string, type: SupportedType) {
    return parser.parseFromString(source, type);
}

export function parseHTML(html: string) {
    return parse(html, "text/html");
}

export function parseXML(xml: string) {
    return parse(xml, "text/xml");
}
