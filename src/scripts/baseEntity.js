class BaseEntity extends BaseComponent {
	constructor(options) {
		super();
		this.position = {x: 0, y: 0};
		this.rotation = 0;

		_.extend(this, options);
	}
}