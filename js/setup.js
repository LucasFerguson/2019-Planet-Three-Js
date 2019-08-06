//          ////////////////////////////
//         //// SPACE SHOOTER GAME ////
//        ////    Created By      ////
//       ////   Lucas Ferguson   ////
//      ////////////////////////////


/**
 * @description Master Function for **START**ing the game   
 * console.log("Game Started");  
 * setup();  
 * gameLoop();  
 */
function runMainGameManager() {
    console.log("Game Started");
    // gameManager.gameLoop(10);

}
////    ////    //////    ////    ////
///    ////    //////    ////    ////
//    ////    //////    ////    ////

THREE.DefaultLoadingManager.onStart = function (url, itemsLoaded, itemsTotal) {

    console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');

    // gameManager.runScene("Loading");

};

THREE.DefaultLoadingManager.onLoad = function () {

    console.log('Loading Complete!');

    try {
        // runMainGameManager();
    } catch (error) {
        console.error("? ? " + error);
    }

};

THREE.DefaultLoadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {

    console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.');


};

THREE.DefaultLoadingManager.onError = function (url) {

    console.log('There was an error loading ' + url);

};
////    ////    ////
///    ////    ////
//    ////    ////


/**
 * Create a WebGLRenderer with shadows in the renderer
 */
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
////    ////    ////
///    ////    ////
//    ////    ////


/**
 * This is the scene
 */
const scene = new THREE.Scene();
////    ////    ////
///    ////    ////
//    ////    ////


/**
 * This is the camera
 */
const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10000
);
camera.position.z = 1000;

// const camera = new THREE.OrthographicCamera(
//     1000,
//     1000,
//     1000,
//     1000,
//     0.01,
//     10000
// );
// camera.position.z = 100;

////    ////    ////
///    ////    ////
//    ////    ////


/**
 * textureLoader
 */
var textureLoader = new THREE.TextureLoader();


var images = {
    pointer: textureLoader.load("./assets/images/pointer.png")
};
// console.log(images);
// C:\Users\Lucas\Documents\GitHub\Space-Shooter-Three-Js-Node\public\assets\images\skybox\purplenebula_bk.png
////    ////    ////
///    ////    ////
//    ////    ////

/**
 * FontLoader
 */
var fontLoader = new THREE.FontLoader();

var font_helvetiker;
var font = fontLoader.load(
    // resource URL
    './assets/fonts/helvetiker_regular.typeface.json',

    // onLoad callback
    function (font) {
        // do something with the font
        // scene.add(font);
        font_helvetiker = font;
        // console.log(font);
    },

    // onProgress callback
    function (xhr) {
        // console.log('fontLoader ' + (xhr.loaded / xhr.total * 100) + '% loaded');
    },

    // onError callback
    function (err) {
        // console.log('An error happened');
    }
);

// console.log(font_helvetiker);
////    ////    ////
///    ////    ////
//    ////    ////




let deltaTime;
let then = 0;
let frameCount = 0;
/**
 * @description Master Function for **running** the game   
 * requestAnimationFrame(gameLoop);  
 * update();  
 * render();  
 */
function gameLoop(now) {

    // setTimeout(function () {

    //     requestAnimationFrame(gameLoop);

    // }, 1000 / 30);

    now *= 0.001; // make it seconds

    deltaTime = now - then;
    then = now;

    requestAnimationFrame(gameLoop);
    frameCount++;

    if (frameCount > 10) {
        update();
        render();
    }

}
////    ////    ////
///    ////    ////
//    ////    ////


/**
 * update
 */
function update() {
    if (true) {
        gameScene();
    }
}
////    ////    ////
///    ////    ////
//    ////    ////


/**
 * render
 */
function render() {
    renderer.render(scene, camera);
}
////    ////    ////
///    ////    ////
//    ////    ////




// onWindowResize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    renderer.setSize(windowWidth, windowHeight);
    camera.aspect = windowWidth / windowHeight;
    camera.updateProjectionMatrix();
}