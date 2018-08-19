import * as PIXI from "../../node_modules/pixi.js/dist/pixi";
import container,{ grassLines }  from "./level";
import imgs from './imgs'

class Trees extends PIXI.Sprite{
  constructor(){
    super(PIXI.Texture.fromImage(imgs.tree))
    this.anchor.set(0.5);
    this.x = 0;
    this.y = 0;
  }
}
let trees:Array<Trees> = [];
let treeslLen = grassLines.length;
let k = 0;
let examp:Trees
function addTrees(treesCount:number){
  for (let i=0; trees.length < treesCount; i++ ){
    if(k > treeslLen-1){
      k = 0
    }
    examp = new Trees()
    examp.y = grassLines[k]-50;
    trees.push(examp);
    k++
  };
}

addTrees(10);

let p = 0;
function placeTrees(){ 
  for(let i = 0 ; i <= trees.length-1; i++ ){
    if(p > treeslLen-1){
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
placeTrees();

function treesRender(){
  trees.forEach(function(item, i, arr){
    container.addChild(trees[i])
  })
}
treesRender();
export default trees;
