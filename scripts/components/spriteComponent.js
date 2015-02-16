"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var SpriteComponent = (function (BaseComponent) {
	function SpriteComponent(textureId, tileId) {
		_classCallCheck(this, SpriteComponent);

		_get(Object.getPrototypeOf(SpriteComponent.prototype), "constructor", this).call(this);
		this.texture = textureFactory.getTexture(textureId, tileId);
		this.sprite = new PIXI.Sprite(this.texture);
		this.sprite.anchor.x = 0.5;
		this.sprite.anchor.y = 0.5;
		this.rotation = 0;
		this.sprite.interactive = true;
		this.sprite.mousedown = (function (data) {
			debug.attachCamera(this.parent);
		}).bind(this);
		worldStage.addChild(this.sprite);
	}

	_inherits(SpriteComponent, BaseComponent);

	_prototypeProperties(SpriteComponent, null, {
		update: {
			value: function update(timeElapsed) {
				this.sprite.position = this.parent.position;
				this.sprite.rotation = this.parent.rotation;
			},
			writable: true,
			configurable: true
		}
	});

	return SpriteComponent;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3ByaXRlQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxlQUFlLGNBQVMsYUFBYTtBQUMvQixVQUROLGVBQWUsQ0FDUixTQUFTLEVBQUUsTUFBTTt3QkFEeEIsZUFBZTs7QUFFbkIsNkJBRkksZUFBZSw2Q0FFWDtBQUNSLE1BQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUQsTUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLE1BQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDM0IsTUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMzQixNQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNsQixNQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7QUFDL0IsTUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQSxVQUFTLElBQUksRUFBRTtBQUN0QyxRQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztHQUNoQyxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2IsWUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDakM7O1dBYkksZUFBZSxFQUFTLGFBQWE7O3NCQUFyQyxlQUFlO0FBZXBCLFFBQU07VUFBQSxnQkFBQyxXQUFXLEVBQUU7QUFDbkIsUUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDNUMsUUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDNUM7Ozs7OztRQWxCSSxlQUFlO0dBQVMsYUFBYSIsImZpbGUiOiJjb21wb25lbnRzL3Nwcml0ZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNwcml0ZUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcih0ZXh0dXJlSWQsIHRpbGVJZCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy50ZXh0dXJlID0gdGV4dHVyZUZhY3RvcnkuZ2V0VGV4dHVyZSh0ZXh0dXJlSWQsIHRpbGVJZCk7XG5cdFx0dGhpcy5zcHJpdGUgPSBuZXcgUElYSS5TcHJpdGUodGhpcy50ZXh0dXJlKTtcblx0XHR0aGlzLnNwcml0ZS5hbmNob3IueCA9IDAuNTtcblx0XHR0aGlzLnNwcml0ZS5hbmNob3IueSA9IDAuNTtcblx0XHR0aGlzLnJvdGF0aW9uID0gMDtcblx0XHR0aGlzLnNwcml0ZS5pbnRlcmFjdGl2ZSA9IHRydWU7XG5cdFx0dGhpcy5zcHJpdGUubW91c2Vkb3duID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0ZGVidWcuYXR0YWNoQ2FtZXJhKHRoaXMucGFyZW50KTtcblx0XHR9LmJpbmQodGhpcyk7XG5cdFx0d29ybGRTdGFnZS5hZGRDaGlsZCh0aGlzLnNwcml0ZSk7XG5cdH1cblxuXHR1cGRhdGUodGltZUVsYXBzZWQpIHtcblx0XHR0aGlzLnNwcml0ZS5wb3NpdGlvbiA9IHRoaXMucGFyZW50LnBvc2l0aW9uO1xuXHRcdHRoaXMuc3ByaXRlLnJvdGF0aW9uID0gdGhpcy5wYXJlbnQucm90YXRpb247XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=