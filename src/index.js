import "pixi.js";
import container from "./js/level";
import { monstersMove } from "./js/enemys";
var app = new PIXI.Application(600, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

app.stage.addChild(container);

app.ticker.add(function(){
  monstersMove()
})
container.x = (app.screen.width - container.width)/2;
container.y = (app.screen.height - container.height)/2;
