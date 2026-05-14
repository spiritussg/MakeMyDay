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

    function generateItinerary(selections) {
        loadingAnimation.classList.remove('hidden');
        timeline.innerHTML = '';

        setTimeout(() => {
            loadingAnimation.classList.add('hidden');
            const name = selections.name || "adventurer";

            const mockEvents = [
                {
                    time: '09:00',
                    event: `Good morning, ${name}! Start your day in ${selections.location} with a visit to a renowned local coffee shop. Known for its aromatic, locally-roasted beans and cozy ambiance, it's the perfect spot to ease into your day. Enjoy a traditional kaya toast set for a truly Singaporean breakfast experience.`,
                    icon: 'coffee',
                    rating: 4.7
                },
                {
                    time: '10:00',
                    event: `Time for your inner ${selections.interests} to rejoice! Head to a nearby attraction that caters to your passion. Whether it's a state-of-the-art gallery for the art enthusiast, a sprawling park for the nature lover, or a historical landmark for the history buff, there's something for everyone.`,
                    icon: getInterestIcon(selections.interests),
                    rating: 4.8
                },
                {
                    time: '12:00',
                    event: `Recharge with a delicious and ${selections.budget} lunch. ${selections.location} offers a wide range of culinary delights, from bustling hawker centers to charming cafes. No matter your budget, you'll find a satisfying meal to fuel the rest of your day.`,
                    icon: 'restaurant',
                    rating: 4.6
                },
                {
                    time: '14:00',
                    event: `Embark on a ${selections.activityLevel} afternoon adventure. For a high-energy outing, consider a scenic bike ride or a challenging hike. If you prefer a more relaxed pace, a leisurely stroll through a botanical garden or a visit to a local market might be the perfect fit.`,
                    icon: getActivityLevelIcon(selections.activityLevel),
                    rating: 4.9
                },
                {
                    time: '18:00',
                    event: `As evening approaches, it's time for a memorable dinner. Whether you're dining ${selections.socialSetting} or with a group, ${selections.location} has a plethora of options. From trendy restaurants to hidden gems, you're sure to find the perfect spot to end your day.`,
                    icon: 'restaurant',
                    rating: 4.7
                },
            ];

            mockEvents.forEach(item => {
                const timelineItem = document.createElement('div');
                timelineItem.classList.add('mb-8', 'flex', 'gap-6', 'items-start');

                const iconContainer = document.createElement('div');
                iconContainer.classList.add('bg-primary-container', 'text-on-primary-container', 'rounded-full', 'p-4');
                const icon = document.createElement('span');
                icon.classList.add('material-symbols-outlined');
                icon.textContent = item.icon;
                iconContainer.appendChild(icon);

                const contentContainer = document.createElement('div');
                contentContainer.classList.add('flex-1');

                const time = document.createElement('h3');
                time.classList.add('font-headline-lg', 'text-primary', 'mb-2');
                time.textContent = item.time;

                const event = document.createElement('p');
                event.classList.add('font-body-md', 'text-on-surface-variant', 'mb-4');
                event.textContent = item.event;

                const rating = document.createElement('div');
                rating.classList.add('flex', 'items-center', 'gap-2', 'font-label-md', 'text-secondary');
                const star = document.createElement('span');
                star.classList.add('material-symbols-outlined');
                star.textContent = 'star';
                rating.appendChild(star);
                rating.append(item.rating);

                contentContainer.appendChild(time);
                contentContainer.appendChild(event);
                contentContainer.appendChild(rating);
                timelineItem.appendChild(iconContainer);
                timelineItem.appendChild(contentContainer);
                timeline.appendChild(timelineItem);
            });
        }, 2000);
    }

    renderStep();
});