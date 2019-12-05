const fs = require("fs");

export default () => {
    console.log(process.cwd());
    console.log(fs.readdirSync("test"));
	return {
        helpers: ["./test/setup-browser-env.js"],
		require: ["./test/setup-browser-env.js"]
	};
};
