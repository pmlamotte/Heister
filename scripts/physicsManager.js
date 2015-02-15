"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var PhysicsManager = (function (BaseComponent) {
	function PhysicsManager() {
		_classCallCheck(this, PhysicsManager);

		_get(Object.getPrototypeOf(PhysicsManager.prototype), "constructor", this).call(this);
		this.world = Physics({
			integrator: "verlet"
		});

		this.world.add(Physics.behavior("body-impulse-response"));
		this.world.add(Physics.behavior("sweep-prune"));
		this.world.add(Physics.behavior("body-collision-detection"));
	}

	_inherits(PhysicsManager, BaseComponent);

	_prototypeProperties(PhysicsManager, null, {
		update: {
			value: function update(timeElapsed, now) {
				this.world.step(Date.now());
			},
			writable: true,
			configurable: true
		}
	});

	return PhysicsManager;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBoeXNpY3NNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxjQUFjLGNBQVMsYUFBYTtBQUM5QixVQUROLGNBQWM7d0JBQWQsY0FBYzs7QUFFbEIsNkJBRkksY0FBYyw2Q0FFVjtBQUNSLE1BQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3BCLGFBQVUsRUFBRSxRQUFRO0dBQ3BCLENBQUMsQ0FBQzs7QUFFSCxNQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztBQUMxRCxNQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDaEQsTUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7RUFDN0Q7O1dBVkksY0FBYyxFQUFTLGFBQWE7O3NCQUFwQyxjQUFjO0FBWW5CLFFBQU07VUFBQSxnQkFBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO0FBQ3hCLFFBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzVCOzs7Ozs7UUFkSSxjQUFjO0dBQVMsYUFBYSIsImZpbGUiOiJwaHlzaWNzTWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBoeXNpY3NNYW5hZ2VyIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy53b3JsZCA9IFBoeXNpY3Moe1xuXHRcdFx0aW50ZWdyYXRvcjogJ3ZlcmxldCdcblx0XHR9KTtcblxuXHRcdHRoaXMud29ybGQuYWRkKFBoeXNpY3MuYmVoYXZpb3IoJ2JvZHktaW1wdWxzZS1yZXNwb25zZScpKTtcblx0XHR0aGlzLndvcmxkLmFkZChQaHlzaWNzLmJlaGF2aW9yKCdzd2VlcC1wcnVuZScpKTtcblx0XHR0aGlzLndvcmxkLmFkZChQaHlzaWNzLmJlaGF2aW9yKCdib2R5LWNvbGxpc2lvbi1kZXRlY3Rpb24nKSk7XG5cdH1cblxuXHR1cGRhdGUodGltZUVsYXBzZWQsIG5vdykge1xuXHRcdHRoaXMud29ybGQuc3RlcChEYXRlLm5vdygpKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9