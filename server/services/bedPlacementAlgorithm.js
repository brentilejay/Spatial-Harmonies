function bedAlgorithm(roomData) {
    // Calculate the area of the bed placement based on room dimensions
    const area = roomData.width * roomData.length;
    console.log('Room Data:', roomData);
    console.log('Area:', area);
    return area;
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

*/