import "pixi.js";
import container,{ grassLines }  from "./level";
import treeTexture from "../imgs/textures/tree.png";
import hero from "./hero";
import hitTestRectangle from "./hit";
class Trees extends PIXI.Sprite{
  constructor(parent = null){
    super(PIXI.Texture.fromImage(treeTexture))
    const me = this;
    me.anchor.set(0.5);
    me.x = 0;
    me.y = 0;
    if(parent){
      parent.addChild(me);
    }
  }
}
let trees = [];
let treeslLen = grassLines.length;
function addTrees(treesCount){
  for (let i=0; trees.length < treesCount; i++ ){
    let k = i;
    k = new Trees()
    k.y = grassLines[i]-50;
      trees.push(k);
  };
}

addTrees(treeslLen);

function placeTrees(){ 
  for(let i = 0 ; i <= trees.length-1; i++ ){
    let treesLine = grassLines[i]-50
    trees[i].y = treesLine;
    trees[i].y > 510 || trees[i].y < 10 ? trees[i].y = 50 : false
    trees[i].x += ((Math.random()*10).toFixed(0))*50;
    trees[i].x > 510 || trees[i].x < 10 ? trees[i].x = 50 : false
  }
}
placeTrees();

export function treesPick(){
  trees.forEach(function(item,i,arr){
    if(hitTestRectangle(hero, item)) { 
      
    }
  })
}

function treesRender(){
  trees.forEach(function(item, i, arr){
    container.addChild(trees[i])
  })
}
treesRender();
export default trees;
