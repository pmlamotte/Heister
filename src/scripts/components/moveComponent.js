class MoveComponent extends BaseComponent {
	constructor() {
		super();
		this.moveSpeed = 75;
	}

	update(timeElapsed) {
		var offset = [0,0];
		var dirs = [
			['left_arrow', -1, 0],
			['up_arrow', 0, -1],
			['right_arrow', 1, 0],
			['down_arrow', 0, 1]
		]
		_.each(dirs, function(dir) {
			if (inputManager.isPressed(inputManager[dir[0]])) {
				var speed = timeElapsed * this.moveSpeed;
				offset[0] += dir[1] * speed;
				offset[1] += dir[2] * speed;
			}
		}.bind(this));

		this.parent.position.x += offset[0];
		this.parent.position.y += offset[1];
	}
}