import hero from "../hero";
import container from "../container";
import youLoose from "../gameOverScreens/youLoose";
import youWin from "../gameOverScreens/youWin";

function end(){
  if (hero.lifes <= 0) {
  return (container.visible = false,
    youLoose.visible = true,
    youWin.visible = false
  );
  }
  else if (hero.y <=  0){
    return (container.visible = false,
      youLoose.visible = false,
      youWin.visible = true);
  }
  container.visible = true;
  youLoose.visible = false;
  youWin.visible = false;
}
export default end;