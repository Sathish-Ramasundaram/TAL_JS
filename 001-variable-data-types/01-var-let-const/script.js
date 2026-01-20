/* ---------------- const ---------------- */
/* Dictionary data should never be reassigned */
const dictionary = {
  apple: "A fruit",
  book: "A set of written pages",
  computer: "An electronic device",
  sun: "A star at the center of the solar system"
};

/* ---------------- var ---------------- */
/* Used to store result text (can be re-assigned, function scoped) */
var resultText = "";

/* ---------------- function ---------------- */
function searchWord() {

  /* ---------------- let ---------------- */
  /* Block-scoped variable, value changes each search */
  let word = document.getElementById("wordInput").value.toLowerCase();
  let resultElement = document.getElementById("result");

  if (dictionary[word]) {
    resultText = "Meaning: " + dictionary[word];
  } else {
    resultText = "Word not found in dictionary";
  }

  resultElement.textContent = resultText;
}
