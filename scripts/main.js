"use strict";

var stage = new PIXI.Stage(0);

// create a renderer instance.
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

window.inputManager = new InputManager();
window.textureFactory = new TextureFactory();
window.physicsManager = new PhysicsManager();
textureFactory.load(function () {
	window.root = new BaseEntity();
	root.addComponent(physicsManager);
	root.addComponent(entityBuilder.build("attractor"));
	//root.addComponent(entityBuilder.build('debugSmiley'));
	//root.addComponent(entityBuilder.build('player smiley', {position: {x: 500, y: 500}}));
	addSmileys(7);

	requestAnimFrame(animate);

	function getTimeInSeconds() {
		return Date.now() / 1000;
	}

	var lastTime = getTimeInSeconds();
	var lastDelta = 1;
	function animate() {
		requestAnimFrame(animate);

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
				position: { x: getWidth() * (i / count), y: 1 }
			};
			root.addComponent(entityBuilder.build("smiley", options));
		}
	}
});