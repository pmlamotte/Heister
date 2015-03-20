"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var TextureFactory = (function () {
	function TextureFactory() {
		_classCallCheck(this, TextureFactory);

		this.textures = {};
		this.tiles = {};
	}

	_createClass(TextureFactory, {
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
			}
		},
		getTexture: {
			value: function getTexture(id, tileNum) {
				if (_.isUndefined(tileNum)) {
					return this.getTextureById(id);
				} else {
					return this.getTextureByTile(tileNum);
				}
			}
		},
		getTextureById: {
			value: function getTextureById(id) {
				return this.textures[id].base;
			}
		},
		getTextureByTile: {
			value: function getTextureByTile(tileNum) {
				return this.tiles[tileNum];
			}
		},
		getTextureTiles: {
			value: function getTextureTiles(id) {
				var _this = this;

				var textureObj = this.textures[id];
				return _.map(textureObj.tiles, function (i) {
					return _this.tiles[i];
				});
			}
		},
		getTextureTileIds: {
			value: function getTextureTileIds(id) {
				return this.textures[id].tiles;
			}
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
			}
		}
	});

	return TextureFactory;
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHR1cmVGYWN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNLGNBQWM7QUFFUixVQUZOLGNBQWMsR0FFTDt3QkFGVCxjQUFjOztBQUdsQixNQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixNQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztFQUNoQjs7Y0FMSSxjQUFjO0FBT25CLFlBQVU7VUFBQSxvQkFBQyxZQUFZLEVBQUU7QUFDeEIsUUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hELFFBQUksUUFBUSxHQUFHO0FBQ2QsU0FBSSxFQUFFLE9BQU87QUFDYixVQUFLLEVBQUUsRUFBRTtLQUNULENBQUM7O0FBRUYsUUFBSSxjQUFjLEdBQUcsWUFBWSxDQUFDLGNBQWMsQ0FBQztBQUNqRCxRQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsRUFBRTtBQUNuQyxVQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMxQyxXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUMxQyxXQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNqQyxXQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztBQUNsQyxXQUFJLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsRixXQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzVDLFdBQUksT0FBTyxHQUFHLENBQUMsR0FBSSxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsQUFBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7QUFDakUsV0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDM0IsZUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDN0I7TUFDRDtLQUNEOztBQUVELFdBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFFO0lBQ25EOztBQUVELFlBQVU7VUFBQSxvQkFBQyxFQUFFLEVBQUUsT0FBTyxFQUFFO0FBQ3ZCLFFBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUMzQixZQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDL0IsTUFBTTtBQUNOLFlBQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3RDO0lBQ0Q7O0FBRUQsZ0JBQWM7VUFBQSx3QkFBQyxFQUFFLEVBQUU7QUFDbEIsV0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM5Qjs7QUFFRCxrQkFBZ0I7VUFBQSwwQkFBQyxPQUFPLEVBQUU7QUFDekIsV0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCOztBQUVELGlCQUFlO1VBQUEseUJBQUMsRUFBRSxFQUFFOzs7QUFDbkIsUUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQyxXQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxVQUFDLENBQUM7WUFBSyxNQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FBQSxDQUFDLENBQUM7SUFDckQ7O0FBRUQsbUJBQWlCO1VBQUEsMkJBQUMsRUFBRSxFQUFFO0FBQ3JCLFdBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0I7O0FBR0QsTUFBSTtVQUFBLGNBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRTtBQUM1QixRQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM3QyxRQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDOUMsVUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFBLFlBQVc7QUFDOUIsTUFBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNoRCxhQUFRLEVBQUUsQ0FBQztLQUNYLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDYixVQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZDs7OztRQWxFSSxjQUFjIiwiZmlsZSI6InRleHR1cmVGYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGV4dHVyZUZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudGV4dHVyZXMgPSB7fTtcblx0XHR0aGlzLnRpbGVzID0ge307XG5cdH1cblxuXHRhZGRUZXh0dXJlKHRleHR1cmVBc3NldCkge1xuXHRcdHZhciB0ZXh0dXJlID0gUElYSS5UZXh0dXJlLmZyb21JbWFnZSh0ZXh0dXJlQXNzZXQucGF0aCk7XG5cdFx0dmFyIHRleHR1cmVzID0ge1xuXHRcdFx0YmFzZTogdGV4dHVyZSxcblx0XHRcdHRpbGVzOiBbXVxuXHRcdH07XG5cblx0XHR2YXIgdGlsZURpbWVuc2lvbnMgPSB0ZXh0dXJlQXNzZXQudGlsZURpbWVuc2lvbnM7XG5cdFx0aWYgKCFfLmlzVW5kZWZpbmVkKHRpbGVEaW1lbnNpb25zKSkge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCB0aWxlRGltZW5zaW9ucy55OyBqKyspIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aWxlRGltZW5zaW9ucy54OyBpKyspIHtcblx0XHRcdFx0XHR2YXIgeCA9IGkgKiB0aWxlRGltZW5zaW9ucy53aWR0aDtcblx0XHRcdFx0XHR2YXIgeSA9IGogKiB0aWxlRGltZW5zaW9ucy5oZWlnaHQ7XG5cdFx0XHRcdFx0dmFyIGZyYW1lID0gbmV3IFBJWEkuUmVjdGFuZ2xlKHgsIHksIHRpbGVEaW1lbnNpb25zLndpZHRoLCB0aWxlRGltZW5zaW9ucy5oZWlnaHQpO1xuXHRcdFx0XHRcdHZhciB0aWxlID0gbmV3IFBJWEkuVGV4dHVyZSh0ZXh0dXJlLCBmcmFtZSk7XG5cdFx0XHRcdFx0dmFyIHRpbGVOdW0gPSBpICsgKHRpbGVEaW1lbnNpb25zLnggKiBqKSArIHRpbGVEaW1lbnNpb25zLmJhc2VJZDtcblx0XHRcdFx0XHR0aGlzLnRpbGVzW3RpbGVOdW1dID0gdGlsZTtcblx0XHRcdFx0XHR0ZXh0dXJlcy50aWxlcy5wdXNoKHRpbGVOdW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuICh0aGlzLnRleHR1cmVzW3RleHR1cmVBc3NldC5pZF0gPSB0ZXh0dXJlcyk7XG5cdH1cblxuXHRnZXRUZXh0dXJlKGlkLCB0aWxlTnVtKSB7XG5cdFx0aWYgKF8uaXNVbmRlZmluZWQodGlsZU51bSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRleHR1cmVCeUlkKGlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VGV4dHVyZUJ5VGlsZSh0aWxlTnVtKTtcblx0XHR9XG5cdH1cblxuXHRnZXRUZXh0dXJlQnlJZChpZCkge1xuXHRcdHJldHVybiB0aGlzLnRleHR1cmVzW2lkXS5iYXNlO1xuXHR9XG5cblx0Z2V0VGV4dHVyZUJ5VGlsZSh0aWxlTnVtKSB7XG5cdFx0cmV0dXJuIHRoaXMudGlsZXNbdGlsZU51bV07XG5cdH1cblxuXHRnZXRUZXh0dXJlVGlsZXMoaWQpIHtcblx0XHR2YXIgdGV4dHVyZU9iaiA9IHRoaXMudGV4dHVyZXNbaWRdO1xuXHRcdHJldHVybiBfLm1hcCh0ZXh0dXJlT2JqLnRpbGVzLCAoaSkgPT4gdGhpcy50aWxlc1tpXSk7XG5cdH1cblxuXHRnZXRUZXh0dXJlVGlsZUlkcyhpZCkge1xuXHRcdHJldHVybiB0aGlzLnRleHR1cmVzW2lkXS50aWxlcztcblx0fVxuXHRcdFxuXG5cdGxvYWQoYXNzZXRzVG9Mb2FkLCBjYWxsYmFjaykge1xuXHRcdHZhciBhc3NldFBhdGhzID0gXy5tYXAoYXNzZXRzVG9Mb2FkLCAncGF0aCcpO1xuXHRcdHZhciBsb2FkZXIgPSBuZXcgUElYSS5Bc3NldExvYWRlcihhc3NldFBhdGhzKTtcblx0XHRsb2FkZXIub25Db21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Xy5tYXAoYXNzZXRzVG9Mb2FkLCB0aGlzLmFkZFRleHR1cmUuYmluZCh0aGlzKSk7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH0uYmluZCh0aGlzKTtcblx0XHRsb2FkZXIubG9hZCgpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9