import path from "path";
import webpack from "webpack";

export default {

    entry: ["babel-polyfill", "./src/index.js"],

    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/",
        filename: "game.js"
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ],

    module: {
        loaders: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, "../src")
            ],
            loader: "babel-loader",
        }]
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
