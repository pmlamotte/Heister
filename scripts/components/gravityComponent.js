"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var GravityComponent = (function (_BaseComponent) {
	function GravityComponent() {
		_classCallCheck(this, GravityComponent);

		_get(Object.getPrototypeOf(GravityComponent.prototype), "constructor", this).call(this);
		this.gravity = Physics.behavior("constant-acceleration", {
			acc: { x: 0, y: 50 }
		});
		physicsManager.world.add(this.gravity);
	}

	_inherits(GravityComponent, _BaseComponent);

	return GravityComponent;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3Jhdml0eUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFNLGdCQUFnQjtBQUVWLFVBRk4sZ0JBQWdCLEdBRVA7d0JBRlQsZ0JBQWdCOztBQUdwQiw2QkFISSxnQkFBZ0IsNkNBR1o7QUFDUixNQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUU7QUFDeEQsTUFBRyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFDO0dBQ2xCLENBQUMsQ0FBQztBQUNILGdCQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7RUFFeEM7O1dBVEssZ0JBQWdCOztRQUFoQixnQkFBZ0I7R0FBUyxhQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvZ3Jhdml0eUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdyYXZpdHlDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZ3Jhdml0eSA9IFBoeXNpY3MuYmVoYXZpb3IoJ2NvbnN0YW50LWFjY2VsZXJhdGlvbicsIHtcblx0XHRcdGFjYzoge3g6IDAsIHk6IDUwfVxuXHRcdH0pO1xuXHRcdHBoeXNpY3NNYW5hZ2VyLndvcmxkLmFkZCh0aGlzLmdyYXZpdHkpO1xuXHRcbn19Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9