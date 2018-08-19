import * as PIXI from "../../node_modules/pixi.js/dist/pixi";
import container from "./level";
import imgs from '../js/imgs';

PIXI.loader.load(imgs);
PIXI.loader.load(container);

class Health extends PIXI.Sprite{
  constructor(){
    super(imgs.healthImg)
    this.anchor.set(0.5);
    this.scale.set(0.3, 0.3);
    this.y = 0;
  }
}
let k:object;
const health:Array<Health>= [];

PIXI.loader.load(generateHealth);
function generateHealth(lifes:number){
  for(let i:number = 0; health.length <= 2; i ++ ){
    k = new Health();
    health.push(k);
  }
}
PIXI.loader.load(placeHealth);
function placeHealth(){ 
  let healthNext = 0
  health.forEach(function(life,i,arr){
    health[i].x = 600 - (health.length* 50)
    health[i].x += healthNext;
    healthNext += 50;
  }
  )} 

let i = 0;
export function healthMinus(){
    container.removeChild(health[i]);
    i++;
}
PIXI.loader.load(healthRender);
export function healthRender(){
  health.forEach(function(life,i,arr){
    container.addChild(life);
  });
}

export default health;