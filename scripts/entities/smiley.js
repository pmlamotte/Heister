"use strict";

entityBuilder.addRecipe({
	name: "smiley",

	components: [{
		type: "SpriteComponent",
		args: ["houston"]
	}, {
		type: "SpritePhysicsComponent"
	}]
});

entityBuilder.addRecipe({
	name: "player smiley",

	components: [{
		type: "SpriteComponent",
		args: ["houston"]
	}, {
		type: "MoveComponent" }, {
		type: "SpritePhysicsComponent"
	}]
});