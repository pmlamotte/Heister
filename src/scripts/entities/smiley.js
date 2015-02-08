entityBuilder.addRecipe({
	name: 'smiley',

	components: [
		{
			type: 'SpriteComponent',
			args: ['smiley']
		},
		{
			type: 'SpritePhysicsComponent'
		}
	]
});

entityBuilder.addRecipe({
	name: 'player smiley',

	components: [
		{
			type: 'SpriteComponent',
			args: ['smiley']
		},
		{
			type: 'MoveComponent',
		},
		{
			type: 'SpritePhysicsComponent'
		}
	]
});