// class Game {
// 	constructor(){
// 		this.delta = new THREE.Clock();
// 		this.scene = new THREE.Scene();
// 		this.sceneOverlay = new THREE.Scene();
// 		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
// 		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false } );
// 		this.renderer.setClearColor(0x000000, 0);
// 		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// 		window.addEventListener('resize',function() {
// 	        this.width = window.innerWidth;
// 	        this.height = window.innerHeight;
// 	        this.renderer.setSize(width,height);
// 	        this.camera.aspect = width / height;
// 	        this.camera.updateProjectionMatrix();
// 	    });
// 	    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// 	    this.renderer.outputEncoding = THREE.sRGBEncoding;
// 	    this.renderer.gammaFactor = 2.2;
// 	    document.body.appendChild( this.renderer.domElement );

// 	    this.camera.updateMatrixWorld();
// 	    this.camera.position.set( 0, 0, 10 );
// 	    this.camera.lookAt( 0, 0, 0 );

// 	    this.baseScene = new BoardView();


// 	    // this.gameLoop();
//     }

// 	update(delta){
// 	    if(this.baseScene){
// 	        this.baseScene.update(delta);
// 	    }
// 	}

// 	render(){
// 	    this.renderer.setSize( window.innerWidth, window.innerHeight );
// 	    this.renderer.render( this.scene, this.camera );
// 	    if(this.baseScene){
// 	        this.baseScene.render();
// 	    }
// 	}

// 	gameLoop(){
// 		requestAnimationFrame( this.gameLoop() );
	    
// 	    this.update(this.delta);
// 	    this.render();
// 	};

// 	getCamera(){
// 		return this.camera;
// 	}
// }

// var game = new Game();