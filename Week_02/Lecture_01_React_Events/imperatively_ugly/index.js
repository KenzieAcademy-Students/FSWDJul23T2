// Step 1: Target the button
const btn = document.getElementById("interactable-button");

// Step 2: Define the action that should be taken when the event occurs
// This is called the event handler.
function alertOnClick(event) {
  alert("Thanks for clicking the useless button.");
}

// Step 3: Set up the event listener.
// We'll need to know the name of the event we're trying to listen for by passing
// a string as the first argument.
// Then pass the event handler as the 2nd argument
btn.addEventListener("click", alertOnClick);

const input = document.getElementById("focusable-input");

input.addEventListener("focus", (e) => e.target.classList.add("focused"));
input.addEventListener("blur", (e) => e.target.classList.remove("focused"));
