"use strict";

entityBuilder.addRecipe({
	name: "attractor",

	components: [{
		type: "AttractorComponent",
		args: {
			pos: {
				x: 750,
				y: 400
			},
			strength: 0.75,
			order: 1.2,
			min: 200
		}
	}, {
		type: "SpriteComponent",
		args: "circle"
	}]
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0aWVzL2F0dHJhY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGFBQWEsQ0FBQyxTQUFTLENBQUM7QUFDdkIsS0FBSSxFQUFFLFdBQVc7O0FBRWpCLFdBQVUsRUFBRSxDQUFDO0FBQ1osTUFBSSxFQUFFLG9CQUFvQjtBQUMxQixNQUFJLEVBQUU7QUFDTCxNQUFHLEVBQUU7QUFDSixLQUFDLEVBQUUsR0FBRztBQUNOLEtBQUMsRUFBRSxHQUFHO0lBQ047QUFDRCxXQUFRLEVBQUUsSUFBSTtBQUNkLFFBQUssRUFBRSxHQUFHO0FBQ1YsTUFBRyxFQUFFLEdBQUc7R0FDUjtFQUNELEVBQUU7QUFDRixNQUFJLEVBQUUsaUJBQWlCO0FBQ3ZCLE1BQUksRUFBRSxRQUFRO0VBQ2QsQ0FBQztDQUNGLENBQUMsQ0FBQyIsImZpbGUiOiJlbnRpdGllcy9hdHRyYWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJlbnRpdHlCdWlsZGVyLmFkZFJlY2lwZSh7XG5cdG5hbWU6ICdhdHRyYWN0b3InLFxuXG5cdGNvbXBvbmVudHM6IFt7XG5cdFx0dHlwZTogJ0F0dHJhY3RvckNvbXBvbmVudCcsXG5cdFx0YXJnczoge1xuXHRcdFx0cG9zOiB7XG5cdFx0XHRcdHg6IDc1MCxcblx0XHRcdFx0eTogNDAwXG5cdFx0XHR9LFxuXHRcdFx0c3RyZW5ndGg6IDAuNzUsXG5cdFx0XHRvcmRlcjogMS4yLFxuXHRcdFx0bWluOiAyMDBcblx0XHR9XG5cdH0sIHtcblx0XHR0eXBlOiAnU3ByaXRlQ29tcG9uZW50Jyxcblx0XHRhcmdzOiAnY2lyY2xlJ1xuXHR9XVxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9