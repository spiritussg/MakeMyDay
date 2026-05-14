
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

## Current Task: Add Ratings and Icons to Itinerary

This task focuses on enhancing the itinerary by adding mock review ratings and icons for different activity types.

### Plan

1.  **Add Icon Library (`index.html`):**
    *   Integrate Font Awesome to provide a library of icons.
2.  **Add Ratings and Icons (`main.js`):**
    *   Update the itinerary generation logic to include a mock rating and an icon for each event.
3.  **Style Ratings and Icons (`style.css`):**
    *   Add styling to format and display the ratings and icons within the itinerary timeline.
