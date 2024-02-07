function bedAlgorithm(roomData) {
    const { width, length, doorPosition, windowWall, windowPosition } = roomData;

    // Calculate the center of the room
    const centerX = width / 2;
    const centerY = length / 2;

    // Initialize variables to store bed coordinates
    let bedX=0, bedY=0;

    // Initialize rotation variable
    let rotation = 0;

    // Determine the quadrant based on door and window positions
    if (doorPosition < centerY){    // If door is on the 1st quad
        if (windowWall)
        bedY = length;
    } 

    //rotation = 0;
    if (windowWall === 'top') {
        if (windowPosition < centerX){ // 1st quad
            if (doorPosition < centerY){
                // 4th quad against bottom wall
                bedX = width - width/4;
                bedY = length;
                rotation = 180;
            } else {
                //2nd quad against right wall
                
                bedX =width;
                bedY = (doorPosition)/2 - 16;
                rotation = 90;
                //bedY = (doorPosition)/2;
                //bedY=0;
                
                console.log(doorPosition);
            }
        } else { //2nd quad
            if (doorPosition < centerY){
                // 4th quad against bottom wall
                bedX = width;
                bedY = length - length/2;
                rotation = 90;
            } else {
                //4th quad against right wall
                bedX = width ;
                bedY = length - (length/4);
                rotation = 90;
            }
        }
    } else if (windowWall == 'bottom') {
        if (windowPosition < centerX) {
            if (doorPosition < centerY){
                //4th quad against right wall
                bedX = width;
                bedY =length - (length/3)-17.5; 
                rotation = 90;
                //rotation = 90;
            } else {
                //2nd quad against right wall
                bedX = width -20;
                bedY = length/4;
            }
        } else {
            if (doorPosition < centerY){
                //4th quad against right wall
                bedX = width;
                bedY = length - (length/2);
                rotation =90;
            } else {
                //2nd quad against top wall
                bedX = width;
                bedY = length/4 ;
                rotation = 90;
            }
        }
    } else if (windowWall == 'right') {
        if (windowPosition < centerX) {
            if (doorPosition < centerY){
                //4th quad against right wall
                bedX = width - width/4;
                bedY =length; 
                rotation = 180;
                //rotation = 90;
            } else {
                //2nd quad against right wall
                bedX = width -width/3 - 17.5;
                bedY = 0;
            }
        } else {
            if (doorPosition < centerY){
                //4th quad against right wall
                bedX = width - width/8 -17.5;
                bedY = length ;
                rotation =180;
            } else {
                //2nd quad against top wall
                bedX = width - (width/3)-17.5;
                bedY = 0;
                rotation = 0;
            }
        }
    }else if (windowWall == 'left') {
        if (windowPosition < centerX) {
            if (doorPosition < centerY){
                //error
                bedX = 0;
                bedY =0; 
                rotation = 0;
            } else {
                //2nd quad against right wall
                bedX = width -width/3 - 17.5;
                bedY = 0;
            }
        } else {
            if (doorPosition < centerY){
                //4th quad against right wall
                bedX = width - width/8 -17.5;
                bedY = length ;
                rotation =180;
            } else {
                //error
                bedX = 0;
                bedY = 0;
                rotation = 0;
            }
        }
    }


    

    return { x: bedX, y: bedY, rotation };
}
module.exports = { bedAlgorithm };


/*// bedPlacementAlgorithm.js

function bedAlgorithm(roomData) {
    // Calculate the area of the bed placement based on room dimensions
    const area = roomData.width * roomData.length;
    console.log
    return area;
    
}

module.exports = { bedAlgorithm };



// Calculate the area of the bed placement based on room dimensions
    const area = roomData.width * roomData.length;
    console.log('Room Data:', roomData);
    console.log('Area:', area);
    return area;

*/