import * as PIXI from "../../node_modules/pixi.js/dist/pixi";
import "../imgs/textures/dust.jpg"
const youLoose = new PIXI.Container();
const Dust = PIXI.Texture.fromImage("../imgs/textures/dust.jpg")

for (var i = 0; i < 169; i++) {
  const levelDust = new PIXI.Sprite(Dust);
  levelDust.anchor.set(0.5);
  levelDust.x = (i % 13) * 50;
  levelDust.y = Math.floor(i / 13) * 50;
  youLoose.addChild(levelDust);
}
let style = new PIXI.TextStyle({
  fontFamily: "Roboto",
  fontSize: 64,
  fill: "white"
});
const message = new PIXI.Text("You loose", style);
message.anchor.set(0.5);
message.x = youLoose.width/2;
message.y = youLoose.height/2;
youLoose.addChild(message);

export default youLoose;
