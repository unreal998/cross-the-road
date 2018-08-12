import "pixi.js";
import container from "./js/level";
import { monstersMove } from "./js/enemys";
import barels from "./js/barell";
import hero from "./js/hero";
import hitTestRectangle from "./js/hit";

var app = new PIXI.Application(600, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

app.stage.addChild(container);

function barelPick(){
  barels.forEach(function(item,i,arr){
    if(hitTestRectangle(hero, item)) { 
      item.roll()
    }
  })
}

app.ticker.add(function(delta){
  monstersMove(delta);
  barelPick()
})
container.x = (app.screen.width - container.width)/2;
container.y = (app.screen.height - container.height)/2;
