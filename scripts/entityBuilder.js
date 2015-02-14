"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var EntityBuilder = (function () {
	function EntityBuilder() {
		_classCallCheck(this, EntityBuilder);

		this.recipes = {};
		this.compiledRecipes = {};
	}

	_prototypeProperties(EntityBuilder, null, {
		addRecipe: {
			value: function addRecipe(recipe) {
				if (_.isUndefined(recipe.name)) {
					console.error("The following recipe had no name specified");
					console.error(recipe);
					return;
				}
				this.recipes[recipe.name] = recipe;
			},
			writable: true,
			configurable: true
		},
		build: {
			value: function build(name) {
				var options = arguments[1] === undefined ? {} : arguments[1];
				var recipe = this.recipes[name];
				if (_.isUndefined(recipe)) {
					console.error("Attempt to build unknown recipe: " + name);
					return undefined;
				}

				options.name = name;

				var entity = new BaseEntity(options);
				_.each(recipe.components, function (component) {
					var type = window[component.type];
					if (_.isUndefined(type)) {
						console.error("Unknown component in recipe '" + recipe.name + "' of type: " + component.type);
						return;
					}
					var obj = Object.create(window[component.type].prototype);
					window[component.type].apply(obj, [component.args]);
					entity.addComponent(obj);
				});

				return entity;
			},
			writable: true,
			configurable: true
		}
	});

	return EntityBuilder;
})();

window.entityBuilder = new EntityBuilder();