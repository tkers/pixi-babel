import * as PIXI from "pixi.js";

/**
 *  Fetches the (preloaded) texture by filename
 *
 *  @param {String}     name    Name of the texture to load
 *
 *  @returns {PIXITexture}      The texture
 */
const getTexture = name => PIXI.loader.resources[name].texture;

export default getTexture;
