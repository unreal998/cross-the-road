import * as PIXI from "../../node_modules/pixi.js/dist/pixi";
import keyboard from "./utils/keyboard";
import health, {healthMinus} from "./health";
import container from "./level";
import trees from "./trees";
import hitTestRectangle from "./utils/hit";
import imgs from '../js/imgs';
PIXI.loader.load(imgs);
PIXI.loader.load(container);

class Hero extends PIXI.Sprite{
  constructor(){
    super(imgs.heroImg)
    this.anchor.set(0.5);
    this.x = 250;
    this.y = 550;
    let left = keyboard(37),
      up = keyboard(38),
      right = keyboard(39),
      down = keyboard(40);
    left.press = () => {
      this.x -= 25;
      if(this.x < 40 ){
        this.x += 25;
      };
      // trees.forEach(function(item,i,arr){
      //   if(hitTestRectangle(me, item)) { 
      //     me.x += 25;
      //   }
      // });
    };
    up.press = () => {
      this.y -= 25;
      if(this.y < 0){
        this.y += 25;
      }
      // trees.forEach(function(item,i,arr){
      //   if(hitTestRectangle(me, item)) { 
      //     me.y += 25;
      //   }
      // });
    };
    right.press = () => {
      this.x += 25;
      if(this.x > 500){
        this.x -= 25;
      }
      // trees.forEach(function(item,i,arr){
      //   if(hitTestRectangle(me, item)) { 
      //     me.x -= 25;
      //   }
      // });
    };
    down.press = () => {
      this.y += 25;
      if(this.y > 550){
        this.y -= 25;
      }
      // trees.forEach(function(item,i,arr){
      //   if(hitTestRectangle(me, item)) { 
      //     me.y -= 25;
      //   }
      // });
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
let hero:Hero;
PIXI.loader.load(heroAdd)
function heroAdd(){
  hero = new Hero();
  container.addChild(hero);
}
export default hero;