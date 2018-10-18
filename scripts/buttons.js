let allButtons = {};

class Button {
    constructor(x,y,width,height,action,text,textX,textY){
        //leftmost x bound
        this.x = x;
        //top y bound
        this.y = y;
        //this plus x give rightmost bound
        this.width = width;
        //this plus y gives bottommost bound
        this.height = height;
        this.action = action;
        this.text = text;
        this.textX = textX;
        this.textY = textY;
        this.active=true;
        this.hover=false;
    }
    setHover(bool){
        this.hover=bool;
    }
    setActivated(bool){
        this.active=bool;
    } 

}

const createNewButton = (x,y,width,height,action,text,textX,textY,btnName) =>{
    let btn = new Button(x,y,width,height,action,text,textX,textY);
    allButtons[btnName]=btn;
}

export const initializeButtons = () =>{
    //shop
    createNewButton(775,500,350,100,()=>{},'player interaction',795,563,'shop');
    //createNewButton(100,500,110,100,()=>{},'boot');
}
export const activeButtons = () =>{
    let activeBtns = [];
    let keys  = Object.keys(allButtons);
    for(let i=0;i<keys.length;i++){
        let btn = allButtons[keys[i]];
        // if the button is not active ignore it.
        if(btn.active ==true){
            activeBtns.push(allButtons[keys[i]]);
        }
    }
    return activeBtns;
}
export const updateButtonHover = (mouse,activeBtn) =>{
    for(let i=0; i<activeBtn.length; i++){
        if(activeBtn[i].x<mouse.x<(activeBtn[i].x+activeBtn[i].width)){
            if(activeBtn[i].y<mouse.y<(activeBtn[i].y+activeBtn[i].height)){
                if(activeBtn[i].hover){
                    activeBtn[i].setHover(false);
                }else{
                    activeBtn[i].setHover(true);
                }
            }
        }
    }
}
export const drawButtons = (activeBtn, ctx) =>{
    
    activeBtn.forEach((e)=>{
        ctx.fillStyle='#000';
        ctx.fillRect(e.x,e.y,e.width,e.height);
        ctx.fillStyle='#996633';
        ctx.fillText(e.text,e.textX,e.textY);
        ctx.strokeStyle = '#996633';
        ctx.strokeRect(e.x,e.y,e.width,e.height);
    })
}

export const clickButtons = (xPos,yPos) =>{
    let keys  = Object.keys(allButtons);

    for(let i=0;i<keys.length;i++){
        let btn = allButtons[keys[i]];
        // if the button is not active ignore it.
        if(btn.active ==true){
            //if the mouse position isn't within the width button ignore it
            if(btn.x<xPos<(btn.x+btn.width)){
                //if the mosue position is within the height of the button it is a hit on the button, preform buttons action
                if(btn.y<yPos<(btn.y+btn.height)){
                    console.dir(btn.text);
                    //btn.action();
                    return;
                }
            }
        }      
    }
}