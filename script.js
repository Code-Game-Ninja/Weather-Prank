function startPrank() {
    const locationInput = document.getElementById("location").value.trim();
    if (!locationInput) {
        showError("Please enter a location!");
        return;
    }

    // Hide input and logo with animation
    document.querySelector('.location-input').classList.add('animate__fadeOutUp');
    document.querySelector('.logo').classList.add('animate__fadeOut');

    setTimeout(() => {
        document.querySelector('.location-input').style.display = "none";
        document.querySelector('.logo').style.display = "none";
        document.querySelector('.loading-screen').classList.add('active');
        startLoadingSequence(locationInput);
    }, 500);
}

function startLoadingSequence(location) {
    const messages = [
        `Scanning satellites for ${location}...`,
        "Calibrating atmospheric sensors...",
        "Decrypting weather patterns...",
        "Syncing with ISS live feed...",
        "Generating 4D weather projection...",
        "Finalizing holographic display..."
    ];

    const loadingText = document.querySelector('.loading-text');
    const progressBar = document.querySelector('.loading-progress');
    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 20;

        if (progress >= 100) {
            clearInterval(interval);
            progress = 100; // Ensure it hits 100%
            setTimeout(() => completeLoading(location), 500);
        }

        progressBar.style.width = `${progress}%`;
        loadingText.textContent = messages[Math.floor(Math.random() * messages.length)];
    }, 800);
}

function completeLoading(location) {
    console.log("Loading complete, showing prank message...");

    document.querySelector('.loading-screen').classList.remove('active');

    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = "none";
        const prankMessage = document.querySelector('.prank-message');
        const weatherIcon = document.querySelector('.weather-icon');
        const icons = ['🌤️', '🌦️', '⛈️', '🌪️', '🌈'];

        // Funny prank messages
        const prankMessages = [
            `BREAKING NEWS, ${location.toUpperCase()}! 🚨 Scientists have finally invented the most accurate weather detector... IT'S YOUR EYES! 👀`,
            `Shocking Discovery! 🌍 The current weather in ${location.toUpperCase()} is... exactly what you see outside! 😂`,
            `Weather Prediction Complete: ☀️🌦️⛈️❄️🌪️ Just kidding! Go outside and find out yourself, ${location.toUpperCase()}! 🤣`,
            `Emergency Broadcast 🚨: The government has cut off weather data for ${location.toUpperCase()}. Only solution? OPEN A WINDOW! 😂`,
            `AI-powered, 8K ultra-HD, NASA-level weather report for ${location.toUpperCase()}... *drumroll please*... Just look outside! 🌍👀`
        ];

        weatherIcon.textContent = icons[Math.floor(Math.random() * icons.length)];
        document.getElementById('prank-title').textContent = `SURPRISE ${location.toUpperCase()}!`;
        document.getElementById('prank-message-text').textContent = prankMessages[Math.floor(Math.random() * prankMessages.length)];

        prankMessage.style.display = "flex";
        prankMessage.style.opacity = "1";
        prankMessage.classList.add('animate__zoomIn');

        console.log("Prank message should now be visible.");
    }, 500);
}

function reloadPage() {
    document.querySelector('.prank-message').classList.add('animate__zoomOut');
    setTimeout(() => location.reload(), 500);
}

function showError(message) {
    const inputGroup = document.querySelector('.input-group');
    const error = document.createElement('div');
    error.className = 'error-message animate__animated animate__headShake';
    error.textContent = message;

    inputGroup.appendChild(error);
    setTimeout(() => error.remove(), 3000);
}
