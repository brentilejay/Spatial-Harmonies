//import React from 'react';
import React, { useState } from 'react';

import './RoomVisualizer.css';
import floorImage from '../images/WoodFloorPattern.jpeg';
import doorImage from '../images/Door.png';
//const { updateDoorPosition } = require("./components/RoomVisualizer.jsx");



function RoomVisualizer({ roomData, updateDoorPosition }) {
    // Assuming roomData contains dimensions in inches
    const { width, length, doorPosition, windowWall, windowPosition } = roomData;

    // Define the scale factor (1 inch = 10 SVG units)
    const scaleFactor = 5;

    // Door and window widths
    const doorWidthInches = 32;
    const doorThickness = 2;

    const windowWidthInches = 22;

    // Convert inch measurements to SVG units
    const roomWidth = width * scaleFactor;
    const roomLength = length * scaleFactor;

    // Calculate the width and height of the door and window proportionate to the room
    const doorWidth = doorWidthInches * scaleFactor;
    const doorHeight = 22 * scaleFactor; // Assuming door height is 80 inches, adjust as needed
    const windowHeight = 2 *scaleFactor; // Height of the window line



    const [doorPositionY, setDoorPositionY] = useState(0); // Initial position of the door
    const [doorPositionText, setDoorPositionText] = useState('Door Position = 0');

    const handleMouseDown = (event) => {
        // Calculate initial mouse position
        const initialMouseY = event.clientY;
        //const newDoorPositionYcalculated = 0;

        const handleMouseMove = (event) => {
            // Calculate the new position of the door based on mouse movement
            const mouseY = event.clientY;
            const deltaY = mouseY - initialMouseY;
            const newDoorPositionY = doorPositionY + deltaY;
            //const newDoorPositionYcalculated = 0;

            // Update the position of the door within the bounds of the left wall
            if (newDoorPositionY >= 0 && newDoorPositionY + (32*5) <= roomLength) {
                const newDoorPositionYcalculated = (newDoorPositionY/5)+16;
                setDoorPositionY(newDoorPositionY);
                setDoorPositionText(`Door Position = ${(newDoorPositionYcalculated)}`);
                updateDoorPosition(newDoorPositionYcalculated);
            }
        };

         // Attach mouse move event listener
        window.addEventListener('mousemove', handleMouseMove);

        const handleMouseUp = () => {
            // Remove event listeners when mouse is released
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        // Add event listeners for mouse movement and release
        //window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    
    return (
        <div className="room-visualizer-container">
            <div>
               
                <svg width={roomWidth} height={roomLength} className="room-svg" style={{ overflow: 'visible' }} >
                    {/* Your SVG elements */}
                    <image href={floorImage} x="0" y="0" width={roomWidth} height={roomLength} preserveAspectRatio="none" />
    
    {/*
                    <rect x="0" y={doorPosition * scaleFactor} width={2 * scaleFactor} height={doorWidth} fill="brown" />
    */}
                

                    {windowWall === 'top' && (
                        <rect x={(windowPosition * scaleFactor) - (11*scaleFactor)} y="0" width={windowWidthInches * scaleFactor} height={windowHeight} fill="blue" />
                    )}
                    {windowWall === 'bottom' && (
                        <rect x={(windowPosition * scaleFactor) - (11*scaleFactor)} y={roomLength - windowHeight} width={windowWidthInches * scaleFactor} height={windowHeight} fill="blue" />
                    )}
                    {windowWall === 'left' && (
                        <rect x="-5" y={windowPosition * scaleFactor} width={windowHeight} height={windowWidthInches * scaleFactor} fill="blue" />
                    )}
                    {windowWall === 'right' && (
                        <rect x={(roomWidth)-5} y={windowPosition * scaleFactor} width={windowHeight} height={windowWidthInches * scaleFactor} fill="blue" />
                    )}
                    <image
                        href={doorImage}
                        //xlinkHref="url_to_your_image.jpg" // Replace "url_to_your_image.jpg" with the path to your image file
                        x={'-364.668717948px'} y={doorPositionY}
                    // width={2 * scaleFactor} height={doorWidth*scaleFactor}
                        //width={111} height={48*5}
                        style={{ width: '364.668717948px', height: '160px', cursor: 'grab' }}
                        onMouseDown={handleMouseDown}
                        //style={{  }}
                    />

                    
                    {/* Door element with drag and drop functionality 
                    <rect
                        x={0} y={doorPositionY}
                        width={2 * scaleFactor} height={doorWidth}
                        fill="brown"
                        onMouseDown={handleMouseDown}
                        style={{ cursor: 'grab' }} // Change cursor to indicate draggable element
                    />
                    */}
                </svg>
            
            {/* Display door position */}
            <h2 style={{ marginLeft: '10px', color: 'white' }}>Door Position: {doorPositionText}</h2>
            </div>
        </div>
    );
}
export default RoomVisualizer;

/*

import React from 'react';
import './RoomVisualizer.css';
import floorImage from '../images/WoodFloorPattern.jpeg';


function RoomVisualizer({ roomData }) {
    // Assuming roomData contains dimensions in inches
    const { width, length, doorPosition, windowWall, windowPosition } = roomData;

    // Define the scale factor (1 inch = 10 SVG units)
    const scaleFactor = 5;

    // Door and window widths
    const doorWidthInches = 32;
    const doorThickness = 2;

    const windowWidthInches = 22;

    // Convert inch measurements to SVG units
    const roomWidth = width * scaleFactor;
    const roomLength = length * scaleFactor;

    // Calculate the width and height of the door and window proportionate to the room
    const doorWidth = doorWidthInches * scaleFactor;
    const doorHeight = 32 * scaleFactor; // Assuming door height is 80 inches, adjust as needed
    const windowHeight = 2 *scaleFactor; // Height of the window line

    return (
        <div className="room-visualizer-container"> 

            <svg 
                width={roomWidth} 
                height={roomLength}
                className="room-svg"
            >
                <image href={floorImage} x="0" y="0" width={roomWidth} height={roomLength} preserveAspectRatio="none" />
 

                <rect x="0" y={doorPosition * scaleFactor} width={2 * scaleFactor} height={doorWidth} fill="brown" />

               

                {windowWall === 'top' && (
                    <rect x={(windowPosition * scaleFactor) - (11*scaleFactor)} y="0" width={windowWidthInches * scaleFactor} height={windowHeight} fill="blue" />
                )}
                {windowWall === 'bottom' && (
                    <rect x={(windowPosition * scaleFactor) - (11*scaleFactor)} y={roomLength - windowHeight} width={windowWidthInches * scaleFactor} height={windowHeight} fill="blue" />
                )}
                {windowWall === 'left' && (
                    <rect x="-5" y={windowPosition * scaleFactor} width={windowHeight} height={windowWidthInches * scaleFactor} fill="blue" />
                )}
                {windowWall === 'right' && (
                    <rect x={(roomWidth)-5} y={windowPosition * scaleFactor} width={windowHeight} height={windowWidthInches * scaleFactor} fill="blue" />
                )}
            </svg>
        </div>
    );
}

export default RoomVisualizer;

*/