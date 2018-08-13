import "pixi.js";
import healthTexture from "../imgs/textures/hp.png";
import container from "./level";
import hero from "./hero";

class Health extends PIXI.Sprite{
  constructor(){
    super(PIXI.Texture.fromImage(healthTexture))
    const me = this;
    me.anchor.set(0.5);
    me.scale.set(0.3, 0.3);
    me.y = 0;
  }
}

const health = [];
function generateHealth(lifes){
  for(let i = 0; health.length <= lifes; i ++ ){
    i = new Health();
    health.push(i);
  }
}
generateHealth(5);

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