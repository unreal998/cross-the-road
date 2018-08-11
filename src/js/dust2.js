import "pixi.js";
import dust2 from "../imgs/textures/dust2.jpg"
// move the sprite to the center of the screen
var Dust2container = new PIXI.Container();
for (var i = 0; i < 20; i++) {
  var Dust2 = PIXI.Sprite.fromImage(dust2)
  Dust2.anchor.set(0.5);
  Dust2.x = (i % 10) * 500;
  Dust2.y = Math.floor(i / 10) * 50;
  Dust2container.addChild(Dust2)
}
export default Dust2container;