"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

	_createClass(InputManager, {
		isPressed: {
			value: (function (_isPressed) {
				var _isPressedWrapper = function isPressed(_x) {
					return _isPressed.apply(this, arguments);
				};

				_isPressedWrapper.toString = function () {
					return _isPressed.toString();
				};

				return _isPressedWrapper;
			})(function (keyCode) {
				var isPressed = this.pressed[keyCode];
				if (_.isUndefined(isPressed)) {
					isPressed = false;
				}
				return isPressed;
			})
		}
	});

	return InputManager;
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0TWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTSxZQUFZO0FBQ04sVUFETixZQUFZLEdBQ0g7d0JBRFQsWUFBWTs7QUFFaEIsTUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDbEIsUUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFBLFVBQVMsQ0FBQyxFQUFFO0FBQzlCLE9BQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQztHQUMvQixDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2IsUUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFBLFVBQVMsQ0FBQyxFQUFFO0FBQzVCLE9BQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztHQUNoQyxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUViLE1BQUksSUFBSSxHQUFHO0FBQ1YsZUFBYyxFQUFFO0FBQ2hCLGdCQUFlLEVBQUU7QUFDakIsYUFBWSxFQUFFO0FBQ2QsZUFBYyxFQUFFO0dBQ2hCLENBQUM7O0FBRUYsR0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7RUFDckI7O2NBbEJJLFlBQVk7QUFvQmpCLFdBQVM7Ozs7Ozs7Ozs7O01BQUEsVUFBQyxPQUFPLEVBQUU7QUFDbEIsUUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0QyxRQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDN0IsY0FBUyxHQUFHLEtBQUssQ0FBQztLQUNsQjtBQUNELFdBQU8sU0FBUyxDQUFDO0lBQ2pCOzs7O1FBMUJJLFlBQVkiLCJmaWxlIjoiaW5wdXRNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSW5wdXRNYW5hZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5wcmVzc2VkID0ge307XG5cdFx0d2luZG93Lm9ua2V5ZG93biA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHRoaXMucHJlc3NlZFtlLmtleUNvZGVdID0gdHJ1ZTtcblx0XHR9LmJpbmQodGhpcyk7XG5cdFx0d2luZG93Lm9ua2V5dXAgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHR0aGlzLnByZXNzZWRbZS5rZXlDb2RlXSA9IGZhbHNlO1xuXHRcdH0uYmluZCh0aGlzKTtcblxuXHRcdHZhciBrZXlzID0ge1xuXHRcdFx0J2xlZnRfYXJyb3cnOiAzNyxcblx0XHRcdCdyaWdodF9hcnJvdyc6IDM5LFxuXHRcdFx0J3VwX2Fycm93JzogMzgsXG5cdFx0XHQnZG93bl9hcnJvdyc6IDQwXG5cdFx0fTtcblxuXHRcdF8uZXh0ZW5kKHRoaXMsIGtleXMpO1xuXHR9XG5cblx0aXNQcmVzc2VkKGtleUNvZGUpIHtcblx0XHR2YXIgaXNQcmVzc2VkID0gdGhpcy5wcmVzc2VkW2tleUNvZGVdO1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKGlzUHJlc3NlZCkpIHtcblx0XHRcdGlzUHJlc3NlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gaXNQcmVzc2VkO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9