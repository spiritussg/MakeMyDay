document.addEventListener('DOMContentLoaded', () => {
    const preferencesForm = document.getElementById('preferences-form');
    const timeline = document.getElementById('timeline');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const loadingAnimation = document.getElementById('loading-animation');
    const hoverSound = document.getElementById('hover-sound');

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

    // Hover sound effect
    const interactiveElements = document.querySelectorAll('button, select, input, a, #theme-toggle');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            hoverSound.play();
        });
    });

    // Event listener for form submission
    preferencesForm.addEventListener('submit', e => {
        e.preventDefault();
        loadingAnimation.style.display = 'block';
        timeline.innerHTML = '';

        setTimeout(() => {
            loadingAnimation.style.display = 'none';
            const formData = new FormData(preferencesForm);
            const userPreferences = {};
            for (const [key, value] of formData.entries()) {
                userPreferences[key] = value;
            }
            generateItinerary(userPreferences);
        }, 2000);
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

    function getInterestIcon(interest) {
        switch (interest) {
            case 'foodie': return 'fa-utensils';
            case 'nature-lover': return 'fa-tree';
            case 'history-buff': return 'fa-landmark';
            case 'art-enthusiast': return 'fa-palette';
            case 'tech-geek': return 'fa-laptop-code';
            default: return 'fa-star';
        }
    }

    function getActivityLevelIcon(activityLevel) {
        switch (activityLevel) {
            case 'low': return 'fa-person-walking';
            case 'medium': return 'fa-person-biking';
            case 'high': return 'fa-person-running';
            default: return 'fa-star';
        }
    }

    // Mock itinerary generation
    function generateItinerary(preferences) {
        const name = preferences.name || "adventurer";

        const mockEvents = [
            {
                time: '09:00',
                event: `Good morning, ${name}! Start your day in ${preferences.location} with a visit to a renowned local coffee shop. Known for its aromatic, locally-roasted beans and cozy ambiance, it's the perfect spot to ease into your day. Enjoy a traditional kaya toast set for a truly Singaporean breakfast experience.`,
                icon: 'fa-coffee',
                rating: 4.7
            },
            {
                time: '10:00',
                event: `Time for your inner ${preferences.interests} to rejoice! Head to a nearby attraction that caters to your passion. Whether it's a state-of-the-art gallery for the art enthusiast, a sprawling park for the nature lover, or a historical landmark for the history buff, there's something for everyone.`,
                icon: getInterestIcon(preferences.interests),
                rating: 4.8
            },
            {
                time: '12:00',
                event: `Recharge with a delicious and ${preferences.budget} lunch. ${preferences.location} offers a wide range of culinary delights, from bustling hawker centers to charming cafes. No matter your budget, you'll find a satisfying meal to fuel the rest of your day.`,
                icon: 'fa-utensils',
                rating: 4.6
            },
            {
                time: '14:00',
                event: `Embark on a ${preferences.activityLevel} afternoon adventure. For a high-energy outing, consider a scenic bike ride or a challenging hike. If you prefer a more relaxed pace, a leisurely stroll through a botanical garden or a visit to a local market might be the perfect fit.`,
                icon: getActivityLevelIcon(preferences.activityLevel),
                rating: 4.9
            },
            {
                time: '18:00',
                event: `As evening approaches, it's time for a memorable dinner. Whether you're dining ${preferences.socialSetting} or with a group, ${preferences.location} has a plethora of options. From trendy restaurants to hidden gems, you're sure to find the perfect spot to end your day.`,
                icon: 'fa-utensils',
                rating: 4.7
            },
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

            const details = document.createElement('div');
            details.classList.add('timeline-details');

            const icon = document.createElement('i');
            icon.classList.add('fas', item.icon, 'timeline-icon');

            const rating = document.createElement('span');
            rating.classList.add('timeline-rating');
            rating.innerHTML = `&starf; ${item.rating}`;

            details.appendChild(icon);
            details.appendChild(rating);

            timelineContent.appendChild(time);
            timelineContent.appendChild(event);
            timelineContent.appendChild(details);
            timelineItem.appendChild(timelineContent);
            timeline.appendChild(timelineItem);
        });
    }
});