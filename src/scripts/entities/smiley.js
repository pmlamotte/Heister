entityBuilder.addRecipe({
	name: 'smiley',

	components: [
		{
			type: 'SlowRotateComponent',
		},
		{
			type: 'SpriteComponent',
			args: ['smiley']
		},
		{
			type: 'MoveComponent',
		}
	]
});