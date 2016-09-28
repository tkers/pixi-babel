import PIXI from "pixi.js";
import initRenderer from "./initRenderer";
import preloadResources from "./preloadResources";
import getTexture from "./getTexture";

// "Global" variables we need to use across multiple functions
let demoStage, ghostSprite;

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

    // List of resources to load
    const resources = ["images/ghost.png"];

    // Then load the images
    preloadResources(resources, () => {

        // Then run the setup() function
        setup();
    });
});
