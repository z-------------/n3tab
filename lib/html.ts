enum TransformType { SANITIZE, ESCAPE }

function elementTransform(html: string, type: TransformType) {
    const d = document.createElement("div");
    d[type === TransformType.SANITIZE ? "innerHTML" : "textContent"] = html;
    return d[type === TransformType.SANITIZE ? "textContent" : "innerHTML"];
}

export function sanitize(html: string) {
    return elementTransform(html, TransformType.SANITIZE);
}

export function escape(text: string) {
    return elementTransform(text, TransformType.ESCAPE);
}
