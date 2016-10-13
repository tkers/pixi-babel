import path from "path";
import webpack from "webpack";
import cleanWebpackPlugin from "clean-webpack-plugin";
import copyWebpackPlugin from "copy-webpack-plugin";

export default {

    entry: ["babel-polyfill", "./src/index.js"],

    output: {
        path: "dist",
        filename: "js/game.js"
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: { warnings: false }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new cleanWebpackPlugin(["dist"], {
            root: path.resolve(__dirname, "..")
        }),
        new copyWebpackPlugin([
            { from: path.resolve(__dirname, "../static") }
        ])
    ],

    module: {
        preLoaders: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, "../src")
            ],
            loader: "eslint-loader",
        }],
        loaders: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, "../src")
            ],
            loader: "babel-loader",
        }]
    },

    eslint: {
        failOnWarning: false,
        failOnError: true
    },

    resolve: {
        root: [ path.resolve(__dirname, "../src") ],
        extensions: [".js", ""]
    },

    stats: {
        colors: true,
        chunks: false
    }
};
