class AttractorComponent extends BaseComponent {
	constructor(options={pos:{x: 0, y: 0}}) {
		super();
		this.attractor = Physics.behavior('attractor', options);
		physicsManager.world.add(this.attractor);
	}

	update() {
		this.parent.position = this.attractor.position();
	}
}