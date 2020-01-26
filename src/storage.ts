import * as lf from "localforage";

const fileStore = lf.createInstance({
    storeName: "file_store",
});

export const db = {
    files: fileStore,
};
