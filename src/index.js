import "pixi.js";
// import grass from "./js/level";
import grassIcon from "./imgs/textures/grass.jpg"
// const app = new PIXI.Application({backgroundColor : 0x1099bb});

// // document.body.appendChild(app.view);
// const container = new PIXI.Container();

// app.stage.addChild(container);
// // create a new Sprite from an image path

// // center the sprite's anchor point
// // grass.anchor.set(0.5);

// // move the sprite to the center of the screen
// // grass.x = app.screen.width / 2;
// // grass.y = app.screen.height / 2;
// // grass.scale.x = 0.01;
// // grass.scale.y = 0.015;
// for (let i = 0; i < 25; i++) {
//   const bunny = new PIXI.Sprite(grass);
//   bunny.anchor.set(0.5);
//   bunny.x = (i % 5) * 40;
//   bunny.y = Math.floor(i / 5) * 40;
//   container.addChild(bunny);
// }
// container.x = (app.screen.width - container.width) / 2;
// container.y = (app.screen.height - container.height) / 2;

// // Listen for animate update
// // app.ticker.add(function(delta) {
// //     // just for fun, let's rotate mr rabbit a little
// //     // delta is 1 if running at 100% performance
// //     // creates frame-independent transformation
// //     grass.rotation += 0.1 * delta;
// // });
var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

var container = new PIXI.Container();

app.stage.addChild(container);

var texture = PIXI.Texture.fromImage(grassIcon);

// Create a 5x5 grid of bunnies
for (var i = 0; i < 100; i++) {
    var bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.3);
    bunny.scale.x = 0.02;
    bunny.scale.y = 0.02;
    bunny.x = (i % 10) * 68;
    bunny.y = Math.floor(i / 10) * 50;
    container.addChild(bunny);
}

// Center on the screen
container.x = (app.screen.width - container.width) / 2;
container.y = (app.screen.height - container.height) / 2;