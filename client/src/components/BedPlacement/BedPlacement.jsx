import React from 'react';
import bedImage from '../images/Bed.png';



function BedPlacement({ bedLayout }) {
    // Check if bedLayout is defined and is an array
    if (!Array.isArray(bedLayout)) {
        console.error('BedLayout is not defined or is not an array');
        return null;
    }

    return (
        <div>
            {bedLayout.map((coordinate, index) => {
                // Check if the coordinate object is valid
                if (!coordinate || typeof coordinate.x === 'undefined' || typeof coordinate.y === 'undefined') {
                    console.error('Coordinates are missing or invalid:', coordinate);
                    return null;
                }

                return (
                    <svg key={index} width="100" height="100" style={{ position: 'absolute', left: coordinate.x, top: coordinate.y }}>
                        {/* Render your bed SVG here */}
                        
                        <image href={bedImage}  width="300" height="300" preserveAspectRatio="none" />
                        
                    </svg>
                );
            })}
        </div>
    );
}

export default BedPlacement;
//module.exports = { bedPlacement };
/*

function BedPlacement({ bedLayout }) {
    // Check if bedLayout is defined and contains coordinates
    if (!bedLayout || !bedLayout.x || !bedLayout.y) {
        console.log('BedLayout is not defined or coordinates are missing:', bedLayout);
        return null; // Return null if coordinates are not defined
    }

    // Extract coordinates
    const { x, y } = bedLayout;

    console.log('Bed successfully loaded.');

    // Render the bed placement using the coordinates
    return (
        <div>
            <svg width="100" height="100" style={{ position: 'absolute', left: x, top: y }}>
                {/* Render your bed SVG here 
                <rect width="50" height="50" fill="brown" />
            </svg>
        </div>
    );
}

export default BedPlacement;
*/


/*

import React from 'react';

function BedPlacement({ bedLayout }) {
    // Assuming bedLayout is an array of bed coordinates [x, y] for each bed
    return (
        <div>
            {bedLayout.map((bedCoords, index) => (
                <svg key={index} width="100" height="100" style={{ position: 'absolute', left: bedCoords[0], top: bedCoords[1] }}>
                    {/* Render your bed SVG here 
                    <rect width="50" height="50" fill="brown" />
                </svg>
            ))}
        </div>
    );
}

export default BedPlacement;

*/