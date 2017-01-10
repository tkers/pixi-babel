// ./node_modules/.bin/webpack --verbose --progress --colors --display-error-details --config webpack/config.prod.js

import webpack from "webpack";
import webpackProdConfig from "./config.prod.js";

const compiler = webpack(webpackProdConfig);

compiler.run((err, stats) => {

    // fatal error
    if (err)
        throw err;

    // log stats
    console.log(stats.toString({
        colors: true,
        assets: false,
        chunks: false
    }));

    // fail on soft errors
    if (stats.hasErrors())
        process.exit(1);
});
