class TextureFactory {

	constructor() {
		this.textures = {};
	}

	addTexture(textureAsset) {
		var texture = PIXI.Texture.fromImage(textureAsset[0]);
		this.textures[textureAsset[1]] = texture;
	}

	getTexture(id) {
		return this.textures[id];
	}
		

	load(callback) {
		var assets = _.map(textureAssets, _.first);
		var loader = new PIXI.AssetLoader(assets);
		loader.onComplete = function() {
			_.map(textureAssets, this.addTexture.bind(this));
			callback();
		}.bind(this);
		loader.load();
	}
}