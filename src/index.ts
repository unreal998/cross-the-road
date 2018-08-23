import * as PIXI from "../node_modules/pixi.js/dist/pixi";
import container from "./js/container";
import end from './js/Tests/gameOverTest';
import youLoose from "./js/gameOverScreens/youLoose";
import youWin from "./js/gameOverScreens/youWin";
import { monstersMove } from "./js/levelItems/enemys";
import tests from "./js/Tests/hitTests";
import {healthRender} from "./js/levelItems/health";


var app = new PIXI.Application(600, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);
app.stage.addChild(container);
app.stage.addChild(youLoose);
app.stage.addChild(youWin);
healthRender();


app.ticker.add(function(delta:number){
  tests.monsterCheck();
  monstersMove(delta);
  tests.barelPick();
  end();
})
container.x = (app.screen.width - container.width)/2;
container.y = (app.screen.height - container.height)/2;