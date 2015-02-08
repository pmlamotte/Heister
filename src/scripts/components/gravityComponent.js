class GravityComponent extends BaseComponent {

	constructor() {
		super();
		this.gravity = Physics.behavior('constant-acceleration', {
			acc: {x: 0, y: 50}
		});
		physicsManager.world.add(this.gravity);
	
}}