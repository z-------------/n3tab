import * as TOML from "@iarna/toml"

const { _format, defaults } = require("./defaults.json");

const editorElement = document.getElementById("editor") as HTMLTextAreaElement;
const saveButton = document.getElementById("save") as HTMLButtonElement;

(async () => {
    const userSettings = (await browser.storage.sync.get("settings"))["settings"];
    const settings = Object.assign({}, defaults, userSettings);

    editorElement.value = TOML.stringify(settings);
    saveButton.addEventListener("click", save);
})();

async function save() {
    try {
        const newSettings = TOML.parse(editorElement.value);
        await browser.storage.sync.set({ settings: newSettings });
        alert("Saved.");
    } catch (exp) {
        alert("Invalid TOML.");
    }
}
