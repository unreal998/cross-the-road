import "pixi.js";
import grassIcon from "../imgs/textures/grass.jpg";
import dust from "../imgs/textures/dust.jpg"
import enemys from "../js/enemys";
import hero from "../js/hero";
import barels from "../js/barell";

const container = new PIXI.Container();

const grass = PIXI.Texture.fromImage(grassIcon);
const Dust = PIXI.Texture.fromImage(dust)



for (var i = 0; i < 144; i++) {
    const levelDust = new PIXI.Sprite(Dust);
    levelDust.anchor.set(0.5);
    levelDust.x = (i % 12) * 50;
    levelDust.y = Math.floor(i / 12) * 50;
    if(levelDust.y >= 50 && levelDust.y <=500 ){
      levelDust.x = (i % 2) * 550;
    }
    container.addChild(levelDust);
}


for(var i = 0; i < 100; i++) {
  const levelMap = new PIXI.Sprite(grass);
  levelMap.anchor.set(0.5);
  levelMap.x = ((i % 10) * 50)+50;
  levelMap.y = (Math.floor(i / 10) * 50)+50;
  container.addChild(levelMap);
}


function MonstersRender(){
  enemys.forEach(function(item,i,arr){
    
    container.addChild(enemys[i]);
  })
}


MonstersRender()
function BarrelsRender(){
  barels.forEach(function(item, i, arr){
    container.addChild(barels[i])
  })
}
BarrelsRender();

const Rerender = setInterval(function(){
  MonstersRender()
},2000)

container.addChild(hero);
export default container;
