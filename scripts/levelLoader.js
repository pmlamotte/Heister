"use strict";

window.loadLevel = function (levelName, callback) {
    $.getJSON("maps/" + levelName + ".json", function (levelData) {
        loadTextures(levelData, callback);
    }).fail(function () {
        console.error("failed to retrieve data for level '" + levelName + "'");
    });
};

function loadTextures(level, cb) {
    level.tilesets = _.map(level.tilesets, genTileset);
    var imageAssets = getAssetsFromLevel(level);
    textureFactory.load(imageAssets, function () {
        var entities = genLayers(level);
        cb(entities);
    });
}

function genLayers(levelData) {
    return _.reduce(levelData.layers, function (accum, layer) {
        return accum.concat(genLayer(layer, levelData));
    }, []);
}

function genLayer(layer, levelData) {
    var entities = [];
    var tiles = getTiles(levelData);
    if (!_.isUndefined(layer.data)) {
        for (var j = 0; j < layer.height; j++) {
            for (var i = 0; i < layer.width; i++) {
                var tileNum = i + j * layer.width;
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
    return _(level.tilesets).map(function (tileset) {
        return tileset.tiles;
    }).reduce(_.extend, {});
}

function convertToBools(properties) {
    return _.mapValues(properties, function (value) {
        return value === "true" ? true : value === "false" ? false : value;
    });
}

function getTileProperties(tileset, tileId) {
    var properties = undefined;
    if (_.isUndefined(tileset.tileproperties) || _.isUndefined(tileset.tileproperties[tileId])) {
        properties = {};
    } else {
        properties = tileset.tileproperties[tileId];
    }

    return convertToBools(properties);
}

function genTileset(tileset) {
    tileset = _.extend({}, tileset);
    tileset.image = tileset.image.replace("../", "");

    tileset.numTilesWidth = Math.floor(tileset.imageheight / tileset.tileheight);
    tileset.numTilesHeight = Math.floor(tileset.imagewidth / tileset.tilewidth);
    tileset.tilecount = tileset.numTilesWidth * tileset.numTilesHeight;
    tileset.lastgid = tileset.firstgid + tileset.tilecount;

    tileset.tiles = _(_.range(tileset.firstgid, tileset.lastgid)).map(function (tileId) {
        return {
            gid: tileId,
            properties: getTileProperties(tileset, tileId - tileset.firstgid),
            x: (tileId - tileset.firstgid) % tileset.numTilesWidth,
            y: Math.floor((tileId - tileset.firstgid) / tileset.numTilesHeight)
        };
    }).reduce(function (accum, tile) {
        accum[tile.gid] = tile;
        return accum;
    }, {});
    return tileset;
}

function getAssetsFromLevel(level) {
    return _.map(level.tilesets, function (tileset) {
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
//# sourceMappingURL=data:application/json;base64,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QUMsY0FBYyxDQUFDO1NBQ3RFLENBQUM7S0FDTCxDQUFDLENBQ0QsTUFBTSxDQUFDLFVBQVMsS0FBSyxFQUFFLElBQUksRUFBRTtBQUMxQixhQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUN2QixlQUFPLEtBQUssQ0FBQztLQUNoQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1gsV0FBTyxPQUFPLENBQUM7Q0FDbEI7O0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUU7QUFDL0IsV0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBUyxPQUFPLEVBQUU7QUFDM0MsZUFBTyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ1osZ0JBQUksRUFBRSxPQUFPLENBQUMsS0FBSztBQUNuQixjQUFFLEVBQUUsT0FBTyxDQUFDLElBQUk7QUFDaEIsMEJBQWMsRUFBRTtBQUNaLGlCQUFDLEVBQUUsT0FBTyxDQUFDLGFBQWE7QUFDeEIsaUJBQUMsRUFBRSxPQUFPLENBQUMsY0FBYztBQUN6QixxQkFBSyxFQUFFLE9BQU8sQ0FBQyxTQUFTO0FBQ3hCLHNCQUFNLEVBQUUsT0FBTyxDQUFDLFVBQVU7QUFDMUIsc0JBQU0sRUFBRSxPQUFPLENBQUMsUUFBUTthQUMzQjtTQUNKLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDZixDQUFDLENBQUM7Q0FDTiIsImZpbGUiOiJsZXZlbExvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5sb2FkTGV2ZWwgPSBmdW5jdGlvbihsZXZlbE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgJC5nZXRKU09OKGBtYXBzLyR7bGV2ZWxOYW1lfS5qc29uYCwgZnVuY3Rpb24obGV2ZWxEYXRhKSB7XG4gICAgICAgIGxvYWRUZXh0dXJlcyhsZXZlbERhdGEsIGNhbGxiYWNrKTtcbiAgICB9KS5mYWlsKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBmYWlsZWQgdG8gcmV0cmlldmUgZGF0YSBmb3IgbGV2ZWwgJyR7bGV2ZWxOYW1lfSdgKTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIGxvYWRUZXh0dXJlcyhsZXZlbCwgY2IpIHtcbiAgICBsZXZlbC50aWxlc2V0cyA9IF8ubWFwKGxldmVsLnRpbGVzZXRzLCBnZW5UaWxlc2V0KTtcbiAgICB2YXIgaW1hZ2VBc3NldHMgPSBnZXRBc3NldHNGcm9tTGV2ZWwobGV2ZWwpO1xuICAgIHRleHR1cmVGYWN0b3J5LmxvYWQoaW1hZ2VBc3NldHMsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZW50aXRpZXMgPSBnZW5MYXllcnMobGV2ZWwpO1xuICAgICAgICBjYihlbnRpdGllcyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbkxheWVycyhsZXZlbERhdGEpIHtcbiAgICByZXR1cm4gXy5yZWR1Y2UobGV2ZWxEYXRhLmxheWVycywgKGFjY3VtLCBsYXllcikgPT4gYWNjdW0uY29uY2F0KGdlbkxheWVyKGxheWVyLCBsZXZlbERhdGEpKSwgW10pO1xufVxuXG5mdW5jdGlvbiBnZW5MYXllcihsYXllciwgbGV2ZWxEYXRhKSB7XG4gICAgdmFyIGVudGl0aWVzID0gW107XG4gICAgdmFyIHRpbGVzID0gZ2V0VGlsZXMobGV2ZWxEYXRhKTtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQobGF5ZXIuZGF0YSkpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBsYXllci5oZWlnaHQ7IGorKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXllci53aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRpbGVOdW0gPSAoaSArIGogKiBsYXllci53aWR0aCk7XG4gICAgICAgICAgICAgICAgdmFyIHRpbGVJZCA9IGxheWVyLmRhdGFbdGlsZU51bV07XG4gICAgICAgICAgICAgICAgaWYgKHRpbGVJZCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGlsZURhdGEgPSB0aWxlc1t0aWxlSWRdO1xuICAgICAgICAgICAgICAgICAgICBlbnRpdGllcy5wdXNoKGdlblRpbGUodGlsZURhdGEsIGxldmVsRGF0YSwgaSwgaikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW50aXRpZXM7XG59XG5mdW5jdGlvbiBnZW5UaWxlKHRpbGUsIGxldmVsRGF0YSwgaSwgaikge1xuICAgIHZhciBiYXNlRW50aXR5ID0gbmV3IEJhc2VFbnRpdHkoXy5leHRlbmQoe1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgeDogbGV2ZWxEYXRhLnRpbGV3aWR0aCAqIGkgKyAyMDAsXG4gICAgICAgICAgICB5OiBsZXZlbERhdGEudGlsZWhlaWdodCAqIGogKyAyMDBcbiAgICAgICAgfVxuICAgIH0sIHRpbGUucHJvcGVydGllcykpO1xuICAgIHZhciBzcHJpdGUgPSBuZXcgU3ByaXRlQ29tcG9uZW50KHVuZGVmaW5lZCwgdGlsZS5naWQpO1xuICAgIGlmICh0aWxlLnByb3BlcnRpZXMuY29sbGlkZSkge1xuICAgICAgICBiYXNlRW50aXR5LmFkZENvbXBvbmVudChuZXcgU3ByaXRlUGh5c2ljc0NvbXBvbmVudCgpKTtcbiAgICB9XG4gICAgYmFzZUVudGl0eS5hZGRDb21wb25lbnQoc3ByaXRlKTtcbiAgICByZXR1cm4gYmFzZUVudGl0eTtcbn1cblxuZnVuY3Rpb24gZ2V0VGlsZXMobGV2ZWwpIHtcbiAgICByZXR1cm4gXyhsZXZlbC50aWxlc2V0cykubWFwKGZ1bmN0aW9uKHRpbGVzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aWxlc2V0LnRpbGVzO1xuICAgICAgICB9KS5yZWR1Y2UoXy5leHRlbmQsIHt9KTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvQm9vbHMocHJvcGVydGllcykge1xuICAgIHJldHVybiBfLm1hcFZhbHVlcyhwcm9wZXJ0aWVzLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09ICd0cnVlJyA/IHRydWUgOiAodmFsdWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHZhbHVlKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0VGlsZVByb3BlcnRpZXModGlsZXNldCwgdGlsZUlkKSB7XG5cdGxldCBwcm9wZXJ0aWVzO1xuICAgIGlmIChfLmlzVW5kZWZpbmVkKHRpbGVzZXQudGlsZXByb3BlcnRpZXMpIHx8XG4gICAgICAgIF8uaXNVbmRlZmluZWQodGlsZXNldC50aWxlcHJvcGVydGllc1t0aWxlSWRdKSkge1xuICAgICAgICBwcm9wZXJ0aWVzID0ge307XG4gICAgfSBlbHNlIHtcbiAgICBcdHByb3BlcnRpZXMgPSB0aWxlc2V0LnRpbGVwcm9wZXJ0aWVzW3RpbGVJZF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnZlcnRUb0Jvb2xzKHByb3BlcnRpZXMpO1xufVxuXG5mdW5jdGlvbiBnZW5UaWxlc2V0KHRpbGVzZXQpIHtcbiAgICB0aWxlc2V0ID0gXy5leHRlbmQoe30sIHRpbGVzZXQpO1xuICAgIHRpbGVzZXQuaW1hZ2UgPSB0aWxlc2V0LmltYWdlLnJlcGxhY2UoJy4uLycsICcnKTtcblxuICAgIHRpbGVzZXQubnVtVGlsZXNXaWR0aCA9IE1hdGguZmxvb3IodGlsZXNldC5pbWFnZWhlaWdodCAvIHRpbGVzZXQudGlsZWhlaWdodCk7XG4gICAgdGlsZXNldC5udW1UaWxlc0hlaWdodCA9IE1hdGguZmxvb3IodGlsZXNldC5pbWFnZXdpZHRoIC8gdGlsZXNldC50aWxld2lkdGgpO1xuICAgIHRpbGVzZXQudGlsZWNvdW50ID0gdGlsZXNldC5udW1UaWxlc1dpZHRoICogdGlsZXNldC5udW1UaWxlc0hlaWdodDtcbiAgICB0aWxlc2V0Lmxhc3RnaWQgPSB0aWxlc2V0LmZpcnN0Z2lkICsgdGlsZXNldC50aWxlY291bnQ7XG5cbiAgICB0aWxlc2V0LnRpbGVzID0gXyhfLnJhbmdlKHRpbGVzZXQuZmlyc3RnaWQsIHRpbGVzZXQubGFzdGdpZCkpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24odGlsZUlkKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdpZDogdGlsZUlkLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IGdldFRpbGVQcm9wZXJ0aWVzKHRpbGVzZXQsIHRpbGVJZCAtIHRpbGVzZXQuZmlyc3RnaWQpLFxuICAgICAgICAgICAgICAgIHg6ICh0aWxlSWQgLSB0aWxlc2V0LmZpcnN0Z2lkKSAlIHRpbGVzZXQubnVtVGlsZXNXaWR0aCxcbiAgICAgICAgICAgICAgICB5OiBNYXRoLmZsb29yKCh0aWxlSWQgLSB0aWxlc2V0LmZpcnN0Z2lkKSAvIHRpbGVzZXQubnVtVGlsZXNIZWlnaHQpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGFjY3VtLCB0aWxlKSB7XG4gICAgICAgICAgICBhY2N1bVt0aWxlLmdpZF0gPSB0aWxlO1xuICAgICAgICAgICAgcmV0dXJuIGFjY3VtO1xuICAgICAgICB9LCB7fSk7XG4gICAgcmV0dXJuIHRpbGVzZXQ7XG59XG5cbmZ1bmN0aW9uIGdldEFzc2V0c0Zyb21MZXZlbChsZXZlbCkge1xuICAgIHJldHVybiBfLm1hcChsZXZlbC50aWxlc2V0cywgZnVuY3Rpb24odGlsZXNldCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoe1xuICAgICAgICAgICAgcGF0aDogdGlsZXNldC5pbWFnZSxcbiAgICAgICAgICAgIGlkOiB0aWxlc2V0Lm5hbWUsXG4gICAgICAgICAgICB0aWxlRGltZW5zaW9uczoge1xuICAgICAgICAgICAgICAgIHg6IHRpbGVzZXQubnVtVGlsZXNXaWR0aCxcbiAgICAgICAgICAgICAgICB5OiB0aWxlc2V0Lm51bVRpbGVzSGVpZ2h0LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aWxlc2V0LnRpbGV3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRpbGVzZXQudGlsZWhlaWdodCxcbiAgICAgICAgICAgICAgICBiYXNlSWQ6IHRpbGVzZXQuZmlyc3RnaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGlsZXNldCk7XG4gICAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9