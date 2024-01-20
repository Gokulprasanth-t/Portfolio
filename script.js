// script.js
var textElement = document.getElementById("text");
var texts = ["Student", "Ml Engineer", "Frontend Developer"];
var index = 0;

function changeText() {
  textElement.textContent = texts[index];
  index = (index + 1) % texts.length;
}

setInterval(changeText, 2000);
