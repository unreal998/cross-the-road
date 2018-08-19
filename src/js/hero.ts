import * as PIXI from "../../node_modules/pixi.js/dist/pixi";
import imgs from "./imgs";
import keyboard from "./utils/keyboard";
import health, {healthMinus} from "./health";
import container from "./level";
import trees from "./trees";
import hitTestRectangle from "./utils/hit";

class Hero extends PIXI.Sprite{
  constructor(){
    super(PIXI.Texture.fromImage(imgs.hero))
    this.anchor.set(0.5);
    this.x = 250;
    this.y = 550;
    };
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

const left = keyboard(37),
up = keyboard(38),
right = keyboard(39),
down = keyboard(40);

function testCheck(horizontal:boolean, val:number){
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

left.press = () => {
  hero.x -= 25;
  if(hero.x < 40 ){
    hero.x += 25;
  };
  testCheck(true, 25)
};
up.press = () => {
  hero.y -= 25;
  if(hero.y < 0){
    hero.y += 25;
  }
  testCheck(false, 25)
};
right.press = () => {
  hero.x += 25;
  if(hero.x > 500){
    hero.x -= 25;
  }
  testCheck(true, -25)
};
down.press = () => {
  hero.y += 25;
  if(hero.y > 550){
    hero.y -= 25;
  }
  testCheck(false, -25)
}

container.addChild(hero);
export default hero;
