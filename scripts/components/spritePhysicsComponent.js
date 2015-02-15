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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3ByaXRlUGh5c2ljc0NvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sc0JBQXNCLGNBQVMsYUFBYTtBQUV0QyxVQUZOLHNCQUFzQjt3QkFBdEIsc0JBQXNCOztBQUcxQiw2QkFISSxzQkFBc0IsNkNBR2xCO0VBQ1I7O1dBSkksc0JBQXNCLEVBQVMsYUFBYTs7c0JBQTVDLHNCQUFzQjtBQU0zQixZQUFVO1VBQUEsc0JBQUc7QUFDWixRQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzdCLFNBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDdEUsU0FBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNyQyxXQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7QUFDbkIsWUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO0FBQ3JCLE9BQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pCLE9BQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pCLGlCQUFXLEVBQUUsQ0FBQztNQUNkLENBQUMsQ0FBQztBQUNILG1CQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEM7SUFDRDs7OztBQUVELFFBQU07VUFBQSxnQkFBQyxXQUFXLEVBQUU7QUFDbkIsUUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2xCLFFBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9DLFFBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9DLFFBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDbkQ7Ozs7OztRQXpCSSxzQkFBc0I7R0FBUyxhQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvc3ByaXRlUGh5c2ljc0NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNwcml0ZVBoeXNpY3NDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Y3JlYXRlQm9keSgpIHtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZCh0aGlzLmJvZHkpKSB7XG5cdFx0XHR2YXIgc3ByaXRlID0gdGhpcy5wYXJlbnQuZ2V0Q29tcG9uZW50QnlUeXBlKCdTcHJpdGVDb21wb25lbnQnKS5zcHJpdGU7XG5cdFx0XHR0aGlzLmJvZHkgPSBQaHlzaWNzLmJvZHkoJ3JlY3RhbmdsZScsIHtcblx0XHRcdFx0d2lkdGg6IHNwcml0ZS53aWR0aCxcblx0XHRcdFx0aGVpZ2h0OiBzcHJpdGUuaGVpZ2h0LFxuXHRcdFx0XHR4OiB0aGlzLnBhcmVudC5wb3NpdGlvbi54LFxuXHRcdFx0XHR5OiB0aGlzLnBhcmVudC5wb3NpdGlvbi55LFxuXHRcdFx0XHRyZXN0aXR1dGlvbjogMVxuXHRcdFx0fSk7XG5cdFx0XHRwaHlzaWNzTWFuYWdlci53b3JsZC5hZGQodGhpcy5ib2R5KTtcblx0XHR9XG5cdH1cblxuXHR1cGRhdGUodGltZUVsYXBzZWQpIHtcblx0XHR0aGlzLmNyZWF0ZUJvZHkoKTtcblx0XHR0aGlzLnBhcmVudC5wb3NpdGlvbi54ID0gdGhpcy5ib2R5LnN0YXRlLnBvcy54O1xuXHRcdHRoaXMucGFyZW50LnBvc2l0aW9uLnkgPSB0aGlzLmJvZHkuc3RhdGUucG9zLnk7XG5cdFx0dGhpcy5wYXJlbnQucm90YXRpb24gPSB0aGlzLmJvZHkuc3RhdGUuYW5ndWxhci5wb3M7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=