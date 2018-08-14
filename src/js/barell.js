import "pixi.js";
import container,{ oceanLines }  from "./level";
import barrelTexture from "../imgs/textures/barrel.png";
import hero from "./hero";
import hitTestRectangle from "./utils/hit";
class Barell extends PIXI.Sprite{
  constructor(parent = null){
    super(PIXI.Texture.fromImage(barrelTexture))
    const me = this;
    me.anchor.set(0.5);
    me.x = 0;
    me.y = 0;
    me.roll = () => {
      hero.y +=5;
      me.y +=5;
      if(me.y>=550){
          hero.die();
          me.y = 600;
      }
    }
    if(parent){
      parent.addChild(me);
    }
  }
}
let barels = [];
let BarelLen = oceanLines.length;
function addBarells(barelsCount){
  for (let i=0; barels.length < barelsCount; i++ ){
    i = new Barell()
    barels.push(i);
  };
}

addBarells(BarelLen);

function placeBarrels(){ 
  for(let i = 0 ; i <= barels.length-1; i++ ){
    let enemysLine = oceanLines[i]-50
    barels[i].y = enemysLine;
    barels[i].y > 510 || barels[i].y < 10 ? barels[i].y = 50 : false
    barels[i].x += ((Math.random()*10).toFixed(0))*50;
    barels[i].x > 510 || barels[i].x < 10 ? barels[i].x = 50 : false
  }
}
placeBarrels();

export function barelPick(){
  barels.forEach(function(item,i,arr){
    if(hitTestRectangle(hero, item)) { 
      item.roll()
    }
  })
}

function BarrelsRender(){
  barels.forEach(function(item, i, arr){
    container.addChild(barels[i])
  })
}
BarrelsRender();
export default barels;
