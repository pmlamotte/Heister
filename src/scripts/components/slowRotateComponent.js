class SlowRotateComponent extends BaseComponent {
	constructor() {
		super();
		this.rotateSpeed = 1;
	}

	update(timeElapsed) {
		this.parent.rotation += this.rotateSpeed * timeElapsed;
	}
}