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
		}
	});

	return Debug;
})();

window.debug = new Debug();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYnVnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFNLEtBQUs7VUFBTCxLQUFLO3dCQUFMLEtBQUs7OztzQkFBTCxLQUFLO0FBQ1YsY0FBWTtVQUFBLHdCQUFFO0FBQ2IsUUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pELFFBQUksQ0FBQyxDQUFDO0FBQ04sU0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO0FBQ25DLFNBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QixXQUFNLENBQUMsWUFBWSxDQUFDLElBQUksY0FBYyxFQUFFLENBQUMsQ0FBQztLQUMxQztJQUNEOzs7Ozs7UUFSSSxLQUFLOzs7QUFVWCxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUMiLCJmaWxlIjoiZGVidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEZWJ1ZyB7XG5cdHNob3dQb3NpdGlvbigpe1xuXHRcdHZhciBzbWlsaWVzID0gcm9vdC5nZXRDb21wb25lbnRzQnlOYW1lKCdzbWlsZXknKTtcblx0XHR2YXIgaTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgc21pbGllcy5sZW5ndGg7IGkrKyl7XG5cdFx0XHR2YXIgc21pbGV5ID0gc21pbGllc1tpXTtcblx0XHRcdHNtaWxleS5hZGRDb21wb25lbnQobmV3IERlYnVnQ29tcG9uZW50KCkpO1xuXHRcdH1cblx0fVxufVxud2luZG93LmRlYnVnID0gbmV3IERlYnVnKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9