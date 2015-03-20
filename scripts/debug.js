"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Debug = (function () {
	function Debug() {
		_classCallCheck(this, Debug);
	}

	_createClass(Debug, {
		showPosition: {
			value: function showPosition() {
				var smilies = root.getComponentsByName("smiley");
				var i;
				for (i = 0; i < smilies.length; i++) {
					var smiley = smilies[i];
					smiley.addComponent(new DebugComponent());
				}
			}
		},
		attachCamera: {
			value: function attachCamera(entity) {
				var cameras = root.getComponentsByType("CameraComponent");
				_.each(cameras, function (camera) {
					return camera.parent.removeComponent(camera);
				});

				var cameraComponent = new CameraComponent();
				entity.addComponent(cameraComponent);
			}
		}
	});

	return Debug;
})();

window.debug = new Debug();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYnVnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNLEtBQUs7VUFBTCxLQUFLO3dCQUFMLEtBQUs7OztjQUFMLEtBQUs7QUFDVixjQUFZO1VBQUEsd0JBQUU7QUFDYixRQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakQsUUFBSSxDQUFDLENBQUM7QUFDTixTQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7QUFDbkMsU0FBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLFdBQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0tBQzFDO0lBQ0Q7O0FBRUQsY0FBWTtVQUFBLHNCQUFDLE1BQU0sRUFBRTtBQUNwQixRQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMxRCxLQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQU07WUFBSyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7S0FBQSxDQUFDLENBQUM7O0FBRW5FLFFBQUksZUFBZSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7QUFDNUMsVUFBTSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNyQzs7OztRQWhCSSxLQUFLOzs7QUFrQlgsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDIiwiZmlsZSI6ImRlYnVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRGVidWcge1xuXHRzaG93UG9zaXRpb24oKXtcblx0XHR2YXIgc21pbGllcyA9IHJvb3QuZ2V0Q29tcG9uZW50c0J5TmFtZSgnc21pbGV5Jyk7XG5cdFx0dmFyIGk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHNtaWxpZXMubGVuZ3RoOyBpKyspe1xuXHRcdFx0dmFyIHNtaWxleSA9IHNtaWxpZXNbaV07XG5cdFx0XHRzbWlsZXkuYWRkQ29tcG9uZW50KG5ldyBEZWJ1Z0NvbXBvbmVudCgpKTtcblx0XHR9XG5cdH1cblxuXHRhdHRhY2hDYW1lcmEoZW50aXR5KSB7XG5cdFx0dmFyIGNhbWVyYXMgPSByb290LmdldENvbXBvbmVudHNCeVR5cGUoJ0NhbWVyYUNvbXBvbmVudCcpO1xuXHRcdF8uZWFjaChjYW1lcmFzLCAoY2FtZXJhKSA9PiBjYW1lcmEucGFyZW50LnJlbW92ZUNvbXBvbmVudChjYW1lcmEpKTtcblxuXHRcdHZhciBjYW1lcmFDb21wb25lbnQgPSBuZXcgQ2FtZXJhQ29tcG9uZW50KCk7XG5cdFx0ZW50aXR5LmFkZENvbXBvbmVudChjYW1lcmFDb21wb25lbnQpO1xuXHR9XG59XG53aW5kb3cuZGVidWcgPSBuZXcgRGVidWcoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=