"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var EntityBuilder = (function () {
	function EntityBuilder() {
		_classCallCheck(this, EntityBuilder);

		this.recipes = {};
		this.compiledRecipes = {};
	}

	_createClass(EntityBuilder, {
		addRecipe: {
			value: function addRecipe(recipe) {
				if (_.isUndefined(recipe.name)) {
					console.error("The following recipe had no name specified");
					console.error(recipe);
					return;
				}
				this.recipes[recipe.name] = recipe;
			}
		},
		build: {
			value: function build(name) {
				var options = arguments[1] === undefined ? {} : arguments[1];

				var recipe = this.recipes[name];
				if (_.isUndefined(recipe)) {
					console.error("Attempt to build unknown recipe: " + name);
					return undefined;
				}

				if (_.isUndefined(options.base)) {
					options.base = {};
				}
				options.base.name = name;

				var entity = new BaseEntity(options.base);
				_.each(recipe.components, function (component) {
					var type = window[component.type];
					if (_.isUndefined(type)) {
						console.error("Unknown component in recipe '" + recipe.name + "' of type: " + component.type);
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
	});

	return EntityBuilder;
})();

window.entityBuilder = new EntityBuilder();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0eUJ1aWxkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU0sYUFBYTtBQUNQLFVBRE4sYUFBYSxHQUNKO3dCQURULGFBQWE7O0FBRWpCLE1BQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLE1BQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0VBQzFCOztjQUpJLGFBQWE7QUFNbEIsV0FBUztVQUFBLG1CQUFDLE1BQU0sRUFBRTtBQUNqQixRQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQy9CLFlBQU8sQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztBQUM1RCxZQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RCLFlBQU87S0FDUDtBQUNELFFBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNuQzs7QUFFRCxPQUFLO1VBQUEsZUFBQyxJQUFJLEVBQWM7UUFBWixPQUFPLGdDQUFDLEVBQUU7O0FBQ3JCLFFBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEMsUUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQzFCLFlBQU8sQ0FBQyxLQUFLLHVDQUFxQyxJQUFJLENBQUcsQ0FBQztBQUMxRCxZQUFPLFNBQVMsQ0FBQztLQUNqQjs7QUFFRCxRQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2hDLFlBQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0tBQ2xCO0FBQ0QsV0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUV6QixRQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUMsS0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFVBQVMsU0FBUyxFQUFFO0FBQzdDLFNBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsU0FBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3hCLGFBQU8sQ0FBQyxLQUFLLG1DQUFpQyxNQUFNLENBQUMsSUFBSSxtQkFBYyxTQUFTLENBQUMsSUFBSSxDQUFHLENBQUM7QUFDekYsYUFBTztNQUNQO0FBQ0QsU0FBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QyxTQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQUU7QUFDakMsbUJBQWEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO01BQy9CO0FBQ0QsU0FBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7QUFDOUIsbUJBQWEsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO01BQ2hDO0FBQ0QsU0FBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFELFdBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNqRCxXQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCLENBQUMsQ0FBQzs7QUFFSCxXQUFPLE1BQU0sQ0FBQztJQUNkOzs7O1FBL0NJLGFBQWE7OztBQWtEbkIsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDIiwiZmlsZSI6ImVudGl0eUJ1aWxkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFbnRpdHlCdWlsZGVyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5yZWNpcGVzID0ge307XG5cdFx0dGhpcy5jb21waWxlZFJlY2lwZXMgPSB7fTtcblx0fVxuXG5cdGFkZFJlY2lwZShyZWNpcGUpIHtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZChyZWNpcGUubmFtZSkpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJUaGUgZm9sbG93aW5nIHJlY2lwZSBoYWQgbm8gbmFtZSBzcGVjaWZpZWRcIik7XG5cdFx0XHRjb25zb2xlLmVycm9yKHJlY2lwZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMucmVjaXBlc1tyZWNpcGUubmFtZV0gPSByZWNpcGU7XG5cdH1cblxuXHRidWlsZChuYW1lLCBvcHRpb25zPXt9KSB7XG5cdFx0dmFyIHJlY2lwZSA9IHRoaXMucmVjaXBlc1tuYW1lXTtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZChyZWNpcGUpKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGBBdHRlbXB0IHRvIGJ1aWxkIHVua25vd24gcmVjaXBlOiAke25hbWV9YCk7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGlmIChfLmlzVW5kZWZpbmVkKG9wdGlvbnMuYmFzZSkpIHtcblx0XHRcdG9wdGlvbnMuYmFzZSA9IHt9O1xuXHRcdH1cblx0XHRvcHRpb25zLmJhc2UubmFtZSA9IG5hbWU7XG5cblx0XHR2YXIgZW50aXR5ID0gbmV3IEJhc2VFbnRpdHkob3B0aW9ucy5iYXNlKTtcblx0XHRfLmVhY2gocmVjaXBlLmNvbXBvbmVudHMsIGZ1bmN0aW9uKGNvbXBvbmVudCkge1xuXHRcdFx0dmFyIHR5cGUgPSB3aW5kb3dbY29tcG9uZW50LnR5cGVdO1xuXHRcdFx0aWYgKF8uaXNVbmRlZmluZWQodHlwZSkpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgVW5rbm93biBjb21wb25lbnQgaW4gcmVjaXBlICcke3JlY2lwZS5uYW1lfScgb2YgdHlwZTogJHtjb21wb25lbnQudHlwZX1gKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGNvbXBvbmVudEFyZ3MgPSBvcHRpb25zW2NvbXBvbmVudC50eXBlXTtcblx0XHRcdGlmIChfLmlzVW5kZWZpbmVkKGNvbXBvbmVudEFyZ3MpKSB7XG5cdFx0XHRcdGNvbXBvbmVudEFyZ3MgPSBjb21wb25lbnQuYXJncztcblx0XHRcdH1cblx0XHRcdGlmICghXy5pc0FycmF5KGNvbXBvbmVudEFyZ3MpKSB7XG5cdFx0XHRcdGNvbXBvbmVudEFyZ3MgPSBbY29tcG9uZW50QXJnc107XG5cdFx0XHR9XG5cdFx0XHR2YXIgb2JqID0gT2JqZWN0LmNyZWF0ZSh3aW5kb3dbY29tcG9uZW50LnR5cGVdLnByb3RvdHlwZSk7XG5cdFx0XHR3aW5kb3dbY29tcG9uZW50LnR5cGVdLmFwcGx5KG9iaiwgY29tcG9uZW50QXJncyk7XG5cdFx0XHRlbnRpdHkuYWRkQ29tcG9uZW50KG9iaik7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZW50aXR5O1xuXHR9XG59XG5cbndpbmRvdy5lbnRpdHlCdWlsZGVyID0gbmV3IEVudGl0eUJ1aWxkZXIoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=