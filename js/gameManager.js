// /**
//  * @description runs befor the start of the game
//  */
// class GameManager {
//     constructor() {
//         this.deltaTime = 0;
//         this.then = 0;
//         this.frameCount = 0;

//         this.activeScene;
//     }

//     /**
//      * @description Master Function for **running** the game   
//      * requestAnimationFrame(gameLoop);  
//      * update();  
//      * render();  
//      */
//     runScene(newScene) {
//         this.activeScene = newScene;
//     }
//     ////    ////    ////
//     ///    ////    ////
//     //    ////    ////


//     /**
//      * @description Master Function for **running** the game   
//      * requestAnimationFrame(gameLoop);  
//      * update();  
//      * render();  
//      */
//     gameLoop(now) {
//         console.log("now  = " + now);
//         // console.log("this.then  = " + this.then);

//         // setTimeout(function () {

//         //     requestAnimationFrame(this.gameLoop);

//         // }, 1000 / 30);

//         now *= 0.001; // make it seconds

//         // this.deltaTime = now - this.then;
//         // this.then = now;

//         // requestAnimationFrame(this.gameLoop);
//         // this.frameCount++;

//         // if (this.frameCount > 10) {
//         this.update();
//         this.render();
//         // }

//     }
//     ////    ////    ////
//     ///    ////    ////
//     //    ////    ////


//     /**
//      * update
//      */
//     update() {
//         requestAnimationFrame(this.gameLoop);

//         console.log(this.activeScene);

//         if (this.activeScene == "Loading") {
//             loadingSetup();
//             loadingScene();
//         }

//         if (this.activeScene == "Menu") {
//             menuSetup();
//             menuScene();
//         }

//         if (this.activeScene == "Game") {
//             gameSetup();
//             gameScene();
//         }

//     }
//     ////    ////    ////
//     ///    ////    ////
//     //    ////    ////


//     /**
//      * render
//      */
//     render() {
//         renderer.render(scene, camera);
//     }
//     ////    ////    ////
//     ///    ////    ////
//     //    ////    ////
// }
// ////    ////    ////
// ///    ////    ////
// //    ////    ////

gameSetup();
gameLoop();