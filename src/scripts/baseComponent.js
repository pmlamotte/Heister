class BaseComponent {
	constructor() {
		this.components = [];
	}

	update() {}

	addComponent(component) {
		component.parent = this;
		this.components.push(component);
	}

	updateComponents(timeElapsed) {
		this.update(timeElapsed);
		_.invoke(this.components, 'updateComponents', timeElapsed);
	}
}