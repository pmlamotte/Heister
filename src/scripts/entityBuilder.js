class EntityBuilder {
	constructor() {
		this.recipes = {};
		this.compiledRecipes = {};
	}

	addRecipe(recipe) {
		if (_.isUndefined(recipe.name)) {
			console.error("The following recipe had no name specified");
			console.error(recipe)
			return;
		}
		this.recipes[recipe.name] = recipe;
	}

	build(name) {
		var recipe = this.recipes[name];
		if (_.isUndefined(recipe)) {
			console.error(`Attempt to build unknown recipe: ${name}`);
			return undefined;
		}

		var entity = new BaseEntity();
		_.each(recipe.components, function(component) {
			var type = window[component.type];
			if (_.isUndefined(type)) {
				console.error(`Unknown component in recipe '${recipe.name}' of type: ${component.type}`);
			}
			var obj = Object.create(window[component.type].prototype);
			window[component.type].apply(obj, component.args);
			entity.addComponent(obj);
		});

		return entity;
	}
}

window.entityBuilder = new EntityBuilder();