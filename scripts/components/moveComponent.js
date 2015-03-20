"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var MoveComponent = (function (_BaseComponent) {
	function MoveComponent() {
		_classCallCheck(this, MoveComponent);

		_get(Object.getPrototypeOf(MoveComponent.prototype), "constructor", this).call(this);
		this.force = 10;
	}

	_inherits(MoveComponent, _BaseComponent);

	_createClass(MoveComponent, {
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
					}
				}).bind(this));

				var physics = this.parent.getComponentByType("SpritePhysicsComponent").body;

				if (!_.isUndefined(physics)) {
					physics.state.angular.vel = 0;
					physics.state.angular.acc = 0;
					physics.state.angular.pos = 0;
					if (moving) {
						physics.sleep(false);
						physics.state.vel.set(offset.x, offset.y);

						// physics.position.x += offset[0];
						// physics.position.y += offset[1];
					} else {
						physics.state.vel.set(0, 0);
					}
				}
			}
		}
	});

	return MoveComponent;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW92ZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sYUFBYTtBQUNQLFVBRE4sYUFBYSxHQUNKO3dCQURULGFBQWE7O0FBRWpCLDZCQUZJLGFBQWEsNkNBRVQ7QUFDUixNQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztFQUNoQjs7V0FKSSxhQUFhOztjQUFiLGFBQWE7QUFNbEIsUUFBTTtVQUFBLGdCQUFDLFdBQVcsRUFBRTtBQUNuQixRQUFJLE1BQU0sR0FBRyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDO0FBQ3ZCLFFBQUksSUFBSSxHQUFHLENBQ1YsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3JCLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNuQixDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3JCLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDcEIsQ0FBQztBQUNGLFFBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNuQixLQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBLFVBQVMsR0FBRyxFQUFFO0FBQzFCLFNBQUksWUFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNqRCxVQUFJLEtBQUssR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNyQyxZQUFNLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDM0IsWUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQzNCLFlBQU0sR0FBRyxJQUFJLENBQUM7TUFDZDtLQUNELENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7QUFFZCxRQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUFDOztBQUU1RSxRQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUM1QixZQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzlCLFlBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUIsWUFBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM5QixTQUFJLE1BQU0sRUFBRTtBQUNYLGFBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckIsYUFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O01BSTFDLE1BQU07QUFDTixhQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO01BQzNCO0tBQ0Q7SUFDRDs7OztRQXhDSSxhQUFhO0dBQVMsYUFBYSIsImZpbGUiOiJjb21wb25lbnRzL21vdmVDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5mb3JjZSA9IDEwO1xuXHR9XG5cblx0dXBkYXRlKHRpbWVFbGFwc2VkKSB7XG5cdFx0dmFyIG9mZnNldCA9IHt4OjAseTowfTtcblx0XHR2YXIgZGlycyA9IFtcblx0XHRcdFsnbGVmdF9hcnJvdycsIC0xLCAwXSxcblx0XHRcdFsndXBfYXJyb3cnLCAwLCAtMV0sXG5cdFx0XHRbJ3JpZ2h0X2Fycm93JywgMSwgMF0sXG5cdFx0XHRbJ2Rvd25fYXJyb3cnLCAwLCAxXVxuXHRcdF07XG5cdFx0dmFyIG1vdmluZyA9IGZhbHNlO1xuXHRcdF8uZWFjaChkaXJzLCBmdW5jdGlvbihkaXIpIHtcblx0XHRcdGlmIChpbnB1dE1hbmFnZXIuaXNQcmVzc2VkKGlucHV0TWFuYWdlcltkaXJbMF1dKSkge1xuXHRcdFx0XHR2YXIgc3BlZWQgPSB0aW1lRWxhcHNlZCAqIHRoaXMuZm9yY2U7XG5cdFx0XHRcdG9mZnNldC54ICs9IGRpclsxXSAqIHNwZWVkO1xuXHRcdFx0XHRvZmZzZXQueSArPSBkaXJbMl0gKiBzcGVlZDtcblx0XHRcdFx0bW92aW5nID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0dmFyIHBoeXNpY3MgPSB0aGlzLnBhcmVudC5nZXRDb21wb25lbnRCeVR5cGUoJ1Nwcml0ZVBoeXNpY3NDb21wb25lbnQnKS5ib2R5O1xuXG5cdFx0aWYgKCFfLmlzVW5kZWZpbmVkKHBoeXNpY3MpKSB7XG5cdFx0XHRwaHlzaWNzLnN0YXRlLmFuZ3VsYXIudmVsID0gMDtcblx0XHRcdHBoeXNpY3Muc3RhdGUuYW5ndWxhci5hY2MgPSAwO1xuXHRcdFx0cGh5c2ljcy5zdGF0ZS5hbmd1bGFyLnBvcyA9IDA7XG5cdFx0XHRpZiAobW92aW5nKSB7XG5cdFx0XHRcdHBoeXNpY3Muc2xlZXAoZmFsc2UpO1xuXHRcdFx0XHRwaHlzaWNzLnN0YXRlLnZlbC5zZXQob2Zmc2V0LngsIG9mZnNldC55KTtcblx0XHRcdFxuXHRcdFx0XHQvLyBwaHlzaWNzLnBvc2l0aW9uLnggKz0gb2Zmc2V0WzBdO1xuXHRcdFx0XHQvLyBwaHlzaWNzLnBvc2l0aW9uLnkgKz0gb2Zmc2V0WzFdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGh5c2ljcy5zdGF0ZS52ZWwuc2V0KDAsMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9