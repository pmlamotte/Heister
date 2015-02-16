class Camera extends BaseComponent {
	constructor() {
		super();
		this.container = new PIXI.DisplayObjectContainer();
		window.worldStage = new PIXI.DisplayObjectContainer();
		stage.addChild(this.container);
		stage.addChild(window.worldStage);
		this.position = {x: 0, y: 0};
	}

	setPosition({x, y}) {
		this.position = {
			x: x - renderer.width / 2,
			y: y - renderer.height / 2
		};
	}

	update(timeElapsed) {
		window.worldStage.position = {
			x: -(this.position.x),
			y: -(this.position.y)
		};
	}
}