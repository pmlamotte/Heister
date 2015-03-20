"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var SpriteComponent = (function (_BaseComponent) {
	function SpriteComponent(textureId, tileId) {
		_classCallCheck(this, SpriteComponent);

		_get(Object.getPrototypeOf(SpriteComponent.prototype), "constructor", this).call(this);
		this.texture = textureFactory.getTexture(textureId, tileId);
		this.sprite = new PIXI.Sprite(this.texture);
		this.sprite.anchor.x = 0.5;
		this.sprite.anchor.y = 0.5;
		this.rotation = 0;
		worldStage.addChild(this.sprite);
	}

	_inherits(SpriteComponent, _BaseComponent);

	_createClass(SpriteComponent, {
		update: {
			value: function update(timeElapsed) {
				this.sprite.position = this.parent.position;
				this.sprite.rotation = this.parent.rotation;
			}
		}
	});

	return SpriteComponent;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3ByaXRlQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTSxlQUFlO0FBQ1QsVUFETixlQUFlLENBQ1IsU0FBUyxFQUFFLE1BQU0sRUFBRTt3QkFEMUIsZUFBZTs7QUFFbkIsNkJBRkksZUFBZSw2Q0FFWDtBQUNSLE1BQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUQsTUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLE1BQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDM0IsTUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMzQixNQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNsQixZQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNqQzs7V0FUSSxlQUFlOztjQUFmLGVBQWU7QUFXcEIsUUFBTTtVQUFBLGdCQUFDLFdBQVcsRUFBRTtBQUNuQixRQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUM1QyxRQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUM1Qzs7OztRQWRJLGVBQWU7R0FBUyxhQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvc3ByaXRlQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3ByaXRlQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHRleHR1cmVJZCwgdGlsZUlkKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnRleHR1cmUgPSB0ZXh0dXJlRmFjdG9yeS5nZXRUZXh0dXJlKHRleHR1cmVJZCwgdGlsZUlkKTtcblx0XHR0aGlzLnNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0aGlzLnRleHR1cmUpO1xuXHRcdHRoaXMuc3ByaXRlLmFuY2hvci54ID0gMC41O1xuXHRcdHRoaXMuc3ByaXRlLmFuY2hvci55ID0gMC41O1xuXHRcdHRoaXMucm90YXRpb24gPSAwO1xuXHRcdHdvcmxkU3RhZ2UuYWRkQ2hpbGQodGhpcy5zcHJpdGUpO1xuXHR9XG5cblx0dXBkYXRlKHRpbWVFbGFwc2VkKSB7XG5cdFx0dGhpcy5zcHJpdGUucG9zaXRpb24gPSB0aGlzLnBhcmVudC5wb3NpdGlvbjtcblx0XHR0aGlzLnNwcml0ZS5yb3RhdGlvbiA9IHRoaXMucGFyZW50LnJvdGF0aW9uO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9