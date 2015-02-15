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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92ZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sYUFBYSxjQUFTLGFBQWE7QUFDN0IsVUFETixhQUFhO3dCQUFiLGFBQWE7O0FBRWpCLDZCQUZJLGFBQWEsNkNBRVQ7QUFDUixNQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztFQUNoQjs7V0FKSSxhQUFhLEVBQVMsYUFBYTs7c0JBQW5DLGFBQWE7QUFNbEIsUUFBTTtVQUFBLGdCQUFDLFdBQVcsRUFBRTtBQUNuQixRQUFJLE1BQU0sR0FBRyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0FBQ3ZCLFFBQUksSUFBSSxHQUFHLENBQ1YsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3JCLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNuQixDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3JCLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDcEIsQ0FBQztBQUNGLFFBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNuQixLQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBLFVBQVMsR0FBRyxFQUFFO0FBQzFCLFNBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNqRCxVQUFJLEtBQUssR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNyQyxZQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDM0IsWUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQzNCLFlBQU0sR0FBRyxJQUFJLENBQUM7QUFDZCxhQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO01BQ3ZCO0tBQ0QsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztBQUVkLFFBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQUM7O0FBRTVFLFFBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQzVCLFlBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUIsWUFBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM5QixZQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLFNBQUksTUFBTSxFQUFFO0FBQ1gsYUFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O01BSTFDLE1BQU07QUFDTixhQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO01BQzNCO0tBQ0Q7SUFDRDs7Ozs7O1FBeENJLGFBQWE7R0FBUyxhQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvbW92ZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmZvcmNlID0gMTA7XG5cdH1cblxuXHR1cGRhdGUodGltZUVsYXBzZWQpIHtcblx0XHR2YXIgb2Zmc2V0ID0ge3g6MCx5OjB9O1xuXHRcdHZhciBkaXJzID0gW1xuXHRcdFx0WydsZWZ0X2Fycm93JywgLTEsIDBdLFxuXHRcdFx0Wyd1cF9hcnJvdycsIDAsIC0xXSxcblx0XHRcdFsncmlnaHRfYXJyb3cnLCAxLCAwXSxcblx0XHRcdFsnZG93bl9hcnJvdycsIDAsIDFdXG5cdFx0XTtcblx0XHR2YXIgbW92aW5nID0gZmFsc2U7XG5cdFx0Xy5lYWNoKGRpcnMsIGZ1bmN0aW9uKGRpcikge1xuXHRcdFx0aWYgKGlucHV0TWFuYWdlci5pc1ByZXNzZWQoaW5wdXRNYW5hZ2VyW2RpclswXV0pKSB7XG5cdFx0XHRcdHZhciBzcGVlZCA9IHRpbWVFbGFwc2VkICogdGhpcy5mb3JjZTtcblx0XHRcdFx0b2Zmc2V0LnggKz0gZGlyWzFdICogc3BlZWQ7XG5cdFx0XHRcdG9mZnNldC55ICs9IGRpclsyXSAqIHNwZWVkO1xuXHRcdFx0XHRtb3ZpbmcgPSB0cnVlO1xuXHRcdFx0XHRjb25zb2xlLmxvZygnbW92aW5nIScpO1xuXHRcdFx0fVxuXHRcdH0uYmluZCh0aGlzKSk7XG5cblx0XHR2YXIgcGh5c2ljcyA9IHRoaXMucGFyZW50LmdldENvbXBvbmVudEJ5VHlwZSgnU3ByaXRlUGh5c2ljc0NvbXBvbmVudCcpLmJvZHk7XG5cblx0XHRpZiAoIV8uaXNVbmRlZmluZWQocGh5c2ljcykpIHtcblx0XHRcdHBoeXNpY3Muc3RhdGUuYW5ndWxhci52ZWwgPSAwO1xuXHRcdFx0cGh5c2ljcy5zdGF0ZS5hbmd1bGFyLmFjYyA9IDA7XG5cdFx0XHRwaHlzaWNzLnN0YXRlLmFuZ3VsYXIucG9zID0gMDtcblx0XHRcdGlmIChtb3ZpbmcpIHtcblx0XHRcdFx0cGh5c2ljcy5zdGF0ZS52ZWwuc2V0KG9mZnNldC54LCBvZmZzZXQueSk7XG5cdFx0XHRcblx0XHRcdFx0Ly8gcGh5c2ljcy5wb3NpdGlvbi54ICs9IG9mZnNldFswXTtcblx0XHRcdFx0Ly8gcGh5c2ljcy5wb3NpdGlvbi55ICs9IG9mZnNldFsxXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBoeXNpY3Muc3RhdGUudmVsLnNldCgwLDApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==