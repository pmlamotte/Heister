"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var TextureFactory = (function () {
	function TextureFactory() {
		_classCallCheck(this, TextureFactory);

		this.textures = {};
	}

	_prototypeProperties(TextureFactory, null, {
		addTexture: {
			value: function addTexture(textureAsset) {
				var texture = PIXI.Texture.fromImage(textureAsset[0]);
				this.textures[textureAsset[1]] = texture;
			},
			writable: true,
			configurable: true
		},
		getTexture: {
			value: function getTexture(id) {
				return this.textures[id];
			},
			writable: true,
			configurable: true
		},
		load: {
			value: function load(callback) {
				var assets = _.map(textureAssets, _.first);
				var loader = new PIXI.AssetLoader(assets);
				loader.onComplete = (function () {
					_.map(textureAssets, this.addTexture.bind(this));
					callback();
				}).bind(this);
				loader.load();
			},
			writable: true,
			configurable: true
		}
	});

	return TextureFactory;
})();