import path from "path";
import webpack from "webpack";
import copyWebpackPlugin from "copy-webpack-plugin";

export default {

    entry: {
        app: ["./src/index.js"]
    },

    output: {
        path: "/",
        publicPath: "/",
        filename: "js/game.js"
    },

    devtool: "#source-map",

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new copyWebpackPlugin([
            { from: path.resolve(__dirname, "../node_modules/pixi.js/bin/pixi.min.js"), to: "js/lib/" },
            { from: path.resolve(__dirname, "../node_modules/pixi.js/bin/pixi.js"), to: "js/lib/" },
            { from: path.resolve(__dirname, "../node_modules/pixi.js/bin/pixi.map"), to: "js/lib/" }
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
        failOnError: false,
        emitWarning: true,
        quiet: true
    },

    historyApiFallback: {
        index: "index.html"
    },

    contentBase: path.resolve(`${__dirname}/../static`),

    resolve: {
        root: [ path.resolve(__dirname, "../src") ],
        extensions: [".js", ""]
    },

    stats: {
        colors: true,
        chunks: false
    }
};
