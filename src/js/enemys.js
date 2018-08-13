import "pixi.js";
import enemy from "../imgs/textures/enemy.png";
import hero from "./hero";
import hitTestRectangle from "./hit";
import container,{ asphaltLines } from "./level";

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
const monstersLen = asphaltLines.length;
function addMonsters(monsters){
  for (let i=0; enemys.length < monsters; i++ ){
    let k = i;
    k = new Enemy()
    k.y = asphaltLines[i]-50;
    enemys.push(k);
  };
}
addMonsters(monstersLen)

let positionY = 50;
let positionLuck = 0;
let i = 0;
function placeMonsters(){ 
  for(i ; i <= enemys.length-1; i++ ){
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
      enemys[i].scale.set(-0.7,0.7);
    }
  }
}
placeMonsters();

export function monstersMove(delta){
  enemys.forEach(function(item,i,arr){
    const speed = (Math.random()*10).toFixed(0);
    item.startPoint === "right" ? item.x-=((speed/4)+delta) : item.x+=(speed/4)+delta;
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

function MonstersRender(){
  enemys.forEach(function(item,i,arr){
    
    container.addChild(enemys[i]);
  })
}

MonstersRender()

let monsterCount = monstersLen;

const addMonstersCount = setInterval(function(){
  monsterCount +=monstersLen;
  addMonsters(monsterCount)
  placeMonsters();
  MonstersRender()
},2000);

// setTimeout(function(){
//   clearInterval(addMonstersCount);
// },10000);

export default enemys;