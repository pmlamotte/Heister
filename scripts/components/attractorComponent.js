"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var AttractorComponent = (function (BaseComponent) {
	function AttractorComponent() {
		var options = arguments[0] === undefined ? { pos: { x: 0, y: 0 } } : arguments[0];
		_classCallCheck(this, AttractorComponent);

		_get(Object.getPrototypeOf(AttractorComponent.prototype), "constructor", this).call(this);
		this.attractor = Physics.behavior("attractor", options);
		physicsManager.world.add(this.attractor);
	}

	_inherits(AttractorComponent, BaseComponent);

	_prototypeProperties(AttractorComponent, null, {
		update: {
			value: function update() {
				this.parent.position = this.attractor.position();
			},
			writable: true,
			configurable: true
		}
	});

	return AttractorComponent;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXR0cmFjdG9yQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxrQkFBa0IsY0FBUyxhQUFhO0FBQ2xDLFVBRE4sa0JBQWtCO01BQ1gsT0FBTyxnQ0FBQyxFQUFDLEdBQUcsRUFBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxFQUFDO3dCQURqQyxrQkFBa0I7O0FBRXRCLDZCQUZJLGtCQUFrQiw2Q0FFZDtBQUNSLE1BQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEQsZ0JBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztFQUN6Qzs7V0FMSSxrQkFBa0IsRUFBUyxhQUFhOztzQkFBeEMsa0JBQWtCO0FBT3ZCLFFBQU07VUFBQSxrQkFBRztBQUNSLFFBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakQ7Ozs7OztRQVRJLGtCQUFrQjtHQUFTLGFBQWEiLCJmaWxlIjoiY29tcG9uZW50cy9hdHRyYWN0b3JDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBdHRyYWN0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucz17cG9zOnt4OiAwLCB5OiAwfX0pIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuYXR0cmFjdG9yID0gUGh5c2ljcy5iZWhhdmlvcignYXR0cmFjdG9yJywgb3B0aW9ucyk7XG5cdFx0cGh5c2ljc01hbmFnZXIud29ybGQuYWRkKHRoaXMuYXR0cmFjdG9yKTtcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHR0aGlzLnBhcmVudC5wb3NpdGlvbiA9IHRoaXMuYXR0cmFjdG9yLnBvc2l0aW9uKCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=