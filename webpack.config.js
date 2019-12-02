const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        "main": ["./src/main.ts", "./src/index.pug", "./src/style.sass"],
        "options": ["./src/options/options.ts", "./src/options/index.pug", "./src/options/style.sass"]
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ["main"],
            filename: "./dist/main/index.html",
            template: "./src/index.pug"
        }),
        new HtmlWebpackPlugin({
            chunks: ["options"],
            filename: "./dist/options/index.html",
            template: "./src/options/index.pug",
        }),
        new MiniCssExtractPlugin({
            filename: "./dist/[name]/style.css",
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
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                "css-loader",
                "sass-loader",
            ]
        }]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        filename: "dist/[name]/bundle.js",
        path: __dirname
    }
};
