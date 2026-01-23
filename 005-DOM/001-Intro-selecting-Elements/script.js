const test = document.createElement('div');
test.textContent = 'Hello, DOM! (This text was added using JavaScript.)';
document.body.appendChild(test);

const test2 = document.createElement('div');
test2.textContent = 'This is another line added to the DOM at top.';
document.body.prepend(test2);

document.addEventListener("click", () => {
  console.log("Page clicked");
});

