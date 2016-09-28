import PIXI from "pixi.js";

// "Global" variables we need to use across multiple functions
let demoStage, ghostSprite;

/**
 *  Creates the Renderer
 *
 *  @returns {PIXIRenderer}
 */
const initRenderer = () => {

    // Create the renderer (auto detect Canvas / WebGL)
    const renderer = PIXI.autoDetectRenderer(640, 320, {
        antialias: false,
        transparent: false,
        resolution: 1
    });

    // Style the renderer
    renderer.view.className = "renderArea";

    // Add to the DOM
    document.getElementById("main").appendChild(renderer.view);

    // Return the reference of the renderer
    return renderer;
};

/**
 *  Loads the resources we need in the Game
 *  and calls the provided callback when done.
 *
 *  @param {Function}       cb      The function to call when the loading is completed
 *
 *  @returns {Void}
 */
const loadResources = cb => {

    // List of resources to load
    const resources = ["images/ghost.png"];

    // Add the resources and trigger Callback when loaded
    PIXI.loader
        .add(resources)
        // .on("progress", loader => console.log(`${loader.progress}% completed`))
        .load(cb);
};

/**
 *  Fetches the (preloaded) texture by filename
 *
 *  @param {String}     name    Name of the texture to load
 *
 *  @returns {PIXITexture}      The texture
 */
const getTexture = name => PIXI.loader.resources[name].texture;

// Define the main game loop
const redraw = (time, renderer) => {

    // Redraw when browser is ready
    requestAnimationFrame(t => redraw(t, renderer));

    // Move the ghost sprite to the right
    ghostSprite.x += 1;

    // Render the scene
    renderer.render(demoStage);
};

/**
 *  Set up the game after the window and resources have finished loading.
 *  Creates the renderer, sets up the stages, and performs the initial render.
 */
const setup = () => {

    const renderer = initRenderer();

    // Create a container object called the `stage`
    demoStage = new PIXI.Container();

    const ghostTex = getTexture("images/ghost.png");
    ghostSprite = new PIXI.Sprite(ghostTex);

    ghostSprite.position.set(100, 50);

    demoStage.addChild(ghostSprite);

    // Perform initial render
    redraw(-1, renderer);
}

/* ---------- Initialisation ---------- */

// Wait until the page is fully loaded
window.addEventListener("load", () => {

    // Then load the images
    loadResources(() => {

        // Then run the setup() function
        setup();
    });
});
