class BoardView extends BaseScene{
    constructor(){
    	super();
        var geometry = new THREE.BoxGeometry( 1, 1, 0.4 );
        var edges = new THREE.EdgesGeometry(geometry);

        this.pointer = new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:0x00FF7F}));
        this.pointer.position.x = 0;
        this.pointer.position.y = 1;
        this.pointer.position.z = 0;
        this.pointer.add(camera);

        this.pointer.updateMatrix();
        scene.add( this.pointer ); 
    }
}
