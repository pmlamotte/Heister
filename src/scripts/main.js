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
	root.addComponent(camera);
	root.addComponent(entityBuilder.build('attractor'));
	//root.addComponent(entityBuilder.build('debugSmiley'));
	//root.addComponent(entityBuilder.build('player smiley', {position: {x: 500, y: 500}}));
	//addSmileys(7);
	loadLevel('test', function() {
		addHoustons();
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

	function addSmileys(count) {
		for (var i = 0; i < count; i++) {
			var options = {
				position: {x: getWidth() * (i / count), y: 1}
			};
			root.addComponent(entityBuilder.build('smiley', options));
		}
	}

	function addHoustons() {
		var tiles = textureFactory.getTextureTileIds('houston');

		_.each(tiles, function(tile) {
			root.addComponent(entityBuilder.build('smiley', {
				base: {
					position: {
						x: Math.random() * 500,
						y: Math.random() * 200
					}
				},
				"SpriteComponent": ["houston", tile]
			}));
		});
	}
});