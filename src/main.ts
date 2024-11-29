(() =>{

    const paragraph = document.querySelector<HTMLParagraphElement>(".p-js");
    const button = document.querySelector<HTMLButtonElement>(".button-js");
    const darkModeButton = document.querySelector<HTMLInputElement>(".darkMode-js");


// Api jokes


const handleJoke = (): void => {
  if (!paragraph) return;
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      paragraph.innerHTML = `"${data.joke}"`;
    })
    .catch((error) => console.error("Error fetching the joke:", error));
};

    button?.addEventListener("click", handleJoke)

    handleJoke();

// Dark mode

let darkModeEnabled = false;

const handleDarkMode = (): void => {
  darkModeEnabled = !darkModeEnabled
  if(darkModeEnabled){
    enableDarkMode()
  }else{
    disableDarkMode()
  }
};

darkModeButton?.addEventListener("click", handleDarkMode)

const enableDarkMode = (): void => {
  document.body.classList.add("dark-mode");
};

const disableDarkMode = (): void => {
  document.body.classList.remove("dark-mode");
};


})();



