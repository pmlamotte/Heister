"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var DebugComponent = (function (BaseComponent) {
	function DebugComponent() {
		_classCallCheck(this, DebugComponent);

		_get(Object.getPrototypeOf(DebugComponent.prototype), "constructor", this).call(this);
		this.text = new PIXI.Text("Test", {
			fill: "White"
		});
		stage.addChild(this.text);
	}

	_inherits(DebugComponent, BaseComponent);

	_prototypeProperties(DebugComponent, null, {
		update: {
			value: function update(timeElapsed) {
				this.text.position = this.parent.position;
				var posTextX = this.parent.position.x + "";
				var posTextY = this.parent.position.y + "";
				var posText = posTextX.substring(0, 6) + ", " + posTextY.substring(0, 6);
				this.text.setText(posText);
			},
			writable: true,
			configurable: true
		}
	});

	return DebugComponent;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVidWdDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLGNBQWMsY0FBUyxhQUFhO0FBQzlCLFVBRE4sY0FBYzt3QkFBZCxjQUFjOztBQUVsQiw2QkFGSSxjQUFjLDZDQUVWO0FBQ1IsTUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2pDLE9BQUksRUFBRSxPQUFPO0dBQ2IsQ0FBQyxDQUFDO0FBQ0gsT0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDMUI7O1dBUEksY0FBYyxFQUFTLGFBQWE7O3NCQUFwQyxjQUFjO0FBU25CLFFBQU07VUFBQSxnQkFBQyxXQUFXLEVBQUU7QUFDbkIsUUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDMUMsUUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMzQyxRQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNDLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RSxRQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQjs7Ozs7O1FBZkksY0FBYztHQUFTLGFBQWEiLCJmaWxlIjoiY29tcG9uZW50cy9kZWJ1Z0NvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERlYnVnQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy50ZXh0ID0gbmV3IFBJWEkuVGV4dChcIlRlc3RcIiwge1xuXHRcdFx0ZmlsbDogJ1doaXRlJ1xuXHRcdH0pO1xuXHRcdHN0YWdlLmFkZENoaWxkKHRoaXMudGV4dCk7XG5cdH1cblxuXHR1cGRhdGUodGltZUVsYXBzZWQpIHtcblx0XHR0aGlzLnRleHQucG9zaXRpb24gPSB0aGlzLnBhcmVudC5wb3NpdGlvbjtcblx0XHR2YXIgcG9zVGV4dFggPSB0aGlzLnBhcmVudC5wb3NpdGlvbi54ICsgXCJcIjtcblx0XHR2YXIgcG9zVGV4dFkgPSB0aGlzLnBhcmVudC5wb3NpdGlvbi55ICsgXCJcIjtcblx0XHR2YXIgcG9zVGV4dCA9IHBvc1RleHRYLnN1YnN0cmluZygwLCA2KSArIFwiLCBcIiArIHBvc1RleHRZLnN1YnN0cmluZygwLCA2KTtcblx0XHR0aGlzLnRleHQuc2V0VGV4dChwb3NUZXh0KTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==