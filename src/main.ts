(() =>{

  const paragraph = document.querySelector(".p-js");
  const button = document.querySelector(".button-js")


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
        paragraph.innerHTML = data.joke;
      }
    })
    .catch((error) => console.error("Error:", error));
  }


    button?.addEventListener("click", handleJoke)

    handleJoke();
})();



