import "pixi.js";
import grassIcon from "../imgs/textures/grass.jpg";
import dust from "../imgs/textures/dust.jpg"
import hero from "../js/hero";
import oceanIcon from "../imgs/textures/ocean.png";
import asphaltIcon from "../imgs/textures/asphalt.png"
const container = new PIXI.Container();

const grass = PIXI.Texture.fromImage(grassIcon);
const ocean = PIXI.Texture.fromImage(oceanIcon);
const asphalt = PIXI.Texture.fromImage(asphaltIcon);
const Dust = PIXI.Texture.fromImage(dust)

for (var i = 0; i < 144; i++) {
    const levelDust = new PIXI.Sprite(Dust);
    levelDust.anchor.set(0.5);
    levelDust.x = (i % 12) * 50;
    levelDust.y = Math.floor(i / 12) * 50;
    if(levelDust.y >= 50 && levelDust.y <=500 ){
      levelDust.x = (i % 2) * 550;
    }
    container.addChild(levelDust);
}
let levelheight = 50;
export let grassLines = [];
export let asphaltLines = [];
export let oceanLines = [];
function grassMap(count){
  for(var i = 0; i < 10*count; i++) {
    const grassMap = new PIXI.Sprite(grass);
    grassMap.anchor.set(0.5);
    grassMap.y = ((i % (1*count) * 50))+levelheight;
    grassMap.x = (Math.floor(i / (1*count)) * 50)+50;
    container.addChild(grassMap);
    
  }
  levelheight += count*50;
  for(let i = levelheight - ((count*50)-50); i <= levelheight; i+=50){
    grassLines.push(i);
  }
}

function asphaltMap(count){
  for(var i = 0; i < 10*count; i++) {
    const asphaltMap = new PIXI.Sprite(asphalt);
    asphaltMap.anchor.set(0.5);
    asphaltMap.y = ((i % (1*count) * 50))+levelheight;
    asphaltMap.x = (Math.floor(i / (1*count)) * 50)+50;
    container.addChild(asphaltMap);
  }
  levelheight += count*50;
  for(let i = levelheight - ((count*50)-50); i <= levelheight; i+=50){
    asphaltLines.push(i);
  }
}
function oceanMap(count){
  for(var i = 0; i < 10*count; i++) {
    const oceanMap = new PIXI.Sprite(ocean);
    oceanMap.anchor.set(0.5);
    oceanMap.y = ((i % (1*count) * 50))+levelheight;
    oceanMap.x = (Math.floor(i / (1*count)) * 50)+50;
    container.addChild(oceanMap);
  }
  levelheight += count*50;
  for(let i = levelheight - ((count*50)-50); i <= levelheight; i+=50){
    oceanLines.push(i);
  }
}

grassMap(3);
oceanMap(2);
asphaltMap(3);
oceanMap(2);



container.addChild(hero);
export default container;