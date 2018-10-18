let playerMovementSpeed,playerQuantityModifier, playerDamageModifier, doc,ex,cha,tier;
export const initializeGame=()=>{
    
    //min of 3 max of 6
    playerMovementSpeed = 3;
    //min of 3 max of 
    playerDamageModifier = 3;
    //min of 15 max of 70
    playerQuantityModifier = 15;   
    doc=0;
    ex=0;
    cha =0;
    //3 8 or 16
    tier = 3;
}
export const calculateTickSpeed= ()=>{
    //playerMovementSpeed +- (mapTier diffuculty modifier)/(playerDamage modifier)
    //if its negative the player can't do the map
    return playerMovementSpeed-tier/playerDamageModifier;
}
export const completeMap = () =>{
    //calculate chaos exalt and doctor drops factor in if a rare item dropped notify player of what happened
    //chaos drop chance = mobs (based off of map tier & map roll assume 20 pack size until further implementation)
    //base values
    let mobs = tier*40;
    let chaosEarned = 1 +Math.floor(mobs * 1/(100+Math.random()*10000) * playerQuantityModifier);
    let exaltEarned = Math.floor(mobs * 1/(10000+Math.random()*200000) * playerQuantityModifier);
    let doctorEarned = Math.floor(mobs* 1/(10000+Math.random()*700000) * playerQuantityModifier);
    
    //feelsbadman values random chance per map of getting one exalt and or doctor;
    if(Math.Random*500==69){exaltEarned+=1;}
    if(Math.Random*1000==696){doctorEarned+=1;}
    doc+=doctorEarned;
    ex+=exaltEarned;
    cha+=chaosEarned;
    return [chaosEarned,exaltEarned,doctorEarned];
}
export const mapTier = (modValue) =>{
   tier+=modValue;
   return tier;
}
export const movementSpeed = (modValue)=>{
    playerMovementSpeed+=modValue;
    return playerMovementSpeed;
}
export const damage = (modValue)=>{
    playerDamageModifier+=modValue;
    return playerDamageModifier;
}
export const quantity = (modValue)=>{
    playerQuantityModifier+=modValue;
    return playerQuantityModifier;
}
export const chaos = (modValue) =>{
    cha+=modValue;
    return cha;
}
export const exalt = (modValue) =>{
    ex+=modValue;
    return ex;
}
export const doctor = (modValue) =>{
    doc+=modValue;
    return doc;
}


