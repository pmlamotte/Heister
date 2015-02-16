"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var CameraComponent = (function (BaseComponent) {
	function CameraComponent() {
		_classCallCheck(this, CameraComponent);

		_get(Object.getPrototypeOf(CameraComponent.prototype), "constructor", this).call(this);
	}

	_inherits(CameraComponent, BaseComponent);

	_prototypeProperties(CameraComponent, null, {
		update: {
			value: function update(timeElapsed) {
				camera.setPosition(this.parent.position);
			},
			writable: true,
			configurable: true
		}
	});

	return CameraComponent;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FtZXJhQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxlQUFlLGNBQVMsYUFBYTtBQUMvQixVQUROLGVBQWU7d0JBQWYsZUFBZTs7QUFFbkIsNkJBRkksZUFBZSw2Q0FFWDtFQUNSOztXQUhJLGVBQWUsRUFBUyxhQUFhOztzQkFBckMsZUFBZTtBQUtwQixRQUFNO1VBQUEsZ0JBQUMsV0FBVyxFQUFFO0FBQ25CLFVBQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6Qzs7Ozs7O1FBUEksZUFBZTtHQUFTLGFBQWEiLCJmaWxlIjoiY29tcG9uZW50cy9jYW1lcmFDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDYW1lcmFDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHVwZGF0ZSh0aW1lRWxhcHNlZCkge1xuXHRcdGNhbWVyYS5zZXRQb3NpdGlvbih0aGlzLnBhcmVudC5wb3NpdGlvbik7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=