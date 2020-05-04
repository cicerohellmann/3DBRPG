class BoardView extends BaseScene{
    constructor(){
    	super();
       
        var map = new MapViewModel(new Map("x",
            " ",
            "/",
            "\\",
            "|",
            "_",
            "_",
            "z",
            "item",
            "enemy"));

        map.drawMatrix();
    }
}
