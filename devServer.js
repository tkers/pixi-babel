const PORT = parseInt(process.argv[2]) || 8080;

import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";

import webpackDevConfig from "./config/webpack.dev.js";
webpackDevConfig.entry.app.unshift(`webpack-dev-server/client?http://localhost:${PORT}`, "webpack/hot/dev-server");

const compiler = webpack(webpackDevConfig);
const server = new webpackDevServer(compiler, { ...webpackDevConfig, hot: true });
server.listen(PORT);

console.log(`Dev server listening at localhost:${PORT}`); // eslint-disable-line no-console
