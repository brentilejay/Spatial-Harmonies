import React, { useState } from 'react';
import RoomVisualizer from './components/RoomVisualizer/RoomVisualizer.jsx';
import titleGIF from './components/images/titleGIF.gif'
import './App.css';

function App() {
    const [roomData, setRoomData] = useState({
        width: 0,
        length: 0,
        doorPosition: 0,
        windowWall: '',
        windowPosition: 0
    });

    const [roomLayoutGenerated, setRoomLayoutGenerated] = useState(false);
    const [bedLayout, setBedLayout] = useState([]);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Extract form data
        const formData = {
            width: parseFloat(event.target.width.value),
            length: parseFloat(event.target.length.value),
            doorPosition: parseFloat(event.target.doorPosition.value),
            windowWall: event.target.windowWall.value,
            windowPosition: parseFloat(event.target.windowPosition.value)
        };

        // Update local state with room data
        setRoomData(formData);

        // Set room layout generated to true
        setRoomLayoutGenerated(true);
    };

    const generateBedLayout = () => {
        // Send room data to backend
        fetch('http://localhost:8000/api/roomdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(roomData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle response data
            console.log('Received response from backend:', data);
            // Set bed layout received from backend
            setBedLayout(data.bedLayout);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <h1 className="gif-with-shadow">
                
                <img src={titleGIF} style={{ width: '500px', height: 'auto' }} />
            </h1>
            <div className="form-container">
                <form onSubmit={handleFormSubmit}>
                <label htmlFor="width">Width:</label>
                    <input type="number" id="width" name="width" required />

                    <label htmlFor="length">Length:</label>
                    <input type="number" id="length" name="length" required />

                    <label htmlFor="doorPosition">Door Position:</label>
                    <input type="number" id="doorPosition" name="doorPosition" required />
    
                    <label htmlFor="windowWall">Window Wall:</label>
                    <select id="windowWall" name="windowWall" required>
                        <option value="top">Top</option>
                        <option value="bottom">Bottom</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                    </select>

                    <label htmlFor="windowPosition">Window Position:</label>
                    <input type="number" id="windowPosition" name="windowPosition" required />

                    
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div> 
                {/* Display room visualizer only if room layout is generated */}
                {roomLayoutGenerated && <RoomVisualizer roomData={roomData} bedLayout={bedLayout} />}
                {/* Render button if room layout has been generated */}
                {roomLayoutGenerated && (
                    <button onClick={generateBedLayout}>Generate Bed Layout</button>
                )}
            </div>
        </div>
    );
}

export default App;



/*
import React, { useState } from 'react';
import RoomVisualizer from './components/RoomVisualizer/RoomVisualizer.jsx';
import './App.css';

function App() {
    const [roomData, setRoomData] = useState({
        width: 0,
        length: 0,
        doorPosition: 0,
        windowWall: '',
        windowPosition: 0
    });

    const [roomLayoutGenerated, setRoomLayoutGenerated] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Extract form data
        const formData = {
            width: parseFloat(event.target.width.value),
            length: parseFloat(event.target.length.value),
            doorPosition: parseFloat(event.target.doorPosition.value),
            windowWall: event.target.windowWall.value,
            windowPosition: parseFloat(event.target.windowPosition.value)
        };

        // Log the data before sending it to the backend
        console.log('Sending data to backend:', formData);

        // Send room data to backend
        fetch('http://localhost:8000/api/roomdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle response data
            console.log('Received response from backend:', data);
            console.log('Calculated area:', data.area);

            // Set room layout generated to true
            setRoomLayoutGenerated(true);
        })
        .catch(error => {
            console.error('Error:', error);
        });

        // Update local state with room data
        setRoomData(formData);
    };

    const generateBedLayout = () => {
        // Call the API endpoint to generate the room layout using the bed placement algorithm
        // You can implement this part as per your backend API design
        console.log('Generating bed layout...');
    };

    return (
        <div>
            <h1>Room Visualizer</h1>
            <div className="form-container">
                <form onSubmit={handleFormSubmit}>
                <label htmlFor="width">Width:</label>
                    <input type="number" id="width" name="width" required />

                    <label htmlFor="length">Length:</label>
                    <input type="number" id="length" name="length" required />

                    <label htmlFor="doorPosition">Door Position:</label>
                    <input type="number" id="doorPosition" name="doorPosition" required />

                    <label htmlFor="windowWall">Window Wall:</label>
                    <select id="windowWall" name="windowWall" required>
                        <option value="top">Top</option>
                        <option value="bottom">Bottom</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                    </select>

                    <label htmlFor="windowPosition">Window Position:</label>
                    <input type="number" id="windowPosition" name="windowPosition" required />

                    <button type="submit">Submit</button>
                    
                </form>
            </div>
            <div> 
                <RoomVisualizer roomData={roomData} />

                {roomLayoutGenerated && (
                    <button onClick={generateBedLayout}>Generate Bed Layout</button>
                )}
            </div>
        </div>
    );
}

export default App;

*/


