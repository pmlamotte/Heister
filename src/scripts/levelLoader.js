window.loadLevel = function(levelName, callback) {
	$.getJSON(`maps/${levelName}.json`, function(levelData) {
		loadTextures(levelData, callback);
	}).fail(function() {
		console.error(`failed to retrieve data for level '${levelName}'`);
	});
};

function loadTextures(level, cb) {
	var imageAssets = getAssetsFromLevel(level);

	textureFactory.load(imageAssets, function() {
		cb();
	});
}

function getAssetsFromLevel(level) {
	return _.map(level.tilesets, function(tileset) {
		return {
			path: tileset.image.replace('../', ''),
			id: tileset.name,
			tileDimensions: {
				x: Math.floor(tileset.imagewidth / tileset.tilewidth),
				y: Math.floor(tileset.imageheight / tileset.tileheight),
				width: tileset.tilewidth,
				height: tileset.tileheight,
				baseId: tileset.firstgid
			}
		};
	});
}