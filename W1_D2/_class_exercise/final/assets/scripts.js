function goToLinkedin() {
  window.open("https://www.linkedin.com/in/joao-morgado/", "_blank");
}

function changeBgColor() {
  const bgEl = document.getElementById("background");

  if (bgEl.classList.contains("blue")) {
    bgEl.classList.remove("blue");
    bgEl.classList.add("purple");
  } else {
    bgEl.classList.remove("purple");
    bgEl.classList.add("blue");
  }
}
