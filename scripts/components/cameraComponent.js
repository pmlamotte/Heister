"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var CameraComponent = (function (_BaseComponent) {
	function CameraComponent() {
		_classCallCheck(this, CameraComponent);

		_get(Object.getPrototypeOf(CameraComponent.prototype), "constructor", this).call(this);
	}

	_inherits(CameraComponent, _BaseComponent);

	_createClass(CameraComponent, {
		update: {
			value: function update(timeElapsed) {
				camera.setPosition(this.parent.position);
			}
		}
	});

	return CameraComponent;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FtZXJhQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxlQUFlO0FBQ1QsVUFETixlQUFlLEdBQ047d0JBRFQsZUFBZTs7QUFFbkIsNkJBRkksZUFBZSw2Q0FFWDtFQUNSOztXQUhJLGVBQWU7O2NBQWYsZUFBZTtBQUtwQixRQUFNO1VBQUEsZ0JBQUMsV0FBVyxFQUFFO0FBQ25CLFVBQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6Qzs7OztRQVBJLGVBQWU7R0FBUyxhQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvY2FtZXJhQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FtZXJhQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHR1cGRhdGUodGltZUVsYXBzZWQpIHtcblx0XHRjYW1lcmEuc2V0UG9zaXRpb24odGhpcy5wYXJlbnQucG9zaXRpb24pO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9