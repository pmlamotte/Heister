"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var BaseComponent = (function () {
	function BaseComponent() {
		_classCallCheck(this, BaseComponent);

		this.components = [];
	}

	_prototypeProperties(BaseComponent, null, {
		update: {
			value: function update() {},
			writable: true,
			configurable: true
		},
		getType: {
			value: function getType() {
				return this.constructor.name;
			},
			writable: true,
			configurable: true
		},
		getComponentByType: {
			value: function getComponentByType(type) {
				return _.find(this.components, function (component) {
					return component.getType() == type;
				});
			},
			writable: true,
			configurable: true
		},
		getComponentsByType: {
			value: function getComponentsByType(type) {
				var components = _.reduce(this.components, function (list, component) {
					return list.concat(component.getComponentsByType(type));
				}, []);
				if (this.getType() == type) {
					components.push(this);
				}
				return components;
			},
			writable: true,
			configurable: true
		},
		getComponentsByName: {
			value: function getComponentsByName(name) {
				var entities = [];
				if (this.name == name) {
					entities.push(this);
				}

				return _.reduce(this.components, function (list, component) {
					return list.concat(component.getComponentsByName(name));
				}, entities);
			},
			writable: true,
			configurable: true
		},
		addComponent: {
			value: function addComponent(component) {
				component.parent = this;
				this.components.push(component);
			},
			writable: true,
			configurable: true
		},
		updateComponents: {
			value: function updateComponents(timeElapsed, now) {
				this.update(timeElapsed);
				_.invoke(this.components, "updateComponents", timeElapsed, now);
			},
			writable: true,
			configurable: true
		}
	});

	return BaseComponent;
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2VDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU0sYUFBYTtBQUNQLFVBRE4sYUFBYTt3QkFBYixhQUFhOztBQUVqQixNQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztFQUNyQjs7c0JBSEksYUFBYTtBQUtsQixRQUFNO1VBQUEsa0JBQUcsRUFBRTs7OztBQUVYLFNBQU87VUFBQSxtQkFBRztBQUNULFdBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDN0I7Ozs7QUFFRCxvQkFBa0I7VUFBQSw0QkFBQyxJQUFJLEVBQUU7QUFDeEIsV0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBUyxTQUFTLEVBQUU7QUFDbEQsWUFBTyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDO0tBQ25DLENBQUMsQ0FBQztJQUNIOzs7O0FBRUQscUJBQW1CO1VBQUEsNkJBQUMsSUFBSSxFQUFFO0FBQ3pCLFFBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFTLElBQUksRUFBRSxTQUFTLEVBQUU7QUFDcEUsWUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3hELEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDUCxRQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDM0IsZUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QjtBQUNELFdBQU8sVUFBVSxDQUFDO0lBQ2xCOzs7O0FBRUQscUJBQW1CO1VBQUEsNkJBQUMsSUFBSSxFQUFFO0FBQ3pCLFFBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixRQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO0FBQ3RCLGFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEI7O0FBRUQsV0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBUyxJQUFJLEVBQUUsU0FBUyxFQUFFO0FBQzFELFlBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUN4RCxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2I7Ozs7QUFFRCxjQUFZO1VBQUEsc0JBQUMsU0FBUyxFQUFFO0FBQ3ZCLGFBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLFFBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDOzs7O0FBRUQsa0JBQWdCO1VBQUEsMEJBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtBQUNsQyxRQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pCLEtBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEU7Ozs7OztRQTlDSSxhQUFhIiwiZmlsZSI6ImJhc2VDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYXNlQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jb21wb25lbnRzID0gW107XG5cdH1cblxuXHR1cGRhdGUoKSB7fVxuXG5cdGdldFR5cGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcblx0fVxuXG5cdGdldENvbXBvbmVudEJ5VHlwZSh0eXBlKSB7XG5cdFx0cmV0dXJuIF8uZmluZCh0aGlzLmNvbXBvbmVudHMsIGZ1bmN0aW9uKGNvbXBvbmVudCkge1xuXHRcdFx0cmV0dXJuIGNvbXBvbmVudC5nZXRUeXBlKCkgPT0gdHlwZTtcblx0XHR9KTtcblx0fVxuXG5cdGdldENvbXBvbmVudHNCeVR5cGUodHlwZSkge1xuXHRcdHZhciBjb21wb25lbnRzID0gXy5yZWR1Y2UodGhpcy5jb21wb25lbnRzLCBmdW5jdGlvbihsaXN0LCBjb21wb25lbnQpIHtcblx0XHRcdHJldHVybiBsaXN0LmNvbmNhdChjb21wb25lbnQuZ2V0Q29tcG9uZW50c0J5VHlwZSh0eXBlKSk7XG5cdFx0fSwgW10pO1xuXHRcdGlmICh0aGlzLmdldFR5cGUoKSA9PSB0eXBlKSB7XG5cdFx0XHRjb21wb25lbnRzLnB1c2godGhpcyk7XG5cdFx0fVxuXHRcdHJldHVybiBjb21wb25lbnRzO1xuXHR9XG5cblx0Z2V0Q29tcG9uZW50c0J5TmFtZShuYW1lKSB7XG5cdFx0dmFyIGVudGl0aWVzID0gW107XG5cdFx0aWYgKHRoaXMubmFtZSA9PSBuYW1lKSB7XG5cdFx0XHRlbnRpdGllcy5wdXNoKHRoaXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBfLnJlZHVjZSh0aGlzLmNvbXBvbmVudHMsIGZ1bmN0aW9uKGxpc3QsIGNvbXBvbmVudCkge1xuXHRcdFx0cmV0dXJuIGxpc3QuY29uY2F0KGNvbXBvbmVudC5nZXRDb21wb25lbnRzQnlOYW1lKG5hbWUpKTtcblx0XHR9LCBlbnRpdGllcyk7XG5cdH1cblxuXHRhZGRDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdFx0Y29tcG9uZW50LnBhcmVudCA9IHRoaXM7XG5cdFx0dGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcblx0fVxuXG5cdHVwZGF0ZUNvbXBvbmVudHModGltZUVsYXBzZWQsIG5vdykge1xuXHRcdHRoaXMudXBkYXRlKHRpbWVFbGFwc2VkKTtcblx0XHRfLmludm9rZSh0aGlzLmNvbXBvbmVudHMsICd1cGRhdGVDb21wb25lbnRzJywgdGltZUVsYXBzZWQsIG5vdyk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=