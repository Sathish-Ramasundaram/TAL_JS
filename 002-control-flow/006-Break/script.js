const word = document.getElementById("word");
const message = document.getElementById("message");

function handleAction(action) {
  // Reset previous output
  word.textContent = "";
  message.textContent = "";

  switch (action) {
    case "a":
      word.textContent = "Apple 🍎";
      message.textContent = "You clicked A";
      break;

    case "b":
      word.textContent = "Banana 🍌";
      message.textContent = "You clicked B";
      break;

    case "c":
      word.textContent = "Cat 🐱";
      message.textContent = "You clicked C";
      break;

    default:
      message.textContent = "❌ Invalid action";
  }
}
