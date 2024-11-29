(() =>{

  const paragraph = document.querySelector(".p-js");
  const button = document.querySelector(".button-js")

// Api jokes

  const handleJoke = () =>{
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
      "User-Agent": "My App (https://dadJokes.com)",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (paragraph) {
        paragraph.innerHTML = ` "${data.joke}"`;
      }
    })
    .catch((error) => console.error("Error:", error));
  }

    button?.addEventListener("click", handleJoke)

    handleJoke();

// Dark mode

let darkModeEnabled = false;

const darkModeButton = document.querySelector(".darkMode-js");

const handleDarkMode = () =>{
  darkModeEnabled = !darkModeEnabled

  if(darkModeEnabled){
    enableDarkMode()
  }else{
    disableDarkMode()
  }
}

darkModeButton?.addEventListener("click", handleDarkMode)

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
}

const disableDarkMode = () =>{
  document.body.classList.remove("dark-mode");
}

})();



