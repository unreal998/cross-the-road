import * as PIXI from "../../node_modules/pixi.js/dist/pixi"; 
import container,{ oceanLines }  from "./level";
import hero from "./hero";
import hitTestRectangle from "./utils/hit";
import imgs from '../js/imgs';

PIXI.loader.load(imgs);
PIXI.loader.load(container);
class Barell extends PIXI.Sprite{
  constructor(){
    super(imgs.barrelImg)
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
let examp:Barell

PIXI.loader.load(addBarells);

function addBarells(barelsCount:number){
  for (let i=0; barels.length < 8; i++ ){
    if(k > oceanLines.length-1){
      k = 0
    }
    examp = new Barell()
    examp.y = oceanLines[k]-50;
    barels.push(examp);
    k++
  };
}


let p = 0;

PIXI.loader.load(placeBarrels);

function placeBarrels(){ 
  for(let i = 0 ; i <= barels.length-1; i++ ){
    if(p > oceanLines.length-1){
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

// export function barelPick(){
//   barels.forEach(function(item,i,arr){
//     if(hitTestRectangle(hero, item)) { 
//       item.roll()
//     }
//   })
// }

PIXI.loader.load(BarrelsRender);
function BarrelsRender(){
  barels.forEach(function(item, i, arr){
    container.addChild(barels[i])
  })
}

export default barels;
