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