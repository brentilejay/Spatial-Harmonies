function bedAlgorithm(roomData) {
    const { width, length, doorPosition, windowWall, windowPosition } = roomData;

    // Calculate the center of the room
    const centerX = width / 2;
    const centerY = length / 2;

    // Initialize variables to store bed coordinates
    let bedX, bedY;

    // Determine the quadrant based on door and window positions
    if (doorPosition < centerY){    // If door is on the 1st quad
        if (windowWall)
        bedY = length;
    } 

    
    if (windowWall === 'top') {
        if (windowPosition < centerX){ // 1st quad
            if (doorPosition < centerY){
                // 4th quad against bottom wall
                bedX = width - (width/4);
                bedY = length - 20;
            } else {
                //4th quad against right wall
                bedX = width - 20;
                bedY = length - (length/4);
            }
        } else { //2nd quad
            if (doorPosition < centerY){
                // 4th quad against bottom wall
                bedX = width - (width/4);
                bedY = length - 20;
            } else {
                //4th quad against right wall
                bedX = width - 20;
                bedY = length - (length/4);
            }
        }
    } else if (windowWall == 'bottom') {
        if (windowPosition < centerX) {
            if (doorPosition < centerY){
                //4th quad against right wall
                bedX = width - 20;
                bedY = length - (length/4);
            } else {
                //2nd quad against right wall
                bedX = width -20;
                bedY = length/4;
            }
        } else {
            if (doorPosition < centerY){
                //4th quad against right wall
                bedX = width - 20;
                bedY = length - (length/4) -30;
            } else {
                //2nd quad against top wall
                bedX = width - (width/4);
                bedY = 0;
            }
        }
    }


    

    return { x: bedX, y: bedY };
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