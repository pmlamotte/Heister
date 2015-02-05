class TextureFactory {

	constructor() {
		this.textures = {};
	}

	addTexture(path, id) {
		var texture = PIXI.Texture.fromImage(path);
		this.textures[id] = texture;
	}

	getTexture(id) {
		return this.textures[id];
	}

	load() {
		this.addTexture("images/smiley.png", 'smiley');
	}
}