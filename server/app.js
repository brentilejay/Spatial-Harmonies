const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { bedAlgorithm } = require("./services/bedPlacementAlgorithm.js");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Define a POST endpoint to handle room data submission
app.post("/api/roomdata", (req, res) => {
  // Extract room data from the request body
  const roomData = req.body;

  try {
    // Call the bedAlgorithm function to generate the bed coordinate based on the room data
    const { x, y, rotation } = bedAlgorithm(roomData);

    // Send the bed coordinate back to the client
    res.json({ bedCoordinate: { x, y }, rotation: rotation });

  } catch (error) {
    console.error("Error generating bed coordinate:", error);
    // Handle errors and send an error response to the client
    res.status(500).json({ error: "Error generating bed coordinate" });
  }
  /*
  // Extract room data from the request body
  const roomData = req.body;

  // Call the bedAlgorithm function to generate the bed layout based on the room data
  const bedCoord = bedAlgorithm(roomData);
  //console.log('Room data', bedLayout);

  // Calculate the area from the bed layout (for testing purposes, assuming bedAlgorithm returns the area)
  //const area = bedLayout.area;
  console.log('The coordinates are', bedCoord);
  // Send the area back to the client
  //res.status(200).json({ bedCoord});
  res.json({ bedCoordinates: bedCoord });
  */
});

const port = process.env.PORT || 8000;

const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);

//
/*
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { bedAlgorithm } = require("./services/bedPlacementAlgorithm.js"); // Importing the bedAlgorithm function

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.post("/api/submit-room-data", (req, res) => {
  const roomData = req.body;

  // Call the bedAlgorithm function to generate the bed layout based on the room data
  const bedLayout = bedAlgorithm(roomData);

  // Perform any other necessary operations with the bed layout

  // Send a response back to the client
  res.status(200).json({ message: "Room data received and bed layout generated successfully", bedLayout });
});

const port = process.env.PORT || 8000;

const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);
*/