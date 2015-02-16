class BaseComponent {
	constructor() {
		this.components = [];
	}

	update() {}

	getType() {
		return this.constructor.name;
	}

	getComponentByType(type) {
		return _.find(this.components, function(component) {
			return component.getType() == type;
		});
	}

	getComponentsByType(type) {
		var components = _.reduce(this.components, function(list, component) {
			return list.concat(component.getComponentsByType(type));
		}, []);
		if (this.getType() == type) {
			components.push(this);
		}
		return components;
	}

	getComponentsByName(name) {
		var entities = [];
		if (this.name == name) {
			entities.push(this);
		}

		return _.reduce(this.components, function(list, component) {
			return list.concat(component.getComponentsByName(name));
		}, entities);
	}

	addComponent(component) {
		component.parent = this;
		this.components.push(component);
	}

	removeComponent(component) {
		this.components = _.without(this.components, component);
	}

	updateComponents(timeElapsed, now) {
		this.update(timeElapsed);
		_.invoke(this.components, 'updateComponents', timeElapsed, now);
	}
}