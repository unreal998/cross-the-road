import * as PIXI from "../../node_modules/pixi.js/dist/pixi";
// import healthTexture from "../imgs/textures/hp.png";
import container from "./level";


class Health extends PIXI.Sprite{
  constructor(){
    super(PIXI.Texture.fromImage("../imgs/textures/hp.png"))
    const me = this;
    me.anchor.set(0.5);
    me.scale.set(0.3, 0.3);
    me.y = 0;
  }
}
let k:object;
const health:Array<Health>= [];
function generateHealth(lifes:number){
  for(let i:number = 0; health.length <= lifes; i ++ ){
    k = new Health();
    health.push(k);
  }
}
generateHealth(2);

function placeHealth(){ 
  let healthNext = 0
  health.forEach(function(life,i,arr){
    health[i].x = 600 - (health.length* 50)
    health[i].x += healthNext;
    healthNext += 50;
  }
  )} 
placeHealth();
let i = 0;
export function healthMinus(){
    container.removeChild(health[i]);
    i++;
}
export function healthRender(){
  health.forEach(function(life,i,arr){
    container.addChild(life);
  });
}

export default health;