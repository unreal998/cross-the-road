import "../pixi";
import dust from "../imgs/textures/dust.jpg";
const youWin = new PIXI.Container();
const Dust = PIXI.Texture.fromImage(dust)

for (var i = 0; i < 169; i++) {
  const levelDust = new PIXI.Sprite(Dust);
  levelDust.anchor.set(0.5);
  levelDust.x = (i % 13) * 50;
  levelDust.y = Math.floor(i / 13) * 50;
  youWin.addChild(levelDust);
}
let style = new PIXI.TextStyle({
  fontFamily: "Roboto",
  fontSize: 64,
  fill: "white"
});
const message = new PIXI.Text("You win", style);
message.anchor.set(0.5);
message.x = youWin.width/2;
message.y = youWin.height/2;
youWin.addChild(message);

export default youWin;
