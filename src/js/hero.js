import "pixi.js";
import heroImg from "../imgs/textures/hero.png";
import keyboard from "./keyboard";
import health, {healthMinus} from "./health";
import container from "./level"
class Hero extends PIXI.Sprite{
  constructor(){
    super(PIXI.Texture.fromImage(heroImg))
    const me = this;
    me.anchor.set(0.5);
    me.x = 250;
    me.y = 550;
    me.interactive = true;
    me.lifes = health.length;
    me.die = () =>{
      me.y = 550;
      me.lifes --;
      healthMinus();
      if(me.lifes <= 0){
        me.lifes = 0
        me.y = 0;
      }
    }
    me.roll = false;

    let left = keyboard(37),
      up = keyboard(38),
      right = keyboard(39),
      down = keyboard(40);
    left.press = () => {
      me.x -= 25;
      if(me.x < 0){
        me.x += 25;
      }
    };
    up.press = () => {
      me.y -= 25;
      console.log(me.y - 50);
      if(me.y < 0){
        me.y += 25;
      }
    };
    right.press = () => {
      me.x += 25;
      if(me.x > 550){
        me.x -= 25;
      }
    };
    down.press = () => {
      me.y += 25;
      if(me.y > 550){
        me.y -= 25;
      }
    };
  }
}

const hero = new Hero()

container.addChild(hero);
export default hero;
