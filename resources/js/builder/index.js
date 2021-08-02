
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";
import {RoomEnvironment} from "three/examples/jsm/environments/RoomEnvironment";

let container = $('#truck-builder');

let camera, scene, renderer, controls, grid;

let mouseX = 0, mouseY = 0;

let windowHalfX = container.width() / 2;
let windowHalfY = container.height() / 2;

let object;



function init() {
    container = $('#truck-builder');
    console.log(container)

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    container.append( renderer.domElement );

    camera = new THREE.PerspectiveCamera( 30, container.width() / container.height(), 5, 20 );
    camera.position.z = 10;
    camera.position.y = 1;
    camera.position.x = 10;

    // scene

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xeeeeee );

    const pmremGenerator = new THREE.PMREMGenerator( renderer );
    scene.environment = pmremGenerator.fromScene( new RoomEnvironment() ).texture;

    grid = new THREE.GridHelper( 1000, 400, 0x000000, 0x000000 );
    grid.material.opacity = 0.1;
    grid.material.depthWrite = false;
    grid.material.transparent = true;
    scene.add( grid );
    const ambientLight = new THREE.AmbientLight( 0xcccccc, 1.99999 );
    scene.add( ambientLight );


/*    const pointLight = new THREE.PointLight( 0xffffff, 0.2 );
    camera.add( pointLight );
    scene.add( camera );*/

    // manager

    function loadModel() {

        object.traverse( function ( child ) {

          //  if ( child.isMesh ) child.material.map = texture;

        } );

        object.position.y = - 0;
        scene.add( object );

    }

    const manager = new THREE.LoadingManager( loadModel );

    manager.onProgress = function ( item, loaded, total ) {

        console.log( item, loaded, total );

    };

    // model

    function onProgress( xhr ) {

        if ( xhr.lengthComputable ) {

            const percentComplete = xhr.loaded / xhr.total * 100;
            console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' );

        }

    }

    function onError() {}


   new MTLLoader()
        .load( 'models/TestTruck/TestTruck.mtl', function(materials) {
        materials.preload();
        new OBJLoader( manager )
            .setMaterials(materials)
            .load( 'models/TestTruck/TestTruck.obj', function ( obj ) {
                object = obj;
            }, onProgress, onError );
    });


    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( container.width(), container.height() );
    controls = new OrbitControls(camera, renderer.domElement)

/*
    document.addEventListener( 'mousemove', onDocumentMouseMove );
*/

    //

/*
    window.addEventListener( 'resize', onWindowResize );
*/

}

function onWindowResize() {

    camera.aspect = container.width() / container.height();
    camera.updateProjectionMatrix();

    renderer.setSize( container.width(), container.height() );

}

function onDocumentMouseMove( event ) {

    mouseX = ( event.clientX - windowHalfX ) / 2;
    mouseY = ( event.clientY - windowHalfY ) / 2;

}

//

function animate() {
    requestAnimationFrame( animate );
    render();
}

function render() {
    camera.lookAt( scene.position );
    controls.update();
    renderer.render( scene, camera );
}

export default {
    init,
    animate
}
