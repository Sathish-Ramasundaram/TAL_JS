const input = document.getElementById("input");
const typedWord = document.getElementById("typedWord");
const message = document.getElementById("message");

function display() {
  const text = input.value;

  // IF / ELSE used for decision making
  if (text === "") {
    message.textContent = "❌ Please enter a word to display";
    message.style.color = "red";
  } else {
    typedWord.textContent = text;

    message.textContent = "✅ Task added successfully";
    message.style.color = "green";

    input.value = "";
  }
}
