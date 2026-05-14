
# Project Blueprint: Local Itinerary Planner

## Overview

This document outlines the design and development plan for a web application that helps users discover local events and plan their day. The application will generate personalized itineraries based on user preferences, location, and calendar availability.

## Core Features

*   **User Preferences:** The application will ask users for their name, interests (e.g., foodie, nature lover), desired activity level, budget, social setting (solo or group), mock location (suburbs in Singapore), and time of day.
*   **Location-Based:** The application will use the user's location to find events and activities within a 10km radius. (Initially, this will be mocked).
*   **Calendar Integration:** The application will consider the user's calendar to plan around existing appointments, including travel time. (Initially, this will be mocked).
*   **Itinerary Generation:** The application will generate a personalized and verbose itinerary for the day, including mock review ratings and activity icons.
*   **Timeline Display:** The itinerary will be displayed in a clean, chronological timeline view.
*   **Modern UI/UX:** The application will have a modern, visually appealing design with a focus on user experience.
*   **Reset functionality:** A reset button will be available to clear all selected preferences and the generated itinerary.
*   **Disqus Integration:** A Disqus forum will be available at the bottom of the page for user comments and discussions.

## Current Task: Add Animations and Sound

This task focuses on adding a headline graphic, hover sounds, and a loading animation to enhance the user experience.

### Plan

1.  **Add Assets (`assets/`):**
    *   Create an `assets` directory to store a pixel art traveler GIF and a hover sound.
2.  **Add Elements (`index.html`):**
    *   Add an `<img>` tag for the headline graphic.
    *   Add an `<audio>` tag for the hover sound.
    *   Add a container for the loading animation.
3.  **Add Styling (`style.css`):**
    *   Add styling for the headline graphic and loading animation.
4.  **Implement Logic (`main.js`):**
    *   Implement hover sound effects on interactive elements.
    *   Implement a loading animation with a time delay before displaying the itinerary.
