"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var BaseComponent = (function () {
	function BaseComponent() {
		_classCallCheck(this, BaseComponent);

		this.components = [];
	}

	_prototypeProperties(BaseComponent, null, {
		update: {
			value: function update() {},
			writable: true,
			configurable: true
		},
		getType: {
			value: function getType() {
				return this.constructor.name;
			},
			writable: true,
			configurable: true
		},
		getComponentByType: {
			value: function getComponentByType(type) {
				return _.find(this.components, function (component) {
					return component.getType() == type;
				});
			},
			writable: true,
			configurable: true
		},
		getComponentsByType: {
			value: function getComponentsByType(type) {
				var components = _.reduce(this.components, function (list, component) {
					return list.concat(component.getComponentsByType(type));
				}, []);
				if (this.getType() == type) {
					components.push(this);
				}
				return components;
			},
			writable: true,
			configurable: true
		},
		getComponentsByName: {
			value: function getComponentsByName(name) {
				var entities = [];
				if (this.name == name) {
					entities.push(this);
				}

				return _.reduce(this.components, function (list, component) {
					return list.concat(component.getComponentsByName(name));
				}, entities);
			},
			writable: true,
			configurable: true
		},
		addComponent: {
			value: function addComponent(component) {
				component.parent = this;
				this.components.push(component);
			},
			writable: true,
			configurable: true
		},
		updateComponents: {
			value: function updateComponents(timeElapsed, now) {
				this.update(timeElapsed);
				_.invoke(this.components, "updateComponents", timeElapsed, now);
			},
			writable: true,
			configurable: true
		}
	});

	return BaseComponent;
})();