import {basicBackground,updateCurrency,mapReview,reviewRedraw,drawMapTier,drawPlayerStats} from './menus.js';
import {calculateTickSpeed,initializeGame,chaos,exalt,doctor,completeMap,movementSpeed,quantity,damage,mapTier} from './game.js';
import {initializeButtons,clickButtons,drawButtons,updateButtonHover,activeButtons} from './buttons.js';

let mainCTX, currentTick=0;


const init = () =>{
    //intialize canvas context
    let canvas = document.querySelector('#main');
    mainCTX = canvas.getContext('2d');
    //check for previous save and load it
    initializeGame();
    //draw the game screen
    initializeButtons();
    //setup event listeners
    canvas.addEventListener('mousemove',(e)=>{
        let mouse = getMousePos(canvas, e);
        updateButtonHover(mouse, activeButtons());
    },false);
    canvas.addEventListener('click',(e)=>{
        let mouse = getMousePos(canvas, e);
        clickButtons(mouse, activeButtons());
    },false);
    requestAnimationFrame(main);
}
const getMousePos = (canvas,e) =>{
    let canvasBound = canvas.getBoundingClientRect();
    return{
        x: e.clientX - canvasBound.left,
        y: e.clientY - canvasBound.top
    };
}
const main = () =>{
    mainCTX.clearRect(0,0,1200,900);
    basicBackground(mainCTX,currentTick);
    drawMapTier(mainCTX,mapTier(0));
    drawButtons(activeButtons(),mainCTX);
    drawPlayerStats(mainCTX,movementSpeed(0),damage(0),quantity(0));
    updateCurrency(mainCTX,chaos(0),exalt(0),doctor(0));
    currentTick += calculateTickSpeed();
    if(currentTick>=600){
        mapReview(mainCTX, completeMap());
        currentTick=0;
    }
    reviewRedraw(mainCTX);
    requestAnimationFrame(main);
}

document.onload = init();