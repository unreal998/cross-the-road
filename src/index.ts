import * as PIXI from '../node_modules/pixi.js/dist/pixi';
import container from "./js/level";
import './js/trees';
import hero from "./js/hero";
import "./js/barell";
// import youLoose from "./js/youLoose";
// import youWin from "./js/youWin";
import { monstersMove } from "./js/enemys";

// import {healthRender} from "./js/health";

  var app = new PIXI.Application(600, 600, {backgroundColor : 0x1099bb});
  
  document.body.appendChild(app.view);

  PIXI.loader.load(setup);

  function setup(){
  container.x = (app.screen.width - container.width)/2;
  container.y = (app.screen.height - container.height)/2;
  app.stage.addChild(container);


  // app.stage.addChild(youLoose);
  // app.stage.addChild(youWin);
  // healthRender()
  
  // function end(){
  //   if (hero.lifes <= 0) {
  //   return (container.visible = false,
  //     youLoose.visible = true,
  //     youWin.visible = false
  //   );
  //   }
  //   else if (hero.y === 0){
  //     return (container.visible = false,
  //       youLoose.visible = false,
  //       youWin.visible = true);
  //   }
  //   container.visible = true;
  //   youLoose.visible = false;
  //   youWin.visible = false;
  // }
  
  app.ticker.add(function(delta:number){
    monstersMove(delta);
    // barelPick();
    // end();
  })

  }