import * as PIXI from "../../node_modules/pixi.js/dist/pixi";
import keyboard from "./utils/keyboard";
import health, {healthMinus} from "./health";
import container from "./level";
import trees from "./trees";
import hitTestRectangle from "./utils/hit";
class Hero extends PIXI.Sprite{
  constructor(){
    super(PIXI.Texture.fromImage("../imgs/textures/hero.png"))
    const me = this;
    me.anchor.set(0.5);
    me.x = 250;
    me.y = 550;
    me.interactive = true;
    let left = keyboard(37),
      up = keyboard(38),
      right = keyboard(39),
      down = keyboard(40);
    left.press = () => {
      me.x -= 25;
      if(me.x < 40 ){
        me.x += 25;
      };
      trees.forEach(function(item,i,arr){
        if(hitTestRectangle(me, item)) { 
          me.x += 25;
        }
      });
    };
    up.press = () => {
      me.y -= 25;
      if(me.y < 0){
        me.y += 25;
      }
      trees.forEach(function(item,i,arr){
        if(hitTestRectangle(me, item)) { 
          me.y += 25;
        }
      });
    };
    right.press = () => {
      me.x += 25;
      if(me.x > 500){
        me.x -= 25;
      }
      trees.forEach(function(item,i,arr){
        if(hitTestRectangle(me, item)) { 
          me.x -= 25;
        }
      });
    };
    down.press = () => {
      me.y += 25;
      if(me.y > 550){
        me.y -= 25;
      }
      trees.forEach(function(item,i,arr){
        if(hitTestRectangle(me, item)) { 
          me.y -= 25;
        }
      });
    };
  }
  roll = false;
  lifes = health.length;
  die(){
    this.y = 550;
    this.lifes --;
    healthMinus();
    if(this.lifes <= 0){
      this.lifes = 0
      this.y = 0;
    }
  }
}

const hero = new Hero();

console.log(hero);
container.addChild(hero);
export default hero;
