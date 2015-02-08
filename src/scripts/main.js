var stage = new PIXI.Stage(0x000000);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

window.inputManager = new InputManager();
window.textureFactory = new TextureFactory();
textureFactory.load();

var root = new BaseEntity()
var smiley = new SpriteComponent('smiley');
root.addComponent(smiley);
root.addComponent(new MoveComponent());
root.addComponent(new SlowRotateComponent());
root.position.x = 200;
root.position.y = 150;
root.rotation = 0;
smiley.update();

requestAnimFrame( animate );

function getTimeInSeconds() {
	return Date.now() / 1000;
}

var lastTime = getTimeInSeconds();
function animate() {

    requestAnimFrame( animate );

    var now = getTimeInSeconds();
    var timeElapsed = now - lastTime;
    root.updateComponents(timeElapsed);
    lastTime = now;

    // render the stage  
    renderer.render(stage);
}