import "pixi.js";
import dust from "../imgs/textures/dust.jpg"
// move the sprite to the center of the screen
var Dustcontainer = new PIXI.Container();
for (var i = 0; i < 20; i++) {
  var Dust = PIXI.Sprite.fromImage(dust)
  Dust.anchor.set(0.5);
  Dust.x = (i % 10) * 50;
  Dust.y = Math.floor(i / 10) * 500;
  Dustcontainer.addChild(Dust)
}
export default Dustcontainer;