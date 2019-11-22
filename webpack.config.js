const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: ["./src/main.ts", "./src/index.pug", "./src/style.sass"],
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.pug"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [{
            test: /\.ts$/,
            use: "ts-loader",
            exclude: /node_modules/
        }, {
            test: /\.pug$/,
            include: path.join(__dirname, "src"),
            use: "pug-loader"
        }, {
            test: /\.s[ac]ss$/,
            include: path.join(__dirname, "src"),
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, "css-loader", "sass-loader"]
        }]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
