import * as PIXI from "../../node_modules/pixi.js/dist/pixi";
import imgs from "./imgs";
import {levelSettings} from "./settings";
import container from "./container";

const grass = PIXI.Texture.fromImage(imgs.grass);
const ocean = PIXI.Texture.fromImage(imgs.ocean);
const asphalt = PIXI.Texture.fromImage( imgs.asphalt);
const Dust = PIXI.Texture.fromImage(imgs.dust)
class Maps extends PIXI.Sprite{
  constructor(img:object,count:number){
    super(img);
    let k:Maps;
    for(var i = 0; i < 10*count; i++) {
    k = new PIXI.Sprite(img);
    k.anchor.set(0.5);
    k.y = ((i % (1*count) * 50))+levelheight;
    k.x = (Math.floor(i / (1*count)) * 50)+50;
    container.addChild(k);
    }
    levelheight += count*50;
  }
}

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

let grassLines:Array<number> = [];
let asphaltLines:Array<number> = [];
let oceanLines:Array<number> = [];


export function grassMap(count:number){
  const grassMap = new Maps(grass,count);
  for(let i = levelheight - ((count*50)-50); i <= levelheight; i+=50){
    grassLines.push(i);
  }
}

export function asphaltMap(count:number){
  const asphaltMap = new Maps(asphalt,count);
  for(let i = levelheight - ((count*50)-50); i <= levelheight; i+=50){
    asphaltLines.push(i);
  }
}

export function oceanMap(count:number){
  const oceanMap = new Maps(ocean,count);
  for(let i = levelheight - ((count*50)-50); i <= levelheight; i+=50){
    oceanLines.push(i);
  }
}


const lines = {
  grassLines: grassLines,
  asphaltLines: asphaltLines,
  oceanLines: oceanLines
}

export default lines
levelSettings();
