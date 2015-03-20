window.stage = new PIXI.Stage(0x000000);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

window.inputManager = new InputManager();
window.textureFactory = new TextureFactory();
window.physicsManager = new PhysicsManager();
window.camera = new Camera();

textureFactory.load(window.textureAssets, function() {

	window.root = new BaseEntity();
	root.addComponent(physicsManager);

	loadLevel('test', function(entities) {
		_.map(entities, (entity) => root.addComponent(entity));
		var player = entityBuilder.build('player smiley', {
			base: {
				position: {
					x: getWidth() / 2,
					y: getHeight() / 2
				}
			}
		});

		player.addComponent(new CameraComponent());

		root.addComponent(player);
	});

	requestAnimFrame( animate );

	function getTimeInSeconds() {
		return Date.now() / 1000;
	}

	var lastTime = getTimeInSeconds();
	var lastDelta = 1;
	function animate() {

		requestAnimFrame( animate );

		var now = getTimeInSeconds();
		var timeElapsed = now - lastTime;
		root.updateComponents(timeElapsed, now);
		camera.update(timeElapsed, now);
		lastTime = now;
		lastDelta = timeElapsed;

		// render the stage  
		renderer.render(stage);
	}

	function getWidth() {
		return window.innerWidth;
	}

	function getHeight() {
		return window.innerHeight;
	}
});