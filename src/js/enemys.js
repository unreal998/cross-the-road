import "pixi.js";
import enemy from "../imgs/textures/enemy.png";
import hero from "./hero";
import hitTestRectangle from "./hit";
import container from "./level";
class Enemy extends PIXI.Sprite{
  constructor(parent = null){
    super(PIXI.Texture.fromImage(enemy));
    const me = this;
    me.scale.set(0.7);
    me.anchor.set(0.5);
    me.y =0;
    me.speed = Math.random*10;
    if(parent){
      parent.addChild(me);
    }
  }
}
const enemys = [];
function addMonsters(monsters){
  for (let i=0; enemys.length < monsters; i++ ){
    i = new Enemy()
    enemys.push(i);
  };
}
addMonsters(10)

let positionY = 50;
let positionLuck = 0;
let i = 0;
function placeMonsters(){ 
  for(i ; i <= enemys.length-1; i++ ){
    enemys[i].y += positionY;
    positionY += 50;
    if(positionY >=550){
      positionY = 50;
    }
    positionLuck=Math.random()*10;
    if(positionLuck >= 5){
      enemys[i].x = 550;
      enemys[i].startPoint = "right";
    }
    else{
      enemys[i].startPoint = "left";
    }
  }
}
placeMonsters();

export function monstersMove(delta){
  enemys.forEach(function(item,i,arr){
    const speed = (Math.random()*10).toFixed(0);
    item.startPoint === "right" ? item.x-=(speed/2)+delta : item.x+=(speed/2)+delta;
    item.height === hero.y ? console.log('true'): ``;
    item.width === hero.x ? console.log(`true`): ``;
    if(item.x > 550){
      container.removeChild(item)
    }
    if(item.x < 0){
      container.removeChild(item)
    }
    if(hitTestRectangle(hero, item)) { 
      hero.die();
    }
  })
}

let monsterCount = 10;
const addMonstersCount = setInterval(function(){
  monsterCount +=10;
  addMonsters(monsterCount)
  console.log(enemys.length);
  placeMonsters();
},2000);


// setTimeout(function(){
//   clearInterval(addMonstersCount);
// },10000);

export default enemys;