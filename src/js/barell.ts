import * as PIXI from "../pixi"; 
import container,{ oceanLines }  from "./level";
import "../imgs/textures/barrel.png";
import hero from "./hero";
import hitTestRectangle from "./utils/hit";
class Barell extends PIXI.Sprite{
  constructor(){
    super(PIXI.Texture.fromImage("../imgs/textures/barrel.png"))
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
  }
}
let barels:Array<Barell> = [];
let k = 0;
let BarelLen = oceanLines.length;
let examp:Barell
function addBarells(barelsCount:number){
  for (let i=0; barels.length < barelsCount; i++ ){
    if(k > BarelLen-1){
      k = 0
    }
    examp = new Barell()
    examp.y = oceanLines[k]-50;
    barels.push(examp);
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
    barels[i].x += +((Math.random()*10).toFixed(0))*50;
    barels[i].x > 510 || barels[i].x < 10 ? barels[i].x = 100 : false
    if(i-1 < 0){

    }
    else if(barels[i-1].x === barels[i].x){
      barels[i].x += +((Math.random()*10).toFixed(0))*50;
      barels[i].x > 510 || barels[i].x < 10 ? barels[i].x = 100 : false
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
