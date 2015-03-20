"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var AttractorComponent = (function (_BaseComponent) {
	function AttractorComponent() {
		var options = arguments[0] === undefined ? { pos: { x: 0, y: 0 } } : arguments[0];

		_classCallCheck(this, AttractorComponent);

		_get(Object.getPrototypeOf(AttractorComponent.prototype), "constructor", this).call(this);
		this.attractor = Physics.behavior("attractor", options);
		physicsManager.world.add(this.attractor);
	}

	_inherits(AttractorComponent, _BaseComponent);

	_createClass(AttractorComponent, {
		update: {
			value: function update() {
				this.parent.position = this.attractor.position();
			}
		}
	});

	return AttractorComponent;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXR0cmFjdG9yQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxrQkFBa0I7QUFDWixVQUROLGtCQUFrQixHQUNpQjtNQUE1QixPQUFPLGdDQUFDLEVBQUMsR0FBRyxFQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUM7O3dCQURqQyxrQkFBa0I7O0FBRXRCLDZCQUZJLGtCQUFrQiw2Q0FFZDtBQUNSLE1BQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEQsZ0JBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztFQUN6Qzs7V0FMSSxrQkFBa0I7O2NBQWxCLGtCQUFrQjtBQU92QixRQUFNO1VBQUEsa0JBQUc7QUFDUixRQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pEOzs7O1FBVEksa0JBQWtCO0dBQVMsYUFBYSIsImZpbGUiOiJjb21wb25lbnRzL2F0dHJhY3RvckNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEF0dHJhY3RvckNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zPXtwb3M6e3g6IDAsIHk6IDB9fSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hdHRyYWN0b3IgPSBQaHlzaWNzLmJlaGF2aW9yKCdhdHRyYWN0b3InLCBvcHRpb25zKTtcblx0XHRwaHlzaWNzTWFuYWdlci53b3JsZC5hZGQodGhpcy5hdHRyYWN0b3IpO1xuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMucGFyZW50LnBvc2l0aW9uID0gdGhpcy5hdHRyYWN0b3IucG9zaXRpb24oKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==