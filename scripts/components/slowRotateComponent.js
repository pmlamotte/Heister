"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var SlowRotateComponent = (function (BaseComponent) {
	function SlowRotateComponent() {
		_classCallCheck(this, SlowRotateComponent);

		_get(Object.getPrototypeOf(SlowRotateComponent.prototype), "constructor", this).call(this);
		this.rotateSpeed = 1;
	}

	_inherits(SlowRotateComponent, BaseComponent);

	_prototypeProperties(SlowRotateComponent, null, {
		update: {
			value: function update(timeElapsed) {
				this.parent.rotation += this.rotateSpeed * timeElapsed;
			},
			writable: true,
			configurable: true
		}
	});

	return SlowRotateComponent;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2xvd1JvdGF0ZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sbUJBQW1CLGNBQVMsYUFBYTtBQUNuQyxVQUROLG1CQUFtQjt3QkFBbkIsbUJBQW1COztBQUV2Qiw2QkFGSSxtQkFBbUIsNkNBRWY7QUFDUixNQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztFQUNyQjs7V0FKSSxtQkFBbUIsRUFBUyxhQUFhOztzQkFBekMsbUJBQW1CO0FBTXhCLFFBQU07VUFBQSxnQkFBQyxXQUFXLEVBQUU7QUFDbkIsUUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDdkQ7Ozs7OztRQVJJLG1CQUFtQjtHQUFTLGFBQWEiLCJmaWxlIjoiY29tcG9uZW50cy9zbG93Um90YXRlQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2xvd1JvdGF0ZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucm90YXRlU3BlZWQgPSAxO1xuXHR9XG5cblx0dXBkYXRlKHRpbWVFbGFwc2VkKSB7XG5cdFx0dGhpcy5wYXJlbnQucm90YXRpb24gKz0gdGhpcy5yb3RhdGVTcGVlZCAqIHRpbWVFbGFwc2VkO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9