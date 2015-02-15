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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHR1cmVGYWN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNLGNBQWM7QUFFUixVQUZOLGNBQWM7d0JBQWQsY0FBYzs7QUFHbEIsTUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7RUFDbkI7O3NCQUpJLGNBQWM7QUFNbkIsWUFBVTtVQUFBLG9CQUFDLFlBQVksRUFBRTtBQUN4QixRQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0RCxRQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUN6Qzs7OztBQUVELFlBQVU7VUFBQSxvQkFBQyxFQUFFLEVBQUU7QUFDZCxXQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekI7Ozs7QUFHRCxNQUFJO1VBQUEsY0FBQyxRQUFRLEVBQUU7QUFDZCxRQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0MsUUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFDLFVBQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQSxZQUFXO0FBQzlCLE1BQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDakQsYUFBUSxFQUFFLENBQUM7S0FDWCxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2IsVUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2Q7Ozs7OztRQXhCSSxjQUFjIiwiZmlsZSI6InRleHR1cmVGYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGV4dHVyZUZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudGV4dHVyZXMgPSB7fTtcblx0fVxuXG5cdGFkZFRleHR1cmUodGV4dHVyZUFzc2V0KSB7XG5cdFx0dmFyIHRleHR1cmUgPSBQSVhJLlRleHR1cmUuZnJvbUltYWdlKHRleHR1cmVBc3NldFswXSk7XG5cdFx0dGhpcy50ZXh0dXJlc1t0ZXh0dXJlQXNzZXRbMV1dID0gdGV4dHVyZTtcblx0fVxuXG5cdGdldFRleHR1cmUoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy50ZXh0dXJlc1tpZF07XG5cdH1cblx0XHRcblxuXHRsb2FkKGNhbGxiYWNrKSB7XG5cdFx0dmFyIGFzc2V0cyA9IF8ubWFwKHRleHR1cmVBc3NldHMsIF8uZmlyc3QpO1xuXHRcdHZhciBsb2FkZXIgPSBuZXcgUElYSS5Bc3NldExvYWRlcihhc3NldHMpO1xuXHRcdGxvYWRlci5vbkNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRfLm1hcCh0ZXh0dXJlQXNzZXRzLCB0aGlzLmFkZFRleHR1cmUuYmluZCh0aGlzKSk7XG5cdFx0XHRjYWxsYmFjaygpO1xuXHRcdH0uYmluZCh0aGlzKTtcblx0XHRsb2FkZXIubG9hZCgpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9