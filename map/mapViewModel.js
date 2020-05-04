class MapViewModel {
    constructor(map_){
    	this.map = map_;

    	// This should be loaded later
    	this.floor = this.map.floor;
    	this.things = this.map.things;
    }

    drawMatrix = () =>{
        this.drawMap(this.floor, 0, this.floorContent);
        this.drawMap(this.things, 1, this.objectContent);
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
