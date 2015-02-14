"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Debug = (function () {
	function Debug() {
		_classCallCheck(this, Debug);
	}

	_prototypeProperties(Debug, null, {
		showPosition: {
			value: function showPosition() {
				var smilies = root.getComponentsByName("smiley");
				var i;
				for (i = 0; i < smilies.length; i++) {
					var smiley = smilies[i];
					smiley.addComponent(new DebugComponent());
				}
			},
			writable: true,
			configurable: true
		}
	});

	return Debug;
})();

window.debug = new Debug();