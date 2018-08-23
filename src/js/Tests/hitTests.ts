import barels from '../levelItems/barell';
import hero from "../hero";
import trees from "../levelItems/trees";
import enemys from '../levelItems/enemys';
import hitTestRectangle from "../utils/hit";

class Test {
  barelPick(){
  barels.forEach(function(item,i,arr){
    if(hitTestRectangle(hero, item)) { 
      item.roll()
    }
  })
}
treeCheck(horizontal:boolean, val:number){
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
monsterCheck(){
  enemys.forEach(function(item,i,arr){
    if(hitTestRectangle(hero, item)) { 
      hero.die();
    }
  })
}

}

const tests = new Test()
export default tests;