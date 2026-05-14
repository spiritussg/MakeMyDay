const mockEvents = [
    // Foodie
    { name: 'Gourmet Cooking Class', category: 'Foodie', location: { lat: 34.0522, lng: -118.2437 }, duration: 180, cost: 'splurge' },
    { name: 'Street Food Tour', category: 'Foodie', location: { lat: 34.0522, lng: -118.2437 }, duration: 120, cost: 'budget' },
    { name: 'Wine Tasting Workshop', category: 'Foodie', location: { lat: 34.0522, lng: -118.2437 }, duration: 90, cost: 'splurge' },
    { name: 'Farmers Market Exploration', category: 'Foodie', location: { lat: 34.0522, lng: -118.2437 }, duration: 90, cost: 'free' },

    // Art Lover
    { name: 'Modern Art Gallery Visit', category: 'Art Lover', location: { lat: 34.0522, lng: -118.2437 }, duration: 120, cost: 'budget' },
    { name: 'Sculpture Garden Walk', category: 'Art Lover', location: { lat: 34.0522, lng: -118.2437 }, duration: 90, cost: 'free' },
    { name: 'Photography Exhibition', category: 'Art Lover', location: { lat: 34.0522, lng: -118.2437 }, duration: 60, cost: 'free' },
    { name: 'Street Art Discovery Tour', category: 'Art Lover', location: { lat: 34.0522, lng: -118.2437 }, duration: 120, cost: 'budget' },

    // History Buff
    { name: 'Local History Museum Tour', category: 'History Buff', location: { lat: 34.0522, lng: -118.2437 }, duration: 90, cost: 'free' },
    { name: 'Architectural Heritage Walk', category: 'History Buff', location: { lat: 34.0522, lng: -118.2437 }, duration: 120, cost: 'budget' },
    { name: 'Historical Reenactment Event', category: 'History Buff', location: { lat: 34.0522, lng: -118.2437 }, duration: 180, cost: 'budget' },

    // Nature Enthusiast
    { name: 'Hike to the Waterfall', category: 'Nature Enthusiast', location: { lat: 34.0522, lng: -118.2437 }, duration: 180, cost: 'free' },
    { name: 'Botanical Garden Visit', category: 'Nature Enthusiast', location: { lat: 34.0522, lng: -118.2437 }, duration: 120, cost: 'budget' },
    { name: 'Kayaking on the Lake', category: 'Nature Enthusiast', location: { lat: 34.0522, lng: -118.2437 }, duration: 180, cost: 'splurge' },

    // Active
    { name: 'Morning Yoga in the Park', category: 'Active', location: { lat: 34.0522, lng: -118.2437 }, duration: 60, cost: 'free' },
    { name: 'Rock Climbing Session', category: 'Active', location: { lat: 34.0522, lng: -118.2437 }, duration: 120, cost: 'splurge' },
    { name: 'Community 5k Run', category: 'Active', location: { lat: 34.0522, lng: -118.2437 }, duration: 90, cost: 'free' },

    // Music Lover
    { name: 'Live Jazz at the Speakeasy', category: 'Music Lover', location: { lat: 34.0522, lng: -118.2437 }, duration: 120, cost: 'budget' },
    { name: 'Open Mic Night', category: 'Music Lover', location: { lat: 34.0522, lng: -118.2437 }, duration: 180, cost: 'free' },
    { name: 'Vinyl Record Store Browsing', category: 'Music Lover', location: { lat: 34.0522, lng: -118.2437 }, duration: 60, cost: 'free' },
];

const preferencesForm = document.getElementById('preferences-form');
const timeline = document.getElementById('timeline');
const themeToggle = document.getElementById('theme-toggle');

