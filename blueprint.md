
# Project Blueprint: Local Itinerary Planner

## Overview

This document outlines the design and development plan for a web application that helps users discover local events and plan their day. The application will generate personalized itineraries based on user preferences, location, and calendar availability.

## Core Features

*   **User Preferences:** The application will ask users for their interests (e.g., foodie, nature lover), desired activity level, budget, social setting (solo or group), mock location (suburbs in Singapore), and time of day.
*   **Location-Based:** The application will use the user's location to find events and activities within a 10km radius. (Initially, this will be mocked).
*   **Calendar Integration:** The application will consider the user's calendar to plan around existing appointments, including travel time. (Initially, this will be mocked).
*   **Itinerary Generation:** The application will generate a personalized itinerary for the day.
*   **Timeline Display:** The itinerary will be displayed in a clean, chronological timeline view.
*   **Modern UI/UX:** The application will have a modern, visually appealing design with a focus on user experience, inspired by the reference provided (withlocals.com).
*   **Reset functionality:** A reset button will be available to clear all selected preferences and the generated itinerary.
*   **Disqus Integration:** A Disqus forum will be available at the bottom of the page for user comments and discussions.

## Current Task: UI/UX Revamp and Feature Enhancement

This task focuses on improving the visual design of the application and adding new features based on user feedback.

### Plan

1.  **More Mock Data (`main.js`):**
    *   Expand the `mockEvents` array with a greater variety of events to create more diverse itineraries.
2.  **Day/Night Toggle (`index.html`, `main.js`, `style.css`):**
    *   Add a toggle switch to the header in `index.html` to allow users to switch between day and night modes.
    *   Implement the toggle functionality in `main.js`.
    *   Define separate color palettes for day and night modes in `style.css`.
3.  **Sci-Fi/Tech UI/UX (`style.css`):**
    *   **Typography:** Import and apply a futuristic font (e.g., from Google Fonts).
    *   **Color:** Create a vibrant color palette with a dark background for the sci-fi feel.
    *   **Depth and Texture:** Use multi-layered drop shadows to create a sense of depth for UI elements.
    *   **Interactivity:** Add a "glow" effect to interactive elements like buttons and form inputs.
