import * as PIXI from "../../node_modules/pixi.js/dist/pixi";
import imgs from "./imgs";
import health, {healthMinus} from "./levelItems/health";
import container from "./level";
import "./controller";

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

container.addChild(hero);
export default hero;
