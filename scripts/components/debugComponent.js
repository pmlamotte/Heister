"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var DebugComponent = (function (_BaseComponent) {
	function DebugComponent() {
		_classCallCheck(this, DebugComponent);

		_get(Object.getPrototypeOf(DebugComponent.prototype), "constructor", this).call(this);
		this.text = new PIXI.Text("Test", {
			fill: "White"
		});
		stage.addChild(this.text);
	}

	_inherits(DebugComponent, _BaseComponent);

	_createClass(DebugComponent, {
		update: {
			value: function update(timeElapsed) {
				this.text.position = this.parent.position;
				var posTextX = this.parent.position.x + "";
				var posTextY = this.parent.position.y + "";
				var posText = posTextX.substring(0, 6) + ", " + posTextY.substring(0, 6);
				this.text.setText(posText);
			}
		}
	});

	return DebugComponent;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGVidWdDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLGNBQWM7QUFDUixVQUROLGNBQWMsR0FDTDt3QkFEVCxjQUFjOztBQUVsQiw2QkFGSSxjQUFjLDZDQUVWO0FBQ1IsTUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2pDLE9BQUksRUFBRSxPQUFPO0dBQ2IsQ0FBQyxDQUFDO0FBQ0gsT0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDMUI7O1dBUEksY0FBYzs7Y0FBZCxjQUFjO0FBU25CLFFBQU07VUFBQSxnQkFBQyxXQUFXLEVBQUU7QUFDbkIsUUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDMUMsUUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMzQyxRQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNDLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6RSxRQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQjs7OztRQWZJLGNBQWM7R0FBUyxhQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvZGVidWdDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEZWJ1Z0NvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudGV4dCA9IG5ldyBQSVhJLlRleHQoXCJUZXN0XCIsIHtcblx0XHRcdGZpbGw6ICdXaGl0ZSdcblx0XHR9KTtcblx0XHRzdGFnZS5hZGRDaGlsZCh0aGlzLnRleHQpO1xuXHR9XG5cblx0dXBkYXRlKHRpbWVFbGFwc2VkKSB7XG5cdFx0dGhpcy50ZXh0LnBvc2l0aW9uID0gdGhpcy5wYXJlbnQucG9zaXRpb247XG5cdFx0dmFyIHBvc1RleHRYID0gdGhpcy5wYXJlbnQucG9zaXRpb24ueCArIFwiXCI7XG5cdFx0dmFyIHBvc1RleHRZID0gdGhpcy5wYXJlbnQucG9zaXRpb24ueSArIFwiXCI7XG5cdFx0dmFyIHBvc1RleHQgPSBwb3NUZXh0WC5zdWJzdHJpbmcoMCwgNikgKyBcIiwgXCIgKyBwb3NUZXh0WS5zdWJzdHJpbmcoMCwgNik7XG5cdFx0dGhpcy50ZXh0LnNldFRleHQocG9zVGV4dCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=