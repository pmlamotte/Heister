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