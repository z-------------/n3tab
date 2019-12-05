export default () => {
	if (process.env.GITHUB_ACTION) {
		return {
			require: ["/home/runner/work/n3tab/n3tab/test/_setup-browser-env.js"]
		};
	}

	return {
		require: ["./test/_setup-browser-env.js"]
	};
};
