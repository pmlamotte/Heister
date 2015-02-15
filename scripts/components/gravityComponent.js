"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var GravityComponent = (function (BaseComponent) {
	function GravityComponent() {
		_classCallCheck(this, GravityComponent);

		_get(Object.getPrototypeOf(GravityComponent.prototype), "constructor", this).call(this);
		this.gravity = Physics.behavior("constant-acceleration", {
			acc: { x: 0, y: 50 }
		});
		physicsManager.world.add(this.gravity);
	}

	_inherits(GravityComponent, BaseComponent);

	return GravityComponent;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3Jhdml0eUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFNLGdCQUFnQixjQUFTLGFBQWE7QUFFaEMsVUFGTixnQkFBZ0I7d0JBQWhCLGdCQUFnQjs7QUFHcEIsNkJBSEksZ0JBQWdCLDZDQUdaO0FBQ1IsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLHVCQUF1QixFQUFFO0FBQ3hELE1BQUcsRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBQztHQUNsQixDQUFDLENBQUM7QUFDSCxnQkFBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBRXhDOztXQVRLLGdCQUFnQixFQUFTLGFBQWE7O1FBQXRDLGdCQUFnQjtHQUFTLGFBQWEiLCJmaWxlIjoiY29tcG9uZW50cy9ncmF2aXR5Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR3Jhdml0eUNvbXBvbmVudCBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5ncmF2aXR5ID0gUGh5c2ljcy5iZWhhdmlvcignY29uc3RhbnQtYWNjZWxlcmF0aW9uJywge1xuXHRcdFx0YWNjOiB7eDogMCwgeTogNTB9XG5cdFx0fSk7XG5cdFx0cGh5c2ljc01hbmFnZXIud29ybGQuYWRkKHRoaXMuZ3Jhdml0eSk7XG5cdFxufX0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=