"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var TextureFactory = (function () {
	function TextureFactory() {
		_classCallCheck(this, TextureFactory);

		this.textures = {};
		this.tiles = {};
	}

	_prototypeProperties(TextureFactory, null, {
		addTexture: {
			value: function addTexture(textureAsset) {
				var texture = PIXI.Texture.fromImage(textureAsset.path);
				var textures = {
					base: texture,
					tiles: []
				};

				var tileDimensions = textureAsset.tileDimensions;
				if (!_.isUndefined(tileDimensions)) {
					for (var j = 0; j < tileDimensions.y; j++) {
						for (var i = 0; i < tileDimensions.x; i++) {
							var x = i * tileDimensions.width;
							var y = j * tileDimensions.height;
							var frame = new PIXI.Rectangle(x, y, tileDimensions.width, tileDimensions.height);
							var tile = new PIXI.Texture(texture, frame);
							var tileNum = i + tileDimensions.x * j + tileDimensions.baseId;
							this.tiles[tileNum] = tile;
							textures.tiles.push(tileNum);
						}
					}
				}

				return this.textures[textureAsset.id] = textures;
			},
			writable: true,
			configurable: true
		},
		getTexture: {
			value: function getTexture(id, tileNum) {
				if (_.isUndefined(tileNum)) {
					return this.getTextureById(id);
				} else {
					return this.getTextureByTile(tileNum);
				}
			},
			writable: true,
			configurable: true
		},
		getTextureById: {
			value: function getTextureById(id) {
				return this.textures[id].base;
			},
			writable: true,
			configurable: true
		},
		getTextureByTile: {
			value: function getTextureByTile(tileNum) {
				return this.tiles[tileNum];
			},
			writable: true,
			configurable: true
		},
		getTextureTiles: {
			value: function getTextureTiles(id) {
				var _this = this;
				var textureObj = this.textures[id];
				return _.map(textureObj.tiles, function (i) {
					return _this.tiles[i];
				});
			},
			writable: true,
			configurable: true
		},
		getTextureTileIds: {
			value: function getTextureTileIds(id) {
				return this.textures[id].tiles;
			},
			writable: true,
			configurable: true
		},
		load: {
			value: function load(assetsToLoad, callback) {
				var assetPaths = _.map(assetsToLoad, "path");
				var loader = new PIXI.AssetLoader(assetPaths);
				loader.onComplete = (function () {
					_.map(assetsToLoad, this.addTexture.bind(this));
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
//# sourceMappingURL=data:application/json;base64,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aUI7VUFBQSwyQkFBQyxFQUFFLEVBQUU7QUFDckIsV0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvQjs7OztBQUdELE1BQUk7VUFBQSxjQUFDLFlBQVksRUFBRSxRQUFRLEVBQUU7QUFDNUIsUUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDN0MsUUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzlDLFVBQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQSxZQUFXO0FBQzlCLE1BQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDaEQsYUFBUSxFQUFFLENBQUM7S0FDWCxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2IsVUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2Q7Ozs7OztRQWxFSSxjQUFjIiwiZmlsZSI6InRleHR1cmVGYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGV4dHVyZUZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudGV4dHVyZXMgPSB7fTtcblx0XHR0aGlzLnRpbGVzID0ge307XG5cdH1cblxuXHRhZGRUZXh0dXJlKHRleHR1cmVBc3NldCkge1xuXHRcdHZhciB0ZXh0dXJlID0gUElYSS5UZXh0dXJlLmZyb21JbWFnZSh0ZXh0dXJlQXNzZXQucGF0aCk7XG5cdFx0dmFyIHRleHR1cmVzID0ge1xuXHRcdFx0YmFzZTogdGV4dHVyZSxcblx0XHRcdHRpbGVzOiBbXVxuXHRcdH07XG5cblx0XHR2YXIgdGlsZURpbWVuc2lvbnMgPSB0ZXh0dXJlQXNzZXQudGlsZURpbWVuc2lvbnM7XG5cdFx0aWYgKCFfLmlzVW5kZWZpbmVkKHRpbGVEaW1lbnNpb25zKSkge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCB0aWxlRGltZW5zaW9ucy55OyBqKyspIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aWxlRGltZW5zaW9ucy54OyBpKyspIHtcblx0XHRcdFx0XHR2YXIgeCA9IGkgKiB0aWxlRGltZW5zaW9ucy53aWR0aDtcblx0XHRcdFx0XHR2YXIgeSA9IGogKiB0aWxlRGltZW5zaW9ucy5oZWlnaHQ7XG5cdFx0XHRcdFx0dmFyIGZyYW1lID0gbmV3IFBJWEkuUmVjdGFuZ2xlKHgsIHksIHRpbGVEaW1lbnNpb25zLndpZHRoLCB0aWxlRGltZW5zaW9ucy5oZWlnaHQpO1xuXHRcdFx0XHRcdHZhciB0aWxlID0gbmV3IFBJWEkuVGV4dHVyZSh0ZXh0dXJlLCBmcmFtZSk7XG5cdFx0XHRcdFx0dmFyIHRpbGVOdW0gPSBpICsgKHRpbGVEaW1lbnNpb25zLnggKiBqKSArdGlsZURpbWVuc2lvbnMuYmFzZUlkO1xuXHRcdFx0XHRcdHRoaXMudGlsZXNbdGlsZU51bV0gPSB0aWxlO1xuXHRcdFx0XHRcdHRleHR1cmVzLnRpbGVzLnB1c2godGlsZU51bSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gKHRoaXMudGV4dHVyZXNbdGV4dHVyZUFzc2V0LmlkXSA9IHRleHR1cmVzKTtcblx0fVxuXG5cdGdldFRleHR1cmUoaWQsIHRpbGVOdW0pIHtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZCh0aWxlTnVtKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VGV4dHVyZUJ5SWQoaWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUZXh0dXJlQnlUaWxlKHRpbGVOdW0pO1xuXHRcdH1cblx0fVxuXG5cdGdldFRleHR1cmVCeUlkKGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGV4dHVyZXNbaWRdLmJhc2U7XG5cdH1cblxuXHRnZXRUZXh0dXJlQnlUaWxlKHRpbGVOdW0pIHtcblx0XHRyZXR1cm4gdGhpcy50aWxlc1t0aWxlTnVtXTtcblx0fVxuXG5cdGdldFRleHR1cmVUaWxlcyhpZCkge1xuXHRcdHZhciB0ZXh0dXJlT2JqID0gdGhpcy50ZXh0dXJlc1tpZF07XG5cdFx0cmV0dXJuIF8ubWFwKHRleHR1cmVPYmoudGlsZXMsIChpKSA9PiB0aGlzLnRpbGVzW2ldKTtcblx0fVxuXG5cdGdldFRleHR1cmVUaWxlSWRzKGlkKSB7XG5cdFx0cmV0dXJuIHRoaXMudGV4dHVyZXNbaWRdLnRpbGVzO1xuXHR9XG5cdFx0XG5cblx0bG9hZChhc3NldHNUb0xvYWQsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIGFzc2V0UGF0aHMgPSBfLm1hcChhc3NldHNUb0xvYWQsICdwYXRoJyk7XG5cdFx0dmFyIGxvYWRlciA9IG5ldyBQSVhJLkFzc2V0TG9hZGVyKGFzc2V0UGF0aHMpO1xuXHRcdGxvYWRlci5vbkNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRfLm1hcChhc3NldHNUb0xvYWQsIHRoaXMuYWRkVGV4dHVyZS5iaW5kKHRoaXMpKTtcblx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0fS5iaW5kKHRoaXMpO1xuXHRcdGxvYWRlci5sb2FkKCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=