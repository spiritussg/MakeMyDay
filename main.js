document.addEventListener('DOMContentLoaded', () => {
    const preferencesForm = document.getElementById('preferences-form');
    const timeline = document.getElementById('timeline');
    const loadingAnimation = document.getElementById('loading-animation');
    const hoverSound = document.getElementById('hover-sound');

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
        name: '',
        interests: ['foodie', 'nature-lover', 'history-buff', 'art-enthusiast', 'tech-geek'],
        activityLevel: ['low', 'medium', 'high'],
        budget: ['free', 'affordable', 'moderate', 'expensive'],
        socialSetting: ['solo', 'group'],
        timeOfDay: ['morning', 'afternoon', 'evening'],
        location: suburbsInSingapore,
    };

    let currentStep = 0;
    const userSelections = {};
    const preferenceKeys = Object.keys(preferences);

    function renderStep() {
        preferencesForm.innerHTML = '';
        if (currentStep >= preferenceKeys.length) {
            generateItinerary(userSelections);
            return;
        }

        const key = preferenceKeys[currentStep];
        const preferenceValues = preferences[key];

        const group = document.createElement('div');
        group.classList.add('mb-4');

        const label = document.createElement('label');
        label.textContent = `What's your ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}?`;
        label.classList.add('block', 'font-headline-lg', 'text-on-primary', 'mb-4');
        group.appendChild(label);

        if (key === 'name') {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = key;
            input.name = key;
            input.placeholder = 'Enter your name';
            input.classList.add('w-full', 'bg-surface/10', 'border-b-2', 'border-on-primary-container/30', 'text-on-primary', 'py-3', 'px-4', 'font-body-lg', 'focus:outline-none', 'focus:border-on-primary', 'transition-all', 'placeholder:text-on-primary-container/50');
            group.appendChild(input);

            const nextButton = document.createElement('button');
            nextButton.textContent = 'Next';
            nextButton.classList.add('bg-primary', 'text-on-primary', 'px-8', 'py-4', 'rounded-full', 'font-label-md', 'hover:shadow-xl', 'transition-all', 'mt-4');
            group.appendChild(nextButton);

            nextButton.addEventListener('click', () => {
                userSelections[key] = input.value;
                currentStep++;
                renderStep();
            });
        } else {
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('flex', 'flex-wrap', 'gap-4');

            preferenceValues.forEach(option => {
                const card = document.createElement('div');
                card.classList.add('preference-card', 'bg-surface-container', 'text-on-surface', 'p-4', 'rounded-lg', 'cursor-pointer', 'hover:bg-secondary-container', 'transition-all');
                card.textContent = option.charAt(0).toUpperCase() + option.slice(1);

                card.addEventListener('click', () => {
                    userSelections[key] = option;
                    currentStep++;
                    renderStep();
                });

                cardContainer.appendChild(card);
            });

            group.appendChild(cardContainer);
        }

        preferencesForm.appendChild(group);
    }

    function getInterestIcon(interest) {
        switch (interest) {
            case 'foodie': return 'restaurant';
            case 'nature-lover': return 'eco';
            case 'history-buff': return 'museum';
            case 'art-enthusiast': return 'palette';
            case 'tech-geek': return 'laptop';
            default: return 'star';
        }
    }

    function getActivityLevelIcon(activityLevel) {
        switch (activityLevel) {
            case 'low': return 'directions_walk';
            case 'medium': return 'directions_bike';
            case 'high': return 'directions_run';
            default: return 'star';
        }
    }

    function generateActivity(selections, timeOfDay) {
        const name = selections.name || "adventurer";
        const activities = {
            morning: [
                {
                    title: `Morning Coffee in ${selections.location}`,
                    description: `Start your day with a visit to a renowned local coffee shop. Known for its aromatic, locally-roasted beans and cozy ambiance, it's the perfect spot to ease into your day.`,
                    icon: 'coffee',
                },
                {
                    title: `Sunrise Yoga at the Park`,
                    description: `Join a refreshing morning yoga session at a serene park in ${selections.location}. A perfect start for a day of exploration.`,
                    icon: 'self_improvement',
                },
                {
                    title: "Local Hawker Breakfast",
                    description: `Experience a traditional Singaporean breakfast at a bustling hawker center. Try local favorites like Kaya Toast, Soft-boiled Eggs, or Chwee Kueh.`,
                    icon: "restaurant",
                },
                {
                    title: "Morning Hike at MacRitchie Reservoir",
                    description: "Embark on a scenic hike through the lush rainforest of MacRitchie Reservoir. Enjoy the fresh air and spot some local wildlife.",
                    icon: "hiking",
                },
            ],
            afternoon: [
                {
                    title: `Explore the Local Market`,
                    description: `Immerse yourself in the local culture by visiting a bustling market in ${selections.location}. Discover unique crafts, fresh produce, and delicious street food.`,
                    icon: 'storefront',
                },
                {
                    title: `A ${selections.interests} Adventure`,
                    description: `Indulge your inner ${selections.interests} with a visit to a nearby attraction. Whether it's a state-of-the-art gallery for the art enthusiast or a historical landmark for the history buff, there's something for everyone.`,
                    icon: getInterestIcon(selections.interests),
                },
                {
                    title: "Cycle Along East Coast Park",
                    description: "Rent a bike and enjoy a leisurely cycle along the scenic coastline of East Coast Park. Stop for a refreshing coconut drink and enjoy the sea breeze.",
                    icon: "directions_bike",
                },
                {
                    title: "Indulge in a Peranakan Lunch",
                    description: "Savor the unique flavors of Peranakan cuisine at a traditional restaurant. Enjoy dishes like Ayam Buah Keluak and Babi Pongteh.",
                    icon: "restaurant_menu",
                },
            ],
            evening: [
                {
                    title: `Dinner at a Hidden Gem`,
                    description: `Discover a local secret and enjoy a delicious dinner at a hidden gem in ${selections.location}. Perfect for a ${selections.socialSetting} outing.`,
                    icon: 'restaurant',
                },
                {
                    title: `Live Music by the River`,
                    description: `End your day with some live music at a riverside bar in ${selections.location}. Enjoy the cool breeze and the vibrant atmosphere.`,
                    icon: 'music_note',
                },
                {
                    title: "Gardens by the Bay Light Show",
                    description: "Witness the spectacular Garden Rhapsody light and sound show at Gardens by the Bay. A mesmerizing experience to end your day.",
                    icon: "local_florist",
                },
                {
                    title: "Supper at a 24-Hour Eatery",
                    description: "Experience Singapore's late-night food culture with a delicious supper at a 24-hour eatery. From prata to dim sum, the options are endless.",
                    icon: "ramen_dining",
                },
            ]
        };
        const activityOptions = activities[timeOfDay];
        return activityOptions[Math.floor(Math.random() * activityOptions.length)];
    }

    function createTimelineItem(activity, time, selections) {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('mb-8', 'flex', 'gap-6', 'items-start', 'timeline-item');
        timelineItem.dataset.time = time;

        const iconContainer = document.createElement('div');
        iconContainer.classList.add('bg-primary-container', 'text-on-primary-container', 'rounded-full', 'p-4');
        const icon = document.createElement('span');
        icon.classList.add('material-symbols-outlined');
        icon.textContent = activity.icon;
        iconContainer.appendChild(icon);

        const contentContainer = document.createElement('div');
        contentContainer.classList.add('flex-1');

        const title = document.createElement('h3');
        title.classList.add('font-headline-lg', 'text-primary', 'mb-2');
        title.textContent = activity.title;

        const description = document.createElement('p');
        description.classList.add('font-body-md', 'text-on-surface-variant', 'mb-4');
        description.textContent = activity.description;

        const footer = document.createElement('div');
        footer.classList.add('flex', 'items-center', 'justify-between');

        const rating = document.createElement('div');
        rating.classList.add('flex', 'items-center', 'gap-2', 'font-label-md', 'text-secondary');
        const star = document.createElement('span');
        star.classList.add('material-symbols-outlined');
        star.textContent = 'star';
        rating.appendChild(star);
        rating.append((Math.random() * (5 - 4) + 4).toFixed(1));

        const swapButton = document.createElement('button');
        swapButton.innerHTML = `<span class="material-symbols-outlined mr-2">swap_horiz</span> Swap`;
        swapButton.classList.add('flex', 'items-center', 'bg-secondary-container', 'text-on-secondary-container', 'px-4', 'py-2', 'rounded-full', 'font-label-md', 'hover:shadow-lg', 'transition-all');
        swapButton.addEventListener('click', () => {
            const newActivity = generateActivity(selections, time.split(':')[0] < 12 ? 'morning' : time.split(':')[0] < 18 ? 'afternoon' : 'evening');
            const newTimelineItem = createTimelineItem(newActivity, time, selections);
            timelineItem.replaceWith(newTimelineItem);
        });

        footer.appendChild(rating);
        footer.appendChild(swapButton);

        contentContainer.appendChild(title);
        contentContainer.appendChild(description);
        contentContainer.appendChild(footer);

        timelineItem.appendChild(iconContainer);
        timelineItem.appendChild(contentContainer);

        return timelineItem;
    }

    function generateItinerary(selections) {
        loadingAnimation.classList.remove('hidden');
        timeline.innerHTML = '';

        setTimeout(() => {
            loadingAnimation.classList.add('hidden');

            const times = ['09:00', '14:00', '19:00'];

            times.forEach(time => {
                const timeOfDay = time.split(':')[0] < 12 ? 'morning' : time.split(':')[0] < 18 ? 'afternoon' : 'evening';
                const activity = generateActivity(selections, timeOfDay);
                const timelineItem = createTimelineItem(activity, time, selections);
                timeline.appendChild(timelineItem);
            });
        }, 2000);
    }

    renderStep();
});