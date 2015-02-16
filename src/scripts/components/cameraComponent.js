class CameraComponent extends BaseComponent {
	constructor() {
		super();
	}

	update(timeElapsed) {
		camera.setPosition(this.parent.position);
	}
}