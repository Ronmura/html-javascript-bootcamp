let button = document.getElementById("greatBtn");
let nameBox = document.getElementById("userName");
let output = document.getElementById("outputText");

function showGreeting {
  let name = nameBox.value

  if (name == "") {
    output.innerHTML = "Please enter your name"
  else {
    output.innerHTML = "Hello, " + name + "!"
  }
}

button.addEventListner("click", showGreeting);
