"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var SlowRotateComponent = (function (_BaseComponent) {
	function SlowRotateComponent() {
		_classCallCheck(this, SlowRotateComponent);

		_get(Object.getPrototypeOf(SlowRotateComponent.prototype), "constructor", this).call(this);
		this.rotateSpeed = 1;
	}

	_inherits(SlowRotateComponent, _BaseComponent);

	_createClass(SlowRotateComponent, {
		update: {
			value: function update(timeElapsed) {
				this.parent.rotation += this.rotateSpeed * timeElapsed;
			}
		}
	});

	return SlowRotateComponent;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2xvd1JvdGF0ZUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sbUJBQW1CO0FBQ2IsVUFETixtQkFBbUIsR0FDVjt3QkFEVCxtQkFBbUI7O0FBRXZCLDZCQUZJLG1CQUFtQiw2Q0FFZjtBQUNSLE1BQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0VBQ3JCOztXQUpJLG1CQUFtQjs7Y0FBbkIsbUJBQW1CO0FBTXhCLFFBQU07VUFBQSxnQkFBQyxXQUFXLEVBQUU7QUFDbkIsUUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDdkQ7Ozs7UUFSSSxtQkFBbUI7R0FBUyxhQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvc2xvd1JvdGF0ZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNsb3dSb3RhdGVDb21wb25lbnQgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnJvdGF0ZVNwZWVkID0gMTtcblx0fVxuXG5cdHVwZGF0ZSh0aW1lRWxhcHNlZCkge1xuXHRcdHRoaXMucGFyZW50LnJvdGF0aW9uICs9IHRoaXMucm90YXRlU3BlZWQgKiB0aW1lRWxhcHNlZDtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==