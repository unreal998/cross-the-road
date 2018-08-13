import "pixi.js";
import barrelTexture from "../imgs/textures/barrel.png";
import hero from "./hero";
import hitTestRectangle from "./hit";
class Barell extends PIXI.Sprite{
  constructor(parent = null){
    super(PIXI.Texture.fromImage(barrelTexture))
    const me = this;
    me.anchor.set(0.5);
    me.x = 50;
    me.y = 50;
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

function addBarells(barelsCount){
  for (let i=0; barels.length < barelsCount; i++ ){
    i = new Barell()
    barels.push(i);
  };
}

addBarells(5);

function placeBarrels(){ 
  for(let i = 0 ; i <= barels.length-1; i++ ){
    barels[i].y += ((Math.random()*10).toFixed(0))*50;
    barels[i].x += ((Math.random()*10).toFixed(0))*50;
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

export default barels;
