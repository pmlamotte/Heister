"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var PhysicsManager = (function (_BaseComponent) {
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

	_inherits(PhysicsManager, _BaseComponent);

	_createClass(PhysicsManager, {
		update: {
			value: function update(timeElapsed, now) {
				this.world.step(Date.now());
			}
		}
	});

	return PhysicsManager;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBoeXNpY3NNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxjQUFjO0FBQ1IsVUFETixjQUFjLEdBQ0w7d0JBRFQsY0FBYzs7QUFFbEIsNkJBRkksY0FBYyw2Q0FFVjtBQUNSLE1BQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3BCLGFBQVUsRUFBRSxRQUFRO0dBQ3BCLENBQUMsQ0FBQzs7QUFFSCxNQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztBQUMxRCxNQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDaEQsTUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7RUFDN0Q7O1dBVkksY0FBYzs7Y0FBZCxjQUFjO0FBWW5CLFFBQU07VUFBQSxnQkFBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO0FBQ3hCLFFBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzVCOzs7O1FBZEksY0FBYztHQUFTLGFBQWEiLCJmaWxlIjoicGh5c2ljc01hbmFnZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQaHlzaWNzTWFuYWdlciBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMud29ybGQgPSBQaHlzaWNzKHtcblx0XHRcdGludGVncmF0b3I6ICd2ZXJsZXQnXG5cdFx0fSk7XG5cblx0XHR0aGlzLndvcmxkLmFkZChQaHlzaWNzLmJlaGF2aW9yKCdib2R5LWltcHVsc2UtcmVzcG9uc2UnKSk7XG5cdFx0dGhpcy53b3JsZC5hZGQoUGh5c2ljcy5iZWhhdmlvcignc3dlZXAtcHJ1bmUnKSk7XG5cdFx0dGhpcy53b3JsZC5hZGQoUGh5c2ljcy5iZWhhdmlvcignYm9keS1jb2xsaXNpb24tZGV0ZWN0aW9uJykpO1xuXHR9XG5cblx0dXBkYXRlKHRpbWVFbGFwc2VkLCBub3cpIHtcblx0XHR0aGlzLndvcmxkLnN0ZXAoRGF0ZS5ub3coKSk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==