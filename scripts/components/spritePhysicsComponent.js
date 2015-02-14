"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var SpritePhysicsComponent = (function (BaseComponent) {
	function SpritePhysicsComponent() {
		_classCallCheck(this, SpritePhysicsComponent);

		_get(Object.getPrototypeOf(SpritePhysicsComponent.prototype), "constructor", this).call(this);
	}

	_inherits(SpritePhysicsComponent, BaseComponent);

	_prototypeProperties(SpritePhysicsComponent, null, {
		createBody: {
			value: function createBody() {
				if (_.isUndefined(this.body)) {
					var sprite = this.parent.getComponentByType("SpriteComponent").sprite;
					this.body = Physics.body("rectangle", {
						width: sprite.width,
						height: sprite.height,
						x: this.parent.position.x,
						y: this.parent.position.y,
						restitution: 1
					});
					physicsManager.world.add(this.body);
				}
			},
			writable: true,
			configurable: true
		},
		update: {
			value: function update(timeElapsed) {
				this.createBody();
				this.parent.position.x = this.body.state.pos.x;
				this.parent.position.y = this.body.state.pos.y;
				this.parent.rotation = this.body.state.angular.pos;
			},
			writable: true,
			configurable: true
		}
	});

	return SpritePhysicsComponent;
})(BaseComponent);