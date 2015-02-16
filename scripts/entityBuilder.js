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
			},
			writable: true,
			configurable: true
		}
	});

	return EntityBuilder;
})();

window.entityBuilder = new EntityBuilder();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0eUJ1aWxkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU0sYUFBYTtBQUNQLFVBRE4sYUFBYTt3QkFBYixhQUFhOztBQUVqQixNQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNsQixNQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztFQUMxQjs7c0JBSkksYUFBYTtBQU1sQixXQUFTO1VBQUEsbUJBQUMsTUFBTSxFQUFFO0FBQ2pCLFFBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDL0IsWUFBTyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0FBQzVELFlBQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEIsWUFBTztLQUNQO0FBQ0QsUUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ25DOzs7O0FBRUQsT0FBSztVQUFBLGVBQUMsSUFBSSxFQUFjO1FBQVosT0FBTyxnQ0FBQyxFQUFFO0FBQ3JCLFFBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEMsUUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQzFCLFlBQU8sQ0FBQyxLQUFLLHVDQUFxQyxJQUFJLENBQUcsQ0FBQztBQUMxRCxZQUFPLFNBQVMsQ0FBQztLQUNqQjs7QUFFRCxRQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2hDLFlBQU8sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0tBQ2xCO0FBQ0QsV0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUV6QixRQUFJLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUMsS0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFVBQVMsU0FBUyxFQUFFO0FBQzdDLFNBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsU0FBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3hCLGFBQU8sQ0FBQyxLQUFLLG1DQUFpQyxNQUFNLENBQUMsSUFBSSxtQkFBYyxTQUFTLENBQUMsSUFBSSxDQUFHLENBQUM7QUFDekYsYUFBTztNQUNQO0FBQ0QsU0FBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QyxTQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQUU7QUFDakMsbUJBQWEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDO01BQy9CO0FBQ0QsU0FBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7QUFDOUIsbUJBQWEsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO01BQ2hDO0FBQ0QsU0FBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFELFdBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNqRCxXQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCLENBQUMsQ0FBQzs7QUFFSCxXQUFPLE1BQU0sQ0FBQztJQUNkOzs7Ozs7UUEvQ0ksYUFBYTs7O0FBa0RuQixNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUMiLCJmaWxlIjoiZW50aXR5QnVpbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEVudGl0eUJ1aWxkZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnJlY2lwZXMgPSB7fTtcblx0XHR0aGlzLmNvbXBpbGVkUmVjaXBlcyA9IHt9O1xuXHR9XG5cblx0YWRkUmVjaXBlKHJlY2lwZSkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHJlY2lwZS5uYW1lKSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIlRoZSBmb2xsb3dpbmcgcmVjaXBlIGhhZCBubyBuYW1lIHNwZWNpZmllZFwiKTtcblx0XHRcdGNvbnNvbGUuZXJyb3IocmVjaXBlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5yZWNpcGVzW3JlY2lwZS5uYW1lXSA9IHJlY2lwZTtcblx0fVxuXG5cdGJ1aWxkKG5hbWUsIG9wdGlvbnM9e30pIHtcblx0XHR2YXIgcmVjaXBlID0gdGhpcy5yZWNpcGVzW25hbWVdO1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHJlY2lwZSkpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoYEF0dGVtcHQgdG8gYnVpbGQgdW5rbm93biByZWNpcGU6ICR7bmFtZX1gKTtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKF8uaXNVbmRlZmluZWQob3B0aW9ucy5iYXNlKSkge1xuXHRcdFx0b3B0aW9ucy5iYXNlID0ge307XG5cdFx0fVxuXHRcdG9wdGlvbnMuYmFzZS5uYW1lID0gbmFtZTtcblxuXHRcdHZhciBlbnRpdHkgPSBuZXcgQmFzZUVudGl0eShvcHRpb25zLmJhc2UpO1xuXHRcdF8uZWFjaChyZWNpcGUuY29tcG9uZW50cywgZnVuY3Rpb24oY29tcG9uZW50KSB7XG5cdFx0XHR2YXIgdHlwZSA9IHdpbmRvd1tjb21wb25lbnQudHlwZV07XG5cdFx0XHRpZiAoXy5pc1VuZGVmaW5lZCh0eXBlKSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBVbmtub3duIGNvbXBvbmVudCBpbiByZWNpcGUgJyR7cmVjaXBlLm5hbWV9JyBvZiB0eXBlOiAke2NvbXBvbmVudC50eXBlfWApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgY29tcG9uZW50QXJncyA9IG9wdGlvbnNbY29tcG9uZW50LnR5cGVdO1xuXHRcdFx0aWYgKF8uaXNVbmRlZmluZWQoY29tcG9uZW50QXJncykpIHtcblx0XHRcdFx0Y29tcG9uZW50QXJncyA9IGNvbXBvbmVudC5hcmdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFfLmlzQXJyYXkoY29tcG9uZW50QXJncykpIHtcblx0XHRcdFx0Y29tcG9uZW50QXJncyA9IFtjb21wb25lbnRBcmdzXTtcblx0XHRcdH1cblx0XHRcdHZhciBvYmogPSBPYmplY3QuY3JlYXRlKHdpbmRvd1tjb21wb25lbnQudHlwZV0ucHJvdG90eXBlKTtcblx0XHRcdHdpbmRvd1tjb21wb25lbnQudHlwZV0uYXBwbHkob2JqLCBjb21wb25lbnRBcmdzKTtcblx0XHRcdGVudGl0eS5hZGRDb21wb25lbnQob2JqKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBlbnRpdHk7XG5cdH1cbn1cblxud2luZG93LmVudGl0eUJ1aWxkZXIgPSBuZXcgRW50aXR5QnVpbGRlcigpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==