// Dark/Light mode toggle
function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

// Dynamic button text change
function changeText(button) {
  if (button.innerText === "Click Me!") {
    button.innerText = "🎉 You Clicked Me!";
    alert("Hello! You just clicked the button 🚀");
  } else {
    button.innerText = "Click Me!";
  }
}
