class MoveComponent extends BaseComponent {
	constructor() {
		super();
		this.force = 10;
	}

	update(timeElapsed) {
		var offset = {x:0,y:0};
		var dirs = [
			['left_arrow', -1, 0],
			['up_arrow', 0, -1],
			['right_arrow', 1, 0],
			['down_arrow', 0, 1]
		];
		var moving = false;
		_.each(dirs, function(dir) {
			if (inputManager.isPressed(inputManager[dir[0]])) {
				var speed = timeElapsed * this.force;
				offset.x += dir[1] * speed;
				offset.y += dir[2] * speed;
				moving = true;
			}
		}.bind(this));

		var physics = this.parent.getComponentByType('SpritePhysicsComponent').body;

		if (!_.isUndefined(physics)) {
			physics.state.angular.vel = 0;
			physics.state.angular.acc = 0;
			physics.state.angular.pos = 0;
			if (moving) {
				physics.sleep(false);
				physics.state.vel.set(offset.x, offset.y);
			
				// physics.position.x += offset[0];
				// physics.position.y += offset[1];
			} else {
				physics.state.vel.set(0,0);
			}
		}
	}
}