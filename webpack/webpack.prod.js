const {resolve} = require('path')
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: 'main.[contentHash].js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {   
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css",
            chunkFilename: "[id].css"
        })
    ]
})