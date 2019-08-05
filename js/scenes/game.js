let cube;
let backgroundPlane;
let ambientLight;
let sun;



/**
 * Game controller for all user input
 */
let controller = new Controller();
controller.setup();
////    ////    ////
///    ////    ////
//    ////    ////

let world = {
    width: 2000,
    height: 2000,
    depth: 2000
}


/**
 * @description Master Function **setup**  
 */
function gameSetup() {


    /**
     * backgroundPlane for mouse raycaster to hit
     */
    cube = new THREE.Mesh(
        new THREE.BoxGeometry(20, 20, 20),
        new THREE.MeshNormalMaterial()
    );
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.position.set(10, 10, 0);
    scene.add(cube);
    ////    ////    ////
    ///    ////    ////
    //    ////    ////

    /**
     * backgroundPlane for mouse raycaster to hit
     */
    backgroundPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(world.width, world.height, 10, 1),
        new THREE.MeshPhongMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.1
        })
    );
    backgroundPlane.name = "backgroundPlane";
    backgroundPlane.receiveShadow = true;
    scene.add(backgroundPlane);
    // backgroundPlane.material.visible = false;
    ////    ////    ////
    ///    ////    ////
    //    ////    ////

    /**
     * ambientLight Disabled **Disabled**
     */
    ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    ambientLight.name = "ambientLight";
    // scene.add(ambientLight); // **Disabled**
    ////    ////    ////
    ///    ////    ////
    //    ////    ////


    /**
     * light
     */
    sun = new THREE.PointLight(0xffffff, 200, world.width, 1);
    sun.position.set(0, 0, 10);
    sun.castShadow = true;

    //Set up shadow properties for the light
    sun.shadow.mapSize.width = 512 * 6; // default
    sun.shadow.mapSize.height = 512 * 6; // default
    sun.shadow.camera.near = 0.5; // default
    sun.shadow.camera.far = world.width / 2 // default

    scene.add(sun);
    scene.add(new THREE.PointLightHelper(sun, 10));
    ////    ////    ////
    ///    ////    ////
    //    ////    ////
}
////    ////    ////
///    ////    ////
//    ////    ////


// frameCount
/**
 * @description Master Function **gameScene**  
 */
function gameScene() {
    // console.log("gameScene \n  frameCount :" + frameCount);

    controller.update();

    var left = -1;
    var up = 1;
    var right = 1;
    var down = -1;

    var speed = camera.position.z / 40;

    if (controller.leftarrow) {
        camera.position.x += left * speed;
    }
    if (controller.uparrow) {
        camera.position.y += up * speed;
    }
    if (controller.rightarrow) {
        camera.position.x += right * speed;
    }
    if (controller.downarrow) {
        camera.position.y += down * speed;
    }

    // shift 16
    // ctrl 17

    var shift = -1;
    var ctrl = 1;

    if (controller.keyCodes[16] || controller.keyCodes[69]) {
        camera.position.z += shift * speed;
    }
    if (controller.keyCodes[17] || controller.keyCodes[81]) {
        camera.position.z += ctrl * speed;
    }

    if (controller.keyCodes[17] || controller.keyCodes[81]) {
        camera.position.z += ctrl * speed;
    }


    cube.position.set(controller.mouse.x, controller.mouse.y, 10);


}
////    ////    ////
///    ////    ////
//    ////    ////