/*

import React, { useState } from 'react';
import RoomVisualizer from './components/RoomVisualizer/RoomVisualizer.jsx';
import './App.css';

function App() {
    const [roomData, setRoomData] = useState({
        width: 0,
        length: 0,
        doorPosition: 0,
        windowWall: '',
        windowPosition: 0
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Extract form data
        const formData = {
            width: parseFloat(event.target.width.value),
            length: parseFloat(event.target.length.value),
            doorPosition: parseFloat(event.target.doorPosition.value),
            windowWall: event.target.windowWall.value,
            windowPosition: parseFloat(event.target.windowPosition.value)
        };

        // Log the data before sending it to the backend
        console.log('Sending data to backend:', formData);

        // Send room data to backend
        fetch('http://localhost:8000/api/roomdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle response data
            console.log('Received response from backend:', data);
            console.log('Calculated area:', data.area);
        })
        .catch(error => {
            console.error('Error:', error);
        });

        // Update local state with room data
        setRoomData(formData);
    };

    return (
        <div>
            <h1>Room Visualizer</h1>
            <div className="form-container">
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="width">Width:</label>
                    <input type="number" id="width" name="width" required />

                    <label htmlFor="length">Length:</label>
                    <input type="number" id="length" name="length" required />

                    <label htmlFor="doorPosition">Door Position:</label>
                    <input type="number" id="doorPosition" name="doorPosition" required />

                    <label htmlFor="windowWall">Window Wall:</label>
                    <select id="windowWall" name="windowWall" required>
                        <option value="top">Top</option>
                        <option value="bottom">Bottom</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                    </select>

                    <label htmlFor="windowPosition">Window Position:</label>
                    <input type="number" id="windowPosition" name="windowPosition" required />

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div> 
              <RoomVisualizer roomData={roomData} />
            </div>
        </div>
    );
}

export default App;
*/


/*
import logo from './logo.svg';

import React, { useState } from 'react';
import RoomVisualizer from './components/RoomVisualizer/RoomVisualizer.jsx';
//import floorImage from './components/images/WoodFloorPattern.jpeg';
import './App.css';

function App() {
    const [roomData, setRoomData] = useState({
        width: 0,
        length: 0,
        doorPosition: 0,
        windowWall: '',
        windowPosition: 0
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Logic to handle form submission and update roomData
        // You can perform validation and other operations here before updating roomData
        // For now, let's assume you update roomData directly
        setRoomData({
            width: parseFloat(event.target.width.value),
            length: parseFloat(event.target.length.value),
            doorPosition: parseFloat(event.target.doorPosition.value),
            windowWall: event.target.windowWall.value,
            windowPosition: parseFloat(event.target.windowPosition.value)
        });
    };

    return (
        <div>
            <h1>Room Visualizer</h1>
            <div className="form-container">
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="width">Width:</label>
                    <input type="number" id="width" name="width" required />

                    <label htmlFor="length">Length:</label>
                    <input type="number" id="length" name="length" required />

                    <label htmlFor="doorPosition">Door Position:</label>
                    <input type="number" id="doorPosition" name="doorPosition" required />

                    <label htmlFor="windowWall">Window Wall:</label>
                    <select id="windowWall" name="windowWall" required>
                        <option value="top">Top</option>
                        <option value="bottom">Bottom</option>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                    </select>

                    <label htmlFor="windowPosition">Window Position:</label>
                    <input type="number" id="windowPosition" name="windowPosition" required />

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div> 
              <RoomVisualizer roomData={roomData} />
            </div>
        </div>
    );
}

export default App;

*/