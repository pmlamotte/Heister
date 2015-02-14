"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var MoveComponent = (function (BaseComponent) {
	function MoveComponent() {
		_classCallCheck(this, MoveComponent);

		_get(Object.getPrototypeOf(MoveComponent.prototype), "constructor", this).call(this);
		this.force = 10;
	}

	_inherits(MoveComponent, BaseComponent);

	_prototypeProperties(MoveComponent, null, {
		update: {
			value: function update(timeElapsed) {
				var offset = { x: 0, y: 0 };
				var dirs = [["left_arrow", -1, 0], ["up_arrow", 0, -1], ["right_arrow", 1, 0], ["down_arrow", 0, 1]];
				var moving = false;
				_.each(dirs, (function (dir) {
					if (inputManager.isPressed(inputManager[dir[0]])) {
						var speed = timeElapsed * this.force;
						offset.x += dir[1] * speed;
						offset.y += dir[2] * speed;
						moving = true;
						console.log("moving!");
					}
				}).bind(this));

				var physics = this.parent.getComponentByType("SpritePhysicsComponent").body;

				if (!_.isUndefined(physics)) {
					physics.state.angular.vel = 0;
					physics.state.angular.acc = 0;
					physics.state.angular.pos = 0;
					if (moving) {
						physics.state.vel.set(offset.x, offset.y);

						// physics.position.x += offset[0];
						// physics.position.y += offset[1];
					} else {
						physics.state.vel.set(0, 0);
					}
				}
			},
			writable: true,
			configurable: true
		}
	});

	return MoveComponent;
})(BaseComponent);