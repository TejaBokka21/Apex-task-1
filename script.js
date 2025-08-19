function showMessage() {
  alert("🎉 Thanks for clicking the button!");
}

function submitForm() {
  const name = document.getElementById("nameInput").value;
  if (name.trim() === "") {
    alert("Please enter your name.");
  } else {
    alert(`Welcome, ${name}! Thanks for subscribing.`);
  }
}

document.getElementById("toggle-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
