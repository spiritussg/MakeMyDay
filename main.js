document.addEventListener('DOMContentLoaded', () => {
    const preferencesForm = document.getElementById('preferences-form');
    const timeline = document.getElementById('timeline');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Mock data for suburbs in Singapore
    const suburbsInSingapore = [
        'Ang Mo Kio',
        'Bedok',
        'Bishan',
        'Bukit Batok',
        'Bukit Merah',
        'Bukit Panjang',
        'Bukit Timah',
        'Central Area',
        'Choa Chu Kang',
        'Clementi',
        'Geylang',
        'Hougang',
        'Jurong East',
        'Jurong West',
        'Kallang/Whampoa',
        'Marine Parade',
        'Pasir Ris',
        'Punggol',
        'Queenstown',
        'Sembawang',
        'Sengkang',
        'Serangoon',
        'Tampines',
        'Toa Payoh',
        'Woodlands',
        'Yishun',
    ];

    const preferences = {
        interests: ['foodie', 'nature-lover', 'history-buff', 'art-enthusiast', 'tech-geek'],
        activityLevel: ['low', 'medium', 'high'],
        budget: ['free', 'affordable', 'moderate', 'expensive'],
        socialSetting: ['solo', 'group'],
        timeOfDay: ['morning', 'afternoon', 'evening'],
        location: suburbsInSingapore,
    };

    // Create form elements
    for (const key in preferences) {
        const group = document.createElement('div');
        group.classList.add('form-group');

        const label = document.createElement('label');
        label.setAttribute('for', key);
        label.textContent = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

        const select = document.createElement('select');
        select.id = key;
        select.name = key;

        preferences[key].forEach(option => {
            const op = document.createElement('option');
            op.value = option;
            op.textContent = option.charAt(0).toUpperCase() + option.slice(1);
            select.appendChild(op);
        });

        group.appendChild(label);
        group.appendChild(select);
        preferencesForm.appendChild(group);
    }

    const generateButton = document.createElement('button');
    generateButton.type = 'submit';
    generateButton.textContent = 'Generate Itinerary';
    preferencesForm.appendChild(generateButton);

    const resetButton = document.createElement('button');
    resetButton.type = 'button';
    resetButton.textContent = 'Reset';
    resetButton.id = 'reset-button';
    preferencesForm.appendChild(resetButton);

    // Event listener for form submission
    preferencesForm.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(preferencesForm);
        const userPreferences = {};
        for (const [key, value] of formData.entries()) {
            userPreferences[key] = value;
        }
        generateItinerary(userPreferences);
    });

    // Event listener for reset button
    document.getElementById('reset-button').addEventListener('click', () => {
        preferencesForm.reset();
        timeline.innerHTML = '';
    });

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    // Mock itinerary generation
    function generateItinerary(preferences) {
        timeline.innerHTML = ''; // Clear previous itinerary

        const mockEvents = [
            { time: '09:00', event: `Grab a coffee at a local cafe in ${preferences.location}.` },
            { time: '10:00', event: `Visit the ${preferences.interests} spot.` },
            { time: '12:00', event: 'Enjoy a delicious lunch.' },
            { time: '14:00', event: `Explore the surroundings with a ${preferences.activityLevel} activity.` },
            { time: '18:00', event: 'Dinner with friends.' },
        ];

        mockEvents.forEach(item => {
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item');

            const timelineContent = document.createElement('div');
            timelineContent.classList.add('timeline-content');

            const time = document.createElement('h3');
            time.textContent = item.time;

            const event = document.createElement('p');
            event.textContent = item.event;

            timelineContent.appendChild(time);
            timelineContent.appendChild(event);
            timelineItem.appendChild(timelineContent);
            timeline.appendChild(timelineItem);
        });
    }
});