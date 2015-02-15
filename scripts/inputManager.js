"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var InputManager = (function () {
	function InputManager() {
		_classCallCheck(this, InputManager);

		this.pressed = {};
		window.onkeydown = (function (e) {
			this.pressed[e.keyCode] = true;
		}).bind(this);
		window.onkeyup = (function (e) {
			this.pressed[e.keyCode] = false;
		}).bind(this);

		var keys = {
			left_arrow: 37,
			right_arrow: 39,
			up_arrow: 38,
			down_arrow: 40
		};

		_.extend(this, keys);
	}

	_prototypeProperties(InputManager, null, {
		isPressed: {
			value: function isPressed(keyCode) {
				var isPressed = this.pressed[keyCode];
				if (_.isUndefined(isPressed)) {
					isPressed = false;
				}
				return isPressed;
			},
			writable: true,
			configurable: true
		}
	});

	return InputManager;
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0TWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTSxZQUFZO0FBQ04sVUFETixZQUFZO3dCQUFaLFlBQVk7O0FBRWhCLE1BQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLFFBQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQSxVQUFTLENBQUMsRUFBRTtBQUM5QixPQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7R0FDL0IsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNiLFFBQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQSxVQUFTLENBQUMsRUFBRTtBQUM1QixPQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUM7R0FDaEMsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFYixNQUFJLElBQUksR0FBRztBQUNWLGVBQWMsRUFBRTtBQUNoQixnQkFBZSxFQUFFO0FBQ2pCLGFBQVksRUFBRTtBQUNkLGVBQWMsRUFBRTtHQUNoQixDQUFDOztBQUVGLEdBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0VBQ3JCOztzQkFsQkksWUFBWTtBQW9CakIsV0FBUztVQUFBLG1CQUFDLE9BQU8sRUFBRTtBQUNsQixRQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RDLFFBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUM3QixjQUFTLEdBQUcsS0FBSyxDQUFDO0tBQ2xCO0FBQ0QsV0FBTyxTQUFTLENBQUM7SUFDakI7Ozs7OztRQTFCSSxZQUFZIiwiZmlsZSI6ImlucHV0TWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIElucHV0TWFuYWdlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucHJlc3NlZCA9IHt9O1xuXHRcdHdpbmRvdy5vbmtleWRvd24gPSBmdW5jdGlvbihlKSB7XG5cdFx0XHR0aGlzLnByZXNzZWRbZS5rZXlDb2RlXSA9IHRydWU7XG5cdFx0fS5iaW5kKHRoaXMpO1xuXHRcdHdpbmRvdy5vbmtleXVwID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0dGhpcy5wcmVzc2VkW2Uua2V5Q29kZV0gPSBmYWxzZTtcblx0XHR9LmJpbmQodGhpcyk7XG5cblx0XHR2YXIga2V5cyA9IHtcblx0XHRcdCdsZWZ0X2Fycm93JzogMzcsXG5cdFx0XHQncmlnaHRfYXJyb3cnOiAzOSxcblx0XHRcdCd1cF9hcnJvdyc6IDM4LFxuXHRcdFx0J2Rvd25fYXJyb3cnOiA0MFxuXHRcdH07XG5cblx0XHRfLmV4dGVuZCh0aGlzLCBrZXlzKTtcblx0fVxuXG5cdGlzUHJlc3NlZChrZXlDb2RlKSB7XG5cdFx0dmFyIGlzUHJlc3NlZCA9IHRoaXMucHJlc3NlZFtrZXlDb2RlXTtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZChpc1ByZXNzZWQpKSB7XG5cdFx0XHRpc1ByZXNzZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIGlzUHJlc3NlZDtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==