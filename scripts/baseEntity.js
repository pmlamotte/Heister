"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var BaseEntity = (function (BaseComponent) {
	function BaseEntity(options) {
		_classCallCheck(this, BaseEntity);

		_get(Object.getPrototypeOf(BaseEntity.prototype), "constructor", this).call(this);
		this.position = { x: 0, y: 0 };
		this.rotation = 0;

		_.extend(this, options);
	}

	_inherits(BaseEntity, BaseComponent);

	return BaseEntity;
})(BaseComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2VFbnRpdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFBTSxVQUFVLGNBQVMsYUFBYTtBQUMxQixVQUROLFVBQVUsQ0FDSCxPQUFPO3dCQURkLFVBQVU7O0FBRWQsNkJBRkksVUFBVSw2Q0FFTjtBQUNSLE1BQUksQ0FBQyxRQUFRLEdBQUcsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztBQUM3QixNQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs7QUFFbEIsR0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7RUFDeEI7O1dBUEksVUFBVSxFQUFTLGFBQWE7O1FBQWhDLFVBQVU7R0FBUyxhQUFhIiwiZmlsZSI6ImJhc2VFbnRpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCYXNlRW50aXR5IGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucG9zaXRpb24gPSB7eDogMCwgeTogMH07XG5cdFx0dGhpcy5yb3RhdGlvbiA9IDA7XG5cblx0XHRfLmV4dGVuZCh0aGlzLCBvcHRpb25zKTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==