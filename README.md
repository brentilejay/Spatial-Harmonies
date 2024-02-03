# Spatial-Harmonies
Room design web application.


Purpose: Interactive 2D Room Visualizer to Generate Best Room Layout

Features:
-Generates 2D room with window and door
-Interactivity with door and window using adjustable sliders
-Generates best bed placement in the 2D map

User Journey:
1. User inputs room information (assuming door is always on left wall) and presses submit:
    (a) Room dimensions: length, width
    (b) Which wall window is on (left, right, top, bottom)
2. 2D map of room will show the room with its respective dimensions.
    (a) The door on the left is slideable to adjust position.
    (b) Depending on window placement, window is slideable on the edges of the room to adjust position.
    (c) Both values of position will be displayed for the user.
3. Once user has adjusted values, user presses "Generate Bed Layout" to generate best room layout
    (a) Bed will be placed using algorithm in respect to window and door position.

Scope: 
- Limiting to rectangular rooms
- Room visualization only in 2D map (using .svg for now unnless there's a more efficient method)
- Adding furniture placement function later.


NOTES:
Currently implementing interactive sliding feature that properly slides within the 2D map and displays proper position of window/door for the user. Right now, the door slider isn't properly fixed to its range.


