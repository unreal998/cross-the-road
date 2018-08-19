// import * as PIXI from "./pixi";
import * as PIXI from '../node_modules/pixi.js/dist/pixi';
import imgs from "./js/imgs";
// import container from "./js/level";
// import "./js/settings";
// import youLoose from "./js/youLoose";
// import youWin from "./js/youWin";
// import { monstersMove } from "./js/enemys";
// import {barelPick } from "./js/barell";
// import {healthRender} from "./js/health";
// import "./js/trees";
// import hero from "./js/hero";


  var app = new PIXI.Application(600, 600, {backgroundColor : 0x1099bb});
  
  document.body.appendChild(app.view);

  PIXI.loader
  .add(imgs.heroImg)
  .add(imgs.grassImg)
  .add(imgs.asphaltImg)
  .add(imgs.barrelImg)
  .add(imgs.dustImg)
  .add(imgs.oceanImg)
  .add(imgs.treeImg)

  .load(setup)

  function setup(){

  let cat = new PIXI.Sprite(PIXI.loader.resources[imgs.heroImg].texture);
  app.stage.addChild(cat);

  // app.stage.addChild(container);
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
  
  // app.ticker.add(function(delta:number){
  //   monstersMove(delta);
  //   barelPick();
  //   end();
  // })
  // container.x = (app.screen.width - container.width)/2;
  // container.y = (app.screen.height - container.height)/2;
}