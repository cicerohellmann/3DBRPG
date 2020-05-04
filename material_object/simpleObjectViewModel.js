class SimpleObjectViewModel{
	constructor(simpleObject, floor_, x, y, z){
                this.simpleObject = simpleObject;
                var floor = floor_;
                var color = parseInt(this.simpleObject.color);
                var size = this.simpleObject.size;

                var geometry = new THREE.BoxGeometry( size, size, size);
                var edges = new THREE.EdgesGeometry(geometry);
                var material = new THREE.LineBasicMaterial({color: color});
                this.simpleObject.mesh = new THREE.LineSegments(edges, material);
                if(floor == true){
                	material = new THREE.MeshBasicMaterial({color: color, wireframe: false});
                        this.simpleObject.mesh = new THREE.Mesh( geometry, material )
                }
                this.simpleObject.mesh.position.x = x;
                this.simpleObject.mesh.position.y = y;
                this.simpleObject.mesh.position.z = z;
                
	}

        getMesh(){
              return this.simpleObject.mesh;  
        }
}