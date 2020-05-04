class MapViewModel {
    constructor(map_){
    	this.map = map_;
    }

    drawMatrix = () =>{
        this.drawMap(this.map.floor, 0, this.floorContent);
        this.drawMap(this.map.things, 1, this.objectContent);
    }

    drawMap = (mapArray, y, content) => {
        for (var i = 0; i < mapArray.length; i++) {
            var innerArrayLength = mapArray[i].length;
            for (var j = 0; j < innerArrayLength; j++) {
                content(i , j, y, mapArray);
            }
        }
    }

    floorContent = (i, j, y, mapArray) => {
        if(mapArray[i][j] != " "){
            scene.add(this.createBasicObject(1, '0x494949', true, i, y, j).getMesh());
        }
    }

    objectContent = (i, j, y, mapArray) => {

        if(mapArray[i][j] == "item"){
            scene.add(this.createBasicObject(0.3, '0x0D6CA0', false, i, y, j).getMesh());
        }

        if(mapArray[i][j] == "enemy"){
            scene.add(this.createBasicObject(1, '0x5A1A01', false, i, y, j).getMesh());
        }
    }

    createBasicObject = (size, color, floor, x, y, z) => {
    		return new SimpleObjectViewModel(new SimpleObject(size, color), floor, x, y, z);
    }
}
