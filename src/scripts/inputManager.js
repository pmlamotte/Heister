class InputManager {
	constructor() {
		this.pressed = {};
		window.onkeydown = function(e) {
			this.pressed[e.keyCode] = true;
		}.bind(this);
		window.onkeyup = function(e) {
			this.pressed[e.keyCode] = false;
		}.bind(this);

		var keys = {
			'left_arrow': 37,
			'right_arrow': 39,
			'up_arrow': 38,
			'down_arrow': 40
		};

		_.extend(this, keys);
	}

	isPressed(keyCode) {
		var isPressed = this.pressed[keyCode];
		if (_.isUndefined(isPressed)) {
			isPressed = false;
		}
		return isPressed;
	}
}