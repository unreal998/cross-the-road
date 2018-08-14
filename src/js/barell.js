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
let k = 0;
let BarelLen = oceanLines.length;
function addBarells(barelsCount){
  for (let i=0; barels.length < barelsCount; i++ ){
    if(k > BarelLen-1){
      k = 0
    }
    i = new Barell()
    i.y = oceanLines[k]-50;
    barels.push(i);
    k++
  };
}

addBarells(8);

let p = 0;
function placeBarrels(){ 
  for(let i = 0 ; i <= barels.length-1; i++ ){
    if(p > BarelLen-1){
      p = 0
    }
    let BarelLine = oceanLines[p]-50
    barels[i].y = BarelLine;
    barels[i].x += ((Math.random()*10).toFixed(0))*50;
    barels[i].x > 510 || barels[i].x < 10 ? barels[i].x = ((Math.random()*10).toFixed(0))*50 : false
    if(i-1 < 0){

    }
    else if(barels[i-1].x === barels[i].x){
      barels[i].x += ((Math.random()*10).toFixed(0))*50;
      barels[i].x > 510 || barels[i].x < 10 ? barels[i].x = ((Math.random()*10).toFixed(0))*50 : false
    }
    p++;
  }
}
placeBarrels();
addBarells(BarelLen);
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
