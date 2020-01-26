export enum BackgroundType {
    DATA,
    URL,
}

export interface Background {
    type: BackgroundType;
    data: ArrayBuffer;
    url: string;
}

function drawImage(src: string, canvas: HTMLCanvasElement) {
    console.log(src, canvas);
    const img = new Image();
    img.onload = () => {
        canvas.getContext("2d").drawImage(img, 0, 0, 100, 100); // TODO: fill and position
    };
    img.src = src;
}

function drawBackgroundData(data: ArrayBuffer, canvas: HTMLCanvasElement) {
    const blob = new Blob([data]);
    const url = URL.createObjectURL(blob);
    drawImage(url, canvas);
}

function drawBackgroundURL(url: string, canvas: HTMLCanvasElement) {
    drawImage(url, canvas);
}

export function drawBackground(bg: Background, canvas: HTMLCanvasElement) {
    switch (bg.type) {
    case BackgroundType.DATA:
        drawBackgroundData(bg.data, canvas); break;
    case BackgroundType.URL:
        drawBackgroundURL(bg.url, canvas); break;
    default:
        throw new Error("Invalid background type");
    }
}
