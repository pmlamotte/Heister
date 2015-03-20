class TextureFactory {

	constructor() {
		this.textures = {};
		this.tiles = {};
	}

	addTexture(textureAsset) {
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
					var tileNum = i + (tileDimensions.x * j) + tileDimensions.baseId;
					this.tiles[tileNum] = tile;
					textures.tiles.push(tileNum);
				}
			}
		}

		return (this.textures[textureAsset.id] = textures);
	}

	getTexture(id, tileNum) {
		if (_.isUndefined(tileNum)) {
			return this.getTextureById(id);
		} else {
			return this.getTextureByTile(tileNum);
		}
	}

	getTextureById(id) {
		return this.textures[id].base;
	}

	getTextureByTile(tileNum) {
		return this.tiles[tileNum];
	}

	getTextureTiles(id) {
		var textureObj = this.textures[id];
		return _.map(textureObj.tiles, (i) => this.tiles[i]);
	}

	getTextureTileIds(id) {
		return this.textures[id].tiles;
	}
		

	load(assetsToLoad, callback) {
		var assetPaths = _.map(assetsToLoad, 'path');
		var loader = new PIXI.AssetLoader(assetPaths);
		loader.onComplete = function() {
			_.map(assetsToLoad, this.addTexture.bind(this));
			callback();
		}.bind(this);
		loader.load();
	}
}