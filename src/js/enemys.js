import "pixi.js";
import enemy from "../imgs/textures/enemy.png"
class Enemy extends PIXI.Sprite{
  constructor(parent = null){
    super(PIXI.Texture.fromImage(enemy));
    const me = this;
    me.scale.set(0.7);
    me.anchor.set(0.5);
    me.y =0;
    if(parent){
      parent.addChild(me);
    }
  }
}
const enemys = [];

for (let i=0; enemys.length < 10; i++ ){
  i = new Enemy()
  enemys.push(i);
};

let positionY = 50;
let positionLuck = 0;
enemys.forEach(function(item,i,arr){
  item.y +=positionY;
  positionY += 50;
  positionLuck=Math.random()*10;
  if(positionLuck >= 5){
    item.x = 550;
    item.startPoint = "right";
  }
  else{
    item.startPoint = "left";
  }
})

export function monstersMove(){
  enemys.forEach(function(item,i,arr){
    item.startPoint === "right" ? item.x-=5 : item.x+=5 
    if(item.x > 550){
      item.x = 0;
    }
    if(item.x < 0){
      item.x = 550;
    }
  })
}
export default enemys;