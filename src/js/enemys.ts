import * as PIXI from "../../node_modules/pixi.js/dist/pixi";
import hero from "./hero";
import hitTestRectangle from "./utils/hit";
import container,{ asphaltLines } from "./level";
import imgs from "./imgs";
// import enemySprite from "../imgs/textures/MonsterSprites.png";

class Enemy extends PIXI.Sprite{
  constructor(){
    super(PIXI.Texture.fromImage(imgs.enemy));
    this.scale.set(0.7);
    this.anchor.set(0.5);
    this.y =0;
    this.speed = (Math.random()*10).toFixed(0);
  }
}
const enemys:Array<Enemy> = [];
const monstersLen = asphaltLines.length;
let examp:Enemy
function addMonsters(monsters:number){
  for (let i=0; enemys.length < monsters; i++ ){
    examp = new Enemy()
    examp.y = asphaltLines[i]-50;
    enemys.push(examp);
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

export function monstersMove(delta:number){
  enemys.forEach(function(item,i,arr){
    item.startPoint === "right" ? item.x-=((item.speed/4)+delta) : item.x+=(item.speed/4)+delta;
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
let timer = ((Math.random()*10000)/3).toFixed(0);
const addMonstersCount = setInterval(function(){
  monsterCount +=monstersLen;
  timer = ((Math.random()*10000)/3).toFixed(0);
  addMonsters(monsterCount)
  placeMonsters();
  MonstersRender()
},timer);

export default enemys;