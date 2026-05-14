
# Project Blueprint: Local Itinerary Planner

## Overview

This document outlines the design and development plan for a web application that helps users discover local events and plan their day. The application will generate personalized itineraries based on user preferences, location, and calendar availability.

## Core Features

*   **User Preferences:** The application will ask users for their interests (e.g., foodie, nature lover), desired activity level, budget, social setting (solo or group), mock location (suburbs in Singapore), and time of day.
*   **Location-Based:** The application will use the user's location to find events and activities within a 10km radius. (Initially, this will be mocked).
*   **Calendar Integration:** The application will consider the user's calendar to plan around existing appointments, including travel time. (Initially, this will be mocked).
*   **Itinerary Generation:** The application will generate a personalized itinerary for the day.
*   **Timeline Display:** The itinerary will be displayed in a clean, chronological timeline view.
*   **Modern UI/UX:** The application will have a modern, visually appealing design with a focus on user experience.
*   **Reset functionality:** A reset button will be available to clear all selected preferences and the generated itinerary.
*   **Disqus Integration:** A Disqus forum will be available at the bottom of the page for user comments and discussions.

## Current Task: UI/UX Revamp

This task focuses on improving the visual design of the application to a tech/sci-fi theme.

### Plan

1.  **Remove Pixel Art Animation (`style.css`, `index.html`, `main.js`):**
    *   Remove the animation elements and corresponding CSS and JavaScript code.
2.  **Tech/Sci-Fi UI/UX (`style.css`):**
    *   **Typography:** Continue using the `Orbitron` font.
    *   **Color Palette:** Implement a dark, tech-focused color scheme with vibrant, glowing accent colors for a futuristic feel.
    *   **Depth and Effects:** Use shadows and borders to create a "holographic" or "heads-up display" (HUD) effect for UI elements.
    *   **Interactivity:** Enhance the glow effect on interactive elements like buttons and form inputs.
