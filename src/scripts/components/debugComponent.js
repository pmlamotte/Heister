class DebugComponent extends BaseComponent {
	constructor() {
		super();
		this.text = new PIXI.Text("Test", {
			fill: 'White'
		});
		stage.addChild(this.text);
	}

	update(timeElapsed) {
		this.text.position = this.parent.position;
		var posTextX = this.parent.position.x + "";
		var posTextY = this.parent.position.y + "";
		var posText = posTextX.substring(0, 6) + ", " + posTextY.substring(0, 6);
		this.text.setText(posText);
	}
}