function createPreferencesForm() {
    const preferences = {
        interests: { label: 'Interests', options: ['Foodie', 'Art Lover', 'History Buff', 'Nature Enthusiast', 'Active', 'Music Lover'] },
        activityLevel: { label: 'Activity Level', options: ['Relaxing', 'Moderate', 'Adventurous'] },
        budget: { label: 'Budget', options: ['Free', 'Budget', 'Splurge'] },
        social: { label: 'Social Setting', options: ['Solo', 'Group'] },
        location: { label: 'Location', options: ['Tampines', 'Jurong East', 'Woodlands', 'Orchard', 'Sentosa'] },
        timeOfDay: { label: 'Time of Day', options: ['Morning', 'Afternoon', 'Evening'] },
    };

    for (const [key, value] of Object.entries(preferences)) {
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        const label = document.createElement('label');
        label.setAttribute('for', key);
        label.textContent = value.label;

        const select = document.createElement('select');
        select.setAttribute('id', key);

        for (const option of value.options) {
            const optionElement = document.createElement('option');
            optionElement.setAttribute('value', option.toLowerCase());
            optionElement.textContent = option;
            select.appendChild(optionElement);
        }

        formGroup.appendChild(label);
        formGroup.appendChild(select);
        preferencesForm.appendChild(formGroup);
    }

    const generateButton = document.createElement('button');
    generateButton.setAttribute('type', 'submit');
    generateButton.textContent = 'Generate Itinerary';
    preferencesForm.appendChild(generateButton);

    const resetButton = document.createElement('button');
    resetButton.setAttribute('type', 'button');
    resetButton.textContent = 'Reset';
    preferencesForm.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        preferencesForm.querySelectorAll('select').forEach(select => {
            select.selectedIndex = 0;
        });
        timeline.innerHTML = '';
    });
}

function generateItinerary(preferences) {
    const filteredEvents = mockEvents.filter(event => {
        const interestMatch = event.category.toLowerCase() === preferences.interests.toLowerCase();
        
        const budget = preferences.budget.toLowerCase();
        const cost = event.cost.toLowerCase();

        let budgetMatch = false;
        if (budget === 'free') {
            budgetMatch = (cost === 'free');
        } else if (budget === 'budget') {
            budgetMatch = (cost === 'free' || cost === 'budget');
        } else if (budget === 'splurge') {
            budgetMatch = true; // Show all costs
        }

        return interestMatch && budgetMatch;
    });

    return filteredEvents;
}

function renderTimeline(itinerary, timeOfDay) {
    timeline.innerHTML = ''; // Clear previous timeline

    if (itinerary.length === 0) {
        timeline.innerHTML = '<p>No events found for your preferences. Please try a different combination!</p>';
        return;
    }

    let currentTime = new Date(); // Start from the current time
    if (timeOfDay === 'morning') {
        currentTime.setHours(9, 0, 0, 0); // Start the day at 9:00 AM
    } else if (timeOfDay === 'afternoon') {
        currentTime.setHours(13, 0, 0, 0); // Start at 1:00 PM
    } else if (timeOfDay === 'evening') {
        currentTime.setHours(18, 0, 0, 0); // Start at 6:00 PM
    }

    itinerary.forEach(event => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');

        const timelineContent = document.createElement('div');
        timelineContent.classList.add('timeline-content');

        const eventTime = document.createElement('p');
        const startTime = new Date(currentTime);
        const endTime = new Date(startTime.getTime() + event.duration * 60000);
        eventTime.textContent = `${startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
        currentTime = endTime;

        const eventName = document.createElement('h3');
        eventName.textContent = event.name;
        
        const eventDetails = document.createElement('p');
        eventDetails.textContent = `Cost: ${event.cost}`;

        timelineContent.appendChild(eventTime);
        timelineContent.appendChild(eventName);
        timelineContent.appendChild(eventDetails);
        timelineItem.appendChild(timelineContent);
        timeline.appendChild(timelineItem);
    });
}

preferencesForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const preferences = {
        interests: document.getElementById('interests').value,
        activityLevel: document.getElementById('activityLevel').value,
        budget: document.getElementById('budget').value,
        social: document.getElementById('social').value,
        location: document.getElementById('location').value,
        timeOfDay: document.getElementById('timeOfDay').value,
    };

    const itinerary = generateItinerary(preferences);
    renderTimeline(itinerary, preferences.timeOfDay);
});

// Theme toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Save preference to local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', 'light-mode');
    }
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark-mode') {
    document.body.classList.add('dark-mode');
}

createPreferencesForm();
