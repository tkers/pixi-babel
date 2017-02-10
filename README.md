# Pixi-Babel

Pixi boilerplate using Webpack and Babel. Partially based off [Lapixx/phaser-babel](https://github.com/Lapixx/phaser-babel)

## Setup

Clone the repository:

```bash
git clone https://github.com/Lapixx/pixi-babel.git
```

Install the (dev)dependencies:

```bash
npm install
```

## File structure

Static assets are located in the `static/` folder, these files are not modified
during the build step (merely copied).

JavaScript (ES6) files are located in the `src/` folder. They are transpiled
with [Babel](https://babeljs.io) and bundled with [Webpack](http://webpack.github.io), using `index.js` as the entry point. The resulting bundle is exported to `js/index.js` (relative to your static assets)

In this boilerplate, the `static/index.html` file loads the
`js/index.js` bundle (the build artifact corresponding to `src/index.js`), which takes care of importing extra dependencies and initialising and starting the main game loop.

## Development

Start the development server (with hot reloading enabled):

```bash
npm run dev
```

After the initial build, navigate to **[localhost:8080](http://localhost:8080)**.

*(Any changes you make to the source code files will automatically trigger a
rebuild and reload the page.)*

## Building

To build the application and optimise for production:

```bash
npm run build
```

This will copy all build artifacts to the `dist/` folder.

*(You may run into CORS errors when trying to open the `dist/index.html` file
directly. Make sure to serve this folder using a file server instead, or wrap
everything inside another framework of your choice for distribution.)*
