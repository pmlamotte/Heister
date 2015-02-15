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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0eUJ1aWxkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU0sYUFBYTtBQUNQLFVBRE4sYUFBYTt3QkFBYixhQUFhOztBQUVqQixNQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUNsQixNQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztFQUMxQjs7c0JBSkksYUFBYTtBQU1sQixXQUFTO1VBQUEsbUJBQUMsTUFBTSxFQUFFO0FBQ2pCLFFBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDL0IsWUFBTyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0FBQzVELFlBQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEIsWUFBTztLQUNQO0FBQ0QsUUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ25DOzs7O0FBRUQsT0FBSztVQUFBLGVBQUMsSUFBSSxFQUFjO1FBQVosT0FBTyxnQ0FBQyxFQUFFO0FBQ3JCLFFBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEMsUUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQzFCLFlBQU8sQ0FBQyxLQUFLLHVDQUFxQyxJQUFJLENBQUcsQ0FBQztBQUMxRCxZQUFPLFNBQVMsQ0FBQztLQUNqQjs7QUFFRCxXQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFcEIsUUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckMsS0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFVBQVMsU0FBUyxFQUFFO0FBQzdDLFNBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsU0FBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3hCLGFBQU8sQ0FBQyxLQUFLLG1DQUFpQyxNQUFNLENBQUMsSUFBSSxtQkFBYyxTQUFTLENBQUMsSUFBSSxDQUFHLENBQUM7QUFDekYsYUFBTztNQUNQO0FBQ0QsU0FBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFELFdBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3BELFdBQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDekIsQ0FBQyxDQUFDOztBQUVILFdBQU8sTUFBTSxDQUFDO0lBQ2Q7Ozs7OztRQXJDSSxhQUFhOzs7QUF3Q25CLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQyIsImZpbGUiOiJlbnRpdHlCdWlsZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRW50aXR5QnVpbGRlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucmVjaXBlcyA9IHt9O1xuXHRcdHRoaXMuY29tcGlsZWRSZWNpcGVzID0ge307XG5cdH1cblxuXHRhZGRSZWNpcGUocmVjaXBlKSB7XG5cdFx0aWYgKF8uaXNVbmRlZmluZWQocmVjaXBlLm5hbWUpKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiVGhlIGZvbGxvd2luZyByZWNpcGUgaGFkIG5vIG5hbWUgc3BlY2lmaWVkXCIpO1xuXHRcdFx0Y29uc29sZS5lcnJvcihyZWNpcGUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnJlY2lwZXNbcmVjaXBlLm5hbWVdID0gcmVjaXBlO1xuXHR9XG5cblx0YnVpbGQobmFtZSwgb3B0aW9ucz17fSkge1xuXHRcdHZhciByZWNpcGUgPSB0aGlzLnJlY2lwZXNbbmFtZV07XG5cdFx0aWYgKF8uaXNVbmRlZmluZWQocmVjaXBlKSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcihgQXR0ZW1wdCB0byBidWlsZCB1bmtub3duIHJlY2lwZTogJHtuYW1lfWApO1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRvcHRpb25zLm5hbWUgPSBuYW1lO1xuXG5cdFx0dmFyIGVudGl0eSA9IG5ldyBCYXNlRW50aXR5KG9wdGlvbnMpO1xuXHRcdF8uZWFjaChyZWNpcGUuY29tcG9uZW50cywgZnVuY3Rpb24oY29tcG9uZW50KSB7XG5cdFx0XHR2YXIgdHlwZSA9IHdpbmRvd1tjb21wb25lbnQudHlwZV07XG5cdFx0XHRpZiAoXy5pc1VuZGVmaW5lZCh0eXBlKSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBVbmtub3duIGNvbXBvbmVudCBpbiByZWNpcGUgJyR7cmVjaXBlLm5hbWV9JyBvZiB0eXBlOiAke2NvbXBvbmVudC50eXBlfWApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR2YXIgb2JqID0gT2JqZWN0LmNyZWF0ZSh3aW5kb3dbY29tcG9uZW50LnR5cGVdLnByb3RvdHlwZSk7XG5cdFx0XHR3aW5kb3dbY29tcG9uZW50LnR5cGVdLmFwcGx5KG9iaiwgW2NvbXBvbmVudC5hcmdzXSk7XG5cdFx0XHRlbnRpdHkuYWRkQ29tcG9uZW50KG9iaik7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZW50aXR5O1xuXHR9XG59XG5cbndpbmRvdy5lbnRpdHlCdWlsZGVyID0gbmV3IEVudGl0eUJ1aWxkZXIoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=