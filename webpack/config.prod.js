import config from "./config.shared.js";

import path from "path";
import webpack from "webpack";
import cleanWebpackPlugin from "clean-webpack-plugin";
import copyWebpackPlugin from "copy-webpack-plugin";

export default {

    ...config,

    plugins: [
        ...config.plugins,
        new webpack.optimize.UglifyJsPlugin({
            compressor: { warnings: false }
        }),
        new cleanWebpackPlugin(["dist"], {
            root: path.resolve(__dirname, "..")
        }),
        new copyWebpackPlugin([
            { from: path.resolve(__dirname, "../static") }
        ])
    ]
};
