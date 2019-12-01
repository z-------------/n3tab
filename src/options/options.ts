import * as TOML from "@iarna/toml"

const { _format, defaults } = require("./defaults.json");

const editorElement = document.getElementById("editor") as HTMLTextAreaElement;

(async () => {
    const { userSettings } = await browser.storage.local.get("settings");
    const settings = Object.assign({}, defaults, userSettings);

    editorElement.value = TOML.stringify(settings);
})();
