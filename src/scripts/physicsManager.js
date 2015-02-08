class PhysicsManager extends BaseComponent {
	constructor() {
		super();
		this.world = Physics({
			integrator: 'verlet'
		});

		this.world.add(Physics.behavior('body-impulse-response'));
		this.world.add(Physics.behavior('sweep-prune'));
		this.world.add(Physics.behavior('body-collision-detection'));
	}

	update(timeElapsed, now) {
		this.world.step(Date.now());
	}
}
