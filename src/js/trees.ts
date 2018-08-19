import * as PIXI from '../../node_modules/pixi.js/dist/pixi';
import container,{ grassLines }  from "./level";
import imgs from '../js/imgs';
// import { treesSettings } from '../js/settings';

PIXI.loader.load(imgs);
PIXI.loader.load(container);

class Trees extends PIXI.Sprite{
  constructor(){
    super(imgs.treeImg)
    const me = this;
    me.anchor.set(0.5);
    me.x = 0;
    me.y = 0;
  }
}
let trees:Array<Trees> = [];
let k = 0;
let examp:Trees

PIXI.loader.load(addTrees);
export function addTrees(treesCount:number){
  for (let i=0; trees.length < 10; i++ ){
    console.log(grassLines);
    if(k > grassLines.length){
      k = 0
    }
    examp = new Trees()
    examp.y = grassLines[k]-50;
    trees.push(examp);
    k++
  };
}

let p = 0;

PIXI.loader.load(placeTrees)

function placeTrees(){ 
  for(let i = 0 ; i <= trees.length-1; i++ ){
    if(p > grassLines.length-1){
      p = 0
    }
    let treesLine = grassLines[p]-50;
    trees[i].x
    trees[i].y = treesLine;
    trees[i].x += +((Math.random()*10).toFixed(0))*50;
    trees[i].x > 510 || trees[i].x < 10 ? trees[i].x = 100 : false
    if(i-1 < 0){
    }
    else if(trees[i-1].x === trees[i].x){
      trees[i].x += +((Math.random()*10).toFixed(0))*50;
      trees[i].x > 510 || trees[i].x < 10 ? trees[i].x = 100 : false
    }
    p++
  }
}
PIXI.loader.load(treesRender)

function treesRender(){
  trees.forEach(function(item, i, arr){
    container.addChild(trees[i])
  })
}

export default trees;
