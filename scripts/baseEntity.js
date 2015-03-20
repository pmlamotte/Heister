"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var BaseEntity = (function (_BaseComponent) {
	function BaseEntity(options) {
		_classCallCheck(this, BaseEntity);

		_get(Object.getPrototypeOf(BaseEntity.prototype), "constructor", this).call(this);
		this.position = { x: 0, y: 0 };
		this.rotation = 0;

		_.extend(this, options);
	}

	_inherits(BaseEntity, _BaseComponent);

	return BaseEntity;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2VFbnRpdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBTSxVQUFVO0FBQ0osVUFETixVQUFVLENBQ0gsT0FBTyxFQUFFO3dCQURoQixVQUFVOztBQUVkLDZCQUZJLFVBQVUsNkNBRU47QUFDUixNQUFJLENBQUMsUUFBUSxHQUFHLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7QUFDN0IsTUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7O0FBRWxCLEdBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0VBQ3hCOztXQVBJLFVBQVU7O1FBQVYsVUFBVTtHQUFTLGFBQWEiLCJmaWxlIjoiYmFzZUVudGl0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJhc2VFbnRpdHkgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHt4OiAwLCB5OiAwfTtcblx0XHR0aGlzLnJvdGF0aW9uID0gMDtcblxuXHRcdF8uZXh0ZW5kKHRoaXMsIG9wdGlvbnMpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9