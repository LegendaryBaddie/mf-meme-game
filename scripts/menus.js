//this contains the functionality to draw menus to the screen from the main animation frame loop.
let reviewOpa = 0,recentEarn = [0,0,0];
export const basicBackground = (ctx, tick) =>{
    //map view
    ctx.fillStyle = '#00FF00';
    ctx.fillRect(5,5,700,650);
    ctx.lineWidth = 5;
    ctx.strokeRect(5,5,700,650);
    //current map stats and completeion
    //bottom rect
     ctx.strokeRect(5,655,1190,235);
        mapCompletion(tick,ctx);
    
    //overall stats
    //right rect
    ctx.strokeRect(705,5,490,650);
    
}
export const updateCurrency = (ctx,cha,ex,doc)=>{
    ctx.font = '40pt Arial';
    ctx.fillText(`Chaotic Bois: ${cha}`,780,150);
    ctx.fillText(`Exalty Bois: ${ex}`,780,200);
    ctx.fillText(`Medical Bois: ${doc}`,780,250);
}
export const drawMapTier = (ctx, tier)=>{
     ctx.fillStyle='#000';
     ctx.font = '30pt Arial';
    switch (tier){
        case 3:
            ctx.fillText('Burial Chambers',475,710);
            break;
        case 8:
            ctx.fillText('Shaped Burial Chambers',500,710);
            break;
        case 16:
            ctx.fillText('Elder Burial Chambers',500,710);
            break;
    }
}

export const drawPlayerStats = (ctx,mvmnt,dmg,quant) =>{
    ctx.fillStyle='#000';
    ctx.font = '20pt Arial';
    ctx.fillText(`Movement Speed: ${mvmnt}`,850,350);
    ctx.fillText(`Damage: ${dmg}`,850,380);
    ctx.fillText(`Quantity: ${quant}`,850,410);
}
const mapCompletion = (tick, ctx) =>{
    ctx.linewidth = 1;
    ctx.strokeRect(300,750,600,10);
    ctx.fillStyle='#0000FF';
    ctx.fillRect(300,750,tick,10);
}
export const reviewRedraw = (ctx) =>{
    ctx.fillStyle = `rgba(0,0,0,${reviewOpa})`
    ctx.font = '25pt Arial';
    ctx.fillText(`${recentEarn[0]} Chaotic Bois earned`,50,850);
    ctx.fillText(`${recentEarn[1]} Exalty Bois earned`,450,850);
    ctx.fillText(`${recentEarn[2]} Medical Bois earned`,850,850);
    reviewOpa -=.01;
}
export const mapReview = (ctx, earnings) =>{
    ctx.fillStyle = 'rgba(0,0,0,1)'
    ctx.font = '25pt Arial';
    ctx.fillText(`${earnings[0]} Chaotic Bois earned`,50,850);
    ctx.fillText(`${earnings[1]} Exalty Bois earned`,450,850);
    ctx.fillText(`${earnings[2]} Medical Bois earned`,850,850);
    reviewOpa = 1;
    recentEarn = earnings;
}
