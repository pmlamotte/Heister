class EntityBuilder {
	constructor() {
		this.recipes = {};
		this.compiledRecipes = {};
	}

	addRecipe(recipe) {
		if (_.isUndefined(recipe.name)) {
			console.error("The following recipe had no name specified");
			console.error(recipe);
			return;
		}
		this.recipes[recipe.name] = recipe;
	}

	build(name, options={}) {
		var recipe = this.recipes[name];
		if (_.isUndefined(recipe)) {
			console.error(`Attempt to build unknown recipe: ${name}`);
			return undefined;
		}

		if (_.isUndefined(options.base)) {
			options.base = {};
		}
		options.base.name = name;

		var entity = new BaseEntity(options.base);
		_.each(recipe.components, function(component) {
			var type = window[component.type];
			if (_.isUndefined(type)) {
				console.error(`Unknown component in recipe '${recipe.name}' of type: ${component.type}`);
				return;
			}
			var componentArgs = options[component.type];
			if (_.isUndefined(componentArgs)) {
				componentArgs = component.args;
			}
			if (!_.isArray(componentArgs)) {
				componentArgs = [componentArgs];
			}
			var obj = Object.create(window[component.type].prototype);
			window[component.type].apply(obj, componentArgs);
			entity.addComponent(obj);
		});

		return entity;
	}
}

window.entityBuilder = new EntityBuilder();