import * as PIXI from "../../node_modules/pixi.js/dist/pixi"; 
// import hero from "./hero";
// import hitTestRectangle from "./utils/hit";
import container,{ asphaltLines } from "./level";
import imgs from '../js/imgs';
// import enemySprite from "../imgs/textures/MonsterSprites.png";
PIXI.loader.load(imgs);
PIXI.loader.load(container);
class Enemy extends PIXI.Sprite{
  constructor(){
    super(imgs.enemyImg);
    const me = this;
    me.scale.set(0.7);
    me.anchor.set(0.5);
    me.y =0;
    me.speed = (Math.random()*10).toFixed(0);
  }
}
const enemys:Array<Enemy> = [];
let examp:Enemy

let monsterCount = asphaltLines.length;

function addMonsters(monsters:number){
  for (let i=0; enemys.length < monsterCount; i++ ){
    examp = new Enemy()
    examp.y = asphaltLines[i]-50;
    enemys.push(examp);
  };
}


let positionY = 50;
let positionLuck = 0;
let i = 0;
PIXI.loader.load(placeMonsters);
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


export function monstersMove(delta:number){
  enemys.forEach(function(item,i,arr){
    item.startPoint === "right" ? item.x-=((item.speed/4)+delta) : item.x+=(item.speed/4)+delta;
    if(item.x > 550){
      container.removeChild(item)
    }
    if(item.x < 0){
      container.removeChild(item)
    }
    // if(hitTestRectangle(hero, item)) { 
    //   hero.die();
    // }
  })
}
PIXI.loader.load(MonstersRender);
function MonstersRender(){
  enemys.forEach(function(item,i,arr){
    
    container.addChild(enemys[i]);
  })
}



let timer = ((Math.random()*10000)/3).toFixed(0);

PIXI.loader.load(MonstresCount);

function MonstresCount(){
  const addMonstersCount = setInterval(function(){
    monsterCount +=asphaltLines.length;
    timer = ((Math.random()*10000)/3).toFixed(0);
    PIXI.loader.load(addMonsters);
    console.log('tick')
    PIXI.loader.load(placeMonsters);
    PIXI.loader.load(MonstersRender);
  },timer);
}
export default enemys;