import "pixi.js";
import grassIcon from "../imgs/textures/grass.jpg";
import Dustcontainer from "./enemy";
var container = new PIXI.Container();

var grass = PIXI.Texture.fromImage(grassIcon);

// Create a 5x5 grid of bunnies
for (var i = 0; i < 100; i++) {
    var levelMap = new PIXI.Sprite(grass);
    
    levelMap.anchor.set(0.5);
    levelMap.x = (i % 10) * 50;
    levelMap.y = Math.floor(i / 10) * 50;
    console.log(container.width)
    console.log(container.height)
    container.addChild(levelMap);
}
container.addChild(Dustcontainer);
export default container;
