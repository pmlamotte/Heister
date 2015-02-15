"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var SpriteComponent = (function (BaseComponent) {
	function SpriteComponent(textureId) {
		_classCallCheck(this, SpriteComponent);

		_get(Object.getPrototypeOf(SpriteComponent.prototype), "constructor", this).call(this);
		this.texture = textureFactory.getTexture(textureId);
		this.sprite = new PIXI.Sprite(this.texture);
		this.sprite.anchor.x = 0.5;
		this.sprite.anchor.y = 0.5;
		this.rotation = 0;
		stage.addChild(this.sprite);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3ByaXRlQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxlQUFlLGNBQVMsYUFBYTtBQUMvQixVQUROLGVBQWUsQ0FDUixTQUFTO3dCQURoQixlQUFlOztBQUVuQiw2QkFGSSxlQUFlLDZDQUVYO0FBQ1IsTUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BELE1BQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM1QyxNQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQzNCLE1BQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDM0IsTUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDbEIsT0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDNUI7O1dBVEksZUFBZSxFQUFTLGFBQWE7O3NCQUFyQyxlQUFlO0FBV3BCLFFBQU07VUFBQSxnQkFBQyxXQUFXLEVBQUU7QUFDbkIsUUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDNUMsUUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDNUM7Ozs7OztRQWRJLGVBQWU7R0FBUyxhQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvc3ByaXRlQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3ByaXRlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHRleHR1cmVJZCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy50ZXh0dXJlID0gdGV4dHVyZUZhY3RvcnkuZ2V0VGV4dHVyZSh0ZXh0dXJlSWQpO1xuXHRcdHRoaXMuc3ByaXRlID0gbmV3IFBJWEkuU3ByaXRlKHRoaXMudGV4dHVyZSk7XG5cdFx0dGhpcy5zcHJpdGUuYW5jaG9yLnggPSAwLjU7XG5cdFx0dGhpcy5zcHJpdGUuYW5jaG9yLnkgPSAwLjU7XG5cdFx0dGhpcy5yb3RhdGlvbiA9IDA7XG5cdFx0c3RhZ2UuYWRkQ2hpbGQodGhpcy5zcHJpdGUpO1xuXHR9XG5cblx0dXBkYXRlKHRpbWVFbGFwc2VkKSB7XG5cdFx0dGhpcy5zcHJpdGUucG9zaXRpb24gPSB0aGlzLnBhcmVudC5wb3NpdGlvbjtcblx0XHR0aGlzLnNwcml0ZS5yb3RhdGlvbiA9IHRoaXMucGFyZW50LnJvdGF0aW9uO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9