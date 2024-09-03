const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist/'),
        open: true,
        compress: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: [MiniCSSExtractPlugin.loader, { loader: 'css-loader' }]
            },
            {
                test: /\.ts$/, use: 'ts-loader',
            },
            {
                test: /\.html$/i, use: 'html-loader'
            }
        ]
    },
    plugins: [new HTMLWebpackPlugin({template: './src/index.html'}), new MiniCSSExtractPlugin()]
}