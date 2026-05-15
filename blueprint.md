# Project Blueprint: Local Itinerary Planner

## Overview

This document outlines the design and development plan for a web application that helps users discover local events and plan their day. The application will generate personalized itineraries based on user preferences, location, and calendar availability.

## Core Features

*   **Interactive User Preferences:** The application will guide users through a step-by-step process to gather their preferences. Instead of a static form, users will be presented with one question at a time, selecting from interactive cards. The cards will disappear upon selection, creating a dynamic and engaging experience.
*   **Location-Based:** The application will use the user's location to find events and activities within a 10km radius. (Initially, this will be mocked).
*   **Calendar Integration:** The application will consider the user's calendar to plan around existing appointments, including travel time. (Initially, this will be mocked).
*   **Itinerary Generation:** The application will generate a personalized and verbose itinerary for the day, including mock review ratings and activity icons.
*   **Timeline Display:** The itinerary will be displayed in a clean, chronological timeline view.
*   **Disqus Integration:** A Disqus forum is included at the bottom of the page to allow for user comments and discussion.
*   **Modern UI/UX:** The application will have a modern, visually appealing design with a focus on user experience, inspired by a provided reference. This includes a new color palette, typography, and layout using Tailwind CSS.
*   **Reset functionality:** A reset button will be available to clear all selected preferences and the generated itinerary.

## Current Task: Re-add Disqus Forum

This task focuses on re-integrating the Disqus forum into the application.

### Plan

1.  **Add Disqus Section (`index.html`):**
    *   Add the Disqus `<section>` and the necessary JavaScript to the `index.html` file, placing it before the footer.
