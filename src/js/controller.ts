import keyboard from "./utils/keyboard";
import hero from './hero'
import { treeCheck } from './Tests/hitTests'


const left = keyboard(37),
up = keyboard(38),
right = keyboard(39),
down = keyboard(40);

left.press = () => {
  hero.x -= 25;
  if(hero.x < 40 ){
    hero.x += 25;
  };
  treeCheck(true, 25)
};
up.press = () => {
  hero.y -= 25;
  if(hero.y < -50){
    hero.y += 25;
  }
  treeCheck(false, 25)
};
right.press = () => {
  hero.x += 25;
  if(hero.x > 500){
    hero.x -= 25;
  }
  treeCheck(true, -25)
};
down.press = () => {
  hero.y += 25;
  if(hero.y > 550){
    hero.y -= 25;
  }
  treeCheck(false, -25)
}