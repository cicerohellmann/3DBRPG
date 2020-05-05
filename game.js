var delta = new THREE.Clock();
var scene = new THREE.Scene();
var sceneOverlay = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );


var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false } );
renderer.setClearColor(0x000000, 0);
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

var baseScene = new BoardView();

var init = function(){
    window.addEventListener('resize',function()
    {
        var width = window.innerWidth;
        var height = window.innerHeight;
        renderer.setSize(width,height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.gammaFactor = 2.2;
    document.body.appendChild( renderer.domElement );

    camera.updateMatrixWorld();
    camera.position.set( 20, 20, 10 );
    camera.lookAt( 0, 0, 0 );
};

var update = function(delta){
    if(baseScene){
        baseScene.update(delta);
    }
}

var render = function(){
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render( scene, camera );
    if(baseScene){
        baseScene.render();
    }
}

var GameLoop = function(){
    update(delta.getDelta());
    render();
    requestAnimationFrame( GameLoop );

};

init();
GameLoop();