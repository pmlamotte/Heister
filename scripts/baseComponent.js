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
		removeComponent: {
			value: function removeComponent(component) {
				this.components = _.without(this.components, component);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2VDb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU0sYUFBYTtBQUNQLFVBRE4sYUFBYTt3QkFBYixhQUFhOztBQUVqQixNQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztFQUNyQjs7c0JBSEksYUFBYTtBQUtsQixRQUFNO1VBQUEsa0JBQUcsRUFBRTs7OztBQUVYLFNBQU87VUFBQSxtQkFBRztBQUNULFdBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDN0I7Ozs7QUFFRCxvQkFBa0I7VUFBQSw0QkFBQyxJQUFJLEVBQUU7QUFDeEIsV0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBUyxTQUFTLEVBQUU7QUFDbEQsWUFBTyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDO0tBQ25DLENBQUMsQ0FBQztJQUNIOzs7O0FBRUQscUJBQW1CO1VBQUEsNkJBQUMsSUFBSSxFQUFFO0FBQ3pCLFFBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFTLElBQUksRUFBRSxTQUFTLEVBQUU7QUFDcEUsWUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3hELEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDUCxRQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDM0IsZUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QjtBQUNELFdBQU8sVUFBVSxDQUFDO0lBQ2xCOzs7O0FBRUQscUJBQW1CO1VBQUEsNkJBQUMsSUFBSSxFQUFFO0FBQ3pCLFFBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixRQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO0FBQ3RCLGFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEI7O0FBRUQsV0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBUyxJQUFJLEVBQUUsU0FBUyxFQUFFO0FBQzFELFlBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUN4RCxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2I7Ozs7QUFFRCxjQUFZO1VBQUEsc0JBQUMsU0FBUyxFQUFFO0FBQ3ZCLGFBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLFFBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDOzs7O0FBRUQsaUJBQWU7VUFBQSx5QkFBQyxTQUFTLEVBQUU7QUFDMUIsUUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDeEQ7Ozs7QUFFRCxrQkFBZ0I7VUFBQSwwQkFBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO0FBQ2xDLFFBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekIsS0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNoRTs7Ozs7O1FBbERJLGFBQWEiLCJmaWxlIjoiYmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhc2VDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNvbXBvbmVudHMgPSBbXTtcblx0fVxuXG5cdHVwZGF0ZSgpIHt9XG5cblx0Z2V0VHlwZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXHR9XG5cblx0Z2V0Q29tcG9uZW50QnlUeXBlKHR5cGUpIHtcblx0XHRyZXR1cm4gXy5maW5kKHRoaXMuY29tcG9uZW50cywgZnVuY3Rpb24oY29tcG9uZW50KSB7XG5cdFx0XHRyZXR1cm4gY29tcG9uZW50LmdldFR5cGUoKSA9PSB0eXBlO1xuXHRcdH0pO1xuXHR9XG5cblx0Z2V0Q29tcG9uZW50c0J5VHlwZSh0eXBlKSB7XG5cdFx0dmFyIGNvbXBvbmVudHMgPSBfLnJlZHVjZSh0aGlzLmNvbXBvbmVudHMsIGZ1bmN0aW9uKGxpc3QsIGNvbXBvbmVudCkge1xuXHRcdFx0cmV0dXJuIGxpc3QuY29uY2F0KGNvbXBvbmVudC5nZXRDb21wb25lbnRzQnlUeXBlKHR5cGUpKTtcblx0XHR9LCBbXSk7XG5cdFx0aWYgKHRoaXMuZ2V0VHlwZSgpID09IHR5cGUpIHtcblx0XHRcdGNvbXBvbmVudHMucHVzaCh0aGlzKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbXBvbmVudHM7XG5cdH1cblxuXHRnZXRDb21wb25lbnRzQnlOYW1lKG5hbWUpIHtcblx0XHR2YXIgZW50aXRpZXMgPSBbXTtcblx0XHRpZiAodGhpcy5uYW1lID09IG5hbWUpIHtcblx0XHRcdGVudGl0aWVzLnB1c2godGhpcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF8ucmVkdWNlKHRoaXMuY29tcG9uZW50cywgZnVuY3Rpb24obGlzdCwgY29tcG9uZW50KSB7XG5cdFx0XHRyZXR1cm4gbGlzdC5jb25jYXQoY29tcG9uZW50LmdldENvbXBvbmVudHNCeU5hbWUobmFtZSkpO1xuXHRcdH0sIGVudGl0aWVzKTtcblx0fVxuXG5cdGFkZENvbXBvbmVudChjb21wb25lbnQpIHtcblx0XHRjb21wb25lbnQucGFyZW50ID0gdGhpcztcblx0XHR0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuXHR9XG5cblx0cmVtb3ZlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRcdHRoaXMuY29tcG9uZW50cyA9IF8ud2l0aG91dCh0aGlzLmNvbXBvbmVudHMsIGNvbXBvbmVudCk7XG5cdH1cblxuXHR1cGRhdGVDb21wb25lbnRzKHRpbWVFbGFwc2VkLCBub3cpIHtcblx0XHR0aGlzLnVwZGF0ZSh0aW1lRWxhcHNlZCk7XG5cdFx0Xy5pbnZva2UodGhpcy5jb21wb25lbnRzLCAndXBkYXRlQ29tcG9uZW50cycsIHRpbWVFbGFwc2VkLCBub3cpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9