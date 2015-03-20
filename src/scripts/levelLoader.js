window.loadLevel = function(levelName, callback) {
	$.getJSON(`maps/${levelName}.json`, function(levelData) {
		loadTextures(levelData, callback);
	}).fail(function() {
		console.error(`failed to retrieve data for level '${levelName}'`);
	});
};

function loadTextures(level, cb) {
	level.tilesets = _.map(level.tilesets, genTileset);
	var imageAssets = getAssetsFromLevel(level);
	textureFactory.load(imageAssets, function() {
		var entities = genLayers(level);
		cb(entities);
	});
}

function genLayers(levelData) {
	return _.reduce(levelData.layers, (accum, layer) => accum.concat(genLayer(layer, levelData)), []);
}

function genLayer(layer, levelData) {
	var entities = [];
	var tiles = getTiles(levelData);
	if (!_.isUndefined(layer.data)) {
		for (var j = 0; j < layer.height; j++) {
			for (var i = 0; i < layer.width; i++) {
				var tileNum = (i + j * layer.width);
				var tileId = layer.data[tileNum];
				if (tileId !== 0) {
					var tileData = tiles[tileId];
					entities.push(genTile(tileData, levelData, i, j));
				}
			}
		}
	}
	return entities;
}

function genTile(tile, levelData, i, j) {
	var baseEntity = new BaseEntity(_.extend({
		position: {
			x: levelData.tilewidth * i + 200,
			y: levelData.tileheight * j + 200
		}
	}, tile.properties));
	var sprite = new SpriteComponent(undefined, tile.gid);
	if (tile.properties.collide) {
		baseEntity.addComponent(new SpritePhysicsComponent());
	}
	baseEntity.addComponent(sprite);
	return baseEntity;
}

function getTiles(level) {
	return _(level.tilesets).map(function(tileset) {
		return tileset.tiles;
	}).reduce(_.extend, {});
}

function convertToBools(properties) {
	return _.mapValues(properties, function(value) {
		return value === 'true' ? true : (value === 'false' ? false : value);
	});
}

function getTileProperties(tileset, tileId) {
	let properties;
	if (_.isUndefined(tileset.tileproperties) ||
		_.isUndefined(tileset.tileproperties[tileId])) {
		properties = {};
	} else {
		properties = tileset.tileproperties[tileId];
	}

	return convertToBools(properties);
}

function genTileset(tileset) {
	tileset = _.extend({}, tileset);
	tileset.image = tileset.image.replace('../', '');

	tileset.numTilesWidth = Math.floor(tileset.imageheight / tileset.tileheight);
	tileset.numTilesHeight = Math.floor(tileset.imagewidth / tileset.tilewidth);
	tileset.tilecount = tileset.numTilesWidth * tileset.numTilesHeight;
	tileset.lastgid = tileset.firstgid + tileset.tilecount;

	tileset.tiles = _(_.range(tileset.firstgid, tileset.lastgid))
		.map(function(tileId) {
			return {
				gid: tileId,
				properties: getTileProperties(tileset, tileId - tileset.firstgid),
				x: (tileId - tileset.firstgid) % tileset.numTilesWidth,
				y: Math.floor((tileId - tileset.firstgid) / tileset.numTilesHeight)
			};
		})
		.reduce(function(accum, tile) {
			accum[tile.gid] = tile;
			return accum;
		}, {});
	return tileset;
}

function getAssetsFromLevel(level) {
	return _.map(level.tilesets, function(tileset) {
		return _.extend({
			path: tileset.image,
			id: tileset.name,
			tileDimensions: {
				x: tileset.numTilesWidth,
				y: tileset.numTilesHeight,
				width: tileset.tilewidth,
				height: tileset.tileheight,
				baseId: tileset.firstgid
			}
		}, tileset);
	});
}