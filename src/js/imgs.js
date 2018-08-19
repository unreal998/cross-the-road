import * as PIXI from '../../node_modules/pixi.js/dist/pixi';
import hero from "../imgs/textures/hero.png";
import grass from "../imgs/textures/grass.jpg";
import dust  from"../imgs/textures/dust.jpg"
import ocean from "../imgs/textures/ocean.png" ;
import asphalt from "../imgs/textures/asphalt.png";
import barrel from "../imgs/textures/barrel.png";
import tree from "../imgs/textures/tree.png";
import health from "../imgs/textures/hp.png";
import enemy from "../imgs/textures/enemy.png";

const imgs = {}

PIXI.loader
.add(`heroImg`, hero)
.add(`grassImg`, grass)
.add(`dustImg`, dust)
.add(`oceanImg`,ocean)
.add(`asphaltImg`,asphalt)
.add(`barrelImg`, barrel)
.add(`treeImg`, tree)
.add(`healthImg`,health)
.add(`enemyImg`,enemy)

PIXI.loader.load((loader, resources) => {
    imgs.heroImg = resources.heroImg.texture;
    imgs.grassImg = resources.grassImg.texture;
    imgs.dustImg = resources.dustImg.texture;
    imgs.oceanImg = resources.oceanImg.texture;
    imgs.asphaltImg = resources.asphaltImg.texture;
    imgs.barrelImg = resources.barrelImg.texture;
    imgs.treeImg = resources.treeImg.texture;
    imgs.healthImg = resources.healthImg.texture;
    imgs.enemyImg = resources.enemyImg.texture;
});
export default imgs;
