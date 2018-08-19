import * as PIXI from "../../node_modules/pixi.js/dist/pixi";
import {levelSettings} from "./settings";
const container = new PIXI.Container();

const grass = PIXI.Texture.from("../imgs/textures/grass.jpg");
const ocean = PIXI.Texture.fromImage("../imgs/textures/ocean.png");
const asphalt = PIXI.Texture.fromImage( "../imgs/textures/asphalt.png");
const Dust = PIXI.Texture.fromImage("../imgs/textures/dust.jpg")

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
export let grassLines:Array<number> = [];
export let asphaltLines:Array<number> = [];
export let oceanLines:Array<number> = [];
export function grassMap(count:number){
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

export function asphaltMap(count:number){
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
export function oceanMap(count:number){
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

levelSettings();
export default container;