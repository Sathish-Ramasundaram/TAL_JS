const travels = [
  "India",
  "Sri Lanka",
  "Pakistan",
  "Bangladesh",
  "Dubai",
  "America",
  "London"
];

function findAmerica() {
  const result = document.getElementById("result");

  let month = 0;
  let found = false;

  // while loop: search month by month
  while (month < travels.length) {
    if (travels[month] === "America") {
      result.textContent = "You traveled to America in month " + (month + 1);
      found = true;
      break;
    }
    month++;
  }

  if (!found) {  // !found means “found is false found === false
    result.textContent = "America not found in travel list";
  }
}
