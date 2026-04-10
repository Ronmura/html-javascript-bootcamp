let showBtn = document.getElementById("showBtn");
let colourInput = document.getElementById("colourInput");
let result = document.getElementById("result");

showBtn.addEventListener("click", function () {
  let colour = colourInput.value.trim();

  if (colour === "") {
    result.textContent = "Please type a colour first.";
  } else {
    result.textContent = "Your favourite colour is " + colour + ".";
    
    // bonus: actually show the colour
    result.style.color = colour;
  }
});
