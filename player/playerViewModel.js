class PlayerViewModel {
    constructor(){
    	var Player = new Player();
    	
    }


    //Temporary player representation
    createPlayerMesh(){
    	var geometry = new THREE.BoxGeometry( 1, 1, 0.4 );
        var edges = new THREE.EdgesGeometry(geometry);
        var headG = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
        var headE = new THREE.EdgesGeometry(headG);
        var head = new THREE.LineSegments(headE,new THREE.LineBasicMaterial({color:0x00FF7F}));
        head.position.y = 0.2;
        head.position.z = -0.3;

        this.pointer = new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:0x00FF7F}));
        this.pointer.position.x = this.posX;
        this.pointer.position.y = 1;
        this.pointer.position.z = this.posZ;
        this.pointer.add(head);
        this.pointer.add(camera);
        this.pointer.updateMatrix();
    }
}
