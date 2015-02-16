"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Camera = (function (BaseComponent) {
	function Camera() {
		_classCallCheck(this, Camera);

		_get(Object.getPrototypeOf(Camera.prototype), "constructor", this).call(this);
		this.container = new PIXI.DisplayObjectContainer();
		window.worldStage = new PIXI.DisplayObjectContainer();
		stage.addChild(this.container);
		stage.addChild(window.worldStage);
		this.position = { x: 0, y: 0 };
	}

	_inherits(Camera, BaseComponent);

	_prototypeProperties(Camera, null, {
		setPosition: {
			value: function setPosition(_ref) {
				var x = _ref.x;
				var y = _ref.y;
				this.position = {
					x: x - renderer.width / 2,
					y: y - renderer.height / 2
				};
			},
			writable: true,
			configurable: true
		},
		update: {
			value: function update(timeElapsed) {
				window.worldStage.position = {
					x: -this.position.x,
					y: -this.position.y
				};
			},
			writable: true,
			configurable: true
		}
	});

	return Camera;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sTUFBTSxjQUFTLGFBQWE7QUFDdEIsVUFETixNQUFNO3dCQUFOLE1BQU07O0FBRVYsNkJBRkksTUFBTSw2Q0FFRjtBQUNSLE1BQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztBQUNuRCxRQUFNLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7QUFDdEQsT0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbEMsTUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO0VBQzdCOztXQVJJLE1BQU0sRUFBUyxhQUFhOztzQkFBNUIsTUFBTTtBQVVYLGFBQVc7VUFBQSwyQkFBUztRQUFQLENBQUMsUUFBRCxDQUFDO1FBQUUsQ0FBQyxRQUFELENBQUM7QUFDaEIsUUFBSSxDQUFDLFFBQVEsR0FBRztBQUNmLE1BQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDO0FBQ3pCLE1BQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO0tBQzFCLENBQUM7SUFDRjs7OztBQUVELFFBQU07VUFBQSxnQkFBQyxXQUFXLEVBQUU7QUFDbkIsVUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUc7QUFDNUIsTUFBQyxFQUFFLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEFBQUM7QUFDckIsTUFBQyxFQUFFLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEFBQUM7S0FDckIsQ0FBQztJQUNGOzs7Ozs7UUF0QkksTUFBTTtHQUFTLGFBQWEiLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FtZXJhIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgUElYSS5EaXNwbGF5T2JqZWN0Q29udGFpbmVyKCk7XG5cdFx0d2luZG93LndvcmxkU3RhZ2UgPSBuZXcgUElYSS5EaXNwbGF5T2JqZWN0Q29udGFpbmVyKCk7XG5cdFx0c3RhZ2UuYWRkQ2hpbGQodGhpcy5jb250YWluZXIpO1xuXHRcdHN0YWdlLmFkZENoaWxkKHdpbmRvdy53b3JsZFN0YWdlKTtcblx0XHR0aGlzLnBvc2l0aW9uID0ge3g6IDAsIHk6IDB9O1xuXHR9XG5cblx0c2V0UG9zaXRpb24oe3gsIHl9KSB7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHtcblx0XHRcdHg6IHggLSByZW5kZXJlci53aWR0aCAvIDIsXG5cdFx0XHR5OiB5IC0gcmVuZGVyZXIuaGVpZ2h0IC8gMlxuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUodGltZUVsYXBzZWQpIHtcblx0XHR3aW5kb3cud29ybGRTdGFnZS5wb3NpdGlvbiA9IHtcblx0XHRcdHg6IC0odGhpcy5wb3NpdGlvbi54KSxcblx0XHRcdHk6IC0odGhpcy5wb3NpdGlvbi55KVxuXHRcdH07XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=