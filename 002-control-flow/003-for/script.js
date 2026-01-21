const items = [
  "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
  "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"
];

const list = document.getElementById("list");

function showFive() {
  showItems(5);
}

function showAll() {
  showItems(items.length);
}

function showItems(count) {
  // clear old list
  list.innerHTML = "";

  // for loop controls HOW MANY items to show
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li"); // createElement	Create element (memory)
    li.textContent = items[i];   // textContent	Add text
    list.appendChild(li); // appendChild	Show it on page
  }
}

