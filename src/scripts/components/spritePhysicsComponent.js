class SpritePhysicsComponent extends BaseComponent {

	constructor() {
		super();
	}

	createBody() {
		if (_.isUndefined(this.body)) {
			var sprite = this.parent.getComponentByType('SpriteComponent').sprite;
			this.body = Physics.body('rectangle', {
				width: sprite.width,
				height: sprite.height,
				x: this.parent.position.x,
				y: this.parent.position.y
			});
			physicsManager.world.add(this.body);
		}
	}

	update(timeElapsed) {
		this.createBody();
		this.parent.position.x = this.body.state.pos.x;
		this.parent.position.y = this.body.state.pos.y;
		this.parent.rotation = this.body.state.angular.pos;
	}
}