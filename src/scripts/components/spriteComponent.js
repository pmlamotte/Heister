class SpriteComponent extends BaseComponent {
	constructor(textureId) {
		this.texture = textureFactory.getTexture(textureId);
		this.sprite = new PIXI.Sprite(this.texture);
		this.sprite.anchor.x = 0.5;
		this.sprite.anchor.y = 0.5;
		this.rotation = 0;
		stage.addChild(this.sprite);
	}

	update(timeElapsed) {
		this.sprite.position = this.parent.position;
		this.sprite.rotation = this.parent.rotation;
	}
}