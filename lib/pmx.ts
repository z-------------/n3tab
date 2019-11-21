interface Attributes {
    id?: string;
    classList?: string[];
    text?: string;
    html?: string;
    children?: Node[];
    style?: {
        [key: string]: string
    };
    attrs?: {
        [key: string]: string
    };
}

export default function pmx(tagName: string, attributes: Attributes = {}): HTMLElement {
    let elem = document.createElement(tagName)

    if (attributes) {
        for (let attributeName in attributes.attrs) {
            elem.setAttribute(attributeName, attributes.attrs[attributeName])
        }

        if (attributes.id) {
            elem.setAttribute("id", attributes.id);
        }

        if (attributes.classList) {
            for (let className of attributes.classList) {
                elem.classList.add(className);
            }
        }

        if (attributes.children) {
            for (let child of attributes.children) elem.appendChild(child)
        } else if (attributes.text) {
            elem.textContent = attributes.text;
        } else if (attributes.html) {
            elem.innerHTML = attributes.html;
        }

        if (attributes.style) {
            for (let property in attributes.style) {
                elem.style.setProperty(property, attributes.style[property]);
            }
        }
    }
    
    return elem;
}
