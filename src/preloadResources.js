import * as PIXI from "pixi.js";

/**
 *  Loads the resources we need in the Game
 *  and calls the provided callback when done.
 *
 *  @param {Array}      resources       The resources to load
 *  @param {Function}   cb              The function to call when the loading is completed
 *
 *  @returns {Void}
 */
const preloadResources = (resources, cb) => {

    // Add the resources and trigger Callback when loaded
    PIXI.loader
        .add(resources)
        // .on("progress", loader => console.log(`${loader.progress}% completed`))
        .load(cb);
};

export default preloadResources;
