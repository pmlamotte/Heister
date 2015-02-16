"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Debug = (function () {
	function Debug() {
		_classCallCheck(this, Debug);
	}

	_prototypeProperties(Debug, null, {
		showPosition: {
			value: function showPosition() {
				var smilies = root.getComponentsByName("smiley");
				var i;
				for (i = 0; i < smilies.length; i++) {
					var smiley = smilies[i];
					smiley.addComponent(new DebugComponent());
				}
			},
			writable: true,
			configurable: true
		},
		attachCamera: {
			value: function attachCamera(entity) {
				var cameras = root.getComponentsByType("CameraComponent");
				_.each(cameras, function (camera) {
					return camera.parent.removeComponent(camera);
				});

				var cameraComponent = new CameraComponent();
				entity.addComponent(cameraComponent);
			},
			writable: true,
			configurable: true
		}
	});

	return Debug;
})();

window.debug = new Debug();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYnVnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNLEtBQUs7VUFBTCxLQUFLO3dCQUFMLEtBQUs7OztzQkFBTCxLQUFLO0FBQ1YsY0FBWTtVQUFBLHdCQUFFO0FBQ2IsUUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pELFFBQUksQ0FBQyxDQUFDO0FBQ04sU0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO0FBQ25DLFNBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QixXQUFNLENBQUMsWUFBWSxDQUFDLElBQUksY0FBYyxFQUFFLENBQUMsQ0FBQztLQUMxQztJQUNEOzs7O0FBRUQsY0FBWTtVQUFBLHNCQUFDLE1BQU0sRUFBRTtBQUNwQixRQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMxRCxLQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQU07WUFBSyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7S0FBQSxDQUFDLENBQUM7O0FBRW5FLFFBQUksZUFBZSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7QUFDNUMsVUFBTSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNyQzs7Ozs7O1FBaEJJLEtBQUs7OztBQWtCWCxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiZGVidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEZWJ1ZyB7XG5cdHNob3dQb3NpdGlvbigpe1xuXHRcdHZhciBzbWlsaWVzID0gcm9vdC5nZXRDb21wb25lbnRzQnlOYW1lKCdzbWlsZXknKTtcblx0XHR2YXIgaTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgc21pbGllcy5sZW5ndGg7IGkrKyl7XG5cdFx0XHR2YXIgc21pbGV5ID0gc21pbGllc1tpXTtcblx0XHRcdHNtaWxleS5hZGRDb21wb25lbnQobmV3IERlYnVnQ29tcG9uZW50KCkpO1xuXHRcdH1cblx0fVxuXG5cdGF0dGFjaENhbWVyYShlbnRpdHkpIHtcblx0XHR2YXIgY2FtZXJhcyA9IHJvb3QuZ2V0Q29tcG9uZW50c0J5VHlwZSgnQ2FtZXJhQ29tcG9uZW50Jyk7XG5cdFx0Xy5lYWNoKGNhbWVyYXMsIChjYW1lcmEpID0+IGNhbWVyYS5wYXJlbnQucmVtb3ZlQ29tcG9uZW50KGNhbWVyYSkpO1xuXG5cdFx0dmFyIGNhbWVyYUNvbXBvbmVudCA9IG5ldyBDYW1lcmFDb21wb25lbnQoKTtcblx0XHRlbnRpdHkuYWRkQ29tcG9uZW50KGNhbWVyYUNvbXBvbmVudCk7XG5cdH1cbn1cbndpbmRvdy5kZWJ1ZyA9IG5ldyBEZWJ1ZygpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==