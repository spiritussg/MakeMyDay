# Project Blueprint: Local Itinerary Planner

## Overview

This document outlines the design and development plan for a web application that helps users discover local events and plan their day. The application will generate personalized itineraries based on user preferences, location, and calendar availability.

## Core Features

*   **Interactive User Preferences:** The application will guide users through a step-by-step process to gather their preferences. Instead of a static form, users will be presented with one question at a time, selecting from interactive cards. The cards will disappear upon selection, creating a dynamic and engaging experience.
*   **Location-Based:** The application will use the user's location to find events and activities within a 10km radius. (Initially, this will be mocked).
*   **Calendar Integration:** The application will consider the user's calendar to plan around existing appointments, including travel time. (Initially, this will be mocked).
*   **Itinerary Generation:** The application will generate a personalized and verbose itinerary for the day, including mock review ratings and activity icons.
*   **Timeline Display:** The itinerary will be displayed in a clean, chronological timeline view.
*   **Modern UI/UX:** The application will have a modern, visually appealing design with a focus on user experience, inspired by a provided reference. This includes a new color palette, typography, and layout using Tailwind CSS.
*   **Reset functionality:** A reset button will be available to clear all selected preferences and the generated itinerary.

## Current Task: Dynamic Preference-Gathering

This task focuses on transforming the static preference form into a dynamic, step-by-step, card-based experience to enhance user engagement.

### Plan

1.  **Refactor Form Generation (`main.js`):**
    *   Implement a step-by-step workflow for preference selection.
    *   Create a function to render one question at a time with a set of interactive cards.
    *   When a card is selected, it will be visually removed, and the next question will be presented.
2.  **Update Stylesheet (`style.css`):**
    *   Add styles for the new card-based UI elements and selection animations.
