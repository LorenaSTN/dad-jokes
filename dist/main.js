"use strict";
(() => {
    const paragraph = document.querySelector(".p-js");
    const button = document.querySelector(".button-js");
    const darkModeButton = document.querySelector(".darkMode-js");
    // Api jokes
    const handleJoke = () => {
        if (!paragraph)
            return;
        fetch("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
            paragraph.innerHTML = `"${data.joke}"`;
        })
            .catch((error) => console.error("Error fetching the joke:", error));
    };
    button?.addEventListener("click", handleJoke);
    handleJoke();
    // Dark mode
    let darkModeEnabled = false;
    const handleDarkMode = () => {
        darkModeEnabled = !darkModeEnabled;
        if (darkModeEnabled) {
            enableDarkMode();
        }
        else {
            disableDarkMode();
        }
    };
    darkModeButton?.addEventListener("click", handleDarkMode);
    const enableDarkMode = () => {
        document.body.classList.add("dark-mode");
    };
    const disableDarkMode = () => {
        document.body.classList.remove("dark-mode");
    };
})();
