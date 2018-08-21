import * as PIXI from "../../../node_modules/pixi.js/dist/pixi";
import container from "../level";
import imgs from "../imgs";

class Health extends PIXI.Sprite{
  constructor(){
    super(PIXI.Texture.fromImage(imgs.health))
    this.anchor.set(0.5);
    this.scale.set(0.3, 0.3);
    this.y = 0;
  }
}

let k:object;
const health:Array<Health>= [];
export function generateHealth(lifes:number){
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

function healthRender(){
  health.forEach(function(life,i,arr){
    container.addChild(life);
  });
}

healthRender()
export default health;