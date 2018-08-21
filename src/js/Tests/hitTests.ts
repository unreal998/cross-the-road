import barels from '../levelItems/barell';
import hero from "../hero";
import trees from "../levelItems/trees";
import enemys from '../levelItems/enemys';
import hitTestRectangle from "../utils/hit";

export function barelPick(){
  barels.forEach(function(item,i,arr){
    if(hitTestRectangle(hero, item)) { 
      item.roll()
    }
  })
}

export function treeCheck(horizontal:boolean, val:number){
  trees.forEach(function(item,i,arr){
    if(hitTestRectangle(hero, item)) { 
      if(horizontal === true){
        hero.x += val
      }
      else{
        hero.y += val
      }
    }
  });
}

export function monsterCheck(){
  enemys.forEach(function(item,i,arr){
    if(hitTestRectangle(hero, item)) { 
      hero.die();
    }
  })
}
