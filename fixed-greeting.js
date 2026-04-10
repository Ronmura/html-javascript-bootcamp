let button = document.getElementById("greetBtn");
let nameBox = document.getElementById("username");
let output = document.getElementById("outputText");

function showGreeting() {
  let name = nameBox.value;

  if (name === "") {
    output.textContent = "Please enter your name";
  } else {
    output.textContent = "Hello, " + name + "!";
  }
}

button.addEventListener("click", showGreeting);
