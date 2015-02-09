entityBuilder.addRecipe({
	name: 'debugSmiley',

	components: [
		{
			type: 'SpriteComponent',
			args: ['smiley']
		},
		{
			type: 'SpritePhysicsComponent'
		},
		{
			type: 'DebugComponent'
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